// Type definitions for aws-sdk - Amazon Simple Systems Management Service
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

///<reference path="./aws-sdk-common.d.ts" />

declare module "aws-sdk" {

    /*
     * apiVersion: 2014-11-06
     * endpointPrefix: ssm
     * serviceAbbreviation: Amazon SSM
     * signatureVersion: v4
     * protocol: json
     */
    export class SSM extends Service {
      constructor(options?: any);
      endpoint: Endpoint;
      cancelCommand(params: SSM.CancelCommandRequest, callback?: (err: SSM.InvalidCommandId|SSM.InvalidInstanceId|SSM.DuplicateInstanceId|any, data: SSM.CancelCommandResult|any) => void): Request;
      createAssociation(params: SSM.CreateAssociationRequest, callback?: (err: SSM.AssociationAlreadyExists|SSM.AssociationLimitExceeded|SSM.InternalServerError|SSM.InvalidDocument|SSM.InvalidInstanceId|SSM.UnsupportedPlatformType|SSM.InvalidParameters|any, data: SSM.CreateAssociationResult|any) => void): Request;
      createAssociationBatch(params: SSM.CreateAssociationBatchRequest, callback?: (err: SSM.InternalServerError|SSM.InvalidDocument|SSM.InvalidInstanceId|SSM.InvalidParameters|SSM.DuplicateInstanceId|SSM.AssociationLimitExceeded|SSM.UnsupportedPlatformType|any, data: SSM.CreateAssociationBatchResult|any) => void): Request;
      createDocument(params: SSM.CreateDocumentRequest, callback?: (err: SSM.DocumentAlreadyExists|SSM.MaxDocumentSizeExceeded|SSM.InternalServerError|SSM.InvalidDocumentContent|SSM.DocumentLimitExceeded|any, data: SSM.CreateDocumentResult|any) => void): Request;
      deleteAssociation(params: SSM.DeleteAssociationRequest, callback?: (err: SSM.AssociationDoesNotExist|SSM.InternalServerError|SSM.InvalidDocument|SSM.InvalidInstanceId|SSM.TooManyUpdates|any, data: SSM.DeleteAssociationResult|any) => void): Request;
      deleteDocument(params: SSM.DeleteDocumentRequest, callback?: (err: SSM.InternalServerError|SSM.InvalidDocument|SSM.AssociatedInstances|any, data: SSM.DeleteDocumentResult|any) => void): Request;
      describeAssociation(params: SSM.DescribeAssociationRequest, callback?: (err: SSM.AssociationDoesNotExist|SSM.InternalServerError|SSM.InvalidDocument|SSM.InvalidInstanceId|any, data: SSM.DescribeAssociationResult|any) => void): Request;
      describeDocument(params: SSM.DescribeDocumentRequest, callback?: (err: SSM.InternalServerError|SSM.InvalidDocument|any, data: SSM.DescribeDocumentResult|any) => void): Request;
      describeInstanceInformation(params: SSM.DescribeInstanceInformationRequest, callback?: (err: SSM.InternalServerError|SSM.InvalidInstanceId|SSM.InvalidNextToken|SSM.InvalidInstanceInformationFilterValue|SSM.InvalidFilterKey|any, data: SSM.DescribeInstanceInformationResult|any) => void): Request;
      getDocument(params: SSM.GetDocumentRequest, callback?: (err: SSM.InternalServerError|SSM.InvalidDocument|any, data: SSM.GetDocumentResult|any) => void): Request;
      listAssociations(params: SSM.ListAssociationsRequest, callback?: (err: SSM.InternalServerError|SSM.InvalidNextToken|any, data: SSM.ListAssociationsResult|any) => void): Request;
      listCommandInvocations(params: SSM.ListCommandInvocationsRequest, callback?: (err: SSM.InvalidCommandId|SSM.InvalidInstanceId|SSM.InvalidFilterKey|SSM.InvalidNextToken|any, data: SSM.ListCommandInvocationsResult|any) => void): Request;
      listCommands(params: SSM.ListCommandsRequest, callback?: (err: SSM.InvalidCommandId|SSM.InvalidInstanceId|SSM.InvalidFilterKey|SSM.InvalidNextToken|any, data: SSM.ListCommandsResult|any) => void): Request;
      listDocuments(params: SSM.ListDocumentsRequest, callback?: (err: SSM.InternalServerError|SSM.InvalidNextToken|SSM.InvalidFilterKey|any, data: SSM.ListDocumentsResult|any) => void): Request;
      sendCommand(params: SSM.SendCommandRequest, callback?: (err: SSM.DuplicateInstanceId|SSM.InvalidInstanceId|SSM.InvalidDocument|SSM.InvalidOutputFolder|SSM.InvalidParameters|SSM.UnsupportedPlatformType|any, data: SSM.SendCommandResult|any) => void): Request;
      updateAssociationStatus(params: SSM.UpdateAssociationStatusRequest, callback?: (err: SSM.InternalServerError|SSM.InvalidInstanceId|SSM.InvalidDocument|SSM.AssociationDoesNotExist|SSM.StatusUnchanged|SSM.TooManyUpdates|any, data: SSM.UpdateAssociationStatusResult|any) => void): Request;

    }

