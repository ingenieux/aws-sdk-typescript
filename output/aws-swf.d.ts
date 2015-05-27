// DO NOT EDIT!
//
declare module "aws-sdk" {
    export class SWF {
      constructor(options?: any);
      countClosedWorkflowExecutions(params: CountClosedWorkflowExecutionsInput, callback: (err: UnknownResourceFault|OperationNotPermittedFault|any, data: WorkflowExecutionCount|any) => void): void;
      countOpenWorkflowExecutions(params: CountOpenWorkflowExecutionsInput, callback: (err: UnknownResourceFault|OperationNotPermittedFault|any, data: WorkflowExecutionCount|any) => void): void;
      countPendingActivityTasks(params: CountPendingActivityTasksInput, callback: (err: UnknownResourceFault|OperationNotPermittedFault|any, data: PendingTaskCount|any) => void): void;
      countPendingDecisionTasks(params: CountPendingDecisionTasksInput, callback: (err: UnknownResourceFault|OperationNotPermittedFault|any, data: PendingTaskCount|any) => void): void;
      deprecateActivityType(params: DeprecateActivityTypeInput, callback: (err: UnknownResourceFault|TypeDeprecatedFault|OperationNotPermittedFault|any, data: any) => void): void;
      deprecateDomain(params: DeprecateDomainInput, callback: (err: UnknownResourceFault|DomainDeprecatedFault|OperationNotPermittedFault|any, data: any) => void): void;
      deprecateWorkflowType(params: DeprecateWorkflowTypeInput, callback: (err: UnknownResourceFault|TypeDeprecatedFault|OperationNotPermittedFault|any, data: any) => void): void;
      describeActivityType(params: DescribeActivityTypeInput, callback: (err: UnknownResourceFault|OperationNotPermittedFault|any, data: ActivityTypeDetail|any) => void): void;
      describeDomain(params: DescribeDomainInput, callback: (err: UnknownResourceFault|OperationNotPermittedFault|any, data: DomainDetail|any) => void): void;
      describeWorkflowExecution(params: DescribeWorkflowExecutionInput, callback: (err: UnknownResourceFault|OperationNotPermittedFault|any, data: WorkflowExecutionDetail|any) => void): void;
      describeWorkflowType(params: DescribeWorkflowTypeInput, callback: (err: UnknownResourceFault|OperationNotPermittedFault|any, data: WorkflowTypeDetail|any) => void): void;
      getWorkflowExecutionHistory(params: GetWorkflowExecutionHistoryInput, callback: (err: UnknownResourceFault|OperationNotPermittedFault|any, data: History|any) => void): void;
      listActivityTypes(params: ListActivityTypesInput, callback: (err: OperationNotPermittedFault|UnknownResourceFault|any, data: ActivityTypeInfos|any) => void): void;
      listClosedWorkflowExecutions(params: ListClosedWorkflowExecutionsInput, callback: (err: UnknownResourceFault|OperationNotPermittedFault|any, data: WorkflowExecutionInfos|any) => void): void;
      listDomains(params: ListDomainsInput, callback: (err: OperationNotPermittedFault|any, data: DomainInfos|any) => void): void;
      listOpenWorkflowExecutions(params: ListOpenWorkflowExecutionsInput, callback: (err: UnknownResourceFault|OperationNotPermittedFault|any, data: WorkflowExecutionInfos|any) => void): void;
      listWorkflowTypes(params: ListWorkflowTypesInput, callback: (err: OperationNotPermittedFault|UnknownResourceFault|any, data: WorkflowTypeInfos|any) => void): void;
      pollForActivityTask(params: PollForActivityTaskInput, callback: (err: UnknownResourceFault|OperationNotPermittedFault|LimitExceededFault|any, data: ActivityTask|any) => void): void;
      pollForDecisionTask(params: PollForDecisionTaskInput, callback: (err: UnknownResourceFault|OperationNotPermittedFault|LimitExceededFault|any, data: DecisionTask|any) => void): void;
      recordActivityTaskHeartbeat(params: RecordActivityTaskHeartbeatInput, callback: (err: UnknownResourceFault|OperationNotPermittedFault|any, data: ActivityTaskStatus|any) => void): void;
      registerActivityType(params: RegisterActivityTypeInput, callback: (err: TypeAlreadyExistsFault|LimitExceededFault|UnknownResourceFault|OperationNotPermittedFault|any, data: any) => void): void;
      registerDomain(params: RegisterDomainInput, callback: (err: DomainAlreadyExistsFault|LimitExceededFault|OperationNotPermittedFault|any, data: any) => void): void;
      registerWorkflowType(params: RegisterWorkflowTypeInput, callback: (err: TypeAlreadyExistsFault|LimitExceededFault|UnknownResourceFault|OperationNotPermittedFault|any, data: any) => void): void;
      requestCancelWorkflowExecution(params: RequestCancelWorkflowExecutionInput, callback: (err: UnknownResourceFault|OperationNotPermittedFault|any, data: any) => void): void;
      respondActivityTaskCanceled(params: RespondActivityTaskCanceledInput, callback: (err: UnknownResourceFault|OperationNotPermittedFault|any, data: any) => void): void;
      respondActivityTaskCompleted(params: RespondActivityTaskCompletedInput, callback: (err: UnknownResourceFault|OperationNotPermittedFault|any, data: any) => void): void;
      respondActivityTaskFailed(params: RespondActivityTaskFailedInput, callback: (err: UnknownResourceFault|OperationNotPermittedFault|any, data: any) => void): void;
      respondDecisionTaskCompleted(params: RespondDecisionTaskCompletedInput, callback: (err: UnknownResourceFault|OperationNotPermittedFault|any, data: any) => void): void;
      signalWorkflowExecution(params: SignalWorkflowExecutionInput, callback: (err: UnknownResourceFault|OperationNotPermittedFault|any, data: any) => void): void;
      startWorkflowExecution(params: StartWorkflowExecutionInput, callback: (err: UnknownResourceFault|TypeDeprecatedFault|WorkflowExecutionAlreadyStartedFault|LimitExceededFault|OperationNotPermittedFault|DefaultUndefinedFault|any, data: Run|any) => void): void;
      terminateWorkflowExecution(params: TerminateWorkflowExecutionInput, callback: (err: UnknownResourceFault|OperationNotPermittedFault|any, data: any) => void): void;
    }

