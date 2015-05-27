// DO NOT EDIT!
//
declare module "aws-sdk" {
    export class S3 {
      constructor(options?: any);
      abortMultipartUpload(params: AbortMultipartUploadRequest, callback: (err: NoSuchUpload|any, data: AbortMultipartUploadOutput|any) => void): void;
      completeMultipartUpload(params: CompleteMultipartUploadRequest, callback: (err: any, data: CompleteMultipartUploadOutput|any) => void): void;
      copyObject(params: CopyObjectRequest, callback: (err: ObjectNotInActiveTierError|any, data: CopyObjectOutput|any) => void): void;
      createBucket(params: CreateBucketRequest, callback: (err: BucketAlreadyExists|any, data: CreateBucketOutput|any) => void): void;
      createMultipartUpload(params: CreateMultipartUploadRequest, callback: (err: any, data: CreateMultipartUploadOutput|any) => void): void;
      deleteBucket(params: DeleteBucketRequest, callback: (err: any, data: any) => void): void;
      deleteBucketCors(params: DeleteBucketCorsRequest, callback: (err: any, data: any) => void): void;
      deleteBucketLifecycle(params: DeleteBucketLifecycleRequest, callback: (err: any, data: any) => void): void;
      deleteBucketPolicy(params: DeleteBucketPolicyRequest, callback: (err: any, data: any) => void): void;
      deleteBucketReplication(params: DeleteBucketReplicationRequest, callback: (err: any, data: any) => void): void;
      deleteBucketTagging(params: DeleteBucketTaggingRequest, callback: (err: any, data: any) => void): void;
      deleteBucketWebsite(params: DeleteBucketWebsiteRequest, callback: (err: any, data: any) => void): void;
      deleteObject(params: DeleteObjectRequest, callback: (err: any, data: DeleteObjectOutput|any) => void): void;
      deleteObjects(params: DeleteObjectsRequest, callback: (err: any, data: DeleteObjectsOutput|any) => void): void;
      getBucketAcl(params: GetBucketAclRequest, callback: (err: any, data: GetBucketAclOutput|any) => void): void;
      getBucketCors(params: GetBucketCorsRequest, callback: (err: any, data: GetBucketCorsOutput|any) => void): void;
      getBucketLifecycle(params: GetBucketLifecycleRequest, callback: (err: any, data: GetBucketLifecycleOutput|any) => void): void;
      getBucketLocation(params: GetBucketLocationRequest, callback: (err: any, data: GetBucketLocationOutput|any) => void): void;
      getBucketLogging(params: GetBucketLoggingRequest, callback: (err: any, data: GetBucketLoggingOutput|any) => void): void;
      getBucketNotification(params: GetBucketNotificationConfigurationRequest, callback: (err: any, data: NotificationConfigurationDeprecated|any) => void): void;
      getBucketNotificationConfiguration(params: GetBucketNotificationConfigurationRequest, callback: (err: any, data: NotificationConfiguration|any) => void): void;
      getBucketPolicy(params: GetBucketPolicyRequest, callback: (err: any, data: GetBucketPolicyOutput|any) => void): void;
      getBucketReplication(params: GetBucketReplicationRequest, callback: (err: any, data: GetBucketReplicationOutput|any) => void): void;
      getBucketRequestPayment(params: GetBucketRequestPaymentRequest, callback: (err: any, data: GetBucketRequestPaymentOutput|any) => void): void;
      getBucketTagging(params: GetBucketTaggingRequest, callback: (err: any, data: GetBucketTaggingOutput|any) => void): void;
      getBucketVersioning(params: GetBucketVersioningRequest, callback: (err: any, data: GetBucketVersioningOutput|any) => void): void;
      getBucketWebsite(params: GetBucketWebsiteRequest, callback: (err: any, data: GetBucketWebsiteOutput|any) => void): void;
      getObject(params: GetObjectRequest, callback: (err: NoSuchKey|any, data: GetObjectOutput|any) => void): void;
      getObjectAcl(params: GetObjectAclRequest, callback: (err: NoSuchKey|any, data: GetObjectAclOutput|any) => void): void;
      getObjectTorrent(params: GetObjectTorrentRequest, callback: (err: any, data: GetObjectTorrentOutput|any) => void): void;
      headBucket(params: HeadBucketRequest, callback: (err: NoSuchBucket|any, data: any) => void): void;
      headObject(params: HeadObjectRequest, callback: (err: NoSuchKey|any, data: HeadObjectOutput|any) => void): void;
      listBuckets(callback: (err: any, data: ListBucketsOutput|any) => void): void;
      listMultipartUploads(params: ListMultipartUploadsRequest, callback: (err: any, data: ListMultipartUploadsOutput|any) => void): void;
      listObjectVersions(params: ListObjectVersionsRequest, callback: (err: any, data: ListObjectVersionsOutput|any) => void): void;
      listObjects(params: ListObjectsRequest, callback: (err: NoSuchBucket|any, data: ListObjectsOutput|any) => void): void;
      listParts(params: ListPartsRequest, callback: (err: any, data: ListPartsOutput|any) => void): void;
      putBucketAcl(params: PutBucketAclRequest, callback: (err: any, data: any) => void): void;
      putBucketCors(params: PutBucketCorsRequest, callback: (err: any, data: any) => void): void;
      putBucketLifecycle(params: PutBucketLifecycleRequest, callback: (err: any, data: any) => void): void;
      putBucketLogging(params: PutBucketLoggingRequest, callback: (err: any, data: any) => void): void;
      putBucketNotification(params: PutBucketNotificationRequest, callback: (err: any, data: any) => void): void;
      putBucketNotificationConfiguration(params: PutBucketNotificationConfigurationRequest, callback: (err: any, data: any) => void): void;
      putBucketPolicy(params: PutBucketPolicyRequest, callback: (err: any, data: any) => void): void;
      putBucketReplication(params: PutBucketReplicationRequest, callback: (err: any, data: any) => void): void;
      putBucketRequestPayment(params: PutBucketRequestPaymentRequest, callback: (err: any, data: any) => void): void;
      putBucketTagging(params: PutBucketTaggingRequest, callback: (err: any, data: any) => void): void;
      putBucketVersioning(params: PutBucketVersioningRequest, callback: (err: any, data: any) => void): void;
      putBucketWebsite(params: PutBucketWebsiteRequest, callback: (err: any, data: any) => void): void;
      putObject(params: PutObjectRequest, callback: (err: any, data: PutObjectOutput|any) => void): void;
      putObjectAcl(params: PutObjectAclRequest, callback: (err: NoSuchKey|any, data: PutObjectAclOutput|any) => void): void;
      restoreObject(params: RestoreObjectRequest, callback: (err: ObjectAlreadyInActiveTierError|any, data: RestoreObjectOutput|any) => void): void;
      uploadPart(params: UploadPartRequest, callback: (err: any, data: UploadPartOutput|any) => void): void;
      uploadPartCopy(params: UploadPartCopyRequest, callback: (err: any, data: UploadPartCopyOutput|any) => void): void;
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