    export module SSM {
        export type AssociationDescriptionList = AssociationDescription[];
        export type AssociationFilterKey = string;
        export type AssociationFilterList = AssociationFilter[];    // min: 1
        export type AssociationFilterValue = string;    // min: 1
        export type AssociationList = Association[];
        export type AssociationStatusName = string;
        export type BatchErrorMessage = string;
        export type Boolean = boolean;
        export type CommandFilterKey = string;
        export type CommandFilterList = CommandFilter[];    // max: 3, min: 1
        export type CommandFilterValue = string;    // min: 1
        export type CommandId = string;    // max: 36, min: 36
        export type CommandInvocationList = CommandInvocation[];
        export type CommandInvocationStatus = string;
        export type CommandList = Command[];
        export type CommandMaxResults = number;    // max: 50, min: 1
        export type CommandPluginList = CommandPlugin[];
        export type CommandPluginName = string;    // min: 4
        export type CommandPluginOutput = string;    // max: 2500
        export type CommandPluginStatus = string;
        export type CommandStatus = string;
        export type Comment = string;    // max: 100
        export type CreateAssociationBatchRequestEntries = CreateAssociationBatchRequestEntry[];
        export type DateTime = number;
        export type DescriptionInDocument = string;
        export type DocumentContent = string;    // min: 1
        export type DocumentFilterKey = string;
        export type DocumentFilterList = DocumentFilter[];    // min: 1
        export type DocumentFilterValue = string;    // min: 1
        export type DocumentIdentifierList = DocumentIdentifier[];
        export type DocumentName = string;    // pattern: &quot;^[a-zA-Z0-9_\-.]{3,128}$&quot;
        export type DocumentParameterDefaultValue = string;
        export type DocumentParameterDescrption = string;
        export type DocumentParameterList = DocumentParameter[];
        export type DocumentParameterName = string;
        export type DocumentParameterType = string;
        export type DocumentSha1 = string;
        export type DocumentStatus = string;
        export type FailedCreateAssociationList = FailedCreateAssociation[];
        export type Fault = string;
        export type InstanceId = string;    // pattern: &quot;(^i-(\w{8}|\w{17})$)|(^op-\w{17}$)&quot;
        export type InstanceIdList = InstanceId[];    // max: 50, min: 1
        export type InstanceInformationFilterKey = string;
        export type InstanceInformationFilterList = InstanceInformationFilter[];    // min: 1
        export type InstanceInformationFilterValue = string;    // min: 1
        export type InstanceInformationFilterValueSet = InstanceInformationFilterValue[];    // max: 100, min: 1
        export type InstanceInformationList = InstanceInformation[];
        export type InvocationTraceOutput = string;    // max: 2500
        export type MaxResults = number;    // max: 25, min: 1
        export type MaxResultsEC2Compatible = number;    // max: 50, min: 5
        export type NextToken = string;
        export type ParameterName = string;
        export type ParameterValue = string;
        export type ParameterValueList = ParameterValue[];
        export type Parameters = {[key:string]: ParameterValueList};
        export type PingStatus = string;
        export type PlatformType = string;
        export type PlatformTypeList = PlatformType[];
        export type ResponseCode = number;
        export type S3BucketName = string;    // max: 63, min: 3
        export type S3KeyPrefix = string;    // max: 500
        export type StatusAdditionalInfo = string;    // max: 1024
        export type StatusMessage = string;    // max: 1024
        export type String = string;
        export type TimeoutSeconds = number;    // max: 2592000, min: 30
        export type Version = string;    // pattern: &quot;^[0-9]{1,6}(\.[0-9]{1,6}){2,3}$&quot;

