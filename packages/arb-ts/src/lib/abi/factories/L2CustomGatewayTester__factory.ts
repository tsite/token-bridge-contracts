/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import { Contract, ContractFactory, Overrides } from '@ethersproject/contracts'

import type { L2CustomGatewayTester } from '../L2CustomGatewayTester'

export class L2CustomGatewayTester__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(overrides?: Overrides): Promise<L2CustomGatewayTester> {
    return super.deploy(overrides || {}) as Promise<L2CustomGatewayTester>
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  attach(address: string): L2CustomGatewayTester {
    return super.attach(address) as L2CustomGatewayTester
  }
  connect(signer: Signer): L2CustomGatewayTester__factory {
    return super.connect(signer) as L2CustomGatewayTester__factory
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): L2CustomGatewayTester {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as L2CustomGatewayTester
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: '_transferId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'InboundTransferFinalized',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: '_transferId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'OutboundTransferInitiated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'l1Address',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'l2Address',
        type: 'address',
      },
    ],
    name: 'TokenSet',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'bool',
        name: 'success',
        type: 'bool',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'callHookData',
        type: 'bytes',
      },
    ],
    name: 'TransferAndCallTriggered',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: '_id',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'TxToL1',
    type: 'event',
  },
  {
    inputs: [],
    name: 'STORAGE_GAP',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'l1ERC20',
        type: 'address',
      },
    ],
    name: 'calculateL2TokenAddress',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'counterpartGateway',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'exitNum',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'finalizeInboundTransfer',
    outputs: [
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'gasReserveIfCallRevert',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'getOutboundCalldata',
    outputs: [
      {
        internalType: 'bytes',
        name: 'outboundCalldata',
        type: 'bytes',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_l2Address',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'inboundEscrowAndCall',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_l1Counterpart',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_router',
        type: 'address',
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'l1ToL2Token',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_l1Token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'outboundTransfer',
    outputs: [
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_l1Token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_maxGas',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_gasPriceBid',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'outboundTransfer',
    outputs: [
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: 'l1Address',
        type: 'address[]',
      },
      {
        internalType: 'address[]',
        name: 'l2Address',
        type: 'address[]',
      },
    ],
    name: 'registerTokenFromL1',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
]

const _bytecode =
  '0x608060405234801561001057600080fd5b50611819806100206000396000f3fe6080604052600436106100b15760003560e01c80637b3a3c8b1161006f5780637b3a3c8b146103425780638a2dc014146103d0578063a0c76a9614610403578063a7e28d48146104dc578063d2ce7d651461050f578063d4f5532f146105a9578063f398744c14610674576100b1565b8062aa3a9b146100b6578063015234ab1461018f5780630f09eb51146101b65780632db09c1c146101cb5780632e567b36146101fc578063485cc95514610307575b600080fd5b3480156100c257600080fd5b5061018d600480360360a08110156100d957600080fd5b6001600160a01b0382358116926020810135926040820135831692606083013516919081019060a081016080820135600160201b81111561011957600080fd5b82018360208201111561012b57600080fd5b803590602001918460018302840111600160201b8311171561014c57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610689945050505050565b005b34801561019b57600080fd5b506101a4610883565b60408051918252519081900360200190f35b3480156101c257600080fd5b506101a4610889565b3480156101d757600080fd5b506101e061088f565b604080516001600160a01b039092168252519081900360200190f35b610292600480360360a081101561021257600080fd5b6001600160a01b03823581169260208101358216926040820135909216916060820135919081019060a081016080820135600160201b81111561025457600080fd5b82018360208201111561026657600080fd5b803590602001918460018302840111600160201b8311171561028757600080fd5b50909250905061089e565b6040805160208082528351818301528351919283929083019185019080838360005b838110156102cc5781810151838201526020016102b4565b50505050905090810190601f1680156102f95780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561031357600080fd5b5061018d6004803603604081101561032a57600080fd5b506001600160a01b0381358116916020013516610d32565b6102926004803603608081101561035857600080fd5b6001600160a01b03823581169260208101359091169160408201359190810190608081016060820135600160201b81111561039257600080fd5b8201836020820111156103a457600080fd5b803590602001918460018302840111600160201b831117156103c557600080fd5b509092509050610d40565b3480156103dc57600080fd5b506101e0600480360360208110156103f357600080fd5b50356001600160a01b0316610d52565b34801561040f57600080fd5b50610292600480360360a081101561042657600080fd5b6001600160a01b03823581169260208101358216926040820135909216916060820135919081019060a081016080820135600160201b81111561046857600080fd5b82018360208201111561047a57600080fd5b803590602001918460018302840111600160201b8311171561049b57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610d6d945050505050565b3480156104e857600080fd5b506101e0600480360360208110156104ff57600080fd5b50356001600160a01b0316610ee4565b610292600480360360c081101561052557600080fd5b6001600160a01b0382358116926020810135909116916040820135916060810135916080820135919081019060c0810160a0820135600160201b81111561056b57600080fd5b82018360208201111561057d57600080fd5b803590602001918460018302840111600160201b8311171561059e57600080fd5b509092509050610ef7565b3480156105b557600080fd5b5061018d600480360360408110156105cc57600080fd5b810190602081018135600160201b8111156105e657600080fd5b8201836020820111156105f857600080fd5b803590602001918460208302840111600160201b8311171561061957600080fd5b919390929091602081019035600160201b81111561063657600080fd5b82018360208201111561064857600080fd5b803590602001918460208302840111600160201b8311171561066957600080fd5b50909250905061110a565b34801561068057600080fd5b506101e061126f565b3330146106dd576040805162461bcd60e51b815260206004820152601f60248201527f4d696e742063616e206f6e6c792062652063616c6c65642062792073656c6600604482015290519081900360640190fd5b6106ef826001600160a01b031661127e565b610740576040805162461bcd60e51b815260206004820152601e60248201527f44657374696e6174696f6e206d757374206265206120636f6e74726163740000604482015290519081900360640190fd5b61074b858386611284565b6000610755610889565b5a039050805a116107975760405162461bcd60e51b815260040180806020018281038252602b8152602001806117b9602b913960400191505060405180910390fd5b826001600160a01b031663a4c0ed36828688866040518563ffffffff1660e01b815260040180846001600160a01b03166001600160a01b0316815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156108145781810151838201526020016107fc565b50505050905090810190601f1680156108415780820380516001836020036101000a031916815260200191505b50945050505050600060405180830381600088803b15801561086257600080fd5b5087f1158015610876573d6000803e3d6000fd5b5050505050505050505050565b60025481565b61c35090565b6000546001600160a01b031681565b60606108a933611301565b6108f5576040805162461bcd60e51b81526020600482015260186024820152774f4e4c595f434f554e544552504152545f4741544557415960401b604482015290519081900360640190fd5b6060808484604081101561090857600080fd5b810190602081018135600160201b81111561092257600080fd5b82018360208201111561093457600080fd5b803590602001918460018302840111600160201b8311171561095557600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295949360208101935035915050600160201b8111156109a757600080fd5b8201836020820111156109b957600080fd5b803590602001918460018302840111600160201b831117156109da57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920182905250979950929750610a2495508f94506113159350505050565b9050610a38816001600160a01b031661127e565b610a71576000610a4c8b838c8c8c89611333565b90508015610a6f5760405180602001604052806000815250945050505050610d28565b505b815115610c67576000306001600160a01b031662aa3a9b838a8d8d886040518663ffffffff1660e01b815260040180866001600160a01b03166001600160a01b03168152602001858152602001846001600160a01b03166001600160a01b03168152602001836001600160a01b03166001600160a01b0316815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610b27578181015183820152602001610b0f565b50505050905090810190601f168015610b545780820380516001836020036101000a031916815260200191505b509650505050505050600060405180830381600087803b158015610b7757600080fd5b505af1925050508015610b88575060015b610b9c57610b97828b8a611284565b610ba0565b5060015b886001600160a01b03168a6001600160a01b03167f11ff8525c5d96036231ee652c108808dee4c40728a6117830a75029298bb7de6838b87604051808415151515815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610c25578181015183820152602001610c0d565b50505050905090810190601f168015610c525780820380516001836020036101000a031916815260200191505b5094505050505060405180910390a350610c72565b610c72818989611284565b806001600160a01b0316886001600160a01b03168a6001600160a01b03167f179a84706122b1b806f7d61c28c5caef276b7ff474ae596df3cad4bbaf0eb97d8d8b8b8b60405180856001600160a01b03166001600160a01b03168152602001848152602001806020018281038252848482818152602001925080828437600083820152604051601f909101601f191690920182900397509095505050505050a46040518060200160405280600081525093505050505b9695505050505050565b610d3c828261135f565b5050565b6060610d288686866000808888610ef7565b6003602052600090815260409020546001600160a01b031681565b6060632e567b3660e01b86868686600254876040516020018083815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610dc5578181015183820152602001610dad565b50505050905090810190601f168015610df25780820380516001836020036101000a031916815260200191505b5060408051601f19818403018152908290526001600160a01b03808b16602484019081528a8216604485015290891660648401526084830188905260a060a48401908152825160c48501528251929750909550935060e49091019150602085019080838360005b83811015610e71578181015183820152602001610e59565b50505050905090810190601f168015610e9e5780820380516001836020036101000a031916815260200191505b5060408051601f198184030181529190526020810180516001600160e01b03166001600160e01b0319909a16999099179098525095965050505050505095945050505050565b6000610eef82611315565b90505b919050565b60603415610f37576040805162461bcd60e51b81526020600482015260086024820152674e4f5f56414c554560c01b604482015290519081900360640190fd5b60006060610f7a85858080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061136992505050565b91509150600080610f8a8c611315565b9050610f9e816001600160a01b031661127e565b610fe4576040805162461bcd60e51b81526020600482015260126024820152711513d2d15397d393d517d111541313d6515160721b604482015290519081900360640190fd5b610fef81858c61145c565b610ffc8c858d8d876114bc565b915050600260008154809291906001019190505550808a6001600160a01b0316846001600160a01b03167f9c003a9d1163eca79021710dcd5d9f657218bf2bd67aaa13389009a6047894a88e8d8760405180846001600160a01b03166001600160a01b0316815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156110a557818101518382015260200161108d565b50505050905090810190601f1680156110d25780820380516001836020036101000a031916815260200191505b5094505050505060405180910390a46040805160208082019390935281518082039093018352810190529a9950505050505050505050565b61111333611301565b61115f576040805162461bcd60e51b81526020600482015260186024820152774f4e4c595f434f554e544552504152545f4741544557415960401b604482015290519081900360640190fd5b60005b838110156112685782828281811061117657fe5b905060200201356001600160a01b03166003600087878581811061119657fe5b905060200201356001600160a01b03166001600160a01b03166001600160a01b0316815260200190815260200160002060006101000a8154816001600160a01b0302191690836001600160a01b031602179055508282828181106111f657fe5b905060200201356001600160a01b03166001600160a01b031685858381811061121b57fe5b905060200201356001600160a01b03166001600160a01b03167f0dd664a155dd89526bb019e22b00291bb7ca9d07ba3ec4a1a76b410da9797ceb60405160405180910390a3600101611162565b5050505050565b6001546001600160a01b031681565b3b151590565b826001600160a01b0316638c2a993e83836040518363ffffffff1660e01b815260040180836001600160a01b03166001600160a01b0316815260200182815260200192505050600060405180830381600087803b1580156112e457600080fd5b505af11580156112f8573d6000803e3d6000fd5b50505050505050565b6000546001600160a01b0390811691161490565b6001600160a01b039081166000908152600360205260409020541690565b600061135187308786604051806020016040528060008152506114bc565b506001979650505050505050565b610d3c82826114d6565b60006060611376336114e0565b156114515782806020019051604081101561139057600080fd5b815160208301805160405192949293830192919084600160201b8211156113b657600080fd5b9083019060208201858111156113cb57600080fd5b8251600160201b8111828201881017156113e457600080fd5b82525081516020918201929091019080838360005b838110156114115781810151838201526020016113f9565b50505050905090810190601f16801561143e5780820380516001836020036101000a031916815260200191505b5060405250929450909250611457915050565b50339050815b915091565b826001600160a01b03166374f4f54783836040518363ffffffff1660e01b815260040180836001600160a01b03166001600160a01b0316815260200182815260200192505050600060405180830381600087803b1580156112e457600080fd5b6000610d288560006114d18989898989610d6d565b6115ec565b610d3c828261160f565b60408051600481526024810182526020810180516001600160e01b03166363851c3160e01b1781529151815160009384936060936001600160a01b03881693919290918291908083835b602083106115495780518252601f19909201916020918201910161152a565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855afa9150503d80600081146115a9576040519150601f19603f3d011682016040523d82523d6000602084013e6115ae565b606091505b50915091506115c5846001600160a01b031661127e565b6115d457600092505050610ef2565b816115e457600092505050610ef2565b519392505050565b6000805461160790849086906001600160a01b0316856116d0565b949350505050565b6001600160a01b038216611660576040805162461bcd60e51b81526020600482015260136024820152721253959053125117d0d3d55395115494105495606a1b604482015290519081900360640190fd5b6000546001600160a01b0316156116ad576040805162461bcd60e51b815260206004820152600c60248201526b1053149150511657d253925560a21b604482015290519081900360640190fd5b50600080546001600160a01b0319166001600160a01b0392909216919091179055565b60006116de858585856116e7565b95945050505050565b6000806060846001600160a01b031687856040518082805190602001908083835b602083106117275780518252601f199092019160209182019101611708565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114611789576040519150601f19603f3d011682016040523d82523d6000602084013e61178e565b606091505b509150915081600081146117a1576117a9565b815160208301fd5b5061053997965050505050505056fe4d696e7420616e642063616c6c20676173206c6566742063616c63756c6174696f6e20756e6465666c6f77a26469706673582212209041a9e9885729ef9fcc2fea0fd20694c0c8baf4bffeac529e16e46c37df0d0764736f6c634300060b0033'