    export type ActivityId = string;

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


    export type ActivityTaskTimeoutType = string;

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


    export type ActivityTypeInfoList = Array<ActivityTypeInfo>;

    export interface ActivityTypeInfos {
      typeInfos: ActivityTypeInfoList;
      nextPageToken?: PageToken;
    }


    export interface CancelTimerDecisionAttributes {
      timerId: TimerId;
    }


    export type CancelTimerFailedCause = string;

    export interface CancelTimerFailedEventAttributes {
      timerId: TimerId;
      cause: CancelTimerFailedCause;
      decisionTaskCompletedEventId: EventId;
    }


    export interface CancelWorkflowExecutionDecisionAttributes {
      details?: Data;
    }


    export type CancelWorkflowExecutionFailedCause = string;

    export interface CancelWorkflowExecutionFailedEventAttributes {
      cause: CancelWorkflowExecutionFailedCause;
      decisionTaskCompletedEventId: EventId;
    }


    export type Canceled = boolean;

    export type ChildPolicy = string;

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


    export type CloseStatus = string;

    export interface CloseStatusFilter {
      status: CloseStatus;
    }


    export interface CompleteWorkflowExecutionDecisionAttributes {
      result?: Data;
    }


    export type CompleteWorkflowExecutionFailedCause = string;

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
    }


    export type ContinueAsNewWorkflowExecutionFailedCause = string;

    export interface ContinueAsNewWorkflowExecutionFailedEventAttributes {
      cause: ContinueAsNewWorkflowExecutionFailedCause;
      decisionTaskCompletedEventId: EventId;
    }


    export type Count = number;

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


    export type Data = string;

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
    }


    export type DecisionList = Array<Decision>;

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


    export type DecisionTaskTimeoutType = string;

    export type DecisionType = string;

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


    export type Description = string;

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


    export type DomainInfoList = Array<DomainInfo>;

    export interface DomainInfos {
      domainInfos: DomainInfoList;
      nextPageToken?: PageToken;
    }


    export type DomainName = string;

    export type DurationInDays = string;

    export type DurationInSeconds = string;

    export type DurationInSecondsOptional = string;

    export type ErrorMessage = string;

    export type EventId = number;

    export type EventType = string;

    export type ExecutionStatus = string;

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


    export type FailWorkflowExecutionFailedCause = string;

    export interface FailWorkflowExecutionFailedEventAttributes {
      cause: FailWorkflowExecutionFailedCause;
      decisionTaskCompletedEventId: EventId;
    }


    export type FailureReason = string;

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
    }


    export type HistoryEventList = Array<HistoryEvent>;

    export type Identity = string;

    export interface LimitExceededFault {
      message?: ErrorMessage;
    }


    export type LimitedData = string;

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


    export type MarkerName = string;

    export interface MarkerRecordedEventAttributes {
      markerName: MarkerName;
      details?: Data;
      decisionTaskCompletedEventId: EventId;
    }


    export type Name = string;

    export type OpenDecisionTasksCount = number;

    export interface OperationNotPermittedFault {
      message?: ErrorMessage;
    }


    export type PageSize = number;

    export type PageToken = string;

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


    export type RecordMarkerFailedCause = string;

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
    }


    export type RegistrationStatus = string;

    export interface RequestCancelActivityTaskDecisionAttributes {
      activityId: ActivityId;
    }


    export type RequestCancelActivityTaskFailedCause = string;

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


    export type RequestCancelExternalWorkflowExecutionFailedCause = string;

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


    export type ReverseOrder = boolean;

    export interface Run {
      runId?: RunId;
    }


    export type RunId = string;

    export type RunIdOptional = string;

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


    export type ScheduleActivityTaskFailedCause = string;

    export interface ScheduleActivityTaskFailedEventAttributes {
      activityType: ActivityType;
      activityId: ActivityId;
      cause: ScheduleActivityTaskFailedCause;
      decisionTaskCompletedEventId: EventId;
    }


    export interface SignalExternalWorkflowExecutionDecisionAttributes {
      workflowId: WorkflowId;
      runId?: RunIdOptional;
      signalName: SignalName;
      input?: Data;
      control?: Data;
    }


    export type SignalExternalWorkflowExecutionFailedCause = string;

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


    export type SignalName = string;

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
    }


    export type StartChildWorkflowExecutionFailedCause = string;

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
    }


    export interface StartTimerDecisionAttributes {
      timerId: TimerId;
      control?: Data;
      startToFireTimeout: DurationInSeconds;
    }


    export type StartTimerFailedCause = string;

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
    }


    export type Tag = string;

    export interface TagFilter {
      tag: Tag;
    }


    export type TagList = Array<Tag>; // max: 5

    export interface TaskList {
      name: Name;
    }


    export type TaskPriority = string;

    export type TaskToken = string;

    export type TerminateReason = string;

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


    export type TimerId = string;

    export interface TimerStartedEventAttributes {
      timerId: TimerId;
      control?: Data;
      startToFireTimeout: DurationInSeconds;
      decisionTaskCompletedEventId: EventId;
    }


    export type Timestamp = number;

    export type Truncated = boolean;

    export interface TypeAlreadyExistsFault {
      message?: ErrorMessage;
    }


    export interface TypeDeprecatedFault {
      message?: ErrorMessage;
    }


    export interface UnknownResourceFault {
      message?: ErrorMessage;
    }


    export type Version = string;

    export type VersionOptional = string;

    export interface WorkflowExecution {
      workflowId: WorkflowId;
      runId: RunId;
    }


    export interface WorkflowExecutionAlreadyStartedFault {
      message?: ErrorMessage;
    }


    export type WorkflowExecutionCancelRequestedCause = string;

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


    export type WorkflowExecutionInfoList = Array<WorkflowExecutionInfo>;

    export interface WorkflowExecutionInfos {
      executionInfos: WorkflowExecutionInfoList;
      nextPageToken?: PageToken;
    }


    export interface WorkflowExecutionOpenCounts {
      openActivityTasks: Count;
      openDecisionTasks: OpenDecisionTasksCount;
      openTimers: Count;
      openChildWorkflowExecutions: Count;
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
    }


    export type WorkflowExecutionTerminatedCause = string;

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


    export type WorkflowExecutionTimeoutType = string;

    export type WorkflowId = string;

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


    export type WorkflowTypeInfoList = Array<WorkflowTypeInfo>;

    export interface WorkflowTypeInfos {
      typeInfos: WorkflowTypeInfoList;
      nextPageToken?: PageToken;
    }


}
