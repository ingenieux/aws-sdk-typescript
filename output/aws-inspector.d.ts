// DO NOT EDIT!
//

///<reference path="./aws-sdk-common.d.ts" />
declare module "aws-sdk" {

    export class Inspector extends Service {
      constructor(options?: any);
      addAttributesToFindings(params: InspectorAddAttributesToFindingsRequest, callback?: (err: InspectorInternalException|InspectorInvalidInputException|InspectorAccessDeniedException|InspectorNoSuchEntityException|any, data: InspectorAddAttributesToFindingsResponse|any) => void): Request;
      attachAssessmentAndRulesPackage(params: InspectorAttachAssessmentAndRulesPackageRequest, callback?: (err: InspectorInternalException|InspectorInvalidInputException|InspectorAccessDeniedException|InspectorNoSuchEntityException|any, data: InspectorAttachAssessmentAndRulesPackageResponse|any) => void): Request;
      createApplication(params: InspectorCreateApplicationRequest, callback?: (err: InspectorInternalException|InspectorInvalidInputException|InspectorAccessDeniedException|InspectorNoSuchEntityException|any, data: InspectorCreateApplicationResponse|any) => void): Request;
      createAssessment(params: InspectorCreateAssessmentRequest, callback?: (err: InspectorInternalException|InspectorInvalidInputException|InspectorAccessDeniedException|InspectorNoSuchEntityException|any, data: InspectorCreateAssessmentResponse|any) => void): Request;
      createResourceGroup(params: InspectorCreateResourceGroupRequest, callback?: (err: InspectorInternalException|InspectorInvalidInputException|InspectorAccessDeniedException|any, data: InspectorCreateResourceGroupResponse|any) => void): Request;
      deleteApplication(params: InspectorDeleteApplicationRequest, callback?: (err: InspectorInternalException|InspectorInvalidInputException|InspectorOperationInProgressException|InspectorAccessDeniedException|InspectorNoSuchEntityException|any, data: InspectorDeleteApplicationResponse|any) => void): Request;
      deleteAssessment(params: InspectorDeleteAssessmentRequest, callback?: (err: InspectorInternalException|InspectorInvalidInputException|InspectorOperationInProgressException|InspectorAccessDeniedException|InspectorNoSuchEntityException|any, data: InspectorDeleteAssessmentResponse|any) => void): Request;
      deleteRun(params: InspectorDeleteRunRequest, callback?: (err: InspectorInternalException|InspectorInvalidInputException|InspectorAccessDeniedException|InspectorNoSuchEntityException|any, data: InspectorDeleteRunResponse|any) => void): Request;
      describeApplication(params: InspectorDescribeApplicationRequest, callback?: (err: InspectorInternalException|InspectorInvalidInputException|InspectorAccessDeniedException|InspectorNoSuchEntityException|any, data: InspectorDescribeApplicationResponse|any) => void): Request;
      describeAssessment(params: InspectorDescribeAssessmentRequest, callback?: (err: InspectorInternalException|InspectorInvalidInputException|InspectorAccessDeniedException|InspectorNoSuchEntityException|any, data: InspectorDescribeAssessmentResponse|any) => void): Request;
      describeCrossAccountAccessRole(callback?: (err: InspectorInternalException|InspectorAccessDeniedException|any, data: InspectorDescribeCrossAccountAccessRoleResponse|any) => void): Request;
      describeFinding(params: InspectorDescribeFindingRequest, callback?: (err: InspectorInternalException|InspectorInvalidInputException|InspectorAccessDeniedException|InspectorNoSuchEntityException|any, data: InspectorDescribeFindingResponse|any) => void): Request;
      describeResourceGroup(params: InspectorDescribeResourceGroupRequest, callback?: (err: InspectorInternalException|InspectorInvalidInputException|InspectorAccessDeniedException|InspectorNoSuchEntityException|any, data: InspectorDescribeResourceGroupResponse|any) => void): Request;
      describeRulesPackage(params: InspectorDescribeRulesPackageRequest, callback?: (err: InspectorInternalException|InspectorInvalidInputException|InspectorAccessDeniedException|InspectorNoSuchEntityException|any, data: InspectorDescribeRulesPackageResponse|any) => void): Request;
      describeRun(params: InspectorDescribeRunRequest, callback?: (err: InspectorInternalException|InspectorInvalidInputException|InspectorAccessDeniedException|InspectorNoSuchEntityException|any, data: InspectorDescribeRunResponse|any) => void): Request;
      detachAssessmentAndRulesPackage(params: InspectorDetachAssessmentAndRulesPackageRequest, callback?: (err: InspectorInternalException|InspectorInvalidInputException|InspectorAccessDeniedException|InspectorNoSuchEntityException|any, data: InspectorDetachAssessmentAndRulesPackageResponse|any) => void): Request;
      getAssessmentTelemetry(params: InspectorGetAssessmentTelemetryRequest, callback?: (err: InspectorInternalException|InspectorInvalidInputException|InspectorAccessDeniedException|InspectorNoSuchEntityException|any, data: InspectorGetAssessmentTelemetryResponse|any) => void): Request;
      listApplications(params: InspectorListApplicationsRequest, callback?: (err: InspectorInternalException|InspectorInvalidInputException|InspectorAccessDeniedException|any, data: InspectorListApplicationsResponse|any) => void): Request;
      listAssessmentAgents(params: InspectorListAssessmentAgentsRequest, callback?: (err: InspectorInternalException|InspectorInvalidInputException|InspectorAccessDeniedException|InspectorNoSuchEntityException|any, data: InspectorListAssessmentAgentsResponse|any) => void): Request;
      listAssessments(params: InspectorListAssessmentsRequest, callback?: (err: InspectorInternalException|InspectorInvalidInputException|InspectorAccessDeniedException|InspectorNoSuchEntityException|any, data: InspectorListAssessmentsResponse|any) => void): Request;
      listAttachedAssessments(params: InspectorListAttachedAssessmentsRequest, callback?: (err: InspectorInternalException|InspectorInvalidInputException|InspectorAccessDeniedException|InspectorNoSuchEntityException|any, data: InspectorListAttachedAssessmentsResponse|any) => void): Request;
      listAttachedRulesPackages(params: InspectorListAttachedRulesPackagesRequest, callback?: (err: InspectorInternalException|InspectorInvalidInputException|InspectorAccessDeniedException|InspectorNoSuchEntityException|any, data: InspectorListAttachedRulesPackagesResponse|any) => void): Request;
      listFindings(params: InspectorListFindingsRequest, callback?: (err: InspectorInternalException|InspectorInvalidInputException|InspectorAccessDeniedException|InspectorNoSuchEntityException|any, data: InspectorListFindingsResponse|any) => void): Request;
      listRulesPackages(params: InspectorListRulesPackagesRequest, callback?: (err: InspectorInternalException|InspectorInvalidInputException|InspectorAccessDeniedException|any, data: InspectorListRulesPackagesResponse|any) => void): Request;
      listRuns(params: InspectorListRunsRequest, callback?: (err: InspectorInternalException|InspectorInvalidInputException|InspectorAccessDeniedException|InspectorNoSuchEntityException|any, data: InspectorListRunsResponse|any) => void): Request;
      listTagsForResource(params: InspectorListTagsForResourceRequest, callback?: (err: InspectorInternalException|InspectorInvalidInputException|InspectorAccessDeniedException|InspectorNoSuchEntityException|any, data: InspectorListTagsForResourceResponse|any) => void): Request;
      localizeText(params: InspectorLocalizeTextRequest, callback?: (err: InspectorInternalException|InspectorInvalidInputException|InspectorAccessDeniedException|InspectorNoSuchEntityException|any, data: InspectorLocalizeTextResponse|any) => void): Request;
      previewAgentsForResourceGroup(params: InspectorPreviewAgentsForResourceGroupRequest, callback?: (err: InspectorInternalException|InspectorInvalidInputException|InspectorAccessDeniedException|InspectorNoSuchEntityException|InspectorInvalidCrossAccountRoleException|any, data: InspectorPreviewAgentsForResourceGroupResponse|any) => void): Request;
      registerCrossAccountAccessRole(params: InspectorRegisterCrossAccountAccessRoleRequest, callback?: (err: InspectorInternalException|InspectorInvalidInputException|InspectorAccessDeniedException|InspectorInvalidCrossAccountRoleException|any, data: InspectorRegisterCrossAccountAccessRoleResponse|any) => void): Request;
      removeAttributesFromFindings(params: InspectorRemoveAttributesFromFindingsRequest, callback?: (err: InspectorInternalException|InspectorInvalidInputException|InspectorAccessDeniedException|InspectorNoSuchEntityException|any, data: InspectorRemoveAttributesFromFindingsResponse|any) => void): Request;
      runAssessment(params: InspectorRunAssessmentRequest, callback?: (err: InspectorInternalException|InspectorInvalidInputException|InspectorAccessDeniedException|InspectorNoSuchEntityException|any, data: InspectorRunAssessmentResponse|any) => void): Request;
      setTagsForResource(params: InspectorSetTagsForResourceRequest, callback?: (err: InspectorInternalException|InspectorInvalidInputException|InspectorAccessDeniedException|InspectorNoSuchEntityException|any, data: InspectorSetTagsForResourceResponse|any) => void): Request;
      startDataCollection(params: InspectorStartDataCollectionRequest, callback?: (err: InspectorInternalException|InspectorInvalidInputException|InspectorAccessDeniedException|InspectorNoSuchEntityException|InspectorInvalidCrossAccountRoleException|any, data: InspectorStartDataCollectionResponse|any) => void): Request;
      stopDataCollection(params: InspectorStopDataCollectionRequest, callback?: (err: InspectorInternalException|InspectorInvalidInputException|InspectorAccessDeniedException|InspectorNoSuchEntityException|any, data: InspectorStopDataCollectionResponse|any) => void): Request;
      updateApplication(params: InspectorUpdateApplicationRequest, callback?: (err: InspectorInternalException|InspectorInvalidInputException|InspectorAccessDeniedException|InspectorNoSuchEntityException|any, data: InspectorUpdateApplicationResponse|any) => void): Request;
      updateAssessment(params: InspectorUpdateAssessmentRequest, callback?: (err: InspectorInternalException|InspectorInvalidInputException|InspectorAccessDeniedException|InspectorNoSuchEntityException|any, data: InspectorUpdateAssessmentResponse|any) => void): Request;
    }

