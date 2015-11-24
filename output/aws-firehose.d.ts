// DO NOT EDIT!
//

///<reference path="./aws-sdk-common.d.ts" />
declare module "aws-sdk" {
    export class Firehose {
      constructor(options?: any);
      createDeliveryStream(params: FirehoseCreateDeliveryStreamInput, callback: (err: FirehoseInvalidArgumentException|FirehoseLimitExceededException|FirehoseResourceInUseException|any, data: FirehoseCreateDeliveryStreamOutput|any) => void): void;
      deleteDeliveryStream(params: FirehoseDeleteDeliveryStreamInput, callback: (err: FirehoseResourceInUseException|FirehoseResourceNotFoundException|any, data: FirehoseDeleteDeliveryStreamOutput|any) => void): void;
      describeDeliveryStream(params: FirehoseDescribeDeliveryStreamInput, callback: (err: FirehoseResourceNotFoundException|any, data: FirehoseDescribeDeliveryStreamOutput|any) => void): void;
      listDeliveryStreams(params: FirehoseListDeliveryStreamsInput, callback: (err: any, data: FirehoseListDeliveryStreamsOutput|any) => void): void;
      putRecord(params: FirehosePutRecordInput, callback: (err: FirehoseResourceNotFoundException|FirehoseInvalidArgumentException|FirehoseServiceUnavailableException|any, data: FirehosePutRecordOutput|any) => void): void;
      putRecordBatch(params: FirehosePutRecordBatchInput, callback: (err: FirehoseResourceNotFoundException|FirehoseInvalidArgumentException|FirehoseServiceUnavailableException|any, data: FirehosePutRecordBatchOutput|any) => void): void;
      updateDestination(params: FirehoseUpdateDestinationInput, callback: (err: FirehoseInvalidArgumentException|FirehoseResourceInUseException|FirehoseResourceNotFoundException|FirehoseConcurrentModificationException|any, data: FirehoseUpdateDestinationOutput|any) => void): void;
    }

    export type FirehoseAWSKMSKeyARN = string; // pattern: "arn:.*"
    export type FirehoseBooleanObject = boolean;
    export type FirehoseBucketARN = string; // pattern: "arn:.*"
    export interface FirehoseBufferingHints {
        SizeInMBs?: FirehoseSizeInMBs;
        IntervalInSeconds?: FirehoseIntervalInSeconds;
    }

    export type FirehoseClusterJDBCURL = string; // pattern: "jdbc:(redshift|postgresql)://((?!-)[A-Za-z0-9-]{1,63}(?<!-)\.)+redshift\.amazonaws\.com:\d{1,5}/[a-zA-Z0-9_$]+"
    export type FirehoseCompressionFormat = string;
    export interface FirehoseConcurrentModificationException {
        message?: FirehoseErrorMessage;
    }

    export interface FirehoseCopyCommand {
        DataTableName: FirehoseDataTableName;
        DataTableColumns?: FirehoseDataTableColumns;
        CopyOptions?: FirehoseCopyOptions;
    }

    export type FirehoseCopyOptions = string;
    export interface FirehoseCreateDeliveryStreamInput {
        DeliveryStreamName: FirehoseDeliveryStreamName;
        S3DestinationConfiguration?: FirehoseS3DestinationConfiguration;
        RedshiftDestinationConfiguration?: FirehoseRedshiftDestinationConfiguration;
    }

    export interface FirehoseCreateDeliveryStreamOutput {
        DeliveryStreamARN?: FirehoseDeliveryStreamARN;
    }

    export type FirehoseData = any; // not really - it was 'blob' instead - must fix this one
    export type FirehoseDataTableColumns = string;
    export type FirehoseDataTableName = string;
    export interface FirehoseDeleteDeliveryStreamInput {
        DeliveryStreamName: FirehoseDeliveryStreamName;
    }

    export interface FirehoseDeleteDeliveryStreamOutput {
    }

