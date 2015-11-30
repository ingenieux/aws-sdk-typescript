// DO NOT EDIT!
//

///<reference path="./aws-sdk-common.d.ts" />
declare module "aws-sdk" {

    export class CloudTrail extends Service {
      constructor(options?: any);
      addTags(params: CloudTrailAddTagsRequest, callback?: (err: CloudTrailResourceNotFoundException|CloudTrailCloudTrailARNInvalidException|CloudTrailResourceTypeNotSupportedException|CloudTrailTagsLimitExceededException|CloudTrailInvalidTrailNameException|CloudTrailInvalidTagParameterException|CloudTrailUnsupportedOperationException|CloudTrailOperationNotPermittedException|any, data: CloudTrailAddTagsResponse|any) => void): Request;
      createTrail(params: CloudTrailCreateTrailRequest, callback?: (err: CloudTrailMaximumNumberOfTrailsExceededException|CloudTrailTrailAlreadyExistsException|CloudTrailS3BucketDoesNotExistException|CloudTrailInsufficientS3BucketPolicyException|CloudTrailInsufficientSnsTopicPolicyException|CloudTrailInsufficientEncryptionPolicyException|CloudTrailInvalidS3BucketNameException|CloudTrailInvalidS3PrefixException|CloudTrailInvalidSnsTopicNameException|CloudTrailInvalidKmsKeyIdException|CloudTrailInvalidTrailNameException|CloudTrailTrailNotProvidedException|CloudTrailKmsKeyNotFoundException|CloudTrailKmsKeyDisabledException|CloudTrailInvalidCloudWatchLogsLogGroupArnException|CloudTrailInvalidCloudWatchLogsRoleArnException|CloudTrailCloudWatchLogsDeliveryUnavailableException|CloudTrailUnsupportedOperationException|CloudTrailOperationNotPermittedException|any, data: CloudTrailCreateTrailResponse|any) => void): Request;
      deleteTrail(params: CloudTrailDeleteTrailRequest, callback?: (err: CloudTrailTrailNotFoundException|CloudTrailInvalidTrailNameException|any, data: CloudTrailDeleteTrailResponse|any) => void): Request;
      describeTrails(params: CloudTrailDescribeTrailsRequest, callback?: (err: CloudTrailUnsupportedOperationException|CloudTrailOperationNotPermittedException|any, data: CloudTrailDescribeTrailsResponse|any) => void): Request;
      getTrailStatus(params: CloudTrailGetTrailStatusRequest, callback?: (err: CloudTrailTrailNotFoundException|CloudTrailInvalidTrailNameException|any, data: CloudTrailGetTrailStatusResponse|any) => void): Request;
      listPublicKeys(params: CloudTrailListPublicKeysRequest, callback?: (err: CloudTrailInvalidTimeRangeException|CloudTrailUnsupportedOperationException|CloudTrailOperationNotPermittedException|CloudTrailInvalidTokenException|any, data: CloudTrailListPublicKeysResponse|any) => void): Request;
      listTags(params: CloudTrailListTagsRequest, callback?: (err: CloudTrailResourceNotFoundException|CloudTrailCloudTrailARNInvalidException|CloudTrailResourceTypeNotSupportedException|CloudTrailInvalidTrailNameException|CloudTrailUnsupportedOperationException|CloudTrailOperationNotPermittedException|CloudTrailInvalidTokenException|any, data: CloudTrailListTagsResponse|any) => void): Request;
      lookupEvents(params: CloudTrailLookupEventsRequest, callback?: (err: CloudTrailInvalidLookupAttributesException|CloudTrailInvalidTimeRangeException|CloudTrailInvalidMaxResultsException|CloudTrailInvalidNextTokenException|any, data: CloudTrailLookupEventsResponse|any) => void): Request;
      removeTags(params: CloudTrailRemoveTagsRequest, callback?: (err: CloudTrailResourceNotFoundException|CloudTrailCloudTrailARNInvalidException|CloudTrailResourceTypeNotSupportedException|CloudTrailInvalidTrailNameException|CloudTrailInvalidTagParameterException|CloudTrailUnsupportedOperationException|CloudTrailOperationNotPermittedException|any, data: CloudTrailRemoveTagsResponse|any) => void): Request;
      startLogging(params: CloudTrailStartLoggingRequest, callback?: (err: CloudTrailTrailNotFoundException|CloudTrailInvalidTrailNameException|any, data: CloudTrailStartLoggingResponse|any) => void): Request;
      stopLogging(params: CloudTrailStopLoggingRequest, callback?: (err: CloudTrailTrailNotFoundException|CloudTrailInvalidTrailNameException|any, data: CloudTrailStopLoggingResponse|any) => void): Request;
      updateTrail(params: CloudTrailUpdateTrailRequest, callback?: (err: CloudTrailS3BucketDoesNotExistException|CloudTrailInsufficientS3BucketPolicyException|CloudTrailInsufficientSnsTopicPolicyException|CloudTrailInsufficientEncryptionPolicyException|CloudTrailTrailNotFoundException|CloudTrailInvalidS3BucketNameException|CloudTrailInvalidS3PrefixException|CloudTrailInvalidSnsTopicNameException|CloudTrailInvalidKmsKeyIdException|CloudTrailInvalidTrailNameException|CloudTrailTrailNotProvidedException|CloudTrailKmsKeyNotFoundException|CloudTrailKmsKeyDisabledException|CloudTrailInvalidCloudWatchLogsLogGroupArnException|CloudTrailInvalidCloudWatchLogsRoleArnException|CloudTrailCloudWatchLogsDeliveryUnavailableException|CloudTrailUnsupportedOperationException|CloudTrailOperationNotPermittedException|any, data: CloudTrailUpdateTrailResponse|any) => void): Request;
    }