    export type AcceptRanges = string;

    export interface AccessControlPolicy {
      Grants?: Grants;
      Owner?: Owner;
    }


    export type AllowedHeader = string;

    export type AllowedHeaders = Array<AllowedHeader>;

    export type AllowedMethod = string;

    export type AllowedMethods = Array<AllowedMethod>;

    export type AllowedOrigin = string;

    export type AllowedOrigins = Array<AllowedOrigin>;

    export type Body = any; // not really - it was 'blob' instead - must fix this one

    export interface Bucket {
      Name?: BucketName;
      CreationDate?: CreationDate;
    }


    export interface BucketAlreadyExists {
    }


    export type BucketCannedACL = string;

    export type BucketLocationConstraint = string;

    export interface BucketLoggingStatus {
      LoggingEnabled?: LoggingEnabled;
    }


    export type BucketLogsPermission = string;

    export type BucketName = string;

    export type BucketVersioningStatus = string;

    export type Buckets = Array<Bucket>;

    export interface CORSConfiguration {
      CORSRules?: CORSRules;
    }


    export interface CORSRule {
      AllowedHeaders?: AllowedHeaders;
      AllowedMethods?: AllowedMethods;
      AllowedOrigins?: AllowedOrigins;
      ExposeHeaders?: ExposeHeaders;
      MaxAgeSeconds?: MaxAgeSeconds;
    }


    export type CORSRules = Array<CORSRule>;

    export type CacheControl = string;

    export type CloudFunction = string;

    export interface CloudFunctionConfiguration {
      Id?: NotificationId;
      Event?: Event;
      Events?: EventList;
      CloudFunction?: CloudFunction;
      InvocationRole?: CloudFunctionInvocationRole;
    }


    export type CloudFunctionInvocationRole = string;

    export type Code = string;

    export interface CommonPrefix {
      Prefix?: Prefix;
    }


    export type CommonPrefixList = Array<CommonPrefix>;

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


    export type CompletedPartList = Array<CompletedPart>;

    export interface Condition {
      HttpErrorCodeReturnedEquals?: HttpErrorCodeReturnedEquals;
      KeyPrefixEquals?: KeyPrefixEquals;
    }


    export type ContentDisposition = string;

    export type ContentEncoding = string;

