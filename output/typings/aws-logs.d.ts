// Type definitions for aws-sdk - Amazon CloudWatch Logs
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

// COMMENTED <reference path="./aws-sdk.d.ts" />

declare module "aws-sdk" {

 /**
   * apiVersion: 2014-03-28
   * endpointPrefix: logs
   * serviceAbbreviation: 
   * signatureVersion: v4
   * protocol: json
   *
   * You can use Amazon CloudWatch Logs to monitor, store, and access your log files
from EC2 instances, Amazon CloudTrail, or other sources. You can then retrieve
the associated log data from CloudWatch Logs using the Amazon CloudWatch
console, the CloudWatch Logs commands in the AWS CLI, the CloudWatch Logs API,
or the CloudWatch Logs SDK.

You can use CloudWatch Logs to:

 &amp;#42; Monitor Logs from Amazon EC2 Instances in Real-time : You can use CloudWatch
   Logs to monitor applications and systems using log data. For example,
   CloudWatch Logs can track the number of errors that occur in your application
   logs and send you a notification whenever the rate of errors exceeds a
   threshold you specify. CloudWatch Logs uses your log data for monitoring; so,
   no code changes are required. For example, you can monitor application logs
   for specific literal terms (such as &quot;NullReferenceException&quot;) or count the
   number of occurrences of a literal term at a particular position in log data
   (such as &quot;404&quot; status codes in an Apache access log). When the term you are
   searching for is found, CloudWatch Logs reports the data to a Amazon
   CloudWatch metric that you specify.
   
   
 * Monitor Amazon CloudTrail Logged Events : You can create alarms in Amazon
   CloudWatch and receive notifications of particular API activity as captured
   by CloudTrail and use the notification to perform troubleshooting.
   
   
 * Archive Log Data : You can use CloudWatch Logs to store your log data in
   highly durable storage. You can change the log retention setting so that any
   log events older than this setting are automatically deleted. The CloudWatch
   Logs agent makes it easy to quickly send both rotated and non-rotated log
   data off of a host and into the log service. You can then access the raw log
   data when you need it.
   *
   */
  export class CloudWatchLogs extends Service {
    constructor(options?: any);
    endpoint: Endpoint;
    /**
     * Cancels the specified export task.

The task must be in the PENDING or RUNNING state.
     *
     * @error InvalidParameterException   
     * @error ResourceNotFoundException   
     * @error InvalidOperationException   
     * @error ServiceUnavailableException   
     */
    cancelExportTask(params: CloudWatchLogs.CancelExportTaskRequest, callback?: (err: CloudWatchLogs.InvalidParameterException|CloudWatchLogs.ResourceNotFoundException|CloudWatchLogs.InvalidOperationException|CloudWatchLogs.ServiceUnavailableException|any, data: any) => void): Request<any,CloudWatchLogs.InvalidParameterException|CloudWatchLogs.ResourceNotFoundException|CloudWatchLogs.InvalidOperationException|CloudWatchLogs.ServiceUnavailableException|any>;
    /**
     * Creates an export task, which allows you to efficiently export data from a log
group to an Amazon S3 bucket.

This is an asynchronous call. If all the required information is provided, this
operation initiates an export task and responds with the ID of the task. After
the task has started, you can use DescribeExportTasks to get the status of the
export task. Each account can only have one active ( RUNNING or PENDING ) export
task at a time. To cancel an export task, use CancelExportTask .

You can export logs from multiple log groups or multiple time ranges to the same
S3 bucket. To separate out log data for each export task, you can specify a
prefix that will be used as the Amazon S3 key prefix for all exported objects.
     *
     * @error InvalidParameterException   
     * @error LimitExceededException   
     * @error OperationAbortedException   
     * @error ServiceUnavailableException   
     * @error ResourceNotFoundException   
     * @error ResourceAlreadyExistsException   
     */
    createExportTask(params: CloudWatchLogs.CreateExportTaskRequest, callback?: (err: CloudWatchLogs.InvalidParameterException|CloudWatchLogs.LimitExceededException|CloudWatchLogs.OperationAbortedException|CloudWatchLogs.ServiceUnavailableException|CloudWatchLogs.ResourceNotFoundException|CloudWatchLogs.ResourceAlreadyExistsException|any, data: CloudWatchLogs.CreateExportTaskResponse|any) => void): Request<CloudWatchLogs.CreateExportTaskResponse|any,CloudWatchLogs.InvalidParameterException|CloudWatchLogs.LimitExceededException|CloudWatchLogs.OperationAbortedException|CloudWatchLogs.ServiceUnavailableException|CloudWatchLogs.ResourceNotFoundException|CloudWatchLogs.ResourceAlreadyExistsException|any>;
    /**
     * Creates a log group with the specified name.

You can create up to 5000 log groups per account.

You must use the following guidelines when naming a log group:

 &amp;#42; Log group names must be unique within a region for an AWS account.
   
   
 * Log group names can be between 1 and 512 characters long.
   
   
 * Log group names consist of the following characters: a-z, A-Z, 0-9, &#x27;_&#x27;
   (underscore), &#x27;-&#x27; (hyphen), &#x27;/&#x27; (forward slash), and &#x27;.&#x27; (period).
     *
     * @error InvalidParameterException   
     * @error ResourceAlreadyExistsException   
     * @error LimitExceededException   
     * @error OperationAbortedException   
     * @error ServiceUnavailableException   
     */
    createLogGroup(params: CloudWatchLogs.CreateLogGroupRequest, callback?: (err: CloudWatchLogs.InvalidParameterException|CloudWatchLogs.ResourceAlreadyExistsException|CloudWatchLogs.LimitExceededException|CloudWatchLogs.OperationAbortedException|CloudWatchLogs.ServiceUnavailableException|any, data: any) => void): Request<any,CloudWatchLogs.InvalidParameterException|CloudWatchLogs.ResourceAlreadyExistsException|CloudWatchLogs.LimitExceededException|CloudWatchLogs.OperationAbortedException|CloudWatchLogs.ServiceUnavailableException|any>;
    /**
     * Creates a log stream for the specified log group.

There is no limit on the number of log streams that you can create for a log
group.

You must use the following guidelines when naming a log stream:

 &amp;#42; Log stream names must be unique within the log group.
   
   
 * Log stream names can be between 1 and 512 characters long.
   
   
 * The &#x27;:&#x27; (colon) and &#x27;*&#x27; (asterisk) characters are not allowed.
     *
     * @error InvalidParameterException   
     * @error ResourceAlreadyExistsException   
     * @error ResourceNotFoundException   
     * @error ServiceUnavailableException   
     */
    createLogStream(params: CloudWatchLogs.CreateLogStreamRequest, callback?: (err: CloudWatchLogs.InvalidParameterException|CloudWatchLogs.ResourceAlreadyExistsException|CloudWatchLogs.ResourceNotFoundException|CloudWatchLogs.ServiceUnavailableException|any, data: any) => void): Request<any,CloudWatchLogs.InvalidParameterException|CloudWatchLogs.ResourceAlreadyExistsException|CloudWatchLogs.ResourceNotFoundException|CloudWatchLogs.ServiceUnavailableException|any>;
    /**
     * Deletes the specified destination, and eventually disables all the subscription
filters that publish to it. This operation does not delete the physical resource
encapsulated by the destination.
     *
     * @error InvalidParameterException   
     * @error ResourceNotFoundException   
     * @error OperationAbortedException   
     * @error ServiceUnavailableException   
     */
    deleteDestination(params: CloudWatchLogs.DeleteDestinationRequest, callback?: (err: CloudWatchLogs.InvalidParameterException|CloudWatchLogs.ResourceNotFoundException|CloudWatchLogs.OperationAbortedException|CloudWatchLogs.ServiceUnavailableException|any, data: any) => void): Request<any,CloudWatchLogs.InvalidParameterException|CloudWatchLogs.ResourceNotFoundException|CloudWatchLogs.OperationAbortedException|CloudWatchLogs.ServiceUnavailableException|any>;
    /**
     * Deletes the specified log group and permanently deletes all the archived log
events associated with the log group.
     *
     * @error InvalidParameterException   
     * @error ResourceNotFoundException   
     * @error OperationAbortedException   
     * @error ServiceUnavailableException   
     */
    deleteLogGroup(params: CloudWatchLogs.DeleteLogGroupRequest, callback?: (err: CloudWatchLogs.InvalidParameterException|CloudWatchLogs.ResourceNotFoundException|CloudWatchLogs.OperationAbortedException|CloudWatchLogs.ServiceUnavailableException|any, data: any) => void): Request<any,CloudWatchLogs.InvalidParameterException|CloudWatchLogs.ResourceNotFoundException|CloudWatchLogs.OperationAbortedException|CloudWatchLogs.ServiceUnavailableException|any>;
    /**
     * Deletes the specified log stream and permanently deletes all the archived log
events associated with the log stream.
     *
     * @error InvalidParameterException   
     * @error ResourceNotFoundException   
     * @error OperationAbortedException   
     * @error ServiceUnavailableException   
     */
    deleteLogStream(params: CloudWatchLogs.DeleteLogStreamRequest, callback?: (err: CloudWatchLogs.InvalidParameterException|CloudWatchLogs.ResourceNotFoundException|CloudWatchLogs.OperationAbortedException|CloudWatchLogs.ServiceUnavailableException|any, data: any) => void): Request<any,CloudWatchLogs.InvalidParameterException|CloudWatchLogs.ResourceNotFoundException|CloudWatchLogs.OperationAbortedException|CloudWatchLogs.ServiceUnavailableException|any>;
    /**
     * Deletes the specified metric filter.
     *
     * @error InvalidParameterException   
     * @error ResourceNotFoundException   
     * @error OperationAbortedException   
     * @error ServiceUnavailableException   
     */
    deleteMetricFilter(params: CloudWatchLogs.DeleteMetricFilterRequest, callback?: (err: CloudWatchLogs.InvalidParameterException|CloudWatchLogs.ResourceNotFoundException|CloudWatchLogs.OperationAbortedException|CloudWatchLogs.ServiceUnavailableException|any, data: any) => void): Request<any,CloudWatchLogs.InvalidParameterException|CloudWatchLogs.ResourceNotFoundException|CloudWatchLogs.OperationAbortedException|CloudWatchLogs.ServiceUnavailableException|any>;
    /**
     * Deletes the specified retention policy.

Log events do not expire if they belong to log groups without a retention
policy.
     *
     * @error InvalidParameterException   
     * @error ResourceNotFoundException   
     * @error OperationAbortedException   
     * @error ServiceUnavailableException   
     */
    deleteRetentionPolicy(params: CloudWatchLogs.DeleteRetentionPolicyRequest, callback?: (err: CloudWatchLogs.InvalidParameterException|CloudWatchLogs.ResourceNotFoundException|CloudWatchLogs.OperationAbortedException|CloudWatchLogs.ServiceUnavailableException|any, data: any) => void): Request<any,CloudWatchLogs.InvalidParameterException|CloudWatchLogs.ResourceNotFoundException|CloudWatchLogs.OperationAbortedException|CloudWatchLogs.ServiceUnavailableException|any>;
    /**
     * Deletes the specified subscription filter.
     *
     * @error InvalidParameterException   
     * @error ResourceNotFoundException   
     * @error OperationAbortedException   
     * @error ServiceUnavailableException   
     */
    deleteSubscriptionFilter(params: CloudWatchLogs.DeleteSubscriptionFilterRequest, callback?: (err: CloudWatchLogs.InvalidParameterException|CloudWatchLogs.ResourceNotFoundException|CloudWatchLogs.OperationAbortedException|CloudWatchLogs.ServiceUnavailableException|any, data: any) => void): Request<any,CloudWatchLogs.InvalidParameterException|CloudWatchLogs.ResourceNotFoundException|CloudWatchLogs.OperationAbortedException|CloudWatchLogs.ServiceUnavailableException|any>;
    /**
     * Lists all your destinations. The results are ASCII-sorted by destination name.
     *
     * @error InvalidParameterException   
     * @error ServiceUnavailableException   
     */
    describeDestinations(params: CloudWatchLogs.DescribeDestinationsRequest, callback?: (err: CloudWatchLogs.InvalidParameterException|CloudWatchLogs.ServiceUnavailableException|any, data: CloudWatchLogs.DescribeDestinationsResponse|any) => void): Request<CloudWatchLogs.DescribeDestinationsResponse|any,CloudWatchLogs.InvalidParameterException|CloudWatchLogs.ServiceUnavailableException|any>;
    /**
     * Lists the specified export tasks. You can list all your export tasks or filter
the results based on task ID or task status.
     *
     * @error InvalidParameterException   
     * @error ServiceUnavailableException   
     */
    describeExportTasks(params: CloudWatchLogs.DescribeExportTasksRequest, callback?: (err: CloudWatchLogs.InvalidParameterException|CloudWatchLogs.ServiceUnavailableException|any, data: CloudWatchLogs.DescribeExportTasksResponse|any) => void): Request<CloudWatchLogs.DescribeExportTasksResponse|any,CloudWatchLogs.InvalidParameterException|CloudWatchLogs.ServiceUnavailableException|any>;
    /**
     * Lists the specified log groups. You can list all your log groups or filter the
results by prefix. The results are ASCII-sorted by log group name.
     *
     * @error InvalidParameterException   
     * @error ServiceUnavailableException   
     */
    describeLogGroups(params: CloudWatchLogs.DescribeLogGroupsRequest, callback?: (err: CloudWatchLogs.InvalidParameterException|CloudWatchLogs.ServiceUnavailableException|any, data: CloudWatchLogs.DescribeLogGroupsResponse|any) => void): Request<CloudWatchLogs.DescribeLogGroupsResponse|any,CloudWatchLogs.InvalidParameterException|CloudWatchLogs.ServiceUnavailableException|any>;
    /**
     * Lists the log streams for the specified log group. You can list all the log
streams or filter the results by prefix. You can also control how the results
are ordered.

This operation has a limit of five transactions per second, after which
transactions are throttled.
     *
     * @error InvalidParameterException   
     * @error ResourceNotFoundException   
     * @error ServiceUnavailableException   
     */
    describeLogStreams(params: CloudWatchLogs.DescribeLogStreamsRequest, callback?: (err: CloudWatchLogs.InvalidParameterException|CloudWatchLogs.ResourceNotFoundException|CloudWatchLogs.ServiceUnavailableException|any, data: CloudWatchLogs.DescribeLogStreamsResponse|any) => void): Request<CloudWatchLogs.DescribeLogStreamsResponse|any,CloudWatchLogs.InvalidParameterException|CloudWatchLogs.ResourceNotFoundException|CloudWatchLogs.ServiceUnavailableException|any>;
    /**
     * Lists the specified metric filters. You can list all the metric filters or
filter the results by log name, prefix, metric name, and metric namespace. The
results are ASCII-sorted by filter name.
     *
     * @error InvalidParameterException   
     * @error ResourceNotFoundException   
     * @error ServiceUnavailableException   
     */
    describeMetricFilters(params: CloudWatchLogs.DescribeMetricFiltersRequest, callback?: (err: CloudWatchLogs.InvalidParameterException|CloudWatchLogs.ResourceNotFoundException|CloudWatchLogs.ServiceUnavailableException|any, data: CloudWatchLogs.DescribeMetricFiltersResponse|any) => void): Request<CloudWatchLogs.DescribeMetricFiltersResponse|any,CloudWatchLogs.InvalidParameterException|CloudWatchLogs.ResourceNotFoundException|CloudWatchLogs.ServiceUnavailableException|any>;
    /**
     * Lists the subscription filters for the specified log group. You can list all the
subscription filters or filter the results by prefix. The results are
ASCII-sorted by filter name.
     *
     * @error InvalidParameterException   
     * @error ResourceNotFoundException   
     * @error ServiceUnavailableException   
     */
    describeSubscriptionFilters(params: CloudWatchLogs.DescribeSubscriptionFiltersRequest, callback?: (err: CloudWatchLogs.InvalidParameterException|CloudWatchLogs.ResourceNotFoundException|CloudWatchLogs.ServiceUnavailableException|any, data: CloudWatchLogs.DescribeSubscriptionFiltersResponse|any) => void): Request<CloudWatchLogs.DescribeSubscriptionFiltersResponse|any,CloudWatchLogs.InvalidParameterException|CloudWatchLogs.ResourceNotFoundException|CloudWatchLogs.ServiceUnavailableException|any>;
    /**
     * Lists log events from the specified log group. You can list all the log events
or filter the results using a filter pattern, a time range, and the name of the
log stream.

By default, this operation returns as many log events as can fit in 1MB (up to
10,000 log events), or all the events found within the time range that you
specify. If the results include a token, then there are more log events
available, and you can get additional results by specifying the token in a
subsequent call.
     *
     * @error InvalidParameterException   
     * @error ResourceNotFoundException   
     * @error ServiceUnavailableException   
     */
    filterLogEvents(params: CloudWatchLogs.FilterLogEventsRequest, callback?: (err: CloudWatchLogs.InvalidParameterException|CloudWatchLogs.ResourceNotFoundException|CloudWatchLogs.ServiceUnavailableException|any, data: CloudWatchLogs.FilterLogEventsResponse|any) => void): Request<CloudWatchLogs.FilterLogEventsResponse|any,CloudWatchLogs.InvalidParameterException|CloudWatchLogs.ResourceNotFoundException|CloudWatchLogs.ServiceUnavailableException|any>;
    /**
     * Lists log events from the specified log stream. You can list all the log events
or filter using a time range.

By default, this operation returns as many log events as can fit in a response
size of 1MB (up to 10,000 log events). If the results include tokens, there are
more log events available. You can get additional log events by specifying one
of the tokens in a subsequent call.
     *
     * @error InvalidParameterException   
     * @error ResourceNotFoundException   
     * @error ServiceUnavailableException   
     */
    getLogEvents(params: CloudWatchLogs.GetLogEventsRequest, callback?: (err: CloudWatchLogs.InvalidParameterException|CloudWatchLogs.ResourceNotFoundException|CloudWatchLogs.ServiceUnavailableException|any, data: CloudWatchLogs.GetLogEventsResponse|any) => void): Request<CloudWatchLogs.GetLogEventsResponse|any,CloudWatchLogs.InvalidParameterException|CloudWatchLogs.ResourceNotFoundException|CloudWatchLogs.ServiceUnavailableException|any>;
    /**
     * Lists the tags for the specified log group.

To add tags, use TagLogGroup . To remove tags, use UntagLogGroup .
     *
     * @error ResourceNotFoundException   
     * @error ServiceUnavailableException   
     */
    listTagsLogGroup(params: CloudWatchLogs.ListTagsLogGroupRequest, callback?: (err: CloudWatchLogs.ResourceNotFoundException|CloudWatchLogs.ServiceUnavailableException|any, data: CloudWatchLogs.ListTagsLogGroupResponse|any) => void): Request<CloudWatchLogs.ListTagsLogGroupResponse|any,CloudWatchLogs.ResourceNotFoundException|CloudWatchLogs.ServiceUnavailableException|any>;
    /**
     * Creates or updates a destination. A destination encapsulates a physical resource
(such as a Kinesis stream) and enables you to subscribe to a real-time stream of
log events of a different account, ingested using PutLogEvents . Currently, the
only supported physical resource is a Amazon Kinesis stream belonging to the
same account as the destination.

A destination controls what is written to its Amazon Kinesis stream through an
access policy. By default, PutDestination does not set any access policy with
the destination, which means a cross-account user cannot call 
PutSubscriptionFilter against this destination. To enable this, the destination
owner must call PutDestinationPolicy after PutDestination .
     *
     * @error InvalidParameterException   
     * @error OperationAbortedException   
     * @error ServiceUnavailableException   
     */
    putDestination(params: CloudWatchLogs.PutDestinationRequest, callback?: (err: CloudWatchLogs.InvalidParameterException|CloudWatchLogs.OperationAbortedException|CloudWatchLogs.ServiceUnavailableException|any, data: CloudWatchLogs.PutDestinationResponse|any) => void): Request<CloudWatchLogs.PutDestinationResponse|any,CloudWatchLogs.InvalidParameterException|CloudWatchLogs.OperationAbortedException|CloudWatchLogs.ServiceUnavailableException|any>;
    /**
     * Creates or updates an access policy associated with an existing destination. An
access policy is an IAM policy document
[http://docs.aws.amazon.com/IAM/latest/UserGuide/policies_overview.html] that is
used to authorize claims to register a subscription filter against a given
destination.
     *
     * @error InvalidParameterException   
     * @error OperationAbortedException   
     * @error ServiceUnavailableException   
     */
    putDestinationPolicy(params: CloudWatchLogs.PutDestinationPolicyRequest, callback?: (err: CloudWatchLogs.InvalidParameterException|CloudWatchLogs.OperationAbortedException|CloudWatchLogs.ServiceUnavailableException|any, data: any) => void): Request<any,CloudWatchLogs.InvalidParameterException|CloudWatchLogs.OperationAbortedException|CloudWatchLogs.ServiceUnavailableException|any>;
    /**
     * Uploads a batch of log events to the specified log stream.

You must include the sequence token obtained from the response of the previous
call. An upload in a newly created log stream does not require a sequence token.
You can also get the sequence token using DescribeLogStreams .

The batch of events must satisfy the following constraints:

 &amp;#42; The maximum batch size is 1,048,576 bytes, and this size is calculated as the
   sum of all event messages in UTF-8, plus 26 bytes for each log event.
   
   
 * None of the log events in the batch can be more than 2 hours in the future.
   
   
 * None of the log events in the batch can be older than 14 days or the
   retention period of the log group.
   
   
 * The log events in the batch must be in chronological ordered by their
   timestamp (the time the event occurred, expressed as the number of
   milliseconds since Jan 1, 1970 00:00:00 UTC).
   
   
 * The maximum number of log events in a batch is 10,000.
   
   
 * A batch of log events in a single request cannot span more than 24 hours.
   Otherwise, the operation fails.
     *
     * @error InvalidParameterException   
     * @error InvalidSequenceTokenException   
     * @error DataAlreadyAcceptedException   
     * @error ResourceNotFoundException   
     * @error ServiceUnavailableException   
     */
    putLogEvents(params: CloudWatchLogs.PutLogEventsRequest, callback?: (err: CloudWatchLogs.InvalidParameterException|CloudWatchLogs.InvalidSequenceTokenException|CloudWatchLogs.DataAlreadyAcceptedException|CloudWatchLogs.ResourceNotFoundException|CloudWatchLogs.ServiceUnavailableException|any, data: CloudWatchLogs.PutLogEventsResponse|any) => void): Request<CloudWatchLogs.PutLogEventsResponse|any,CloudWatchLogs.InvalidParameterException|CloudWatchLogs.InvalidSequenceTokenException|CloudWatchLogs.DataAlreadyAcceptedException|CloudWatchLogs.ResourceNotFoundException|CloudWatchLogs.ServiceUnavailableException|any>;
    /**
     * Creates or updates a metric filter and associates it with the specified log
group. Metric filters allow you to configure rules to extract metric data from
log events ingested through PutLogEvents .

The maximum number of metric filters that can be associated with a log group is
100.
     *
     * @error InvalidParameterException   
     * @error ResourceNotFoundException   
     * @error OperationAbortedException   
     * @error LimitExceededException   
     * @error ServiceUnavailableException   
     */
    putMetricFilter(params: CloudWatchLogs.PutMetricFilterRequest, callback?: (err: CloudWatchLogs.InvalidParameterException|CloudWatchLogs.ResourceNotFoundException|CloudWatchLogs.OperationAbortedException|CloudWatchLogs.LimitExceededException|CloudWatchLogs.ServiceUnavailableException|any, data: any) => void): Request<any,CloudWatchLogs.InvalidParameterException|CloudWatchLogs.ResourceNotFoundException|CloudWatchLogs.OperationAbortedException|CloudWatchLogs.LimitExceededException|CloudWatchLogs.ServiceUnavailableException|any>;
    /**
     * Sets the retention of the specified log group. A retention policy allows you to
configure the number of days you want to retain log events in the specified log
group.
     *
     * @error InvalidParameterException   
     * @error ResourceNotFoundException   
     * @error OperationAbortedException   
     * @error ServiceUnavailableException   
     */
    putRetentionPolicy(params: CloudWatchLogs.PutRetentionPolicyRequest, callback?: (err: CloudWatchLogs.InvalidParameterException|CloudWatchLogs.ResourceNotFoundException|CloudWatchLogs.OperationAbortedException|CloudWatchLogs.ServiceUnavailableException|any, data: any) => void): Request<any,CloudWatchLogs.InvalidParameterException|CloudWatchLogs.ResourceNotFoundException|CloudWatchLogs.OperationAbortedException|CloudWatchLogs.ServiceUnavailableException|any>;
    /**
     * Creates or updates a subscription filter and associates it with the specified
log group. Subscription filters allow you to subscribe to a real-time stream of
log events ingested through PutLogEvents and have them delivered to a specific
destination. Currently, the supported destinations are:

 &amp;#42; An Amazon Kinesis stream belonging to the same account as the subscription
   filter, for same-account delivery.
   
   
 * A logical destination that belongs to a different account, for cross-account
   delivery.
   
   
 * An Amazon Kinesis Firehose stream that belongs to the same account as the
   subscription filter, for same-account delivery.
   
   
 * An AWS Lambda function that belongs to the same account as the subscription
   filter, for same-account delivery.
   
   

There can only be one subscription filter associated with a log group.
     *
     * @error InvalidParameterException   
     * @error ResourceNotFoundException   
     * @error OperationAbortedException   
     * @error LimitExceededException   
     * @error ServiceUnavailableException   
     */
    putSubscriptionFilter(params: CloudWatchLogs.PutSubscriptionFilterRequest, callback?: (err: CloudWatchLogs.InvalidParameterException|CloudWatchLogs.ResourceNotFoundException|CloudWatchLogs.OperationAbortedException|CloudWatchLogs.LimitExceededException|CloudWatchLogs.ServiceUnavailableException|any, data: any) => void): Request<any,CloudWatchLogs.InvalidParameterException|CloudWatchLogs.ResourceNotFoundException|CloudWatchLogs.OperationAbortedException|CloudWatchLogs.LimitExceededException|CloudWatchLogs.ServiceUnavailableException|any>;
    /**
     * Adds or updates the specified tags for the specified log group.

To list the tags for a log group, use ListTagsLogGroup . To remove tags, use 
UntagLogGroup .

For more information about tags, see Tag Log Groups in Amazon CloudWatch Logs
[http://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/log-group-tagging.html] 
in the Amazon CloudWatch Logs User Guide .
     *
     * @error ResourceNotFoundException   
     * @error InvalidParameterException   
     */
    tagLogGroup(params: CloudWatchLogs.TagLogGroupRequest, callback?: (err: CloudWatchLogs.ResourceNotFoundException|CloudWatchLogs.InvalidParameterException|any, data: any) => void): Request<any,CloudWatchLogs.ResourceNotFoundException|CloudWatchLogs.InvalidParameterException|any>;
    /**
     * Tests the filter pattern of a metric filter against a sample of log event
messages. You can use this operation to validate the correctness of a metric
filter pattern.
     *
     * @error InvalidParameterException   
     * @error ServiceUnavailableException   
     */
    testMetricFilter(params: CloudWatchLogs.TestMetricFilterRequest, callback?: (err: CloudWatchLogs.InvalidParameterException|CloudWatchLogs.ServiceUnavailableException|any, data: CloudWatchLogs.TestMetricFilterResponse|any) => void): Request<CloudWatchLogs.TestMetricFilterResponse|any,CloudWatchLogs.InvalidParameterException|CloudWatchLogs.ServiceUnavailableException|any>;
    /**
     * Removes the specified tags from the specified log group.

To list the tags for a log group, use ListTagsLogGroup . To add tags, use 
UntagLogGroup .
     *
     * @error ResourceNotFoundException   
     */
    untagLogGroup(params: CloudWatchLogs.UntagLogGroupRequest, callback?: (err: CloudWatchLogs.ResourceNotFoundException|any, data: any) => void): Request<any,CloudWatchLogs.ResourceNotFoundException|any>;

  }

