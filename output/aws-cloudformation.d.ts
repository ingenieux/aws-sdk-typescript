// DO NOT EDIT!
//
declare module "aws-sdk" {
    export class CloudFormation {
      constructor(options?: any);
      cancelUpdateStack(params: CloudFormationCancelUpdateStackInput, callback: (err: any, data: any) => void): void;
      createStack(params: CloudFormationCreateStackInput, callback: (err: CloudFormationLimitExceededException|CloudFormationAlreadyExistsException|CloudFormationInsufficientCapabilitiesException|any, data: CloudFormationCreateStackOutput|any) => void): void;
      deleteStack(params: CloudFormationDeleteStackInput, callback: (err: any, data: any) => void): void;
      describeStackEvents(params: CloudFormationDescribeStackEventsInput, callback: (err: any, data: CloudFormationDescribeStackEventsOutput|any) => void): void;
      describeStackResource(params: CloudFormationDescribeStackResourceInput, callback: (err: any, data: CloudFormationDescribeStackResourceOutput|any) => void): void;
      describeStackResources(params: CloudFormationDescribeStackResourcesInput, callback: (err: any, data: CloudFormationDescribeStackResourcesOutput|any) => void): void;
      describeStacks(params: CloudFormationDescribeStacksInput, callback: (err: any, data: CloudFormationDescribeStacksOutput|any) => void): void;
      estimateTemplateCost(params: CloudFormationEstimateTemplateCostInput, callback: (err: any, data: CloudFormationEstimateTemplateCostOutput|any) => void): void;
      getStackPolicy(params: CloudFormationGetStackPolicyInput, callback: (err: any, data: CloudFormationGetStackPolicyOutput|any) => void): void;
      getTemplate(params: CloudFormationGetTemplateInput, callback: (err: any, data: CloudFormationGetTemplateOutput|any) => void): void;
      getTemplateSummary(params: CloudFormationGetTemplateSummaryInput, callback: (err: any, data: CloudFormationGetTemplateSummaryOutput|any) => void): void;
      listStackResources(params: CloudFormationListStackResourcesInput, callback: (err: any, data: CloudFormationListStackResourcesOutput|any) => void): void;
      listStacks(params: CloudFormationListStacksInput, callback: (err: any, data: CloudFormationListStacksOutput|any) => void): void;
      setStackPolicy(params: CloudFormationSetStackPolicyInput, callback: (err: any, data: any) => void): void;
      signalResource(params: CloudFormationSignalResourceInput, callback: (err: any, data: any) => void): void;
      updateStack(params: CloudFormationUpdateStackInput, callback: (err: CloudFormationInsufficientCapabilitiesException|any, data: CloudFormationUpdateStackOutput|any) => void): void;
      validateTemplate(params: CloudFormationValidateTemplateInput, callback: (err: any, data: CloudFormationValidateTemplateOutput|any) => void): void;
    }

    export type CloudFormationAllowedValue = string;
    export type CloudFormationAllowedValues = Array<CloudFormationAllowedValue>;
    export interface CloudFormationAlreadyExistsException {
    }

    export interface CloudFormationCancelUpdateStackInput {
        StackName: CloudFormationStackName;
    }

    export type CloudFormationCapabilities = Array<CloudFormationCapability>;
    export type CloudFormationCapabilitiesReason = string;
    export type CloudFormationCapability = string;
    export interface CloudFormationCreateStackInput {
        StackName: CloudFormationStackName;
        TemplateBody?: CloudFormationTemplateBody;
        TemplateURL?: CloudFormationTemplateURL;
        Parameters?: CloudFormationParameters;
        DisableRollback?: CloudFormationDisableRollback;
        TimeoutInMinutes?: CloudFormationTimeoutMinutes;
        NotificationARNs?: CloudFormationNotificationARNs;
        Capabilities?: CloudFormationCapabilities;
        OnFailure?: CloudFormationOnFailure;
        StackPolicyBody?: CloudFormationStackPolicyBody;
        StackPolicyURL?: CloudFormationStackPolicyURL;
        Tags?: CloudFormationTags;
    }

    export interface CloudFormationCreateStackOutput {
        StackId?: CloudFormationStackId;
    }

    export type CloudFormationCreationTime = number;
    export interface CloudFormationDeleteStackInput {
        StackName: CloudFormationStackName;
    }

    export type CloudFormationDeletionTime = number;
    export interface CloudFormationDescribeStackEventsInput {
        StackName?: CloudFormationStackName;
        NextToken?: CloudFormationNextToken;
    }

