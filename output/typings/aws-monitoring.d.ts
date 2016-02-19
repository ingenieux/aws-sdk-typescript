// Type definitions for aws-sdk - Amazon CloudWatch
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

///<reference path="./aws-sdk-common.d.ts" />

declare module "aws-sdk" {

    /*
     * apiVersion: 2010-08-01
     * endpointPrefix: monitoring
     * serviceAbbreviation: CloudWatch
     * signatureVersion: v4
     * protocol: query
     */
    export class CloudWatch extends Service {
      constructor(options?: any);
      endpoint: Endpoint;
      deleteAlarms(params: CloudWatch.DeleteAlarmsInput, callback?: (err: CloudWatch.ResourceNotFound|any, data: any) => void): Request;
      describeAlarmHistory(params: CloudWatch.DescribeAlarmHistoryInput, callback?: (err: CloudWatch.InvalidNextToken|any, data: CloudWatch.DescribeAlarmHistoryOutput|any) => void): Request;
      describeAlarms(params: CloudWatch.DescribeAlarmsInput, callback?: (err: CloudWatch.InvalidNextToken|any, data: CloudWatch.DescribeAlarmsOutput|any) => void): Request;
      describeAlarmsForMetric(params: CloudWatch.DescribeAlarmsForMetricInput, callback?: (err: any, data: CloudWatch.DescribeAlarmsForMetricOutput|any) => void): Request;
      disableAlarmActions(params: CloudWatch.DisableAlarmActionsInput, callback?: (err: any, data: any) => void): Request;
      enableAlarmActions(params: CloudWatch.EnableAlarmActionsInput, callback?: (err: any, data: any) => void): Request;
      getMetricStatistics(params: CloudWatch.GetMetricStatisticsInput, callback?: (err: CloudWatch.InvalidParameterValueException|CloudWatch.MissingRequiredParameterException|CloudWatch.InvalidParameterCombinationException|CloudWatch.InternalServiceFault|any, data: CloudWatch.GetMetricStatisticsOutput|any) => void): Request;
      listMetrics(params: CloudWatch.ListMetricsInput, callback?: (err: CloudWatch.InternalServiceFault|CloudWatch.InvalidParameterValueException|any, data: CloudWatch.ListMetricsOutput|any) => void): Request;
      putMetricAlarm(params: CloudWatch.PutMetricAlarmInput, callback?: (err: CloudWatch.LimitExceededFault|any, data: any) => void): Request;
      putMetricData(params: CloudWatch.PutMetricDataInput, callback?: (err: CloudWatch.InvalidParameterValueException|CloudWatch.MissingRequiredParameterException|CloudWatch.InvalidParameterCombinationException|CloudWatch.InternalServiceFault|any, data: any) => void): Request;
      setAlarmState(params: CloudWatch.SetAlarmStateInput, callback?: (err: CloudWatch.ResourceNotFound|CloudWatch.InvalidFormatFault|any, data: any) => void): Request;

    }

    export module CloudWatch {
        export type ActionPrefix = string;    // max: 1024, min: 1
        export type ActionsEnabled = boolean;
        export type AlarmArn = string;    // max: 1600, min: 1
        export type AlarmDescription = string;    // max: 1024
        export type AlarmHistoryItems = AlarmHistoryItem[];
        export type AlarmName = string;    // max: 255, min: 1
        export type AlarmNamePrefix = string;    // max: 255, min: 1
        export type AlarmNames = AlarmName[];    // max: 100
        export type AwsQueryErrorMessage = string;
        export type ComparisonOperator = string;
        export type DatapointValue = number;
        export type Datapoints = Datapoint[];
        export type DimensionFilters = DimensionFilter[];    // max: 10
        export type DimensionName = string;    // max: 255, min: 1
        export type DimensionValue = string;    // max: 255, min: 1
        export type Dimensions = Dimension[];    // max: 10
        export type ErrorMessage = string;    // max: 255, min: 1
        export type EvaluationPeriods = number;    // min: 1
        export type FaultDescription = string;
        export type HistoryData = string;    // max: 4095, min: 1
        export type HistoryItemType = string;
        export type HistorySummary = string;    // max: 255, min: 1
        export type MaxRecords = number;    // max: 100, min: 1
        export type MetricAlarms = MetricAlarm[];
        export type MetricData = MetricDatum[];
        export type MetricLabel = string;
        export type MetricName = string;    // max: 255, min: 1
        export type Metrics = Metric[];
        export type Namespace = string;    // pattern: &quot;[^:].*&quot;, max: 255, min: 1
        export type NextToken = string;    // max: 1024
        export type Period = number;    // min: 60
        export type ResourceList = ResourceName[];    // max: 5
        export type ResourceName = string;    // max: 1024, min: 1
        export type StandardUnit = string;
        export type StateReason = string;    // max: 1023
        export type StateReasonData = string;    // max: 4000
        export type StateValue = string;
        export type Statistic = string;
        export type Statistics = Statistic[];    // max: 5, min: 1
        export type Threshold = number;
        export type Timestamp = number;

