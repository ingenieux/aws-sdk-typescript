// Type definitions for aws-sdk - Amazon Kinesis Firehose
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

///<reference path="./aws-sdk-common.d.ts" />

declare module "aws-sdk" {

    /*
     * apiVersion: 2015-08-04
     * endpointPrefix: firehose
     * serviceAbbreviation: Firehose
     * signatureVersion: v4
     * protocol: json
     */
    export class Firehose extends Service {
      constructor(options?: any);
      endpoint: Endpoint;
      createDeliveryStream(params: Firehose.CreateDeliveryStreamInput, callback?: (err: Firehose.InvalidArgumentException|Firehose.LimitExceededException|Firehose.ResourceInUseException|any, data: Firehose.CreateDeliveryStreamOutput|any) => void): Request;
      deleteDeliveryStream(params: Firehose.DeleteDeliveryStreamInput, callback?: (err: Firehose.ResourceInUseException|Firehose.ResourceNotFoundException|any, data: Firehose.DeleteDeliveryStreamOutput|any) => void): Request;
      describeDeliveryStream(params: Firehose.DescribeDeliveryStreamInput, callback?: (err: Firehose.ResourceNotFoundException|any, data: Firehose.DescribeDeliveryStreamOutput|any) => void): Request;
      listDeliveryStreams(params: Firehose.ListDeliveryStreamsInput, callback?: (err: any, data: Firehose.ListDeliveryStreamsOutput|any) => void): Request;
      putRecord(params: Firehose.PutRecordInput, callback?: (err: Firehose.ResourceNotFoundException|Firehose.InvalidArgumentException|Firehose.ServiceUnavailableException|any, data: Firehose.PutRecordOutput|any) => void): Request;
      putRecordBatch(params: Firehose.PutRecordBatchInput, callback?: (err: Firehose.ResourceNotFoundException|Firehose.InvalidArgumentException|Firehose.ServiceUnavailableException|any, data: Firehose.PutRecordBatchOutput|any) => void): Request;
      updateDestination(params: Firehose.UpdateDestinationInput, callback?: (err: Firehose.InvalidArgumentException|Firehose.ResourceInUseException|Firehose.ResourceNotFoundException|Firehose.ConcurrentModificationException|any, data: Firehose.UpdateDestinationOutput|any) => void): Request;

    }

    export module Firehose {
        export type AWSKMSKeyARN = string;    // pattern: &quot;arn:.*&quot;, max: 512, min: 1
        export type BooleanObject = boolean;
        export type BucketARN = string;    // pattern: &quot;arn:.*&quot;, max: 2048, min: 1
        export type ClusterJDBCURL = string;    // pattern: &quot;jdbc:(redshift|postgresql)://((?!-)[A-Za-z0-9-]{1,63}(?&lt;!-)\.)+redshift\.amazonaws\.com:\d{1,5}/[a-zA-Z0-9_$]+&quot;, min: 1
        export type CompressionFormat = string;
        export type CopyOptions = string;
        export type Data = any;    // max: 1024000, type: blob
        export type DataTableColumns = string;
        export type DataTableName = string;    // min: 1
        export type DeliveryStreamARN = string;
        export type DeliveryStreamName = string;    // pattern: &quot;[a-zA-Z0-9_.-]+&quot;, max: 64, min: 1
        export type DeliveryStreamNameList = DeliveryStreamName[];
        export type DeliveryStreamStatus = string;
        export type DeliveryStreamVersionId = string;    // pattern: &quot;[0-9]+&quot;, max: 50, min: 1
        export type DescribeDeliveryStreamInputLimit = number;    // max: 10000, min: 1
        export type DestinationDescriptionList = DestinationDescription[];
        export type DestinationId = string;    // max: 100, min: 1
        export type ErrorCode = string;
        export type ErrorMessage = string;
        export type IntervalInSeconds = number;    // max: 900, min: 60
        export type ListDeliveryStreamsInputLimit = number;    // max: 10000, min: 1
        export type NoEncryptionConfig = string;
        export type NonNegativeIntegerObject = number;
        export type Password = string;    // min: 6
        export type Prefix = string;
        export type PutRecordBatchRequestEntryList = Record[];    // max: 500, min: 1
        export type PutRecordBatchResponseEntryList = PutRecordBatchResponseEntry[];    // max: 500, min: 1
        export type PutResponseRecordId = string;    // min: 1
        export type RoleARN = string;    // pattern: &quot;arn:.*&quot;, max: 512, min: 1
        export type SizeInMBs = number;    // max: 128, min: 1
        export type Timestamp = number;
        export type Username = string;    // min: 1

