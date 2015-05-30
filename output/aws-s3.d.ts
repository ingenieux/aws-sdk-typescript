// DO NOT EDIT!
//
declare module "aws-sdk" {
    export class S3 {
      constructor(options?: any);
      abortMultipartUpload(params: S3AbortMultipartUploadRequest, callback: (err: S3NoSuchUpload|any, data: S3AbortMultipartUploadOutput|any) => void): void;
      completeMultipartUpload(params: S3CompleteMultipartUploadRequest, callback: (err: any, data: S3CompleteMultipartUploadOutput|any) => void): void;
      copyObject(params: S3CopyObjectRequest, callback: (err: S3ObjectNotInActiveTierError|any, data: S3CopyObjectOutput|any) => void): void;
      createBucket(params: S3CreateBucketRequest, callback: (err: S3BucketAlreadyExists|any, data: S3CreateBucketOutput|any) => void): void;
      createMultipartUpload(params: S3CreateMultipartUploadRequest, callback: (err: any, data: S3CreateMultipartUploadOutput|any) => void): void;
      deleteBucket(params: S3DeleteBucketRequest, callback: (err: any, data: any) => void): void;
      deleteBucketCors(params: S3DeleteBucketCorsRequest, callback: (err: any, data: any) => void): void;
      deleteBucketLifecycle(params: S3DeleteBucketLifecycleRequest, callback: (err: any, data: any) => void): void;
      deleteBucketPolicy(params: S3DeleteBucketPolicyRequest, callback: (err: any, data: any) => void): void;
      deleteBucketReplication(params: S3DeleteBucketReplicationRequest, callback: (err: any, data: any) => void): void;
      deleteBucketTagging(params: S3DeleteBucketTaggingRequest, callback: (err: any, data: any) => void): void;
      deleteBucketWebsite(params: S3DeleteBucketWebsiteRequest, callback: (err: any, data: any) => void): void;
      deleteObject(params: S3DeleteObjectRequest, callback: (err: any, data: S3DeleteObjectOutput|any) => void): void;
      deleteObjects(params: S3DeleteObjectsRequest, callback: (err: any, data: S3DeleteObjectsOutput|any) => void): void;
      getBucketAcl(params: S3GetBucketAclRequest, callback: (err: any, data: S3GetBucketAclOutput|any) => void): void;
      getBucketCors(params: S3GetBucketCorsRequest, callback: (err: any, data: S3GetBucketCorsOutput|any) => void): void;
      getBucketLifecycle(params: S3GetBucketLifecycleRequest, callback: (err: any, data: S3GetBucketLifecycleOutput|any) => void): void;
      getBucketLocation(params: S3GetBucketLocationRequest, callback: (err: any, data: S3GetBucketLocationOutput|any) => void): void;
      getBucketLogging(params: S3GetBucketLoggingRequest, callback: (err: any, data: S3GetBucketLoggingOutput|any) => void): void;
      getBucketNotification(params: S3GetBucketNotificationConfigurationRequest, callback: (err: any, data: S3NotificationConfigurationDeprecated|any) => void): void;
      getBucketNotificationConfiguration(params: S3GetBucketNotificationConfigurationRequest, callback: (err: any, data: S3NotificationConfiguration|any) => void): void;
      getBucketPolicy(params: S3GetBucketPolicyRequest, callback: (err: any, data: S3GetBucketPolicyOutput|any) => void): void;
      getBucketReplication(params: S3GetBucketReplicationRequest, callback: (err: any, data: S3GetBucketReplicationOutput|any) => void): void;
      getBucketRequestPayment(params: S3GetBucketRequestPaymentRequest, callback: (err: any, data: S3GetBucketRequestPaymentOutput|any) => void): void;
      getBucketTagging(params: S3GetBucketTaggingRequest, callback: (err: any, data: S3GetBucketTaggingOutput|any) => void): void;
      getBucketVersioning(params: S3GetBucketVersioningRequest, callback: (err: any, data: S3GetBucketVersioningOutput|any) => void): void;
      getBucketWebsite(params: S3GetBucketWebsiteRequest, callback: (err: any, data: S3GetBucketWebsiteOutput|any) => void): void;
      getObject(params: S3GetObjectRequest, callback: (err: S3NoSuchKey|any, data: S3GetObjectOutput|any) => void): void;
      getObjectAcl(params: S3GetObjectAclRequest, callback: (err: S3NoSuchKey|any, data: S3GetObjectAclOutput|any) => void): void;
      getObjectTorrent(params: S3GetObjectTorrentRequest, callback: (err: any, data: S3GetObjectTorrentOutput|any) => void): void;
      headBucket(params: S3HeadBucketRequest, callback: (err: S3NoSuchBucket|any, data: any) => void): void;
      headObject(params: S3HeadObjectRequest, callback: (err: S3NoSuchKey|any, data: S3HeadObjectOutput|any) => void): void;
      listBuckets(callback: (err: any, data: S3ListBucketsOutput|any) => void): void;
      listMultipartUploads(params: S3ListMultipartUploadsRequest, callback: (err: any, data: S3ListMultipartUploadsOutput|any) => void): void;
      listObjectVersions(params: S3ListObjectVersionsRequest, callback: (err: any, data: S3ListObjectVersionsOutput|any) => void): void;
      listObjects(params: S3ListObjectsRequest, callback: (err: S3NoSuchBucket|any, data: S3ListObjectsOutput|any) => void): void;
      listParts(params: S3ListPartsRequest, callback: (err: any, data: S3ListPartsOutput|any) => void): void;
      putBucketAcl(params: S3PutBucketAclRequest, callback: (err: any, data: any) => void): void;
      putBucketCors(params: S3PutBucketCorsRequest, callback: (err: any, data: any) => void): void;
      putBucketLifecycle(params: S3PutBucketLifecycleRequest, callback: (err: any, data: any) => void): void;
      putBucketLogging(params: S3PutBucketLoggingRequest, callback: (err: any, data: any) => void): void;
      putBucketNotification(params: S3PutBucketNotificationRequest, callback: (err: any, data: any) => void): void;
      putBucketNotificationConfiguration(params: S3PutBucketNotificationConfigurationRequest, callback: (err: any, data: any) => void): void;
      putBucketPolicy(params: S3PutBucketPolicyRequest, callback: (err: any, data: any) => void): void;
      putBucketReplication(params: S3PutBucketReplicationRequest, callback: (err: any, data: any) => void): void;
      putBucketRequestPayment(params: S3PutBucketRequestPaymentRequest, callback: (err: any, data: any) => void): void;
      putBucketTagging(params: S3PutBucketTaggingRequest, callback: (err: any, data: any) => void): void;
      putBucketVersioning(params: S3PutBucketVersioningRequest, callback: (err: any, data: any) => void): void;
      putBucketWebsite(params: S3PutBucketWebsiteRequest, callback: (err: any, data: any) => void): void;
      putObject(params: S3PutObjectRequest, callback: (err: any, data: S3PutObjectOutput|any) => void): void;
      putObjectAcl(params: S3PutObjectAclRequest, callback: (err: S3NoSuchKey|any, data: S3PutObjectAclOutput|any) => void): void;
      restoreObject(params: S3RestoreObjectRequest, callback: (err: S3ObjectAlreadyInActiveTierError|any, data: S3RestoreObjectOutput|any) => void): void;
      uploadPart(params: S3UploadPartRequest, callback: (err: any, data: S3UploadPartOutput|any) => void): void;
      uploadPartCopy(params: S3UploadPartCopyRequest, callback: (err: any, data: S3UploadPartCopyOutput|any) => void): void;
    }

