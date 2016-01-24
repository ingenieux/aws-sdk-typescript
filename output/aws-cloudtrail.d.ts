// Type definitions for aws-sdk - AWS CloudTrail
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

///<reference path="./aws-sdk-common.d.ts" />

declare module "aws-sdk" {

    /*
     * apiVersion: 2013-11-01
     * endpointPrefix: cloudtrail
     * serviceAbbreviation: CloudTrail
     * signatureVersion: v4
     * protocol: json
     */
    export class CloudTrail extends Service {
      constructor(options?: any);
      endpoint: Endpoint;
      addTags(params: CloudTrail.AddTagsRequest, callback?: (err: CloudTrail.ResourceNotFoundException|CloudTrail.CloudTrailARNInvalidException|CloudTrail.ResourceTypeNotSupportedException|CloudTrail.TagsLimitExceededException|CloudTrail.InvalidTrailNameException|CloudTrail.InvalidTagParameterException|CloudTrail.UnsupportedOperationException|CloudTrail.OperationNotPermittedException|any, data: CloudTrail.AddTagsResponse|any) => void): Request;
      createTrail(params: CloudTrail.CreateTrailRequest, callback?: (err: CloudTrail.MaximumNumberOfTrailsExceededException|CloudTrail.TrailAlreadyExistsException|CloudTrail.S3BucketDoesNotExistException|CloudTrail.InsufficientS3BucketPolicyException|CloudTrail.InsufficientSnsTopicPolicyException|CloudTrail.InsufficientEncryptionPolicyException|CloudTrail.InvalidS3BucketNameException|CloudTrail.InvalidS3PrefixException|CloudTrail.InvalidSnsTopicNameException|CloudTrail.InvalidKmsKeyIdException|CloudTrail.InvalidTrailNameException|CloudTrail.TrailNotProvidedException|CloudTrail.InvalidParameterCombinationException|CloudTrail.KmsKeyNotFoundException|CloudTrail.KmsKeyDisabledException|CloudTrail.InvalidCloudWatchLogsLogGroupArnException|CloudTrail.InvalidCloudWatchLogsRoleArnException|CloudTrail.CloudWatchLogsDeliveryUnavailableException|CloudTrail.UnsupportedOperationException|CloudTrail.OperationNotPermittedException|any, data: CloudTrail.CreateTrailResponse|any) => void): Request;
      deleteTrail(params: CloudTrail.DeleteTrailRequest, callback?: (err: CloudTrail.TrailNotFoundException|CloudTrail.InvalidTrailNameException|CloudTrail.InvalidHomeRegionException|any, data: CloudTrail.DeleteTrailResponse|any) => void): Request;
      describeTrails(params: CloudTrail.DescribeTrailsRequest, callback?: (err: CloudTrail.UnsupportedOperationException|CloudTrail.OperationNotPermittedException|any, data: CloudTrail.DescribeTrailsResponse|any) => void): Request;
      getTrailStatus(params: CloudTrail.GetTrailStatusRequest, callback?: (err: CloudTrail.TrailNotFoundException|CloudTrail.InvalidTrailNameException|any, data: CloudTrail.GetTrailStatusResponse|any) => void): Request;
      listPublicKeys(params: CloudTrail.ListPublicKeysRequest, callback?: (err: CloudTrail.InvalidTimeRangeException|CloudTrail.UnsupportedOperationException|CloudTrail.OperationNotPermittedException|CloudTrail.InvalidTokenException|any, data: CloudTrail.ListPublicKeysResponse|any) => void): Request;
      listTags(params: CloudTrail.ListTagsRequest, callback?: (err: CloudTrail.ResourceNotFoundException|CloudTrail.CloudTrailARNInvalidException|CloudTrail.ResourceTypeNotSupportedException|CloudTrail.InvalidTrailNameException|CloudTrail.UnsupportedOperationException|CloudTrail.OperationNotPermittedException|CloudTrail.InvalidTokenException|any, data: CloudTrail.ListTagsResponse|any) => void): Request;
      lookupEvents(params: CloudTrail.LookupEventsRequest, callback?: (err: CloudTrail.InvalidLookupAttributesException|CloudTrail.InvalidTimeRangeException|CloudTrail.InvalidMaxResultsException|CloudTrail.InvalidNextTokenException|any, data: CloudTrail.LookupEventsResponse|any) => void): Request;
      removeTags(params: CloudTrail.RemoveTagsRequest, callback?: (err: CloudTrail.ResourceNotFoundException|CloudTrail.CloudTrailARNInvalidException|CloudTrail.ResourceTypeNotSupportedException|CloudTrail.InvalidTrailNameException|CloudTrail.InvalidTagParameterException|CloudTrail.UnsupportedOperationException|CloudTrail.OperationNotPermittedException|any, data: CloudTrail.RemoveTagsResponse|any) => void): Request;
      startLogging(params: CloudTrail.StartLoggingRequest, callback?: (err: CloudTrail.TrailNotFoundException|CloudTrail.InvalidTrailNameException|CloudTrail.InvalidHomeRegionException|any, data: CloudTrail.StartLoggingResponse|any) => void): Request;
      stopLogging(params: CloudTrail.StopLoggingRequest, callback?: (err: CloudTrail.TrailNotFoundException|CloudTrail.InvalidTrailNameException|CloudTrail.InvalidHomeRegionException|any, data: CloudTrail.StopLoggingResponse|any) => void): Request;
      updateTrail(params: CloudTrail.UpdateTrailRequest, callback?: (err: CloudTrail.S3BucketDoesNotExistException|CloudTrail.InsufficientS3BucketPolicyException|CloudTrail.InsufficientSnsTopicPolicyException|CloudTrail.InsufficientEncryptionPolicyException|CloudTrail.TrailNotFoundException|CloudTrail.InvalidS3BucketNameException|CloudTrail.InvalidS3PrefixException|CloudTrail.InvalidSnsTopicNameException|CloudTrail.InvalidKmsKeyIdException|CloudTrail.InvalidTrailNameException|CloudTrail.TrailNotProvidedException|CloudTrail.InvalidParameterCombinationException|CloudTrail.InvalidHomeRegionException|CloudTrail.KmsKeyNotFoundException|CloudTrail.KmsKeyDisabledException|CloudTrail.InvalidCloudWatchLogsLogGroupArnException|CloudTrail.InvalidCloudWatchLogsRoleArnException|CloudTrail.CloudWatchLogsDeliveryUnavailableException|CloudTrail.UnsupportedOperationException|CloudTrail.OperationNotPermittedException|any, data: CloudTrail.UpdateTrailResponse|any) => void): Request;

    }

