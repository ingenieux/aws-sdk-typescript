// DO NOT EDIT!
//
declare module "aws-sdk" {
    export class CloudTrail {
      constructor(options?: any);
      createTrail(params: CloudTrailCreateTrailRequest, callback: (err: CloudTrailMaximumNumberOfTrailsExceededException|CloudTrailTrailAlreadyExistsException|CloudTrailS3BucketDoesNotExistException|CloudTrailInsufficientS3BucketPolicyException|CloudTrailInsufficientSnsTopicPolicyException|CloudTrailInvalidS3BucketNameException|CloudTrailInvalidS3PrefixException|CloudTrailInvalidSnsTopicNameException|CloudTrailInvalidTrailNameException|CloudTrailInvalidCloudWatchLogsLogGroupArnException|CloudTrailInvalidCloudWatchLogsRoleArnException|CloudTrailCloudWatchLogsDeliveryUnavailableException|any, data: CloudTrailCreateTrailResponse|any) => void): void;
      deleteTrail(params: CloudTrailDeleteTrailRequest, callback: (err: CloudTrailTrailNotFoundException|CloudTrailInvalidTrailNameException|any, data: CloudTrailDeleteTrailResponse|any) => void): void;
      describeTrails(params: CloudTrailDescribeTrailsRequest, callback: (err: any, data: CloudTrailDescribeTrailsResponse|any) => void): void;
      getTrailStatus(params: CloudTrailGetTrailStatusRequest, callback: (err: CloudTrailTrailNotFoundException|CloudTrailInvalidTrailNameException|any, data: CloudTrailGetTrailStatusResponse|any) => void): void;
      lookupEvents(params: CloudTrailLookupEventsRequest, callback: (err: CloudTrailInvalidLookupAttributesException|CloudTrailInvalidTimeRangeException|CloudTrailInvalidMaxResultsException|CloudTrailInvalidNextTokenException|any, data: CloudTrailLookupEventsResponse|any) => void): void;
      startLogging(params: CloudTrailStartLoggingRequest, callback: (err: CloudTrailTrailNotFoundException|CloudTrailInvalidTrailNameException|any, data: CloudTrailStartLoggingResponse|any) => void): void;
      stopLogging(params: CloudTrailStopLoggingRequest, callback: (err: CloudTrailTrailNotFoundException|CloudTrailInvalidTrailNameException|any, data: CloudTrailStopLoggingResponse|any) => void): void;
      updateTrail(params: CloudTrailUpdateTrailRequest, callback: (err: CloudTrailS3BucketDoesNotExistException|CloudTrailInsufficientS3BucketPolicyException|CloudTrailInsufficientSnsTopicPolicyException|CloudTrailTrailNotFoundException|CloudTrailInvalidS3BucketNameException|CloudTrailInvalidS3PrefixException|CloudTrailInvalidSnsTopicNameException|CloudTrailInvalidTrailNameException|CloudTrailInvalidCloudWatchLogsLogGroupArnException|CloudTrailInvalidCloudWatchLogsRoleArnException|CloudTrailCloudWatchLogsDeliveryUnavailableException|any, data: CloudTrailUpdateTrailResponse|any) => void): void;
    }

    export type CloudTrailBoolean = boolean;
    export interface CloudTrailCloudWatchLogsDeliveryUnavailableException {
    }

    export interface CloudTrailCreateTrailRequest {
        Name: CloudTrailString;
        S3BucketName: CloudTrailString;
        S3KeyPrefix?: CloudTrailString;
        SnsTopicName?: CloudTrailString;
        IncludeGlobalServiceEvents?: CloudTrailBoolean;
        CloudWatchLogsLogGroupArn?: CloudTrailString;
        CloudWatchLogsRoleArn?: CloudTrailString;
    }

    export interface CloudTrailCreateTrailResponse {
        Name?: CloudTrailString;
        S3BucketName?: CloudTrailString;
        S3KeyPrefix?: CloudTrailString;
        SnsTopicName?: CloudTrailString;
        IncludeGlobalServiceEvents?: CloudTrailBoolean;
        CloudWatchLogsLogGroupArn?: CloudTrailString;
        CloudWatchLogsRoleArn?: CloudTrailString;
    }

    export type CloudTrailDate = number;
    export interface CloudTrailDeleteTrailRequest {
        Name: CloudTrailString;
    }

    export interface CloudTrailDeleteTrailResponse {
    }

    export interface CloudTrailDescribeTrailsRequest {
        trailNameList?: CloudTrailTrailNameList;
    }

    export interface CloudTrailDescribeTrailsResponse {
        trailList?: CloudTrailTrailList;
    }

    export interface CloudTrailEvent {
        EventId?: CloudTrailString;
        EventName?: CloudTrailString;
        EventTime?: CloudTrailDate;
        Username?: CloudTrailString;
        Resources?: CloudTrailResourceList;
        CloudTrailEvent?: CloudTrailString;
    }

