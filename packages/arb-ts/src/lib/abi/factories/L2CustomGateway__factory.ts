/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import { Contract, ContractFactory, Overrides } from '@ethersproject/contracts'

import type { L2CustomGateway } from '../L2CustomGateway'

export class L2CustomGateway__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(overrides?: Overrides): Promise<L2CustomGateway> {
    return super.deploy(overrides || {}) as Promise<L2CustomGateway>
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  attach(address: string): L2CustomGateway {
    return super.attach(address) as L2CustomGateway
  }
  connect(signer: Signer): L2CustomGateway__factory {
    return super.connect(signer) as L2CustomGateway__factory
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): L2CustomGateway {
    return new Contract(address, _abi, signerOrProvider) as L2CustomGateway
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
    stateMutability: 'nonpayable',
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
        internalType: 'contract IArbToken',
        name: 'token',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'dest',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'mintAndCall',
    outputs: [],
    stateMutability: 'nonpayable',
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
        internalType: 'address',
        name: 'l1Address',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'l2Address',
        type: 'address',
      },
    ],
    name: 'registerTokenFromL1',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'router',
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
]

const _bytecode =
  '0x608060405234801561001057600080fd5b5061169a806100206000396000f3fe6080604052600436106100a75760003560e01c80638a2dc014116100645780638a2dc01414610322578063a0c76a9614610355578063a7e28d481461042e578063d2ce7d6514610461578063db70cf6e146104fb578063f887ea40146105d2576100a7565b8063015234ab146100ac5780630e8dde73146100d35780632db09c1c146101105780632e567b3614610141578063485cc955146102595780637b3a3c8b14610294575b600080fd5b3480156100b857600080fd5b506100c16105e7565b60408051918252519081900360200190f35b3480156100df57600080fd5b5061010e600480360360408110156100f657600080fd5b506001600160a01b03813581169160200135166105ed565b005b34801561011c57600080fd5b5061012561066f565b604080516001600160a01b039092168252519081900360200190f35b34801561014d57600080fd5b506101e4600480360360a081101561016457600080fd5b6001600160a01b03823581169260208101358216926040820135909216916060820135919081019060a081016080820135600160201b8111156101a657600080fd5b8201836020820111156101b857600080fd5b803590602001918460018302840111600160201b831117156101d957600080fd5b50909250905061067e565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561021e578181015183820152602001610206565b50505050905090810190601f16801561024b5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561026557600080fd5b5061010e6004803603604081101561027c57600080fd5b506001600160a01b0381358116916020013516610bed565b6101e4600480360360808110156102aa57600080fd5b6001600160a01b03823581169260208101359091169160408201359190810190608081016060820135600160201b8111156102e457600080fd5b8201836020820111156102f657600080fd5b803590602001918460018302840111600160201b8311171561031757600080fd5b509092509050610bfb565b34801561032e57600080fd5b506101256004803603602081101561034557600080fd5b50356001600160a01b0316610c0d565b34801561036157600080fd5b506101e4600480360360a081101561037857600080fd5b6001600160a01b03823581169260208101358216926040820135909216916060820135919081019060a081016080820135600160201b8111156103ba57600080fd5b8201836020820111156103cc57600080fd5b803590602001918460018302840111600160201b831117156103ed57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610c28945050505050565b34801561043a57600080fd5b506101256004803603602081101561045157600080fd5b50356001600160a01b0316610d9f565b6101e4600480360360c081101561047757600080fd5b6001600160a01b0382358116926020810135909116916040820135916060810135916080820135919081019060c0810160a0820135600160201b8111156104bd57600080fd5b8201836020820111156104cf57600080fd5b803590602001918460018302840111600160201b831117156104f057600080fd5b509092509050610df7565b34801561050757600080fd5b5061010e600480360360a081101561051e57600080fd5b6001600160a01b0382358116926020810135926040820135831692606083013516919081019060a081016080820135600160201b81111561055e57600080fd5b82018360208201111561057057600080fd5b803590602001918460018302840111600160201b8311171561059157600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550611085945050505050565b3480156105de57600080fd5b506101256112ec565b60025481565b6105f56112fb565b610641576040805162461bcd60e51b81526020600482015260186024820152774f4e4c595f434f554e544552504152545f4741544557415960401b604482015290519081900360640190fd5b6001600160a01b03918216600090815260036020526040902080546001600160a01b03191691909216179055565b6000546001600160a01b031681565b60606106886112fb565b6106d4576040805162461bcd60e51b81526020600482015260186024820152774f4e4c595f434f554e544552504152545f4741544557415960401b604482015290519081900360640190fd5b606080848460408110156106e757600080fd5b810190602081018135600160201b81111561070157600080fd5b82018360208201111561071357600080fd5b803590602001918460018302840111600160201b8311171561073457600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295949360208101935035915050600160201b81111561078657600080fd5b82018360208201111561079857600080fd5b803590602001918460018302840111600160201b831117156107b957600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092018290525097995092975061080395508f945061130c9350505050565b9050610817816001600160a01b031661132a565b61084d5760006108288b8386611330565b9050801561084b5760405180602001604052806000815250945050505050610be3565b505b8151819015610ab3576000306001600160a01b031663db70cf6e838b8e8e896040518663ffffffff1660e01b815260040180866001600160a01b03166001600160a01b03168152602001858152602001846001600160a01b03166001600160a01b03168152602001836001600160a01b03166001600160a01b0316815260200180602001828103825283818151815260200191508051906020019080838360005b838110156109065781810151838201526020016108ee565b50505050905090810190601f1680156109335780820380516001836020036101000a031916815260200191505b509650505050505050600060405180830381600087803b15801561095657600080fd5b505af1925050508015610967575060015b6109e857816001600160a01b0316638c2a993e8c8b6040518363ffffffff1660e01b815260040180836001600160a01b03166001600160a01b0316815260200182815260200192505050600060405180830381600087803b1580156109cb57600080fd5b505af11580156109df573d6000803e3d6000fd5b505050506109ec565b5060015b896001600160a01b03168b6001600160a01b03167f11ff8525c5d96036231ee652c108808dee4c40728a6117830a75029298bb7de6838c88604051808415151515815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610a71578181015183820152602001610a59565b50505050905090810190601f168015610a9e5780820380516001836020036101000a031916815260200191505b5094505050505060405180910390a350610b2c565b806001600160a01b0316638c2a993e8a8a6040518363ffffffff1660e01b815260040180836001600160a01b03166001600160a01b0316815260200182815260200192505050600060405180830381600087803b158015610b1357600080fd5b505af1158015610b27573d6000803e3d6000fd5b505050505b816001600160a01b0316896001600160a01b03168b6001600160a01b03167f179a84706122b1b806f7d61c28c5caef276b7ff474ae596df3cad4bbaf0eb97d8e8c8c8c60405180856001600160a01b03166001600160a01b03168152602001848152602001806020018281038252848482818152602001925080828437600083820152604051601f909101601f191690920182900397509095505050505050a4604051806020016040528060008152509450505050505b9695505050505050565b610bf78282611371565b5050565b6060610be38686866000808888610df7565b6003602052600090815260409020546001600160a01b031681565b6060632e567b3660e01b86868686600254876040516020018083815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610c80578181015183820152602001610c68565b50505050905090810190601f168015610cad5780820380516001836020036101000a031916815260200191505b5060408051601f19818403018152908290526001600160a01b03808b16602484019081528a8216604485015290891660648401526084830188905260a060a48401908152825160c48501528251929750909550935060e49091019150602085019080838360005b83811015610d2c578181015183820152602001610d14565b50505050905090810190601f168015610d595780820380516001836020036101000a031916815260200191505b5060408051601f198184030181529190526020810180516001600160e01b03166001600160e01b0319909a16999099179098525095965050505050505095945050505050565b6000610da961137b565b610de8576040805162461bcd60e51b815260206004820152600b60248201526a27a7262cafa927aaaa22a960a91b604482015290519081900360640190fd5b610df18261130c565b92915050565b60603415610e37576040805162461bcd60e51b81526020600482015260086024820152674e4f5f56414c554560c01b604482015290519081900360640190fd5b60006060610e7a85858080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061138c92505050565b91509150600080610e8a8c61130c565b9050610e9e816001600160a01b031661132a565b610ee4576040805162461bcd60e51b81526020600482015260126024820152711513d2d15397d393d517d111541313d6515160721b604482015290519081900360640190fd5b806001600160a01b03166374f4f547858c6040518363ffffffff1660e01b815260040180836001600160a01b03166001600160a01b0316815260200182815260200192505050600060405180830381600087803b158015610f4457600080fd5b505af1158015610f58573d6000803e3d6000fd5b505050506060610f6b8d868e8e88610c28565b9050610f768161147e565b92505050600260008154809291906001019190505550808a6001600160a01b0316846001600160a01b03167f9c003a9d1163eca79021710dcd5d9f657218bf2bd67aaa13389009a6047894a88e8d8760405180846001600160a01b03166001600160a01b0316815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015611020578181015183820152602001611008565b50505050905090810190601f16801561104d5780820380516001836020036101000a031916815260200191505b5094505050505060405180910390a46040805160208082019390935281518082039093018352810190529a9950505050505050505050565b3330146110d9576040805162461bcd60e51b815260206004820152601f60248201527f4d696e742063616e206f6e6c792062652063616c6c65642062792073656c6600604482015290519081900360640190fd5b6110eb826001600160a01b031661132a565b61113c576040805162461bcd60e51b815260206004820152601e60248201527f44657374696e6174696f6e206d757374206265206120636f6e74726163740000604482015290519081900360640190fd5b846001600160a01b0316638c2a993e83866040518363ffffffff1660e01b815260040180836001600160a01b03166001600160a01b0316815260200182815260200192505050600060405180830381600087803b15801561119c57600080fd5b505af11580156111b0573d6000803e3d6000fd5b5050505060006111be611567565b5a039050805a116112005760405162461bcd60e51b815260040180806020018281038252602b81526020018061163a602b913960400191505060405180910390fd5b826001600160a01b031663a4c0ed36828688866040518563ffffffff1660e01b815260040180846001600160a01b03166001600160a01b0316815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561127d578181015183820152602001611265565b50505050905090810190601f1680156112aa5780820380516001836020036101000a031916815260200191505b50945050505050600060405180830381600088803b1580156112cb57600080fd5b5087f11580156112df573d6000803e3d6000fd5b5050505050505050505050565b6001546001600160a01b031681565b6000546001600160a01b0316331490565b6001600160a01b039081166000908152600360205260409020541690565b3b151590565b6040805162461bcd60e51b815260206004820152600f60248201526e2727afa1aaa9aa27a6afaa27a5a2a760891b6044820152905160019181900360640190fd5b610bf7828261156d565b6001546001600160a01b0316331490565b6000606061139861137b565b15611473578280602001905160408110156113b257600080fd5b815160208301805160405192949293830192919084600160201b8211156113d857600080fd5b9083019060208201858111156113ed57600080fd5b8251600160201b81118282018810171561140657600080fd5b82525081516020918201929091019080838360005b8381101561143357818101518382015260200161141b565b50505050905090810190601f1680156114605780820380516001836020036101000a031916815260200191505b5060405250929450909250611479915050565b50339050815b915091565b60008054604080516349460b4d60e11b81526001600160a01b039092166004830181815260248401928352855160448501528551859460649463928c169a94938993909287019060208501908083838c5b838110156114e75781810151838201526020016114cf565b50505050905090810190601f1680156115145780820380516001836020036101000a031916815260200191505b509350505050602060405180830381600087803b15801561153457600080fd5b505af1158015611548573d6000803e3d6000fd5b505050506040513d602081101561155e57600080fd5b50519392505050565b6109c490565b6001600160a01b0382166115be576040805162461bcd60e51b81526020600482015260136024820152721253959053125117d0d3d55395115494105495606a1b604482015290519081900360640190fd5b6000546001600160a01b03161561160b576040805162461bcd60e51b815260206004820152600c60248201526b1053149150511657d253925560a21b604482015290519081900360640190fd5b600080546001600160a01b039384166001600160a01b0319918216179091556001805492909316911617905556fe4d696e7420616e642063616c6c20676173206c6566742063616c63756c6174696f6e20756e6465666c6f77a26469706673582212203bd2c63aa2c124a18aadac7917ef0696b22004f48e76402b87a166169c915d6964736f6c634300060b0033'
