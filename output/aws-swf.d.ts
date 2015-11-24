// DO NOT EDIT!
//

///<reference path="./aws-sdk-common.d.ts" />
declare module "aws-sdk" {
    export class SWF {
      constructor(options?: any);
      countClosedWorkflowExecutions(params: SWFCountClosedWorkflowExecutionsInput, callback: (err: SWFUnknownResourceFault|SWFOperationNotPermittedFault|any, data: SWFWorkflowExecutionCount|any) => void): void;
      countOpenWorkflowExecutions(params: SWFCountOpenWorkflowExecutionsInput, callback: (err: SWFUnknownResourceFault|SWFOperationNotPermittedFault|any, data: SWFWorkflowExecutionCount|any) => void): void;
      countPendingActivityTasks(params: SWFCountPendingActivityTasksInput, callback: (err: SWFUnknownResourceFault|SWFOperationNotPermittedFault|any, data: SWFPendingTaskCount|any) => void): void;
      countPendingDecisionTasks(params: SWFCountPendingDecisionTasksInput, callback: (err: SWFUnknownResourceFault|SWFOperationNotPermittedFault|any, data: SWFPendingTaskCount|any) => void): void;
      deprecateActivityType(params: SWFDeprecateActivityTypeInput, callback: (err: SWFUnknownResourceFault|SWFTypeDeprecatedFault|SWFOperationNotPermittedFault|any, data: any) => void): void;
      deprecateDomain(params: SWFDeprecateDomainInput, callback: (err: SWFUnknownResourceFault|SWFDomainDeprecatedFault|SWFOperationNotPermittedFault|any, data: any) => void): void;
      deprecateWorkflowType(params: SWFDeprecateWorkflowTypeInput, callback: (err: SWFUnknownResourceFault|SWFTypeDeprecatedFault|SWFOperationNotPermittedFault|any, data: any) => void): void;
      describeActivityType(params: SWFDescribeActivityTypeInput, callback: (err: SWFUnknownResourceFault|SWFOperationNotPermittedFault|any, data: SWFActivityTypeDetail|any) => void): void;
      describeDomain(params: SWFDescribeDomainInput, callback: (err: SWFUnknownResourceFault|SWFOperationNotPermittedFault|any, data: SWFDomainDetail|any) => void): void;
      describeWorkflowExecution(params: SWFDescribeWorkflowExecutionInput, callback: (err: SWFUnknownResourceFault|SWFOperationNotPermittedFault|any, data: SWFWorkflowExecutionDetail|any) => void): void;
      describeWorkflowType(params: SWFDescribeWorkflowTypeInput, callback: (err: SWFUnknownResourceFault|SWFOperationNotPermittedFault|any, data: SWFWorkflowTypeDetail|any) => void): void;
      getWorkflowExecutionHistory(params: SWFGetWorkflowExecutionHistoryInput, callback: (err: SWFUnknownResourceFault|SWFOperationNotPermittedFault|any, data: SWFHistory|any) => void): void;
      listActivityTypes(params: SWFListActivityTypesInput, callback: (err: SWFOperationNotPermittedFault|SWFUnknownResourceFault|any, data: SWFActivityTypeInfos|any) => void): void;
      listClosedWorkflowExecutions(params: SWFListClosedWorkflowExecutionsInput, callback: (err: SWFUnknownResourceFault|SWFOperationNotPermittedFault|any, data: SWFWorkflowExecutionInfos|any) => void): void;
      listDomains(params: SWFListDomainsInput, callback: (err: SWFOperationNotPermittedFault|any, data: SWFDomainInfos|any) => void): void;
      listOpenWorkflowExecutions(params: SWFListOpenWorkflowExecutionsInput, callback: (err: SWFUnknownResourceFault|SWFOperationNotPermittedFault|any, data: SWFWorkflowExecutionInfos|any) => void): void;
      listWorkflowTypes(params: SWFListWorkflowTypesInput, callback: (err: SWFOperationNotPermittedFault|SWFUnknownResourceFault|any, data: SWFWorkflowTypeInfos|any) => void): void;
      pollForActivityTask(params: SWFPollForActivityTaskInput, callback: (err: SWFUnknownResourceFault|SWFOperationNotPermittedFault|SWFLimitExceededFault|any, data: SWFActivityTask|any) => void): void;
      pollForDecisionTask(params: SWFPollForDecisionTaskInput, callback: (err: SWFUnknownResourceFault|SWFOperationNotPermittedFault|SWFLimitExceededFault|any, data: SWFDecisionTask|any) => void): void;
      recordActivityTaskHeartbeat(params: SWFRecordActivityTaskHeartbeatInput, callback: (err: SWFUnknownResourceFault|SWFOperationNotPermittedFault|any, data: SWFActivityTaskStatus|any) => void): void;
      registerActivityType(params: SWFRegisterActivityTypeInput, callback: (err: SWFTypeAlreadyExistsFault|SWFLimitExceededFault|SWFUnknownResourceFault|SWFOperationNotPermittedFault|any, data: any) => void): void;
      registerDomain(params: SWFRegisterDomainInput, callback: (err: SWFDomainAlreadyExistsFault|SWFLimitExceededFault|SWFOperationNotPermittedFault|any, data: any) => void): void;
      registerWorkflowType(params: SWFRegisterWorkflowTypeInput, callback: (err: SWFTypeAlreadyExistsFault|SWFLimitExceededFault|SWFUnknownResourceFault|SWFOperationNotPermittedFault|any, data: any) => void): void;
      requestCancelWorkflowExecution(params: SWFRequestCancelWorkflowExecutionInput, callback: (err: SWFUnknownResourceFault|SWFOperationNotPermittedFault|any, data: any) => void): void;
      respondActivityTaskCanceled(params: SWFRespondActivityTaskCanceledInput, callback: (err: SWFUnknownResourceFault|SWFOperationNotPermittedFault|any, data: any) => void): void;
      respondActivityTaskCompleted(params: SWFRespondActivityTaskCompletedInput, callback: (err: SWFUnknownResourceFault|SWFOperationNotPermittedFault|any, data: any) => void): void;
      respondActivityTaskFailed(params: SWFRespondActivityTaskFailedInput, callback: (err: SWFUnknownResourceFault|SWFOperationNotPermittedFault|any, data: any) => void): void;
      respondDecisionTaskCompleted(params: SWFRespondDecisionTaskCompletedInput, callback: (err: SWFUnknownResourceFault|SWFOperationNotPermittedFault|any, data: any) => void): void;
      signalWorkflowExecution(params: SWFSignalWorkflowExecutionInput, callback: (err: SWFUnknownResourceFault|SWFOperationNotPermittedFault|any, data: any) => void): void;
      startWorkflowExecution(params: SWFStartWorkflowExecutionInput, callback: (err: SWFUnknownResourceFault|SWFTypeDeprecatedFault|SWFWorkflowExecutionAlreadyStartedFault|SWFLimitExceededFault|SWFOperationNotPermittedFault|SWFDefaultUndefinedFault|any, data: SWFRun|any) => void): void;
      terminateWorkflowExecution(params: SWFTerminateWorkflowExecutionInput, callback: (err: SWFUnknownResourceFault|SWFOperationNotPermittedFault|any, data: any) => void): void;
    }

