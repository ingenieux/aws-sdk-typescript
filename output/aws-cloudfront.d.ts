// DO NOT EDIT!
//
declare module "aws-sdk" {
    export class CloudFront {
      constructor(options?: any);
      createCloudFrontOriginAccessIdentity(params: CreateCloudFrontOriginAccessIdentityRequest, callback: (err: CloudFrontOriginAccessIdentityAlreadyExists|MissingBody|TooManyCloudFrontOriginAccessIdentities|InvalidArgument|InconsistentQuantities|any, data: CreateCloudFrontOriginAccessIdentityResult|any) => void): void;
      createDistribution(params: CreateDistributionRequest, callback: (err: CNAMEAlreadyExists|DistributionAlreadyExists|InvalidOrigin|InvalidOriginAccessIdentity|AccessDenied|TooManyTrustedSigners|TrustedSignerDoesNotExist|InvalidViewerCertificate|MissingBody|TooManyDistributionCNAMEs|TooManyDistributions|InvalidDefaultRootObject|InvalidRelativePath|InvalidErrorCode|InvalidResponseCode|InvalidArgument|InvalidRequiredProtocol|NoSuchOrigin|TooManyOrigins|TooManyCacheBehaviors|TooManyCookieNamesInWhiteList|InvalidForwardCookies|TooManyHeadersInForwardedValues|InvalidHeadersForS3Origin|InconsistentQuantities|TooManyCertificates|InvalidLocationCode|InvalidGeoRestrictionParameter|InvalidProtocolSettings|any, data: CreateDistributionResult|any) => void): void;
      createInvalidation(params: CreateInvalidationRequest, callback: (err: AccessDenied|MissingBody|InvalidArgument|NoSuchDistribution|BatchTooLarge|TooManyInvalidationsInProgress|InconsistentQuantities|any, data: CreateInvalidationResult|any) => void): void;
      createStreamingDistribution(params: CreateStreamingDistributionRequest, callback: (err: CNAMEAlreadyExists|StreamingDistributionAlreadyExists|InvalidOrigin|InvalidOriginAccessIdentity|AccessDenied|TooManyTrustedSigners|TrustedSignerDoesNotExist|MissingBody|TooManyStreamingDistributionCNAMEs|TooManyStreamingDistributions|InvalidArgument|InconsistentQuantities|any, data: CreateStreamingDistributionResult|any) => void): void;
      deleteCloudFrontOriginAccessIdentity(params: DeleteCloudFrontOriginAccessIdentityRequest, callback: (err: AccessDenied|InvalidIfMatchVersion|NoSuchCloudFrontOriginAccessIdentity|PreconditionFailed|CloudFrontOriginAccessIdentityInUse|any, data: any) => void): void;
      deleteDistribution(params: DeleteDistributionRequest, callback: (err: AccessDenied|DistributionNotDisabled|InvalidIfMatchVersion|NoSuchDistribution|PreconditionFailed|any, data: any) => void): void;
      deleteStreamingDistribution(params: DeleteStreamingDistributionRequest, callback: (err: AccessDenied|StreamingDistributionNotDisabled|InvalidIfMatchVersion|NoSuchStreamingDistribution|PreconditionFailed|any, data: any) => void): void;
      getCloudFrontOriginAccessIdentity(params: GetCloudFrontOriginAccessIdentityRequest, callback: (err: NoSuchCloudFrontOriginAccessIdentity|AccessDenied|any, data: GetCloudFrontOriginAccessIdentityResult|any) => void): void;
      getCloudFrontOriginAccessIdentityConfig(params: GetCloudFrontOriginAccessIdentityConfigRequest, callback: (err: NoSuchCloudFrontOriginAccessIdentity|AccessDenied|any, data: GetCloudFrontOriginAccessIdentityConfigResult|any) => void): void;
      getDistribution(params: GetDistributionRequest, callback: (err: NoSuchDistribution|AccessDenied|any, data: GetDistributionResult|any) => void): void;
      getDistributionConfig(params: GetDistributionConfigRequest, callback: (err: NoSuchDistribution|AccessDenied|any, data: GetDistributionConfigResult|any) => void): void;
      getInvalidation(params: GetInvalidationRequest, callback: (err: NoSuchInvalidation|NoSuchDistribution|AccessDenied|any, data: GetInvalidationResult|any) => void): void;
      getStreamingDistribution(params: GetStreamingDistributionRequest, callback: (err: NoSuchStreamingDistribution|AccessDenied|any, data: GetStreamingDistributionResult|any) => void): void;
      getStreamingDistributionConfig(params: GetStreamingDistributionConfigRequest, callback: (err: NoSuchStreamingDistribution|AccessDenied|any, data: GetStreamingDistributionConfigResult|any) => void): void;
      listCloudFrontOriginAccessIdentities(params: ListCloudFrontOriginAccessIdentitiesRequest, callback: (err: InvalidArgument|any, data: ListCloudFrontOriginAccessIdentitiesResult|any) => void): void;
      listDistributions(params: ListDistributionsRequest, callback: (err: InvalidArgument|any, data: ListDistributionsResult|any) => void): void;
      listInvalidations(params: ListInvalidationsRequest, callback: (err: InvalidArgument|NoSuchDistribution|AccessDenied|any, data: ListInvalidationsResult|any) => void): void;
      listStreamingDistributions(params: ListStreamingDistributionsRequest, callback: (err: InvalidArgument|any, data: ListStreamingDistributionsResult|any) => void): void;
      updateCloudFrontOriginAccessIdentity(params: UpdateCloudFrontOriginAccessIdentityRequest, callback: (err: AccessDenied|IllegalUpdate|InvalidIfMatchVersion|MissingBody|NoSuchCloudFrontOriginAccessIdentity|PreconditionFailed|InvalidArgument|InconsistentQuantities|any, data: UpdateCloudFrontOriginAccessIdentityResult|any) => void): void;
      updateDistribution(params: UpdateDistributionRequest, callback: (err: AccessDenied|CNAMEAlreadyExists|IllegalUpdate|InvalidIfMatchVersion|MissingBody|NoSuchDistribution|PreconditionFailed|TooManyDistributionCNAMEs|InvalidDefaultRootObject|InvalidRelativePath|InvalidErrorCode|InvalidResponseCode|InvalidArgument|InvalidOriginAccessIdentity|TooManyTrustedSigners|TrustedSignerDoesNotExist|InvalidViewerCertificate|InvalidRequiredProtocol|NoSuchOrigin|TooManyOrigins|TooManyCacheBehaviors|TooManyCookieNamesInWhiteList|InvalidForwardCookies|TooManyHeadersInForwardedValues|InvalidHeadersForS3Origin|InconsistentQuantities|TooManyCertificates|InvalidLocationCode|InvalidGeoRestrictionParameter|any, data: UpdateDistributionResult|any) => void): void;
      updateStreamingDistribution(params: UpdateStreamingDistributionRequest, callback: (err: AccessDenied|CNAMEAlreadyExists|IllegalUpdate|InvalidIfMatchVersion|MissingBody|NoSuchStreamingDistribution|PreconditionFailed|TooManyStreamingDistributionCNAMEs|InvalidArgument|InvalidOriginAccessIdentity|TooManyTrustedSigners|TrustedSignerDoesNotExist|InconsistentQuantities|any, data: UpdateStreamingDistributionResult|any) => void): void;
    }

