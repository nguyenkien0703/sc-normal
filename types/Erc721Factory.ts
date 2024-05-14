/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { Erc721 } from "./Erc721";

export class Erc721Factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    name_: string,
    symbol_: string,
    overrides?: Overrides
  ): Promise<Erc721> {
    return super.deploy(name_, symbol_, overrides || {}) as Promise<Erc721>;
  }
  getDeployTransaction(
    name_: string,
    symbol_: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(name_, symbol_, overrides || {});
  }
  attach(address: string): Erc721 {
    return super.attach(address) as Erc721;
  }
  connect(signer: Signer): Erc721Factory {
    return super.connect(signer) as Erc721Factory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Erc721 {
    return new Contract(address, _abi, signerOrProvider) as Erc721;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620014de380380620014de8339810160408190526200003491620001db565b81516200004990600090602085019062000068565b5080516200005f90600190602084019062000068565b50505062000281565b828054620000769062000245565b90600052602060002090601f0160209004810192826200009a5760008555620000e5565b82601f10620000b557805160ff1916838001178555620000e5565b82800160010185558215620000e5579182015b82811115620000e5578251825591602001919060010190620000c8565b50620000f3929150620000f7565b5090565b5b80821115620000f35760008155600101620000f8565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200013657600080fd5b81516001600160401b03808211156200015357620001536200010e565b604051601f8301601f19908116603f011681019082821181831017156200017e576200017e6200010e565b816040528381526020925086838588010111156200019b57600080fd5b600091505b83821015620001bf5785820183015181830184015290820190620001a0565b83821115620001d15760008385830101525b9695505050505050565b60008060408385031215620001ef57600080fd5b82516001600160401b03808211156200020757600080fd5b620002158683870162000124565b935060208501519150808211156200022c57600080fd5b506200023b8582860162000124565b9150509250929050565b600181811c908216806200025a57607f821691505b6020821081036200027b57634e487b7160e01b600052602260045260246000fd5b50919050565b61124d80620002916000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c80636352211e1161008c578063a22cb46511610066578063a22cb465146101b3578063b88d4fde146101c6578063c87b56dd146101d9578063e985e9c5146101ec57600080fd5b80636352211e1461017757806370a082311461018a57806395d89b41146101ab57600080fd5b806301ffc9a7146100d457806306fdde03146100fc578063081812fc14610111578063095ea7b31461013c57806323b872dd1461015157806342842e0e14610164575b600080fd5b6100e76100e2366004610d60565b610228565b60405190151581526020015b60405180910390f35b61010461027a565b6040516100f39190610dd5565b61012461011f366004610de8565b61030c565b6040516001600160a01b0390911681526020016100f3565b61014f61014a366004610e1d565b6103a6565b005b61014f61015f366004610e47565b6104bb565b61014f610172366004610e47565b6104ec565b610124610185366004610de8565b610507565b61019d610198366004610e83565b61057e565b6040519081526020016100f3565b610104610605565b61014f6101c1366004610e9e565b610614565b61014f6101d4366004610ef0565b610623565b6101046101e7366004610de8565b61065b565b6100e76101fa366004610fcc565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b60006001600160e01b031982166380ac58cd60e01b148061025957506001600160e01b03198216635b5e139f60e01b145b8061027457506301ffc9a760e01b6001600160e01b03198316145b92915050565b60606000805461028990610fff565b80601f01602080910402602001604051908101604052809291908181526020018280546102b590610fff565b80156103025780601f106102d757610100808354040283529160200191610302565b820191906000526020600020905b8154815290600101906020018083116102e557829003601f168201915b5050505050905090565b6000818152600260205260408120546001600160a01b031661038a5760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084015b60405180910390fd5b506000908152600460205260409020546001600160a01b031690565b60006103b182610507565b9050806001600160a01b0316836001600160a01b03160361041e5760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b6064820152608401610381565b336001600160a01b038216148061043a575061043a81336101fa565b6104ac5760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c00000000000000006064820152608401610381565b6104b68383610743565b505050565b6104c533826107b1565b6104e15760405162461bcd60e51b815260040161038190611039565b6104b68383836108a8565b6104b683838360405180602001604052806000815250610623565b6000818152600260205260408120546001600160a01b0316806102745760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201526832b73a103a37b5b2b760b91b6064820152608401610381565b60006001600160a01b0382166105e95760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a65604482015269726f206164647265737360b01b6064820152608401610381565b506001600160a01b031660009081526003602052604090205490565b60606001805461028990610fff565b61061f338383610a44565b5050565b61062d33836107b1565b6106495760405162461bcd60e51b815260040161038190611039565b61065584848484610b12565b50505050565b6000818152600260205260409020546060906001600160a01b03166106da5760405162461bcd60e51b815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201526e3732bc34b9ba32b73a103a37b5b2b760891b6064820152608401610381565b60006106f160408051602081019091526000815290565b90506000815111610711576040518060200160405280600081525061073c565b8061071b84610b45565b60405160200161072c92919061108a565b6040516020818303038152906040525b9392505050565b600081815260046020526040902080546001600160a01b0319166001600160a01b038416908117909155819061077882610507565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000818152600260205260408120546001600160a01b031661082a5760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b6064820152608401610381565b600061083583610507565b9050806001600160a01b0316846001600160a01b0316148061087c57506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff165b806108a05750836001600160a01b03166108958461030c565b6001600160a01b0316145b949350505050565b826001600160a01b03166108bb82610507565b6001600160a01b03161461091f5760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201526437bbb732b960d91b6064820152608401610381565b6001600160a01b0382166109815760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b6064820152608401610381565b61098c600082610743565b6001600160a01b03831660009081526003602052604081208054600192906109b59084906110cf565b90915550506001600160a01b03821660009081526003602052604081208054600192906109e39084906110e6565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b816001600160a01b0316836001600160a01b031603610aa55760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c6572000000000000006044820152606401610381565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b610b1d8484846108a8565b610b2984848484610c46565b6106555760405162461bcd60e51b8152600401610381906110fe565b606081600003610b6c5750506040805180820190915260018152600360fc1b602082015290565b8160005b8115610b965780610b8081611150565b9150610b8f9050600a8361117f565b9150610b70565b60008167ffffffffffffffff811115610bb157610bb1610eda565b6040519080825280601f01601f191660200182016040528015610bdb576020820181803683370190505b5090505b84156108a057610bf06001836110cf565b9150610bfd600a86611193565b610c089060306110e6565b60f81b818381518110610c1d57610c1d6111a7565b60200101906001600160f81b031916908160001a905350610c3f600a8661117f565b9450610bdf565b60006001600160a01b0384163b15610d3c57604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290610c8a9033908990889088906004016111bd565b6020604051808303816000875af1925050508015610cc5575060408051601f3d908101601f19168201909252610cc2918101906111fa565b60015b610d22573d808015610cf3576040519150601f19603f3d011682016040523d82523d6000602084013e610cf8565b606091505b508051600003610d1a5760405162461bcd60e51b8152600401610381906110fe565b805181602001fd5b6001600160e01b031916630a85bd0160e11b1490506108a0565b506001949350505050565b6001600160e01b031981168114610d5d57600080fd5b50565b600060208284031215610d7257600080fd5b813561073c81610d47565b60005b83811015610d98578181015183820152602001610d80565b838111156106555750506000910152565b60008151808452610dc1816020860160208601610d7d565b601f01601f19169290920160200192915050565b60208152600061073c6020830184610da9565b600060208284031215610dfa57600080fd5b5035919050565b80356001600160a01b0381168114610e1857600080fd5b919050565b60008060408385031215610e3057600080fd5b610e3983610e01565b946020939093013593505050565b600080600060608486031215610e5c57600080fd5b610e6584610e01565b9250610e7360208501610e01565b9150604084013590509250925092565b600060208284031215610e9557600080fd5b61073c82610e01565b60008060408385031215610eb157600080fd5b610eba83610e01565b915060208301358015158114610ecf57600080fd5b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b60008060008060808587031215610f0657600080fd5b610f0f85610e01565b9350610f1d60208601610e01565b925060408501359150606085013567ffffffffffffffff80821115610f4157600080fd5b818701915087601f830112610f5557600080fd5b813581811115610f6757610f67610eda565b604051601f8201601f19908116603f01168101908382118183101715610f8f57610f8f610eda565b816040528281528a6020848701011115610fa857600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b60008060408385031215610fdf57600080fd5b610fe883610e01565b9150610ff660208401610e01565b90509250929050565b600181811c9082168061101357607f821691505b60208210810361103357634e487b7160e01b600052602260045260246000fd5b50919050565b60208082526031908201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f6040820152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b606082015260800190565b6000835161109c818460208801610d7d565b8351908301906110b0818360208801610d7d565b01949350505050565b634e487b7160e01b600052601160045260246000fd5b6000828210156110e1576110e16110b9565b500390565b600082198211156110f9576110f96110b9565b500190565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b600060018201611162576111626110b9565b5060010190565b634e487b7160e01b600052601260045260246000fd5b60008261118e5761118e611169565b500490565b6000826111a2576111a2611169565b500690565b634e487b7160e01b600052603260045260246000fd5b6001600160a01b03858116825284166020820152604081018390526080606082018190526000906111f090830184610da9565b9695505050505050565b60006020828403121561120c57600080fd5b815161073c81610d4756fea26469706673582212205a6d9d2921bec370f991ce44ac2da03596062eca9e93024f3698fd7829054c1364736f6c634300080d0033";
