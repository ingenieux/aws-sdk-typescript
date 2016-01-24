// Type definitions for aws-sdk - Amazon Simple Storage Service
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

///<reference path="./aws-sdk-common.d.ts" />

declare module "aws-sdk" {

    /*
     * apiVersion: 2006-03-01
     * endpointPrefix: s3
     * serviceAbbreviation: Amazon S3
     * signatureVersion: s3
     * protocol: rest-xml
     */
    export class S3 extends Service {
      constructor(options?: any);
      endpoint: Endpoint;
      abortMultipartUpload(params: S3.AbortMultipartUploadRequest, callback?: (err: S3.NoSuchUpload|any, data: S3.AbortMultipartUploadOutput|any) => void): Request;
      completeMultipartUpload(params: S3.CompleteMultipartUploadRequest, callback?: (err: any, data: S3.CompleteMultipartUploadOutput|any) => void): Request;
      copyObject(params: S3.CopyObjectRequest, callback?: (err: S3.ObjectNotInActiveTierError|any, data: S3.CopyObjectOutput|any) => void): Request;
      createBucket(params: S3.CreateBucketRequest, callback?: (err: S3.BucketAlreadyExists|any, data: S3.CreateBucketOutput|any) => void): Request;
      createMultipartUpload(params: S3.CreateMultipartUploadRequest, callback?: (err: any, data: S3.CreateMultipartUploadOutput|any) => void): Request;
      deleteBucket(params: S3.DeleteBucketRequest, callback?: (err: any, data: any) => void): Request;
      deleteBucketCors(params: S3.DeleteBucketCorsRequest, callback?: (err: any, data: any) => void): Request;
      deleteBucketLifecycle(params: S3.DeleteBucketLifecycleRequest, callback?: (err: any, data: any) => void): Request;
      deleteBucketPolicy(params: S3.DeleteBucketPolicyRequest, callback?: (err: any, data: any) => void): Request;
      deleteBucketReplication(params: S3.DeleteBucketReplicationRequest, callback?: (err: any, data: any) => void): Request;
      deleteBucketTagging(params: S3.DeleteBucketTaggingRequest, callback?: (err: any, data: any) => void): Request;
      deleteBucketWebsite(params: S3.DeleteBucketWebsiteRequest, callback?: (err: any, data: any) => void): Request;
      deleteObject(params: S3.DeleteObjectRequest, callback?: (err: any, data: S3.DeleteObjectOutput|any) => void): Request;
      deleteObjects(params: S3.DeleteObjectsRequest, callback?: (err: any, data: S3.DeleteObjectsOutput|any) => void): Request;
      getBucketAcl(params: S3.GetBucketAclRequest, callback?: (err: any, data: S3.GetBucketAclOutput|any) => void): Request;
      getBucketCors(params: S3.GetBucketCorsRequest, callback?: (err: any, data: S3.GetBucketCorsOutput|any) => void): Request;
      getBucketLifecycle(params: S3.GetBucketLifecycleRequest, callback?: (err: any, data: S3.GetBucketLifecycleOutput|any) => void): Request;
      getBucketLifecycleConfiguration(params: S3.GetBucketLifecycleConfigurationRequest, callback?: (err: any, data: S3.GetBucketLifecycleConfigurationOutput|any) => void): Request;
      getBucketLocation(params: S3.GetBucketLocationRequest, callback?: (err: any, data: S3.GetBucketLocationOutput|any) => void): Request;
      getBucketLogging(params: S3.GetBucketLoggingRequest, callback?: (err: any, data: S3.GetBucketLoggingOutput|any) => void): Request;
      getBucketNotification(params: S3.GetBucketNotificationConfigurationRequest, callback?: (err: any, data: S3.NotificationConfigurationDeprecated|any) => void): Request;
      getBucketNotificationConfiguration(params: S3.GetBucketNotificationConfigurationRequest, callback?: (err: any, data: S3.NotificationConfiguration|any) => void): Request;
      getBucketPolicy(params: S3.GetBucketPolicyRequest, callback?: (err: any, data: S3.GetBucketPolicyOutput|any) => void): Request;
      getBucketReplication(params: S3.GetBucketReplicationRequest, callback?: (err: any, data: S3.GetBucketReplicationOutput|any) => void): Request;
      getBucketRequestPayment(params: S3.GetBucketRequestPaymentRequest, callback?: (err: any, data: S3.GetBucketRequestPaymentOutput|any) => void): Request;
      getBucketTagging(params: S3.GetBucketTaggingRequest, callback?: (err: any, data: S3.GetBucketTaggingOutput|any) => void): Request;
      getBucketVersioning(params: S3.GetBucketVersioningRequest, callback?: (err: any, data: S3.GetBucketVersioningOutput|any) => void): Request;
      getBucketWebsite(params: S3.GetBucketWebsiteRequest, callback?: (err: any, data: S3.GetBucketWebsiteOutput|any) => void): Request;
      getObject(params: S3.GetObjectRequest, callback?: (err: S3.NoSuchKey|any, data: S3.GetObjectOutput|any) => void): Request;
      getObjectAcl(params: S3.GetObjectAclRequest, callback?: (err: S3.NoSuchKey|any, data: S3.GetObjectAclOutput|any) => void): Request;
      getObjectTorrent(params: S3.GetObjectTorrentRequest, callback?: (err: any, data: S3.GetObjectTorrentOutput|any) => void): Request;
      headBucket(params: S3.HeadBucketRequest, callback?: (err: S3.NoSuchBucket|any, data: any) => void): Request;
      headObject(params: S3.HeadObjectRequest, callback?: (err: S3.NoSuchKey|any, data: S3.HeadObjectOutput|any) => void): Request;
      listBuckets(callback?: (err: any, data: S3.ListBucketsOutput|any) => void): Request;
      listMultipartUploads(params: S3.ListMultipartUploadsRequest, callback?: (err: any, data: S3.ListMultipartUploadsOutput|any) => void): Request;
      listObjectVersions(params: S3.ListObjectVersionsRequest, callback?: (err: any, data: S3.ListObjectVersionsOutput|any) => void): Request;
      listObjects(params: S3.ListObjectsRequest, callback?: (err: S3.NoSuchBucket|any, data: S3.ListObjectsOutput|any) => void): Request;
      listParts(params: S3.ListPartsRequest, callback?: (err: any, data: S3.ListPartsOutput|any) => void): Request;
      putBucketAcl(params: S3.PutBucketAclRequest, callback?: (err: any, data: any) => void): Request;
      putBucketCors(params: S3.PutBucketCorsRequest, callback?: (err: any, data: any) => void): Request;
      putBucketLifecycle(params: S3.PutBucketLifecycleRequest, callback?: (err: any, data: any) => void): Request;
      putBucketLifecycleConfiguration(params: S3.PutBucketLifecycleConfigurationRequest, callback?: (err: any, data: any) => void): Request;
      putBucketLogging(params: S3.PutBucketLoggingRequest, callback?: (err: any, data: any) => void): Request;
      putBucketNotification(params: S3.PutBucketNotificationRequest, callback?: (err: any, data: any) => void): Request;
      putBucketNotificationConfiguration(params: S3.PutBucketNotificationConfigurationRequest, callback?: (err: any, data: any) => void): Request;
      putBucketPolicy(params: S3.PutBucketPolicyRequest, callback?: (err: any, data: any) => void): Request;
      putBucketReplication(params: S3.PutBucketReplicationRequest, callback?: (err: any, data: any) => void): Request;
      putBucketRequestPayment(params: S3.PutBucketRequestPaymentRequest, callback?: (err: any, data: any) => void): Request;
      putBucketTagging(params: S3.PutBucketTaggingRequest, callback?: (err: any, data: any) => void): Request;
      putBucketVersioning(params: S3.PutBucketVersioningRequest, callback?: (err: any, data: any) => void): Request;
      putBucketWebsite(params: S3.PutBucketWebsiteRequest, callback?: (err: any, data: any) => void): Request;
      putObject(params: S3.PutObjectRequest, callback?: (err: any, data: S3.PutObjectOutput|any) => void): Request;
      putObjectAcl(params: S3.PutObjectAclRequest, callback?: (err: S3.NoSuchKey|any, data: S3.PutObjectAclOutput|any) => void): Request;
      restoreObject(params: S3.RestoreObjectRequest, callback?: (err: S3.ObjectAlreadyInActiveTierError|any, data: S3.RestoreObjectOutput|any) => void): Request;
      uploadPart(params: S3.UploadPartRequest, callback?: (err: any, data: S3.UploadPartOutput|any) => void): Request;
      uploadPartCopy(params: S3.UploadPartCopyRequest, callback?: (err: any, data: S3.UploadPartCopyOutput|any) => void): Request;