    export interface CloudFormationDescribeStackEventsOutput {
        StackEvents?: CloudFormationStackEvents;
        NextToken?: CloudFormationNextToken;
    }

    export interface CloudFormationDescribeStackResourceInput {
        StackName: CloudFormationStackName;
        LogicalResourceId: CloudFormationLogicalResourceId;
    }

    export interface CloudFormationDescribeStackResourceOutput {
        StackResourceDetail?: CloudFormationStackResourceDetail;
    }

    export interface CloudFormationDescribeStackResourcesInput {
        StackName?: CloudFormationStackName;
        LogicalResourceId?: CloudFormationLogicalResourceId;
        PhysicalResourceId?: CloudFormationPhysicalResourceId;
    }

    export interface CloudFormationDescribeStackResourcesOutput {
        StackResources?: CloudFormationStackResources;
    }

    export interface CloudFormationDescribeStacksInput {
        StackName?: CloudFormationStackName;
        NextToken?: CloudFormationNextToken;
    }

    export interface CloudFormationDescribeStacksOutput {
        Stacks?: CloudFormationStacks;
        NextToken?: CloudFormationNextToken;
    }

    export type CloudFormationDescription = string;
    export type CloudFormationDisableRollback = boolean;
    export interface CloudFormationEstimateTemplateCostInput {
        TemplateBody?: CloudFormationTemplateBody;
        TemplateURL?: CloudFormationTemplateURL;
        Parameters?: CloudFormationParameters;
    }

    export interface CloudFormationEstimateTemplateCostOutput {
        Url?: CloudFormationUrl;
    }

    export type CloudFormationEventId = string;
    export interface CloudFormationGetStackPolicyInput {
        StackName: CloudFormationStackName;
    }

    export interface CloudFormationGetStackPolicyOutput {
        StackPolicyBody?: CloudFormationStackPolicyBody;
    }

    export interface CloudFormationGetTemplateInput {
        StackName: CloudFormationStackName;
    }

    export interface CloudFormationGetTemplateOutput {
        TemplateBody?: CloudFormationTemplateBody;
    }

    export interface CloudFormationGetTemplateSummaryInput {
        TemplateBody?: CloudFormationTemplateBody;
        TemplateURL?: CloudFormationTemplateURL;
        StackName?: CloudFormationStackNameOrId;
    }

    export interface CloudFormationGetTemplateSummaryOutput {
        Parameters?: CloudFormationParameterDeclarations;
        Description?: CloudFormationDescription;
        Capabilities?: CloudFormationCapabilities;
        CapabilitiesReason?: CloudFormationCapabilitiesReason;
        Version?: CloudFormationVersion;
        Metadata?: CloudFormationMetadata;
    }

    export interface CloudFormationInsufficientCapabilitiesException {
    }

    export type CloudFormationLastUpdatedTime = number;
    export interface CloudFormationLimitExceededException {
    }

    export interface CloudFormationListStackResourcesInput {
        StackName: CloudFormationStackName;
        NextToken?: CloudFormationNextToken;
    }

    export interface CloudFormationListStackResourcesOutput {
        StackResourceSummaries?: CloudFormationStackResourceSummaries;
        NextToken?: CloudFormationNextToken;
    }

    export interface CloudFormationListStacksInput {
        NextToken?: CloudFormationNextToken;
        StackStatusFilter?: CloudFormationStackStatusFilter;
    }

    export interface CloudFormationListStacksOutput {
        StackSummaries?: CloudFormationStackSummaries;
        NextToken?: CloudFormationNextToken;
    }

    export type CloudFormationLogicalResourceId = string;
    export type CloudFormationMetadata = string;
    export type CloudFormationNextToken = string;
    export type CloudFormationNoEcho = boolean;
    export type CloudFormationNotificationARN = string;
    export type CloudFormationNotificationARNs = Array<CloudFormationNotificationARN>; // max: 5
    export type CloudFormationOnFailure = string;
    export interface CloudFormationOutput {
        OutputKey?: CloudFormationOutputKey;
        OutputValue?: CloudFormationOutputValue;
        Description?: CloudFormationDescription;
    }

    export type CloudFormationOutputKey = string;
    export type CloudFormationOutputValue = string;
    export type CloudFormationOutputs = Array<CloudFormationOutput>;
    export interface CloudFormationParameter {
        ParameterKey?: CloudFormationParameterKey;
        ParameterValue?: CloudFormationParameterValue;
        UsePreviousValue?: CloudFormationUsePreviousValue;
    }

