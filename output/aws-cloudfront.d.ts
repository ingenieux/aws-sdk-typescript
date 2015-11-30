// DO NOT EDIT!
//

///<reference path="./aws-sdk-common.d.ts" />
declare module "aws-sdk" {

    export class CloudFront extends Service {
      constructor(options?: any);
      createCloudFrontOriginAccessIdentity(params: CloudFrontCreateCloudFrontOriginAccessIdentityRequest, callback?: (err: CloudFrontCloudFrontOriginAccessIdentityAlreadyExists|CloudFrontMissingBody|CloudFrontTooManyCloudFrontOriginAccessIdentities|CloudFrontInvalidArgument|CloudFrontInconsistentQuantities|any, data: CloudFrontCreateCloudFrontOriginAccessIdentityResult|any) => void): Request;
      createDistribution(params: CloudFrontCreateDistributionRequest, callback?: (err: CloudFrontCNAMEAlreadyExists|CloudFrontDistributionAlreadyExists|CloudFrontInvalidOrigin|CloudFrontInvalidOriginAccessIdentity|CloudFrontAccessDenied|CloudFrontTooManyTrustedSigners|CloudFrontTrustedSignerDoesNotExist|CloudFrontInvalidViewerCertificate|CloudFrontInvalidMinimumProtocolVersion|CloudFrontMissingBody|CloudFrontTooManyDistributionCNAMEs|CloudFrontTooManyDistributions|CloudFrontInvalidDefaultRootObject|CloudFrontInvalidRelativePath|CloudFrontInvalidErrorCode|CloudFrontInvalidResponseCode|CloudFrontInvalidArgument|CloudFrontInvalidRequiredProtocol|CloudFrontNoSuchOrigin|CloudFrontTooManyOrigins|CloudFrontTooManyCacheBehaviors|CloudFrontTooManyCookieNamesInWhiteList|CloudFrontInvalidForwardCookies|CloudFrontTooManyHeadersInForwardedValues|CloudFrontInvalidHeadersForS3Origin|CloudFrontInconsistentQuantities|CloudFrontTooManyCertificates|CloudFrontInvalidLocationCode|CloudFrontInvalidGeoRestrictionParameter|CloudFrontInvalidProtocolSettings|CloudFrontInvalidTTLOrder|CloudFrontInvalidWebACLId|any, data: CloudFrontCreateDistributionResult|any) => void): Request;
      createInvalidation(params: CloudFrontCreateInvalidationRequest, callback?: (err: CloudFrontAccessDenied|CloudFrontMissingBody|CloudFrontInvalidArgument|CloudFrontNoSuchDistribution|CloudFrontBatchTooLarge|CloudFrontTooManyInvalidationsInProgress|CloudFrontInconsistentQuantities|any, data: CloudFrontCreateInvalidationResult|any) => void): Request;
      createStreamingDistribution(params: CloudFrontCreateStreamingDistributionRequest, callback?: (err: CloudFrontCNAMEAlreadyExists|CloudFrontStreamingDistributionAlreadyExists|CloudFrontInvalidOrigin|CloudFrontInvalidOriginAccessIdentity|CloudFrontAccessDenied|CloudFrontTooManyTrustedSigners|CloudFrontTrustedSignerDoesNotExist|CloudFrontMissingBody|CloudFrontTooManyStreamingDistributionCNAMEs|CloudFrontTooManyStreamingDistributions|CloudFrontInvalidArgument|CloudFrontInconsistentQuantities|any, data: CloudFrontCreateStreamingDistributionResult|any) => void): Request;
      deleteCloudFrontOriginAccessIdentity(params: CloudFrontDeleteCloudFrontOriginAccessIdentityRequest, callback?: (err: CloudFrontAccessDenied|CloudFrontInvalidIfMatchVersion|CloudFrontNoSuchCloudFrontOriginAccessIdentity|CloudFrontPreconditionFailed|CloudFrontCloudFrontOriginAccessIdentityInUse|any, data: any) => void): Request;
      deleteDistribution(params: CloudFrontDeleteDistributionRequest, callback?: (err: CloudFrontAccessDenied|CloudFrontDistributionNotDisabled|CloudFrontInvalidIfMatchVersion|CloudFrontNoSuchDistribution|CloudFrontPreconditionFailed|any, data: any) => void): Request;
      deleteStreamingDistribution(params: CloudFrontDeleteStreamingDistributionRequest, callback?: (err: CloudFrontAccessDenied|CloudFrontStreamingDistributionNotDisabled|CloudFrontInvalidIfMatchVersion|CloudFrontNoSuchStreamingDistribution|CloudFrontPreconditionFailed|any, data: any) => void): Request;
      getCloudFrontOriginAccessIdentity(params: CloudFrontGetCloudFrontOriginAccessIdentityRequest, callback?: (err: CloudFrontNoSuchCloudFrontOriginAccessIdentity|CloudFrontAccessDenied|any, data: CloudFrontGetCloudFrontOriginAccessIdentityResult|any) => void): Request;
      getCloudFrontOriginAccessIdentityConfig(params: CloudFrontGetCloudFrontOriginAccessIdentityConfigRequest, callback?: (err: CloudFrontNoSuchCloudFrontOriginAccessIdentity|CloudFrontAccessDenied|any, data: CloudFrontGetCloudFrontOriginAccessIdentityConfigResult|any) => void): Request;
      getDistribution(params: CloudFrontGetDistributionRequest, callback?: (err: CloudFrontNoSuchDistribution|CloudFrontAccessDenied|any, data: CloudFrontGetDistributionResult|any) => void): Request;
      getDistributionConfig(params: CloudFrontGetDistributionConfigRequest, callback?: (err: CloudFrontNoSuchDistribution|CloudFrontAccessDenied|any, data: CloudFrontGetDistributionConfigResult|any) => void): Request;
      getInvalidation(params: CloudFrontGetInvalidationRequest, callback?: (err: CloudFrontNoSuchInvalidation|CloudFrontNoSuchDistribution|CloudFrontAccessDenied|any, data: CloudFrontGetInvalidationResult|any) => void): Request;
      getStreamingDistribution(params: CloudFrontGetStreamingDistributionRequest, callback?: (err: CloudFrontNoSuchStreamingDistribution|CloudFrontAccessDenied|any, data: CloudFrontGetStreamingDistributionResult|any) => void): Request;
      getStreamingDistributionConfig(params: CloudFrontGetStreamingDistributionConfigRequest, callback?: (err: CloudFrontNoSuchStreamingDistribution|CloudFrontAccessDenied|any, data: CloudFrontGetStreamingDistributionConfigResult|any) => void): Request;
      listCloudFrontOriginAccessIdentities(params: CloudFrontListCloudFrontOriginAccessIdentitiesRequest, callback?: (err: CloudFrontInvalidArgument|any, data: CloudFrontListCloudFrontOriginAccessIdentitiesResult|any) => void): Request;
      listDistributions(params: CloudFrontListDistributionsRequest, callback?: (err: CloudFrontInvalidArgument|any, data: CloudFrontListDistributionsResult|any) => void): Request;
      listDistributionsByWebACLId(params: CloudFrontListDistributionsByWebACLIdRequest, callback?: (err: CloudFrontInvalidArgument|CloudFrontInvalidWebACLId|any, data: CloudFrontListDistributionsByWebACLIdResult|any) => void): Request;
      listInvalidations(params: CloudFrontListInvalidationsRequest, callback?: (err: CloudFrontInvalidArgument|CloudFrontNoSuchDistribution|CloudFrontAccessDenied|any, data: CloudFrontListInvalidationsResult|any) => void): Request;
      listStreamingDistributions(params: CloudFrontListStreamingDistributionsRequest, callback?: (err: CloudFrontInvalidArgument|any, data: CloudFrontListStreamingDistributionsResult|any) => void): Request;
      updateCloudFrontOriginAccessIdentity(params: CloudFrontUpdateCloudFrontOriginAccessIdentityRequest, callback?: (err: CloudFrontAccessDenied|CloudFrontIllegalUpdate|CloudFrontInvalidIfMatchVersion|CloudFrontMissingBody|CloudFrontNoSuchCloudFrontOriginAccessIdentity|CloudFrontPreconditionFailed|CloudFrontInvalidArgument|CloudFrontInconsistentQuantities|any, data: CloudFrontUpdateCloudFrontOriginAccessIdentityResult|any) => void): Request;
      updateDistribution(params: CloudFrontUpdateDistributionRequest, callback?: (err: CloudFrontAccessDenied|CloudFrontCNAMEAlreadyExists|CloudFrontIllegalUpdate|CloudFrontInvalidIfMatchVersion|CloudFrontMissingBody|CloudFrontNoSuchDistribution|CloudFrontPreconditionFailed|CloudFrontTooManyDistributionCNAMEs|CloudFrontInvalidDefaultRootObject|CloudFrontInvalidRelativePath|CloudFrontInvalidErrorCode|CloudFrontInvalidResponseCode|CloudFrontInvalidArgument|CloudFrontInvalidOriginAccessIdentity|CloudFrontTooManyTrustedSigners|CloudFrontTrustedSignerDoesNotExist|CloudFrontInvalidViewerCertificate|CloudFrontInvalidMinimumProtocolVersion|CloudFrontInvalidRequiredProtocol|CloudFrontNoSuchOrigin|CloudFrontTooManyOrigins|CloudFrontTooManyCacheBehaviors|CloudFrontTooManyCookieNamesInWhiteList|CloudFrontInvalidForwardCookies|CloudFrontTooManyHeadersInForwardedValues|CloudFrontInvalidHeadersForS3Origin|CloudFrontInconsistentQuantities|CloudFrontTooManyCertificates|CloudFrontInvalidLocationCode|CloudFrontInvalidGeoRestrictionParameter|CloudFrontInvalidTTLOrder|CloudFrontInvalidWebACLId|any, data: CloudFrontUpdateDistributionResult|any) => void): Request;
      updateStreamingDistribution(params: CloudFrontUpdateStreamingDistributionRequest, callback?: (err: CloudFrontAccessDenied|CloudFrontCNAMEAlreadyExists|CloudFrontIllegalUpdate|CloudFrontInvalidIfMatchVersion|CloudFrontMissingBody|CloudFrontNoSuchStreamingDistribution|CloudFrontPreconditionFailed|CloudFrontTooManyStreamingDistributionCNAMEs|CloudFrontInvalidArgument|CloudFrontInvalidOriginAccessIdentity|CloudFrontTooManyTrustedSigners|CloudFrontTrustedSignerDoesNotExist|CloudFrontInconsistentQuantities|any, data: CloudFrontUpdateStreamingDistributionResult|any) => void): Request;
    }