    export interface AccessDenied {
      Message?: string;
    }


    export interface ActiveTrustedSigners {
      Enabled: boolean;
      Quantity: integer;
      Items?: SignerList;
    }


    export type AliasList = Array<string>;

    export interface Aliases {
      Quantity: integer;
      Items?: AliasList;
    }


    export interface AllowedMethods {
      Quantity: integer;
      Items: MethodsList;
      CachedMethods?: CachedMethods;
    }


    export type AwsAccountNumberList = Array<string>;

    export interface BatchTooLarge {
      Message?: string;
    }


    export interface CNAMEAlreadyExists {
      Message?: string;
    }


    export interface CacheBehavior {
      PathPattern: string;
      TargetOriginId: string;
      ForwardedValues: ForwardedValues;
      TrustedSigners: TrustedSigners;
      ViewerProtocolPolicy: ViewerProtocolPolicy;
      MinTTL: long;
      AllowedMethods?: AllowedMethods;
      SmoothStreaming?: boolean;
    }


    export type CacheBehaviorList = Array<CacheBehavior>;

    export interface CacheBehaviors {
      Quantity: integer;
      Items?: CacheBehaviorList;
    }


    export interface CachedMethods {
      Quantity: integer;
      Items: MethodsList;
    }


    export interface CloudFrontOriginAccessIdentity {
      Id: string;
      S3CanonicalUserId: string;
      CloudFrontOriginAccessIdentityConfig?: CloudFrontOriginAccessIdentityConfig;
    }


