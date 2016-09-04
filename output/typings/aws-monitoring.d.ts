// Type definitions for aws-sdk - Amazon CloudWatch
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

// COMMENTED <reference path="./aws-sdk.d.ts" />

declare module "aws-sdk" {

  /**
    * apiVersion: 2010-08-01
    * endpointPrefix: monitoring
    * serviceAbbreviation: CloudWatch
    * signatureVersion: v4
    * protocol: query
    *
    * Amazon CloudWatch monitors your Amazon Web Services (AWS) resources and the
 applications you run on AWS in real-time. You can use CloudWatch to collect and
 track metrics, which are the variables you want to measure for your resources
 and applications.
 
 CloudWatch alarms send notifications or automatically make changes to the
 resources you are monitoring based on rules that you define. For example, you
 can monitor the CPU usage and disk reads and writes of your Amazon Elastic
 Compute Cloud (Amazon EC2) instances and then use this data to determine whether
 you should launch additional instances to handle increased load. You can also
 use this data to stop under-used instances to save money.
 
 In addition to monitoring the built-in metrics that come with AWS, you can
 monitor your own custom metrics. With CloudWatch, you gain system-wide
 visibility into resource utilization, application performance, and operational
 health.
    *
    */
  export class CloudWatch extends Service {
    constructor(options?: any);
    endpoint: Endpoint;
    /**
     * Deletes all specified alarms. In the event of an error, no alarms are deleted.
     *
     * @error ResourceNotFound   
     */
    deleteAlarms(params: CloudWatch.DeleteAlarmsInput, callback?: (err: CloudWatch.ResourceNotFound | any, data: any) => void): Request<any, CloudWatch.ResourceNotFound | any>;
    /**
     * Retrieves history for the specified alarm. Filter alarms by date range or item
type. If an alarm name is not specified, Amazon CloudWatch returns histories for
all of the owner&#x27;s alarms.

Amazon CloudWatch retains the history of an alarm for two weeks, whether or not
you delete the alarm.
     *
     * @error InvalidNextToken   
     */
    describeAlarmHistory(params: CloudWatch.DescribeAlarmHistoryInput, callback?: (err: CloudWatch.InvalidNextToken | any, data: CloudWatch.DescribeAlarmHistoryOutput | any) => void): Request<CloudWatch.DescribeAlarmHistoryOutput | any, CloudWatch.InvalidNextToken | any>;
    /**
     * Retrieves alarms with the specified names. If no name is specified, all alarms
for the user are returned. Alarms can be retrieved by using only a prefix for
the alarm name, the alarm state, or a prefix for any action.
     *
     * @error InvalidNextToken   
     */
    describeAlarms(params: CloudWatch.DescribeAlarmsInput, callback?: (err: CloudWatch.InvalidNextToken | any, data: CloudWatch.DescribeAlarmsOutput | any) => void): Request<CloudWatch.DescribeAlarmsOutput | any, CloudWatch.InvalidNextToken | any>;
    /**
     * Retrieves all alarms for a single metric. Specify a statistic, period, or unit
to filter the set of alarms further.
     *
     */
    describeAlarmsForMetric(params: CloudWatch.DescribeAlarmsForMetricInput, callback?: (err: any, data: CloudWatch.DescribeAlarmsForMetricOutput | any) => void): Request<CloudWatch.DescribeAlarmsForMetricOutput | any, any>;
    /**
     * Disables actions for the specified alarms. When an alarm&#x27;s actions are disabled
the alarm&#x27;s state may change, but none of the alarm&#x27;s actions will execute.
     *
     */
    disableAlarmActions(params: CloudWatch.DisableAlarmActionsInput, callback?: (err: any, data: any) => void): Request<any, any>;
    /**
     * Enables actions for the specified alarms.
     *
     */
    enableAlarmActions(params: CloudWatch.EnableAlarmActionsInput, callback?: (err: any, data: any) => void): Request<any, any>;
    /**
     * Gets statistics for the specified metric.

 The maximum number of data points that can be queried is 50,850, whereas the
maximum number of data points returned from a single GetMetricStatistics request
is 1,440. If you make a request that generates more than 1,440 data points,
Amazon CloudWatch returns an error. In such a case, you can alter the request by
narrowing the specified time range or increasing the specified period. A period
can be as short as one minute (60 seconds) or as long as one day (86,400
seconds). Alternatively, you can make multiple requests across adjacent time
ranges. GetMetricStatistics does not return the data in chronological order. 

 Amazon CloudWatch aggregates data points based on the length of the period that
you specify. For example, if you request statistics with a one-minute
granularity, Amazon CloudWatch aggregates data points with time stamps that fall
within the same one-minute period. In such a case, the data points queried can
greatly outnumber the data points returned. 

 The following examples show various statistics allowed by the data point query
maximum of 50,850 when you call GetMetricStatistics on Amazon EC2 instances with
detailed (one-minute) monitoring enabled: 

 &amp;#42;  Statistics for up to 400 instances for a span of one hour
   
   
 *  Statistics for up to 35 instances over a span of 24 hours
   
   
 *  Statistics for up to 2 instances over a span of 2 weeks
   
   

 For information about the namespace, metric names, and dimensions that other
Amazon Web Services products use to send metrics to CloudWatch, go to Amazon
CloudWatch Metrics, Namespaces, and Dimensions Reference
[http://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/CW_Support_For_AWS.html] 
in the Amazon CloudWatch Developer Guide.
     *
     * @error InvalidParameterValueException   
     * @error MissingRequiredParameterException   
     * @error InvalidParameterCombinationException   
     * @error InternalServiceFault   
     */
    getMetricStatistics(params: CloudWatch.GetMetricStatisticsInput, callback?: (err: CloudWatch.InvalidParameterValueException | CloudWatch.MissingRequiredParameterException | CloudWatch.InvalidParameterCombinationException | CloudWatch.InternalServiceFault | any, data: CloudWatch.GetMetricStatisticsOutput | any) => void): Request<CloudWatch.GetMetricStatisticsOutput | any, CloudWatch.InvalidParameterValueException | CloudWatch.MissingRequiredParameterException | CloudWatch.InvalidParameterCombinationException | CloudWatch.InternalServiceFault | any>;
    /**
     * Returns a list of valid metrics stored for the AWS account owner. Returned
metrics can be used with GetMetricStatistics to obtain statistical data for a
given metric. 

 Up to 500 results are returned for any one call. To retrieve further results,
use returned NextToken values with subsequent ListMetrics operations.

 If you create a metric with PutMetricData, allow up to fifteen minutes for the
metric to appear in calls to ListMetrics. Statistics about the metric, however,
are available sooner using GetMetricStatistics.
     *
     * @error InternalServiceFault   
     * @error InvalidParameterValueException   
     */
    listMetrics(params: CloudWatch.ListMetricsInput, callback?: (err: CloudWatch.InternalServiceFault | CloudWatch.InvalidParameterValueException | any, data: CloudWatch.ListMetricsOutput | any) => void): Request<CloudWatch.ListMetricsOutput | any, CloudWatch.InternalServiceFault | CloudWatch.InvalidParameterValueException | any>;
    /**
     * Creates or updates an alarm and associates it with the specified Amazon
CloudWatch metric. Optionally, this operation can associate one or more Amazon
SNS resources with the alarm.

 When this operation creates an alarm, the alarm state is immediately set to 
INSUFFICIENT_DATA. The alarm is evaluated and its StateValue is set
appropriately. Any actions associated with the StateValue are then executed. 

When updating an existing alarm, its StateValue is left unchanged, but it
completely overwrites the alarm&#x27;s previous configuration.

If you are using an AWS Identity and Access Management (IAM) account to create
or modify an alarm, you must have the following Amazon EC2 permissions:

 &amp;#42;   ec2:DescribeInstanceStatus and ec2:DescribeInstances for all alarms on
   Amazon EC2 instance status metrics.
   
   
 *   ec2:StopInstances for alarms with stop actions.
   
   
 *   ec2:TerminateInstances for alarms with terminate actions.
   
   
 *   ec2:DescribeInstanceRecoveryAttribute, and ec2:RecoverInstances for alarms
   with recover actions.
   
   

If you have read/write permissions for Amazon CloudWatch but not for Amazon EC2,
you can still create an alarm but the stop or terminate actions won&#x27;t be
performed on the Amazon EC2 instance. However, if you are later granted
permission to use the associated Amazon EC2 APIs, the alarm actions you created
earlier will be performed. For more information about IAM permissions, see 
Permissions and Policies
[http://docs.aws.amazon.com/IAM/latest/UserGuide/PermissionsAndPolicies.html] in 
Using IAM.

If you are using an IAM role (e.g., an Amazon EC2 instance profile), you cannot
stop or terminate the instance using alarm actions. However, you can still see
the alarm state and perform any other actions such as Amazon SNS notifications
or Auto Scaling policies.

If you are using temporary security credentials granted using the AWS Security
Token Service (AWS STS), you cannot stop or terminate an Amazon EC2 instance
using alarm actions.
     *
     * @error LimitExceededFault   
     */
    putMetricAlarm(params: CloudWatch.PutMetricAlarmInput, callback?: (err: CloudWatch.LimitExceededFault | any, data: any) => void): Request<any, CloudWatch.LimitExceededFault | any>;
    /**
     * Publishes metric data points to Amazon CloudWatch. Amazon CloudWatch associates
the data points with the specified metric. If the specified metric does not
exist, Amazon CloudWatch creates the metric. When Amazon CloudWatch creates a
metric, it can take up to fifteen minutes for the metric to appear in calls to 
ListMetrics. 

 Each PutMetricData request is limited to 8 KB in size for HTTP GET requests and
is limited to 40 KB in size for HTTP POST requests. 

Although the Value parameter accepts numbers of type Double, Amazon CloudWatch
rejects values that are either too small or too large. Values must be in the
range of 8.515920e-109 to 1.174271e+108 (Base 10) or 2e-360 to 2e360 (Base 2).
In addition, special values (e.g., NaN, +Infinity, -Infinity) are not supported.

Data that is timestamped 24 hours or more in the past may take in excess of 48
hours to become available from submission time using GetMetricStatistics.
     *
     * @error InvalidParameterValueException   
     * @error MissingRequiredParameterException   
     * @error InvalidParameterCombinationException   
     * @error InternalServiceFault   
     */
    putMetricData(params: CloudWatch.PutMetricDataInput, callback?: (err: CloudWatch.InvalidParameterValueException | CloudWatch.MissingRequiredParameterException | CloudWatch.InvalidParameterCombinationException | CloudWatch.InternalServiceFault | any, data: any) => void): Request<any, CloudWatch.InvalidParameterValueException | CloudWatch.MissingRequiredParameterException | CloudWatch.InvalidParameterCombinationException | CloudWatch.InternalServiceFault | any>;
    /**
     * Temporarily sets the state of an alarm for testing purposes. When the updated 
StateValue differs from the previous value, the action configured for the
appropriate state is invoked. For example, if your alarm is configured to send
an Amazon SNS message when an alarm is triggered, temporarily changing the
alarm&#x27;s state to ALARM sends an Amazon SNS message. The alarm returns to its
actual state (often within seconds). Because the alarm state change happens very
quickly, it is typically only visible in the alarm&#x27;s History tab in the Amazon
CloudWatch console or through DescribeAlarmHistory.
     *
     * @error ResourceNotFound   
     * @error InvalidFormatFault   
     */
    setAlarmState(params: CloudWatch.SetAlarmStateInput, callback?: (err: CloudWatch.ResourceNotFound | CloudWatch.InvalidFormatFault | any, data: any) => void): Request<any, CloudWatch.ResourceNotFound | CloudWatch.InvalidFormatFault | any>;

  }

