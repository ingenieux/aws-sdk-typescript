// Type definitions for aws-sdk - AWS Config
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

///<reference path="./aws-sdk-common.d.ts" />

declare module "aws-sdk" {

    /*
     * apiVersion: 2014-11-12
     * endpointPrefix: config
     * serviceAbbreviation: Config Service
     * signatureVersion: v4
     * protocol: json
     */
    export class ConfigService extends Service {
      constructor(options?: any);
      endpoint: Endpoint;
      deleteConfigRule(params: ConfigService.DeleteConfigRuleRequest, callback?: (err: ConfigService.NoSuchConfigRuleException|ConfigService.ResourceInUseException|any, data: any) => void): Request;
      deleteDeliveryChannel(params: ConfigService.DeleteDeliveryChannelRequest, callback?: (err: ConfigService.NoSuchDeliveryChannelException|ConfigService.LastDeliveryChannelDeleteFailedException|any, data: any) => void): Request;
      deliverConfigSnapshot(params: ConfigService.DeliverConfigSnapshotRequest, callback?: (err: ConfigService.NoSuchDeliveryChannelException|ConfigService.NoAvailableConfigurationRecorderException|ConfigService.NoRunningConfigurationRecorderException|any, data: ConfigService.DeliverConfigSnapshotResponse|any) => void): Request;
      describeComplianceByConfigRule(params: ConfigService.DescribeComplianceByConfigRuleRequest, callback?: (err: ConfigService.InvalidParameterValueException|ConfigService.NoSuchConfigRuleException|any, data: ConfigService.DescribeComplianceByConfigRuleResponse|any) => void): Request;
      describeComplianceByResource(params: ConfigService.DescribeComplianceByResourceRequest, callback?: (err: ConfigService.InvalidParameterValueException|ConfigService.InvalidNextTokenException|any, data: ConfigService.DescribeComplianceByResourceResponse|any) => void): Request;
      describeConfigRuleEvaluationStatus(params: ConfigService.DescribeConfigRuleEvaluationStatusRequest, callback?: (err: ConfigService.NoSuchConfigRuleException|any, data: ConfigService.DescribeConfigRuleEvaluationStatusResponse|any) => void): Request;
      describeConfigRules(params: ConfigService.DescribeConfigRulesRequest, callback?: (err: ConfigService.NoSuchConfigRuleException|any, data: ConfigService.DescribeConfigRulesResponse|any) => void): Request;
      describeConfigurationRecorderStatus(params: ConfigService.DescribeConfigurationRecorderStatusRequest, callback?: (err: ConfigService.NoSuchConfigurationRecorderException|any, data: ConfigService.DescribeConfigurationRecorderStatusResponse|any) => void): Request;
      describeConfigurationRecorders(params: ConfigService.DescribeConfigurationRecordersRequest, callback?: (err: ConfigService.NoSuchConfigurationRecorderException|any, data: ConfigService.DescribeConfigurationRecordersResponse|any) => void): Request;
      describeDeliveryChannelStatus(params: ConfigService.DescribeDeliveryChannelStatusRequest, callback?: (err: ConfigService.NoSuchDeliveryChannelException|any, data: ConfigService.DescribeDeliveryChannelStatusResponse|any) => void): Request;
      describeDeliveryChannels(params: ConfigService.DescribeDeliveryChannelsRequest, callback?: (err: ConfigService.NoSuchDeliveryChannelException|any, data: ConfigService.DescribeDeliveryChannelsResponse|any) => void): Request;
      getComplianceDetailsByConfigRule(params: ConfigService.GetComplianceDetailsByConfigRuleRequest, callback?: (err: ConfigService.InvalidParameterValueException|ConfigService.InvalidNextTokenException|ConfigService.NoSuchConfigRuleException|any, data: ConfigService.GetComplianceDetailsByConfigRuleResponse|any) => void): Request;
      getComplianceDetailsByResource(params: ConfigService.GetComplianceDetailsByResourceRequest, callback?: (err: ConfigService.InvalidParameterValueException|any, data: ConfigService.GetComplianceDetailsByResourceResponse|any) => void): Request;
      getComplianceSummaryByConfigRule(callback?: (err: any, data: ConfigService.GetComplianceSummaryByConfigRuleResponse|any) => void): Request;
      getComplianceSummaryByResourceType(params: ConfigService.GetComplianceSummaryByResourceTypeRequest, callback?: (err: ConfigService.InvalidParameterValueException|any, data: ConfigService.GetComplianceSummaryByResourceTypeResponse|any) => void): Request;
      getResourceConfigHistory(params: ConfigService.GetResourceConfigHistoryRequest, callback?: (err: ConfigService.ValidationException|ConfigService.InvalidTimeRangeException|ConfigService.InvalidLimitException|ConfigService.InvalidNextTokenException|ConfigService.NoAvailableConfigurationRecorderException|ConfigService.ResourceNotDiscoveredException|any, data: ConfigService.GetResourceConfigHistoryResponse|any) => void): Request;
      listDiscoveredResources(params: ConfigService.ListDiscoveredResourcesRequest, callback?: (err: ConfigService.ValidationException|ConfigService.InvalidLimitException|ConfigService.InvalidNextTokenException|ConfigService.NoAvailableConfigurationRecorderException|any, data: ConfigService.ListDiscoveredResourcesResponse|any) => void): Request;
      putConfigRule(params: ConfigService.PutConfigRuleRequest, callback?: (err: ConfigService.InvalidParameterValueException|ConfigService.MaxNumberOfConfigRulesExceededException|ConfigService.ResourceInUseException|ConfigService.InsufficientPermissionsException|any, data: any) => void): Request;
      putConfigurationRecorder(params: ConfigService.PutConfigurationRecorderRequest, callback?: (err: ConfigService.MaxNumberOfConfigurationRecordersExceededException|ConfigService.InvalidConfigurationRecorderNameException|ConfigService.InvalidRoleException|ConfigService.InvalidRecordingGroupException|any, data: any) => void): Request;
      putDeliveryChannel(params: ConfigService.PutDeliveryChannelRequest, callback?: (err: ConfigService.MaxNumberOfDeliveryChannelsExceededException|ConfigService.NoAvailableConfigurationRecorderException|ConfigService.InvalidDeliveryChannelNameException|ConfigService.NoSuchBucketException|ConfigService.InvalidS3KeyPrefixException|ConfigService.InvalidSNSTopicARNException|ConfigService.InsufficientDeliveryPolicyException|any, data: any) => void): Request;
      putEvaluations(params: ConfigService.PutEvaluationsRequest, callback?: (err: ConfigService.InvalidParameterValueException|ConfigService.InvalidResultTokenException|ConfigService.NoSuchConfigRuleException|any, data: ConfigService.PutEvaluationsResponse|any) => void): Request;
      startConfigurationRecorder(params: ConfigService.StartConfigurationRecorderRequest, callback?: (err: ConfigService.NoSuchConfigurationRecorderException|ConfigService.NoAvailableDeliveryChannelException|any, data: any) => void): Request;
      stopConfigurationRecorder(params: ConfigService.StopConfigurationRecorderRequest, callback?: (err: ConfigService.NoSuchConfigurationRecorderException|any, data: any) => void): Request;

    }