    export type ContentLanguage = string;

    export type ContentLength = number;

    export type ContentMD5 = string;

    export type ContentType = string;

    export interface CopyObjectOutput {
      CopyObjectResult?: CopyObjectResult;
      Expiration?: Expiration;
      CopySourceVersionId?: CopySourceVersionId;
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


    export type CopySource = string; // pattern: "\/.+\/.+"

    export type CopySourceIfMatch = string;

    export type CopySourceIfModifiedSince = number;

    export type CopySourceIfNoneMatch = string;

    export type CopySourceIfUnmodifiedSince = number;

    export type CopySourceRange = string;

    export type CopySourceSSECustomerAlgorithm = string;

    export type CopySourceSSECustomerKey = string;

    export type CopySourceSSECustomerKeyMD5 = string;

    export type CopySourceVersionId = string;

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


    export type CreationDate = number;

    export type Date = number;

    export type Days = number;

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


    export type DeleteMarker = boolean;

    export interface DeleteMarkerEntry {
      Owner?: Owner;
      Key?: ObjectKey;
      VersionId?: ObjectVersionId;
      IsLatest?: IsLatest;
      LastModified?: LastModified;
    }


    export type DeleteMarkerVersionId = string;

    export type DeleteMarkers = Array<DeleteMarkerEntry>;

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


    export type DeletedObjects = Array<DeletedObject>;

    export type Delimiter = string;

    export interface Destination {
      Bucket: BucketName;
    }


    export type DisplayName = string;

    export type ETag = string;

    export type EmailAddress = string;

    export type EncodingType = string;

    export interface Error {
      Key?: ObjectKey;
      VersionId?: ObjectVersionId;
      Code?: Code;
      Message?: Message;
    }


    export interface ErrorDocument {
      Key: ObjectKey;
    }


    export type Errors = Array<Error>;

    export type Event = string;

    export type EventList = Array<Event>;

    export type Expiration = string;

    export type ExpirationStatus = string;

    export type Expires = number;

    export type ExposeHeader = string;

    export type ExposeHeaders = Array<ExposeHeader>;

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
      ContentType?: ContentType;
      Expires?: Expires;
      WebsiteRedirectLocation?: WebsiteRedirectLocation;
      ServerSideEncryption?: ServerSideEncryption;
      Metadata?: Metadata;
      SSECustomerAlgorithm?: SSECustomerAlgorithm;
      SSECustomerKeyMD5?: SSECustomerKeyMD5;
      SSEKMSKeyId?: SSEKMSKeyId;
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


    export type GrantFullControl = string;

    export type GrantRead = string;

    export type GrantReadACP = string;

    export type GrantWrite = string;

    export type GrantWriteACP = string;

    export interface Grantee {
      DisplayName?: DisplayName;
      EmailAddress?: EmailAddress;
      ID?: ID;
      Type: Type;
      URI?: URI;
    }


    export type Grants = Array<Grant>;

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


    export type HostName = string;

    export type HttpErrorCodeReturnedEquals = string;

    export type HttpRedirectCode = string;

    export type ID = string;

    export type IfMatch = string;

    export type IfModifiedSince = number;

    export type IfNoneMatch = string;

    export type IfUnmodifiedSince = number;

    export interface IndexDocument {
      Suffix: Suffix;
    }


    export type Initiated = number;

    export interface Initiator {
      ID?: ID;
      DisplayName?: DisplayName;
    }


    export type IsLatest = boolean;

    export type IsTruncated = boolean;

    export type KeyMarker = string;

    export type KeyPrefixEquals = string;

    export type LambdaFunctionArn = string;

    export interface LambdaFunctionConfiguration {
      Id?: NotificationId;
      LambdaFunctionArn: LambdaFunctionArn;
      Events: EventList;
    }


    export type LambdaFunctionConfigurationList = Array<LambdaFunctionConfiguration>;

    export type LastModified = number;

    export interface LifecycleConfiguration {
      Rules: Rules;
    }


    export interface LifecycleExpiration {
      Date?: Date;
      Days?: Days;
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


    export type Location = string;

    export interface LoggingEnabled {
      TargetBucket?: TargetBucket;
      TargetGrants?: TargetGrants;
      TargetPrefix?: TargetPrefix;
    }


    export type MFA = string;

    export type MFADelete = string;

    export type MFADeleteStatus = string;

    export type Marker = string;

    export type MaxAgeSeconds = number;

    export type MaxKeys = number;

    export type MaxParts = number;

    export type MaxUploads = number;

    export type Message = string;

    export type Metadata = any; // not really - it was 'map' instead - must fix this one

    export type MetadataDirective = string;

    export type MetadataKey = string;

    export type MetadataValue = string;

