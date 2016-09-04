// Type definitions for aws-sdk - AWS CloudTrail
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

// COMMENTED <reference path="./aws-sdk.d.ts" />

declare module "aws-sdk" {

  /**
    * apiVersion: 2013-11-01
    * endpointPrefix: cloudtrail
    * serviceAbbreviation: CloudTrail
    * signatureVersion: v4
    * protocol: json
    *
    * AWS CloudTrail This is the CloudTrail API Reference. It provides descriptions of
 actions, data types, common parameters, and common errors for CloudTrail.
 
 CloudTrail is a web service that records AWS API calls for your AWS account and
 delivers log files to an Amazon S3 bucket. The recorded information includes the
 identity of the user, the start time of the AWS API call, the source IP address,
 the request parameters, and the response elements returned by the service.
 
 As an alternative to the API, you can use one of the AWS SDKs, which consist of
 libraries and sample code for various programming languages and platforms (Java,
 Ruby, .NET, iOS, Android, etc.). The SDKs provide a convenient way to create
 programmatic access to AWSCloudTrail. For example, the SDKs take care of
 cryptographically signing requests, managing errors, and retrying requests
 automatically. For information about the AWS SDKs, including how to download and
 install them, see the Tools for Amazon Web Services page
 [http://aws.amazon.com/tools/].
 
 See the CloudTrail User Guide for information about the data that is included
 with each AWS API call listed in the log files.
    *
    */
  export class CloudTrail extends Service {
    constructor(options?: any);
    endpoint: Endpoint;
    /**
     * Adds one or more tags to a trail, up to a limit of 10. Tags must be unique per
trail. Overwrites an existing tag&#x27;s value when a new value is specified for an
existing tag key. If you specify a key without a value, the tag will be created
with the specified key and a value of null. You can tag a trail that applies to
all regions only from the region in which the trail was created (that is, from
its home region).
     *
     * @error ResourceNotFoundException   
     * @error CloudTrailARNInvalidException   
     * @error ResourceTypeNotSupportedException   
     * @error TagsLimitExceededException   
     * @error InvalidTrailNameException   
     * @error InvalidTagParameterException   
     * @error UnsupportedOperationException   
     * @error OperationNotPermittedException   
     */
    addTags(params: CloudTrail.AddTagsRequest, callback?: (err: CloudTrail.ResourceNotFoundException | CloudTrail.CloudTrailARNInvalidException | CloudTrail.ResourceTypeNotSupportedException | CloudTrail.TagsLimitExceededException | CloudTrail.InvalidTrailNameException | CloudTrail.InvalidTagParameterException | CloudTrail.UnsupportedOperationException | CloudTrail.OperationNotPermittedException | any, data: CloudTrail.AddTagsResponse | any) => void): Request<CloudTrail.AddTagsResponse | any, CloudTrail.ResourceNotFoundException | CloudTrail.CloudTrailARNInvalidException | CloudTrail.ResourceTypeNotSupportedException | CloudTrail.TagsLimitExceededException | CloudTrail.InvalidTrailNameException | CloudTrail.InvalidTagParameterException | CloudTrail.UnsupportedOperationException | CloudTrail.OperationNotPermittedException | any>;
    /**
     * Creates a trail that specifies the settings for delivery of log data to an
Amazon S3 bucket. A maximum of five trails can exist in a region, irrespective
of the region in which they were created.
     *
     * @error MaximumNumberOfTrailsExceededException   
     * @error TrailAlreadyExistsException   
     * @error S3BucketDoesNotExistException   
     * @error InsufficientS3BucketPolicyException   
     * @error InsufficientSnsTopicPolicyException   
     * @error InsufficientEncryptionPolicyException   
     * @error InvalidS3BucketNameException   
     * @error InvalidS3PrefixException   
     * @error InvalidSnsTopicNameException   
     * @error InvalidKmsKeyIdException   
     * @error InvalidTrailNameException   
     * @error TrailNotProvidedException   
     * @error InvalidParameterCombinationException   
     * @error KmsKeyNotFoundException   
     * @error KmsKeyDisabledException   
     * @error KmsException   
     * @error InvalidCloudWatchLogsLogGroupArnException   
     * @error InvalidCloudWatchLogsRoleArnException   
     * @error CloudWatchLogsDeliveryUnavailableException   
     * @error UnsupportedOperationException   
     * @error OperationNotPermittedException   
     */
    createTrail(params: CloudTrail.CreateTrailRequest, callback?: (err: CloudTrail.MaximumNumberOfTrailsExceededException | CloudTrail.TrailAlreadyExistsException | CloudTrail.S3BucketDoesNotExistException | CloudTrail.InsufficientS3BucketPolicyException | CloudTrail.InsufficientSnsTopicPolicyException | CloudTrail.InsufficientEncryptionPolicyException | CloudTrail.InvalidS3BucketNameException | CloudTrail.InvalidS3PrefixException | CloudTrail.InvalidSnsTopicNameException | CloudTrail.InvalidKmsKeyIdException | CloudTrail.InvalidTrailNameException | CloudTrail.TrailNotProvidedException | CloudTrail.InvalidParameterCombinationException | CloudTrail.KmsKeyNotFoundException | CloudTrail.KmsKeyDisabledException | CloudTrail.KmsException | CloudTrail.InvalidCloudWatchLogsLogGroupArnException | CloudTrail.InvalidCloudWatchLogsRoleArnException | CloudTrail.CloudWatchLogsDeliveryUnavailableException | CloudTrail.UnsupportedOperationException | CloudTrail.OperationNotPermittedException | any, data: CloudTrail.CreateTrailResponse | any) => void): Request<CloudTrail.CreateTrailResponse | any, CloudTrail.MaximumNumberOfTrailsExceededException | CloudTrail.TrailAlreadyExistsException | CloudTrail.S3BucketDoesNotExistException | CloudTrail.InsufficientS3BucketPolicyException | CloudTrail.InsufficientSnsTopicPolicyException | CloudTrail.InsufficientEncryptionPolicyException | CloudTrail.InvalidS3BucketNameException | CloudTrail.InvalidS3PrefixException | CloudTrail.InvalidSnsTopicNameException | CloudTrail.InvalidKmsKeyIdException | CloudTrail.InvalidTrailNameException | CloudTrail.TrailNotProvidedException | CloudTrail.InvalidParameterCombinationException | CloudTrail.KmsKeyNotFoundException | CloudTrail.KmsKeyDisabledException | CloudTrail.KmsException | CloudTrail.InvalidCloudWatchLogsLogGroupArnException | CloudTrail.InvalidCloudWatchLogsRoleArnException | CloudTrail.CloudWatchLogsDeliveryUnavailableException | CloudTrail.UnsupportedOperationException | CloudTrail.OperationNotPermittedException | any>;
    /**
     * Deletes a trail. This operation must be called from the region in which the
trail was created. DeleteTrail cannot be called on the shadow trails (replicated
trails in other regions) of a trail that is enabled in all regions.
     *
     * @error TrailNotFoundException   
     * @error InvalidTrailNameException   
     * @error InvalidHomeRegionException   
     */
    deleteTrail(params: CloudTrail.DeleteTrailRequest, callback?: (err: CloudTrail.TrailNotFoundException | CloudTrail.InvalidTrailNameException | CloudTrail.InvalidHomeRegionException | any, data: CloudTrail.DeleteTrailResponse | any) => void): Request<CloudTrail.DeleteTrailResponse | any, CloudTrail.TrailNotFoundException | CloudTrail.InvalidTrailNameException | CloudTrail.InvalidHomeRegionException | any>;
    /**
     * Retrieves settings for the trail associated with the current region for your
account.
     *
     * @error UnsupportedOperationException   
     * @error OperationNotPermittedException   
     */
    describeTrails(params: CloudTrail.DescribeTrailsRequest, callback?: (err: CloudTrail.UnsupportedOperationException | CloudTrail.OperationNotPermittedException | any, data: CloudTrail.DescribeTrailsResponse | any) => void): Request<CloudTrail.DescribeTrailsResponse | any, CloudTrail.UnsupportedOperationException | CloudTrail.OperationNotPermittedException | any>;
    /**
     * Returns a JSON-formatted list of information about the specified trail. Fields
include information on delivery errors, Amazon SNS and Amazon S3 errors, and
start and stop logging times for each trail. This operation returns trail status
from a single region. To return trail status from all regions, you must call the
operation on each region.
     *
     * @error TrailNotFoundException   
     * @error InvalidTrailNameException   
     */
    getTrailStatus(params: CloudTrail.GetTrailStatusRequest, callback?: (err: CloudTrail.TrailNotFoundException | CloudTrail.InvalidTrailNameException | any, data: CloudTrail.GetTrailStatusResponse | any) => void): Request<CloudTrail.GetTrailStatusResponse | any, CloudTrail.TrailNotFoundException | CloudTrail.InvalidTrailNameException | any>;
    /**
     * Returns all public keys whose private keys were used to sign the digest files
within the specified time range. The public key is needed to validate digest
files that were signed with its corresponding private key.

CloudTrail uses different private/public key pairs per region. Each digest file
is signed with a private key unique to its region. Therefore, when you validate
a digest file from a particular region, you must look in the same region for its
corresponding public key.
     *
     * @error InvalidTimeRangeException   
     * @error UnsupportedOperationException   
     * @error OperationNotPermittedException   
     * @error InvalidTokenException   
     */
    listPublicKeys(params: CloudTrail.ListPublicKeysRequest, callback?: (err: CloudTrail.InvalidTimeRangeException | CloudTrail.UnsupportedOperationException | CloudTrail.OperationNotPermittedException | CloudTrail.InvalidTokenException | any, data: CloudTrail.ListPublicKeysResponse | any) => void): Request<CloudTrail.ListPublicKeysResponse | any, CloudTrail.InvalidTimeRangeException | CloudTrail.UnsupportedOperationException | CloudTrail.OperationNotPermittedException | CloudTrail.InvalidTokenException | any>;
    /**
     * Lists the tags for the trail in the current region.
     *
     * @error ResourceNotFoundException   
     * @error CloudTrailARNInvalidException   
     * @error ResourceTypeNotSupportedException   
     * @error InvalidTrailNameException   
     * @error UnsupportedOperationException   
     * @error OperationNotPermittedException   
     * @error InvalidTokenException   
     */
    listTags(params: CloudTrail.ListTagsRequest, callback?: (err: CloudTrail.ResourceNotFoundException | CloudTrail.CloudTrailARNInvalidException | CloudTrail.ResourceTypeNotSupportedException | CloudTrail.InvalidTrailNameException | CloudTrail.UnsupportedOperationException | CloudTrail.OperationNotPermittedException | CloudTrail.InvalidTokenException | any, data: CloudTrail.ListTagsResponse | any) => void): Request<CloudTrail.ListTagsResponse | any, CloudTrail.ResourceNotFoundException | CloudTrail.CloudTrailARNInvalidException | CloudTrail.ResourceTypeNotSupportedException | CloudTrail.InvalidTrailNameException | CloudTrail.UnsupportedOperationException | CloudTrail.OperationNotPermittedException | CloudTrail.InvalidTokenException | any>;
    /**
     * Looks up API activity events captured by CloudTrail that create, update, or
delete resources in your account. Events for a region can be looked up for the
times in which you had CloudTrail turned on in that region during the last seven
days. Lookup supports five different attributes: time range (defined by a start
time and end time), user name, event name, resource type, and resource name. All
attributes are optional. The maximum number of attributes that can be specified
in any one lookup request are time range and one other attribute. The default
number of results returned is 10, with a maximum of 50 possible. The response
includes a token that you can use to get the next page of results.

The rate of lookup requests is limited to one per second per account. If this
limit is exceeded, a throttling error occurs.

Events that occurred during the selected time range will not be available for
lookup if CloudTrail logging was not enabled when the events occurred.
     *
     * @error InvalidLookupAttributesException   
     * @error InvalidTimeRangeException   
     * @error InvalidMaxResultsException   
     * @error InvalidNextTokenException   
     */
    lookupEvents(params: CloudTrail.LookupEventsRequest, callback?: (err: CloudTrail.InvalidLookupAttributesException | CloudTrail.InvalidTimeRangeException | CloudTrail.InvalidMaxResultsException | CloudTrail.InvalidNextTokenException | any, data: CloudTrail.LookupEventsResponse | any) => void): Request<CloudTrail.LookupEventsResponse | any, CloudTrail.InvalidLookupAttributesException | CloudTrail.InvalidTimeRangeException | CloudTrail.InvalidMaxResultsException | CloudTrail.InvalidNextTokenException | any>;
    /**
     * Removes the specified tags from a trail.
     *
     * @error ResourceNotFoundException   
     * @error CloudTrailARNInvalidException   
     * @error ResourceTypeNotSupportedException   
     * @error InvalidTrailNameException   
     * @error InvalidTagParameterException   
     * @error UnsupportedOperationException   
     * @error OperationNotPermittedException   
     */
    removeTags(params: CloudTrail.RemoveTagsRequest, callback?: (err: CloudTrail.ResourceNotFoundException | CloudTrail.CloudTrailARNInvalidException | CloudTrail.ResourceTypeNotSupportedException | CloudTrail.InvalidTrailNameException | CloudTrail.InvalidTagParameterException | CloudTrail.UnsupportedOperationException | CloudTrail.OperationNotPermittedException | any, data: CloudTrail.RemoveTagsResponse | any) => void): Request<CloudTrail.RemoveTagsResponse | any, CloudTrail.ResourceNotFoundException | CloudTrail.CloudTrailARNInvalidException | CloudTrail.ResourceTypeNotSupportedException | CloudTrail.InvalidTrailNameException | CloudTrail.InvalidTagParameterException | CloudTrail.UnsupportedOperationException | CloudTrail.OperationNotPermittedException | any>;
    /**
     * Starts the recording of AWS API calls and log file delivery for a trail. For a
trail that is enabled in all regions, this operation must be called from the
region in which the trail was created. This operation cannot be called on the
shadow trails (replicated trails in other regions) of a trail that is enabled in
all regions.
     *
     * @error TrailNotFoundException   
     * @error InvalidTrailNameException   
     * @error InvalidHomeRegionException   
     */
    startLogging(params: CloudTrail.StartLoggingRequest, callback?: (err: CloudTrail.TrailNotFoundException | CloudTrail.InvalidTrailNameException | CloudTrail.InvalidHomeRegionException | any, data: CloudTrail.StartLoggingResponse | any) => void): Request<CloudTrail.StartLoggingResponse | any, CloudTrail.TrailNotFoundException | CloudTrail.InvalidTrailNameException | CloudTrail.InvalidHomeRegionException | any>;
    /**
     * Suspends the recording of AWS API calls and log file delivery for the specified
trail. Under most circumstances, there is no need to use this action. You can
update a trail without stopping it first. This action is the only way to stop
recording. For a trail enabled in all regions, this operation must be called
from the region in which the trail was created, or an InvalidHomeRegionException 
will occur. This operation cannot be called on the shadow trails (replicated
trails in other regions) of a trail enabled in all regions.
     *
     * @error TrailNotFoundException   
     * @error InvalidTrailNameException   
     * @error InvalidHomeRegionException   
     */
    stopLogging(params: CloudTrail.StopLoggingRequest, callback?: (err: CloudTrail.TrailNotFoundException | CloudTrail.InvalidTrailNameException | CloudTrail.InvalidHomeRegionException | any, data: CloudTrail.StopLoggingResponse | any) => void): Request<CloudTrail.StopLoggingResponse | any, CloudTrail.TrailNotFoundException | CloudTrail.InvalidTrailNameException | CloudTrail.InvalidHomeRegionException | any>;
    /**
     * Updates the settings that specify delivery of log files. Changes to a trail do
not require stopping the CloudTrail service. Use this action to designate an
existing bucket for log delivery. If the existing bucket has previously been a
target for CloudTrail log files, an IAM policy exists for the bucket. 
UpdateTrail must be called from the region in which the trail was created;
otherwise, an InvalidHomeRegionException is thrown.
     *
     * @error S3BucketDoesNotExistException   
     * @error InsufficientS3BucketPolicyException   
     * @error InsufficientSnsTopicPolicyException   
     * @error InsufficientEncryptionPolicyException   
     * @error TrailNotFoundException   
     * @error InvalidS3BucketNameException   
     * @error InvalidS3PrefixException   
     * @error InvalidSnsTopicNameException   
     * @error InvalidKmsKeyIdException   
     * @error InvalidTrailNameException   
     * @error TrailNotProvidedException   
     * @error InvalidParameterCombinationException   
     * @error InvalidHomeRegionException   
     * @error KmsKeyNotFoundException   
     * @error KmsKeyDisabledException   
     * @error KmsException   
     * @error InvalidCloudWatchLogsLogGroupArnException   
     * @error InvalidCloudWatchLogsRoleArnException   
     * @error CloudWatchLogsDeliveryUnavailableException   
     * @error UnsupportedOperationException   
     * @error OperationNotPermittedException   
     */
    updateTrail(params: CloudTrail.UpdateTrailRequest, callback?: (err: CloudTrail.S3BucketDoesNotExistException | CloudTrail.InsufficientS3BucketPolicyException | CloudTrail.InsufficientSnsTopicPolicyException | CloudTrail.InsufficientEncryptionPolicyException | CloudTrail.TrailNotFoundException | CloudTrail.InvalidS3BucketNameException | CloudTrail.InvalidS3PrefixException | CloudTrail.InvalidSnsTopicNameException | CloudTrail.InvalidKmsKeyIdException | CloudTrail.InvalidTrailNameException | CloudTrail.TrailNotProvidedException | CloudTrail.InvalidParameterCombinationException | CloudTrail.InvalidHomeRegionException | CloudTrail.KmsKeyNotFoundException | CloudTrail.KmsKeyDisabledException | CloudTrail.KmsException | CloudTrail.InvalidCloudWatchLogsLogGroupArnException | CloudTrail.InvalidCloudWatchLogsRoleArnException | CloudTrail.CloudWatchLogsDeliveryUnavailableException | CloudTrail.UnsupportedOperationException | CloudTrail.OperationNotPermittedException | any, data: CloudTrail.UpdateTrailResponse | any) => void): Request<CloudTrail.UpdateTrailResponse | any, CloudTrail.S3BucketDoesNotExistException | CloudTrail.InsufficientS3BucketPolicyException | CloudTrail.InsufficientSnsTopicPolicyException | CloudTrail.InsufficientEncryptionPolicyException | CloudTrail.TrailNotFoundException | CloudTrail.InvalidS3BucketNameException | CloudTrail.InvalidS3PrefixException | CloudTrail.InvalidSnsTopicNameException | CloudTrail.InvalidKmsKeyIdException | CloudTrail.InvalidTrailNameException | CloudTrail.TrailNotProvidedException | CloudTrail.InvalidParameterCombinationException | CloudTrail.InvalidHomeRegionException | CloudTrail.KmsKeyNotFoundException | CloudTrail.KmsKeyDisabledException | CloudTrail.KmsException | CloudTrail.InvalidCloudWatchLogsLogGroupArnException | CloudTrail.InvalidCloudWatchLogsRoleArnException | CloudTrail.CloudWatchLogsDeliveryUnavailableException | CloudTrail.UnsupportedOperationException | CloudTrail.OperationNotPermittedException | any>;

  }

