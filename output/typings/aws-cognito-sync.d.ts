// Type definitions for aws-sdk - Amazon Cognito Sync
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

///<reference path="./aws-sdk-common.d.ts" />

declare module "aws-sdk" {

    /*
     * apiVersion: 2014-06-30
     * endpointPrefix: cognito-sync
     * serviceAbbreviation: 
     * signatureVersion: v4
     * protocol: rest-json
     */
    export class CognitoSync extends Service {
      constructor(options?: any);
      endpoint: Endpoint;
      bulkPublish(params: CognitoSync.BulkPublishRequest, callback?: (err: CognitoSync.NotAuthorizedException|CognitoSync.InvalidParameterException|CognitoSync.ResourceNotFoundException|CognitoSync.InternalErrorException|CognitoSync.DuplicateRequestException|CognitoSync.AlreadyStreamedException|any, data: CognitoSync.BulkPublishResponse|any) => void): Request;
      deleteDataset(params: CognitoSync.DeleteDatasetRequest, callback?: (err: CognitoSync.NotAuthorizedException|CognitoSync.InvalidParameterException|CognitoSync.ResourceNotFoundException|CognitoSync.InternalErrorException|CognitoSync.TooManyRequestsException|CognitoSync.ResourceConflictException|any, data: CognitoSync.DeleteDatasetResponse|any) => void): Request;
      describeDataset(params: CognitoSync.DescribeDatasetRequest, callback?: (err: CognitoSync.NotAuthorizedException|CognitoSync.InvalidParameterException|CognitoSync.ResourceNotFoundException|CognitoSync.InternalErrorException|CognitoSync.TooManyRequestsException|any, data: CognitoSync.DescribeDatasetResponse|any) => void): Request;
      describeIdentityPoolUsage(params: CognitoSync.DescribeIdentityPoolUsageRequest, callback?: (err: CognitoSync.NotAuthorizedException|CognitoSync.InvalidParameterException|CognitoSync.ResourceNotFoundException|CognitoSync.InternalErrorException|CognitoSync.TooManyRequestsException|any, data: CognitoSync.DescribeIdentityPoolUsageResponse|any) => void): Request;
      describeIdentityUsage(params: CognitoSync.DescribeIdentityUsageRequest, callback?: (err: CognitoSync.NotAuthorizedException|CognitoSync.InvalidParameterException|CognitoSync.ResourceNotFoundException|CognitoSync.InternalErrorException|CognitoSync.TooManyRequestsException|any, data: CognitoSync.DescribeIdentityUsageResponse|any) => void): Request;
      getBulkPublishDetails(params: CognitoSync.GetBulkPublishDetailsRequest, callback?: (err: CognitoSync.NotAuthorizedException|CognitoSync.InvalidParameterException|CognitoSync.ResourceNotFoundException|CognitoSync.InternalErrorException|any, data: CognitoSync.GetBulkPublishDetailsResponse|any) => void): Request;
      getCognitoEvents(params: CognitoSync.GetCognitoEventsRequest, callback?: (err: CognitoSync.InvalidParameterException|CognitoSync.ResourceNotFoundException|CognitoSync.NotAuthorizedException|CognitoSync.InternalErrorException|CognitoSync.TooManyRequestsException|any, data: CognitoSync.GetCognitoEventsResponse|any) => void): Request;
      getIdentityPoolConfiguration(params: CognitoSync.GetIdentityPoolConfigurationRequest, callback?: (err: CognitoSync.NotAuthorizedException|CognitoSync.InvalidParameterException|CognitoSync.ResourceNotFoundException|CognitoSync.InternalErrorException|CognitoSync.TooManyRequestsException|any, data: CognitoSync.GetIdentityPoolConfigurationResponse|any) => void): Request;
      listDatasets(params: CognitoSync.ListDatasetsRequest, callback?: (err: CognitoSync.NotAuthorizedException|CognitoSync.InvalidParameterException|CognitoSync.InternalErrorException|CognitoSync.TooManyRequestsException|any, data: CognitoSync.ListDatasetsResponse|any) => void): Request;
      listIdentityPoolUsage(params: CognitoSync.ListIdentityPoolUsageRequest, callback?: (err: CognitoSync.NotAuthorizedException|CognitoSync.InvalidParameterException|CognitoSync.InternalErrorException|CognitoSync.TooManyRequestsException|any, data: CognitoSync.ListIdentityPoolUsageResponse|any) => void): Request;
      listRecords(params: CognitoSync.ListRecordsRequest, callback?: (err: CognitoSync.InvalidParameterException|CognitoSync.NotAuthorizedException|CognitoSync.TooManyRequestsException|CognitoSync.InternalErrorException|any, data: CognitoSync.ListRecordsResponse|any) => void): Request;
      registerDevice(params: CognitoSync.RegisterDeviceRequest, callback?: (err: CognitoSync.NotAuthorizedException|CognitoSync.InvalidParameterException|CognitoSync.ResourceNotFoundException|CognitoSync.InternalErrorException|CognitoSync.InvalidConfigurationException|CognitoSync.TooManyRequestsException|any, data: CognitoSync.RegisterDeviceResponse|any) => void): Request;
      setCognitoEvents(params: CognitoSync.SetCognitoEventsRequest, callback?: (err: CognitoSync.InvalidParameterException|CognitoSync.ResourceNotFoundException|CognitoSync.NotAuthorizedException|CognitoSync.InternalErrorException|CognitoSync.TooManyRequestsException|any, data: any) => void): Request;
      setIdentityPoolConfiguration(params: CognitoSync.SetIdentityPoolConfigurationRequest, callback?: (err: CognitoSync.NotAuthorizedException|CognitoSync.InvalidParameterException|CognitoSync.ResourceNotFoundException|CognitoSync.InternalErrorException|CognitoSync.TooManyRequestsException|CognitoSync.ConcurrentModificationException|any, data: CognitoSync.SetIdentityPoolConfigurationResponse|any) => void): Request;
      subscribeToDataset(params: CognitoSync.SubscribeToDatasetRequest, callback?: (err: CognitoSync.NotAuthorizedException|CognitoSync.InvalidParameterException|CognitoSync.ResourceNotFoundException|CognitoSync.InternalErrorException|CognitoSync.InvalidConfigurationException|CognitoSync.TooManyRequestsException|any, data: CognitoSync.SubscribeToDatasetResponse|any) => void): Request;
      unsubscribeFromDataset(params: CognitoSync.UnsubscribeFromDatasetRequest, callback?: (err: CognitoSync.NotAuthorizedException|CognitoSync.InvalidParameterException|CognitoSync.ResourceNotFoundException|CognitoSync.InternalErrorException|CognitoSync.InvalidConfigurationException|CognitoSync.TooManyRequestsException|any, data: CognitoSync.UnsubscribeFromDatasetResponse|any) => void): Request;
      updateRecords(params: CognitoSync.UpdateRecordsRequest, callback?: (err: CognitoSync.InvalidParameterException|CognitoSync.LimitExceededException|CognitoSync.NotAuthorizedException|CognitoSync.ResourceNotFoundException|CognitoSync.ResourceConflictException|CognitoSync.InvalidLambdaFunctionOutputException|CognitoSync.LambdaThrottledException|CognitoSync.TooManyRequestsException|CognitoSync.InternalErrorException|any, data: CognitoSync.UpdateRecordsResponse|any) => void): Request;

    }

