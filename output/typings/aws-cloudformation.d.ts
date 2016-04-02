// Type definitions for aws-sdk - AWS CloudFormation
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

// COMMENTED <reference path="./aws-sdk.d.ts" />

declare module "aws-sdk" {

  /**
    * apiVersion: 2010-05-15
    * endpointPrefix: cloudformation
    * serviceAbbreviation: 
    * signatureVersion: v4
    * protocol: query
    *
    * AWS CloudFormationAWS CloudFormation enables you to create and manage AWS
 infrastructure deployments predictably and repeatedly. AWS CloudFormation helps
 you leverage AWS products such as Amazon EC2, EBS, Amazon SNS, ELB, and Auto
 Scaling to build highly-reliable, highly scalable, cost effective applications
 without worrying about creating and configuring the underlying AWS
 infrastructure.
 
 With AWS CloudFormation, you declare all of your resources and dependencies in a
 template file. The template defines a collection of resources as a single unit
 called a stack. AWS CloudFormation creates and deletes all member resources of
 the stack together and manages all dependencies between the resources for you.
 
 For more information about this product, go to the CloudFormation Product Page
 [http://aws.amazon.com/cloudformation/] .
 
 Amazon CloudFormation makes use of other AWS products. If you need additional
 technical information about a specific AWS product, you can find the product&#x27;s
 technical documentation at http://docs.aws.amazon.com/documentation/
 [http://docs.aws.amazon.com/documentation/] .
    *
    */
  export class CloudFormation extends Service {
    constructor(options?: any);
    endpoint: Endpoint;
    /**
     * Cancels an update on the specified stack. If the call completes successfully,
the stack rolls back the update and reverts to the previous stack configuration.

You can cancel only stacks that are in the UPDATE_IN_PROGRESS state.
     *
     */
    cancelUpdateStack(params: CloudFormation.CancelUpdateStackInput, callback?: (err: any, data: any) => void): Request;
    /**
     * For a specified stack that is in the UPDATE_ROLLBACK_FAILED state, continues
rolling it back to the UPDATE_ROLLBACK_COMPLETE state. Depending on the cause of
the failure, you can manually fix the error
[http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/troubleshooting.html#troubleshooting-errors-update-rollback-failed] 
and continue the rollback. By continuing the rollback, you can return your stack
to a working state (the UPDATE_ROLLBACK_COMPLETE state), and then try to update
the stack again.

A stack goes into the UPDATE_ROLLBACK_FAILED state when AWS CloudFormation
cannot roll back all changes after a failed stack update. For example, you might
have a stack that is rolling back to an old database instance that was deleted
outside of AWS CloudFormation. Because AWS CloudFormation doesn&#x27;t know the
database was deleted, it assumes that the database instance still exists and
attempts to roll back to it, causing the update rollback to fail.
     *
     */
    continueUpdateRollback(params: CloudFormation.ContinueUpdateRollbackInput, callback?: (err: any, data: CloudFormation.ContinueUpdateRollbackOutput | any) => void): Request;
    /**
     * Creates a stack as specified in the template. After the call completes
successfully, the stack creation starts. You can check the status of the stack
via the DescribeStacks API.
     *
     * @error LimitExceededException   
     * @error AlreadyExistsException   
     * @error InsufficientCapabilitiesException   
     */
    createStack(params: CloudFormation.CreateStackInput, callback?: (err: CloudFormation.LimitExceededException | CloudFormation.AlreadyExistsException | CloudFormation.InsufficientCapabilitiesException | any, data: CloudFormation.CreateStackOutput | any) => void): Request;
    /**
     * Deletes a specified stack. Once the call completes successfully, stack deletion
starts. Deleted stacks do not show up in the DescribeStacks API if the deletion
has been completed successfully.
     *
     */
    deleteStack(params: CloudFormation.DeleteStackInput, callback?: (err: any, data: any) => void): Request;
    /**
     * Retrieves your account&#x27;s AWS CloudFormation limits, such as the maximum number
of stacks that you can create in your account.
     *
     */
    describeAccountLimits(params: CloudFormation.DescribeAccountLimitsInput, callback?: (err: any, data: CloudFormation.DescribeAccountLimitsOutput | any) => void): Request;
    /**
     * Returns all stack related events for a specified stack. For more information
about a stack&#x27;s event history, go to Stacks
[http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/concept-stack.html] 
in the AWS CloudFormation User Guide.

You can list events for stacks that have failed to create or have been deleted
by specifying the unique stack identifier (stack ID).
     *
     */
    describeStackEvents(params: CloudFormation.DescribeStackEventsInput, callback?: (err: any, data: CloudFormation.DescribeStackEventsOutput | any) => void): Request;
    /**
     * Returns a description of the specified resource in the specified stack.

For deleted stacks, DescribeStackResource returns resource information for up to
90 days after the stack has been deleted.
     *
     */
    describeStackResource(params: CloudFormation.DescribeStackResourceInput, callback?: (err: any, data: CloudFormation.DescribeStackResourceOutput | any) => void): Request;
    /**
     * Returns AWS resource descriptions for running and deleted stacks. If StackName 
is specified, all the associated resources that are part of the stack are
returned. If PhysicalResourceId is specified, the associated resources of the
stack that the resource belongs to are returned.

Only the first 100 resources will be returned. If your stack has more resources
than this, you should use ListStackResources instead.For deleted stacks, DescribeStackResources returns resource information for up
to 90 days after the stack has been deleted.

You must specify either StackName or PhysicalResourceId , but not both. In
addition, you can specify LogicalResourceId to filter the returned result. For
more information about resources, the LogicalResourceId and PhysicalResourceId ,
go to the AWS CloudFormation User Guide
[http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/] .

A ValidationError is returned if you specify both StackName and 
PhysicalResourceId in the same request.
     *
     */
    describeStackResources(params: CloudFormation.DescribeStackResourcesInput, callback?: (err: any, data: CloudFormation.DescribeStackResourcesOutput | any) => void): Request;
    /**
     * Returns the description for the specified stack; if no stack name was specified,
then it returns the description for all the stacks created.
     *
     */
    describeStacks(params: CloudFormation.DescribeStacksInput, callback?: (err: any, data: CloudFormation.DescribeStacksOutput | any) => void): Request;
    /**
     * Returns the estimated monthly cost of a template. The return value is an AWS
Simple Monthly Calculator URL with a query string that describes the resources
required to run the template.
     *
     */
    estimateTemplateCost(params: CloudFormation.EstimateTemplateCostInput, callback?: (err: any, data: CloudFormation.EstimateTemplateCostOutput | any) => void): Request;
    /**
     * Returns the stack policy for a specified stack. If a stack doesn&#x27;t have a
policy, a null value is returned.
     *
     */
    getStackPolicy(params: CloudFormation.GetStackPolicyInput, callback?: (err: any, data: CloudFormation.GetStackPolicyOutput | any) => void): Request;
    /**
     * Returns the template body for a specified stack. You can get the template for
running or deleted stacks.

For deleted stacks, GetTemplate returns the template for up to 90 days after the
stack has been deleted.

If the template does not exist, a ValidationError is returned.
     *
     */
    getTemplate(params: CloudFormation.GetTemplateInput, callback?: (err: any, data: CloudFormation.GetTemplateOutput | any) => void): Request;
    /**
     * Returns information about a new or existing template. The GetTemplateSummary 
action is useful for viewing parameter information, such as default parameter
values and parameter types, before you create or update a stack.

You can use the GetTemplateSummary action when you submit a template, or you can
get template information for a running or deleted stack.

For deleted stacks, GetTemplateSummary returns the template information for up
to 90 days after the stack has been deleted. If the template does not exist, a 
ValidationError is returned.
     *
     */
    getTemplateSummary(params: CloudFormation.GetTemplateSummaryInput, callback?: (err: any, data: CloudFormation.GetTemplateSummaryOutput | any) => void): Request;
    /**
     * Returns descriptions of all resources of the specified stack.

For deleted stacks, ListStackResources returns resource information for up to 90
days after the stack has been deleted.
     *
     */
    listStackResources(params: CloudFormation.ListStackResourcesInput, callback?: (err: any, data: CloudFormation.ListStackResourcesOutput | any) => void): Request;
    /**
     * Returns the summary information for stacks whose status matches the specified
StackStatusFilter. Summary information for stacks that have been deleted is kept
for 90 days after the stack is deleted. If no StackStatusFilter is specified,
summary information for all stacks is returned (including existing stacks and
stacks that have been deleted).
     *
     */
    listStacks(params: CloudFormation.ListStacksInput, callback?: (err: any, data: CloudFormation.ListStacksOutput | any) => void): Request;
    /**
     * Sets a stack policy for a specified stack.
     *
     */
    setStackPolicy(params: CloudFormation.SetStackPolicyInput, callback?: (err: any, data: any) => void): Request;
    /**
     * Sends a signal to the specified resource with a success or failure status. You
can use the SignalResource API in conjunction with a creation policy or update
policy. AWS CloudFormation doesn&#x27;t proceed with a stack creation or update until
resources receive the required number of signals or the timeout period is
exceeded. The SignalResource API is useful in cases where you want to send
signals from anywhere other than an Amazon EC2 instance.
     *
     */
    signalResource(params: CloudFormation.SignalResourceInput, callback?: (err: any, data: any) => void): Request;
    /**
     * Updates a stack as specified in the template. After the call completes
successfully, the stack update starts. You can check the status of the stack via
the DescribeStacks action.

To get a copy of the template for an existing stack, you can use the GetTemplate 
action.

For more information about creating an update template, updating a stack, and
monitoring the progress of the update, see Updating a Stack
[http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks.html] 
.
     *
     * @error InsufficientCapabilitiesException   
     */
    updateStack(params: CloudFormation.UpdateStackInput, callback?: (err: CloudFormation.InsufficientCapabilitiesException | any, data: CloudFormation.UpdateStackOutput | any) => void): Request;
    /**
     * Validates a specified template.
     *
     */
    validateTemplate(params: CloudFormation.ValidateTemplateInput, callback?: (err: any, data: CloudFormation.ValidateTemplateOutput | any) => void): Request;

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