    export interface S3AbortMultipartUploadOutput {
        RequestCharged?: S3RequestCharged;
    }

    export interface S3AbortMultipartUploadRequest {
        Bucket: S3BucketName;
        Key: S3ObjectKey;
        UploadId: S3MultipartUploadId;
        RequestPayer?: S3RequestPayer;
    }

    export type S3AcceptRanges = string;
    export interface S3AccessControlPolicy {
        Grants?: S3Grants;
        Owner?: S3Owner;
    }

    export type S3AllowedHeader = string;
    export type S3AllowedHeaders = Array<S3AllowedHeader>;
    export type S3AllowedMethod = string;
    export type S3AllowedMethods = Array<S3AllowedMethod>;
    export type S3AllowedOrigin = string;
    export type S3AllowedOrigins = Array<S3AllowedOrigin>;
    export type S3Body = any; // not really - it was 'blob' instead - must fix this one
    export interface S3Bucket {
        Name?: S3BucketName;
        CreationDate?: S3CreationDate;
    }

    export interface S3BucketAlreadyExists {
    }

    export type S3BucketCannedACL = string;
    export type S3BucketLocationConstraint = string;
    export interface S3BucketLoggingStatus {
        LoggingEnabled?: S3LoggingEnabled;
    }

    export type S3BucketLogsPermission = string;
    export type S3BucketName = string;
    export type S3BucketVersioningStatus = string;
    export type S3Buckets = Array<S3Bucket>;
    export interface S3CORSConfiguration {
        CORSRules?: S3CORSRules;
    }

    export interface S3CORSRule {
        AllowedHeaders?: S3AllowedHeaders;
        AllowedMethods?: S3AllowedMethods;
        AllowedOrigins?: S3AllowedOrigins;
        ExposeHeaders?: S3ExposeHeaders;
        MaxAgeSeconds?: S3MaxAgeSeconds;
    }

    export type S3CORSRules = Array<S3CORSRule>;
    export type S3CacheControl = string;
    export type S3CloudFunction = string;
    export interface S3CloudFunctionConfiguration {
        Id?: S3NotificationId;
        Event?: S3Event;
        Events?: S3EventList;
        CloudFunction?: S3CloudFunction;
        InvocationRole?: S3CloudFunctionInvocationRole;
    }

    export type S3CloudFunctionInvocationRole = string;
    export type S3Code = string;
    export interface S3CommonPrefix {
        Prefix?: S3Prefix;
    }

    export type S3CommonPrefixList = Array<S3CommonPrefix>;
    export interface S3CompleteMultipartUploadOutput {
        Location?: S3Location;
        Bucket?: S3BucketName;
        Key?: S3ObjectKey;
        Expiration?: S3Expiration;
        ETag?: S3ETag;
        ServerSideEncryption?: S3ServerSideEncryption;
        VersionId?: S3ObjectVersionId;
        SSEKMSKeyId?: S3SSEKMSKeyId;
        RequestCharged?: S3RequestCharged;
    }

    export interface S3CompleteMultipartUploadRequest {
        Bucket: S3BucketName;
        Key: S3ObjectKey;
        MultipartUpload?: S3CompletedMultipartUpload;
        UploadId: S3MultipartUploadId;
        RequestPayer?: S3RequestPayer;
    }

    export interface S3CompletedMultipartUpload {
        Parts?: S3CompletedPartList;
    }

    export interface S3CompletedPart {
        ETag?: S3ETag;
        PartNumber?: S3PartNumber;
    }

    export type S3CompletedPartList = Array<S3CompletedPart>;
    export interface S3Condition {
        HttpErrorCodeReturnedEquals?: S3HttpErrorCodeReturnedEquals;
        KeyPrefixEquals?: S3KeyPrefixEquals;
    }

    export type S3ContentDisposition = string;
    export type S3ContentEncoding = string;
    export type S3ContentLanguage = string;
    export type S3ContentLength = number;
    export type S3ContentMD5 = string;
    export type S3ContentType = string;
    export interface S3CopyObjectOutput {
        CopyObjectResult?: S3CopyObjectResult;
        Expiration?: S3Expiration;
        CopySourceVersionId?: S3CopySourceVersionId;
        ServerSideEncryption?: S3ServerSideEncryption;
        SSECustomerAlgorithm?: S3SSECustomerAlgorithm;
        SSECustomerKeyMD5?: S3SSECustomerKeyMD5;
        SSEKMSKeyId?: S3SSEKMSKeyId;
        RequestCharged?: S3RequestCharged;
    }

