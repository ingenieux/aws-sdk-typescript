// Type definitions for aws-sdk - Amazon CloudFront
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

///<reference path="./aws-sdk-common.d.ts" />

declare module "aws-sdk" {

    /*
     * apiVersion: 2016-01-28
     * endpointPrefix: cloudfront
     * serviceAbbreviation: CloudFront
     * signatureVersion: v4
     * protocol: rest-xml
     */
    export class CloudFront extends Service {
      constructor(options?: any);
      endpoint: Endpoint;
      createCloudFrontOriginAccessIdentity(params: CloudFront.CreateCloudFrontOriginAccessIdentityRequest, callback?: (err: CloudFront.CloudFrontOriginAccessIdentityAlreadyExists|CloudFront.MissingBody|CloudFront.TooManyCloudFrontOriginAccessIdentities|CloudFront.InvalidArgument|CloudFront.InconsistentQuantities|any, data: CloudFront.CreateCloudFrontOriginAccessIdentityResult|any) => void): Request;
      createDistribution(params: CloudFront.CreateDistributionRequest, callback?: (err: CloudFront.CNAMEAlreadyExists|CloudFront.DistributionAlreadyExists|CloudFront.InvalidOrigin|CloudFront.InvalidOriginAccessIdentity|CloudFront.AccessDenied|CloudFront.TooManyTrustedSigners|CloudFront.TrustedSignerDoesNotExist|CloudFront.InvalidViewerCertificate|CloudFront.InvalidMinimumProtocolVersion|CloudFront.MissingBody|CloudFront.TooManyDistributionCNAMEs|CloudFront.TooManyDistributions|CloudFront.InvalidDefaultRootObject|CloudFront.InvalidRelativePath|CloudFront.InvalidErrorCode|CloudFront.InvalidResponseCode|CloudFront.InvalidArgument|CloudFront.InvalidRequiredProtocol|CloudFront.NoSuchOrigin|CloudFront.TooManyOrigins|CloudFront.TooManyCacheBehaviors|CloudFront.TooManyCookieNamesInWhiteList|CloudFront.InvalidForwardCookies|CloudFront.TooManyHeadersInForwardedValues|CloudFront.InvalidHeadersForS3Origin|CloudFront.InconsistentQuantities|CloudFront.TooManyCertificates|CloudFront.InvalidLocationCode|CloudFront.InvalidGeoRestrictionParameter|CloudFront.InvalidProtocolSettings|CloudFront.InvalidTTLOrder|CloudFront.InvalidWebACLId|CloudFront.TooManyOriginCustomHeaders|any, data: CloudFront.CreateDistributionResult|any) => void): Request;
      createInvalidation(params: CloudFront.CreateInvalidationRequest, callback?: (err: CloudFront.AccessDenied|CloudFront.MissingBody|CloudFront.InvalidArgument|CloudFront.NoSuchDistribution|CloudFront.BatchTooLarge|CloudFront.TooManyInvalidationsInProgress|CloudFront.InconsistentQuantities|any, data: CloudFront.CreateInvalidationResult|any) => void): Request;
      createStreamingDistribution(params: CloudFront.CreateStreamingDistributionRequest, callback?: (err: CloudFront.CNAMEAlreadyExists|CloudFront.StreamingDistributionAlreadyExists|CloudFront.InvalidOrigin|CloudFront.InvalidOriginAccessIdentity|CloudFront.AccessDenied|CloudFront.TooManyTrustedSigners|CloudFront.TrustedSignerDoesNotExist|CloudFront.MissingBody|CloudFront.TooManyStreamingDistributionCNAMEs|CloudFront.TooManyStreamingDistributions|CloudFront.InvalidArgument|CloudFront.InconsistentQuantities|any, data: CloudFront.CreateStreamingDistributionResult|any) => void): Request;
      deleteCloudFrontOriginAccessIdentity(params: CloudFront.DeleteCloudFrontOriginAccessIdentityRequest, callback?: (err: CloudFront.AccessDenied|CloudFront.InvalidIfMatchVersion|CloudFront.NoSuchCloudFrontOriginAccessIdentity|CloudFront.PreconditionFailed|CloudFront.CloudFrontOriginAccessIdentityInUse|any, data: any) => void): Request;
      deleteDistribution(params: CloudFront.DeleteDistributionRequest, callback?: (err: CloudFront.AccessDenied|CloudFront.DistributionNotDisabled|CloudFront.InvalidIfMatchVersion|CloudFront.NoSuchDistribution|CloudFront.PreconditionFailed|any, data: any) => void): Request;
      deleteStreamingDistribution(params: CloudFront.DeleteStreamingDistributionRequest, callback?: (err: CloudFront.AccessDenied|CloudFront.StreamingDistributionNotDisabled|CloudFront.InvalidIfMatchVersion|CloudFront.NoSuchStreamingDistribution|CloudFront.PreconditionFailed|any, data: any) => void): Request;
      getCloudFrontOriginAccessIdentity(params: CloudFront.GetCloudFrontOriginAccessIdentityRequest, callback?: (err: CloudFront.NoSuchCloudFrontOriginAccessIdentity|CloudFront.AccessDenied|any, data: CloudFront.GetCloudFrontOriginAccessIdentityResult|any) => void): Request;
      getCloudFrontOriginAccessIdentityConfig(params: CloudFront.GetCloudFrontOriginAccessIdentityConfigRequest, callback?: (err: CloudFront.NoSuchCloudFrontOriginAccessIdentity|CloudFront.AccessDenied|any, data: CloudFront.GetCloudFrontOriginAccessIdentityConfigResult|any) => void): Request;
      getDistribution(params: CloudFront.GetDistributionRequest, callback?: (err: CloudFront.NoSuchDistribution|CloudFront.AccessDenied|any, data: CloudFront.GetDistributionResult|any) => void): Request;
      getDistributionConfig(params: CloudFront.GetDistributionConfigRequest, callback?: (err: CloudFront.NoSuchDistribution|CloudFront.AccessDenied|any, data: CloudFront.GetDistributionConfigResult|any) => void): Request;
      getInvalidation(params: CloudFront.GetInvalidationRequest, callback?: (err: CloudFront.NoSuchInvalidation|CloudFront.NoSuchDistribution|CloudFront.AccessDenied|any, data: CloudFront.GetInvalidationResult|any) => void): Request;
      getStreamingDistribution(params: CloudFront.GetStreamingDistributionRequest, callback?: (err: CloudFront.NoSuchStreamingDistribution|CloudFront.AccessDenied|any, data: CloudFront.GetStreamingDistributionResult|any) => void): Request;
      getStreamingDistributionConfig(params: CloudFront.GetStreamingDistributionConfigRequest, callback?: (err: CloudFront.NoSuchStreamingDistribution|CloudFront.AccessDenied|any, data: CloudFront.GetStreamingDistributionConfigResult|any) => void): Request;
      listCloudFrontOriginAccessIdentities(params: CloudFront.ListCloudFrontOriginAccessIdentitiesRequest, callback?: (err: CloudFront.InvalidArgument|any, data: CloudFront.ListCloudFrontOriginAccessIdentitiesResult|any) => void): Request;
      listDistributions(params: CloudFront.ListDistributionsRequest, callback?: (err: CloudFront.InvalidArgument|any, data: CloudFront.ListDistributionsResult|any) => void): Request;
      listDistributionsByWebACLId(params: CloudFront.ListDistributionsByWebACLIdRequest, callback?: (err: CloudFront.InvalidArgument|CloudFront.InvalidWebACLId|any, data: CloudFront.ListDistributionsByWebACLIdResult|any) => void): Request;
      listInvalidations(params: CloudFront.ListInvalidationsRequest, callback?: (err: CloudFront.InvalidArgument|CloudFront.NoSuchDistribution|CloudFront.AccessDenied|any, data: CloudFront.ListInvalidationsResult|any) => void): Request;
      listStreamingDistributions(params: CloudFront.ListStreamingDistributionsRequest, callback?: (err: CloudFront.InvalidArgument|any, data: CloudFront.ListStreamingDistributionsResult|any) => void): Request;
      updateCloudFrontOriginAccessIdentity(params: CloudFront.UpdateCloudFrontOriginAccessIdentityRequest, callback?: (err: CloudFront.AccessDenied|CloudFront.IllegalUpdate|CloudFront.InvalidIfMatchVersion|CloudFront.MissingBody|CloudFront.NoSuchCloudFrontOriginAccessIdentity|CloudFront.PreconditionFailed|CloudFront.InvalidArgument|CloudFront.InconsistentQuantities|any, data: CloudFront.UpdateCloudFrontOriginAccessIdentityResult|any) => void): Request;
      updateDistribution(params: CloudFront.UpdateDistributionRequest, callback?: (err: CloudFront.AccessDenied|CloudFront.CNAMEAlreadyExists|CloudFront.IllegalUpdate|CloudFront.InvalidIfMatchVersion|CloudFront.MissingBody|CloudFront.NoSuchDistribution|CloudFront.PreconditionFailed|CloudFront.TooManyDistributionCNAMEs|CloudFront.InvalidDefaultRootObject|CloudFront.InvalidRelativePath|CloudFront.InvalidErrorCode|CloudFront.InvalidResponseCode|CloudFront.InvalidArgument|CloudFront.InvalidOriginAccessIdentity|CloudFront.TooManyTrustedSigners|CloudFront.TrustedSignerDoesNotExist|CloudFront.InvalidViewerCertificate|CloudFront.InvalidMinimumProtocolVersion|CloudFront.InvalidRequiredProtocol|CloudFront.NoSuchOrigin|CloudFront.TooManyOrigins|CloudFront.TooManyCacheBehaviors|CloudFront.TooManyCookieNamesInWhiteList|CloudFront.InvalidForwardCookies|CloudFront.TooManyHeadersInForwardedValues|CloudFront.InvalidHeadersForS3Origin|CloudFront.InconsistentQuantities|CloudFront.TooManyCertificates|CloudFront.InvalidLocationCode|CloudFront.InvalidGeoRestrictionParameter|CloudFront.InvalidTTLOrder|CloudFront.InvalidWebACLId|CloudFront.TooManyOriginCustomHeaders|any, data: CloudFront.UpdateDistributionResult|any) => void): Request;
      updateStreamingDistribution(params: CloudFront.UpdateStreamingDistributionRequest, callback?: (err: CloudFront.AccessDenied|CloudFront.CNAMEAlreadyExists|CloudFront.IllegalUpdate|CloudFront.InvalidIfMatchVersion|CloudFront.MissingBody|CloudFront.NoSuchStreamingDistribution|CloudFront.PreconditionFailed|CloudFront.TooManyStreamingDistributionCNAMEs|CloudFront.InvalidArgument|CloudFront.InvalidOriginAccessIdentity|CloudFront.TooManyTrustedSigners|CloudFront.TrustedSignerDoesNotExist|CloudFront.InconsistentQuantities|any, data: CloudFront.UpdateStreamingDistributionResult|any) => void): Request;