    export type FirehoseDeliveryStreamARN = string;
    export interface FirehoseDeliveryStreamDescription {
        DeliveryStreamName: FirehoseDeliveryStreamName;
        DeliveryStreamARN: FirehoseDeliveryStreamARN;
        DeliveryStreamStatus: FirehoseDeliveryStreamStatus;
        VersionId: FirehoseDeliveryStreamVersionId;
        CreateTimestamp?: FirehoseTimestamp;
        LastUpdateTimestamp?: FirehoseTimestamp;
        Destinations: FirehoseDestinationDescriptionList;
        HasMoreDestinations: FirehoseBooleanObject;
    }

    export type FirehoseDeliveryStreamName = string; // pattern: "[a-zA-Z0-9_.-]+"
    export type FirehoseDeliveryStreamNameList = Array<FirehoseDeliveryStreamName>;
    export type FirehoseDeliveryStreamStatus = string;
    export type FirehoseDeliveryStreamVersionId = string; // pattern: "[0-9]+"
    export interface FirehoseDescribeDeliveryStreamInput {
        DeliveryStreamName: FirehoseDeliveryStreamName;
        Limit?: FirehoseDescribeDeliveryStreamInputLimit;
        ExclusiveStartDestinationId?: FirehoseDestinationId;
    }

    export type FirehoseDescribeDeliveryStreamInputLimit = number;
    export interface FirehoseDescribeDeliveryStreamOutput {
        DeliveryStreamDescription: FirehoseDeliveryStreamDescription;
    }

    export interface FirehoseDestinationDescription {
        DestinationId: FirehoseDestinationId;
        S3DestinationDescription?: FirehoseS3DestinationDescription;
        RedshiftDestinationDescription?: FirehoseRedshiftDestinationDescription;
    }

    export type FirehoseDestinationDescriptionList = Array<FirehoseDestinationDescription>;
    export type FirehoseDestinationId = string;
    export interface FirehoseEncryptionConfiguration {
        NoEncryptionConfig?: FirehoseNoEncryptionConfig;
        KMSEncryptionConfig?: FirehoseKMSEncryptionConfig;
    }

    export type FirehoseErrorCode = string;
    export type FirehoseErrorMessage = string;
    export type FirehoseIntervalInSeconds = number;
    export interface FirehoseInvalidArgumentException {
        message?: FirehoseErrorMessage;
    }

    export interface FirehoseKMSEncryptionConfig {
        AWSKMSKeyARN: FirehoseAWSKMSKeyARN;
    }

    export interface FirehoseLimitExceededException {
        message?: FirehoseErrorMessage;
    }

    export interface FirehoseListDeliveryStreamsInput {
        Limit?: FirehoseListDeliveryStreamsInputLimit;
        ExclusiveStartDeliveryStreamName?: FirehoseDeliveryStreamName;
    }

    export type FirehoseListDeliveryStreamsInputLimit = number;
    export interface FirehoseListDeliveryStreamsOutput {
        DeliveryStreamNames: FirehoseDeliveryStreamNameList;
        HasMoreDeliveryStreams: FirehoseBooleanObject;
    }

    export type FirehoseNoEncryptionConfig = string;
    export type FirehoseNonNegativeIntegerObject = number;
    export type FirehosePassword = string;
    export type FirehosePrefix = string;
    export interface FirehosePutRecordBatchInput {
        DeliveryStreamName: FirehoseDeliveryStreamName;
        Records: FirehosePutRecordBatchRequestEntryList;
    }

    export interface FirehosePutRecordBatchOutput {
        FailedPutCount: FirehoseNonNegativeIntegerObject;
        RequestResponses: FirehosePutRecordBatchResponseEntryList;
    }

    export type FirehosePutRecordBatchRequestEntryList = Array<FirehoseRecord>; // max: 500
    export interface FirehosePutRecordBatchResponseEntry {
        RecordId?: FirehosePutResponseRecordId;
        ErrorCode?: FirehoseErrorCode;
        ErrorMessage?: FirehoseErrorMessage;
    }

