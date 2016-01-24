// Type definitions for aws-sdk - Amazon Kinesis
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

///<reference path="./aws-sdk-common.d.ts" />

declare module "aws-sdk" {

    /*
     * apiVersion: 2013-12-02
     * endpointPrefix: kinesis
     * serviceAbbreviation: Kinesis
     * signatureVersion: v4
     * protocol: json
     */
    export class Kinesis extends Service {
      constructor(options?: any);
      endpoint: Endpoint;
      addTagsToStream(params: Kinesis.AddTagsToStreamInput, callback?: (err: Kinesis.ResourceNotFoundException|Kinesis.ResourceInUseException|Kinesis.InvalidArgumentException|Kinesis.LimitExceededException|any, data: any) => void): Request;
      createStream(params: Kinesis.CreateStreamInput, callback?: (err: Kinesis.ResourceInUseException|Kinesis.LimitExceededException|Kinesis.InvalidArgumentException|any, data: any) => void): Request;
      decreaseStreamRetentionPeriod(params: Kinesis.DecreaseStreamRetentionPeriodInput, callback?: (err: Kinesis.ResourceInUseException|Kinesis.ResourceNotFoundException|Kinesis.LimitExceededException|Kinesis.InvalidArgumentException|any, data: any) => void): Request;
      deleteStream(params: Kinesis.DeleteStreamInput, callback?: (err: Kinesis.ResourceNotFoundException|Kinesis.LimitExceededException|any, data: any) => void): Request;
      describeStream(params: Kinesis.DescribeStreamInput, callback?: (err: Kinesis.ResourceNotFoundException|Kinesis.LimitExceededException|any, data: Kinesis.DescribeStreamOutput|any) => void): Request;
      getRecords(params: Kinesis.GetRecordsInput, callback?: (err: Kinesis.ResourceNotFoundException|Kinesis.InvalidArgumentException|Kinesis.ProvisionedThroughputExceededException|Kinesis.ExpiredIteratorException|any, data: Kinesis.GetRecordsOutput|any) => void): Request;
      getShardIterator(params: Kinesis.GetShardIteratorInput, callback?: (err: Kinesis.ResourceNotFoundException|Kinesis.InvalidArgumentException|Kinesis.ProvisionedThroughputExceededException|any, data: Kinesis.GetShardIteratorOutput|any) => void): Request;
      increaseStreamRetentionPeriod(params: Kinesis.IncreaseStreamRetentionPeriodInput, callback?: (err: Kinesis.ResourceInUseException|Kinesis.ResourceNotFoundException|Kinesis.LimitExceededException|Kinesis.InvalidArgumentException|any, data: any) => void): Request;
      listStreams(params: Kinesis.ListStreamsInput, callback?: (err: Kinesis.LimitExceededException|any, data: Kinesis.ListStreamsOutput|any) => void): Request;
      listTagsForStream(params: Kinesis.ListTagsForStreamInput, callback?: (err: Kinesis.ResourceNotFoundException|Kinesis.InvalidArgumentException|Kinesis.LimitExceededException|any, data: Kinesis.ListTagsForStreamOutput|any) => void): Request;
      mergeShards(params: Kinesis.MergeShardsInput, callback?: (err: Kinesis.ResourceNotFoundException|Kinesis.ResourceInUseException|Kinesis.InvalidArgumentException|Kinesis.LimitExceededException|any, data: any) => void): Request;
      putRecord(params: Kinesis.PutRecordInput, callback?: (err: Kinesis.ResourceNotFoundException|Kinesis.InvalidArgumentException|Kinesis.ProvisionedThroughputExceededException|any, data: Kinesis.PutRecordOutput|any) => void): Request;
      putRecords(params: Kinesis.PutRecordsInput, callback?: (err: Kinesis.ResourceNotFoundException|Kinesis.InvalidArgumentException|Kinesis.ProvisionedThroughputExceededException|any, data: Kinesis.PutRecordsOutput|any) => void): Request;
      removeTagsFromStream(params: Kinesis.RemoveTagsFromStreamInput, callback?: (err: Kinesis.ResourceNotFoundException|Kinesis.ResourceInUseException|Kinesis.InvalidArgumentException|Kinesis.LimitExceededException|any, data: any) => void): Request;
      splitShard(params: Kinesis.SplitShardInput, callback?: (err: Kinesis.ResourceNotFoundException|Kinesis.ResourceInUseException|Kinesis.InvalidArgumentException|Kinesis.LimitExceededException|any, data: any) => void): Request;

    }

