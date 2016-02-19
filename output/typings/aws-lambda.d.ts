// Type definitions for aws-sdk - AWS Lambda
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

///<reference path="./aws-sdk-common.d.ts" />

declare module "aws-sdk" {

    /*
     * apiVersion: 2015-03-31
     * endpointPrefix: lambda
     * serviceAbbreviation: 
     * signatureVersion: v4
     * protocol: rest-json
     */
    export class Lambda extends Service {
      constructor(options?: any);
      endpoint: Endpoint;
      addPermission(params: Lambda.AddPermissionRequest, callback?: (err: Lambda.ServiceException|Lambda.ResourceNotFoundException|Lambda.ResourceConflictException|Lambda.InvalidParameterValueException|Lambda.PolicyLengthExceededException|Lambda.TooManyRequestsException|any, data: Lambda.AddPermissionResponse|any) => void): Request;
      createAlias(params: Lambda.CreateAliasRequest, callback?: (err: Lambda.ServiceException|Lambda.ResourceNotFoundException|Lambda.ResourceConflictException|Lambda.InvalidParameterValueException|Lambda.TooManyRequestsException|any, data: Lambda.AliasConfiguration|any) => void): Request;
      createEventSourceMapping(params: Lambda.CreateEventSourceMappingRequest, callback?: (err: Lambda.ServiceException|Lambda.InvalidParameterValueException|Lambda.ResourceConflictException|Lambda.TooManyRequestsException|any, data: Lambda.EventSourceMappingConfiguration|any) => void): Request;
      createFunction(params: Lambda.CreateFunctionRequest, callback?: (err: Lambda.ServiceException|Lambda.InvalidParameterValueException|Lambda.ResourceNotFoundException|Lambda.ResourceConflictException|Lambda.TooManyRequestsException|Lambda.CodeStorageExceededException|any, data: Lambda.FunctionConfiguration|any) => void): Request;
      deleteAlias(params: Lambda.DeleteAliasRequest, callback?: (err: Lambda.ServiceException|Lambda.InvalidParameterValueException|Lambda.TooManyRequestsException|any, data: any) => void): Request;
      deleteEventSourceMapping(params: Lambda.DeleteEventSourceMappingRequest, callback?: (err: Lambda.ServiceException|Lambda.ResourceNotFoundException|Lambda.InvalidParameterValueException|Lambda.TooManyRequestsException|any, data: Lambda.EventSourceMappingConfiguration|any) => void): Request;
      deleteFunction(params: Lambda.DeleteFunctionRequest, callback?: (err: Lambda.ServiceException|Lambda.ResourceNotFoundException|Lambda.TooManyRequestsException|Lambda.InvalidParameterValueException|Lambda.ResourceConflictException|any, data: any) => void): Request;
      getAlias(params: Lambda.GetAliasRequest, callback?: (err: Lambda.ServiceException|Lambda.ResourceNotFoundException|Lambda.InvalidParameterValueException|Lambda.TooManyRequestsException|any, data: Lambda.AliasConfiguration|any) => void): Request;
      getEventSourceMapping(params: Lambda.GetEventSourceMappingRequest, callback?: (err: Lambda.ServiceException|Lambda.ResourceNotFoundException|Lambda.InvalidParameterValueException|Lambda.TooManyRequestsException|any, data: Lambda.EventSourceMappingConfiguration|any) => void): Request;
      getFunction(params: Lambda.GetFunctionRequest, callback?: (err: Lambda.ServiceException|Lambda.ResourceNotFoundException|Lambda.TooManyRequestsException|Lambda.InvalidParameterValueException|any, data: Lambda.GetFunctionResponse|any) => void): Request;
      getFunctionConfiguration(params: Lambda.GetFunctionConfigurationRequest, callback?: (err: Lambda.ServiceException|Lambda.ResourceNotFoundException|Lambda.TooManyRequestsException|Lambda.InvalidParameterValueException|any, data: Lambda.FunctionConfiguration|any) => void): Request;
      getPolicy(params: Lambda.GetPolicyRequest, callback?: (err: Lambda.ServiceException|Lambda.ResourceNotFoundException|Lambda.TooManyRequestsException|Lambda.InvalidParameterValueException|any, data: Lambda.GetPolicyResponse|any) => void): Request;
      invoke(params: Lambda.InvocationRequest, callback?: (err: Lambda.ServiceException|Lambda.ResourceNotFoundException|Lambda.InvalidRequestContentException|Lambda.RequestTooLargeException|Lambda.UnsupportedMediaTypeException|Lambda.TooManyRequestsException|Lambda.InvalidParameterValueException|Lambda.EC2UnexpectedException|Lambda.SubnetIPAddressLimitReachedException|Lambda.ENILimitReachedException|Lambda.EC2ThrottledException|Lambda.EC2AccessDeniedException|Lambda.InvalidSubnetIDException|Lambda.InvalidSecurityGroupIDException|any, data: Lambda.InvocationResponse|any) => void): Request;
      invokeAsync(params: Lambda.InvokeAsyncRequest, callback?: (err: Lambda.ServiceException|Lambda.ResourceNotFoundException|Lambda.InvalidRequestContentException|any, data: Lambda.InvokeAsyncResponse|any) => void): Request;
      listAliases(params: Lambda.ListAliasesRequest, callback?: (err: Lambda.ServiceException|Lambda.ResourceNotFoundException|Lambda.InvalidParameterValueException|Lambda.TooManyRequestsException|any, data: Lambda.ListAliasesResponse|any) => void): Request;
      listEventSourceMappings(params: Lambda.ListEventSourceMappingsRequest, callback?: (err: Lambda.ServiceException|Lambda.ResourceNotFoundException|Lambda.InvalidParameterValueException|Lambda.TooManyRequestsException|any, data: Lambda.ListEventSourceMappingsResponse|any) => void): Request;
      listFunctions(params: Lambda.ListFunctionsRequest, callback?: (err: Lambda.ServiceException|Lambda.TooManyRequestsException|any, data: Lambda.ListFunctionsResponse|any) => void): Request;
      listVersionsByFunction(params: Lambda.ListVersionsByFunctionRequest, callback?: (err: Lambda.ServiceException|Lambda.ResourceNotFoundException|Lambda.InvalidParameterValueException|Lambda.TooManyRequestsException|any, data: Lambda.ListVersionsByFunctionResponse|any) => void): Request;
      publishVersion(params: Lambda.PublishVersionRequest, callback?: (err: Lambda.ServiceException|Lambda.ResourceNotFoundException|Lambda.InvalidParameterValueException|Lambda.TooManyRequestsException|Lambda.CodeStorageExceededException|any, data: Lambda.FunctionConfiguration|any) => void): Request;
      removePermission(params: Lambda.RemovePermissionRequest, callback?: (err: Lambda.ServiceException|Lambda.ResourceNotFoundException|Lambda.InvalidParameterValueException|Lambda.TooManyRequestsException|any, data: any) => void): Request;
      updateAlias(params: Lambda.UpdateAliasRequest, callback?: (err: Lambda.ServiceException|Lambda.ResourceNotFoundException|Lambda.InvalidParameterValueException|Lambda.TooManyRequestsException|any, data: Lambda.AliasConfiguration|any) => void): Request;
      updateEventSourceMapping(params: Lambda.UpdateEventSourceMappingRequest, callback?: (err: Lambda.ServiceException|Lambda.ResourceNotFoundException|Lambda.InvalidParameterValueException|Lambda.TooManyRequestsException|Lambda.ResourceConflictException|any, data: Lambda.EventSourceMappingConfiguration|any) => void): Request;
      updateFunctionCode(params: Lambda.UpdateFunctionCodeRequest, callback?: (err: Lambda.ServiceException|Lambda.ResourceNotFoundException|Lambda.InvalidParameterValueException|Lambda.TooManyRequestsException|Lambda.CodeStorageExceededException|any, data: Lambda.FunctionConfiguration|any) => void): Request;
      updateFunctionConfiguration(params: Lambda.UpdateFunctionConfigurationRequest, callback?: (err: Lambda.ServiceException|Lambda.ResourceNotFoundException|Lambda.InvalidParameterValueException|Lambda.TooManyRequestsException|any, data: Lambda.FunctionConfiguration|any) => void): Request;

    }

