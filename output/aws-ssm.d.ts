// DO NOT EDIT!
//

///<reference path="./aws-sdk-common.d.ts" />
declare module "aws-sdk" {

    export class SSM extends Service {
      constructor(options?: any);
      cancelCommand(params: SSMCancelCommandRequest, callback?: (err: SSMInvalidCommandId|SSMInvalidInstanceId|SSMDuplicateInstanceId|any, data: SSMCancelCommandResult|any) => void): Request;
      createAssociation(params: SSMCreateAssociationRequest, callback?: (err: SSMAssociationAlreadyExists|SSMAssociationLimitExceeded|SSMInternalServerError|SSMInvalidDocument|SSMInvalidInstanceId|SSMUnsupportedPlatformType|SSMInvalidParameters|any, data: SSMCreateAssociationResult|any) => void): Request;
      createAssociationBatch(params: SSMCreateAssociationBatchRequest, callback?: (err: SSMInternalServerError|SSMInvalidDocument|SSMInvalidInstanceId|SSMInvalidParameters|SSMDuplicateInstanceId|SSMAssociationLimitExceeded|SSMUnsupportedPlatformType|any, data: SSMCreateAssociationBatchResult|any) => void): Request;
      createDocument(params: SSMCreateDocumentRequest, callback?: (err: SSMDocumentAlreadyExists|SSMMaxDocumentSizeExceeded|SSMInternalServerError|SSMInvalidDocumentContent|SSMDocumentLimitExceeded|any, data: SSMCreateDocumentResult|any) => void): Request;
      deleteAssociation(params: SSMDeleteAssociationRequest, callback?: (err: SSMAssociationDoesNotExist|SSMInternalServerError|SSMInvalidDocument|SSMInvalidInstanceId|SSMTooManyUpdates|any, data: SSMDeleteAssociationResult|any) => void): Request;
      deleteDocument(params: SSMDeleteDocumentRequest, callback?: (err: SSMInternalServerError|SSMInvalidDocument|SSMAssociatedInstances|any, data: SSMDeleteDocumentResult|any) => void): Request;
      describeAssociation(params: SSMDescribeAssociationRequest, callback?: (err: SSMAssociationDoesNotExist|SSMInternalServerError|SSMInvalidDocument|SSMInvalidInstanceId|any, data: SSMDescribeAssociationResult|any) => void): Request;
      describeDocument(params: SSMDescribeDocumentRequest, callback?: (err: SSMInternalServerError|SSMInvalidDocument|any, data: SSMDescribeDocumentResult|any) => void): Request;
      describeInstanceInformation(params: SSMDescribeInstanceInformationRequest, callback?: (err: SSMInternalServerError|SSMInvalidInstanceId|SSMInvalidNextToken|SSMInvalidInstanceInformationFilterValue|SSMInvalidFilterKey|any, data: SSMDescribeInstanceInformationResult|any) => void): Request;
      getDocument(params: SSMGetDocumentRequest, callback?: (err: SSMInternalServerError|SSMInvalidDocument|any, data: SSMGetDocumentResult|any) => void): Request;
      listAssociations(params: SSMListAssociationsRequest, callback?: (err: SSMInternalServerError|SSMInvalidNextToken|any, data: SSMListAssociationsResult|any) => void): Request;
      listCommandInvocations(params: SSMListCommandInvocationsRequest, callback?: (err: SSMInvalidCommandId|SSMInvalidInstanceId|SSMInvalidFilterKey|SSMInvalidNextToken|any, data: SSMListCommandInvocationsResult|any) => void): Request;
      listCommands(params: SSMListCommandsRequest, callback?: (err: SSMInvalidCommandId|SSMInvalidInstanceId|SSMInvalidFilterKey|SSMInvalidNextToken|any, data: SSMListCommandsResult|any) => void): Request;
      listDocuments(params: SSMListDocumentsRequest, callback?: (err: SSMInternalServerError|SSMInvalidNextToken|SSMInvalidFilterKey|any, data: SSMListDocumentsResult|any) => void): Request;
      sendCommand(params: SSMSendCommandRequest, callback?: (err: SSMDuplicateInstanceId|SSMInvalidInstanceId|SSMInvalidDocument|SSMInvalidOutputFolder|SSMInvalidParameters|SSMUnsupportedPlatformType|any, data: SSMSendCommandResult|any) => void): Request;
      updateAssociationStatus(params: SSMUpdateAssociationStatusRequest, callback?: (err: SSMInternalServerError|SSMInvalidInstanceId|SSMInvalidDocument|SSMAssociationDoesNotExist|SSMStatusUnchanged|SSMTooManyUpdates|any, data: SSMUpdateAssociationStatusResult|any) => void): Request;
    }