    export type NextToken = string;

    export type NoEcho = boolean;

    export type NotificationARN = string;

    export type NotificationARNs = NotificationARN[];

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

    export type ResourceSignalUniqueId = string;

    export type ResourceStatus = string;

    export type ResourceStatusReason = string;

    export type ResourceType = string;

    export type ResourceTypes = ResourceType[];

    export type RetainResources = LogicalResourceId[];

    export type StackEvents = StackEvent[];

    export type StackId = string;

    export type StackName = string;

    export type StackNameOrId = string;

    export type StackPolicyBody = string;

    export type StackPolicyDuringUpdateBody = string;

    export type StackPolicyDuringUpdateURL = string;

    export type StackPolicyURL = string;

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

    export type TemplateBody = string;

    export type TemplateDescription = string;

    export type TemplateParameters = TemplateParameter[];

    export type TemplateURL = string;

    export type TimeoutMinutes = number;

    export type Timestamp = number;

    export type Url = string;

    export type UsePreviousTemplate = boolean;

    export type UsePreviousValue = boolean;

    export type Version = string;

    export interface AccountLimit {
      /** The name of the account limit. Currently, the only account limit is StackLimit . **/
      Name?: LimitName;
      /** The value that is associated with the account limit name. **/
      Value?: LimitValue;
    }
    export interface AlreadyExistsException {
    }
    export interface CancelUpdateStackInput {
      /** The name or the unique stack ID that is associated with the stack. **/
      StackName: StackName;
    }
    export interface ContinueUpdateRollbackInput {
      /** The name or the unique ID of the stack that you want to continue rolling back. **/
      StackName: StackNameOrId;
    }
    export interface ContinueUpdateRollbackOutput {
    }
    export interface CreateStackInput {
      /** The name that is associated with the stack. The name must be unique in the
region in which you are creating the stack.

A stack name can contain only alphanumeric characters (case sensitive) and
hyphens. It must start with an alphabetic character and cannot be longer than
128 characters. **/
      StackName: StackName;
      /** Structure containing the template body with a minimum length of 1 byte and a
maximum length of 51,200 bytes. For more information, go to Template Anatomy
[http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html] 
in the AWS CloudFormation User Guide.

Conditional: You must specify either the TemplateBody or the TemplateURL 
parameter, but not both. **/
      TemplateBody?: TemplateBody;
      /** Location of file containing the template body. The URL must point to a template
(max size: 460,800 bytes) that is located in an Amazon S3 bucket. For more
information, go to the Template Anatomy
[http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html] 
in the AWS CloudFormation User Guide.

Conditional: You must specify either the TemplateBody or the TemplateURL 
parameter, but not both. **/
      TemplateURL?: TemplateURL;
      /** A list of Parameter structures that specify input parameters for the stack. For
more information, see the Parameter
[http://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_Parameter.html] 
data type. **/
      Parameters?: Parameters;
      /** Set to true to disable rollback of the stack if stack creation failed. You can
specify either DisableRollback or OnFailure , but not both.

Default: false **/
      DisableRollback?: DisableRollback;
      /** The amount of time that can pass before the stack status becomes CREATE_FAILED;
if DisableRollback is not set or is set to false , the stack will be rolled
back. **/
      TimeoutInMinutes?: TimeoutMinutes;
      /** The Simple Notification Service (SNS) topic ARNs to publish stack related
events. You can find your SNS topic ARNs using the SNS console
[http://console.aws.amazon.com/sns] or your Command Line Interface (CLI). **/
      NotificationARNs?: NotificationARNs;
      /** A list of capabilities that you must specify before AWS CloudFormation can
create or update certain stacks. Some stack templates might include resources
that can affect permissions in your AWS account. For those stacks, you must
explicitly acknowledge their capabilities by specifying this parameter.

Currently, the only valid value is CAPABILITY_IAM , which is required for the
following resources: AWS::IAM::AccessKey
[http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-accesskey.html] 
, AWS::IAM::Group
[http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-group.html] 
, AWS::IAM::InstanceProfile
[http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-instanceprofile.html] 
, AWS::IAM::Policy
[http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-policy.html] 
, AWS::IAM::Role
[http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-role.html] 
, AWS::IAM::User
[http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-user.html] 
, and AWS::IAM::UserToGroupAddition
[http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-addusertogroup.html] 
. If your stack template contains these resources, we recommend that you review
any permissions associated with them. If you don&#x27;t specify this parameter, this
action returns an InsufficientCapabilities error. **/
      Capabilities?: Capabilities;
      /** The template resource types that you have permissions to work with for this
create stack action, such as AWS::EC2::Instance , AWS::EC2::&amp;#42; , or 
Custom::MyCustomInstance . Use the following syntax to describe template
resource types: AWS::* (for all AWS resource), Custom::* (for all custom
resources), Custom:: logical_ID (for a specific custom resource), AWS:: 
service_name ::* (for all resources of a particular AWS service), and AWS:: 
service_name :: resource_logical_ID (for a specific AWS resource).

If the list of resource types doesn&#x27;t include a resource that you&#x27;re creating,
the stack creation fails. By default, AWS CloudFormation grants permissions to
all resource types. AWS Identity and Access Management (IAM) uses this parameter
for AWS CloudFormation-specific condition keys in IAM policies. For more
information, see Controlling Access with AWS Identity and Access Management
[http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html] 
. **/
      ResourceTypes?: ResourceTypes;
      /** Determines what action will be taken if stack creation fails. This must be one
of: DO_NOTHING, ROLLBACK, or DELETE. You can specify either OnFailure or 
DisableRollback , but not both.

Default: ROLLBACK **/
      OnFailure?: OnFailure;
      /** Structure containing the stack policy body. For more information, go to Prevent
Updates to Stack Resources
[http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/protect-stack-resources.html] 
in the AWS CloudFormation User Guide. You can specify either the StackPolicyBody 
or the StackPolicyURL parameter, but not both. **/
      StackPolicyBody?: StackPolicyBody;
      /** Location of a file containing the stack policy. The URL must point to a policy
(max size: 16KB) located in an S3 bucket in the same region as the stack. You
can specify either the StackPolicyBody or the StackPolicyURL parameter, but not
both. **/
      StackPolicyURL?: StackPolicyURL;
      /** Key-value pairs to associate with this stack. AWS CloudFormation also propagates
these tags to the resources created in the stack. A maximum number of 10 tags
can be specified. **/
      Tags?: Tags;
    }
    export interface CreateStackOutput {
      /** Unique identifier of the stack. **/
      StackId?: StackId;
    }
    export interface DeleteStackInput {
      /** The name or the unique stack ID that is associated with the stack. **/
      StackName: StackName;
      /** For stacks in the DELETE_FAILED state, a list of resource logical IDs that are
associated with the resources you want to retain. During deletion, AWS
CloudFormation deletes the stack but does not delete the retained resources.

Retaining resources is useful when you cannot delete a resource, such as a
non-empty S3 bucket, but you want to delete the stack. **/
      RetainResources?: RetainResources;
    }
    export interface DescribeAccountLimitsInput {
      /** A string that identifies the next page of limits that you want to retrieve. **/
      NextToken?: NextToken;
    }
    export interface DescribeAccountLimitsOutput {
      /** An account limit structure that contain a list of AWS CloudFormation account
limits and their values. **/
      AccountLimits?: AccountLimitList;
      /** If the output exceeds 1 MB in size, a string that identifies the next page of
limits. If no additional page exists, this value is null. **/
      NextToken?: NextToken;
    }
    export interface DescribeStackEventsInput {
      /** The name or the unique stack ID that is associated with the stack, which are not
always interchangeable:

&amp;#42; Running stacks: You can specify either the stack&#x27;s name or its unique stack
 ID.
* Deleted stacks: You must specify the unique stack ID.

Default: There is no default value. **/
      StackName?: StackName;
      /** A string that identifies the next page of events that you want to retrieve. **/
      NextToken?: NextToken;
    }
    export interface DescribeStackEventsOutput {
      /** A list of StackEvents structures. **/
      StackEvents?: StackEvents;
      /** If the output exceeds 1 MB in size, a string that identifies the next page of
events. If no additional page exists, this value is null. **/
      NextToken?: NextToken;
    }
    export interface DescribeStackResourceInput {
      /** The name or the unique stack ID that is associated with the stack, which are not
always interchangeable:

&amp;#42; Running stacks: You can specify either the stack&#x27;s name or its unique stack
 ID.
* Deleted stacks: You must specify the unique stack ID.

Default: There is no default value. **/
      StackName: StackName;
      /** The logical name of the resource as specified in the template.

Default: There is no default value. **/
      LogicalResourceId: LogicalResourceId;
    }
    export interface DescribeStackResourceOutput {
      /** A StackResourceDetail structure containing the description of the specified
resource in the specified stack. **/
      StackResourceDetail?: StackResourceDetail;
    }
    export interface DescribeStackResourcesInput {
      /** The name or the unique stack ID that is associated with the stack, which are not
always interchangeable:

&amp;#42; Running stacks: You can specify either the stack&#x27;s name or its unique stack
 ID.
* Deleted stacks: You must specify the unique stack ID.

Default: There is no default value.

Required: Conditional. If you do not specify StackName , you must specify 
PhysicalResourceId . **/
      StackName?: StackName;
      /** The logical name of the resource as specified in the template.

Default: There is no default value. **/
      LogicalResourceId?: LogicalResourceId;
      /** The name or unique identifier that corresponds to a physical instance ID of a
resource supported by AWS CloudFormation.

For example, for an Amazon Elastic Compute Cloud (EC2) instance, 
PhysicalResourceId corresponds to the InstanceId . You can pass the EC2 
InstanceId to DescribeStackResources to find which stack the instance belongs to
and what other resources are part of the stack.

Required: Conditional. If you do not specify PhysicalResourceId , you must
specify StackName .

Default: There is no default value. **/
      PhysicalResourceId?: PhysicalResourceId;
    }
    export interface DescribeStackResourcesOutput {
      /** A list of StackResource structures. **/
      StackResources?: StackResources;
    }
    export interface DescribeStacksInput {
      /** The name or the unique stack ID that is associated with the stack, which are not
always interchangeable:

&amp;#42; Running stacks: You can specify either the stack&#x27;s name or its unique stack
 ID.
* Deleted stacks: You must specify the unique stack ID.

Default: There is no default value. **/
      StackName?: StackName;
      /** A string that identifies the next page of stacks that you want to retrieve. **/
      NextToken?: NextToken;
    }
    export interface DescribeStacksOutput {
      /** A list of stack structures. **/
      Stacks?: Stacks;
      /** If the output exceeds 1 MB in size, a string that identifies the next page of
stacks. If no additional page exists, this value is null. **/
      NextToken?: NextToken;
    }
    export interface EstimateTemplateCostInput {
      /** Structure containing the template body with a minimum length of 1 byte and a
maximum length of 51,200 bytes. (For more information, go to Template Anatomy
[http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html] 
in the AWS CloudFormation User Guide.)

Conditional: You must pass TemplateBody or TemplateURL . If both are passed,
only TemplateBody is used. **/
      TemplateBody?: TemplateBody;
      /** Location of file containing the template body. The URL must point to a template
that is located in an Amazon S3 bucket. For more information, go to Template
Anatomy
[http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html] 
in the AWS CloudFormation User Guide.

Conditional: You must pass TemplateURL or TemplateBody . If both are passed,
only TemplateBody is used. **/
      TemplateURL?: TemplateURL;
      /** A list of Parameter structures that specify input parameters. **/
      Parameters?: Parameters;
    }
    export interface EstimateTemplateCostOutput {
      /** An AWS Simple Monthly Calculator URL with a query string that describes the
resources required to run the template. **/
      Url?: Url;
    }
    export interface GetStackPolicyInput {
      /** The name or unique stack ID that is associated with the stack whose policy you
want to get. **/
      StackName: StackName;
    }
    export interface GetStackPolicyOutput {
      /** Structure containing the stack policy body. (For more information, go to Prevent
Updates to Stack Resources
[http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/protect-stack-resources.html] 
in the AWS CloudFormation User Guide.) **/
      StackPolicyBody?: StackPolicyBody;
    }
    export interface GetTemplateInput {
      /** The name or the unique stack ID that is associated with the stack, which are not
always interchangeable:

&amp;#42; Running stacks: You can specify either the stack&#x27;s name or its unique stack
 ID.
* Deleted stacks: You must specify the unique stack ID.

Default: There is no default value. **/
      StackName: StackName;
    }
    export interface GetTemplateOutput {
      /** Structure containing the template body. (For more information, go to Template
Anatomy
[http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html] 
in the AWS CloudFormation User Guide.) **/
      TemplateBody?: TemplateBody;
    }
    export interface GetTemplateSummaryInput {
      /** Structure containing the template body with a minimum length of 1 byte and a
maximum length of 51,200 bytes. For more information about templates, see 
Template Anatomy
[http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html] 
in the AWS CloudFormation User Guide.

Conditional: You must specify only one of the following parameters: StackName , 
TemplateBody , or TemplateURL . **/
      TemplateBody?: TemplateBody;
      /** Location of file containing the template body. The URL must point to a template
(max size: 460,800 bytes) that is located in an Amazon S3 bucket. For more
information about templates, see Template Anatomy
[http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html] 
in the AWS CloudFormation User Guide.

Conditional: You must specify only one of the following parameters: StackName , 
TemplateBody , or TemplateURL . **/
      TemplateURL?: TemplateURL;
      /** The name or the stack ID that is associated with the stack, which are not always
interchangeable. For running stacks, you can specify either the stack&#x27;s name or
its unique stack ID. For deleted stack, you must specify the unique stack ID.

Conditional: You must specify only one of the following parameters: StackName , 
TemplateBody , or TemplateURL . **/
      StackName?: StackNameOrId;
    }
    export interface GetTemplateSummaryOutput {
      /** A list of parameter declarations that describe various properties for each
parameter. **/
      Parameters?: ParameterDeclarations;
      /** The value that is defined in the Description property of the template. **/
      Description?: Description;
      /** The capabilities found within the template. Currently, AWS CloudFormation
supports only the CAPABILITY_IAM capability. If your template contains IAM
resources, you must specify the CAPABILITY_IAM value for this parameter when you
use the CreateStack or UpdateStack actions with your template; otherwise, those
actions return an InsufficientCapabilities error. **/
      Capabilities?: Capabilities;
      /** The list of resources that generated the values in the Capabilities response
element. **/
      CapabilitiesReason?: CapabilitiesReason;
      /** A list of all the template resource types that are defined in the template, such
as AWS::EC2::Instance , AWS::Dynamo::Table , and Custom::MyCustomInstance . **/
      ResourceTypes?: ResourceTypes;
      /** The AWS template format version, which identifies the capabilities of the
template. **/
      Version?: Version;
      /** The value that is defined for the Metadata property of the template. **/
      Metadata?: Metadata;
    }
    export interface InsufficientCapabilitiesException {
    }
    export interface LimitExceededException {
    }
    export interface ListStackResourcesInput {
      /** The name or the unique stack ID that is associated with the stack, which are not
always interchangeable:

&amp;#42; Running stacks: You can specify either the stack&#x27;s name or its unique stack
 ID.
* Deleted stacks: You must specify the unique stack ID.

Default: There is no default value. **/
      StackName: StackName;
      /** A string that identifies the next page of stack resources that you want to
retrieve. **/
      NextToken?: NextToken;
    }
    export interface ListStackResourcesOutput {
      /** A list of StackResourceSummary structures. **/
      StackResourceSummaries?: StackResourceSummaries;
      /** If the output exceeds 1 MB in size, a string that identifies the next page of
stack resources. If no additional page exists, this value is null. **/
      NextToken?: NextToken;
    }
    export interface ListStacksInput {
      /** A string that identifies the next page of stacks that you want to retrieve. **/
      NextToken?: NextToken;
      /** Stack status to use as a filter. Specify one or more stack status codes to list
only stacks with the specified status codes. For a complete list of stack status
codes, see the StackStatus parameter of the Stack data type. **/
      StackStatusFilter?: StackStatusFilter;
    }
    export interface ListStacksOutput {
      /** A list of StackSummary structures containing information about the specified
stacks. **/
      StackSummaries?: StackSummaries;
      /** If the output exceeds 1 MB in size, a string that identifies the next page of
stacks. If no additional page exists, this value is null. **/
      NextToken?: NextToken;
    }
    export interface Output {
      /** The key associated with the output. **/
      OutputKey?: OutputKey;
      /** The value associated with the output. **/
      OutputValue?: OutputValue;
      /** User defined description associated with the output. **/
      Description?: Description;
    }
    export interface Parameter {
      /** The key associated with the parameter. If you don&#x27;t specify a key and value for
a particular parameter, AWS CloudFormation uses the default value that is
specified in your template. **/
      ParameterKey?: ParameterKey;
      /** The value associated with the parameter. **/
      ParameterValue?: ParameterValue;
      /** During a stack update, use the existing parameter value that the stack is using
for a given parameter key. If you specify true , do not specify a parameter
value. **/
      UsePreviousValue?: UsePreviousValue;
    }
    export interface ParameterConstraints {
      /** A list of values that are permitted for a parameter. **/
      AllowedValues?: AllowedValues;
    }
    export interface ParameterDeclaration {
      /** The name that is associated with the parameter. **/
      ParameterKey?: ParameterKey;
      /** The default value of the parameter. **/
      DefaultValue?: ParameterValue;
      /** The type of parameter. **/
      ParameterType?: ParameterType;
      /** Flag that indicates whether the parameter value is shown as plain text in logs
and in the AWS Management Console. **/
      NoEcho?: NoEcho;
      /** The description that is associate with the parameter. **/
      Description?: Description;
      /** The criteria that AWS CloudFormation uses to validate parameter values. **/
      ParameterConstraints?: ParameterConstraints;
    }
    export interface SetStackPolicyInput {
      /** The name or unique stack ID that you want to associate a policy with. **/
      StackName: StackName;
      /** Structure containing the stack policy body. For more information, go to Prevent
Updates to Stack Resources
[http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/protect-stack-resources.html] 
in the AWS CloudFormation User Guide. You can specify either the StackPolicyBody 
or the StackPolicyURL parameter, but not both. **/
      StackPolicyBody?: StackPolicyBody;
      /** Location of a file containing the stack policy. The URL must point to a policy
(max size: 16KB) located in an S3 bucket in the same region as the stack. You
can specify either the StackPolicyBody or the StackPolicyURL parameter, but not
both. **/
      StackPolicyURL?: StackPolicyURL;
    }
    export interface SignalResourceInput {
      /** The stack name or unique stack ID that includes the resource that you want to
signal. **/
      StackName: StackNameOrId;
      /** The logical ID of the resource that you want to signal. The logical ID is the
name of the resource that given in the template. **/
      LogicalResourceId: LogicalResourceId;
      /** A unique ID of the signal. When you signal Amazon EC2 instances or Auto Scaling
groups, specify the instance ID that you are signaling as the unique ID. If you
send multiple signals to a single resource (such as signaling a wait condition),
each signal requires a different unique ID. **/
      UniqueId: ResourceSignalUniqueId;
      /** The status of the signal, which is either success or failure. A failure signal
causes AWS CloudFormation to immediately fail the stack creation or update. **/
      Status: ResourceSignalStatus;
    }
    export interface Stack {
      /** Unique identifier of the stack. **/
      StackId?: StackId;
      /** The name associated with the stack. **/
      StackName: StackName;
      /** A user-defined description associated with the stack. **/
      Description?: Description;
      /** A list of Parameter structures. **/
      Parameters?: Parameters;
      /** The time at which the stack was created. **/
      CreationTime: CreationTime;
      /** The time the stack was last updated. This field will only be returned if the
stack has been updated at least once. **/
      LastUpdatedTime?: LastUpdatedTime;
      /** Current status of the stack. **/
      StackStatus: StackStatus;
      /** Success/failure message associated with the stack status. **/
      StackStatusReason?: StackStatusReason;
      /** Boolean to enable or disable rollback on stack creation failures:

&amp;#42; true : disable rollback
* false : enable rollback **/
      DisableRollback?: DisableRollback;
      /** SNS topic ARNs to which stack related events are published. **/
      NotificationARNs?: NotificationARNs;
      /** The amount of time within which stack creation should complete. **/
      TimeoutInMinutes?: TimeoutMinutes;
      /** The capabilities allowed in the stack. **/
      Capabilities?: Capabilities;
      /** A list of output structures. **/
      Outputs?: Outputs;
      /** A list of Tag s that specify cost allocation information for the stack. **/
      Tags?: Tags;
    }
    export interface StackEvent {
      /** The unique ID name of the instance of the stack. **/
      StackId: StackId;
      /** The unique ID of this event. **/
      EventId: EventId;
      /** The name associated with a stack. **/
      StackName: StackName;
      /** The logical name of the resource specified in the template. **/
      LogicalResourceId?: LogicalResourceId;
      /** The name or unique identifier associated with the physical instance of the
resource. **/
      PhysicalResourceId?: PhysicalResourceId;
      /** Type of resource. (For more information, go to AWS Resource Types Reference
[http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html] 
in the AWS CloudFormation User Guide.) **/
      ResourceType?: ResourceType;
      /** Time the status was updated. **/
      Timestamp: Timestamp;
      /** Current status of the resource. **/
      ResourceStatus?: ResourceStatus;
      /** Success/failure message associated with the resource. **/
      ResourceStatusReason?: ResourceStatusReason;
      /** BLOB of the properties used to create the resource. **/
      ResourceProperties?: ResourceProperties;
    }
    export interface StackResource {
      /** The name associated with the stack. **/
      StackName?: StackName;
      /** Unique identifier of the stack. **/
      StackId?: StackId;
      /** The logical name of the resource specified in the template. **/
      LogicalResourceId: LogicalResourceId;
      /** The name or unique identifier that corresponds to a physical instance ID of a
resource supported by AWS CloudFormation. **/
      PhysicalResourceId?: PhysicalResourceId;
      /** Type of resource. (For more information, go to AWS Resource Types Reference
[http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html] 
in the AWS CloudFormation User Guide.) **/
      ResourceType: ResourceType;
      /** Time the status was updated. **/
      Timestamp: Timestamp;
      /** Current status of the resource. **/
      ResourceStatus: ResourceStatus;
      /** Success/failure message associated with the resource. **/
      ResourceStatusReason?: ResourceStatusReason;
      /** User defined description associated with the resource. **/
      Description?: Description;
    }
    export interface StackResourceDetail {
      /** The name associated with the stack. **/
      StackName?: StackName;
      /** Unique identifier of the stack. **/
      StackId?: StackId;
      /** The logical name of the resource specified in the template. **/
      LogicalResourceId: LogicalResourceId;
      /** The name or unique identifier that corresponds to a physical instance ID of a
resource supported by AWS CloudFormation. **/
      PhysicalResourceId?: PhysicalResourceId;
      /** Type of resource. ((For more information, go to AWS Resource Types Reference
[http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html] 
in the AWS CloudFormation User Guide.) **/
      ResourceType: ResourceType;
      /** Time the status was updated. **/
      LastUpdatedTimestamp: Timestamp;
      /** Current status of the resource. **/
      ResourceStatus: ResourceStatus;
      /** Success/failure message associated with the resource. **/
      ResourceStatusReason?: ResourceStatusReason;
      /** User defined description associated with the resource. **/
      Description?: Description;
      /** The JSON format content of the Metadata attribute declared for the resource. For
more information, see Metadata Attribute
[http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-metadata.html] 
in the AWS CloudFormation User Guide. **/
      Metadata?: Metadata;
    }
    export interface StackResourceSummary {
      /** The logical name of the resource specified in the template. **/
      LogicalResourceId: LogicalResourceId;
      /** The name or unique identifier that corresponds to a physical instance ID of the
resource. **/
      PhysicalResourceId?: PhysicalResourceId;
      /** Type of resource. (For more information, go to AWS Resource Types Reference
[http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html] 
in the AWS CloudFormation User Guide.) **/
      ResourceType: ResourceType;
      /** Time the status was updated. **/
      LastUpdatedTimestamp: Timestamp;
      /** Current status of the resource. **/
      ResourceStatus: ResourceStatus;
      /** Success/failure message associated with the resource. **/
      ResourceStatusReason?: ResourceStatusReason;
    }
    export interface StackSummary {
      /** Unique stack identifier. **/
      StackId?: StackId;
      /** The name associated with the stack. **/
      StackName: StackName;
      /** The template description of the template used to create the stack. **/
      TemplateDescription?: TemplateDescription;
      /** The time the stack was created. **/
      CreationTime: CreationTime;
      /** The time the stack was last updated. This field will only be returned if the
stack has been updated at least once. **/
      LastUpdatedTime?: LastUpdatedTime;
      /** The time the stack was deleted. **/
      DeletionTime?: DeletionTime;
      /** The current status of the stack. **/
      StackStatus: StackStatus;
      /** Success/Failure message associated with the stack status. **/
      StackStatusReason?: StackStatusReason;
    }
    export interface Tag {
      /** Required . A string used to identify this tag. You can specify a maximum of 128
characters for a tag key. Tags owned by Amazon Web Services (AWS) have the
reserved prefix: aws: . **/
      Key?: TagKey;
      /** Required . A string containing the value for this tag. You can specify a maximum
of 256 characters for a tag value. **/
      Value?: TagValue;
    }
    export interface TemplateParameter {
      /** The name associated with the parameter. **/
      ParameterKey?: ParameterKey;
      /** The default value associated with the parameter. **/
      DefaultValue?: ParameterValue;
      /** Flag indicating whether the parameter should be displayed as plain text in logs
and UIs. **/
      NoEcho?: NoEcho;
      /** User defined description associated with the parameter. **/
      Description?: Description;
    }
    export interface UpdateStackInput {
      /** The name or unique stack ID of the stack to update. **/
      StackName: StackName;
      /** Structure containing the template body with a minimum length of 1 byte and a
maximum length of 51,200 bytes. (For more information, go to Template Anatomy
[http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html] 
in the AWS CloudFormation User Guide.)

Conditional: You must specify either the TemplateBody or the TemplateURL 
parameter, but not both. **/
      TemplateBody?: TemplateBody;
      /** Location of file containing the template body. The URL must point to a template
that is located in an Amazon S3 bucket. For more information, go to Template
Anatomy
[http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html] 
in the AWS CloudFormation User Guide.

Conditional: You must specify either the TemplateBody or the TemplateURL 
parameter, but not both. **/
      TemplateURL?: TemplateURL;
      /** Reuse the existing template that is associated with the stack that you are
updating. **/
      UsePreviousTemplate?: UsePreviousTemplate;
      /** Structure containing the temporary overriding stack policy body. You can specify
either the StackPolicyDuringUpdateBody or the StackPolicyDuringUpdateURL 
parameter, but not both.

If you want to update protected resources, specify a temporary overriding stack
policy during this update. If you do not specify a stack policy, the current
policy that is associated with the stack will be used. **/
      StackPolicyDuringUpdateBody?: StackPolicyDuringUpdateBody;
      /** Location of a file containing the temporary overriding stack policy. The URL
must point to a policy (max size: 16KB) located in an S3 bucket in the same
region as the stack. You can specify either the StackPolicyDuringUpdateBody or
the StackPolicyDuringUpdateURL parameter, but not both.

If you want to update protected resources, specify a temporary overriding stack
policy during this update. If you do not specify a stack policy, the current
policy that is associated with the stack will be used. **/
      StackPolicyDuringUpdateURL?: StackPolicyDuringUpdateURL;
      /** A list of Parameter structures that specify input parameters for the stack. For
more information, see the Parameter
[http://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_Parameter.html] 
data type. **/
      Parameters?: Parameters;
      /** A list of capabilities that you must specify before AWS CloudFormation can
create or update certain stacks. Some stack templates might include resources
that can affect permissions in your AWS account. For those stacks, you must
explicitly acknowledge their capabilities by specifying this parameter.
Currently, the only valid value is CAPABILITY_IAM , which is required for the
following resources: AWS::IAM::AccessKey
[http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-accesskey.html] 
, AWS::IAM::Group
[http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-group.html] 
, AWS::IAM::InstanceProfile
[http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-instanceprofile.html] 
, AWS::IAM::Policy
[http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-policy.html] 
, AWS::IAM::Role
[http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-role.html] 
, AWS::IAM::User
[http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-user.html] 
, and AWS::IAM::UserToGroupAddition
[http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-addusertogroup.html] 
. If your stack template contains these resources, we recommend that you review
any permissions associated with them. If you don&#x27;t specify this parameter, this
action returns an InsufficientCapabilities error. **/
      Capabilities?: Capabilities;
      /** The template resource types that you have permissions to work with for this
update stack action, such as AWS::EC2::Instance , AWS::EC2::&amp;#42; , or 
Custom::MyCustomInstance .

If the list of resource types doesn&#x27;t include a resource that you&#x27;re updating,
the stack update fails. By default, AWS CloudFormation grants permissions to all
resource types. AWS Identity and Access Management (IAM) uses this parameter for
AWS CloudFormation-specific condition keys in IAM policies. For more
information, see Controlling Access with AWS Identity and Access Management
[http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html] 
. **/
      ResourceTypes?: ResourceTypes;
      /** Structure containing a new stack policy body. You can specify either the 
StackPolicyBody or the StackPolicyURL parameter, but not both.

You might update the stack policy, for example, in order to protect a new
resource that you created during a stack update. If you do not specify a stack
policy, the current policy that is associated with the stack is unchanged. **/
      StackPolicyBody?: StackPolicyBody;
      /** Location of a file containing the updated stack policy. The URL must point to a
policy (max size: 16KB) located in an S3 bucket in the same region as the stack.
You can specify either the StackPolicyBody or the StackPolicyURL parameter, but
not both.

You might update the stack policy, for example, in order to protect a new
resource that you created during a stack update. If you do not specify a stack
policy, the current policy that is associated with the stack is unchanged. **/
      StackPolicyURL?: StackPolicyURL;
      /** Amazon Simple Notification Service topic Amazon Resource Names (ARNs) that AWS
CloudFormation associates with the stack. Specify an empty list to remove all
notification topics. **/
      NotificationARNs?: NotificationARNs;
      /** Key-value pairs to associate with this stack. AWS CloudFormation also propagates
these tags to supported resources in the stack. You can specify a maximum number
of 10 tags.

If you don&#x27;t specify this parameter, AWS CloudFormation doesn&#x27;t modify the
stack&#x27;s tags. If you specify an empty value, AWS CloudFormation removes all
associated tags. **/
      Tags?: Tags;
    }
    export interface UpdateStackOutput {
      /** Unique identifier of the stack. **/
      StackId?: StackId;
    }
    export interface ValidateTemplateInput {
      /** Structure containing the template body with a minimum length of 1 byte and a
maximum length of 51,200 bytes. For more information, go to Template Anatomy
[http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html] 
in the AWS CloudFormation User Guide.

Conditional: You must pass TemplateURL or TemplateBody . If both are passed,
only TemplateBody is used. **/
      TemplateBody?: TemplateBody;
      /** Location of file containing the template body. The URL must point to a template
(max size: 460,800 bytes) that is located in an Amazon S3 bucket. For more
information, go to Template Anatomy
[http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html] 
in the AWS CloudFormation User Guide.

Conditional: You must pass TemplateURL or TemplateBody . If both are passed,
only TemplateBody is used. **/
      TemplateURL?: TemplateURL;
    }
    export interface ValidateTemplateOutput {
      /** A list of TemplateParameter structures. **/
      Parameters?: TemplateParameters;
      /** The description found within the template. **/
      Description?: Description;
      /** The capabilities found within the template. Currently, AWS CloudFormation
supports only the CAPABILITY_IAM capability. If your template contains IAM
resources, you must specify the CAPABILITY_IAM value for this parameter when you
use the CreateStack or UpdateStack actions with your template; otherwise, those
actions return an InsufficientCapabilities error. **/
      Capabilities?: Capabilities;
      /** The list of resources that generated the values in the Capabilities response
element. **/
      CapabilitiesReason?: CapabilitiesReason;
    }
  }
}
