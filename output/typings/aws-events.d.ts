// Type definitions for aws-sdk - Amazon CloudWatch Events
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

// COMMENTED <reference path="./aws-sdk.d.ts" />

declare module "aws-sdk" {

  /**
    * apiVersion: 2015-10-07
    * endpointPrefix: events
    * serviceAbbreviation: 
    * signatureVersion: v4
    * protocol: json
    *
    * Amazon CloudWatch Events helps you to respond to state changes in your AWS
 resources. When your resources change state they automatically send events into
 an event stream. You can create rules that match selected events in the stream
 and route them to targets to take action. You can also use rules to take action
 on a pre-determined schedule. For example, you can configure rules to: 
 
  &amp;#42; Automatically invoke an AWS Lambda function to update DNS entries when an
    event notifies you that Amazon EC2 instance enters the running state.
  * Direct specific API records from CloudTrail to an Amazon Kinesis stream for
    detailed analysis of potential security or availability risks.
  * Periodically invoke a built-in target to create a snapshot of an Amazon EBS
    volume.
 
  For more information about Amazon CloudWatch Events features, see the Amazon
 CloudWatch Developer Guide
 [http://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide].
    *
    */
  export class CloudWatchEvents extends Service {
    constructor(options?: any);
    endpoint: Endpoint;
    /**
     * Deletes a rule. You must remove all targets from a rule using RemoveTargets 
before you can delete the rule.

 Note: When you delete a rule, incoming events might still continue to match to
the deleted rule. Please allow a short period of time for changes to take
effect.
     *
     * @error ConcurrentModificationException This exception occurs if there is concurrent modification on rule or target.  
     * @error InternalException This exception occurs due to unexpected causes.  
     */
    deleteRule(params: CloudWatchEvents.DeleteRuleRequest, callback?: (err: CloudWatchEvents.ConcurrentModificationException | CloudWatchEvents.InternalException | any, data: any) => void): Request<any, CloudWatchEvents.ConcurrentModificationException | CloudWatchEvents.InternalException | any>;
    /**
     * Describes the details of the specified rule.
     *
     * @error ResourceNotFoundException The rule does not exist.  
     * @error InternalException This exception occurs due to unexpected causes.  
     */
    describeRule(params: CloudWatchEvents.DescribeRuleRequest, callback?: (err: CloudWatchEvents.ResourceNotFoundException | CloudWatchEvents.InternalException | any, data: CloudWatchEvents.DescribeRuleResponse | any) => void): Request<CloudWatchEvents.DescribeRuleResponse | any, CloudWatchEvents.ResourceNotFoundException | CloudWatchEvents.InternalException | any>;
    /**
     * Disables a rule. A disabled rule won&#x27;t match any events, and won&#x27;t self-trigger
if it has a schedule expression.

 Note: When you disable a rule, incoming events might still continue to match to
the disabled rule. Please allow a short period of time for changes to take
effect.
     *
     * @error ResourceNotFoundException The rule does not exist.  
     * @error ConcurrentModificationException This exception occurs if there is concurrent modification on rule or target.  
     * @error InternalException This exception occurs due to unexpected causes.  
     */
    disableRule(params: CloudWatchEvents.DisableRuleRequest, callback?: (err: CloudWatchEvents.ResourceNotFoundException | CloudWatchEvents.ConcurrentModificationException | CloudWatchEvents.InternalException | any, data: any) => void): Request<any, CloudWatchEvents.ResourceNotFoundException | CloudWatchEvents.ConcurrentModificationException | CloudWatchEvents.InternalException | any>;
    /**
     * Enables a rule. If the rule does not exist, the operation fails.

 Note: When you enable a rule, incoming events might not immediately start
matching to a newly enabled rule. Please allow a short period of time for
changes to take effect.
     *
     * @error ResourceNotFoundException The rule does not exist.  
     * @error ConcurrentModificationException This exception occurs if there is concurrent modification on rule or target.  
     * @error InternalException This exception occurs due to unexpected causes.  
     */
    enableRule(params: CloudWatchEvents.EnableRuleRequest, callback?: (err: CloudWatchEvents.ResourceNotFoundException | CloudWatchEvents.ConcurrentModificationException | CloudWatchEvents.InternalException | any, data: any) => void): Request<any, CloudWatchEvents.ResourceNotFoundException | CloudWatchEvents.ConcurrentModificationException | CloudWatchEvents.InternalException | any>;
    /**
     * Lists the names of the rules that the given target is put to. You can see which
of the rules in Amazon CloudWatch Events can invoke a specific target in your
account. If you have more rules in your account than the given limit, the
results will be paginated. In that case, use the next token returned in the
response and repeat ListRulesByTarget until the NextToken in the response is
returned as null.
     *
     * @error InternalException This exception occurs due to unexpected causes.  
     */
    listRuleNamesByTarget(params: CloudWatchEvents.ListRuleNamesByTargetRequest, callback?: (err: CloudWatchEvents.InternalException | any, data: CloudWatchEvents.ListRuleNamesByTargetResponse | any) => void): Request<CloudWatchEvents.ListRuleNamesByTargetResponse | any, CloudWatchEvents.InternalException | any>;
    /**
     * Lists the Amazon CloudWatch Events rules in your account. You can either list
all the rules or you can provide a prefix to match to the rule names. If you
have more rules in your account than the given limit, the results will be
paginated. In that case, use the next token returned in the response and repeat
ListRules until the NextToken in the response is returned as null.
     *
     * @error InternalException This exception occurs due to unexpected causes.  
     */
    listRules(params: CloudWatchEvents.ListRulesRequest, callback?: (err: CloudWatchEvents.InternalException | any, data: CloudWatchEvents.ListRulesResponse | any) => void): Request<CloudWatchEvents.ListRulesResponse | any, CloudWatchEvents.InternalException | any>;
    /**
     * Lists of targets assigned to the rule.
     *
     * @error ResourceNotFoundException The rule does not exist.  
     * @error InternalException This exception occurs due to unexpected causes.  
     */
    listTargetsByRule(params: CloudWatchEvents.ListTargetsByRuleRequest, callback?: (err: CloudWatchEvents.ResourceNotFoundException | CloudWatchEvents.InternalException | any, data: CloudWatchEvents.ListTargetsByRuleResponse | any) => void): Request<CloudWatchEvents.ListTargetsByRuleResponse | any, CloudWatchEvents.ResourceNotFoundException | CloudWatchEvents.InternalException | any>;
    /**
     * Sends custom events to Amazon CloudWatch Events so that they can be matched to
rules.
     *
     * @error InternalException This exception occurs due to unexpected causes.  
     */
    putEvents(params: CloudWatchEvents.PutEventsRequest, callback?: (err: CloudWatchEvents.InternalException | any, data: CloudWatchEvents.PutEventsResponse | any) => void): Request<CloudWatchEvents.PutEventsResponse | any, CloudWatchEvents.InternalException | any>;
    /**
     * Creates or updates a rule. Rules are enabled by default, or based on value of
the State parameter. You can disable a rule using DisableRule.

 Note: When you create or update a rule, incoming events might not immediately
start matching to new or updated rules. Please allow a short period of time for
changes to take effect.

A rule must contain at least an EventPattern or ScheduleExpression. Rules with
EventPatterns are triggered when a matching event is observed. Rules with
ScheduleExpressions self-trigger based on the given schedule. A rule can have
both an EventPattern and a ScheduleExpression, in which case the rule will
trigger on matching events as well as on a schedule.

 Note: Most services in AWS treat : or / as the same character in Amazon
Resource Names (ARNs). However, CloudWatch Events uses an exact match in event
patterns and rules. Be sure to use the correct ARN characters when creating
event patterns so that they match the ARN syntax in the event you want to match.
     *
     * @error InvalidEventPatternException The event pattern is invalid.  
     * @error LimitExceededException This exception occurs if you try to create more rules or add more targets to a
rule than allowed by default.  
     * @error ConcurrentModificationException This exception occurs if there is concurrent modification on rule or target.  
     * @error InternalException This exception occurs due to unexpected causes.  
     */
    putRule(params: CloudWatchEvents.PutRuleRequest, callback?: (err: CloudWatchEvents.InvalidEventPatternException | CloudWatchEvents.LimitExceededException | CloudWatchEvents.ConcurrentModificationException | CloudWatchEvents.InternalException | any, data: CloudWatchEvents.PutRuleResponse | any) => void): Request<CloudWatchEvents.PutRuleResponse | any, CloudWatchEvents.InvalidEventPatternException | CloudWatchEvents.LimitExceededException | CloudWatchEvents.ConcurrentModificationException | CloudWatchEvents.InternalException | any>;
    /**
     * Adds target(s) to a rule. Targets are the resources that can be invoked when a
rule is triggered. For example, AWS Lambda functions, Amazon Kinesis streams,
and built-in targets. Updates the target(s) if they are already associated with
the role. In other words, if there is already a target with the given target ID,
then the target associated with that ID is updated.

In order to be able to make API calls against the resources you own, Amazon
CloudWatch Events needs the appropriate permissions. For AWS Lambda and Amazon
SNS resources, CloudWatch Events relies on resource-based policies. For Amazon
Kinesis streams, CloudWatch Events relies on IAM roles. For more information,
see Permissions for Sending Events to Targets
[http://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/EventsTargetPermissions.html] 
in the Amazon CloudWatch Developer Guide.

Input and InputPath are mutually-exclusive and optional parameters of a target.
When a rule is triggered due to a matched event, if for a target:

 &amp;#42; Neither Input nor InputPath is specified, then the entire event is passed to
   the target in JSON form.
 *  InputPath is specified in the form of JSONPath (e.g. $.detail), then only
   the part of the event specified in the path is passed to the target (e.g.
   only the detail part of the event is passed). 
 *  Input is specified in the form of a valid JSON, then the matched event is
   overridden with this constant.

 Note: When you add targets to a rule, when the associated rule triggers, new or
updated targets might not be immediately invoked. Please allow a short period of
time for changes to take effect.
     *
     * @error ResourceNotFoundException The rule does not exist.  
     * @error ConcurrentModificationException This exception occurs if there is concurrent modification on rule or target.  
     * @error LimitExceededException This exception occurs if you try to create more rules or add more targets to a
rule than allowed by default.  
     * @error InternalException This exception occurs due to unexpected causes.  
     */
    putTargets(params: CloudWatchEvents.PutTargetsRequest, callback?: (err: CloudWatchEvents.ResourceNotFoundException | CloudWatchEvents.ConcurrentModificationException | CloudWatchEvents.LimitExceededException | CloudWatchEvents.InternalException | any, data: CloudWatchEvents.PutTargetsResponse | any) => void): Request<CloudWatchEvents.PutTargetsResponse | any, CloudWatchEvents.ResourceNotFoundException | CloudWatchEvents.ConcurrentModificationException | CloudWatchEvents.LimitExceededException | CloudWatchEvents.InternalException | any>;
    /**
     * Removes target(s) from a rule so that when the rule is triggered, those targets
will no longer be invoked.

 Note: When you remove a target, when the associated rule triggers, removed
targets might still continue to be invoked. Please allow a short period of time
for changes to take effect.
     *
     * @error ResourceNotFoundException The rule does not exist.  
     * @error ConcurrentModificationException This exception occurs if there is concurrent modification on rule or target.  
     * @error InternalException This exception occurs due to unexpected causes.  
     */
    removeTargets(params: CloudWatchEvents.RemoveTargetsRequest, callback?: (err: CloudWatchEvents.ResourceNotFoundException | CloudWatchEvents.ConcurrentModificationException | CloudWatchEvents.InternalException | any, data: CloudWatchEvents.RemoveTargetsResponse | any) => void): Request<CloudWatchEvents.RemoveTargetsResponse | any, CloudWatchEvents.ResourceNotFoundException | CloudWatchEvents.ConcurrentModificationException | CloudWatchEvents.InternalException | any>;
    /**
     * Tests whether an event pattern matches the provided event.

 Note: Most services in AWS treat : or / as the same character in Amazon
Resource Names (ARNs). However, CloudWatch Events uses an exact match in event
patterns and rules. Be sure to use the correct ARN characters when creating
event patterns so that they match the ARN syntax in the event you want to match.
     *
     * @error InvalidEventPatternException The event pattern is invalid.  
     * @error InternalException This exception occurs due to unexpected causes.  
     */
    testEventPattern(params: CloudWatchEvents.TestEventPatternRequest, callback?: (err: CloudWatchEvents.InvalidEventPatternException | CloudWatchEvents.InternalException | any, data: CloudWatchEvents.TestEventPatternResponse | any) => void): Request<CloudWatchEvents.TestEventPatternResponse | any, CloudWatchEvents.InvalidEventPatternException | CloudWatchEvents.InternalException | any>;

  }

