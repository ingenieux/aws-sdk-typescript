// DO NOT EDIT!
//
declare module "aws-sdk" {
    export class Support {
      constructor(options?: any);
      addAttachmentsToSet(params: SupportAddAttachmentsToSetRequest, callback: (err: SupportInternalServerError|SupportAttachmentSetIdNotFound|SupportAttachmentSetExpired|SupportAttachmentSetSizeLimitExceeded|SupportAttachmentLimitExceeded|any, data: SupportAddAttachmentsToSetResponse|any) => void): void;
      addCommunicationToCase(params: SupportAddCommunicationToCaseRequest, callback: (err: SupportInternalServerError|SupportCaseIdNotFound|SupportAttachmentSetIdNotFound|SupportAttachmentSetExpired|any, data: SupportAddCommunicationToCaseResponse|any) => void): void;
      createCase(params: SupportCreateCaseRequest, callback: (err: SupportInternalServerError|SupportCaseCreationLimitExceeded|SupportAttachmentSetIdNotFound|SupportAttachmentSetExpired|any, data: SupportCreateCaseResponse|any) => void): void;
      describeAttachment(params: SupportDescribeAttachmentRequest, callback: (err: SupportInternalServerError|SupportDescribeAttachmentLimitExceeded|SupportAttachmentIdNotFound|any, data: SupportDescribeAttachmentResponse|any) => void): void;
      describeCases(params: SupportDescribeCasesRequest, callback: (err: SupportInternalServerError|SupportCaseIdNotFound|any, data: SupportDescribeCasesResponse|any) => void): void;
      describeCommunications(params: SupportDescribeCommunicationsRequest, callback: (err: SupportInternalServerError|SupportCaseIdNotFound|any, data: SupportDescribeCommunicationsResponse|any) => void): void;
      describeServices(params: SupportDescribeServicesRequest, callback: (err: SupportInternalServerError|any, data: SupportDescribeServicesResponse|any) => void): void;
      describeSeverityLevels(params: SupportDescribeSeverityLevelsRequest, callback: (err: SupportInternalServerError|any, data: SupportDescribeSeverityLevelsResponse|any) => void): void;
      describeTrustedAdvisorCheckRefreshStatuses(params: SupportDescribeTrustedAdvisorCheckRefreshStatusesRequest, callback: (err: SupportInternalServerError|any, data: SupportDescribeTrustedAdvisorCheckRefreshStatusesResponse|any) => void): void;
      describeTrustedAdvisorCheckResult(params: SupportDescribeTrustedAdvisorCheckResultRequest, callback: (err: SupportInternalServerError|any, data: SupportDescribeTrustedAdvisorCheckResultResponse|any) => void): void;
      describeTrustedAdvisorCheckSummaries(params: SupportDescribeTrustedAdvisorCheckSummariesRequest, callback: (err: SupportInternalServerError|any, data: SupportDescribeTrustedAdvisorCheckSummariesResponse|any) => void): void;
      describeTrustedAdvisorChecks(params: SupportDescribeTrustedAdvisorChecksRequest, callback: (err: SupportInternalServerError|any, data: SupportDescribeTrustedAdvisorChecksResponse|any) => void): void;
      refreshTrustedAdvisorCheck(params: SupportRefreshTrustedAdvisorCheckRequest, callback: (err: SupportInternalServerError|any, data: SupportRefreshTrustedAdvisorCheckResponse|any) => void): void;
      resolveCase(params: SupportResolveCaseRequest, callback: (err: SupportInternalServerError|SupportCaseIdNotFound|any, data: SupportResolveCaseResponse|any) => void): void;
    }

    export interface SupportAddAttachmentsToSetRequest {
        attachmentSetId?: SupportAttachmentSetId;
        attachments: SupportAttachments;
    }

    export interface SupportAddAttachmentsToSetResponse {
        attachmentSetId?: SupportAttachmentSetId;
        expiryTime?: SupportExpiryTime;
    }

    export interface SupportAddCommunicationToCaseRequest {
        caseId?: SupportCaseId;
        communicationBody: SupportCommunicationBody;
        ccEmailAddresses?: SupportCcEmailAddressList;
        attachmentSetId?: SupportAttachmentSetId;
    }

    export interface SupportAddCommunicationToCaseResponse {
        result?: SupportResult;
    }

    export type SupportAfterTime = string;
    export interface SupportAttachment {
        fileName?: SupportFileName;
        data?: SupportData;
    }

    export interface SupportAttachmentDetails {
        attachmentId?: SupportAttachmentId;
        fileName?: SupportFileName;
    }

    export type SupportAttachmentId = string;
    export interface SupportAttachmentIdNotFound {
        message?: SupportErrorMessage;
    }

    export interface SupportAttachmentLimitExceeded {
        message?: SupportErrorMessage;
    }

    export type SupportAttachmentSet = Array<SupportAttachmentDetails>;
    export interface SupportAttachmentSetExpired {
        message?: SupportErrorMessage;
    }

    export type SupportAttachmentSetId = string;
    export interface SupportAttachmentSetIdNotFound {
        message?: SupportErrorMessage;
    }