  export module CloudWatch {

    export type ActionPrefix = string;

    export type ActionsEnabled = boolean;

    export type AlarmArn = string;

    export type AlarmDescription = string;

    export type AlarmHistoryItems = AlarmHistoryItem[];

    export type AlarmName = string;

    export type AlarmNamePrefix = string;

    export type AlarmNames = AlarmName[];

    export type AwsQueryErrorMessage = string;

    export type ComparisonOperator = string;

    export type DatapointValue = number;

    export type Datapoints = Datapoint[];

    export type DimensionFilters = DimensionFilter[];

    export type DimensionName = string;

    export type DimensionValue = string;

    export type Dimensions = Dimension[];

    export type ErrorMessage = string;

    export type EvaluationPeriods = number;

    export type FaultDescription = string;

    export type HistoryData = string;

    export type HistoryItemType = string;

    export type HistorySummary = string;

    export type MaxRecords = number;

    export type MetricAlarms = MetricAlarm[];

    export type MetricData = MetricDatum[];

    export type MetricLabel = string;

    export type MetricName = string;

    export type Metrics = Metric[];

    export type Namespace = string;

    export type NextToken = string;

    export type Period = number;

    export type ResourceList = ResourceName[];

    export type ResourceName = string;

    export type StandardUnit = string;

