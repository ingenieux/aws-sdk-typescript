// Type definitions for aws-sdk - AWS Config
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

// COMMENTED <reference path="./aws-sdk.d.ts" />

declare module "aws-sdk" {

  /**
    * apiVersion: 2014-11-12
    * endpointPrefix: config
    * serviceAbbreviation: Config Service
    * signatureVersion: v4
    * protocol: json
    *
    * AWS Config AWS Config provides a way to keep track of the configurations of all
 the AWS resources associated with your AWS account. You can use AWS Config to
 get the current and historical configurations of each AWS resource and also to
 get information about the relationship between the resources. An AWS resource
 can be an Amazon Compute Cloud (Amazon EC2) instance, an Elastic Block Store
 (EBS) volume, an Elastic network Interface (ENI), or a security group. For a
 complete list of resources currently supported by AWS Config, see Supported AWS
 Resources
 [http://docs.aws.amazon.com/config/latest/developerguide/resource-config-reference.html#supported-resources]
 .
 
 You can access and manage AWS Config through the AWS Management Console, the AWS
 Command Line Interface (AWS CLI), the AWS Config API, or the AWS SDKs for AWS
 Config
 
 This reference guide contains documentation for the AWS Config API and the AWS
 CLI commands that you can use to manage AWS Config.
 
 The AWS Config API uses the Signature Version 4 protocol for signing requests.
 For more information about how to sign a request with this protocol, see 
 Signature Version 4 Signing Process
 [http://docs.aws.amazon.com/general/latest/gr/signature-version-4.html].
 
 For detailed information about AWS Config features and their associated actions
 or commands, as well as how to work with AWS Management Console, see What Is AWS
 Config?
 [http://docs.aws.amazon.com/config/latest/developerguide/WhatIsConfig.html] in
 the AWS Config Developer Guide.
    *
    */
  export class ConfigService extends Service {
    constructor(options?: any);
    endpoint: Endpoint;
    /**
     * Deletes the specified AWS Config rule and all of its evaluation results.

AWS Config sets the state of a rule to DELETING until the deletion is complete.
You cannot update a rule while it is in this state. If you make a PutConfigRule 
or DeleteConfigRule request for the rule, you will receive a 
ResourceInUseException.

You can check the state of a rule by using the DescribeConfigRules request.
     *
     * @error NoSuchConfigRuleException   
     * @error ResourceInUseException   
     */
    deleteConfigRule(params: ConfigService.DeleteConfigRuleRequest, callback?: (err: ConfigService.NoSuchConfigRuleException | ConfigService.ResourceInUseException | any, data: any) => void): Request<any, ConfigService.NoSuchConfigRuleException | ConfigService.ResourceInUseException | any>;
    /**
     * Deletes the configuration recorder.

After the configuration recorder is deleted, AWS Config will not record resource
configuration changes until you create a new configuration recorder.

This action does not delete the configuration information that was previously
recorded. You will be able to access the previously recorded information by
using the GetResourceConfigHistory action, but you will not be able to access
this information in the AWS Config console until you create a new configuration
recorder.
     *
     * @error NoSuchConfigurationRecorderException   
     */
    deleteConfigurationRecorder(params: ConfigService.DeleteConfigurationRecorderRequest, callback?: (err: ConfigService.NoSuchConfigurationRecorderException | any, data: any) => void): Request<any, ConfigService.NoSuchConfigurationRecorderException | any>;
    /**
     * Deletes the delivery channel.

Before you can delete the delivery channel, you must stop the configuration
recorder by using the StopConfigurationRecorder action.
     *
     * @error NoSuchDeliveryChannelException   
     * @error LastDeliveryChannelDeleteFailedException   
     */
    deleteDeliveryChannel(params: ConfigService.DeleteDeliveryChannelRequest, callback?: (err: ConfigService.NoSuchDeliveryChannelException | ConfigService.LastDeliveryChannelDeleteFailedException | any, data: any) => void): Request<any, ConfigService.NoSuchDeliveryChannelException | ConfigService.LastDeliveryChannelDeleteFailedException | any>;
    /**
     * Deletes the evaluation results for the specified Config rule. You can specify
one Config rule per request. After you delete the evaluation results, you can
call the StartConfigRulesEvaluation API to start evaluating your AWS resources
against the rule.
     *
     * @error NoSuchConfigRuleException   
     * @error ResourceInUseException   
     */
    deleteEvaluationResults(params: ConfigService.DeleteEvaluationResultsRequest, callback?: (err: ConfigService.NoSuchConfigRuleException | ConfigService.ResourceInUseException | any, data: ConfigService.DeleteEvaluationResultsResponse | any) => void): Request<ConfigService.DeleteEvaluationResultsResponse | any, ConfigService.NoSuchConfigRuleException | ConfigService.ResourceInUseException | any>;
    /**
     * Schedules delivery of a configuration snapshot to the Amazon S3 bucket in the
specified delivery channel. After the delivery has started, AWS Config sends
following notifications using an Amazon SNS topic that you have specified.

 &amp;#42; Notification of starting the delivery.
 &amp;#42; Notification of delivery completed, if the delivery was successfully
   completed.
 &amp;#42; Notification of delivery failure, if the delivery failed to complete.
     *
     * @error NoSuchDeliveryChannelException   
     * @error NoAvailableConfigurationRecorderException   
     * @error NoRunningConfigurationRecorderException   
     */
    deliverConfigSnapshot(params: ConfigService.DeliverConfigSnapshotRequest, callback?: (err: ConfigService.NoSuchDeliveryChannelException | ConfigService.NoAvailableConfigurationRecorderException | ConfigService.NoRunningConfigurationRecorderException | any, data: ConfigService.DeliverConfigSnapshotResponse | any) => void): Request<ConfigService.DeliverConfigSnapshotResponse | any, ConfigService.NoSuchDeliveryChannelException | ConfigService.NoAvailableConfigurationRecorderException | ConfigService.NoRunningConfigurationRecorderException | any>;
    /**
     * Indicates whether the specified AWS Config rules are compliant. If a rule is
noncompliant, this action returns the number of AWS resources that do not comply
with the rule.

A rule is compliant if all of the evaluated resources comply with it, and it is
noncompliant if any of these resources do not comply. 

If AWS Config has no current evaluation results for the rule, it returns 
INSUFFICIENT_DATA. This result might indicate one of the following conditions:

 &amp;#42; AWS Config has never invoked an evaluation for the rule. To check whether it
   has, use the DescribeConfigRuleEvaluationStatus action to get the 
   LastSuccessfulInvocationTime and LastFailedInvocationTime.
 &amp;#42; The rule&#x27;s AWS Lambda function is failing to send evaluation results to AWS
   Config. Verify that the role that you assigned to your configuration recorder
   includes the config:PutEvaluations permission. If the rule is a custom rule,
   verify that the AWS Lambda execution role includes the config:PutEvaluations 
   permission.
 &amp;#42; The rule&#x27;s AWS Lambda function has returned NOT_APPLICABLE for all evaluation
   results. This can occur if the resources were deleted or removed from the
   rule&#x27;s scope.
     *
     * @error InvalidParameterValueException   
     * @error NoSuchConfigRuleException   
     */
    describeComplianceByConfigRule(params: ConfigService.DescribeComplianceByConfigRuleRequest, callback?: (err: ConfigService.InvalidParameterValueException | ConfigService.NoSuchConfigRuleException | any, data: ConfigService.DescribeComplianceByConfigRuleResponse | any) => void): Request<ConfigService.DescribeComplianceByConfigRuleResponse | any, ConfigService.InvalidParameterValueException | ConfigService.NoSuchConfigRuleException | any>;
    /**
     * Indicates whether the specified AWS resources are compliant. If a resource is
noncompliant, this action returns the number of AWS Config rules that the
resource does not comply with. 

A resource is compliant if it complies with all the AWS Config rules that
evaluate it. It is noncompliant if it does not comply with one or more of these
rules.

If AWS Config has no current evaluation results for the resource, it returns 
INSUFFICIENT_DATA. This result might indicate one of the following conditions
about the rules that evaluate the resource:

 &amp;#42; AWS Config has never invoked an evaluation for the rule. To check whether it
   has, use the DescribeConfigRuleEvaluationStatus action to get the 
   LastSuccessfulInvocationTime and LastFailedInvocationTime.
 &amp;#42; The rule&#x27;s AWS Lambda function is failing to send evaluation results to AWS
   Config. Verify that the role that you assigned to your configuration recorder
   includes the config:PutEvaluations permission. If the rule is a custom rule,
   verify that the AWS Lambda execution role includes the config:PutEvaluations 
   permission.
 &amp;#42; The rule&#x27;s AWS Lambda function has returned NOT_APPLICABLE for all evaluation
   results. This can occur if the resources were deleted or removed from the
   rule&#x27;s scope.
     *
     * @error InvalidParameterValueException   
     * @error InvalidNextTokenException   
     */
    describeComplianceByResource(params: ConfigService.DescribeComplianceByResourceRequest, callback?: (err: ConfigService.InvalidParameterValueException | ConfigService.InvalidNextTokenException | any, data: ConfigService.DescribeComplianceByResourceResponse | any) => void): Request<ConfigService.DescribeComplianceByResourceResponse | any, ConfigService.InvalidParameterValueException | ConfigService.InvalidNextTokenException | any>;
    /**
     * Returns status information for each of your AWS managed Config rules. The status
includes information such as the last time AWS Config invoked the rule, the last
time AWS Config failed to invoke the rule, and the related error for the last
failure.
     *
     * @error NoSuchConfigRuleException   
     */
    describeConfigRuleEvaluationStatus(params: ConfigService.DescribeConfigRuleEvaluationStatusRequest, callback?: (err: ConfigService.NoSuchConfigRuleException | any, data: ConfigService.DescribeConfigRuleEvaluationStatusResponse | any) => void): Request<ConfigService.DescribeConfigRuleEvaluationStatusResponse | any, ConfigService.NoSuchConfigRuleException | any>;
    /**
     * Returns details about your AWS Config rules.
     *
     * @error NoSuchConfigRuleException   
     */
    describeConfigRules(params: ConfigService.DescribeConfigRulesRequest, callback?: (err: ConfigService.NoSuchConfigRuleException | any, data: ConfigService.DescribeConfigRulesResponse | any) => void): Request<ConfigService.DescribeConfigRulesResponse | any, ConfigService.NoSuchConfigRuleException | any>;
    /**
     * Returns the current status of the specified configuration recorder. If a
configuration recorder is not specified, this action returns the status of all
configuration recorder associated with the account.

Currently, you can specify only one configuration recorder per account.
     *
     * @error NoSuchConfigurationRecorderException   
     */
    describeConfigurationRecorderStatus(params: ConfigService.DescribeConfigurationRecorderStatusRequest, callback?: (err: ConfigService.NoSuchConfigurationRecorderException | any, data: ConfigService.DescribeConfigurationRecorderStatusResponse | any) => void): Request<ConfigService.DescribeConfigurationRecorderStatusResponse | any, ConfigService.NoSuchConfigurationRecorderException | any>;
    /**
     * Returns the name of one or more specified configuration recorders. If the
recorder name is not specified, this action returns the names of all the
configuration recorders associated with the account. 

Currently, you can specify only one configuration recorder per account.
     *
     * @error NoSuchConfigurationRecorderException   
     */
    describeConfigurationRecorders(params: ConfigService.DescribeConfigurationRecordersRequest, callback?: (err: ConfigService.NoSuchConfigurationRecorderException | any, data: ConfigService.DescribeConfigurationRecordersResponse | any) => void): Request<ConfigService.DescribeConfigurationRecordersResponse | any, ConfigService.NoSuchConfigurationRecorderException | any>;
    /**
     * Returns the current status of the specified delivery channel. If a delivery
channel is not specified, this action returns the current status of all delivery
channels associated with the account. 

Currently, you can specify only one delivery channel per account.
     *
     * @error NoSuchDeliveryChannelException   
     */
    describeDeliveryChannelStatus(params: ConfigService.DescribeDeliveryChannelStatusRequest, callback?: (err: ConfigService.NoSuchDeliveryChannelException | any, data: ConfigService.DescribeDeliveryChannelStatusResponse | any) => void): Request<ConfigService.DescribeDeliveryChannelStatusResponse | any, ConfigService.NoSuchDeliveryChannelException | any>;
    /**
     * Returns details about the specified delivery channel. If a delivery channel is
not specified, this action returns the details of all delivery channels
associated with the account. 

Currently, you can specify only one delivery channel per account.
     *
     * @error NoSuchDeliveryChannelException   
     */
    describeDeliveryChannels(params: ConfigService.DescribeDeliveryChannelsRequest, callback?: (err: ConfigService.NoSuchDeliveryChannelException | any, data: ConfigService.DescribeDeliveryChannelsResponse | any) => void): Request<ConfigService.DescribeDeliveryChannelsResponse | any, ConfigService.NoSuchDeliveryChannelException | any>;
    /**
     * Returns the evaluation results for the specified AWS Config rule. The results
indicate which AWS resources were evaluated by the rule, when each resource was
last evaluated, and whether each resource complies with the rule.
     *
     * @error InvalidParameterValueException   
     * @error InvalidNextTokenException   
     * @error NoSuchConfigRuleException   
     */
    getComplianceDetailsByConfigRule(params: ConfigService.GetComplianceDetailsByConfigRuleRequest, callback?: (err: ConfigService.InvalidParameterValueException | ConfigService.InvalidNextTokenException | ConfigService.NoSuchConfigRuleException | any, data: ConfigService.GetComplianceDetailsByConfigRuleResponse | any) => void): Request<ConfigService.GetComplianceDetailsByConfigRuleResponse | any, ConfigService.InvalidParameterValueException | ConfigService.InvalidNextTokenException | ConfigService.NoSuchConfigRuleException | any>;
    /**
     * Returns the evaluation results for the specified AWS resource. The results
indicate which AWS Config rules were used to evaluate the resource, when each
rule was last used, and whether the resource complies with each rule.
     *
     * @error InvalidParameterValueException   
     */
    getComplianceDetailsByResource(params: ConfigService.GetComplianceDetailsByResourceRequest, callback?: (err: ConfigService.InvalidParameterValueException | any, data: ConfigService.GetComplianceDetailsByResourceResponse | any) => void): Request<ConfigService.GetComplianceDetailsByResourceResponse | any, ConfigService.InvalidParameterValueException | any>;
    /**
     * Returns the number of AWS Config rules that are compliant and noncompliant, up
to a maximum of 25 for each.
     *
     */
    getComplianceSummaryByConfigRule(callback?: (err: any, data: ConfigService.GetComplianceSummaryByConfigRuleResponse | any) => void): Request<ConfigService.GetComplianceSummaryByConfigRuleResponse | any, any>;
    /**
     * Returns the number of resources that are compliant and the number that are
noncompliant. You can specify one or more resource types to get these numbers
for each resource type. The maximum number returned is 100.
     *
     * @error InvalidParameterValueException   
     */
    getComplianceSummaryByResourceType(params: ConfigService.GetComplianceSummaryByResourceTypeRequest, callback?: (err: ConfigService.InvalidParameterValueException | any, data: ConfigService.GetComplianceSummaryByResourceTypeResponse | any) => void): Request<ConfigService.GetComplianceSummaryByResourceTypeResponse | any, ConfigService.InvalidParameterValueException | any>;
    /**
     * Returns a list of configuration items for the specified resource. The list
contains details about each state of the resource during the specified time
interval.

The response is paginated, and by default, AWS Config returns a limit of 10
configuration items per page. You can customize this number with the limit 
parameter. The response includes a nextToken string, and to get the next page of
results, run the request again and enter this string for the nextToken 
parameter.

Each call to the API is limited to span a duration of seven days. It is likely
that the number of records returned is smaller than the specified limit. In such
cases, you can make another call, using the nextToken.
     *
     * @error ValidationException   
     * @error InvalidTimeRangeException   
     * @error InvalidLimitException   
     * @error InvalidNextTokenException   
     * @error NoAvailableConfigurationRecorderException   
     * @error ResourceNotDiscoveredException   
     */
    getResourceConfigHistory(params: ConfigService.GetResourceConfigHistoryRequest, callback?: (err: ConfigService.ValidationException | ConfigService.InvalidTimeRangeException | ConfigService.InvalidLimitException | ConfigService.InvalidNextTokenException | ConfigService.NoAvailableConfigurationRecorderException | ConfigService.ResourceNotDiscoveredException | any, data: ConfigService.GetResourceConfigHistoryResponse | any) => void): Request<ConfigService.GetResourceConfigHistoryResponse | any, ConfigService.ValidationException | ConfigService.InvalidTimeRangeException | ConfigService.InvalidLimitException | ConfigService.InvalidNextTokenException | ConfigService.NoAvailableConfigurationRecorderException | ConfigService.ResourceNotDiscoveredException | any>;
    /**
     * Accepts a resource type and returns a list of resource identifiers for the
resources of that type. A resource identifier includes the resource type, ID,
and (if available) the custom resource name. The results consist of resources
that AWS Config has discovered, including those that AWS Config is not currently
recording. You can narrow the results to include only resources that have
specific resource IDs or a resource name.

You can specify either resource IDs or a resource name but not both in the same
request.

The response is paginated, and by default AWS Config lists 100 resource
identifiers on each page. You can customize this number with the limit 
parameter. The response includes a nextToken string, and to get the next page of
results, run the request again and enter this string for the nextToken 
parameter.
     *
     * @error ValidationException   
     * @error InvalidLimitException   
     * @error InvalidNextTokenException   
     * @error NoAvailableConfigurationRecorderException   
     */
    listDiscoveredResources(params: ConfigService.ListDiscoveredResourcesRequest, callback?: (err: ConfigService.ValidationException | ConfigService.InvalidLimitException | ConfigService.InvalidNextTokenException | ConfigService.NoAvailableConfigurationRecorderException | any, data: ConfigService.ListDiscoveredResourcesResponse | any) => void): Request<ConfigService.ListDiscoveredResourcesResponse | any, ConfigService.ValidationException | ConfigService.InvalidLimitException | ConfigService.InvalidNextTokenException | ConfigService.NoAvailableConfigurationRecorderException | any>;
    /**
     * Adds or updates an AWS Config rule for evaluating whether your AWS resources
comply with your desired configurations. 

You can use this action for custom Config rules and AWS managed Config rules. A
custom Config rule is a rule that you develop and maintain. An AWS managed
Config rule is a customizable, predefined rule that AWS Config provides.

If you are adding a new custom Config rule, you must first create the AWS Lambda
function that the rule invokes to evaluate your resources. When you use the 
PutConfigRule action to add the rule to AWS Config, you must specify the Amazon
Resource Name (ARN) that AWS Lambda assigns to the function. Specify the ARN for
the SourceIdentifier key. This key is part of the Source object, which is part
of the ConfigRule object. 

If you are adding a new AWS managed Config rule, specify the rule&#x27;s identifier
for the SourceIdentifier key. To reference AWS managed Config rule identifiers,
see Using AWS Managed Config Rules
[http://docs.aws.amazon.com/config/latest/developerguide/evaluate-config_use-managed-rules.html]
.

For any new rule that you add, specify the ConfigRuleName in the ConfigRule 
object. Do not specify the ConfigRuleArn or the ConfigRuleId. These values are
generated by AWS Config for new rules.

If you are updating a rule that you have added previously, specify the rule&#x27;s 
ConfigRuleName, ConfigRuleId, or ConfigRuleArn in the ConfigRule data type that
you use in this request.

The maximum number of rules that AWS Config supports is 25.

For more information about developing and using AWS Config rules, see Evaluating
AWS Resource Configurations with AWS Config
[http://docs.aws.amazon.com/config/latest/developerguide/evaluate-config.html] 
in the AWS Config Developer Guide.
     *
     * @error InvalidParameterValueException   
     * @error MaxNumberOfConfigRulesExceededException   
     * @error ResourceInUseException   
     * @error InsufficientPermissionsException   
     * @error NoAvailableConfigurationRecorderException   
     */
    putConfigRule(params: ConfigService.PutConfigRuleRequest, callback?: (err: ConfigService.InvalidParameterValueException | ConfigService.MaxNumberOfConfigRulesExceededException | ConfigService.ResourceInUseException | ConfigService.InsufficientPermissionsException | ConfigService.NoAvailableConfigurationRecorderException | any, data: any) => void): Request<any, ConfigService.InvalidParameterValueException | ConfigService.MaxNumberOfConfigRulesExceededException | ConfigService.ResourceInUseException | ConfigService.InsufficientPermissionsException | ConfigService.NoAvailableConfigurationRecorderException | any>;
    /**
     * Creates a new configuration recorder to record the selected resource
configurations.

You can use this action to change the role roleARN and/or the recordingGroup of
an existing recorder. To change the role, call the action on the existing
configuration recorder and specify a role.

Currently, you can specify only one configuration recorder per account.

If ConfigurationRecorder does not have the recordingGroup parameter specified,
the default is to record all supported resource types.
     *
     * @error MaxNumberOfConfigurationRecordersExceededException   
     * @error InvalidConfigurationRecorderNameException   
     * @error InvalidRoleException   
     * @error InvalidRecordingGroupException   
     */
    putConfigurationRecorder(params: ConfigService.PutConfigurationRecorderRequest, callback?: (err: ConfigService.MaxNumberOfConfigurationRecordersExceededException | ConfigService.InvalidConfigurationRecorderNameException | ConfigService.InvalidRoleException | ConfigService.InvalidRecordingGroupException | any, data: any) => void): Request<any, ConfigService.MaxNumberOfConfigurationRecordersExceededException | ConfigService.InvalidConfigurationRecorderNameException | ConfigService.InvalidRoleException | ConfigService.InvalidRecordingGroupException | any>;
    /**
     * Creates a delivery channel object to deliver configuration information to an
Amazon S3 bucket and Amazon SNS topic.

Before you can create a delivery channel, you must create a configuration
recorder.

You can use this action to change the Amazon S3 bucket or an Amazon SNS topic of
the existing delivery channel. To change the Amazon S3 bucket or an Amazon SNS
topic, call this action and specify the changed values for the S3 bucket and the
SNS topic. If you specify a different value for either the S3 bucket or the SNS
topic, this action will keep the existing value for the parameter that is not
changed.

You can have only one delivery channel per AWS account.
     *
     * @error MaxNumberOfDeliveryChannelsExceededException   
     * @error NoAvailableConfigurationRecorderException   
     * @error InvalidDeliveryChannelNameException   
     * @error NoSuchBucketException   
     * @error InvalidS3KeyPrefixException   
     * @error InvalidSNSTopicARNException   
     * @error InsufficientDeliveryPolicyException   
     */
    putDeliveryChannel(params: ConfigService.PutDeliveryChannelRequest, callback?: (err: ConfigService.MaxNumberOfDeliveryChannelsExceededException | ConfigService.NoAvailableConfigurationRecorderException | ConfigService.InvalidDeliveryChannelNameException | ConfigService.NoSuchBucketException | ConfigService.InvalidS3KeyPrefixException | ConfigService.InvalidSNSTopicARNException | ConfigService.InsufficientDeliveryPolicyException | any, data: any) => void): Request<any, ConfigService.MaxNumberOfDeliveryChannelsExceededException | ConfigService.NoAvailableConfigurationRecorderException | ConfigService.InvalidDeliveryChannelNameException | ConfigService.NoSuchBucketException | ConfigService.InvalidS3KeyPrefixException | ConfigService.InvalidSNSTopicARNException | ConfigService.InsufficientDeliveryPolicyException | any>;
    /**
     * Used by an AWS Lambda function to deliver evaluation results to AWS Config. This
action is required in every AWS Lambda function that is invoked by an AWS Config
rule.
     *
     * @error InvalidParameterValueException   
     * @error InvalidResultTokenException   
     * @error NoSuchConfigRuleException   
     */
    putEvaluations(params: ConfigService.PutEvaluationsRequest, callback?: (err: ConfigService.InvalidParameterValueException | ConfigService.InvalidResultTokenException | ConfigService.NoSuchConfigRuleException | any, data: ConfigService.PutEvaluationsResponse | any) => void): Request<ConfigService.PutEvaluationsResponse | any, ConfigService.InvalidParameterValueException | ConfigService.InvalidResultTokenException | ConfigService.NoSuchConfigRuleException | any>;
    /**
     * Evaluates your resources against the specified Config rules. You can specify up
to 25 Config rules per request.

An existing StartConfigRulesEvaluation call must complete for the specified
rules before you can call the API again. If you chose to have AWS Config stream
to an Amazon SNS topic, you will receive a ConfigRuleEvaluationStarted 
notification when the evaluation starts.

You don&#x27;t need to call the StartConfigRulesEvaluation API to run an evaluation
for a new rule. When you create a new rule, AWS Config automatically evaluates
your resources against the rule. 

The StartConfigRulesEvaluation API is useful if you want to run on-demand
evaluations, such as the following example:

 1. You have a custom rule that evaluates your IAM resources every 24 hours.
    
    
 2. You update your Lambda function to add additional conditions to your rule.
    
    
 3. Instead of waiting for the next periodic evaluation, you call the 
    StartConfigRulesEvaluation API.
    
    
 4. AWS Config invokes your Lambda function and evaluates your IAM resources.
    
    
 5. Your custom rule will still run periodic evaluations every 24 hours.
     *
     * @error NoSuchConfigRuleException   
     * @error LimitExceededException   
     * @error ResourceInUseException   
     * @error InvalidParameterValueException   
     */
    startConfigRulesEvaluation(params: ConfigService.StartConfigRulesEvaluationRequest, callback?: (err: ConfigService.NoSuchConfigRuleException | ConfigService.LimitExceededException | ConfigService.ResourceInUseException | ConfigService.InvalidParameterValueException | any, data: ConfigService.StartConfigRulesEvaluationResponse | any) => void): Request<ConfigService.StartConfigRulesEvaluationResponse | any, ConfigService.NoSuchConfigRuleException | ConfigService.LimitExceededException | ConfigService.ResourceInUseException | ConfigService.InvalidParameterValueException | any>;
    /**
     * Starts recording configurations of the AWS resources you have selected to record
in your AWS account.

You must have created at least one delivery channel to successfully start the
configuration recorder.
     *
     * @error NoSuchConfigurationRecorderException   
     * @error NoAvailableDeliveryChannelException   
     */
    startConfigurationRecorder(params: ConfigService.StartConfigurationRecorderRequest, callback?: (err: ConfigService.NoSuchConfigurationRecorderException | ConfigService.NoAvailableDeliveryChannelException | any, data: any) => void): Request<any, ConfigService.NoSuchConfigurationRecorderException | ConfigService.NoAvailableDeliveryChannelException | any>;
    /**
     * Stops recording configurations of the AWS resources you have selected to record
in your AWS account.
     *
     * @error NoSuchConfigurationRecorderException   
     */
    stopConfigurationRecorder(params: ConfigService.StopConfigurationRecorderRequest, callback?: (err: ConfigService.NoSuchConfigurationRecorderException | any, data: any) => void): Request<any, ConfigService.NoSuchConfigurationRecorderException | any>;

  }