    export type FirehosePutRecordBatchResponseEntryList = Array<FirehosePutRecordBatchResponseEntry>; // max: 500
    export interface FirehosePutRecordInput {
        DeliveryStreamName: FirehoseDeliveryStreamName;
        Record: FirehoseRecord;
    }

    export interface FirehosePutRecordOutput {
        RecordId: FirehosePutResponseRecordId;
    }

    export type FirehosePutResponseRecordId = string;
    export interface FirehoseRecord {
        Data: FirehoseData;
    }

    export interface FirehoseRedshiftDestinationConfiguration {
        RoleARN: FirehoseRoleARN;
        ClusterJDBCURL: FirehoseClusterJDBCURL;
        CopyCommand: FirehoseCopyCommand;
        Username: FirehoseUsername;
        Password: FirehosePassword;
        S3Configuration: FirehoseS3DestinationConfiguration;
    }

    export interface FirehoseRedshiftDestinationDescription {
        RoleARN: FirehoseRoleARN;
        ClusterJDBCURL: FirehoseClusterJDBCURL;
        CopyCommand: FirehoseCopyCommand;
        Username: FirehoseUsername;
        S3DestinationDescription: FirehoseS3DestinationDescription;
    }

    export interface FirehoseRedshiftDestinationUpdate {
        RoleARN?: FirehoseRoleARN;
        ClusterJDBCURL?: FirehoseClusterJDBCURL;
        CopyCommand?: FirehoseCopyCommand;
        Username?: FirehoseUsername;
        Password?: FirehosePassword;
        S3Update?: FirehoseS3DestinationUpdate;
    }

    export interface FirehoseResourceInUseException {
        message?: FirehoseErrorMessage;
    }

    export interface FirehoseResourceNotFoundException {
        message?: FirehoseErrorMessage;
    }

    export type FirehoseRoleARN = string; // pattern: "arn:.*"
    export interface FirehoseS3DestinationConfiguration {
        RoleARN: FirehoseRoleARN;
        BucketARN: FirehoseBucketARN;
        Prefix?: FirehosePrefix;
        BufferingHints?: FirehoseBufferingHints;
        CompressionFormat?: FirehoseCompressionFormat;
        EncryptionConfiguration?: FirehoseEncryptionConfiguration;
    }

    export interface FirehoseS3DestinationDescription {
        RoleARN: FirehoseRoleARN;
        BucketARN: FirehoseBucketARN;
        Prefix?: FirehosePrefix;
        BufferingHints: FirehoseBufferingHints;
        CompressionFormat: FirehoseCompressionFormat;
        EncryptionConfiguration: FirehoseEncryptionConfiguration;
    }

    export interface FirehoseS3DestinationUpdate {
        RoleARN?: FirehoseRoleARN;
        BucketARN?: FirehoseBucketARN;
        Prefix?: FirehosePrefix;
        BufferingHints?: FirehoseBufferingHints;
        CompressionFormat?: FirehoseCompressionFormat;
        EncryptionConfiguration?: FirehoseEncryptionConfiguration;
    }

    export interface FirehoseServiceUnavailableException {
        message?: FirehoseErrorMessage;
    }

    export type FirehoseSizeInMBs = number;
    export type FirehoseTimestamp = number;
    export interface FirehoseUpdateDestinationInput {
        DeliveryStreamName: FirehoseDeliveryStreamName;
        CurrentDeliveryStreamVersionId: FirehoseDeliveryStreamVersionId;
        DestinationId: FirehoseDestinationId;
        S3DestinationUpdate?: FirehoseS3DestinationUpdate;
        RedshiftDestinationUpdate?: FirehoseRedshiftDestinationUpdate;
    }

    export interface FirehoseUpdateDestinationOutput {
    }

    export type FirehoseUsername = string;
}