    export interface InspectorAccessDeniedException {
    }

    export interface InspectorAddAttributesToFindingsRequest {
        findingArns?: InspectorArnList;
        attributes?: InspectorAttributeList;
    }

    export interface InspectorAddAttributesToFindingsResponse {
        message?: InspectorMessage;
    }

    export interface InspectorAgent {
        agentId?: InspectorAgentId;
        assessmentArn?: InspectorArn;
        agentHealth?: InspectorAgentHealth;
        agentHealthCode?: InspectorAgentHealthCode;
        agentHealthDetails?: InspectorAgentHealthDetails;
        autoScalingGroup?: InspectorAutoScalingGroup;
        accountId?: InspectorAwsAccount;
        telemetry?: InspectorTelemetryList;
    }

    export type InspectorAgentHealth = string;
    export type InspectorAgentHealthCode = string;
    export type InspectorAgentHealthDetails = string;
    export type InspectorAgentHealthList = Array<InspectorAgentHealth>;
    export type InspectorAgentId = string;
    export type InspectorAgentList = Array<InspectorAgent>;
    export interface InspectorAgentPreview {
        agentId?: InspectorAgentId;
        autoScalingGroup?: InspectorAutoScalingGroup;
    }

    export type InspectorAgentPreviewList = Array<InspectorAgentPreview>;
    export interface InspectorAgentsFilter {
        agentHealthList?: InspectorAgentHealthList;
    }