  export module ConfigService {

    export type ARN = string;

    export type AccountId = string;

    export type AllSupported = boolean;

    export type AvailabilityZone = string;

    export type AwsRegion = string;

    export type Boolean = boolean;

    export type ChannelName = string;

    export type ChronologicalOrder = string;

    export type ComplianceByConfigRules = ComplianceByConfigRule[];

    export type ComplianceByResources = ComplianceByResource[];

    export type ComplianceResourceTypes = StringWithCharLimit256[];

    export type ComplianceSummariesByResourceType = ComplianceSummaryByResourceType[];

    export type ComplianceType = string;

    export type ComplianceTypes = ComplianceType[];

    export type ConfigRuleEvaluationStatusList = ConfigRuleEvaluationStatus[];

    export type ConfigRuleNames = StringWithCharLimit64[];

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

    export type EmptiableStringWithCharLimit256 = string;

    export type EvaluationResults = EvaluationResult[];

    export type Evaluations = Evaluation[];

    export type EventSource = string;

    export type IncludeGlobalResourceTypes = boolean;

    export type Integer = number;

    export type LaterTime = number;

    export type Limit = number;

    export type MaximumExecutionFrequency = string;

    export type MessageType = string;

    export type Name = string;

    export type NextToken = string;

    export type OrderingTimestamp = number;

