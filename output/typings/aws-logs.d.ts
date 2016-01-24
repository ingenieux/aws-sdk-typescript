// Type definitions for aws-sdk - Amazon CloudWatch Logs
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

///<reference path="./aws-sdk-common.d.ts" />

declare module "aws-sdk" {

    /*
     * apiVersion: 2014-03-28
     * endpointPrefix: logs
     * serviceAbbreviation: 
     * signatureVersion: v4
     * protocol: json
     */
    export class CloudWatchLogs extends Service {
      constructor(options?: any);
      endpoint: Endpoint;
      cancelExportTask(params: CloudWatchLogs.CancelExportTaskRequest, callback?: (err: CloudWatchLogs.InvalidParameterException|CloudWatchLogs.ResourceNotFoundException|CloudWatchLogs.InvalidOperationException|CloudWatchLogs.ServiceUnavailableException|any, data: any) => void): Request;
      createExportTask(params: CloudWatchLogs.CreateExportTaskRequest, callback?: (err: CloudWatchLogs.InvalidParameterException|CloudWatchLogs.LimitExceededException|CloudWatchLogs.OperationAbortedException|CloudWatchLogs.ServiceUnavailableException|CloudWatchLogs.ResourceNotFoundException|CloudWatchLogs.ResourceAlreadyExistsException|any, data: CloudWatchLogs.CreateExportTaskResponse|any) => void): Request;
      createLogGroup(params: CloudWatchLogs.CreateLogGroupRequest, callback?: (err: CloudWatchLogs.InvalidParameterException|CloudWatchLogs.ResourceAlreadyExistsException|CloudWatchLogs.LimitExceededException|CloudWatchLogs.OperationAbortedException|CloudWatchLogs.ServiceUnavailableException|any, data: any) => void): Request;
      createLogStream(params: CloudWatchLogs.CreateLogStreamRequest, callback?: (err: CloudWatchLogs.InvalidParameterException|CloudWatchLogs.ResourceAlreadyExistsException|CloudWatchLogs.ResourceNotFoundException|CloudWatchLogs.ServiceUnavailableException|any, data: any) => void): Request;
      deleteDestination(params: CloudWatchLogs.DeleteDestinationRequest, callback?: (err: CloudWatchLogs.InvalidParameterException|CloudWatchLogs.ResourceNotFoundException|CloudWatchLogs.OperationAbortedException|CloudWatchLogs.ServiceUnavailableException|any, data: any) => void): Request;
      deleteLogGroup(params: CloudWatchLogs.DeleteLogGroupRequest, callback?: (err: CloudWatchLogs.InvalidParameterException|CloudWatchLogs.ResourceNotFoundException|CloudWatchLogs.OperationAbortedException|CloudWatchLogs.ServiceUnavailableException|any, data: any) => void): Request;
      deleteLogStream(params: CloudWatchLogs.DeleteLogStreamRequest, callback?: (err: CloudWatchLogs.InvalidParameterException|CloudWatchLogs.ResourceNotFoundException|CloudWatchLogs.OperationAbortedException|CloudWatchLogs.ServiceUnavailableException|any, data: any) => void): Request;
      deleteMetricFilter(params: CloudWatchLogs.DeleteMetricFilterRequest, callback?: (err: CloudWatchLogs.InvalidParameterException|CloudWatchLogs.ResourceNotFoundException|CloudWatchLogs.OperationAbortedException|CloudWatchLogs.ServiceUnavailableException|any, data: any) => void): Request;
      deleteRetentionPolicy(params: CloudWatchLogs.DeleteRetentionPolicyRequest, callback?: (err: CloudWatchLogs.InvalidParameterException|CloudWatchLogs.ResourceNotFoundException|CloudWatchLogs.OperationAbortedException|CloudWatchLogs.ServiceUnavailableException|any, data: any) => void): Request;
      deleteSubscriptionFilter(params: CloudWatchLogs.DeleteSubscriptionFilterRequest, callback?: (err: CloudWatchLogs.InvalidParameterException|CloudWatchLogs.ResourceNotFoundException|CloudWatchLogs.OperationAbortedException|CloudWatchLogs.ServiceUnavailableException|any, data: any) => void): Request;
      describeDestinations(params: CloudWatchLogs.DescribeDestinationsRequest, callback?: (err: CloudWatchLogs.InvalidParameterException|CloudWatchLogs.ServiceUnavailableException|any, data: CloudWatchLogs.DescribeDestinationsResponse|any) => void): Request;
      describeExportTasks(params: CloudWatchLogs.DescribeExportTasksRequest, callback?: (err: CloudWatchLogs.InvalidParameterException|CloudWatchLogs.ServiceUnavailableException|any, data: CloudWatchLogs.DescribeExportTasksResponse|any) => void): Request;
      describeLogGroups(params: CloudWatchLogs.DescribeLogGroupsRequest, callback?: (err: CloudWatchLogs.InvalidParameterException|CloudWatchLogs.ServiceUnavailableException|any, data: CloudWatchLogs.DescribeLogGroupsResponse|any) => void): Request;
      describeLogStreams(params: CloudWatchLogs.DescribeLogStreamsRequest, callback?: (err: CloudWatchLogs.InvalidParameterException|CloudWatchLogs.ResourceNotFoundException|CloudWatchLogs.ServiceUnavailableException|any, data: CloudWatchLogs.DescribeLogStreamsResponse|any) => void): Request;
      describeMetricFilters(params: CloudWatchLogs.DescribeMetricFiltersRequest, callback?: (err: CloudWatchLogs.InvalidParameterException|CloudWatchLogs.ResourceNotFoundException|CloudWatchLogs.ServiceUnavailableException|any, data: CloudWatchLogs.DescribeMetricFiltersResponse|any) => void): Request;
      describeSubscriptionFilters(params: CloudWatchLogs.DescribeSubscriptionFiltersRequest, callback?: (err: CloudWatchLogs.InvalidParameterException|CloudWatchLogs.ResourceNotFoundException|CloudWatchLogs.ServiceUnavailableException|any, data: CloudWatchLogs.DescribeSubscriptionFiltersResponse|any) => void): Request;
      filterLogEvents(params: CloudWatchLogs.FilterLogEventsRequest, callback?: (err: CloudWatchLogs.InvalidParameterException|CloudWatchLogs.ResourceNotFoundException|CloudWatchLogs.ServiceUnavailableException|any, data: CloudWatchLogs.FilterLogEventsResponse|any) => void): Request;
      getLogEvents(params: CloudWatchLogs.GetLogEventsRequest, callback?: (err: CloudWatchLogs.InvalidParameterException|CloudWatchLogs.ResourceNotFoundException|CloudWatchLogs.ServiceUnavailableException|any, data: CloudWatchLogs.GetLogEventsResponse|any) => void): Request;
      putDestination(params: CloudWatchLogs.PutDestinationRequest, callback?: (err: CloudWatchLogs.InvalidParameterException|CloudWatchLogs.OperationAbortedException|CloudWatchLogs.ServiceUnavailableException|any, data: CloudWatchLogs.PutDestinationResponse|any) => void): Request;
      putDestinationPolicy(params: CloudWatchLogs.PutDestinationPolicyRequest, callback?: (err: CloudWatchLogs.InvalidParameterException|CloudWatchLogs.OperationAbortedException|CloudWatchLogs.ServiceUnavailableException|any, data: any) => void): Request;
      putLogEvents(params: CloudWatchLogs.PutLogEventsRequest, callback?: (err: CloudWatchLogs.InvalidParameterException|CloudWatchLogs.InvalidSequenceTokenException|CloudWatchLogs.DataAlreadyAcceptedException|CloudWatchLogs.ResourceNotFoundException|CloudWatchLogs.OperationAbortedException|CloudWatchLogs.ServiceUnavailableException|any, data: CloudWatchLogs.PutLogEventsResponse|any) => void): Request;
      putMetricFilter(params: CloudWatchLogs.PutMetricFilterRequest, callback?: (err: CloudWatchLogs.InvalidParameterException|CloudWatchLogs.ResourceNotFoundException|CloudWatchLogs.OperationAbortedException|CloudWatchLogs.LimitExceededException|CloudWatchLogs.ServiceUnavailableException|any, data: any) => void): Request;
      putRetentionPolicy(params: CloudWatchLogs.PutRetentionPolicyRequest, callback?: (err: CloudWatchLogs.InvalidParameterException|CloudWatchLogs.ResourceNotFoundException|CloudWatchLogs.OperationAbortedException|CloudWatchLogs.ServiceUnavailableException|any, data: any) => void): Request;
      putSubscriptionFilter(params: CloudWatchLogs.PutSubscriptionFilterRequest, callback?: (err: CloudWatchLogs.InvalidParameterException|CloudWatchLogs.ResourceNotFoundException|CloudWatchLogs.OperationAbortedException|CloudWatchLogs.LimitExceededException|CloudWatchLogs.ServiceUnavailableException|any, data: any) => void): Request;
      testMetricFilter(params: CloudWatchLogs.TestMetricFilterRequest, callback?: (err: CloudWatchLogs.InvalidParameterException|CloudWatchLogs.ServiceUnavailableException|any, data: CloudWatchLogs.TestMetricFilterResponse|any) => void): Request;

    }