        export interface BufferingHints {
            SizeInMBs?: SizeInMBs;
            IntervalInSeconds?: IntervalInSeconds;
        }
        export interface ConcurrentModificationException {
            message?: ErrorMessage;
        }
        export interface CopyCommand {
            DataTableName: DataTableName;
            DataTableColumns?: DataTableColumns;
            CopyOptions?: CopyOptions;
        }
        export interface CreateDeliveryStreamInput {
            DeliveryStreamName: DeliveryStreamName;
            S3DestinationConfiguration?: S3DestinationConfiguration;
            RedshiftDestinationConfiguration?: RedshiftDestinationConfiguration;
        }
        export interface CreateDeliveryStreamOutput {
            DeliveryStreamARN?: DeliveryStreamARN;
        }
        export interface DeleteDeliveryStreamInput {
            DeliveryStreamName: DeliveryStreamName;
        }
        export interface DeleteDeliveryStreamOutput {
        }
        export interface DeliveryStreamDescription {
            DeliveryStreamName: DeliveryStreamName;
            DeliveryStreamARN: DeliveryStreamARN;
            DeliveryStreamStatus: DeliveryStreamStatus;
            VersionId: DeliveryStreamVersionId;
            CreateTimestamp?: Timestamp;
            LastUpdateTimestamp?: Timestamp;
            Destinations: DestinationDescriptionList;
            HasMoreDestinations: BooleanObject;
        }
        export interface DescribeDeliveryStreamInput {
            DeliveryStreamName: DeliveryStreamName;
            Limit?: DescribeDeliveryStreamInputLimit;
            ExclusiveStartDestinationId?: DestinationId;
        }
        export interface DescribeDeliveryStreamOutput {
            DeliveryStreamDescription: DeliveryStreamDescription;
        }
        export interface DestinationDescription {
            DestinationId: DestinationId;
            S3DestinationDescription?: S3DestinationDescription;
            RedshiftDestinationDescription?: RedshiftDestinationDescription;
        }
        export interface EncryptionConfiguration {
            NoEncryptionConfig?: NoEncryptionConfig;
            KMSEncryptionConfig?: KMSEncryptionConfig;
        }
        export interface InvalidArgumentException {
            message?: ErrorMessage;
        }
        export interface KMSEncryptionConfig {
            AWSKMSKeyARN: AWSKMSKeyARN;
        }
        export interface LimitExceededException {
            message?: ErrorMessage;
        }
        export interface ListDeliveryStreamsInput {
            Limit?: ListDeliveryStreamsInputLimit;
            ExclusiveStartDeliveryStreamName?: DeliveryStreamName;
        }
        export interface ListDeliveryStreamsOutput {
            DeliveryStreamNames: DeliveryStreamNameList;
            HasMoreDeliveryStreams: BooleanObject;
        }
        export interface PutRecordBatchInput {
            DeliveryStreamName: DeliveryStreamName;
            Records: PutRecordBatchRequestEntryList;
        }
        export interface PutRecordBatchOutput {
            FailedPutCount: NonNegativeIntegerObject;
            RequestResponses: PutRecordBatchResponseEntryList;
        }
        export interface PutRecordBatchResponseEntry {
            RecordId?: PutResponseRecordId;
            ErrorCode?: ErrorCode;
            ErrorMessage?: ErrorMessage;
        }
        export interface PutRecordInput {
            DeliveryStreamName: DeliveryStreamName;
            Record: Record;
        }
        export interface PutRecordOutput {
            RecordId: PutResponseRecordId;
        }
        export interface Record {
            Data: Data;
        }
        export interface RedshiftDestinationConfiguration {
            RoleARN: RoleARN;
            ClusterJDBCURL: ClusterJDBCURL;
            CopyCommand: CopyCommand;
            Username: Username;
            Password: Password;
            S3Configuration: S3DestinationConfiguration;
        }
        export interface RedshiftDestinationDescription {
            RoleARN: RoleARN;
            ClusterJDBCURL: ClusterJDBCURL;
            CopyCommand: CopyCommand;
            Username: Username;
            S3DestinationDescription: S3DestinationDescription;
        }
        export interface RedshiftDestinationUpdate {
            RoleARN?: RoleARN;
            ClusterJDBCURL?: ClusterJDBCURL;
            CopyCommand?: CopyCommand;
            Username?: Username;
            Password?: Password;
            S3Update?: S3DestinationUpdate;
        }
        export interface ResourceInUseException {
            message?: ErrorMessage;
        }
        export interface ResourceNotFoundException {
            message?: ErrorMessage;
        }
        export interface S3DestinationConfiguration {
            RoleARN: RoleARN;
            BucketARN: BucketARN;
            Prefix?: Prefix;
            BufferingHints?: BufferingHints;
            CompressionFormat?: CompressionFormat;
            EncryptionConfiguration?: EncryptionConfiguration;
        }
        export interface S3DestinationDescription {
            RoleARN: RoleARN;
            BucketARN: BucketARN;
            Prefix?: Prefix;
            BufferingHints: BufferingHints;
            CompressionFormat: CompressionFormat;
            EncryptionConfiguration: EncryptionConfiguration;
        }
        export interface S3DestinationUpdate {
            RoleARN?: RoleARN;
            BucketARN?: BucketARN;
            Prefix?: Prefix;
            BufferingHints?: BufferingHints;
            CompressionFormat?: CompressionFormat;
            EncryptionConfiguration?: EncryptionConfiguration;
        }
        export interface ServiceUnavailableException {
            message?: ErrorMessage;
        }
        export interface UpdateDestinationInput {
            DeliveryStreamName: DeliveryStreamName;
            CurrentDeliveryStreamVersionId: DeliveryStreamVersionId;
            DestinationId: DestinationId;
            S3DestinationUpdate?: S3DestinationUpdate;
            RedshiftDestinationUpdate?: RedshiftDestinationUpdate;
        }
        export interface UpdateDestinationOutput {
        }

    }
}
