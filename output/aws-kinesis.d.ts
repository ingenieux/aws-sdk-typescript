// DO NOT EDIT!
//
declare module "aws-sdk" {
    export class Kinesis {
      constructor(options?: any);
      addTagsToStream(params: KinesisAddTagsToStreamInput, callback: (err: KinesisResourceNotFoundException|KinesisResourceInUseException|KinesisInvalidArgumentException|KinesisLimitExceededException|any, data: any) => void): void;
      createStream(params: KinesisCreateStreamInput, callback: (err: KinesisResourceInUseException|KinesisLimitExceededException|KinesisInvalidArgumentException|any, data: any) => void): void;
      deleteStream(params: KinesisDeleteStreamInput, callback: (err: KinesisResourceNotFoundException|KinesisLimitExceededException|any, data: any) => void): void;
      describeStream(params: KinesisDescribeStreamInput, callback: (err: KinesisResourceNotFoundException|KinesisLimitExceededException|any, data: KinesisDescribeStreamOutput|any) => void): void;
      getRecords(params: KinesisGetRecordsInput, callback: (err: KinesisResourceNotFoundException|KinesisInvalidArgumentException|KinesisProvisionedThroughputExceededException|KinesisExpiredIteratorException|any, data: KinesisGetRecordsOutput|any) => void): void;
      getShardIterator(params: KinesisGetShardIteratorInput, callback: (err: KinesisResourceNotFoundException|KinesisInvalidArgumentException|KinesisProvisionedThroughputExceededException|any, data: KinesisGetShardIteratorOutput|any) => void): void;
      listStreams(params: KinesisListStreamsInput, callback: (err: KinesisLimitExceededException|any, data: KinesisListStreamsOutput|any) => void): void;
      listTagsForStream(params: KinesisListTagsForStreamInput, callback: (err: KinesisResourceNotFoundException|KinesisInvalidArgumentException|KinesisLimitExceededException|any, data: KinesisListTagsForStreamOutput|any) => void): void;
      mergeShards(params: KinesisMergeShardsInput, callback: (err: KinesisResourceNotFoundException|KinesisResourceInUseException|KinesisInvalidArgumentException|KinesisLimitExceededException|any, data: any) => void): void;
      putRecord(params: KinesisPutRecordInput, callback: (err: KinesisResourceNotFoundException|KinesisInvalidArgumentException|KinesisProvisionedThroughputExceededException|any, data: KinesisPutRecordOutput|any) => void): void;
      putRecords(params: KinesisPutRecordsInput, callback: (err: KinesisResourceNotFoundException|KinesisInvalidArgumentException|KinesisProvisionedThroughputExceededException|any, data: KinesisPutRecordsOutput|any) => void): void;
      removeTagsFromStream(params: KinesisRemoveTagsFromStreamInput, callback: (err: KinesisResourceNotFoundException|KinesisResourceInUseException|KinesisInvalidArgumentException|KinesisLimitExceededException|any, data: any) => void): void;
      splitShard(params: KinesisSplitShardInput, callback: (err: KinesisResourceNotFoundException|KinesisResourceInUseException|KinesisInvalidArgumentException|KinesisLimitExceededException|any, data: any) => void): void;
    }

    export interface KinesisAddTagsToStreamInput {
        StreamName: KinesisStreamName;
        Tags: KinesisTagMap;
    }

    export type KinesisBooleanObject = boolean;
    export interface KinesisCreateStreamInput {
        StreamName: KinesisStreamName;
        ShardCount: KinesisPositiveIntegerObject;
    }

    export type KinesisData = any; // not really - it was 'blob' instead - must fix this one
    export interface KinesisDeleteStreamInput {
        StreamName: KinesisStreamName;
    }

    export interface KinesisDescribeStreamInput {
        StreamName: KinesisStreamName;
        Limit?: KinesisDescribeStreamInputLimit;
        ExclusiveStartShardId?: KinesisShardId;
    }

    export type KinesisDescribeStreamInputLimit = number;
    export interface KinesisDescribeStreamOutput {
        StreamDescription: KinesisStreamDescription;
    }

    export type KinesisErrorCode = string;
    export type KinesisErrorMessage = string;
    export interface KinesisExpiredIteratorException {
        message?: KinesisErrorMessage;
    }

    export interface KinesisGetRecordsInput {
        ShardIterator: KinesisShardIterator;
        Limit?: KinesisGetRecordsInputLimit;
    }

    export type KinesisGetRecordsInputLimit = number;
    export interface KinesisGetRecordsOutput {
        Records: KinesisRecordList;
        NextShardIterator?: KinesisShardIterator;
        MillisBehindLatest?: KinesisMillisBehindLatest;
    }

    export interface KinesisGetShardIteratorInput {
        StreamName: KinesisStreamName;
        ShardId: KinesisShardId;
        ShardIteratorType: KinesisShardIteratorType;
        StartingSequenceNumber?: KinesisSequenceNumber;
    }

    export interface KinesisGetShardIteratorOutput {
        ShardIterator?: KinesisShardIterator;
    }

    export type KinesisHashKey = string; // pattern: "0|([1-9]\d{0,38})"
    export interface KinesisHashKeyRange {
        StartingHashKey: KinesisHashKey;
        EndingHashKey: KinesisHashKey;
    }

    export interface KinesisInvalidArgumentException {
        message?: KinesisErrorMessage;
    }