    export interface CloudFrontOriginAccessIdentityAlreadyExists {
      Message?: string;
    }


    export interface CloudFrontOriginAccessIdentityConfig {
      CallerReference: string;
      Comment: string;
    }


    export interface CloudFrontOriginAccessIdentityInUse {
      Message?: string;
    }


    export interface CloudFrontOriginAccessIdentityList {
      Marker: string;
      NextMarker?: string;
      MaxItems: integer;
      IsTruncated: boolean;
      Quantity: integer;
      Items?: CloudFrontOriginAccessIdentitySummaryList;
    }


    export interface CloudFrontOriginAccessIdentitySummary {
      Id: string;
      S3CanonicalUserId: string;
      Comment: string;
    }


    export type CloudFrontOriginAccessIdentitySummaryList = Array<CloudFrontOriginAccessIdentitySummary>;

    export type CookieNameList = Array<string>;

    export interface CookieNames {
      Quantity: integer;
      Items?: CookieNameList;
    }


    export interface CookiePreference {
      Forward: ItemSelection;
      WhitelistedNames?: CookieNames;
    }


    export interface CreateCloudFrontOriginAccessIdentityRequest {
      CloudFrontOriginAccessIdentityConfig: CloudFrontOriginAccessIdentityConfig;
    }


    export interface CreateCloudFrontOriginAccessIdentityResult {
      CloudFrontOriginAccessIdentity?: CloudFrontOriginAccessIdentity;
      Location?: string;
      ETag?: string;
    }


    export interface CreateDistributionRequest {
      DistributionConfig: DistributionConfig;
    }


    export interface CreateDistributionResult {
      Distribution?: Distribution;
      Location?: string;
      ETag?: string;
    }


    export interface CreateInvalidationRequest {
      DistributionId: string;
      InvalidationBatch: InvalidationBatch;
    }


    export interface CreateInvalidationResult {
      Location?: string;
      Invalidation?: Invalidation;
    }


    export interface CreateStreamingDistributionRequest {
      StreamingDistributionConfig: StreamingDistributionConfig;
    }


    export interface CreateStreamingDistributionResult {
      StreamingDistribution?: StreamingDistribution;
      Location?: string;
      ETag?: string;
    }


    export interface CustomErrorResponse {
      ErrorCode: integer;
      ResponsePagePath?: string;
      ResponseCode?: string;
      ErrorCachingMinTTL?: long;
    }


    export type CustomErrorResponseList = Array<CustomErrorResponse>;

    export interface CustomErrorResponses {
      Quantity: integer;
      Items?: CustomErrorResponseList;
    }


    export interface CustomOriginConfig {
      HTTPPort: integer;
      HTTPSPort: integer;
      OriginProtocolPolicy: OriginProtocolPolicy;
    }


    export interface DefaultCacheBehavior {
      TargetOriginId: string;
      ForwardedValues: ForwardedValues;
      TrustedSigners: TrustedSigners;
      ViewerProtocolPolicy: ViewerProtocolPolicy;
      MinTTL: long;
      AllowedMethods?: AllowedMethods;
      SmoothStreaming?: boolean;
    }


    export interface DeleteCloudFrontOriginAccessIdentityRequest {
      Id: string;
      IfMatch?: string;
    }


    export interface DeleteDistributionRequest {
      Id: string;
      IfMatch?: string;
    }


    export interface DeleteStreamingDistributionRequest {
      Id: string;
      IfMatch?: string;
    }


