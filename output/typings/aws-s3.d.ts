// Type definitions for aws-sdk - Amazon Simple Storage Service
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

// COMMENTED <reference path="./aws-sdk.d.ts" />

declare module "aws-sdk" {

  /**
    * apiVersion: 2006-03-01
    * endpointPrefix: s3
    * serviceAbbreviation: Amazon S3
    * signatureVersion: s3
    * protocol: rest-xml
    *
    * 
    *
    */
  export class S3 extends Service {
    constructor(options?: any);
    endpoint: Endpoint;
    /**
     * Aborts a multipart upload.

To verify that all parts have been removed, so you don&#x27;t get charged for the
part storage, you should call the List Parts operation and ensure the parts list
is empty.
     *
     * @error NoSuchUpload   
     */
    abortMultipartUpload(params: S3.AbortMultipartUploadRequest, callback?: (err: S3.NoSuchUpload | any, data: S3.AbortMultipartUploadOutput | any) => void): Request<S3.AbortMultipartUploadOutput | any, S3.NoSuchUpload | any>;
    /**
     * Completes a multipart upload by assembling previously uploaded parts.
     *
     */
    completeMultipartUpload(params: S3.CompleteMultipartUploadRequest, callback?: (err: any, data: S3.CompleteMultipartUploadOutput | any) => void): Request<S3.CompleteMultipartUploadOutput | any, any>;
    /**
     * Creates a copy of an object that is already stored in Amazon S3.
     *
     * @error ObjectNotInActiveTierError   
     */
    copyObject(params: S3.CopyObjectRequest, callback?: (err: S3.ObjectNotInActiveTierError | any, data: S3.CopyObjectOutput | any) => void): Request<S3.CopyObjectOutput | any, S3.ObjectNotInActiveTierError | any>;
    /**
     * Creates a new bucket.
     *
     * @error BucketAlreadyExists   
     * @error BucketAlreadyOwnedByYou   
     */
    createBucket(params: S3.CreateBucketRequest, callback?: (err: S3.BucketAlreadyExists | S3.BucketAlreadyOwnedByYou | any, data: S3.CreateBucketOutput | any) => void): Request<S3.CreateBucketOutput | any, S3.BucketAlreadyExists | S3.BucketAlreadyOwnedByYou | any>;
    /**
     * Initiates a multipart upload and returns an upload ID.

Note: After you initiate multipart upload and upload one or more parts, you must
either complete or abort multipart upload in order to stop getting charged for
storage of the uploaded parts. Only after you either complete or abort multipart
upload, Amazon S3 frees up the parts storage and stops charging you for the
parts storage.
     *
     */
    createMultipartUpload(params: S3.CreateMultipartUploadRequest, callback?: (err: any, data: S3.CreateMultipartUploadOutput | any) => void): Request<S3.CreateMultipartUploadOutput | any, any>;
    /**
     * Deletes the bucket. All objects (including all object versions and Delete
Markers) in the bucket must be deleted before the bucket itself can be deleted.
     *
     */
    deleteBucket(params: S3.DeleteBucketRequest, callback?: (err: any, data: any) => void): Request<any, any>;
    /**
     * Deletes the cors configuration information set for the bucket.
     *
     */
    deleteBucketCors(params: S3.DeleteBucketCorsRequest, callback?: (err: any, data: any) => void): Request<any, any>;
    /**
     * Deletes the lifecycle configuration from the bucket.
     *
     */
    deleteBucketLifecycle(params: S3.DeleteBucketLifecycleRequest, callback?: (err: any, data: any) => void): Request<any, any>;
    /**
     * Deletes the policy from the bucket.
     *
     */
    deleteBucketPolicy(params: S3.DeleteBucketPolicyRequest, callback?: (err: any, data: any) => void): Request<any, any>;
    /**
     * Deletes the replication configuration from the bucket.
     *
     */
    deleteBucketReplication(params: S3.DeleteBucketReplicationRequest, callback?: (err: any, data: any) => void): Request<any, any>;
    /**
     * Deletes the tags from the bucket.
     *
     */
    deleteBucketTagging(params: S3.DeleteBucketTaggingRequest, callback?: (err: any, data: any) => void): Request<any, any>;
    /**
     * This operation removes the website configuration from the bucket.
     *
     */
    deleteBucketWebsite(params: S3.DeleteBucketWebsiteRequest, callback?: (err: any, data: any) => void): Request<any, any>;
    /**
     * Removes the null version (if there is one) of an object and inserts a delete
marker, which becomes the latest version of the object. If there isn&#x27;t a null
version, Amazon S3 does not remove any objects.
     *
     */
    deleteObject(params: S3.DeleteObjectRequest, callback?: (err: any, data: S3.DeleteObjectOutput | any) => void): Request<S3.DeleteObjectOutput | any, any>;
    /**
     * This operation enables you to delete multiple objects from a bucket using a
single HTTP request. You may specify up to 1000 keys.
     *
     */
    deleteObjects(params: S3.DeleteObjectsRequest, callback?: (err: any, data: S3.DeleteObjectsOutput | any) => void): Request<S3.DeleteObjectsOutput | any, any>;
    /**
     * Returns the accelerate configuration of a bucket.
     *
     */
    getBucketAccelerateConfiguration(params: S3.GetBucketAccelerateConfigurationRequest, callback?: (err: any, data: S3.GetBucketAccelerateConfigurationOutput | any) => void): Request<S3.GetBucketAccelerateConfigurationOutput | any, any>;
    /**
     * Gets the access control policy for the bucket.
     *
     */
    getBucketAcl(params: S3.GetBucketAclRequest, callback?: (err: any, data: S3.GetBucketAclOutput | any) => void): Request<S3.GetBucketAclOutput | any, any>;
    /**
     * Returns the cors configuration for the bucket.
     *
     */
    getBucketCors(params: S3.GetBucketCorsRequest, callback?: (err: any, data: S3.GetBucketCorsOutput | any) => void): Request<S3.GetBucketCorsOutput | any, any>;
    /**
     * Deprecated, see the GetBucketLifecycleConfiguration operation.
     *
     */
    getBucketLifecycle(params: S3.GetBucketLifecycleRequest, callback?: (err: any, data: S3.GetBucketLifecycleOutput | any) => void): Request<S3.GetBucketLifecycleOutput | any, any>;
    /**
     * Returns the lifecycle configuration information set on the bucket.
     *
     */
    getBucketLifecycleConfiguration(params: S3.GetBucketLifecycleConfigurationRequest, callback?: (err: any, data: S3.GetBucketLifecycleConfigurationOutput | any) => void): Request<S3.GetBucketLifecycleConfigurationOutput | any, any>;
    /**
     * Returns the region the bucket resides in.
     *
     */
    getBucketLocation(params: S3.GetBucketLocationRequest, callback?: (err: any, data: S3.GetBucketLocationOutput | any) => void): Request<S3.GetBucketLocationOutput | any, any>;
    /**
     * Returns the logging status of a bucket and the permissions users have to view
and modify that status. To use GET, you must be the bucket owner.
     *
     */
    getBucketLogging(params: S3.GetBucketLoggingRequest, callback?: (err: any, data: S3.GetBucketLoggingOutput | any) => void): Request<S3.GetBucketLoggingOutput | any, any>;
    /**
     * Deprecated, see the GetBucketNotificationConfiguration operation.
     *
     */
    getBucketNotification(params: S3.GetBucketNotificationConfigurationRequest, callback?: (err: any, data: S3.NotificationConfigurationDeprecated | any) => void): Request<S3.NotificationConfigurationDeprecated | any, any>;
    /**
     * Returns the notification configuration of a bucket.
     *
     */
    getBucketNotificationConfiguration(params: S3.GetBucketNotificationConfigurationRequest, callback?: (err: any, data: S3.NotificationConfiguration | any) => void): Request<S3.NotificationConfiguration | any, any>;
    /**
     * Returns the policy of a specified bucket.
     *
     */
    getBucketPolicy(params: S3.GetBucketPolicyRequest, callback?: (err: any, data: S3.GetBucketPolicyOutput | any) => void): Request<S3.GetBucketPolicyOutput | any, any>;
    /**
     * Returns the replication configuration of a bucket.
     *
     */
    getBucketReplication(params: S3.GetBucketReplicationRequest, callback?: (err: any, data: S3.GetBucketReplicationOutput | any) => void): Request<S3.GetBucketReplicationOutput | any, any>;
    /**
     * Returns the request payment configuration of a bucket.
     *
     */
    getBucketRequestPayment(params: S3.GetBucketRequestPaymentRequest, callback?: (err: any, data: S3.GetBucketRequestPaymentOutput | any) => void): Request<S3.GetBucketRequestPaymentOutput | any, any>;
    /**
     * Returns the tag set associated with the bucket.
     *
     */
    getBucketTagging(params: S3.GetBucketTaggingRequest, callback?: (err: any, data: S3.GetBucketTaggingOutput | any) => void): Request<S3.GetBucketTaggingOutput | any, any>;
    /**
     * Returns the versioning state of a bucket.
     *
     */
    getBucketVersioning(params: S3.GetBucketVersioningRequest, callback?: (err: any, data: S3.GetBucketVersioningOutput | any) => void): Request<S3.GetBucketVersioningOutput | any, any>;
    /**
     * Returns the website configuration for a bucket.
     *
     */
    getBucketWebsite(params: S3.GetBucketWebsiteRequest, callback?: (err: any, data: S3.GetBucketWebsiteOutput | any) => void): Request<S3.GetBucketWebsiteOutput | any, any>;
    /**
     * Retrieves objects from Amazon S3.
     *
     * @error NoSuchKey   
     */
    getObject(params: S3.GetObjectRequest, callback?: (err: S3.NoSuchKey | any, data: S3.GetObjectOutput | any) => void): Request<S3.GetObjectOutput | any, S3.NoSuchKey | any>;
    /**
     * Returns the access control list (ACL) of an object.
     *
     * @error NoSuchKey   
     */
    getObjectAcl(params: S3.GetObjectAclRequest, callback?: (err: S3.NoSuchKey | any, data: S3.GetObjectAclOutput | any) => void): Request<S3.GetObjectAclOutput | any, S3.NoSuchKey | any>;
    /**
     * Return torrent files from a bucket.
     *
     */
    getObjectTorrent(params: S3.GetObjectTorrentRequest, callback?: (err: any, data: S3.GetObjectTorrentOutput | any) => void): Request<S3.GetObjectTorrentOutput | any, any>;
    /**
     * This operation is useful to determine if a bucket exists and you have permission
to access it.
     *
     * @error NoSuchBucket   
     */
    headBucket(params: S3.HeadBucketRequest, callback?: (err: S3.NoSuchBucket | any, data: any) => void): Request<any, S3.NoSuchBucket | any>;
    /**
     * The HEAD operation retrieves metadata from an object without returning the
object itself. This operation is useful if you&#x27;re only interested in an object&#x27;s
metadata. To use HEAD, you must have READ access to the object.
     *
     * @error NoSuchKey   
     */
    headObject(params: S3.HeadObjectRequest, callback?: (err: S3.NoSuchKey | any, data: S3.HeadObjectOutput | any) => void): Request<S3.HeadObjectOutput | any, S3.NoSuchKey | any>;
    /**
     * Returns a list of all buckets owned by the authenticated sender of the request.
     *
     */
    listBuckets(callback?: (err: any, data: S3.ListBucketsOutput | any) => void): Request<S3.ListBucketsOutput | any, any>;
    /**
     * This operation lists in-progress multipart uploads.
     *
     */
    listMultipartUploads(params: S3.ListMultipartUploadsRequest, callback?: (err: any, data: S3.ListMultipartUploadsOutput | any) => void): Request<S3.ListMultipartUploadsOutput | any, any>;
    /**
     * Returns metadata about all of the versions of objects in a bucket.
     *
     */
    listObjectVersions(params: S3.ListObjectVersionsRequest, callback?: (err: any, data: S3.ListObjectVersionsOutput | any) => void): Request<S3.ListObjectVersionsOutput | any, any>;
    /**
     * Returns some or all (up to 1000) of the objects in a bucket. You can use the
request parameters as selection criteria to return a subset of the objects in a
bucket.
     *
     * @error NoSuchBucket   
     */
    listObjects(params: S3.ListObjectsRequest, callback?: (err: S3.NoSuchBucket | any, data: S3.ListObjectsOutput | any) => void): Request<S3.ListObjectsOutput | any, S3.NoSuchBucket | any>;
    /**
     * Returns some or all (up to 1000) of the objects in a bucket. You can use the
request parameters as selection criteria to return a subset of the objects in a
bucket. Note: ListObjectsV2 is the revised List Objects API and we recommend you
use this revised API for new application development.
     *
     * @error NoSuchBucket   
     */
    listObjectsV2(params: S3.ListObjectsV2Request, callback?: (err: S3.NoSuchBucket | any, data: S3.ListObjectsV2Output | any) => void): Request<S3.ListObjectsV2Output | any, S3.NoSuchBucket | any>;
    /**
     * Lists the parts that have been uploaded for a specific multipart upload.
     *
     */
    listParts(params: S3.ListPartsRequest, callback?: (err: any, data: S3.ListPartsOutput | any) => void): Request<S3.ListPartsOutput | any, any>;
    /**
     * Sets the accelerate configuration of an existing bucket.
     *
     */
    putBucketAccelerateConfiguration(params: S3.PutBucketAccelerateConfigurationRequest, callback?: (err: any, data: any) => void): Request<any, any>;
    /**
     * Sets the permissions on a bucket using access control lists (ACL).
     *
     */
    putBucketAcl(params: S3.PutBucketAclRequest, callback?: (err: any, data: any) => void): Request<any, any>;
    /**
     * Sets the cors configuration for a bucket.
     *
     */
    putBucketCors(params: S3.PutBucketCorsRequest, callback?: (err: any, data: any) => void): Request<any, any>;
    /**
     * Deprecated, see the PutBucketLifecycleConfiguration operation.
     *
     */
    putBucketLifecycle(params: S3.PutBucketLifecycleRequest, callback?: (err: any, data: any) => void): Request<any, any>;
    /**
     * Sets lifecycle configuration for your bucket. If a lifecycle configuration
exists, it replaces it.
     *
     */
    putBucketLifecycleConfiguration(params: S3.PutBucketLifecycleConfigurationRequest, callback?: (err: any, data: any) => void): Request<any, any>;
    /**
     * Set the logging parameters for a bucket and to specify permissions for who can
view and modify the logging parameters. To set the logging status of a bucket,
you must be the bucket owner.
     *
     */
    putBucketLogging(params: S3.PutBucketLoggingRequest, callback?: (err: any, data: any) => void): Request<any, any>;
    /**
     * Deprecated, see the PutBucketNotificationConfiguraiton operation.
     *
     */
    putBucketNotification(params: S3.PutBucketNotificationRequest, callback?: (err: any, data: any) => void): Request<any, any>;
    /**
     * Enables notifications of specified events for a bucket.
     *
     */
    putBucketNotificationConfiguration(params: S3.PutBucketNotificationConfigurationRequest, callback?: (err: any, data: any) => void): Request<any, any>;
    /**
     * Replaces a policy on a bucket. If the bucket already has a policy, the one in
this request completely replaces it.
     *
     */
    putBucketPolicy(params: S3.PutBucketPolicyRequest, callback?: (err: any, data: any) => void): Request<any, any>;
    /**
     * Creates a new replication configuration (or replaces an existing one, if
present).
     *
     */
    putBucketReplication(params: S3.PutBucketReplicationRequest, callback?: (err: any, data: any) => void): Request<any, any>;
    /**
     * Sets the request payment configuration for a bucket. By default, the bucket
owner pays for downloads from the bucket. This configuration parameter enables
the bucket owner (only) to specify that the person requesting the download will
be charged for the download. Documentation on requester pays buckets can be
found at
http://docs.aws.amazon.com/AmazonS3/latest/dev/RequesterPaysBuckets.html
     *
     */
    putBucketRequestPayment(params: S3.PutBucketRequestPaymentRequest, callback?: (err: any, data: any) => void): Request<any, any>;
    /**
     * Sets the tags for a bucket.
     *
     */
    putBucketTagging(params: S3.PutBucketTaggingRequest, callback?: (err: any, data: any) => void): Request<any, any>;
    /**
     * Sets the versioning state of an existing bucket. To set the versioning state,
you must be the bucket owner.
     *
     */
    putBucketVersioning(params: S3.PutBucketVersioningRequest, callback?: (err: any, data: any) => void): Request<any, any>;
    /**
     * Set the website configuration for a bucket.
     *
     */
    putBucketWebsite(params: S3.PutBucketWebsiteRequest, callback?: (err: any, data: any) => void): Request<any, any>;
    /**
     * Adds an object to a bucket.
     *
     */
    putObject(params: S3.PutObjectRequest, callback?: (err: any, data: S3.PutObjectOutput | any) => void): Request<S3.PutObjectOutput | any, any>;
    /**
     * uses the acl subresource to set the access control list (ACL) permissions for an
object that already exists in a bucket
     *
     * @error NoSuchKey   
     */
    putObjectAcl(params: S3.PutObjectAclRequest, callback?: (err: S3.NoSuchKey | any, data: S3.PutObjectAclOutput | any) => void): Request<S3.PutObjectAclOutput | any, S3.NoSuchKey | any>;
    /**
     * Restores an archived copy of an object back into Amazon S3
     *
     * @error ObjectAlreadyInActiveTierError   
     */
    restoreObject(params: S3.RestoreObjectRequest, callback?: (err: S3.ObjectAlreadyInActiveTierError | any, data: S3.RestoreObjectOutput | any) => void): Request<S3.RestoreObjectOutput | any, S3.ObjectAlreadyInActiveTierError | any>;
    /**
     * Uploads a part in a multipart upload.

Note: After you initiate multipart upload and upload one or more parts, you must
either complete or abort multipart upload in order to stop getting charged for
storage of the uploaded parts. Only after you either complete or abort multipart
upload, Amazon S3 frees up the parts storage and stops charging you for the
parts storage.
     *
     */
    uploadPart(params: S3.UploadPartRequest, callback?: (err: any, data: S3.UploadPartOutput | any) => void): Request<S3.UploadPartOutput | any, any>;
    /**
     * Uploads a part by copying data from an existing object as data source.
     *
     */
    uploadPartCopy(params: S3.UploadPartCopyRequest, callback?: (err: any, data: S3.UploadPartCopyOutput | any) => void): Request<S3.UploadPartCopyOutput | any, any>;