    export interface CloudTrailAddTagsRequest {
        ResourceId: CloudTrailString;
        TagsList?: CloudTrailTagsList;
    }

    export interface CloudTrailAddTagsResponse {
    }

    export type CloudTrailBoolean = boolean;
    export type CloudTrailByteBuffer = any; // not really - it was 'blob' instead - must fix this one
    export interface CloudTrailCloudTrailARNInvalidException {
    }

    export interface CloudTrailCloudWatchLogsDeliveryUnavailableException {
    }

    export interface CloudTrailCreateTrailRequest {
        Name: CloudTrailString;
        S3BucketName: CloudTrailString;
        S3KeyPrefix?: CloudTrailString;
        SnsTopicName?: CloudTrailString;
        IncludeGlobalServiceEvents?: CloudTrailBoolean;
        EnableLogFileValidation?: CloudTrailBoolean;
        CloudWatchLogsLogGroupArn?: CloudTrailString;
        CloudWatchLogsRoleArn?: CloudTrailString;
        KmsKeyId?: CloudTrailString;
    }

    export interface CloudTrailCreateTrailResponse {
        Name?: CloudTrailString;
        S3BucketName?: CloudTrailString;
        S3KeyPrefix?: CloudTrailString;
        SnsTopicName?: CloudTrailString;
        IncludeGlobalServiceEvents?: CloudTrailBoolean;
        TrailARN?: CloudTrailString;
        LogFileValidationEnabled?: CloudTrailBoolean;
        CloudWatchLogsLogGroupArn?: CloudTrailString;
        CloudWatchLogsRoleArn?: CloudTrailString;
        KmsKeyId?: CloudTrailString;
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
        LatestDigestDeliveryTime?: CloudTrailDate;
        LatestDigestDeliveryError?: CloudTrailString;
        LatestDeliveryAttemptTime?: CloudTrailString;
        LatestNotificationAttemptTime?: CloudTrailString;
        LatestNotificationAttemptSucceeded?: CloudTrailString;
        LatestDeliveryAttemptSucceeded?: CloudTrailString;
        TimeLoggingStarted?: CloudTrailString;
        TimeLoggingStopped?: CloudTrailString;
    }

    export interface CloudTrailInsufficientEncryptionPolicyException {
    }

    export interface CloudTrailInsufficientS3BucketPolicyException {
    }

    export interface CloudTrailInsufficientSnsTopicPolicyException {
    }

    export interface CloudTrailInvalidCloudWatchLogsLogGroupArnException {
    }

    export interface CloudTrailInvalidCloudWatchLogsRoleArnException {
    }

    export interface CloudTrailInvalidKmsKeyIdException {
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

    export interface CloudTrailInvalidTagParameterException {
    }

    export interface CloudTrailInvalidTimeRangeException {
    }

    export interface CloudTrailInvalidTokenException {
    }

    export interface CloudTrailInvalidTrailNameException {
    }

    export interface CloudTrailKmsKeyDisabledException {
    }