    export interface S3CopyObjectRequest {
        ACL?: S3ObjectCannedACL;
        Bucket: S3BucketName;
        CacheControl?: S3CacheControl;
        ContentDisposition?: S3ContentDisposition;
        ContentEncoding?: S3ContentEncoding;
        ContentLanguage?: S3ContentLanguage;
        ContentType?: S3ContentType;
        CopySource: S3CopySource;
        CopySourceIfMatch?: S3CopySourceIfMatch;
        CopySourceIfModifiedSince?: S3CopySourceIfModifiedSince;
        CopySourceIfNoneMatch?: S3CopySourceIfNoneMatch;
        CopySourceIfUnmodifiedSince?: S3CopySourceIfUnmodifiedSince;
        Expires?: S3Expires;
        GrantFullControl?: S3GrantFullControl;
        GrantRead?: S3GrantRead;
        GrantReadACP?: S3GrantReadACP;
        GrantWriteACP?: S3GrantWriteACP;
        Key: S3ObjectKey;
        Metadata?: S3Metadata;
        MetadataDirective?: S3MetadataDirective;
        ServerSideEncryption?: S3ServerSideEncryption;
        StorageClass?: S3StorageClass;
        WebsiteRedirectLocation?: S3WebsiteRedirectLocation;
        SSECustomerAlgorithm?: S3SSECustomerAlgorithm;
        SSECustomerKey?: S3SSECustomerKey;
        SSECustomerKeyMD5?: S3SSECustomerKeyMD5;
        SSEKMSKeyId?: S3SSEKMSKeyId;
        CopySourceSSECustomerAlgorithm?: S3CopySourceSSECustomerAlgorithm;
        CopySourceSSECustomerKey?: S3CopySourceSSECustomerKey;
        CopySourceSSECustomerKeyMD5?: S3CopySourceSSECustomerKeyMD5;
        RequestPayer?: S3RequestPayer;
    }

    export interface S3CopyObjectResult {
        ETag?: S3ETag;
        LastModified?: S3LastModified;
    }

    export interface S3CopyPartResult {
        ETag?: S3ETag;
        LastModified?: S3LastModified;
    }

    export type S3CopySource = string; // pattern: "\/.+\/.+"
    export type S3CopySourceIfMatch = string;
    export type S3CopySourceIfModifiedSince = number;
    export type S3CopySourceIfNoneMatch = string;
    export type S3CopySourceIfUnmodifiedSince = number;
    export type S3CopySourceRange = string;
    export type S3CopySourceSSECustomerAlgorithm = string;
    export type S3CopySourceSSECustomerKey = string;
    export type S3CopySourceSSECustomerKeyMD5 = string;
    export type S3CopySourceVersionId = string;
    export interface S3CreateBucketConfiguration {
        LocationConstraint?: S3BucketLocationConstraint;
    }

    export interface S3CreateBucketOutput {
        Location?: S3Location;
    }

    export interface S3CreateBucketRequest {
        ACL?: S3BucketCannedACL;
        Bucket: S3BucketName;
        CreateBucketConfiguration?: S3CreateBucketConfiguration;
        GrantFullControl?: S3GrantFullControl;
        GrantRead?: S3GrantRead;
        GrantReadACP?: S3GrantReadACP;
        GrantWrite?: S3GrantWrite;
        GrantWriteACP?: S3GrantWriteACP;
    }

    export interface S3CreateMultipartUploadOutput {
        Bucket?: S3BucketName;
        Key?: S3ObjectKey;
        UploadId?: S3MultipartUploadId;
        ServerSideEncryption?: S3ServerSideEncryption;
        SSECustomerAlgorithm?: S3SSECustomerAlgorithm;
        SSECustomerKeyMD5?: S3SSECustomerKeyMD5;
        SSEKMSKeyId?: S3SSEKMSKeyId;
        RequestCharged?: S3RequestCharged;
    }

    export interface S3CreateMultipartUploadRequest {
        ACL?: S3ObjectCannedACL;
        Bucket: S3BucketName;
        CacheControl?: S3CacheControl;
        ContentDisposition?: S3ContentDisposition;
        ContentEncoding?: S3ContentEncoding;
        ContentLanguage?: S3ContentLanguage;
        ContentType?: S3ContentType;
        Expires?: S3Expires;
        GrantFullControl?: S3GrantFullControl;
        GrantRead?: S3GrantRead;
        GrantReadACP?: S3GrantReadACP;
        GrantWriteACP?: S3GrantWriteACP;
        Key: S3ObjectKey;
        Metadata?: S3Metadata;
        ServerSideEncryption?: S3ServerSideEncryption;
        StorageClass?: S3StorageClass;
        WebsiteRedirectLocation?: S3WebsiteRedirectLocation;
        SSECustomerAlgorithm?: S3SSECustomerAlgorithm;
        SSECustomerKey?: S3SSECustomerKey;
        SSECustomerKeyMD5?: S3SSECustomerKeyMD5;
        SSEKMSKeyId?: S3SSEKMSKeyId;
        RequestPayer?: S3RequestPayer;
    }

    export type S3CreationDate = number;
    export type S3Date = number;
    export type S3Days = number;
    export interface S3Delete {
        Objects: S3ObjectIdentifierList;
        Quiet?: S3Quiet;
    }

    export interface S3DeleteBucketCorsRequest {
        Bucket: S3BucketName;
    }

    export interface S3DeleteBucketLifecycleRequest {
        Bucket: S3BucketName;
    }

    export interface S3DeleteBucketPolicyRequest {
        Bucket: S3BucketName;
    }

    export interface S3DeleteBucketReplicationRequest {
        Bucket: S3BucketName;
    }

    export interface S3DeleteBucketRequest {
        Bucket: S3BucketName;
    }

    export interface S3DeleteBucketTaggingRequest {
        Bucket: S3BucketName;
    }

    export interface S3DeleteBucketWebsiteRequest {
        Bucket: S3BucketName;
    }

    export type S3DeleteMarker = boolean;
    export interface S3DeleteMarkerEntry {
        Owner?: S3Owner;
        Key?: S3ObjectKey;
        VersionId?: S3ObjectVersionId;
        IsLatest?: S3IsLatest;
        LastModified?: S3LastModified;
    }

    export type S3DeleteMarkerVersionId = string;
    export type S3DeleteMarkers = Array<S3DeleteMarkerEntry>;
    export interface S3DeleteObjectOutput {
        DeleteMarker?: S3DeleteMarker;
        VersionId?: S3ObjectVersionId;
        RequestCharged?: S3RequestCharged;
    }

    export interface S3DeleteObjectRequest {
        Bucket: S3BucketName;
        Key: S3ObjectKey;
        MFA?: S3MFA;
        VersionId?: S3ObjectVersionId;
        RequestPayer?: S3RequestPayer;
    }

    export interface S3DeleteObjectsOutput {
        Deleted?: S3DeletedObjects;
        RequestCharged?: S3RequestCharged;
        Errors?: S3Errors;
    }