  export module CloudWatchLogs {
    
    export type AccessPolicy = string;
    
    export type Arn = string;
    
    export type Days = number;
    
    export type DefaultValue = number;
    
    export type Descending = boolean;
    
    export type DescribeLimit = number;
    
    export type DestinationArn = string;
    
    export type DestinationName = string;
    
    export type Destinations = Destination[];
    
    export type Distribution = string;
    
    export type EventId = string;
    
    export type EventMessage = string;
    
    export type EventNumber = number;
    
    export type EventsLimit = number;
    
    export type ExportDestinationBucket = string;
    
    export type ExportDestinationPrefix = string;
    
    export type ExportTaskId = string;
    
    export type ExportTaskName = string;
    
    export type ExportTaskStatusCode = string;
    
    export type ExportTaskStatusMessage = string;
    
    export type ExportTasks = ExportTask[];
    
    export type ExtractedValues = {[key:string]: Value};
    
    export type FilterCount = number;
    
    export type FilterName = string;
    
    export type FilterPattern = string;
    
    export type FilteredLogEvents = FilteredLogEvent[];
    
    export type InputLogEvents = InputLogEvent[];
    
    export type InputLogStreamNames = LogStreamName[];
    
    export type Interleaved = boolean;
    
    export type LogEventIndex = number;
    
