// Type definitions for aws-sdk - Amazon Inspector
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

///<reference path="./aws-sdk-common.d.ts" />

declare module "aws-sdk" {

    /*
     * apiVersion: 2015-08-18
     * endpointPrefix: inspector
     * serviceAbbreviation: 
     * signatureVersion: v4
     * protocol: json
     */
    export class Inspector extends Service {
      constructor(options?: any);
      endpoint: Endpoint;
      addAttributesToFindings(params: Inspector.AddAttributesToFindingsRequest, callback?: (err: Inspector.InternalException|Inspector.InvalidInputException|Inspector.AccessDeniedException|Inspector.NoSuchEntityException|any, data: Inspector.AddAttributesToFindingsResponse|any) => void): Request;
      attachAssessmentAndRulesPackage(params: Inspector.AttachAssessmentAndRulesPackageRequest, callback?: (err: Inspector.InternalException|Inspector.InvalidInputException|Inspector.AccessDeniedException|Inspector.NoSuchEntityException|any, data: Inspector.AttachAssessmentAndRulesPackageResponse|any) => void): Request;
      createApplication(params: Inspector.CreateApplicationRequest, callback?: (err: Inspector.InternalException|Inspector.InvalidInputException|Inspector.AccessDeniedException|Inspector.NoSuchEntityException|any, data: Inspector.CreateApplicationResponse|any) => void): Request;
      createAssessment(params: Inspector.CreateAssessmentRequest, callback?: (err: Inspector.InternalException|Inspector.InvalidInputException|Inspector.AccessDeniedException|Inspector.NoSuchEntityException|any, data: Inspector.CreateAssessmentResponse|any) => void): Request;
      createResourceGroup(params: Inspector.CreateResourceGroupRequest, callback?: (err: Inspector.InternalException|Inspector.InvalidInputException|Inspector.AccessDeniedException|any, data: Inspector.CreateResourceGroupResponse|any) => void): Request;
      deleteApplication(params: Inspector.DeleteApplicationRequest, callback?: (err: Inspector.InternalException|Inspector.InvalidInputException|Inspector.OperationInProgressException|Inspector.AccessDeniedException|Inspector.NoSuchEntityException|any, data: Inspector.DeleteApplicationResponse|any) => void): Request;
      deleteAssessment(params: Inspector.DeleteAssessmentRequest, callback?: (err: Inspector.InternalException|Inspector.InvalidInputException|Inspector.OperationInProgressException|Inspector.AccessDeniedException|Inspector.NoSuchEntityException|any, data: Inspector.DeleteAssessmentResponse|any) => void): Request;
      deleteRun(params: Inspector.DeleteRunRequest, callback?: (err: Inspector.InternalException|Inspector.InvalidInputException|Inspector.AccessDeniedException|Inspector.NoSuchEntityException|any, data: Inspector.DeleteRunResponse|any) => void): Request;
      describeApplication(params: Inspector.DescribeApplicationRequest, callback?: (err: Inspector.InternalException|Inspector.InvalidInputException|Inspector.AccessDeniedException|Inspector.NoSuchEntityException|any, data: Inspector.DescribeApplicationResponse|any) => void): Request;
      describeAssessment(params: Inspector.DescribeAssessmentRequest, callback?: (err: Inspector.InternalException|Inspector.InvalidInputException|Inspector.AccessDeniedException|Inspector.NoSuchEntityException|any, data: Inspector.DescribeAssessmentResponse|any) => void): Request;
      describeCrossAccountAccessRole(callback?: (err: Inspector.InternalException|Inspector.AccessDeniedException|any, data: Inspector.DescribeCrossAccountAccessRoleResponse|any) => void): Request;
      describeFinding(params: Inspector.DescribeFindingRequest, callback?: (err: Inspector.InternalException|Inspector.InvalidInputException|Inspector.AccessDeniedException|Inspector.NoSuchEntityException|any, data: Inspector.DescribeFindingResponse|any) => void): Request;
      describeResourceGroup(params: Inspector.DescribeResourceGroupRequest, callback?: (err: Inspector.InternalException|Inspector.InvalidInputException|Inspector.AccessDeniedException|Inspector.NoSuchEntityException|any, data: Inspector.DescribeResourceGroupResponse|any) => void): Request;
      describeRulesPackage(params: Inspector.DescribeRulesPackageRequest, callback?: (err: Inspector.InternalException|Inspector.InvalidInputException|Inspector.AccessDeniedException|Inspector.NoSuchEntityException|any, data: Inspector.DescribeRulesPackageResponse|any) => void): Request;
      describeRun(params: Inspector.DescribeRunRequest, callback?: (err: Inspector.InternalException|Inspector.InvalidInputException|Inspector.AccessDeniedException|Inspector.NoSuchEntityException|any, data: Inspector.DescribeRunResponse|any) => void): Request;
      detachAssessmentAndRulesPackage(params: Inspector.DetachAssessmentAndRulesPackageRequest, callback?: (err: Inspector.InternalException|Inspector.InvalidInputException|Inspector.AccessDeniedException|Inspector.NoSuchEntityException|any, data: Inspector.DetachAssessmentAndRulesPackageResponse|any) => void): Request;
      getAssessmentTelemetry(params: Inspector.GetAssessmentTelemetryRequest, callback?: (err: Inspector.InternalException|Inspector.InvalidInputException|Inspector.AccessDeniedException|Inspector.NoSuchEntityException|any, data: Inspector.GetAssessmentTelemetryResponse|any) => void): Request;
      listApplications(params: Inspector.ListApplicationsRequest, callback?: (err: Inspector.InternalException|Inspector.InvalidInputException|Inspector.AccessDeniedException|any, data: Inspector.ListApplicationsResponse|any) => void): Request;
      listAssessmentAgents(params: Inspector.ListAssessmentAgentsRequest, callback?: (err: Inspector.InternalException|Inspector.InvalidInputException|Inspector.AccessDeniedException|Inspector.NoSuchEntityException|any, data: Inspector.ListAssessmentAgentsResponse|any) => void): Request;
      listAssessments(params: Inspector.ListAssessmentsRequest, callback?: (err: Inspector.InternalException|Inspector.InvalidInputException|Inspector.AccessDeniedException|Inspector.NoSuchEntityException|any, data: Inspector.ListAssessmentsResponse|any) => void): Request;
      listAttachedAssessments(params: Inspector.ListAttachedAssessmentsRequest, callback?: (err: Inspector.InternalException|Inspector.InvalidInputException|Inspector.AccessDeniedException|Inspector.NoSuchEntityException|any, data: Inspector.ListAttachedAssessmentsResponse|any) => void): Request;
      listAttachedRulesPackages(params: Inspector.ListAttachedRulesPackagesRequest, callback?: (err: Inspector.InternalException|Inspector.InvalidInputException|Inspector.AccessDeniedException|Inspector.NoSuchEntityException|any, data: Inspector.ListAttachedRulesPackagesResponse|any) => void): Request;
      listFindings(params: Inspector.ListFindingsRequest, callback?: (err: Inspector.InternalException|Inspector.InvalidInputException|Inspector.AccessDeniedException|Inspector.NoSuchEntityException|any, data: Inspector.ListFindingsResponse|any) => void): Request;
      listRulesPackages(params: Inspector.ListRulesPackagesRequest, callback?: (err: Inspector.InternalException|Inspector.InvalidInputException|Inspector.AccessDeniedException|any, data: Inspector.ListRulesPackagesResponse|any) => void): Request;
      listRuns(params: Inspector.ListRunsRequest, callback?: (err: Inspector.InternalException|Inspector.InvalidInputException|Inspector.AccessDeniedException|Inspector.NoSuchEntityException|any, data: Inspector.ListRunsResponse|any) => void): Request;
      listTagsForResource(params: Inspector.ListTagsForResourceRequest, callback?: (err: Inspector.InternalException|Inspector.InvalidInputException|Inspector.AccessDeniedException|Inspector.NoSuchEntityException|any, data: Inspector.ListTagsForResourceResponse|any) => void): Request;
      localizeText(params: Inspector.LocalizeTextRequest, callback?: (err: Inspector.InternalException|Inspector.InvalidInputException|Inspector.AccessDeniedException|Inspector.NoSuchEntityException|any, data: Inspector.LocalizeTextResponse|any) => void): Request;
      previewAgentsForResourceGroup(params: Inspector.PreviewAgentsForResourceGroupRequest, callback?: (err: Inspector.InternalException|Inspector.InvalidInputException|Inspector.AccessDeniedException|Inspector.NoSuchEntityException|Inspector.InvalidCrossAccountRoleException|any, data: Inspector.PreviewAgentsForResourceGroupResponse|any) => void): Request;
      registerCrossAccountAccessRole(params: Inspector.RegisterCrossAccountAccessRoleRequest, callback?: (err: Inspector.InternalException|Inspector.InvalidInputException|Inspector.AccessDeniedException|Inspector.InvalidCrossAccountRoleException|any, data: Inspector.RegisterCrossAccountAccessRoleResponse|any) => void): Request;
      removeAttributesFromFindings(params: Inspector.RemoveAttributesFromFindingsRequest, callback?: (err: Inspector.InternalException|Inspector.InvalidInputException|Inspector.AccessDeniedException|Inspector.NoSuchEntityException|any, data: Inspector.RemoveAttributesFromFindingsResponse|any) => void): Request;
      runAssessment(params: Inspector.RunAssessmentRequest, callback?: (err: Inspector.InternalException|Inspector.InvalidInputException|Inspector.AccessDeniedException|Inspector.NoSuchEntityException|any, data: Inspector.RunAssessmentResponse|any) => void): Request;
      setTagsForResource(params: Inspector.SetTagsForResourceRequest, callback?: (err: Inspector.InternalException|Inspector.InvalidInputException|Inspector.AccessDeniedException|Inspector.NoSuchEntityException|any, data: Inspector.SetTagsForResourceResponse|any) => void): Request;
      startDataCollection(params: Inspector.StartDataCollectionRequest, callback?: (err: Inspector.InternalException|Inspector.InvalidInputException|Inspector.AccessDeniedException|Inspector.NoSuchEntityException|Inspector.InvalidCrossAccountRoleException|any, data: Inspector.StartDataCollectionResponse|any) => void): Request;
      stopDataCollection(params: Inspector.StopDataCollectionRequest, callback?: (err: Inspector.InternalException|Inspector.InvalidInputException|Inspector.AccessDeniedException|Inspector.NoSuchEntityException|any, data: Inspector.StopDataCollectionResponse|any) => void): Request;
      updateApplication(params: Inspector.UpdateApplicationRequest, callback?: (err: Inspector.InternalException|Inspector.InvalidInputException|Inspector.AccessDeniedException|Inspector.NoSuchEntityException|any, data: Inspector.UpdateApplicationResponse|any) => void): Request;
      updateAssessment(params: Inspector.UpdateAssessmentRequest, callback?: (err: Inspector.InternalException|Inspector.InvalidInputException|Inspector.AccessDeniedException|Inspector.NoSuchEntityException|any, data: Inspector.UpdateAssessmentResponse|any) => void): Request;

    }