    export interface S3DeleteObjectsRequest {
        Bucket: S3BucketName;
        Delete: S3Delete;
        MFA?: S3MFA;
        RequestPayer?: S3RequestPayer;
    }

    export interface S3DeletedObject {
        Key?: S3ObjectKey;
        VersionId?: S3ObjectVersionId;
        DeleteMarker?: S3DeleteMarker;
        DeleteMarkerVersionId?: S3DeleteMarkerVersionId;
    }

    export type S3DeletedObjects = Array<S3DeletedObject>;
    export type S3Delimiter = string;
    export interface S3Destination {
        Bucket: S3BucketName;
    }

    export type S3DisplayName = string;
    export type S3ETag = string;
    export type S3EmailAddress = string;
    export type S3EncodingType = string;
    export interface S3Error {
        Key?: S3ObjectKey;
        VersionId?: S3ObjectVersionId;
        Code?: S3Code;
        Message?: S3Message;
    }

    export interface S3ErrorDocument {
        Key: S3ObjectKey;
    }

    export type S3Errors = Array<S3Error>;
    export type S3Event = string;
    export type S3EventList = Array<S3Event>;
    export type S3Expiration = string;
    export type S3ExpirationStatus = string;
    export type S3Expires = number;
    export type S3ExposeHeader = string;
    export type S3ExposeHeaders = Array<S3ExposeHeader>;
    export interface S3GetBucketAclOutput {
        Owner?: S3Owner;
        Grants?: S3Grants;
    }

    export interface S3GetBucketAclRequest {
        Bucket: S3BucketName;
    }

    export interface S3GetBucketCorsOutput {
        CORSRules?: S3CORSRules;
    }

    export interface S3GetBucketCorsRequest {
        Bucket: S3BucketName;
    }

    export interface S3GetBucketLifecycleOutput {
        Rules?: S3Rules;
    }

    export interface S3GetBucketLifecycleRequest {
        Bucket: S3BucketName;
    }

    export interface S3GetBucketLocationOutput {
        LocationConstraint?: S3BucketLocationConstraint;
    }

    export interface S3GetBucketLocationRequest {
        Bucket: S3BucketName;
    }

    export interface S3GetBucketLoggingOutput {
        LoggingEnabled?: S3LoggingEnabled;
    }

    export interface S3GetBucketLoggingRequest {
        Bucket: S3BucketName;
    }

    export interface S3GetBucketNotificationConfigurationRequest {
        Bucket: S3BucketName;
    }

    export interface S3GetBucketPolicyOutput {
        Policy?: S3Policy;
    }

    export interface S3GetBucketPolicyRequest {
        Bucket: S3BucketName;
    }

    export interface S3GetBucketReplicationOutput {
        ReplicationConfiguration?: S3ReplicationConfiguration;
    }

    export interface S3GetBucketReplicationRequest {
        Bucket: S3BucketName;
    }

    export interface S3GetBucketRequestPaymentOutput {
        Payer?: S3Payer;
    }

    export interface S3GetBucketRequestPaymentRequest {
        Bucket: S3BucketName;
    }

    export interface S3GetBucketTaggingOutput {
        TagSet: S3TagSet;
    }

    export interface S3GetBucketTaggingRequest {
        Bucket: S3BucketName;
    }

    export interface S3GetBucketVersioningOutput {
        Status?: S3BucketVersioningStatus;
        MFADelete?: S3MFADeleteStatus;
    }

    export interface S3GetBucketVersioningRequest {
        Bucket: S3BucketName;
    }

    export interface S3GetBucketWebsiteOutput {
        RedirectAllRequestsTo?: S3RedirectAllRequestsTo;
        IndexDocument?: S3IndexDocument;
        ErrorDocument?: S3ErrorDocument;
        RoutingRules?: S3RoutingRules;
    }

    export interface S3GetBucketWebsiteRequest {
        Bucket: S3BucketName;
    }

    export interface S3GetObjectAclOutput {
        Owner?: S3Owner;
        Grants?: S3Grants;
        RequestCharged?: S3RequestCharged;
    }

    export interface S3GetObjectAclRequest {
        Bucket: S3BucketName;
        Key: S3ObjectKey;
        VersionId?: S3ObjectVersionId;
        RequestPayer?: S3RequestPayer;
    }

    export interface S3GetObjectOutput {
        Body?: S3Body;
        DeleteMarker?: S3DeleteMarker;
        AcceptRanges?: S3AcceptRanges;
        Expiration?: S3Expiration;
        Restore?: S3Restore;
        LastModified?: S3LastModified;
        ContentLength?: S3ContentLength;
        ETag?: S3ETag;
        MissingMeta?: S3MissingMeta;
        VersionId?: S3ObjectVersionId;
        CacheControl?: S3CacheControl;
        ContentDisposition?: S3ContentDisposition;
        ContentEncoding?: S3ContentEncoding;
        ContentLanguage?: S3ContentLanguage;
        ContentType?: S3ContentType;
        Expires?: S3Expires;
        WebsiteRedirectLocation?: S3WebsiteRedirectLocation;
        ServerSideEncryption?: S3ServerSideEncryption;
        Metadata?: S3Metadata;
        SSECustomerAlgorithm?: S3SSECustomerAlgorithm;
        SSECustomerKeyMD5?: S3SSECustomerKeyMD5;
        SSEKMSKeyId?: S3SSEKMSKeyId;
        RequestCharged?: S3RequestCharged;
        ReplicationStatus?: S3ReplicationStatus;
    }

    export interface S3GetObjectRequest {
        Bucket: S3BucketName;
        IfMatch?: S3IfMatch;
        IfModifiedSince?: S3IfModifiedSince;
        IfNoneMatch?: S3IfNoneMatch;
        IfUnmodifiedSince?: S3IfUnmodifiedSince;
        Key: S3ObjectKey;
        Range?: S3Range;
        ResponseCacheControl?: S3ResponseCacheControl;
        ResponseContentDisposition?: S3ResponseContentDisposition;
        ResponseContentEncoding?: S3ResponseContentEncoding;
        ResponseContentLanguage?: S3ResponseContentLanguage;
        ResponseContentType?: S3ResponseContentType;
        ResponseExpires?: S3ResponseExpires;
        VersionId?: S3ObjectVersionId;
        SSECustomerAlgorithm?: S3SSECustomerAlgorithm;
        SSECustomerKey?: S3SSECustomerKey;
        SSECustomerKeyMD5?: S3SSECustomerKeyMD5;
        RequestPayer?: S3RequestPayer;
    }