    export interface SSMAssociatedInstances {
    }

    export interface SSMAssociation {
        Name?: SSMDocumentName;
        InstanceId?: SSMInstanceId;
    }

    export interface SSMAssociationAlreadyExists {
    }

    export interface SSMAssociationDescription {
        Name?: SSMDocumentName;
        InstanceId?: SSMInstanceId;
        Date?: SSMDateTime;
        Status?: SSMAssociationStatus;
        Parameters?: SSMParameters;
    }

    export type SSMAssociationDescriptionList = Array<SSMAssociationDescription>;
    export interface SSMAssociationDoesNotExist {
    }

    export interface SSMAssociationFilter {
        key: SSMAssociationFilterKey;
        value: SSMAssociationFilterValue;
    }

    export type SSMAssociationFilterKey = string;
    export type SSMAssociationFilterList = Array<SSMAssociationFilter>;
    export type SSMAssociationFilterValue = string;
    export interface SSMAssociationLimitExceeded {
    }

    export type SSMAssociationList = Array<SSMAssociation>;
    export interface SSMAssociationStatus {
        Date: SSMDateTime;
        Name: SSMAssociationStatusName;
        Message: SSMStatusMessage;
        AdditionalInfo?: SSMStatusAdditionalInfo;
    }

    export type SSMAssociationStatusName = string;
    export type SSMBatchErrorMessage = string;
    export type SSMBoolean = boolean;
    export interface SSMCancelCommandRequest {
        CommandId: SSMCommandId;
        InstanceIds?: SSMInstanceIdList;
    }

    export interface SSMCancelCommandResult {
    }

    export interface SSMCommand {
        CommandId?: SSMCommandId;
        DocumentName?: SSMDocumentName;
        Comment?: SSMComment;
        ExpiresAfter?: SSMDateTime;
        Parameters?: SSMParameters;
        InstanceIds?: SSMInstanceIdList;
        RequestedDateTime?: SSMDateTime;
        Status?: SSMCommandStatus;
        OutputS3BucketName?: SSMS3BucketName;
        OutputS3KeyPrefix?: SSMS3KeyPrefix;
    }

    export interface SSMCommandFilter {
        key: SSMCommandFilterKey;
        value: SSMCommandFilterValue;
    }

    export type SSMCommandFilterKey = string;
    export type SSMCommandFilterList = Array<SSMCommandFilter>; // max: 3
    export type SSMCommandFilterValue = string;
    export type SSMCommandId = string;
    export interface SSMCommandInvocation {
        CommandId?: SSMCommandId;
        InstanceId?: SSMInstanceId;
        Comment?: SSMComment;
        DocumentName?: SSMDocumentName;
        RequestedDateTime?: SSMDateTime;
        Status?: SSMCommandInvocationStatus;
        TraceOutput?: SSMInvocationTraceOutput;
        CommandPlugins?: SSMCommandPluginList;
    }

    export type SSMCommandInvocationList = Array<SSMCommandInvocation>;
    export type SSMCommandInvocationStatus = string;
    export type SSMCommandList = Array<SSMCommand>;
    export type SSMCommandMaxResults = number;
    export interface SSMCommandPlugin {
        Name?: SSMCommandPluginName;
        Status?: SSMCommandPluginStatus;
        ResponseCode?: SSMResponseCode;
        ResponseStartDateTime?: SSMDateTime;
        ResponseFinishDateTime?: SSMDateTime;
        Output?: SSMCommandPluginOutput;
        OutputS3BucketName?: SSMS3BucketName;
        OutputS3KeyPrefix?: SSMS3KeyPrefix;
    }

    export type SSMCommandPluginList = Array<SSMCommandPlugin>;
    export type SSMCommandPluginName = string;
    export type SSMCommandPluginOutput = string;
    export type SSMCommandPluginStatus = string;
    export type SSMCommandStatus = string;
    export type SSMComment = string;
    export interface SSMCreateAssociationBatchRequest {
        Entries: SSMCreateAssociationBatchRequestEntries;
    }

    export type SSMCreateAssociationBatchRequestEntries = Array<SSMCreateAssociationBatchRequestEntry>;
    export interface SSMCreateAssociationBatchRequestEntry {
        Name?: SSMDocumentName;
        InstanceId?: SSMInstanceId;
        Parameters?: SSMParameters;
    }

    export interface SSMCreateAssociationBatchResult {
        Successful?: SSMAssociationDescriptionList;
        Failed?: SSMFailedCreateAssociationList;
    }

    export interface SSMCreateAssociationRequest {
        Name: SSMDocumentName;
        InstanceId: SSMInstanceId;
        Parameters?: SSMParameters;
    }

