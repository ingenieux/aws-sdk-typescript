// Type definitions for aws-sdk - AWS X-Ray
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

// COMMENTED <reference path="./aws-sdk.d.ts" />

declare module "aws-sdk" {

 /**
   * apiVersion: 2016-04-12
   * endpointPrefix: xray
   * serviceAbbreviation: 
   * signatureVersion: v4
   * protocol: rest-json
   *
   * AWS X-Ray provides APIs for managing debug traces and retrieving service maps
and other data created by processing those traces.
   *
   */
  export class XRay extends Service {
    constructor(options?: any);
    endpoint: Endpoint;
    /**
     * Retrieves a list of traces specified by ID. Each trace is a collection of
segment documents that originates from a single request. Use GetTraceSummaries 
to get a list of trace IDs.
     *
     * @error InvalidRequestException   
     * @error ThrottledException   
     */
    batchGetTraces(params: XRay.BatchGetTracesRequest, callback?: (err: XRay.InvalidRequestException|XRay.ThrottledException|any, data: XRay.BatchGetTracesResult|any) => void): Request<XRay.BatchGetTracesResult|any,XRay.InvalidRequestException|XRay.ThrottledException|any>;
    /**
     * Retrieves a document that describes services that process incoming requests, and
downstream services that they call as a result. Root services process incoming
requests and make calls to downstream services. Root services are applications
that use the AWS X-Ray SDK. Downstream services can be other applications, AWS
resources, HTTP web APIs, or SQL databases.
     *
     * @error InvalidRequestException   
     * @error ThrottledException   
     */
    getServiceGraph(params: XRay.GetServiceGraphRequest, callback?: (err: XRay.InvalidRequestException|XRay.ThrottledException|any, data: XRay.GetServiceGraphResult|any) => void): Request<XRay.GetServiceGraphResult|any,XRay.InvalidRequestException|XRay.ThrottledException|any>;
    /**
     * Retrieves a service graph for one or more specific trace IDs.
     *
     * @error InvalidRequestException   
     * @error ThrottledException   
     */
    getTraceGraph(params: XRay.GetTraceGraphRequest, callback?: (err: XRay.InvalidRequestException|XRay.ThrottledException|any, data: XRay.GetTraceGraphResult|any) => void): Request<XRay.GetTraceGraphResult|any,XRay.InvalidRequestException|XRay.ThrottledException|any>;
    /**
     * Retrieves IDs and metadata for traces available for a specified time frame using
an optional filter. To get the full traces, pass the trace IDs to BatchGetTraces 
.
     *
     * @error InvalidRequestException   
     * @error ThrottledException   
     */
    getTraceSummaries(params: XRay.GetTraceSummariesRequest, callback?: (err: XRay.InvalidRequestException|XRay.ThrottledException|any, data: XRay.GetTraceSummariesResult|any) => void): Request<XRay.GetTraceSummariesResult|any,XRay.InvalidRequestException|XRay.ThrottledException|any>;
    /**
     * Used by the AWS X-Ray daemon to upload telemetry.
     *
     * @error InvalidRequestException   
     * @error ThrottledException   
     */
    putTelemetryRecords(params: XRay.PutTelemetryRecordsRequest, callback?: (err: XRay.InvalidRequestException|XRay.ThrottledException|any, data: XRay.PutTelemetryRecordsResult|any) => void): Request<XRay.PutTelemetryRecordsResult|any,XRay.InvalidRequestException|XRay.ThrottledException|any>;
    /**
     * Uploads segment documents to AWS X-Ray. The X-Ray SDK generates segment
documents and sends them to the X-Ray daemon, which uploads them in batches. A
segment document can be a completed segment, an in-progress segment, or an array
of subsegments.
     *
     * @error InvalidRequestException   
     * @error ThrottledException   
     */
    putTraceSegments(params: XRay.PutTraceSegmentsRequest, callback?: (err: XRay.InvalidRequestException|XRay.ThrottledException|any, data: XRay.PutTraceSegmentsResult|any) => void): Request<XRay.PutTraceSegmentsResult|any,XRay.InvalidRequestException|XRay.ThrottledException|any>;

  }

  export module XRay {
    
    export type AliasList = Alias[];
    
    export type AliasNames = String[];
    
    export type AnnotationKey = string;
    
    export type Annotations = {[key:string]: ValuesWithServiceIds};
    
    export type Double = number;
    
    export type EdgeList = Edge[];
    
    export type FilterExpression = string;
    
    export type Histogram = HistogramEntry[];
    
    export type Integer = number;
    
    export type NullableBoolean = boolean;
    
    export type NullableDouble = number;
    
    export type NullableInteger = number;
    
    export type NullableLong = number;
    
    export type SegmentDocument = string;
    
    export type SegmentId = string;
    
