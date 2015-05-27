// DO NOT EDIT!
//
declare module "aws-sdk" {
    export class Support {
      constructor(options?: any);
      addAttachmentsToSet(params: AddAttachmentsToSetRequest, callback: (err: InternalServerError|AttachmentSetIdNotFound|AttachmentSetExpired|AttachmentSetSizeLimitExceeded|AttachmentLimitExceeded|any, data: AddAttachmentsToSetResponse|any) => void): void;
      addCommunicationToCase(params: AddCommunicationToCaseRequest, callback: (err: InternalServerError|CaseIdNotFound|AttachmentSetIdNotFound|AttachmentSetExpired|any, data: AddCommunicationToCaseResponse|any) => void): void;
      createCase(params: CreateCaseRequest, callback: (err: InternalServerError|CaseCreationLimitExceeded|AttachmentSetIdNotFound|AttachmentSetExpired|any, data: CreateCaseResponse|any) => void): void;
      describeAttachment(params: DescribeAttachmentRequest, callback: (err: InternalServerError|DescribeAttachmentLimitExceeded|AttachmentIdNotFound|any, data: DescribeAttachmentResponse|any) => void): void;
      describeCases(params: DescribeCasesRequest, callback: (err: InternalServerError|CaseIdNotFound|any, data: DescribeCasesResponse|any) => void): void;
      describeCommunications(params: DescribeCommunicationsRequest, callback: (err: InternalServerError|CaseIdNotFound|any, data: DescribeCommunicationsResponse|any) => void): void;
      describeServices(params: DescribeServicesRequest, callback: (err: InternalServerError|any, data: DescribeServicesResponse|any) => void): void;
      describeSeverityLevels(params: DescribeSeverityLevelsRequest, callback: (err: InternalServerError|any, data: DescribeSeverityLevelsResponse|any) => void): void;
      describeTrustedAdvisorCheckRefreshStatuses(params: DescribeTrustedAdvisorCheckRefreshStatusesRequest, callback: (err: InternalServerError|any, data: DescribeTrustedAdvisorCheckRefreshStatusesResponse|any) => void): void;
      describeTrustedAdvisorCheckResult(params: DescribeTrustedAdvisorCheckResultRequest, callback: (err: InternalServerError|any, data: DescribeTrustedAdvisorCheckResultResponse|any) => void): void;
      describeTrustedAdvisorCheckSummaries(params: DescribeTrustedAdvisorCheckSummariesRequest, callback: (err: InternalServerError|any, data: DescribeTrustedAdvisorCheckSummariesResponse|any) => void): void;
      describeTrustedAdvisorChecks(params: DescribeTrustedAdvisorChecksRequest, callback: (err: InternalServerError|any, data: DescribeTrustedAdvisorChecksResponse|any) => void): void;
      refreshTrustedAdvisorCheck(params: RefreshTrustedAdvisorCheckRequest, callback: (err: InternalServerError|any, data: RefreshTrustedAdvisorCheckResponse|any) => void): void;
      resolveCase(params: ResolveCaseRequest, callback: (err: InternalServerError|CaseIdNotFound|any, data: ResolveCaseResponse|any) => void): void;
    }

    export interface AddAttachmentsToSetRequest {
      attachmentSetId?: AttachmentSetId;
      attachments: Attachments;
    }


    export interface AddAttachmentsToSetResponse {
      attachmentSetId?: AttachmentSetId;
      expiryTime?: ExpiryTime;
    }


    export interface AddCommunicationToCaseRequest {
      caseId?: CaseId;
      communicationBody: CommunicationBody;
      ccEmailAddresses?: CcEmailAddressList;
      attachmentSetId?: AttachmentSetId;
    }


    export interface AddCommunicationToCaseResponse {
      result?: Result;
    }


    export type AfterTime = string;

    export interface Attachment {
      fileName?: FileName;
      data?: Data;
    }


    export interface AttachmentDetails {
      attachmentId?: AttachmentId;
      fileName?: FileName;
    }


    export type AttachmentId = string;

    export interface AttachmentIdNotFound {
      message?: ErrorMessage;
    }


    export interface AttachmentLimitExceeded {
      message?: ErrorMessage;
    }


    export type AttachmentSet = Array<AttachmentDetails>;

    export interface AttachmentSetExpired {
      message?: ErrorMessage;
    }