    export interface InspectorApplication {
        applicationArn?: InspectorArn;
        applicationName?: InspectorName;
        resourceGroupArn?: InspectorArn;
    }

    export interface InspectorApplicationsFilter {
        applicationNamePatterns?: InspectorNamePatternList;
    }

    export type InspectorArn = string;
    export type InspectorArnList = Array<InspectorArn>;
    export interface InspectorAssessment {
        assessmentArn?: InspectorArn;
        assessmentName?: InspectorName;
        applicationArn?: InspectorArn;
        assessmentState?: InspectorAssessmentState;
        failureMessage?: InspectorFailureMessage;
        dataCollected?: InspectorBool;
        startTime?: InspectorTimestamp;
        endTime?: InspectorTimestamp;
        durationInSeconds?: InspectorDuration;
        userAttributesForFindings?: InspectorAttributeList;
    }

    export type InspectorAssessmentState = string;
    export type InspectorAssessmentStateList = Array<InspectorAssessmentState>;
    export interface InspectorAssessmentsFilter {
        assessmentNamePatterns?: InspectorNamePatternList;
        assessmentStates?: InspectorAssessmentStateList;
        dataCollected?: InspectorBool;
        startTimeRange?: InspectorTimestampRange;
        endTimeRange?: InspectorTimestampRange;
        durationRange?: InspectorDurationRange;
    }