    export type SegmentList = Segment[];
    
    export type ServiceIds = ServiceId[];
    
    export type ServiceList = Service[];
    
    export type ServiceNames = String[];
    
    export type String = string;
    
    export type TelemetryRecordList = TelemetryRecord[];
    
    export type Timestamp = number;
    
    export type TraceId = string;
    
    export type TraceIdList = TraceId[];
    
    export type TraceList = Trace[];
    
    export type TraceSegmentDocument = string;
    
    export type TraceSegmentDocumentList = TraceSegmentDocument[];
    
    export type TraceSummaryList = TraceSummary[];
    
    export type TraceUsers = TraceUser[];
    
    export type UnprocessedTraceIdList = TraceId[];
    
    export type UnprocessedTraceSegmentList = UnprocessedTraceSegment[];
    
    export type ValuesWithServiceIds = ValueWithServiceIds[];

    export interface Alias {
        /** The canonical name of the alias. **/
        Name?: String;
        /** A list of names for the alias, including the canonical name. **/
        Names?: AliasNames;
        /** The type of the alias. **/
        Type?: String;
    }
    export interface AnnotationValue {
        /** Value for a Number annotation. **/
        NumberValue?: NullableDouble;
        /** Value for a Boolean annotation. **/
        BooleanValue?: NullableBoolean;
        /** Value for a String annotation. **/
        StringValue?: String;
    }
    export interface BackendConnectionErrors {
        /**  **/
        TimeoutCount?: NullableInteger;
        /**  **/
        ConnectionRefusedCount?: NullableInteger;
        /**  **/
        HTTPCode4XXCount?: NullableInteger;
        /**  **/
        HTTPCode5XXCount?: NullableInteger;
        /**  **/
        UnknownHostCount?: NullableInteger;
        /**  **/
        OtherCount?: NullableInteger;
    }
    export interface BatchGetTracesRequest {
        /** Specify the trace IDs of requests for which to retrieve segments. **/
        TraceIds: TraceIdList;
        /** Pagination token. Not used. **/
        NextToken?: String;
    }
    export interface BatchGetTracesResult {
        /** Full traces for the specified requests. **/
        Traces?: TraceList;
        /** Trace IDs of requests that haven&#x27;t been processed. **/
        UnprocessedTraceIds?: UnprocessedTraceIdList;
        /** Pagination token. Not used. **/
        NextToken?: String;
    }
    export interface Edge {
        /** Identifier of the edge. Unique within a service map. **/
        ReferenceId?: NullableInteger;
        /** The start time of the first segment on the edge. **/
        StartTime?: Timestamp;
        /** The end time of the last segment on the edge. **/
        EndTime?: Timestamp;
        /** Response statistics for segments on the edge. **/
        SummaryStatistics?: EdgeStatistics;
        /** Histogram describing the prominence of response times on the edge. **/
        ResponseTimeHistogram?: Histogram;
        /** Aliases for the edge. **/
        Aliases?: AliasList;
    }
    export interface EdgeStatistics {
        /** The number of requests that completed with a 2xx Success status code. **/
        OkCount?: NullableLong;
        /** Information about requests that failed with a 4xx Client Error status code. **/
        ErrorStatistics?: ErrorStatistics;
        /** Information about requests that failed with a 5xx Server Error status code. **/
        FaultStatistics?: FaultStatistics;
        /** The total number of completed requests. **/
        TotalCount?: NullableLong;
        /** The aggregate response time of completed requests. **/
        TotalResponseTime?: NullableDouble;
    }
    export interface ErrorStatistics {
        /** The number of requests that failed with a 419 throttling status code. **/
        ThrottleCount?: NullableLong;
        /** The number of requests that failed with untracked 4xx Client Error status codes. **/
        OtherCount?: NullableLong;
        /** The total number of requests that failed with a 4xx Client Error status code. **/
        TotalCount?: NullableLong;
    }
    export interface FaultStatistics {
        /** The number of requests that failed with untracked 5xx Server Error status codes. **/
        OtherCount?: NullableLong;
        /** The total number of requests that failed with a 5xx Server Error status code. **/
        TotalCount?: NullableLong;
    }
    export interface GetServiceGraphRequest {
        /** The start of the time frame for which to generate a graph. **/
        StartTime: Timestamp;
        /** The end of the time frame for which to generate a graph. **/
        EndTime: Timestamp;
        /** Pagination token. Not used. **/
        NextToken?: String;
    }
    export interface GetServiceGraphResult {
        /** The start of the time frame for which the graph was generated. **/
        StartTime?: Timestamp;
        /** The end of the time frame for which the graph was generated. **/
        EndTime?: Timestamp;
        /** The services that have processed a traced request during the specified time
frame. **/
        Services?: ServiceList;
        /** Pagination token. Not used. **/
        NextToken?: String;
    }
    export interface GetTraceGraphRequest {
        /** Trace IDs of requests for which to generate a service graph. **/
        TraceIds: TraceIdList;
        /** Pagination token. Not used. **/
        NextToken?: String;
    }
    export interface GetTraceGraphResult {
        /** The services that have processed one of the specified requests. **/
        Services?: ServiceList;
        /** Pagination token. Not used. **/
        NextToken?: String;
    }
    export interface GetTraceSummariesRequest {
        /** The start of the time frame for which to retrieve traces. **/
        StartTime: Timestamp;
        /** The end of the time frame for which to retrieve traces. **/
        EndTime: Timestamp;
        /** Set to true to get summaries for only a subset of available traces. **/
        Sampling?: NullableBoolean;
        /** Specify a filter expression to retrieve trace summaries for services or requests
that meet certain requirements. **/
        FilterExpression?: FilterExpression;
        /** Specify the pagination token returned by a previous request to retrieve the next
page of results. **/
        NextToken?: String;
    }
    export interface GetTraceSummariesResult {
        /** Trace IDs and metadata for traces that were found in the specified time frame. **/
        TraceSummaries?: TraceSummaryList;
        /** The start time of this page of results. **/
        ApproximateTime?: Timestamp;
        /** The number of traces that were processed to get this set of summaries. **/
        TracesProcessedCount?: NullableLong;
        /** If the requested time frame contained more than one page of results, you can use
this token to retrieve the next page. The first page contains the most most
recent results, closest to the end of the time frame. **/
        NextToken?: String;
    }
    export interface HistogramEntry {
        /** The value of the entry. **/
        Value?: Double;
        /** The prevalence of the entry. **/
        Count?: Integer;
    }
    export interface Http {
        /** The request URL. **/
        HttpURL?: String;
        /** The response status. **/
        HttpStatus?: NullableInteger;
        /** The request method. **/
        HttpMethod?: String;
        /** The request&#x27;s user agent string. **/
        UserAgent?: String;
        /** The IP address of the requestor. **/
        ClientIp?: String;
    }
    export interface InvalidRequestException {
    }
    export interface PutTelemetryRecordsRequest {
        /**  **/
        TelemetryRecords: TelemetryRecordList;
        /**  **/
        EC2InstanceId?: String;
        /**  **/
        Hostname?: String;
        /**  **/
        ResourceARN?: String;
    }
    export interface PutTelemetryRecordsResult {
    }
    export interface PutTraceSegmentsRequest {
        /** A JSON document defining one or more segments or subsegments. Segments must
include the following fields.

Required Segment Document Fields

 &amp;#42; name - The name of the service that handled the request.
   
   
 * id - A 64-bit identifier for the segment, unique among segments in the same
   trace, in 16 hexadecimal digits.
   
   
 * trace_id - A unique identifier that connects all segments and subsegments
   originating from a single client request.
   
   
 * start_time - Time the segment or subsegment was created, in floating point
   seconds in epoch time, accurate to milliseconds. For example, 1480615200.010 
   or 1.480615200010E9 .
   
   
 * end_time - Time the segment or subsegment was closed. For example, 
   1480615200.090 or 1.480615200090E9 . Specify either an end_time or 
   in_progress .
   
   
 * in_progress - Set to true instead of specifying an end_time to record that a
   segment has been started, but is not complete. Send an in progress segment
   when your application receives a request that will take a long time to serve,
   to trace the fact that the request was received. When the response is sent,
   send the complete segment to overwrite the in-progress segment.
   
   

A trace_id consists of three numbers separated by hyphens. For example,
1-58406520-a006649127e371903a2de979. This includes:

Trace ID Format

 * The version number, i.e. 1 .
   
   
 * The time of the original request, in Unix epoch time, in 8 hexadecimal
   digits. For example, 10:00AM December 2nd, 2016 PST in epoch time is 
   1480615200 seconds, or 58406520 in hexadecimal.
   
   
 * A 96-bit identifier for the trace, globally unique, in 24 hexadecimal digits. **/
        TraceSegmentDocuments: TraceSegmentDocumentList;
    }
    export interface PutTraceSegmentsResult {
        /** Segments that failed processing. **/
        UnprocessedTraceSegments?: UnprocessedTraceSegmentList;
    }
    export interface Segment {
        /** The segment&#x27;s ID. **/
        Id?: SegmentId;
        /** The segment document. **/
        Document?: SegmentDocument;
    }
    export interface Service {
        /** Identifier for the service. Unique within the service map. **/
        ReferenceId?: NullableInteger;
        /** The canonical name of the service. **/
        Name?: String;
        /** A list of names for the service, including the canonical name. **/
        Names?: ServiceNames;
        /** Indicates that the service was the first service to process a request. **/
        Root?: NullableBoolean;
        /** Identifier of the AWS account in which the service runs. **/
        AccountId?: String;
        /** The type of service.

 &amp;#42; AWS Resource - The type of an AWS resource. For example, AWS::EC2::Instance 
   for a application running on Amazon EC2 or AWS::DynamoDB::Table for an Amazon
   DynamoDB table that the application used.
   
   
 * AWS Service - The type of an AWS service. For example, AWS::DynamoDB for
   downstream calls to Amazon DynamoDB that didn&#x27;t target a specific table.
   
   
 * client - Represents the clients that sent requests to a root service.
   
   
 * remote - A downstream service of indeterminate type. **/
        Type?: String;
        /** The service&#x27;s state. **/
        State?: String;
        /** The start time of the first segment that the service generated. **/
        StartTime?: Timestamp;
        /** The end time of the last segment that the service generated. **/
        EndTime?: Timestamp;
        /** Connections to downstream services. **/
        Edges?: EdgeList;
        /** Aggregated statistics for the service. **/
        SummaryStatistics?: ServiceStatistics;
        /** Histogram mapping the spread of trace durations **/
        DurationHistogram?: Histogram;
    }
    export interface ServiceId {
        /**  **/
        Name?: String;
        /**  **/
        Names?: ServiceNames;
        /**  **/
        AccountId?: String;
        /**  **/
        Type?: String;
    }
    export interface ServiceStatistics {
        /** The number of requests that completed with a 2xx Success status code. **/
        OkCount?: NullableLong;
        /** Information about requests that failed with a 4xx Client Error status code. **/
        ErrorStatistics?: ErrorStatistics;
        /** Information about requests that failed with a 5xx Server Error status code. **/
        FaultStatistics?: FaultStatistics;
        /** The total number of completed requests. **/
        TotalCount?: NullableLong;
        /** The aggregate response time of completed requests. **/
        TotalResponseTime?: NullableDouble;
    }
    export interface TelemetryRecord {
        /**  **/
        Timestamp?: Timestamp;
        /**  **/
        SegmentsReceivedCount?: NullableInteger;
        /**  **/
        SegmentsSentCount?: NullableInteger;
        /**  **/
        SegmentsSpilloverCount?: NullableInteger;
        /**  **/
        SegmentsRejectedCount?: NullableInteger;
        /**  **/
        BackendConnectionErrors?: BackendConnectionErrors;
    }
    export interface ThrottledException {
    }
    export interface Trace {
        /** The unique identifier for the request that generated the trace&#x27;s segments and
subsegments. **/
        Id?: TraceId;
        /** The length of time in seconds between the start time of the root segment and the
end time of the last segment that completed. **/
        Duration?: NullableDouble;
        /** Segment documents for the segments and subsegments that comprise the trace. **/
        Segments?: SegmentList;
    }
    export interface TraceSummary {
        /** The unique identifier for the request that generated the trace&#x27;s segments and
subsegments. **/
        Id?: TraceId;
        /** The length of time in seconds between the start time of the root segment and the
end time of the last segment that completed. **/
        Duration?: NullableDouble;
        /** The length of time in seconds between the start and end times of the root
segment. If the service performs work asynchronously, the response time measures
the time before the response is sent to the user, while the duration measures
the amount of time before the last traced activity completes. **/
        ResponseTime?: NullableDouble;
        /** One or more of the segment documents has a 500 series error. **/
        HasFault?: NullableBoolean;
        /** One or more of the segment documents has a 400 series error. **/
        HasError?: NullableBoolean;
        /** One or more of the segment documents has a 429 throttling error. **/
        HasThrottle?: NullableBoolean;
        /** One or more of the segment documents is in progress. **/
        IsPartial?: NullableBoolean;
        /** Information about the HTTP request served by the trace. **/
        Http?: Http;
        /** Annotations from the trace&#x27;s segment documents. **/
        Annotations?: Annotations;
        /** Users from the trace&#x27;s segment documents. **/
        Users?: TraceUsers;
        /** Service IDs from the trace&#x27;s segment documents. **/
        ServiceIds?: ServiceIds;
    }
    export interface TraceUser {
        /** The user&#x27;s name. **/
        UserName?: String;
        /** Services that the user&#x27;s request hit. **/
        ServiceIds?: ServiceIds;
    }
    export interface UnprocessedTraceSegment {
        /** The segment&#x27;s ID. **/
        Id?: String;
        /** The error that caused processing to fail. **/
        ErrorCode?: String;
        /** The error message. **/
        Message?: String;
    }
    export interface ValueWithServiceIds {
        /** Values of the annotation. **/
        AnnotationValue?: AnnotationValue;
        /** Services to which the annotation applies. **/
        ServiceIds?: ServiceIds;
    }
  }
}