    export type SWFActivityId = string;
    export interface SWFActivityTask {
        taskToken: SWFTaskToken;
        activityId: SWFActivityId;
        startedEventId: SWFEventId;
        workflowExecution: SWFWorkflowExecution;
        activityType: SWFActivityType;
        input?: SWFData;
    }

    export interface SWFActivityTaskCancelRequestedEventAttributes {
        decisionTaskCompletedEventId: SWFEventId;
        activityId: SWFActivityId;
    }

    export interface SWFActivityTaskCanceledEventAttributes {
        details?: SWFData;
        scheduledEventId: SWFEventId;
        startedEventId: SWFEventId;
        latestCancelRequestedEventId?: SWFEventId;
    }

    export interface SWFActivityTaskCompletedEventAttributes {
        result?: SWFData;
        scheduledEventId: SWFEventId;
        startedEventId: SWFEventId;
    }

    export interface SWFActivityTaskFailedEventAttributes {
        reason?: SWFFailureReason;
        details?: SWFData;
        scheduledEventId: SWFEventId;
        startedEventId: SWFEventId;
    }

    export interface SWFActivityTaskScheduledEventAttributes {
        activityType: SWFActivityType;
        activityId: SWFActivityId;
        input?: SWFData;
        control?: SWFData;
        scheduleToStartTimeout?: SWFDurationInSecondsOptional;
        scheduleToCloseTimeout?: SWFDurationInSecondsOptional;
        startToCloseTimeout?: SWFDurationInSecondsOptional;
        taskList: SWFTaskList;
        taskPriority?: SWFTaskPriority;
        decisionTaskCompletedEventId: SWFEventId;
        heartbeatTimeout?: SWFDurationInSecondsOptional;
    }

    export interface SWFActivityTaskStartedEventAttributes {
        identity?: SWFIdentity;
        scheduledEventId: SWFEventId;
    }

    export interface SWFActivityTaskStatus {
        cancelRequested: SWFCanceled;
    }

    export interface SWFActivityTaskTimedOutEventAttributes {
        timeoutType: SWFActivityTaskTimeoutType;
        scheduledEventId: SWFEventId;
        startedEventId: SWFEventId;
        details?: SWFLimitedData;
    }

    export type SWFActivityTaskTimeoutType = string;
    export interface SWFActivityType {
        name: SWFName;
        version: SWFVersion;
    }

    export interface SWFActivityTypeConfiguration {
        defaultTaskStartToCloseTimeout?: SWFDurationInSecondsOptional;
        defaultTaskHeartbeatTimeout?: SWFDurationInSecondsOptional;
        defaultTaskList?: SWFTaskList;
        defaultTaskPriority?: SWFTaskPriority;
        defaultTaskScheduleToStartTimeout?: SWFDurationInSecondsOptional;
        defaultTaskScheduleToCloseTimeout?: SWFDurationInSecondsOptional;
    }

    export interface SWFActivityTypeDetail {
        typeInfo: SWFActivityTypeInfo;
        configuration: SWFActivityTypeConfiguration;
    }

    export interface SWFActivityTypeInfo {
        activityType: SWFActivityType;
        status: SWFRegistrationStatus;
        description?: SWFDescription;
        creationDate: SWFTimestamp;
        deprecationDate?: SWFTimestamp;
    }

    export type SWFActivityTypeInfoList = Array<SWFActivityTypeInfo>;
    export interface SWFActivityTypeInfos {
        typeInfos: SWFActivityTypeInfoList;
        nextPageToken?: SWFPageToken;
    }

    export type SWFArn = string;
    export interface SWFCancelTimerDecisionAttributes {
        timerId: SWFTimerId;
    }

    export type SWFCancelTimerFailedCause = string;
    export interface SWFCancelTimerFailedEventAttributes {
        timerId: SWFTimerId;
        cause: SWFCancelTimerFailedCause;
        decisionTaskCompletedEventId: SWFEventId;
    }

    export interface SWFCancelWorkflowExecutionDecisionAttributes {
        details?: SWFData;
    }

    export type SWFCancelWorkflowExecutionFailedCause = string;
    export interface SWFCancelWorkflowExecutionFailedEventAttributes {
        cause: SWFCancelWorkflowExecutionFailedCause;
        decisionTaskCompletedEventId: SWFEventId;
    }

    export type SWFCanceled = boolean;
    export type SWFCauseMessage = string;
    export type SWFChildPolicy = string;
    export interface SWFChildWorkflowExecutionCanceledEventAttributes {
        workflowExecution: SWFWorkflowExecution;
        workflowType: SWFWorkflowType;
        details?: SWFData;
        initiatedEventId: SWFEventId;
        startedEventId: SWFEventId;
    }

    export interface SWFChildWorkflowExecutionCompletedEventAttributes {
        workflowExecution: SWFWorkflowExecution;
        workflowType: SWFWorkflowType;
        result?: SWFData;
        initiatedEventId: SWFEventId;
        startedEventId: SWFEventId;
    }

    export interface SWFChildWorkflowExecutionFailedEventAttributes {
        workflowExecution: SWFWorkflowExecution;
        workflowType: SWFWorkflowType;
        reason?: SWFFailureReason;
        details?: SWFData;
        initiatedEventId: SWFEventId;
        startedEventId: SWFEventId;
    }

    export interface SWFChildWorkflowExecutionStartedEventAttributes {
        workflowExecution: SWFWorkflowExecution;
        workflowType: SWFWorkflowType;
        initiatedEventId: SWFEventId;
    }