      // Found on JS Sources - Sorry for the inconvenience :)
      validateService(...args: any[]): any
      // Found on JS Sources - Sorry for the inconvenience :)
      setupRequestListeners(...args: any[]): any
      // Found on JS Sources - Sorry for the inconvenience :)
      validateScheme(...args: any[]): any
      // Found on JS Sources - Sorry for the inconvenience :)
      validateBucketEndpoint(...args: any[]): any
      // Found on JS Sources - Sorry for the inconvenience :)
      populateURI(...args: any[]): any
      // Found on JS Sources - Sorry for the inconvenience :)
      addExpect100Continue(...args: any[]): any
      // Found on JS Sources - Sorry for the inconvenience :)
      addContentType(...args: any[]): any
      // Found on JS Sources - Sorry for the inconvenience :)
      computableChecksumOperations(...args: any[]): any
      // Found on JS Sources - Sorry for the inconvenience :)
      willComputeChecksums(...args: any[]): any
      // Found on JS Sources - Sorry for the inconvenience :)
      computeContentMd5(...args: any[]): any
      // Found on JS Sources - Sorry for the inconvenience :)
      computeSseCustomerKeyMd5(...args: any[]): any
      // Found on JS Sources - Sorry for the inconvenience :)
      pathStyleBucketName(...args: any[]): any
      // Found on JS Sources - Sorry for the inconvenience :)
      dnsCompatibleBucketName(...args: any[]): any
      // Found on JS Sources - Sorry for the inconvenience :)
      successfulResponse(...args: any[]): any
      // Found on JS Sources - Sorry for the inconvenience :)
      retryableError(...args: any[]): any
      // Found on JS Sources - Sorry for the inconvenience :)
      extractData(...args: any[]): any
      // Found on JS Sources - Sorry for the inconvenience :)
      extractError(...args: any[]): any
      // Found on JS Sources - Sorry for the inconvenience :)
      getSignedUrl(...args: any[]): any
      // Found on JS Sources - Sorry for the inconvenience :)
      prepareSignedUrl(...args: any[]): any
      // Found on JS Sources - Sorry for the inconvenience :)
      noPresignedContentLength(...args: any[]): any
      // Found on JS Sources - Sorry for the inconvenience :)
      createBucket(...args: any[]): any
      // Found on JS Sources - Sorry for the inconvenience :)
      upload(...args: any[]): any
    }