    export module Kinesis {
        export type ApproximateArrivalTimestamp = number;
        export type BooleanObject = boolean;
        export type Data = any;    // max: 1048576, type: blob
        export type DescribeStreamInputLimit = number;    // max: 10000, min: 1
        export type ErrorCode = string;
        export type ErrorMessage = string;
        export type GetRecordsInputLimit = number;    // max: 10000, min: 1
        export type HashKey = string;    // pattern: &quot;0|([1-9]\d{0,38})&quot;
        export type ListStreamsInputLimit = number;    // max: 10000, min: 1
        export type ListTagsForStreamInputLimit = number;    // max: 10, min: 1
        export type MillisBehindLatest = number;
        export type PartitionKey = string;    // max: 256, min: 1
        export type PositiveIntegerObject = number;    // max: 100000, min: 1
        export type PutRecordsRequestEntryList = PutRecordsRequestEntry[];    // max: 500, min: 1
        export type PutRecordsResultEntryList = PutRecordsResultEntry[];    // max: 500, min: 1
        export type RecordList = Record[];
        export type RetentionPeriodHours = number;    // max: 168, min: 24
        export type SequenceNumber = string;    // pattern: &quot;0|([1-9]\d{0,128})&quot;
        export type ShardId = string;    // pattern: &quot;[a-zA-Z0-9_.-]+&quot;, max: 128, min: 1
        export type ShardIterator = string;    // max: 512, min: 1
        export type ShardIteratorType = string;
        export type ShardList = Shard[];
        export type StreamARN = string;
        export type StreamName = string;    // pattern: &quot;[a-zA-Z0-9_.-]+&quot;, max: 128, min: 1
        export type StreamNameList = StreamName[];
        export type StreamStatus = string;
        export type TagKey = string;    // max: 128, min: 1
        export type TagKeyList = TagKey[];    // max: 10, min: 1
        export type TagList = Tag[];
        export type TagMap = {[key:string]: TagValue};    // max: 10, min: 1
        export type TagValue = string;    // max: 256

        export interface AddTagsToStreamInput {
            StreamName: StreamName;
            Tags: TagMap;
        }
        export interface CreateStreamInput {
            StreamName: StreamName;
            ShardCount: PositiveIntegerObject;
        }
        export interface DecreaseStreamRetentionPeriodInput {
            StreamName: StreamName;
            RetentionPeriodHours: RetentionPeriodHours;
        }
        export interface DeleteStreamInput {
            StreamName: StreamName;
        }
        export interface DescribeStreamInput {
            StreamName: StreamName;
            Limit?: DescribeStreamInputLimit;
            ExclusiveStartShardId?: ShardId;
        }
        export interface DescribeStreamOutput {
            StreamDescription: StreamDescription;
        }
        export interface ExpiredIteratorException {
            message?: ErrorMessage;
        }
        export interface GetRecordsInput {
            ShardIterator: ShardIterator;
            Limit?: GetRecordsInputLimit;
        }
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
        export interface HashKeyRange {
            StartingHashKey: HashKey;
            EndingHashKey: HashKey;
        }
        export interface IncreaseStreamRetentionPeriodInput {
            StreamName: StreamName;
            RetentionPeriodHours: RetentionPeriodHours;
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
        export interface ListStreamsOutput {
            StreamNames: StreamNameList;
            HasMoreStreams: BooleanObject;
        }
        export interface ListTagsForStreamInput {
            StreamName: StreamName;
            ExclusiveStartTagKey?: TagKey;
            Limit?: ListTagsForStreamInputLimit;
        }
        export interface ListTagsForStreamOutput {
            Tags: TagList;
            HasMoreTags: BooleanObject;
        }
        export interface MergeShardsInput {
            StreamName: StreamName;
            ShardToMerge: ShardId;
            AdjacentShardToMerge: ShardId;
        }
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
        export interface PutRecordsResultEntry {
            SequenceNumber?: SequenceNumber;
            ShardId?: ShardId;
            ErrorCode?: ErrorCode;
            ErrorMessage?: ErrorMessage;
        }
        export interface Record {
            SequenceNumber: SequenceNumber;
            ApproximateArrivalTimestamp?: ApproximateArrivalTimestamp;
            Data: Data;
            PartitionKey: PartitionKey;
        }
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
        export interface SplitShardInput {
            StreamName: StreamName;
            ShardToSplit: ShardId;
            NewStartingHashKey: HashKey;
        }
        export interface StreamDescription {
            StreamName: StreamName;
            StreamARN: StreamARN;
            StreamStatus: StreamStatus;
            Shards: ShardList;
            HasMoreShards: BooleanObject;
            RetentionPeriodHours: RetentionPeriodHours;
        }
        export interface Tag {
            Key: TagKey;
            Value?: TagValue;
        }

    }
}