    export interface SSMCreateAssociationResult {
        AssociationDescription?: SSMAssociationDescription;
    }

    export interface SSMCreateDocumentRequest {
        Content: SSMDocumentContent;
        Name: SSMDocumentName;
    }

    export interface SSMCreateDocumentResult {
        DocumentDescription?: SSMDocumentDescription;
    }

    export type SSMDateTime = number;
    export interface SSMDeleteAssociationRequest {
        Name: SSMDocumentName;
        InstanceId: SSMInstanceId;
    }

    export interface SSMDeleteAssociationResult {
    }

    export interface SSMDeleteDocumentRequest {
        Name: SSMDocumentName;
    }

    export interface SSMDeleteDocumentResult {
    }

    export interface SSMDescribeAssociationRequest {
        Name: SSMDocumentName;
        InstanceId: SSMInstanceId;
    }

    export interface SSMDescribeAssociationResult {
        AssociationDescription?: SSMAssociationDescription;
    }

    export interface SSMDescribeDocumentRequest {
        Name: SSMDocumentName;
    }

    export interface SSMDescribeDocumentResult {
        Document?: SSMDocumentDescription;
    }

    export interface SSMDescribeInstanceInformationRequest {
        InstanceInformationFilterList?: SSMInstanceInformationFilterList;
        MaxResults?: SSMMaxResultsEC2Compatible;
        NextToken?: SSMNextToken;
    }

    export interface SSMDescribeInstanceInformationResult {
        InstanceInformationList?: SSMInstanceInformationList;
        NextToken?: SSMNextToken;
    }

    export type SSMDescriptionInDocument = string;
    export interface SSMDocumentAlreadyExists {
    }

    export type SSMDocumentContent = string;
    export interface SSMDocumentDescription {
        Sha1?: SSMDocumentSha1;
        Name?: SSMDocumentName;
        CreatedDate?: SSMDateTime;
        Status?: SSMDocumentStatus;
        Description?: SSMDescriptionInDocument;
        Parameters?: SSMDocumentParameterList;
        PlatformTypes?: SSMPlatformTypeList;
    }

    export interface SSMDocumentFilter {
        key: SSMDocumentFilterKey;
        value: SSMDocumentFilterValue;
    }

    export type SSMDocumentFilterKey = string;
    export type SSMDocumentFilterList = Array<SSMDocumentFilter>;
    export type SSMDocumentFilterValue = string;
    export interface SSMDocumentIdentifier {
        Name?: SSMDocumentName;
        PlatformTypes?: SSMPlatformTypeList;
    }

    export type SSMDocumentIdentifierList = Array<SSMDocumentIdentifier>;
    export interface SSMDocumentLimitExceeded {
    }

    export type SSMDocumentName = string; // pattern: "^[a-zA-Z0-9_\-.]{3,128}$"
    export interface SSMDocumentParameter {
        Name?: SSMDocumentParameterName;
        Type?: SSMDocumentParameterType;
        Description?: SSMDocumentParameterDescrption;
        DefaultValue?: SSMDocumentParameterDefaultValue;
    }

    export type SSMDocumentParameterDefaultValue = string;
    export type SSMDocumentParameterDescrption = string;
    export type SSMDocumentParameterList = Array<SSMDocumentParameter>;
    export type SSMDocumentParameterName = string;
    export type SSMDocumentParameterType = string;
    export type SSMDocumentSha1 = string;
    export type SSMDocumentStatus = string;
    export interface SSMDuplicateInstanceId {
    }

    export interface SSMFailedCreateAssociation {
        Entry?: SSMCreateAssociationBatchRequestEntry;
        Message?: SSMBatchErrorMessage;
        Fault?: SSMFault;
    }

    export type SSMFailedCreateAssociationList = Array<SSMFailedCreateAssociation>;
    export type SSMFault = string;
    export interface SSMGetDocumentRequest {
        Name: SSMDocumentName;
    }

    export interface SSMGetDocumentResult {
        Name?: SSMDocumentName;
        Content?: SSMDocumentContent;
    }

    export type SSMInstanceId = string; // pattern: "^(?=.{10}$)(i-(\w){8})"
    export type SSMInstanceIdList = Array<SSMInstanceId>; // max: 50
    export interface SSMInstanceInformation {
        InstanceId?: SSMInstanceId;
        PingStatus?: SSMPingStatus;
        LastPingDateTime?: SSMDateTime;
        AgentVersion?: SSMVersion;
        IsLatestVersion?: SSMBoolean;
        PlatformType?: SSMPlatformType;
        PlatformName?: SSMString;
        PlatformVersion?: SSMString;
    }

    export interface SSMInstanceInformationFilter {
        key: SSMInstanceInformationFilterKey;
        valueSet: SSMInstanceInformationFilterValueSet;
    }