    export module S3 {
        export type AcceptRanges = string;
        export type AllowedHeader = string;
        export type AllowedHeaders = AllowedHeader[];
        export type AllowedMethod = string;
        export type AllowedMethods = AllowedMethod[];
        export type AllowedOrigin = string;
        export type AllowedOrigins = AllowedOrigin[];
        export type Body = any;    // type: blob
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
        export type CopySource = string;    // pattern: &quot;\/.+\/.+&quot;
        export type CopySourceIfMatch = string;
        export type CopySourceIfModifiedSince = number;
        export type CopySourceIfNoneMatch = string;
        export type CopySourceIfUnmodifiedSince = number;
        export type CopySourceRange = string;
        export type CopySourceSSECustomerAlgorithm = string;
        export type CopySourceSSECustomerKey = any;    // type: blob
        export type CopySourceSSECustomerKeyMD5 = string;
        export type CopySourceVersionId = string;
        export type CreationDate = number;
        export type Date = number;
        export type Days = number;
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
        export type Expires = number;
        export type ExposeHeader = string;
        export type ExposeHeaders = ExposeHeader[];
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
        export type Metadata = {[key:string]: MetadataValue};
        export type MetadataDirective = string;
        export type MetadataKey = string;
        export type MetadataValue = string;
        export type MissingMeta = number;
        export type MultipartUploadId = string;
        export type MultipartUploadList = MultipartUpload[];
        export type NextKeyMarker = string;
        export type NextMarker = string;
        export type NextPartNumberMarker = number;
        export type NextUploadIdMarker = string;
        export type NextVersionIdMarker = string;
        export type NoncurrentVersionTransitionList = NoncurrentVersionTransition[];
        export type NotificationId = string;
        export type ObjectCannedACL = string;
        export type ObjectIdentifierList = ObjectIdentifier[];
        export type ObjectKey = string;    // min: 1
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
        export type SSECustomerKey = any;    // type: blob
        export type SSECustomerKeyMD5 = string;
        export type SSEKMSKeyId = string;
        export type ServerSideEncryption = string;
        export type Size = number;
        export type StorageClass = string;
        export type Suffix = string;
        export type TagSet = Tag[];
        export type TargetBucket = string;
        export type TargetGrants = TargetGrant[];
        export type TargetPrefix = string;
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