    export module Inspector {
        export type AgentHealth = string;
        export type AgentHealthCode = string;
        export type AgentHealthDetails = string;
        export type AgentHealthList = AgentHealth[];
        export type AgentId = string;
        export type AgentList = Agent[];
        export type AgentPreviewList = AgentPreview[];
        export type Arn = string;
        export type ArnList = Arn[];
        export type AssessmentState = string;
        export type AssessmentStateList = AssessmentState[];
        export type AttributeKey = string;
        export type AttributeKeyList = AttributeKey[];
        export type AttributeList = Attribute[];
        export type AttributeValue = string;
        export type AutoScalingGroup = string;
        export type AwsAccount = string;
        export type Bool = boolean;
        export type Duration = number;
        export type FailureMessage = string;
        export type Integer = number;
        export type Locale = string;
        export type LocalizedFacility = string;
        export type LocalizedTextId = string;
        export type LocalizedTextList = LocalizedText[];
        export type Long = number;
        export type Message = string;
        export type MessageType = string;
        export type MessageTypeTelemetryList = MessageTypeTelemetry[];
        export type Name = string;
        export type NameList = Name[];
        export type NamePattern = string;
        export type NamePatternList = NamePattern[];
        export type PaginationToken = string;
        export type ParameterList = Parameter[];
        export type ParameterName = string;
        export type ParameterValue = string;
        export type ResourceGroupTags = string;
        export type RunState = string;
        export type RunStateList = RunState[];
        export type Severity = string;
        export type SeverityList = Severity[];
        export type TagKey = string;
        export type TagList = Tag[];
        export type TagValue = string;
        export type TelemetryList = Telemetry[];
        export type TelemetryStatus = string;
        export type Text = string;
        export type TextList = Text[];
        export type Timestamp = number;
        export type Version = string;