    export interface KinesisLimitExceededException {
        message?: KinesisErrorMessage;
    }

    export interface KinesisListStreamsInput {
        Limit?: KinesisListStreamsInputLimit;
        ExclusiveStartStreamName?: KinesisStreamName;
    }

    export type KinesisListStreamsInputLimit = number;
    export interface KinesisListStreamsOutput {
        StreamNames: KinesisStreamNameList;
        HasMoreStreams: KinesisBooleanObject;
    }

    export interface KinesisListTagsForStreamInput {
        StreamName: KinesisStreamName;
        ExclusiveStartTagKey?: KinesisTagKey;
        Limit?: KinesisListTagsForStreamInputLimit;
    }

    export type KinesisListTagsForStreamInputLimit = number;
    export interface KinesisListTagsForStreamOutput {
        Tags: KinesisTagList;
        HasMoreTags: KinesisBooleanObject;
    }

    export interface KinesisMergeShardsInput {
        StreamName: KinesisStreamName;
        ShardToMerge: KinesisShardId;
        AdjacentShardToMerge: KinesisShardId;
    }

    export type KinesisMillisBehindLatest = number;
    export type KinesisPartitionKey = string;
    export type KinesisPositiveIntegerObject = number;
    export interface KinesisProvisionedThroughputExceededException {
        message?: KinesisErrorMessage;
    }

    export interface KinesisPutRecordInput {
        StreamName: KinesisStreamName;
        Data: KinesisData;
        PartitionKey: KinesisPartitionKey;
        ExplicitHashKey?: KinesisHashKey;
        SequenceNumberForOrdering?: KinesisSequenceNumber;
    }

    export interface KinesisPutRecordOutput {
        ShardId: KinesisShardId;
        SequenceNumber: KinesisSequenceNumber;
    }

    export interface KinesisPutRecordsInput {
        Records: KinesisPutRecordsRequestEntryList;
        StreamName: KinesisStreamName;
    }

    export interface KinesisPutRecordsOutput {
        FailedRecordCount?: KinesisPositiveIntegerObject;
        Records: KinesisPutRecordsResultEntryList;
    }

    export interface KinesisPutRecordsRequestEntry {
        Data: KinesisData;
        ExplicitHashKey?: KinesisHashKey;
        PartitionKey: KinesisPartitionKey;
    }

    export type KinesisPutRecordsRequestEntryList = Array<KinesisPutRecordsRequestEntry>; // max: 500
    export interface KinesisPutRecordsResultEntry {
        SequenceNumber?: KinesisSequenceNumber;
        ShardId?: KinesisShardId;
        ErrorCode?: KinesisErrorCode;
        ErrorMessage?: KinesisErrorMessage;
    }

    export type KinesisPutRecordsResultEntryList = Array<KinesisPutRecordsResultEntry>; // max: 500
    export interface KinesisRecord {
        SequenceNumber: KinesisSequenceNumber;
        Data: KinesisData;
        PartitionKey: KinesisPartitionKey;
    }

    export type KinesisRecordList = Array<KinesisRecord>;
    export interface KinesisRemoveTagsFromStreamInput {
        StreamName: KinesisStreamName;
        TagKeys: KinesisTagKeyList;
    }

    export interface KinesisResourceInUseException {
        message?: KinesisErrorMessage;
    }

    export interface KinesisResourceNotFoundException {
        message?: KinesisErrorMessage;
    }

    export type KinesisSequenceNumber = string; // pattern: "0|([1-9]\d{0,128})"
    export interface KinesisSequenceNumberRange {
        StartingSequenceNumber: KinesisSequenceNumber;
        EndingSequenceNumber?: KinesisSequenceNumber;
    }

    export interface KinesisShard {
        ShardId: KinesisShardId;
        ParentShardId?: KinesisShardId;
        AdjacentParentShardId?: KinesisShardId;
        HashKeyRange: KinesisHashKeyRange;
        SequenceNumberRange: KinesisSequenceNumberRange;
    }

    export type KinesisShardId = string; // pattern: "[a-zA-Z0-9_.-]+"
    export type KinesisShardIterator = string;
    export type KinesisShardIteratorType = string;
    export type KinesisShardList = Array<KinesisShard>;
    export interface KinesisSplitShardInput {
        StreamName: KinesisStreamName;
        ShardToSplit: KinesisShardId;
        NewStartingHashKey: KinesisHashKey;
    }

    export type KinesisStreamARN = string;
    export interface KinesisStreamDescription {
        StreamName: KinesisStreamName;
        StreamARN: KinesisStreamARN;
        StreamStatus: KinesisStreamStatus;
        Shards: KinesisShardList;
        HasMoreShards: KinesisBooleanObject;
    }

    export type KinesisStreamName = string; // pattern: "[a-zA-Z0-9_.-]+"
    export type KinesisStreamNameList = Array<KinesisStreamName>;
    export type KinesisStreamStatus = string;
    export interface KinesisTag {
        Key: KinesisTagKey;
        Value?: KinesisTagValue;
    }

    export type KinesisTagKey = string;
    export type KinesisTagKeyList = Array<KinesisTagKey>; // max: 10
    export type KinesisTagList = Array<KinesisTag>;
    export type KinesisTagMap = any; // not really - it was 'map' instead - must fix this one
    export type KinesisTagValue = string;
}