    export module CloudTrail {
        export type Boolean = boolean;
        export type ByteBuffer = any;    // type: blob
        export type Date = number;
        export type EventsList = Event[];
        export type LookupAttributeKey = string;
        export type LookupAttributesList = LookupAttribute[];
        export type MaxResults = number;    // max: 50, min: 1
        export type NextToken = string;
        export type PublicKeyList = PublicKey[];
        export type ResourceIdList = String[];
        export type ResourceList = Resource[];
        export type ResourceTagList = ResourceTag[];
        export type String = string;
        export type TagsList = Tag[];
        export type TrailList = Trail[];
        export type TrailNameList = String[];

        export interface AddTagsRequest {
            ResourceId: String;
            TagsList?: TagsList;
        }
        export interface AddTagsResponse {
        }
        export interface CloudTrailARNInvalidException {
        }
        export interface CloudWatchLogsDeliveryUnavailableException {
        }
        export interface CreateTrailRequest {
            Name: String;
            S3BucketName: String;
            S3KeyPrefix?: String;
            SnsTopicName?: String;
            IncludeGlobalServiceEvents?: Boolean;
            IsMultiRegionTrail?: Boolean;
            EnableLogFileValidation?: Boolean;
            CloudWatchLogsLogGroupArn?: String;
            CloudWatchLogsRoleArn?: String;
            KmsKeyId?: String;
        }
        export interface CreateTrailResponse {
            Name?: String;
            S3BucketName?: String;
            S3KeyPrefix?: String;
            SnsTopicName?: String;
            IncludeGlobalServiceEvents?: Boolean;
            IsMultiRegionTrail?: Boolean;
            TrailARN?: String;
            LogFileValidationEnabled?: Boolean;
            CloudWatchLogsLogGroupArn?: String;
            CloudWatchLogsRoleArn?: String;
            KmsKeyId?: String;
        }
        export interface DeleteTrailRequest {
            Name: String;
        }
        export interface DeleteTrailResponse {
        }
        export interface DescribeTrailsRequest {
            trailNameList?: TrailNameList;
            includeShadowTrails?: Boolean;
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
            LatestDigestDeliveryTime?: Date;
            LatestDigestDeliveryError?: String;
            LatestDeliveryAttemptTime?: String;
            LatestNotificationAttemptTime?: String;
            LatestNotificationAttemptSucceeded?: String;
            LatestDeliveryAttemptSucceeded?: String;
            TimeLoggingStarted?: String;
            TimeLoggingStopped?: String;
        }
        export interface InsufficientEncryptionPolicyException {
        }
        export interface InsufficientS3BucketPolicyException {
        }
        export interface InsufficientSnsTopicPolicyException {
        }
        export interface InvalidCloudWatchLogsLogGroupArnException {
        }
        export interface InvalidCloudWatchLogsRoleArnException {
        }
        export interface InvalidHomeRegionException {
        }
        export interface InvalidKmsKeyIdException {
        }
        export interface InvalidLookupAttributesException {
        }
        export interface InvalidMaxResultsException {
        }
        export interface InvalidNextTokenException {
        }
        export interface InvalidParameterCombinationException {
        }
        export interface InvalidS3BucketNameException {
        }
        export interface InvalidS3PrefixException {
        }
        export interface InvalidSnsTopicNameException {
        }
        export interface InvalidTagParameterException {
        }
        export interface InvalidTimeRangeException {
        }
        export interface InvalidTokenException {
        }
        export interface InvalidTrailNameException {
        }
        export interface KmsKeyDisabledException {
        }
        export interface KmsKeyNotFoundException {
        }
        export interface ListPublicKeysRequest {
            StartTime?: Date;
            EndTime?: Date;
            NextToken?: String;
        }
        export interface ListPublicKeysResponse {
            PublicKeyList?: PublicKeyList;
            NextToken?: String;
        }
        export interface ListTagsRequest {
            ResourceIdList: ResourceIdList;
            NextToken?: String;
        }
        export interface ListTagsResponse {
            ResourceTagList?: ResourceTagList;
            NextToken?: String;
        }
        export interface LookupAttribute {
            AttributeKey: LookupAttributeKey;
            AttributeValue: String;
        }
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
        export interface MaximumNumberOfTrailsExceededException {
        }
        export interface OperationNotPermittedException {
        }
        export interface PublicKey {
            Value?: ByteBuffer;
            ValidityStartTime?: Date;
            ValidityEndTime?: Date;
            Fingerprint?: String;
        }
        export interface RemoveTagsRequest {
            ResourceId: String;
            TagsList?: TagsList;
        }
        export interface RemoveTagsResponse {
        }
        export interface Resource {
            ResourceType?: String;
            ResourceName?: String;
        }
        export interface ResourceNotFoundException {
        }
        export interface ResourceTag {
            ResourceId?: String;
            TagsList?: TagsList;
        }
        export interface ResourceTypeNotSupportedException {
        }
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
        export interface Tag {
            Key: String;
            Value?: String;
        }
        export interface TagsLimitExceededException {
        }
        export interface Trail {
            Name?: String;
            S3BucketName?: String;
            S3KeyPrefix?: String;
            SnsTopicName?: String;
            IncludeGlobalServiceEvents?: Boolean;
            IsMultiRegionTrail?: Boolean;
            HomeRegion?: String;
            TrailARN?: String;
            LogFileValidationEnabled?: Boolean;
            CloudWatchLogsLogGroupArn?: String;
            CloudWatchLogsRoleArn?: String;
            KmsKeyId?: String;
        }
        export interface TrailAlreadyExistsException {
        }
        export interface TrailNotFoundException {
        }
        export interface TrailNotProvidedException {
        }
        export interface UnsupportedOperationException {
        }
        export interface UpdateTrailRequest {
            Name: String;
            S3BucketName?: String;
            S3KeyPrefix?: String;
            SnsTopicName?: String;
            IncludeGlobalServiceEvents?: Boolean;
            IsMultiRegionTrail?: Boolean;
            EnableLogFileValidation?: Boolean;
            CloudWatchLogsLogGroupArn?: String;
            CloudWatchLogsRoleArn?: String;
            KmsKeyId?: String;
        }
        export interface UpdateTrailResponse {
            Name?: String;
            S3BucketName?: String;
            S3KeyPrefix?: String;
            SnsTopicName?: String;
            IncludeGlobalServiceEvents?: Boolean;
            IsMultiRegionTrail?: Boolean;
            TrailARN?: String;
            LogFileValidationEnabled?: Boolean;
            CloudWatchLogsLogGroupArn?: String;
            CloudWatchLogsRoleArn?: String;
            KmsKeyId?: String;
        }

    }
}