    export interface CloudFrontAccessDenied {
        Message?: CloudFrontstring;
    }

    export interface CloudFrontActiveTrustedSigners {
        Enabled: CloudFrontboolean;
        Quantity: CloudFrontinteger;
        Items?: CloudFrontSignerList;
    }

    export type CloudFrontAliasList = Array<CloudFrontstring>;
    export interface CloudFrontAliases {
        Quantity: CloudFrontinteger;
        Items?: CloudFrontAliasList;
    }

    export interface CloudFrontAllowedMethods {
        Quantity: CloudFrontinteger;
        Items: CloudFrontMethodsList;
        CachedMethods?: CloudFrontCachedMethods;
    }

    export type CloudFrontAwsAccountNumberList = Array<CloudFrontstring>;
    export interface CloudFrontBatchTooLarge {
        Message?: CloudFrontstring;
    }

    export interface CloudFrontCNAMEAlreadyExists {
        Message?: CloudFrontstring;
    }

    export interface CloudFrontCacheBehavior {
        PathPattern: CloudFrontstring;
        TargetOriginId: CloudFrontstring;
        ForwardedValues: CloudFrontForwardedValues;
        TrustedSigners: CloudFrontTrustedSigners;
        ViewerProtocolPolicy: CloudFrontViewerProtocolPolicy;
        MinTTL: CloudFrontlong;
        AllowedMethods?: CloudFrontAllowedMethods;
        SmoothStreaming?: CloudFrontboolean;
        DefaultTTL?: CloudFrontlong;
        MaxTTL?: CloudFrontlong;
    }