        export interface AssociatedInstances {
        }
        export interface Association {
            Name?: DocumentName;
            InstanceId?: InstanceId;
        }
        export interface AssociationAlreadyExists {
        }
        export interface AssociationDescription {
            Name?: DocumentName;
            InstanceId?: InstanceId;
            Date?: DateTime;
            Status?: AssociationStatus;
            Parameters?: Parameters;
        }
        export interface AssociationDoesNotExist {
        }
        export interface AssociationFilter {
            key: AssociationFilterKey;
            value: AssociationFilterValue;
        }
        export interface AssociationLimitExceeded {
        }
        export interface AssociationStatus {
            Date: DateTime;
            Name: AssociationStatusName;
            Message: StatusMessage;
            AdditionalInfo?: StatusAdditionalInfo;
        }
        export interface CancelCommandRequest {
            CommandId: CommandId;
            InstanceIds?: InstanceIdList;
        }
        export interface CancelCommandResult {
        }
        export interface Command {
            CommandId?: CommandId;
            DocumentName?: DocumentName;
            Comment?: Comment;
            ExpiresAfter?: DateTime;
            Parameters?: Parameters;
            InstanceIds?: InstanceIdList;
            RequestedDateTime?: DateTime;
            Status?: CommandStatus;
            OutputS3BucketName?: S3BucketName;
            OutputS3KeyPrefix?: S3KeyPrefix;
        }
        export interface CommandFilter {
            key: CommandFilterKey;
            value: CommandFilterValue;
        }
        export interface CommandInvocation {
            CommandId?: CommandId;
            InstanceId?: InstanceId;
            Comment?: Comment;
            DocumentName?: DocumentName;
            RequestedDateTime?: DateTime;
            Status?: CommandInvocationStatus;
            TraceOutput?: InvocationTraceOutput;
            CommandPlugins?: CommandPluginList;
        }
        export interface CommandPlugin {
            Name?: CommandPluginName;
            Status?: CommandPluginStatus;
            ResponseCode?: ResponseCode;
            ResponseStartDateTime?: DateTime;
            ResponseFinishDateTime?: DateTime;
            Output?: CommandPluginOutput;
            OutputS3BucketName?: S3BucketName;
            OutputS3KeyPrefix?: S3KeyPrefix;
        }
        export interface CreateAssociationBatchRequest {
            Entries: CreateAssociationBatchRequestEntries;
        }
        export interface CreateAssociationBatchRequestEntry {
            Name?: DocumentName;
            InstanceId?: InstanceId;
            Parameters?: Parameters;
        }
        export interface CreateAssociationBatchResult {
            Successful?: AssociationDescriptionList;
            Failed?: FailedCreateAssociationList;
        }
        export interface CreateAssociationRequest {
            Name: DocumentName;
            InstanceId: InstanceId;
            Parameters?: Parameters;
        }
        export interface CreateAssociationResult {
            AssociationDescription?: AssociationDescription;
        }
        export interface CreateDocumentRequest {
            Content: DocumentContent;
            Name: DocumentName;
        }
        export interface CreateDocumentResult {
            DocumentDescription?: DocumentDescription;
        }
        export interface DeleteAssociationRequest {
            Name: DocumentName;
            InstanceId: InstanceId;
        }
        export interface DeleteAssociationResult {
        }
        export interface DeleteDocumentRequest {
            Name: DocumentName;
        }
        export interface DeleteDocumentResult {
        }
        export interface DescribeAssociationRequest {
            Name: DocumentName;
            InstanceId: InstanceId;
        }
        export interface DescribeAssociationResult {
            AssociationDescription?: AssociationDescription;
        }
        export interface DescribeDocumentRequest {
            Name: DocumentName;
        }
        export interface DescribeDocumentResult {
            Document?: DocumentDescription;
        }
        export interface DescribeInstanceInformationRequest {
            InstanceInformationFilterList?: InstanceInformationFilterList;
            MaxResults?: MaxResultsEC2Compatible;
            NextToken?: NextToken;
        }
        export interface DescribeInstanceInformationResult {
            InstanceInformationList?: InstanceInformationList;
            NextToken?: NextToken;
        }
        export interface DocumentAlreadyExists {
        }
        export interface DocumentDescription {
            Sha1?: DocumentSha1;
            Name?: DocumentName;
            CreatedDate?: DateTime;
            Status?: DocumentStatus;
            Description?: DescriptionInDocument;
            Parameters?: DocumentParameterList;
            PlatformTypes?: PlatformTypeList;
        }
        export interface DocumentFilter {
            key: DocumentFilterKey;
            value: DocumentFilterValue;
        }
        export interface DocumentIdentifier {
            Name?: DocumentName;
            PlatformTypes?: PlatformTypeList;
        }
        export interface DocumentLimitExceeded {
        }
        export interface DocumentParameter {
            Name?: DocumentParameterName;
            Type?: DocumentParameterType;
            Description?: DocumentParameterDescrption;
            DefaultValue?: DocumentParameterDefaultValue;
        }
        export interface DuplicateInstanceId {
        }
        export interface FailedCreateAssociation {
            Entry?: CreateAssociationBatchRequestEntry;
            Message?: BatchErrorMessage;
            Fault?: Fault;
        }
        export interface GetDocumentRequest {
            Name: DocumentName;
        }
        export interface GetDocumentResult {
            Name?: DocumentName;
            Content?: DocumentContent;
        }
        export interface InstanceInformation {
            InstanceId?: InstanceId;
            PingStatus?: PingStatus;
            LastPingDateTime?: DateTime;
            AgentVersion?: Version;
            IsLatestVersion?: Boolean;
            PlatformType?: PlatformType;
            PlatformName?: String;
            PlatformVersion?: String;
        }
        export interface InstanceInformationFilter {
            key: InstanceInformationFilterKey;
            valueSet: InstanceInformationFilterValueSet;
        }
        export interface InternalServerError {
            message?: String;
        }
        export interface InvalidCommandId {
        }
        export interface InvalidDocument {
            message?: String;
        }
        export interface InvalidDocumentContent {
            message?: String;
        }
        export interface InvalidFilterKey {
        }
        export interface InvalidInstanceId {
        }
        export interface InvalidInstanceInformationFilterValue {
            message?: String;
        }
        export interface InvalidNextToken {
        }
        export interface InvalidOutputFolder {
        }
        export interface InvalidParameters {
            message?: String;
        }
        export interface ListAssociationsRequest {
            AssociationFilterList: AssociationFilterList;
            MaxResults?: MaxResults;
            NextToken?: NextToken;
        }
        export interface ListAssociationsResult {
            Associations?: AssociationList;
            NextToken?: NextToken;
        }
        export interface ListCommandInvocationsRequest {
            CommandId?: CommandId;
            InstanceId?: InstanceId;
            MaxResults?: CommandMaxResults;
            NextToken?: NextToken;
            Filters?: CommandFilterList;
            Details?: Boolean;
        }
        export interface ListCommandInvocationsResult {
            CommandInvocations?: CommandInvocationList;
            NextToken?: NextToken;
        }
        export interface ListCommandsRequest {
            CommandId?: CommandId;
            InstanceId?: InstanceId;
            MaxResults?: CommandMaxResults;
            NextToken?: NextToken;
            Filters?: CommandFilterList;
        }
        export interface ListCommandsResult {
            Commands?: CommandList;
            NextToken?: NextToken;
        }
        export interface ListDocumentsRequest {
            DocumentFilterList?: DocumentFilterList;
            MaxResults?: MaxResults;
            NextToken?: NextToken;
        }
        export interface ListDocumentsResult {
            DocumentIdentifiers?: DocumentIdentifierList;
            NextToken?: NextToken;
        }
        export interface MaxDocumentSizeExceeded {
        }
        export interface SendCommandRequest {
            InstanceIds: InstanceIdList;
            DocumentName: DocumentName;
            TimeoutSeconds?: TimeoutSeconds;
            Comment?: Comment;
            Parameters?: Parameters;
            OutputS3BucketName?: S3BucketName;
            OutputS3KeyPrefix?: S3KeyPrefix;
        }
        export interface SendCommandResult {
            Command?: Command;
        }
        export interface StatusUnchanged {
        }
        export interface TooManyUpdates {
        }
        export interface UnsupportedPlatformType {
            message?: String;
        }
        export interface UpdateAssociationStatusRequest {
            Name: DocumentName;
            InstanceId: InstanceId;
            AssociationStatus: AssociationStatus;
        }
        export interface UpdateAssociationStatusResult {
            AssociationDescription?: AssociationDescription;
        }

    }
}
