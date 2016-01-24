// Type definitions for aws-sdk - AWS CloudFormation
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

///<reference path="./aws-sdk-common.d.ts" />

declare module "aws-sdk" {

    /*
     * apiVersion: 2010-05-15
     * endpointPrefix: cloudformation
     * serviceAbbreviation: 
     * signatureVersion: v4
     * protocol: query
     */
    export class CloudFormation extends Service {
      constructor(options?: any);
      endpoint: Endpoint;
      cancelUpdateStack(params: CloudFormation.CancelUpdateStackInput, callback?: (err: any, data: any) => void): Request;
      continueUpdateRollback(params: CloudFormation.ContinueUpdateRollbackInput, callback?: (err: any, data: CloudFormation.ContinueUpdateRollbackOutput|any) => void): Request;
      createStack(params: CloudFormation.CreateStackInput, callback?: (err: CloudFormation.LimitExceededException|CloudFormation.AlreadyExistsException|CloudFormation.InsufficientCapabilitiesException|any, data: CloudFormation.CreateStackOutput|any) => void): Request;
      deleteStack(params: CloudFormation.DeleteStackInput, callback?: (err: any, data: any) => void): Request;
      describeAccountLimits(params: CloudFormation.DescribeAccountLimitsInput, callback?: (err: any, data: CloudFormation.DescribeAccountLimitsOutput|any) => void): Request;
      describeStackEvents(params: CloudFormation.DescribeStackEventsInput, callback?: (err: any, data: CloudFormation.DescribeStackEventsOutput|any) => void): Request;
      describeStackResource(params: CloudFormation.DescribeStackResourceInput, callback?: (err: any, data: CloudFormation.DescribeStackResourceOutput|any) => void): Request;
      describeStackResources(params: CloudFormation.DescribeStackResourcesInput, callback?: (err: any, data: CloudFormation.DescribeStackResourcesOutput|any) => void): Request;
      describeStacks(params: CloudFormation.DescribeStacksInput, callback?: (err: any, data: CloudFormation.DescribeStacksOutput|any) => void): Request;
      estimateTemplateCost(params: CloudFormation.EstimateTemplateCostInput, callback?: (err: any, data: CloudFormation.EstimateTemplateCostOutput|any) => void): Request;
      getStackPolicy(params: CloudFormation.GetStackPolicyInput, callback?: (err: any, data: CloudFormation.GetStackPolicyOutput|any) => void): Request;
      getTemplate(params: CloudFormation.GetTemplateInput, callback?: (err: any, data: CloudFormation.GetTemplateOutput|any) => void): Request;
      getTemplateSummary(params: CloudFormation.GetTemplateSummaryInput, callback?: (err: any, data: CloudFormation.GetTemplateSummaryOutput|any) => void): Request;
      listStackResources(params: CloudFormation.ListStackResourcesInput, callback?: (err: any, data: CloudFormation.ListStackResourcesOutput|any) => void): Request;
      listStacks(params: CloudFormation.ListStacksInput, callback?: (err: any, data: CloudFormation.ListStacksOutput|any) => void): Request;
      setStackPolicy(params: CloudFormation.SetStackPolicyInput, callback?: (err: any, data: any) => void): Request;
      signalResource(params: CloudFormation.SignalResourceInput, callback?: (err: any, data: any) => void): Request;
      updateStack(params: CloudFormation.UpdateStackInput, callback?: (err: CloudFormation.InsufficientCapabilitiesException|any, data: CloudFormation.UpdateStackOutput|any) => void): Request;
      validateTemplate(params: CloudFormation.ValidateTemplateInput, callback?: (err: any, data: CloudFormation.ValidateTemplateOutput|any) => void): Request;

    }