    export module CognitoSync {
        export type ApplicationArn = string;    // pattern: &quot;arn:aws:sns:[-0-9a-z]+:\d+:app/[A-Z_]+/[a-zA-Z0-9_.-]+&quot;
        export type ApplicationArnList = ApplicationArn[];
        export type AssumeRoleArn = string;    // pattern: &quot;arn:aws:iam::\d+:role/.*&quot;, max: 2048, min: 20
        export type Boolean = boolean;
        export type BulkPublishStatus = string;
        export type ClientContext = string;
        export type CognitoEventType = string;
        export type DatasetList = Dataset[];
        export type DatasetName = string;    // pattern: &quot;[a-zA-Z0-9_.:-]+&quot;, max: 128, min: 1
        export type Date = number;
        export type DeviceId = string;    // max: 256, min: 1
        export type Events = {[key:string]: LambdaFunctionArn};    // max: 1
        export type ExceptionMessage = string;
        export type IdentityId = string;    // pattern: &quot;[\w-]+:[0-9a-f-]+&quot;, max: 55, min: 1
        export type IdentityPoolId = string;    // pattern: &quot;[\w-]+:[0-9a-f-]+&quot;, max: 55, min: 1
        export type IdentityPoolUsageList = IdentityPoolUsage[];
        export type Integer = number;
        export type IntegerString = number;
        export type LambdaFunctionArn = string;
        export type Long = number;
        export type MergedDatasetNameList = String[];
        export type Operation = string;
        export type Platform = string;
        export type PushToken = string;
        export type RecordKey = string;    // max: 1024, min: 1
        export type RecordList = Record[];
        export type RecordPatchList = RecordPatch[];
        export type RecordValue = string;    // max: 1048575
        export type StreamName = string;    // max: 128, min: 1
        export type StreamingStatus = string;
        export type String = string;
        export type SyncSessionToken = string;