    export type CloudFrontCacheBehaviorList = Array<CloudFrontCacheBehavior>;
    export interface CloudFrontCacheBehaviors {
        Quantity: CloudFrontinteger;
        Items?: CloudFrontCacheBehaviorList;
    }

    export interface CloudFrontCachedMethods {
        Quantity: CloudFrontinteger;
        Items: CloudFrontMethodsList;
    }

    export interface CloudFrontCloudFrontOriginAccessIdentity {
        Id: CloudFrontstring;
        S3CanonicalUserId: CloudFrontstring;
        CloudFrontOriginAccessIdentityConfig?: CloudFrontCloudFrontOriginAccessIdentityConfig;
    }

    export interface CloudFrontCloudFrontOriginAccessIdentityAlreadyExists {
        Message?: CloudFrontstring;
    }

    export interface CloudFrontCloudFrontOriginAccessIdentityConfig {
        CallerReference: CloudFrontstring;
        Comment: CloudFrontstring;
    }

    export interface CloudFrontCloudFrontOriginAccessIdentityInUse {
        Message?: CloudFrontstring;
    }

    export interface CloudFrontCloudFrontOriginAccessIdentityList {
        Marker: CloudFrontstring;
        NextMarker?: CloudFrontstring;
        MaxItems: CloudFrontinteger;
        IsTruncated: CloudFrontboolean;
        Quantity: CloudFrontinteger;
        Items?: CloudFrontCloudFrontOriginAccessIdentitySummaryList;
    }

