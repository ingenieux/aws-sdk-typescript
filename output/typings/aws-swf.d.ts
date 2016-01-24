// Type definitions for aws-sdk - Amazon Simple Workflow Service
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

///<reference path="./aws-sdk-common.d.ts" />

declare module "aws-sdk" {

    /*
     * apiVersion: 2012-01-25
     * endpointPrefix: swf
     * serviceAbbreviation: Amazon SWF
     * signatureVersion: v4
     * protocol: json
     */
    export class SWF extends Service {
      constructor(options?: any);
      endpoint: Endpoint;
      countClosedWorkflowExecutions(params: SWF.CountClosedWorkflowExecutionsInput, callback?: (err: SWF.UnknownResourceFault|SWF.OperationNotPermittedFault|any, data: SWF.WorkflowExecutionCount|any) => void): Request;
      countOpenWorkflowExecutions(params: SWF.CountOpenWorkflowExecutionsInput, callback?: (err: SWF.UnknownResourceFault|SWF.OperationNotPermittedFault|any, data: SWF.WorkflowExecutionCount|any) => void): Request;
      countPendingActivityTasks(params: SWF.CountPendingActivityTasksInput, callback?: (err: SWF.UnknownResourceFault|SWF.OperationNotPermittedFault|any, data: SWF.PendingTaskCount|any) => void): Request;
      countPendingDecisionTasks(params: SWF.CountPendingDecisionTasksInput, callback?: (err: SWF.UnknownResourceFault|SWF.OperationNotPermittedFault|any, data: SWF.PendingTaskCount|any) => void): Request;
      deprecateActivityType(params: SWF.DeprecateActivityTypeInput, callback?: (err: SWF.UnknownResourceFault|SWF.TypeDeprecatedFault|SWF.OperationNotPermittedFault|any, data: any) => void): Request;
      deprecateDomain(params: SWF.DeprecateDomainInput, callback?: (err: SWF.UnknownResourceFault|SWF.DomainDeprecatedFault|SWF.OperationNotPermittedFault|any, data: any) => void): Request;
      deprecateWorkflowType(params: SWF.DeprecateWorkflowTypeInput, callback?: (err: SWF.UnknownResourceFault|SWF.TypeDeprecatedFault|SWF.OperationNotPermittedFault|any, data: any) => void): Request;
      describeActivityType(params: SWF.DescribeActivityTypeInput, callback?: (err: SWF.UnknownResourceFault|SWF.OperationNotPermittedFault|any, data: SWF.ActivityTypeDetail|any) => void): Request;
      describeDomain(params: SWF.DescribeDomainInput, callback?: (err: SWF.UnknownResourceFault|SWF.OperationNotPermittedFault|any, data: SWF.DomainDetail|any) => void): Request;
      describeWorkflowExecution(params: SWF.DescribeWorkflowExecutionInput, callback?: (err: SWF.UnknownResourceFault|SWF.OperationNotPermittedFault|any, data: SWF.WorkflowExecutionDetail|any) => void): Request;
      describeWorkflowType(params: SWF.DescribeWorkflowTypeInput, callback?: (err: SWF.UnknownResourceFault|SWF.OperationNotPermittedFault|any, data: SWF.WorkflowTypeDetail|any) => void): Request;
      getWorkflowExecutionHistory(params: SWF.GetWorkflowExecutionHistoryInput, callback?: (err: SWF.UnknownResourceFault|SWF.OperationNotPermittedFault|any, data: SWF.History|any) => void): Request;
      listActivityTypes(params: SWF.ListActivityTypesInput, callback?: (err: SWF.OperationNotPermittedFault|SWF.UnknownResourceFault|any, data: SWF.ActivityTypeInfos|any) => void): Request;
      listClosedWorkflowExecutions(params: SWF.ListClosedWorkflowExecutionsInput, callback?: (err: SWF.UnknownResourceFault|SWF.OperationNotPermittedFault|any, data: SWF.WorkflowExecutionInfos|any) => void): Request;
      listDomains(params: SWF.ListDomainsInput, callback?: (err: SWF.OperationNotPermittedFault|any, data: SWF.DomainInfos|any) => void): Request;
      listOpenWorkflowExecutions(params: SWF.ListOpenWorkflowExecutionsInput, callback?: (err: SWF.UnknownResourceFault|SWF.OperationNotPermittedFault|any, data: SWF.WorkflowExecutionInfos|any) => void): Request;
      listWorkflowTypes(params: SWF.ListWorkflowTypesInput, callback?: (err: SWF.OperationNotPermittedFault|SWF.UnknownResourceFault|any, data: SWF.WorkflowTypeInfos|any) => void): Request;
      pollForActivityTask(params: SWF.PollForActivityTaskInput, callback?: (err: SWF.UnknownResourceFault|SWF.OperationNotPermittedFault|SWF.LimitExceededFault|any, data: SWF.ActivityTask|any) => void): Request;
      pollForDecisionTask(params: SWF.PollForDecisionTaskInput, callback?: (err: SWF.UnknownResourceFault|SWF.OperationNotPermittedFault|SWF.LimitExceededFault|any, data: SWF.DecisionTask|any) => void): Request;
      recordActivityTaskHeartbeat(params: SWF.RecordActivityTaskHeartbeatInput, callback?: (err: SWF.UnknownResourceFault|SWF.OperationNotPermittedFault|any, data: SWF.ActivityTaskStatus|any) => void): Request;
      registerActivityType(params: SWF.RegisterActivityTypeInput, callback?: (err: SWF.TypeAlreadyExistsFault|SWF.LimitExceededFault|SWF.UnknownResourceFault|SWF.OperationNotPermittedFault|any, data: any) => void): Request;
      registerDomain(params: SWF.RegisterDomainInput, callback?: (err: SWF.DomainAlreadyExistsFault|SWF.LimitExceededFault|SWF.OperationNotPermittedFault|any, data: any) => void): Request;
      registerWorkflowType(params: SWF.RegisterWorkflowTypeInput, callback?: (err: SWF.TypeAlreadyExistsFault|SWF.LimitExceededFault|SWF.UnknownResourceFault|SWF.OperationNotPermittedFault|any, data: any) => void): Request;
      requestCancelWorkflowExecution(params: SWF.RequestCancelWorkflowExecutionInput, callback?: (err: SWF.UnknownResourceFault|SWF.OperationNotPermittedFault|any, data: any) => void): Request;
      respondActivityTaskCanceled(params: SWF.RespondActivityTaskCanceledInput, callback?: (err: SWF.UnknownResourceFault|SWF.OperationNotPermittedFault|any, data: any) => void): Request;
      respondActivityTaskCompleted(params: SWF.RespondActivityTaskCompletedInput, callback?: (err: SWF.UnknownResourceFault|SWF.OperationNotPermittedFault|any, data: any) => void): Request;
      respondActivityTaskFailed(params: SWF.RespondActivityTaskFailedInput, callback?: (err: SWF.UnknownResourceFault|SWF.OperationNotPermittedFault|any, data: any) => void): Request;
      respondDecisionTaskCompleted(params: SWF.RespondDecisionTaskCompletedInput, callback?: (err: SWF.UnknownResourceFault|SWF.OperationNotPermittedFault|any, data: any) => void): Request;
      signalWorkflowExecution(params: SWF.SignalWorkflowExecutionInput, callback?: (err: SWF.UnknownResourceFault|SWF.OperationNotPermittedFault|any, data: any) => void): Request;
      startWorkflowExecution(params: SWF.StartWorkflowExecutionInput, callback?: (err: SWF.UnknownResourceFault|SWF.TypeDeprecatedFault|SWF.WorkflowExecutionAlreadyStartedFault|SWF.LimitExceededFault|SWF.OperationNotPermittedFault|SWF.DefaultUndefinedFault|any, data: SWF.Run|any) => void): Request;
      terminateWorkflowExecution(params: SWF.TerminateWorkflowExecutionInput, callback?: (err: SWF.UnknownResourceFault|SWF.OperationNotPermittedFault|any, data: any) => void): Request;

    }