        export interface AbortMultipartUploadOutput {
            RequestCharged?: RequestCharged;
        }
        export interface AbortMultipartUploadRequest {
            Bucket: BucketName;
            Key: ObjectKey;
            UploadId: MultipartUploadId;
            RequestPayer?: RequestPayer;
        }
        export interface AccessControlPolicy {
            Grants?: Grants;
            Owner?: Owner;
        }
        export interface Bucket {
            Name?: BucketName;
            CreationDate?: CreationDate;
        }
        export interface BucketAlreadyExists {
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
            AllowedHeaders?: AllowedHeaders;
            AllowedMethods: AllowedMethods;
            AllowedOrigins: AllowedOrigins;
            ExposeHeaders?: ExposeHeaders;
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
            Expiration?: Expiration;
            ETag?: ETag;
            ServerSideEncryption?: ServerSideEncryption;
            VersionId?: ObjectVersionId;
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
            ETag?: ETag;
            PartNumber?: PartNumber;
        }
        export interface Condition {
            HttpErrorCodeReturnedEquals?: HttpErrorCodeReturnedEquals;
            KeyPrefixEquals?: KeyPrefixEquals;
        }
        export interface CopyObjectOutput {
            CopyObjectResult?: CopyObjectResult;
            Expiration?: Expiration;
            CopySourceVersionId?: CopySourceVersionId;
            VersionId?: ObjectVersionId;
            ServerSideEncryption?: ServerSideEncryption;
            SSECustomerAlgorithm?: SSECustomerAlgorithm;
            SSECustomerKeyMD5?: SSECustomerKeyMD5;
            SSEKMSKeyId?: SSEKMSKeyId;
            RequestCharged?: RequestCharged;
        }
        export interface CopyObjectRequest {
            ACL?: ObjectCannedACL;
            Bucket: BucketName;
            CacheControl?: CacheControl;
            ContentDisposition?: ContentDisposition;
            ContentEncoding?: ContentEncoding;
            ContentLanguage?: ContentLanguage;
            ContentType?: ContentType;
            CopySource: CopySource;
            CopySourceIfMatch?: CopySourceIfMatch;
            CopySourceIfModifiedSince?: CopySourceIfModifiedSince;
            CopySourceIfNoneMatch?: CopySourceIfNoneMatch;
            CopySourceIfUnmodifiedSince?: CopySourceIfUnmodifiedSince;
            Expires?: Expires;
            GrantFullControl?: GrantFullControl;
            GrantRead?: GrantRead;
            GrantReadACP?: GrantReadACP;
            GrantWriteACP?: GrantWriteACP;
            Key: ObjectKey;
            Metadata?: Metadata;
            MetadataDirective?: MetadataDirective;
            ServerSideEncryption?: ServerSideEncryption;
            StorageClass?: StorageClass;
            WebsiteRedirectLocation?: WebsiteRedirectLocation;
            SSECustomerAlgorithm?: SSECustomerAlgorithm;
            SSECustomerKey?: SSECustomerKey;
            SSECustomerKeyMD5?: SSECustomerKeyMD5;
            SSEKMSKeyId?: SSEKMSKeyId;
            CopySourceSSECustomerAlgorithm?: CopySourceSSECustomerAlgorithm;
            CopySourceSSECustomerKey?: CopySourceSSECustomerKey;
            CopySourceSSECustomerKeyMD5?: CopySourceSSECustomerKeyMD5;
            RequestPayer?: RequestPayer;
        }
        export interface CopyObjectResult {
            ETag?: ETag;
            LastModified?: LastModified;
        }
        export interface CopyPartResult {
            ETag?: ETag;
            LastModified?: LastModified;
        }
        export interface CreateBucketConfiguration {
            LocationConstraint?: BucketLocationConstraint;
        }
        export interface CreateBucketOutput {
            Location?: Location;
        }
        export interface CreateBucketRequest {
            ACL?: BucketCannedACL;
            Bucket: BucketName;
            CreateBucketConfiguration?: CreateBucketConfiguration;
            GrantFullControl?: GrantFullControl;
            GrantRead?: GrantRead;
            GrantReadACP?: GrantReadACP;
            GrantWrite?: GrantWrite;
            GrantWriteACP?: GrantWriteACP;
        }
        export interface CreateMultipartUploadOutput {
            Bucket?: BucketName;
            Key?: ObjectKey;
            UploadId?: MultipartUploadId;
            ServerSideEncryption?: ServerSideEncryption;
            SSECustomerAlgorithm?: SSECustomerAlgorithm;
            SSECustomerKeyMD5?: SSECustomerKeyMD5;
            SSEKMSKeyId?: SSEKMSKeyId;
            RequestCharged?: RequestCharged;
        }
        export interface CreateMultipartUploadRequest {
            ACL?: ObjectCannedACL;
            Bucket: BucketName;
            CacheControl?: CacheControl;
            ContentDisposition?: ContentDisposition;
            ContentEncoding?: ContentEncoding;
            ContentLanguage?: ContentLanguage;
            ContentType?: ContentType;
            Expires?: Expires;
            GrantFullControl?: GrantFullControl;
            GrantRead?: GrantRead;
            GrantReadACP?: GrantReadACP;
            GrantWriteACP?: GrantWriteACP;
            Key: ObjectKey;
            Metadata?: Metadata;
            ServerSideEncryption?: ServerSideEncryption;
            StorageClass?: StorageClass;
            WebsiteRedirectLocation?: WebsiteRedirectLocation;
            SSECustomerAlgorithm?: SSECustomerAlgorithm;
            SSECustomerKey?: SSECustomerKey;
            SSECustomerKeyMD5?: SSECustomerKeyMD5;
            SSEKMSKeyId?: SSEKMSKeyId;
            RequestPayer?: RequestPayer;
        }
        export interface Delete {
            Objects: ObjectIdentifierList;
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
            Key?: ObjectKey;
            VersionId?: ObjectVersionId;
            IsLatest?: IsLatest;
            LastModified?: LastModified;
        }
        export interface DeleteObjectOutput {
            DeleteMarker?: DeleteMarker;
            VersionId?: ObjectVersionId;
            RequestCharged?: RequestCharged;
        }
        export interface DeleteObjectRequest {
            Bucket: BucketName;
            Key: ObjectKey;
            MFA?: MFA;
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
            Bucket: BucketName;
            StorageClass?: StorageClass;
        }
        export interface Error {
            Key?: ObjectKey;
            VersionId?: ObjectVersionId;
            Code?: Code;
            Message?: Message;
        }
        export interface ErrorDocument {
            Key: ObjectKey;
        }
        export interface FilterRule {
            Name?: FilterRuleName;
            Value?: FilterRuleValue;
        }
        export interface GetBucketAclOutput {
            Owner?: Owner;
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
            Bucket: BucketName;
        }
        export interface GetBucketPolicyOutput {
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
            Status?: BucketVersioningStatus;
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
            Grants?: Grants;
            RequestCharged?: RequestCharged;
        }
        export interface GetObjectAclRequest {
            Bucket: BucketName;
            Key: ObjectKey;
            VersionId?: ObjectVersionId;
            RequestPayer?: RequestPayer;
        }
        export interface GetObjectOutput {
            Body?: Body;
            DeleteMarker?: DeleteMarker;
            AcceptRanges?: AcceptRanges;
            Expiration?: Expiration;
            Restore?: Restore;
            LastModified?: LastModified;
            ContentLength?: ContentLength;
            ETag?: ETag;
            MissingMeta?: MissingMeta;
            VersionId?: ObjectVersionId;
            CacheControl?: CacheControl;
            ContentDisposition?: ContentDisposition;
            ContentEncoding?: ContentEncoding;
            ContentLanguage?: ContentLanguage;
            ContentRange?: ContentRange;
            ContentType?: ContentType;
            Expires?: Expires;
            WebsiteRedirectLocation?: WebsiteRedirectLocation;
            ServerSideEncryption?: ServerSideEncryption;
            Metadata?: Metadata;
            SSECustomerAlgorithm?: SSECustomerAlgorithm;
            SSECustomerKeyMD5?: SSECustomerKeyMD5;
            SSEKMSKeyId?: SSEKMSKeyId;
            StorageClass?: StorageClass;
            RequestCharged?: RequestCharged;
            ReplicationStatus?: ReplicationStatus;
        }
        export interface GetObjectRequest {
            Bucket: BucketName;
            IfMatch?: IfMatch;
            IfModifiedSince?: IfModifiedSince;
            IfNoneMatch?: IfNoneMatch;
            IfUnmodifiedSince?: IfUnmodifiedSince;
            Key: ObjectKey;
            Range?: Range;
            ResponseCacheControl?: ResponseCacheControl;
            ResponseContentDisposition?: ResponseContentDisposition;
            ResponseContentEncoding?: ResponseContentEncoding;
            ResponseContentLanguage?: ResponseContentLanguage;
            ResponseContentType?: ResponseContentType;
            ResponseExpires?: ResponseExpires;
            VersionId?: ObjectVersionId;
            SSECustomerAlgorithm?: SSECustomerAlgorithm;
            SSECustomerKey?: SSECustomerKey;
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
            Permission?: Permission;
        }
        export interface Grantee {
            DisplayName?: DisplayName;
            EmailAddress?: EmailAddress;
            ID?: ID;
            Type: Type;
            URI?: URI;
        }
        export interface HeadBucketRequest {
            Bucket: BucketName;
        }
        export interface HeadObjectOutput {
            DeleteMarker?: DeleteMarker;
            AcceptRanges?: AcceptRanges;
            Expiration?: Expiration;
            Restore?: Restore;
            LastModified?: LastModified;
            ContentLength?: ContentLength;
            ETag?: ETag;
            MissingMeta?: MissingMeta;
            VersionId?: ObjectVersionId;
            CacheControl?: CacheControl;
            ContentDisposition?: ContentDisposition;
            ContentEncoding?: ContentEncoding;
            ContentLanguage?: ContentLanguage;
            ContentType?: ContentType;
            Expires?: Expires;
            WebsiteRedirectLocation?: WebsiteRedirectLocation;
            ServerSideEncryption?: ServerSideEncryption;
            Metadata?: Metadata;
            SSECustomerAlgorithm?: SSECustomerAlgorithm;
            SSECustomerKeyMD5?: SSECustomerKeyMD5;
            SSEKMSKeyId?: SSEKMSKeyId;
            StorageClass?: StorageClass;
            RequestCharged?: RequestCharged;
            ReplicationStatus?: ReplicationStatus;
        }
        export interface HeadObjectRequest {
            Bucket: BucketName;
            IfMatch?: IfMatch;
            IfModifiedSince?: IfModifiedSince;
            IfNoneMatch?: IfNoneMatch;
            IfUnmodifiedSince?: IfUnmodifiedSince;
            Key: ObjectKey;
            Range?: Range;
            VersionId?: ObjectVersionId;
            SSECustomerAlgorithm?: SSECustomerAlgorithm;
            SSECustomerKey?: SSECustomerKey;
            SSECustomerKeyMD5?: SSECustomerKeyMD5;
            RequestPayer?: RequestPayer;
        }
        export interface IndexDocument {
            Suffix: Suffix;
        }
        export interface Initiator {
            ID?: ID;
            DisplayName?: DisplayName;
        }
        export interface LambdaFunctionConfiguration {
            Id?: NotificationId;
            LambdaFunctionArn: LambdaFunctionArn;
            Events: EventList;
            Filter?: NotificationConfigurationFilter;
        }
        export interface LifecycleConfiguration {
            Rules: Rules;
        }
        export interface LifecycleExpiration {
            Date?: Date;
            Days?: Days;
        }
        export interface LifecycleRule {
            Expiration?: LifecycleExpiration;
            ID?: ID;
            Prefix: Prefix;
            Status: ExpirationStatus;
            Transitions?: TransitionList;
            NoncurrentVersionTransitions?: NoncurrentVersionTransitionList;
            NoncurrentVersionExpiration?: NoncurrentVersionExpiration;
        }
        export interface ListBucketsOutput {
            Buckets?: Buckets;
            Owner?: Owner;
        }
        export interface ListMultipartUploadsOutput {
            Bucket?: BucketName;
            KeyMarker?: KeyMarker;
            UploadIdMarker?: UploadIdMarker;
            NextKeyMarker?: NextKeyMarker;
            Prefix?: Prefix;
            Delimiter?: Delimiter;
            NextUploadIdMarker?: NextUploadIdMarker;
            MaxUploads?: MaxUploads;
            IsTruncated?: IsTruncated;
            Uploads?: MultipartUploadList;
            CommonPrefixes?: CommonPrefixList;
            EncodingType?: EncodingType;
        }
        export interface ListMultipartUploadsRequest {
            Bucket: BucketName;
            Delimiter?: Delimiter;
            EncodingType?: EncodingType;
            KeyMarker?: KeyMarker;
            MaxUploads?: MaxUploads;
            Prefix?: Prefix;
            UploadIdMarker?: UploadIdMarker;
        }
        export interface ListObjectVersionsOutput {
            IsTruncated?: IsTruncated;
            KeyMarker?: KeyMarker;
            VersionIdMarker?: VersionIdMarker;
            NextKeyMarker?: NextKeyMarker;
            NextVersionIdMarker?: NextVersionIdMarker;
            Versions?: ObjectVersionList;
            DeleteMarkers?: DeleteMarkers;
            Name?: BucketName;
            Prefix?: Prefix;
            Delimiter?: Delimiter;
            MaxKeys?: MaxKeys;
            CommonPrefixes?: CommonPrefixList;
            EncodingType?: EncodingType;
        }
        export interface ListObjectVersionsRequest {
            Bucket: BucketName;
            Delimiter?: Delimiter;
            EncodingType?: EncodingType;
            KeyMarker?: KeyMarker;
            MaxKeys?: MaxKeys;
            Prefix?: Prefix;
            VersionIdMarker?: VersionIdMarker;
        }
        export interface ListObjectsOutput {
            IsTruncated?: IsTruncated;
            Marker?: Marker;
            NextMarker?: NextMarker;
            Contents?: ObjectList;
            Name?: BucketName;
            Prefix?: Prefix;
            Delimiter?: Delimiter;
            MaxKeys?: MaxKeys;
            CommonPrefixes?: CommonPrefixList;
            EncodingType?: EncodingType;
        }
        export interface ListObjectsRequest {
            Bucket: BucketName;
            Delimiter?: Delimiter;
            EncodingType?: EncodingType;
            Marker?: Marker;
            MaxKeys?: MaxKeys;
            Prefix?: Prefix;
        }
        export interface ListPartsOutput {
            Bucket?: BucketName;
            Key?: ObjectKey;
            UploadId?: MultipartUploadId;
            PartNumberMarker?: PartNumberMarker;
            NextPartNumberMarker?: NextPartNumberMarker;
            MaxParts?: MaxParts;
            IsTruncated?: IsTruncated;
            Parts?: Parts;
            Initiator?: Initiator;
            Owner?: Owner;
            StorageClass?: StorageClass;
            RequestCharged?: RequestCharged;
        }
        export interface ListPartsRequest {
            Bucket: BucketName;
            Key: ObjectKey;
            MaxParts?: MaxParts;
            PartNumberMarker?: PartNumberMarker;
            UploadId: MultipartUploadId;
            RequestPayer?: RequestPayer;
        }
        export interface LoggingEnabled {
            TargetBucket?: TargetBucket;
            TargetGrants?: TargetGrants;
            TargetPrefix?: TargetPrefix;
        }
        export interface MultipartUpload {
            UploadId?: MultipartUploadId;
            Key?: ObjectKey;
            Initiated?: Initiated;
            StorageClass?: StorageClass;
            Owner?: Owner;
            Initiator?: Initiator;
        }
        export interface NoSuchBucket {
        }
        export interface NoSuchKey {
        }
        export interface NoSuchUpload {
        }
        export interface NoncurrentVersionExpiration {
            NoncurrentDays?: Days;
        }
        export interface NoncurrentVersionTransition {
            NoncurrentDays?: Days;
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
            StorageClass?: ObjectStorageClass;
            Owner?: Owner;
        }
        export interface ObjectAlreadyInActiveTierError {
        }
        export interface ObjectIdentifier {
            Key: ObjectKey;
            VersionId?: ObjectVersionId;
        }
        export interface ObjectNotInActiveTierError {
        }
        export interface ObjectVersion {
            ETag?: ETag;
            Size?: Size;
            StorageClass?: ObjectVersionStorageClass;
            Key?: ObjectKey;
            VersionId?: ObjectVersionId;
            IsLatest?: IsLatest;
            LastModified?: LastModified;
            Owner?: Owner;
        }
        export interface Owner {
            DisplayName?: DisplayName;
            ID?: ID;
        }
        export interface Part {
            PartNumber?: PartNumber;
            LastModified?: LastModified;
            ETag?: ETag;
            Size?: Size;
        }
        export interface PutBucketAclRequest {
            ACL?: BucketCannedACL;
            AccessControlPolicy?: AccessControlPolicy;
            Bucket: BucketName;
            ContentMD5?: ContentMD5;
            GrantFullControl?: GrantFullControl;
            GrantRead?: GrantRead;
            GrantReadACP?: GrantReadACP;
            GrantWrite?: GrantWrite;
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
            ACL?: ObjectCannedACL;
            AccessControlPolicy?: AccessControlPolicy;
            Bucket: BucketName;
            ContentMD5?: ContentMD5;
            GrantFullControl?: GrantFullControl;
            GrantRead?: GrantRead;
            GrantReadACP?: GrantReadACP;
            GrantWrite?: GrantWrite;
            GrantWriteACP?: GrantWriteACP;
            Key: ObjectKey;
            RequestPayer?: RequestPayer;
        }
        export interface PutObjectOutput {
            Expiration?: Expiration;
            ETag?: ETag;
            ServerSideEncryption?: ServerSideEncryption;
            VersionId?: ObjectVersionId;
            SSECustomerAlgorithm?: SSECustomerAlgorithm;
            SSECustomerKeyMD5?: SSECustomerKeyMD5;
            SSEKMSKeyId?: SSEKMSKeyId;
            RequestCharged?: RequestCharged;
        }
        export interface PutObjectRequest {
            ACL?: ObjectCannedACL;
            Body?: Body;
            Bucket: BucketName;
            CacheControl?: CacheControl;
            ContentDisposition?: ContentDisposition;
            ContentEncoding?: ContentEncoding;
            ContentLanguage?: ContentLanguage;
            ContentLength?: ContentLength;
            ContentMD5?: ContentMD5;
            ContentType?: ContentType;
            Expires?: Expires;
            GrantFullControl?: GrantFullControl;
            GrantRead?: GrantRead;
            GrantReadACP?: GrantReadACP;
            GrantWriteACP?: GrantWriteACP;
            Key: ObjectKey;
            Metadata?: Metadata;
            ServerSideEncryption?: ServerSideEncryption;
            StorageClass?: StorageClass;
            WebsiteRedirectLocation?: WebsiteRedirectLocation;
            SSECustomerAlgorithm?: SSECustomerAlgorithm;
            SSECustomerKey?: SSECustomerKey;
            SSECustomerKeyMD5?: SSECustomerKeyMD5;
            SSEKMSKeyId?: SSEKMSKeyId;
            RequestPayer?: RequestPayer;
        }
        export interface QueueConfiguration {
            Id?: NotificationId;
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
            HostName?: HostName;
            HttpRedirectCode?: HttpRedirectCode;
            Protocol?: Protocol;
            ReplaceKeyPrefixWith?: ReplaceKeyPrefixWith;
            ReplaceKeyWith?: ReplaceKeyWith;
        }
        export interface RedirectAllRequestsTo {
            HostName: HostName;
            Protocol?: Protocol;
        }
        export interface ReplicationConfiguration {
            Role: Role;
            Rules: ReplicationRules;
        }
        export interface ReplicationRule {
            ID?: ID;
            Prefix: Prefix;
            Status: ReplicationRuleStatus;
            Destination: Destination;
        }
        export interface RequestPaymentConfiguration {
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
            Days: Days;
        }
        export interface RoutingRule {
            Condition?: Condition;
            Redirect: Redirect;
        }
        export interface Rule {
            Expiration?: LifecycleExpiration;
            ID?: ID;
            Prefix: Prefix;
            Status: ExpirationStatus;
            Transition?: Transition;
            NoncurrentVersionTransition?: NoncurrentVersionTransition;
            NoncurrentVersionExpiration?: NoncurrentVersionExpiration;
        }
        export interface S3KeyFilter {
            FilterRules?: FilterRuleList;
        }
        export interface Tag {
            Key: ObjectKey;
            Value: Value;
        }
        export interface Tagging {
            TagSet: TagSet;
        }
        export interface TargetGrant {
            Grantee?: Grantee;
            Permission?: BucketLogsPermission;
        }
        export interface TopicConfiguration {
            Id?: NotificationId;
            TopicArn: TopicArn;
            Events: EventList;
            Filter?: NotificationConfigurationFilter;
        }
        export interface TopicConfigurationDeprecated {
            Id?: NotificationId;
            Events?: EventList;
            Event?: Event;
            Topic?: TopicArn;
        }
        export interface Transition {
            Date?: Date;
            Days?: Days;
            StorageClass?: TransitionStorageClass;
        }
        export interface UploadPartCopyOutput {
            CopySourceVersionId?: CopySourceVersionId;
            CopyPartResult?: CopyPartResult;
            ServerSideEncryption?: ServerSideEncryption;
            SSECustomerAlgorithm?: SSECustomerAlgorithm;
            SSECustomerKeyMD5?: SSECustomerKeyMD5;
            SSEKMSKeyId?: SSEKMSKeyId;
            RequestCharged?: RequestCharged;
        }
        export interface UploadPartCopyRequest {
            Bucket: BucketName;
            CopySource: CopySource;
            CopySourceIfMatch?: CopySourceIfMatch;
            CopySourceIfModifiedSince?: CopySourceIfModifiedSince;
            CopySourceIfNoneMatch?: CopySourceIfNoneMatch;
            CopySourceIfUnmodifiedSince?: CopySourceIfUnmodifiedSince;
            CopySourceRange?: CopySourceRange;
            Key: ObjectKey;
            PartNumber: PartNumber;
            UploadId: MultipartUploadId;
            SSECustomerAlgorithm?: SSECustomerAlgorithm;
            SSECustomerKey?: SSECustomerKey;
            SSECustomerKeyMD5?: SSECustomerKeyMD5;
            CopySourceSSECustomerAlgorithm?: CopySourceSSECustomerAlgorithm;
            CopySourceSSECustomerKey?: CopySourceSSECustomerKey;
            CopySourceSSECustomerKeyMD5?: CopySourceSSECustomerKeyMD5;
            RequestPayer?: RequestPayer;
        }
        export interface UploadPartOutput {
            ServerSideEncryption?: ServerSideEncryption;
            ETag?: ETag;
            SSECustomerAlgorithm?: SSECustomerAlgorithm;
            SSECustomerKeyMD5?: SSECustomerKeyMD5;
            SSEKMSKeyId?: SSEKMSKeyId;
            RequestCharged?: RequestCharged;
        }
        export interface UploadPartRequest {
            Body?: Body;
            Bucket: BucketName;
            ContentLength?: ContentLength;
            ContentMD5?: ContentMD5;
            Key: ObjectKey;
            PartNumber: PartNumber;
            UploadId: MultipartUploadId;
            SSECustomerAlgorithm?: SSECustomerAlgorithm;
            SSECustomerKey?: SSECustomerKey;
            SSECustomerKeyMD5?: SSECustomerKeyMD5;
            RequestPayer?: RequestPayer;
        }
        export interface VersioningConfiguration {
            MFADelete?: MFADelete;
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
