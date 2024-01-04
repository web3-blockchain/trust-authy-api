/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import type { FunctionFragment, Result } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from '../../common';

export interface IOperatorFilterRegistryInterface extends utils.Interface {
  functions: {
    'codeHashOf(address)': FunctionFragment;
    'copyEntriesOf(address,address)': FunctionFragment;
    'filteredCodeHashAt(address,uint256)': FunctionFragment;
    'filteredCodeHashes(address)': FunctionFragment;
    'filteredOperatorAt(address,uint256)': FunctionFragment;
    'filteredOperators(address)': FunctionFragment;
    'isCodeHashFiltered(address,bytes32)': FunctionFragment;
    'isCodeHashOfFiltered(address,address)': FunctionFragment;
    'isOperatorAllowed(address,address)': FunctionFragment;
    'isOperatorFiltered(address,address)': FunctionFragment;
    'isRegistered(address)': FunctionFragment;
    'register(address)': FunctionFragment;
    'registerAndCopyEntries(address,address)': FunctionFragment;
    'registerAndSubscribe(address,address)': FunctionFragment;
    'subscribe(address,address)': FunctionFragment;
    'subscriberAt(address,uint256)': FunctionFragment;
    'subscribers(address)': FunctionFragment;
    'subscriptionOf(address)': FunctionFragment;
    'unregister(address)': FunctionFragment;
    'unsubscribe(address,bool)': FunctionFragment;
    'updateCodeHash(address,bytes32,bool)': FunctionFragment;
    'updateCodeHashes(address,bytes32[],bool)': FunctionFragment;
    'updateOperator(address,address,bool)': FunctionFragment;
    'updateOperators(address,address[],bool)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'codeHashOf'
      | 'copyEntriesOf'
      | 'filteredCodeHashAt'
      | 'filteredCodeHashes'
      | 'filteredOperatorAt'
      | 'filteredOperators'
      | 'isCodeHashFiltered'
      | 'isCodeHashOfFiltered'
      | 'isOperatorAllowed'
      | 'isOperatorFiltered'
      | 'isRegistered'
      | 'register'
      | 'registerAndCopyEntries'
      | 'registerAndSubscribe'
      | 'subscribe'
      | 'subscriberAt'
      | 'subscribers'
      | 'subscriptionOf'
      | 'unregister'
      | 'unsubscribe'
      | 'updateCodeHash'
      | 'updateCodeHashes'
      | 'updateOperator'
      | 'updateOperators'
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: 'codeHashOf',
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: 'copyEntriesOf',
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: 'filteredCodeHashAt',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'filteredCodeHashes',
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: 'filteredOperatorAt',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'filteredOperators',
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: 'isCodeHashFiltered',
    values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: 'isCodeHashOfFiltered',
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: 'isOperatorAllowed',
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: 'isOperatorFiltered',
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: 'isRegistered',
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: 'register',
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: 'registerAndCopyEntries',
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: 'registerAndSubscribe',
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: 'subscribe',
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: 'subscriberAt',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'subscribers',
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: 'subscriptionOf',
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: 'unregister',
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: 'unsubscribe',
    values: [PromiseOrValue<string>, PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: 'updateCodeHash',
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<boolean>,
    ]
  ): string;
  encodeFunctionData(
    functionFragment: 'updateCodeHashes',
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>[],
      PromiseOrValue<boolean>,
    ]
  ): string;
  encodeFunctionData(
    functionFragment: 'updateOperator',
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<boolean>,
    ]
  ): string;
  encodeFunctionData(
    functionFragment: 'updateOperators',
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>[],
      PromiseOrValue<boolean>,
    ]
  ): string;

  decodeFunctionResult(functionFragment: 'codeHashOf', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'copyEntriesOf',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'filteredCodeHashAt',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'filteredCodeHashes',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'filteredOperatorAt',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'filteredOperators',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'isCodeHashFiltered',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'isCodeHashOfFiltered',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'isOperatorAllowed',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'isOperatorFiltered',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'isRegistered',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'register', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'registerAndCopyEntries',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'registerAndSubscribe',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'subscribe', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'subscriberAt',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'subscribers',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'subscriptionOf',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'unregister', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'unsubscribe',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'updateCodeHash',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'updateCodeHashes',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'updateOperator',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'updateOperators',
    data: BytesLike
  ): Result;

  events: {};
}