      // Found on JS Sources - Sorry for the inconvenience :)
      setupRequestListeners(...args: any[]): any
    }

    export module CloudFront {
        export type AliasList = string[];
        export type AwsAccountNumberList = string[];
        export type CacheBehaviorList = CacheBehavior[];
        export type CertificateSource = string;
        export type CloudFrontOriginAccessIdentitySummaryList = CloudFrontOriginAccessIdentitySummary[];
        export type CookieNameList = string[];
        export type CustomErrorResponseList = CustomErrorResponse[];
        export type DistributionSummaryList = DistributionSummary[];
        export type GeoRestrictionType = string;
        export type HeaderList = string[];
        export type InvalidationSummaryList = InvalidationSummary[];
        export type ItemSelection = string;
        export type KeyPairIdList = string[];
        export type LocationList = string[];
        export type Method = string;
        export type MethodsList = Method[];
        export type MinimumProtocolVersion = string;
        export type OriginCustomHeadersList = OriginCustomHeader[];
        export type OriginList = Origin[];    // min: 1
        export type OriginProtocolPolicy = string;
        export type PathList = string[];
        export type PriceClass = string;
        export type SSLSupportMethod = string;
        export type SignerList = Signer[];
        export type SslProtocol = string;
        export type SslProtocolsList = SslProtocol[];
        export type StreamingDistributionSummaryList = StreamingDistributionSummary[];
        export type ViewerProtocolPolicy = string;
        export type integer = number;
        export type long = number;
        export type timestamp = number;