    export interface SWFChildWorkflowExecutionTerminatedEventAttributes {
        workflowExecution: SWFWorkflowExecution;
        workflowType: SWFWorkflowType;
        initiatedEventId: SWFEventId;
        startedEventId: SWFEventId;
    }

    export interface SWFChildWorkflowExecutionTimedOutEventAttributes {
        workflowExecution: SWFWorkflowExecution;
        workflowType: SWFWorkflowType;
        timeoutType: SWFWorkflowExecutionTimeoutType;
        initiatedEventId: SWFEventId;
        startedEventId: SWFEventId;
    }

    export type SWFCloseStatus = string;
    export interface SWFCloseStatusFilter {
        status: SWFCloseStatus;
    }

    export interface SWFCompleteWorkflowExecutionDecisionAttributes {
        result?: SWFData;
    }

    export type SWFCompleteWorkflowExecutionFailedCause = string;
    export interface SWFCompleteWorkflowExecutionFailedEventAttributes {
        cause: SWFCompleteWorkflowExecutionFailedCause;
        decisionTaskCompletedEventId: SWFEventId;
    }

    export interface SWFContinueAsNewWorkflowExecutionDecisionAttributes {
        input?: SWFData;
        executionStartToCloseTimeout?: SWFDurationInSecondsOptional;
        taskList?: SWFTaskList;
        taskPriority?: SWFTaskPriority;
        taskStartToCloseTimeout?: SWFDurationInSecondsOptional;
        childPolicy?: SWFChildPolicy;
        tagList?: SWFTagList;
        workflowTypeVersion?: SWFVersion;
        lambdaRole?: SWFArn;
    }

    export type SWFContinueAsNewWorkflowExecutionFailedCause = string;
    export interface SWFContinueAsNewWorkflowExecutionFailedEventAttributes {
        cause: SWFContinueAsNewWorkflowExecutionFailedCause;
        decisionTaskCompletedEventId: SWFEventId;
    }

    export type SWFCount = number;
    export interface SWFCountClosedWorkflowExecutionsInput {
        domain: SWFDomainName;
        startTimeFilter?: SWFExecutionTimeFilter;
        closeTimeFilter?: SWFExecutionTimeFilter;
        executionFilter?: SWFWorkflowExecutionFilter;
        typeFilter?: SWFWorkflowTypeFilter;
        tagFilter?: SWFTagFilter;
        closeStatusFilter?: SWFCloseStatusFilter;
    }

    export interface SWFCountOpenWorkflowExecutionsInput {
        domain: SWFDomainName;
        startTimeFilter: SWFExecutionTimeFilter;
        typeFilter?: SWFWorkflowTypeFilter;
        tagFilter?: SWFTagFilter;
        executionFilter?: SWFWorkflowExecutionFilter;
    }

    export interface SWFCountPendingActivityTasksInput {
        domain: SWFDomainName;
        taskList: SWFTaskList;
    }

    export interface SWFCountPendingDecisionTasksInput {
        domain: SWFDomainName;
        taskList: SWFTaskList;
    }

    export type SWFData = string;
    export interface SWFDecision {
        decisionType: SWFDecisionType;
        scheduleActivityTaskDecisionAttributes?: SWFScheduleActivityTaskDecisionAttributes;
        requestCancelActivityTaskDecisionAttributes?: SWFRequestCancelActivityTaskDecisionAttributes;
        completeWorkflowExecutionDecisionAttributes?: SWFCompleteWorkflowExecutionDecisionAttributes;
        failWorkflowExecutionDecisionAttributes?: SWFFailWorkflowExecutionDecisionAttributes;
        cancelWorkflowExecutionDecisionAttributes?: SWFCancelWorkflowExecutionDecisionAttributes;
        continueAsNewWorkflowExecutionDecisionAttributes?: SWFContinueAsNewWorkflowExecutionDecisionAttributes;
        recordMarkerDecisionAttributes?: SWFRecordMarkerDecisionAttributes;
        startTimerDecisionAttributes?: SWFStartTimerDecisionAttributes;
        cancelTimerDecisionAttributes?: SWFCancelTimerDecisionAttributes;
        signalExternalWorkflowExecutionDecisionAttributes?: SWFSignalExternalWorkflowExecutionDecisionAttributes;
        requestCancelExternalWorkflowExecutionDecisionAttributes?: SWFRequestCancelExternalWorkflowExecutionDecisionAttributes;
        startChildWorkflowExecutionDecisionAttributes?: SWFStartChildWorkflowExecutionDecisionAttributes;
        scheduleLambdaFunctionDecisionAttributes?: SWFScheduleLambdaFunctionDecisionAttributes;
    }

    export type SWFDecisionList = Array<SWFDecision>;
    export interface SWFDecisionTask {
        taskToken: SWFTaskToken;
        startedEventId: SWFEventId;
        workflowExecution: SWFWorkflowExecution;
        workflowType: SWFWorkflowType;
        events: SWFHistoryEventList;
        nextPageToken?: SWFPageToken;
        previousStartedEventId?: SWFEventId;
    }

    export interface SWFDecisionTaskCompletedEventAttributes {
        executionContext?: SWFData;
        scheduledEventId: SWFEventId;
        startedEventId: SWFEventId;
    }

    export interface SWFDecisionTaskScheduledEventAttributes {
        taskList: SWFTaskList;
        taskPriority?: SWFTaskPriority;
        startToCloseTimeout?: SWFDurationInSecondsOptional;
    }

    export interface SWFDecisionTaskStartedEventAttributes {
        identity?: SWFIdentity;
        scheduledEventId: SWFEventId;
    }

    export interface SWFDecisionTaskTimedOutEventAttributes {
        timeoutType: SWFDecisionTaskTimeoutType;
        scheduledEventId: SWFEventId;
        startedEventId: SWFEventId;
    }

    export type SWFDecisionTaskTimeoutType = string;
    export type SWFDecisionType = string;
    export interface SWFDefaultUndefinedFault {
        message?: SWFErrorMessage;
    }

    export interface SWFDeprecateActivityTypeInput {
        domain: SWFDomainName;
        activityType: SWFActivityType;
    }

    export interface SWFDeprecateDomainInput {
        name: SWFDomainName;
    }

    export interface SWFDeprecateWorkflowTypeInput {
        domain: SWFDomainName;
        workflowType: SWFWorkflowType;
    }

    export interface SWFDescribeActivityTypeInput {
        domain: SWFDomainName;
        activityType: SWFActivityType;
    }

