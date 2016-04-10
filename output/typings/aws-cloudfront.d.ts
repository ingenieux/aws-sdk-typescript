// Type definitions for aws-sdk - Amazon CloudFront
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

// COMMENTED <reference path="./aws-sdk.d.ts" />

declare module "aws-sdk" {

  /**
    * apiVersion: 2016-01-28
    * endpointPrefix: cloudfront
    * serviceAbbreviation: CloudFront
    * signatureVersion: v4
    * protocol: rest-xml
    *
    * 
    *
    */
  export class CloudFront extends Service {
    constructor(options?: any);
    endpoint: Endpoint;
    /**
     * Create a new origin access identity.
     *
     * @error CloudFrontOriginAccessIdentityAlreadyExists   
     * @error MissingBody   
     * @error TooManyCloudFrontOriginAccessIdentities   
     * @error InvalidArgument   
     * @error InconsistentQuantities   
     */
    createCloudFrontOriginAccessIdentity(params: CloudFront.CreateCloudFrontOriginAccessIdentityRequest, callback?: (err: CloudFront.CloudFrontOriginAccessIdentityAlreadyExists | CloudFront.MissingBody | CloudFront.TooManyCloudFrontOriginAccessIdentities | CloudFront.InvalidArgument | CloudFront.InconsistentQuantities | any, data: CloudFront.CreateCloudFrontOriginAccessIdentityResult | any) => void): Request;
    /**
     * Create a new distribution.
     *
     * @error CNAMEAlreadyExists   
     * @error DistributionAlreadyExists   
     * @error InvalidOrigin   
     * @error InvalidOriginAccessIdentity   
     * @error AccessDenied   
     * @error TooManyTrustedSigners   
     * @error TrustedSignerDoesNotExist   
     * @error InvalidViewerCertificate   
     * @error InvalidMinimumProtocolVersion   
     * @error MissingBody   
     * @error TooManyDistributionCNAMEs   
     * @error TooManyDistributions   
     * @error InvalidDefaultRootObject   
     * @error InvalidRelativePath   
     * @error InvalidErrorCode   
     * @error InvalidResponseCode   
     * @error InvalidArgument   
     * @error InvalidRequiredProtocol   
     * @error NoSuchOrigin   
     * @error TooManyOrigins   
     * @error TooManyCacheBehaviors   
     * @error TooManyCookieNamesInWhiteList   
     * @error InvalidForwardCookies   
     * @error TooManyHeadersInForwardedValues   
     * @error InvalidHeadersForS3Origin   
     * @error InconsistentQuantities   
     * @error TooManyCertificates   
     * @error InvalidLocationCode   
     * @error InvalidGeoRestrictionParameter   
     * @error InvalidProtocolSettings   
     * @error InvalidTTLOrder   
     * @error InvalidWebACLId   
     * @error TooManyOriginCustomHeaders   
     */
    createDistribution(params: CloudFront.CreateDistributionRequest, callback?: (err: CloudFront.CNAMEAlreadyExists | CloudFront.DistributionAlreadyExists | CloudFront.InvalidOrigin | CloudFront.InvalidOriginAccessIdentity | CloudFront.AccessDenied | CloudFront.TooManyTrustedSigners | CloudFront.TrustedSignerDoesNotExist | CloudFront.InvalidViewerCertificate | CloudFront.InvalidMinimumProtocolVersion | CloudFront.MissingBody | CloudFront.TooManyDistributionCNAMEs | CloudFront.TooManyDistributions | CloudFront.InvalidDefaultRootObject | CloudFront.InvalidRelativePath | CloudFront.InvalidErrorCode | CloudFront.InvalidResponseCode | CloudFront.InvalidArgument | CloudFront.InvalidRequiredProtocol | CloudFront.NoSuchOrigin | CloudFront.TooManyOrigins | CloudFront.TooManyCacheBehaviors | CloudFront.TooManyCookieNamesInWhiteList | CloudFront.InvalidForwardCookies | CloudFront.TooManyHeadersInForwardedValues | CloudFront.InvalidHeadersForS3Origin | CloudFront.InconsistentQuantities | CloudFront.TooManyCertificates | CloudFront.InvalidLocationCode | CloudFront.InvalidGeoRestrictionParameter | CloudFront.InvalidProtocolSettings | CloudFront.InvalidTTLOrder | CloudFront.InvalidWebACLId | CloudFront.TooManyOriginCustomHeaders | any, data: CloudFront.CreateDistributionResult | any) => void): Request;
    /**
     * Create a new invalidation.
     *
     * @error AccessDenied   
     * @error MissingBody   
     * @error InvalidArgument   
     * @error NoSuchDistribution   
     * @error BatchTooLarge   
     * @error TooManyInvalidationsInProgress   
     * @error InconsistentQuantities   
     */
    createInvalidation(params: CloudFront.CreateInvalidationRequest, callback?: (err: CloudFront.AccessDenied | CloudFront.MissingBody | CloudFront.InvalidArgument | CloudFront.NoSuchDistribution | CloudFront.BatchTooLarge | CloudFront.TooManyInvalidationsInProgress | CloudFront.InconsistentQuantities | any, data: CloudFront.CreateInvalidationResult | any) => void): Request;
    /**
     * Create a new streaming distribution.
     *
     * @error CNAMEAlreadyExists   
     * @error StreamingDistributionAlreadyExists   
     * @error InvalidOrigin   
     * @error InvalidOriginAccessIdentity   
     * @error AccessDenied   
     * @error TooManyTrustedSigners   
     * @error TrustedSignerDoesNotExist   
     * @error MissingBody   
     * @error TooManyStreamingDistributionCNAMEs   
     * @error TooManyStreamingDistributions   
     * @error InvalidArgument   
     * @error InconsistentQuantities   
     */
    createStreamingDistribution(params: CloudFront.CreateStreamingDistributionRequest, callback?: (err: CloudFront.CNAMEAlreadyExists | CloudFront.StreamingDistributionAlreadyExists | CloudFront.InvalidOrigin | CloudFront.InvalidOriginAccessIdentity | CloudFront.AccessDenied | CloudFront.TooManyTrustedSigners | CloudFront.TrustedSignerDoesNotExist | CloudFront.MissingBody | CloudFront.TooManyStreamingDistributionCNAMEs | CloudFront.TooManyStreamingDistributions | CloudFront.InvalidArgument | CloudFront.InconsistentQuantities | any, data: CloudFront.CreateStreamingDistributionResult | any) => void): Request;
    /**
     * Delete an origin access identity.
     *
     * @error AccessDenied   
     * @error InvalidIfMatchVersion   
     * @error NoSuchCloudFrontOriginAccessIdentity   
     * @error PreconditionFailed   
     * @error CloudFrontOriginAccessIdentityInUse   
     */
    deleteCloudFrontOriginAccessIdentity(params: CloudFront.DeleteCloudFrontOriginAccessIdentityRequest, callback?: (err: CloudFront.AccessDenied | CloudFront.InvalidIfMatchVersion | CloudFront.NoSuchCloudFrontOriginAccessIdentity | CloudFront.PreconditionFailed | CloudFront.CloudFrontOriginAccessIdentityInUse | any, data: any) => void): Request;
    /**
     * Delete a distribution.
     *
     * @error AccessDenied   
     * @error DistributionNotDisabled   
     * @error InvalidIfMatchVersion   
     * @error NoSuchDistribution   
     * @error PreconditionFailed   
     */
    deleteDistribution(params: CloudFront.DeleteDistributionRequest, callback?: (err: CloudFront.AccessDenied | CloudFront.DistributionNotDisabled | CloudFront.InvalidIfMatchVersion | CloudFront.NoSuchDistribution | CloudFront.PreconditionFailed | any, data: any) => void): Request;
    /**
     * Delete a streaming distribution.
     *
     * @error AccessDenied   
     * @error StreamingDistributionNotDisabled   
     * @error InvalidIfMatchVersion   
     * @error NoSuchStreamingDistribution   
     * @error PreconditionFailed   
     */
    deleteStreamingDistribution(params: CloudFront.DeleteStreamingDistributionRequest, callback?: (err: CloudFront.AccessDenied | CloudFront.StreamingDistributionNotDisabled | CloudFront.InvalidIfMatchVersion | CloudFront.NoSuchStreamingDistribution | CloudFront.PreconditionFailed | any, data: any) => void): Request;
    /**
     * Get the information about an origin access identity.
     *
     * @error NoSuchCloudFrontOriginAccessIdentity   
     * @error AccessDenied   
     */
    getCloudFrontOriginAccessIdentity(params: CloudFront.GetCloudFrontOriginAccessIdentityRequest, callback?: (err: CloudFront.NoSuchCloudFrontOriginAccessIdentity | CloudFront.AccessDenied | any, data: CloudFront.GetCloudFrontOriginAccessIdentityResult | any) => void): Request;
    /**
     * Get the configuration information about an origin access identity.
     *
     * @error NoSuchCloudFrontOriginAccessIdentity   
     * @error AccessDenied   
     */
    getCloudFrontOriginAccessIdentityConfig(params: CloudFront.GetCloudFrontOriginAccessIdentityConfigRequest, callback?: (err: CloudFront.NoSuchCloudFrontOriginAccessIdentity | CloudFront.AccessDenied | any, data: CloudFront.GetCloudFrontOriginAccessIdentityConfigResult | any) => void): Request;
    /**
     * Get the information about a distribution.
     *
     * @error NoSuchDistribution   
     * @error AccessDenied   
     */
    getDistribution(params: CloudFront.GetDistributionRequest, callback?: (err: CloudFront.NoSuchDistribution | CloudFront.AccessDenied | any, data: CloudFront.GetDistributionResult | any) => void): Request;
    /**
     * Get the configuration information about a distribution.
     *
     * @error NoSuchDistribution   
     * @error AccessDenied   
     */
    getDistributionConfig(params: CloudFront.GetDistributionConfigRequest, callback?: (err: CloudFront.NoSuchDistribution | CloudFront.AccessDenied | any, data: CloudFront.GetDistributionConfigResult | any) => void): Request;
    /**
     * Get the information about an invalidation.
     *
     * @error NoSuchInvalidation   
     * @error NoSuchDistribution   
     * @error AccessDenied   
     */
    getInvalidation(params: CloudFront.GetInvalidationRequest, callback?: (err: CloudFront.NoSuchInvalidation | CloudFront.NoSuchDistribution | CloudFront.AccessDenied | any, data: CloudFront.GetInvalidationResult | any) => void): Request;
    /**
     * Get the information about a streaming distribution.
     *
     * @error NoSuchStreamingDistribution   
     * @error AccessDenied   
     */
    getStreamingDistribution(params: CloudFront.GetStreamingDistributionRequest, callback?: (err: CloudFront.NoSuchStreamingDistribution | CloudFront.AccessDenied | any, data: CloudFront.GetStreamingDistributionResult | any) => void): Request;
    /**
     * Get the configuration information about a streaming distribution.
     *
     * @error NoSuchStreamingDistribution   
     * @error AccessDenied   
     */
    getStreamingDistributionConfig(params: CloudFront.GetStreamingDistributionConfigRequest, callback?: (err: CloudFront.NoSuchStreamingDistribution | CloudFront.AccessDenied | any, data: CloudFront.GetStreamingDistributionConfigResult | any) => void): Request;
    /**
     * List origin access identities.
     *
     * @error InvalidArgument   
     */
    listCloudFrontOriginAccessIdentities(params: CloudFront.ListCloudFrontOriginAccessIdentitiesRequest, callback?: (err: CloudFront.InvalidArgument | any, data: CloudFront.ListCloudFrontOriginAccessIdentitiesResult | any) => void): Request;
    /**
     * List distributions.
     *
     * @error InvalidArgument   
     */
    listDistributions(params: CloudFront.ListDistributionsRequest, callback?: (err: CloudFront.InvalidArgument | any, data: CloudFront.ListDistributionsResult | any) => void): Request;
    /**
     * List the distributions that are associated with a specified AWS WAF web ACL.
     *
     * @error InvalidArgument   
     * @error InvalidWebACLId   
     */
    listDistributionsByWebACLId(params: CloudFront.ListDistributionsByWebACLIdRequest, callback?: (err: CloudFront.InvalidArgument | CloudFront.InvalidWebACLId | any, data: CloudFront.ListDistributionsByWebACLIdResult | any) => void): Request;
    /**
     * List invalidation batches.
     *
     * @error InvalidArgument   
     * @error NoSuchDistribution   
     * @error AccessDenied   
     */
    listInvalidations(params: CloudFront.ListInvalidationsRequest, callback?: (err: CloudFront.InvalidArgument | CloudFront.NoSuchDistribution | CloudFront.AccessDenied | any, data: CloudFront.ListInvalidationsResult | any) => void): Request;
    /**
     * List streaming distributions.
     *
     * @error InvalidArgument   
     */
    listStreamingDistributions(params: CloudFront.ListStreamingDistributionsRequest, callback?: (err: CloudFront.InvalidArgument | any, data: CloudFront.ListStreamingDistributionsResult | any) => void): Request;
    /**
     * Update an origin access identity.
     *
     * @error AccessDenied   
     * @error IllegalUpdate   
     * @error InvalidIfMatchVersion   
     * @error MissingBody   
     * @error NoSuchCloudFrontOriginAccessIdentity   
     * @error PreconditionFailed   
     * @error InvalidArgument   
     * @error InconsistentQuantities   
     */
    updateCloudFrontOriginAccessIdentity(params: CloudFront.UpdateCloudFrontOriginAccessIdentityRequest, callback?: (err: CloudFront.AccessDenied | CloudFront.IllegalUpdate | CloudFront.InvalidIfMatchVersion | CloudFront.MissingBody | CloudFront.NoSuchCloudFrontOriginAccessIdentity | CloudFront.PreconditionFailed | CloudFront.InvalidArgument | CloudFront.InconsistentQuantities | any, data: CloudFront.UpdateCloudFrontOriginAccessIdentityResult | any) => void): Request;
    /**
     * Update a distribution.
     *
     * @error AccessDenied   
     * @error CNAMEAlreadyExists   
     * @error IllegalUpdate   
     * @error InvalidIfMatchVersion   
     * @error MissingBody   
     * @error NoSuchDistribution   
     * @error PreconditionFailed   
     * @error TooManyDistributionCNAMEs   
     * @error InvalidDefaultRootObject   
     * @error InvalidRelativePath   
     * @error InvalidErrorCode   
     * @error InvalidResponseCode   
     * @error InvalidArgument   
     * @error InvalidOriginAccessIdentity   
     * @error TooManyTrustedSigners   
     * @error TrustedSignerDoesNotExist   
     * @error InvalidViewerCertificate   
     * @error InvalidMinimumProtocolVersion   
     * @error InvalidRequiredProtocol   
     * @error NoSuchOrigin   
     * @error TooManyOrigins   
     * @error TooManyCacheBehaviors   
     * @error TooManyCookieNamesInWhiteList   
     * @error InvalidForwardCookies   
     * @error TooManyHeadersInForwardedValues   
     * @error InvalidHeadersForS3Origin   
     * @error InconsistentQuantities   
     * @error TooManyCertificates   
     * @error InvalidLocationCode   
     * @error InvalidGeoRestrictionParameter   
     * @error InvalidTTLOrder   
     * @error InvalidWebACLId   
     * @error TooManyOriginCustomHeaders   
     */
    updateDistribution(params: CloudFront.UpdateDistributionRequest, callback?: (err: CloudFront.AccessDenied | CloudFront.CNAMEAlreadyExists | CloudFront.IllegalUpdate | CloudFront.InvalidIfMatchVersion | CloudFront.MissingBody | CloudFront.NoSuchDistribution | CloudFront.PreconditionFailed | CloudFront.TooManyDistributionCNAMEs | CloudFront.InvalidDefaultRootObject | CloudFront.InvalidRelativePath | CloudFront.InvalidErrorCode | CloudFront.InvalidResponseCode | CloudFront.InvalidArgument | CloudFront.InvalidOriginAccessIdentity | CloudFront.TooManyTrustedSigners | CloudFront.TrustedSignerDoesNotExist | CloudFront.InvalidViewerCertificate | CloudFront.InvalidMinimumProtocolVersion | CloudFront.InvalidRequiredProtocol | CloudFront.NoSuchOrigin | CloudFront.TooManyOrigins | CloudFront.TooManyCacheBehaviors | CloudFront.TooManyCookieNamesInWhiteList | CloudFront.InvalidForwardCookies | CloudFront.TooManyHeadersInForwardedValues | CloudFront.InvalidHeadersForS3Origin | CloudFront.InconsistentQuantities | CloudFront.TooManyCertificates | CloudFront.InvalidLocationCode | CloudFront.InvalidGeoRestrictionParameter | CloudFront.InvalidTTLOrder | CloudFront.InvalidWebACLId | CloudFront.TooManyOriginCustomHeaders | any, data: CloudFront.UpdateDistributionResult | any) => void): Request;
    /**
     * Update a streaming distribution.
     *
     * @error AccessDenied   
     * @error CNAMEAlreadyExists   
     * @error IllegalUpdate   
     * @error InvalidIfMatchVersion   
     * @error MissingBody   
     * @error NoSuchStreamingDistribution   
     * @error PreconditionFailed   
     * @error TooManyStreamingDistributionCNAMEs   
     * @error InvalidArgument   
     * @error InvalidOriginAccessIdentity   
     * @error TooManyTrustedSigners   
     * @error TrustedSignerDoesNotExist   
     * @error InconsistentQuantities   
     */
    updateStreamingDistribution(params: CloudFront.UpdateStreamingDistributionRequest, callback?: (err: CloudFront.AccessDenied | CloudFront.CNAMEAlreadyExists | CloudFront.IllegalUpdate | CloudFront.InvalidIfMatchVersion | CloudFront.MissingBody | CloudFront.NoSuchStreamingDistribution | CloudFront.PreconditionFailed | CloudFront.TooManyStreamingDistributionCNAMEs | CloudFront.InvalidArgument | CloudFront.InvalidOriginAccessIdentity | CloudFront.TooManyTrustedSigners | CloudFront.TrustedSignerDoesNotExist | CloudFront.InconsistentQuantities | any, data: CloudFront.UpdateStreamingDistributionResult | any) => void): Request;

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