    export interface Distribution {
      Id: string;
      Status: string;
      LastModifiedTime: timestamp;
      InProgressInvalidationBatches: integer;
      DomainName: string;
      ActiveTrustedSigners: ActiveTrustedSigners;
      DistributionConfig: DistributionConfig;
    }


    export interface DistributionAlreadyExists {
      Message?: string;
    }


    export interface DistributionConfig {
      CallerReference: string;
      Aliases?: Aliases;
      DefaultRootObject?: string;
      Origins: Origins;
      DefaultCacheBehavior: DefaultCacheBehavior;
      CacheBehaviors?: CacheBehaviors;
      CustomErrorResponses?: CustomErrorResponses;
      Comment: string;
      Logging?: LoggingConfig;
      PriceClass?: PriceClass;
      Enabled: boolean;
      ViewerCertificate?: ViewerCertificate;
      Restrictions?: Restrictions;
    }


    export interface DistributionList {
      Marker: string;
      NextMarker?: string;
      MaxItems: integer;
      IsTruncated: boolean;
      Quantity: integer;
      Items?: DistributionSummaryList;
    }


    export interface DistributionNotDisabled {
      Message?: string;
    }


    export interface DistributionSummary {
      Id: string;
      Status: string;
      LastModifiedTime: timestamp;
      DomainName: string;
      Aliases: Aliases;
      Origins: Origins;
      DefaultCacheBehavior: DefaultCacheBehavior;
      CacheBehaviors: CacheBehaviors;
      CustomErrorResponses: CustomErrorResponses;
      Comment: string;
      PriceClass: PriceClass;
      Enabled: boolean;
      ViewerCertificate: ViewerCertificate;
      Restrictions: Restrictions;
    }


    export type DistributionSummaryList = Array<DistributionSummary>;

    export interface ForwardedValues {
      QueryString: boolean;
      Cookies: CookiePreference;
      Headers?: Headers;
    }


    export interface GeoRestriction {
      RestrictionType: GeoRestrictionType;
      Quantity: integer;
      Items?: LocationList;
    }


    export type GeoRestrictionType = string;

    export interface GetCloudFrontOriginAccessIdentityConfigRequest {
      Id: string;
    }


    export interface GetCloudFrontOriginAccessIdentityConfigResult {
      CloudFrontOriginAccessIdentityConfig?: CloudFrontOriginAccessIdentityConfig;
      ETag?: string;
    }


    export interface GetCloudFrontOriginAccessIdentityRequest {
      Id: string;
    }


    export interface GetCloudFrontOriginAccessIdentityResult {
      CloudFrontOriginAccessIdentity?: CloudFrontOriginAccessIdentity;
      ETag?: string;
    }


    export interface GetDistributionConfigRequest {
      Id: string;
    }


    export interface GetDistributionConfigResult {
      DistributionConfig?: DistributionConfig;
      ETag?: string;
    }


    export interface GetDistributionRequest {
      Id: string;
    }


    export interface GetDistributionResult {
      Distribution?: Distribution;
      ETag?: string;
    }


    export interface GetInvalidationRequest {
      DistributionId: string;
      Id: string;
    }


    export interface GetInvalidationResult {
      Invalidation?: Invalidation;
    }


    export interface GetStreamingDistributionConfigRequest {
      Id: string;
    }


    export interface GetStreamingDistributionConfigResult {
      StreamingDistributionConfig?: StreamingDistributionConfig;
      ETag?: string;
    }


    export interface GetStreamingDistributionRequest {
      Id: string;
    }


    export interface GetStreamingDistributionResult {
      StreamingDistribution?: StreamingDistribution;
      ETag?: string;
    }


    export type HeaderList = Array<string>;

    export interface Headers {
      Quantity: integer;
      Items?: HeaderList;
    }


    export interface IllegalUpdate {
      Message?: string;
    }


    export interface InconsistentQuantities {
      Message?: string;
    }


    export interface InvalidArgument {
      Message?: string;
    }


    export interface InvalidDefaultRootObject {
      Message?: string;
    }


    export interface InvalidErrorCode {
      Message?: string;
    }


    export interface InvalidForwardCookies {
      Message?: string;
    }


    export interface InvalidGeoRestrictionParameter {
      Message?: string;
    }