        export interface AlarmHistoryItem {
            AlarmName?: AlarmName;
            Timestamp?: Timestamp;
            HistoryItemType?: HistoryItemType;
            HistorySummary?: HistorySummary;
            HistoryData?: HistoryData;
        }
        export interface Datapoint {
            Timestamp?: Timestamp;
            SampleCount?: DatapointValue;
            Average?: DatapointValue;
            Sum?: DatapointValue;
            Minimum?: DatapointValue;
            Maximum?: DatapointValue;
            Unit?: StandardUnit;
        }
        export interface DeleteAlarmsInput {
            AlarmNames: AlarmNames;
        }
        export interface DescribeAlarmHistoryInput {
            AlarmName?: AlarmName;
            HistoryItemType?: HistoryItemType;
            StartDate?: Timestamp;
            EndDate?: Timestamp;
            MaxRecords?: MaxRecords;
            NextToken?: NextToken;
        }
        export interface DescribeAlarmHistoryOutput {
            AlarmHistoryItems?: AlarmHistoryItems;
            NextToken?: NextToken;
        }
        export interface DescribeAlarmsForMetricInput {
            MetricName: MetricName;
            Namespace: Namespace;
            Statistic?: Statistic;
            Dimensions?: Dimensions;
            Period?: Period;
            Unit?: StandardUnit;
        }
        export interface DescribeAlarmsForMetricOutput {
            MetricAlarms?: MetricAlarms;
        }
        export interface DescribeAlarmsInput {
            AlarmNames?: AlarmNames;
            AlarmNamePrefix?: AlarmNamePrefix;
            StateValue?: StateValue;
            ActionPrefix?: ActionPrefix;
            MaxRecords?: MaxRecords;
            NextToken?: NextToken;
        }
        export interface DescribeAlarmsOutput {
            MetricAlarms?: MetricAlarms;
            NextToken?: NextToken;
        }
        export interface Dimension {
            Name: DimensionName;
            Value: DimensionValue;
        }
        export interface DimensionFilter {
            Name: DimensionName;
            Value?: DimensionValue;
        }
        export interface DisableAlarmActionsInput {
            AlarmNames: AlarmNames;
        }
        export interface EnableAlarmActionsInput {
            AlarmNames: AlarmNames;
        }
        export interface GetMetricStatisticsInput {
            Namespace: Namespace;
            MetricName: MetricName;
            Dimensions?: Dimensions;
            StartTime: Timestamp;
            EndTime: Timestamp;
            Period: Period;
            Statistics: Statistics;
            Unit?: StandardUnit;
        }
        export interface GetMetricStatisticsOutput {
            Label?: MetricLabel;
            Datapoints?: Datapoints;
        }
        export interface InternalServiceFault {
            Message?: FaultDescription;
        }
        export interface InvalidFormatFault {
            message?: ErrorMessage;
        }
        export interface InvalidNextToken {
            message?: ErrorMessage;
        }
        export interface InvalidParameterCombinationException {
            message?: AwsQueryErrorMessage;
        }
        export interface InvalidParameterValueException {
            message?: AwsQueryErrorMessage;
        }
        export interface LimitExceededFault {
            message?: ErrorMessage;
        }
        export interface ListMetricsInput {
            Namespace?: Namespace;
            MetricName?: MetricName;
            Dimensions?: DimensionFilters;
            NextToken?: NextToken;
        }
        export interface ListMetricsOutput {
            Metrics?: Metrics;
            NextToken?: NextToken;
        }
        export interface Metric {
            Namespace?: Namespace;
            MetricName?: MetricName;
            Dimensions?: Dimensions;
        }
        export interface MetricAlarm {
            AlarmName?: AlarmName;
            AlarmArn?: AlarmArn;
            AlarmDescription?: AlarmDescription;
            AlarmConfigurationUpdatedTimestamp?: Timestamp;
            ActionsEnabled?: ActionsEnabled;
            OKActions?: ResourceList;
            AlarmActions?: ResourceList;
            InsufficientDataActions?: ResourceList;
            StateValue?: StateValue;
            StateReason?: StateReason;
            StateReasonData?: StateReasonData;
            StateUpdatedTimestamp?: Timestamp;
            MetricName?: MetricName;
            Namespace?: Namespace;
            Statistic?: Statistic;
            Dimensions?: Dimensions;
            Period?: Period;
            Unit?: StandardUnit;
            EvaluationPeriods?: EvaluationPeriods;
            Threshold?: Threshold;
            ComparisonOperator?: ComparisonOperator;
        }
        export interface MetricDatum {
            MetricName: MetricName;
            Dimensions?: Dimensions;
            Timestamp?: Timestamp;
            Value?: DatapointValue;
            StatisticValues?: StatisticSet;
            Unit?: StandardUnit;
        }
        export interface MissingRequiredParameterException {
            message?: AwsQueryErrorMessage;
        }
        export interface PutMetricAlarmInput {
            AlarmName: AlarmName;
            AlarmDescription?: AlarmDescription;
            ActionsEnabled?: ActionsEnabled;
            OKActions?: ResourceList;
            AlarmActions?: ResourceList;
            InsufficientDataActions?: ResourceList;
            MetricName: MetricName;
            Namespace: Namespace;
            Statistic: Statistic;
            Dimensions?: Dimensions;
            Period: Period;
            Unit?: StandardUnit;
            EvaluationPeriods: EvaluationPeriods;
            Threshold: Threshold;
            ComparisonOperator: ComparisonOperator;
        }
        export interface PutMetricDataInput {
            Namespace: Namespace;
            MetricData: MetricData;
        }
        export interface ResourceNotFound {
            message?: ErrorMessage;
        }
        export interface SetAlarmStateInput {
            AlarmName: AlarmName;
            StateValue: StateValue;
            StateReason: StateReason;
            StateReasonData?: StateReasonData;
        }
        export interface StatisticSet {
            SampleCount: DatapointValue;
            Sum: DatapointValue;
            Minimum: DatapointValue;
            Maximum: DatapointValue;
        }

    }
}