    export interface SupportAttachmentSetSizeLimitExceeded {
        message?: SupportErrorMessage;
    }

    export type SupportAttachments = Array<SupportAttachment>;
    export type SupportBeforeTime = string;
    export type SupportBoolean = boolean;
    export interface SupportCaseCreationLimitExceeded {
        message?: SupportErrorMessage;
    }

    export interface SupportCaseDetails {
        caseId?: SupportCaseId;
        displayId?: SupportDisplayId;
        subject?: SupportSubject;
        status?: SupportStatus;
        serviceCode?: SupportServiceCode;
        categoryCode?: SupportCategoryCode;
        severityCode?: SupportSeverityCode;
        submittedBy?: SupportSubmittedBy;
        timeCreated?: SupportTimeCreated;
        recentCommunications?: SupportRecentCaseCommunications;
        ccEmailAddresses?: SupportCcEmailAddressList;
        language?: SupportLanguage;
    }

    export type SupportCaseId = string;
    export type SupportCaseIdList = Array<SupportCaseId>; // max: 100
    export interface SupportCaseIdNotFound {
        message?: SupportErrorMessage;
    }

    export type SupportCaseList = Array<SupportCaseDetails>;
    export type SupportCaseStatus = string;
    export interface SupportCategory {
        code?: SupportCategoryCode;
        name?: SupportCategoryName;
    }

    export type SupportCategoryCode = string;
    export type SupportCategoryList = Array<SupportCategory>;
    export type SupportCategoryName = string;
    export type SupportCcEmailAddress = string;
    export type SupportCcEmailAddressList = Array<SupportCcEmailAddress>;
    export interface SupportCommunication {
        caseId?: SupportCaseId;
        body?: SupportCommunicationBody;
        submittedBy?: SupportSubmittedBy;
        timeCreated?: SupportTimeCreated;
        attachmentSet?: SupportAttachmentSet;
    }

    export type SupportCommunicationBody = string;
    export type SupportCommunicationList = Array<SupportCommunication>;
    export interface SupportCreateCaseRequest {
        subject: SupportSubject;
        serviceCode?: SupportServiceCode;
        severityCode?: SupportSeverityCode;
        categoryCode?: SupportCategoryCode;
        communicationBody: SupportCommunicationBody;
        ccEmailAddresses?: SupportCcEmailAddressList;
        language?: SupportLanguage;
        issueType?: SupportIssueType;
        attachmentSetId?: SupportAttachmentSetId;
    }

    export interface SupportCreateCaseResponse {
        caseId?: SupportCaseId;
    }

    export type SupportData = any; // not really - it was 'blob' instead - must fix this one
    export interface SupportDescribeAttachmentLimitExceeded {
        message?: SupportErrorMessage;
    }

    export interface SupportDescribeAttachmentRequest {
        attachmentId: SupportAttachmentId;
    }

    export interface SupportDescribeAttachmentResponse {
        attachment?: SupportAttachment;
    }

    export interface SupportDescribeCasesRequest {
        caseIdList?: SupportCaseIdList;
        displayId?: SupportDisplayId;
        afterTime?: SupportAfterTime;
        beforeTime?: SupportBeforeTime;
        includeResolvedCases?: SupportIncludeResolvedCases;
        nextToken?: SupportNextToken;
        maxResults?: SupportMaxResults;
        language?: SupportLanguage;
        includeCommunications?: SupportIncludeCommunications;
    }

    export interface SupportDescribeCasesResponse {
        cases?: SupportCaseList;
        nextToken?: SupportNextToken;
    }

    export interface SupportDescribeCommunicationsRequest {
        caseId: SupportCaseId;
        beforeTime?: SupportBeforeTime;
        afterTime?: SupportAfterTime;
        nextToken?: SupportNextToken;
        maxResults?: SupportMaxResults;
    }

    export interface SupportDescribeCommunicationsResponse {
        communications?: SupportCommunicationList;
        nextToken?: SupportNextToken;
    }

    export interface SupportDescribeServicesRequest {
        serviceCodeList?: SupportServiceCodeList;
        language?: SupportLanguage;
    }

    export interface SupportDescribeServicesResponse {
        services?: SupportServiceList;
    }

    export interface SupportDescribeSeverityLevelsRequest {
        language?: SupportLanguage;
    }

    export interface SupportDescribeSeverityLevelsResponse {
        severityLevels?: SupportSeverityLevelsList;
    }

    export interface SupportDescribeTrustedAdvisorCheckRefreshStatusesRequest {
        checkIds: SupportStringList;
    }

    export interface SupportDescribeTrustedAdvisorCheckRefreshStatusesResponse {
        statuses: SupportTrustedAdvisorCheckRefreshStatusList;
    }

    export interface SupportDescribeTrustedAdvisorCheckResultRequest {
        checkId: SupportString;
        language?: SupportString;
    }

    export interface SupportDescribeTrustedAdvisorCheckResultResponse {
        result?: SupportTrustedAdvisorCheckResult;
    }