    /**
     * Found on JS Sources - Sorry for the inconvenience :)
     *
     * *
     * Get a pre-signed URL for a given operation name.
     *
     * @note You must ensure that you have static or previously resolved
     *   credentials if you call this method synchronously (with no callback),
     *   otherwise it may not properly sign the request. If you cannot guarantee
     *   this (you are using an asynchronous credential provider, i.e., EC2
     *   IAM roles), you should always call this method with an asynchronous
     *   callback.
     * @param operation [String] the name of the operation to call
     * @param params [map] parameters to pass to the operation. See the given
     *   operation for the expected operation parameters. In addition, you can
     *   also pass the "Expires" parameter to inform S3 how long the URL should
     *   work for.
     * @option params Expires [Integer] (900) the number of seconds to expire
     *   the pre-signed URL operation in. Defaults to 15 minutes.
     * @param callback [Function] if a callback is provided, this function will
     *   pass the URL as the second parameter (after the error parameter) to
     *   the callback function.
     * @return [String] if called synchronously (with no callback), returns the
     *   signed URL.
     * @return [null] nothing is returned if a callback is provided.
     * @example Pre-signing a getObject operation (synchronously)
     *   var params = {Bucket: 'bucket', Key: 'key'};
     *   var url = s3.getSignedUrl('getObject', params);
     *   console.log('The URL is', url);
     * @example Pre-signing a putObject (asynchronously)
     *   var params = {Bucket: 'bucket', Key: 'key'};
     *   s3.getSignedUrl('putObject', params, function (err, url) {
     *     console.log('The URL is', url);
     *   });
     * @example Pre-signing a putObject operation with a specific payload
     *   var params = {Bucket: 'bucket', Key: 'key', Body: 'body'};
     *   var url = s3.getSignedUrl('putObject', params);
     *   console.log('The URL is', url);
     * @example Passing in a 1-minute expiry time for a pre-signed URL
     *   var params = {Bucket: 'bucket', Key: 'key', Expires: 60};
     *   var url = s3.getSignedUrl('getObject', params);
     *   console.log('The URL is', url); // expires in 60 seconds
   
     **/
    getSignedUrl(...args: any[]): any
    createBucket(...args: any[]): any
    /**
     * Found on JS Sources - Sorry for the inconvenience :)
     *
     * *
     * @overload upload(params = {}, [options], [callback])
     *   Uploads an arbitrarily sized buffer, blob, or stream, using intelligent
     *   concurrent handling of parts if the payload is large enough. You can
     *   configure the concurrent queue size by setting `options`. Note that this
     *   is the only operation for which the SDK can retry requests with stream
     *   bodies.
     *
     *   @param (see AWS.S3.putObject)
     *   @option (see AWS.S3.ManagedUpload.constructor)
     *   @return [AWS.S3.ManagedUpload] the managed upload object that can call
     *     `send()` or track progress.
     *   @example Uploading a stream object
     *     var params = {Bucket: 'bucket', Key: 'key', Body: stream};
     *     s3.upload(params, function(err, data) {
     *       console.log(err, data);
     *     });
     *   @example Uploading a stream with concurrency of 1 and partSize of 10mb
     *     var params = {Bucket: 'bucket', Key: 'key', Body: stream};
     *     var options = {partSize: 10 * 1024 * 1024, queueSize: 1};
     *     s3.upload(params, options, function(err, data) {
     *       console.log(err, data);
     *     });
     * @callback callback function(err, data)
     *   @param err [Error] an error or null if no error occurred.
     *   @param data [map] The response data from the successful upload:
     *     * `Location` (String) the URL of the uploaded object
     *     * `ETag` (String) the ETag of the uploaded object
     *     * `Bucket` (String) the bucket to which the object was uploaded
     *     * `Key` (String) the key to which the object was uploaded
     *   @see AWS.S3.ManagedUpload
   
     **/
    upload(...args: any[]): any
  }

  export module S3 {

    export type AbortDate = number;

    export type AbortRuleId = string;

    export type AcceptRanges = string;

    export type AllowedHeader = string;

    export type AllowedHeaders = AllowedHeader[];

    export type AllowedMethod = string;

    export type AllowedMethods = AllowedMethod[];

    export type AllowedOrigin = string;

    export type AllowedOrigins = AllowedOrigin[];

    export type Body = any;

    export type BucketAccelerateStatus = string;

    export type BucketCannedACL = string;

    export type BucketLocationConstraint = string;

    export type BucketLogsPermission = string;

    export type BucketName = string;

    export type BucketVersioningStatus = string;

    export type Buckets = Bucket[];

    export type CORSRules = CORSRule[];

    export type CacheControl = string;

    export type CloudFunction = string;

    export type CloudFunctionInvocationRole = string;

    export type Code = string;

    export type CommonPrefixList = CommonPrefix[];

    export type CompletedPartList = CompletedPart[];

    export type ContentDisposition = string;

    export type ContentEncoding = string;

    export type ContentLanguage = string;

    export type ContentLength = number;

    export type ContentMD5 = string;

    export type ContentRange = string;

    export type ContentType = string;

    export type CopySource = string;

    export type CopySourceIfMatch = string;

    export type CopySourceIfModifiedSince = number;

    export type CopySourceIfNoneMatch = string;

    export type CopySourceIfUnmodifiedSince = number;

    export type CopySourceRange = string;

    export type CopySourceSSECustomerAlgorithm = string;

    export type CopySourceSSECustomerKey = any;

    export type CopySourceSSECustomerKeyMD5 = string;

    export type CopySourceVersionId = string;

    export type CreationDate = number;

    export type Date = number;

    export type Days = number;

    export type DaysAfterInitiation = number;

    export type DeleteMarker = boolean;

    export type DeleteMarkerVersionId = string;

    export type DeleteMarkers = DeleteMarkerEntry[];

    export type DeletedObjects = DeletedObject[];

    export type Delimiter = string;

    export type DisplayName = string;

    export type ETag = string;

    export type EmailAddress = string;

    export type EncodingType = string;

    export type Errors = Error[];

    export type Event = string;

    export type EventList = Event[];

    export type Expiration = string;

    export type ExpirationStatus = string;

    export type ExpiredObjectDeleteMarker = boolean;

    export type Expires = number;

    export type ExposeHeader = string;

    export type ExposeHeaders = ExposeHeader[];

    export type FetchOwner = boolean;

    export type FilterRuleList = FilterRule[];

    export type FilterRuleName = string;

    export type FilterRuleValue = string;

    export type GrantFullControl = string;

    export type GrantRead = string;

    export type GrantReadACP = string;

    export type GrantWrite = string;

    export type GrantWriteACP = string;

    export type Grants = Grant[];

    export type HostName = string;

    export type HttpErrorCodeReturnedEquals = string;

    export type HttpRedirectCode = string;

    export type ID = string;

    export type IfMatch = string;

    export type IfModifiedSince = number;

    export type IfNoneMatch = string;