    export module Lambda {
        export type Action = string;    // pattern: &quot;(lambda:[*]|lambda:[a-zA-Z]+|[*])&quot;
        export type Alias = string;    // pattern: &quot;(?!^[0-9]+$)([a-zA-Z0-9-_]+)&quot;, max: 128, min: 1
        export type AliasList = AliasConfiguration[];
        export type Arn = string;    // pattern: &quot;arn:aws:([a-zA-Z0-9\-])+:([a-z]{2}-[a-z]+-\d{1})?:(\d{12})?:(.*)&quot;
        export type BatchSize = number;    // max: 10000, min: 1
        export type Blob = any;    // type: blob
        export type BlobStream = any;    // type: blob
        export type Boolean = boolean;
        export type Date = number;
        export type Description = string;    // max: 256
        export type Enabled = boolean;
        export type EventSourceMappingsList = EventSourceMappingConfiguration[];
        export type EventSourcePosition = string;
        export type FunctionArn = string;    // pattern: &quot;arn:aws:lambda:[a-z]{2}-[a-z]+-\d{1}:\d{12}:function:[a-zA-Z0-9-_]+(:(\$LATEST|[a-zA-Z0-9-_]+))?&quot;
        export type FunctionList = FunctionConfiguration[];
        export type FunctionName = string;    // pattern: &quot;(arn:aws:lambda:)?([a-z]{2}-[a-z]+-\d{1}:)?(\d{12}:)?(function:)?([a-zA-Z0-9-_]+)(:(\$LATEST|[a-zA-Z0-9-_]+))?&quot;, max: 140, min: 1
        export type Handler = string;    // pattern: &quot;[^\s]+&quot;, max: 128
        export type HttpStatus = number;
        export type Integer = number;
        export type InvocationType = string;
        export type LogType = string;
        export type Long = number;
        export type MaxListItems = number;    // max: 10000, min: 1
        export type MemorySize = number;    // max: 1536, min: 128
        export type Principal = string;    // pattern: &quot;.*&quot;
        export type Qualifier = string;    // pattern: &quot;(|[a-zA-Z0-9$_-]+)&quot;, max: 128, min: 1
        export type RoleArn = string;    // pattern: &quot;arn:aws:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+&quot;
        export type Runtime = string;
        export type S3Bucket = string;    // pattern: &quot;^[0-9A-Za-z\.\-_]*(?&lt;!\.)$&quot;, max: 63, min: 3
        export type S3Key = string;    // max: 1024, min: 1
        export type S3ObjectVersion = string;    // max: 1024, min: 1
        export type SecurityGroupId = string;
        export type SecurityGroupIds = SecurityGroupId[];    // max: 5
        export type SourceOwner = string;    // pattern: &quot;\d{12}&quot;
        export type StatementId = string;    // pattern: &quot;([a-zA-Z0-9-_]+)&quot;, max: 100, min: 1
        export type String = string;
        export type SubnetId = string;
        export type SubnetIds = SubnetId[];    // max: 16
        export type Timeout = number;    // min: 1
        export type Timestamp = string;
        export type Version = string;    // pattern: &quot;(\$LATEST|[0-9]+)&quot;, max: 1024, min: 1
        export type VpcId = string;