    export interface CloudFrontCloudFrontOriginAccessIdentitySummary {
        Id: CloudFrontstring;
        S3CanonicalUserId: CloudFrontstring;
        Comment: CloudFrontstring;
    }

    export type CloudFrontCloudFrontOriginAccessIdentitySummaryList = Array<CloudFrontCloudFrontOriginAccessIdentitySummary>;
    export type CloudFrontCookieNameList = Array<CloudFrontstring>;
    export interface CloudFrontCookieNames {
        Quantity: CloudFrontinteger;
        Items?: CloudFrontCookieNameList;
    }

    export interface CloudFrontCookiePreference {
        Forward: CloudFrontItemSelection;
        WhitelistedNames?: CloudFrontCookieNames;
    }

    export interface CloudFrontCreateCloudFrontOriginAccessIdentityRequest {
        CloudFrontOriginAccessIdentityConfig: CloudFrontCloudFrontOriginAccessIdentityConfig;
    }

    export interface CloudFrontCreateCloudFrontOriginAccessIdentityResult {
        CloudFrontOriginAccessIdentity?: CloudFrontCloudFrontOriginAccessIdentity;
        Location?: CloudFrontstring;
        ETag?: CloudFrontstring;
    }

    export interface CloudFrontCreateDistributionRequest {
        DistributionConfig: CloudFrontDistributionConfig;
    }

    export interface CloudFrontCreateDistributionResult {
        Distribution?: CloudFrontDistribution;
        Location?: CloudFrontstring;
        ETag?: CloudFrontstring;
    }

    export interface CloudFrontCreateInvalidationRequest {
        DistributionId: CloudFrontstring;
        InvalidationBatch: CloudFrontInvalidationBatch;
    }

    export interface CloudFrontCreateInvalidationResult {
        Location?: CloudFrontstring;
        Invalidation?: CloudFrontInvalidation;
    }

    export interface CloudFrontCreateStreamingDistributionRequest {
        StreamingDistributionConfig: CloudFrontStreamingDistributionConfig;
    }

    export interface CloudFrontCreateStreamingDistributionResult {
        StreamingDistribution?: CloudFrontStreamingDistribution;
        Location?: CloudFrontstring;
        ETag?: CloudFrontstring;
    }

    export interface CloudFrontCustomErrorResponse {
        ErrorCode: CloudFrontinteger;
        ResponsePagePath?: CloudFrontstring;
        ResponseCode?: CloudFrontstring;
        ErrorCachingMinTTL?: CloudFrontlong;
    }

    export type CloudFrontCustomErrorResponseList = Array<CloudFrontCustomErrorResponse>;
    export interface CloudFrontCustomErrorResponses {
        Quantity: CloudFrontinteger;
        Items?: CloudFrontCustomErrorResponseList;
    }

    export interface CloudFrontCustomOriginConfig {
        HTTPPort: CloudFrontinteger;
        HTTPSPort: CloudFrontinteger;
        OriginProtocolPolicy: CloudFrontOriginProtocolPolicy;
    }

    export interface CloudFrontDefaultCacheBehavior {
        TargetOriginId: CloudFrontstring;
        ForwardedValues: CloudFrontForwardedValues;
        TrustedSigners: CloudFrontTrustedSigners;
        ViewerProtocolPolicy: CloudFrontViewerProtocolPolicy;
        MinTTL: CloudFrontlong;
        AllowedMethods?: CloudFrontAllowedMethods;
        SmoothStreaming?: CloudFrontboolean;
        DefaultTTL?: CloudFrontlong;
        MaxTTL?: CloudFrontlong;
    }

    export interface CloudFrontDeleteCloudFrontOriginAccessIdentityRequest {
        Id: CloudFrontstring;
        IfMatch?: CloudFrontstring;
    }

    export interface CloudFrontDeleteDistributionRequest {
        Id: CloudFrontstring;
        IfMatch?: CloudFrontstring;
    }

    export interface CloudFrontDeleteStreamingDistributionRequest {
        Id: CloudFrontstring;
        IfMatch?: CloudFrontstring;
    }

    export interface CloudFrontDistribution {
        Id: CloudFrontstring;
        Status: CloudFrontstring;
        LastModifiedTime: CloudFronttimestamp;
        InProgressInvalidationBatches: CloudFrontinteger;
        DomainName: CloudFrontstring;
        ActiveTrustedSigners: CloudFrontActiveTrustedSigners;
        DistributionConfig: CloudFrontDistributionConfig;
    }