    export interface InspectorAttachAssessmentAndRulesPackageRequest {
        assessmentArn?: InspectorArn;
        rulesPackageArn?: InspectorArn;
    }

    export interface InspectorAttachAssessmentAndRulesPackageResponse {
        message?: InspectorMessage;
    }

    export interface InspectorAttribute {
        key?: InspectorAttributeKey;
        value?: InspectorAttributeValue;
    }

    export type InspectorAttributeKey = string;
    export type InspectorAttributeKeyList = Array<InspectorAttributeKey>;
    export type InspectorAttributeList = Array<InspectorAttribute>;
    export type InspectorAttributeValue = string;
    export type InspectorAutoScalingGroup = string;
    export type InspectorAwsAccount = string;
    export type InspectorBool = boolean;
    export interface InspectorCreateApplicationRequest {
        applicationName?: InspectorName;
        resourceGroupArn?: InspectorArn;
    }

    export interface InspectorCreateApplicationResponse {
        applicationArn?: InspectorArn;
    }

    export interface InspectorCreateAssessmentRequest {
        applicationArn?: InspectorArn;
        assessmentName?: InspectorName;
        durationInSeconds?: InspectorDuration;
        userAttributesForFindings?: InspectorAttributeList;
    }

    export interface InspectorCreateAssessmentResponse {
        assessmentArn?: InspectorArn;
    }

    export interface InspectorCreateResourceGroupRequest {
        resourceGroupTags?: InspectorResourceGroupTags;
    }

    export interface InspectorCreateResourceGroupResponse {
        resourceGroupArn?: InspectorArn;
    }

    export interface InspectorDeleteApplicationRequest {
        applicationArn?: InspectorArn;
    }

    export interface InspectorDeleteApplicationResponse {
        message?: InspectorMessage;
    }

    export interface InspectorDeleteAssessmentRequest {
        assessmentArn?: InspectorArn;
    }

    export interface InspectorDeleteAssessmentResponse {
        message?: InspectorMessage;
    }

    export interface InspectorDeleteRunRequest {
        runArn?: InspectorArn;
    }

    export interface InspectorDeleteRunResponse {
        message?: InspectorMessage;
    }

    export interface InspectorDescribeApplicationRequest {
        applicationArn?: InspectorArn;
    }

    export interface InspectorDescribeApplicationResponse {
        application?: InspectorApplication;
    }

    export interface InspectorDescribeAssessmentRequest {
        assessmentArn?: InspectorArn;
    }

    export interface InspectorDescribeAssessmentResponse {
        assessment?: InspectorAssessment;
    }

