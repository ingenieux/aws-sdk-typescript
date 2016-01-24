// Type definitions for aws-sdk - AWS Support
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

///<reference path="./aws-sdk-common.d.ts" />

declare module "aws-sdk" {

    /*
     * apiVersion: 2013-04-15
     * endpointPrefix: support
     * serviceAbbreviation: 
     * signatureVersion: v4
     * protocol: json
     */
    export class Support extends Service {
      constructor(options?: any);
      endpoint: Endpoint;
      addAttachmentsToSet(params: Support.AddAttachmentsToSetRequest, callback?: (err: Support.InternalServerError|Support.AttachmentSetIdNotFound|Support.AttachmentSetExpired|Support.AttachmentSetSizeLimitExceeded|Support.AttachmentLimitExceeded|any, data: Support.AddAttachmentsToSetResponse|any) => void): Request;
      addCommunicationToCase(params: Support.AddCommunicationToCaseRequest, callback?: (err: Support.InternalServerError|Support.CaseIdNotFound|Support.AttachmentSetIdNotFound|Support.AttachmentSetExpired|any, data: Support.AddCommunicationToCaseResponse|any) => void): Request;
      createCase(params: Support.CreateCaseRequest, callback?: (err: Support.InternalServerError|Support.CaseCreationLimitExceeded|Support.AttachmentSetIdNotFound|Support.AttachmentSetExpired|any, data: Support.CreateCaseResponse|any) => void): Request;
      describeAttachment(params: Support.DescribeAttachmentRequest, callback?: (err: Support.InternalServerError|Support.DescribeAttachmentLimitExceeded|Support.AttachmentIdNotFound|any, data: Support.DescribeAttachmentResponse|any) => void): Request;
      describeCases(params: Support.DescribeCasesRequest, callback?: (err: Support.InternalServerError|Support.CaseIdNotFound|any, data: Support.DescribeCasesResponse|any) => void): Request;
      describeCommunications(params: Support.DescribeCommunicationsRequest, callback?: (err: Support.InternalServerError|Support.CaseIdNotFound|any, data: Support.DescribeCommunicationsResponse|any) => void): Request;
      describeServices(params: Support.DescribeServicesRequest, callback?: (err: Support.InternalServerError|any, data: Support.DescribeServicesResponse|any) => void): Request;
      describeSeverityLevels(params: Support.DescribeSeverityLevelsRequest, callback?: (err: Support.InternalServerError|any, data: Support.DescribeSeverityLevelsResponse|any) => void): Request;
      describeTrustedAdvisorCheckRefreshStatuses(params: Support.DescribeTrustedAdvisorCheckRefreshStatusesRequest, callback?: (err: Support.InternalServerError|any, data: Support.DescribeTrustedAdvisorCheckRefreshStatusesResponse|any) => void): Request;
      describeTrustedAdvisorCheckResult(params: Support.DescribeTrustedAdvisorCheckResultRequest, callback?: (err: Support.InternalServerError|any, data: Support.DescribeTrustedAdvisorCheckResultResponse|any) => void): Request;
      describeTrustedAdvisorCheckSummaries(params: Support.DescribeTrustedAdvisorCheckSummariesRequest, callback?: (err: Support.InternalServerError|any, data: Support.DescribeTrustedAdvisorCheckSummariesResponse|any) => void): Request;
      describeTrustedAdvisorChecks(params: Support.DescribeTrustedAdvisorChecksRequest, callback?: (err: Support.InternalServerError|any, data: Support.DescribeTrustedAdvisorChecksResponse|any) => void): Request;
      refreshTrustedAdvisorCheck(params: Support.RefreshTrustedAdvisorCheckRequest, callback?: (err: Support.InternalServerError|any, data: Support.RefreshTrustedAdvisorCheckResponse|any) => void): Request;
      resolveCase(params: Support.ResolveCaseRequest, callback?: (err: Support.InternalServerError|Support.CaseIdNotFound|any, data: Support.ResolveCaseResponse|any) => void): Request;

    }