    export type StateReason = string;

    export type StateReasonData = string;

    export type StateValue = string;

    export type Statistic = string;

    export type Statistics = Statistic[];

    export type Threshold = number;

    export type Timestamp = number;

    export interface AlarmHistoryItem {
      /** The descriptive name for the alarm. **/
      AlarmName?: AlarmName;
      /** The time stamp for the alarm history item. **/
      Timestamp?: Timestamp;
      /** The type of alarm history item. **/
      HistoryItemType?: HistoryItemType;
      /** A human-readable summary of the alarm history. **/
      HistorySummary?: HistorySummary;
      /** Machine-readable data about the alarm in JSON format. **/
      HistoryData?: HistoryData;
    }
    export interface Datapoint {
      /** The time stamp used for the datapoint. **/
      Timestamp?: Timestamp;
      /** The number of metric values that contributed to the aggregate value of this
datapoint. **/
      SampleCount?: DatapointValue;
      /** The average of metric values that correspond to the datapoint. **/
      Average?: DatapointValue;
      /** The sum of metric values used for the datapoint. **/
      Sum?: DatapointValue;
      /** The minimum metric value used for the datapoint. **/
      Minimum?: DatapointValue;
      /** The maximum of the metric value used for the datapoint. **/
      Maximum?: DatapointValue;
      /** The standard unit used for the datapoint. **/
      Unit?: StandardUnit;
    }
    export interface DeleteAlarmsInput {
      /** A list of alarms to be deleted. **/
      AlarmNames: AlarmNames;
    }
    export interface DescribeAlarmHistoryInput {
      /** The name of the alarm. **/
      AlarmName?: AlarmName;
      /** The type of alarm histories to retrieve. **/
      HistoryItemType?: HistoryItemType;
      /** The starting date to retrieve alarm history. **/
      StartDate?: Timestamp;
      /** The ending date to retrieve alarm history. **/
      EndDate?: Timestamp;
      /** The maximum number of alarm history records to retrieve. **/
      MaxRecords?: MaxRecords;
      /** The token returned by a previous call to indicate that there is more data
available. **/
      NextToken?: NextToken;
    }
    export interface DescribeAlarmHistoryOutput {
      /** A list of alarm histories in JSON format. **/
      AlarmHistoryItems?: AlarmHistoryItems;
      /** A string that marks the start of the next batch of returned results. **/
      NextToken?: NextToken;
    }
    export interface DescribeAlarmsForMetricInput {
      /** The name of the metric. **/
      MetricName: MetricName;
      /** The namespace of the metric. **/
      Namespace: Namespace;
      /** The statistic for the metric. **/
      Statistic?: Statistic;
      /** The list of dimensions associated with the metric. If the metric has any
associated dimensions, you must specify them in order for the
DescribeAlarmsForMetric to succeed. **/
      Dimensions?: Dimensions;
      /** The period in seconds over which the statistic is applied. **/
      Period?: Period;
      /** The unit for the metric. **/
      Unit?: StandardUnit;
    }
    export interface DescribeAlarmsForMetricOutput {
      /** A list of information for each alarm with the specified metric. **/
      MetricAlarms?: MetricAlarms;
    }
    export interface DescribeAlarmsInput {
      /** A list of alarm names to retrieve information for. **/
      AlarmNames?: AlarmNames;
      /** The alarm name prefix. AlarmNames cannot be specified if this parameter is
specified. **/
      AlarmNamePrefix?: AlarmNamePrefix;
      /** The state value to be used in matching alarms. **/
      StateValue?: StateValue;
      /** The action name prefix. **/
      ActionPrefix?: ActionPrefix;
      /** The maximum number of alarm descriptions to retrieve. **/
      MaxRecords?: MaxRecords;
      /** The token returned by a previous call to indicate that there is more data
available. **/
      NextToken?: NextToken;
    }
    export interface DescribeAlarmsOutput {
      /** A list of information for the specified alarms. **/
      MetricAlarms?: MetricAlarms;
      /** A string that marks the start of the next batch of returned results. **/
      NextToken?: NextToken;
    }
    export interface Dimension {
      /** The name of the dimension. **/
      Name: DimensionName;
      /** The value representing the dimension measurement **/
      Value: DimensionValue;
    }
    export interface DimensionFilter {
      /** The dimension name to be matched. **/
      Name: DimensionName;
      /** The value of the dimension to be matched.

Specifying a Name without specifying a Value returns all values associated with
that Name. **/
      Value?: DimensionValue;
    }
    export interface DisableAlarmActionsInput {
      /** The names of the alarms to disable actions for. **/
      AlarmNames: AlarmNames;
    }
    export interface EnableAlarmActionsInput {
      /** The names of the alarms to enable actions for. **/
      AlarmNames: AlarmNames;
    }
    export interface GetMetricStatisticsInput {
      /** The namespace of the metric, with or without spaces. **/
      Namespace: Namespace;
      /** The name of the metric, with or without spaces. **/
      MetricName: MetricName;
      /** A list of dimensions describing qualities of the metric. **/
      Dimensions?: Dimensions;
      /** The time stamp to use for determining the first datapoint to return. The value
specified is inclusive; results include datapoints with the time stamp
specified. The time stamp must be in ISO 8601 UTC format (e.g.,
2014-09-03T23:00:00Z).

The specified start time is rounded down to the nearest value. Datapoints are
returned for start times up to two weeks in the past. Specified start times that
are more than two weeks in the past will not return datapoints for metrics that
are older than two weeks.

Data that is timestamped 24 hours or more in the past may take in excess of 48
hours to become available from submission time using GetMetricStatistics. **/
      StartTime: Timestamp;
      /** The time stamp to use for determining the last datapoint to return. The value
specified is exclusive; results will include datapoints up to the time stamp
specified. The time stamp must be in ISO 8601 UTC format (e.g.,
2014-09-03T23:00:00Z). **/
      EndTime: Timestamp;
      /** The granularity, in seconds, of the returned datapoints. A Period can be as
short as one minute (60 seconds) or as long as one day (86,400 seconds), and
must be a multiple of 60. The default value is 60. **/
      Period: Period;
      /** The metric statistics to return. For information about specific statistics
returned by GetMetricStatistics, see Statistics
[http://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/cloudwatch_concepts.html#Statistic] 
in the Amazon CloudWatch Developer Guide. **/
      Statistics: Statistics;
      /** The specific unit for a given metric. Metrics may be reported in multiple units.
Not supplying a unit results in all units being returned. If the metric only
ever reports one unit, specifying a unit will have no effect. **/
      Unit?: StandardUnit;
    }
    export interface GetMetricStatisticsOutput {
      /** A label describing the specified metric. **/
      Label?: MetricLabel;
      /** The datapoints for the specified metric. **/
      Datapoints?: Datapoints;
    }
    export interface InternalServiceFault {
      /**  **/
      Message?: FaultDescription;
    }
    export interface InvalidFormatFault {
      /**  **/
      message?: ErrorMessage;
    }
    export interface InvalidNextToken {
      /**  **/
      message?: ErrorMessage;
    }
    export interface InvalidParameterCombinationException {
      /**  **/
      message?: AwsQueryErrorMessage;
    }
    export interface InvalidParameterValueException {
      /**  **/
      message?: AwsQueryErrorMessage;
    }
    export interface LimitExceededFault {
      /**  **/
      message?: ErrorMessage;
    }
    export interface ListMetricsInput {
      /** The namespace to filter against. **/
      Namespace?: Namespace;
      /** The name of the metric to filter against. **/
      MetricName?: MetricName;
      /** A list of dimensions to filter against. **/
      Dimensions?: DimensionFilters;
      /** The token returned by a previous call to indicate that there is more data
available. **/
      NextToken?: NextToken;
    }
    export interface ListMetricsOutput {
      /** A list of metrics used to generate statistics for an AWS account. **/
      Metrics?: Metrics;
      /** A string that marks the start of the next batch of returned results. **/
      NextToken?: NextToken;
    }
    export interface Metric {
      /** The namespace of the metric. **/
      Namespace?: Namespace;
      /** The name of the metric. **/
      MetricName?: MetricName;
      /** A list of dimensions associated with the metric. **/
      Dimensions?: Dimensions;
    }
    export interface MetricAlarm {
      /** The name of the alarm. **/
      AlarmName?: AlarmName;
      /** The Amazon Resource Name (ARN) of the alarm. **/
      AlarmArn?: AlarmArn;
      /** The description for the alarm. **/
      AlarmDescription?: AlarmDescription;
      /** The time stamp of the last update to the alarm configuration. **/
      AlarmConfigurationUpdatedTimestamp?: Timestamp;
      /** Indicates whether actions should be executed during any changes to the alarm&#x27;s
state. **/
      ActionsEnabled?: ActionsEnabled;
      /** The list of actions to execute when this alarm transitions into an OK state
from any other state. Each action is specified as an Amazon Resource Name (ARN). **/
      OKActions?: ResourceList;
      /** The list of actions to execute when this alarm transitions into an ALARM state
from any other state. Each action is specified as an Amazon Resource Name (ARN). **/
      AlarmActions?: ResourceList;
      /** The list of actions to execute when this alarm transitions into an 
INSUFFICIENT_DATA state from any other state. Each action is specified as an
Amazon Resource Name (ARN). 

The current WSDL lists this attribute as UnknownActions. **/
      InsufficientDataActions?: ResourceList;
      /** The state value for the alarm. **/
      StateValue?: StateValue;
      /** A human-readable explanation for the alarm&#x27;s state. **/
      StateReason?: StateReason;
      /** An explanation for the alarm&#x27;s state in machine-readable JSON format **/
      StateReasonData?: StateReasonData;
      /** The time stamp of the last update to the alarm&#x27;s state. **/
      StateUpdatedTimestamp?: Timestamp;
      /** The name of the alarm&#x27;s metric. **/
      MetricName?: MetricName;
      /** The namespace of alarm&#x27;s associated metric. **/
      Namespace?: Namespace;
      /** The statistic to apply to the alarm&#x27;s associated metric. **/
      Statistic?: Statistic;
      /** The list of dimensions associated with the alarm&#x27;s associated metric. **/
      Dimensions?: Dimensions;
      /** The period in seconds over which the statistic is applied. **/
      Period?: Period;
      /** The unit of the alarm&#x27;s associated metric. **/
      Unit?: StandardUnit;
      /** The number of periods over which data is compared to the specified threshold. **/
      EvaluationPeriods?: EvaluationPeriods;
      /** The value against which the specified statistic is compared. **/
      Threshold?: Threshold;
      /** The arithmetic operation to use when comparing the specified Statistic and 
Threshold. The specified Statistic value is used as the first operand. **/
      ComparisonOperator?: ComparisonOperator;
    }
    export interface MetricDatum {
      /** The name of the metric. **/
      MetricName: MetricName;
      /** A list of dimensions associated with the metric. Note, when using the Dimensions
value in a query, you need to append .member.N to it (e.g.,
Dimensions.member.N). **/
      Dimensions?: Dimensions;
      /** The time stamp used for the metric in ISO 8601 Universal Coordinated Time (UTC)
format. If not specified, the default value is set to the time the metric data
was received. **/
      Timestamp?: Timestamp;
      /** The value for the metric.

Although the Value parameter accepts numbers of type Double, Amazon CloudWatch
rejects values that are either too small or too large. Values must be in the
range of 8.515920e-109 to 1.174271e+108 (Base 10) or 2e-360 to 2e360 (Base 2).
In addition, special values (e.g., NaN, +Infinity, -Infinity) are not supported. **/
      Value?: DatapointValue;
      /** A set of statistical values describing the metric. **/
      StatisticValues?: StatisticSet;
      /** The unit of the metric. **/
      Unit?: StandardUnit;
    }
    export interface MissingRequiredParameterException {
      /**  **/
      message?: AwsQueryErrorMessage;
    }
    export interface PutMetricAlarmInput {
      /** The descriptive name for the alarm. This name must be unique within the user&#x27;s
AWS account **/
      AlarmName: AlarmName;
      /** The description for the alarm. **/
      AlarmDescription?: AlarmDescription;
      /** Indicates whether or not actions should be executed during any changes to the
alarm&#x27;s state. **/
      ActionsEnabled?: ActionsEnabled;
      /** The list of actions to execute when this alarm transitions into an OK state
from any other state. Each action is specified as an Amazon Resource Name (ARN). 

Valid Values: arn:aws:automate:region (e.g., us-east-1):ec2:stop |
arn:aws:automate:region (e.g., us-east-1):ec2:terminate | arn:aws:automate:
region (e.g., us-east-1):ec2:recover

Valid Values (for use with IAM roles): arn:aws:swf:us-east-1:{customer-account
}:action/actions/AWS_EC2.InstanceId.Stop/1.0 | arn:aws:swf:us-east-1:{
customer-account}:action/actions/AWS_EC2.InstanceId.Terminate/1.0 |
arn:aws:swf:us-east-1:{customer-account
}:action/actions/AWS_EC2.InstanceId.Reboot/1.0

Note: You must create at least one stop, terminate, or reboot alarm using the
Amazon EC2 or CloudWatch console to create the EC2ActionsAccess IAM role for the
first time. After this IAM role is created, you can create stop, terminate, or
reboot alarms using the CLI. **/
      OKActions?: ResourceList;
      /** The list of actions to execute when this alarm transitions into an ALARM state
from any other state. Each action is specified as an Amazon Resource Name (ARN). 

Valid Values: arn:aws:automate:region (e.g., us-east-1):ec2:stop |
arn:aws:automate:region (e.g., us-east-1):ec2:terminate | arn:aws:automate:
region (e.g., us-east-1):ec2:recover

Valid Values (for use with IAM roles): arn:aws:swf:us-east-1:{customer-account
}:action/actions/AWS_EC2.InstanceId.Stop/1.0 | arn:aws:swf:us-east-1:{
customer-account}:action/actions/AWS_EC2.InstanceId.Terminate/1.0 |
arn:aws:swf:us-east-1:{customer-account
}:action/actions/AWS_EC2.InstanceId.Reboot/1.0

Note: You must create at least one stop, terminate, or reboot alarm using the
Amazon EC2 or CloudWatch console to create the EC2ActionsAccess IAM role for the
first time. After this IAM role is created, you can create stop, terminate, or
reboot alarms using the CLI. **/
      AlarmActions?: ResourceList;
      /** The list of actions to execute when this alarm transitions into an 
INSUFFICIENT_DATA state from any other state. Each action is specified as an
Amazon Resource Name (ARN). 

Valid Values: arn:aws:automate:region (e.g., us-east-1):ec2:stop |
arn:aws:automate:region (e.g., us-east-1):ec2:terminate | arn:aws:automate:
region (e.g., us-east-1):ec2:recover

Valid Values (for use with IAM roles): arn:aws:swf:us-east-1:{customer-account
}:action/actions/AWS_EC2.InstanceId.Stop/1.0 | arn:aws:swf:us-east-1:{
customer-account}:action/actions/AWS_EC2.InstanceId.Terminate/1.0 |
arn:aws:swf:us-east-1:{customer-account
}:action/actions/AWS_EC2.InstanceId.Reboot/1.0

Note: You must create at least one stop, terminate, or reboot alarm using the
Amazon EC2 or CloudWatch console to create the EC2ActionsAccess IAM role for the
first time. After this IAM role is created, you can create stop, terminate, or
reboot alarms using the CLI. **/
      InsufficientDataActions?: ResourceList;
      /** The name for the alarm&#x27;s associated metric. **/
      MetricName: MetricName;
      /** The namespace for the alarm&#x27;s associated metric. **/
      Namespace: Namespace;
      /** The statistic to apply to the alarm&#x27;s associated metric. **/
      Statistic: Statistic;
      /** The dimensions for the alarm&#x27;s associated metric. **/
      Dimensions?: Dimensions;
      /** The period in seconds over which the specified statistic is applied. **/
      Period: Period;
      /** The statistic&#x27;s unit of measure. For example, the units for the Amazon EC2
NetworkIn metric are Bytes because NetworkIn tracks the number of bytes that an
instance receives on all network interfaces. You can also specify a unit when
you create a custom metric. Units help provide conceptual meaning to your data.
Metric data points that specify a unit of measure, such as Percent, are
aggregated separately.

Note: If you specify a unit, you must use a unit that is appropriate for the
metric. Otherwise, this can cause an Amazon CloudWatch alarm to get stuck in the
INSUFFICIENT DATA state. **/
      Unit?: StandardUnit;
      /** The number of periods over which data is compared to the specified threshold. **/
      EvaluationPeriods: EvaluationPeriods;
      /** The value against which the specified statistic is compared. **/
      Threshold: Threshold;
      /** The arithmetic operation to use when comparing the specified Statistic and 
Threshold. The specified Statistic value is used as the first operand. **/
      ComparisonOperator: ComparisonOperator;
    }
    export interface PutMetricDataInput {
      /** The namespace for the metric data.

You cannot specify a namespace that begins with &quot;AWS/&quot;. Namespaces that begin
with &quot;AWS/&quot; are reserved for other Amazon Web Services products that send
metrics to Amazon CloudWatch. **/
      Namespace: Namespace;
      /** A list of data describing the metric. **/
      MetricData: MetricData;
    }
    export interface ResourceNotFound {
      /**  **/
      message?: ErrorMessage;
    }
    export interface SetAlarmStateInput {
      /** The descriptive name for the alarm. This name must be unique within the user&#x27;s
AWS account. The maximum length is 255 characters. **/
      AlarmName: AlarmName;
      /** The value of the state. **/
      StateValue: StateValue;
      /** The reason that this alarm is set to this specific state (in human-readable text
format) **/
      StateReason: StateReason;
      /** The reason that this alarm is set to this specific state (in machine-readable
JSON format) **/
      StateReasonData?: StateReasonData;
    }
    export interface StatisticSet {
      /** The number of samples used for the statistic set. **/
      SampleCount: DatapointValue;
      /** The sum of values for the sample set. **/
      Sum: DatapointValue;
      /** The minimum value of the sample set. **/
      Minimum: DatapointValue;
      /** The maximum value of the sample set. **/
      Maximum: DatapointValue;
    }
  }
}