    export type Owner = string;

    export type RecorderName = string;

    export type RecorderStatus = string;

    export type ReevaluateConfigRuleNames = StringWithCharLimit64[];

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

    export type ResourceTypes = StringWithCharLimit256[];

    export type SourceDetails = SourceDetail[];

    export type String = string;

    export type StringWithCharLimit128 = string;

    export type StringWithCharLimit256 = string;

    export type StringWithCharLimit64 = string;

    export type SupplementaryConfiguration = { [key: string]: SupplementaryConfigurationValue };

    export type SupplementaryConfigurationName = string;

    export type SupplementaryConfigurationValue = string;

    export type Tags = { [key: string]: Value };

    export type Value = string;

    export type Version = string;

    export interface Compliance {
      /** Indicates whether an AWS resource or AWS Config rule is compliant.

A resource is compliant if it complies with all of the AWS Config rules that
evaluate it, and it is noncompliant if it does not comply with one or more of
these rules.

A rule is compliant if all of the resources that the rule evaluates comply with
it, and it is noncompliant if any of these resources do not comply.

AWS Config returns the INSUFFICIENT_DATA value when no evaluation results are
available for the AWS resource or Config rule.

For the Compliance data type, AWS Config supports only COMPLIANT, NON_COMPLIANT,
and INSUFFICIENT_DATA values. AWS Config does not support the NOT_APPLICABLE 
value for the Compliance data type. **/
      ComplianceType?: ComplianceType;
      /** The number of AWS resources or AWS Config rules that cause a result of 
NON_COMPLIANT, up to a maximum number. **/
      ComplianceContributorCount?: ComplianceContributorCount;
    }
    export interface ComplianceByConfigRule {
      /** The name of the AWS Config rule. **/
      ConfigRuleName?: StringWithCharLimit64;
      /** Indicates whether the AWS Config rule is compliant. **/
      Compliance?: Compliance;
    }
    export interface ComplianceByResource {
      /** The type of the AWS resource that was evaluated. **/
      ResourceType?: StringWithCharLimit256;
      /** The ID of the AWS resource that was evaluated. **/
      ResourceId?: StringWithCharLimit256;
      /** Indicates whether the AWS resource complies with all of the AWS Config rules
that evaluated it. **/
      Compliance?: Compliance;
    }
    export interface ComplianceContributorCount {
      /** The number of AWS resources or AWS Config rules responsible for the current
compliance of the item. **/
      CappedCount?: Integer;
      /** Indicates whether the maximum count is reached. **/
      CapExceeded?: Boolean;
    }
    export interface ComplianceSummary {
      /** The number of AWS Config rules or AWS resources that are compliant, up to a
maximum of 25 for rules and 100 for resources. **/
      CompliantResourceCount?: ComplianceContributorCount;
      /** The number of AWS Config rules or AWS resources that are noncompliant, up to a
maximum of 25 for rules and 100 for resources. **/
      NonCompliantResourceCount?: ComplianceContributorCount;
      /** The time that AWS Config created the compliance summary. **/
      ComplianceSummaryTimestamp?: Date;
    }
    export interface ComplianceSummaryByResourceType {
      /** The type of AWS resource. **/
      ResourceType?: StringWithCharLimit256;
      /** The number of AWS resources that are compliant or noncompliant, up to a maximum
of 100 for each compliance. **/
      ComplianceSummary?: ComplianceSummary;
    }
    export interface ConfigExportDeliveryInfo {
      /** Status of the last attempted delivery. **/
      lastStatus?: DeliveryStatus;
      /** The error code from the last attempted delivery. **/
      lastErrorCode?: String;
      /** The error message from the last attempted delivery. **/
      lastErrorMessage?: String;
      /** The time of the last attempted delivery. **/
      lastAttemptTime?: Date;
      /** The time of the last successful delivery. **/
      lastSuccessfulTime?: Date;
      /** The time that the next delivery occurs. **/
      nextDeliveryTime?: Date;
    }
    export interface ConfigRule {
      /** The name that you assign to the AWS Config rule. The name is required if you are
adding a new rule. **/
      ConfigRuleName?: StringWithCharLimit64;
      /** The Amazon Resource Name (ARN) of the AWS Config rule. **/
      ConfigRuleArn?: String;
      /** The ID of the AWS Config rule. **/
      ConfigRuleId?: String;
      /** The description that you provide for the AWS Config rule. **/
      Description?: EmptiableStringWithCharLimit256;
      /** Defines which resources can trigger an evaluation for the rule. The scope can
include one or more resource types, a combination of one resource type and one
resource ID, or a combination of a tag key and value. Specify a scope to
constrain the resources that can trigger an evaluation for the rule. If you do
not specify a scope, evaluations are triggered when any resource in the
recording group changes. **/
      Scope?: Scope;
      /** Provides the rule owner (AWS or customer), the rule identifier, and the
notifications that cause the function to evaluate your AWS resources. **/
      Source: Source;
      /** A string in JSON format that is passed to the AWS Config rule Lambda function. **/
      InputParameters?: StringWithCharLimit256;
      /** The maximum frequency with which AWS Config runs evaluations for a rule. You can
specify a value for MaximumExecutionFrequency when: 

&amp;#42;  You are using an AWS managed rule that is triggered at a periodic frequency.
 
 
&amp;#42;  Your custom rule is triggered when AWS Config delivers the configuration
 snapshot.
 
 

For more information, see ConfigSnapshotDeliveryProperties. **/
      MaximumExecutionFrequency?: MaximumExecutionFrequency;
      /** Indicates whether the AWS Config rule is active or is currently being deleted by
AWS Config. It can also indicate the evaluation status for the Config rule.

AWS Config sets the state of the rule to EVALUATING temporarily after you use
the StartConfigRulesEvaluation request to evaluate your resources against the
Config rule.

AWS Config sets the state of the rule to DELETING_RESULTS temporarily after you
use the DeleteEvaluationResults request to delete the current evaluation results
for the Config rule.

AWS Config sets the state of a rule to DELETING temporarily after you use the 
DeleteConfigRule request to delete the rule. After AWS Config deletes the rule,
the rule and all of its evaluations are erased and are no longer available. **/
      ConfigRuleState?: ConfigRuleState;
    }
    export interface ConfigRuleEvaluationStatus {
      /** The name of the AWS Config rule. **/
      ConfigRuleName?: StringWithCharLimit64;
      /** The Amazon Resource Name (ARN) of the AWS Config rule. **/
      ConfigRuleArn?: String;
      /** The ID of the AWS Config rule. **/
      ConfigRuleId?: String;
      /** The time that AWS Config last successfully invoked the AWS Config rule to
evaluate your AWS resources. **/
      LastSuccessfulInvocationTime?: Date;
      /** The time that AWS Config last failed to invoke the AWS Config rule to evaluate
your AWS resources. **/
      LastFailedInvocationTime?: Date;
      /** The time that AWS Config last successfully evaluated your AWS resources against
the rule. **/
      LastSuccessfulEvaluationTime?: Date;
      /** The time that AWS Config last failed to evaluate your AWS resources against the
rule. **/
      LastFailedEvaluationTime?: Date;
      /** The time that you first activated the AWS Config rule. **/
      FirstActivatedTime?: Date;
      /** The error code that AWS Config returned when the rule last failed. **/
      LastErrorCode?: String;
      /** The error message that AWS Config returned when the rule last failed. **/
      LastErrorMessage?: String;
      /** Indicates whether AWS Config has evaluated your resources against the rule at
least once.

&amp;#42; true - AWS Config has evaluated your AWS resources against the rule at least
 once.
&amp;#42; false - AWS Config has not once finished evaluating your AWS resources
 against the rule. **/
      FirstEvaluationStarted?: Boolean;
    }
    export interface ConfigSnapshotDeliveryProperties {
      /** The frequency with which AWS Config delivers configuration snapshots. **/
      deliveryFrequency?: MaximumExecutionFrequency;
    }
    export interface ConfigStreamDeliveryInfo {
      /** Status of the last attempted delivery.

Note Providing an SNS topic on a DeliveryChannel
[http://docs.aws.amazon.com/config/latest/APIReference/API_DeliveryChannel.html] 
for AWS Config is optional. If the SNS delivery is turned off, the last status
will be Not_Applicable. **/
      lastStatus?: DeliveryStatus;
      /** The error code from the last attempted delivery. **/
      lastErrorCode?: String;
      /** The error message from the last attempted delivery. **/
      lastErrorMessage?: String;
      /** The time from the last status change. **/
      lastStatusChangeTime?: Date;
    }
    export interface ConfigurationItem {
      /** The version number of the resource configuration. **/
      version?: Version;
      /** The 12 digit AWS account ID associated with the resource. **/
      accountId?: AccountId;
      /** The time when the configuration recording was initiated. **/
      configurationItemCaptureTime?: ConfigurationItemCaptureTime;
      /** The configuration item status. **/
      configurationItemStatus?: ConfigurationItemStatus;
      /** An identifier that indicates the ordering of the configuration items of a
resource. **/
      configurationStateId?: ConfigurationStateId;
      /** Unique MD5 hash that represents the configuration item&#x27;s state.

You can use MD5 hash to compare the states of two or more configuration items
that are associated with the same resource. **/
      configurationItemMD5Hash?: ConfigurationItemMD5Hash;
      /** The Amazon Resource Name (ARN) of the resource. **/
      arn?: ARN;
      /** The type of AWS resource. **/
      resourceType?: ResourceType;
      /** The ID of the resource (for example., sg-xxxxxx). **/
      resourceId?: ResourceId;
      /** The custom name of the resource, if available. **/
      resourceName?: ResourceName;
      /** The region where the resource resides. **/
      awsRegion?: AwsRegion;
      /** The Availability Zone associated with the resource. **/
      availabilityZone?: AvailabilityZone;
      /** The time stamp when the resource was created. **/
      resourceCreationTime?: ResourceCreationTime;
      /** A mapping of key value tags associated with the resource. **/
      tags?: Tags;
      /** A list of CloudTrail event IDs.

A populated field indicates that the current configuration was initiated by the
events recorded in the CloudTrail log. For more information about CloudTrail,
see What is AWS CloudTrail?
[http://docs.aws.amazon.com/awscloudtrail/latest/userguide/what_is_cloud_trail_top_level.html]
.

An empty field indicates that the current configuration was not initiated by any
event. **/
      relatedEvents?: RelatedEventList;
      /** A list of related AWS resources. **/
      relationships?: RelationshipList;
      /** The description of the resource configuration. **/
      configuration?: Configuration;
      /** Configuration attributes that AWS Config returns for certain resource types to
supplement the information returned for the configuration parameter. **/
      supplementaryConfiguration?: SupplementaryConfiguration;
    }
    export interface ConfigurationRecorder {
      /** The name of the recorder. By default, AWS Config automatically assigns the name
&quot;default&quot; when creating the configuration recorder. You cannot change the
assigned name. **/
      name?: RecorderName;
      /** Amazon Resource Name (ARN) of the IAM role used to describe the AWS resources
associated with the account. **/
      roleARN?: String;
      /** Specifies the types of AWS resource for which AWS Config records configuration
changes. **/
      recordingGroup?: RecordingGroup;
    }
    export interface ConfigurationRecorderStatus {
      /** The name of the configuration recorder. **/
      name?: String;
      /** The time the recorder was last started. **/
      lastStartTime?: Date;
      /** The time the recorder was last stopped. **/
      lastStopTime?: Date;
      /** Specifies whether the recorder is currently recording or not. **/
      recording?: Boolean;
      /** The last (previous) status of the recorder. **/
      lastStatus?: RecorderStatus;
      /** The error code indicating that the recording failed. **/
      lastErrorCode?: String;
      /** The message indicating that the recording failed due to an error. **/
      lastErrorMessage?: String;
      /** The time when the status was last changed. **/
      lastStatusChangeTime?: Date;
    }
    export interface DeleteConfigRuleRequest {
      /** The name of the AWS Config rule that you want to delete. **/
      ConfigRuleName: StringWithCharLimit64;
    }
    export interface DeleteConfigurationRecorderRequest {
      /** The name of the configuration recorder to be deleted. You can retrieve the name
of your configuration recorder by using the DescribeConfigurationRecorders 
action. **/
      ConfigurationRecorderName: RecorderName;
    }
    export interface DeleteDeliveryChannelRequest {
      /** The name of the delivery channel to delete. **/
      DeliveryChannelName: ChannelName;
    }
    export interface DeleteEvaluationResultsRequest {
      /** The name of the Config rule for which you want to delete the evaluation results. **/
      ConfigRuleName: StringWithCharLimit64;
    }
    export interface DeleteEvaluationResultsResponse {
    }
    export interface DeliverConfigSnapshotRequest {
      /** The name of the delivery channel through which the snapshot is delivered. **/
      deliveryChannelName: ChannelName;
    }
    export interface DeliverConfigSnapshotResponse {
      /** The ID of the snapshot that is being created. **/
      configSnapshotId?: String;
    }
    export interface DeliveryChannel {
      /** The name of the delivery channel. By default, AWS Config assigns the name
&quot;default&quot; when creating the delivery channel. To change the delivery channel
name, you must use the DeleteDeliveryChannel action to delete your current
delivery channel, and then you must use the PutDeliveryChannel command to create
a delivery channel that has the desired name. **/
      name?: ChannelName;
      /** The name of the Amazon S3 bucket to which AWS Config delivers configuration
snapshots and configuration history files.

If you specify a bucket that belongs to another AWS account, that bucket must
have policies that grant access permissions to AWS Config. For more information,
see Permissions for the Amazon S3 Bucket
[http://docs.aws.amazon.com/config/latest/developerguide/s3-bucket-policy.html] 
in the AWS Config Developer Guide. **/
      s3BucketName?: String;
      /** The prefix for the specified Amazon S3 bucket. **/
      s3KeyPrefix?: String;
      /** The Amazon Resource Name (ARN) of the Amazon SNS topic to which AWS Config sends
notifications about configuration changes.

If you choose a topic from another account, the topic must have policies that
grant access permissions to AWS Config. For more information, see Permissions
for the Amazon SNS Topic
[http://docs.aws.amazon.com/config/latest/developerguide/sns-topic-policy.html] 
in the AWS Config Developer Guide. **/
      snsTopicARN?: String;
      configSnapshotDeliveryProperties?: ConfigSnapshotDeliveryProperties;
    }
    export interface DeliveryChannelStatus {
      /** The name of the delivery channel. **/
      name?: String;
      /** A list containing the status of the delivery of the snapshot to the specified
Amazon S3 bucket. **/
      configSnapshotDeliveryInfo?: ConfigExportDeliveryInfo;
      /** A list that contains the status of the delivery of the configuration history to
the specified Amazon S3 bucket. **/
      configHistoryDeliveryInfo?: ConfigExportDeliveryInfo;
      /** A list containing the status of the delivery of the configuration stream
notification to the specified Amazon SNS topic. **/
      configStreamDeliveryInfo?: ConfigStreamDeliveryInfo;
    }
    export interface DescribeComplianceByConfigRuleRequest {
      /** Specify one or more AWS Config rule names to filter the results by rule. **/
      ConfigRuleNames?: ConfigRuleNames;
      /** Filters the results by compliance.

The allowed values are COMPLIANT, NON_COMPLIANT, and INSUFFICIENT_DATA. **/
      ComplianceTypes?: ComplianceTypes;
      /** The nextToken string returned on a previous page that you use to get the next
page of results in a paginated response. **/
      NextToken?: String;
    }
    export interface DescribeComplianceByConfigRuleResponse {
      /** Indicates whether each of the specified AWS Config rules is compliant. **/
      ComplianceByConfigRules?: ComplianceByConfigRules;
      /** The string that you use in a subsequent request to get the next page of results
in a paginated response. **/
      NextToken?: String;
    }
    export interface DescribeComplianceByResourceRequest {
      /** The types of AWS resources for which you want compliance information; for
example, AWS::EC2::Instance. For this action, you can specify that the resource
type is an AWS account by specifying AWS::::Account. **/
      ResourceType?: StringWithCharLimit256;
      /** The ID of the AWS resource for which you want compliance information. You can
specify only one resource ID. If you specify a resource ID, you must also
specify a type for ResourceType. **/
      ResourceId?: StringWithCharLimit256;
      /** Filters the results by compliance.

The allowed values are COMPLIANT, NON_COMPLIANT, and INSUFFICIENT_DATA. **/
      ComplianceTypes?: ComplianceTypes;
      /** The maximum number of evaluation results returned on each page. The default is
10. You cannot specify a limit greater than 100. If you specify 0, AWS Config
uses the default. **/
      Limit?: Limit;
      /** The nextToken string returned on a previous page that you use to get the next
page of results in a paginated response. **/
      NextToken?: NextToken;
    }
    export interface DescribeComplianceByResourceResponse {
      /** Indicates whether the specified AWS resource complies with all of the AWS Config
rules that evaluate it. **/
      ComplianceByResources?: ComplianceByResources;
      /** The string that you use in a subsequent request to get the next page of results
in a paginated response. **/
      NextToken?: NextToken;
    }
    export interface DescribeConfigRuleEvaluationStatusRequest {
      /** The name of the AWS managed Config rules for which you want status information.
If you do not specify any names, AWS Config returns status information for all
AWS managed Config rules that you use. **/
      ConfigRuleNames?: ConfigRuleNames;
    }
    export interface DescribeConfigRuleEvaluationStatusResponse {
      /** Status information about your AWS managed Config rules. **/
      ConfigRulesEvaluationStatus?: ConfigRuleEvaluationStatusList;
    }
    export interface DescribeConfigRulesRequest {
      /** The names of the AWS Config rules for which you want details. If you do not
specify any names, AWS Config returns details for all your rules. **/
      ConfigRuleNames?: ConfigRuleNames;
      /** The nextToken string returned on a previous page that you use to get the next
page of results in a paginated response. **/
      NextToken?: String;
    }
    export interface DescribeConfigRulesResponse {
      /** The details about your AWS Config rules. **/
      ConfigRules?: ConfigRules;
      /** The string that you use in a subsequent request to get the next page of results
in a paginated response. **/
      NextToken?: String;
    }
    export interface DescribeConfigurationRecorderStatusRequest {
      /** The name(s) of the configuration recorder. If the name is not specified, the
action returns the current status of all the configuration recorders associated
with the account. **/
      ConfigurationRecorderNames?: ConfigurationRecorderNameList;
    }
    export interface DescribeConfigurationRecorderStatusResponse {
      /** A list that contains status of the specified recorders. **/
      ConfigurationRecordersStatus?: ConfigurationRecorderStatusList;
    }
    export interface DescribeConfigurationRecordersRequest {
      /** A list of configuration recorder names. **/
      ConfigurationRecorderNames?: ConfigurationRecorderNameList;
    }
    export interface DescribeConfigurationRecordersResponse {
      /** A list that contains the descriptions of the specified configuration recorders. **/
      ConfigurationRecorders?: ConfigurationRecorderList;
    }
    export interface DescribeDeliveryChannelStatusRequest {
      /** A list of delivery channel names. **/
      DeliveryChannelNames?: DeliveryChannelNameList;
    }
    export interface DescribeDeliveryChannelStatusResponse {
      /** A list that contains the status of a specified delivery channel. **/
      DeliveryChannelsStatus?: DeliveryChannelStatusList;
    }
    export interface DescribeDeliveryChannelsRequest {
      /** A list of delivery channel names. **/
      DeliveryChannelNames?: DeliveryChannelNameList;
    }
    export interface DescribeDeliveryChannelsResponse {
      /** A list that contains the descriptions of the specified delivery channel. **/
      DeliveryChannels?: DeliveryChannelList;
    }
    export interface Evaluation {
      /** The type of AWS resource that was evaluated. **/
      ComplianceResourceType: StringWithCharLimit256;
      /** The ID of the AWS resource that was evaluated. **/
      ComplianceResourceId: StringWithCharLimit256;
      /** Indicates whether the AWS resource complies with the AWS Config rule that it was
evaluated against.

For the Evaluation data type, AWS Config supports only the COMPLIANT, 
NON_COMPLIANT, and NOT_APPLICABLE values. AWS Config does not support the 
INSUFFICIENT_DATA value for this data type.

Similarly, AWS Config does not accept INSUFFICIENT_DATA as the value for 
ComplianceType from a PutEvaluations request. For example, an AWS Lambda
function for a custom Config rule cannot pass an INSUFFICIENT_DATA value to AWS
Config. **/
      ComplianceType: ComplianceType;
      /** Supplementary information about how the evaluation determined the compliance. **/
      Annotation?: StringWithCharLimit256;
      /** The time of the event in AWS Config that triggered the evaluation. For
event-based evaluations, the time indicates when AWS Config created the
configuration item that triggered the evaluation. For periodic evaluations, the
time indicates when AWS Config delivered the configuration snapshot that
triggered the evaluation. **/
      OrderingTimestamp: OrderingTimestamp;
    }
    export interface EvaluationResult {
      /** Uniquely identifies the evaluation result. **/
      EvaluationResultIdentifier?: EvaluationResultIdentifier;
      /** Indicates whether the AWS resource complies with the AWS Config rule that
evaluated it.

For the EvaluationResult data type, AWS Config supports only the COMPLIANT, 
NON_COMPLIANT, and NOT_APPLICABLE values. AWS Config does not support the 
INSUFFICIENT_DATA value for the EvaluationResult data type. **/
      ComplianceType?: ComplianceType;
      /** The time when AWS Config recorded the evaluation result. **/
      ResultRecordedTime?: Date;
      /** The time when the AWS Config rule evaluated the AWS resource. **/
      ConfigRuleInvokedTime?: Date;
      /** Supplementary information about how the evaluation determined the compliance. **/
      Annotation?: StringWithCharLimit256;
      /** An encrypted token that associates an evaluation with an AWS Config rule. The
token identifies the rule, the AWS resource being evaluated, and the event that
triggered the evaluation. **/
      ResultToken?: String;
    }
    export interface EvaluationResultIdentifier {
      /** Identifies an AWS Config rule used to evaluate an AWS resource, and provides the
type and ID of the evaluated resource. **/
      EvaluationResultQualifier?: EvaluationResultQualifier;
      /** The time of the event that triggered the evaluation of your AWS resources. The
time can indicate when AWS Config delivered a configuration item change
notification, or it can indicate when AWS Config delivered the configuration
snapshot, depending on which event triggered the evaluation. **/
      OrderingTimestamp?: Date;
    }
    export interface EvaluationResultQualifier {
      /** The name of the AWS Config rule that was used in the evaluation. **/
      ConfigRuleName?: StringWithCharLimit64;
      /** The type of AWS resource that was evaluated. **/
      ResourceType?: StringWithCharLimit256;
      /** The ID of the evaluated AWS resource. **/
      ResourceId?: StringWithCharLimit256;
    }
    export interface GetComplianceDetailsByConfigRuleRequest {
      /** The name of the AWS Config rule for which you want compliance information. **/
      ConfigRuleName: StringWithCharLimit64;
      /** Filters the results by compliance.

The allowed values are COMPLIANT, NON_COMPLIANT, and NOT_APPLICABLE. **/
      ComplianceTypes?: ComplianceTypes;
      /** The maximum number of evaluation results returned on each page. The default is
10. You cannot specify a limit greater than 100. If you specify 0, AWS Config
uses the default. **/
      Limit?: Limit;
      /** The nextToken string returned on a previous page that you use to get the next
page of results in a paginated response. **/
      NextToken?: NextToken;
    }
    export interface GetComplianceDetailsByConfigRuleResponse {
      /** Indicates whether the AWS resource complies with the specified AWS Config rule. **/
      EvaluationResults?: EvaluationResults;
      /** The string that you use in a subsequent request to get the next page of results
in a paginated response. **/
      NextToken?: NextToken;
    }
    export interface GetComplianceDetailsByResourceRequest {
      /** The type of the AWS resource for which you want compliance information. **/
      ResourceType: StringWithCharLimit256;
      /** The ID of the AWS resource for which you want compliance information. **/
      ResourceId: StringWithCharLimit256;
      /** Filters the results by compliance.

The allowed values are COMPLIANT, NON_COMPLIANT, and NOT_APPLICABLE. **/
      ComplianceTypes?: ComplianceTypes;
      /** The nextToken string returned on a previous page that you use to get the next
page of results in a paginated response. **/
      NextToken?: String;
    }
    export interface GetComplianceDetailsByResourceResponse {
      /** Indicates whether the specified AWS resource complies each AWS Config rule. **/
      EvaluationResults?: EvaluationResults;
      /** The string that you use in a subsequent request to get the next page of results
in a paginated response. **/
      NextToken?: String;
    }
    export interface GetComplianceSummaryByConfigRuleResponse {
      /** The number of AWS Config rules that are compliant and the number that are
noncompliant, up to a maximum of 25 for each. **/
      ComplianceSummary?: ComplianceSummary;
    }
    export interface GetComplianceSummaryByResourceTypeRequest {
      /** Specify one or more resource types to get the number of resources that are
compliant and the number that are noncompliant for each resource type.

For this request, you can specify an AWS resource type such as 
AWS::EC2::Instance, and you can specify that the resource type is an AWS account
by specifying AWS::::Account. **/
      ResourceTypes?: ResourceTypes;
    }
    export interface GetComplianceSummaryByResourceTypeResponse {
      /** The number of resources that are compliant and the number that are noncompliant.
If one or more resource types were provided with the request, the numbers are
returned for each resource type. The maximum number returned is 100. **/
      ComplianceSummariesByResourceType?: ComplianceSummariesByResourceType;
    }
    export interface GetResourceConfigHistoryRequest {
      /** The resource type. **/
      resourceType: ResourceType;
      /** The ID of the resource (for example., sg-xxxxxx). **/
      resourceId: ResourceId;
      /** The time stamp that indicates a later time. If not specified, current time is
taken. **/
      laterTime?: LaterTime;
      /** The time stamp that indicates an earlier time. If not specified, the action
returns paginated results that contain configuration items that start from when
the first configuration item was recorded. **/
      earlierTime?: EarlierTime;
      /** The chronological order for configuration items listed. By default the results
are listed in reverse chronological order. **/
      chronologicalOrder?: ChronologicalOrder;
      /** The maximum number of configuration items returned on each page. The default is
10. You cannot specify a limit greater than 100. If you specify 0, AWS Config
uses the default. **/
      limit?: Limit;
      /** The nextToken string returned on a previous page that you use to get the next
page of results in a paginated response. **/
      nextToken?: NextToken;
    }
    export interface GetResourceConfigHistoryResponse {
      /** A list that contains the configuration history of one or more resources. **/
      configurationItems?: ConfigurationItemList;
      /** The string that you use in a subsequent request to get the next page of results
in a paginated response. **/
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
    export interface LimitExceededException {
    }
    export interface ListDiscoveredResourcesRequest {
      /** The type of resources that you want AWS Config to list in the response. **/
      resourceType: ResourceType;
      /** The IDs of only those resources that you want AWS Config to list in the
response. If you do not specify this parameter, AWS Config lists all resources
of the specified type that it has discovered. **/
      resourceIds?: ResourceIdList;
      /** The custom name of only those resources that you want AWS Config to list in the
response. If you do not specify this parameter, AWS Config lists all resources
of the specified type that it has discovered. **/
      resourceName?: ResourceName;
      /** The maximum number of resource identifiers returned on each page. The default is
100. You cannot specify a limit greater than 100. If you specify 0, AWS Config
uses the default. **/
      limit?: Limit;
      /** Specifies whether AWS Config includes deleted resources in the results. By
default, deleted resources are not included. **/
      includeDeletedResources?: Boolean;
      /** The nextToken string returned on a previous page that you use to get the next
page of results in a paginated response. **/
      nextToken?: NextToken;
    }
    export interface ListDiscoveredResourcesResponse {
      /** The details that identify a resource that is discovered by AWS Config, including
the resource type, ID, and (if available) the custom resource name. **/
      resourceIdentifiers?: ResourceIdentifierList;
      /** The string that you use in a subsequent request to get the next page of results
in a paginated response. **/
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
      /** The configuration recorder object that records each configuration change made to
the resources. **/
      ConfigurationRecorder: ConfigurationRecorder;
    }
    export interface PutDeliveryChannelRequest {
      /** The configuration delivery channel object that delivers the configuration
information to an Amazon S3 bucket, and to an Amazon SNS topic. **/
      DeliveryChannel: DeliveryChannel;
    }
    export interface PutEvaluationsRequest {
      /** The assessments that the AWS Lambda function performs. Each evaluation
identifies an AWS resource and indicates whether it complies with the AWS Config
rule that invokes the AWS Lambda function. **/
      Evaluations?: Evaluations;
      /** An encrypted token that associates an evaluation with an AWS Config rule.
Identifies the rule and the event that triggered the evaluation **/
      ResultToken: String;
    }
    export interface PutEvaluationsResponse {
      /** Requests that failed because of a client or server error. **/
      FailedEvaluations?: Evaluations;
    }
    export interface RecordingGroup {
      /** Specifies whether AWS Config records configuration changes for every supported
type of regional resource.

If you set this option to true, when AWS Config adds support for a new type of
regional resource, it automatically starts recording resources of that type.

If you set this option to true, you cannot enumerate a list of resourceTypes. **/
      allSupported?: AllSupported;
      /** Specifies whether AWS Config includes all supported types of global resources
(for example, IAM resources) with the resources that it records.

Before you can set this option to true, you must set the allSupported option to 
true.

If you set this option to true, when AWS Config adds support for a new type of
global resource, it automatically starts recording resources of that type.

The configuration details for any global resource are the same in all regions.
To prevent duplicate configuration items, you should consider customizing AWS
Config in only one region to record global resources. **/
      includeGlobalResourceTypes?: IncludeGlobalResourceTypes;
      /** A comma-separated list that specifies the types of AWS resources for which AWS
Config records configuration changes (for example, AWS::EC2::Instance or 
AWS::CloudTrail::Trail).

Before you can set this option to true, you must set the allSupported option to 
false.

If you set this option to true, when AWS Config adds support for a new type of
resource, it will not record resources of that type unless you manually add that
type to your recording group.

For a list of valid resourceTypes values, see the resourceType Value column in 
Supported AWS Resource Types
[http://docs.aws.amazon.com/config/latest/developerguide/resource-config-reference.html#supported-resources]
. **/
      resourceTypes?: ResourceTypeList;
    }
    export interface Relationship {
      /** The resource type of the related resource. **/
      resourceType?: ResourceType;
      /** The ID of the related resource (for example, sg-xxxxxx). **/
      resourceId?: ResourceId;
      /** The custom name of the related resource, if available. **/
      resourceName?: ResourceName;
      /** The type of relationship with the related resource. **/
      relationshipName?: RelationshipName;
    }
    export interface ResourceIdentifier {
      /** The type of resource. **/
      resourceType?: ResourceType;
      /** The ID of the resource (for example., sg-xxxxxx). **/
      resourceId?: ResourceId;
      /** The custom name of the resource (if available). **/
      resourceName?: ResourceName;
      /** The time that the resource was deleted. **/
      resourceDeletionTime?: ResourceDeletionTime;
    }
    export interface ResourceInUseException {
    }
    export interface ResourceNotDiscoveredException {
    }
    export interface Scope {
      /** The resource types of only those AWS resources that you want to trigger an
evaluation for the rule. You can only specify one type if you also specify a
resource ID for ComplianceResourceId. **/
      ComplianceResourceTypes?: ComplianceResourceTypes;
      /** The tag key that is applied to only those AWS resources that you want you want
to trigger an evaluation for the rule. **/
      TagKey?: StringWithCharLimit128;
      /** The tag value applied to only those AWS resources that you want to trigger an
evaluation for the rule. If you specify a value for TagValue, you must also
specify a value for TagKey. **/
      TagValue?: StringWithCharLimit256;
      /** The IDs of the only AWS resource that you want to trigger an evaluation for the
rule. If you specify a resource ID, you must specify one resource type for 
ComplianceResourceTypes. **/
      ComplianceResourceId?: StringWithCharLimit256;
    }
    export interface Source {
      /** Indicates whether AWS or the customer owns and manages the AWS Config rule. **/
      Owner?: Owner;
      /** For AWS managed Config rules, a pre-defined identifier from a list. To reference
the list, see Using AWS Managed Config Rules
[http://docs.aws.amazon.com/config/latest/developerguide/evaluate-config_use-managed-rules.html]
.

For custom Config rules, the identifier is the Amazon Resource Name (ARN) of the
rule&#x27;s AWS Lambda function. **/
      SourceIdentifier?: StringWithCharLimit256;
      /** Provides the source and type of the event that causes AWS Config to evaluate
your AWS resources. **/
      SourceDetails?: SourceDetails;
    }
    export interface SourceDetail {
      /** The source of the event, such as an AWS service, that triggers AWS Config to
evaluate your AWS resources. **/
      EventSource?: EventSource;
      /** The type of notification that triggers AWS Config to run an evaluation. You can
specify the following notification types:

ConfigurationItemChangeNotification - Triggers an evaluation when AWS Config
delivers a configuration item change notification.

ScheduledNotification - Triggers a periodic evaluation at the frequency
specified for MaximumExecutionFrequency.

ConfigurationSnapshotDeliveryCompleted - Triggers a periodic evaluation when AWS
Config delivers a configuration snapshot. **/
      MessageType?: MessageType;
      /** The frequency that you want AWS Config to run evaluations for a rule that is
triggered periodically. If you specify a value for MaximumExecutionFrequency,
then MessageType must use the ScheduledNotification value. **/
      MaximumExecutionFrequency?: MaximumExecutionFrequency;
    }
    export interface StartConfigRulesEvaluationRequest {
      /** The list of names of Config rules that you want to run evaluations for. **/
      ConfigRuleNames?: ReevaluateConfigRuleNames;
    }
    export interface StartConfigRulesEvaluationResponse {
    }
    export interface StartConfigurationRecorderRequest {
      /** The name of the recorder object that records each configuration change made to
the resources. **/
      ConfigurationRecorderName: RecorderName;
    }
    export interface StopConfigurationRecorderRequest {
      /** The name of the recorder object that records each configuration change made to
the resources. **/
      ConfigurationRecorderName: RecorderName;
    }
    export interface ValidationException {
    }
  }
}