        export interface AccessDeniedException {
        }
        export interface AddAttributesToFindingsRequest {
            findingArns?: ArnList;
            attributes?: AttributeList;
        }
        export interface AddAttributesToFindingsResponse {
            message?: Message;
        }
        export interface Agent {
            agentId?: AgentId;
            assessmentArn?: Arn;
            agentHealth?: AgentHealth;
            agentHealthCode?: AgentHealthCode;
            agentHealthDetails?: AgentHealthDetails;
            autoScalingGroup?: AutoScalingGroup;
            accountId?: AwsAccount;
            telemetry?: TelemetryList;
        }
        export interface AgentPreview {
            agentId?: AgentId;
            autoScalingGroup?: AutoScalingGroup;
        }
        export interface AgentsFilter {
            agentHealthList?: AgentHealthList;
        }
        export interface Application {
            applicationArn?: Arn;
            applicationName?: Name;
            resourceGroupArn?: Arn;
        }
        export interface ApplicationsFilter {
            applicationNamePatterns?: NamePatternList;
        }
        export interface Assessment {
            assessmentArn?: Arn;
            assessmentName?: Name;
            applicationArn?: Arn;
            assessmentState?: AssessmentState;
            failureMessage?: FailureMessage;
            dataCollected?: Bool;
            startTime?: Timestamp;
            endTime?: Timestamp;
            durationInSeconds?: Duration;
            userAttributesForFindings?: AttributeList;
        }
        export interface AssessmentsFilter {
            assessmentNamePatterns?: NamePatternList;
            assessmentStates?: AssessmentStateList;
            dataCollected?: Bool;
            startTimeRange?: TimestampRange;
            endTimeRange?: TimestampRange;
            durationRange?: DurationRange;
        }
        export interface AttachAssessmentAndRulesPackageRequest {
            assessmentArn?: Arn;
            rulesPackageArn?: Arn;
        }
        export interface AttachAssessmentAndRulesPackageResponse {
            message?: Message;
        }
        export interface Attribute {
            key?: AttributeKey;
            value?: AttributeValue;
        }
        export interface CreateApplicationRequest {
            applicationName?: Name;
            resourceGroupArn?: Arn;
        }
        export interface CreateApplicationResponse {
            applicationArn?: Arn;
        }
        export interface CreateAssessmentRequest {
            applicationArn?: Arn;
            assessmentName?: Name;
            durationInSeconds?: Duration;
            userAttributesForFindings?: AttributeList;
        }
        export interface CreateAssessmentResponse {
            assessmentArn?: Arn;
        }
        export interface CreateResourceGroupRequest {
            resourceGroupTags?: ResourceGroupTags;
        }
        export interface CreateResourceGroupResponse {
            resourceGroupArn?: Arn;
        }
        export interface DeleteApplicationRequest {
            applicationArn?: Arn;
        }
        export interface DeleteApplicationResponse {
            message?: Message;
        }
        export interface DeleteAssessmentRequest {
            assessmentArn?: Arn;
        }
        export interface DeleteAssessmentResponse {
            message?: Message;
        }
        export interface DeleteRunRequest {
            runArn?: Arn;
        }
        export interface DeleteRunResponse {
            message?: Message;
        }
        export interface DescribeApplicationRequest {
            applicationArn?: Arn;
        }
        export interface DescribeApplicationResponse {
            application?: Application;
        }
        export interface DescribeAssessmentRequest {
            assessmentArn?: Arn;
        }
        export interface DescribeAssessmentResponse {
            assessment?: Assessment;
        }
        export interface DescribeCrossAccountAccessRoleResponse {
            roleArn?: Arn;
            valid?: Bool;
        }
        export interface DescribeFindingRequest {
            findingArn?: Arn;
        }
        export interface DescribeFindingResponse {
            finding?: Finding;
        }
        export interface DescribeResourceGroupRequest {
            resourceGroupArn?: Arn;
        }
        export interface DescribeResourceGroupResponse {
            resourceGroup?: ResourceGroup;
        }
        export interface DescribeRulesPackageRequest {
            rulesPackageArn?: Arn;
        }
        export interface DescribeRulesPackageResponse {
            rulesPackage?: RulesPackage;
        }
        export interface DescribeRunRequest {
            runArn?: Arn;
        }
        export interface DescribeRunResponse {
            run?: Run;
        }
        export interface DetachAssessmentAndRulesPackageRequest {
            assessmentArn?: Arn;
            rulesPackageArn?: Arn;
        }
        export interface DetachAssessmentAndRulesPackageResponse {
            message?: Message;
        }
        export interface DurationRange {
            minimum?: Duration;
            maximum?: Duration;
        }
        export interface Finding {
            findingArn?: Arn;
            runArn?: Arn;
            rulesPackageArn?: Arn;
            ruleName?: Name;
            agentId?: AgentId;
            autoScalingGroup?: AutoScalingGroup;
            severity?: Severity;
            finding?: LocalizedText;
            description?: LocalizedText;
            recommendation?: LocalizedText;
            attributes?: AttributeList;
            userAttributes?: AttributeList;
        }
        export interface FindingsFilter {
            rulesPackageArns?: ArnList;
            ruleNames?: NameList;
            severities?: SeverityList;
            attributes?: AttributeList;
            userAttributes?: AttributeList;
        }
        export interface GetAssessmentTelemetryRequest {
            assessmentArn?: Arn;
        }
        export interface GetAssessmentTelemetryResponse {
            telemetry?: TelemetryList;
        }
        export interface InternalException {
        }
        export interface InvalidCrossAccountRoleException {
        }
        export interface InvalidInputException {
        }
        export interface ListApplicationsRequest {
            filter?: ApplicationsFilter;
            nextToken?: PaginationToken;
            maxResults?: Integer;
        }
        export interface ListApplicationsResponse {
            applicationArnList?: ArnList;
            nextToken?: PaginationToken;
        }
        export interface ListAssessmentAgentsRequest {
            assessmentArn?: Arn;
            filter?: AgentsFilter;
            nextToken?: PaginationToken;
            maxResults?: Integer;
        }
        export interface ListAssessmentAgentsResponse {
            agentList?: AgentList;
            nextToken?: PaginationToken;
        }
        export interface ListAssessmentsRequest {
            applicationArns?: ArnList;
            filter?: AssessmentsFilter;
            nextToken?: PaginationToken;
            maxResults?: Integer;
        }
        export interface ListAssessmentsResponse {
            assessmentArnList?: ArnList;
            nextToken?: PaginationToken;
        }
        export interface ListAttachedAssessmentsRequest {
            rulesPackageArn?: Arn;
            filter?: AssessmentsFilter;
            nextToken?: PaginationToken;
            maxResults?: Integer;
        }
        export interface ListAttachedAssessmentsResponse {
            assessmentArnList?: ArnList;
            nextToken?: PaginationToken;
        }
        export interface ListAttachedRulesPackagesRequest {
            assessmentArn?: Arn;
            nextToken?: PaginationToken;
            maxResults?: Integer;
        }
        export interface ListAttachedRulesPackagesResponse {
            rulesPackageArnList?: ArnList;
            nextToken?: PaginationToken;
        }
        export interface ListFindingsRequest {
            runArns?: ArnList;
            filter?: FindingsFilter;
            nextToken?: PaginationToken;
            maxResults?: Integer;
        }
        export interface ListFindingsResponse {
            findingArnList?: ArnList;
            nextToken?: PaginationToken;
        }
        export interface ListRulesPackagesRequest {
            nextToken?: PaginationToken;
            maxResults?: Integer;
        }
        export interface ListRulesPackagesResponse {
            rulesPackageArnList?: ArnList;
            nextToken?: PaginationToken;
        }
        export interface ListRunsRequest {
            assessmentArns?: ArnList;
            filter?: RunsFilter;
            nextToken?: PaginationToken;
            maxResults?: Integer;
        }
        export interface ListRunsResponse {
            runArnList?: ArnList;
            nextToken?: PaginationToken;
        }
        export interface ListTagsForResourceRequest {
            resourceArn?: Arn;
        }
        export interface ListTagsForResourceResponse {
            tagList?: TagList;
        }
        export interface LocalizeTextRequest {
            localizedTexts?: LocalizedTextList;
            locale?: Locale;
        }
        export interface LocalizeTextResponse {
            message?: Message;
            results?: TextList;
        }
        export interface LocalizedText {
            key?: LocalizedTextKey;
            parameters?: ParameterList;
        }
        export interface LocalizedTextKey {
            facility?: LocalizedFacility;
            id?: LocalizedTextId;
        }
        export interface MessageTypeTelemetry {
            messageType?: MessageType;
            count?: Long;
            dataSize?: Long;
        }
        export interface NoSuchEntityException {
        }
        export interface OperationInProgressException {
        }
        export interface Parameter {
            name?: ParameterName;
            value?: ParameterValue;
        }
        export interface PreviewAgentsForResourceGroupRequest {
            resourceGroupArn?: Arn;
            nextToken?: PaginationToken;
            maxResults?: Integer;
        }
        export interface PreviewAgentsForResourceGroupResponse {
            agentPreviewList?: AgentPreviewList;
            nextToken?: PaginationToken;
        }
        export interface RegisterCrossAccountAccessRoleRequest {
            roleArn?: Arn;
        }
        export interface RegisterCrossAccountAccessRoleResponse {
            message?: Message;
        }
        export interface RemoveAttributesFromFindingsRequest {
            findingArns?: ArnList;
            attributeKeys?: AttributeKeyList;
        }
        export interface RemoveAttributesFromFindingsResponse {
            message?: Message;
        }
        export interface ResourceGroup {
            resourceGroupArn?: Arn;
            resourceGroupTags?: ResourceGroupTags;
        }
        export interface RulesPackage {
            rulesPackageArn?: Arn;
            rulesPackageName?: Name;
            version?: Version;
            provider?: Name;
            description?: LocalizedText;
        }
        export interface Run {
            runArn?: Arn;
            runName?: Name;
            assessmentArn?: Arn;
            runState?: RunState;
            rulesPackages?: ArnList;
            creationTime?: Timestamp;
            completionTime?: Timestamp;
        }
        export interface RunAssessmentRequest {
            assessmentArn?: Arn;
            runName?: Name;
        }
        export interface RunAssessmentResponse {
            runArn?: Arn;
        }
        export interface RunsFilter {
            runNamePatterns?: NamePatternList;
            runStates?: RunStateList;
            rulesPackages?: ArnList;
            creationTime?: TimestampRange;
            completionTime?: TimestampRange;
        }
        export interface SetTagsForResourceRequest {
            resourceArn?: Arn;
            tags?: TagList;
        }
        export interface SetTagsForResourceResponse {
            message?: Message;
        }
        export interface StartDataCollectionRequest {
            assessmentArn?: Arn;
        }
        export interface StartDataCollectionResponse {
            message?: Message;
        }
        export interface StopDataCollectionRequest {
            assessmentArn?: Arn;
        }
        export interface StopDataCollectionResponse {
            message?: Message;
        }
        export interface Tag {
            Key?: TagKey;
            Value?: TagValue;
        }
        export interface Telemetry {
            status?: TelemetryStatus;
            messageTypeTelemetries?: MessageTypeTelemetryList;
        }
        export interface TimestampRange {
            minimum?: Timestamp;
            maximum?: Timestamp;
        }
        export interface UpdateApplicationRequest {
            applicationArn?: Arn;
            applicationName?: Name;
            resourceGroupArn?: Arn;
        }
        export interface UpdateApplicationResponse {
            message?: Message;
        }
        export interface UpdateAssessmentRequest {
            assessmentArn?: Arn;
            assessmentName?: Name;
            durationInSeconds?: Duration;
        }
        export interface UpdateAssessmentResponse {
            message?: Message;
        }

    }
}