    export module SWF {
        export type ActivityId = string;    // max: 256, min: 1
        export type ActivityTaskTimeoutType = string;
        export type ActivityTypeInfoList = ActivityTypeInfo[];
        export type Arn = string;    // max: 1224, min: 1
        export type CancelTimerFailedCause = string;
        export type CancelWorkflowExecutionFailedCause = string;
        export type Canceled = boolean;
        export type CauseMessage = string;    // max: 1728
        export type ChildPolicy = string;
        export type CloseStatus = string;
        export type CompleteWorkflowExecutionFailedCause = string;
        export type ContinueAsNewWorkflowExecutionFailedCause = string;
        export type Count = number;
        export type Data = string;    // max: 32768
        export type DecisionList = Decision[];
        export type DecisionTaskTimeoutType = string;
        export type DecisionType = string;
        export type Description = string;    // max: 1024
        export type DomainInfoList = DomainInfo[];
        export type DomainName = string;    // max: 256, min: 1
        export type DurationInDays = string;    // max: 8, min: 1
        export type DurationInSeconds = string;    // max: 8, min: 1
        export type DurationInSecondsOptional = string;    // max: 8
        export type ErrorMessage = string;
        export type EventId = number;
        export type EventType = string;
        export type ExecutionStatus = string;
        export type FailWorkflowExecutionFailedCause = string;
        export type FailureReason = string;    // max: 256
        export type FunctionId = string;    // max: 256, min: 1
        export type FunctionInput = string;    // max: 32768, min: 1
        export type FunctionName = string;    // max: 64, min: 1
        export type HistoryEventList = HistoryEvent[];
        export type Identity = string;    // max: 256
        export type LambdaFunctionTimeoutType = string;
        export type LimitedData = string;    // max: 2048
        export type MarkerName = string;    // max: 256, min: 1
        export type Name = string;    // max: 256, min: 1
        export type OpenDecisionTasksCount = number;    // max: 1
        export type PageSize = number;    // max: 1000
        export type PageToken = string;    // max: 2048
        export type RecordMarkerFailedCause = string;
        export type RegistrationStatus = string;
        export type RequestCancelActivityTaskFailedCause = string;
        export type RequestCancelExternalWorkflowExecutionFailedCause = string;
        export type ReverseOrder = boolean;
        export type RunId = string;    // max: 64, min: 1
        export type RunIdOptional = string;    // max: 64
        export type ScheduleActivityTaskFailedCause = string;
        export type ScheduleLambdaFunctionFailedCause = string;
        export type SignalExternalWorkflowExecutionFailedCause = string;
        export type SignalName = string;    // max: 256, min: 1
        export type StartChildWorkflowExecutionFailedCause = string;
        export type StartLambdaFunctionFailedCause = string;
        export type StartTimerFailedCause = string;
        export type Tag = string;    // max: 256, min: 1
        export type TagList = Tag[];    // max: 5
        export type TaskPriority = string;    // max: 11
        export type TaskToken = string;    // max: 1024, min: 1
        export type TerminateReason = string;    // max: 256
        export type TimerId = string;    // max: 256, min: 1
        export type Timestamp = number;
        export type Truncated = boolean;
        export type Version = string;    // max: 64, min: 1
        export type VersionOptional = string;    // max: 64
        export type WorkflowExecutionCancelRequestedCause = string;
        export type WorkflowExecutionInfoList = WorkflowExecutionInfo[];
        export type WorkflowExecutionTerminatedCause = string;
        export type WorkflowExecutionTimeoutType = string;
        export type WorkflowId = string;    // max: 256, min: 1
        export type WorkflowTypeInfoList = WorkflowTypeInfo[];

