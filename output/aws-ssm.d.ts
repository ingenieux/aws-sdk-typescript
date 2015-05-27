// DO NOT EDIT!
//
declare module "aws-sdk" {
    export class SSM {
      constructor(options?: any);
      createAssociation(params: CreateAssociationRequest, callback: (err: AssociationAlreadyExists|AssociationLimitExceeded|InternalServerError|InvalidDocument|InvalidInstanceId|any, data: CreateAssociationResult|any) => void): void;
      createAssociationBatch(params: CreateAssociationBatchRequest, callback: (err: InternalServerError|InvalidDocument|InvalidInstanceId|DuplicateInstanceId|AssociationLimitExceeded|any, data: CreateAssociationBatchResult|any) => void): void;
      createDocument(params: CreateDocumentRequest, callback: (err: DocumentAlreadyExists|MaxDocumentSizeExceeded|InternalServerError|InvalidDocumentContent|DocumentLimitExceeded|any, data: CreateDocumentResult|any) => void): void;
      deleteAssociation(params: DeleteAssociationRequest, callback: (err: AssociationDoesNotExist|InternalServerError|InvalidDocument|InvalidInstanceId|TooManyUpdates|any, data: DeleteAssociationResult|any) => void): void;
      deleteDocument(params: DeleteDocumentRequest, callback: (err: InternalServerError|InvalidDocument|AssociatedInstances|any, data: DeleteDocumentResult|any) => void): void;
      describeAssociation(params: DescribeAssociationRequest, callback: (err: AssociationDoesNotExist|InternalServerError|InvalidDocument|InvalidInstanceId|any, data: DescribeAssociationResult|any) => void): void;
      describeDocument(params: DescribeDocumentRequest, callback: (err: InternalServerError|InvalidDocument|any, data: DescribeDocumentResult|any) => void): void;
      getDocument(params: GetDocumentRequest, callback: (err: InternalServerError|InvalidDocument|any, data: GetDocumentResult|any) => void): void;
      listAssociations(params: ListAssociationsRequest, callback: (err: InternalServerError|InvalidNextToken|any, data: ListAssociationsResult|any) => void): void;
      listDocuments(params: ListDocumentsRequest, callback: (err: InternalServerError|InvalidNextToken|any, data: ListDocumentsResult|any) => void): void;
      updateAssociationStatus(params: UpdateAssociationStatusRequest, callback: (err: InternalServerError|InvalidInstanceId|InvalidDocument|AssociationDoesNotExist|StatusUnchanged|TooManyUpdates|any, data: UpdateAssociationStatusResult|any) => void): void;
    }

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
    }


    export type AssociationDescriptionList = Array<AssociationDescription>;

    export interface AssociationDoesNotExist {
    }


    export interface AssociationFilter {
      key: AssociationFilterKey;
      value: AssociationFilterValue;
    }


    export type AssociationFilterKey = string;

    export type AssociationFilterList = Array<AssociationFilter>;

    export type AssociationFilterValue = string;

    export interface AssociationLimitExceeded {
    }


    export type AssociationList = Array<Association>;

    export interface AssociationStatus {
      Date: DateTime;
      Name: AssociationStatusName;
      Message: StatusMessage;
      AdditionalInfo?: StatusAdditionalInfo;
    }


    export type AssociationStatusName = string;

    export type BatchErrorMessage = string;

    export interface CreateAssociationBatchRequest {
      Entries: CreateAssociationBatchRequestEntries;
    }


    export type CreateAssociationBatchRequestEntries = Array<CreateAssociationBatchRequestEntry>;

    export interface CreateAssociationBatchRequestEntry {
      Name?: DocumentName;
      InstanceId?: InstanceId;
    }


    export interface CreateAssociationBatchResult {
      Successful?: AssociationDescriptionList;
      Failed?: FailedCreateAssociationList;
    }


    export interface CreateAssociationRequest {
      Name: DocumentName;
      InstanceId: InstanceId;
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


    export type DateTime = number;

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


    export interface DocumentAlreadyExists {
    }


    export type DocumentContent = string;

    export interface DocumentDescription {
      Sha1?: DocumentSha1;
      Name?: DocumentName;
      CreatedDate?: DateTime;
      Status?: DocumentStatus;
    }


    export interface DocumentFilter {
      key: DocumentFilterKey;
      value: DocumentFilterValue;
    }


    export type DocumentFilterKey = string;

    export type DocumentFilterList = Array<DocumentFilter>;

    export type DocumentFilterValue = string;

    export interface DocumentIdentifier {
      Name?: DocumentName;
    }


    export type DocumentIdentifierList = Array<DocumentIdentifier>;

    export interface DocumentLimitExceeded {
    }


    export type DocumentName = string; // pattern: "^[a-zA-Z0-9_\-.]{3,64}$"

    export type DocumentSha1 = string;

    export type DocumentStatus = string;

    export interface DuplicateInstanceId {
    }


    export interface FailedCreateAssociation {
      Entry?: CreateAssociationBatchRequestEntry;
      Message?: BatchErrorMessage;
      Fault?: Fault;
    }


    export type FailedCreateAssociationList = Array<FailedCreateAssociation>;

    export type Fault = string;

    export interface GetDocumentRequest {
      Name: DocumentName;
    }


    export interface GetDocumentResult {
      Name?: DocumentName;
      Content?: DocumentContent;
    }


    export type InstanceId = string; // pattern: "^(?=.{10}$)(i-(\w){8})"

    export interface InternalServerError {
    }


    export interface InvalidDocument {
    }


    export interface InvalidDocumentContent {
      message?: String;
    }


    export interface InvalidInstanceId {
    }


    export interface InvalidNextToken {
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


    export type MaxResults = number;

    export type NextToken = string;

    export type StatusAdditionalInfo = string;

    export type StatusMessage = string;

    export interface StatusUnchanged {
    }


    export type String = string;

    export interface TooManyUpdates {
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
