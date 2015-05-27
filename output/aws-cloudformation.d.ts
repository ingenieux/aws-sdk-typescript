// DO NOT EDIT!
//
declare module "aws-sdk" {
    export class CloudFormation {
      constructor(options?: any);
      cancelUpdateStack(params: CancelUpdateStackInput, callback: (err: any, data: any) => void): void;
      createStack(params: CreateStackInput, callback: (err: LimitExceededException|AlreadyExistsException|InsufficientCapabilitiesException|any, data: CreateStackOutput|any) => void): void;
      deleteStack(params: DeleteStackInput, callback: (err: any, data: any) => void): void;
      describeStackEvents(params: DescribeStackEventsInput, callback: (err: any, data: DescribeStackEventsOutput|any) => void): void;
      describeStackResource(params: DescribeStackResourceInput, callback: (err: any, data: DescribeStackResourceOutput|any) => void): void;
      describeStackResources(params: DescribeStackResourcesInput, callback: (err: any, data: DescribeStackResourcesOutput|any) => void): void;
      describeStacks(params: DescribeStacksInput, callback: (err: any, data: DescribeStacksOutput|any) => void): void;
      estimateTemplateCost(params: EstimateTemplateCostInput, callback: (err: any, data: EstimateTemplateCostOutput|any) => void): void;
      getStackPolicy(params: GetStackPolicyInput, callback: (err: any, data: GetStackPolicyOutput|any) => void): void;
      getTemplate(params: GetTemplateInput, callback: (err: any, data: GetTemplateOutput|any) => void): void;
      getTemplateSummary(params: GetTemplateSummaryInput, callback: (err: any, data: GetTemplateSummaryOutput|any) => void): void;
      listStackResources(params: ListStackResourcesInput, callback: (err: any, data: ListStackResourcesOutput|any) => void): void;
      listStacks(params: ListStacksInput, callback: (err: any, data: ListStacksOutput|any) => void): void;
      setStackPolicy(params: SetStackPolicyInput, callback: (err: any, data: any) => void): void;
      signalResource(params: SignalResourceInput, callback: (err: any, data: any) => void): void;
      updateStack(params: UpdateStackInput, callback: (err: InsufficientCapabilitiesException|any, data: UpdateStackOutput|any) => void): void;
      validateTemplate(params: ValidateTemplateInput, callback: (err: any, data: ValidateTemplateOutput|any) => void): void;
    }

    export type AllowedValue = string;

    export type AllowedValues = Array<AllowedValue>;

    export interface AlreadyExistsException {
    }


    export interface CancelUpdateStackInput {
      StackName: StackName;
    }


    export type Capabilities = Array<Capability>;

    export type CapabilitiesReason = string;

    export type Capability = string;

    export interface CreateStackInput {
      StackName: StackName;
      TemplateBody?: TemplateBody;
      TemplateURL?: TemplateURL;
      Parameters?: Parameters;
      DisableRollback?: DisableRollback;
      TimeoutInMinutes?: TimeoutMinutes;
      NotificationARNs?: NotificationARNs;
      Capabilities?: Capabilities;
      OnFailure?: OnFailure;
      StackPolicyBody?: StackPolicyBody;
      StackPolicyURL?: StackPolicyURL;
      Tags?: Tags;
    }


    export interface CreateStackOutput {
      StackId?: StackId;
    }


    export type CreationTime = number;

    export interface DeleteStackInput {
      StackName: StackName;
    }


    export type DeletionTime = number;

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


    export type Description = string;

    export type DisableRollback = boolean;

    export interface EstimateTemplateCostInput {
      TemplateBody?: TemplateBody;
      TemplateURL?: TemplateURL;
      Parameters?: Parameters;
    }


    export interface EstimateTemplateCostOutput {
      Url?: Url;
    }


    export type EventId = string;

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
      Version?: Version;
      Metadata?: Metadata;
    }


    export interface InsufficientCapabilitiesException {
    }


    export type LastUpdatedTime = number;

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


    export type LogicalResourceId = string;

    export type Metadata = string;

    export type NextToken = string;

    export type NoEcho = boolean;

    export type NotificationARN = string;

    export type NotificationARNs = Array<NotificationARN>; // max: 5

    export type OnFailure = string;

    export interface Output {
      OutputKey?: OutputKey;
      OutputValue?: OutputValue;
      Description?: Description;
    }


    export type OutputKey = string;

    export type OutputValue = string;

    export type Outputs = Array<Output>;

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


    export type ParameterDeclarations = Array<ParameterDeclaration>;

    export type ParameterKey = string;

    export type ParameterType = string;

    export type ParameterValue = string;

    export type Parameters = Array<Parameter>;

    export type PhysicalResourceId = string;

    export type ResourceProperties = string;

    export type ResourceSignalStatus = string;

    export type ResourceSignalUniqueId = string;

    export type ResourceStatus = string;

    export type ResourceStatusReason = string;

    export type ResourceType = string;

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


    export type StackEvents = Array<StackEvent>;

    export type StackId = string;

    export type StackName = string;

    export type StackNameOrId = string; // pattern: "([a-zA-Z][-a-zA-Z0-9]*)|(arn:\b(aws|aws-us-gov|aws-cn)\b:[-a-zA-Z0-9:/._+]*)"

    export type StackPolicyBody = string;

    export type StackPolicyDuringUpdateBody = string;

    export type StackPolicyDuringUpdateURL = string;

    export type StackPolicyURL = string;

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


    export type StackResourceSummaries = Array<StackResourceSummary>;

    export interface StackResourceSummary {
      LogicalResourceId: LogicalResourceId;
      PhysicalResourceId?: PhysicalResourceId;
      ResourceType: ResourceType;
      LastUpdatedTimestamp: Timestamp;
      ResourceStatus: ResourceStatus;
      ResourceStatusReason?: ResourceStatusReason;
    }


    export type StackResources = Array<StackResource>;

    export type StackStatus = string;

    export type StackStatusFilter = Array<StackStatus>;

    export type StackStatusReason = string;

    export type StackSummaries = Array<StackSummary>;

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


    export type Stacks = Array<Stack>;

    export interface Tag {
      Key?: TagKey;
      Value?: TagValue;
    }


    export type TagKey = string;

    export type TagValue = string;

    export type Tags = Array<Tag>;

    export type TemplateBody = string;

    export type TemplateDescription = string;

    export interface TemplateParameter {
      ParameterKey?: ParameterKey;
      DefaultValue?: ParameterValue;
      NoEcho?: NoEcho;
      Description?: Description;
    }


    export type TemplateParameters = Array<TemplateParameter>;

    export type TemplateURL = string;

    export type TimeoutMinutes = number;

    export type Timestamp = number;

    export interface UpdateStackInput {
      StackName: StackName;
      TemplateBody?: TemplateBody;
      TemplateURL?: TemplateURL;
      UsePreviousTemplate?: UsePreviousTemplate;
      StackPolicyDuringUpdateBody?: StackPolicyDuringUpdateBody;
      StackPolicyDuringUpdateURL?: StackPolicyDuringUpdateURL;
      Parameters?: Parameters;
      Capabilities?: Capabilities;
      StackPolicyBody?: StackPolicyBody;
      StackPolicyURL?: StackPolicyURL;
      NotificationARNs?: NotificationARNs;
    }


    export interface UpdateStackOutput {
      StackId?: StackId;
    }


    export type Url = string;

    export type UsePreviousTemplate = boolean;

    export type UsePreviousValue = boolean;

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


    export type Version = string;

}