    export module CloudFormation {
        export type AccountLimitList = AccountLimit[];
        export type AllowedValue = string;
        export type AllowedValues = AllowedValue[];
        export type Capabilities = Capability[];
        export type CapabilitiesReason = string;
        export type Capability = string;
        export type CreationTime = number;
        export type DeletionTime = number;
        export type Description = string;
        export type DisableRollback = boolean;
        export type EventId = string;
        export type LastUpdatedTime = number;
        export type LimitName = string;
        export type LimitValue = number;
        export type LogicalResourceId = string;
        export type Metadata = string;
        export type NextToken = string;    // max: 1024, min: 1
        export type NoEcho = boolean;
        export type NotificationARN = string;
        export type NotificationARNs = NotificationARN[];    // max: 5
        export type OnFailure = string;
        export type OutputKey = string;
        export type OutputValue = string;
        export type Outputs = Output[];
        export type ParameterDeclarations = ParameterDeclaration[];
        export type ParameterKey = string;
        export type ParameterType = string;
        export type ParameterValue = string;
        export type Parameters = Parameter[];
        export type PhysicalResourceId = string;
        export type ResourceProperties = string;
        export type ResourceSignalStatus = string;
        export type ResourceSignalUniqueId = string;    // max: 64, min: 1
        export type ResourceStatus = string;
        export type ResourceStatusReason = string;
        export type ResourceType = string;
        export type ResourceTypes = ResourceType[];
        export type StackEvents = StackEvent[];
        export type StackId = string;
        export type StackName = string;
        export type StackNameOrId = string;    // pattern: &quot;([a-zA-Z][-a-zA-Z0-9]*)|(arn:\b(aws|aws-us-gov|aws-cn)\b:[-a-zA-Z0-9:/._+]*)&quot;, min: 1
        export type StackPolicyBody = string;    // max: 16384, min: 1
        export type StackPolicyDuringUpdateBody = string;    // max: 16384, min: 1
        export type StackPolicyDuringUpdateURL = string;    // max: 1350, min: 1
        export type StackPolicyURL = string;    // max: 1350, min: 1
        export type StackResourceSummaries = StackResourceSummary[];
        export type StackResources = StackResource[];
        export type StackStatus = string;
        export type StackStatusFilter = StackStatus[];
        export type StackStatusReason = string;
        export type StackSummaries = StackSummary[];
        export type Stacks = Stack[];
        export type TagKey = string;
        export type TagValue = string;
        export type Tags = Tag[];
        export type TemplateBody = string;    // min: 1
        export type TemplateDescription = string;
        export type TemplateParameters = TemplateParameter[];
        export type TemplateURL = string;    // max: 1024, min: 1
        export type TimeoutMinutes = number;    // min: 1
        export type Timestamp = number;
        export type Url = string;
        export type UsePreviousTemplate = boolean;
        export type UsePreviousValue = boolean;
        export type Version = string;