    export type IfUnmodifiedSince = number;

    export type Initiated = number;

    export type IsLatest = boolean;

    export type IsTruncated = boolean;

    export type KeyCount = number;

    export type KeyMarker = string;

    export type KeyPrefixEquals = string;

    export type LambdaFunctionArn = string;

    export type LambdaFunctionConfigurationList = LambdaFunctionConfiguration[];

    export type LastModified = number;

    export type LifecycleRules = LifecycleRule[];

    export type Location = string;

    export type MFA = string;

    export type MFADelete = string;

    export type MFADeleteStatus = string;

    export type Marker = string;

    export type MaxAgeSeconds = number;

    export type MaxKeys = number;

    export type MaxParts = number;

    export type MaxUploads = number;

    export type Message = string;

    export type Metadata = { [key: string]: MetadataValue };

    export type MetadataDirective = string;

    export type MetadataKey = string;

    export type MetadataValue = string;

    export type MissingMeta = number;

    export type MultipartUploadId = string;

    export type MultipartUploadList = MultipartUpload[];

    export type NextKeyMarker = string;

    export type NextMarker = string;

    export type NextPartNumberMarker = number;

    export type NextToken = string;

    export type NextUploadIdMarker = string;

    export type NextVersionIdMarker = string;

    export type NoncurrentVersionTransitionList = NoncurrentVersionTransition[];

    export type NotificationId = string;

    export type ObjectCannedACL = string;

    export type ObjectIdentifierList = ObjectIdentifier[];

    export type ObjectKey = string;

    export type ObjectList = Object[];

    export type ObjectStorageClass = string;

    export type ObjectVersionId = string;

    export type ObjectVersionList = ObjectVersion[];

    export type ObjectVersionStorageClass = string;

    export type PartNumber = number;

    export type PartNumberMarker = number;

    export type Parts = Part[];

    export type Payer = string;

    export type Permission = string;

    export type Policy = string;

    export type Prefix = string;

    export type Protocol = string;

    export type QueueArn = string;

    export type QueueConfigurationList = QueueConfiguration[];

    export type Quiet = boolean;

    export type Range = string;

    export type ReplaceKeyPrefixWith = string;

    export type ReplaceKeyWith = string;

    export type ReplicationRuleStatus = string;

    export type ReplicationRules = ReplicationRule[];

    export type ReplicationStatus = string;

    export type RequestCharged = string;

    export type RequestPayer = string;

    export type ResponseCacheControl = string;

    export type ResponseContentDisposition = string;

    export type ResponseContentEncoding = string;

    export type ResponseContentLanguage = string;

    export type ResponseContentType = string;

    export type ResponseExpires = number;

    export type Restore = string;

    export type Role = string;

    export type RoutingRules = RoutingRule[];

    export type Rules = Rule[];

    export type SSECustomerAlgorithm = string;

    export type SSECustomerKey = any;

    export type SSECustomerKeyMD5 = string;

    export type SSEKMSKeyId = string;

    export type ServerSideEncryption = string;

    export type Size = number;

    export type StartAfter = string;

    export type StorageClass = string;

    export type Suffix = string;

    export type TagSet = Tag[];

    export type TargetBucket = string;

    export type TargetGrants = TargetGrant[];

    export type TargetPrefix = string;

    export type Token = string;

    export type TopicArn = string;

    export type TopicConfigurationList = TopicConfiguration[];

    export type TransitionList = Transition[];

    export type TransitionStorageClass = string;

    export type Type = string;

    export type URI = string;

    export type UploadIdMarker = string;

    export type Value = string;

    export type VersionIdMarker = string;

    export type WebsiteRedirectLocation = string;