    export type OriginList = Origin[];

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
      /** Each active trusted signer. **/
      Enabled: boolean;
      /** The number of unique trusted signers included in all cache behaviors. For
example, if three cache behaviors all list the same three AWS accounts, the
value of Quantity for ActiveTrustedSigners will be 3. **/
      Quantity: integer;
      /** A complex type that contains one Signer complex type for each unique trusted
signer that is specified in the TrustedSigners complex type, including trusted
signers in the default cache behavior and in all of the other cache behaviors. **/
      Items?: SignerList;
    }
    export interface Aliases {
      /** The number of CNAMEs, if any, for this distribution. **/
      Quantity: integer;
      /** Optional: A complex type that contains CNAME elements, if any, for this
distribution. If Quantity is 0, you can omit Items. **/
      Items?: AliasList;
    }
    export interface AllowedMethods {
      /** The number of HTTP methods that you want CloudFront to forward to your origin.
Valid values are 2 (for GET and HEAD requests), 3 (for GET, HEAD and OPTIONS
requests) and 7 (for GET, HEAD, OPTIONS, PUT, PATCH, POST, and DELETE requests). **/
      Quantity: integer;
      /** A complex type that contains the HTTP methods that you want CloudFront to
process and forward to your origin. **/
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
      /** The pattern (for example, images/&amp;#42;.jpg) that specifies which requests you want
this cache behavior to apply to. When CloudFront receives an end-user request,
the requested path is compared with path patterns in the order in which cache
behaviors are listed in the distribution. The path pattern for the default cache
behavior is * and cannot be changed. If the request for an object does not match
the path pattern for any cache behaviors, CloudFront applies the behavior in the
default cache behavior. **/
      PathPattern: string;
      /** The value of ID for the origin that you want CloudFront to route requests to
when a request matches the path pattern either for a cache behavior or for the
default cache behavior. **/
      TargetOriginId: string;
      /** A complex type that specifies how CloudFront handles query strings, cookies and
headers. **/
      ForwardedValues: ForwardedValues;
      /** A complex type that specifies the AWS accounts, if any, that you want to allow
to create signed URLs for private content. If you want to require signed URLs in
requests for objects in the target origin that match the PathPattern for this
cache behavior, specify true for Enabled, and specify the applicable values for
Quantity and Items. For more information, go to Using a Signed URL to Serve
Private Content in the Amazon CloudFront Developer Guide. If you don&#x27;t want to
require signed URLs in requests for objects that match PathPattern, specify
false for Enabled and 0 for Quantity. Omit Items. To add, change, or remove one
or more trusted signers, change Enabled to true (if it&#x27;s currently false),
change Quantity as applicable, and specify all of the trusted signers that you
want to include in the updated distribution. **/
      TrustedSigners: TrustedSigners;
      /** Use this element to specify the protocol that users can use to access the files
in the origin specified by TargetOriginId when a request matches the path
pattern in PathPattern. If you want CloudFront to allow end users to use any
available protocol, specify allow-all. If you want CloudFront to require HTTPS,
specify https. If you want CloudFront to respond to an HTTP request with an HTTP
status code of 301 (Moved Permanently) and the HTTPS URL, specify
redirect-to-https. The viewer then resubmits the request using the HTTPS URL. **/
      ViewerProtocolPolicy: ViewerProtocolPolicy;
      /** The minimum amount of time that you want objects to stay in CloudFront caches
before CloudFront queries your origin to see whether the object has been
updated.You can specify a value from 0 to 3,153,600,000 seconds (100 years). **/
      MinTTL: long;
      AllowedMethods?: AllowedMethods;
      /** Indicates whether you want to distribute media files in Microsoft Smooth
Streaming format using the origin that is associated with this cache behavior.
If so, specify true; if not, specify false. **/
      SmoothStreaming?: boolean;
      /** If you don&#x27;t configure your origin to add a Cache-Control max-age directive or
an Expires header, DefaultTTL is the default amount of time (in seconds) that an
object is in a CloudFront cache before CloudFront forwards another request to
your origin to determine whether the object has been updated. The value that you
specify applies only when your origin does not add HTTP headers such as
Cache-Control max-age, Cache-Control s-maxage, and Expires to objects. You can
specify a value from 0 to 3,153,600,000 seconds (100 years). **/
      DefaultTTL?: long;
      /** The maximum amount of time (in seconds) that an object is in a CloudFront cache
before CloudFront forwards another request to your origin to determine whether
the object has been updated. The value that you specify applies only when your
origin adds HTTP headers such as Cache-Control max-age, Cache-Control s-maxage,
and Expires to objects. You can specify a value from 0 to 3,153,600,000 seconds
(100 years). **/
      MaxTTL?: long;
      /** Whether you want CloudFront to automatically compress content for web requests
that include Accept-Encoding: gzip in the request header. If so, specify true;
if not, specify false. CloudFront compresses files larger than 1000 bytes and
less than 1 megabyte for both Amazon S3 and custom origins. When a CloudFront
edge location is unusually busy, some files might not be compressed. The value
of the Content-Type header must be on the list of file types that CloudFront
will compress. For the current list, see Serving Compressed Content
[http://docs.aws.amazon.com/console/cloudfront/compressed-content] in the Amazon
CloudFront Developer Guide. If you configure CloudFront to compress content,
CloudFront removes the ETag response header from the objects that it compresses.
The ETag header indicates that the version in a CloudFront edge cache is
identical to the version on the origin server, but after compression the two
versions are no longer identical. As a result, for compressed objects,
CloudFront can&#x27;t use the ETag header to determine whether an expired object in
the CloudFront edge cache is still the latest version. **/
      Compress?: boolean;
    }
    export interface CacheBehaviors {
      /** The number of cache behaviors for this distribution. **/
      Quantity: integer;
      /** Optional: A complex type that contains cache behaviors for this distribution. If
Quantity is 0, you can omit Items. **/
      Items?: CacheBehaviorList;
    }
    export interface CachedMethods {
      /** The number of HTTP methods for which you want CloudFront to cache responses.
Valid values are 2 (for caching responses to GET and HEAD requests) and 3 (for
caching responses to GET, HEAD, and OPTIONS requests). **/
      Quantity: integer;
      /** A complex type that contains the HTTP methods that you want CloudFront to cache
responses to. **/
      Items: MethodsList;
    }
    export interface CloudFrontOriginAccessIdentity {
      /** The ID for the origin access identity. For example: E74FTE3AJFJ256A. **/
      Id: string;
      /** The Amazon S3 canonical user ID for the origin access identity, which you use
when giving the origin access identity read permission to an object in Amazon
S3. **/
      S3CanonicalUserId: string;
      /** The current configuration information for the identity. **/
      CloudFrontOriginAccessIdentityConfig?: CloudFrontOriginAccessIdentityConfig;
    }
    export interface CloudFrontOriginAccessIdentityAlreadyExists {
      Message?: string;
    }
    export interface CloudFrontOriginAccessIdentityConfig {
      /** A unique number that ensures the request can&#x27;t be replayed. If the
CallerReference is new (no matter the content of the
CloudFrontOriginAccessIdentityConfig object), a new origin access identity is
created. If the CallerReference is a value you already sent in a previous
request to create an identity, and the content of the
CloudFrontOriginAccessIdentityConfig is identical to the original request
(ignoring white space), the response includes the same information returned to
the original request. If the CallerReference is a value you already sent in a
previous request to create an identity but the content of the
CloudFrontOriginAccessIdentityConfig is different from the original request,
CloudFront returns a CloudFrontOriginAccessIdentityAlreadyExists error. **/
      CallerReference: string;
      /** Any comments you want to include about the origin access identity. **/
      Comment: string;
    }
    export interface CloudFrontOriginAccessIdentityInUse {
      Message?: string;
    }
    export interface CloudFrontOriginAccessIdentityList {
      /** The value you provided for the Marker request parameter. **/
      Marker: string;
      /** If IsTruncated is true, this element is present and contains the value you can
use for the Marker request parameter to continue listing your origin access
identities where they left off. **/
      NextMarker?: string;
      /** The value you provided for the MaxItems request parameter. **/
      MaxItems: integer;
      /** A flag that indicates whether more origin access identities remain to be listed.
If your results were truncated, you can make a follow-up pagination request
using the Marker request parameter to retrieve more items in the list. **/
      IsTruncated: boolean;
      /** The number of CloudFront origin access identities that were created by the
current AWS account. **/
      Quantity: integer;
      /** A complex type that contains one CloudFrontOriginAccessIdentitySummary element
for each origin access identity that was created by the current AWS account. **/
      Items?: CloudFrontOriginAccessIdentitySummaryList;
    }
    export interface CloudFrontOriginAccessIdentitySummary {
      /** The ID for the origin access identity. For example: E74FTE3AJFJ256A. **/
      Id: string;
      /** The Amazon S3 canonical user ID for the origin access identity, which you use
when giving the origin access identity read permission to an object in Amazon
S3. **/
      S3CanonicalUserId: string;
      /** The comment for this origin access identity, as originally specified when
created. **/
      Comment: string;
    }
    export interface CookieNames {
      /** The number of whitelisted cookies for this cache behavior. **/
      Quantity: integer;
      /** Optional: A complex type that contains whitelisted cookies for this cache
behavior. If Quantity is 0, you can omit Items. **/
      Items?: CookieNameList;
    }
    export interface CookiePreference {
      /** Use this element to specify whether you want CloudFront to forward cookies to
the origin that is associated with this cache behavior. You can specify all,
none or whitelist. If you choose All, CloudFront forwards all cookies regardless
of how many your application uses. **/
      Forward: ItemSelection;
      /** A complex type that specifies the whitelisted cookies, if any, that you want
CloudFront to forward to your origin that is associated with this cache
behavior. **/
      WhitelistedNames?: CookieNames;
    }
    export interface CreateCloudFrontOriginAccessIdentityRequest {
      /** The origin access identity&#x27;s configuration information. **/
      CloudFrontOriginAccessIdentityConfig: CloudFrontOriginAccessIdentityConfig;
    }
    export interface CreateCloudFrontOriginAccessIdentityResult {
      /** The origin access identity&#x27;s information. **/
      CloudFrontOriginAccessIdentity?: CloudFrontOriginAccessIdentity;
      /** The fully qualified URI of the new origin access identity just created. For
example:
https://cloudfront.amazonaws.com/2010-11-01/origin-access-identity/cloudfront/E74FTE3AJFJ256A. **/
      Location?: string;
      /** The current version of the origin access identity created. **/
      ETag?: string;
    }
    export interface CreateDistributionRequest {
      /** The distribution&#x27;s configuration information. **/
      DistributionConfig: DistributionConfig;
    }
    export interface CreateDistributionResult {
      /** The distribution&#x27;s information. **/
      Distribution?: Distribution;
      /** The fully qualified URI of the new distribution resource just created. For
example:
https://cloudfront.amazonaws.com/2010-11-01/distribution/EDFDVBD632BHDS5. **/
      Location?: string;
      /** The current version of the distribution created. **/
      ETag?: string;
    }
    export interface CreateInvalidationRequest {
      /** The distribution&#x27;s id. **/
      DistributionId: string;
      /** The batch information for the invalidation. **/
      InvalidationBatch: InvalidationBatch;
    }
    export interface CreateInvalidationResult {
      /** The fully qualified URI of the distribution and invalidation batch request,
including the Invalidation ID. **/
      Location?: string;
      /** The invalidation&#x27;s information. **/
      Invalidation?: Invalidation;
    }
    export interface CreateStreamingDistributionRequest {
      /** The streaming distribution&#x27;s configuration information. **/
      StreamingDistributionConfig: StreamingDistributionConfig;
    }
    export interface CreateStreamingDistributionResult {
      /** The streaming distribution&#x27;s information. **/
      StreamingDistribution?: StreamingDistribution;
      /** The fully qualified URI of the new streaming distribution resource just created.
For example:
https://cloudfront.amazonaws.com/2010-11-01/streaming-distribution/EGTXBD79H29TRA8. **/
      Location?: string;
      /** The current version of the streaming distribution created. **/
      ETag?: string;
    }
    export interface CustomErrorResponse {
      /** The 4xx or 5xx HTTP status code that you want to customize. For a list of HTTP
status codes that you can customize, see CloudFront documentation. **/
      ErrorCode: integer;
      /** The path of the custom error page (for example, /custom_404.html). The path is
relative to the distribution and must begin with a slash (/). If the path
includes any non-ASCII characters or unsafe characters as defined in RFC 1783
(http://www.ietf.org/rfc/rfc1738.txt), URL encode those characters. Do not URL
encode any other characters in the path, or CloudFront will not return the
custom error page to the viewer. **/
      ResponsePagePath?: string;
      /** The HTTP status code that you want CloudFront to return with the custom error
page to the viewer. For a list of HTTP status codes that you can replace, see
CloudFront Documentation. **/
      ResponseCode?: string;
      /** The minimum amount of time you want HTTP error codes to stay in CloudFront
caches before CloudFront queries your origin to see whether the object has been
updated. You can specify a value from 0 to 31,536,000. **/
      ErrorCachingMinTTL?: long;
    }
    export interface CustomErrorResponses {
      /** The number of custom error responses for this distribution. **/
      Quantity: integer;
      /** Optional: A complex type that contains custom error responses for this
distribution. If Quantity is 0, you can omit Items. **/
      Items?: CustomErrorResponseList;
    }
    export interface CustomHeaders {
      /** The number of custom headers for this origin. **/
      Quantity: integer;
      /** A complex type that contains the custom headers for this Origin. **/
      Items?: OriginCustomHeadersList;
    }
    export interface CustomOriginConfig {
      /** The HTTP port the custom origin listens on. **/
      HTTPPort: integer;
      /** The HTTPS port the custom origin listens on. **/
      HTTPSPort: integer;
      /** The origin protocol policy to apply to your origin. **/
      OriginProtocolPolicy: OriginProtocolPolicy;
      /** The SSL/TLS protocols that you want CloudFront to use when communicating with
your origin over HTTPS. **/
      OriginSslProtocols?: OriginSslProtocols;
    }
    export interface DefaultCacheBehavior {
      /** The value of ID for the origin that you want CloudFront to route requests to
when a request matches the path pattern either for a cache behavior or for the
default cache behavior. **/
      TargetOriginId: string;
      /** A complex type that specifies how CloudFront handles query strings, cookies and
headers. **/
      ForwardedValues: ForwardedValues;
      /** A complex type that specifies the AWS accounts, if any, that you want to allow
to create signed URLs for private content. If you want to require signed URLs in
requests for objects in the target origin that match the PathPattern for this
cache behavior, specify true for Enabled, and specify the applicable values for
Quantity and Items. For more information, go to Using a Signed URL to Serve
Private Content in the Amazon CloudFront Developer Guide. If you don&#x27;t want to
require signed URLs in requests for objects that match PathPattern, specify
false for Enabled and 0 for Quantity. Omit Items. To add, change, or remove one
or more trusted signers, change Enabled to true (if it&#x27;s currently false),
change Quantity as applicable, and specify all of the trusted signers that you
want to include in the updated distribution. **/
      TrustedSigners: TrustedSigners;
      /** Use this element to specify the protocol that users can use to access the files
in the origin specified by TargetOriginId when a request matches the path
pattern in PathPattern. If you want CloudFront to allow end users to use any
available protocol, specify allow-all. If you want CloudFront to require HTTPS,
specify https. If you want CloudFront to respond to an HTTP request with an HTTP
status code of 301 (Moved Permanently) and the HTTPS URL, specify
redirect-to-https. The viewer then resubmits the request using the HTTPS URL. **/
      ViewerProtocolPolicy: ViewerProtocolPolicy;
      /** The minimum amount of time that you want objects to stay in CloudFront caches
before CloudFront queries your origin to see whether the object has been
updated.You can specify a value from 0 to 3,153,600,000 seconds (100 years). **/
      MinTTL: long;
      AllowedMethods?: AllowedMethods;
      /** Indicates whether you want to distribute media files in Microsoft Smooth
Streaming format using the origin that is associated with this cache behavior.
If so, specify true; if not, specify false. **/
      SmoothStreaming?: boolean;
      /** If you don&#x27;t configure your origin to add a Cache-Control max-age directive or
an Expires header, DefaultTTL is the default amount of time (in seconds) that an
object is in a CloudFront cache before CloudFront forwards another request to
your origin to determine whether the object has been updated. The value that you
specify applies only when your origin does not add HTTP headers such as
Cache-Control max-age, Cache-Control s-maxage, and Expires to objects. You can
specify a value from 0 to 3,153,600,000 seconds (100 years). **/
      DefaultTTL?: long;
      /** The maximum amount of time (in seconds) that an object is in a CloudFront cache
before CloudFront forwards another request to your origin to determine whether
the object has been updated. The value that you specify applies only when your
origin adds HTTP headers such as Cache-Control max-age, Cache-Control s-maxage,
and Expires to objects. You can specify a value from 0 to 3,153,600,000 seconds
(100 years). **/
      MaxTTL?: long;
      /** Whether you want CloudFront to automatically compress content for web requests
that include Accept-Encoding: gzip in the request header. If so, specify true;
if not, specify false. CloudFront compresses files larger than 1000 bytes and
less than 1 megabyte for both Amazon S3 and custom origins. When a CloudFront
edge location is unusually busy, some files might not be compressed. The value
of the Content-Type header must be on the list of file types that CloudFront
will compress. For the current list, see Serving Compressed Content
[http://docs.aws.amazon.com/console/cloudfront/compressed-content] in the Amazon
CloudFront Developer Guide. If you configure CloudFront to compress content,
CloudFront removes the ETag response header from the objects that it compresses.
The ETag header indicates that the version in a CloudFront edge cache is
identical to the version on the origin server, but after compression the two
versions are no longer identical. As a result, for compressed objects,
CloudFront can&#x27;t use the ETag header to determine whether an expired object in
the CloudFront edge cache is still the latest version. **/
      Compress?: boolean;
    }
    export interface DeleteCloudFrontOriginAccessIdentityRequest {
      /** The origin access identity&#x27;s id. **/
      Id: string;
      /** The value of the ETag header you received from a previous GET or PUT request.
For example: E2QWRUHAPOMQZL. **/
      IfMatch?: string;
    }
    export interface DeleteDistributionRequest {
      /** The distribution id. **/
      Id: string;
      /** The value of the ETag header you received when you disabled the distribution.
For example: E2QWRUHAPOMQZL. **/
      IfMatch?: string;
    }
    export interface DeleteStreamingDistributionRequest {
      /** The distribution id. **/
      Id: string;
      /** The value of the ETag header you received when you disabled the streaming
distribution. For example: E2QWRUHAPOMQZL. **/
      IfMatch?: string;
    }
    export interface Distribution {
      /** The identifier for the distribution. For example: EDFDVBD632BHDS5. **/
      Id: string;
      /** This response element indicates the current status of the distribution. When the
status is Deployed, the distribution&#x27;s information is fully propagated
throughout the Amazon CloudFront system. **/
      Status: string;
      /** The date and time the distribution was last modified. **/
      LastModifiedTime: timestamp;
      /** The number of invalidation batches currently in progress. **/
      InProgressInvalidationBatches: integer;
      /** The domain name corresponding to the distribution. For example:
d604721fxaaqy9.cloudfront.net. **/
      DomainName: string;
      /** CloudFront automatically adds this element to the response only if you&#x27;ve set up
the distribution to serve private content with signed URLs. The element lists
the key pair IDs that CloudFront is aware of for each trusted signer. The Signer
child element lists the AWS account number of the trusted signer (or an empty
Self element if the signer is you). The Signer element also includes the IDs of
any active key pairs associated with the trusted signer&#x27;s AWS account. If no
KeyPairId element appears for a Signer, that signer can&#x27;t create working signed
URLs. **/
      ActiveTrustedSigners: ActiveTrustedSigners;
      /** The current configuration information for the distribution. **/
      DistributionConfig: DistributionConfig;
    }
    export interface DistributionAlreadyExists {
      Message?: string;
    }
    export interface DistributionConfig {
      /** A unique number that ensures the request can&#x27;t be replayed. If the
CallerReference is new (no matter the content of the DistributionConfig object),
a new distribution is created. If the CallerReference is a value you already
sent in a previous request to create a distribution, and the content of the
DistributionConfig is identical to the original request (ignoring white space),
the response includes the same information returned to the original request. If
the CallerReference is a value you already sent in a previous request to create
a distribution but the content of the DistributionConfig is different from the
original request, CloudFront returns a DistributionAlreadyExists error. **/
      CallerReference: string;
      /** A complex type that contains information about CNAMEs (alternate domain names),
if any, for this distribution. **/
      Aliases?: Aliases;
      /** The object that you want CloudFront to return (for example, index.html) when an
end user requests the root URL for your distribution (http://www.example.com)
instead of an object in your distribution (http://www.example.com/index.html).
Specifying a default root object avoids exposing the contents of your
distribution. If you don&#x27;t want to specify a default root object when you create
a distribution, include an empty DefaultRootObject element. To delete the
default root object from an existing distribution, update the distribution
configuration and include an empty DefaultRootObject element. To replace the
default root object, update the distribution configuration and specify the new
object. **/
      DefaultRootObject?: string;
      /** A complex type that contains information about origins for this distribution. **/
      Origins: Origins;
      /** A complex type that describes the default cache behavior if you do not specify a
CacheBehavior element or if files don&#x27;t match any of the values of PathPattern
in CacheBehavior elements.You must create exactly one default cache behavior. **/
      DefaultCacheBehavior: DefaultCacheBehavior;
      /** A complex type that contains zero or more CacheBehavior elements. **/
      CacheBehaviors?: CacheBehaviors;
      /** A complex type that contains zero or more CustomErrorResponse elements. **/
      CustomErrorResponses?: CustomErrorResponses;
      /** Any comments you want to include about the distribution. **/
      Comment: string;
      /** A complex type that controls whether access logs are written for the
distribution. **/
      Logging?: LoggingConfig;
      /** A complex type that contains information about price class for this
distribution. **/
      PriceClass?: PriceClass;
      /** Whether the distribution is enabled to accept end user requests for content. **/
      Enabled: boolean;
      ViewerCertificate?: ViewerCertificate;
      Restrictions?: Restrictions;
      /** (Optional) If you&#x27;re using AWS WAF to filter CloudFront requests, the Id of the
AWS WAF web ACL that is associated with the distribution. **/
      WebACLId?: string;
    }
    export interface DistributionList {
      /** The value you provided for the Marker request parameter. **/
      Marker: string;
      /** If IsTruncated is true, this element is present and contains the value you can
use for the Marker request parameter to continue listing your distributions
where they left off. **/
      NextMarker?: string;
      /** The value you provided for the MaxItems request parameter. **/
      MaxItems: integer;
      /** A flag that indicates whether more distributions remain to be listed. If your
results were truncated, you can make a follow-up pagination request using the
Marker request parameter to retrieve more distributions in the list. **/
      IsTruncated: boolean;
      /** The number of distributions that were created by the current AWS account. **/
      Quantity: integer;
      /** A complex type that contains one DistributionSummary element for each
distribution that was created by the current AWS account. **/
      Items?: DistributionSummaryList;
    }
    export interface DistributionNotDisabled {
      Message?: string;
    }
    export interface DistributionSummary {
      /** The identifier for the distribution. For example: EDFDVBD632BHDS5. **/
      Id: string;
      /** This response element indicates the current status of the distribution. When the
status is Deployed, the distribution&#x27;s information is fully propagated
throughout the Amazon CloudFront system. **/
      Status: string;
      /** The date and time the distribution was last modified. **/
      LastModifiedTime: timestamp;
      /** The domain name corresponding to the distribution. For example:
d604721fxaaqy9.cloudfront.net. **/
      DomainName: string;
      /** A complex type that contains information about CNAMEs (alternate domain names),
if any, for this distribution. **/
      Aliases: Aliases;
      /** A complex type that contains information about origins for this distribution. **/
      Origins: Origins;
      /** A complex type that describes the default cache behavior if you do not specify a
CacheBehavior element or if files don&#x27;t match any of the values of PathPattern
in CacheBehavior elements.You must create exactly one default cache behavior. **/
      DefaultCacheBehavior: DefaultCacheBehavior;
      /** A complex type that contains zero or more CacheBehavior elements. **/
      CacheBehaviors: CacheBehaviors;
      /** A complex type that contains zero or more CustomErrorResponses elements. **/
      CustomErrorResponses: CustomErrorResponses;
      /** The comment originally specified when this distribution was created. **/
      Comment: string;
      PriceClass: PriceClass;
      /** Whether the distribution is enabled to accept end user requests for content. **/
      Enabled: boolean;
      ViewerCertificate: ViewerCertificate;
      Restrictions: Restrictions;
      /** The Web ACL Id (if any) associated with the distribution. **/
      WebACLId: string;
    }
    export interface ForwardedValues {
      /** Indicates whether you want CloudFront to forward query strings to the origin
that is associated with this cache behavior. If so, specify true; if not,
specify false. **/
      QueryString: boolean;
      /** A complex type that specifies how CloudFront handles cookies. **/
      Cookies: CookiePreference;
      /** A complex type that specifies the Headers, if any, that you want CloudFront to
vary upon for this cache behavior. **/
      Headers?: Headers;
    }
    export interface GeoRestriction {
      /** The method that you want to use to restrict distribution of your content by
country: - none: No geo restriction is enabled, meaning access to content is not
restricted by client geo location. - blacklist: The Location elements specify
the countries in which you do not want CloudFront to distribute your content. -
whitelist: The Location elements specify the countries in which you want
CloudFront to distribute your content. **/
      RestrictionType: GeoRestrictionType;
      /** When geo restriction is enabled, this is the number of countries in your
whitelist or blacklist. Otherwise, when it is not enabled, Quantity is 0, and
you can omit Items. **/
      Quantity: integer;
      /** A complex type that contains a Location element for each country in which you
want CloudFront either to distribute your content (whitelist) or not distribute
your content (blacklist). The Location element is a two-letter, uppercase
country code for a country that you want to include in your blacklist or
whitelist. Include one Location element for each country. CloudFront and MaxMind
both use ISO 3166 country codes. For the current list of countries and the
corresponding codes, see ISO 3166-1-alpha-2 code on the International
Organization for Standardization website. You can also refer to the country list
in the CloudFront console, which includes both country names and codes. **/
      Items?: LocationList;
    }
    export interface GetCloudFrontOriginAccessIdentityConfigRequest {
      /** The identity&#x27;s id. **/
      Id: string;
    }
    export interface GetCloudFrontOriginAccessIdentityConfigResult {
      /** The origin access identity&#x27;s configuration information. **/
      CloudFrontOriginAccessIdentityConfig?: CloudFrontOriginAccessIdentityConfig;
      /** The current version of the configuration. For example: E2QWRUHAPOMQZL. **/
      ETag?: string;
    }
    export interface GetCloudFrontOriginAccessIdentityRequest {
      /** The identity&#x27;s id. **/
      Id: string;
    }
    export interface GetCloudFrontOriginAccessIdentityResult {
      /** The origin access identity&#x27;s information. **/
      CloudFrontOriginAccessIdentity?: CloudFrontOriginAccessIdentity;
      /** The current version of the origin access identity&#x27;s information. For example:
E2QWRUHAPOMQZL. **/
      ETag?: string;
    }
    export interface GetDistributionConfigRequest {
      /** The distribution&#x27;s id. **/
      Id: string;
    }
    export interface GetDistributionConfigResult {
      /** The distribution&#x27;s configuration information. **/
      DistributionConfig?: DistributionConfig;
      /** The current version of the configuration. For example: E2QWRUHAPOMQZL. **/
      ETag?: string;
    }
    export interface GetDistributionRequest {
      /** The distribution&#x27;s id. **/
      Id: string;
    }
    export interface GetDistributionResult {
      /** The distribution&#x27;s information. **/
      Distribution?: Distribution;
      /** The current version of the distribution&#x27;s information. For example:
E2QWRUHAPOMQZL. **/
      ETag?: string;
    }
    export interface GetInvalidationRequest {
      /** The distribution&#x27;s id. **/
      DistributionId: string;
      /** The invalidation&#x27;s id. **/
      Id: string;
    }
    export interface GetInvalidationResult {
      /** The invalidation&#x27;s information. **/
      Invalidation?: Invalidation;
    }
    export interface GetStreamingDistributionConfigRequest {
      /** The streaming distribution&#x27;s id. **/
      Id: string;
    }
    export interface GetStreamingDistributionConfigResult {
      /** The streaming distribution&#x27;s configuration information. **/
      StreamingDistributionConfig?: StreamingDistributionConfig;
      /** The current version of the configuration. For example: E2QWRUHAPOMQZL. **/
      ETag?: string;
    }
    export interface GetStreamingDistributionRequest {
      /** The streaming distribution&#x27;s id. **/
      Id: string;
    }
    export interface GetStreamingDistributionResult {
      /** The streaming distribution&#x27;s information. **/
      StreamingDistribution?: StreamingDistribution;
      /** The current version of the streaming distribution&#x27;s information. For example:
E2QWRUHAPOMQZL. **/
      ETag?: string;
    }
    export interface Headers {
      /** The number of different headers that you want CloudFront to forward to the
origin and to vary on for this cache behavior. The maximum number of headers
that you can specify by name is 10. If you want CloudFront to forward all
headers to the origin and vary on all of them, specify 1 for Quantity and &amp;#42; for
Name. If you don&#x27;t want CloudFront to forward any additional headers to the
origin or to vary on any headers, specify 0 for Quantity and omit Items. **/
      Quantity: integer;
      /** Optional: A complex type that contains a Name element for each header that you
want CloudFront to forward to the origin and to vary on for this cache behavior.
If Quantity is 0, omit Items. **/
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
      /** The identifier for the invalidation request. For example: IDFDVBD632BHDS5. **/
      Id: string;
      /** The status of the invalidation request. When the invalidation batch is finished,
the status is Completed. **/
      Status: string;
      /** The date and time the invalidation request was first made. **/
      CreateTime: timestamp;
      /** The current invalidation information for the batch request. **/
      InvalidationBatch: InvalidationBatch;
    }
    export interface InvalidationBatch {
      /** The path of the object to invalidate. The path is relative to the distribution
and must begin with a slash (/). You must enclose each invalidation object with
the Path element tags. If the path includes non-ASCII characters or unsafe
characters as defined in RFC 1783 (http://www.ietf.org/rfc/rfc1738.txt), URL
encode those characters. Do not URL encode any other characters in the path, or
CloudFront will not invalidate the old version of the updated object. **/
      Paths: Paths;
      /** A unique name that ensures the request can&#x27;t be replayed. If the CallerReference
is new (no matter the content of the Path object), a new distribution is
created. If the CallerReference is a value you already sent in a previous
request to create an invalidation batch, and the content of each Path element is
identical to the original request, the response includes the same information
returned to the original request. If the CallerReference is a value you already
sent in a previous request to create a distribution but the content of any Path
is different from the original request, CloudFront returns an
InvalidationBatchAlreadyExists error. **/
      CallerReference: string;
    }
    export interface InvalidationList {
      /** The value you provided for the Marker request parameter. **/
      Marker: string;
      /** If IsTruncated is true, this element is present and contains the value you can
use for the Marker request parameter to continue listing your invalidation
batches where they left off. **/
      NextMarker?: string;
      /** The value you provided for the MaxItems request parameter. **/
      MaxItems: integer;
      /** A flag that indicates whether more invalidation batch requests remain to be
listed. If your results were truncated, you can make a follow-up pagination
request using the Marker request parameter to retrieve more invalidation batches
in the list. **/
      IsTruncated: boolean;
      /** The number of invalidation batches that were created by the current AWS account. **/
      Quantity: integer;
      /** A complex type that contains one InvalidationSummary element for each
invalidation batch that was created by the current AWS account. **/
      Items?: InvalidationSummaryList;
    }
    export interface InvalidationSummary {
      /** The unique ID for an invalidation request. **/
      Id: string;
      CreateTime: timestamp;
      /** The status of an invalidation request. **/
      Status: string;
    }
    export interface KeyPairIds {
      /** The number of active CloudFront key pairs for AwsAccountNumber. **/
      Quantity: integer;
      /** A complex type that lists the active CloudFront key pairs, if any, that are
associated with AwsAccountNumber. **/
      Items?: KeyPairIdList;
    }
    export interface ListCloudFrontOriginAccessIdentitiesRequest {
      /** Use this when paginating results to indicate where to begin in your list of
origin access identities. The results include identities in the list that occur
after the marker. To get the next page of results, set the Marker to the value
of the NextMarker from the current page&#x27;s response (which is also the ID of the
last identity on that page). **/
      Marker?: string;
      /** The maximum number of origin access identities you want in the response body. **/
      MaxItems?: string;
    }
    export interface ListCloudFrontOriginAccessIdentitiesResult {
      /** The CloudFrontOriginAccessIdentityList type. **/
      CloudFrontOriginAccessIdentityList?: CloudFrontOriginAccessIdentityList;
    }
    export interface ListDistributionsByWebACLIdRequest {
      /** Use Marker and MaxItems to control pagination of results. If you have more than
MaxItems distributions that satisfy the request, the response includes a
NextMarker element. To get the next page of results, submit another request. For
the value of Marker, specify the value of NextMarker from the last response.
(For the first request, omit Marker.) **/
      Marker?: string;
      /** The maximum number of distributions that you want CloudFront to return in the
response body. The maximum and default values are both 100. **/
      MaxItems?: string;
      /** The Id of the AWS WAF web ACL for which you want to list the associated
distributions. If you specify &quot;null&quot; for the Id, the request returns a list of
the distributions that aren&#x27;t associated with a web ACL. **/
      WebACLId: string;
    }
    export interface ListDistributionsByWebACLIdResult {
      /** The DistributionList type. **/
      DistributionList?: DistributionList;
    }
    export interface ListDistributionsRequest {
      /** Use Marker and MaxItems to control pagination of results. If you have more than
MaxItems distributions that satisfy the request, the response includes a
NextMarker element. To get the next page of results, submit another request. For
the value of Marker, specify the value of NextMarker from the last response.
(For the first request, omit Marker.) **/
      Marker?: string;
      /** The maximum number of distributions that you want CloudFront to return in the
response body. The maximum and default values are both 100. **/
      MaxItems?: string;
    }
    export interface ListDistributionsResult {
      /** The DistributionList type. **/
      DistributionList?: DistributionList;
    }
    export interface ListInvalidationsRequest {
      /** The distribution&#x27;s id. **/
      DistributionId: string;
      /** Use this parameter when paginating results to indicate where to begin in your
list of invalidation batches. Because the results are returned in decreasing
order from most recent to oldest, the most recent results are on the first page,
the second page will contain earlier results, and so on. To get the next page of
results, set the Marker to the value of the NextMarker from the current page&#x27;s
response. This value is the same as the ID of the last invalidation batch on
that page. **/
      Marker?: string;
      /** The maximum number of invalidation batches you want in the response body. **/
      MaxItems?: string;
    }
    export interface ListInvalidationsResult {
      /** Information about invalidation batches. **/
      InvalidationList?: InvalidationList;
    }
    export interface ListStreamingDistributionsRequest {
      /** Use this when paginating results to indicate where to begin in your list of
streaming distributions. The results include distributions in the list that
occur after the marker. To get the next page of results, set the Marker to the
value of the NextMarker from the current page&#x27;s response (which is also the ID
of the last distribution on that page). **/
      Marker?: string;
      /** The maximum number of streaming distributions you want in the response body. **/
      MaxItems?: string;
    }
    export interface ListStreamingDistributionsResult {
      /** The StreamingDistributionList type. **/
      StreamingDistributionList?: StreamingDistributionList;
    }
    export interface LoggingConfig {
      /** Specifies whether you want CloudFront to save access logs to an Amazon S3
bucket. If you do not want to enable logging when you create a distribution or
if you want to disable logging for an existing distribution, specify false for
Enabled, and specify empty Bucket and Prefix elements. If you specify false for
Enabled but you specify values for Bucket, prefix and IncludeCookies, the values
are automatically deleted. **/
      Enabled: boolean;
      /** Specifies whether you want CloudFront to include cookies in access logs, specify
true for IncludeCookies. If you choose to include cookies in logs, CloudFront
logs all cookies regardless of how you configure the cache behaviors for this
distribution. If you do not want to include cookies when you create a
distribution or if you want to disable include cookies for an existing
distribution, specify false for IncludeCookies. **/
      IncludeCookies: boolean;
      /** The Amazon S3 bucket to store the access logs in, for example,
myawslogbucket.s3.amazonaws.com. **/
      Bucket: string;
      /** An optional string that you want CloudFront to prefix to the access log
filenames for this distribution, for example, myprefix/. If you want to enable
logging, but you do not want to specify a prefix, you still must include an
empty Prefix element in the Logging element. **/
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
      /** A unique identifier for the origin. The value of Id must be unique within the
distribution. You use the value of Id when you create a cache behavior. The Id
identifies the origin that CloudFront routes a request to when the request
matches the path pattern for that cache behavior. **/
      Id: string;
      /** Amazon S3 origins: The DNS name of the Amazon S3 bucket from which you want
CloudFront to get objects for this origin, for example,
myawsbucket.s3.amazonaws.com. Custom origins: The DNS domain name for the HTTP
server from which you want CloudFront to get objects for this origin, for
example, www.example.com. **/
      DomainName: string;
      /** An optional element that causes CloudFront to request your content from a
directory in your Amazon S3 bucket or your custom origin. When you include the
OriginPath element, specify the directory name, beginning with a /. CloudFront
appends the directory name to the value of DomainName. **/
      OriginPath?: string;
      /** A complex type that contains information about the custom headers associated
with this Origin. **/
      CustomHeaders?: CustomHeaders;
      /** A complex type that contains information about the Amazon S3 origin. If the
origin is a custom origin, use the CustomOriginConfig element instead. **/
      S3OriginConfig?: S3OriginConfig;
      /** A complex type that contains information about a custom origin. If the origin is
an Amazon S3 bucket, use the S3OriginConfig element instead. **/
      CustomOriginConfig?: CustomOriginConfig;
    }
    export interface OriginCustomHeader {
      /** The header&#x27;s name. **/
      HeaderName: string;
      /** The header&#x27;s value. **/
      HeaderValue: string;
    }
    export interface OriginSslProtocols {
      /** The number of SSL/TLS protocols that you want to allow CloudFront to use when
establishing an HTTPS connection with this origin. **/
      Quantity: integer;
      /** A complex type that contains one SslProtocol element for each SSL/TLS protocol
that you want to allow CloudFront to use when establishing an HTTPS connection
with this origin. **/
      Items: SslProtocolsList;
    }
    export interface Origins {
      /** The number of origins for this distribution. **/
      Quantity: integer;
      /** A complex type that contains origins for this distribution. **/
      Items?: OriginList;
    }
    export interface Paths {
      /** The number of objects that you want to invalidate. **/
      Quantity: integer;
      /** A complex type that contains a list of the objects that you want to invalidate. **/
      Items?: PathList;
    }
    export interface PreconditionFailed {
      Message?: string;
    }
    export interface Restrictions {
      GeoRestriction: GeoRestriction;
    }
    export interface S3Origin {
      /** The DNS name of the S3 origin. **/
      DomainName: string;
      /** Your S3 origin&#x27;s origin access identity. **/
      OriginAccessIdentity: string;
    }
    export interface S3OriginConfig {
      /** The CloudFront origin access identity to associate with the origin. Use an
origin access identity to configure the origin so that end users can only access
objects in an Amazon S3 bucket through CloudFront. If you want end users to be
able to access objects using either the CloudFront URL or the Amazon S3 URL,
specify an empty OriginAccessIdentity element. To delete the origin access
identity from an existing distribution, update the distribution configuration
and include an empty OriginAccessIdentity element. To replace the origin access
identity, update the distribution configuration and specify the new origin
access identity. Use the format origin-access-identity/cloudfront/Id where Id is
the value that CloudFront returned in the Id element when you created the origin
access identity. **/
      OriginAccessIdentity: string;
    }
    export interface Signer {
      /** Specifies an AWS account that can create signed URLs. Values: self, which
indicates that the AWS account that was used to create the distribution can
created signed URLs, or an AWS account number. Omit the dashes in the account
number. **/
      AwsAccountNumber?: string;
      /** A complex type that lists the active CloudFront key pairs, if any, that are
associated with AwsAccountNumber. **/
      KeyPairIds?: KeyPairIds;
    }
    export interface StreamingDistribution {
      /** The identifier for the streaming distribution. For example: EGTXBD79H29TRA8. **/
      Id: string;
      /** The current status of the streaming distribution. When the status is Deployed,
the distribution&#x27;s information is fully propagated throughout the Amazon
CloudFront system. **/
      Status: string;
      /** The date and time the distribution was last modified. **/
      LastModifiedTime?: timestamp;
      /** The domain name corresponding to the streaming distribution. For example:
s5c39gqb8ow64r.cloudfront.net. **/
      DomainName: string;
      /** CloudFront automatically adds this element to the response only if you&#x27;ve set up
the distribution to serve private content with signed URLs. The element lists
the key pair IDs that CloudFront is aware of for each trusted signer. The Signer
child element lists the AWS account number of the trusted signer (or an empty
Self element if the signer is you). The Signer element also includes the IDs of
any active key pairs associated with the trusted signer&#x27;s AWS account. If no
KeyPairId element appears for a Signer, that signer can&#x27;t create working signed
URLs. **/
      ActiveTrustedSigners: ActiveTrustedSigners;
      /** The current configuration information for the streaming distribution. **/
      StreamingDistributionConfig: StreamingDistributionConfig;
    }
    export interface StreamingDistributionAlreadyExists {
      Message?: string;
    }
    export interface StreamingDistributionConfig {
      /** A unique number that ensures the request can&#x27;t be replayed. If the
CallerReference is new (no matter the content of the StreamingDistributionConfig
object), a new streaming distribution is created. If the CallerReference is a
value you already sent in a previous request to create a streaming distribution,
and the content of the StreamingDistributionConfig is identical to the original
request (ignoring white space), the response includes the same information
returned to the original request. If the CallerReference is a value you already
sent in a previous request to create a streaming distribution but the content of
the StreamingDistributionConfig is different from the original request,
CloudFront returns a DistributionAlreadyExists error. **/
      CallerReference: string;
      /** A complex type that contains information about the Amazon S3 bucket from which
you want CloudFront to get your media files for distribution. **/
      S3Origin: S3Origin;
      /** A complex type that contains information about CNAMEs (alternate domain names),
if any, for this streaming distribution. **/
      Aliases?: Aliases;
      /** Any comments you want to include about the streaming distribution. **/
      Comment: string;
      /** A complex type that controls whether access logs are written for the streaming
distribution. **/
      Logging?: StreamingLoggingConfig;
      /** A complex type that specifies the AWS accounts, if any, that you want to allow
to create signed URLs for private content. If you want to require signed URLs in
requests for objects in the target origin that match the PathPattern for this
cache behavior, specify true for Enabled, and specify the applicable values for
Quantity and Items. For more information, go to Using a Signed URL to Serve
Private Content in the Amazon CloudFront Developer Guide. If you don&#x27;t want to
require signed URLs in requests for objects that match PathPattern, specify
false for Enabled and 0 for Quantity. Omit Items. To add, change, or remove one
or more trusted signers, change Enabled to true (if it&#x27;s currently false),
change Quantity as applicable, and specify all of the trusted signers that you
want to include in the updated distribution. **/
      TrustedSigners: TrustedSigners;
      /** A complex type that contains information about price class for this streaming
distribution. **/
      PriceClass?: PriceClass;
      /** Whether the streaming distribution is enabled to accept end user requests for
content. **/
      Enabled: boolean;
    }
    export interface StreamingDistributionList {
      /** The value you provided for the Marker request parameter. **/
      Marker: string;
      /** If IsTruncated is true, this element is present and contains the value you can
use for the Marker request parameter to continue listing your streaming
distributions where they left off. **/
      NextMarker?: string;
      /** The value you provided for the MaxItems request parameter. **/
      MaxItems: integer;
      /** A flag that indicates whether more streaming distributions remain to be listed.
If your results were truncated, you can make a follow-up pagination request
using the Marker request parameter to retrieve more distributions in the list. **/
      IsTruncated: boolean;
      /** The number of streaming distributions that were created by the current AWS
account. **/
      Quantity: integer;
      /** A complex type that contains one StreamingDistributionSummary element for each
distribution that was created by the current AWS account. **/
      Items?: StreamingDistributionSummaryList;
    }
    export interface StreamingDistributionNotDisabled {
      Message?: string;
    }
    export interface StreamingDistributionSummary {
      /** The identifier for the distribution. For example: EDFDVBD632BHDS5. **/
      Id: string;
      /** Indicates the current status of the distribution. When the status is Deployed,
the distribution&#x27;s information is fully propagated throughout the Amazon
CloudFront system. **/
      Status: string;
      /** The date and time the distribution was last modified. **/
      LastModifiedTime: timestamp;
      /** The domain name corresponding to the distribution. For example:
d604721fxaaqy9.cloudfront.net. **/
      DomainName: string;
      /** A complex type that contains information about the Amazon S3 bucket from which
you want CloudFront to get your media files for distribution. **/
      S3Origin: S3Origin;
      /** A complex type that contains information about CNAMEs (alternate domain names),
if any, for this streaming distribution. **/
      Aliases: Aliases;
      /** A complex type that specifies the AWS accounts, if any, that you want to allow
to create signed URLs for private content. If you want to require signed URLs in
requests for objects in the target origin that match the PathPattern for this
cache behavior, specify true for Enabled, and specify the applicable values for
Quantity and Items. For more information, go to Using a Signed URL to Serve
Private Content in the Amazon CloudFront Developer Guide. If you don&#x27;t want to
require signed URLs in requests for objects that match PathPattern, specify
false for Enabled and 0 for Quantity. Omit Items. To add, change, or remove one
or more trusted signers, change Enabled to true (if it&#x27;s currently false),
change Quantity as applicable, and specify all of the trusted signers that you
want to include in the updated distribution. **/
      TrustedSigners: TrustedSigners;
      /** The comment originally specified when this distribution was created. **/
      Comment: string;
      PriceClass: PriceClass;
      /** Whether the distribution is enabled to accept end user requests for content. **/
      Enabled: boolean;
    }
    export interface StreamingLoggingConfig {
      /** Specifies whether you want CloudFront to save access logs to an Amazon S3
bucket. If you do not want to enable logging when you create a streaming
distribution or if you want to disable logging for an existing streaming
distribution, specify false for Enabled, and specify empty Bucket and Prefix
elements. If you specify false for Enabled but you specify values for Bucket and
Prefix, the values are automatically deleted. **/
      Enabled: boolean;
      /** The Amazon S3 bucket to store the access logs in, for example,
myawslogbucket.s3.amazonaws.com. **/
      Bucket: string;
      /** An optional string that you want CloudFront to prefix to the access log
filenames for this streaming distribution, for example, myprefix/. If you want
to enable logging, but you do not want to specify a prefix, you still must
include an empty Prefix element in the Logging element. **/
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
      /** Specifies whether you want to require end users to use signed URLs to access the
files specified by PathPattern and TargetOriginId. **/
      Enabled: boolean;
      /** The number of trusted signers for this cache behavior. **/
      Quantity: integer;
      /** Optional: A complex type that contains trusted signers for this cache behavior.
If Quantity is 0, you can omit Items. **/
      Items?: AwsAccountNumberList;
    }
    export interface UpdateCloudFrontOriginAccessIdentityRequest {
      /** The identity&#x27;s configuration information. **/
      CloudFrontOriginAccessIdentityConfig: CloudFrontOriginAccessIdentityConfig;
      /** The identity&#x27;s id. **/
      Id: string;
      /** The value of the ETag header you received when retrieving the identity&#x27;s
configuration. For example: E2QWRUHAPOMQZL. **/
      IfMatch?: string;
    }
    export interface UpdateCloudFrontOriginAccessIdentityResult {
      /** The origin access identity&#x27;s information. **/
      CloudFrontOriginAccessIdentity?: CloudFrontOriginAccessIdentity;
      /** The current version of the configuration. For example: E2QWRUHAPOMQZL. **/
      ETag?: string;
    }
    export interface UpdateDistributionRequest {
      /** The distribution&#x27;s configuration information. **/
      DistributionConfig: DistributionConfig;
      /** The distribution&#x27;s id. **/
      Id: string;
      /** The value of the ETag header you received when retrieving the distribution&#x27;s
configuration. For example: E2QWRUHAPOMQZL. **/
      IfMatch?: string;
    }
    export interface UpdateDistributionResult {
      /** The distribution&#x27;s information. **/
      Distribution?: Distribution;
      /** The current version of the configuration. For example: E2QWRUHAPOMQZL. **/
      ETag?: string;
    }
    export interface UpdateStreamingDistributionRequest {
      /** The streaming distribution&#x27;s configuration information. **/
      StreamingDistributionConfig: StreamingDistributionConfig;
      /** The streaming distribution&#x27;s id. **/
      Id: string;
      /** The value of the ETag header you received when retrieving the streaming
distribution&#x27;s configuration. For example: E2QWRUHAPOMQZL. **/
      IfMatch?: string;
    }
    export interface UpdateStreamingDistributionResult {
      /** The streaming distribution&#x27;s information. **/
      StreamingDistribution?: StreamingDistribution;
      /** The current version of the configuration. For example: E2QWRUHAPOMQZL. **/
      ETag?: string;
    }
    export interface ViewerCertificate {
      /** If you want viewers to use HTTPS to request your objects and you&#x27;re using the
CloudFront domain name of your distribution in your object URLs (for example,
https://d111111abcdef8.cloudfront.net/logo.jpg), set to true. Omit this value if
you are setting an ACMCertificateArn or IAMCertificateId. **/
      CloudFrontDefaultCertificate?: boolean;
      /** If you want viewers to use HTTPS to request your objects and you&#x27;re using an
alternate domain name in your object URLs (for example,
https://example.com/logo.jpg), specify the IAM certificate identifier of the
custom viewer certificate for this distribution. Specify either this value,
ACMCertificateArn, or CloudFrontDefaultCertificate. **/
      IAMCertificateId?: string;
      /** If you want viewers to use HTTPS to request your objects and you&#x27;re using an
alternate domain name in your object URLs (for example,
https://example.com/logo.jpg), specify the ACM certificate ARN of the custom
viewer certificate for this distribution. Specify either this value,
IAMCertificateId, or CloudFrontDefaultCertificate. **/
      ACMCertificateArn?: string;
      /** If you specify a value for IAMCertificateId, you must also specify how you want
CloudFront to serve HTTPS requests. Valid values are vip and sni-only. If you
specify vip, CloudFront uses dedicated IP addresses for your content and can
respond to HTTPS requests from any viewer. However, you must request permission
to use this feature, and you incur additional monthly charges. If you specify
sni-only, CloudFront can only respond to HTTPS requests from viewers that
support Server Name Indication (SNI). All modern browsers support SNI, but some
browsers still in use don&#x27;t support SNI. Do not specify a value for
SSLSupportMethod if you specified true for CloudFrontDefaultCertificate. **/
      SSLSupportMethod?: SSLSupportMethod;
      /** Specify the minimum version of the SSL protocol that you want CloudFront to use,
SSLv3 or TLSv1, for HTTPS connections. CloudFront will serve your objects only
to browsers or devices that support at least the SSL version that you specify.
The TLSv1 protocol is more secure, so we recommend that you specify SSLv3 only
if your users are using browsers or devices that don&#x27;t support TLSv1. If you&#x27;re
using a custom certificate (if you specify a value for IAMCertificateId) and if
you&#x27;re using dedicated IP (if you specify vip for SSLSupportMethod), you can
choose SSLv3 or TLSv1 as the MinimumProtocolVersion. If you&#x27;re using a custom
certificate (if you specify a value for IAMCertificateId) and if you&#x27;re using
SNI (if you specify sni-only for SSLSupportMethod), you must specify TLSv1 for
MinimumProtocolVersion. **/
      MinimumProtocolVersion?: MinimumProtocolVersion;
      /** Note: this field is deprecated. Please use one of [ACMCertificateArn,
IAMCertificateId, CloudFrontDefaultCertificate]. **/
      Certificate?: string;
      /** Note: this field is deprecated. Please use one of [ACMCertificateArn,
IAMCertificateId, CloudFrontDefaultCertificate]. **/
      CertificateSource?: CertificateSource;
    }
  }
}
