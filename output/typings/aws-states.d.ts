// Type definitions for aws-sdk - AWS Step Functions
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

// COMMENTED <reference path="./aws-sdk.d.ts" />

declare module "aws-sdk" {

 /**
   * apiVersion: 2016-11-23
   * endpointPrefix: states
   * serviceAbbreviation: AWS SFN
   * signatureVersion: v4
   * protocol: json
   *
   * AWS Step FunctionsAWS Step Functions is a web service that enables you to
coordinate the components of distributed applications and microservices using
visual workflows. You build applications from individual components that each
perform a discrete function, or task , allowing you to scale and change
applications quickly. Step Functions provides a graphical console to visualize
the components of your application as a series of steps. It automatically
triggers and tracks each step, and retries when there are errors, so your
application executes in order and as expected, every time. Step Functions logs
the state of each step, so when things do go wrong, you can diagnose and debug
problems quickly.

Step Functions manages the operations and underlying infrastructure for you to
ensure your application is available at any scale. You can run tasks on the AWS
cloud, on your own servers, or an any system that has access to AWS. Step
Functions can be accessed and used with the Step Functions console, the AWS SDKs
(included with your Beta release invitation email), or an HTTP API (the subject
of this document).
   *
   */
  export class StepFunctions extends Service {
    constructor(options?: any);
    endpoint: Endpoint;
    /**
     * Creates an activity.
     *
     * @error ActivityLimitExceeded   
     * @error InvalidName   
     */
    createActivity(params: StepFunctions.CreateActivityInput, callback?: (err: StepFunctions.ActivityLimitExceeded|StepFunctions.InvalidName|any, data: StepFunctions.CreateActivityOutput|any) => void): Request<StepFunctions.CreateActivityOutput|any,StepFunctions.ActivityLimitExceeded|StepFunctions.InvalidName|any>;
    /**
     * Creates a state machine.
     *
     * @error InvalidArn   
     * @error InvalidDefinition   
     * @error InvalidName   
     * @error StateMachineAlreadyExists   
     * @error StateMachineDeleting   
     * @error StateMachineLimitExceeded   
     */
    createStateMachine(params: StepFunctions.CreateStateMachineInput, callback?: (err: StepFunctions.InvalidArn|StepFunctions.InvalidDefinition|StepFunctions.InvalidName|StepFunctions.StateMachineAlreadyExists|StepFunctions.StateMachineDeleting|StepFunctions.StateMachineLimitExceeded|any, data: StepFunctions.CreateStateMachineOutput|any) => void): Request<StepFunctions.CreateStateMachineOutput|any,StepFunctions.InvalidArn|StepFunctions.InvalidDefinition|StepFunctions.InvalidName|StepFunctions.StateMachineAlreadyExists|StepFunctions.StateMachineDeleting|StepFunctions.StateMachineLimitExceeded|any>;
    /**
     * Deletes an activity.
     *
     * @error InvalidArn   
     */
    deleteActivity(params: StepFunctions.DeleteActivityInput, callback?: (err: StepFunctions.InvalidArn|any, data: StepFunctions.DeleteActivityOutput|any) => void): Request<StepFunctions.DeleteActivityOutput|any,StepFunctions.InvalidArn|any>;
    /**
     * Deletes a state machine. This is an asynchronous operation-- it sets the state
machine&#x27;s status to &quot;DELETING&quot; and begins the delete process.
     *
     * @error InvalidArn   
     */
    deleteStateMachine(params: StepFunctions.DeleteStateMachineInput, callback?: (err: StepFunctions.InvalidArn|any, data: StepFunctions.DeleteStateMachineOutput|any) => void): Request<StepFunctions.DeleteStateMachineOutput|any,StepFunctions.InvalidArn|any>;
    /**
     * Describes an activity.
     *
     * @error ActivityDoesNotExist   
     * @error InvalidArn   
     */
    describeActivity(params: StepFunctions.DescribeActivityInput, callback?: (err: StepFunctions.ActivityDoesNotExist|StepFunctions.InvalidArn|any, data: StepFunctions.DescribeActivityOutput|any) => void): Request<StepFunctions.DescribeActivityOutput|any,StepFunctions.ActivityDoesNotExist|StepFunctions.InvalidArn|any>;
    /**
     * Describes an execution.
     *
     * @error ExecutionDoesNotExist   
     * @error InvalidArn   
     */
    describeExecution(params: StepFunctions.DescribeExecutionInput, callback?: (err: StepFunctions.ExecutionDoesNotExist|StepFunctions.InvalidArn|any, data: StepFunctions.DescribeExecutionOutput|any) => void): Request<StepFunctions.DescribeExecutionOutput|any,StepFunctions.ExecutionDoesNotExist|StepFunctions.InvalidArn|any>;
    /**
     * Describes a state machine.
     *
     * @error InvalidArn   
     * @error StateMachineDoesNotExist   
     */
    describeStateMachine(params: StepFunctions.DescribeStateMachineInput, callback?: (err: StepFunctions.InvalidArn|StepFunctions.StateMachineDoesNotExist|any, data: StepFunctions.DescribeStateMachineOutput|any) => void): Request<StepFunctions.DescribeStateMachineOutput|any,StepFunctions.InvalidArn|StepFunctions.StateMachineDoesNotExist|any>;
    /**
     * Used by workers to retrieve a task (with the specified activity ARN) scheduled
for execution by a running state machine. This initiates a long poll, where the
service holds the HTTP connection open and responds as soon as a task becomes
available (i.e. an execution of a task of this type is needed.) The maximum time
the service holds on to the request before responding is 60 seconds. If no task
is available within 60 seconds, the poll will return an empty result, that is,
the taskToken returned is an empty string.

Workers should set their client side socket timeout to at least 65 seconds (5
seconds higher than the maximum time the service may hold the poll request).
     *
     * @error ActivityDoesNotExist   
     * @error ActivityWorkerLimitExceeded   
     * @error InvalidArn   
     */
    getActivityTask(params: StepFunctions.GetActivityTaskInput, callback?: (err: StepFunctions.ActivityDoesNotExist|StepFunctions.ActivityWorkerLimitExceeded|StepFunctions.InvalidArn|any, data: StepFunctions.GetActivityTaskOutput|any) => void): Request<StepFunctions.GetActivityTaskOutput|any,StepFunctions.ActivityDoesNotExist|StepFunctions.ActivityWorkerLimitExceeded|StepFunctions.InvalidArn|any>;
    /**
     * Returns the history of the specified execution as a list of events. By default,
the results are returned in ascending order of the timeStamp of the events. Use
the reverseOrder parameter to get the latest events first. The results may be
split into multiple pages. To retrieve subsequent pages, make the call again
using the nextToken returned by the previous call.
     *
     * @error ExecutionDoesNotExist   
     * @error InvalidArn   
     * @error InvalidToken   
     */
    getExecutionHistory(params: StepFunctions.GetExecutionHistoryInput, callback?: (err: StepFunctions.ExecutionDoesNotExist|StepFunctions.InvalidArn|StepFunctions.InvalidToken|any, data: StepFunctions.GetExecutionHistoryOutput|any) => void): Request<StepFunctions.GetExecutionHistoryOutput|any,StepFunctions.ExecutionDoesNotExist|StepFunctions.InvalidArn|StepFunctions.InvalidToken|any>;
    /**
     * Lists the existing activities. The results may be split into multiple pages. To
retrieve subsequent pages, make the call again using the nextToken returned by
the previous call.
     *
     * @error InvalidToken   
     */
    listActivities(params: StepFunctions.ListActivitiesInput, callback?: (err: StepFunctions.InvalidToken|any, data: StepFunctions.ListActivitiesOutput|any) => void): Request<StepFunctions.ListActivitiesOutput|any,StepFunctions.InvalidToken|any>;
    /**
     * Lists the executions of a state machine that meet the filtering criteria. The
results may be split into multiple pages. To retrieve subsequent pages, make the
call again using the nextToken returned by the previous call.
     *
     * @error InvalidArn   
     * @error InvalidToken   
     * @error StateMachineDoesNotExist   
     */
    listExecutions(params: StepFunctions.ListExecutionsInput, callback?: (err: StepFunctions.InvalidArn|StepFunctions.InvalidToken|StepFunctions.StateMachineDoesNotExist|any, data: StepFunctions.ListExecutionsOutput|any) => void): Request<StepFunctions.ListExecutionsOutput|any,StepFunctions.InvalidArn|StepFunctions.InvalidToken|StepFunctions.StateMachineDoesNotExist|any>;
    /**
     * Lists the existing state machines. The results may be split into multiple pages.
To retrieve subsequent pages, make the call again using the nextToken returned
by the previous call.
     *
     * @error InvalidToken   
     */
    listStateMachines(params: StepFunctions.ListStateMachinesInput, callback?: (err: StepFunctions.InvalidToken|any, data: StepFunctions.ListStateMachinesOutput|any) => void): Request<StepFunctions.ListStateMachinesOutput|any,StepFunctions.InvalidToken|any>;
    /**
     * Used by workers to report that the task identified by the taskToken failed.
     *
     * @error TaskDoesNotExist   
     * @error InvalidToken   
     * @error TaskTimedOut   
     */
    sendTaskFailure(params: StepFunctions.SendTaskFailureInput, callback?: (err: StepFunctions.TaskDoesNotExist|StepFunctions.InvalidToken|StepFunctions.TaskTimedOut|any, data: StepFunctions.SendTaskFailureOutput|any) => void): Request<StepFunctions.SendTaskFailureOutput|any,StepFunctions.TaskDoesNotExist|StepFunctions.InvalidToken|StepFunctions.TaskTimedOut|any>;
    /**
     * Used by workers to report to the service that the task represented by the
specified taskToken is still making progress. This action resets the Heartbeat 
clock. The Heartbeat threshold is specified in the state machine&#x27;s Amazon States
Language definition. This action does not in itself create an event in the
execution history. However, if the task times out, the execution history will
contain an ActivityTimedOut event.

The Timeout of a task, defined in the state machine&#x27;s Amazon States Language
definition, is its maximum allowed duration, regardless of the number of 
SendTaskHeartbeat requests received.

This operation is only useful for long-lived tasks to report the liveliness of
the task.
     *
     * @error TaskDoesNotExist   
     * @error InvalidToken   
     * @error TaskTimedOut   
     */
    sendTaskHeartbeat(params: StepFunctions.SendTaskHeartbeatInput, callback?: (err: StepFunctions.TaskDoesNotExist|StepFunctions.InvalidToken|StepFunctions.TaskTimedOut|any, data: StepFunctions.SendTaskHeartbeatOutput|any) => void): Request<StepFunctions.SendTaskHeartbeatOutput|any,StepFunctions.TaskDoesNotExist|StepFunctions.InvalidToken|StepFunctions.TaskTimedOut|any>;
    /**
     * Used by workers to report that the task identified by the taskToken completed
successfully.
     *
     * @error TaskDoesNotExist   
     * @error InvalidOutput   
     * @error InvalidToken   
     * @error TaskTimedOut   
     */
    sendTaskSuccess(params: StepFunctions.SendTaskSuccessInput, callback?: (err: StepFunctions.TaskDoesNotExist|StepFunctions.InvalidOutput|StepFunctions.InvalidToken|StepFunctions.TaskTimedOut|any, data: StepFunctions.SendTaskSuccessOutput|any) => void): Request<StepFunctions.SendTaskSuccessOutput|any,StepFunctions.TaskDoesNotExist|StepFunctions.InvalidOutput|StepFunctions.InvalidToken|StepFunctions.TaskTimedOut|any>;
    /**
     * Starts a state machine execution.
     *
     * @error ExecutionLimitExceeded   
     * @error ExecutionAlreadyExists   
     * @error InvalidArn   
     * @error InvalidExecutionInput   
     * @error InvalidName   
     * @error StateMachineDoesNotExist   
     * @error StateMachineDeleting   
     */
    startExecution(params: StepFunctions.StartExecutionInput, callback?: (err: StepFunctions.ExecutionLimitExceeded|StepFunctions.ExecutionAlreadyExists|StepFunctions.InvalidArn|StepFunctions.InvalidExecutionInput|StepFunctions.InvalidName|StepFunctions.StateMachineDoesNotExist|StepFunctions.StateMachineDeleting|any, data: StepFunctions.StartExecutionOutput|any) => void): Request<StepFunctions.StartExecutionOutput|any,StepFunctions.ExecutionLimitExceeded|StepFunctions.ExecutionAlreadyExists|StepFunctions.InvalidArn|StepFunctions.InvalidExecutionInput|StepFunctions.InvalidName|StepFunctions.StateMachineDoesNotExist|StepFunctions.StateMachineDeleting|any>;
    /**
     * Stops an execution.
     *
     * @error ExecutionDoesNotExist   
     * @error InvalidArn   
     */
    stopExecution(params: StepFunctions.StopExecutionInput, callback?: (err: StepFunctions.ExecutionDoesNotExist|StepFunctions.InvalidArn|any, data: StepFunctions.StopExecutionOutput|any) => void): Request<StepFunctions.StopExecutionOutput|any,StepFunctions.ExecutionDoesNotExist|StepFunctions.InvalidArn|any>;

  }