    export module CloudWatchLogs {
        export type AccessPolicy = string;    // min: 1
        export type Arn = string;
        export type Days = number;
        export type Descending = boolean;
        export type DescribeLimit = number;    // max: 50, min: 1
        export type DestinationArn = string;    // min: 1
        export type DestinationName = string;    // pattern: &quot;[^:*]*&quot;, max: 512, min: 1
        export type Destinations = Destination[];
        export type EventId = string;
        export type EventMessage = string;    // min: 1
        export type EventNumber = number;
        export type EventsLimit = number;    // max: 10000, min: 1
        export type ExportDestinationBucket = string;    // max: 512, min: 1
        export type ExportDestinationPrefix = string;
        export type ExportTaskId = string;    // max: 512, min: 1
        export type ExportTaskName = string;    // max: 512, min: 1
        export type ExportTaskStatusCode = string;
        export type ExportTaskStatusMessage = string;
        export type ExportTasks = ExportTask[];
        export type ExtractedValues = {[key:string]: Value};
        export type FilterCount = number;
        export type FilterName = string;    // pattern: &quot;[^:*]*&quot;, max: 512, min: 1
        export type FilterPattern = string;    // max: 512
        export type FilteredLogEvents = FilteredLogEvent[];
        export type InputLogEvents = InputLogEvent[];    // max: 10000, min: 1
        export type InputLogStreamNames = LogStreamName[];    // max: 100, min: 1
        export type Interleaved = boolean;
        export type LogEventIndex = number;
        export type LogGroupName = string;    // pattern: &quot;[\.\-_/#A-Za-z0-9]+&quot;, max: 512, min: 1
        export type LogGroups = LogGroup[];
        export type LogStreamName = string;    // pattern: &quot;[^:*]*&quot;, max: 512, min: 1
        export type LogStreamSearchedCompletely = boolean;
        export type LogStreams = LogStream[];
        export type MetricFilterMatches = MetricFilterMatchRecord[];
        export type MetricFilters = MetricFilter[];
        export type MetricName = string;    // pattern: &quot;[^:*$]*&quot;, max: 255
        export type MetricNamespace = string;    // pattern: &quot;[^:*$]*&quot;, max: 255
        export type MetricTransformations = MetricTransformation[];    // max: 1, min: 1
        export type MetricValue = string;    // max: 100
        export type NextToken = string;    // min: 1
        export type OrderBy = string;
        export type OutputLogEvents = OutputLogEvent[];
        export type RoleArn = string;    // min: 1
        export type SearchedLogStreams = SearchedLogStream[];
        export type SequenceToken = string;    // min: 1
        export type StartFromHead = boolean;
        export type StoredBytes = number;
        export type SubscriptionFilters = SubscriptionFilter[];
        export type TargetArn = string;    // min: 1
        export type TestEventMessages = EventMessage[];    // max: 50, min: 1
        export type Timestamp = number;
        export type Token = string;
        export type Value = string;