    export type CloudTrailEventsList = Array<CloudTrailEvent>;
    export interface CloudTrailGetTrailStatusRequest {
        Name: CloudTrailString;
    }

    export interface CloudTrailGetTrailStatusResponse {
        IsLogging?: CloudTrailBoolean;
        LatestDeliveryError?: CloudTrailString;
        LatestNotificationError?: CloudTrailString;
        LatestDeliveryTime?: CloudTrailDate;
        LatestNotificationTime?: CloudTrailDate;
        StartLoggingTime?: CloudTrailDate;
        StopLoggingTime?: CloudTrailDate;
        LatestCloudWatchLogsDeliveryError?: CloudTrailString;
        LatestCloudWatchLogsDeliveryTime?: CloudTrailDate;
    }

    export interface CloudTrailInsufficientS3BucketPolicyException {
    }

    export interface CloudTrailInsufficientSnsTopicPolicyException {
    }

    export interface CloudTrailInvalidCloudWatchLogsLogGroupArnException {
    }

    export interface CloudTrailInvalidCloudWatchLogsRoleArnException {
    }

    export interface CloudTrailInvalidLookupAttributesException {
    }

    export interface CloudTrailInvalidMaxResultsException {
    }

    export interface CloudTrailInvalidNextTokenException {
    }

    export interface CloudTrailInvalidS3BucketNameException {
    }

    export interface CloudTrailInvalidS3PrefixException {
    }

    export interface CloudTrailInvalidSnsTopicNameException {
    }

    export interface CloudTrailInvalidTimeRangeException {
    }

    export interface CloudTrailInvalidTrailNameException {
    }

    export interface CloudTrailLookupAttribute {
        AttributeKey: CloudTrailLookupAttributeKey;
        AttributeValue: CloudTrailString;
    }

    export type CloudTrailLookupAttributeKey = string;
    export type CloudTrailLookupAttributesList = Array<CloudTrailLookupAttribute>;
    export interface CloudTrailLookupEventsRequest {
        LookupAttributes?: CloudTrailLookupAttributesList;
        StartTime?: CloudTrailDate;
        EndTime?: CloudTrailDate;
        MaxResults?: CloudTrailMaxResults;
        NextToken?: CloudTrailNextToken;
    }

    export interface CloudTrailLookupEventsResponse {
        Events?: CloudTrailEventsList;
        NextToken?: CloudTrailNextToken;
    }

    export type CloudTrailMaxResults = number;
    export interface CloudTrailMaximumNumberOfTrailsExceededException {
    }

    export type CloudTrailNextToken = string;
    export interface CloudTrailResource {
        ResourceType?: CloudTrailString;
        ResourceName?: CloudTrailString;
    }

    export type CloudTrailResourceList = Array<CloudTrailResource>;
    export interface CloudTrailS3BucketDoesNotExistException {
    }

    export interface CloudTrailStartLoggingRequest {
        Name: CloudTrailString;
    }

    export interface CloudTrailStartLoggingResponse {
    }

    export interface CloudTrailStopLoggingRequest {
        Name: CloudTrailString;
    }

    export interface CloudTrailStopLoggingResponse {
    }

    export type CloudTrailString = string;
    export interface CloudTrailTrail {
        Name?: CloudTrailString;
        S3BucketName?: CloudTrailString;
        S3KeyPrefix?: CloudTrailString;
        SnsTopicName?: CloudTrailString;
        IncludeGlobalServiceEvents?: CloudTrailBoolean;
        CloudWatchLogsLogGroupArn?: CloudTrailString;
        CloudWatchLogsRoleArn?: CloudTrailString;
    }

    export interface CloudTrailTrailAlreadyExistsException {
    }

    export type CloudTrailTrailList = Array<CloudTrailTrail>;
    export type CloudTrailTrailNameList = Array<CloudTrailString>;
    export interface CloudTrailTrailNotFoundException {
    }

    export interface CloudTrailUpdateTrailRequest {
        Name: CloudTrailString;
        S3BucketName?: CloudTrailString;
        S3KeyPrefix?: CloudTrailString;
        SnsTopicName?: CloudTrailString;
        IncludeGlobalServiceEvents?: CloudTrailBoolean;
        CloudWatchLogsLogGroupArn?: CloudTrailString;
        CloudWatchLogsRoleArn?: CloudTrailString;
    }

    export interface CloudTrailUpdateTrailResponse {
        Name?: CloudTrailString;
        S3BucketName?: CloudTrailString;
        S3KeyPrefix?: CloudTrailString;
        SnsTopicName?: CloudTrailString;
        IncludeGlobalServiceEvents?: CloudTrailBoolean;
        CloudWatchLogsLogGroupArn?: CloudTrailString;
        CloudWatchLogsRoleArn?: CloudTrailString;
    }

}