        export interface ActivityTask {
            taskToken: TaskToken;
            activityId: ActivityId;
            startedEventId: EventId;
            workflowExecution: WorkflowExecution;
            activityType: ActivityType;
            input?: Data;
        }
        export interface ActivityTaskCancelRequestedEventAttributes {
            decisionTaskCompletedEventId: EventId;
            activityId: ActivityId;
        }
        export interface ActivityTaskCanceledEventAttributes {
            details?: Data;
            scheduledEventId: EventId;
            startedEventId: EventId;
            latestCancelRequestedEventId?: EventId;
        }
        export interface ActivityTaskCompletedEventAttributes {
            result?: Data;
            scheduledEventId: EventId;
            startedEventId: EventId;
        }
        export interface ActivityTaskFailedEventAttributes {
            reason?: FailureReason;
            details?: Data;
            scheduledEventId: EventId;
            startedEventId: EventId;
        }
        export interface ActivityTaskScheduledEventAttributes {
            activityType: ActivityType;
            activityId: ActivityId;
            input?: Data;
            control?: Data;
            scheduleToStartTimeout?: DurationInSecondsOptional;
            scheduleToCloseTimeout?: DurationInSecondsOptional;
            startToCloseTimeout?: DurationInSecondsOptional;
            taskList: TaskList;
            taskPriority?: TaskPriority;
            decisionTaskCompletedEventId: EventId;
            heartbeatTimeout?: DurationInSecondsOptional;
        }
        export interface ActivityTaskStartedEventAttributes {
            identity?: Identity;
            scheduledEventId: EventId;
        }
        export interface ActivityTaskStatus {
            cancelRequested: Canceled;
        }
        export interface ActivityTaskTimedOutEventAttributes {
            timeoutType: ActivityTaskTimeoutType;
            scheduledEventId: EventId;
            startedEventId: EventId;
            details?: LimitedData;
        }
        export interface ActivityType {
            name: Name;
            version: Version;
        }
        export interface ActivityTypeConfiguration {
            defaultTaskStartToCloseTimeout?: DurationInSecondsOptional;
            defaultTaskHeartbeatTimeout?: DurationInSecondsOptional;
            defaultTaskList?: TaskList;
            defaultTaskPriority?: TaskPriority;
            defaultTaskScheduleToStartTimeout?: DurationInSecondsOptional;
            defaultTaskScheduleToCloseTimeout?: DurationInSecondsOptional;
        }
        export interface ActivityTypeDetail {
            typeInfo: ActivityTypeInfo;
            configuration: ActivityTypeConfiguration;
        }
        export interface ActivityTypeInfo {
            activityType: ActivityType;
            status: RegistrationStatus;
            description?: Description;
            creationDate: Timestamp;
            deprecationDate?: Timestamp;
        }
        export interface ActivityTypeInfos {
            typeInfos: ActivityTypeInfoList;
            nextPageToken?: PageToken;
        }
        export interface CancelTimerDecisionAttributes {
            timerId: TimerId;
        }
        export interface CancelTimerFailedEventAttributes {
            timerId: TimerId;
            cause: CancelTimerFailedCause;
            decisionTaskCompletedEventId: EventId;
        }
        export interface CancelWorkflowExecutionDecisionAttributes {
            details?: Data;
        }
        export interface CancelWorkflowExecutionFailedEventAttributes {
            cause: CancelWorkflowExecutionFailedCause;
            decisionTaskCompletedEventId: EventId;
        }
        export interface ChildWorkflowExecutionCanceledEventAttributes {
            workflowExecution: WorkflowExecution;
            workflowType: WorkflowType;
            details?: Data;
            initiatedEventId: EventId;
            startedEventId: EventId;
        }
        export interface ChildWorkflowExecutionCompletedEventAttributes {
            workflowExecution: WorkflowExecution;
            workflowType: WorkflowType;
            result?: Data;
            initiatedEventId: EventId;
            startedEventId: EventId;
        }
        export interface ChildWorkflowExecutionFailedEventAttributes {
            workflowExecution: WorkflowExecution;
            workflowType: WorkflowType;
            reason?: FailureReason;
            details?: Data;
            initiatedEventId: EventId;
            startedEventId: EventId;
        }
        export interface ChildWorkflowExecutionStartedEventAttributes {
            workflowExecution: WorkflowExecution;
            workflowType: WorkflowType;
            initiatedEventId: EventId;
        }
        export interface ChildWorkflowExecutionTerminatedEventAttributes {
            workflowExecution: WorkflowExecution;
            workflowType: WorkflowType;
            initiatedEventId: EventId;
            startedEventId: EventId;
        }
        export interface ChildWorkflowExecutionTimedOutEventAttributes {
            workflowExecution: WorkflowExecution;
            workflowType: WorkflowType;
            timeoutType: WorkflowExecutionTimeoutType;
            initiatedEventId: EventId;
            startedEventId: EventId;
        }
        export interface CloseStatusFilter {
            status: CloseStatus;
        }
        export interface CompleteWorkflowExecutionDecisionAttributes {
            result?: Data;
        }
        export interface CompleteWorkflowExecutionFailedEventAttributes {
            cause: CompleteWorkflowExecutionFailedCause;
            decisionTaskCompletedEventId: EventId;
        }
        export interface ContinueAsNewWorkflowExecutionDecisionAttributes {
            input?: Data;
            executionStartToCloseTimeout?: DurationInSecondsOptional;
            taskList?: TaskList;
            taskPriority?: TaskPriority;
            taskStartToCloseTimeout?: DurationInSecondsOptional;
            childPolicy?: ChildPolicy;
            tagList?: TagList;
            workflowTypeVersion?: Version;
            lambdaRole?: Arn;
        }
        export interface ContinueAsNewWorkflowExecutionFailedEventAttributes {
            cause: ContinueAsNewWorkflowExecutionFailedCause;
            decisionTaskCompletedEventId: EventId;
        }
        export interface CountClosedWorkflowExecutionsInput {
            domain: DomainName;
            startTimeFilter?: ExecutionTimeFilter;
            closeTimeFilter?: ExecutionTimeFilter;
            executionFilter?: WorkflowExecutionFilter;
            typeFilter?: WorkflowTypeFilter;
            tagFilter?: TagFilter;
            closeStatusFilter?: CloseStatusFilter;
        }
        export interface CountOpenWorkflowExecutionsInput {
            domain: DomainName;
            startTimeFilter: ExecutionTimeFilter;
            typeFilter?: WorkflowTypeFilter;
            tagFilter?: TagFilter;
            executionFilter?: WorkflowExecutionFilter;
        }
        export interface CountPendingActivityTasksInput {
            domain: DomainName;
            taskList: TaskList;
        }
        export interface CountPendingDecisionTasksInput {
            domain: DomainName;
            taskList: TaskList;
        }
        export interface Decision {
            decisionType: DecisionType;
            scheduleActivityTaskDecisionAttributes?: ScheduleActivityTaskDecisionAttributes;
            requestCancelActivityTaskDecisionAttributes?: RequestCancelActivityTaskDecisionAttributes;
            completeWorkflowExecutionDecisionAttributes?: CompleteWorkflowExecutionDecisionAttributes;
            failWorkflowExecutionDecisionAttributes?: FailWorkflowExecutionDecisionAttributes;
            cancelWorkflowExecutionDecisionAttributes?: CancelWorkflowExecutionDecisionAttributes;
            continueAsNewWorkflowExecutionDecisionAttributes?: ContinueAsNewWorkflowExecutionDecisionAttributes;
            recordMarkerDecisionAttributes?: RecordMarkerDecisionAttributes;
            startTimerDecisionAttributes?: StartTimerDecisionAttributes;
            cancelTimerDecisionAttributes?: CancelTimerDecisionAttributes;
            signalExternalWorkflowExecutionDecisionAttributes?: SignalExternalWorkflowExecutionDecisionAttributes;
            requestCancelExternalWorkflowExecutionDecisionAttributes?: RequestCancelExternalWorkflowExecutionDecisionAttributes;
            startChildWorkflowExecutionDecisionAttributes?: StartChildWorkflowExecutionDecisionAttributes;
            scheduleLambdaFunctionDecisionAttributes?: ScheduleLambdaFunctionDecisionAttributes;
        }
        export interface DecisionTask {
            taskToken: TaskToken;
            startedEventId: EventId;
            workflowExecution: WorkflowExecution;
            workflowType: WorkflowType;
            events: HistoryEventList;
            nextPageToken?: PageToken;
            previousStartedEventId?: EventId;
        }
        export interface DecisionTaskCompletedEventAttributes {
            executionContext?: Data;
            scheduledEventId: EventId;
            startedEventId: EventId;
        }
        export interface DecisionTaskScheduledEventAttributes {
            taskList: TaskList;
            taskPriority?: TaskPriority;
            startToCloseTimeout?: DurationInSecondsOptional;
        }
        export interface DecisionTaskStartedEventAttributes {
            identity?: Identity;
            scheduledEventId: EventId;
        }
        export interface DecisionTaskTimedOutEventAttributes {
            timeoutType: DecisionTaskTimeoutType;
            scheduledEventId: EventId;
            startedEventId: EventId;
        }
        export interface DefaultUndefinedFault {
            message?: ErrorMessage;
        }
        export interface DeprecateActivityTypeInput {
            domain: DomainName;
            activityType: ActivityType;
        }
        export interface DeprecateDomainInput {
            name: DomainName;
        }
        export interface DeprecateWorkflowTypeInput {
            domain: DomainName;
            workflowType: WorkflowType;
        }
        export interface DescribeActivityTypeInput {
            domain: DomainName;
            activityType: ActivityType;
        }
        export interface DescribeDomainInput {
            name: DomainName;
        }
        export interface DescribeWorkflowExecutionInput {
            domain: DomainName;
            execution: WorkflowExecution;
        }
        export interface DescribeWorkflowTypeInput {
            domain: DomainName;
            workflowType: WorkflowType;
        }
        export interface DomainAlreadyExistsFault {
            message?: ErrorMessage;
        }
        export interface DomainConfiguration {
            workflowExecutionRetentionPeriodInDays: DurationInDays;
        }
        export interface DomainDeprecatedFault {
            message?: ErrorMessage;
        }
        export interface DomainDetail {
            domainInfo: DomainInfo;
            configuration: DomainConfiguration;
        }
        export interface DomainInfo {
            name: DomainName;
            status: RegistrationStatus;
            description?: Description;
        }
        export interface DomainInfos {
            domainInfos: DomainInfoList;
            nextPageToken?: PageToken;
        }
        export interface ExecutionTimeFilter {
            oldestDate: Timestamp;
            latestDate?: Timestamp;
        }
        export interface ExternalWorkflowExecutionCancelRequestedEventAttributes {
            workflowExecution: WorkflowExecution;
            initiatedEventId: EventId;
        }
        export interface ExternalWorkflowExecutionSignaledEventAttributes {
            workflowExecution: WorkflowExecution;
            initiatedEventId: EventId;
        }
        export interface FailWorkflowExecutionDecisionAttributes {
            reason?: FailureReason;
            details?: Data;
        }
        export interface FailWorkflowExecutionFailedEventAttributes {
            cause: FailWorkflowExecutionFailedCause;
            decisionTaskCompletedEventId: EventId;
        }
        export interface GetWorkflowExecutionHistoryInput {
            domain: DomainName;
            execution: WorkflowExecution;
            nextPageToken?: PageToken;
            maximumPageSize?: PageSize;
            reverseOrder?: ReverseOrder;
        }
        export interface History {
            events: HistoryEventList;
            nextPageToken?: PageToken;
        }
        export interface HistoryEvent {
            eventTimestamp: Timestamp;
            eventType: EventType;
            eventId: EventId;
            workflowExecutionStartedEventAttributes?: WorkflowExecutionStartedEventAttributes;
            workflowExecutionCompletedEventAttributes?: WorkflowExecutionCompletedEventAttributes;
            completeWorkflowExecutionFailedEventAttributes?: CompleteWorkflowExecutionFailedEventAttributes;
            workflowExecutionFailedEventAttributes?: WorkflowExecutionFailedEventAttributes;
            failWorkflowExecutionFailedEventAttributes?: FailWorkflowExecutionFailedEventAttributes;
            workflowExecutionTimedOutEventAttributes?: WorkflowExecutionTimedOutEventAttributes;
            workflowExecutionCanceledEventAttributes?: WorkflowExecutionCanceledEventAttributes;
            cancelWorkflowExecutionFailedEventAttributes?: CancelWorkflowExecutionFailedEventAttributes;
            workflowExecutionContinuedAsNewEventAttributes?: WorkflowExecutionContinuedAsNewEventAttributes;
            continueAsNewWorkflowExecutionFailedEventAttributes?: ContinueAsNewWorkflowExecutionFailedEventAttributes;
            workflowExecutionTerminatedEventAttributes?: WorkflowExecutionTerminatedEventAttributes;
            workflowExecutionCancelRequestedEventAttributes?: WorkflowExecutionCancelRequestedEventAttributes;
            decisionTaskScheduledEventAttributes?: DecisionTaskScheduledEventAttributes;
            decisionTaskStartedEventAttributes?: DecisionTaskStartedEventAttributes;
            decisionTaskCompletedEventAttributes?: DecisionTaskCompletedEventAttributes;
            decisionTaskTimedOutEventAttributes?: DecisionTaskTimedOutEventAttributes;
            activityTaskScheduledEventAttributes?: ActivityTaskScheduledEventAttributes;
            activityTaskStartedEventAttributes?: ActivityTaskStartedEventAttributes;
            activityTaskCompletedEventAttributes?: ActivityTaskCompletedEventAttributes;
            activityTaskFailedEventAttributes?: ActivityTaskFailedEventAttributes;
            activityTaskTimedOutEventAttributes?: ActivityTaskTimedOutEventAttributes;
            activityTaskCanceledEventAttributes?: ActivityTaskCanceledEventAttributes;
            activityTaskCancelRequestedEventAttributes?: ActivityTaskCancelRequestedEventAttributes;
            workflowExecutionSignaledEventAttributes?: WorkflowExecutionSignaledEventAttributes;
            markerRecordedEventAttributes?: MarkerRecordedEventAttributes;
            recordMarkerFailedEventAttributes?: RecordMarkerFailedEventAttributes;
            timerStartedEventAttributes?: TimerStartedEventAttributes;
            timerFiredEventAttributes?: TimerFiredEventAttributes;
            timerCanceledEventAttributes?: TimerCanceledEventAttributes;
            startChildWorkflowExecutionInitiatedEventAttributes?: StartChildWorkflowExecutionInitiatedEventAttributes;
            childWorkflowExecutionStartedEventAttributes?: ChildWorkflowExecutionStartedEventAttributes;
            childWorkflowExecutionCompletedEventAttributes?: ChildWorkflowExecutionCompletedEventAttributes;
            childWorkflowExecutionFailedEventAttributes?: ChildWorkflowExecutionFailedEventAttributes;
            childWorkflowExecutionTimedOutEventAttributes?: ChildWorkflowExecutionTimedOutEventAttributes;
            childWorkflowExecutionCanceledEventAttributes?: ChildWorkflowExecutionCanceledEventAttributes;
            childWorkflowExecutionTerminatedEventAttributes?: ChildWorkflowExecutionTerminatedEventAttributes;
            signalExternalWorkflowExecutionInitiatedEventAttributes?: SignalExternalWorkflowExecutionInitiatedEventAttributes;
            externalWorkflowExecutionSignaledEventAttributes?: ExternalWorkflowExecutionSignaledEventAttributes;
            signalExternalWorkflowExecutionFailedEventAttributes?: SignalExternalWorkflowExecutionFailedEventAttributes;
            externalWorkflowExecutionCancelRequestedEventAttributes?: ExternalWorkflowExecutionCancelRequestedEventAttributes;
            requestCancelExternalWorkflowExecutionInitiatedEventAttributes?: RequestCancelExternalWorkflowExecutionInitiatedEventAttributes;
            requestCancelExternalWorkflowExecutionFailedEventAttributes?: RequestCancelExternalWorkflowExecutionFailedEventAttributes;
            scheduleActivityTaskFailedEventAttributes?: ScheduleActivityTaskFailedEventAttributes;
            requestCancelActivityTaskFailedEventAttributes?: RequestCancelActivityTaskFailedEventAttributes;
            startTimerFailedEventAttributes?: StartTimerFailedEventAttributes;
            cancelTimerFailedEventAttributes?: CancelTimerFailedEventAttributes;
            startChildWorkflowExecutionFailedEventAttributes?: StartChildWorkflowExecutionFailedEventAttributes;
            lambdaFunctionScheduledEventAttributes?: LambdaFunctionScheduledEventAttributes;
            lambdaFunctionStartedEventAttributes?: LambdaFunctionStartedEventAttributes;
            lambdaFunctionCompletedEventAttributes?: LambdaFunctionCompletedEventAttributes;
            lambdaFunctionFailedEventAttributes?: LambdaFunctionFailedEventAttributes;
            lambdaFunctionTimedOutEventAttributes?: LambdaFunctionTimedOutEventAttributes;
            scheduleLambdaFunctionFailedEventAttributes?: ScheduleLambdaFunctionFailedEventAttributes;
            startLambdaFunctionFailedEventAttributes?: StartLambdaFunctionFailedEventAttributes;
        }
        export interface LambdaFunctionCompletedEventAttributes {
            scheduledEventId: EventId;
            startedEventId: EventId;
            result?: Data;
        }
        export interface LambdaFunctionFailedEventAttributes {
            scheduledEventId: EventId;
            startedEventId: EventId;
            reason?: FailureReason;
            details?: Data;
        }
        export interface LambdaFunctionScheduledEventAttributes {
            id: FunctionId;
            name: FunctionName;
            input?: FunctionInput;
            startToCloseTimeout?: DurationInSecondsOptional;
            decisionTaskCompletedEventId: EventId;
        }
        export interface LambdaFunctionStartedEventAttributes {
            scheduledEventId: EventId;
        }
        export interface LambdaFunctionTimedOutEventAttributes {
            scheduledEventId: EventId;
            startedEventId: EventId;
            timeoutType?: LambdaFunctionTimeoutType;
        }
        export interface LimitExceededFault {
            message?: ErrorMessage;
        }
        export interface ListActivityTypesInput {
            domain: DomainName;
            name?: Name;
            registrationStatus: RegistrationStatus;
            nextPageToken?: PageToken;
            maximumPageSize?: PageSize;
            reverseOrder?: ReverseOrder;
        }
        export interface ListClosedWorkflowExecutionsInput {
            domain: DomainName;
            startTimeFilter?: ExecutionTimeFilter;
            closeTimeFilter?: ExecutionTimeFilter;
            executionFilter?: WorkflowExecutionFilter;
            closeStatusFilter?: CloseStatusFilter;
            typeFilter?: WorkflowTypeFilter;
            tagFilter?: TagFilter;
            nextPageToken?: PageToken;
            maximumPageSize?: PageSize;
            reverseOrder?: ReverseOrder;
        }
        export interface ListDomainsInput {
            nextPageToken?: PageToken;
            registrationStatus: RegistrationStatus;
            maximumPageSize?: PageSize;
            reverseOrder?: ReverseOrder;
        }
        export interface ListOpenWorkflowExecutionsInput {
            domain: DomainName;
            startTimeFilter: ExecutionTimeFilter;
            typeFilter?: WorkflowTypeFilter;
            tagFilter?: TagFilter;
            nextPageToken?: PageToken;
            maximumPageSize?: PageSize;
            reverseOrder?: ReverseOrder;
            executionFilter?: WorkflowExecutionFilter;
        }
        export interface ListWorkflowTypesInput {
            domain: DomainName;
            name?: Name;
            registrationStatus: RegistrationStatus;
            nextPageToken?: PageToken;
            maximumPageSize?: PageSize;
            reverseOrder?: ReverseOrder;
        }
        export interface MarkerRecordedEventAttributes {
            markerName: MarkerName;
            details?: Data;
            decisionTaskCompletedEventId: EventId;
        }
        export interface OperationNotPermittedFault {
            message?: ErrorMessage;
        }
        export interface PendingTaskCount {
            count: Count;
            truncated?: Truncated;
        }
        export interface PollForActivityTaskInput {
            domain: DomainName;
            taskList: TaskList;
            identity?: Identity;
        }
        export interface PollForDecisionTaskInput {
            domain: DomainName;
            taskList: TaskList;
            identity?: Identity;
            nextPageToken?: PageToken;
            maximumPageSize?: PageSize;
            reverseOrder?: ReverseOrder;
        }
        export interface RecordActivityTaskHeartbeatInput {
            taskToken: TaskToken;
            details?: LimitedData;
        }
        export interface RecordMarkerDecisionAttributes {
            markerName: MarkerName;
            details?: Data;
        }
        export interface RecordMarkerFailedEventAttributes {
            markerName: MarkerName;
            cause: RecordMarkerFailedCause;
            decisionTaskCompletedEventId: EventId;
        }
        export interface RegisterActivityTypeInput {
            domain: DomainName;
            name: Name;
            version: Version;
            description?: Description;
            defaultTaskStartToCloseTimeout?: DurationInSecondsOptional;
            defaultTaskHeartbeatTimeout?: DurationInSecondsOptional;
            defaultTaskList?: TaskList;
            defaultTaskPriority?: TaskPriority;
            defaultTaskScheduleToStartTimeout?: DurationInSecondsOptional;
            defaultTaskScheduleToCloseTimeout?: DurationInSecondsOptional;
        }
        export interface RegisterDomainInput {
            name: DomainName;
            description?: Description;
            workflowExecutionRetentionPeriodInDays: DurationInDays;
        }
        export interface RegisterWorkflowTypeInput {
            domain: DomainName;
            name: Name;
            version: Version;
            description?: Description;
            defaultTaskStartToCloseTimeout?: DurationInSecondsOptional;
            defaultExecutionStartToCloseTimeout?: DurationInSecondsOptional;
            defaultTaskList?: TaskList;
            defaultTaskPriority?: TaskPriority;
            defaultChildPolicy?: ChildPolicy;
            defaultLambdaRole?: Arn;
        }
        export interface RequestCancelActivityTaskDecisionAttributes {
            activityId: ActivityId;
        }
        export interface RequestCancelActivityTaskFailedEventAttributes {
            activityId: ActivityId;
            cause: RequestCancelActivityTaskFailedCause;
            decisionTaskCompletedEventId: EventId;
        }
        export interface RequestCancelExternalWorkflowExecutionDecisionAttributes {
            workflowId: WorkflowId;
            runId?: RunIdOptional;
            control?: Data;
        }
        export interface RequestCancelExternalWorkflowExecutionFailedEventAttributes {
            workflowId: WorkflowId;
            runId?: RunIdOptional;
            cause: RequestCancelExternalWorkflowExecutionFailedCause;
            initiatedEventId: EventId;
            decisionTaskCompletedEventId: EventId;
            control?: Data;
        }
        export interface RequestCancelExternalWorkflowExecutionInitiatedEventAttributes {
            workflowId: WorkflowId;
            runId?: RunIdOptional;
            decisionTaskCompletedEventId: EventId;
            control?: Data;
        }
        export interface RequestCancelWorkflowExecutionInput {
            domain: DomainName;
            workflowId: WorkflowId;
            runId?: RunIdOptional;
        }
        export interface RespondActivityTaskCanceledInput {
            taskToken: TaskToken;
            details?: Data;
        }
        export interface RespondActivityTaskCompletedInput {
            taskToken: TaskToken;
            result?: Data;
        }
        export interface RespondActivityTaskFailedInput {
            taskToken: TaskToken;
            reason?: FailureReason;
            details?: Data;
        }
        export interface RespondDecisionTaskCompletedInput {
            taskToken: TaskToken;
            decisions?: DecisionList;
            executionContext?: Data;
        }
        export interface Run {
            runId?: RunId;
        }
        export interface ScheduleActivityTaskDecisionAttributes {
            activityType: ActivityType;
            activityId: ActivityId;
            control?: Data;
            input?: Data;
            scheduleToCloseTimeout?: DurationInSecondsOptional;
            taskList?: TaskList;
            taskPriority?: TaskPriority;
            scheduleToStartTimeout?: DurationInSecondsOptional;
            startToCloseTimeout?: DurationInSecondsOptional;
            heartbeatTimeout?: DurationInSecondsOptional;
        }
        export interface ScheduleActivityTaskFailedEventAttributes {
            activityType: ActivityType;
            activityId: ActivityId;
            cause: ScheduleActivityTaskFailedCause;
            decisionTaskCompletedEventId: EventId;
        }
        export interface ScheduleLambdaFunctionDecisionAttributes {
            id: FunctionId;
            name: FunctionName;
            input?: FunctionInput;
            startToCloseTimeout?: DurationInSecondsOptional;
        }
        export interface ScheduleLambdaFunctionFailedEventAttributes {
            id: FunctionId;
            name: FunctionName;
            cause: ScheduleLambdaFunctionFailedCause;
            decisionTaskCompletedEventId: EventId;
        }
        export interface SignalExternalWorkflowExecutionDecisionAttributes {
            workflowId: WorkflowId;
            runId?: RunIdOptional;
            signalName: SignalName;
            input?: Data;
            control?: Data;
        }
        export interface SignalExternalWorkflowExecutionFailedEventAttributes {
            workflowId: WorkflowId;
            runId?: RunIdOptional;
            cause: SignalExternalWorkflowExecutionFailedCause;
            initiatedEventId: EventId;
            decisionTaskCompletedEventId: EventId;
            control?: Data;
        }
        export interface SignalExternalWorkflowExecutionInitiatedEventAttributes {
            workflowId: WorkflowId;
            runId?: RunIdOptional;
            signalName: SignalName;
            input?: Data;
            decisionTaskCompletedEventId: EventId;
            control?: Data;
        }
        export interface SignalWorkflowExecutionInput {
            domain: DomainName;
            workflowId: WorkflowId;
            runId?: RunIdOptional;
            signalName: SignalName;
            input?: Data;
        }
        export interface StartChildWorkflowExecutionDecisionAttributes {
            workflowType: WorkflowType;
            workflowId: WorkflowId;
            control?: Data;
            input?: Data;
            executionStartToCloseTimeout?: DurationInSecondsOptional;
            taskList?: TaskList;
            taskPriority?: TaskPriority;
            taskStartToCloseTimeout?: DurationInSecondsOptional;
            childPolicy?: ChildPolicy;
            tagList?: TagList;
            lambdaRole?: Arn;
        }
        export interface StartChildWorkflowExecutionFailedEventAttributes {
            workflowType: WorkflowType;
            cause: StartChildWorkflowExecutionFailedCause;
            workflowId: WorkflowId;
            initiatedEventId: EventId;
            decisionTaskCompletedEventId: EventId;
            control?: Data;
        }
        export interface StartChildWorkflowExecutionInitiatedEventAttributes {
            workflowId: WorkflowId;
            workflowType: WorkflowType;
            control?: Data;
            input?: Data;
            executionStartToCloseTimeout?: DurationInSecondsOptional;
            taskList: TaskList;
            taskPriority?: TaskPriority;
            decisionTaskCompletedEventId: EventId;
            childPolicy: ChildPolicy;
            taskStartToCloseTimeout?: DurationInSecondsOptional;
            tagList?: TagList;
            lambdaRole?: Arn;
        }
        export interface StartLambdaFunctionFailedEventAttributes {
            scheduledEventId?: EventId;
            cause?: StartLambdaFunctionFailedCause;
            message?: CauseMessage;
        }
        export interface StartTimerDecisionAttributes {
            timerId: TimerId;
            control?: Data;
            startToFireTimeout: DurationInSeconds;
        }
        export interface StartTimerFailedEventAttributes {
            timerId: TimerId;
            cause: StartTimerFailedCause;
            decisionTaskCompletedEventId: EventId;
        }
        export interface StartWorkflowExecutionInput {
            domain: DomainName;
            workflowId: WorkflowId;
            workflowType: WorkflowType;
            taskList?: TaskList;
            taskPriority?: TaskPriority;
            input?: Data;
            executionStartToCloseTimeout?: DurationInSecondsOptional;
            tagList?: TagList;
            taskStartToCloseTimeout?: DurationInSecondsOptional;
            childPolicy?: ChildPolicy;
            lambdaRole?: Arn;
        }
        export interface TagFilter {
            tag: Tag;
        }
        export interface TaskList {
            name: Name;
        }
        export interface TerminateWorkflowExecutionInput {
            domain: DomainName;
            workflowId: WorkflowId;
            runId?: RunIdOptional;
            reason?: TerminateReason;
            details?: Data;
            childPolicy?: ChildPolicy;
        }
        export interface TimerCanceledEventAttributes {
            timerId: TimerId;
            startedEventId: EventId;
            decisionTaskCompletedEventId: EventId;
        }
        export interface TimerFiredEventAttributes {
            timerId: TimerId;
            startedEventId: EventId;
        }
        export interface TimerStartedEventAttributes {
            timerId: TimerId;
            control?: Data;
            startToFireTimeout: DurationInSeconds;
            decisionTaskCompletedEventId: EventId;
        }
        export interface TypeAlreadyExistsFault {
            message?: ErrorMessage;
        }
        export interface TypeDeprecatedFault {
            message?: ErrorMessage;
        }
        export interface UnknownResourceFault {
            message?: ErrorMessage;
        }
        export interface WorkflowExecution {
            workflowId: WorkflowId;
            runId: RunId;
        }
        export interface WorkflowExecutionAlreadyStartedFault {
            message?: ErrorMessage;
        }
        export interface WorkflowExecutionCancelRequestedEventAttributes {
            externalWorkflowExecution?: WorkflowExecution;
            externalInitiatedEventId?: EventId;
            cause?: WorkflowExecutionCancelRequestedCause;
        }
        export interface WorkflowExecutionCanceledEventAttributes {
            details?: Data;
            decisionTaskCompletedEventId: EventId;
        }
        export interface WorkflowExecutionCompletedEventAttributes {
            result?: Data;
            decisionTaskCompletedEventId: EventId;
        }
        export interface WorkflowExecutionConfiguration {
            taskStartToCloseTimeout: DurationInSeconds;
            executionStartToCloseTimeout: DurationInSeconds;
            taskList: TaskList;
            taskPriority?: TaskPriority;
            childPolicy: ChildPolicy;
            lambdaRole?: Arn;
        }
        export interface WorkflowExecutionContinuedAsNewEventAttributes {
            input?: Data;
            decisionTaskCompletedEventId: EventId;
            newExecutionRunId: RunId;
            executionStartToCloseTimeout?: DurationInSecondsOptional;
            taskList: TaskList;
            taskPriority?: TaskPriority;
            taskStartToCloseTimeout?: DurationInSecondsOptional;
            childPolicy: ChildPolicy;
            tagList?: TagList;
            workflowType: WorkflowType;
            lambdaRole?: Arn;
        }
        export interface WorkflowExecutionCount {
            count: Count;
            truncated?: Truncated;
        }
        export interface WorkflowExecutionDetail {
            executionInfo: WorkflowExecutionInfo;
            executionConfiguration: WorkflowExecutionConfiguration;
            openCounts: WorkflowExecutionOpenCounts;
            latestActivityTaskTimestamp?: Timestamp;
            latestExecutionContext?: Data;
        }
        export interface WorkflowExecutionFailedEventAttributes {
            reason?: FailureReason;
            details?: Data;
            decisionTaskCompletedEventId: EventId;
        }
        export interface WorkflowExecutionFilter {
            workflowId: WorkflowId;
        }
        export interface WorkflowExecutionInfo {
            execution: WorkflowExecution;
            workflowType: WorkflowType;
            startTimestamp: Timestamp;
            closeTimestamp?: Timestamp;
            executionStatus: ExecutionStatus;
            closeStatus?: CloseStatus;
            parent?: WorkflowExecution;
            tagList?: TagList;
            cancelRequested?: Canceled;
        }
        export interface WorkflowExecutionInfos {
            executionInfos: WorkflowExecutionInfoList;
            nextPageToken?: PageToken;
        }
        export interface WorkflowExecutionOpenCounts {
            openActivityTasks: Count;
            openDecisionTasks: OpenDecisionTasksCount;
            openTimers: Count;
            openChildWorkflowExecutions: Count;
            openLambdaFunctions?: Count;
        }
        export interface WorkflowExecutionSignaledEventAttributes {
            signalName: SignalName;
            input?: Data;
            externalWorkflowExecution?: WorkflowExecution;
            externalInitiatedEventId?: EventId;
        }
        export interface WorkflowExecutionStartedEventAttributes {
            input?: Data;
            executionStartToCloseTimeout?: DurationInSecondsOptional;
            taskStartToCloseTimeout?: DurationInSecondsOptional;
            childPolicy: ChildPolicy;
            taskList: TaskList;
            workflowType: WorkflowType;
            tagList?: TagList;
            taskPriority?: TaskPriority;
            continuedExecutionRunId?: RunIdOptional;
            parentWorkflowExecution?: WorkflowExecution;
            parentInitiatedEventId?: EventId;
            lambdaRole?: Arn;
        }
        export interface WorkflowExecutionTerminatedEventAttributes {
            reason?: TerminateReason;
            details?: Data;
            childPolicy: ChildPolicy;
            cause?: WorkflowExecutionTerminatedCause;
        }
        export interface WorkflowExecutionTimedOutEventAttributes {
            timeoutType: WorkflowExecutionTimeoutType;
            childPolicy: ChildPolicy;
        }
        export interface WorkflowType {
            name: Name;
            version: Version;
        }
        export interface WorkflowTypeConfiguration {
            defaultTaskStartToCloseTimeout?: DurationInSecondsOptional;
            defaultExecutionStartToCloseTimeout?: DurationInSecondsOptional;
            defaultTaskList?: TaskList;
            defaultTaskPriority?: TaskPriority;
            defaultChildPolicy?: ChildPolicy;
            defaultLambdaRole?: Arn;
        }
        export interface WorkflowTypeDetail {
            typeInfo: WorkflowTypeInfo;
            configuration: WorkflowTypeConfiguration;
        }
        export interface WorkflowTypeFilter {
            name: Name;
            version?: VersionOptional;
        }
        export interface WorkflowTypeInfo {
            workflowType: WorkflowType;
            status: RegistrationStatus;
            description?: Description;
            creationDate: Timestamp;
            deprecationDate?: Timestamp;
        }
        export interface WorkflowTypeInfos {
            typeInfos: WorkflowTypeInfoList;
            nextPageToken?: PageToken;
        }

    }
}