    export interface SWFDescribeDomainInput {
        name: SWFDomainName;
    }

    export interface SWFDescribeWorkflowExecutionInput {
        domain: SWFDomainName;
        execution: SWFWorkflowExecution;
    }

    export interface SWFDescribeWorkflowTypeInput {
        domain: SWFDomainName;
        workflowType: SWFWorkflowType;
    }

    export type SWFDescription = string;
    export interface SWFDomainAlreadyExistsFault {
        message?: SWFErrorMessage;
    }

    export interface SWFDomainConfiguration {
        workflowExecutionRetentionPeriodInDays: SWFDurationInDays;
    }

    export interface SWFDomainDeprecatedFault {
        message?: SWFErrorMessage;
    }

    export interface SWFDomainDetail {
        domainInfo: SWFDomainInfo;
        configuration: SWFDomainConfiguration;
    }

    export interface SWFDomainInfo {
        name: SWFDomainName;
        status: SWFRegistrationStatus;
        description?: SWFDescription;
    }

    export type SWFDomainInfoList = Array<SWFDomainInfo>;
    export interface SWFDomainInfos {
        domainInfos: SWFDomainInfoList;
        nextPageToken?: SWFPageToken;
    }

    export type SWFDomainName = string;
    export type SWFDurationInDays = string;
    export type SWFDurationInSeconds = string;
    export type SWFDurationInSecondsOptional = string;
    export type SWFErrorMessage = string;
    export type SWFEventId = number;
    export type SWFEventType = string;
    export type SWFExecutionStatus = string;
    export interface SWFExecutionTimeFilter {
        oldestDate: SWFTimestamp;
        latestDate?: SWFTimestamp;
    }

    export interface SWFExternalWorkflowExecutionCancelRequestedEventAttributes {
        workflowExecution: SWFWorkflowExecution;
        initiatedEventId: SWFEventId;
    }

    export interface SWFExternalWorkflowExecutionSignaledEventAttributes {
        workflowExecution: SWFWorkflowExecution;
        initiatedEventId: SWFEventId;
    }

    export interface SWFFailWorkflowExecutionDecisionAttributes {
        reason?: SWFFailureReason;
        details?: SWFData;
    }

    export type SWFFailWorkflowExecutionFailedCause = string;
    export interface SWFFailWorkflowExecutionFailedEventAttributes {
        cause: SWFFailWorkflowExecutionFailedCause;
        decisionTaskCompletedEventId: SWFEventId;
    }

    export type SWFFailureReason = string;
    export type SWFFunctionId = string;
    export type SWFFunctionInput = string;
    export type SWFFunctionName = string;
    export interface SWFGetWorkflowExecutionHistoryInput {
        domain: SWFDomainName;
        execution: SWFWorkflowExecution;
        nextPageToken?: SWFPageToken;
        maximumPageSize?: SWFPageSize;
        reverseOrder?: SWFReverseOrder;
    }

    export interface SWFHistory {
        events: SWFHistoryEventList;
        nextPageToken?: SWFPageToken;
    }

    export interface SWFHistoryEvent {
        eventTimestamp: SWFTimestamp;
        eventType: SWFEventType;
        eventId: SWFEventId;
        workflowExecutionStartedEventAttributes?: SWFWorkflowExecutionStartedEventAttributes;
        workflowExecutionCompletedEventAttributes?: SWFWorkflowExecutionCompletedEventAttributes;
        completeWorkflowExecutionFailedEventAttributes?: SWFCompleteWorkflowExecutionFailedEventAttributes;
        workflowExecutionFailedEventAttributes?: SWFWorkflowExecutionFailedEventAttributes;
        failWorkflowExecutionFailedEventAttributes?: SWFFailWorkflowExecutionFailedEventAttributes;
        workflowExecutionTimedOutEventAttributes?: SWFWorkflowExecutionTimedOutEventAttributes;
        workflowExecutionCanceledEventAttributes?: SWFWorkflowExecutionCanceledEventAttributes;
        cancelWorkflowExecutionFailedEventAttributes?: SWFCancelWorkflowExecutionFailedEventAttributes;
        workflowExecutionContinuedAsNewEventAttributes?: SWFWorkflowExecutionContinuedAsNewEventAttributes;
        continueAsNewWorkflowExecutionFailedEventAttributes?: SWFContinueAsNewWorkflowExecutionFailedEventAttributes;
        workflowExecutionTerminatedEventAttributes?: SWFWorkflowExecutionTerminatedEventAttributes;
        workflowExecutionCancelRequestedEventAttributes?: SWFWorkflowExecutionCancelRequestedEventAttributes;
        decisionTaskScheduledEventAttributes?: SWFDecisionTaskScheduledEventAttributes;
        decisionTaskStartedEventAttributes?: SWFDecisionTaskStartedEventAttributes;
        decisionTaskCompletedEventAttributes?: SWFDecisionTaskCompletedEventAttributes;
        decisionTaskTimedOutEventAttributes?: SWFDecisionTaskTimedOutEventAttributes;
        activityTaskScheduledEventAttributes?: SWFActivityTaskScheduledEventAttributes;
        activityTaskStartedEventAttributes?: SWFActivityTaskStartedEventAttributes;
        activityTaskCompletedEventAttributes?: SWFActivityTaskCompletedEventAttributes;
        activityTaskFailedEventAttributes?: SWFActivityTaskFailedEventAttributes;
        activityTaskTimedOutEventAttributes?: SWFActivityTaskTimedOutEventAttributes;
        activityTaskCanceledEventAttributes?: SWFActivityTaskCanceledEventAttributes;
        activityTaskCancelRequestedEventAttributes?: SWFActivityTaskCancelRequestedEventAttributes;
        workflowExecutionSignaledEventAttributes?: SWFWorkflowExecutionSignaledEventAttributes;
        markerRecordedEventAttributes?: SWFMarkerRecordedEventAttributes;
        recordMarkerFailedEventAttributes?: SWFRecordMarkerFailedEventAttributes;
        timerStartedEventAttributes?: SWFTimerStartedEventAttributes;
        timerFiredEventAttributes?: SWFTimerFiredEventAttributes;
        timerCanceledEventAttributes?: SWFTimerCanceledEventAttributes;
        startChildWorkflowExecutionInitiatedEventAttributes?: SWFStartChildWorkflowExecutionInitiatedEventAttributes;
        childWorkflowExecutionStartedEventAttributes?: SWFChildWorkflowExecutionStartedEventAttributes;
        childWorkflowExecutionCompletedEventAttributes?: SWFChildWorkflowExecutionCompletedEventAttributes;
        childWorkflowExecutionFailedEventAttributes?: SWFChildWorkflowExecutionFailedEventAttributes;
        childWorkflowExecutionTimedOutEventAttributes?: SWFChildWorkflowExecutionTimedOutEventAttributes;
        childWorkflowExecutionCanceledEventAttributes?: SWFChildWorkflowExecutionCanceledEventAttributes;
        childWorkflowExecutionTerminatedEventAttributes?: SWFChildWorkflowExecutionTerminatedEventAttributes;
        signalExternalWorkflowExecutionInitiatedEventAttributes?: SWFSignalExternalWorkflowExecutionInitiatedEventAttributes;
        externalWorkflowExecutionSignaledEventAttributes?: SWFExternalWorkflowExecutionSignaledEventAttributes;
        signalExternalWorkflowExecutionFailedEventAttributes?: SWFSignalExternalWorkflowExecutionFailedEventAttributes;
        externalWorkflowExecutionCancelRequestedEventAttributes?: SWFExternalWorkflowExecutionCancelRequestedEventAttributes;
        requestCancelExternalWorkflowExecutionInitiatedEventAttributes?: SWFRequestCancelExternalWorkflowExecutionInitiatedEventAttributes;
        requestCancelExternalWorkflowExecutionFailedEventAttributes?: SWFRequestCancelExternalWorkflowExecutionFailedEventAttributes;
        scheduleActivityTaskFailedEventAttributes?: SWFScheduleActivityTaskFailedEventAttributes;
        requestCancelActivityTaskFailedEventAttributes?: SWFRequestCancelActivityTaskFailedEventAttributes;
        startTimerFailedEventAttributes?: SWFStartTimerFailedEventAttributes;
        cancelTimerFailedEventAttributes?: SWFCancelTimerFailedEventAttributes;
        startChildWorkflowExecutionFailedEventAttributes?: SWFStartChildWorkflowExecutionFailedEventAttributes;
        lambdaFunctionScheduledEventAttributes?: SWFLambdaFunctionScheduledEventAttributes;
        lambdaFunctionStartedEventAttributes?: SWFLambdaFunctionStartedEventAttributes;
        lambdaFunctionCompletedEventAttributes?: SWFLambdaFunctionCompletedEventAttributes;
        lambdaFunctionFailedEventAttributes?: SWFLambdaFunctionFailedEventAttributes;
        lambdaFunctionTimedOutEventAttributes?: SWFLambdaFunctionTimedOutEventAttributes;
        scheduleLambdaFunctionFailedEventAttributes?: SWFScheduleLambdaFunctionFailedEventAttributes;
        startLambdaFunctionFailedEventAttributes?: SWFStartLambdaFunctionFailedEventAttributes;
    }