        export interface CancelExportTaskRequest {
            taskId: ExportTaskId;
        }
        export interface CreateExportTaskRequest {
            taskName?: ExportTaskName;
            logGroupName: LogGroupName;
            logStreamNamePrefix?: LogStreamName;
            from: Timestamp;
            to: Timestamp;
            destination: ExportDestinationBucket;
            destinationPrefix?: ExportDestinationPrefix;
        }
        export interface CreateExportTaskResponse {
            taskId?: ExportTaskId;
        }
        export interface CreateLogGroupRequest {
            logGroupName: LogGroupName;
        }
        export interface CreateLogStreamRequest {
            logGroupName: LogGroupName;
            logStreamName: LogStreamName;
        }
        export interface DataAlreadyAcceptedException {
            expectedSequenceToken?: SequenceToken;
        }
        export interface DeleteDestinationRequest {
            destinationName: DestinationName;
        }
        export interface DeleteLogGroupRequest {
            logGroupName: LogGroupName;
        }
        export interface DeleteLogStreamRequest {
            logGroupName: LogGroupName;
            logStreamName: LogStreamName;
        }
        export interface DeleteMetricFilterRequest {
            logGroupName: LogGroupName;
            filterName: FilterName;
        }
        export interface DeleteRetentionPolicyRequest {
            logGroupName: LogGroupName;
        }
        export interface DeleteSubscriptionFilterRequest {
            logGroupName: LogGroupName;
            filterName: FilterName;
        }
        export interface DescribeDestinationsRequest {
            DestinationNamePrefix?: DestinationName;
            nextToken?: NextToken;
            limit?: DescribeLimit;
        }
        export interface DescribeDestinationsResponse {
            destinations?: Destinations;
            nextToken?: NextToken;
        }
        export interface DescribeExportTasksRequest {
            taskId?: ExportTaskId;
            statusCode?: ExportTaskStatusCode;
            nextToken?: NextToken;
            limit?: DescribeLimit;
        }
        export interface DescribeExportTasksResponse {
            exportTasks?: ExportTasks;
            nextToken?: NextToken;
        }
        export interface DescribeLogGroupsRequest {
            logGroupNamePrefix?: LogGroupName;
            nextToken?: NextToken;
            limit?: DescribeLimit;
        }
        export interface DescribeLogGroupsResponse {
            logGroups?: LogGroups;
            nextToken?: NextToken;
        }
        export interface DescribeLogStreamsRequest {
            logGroupName: LogGroupName;
            logStreamNamePrefix?: LogStreamName;
            orderBy?: OrderBy;
            descending?: Descending;
            nextToken?: NextToken;
            limit?: DescribeLimit;
        }
        export interface DescribeLogStreamsResponse {
            logStreams?: LogStreams;
            nextToken?: NextToken;
        }
        export interface DescribeMetricFiltersRequest {
            logGroupName: LogGroupName;
            filterNamePrefix?: FilterName;
            nextToken?: NextToken;
            limit?: DescribeLimit;
        }
        export interface DescribeMetricFiltersResponse {
            metricFilters?: MetricFilters;
            nextToken?: NextToken;
        }
        export interface DescribeSubscriptionFiltersRequest {
            logGroupName: LogGroupName;
            filterNamePrefix?: FilterName;
            nextToken?: NextToken;
            limit?: DescribeLimit;
        }
        export interface DescribeSubscriptionFiltersResponse {
            subscriptionFilters?: SubscriptionFilters;
            nextToken?: NextToken;
        }
        export interface Destination {
            destinationName?: DestinationName;
            targetArn?: TargetArn;
            roleArn?: RoleArn;
            accessPolicy?: AccessPolicy;
            arn?: Arn;
            creationTime?: Timestamp;
        }
        export interface ExportTask {
            taskId?: ExportTaskId;
            taskName?: ExportTaskName;
            logGroupName?: LogGroupName;
            from?: Timestamp;
            to?: Timestamp;
            destination?: ExportDestinationBucket;
            destinationPrefix?: ExportDestinationPrefix;
            status?: ExportTaskStatus;
            executionInfo?: ExportTaskExecutionInfo;
        }
        export interface ExportTaskExecutionInfo {
            creationTime?: Timestamp;
            completionTime?: Timestamp;
        }
        export interface ExportTaskStatus {
            code?: ExportTaskStatusCode;
            message?: ExportTaskStatusMessage;
        }
        export interface FilterLogEventsRequest {
            logGroupName: LogGroupName;
            logStreamNames?: InputLogStreamNames;
            startTime?: Timestamp;
            endTime?: Timestamp;
            filterPattern?: FilterPattern;
            nextToken?: NextToken;
            limit?: EventsLimit;
            interleaved?: Interleaved;
        }
        export interface FilterLogEventsResponse {
            events?: FilteredLogEvents;
            searchedLogStreams?: SearchedLogStreams;
            nextToken?: NextToken;
        }
        export interface FilteredLogEvent {
            logStreamName?: LogStreamName;
            timestamp?: Timestamp;
            message?: EventMessage;
            ingestionTime?: Timestamp;
            eventId?: EventId;
        }
        export interface GetLogEventsRequest {
            logGroupName: LogGroupName;
            logStreamName: LogStreamName;
            startTime?: Timestamp;
            endTime?: Timestamp;
            nextToken?: NextToken;
            limit?: EventsLimit;
            startFromHead?: StartFromHead;
        }
        export interface GetLogEventsResponse {
            events?: OutputLogEvents;
            nextForwardToken?: NextToken;
            nextBackwardToken?: NextToken;
        }
        export interface InputLogEvent {
            timestamp: Timestamp;
            message: EventMessage;
        }
        export interface InvalidOperationException {
        }
        export interface InvalidParameterException {
        }
        export interface InvalidSequenceTokenException {
            expectedSequenceToken?: SequenceToken;
        }
        export interface LimitExceededException {
        }
        export interface LogGroup {
            logGroupName?: LogGroupName;
            creationTime?: Timestamp;
            retentionInDays?: Days;
            metricFilterCount?: FilterCount;
            arn?: Arn;
            storedBytes?: StoredBytes;
        }
        export interface LogStream {
            logStreamName?: LogStreamName;
            creationTime?: Timestamp;
            firstEventTimestamp?: Timestamp;
            lastEventTimestamp?: Timestamp;
            lastIngestionTime?: Timestamp;
            uploadSequenceToken?: SequenceToken;
            arn?: Arn;
            storedBytes?: StoredBytes;
        }
        export interface MetricFilter {
            filterName?: FilterName;
            filterPattern?: FilterPattern;
            metricTransformations?: MetricTransformations;
            creationTime?: Timestamp;
        }
        export interface MetricFilterMatchRecord {
            eventNumber?: EventNumber;
            eventMessage?: EventMessage;
            extractedValues?: ExtractedValues;
        }
        export interface MetricTransformation {
            metricName: MetricName;
            metricNamespace: MetricNamespace;
            metricValue: MetricValue;
        }
        export interface OperationAbortedException {
        }
        export interface OutputLogEvent {
            timestamp?: Timestamp;
            message?: EventMessage;
            ingestionTime?: Timestamp;
        }
        export interface PutDestinationPolicyRequest {
            destinationName: DestinationName;
            accessPolicy: AccessPolicy;
        }
        export interface PutDestinationRequest {
            destinationName: DestinationName;
            targetArn: TargetArn;
            roleArn: RoleArn;
        }
        export interface PutDestinationResponse {
            destination?: Destination;
        }
        export interface PutLogEventsRequest {
            logGroupName: LogGroupName;
            logStreamName: LogStreamName;
            logEvents: InputLogEvents;
            sequenceToken?: SequenceToken;
        }
        export interface PutLogEventsResponse {
            nextSequenceToken?: SequenceToken;
            rejectedLogEventsInfo?: RejectedLogEventsInfo;
        }
        export interface PutMetricFilterRequest {
            logGroupName: LogGroupName;
            filterName: FilterName;
            filterPattern: FilterPattern;
            metricTransformations: MetricTransformations;
        }
        export interface PutRetentionPolicyRequest {
            logGroupName: LogGroupName;
            retentionInDays: Days;
        }
        export interface PutSubscriptionFilterRequest {
            logGroupName: LogGroupName;
            filterName: FilterName;
            filterPattern: FilterPattern;
            destinationArn: DestinationArn;
            roleArn?: RoleArn;
        }
        export interface RejectedLogEventsInfo {
            tooNewLogEventStartIndex?: LogEventIndex;
            tooOldLogEventEndIndex?: LogEventIndex;
            expiredLogEventEndIndex?: LogEventIndex;
        }
        export interface ResourceAlreadyExistsException {
        }
        export interface ResourceNotFoundException {
        }
        export interface SearchedLogStream {
            logStreamName?: LogStreamName;
            searchedCompletely?: LogStreamSearchedCompletely;
        }
        export interface ServiceUnavailableException {
        }
        export interface SubscriptionFilter {
            filterName?: FilterName;
            logGroupName?: LogGroupName;
            filterPattern?: FilterPattern;
            destinationArn?: DestinationArn;
            roleArn?: RoleArn;
            creationTime?: Timestamp;
        }
        export interface TestMetricFilterRequest {
            filterPattern: FilterPattern;
            logEventMessages: TestEventMessages;
        }
        export interface TestMetricFilterResponse {
            matches?: MetricFilterMatches;
        }

    }
}
