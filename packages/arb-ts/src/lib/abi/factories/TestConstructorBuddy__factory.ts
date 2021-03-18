/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, BytesLike, BigNumberish } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import {
  Contract,
  ContractFactory,
  PayableOverrides,
} from '@ethersproject/contracts'

import type { TestConstructorBuddy } from '../TestConstructorBuddy'

export class TestConstructorBuddy__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(
    _inbox: string,
    _l2Deployer: string,
    _maxGas: BigNumberish,
    _gasPrice: BigNumberish,
    _deployCode: BytesLike,
    overrides?: PayableOverrides
  ): Promise<TestConstructorBuddy> {
    return super.deploy(
      _inbox,
      _l2Deployer,
      _maxGas,
      _gasPrice,
      _deployCode,
      overrides || {}
    ) as Promise<TestConstructorBuddy>
  }
  getDeployTransaction(
    _inbox: string,
    _l2Deployer: string,
    _maxGas: BigNumberish,
    _gasPrice: BigNumberish,
    _deployCode: BytesLike,
    overrides?: PayableOverrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      _inbox,
      _l2Deployer,
      _maxGas,
      _gasPrice,
      _deployCode,
      overrides || {}
    )
  }
  attach(address: string): TestConstructorBuddy {
    return super.attach(address) as TestConstructorBuddy
  }
  connect(signer: Signer): TestConstructorBuddy__factory {
    return super.connect(signer) as TestConstructorBuddy__factory
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestConstructorBuddy {
    return new Contract(address, _abi, signerOrProvider) as TestConstructorBuddy
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_inbox',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_l2Deployer',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_maxGas',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_gasPrice',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_deployCode',
        type: 'bytes',
      },
    ],
    stateMutability: 'payable',
    type: 'constructor',
  },
  {
    inputs: [],
    name: 'codeHash',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bool',
        name: 'success',
        type: 'bool',
      },
    ],
    name: 'finalizeBuddyDeploy',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'inbox',
    outputs: [
      {
        internalType: 'contract IInbox',
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
        internalType: 'uint256',
        name: 'maxGas',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'gasPriceBid',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: 'contractInitCode',
        type: 'bytes',
      },
    ],
    name: 'initiateBuddyDeploy',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'l2Buddy',
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
    name: 'l2Connection',
    outputs: [
      {
        internalType: 'enum L1Buddy.L2Connection',
        name: '',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'l2Deployer',
    outputs: [
      {
        internalType: 'contract BuddyDeployer',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
]

const _bytecode =
  '0x608060405260405162000f3038038062000f30833981810160405260a08110156200002957600080fd5b81516020830151604080850151606086015160808701805193519597949692959194919392820192846401000000008211156200006557600080fd5b9083019060208201858111156200007b57600080fd5b82516401000000008111828201881017156200009657600080fd5b82525081516020918201929091019080838360005b83811015620000c5578181015183820152602001620000ab565b50505050905090810190601f168015620000f35780820380516001836020036101000a031916815260200191505b50604052505060008054600180546001600160a01b0319166001600160a01b038a8116919091179091556001600160a81b03199091166101009188169190910217905550620001508383836200015b602090811b6200040f17901c565b5050505050620005ea565b600260005460ff1660028111156200016f57fe5b1415620001b7576040805162461bcd60e51b8152602060048201526011602482015270185b1c9958591e4818dbdb9b9958dd1959607a1b604482015290519081900360640190fd5b6003541580620001ce575080516020820120600354145b62000220576040805162461bcd60e51b815260206004820152601e60248201527f4f6e6c792072657472792069662073616d65206465706c6f7920636f64650000604482015290519081900360640190fd5b60405160206024820181815283516044840152835160609363658c6a1d60e11b9386939283926064019185019080838360005b838110156200026d57818101518382015260200162000253565b50505050905090810190601f1680156200029b5780820380516001836020036101000a031916815260200191505b5060408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990961695909517909452509192505034159050620003f05760015460008054604051630bd22ceb60e31b815260048101888152602482018890526101009092046001600160a01b03908116604483018190526080606484019081528751608485015287519290961695635e9167589534958c958c958b94929360a4909201916020860191908190849084905b838110156200036a57818101518382015260200162000350565b50505050905090810190601f168015620003985780820380516001836020036101000a031916815260200191505b50955050505050506020604051808303818588803b158015620003ba57600080fd5b505af1158015620003cf573d6000803e3d6000fd5b50505050506040513d6020811015620003e757600080fd5b50620005039050565b600154600080546040516345318d5360e11b815260048101888152602482018890526001600160a01b036101009093048316604483018190526064830185905260a060848401908152875160a485015287519490961695638a631aa6958b958b95939491938a939160c4909101906020850190808383895b838110156200048257818101518382015260200162000468565b50505050905090810190601f168015620004b05780820380516001836020036101000a031916815260200191505b509650505050505050602060405180830381600087803b158015620004d457600080fd5b505af1158015620004e9573d6000803e3d6000fd5b505050506040513d60208110156200050057600080fd5b50505b818051906020012060038190555062000540600060019054906101000a90046001600160a01b0316306003546200057360201b620008401760201c565b600280546001600160a01b0319166001600160a01b039290921691909117905550506000805460ff191660011790555050565b604080517fff000000000000000000000000000000000000000000000000000000000000006020808301919091526001600160601b0319606087901b1660218301526001600160a01b0385166035830152605580830185905283518084039091018152607590920190925280519101209392505050565b61093680620005fa6000396000f3fe6080604052600436106100605760003560e01c806306cad338146100655780630f3be77b1461009357806318edaaf2146101455780634caa1a751461016c5780639861c6631461019d578063a4322980146101d6578063fb0e722b146101eb575b600080fd5b34801561007157600080fd5b506100916004803603602081101561008857600080fd5b50351515610200565b005b610091600480360360608110156100a957600080fd5b8135916020810135918101906060810160408201356401000000008111156100d057600080fd5b8201836020820111156100e257600080fd5b8035906020019184600183028401116401000000008311171561010457600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092955061040f945050505050565b34801561015157600080fd5b5061015a6107ff565b60408051918252519081900360200190f35b34801561017857600080fd5b50610181610805565b604080516001600160a01b039092168252519081900360200190f35b3480156101a957600080fd5b506101b2610814565b604051808260028111156101c257fe5b60ff16815260200191505060405180910390f35b3480156101e257600080fd5b5061018161081d565b3480156101f757600080fd5b50610181610831565b600160005460ff16600281111561021357fe5b1461024f5760405162461bcd60e51b81526004018080602001828103825260218152602001806108e06021913960400191505060405180910390fd5b600154604080516373c6754960e11b815290516000926001600160a01b03169163e78cea92916004808301926020929190829003018186803b15801561029457600080fd5b505afa1580156102a8573d6000803e3d6000fd5b505050506040513d60208110156102be57600080fd5b50516040805163ab5d894360e01b815290516001600160a01b039092169163ab5d894391600480820192602092909190829003018186803b15801561030257600080fd5b505afa158015610316573d6000803e3d6000fd5b505050506040513d602081101561032c57600080fd5b505160005460408051634032458160e11b815290519293506001600160a01b03610100909204821692918416916380648b0291600480820192602092909190829003018186803b15801561037f57600080fd5b505afa158015610393573d6000803e3d6000fd5b505050506040513d60208110156103a957600080fd5b50516001600160a01b0316146103f05760405162461bcd60e51b81526004018080602001828103825260228152602001806108be6022913960400191505060405180910390fd5b8115610403576103fe6108a4565b61040b565b61040b6108ac565b5050565b600260005460ff16600281111561042257fe5b1415610469576040805162461bcd60e51b8152602060048201526011602482015270185b1c9958591e4818dbdb9b9958dd1959607a1b604482015290519081900360640190fd5b600354158061047f575080516020820120600354145b6104d0576040805162461bcd60e51b815260206004820152601e60248201527f4f6e6c792072657472792069662073616d65206465706c6f7920636f64650000604482015290519081900360640190fd5b60405160206024820181815283516044840152835160609363658c6a1d60e11b9386939283926064019185019080838360005b8381101561051b578181015183820152602001610503565b50505050905090810190601f1680156105485780820380516001836020036101000a031916815260200191505b5060408051601f198184030181529190526020810180516001600160e01b03166001600160e01b0319909616959095179094525091925050341590506106955760015460008054604051630bd22ceb60e31b815260048101888152602482018890526101009092046001600160a01b03908116604483018190526080606484019081528751608485015287519290961695635e9167589534958c958c958b94929360a4909201916020860191908190849084905b838110156106145781810151838201526020016105fc565b50505050905090810190601f1680156106415780820380516001836020036101000a031916815260200191505b50955050505050506020604051808303818588803b15801561066257600080fd5b505af1158015610676573d6000803e3d6000fd5b50505050506040513d602081101561068d57600080fd5b506107a29050565b600154600080546040516345318d5360e11b815260048101888152602482018890526001600160a01b036101009093048316604483018190526064830185905260a060848401908152875160a485015287519490961695638a631aa6958b958b95939491938a939160c4909101906020850190808383895b8381101561072557818101518382015260200161070d565b50505050905090810190601f1680156107525780820380516001836020036101000a031916815260200191505b509650505050505050602060405180830381600087803b15801561077557600080fd5b505af1158015610789573d6000803e3d6000fd5b505050506040513d602081101561079f57600080fd5b50505b8151602083012060038190556000546107cc916101009091046001600160a01b0316903090610840565b600280546001600160a01b0319166001600160a01b039290921691909117905550506000805460ff191660011790555050565b60035481565b6002546001600160a01b031681565b60005460ff1681565b60005461010090046001600160a01b031681565b6001546001600160a01b031681565b604080516001600160f81b03196020808301919091526bffffffffffffffffffffffff19606087901b1660218301526001600160a01b0385166035830152605580830185905283518084039091018152607590920190925280519101209392505050565b6108ac6108ae565b565b6000805460ff1916600217905556fe57726f6e67204c3220616464726573732074726967676572696e67206f7574626f78436f6e6e656374696f6e206e6f7420696e20696e69746961746564207374617465a26469706673582212202b02f4202288e08132002e623a7cda79a1d2295b885ca07e5edbac42ad0c71ec64736f6c634300060b0033'
