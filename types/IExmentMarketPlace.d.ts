/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface IExmentMarketPlaceInterface extends ethers.utils.Interface {
  functions: {
    "admin()": FunctionFragment;
    "allCollectionsLength()": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "buyNFT(uint256,address,uint256,address,address)": FunctionFragment;
    "collectionInfo(uint256)": FunctionFragment;
    "collections(uint256)": FunctionFragment;
    "collectionsOfOwner(address)": FunctionFragment;
    "collectionsOfOwnerIn(address,uint256,uint256)": FunctionFragment;
    "createCollection(string,string,address,uint256,uint256)": FunctionFragment;
    "ownerOf(uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "admin", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "allCollectionsLength",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
  encodeFunctionData(
    functionFragment: "buyNFT",
    values: [BigNumberish, string, BigNumberish, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "collectionInfo",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "collections",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "collectionsOfOwner",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "collectionsOfOwnerIn",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "createCollection",
    values: [string, string, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "ownerOf",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "allCollectionsLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "buyNFT", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "collectionInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "collections",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "collectionsOfOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "collectionsOfOwnerIn",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createCollection",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "ownerOf", data: BytesLike): Result;

  events: {
    "BuyNFT(address,address,uint256,uint256,uint256)": EventFragment;
    "CollectionCreated(address,address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "BuyNFT"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CollectionCreated"): EventFragment;
}

export class IExmentMarketPlace extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IExmentMarketPlaceInterface;

  functions: {
    admin(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "admin()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    allCollectionsLength(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "allCollectionsLength()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    balanceOf(
      owner: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "balanceOf(address)"(
      owner: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    buyNFT(
      _collectionIndex: BigNumberish,
      _collectionAddress: string,
      _price: BigNumberish,
      _seller: string,
      _buyer: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "buyNFT(uint256,address,uint256,address,address)"(
      _collectionIndex: BigNumberish,
      _collectionAddress: string,
      _price: BigNumberish,
      _seller: string,
      _buyer: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    collectionInfo(
      collectionIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: {
        collection: string;
        owner: string;
        name: string;
        symbol: string;
        price: BigNumber;
        localId: BigNumber;
        deactived: boolean;
        totalSupply: BigNumber;
        0: string;
        1: string;
        2: string;
        3: string;
        4: BigNumber;
        5: BigNumber;
        6: boolean;
        7: BigNumber;
      };
    }>;

    "collectionInfo(uint256)"(
      collectionIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: {
        collection: string;
        owner: string;
        name: string;
        symbol: string;
        price: BigNumber;
        localId: BigNumber;
        deactived: boolean;
        totalSupply: BigNumber;
        0: string;
        1: string;
        2: string;
        3: string;
        4: BigNumber;
        5: BigNumber;
        6: boolean;
        7: BigNumber;
      };
    }>;

    collections(
      collectionIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "collections(uint256)"(
      collectionIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    collectionsOfOwner(
      owner: string,
      overrides?: CallOverrides
    ): Promise<{
      0: string[];
    }>;

    "collectionsOfOwner(address)"(
      owner: string,
      overrides?: CallOverrides
    ): Promise<{
      0: string[];
    }>;

    collectionsOfOwnerIn(
      owner: string,
      start: BigNumberish,
      stop: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string[];
    }>;

    "collectionsOfOwnerIn(address,uint256,uint256)"(
      owner: string,
      start: BigNumberish,
      stop: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string[];
    }>;

    createCollection(
      _name: string,
      _symbol: string,
      _seller: string,
      _price: BigNumberish,
      _localId: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "createCollection(string,string,address,uint256,uint256)"(
      _name: string,
      _symbol: string,
      _seller: string,
      _price: BigNumberish,
      _localId: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    ownerOf(
      collectionIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "ownerOf(uint256)"(
      collectionIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;
  };

  admin(overrides?: CallOverrides): Promise<string>;

  "admin()"(overrides?: CallOverrides): Promise<string>;

  allCollectionsLength(overrides?: CallOverrides): Promise<BigNumber>;

  "allCollectionsLength()"(overrides?: CallOverrides): Promise<BigNumber>;

  balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

  "balanceOf(address)"(
    owner: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  buyNFT(
    _collectionIndex: BigNumberish,
    _collectionAddress: string,
    _price: BigNumberish,
    _seller: string,
    _buyer: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "buyNFT(uint256,address,uint256,address,address)"(
    _collectionIndex: BigNumberish,
    _collectionAddress: string,
    _price: BigNumberish,
    _seller: string,
    _buyer: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  collectionInfo(
    collectionIndex: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{
    collection: string;
    owner: string;
    name: string;
    symbol: string;
    price: BigNumber;
    localId: BigNumber;
    deactived: boolean;
    totalSupply: BigNumber;
    0: string;
    1: string;
    2: string;
    3: string;
    4: BigNumber;
    5: BigNumber;
    6: boolean;
    7: BigNumber;
  }>;

  "collectionInfo(uint256)"(
    collectionIndex: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{
    collection: string;
    owner: string;
    name: string;
    symbol: string;
    price: BigNumber;
    localId: BigNumber;
    deactived: boolean;
    totalSupply: BigNumber;
    0: string;
    1: string;
    2: string;
    3: string;
    4: BigNumber;
    5: BigNumber;
    6: boolean;
    7: BigNumber;
  }>;

  collections(
    collectionIndex: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  "collections(uint256)"(
    collectionIndex: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  collectionsOfOwner(
    owner: string,
    overrides?: CallOverrides
  ): Promise<string[]>;

  "collectionsOfOwner(address)"(
    owner: string,
    overrides?: CallOverrides
  ): Promise<string[]>;

  collectionsOfOwnerIn(
    owner: string,
    start: BigNumberish,
    stop: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string[]>;

  "collectionsOfOwnerIn(address,uint256,uint256)"(
    owner: string,
    start: BigNumberish,
    stop: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string[]>;

  createCollection(
    _name: string,
    _symbol: string,
    _seller: string,
    _price: BigNumberish,
    _localId: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "createCollection(string,string,address,uint256,uint256)"(
    _name: string,
    _symbol: string,
    _seller: string,
    _price: BigNumberish,
    _localId: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  ownerOf(
    collectionIndex: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  "ownerOf(uint256)"(
    collectionIndex: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    admin(overrides?: CallOverrides): Promise<string>;

    "admin()"(overrides?: CallOverrides): Promise<string>;

    allCollectionsLength(overrides?: CallOverrides): Promise<BigNumber>;

    "allCollectionsLength()"(overrides?: CallOverrides): Promise<BigNumber>;

    balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    "balanceOf(address)"(
      owner: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    buyNFT(
      _collectionIndex: BigNumberish,
      _collectionAddress: string,
      _price: BigNumberish,
      _seller: string,
      _buyer: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "buyNFT(uint256,address,uint256,address,address)"(
      _collectionIndex: BigNumberish,
      _collectionAddress: string,
      _price: BigNumberish,
      _seller: string,
      _buyer: string,
      overrides?: CallOverrides
    ): Promise<void>;

    collectionInfo(
      collectionIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      collection: string;
      owner: string;
      name: string;
      symbol: string;
      price: BigNumber;
      localId: BigNumber;
      deactived: boolean;
      totalSupply: BigNumber;
      0: string;
      1: string;
      2: string;
      3: string;
      4: BigNumber;
      5: BigNumber;
      6: boolean;
      7: BigNumber;
    }>;

    "collectionInfo(uint256)"(
      collectionIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      collection: string;
      owner: string;
      name: string;
      symbol: string;
      price: BigNumber;
      localId: BigNumber;
      deactived: boolean;
      totalSupply: BigNumber;
      0: string;
      1: string;
      2: string;
      3: string;
      4: BigNumber;
      5: BigNumber;
      6: boolean;
      7: BigNumber;
    }>;

    collections(
      collectionIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "collections(uint256)"(
      collectionIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    collectionsOfOwner(
      owner: string,
      overrides?: CallOverrides
    ): Promise<string[]>;

    "collectionsOfOwner(address)"(
      owner: string,
      overrides?: CallOverrides
    ): Promise<string[]>;

    collectionsOfOwnerIn(
      owner: string,
      start: BigNumberish,
      stop: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string[]>;

    "collectionsOfOwnerIn(address,uint256,uint256)"(
      owner: string,
      start: BigNumberish,
      stop: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string[]>;

    createCollection(
      _name: string,
      _symbol: string,
      _seller: string,
      _price: BigNumberish,
      _localId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "createCollection(string,string,address,uint256,uint256)"(
      _name: string,
      _symbol: string,
      _seller: string,
      _price: BigNumberish,
      _localId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    ownerOf(
      collectionIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "ownerOf(uint256)"(
      collectionIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    BuyNFT(
      collection: string | null,
      buyer: string | null,
      collectionId: null,
      localId: null,
      tokenId: null
    ): EventFilter;

    CollectionCreated(
      collection: string | null,
      seller: string | null,
      collectionId: null,
      localId: null
    ): EventFilter;
  };

  estimateGas: {
    admin(overrides?: CallOverrides): Promise<BigNumber>;

    "admin()"(overrides?: CallOverrides): Promise<BigNumber>;

    allCollectionsLength(overrides?: CallOverrides): Promise<BigNumber>;

    "allCollectionsLength()"(overrides?: CallOverrides): Promise<BigNumber>;

    balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    "balanceOf(address)"(
      owner: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    buyNFT(
      _collectionIndex: BigNumberish,
      _collectionAddress: string,
      _price: BigNumberish,
      _seller: string,
      _buyer: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "buyNFT(uint256,address,uint256,address,address)"(
      _collectionIndex: BigNumberish,
      _collectionAddress: string,
      _price: BigNumberish,
      _seller: string,
      _buyer: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    collectionInfo(
      collectionIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "collectionInfo(uint256)"(
      collectionIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    collections(
      collectionIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "collections(uint256)"(
      collectionIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    collectionsOfOwner(
      owner: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "collectionsOfOwner(address)"(
      owner: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    collectionsOfOwnerIn(
      owner: string,
      start: BigNumberish,
      stop: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "collectionsOfOwnerIn(address,uint256,uint256)"(
      owner: string,
      start: BigNumberish,
      stop: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    createCollection(
      _name: string,
      _symbol: string,
      _seller: string,
      _price: BigNumberish,
      _localId: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "createCollection(string,string,address,uint256,uint256)"(
      _name: string,
      _symbol: string,
      _seller: string,
      _price: BigNumberish,
      _localId: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    ownerOf(
      collectionIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "ownerOf(uint256)"(
      collectionIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    admin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "admin()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    allCollectionsLength(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "allCollectionsLength()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    balanceOf(
      owner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "balanceOf(address)"(
      owner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    buyNFT(
      _collectionIndex: BigNumberish,
      _collectionAddress: string,
      _price: BigNumberish,
      _seller: string,
      _buyer: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "buyNFT(uint256,address,uint256,address,address)"(
      _collectionIndex: BigNumberish,
      _collectionAddress: string,
      _price: BigNumberish,
      _seller: string,
      _buyer: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    collectionInfo(
      collectionIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "collectionInfo(uint256)"(
      collectionIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    collections(
      collectionIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "collections(uint256)"(
      collectionIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    collectionsOfOwner(
      owner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "collectionsOfOwner(address)"(
      owner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    collectionsOfOwnerIn(
      owner: string,
      start: BigNumberish,
      stop: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "collectionsOfOwnerIn(address,uint256,uint256)"(
      owner: string,
      start: BigNumberish,
      stop: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    createCollection(
      _name: string,
      _symbol: string,
      _seller: string,
      _price: BigNumberish,
      _localId: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "createCollection(string,string,address,uint256,uint256)"(
      _name: string,
      _symbol: string,
      _seller: string,
      _price: BigNumberish,
      _localId: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    ownerOf(
      collectionIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "ownerOf(uint256)"(
      collectionIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