  export module StepFunctions {
    
    export type ActivityList = ActivityListItem[];
    
    export type Arn = string;
    
    export type Cause = string;
    
    export type Data = string;
    
    export type Definition = string;
    
    export type Error = string;
    
    export type ErrorMessage = string;
    
    export type EventId = number;
    
    export type ExecutionList = ExecutionListItem[];
    
    export type ExecutionStatus = string;
    
    export type HistoryEventList = HistoryEvent[];
    
    export type HistoryEventType = string;
    
    export type Identity = string;
    
    export type Name = string;
    
    export type PageSize = number;
    
    export type PageToken = string;
    
    export type ReverseOrder = boolean;
    
    export type StateMachineList = StateMachineListItem[];
    
    export type StateMachineStatus = string;
    
    export type TaskToken = string;
    
    export type TimeoutInSeconds = number;
    
    export type Timestamp = number;

    export interface ActivityDoesNotExist {
        message?: ErrorMessage;
    }
    export interface ActivityFailedEventDetails {
        /** The error code of the failure. **/
        error?: Error;
        /** A more detailed explanation of the cause of the failure. **/
        cause?: Cause;
    }
    export interface ActivityLimitExceeded {
        message?: ErrorMessage;
    }
    export interface ActivityListItem {
        /** The Amazon Resource Name (ARN) that identifies the activity. **/
        activityArn: Arn;
        /** The name of the activity. **/
        name: Name;
        /** The date the activity was created. **/
        creationDate: Timestamp;
    }
    export interface ActivityScheduleFailedEventDetails {
        /** The error code of the failure. **/
        error?: Error;
        /** A more detailed explanation of the cause of the failure. **/
        cause?: Cause;
    }
    export interface ActivityScheduledEventDetails {
        /** The Amazon Resource Name (ARN) of the scheduled activity. **/
        resource: Arn;
        /** The JSON data input to the activity task. **/
        input?: Data;
        /** The maximum allowed duration of the activity task. **/
        timeoutInSeconds?: TimeoutInSeconds;
        /** The maximum allowed duration between two heartbeats for the activity task. **/
        heartbeatInSeconds?: TimeoutInSeconds;
    }
    export interface ActivityStartedEventDetails {
        /** The name of the worker that the task was assigned to. These names are provided
by the workers when calling GetActivityTask . **/
        workerName?: Identity;
    }
    export interface ActivitySucceededEventDetails {
        /** The JSON data output by the activity task. **/
        output?: Data;
    }
    export interface ActivityTimedOutEventDetails {
        /** The error code of the failure. **/
        error?: Error;
        /** A more detailed explanation of the cause of the timeout. **/
        cause?: Cause;
    }
    export interface ActivityWorkerLimitExceeded {
        message?: ErrorMessage;
    }
    export interface CreateActivityInput {
        /** The name of the activity to create. This name must be unique for your AWS
account and region. **/
        name: Name;
    }
    export interface CreateActivityOutput {
        /** The Amazon Resource Name (ARN) that identifies the created activity. **/
        activityArn: Arn;
        /** The date the activity was created. **/
        creationDate: Timestamp;
    }
    export interface CreateStateMachineInput {
        /** The name of the state machine. This name must be unique for your AWS account and
region. **/
        name: Name;
        /** The Amazon States Language definition of the state machine. **/
        definition: Definition;
        /** The Amazon Resource Name (ARN) of the IAM role to use for this state machine. **/
        roleArn: Arn;
    }
    export interface CreateStateMachineOutput {
        /** The Amazon Resource Name (ARN) that identifies the created state machine. **/
        stateMachineArn: Arn;
        /** The date the state machine was created. **/
        creationDate: Timestamp;
    }
    export interface DeleteActivityInput {
        /** The Amazon Resource Name (ARN) of the activity to delete. **/
        activityArn: Arn;
    }
    export interface DeleteActivityOutput {
    }
    export interface DeleteStateMachineInput {
        /** The Amazon Resource Name (ARN) of the state machine to delete. **/
        stateMachineArn: Arn;
    }
    export interface DeleteStateMachineOutput {
    }
    export interface DescribeActivityInput {
        /** The Amazon Resource Name (ARN) of the activity to describe. **/
        activityArn: Arn;
    }
    export interface DescribeActivityOutput {
        /** The Amazon Resource Name (ARN) that identifies the activity. **/
        activityArn: Arn;
        /** The name of the activity. **/
        name: Name;
        /** The date the activity was created. **/
        creationDate: Timestamp;
    }
    export interface DescribeExecutionInput {
        /** The Amazon Resource Name (ARN) of the execution to describe. **/
        executionArn: Arn;
    }
    export interface DescribeExecutionOutput {
        /** The Amazon Resource Name (ARN) that identifies the execution. **/
        executionArn: Arn;
        /** The Amazon Resource Name (ARN) of the executed stated machine. **/
        stateMachineArn: Arn;
        /** The name of the execution. **/
        name?: Name;
        /** The current status of the execution. **/
        status: ExecutionStatus;
        /** The date the execution was started. **/
        startDate: Timestamp;
        /** If the execution has already ended, the date the execution stopped. **/
        stopDate?: Timestamp;
        /** The JSON input data of the execution. **/
        input: Data;
        /** The JSON output data of the execution. **/
        output?: Data;
    }
    export interface DescribeStateMachineInput {
        /** The Amazon Resource Name (ARN) of the state machine to describe. **/
        stateMachineArn: Arn;
    }
    export interface DescribeStateMachineOutput {
        /** The Amazon Resource Name (ARN) that identifies the state machine. **/
        stateMachineArn: Arn;
        /** The name of the state machine. **/
        name: Name;
        /** The current status of the state machine. **/
        status?: StateMachineStatus;
        /** The Amazon States Language definition of the state machine. **/
        definition: Definition;
        /** The Amazon Resource Name (ARN) of the IAM role used for executing this state
machine. **/
        roleArn: Arn;
        /** The date the state machine was created. **/
        creationDate: Timestamp;
    }
    export interface ExecutionAbortedEventDetails {
        /** The error code of the failure. **/
        error?: Error;
        /** A more detailed explanation of the cause of the failure. **/
        cause?: Cause;
    }
    export interface ExecutionAlreadyExists {
        message?: ErrorMessage;
    }
    export interface ExecutionDoesNotExist {
        message?: ErrorMessage;
    }
    export interface ExecutionFailedEventDetails {
        /** The error code of the failure. **/
        error?: Error;
        /** A more detailed explanation of the cause of the failure. **/
        cause?: Cause;
    }
    export interface ExecutionLimitExceeded {
        message?: ErrorMessage;
    }
    export interface ExecutionListItem {
        /** The Amazon Resource Name (ARN) that identifies the execution. **/
        executionArn: Arn;
        /** The Amazon Resource Name (ARN) of the executed state machine. **/
        stateMachineArn: Arn;
        /** The name of the execution. **/
        name: Name;
        /** The current status of the execution. **/
        status: ExecutionStatus;
        /** The date the execution started. **/
        startDate: Timestamp;
        /** If the execution already ended, the date the execution stopped. **/
        stopDate?: Timestamp;
    }
    export interface ExecutionStartedEventDetails {
        /** The JSON data input to the execution. **/
        input?: Data;
        /** The Amazon Resource Name (ARN) of the IAM role used for executing AWS Lambda
tasks. **/
        roleArn?: Arn;
    }
    export interface ExecutionSucceededEventDetails {
        /** The JSON data output by the execution. **/
        output?: Data;
    }
    export interface ExecutionTimedOutEventDetails {
        /** The error code of the failure. **/
        error?: Error;
        /** A more detailed explanation of the cause of the timeout. **/
        cause?: Cause;
    }
    export interface GetActivityTaskInput {
        /** The Amazon Resource Name (ARN) of the activity to retrieve tasks from. **/
        activityArn: Arn;
        /** An arbitrary name may be provided in order to identify the worker that the task
is assigned to. This name will be used when it is logged in the execution
history. **/
        workerName?: Name;
    }
    export interface GetActivityTaskOutput {
        /** A token that identifies the scheduled task. This token must be copied and
included in subsequent calls to SendTaskHeartbeat , SendTaskSuccess or 
SendTaskFailure in order to report the progress or completion of the task. **/
        taskToken?: TaskToken;
        /** The JSON input data for the task. **/
        input?: Data;
    }
    export interface GetExecutionHistoryInput {
        /** The Amazon Resource Name (ARN) of the execution. **/
        executionArn: Arn;
        /** The maximum number of results that will be returned per call. nextToken can be
used to obtain further pages of results. The default is 100 and the maximum
allowed page size is 1000.

This is an upper limit only; the actual number of results returned per call may
be fewer than the specified maximum. **/
        maxResults?: PageSize;
        /** Lists events in descending order of their timeStamp . **/
        reverseOrder?: ReverseOrder;
        /** If a nextToken was returned by a previous call, there are more results
available. To retrieve the next page of results, make the call again using the
returned token in nextToken . Keep all other arguments unchanged.

The configured maxResults determines how many results can be returned in a
single call. **/
        nextToken?: PageToken;
    }
    export interface GetExecutionHistoryOutput {
        /** The list of events that occurred in the execution. **/
        events: HistoryEventList;
        /** If a nextToken is returned, there are more results available. To retrieve the
next page of results, make the call again using the returned token in nextToken 
. Keep all other arguments unchanged.

The configured maxResults determines how many results can be returned in a
single call. **/
        nextToken?: PageToken;
    }
    export interface HistoryEvent {
        /** The date the event occured. **/
        timestamp: Timestamp;
        /** The type of the event. **/
        type: HistoryEventType;
        /** The id of the event. Events are numbered sequentially, starting at one. **/
        id: EventId;
        /** The id of the previous event. **/
        previousEventId?: EventId;
        activityFailedEventDetails?: ActivityFailedEventDetails;
        activityScheduleFailedEventDetails?: ActivityScheduleFailedEventDetails;
        activityScheduledEventDetails?: ActivityScheduledEventDetails;
        activityStartedEventDetails?: ActivityStartedEventDetails;
        activitySucceededEventDetails?: ActivitySucceededEventDetails;
        activityTimedOutEventDetails?: ActivityTimedOutEventDetails;
        executionFailedEventDetails?: ExecutionFailedEventDetails;
        executionStartedEventDetails?: ExecutionStartedEventDetails;
        executionSucceededEventDetails?: ExecutionSucceededEventDetails;
        executionAbortedEventDetails?: ExecutionAbortedEventDetails;
        executionTimedOutEventDetails?: ExecutionTimedOutEventDetails;
        lambdaFunctionFailedEventDetails?: LambdaFunctionFailedEventDetails;
        lambdaFunctionScheduleFailedEventDetails?: LambdaFunctionScheduleFailedEventDetails;
        lambdaFunctionScheduledEventDetails?: LambdaFunctionScheduledEventDetails;
        lambdaFunctionStartFailedEventDetails?: LambdaFunctionStartFailedEventDetails;
        lambdaFunctionSucceededEventDetails?: LambdaFunctionSucceededEventDetails;
        lambdaFunctionTimedOutEventDetails?: LambdaFunctionTimedOutEventDetails;
        stateEnteredEventDetails?: StateEnteredEventDetails;
        stateExitedEventDetails?: StateExitedEventDetails;
    }
    export interface InvalidArn {
        message?: ErrorMessage;
    }
    export interface InvalidDefinition {
        message?: ErrorMessage;
    }
    export interface InvalidExecutionInput {
        message?: ErrorMessage;
    }
    export interface InvalidName {
        message?: ErrorMessage;
    }
    export interface InvalidOutput {
        message?: ErrorMessage;
    }
    export interface InvalidToken {
        message?: ErrorMessage;
    }
    export interface LambdaFunctionFailedEventDetails {
        /** The error code of the failure. **/
        error?: Error;
        /** A more detailed explanation of the cause of the failure. **/
        cause?: Cause;
    }
    export interface LambdaFunctionScheduleFailedEventDetails {
        /** The error code of the failure. **/
        error?: Error;
        /** A more detailed explanation of the cause of the failure. **/
        cause?: Cause;
    }
    export interface LambdaFunctionScheduledEventDetails {
        /** The Amazon Resource Name (ARN) of the scheduled lambda function. **/
        resource: Arn;
        /** The JSON data input to the lambda function. **/
        input?: Data;
        /** The maximum allowed duration of the lambda function. **/
        timeoutInSeconds?: TimeoutInSeconds;
    }
    export interface LambdaFunctionStartFailedEventDetails {
        /** The error code of the failure. **/
        error?: Error;
        /** A more detailed explanation of the cause of the failure. **/
        cause?: Cause;
    }
    export interface LambdaFunctionSucceededEventDetails {
        /** The JSON data output by the lambda function. **/
        output?: Data;
    }
    export interface LambdaFunctionTimedOutEventDetails {
        /** The error code of the failure. **/
        error?: Error;
        /** A more detailed explanation of the cause of the timeout. **/
        cause?: Cause;
    }
    export interface ListActivitiesInput {
        /** The maximum number of results that will be returned per call. nextToken can be
used to obtain further pages of results. The default is 100 and the maximum
allowed page size is 1000.

This is an upper limit only; the actual number of results returned per call may
be fewer than the specified maximum. **/
        maxResults?: PageSize;
        /** If a nextToken was returned by a previous call, there are more results
available. To retrieve the next page of results, make the call again using the
returned token in nextToken . Keep all other arguments unchanged.

The configured maxResults determines how many results can be returned in a
single call. **/
        nextToken?: PageToken;
    }
    export interface ListActivitiesOutput {
        /** The list of activities. **/
        activities: ActivityList;
        /** If a nextToken is returned, there are more results available. To retrieve the
next page of results, make the call again using the returned token in nextToken 
. Keep all other arguments unchanged.

The configured maxResults determines how many results can be returned in a
single call. **/
        nextToken?: PageToken;
    }
    export interface ListExecutionsInput {
        /** The Amazon Resource Name (ARN) of the state machine whose executions will be
listed. **/
        stateMachineArn: Arn;
        /** If specified, only list the executions whose current execution status matches
the given filter. **/
        statusFilter?: ExecutionStatus;
        /** The maximum number of results that will be returned per call. nextToken can be
used to obtain further pages of results. The default is 100 and the maximum
allowed page size is 1000.

This is an upper limit only; the actual number of results returned per call may
be fewer than the specified maximum. **/
        maxResults?: PageSize;
        /** If a nextToken was returned by a previous call, there are more results
available. To retrieve the next page of results, make the call again using the
returned token in nextToken . Keep all other arguments unchanged.

The configured maxResults determines how many results can be returned in a
single call. **/
        nextToken?: PageToken;
    }
    export interface ListExecutionsOutput {
        /** The list of matching executions. **/
        executions: ExecutionList;
        /** If a nextToken is returned, there are more results available. To retrieve the
next page of results, make the call again using the returned token in nextToken 
. Keep all other arguments unchanged.

The configured maxResults determines how many results can be returned in a
single call. **/
        nextToken?: PageToken;
    }
    export interface ListStateMachinesInput {
        /** The maximum number of results that will be returned per call. nextToken can be
used to obtain further pages of results. The default is 100 and the maximum
allowed page size is 1000.

This is an upper limit only; the actual number of results returned per call may
be fewer than the specified maximum. **/
        maxResults?: PageSize;
        /** If a nextToken was returned by a previous call, there are more results
available. To retrieve the next page of results, make the call again using the
returned token in nextToken . Keep all other arguments unchanged.

The configured maxResults determines how many results can be returned in a
single call. **/
        nextToken?: PageToken;
    }
    export interface ListStateMachinesOutput {
        stateMachines: StateMachineList;
        /** If a nextToken is returned, there are more results available. To retrieve the
next page of results, make the call again using the returned token in nextToken 
. Keep all other arguments unchanged.

The configured maxResults determines how many results can be returned in a
single call. **/
        nextToken?: PageToken;
    }
    export interface SendTaskFailureInput {
        /** The token that represents this task. Task tokens are generated by the service
when the tasks are assigned to a worker (see GetActivityTask::taskToken). **/
        taskToken: TaskToken;
        /** An arbitrary error code that identifies the cause of the failure. **/
        error?: Error;
        /** A more detailed explanation of the cause of the failure. **/
        cause?: Cause;
    }
    export interface SendTaskFailureOutput {
    }
    export interface SendTaskHeartbeatInput {
        /** The token that represents this task. Task tokens are generated by the service
when the tasks are assigned to a worker (see GetActivityTask::taskToken). **/
        taskToken: TaskToken;
    }
    export interface SendTaskHeartbeatOutput {
    }
    export interface SendTaskSuccessInput {
        /** The token that represents this task. Task tokens are generated by the service
when the tasks are assigned to a worker (see GetActivityTask::taskToken). **/
        taskToken: TaskToken;
        /** The JSON output of the task. **/
        output: Data;
    }
    export interface SendTaskSuccessOutput {
    }
    export interface StartExecutionInput {
        /** The Amazon Resource Name (ARN) of the state machine to execute. **/
        stateMachineArn: Arn;
        /** The name of the execution. This name must be unique for your AWS account and
region. **/
        name?: Name;
        /** The JSON input data for the execution. **/
        input?: Data;
    }
    export interface StartExecutionOutput {
        /** The Amazon Resource Name (ARN) that identifies the execution. **/
        executionArn: Arn;
        /** The date the execution was started. **/
        startDate: Timestamp;
    }
    export interface StateEnteredEventDetails {
        /** The name of the state. **/
        name: Name;
        /** The JSON input data to the state. **/
        input?: Data;
    }
    export interface StateExitedEventDetails {
        /** The name of the state. **/
        name: Name;
        /** The JSON output data of the state. **/
        output?: Data;
    }
    export interface StateMachineAlreadyExists {
        message?: ErrorMessage;
    }
    export interface StateMachineDeleting {
        message?: ErrorMessage;
    }
    export interface StateMachineDoesNotExist {
        message?: ErrorMessage;
    }
    export interface StateMachineLimitExceeded {
        message?: ErrorMessage;
    }
    export interface StateMachineListItem {
        /** The Amazon Resource Name (ARN) that identifies the state machine. **/
        stateMachineArn: Arn;
        /** The name of the state machine. **/
        name: Name;
        /** The date the state machine was created. **/
        creationDate: Timestamp;
    }
    export interface StopExecutionInput {
        /** The Amazon Resource Name (ARN) of the execution to stop. **/
        executionArn: Arn;
        /** An arbitrary error code that identifies the cause of the termination. **/
        error?: Error;
        /** A more detailed explanation of the cause of the termination. **/
        cause?: Cause;
    }
    export interface StopExecutionOutput {
        /** The date the execution was stopped. **/
        stopDate: Timestamp;
    }
    export interface TaskDoesNotExist {
        message?: ErrorMessage;
    }
    export interface TaskTimedOut {
        message?: ErrorMessage;
    }
  }
}