    export interface S3GetObjectTorrentOutput {
        Body?: S3Body;
        RequestCharged?: S3RequestCharged;
    }

    export interface S3GetObjectTorrentRequest {
        Bucket: S3BucketName;
        Key: S3ObjectKey;
        RequestPayer?: S3RequestPayer;
    }

    export interface S3Grant {
        Grantee?: S3Grantee;
        Permission?: S3Permission;
    }

    export type S3GrantFullControl = string;
    export type S3GrantRead = string;
    export type S3GrantReadACP = string;
    export type S3GrantWrite = string;
    export type S3GrantWriteACP = string;
    export interface S3Grantee {
        DisplayName?: S3DisplayName;
        EmailAddress?: S3EmailAddress;
        ID?: S3ID;
        Type: S3Type;
        URI?: S3URI;
    }

    export type S3Grants = Array<S3Grant>;
    export interface S3HeadBucketRequest {
        Bucket: S3BucketName;
    }

    export interface S3HeadObjectOutput {
        DeleteMarker?: S3DeleteMarker;
        AcceptRanges?: S3AcceptRanges;
        Expiration?: S3Expiration;
        Restore?: S3Restore;
        LastModified?: S3LastModified;
        ContentLength?: S3ContentLength;
        ETag?: S3ETag;
        MissingMeta?: S3MissingMeta;
        VersionId?: S3ObjectVersionId;
        CacheControl?: S3CacheControl;
        ContentDisposition?: S3ContentDisposition;
        ContentEncoding?: S3ContentEncoding;
        ContentLanguage?: S3ContentLanguage;
        ContentType?: S3ContentType;
        Expires?: S3Expires;
        WebsiteRedirectLocation?: S3WebsiteRedirectLocation;
        ServerSideEncryption?: S3ServerSideEncryption;
        Metadata?: S3Metadata;
        SSECustomerAlgorithm?: S3SSECustomerAlgorithm;
        SSECustomerKeyMD5?: S3SSECustomerKeyMD5;
        SSEKMSKeyId?: S3SSEKMSKeyId;
        RequestCharged?: S3RequestCharged;
        ReplicationStatus?: S3ReplicationStatus;
    }

    export interface S3HeadObjectRequest {
        Bucket: S3BucketName;
        IfMatch?: S3IfMatch;
        IfModifiedSince?: S3IfModifiedSince;
        IfNoneMatch?: S3IfNoneMatch;
        IfUnmodifiedSince?: S3IfUnmodifiedSince;
        Key: S3ObjectKey;
        Range?: S3Range;
        VersionId?: S3ObjectVersionId;
        SSECustomerAlgorithm?: S3SSECustomerAlgorithm;
        SSECustomerKey?: S3SSECustomerKey;
        SSECustomerKeyMD5?: S3SSECustomerKeyMD5;
        RequestPayer?: S3RequestPayer;
    }

    export type S3HostName = string;
    export type S3HttpErrorCodeReturnedEquals = string;
    export type S3HttpRedirectCode = string;
    export type S3ID = string;
    export type S3IfMatch = string;
    export type S3IfModifiedSince = number;
    export type S3IfNoneMatch = string;
    export type S3IfUnmodifiedSince = number;
    export interface S3IndexDocument {
        Suffix: S3Suffix;
    }

    export type S3Initiated = number;
    export interface S3Initiator {
        ID?: S3ID;
        DisplayName?: S3DisplayName;
    }

    export type S3IsLatest = boolean;
    export type S3IsTruncated = boolean;
    export type S3KeyMarker = string;
    export type S3KeyPrefixEquals = string;
    export type S3LambdaFunctionArn = string;
    export interface S3LambdaFunctionConfiguration {
        Id?: S3NotificationId;
        LambdaFunctionArn: S3LambdaFunctionArn;
        Events: S3EventList;
    }

    export type S3LambdaFunctionConfigurationList = Array<S3LambdaFunctionConfiguration>;
    export type S3LastModified = number;
    export interface S3LifecycleConfiguration {
        Rules: S3Rules;
    }

    export interface S3LifecycleExpiration {
        Date?: S3Date;
        Days?: S3Days;
    }

    export interface S3ListBucketsOutput {
        Buckets?: S3Buckets;
        Owner?: S3Owner;
    }

    export interface S3ListMultipartUploadsOutput {
        Bucket?: S3BucketName;
        KeyMarker?: S3KeyMarker;
        UploadIdMarker?: S3UploadIdMarker;
        NextKeyMarker?: S3NextKeyMarker;
        Prefix?: S3Prefix;
        Delimiter?: S3Delimiter;
        NextUploadIdMarker?: S3NextUploadIdMarker;
        MaxUploads?: S3MaxUploads;
        IsTruncated?: S3IsTruncated;
        Uploads?: S3MultipartUploadList;
        CommonPrefixes?: S3CommonPrefixList;
        EncodingType?: S3EncodingType;
    }

    export interface S3ListMultipartUploadsRequest {
        Bucket: S3BucketName;
        Delimiter?: S3Delimiter;
        EncodingType?: S3EncodingType;
        KeyMarker?: S3KeyMarker;
        MaxUploads?: S3MaxUploads;
        Prefix?: S3Prefix;
        UploadIdMarker?: S3UploadIdMarker;
    }

    export interface S3ListObjectVersionsOutput {
        IsTruncated?: S3IsTruncated;
        KeyMarker?: S3KeyMarker;
        VersionIdMarker?: S3VersionIdMarker;
        NextKeyMarker?: S3NextKeyMarker;
        NextVersionIdMarker?: S3NextVersionIdMarker;
        Versions?: S3ObjectVersionList;
        DeleteMarkers?: S3DeleteMarkers;
        Name?: S3BucketName;
        Prefix?: S3Prefix;
        Delimiter?: S3Delimiter;
        MaxKeys?: S3MaxKeys;
        CommonPrefixes?: S3CommonPrefixList;
        EncodingType?: S3EncodingType;
    }