    export interface CloudFormationParameterConstraints {
        AllowedValues?: CloudFormationAllowedValues;
    }

    export interface CloudFormationParameterDeclaration {
        ParameterKey?: CloudFormationParameterKey;
        DefaultValue?: CloudFormationParameterValue;
        ParameterType?: CloudFormationParameterType;
        NoEcho?: CloudFormationNoEcho;
        Description?: CloudFormationDescription;
        ParameterConstraints?: CloudFormationParameterConstraints;
    }

    export type CloudFormationParameterDeclarations = Array<CloudFormationParameterDeclaration>;
    export type CloudFormationParameterKey = string;
    export type CloudFormationParameterType = string;
    export type CloudFormationParameterValue = string;
    export type CloudFormationParameters = Array<CloudFormationParameter>;
    export type CloudFormationPhysicalResourceId = string;
    export type CloudFormationResourceProperties = string;
    export type CloudFormationResourceSignalStatus = string;
    export type CloudFormationResourceSignalUniqueId = string;
    export type CloudFormationResourceStatus = string;
    export type CloudFormationResourceStatusReason = string;
    export type CloudFormationResourceType = string;
    export interface CloudFormationSetStackPolicyInput {
        StackName: CloudFormationStackName;
        StackPolicyBody?: CloudFormationStackPolicyBody;
        StackPolicyURL?: CloudFormationStackPolicyURL;
    }

    export interface CloudFormationSignalResourceInput {
        StackName: CloudFormationStackNameOrId;
        LogicalResourceId: CloudFormationLogicalResourceId;
        UniqueId: CloudFormationResourceSignalUniqueId;
        Status: CloudFormationResourceSignalStatus;
    }

    export interface CloudFormationStack {
        StackId?: CloudFormationStackId;
        StackName: CloudFormationStackName;
        Description?: CloudFormationDescription;
        Parameters?: CloudFormationParameters;
        CreationTime: CloudFormationCreationTime;
        LastUpdatedTime?: CloudFormationLastUpdatedTime;
        StackStatus: CloudFormationStackStatus;
        StackStatusReason?: CloudFormationStackStatusReason;
        DisableRollback?: CloudFormationDisableRollback;
        NotificationARNs?: CloudFormationNotificationARNs;
        TimeoutInMinutes?: CloudFormationTimeoutMinutes;
        Capabilities?: CloudFormationCapabilities;
        Outputs?: CloudFormationOutputs;
        Tags?: CloudFormationTags;
    }

    export interface CloudFormationStackEvent {
        StackId: CloudFormationStackId;
        EventId: CloudFormationEventId;
        StackName: CloudFormationStackName;
        LogicalResourceId?: CloudFormationLogicalResourceId;
        PhysicalResourceId?: CloudFormationPhysicalResourceId;
        ResourceType?: CloudFormationResourceType;
        Timestamp: CloudFormationTimestamp;
        ResourceStatus?: CloudFormationResourceStatus;
        ResourceStatusReason?: CloudFormationResourceStatusReason;
        ResourceProperties?: CloudFormationResourceProperties;
    }

    export type CloudFormationStackEvents = Array<CloudFormationStackEvent>;
    export type CloudFormationStackId = string;
    export type CloudFormationStackName = string;
    export type CloudFormationStackNameOrId = string; // pattern: "([a-zA-Z][-a-zA-Z0-9]*)|(arn:\b(aws|aws-us-gov|aws-cn)\b:[-a-zA-Z0-9:/._+]*)"
    export type CloudFormationStackPolicyBody = string;
    export type CloudFormationStackPolicyDuringUpdateBody = string;
    export type CloudFormationStackPolicyDuringUpdateURL = string;
    export type CloudFormationStackPolicyURL = string;
    export interface CloudFormationStackResource {
        StackName?: CloudFormationStackName;
        StackId?: CloudFormationStackId;
        LogicalResourceId: CloudFormationLogicalResourceId;
        PhysicalResourceId?: CloudFormationPhysicalResourceId;
        ResourceType: CloudFormationResourceType;
        Timestamp: CloudFormationTimestamp;
        ResourceStatus: CloudFormationResourceStatus;
        ResourceStatusReason?: CloudFormationResourceStatusReason;
        Description?: CloudFormationDescription;
    }

