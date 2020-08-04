// SPDX-License-Identifier: Apache-2.0

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

pragma solidity ^0.5.11;

import "./BisectionChallenge.sol";
import "./ChallengeUtils.sol";

import "../arch/OneStepProof.sol";

import "../libraries/MerkleLib.sol";

contract ExecutionChallenge is BisectionChallenge {
    using ChallengeUtils for ChallengeUtils.ExecutionAssertion;
    using Hashing for Value.Data;

    event BisectedAssertion(
        bytes32[] machineHashes,
        bytes32[] inboxHashes,
        bytes32[] messageAccs,
        bytes32[] logAccs,
        uint64[] outCounts,
        uint64[] gases,
        uint64 totalSteps,
        uint256 deadlineTicks
    );

    event OneStepProofCompleted();

    // Incorrect previous state
    string private constant BIS_INPLEN = "BIS_INPLEN";
    // Proof was incorrect
    string private constant OSP_PROOF = "OSP_PROOF";

    struct BisectAssertionData {
        bytes32[] machineHashes;
        bytes32[] inboxHashes;
        bytes32[] messageAccs;
        bytes32[] logAccs;
        uint64[] outCounts;
        uint64[] gases;
        uint64 totalSteps;
    }

    // @param inboxInsnIndex is 0 if the assertion didn't include an inbox instruction, and otherwise the index of the segment including it plus 1
    function bisectAssertion(
        bytes32[] memory _machineHashes,
        bytes32[] memory _inboxHashes,
        bytes32[] memory _messageAccs,
        bytes32[] memory _logAccs,
        uint64[] memory _outCounts,
        uint64[] memory _gases,
        uint64 _totalSteps
    ) public asserterAction {
        BisectAssertionData memory bisection = BisectAssertionData(
            _machineHashes,
            _inboxHashes,
            _messageAccs,
            _logAccs,
            _outCounts,
            _gases,
            _totalSteps
        );
        _bisectAssertion(bisection);
    }

    function _checkBisectionPrecondition(BisectAssertionData memory _data)
        private
        view
    {
        uint256 bisectionCount = _data.machineHashes.length - 1;
        require(bisectionCount + 1 == _data.inboxHashes.length, BIS_INPLEN);
        require(bisectionCount + 1 == _data.messageAccs.length, BIS_INPLEN);
        require(bisectionCount + 1 == _data.logAccs.length, BIS_INPLEN);
        require(bisectionCount == _data.gases.length, BIS_INPLEN);
        require(bisectionCount * 2 == _data.outCounts.length, BIS_INPLEN);
        uint64 totalGas = 0;
        uint64 totalMessageCount = 0;
        uint64 totalLogCount = 0;
        for (uint256 i = 0; i < bisectionCount; i++) {
            totalGas += _data.gases[i];
            totalMessageCount += _data.outCounts[i];
            totalLogCount += _data.outCounts[bisectionCount + i];
        }

        requireMatchesPrevState(
            ChallengeUtils
                .ExecutionAssertion(
                _data
                    .totalSteps,
                totalGas,
                _data.machineHashes[0],
                _data.machineHashes[bisectionCount],
                _data.inboxHashes[0],
                _data.inboxHashes[bisectionCount],
                _data.messageAccs[0],
                _data.messageAccs[bisectionCount],
                totalMessageCount,
                _data.logAccs[0],
                _data.logAccs[bisectionCount],
                totalLogCount
            )
                .hash()
        );
    }

    function _generateBisectionHash(
        BisectAssertionData memory data,
        uint32 stepCount,
        uint256 bisectionCount,
        uint256 i
    ) private pure returns (bytes32) {
        return
            ChallengeUtils
                .ExecutionAssertion(
                stepCount,
                data.gases[i],
                data.machineHashes[i],
                data.machineHashes[i + 1],
                data.inboxHashes[i],
                data.inboxHashes[i + 1],
                data.messageAccs[i],
                data.messageAccs[i + 1],
                data.outCounts[i],
                data.logAccs[i],
                data.logAccs[i + 1],
                data.outCounts[bisectionCount + i]
            )
                .hash();
    }

    function _emitBisectionEvent(BisectAssertionData memory data) private {
        emit BisectedAssertion(
            data.machineHashes,
            data.inboxHashes,
            data.messageAccs,
            data.logAccs,
            data.outCounts,
            data.gases,
            data.totalSteps,
            deadlineTicks
        );
    }

    function _bisectAssertion(BisectAssertionData memory _data) private {
        uint256 bisectionCount = _data.machineHashes.length - 1;
        _checkBisectionPrecondition(_data);
        bytes32[] memory hashes = new bytes32[](bisectionCount);
        hashes[0] = _generateBisectionHash(
            _data,
            uint32(firstSegmentSize(uint256(_data.totalSteps), bisectionCount)),
            bisectionCount,
            0
        );
        for (uint256 i = 1; i < bisectionCount; i++) {
            hashes[i] = _generateBisectionHash(
                _data,
                uint32(
                    otherSegmentSize(uint256(_data.totalSteps), bisectionCount)
                ),
                bisectionCount,
                i
            );
        }

        commitToSegment(hashes);
        asserterResponded();

        _emitBisectionEvent(_data);
    }

    function oneStepProof(
        bytes32 _afterInboxHash,
        bytes32 _firstMessage,
        bytes32 _firstLog,
        bytes memory _proof
    ) public asserterAction {
        OneStepProof.AssertionContext memory context = OneStepProof
            .initializeExecutionContext(
            _afterInboxHash,
            _firstMessage,
            _firstLog,
            _proof
        );

        OneStepProof.executeOp(context);
        // The one step proof already guarantees us that _firstMessage and _lastMessage
        // are either one or 0 messages apart and the same is true for logs. Therefore
        // we can infer the message count and log count based on whether the fields
        // are equal or not
        ChallengeUtils.ExecutionAssertion memory assertion = ChallengeUtils
            .ExecutionAssertion(
            1,
            context.gas,
            Machine.hash(context.startMachine),
            Machine.hash(context.afterMachine),
            context.inboxHash,
            _afterInboxHash,
            _firstMessage,
            context.messageAcc,
            _firstMessage == context.messageAcc ? 0 : 1,
            _firstLog,
            context.logAcc,
            _firstLog == context.logAcc ? 0 : 1
        );
        requireMatchesPrevState(assertion.hash());

        // require(
        //     _data.beforeHash == startMachine.hash(),
        //     string(abi.encodePacked("Proof had non matching start state: ", startMachine.toString(),
        //     " beforeHash = ", DebugPrint.bytes32string(_data.beforeHash), "\nstartMachine = ", DebugPrint.bytes32string(startMachine.hash())))
        // );

        // require(
        //     _data.afterHash == endMachine.hash(),
        //     string(abi.encodePacked("Proof had non matching end state: ", endMachine.toString(),
        //     " afterHash = ", DebugPrint.bytes32string(_data.afterHash), "\nendMachine = ", DebugPrint.bytes32string(endMachine.hash())))
        // );

        emit OneStepProofCompleted();
        _asserterWin();
    }
}