    export interface InvalidHeadersForS3Origin {
      Message?: string;
    }


    export interface InvalidIfMatchVersion {
      Message?: string;
    }


    export interface InvalidLocationCode {
      Message?: string;
    }


    export interface InvalidOrigin {
      Message?: string;
    }


    export interface InvalidOriginAccessIdentity {
      Message?: string;
    }


    export interface InvalidProtocolSettings {
      Message?: string;
    }


    export interface InvalidRelativePath {
      Message?: string;
    }


    export interface InvalidRequiredProtocol {
      Message?: string;
    }


    export interface InvalidResponseCode {
      Message?: string;
    }


    export interface InvalidViewerCertificate {
      Message?: string;
    }


    export interface Invalidation {
      Id: string;
      Status: string;
      CreateTime: timestamp;
      InvalidationBatch: InvalidationBatch;
    }


    export interface InvalidationBatch {
      Paths: Paths;
      CallerReference: string;
    }


    export interface InvalidationList {
      Marker: string;
      NextMarker?: string;
      MaxItems: integer;
      IsTruncated: boolean;
      Quantity: integer;
      Items?: InvalidationSummaryList;
    }


    export interface InvalidationSummary {
      Id: string;
      CreateTime: timestamp;
      Status: string;
    }


    export type InvalidationSummaryList = Array<InvalidationSummary>;

    export type ItemSelection = string;

    export type KeyPairIdList = Array<string>;

    export interface KeyPairIds {
      Quantity: integer;
      Items?: KeyPairIdList;
    }


    export interface ListCloudFrontOriginAccessIdentitiesRequest {
      Marker?: string;
      MaxItems?: string;
    }


    export interface ListCloudFrontOriginAccessIdentitiesResult {
      CloudFrontOriginAccessIdentityList?: CloudFrontOriginAccessIdentityList;
    }


    export interface ListDistributionsRequest {
      Marker?: string;
      MaxItems?: string;
    }


    export interface ListDistributionsResult {
      DistributionList?: DistributionList;
    }


    export interface ListInvalidationsRequest {
      DistributionId: string;
      Marker?: string;
      MaxItems?: string;
    }


    export interface ListInvalidationsResult {
      InvalidationList?: InvalidationList;
    }


    export interface ListStreamingDistributionsRequest {
      Marker?: string;
      MaxItems?: string;
    }


    export interface ListStreamingDistributionsResult {
      StreamingDistributionList?: StreamingDistributionList;
    }


    export type LocationList = Array<string>;

    export interface LoggingConfig {
      Enabled: boolean;
      IncludeCookies: boolean;
      Bucket: string;
      Prefix: string;
    }


    export type Method = string;

    export type MethodsList = Array<Method>;

    export type MinimumProtocolVersion = string;

    export interface MissingBody {
      Message?: string;
    }


    export interface NoSuchCloudFrontOriginAccessIdentity {
      Message?: string;
    }


    export interface NoSuchDistribution {
      Message?: string;
    }


    export interface NoSuchInvalidation {
      Message?: string;
    }


    export interface NoSuchOrigin {
      Message?: string;
    }


    export interface NoSuchStreamingDistribution {
      Message?: string;
    }


    export interface Origin {
      Id: string;
      DomainName: string;
      OriginPath?: string;
      S3OriginConfig?: S3OriginConfig;
      CustomOriginConfig?: CustomOriginConfig;
    }


    export type OriginList = Array<Origin>;

    export type OriginProtocolPolicy = string;

    export interface Origins {
      Quantity: integer;
      Items?: OriginList;
    }


    export type PathList = Array<string>;

    export interface Paths {
      Quantity: integer;
      Items?: PathList;
    }


    export interface PreconditionFailed {
      Message?: string;
    }


    export type PriceClass = string;

    export interface Restrictions {
      GeoRestriction: GeoRestriction;
    }


    export interface S3Origin {
      DomainName: string;
      OriginAccessIdentity: string;
    }


    export interface S3OriginConfig {
      OriginAccessIdentity: string;
    }


    export type SSLSupportMethod = string;

    export interface Signer {
      AwsAccountNumber?: string;
      KeyPairIds?: KeyPairIds;
    }