    export type SWFHistoryEventList = Array<SWFHistoryEvent>;
    export type SWFIdentity = string;
    export interface SWFLambdaFunctionCompletedEventAttributes {
        scheduledEventId: SWFEventId;
        startedEventId: SWFEventId;
        result?: SWFData;
    }

    export interface SWFLambdaFunctionFailedEventAttributes {
        scheduledEventId: SWFEventId;
        startedEventId: SWFEventId;
        reason?: SWFFailureReason;
        details?: SWFData;
    }

    export interface SWFLambdaFunctionScheduledEventAttributes {
        id: SWFFunctionId;
        name: SWFFunctionName;
        input?: SWFFunctionInput;
        startToCloseTimeout?: SWFDurationInSecondsOptional;
        decisionTaskCompletedEventId: SWFEventId;
    }

    export interface SWFLambdaFunctionStartedEventAttributes {
        scheduledEventId: SWFEventId;
    }

    export interface SWFLambdaFunctionTimedOutEventAttributes {
        scheduledEventId: SWFEventId;
        startedEventId: SWFEventId;
        timeoutType?: SWFLambdaFunctionTimeoutType;
    }

    export type SWFLambdaFunctionTimeoutType = string;
    export interface SWFLimitExceededFault {
        message?: SWFErrorMessage;
    }

    export type SWFLimitedData = string;
    export interface SWFListActivityTypesInput {
        domain: SWFDomainName;
        name?: SWFName;
        registrationStatus: SWFRegistrationStatus;
        nextPageToken?: SWFPageToken;
        maximumPageSize?: SWFPageSize;
        reverseOrder?: SWFReverseOrder;
    }

    export interface SWFListClosedWorkflowExecutionsInput {
        domain: SWFDomainName;
        startTimeFilter?: SWFExecutionTimeFilter;
        closeTimeFilter?: SWFExecutionTimeFilter;
        executionFilter?: SWFWorkflowExecutionFilter;
        closeStatusFilter?: SWFCloseStatusFilter;
        typeFilter?: SWFWorkflowTypeFilter;
        tagFilter?: SWFTagFilter;
        nextPageToken?: SWFPageToken;
        maximumPageSize?: SWFPageSize;
        reverseOrder?: SWFReverseOrder;
    }

    export interface SWFListDomainsInput {
        nextPageToken?: SWFPageToken;
        registrationStatus: SWFRegistrationStatus;
        maximumPageSize?: SWFPageSize;
        reverseOrder?: SWFReverseOrder;
    }

    export interface SWFListOpenWorkflowExecutionsInput {
        domain: SWFDomainName;
        startTimeFilter: SWFExecutionTimeFilter;
        typeFilter?: SWFWorkflowTypeFilter;
        tagFilter?: SWFTagFilter;
        nextPageToken?: SWFPageToken;
        maximumPageSize?: SWFPageSize;
        reverseOrder?: SWFReverseOrder;
        executionFilter?: SWFWorkflowExecutionFilter;
    }

    export interface SWFListWorkflowTypesInput {
        domain: SWFDomainName;
        name?: SWFName;
        registrationStatus: SWFRegistrationStatus;
        nextPageToken?: SWFPageToken;
        maximumPageSize?: SWFPageSize;
        reverseOrder?: SWFReverseOrder;
    }

    export type SWFMarkerName = string;
    export interface SWFMarkerRecordedEventAttributes {
        markerName: SWFMarkerName;
        details?: SWFData;
        decisionTaskCompletedEventId: SWFEventId;
    }