    export interface CloudFrontDistributionAlreadyExists {
        Message?: CloudFrontstring;
    }

    export interface CloudFrontDistributionConfig {
        CallerReference: CloudFrontstring;
        Aliases?: CloudFrontAliases;
        DefaultRootObject?: CloudFrontstring;
        Origins: CloudFrontOrigins;
        DefaultCacheBehavior: CloudFrontDefaultCacheBehavior;
        CacheBehaviors?: CloudFrontCacheBehaviors;
        CustomErrorResponses?: CloudFrontCustomErrorResponses;
        Comment: CloudFrontstring;
        Logging?: CloudFrontLoggingConfig;
        PriceClass?: CloudFrontPriceClass;
        Enabled: CloudFrontboolean;
        ViewerCertificate?: CloudFrontViewerCertificate;
        Restrictions?: CloudFrontRestrictions;
        WebACLId?: CloudFrontstring;
    }

    export interface CloudFrontDistributionList {
        Marker: CloudFrontstring;
        NextMarker?: CloudFrontstring;
        MaxItems: CloudFrontinteger;
        IsTruncated: CloudFrontboolean;
        Quantity: CloudFrontinteger;
        Items?: CloudFrontDistributionSummaryList;
    }

    export interface CloudFrontDistributionNotDisabled {
        Message?: CloudFrontstring;
    }

    export interface CloudFrontDistributionSummary {
        Id: CloudFrontstring;
        Status: CloudFrontstring;
        LastModifiedTime: CloudFronttimestamp;
        DomainName: CloudFrontstring;
        Aliases: CloudFrontAliases;
        Origins: CloudFrontOrigins;
        DefaultCacheBehavior: CloudFrontDefaultCacheBehavior;
        CacheBehaviors: CloudFrontCacheBehaviors;
        CustomErrorResponses: CloudFrontCustomErrorResponses;
        Comment: CloudFrontstring;
        PriceClass: CloudFrontPriceClass;
        Enabled: CloudFrontboolean;
        ViewerCertificate: CloudFrontViewerCertificate;
        Restrictions: CloudFrontRestrictions;
        WebACLId: CloudFrontstring;
    }

    export type CloudFrontDistributionSummaryList = Array<CloudFrontDistributionSummary>;
    export interface CloudFrontForwardedValues {
        QueryString: CloudFrontboolean;
        Cookies: CloudFrontCookiePreference;
        Headers?: CloudFrontHeaders;
    }

    export interface CloudFrontGeoRestriction {
        RestrictionType: CloudFrontGeoRestrictionType;
        Quantity: CloudFrontinteger;
        Items?: CloudFrontLocationList;
    }

    export type CloudFrontGeoRestrictionType = string;
    export interface CloudFrontGetCloudFrontOriginAccessIdentityConfigRequest {
        Id: CloudFrontstring;
    }

    export interface CloudFrontGetCloudFrontOriginAccessIdentityConfigResult {
        CloudFrontOriginAccessIdentityConfig?: CloudFrontCloudFrontOriginAccessIdentityConfig;
        ETag?: CloudFrontstring;
    }

    export interface CloudFrontGetCloudFrontOriginAccessIdentityRequest {
        Id: CloudFrontstring;
    }

    export interface CloudFrontGetCloudFrontOriginAccessIdentityResult {
        CloudFrontOriginAccessIdentity?: CloudFrontCloudFrontOriginAccessIdentity;
        ETag?: CloudFrontstring;
    }

    export interface CloudFrontGetDistributionConfigRequest {
        Id: CloudFrontstring;
    }

    export interface CloudFrontGetDistributionConfigResult {
        DistributionConfig?: CloudFrontDistributionConfig;
        ETag?: CloudFrontstring;
    }

    export interface CloudFrontGetDistributionRequest {
        Id: CloudFrontstring;
    }

    export interface CloudFrontGetDistributionResult {
        Distribution?: CloudFrontDistribution;
        ETag?: CloudFrontstring;
    }

    export interface CloudFrontGetInvalidationRequest {
        DistributionId: CloudFrontstring;
        Id: CloudFrontstring;
    }

    export interface CloudFrontGetInvalidationResult {
        Invalidation?: CloudFrontInvalidation;
    }

    export interface CloudFrontGetStreamingDistributionConfigRequest {
        Id: CloudFrontstring;
    }

    export interface CloudFrontGetStreamingDistributionConfigResult {
        StreamingDistributionConfig?: CloudFrontStreamingDistributionConfig;
        ETag?: CloudFrontstring;
    }