        export interface AccountLimit {
            Name?: LimitName;
            Value?: LimitValue;
        }
        export interface AlreadyExistsException {
        }
        export interface CancelUpdateStackInput {
            StackName: StackName;
        }
        export interface ContinueUpdateRollbackInput {
            StackName: StackNameOrId;
        }
        export interface ContinueUpdateRollbackOutput {
        }
        export interface CreateStackInput {
            StackName: StackName;
            TemplateBody?: TemplateBody;
            TemplateURL?: TemplateURL;
            Parameters?: Parameters;
            DisableRollback?: DisableRollback;
            TimeoutInMinutes?: TimeoutMinutes;
            NotificationARNs?: NotificationARNs;
            Capabilities?: Capabilities;
            ResourceTypes?: ResourceTypes;
            OnFailure?: OnFailure;
            StackPolicyBody?: StackPolicyBody;
            StackPolicyURL?: StackPolicyURL;
            Tags?: Tags;
        }
        export interface CreateStackOutput {
            StackId?: StackId;
        }
        export interface DeleteStackInput {
            StackName: StackName;
        }
        export interface DescribeAccountLimitsInput {
            NextToken?: NextToken;
        }
        export interface DescribeAccountLimitsOutput {
            AccountLimits?: AccountLimitList;
            NextToken?: NextToken;
        }
        export interface DescribeStackEventsInput {
            StackName?: StackName;
            NextToken?: NextToken;
        }
        export interface DescribeStackEventsOutput {
            StackEvents?: StackEvents;
            NextToken?: NextToken;
        }
        export interface DescribeStackResourceInput {
            StackName: StackName;
            LogicalResourceId: LogicalResourceId;
        }
        export interface DescribeStackResourceOutput {
            StackResourceDetail?: StackResourceDetail;
        }
        export interface DescribeStackResourcesInput {
            StackName?: StackName;
            LogicalResourceId?: LogicalResourceId;
            PhysicalResourceId?: PhysicalResourceId;
        }
        export interface DescribeStackResourcesOutput {
            StackResources?: StackResources;
        }
        export interface DescribeStacksInput {
            StackName?: StackName;
            NextToken?: NextToken;
        }
        export interface DescribeStacksOutput {
            Stacks?: Stacks;
            NextToken?: NextToken;
        }
        export interface EstimateTemplateCostInput {
            TemplateBody?: TemplateBody;
            TemplateURL?: TemplateURL;
            Parameters?: Parameters;
        }
        export interface EstimateTemplateCostOutput {
            Url?: Url;
        }
        export interface GetStackPolicyInput {
            StackName: StackName;
        }
        export interface GetStackPolicyOutput {
            StackPolicyBody?: StackPolicyBody;
        }
        export interface GetTemplateInput {
            StackName: StackName;
        }
        export interface GetTemplateOutput {
            TemplateBody?: TemplateBody;
        }
        export interface GetTemplateSummaryInput {
            TemplateBody?: TemplateBody;
            TemplateURL?: TemplateURL;
            StackName?: StackNameOrId;
        }
        export interface GetTemplateSummaryOutput {
            Parameters?: ParameterDeclarations;
            Description?: Description;
            Capabilities?: Capabilities;
            CapabilitiesReason?: CapabilitiesReason;
            ResourceTypes?: ResourceTypes;
            Version?: Version;
            Metadata?: Metadata;
        }
        export interface InsufficientCapabilitiesException {
        }
        export interface LimitExceededException {
        }
        export interface ListStackResourcesInput {
            StackName: StackName;
            NextToken?: NextToken;
        }
        export interface ListStackResourcesOutput {
            StackResourceSummaries?: StackResourceSummaries;
            NextToken?: NextToken;
        }
        export interface ListStacksInput {
            NextToken?: NextToken;
            StackStatusFilter?: StackStatusFilter;
        }
        export interface ListStacksOutput {
            StackSummaries?: StackSummaries;
            NextToken?: NextToken;
        }
        export interface Output {
            OutputKey?: OutputKey;
            OutputValue?: OutputValue;
            Description?: Description;
        }
        export interface Parameter {
            ParameterKey?: ParameterKey;
            ParameterValue?: ParameterValue;
            UsePreviousValue?: UsePreviousValue;
        }
        export interface ParameterConstraints {
            AllowedValues?: AllowedValues;
        }
        export interface ParameterDeclaration {
            ParameterKey?: ParameterKey;
            DefaultValue?: ParameterValue;
            ParameterType?: ParameterType;
            NoEcho?: NoEcho;
            Description?: Description;
            ParameterConstraints?: ParameterConstraints;
        }
        export interface SetStackPolicyInput {
            StackName: StackName;
            StackPolicyBody?: StackPolicyBody;
            StackPolicyURL?: StackPolicyURL;
        }
        export interface SignalResourceInput {
            StackName: StackNameOrId;
            LogicalResourceId: LogicalResourceId;
            UniqueId: ResourceSignalUniqueId;
            Status: ResourceSignalStatus;
        }
        export interface Stack {
            StackId?: StackId;
            StackName: StackName;
            Description?: Description;
            Parameters?: Parameters;
            CreationTime: CreationTime;
            LastUpdatedTime?: LastUpdatedTime;
            StackStatus: StackStatus;
            StackStatusReason?: StackStatusReason;
            DisableRollback?: DisableRollback;
            NotificationARNs?: NotificationARNs;
            TimeoutInMinutes?: TimeoutMinutes;
            Capabilities?: Capabilities;
            Outputs?: Outputs;
            Tags?: Tags;
        }
        export interface StackEvent {
            StackId: StackId;
            EventId: EventId;
            StackName: StackName;
            LogicalResourceId?: LogicalResourceId;
            PhysicalResourceId?: PhysicalResourceId;
            ResourceType?: ResourceType;
            Timestamp: Timestamp;
            ResourceStatus?: ResourceStatus;
            ResourceStatusReason?: ResourceStatusReason;
            ResourceProperties?: ResourceProperties;
        }
        export interface StackResource {
            StackName?: StackName;
            StackId?: StackId;
            LogicalResourceId: LogicalResourceId;
            PhysicalResourceId?: PhysicalResourceId;
            ResourceType: ResourceType;
            Timestamp: Timestamp;
            ResourceStatus: ResourceStatus;
            ResourceStatusReason?: ResourceStatusReason;
            Description?: Description;
        }
        export interface StackResourceDetail {
            StackName?: StackName;
            StackId?: StackId;
            LogicalResourceId: LogicalResourceId;
            PhysicalResourceId?: PhysicalResourceId;
            ResourceType: ResourceType;
            LastUpdatedTimestamp: Timestamp;
            ResourceStatus: ResourceStatus;
            ResourceStatusReason?: ResourceStatusReason;
            Description?: Description;
            Metadata?: Metadata;
        }
        export interface StackResourceSummary {
            LogicalResourceId: LogicalResourceId;
            PhysicalResourceId?: PhysicalResourceId;
            ResourceType: ResourceType;
            LastUpdatedTimestamp: Timestamp;
            ResourceStatus: ResourceStatus;
            ResourceStatusReason?: ResourceStatusReason;
        }
        export interface StackSummary {
            StackId?: StackId;
            StackName: StackName;
            TemplateDescription?: TemplateDescription;
            CreationTime: CreationTime;
            LastUpdatedTime?: LastUpdatedTime;
            DeletionTime?: DeletionTime;
            StackStatus: StackStatus;
            StackStatusReason?: StackStatusReason;
        }
        export interface Tag {
            Key?: TagKey;
            Value?: TagValue;
        }
        export interface TemplateParameter {
            ParameterKey?: ParameterKey;
            DefaultValue?: ParameterValue;
            NoEcho?: NoEcho;
            Description?: Description;
        }
        export interface UpdateStackInput {
            StackName: StackName;
            TemplateBody?: TemplateBody;
            TemplateURL?: TemplateURL;
            UsePreviousTemplate?: UsePreviousTemplate;
            StackPolicyDuringUpdateBody?: StackPolicyDuringUpdateBody;
            StackPolicyDuringUpdateURL?: StackPolicyDuringUpdateURL;
            Parameters?: Parameters;
            Capabilities?: Capabilities;
            ResourceTypes?: ResourceTypes;
            StackPolicyBody?: StackPolicyBody;
            StackPolicyURL?: StackPolicyURL;
            NotificationARNs?: NotificationARNs;
        }
        export interface UpdateStackOutput {
            StackId?: StackId;
        }
        export interface ValidateTemplateInput {
            TemplateBody?: TemplateBody;
            TemplateURL?: TemplateURL;
        }
        export interface ValidateTemplateOutput {
            Parameters?: TemplateParameters;
            Description?: Description;
            Capabilities?: Capabilities;
            CapabilitiesReason?: CapabilitiesReason;
        }

    }
}