    export module ConfigService {
        export type ARN = string;
        export type AccountId = string;
        export type AllSupported = boolean;
        export type AvailabilityZone = string;
        export type AwsRegion = string;
        export type Boolean = boolean;
        export type ChannelName = string;    // max: 256, min: 1
        export type ChronologicalOrder = string;
        export type ComplianceByConfigRules = ComplianceByConfigRule[];
        export type ComplianceByResources = ComplianceByResource[];
        export type ComplianceResourceTypes = StringWithCharLimit256[];    // max: 100
        export type ComplianceSummariesByResourceType = ComplianceSummaryByResourceType[];
        export type ComplianceType = string;
        export type ComplianceTypes = ComplianceType[];    // max: 3
        export type ConfigRuleEvaluationStatusList = ConfigRuleEvaluationStatus[];
        export type ConfigRuleNames = StringWithCharLimit64[];    // max: 25
        export type ConfigRuleState = string;
        export type ConfigRules = ConfigRule[];
        export type Configuration = string;
        export type ConfigurationItemCaptureTime = number;
        export type ConfigurationItemList = ConfigurationItem[];
        export type ConfigurationItemMD5Hash = string;
        export type ConfigurationItemStatus = string;
        export type ConfigurationRecorderList = ConfigurationRecorder[];
        export type ConfigurationRecorderNameList = RecorderName[];
        export type ConfigurationRecorderStatusList = ConfigurationRecorderStatus[];
        export type ConfigurationStateId = string;
        export type Date = number;
        export type DeliveryChannelList = DeliveryChannel[];
        export type DeliveryChannelNameList = ChannelName[];
        export type DeliveryChannelStatusList = DeliveryChannelStatus[];
        export type DeliveryStatus = string;
        export type EarlierTime = number;
        export type EmptiableStringWithCharLimit256 = string;    // max: 256
        export type EvaluationResults = EvaluationResult[];
        export type Evaluations = Evaluation[];    // max: 100
        export type EventSource = string;
        export type IncludeGlobalResourceTypes = boolean;
        export type Integer = number;
        export type LaterTime = number;
        export type Limit = number;    // max: 100
        export type MaximumExecutionFrequency = string;
        export type MessageType = string;
        export type Name = string;
        export type NextToken = string;
        export type OrderingTimestamp = number;
        export type Owner = string;
        export type RecorderName = string;    // max: 256, min: 1
        export type RecorderStatus = string;
        export type RelatedEvent = string;
        export type RelatedEventList = RelatedEvent[];
        export type RelationshipList = Relationship[];
        export type RelationshipName = string;
        export type ResourceCreationTime = number;
        export type ResourceDeletionTime = number;
        export type ResourceId = string;
        export type ResourceIdList = ResourceId[];
        export type ResourceIdentifierList = ResourceIdentifier[];
        export type ResourceName = string;
        export type ResourceType = string;
        export type ResourceTypeList = ResourceType[];
        export type ResourceTypes = StringWithCharLimit256[];    // max: 20
        export type SourceDetails = SourceDetail[];    // max: 25
        export type String = string;
        export type StringWithCharLimit128 = string;    // max: 128, min: 1
        export type StringWithCharLimit256 = string;    // max: 256, min: 1
        export type StringWithCharLimit64 = string;    // max: 64, min: 1
        export type Tags = {[key:string]: Value};
        export type Value = string;
        export type Version = string;