    export interface CloudFrontGetStreamingDistributionRequest {
        Id: CloudFrontstring;
    }

    export interface CloudFrontGetStreamingDistributionResult {
        StreamingDistribution?: CloudFrontStreamingDistribution;
        ETag?: CloudFrontstring;
    }

    export type CloudFrontHeaderList = Array<CloudFrontstring>;
    export interface CloudFrontHeaders {
        Quantity: CloudFrontinteger;
        Items?: CloudFrontHeaderList;
    }

    export interface CloudFrontIllegalUpdate {
        Message?: CloudFrontstring;
    }

    export interface CloudFrontInconsistentQuantities {
        Message?: CloudFrontstring;
    }

    export interface CloudFrontInvalidArgument {
        Message?: CloudFrontstring;
    }

    export interface CloudFrontInvalidDefaultRootObject {
        Message?: CloudFrontstring;
    }

    export interface CloudFrontInvalidErrorCode {
        Message?: CloudFrontstring;
    }

    export interface CloudFrontInvalidForwardCookies {
        Message?: CloudFrontstring;
    }

    export interface CloudFrontInvalidGeoRestrictionParameter {
        Message?: CloudFrontstring;
    }

    export interface CloudFrontInvalidHeadersForS3Origin {
        Message?: CloudFrontstring;
    }

    export interface CloudFrontInvalidIfMatchVersion {
        Message?: CloudFrontstring;
    }

    export interface CloudFrontInvalidLocationCode {
        Message?: CloudFrontstring;
    }

    export interface CloudFrontInvalidMinimumProtocolVersion {
        Message?: CloudFrontstring;
    }

    export interface CloudFrontInvalidOrigin {
        Message?: CloudFrontstring;
    }

    export interface CloudFrontInvalidOriginAccessIdentity {
        Message?: CloudFrontstring;
    }

    export interface CloudFrontInvalidProtocolSettings {
        Message?: CloudFrontstring;
    }

    export interface CloudFrontInvalidRelativePath {
        Message?: CloudFrontstring;
    }

    export interface CloudFrontInvalidRequiredProtocol {
        Message?: CloudFrontstring;
    }

    export interface CloudFrontInvalidResponseCode {
        Message?: CloudFrontstring;
    }

    export interface CloudFrontInvalidTTLOrder {
        Message?: CloudFrontstring;
    }

    export interface CloudFrontInvalidViewerCertificate {
        Message?: CloudFrontstring;
    }

    export interface CloudFrontInvalidWebACLId {
        Message?: CloudFrontstring;
    }

    export interface CloudFrontInvalidation {
        Id: CloudFrontstring;
        Status: CloudFrontstring;
        CreateTime: CloudFronttimestamp;
        InvalidationBatch: CloudFrontInvalidationBatch;
    }

    export interface CloudFrontInvalidationBatch {
        Paths: CloudFrontPaths;
        CallerReference: CloudFrontstring;
    }

    export interface CloudFrontInvalidationList {
        Marker: CloudFrontstring;
        NextMarker?: CloudFrontstring;
        MaxItems: CloudFrontinteger;
        IsTruncated: CloudFrontboolean;
        Quantity: CloudFrontinteger;
        Items?: CloudFrontInvalidationSummaryList;
    }

    export interface CloudFrontInvalidationSummary {
        Id: CloudFrontstring;
        CreateTime: CloudFronttimestamp;
        Status: CloudFrontstring;
    }

    export type CloudFrontInvalidationSummaryList = Array<CloudFrontInvalidationSummary>;
    export type CloudFrontItemSelection = string;
    export type CloudFrontKeyPairIdList = Array<CloudFrontstring>;
    export interface CloudFrontKeyPairIds {
        Quantity: CloudFrontinteger;
        Items?: CloudFrontKeyPairIdList;
    }

    export interface CloudFrontListCloudFrontOriginAccessIdentitiesRequest {
        Marker?: CloudFrontstring;
        MaxItems?: CloudFrontstring;
    }

    export interface CloudFrontListCloudFrontOriginAccessIdentitiesResult {
        CloudFrontOriginAccessIdentityList?: CloudFrontCloudFrontOriginAccessIdentityList;
    }

    export interface CloudFrontListDistributionsByWebACLIdRequest {
        Marker?: CloudFrontstring;
        MaxItems?: CloudFrontstring;
        WebACLId: CloudFrontstring;
    }

    export interface CloudFrontListDistributionsByWebACLIdResult {
        DistributionList?: CloudFrontDistributionList;
    }

    export interface CloudFrontListDistributionsRequest {
        Marker?: CloudFrontstring;
        MaxItems?: CloudFrontstring;
    }