    export interface S3ListObjectVersionsRequest {
        Bucket: S3BucketName;
        Delimiter?: S3Delimiter;
        EncodingType?: S3EncodingType;
        KeyMarker?: S3KeyMarker;
        MaxKeys?: S3MaxKeys;
        Prefix?: S3Prefix;
        VersionIdMarker?: S3VersionIdMarker;
    }

    export interface S3ListObjectsOutput {
        IsTruncated?: S3IsTruncated;
        Marker?: S3Marker;
        NextMarker?: S3NextMarker;
        Contents?: S3ObjectList;
        Name?: S3BucketName;
        Prefix?: S3Prefix;
        Delimiter?: S3Delimiter;
        MaxKeys?: S3MaxKeys;
        CommonPrefixes?: S3CommonPrefixList;
        EncodingType?: S3EncodingType;
    }

    export interface S3ListObjectsRequest {
        Bucket: S3BucketName;
        Delimiter?: S3Delimiter;
        EncodingType?: S3EncodingType;
        Marker?: S3Marker;
        MaxKeys?: S3MaxKeys;
        Prefix?: S3Prefix;
    }

    export interface S3ListPartsOutput {
        Bucket?: S3BucketName;
        Key?: S3ObjectKey;
        UploadId?: S3MultipartUploadId;
        PartNumberMarker?: S3PartNumberMarker;
        NextPartNumberMarker?: S3NextPartNumberMarker;
        MaxParts?: S3MaxParts;
        IsTruncated?: S3IsTruncated;
        Parts?: S3Parts;
        Initiator?: S3Initiator;
        Owner?: S3Owner;
        StorageClass?: S3StorageClass;
        RequestCharged?: S3RequestCharged;
    }

    export interface S3ListPartsRequest {
        Bucket: S3BucketName;
        Key: S3ObjectKey;
        MaxParts?: S3MaxParts;
        PartNumberMarker?: S3PartNumberMarker;
        UploadId: S3MultipartUploadId;
        RequestPayer?: S3RequestPayer;
    }

    export type S3Location = string;
    export interface S3LoggingEnabled {
        TargetBucket?: S3TargetBucket;
        TargetGrants?: S3TargetGrants;
        TargetPrefix?: S3TargetPrefix;
    }

    export type S3MFA = string;
    export type S3MFADelete = string;
    export type S3MFADeleteStatus = string;
    export type S3Marker = string;
    export type S3MaxAgeSeconds = number;
    export type S3MaxKeys = number;
    export type S3MaxParts = number;
    export type S3MaxUploads = number;
    export type S3Message = string;
    export type S3Metadata = any; // not really - it was 'map' instead - must fix this one
    export type S3MetadataDirective = string;
    export type S3MetadataKey = string;
    export type S3MetadataValue = string;
    export type S3MissingMeta = number;
    export interface S3MultipartUpload {
        UploadId?: S3MultipartUploadId;
        Key?: S3ObjectKey;
        Initiated?: S3Initiated;
        StorageClass?: S3StorageClass;
        Owner?: S3Owner;
        Initiator?: S3Initiator;
    }

    export type S3MultipartUploadId = string;
    export type S3MultipartUploadList = Array<S3MultipartUpload>;
    export type S3NextKeyMarker = string;
    export type S3NextMarker = string;
    export type S3NextPartNumberMarker = number;
    export type S3NextUploadIdMarker = string;
    export type S3NextVersionIdMarker = string;
    export interface S3NoSuchBucket {
    }

    export interface S3NoSuchKey {
    }

    export interface S3NoSuchUpload {
    }

    export interface S3NoncurrentVersionExpiration {
        NoncurrentDays?: S3Days;
    }

    export interface S3NoncurrentVersionTransition {
        NoncurrentDays?: S3Days;
        StorageClass?: S3TransitionStorageClass;
    }

    export interface S3NotificationConfiguration {
        TopicConfigurations?: S3TopicConfigurationList;
        QueueConfigurations?: S3QueueConfigurationList;
        LambdaFunctionConfigurations?: S3LambdaFunctionConfigurationList;
    }

    export interface S3NotificationConfigurationDeprecated {
        TopicConfiguration?: S3TopicConfigurationDeprecated;
        QueueConfiguration?: S3QueueConfigurationDeprecated;
        CloudFunctionConfiguration?: S3CloudFunctionConfiguration;
    }

    export type S3NotificationId = string;
    export interface S3Object {
        Key?: S3ObjectKey;
        LastModified?: S3LastModified;
        ETag?: S3ETag;
        Size?: S3Size;
        StorageClass?: S3ObjectStorageClass;
        Owner?: S3Owner;
    }

    export interface S3ObjectAlreadyInActiveTierError {
    }

    export type S3ObjectCannedACL = string;
    export interface S3ObjectIdentifier {
        Key: S3ObjectKey;
        VersionId?: S3ObjectVersionId;
    }

    export type S3ObjectIdentifierList = Array<S3ObjectIdentifier>;
    export type S3ObjectKey = string;
    export type S3ObjectList = Array<S3Object>;
    export interface S3ObjectNotInActiveTierError {
    }

    export type S3ObjectStorageClass = string;
    export interface S3ObjectVersion {
        ETag?: S3ETag;
        Size?: S3Size;
        StorageClass?: S3ObjectVersionStorageClass;
        Key?: S3ObjectKey;
        VersionId?: S3ObjectVersionId;
        IsLatest?: S3IsLatest;
        LastModified?: S3LastModified;
        Owner?: S3Owner;
    }

    export type S3ObjectVersionId = string;
    export type S3ObjectVersionList = Array<S3ObjectVersion>;
    export type S3ObjectVersionStorageClass = string;
    export interface S3Owner {
        DisplayName?: S3DisplayName;
        ID?: S3ID;
    }

    export interface S3Part {
        PartNumber?: S3PartNumber;
        LastModified?: S3LastModified;
        ETag?: S3ETag;
        Size?: S3Size;
    }

    export type S3PartNumber = number;
    export type S3PartNumberMarker = number;
    export type S3Parts = Array<S3Part>;
    export type S3Payer = string;
    export type S3Permission = string;
    export type S3Policy = string;
    export type S3Prefix = string;
    export type S3Protocol = string;
    export interface S3PutBucketAclRequest {
        ACL?: S3BucketCannedACL;
        AccessControlPolicy?: S3AccessControlPolicy;
        Bucket: S3BucketName;
        ContentMD5?: S3ContentMD5;
        GrantFullControl?: S3GrantFullControl;
        GrantRead?: S3GrantRead;
        GrantReadACP?: S3GrantReadACP;
        GrantWrite?: S3GrantWrite;
        GrantWriteACP?: S3GrantWriteACP;
    }