        export interface AddPermissionRequest {
            FunctionName: FunctionName;
            StatementId: StatementId;
            Action: Action;
            Principal: Principal;
            SourceArn?: Arn;
            SourceAccount?: SourceOwner;
            Qualifier?: Qualifier;
        }
        export interface AddPermissionResponse {
            Statement?: String;
        }
        export interface AliasConfiguration {
            AliasArn?: FunctionArn;
            Name?: Alias;
            FunctionVersion?: Version;
            Description?: Description;
        }
        export interface CodeStorageExceededException {
            Type?: String;
            message?: String;
        }
        export interface CreateAliasRequest {
            FunctionName: FunctionName;
            Name: Alias;
            FunctionVersion: Version;
            Description?: Description;
        }
        export interface CreateEventSourceMappingRequest {
            EventSourceArn: Arn;
            FunctionName: FunctionName;
            Enabled?: Enabled;
            BatchSize?: BatchSize;
            StartingPosition: EventSourcePosition;
        }
        export interface CreateFunctionRequest {
            FunctionName: FunctionName;
            Runtime: Runtime;
            Role: RoleArn;
            Handler: Handler;
            Code: FunctionCode;
            Description?: Description;
            Timeout?: Timeout;
            MemorySize?: MemorySize;
            Publish?: Boolean;
            VpcConfig?: VpcConfig;
        }
        export interface DeleteAliasRequest {
            FunctionName: FunctionName;
            Name: Alias;
        }
        export interface DeleteEventSourceMappingRequest {
            UUID: String;
        }
        export interface DeleteFunctionRequest {
            FunctionName: FunctionName;
            Qualifier?: Qualifier;
        }
        export interface EC2AccessDeniedException {
            Type?: String;
            Message?: String;
        }
        export interface EC2ThrottledException {
            Type?: String;
            Message?: String;
        }
        export interface EC2UnexpectedException {
            Type?: String;
            Message?: String;
            EC2ErrorCode?: String;
        }
        export interface ENILimitReachedException {
            Type?: String;
            Message?: String;
        }
        export interface EventSourceMappingConfiguration {
            UUID?: String;
            BatchSize?: BatchSize;
            EventSourceArn?: Arn;
            FunctionArn?: FunctionArn;
            LastModified?: Date;
            LastProcessingResult?: String;
            State?: String;
            StateTransitionReason?: String;
        }
        export interface FunctionCode {
            ZipFile?: Blob;
            S3Bucket?: S3Bucket;
            S3Key?: S3Key;
            S3ObjectVersion?: S3ObjectVersion;
        }
        export interface FunctionCodeLocation {
            RepositoryType?: String;
            Location?: String;
        }
        export interface FunctionConfiguration {
            FunctionName?: FunctionName;
            FunctionArn?: FunctionArn;
            Runtime?: Runtime;
            Role?: RoleArn;
            Handler?: Handler;
            CodeSize?: Long;
            Description?: Description;
            Timeout?: Timeout;
            MemorySize?: MemorySize;
            LastModified?: Timestamp;
            CodeSha256?: String;
            Version?: Version;
            VpcConfig?: VpcConfigResponse;
        }
        export interface GetAliasRequest {
            FunctionName: FunctionName;
            Name: Alias;
        }
        export interface GetEventSourceMappingRequest {
            UUID: String;
        }
        export interface GetFunctionConfigurationRequest {
            FunctionName: FunctionName;
            Qualifier?: Qualifier;
        }
        export interface GetFunctionRequest {
            FunctionName: FunctionName;
            Qualifier?: Qualifier;
        }
        export interface GetFunctionResponse {
            Configuration?: FunctionConfiguration;
            Code?: FunctionCodeLocation;
        }
        export interface GetPolicyRequest {
            FunctionName: FunctionName;
            Qualifier?: Qualifier;
        }
        export interface GetPolicyResponse {
            Policy?: String;
        }
        export interface InvalidParameterValueException {
            Type?: String;
            message?: String;
        }
        export interface InvalidRequestContentException {
            Type?: String;
            message?: String;
        }
        export interface InvalidSecurityGroupIDException {
            Type?: String;
            Message?: String;
        }
        export interface InvalidSubnetIDException {
            Type?: String;
            Message?: String;
        }
        export interface InvocationRequest {
            FunctionName: FunctionName;
            InvocationType?: InvocationType;
            LogType?: LogType;
            ClientContext?: String;
            Payload?: Blob;
            Qualifier?: Qualifier;
        }
        export interface InvocationResponse {
            StatusCode?: Integer;
            FunctionError?: String;
            LogResult?: String;
            Payload?: Blob;
        }
        export interface InvokeAsyncRequest {
            FunctionName: FunctionName;
            InvokeArgs: BlobStream;
        }
        export interface InvokeAsyncResponse {
            Status?: HttpStatus;
        }
        export interface ListAliasesRequest {
            FunctionName: FunctionName;
            FunctionVersion?: Version;
            Marker?: String;
            MaxItems?: MaxListItems;
        }
        export interface ListAliasesResponse {
            NextMarker?: String;
            Aliases?: AliasList;
        }
        export interface ListEventSourceMappingsRequest {
            EventSourceArn?: Arn;
            FunctionName?: FunctionName;
            Marker?: String;
            MaxItems?: MaxListItems;
        }
        export interface ListEventSourceMappingsResponse {
            NextMarker?: String;
            EventSourceMappings?: EventSourceMappingsList;
        }
        export interface ListFunctionsRequest {
            Marker?: String;
            MaxItems?: MaxListItems;
        }
        export interface ListFunctionsResponse {
            NextMarker?: String;
            Functions?: FunctionList;
        }
        export interface ListVersionsByFunctionRequest {
            FunctionName: FunctionName;
            Marker?: String;
            MaxItems?: MaxListItems;
        }
        export interface ListVersionsByFunctionResponse {
            NextMarker?: String;
            Versions?: FunctionList;
        }
        export interface PolicyLengthExceededException {
            Type?: String;
            message?: String;
        }
        export interface PublishVersionRequest {
            FunctionName: FunctionName;
            CodeSha256?: String;
            Description?: Description;
        }
        export interface RemovePermissionRequest {
            FunctionName: FunctionName;
            StatementId: StatementId;
            Qualifier?: Qualifier;
        }
        export interface RequestTooLargeException {
            Type?: String;
            message?: String;
        }
        export interface ResourceConflictException {
            Type?: String;
            message?: String;
        }
        export interface ResourceNotFoundException {
            Type?: String;
            Message?: String;
        }
        export interface ServiceException {
            Type?: String;
            Message?: String;
        }
        export interface SubnetIPAddressLimitReachedException {
            Type?: String;
            Message?: String;
        }
        export interface TooManyRequestsException {
            retryAfterSeconds?: String;
            Type?: String;
            message?: String;
        }
        export interface UnsupportedMediaTypeException {
            Type?: String;
            message?: String;
        }
        export interface UpdateAliasRequest {
            FunctionName: FunctionName;
            Name: Alias;
            FunctionVersion?: Version;
            Description?: Description;
        }
        export interface UpdateEventSourceMappingRequest {
            UUID: String;
            FunctionName?: FunctionName;
            Enabled?: Enabled;
            BatchSize?: BatchSize;
        }
        export interface UpdateFunctionCodeRequest {
            FunctionName: FunctionName;
            ZipFile?: Blob;
            S3Bucket?: S3Bucket;
            S3Key?: S3Key;
            S3ObjectVersion?: S3ObjectVersion;
            Publish?: Boolean;
        }
        export interface UpdateFunctionConfigurationRequest {
            FunctionName: FunctionName;
            Role?: RoleArn;
            Handler?: Handler;
            Description?: Description;
            Timeout?: Timeout;
            MemorySize?: MemorySize;
            VpcConfig?: VpcConfig;
        }
        export interface VpcConfig {
            SubnetIds?: SubnetIds;
            SecurityGroupIds?: SecurityGroupIds;
        }
        export interface VpcConfigResponse {
            SubnetIds?: SubnetIds;
            SecurityGroupIds?: SecurityGroupIds;
            VpcId?: VpcId;
        }

    }
}