  export module CloudTrail {

    export type Boolean = boolean;

    export type ByteBuffer = any;

    export type Date = number;

    export type EventsList = Event[];

    export type LookupAttributeKey = string;

    export type LookupAttributesList = LookupAttribute[];

    export type MaxResults = number;

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
      /** Specifies the ARN of the trail to which one or more tags will be added. The
format of a trail ARN is:

arn:aws:cloudtrail:us-east-1:123456789012:trail/MyTrail **/
      ResourceId: String;
      /** Contains a list of CloudTrail tags, up to a limit of 10. **/
      TagsList?: TagsList;
    }
    export interface AddTagsResponse {
    }
    export interface CloudTrailARNInvalidException {
    }
    export interface CloudWatchLogsDeliveryUnavailableException {
    }
    export interface CreateTrailRequest {
      /** Specifies the name of the trail. The name must meet the following requirements:

&amp;#42;  Contain only ASCII letters (a-z, A-Z), numbers (0-9), periods (.),
 underscores (_), or dashes (-)
 
 
*  Start with a letter or number, and end with a letter or number
 
 
*  Be between 3 and 128 characters
 
 
*  Have no adjacent periods, underscores or dashes. Names like my-_namespace and 
 my--namespace are invalid.
 
 
*  Not be in IP address format (for example, 192.168.5.4) **/
      Name: String;
      /** Specifies the name of the Amazon S3 bucket designated for publishing log files.
See Amazon S3 Bucket Naming Requirements
[http://docs.aws.amazon.com/awscloudtrail/latest/userguide/create_trail_naming_policy.html]
. **/
      S3BucketName: String;
      /** Specifies the Amazon S3 key prefix that comes after the name of the bucket you
have designated for log file delivery. For more information, see Finding Your
CloudTrail Log Files
[http://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-find-log-files.html]
. The maximum length is 200 characters. **/
      S3KeyPrefix?: String;
      /** Specifies the name of the Amazon SNS topic defined for notification of log file
delivery. The maximum length is 256 characters. **/
      SnsTopicName?: String;
      /** Specifies whether the trail is publishing events from global services such as
IAM to the log files. **/
      IncludeGlobalServiceEvents?: Boolean;
      /** Specifies whether the trail is created in the current region or in all regions.
The default is false. **/
      IsMultiRegionTrail?: Boolean;
      /** Specifies whether log file integrity validation is enabled. The default is
false.

When you disable log file integrity validation, the chain of digest files is
broken after one hour. CloudTrail will not create digest files for log files
that were delivered during a period in which log file integrity validation was
disabled. For example, if you enable log file integrity validation at noon on
January 1, disable it at noon on January 2, and re-enable it at noon on January
10, digest files will not be created for the log files delivered from noon on
January 2 to noon on January 10. The same applies whenever you stop CloudTrail
logging or delete a trail. **/
      EnableLogFileValidation?: Boolean;
      /** Specifies a log group name using an Amazon Resource Name (ARN), a unique
identifier that represents the log group to which CloudTrail logs will be
delivered. Not required unless you specify CloudWatchLogsRoleArn. **/
      CloudWatchLogsLogGroupArn?: String;
      /** Specifies the role for the CloudWatch Logs endpoint to assume to write to a
user&#x27;s log group. **/
      CloudWatchLogsRoleArn?: String;
      /** Specifies the KMS key ID to use to encrypt the logs delivered by CloudTrail. The
value can be a an alias name prefixed by &quot;alias/&quot;, a fully specified ARN to an
alias, a fully specified ARN to a key, or a globally unique identifier.

Examples:

&amp;#42;  alias/MyAliasName
 
 
*  arn:aws:kms:us-east-1:123456789012:alias/MyAliasName
 
 
*  arn:aws:kms:us-east-1:123456789012:key/12345678-1234-1234-1234-123456789012
 
 
*  12345678-1234-1234-1234-123456789012 **/
      KmsKeyId?: String;
    }
    export interface CreateTrailResponse {
      /** Specifies the name of the trail. **/
      Name?: String;
      /** Specifies the name of the Amazon S3 bucket designated for publishing log files. **/
      S3BucketName?: String;
      /** Specifies the Amazon S3 key prefix that comes after the name of the bucket you
have designated for log file delivery. For more information, see Finding Your
CloudTrail Log Files
[http://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-find-log-files.html]
. **/
      S3KeyPrefix?: String;
      /** This field is deprecated. Use SnsTopicARN. **/
      SnsTopicName?: String;
      /** Specifies the ARN of the Amazon SNS topic that CloudTrail uses to send
notifications when log files are delivered. The format of a topic ARN is:

arn:aws:sns:us-east-1:123456789012:MyTopic **/
      SnsTopicARN?: String;
      /** Specifies whether the trail is publishing events from global services such as
IAM to the log files. **/
      IncludeGlobalServiceEvents?: Boolean;
      /** Specifies whether the trail exists in one region or in all regions. **/
      IsMultiRegionTrail?: Boolean;
      /** Specifies the ARN of the trail that was created. The format of a trail ARN is:

arn:aws:cloudtrail:us-east-1:123456789012:trail/MyTrail **/
      TrailARN?: String;
      /** Specifies whether log file integrity validation is enabled. **/
      LogFileValidationEnabled?: Boolean;
      /** Specifies the Amazon Resource Name (ARN) of the log group to which CloudTrail
logs will be delivered. **/
      CloudWatchLogsLogGroupArn?: String;
      /** Specifies the role for the CloudWatch Logs endpoint to assume to write to a
user&#x27;s log group. **/
      CloudWatchLogsRoleArn?: String;
      /** Specifies the KMS key ID that encrypts the logs delivered by CloudTrail. The
value is a fully specified ARN to a KMS key in the format:

arn:aws:kms:us-east-1:123456789012:key/12345678-1234-1234-1234-123456789012 **/
      KmsKeyId?: String;
    }
    export interface DeleteTrailRequest {
      /** Specifies the name or the CloudTrail ARN of the trail to be deleted. The format
of a trail ARN is:

arn:aws:cloudtrail:us-east-1:123456789012:trail/MyTrail **/
      Name: String;
    }
    export interface DeleteTrailResponse {
    }
    export interface DescribeTrailsRequest {
      /** Specifies a list of trail names, trail ARNs, or both, of the trails to describe.
The format of a trail ARN is:

arn:aws:cloudtrail:us-east-1:123456789012:trail/MyTrail 

If an empty list is specified, information for the trail in the current region
is returned.

&amp;#42;  If an empty list is specified and IncludeShadowTrails is false, then
 information for all trails in the current region is returned.
 
 
*  If an empty list is specified and IncludeShadowTrails is null or true, then
 information for all trails in the current region and any associated shadow
 trails in other regions is returned.
 
 

If one or more trail names are specified, information is returned only if the
names match the names of trails belonging only to the current region. To return
information about a trail in another region, you must specify its trail ARN. **/
      trailNameList?: TrailNameList;
      /** Specifies whether to include shadow trails in the response. A shadow trail is
the replication in a region of a trail that was created in a different region.
The default is true. **/
      includeShadowTrails?: Boolean;
    }
    export interface DescribeTrailsResponse {
      /** The list of trail objects. **/
      trailList?: TrailList;
    }
    export interface Event {
      /** The CloudTrail ID of the event returned. **/
      EventId?: String;
      /** The name of the event returned. **/
      EventName?: String;
      /** The date and time of the event returned. **/
      EventTime?: Date;
      /** A user name or role name of the requester that called the API in the event
returned. **/
      Username?: String;
      /** A list of resources referenced by the event returned. **/
      Resources?: ResourceList;
      /** A JSON string that contains a representation of the event returned. **/
      CloudTrailEvent?: String;
    }
    export interface GetTrailStatusRequest {
      /** Specifies the name or the CloudTrail ARN of the trail for which you are
requesting status. To get the status of a shadow trail (a replication of the
trail in another region), you must specify its ARN. The format of a trail ARN
is:

arn:aws:cloudtrail:us-east-1:123456789012:trail/MyTrail **/
      Name: String;
    }
    export interface GetTrailStatusResponse {
      /** Whether the CloudTrail is currently logging AWS API calls. **/
      IsLogging?: Boolean;
      /** Displays any Amazon S3 error that CloudTrail encountered when attempting to
deliver log files to the designated bucket. For more information see the topic 
Error Responses
[http://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html] in the
Amazon S3 API Reference. 

This error occurs only when there is a problem with the destination S3 bucket
and will not occur for timeouts. To resolve the issue, create a new bucket and
call UpdateTrail to specify the new bucket, or fix the existing objects so that
CloudTrail can again write to the bucket. **/
      LatestDeliveryError?: String;
      /** Displays any Amazon SNS error that CloudTrail encountered when attempting to
send a notification. For more information about Amazon SNS errors, see the 
Amazon SNS Developer Guide
[http://docs.aws.amazon.com/sns/latest/dg/welcome.html]. **/
      LatestNotificationError?: String;
      /** Specifies the date and time that CloudTrail last delivered log files to an
account&#x27;s Amazon S3 bucket. **/
      LatestDeliveryTime?: Date;
      /** Specifies the date and time of the most recent Amazon SNS notification that
CloudTrail has written a new log file to an account&#x27;s Amazon S3 bucket. **/
      LatestNotificationTime?: Date;
      /** Specifies the most recent date and time when CloudTrail started recording API
calls for an AWS account. **/
      StartLoggingTime?: Date;
      /** Specifies the most recent date and time when CloudTrail stopped recording API
calls for an AWS account. **/
      StopLoggingTime?: Date;
      /** Displays any CloudWatch Logs error that CloudTrail encountered when attempting
to deliver logs to CloudWatch Logs. **/
      LatestCloudWatchLogsDeliveryError?: String;
      /** Displays the most recent date and time when CloudTrail delivered logs to
CloudWatch Logs. **/
      LatestCloudWatchLogsDeliveryTime?: Date;
      /** Specifies the date and time that CloudTrail last delivered a digest file to an
account&#x27;s Amazon S3 bucket. **/
      LatestDigestDeliveryTime?: Date;
      /** Displays any Amazon S3 error that CloudTrail encountered when attempting to
deliver a digest file to the designated bucket. For more information see the
topic Error Responses
[http://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html] in the
Amazon S3 API Reference. 

This error occurs only when there is a problem with the destination S3 bucket
and will not occur for timeouts. To resolve the issue, create a new bucket and
call UpdateTrail to specify the new bucket, or fix the existing objects so that
CloudTrail can again write to the bucket. **/
      LatestDigestDeliveryError?: String;
      /** This field is deprecated. **/
      LatestDeliveryAttemptTime?: String;
      /** This field is deprecated. **/
      LatestNotificationAttemptTime?: String;
      /** This field is deprecated. **/
      LatestNotificationAttemptSucceeded?: String;
      /** This field is deprecated. **/
      LatestDeliveryAttemptSucceeded?: String;
      /** This field is deprecated. **/
      TimeLoggingStarted?: String;
      /** This field is deprecated. **/
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
    export interface KmsException {
    }
    export interface KmsKeyDisabledException {
    }
    export interface KmsKeyNotFoundException {
    }
    export interface ListPublicKeysRequest {
      /** Optionally specifies, in UTC, the start of the time range to look up public keys
for CloudTrail digest files. If not specified, the current time is used, and the
current public key is returned. **/
      StartTime?: Date;
      /** Optionally specifies, in UTC, the end of the time range to look up public keys
for CloudTrail digest files. If not specified, the current time is used. **/
      EndTime?: Date;
      /** Reserved for future use. **/
      NextToken?: String;
    }
    export interface ListPublicKeysResponse {
      /** Contains an array of PublicKey objects.

The returned public keys may have validity time ranges that overlap. **/
      PublicKeyList?: PublicKeyList;
      /** Reserved for future use. **/
      NextToken?: String;
    }
    export interface ListTagsRequest {
      /** Specifies a list of trail ARNs whose tags will be listed. The list has a limit
of 20 ARNs. The format of a trail ARN is:

arn:aws:cloudtrail:us-east-1:123456789012:trail/MyTrail **/
      ResourceIdList: ResourceIdList;
      /** Reserved for future use. **/
      NextToken?: String;
    }
    export interface ListTagsResponse {
      ResourceTagList?: ResourceTagList;
      /** Reserved for future use. **/
      NextToken?: String;
    }
    export interface LookupAttribute {
      /** Specifies an attribute on which to filter the events returned. **/
      AttributeKey: LookupAttributeKey;
      /** Specifies a value for the specified AttributeKey. **/
      AttributeValue: String;
    }
    export interface LookupEventsRequest {
      /** Contains a list of lookup attributes. Currently the list can contain only one
item. **/
      LookupAttributes?: LookupAttributesList;
      /** Specifies that only events that occur after or at the specified time are
returned. If the specified start time is after the specified end time, an error
is returned. **/
      StartTime?: Date;
      /** Specifies that only events that occur before or at the specified time are
returned. If the specified end time is before the specified start time, an error
is returned. **/
      EndTime?: Date;
      /** The number of events to return. Possible values are 1 through 50. The default is
10. **/
      MaxResults?: MaxResults;
      /** The token to use to get the next page of results after a previous API call. This
token must be passed in with the same parameters that were specified in the the
original call. For example, if the original call specified an AttributeKey of
&#x27;Username&#x27; with a value of &#x27;root&#x27;, the call with NextToken should include those
same parameters. **/
      NextToken?: NextToken;
    }
    export interface LookupEventsResponse {
      /** A list of events returned based on the lookup attributes specified and the
CloudTrail event. The events list is sorted by time. The most recent event is
listed first. **/
      Events?: EventsList;
      /** The token to use to get the next page of results after a previous API call. If
the token does not appear, there are no more results to return. The token must
be passed in with the same parameters as the previous call. For example, if the
original call specified an AttributeKey of &#x27;Username&#x27; with a value of &#x27;root&#x27;,
the call with NextToken should include those same parameters. **/
      NextToken?: NextToken;
    }
    export interface MaximumNumberOfTrailsExceededException {
    }
    export interface OperationNotPermittedException {
    }
    export interface PublicKey {
      /** The DER encoded public key value in PKCS#1 format. **/
      Value?: ByteBuffer;
      /** The starting time of validity of the public key. **/
      ValidityStartTime?: Date;
      /** The ending time of validity of the public key. **/
      ValidityEndTime?: Date;
      /** The fingerprint of the public key. **/
      Fingerprint?: String;
    }
    export interface RemoveTagsRequest {
      /** Specifies the ARN of the trail from which tags should be removed. The format of
a trail ARN is:

arn:aws:cloudtrail:us-east-1:123456789012:trail/MyTrail **/
      ResourceId: String;
      /** Specifies a list of tags to be removed. **/
      TagsList?: TagsList;
    }
    export interface RemoveTagsResponse {
    }
    export interface Resource {
      /** The type of a resource referenced by the event returned. When the resource type
cannot be determined, null is returned. Some examples of resource types are: 
Instance for EC2, Trail for CloudTrail, DBInstance for RDS, and AccessKey for
IAM. For a list of resource types supported for event lookup, see Resource Types
Supported for Event Lookup
[http://docs.aws.amazon.com/awscloudtrail/latest/userguide/lookup_supported_resourcetypes.html]
. **/
      ResourceType?: String;
      /** The name of the resource referenced by the event returned. These are
user-created names whose values will depend on the environment. For example, the
resource name might be &quot;auto-scaling-test-group&quot; for an Auto Scaling Group or
&quot;i-1234567&quot; for an EC2 Instance. **/
      ResourceName?: String;
    }
    export interface ResourceNotFoundException {
    }
    export interface ResourceTag {
      /** Specifies the ARN of the resource. **/
      ResourceId?: String;
      TagsList?: TagsList;
    }
    export interface ResourceTypeNotSupportedException {
    }
    export interface S3BucketDoesNotExistException {
    }
    export interface StartLoggingRequest {
      /** Specifies the name or the CloudTrail ARN of the trail for which CloudTrail logs
AWS API calls. The format of a trail ARN is:

arn:aws:cloudtrail:us-east-1:123456789012:trail/MyTrail **/
      Name: String;
    }
    export interface StartLoggingResponse {
    }
    export interface StopLoggingRequest {
      /** Specifies the name or the CloudTrail ARN of the trail for which CloudTrail will
stop logging AWS API calls. The format of a trail ARN is:

arn:aws:cloudtrail:us-east-1:123456789012:trail/MyTrail **/
      Name: String;
    }
    export interface StopLoggingResponse {
    }
    export interface Tag {
      /** The key in a key-value pair. The key must be must be no longer than 128 Unicode
characters. The key must be unique for the resource to which it applies. **/
      Key: String;
      /** The value in a key-value pair of a tag. The value must be no longer than 256
Unicode characters. **/
      Value?: String;
    }
    export interface TagsLimitExceededException {
    }
    export interface Trail {
      /** Name of the trail set by calling CreateTrail. The maximum length is 128
characters. **/
      Name?: String;
      /** Name of the Amazon S3 bucket into which CloudTrail delivers your trail files.
See Amazon S3 Bucket Naming Requirements
[http://docs.aws.amazon.com/awscloudtrail/latest/userguide/create_trail_naming_policy.html]
. **/
      S3BucketName?: String;
      /** Specifies the Amazon S3 key prefix that comes after the name of the bucket you
have designated for log file delivery. For more information, see Finding Your
CloudTrail Log Files
[http://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-find-log-files.html]
.The maximum length is 200 characters. **/
      S3KeyPrefix?: String;
      /** This field is deprecated. Use SnsTopicARN. **/
      SnsTopicName?: String;
      /** Specifies the ARN of the Amazon SNS topic that CloudTrail uses to send
notifications when log files are delivered. The format of a topic ARN is:

arn:aws:sns:us-east-1:123456789012:MyTopic **/
      SnsTopicARN?: String;
      /** Set to True to include AWS API calls from AWS global services such as IAM.
Otherwise, False. **/
      IncludeGlobalServiceEvents?: Boolean;
      /** Specifies whether the trail belongs only to one region or exists in all regions. **/
      IsMultiRegionTrail?: Boolean;
      /** The region in which the trail was created. **/
      HomeRegion?: String;
      /** Specifies the ARN of the trail. The format of a trail ARN is:

arn:aws:cloudtrail:us-east-1:123456789012:trail/MyTrail **/
      TrailARN?: String;
      /** Specifies whether log file validation is enabled. **/
      LogFileValidationEnabled?: Boolean;
      /** Specifies an Amazon Resource Name (ARN), a unique identifier that represents the
log group to which CloudTrail logs will be delivered. **/
      CloudWatchLogsLogGroupArn?: String;
      /** Specifies the role for the CloudWatch Logs endpoint to assume to write to a
user&#x27;s log group. **/
      CloudWatchLogsRoleArn?: String;
      /** Specifies the KMS key ID that encrypts the logs delivered by CloudTrail. The
value is a fully specified ARN to a KMS key in the format:

arn:aws:kms:us-east-1:123456789012:key/12345678-1234-1234-1234-123456789012 **/
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
      /** Specifies the name of the trail or trail ARN. If Name is a trail name, the
string must meet the following requirements:

&amp;#42;  Contain only ASCII letters (a-z, A-Z), numbers (0-9), periods (.),
 underscores (_), or dashes (-)
 
 
*  Start with a letter or number, and end with a letter or number
 
 
*  Be between 3 and 128 characters
 
 
*  Have no adjacent periods, underscores or dashes. Names like my-_namespace and 
 my--namespace are invalid.
 
 
*  Not be in IP address format (for example, 192.168.5.4)
 
 

If Name is a trail ARN, it must be in the format:

arn:aws:cloudtrail:us-east-1:123456789012:trail/MyTrail **/
      Name: String;
      /** Specifies the name of the Amazon S3 bucket designated for publishing log files.
See Amazon S3 Bucket Naming Requirements
[http://docs.aws.amazon.com/awscloudtrail/latest/userguide/create_trail_naming_policy.html]
. **/
      S3BucketName?: String;
      /** Specifies the Amazon S3 key prefix that comes after the name of the bucket you
have designated for log file delivery. For more information, see Finding Your
CloudTrail Log Files
[http://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-find-log-files.html]
. The maximum length is 200 characters. **/
      S3KeyPrefix?: String;
      /** Specifies the name of the Amazon SNS topic defined for notification of log file
delivery. The maximum length is 256 characters. **/
      SnsTopicName?: String;
      /** Specifies whether the trail is publishing events from global services such as
IAM to the log files. **/
      IncludeGlobalServiceEvents?: Boolean;
      /** Specifies whether the trail applies only to the current region or to all
regions. The default is false. If the trail exists only in the current region
and this value is set to true, shadow trails (replications of the trail) will be
created in the other regions. If the trail exists in all regions and this value
is set to false, the trail will remain in the region where it was created, and
its shadow trails in other regions will be deleted. **/
      IsMultiRegionTrail?: Boolean;
      /** Specifies whether log file validation is enabled. The default is false.

When you disable log file integrity validation, the chain of digest files is
broken after one hour. CloudTrail will not create digest files for log files
that were delivered during a period in which log file integrity validation was
disabled. For example, if you enable log file integrity validation at noon on
January 1, disable it at noon on January 2, and re-enable it at noon on January
10, digest files will not be created for the log files delivered from noon on
January 2 to noon on January 10. The same applies whenever you stop CloudTrail
logging or delete a trail. **/
      EnableLogFileValidation?: Boolean;
      /** Specifies a log group name using an Amazon Resource Name (ARN), a unique
identifier that represents the log group to which CloudTrail logs will be
delivered. Not required unless you specify CloudWatchLogsRoleArn. **/
      CloudWatchLogsLogGroupArn?: String;
      /** Specifies the role for the CloudWatch Logs endpoint to assume to write to a
user&#x27;s log group. **/
      CloudWatchLogsRoleArn?: String;
      /** Specifies the KMS key ID to use to encrypt the logs delivered by CloudTrail. The
value can be a an alias name prefixed by &quot;alias/&quot;, a fully specified ARN to an
alias, a fully specified ARN to a key, or a globally unique identifier.

Examples:

&amp;#42;  alias/MyAliasName
 
 
*  arn:aws:kms:us-east-1:123456789012:alias/MyAliasName
 
 
*  arn:aws:kms:us-east-1:123456789012:key/12345678-1234-1234-1234-123456789012
 
 
*  12345678-1234-1234-1234-123456789012 **/
      KmsKeyId?: String;
    }
    export interface UpdateTrailResponse {
      /** Specifies the name of the trail. **/
      Name?: String;
      /** Specifies the name of the Amazon S3 bucket designated for publishing log files. **/
      S3BucketName?: String;
      /** Specifies the Amazon S3 key prefix that comes after the name of the bucket you
have designated for log file delivery. For more information, see Finding Your
CloudTrail Log Files
[http://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-find-log-files.html]
. **/
      S3KeyPrefix?: String;
      /** This field is deprecated. Use SnsTopicARN. **/
      SnsTopicName?: String;
      /** Specifies the ARN of the Amazon SNS topic that CloudTrail uses to send
notifications when log files are delivered. The format of a topic ARN is:

arn:aws:sns:us-east-1:123456789012:MyTopic **/
      SnsTopicARN?: String;
      /** Specifies whether the trail is publishing events from global services such as
IAM to the log files. **/
      IncludeGlobalServiceEvents?: Boolean;
      /** Specifies whether the trail exists in one region or in all regions. **/
      IsMultiRegionTrail?: Boolean;
      /** Specifies the ARN of the trail that was updated. The format of a trail ARN is:

arn:aws:cloudtrail:us-east-1:123456789012:trail/MyTrail **/
      TrailARN?: String;
      /** Specifies whether log file integrity validation is enabled. **/
      LogFileValidationEnabled?: Boolean;
      /** Specifies the Amazon Resource Name (ARN) of the log group to which CloudTrail
logs will be delivered. **/
      CloudWatchLogsLogGroupArn?: String;
      /** Specifies the role for the CloudWatch Logs endpoint to assume to write to a
user&#x27;s log group. **/
      CloudWatchLogsRoleArn?: String;
      /** Specifies the KMS key ID that encrypts the logs delivered by CloudTrail. The
value is a fully specified ARN to a KMS key in the format:

arn:aws:kms:us-east-1:123456789012:key/12345678-1234-1234-1234-123456789012 **/
      KmsKeyId?: String;
    }
  }
}