    export type SignerList = Array<Signer>;

    export interface StreamingDistribution {
      Id: string;
      Status: string;
      LastModifiedTime?: timestamp;
      DomainName: string;
      ActiveTrustedSigners: ActiveTrustedSigners;
      StreamingDistributionConfig: StreamingDistributionConfig;
    }


    export interface StreamingDistributionAlreadyExists {
      Message?: string;
    }


    export interface StreamingDistributionConfig {
      CallerReference: string;
      S3Origin: S3Origin;
      Aliases?: Aliases;
      Comment: string;
      Logging?: StreamingLoggingConfig;
      TrustedSigners: TrustedSigners;
      PriceClass?: PriceClass;
      Enabled: boolean;
    }


    export interface StreamingDistributionList {
      Marker: string;
      NextMarker?: string;
      MaxItems: integer;
      IsTruncated: boolean;
      Quantity: integer;
      Items?: StreamingDistributionSummaryList;
    }


    export interface StreamingDistributionNotDisabled {
      Message?: string;
    }


    export interface StreamingDistributionSummary {
      Id: string;
      Status: string;
      LastModifiedTime: timestamp;
      DomainName: string;
      S3Origin: S3Origin;
      Aliases: Aliases;
      TrustedSigners: TrustedSigners;
      Comment: string;
      PriceClass: PriceClass;
      Enabled: boolean;
    }


    export type StreamingDistributionSummaryList = Array<StreamingDistributionSummary>;

    export interface StreamingLoggingConfig {
      Enabled: boolean;
      Bucket: string;
      Prefix: string;
    }


    export interface TooManyCacheBehaviors {
      Message?: string;
    }


    export interface TooManyCertificates {
      Message?: string;
    }


    export interface TooManyCloudFrontOriginAccessIdentities {
      Message?: string;
    }


    export interface TooManyCookieNamesInWhiteList {
      Message?: string;
    }


    export interface TooManyDistributionCNAMEs {
      Message?: string;
    }


    export interface TooManyDistributions {
      Message?: string;
    }


    export interface TooManyHeadersInForwardedValues {
      Message?: string;
    }


    export interface TooManyInvalidationsInProgress {
      Message?: string;
    }


    export interface TooManyOrigins {
      Message?: string;
    }


    export interface TooManyStreamingDistributionCNAMEs {
      Message?: string;
    }


    export interface TooManyStreamingDistributions {
      Message?: string;
    }


    export interface TooManyTrustedSigners {
      Message?: string;
    }


    export interface TrustedSignerDoesNotExist {
      Message?: string;
    }


    export interface TrustedSigners {
      Enabled: boolean;
      Quantity: integer;
      Items?: AwsAccountNumberList;
    }


    export interface UpdateCloudFrontOriginAccessIdentityRequest {
      CloudFrontOriginAccessIdentityConfig: CloudFrontOriginAccessIdentityConfig;
      Id: string;
      IfMatch?: string;
    }


    export interface UpdateCloudFrontOriginAccessIdentityResult {
      CloudFrontOriginAccessIdentity?: CloudFrontOriginAccessIdentity;
      ETag?: string;
    }


    export interface UpdateDistributionRequest {
      DistributionConfig: DistributionConfig;
      Id: string;
      IfMatch?: string;
    }


    export interface UpdateDistributionResult {
      Distribution?: Distribution;
      ETag?: string;
    }


    export interface UpdateStreamingDistributionRequest {
      StreamingDistributionConfig: StreamingDistributionConfig;
      Id: string;
      IfMatch?: string;
    }


    export interface UpdateStreamingDistributionResult {
      StreamingDistribution?: StreamingDistribution;
      ETag?: string;
    }


    export interface ViewerCertificate {
      IAMCertificateId?: string;
      CloudFrontDefaultCertificate?: boolean;
      SSLSupportMethod?: SSLSupportMethod;
      MinimumProtocolVersion?: MinimumProtocolVersion;
    }


    export type ViewerProtocolPolicy = string;

    export type boolean = boolean;

    export type integer = number;

    export type long = number;

    export type string = string;

    export type timestamp = number;

}