    export interface CloudFrontListDistributionsResult {
        DistributionList?: CloudFrontDistributionList;
    }

    export interface CloudFrontListInvalidationsRequest {
        DistributionId: CloudFrontstring;
        Marker?: CloudFrontstring;
        MaxItems?: CloudFrontstring;
    }

    export interface CloudFrontListInvalidationsResult {
        InvalidationList?: CloudFrontInvalidationList;
    }

    export interface CloudFrontListStreamingDistributionsRequest {
        Marker?: CloudFrontstring;
        MaxItems?: CloudFrontstring;
    }

    export interface CloudFrontListStreamingDistributionsResult {
        StreamingDistributionList?: CloudFrontStreamingDistributionList;
    }

    export type CloudFrontLocationList = Array<CloudFrontstring>;
    export interface CloudFrontLoggingConfig {
        Enabled: CloudFrontboolean;
        IncludeCookies: CloudFrontboolean;
        Bucket: CloudFrontstring;
        Prefix: CloudFrontstring;
    }

    export type CloudFrontMethod = string;
    export type CloudFrontMethodsList = Array<CloudFrontMethod>;
    export type CloudFrontMinimumProtocolVersion = string;
    export interface CloudFrontMissingBody {
        Message?: CloudFrontstring;
    }

    export interface CloudFrontNoSuchCloudFrontOriginAccessIdentity {
        Message?: CloudFrontstring;
    }

    export interface CloudFrontNoSuchDistribution {
        Message?: CloudFrontstring;
    }

    export interface CloudFrontNoSuchInvalidation {
        Message?: CloudFrontstring;
    }

    export interface CloudFrontNoSuchOrigin {
        Message?: CloudFrontstring;
    }

    export interface CloudFrontNoSuchStreamingDistribution {
        Message?: CloudFrontstring;
    }

    export interface CloudFrontOrigin {
        Id: CloudFrontstring;
        DomainName: CloudFrontstring;
        OriginPath?: CloudFrontstring;
        S3OriginConfig?: CloudFrontS3OriginConfig;
        CustomOriginConfig?: CloudFrontCustomOriginConfig;
    }

    export type CloudFrontOriginList = Array<CloudFrontOrigin>;
    export type CloudFrontOriginProtocolPolicy = string;
    export interface CloudFrontOrigins {
        Quantity: CloudFrontinteger;
        Items?: CloudFrontOriginList;
    }

    export type CloudFrontPathList = Array<CloudFrontstring>;
    export interface CloudFrontPaths {
        Quantity: CloudFrontinteger;
        Items?: CloudFrontPathList;
    }

    export interface CloudFrontPreconditionFailed {
        Message?: CloudFrontstring;
    }

    export type CloudFrontPriceClass = string;
    export interface CloudFrontRestrictions {
        GeoRestriction: CloudFrontGeoRestriction;
    }

    export interface CloudFrontS3Origin {
        DomainName: CloudFrontstring;
        OriginAccessIdentity: CloudFrontstring;
    }

    export interface CloudFrontS3OriginConfig {
        OriginAccessIdentity: CloudFrontstring;
    }

    export type CloudFrontSSLSupportMethod = string;
    export interface CloudFrontSigner {
        AwsAccountNumber?: CloudFrontstring;
        KeyPairIds?: CloudFrontKeyPairIds;
    }

    export type CloudFrontSignerList = Array<CloudFrontSigner>;
    export interface CloudFrontStreamingDistribution {
        Id: CloudFrontstring;
        Status: CloudFrontstring;
        LastModifiedTime?: CloudFronttimestamp;
        DomainName: CloudFrontstring;
        ActiveTrustedSigners: CloudFrontActiveTrustedSigners;
        StreamingDistributionConfig: CloudFrontStreamingDistributionConfig;
    }

    export interface CloudFrontStreamingDistributionAlreadyExists {
        Message?: CloudFrontstring;
    }

    export interface CloudFrontStreamingDistributionConfig {
        CallerReference: CloudFrontstring;
        S3Origin: CloudFrontS3Origin;
        Aliases?: CloudFrontAliases;
        Comment: CloudFrontstring;
        Logging?: CloudFrontStreamingLoggingConfig;
        TrustedSigners: CloudFrontTrustedSigners;
        PriceClass?: CloudFrontPriceClass;
        Enabled: CloudFrontboolean;
    }

    export interface CloudFrontStreamingDistributionList {
        Marker: CloudFrontstring;
        NextMarker?: CloudFrontstring;
        MaxItems: CloudFrontinteger;
        IsTruncated: CloudFrontboolean;
        Quantity: CloudFrontinteger;
        Items?: CloudFrontStreamingDistributionSummaryList;
    }