    export interface CloudTrailKmsKeyNotFoundException {
    }

    export interface CloudTrailListPublicKeysRequest {
        StartTime?: CloudTrailDate;
        EndTime?: CloudTrailDate;
        NextToken?: CloudTrailString;
    }

    export interface CloudTrailListPublicKeysResponse {
        PublicKeyList?: CloudTrailPublicKeyList;
        NextToken?: CloudTrailString;
    }

    export interface CloudTrailListTagsRequest {
        ResourceIdList: CloudTrailResourceIdList;
        NextToken?: CloudTrailString;
    }

    export interface CloudTrailListTagsResponse {
        ResourceTagList?: CloudTrailResourceTagList;
        NextToken?: CloudTrailString;
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
    export interface CloudTrailOperationNotPermittedException {
    }

    export interface CloudTrailPublicKey {
        Value?: CloudTrailByteBuffer;
        ValidityStartTime?: CloudTrailDate;
        ValidityEndTime?: CloudTrailDate;
        Fingerprint?: CloudTrailString;
    }

    export type CloudTrailPublicKeyList = Array<CloudTrailPublicKey>;
    export interface CloudTrailRemoveTagsRequest {
        ResourceId: CloudTrailString;
        TagsList?: CloudTrailTagsList;
    }

    export interface CloudTrailRemoveTagsResponse {
    }

    export interface CloudTrailResource {
        ResourceType?: CloudTrailString;
        ResourceName?: CloudTrailString;
    }

    export type CloudTrailResourceIdList = Array<CloudTrailString>;
    export type CloudTrailResourceList = Array<CloudTrailResource>;
    export interface CloudTrailResourceNotFoundException {
    }

    export interface CloudTrailResourceTag {
        ResourceId?: CloudTrailString;
        TagsList?: CloudTrailTagsList;
    }

    export type CloudTrailResourceTagList = Array<CloudTrailResourceTag>;
    export interface CloudTrailResourceTypeNotSupportedException {
    }

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
    export interface CloudTrailTag {
        Key: CloudTrailString;
        Value?: CloudTrailString;
    }

    export interface CloudTrailTagsLimitExceededException {
    }

    export type CloudTrailTagsList = Array<CloudTrailTag>;
    export interface CloudTrailTrail {
        Name?: CloudTrailString;
        S3BucketName?: CloudTrailString;
        S3KeyPrefix?: CloudTrailString;
        SnsTopicName?: CloudTrailString;
        IncludeGlobalServiceEvents?: CloudTrailBoolean;
        TrailARN?: CloudTrailString;
        LogFileValidationEnabled?: CloudTrailBoolean;
        CloudWatchLogsLogGroupArn?: CloudTrailString;
        CloudWatchLogsRoleArn?: CloudTrailString;
        KmsKeyId?: CloudTrailString;
    }

    export interface CloudTrailTrailAlreadyExistsException {
    }

    export type CloudTrailTrailList = Array<CloudTrailTrail>;
    export type CloudTrailTrailNameList = Array<CloudTrailString>;
    export interface CloudTrailTrailNotFoundException {
    }

    export interface CloudTrailTrailNotProvidedException {
    }

    export interface CloudTrailUnsupportedOperationException {
    }

    export interface CloudTrailUpdateTrailRequest {
        Name: CloudTrailString;
        S3BucketName?: CloudTrailString;
        S3KeyPrefix?: CloudTrailString;
        SnsTopicName?: CloudTrailString;
        IncludeGlobalServiceEvents?: CloudTrailBoolean;
        EnableLogFileValidation?: CloudTrailBoolean;
        CloudWatchLogsLogGroupArn?: CloudTrailString;
        CloudWatchLogsRoleArn?: CloudTrailString;
        KmsKeyId?: CloudTrailString;
    }

    export interface CloudTrailUpdateTrailResponse {
        Name?: CloudTrailString;
        S3BucketName?: CloudTrailString;
        S3KeyPrefix?: CloudTrailString;
        SnsTopicName?: CloudTrailString;
        IncludeGlobalServiceEvents?: CloudTrailBoolean;
        TrailARN?: CloudTrailString;
        LogFileValidationEnabled?: CloudTrailBoolean;
        CloudWatchLogsLogGroupArn?: CloudTrailString;
        CloudWatchLogsRoleArn?: CloudTrailString;
        KmsKeyId?: CloudTrailString;
    }

}