    export type LogGroupName = string;
    
    export type LogGroups = LogGroup[];
    
    export type LogStreamName = string;
    
    export type LogStreamSearchedCompletely = boolean;
    
    export type LogStreams = LogStream[];
    
    export type MetricFilterMatches = MetricFilterMatchRecord[];
    
    export type MetricFilters = MetricFilter[];
    
    export type MetricName = string;
    
    export type MetricNamespace = string;
    
    export type MetricTransformations = MetricTransformation[];
    
    export type MetricValue = string;
    
    export type NextToken = string;
    
    export type OrderBy = string;
    
    export type OutputLogEvents = OutputLogEvent[];
    
    export type RoleArn = string;
    
    export type SearchedLogStreams = SearchedLogStream[];
    
    export type SequenceToken = string;
    
    export type StartFromHead = boolean;
    
    export type StoredBytes = number;
    
    export type SubscriptionFilters = SubscriptionFilter[];
    
    export type TagKey = string;
    
    export type TagList = TagKey[];
    
    export type TagValue = string;
    
    export type Tags = {[key:string]: TagValue};
    
    export type TargetArn = string;
    
    export type TestEventMessages = EventMessage[];
    
    export type Timestamp = number;
    
    export type Token = string;
    
    export type Value = string;

    export interface CancelExportTaskRequest {
        /** The ID of the export task. **/
        taskId: ExportTaskId;
    }
    export interface CreateExportTaskRequest {
        /** The name of the export task. **/
        taskName?: ExportTaskName;
        /** The name of the log group. **/
        logGroupName: LogGroupName;
        /** Export only log streams that match the provided prefix. If you don&#x27;t specify a
value, no prefix filter is applied. **/
        logStreamNamePrefix?: LogStreamName;
        /** The start time of the range for the request, expressed as the number of
milliseconds since Jan 1, 1970 00:00:00 UTC. Events with a timestamp earlier
than this time are not exported. **/
        from: Timestamp;
        /** The end time of the range for the request, expressed as the number of
milliseconds since Jan 1, 1970 00:00:00 UTC. Events with a timestamp later than
this time are not exported. **/
        to: Timestamp;
        /** The name of S3 bucket for the exported log data. The bucket must be in the same
AWS region. **/
        destination: ExportDestinationBucket;
        /** The prefix used as the start of the key for every object exported. If you don&#x27;t
specify a value, the default is exportedlogs . **/
        destinationPrefix?: ExportDestinationPrefix;
    }
    export interface CreateExportTaskResponse {
        /** The ID of the export task. **/
        taskId?: ExportTaskId;
    }
    export interface CreateLogGroupRequest {
        /** The name of the log group. **/
        logGroupName: LogGroupName;
        /** The key-value pairs to use for the tags. **/
        tags?: Tags;
    }
    export interface CreateLogStreamRequest {
        /** The name of the log group. **/
        logGroupName: LogGroupName;
        /** The name of the log stream. **/
        logStreamName: LogStreamName;
    }
    export interface DataAlreadyAcceptedException {
        expectedSequenceToken?: SequenceToken;
    }
    export interface DeleteDestinationRequest {
        /** The name of the destination. **/
        destinationName: DestinationName;
    }
    export interface DeleteLogGroupRequest {
        /** The name of the log group. **/
        logGroupName: LogGroupName;
    }
    export interface DeleteLogStreamRequest {
        /** The name of the log group. **/
        logGroupName: LogGroupName;
        /** The name of the log stream. **/
        logStreamName: LogStreamName;
    }
    export interface DeleteMetricFilterRequest {
        /** The name of the log group. **/
        logGroupName: LogGroupName;
        /** The name of the metric filter. **/
        filterName: FilterName;
    }
    export interface DeleteRetentionPolicyRequest {
        /** The name of the log group. **/
        logGroupName: LogGroupName;
    }
    export interface DeleteSubscriptionFilterRequest {
        /** The name of the log group. **/
        logGroupName: LogGroupName;
        /** The name of the subscription filter. **/
        filterName: FilterName;
    }
    export interface DescribeDestinationsRequest {
        /** The prefix to match. If you don&#x27;t specify a value, no prefix filter is applied. **/
        DestinationNamePrefix?: DestinationName;
        /** The token for the next set of items to return. (You received this token from a
previous call.) **/
        nextToken?: NextToken;
        /** The maximum number of items returned. If you don&#x27;t specify a value, the default
is up to 50 items. **/
        limit?: DescribeLimit;
    }
    export interface DescribeDestinationsResponse {
        /** The destinations. **/
        destinations?: Destinations;
        nextToken?: NextToken;
    }
    export interface DescribeExportTasksRequest {
        /** The ID of the export task. Specifying a task ID filters the results to zero or
one export tasks. **/
        taskId?: ExportTaskId;
        /** The status code of the export task. Specifying a status code filters the results
to zero or more export tasks. **/
        statusCode?: ExportTaskStatusCode;
        /** The token for the next set of items to return. (You received this token from a
previous call.) **/
        nextToken?: NextToken;
        /** The maximum number of items returned. If you don&#x27;t specify a value, the default
is up to 50 items. **/
        limit?: DescribeLimit;
    }
    export interface DescribeExportTasksResponse {
        /** The export tasks. **/
        exportTasks?: ExportTasks;
        nextToken?: NextToken;
    }
    export interface DescribeLogGroupsRequest {
        /** The prefix to match. **/
        logGroupNamePrefix?: LogGroupName;
        /** The token for the next set of items to return. (You received this token from a
previous call.) **/
        nextToken?: NextToken;
        /** The maximum number of items returned. If you don&#x27;t specify a value, the default
is up to 50 items. **/
        limit?: DescribeLimit;
    }
    export interface DescribeLogGroupsResponse {
        /** The log groups. **/
        logGroups?: LogGroups;
        nextToken?: NextToken;
    }
    export interface DescribeLogStreamsRequest {
        /** The name of the log group. **/
        logGroupName: LogGroupName;
        /** The prefix to match.

You cannot specify this parameter if orderBy is LastEventTime . **/
        logStreamNamePrefix?: LogStreamName;
        /** If the value is LogStreamName , the results are ordered by log stream name. If
the value is LastEventTime , the results are ordered by the event time. The
default value is LogStreamName .

If you order the results by event time, you cannot specify the 
logStreamNamePrefix parameter. **/
        orderBy?: OrderBy;
        /** If the value is true, results are returned in descending order. If the value is
to false, results are returned in ascending order. The default value is false. **/
        descending?: Descending;
        /** The token for the next set of items to return. (You received this token from a
previous call.) **/
        nextToken?: NextToken;
        /** The maximum number of items returned. If you don&#x27;t specify a value, the default
is up to 50 items. **/
        limit?: DescribeLimit;
    }
    export interface DescribeLogStreamsResponse {
        /** The log streams. **/
        logStreams?: LogStreams;
        nextToken?: NextToken;
    }
    export interface DescribeMetricFiltersRequest {
        /** The name of the log group. **/
        logGroupName?: LogGroupName;
        /** The prefix to match. **/
        filterNamePrefix?: FilterName;
        /** The token for the next set of items to return. (You received this token from a
previous call.) **/
        nextToken?: NextToken;
        /** The maximum number of items returned. If you don&#x27;t specify a value, the default
is up to 50 items. **/
        limit?: DescribeLimit;
        /** The name of the CloudWatch metric. **/
        metricName?: MetricName;
        /** The namespace of the CloudWatch metric. **/
        metricNamespace?: MetricNamespace;
    }
    export interface DescribeMetricFiltersResponse {
        /** The metric filters. **/
        metricFilters?: MetricFilters;
        nextToken?: NextToken;
    }
    export interface DescribeSubscriptionFiltersRequest {
        /** The name of the log group. **/
        logGroupName: LogGroupName;
        /** The prefix to match. If you don&#x27;t specify a value, no prefix filter is applied. **/
        filterNamePrefix?: FilterName;
        /** The token for the next set of items to return. (You received this token from a
previous call.) **/
        nextToken?: NextToken;
        /** The maximum number of items returned. If you don&#x27;t specify a value, the default
is up to 50 items. **/
        limit?: DescribeLimit;
    }
    export interface DescribeSubscriptionFiltersResponse {
        /** The subscription filters. **/
        subscriptionFilters?: SubscriptionFilters;
        nextToken?: NextToken;
    }
    export interface Destination {
        /** The name of the destination. **/
        destinationName?: DestinationName;
        /** The Amazon Resource Name (ARN) of the physical target where the log events will
be delivered (for example, a Kinesis stream). **/
        targetArn?: TargetArn;
        /** A role for impersonation, used when delivering log events to the target. **/
        roleArn?: RoleArn;
        /** An IAM policy document that governs which AWS accounts can create subscription
filters against this destination. **/
        accessPolicy?: AccessPolicy;
        /** The ARN of this destination. **/
        arn?: Arn;
        /** The creation time of the destination. **/
        creationTime?: Timestamp;
    }
    export interface ExportTask {
        /** The ID of the export task. **/
        taskId?: ExportTaskId;
        /** The name of the export task. **/
        taskName?: ExportTaskName;
        /** The name of the log group from which logs data was exported. **/
        logGroupName?: LogGroupName;
        /** The start time, expressed as the number of milliseconds since Jan 1, 1970
00:00:00 UTC. Events with a timestamp prior to this time are not exported. **/
        from?: Timestamp;
        /** The end time, expressed as the number of milliseconds since Jan 1, 1970 00:00:00
UTC. Events with a timestamp later than this time are not exported. **/
        to?: Timestamp;
        /** The name of Amazon S3 bucket to which the log data was exported. **/
        destination?: ExportDestinationBucket;
        /** The prefix that was used as the start of Amazon S3 key for every object
exported. **/
        destinationPrefix?: ExportDestinationPrefix;
        /** The status of the export task. **/
        status?: ExportTaskStatus;
        /** Execution info about the export task. **/
        executionInfo?: ExportTaskExecutionInfo;
    }
    export interface ExportTaskExecutionInfo {
        /** The creation time of the export task. **/
        creationTime?: Timestamp;
        /** The completion time of the export task. **/
        completionTime?: Timestamp;
    }
    export interface ExportTaskStatus {
        /** The status code of the export task. **/
        code?: ExportTaskStatusCode;
        /** The status message related to the status code. **/
        message?: ExportTaskStatusMessage;
    }
    export interface FilterLogEventsRequest {
        /** The name of the log group. **/
        logGroupName: LogGroupName;
        /** Optional list of log stream names. **/
        logStreamNames?: InputLogStreamNames;
        /** The start of the time range, expressed as the number of milliseconds since Jan
1, 1970 00:00:00 UTC. Events with a timestamp prior to this time are not
returned. **/
        startTime?: Timestamp;
        /** The end of the time range, expressed as the number of milliseconds since Jan 1,
1970 00:00:00 UTC. Events with a timestamp later than this time are not
returned. **/
        endTime?: Timestamp;
        /** The filter pattern to use. If not provided, all the events are matched. **/
        filterPattern?: FilterPattern;
        /** The token for the next set of events to return. (You received this token from a
previous call.) **/
        nextToken?: NextToken;
        /** The maximum number of events to return. The default is 10,000 events. **/
        limit?: EventsLimit;
        /** If the value is true, the operation makes a best effort to provide responses
that contain events from multiple log streams within the log group interleaved
in a single response. If the value is false all the matched log events in the
first log stream are searched first, then those in the next log stream, and so
on. The default is false. **/
        interleaved?: Interleaved;
    }
    export interface FilterLogEventsResponse {
        /** The matched events. **/
        events?: FilteredLogEvents;
        /** Indicates which log streams have been searched and whether each has been
searched completely. **/
        searchedLogStreams?: SearchedLogStreams;
        /** The token to use when requesting the next set of items. The token expires after
24 hours. **/
        nextToken?: NextToken;
    }
    export interface FilteredLogEvent {
        /** The name of the log stream this event belongs to. **/
        logStreamName?: LogStreamName;
        /** The time the event occurred, expressed as the number of milliseconds since Jan
1, 1970 00:00:00 UTC. **/
        timestamp?: Timestamp;
        /** The data contained in the log event. **/
        message?: EventMessage;
        /** The time the event was ingested. **/
        ingestionTime?: Timestamp;
        /** The ID of the event. **/
        eventId?: EventId;
    }
    export interface GetLogEventsRequest {
        /** The name of the log group. **/
        logGroupName: LogGroupName;
        /** The name of the log stream. **/
        logStreamName: LogStreamName;
        /** The start of the time range, expressed as the number of milliseconds since Jan
1, 1970 00:00:00 UTC. Events with a timestamp earlier than this time are not
included. **/
        startTime?: Timestamp;
        /** The end of the time range, expressed as the number of milliseconds since Jan 1,
1970 00:00:00 UTC. Events with a timestamp later than this time are not
included. **/
        endTime?: Timestamp;
        /** The token for the next set of items to return. (You received this token from a
previous call.) **/
        nextToken?: NextToken;
        /** The maximum number of log events returned. If you don&#x27;t specify a value, the
maximum is as many log events as can fit in a response size of 1MB, up to 10,000
log events. **/
        limit?: EventsLimit;
        /** If the value is true, the earliest log events are returned first. If the value
is false, the latest log events are returned first. The default value is false. **/
        startFromHead?: StartFromHead;
    }
    export interface GetLogEventsResponse {
        /** The events. **/
        events?: OutputLogEvents;
        /** The token for the next set of items in the forward direction. The token expires
after 24 hours. **/
        nextForwardToken?: NextToken;
        /** The token for the next set of items in the backward direction. The token expires
after 24 hours. **/
        nextBackwardToken?: NextToken;
    }
    export interface InputLogEvent {
        /** The time the event occurred, expressed as the number of milliseconds since Jan
1, 1970 00:00:00 UTC. **/
        timestamp: Timestamp;
        /** The raw event message. **/
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
    export interface ListTagsLogGroupRequest {
        /** The name of the log group. **/
        logGroupName: LogGroupName;
    }
    export interface ListTagsLogGroupResponse {
        /** The tags. **/
        tags?: Tags;
    }
    export interface LogGroup {
        /** The name of the log group. **/
        logGroupName?: LogGroupName;
        /** The creation time of the log group. **/
        creationTime?: Timestamp;
        retentionInDays?: Days;
        /** The number of metric filters. **/
        metricFilterCount?: FilterCount;
        /** The Amazon Resource Name (ARN) of the log group. **/
        arn?: Arn;
        /** The number of bytes stored. **/
        storedBytes?: StoredBytes;
    }
    export interface LogStream {
        /** The name of the log stream. **/
        logStreamName?: LogStreamName;
        /** The creation time of the stream. **/
        creationTime?: Timestamp;
        /** The time of the first event, expressed as the number of milliseconds since Jan
1, 1970 00:00:00 UTC. **/
        firstEventTimestamp?: Timestamp;
        /** The time of the last event, expressed as the number of milliseconds since Jan 1,
1970 00:00:00 UTC. **/
        lastEventTimestamp?: Timestamp;
        /** The ingestion time. **/
        lastIngestionTime?: Timestamp;
        /** The sequence token. **/
        uploadSequenceToken?: SequenceToken;
        /** The Amazon Resource Name (ARN) of the log stream. **/
        arn?: Arn;
        /** The number of bytes stored. **/
        storedBytes?: StoredBytes;
    }
    export interface MetricFilter {
        /** The name of the metric filter. **/
        filterName?: FilterName;
        filterPattern?: FilterPattern;
        /** The metric transformations. **/
        metricTransformations?: MetricTransformations;
        /** The creation time of the metric filter. **/
        creationTime?: Timestamp;
        /** The name of the log group. **/
        logGroupName?: LogGroupName;
    }
    export interface MetricFilterMatchRecord {
        /** The event number. **/
        eventNumber?: EventNumber;
        /** The raw event data. **/
        eventMessage?: EventMessage;
        /** The values extracted from the event data by the filter. **/
        extractedValues?: ExtractedValues;
    }
    export interface MetricTransformation {
        /** The name of the CloudWatch metric. **/
        metricName: MetricName;
        /** The namespace of the CloudWatch metric. **/
        metricNamespace: MetricNamespace;
        /** The value to publish to the CloudWatch metric when a filter pattern matches a
log event. **/
        metricValue: MetricValue;
        /** (Optional) The value to emit when a filter pattern does not match a log event.
This value can be null. **/
        defaultValue?: DefaultValue;
    }
    export interface OperationAbortedException {
    }
    export interface OutputLogEvent {
        /** The time the event occurred, expressed as the number of milliseconds since Jan
1, 1970 00:00:00 UTC. **/
        timestamp?: Timestamp;
        /** The data contained in the log event. **/
        message?: EventMessage;
        /** The time the event was ingested. **/
        ingestionTime?: Timestamp;
    }
    export interface PutDestinationPolicyRequest {
        /** A name for an existing destination. **/
        destinationName: DestinationName;
        /** An IAM policy document that authorizes cross-account users to deliver their log
events to the associated destination. **/
        accessPolicy: AccessPolicy;
    }
    export interface PutDestinationRequest {
        /** A name for the destination. **/
        destinationName: DestinationName;
        /** The ARN of an Amazon Kinesis stream to deliver matching log events to. **/
        targetArn: TargetArn;
        /** The ARN of an IAM role that grants CloudWatch Logs permissions to call Amazon
Kinesis PutRecord on the destination stream. **/
        roleArn: RoleArn;
    }
    export interface PutDestinationResponse {
        /** The destination. **/
        destination?: Destination;
    }
    export interface PutLogEventsRequest {
        /** The name of the log group. **/
        logGroupName: LogGroupName;
        /** The name of the log stream. **/
        logStreamName: LogStreamName;
        /** The log events. **/
        logEvents: InputLogEvents;
        /** The sequence token. **/
        sequenceToken?: SequenceToken;
    }
    export interface PutLogEventsResponse {
        /** The next sequence token. **/
        nextSequenceToken?: SequenceToken;
        /** The rejected events. **/
        rejectedLogEventsInfo?: RejectedLogEventsInfo;
    }
    export interface PutMetricFilterRequest {
        /** The name of the log group. **/
        logGroupName: LogGroupName;
        /** A name for the metric filter. **/
        filterName: FilterName;
        /** A filter pattern for extracting metric data out of ingested log events. **/
        filterPattern: FilterPattern;
        /** A collection of information needed to define how metric data gets emitted. **/
        metricTransformations: MetricTransformations;
    }
    export interface PutRetentionPolicyRequest {
        /** The name of the log group. **/
        logGroupName: LogGroupName;
        retentionInDays: Days;
    }
    export interface PutSubscriptionFilterRequest {
        /** The name of the log group. **/
        logGroupName: LogGroupName;
        /** A name for the subscription filter. **/
        filterName: FilterName;
        /** A filter pattern for subscribing to a filtered stream of log events. **/
        filterPattern: FilterPattern;
        /** The ARN of the destination to deliver matching log events to. Currently, the
supported destinations are:

 &amp;#42; An Amazon Kinesis stream belonging to the same account as the subscription
   filter, for same-account delivery.
   
   
 * A logical destination (specified using an ARN) belonging to a different
   account, for cross-account delivery.
   
   
 * An Amazon Kinesis Firehose stream belonging to the same account as the
   subscription filter, for same-account delivery.
   
   
 * An AWS Lambda function belonging to the same account as the subscription
   filter, for same-account delivery. **/
        destinationArn: DestinationArn;
        /** The ARN of an IAM role that grants CloudWatch Logs permissions to deliver
ingested log events to the destination stream. You don&#x27;t need to provide the ARN
when you are working with a logical destination for cross-account delivery. **/
        roleArn?: RoleArn;
        /** The method used to distribute log data to the destination, when the destination
is an Amazon Kinesis stream. By default, log data is grouped by log stream. For
a more even distribution, you can group log data randomly. **/
        distribution?: Distribution;
    }
    export interface RejectedLogEventsInfo {
        /** The log events that are too new. **/
        tooNewLogEventStartIndex?: LogEventIndex;
        /** The log events that are too old. **/
        tooOldLogEventEndIndex?: LogEventIndex;
        /** The expired log events. **/
        expiredLogEventEndIndex?: LogEventIndex;
    }
    export interface ResourceAlreadyExistsException {
    }
    export interface ResourceNotFoundException {
    }
    export interface SearchedLogStream {
        /** The name of the log stream. **/
        logStreamName?: LogStreamName;
        /** Indicates whether all the events in this log stream were searched. **/
        searchedCompletely?: LogStreamSearchedCompletely;
    }
    export interface ServiceUnavailableException {
    }
    export interface SubscriptionFilter {
        /** The name of the subscription filter. **/
        filterName?: FilterName;
        /** The name of the log group. **/
        logGroupName?: LogGroupName;
        filterPattern?: FilterPattern;
        /** The Amazon Resource Name (ARN) of the destination. **/
        destinationArn?: DestinationArn;
        /**  **/
        roleArn?: RoleArn;
        /** The method used to distribute log data to the destination, when the destination
is an Amazon Kinesis stream. **/
        distribution?: Distribution;
        /** The creation time of the subscription filter. **/
        creationTime?: Timestamp;
    }
    export interface TagLogGroupRequest {
        /** The name of the log group. **/
        logGroupName: LogGroupName;
        /** The key-value pairs to use for the tags. **/
        tags: Tags;
    }
    export interface TestMetricFilterRequest {
        filterPattern: FilterPattern;
        /** The log event messages to test. **/
        logEventMessages: TestEventMessages;
    }
    export interface TestMetricFilterResponse {
        /** The matched events. **/
        matches?: MetricFilterMatches;
    }
    export interface UntagLogGroupRequest {
        /** The name of the log group. **/
        logGroupName: LogGroupName;
        /** The tag keys. The corresponding tags are removed from the log group. **/
        tags: TagList;
    }
  }
}
