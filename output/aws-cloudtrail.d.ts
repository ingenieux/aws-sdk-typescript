// DO NOT EDIT!
//
declare module "aws-sdk" {
    export class CloudTrail {
      constructor(options?: any);
      createTrail(params: CreateTrailRequest, callback: (err: MaximumNumberOfTrailsExceededException|TrailAlreadyExistsException|S3BucketDoesNotExistException|InsufficientS3BucketPolicyException|InsufficientSnsTopicPolicyException|InvalidS3BucketNameException|InvalidS3PrefixException|InvalidSnsTopicNameException|InvalidTrailNameException|InvalidCloudWatchLogsLogGroupArnException|InvalidCloudWatchLogsRoleArnException|CloudWatchLogsDeliveryUnavailableException|any, data: CreateTrailResponse|any) => void): void;
      deleteTrail(params: DeleteTrailRequest, callback: (err: TrailNotFoundException|InvalidTrailNameException|any, data: DeleteTrailResponse|any) => void): void;
      describeTrails(params: DescribeTrailsRequest, callback: (err: any, data: DescribeTrailsResponse|any) => void): void;
      getTrailStatus(params: GetTrailStatusRequest, callback: (err: TrailNotFoundException|InvalidTrailNameException|any, data: GetTrailStatusResponse|any) => void): void;
      lookupEvents(params: LookupEventsRequest, callback: (err: InvalidLookupAttributesException|InvalidTimeRangeException|InvalidMaxResultsException|InvalidNextTokenException|any, data: LookupEventsResponse|any) => void): void;
      startLogging(params: StartLoggingRequest, callback: (err: TrailNotFoundException|InvalidTrailNameException|any, data: StartLoggingResponse|any) => void): void;
      stopLogging(params: StopLoggingRequest, callback: (err: TrailNotFoundException|InvalidTrailNameException|any, data: StopLoggingResponse|any) => void): void;
      updateTrail(params: UpdateTrailRequest, callback: (err: S3BucketDoesNotExistException|InsufficientS3BucketPolicyException|InsufficientSnsTopicPolicyException|TrailNotFoundException|InvalidS3BucketNameException|InvalidS3PrefixException|InvalidSnsTopicNameException|InvalidTrailNameException|InvalidCloudWatchLogsLogGroupArnException|InvalidCloudWatchLogsRoleArnException|CloudWatchLogsDeliveryUnavailableException|any, data: UpdateTrailResponse|any) => void): void;
    }

    export type Boolean = boolean;

    export interface CloudWatchLogsDeliveryUnavailableException {
    }


    export interface CreateTrailRequest {
      Name: String;
      S3BucketName: String;
      S3KeyPrefix?: String;
      SnsTopicName?: String;
      IncludeGlobalServiceEvents?: Boolean;
      CloudWatchLogsLogGroupArn?: String;
      CloudWatchLogsRoleArn?: String;
    }


    export interface CreateTrailResponse {
      Name?: String;
      S3BucketName?: String;
      S3KeyPrefix?: String;
      SnsTopicName?: String;
      IncludeGlobalServiceEvents?: Boolean;
      CloudWatchLogsLogGroupArn?: String;
      CloudWatchLogsRoleArn?: String;
    }


    export type Date = number;

    export interface DeleteTrailRequest {
      Name: String;
    }


    export interface DeleteTrailResponse {
    }


    export interface DescribeTrailsRequest {
      trailNameList?: TrailNameList;
    }


    export interface DescribeTrailsResponse {
      trailList?: TrailList;
    }


    export interface Event {
      EventId?: String;
      EventName?: String;
      EventTime?: Date;
      Username?: String;
      Resources?: ResourceList;
      CloudTrailEvent?: String;
    }


    export type EventsList = Array<Event>;

    export interface GetTrailStatusRequest {
      Name: String;
    }


    export interface GetTrailStatusResponse {
      IsLogging?: Boolean;
      LatestDeliveryError?: String;
      LatestNotificationError?: String;
      LatestDeliveryTime?: Date;
      LatestNotificationTime?: Date;
      StartLoggingTime?: Date;
      StopLoggingTime?: Date;
      LatestCloudWatchLogsDeliveryError?: String;
      LatestCloudWatchLogsDeliveryTime?: Date;
    }


    export interface InsufficientS3BucketPolicyException {
    }


    export interface InsufficientSnsTopicPolicyException {
    }


    export interface InvalidCloudWatchLogsLogGroupArnException {
    }


    export interface InvalidCloudWatchLogsRoleArnException {
    }


    export interface InvalidLookupAttributesException {
    }


    export interface InvalidMaxResultsException {
    }


    export interface InvalidNextTokenException {
    }


    export interface InvalidS3BucketNameException {
    }


    export interface InvalidS3PrefixException {
    }


    export interface InvalidSnsTopicNameException {
    }


    export interface InvalidTimeRangeException {
    }


    export interface InvalidTrailNameException {
    }


    export interface LookupAttribute {
      AttributeKey: LookupAttributeKey;
      AttributeValue: String;
    }


    export type LookupAttributeKey = string;

    export type LookupAttributesList = Array<LookupAttribute>;

    export interface LookupEventsRequest {
      LookupAttributes?: LookupAttributesList;
      StartTime?: Date;
      EndTime?: Date;
      MaxResults?: MaxResults;
      NextToken?: NextToken;
    }


    export interface LookupEventsResponse {
      Events?: EventsList;
      NextToken?: NextToken;
    }


    export type MaxResults = number;

    export interface MaximumNumberOfTrailsExceededException {
    }


    export type NextToken = string;

    export interface Resource {
      ResourceType?: String;
      ResourceName?: String;
    }


    export type ResourceList = Array<Resource>;

    export interface S3BucketDoesNotExistException {
    }


    export interface StartLoggingRequest {
      Name: String;
    }


    export interface StartLoggingResponse {
    }


    export interface StopLoggingRequest {
      Name: String;
    }


    export interface StopLoggingResponse {
    }


    export type String = string;

    export interface Trail {
      Name?: String;
      S3BucketName?: String;
      S3KeyPrefix?: String;
      SnsTopicName?: String;
      IncludeGlobalServiceEvents?: Boolean;
      CloudWatchLogsLogGroupArn?: String;
      CloudWatchLogsRoleArn?: String;
    }


    export interface TrailAlreadyExistsException {
    }


    export type TrailList = Array<Trail>;

    export type TrailNameList = Array<String>;

    export interface TrailNotFoundException {
    }


    export interface UpdateTrailRequest {
      Name: String;
      S3BucketName?: String;
      S3KeyPrefix?: String;
      SnsTopicName?: String;
      IncludeGlobalServiceEvents?: Boolean;
      CloudWatchLogsLogGroupArn?: String;
      CloudWatchLogsRoleArn?: String;
    }


    export interface UpdateTrailResponse {
      Name?: String;
      S3BucketName?: String;
      S3KeyPrefix?: String;
      SnsTopicName?: String;
      IncludeGlobalServiceEvents?: Boolean;
      CloudWatchLogsLogGroupArn?: String;
      CloudWatchLogsRoleArn?: String;
    }


}