    export type SWFName = string;
    export type SWFOpenDecisionTasksCount = number;
    export interface SWFOperationNotPermittedFault {
        message?: SWFErrorMessage;
    }

    export type SWFPageSize = number;
    export type SWFPageToken = string;
    export interface SWFPendingTaskCount {
        count: SWFCount;
        truncated?: SWFTruncated;
    }

    export interface SWFPollForActivityTaskInput {
        domain: SWFDomainName;
        taskList: SWFTaskList;
        identity?: SWFIdentity;
    }

    export interface SWFPollForDecisionTaskInput {
        domain: SWFDomainName;
        taskList: SWFTaskList;
        identity?: SWFIdentity;
        nextPageToken?: SWFPageToken;
        maximumPageSize?: SWFPageSize;
        reverseOrder?: SWFReverseOrder;
    }

    export interface SWFRecordActivityTaskHeartbeatInput {
        taskToken: SWFTaskToken;
        details?: SWFLimitedData;
    }

    export interface SWFRecordMarkerDecisionAttributes {
        markerName: SWFMarkerName;
        details?: SWFData;
    }

    export type SWFRecordMarkerFailedCause = string;
    export interface SWFRecordMarkerFailedEventAttributes {
        markerName: SWFMarkerName;
        cause: SWFRecordMarkerFailedCause;
        decisionTaskCompletedEventId: SWFEventId;
    }

    export interface SWFRegisterActivityTypeInput {
        domain: SWFDomainName;
        name: SWFName;
        version: SWFVersion;
        description?: SWFDescription;
        defaultTaskStartToCloseTimeout?: SWFDurationInSecondsOptional;
        defaultTaskHeartbeatTimeout?: SWFDurationInSecondsOptional;
        defaultTaskList?: SWFTaskList;
        defaultTaskPriority?: SWFTaskPriority;
        defaultTaskScheduleToStartTimeout?: SWFDurationInSecondsOptional;
        defaultTaskScheduleToCloseTimeout?: SWFDurationInSecondsOptional;
    }

    export interface SWFRegisterDomainInput {
        name: SWFDomainName;
        description?: SWFDescription;
        workflowExecutionRetentionPeriodInDays: SWFDurationInDays;
    }

    export interface SWFRegisterWorkflowTypeInput {
        domain: SWFDomainName;
        name: SWFName;
        version: SWFVersion;
        description?: SWFDescription;
        defaultTaskStartToCloseTimeout?: SWFDurationInSecondsOptional;
        defaultExecutionStartToCloseTimeout?: SWFDurationInSecondsOptional;
        defaultTaskList?: SWFTaskList;
        defaultTaskPriority?: SWFTaskPriority;
        defaultChildPolicy?: SWFChildPolicy;
        defaultLambdaRole?: SWFArn;
    }

    export type SWFRegistrationStatus = string;
    export interface SWFRequestCancelActivityTaskDecisionAttributes {
        activityId: SWFActivityId;
    }

    export type SWFRequestCancelActivityTaskFailedCause = string;
    export interface SWFRequestCancelActivityTaskFailedEventAttributes {
        activityId: SWFActivityId;
        cause: SWFRequestCancelActivityTaskFailedCause;
        decisionTaskCompletedEventId: SWFEventId;
    }

    export interface SWFRequestCancelExternalWorkflowExecutionDecisionAttributes {
        workflowId: SWFWorkflowId;
        runId?: SWFRunIdOptional;
        control?: SWFData;
    }

    export type SWFRequestCancelExternalWorkflowExecutionFailedCause = string;
    export interface SWFRequestCancelExternalWorkflowExecutionFailedEventAttributes {
        workflowId: SWFWorkflowId;
        runId?: SWFRunIdOptional;
        cause: SWFRequestCancelExternalWorkflowExecutionFailedCause;
        initiatedEventId: SWFEventId;
        decisionTaskCompletedEventId: SWFEventId;
        control?: SWFData;
    }

    export interface SWFRequestCancelExternalWorkflowExecutionInitiatedEventAttributes {
        workflowId: SWFWorkflowId;
        runId?: SWFRunIdOptional;
        decisionTaskCompletedEventId: SWFEventId;
        control?: SWFData;
    }

    export interface SWFRequestCancelWorkflowExecutionInput {
        domain: SWFDomainName;
        workflowId: SWFWorkflowId;
        runId?: SWFRunIdOptional;
    }

    export interface SWFRespondActivityTaskCanceledInput {
        taskToken: SWFTaskToken;
        details?: SWFData;
    }

    export interface SWFRespondActivityTaskCompletedInput {
        taskToken: SWFTaskToken;
        result?: SWFData;
    }

    export interface SWFRespondActivityTaskFailedInput {
        taskToken: SWFTaskToken;
        reason?: SWFFailureReason;
        details?: SWFData;
    }

    export interface SWFRespondDecisionTaskCompletedInput {
        taskToken: SWFTaskToken;
        decisions?: SWFDecisionList;
        executionContext?: SWFData;
    }

    export type SWFReverseOrder = boolean;
    export interface SWFRun {
        runId?: SWFRunId;
    }

    export type SWFRunId = string;
    export type SWFRunIdOptional = string;
    export interface SWFScheduleActivityTaskDecisionAttributes {
        activityType: SWFActivityType;
        activityId: SWFActivityId;
        control?: SWFData;
        input?: SWFData;
        scheduleToCloseTimeout?: SWFDurationInSecondsOptional;
        taskList?: SWFTaskList;
        taskPriority?: SWFTaskPriority;
        scheduleToStartTimeout?: SWFDurationInSecondsOptional;
        startToCloseTimeout?: SWFDurationInSecondsOptional;
        heartbeatTimeout?: SWFDurationInSecondsOptional;
    }

    export type SWFScheduleActivityTaskFailedCause = string;
    export interface SWFScheduleActivityTaskFailedEventAttributes {
        activityType: SWFActivityType;
        activityId: SWFActivityId;
        cause: SWFScheduleActivityTaskFailedCause;
        decisionTaskCompletedEventId: SWFEventId;
    }

    export interface SWFScheduleLambdaFunctionDecisionAttributes {
        id: SWFFunctionId;
        name: SWFFunctionName;
        input?: SWFFunctionInput;
        startToCloseTimeout?: SWFDurationInSecondsOptional;
    }

