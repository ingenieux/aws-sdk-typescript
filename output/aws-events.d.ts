// Type definitions for aws-sdk - Amazon CloudWatch Events
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

///<reference path="./aws-sdk-common.d.ts" />

declare module "aws-sdk" {

    /*
     * apiVersion: 2014-02-03
     * endpointPrefix: events
     * serviceAbbreviation: 
     * signatureVersion: v4
     * protocol: json
     */
    export class CloudWatchEvents extends Service {
      constructor(options?: any);
      endpoint: Endpoint;
      deleteRule(params: CloudWatchEvents.DeleteRuleRequest, callback?: (err: CloudWatchEvents.ConcurrentModificationException|CloudWatchEvents.InternalException|any, data: any) => void): Request;
      describeRule(params: CloudWatchEvents.DescribeRuleRequest, callback?: (err: CloudWatchEvents.ResourceNotFoundException|CloudWatchEvents.InternalException|any, data: CloudWatchEvents.DescribeRuleResponse|any) => void): Request;
      disableRule(params: CloudWatchEvents.DisableRuleRequest, callback?: (err: CloudWatchEvents.ResourceNotFoundException|CloudWatchEvents.ConcurrentModificationException|CloudWatchEvents.InternalException|any, data: any) => void): Request;
      enableRule(params: CloudWatchEvents.EnableRuleRequest, callback?: (err: CloudWatchEvents.ResourceNotFoundException|CloudWatchEvents.ConcurrentModificationException|CloudWatchEvents.InternalException|any, data: any) => void): Request;
      listRuleNamesByTarget(params: CloudWatchEvents.ListRuleNamesByTargetRequest, callback?: (err: CloudWatchEvents.InternalException|any, data: CloudWatchEvents.ListRuleNamesByTargetResponse|any) => void): Request;
      listRules(params: CloudWatchEvents.ListRulesRequest, callback?: (err: CloudWatchEvents.InternalException|any, data: CloudWatchEvents.ListRulesResponse|any) => void): Request;
      listTargetsByRule(params: CloudWatchEvents.ListTargetsByRuleRequest, callback?: (err: CloudWatchEvents.ResourceNotFoundException|CloudWatchEvents.InternalException|any, data: CloudWatchEvents.ListTargetsByRuleResponse|any) => void): Request;
      putEvents(params: CloudWatchEvents.PutEventsRequest, callback?: (err: CloudWatchEvents.InternalException|any, data: CloudWatchEvents.PutEventsResponse|any) => void): Request;
      putRule(params: CloudWatchEvents.PutRuleRequest, callback?: (err: CloudWatchEvents.InvalidEventPatternException|CloudWatchEvents.LimitExceededException|CloudWatchEvents.ConcurrentModificationException|CloudWatchEvents.InternalException|any, data: CloudWatchEvents.PutRuleResponse|any) => void): Request;
      putTargets(params: CloudWatchEvents.PutTargetsRequest, callback?: (err: CloudWatchEvents.ResourceNotFoundException|CloudWatchEvents.ConcurrentModificationException|CloudWatchEvents.LimitExceededException|CloudWatchEvents.InternalException|any, data: CloudWatchEvents.PutTargetsResponse|any) => void): Request;
      removeTargets(params: CloudWatchEvents.RemoveTargetsRequest, callback?: (err: CloudWatchEvents.ResourceNotFoundException|CloudWatchEvents.ConcurrentModificationException|CloudWatchEvents.InternalException|any, data: CloudWatchEvents.RemoveTargetsResponse|any) => void): Request;
      testEventPattern(params: CloudWatchEvents.TestEventPatternRequest, callback?: (err: CloudWatchEvents.InvalidEventPatternException|CloudWatchEvents.InternalException|any, data: CloudWatchEvents.TestEventPatternResponse|any) => void): Request;

    }

    export module CloudWatchEvents {
        export type Boolean = boolean;
        export type ErrorCode = string;
        export type ErrorMessage = string;
        export type EventId = string;
        export type EventPattern = string;    // max: 2048
        export type EventResource = string;
        export type EventResourceList = EventResource[];
        export type EventTime = number;
        export type Integer = number;
        export type LimitMax100 = number;    // max: 100, min: 1
        export type NextToken = string;    // max: 2048, min: 1
        export type PutEventsRequestEntryList = PutEventsRequestEntry[];    // max: 10, min: 1
        export type PutEventsResultEntryList = PutEventsResultEntry[];
        export type PutTargetsResultEntryList = PutTargetsResultEntry[];
        export type RemoveTargetsResultEntryList = RemoveTargetsResultEntry[];
        export type RoleArn = string;    // max: 1600, min: 1
        export type RuleArn = string;    // max: 1600, min: 1
        export type RuleDescription = string;    // max: 512
        export type RuleName = string;    // pattern: &quot;[\.\-_A-Za-z0-9]+&quot;, max: 64, min: 1
        export type RuleNameList = RuleName[];
        export type RuleResponseList = Rule[];
        export type RuleState = string;
        export type ScheduleExpression = string;    // max: 256
        export type String = string;
        export type TargetArn = string;    // max: 1600, min: 1
        export type TargetId = string;    // pattern: &quot;[\.\-_A-Za-z0-9]+&quot;, max: 64, min: 1
        export type TargetIdList = TargetId[];    // max: 100, min: 1
        export type TargetInput = string;    // max: 8192
        export type TargetInputPath = string;    // max: 256
        export type TargetList = Target[];