    export interface CloudFrontStreamingDistributionNotDisabled {
        Message?: CloudFrontstring;
    }

    export interface CloudFrontStreamingDistributionSummary {
        Id: CloudFrontstring;
        Status: CloudFrontstring;
        LastModifiedTime: CloudFronttimestamp;
        DomainName: CloudFrontstring;
        S3Origin: CloudFrontS3Origin;
        Aliases: CloudFrontAliases;
        TrustedSigners: CloudFrontTrustedSigners;
        Comment: CloudFrontstring;
        PriceClass: CloudFrontPriceClass;
        Enabled: CloudFrontboolean;
    }

    export type CloudFrontStreamingDistributionSummaryList = Array<CloudFrontStreamingDistributionSummary>;
    export interface CloudFrontStreamingLoggingConfig {
        Enabled: CloudFrontboolean;
        Bucket: CloudFrontstring;
        Prefix: CloudFrontstring;
    }

    export interface CloudFrontTooManyCacheBehaviors {
        Message?: CloudFrontstring;
    }

    export interface CloudFrontTooManyCertificates {
        Message?: CloudFrontstring;
    }

    export interface CloudFrontTooManyCloudFrontOriginAccessIdentities {
        Message?: CloudFrontstring;
    }

    export interface CloudFrontTooManyCookieNamesInWhiteList {
        Message?: CloudFrontstring;
    }

    export interface CloudFrontTooManyDistributionCNAMEs {
        Message?: CloudFrontstring;
    }

    export interface CloudFrontTooManyDistributions {
        Message?: CloudFrontstring;
    }

    export interface CloudFrontTooManyHeadersInForwardedValues {
        Message?: CloudFrontstring;
    }

    export interface CloudFrontTooManyInvalidationsInProgress {
        Message?: CloudFrontstring;
    }

    export interface CloudFrontTooManyOrigins {
        Message?: CloudFrontstring;
    }

    export interface CloudFrontTooManyStreamingDistributionCNAMEs {
        Message?: CloudFrontstring;
    }

    export interface CloudFrontTooManyStreamingDistributions {
        Message?: CloudFrontstring;
    }

    export interface CloudFrontTooManyTrustedSigners {
        Message?: CloudFrontstring;
    }

    export interface CloudFrontTrustedSignerDoesNotExist {
        Message?: CloudFrontstring;
    }

    export interface CloudFrontTrustedSigners {
        Enabled: CloudFrontboolean;
        Quantity: CloudFrontinteger;
        Items?: CloudFrontAwsAccountNumberList;
    }

    export interface CloudFrontUpdateCloudFrontOriginAccessIdentityRequest {
        CloudFrontOriginAccessIdentityConfig: CloudFrontCloudFrontOriginAccessIdentityConfig;
        Id: CloudFrontstring;
        IfMatch?: CloudFrontstring;
    }

    export interface CloudFrontUpdateCloudFrontOriginAccessIdentityResult {
        CloudFrontOriginAccessIdentity?: CloudFrontCloudFrontOriginAccessIdentity;
        ETag?: CloudFrontstring;
    }

    export interface CloudFrontUpdateDistributionRequest {
        DistributionConfig: CloudFrontDistributionConfig;
        Id: CloudFrontstring;
        IfMatch?: CloudFrontstring;
    }

    export interface CloudFrontUpdateDistributionResult {
        Distribution?: CloudFrontDistribution;
        ETag?: CloudFrontstring;
    }

    export interface CloudFrontUpdateStreamingDistributionRequest {
        StreamingDistributionConfig: CloudFrontStreamingDistributionConfig;
        Id: CloudFrontstring;
        IfMatch?: CloudFrontstring;
    }

    export interface CloudFrontUpdateStreamingDistributionResult {
        StreamingDistribution?: CloudFrontStreamingDistribution;
        ETag?: CloudFrontstring;
    }

    export interface CloudFrontViewerCertificate {
        IAMCertificateId?: CloudFrontstring;
        CloudFrontDefaultCertificate?: CloudFrontboolean;
        SSLSupportMethod?: CloudFrontSSLSupportMethod;
        MinimumProtocolVersion?: CloudFrontMinimumProtocolVersion;
    }

    export type CloudFrontViewerProtocolPolicy = string;
    export type CloudFrontboolean = boolean;
    export type CloudFrontinteger = number;
    export type CloudFrontlong = number;
    export type CloudFrontstring = string;
    export type CloudFronttimestamp = number;
}