    export interface InspectorDescribeCrossAccountAccessRoleResponse {
        roleArn?: InspectorArn;
        valid?: InspectorBool;
    }

    export interface InspectorDescribeFindingRequest {
        findingArn?: InspectorArn;
    }

    export interface InspectorDescribeFindingResponse {
        finding?: InspectorFinding;
    }

    export interface InspectorDescribeResourceGroupRequest {
        resourceGroupArn?: InspectorArn;
    }

    export interface InspectorDescribeResourceGroupResponse {
        resourceGroup?: InspectorResourceGroup;
    }

    export interface InspectorDescribeRulesPackageRequest {
        rulesPackageArn?: InspectorArn;
    }

    export interface InspectorDescribeRulesPackageResponse {
        rulesPackage?: InspectorRulesPackage;
    }

    export interface InspectorDescribeRunRequest {
        runArn?: InspectorArn;
    }

    export interface InspectorDescribeRunResponse {
        run?: InspectorRun;
    }

    export interface InspectorDetachAssessmentAndRulesPackageRequest {
        assessmentArn?: InspectorArn;
        rulesPackageArn?: InspectorArn;
    }

    export interface InspectorDetachAssessmentAndRulesPackageResponse {
        message?: InspectorMessage;
    }

    export type InspectorDuration = number;
    export interface InspectorDurationRange {
        minimum?: InspectorDuration;
        maximum?: InspectorDuration;
    }

    export type InspectorFailureMessage = string;
    export interface InspectorFinding {
        findingArn?: InspectorArn;
        runArn?: InspectorArn;
        rulesPackageArn?: InspectorArn;
        ruleName?: InspectorName;
        agentId?: InspectorAgentId;
        autoScalingGroup?: InspectorAutoScalingGroup;
        severity?: InspectorSeverity;
        finding?: InspectorLocalizedText;
        description?: InspectorLocalizedText;
        recommendation?: InspectorLocalizedText;
        attributes?: InspectorAttributeList;
        userAttributes?: InspectorAttributeList;
    }

    export interface InspectorFindingsFilter {
        rulesPackageArns?: InspectorArnList;
        ruleNames?: InspectorNameList;
        severities?: InspectorSeverityList;
        attributes?: InspectorAttributeList;
        userAttributes?: InspectorAttributeList;
    }

    export interface InspectorGetAssessmentTelemetryRequest {
        assessmentArn?: InspectorArn;
    }

    export interface InspectorGetAssessmentTelemetryResponse {
        telemetry?: InspectorTelemetryList;
    }

    export type InspectorInteger = number;
    export interface InspectorInternalException {
    }

    export interface InspectorInvalidCrossAccountRoleException {
    }

    export interface InspectorInvalidInputException {
    }

    export interface InspectorListApplicationsRequest {
        filter?: InspectorApplicationsFilter;
        nextToken?: InspectorPaginationToken;
        maxResults?: InspectorInteger;
    }

    export interface InspectorListApplicationsResponse {
        applicationArnList?: InspectorArnList;
        nextToken?: InspectorPaginationToken;
    }

    export interface InspectorListAssessmentAgentsRequest {
        assessmentArn?: InspectorArn;
        filter?: InspectorAgentsFilter;
        nextToken?: InspectorPaginationToken;
        maxResults?: InspectorInteger;
    }

    export interface InspectorListAssessmentAgentsResponse {
        agentList?: InspectorAgentList;
        nextToken?: InspectorPaginationToken;
    }

    export interface InspectorListAssessmentsRequest {
        applicationArns?: InspectorArnList;
        filter?: InspectorAssessmentsFilter;
        nextToken?: InspectorPaginationToken;
        maxResults?: InspectorInteger;
    }

    export interface InspectorListAssessmentsResponse {
        assessmentArnList?: InspectorArnList;
        nextToken?: InspectorPaginationToken;
    }

    export interface InspectorListAttachedAssessmentsRequest {
        rulesPackageArn?: InspectorArn;
        filter?: InspectorAssessmentsFilter;
        nextToken?: InspectorPaginationToken;
        maxResults?: InspectorInteger;
    }