    export interface AbortIncompleteMultipartUpload {
      /** Indicates the number of days that must pass since initiation for Lifecycle to
abort an Incomplete Multipart Upload. **/
      DaysAfterInitiation?: DaysAfterInitiation;
    }
    export interface AbortMultipartUploadOutput {
      RequestCharged?: RequestCharged;
    }
    export interface AbortMultipartUploadRequest {
      Bucket: BucketName;
      Key: ObjectKey;
      UploadId: MultipartUploadId;
      RequestPayer?: RequestPayer;
    }
    export interface AccelerateConfiguration {
      /** The accelerate configuration of the bucket. **/
      Status?: BucketAccelerateStatus;
    }
    export interface AccessControlPolicy {
      /** A list of grants. **/
      Grants?: Grants;
      Owner?: Owner;
    }
    export interface Bucket {
      /** The name of the bucket. **/
      Name?: BucketName;
      /** Date the bucket was created. **/
      CreationDate?: CreationDate;
    }
    export interface BucketAlreadyExists {
    }
    export interface BucketAlreadyOwnedByYou {
    }
    export interface BucketLifecycleConfiguration {
      Rules: LifecycleRules;
    }
    export interface BucketLoggingStatus {
      LoggingEnabled?: LoggingEnabled;
    }
    export interface CORSConfiguration {
      CORSRules: CORSRules;
    }
    export interface CORSRule {
      /** Specifies which headers are allowed in a pre-flight OPTIONS request. **/
      AllowedHeaders?: AllowedHeaders;
      /** Identifies HTTP methods that the domain/origin specified in the rule is allowed
to execute. **/
      AllowedMethods: AllowedMethods;
      /** One or more origins you want customers to be able to access the bucket from. **/
      AllowedOrigins: AllowedOrigins;
      /** One or more headers in the response that you want customers to be able to access
from their applications (for example, from a JavaScript XMLHttpRequest object). **/
      ExposeHeaders?: ExposeHeaders;
      /** The time in seconds that your browser is to cache the preflight response for the
specified resource. **/
      MaxAgeSeconds?: MaxAgeSeconds;
    }
    export interface CloudFunctionConfiguration {
      Id?: NotificationId;
      Event?: Event;
      Events?: EventList;
      CloudFunction?: CloudFunction;
      InvocationRole?: CloudFunctionInvocationRole;
    }
    export interface CommonPrefix {
      Prefix?: Prefix;
    }
    export interface CompleteMultipartUploadOutput {
      Location?: Location;
      Bucket?: BucketName;
      Key?: ObjectKey;
      /** If the object expiration is configured, this will contain the expiration date
(expiry-date) and rule ID (rule-id). The value of rule-id is URL encoded. **/
      Expiration?: Expiration;
      /** Entity tag of the object. **/
      ETag?: ETag;
      /** The Server-side encryption algorithm used when storing this object in S3 (e.g.,
AES256, aws:kms). **/
      ServerSideEncryption?: ServerSideEncryption;
      /** Version of the object. **/
      VersionId?: ObjectVersionId;
      /** If present, specifies the ID of the AWS Key Management Service (KMS) master
encryption key that was used for the object. **/
      SSEKMSKeyId?: SSEKMSKeyId;
      RequestCharged?: RequestCharged;
    }
    export interface CompleteMultipartUploadRequest {
      Bucket: BucketName;
      Key: ObjectKey;
      MultipartUpload?: CompletedMultipartUpload;
      UploadId: MultipartUploadId;
      RequestPayer?: RequestPayer;
    }
    export interface CompletedMultipartUpload {
      Parts?: CompletedPartList;
    }
    export interface CompletedPart {
      /** Entity tag returned when the part was uploaded. **/
      ETag?: ETag;
      /** Part number that identifies the part. This is a positive integer between 1 and
10,000. **/
      PartNumber?: PartNumber;
    }
    export interface Condition {
      /** The HTTP error code when the redirect is applied. In the event of an error, if
the error code equals this value, then the specified redirect is applied.
Required when parent element Condition is specified and sibling KeyPrefixEquals
is not specified. If both are specified, then both must be true for the redirect
to be applied. **/
      HttpErrorCodeReturnedEquals?: HttpErrorCodeReturnedEquals;
      /** The object key name prefix when the redirect is applied. For example, to
redirect requests for ExamplePage.html, the key prefix will be ExamplePage.html.
To redirect request for all pages with the prefix docs/, the key prefix will be
/docs, which identifies all objects in the docs/ folder. Required when the
parent element Condition is specified and sibling HttpErrorCodeReturnedEquals is
not specified. If both conditions are specified, both must be true for the
redirect to be applied. **/
      KeyPrefixEquals?: KeyPrefixEquals;
    }
    export interface CopyObjectOutput {
      CopyObjectResult?: CopyObjectResult;
      /** If the object expiration is configured, the response includes this header. **/
      Expiration?: Expiration;
      CopySourceVersionId?: CopySourceVersionId;
      /** Version ID of the newly created copy. **/
      VersionId?: ObjectVersionId;
      /** The Server-side encryption algorithm used when storing this object in S3 (e.g.,
AES256, aws:kms). **/
      ServerSideEncryption?: ServerSideEncryption;
      /** If server-side encryption with a customer-provided encryption key was requested,
the response will include this header confirming the encryption algorithm used. **/
      SSECustomerAlgorithm?: SSECustomerAlgorithm;
      /** If server-side encryption with a customer-provided encryption key was requested,
the response will include this header to provide round trip message integrity
verification of the customer-provided encryption key. **/
      SSECustomerKeyMD5?: SSECustomerKeyMD5;
      /** If present, specifies the ID of the AWS Key Management Service (KMS) master
encryption key that was used for the object. **/
      SSEKMSKeyId?: SSEKMSKeyId;
      RequestCharged?: RequestCharged;
    }
    export interface CopyObjectRequest {
      /** The canned ACL to apply to the object. **/
      ACL?: ObjectCannedACL;
      Bucket: BucketName;
      /** Specifies caching behavior along the request/reply chain. **/
      CacheControl?: CacheControl;
      /** Specifies presentational information for the object. **/
      ContentDisposition?: ContentDisposition;
      /** Specifies what content encodings have been applied to the object and thus what
decoding mechanisms must be applied to obtain the media-type referenced by the
Content-Type header field. **/
      ContentEncoding?: ContentEncoding;
      /** The language the content is in. **/
      ContentLanguage?: ContentLanguage;
      /** A standard MIME type describing the format of the object data. **/
      ContentType?: ContentType;
      /** The name of the source bucket and key name of the source object, separated by a
slash (/). Must be URL-encoded. **/
      CopySource: CopySource;
      /** Copies the object if its entity tag (ETag) matches the specified tag. **/
      CopySourceIfMatch?: CopySourceIfMatch;
      /** Copies the object if it has been modified since the specified time. **/
      CopySourceIfModifiedSince?: CopySourceIfModifiedSince;
      /** Copies the object if its entity tag (ETag) is different than the specified ETag. **/
      CopySourceIfNoneMatch?: CopySourceIfNoneMatch;
      /** Copies the object if it hasn&#x27;t been modified since the specified time. **/
      CopySourceIfUnmodifiedSince?: CopySourceIfUnmodifiedSince;
      /** The date and time at which the object is no longer cacheable. **/
      Expires?: Expires;
      /** Gives the grantee READ, READ_ACP, and WRITE_ACP permissions on the object. **/
      GrantFullControl?: GrantFullControl;
      /** Allows grantee to read the object data and its metadata. **/
      GrantRead?: GrantRead;
      /** Allows grantee to read the object ACL. **/
      GrantReadACP?: GrantReadACP;
      /** Allows grantee to write the ACL for the applicable object. **/
      GrantWriteACP?: GrantWriteACP;
      Key: ObjectKey;
      /** A map of metadata to store with the object in S3. **/
      Metadata?: Metadata;
      /** Specifies whether the metadata is copied from the source object or replaced with
metadata provided in the request. **/
      MetadataDirective?: MetadataDirective;
      /** The Server-side encryption algorithm used when storing this object in S3 (e.g.,
AES256, aws:kms). **/
      ServerSideEncryption?: ServerSideEncryption;
      /** The type of storage to use for the object. Defaults to &#x27;STANDARD&#x27;. **/
      StorageClass?: StorageClass;
      /** If the bucket is configured as a website, redirects requests for this object to
another object in the same bucket or to an external URL. Amazon S3 stores the
value of this header in the object metadata. **/
      WebsiteRedirectLocation?: WebsiteRedirectLocation;
      /** Specifies the algorithm to use to when encrypting the object (e.g., AES256). **/
      SSECustomerAlgorithm?: SSECustomerAlgorithm;
      /** Specifies the customer-provided encryption key for Amazon S3 to use in
encrypting data. This value is used to store the object and then it is
discarded; Amazon does not store the encryption key. The key must be appropriate
for use with the algorithm specified in the
x-amz-server-side​-encryption​-customer-algorithm header. **/
      SSECustomerKey?: SSECustomerKey;
      /** Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321.
Amazon S3 uses this header for a message integrity check to ensure the
encryption key was transmitted without error. **/
      SSECustomerKeyMD5?: SSECustomerKeyMD5;
      /** Specifies the AWS KMS key ID to use for object encryption. All GET and PUT
requests for an object protected by AWS KMS will fail if not made via SSL or
using SigV4. Documentation on configuring any of the officially supported AWS
SDKs and CLI can be found at
http://docs.aws.amazon.com/AmazonS3/latest/dev/UsingAWSSDK.html#specify-signature-version **/
      SSEKMSKeyId?: SSEKMSKeyId;
      /** Specifies the algorithm to use when decrypting the source object (e.g., AES256). **/
      CopySourceSSECustomerAlgorithm?: CopySourceSSECustomerAlgorithm;
      /** Specifies the customer-provided encryption key for Amazon S3 to use to decrypt
the source object. The encryption key provided in this header must be one that
was used when the source object was created. **/
      CopySourceSSECustomerKey?: CopySourceSSECustomerKey;
      /** Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321.
Amazon S3 uses this header for a message integrity check to ensure the
encryption key was transmitted without error. **/
      CopySourceSSECustomerKeyMD5?: CopySourceSSECustomerKeyMD5;
      RequestPayer?: RequestPayer;
    }
    export interface CopyObjectResult {
      ETag?: ETag;
      LastModified?: LastModified;
    }
    export interface CopyPartResult {
      /** Entity tag of the object. **/
      ETag?: ETag;
      /** Date and time at which the object was uploaded. **/
      LastModified?: LastModified;
    }
    export interface CreateBucketConfiguration {
      /** Specifies the region where the bucket will be created. If you don&#x27;t specify a
region, the bucket will be created in US Standard. **/
      LocationConstraint?: BucketLocationConstraint;
    }
    export interface CreateBucketOutput {
      Location?: Location;
    }
    export interface CreateBucketRequest {
      /** The canned ACL to apply to the bucket. **/
      ACL?: BucketCannedACL;
      Bucket: BucketName;
      CreateBucketConfiguration?: CreateBucketConfiguration;
      /** Allows grantee the read, write, read ACP, and write ACP permissions on the
bucket. **/
      GrantFullControl?: GrantFullControl;
      /** Allows grantee to list the objects in the bucket. **/
      GrantRead?: GrantRead;
      /** Allows grantee to read the bucket ACL. **/
      GrantReadACP?: GrantReadACP;
      /** Allows grantee to create, overwrite, and delete any object in the bucket. **/
      GrantWrite?: GrantWrite;
      /** Allows grantee to write the ACL for the applicable bucket. **/
      GrantWriteACP?: GrantWriteACP;
    }
    export interface CreateMultipartUploadOutput {
      /** Date when multipart upload will become eligible for abort operation by
lifecycle. **/
      AbortDate?: AbortDate;
      /** Id of the lifecycle rule that makes a multipart upload eligible for abort
operation. **/
      AbortRuleId?: AbortRuleId;
      /** Name of the bucket to which the multipart upload was initiated. **/
      Bucket?: BucketName;
      /** Object key for which the multipart upload was initiated. **/
      Key?: ObjectKey;
      /** ID for the initiated multipart upload. **/
      UploadId?: MultipartUploadId;
      /** The Server-side encryption algorithm used when storing this object in S3 (e.g.,
AES256, aws:kms). **/
      ServerSideEncryption?: ServerSideEncryption;
      /** If server-side encryption with a customer-provided encryption key was requested,
the response will include this header confirming the encryption algorithm used. **/
      SSECustomerAlgorithm?: SSECustomerAlgorithm;
      /** If server-side encryption with a customer-provided encryption key was requested,
the response will include this header to provide round trip message integrity
verification of the customer-provided encryption key. **/
      SSECustomerKeyMD5?: SSECustomerKeyMD5;
      /** If present, specifies the ID of the AWS Key Management Service (KMS) master
encryption key that was used for the object. **/
      SSEKMSKeyId?: SSEKMSKeyId;
      RequestCharged?: RequestCharged;
    }
    export interface CreateMultipartUploadRequest {
      /** The canned ACL to apply to the object. **/
      ACL?: ObjectCannedACL;
      Bucket: BucketName;
      /** Specifies caching behavior along the request/reply chain. **/
      CacheControl?: CacheControl;
      /** Specifies presentational information for the object. **/
      ContentDisposition?: ContentDisposition;
      /** Specifies what content encodings have been applied to the object and thus what
decoding mechanisms must be applied to obtain the media-type referenced by the
Content-Type header field. **/
      ContentEncoding?: ContentEncoding;
      /** The language the content is in. **/
      ContentLanguage?: ContentLanguage;
      /** A standard MIME type describing the format of the object data. **/
      ContentType?: ContentType;
      /** The date and time at which the object is no longer cacheable. **/
      Expires?: Expires;
      /** Gives the grantee READ, READ_ACP, and WRITE_ACP permissions on the object. **/
      GrantFullControl?: GrantFullControl;
      /** Allows grantee to read the object data and its metadata. **/
      GrantRead?: GrantRead;
      /** Allows grantee to read the object ACL. **/
      GrantReadACP?: GrantReadACP;
      /** Allows grantee to write the ACL for the applicable object. **/
      GrantWriteACP?: GrantWriteACP;
      Key: ObjectKey;
      /** A map of metadata to store with the object in S3. **/
      Metadata?: Metadata;
      /** The Server-side encryption algorithm used when storing this object in S3 (e.g.,
AES256, aws:kms). **/
      ServerSideEncryption?: ServerSideEncryption;
      /** The type of storage to use for the object. Defaults to &#x27;STANDARD&#x27;. **/
      StorageClass?: StorageClass;
      /** If the bucket is configured as a website, redirects requests for this object to
another object in the same bucket or to an external URL. Amazon S3 stores the
value of this header in the object metadata. **/
      WebsiteRedirectLocation?: WebsiteRedirectLocation;
      /** Specifies the algorithm to use to when encrypting the object (e.g., AES256). **/
      SSECustomerAlgorithm?: SSECustomerAlgorithm;
      /** Specifies the customer-provided encryption key for Amazon S3 to use in
encrypting data. This value is used to store the object and then it is
discarded; Amazon does not store the encryption key. The key must be appropriate
for use with the algorithm specified in the
x-amz-server-side​-encryption​-customer-algorithm header. **/
      SSECustomerKey?: SSECustomerKey;
      /** Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321.
Amazon S3 uses this header for a message integrity check to ensure the
encryption key was transmitted without error. **/
      SSECustomerKeyMD5?: SSECustomerKeyMD5;
      /** Specifies the AWS KMS key ID to use for object encryption. All GET and PUT
requests for an object protected by AWS KMS will fail if not made via SSL or
using SigV4. Documentation on configuring any of the officially supported AWS
SDKs and CLI can be found at
http://docs.aws.amazon.com/AmazonS3/latest/dev/UsingAWSSDK.html#specify-signature-version **/
      SSEKMSKeyId?: SSEKMSKeyId;
      RequestPayer?: RequestPayer;
    }
    export interface Delete {
      Objects: ObjectIdentifierList;
      /** Element to enable quiet mode for the request. When you add this element, you
must set its value to true. **/
      Quiet?: Quiet;
    }
    export interface DeleteBucketCorsRequest {
      Bucket: BucketName;
    }
    export interface DeleteBucketLifecycleRequest {
      Bucket: BucketName;
    }
    export interface DeleteBucketPolicyRequest {
      Bucket: BucketName;
    }
    export interface DeleteBucketReplicationRequest {
      Bucket: BucketName;
    }
    export interface DeleteBucketRequest {
      Bucket: BucketName;
    }
    export interface DeleteBucketTaggingRequest {
      Bucket: BucketName;
    }
    export interface DeleteBucketWebsiteRequest {
      Bucket: BucketName;
    }
    export interface DeleteMarkerEntry {
      Owner?: Owner;
      /** The object key. **/
      Key?: ObjectKey;
      /** Version ID of an object. **/
      VersionId?: ObjectVersionId;
      /** Specifies whether the object is (true) or is not (false) the latest version of
an object. **/
      IsLatest?: IsLatest;
      /** Date and time the object was last modified. **/
      LastModified?: LastModified;
    }
    export interface DeleteObjectOutput {
      /** Specifies whether the versioned object that was permanently deleted was (true)
or was not (false) a delete marker. **/
      DeleteMarker?: DeleteMarker;
      /** Returns the version ID of the delete marker created as a result of the DELETE
operation. **/
      VersionId?: ObjectVersionId;
      RequestCharged?: RequestCharged;
    }
    export interface DeleteObjectRequest {
      Bucket: BucketName;
      Key: ObjectKey;
      /** The concatenation of the authentication device&#x27;s serial number, a space, and the
value that is displayed on your authentication device. **/
      MFA?: MFA;
      /** VersionId used to reference a specific version of the object. **/
      VersionId?: ObjectVersionId;
      RequestPayer?: RequestPayer;
    }
    export interface DeleteObjectsOutput {
      Deleted?: DeletedObjects;
      RequestCharged?: RequestCharged;
      Errors?: Errors;
    }
    export interface DeleteObjectsRequest {
      Bucket: BucketName;
      Delete: Delete;
      /** The concatenation of the authentication device&#x27;s serial number, a space, and the
value that is displayed on your authentication device. **/
      MFA?: MFA;
      RequestPayer?: RequestPayer;
    }
    export interface DeletedObject {
      Key?: ObjectKey;
      VersionId?: ObjectVersionId;
      DeleteMarker?: DeleteMarker;
      DeleteMarkerVersionId?: DeleteMarkerVersionId;
    }
    export interface Destination {
      /** Amazon resource name (ARN) of the bucket where you want Amazon S3 to store
replicas of the object identified by the rule. **/
      Bucket: BucketName;
      /** The class of storage used to store the object. **/
      StorageClass?: StorageClass;
    }
    export interface Error {
      Key?: ObjectKey;
      VersionId?: ObjectVersionId;
      Code?: Code;
      Message?: Message;
    }
    export interface ErrorDocument {
      /** The object key name to use when a 4XX class error occurs. **/
      Key: ObjectKey;
    }
    export interface FilterRule {
      /** Object key name prefix or suffix identifying one or more objects to which the
filtering rule applies. Maximum prefix length can be up to 1,024 characters.
Overlapping prefixes and suffixes are not supported. For more information, go to 
Configuring Event Notifications
[http://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html] in the
Amazon Simple Storage Service Developer Guide. **/
      Name?: FilterRuleName;
      Value?: FilterRuleValue;
    }
    export interface GetBucketAccelerateConfigurationOutput {
      /** The accelerate configuration of the bucket. **/
      Status?: BucketAccelerateStatus;
    }
    export interface GetBucketAccelerateConfigurationRequest {
      /** Name of the bucket for which the accelerate configuration is retrieved. **/
      Bucket: BucketName;
    }
    export interface GetBucketAclOutput {
      Owner?: Owner;
      /** A list of grants. **/
      Grants?: Grants;
    }
    export interface GetBucketAclRequest {
      Bucket: BucketName;
    }
    export interface GetBucketCorsOutput {
      CORSRules?: CORSRules;
    }
    export interface GetBucketCorsRequest {
      Bucket: BucketName;
    }
    export interface GetBucketLifecycleConfigurationOutput {
      Rules?: LifecycleRules;
    }
    export interface GetBucketLifecycleConfigurationRequest {
      Bucket: BucketName;
    }
    export interface GetBucketLifecycleOutput {
      Rules?: Rules;
    }
    export interface GetBucketLifecycleRequest {
      Bucket: BucketName;
    }
    export interface GetBucketLocationOutput {
      LocationConstraint?: BucketLocationConstraint;
    }
    export interface GetBucketLocationRequest {
      Bucket: BucketName;
    }
    export interface GetBucketLoggingOutput {
      LoggingEnabled?: LoggingEnabled;
    }
    export interface GetBucketLoggingRequest {
      Bucket: BucketName;
    }
    export interface GetBucketNotificationConfigurationRequest {
      /** Name of the bucket to get the notification configuration for. **/
      Bucket: BucketName;
    }
    export interface GetBucketPolicyOutput {
      /** The bucket policy as a JSON document. **/
      Policy?: Policy;
    }
    export interface GetBucketPolicyRequest {
      Bucket: BucketName;
    }
    export interface GetBucketReplicationOutput {
      ReplicationConfiguration?: ReplicationConfiguration;
    }
    export interface GetBucketReplicationRequest {
      Bucket: BucketName;
    }
    export interface GetBucketRequestPaymentOutput {
      /** Specifies who pays for the download and request fees. **/
      Payer?: Payer;
    }
    export interface GetBucketRequestPaymentRequest {
      Bucket: BucketName;
    }
    export interface GetBucketTaggingOutput {
      TagSet: TagSet;
    }
    export interface GetBucketTaggingRequest {
      Bucket: BucketName;
    }
    export interface GetBucketVersioningOutput {
      /** The versioning state of the bucket. **/
      Status?: BucketVersioningStatus;
      /** Specifies whether MFA delete is enabled in the bucket versioning configuration.
This element is only returned if the bucket has been configured with MFA delete.
If the bucket has never been so configured, this element is not returned. **/
      MFADelete?: MFADeleteStatus;
    }
    export interface GetBucketVersioningRequest {
      Bucket: BucketName;
    }
    export interface GetBucketWebsiteOutput {
      RedirectAllRequestsTo?: RedirectAllRequestsTo;
      IndexDocument?: IndexDocument;
      ErrorDocument?: ErrorDocument;
      RoutingRules?: RoutingRules;
    }
    export interface GetBucketWebsiteRequest {
      Bucket: BucketName;
    }
    export interface GetObjectAclOutput {
      Owner?: Owner;
      /** A list of grants. **/
      Grants?: Grants;
      RequestCharged?: RequestCharged;
    }
    export interface GetObjectAclRequest {
      Bucket: BucketName;
      Key: ObjectKey;
      /** VersionId used to reference a specific version of the object. **/
      VersionId?: ObjectVersionId;
      RequestPayer?: RequestPayer;
    }
    export interface GetObjectOutput {
      /** Object data. **/
      Body?: Body;
      /** Specifies whether the object retrieved was (true) or was not (false) a Delete
Marker. If false, this response header does not appear in the response. **/
      DeleteMarker?: DeleteMarker;
      AcceptRanges?: AcceptRanges;
      /** If the object expiration is configured (see PUT Bucket lifecycle), the response
includes this header. It includes the expiry-date and rule-id key value pairs
providing object expiration information. The value of the rule-id is URL
encoded. **/
      Expiration?: Expiration;
      /** Provides information about object restoration operation and expiration time of
the restored object copy. **/
      Restore?: Restore;
      /** Last modified date of the object **/
      LastModified?: LastModified;
      /** Size of the body in bytes. **/
      ContentLength?: ContentLength;
      /** An ETag is an opaque identifier assigned by a web server to a specific version
of a resource found at a URL **/
      ETag?: ETag;
      /** This is set to the number of metadata entries not returned in x-amz-meta
headers. This can happen if you create metadata using an API like SOAP that
supports more flexible metadata than the REST API. For example, using SOAP, you
can create metadata whose values are not legal HTTP headers. **/
      MissingMeta?: MissingMeta;
      /** Version of the object. **/
      VersionId?: ObjectVersionId;
      /** Specifies caching behavior along the request/reply chain. **/
      CacheControl?: CacheControl;
      /** Specifies presentational information for the object. **/
      ContentDisposition?: ContentDisposition;
      /** Specifies what content encodings have been applied to the object and thus what
decoding mechanisms must be applied to obtain the media-type referenced by the
Content-Type header field. **/
      ContentEncoding?: ContentEncoding;
      /** The language the content is in. **/
      ContentLanguage?: ContentLanguage;
      /** The portion of the object returned in the response. **/
      ContentRange?: ContentRange;
      /** A standard MIME type describing the format of the object data. **/
      ContentType?: ContentType;
      /** The date and time at which the object is no longer cacheable. **/
      Expires?: Expires;
      /** If the bucket is configured as a website, redirects requests for this object to
another object in the same bucket or to an external URL. Amazon S3 stores the
value of this header in the object metadata. **/
      WebsiteRedirectLocation?: WebsiteRedirectLocation;
      /** The Server-side encryption algorithm used when storing this object in S3 (e.g.,
AES256, aws:kms). **/
      ServerSideEncryption?: ServerSideEncryption;
      /** A map of metadata to store with the object in S3. **/
      Metadata?: Metadata;
      /** If server-side encryption with a customer-provided encryption key was requested,
the response will include this header confirming the encryption algorithm used. **/
      SSECustomerAlgorithm?: SSECustomerAlgorithm;
      /** If server-side encryption with a customer-provided encryption key was requested,
the response will include this header to provide round trip message integrity
verification of the customer-provided encryption key. **/
      SSECustomerKeyMD5?: SSECustomerKeyMD5;
      /** If present, specifies the ID of the AWS Key Management Service (KMS) master
encryption key that was used for the object. **/
      SSEKMSKeyId?: SSEKMSKeyId;
      StorageClass?: StorageClass;
      RequestCharged?: RequestCharged;
      ReplicationStatus?: ReplicationStatus;
    }
    export interface GetObjectRequest {
      Bucket: BucketName;
      /** Return the object only if its entity tag (ETag) is the same as the one
specified, otherwise return a 412 (precondition failed). **/
      IfMatch?: IfMatch;
      /** Return the object only if it has been modified since the specified time,
otherwise return a 304 (not modified). **/
      IfModifiedSince?: IfModifiedSince;
      /** Return the object only if its entity tag (ETag) is different from the one
specified, otherwise return a 304 (not modified). **/
      IfNoneMatch?: IfNoneMatch;
      /** Return the object only if it has not been modified since the specified time,
otherwise return a 412 (precondition failed). **/
      IfUnmodifiedSince?: IfUnmodifiedSince;
      Key: ObjectKey;
      /** Downloads the specified range bytes of an object. For more information about the
HTTP Range header, go to
http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.35. **/
      Range?: Range;
      /** Sets the Cache-Control header of the response. **/
      ResponseCacheControl?: ResponseCacheControl;
      /** Sets the Content-Disposition header of the response **/
      ResponseContentDisposition?: ResponseContentDisposition;
      /** Sets the Content-Encoding header of the response. **/
      ResponseContentEncoding?: ResponseContentEncoding;
      /** Sets the Content-Language header of the response. **/
      ResponseContentLanguage?: ResponseContentLanguage;
      /** Sets the Content-Type header of the response. **/
      ResponseContentType?: ResponseContentType;
      /** Sets the Expires header of the response. **/
      ResponseExpires?: ResponseExpires;
      /** VersionId used to reference a specific version of the object. **/
      VersionId?: ObjectVersionId;
      /** Specifies the algorithm to use to when encrypting the object (e.g., AES256). **/
      SSECustomerAlgorithm?: SSECustomerAlgorithm;
      /** Specifies the customer-provided encryption key for Amazon S3 to use in
encrypting data. This value is used to store the object and then it is
discarded; Amazon does not store the encryption key. The key must be appropriate
for use with the algorithm specified in the
x-amz-server-side​-encryption​-customer-algorithm header. **/
      SSECustomerKey?: SSECustomerKey;
      /** Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321.
Amazon S3 uses this header for a message integrity check to ensure the
encryption key was transmitted without error. **/
      SSECustomerKeyMD5?: SSECustomerKeyMD5;
      RequestPayer?: RequestPayer;
    }
    export interface GetObjectTorrentOutput {
      Body?: Body;
      RequestCharged?: RequestCharged;
    }
    export interface GetObjectTorrentRequest {
      Bucket: BucketName;
      Key: ObjectKey;
      RequestPayer?: RequestPayer;
    }
    export interface Grant {
      Grantee?: Grantee;
      /** Specifies the permission given to the grantee. **/
      Permission?: Permission;
    }
    export interface Grantee {
      /** Screen name of the grantee. **/
      DisplayName?: DisplayName;
      /** Email address of the grantee. **/
      EmailAddress?: EmailAddress;
      /** The canonical user ID of the grantee. **/
      ID?: ID;
      /** Type of grantee **/
      Type: Type;
      /** URI of the grantee group. **/
      URI?: URI;
    }
    export interface HeadBucketRequest {
      Bucket: BucketName;
    }
    export interface HeadObjectOutput {
      /** Specifies whether the object retrieved was (true) or was not (false) a Delete
Marker. If false, this response header does not appear in the response. **/
      DeleteMarker?: DeleteMarker;
      AcceptRanges?: AcceptRanges;
      /** If the object expiration is configured (see PUT Bucket lifecycle), the response
includes this header. It includes the expiry-date and rule-id key value pairs
providing object expiration information. The value of the rule-id is URL
encoded. **/
      Expiration?: Expiration;
      /** Provides information about object restoration operation and expiration time of
the restored object copy. **/
      Restore?: Restore;
      /** Last modified date of the object **/
      LastModified?: LastModified;
      /** Size of the body in bytes. **/
      ContentLength?: ContentLength;
      /** An ETag is an opaque identifier assigned by a web server to a specific version
of a resource found at a URL **/
      ETag?: ETag;
      /** This is set to the number of metadata entries not returned in x-amz-meta
headers. This can happen if you create metadata using an API like SOAP that
supports more flexible metadata than the REST API. For example, using SOAP, you
can create metadata whose values are not legal HTTP headers. **/
      MissingMeta?: MissingMeta;
      /** Version of the object. **/
      VersionId?: ObjectVersionId;
      /** Specifies caching behavior along the request/reply chain. **/
      CacheControl?: CacheControl;
      /** Specifies presentational information for the object. **/
      ContentDisposition?: ContentDisposition;
      /** Specifies what content encodings have been applied to the object and thus what
decoding mechanisms must be applied to obtain the media-type referenced by the
Content-Type header field. **/
      ContentEncoding?: ContentEncoding;
      /** The language the content is in. **/
      ContentLanguage?: ContentLanguage;
      /** A standard MIME type describing the format of the object data. **/
      ContentType?: ContentType;
      /** The date and time at which the object is no longer cacheable. **/
      Expires?: Expires;
      /** If the bucket is configured as a website, redirects requests for this object to
another object in the same bucket or to an external URL. Amazon S3 stores the
value of this header in the object metadata. **/
      WebsiteRedirectLocation?: WebsiteRedirectLocation;
      /** The Server-side encryption algorithm used when storing this object in S3 (e.g.,
AES256, aws:kms). **/
      ServerSideEncryption?: ServerSideEncryption;
      /** A map of metadata to store with the object in S3. **/
      Metadata?: Metadata;
      /** If server-side encryption with a customer-provided encryption key was requested,
the response will include this header confirming the encryption algorithm used. **/
      SSECustomerAlgorithm?: SSECustomerAlgorithm;
      /** If server-side encryption with a customer-provided encryption key was requested,
the response will include this header to provide round trip message integrity
verification of the customer-provided encryption key. **/
      SSECustomerKeyMD5?: SSECustomerKeyMD5;
      /** If present, specifies the ID of the AWS Key Management Service (KMS) master
encryption key that was used for the object. **/
      SSEKMSKeyId?: SSEKMSKeyId;
      StorageClass?: StorageClass;
      RequestCharged?: RequestCharged;
      ReplicationStatus?: ReplicationStatus;
    }
    export interface HeadObjectRequest {
      Bucket: BucketName;
      /** Return the object only if its entity tag (ETag) is the same as the one
specified, otherwise return a 412 (precondition failed). **/
      IfMatch?: IfMatch;
      /** Return the object only if it has been modified since the specified time,
otherwise return a 304 (not modified). **/
      IfModifiedSince?: IfModifiedSince;
      /** Return the object only if its entity tag (ETag) is different from the one
specified, otherwise return a 304 (not modified). **/
      IfNoneMatch?: IfNoneMatch;
      /** Return the object only if it has not been modified since the specified time,
otherwise return a 412 (precondition failed). **/
      IfUnmodifiedSince?: IfUnmodifiedSince;
      Key: ObjectKey;
      /** Downloads the specified range bytes of an object. For more information about the
HTTP Range header, go to
http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.35. **/
      Range?: Range;
      /** VersionId used to reference a specific version of the object. **/
      VersionId?: ObjectVersionId;
      /** Specifies the algorithm to use to when encrypting the object (e.g., AES256). **/
      SSECustomerAlgorithm?: SSECustomerAlgorithm;
      /** Specifies the customer-provided encryption key for Amazon S3 to use in
encrypting data. This value is used to store the object and then it is
discarded; Amazon does not store the encryption key. The key must be appropriate
for use with the algorithm specified in the
x-amz-server-side​-encryption​-customer-algorithm header. **/
      SSECustomerKey?: SSECustomerKey;
      /** Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321.
Amazon S3 uses this header for a message integrity check to ensure the
encryption key was transmitted without error. **/
      SSECustomerKeyMD5?: SSECustomerKeyMD5;
      RequestPayer?: RequestPayer;
    }
    export interface IndexDocument {
      /** A suffix that is appended to a request that is for a directory on the website
endpoint (e.g. if the suffix is index.html and you make a request to
samplebucket/images/ the data that is returned will be for the object with the
key name images/index.html) The suffix must not be empty and must not include a
slash character. **/
      Suffix: Suffix;
    }
    export interface Initiator {
      /** If the principal is an AWS account, it provides the Canonical User ID. If the
principal is an IAM User, it provides a user ARN value. **/
      ID?: ID;
      /** Name of the Principal. **/
      DisplayName?: DisplayName;
    }
    export interface LambdaFunctionConfiguration {
      Id?: NotificationId;
      /** Lambda cloud function ARN that Amazon S3 can invoke when it detects events of
the specified type. **/
      LambdaFunctionArn: LambdaFunctionArn;
      Events: EventList;
      Filter?: NotificationConfigurationFilter;
    }
    export interface LifecycleConfiguration {
      Rules: Rules;
    }
    export interface LifecycleExpiration {
      /** Indicates at what date the object is to be moved or deleted. Should be in GMT
ISO 8601 Format. **/
      Date?: Date;
      /** Indicates the lifetime, in days, of the objects that are subject to the rule.
The value must be a non-zero positive integer. **/
      Days?: Days;
      /** Indicates whether Amazon S3 will remove a delete marker with no noncurrent
versions. If set to true, the delete marker will be expired; if set to false the
policy takes no action. This cannot be specified with Days or Date in a
Lifecycle Expiration Policy. **/
      ExpiredObjectDeleteMarker?: ExpiredObjectDeleteMarker;
    }
    export interface LifecycleRule {
      Expiration?: LifecycleExpiration;
      /** Unique identifier for the rule. The value cannot be longer than 255 characters. **/
      ID?: ID;
      /** Prefix identifying one or more objects to which the rule applies. **/
      Prefix: Prefix;
      /** If &#x27;Enabled&#x27;, the rule is currently being applied. If &#x27;Disabled&#x27;, the rule is
not currently being applied. **/
      Status: ExpirationStatus;
      Transitions?: TransitionList;
      NoncurrentVersionTransitions?: NoncurrentVersionTransitionList;
      NoncurrentVersionExpiration?: NoncurrentVersionExpiration;
      AbortIncompleteMultipartUpload?: AbortIncompleteMultipartUpload;
    }
    export interface ListBucketsOutput {
      Buckets?: Buckets;
      Owner?: Owner;
    }
    export interface ListMultipartUploadsOutput {
      /** Name of the bucket to which the multipart upload was initiated. **/
      Bucket?: BucketName;
      /** The key at or after which the listing began. **/
      KeyMarker?: KeyMarker;
      /** Upload ID after which listing began. **/
      UploadIdMarker?: UploadIdMarker;
      /** When a list is truncated, this element specifies the value that should be used
for the key-marker request parameter in a subsequent request. **/
      NextKeyMarker?: NextKeyMarker;
      /** When a prefix is provided in the request, this field contains the specified
prefix. The result contains only keys starting with the specified prefix. **/
      Prefix?: Prefix;
      Delimiter?: Delimiter;
      /** When a list is truncated, this element specifies the value that should be used
for the upload-id-marker request parameter in a subsequent request. **/
      NextUploadIdMarker?: NextUploadIdMarker;
      /** Maximum number of multipart uploads that could have been included in the
response. **/
      MaxUploads?: MaxUploads;
      /** Indicates whether the returned list of multipart uploads is truncated. A value
of true indicates that the list was truncated. The list can be truncated if the
number of multipart uploads exceeds the limit allowed or specified by max
uploads. **/
      IsTruncated?: IsTruncated;
      Uploads?: MultipartUploadList;
      CommonPrefixes?: CommonPrefixList;
      /** Encoding type used by Amazon S3 to encode object keys in the response. **/
      EncodingType?: EncodingType;
    }
    export interface ListMultipartUploadsRequest {
      Bucket: BucketName;
      /** Character you use to group keys. **/
      Delimiter?: Delimiter;
      EncodingType?: EncodingType;
      /** Together with upload-id-marker, this parameter specifies the multipart upload
after which listing should begin. **/
      KeyMarker?: KeyMarker;
      /** Sets the maximum number of multipart uploads, from 1 to 1,000, to return in the
response body. 1,000 is the maximum number of uploads that can be returned in a
response. **/
      MaxUploads?: MaxUploads;
      /** Lists in-progress uploads only for those keys that begin with the specified
prefix. **/
      Prefix?: Prefix;
      /** Together with key-marker, specifies the multipart upload after which listing
should begin. If key-marker is not specified, the upload-id-marker parameter is
ignored. **/
      UploadIdMarker?: UploadIdMarker;
    }
    export interface ListObjectVersionsOutput {
      /** A flag that indicates whether or not Amazon S3 returned all of the results that
satisfied the search criteria. If your results were truncated, you can make a
follow-up paginated request using the NextKeyMarker and NextVersionIdMarker
response parameters as a starting place in another request to return the rest of
the results. **/
      IsTruncated?: IsTruncated;
      /** Marks the last Key returned in a truncated response. **/
      KeyMarker?: KeyMarker;
      VersionIdMarker?: VersionIdMarker;
      /** Use this value for the key marker request parameter in a subsequent request. **/
      NextKeyMarker?: NextKeyMarker;
      /** Use this value for the next version id marker parameter in a subsequent request. **/
      NextVersionIdMarker?: NextVersionIdMarker;
      Versions?: ObjectVersionList;
      DeleteMarkers?: DeleteMarkers;
      Name?: BucketName;
      Prefix?: Prefix;
      Delimiter?: Delimiter;
      MaxKeys?: MaxKeys;
      CommonPrefixes?: CommonPrefixList;
      /** Encoding type used by Amazon S3 to encode object keys in the response. **/
      EncodingType?: EncodingType;
    }
    export interface ListObjectVersionsRequest {
      Bucket: BucketName;
      /** A delimiter is a character you use to group keys. **/
      Delimiter?: Delimiter;
      EncodingType?: EncodingType;
      /** Specifies the key to start with when listing objects in a bucket. **/
      KeyMarker?: KeyMarker;
      /** Sets the maximum number of keys returned in the response. The response might
contain fewer keys but will never contain more. **/
      MaxKeys?: MaxKeys;
      /** Limits the response to keys that begin with the specified prefix. **/
      Prefix?: Prefix;
      /** Specifies the object version you want to start listing from. **/
      VersionIdMarker?: VersionIdMarker;
    }
    export interface ListObjectsOutput {
      /** A flag that indicates whether or not Amazon S3 returned all of the results that
satisfied the search criteria. **/
      IsTruncated?: IsTruncated;
      Marker?: Marker;
      /** When response is truncated (the IsTruncated element value in the response is
true), you can use the key name in this field as marker in the subsequent
request to get next set of objects. Amazon S3 lists objects in alphabetical
order Note: This element is returned only if you have delimiter request
parameter specified. If response does not include the NextMaker and it is
truncated, you can use the value of the last Key in the response as the marker
in the subsequent request to get the next set of object keys. **/
      NextMarker?: NextMarker;
      Contents?: ObjectList;
      Name?: BucketName;
      Prefix?: Prefix;
      Delimiter?: Delimiter;
      MaxKeys?: MaxKeys;
      CommonPrefixes?: CommonPrefixList;
      /** Encoding type used by Amazon S3 to encode object keys in the response. **/
      EncodingType?: EncodingType;
    }
    export interface ListObjectsRequest {
      Bucket: BucketName;
      /** A delimiter is a character you use to group keys. **/
      Delimiter?: Delimiter;
      EncodingType?: EncodingType;
      /** Specifies the key to start with when listing objects in a bucket. **/
      Marker?: Marker;
      /** Sets the maximum number of keys returned in the response. The response might
contain fewer keys but will never contain more. **/
      MaxKeys?: MaxKeys;
      /** Limits the response to keys that begin with the specified prefix. **/
      Prefix?: Prefix;
    }
    export interface ListObjectsV2Output {
      /** A flag that indicates whether or not Amazon S3 returned all of the results that
satisfied the search criteria. **/
      IsTruncated?: IsTruncated;
      /** Metadata about each object returned. **/
      Contents?: ObjectList;
      /** Name of the bucket to list. **/
      Name?: BucketName;
      /** Limits the response to keys that begin with the specified prefix. **/
      Prefix?: Prefix;
      /** A delimiter is a character you use to group keys. **/
      Delimiter?: Delimiter;
      /** Sets the maximum number of keys returned in the response. The response might
contain fewer keys but will never contain more. **/
      MaxKeys?: MaxKeys;
      /** CommonPrefixes contains all (if there are any) keys between Prefix and the next
occurrence of the string specified by delimiter **/
      CommonPrefixes?: CommonPrefixList;
      /** Encoding type used by Amazon S3 to encode object keys in the response. **/
      EncodingType?: EncodingType;
      /** KeyCount is the number of keys returned with this request. KeyCount will always
be less than equals to MaxKeys field. Say you ask for 50 keys, your result will
include less than equals 50 keys **/
      KeyCount?: KeyCount;
      /** ContinuationToken indicates Amazon S3 that the list is being continued on this
bucket with a token. ContinuationToken is obfuscated and is not a real key **/
      ContinuationToken?: Token;
      /** NextContinuationToken is sent when isTruncated is true which means there are
more keys in the bucket that can be listed. The next list requests to Amazon S3
can be continued with this NextContinuationToken. NextContinuationToken is
obfuscated and is not a real key **/
      NextContinuationToken?: NextToken;
      /** StartAfter is where you want Amazon S3 to start listing from. Amazon S3 starts
listing after this specified key. StartAfter can be any key in the bucket **/
      StartAfter?: StartAfter;
    }
    export interface ListObjectsV2Request {
      /** Name of the bucket to list. **/
      Bucket: BucketName;
      /** A delimiter is a character you use to group keys. **/
      Delimiter?: Delimiter;
      /** Encoding type used by Amazon S3 to encode object keys in the response. **/
      EncodingType?: EncodingType;
      /** Sets the maximum number of keys returned in the response. The response might
contain fewer keys but will never contain more. **/
      MaxKeys?: MaxKeys;
      /** Limits the response to keys that begin with the specified prefix. **/
      Prefix?: Prefix;
      /** ContinuationToken indicates Amazon S3 that the list is being continued on this
bucket with a token. ContinuationToken is obfuscated and is not a real key **/
      ContinuationToken?: Token;
      /** The owner field is not present in listV2 by default, if you want to return owner
field with each key in the result then set the fetch owner field to true **/
      FetchOwner?: FetchOwner;
      /** StartAfter is where you want Amazon S3 to start listing from. Amazon S3 starts
listing after this specified key. StartAfter can be any key in the bucket **/
      StartAfter?: StartAfter;
    }
    export interface ListPartsOutput {
      /** Date when multipart upload will become eligible for abort operation by
lifecycle. **/
      AbortDate?: AbortDate;
      /** Id of the lifecycle rule that makes a multipart upload eligible for abort
operation. **/
      AbortRuleId?: AbortRuleId;
      /** Name of the bucket to which the multipart upload was initiated. **/
      Bucket?: BucketName;
      /** Object key for which the multipart upload was initiated. **/
      Key?: ObjectKey;
      /** Upload ID identifying the multipart upload whose parts are being listed. **/
      UploadId?: MultipartUploadId;
      /** Part number after which listing begins. **/
      PartNumberMarker?: PartNumberMarker;
      /** When a list is truncated, this element specifies the last part in the list, as
well as the value to use for the part-number-marker request parameter in a
subsequent request. **/
      NextPartNumberMarker?: NextPartNumberMarker;
      /** Maximum number of parts that were allowed in the response. **/
      MaxParts?: MaxParts;
      /** Indicates whether the returned list of parts is truncated. **/
      IsTruncated?: IsTruncated;
      Parts?: Parts;
      /** Identifies who initiated the multipart upload. **/
      Initiator?: Initiator;
      Owner?: Owner;
      /** The class of storage used to store the object. **/
      StorageClass?: StorageClass;
      RequestCharged?: RequestCharged;
    }
    export interface ListPartsRequest {
      Bucket: BucketName;
      Key: ObjectKey;
      /** Sets the maximum number of parts to return. **/
      MaxParts?: MaxParts;
      /** Specifies the part after which listing should begin. Only parts with higher part
numbers will be listed. **/
      PartNumberMarker?: PartNumberMarker;
      /** Upload ID identifying the multipart upload whose parts are being listed. **/
      UploadId: MultipartUploadId;
      RequestPayer?: RequestPayer;
    }
    export interface LoggingEnabled {
      /** Specifies the bucket where you want Amazon S3 to store server access logs. You
can have your logs delivered to any bucket that you own, including the same
bucket that is being logged. You can also configure multiple buckets to deliver
their logs to the same target bucket. In this case you should choose a different
TargetPrefix for each source bucket so that the delivered log files can be
distinguished by key. **/
      TargetBucket?: TargetBucket;
      TargetGrants?: TargetGrants;
      /** This element lets you specify a prefix for the keys that the log files will be
stored under. **/
      TargetPrefix?: TargetPrefix;
    }
    export interface MultipartUpload {
      /** Upload ID that identifies the multipart upload. **/
      UploadId?: MultipartUploadId;
      /** Key of the object for which the multipart upload was initiated. **/
      Key?: ObjectKey;
      /** Date and time at which the multipart upload was initiated. **/
      Initiated?: Initiated;
      /** The class of storage used to store the object. **/
      StorageClass?: StorageClass;
      Owner?: Owner;
      /** Identifies who initiated the multipart upload. **/
      Initiator?: Initiator;
    }
    export interface NoSuchBucket {
    }
    export interface NoSuchKey {
    }
    export interface NoSuchUpload {
    }
    export interface NoncurrentVersionExpiration {
      /** Specifies the number of days an object is noncurrent before Amazon S3 can
perform the associated action. For information about the noncurrent days
calculations, see How Amazon S3 Calculates When an Object Became Noncurrent
[http://docs.aws.amazon.com/AmazonS3/latest/dev/s3-access-control.html] in the
Amazon Simple Storage Service Developer Guide. **/
      NoncurrentDays?: Days;
    }
    export interface NoncurrentVersionTransition {
      /** Specifies the number of days an object is noncurrent before Amazon S3 can
perform the associated action. For information about the noncurrent days
calculations, see How Amazon S3 Calculates When an Object Became Noncurrent
[http://docs.aws.amazon.com/AmazonS3/latest/dev/s3-access-control.html] in the
Amazon Simple Storage Service Developer Guide. **/
      NoncurrentDays?: Days;
      /** The class of storage used to store the object. **/
      StorageClass?: TransitionStorageClass;
    }
    export interface NotificationConfiguration {
      TopicConfigurations?: TopicConfigurationList;
      QueueConfigurations?: QueueConfigurationList;
      LambdaFunctionConfigurations?: LambdaFunctionConfigurationList;
    }
    export interface NotificationConfigurationDeprecated {
      TopicConfiguration?: TopicConfigurationDeprecated;
      QueueConfiguration?: QueueConfigurationDeprecated;
      CloudFunctionConfiguration?: CloudFunctionConfiguration;
    }
    export interface NotificationConfigurationFilter {
      Key?: S3KeyFilter;
    }
    export interface Object {
      Key?: ObjectKey;
      LastModified?: LastModified;
      ETag?: ETag;
      Size?: Size;
      /** The class of storage used to store the object. **/
      StorageClass?: ObjectStorageClass;
      Owner?: Owner;
    }
    export interface ObjectAlreadyInActiveTierError {
    }
    export interface ObjectIdentifier {
      /** Key name of the object to delete. **/
      Key: ObjectKey;
      /** VersionId for the specific version of the object to delete. **/
      VersionId?: ObjectVersionId;
    }
    export interface ObjectNotInActiveTierError {
    }
    export interface ObjectVersion {
      ETag?: ETag;
      /** Size in bytes of the object. **/
      Size?: Size;
      /** The class of storage used to store the object. **/
      StorageClass?: ObjectVersionStorageClass;
      /** The object key. **/
      Key?: ObjectKey;
      /** Version ID of an object. **/
      VersionId?: ObjectVersionId;
      /** Specifies whether the object is (true) or is not (false) the latest version of
an object. **/
      IsLatest?: IsLatest;
      /** Date and time the object was last modified. **/
      LastModified?: LastModified;
      Owner?: Owner;
    }
    export interface Owner {
      DisplayName?: DisplayName;
      ID?: ID;
    }
    export interface Part {
      /** Part number identifying the part. This is a positive integer between 1 and
10,000. **/
      PartNumber?: PartNumber;
      /** Date and time at which the part was uploaded. **/
      LastModified?: LastModified;
      /** Entity tag returned when the part was uploaded. **/
      ETag?: ETag;
      /** Size of the uploaded part data. **/
      Size?: Size;
    }
    export interface PutBucketAccelerateConfigurationRequest {
      /** Name of the bucket for which the accelerate configuration is set. **/
      Bucket: BucketName;
      /** Specifies the Accelerate Configuration you want to set for the bucket. **/
      AccelerateConfiguration: AccelerateConfiguration;
    }
    export interface PutBucketAclRequest {
      /** The canned ACL to apply to the bucket. **/
      ACL?: BucketCannedACL;
      AccessControlPolicy?: AccessControlPolicy;
      Bucket: BucketName;
      ContentMD5?: ContentMD5;
      /** Allows grantee the read, write, read ACP, and write ACP permissions on the
bucket. **/
      GrantFullControl?: GrantFullControl;
      /** Allows grantee to list the objects in the bucket. **/
      GrantRead?: GrantRead;
      /** Allows grantee to read the bucket ACL. **/
      GrantReadACP?: GrantReadACP;
      /** Allows grantee to create, overwrite, and delete any object in the bucket. **/
      GrantWrite?: GrantWrite;
      /** Allows grantee to write the ACL for the applicable bucket. **/
      GrantWriteACP?: GrantWriteACP;
    }
    export interface PutBucketCorsRequest {
      Bucket: BucketName;
      CORSConfiguration: CORSConfiguration;
      ContentMD5?: ContentMD5;
    }
    export interface PutBucketLifecycleConfigurationRequest {
      Bucket: BucketName;
      LifecycleConfiguration?: BucketLifecycleConfiguration;
    }
    export interface PutBucketLifecycleRequest {
      Bucket: BucketName;
      ContentMD5?: ContentMD5;
      LifecycleConfiguration?: LifecycleConfiguration;
    }
    export interface PutBucketLoggingRequest {
      Bucket: BucketName;
      BucketLoggingStatus: BucketLoggingStatus;
      ContentMD5?: ContentMD5;
    }
    export interface PutBucketNotificationConfigurationRequest {
      Bucket: BucketName;
      NotificationConfiguration: NotificationConfiguration;
    }
    export interface PutBucketNotificationRequest {
      Bucket: BucketName;
      ContentMD5?: ContentMD5;
      NotificationConfiguration: NotificationConfigurationDeprecated;
    }
    export interface PutBucketPolicyRequest {
      Bucket: BucketName;
      ContentMD5?: ContentMD5;
      /** The bucket policy as a JSON document. **/
      Policy: Policy;
    }
    export interface PutBucketReplicationRequest {
      Bucket: BucketName;
      ContentMD5?: ContentMD5;
      ReplicationConfiguration: ReplicationConfiguration;
    }
    export interface PutBucketRequestPaymentRequest {
      Bucket: BucketName;
      ContentMD5?: ContentMD5;
      RequestPaymentConfiguration: RequestPaymentConfiguration;
    }
    export interface PutBucketTaggingRequest {
      Bucket: BucketName;
      ContentMD5?: ContentMD5;
      Tagging: Tagging;
    }
    export interface PutBucketVersioningRequest {
      Bucket: BucketName;
      ContentMD5?: ContentMD5;
      /** The concatenation of the authentication device&#x27;s serial number, a space, and the
value that is displayed on your authentication device. **/
      MFA?: MFA;
      VersioningConfiguration: VersioningConfiguration;
    }
    export interface PutBucketWebsiteRequest {
      Bucket: BucketName;
      ContentMD5?: ContentMD5;
      WebsiteConfiguration: WebsiteConfiguration;
    }
    export interface PutObjectAclOutput {
      RequestCharged?: RequestCharged;
    }
    export interface PutObjectAclRequest {
      /** The canned ACL to apply to the object. **/
      ACL?: ObjectCannedACL;
      AccessControlPolicy?: AccessControlPolicy;
      Bucket: BucketName;
      ContentMD5?: ContentMD5;
      /** Allows grantee the read, write, read ACP, and write ACP permissions on the
bucket. **/
      GrantFullControl?: GrantFullControl;
      /** Allows grantee to list the objects in the bucket. **/
      GrantRead?: GrantRead;
      /** Allows grantee to read the bucket ACL. **/
      GrantReadACP?: GrantReadACP;
      /** Allows grantee to create, overwrite, and delete any object in the bucket. **/
      GrantWrite?: GrantWrite;
      /** Allows grantee to write the ACL for the applicable bucket. **/
      GrantWriteACP?: GrantWriteACP;
      Key: ObjectKey;
      RequestPayer?: RequestPayer;
      /** VersionId used to reference a specific version of the object. **/
      VersionId?: ObjectVersionId;
    }
    export interface PutObjectOutput {
      /** If the object expiration is configured, this will contain the expiration date
(expiry-date) and rule ID (rule-id). The value of rule-id is URL encoded. **/
      Expiration?: Expiration;
      /** Entity tag for the uploaded object. **/
      ETag?: ETag;
      /** The Server-side encryption algorithm used when storing this object in S3 (e.g.,
AES256, aws:kms). **/
      ServerSideEncryption?: ServerSideEncryption;
      /** Version of the object. **/
      VersionId?: ObjectVersionId;
      /** If server-side encryption with a customer-provided encryption key was requested,
the response will include this header confirming the encryption algorithm used. **/
      SSECustomerAlgorithm?: SSECustomerAlgorithm;
      /** If server-side encryption with a customer-provided encryption key was requested,
the response will include this header to provide round trip message integrity
verification of the customer-provided encryption key. **/
      SSECustomerKeyMD5?: SSECustomerKeyMD5;
      /** If present, specifies the ID of the AWS Key Management Service (KMS) master
encryption key that was used for the object. **/
      SSEKMSKeyId?: SSEKMSKeyId;
      RequestCharged?: RequestCharged;
    }
    export interface PutObjectRequest {
      /** The canned ACL to apply to the object. **/
      ACL?: ObjectCannedACL;
      /** Object data. **/
      Body?: Body;
      /** Name of the bucket to which the PUT operation was initiated. **/
      Bucket: BucketName;
      /** Specifies caching behavior along the request/reply chain. **/
      CacheControl?: CacheControl;
      /** Specifies presentational information for the object. **/
      ContentDisposition?: ContentDisposition;
      /** Specifies what content encodings have been applied to the object and thus what
decoding mechanisms must be applied to obtain the media-type referenced by the
Content-Type header field. **/
      ContentEncoding?: ContentEncoding;
      /** The language the content is in. **/
      ContentLanguage?: ContentLanguage;
      /** Size of the body in bytes. This parameter is useful when the size of the body
cannot be determined automatically. **/
      ContentLength?: ContentLength;
      /** The base64-encoded 128-bit MD5 digest of the part data. **/
      ContentMD5?: ContentMD5;
      /** A standard MIME type describing the format of the object data. **/
      ContentType?: ContentType;
      /** The date and time at which the object is no longer cacheable. **/
      Expires?: Expires;
      /** Gives the grantee READ, READ_ACP, and WRITE_ACP permissions on the object. **/
      GrantFullControl?: GrantFullControl;
      /** Allows grantee to read the object data and its metadata. **/
      GrantRead?: GrantRead;
      /** Allows grantee to read the object ACL. **/
      GrantReadACP?: GrantReadACP;
      /** Allows grantee to write the ACL for the applicable object. **/
      GrantWriteACP?: GrantWriteACP;
      /** Object key for which the PUT operation was initiated. **/
      Key: ObjectKey;
      /** A map of metadata to store with the object in S3. **/
      Metadata?: Metadata;
      /** The Server-side encryption algorithm used when storing this object in S3 (e.g.,
AES256, aws:kms). **/
      ServerSideEncryption?: ServerSideEncryption;
      /** The type of storage to use for the object. Defaults to &#x27;STANDARD&#x27;. **/
      StorageClass?: StorageClass;
      /** If the bucket is configured as a website, redirects requests for this object to
another object in the same bucket or to an external URL. Amazon S3 stores the
value of this header in the object metadata. **/
      WebsiteRedirectLocation?: WebsiteRedirectLocation;
      /** Specifies the algorithm to use to when encrypting the object (e.g., AES256). **/
      SSECustomerAlgorithm?: SSECustomerAlgorithm;
      /** Specifies the customer-provided encryption key for Amazon S3 to use in
encrypting data. This value is used to store the object and then it is
discarded; Amazon does not store the encryption key. The key must be appropriate
for use with the algorithm specified in the
x-amz-server-side​-encryption​-customer-algorithm header. **/
      SSECustomerKey?: SSECustomerKey;
      /** Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321.
Amazon S3 uses this header for a message integrity check to ensure the
encryption key was transmitted without error. **/
      SSECustomerKeyMD5?: SSECustomerKeyMD5;
      /** Specifies the AWS KMS key ID to use for object encryption. All GET and PUT
requests for an object protected by AWS KMS will fail if not made via SSL or
using SigV4. Documentation on configuring any of the officially supported AWS
SDKs and CLI can be found at
http://docs.aws.amazon.com/AmazonS3/latest/dev/UsingAWSSDK.html#specify-signature-version **/
      SSEKMSKeyId?: SSEKMSKeyId;
      RequestPayer?: RequestPayer;
    }
    export interface QueueConfiguration {
      Id?: NotificationId;
      /** Amazon SQS queue ARN to which Amazon S3 will publish a message when it detects
events of specified type. **/
      QueueArn: QueueArn;
      Events: EventList;
      Filter?: NotificationConfigurationFilter;
    }
    export interface QueueConfigurationDeprecated {
      Id?: NotificationId;
      Event?: Event;
      Events?: EventList;
      Queue?: QueueArn;
    }
    export interface Redirect {
      /** The host name to use in the redirect request. **/
      HostName?: HostName;
      /** The HTTP redirect code to use on the response. Not required if one of the
siblings is present. **/
      HttpRedirectCode?: HttpRedirectCode;
      /** Protocol to use (http, https) when redirecting requests. The default is the
protocol that is used in the original request. **/
      Protocol?: Protocol;
      /** The object key prefix to use in the redirect request. For example, to redirect
requests for all pages with prefix docs/ (objects in the docs/ folder) to
documents/, you can set a condition block with KeyPrefixEquals set to docs/ and
in the Redirect set ReplaceKeyPrefixWith to /documents. Not required if one of
the siblings is present. Can be present only if ReplaceKeyWith is not provided. **/
      ReplaceKeyPrefixWith?: ReplaceKeyPrefixWith;
      /** The specific object key to use in the redirect request. For example, redirect
request to error.html. Not required if one of the sibling is present. Can be
present only if ReplaceKeyPrefixWith is not provided. **/
      ReplaceKeyWith?: ReplaceKeyWith;
    }
    export interface RedirectAllRequestsTo {
      /** Name of the host where requests will be redirected. **/
      HostName: HostName;
      /** Protocol to use (http, https) when redirecting requests. The default is the
protocol that is used in the original request. **/
      Protocol?: Protocol;
    }
    export interface ReplicationConfiguration {
      /** Amazon Resource Name (ARN) of an IAM role for Amazon S3 to assume when
replicating the objects. **/
      Role: Role;
      /** Container for information about a particular replication rule. Replication
configuration must have at least one rule and can contain up to 1,000 rules. **/
      Rules: ReplicationRules;
    }
    export interface ReplicationRule {
      /** Unique identifier for the rule. The value cannot be longer than 255 characters. **/
      ID?: ID;
      /** Object keyname prefix identifying one or more objects to which the rule applies.
Maximum prefix length can be up to 1,024 characters. Overlapping prefixes are
not supported. **/
      Prefix: Prefix;
      /** The rule is ignored if status is not Enabled. **/
      Status: ReplicationRuleStatus;
      Destination: Destination;
    }
    export interface RequestPaymentConfiguration {
      /** Specifies who pays for the download and request fees. **/
      Payer: Payer;
    }
    export interface RestoreObjectOutput {
      RequestCharged?: RequestCharged;
    }
    export interface RestoreObjectRequest {
      Bucket: BucketName;
      Key: ObjectKey;
      VersionId?: ObjectVersionId;
      RestoreRequest?: RestoreRequest;
      RequestPayer?: RequestPayer;
    }
    export interface RestoreRequest {
      /** Lifetime of the active copy in days **/
      Days: Days;
    }
    export interface RoutingRule {
      /** A container for describing a condition that must be met for the specified
redirect to apply. For example, 1. If request is for pages in the /docs folder,
redirect to the /documents folder. 2. If request results in HTTP error 4xx,
redirect request to another host where you might process the error. **/
      Condition?: Condition;
      /** Container for redirect information. You can redirect requests to another host,
to another page, or with another protocol. In the event of an error, you can can
specify a different error code to return. **/
      Redirect: Redirect;
    }
    export interface Rule {
      Expiration?: LifecycleExpiration;
      /** Unique identifier for the rule. The value cannot be longer than 255 characters. **/
      ID?: ID;
      /** Prefix identifying one or more objects to which the rule applies. **/
      Prefix: Prefix;
      /** If &#x27;Enabled&#x27;, the rule is currently being applied. If &#x27;Disabled&#x27;, the rule is
not currently being applied. **/
      Status: ExpirationStatus;
      Transition?: Transition;
      NoncurrentVersionTransition?: NoncurrentVersionTransition;
      NoncurrentVersionExpiration?: NoncurrentVersionExpiration;
      AbortIncompleteMultipartUpload?: AbortIncompleteMultipartUpload;
    }
    export interface S3KeyFilter {
      FilterRules?: FilterRuleList;
    }
    export interface Tag {
      /** Name of the tag. **/
      Key: ObjectKey;
      /** Value of the tag. **/
      Value: Value;
    }
    export interface Tagging {
      TagSet: TagSet;
    }
    export interface TargetGrant {
      Grantee?: Grantee;
      /** Logging permissions assigned to the Grantee for the bucket. **/
      Permission?: BucketLogsPermission;
    }
    export interface TopicConfiguration {
      Id?: NotificationId;
      /** Amazon SNS topic ARN to which Amazon S3 will publish a message when it detects
events of specified type. **/
      TopicArn: TopicArn;
      Events: EventList;
      Filter?: NotificationConfigurationFilter;
    }
    export interface TopicConfigurationDeprecated {
      Id?: NotificationId;
      Events?: EventList;
      /** Bucket event for which to send notifications. **/
      Event?: Event;
      /** Amazon SNS topic to which Amazon S3 will publish a message to report the
specified events for the bucket. **/
      Topic?: TopicArn;
    }
    export interface Transition {
      /** Indicates at what date the object is to be moved or deleted. Should be in GMT
ISO 8601 Format. **/
      Date?: Date;
      /** Indicates the lifetime, in days, of the objects that are subject to the rule.
The value must be a non-zero positive integer. **/
      Days?: Days;
      /** The class of storage used to store the object. **/
      StorageClass?: TransitionStorageClass;
    }
    export interface UploadPartCopyOutput {
      /** The version of the source object that was copied, if you have enabled versioning
on the source bucket. **/
      CopySourceVersionId?: CopySourceVersionId;
      CopyPartResult?: CopyPartResult;
      /** The Server-side encryption algorithm used when storing this object in S3 (e.g.,
AES256, aws:kms). **/
      ServerSideEncryption?: ServerSideEncryption;
      /** If server-side encryption with a customer-provided encryption key was requested,
the response will include this header confirming the encryption algorithm used. **/
      SSECustomerAlgorithm?: SSECustomerAlgorithm;
      /** If server-side encryption with a customer-provided encryption key was requested,
the response will include this header to provide round trip message integrity
verification of the customer-provided encryption key. **/
      SSECustomerKeyMD5?: SSECustomerKeyMD5;
      /** If present, specifies the ID of the AWS Key Management Service (KMS) master
encryption key that was used for the object. **/
      SSEKMSKeyId?: SSEKMSKeyId;
      RequestCharged?: RequestCharged;
    }
    export interface UploadPartCopyRequest {
      Bucket: BucketName;
      /** The name of the source bucket and key name of the source object, separated by a
slash (/). Must be URL-encoded. **/
      CopySource: CopySource;
      /** Copies the object if its entity tag (ETag) matches the specified tag. **/
      CopySourceIfMatch?: CopySourceIfMatch;
      /** Copies the object if it has been modified since the specified time. **/
      CopySourceIfModifiedSince?: CopySourceIfModifiedSince;
      /** Copies the object if its entity tag (ETag) is different than the specified ETag. **/
      CopySourceIfNoneMatch?: CopySourceIfNoneMatch;
      /** Copies the object if it hasn&#x27;t been modified since the specified time. **/
      CopySourceIfUnmodifiedSince?: CopySourceIfUnmodifiedSince;
      /** The range of bytes to copy from the source object. The range value must use the
form bytes=first-last, where the first and last are the zero-based byte offsets
to copy. For example, bytes=0-9 indicates that you want to copy the first ten
bytes of the source. You can copy a range only if the source object is greater
than 5 GB. **/
      CopySourceRange?: CopySourceRange;
      Key: ObjectKey;
      /** Part number of part being copied. This is a positive integer between 1 and
10,000. **/
      PartNumber: PartNumber;
      /** Upload ID identifying the multipart upload whose part is being copied. **/
      UploadId: MultipartUploadId;
      /** Specifies the algorithm to use to when encrypting the object (e.g., AES256). **/
      SSECustomerAlgorithm?: SSECustomerAlgorithm;
      /** Specifies the customer-provided encryption key for Amazon S3 to use in
encrypting data. This value is used to store the object and then it is
discarded; Amazon does not store the encryption key. The key must be appropriate
for use with the algorithm specified in the
x-amz-server-side​-encryption​-customer-algorithm header. This must be the same
encryption key specified in the initiate multipart upload request. **/
      SSECustomerKey?: SSECustomerKey;
      /** Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321.
Amazon S3 uses this header for a message integrity check to ensure the
encryption key was transmitted without error. **/
      SSECustomerKeyMD5?: SSECustomerKeyMD5;
      /** Specifies the algorithm to use when decrypting the source object (e.g., AES256). **/
      CopySourceSSECustomerAlgorithm?: CopySourceSSECustomerAlgorithm;
      /** Specifies the customer-provided encryption key for Amazon S3 to use to decrypt
the source object. The encryption key provided in this header must be one that
was used when the source object was created. **/
      CopySourceSSECustomerKey?: CopySourceSSECustomerKey;
      /** Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321.
Amazon S3 uses this header for a message integrity check to ensure the
encryption key was transmitted without error. **/
      CopySourceSSECustomerKeyMD5?: CopySourceSSECustomerKeyMD5;
      RequestPayer?: RequestPayer;
    }
    export interface UploadPartOutput {
      /** The Server-side encryption algorithm used when storing this object in S3 (e.g.,
AES256, aws:kms). **/
      ServerSideEncryption?: ServerSideEncryption;
      /** Entity tag for the uploaded object. **/
      ETag?: ETag;
      /** If server-side encryption with a customer-provided encryption key was requested,
the response will include this header confirming the encryption algorithm used. **/
      SSECustomerAlgorithm?: SSECustomerAlgorithm;
      /** If server-side encryption with a customer-provided encryption key was requested,
the response will include this header to provide round trip message integrity
verification of the customer-provided encryption key. **/
      SSECustomerKeyMD5?: SSECustomerKeyMD5;
      /** If present, specifies the ID of the AWS Key Management Service (KMS) master
encryption key that was used for the object. **/
      SSEKMSKeyId?: SSEKMSKeyId;
      RequestCharged?: RequestCharged;
    }
    export interface UploadPartRequest {
      /** Object data. **/
      Body?: Body;
      /** Name of the bucket to which the multipart upload was initiated. **/
      Bucket: BucketName;
      /** Size of the body in bytes. This parameter is useful when the size of the body
cannot be determined automatically. **/
      ContentLength?: ContentLength;
      /** The base64-encoded 128-bit MD5 digest of the part data. **/
      ContentMD5?: ContentMD5;
      /** Object key for which the multipart upload was initiated. **/
      Key: ObjectKey;
      /** Part number of part being uploaded. This is a positive integer between 1 and
10,000. **/
      PartNumber: PartNumber;
      /** Upload ID identifying the multipart upload whose part is being uploaded. **/
      UploadId: MultipartUploadId;
      /** Specifies the algorithm to use to when encrypting the object (e.g., AES256). **/
      SSECustomerAlgorithm?: SSECustomerAlgorithm;
      /** Specifies the customer-provided encryption key for Amazon S3 to use in
encrypting data. This value is used to store the object and then it is
discarded; Amazon does not store the encryption key. The key must be appropriate
for use with the algorithm specified in the
x-amz-server-side​-encryption​-customer-algorithm header. This must be the same
encryption key specified in the initiate multipart upload request. **/
      SSECustomerKey?: SSECustomerKey;
      /** Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321.
Amazon S3 uses this header for a message integrity check to ensure the
encryption key was transmitted without error. **/
      SSECustomerKeyMD5?: SSECustomerKeyMD5;
      RequestPayer?: RequestPayer;
    }
    export interface VersioningConfiguration {
      /** Specifies whether MFA delete is enabled in the bucket versioning configuration.
This element is only returned if the bucket has been configured with MFA delete.
If the bucket has never been so configured, this element is not returned. **/
      MFADelete?: MFADelete;
      /** The versioning state of the bucket. **/
      Status?: BucketVersioningStatus;
    }
    export interface WebsiteConfiguration {
      ErrorDocument?: ErrorDocument;
      IndexDocument?: IndexDocument;
      RedirectAllRequestsTo?: RedirectAllRequestsTo;
      RoutingRules?: RoutingRules;
    }
  }
}