    export type AttachmentSetId = string;

    export interface AttachmentSetIdNotFound {
      message?: ErrorMessage;
    }


    export interface AttachmentSetSizeLimitExceeded {
      message?: ErrorMessage;
    }


    export type Attachments = Array<Attachment>;

    export type BeforeTime = string;

    export type Boolean = boolean;

    export interface CaseCreationLimitExceeded {
      message?: ErrorMessage;
    }


    export interface CaseDetails {
      caseId?: CaseId;
      displayId?: DisplayId;
      subject?: Subject;
      status?: Status;
      serviceCode?: ServiceCode;
      categoryCode?: CategoryCode;
      severityCode?: SeverityCode;
      submittedBy?: SubmittedBy;
      timeCreated?: TimeCreated;
      recentCommunications?: RecentCaseCommunications;
      ccEmailAddresses?: CcEmailAddressList;
      language?: Language;
    }


    export type CaseId = string;

    export type CaseIdList = Array<CaseId>; // max: 100

    export interface CaseIdNotFound {
      message?: ErrorMessage;
    }


    export type CaseList = Array<CaseDetails>;

    export type CaseStatus = string;

    export interface Category {
      code?: CategoryCode;
      name?: CategoryName;
    }


    export type CategoryCode = string;

    export type CategoryList = Array<Category>;

    export type CategoryName = string;

    export type CcEmailAddress = string;

    export type CcEmailAddressList = Array<CcEmailAddress>;

    export interface Communication {
      caseId?: CaseId;
      body?: CommunicationBody;
      submittedBy?: SubmittedBy;
      timeCreated?: TimeCreated;
      attachmentSet?: AttachmentSet;
    }


    export type CommunicationBody = string;

    export type CommunicationList = Array<Communication>;

    export interface CreateCaseRequest {
      subject: Subject;
      serviceCode?: ServiceCode;
      severityCode?: SeverityCode;
      categoryCode?: CategoryCode;
      communicationBody: CommunicationBody;
      ccEmailAddresses?: CcEmailAddressList;
      language?: Language;
      issueType?: IssueType;
      attachmentSetId?: AttachmentSetId;
    }


    export interface CreateCaseResponse {
      caseId?: CaseId;
    }


    export type Data = any; // not really - it was 'blob' instead - must fix this one

    export interface DescribeAttachmentLimitExceeded {
      message?: ErrorMessage;
    }


    export interface DescribeAttachmentRequest {
      attachmentId: AttachmentId;
    }


    export interface DescribeAttachmentResponse {
      attachment?: Attachment;
    }


    export interface DescribeCasesRequest {
      caseIdList?: CaseIdList;
      displayId?: DisplayId;
      afterTime?: AfterTime;
      beforeTime?: BeforeTime;
      includeResolvedCases?: IncludeResolvedCases;
      nextToken?: NextToken;
      maxResults?: MaxResults;
      language?: Language;
      includeCommunications?: IncludeCommunications;
    }


    export interface DescribeCasesResponse {
      cases?: CaseList;
      nextToken?: NextToken;
    }


    export interface DescribeCommunicationsRequest {
      caseId: CaseId;
      beforeTime?: BeforeTime;
      afterTime?: AfterTime;
      nextToken?: NextToken;
      maxResults?: MaxResults;
    }


    export interface DescribeCommunicationsResponse {
      communications?: CommunicationList;
      nextToken?: NextToken;
    }


    export interface DescribeServicesRequest {
      serviceCodeList?: ServiceCodeList;
      language?: Language;
    }


    export interface DescribeServicesResponse {
      services?: ServiceList;
    }


    export interface DescribeSeverityLevelsRequest {
      language?: Language;
    }


    export interface DescribeSeverityLevelsResponse {
      severityLevels?: SeverityLevelsList;
    }


    export interface DescribeTrustedAdvisorCheckRefreshStatusesRequest {
      checkIds: StringList;
    }


    export interface DescribeTrustedAdvisorCheckRefreshStatusesResponse {
      statuses: TrustedAdvisorCheckRefreshStatusList;
    }


    export interface DescribeTrustedAdvisorCheckResultRequest {
      checkId: String;
      language?: String;
    }


    export interface DescribeTrustedAdvisorCheckResultResponse {
      result?: TrustedAdvisorCheckResult;
    }


