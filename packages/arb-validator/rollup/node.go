/*
* Copyright 2019-2020, Offchain Labs, Inc.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
 */

package rollup

import (
	"math/big"

	"github.com/offchainlabs/arbitrum/packages/arb-util/value"

	"github.com/offchainlabs/arbitrum/packages/arb-util/protocol"
	"github.com/offchainlabs/arbitrum/packages/arb-util/utils"
	"github.com/offchainlabs/arbitrum/packages/arb-validator/structures"

	solsha3 "github.com/miguelmota/go-solidity-sha3"
	"github.com/offchainlabs/arbitrum/packages/arb-util/machine"
)

type ExecutionNodeData struct {
}

type Node struct {
	prev        *Node
	deadline    structures.TimeTicks
	disputable  *structures.DisputableNode
	linkType    structures.ChildType
	vmProtoData *structures.VMProtoData

	machine   machine.Machine // nil if unknown
	depth     uint64
	innerHash [32]byte
	hash      [32]byte

	hasSuccessors   bool
	successorHashes [structures.MaxChildType + 1][32]byte
	numStakers      uint64
}

func NewInitialNode(
	machine machine.Machine,
) *Node {
	ret := &Node{
		prev:       nil,
		deadline:   structures.TimeTicks{big.NewInt(0)},
		disputable: nil,
		linkType:   0,
		vmProtoData: structures.NewVMProtoData(
			machine.Hash(),
			value.NewEmptyTuple().Hash(),
			value.NewEmptyTuple().Hash(),
			big.NewInt(0),
		),
		machine: machine,
		depth:   0,
	}
	ret.setHash([32]byte{})
	return ret
}

func NewNodeFromValidPrev(
	prev *Node,
	disputable *structures.DisputableNode,
	machine machine.Machine,
	params structures.ChainParams,
	currentTime *protocol.TimeBlocks,
) *Node {
	return NewNodeFromPrev(
		prev,
		disputable,
		structures.ValidChildType,
		params,
		currentTime,
		disputable.ValidAfterVMProtoData(prev.vmProtoData),
		machine,
	)
}

func NewNodeFromInvalidPrev(
	prev *Node,
	disputable *structures.DisputableNode,
	kind structures.ChildType,
	params structures.ChainParams,
	currentTime *protocol.TimeBlocks,
) *Node {
	return NewNodeFromPrev(
		prev,
		disputable,
		kind,
		params,
		currentTime,
		prev.vmProtoData,
		prev.machine,
	)
}

func NewNodeFromPrev(
	prev *Node,
	disputable *structures.DisputableNode,
	kind structures.ChildType,
	params structures.ChainParams,
	currentTime *protocol.TimeBlocks,
	vmProtoData *structures.VMProtoData,
	machine machine.Machine,
) *Node {
	ret := &Node{
		prev:        prev,
		deadline:    structures.TimeTicks{},
		disputable:  disputable,
		linkType:    kind,
		vmProtoData: vmProtoData,
		machine:     machine,
		depth:       prev.depth + 1,
	}
	ret.setHash(disputable.NodeDataHash(
		params,
		vmProtoData,
		prev.deadline,
		kind,
		currentTime,
	))
	prev.successorHashes[kind] = ret.hash
	return ret
}

func (node1 *Node) Equals(node2 *Node) bool {
	return node1.hash == node2.hash
}

func (node *Node) setHash(
	nodeDataHash [32]byte,
) {
	var prevHashArr [32]byte
	if node.prev != nil {
		prevHashArr = node.prev.hash
	}
	innerHash := solsha3.SoliditySHA3(
		solsha3.Bytes32(node.vmProtoData.Hash()),
		solsha3.Int256(node.deadline),
		solsha3.Bytes32(nodeDataHash),
		solsha3.Int256(node.linkType),
	)
	hashSlice := solsha3.SoliditySHA3(
		solsha3.Bytes32(prevHashArr),
		solsha3.Bytes32(innerHash),
	)
	copy(node.innerHash[:], innerHash)
	copy(node.hash[:], hashSlice)
}

func (node *Node) MarshalToBuf() *NodeBuf {
	if node.machine != nil {
		//TODO: marshal node.machine
	}
	return &NodeBuf{
		Depth:          node.depth,
		DisputableNode: node.disputable.MarshalToBuf(),
		VmProtoData:    node.vmProtoData.MarshalToBuf(),
		LinkType:       uint32(node.linkType),
		PrevHash:       utils.MarshalHash(node.prev.hash),
		InnerHash:      utils.MarshalHash(node.innerHash),
		Hash:           utils.MarshalHash(node.hash),
	}
}

func (buf *NodeBuf) Unmarshal(chain *ChainObserver) (*Node, [32]byte) {
	prevHashArr := utils.UnmarshalHash(buf.PrevHash)
	node := &Node{
		prev:        nil,
		deadline:    structures.TimeTicks{big.NewInt(0)},
		disputable:  buf.DisputableNode.Unmarshal(),
		linkType:    structures.ChildType(buf.LinkType),
		vmProtoData: buf.VmProtoData.Unmarshal(),
		machine:     nil,
		depth:       buf.Depth,
		innerHash:   utils.UnmarshalHash(buf.InnerHash),
		hash:        utils.UnmarshalHash(buf.Hash),
	}

	//TODO: try to retrieve machine from checkpoint DB; might fail
	chain.nodeFromHash[node.hash] = node

	// can't set up prev and successorHash fields yet; return prevHashArr so caller can do this later
	return node, prevHashArr
}

func GeneratePathProof(from, to *Node) [][32]byte {
	// returns nil if no proof exists
	if to == nil {
		return nil
	}
	if from == to {
		return [][32]byte{}
	}
	sub := GeneratePathProof(from, to.prev)
	if sub == nil {
		return nil
	}
	return append(sub, to.innerHash)
}

func GenerateConflictProof(from, to1, to2 *Node) ([][32]byte, [][32]byte) {
	// returns nil, nil if no proof exists
	proof1 := GeneratePathProof(from, to1)
	proof2 := GeneratePathProof(from, to2)
	if proof1 == nil || proof2 == nil || len(proof1) == 0 || len(proof2) == 0 || proof1[0] == proof2[0] {
		return nil, nil
	} else {
		return proof1, proof2
	}
}

func (n *Node) EqualsFull(n2 *Node) bool {
	return n.Equals(n2) &&
		n.depth == n2.depth &&
		n.vmProtoData.Equals(n2.vmProtoData) &&
		n.linkType == n2.linkType &&
		n.hasSuccessors == n2.hasSuccessors &&
		n.successorHashes == n2.successorHashes &&
		n.numStakers == n2.numStakers
}