    export interface SupportDescribeTrustedAdvisorCheckSummariesRequest {
        checkIds: SupportStringList;
    }

    export interface SupportDescribeTrustedAdvisorCheckSummariesResponse {
        summaries: SupportTrustedAdvisorCheckSummaryList;
    }

    export interface SupportDescribeTrustedAdvisorChecksRequest {
        language: SupportString;
    }

    export interface SupportDescribeTrustedAdvisorChecksResponse {
        checks: SupportTrustedAdvisorCheckList;
    }

    export type SupportDisplayId = string;
    export type SupportDouble = number;
    export type SupportErrorMessage = string;
    export type SupportExpiryTime = string;
    export type SupportFileName = string;
    export type SupportIncludeCommunications = boolean;
    export type SupportIncludeResolvedCases = boolean;
    export interface SupportInternalServerError {
        message?: SupportErrorMessage;
    }

    export type SupportIssueType = string;
    export type SupportLanguage = string;
    export type SupportLong = number;
    export type SupportMaxResults = number;
    export type SupportNextToken = string;
    export interface SupportRecentCaseCommunications {
        communications?: SupportCommunicationList;
        nextToken?: SupportNextToken;
    }

    export interface SupportRefreshTrustedAdvisorCheckRequest {
        checkId: SupportString;
    }

    export interface SupportRefreshTrustedAdvisorCheckResponse {
        status: SupportTrustedAdvisorCheckRefreshStatus;
    }

    export interface SupportResolveCaseRequest {
        caseId?: SupportCaseId;
    }

    export interface SupportResolveCaseResponse {
        initialCaseStatus?: SupportCaseStatus;
        finalCaseStatus?: SupportCaseStatus;
    }

    export type SupportResult = boolean;
    export interface SupportService {
        code?: SupportServiceCode;
        name?: SupportServiceName;
        categories?: SupportCategoryList;
    }

    export type SupportServiceCode = string; // pattern: "[0-9a-z\-_]+"
    export type SupportServiceCodeList = Array<SupportServiceCode>; // max: 100
    export type SupportServiceList = Array<SupportService>;
    export type SupportServiceName = string;
    export type SupportSeverityCode = string;
    export interface SupportSeverityLevel {
        code?: SupportSeverityLevelCode;
        name?: SupportSeverityLevelName;
    }

    export type SupportSeverityLevelCode = string;
    export type SupportSeverityLevelName = string;
    export type SupportSeverityLevelsList = Array<SupportSeverityLevel>;
    export type SupportStatus = string;
    export type SupportString = string;
    export type SupportStringList = Array<SupportString>;
    export type SupportSubject = string;
    export type SupportSubmittedBy = string;
    export type SupportTimeCreated = string;
    export interface SupportTrustedAdvisorCategorySpecificSummary {
        costOptimizing?: SupportTrustedAdvisorCostOptimizingSummary;
    }

    export interface SupportTrustedAdvisorCheckDescription {
        id: SupportString;
        name: SupportString;
        description: SupportString;
        category: SupportString;
        metadata: SupportStringList;
    }

    export type SupportTrustedAdvisorCheckList = Array<SupportTrustedAdvisorCheckDescription>;
    export interface SupportTrustedAdvisorCheckRefreshStatus {
        checkId: SupportString;
        status: SupportString;
        millisUntilNextRefreshable: SupportLong;
    }

    export type SupportTrustedAdvisorCheckRefreshStatusList = Array<SupportTrustedAdvisorCheckRefreshStatus>;
    export interface SupportTrustedAdvisorCheckResult {
        checkId: SupportString;
        timestamp: SupportString;
        status: SupportString;
        resourcesSummary: SupportTrustedAdvisorResourcesSummary;
        categorySpecificSummary: SupportTrustedAdvisorCategorySpecificSummary;
        flaggedResources: SupportTrustedAdvisorResourceDetailList;
    }

    export interface SupportTrustedAdvisorCheckSummary {
        checkId: SupportString;
        timestamp: SupportString;
        status: SupportString;
        hasFlaggedResources?: SupportBoolean;
        resourcesSummary: SupportTrustedAdvisorResourcesSummary;
        categorySpecificSummary: SupportTrustedAdvisorCategorySpecificSummary;
    }

    export type SupportTrustedAdvisorCheckSummaryList = Array<SupportTrustedAdvisorCheckSummary>;
    export interface SupportTrustedAdvisorCostOptimizingSummary {
        estimatedMonthlySavings: SupportDouble;
        estimatedPercentMonthlySavings: SupportDouble;
    }

    export interface SupportTrustedAdvisorResourceDetail {
        status: SupportString;
        region: SupportString;
        resourceId: SupportString;
        isSuppressed?: SupportBoolean;
        metadata: SupportStringList;
    }

    export type SupportTrustedAdvisorResourceDetailList = Array<SupportTrustedAdvisorResourceDetail>;
    export interface SupportTrustedAdvisorResourcesSummary {
        resourcesProcessed: SupportLong;
        resourcesFlagged: SupportLong;
        resourcesIgnored: SupportLong;
        resourcesSuppressed: SupportLong;
    }

}