        export interface ConcurrentModificationException {
        }
        export interface DeleteRuleRequest {
            Name: RuleName;
        }
        export interface DescribeRuleRequest {
            Name: RuleName;
        }
        export interface DescribeRuleResponse {
            Name?: RuleName;
            Arn?: RuleArn;
            EventPattern?: EventPattern;
            ScheduleExpression?: ScheduleExpression;
            State?: RuleState;
            Description?: RuleDescription;
            RoleArn?: RoleArn;
        }
        export interface DisableRuleRequest {
            Name: RuleName;
        }
        export interface EnableRuleRequest {
            Name: RuleName;
        }
        export interface InternalException {
        }
        export interface InvalidEventPatternException {
        }
        export interface LimitExceededException {
        }
        export interface ListRuleNamesByTargetRequest {
            TargetArn: TargetArn;
            NextToken?: NextToken;
            Limit?: LimitMax100;
        }
        export interface ListRuleNamesByTargetResponse {
            RuleNames?: RuleNameList;
            NextToken?: NextToken;
        }
        export interface ListRulesRequest {
            NamePrefix?: RuleName;
            NextToken?: NextToken;
            Limit?: LimitMax100;
        }
        export interface ListRulesResponse {
            Rules?: RuleResponseList;
            NextToken?: NextToken;
        }
        export interface ListTargetsByRuleRequest {
            Rule: RuleName;
            NextToken?: NextToken;
            Limit?: LimitMax100;
        }
        export interface ListTargetsByRuleResponse {
            Targets?: TargetList;
            NextToken?: NextToken;
        }
        export interface PutEventsRequest {
            Entries: PutEventsRequestEntryList;
        }
        export interface PutEventsRequestEntry {
            Time?: EventTime;
            Source?: String;
            Resources?: EventResourceList;
            DetailType?: String;
            Detail?: String;
        }
        export interface PutEventsResponse {
            FailedEntryCount?: Integer;
            Entries?: PutEventsResultEntryList;
        }
        export interface PutEventsResultEntry {
            EventId?: EventId;
            ErrorCode?: ErrorCode;
            ErrorMessage?: ErrorMessage;
        }
        export interface PutRuleRequest {
            Name: RuleName;
            ScheduleExpression?: ScheduleExpression;
            EventPattern?: EventPattern;
            State?: RuleState;
            Description?: RuleDescription;
            RoleArn?: RoleArn;
        }
        export interface PutRuleResponse {
            RuleArn?: RuleArn;
        }
        export interface PutTargetsRequest {
            Rule: RuleName;
            Targets: TargetList;
        }
        export interface PutTargetsResponse {
            FailedEntryCount?: Integer;
            FailedEntries?: PutTargetsResultEntryList;
        }
        export interface PutTargetsResultEntry {
            TargetId?: TargetId;
            ErrorCode?: ErrorCode;
            ErrorMessage?: ErrorMessage;
        }
        export interface RemoveTargetsRequest {
            Rule: RuleName;
            Ids: TargetIdList;
        }
        export interface RemoveTargetsResponse {
            FailedEntryCount?: Integer;
            FailedEntries?: RemoveTargetsResultEntryList;
        }
        export interface RemoveTargetsResultEntry {
            TargetId?: TargetId;
            ErrorCode?: ErrorCode;
            ErrorMessage?: ErrorMessage;
        }
        export interface ResourceNotFoundException {
        }
        export interface Rule {
            Name?: RuleName;
            Arn?: RuleArn;
            EventPattern?: EventPattern;
            State?: RuleState;
            Description?: RuleDescription;
            ScheduleExpression?: ScheduleExpression;
            RoleArn?: RoleArn;
        }
        export interface Target {
            Id: TargetId;
            Arn: TargetArn;
            Input?: TargetInput;
            InputPath?: TargetInputPath;
        }
        export interface TestEventPatternRequest {
            EventPattern: EventPattern;
            Event: String;
        }
        export interface TestEventPatternResponse {
            Result?: Boolean;
        }

    }
}