    export module Support {
        export type AfterTime = string;
        export type AttachmentId = string;
        export type AttachmentSet = AttachmentDetails[];
        export type AttachmentSetId = string;
        export type Attachments = Attachment[];
        export type BeforeTime = string;
        export type Boolean = boolean;
        export type CaseId = string;
        export type CaseIdList = CaseId[];    // max: 100
        export type CaseList = CaseDetails[];
        export type CaseStatus = string;
        export type CategoryCode = string;
        export type CategoryList = Category[];
        export type CategoryName = string;
        export type CcEmailAddress = string;
        export type CcEmailAddressList = CcEmailAddress[];
        export type CommunicationBody = string;
        export type CommunicationList = Communication[];
        export type Data = any;    // type: blob
        export type DisplayId = string;
        export type Double = number;
        export type ErrorMessage = string;
        export type ExpiryTime = string;
        export type FileName = string;
        export type IncludeCommunications = boolean;
        export type IncludeResolvedCases = boolean;
        export type IssueType = string;
        export type Language = string;
        export type Long = number;
        export type MaxResults = number;    // max: 100, min: 10
        export type NextToken = string;
        export type Result = boolean;
        export type ServiceCode = string;    // pattern: &quot;[0-9a-z\-_]+&quot;
        export type ServiceCodeList = ServiceCode[];    // max: 100
        export type ServiceList = Service[];
        export type ServiceName = string;
        export type SeverityCode = string;
        export type SeverityLevelCode = string;
        export type SeverityLevelName = string;
        export type SeverityLevelsList = SeverityLevel[];
        export type Status = string;
        export type String = string;
        export type StringList = String[];
        export type Subject = string;
        export type SubmittedBy = string;
        export type TimeCreated = string;
        export type TrustedAdvisorCheckList = TrustedAdvisorCheckDescription[];
        export type TrustedAdvisorCheckRefreshStatusList = TrustedAdvisorCheckRefreshStatus[];
        export type TrustedAdvisorCheckSummaryList = TrustedAdvisorCheckSummary[];
        export type TrustedAdvisorResourceDetailList = TrustedAdvisorResourceDetail[];

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
        export interface Attachment {
            fileName?: FileName;
            data?: Data;
        }
        export interface AttachmentDetails {
            attachmentId?: AttachmentId;
            fileName?: FileName;
        }
        export interface AttachmentIdNotFound {
            message?: ErrorMessage;
        }
        export interface AttachmentLimitExceeded {
            message?: ErrorMessage;
        }
        export interface AttachmentSetExpired {
            message?: ErrorMessage;
        }
        export interface AttachmentSetIdNotFound {
            message?: ErrorMessage;
        }
        export interface AttachmentSetSizeLimitExceeded {
            message?: ErrorMessage;
        }
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
        export interface CaseIdNotFound {
            message?: ErrorMessage;
        }
        export interface Category {
            code?: CategoryCode;
            name?: CategoryName;
        }
        export interface Communication {
            caseId?: CaseId;
            body?: CommunicationBody;
            submittedBy?: SubmittedBy;
            timeCreated?: TimeCreated;
            attachmentSet?: AttachmentSet;
        }
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
        export interface InternalServerError {
            message?: ErrorMessage;
        }
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
        export interface Service {
            code?: ServiceCode;
            name?: ServiceName;
            categories?: CategoryList;
        }
        export interface SeverityLevel {
            code?: SeverityLevelCode;
            name?: SeverityLevelName;
        }
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
        export interface TrustedAdvisorCheckRefreshStatus {
            checkId: String;
            status: String;
            millisUntilNextRefreshable: Long;
        }
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
        export interface TrustedAdvisorResourcesSummary {
            resourcesProcessed: Long;
            resourcesFlagged: Long;
            resourcesIgnored: Long;
            resourcesSuppressed: Long;
        }

    }
}