    export type MissingMeta = number;

    export interface MultipartUpload {
      UploadId?: MultipartUploadId;
      Key?: ObjectKey;
      Initiated?: Initiated;
      StorageClass?: StorageClass;
      Owner?: Owner;
      Initiator?: Initiator;
    }


    export type MultipartUploadId = string;

    export type MultipartUploadList = Array<MultipartUpload>;

    export type NextKeyMarker = string;

    export type NextMarker = string;

    export type NextPartNumberMarker = number;

    export type NextUploadIdMarker = string;

    export type NextVersionIdMarker = string;

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


    export type NotificationId = string;

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


    export type ObjectCannedACL = string;

    export interface ObjectIdentifier {
      Key: ObjectKey;
      VersionId?: ObjectVersionId;
    }


    export type ObjectIdentifierList = Array<ObjectIdentifier>;

    export type ObjectKey = string;

    export type ObjectList = Array<Object>;

    export interface ObjectNotInActiveTierError {
    }


    export type ObjectStorageClass = string;

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


    export type ObjectVersionId = string;

    export type ObjectVersionList = Array<ObjectVersion>;

    export type ObjectVersionStorageClass = string;

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


    export type PartNumber = number;

    export type PartNumberMarker = number;

    export type Parts = Array<Part>;

    export type Payer = string;

    export type Permission = string;

    export type Policy = string;

    export type Prefix = string;

    export type Protocol = string;

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
      CORSConfiguration?: CORSConfiguration;
      ContentMD5?: ContentMD5;
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


    export type QueueArn = string;

    export interface QueueConfiguration {
      Id?: NotificationId;
      QueueArn: QueueArn;
      Events: EventList;
    }


    export interface QueueConfigurationDeprecated {
      Id?: NotificationId;
      Event?: Event;
      Events?: EventList;
      Queue?: QueueArn;
    }


    export type QueueConfigurationList = Array<QueueConfiguration>;

    export type Quiet = boolean;

    export type Range = string;

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


    export type ReplaceKeyPrefixWith = string;

    export type ReplaceKeyWith = string;

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


    export type ReplicationRuleStatus = string;

    export type ReplicationRules = Array<ReplicationRule>;

    export type ReplicationStatus = string;

    export type RequestCharged = string;

    export type RequestPayer = string;

    export interface RequestPaymentConfiguration {
      Payer: Payer;
    }


    export type ResponseCacheControl = string;

    export type ResponseContentDisposition = string;

    export type ResponseContentEncoding = string;

    export type ResponseContentLanguage = string;

    export type ResponseContentType = string;

    export type ResponseExpires = number;

    export type Restore = string;

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


    export type Role = string;

    export interface RoutingRule {
      Condition?: Condition;
      Redirect: Redirect;
    }


    export type RoutingRules = Array<RoutingRule>;

    export interface Rule {
      Expiration?: LifecycleExpiration;
      ID?: ID;
      Prefix: Prefix;
      Status: ExpirationStatus;
      Transition?: Transition;
      NoncurrentVersionTransition?: NoncurrentVersionTransition;
      NoncurrentVersionExpiration?: NoncurrentVersionExpiration;
    }


    export type Rules = Array<Rule>;

    export type SSECustomerAlgorithm = string;

    export type SSECustomerKey = string;

    export type SSECustomerKeyMD5 = string;

    export type SSEKMSKeyId = string;

    export type ServerSideEncryption = string;

    export type Size = number;

    export type StorageClass = string;

    export type Suffix = string;

    export interface Tag {
      Key: ObjectKey;
      Value: Value;
    }


    export type TagSet = Array<Tag>;

    export interface Tagging {
      TagSet: TagSet;
    }


    export type TargetBucket = string;

    export interface TargetGrant {
      Grantee?: Grantee;
      Permission?: BucketLogsPermission;
    }


    export type TargetGrants = Array<TargetGrant>;

    export type TargetPrefix = string;

    export type TopicArn = string;

    export interface TopicConfiguration {
      Id?: NotificationId;
      TopicArn: TopicArn;
      Events: EventList;
    }


    export interface TopicConfigurationDeprecated {
      Id?: NotificationId;
      Events?: EventList;
      Event?: Event;
      Topic?: TopicArn;
    }


    export type TopicConfigurationList = Array<TopicConfiguration>;

    export interface Transition {
      Date?: Date;
      Days?: Days;
      StorageClass?: TransitionStorageClass;
    }


    export type TransitionStorageClass = string;

    export type Type = string;

    export type URI = string;

    export type UploadIdMarker = string;

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


    export type Value = string;

    export type VersionIdMarker = string;

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


    export type WebsiteRedirectLocation = string;

}
