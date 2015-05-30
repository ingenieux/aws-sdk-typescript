// DO NOT EDIT!
//
declare module "aws-sdk" {
    export class SSM {
      constructor(options?: any);
      createAssociation(params: SSMCreateAssociationRequest, callback: (err: SSMAssociationAlreadyExists|SSMAssociationLimitExceeded|SSMInternalServerError|SSMInvalidDocument|SSMInvalidInstanceId|any, data: SSMCreateAssociationResult|any) => void): void;
      createAssociationBatch(params: SSMCreateAssociationBatchRequest, callback: (err: SSMInternalServerError|SSMInvalidDocument|SSMInvalidInstanceId|SSMDuplicateInstanceId|SSMAssociationLimitExceeded|any, data: SSMCreateAssociationBatchResult|any) => void): void;
      createDocument(params: SSMCreateDocumentRequest, callback: (err: SSMDocumentAlreadyExists|SSMMaxDocumentSizeExceeded|SSMInternalServerError|SSMInvalidDocumentContent|SSMDocumentLimitExceeded|any, data: SSMCreateDocumentResult|any) => void): void;
      deleteAssociation(params: SSMDeleteAssociationRequest, callback: (err: SSMAssociationDoesNotExist|SSMInternalServerError|SSMInvalidDocument|SSMInvalidInstanceId|SSMTooManyUpdates|any, data: SSMDeleteAssociationResult|any) => void): void;
      deleteDocument(params: SSMDeleteDocumentRequest, callback: (err: SSMInternalServerError|SSMInvalidDocument|SSMAssociatedInstances|any, data: SSMDeleteDocumentResult|any) => void): void;
      describeAssociation(params: SSMDescribeAssociationRequest, callback: (err: SSMAssociationDoesNotExist|SSMInternalServerError|SSMInvalidDocument|SSMInvalidInstanceId|any, data: SSMDescribeAssociationResult|any) => void): void;
      describeDocument(params: SSMDescribeDocumentRequest, callback: (err: SSMInternalServerError|SSMInvalidDocument|any, data: SSMDescribeDocumentResult|any) => void): void;
      getDocument(params: SSMGetDocumentRequest, callback: (err: SSMInternalServerError|SSMInvalidDocument|any, data: SSMGetDocumentResult|any) => void): void;
      listAssociations(params: SSMListAssociationsRequest, callback: (err: SSMInternalServerError|SSMInvalidNextToken|any, data: SSMListAssociationsResult|any) => void): void;
      listDocuments(params: SSMListDocumentsRequest, callback: (err: SSMInternalServerError|SSMInvalidNextToken|any, data: SSMListDocumentsResult|any) => void): void;
      updateAssociationStatus(params: SSMUpdateAssociationStatusRequest, callback: (err: SSMInternalServerError|SSMInvalidInstanceId|SSMInvalidDocument|SSMAssociationDoesNotExist|SSMStatusUnchanged|SSMTooManyUpdates|any, data: SSMUpdateAssociationStatusResult|any) => void): void;
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
    export interface SSMCreateAssociationBatchRequest {
        Entries: SSMCreateAssociationBatchRequestEntries;
    }

    export type SSMCreateAssociationBatchRequestEntries = Array<SSMCreateAssociationBatchRequestEntry>;
    export interface SSMCreateAssociationBatchRequestEntry {
        Name?: SSMDocumentName;
        InstanceId?: SSMInstanceId;
    }

    export interface SSMCreateAssociationBatchResult {
        Successful?: SSMAssociationDescriptionList;
        Failed?: SSMFailedCreateAssociationList;
    }

    export interface SSMCreateAssociationRequest {
        Name: SSMDocumentName;
        InstanceId: SSMInstanceId;
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

    export interface SSMDocumentAlreadyExists {
    }

    export type SSMDocumentContent = string;
    export interface SSMDocumentDescription {
        Sha1?: SSMDocumentSha1;
        Name?: SSMDocumentName;
        CreatedDate?: SSMDateTime;
        Status?: SSMDocumentStatus;
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
    }

    export type SSMDocumentIdentifierList = Array<SSMDocumentIdentifier>;
    export interface SSMDocumentLimitExceeded {
    }

    export type SSMDocumentName = string; // pattern: "^[a-zA-Z0-9_\-.]{3,64}$"
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
    export interface SSMInternalServerError {
    }

    export interface SSMInvalidDocument {
    }

    export interface SSMInvalidDocumentContent {
        message?: SSMString;
    }

    export interface SSMInvalidInstanceId {
    }

    export interface SSMInvalidNextToken {
    }

    export interface SSMListAssociationsRequest {
        AssociationFilterList: SSMAssociationFilterList;
        MaxResults?: SSMMaxResults;
        NextToken?: SSMNextToken;
    }

    export interface SSMListAssociationsResult {
        Associations?: SSMAssociationList;
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
    export type SSMNextToken = string;
    export type SSMStatusAdditionalInfo = string;
    export type SSMStatusMessage = string;
    export interface SSMStatusUnchanged {
    }

    export type SSMString = string;
    export interface SSMTooManyUpdates {
    }

    export interface SSMUpdateAssociationStatusRequest {
        Name: SSMDocumentName;
        InstanceId: SSMInstanceId;
        AssociationStatus: SSMAssociationStatus;
    }

    export interface SSMUpdateAssociationStatusResult {
        AssociationDescription?: SSMAssociationDescription;
    }

}