export interface IOperatorFilterRegistry extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IOperatorFilterRegistryInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    codeHashOf(
      addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    copyEntriesOf(
      registrant: PromiseOrValue<string>,
      registrantToCopy: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    filteredCodeHashAt(
      registrant: PromiseOrValue<string>,
      index: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    filteredCodeHashes(
      addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    filteredOperatorAt(
      registrant: PromiseOrValue<string>,
      index: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    filteredOperators(
      addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    isCodeHashFiltered(
      registrant: PromiseOrValue<string>,
      codeHash: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    isCodeHashOfFiltered(
      registrant: PromiseOrValue<string>,
      operatorWithCode: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    isOperatorAllowed(
      registrant: PromiseOrValue<string>,
      operator: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isOperatorFiltered(
      registrant: PromiseOrValue<string>,
      operator: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    isRegistered(
      addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    register(
      registrant: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    registerAndCopyEntries(
      registrant: PromiseOrValue<string>,
      registrantToCopy: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    registerAndSubscribe(
      registrant: PromiseOrValue<string>,
      subscription: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    subscribe(
      registrant: PromiseOrValue<string>,
      registrantToSubscribe: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    subscriberAt(
      registrant: PromiseOrValue<string>,
      index: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    subscribers(
      registrant: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    subscriptionOf(
      addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    unregister(
      addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    unsubscribe(
      registrant: PromiseOrValue<string>,
      copyExistingEntries: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateCodeHash(
      registrant: PromiseOrValue<string>,
      codehash: PromiseOrValue<BytesLike>,
      filtered: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateCodeHashes(
      registrant: PromiseOrValue<string>,
      codeHashes: PromiseOrValue<BytesLike>[],
      filtered: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateOperator(
      registrant: PromiseOrValue<string>,
      operator: PromiseOrValue<string>,
      filtered: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateOperators(
      registrant: PromiseOrValue<string>,
      operators: PromiseOrValue<string>[],
      filtered: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  codeHashOf(
    addr: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  copyEntriesOf(
    registrant: PromiseOrValue<string>,
    registrantToCopy: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  filteredCodeHashAt(
    registrant: PromiseOrValue<string>,
    index: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  filteredCodeHashes(
    addr: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  filteredOperatorAt(
    registrant: PromiseOrValue<string>,
    index: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  filteredOperators(
    addr: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  isCodeHashFiltered(
    registrant: PromiseOrValue<string>,
    codeHash: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  isCodeHashOfFiltered(
    registrant: PromiseOrValue<string>,
    operatorWithCode: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  isOperatorAllowed(
    registrant: PromiseOrValue<string>,
    operator: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isOperatorFiltered(
    registrant: PromiseOrValue<string>,
    operator: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  isRegistered(
    addr: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  register(
    registrant: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  registerAndCopyEntries(
    registrant: PromiseOrValue<string>,
    registrantToCopy: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  registerAndSubscribe(
    registrant: PromiseOrValue<string>,
    subscription: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  subscribe(
    registrant: PromiseOrValue<string>,
    registrantToSubscribe: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  subscriberAt(
    registrant: PromiseOrValue<string>,
    index: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  subscribers(
    registrant: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  subscriptionOf(
    addr: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  unregister(
    addr: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  unsubscribe(
    registrant: PromiseOrValue<string>,
    copyExistingEntries: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateCodeHash(
    registrant: PromiseOrValue<string>,
    codehash: PromiseOrValue<BytesLike>,
    filtered: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateCodeHashes(
    registrant: PromiseOrValue<string>,
    codeHashes: PromiseOrValue<BytesLike>[],
    filtered: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateOperator(
    registrant: PromiseOrValue<string>,
    operator: PromiseOrValue<string>,
    filtered: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateOperators(
    registrant: PromiseOrValue<string>,
    operators: PromiseOrValue<string>[],
    filtered: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    codeHashOf(
      addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    copyEntriesOf(
      registrant: PromiseOrValue<string>,
      registrantToCopy: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    filteredCodeHashAt(
      registrant: PromiseOrValue<string>,
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    filteredCodeHashes(
      addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string[]>;

    filteredOperatorAt(
      registrant: PromiseOrValue<string>,
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    filteredOperators(
      addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string[]>;

    isCodeHashFiltered(
      registrant: PromiseOrValue<string>,
      codeHash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isCodeHashOfFiltered(
      registrant: PromiseOrValue<string>,
      operatorWithCode: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isOperatorAllowed(
      registrant: PromiseOrValue<string>,
      operator: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isOperatorFiltered(
      registrant: PromiseOrValue<string>,
      operator: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isRegistered(
      addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    register(
      registrant: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    registerAndCopyEntries(
      registrant: PromiseOrValue<string>,
      registrantToCopy: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    registerAndSubscribe(
      registrant: PromiseOrValue<string>,
      subscription: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    subscribe(
      registrant: PromiseOrValue<string>,
      registrantToSubscribe: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    subscriberAt(
      registrant: PromiseOrValue<string>,
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    subscribers(
      registrant: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string[]>;

    subscriptionOf(
      addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    unregister(
      addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    unsubscribe(
      registrant: PromiseOrValue<string>,
      copyExistingEntries: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    updateCodeHash(
      registrant: PromiseOrValue<string>,
      codehash: PromiseOrValue<BytesLike>,
      filtered: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    updateCodeHashes(
      registrant: PromiseOrValue<string>,
      codeHashes: PromiseOrValue<BytesLike>[],
      filtered: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    updateOperator(
      registrant: PromiseOrValue<string>,
      operator: PromiseOrValue<string>,
      filtered: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    updateOperators(
      registrant: PromiseOrValue<string>,
      operators: PromiseOrValue<string>[],
      filtered: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    codeHashOf(
      addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    copyEntriesOf(
      registrant: PromiseOrValue<string>,
      registrantToCopy: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    filteredCodeHashAt(
      registrant: PromiseOrValue<string>,
      index: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    filteredCodeHashes(
      addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    filteredOperatorAt(
      registrant: PromiseOrValue<string>,
      index: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    filteredOperators(
      addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    isCodeHashFiltered(
      registrant: PromiseOrValue<string>,
      codeHash: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    isCodeHashOfFiltered(
      registrant: PromiseOrValue<string>,
      operatorWithCode: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    isOperatorAllowed(
      registrant: PromiseOrValue<string>,
      operator: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isOperatorFiltered(
      registrant: PromiseOrValue<string>,
      operator: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    isRegistered(
      addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    register(
      registrant: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    registerAndCopyEntries(
      registrant: PromiseOrValue<string>,
      registrantToCopy: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    registerAndSubscribe(
      registrant: PromiseOrValue<string>,
      subscription: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    subscribe(
      registrant: PromiseOrValue<string>,
      registrantToSubscribe: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    subscriberAt(
      registrant: PromiseOrValue<string>,
      index: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    subscribers(
      registrant: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    subscriptionOf(
      addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    unregister(
      addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    unsubscribe(
      registrant: PromiseOrValue<string>,
      copyExistingEntries: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateCodeHash(
      registrant: PromiseOrValue<string>,
      codehash: PromiseOrValue<BytesLike>,
      filtered: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateCodeHashes(
      registrant: PromiseOrValue<string>,
      codeHashes: PromiseOrValue<BytesLike>[],
      filtered: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateOperator(
      registrant: PromiseOrValue<string>,
      operator: PromiseOrValue<string>,
      filtered: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateOperators(
      registrant: PromiseOrValue<string>,
      operators: PromiseOrValue<string>[],
      filtered: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    codeHashOf(
      addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    copyEntriesOf(
      registrant: PromiseOrValue<string>,
      registrantToCopy: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    filteredCodeHashAt(
      registrant: PromiseOrValue<string>,
      index: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    filteredCodeHashes(
      addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    filteredOperatorAt(
      registrant: PromiseOrValue<string>,
      index: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    filteredOperators(
      addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    isCodeHashFiltered(
      registrant: PromiseOrValue<string>,
      codeHash: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    isCodeHashOfFiltered(
      registrant: PromiseOrValue<string>,
      operatorWithCode: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    isOperatorAllowed(
      registrant: PromiseOrValue<string>,
      operator: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isOperatorFiltered(
      registrant: PromiseOrValue<string>,
      operator: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    isRegistered(
      addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    register(
      registrant: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    registerAndCopyEntries(
      registrant: PromiseOrValue<string>,
      registrantToCopy: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    registerAndSubscribe(
      registrant: PromiseOrValue<string>,
      subscription: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    subscribe(
      registrant: PromiseOrValue<string>,
      registrantToSubscribe: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    subscriberAt(
      registrant: PromiseOrValue<string>,
      index: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    subscribers(
      registrant: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    subscriptionOf(
      addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    unregister(
      addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    unsubscribe(
      registrant: PromiseOrValue<string>,
      copyExistingEntries: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateCodeHash(
      registrant: PromiseOrValue<string>,
      codehash: PromiseOrValue<BytesLike>,
      filtered: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateCodeHashes(
      registrant: PromiseOrValue<string>,
      codeHashes: PromiseOrValue<BytesLike>[],
      filtered: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateOperator(
      registrant: PromiseOrValue<string>,
      operator: PromiseOrValue<string>,
      filtered: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateOperators(
      registrant: PromiseOrValue<string>,
      operators: PromiseOrValue<string>[],
      filtered: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