        export interface AccessDenied {
            Message?: string;
        }
        export interface ActiveTrustedSigners {
            Enabled: boolean;
            Quantity: integer;
            Items?: SignerList;
        }
        export interface Aliases {
            Quantity: integer;
            Items?: AliasList;
        }
        export interface AllowedMethods {
            Quantity: integer;
            Items: MethodsList;
            CachedMethods?: CachedMethods;
        }
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
            DefaultTTL?: long;
            MaxTTL?: long;
            Compress?: boolean;
        }
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
        export interface CustomErrorResponses {
            Quantity: integer;
            Items?: CustomErrorResponseList;
        }
        export interface CustomHeaders {
            Quantity: integer;
            Items?: OriginCustomHeadersList;
        }
        export interface CustomOriginConfig {
            HTTPPort: integer;
            HTTPSPort: integer;
            OriginProtocolPolicy: OriginProtocolPolicy;
            OriginSslProtocols?: OriginSslProtocols;
        }
        export interface DefaultCacheBehavior {
            TargetOriginId: string;
            ForwardedValues: ForwardedValues;
            TrustedSigners: TrustedSigners;
            ViewerProtocolPolicy: ViewerProtocolPolicy;
            MinTTL: long;
            AllowedMethods?: AllowedMethods;
            SmoothStreaming?: boolean;
            DefaultTTL?: long;
            MaxTTL?: long;
            Compress?: boolean;
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
            WebACLId?: string;
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
            WebACLId: string;
        }
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
        export interface InvalidMinimumProtocolVersion {
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
        export interface InvalidTTLOrder {
            Message?: string;
        }
        export interface InvalidViewerCertificate {
            Message?: string;
        }
        export interface InvalidWebACLId {
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
        export interface ListDistributionsByWebACLIdRequest {
            Marker?: string;
            MaxItems?: string;
            WebACLId: string;
        }
        export interface ListDistributionsByWebACLIdResult {
            DistributionList?: DistributionList;
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
        export interface LoggingConfig {
            Enabled: boolean;
            IncludeCookies: boolean;
            Bucket: string;
            Prefix: string;
        }
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
            CustomHeaders?: CustomHeaders;
            S3OriginConfig?: S3OriginConfig;
            CustomOriginConfig?: CustomOriginConfig;
        }
        export interface OriginCustomHeader {
            HeaderName: string;
            HeaderValue: string;
        }
        export interface OriginSslProtocols {
            Quantity: integer;
            Items: SslProtocolsList;
        }
        export interface Origins {
            Quantity: integer;
            Items?: OriginList;
        }
        export interface Paths {
            Quantity: integer;
            Items?: PathList;
        }
        export interface PreconditionFailed {
            Message?: string;
        }
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
        export interface Signer {
            AwsAccountNumber?: string;
            KeyPairIds?: KeyPairIds;
        }
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
        export interface TooManyOriginCustomHeaders {
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
            CloudFrontDefaultCertificate?: boolean;
            IAMCertificateId?: string;
            ACMCertificateArn?: string;
            SSLSupportMethod?: SSLSupportMethod;
            MinimumProtocolVersion?: MinimumProtocolVersion;
            Certificate?: string;
            CertificateSource?: CertificateSource;
        }

    }
}