        export interface Compliance {
            ComplianceType?: ComplianceType;
            ComplianceContributorCount?: ComplianceContributorCount;
        }
        export interface ComplianceByConfigRule {
            ConfigRuleName?: StringWithCharLimit64;
            Compliance?: Compliance;
        }
        export interface ComplianceByResource {
            ResourceType?: StringWithCharLimit256;
            ResourceId?: StringWithCharLimit256;
            Compliance?: Compliance;
        }
        export interface ComplianceContributorCount {
            CappedCount?: Integer;
            CapExceeded?: Boolean;
        }
        export interface ComplianceSummary {
            CompliantResourceCount?: ComplianceContributorCount;
            NonCompliantResourceCount?: ComplianceContributorCount;
            ComplianceSummaryTimestamp?: Date;
        }
        export interface ComplianceSummaryByResourceType {
            ResourceType?: StringWithCharLimit256;
            ComplianceSummary?: ComplianceSummary;
        }
        export interface ConfigExportDeliveryInfo {
            lastStatus?: DeliveryStatus;
            lastErrorCode?: String;
            lastErrorMessage?: String;
            lastAttemptTime?: Date;
            lastSuccessfulTime?: Date;
            nextDeliveryTime?: Date;
        }
        export interface ConfigRule {
            ConfigRuleName?: StringWithCharLimit64;
            ConfigRuleArn?: String;
            ConfigRuleId?: String;
            Description?: EmptiableStringWithCharLimit256;
            Scope?: Scope;
            Source: Source;
            InputParameters?: StringWithCharLimit256;
            MaximumExecutionFrequency?: MaximumExecutionFrequency;
            ConfigRuleState?: ConfigRuleState;
        }
        export interface ConfigRuleEvaluationStatus {
            ConfigRuleName?: StringWithCharLimit64;
            ConfigRuleArn?: String;
            ConfigRuleId?: String;
            LastSuccessfulInvocationTime?: Date;
            LastFailedInvocationTime?: Date;
            LastSuccessfulEvaluationTime?: Date;
            LastFailedEvaluationTime?: Date;
            FirstActivatedTime?: Date;
            LastErrorCode?: String;
            LastErrorMessage?: String;
            FirstEvaluationStarted?: Boolean;
        }
        export interface ConfigSnapshotDeliveryProperties {
            deliveryFrequency?: MaximumExecutionFrequency;
        }
        export interface ConfigStreamDeliveryInfo {
            lastStatus?: DeliveryStatus;
            lastErrorCode?: String;
            lastErrorMessage?: String;
            lastStatusChangeTime?: Date;
        }
        export interface ConfigurationItem {
            version?: Version;
            accountId?: AccountId;
            configurationItemCaptureTime?: ConfigurationItemCaptureTime;
            configurationItemStatus?: ConfigurationItemStatus;
            configurationStateId?: ConfigurationStateId;
            configurationItemMD5Hash?: ConfigurationItemMD5Hash;
            arn?: ARN;
            resourceType?: ResourceType;
            resourceId?: ResourceId;
            resourceName?: ResourceName;
            awsRegion?: AwsRegion;
            availabilityZone?: AvailabilityZone;
            resourceCreationTime?: ResourceCreationTime;
            tags?: Tags;
            relatedEvents?: RelatedEventList;
            relationships?: RelationshipList;
            configuration?: Configuration;
        }
        export interface ConfigurationRecorder {
            name?: RecorderName;
            roleARN?: String;
            recordingGroup?: RecordingGroup;
        }
        export interface ConfigurationRecorderStatus {
            name?: String;
            lastStartTime?: Date;
            lastStopTime?: Date;
            recording?: Boolean;
            lastStatus?: RecorderStatus;
            lastErrorCode?: String;
            lastErrorMessage?: String;
            lastStatusChangeTime?: Date;
        }
        export interface DeleteConfigRuleRequest {
            ConfigRuleName: StringWithCharLimit64;
        }
        export interface DeleteDeliveryChannelRequest {
            DeliveryChannelName: ChannelName;
        }
        export interface DeliverConfigSnapshotRequest {
            deliveryChannelName: ChannelName;
        }
        export interface DeliverConfigSnapshotResponse {
            configSnapshotId?: String;
        }
        export interface DeliveryChannel {
            name?: ChannelName;
            s3BucketName?: String;
            s3KeyPrefix?: String;
            snsTopicARN?: String;
            configSnapshotDeliveryProperties?: ConfigSnapshotDeliveryProperties;
        }
        export interface DeliveryChannelStatus {
            name?: String;
            configSnapshotDeliveryInfo?: ConfigExportDeliveryInfo;
            configHistoryDeliveryInfo?: ConfigExportDeliveryInfo;
            configStreamDeliveryInfo?: ConfigStreamDeliveryInfo;
        }
        export interface DescribeComplianceByConfigRuleRequest {
            ConfigRuleNames?: ConfigRuleNames;
            ComplianceTypes?: ComplianceTypes;
            NextToken?: String;
        }
        export interface DescribeComplianceByConfigRuleResponse {
            ComplianceByConfigRules?: ComplianceByConfigRules;
            NextToken?: String;
        }
        export interface DescribeComplianceByResourceRequest {
            ResourceType?: StringWithCharLimit256;
            ResourceId?: StringWithCharLimit256;
            ComplianceTypes?: ComplianceTypes;
            Limit?: Limit;
            NextToken?: NextToken;
        }
        export interface DescribeComplianceByResourceResponse {
            ComplianceByResources?: ComplianceByResources;
            NextToken?: NextToken;
        }
        export interface DescribeConfigRuleEvaluationStatusRequest {
            ConfigRuleNames?: ConfigRuleNames;
        }
        export interface DescribeConfigRuleEvaluationStatusResponse {
            ConfigRulesEvaluationStatus?: ConfigRuleEvaluationStatusList;
        }
        export interface DescribeConfigRulesRequest {
            ConfigRuleNames?: ConfigRuleNames;
            NextToken?: String;
        }
        export interface DescribeConfigRulesResponse {
            ConfigRules?: ConfigRules;
            NextToken?: String;
        }
        export interface DescribeConfigurationRecorderStatusRequest {
            ConfigurationRecorderNames?: ConfigurationRecorderNameList;
        }
        export interface DescribeConfigurationRecorderStatusResponse {
            ConfigurationRecordersStatus?: ConfigurationRecorderStatusList;
        }
        export interface DescribeConfigurationRecordersRequest {
            ConfigurationRecorderNames?: ConfigurationRecorderNameList;
        }
        export interface DescribeConfigurationRecordersResponse {
            ConfigurationRecorders?: ConfigurationRecorderList;
        }
        export interface DescribeDeliveryChannelStatusRequest {
            DeliveryChannelNames?: DeliveryChannelNameList;
        }
        export interface DescribeDeliveryChannelStatusResponse {
            DeliveryChannelsStatus?: DeliveryChannelStatusList;
        }
        export interface DescribeDeliveryChannelsRequest {
            DeliveryChannelNames?: DeliveryChannelNameList;
        }
        export interface DescribeDeliveryChannelsResponse {
            DeliveryChannels?: DeliveryChannelList;
        }
        export interface Evaluation {
            ComplianceResourceType: StringWithCharLimit256;
            ComplianceResourceId: StringWithCharLimit256;
            ComplianceType: ComplianceType;
            Annotation?: StringWithCharLimit256;
            OrderingTimestamp: OrderingTimestamp;
        }
        export interface EvaluationResult {
            EvaluationResultIdentifier?: EvaluationResultIdentifier;
            ComplianceType?: ComplianceType;
            ResultRecordedTime?: Date;
            ConfigRuleInvokedTime?: Date;
            Annotation?: StringWithCharLimit256;
            ResultToken?: String;
        }
        export interface EvaluationResultIdentifier {
            EvaluationResultQualifier?: EvaluationResultQualifier;
            OrderingTimestamp?: Date;
        }
        export interface EvaluationResultQualifier {
            ConfigRuleName?: StringWithCharLimit64;
            ResourceType?: StringWithCharLimit256;
            ResourceId?: StringWithCharLimit256;
        }
        export interface GetComplianceDetailsByConfigRuleRequest {
            ConfigRuleName: StringWithCharLimit64;
            ComplianceTypes?: ComplianceTypes;
            Limit?: Limit;
            NextToken?: NextToken;
        }
        export interface GetComplianceDetailsByConfigRuleResponse {
            EvaluationResults?: EvaluationResults;
            NextToken?: NextToken;
        }
        export interface GetComplianceDetailsByResourceRequest {
            ResourceType: StringWithCharLimit256;
            ResourceId: StringWithCharLimit256;
            ComplianceTypes?: ComplianceTypes;
            NextToken?: String;
        }
        export interface GetComplianceDetailsByResourceResponse {
            EvaluationResults?: EvaluationResults;
            NextToken?: String;
        }
        export interface GetComplianceSummaryByConfigRuleResponse {
            ComplianceSummary?: ComplianceSummary;
        }
        export interface GetComplianceSummaryByResourceTypeRequest {
            ResourceTypes?: ResourceTypes;
        }
        export interface GetComplianceSummaryByResourceTypeResponse {
            ComplianceSummariesByResourceType?: ComplianceSummariesByResourceType;
        }
        export interface GetResourceConfigHistoryRequest {
            resourceType: ResourceType;
            resourceId: ResourceId;
            laterTime?: LaterTime;
            earlierTime?: EarlierTime;
            chronologicalOrder?: ChronologicalOrder;
            limit?: Limit;
            nextToken?: NextToken;
        }
        export interface GetResourceConfigHistoryResponse {
            configurationItems?: ConfigurationItemList;
            nextToken?: NextToken;
        }
        export interface InsufficientDeliveryPolicyException {
        }
        export interface InsufficientPermissionsException {
        }
        export interface InvalidConfigurationRecorderNameException {
        }
        export interface InvalidDeliveryChannelNameException {
        }
        export interface InvalidLimitException {
        }
        export interface InvalidNextTokenException {
        }
        export interface InvalidParameterValueException {
        }
        export interface InvalidRecordingGroupException {
        }
        export interface InvalidResultTokenException {
        }
        export interface InvalidRoleException {
        }
        export interface InvalidS3KeyPrefixException {
        }
        export interface InvalidSNSTopicARNException {
        }
        export interface InvalidTimeRangeException {
        }
        export interface LastDeliveryChannelDeleteFailedException {
        }
        export interface ListDiscoveredResourcesRequest {
            resourceType: ResourceType;
            resourceIds?: ResourceIdList;
            resourceName?: ResourceName;
            limit?: Limit;
            includeDeletedResources?: Boolean;
            nextToken?: NextToken;
        }
        export interface ListDiscoveredResourcesResponse {
            resourceIdentifiers?: ResourceIdentifierList;
            nextToken?: NextToken;
        }
        export interface MaxNumberOfConfigRulesExceededException {
        }
        export interface MaxNumberOfConfigurationRecordersExceededException {
        }
        export interface MaxNumberOfDeliveryChannelsExceededException {
        }
        export interface NoAvailableConfigurationRecorderException {
        }
        export interface NoAvailableDeliveryChannelException {
        }
        export interface NoRunningConfigurationRecorderException {
        }
        export interface NoSuchBucketException {
        }
        export interface NoSuchConfigRuleException {
        }
        export interface NoSuchConfigurationRecorderException {
        }
        export interface NoSuchDeliveryChannelException {
        }
        export interface PutConfigRuleRequest {
            ConfigRule: ConfigRule;
        }
        export interface PutConfigurationRecorderRequest {
            ConfigurationRecorder: ConfigurationRecorder;
        }
        export interface PutDeliveryChannelRequest {
            DeliveryChannel: DeliveryChannel;
        }
        export interface PutEvaluationsRequest {
            Evaluations?: Evaluations;
            ResultToken: String;
        }
        export interface PutEvaluationsResponse {
            FailedEvaluations?: Evaluations;
        }
        export interface RecordingGroup {
            allSupported?: AllSupported;
            includeGlobalResourceTypes?: IncludeGlobalResourceTypes;
            resourceTypes?: ResourceTypeList;
        }
        export interface Relationship {
            resourceType?: ResourceType;
            resourceId?: ResourceId;
            resourceName?: ResourceName;
            relationshipName?: RelationshipName;
        }
        export interface ResourceIdentifier {
            resourceType?: ResourceType;
            resourceId?: ResourceId;
            resourceName?: ResourceName;
            resourceDeletionTime?: ResourceDeletionTime;
        }
        export interface ResourceInUseException {
        }
        export interface ResourceNotDiscoveredException {
        }
        export interface Scope {
            ComplianceResourceTypes?: ComplianceResourceTypes;
            TagKey?: StringWithCharLimit128;
            TagValue?: StringWithCharLimit256;
            ComplianceResourceId?: StringWithCharLimit256;
        }
        export interface Source {
            Owner?: Owner;
            SourceIdentifier?: StringWithCharLimit256;
            SourceDetails?: SourceDetails;
        }
        export interface SourceDetail {
            EventSource?: EventSource;
            MessageType?: MessageType;
        }
        export interface StartConfigurationRecorderRequest {
            ConfigurationRecorderName: RecorderName;
        }
        export interface StopConfigurationRecorderRequest {
            ConfigurationRecorderName: RecorderName;
        }
        export interface ValidationException {
        }

    }
}
