// DO NOT EDIT!
//
declare module "aws-sdk" {
    export class Kinesis {
      constructor(options?: any);
      addTagsToStream(params: AddTagsToStreamInput, callback: (err: ResourceNotFoundException|ResourceInUseException|InvalidArgumentException|LimitExceededException|any, data: any) => void): void;
      createStream(params: CreateStreamInput, callback: (err: ResourceInUseException|LimitExceededException|InvalidArgumentException|any, data: any) => void): void;
      deleteStream(params: DeleteStreamInput, callback: (err: ResourceNotFoundException|LimitExceededException|any, data: any) => void): void;
      describeStream(params: DescribeStreamInput, callback: (err: ResourceNotFoundException|LimitExceededException|any, data: DescribeStreamOutput|any) => void): void;
      getRecords(params: GetRecordsInput, callback: (err: ResourceNotFoundException|InvalidArgumentException|ProvisionedThroughputExceededException|ExpiredIteratorException|any, data: GetRecordsOutput|any) => void): void;
      getShardIterator(params: GetShardIteratorInput, callback: (err: ResourceNotFoundException|InvalidArgumentException|ProvisionedThroughputExceededException|any, data: GetShardIteratorOutput|any) => void): void;
      listStreams(params: ListStreamsInput, callback: (err: LimitExceededException|any, data: ListStreamsOutput|any) => void): void;
      listTagsForStream(params: ListTagsForStreamInput, callback: (err: ResourceNotFoundException|InvalidArgumentException|LimitExceededException|any, data: ListTagsForStreamOutput|any) => void): void;
      mergeShards(params: MergeShardsInput, callback: (err: ResourceNotFoundException|ResourceInUseException|InvalidArgumentException|LimitExceededException|any, data: any) => void): void;
      putRecord(params: PutRecordInput, callback: (err: ResourceNotFoundException|InvalidArgumentException|ProvisionedThroughputExceededException|any, data: PutRecordOutput|any) => void): void;
      putRecords(params: PutRecordsInput, callback: (err: ResourceNotFoundException|InvalidArgumentException|ProvisionedThroughputExceededException|any, data: PutRecordsOutput|any) => void): void;
      removeTagsFromStream(params: RemoveTagsFromStreamInput, callback: (err: ResourceNotFoundException|ResourceInUseException|InvalidArgumentException|LimitExceededException|any, data: any) => void): void;
      splitShard(params: SplitShardInput, callback: (err: ResourceNotFoundException|ResourceInUseException|InvalidArgumentException|LimitExceededException|any, data: any) => void): void;
    }

    export interface AddTagsToStreamInput {
      StreamName: StreamName;
      Tags: TagMap;
    }


    export type BooleanObject = boolean;

    export interface CreateStreamInput {
      StreamName: StreamName;
      ShardCount: PositiveIntegerObject;
    }


    export type Data = any; // not really - it was 'blob' instead - must fix this one

    export interface DeleteStreamInput {
      StreamName: StreamName;
    }


    export interface DescribeStreamInput {
      StreamName: StreamName;
      Limit?: DescribeStreamInputLimit;
      ExclusiveStartShardId?: ShardId;
    }


    export type DescribeStreamInputLimit = number;

    export interface DescribeStreamOutput {
      StreamDescription: StreamDescription;
    }


    export type ErrorCode = string;

    export type ErrorMessage = string;

    export interface ExpiredIteratorException {
      message?: ErrorMessage;
    }


    export interface GetRecordsInput {
      ShardIterator: ShardIterator;
      Limit?: GetRecordsInputLimit;
    }


    export type GetRecordsInputLimit = number;

    export interface GetRecordsOutput {
      Records: RecordList;
      NextShardIterator?: ShardIterator;
      MillisBehindLatest?: MillisBehindLatest;
    }


    export interface GetShardIteratorInput {
      StreamName: StreamName;
      ShardId: ShardId;
      ShardIteratorType: ShardIteratorType;
      StartingSequenceNumber?: SequenceNumber;
    }


    export interface GetShardIteratorOutput {
      ShardIterator?: ShardIterator;
    }


    export type HashKey = string; // pattern: "0|([1-9]\d{0,38})"

    export interface HashKeyRange {
      StartingHashKey: HashKey;
      EndingHashKey: HashKey;
    }


    export interface InvalidArgumentException {
      message?: ErrorMessage;
    }