    export interface CloudFormationStackResourceDetail {
        StackName?: CloudFormationStackName;
        StackId?: CloudFormationStackId;
        LogicalResourceId: CloudFormationLogicalResourceId;
        PhysicalResourceId?: CloudFormationPhysicalResourceId;
        ResourceType: CloudFormationResourceType;
        LastUpdatedTimestamp: CloudFormationTimestamp;
        ResourceStatus: CloudFormationResourceStatus;
        ResourceStatusReason?: CloudFormationResourceStatusReason;
        Description?: CloudFormationDescription;
        Metadata?: CloudFormationMetadata;
    }

    export type CloudFormationStackResourceSummaries = Array<CloudFormationStackResourceSummary>;
    export interface CloudFormationStackResourceSummary {
        LogicalResourceId: CloudFormationLogicalResourceId;
        PhysicalResourceId?: CloudFormationPhysicalResourceId;
        ResourceType: CloudFormationResourceType;
        LastUpdatedTimestamp: CloudFormationTimestamp;
        ResourceStatus: CloudFormationResourceStatus;
        ResourceStatusReason?: CloudFormationResourceStatusReason;
    }

    export type CloudFormationStackResources = Array<CloudFormationStackResource>;
    export type CloudFormationStackStatus = string;
    export type CloudFormationStackStatusFilter = Array<CloudFormationStackStatus>;
    export type CloudFormationStackStatusReason = string;
    export type CloudFormationStackSummaries = Array<CloudFormationStackSummary>;
    export interface CloudFormationStackSummary {
        StackId?: CloudFormationStackId;
        StackName: CloudFormationStackName;
        TemplateDescription?: CloudFormationTemplateDescription;
        CreationTime: CloudFormationCreationTime;
        LastUpdatedTime?: CloudFormationLastUpdatedTime;
        DeletionTime?: CloudFormationDeletionTime;
        StackStatus: CloudFormationStackStatus;
        StackStatusReason?: CloudFormationStackStatusReason;
    }

    export type CloudFormationStacks = Array<CloudFormationStack>;
    export interface CloudFormationTag {
        Key?: CloudFormationTagKey;
        Value?: CloudFormationTagValue;
    }

    export type CloudFormationTagKey = string;
    export type CloudFormationTagValue = string;
    export type CloudFormationTags = Array<CloudFormationTag>;
    export type CloudFormationTemplateBody = string;
    export type CloudFormationTemplateDescription = string;
    export interface CloudFormationTemplateParameter {
        ParameterKey?: CloudFormationParameterKey;
        DefaultValue?: CloudFormationParameterValue;
        NoEcho?: CloudFormationNoEcho;
        Description?: CloudFormationDescription;
    }

    export type CloudFormationTemplateParameters = Array<CloudFormationTemplateParameter>;
    export type CloudFormationTemplateURL = string;
    export type CloudFormationTimeoutMinutes = number;
    export type CloudFormationTimestamp = number;
    export interface CloudFormationUpdateStackInput {
        StackName: CloudFormationStackName;
        TemplateBody?: CloudFormationTemplateBody;
        TemplateURL?: CloudFormationTemplateURL;
        UsePreviousTemplate?: CloudFormationUsePreviousTemplate;
        StackPolicyDuringUpdateBody?: CloudFormationStackPolicyDuringUpdateBody;
        StackPolicyDuringUpdateURL?: CloudFormationStackPolicyDuringUpdateURL;
        Parameters?: CloudFormationParameters;
        Capabilities?: CloudFormationCapabilities;
        StackPolicyBody?: CloudFormationStackPolicyBody;
        StackPolicyURL?: CloudFormationStackPolicyURL;
        NotificationARNs?: CloudFormationNotificationARNs;
    }

    export interface CloudFormationUpdateStackOutput {
        StackId?: CloudFormationStackId;
    }

    export type CloudFormationUrl = string;
    export type CloudFormationUsePreviousTemplate = boolean;
    export type CloudFormationUsePreviousValue = boolean;
    export interface CloudFormationValidateTemplateInput {
        TemplateBody?: CloudFormationTemplateBody;
        TemplateURL?: CloudFormationTemplateURL;
    }

    export interface CloudFormationValidateTemplateOutput {
        Parameters?: CloudFormationTemplateParameters;
        Description?: CloudFormationDescription;
        Capabilities?: CloudFormationCapabilities;
        CapabilitiesReason?: CloudFormationCapabilitiesReason;
    }

    export type CloudFormationVersion = string;
}