    export type SWFScheduleLambdaFunctionFailedCause = string;
    export interface SWFScheduleLambdaFunctionFailedEventAttributes {
        id: SWFFunctionId;
        name: SWFFunctionName;
        cause: SWFScheduleLambdaFunctionFailedCause;
        decisionTaskCompletedEventId: SWFEventId;
    }

    export interface SWFSignalExternalWorkflowExecutionDecisionAttributes {
        workflowId: SWFWorkflowId;
        runId?: SWFRunIdOptional;
        signalName: SWFSignalName;
        input?: SWFData;
        control?: SWFData;
    }

    export type SWFSignalExternalWorkflowExecutionFailedCause = string;
    export interface SWFSignalExternalWorkflowExecutionFailedEventAttributes {
        workflowId: SWFWorkflowId;
        runId?: SWFRunIdOptional;
        cause: SWFSignalExternalWorkflowExecutionFailedCause;
        initiatedEventId: SWFEventId;
        decisionTaskCompletedEventId: SWFEventId;
        control?: SWFData;
    }

    export interface SWFSignalExternalWorkflowExecutionInitiatedEventAttributes {
        workflowId: SWFWorkflowId;
        runId?: SWFRunIdOptional;
        signalName: SWFSignalName;
        input?: SWFData;
        decisionTaskCompletedEventId: SWFEventId;
        control?: SWFData;
    }

    export type SWFSignalName = string;
    export interface SWFSignalWorkflowExecutionInput {
        domain: SWFDomainName;
        workflowId: SWFWorkflowId;
        runId?: SWFRunIdOptional;
        signalName: SWFSignalName;
        input?: SWFData;
    }

    export interface SWFStartChildWorkflowExecutionDecisionAttributes {
        workflowType: SWFWorkflowType;
        workflowId: SWFWorkflowId;
        control?: SWFData;
        input?: SWFData;
        executionStartToCloseTimeout?: SWFDurationInSecondsOptional;
        taskList?: SWFTaskList;
        taskPriority?: SWFTaskPriority;
        taskStartToCloseTimeout?: SWFDurationInSecondsOptional;
        childPolicy?: SWFChildPolicy;
        tagList?: SWFTagList;
        lambdaRole?: SWFArn;
    }

    export type SWFStartChildWorkflowExecutionFailedCause = string;
    export interface SWFStartChildWorkflowExecutionFailedEventAttributes {
        workflowType: SWFWorkflowType;
        cause: SWFStartChildWorkflowExecutionFailedCause;
        workflowId: SWFWorkflowId;
        initiatedEventId: SWFEventId;
        decisionTaskCompletedEventId: SWFEventId;
        control?: SWFData;
    }

    export interface SWFStartChildWorkflowExecutionInitiatedEventAttributes {
        workflowId: SWFWorkflowId;
        workflowType: SWFWorkflowType;
        control?: SWFData;
        input?: SWFData;
        executionStartToCloseTimeout?: SWFDurationInSecondsOptional;
        taskList: SWFTaskList;
        taskPriority?: SWFTaskPriority;
        decisionTaskCompletedEventId: SWFEventId;
        childPolicy: SWFChildPolicy;
        taskStartToCloseTimeout?: SWFDurationInSecondsOptional;
        tagList?: SWFTagList;
        lambdaRole?: SWFArn;
    }

    export type SWFStartLambdaFunctionFailedCause = string;
    export interface SWFStartLambdaFunctionFailedEventAttributes {
        scheduledEventId?: SWFEventId;
        cause?: SWFStartLambdaFunctionFailedCause;
        message?: SWFCauseMessage;
    }

    export interface SWFStartTimerDecisionAttributes {
        timerId: SWFTimerId;
        control?: SWFData;
        startToFireTimeout: SWFDurationInSeconds;
    }

    export type SWFStartTimerFailedCause = string;
    export interface SWFStartTimerFailedEventAttributes {
        timerId: SWFTimerId;
        cause: SWFStartTimerFailedCause;
        decisionTaskCompletedEventId: SWFEventId;
    }

    export interface SWFStartWorkflowExecutionInput {
        domain: SWFDomainName;
        workflowId: SWFWorkflowId;
        workflowType: SWFWorkflowType;
        taskList?: SWFTaskList;
        taskPriority?: SWFTaskPriority;
        input?: SWFData;
        executionStartToCloseTimeout?: SWFDurationInSecondsOptional;
        tagList?: SWFTagList;
        taskStartToCloseTimeout?: SWFDurationInSecondsOptional;
        childPolicy?: SWFChildPolicy;
        lambdaRole?: SWFArn;
    }

    export type SWFTag = string;
    export interface SWFTagFilter {
        tag: SWFTag;
    }

    export type SWFTagList = Array<SWFTag>; // max: 5
    export interface SWFTaskList {
        name: SWFName;
    }

    export type SWFTaskPriority = string;
    export type SWFTaskToken = string;
    export type SWFTerminateReason = string;
    export interface SWFTerminateWorkflowExecutionInput {
        domain: SWFDomainName;
        workflowId: SWFWorkflowId;
        runId?: SWFRunIdOptional;
        reason?: SWFTerminateReason;
        details?: SWFData;
        childPolicy?: SWFChildPolicy;
    }

    export interface SWFTimerCanceledEventAttributes {
        timerId: SWFTimerId;
        startedEventId: SWFEventId;
        decisionTaskCompletedEventId: SWFEventId;
    }

    export interface SWFTimerFiredEventAttributes {
        timerId: SWFTimerId;
        startedEventId: SWFEventId;
    }

    export type SWFTimerId = string;
    export interface SWFTimerStartedEventAttributes {
        timerId: SWFTimerId;
        control?: SWFData;
        startToFireTimeout: SWFDurationInSeconds;
        decisionTaskCompletedEventId: SWFEventId;
    }

    export type SWFTimestamp = number;
    export type SWFTruncated = boolean;
    export interface SWFTypeAlreadyExistsFault {
        message?: SWFErrorMessage;
    }

    export interface SWFTypeDeprecatedFault {
        message?: SWFErrorMessage;
    }

    export interface SWFUnknownResourceFault {
        message?: SWFErrorMessage;
    }

    export type SWFVersion = string;
    export type SWFVersionOptional = string;
    export interface SWFWorkflowExecution {
        workflowId: SWFWorkflowId;
        runId: SWFRunId;
    }

    export interface SWFWorkflowExecutionAlreadyStartedFault {
        message?: SWFErrorMessage;
    }