    export interface InspectorListAttachedAssessmentsResponse {
        assessmentArnList?: InspectorArnList;
        nextToken?: InspectorPaginationToken;
    }

    export interface InspectorListAttachedRulesPackagesRequest {
        assessmentArn?: InspectorArn;
        nextToken?: InspectorPaginationToken;
        maxResults?: InspectorInteger;
    }

    export interface InspectorListAttachedRulesPackagesResponse {
        rulesPackageArnList?: InspectorArnList;
        nextToken?: InspectorPaginationToken;
    }

    export interface InspectorListFindingsRequest {
        runArns?: InspectorArnList;
        filter?: InspectorFindingsFilter;
        nextToken?: InspectorPaginationToken;
        maxResults?: InspectorInteger;
    }

    export interface InspectorListFindingsResponse {
        findingArnList?: InspectorArnList;
        nextToken?: InspectorPaginationToken;
    }

    export interface InspectorListRulesPackagesRequest {
        nextToken?: InspectorPaginationToken;
        maxResults?: InspectorInteger;
    }

    export interface InspectorListRulesPackagesResponse {
        rulesPackageArnList?: InspectorArnList;
        nextToken?: InspectorPaginationToken;
    }

    export interface InspectorListRunsRequest {
        assessmentArns?: InspectorArnList;
        filter?: InspectorRunsFilter;
        nextToken?: InspectorPaginationToken;
        maxResults?: InspectorInteger;
    }

    export interface InspectorListRunsResponse {
        runArnList?: InspectorArnList;
        nextToken?: InspectorPaginationToken;
    }

    export interface InspectorListTagsForResourceRequest {
        resourceArn?: InspectorArn;
    }

    export interface InspectorListTagsForResourceResponse {
        tagList?: InspectorTagList;
    }

    export type InspectorLocale = string;
    export interface InspectorLocalizeTextRequest {
        localizedTexts?: InspectorLocalizedTextList;
        locale?: InspectorLocale;
    }

    export interface InspectorLocalizeTextResponse {
        message?: InspectorMessage;
        results?: InspectorTextList;
    }

    export type InspectorLocalizedFacility = string;
    export interface InspectorLocalizedText {
        key?: InspectorLocalizedTextKey;
        parameters?: InspectorParameterList;
    }

    export type InspectorLocalizedTextId = string;
    export interface InspectorLocalizedTextKey {
        facility?: InspectorLocalizedFacility;
        id?: InspectorLocalizedTextId;
    }

    export type InspectorLocalizedTextList = Array<InspectorLocalizedText>;
    export type InspectorLong = number;
    export type InspectorMessage = string;
    export type InspectorMessageType = string;
    export interface InspectorMessageTypeTelemetry {
        messageType?: InspectorMessageType;
        count?: InspectorLong;
        dataSize?: InspectorLong;
    }

    export type InspectorMessageTypeTelemetryList = Array<InspectorMessageTypeTelemetry>;
    export type InspectorName = string;
    export type InspectorNameList = Array<InspectorName>;
    export type InspectorNamePattern = string;
    export type InspectorNamePatternList = Array<InspectorNamePattern>;
    export interface InspectorNoSuchEntityException {
    }

    export interface InspectorOperationInProgressException {
    }

    export type InspectorPaginationToken = string;
    export interface InspectorParameter {
        name?: InspectorParameterName;
        value?: InspectorParameterValue;
    }

    export type InspectorParameterList = Array<InspectorParameter>;
    export type InspectorParameterName = string;
    export type InspectorParameterValue = string;
    export interface InspectorPreviewAgentsForResourceGroupRequest {
        resourceGroupArn?: InspectorArn;
        nextToken?: InspectorPaginationToken;
        maxResults?: InspectorInteger;
    }

    export interface InspectorPreviewAgentsForResourceGroupResponse {
        agentPreviewList?: InspectorAgentPreviewList;
        nextToken?: InspectorPaginationToken;
    }