    export type SSMInstanceInformationFilterKey = string;
    export type SSMInstanceInformationFilterList = Array<SSMInstanceInformationFilter>;
    export type SSMInstanceInformationFilterValue = string;
    export type SSMInstanceInformationFilterValueSet = Array<SSMInstanceInformationFilterValue>; // max: 100
    export type SSMInstanceInformationList = Array<SSMInstanceInformation>;
    export interface SSMInternalServerError {
        message?: SSMString;
    }

    export interface SSMInvalidCommandId {
    }

    export interface SSMInvalidDocument {
        message?: SSMString;
    }

    export interface SSMInvalidDocumentContent {
        message?: SSMString;
    }

    export interface SSMInvalidFilterKey {
    }

    export interface SSMInvalidInstanceId {
    }

    export interface SSMInvalidInstanceInformationFilterValue {
        message?: SSMString;
    }

    export interface SSMInvalidNextToken {
    }

    export interface SSMInvalidOutputFolder {
    }

    export interface SSMInvalidParameters {
        message?: SSMString;
    }

    export type SSMInvocationTraceOutput = string;
    export interface SSMListAssociationsRequest {
        AssociationFilterList: SSMAssociationFilterList;
        MaxResults?: SSMMaxResults;
        NextToken?: SSMNextToken;
    }

    export interface SSMListAssociationsResult {
        Associations?: SSMAssociationList;
        NextToken?: SSMNextToken;
    }

    export interface SSMListCommandInvocationsRequest {
        CommandId?: SSMCommandId;
        InstanceId?: SSMInstanceId;
        MaxResults?: SSMCommandMaxResults;
        NextToken?: SSMNextToken;
        Filters?: SSMCommandFilterList;
        Details?: SSMBoolean;
    }

    export interface SSMListCommandInvocationsResult {
        CommandInvocations?: SSMCommandInvocationList;
        NextToken?: SSMNextToken;
    }

    export interface SSMListCommandsRequest {
        CommandId?: SSMCommandId;
        InstanceId?: SSMInstanceId;
        MaxResults?: SSMCommandMaxResults;
        NextToken?: SSMNextToken;
        Filters?: SSMCommandFilterList;
    }

    export interface SSMListCommandsResult {
        Commands?: SSMCommandList;
        NextToken?: SSMNextToken;
    }

    export interface SSMListDocumentsRequest {
        DocumentFilterList?: SSMDocumentFilterList;
        MaxResults?: SSMMaxResults;
        NextToken?: SSMNextToken;
    }

    export interface SSMListDocumentsResult {
        DocumentIdentifiers?: SSMDocumentIdentifierList;
        NextToken?: SSMNextToken;
    }

    export interface SSMMaxDocumentSizeExceeded {
    }

    export type SSMMaxResults = number;
    export type SSMMaxResultsEC2Compatible = number;
    export type SSMNextToken = string;
    export type SSMParameterName = string;
    export type SSMParameterValue = string;
    export type SSMParameterValueList = Array<SSMParameterValue>;
    export type SSMParameters = any; // not really - it was 'map' instead - must fix this one
    export type SSMPingStatus = string;
    export type SSMPlatformType = string;
    export type SSMPlatformTypeList = Array<SSMPlatformType>;
    export type SSMResponseCode = number;
    export type SSMS3BucketName = string;
    export type SSMS3KeyPrefix = string;
    export interface SSMSendCommandRequest {
        InstanceIds: SSMInstanceIdList;
        DocumentName: SSMDocumentName;
        TimeoutSeconds?: SSMTimeoutSeconds;
        Comment?: SSMComment;
        Parameters?: SSMParameters;
        OutputS3BucketName?: SSMS3BucketName;
        OutputS3KeyPrefix?: SSMS3KeyPrefix;
    }

    export interface SSMSendCommandResult {
        Command?: SSMCommand;
    }

    export type SSMStatusAdditionalInfo = string;
    export type SSMStatusMessage = string;
    export interface SSMStatusUnchanged {
    }

    export type SSMString = string;
    export type SSMTimeoutSeconds = number;
    export interface SSMTooManyUpdates {
    }

    export interface SSMUnsupportedPlatformType {
        message?: SSMString;
    }

    export interface SSMUpdateAssociationStatusRequest {
        Name: SSMDocumentName;
        InstanceId: SSMInstanceId;
        AssociationStatus: SSMAssociationStatus;
    }

    export interface SSMUpdateAssociationStatusResult {
        AssociationDescription?: SSMAssociationDescription;
    }

    export type SSMVersion = string; // pattern: "^[0-9]{1,6}(\.[0-9]{1,6}){2,3}$"
}