    export type SWFWorkflowExecutionCancelRequestedCause = string;
    export interface SWFWorkflowExecutionCancelRequestedEventAttributes {
        externalWorkflowExecution?: SWFWorkflowExecution;
        externalInitiatedEventId?: SWFEventId;
        cause?: SWFWorkflowExecutionCancelRequestedCause;
    }

    export interface SWFWorkflowExecutionCanceledEventAttributes {
        details?: SWFData;
        decisionTaskCompletedEventId: SWFEventId;
    }

    export interface SWFWorkflowExecutionCompletedEventAttributes {
        result?: SWFData;
        decisionTaskCompletedEventId: SWFEventId;
    }

    export interface SWFWorkflowExecutionConfiguration {
        taskStartToCloseTimeout: SWFDurationInSeconds;
        executionStartToCloseTimeout: SWFDurationInSeconds;
        taskList: SWFTaskList;
        taskPriority?: SWFTaskPriority;
        childPolicy: SWFChildPolicy;
        lambdaRole?: SWFArn;
    }

    export interface SWFWorkflowExecutionContinuedAsNewEventAttributes {
        input?: SWFData;
        decisionTaskCompletedEventId: SWFEventId;
        newExecutionRunId: SWFRunId;
        executionStartToCloseTimeout?: SWFDurationInSecondsOptional;
        taskList: SWFTaskList;
        taskPriority?: SWFTaskPriority;
        taskStartToCloseTimeout?: SWFDurationInSecondsOptional;
        childPolicy: SWFChildPolicy;
        tagList?: SWFTagList;
        workflowType: SWFWorkflowType;
        lambdaRole?: SWFArn;
    }

    export interface SWFWorkflowExecutionCount {
        count: SWFCount;
        truncated?: SWFTruncated;
    }

    export interface SWFWorkflowExecutionDetail {
        executionInfo: SWFWorkflowExecutionInfo;
        executionConfiguration: SWFWorkflowExecutionConfiguration;
        openCounts: SWFWorkflowExecutionOpenCounts;
        latestActivityTaskTimestamp?: SWFTimestamp;
        latestExecutionContext?: SWFData;
    }

    export interface SWFWorkflowExecutionFailedEventAttributes {
        reason?: SWFFailureReason;
        details?: SWFData;
        decisionTaskCompletedEventId: SWFEventId;
    }

    export interface SWFWorkflowExecutionFilter {
        workflowId: SWFWorkflowId;
    }

    export interface SWFWorkflowExecutionInfo {
        execution: SWFWorkflowExecution;
        workflowType: SWFWorkflowType;
        startTimestamp: SWFTimestamp;
        closeTimestamp?: SWFTimestamp;
        executionStatus: SWFExecutionStatus;
        closeStatus?: SWFCloseStatus;
        parent?: SWFWorkflowExecution;
        tagList?: SWFTagList;
        cancelRequested?: SWFCanceled;
    }

    export type SWFWorkflowExecutionInfoList = Array<SWFWorkflowExecutionInfo>;
    export interface SWFWorkflowExecutionInfos {
        executionInfos: SWFWorkflowExecutionInfoList;
        nextPageToken?: SWFPageToken;
    }

    export interface SWFWorkflowExecutionOpenCounts {
        openActivityTasks: SWFCount;
        openDecisionTasks: SWFOpenDecisionTasksCount;
        openTimers: SWFCount;
        openChildWorkflowExecutions: SWFCount;
        openLambdaFunctions?: SWFCount;
    }

    export interface SWFWorkflowExecutionSignaledEventAttributes {
        signalName: SWFSignalName;
        input?: SWFData;
        externalWorkflowExecution?: SWFWorkflowExecution;
        externalInitiatedEventId?: SWFEventId;
    }

    export interface SWFWorkflowExecutionStartedEventAttributes {
        input?: SWFData;
        executionStartToCloseTimeout?: SWFDurationInSecondsOptional;
        taskStartToCloseTimeout?: SWFDurationInSecondsOptional;
        childPolicy: SWFChildPolicy;
        taskList: SWFTaskList;
        workflowType: SWFWorkflowType;
        tagList?: SWFTagList;
        taskPriority?: SWFTaskPriority;
        continuedExecutionRunId?: SWFRunIdOptional;
        parentWorkflowExecution?: SWFWorkflowExecution;
        parentInitiatedEventId?: SWFEventId;
        lambdaRole?: SWFArn;
    }

    export type SWFWorkflowExecutionTerminatedCause = string;
    export interface SWFWorkflowExecutionTerminatedEventAttributes {
        reason?: SWFTerminateReason;
        details?: SWFData;
        childPolicy: SWFChildPolicy;
        cause?: SWFWorkflowExecutionTerminatedCause;
    }

    export interface SWFWorkflowExecutionTimedOutEventAttributes {
        timeoutType: SWFWorkflowExecutionTimeoutType;
        childPolicy: SWFChildPolicy;
    }

    export type SWFWorkflowExecutionTimeoutType = string;
    export type SWFWorkflowId = string;
    export interface SWFWorkflowType {
        name: SWFName;
        version: SWFVersion;
    }

    export interface SWFWorkflowTypeConfiguration {
        defaultTaskStartToCloseTimeout?: SWFDurationInSecondsOptional;
        defaultExecutionStartToCloseTimeout?: SWFDurationInSecondsOptional;
        defaultTaskList?: SWFTaskList;
        defaultTaskPriority?: SWFTaskPriority;
        defaultChildPolicy?: SWFChildPolicy;
        defaultLambdaRole?: SWFArn;
    }

    export interface SWFWorkflowTypeDetail {
        typeInfo: SWFWorkflowTypeInfo;
        configuration: SWFWorkflowTypeConfiguration;
    }

    export interface SWFWorkflowTypeFilter {
        name: SWFName;
        version?: SWFVersionOptional;
    }

    export interface SWFWorkflowTypeInfo {
        workflowType: SWFWorkflowType;
        status: SWFRegistrationStatus;
        description?: SWFDescription;
        creationDate: SWFTimestamp;
        deprecationDate?: SWFTimestamp;
    }

    export type SWFWorkflowTypeInfoList = Array<SWFWorkflowTypeInfo>;
    export interface SWFWorkflowTypeInfos {
        typeInfos: SWFWorkflowTypeInfoList;
        nextPageToken?: SWFPageToken;
    }

}
