// Type definitions for aws-sdk - Amazon DynamoDB Streams
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

///<reference path="./aws-sdk-common.d.ts" />

declare module "aws-sdk" {

    /*
     * apiVersion: 2012-08-10
     * endpointPrefix: streams.dynamodb
     * serviceAbbreviation: 
     * signatureVersion: v4
     * protocol: json
     */
    export class DynamoDBStreams extends Service {
      constructor(options?: any);
      endpoint: Endpoint;
      describeStream(params: DynamoDBStreams.DescribeStreamInput, callback?: (err: DynamoDBStreams.ResourceNotFoundException|DynamoDBStreams.InternalServerError|any, data: DynamoDBStreams.DescribeStreamOutput|any) => void): Request;
      getRecords(params: DynamoDBStreams.GetRecordsInput, callback?: (err: DynamoDBStreams.ResourceNotFoundException|DynamoDBStreams.LimitExceededException|DynamoDBStreams.InternalServerError|DynamoDBStreams.ExpiredIteratorException|DynamoDBStreams.TrimmedDataAccessException|any, data: DynamoDBStreams.GetRecordsOutput|any) => void): Request;
      getShardIterator(params: DynamoDBStreams.GetShardIteratorInput, callback?: (err: DynamoDBStreams.ResourceNotFoundException|DynamoDBStreams.InternalServerError|DynamoDBStreams.TrimmedDataAccessException|any, data: DynamoDBStreams.GetShardIteratorOutput|any) => void): Request;
      listStreams(params: DynamoDBStreams.ListStreamsInput, callback?: (err: DynamoDBStreams.ResourceNotFoundException|DynamoDBStreams.InternalServerError|any, data: DynamoDBStreams.ListStreamsOutput|any) => void): Request;

    }

    export module DynamoDBStreams {
        export type AttributeMap = {[key:string]: AttributeValue};
        export type AttributeName = string;    // max: 65535
        export type BinaryAttributeValue = any;    // type: blob
        export type BinarySetAttributeValue = BinaryAttributeValue[];
        export type BooleanAttributeValue = boolean;
        export type Date = number;
        export type ErrorMessage = string;
        export type KeySchema = KeySchemaElement[];    // max: 2, min: 1
        export type KeySchemaAttributeName = string;    // max: 255, min: 1
        export type KeyType = string;
        export type ListAttributeValue = AttributeValue[];
        export type MapAttributeValue = {[key:string]: AttributeValue};
        export type NullAttributeValue = boolean;
        export type NumberAttributeValue = string;
        export type NumberSetAttributeValue = NumberAttributeValue[];
        export type OperationType = string;
        export type PositiveIntegerObject = number;    // min: 1
        export type PositiveLongObject = number;    // min: 1
        export type RecordList = Record[];
        export type SequenceNumber = string;    // max: 40, min: 21
        export type ShardDescriptionList = Shard[];
        export type ShardId = string;    // max: 65, min: 28
        export type ShardIterator = string;    // max: 2048, min: 1
        export type ShardIteratorType = string;
        export type StreamArn = string;    // max: 1024, min: 37
        export type StreamList = Stream[];
        export type StreamStatus = string;
        export type StreamViewType = string;
        export type String = string;
        export type StringAttributeValue = string;
        export type StringSetAttributeValue = StringAttributeValue[];
        export type TableName = string;    // pattern: &quot;[a-zA-Z0-9_.-]+&quot;, max: 255, min: 3

        export interface AttributeValue {
            S?: StringAttributeValue;
            N?: NumberAttributeValue;
            B?: BinaryAttributeValue;
            SS?: StringSetAttributeValue;
            NS?: NumberSetAttributeValue;
            BS?: BinarySetAttributeValue;
            M?: MapAttributeValue;
            L?: ListAttributeValue;
            NULL?: NullAttributeValue;
            BOOL?: BooleanAttributeValue;
        }
        export interface DescribeStreamInput {
            StreamArn: StreamArn;
            Limit?: PositiveIntegerObject;
            ExclusiveStartShardId?: ShardId;
        }
        export interface DescribeStreamOutput {
            StreamDescription?: StreamDescription;
        }
        export interface ExpiredIteratorException {
            message?: ErrorMessage;
        }
        export interface GetRecordsInput {
            ShardIterator: ShardIterator;
            Limit?: PositiveIntegerObject;
        }
        export interface GetRecordsOutput {
            Records?: RecordList;
            NextShardIterator?: ShardIterator;
        }
        export interface GetShardIteratorInput {
            StreamArn: StreamArn;
            ShardId: ShardId;
            ShardIteratorType: ShardIteratorType;
            SequenceNumber?: SequenceNumber;
        }
        export interface GetShardIteratorOutput {
            ShardIterator?: ShardIterator;
        }
        export interface InternalServerError {
            message?: ErrorMessage;
        }
        export interface KeySchemaElement {
            AttributeName: KeySchemaAttributeName;
            KeyType: KeyType;
        }
        export interface LimitExceededException {
            message?: ErrorMessage;
        }
        export interface ListStreamsInput {
            TableName?: TableName;
            Limit?: PositiveIntegerObject;
            ExclusiveStartStreamArn?: StreamArn;
        }
        export interface ListStreamsOutput {
            Streams?: StreamList;
            LastEvaluatedStreamArn?: StreamArn;
        }
        export interface Record {
            eventID?: String;
            eventName?: OperationType;
            eventVersion?: String;
            eventSource?: String;
            awsRegion?: String;
            dynamodb?: StreamRecord;
        }
        export interface ResourceNotFoundException {
            message?: ErrorMessage;
        }
        export interface SequenceNumberRange {
            StartingSequenceNumber?: SequenceNumber;
            EndingSequenceNumber?: SequenceNumber;
        }
        export interface Shard {
            ShardId?: ShardId;
            SequenceNumberRange?: SequenceNumberRange;
            ParentShardId?: ShardId;
        }
        export interface Stream {
            StreamArn?: StreamArn;
            TableName?: TableName;
            StreamLabel?: String;
        }
        export interface StreamDescription {
            StreamArn?: StreamArn;
            StreamLabel?: String;
            StreamStatus?: StreamStatus;
            StreamViewType?: StreamViewType;
            CreationRequestDateTime?: Date;
            TableName?: TableName;
            KeySchema?: KeySchema;
            Shards?: ShardDescriptionList;
            LastEvaluatedShardId?: ShardId;
        }
        export interface StreamRecord {
            Keys?: AttributeMap;
            NewImage?: AttributeMap;
            OldImage?: AttributeMap;
            SequenceNumber?: SequenceNumber;
            SizeBytes?: PositiveLongObject;
            StreamViewType?: StreamViewType;
        }
        export interface TrimmedDataAccessException {
            message?: ErrorMessage;
        }

    }
}
