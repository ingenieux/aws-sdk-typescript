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
 from Amazon Elastic Compute Cloud (Amazon EC2) instances, Amazon CloudTrail, or
 other sources. You can then retrieve the associated log data from CloudWatch
 Logs using the Amazon CloudWatch console, the CloudWatch Logs commands in the
 AWS CLI, the CloudWatch Logs API, or the CloudWatch Logs SDK.
 
 You can use CloudWatch Logs to:
 
  &amp;#42;   Monitor Logs from Amazon EC2 Instances in Real-time: You can use CloudWatch
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
    
    
  *   Monitor Amazon CloudTrail Logged Events: You can create alarms in Amazon
    CloudWatch and receive notifications of particular API activity as captured
    by CloudTrail and use the notification to perform troubleshooting.
    
    
  *   Archive Log Data: You can use CloudWatch Logs to store your log data in
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
     * Cancels an export task if it is in PENDING or RUNNING state.
     *
     * @error InvalidParameterException   
     * @error ResourceNotFoundException   
     * @error InvalidOperationException   
     * @error ServiceUnavailableException   
     */
    cancelExportTask(params: CloudWatchLogs.CancelExportTaskRequest, callback?: (err: CloudWatchLogs.InvalidParameterException | CloudWatchLogs.ResourceNotFoundException | CloudWatchLogs.InvalidOperationException | CloudWatchLogs.ServiceUnavailableException | any, data: any) => void): Request<any, CloudWatchLogs.InvalidParameterException | CloudWatchLogs.ResourceNotFoundException | CloudWatchLogs.InvalidOperationException | CloudWatchLogs.ServiceUnavailableException | any>;
    /**
     * Creates an ExportTask which allows you to efficiently export data from a Log
Group to your Amazon S3 bucket.

This is an asynchronous call. If all the required information is provided, this
API will initiate an export task and respond with the task Id. Once started, 
DescribeExportTasks can be used to get the status of an export task. You can
only have one active (RUNNING or PENDING) export task at a time, per account.

You can export logs from multiple log groups or multiple time ranges to the same
Amazon S3 bucket. To separate out log data for each export task, you can specify
a prefix that will be used as the Amazon S3 key prefix for all exported objects.
     *
     * @error InvalidParameterException   
     * @error LimitExceededException   
     * @error OperationAbortedException   
     * @error ServiceUnavailableException   
     * @error ResourceNotFoundException   
     * @error ResourceAlreadyExistsException   
     */
    createExportTask(params: CloudWatchLogs.CreateExportTaskRequest, callback?: (err: CloudWatchLogs.InvalidParameterException | CloudWatchLogs.LimitExceededException | CloudWatchLogs.OperationAbortedException | CloudWatchLogs.ServiceUnavailableException | CloudWatchLogs.ResourceNotFoundException | CloudWatchLogs.ResourceAlreadyExistsException | any, data: CloudWatchLogs.CreateExportTaskResponse | any) => void): Request<CloudWatchLogs.CreateExportTaskResponse | any, CloudWatchLogs.InvalidParameterException | CloudWatchLogs.LimitExceededException | CloudWatchLogs.OperationAbortedException | CloudWatchLogs.ServiceUnavailableException | CloudWatchLogs.ResourceNotFoundException | CloudWatchLogs.ResourceAlreadyExistsException | any>;
    /**
     * Creates a new log group with the specified name. The name of the log group must
be unique within a region for an AWS account. You can create up to 500 log
groups per account.

You must use the following guidelines when naming a log group:

 &amp;#42;  Log group names can be between 1 and 512 characters long.
   
   
 *  Allowed characters are a-z, A-Z, 0-9, &#x27;_&#x27; (underscore), &#x27;-&#x27; (hyphen), &#x27;/&#x27;
   (forward slash), and &#x27;.&#x27; (period).
     *
     * @error InvalidParameterException   
     * @error ResourceAlreadyExistsException   
     * @error LimitExceededException   
     * @error OperationAbortedException   
     * @error ServiceUnavailableException   
     */
    createLogGroup(params: CloudWatchLogs.CreateLogGroupRequest, callback?: (err: CloudWatchLogs.InvalidParameterException | CloudWatchLogs.ResourceAlreadyExistsException | CloudWatchLogs.LimitExceededException | CloudWatchLogs.OperationAbortedException | CloudWatchLogs.ServiceUnavailableException | any, data: any) => void): Request<any, CloudWatchLogs.InvalidParameterException | CloudWatchLogs.ResourceAlreadyExistsException | CloudWatchLogs.LimitExceededException | CloudWatchLogs.OperationAbortedException | CloudWatchLogs.ServiceUnavailableException | any>;
    /**
     * Creates a new log stream in the specified log group. The name of the log stream
must be unique within the log group. There is no limit on the number of log
streams that can exist in a log group.

You must use the following guidelines when naming a log stream:

 &amp;#42;  Log stream names can be between 1 and 512 characters long.
   
   
 *  The &#x27;:&#x27; colon character is not allowed.
     *
     * @error InvalidParameterException   
     * @error ResourceAlreadyExistsException   
     * @error ResourceNotFoundException   
     * @error ServiceUnavailableException   
     */
    createLogStream(params: CloudWatchLogs.CreateLogStreamRequest, callback?: (err: CloudWatchLogs.InvalidParameterException | CloudWatchLogs.ResourceAlreadyExistsException | CloudWatchLogs.ResourceNotFoundException | CloudWatchLogs.ServiceUnavailableException | any, data: any) => void): Request<any, CloudWatchLogs.InvalidParameterException | CloudWatchLogs.ResourceAlreadyExistsException | CloudWatchLogs.ResourceNotFoundException | CloudWatchLogs.ServiceUnavailableException | any>;
    /**
     * Deletes the destination with the specified name and eventually disables all the
subscription filters that publish to it. This will not delete the physical
resource encapsulated by the destination.
     *
     * @error InvalidParameterException   
     * @error ResourceNotFoundException   
     * @error OperationAbortedException   
     * @error ServiceUnavailableException   
     */
    deleteDestination(params: CloudWatchLogs.DeleteDestinationRequest, callback?: (err: CloudWatchLogs.InvalidParameterException | CloudWatchLogs.ResourceNotFoundException | CloudWatchLogs.OperationAbortedException | CloudWatchLogs.ServiceUnavailableException | any, data: any) => void): Request<any, CloudWatchLogs.InvalidParameterException | CloudWatchLogs.ResourceNotFoundException | CloudWatchLogs.OperationAbortedException | CloudWatchLogs.ServiceUnavailableException | any>;
    /**
     * Deletes the log group with the specified name and permanently deletes all the
archived log events associated with it.
     *
     * @error InvalidParameterException   
     * @error ResourceNotFoundException   
     * @error OperationAbortedException   
     * @error ServiceUnavailableException   
     */
    deleteLogGroup(params: CloudWatchLogs.DeleteLogGroupRequest, callback?: (err: CloudWatchLogs.InvalidParameterException | CloudWatchLogs.ResourceNotFoundException | CloudWatchLogs.OperationAbortedException | CloudWatchLogs.ServiceUnavailableException | any, data: any) => void): Request<any, CloudWatchLogs.InvalidParameterException | CloudWatchLogs.ResourceNotFoundException | CloudWatchLogs.OperationAbortedException | CloudWatchLogs.ServiceUnavailableException | any>;
    /**
     * Deletes a log stream and permanently deletes all the archived log events
associated with it.
     *
     * @error InvalidParameterException   
     * @error ResourceNotFoundException   
     * @error OperationAbortedException   
     * @error ServiceUnavailableException   
     */
    deleteLogStream(params: CloudWatchLogs.DeleteLogStreamRequest, callback?: (err: CloudWatchLogs.InvalidParameterException | CloudWatchLogs.ResourceNotFoundException | CloudWatchLogs.OperationAbortedException | CloudWatchLogs.ServiceUnavailableException | any, data: any) => void): Request<any, CloudWatchLogs.InvalidParameterException | CloudWatchLogs.ResourceNotFoundException | CloudWatchLogs.OperationAbortedException | CloudWatchLogs.ServiceUnavailableException | any>;
    /**
     * Deletes a metric filter associated with the specified log group.
     *
     * @error InvalidParameterException   
     * @error ResourceNotFoundException   
     * @error OperationAbortedException   
     * @error ServiceUnavailableException   
     */
    deleteMetricFilter(params: CloudWatchLogs.DeleteMetricFilterRequest, callback?: (err: CloudWatchLogs.InvalidParameterException | CloudWatchLogs.ResourceNotFoundException | CloudWatchLogs.OperationAbortedException | CloudWatchLogs.ServiceUnavailableException | any, data: any) => void): Request<any, CloudWatchLogs.InvalidParameterException | CloudWatchLogs.ResourceNotFoundException | CloudWatchLogs.OperationAbortedException | CloudWatchLogs.ServiceUnavailableException | any>;
    /**
     * Deletes the retention policy of the specified log group. Log events would not
expire if they belong to log groups without a retention policy.
     *
     * @error InvalidParameterException   
     * @error ResourceNotFoundException   
     * @error OperationAbortedException   
     * @error ServiceUnavailableException   
     */
    deleteRetentionPolicy(params: CloudWatchLogs.DeleteRetentionPolicyRequest, callback?: (err: CloudWatchLogs.InvalidParameterException | CloudWatchLogs.ResourceNotFoundException | CloudWatchLogs.OperationAbortedException | CloudWatchLogs.ServiceUnavailableException | any, data: any) => void): Request<any, CloudWatchLogs.InvalidParameterException | CloudWatchLogs.ResourceNotFoundException | CloudWatchLogs.OperationAbortedException | CloudWatchLogs.ServiceUnavailableException | any>;
    /**
     * Deletes a subscription filter associated with the specified log group.
     *
     * @error InvalidParameterException   
     * @error ResourceNotFoundException   
     * @error OperationAbortedException   
     * @error ServiceUnavailableException   
     */
    deleteSubscriptionFilter(params: CloudWatchLogs.DeleteSubscriptionFilterRequest, callback?: (err: CloudWatchLogs.InvalidParameterException | CloudWatchLogs.ResourceNotFoundException | CloudWatchLogs.OperationAbortedException | CloudWatchLogs.ServiceUnavailableException | any, data: any) => void): Request<any, CloudWatchLogs.InvalidParameterException | CloudWatchLogs.ResourceNotFoundException | CloudWatchLogs.OperationAbortedException | CloudWatchLogs.ServiceUnavailableException | any>;
    /**
     * Returns all the destinations that are associated with the AWS account making the
request. The list returned in the response is ASCII-sorted by destination name.

By default, this operation returns up to 50 destinations. If there are more
destinations to list, the response would contain a nextToken value in the
response body. You can also limit the number of destinations returned in the
response by specifying the limit parameter in the request.
     *
     * @error InvalidParameterException   
     * @error ServiceUnavailableException   
     */
    describeDestinations(params: CloudWatchLogs.DescribeDestinationsRequest, callback?: (err: CloudWatchLogs.InvalidParameterException | CloudWatchLogs.ServiceUnavailableException | any, data: CloudWatchLogs.DescribeDestinationsResponse | any) => void): Request<CloudWatchLogs.DescribeDestinationsResponse | any, CloudWatchLogs.InvalidParameterException | CloudWatchLogs.ServiceUnavailableException | any>;
    /**
     * Returns all the export tasks that are associated with the AWS account making the
request. The export tasks can be filtered based on TaskId or TaskStatus.

By default, this operation returns up to 50 export tasks that satisfy the
specified filters. If there are more export tasks to list, the response would
contain a nextToken value in the response body. You can also limit the number of
export tasks returned in the response by specifying the limit parameter in the
request.
     *
     * @error InvalidParameterException   
     * @error ServiceUnavailableException   
     */
    describeExportTasks(params: CloudWatchLogs.DescribeExportTasksRequest, callback?: (err: CloudWatchLogs.InvalidParameterException | CloudWatchLogs.ServiceUnavailableException | any, data: CloudWatchLogs.DescribeExportTasksResponse | any) => void): Request<CloudWatchLogs.DescribeExportTasksResponse | any, CloudWatchLogs.InvalidParameterException | CloudWatchLogs.ServiceUnavailableException | any>;
    /**
     * Returns all the log groups that are associated with the AWS account making the
request. The list returned in the response is ASCII-sorted by log group name.

By default, this operation returns up to 50 log groups. If there are more log
groups to list, the response would contain a nextToken value in the response
body. You can also limit the number of log groups returned in the response by
specifying the limit parameter in the request.
     *
     * @error InvalidParameterException   
     * @error ServiceUnavailableException   
     */
    describeLogGroups(params: CloudWatchLogs.DescribeLogGroupsRequest, callback?: (err: CloudWatchLogs.InvalidParameterException | CloudWatchLogs.ServiceUnavailableException | any, data: CloudWatchLogs.DescribeLogGroupsResponse | any) => void): Request<CloudWatchLogs.DescribeLogGroupsResponse | any, CloudWatchLogs.InvalidParameterException | CloudWatchLogs.ServiceUnavailableException | any>;
    /**
     * Returns all the log streams that are associated with the specified log group.
The list returned in the response is ASCII-sorted by log stream name.

By default, this operation returns up to 50 log streams. If there are more log
streams to list, the response would contain a nextToken value in the response
body. You can also limit the number of log streams returned in the response by
specifying the limit parameter in the request. This operation has a limit of
five transactions per second, after which transactions are throttled.
     *
     * @error InvalidParameterException   
     * @error ResourceNotFoundException   
     * @error ServiceUnavailableException   
     */
    describeLogStreams(params: CloudWatchLogs.DescribeLogStreamsRequest, callback?: (err: CloudWatchLogs.InvalidParameterException | CloudWatchLogs.ResourceNotFoundException | CloudWatchLogs.ServiceUnavailableException | any, data: CloudWatchLogs.DescribeLogStreamsResponse | any) => void): Request<CloudWatchLogs.DescribeLogStreamsResponse | any, CloudWatchLogs.InvalidParameterException | CloudWatchLogs.ResourceNotFoundException | CloudWatchLogs.ServiceUnavailableException | any>;
    /**
     * Returns all the metrics filters associated with the specified log group. The
list returned in the response is ASCII-sorted by filter name.

By default, this operation returns up to 50 metric filters. If there are more
metric filters to list, the response would contain a nextToken value in the
response body. You can also limit the number of metric filters returned in the
response by specifying the limit parameter in the request.
     *
     * @error InvalidParameterException   
     * @error ResourceNotFoundException   
     * @error ServiceUnavailableException   
     */
    describeMetricFilters(params: CloudWatchLogs.DescribeMetricFiltersRequest, callback?: (err: CloudWatchLogs.InvalidParameterException | CloudWatchLogs.ResourceNotFoundException | CloudWatchLogs.ServiceUnavailableException | any, data: CloudWatchLogs.DescribeMetricFiltersResponse | any) => void): Request<CloudWatchLogs.DescribeMetricFiltersResponse | any, CloudWatchLogs.InvalidParameterException | CloudWatchLogs.ResourceNotFoundException | CloudWatchLogs.ServiceUnavailableException | any>;
    /**
     * Returns all the subscription filters associated with the specified log group.
The list returned in the response is ASCII-sorted by filter name.

By default, this operation returns up to 50 subscription filters. If there are
more subscription filters to list, the response would contain a nextToken value
in the response body. You can also limit the number of subscription filters
returned in the response by specifying the limit parameter in the request.
     *
     * @error InvalidParameterException   
     * @error ResourceNotFoundException   
     * @error ServiceUnavailableException   
     */
    describeSubscriptionFilters(params: CloudWatchLogs.DescribeSubscriptionFiltersRequest, callback?: (err: CloudWatchLogs.InvalidParameterException | CloudWatchLogs.ResourceNotFoundException | CloudWatchLogs.ServiceUnavailableException | any, data: CloudWatchLogs.DescribeSubscriptionFiltersResponse | any) => void): Request<CloudWatchLogs.DescribeSubscriptionFiltersResponse | any, CloudWatchLogs.InvalidParameterException | CloudWatchLogs.ResourceNotFoundException | CloudWatchLogs.ServiceUnavailableException | any>;
    /**
     * Retrieves log events, optionally filtered by a filter pattern from the specified
log group. You can provide an optional time range to filter the results on the
event timestamp. You can limit the streams searched to an explicit list of 
logStreamNames.

By default, this operation returns as much matching log events as can fit in a
response size of 1MB, up to 10,000 log events, or all the events found within a
time-bounded scan window. If the response includes a nextToken, then there is
more data to search, and the search can be resumed with a new request providing
the nextToken. The response will contain a list of searchedLogStreams that
contains information about which streams were searched in the request and
whether they have been searched completely or require further pagination. The 
limit parameter in the request can be used to specify the maximum number of
events to return in a page.
     *
     * @error InvalidParameterException   
     * @error ResourceNotFoundException   
     * @error ServiceUnavailableException   
     */
    filterLogEvents(params: CloudWatchLogs.FilterLogEventsRequest, callback?: (err: CloudWatchLogs.InvalidParameterException | CloudWatchLogs.ResourceNotFoundException | CloudWatchLogs.ServiceUnavailableException | any, data: CloudWatchLogs.FilterLogEventsResponse | any) => void): Request<CloudWatchLogs.FilterLogEventsResponse | any, CloudWatchLogs.InvalidParameterException | CloudWatchLogs.ResourceNotFoundException | CloudWatchLogs.ServiceUnavailableException | any>;
    /**
     * Retrieves log events from the specified log stream. You can provide an optional
time range to filter the results on the event timestamp.

By default, this operation returns as much log events as can fit in a response
size of 1MB, up to 10,000 log events. The response will always include a 
nextForwardToken and a nextBackwardToken in the response body. You can use any
of these tokens in subsequent GetLogEvents requests to paginate through events
in either forward or backward direction. You can also limit the number of log
events returned in the response by specifying the limit parameter in the
request.
     *
     * @error InvalidParameterException   
     * @error ResourceNotFoundException   
     * @error ServiceUnavailableException   
     */
    getLogEvents(params: CloudWatchLogs.GetLogEventsRequest, callback?: (err: CloudWatchLogs.InvalidParameterException | CloudWatchLogs.ResourceNotFoundException | CloudWatchLogs.ServiceUnavailableException | any, data: CloudWatchLogs.GetLogEventsResponse | any) => void): Request<CloudWatchLogs.GetLogEventsResponse | any, CloudWatchLogs.InvalidParameterException | CloudWatchLogs.ResourceNotFoundException | CloudWatchLogs.ServiceUnavailableException | any>;
    /**
     * Creates or updates a Destination. A destination encapsulates a physical resource
(such as a Kinesis stream) and allows you to subscribe to a real-time stream of
log events of a different account, ingested through PutLogEvents requests.
Currently, the only supported physical resource is a Amazon Kinesis stream
belonging to the same account as the destination.

A destination controls what is written to its Amazon Kinesis stream through an
access policy. By default, PutDestination does not set any access policy with
the destination, which means a cross-account user will not be able to call 
PutSubscriptionFilter against this destination. To enable that, the destination
owner must call PutDestinationPolicy after PutDestination.
     *
     * @error InvalidParameterException   
     * @error OperationAbortedException   
     * @error ServiceUnavailableException   
     */
    putDestination(params: CloudWatchLogs.PutDestinationRequest, callback?: (err: CloudWatchLogs.InvalidParameterException | CloudWatchLogs.OperationAbortedException | CloudWatchLogs.ServiceUnavailableException | any, data: CloudWatchLogs.PutDestinationResponse | any) => void): Request<CloudWatchLogs.PutDestinationResponse | any, CloudWatchLogs.InvalidParameterException | CloudWatchLogs.OperationAbortedException | CloudWatchLogs.ServiceUnavailableException | any>;
    /**
     * Creates or updates an access policy associated with an existing Destination. An
access policy is an IAM policy document
[http://docs.aws.amazon.com/IAM/latest/UserGuide/policies_overview.html] that is
used to authorize claims to register a subscription filter against a given
destination.
     *
     * @error InvalidParameterException   
     * @error OperationAbortedException   
     * @error ServiceUnavailableException   
     */
    putDestinationPolicy(params: CloudWatchLogs.PutDestinationPolicyRequest, callback?: (err: CloudWatchLogs.InvalidParameterException | CloudWatchLogs.OperationAbortedException | CloudWatchLogs.ServiceUnavailableException | any, data: any) => void): Request<any, CloudWatchLogs.InvalidParameterException | CloudWatchLogs.OperationAbortedException | CloudWatchLogs.ServiceUnavailableException | any>;
    /**
     * Uploads a batch of log events to the specified log stream.

Every PutLogEvents request must include the sequenceToken obtained from the
response of the previous request. An upload in a newly created log stream does
not require a sequenceToken. You can also get the sequenceToken using 
DescribeLogStreams.

The batch of events must satisfy the following constraints:

 &amp;#42;  The maximum batch size is 1,048,576 bytes, and this size is calculated as
   the sum of all event messages in UTF-8, plus 26 bytes for each log event.
   
   
 *  None of the log events in the batch can be more than 2 hours in the future.
   
   
 *  None of the log events in the batch can be older than 14 days or the
   retention period of the log group.
   
   
 *  The log events in the batch must be in chronological ordered by their 
   timestamp.
   
   
 *  The maximum number of log events in a batch is 10,000.
   
   
 *  A batch of log events in a single PutLogEvents request cannot span more than
   24 hours. Otherwise, the PutLogEvents operation will fail.
     *
     * @error InvalidParameterException   
     * @error InvalidSequenceTokenException   
     * @error DataAlreadyAcceptedException   
     * @error ResourceNotFoundException   
     * @error ServiceUnavailableException   
     */
    putLogEvents(params: CloudWatchLogs.PutLogEventsRequest, callback?: (err: CloudWatchLogs.InvalidParameterException | CloudWatchLogs.InvalidSequenceTokenException | CloudWatchLogs.DataAlreadyAcceptedException | CloudWatchLogs.ResourceNotFoundException | CloudWatchLogs.ServiceUnavailableException | any, data: CloudWatchLogs.PutLogEventsResponse | any) => void): Request<CloudWatchLogs.PutLogEventsResponse | any, CloudWatchLogs.InvalidParameterException | CloudWatchLogs.InvalidSequenceTokenException | CloudWatchLogs.DataAlreadyAcceptedException | CloudWatchLogs.ResourceNotFoundException | CloudWatchLogs.ServiceUnavailableException | any>;
    /**
     * Creates or updates a metric filter and associates it with the specified log
group. Metric filters allow you to configure rules to extract metric data from
log events ingested through PutLogEvents requests.

The maximum number of metric filters that can be associated with a log group is
100.
     *
     * @error InvalidParameterException   
     * @error ResourceNotFoundException   
     * @error OperationAbortedException   
     * @error LimitExceededException   
     * @error ServiceUnavailableException   
     */
    putMetricFilter(params: CloudWatchLogs.PutMetricFilterRequest, callback?: (err: CloudWatchLogs.InvalidParameterException | CloudWatchLogs.ResourceNotFoundException | CloudWatchLogs.OperationAbortedException | CloudWatchLogs.LimitExceededException | CloudWatchLogs.ServiceUnavailableException | any, data: any) => void): Request<any, CloudWatchLogs.InvalidParameterException | CloudWatchLogs.ResourceNotFoundException | CloudWatchLogs.OperationAbortedException | CloudWatchLogs.LimitExceededException | CloudWatchLogs.ServiceUnavailableException | any>;
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
    putRetentionPolicy(params: CloudWatchLogs.PutRetentionPolicyRequest, callback?: (err: CloudWatchLogs.InvalidParameterException | CloudWatchLogs.ResourceNotFoundException | CloudWatchLogs.OperationAbortedException | CloudWatchLogs.ServiceUnavailableException | any, data: any) => void): Request<any, CloudWatchLogs.InvalidParameterException | CloudWatchLogs.ResourceNotFoundException | CloudWatchLogs.OperationAbortedException | CloudWatchLogs.ServiceUnavailableException | any>;
    /**
     * Creates or updates a subscription filter and associates it with the specified
log group. Subscription filters allow you to subscribe to a real-time stream of
log events ingested through PutLogEvents requests and have them delivered to a
specific destination. Currently, the supported destinations are:

 &amp;#42;  An Amazon Kinesis stream belonging to the same account as the subscription
   filter, for same-account delivery.
   
   
 *   A logical destination (used via an ARN of Destination) belonging to a
   different account, for cross-account delivery.
   
   
 *  An Amazon Kinesis Firehose stream belonging to the same account as the
   subscription filter, for same-account delivery.
   
   
 *  An AWS Lambda function belonging to the same account as the subscription
   filter, for same-account delivery.
   
   

Currently there can only be one subscription filter associated with a log group.
     *
     * @error InvalidParameterException   
     * @error ResourceNotFoundException   
     * @error OperationAbortedException   
     * @error LimitExceededException   
     * @error ServiceUnavailableException   
     */
    putSubscriptionFilter(params: CloudWatchLogs.PutSubscriptionFilterRequest, callback?: (err: CloudWatchLogs.InvalidParameterException | CloudWatchLogs.ResourceNotFoundException | CloudWatchLogs.OperationAbortedException | CloudWatchLogs.LimitExceededException | CloudWatchLogs.ServiceUnavailableException | any, data: any) => void): Request<any, CloudWatchLogs.InvalidParameterException | CloudWatchLogs.ResourceNotFoundException | CloudWatchLogs.OperationAbortedException | CloudWatchLogs.LimitExceededException | CloudWatchLogs.ServiceUnavailableException | any>;
    /**
     * Tests the filter pattern of a metric filter against a sample of log event
messages. You can use this operation to validate the correctness of a metric
filter pattern.
     *
     * @error InvalidParameterException   
     * @error ServiceUnavailableException   
     */
    testMetricFilter(params: CloudWatchLogs.TestMetricFilterRequest, callback?: (err: CloudWatchLogs.InvalidParameterException | CloudWatchLogs.ServiceUnavailableException | any, data: CloudWatchLogs.TestMetricFilterResponse | any) => void): Request<CloudWatchLogs.TestMetricFilterResponse | any, CloudWatchLogs.InvalidParameterException | CloudWatchLogs.ServiceUnavailableException | any>;

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

    export type ExtractedValues = { [key: string]: Value };

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

    export type TargetArn = string;

    export type TestEventMessages = EventMessage[];

    export type Timestamp = number;

    export type Token = string;

    export type Value = string;

    export interface CancelExportTaskRequest {
      /** Id of the export task to cancel. **/
      taskId: ExportTaskId;
    }
    export interface CreateExportTaskRequest {
      /** The name of the export task. **/
      taskName?: ExportTaskName;
      /** The name of the log group to export. **/
      logGroupName: LogGroupName;
      /** Will only export log streams that match the provided logStreamNamePrefix. If you
don&#x27;t specify a value, no prefix filter is applied. **/
      logStreamNamePrefix?: LogStreamName;
      /** A point in time expressed as the number of milliseconds since Jan 1, 1970
00:00:00 UTC. It indicates the start time of the range for the request. Events
with a timestamp prior to this time will not be exported. **/
      from: Timestamp;
      /** A point in time expressed as the number of milliseconds since Jan 1, 1970
00:00:00 UTC. It indicates the end time of the range for the request. Events
with a timestamp later than this time will not be exported. **/
      to: Timestamp;
      /** Name of Amazon S3 bucket to which the log data will be exported.

Note: Only buckets in the same AWS region are supported. **/
      destination: ExportDestinationBucket;
      /** Prefix that will be used as the start of Amazon S3 key for every object
exported. If not specified, this defaults to &#x27;exportedlogs&#x27;. **/
      destinationPrefix?: ExportDestinationPrefix;
    }
    export interface CreateExportTaskResponse {
      /** Id of the export task that got created. **/
      taskId?: ExportTaskId;
    }
    export interface CreateLogGroupRequest {
      /** The name of the log group to create. **/
      logGroupName: LogGroupName;
    }
    export interface CreateLogStreamRequest {
      /** The name of the log group under which the log stream is to be created. **/
      logGroupName: LogGroupName;
      /** The name of the log stream to create. **/
      logStreamName: LogStreamName;
    }
    export interface DataAlreadyAcceptedException {
      expectedSequenceToken?: SequenceToken;
    }
    export interface DeleteDestinationRequest {
      /** The name of destination to delete. **/
      destinationName: DestinationName;
    }
    export interface DeleteLogGroupRequest {
      /** The name of the log group to delete. **/
      logGroupName: LogGroupName;
    }
    export interface DeleteLogStreamRequest {
      /** The name of the log group under which the log stream to delete belongs. **/
      logGroupName: LogGroupName;
      /** The name of the log stream to delete. **/
      logStreamName: LogStreamName;
    }
    export interface DeleteMetricFilterRequest {
      /** The name of the log group that is associated with the metric filter to delete. **/
      logGroupName: LogGroupName;
      /** The name of the metric filter to delete. **/
      filterName: FilterName;
    }
    export interface DeleteRetentionPolicyRequest {
      /** The name of the log group that is associated with the retention policy to
delete. **/
      logGroupName: LogGroupName;
    }
    export interface DeleteSubscriptionFilterRequest {
      /** The name of the log group that is associated with the subscription filter to
delete. **/
      logGroupName: LogGroupName;
      /** The name of the subscription filter to delete. **/
      filterName: FilterName;
    }
    export interface DescribeDestinationsRequest {
      /** Will only return destinations that match the provided destinationNamePrefix. If
you don&#x27;t specify a value, no prefix is applied. **/
      DestinationNamePrefix?: DestinationName;
      nextToken?: NextToken;
      limit?: DescribeLimit;
    }
    export interface DescribeDestinationsResponse {
      destinations?: Destinations;
      nextToken?: NextToken;
    }
    export interface DescribeExportTasksRequest {
      /** Export task that matches the specified task Id will be returned. This can result
in zero or one export task. **/
      taskId?: ExportTaskId;
      /** All export tasks that matches the specified status code will be returned. This
can return zero or more export tasks. **/
      statusCode?: ExportTaskStatusCode;
      /** A string token used for pagination that points to the next page of results. It
must be a value obtained from the response of the previous DescribeExportTasks 
request. **/
      nextToken?: NextToken;
      /** The maximum number of items returned in the response. If you don&#x27;t specify a
value, the request would return up to 50 items. **/
      limit?: DescribeLimit;
    }
    export interface DescribeExportTasksResponse {
      exportTasks?: ExportTasks;
      nextToken?: NextToken;
    }
    export interface DescribeLogGroupsRequest {
      /** Will only return log groups that match the provided logGroupNamePrefix. If you
don&#x27;t specify a value, no prefix filter is applied. **/
      logGroupNamePrefix?: LogGroupName;
      /** A string token used for pagination that points to the next page of results. It
must be a value obtained from the response of the previous DescribeLogGroups 
request. **/
      nextToken?: NextToken;
      /** The maximum number of items returned in the response. If you don&#x27;t specify a
value, the request would return up to 50 items. **/
      limit?: DescribeLimit;
    }
    export interface DescribeLogGroupsResponse {
      logGroups?: LogGroups;
      nextToken?: NextToken;
    }
    export interface DescribeLogStreamsRequest {
      /** The log group name for which log streams are to be listed. **/
      logGroupName: LogGroupName;
      /** Will only return log streams that match the provided logStreamNamePrefix. If you
don&#x27;t specify a value, no prefix filter is applied. **/
      logStreamNamePrefix?: LogStreamName;
      /** Specifies what to order the returned log streams by. Valid arguments are
&#x27;LogStreamName&#x27; or &#x27;LastEventTime&#x27;. If you don&#x27;t specify a value, results are
ordered by LogStreamName. If &#x27;LastEventTime&#x27; is chosen, the request cannot also
contain a logStreamNamePrefix. **/
      orderBy?: OrderBy;
      /** If set to true, results are returned in descending order. If you don&#x27;t specify a
value or set it to false, results are returned in ascending order. **/
      descending?: Descending;
      /** A string token used for pagination that points to the next page of results. It
must be a value obtained from the response of the previous DescribeLogStreams 
request. **/
      nextToken?: NextToken;
      /** The maximum number of items returned in the response. If you don&#x27;t specify a
value, the request would return up to 50 items. **/
      limit?: DescribeLimit;
    }
    export interface DescribeLogStreamsResponse {
      logStreams?: LogStreams;
      nextToken?: NextToken;
    }
    export interface DescribeMetricFiltersRequest {
      /** The log group name for which metric filters are to be listed. **/
      logGroupName: LogGroupName;
      /** Will only return metric filters that match the provided filterNamePrefix. If you
don&#x27;t specify a value, no prefix filter is applied. **/
      filterNamePrefix?: FilterName;
      /** A string token used for pagination that points to the next page of results. It
must be a value obtained from the response of the previous DescribeMetricFilters 
request. **/
      nextToken?: NextToken;
      /** The maximum number of items returned in the response. If you don&#x27;t specify a
value, the request would return up to 50 items. **/
      limit?: DescribeLimit;
    }
    export interface DescribeMetricFiltersResponse {
      metricFilters?: MetricFilters;
      nextToken?: NextToken;
    }
    export interface DescribeSubscriptionFiltersRequest {
      /** The log group name for which subscription filters are to be listed. **/
      logGroupName: LogGroupName;
      /** Will only return subscription filters that match the provided filterNamePrefix.
If you don&#x27;t specify a value, no prefix filter is applied. **/
      filterNamePrefix?: FilterName;
      nextToken?: NextToken;
      limit?: DescribeLimit;
    }
    export interface DescribeSubscriptionFiltersResponse {
      subscriptionFilters?: SubscriptionFilters;
      nextToken?: NextToken;
    }
    export interface Destination {
      /** Name of the destination. **/
      destinationName?: DestinationName;
      /** ARN of the physical target where the log events will be delivered (eg. ARN of a
Kinesis stream). **/
      targetArn?: TargetArn;
      /** A role for impersonation for delivering log events to the target. **/
      roleArn?: RoleArn;
      /** An IAM policy document that governs which AWS accounts can create subscription
filters against this destination. **/
      accessPolicy?: AccessPolicy;
      /** ARN of this destination. **/
      arn?: Arn;
      /** A point in time expressed as the number of milliseconds since Jan 1, 1970
00:00:00 UTC specifying when this destination was created. **/
      creationTime?: Timestamp;
    }
    export interface ExportTask {
      /** Id of the export task. **/
      taskId?: ExportTaskId;
      /** The name of the export task. **/
      taskName?: ExportTaskName;
      /** The name of the log group from which logs data was exported. **/
      logGroupName?: LogGroupName;
      /** A point in time expressed as the number of milliseconds since Jan 1, 1970
00:00:00 UTC. Events with a timestamp prior to this time are not exported. **/
      from?: Timestamp;
      /** A point in time expressed as the number of milliseconds since Jan 1, 1970
00:00:00 UTC. Events with a timestamp later than this time are not exported. **/
      to?: Timestamp;
      /** Name of Amazon S3 bucket to which the log data was exported. **/
      destination?: ExportDestinationBucket;
      /** Prefix that was used as the start of Amazon S3 key for every object exported. **/
      destinationPrefix?: ExportDestinationPrefix;
      /** Status of the export task. **/
      status?: ExportTaskStatus;
      /** Execution info about the export task. **/
      executionInfo?: ExportTaskExecutionInfo;
    }
    export interface ExportTaskExecutionInfo {
      /** A point in time when the export task got created. **/
      creationTime?: Timestamp;
      /** A point in time when the export task got completed. **/
      completionTime?: Timestamp;
    }
    export interface ExportTaskStatus {
      /** Status code of the export task. **/
      code?: ExportTaskStatusCode;
      /** Status message related to the code. **/
      message?: ExportTaskStatusMessage;
    }
    export interface FilterLogEventsRequest {
      /** The name of the log group to query. **/
      logGroupName: LogGroupName;
      /** Optional list of log stream names within the specified log group to search.
Defaults to all the log streams in the log group. **/
      logStreamNames?: InputLogStreamNames;
      /** A point in time expressed as the number of milliseconds since Jan 1, 1970
00:00:00 UTC. If provided, events with a timestamp prior to this time are not
returned. **/
      startTime?: Timestamp;
      /** A point in time expressed as the number of milliseconds since Jan 1, 1970
00:00:00 UTC. If provided, events with a timestamp later than this time are not
returned. **/
      endTime?: Timestamp;
      /** A valid CloudWatch Logs filter pattern to use for filtering the response. If not
provided, all the events are matched. **/
      filterPattern?: FilterPattern;
      /** A pagination token obtained from a FilterLogEvents response to continue
paginating the FilterLogEvents results. This token is omitted from the response
when there are no other events to display. **/
      nextToken?: NextToken;
      /** The maximum number of events to return in a page of results. Default is 10,000
events. **/
      limit?: EventsLimit;
      /** If provided, the API will make a best effort to provide responses that contain
events from multiple log streams within the log group interleaved in a single
response. If not provided, all the matched log events in the first log stream
will be searched first, then those in the next log stream, etc. **/
      interleaved?: Interleaved;
    }
    export interface FilterLogEventsResponse {
      /** A list of FilteredLogEvent objects representing the matched events from the
request. **/
      events?: FilteredLogEvents;
      /** A list of SearchedLogStream objects indicating which log streams have been
searched in this request and whether each has been searched completely or still
has more to be paginated. **/
      searchedLogStreams?: SearchedLogStreams;
      /** A pagination token obtained from a FilterLogEvents response to continue
paginating the FilterLogEvents results. This token is omitted from the response
when there are no other events to display. **/
      nextToken?: NextToken;
    }
    export interface FilteredLogEvent {
      /** The name of the log stream this event belongs to. **/
      logStreamName?: LogStreamName;
      timestamp?: Timestamp;
      /** The data contained in the log event. **/
      message?: EventMessage;
      ingestionTime?: Timestamp;
      /** A unique identifier for this event. **/
      eventId?: EventId;
    }
    export interface GetLogEventsRequest {
      /** The name of the log group to query. **/
      logGroupName: LogGroupName;
      /** The name of the log stream to query. **/
      logStreamName: LogStreamName;
      startTime?: Timestamp;
      endTime?: Timestamp;
      /** A string token used for pagination that points to the next page of results. It
must be a value obtained from the nextForwardToken or nextBackwardToken fields
in the response of the previous GetLogEvents request. **/
      nextToken?: NextToken;
      /** The maximum number of log events returned in the response. If you don&#x27;t specify
a value, the request would return as many log events as can fit in a response
size of 1MB, up to 10,000 log events. **/
      limit?: EventsLimit;
      /** If set to true, the earliest log events would be returned first. The default is
false (the latest log events are returned first). **/
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
      /** Name of the metric. **/
      metricName: MetricName;
      /** Namespace to which the metric belongs. **/
      metricNamespace: MetricNamespace;
      /** A string representing a value to publish to this metric when a filter pattern
matches a log event. **/
      metricValue: MetricValue;
      /** (Optional) A default value to emit when a filter pattern does not match a log
event. Can be null. **/
      defaultValue?: DefaultValue;
    }
    export interface OperationAbortedException {
    }
    export interface OutputLogEvent {
      timestamp?: Timestamp;
      message?: EventMessage;
      ingestionTime?: Timestamp;
    }
    export interface PutDestinationPolicyRequest {
      /** A name for an existing destination. **/
      destinationName: DestinationName;
      /** An IAM policy document that authorizes cross-account users to deliver their log
events to associated destination. **/
      accessPolicy: AccessPolicy;
    }
    export interface PutDestinationRequest {
      /** A name for the destination. **/
      destinationName: DestinationName;
      /** The ARN of an Amazon Kinesis stream to deliver matching log events to. **/
      targetArn: TargetArn;
      /** The ARN of an IAM role that grants CloudWatch Logs permissions to do Amazon
Kinesis PutRecord requests on the destination stream. **/
      roleArn: RoleArn;
    }
    export interface PutDestinationResponse {
      destination?: Destination;
    }
    export interface PutLogEventsRequest {
      /** The name of the log group to put log events to. **/
      logGroupName: LogGroupName;
      /** The name of the log stream to put log events to. **/
      logStreamName: LogStreamName;
      logEvents: InputLogEvents;
      /** A string token that must be obtained from the response of the previous 
PutLogEvents request. **/
      sequenceToken?: SequenceToken;
    }
    export interface PutLogEventsResponse {
      nextSequenceToken?: SequenceToken;
      rejectedLogEventsInfo?: RejectedLogEventsInfo;
    }
    export interface PutMetricFilterRequest {
      /** The name of the log group to associate the metric filter with. **/
      logGroupName: LogGroupName;
      /** A name for the metric filter. **/
      filterName: FilterName;
      /** A valid CloudWatch Logs filter pattern for extracting metric data out of
ingested log events. **/
      filterPattern: FilterPattern;
      /** A collection of information needed to define how metric data gets emitted. **/
      metricTransformations: MetricTransformations;
    }
    export interface PutRetentionPolicyRequest {
      /** The name of the log group to associate the retention policy with. **/
      logGroupName: LogGroupName;
      retentionInDays: Days;
    }
    export interface PutSubscriptionFilterRequest {
      /** The name of the log group to associate the subscription filter with. **/
      logGroupName: LogGroupName;
      /** A name for the subscription filter. **/
      filterName: FilterName;
      /** A valid CloudWatch Logs filter pattern for subscribing to a filtered stream of
log events. **/
      filterPattern: FilterPattern;
      /** The ARN of the destination to deliver matching log events to. Currently, the
supported destinations are:

&amp;#42;  An Amazon Kinesis stream belonging to the same account as the subscription
 filter, for same-account delivery.
 
 
*  A logical destination (used via an ARN of Destination) belonging to a
 different account, for cross-account delivery.
 
 
*  An Amazon Kinesis Firehose stream belonging to the same account as the
 subscription filter, for same-account delivery.
 
 
*  An AWS Lambda function belonging to the same account as the subscription
 filter, for same-account delivery. **/
      destinationArn: DestinationArn;
      /** The ARN of an IAM role that grants CloudWatch Logs permissions to deliver
ingested log events to the destination stream. You don&#x27;t need to provide the ARN
when you are working with a logical destination (used via an ARN of Destination)
for cross-account delivery. **/
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
      /** The name of the log stream. **/
      logStreamName?: LogStreamName;
      /** Indicates whether all the events in this log stream were searched or more data
exists to search by paginating further. **/
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
      /** A list of log event messages to test. **/
      logEventMessages: TestEventMessages;
    }
    export interface TestMetricFilterResponse {
      matches?: MetricFilterMatches;
    }
  }
}