        export interface AlreadyStreamedException {
            message: ExceptionMessage;
        }
        export interface BulkPublishRequest {
            IdentityPoolId: IdentityPoolId;
        }
        export interface BulkPublishResponse {
            IdentityPoolId?: IdentityPoolId;
        }
        export interface CognitoStreams {
            StreamName?: StreamName;
            RoleArn?: AssumeRoleArn;
            StreamingStatus?: StreamingStatus;
        }
        export interface ConcurrentModificationException {
            message: String;
        }
        export interface Dataset {
            IdentityId?: IdentityId;
            DatasetName?: DatasetName;
            CreationDate?: Date;
            LastModifiedDate?: Date;
            LastModifiedBy?: String;
            DataStorage?: Long;
            NumRecords?: Long;
        }
        export interface DeleteDatasetRequest {
            IdentityPoolId: IdentityPoolId;
            IdentityId: IdentityId;
            DatasetName: DatasetName;
        }
        export interface DeleteDatasetResponse {
            Dataset?: Dataset;
        }
        export interface DescribeDatasetRequest {
            IdentityPoolId: IdentityPoolId;
            IdentityId: IdentityId;
            DatasetName: DatasetName;
        }
        export interface DescribeDatasetResponse {
            Dataset?: Dataset;
        }
        export interface DescribeIdentityPoolUsageRequest {
            IdentityPoolId: IdentityPoolId;
        }
        export interface DescribeIdentityPoolUsageResponse {
            IdentityPoolUsage?: IdentityPoolUsage;
        }
        export interface DescribeIdentityUsageRequest {
            IdentityPoolId: IdentityPoolId;
            IdentityId: IdentityId;
        }
        export interface DescribeIdentityUsageResponse {
            IdentityUsage?: IdentityUsage;
        }
        export interface DuplicateRequestException {
            message: ExceptionMessage;
        }
        export interface GetBulkPublishDetailsRequest {
            IdentityPoolId: IdentityPoolId;
        }
        export interface GetBulkPublishDetailsResponse {
            IdentityPoolId?: IdentityPoolId;
            BulkPublishStartTime?: Date;
            BulkPublishCompleteTime?: Date;
            BulkPublishStatus?: BulkPublishStatus;
            FailureMessage?: String;
        }
        export interface GetCognitoEventsRequest {
            IdentityPoolId: IdentityPoolId;
        }
        export interface GetCognitoEventsResponse {
            Events?: Events;
        }
        export interface GetIdentityPoolConfigurationRequest {
            IdentityPoolId: IdentityPoolId;
        }
        export interface GetIdentityPoolConfigurationResponse {
            IdentityPoolId?: IdentityPoolId;
            PushSync?: PushSync;
            CognitoStreams?: CognitoStreams;
        }
        export interface IdentityPoolUsage {
            IdentityPoolId?: IdentityPoolId;
            SyncSessionsCount?: Long;
            DataStorage?: Long;
            LastModifiedDate?: Date;
        }
        export interface IdentityUsage {
            IdentityId?: IdentityId;
            IdentityPoolId?: IdentityPoolId;
            LastModifiedDate?: Date;
            DatasetCount?: Integer;
            DataStorage?: Long;
        }
        export interface InternalErrorException {
            message: ExceptionMessage;
        }
        export interface InvalidConfigurationException {
            message: ExceptionMessage;
        }
        export interface InvalidLambdaFunctionOutputException {
            message: ExceptionMessage;
        }
        export interface InvalidParameterException {
            message: ExceptionMessage;
        }
        export interface LambdaThrottledException {
            message: ExceptionMessage;
        }
        export interface LimitExceededException {
            message: ExceptionMessage;
        }
        export interface ListDatasetsRequest {
            IdentityPoolId: IdentityPoolId;
            IdentityId: IdentityId;
            NextToken?: String;
            MaxResults?: IntegerString;
        }
        export interface ListDatasetsResponse {
            Datasets?: DatasetList;
            Count?: Integer;
            NextToken?: String;
        }
        export interface ListIdentityPoolUsageRequest {
            NextToken?: String;
            MaxResults?: IntegerString;
        }
        export interface ListIdentityPoolUsageResponse {
            IdentityPoolUsages?: IdentityPoolUsageList;
            MaxResults?: Integer;
            Count?: Integer;
            NextToken?: String;
        }
        export interface ListRecordsRequest {
            IdentityPoolId: IdentityPoolId;
            IdentityId: IdentityId;
            DatasetName: DatasetName;
            LastSyncCount?: Long;
            NextToken?: String;
            MaxResults?: IntegerString;
            SyncSessionToken?: SyncSessionToken;
        }
        export interface ListRecordsResponse {
            Records?: RecordList;
            NextToken?: String;
            Count?: Integer;
            DatasetSyncCount?: Long;
            LastModifiedBy?: String;
            MergedDatasetNames?: MergedDatasetNameList;
            DatasetExists?: Boolean;
            DatasetDeletedAfterRequestedSyncCount?: Boolean;
            SyncSessionToken?: String;
        }
        export interface NotAuthorizedException {
            message: ExceptionMessage;
        }
        export interface PushSync {
            ApplicationArns?: ApplicationArnList;
            RoleArn?: AssumeRoleArn;
        }
        export interface Record {
            Key?: RecordKey;
            Value?: RecordValue;
            SyncCount?: Long;
            LastModifiedDate?: Date;
            LastModifiedBy?: String;
            DeviceLastModifiedDate?: Date;
        }
        export interface RecordPatch {
            Op: Operation;
            Key: RecordKey;
            Value?: RecordValue;
            SyncCount: Long;
            DeviceLastModifiedDate?: Date;
        }
        export interface RegisterDeviceRequest {
            IdentityPoolId: IdentityPoolId;
            IdentityId: IdentityId;
            Platform: Platform;
            Token: PushToken;
        }
        export interface RegisterDeviceResponse {
            DeviceId?: DeviceId;
        }
        export interface ResourceConflictException {
            message: ExceptionMessage;
        }
        export interface ResourceNotFoundException {
            message: ExceptionMessage;
        }
        export interface SetCognitoEventsRequest {
            IdentityPoolId: IdentityPoolId;
            Events: Events;
        }
        export interface SetIdentityPoolConfigurationRequest {
            IdentityPoolId: IdentityPoolId;
            PushSync?: PushSync;
            CognitoStreams?: CognitoStreams;
        }
        export interface SetIdentityPoolConfigurationResponse {
            IdentityPoolId?: IdentityPoolId;
            PushSync?: PushSync;
            CognitoStreams?: CognitoStreams;
        }
        export interface SubscribeToDatasetRequest {
            IdentityPoolId: IdentityPoolId;
            IdentityId: IdentityId;
            DatasetName: DatasetName;
            DeviceId: DeviceId;
        }
        export interface SubscribeToDatasetResponse {
        }
        export interface TooManyRequestsException {
            message: ExceptionMessage;
        }
        export interface UnsubscribeFromDatasetRequest {
            IdentityPoolId: IdentityPoolId;
            IdentityId: IdentityId;
            DatasetName: DatasetName;
            DeviceId: DeviceId;
        }
        export interface UnsubscribeFromDatasetResponse {
        }
        export interface UpdateRecordsRequest {
            IdentityPoolId: IdentityPoolId;
            IdentityId: IdentityId;
            DatasetName: DatasetName;
            DeviceId?: DeviceId;
            RecordPatches?: RecordPatchList;
            SyncSessionToken: SyncSessionToken;
            ClientContext?: ClientContext;
        }
        export interface UpdateRecordsResponse {
            Records?: RecordList;
        }

    }
}