    export interface S3PutBucketCorsRequest {
        Bucket: S3BucketName;
        CORSConfiguration?: S3CORSConfiguration;
        ContentMD5?: S3ContentMD5;
    }

    export interface S3PutBucketLifecycleRequest {
        Bucket: S3BucketName;
        ContentMD5?: S3ContentMD5;
        LifecycleConfiguration?: S3LifecycleConfiguration;
    }

    export interface S3PutBucketLoggingRequest {
        Bucket: S3BucketName;
        BucketLoggingStatus: S3BucketLoggingStatus;
        ContentMD5?: S3ContentMD5;
    }

    export interface S3PutBucketNotificationConfigurationRequest {
        Bucket: S3BucketName;
        NotificationConfiguration: S3NotificationConfiguration;
    }

    export interface S3PutBucketNotificationRequest {
        Bucket: S3BucketName;
        ContentMD5?: S3ContentMD5;
        NotificationConfiguration: S3NotificationConfigurationDeprecated;
    }

    export interface S3PutBucketPolicyRequest {
        Bucket: S3BucketName;
        ContentMD5?: S3ContentMD5;
        Policy: S3Policy;
    }

    export interface S3PutBucketReplicationRequest {
        Bucket: S3BucketName;
        ContentMD5?: S3ContentMD5;
        ReplicationConfiguration: S3ReplicationConfiguration;
    }

    export interface S3PutBucketRequestPaymentRequest {
        Bucket: S3BucketName;
        ContentMD5?: S3ContentMD5;
        RequestPaymentConfiguration: S3RequestPaymentConfiguration;
    }

    export interface S3PutBucketTaggingRequest {
        Bucket: S3BucketName;
        ContentMD5?: S3ContentMD5;
        Tagging: S3Tagging;
    }

    export interface S3PutBucketVersioningRequest {
        Bucket: S3BucketName;
        ContentMD5?: S3ContentMD5;
        MFA?: S3MFA;
        VersioningConfiguration: S3VersioningConfiguration;
    }

    export interface S3PutBucketWebsiteRequest {
        Bucket: S3BucketName;
        ContentMD5?: S3ContentMD5;
        WebsiteConfiguration: S3WebsiteConfiguration;
    }

    export interface S3PutObjectAclOutput {
        RequestCharged?: S3RequestCharged;
    }

    export interface S3PutObjectAclRequest {
        ACL?: S3ObjectCannedACL;
        AccessControlPolicy?: S3AccessControlPolicy;
        Bucket: S3BucketName;
        ContentMD5?: S3ContentMD5;
        GrantFullControl?: S3GrantFullControl;
        GrantRead?: S3GrantRead;
        GrantReadACP?: S3GrantReadACP;
        GrantWrite?: S3GrantWrite;
        GrantWriteACP?: S3GrantWriteACP;
        Key: S3ObjectKey;
        RequestPayer?: S3RequestPayer;
    }

    export interface S3PutObjectOutput {
        Expiration?: S3Expiration;
        ETag?: S3ETag;
        ServerSideEncryption?: S3ServerSideEncryption;
        VersionId?: S3ObjectVersionId;
        SSECustomerAlgorithm?: S3SSECustomerAlgorithm;
        SSECustomerKeyMD5?: S3SSECustomerKeyMD5;
        SSEKMSKeyId?: S3SSEKMSKeyId;
        RequestCharged?: S3RequestCharged;
    }

    export interface S3PutObjectRequest {
        ACL?: S3ObjectCannedACL;
        Body?: S3Body;
        Bucket: S3BucketName;
        CacheControl?: S3CacheControl;
        ContentDisposition?: S3ContentDisposition;
        ContentEncoding?: S3ContentEncoding;
        ContentLanguage?: S3ContentLanguage;
        ContentLength?: S3ContentLength;
        ContentMD5?: S3ContentMD5;
        ContentType?: S3ContentType;
        Expires?: S3Expires;
        GrantFullControl?: S3GrantFullControl;
        GrantRead?: S3GrantRead;
        GrantReadACP?: S3GrantReadACP;
        GrantWriteACP?: S3GrantWriteACP;
        Key: S3ObjectKey;
        Metadata?: S3Metadata;
        ServerSideEncryption?: S3ServerSideEncryption;
        StorageClass?: S3StorageClass;
        WebsiteRedirectLocation?: S3WebsiteRedirectLocation;
        SSECustomerAlgorithm?: S3SSECustomerAlgorithm;
        SSECustomerKey?: S3SSECustomerKey;
        SSECustomerKeyMD5?: S3SSECustomerKeyMD5;
        SSEKMSKeyId?: S3SSEKMSKeyId;
        RequestPayer?: S3RequestPayer;
    }

    export type S3QueueArn = string;
    export interface S3QueueConfiguration {
        Id?: S3NotificationId;
        QueueArn: S3QueueArn;
        Events: S3EventList;
    }

    export interface S3QueueConfigurationDeprecated {
        Id?: S3NotificationId;
        Event?: S3Event;
        Events?: S3EventList;
        Queue?: S3QueueArn;
    }

    export type S3QueueConfigurationList = Array<S3QueueConfiguration>;
    export type S3Quiet = boolean;
    export type S3Range = string;
    export interface S3Redirect {
        HostName?: S3HostName;
        HttpRedirectCode?: S3HttpRedirectCode;
        Protocol?: S3Protocol;
        ReplaceKeyPrefixWith?: S3ReplaceKeyPrefixWith;
        ReplaceKeyWith?: S3ReplaceKeyWith;
    }

    export interface S3RedirectAllRequestsTo {
        HostName: S3HostName;
        Protocol?: S3Protocol;
    }

    export type S3ReplaceKeyPrefixWith = string;
    export type S3ReplaceKeyWith = string;
    export interface S3ReplicationConfiguration {
        Role: S3Role;
        Rules: S3ReplicationRules;
    }

    export interface S3ReplicationRule {
        ID?: S3ID;
        Prefix: S3Prefix;
        Status: S3ReplicationRuleStatus;
        Destination: S3Destination;
    }