  export module CloudWatchEvents {

    export type Boolean = boolean;

    export type ErrorCode = string;

    export type ErrorMessage = string;

    export type EventId = string;

    export type EventPattern = string;

    export type EventResource = string;

    export type EventResourceList = EventResource[];

    export type EventTime = number;

    export type Integer = number;

    export type LimitMax100 = number;

    export type NextToken = string;

    export type PutEventsRequestEntryList = PutEventsRequestEntry[];

    export type PutEventsResultEntryList = PutEventsResultEntry[];

    export type PutTargetsResultEntryList = PutTargetsResultEntry[];

    export type RemoveTargetsResultEntryList = RemoveTargetsResultEntry[];

    export type RoleArn = string;

    export type RuleArn = string;

    export type RuleDescription = string;

    export type RuleName = string;

    export type RuleNameList = RuleName[];

    export type RuleResponseList = Rule[];

    export type RuleState = string;

    export type ScheduleExpression = string;

    export type String = string;

    export type TargetArn = string;

    export type TargetId = string;

    export type TargetIdList = TargetId[];

    export type TargetInput = string;

    export type TargetInputPath = string;

    export type TargetList = Target[];

    export interface ConcurrentModificationException {
    }
    export interface DeleteRuleRequest {
      /** The name of the rule to be deleted. **/
      Name: RuleName;
    }
    export interface DescribeRuleRequest {
      /** The name of the rule you want to describe details for. **/
      Name: RuleName;
    }
    export interface DescribeRuleResponse {
      /** The rule&#x27;s name. **/
      Name?: RuleName;
      /** The Amazon Resource Name (ARN) associated with the rule. **/
      Arn?: RuleArn;
      /** The event pattern. **/
      EventPattern?: EventPattern;
      /** The scheduling expression. For example, &quot;cron(0 20 &amp;#42; * ? *)&quot;, &quot;rate(5 minutes)&quot;. **/
      ScheduleExpression?: ScheduleExpression;
      /** Specifies whether the rule is enabled or disabled. **/
      State?: RuleState;
      /** The rule&#x27;s description. **/
      Description?: RuleDescription;
      /** The Amazon Resource Name (ARN) of the IAM role associated with the rule. **/
      RoleArn?: RoleArn;
    }
    export interface DisableRuleRequest {
      /** The name of the rule you want to disable. **/
      Name: RuleName;
    }
    export interface EnableRuleRequest {
      /** The name of the rule that you want to enable. **/
      Name: RuleName;
    }
    export interface InternalException {
    }
    export interface InvalidEventPatternException {
    }
    export interface LimitExceededException {
    }
    export interface ListRuleNamesByTargetRequest {
      /** The Amazon Resource Name (ARN) of the target resource that you want to list the
rules for. **/
      TargetArn: TargetArn;
      /** The token returned by a previous call to indicate that there is more data
available. **/
      NextToken?: NextToken;
      /** The maximum number of results to return. **/
      Limit?: LimitMax100;
    }
    export interface ListRuleNamesByTargetResponse {
      /** List of rules names that can invoke the given target. **/
      RuleNames?: RuleNameList;
      /** Indicates that there are additional results to retrieve. **/
      NextToken?: NextToken;
    }
    export interface ListRulesRequest {
      /** The prefix matching the rule name. **/
      NamePrefix?: RuleName;
      /** The token returned by a previous call to indicate that there is more data
available. **/
      NextToken?: NextToken;
      /** The maximum number of results to return. **/
      Limit?: LimitMax100;
    }
    export interface ListRulesResponse {
      /** List of rules matching the specified criteria. **/
      Rules?: RuleResponseList;
      /** Indicates that there are additional results to retrieve. **/
      NextToken?: NextToken;
    }
    export interface ListTargetsByRuleRequest {
      /** The name of the rule whose targets you want to list. **/
      Rule: RuleName;
      /** The token returned by a previous call to indicate that there is more data
available. **/
      NextToken?: NextToken;
      /** The maximum number of results to return. **/
      Limit?: LimitMax100;
    }
    export interface ListTargetsByRuleResponse {
      /** Lists the targets assigned to the rule. **/
      Targets?: TargetList;
      /** Indicates that there are additional results to retrieve. **/
      NextToken?: NextToken;
    }
    export interface PutEventsRequest {
      /** The entry that defines an event in your system. You can specify several
parameters for the entry such as the source and type of the event, resources
associated with the event, and so on. **/
      Entries: PutEventsRequestEntryList;
    }
    export interface PutEventsRequestEntry {
      /** Timestamp of event, per RFC3339 [https://www.rfc-editor.org/rfc/rfc3339.txt]. If
no timestamp is provided, the timestamp of the PutEvents call will be used. **/
      Time?: EventTime;
      /** The source of the event. **/
      Source?: String;
      /** AWS resources, identified by Amazon Resource Name (ARN), which the event
primarily concerns. Any number, including zero, may be present. **/
      Resources?: EventResourceList;
      /** Free-form string used to decide what fields to expect in the event detail. **/
      DetailType?: String;
      /** In the JSON sense, an object containing fields, which may also contain nested
sub-objects. No constraints are imposed on its contents. **/
      Detail?: String;
    }
    export interface PutEventsResponse {
      /** The number of failed entries. **/
      FailedEntryCount?: Integer;
      /** A list of successfully and unsuccessfully ingested events results. If the
ingestion was successful, the entry will have the event ID in it. If not, then
the ErrorCode and ErrorMessage can be used to identify the problem with the
entry. **/
      Entries?: PutEventsResultEntryList;
    }
    export interface PutEventsResultEntry {
      /** The ID of the event submitted to Amazon CloudWatch Events. **/
      EventId?: EventId;
      /** The error code representing why the event submission failed on this entry. **/
      ErrorCode?: ErrorCode;
      /** The error message explaining why the event submission failed on this entry. **/
      ErrorMessage?: ErrorMessage;
    }
    export interface PutRuleRequest {
      /** The name of the rule that you are creating or updating. **/
      Name: RuleName;
      /** The scheduling expression. For example, &quot;cron(0 20 &amp;#42; * ? *)&quot;, &quot;rate(5 minutes)&quot;. **/
      ScheduleExpression?: ScheduleExpression;
      /** The event pattern. **/
      EventPattern?: EventPattern;
      /** Indicates whether the rule is enabled or disabled. **/
      State?: RuleState;
      /** A description of the rule. **/
      Description?: RuleDescription;
      /** The Amazon Resource Name (ARN) of the IAM role associated with the rule. **/
      RoleArn?: RoleArn;
    }
    export interface PutRuleResponse {
      /** The Amazon Resource Name (ARN) that identifies the rule. **/
      RuleArn?: RuleArn;
    }
    export interface PutTargetsRequest {
      /** The name of the rule you want to add targets to. **/
      Rule: RuleName;
      /** List of targets you want to update or add to the rule. **/
      Targets: TargetList;
    }
    export interface PutTargetsResponse {
      /** The number of failed entries. **/
      FailedEntryCount?: Integer;
      /** An array of failed target entries. **/
      FailedEntries?: PutTargetsResultEntryList;
    }
    export interface PutTargetsResultEntry {
      /** The ID of the target submitted to Amazon CloudWatch Events. **/
      TargetId?: TargetId;
      /** The error code representing why the target submission failed on this entry. **/
      ErrorCode?: ErrorCode;
      /** The error message explaining why the target submission failed on this entry. **/
      ErrorMessage?: ErrorMessage;
    }
    export interface RemoveTargetsRequest {
      /** The name of the rule you want to remove targets from. **/
      Rule: RuleName;
      /** The list of target IDs to remove from the rule. **/
      Ids: TargetIdList;
    }
    export interface RemoveTargetsResponse {
      /** The number of failed entries. **/
      FailedEntryCount?: Integer;
      /** An array of failed target entries. **/
      FailedEntries?: RemoveTargetsResultEntryList;
    }
    export interface RemoveTargetsResultEntry {
      /** The ID of the target requested to be removed by Amazon CloudWatch Events. **/
      TargetId?: TargetId;
      /** The error code representing why the target removal failed on this entry. **/
      ErrorCode?: ErrorCode;
      /** The error message explaining why the target removal failed on this entry. **/
      ErrorMessage?: ErrorMessage;
    }
    export interface ResourceNotFoundException {
    }
    export interface Rule {
      /** The rule&#x27;s name. **/
      Name?: RuleName;
      /** The Amazon Resource Name (ARN) of the rule. **/
      Arn?: RuleArn;
      /** The event pattern of the rule. **/
      EventPattern?: EventPattern;
      /** The rule&#x27;s state. **/
      State?: RuleState;
      /** The description of the rule. **/
      Description?: RuleDescription;
      /** The scheduling expression. For example, &quot;cron(0 20 &amp;#42; * ? *)&quot;, &quot;rate(5 minutes)&quot;. **/
      ScheduleExpression?: ScheduleExpression;
      /** The Amazon Resource Name (ARN) associated with the role that is used for target
invocation. **/
      RoleArn?: RoleArn;
    }
    export interface Target {
      /** The unique target assignment ID. **/
      Id: TargetId;
      /** The Amazon Resource Name (ARN) associated of the target. **/
      Arn: TargetArn;
      /** Valid JSON text passed to the target. For more information about JSON text, see 
The JavaScript Object Notation (JSON) Data Interchange Format
[http://www.rfc-editor.org/rfc/rfc7159.txt]. **/
      Input?: TargetInput;
      /** The value of the JSONPath that is used for extracting part of the matched event
when passing it to the target. For more information about JSON paths, see 
JSONPath [http://goessner.net/articles/JsonPath/]. **/
      InputPath?: TargetInputPath;
    }
    export interface TestEventPatternRequest {
      /** The event pattern you want to test. **/
      EventPattern: EventPattern;
      /** The event in the JSON format to test against the event pattern. **/
      Event: String;
    }
    export interface TestEventPatternResponse {
      /** Indicates whether the event matches the event pattern. **/
      Result?: Boolean;
    }
  }
}