    export interface InspectorRegisterCrossAccountAccessRoleRequest {
        roleArn?: InspectorArn;
    }

    export interface InspectorRegisterCrossAccountAccessRoleResponse {
        message?: InspectorMessage;
    }

    export interface InspectorRemoveAttributesFromFindingsRequest {
        findingArns?: InspectorArnList;
        attributeKeys?: InspectorAttributeKeyList;
    }

    export interface InspectorRemoveAttributesFromFindingsResponse {
        message?: InspectorMessage;
    }

    export interface InspectorResourceGroup {
        resourceGroupArn?: InspectorArn;
        resourceGroupTags?: InspectorResourceGroupTags;
    }

    export type InspectorResourceGroupTags = string;
    export interface InspectorRulesPackage {
        rulesPackageArn?: InspectorArn;
        rulesPackageName?: InspectorName;
        version?: InspectorVersion;
        provider?: InspectorName;
        description?: InspectorLocalizedText;
    }

    export interface InspectorRun {
        runArn?: InspectorArn;
        runName?: InspectorName;
        assessmentArn?: InspectorArn;
        runState?: InspectorRunState;
        rulesPackages?: InspectorArnList;
        creationTime?: InspectorTimestamp;
        completionTime?: InspectorTimestamp;
    }

    export interface InspectorRunAssessmentRequest {
        assessmentArn?: InspectorArn;
        runName?: InspectorName;
    }

    export interface InspectorRunAssessmentResponse {
        runArn?: InspectorArn;
    }

    export type InspectorRunState = string;
    export type InspectorRunStateList = Array<InspectorRunState>;
    export interface InspectorRunsFilter {
        runNamePatterns?: InspectorNamePatternList;
        runStates?: InspectorRunStateList;
        rulesPackages?: InspectorArnList;
        creationTime?: InspectorTimestampRange;
        completionTime?: InspectorTimestampRange;
    }

    export interface InspectorSetTagsForResourceRequest {
        resourceArn?: InspectorArn;
        tags?: InspectorTagList;
    }

    export interface InspectorSetTagsForResourceResponse {
        message?: InspectorMessage;
    }

    export type InspectorSeverity = string;
    export type InspectorSeverityList = Array<InspectorSeverity>;
    export interface InspectorStartDataCollectionRequest {
        assessmentArn?: InspectorArn;
    }

    export interface InspectorStartDataCollectionResponse {
        message?: InspectorMessage;
    }

    export interface InspectorStopDataCollectionRequest {
        assessmentArn?: InspectorArn;
    }

    export interface InspectorStopDataCollectionResponse {
        message?: InspectorMessage;
    }

    export interface InspectorTag {
        Key?: InspectorTagKey;
        Value?: InspectorTagValue;
    }

    export type InspectorTagKey = string;
    export type InspectorTagList = Array<InspectorTag>;
    export type InspectorTagValue = string;
    export interface InspectorTelemetry {
        status?: InspectorTelemetryStatus;
        messageTypeTelemetries?: InspectorMessageTypeTelemetryList;
    }

    export type InspectorTelemetryList = Array<InspectorTelemetry>;
    export type InspectorTelemetryStatus = string;
    export type InspectorText = string;
    export type InspectorTextList = Array<InspectorText>;
    export type InspectorTimestamp = number;
    export interface InspectorTimestampRange {
        minimum?: InspectorTimestamp;
        maximum?: InspectorTimestamp;
    }

    export interface InspectorUpdateApplicationRequest {
        applicationArn?: InspectorArn;
        applicationName?: InspectorName;
        resourceGroupArn?: InspectorArn;
    }

    export interface InspectorUpdateApplicationResponse {
        message?: InspectorMessage;
    }

    export interface InspectorUpdateAssessmentRequest {
        assessmentArn?: InspectorArn;
        assessmentName?: InspectorName;
        durationInSeconds?: InspectorDuration;
    }

    export interface InspectorUpdateAssessmentResponse {
        message?: InspectorMessage;
    }

    export type InspectorVersion = string;
}