    export type S3ReplicationRuleStatus = string;
    export type S3ReplicationRules = Array<S3ReplicationRule>;
    export type S3ReplicationStatus = string;
    export type S3RequestCharged = string;
    export type S3RequestPayer = string;
    export interface S3RequestPaymentConfiguration {
        Payer: S3Payer;
    }

    export type S3ResponseCacheControl = string;
    export type S3ResponseContentDisposition = string;
    export type S3ResponseContentEncoding = string;
    export type S3ResponseContentLanguage = string;
    export type S3ResponseContentType = string;
    export type S3ResponseExpires = number;
    export type S3Restore = string;
    export interface S3RestoreObjectOutput {
        RequestCharged?: S3RequestCharged;
    }

    export interface S3RestoreObjectRequest {
        Bucket: S3BucketName;
        Key: S3ObjectKey;
        VersionId?: S3ObjectVersionId;
        RestoreRequest?: S3RestoreRequest;
        RequestPayer?: S3RequestPayer;
    }

    export interface S3RestoreRequest {
        Days: S3Days;
    }

    export type S3Role = string;
    export interface S3RoutingRule {
        Condition?: S3Condition;
        Redirect: S3Redirect;
    }

    export type S3RoutingRules = Array<S3RoutingRule>;
    export interface S3Rule {
        Expiration?: S3LifecycleExpiration;
        ID?: S3ID;
        Prefix: S3Prefix;
        Status: S3ExpirationStatus;
        Transition?: S3Transition;
        NoncurrentVersionTransition?: S3NoncurrentVersionTransition;
        NoncurrentVersionExpiration?: S3NoncurrentVersionExpiration;
    }

    export type S3Rules = Array<S3Rule>;
    export type S3SSECustomerAlgorithm = string;
    export type S3SSECustomerKey = string;
    export type S3SSECustomerKeyMD5 = string;
    export type S3SSEKMSKeyId = string;
    export type S3ServerSideEncryption = string;
    export type S3Size = number;
    export type S3StorageClass = string;
    export type S3Suffix = string;
    export interface S3Tag {
        Key: S3ObjectKey;
        Value: S3Value;
    }

    export type S3TagSet = Array<S3Tag>;
    export interface S3Tagging {
        TagSet: S3TagSet;
    }

    export type S3TargetBucket = string;
    export interface S3TargetGrant {
        Grantee?: S3Grantee;
        Permission?: S3BucketLogsPermission;
    }

    export type S3TargetGrants = Array<S3TargetGrant>;
    export type S3TargetPrefix = string;
    export type S3TopicArn = string;
    export interface S3TopicConfiguration {
        Id?: S3NotificationId;
        TopicArn: S3TopicArn;
        Events: S3EventList;
    }

    export interface S3TopicConfigurationDeprecated {
        Id?: S3NotificationId;
        Events?: S3EventList;
        Event?: S3Event;
        Topic?: S3TopicArn;
    }

    export type S3TopicConfigurationList = Array<S3TopicConfiguration>;
    export interface S3Transition {
        Date?: S3Date;
        Days?: S3Days;
        StorageClass?: S3TransitionStorageClass;
    }

    export type S3TransitionStorageClass = string;
    export type S3Type = string;
    export type S3URI = string;
    export type S3UploadIdMarker = string;
    export interface S3UploadPartCopyOutput {
        CopySourceVersionId?: S3CopySourceVersionId;
        CopyPartResult?: S3CopyPartResult;
        ServerSideEncryption?: S3ServerSideEncryption;
        SSECustomerAlgorithm?: S3SSECustomerAlgorithm;
        SSECustomerKeyMD5?: S3SSECustomerKeyMD5;
        SSEKMSKeyId?: S3SSEKMSKeyId;
        RequestCharged?: S3RequestCharged;
    }

    export interface S3UploadPartCopyRequest {
        Bucket: S3BucketName;
        CopySource: S3CopySource;
        CopySourceIfMatch?: S3CopySourceIfMatch;
        CopySourceIfModifiedSince?: S3CopySourceIfModifiedSince;
        CopySourceIfNoneMatch?: S3CopySourceIfNoneMatch;
        CopySourceIfUnmodifiedSince?: S3CopySourceIfUnmodifiedSince;
        CopySourceRange?: S3CopySourceRange;
        Key: S3ObjectKey;
        PartNumber: S3PartNumber;
        UploadId: S3MultipartUploadId;
        SSECustomerAlgorithm?: S3SSECustomerAlgorithm;
        SSECustomerKey?: S3SSECustomerKey;
        SSECustomerKeyMD5?: S3SSECustomerKeyMD5;
        CopySourceSSECustomerAlgorithm?: S3CopySourceSSECustomerAlgorithm;
        CopySourceSSECustomerKey?: S3CopySourceSSECustomerKey;
        CopySourceSSECustomerKeyMD5?: S3CopySourceSSECustomerKeyMD5;
        RequestPayer?: S3RequestPayer;
    }

    export interface S3UploadPartOutput {
        ServerSideEncryption?: S3ServerSideEncryption;
        ETag?: S3ETag;
        SSECustomerAlgorithm?: S3SSECustomerAlgorithm;
        SSECustomerKeyMD5?: S3SSECustomerKeyMD5;
        SSEKMSKeyId?: S3SSEKMSKeyId;
        RequestCharged?: S3RequestCharged;
    }

    export interface S3UploadPartRequest {
        Body?: S3Body;
        Bucket: S3BucketName;
        ContentLength?: S3ContentLength;
        ContentMD5?: S3ContentMD5;
        Key: S3ObjectKey;
        PartNumber: S3PartNumber;
        UploadId: S3MultipartUploadId;
        SSECustomerAlgorithm?: S3SSECustomerAlgorithm;
        SSECustomerKey?: S3SSECustomerKey;
        SSECustomerKeyMD5?: S3SSECustomerKeyMD5;
        RequestPayer?: S3RequestPayer;
    }

    export type S3Value = string;
    export type S3VersionIdMarker = string;
    export interface S3VersioningConfiguration {
        MFADelete?: S3MFADelete;
        Status?: S3BucketVersioningStatus;
    }

    export interface S3WebsiteConfiguration {
        ErrorDocument?: S3ErrorDocument;
        IndexDocument?: S3IndexDocument;
        RedirectAllRequestsTo?: S3RedirectAllRequestsTo;
        RoutingRules?: S3RoutingRules;
    }

    export type S3WebsiteRedirectLocation = string;
}
