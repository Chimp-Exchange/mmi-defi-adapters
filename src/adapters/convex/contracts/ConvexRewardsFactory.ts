/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "./common";

export interface ConvexRewardsFactoryInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "addExtraReward"
      | "balanceOf"
      | "clearExtraRewards"
      | "currentRewards"
      | "donate"
      | "duration"
      | "earned"
      | "extraRewards"
      | "extraRewardsLength"
      | "getReward()"
      | "getReward(address,bool)"
      | "historicalRewards"
      | "lastTimeRewardApplicable"
      | "lastUpdateTime"
      | "newRewardRatio"
      | "operator"
      | "periodFinish"
      | "pid"
      | "queueNewRewards"
      | "queuedRewards"
      | "rewardManager"
      | "rewardPerToken"
      | "rewardPerTokenStored"
      | "rewardRate"
      | "rewardToken"
      | "rewards"
      | "stake"
      | "stakeAll"
      | "stakeFor"
      | "stakingToken"
      | "totalSupply"
      | "userRewardPerTokenPaid"
      | "withdraw"
      | "withdrawAll"
      | "withdrawAllAndUnwrap"
      | "withdrawAndUnwrap"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "RewardAdded"
      | "RewardPaid"
      | "Staked"
      | "Withdrawn"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "addExtraReward",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOf",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "clearExtraRewards",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "currentRewards",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "donate",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "duration", values?: undefined): string;
  encodeFunctionData(functionFragment: "earned", values: [AddressLike]): string;
  encodeFunctionData(
    functionFragment: "extraRewards",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "extraRewardsLength",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getReward()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getReward(address,bool)",
    values: [AddressLike, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "historicalRewards",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "lastTimeRewardApplicable",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "lastUpdateTime",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "newRewardRatio",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "operator", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "periodFinish",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "pid", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "queueNewRewards",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "queuedRewards",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rewardManager",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rewardPerToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rewardPerTokenStored",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rewardRate",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rewardToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rewards",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "stake", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "stakeAll", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "stakeFor",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "stakingToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "userRewardPerTokenPaid",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawAll",
    values: [boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawAllAndUnwrap",
    values: [boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawAndUnwrap",
    values: [BigNumberish, boolean]
  ): string;

  decodeFunctionResult(
    functionFragment: "addExtraReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "clearExtraRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "currentRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "donate", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "duration", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "earned", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "extraRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "extraRewardsLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getReward()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getReward(address,bool)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "historicalRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lastTimeRewardApplicable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lastUpdateTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "newRewardRatio",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "operator", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "periodFinish",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pid", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "queueNewRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "queuedRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardPerToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardPerTokenStored",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "rewardRate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "rewardToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "rewards", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "stake", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "stakeAll", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "stakeFor", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "stakingToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "userRewardPerTokenPaid",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawAllAndUnwrap",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawAndUnwrap",
    data: BytesLike
  ): Result;
}

export namespace RewardAddedEvent {
  export type InputTuple = [reward: BigNumberish];
  export type OutputTuple = [reward: bigint];
  export interface OutputObject {
    reward: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RewardPaidEvent {
  export type InputTuple = [user: AddressLike, reward: BigNumberish];
  export type OutputTuple = [user: string, reward: bigint];
  export interface OutputObject {
    user: string;
    reward: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace StakedEvent {
  export type InputTuple = [user: AddressLike, amount: BigNumberish];
  export type OutputTuple = [user: string, amount: bigint];
  export interface OutputObject {
    user: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace WithdrawnEvent {
  export type InputTuple = [user: AddressLike, amount: BigNumberish];
  export type OutputTuple = [user: string, amount: bigint];
  export interface OutputObject {
    user: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface ConvexRewardsFactory extends BaseContract {
  connect(runner?: ContractRunner | null): ConvexRewardsFactory;
  waitForDeployment(): Promise<this>;

  interface: ConvexRewardsFactoryInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  addExtraReward: TypedContractMethod<
    [_reward: AddressLike],
    [boolean],
    "nonpayable"
  >;

  balanceOf: TypedContractMethod<[account: AddressLike], [bigint], "view">;

  clearExtraRewards: TypedContractMethod<[], [void], "nonpayable">;

  currentRewards: TypedContractMethod<[], [bigint], "view">;

  donate: TypedContractMethod<[_amount: BigNumberish], [boolean], "nonpayable">;

  duration: TypedContractMethod<[], [bigint], "view">;

  earned: TypedContractMethod<[account: AddressLike], [bigint], "view">;

  extraRewards: TypedContractMethod<[arg0: BigNumberish], [string], "view">;

  extraRewardsLength: TypedContractMethod<[], [bigint], "view">;

  "getReward()": TypedContractMethod<[], [boolean], "nonpayable">;

  "getReward(address,bool)": TypedContractMethod<
    [_account: AddressLike, _claimExtras: boolean],
    [boolean],
    "nonpayable"
  >;

  historicalRewards: TypedContractMethod<[], [bigint], "view">;

  lastTimeRewardApplicable: TypedContractMethod<[], [bigint], "view">;

  lastUpdateTime: TypedContractMethod<[], [bigint], "view">;

  newRewardRatio: TypedContractMethod<[], [bigint], "view">;

  operator: TypedContractMethod<[], [string], "view">;

  periodFinish: TypedContractMethod<[], [bigint], "view">;

  pid: TypedContractMethod<[], [bigint], "view">;

  queueNewRewards: TypedContractMethod<
    [_rewards: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  queuedRewards: TypedContractMethod<[], [bigint], "view">;

  rewardManager: TypedContractMethod<[], [string], "view">;

  rewardPerToken: TypedContractMethod<[], [bigint], "view">;

  rewardPerTokenStored: TypedContractMethod<[], [bigint], "view">;

  rewardRate: TypedContractMethod<[], [bigint], "view">;

  rewardToken: TypedContractMethod<[], [string], "view">;

  rewards: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  stake: TypedContractMethod<[_amount: BigNumberish], [boolean], "nonpayable">;

  stakeAll: TypedContractMethod<[], [boolean], "nonpayable">;

  stakeFor: TypedContractMethod<
    [_for: AddressLike, _amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  stakingToken: TypedContractMethod<[], [string], "view">;

  totalSupply: TypedContractMethod<[], [bigint], "view">;

  userRewardPerTokenPaid: TypedContractMethod<
    [arg0: AddressLike],
    [bigint],
    "view"
  >;

  withdraw: TypedContractMethod<
    [amount: BigNumberish, claim: boolean],
    [boolean],
    "nonpayable"
  >;

  withdrawAll: TypedContractMethod<[claim: boolean], [void], "nonpayable">;

  withdrawAllAndUnwrap: TypedContractMethod<
    [claim: boolean],
    [void],
    "nonpayable"
  >;

  withdrawAndUnwrap: TypedContractMethod<
    [amount: BigNumberish, claim: boolean],
    [boolean],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "addExtraReward"
  ): TypedContractMethod<[_reward: AddressLike], [boolean], "nonpayable">;
  getFunction(
    nameOrSignature: "balanceOf"
  ): TypedContractMethod<[account: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "clearExtraRewards"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "currentRewards"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "donate"
  ): TypedContractMethod<[_amount: BigNumberish], [boolean], "nonpayable">;
  getFunction(
    nameOrSignature: "duration"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "earned"
  ): TypedContractMethod<[account: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "extraRewards"
  ): TypedContractMethod<[arg0: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "extraRewardsLength"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getReward()"
  ): TypedContractMethod<[], [boolean], "nonpayable">;
  getFunction(
    nameOrSignature: "getReward(address,bool)"
  ): TypedContractMethod<
    [_account: AddressLike, _claimExtras: boolean],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "historicalRewards"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "lastTimeRewardApplicable"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "lastUpdateTime"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "newRewardRatio"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "operator"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "periodFinish"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "pid"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "queueNewRewards"
  ): TypedContractMethod<[_rewards: BigNumberish], [boolean], "nonpayable">;
  getFunction(
    nameOrSignature: "queuedRewards"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "rewardManager"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "rewardPerToken"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "rewardPerTokenStored"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "rewardRate"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "rewardToken"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "rewards"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "stake"
  ): TypedContractMethod<[_amount: BigNumberish], [boolean], "nonpayable">;
  getFunction(
    nameOrSignature: "stakeAll"
  ): TypedContractMethod<[], [boolean], "nonpayable">;
  getFunction(
    nameOrSignature: "stakeFor"
  ): TypedContractMethod<
    [_for: AddressLike, _amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "stakingToken"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "totalSupply"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "userRewardPerTokenPaid"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "withdraw"
  ): TypedContractMethod<
    [amount: BigNumberish, claim: boolean],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "withdrawAll"
  ): TypedContractMethod<[claim: boolean], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "withdrawAllAndUnwrap"
  ): TypedContractMethod<[claim: boolean], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "withdrawAndUnwrap"
  ): TypedContractMethod<
    [amount: BigNumberish, claim: boolean],
    [boolean],
    "nonpayable"
  >;

  getEvent(
    key: "RewardAdded"
  ): TypedContractEvent<
    RewardAddedEvent.InputTuple,
    RewardAddedEvent.OutputTuple,
    RewardAddedEvent.OutputObject
  >;
  getEvent(
    key: "RewardPaid"
  ): TypedContractEvent<
    RewardPaidEvent.InputTuple,
    RewardPaidEvent.OutputTuple,
    RewardPaidEvent.OutputObject
  >;
  getEvent(
    key: "Staked"
  ): TypedContractEvent<
    StakedEvent.InputTuple,
    StakedEvent.OutputTuple,
    StakedEvent.OutputObject
  >;
  getEvent(
    key: "Withdrawn"
  ): TypedContractEvent<
    WithdrawnEvent.InputTuple,
    WithdrawnEvent.OutputTuple,
    WithdrawnEvent.OutputObject
  >;

  filters: {
    "RewardAdded(uint256)": TypedContractEvent<
      RewardAddedEvent.InputTuple,
      RewardAddedEvent.OutputTuple,
      RewardAddedEvent.OutputObject
    >;
    RewardAdded: TypedContractEvent<
      RewardAddedEvent.InputTuple,
      RewardAddedEvent.OutputTuple,
      RewardAddedEvent.OutputObject
    >;

    "RewardPaid(address,uint256)": TypedContractEvent<
      RewardPaidEvent.InputTuple,
      RewardPaidEvent.OutputTuple,
      RewardPaidEvent.OutputObject
    >;
    RewardPaid: TypedContractEvent<
      RewardPaidEvent.InputTuple,
      RewardPaidEvent.OutputTuple,
      RewardPaidEvent.OutputObject
    >;

    "Staked(address,uint256)": TypedContractEvent<
      StakedEvent.InputTuple,
      StakedEvent.OutputTuple,
      StakedEvent.OutputObject
    >;
    Staked: TypedContractEvent<
      StakedEvent.InputTuple,
      StakedEvent.OutputTuple,
      StakedEvent.OutputObject
    >;

    "Withdrawn(address,uint256)": TypedContractEvent<
      WithdrawnEvent.InputTuple,
      WithdrawnEvent.OutputTuple,
      WithdrawnEvent.OutputObject
    >;
    Withdrawn: TypedContractEvent<
      WithdrawnEvent.InputTuple,
      WithdrawnEvent.OutputTuple,
      WithdrawnEvent.OutputObject
    >;
  };
}