    export interface DescribeTrustedAdvisorCheckSummariesRequest {
      checkIds: StringList;
    }


    export interface DescribeTrustedAdvisorCheckSummariesResponse {
      summaries: TrustedAdvisorCheckSummaryList;
    }


    export interface DescribeTrustedAdvisorChecksRequest {
      language: String;
    }


    export interface DescribeTrustedAdvisorChecksResponse {
      checks: TrustedAdvisorCheckList;
    }


    export type DisplayId = string;

    export type Double = number;

    export type ErrorMessage = string;

    export type ExpiryTime = string;

    export type FileName = string;

    export type IncludeCommunications = boolean;

    export type IncludeResolvedCases = boolean;

    export interface InternalServerError {
      message?: ErrorMessage;
    }


    export type IssueType = string;

    export type Language = string;

    export type Long = number;

    export type MaxResults = number;

    export type NextToken = string;

    export interface RecentCaseCommunications {
      communications?: CommunicationList;
      nextToken?: NextToken;
    }


    export interface RefreshTrustedAdvisorCheckRequest {
      checkId: String;
    }


    export interface RefreshTrustedAdvisorCheckResponse {
      status: TrustedAdvisorCheckRefreshStatus;
    }


    export interface ResolveCaseRequest {
      caseId?: CaseId;
    }


    export interface ResolveCaseResponse {
      initialCaseStatus?: CaseStatus;
      finalCaseStatus?: CaseStatus;
    }


    export type Result = boolean;

    export interface Service {
      code?: ServiceCode;
      name?: ServiceName;
      categories?: CategoryList;
    }


    export type ServiceCode = string; // pattern: "[0-9a-z\-_]+"

    export type ServiceCodeList = Array<ServiceCode>; // max: 100

    export type ServiceList = Array<Service>;

    export type ServiceName = string;

    export type SeverityCode = string;

    export interface SeverityLevel {
      code?: SeverityLevelCode;
      name?: SeverityLevelName;
    }


    export type SeverityLevelCode = string;

    export type SeverityLevelName = string;

    export type SeverityLevelsList = Array<SeverityLevel>;

    export type Status = string;

    export type String = string;

    export type StringList = Array<String>;

    export type Subject = string;

    export type SubmittedBy = string;

    export type TimeCreated = string;

    export interface TrustedAdvisorCategorySpecificSummary {
      costOptimizing?: TrustedAdvisorCostOptimizingSummary;
    }


    export interface TrustedAdvisorCheckDescription {
      id: String;
      name: String;
      description: String;
      category: String;
      metadata: StringList;
    }


    export type TrustedAdvisorCheckList = Array<TrustedAdvisorCheckDescription>;

    export interface TrustedAdvisorCheckRefreshStatus {
      checkId: String;
      status: String;
      millisUntilNextRefreshable: Long;
    }


    export type TrustedAdvisorCheckRefreshStatusList = Array<TrustedAdvisorCheckRefreshStatus>;

    export interface TrustedAdvisorCheckResult {
      checkId: String;
      timestamp: String;
      status: String;
      resourcesSummary: TrustedAdvisorResourcesSummary;
      categorySpecificSummary: TrustedAdvisorCategorySpecificSummary;
      flaggedResources: TrustedAdvisorResourceDetailList;
    }


    export interface TrustedAdvisorCheckSummary {
      checkId: String;
      timestamp: String;
      status: String;
      hasFlaggedResources?: Boolean;
      resourcesSummary: TrustedAdvisorResourcesSummary;
      categorySpecificSummary: TrustedAdvisorCategorySpecificSummary;
    }


    export type TrustedAdvisorCheckSummaryList = Array<TrustedAdvisorCheckSummary>;

    export interface TrustedAdvisorCostOptimizingSummary {
      estimatedMonthlySavings: Double;
      estimatedPercentMonthlySavings: Double;
    }


    export interface TrustedAdvisorResourceDetail {
      status: String;
      region: String;
      resourceId: String;
      isSuppressed?: Boolean;
      metadata: StringList;
    }


    export type TrustedAdvisorResourceDetailList = Array<TrustedAdvisorResourceDetail>;

    export interface TrustedAdvisorResourcesSummary {
      resourcesProcessed: Long;
      resourcesFlagged: Long;
      resourcesIgnored: Long;
      resourcesSuppressed: Long;
    }


}