    export interface LimitExceededException {
      message?: ErrorMessage;
    }


    export interface ListStreamsInput {
      Limit?: ListStreamsInputLimit;
      ExclusiveStartStreamName?: StreamName;
    }


    export type ListStreamsInputLimit = number;

    export interface ListStreamsOutput {
      StreamNames: StreamNameList;
      HasMoreStreams: BooleanObject;
    }


    export interface ListTagsForStreamInput {
      StreamName: StreamName;
      ExclusiveStartTagKey?: TagKey;
      Limit?: ListTagsForStreamInputLimit;
    }


    export type ListTagsForStreamInputLimit = number;

    export interface ListTagsForStreamOutput {
      Tags: TagList;
      HasMoreTags: BooleanObject;
    }


    export interface MergeShardsInput {
      StreamName: StreamName;
      ShardToMerge: ShardId;
      AdjacentShardToMerge: ShardId;
    }


    export type MillisBehindLatest = number;

    export type PartitionKey = string;

    export type PositiveIntegerObject = number;

    export interface ProvisionedThroughputExceededException {
      message?: ErrorMessage;
    }


    export interface PutRecordInput {
      StreamName: StreamName;
      Data: Data;
      PartitionKey: PartitionKey;
      ExplicitHashKey?: HashKey;
      SequenceNumberForOrdering?: SequenceNumber;
    }


    export interface PutRecordOutput {
      ShardId: ShardId;
      SequenceNumber: SequenceNumber;
    }


    export interface PutRecordsInput {
      Records: PutRecordsRequestEntryList;
      StreamName: StreamName;
    }


    export interface PutRecordsOutput {
      FailedRecordCount?: PositiveIntegerObject;
      Records: PutRecordsResultEntryList;
    }


    export interface PutRecordsRequestEntry {
      Data: Data;
      ExplicitHashKey?: HashKey;
      PartitionKey: PartitionKey;
    }


    export type PutRecordsRequestEntryList = Array<PutRecordsRequestEntry>; // max: 500

    export interface PutRecordsResultEntry {
      SequenceNumber?: SequenceNumber;
      ShardId?: ShardId;
      ErrorCode?: ErrorCode;
      ErrorMessage?: ErrorMessage;
    }


    export type PutRecordsResultEntryList = Array<PutRecordsResultEntry>; // max: 500

    export interface Record {
      SequenceNumber: SequenceNumber;
      Data: Data;
      PartitionKey: PartitionKey;
    }


    export type RecordList = Array<Record>;

    export interface RemoveTagsFromStreamInput {
      StreamName: StreamName;
      TagKeys: TagKeyList;
    }


    export interface ResourceInUseException {
      message?: ErrorMessage;
    }


    export interface ResourceNotFoundException {
      message?: ErrorMessage;
    }


    export type SequenceNumber = string; // pattern: "0|([1-9]\d{0,128})"

    export interface SequenceNumberRange {
      StartingSequenceNumber: SequenceNumber;
      EndingSequenceNumber?: SequenceNumber;
    }


    export interface Shard {
      ShardId: ShardId;
      ParentShardId?: ShardId;
      AdjacentParentShardId?: ShardId;
      HashKeyRange: HashKeyRange;
      SequenceNumberRange: SequenceNumberRange;
    }


    export type ShardId = string; // pattern: "[a-zA-Z0-9_.-]+"

    export type ShardIterator = string;

    export type ShardIteratorType = string;

    export type ShardList = Array<Shard>;

    export interface SplitShardInput {
      StreamName: StreamName;
      ShardToSplit: ShardId;
      NewStartingHashKey: HashKey;
    }


    export type StreamARN = string;

    export interface StreamDescription {
      StreamName: StreamName;
      StreamARN: StreamARN;
      StreamStatus: StreamStatus;
      Shards: ShardList;
      HasMoreShards: BooleanObject;
    }


    export type StreamName = string; // pattern: "[a-zA-Z0-9_.-]+"

    export type StreamNameList = Array<StreamName>;

    export type StreamStatus = string;

    export interface Tag {
      Key: TagKey;
      Value?: TagValue;
    }


    export type TagKey = string;

    export type TagKeyList = Array<TagKey>; // max: 10

    export type TagList = Array<Tag>;

    export type TagMap = any; // not really - it was 'map' instead - must fix this one

    export type TagValue = string;

}
