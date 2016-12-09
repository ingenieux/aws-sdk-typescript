// Type definitions for aws-sdk - Amazon CloudFront
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

// COMMENTED <reference path="./aws-sdk.d.ts" />

declare module "aws-sdk" {

 /**
   * apiVersion: 2016-11-25
   * endpointPrefix: cloudfront
   * serviceAbbreviation: CloudFront
   * signatureVersion: v4
   * protocol: rest-xml
   *
   * Amazon CloudFrontThis is the Amazon CloudFront API Reference . This guide is for developers who
need detailed information about the CloudFront API actions, data types, and
errors. For detailed information about CloudFront features and their associated
API calls, see the Amazon CloudFront Developer Guide .
   *
   */
  export class CloudFront extends Service {
    constructor(options?: any);
    endpoint: Endpoint;
    /**
     * Creates a new origin access identity. If you&#x27;re using Amazon S3 for your origin,
you can use an origin access identity to require users to access your content
using a CloudFront URL instead of the Amazon S3 URL. For more information about
how to use origin access identities, see Serving Private Content through
CloudFront
[http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html] 
in the Amazon CloudFront Developer Guide .
     *
     * @error CloudFrontOriginAccessIdentityAlreadyExists   
     * @error MissingBody   
     * @error TooManyCloudFrontOriginAccessIdentities   
     * @error InvalidArgument   
     * @error InconsistentQuantities   
     */
    createCloudFrontOriginAccessIdentity(params: CloudFront.CreateCloudFrontOriginAccessIdentityRequest, callback?: (err: CloudFront.CloudFrontOriginAccessIdentityAlreadyExists|CloudFront.MissingBody|CloudFront.TooManyCloudFrontOriginAccessIdentities|CloudFront.InvalidArgument|CloudFront.InconsistentQuantities|any, data: CloudFront.CreateCloudFrontOriginAccessIdentityResult|any) => void): Request<CloudFront.CreateCloudFrontOriginAccessIdentityResult|any,CloudFront.CloudFrontOriginAccessIdentityAlreadyExists|CloudFront.MissingBody|CloudFront.TooManyCloudFrontOriginAccessIdentities|CloudFront.InvalidArgument|CloudFront.InconsistentQuantities|any>;
    /**
     * Creates a new web distribution. Send a GET request to the / CloudFront API
version /distribution / distribution ID resource.
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
     * @error TooManyQueryStringParameters   
     * @error InvalidQueryStringParameters   
     * @error TooManyDistributionsWithLambdaAssociations   
     * @error TooManyLambdaFunctionAssociations   
     * @error InvalidLambdaFunctionAssociation   
     */
    createDistribution(params: CloudFront.CreateDistributionRequest, callback?: (err: CloudFront.CNAMEAlreadyExists|CloudFront.DistributionAlreadyExists|CloudFront.InvalidOrigin|CloudFront.InvalidOriginAccessIdentity|CloudFront.AccessDenied|CloudFront.TooManyTrustedSigners|CloudFront.TrustedSignerDoesNotExist|CloudFront.InvalidViewerCertificate|CloudFront.InvalidMinimumProtocolVersion|CloudFront.MissingBody|CloudFront.TooManyDistributionCNAMEs|CloudFront.TooManyDistributions|CloudFront.InvalidDefaultRootObject|CloudFront.InvalidRelativePath|CloudFront.InvalidErrorCode|CloudFront.InvalidResponseCode|CloudFront.InvalidArgument|CloudFront.InvalidRequiredProtocol|CloudFront.NoSuchOrigin|CloudFront.TooManyOrigins|CloudFront.TooManyCacheBehaviors|CloudFront.TooManyCookieNamesInWhiteList|CloudFront.InvalidForwardCookies|CloudFront.TooManyHeadersInForwardedValues|CloudFront.InvalidHeadersForS3Origin|CloudFront.InconsistentQuantities|CloudFront.TooManyCertificates|CloudFront.InvalidLocationCode|CloudFront.InvalidGeoRestrictionParameter|CloudFront.InvalidProtocolSettings|CloudFront.InvalidTTLOrder|CloudFront.InvalidWebACLId|CloudFront.TooManyOriginCustomHeaders|CloudFront.TooManyQueryStringParameters|CloudFront.InvalidQueryStringParameters|CloudFront.TooManyDistributionsWithLambdaAssociations|CloudFront.TooManyLambdaFunctionAssociations|CloudFront.InvalidLambdaFunctionAssociation|any, data: CloudFront.CreateDistributionResult|any) => void): Request<CloudFront.CreateDistributionResult|any,CloudFront.CNAMEAlreadyExists|CloudFront.DistributionAlreadyExists|CloudFront.InvalidOrigin|CloudFront.InvalidOriginAccessIdentity|CloudFront.AccessDenied|CloudFront.TooManyTrustedSigners|CloudFront.TrustedSignerDoesNotExist|CloudFront.InvalidViewerCertificate|CloudFront.InvalidMinimumProtocolVersion|CloudFront.MissingBody|CloudFront.TooManyDistributionCNAMEs|CloudFront.TooManyDistributions|CloudFront.InvalidDefaultRootObject|CloudFront.InvalidRelativePath|CloudFront.InvalidErrorCode|CloudFront.InvalidResponseCode|CloudFront.InvalidArgument|CloudFront.InvalidRequiredProtocol|CloudFront.NoSuchOrigin|CloudFront.TooManyOrigins|CloudFront.TooManyCacheBehaviors|CloudFront.TooManyCookieNamesInWhiteList|CloudFront.InvalidForwardCookies|CloudFront.TooManyHeadersInForwardedValues|CloudFront.InvalidHeadersForS3Origin|CloudFront.InconsistentQuantities|CloudFront.TooManyCertificates|CloudFront.InvalidLocationCode|CloudFront.InvalidGeoRestrictionParameter|CloudFront.InvalidProtocolSettings|CloudFront.InvalidTTLOrder|CloudFront.InvalidWebACLId|CloudFront.TooManyOriginCustomHeaders|CloudFront.TooManyQueryStringParameters|CloudFront.InvalidQueryStringParameters|CloudFront.TooManyDistributionsWithLambdaAssociations|CloudFront.TooManyLambdaFunctionAssociations|CloudFront.InvalidLambdaFunctionAssociation|any>;
    /**
     * Create a new distribution with tags.
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
     * @error InvalidTagging   
     * @error TooManyQueryStringParameters   
     * @error InvalidQueryStringParameters   
     * @error TooManyDistributionsWithLambdaAssociations   
     * @error TooManyLambdaFunctionAssociations   
     * @error InvalidLambdaFunctionAssociation   
     */
    createDistributionWithTags(params: CloudFront.CreateDistributionWithTagsRequest, callback?: (err: CloudFront.CNAMEAlreadyExists|CloudFront.DistributionAlreadyExists|CloudFront.InvalidOrigin|CloudFront.InvalidOriginAccessIdentity|CloudFront.AccessDenied|CloudFront.TooManyTrustedSigners|CloudFront.TrustedSignerDoesNotExist|CloudFront.InvalidViewerCertificate|CloudFront.InvalidMinimumProtocolVersion|CloudFront.MissingBody|CloudFront.TooManyDistributionCNAMEs|CloudFront.TooManyDistributions|CloudFront.InvalidDefaultRootObject|CloudFront.InvalidRelativePath|CloudFront.InvalidErrorCode|CloudFront.InvalidResponseCode|CloudFront.InvalidArgument|CloudFront.InvalidRequiredProtocol|CloudFront.NoSuchOrigin|CloudFront.TooManyOrigins|CloudFront.TooManyCacheBehaviors|CloudFront.TooManyCookieNamesInWhiteList|CloudFront.InvalidForwardCookies|CloudFront.TooManyHeadersInForwardedValues|CloudFront.InvalidHeadersForS3Origin|CloudFront.InconsistentQuantities|CloudFront.TooManyCertificates|CloudFront.InvalidLocationCode|CloudFront.InvalidGeoRestrictionParameter|CloudFront.InvalidProtocolSettings|CloudFront.InvalidTTLOrder|CloudFront.InvalidWebACLId|CloudFront.TooManyOriginCustomHeaders|CloudFront.InvalidTagging|CloudFront.TooManyQueryStringParameters|CloudFront.InvalidQueryStringParameters|CloudFront.TooManyDistributionsWithLambdaAssociations|CloudFront.TooManyLambdaFunctionAssociations|CloudFront.InvalidLambdaFunctionAssociation|any, data: CloudFront.CreateDistributionWithTagsResult|any) => void): Request<CloudFront.CreateDistributionWithTagsResult|any,CloudFront.CNAMEAlreadyExists|CloudFront.DistributionAlreadyExists|CloudFront.InvalidOrigin|CloudFront.InvalidOriginAccessIdentity|CloudFront.AccessDenied|CloudFront.TooManyTrustedSigners|CloudFront.TrustedSignerDoesNotExist|CloudFront.InvalidViewerCertificate|CloudFront.InvalidMinimumProtocolVersion|CloudFront.MissingBody|CloudFront.TooManyDistributionCNAMEs|CloudFront.TooManyDistributions|CloudFront.InvalidDefaultRootObject|CloudFront.InvalidRelativePath|CloudFront.InvalidErrorCode|CloudFront.InvalidResponseCode|CloudFront.InvalidArgument|CloudFront.InvalidRequiredProtocol|CloudFront.NoSuchOrigin|CloudFront.TooManyOrigins|CloudFront.TooManyCacheBehaviors|CloudFront.TooManyCookieNamesInWhiteList|CloudFront.InvalidForwardCookies|CloudFront.TooManyHeadersInForwardedValues|CloudFront.InvalidHeadersForS3Origin|CloudFront.InconsistentQuantities|CloudFront.TooManyCertificates|CloudFront.InvalidLocationCode|CloudFront.InvalidGeoRestrictionParameter|CloudFront.InvalidProtocolSettings|CloudFront.InvalidTTLOrder|CloudFront.InvalidWebACLId|CloudFront.TooManyOriginCustomHeaders|CloudFront.InvalidTagging|CloudFront.TooManyQueryStringParameters|CloudFront.InvalidQueryStringParameters|CloudFront.TooManyDistributionsWithLambdaAssociations|CloudFront.TooManyLambdaFunctionAssociations|CloudFront.InvalidLambdaFunctionAssociation|any>;
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
    createInvalidation(params: CloudFront.CreateInvalidationRequest, callback?: (err: CloudFront.AccessDenied|CloudFront.MissingBody|CloudFront.InvalidArgument|CloudFront.NoSuchDistribution|CloudFront.BatchTooLarge|CloudFront.TooManyInvalidationsInProgress|CloudFront.InconsistentQuantities|any, data: CloudFront.CreateInvalidationResult|any) => void): Request<CloudFront.CreateInvalidationResult|any,CloudFront.AccessDenied|CloudFront.MissingBody|CloudFront.InvalidArgument|CloudFront.NoSuchDistribution|CloudFront.BatchTooLarge|CloudFront.TooManyInvalidationsInProgress|CloudFront.InconsistentQuantities|any>;
    /**
     * Creates a new RMTP distribution. An RTMP distribution is similar to a web
distribution, but an RTMP distribution streams media files using the Adobe
Real-Time Messaging Protocol (RTMP) instead of serving files using HTTP.

To create a new web distribution, submit a POST request to the CloudFront API
version /distribution resource. The request body must include a document with a 
StreamingDistributionConfig element. The response echoes the 
StreamingDistributionConfig element and returns other information about the RTMP
distribution.

To get the status of your request, use the GET StreamingDistribution API action.
When the value of Enabled is true and the value of Status is Deployed , your
distribution is ready. A distribution usually deploys in less than 15 minutes.

For more information about web distributions, see Working with RTMP
Distributions
[http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-rtmp.html] 
in the Amazon CloudFront Developer Guide .

Beginning with the 2012-05-05 version of the CloudFront API, we made substantial
changes to the format of the XML document that you include in the request body
when you create or update a web distribution or an RTMP distribution, and when
you invalidate objects. With previous versions of the API, we discovered that it
was too easy to accidentally delete one or more values for an element that
accepts multiple values, for example, CNAMEs and trusted signers. Our changes
for the 2012-05-05 release are intended to prevent these accidental deletions
and to notify you when there&#x27;s a mismatch between the number of values you say
you&#x27;re specifying in the Quantity element and the number of values specified.
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
    createStreamingDistribution(params: CloudFront.CreateStreamingDistributionRequest, callback?: (err: CloudFront.CNAMEAlreadyExists|CloudFront.StreamingDistributionAlreadyExists|CloudFront.InvalidOrigin|CloudFront.InvalidOriginAccessIdentity|CloudFront.AccessDenied|CloudFront.TooManyTrustedSigners|CloudFront.TrustedSignerDoesNotExist|CloudFront.MissingBody|CloudFront.TooManyStreamingDistributionCNAMEs|CloudFront.TooManyStreamingDistributions|CloudFront.InvalidArgument|CloudFront.InconsistentQuantities|any, data: CloudFront.CreateStreamingDistributionResult|any) => void): Request<CloudFront.CreateStreamingDistributionResult|any,CloudFront.CNAMEAlreadyExists|CloudFront.StreamingDistributionAlreadyExists|CloudFront.InvalidOrigin|CloudFront.InvalidOriginAccessIdentity|CloudFront.AccessDenied|CloudFront.TooManyTrustedSigners|CloudFront.TrustedSignerDoesNotExist|CloudFront.MissingBody|CloudFront.TooManyStreamingDistributionCNAMEs|CloudFront.TooManyStreamingDistributions|CloudFront.InvalidArgument|CloudFront.InconsistentQuantities|any>;
    /**
     * Create a new streaming distribution with tags.
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
     * @error InvalidTagging   
     */
    createStreamingDistributionWithTags(params: CloudFront.CreateStreamingDistributionWithTagsRequest, callback?: (err: CloudFront.CNAMEAlreadyExists|CloudFront.StreamingDistributionAlreadyExists|CloudFront.InvalidOrigin|CloudFront.InvalidOriginAccessIdentity|CloudFront.AccessDenied|CloudFront.TooManyTrustedSigners|CloudFront.TrustedSignerDoesNotExist|CloudFront.MissingBody|CloudFront.TooManyStreamingDistributionCNAMEs|CloudFront.TooManyStreamingDistributions|CloudFront.InvalidArgument|CloudFront.InconsistentQuantities|CloudFront.InvalidTagging|any, data: CloudFront.CreateStreamingDistributionWithTagsResult|any) => void): Request<CloudFront.CreateStreamingDistributionWithTagsResult|any,CloudFront.CNAMEAlreadyExists|CloudFront.StreamingDistributionAlreadyExists|CloudFront.InvalidOrigin|CloudFront.InvalidOriginAccessIdentity|CloudFront.AccessDenied|CloudFront.TooManyTrustedSigners|CloudFront.TrustedSignerDoesNotExist|CloudFront.MissingBody|CloudFront.TooManyStreamingDistributionCNAMEs|CloudFront.TooManyStreamingDistributions|CloudFront.InvalidArgument|CloudFront.InconsistentQuantities|CloudFront.InvalidTagging|any>;
    /**
     * Delete an origin access identity.
     *
     * @error AccessDenied   
     * @error InvalidIfMatchVersion   
     * @error NoSuchCloudFrontOriginAccessIdentity   
     * @error PreconditionFailed   
     * @error CloudFrontOriginAccessIdentityInUse   
     */
    deleteCloudFrontOriginAccessIdentity(params: CloudFront.DeleteCloudFrontOriginAccessIdentityRequest, callback?: (err: CloudFront.AccessDenied|CloudFront.InvalidIfMatchVersion|CloudFront.NoSuchCloudFrontOriginAccessIdentity|CloudFront.PreconditionFailed|CloudFront.CloudFrontOriginAccessIdentityInUse|any, data: any) => void): Request<any,CloudFront.AccessDenied|CloudFront.InvalidIfMatchVersion|CloudFront.NoSuchCloudFrontOriginAccessIdentity|CloudFront.PreconditionFailed|CloudFront.CloudFrontOriginAccessIdentityInUse|any>;
    /**
     * Delete a distribution.
     *
     * @error AccessDenied   
     * @error DistributionNotDisabled   
     * @error InvalidIfMatchVersion   
     * @error NoSuchDistribution   
     * @error PreconditionFailed   
     */
    deleteDistribution(params: CloudFront.DeleteDistributionRequest, callback?: (err: CloudFront.AccessDenied|CloudFront.DistributionNotDisabled|CloudFront.InvalidIfMatchVersion|CloudFront.NoSuchDistribution|CloudFront.PreconditionFailed|any, data: any) => void): Request<any,CloudFront.AccessDenied|CloudFront.DistributionNotDisabled|CloudFront.InvalidIfMatchVersion|CloudFront.NoSuchDistribution|CloudFront.PreconditionFailed|any>;
    /**
     * Delete a streaming distribution. To delete an RTMP distribution using the
CloudFront API, perform the following steps.

To delete an RTMP distribution using the CloudFront API :

 1. Disable the RTMP distribution.
    
    
 2. Submit a GET Streaming Distribution Config request to get the current
    configuration and the Etag header for the distribution.
    
    
 3. Update the XML document that was returned in the response to your GET
    Streaming Distribution Config request to change the value of Enabled to 
    false .
    
    
 4. Submit a PUT Streaming Distribution Config request to update the
    configuration for your distribution. In the request body, include the XML
    document that you updated in Step 3. Then set the value of the HTTP If-Match 
    header to the value of the ETag header that CloudFront returned when you
    submitted the GET Streaming Distribution Config request in Step 2.
    
    
 5. Review the response to the PUT Streaming Distribution Config request to
    confirm that the distribution was successfully disabled.
    
    
 6. Submit a GET Streaming Distribution Config request to confirm that your
    changes have propagated. When propagation is complete, the value of Status 
    is Deployed .
    
    
 7. Submit a DELETE Streaming Distribution request. Set the value of the HTTP 
    If-Match header to the value of the ETag header that CloudFront returned
    when you submitted the GET Streaming Distribution Config request in Step 2.
    
    
 8. Review the response to your DELETE Streaming Distribution request to confirm
    that the distribution was successfully deleted.
    
    

For information about deleting a distribution using the CloudFront console, see 
Deleting a Distribution
[http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/HowToDeleteDistribution.html] 
in the Amazon CloudFront Developer Guide .
     *
     * @error AccessDenied   
     * @error StreamingDistributionNotDisabled   
     * @error InvalidIfMatchVersion   
     * @error NoSuchStreamingDistribution   
     * @error PreconditionFailed   
     */
    deleteStreamingDistribution(params: CloudFront.DeleteStreamingDistributionRequest, callback?: (err: CloudFront.AccessDenied|CloudFront.StreamingDistributionNotDisabled|CloudFront.InvalidIfMatchVersion|CloudFront.NoSuchStreamingDistribution|CloudFront.PreconditionFailed|any, data: any) => void): Request<any,CloudFront.AccessDenied|CloudFront.StreamingDistributionNotDisabled|CloudFront.InvalidIfMatchVersion|CloudFront.NoSuchStreamingDistribution|CloudFront.PreconditionFailed|any>;
    /**
     * Get the information about an origin access identity.
     *
     * @error NoSuchCloudFrontOriginAccessIdentity   
     * @error AccessDenied   
     */
    getCloudFrontOriginAccessIdentity(params: CloudFront.GetCloudFrontOriginAccessIdentityRequest, callback?: (err: CloudFront.NoSuchCloudFrontOriginAccessIdentity|CloudFront.AccessDenied|any, data: CloudFront.GetCloudFrontOriginAccessIdentityResult|any) => void): Request<CloudFront.GetCloudFrontOriginAccessIdentityResult|any,CloudFront.NoSuchCloudFrontOriginAccessIdentity|CloudFront.AccessDenied|any>;
    /**
     * Get the configuration information about an origin access identity.
     *
     * @error NoSuchCloudFrontOriginAccessIdentity   
     * @error AccessDenied   
     */
    getCloudFrontOriginAccessIdentityConfig(params: CloudFront.GetCloudFrontOriginAccessIdentityConfigRequest, callback?: (err: CloudFront.NoSuchCloudFrontOriginAccessIdentity|CloudFront.AccessDenied|any, data: CloudFront.GetCloudFrontOriginAccessIdentityConfigResult|any) => void): Request<CloudFront.GetCloudFrontOriginAccessIdentityConfigResult|any,CloudFront.NoSuchCloudFrontOriginAccessIdentity|CloudFront.AccessDenied|any>;
    /**
     * Get the information about a distribution.
     *
     * @error NoSuchDistribution   
     * @error AccessDenied   
     */
    getDistribution(params: CloudFront.GetDistributionRequest, callback?: (err: CloudFront.NoSuchDistribution|CloudFront.AccessDenied|any, data: CloudFront.GetDistributionResult|any) => void): Request<CloudFront.GetDistributionResult|any,CloudFront.NoSuchDistribution|CloudFront.AccessDenied|any>;
    /**
     * Get the configuration information about a distribution.
     *
     * @error NoSuchDistribution   
     * @error AccessDenied   
     */
    getDistributionConfig(params: CloudFront.GetDistributionConfigRequest, callback?: (err: CloudFront.NoSuchDistribution|CloudFront.AccessDenied|any, data: CloudFront.GetDistributionConfigResult|any) => void): Request<CloudFront.GetDistributionConfigResult|any,CloudFront.NoSuchDistribution|CloudFront.AccessDenied|any>;
    /**
     * Get the information about an invalidation.
     *
     * @error NoSuchInvalidation   
     * @error NoSuchDistribution   
     * @error AccessDenied   
     */
    getInvalidation(params: CloudFront.GetInvalidationRequest, callback?: (err: CloudFront.NoSuchInvalidation|CloudFront.NoSuchDistribution|CloudFront.AccessDenied|any, data: CloudFront.GetInvalidationResult|any) => void): Request<CloudFront.GetInvalidationResult|any,CloudFront.NoSuchInvalidation|CloudFront.NoSuchDistribution|CloudFront.AccessDenied|any>;
    /**
     * Gets information about a specified RTMP distribution, including the distribution
configuration.
     *
     * @error NoSuchStreamingDistribution   
     * @error AccessDenied   
     */
    getStreamingDistribution(params: CloudFront.GetStreamingDistributionRequest, callback?: (err: CloudFront.NoSuchStreamingDistribution|CloudFront.AccessDenied|any, data: CloudFront.GetStreamingDistributionResult|any) => void): Request<CloudFront.GetStreamingDistributionResult|any,CloudFront.NoSuchStreamingDistribution|CloudFront.AccessDenied|any>;
    /**
     * Get the configuration information about a streaming distribution.
     *
     * @error NoSuchStreamingDistribution   
     * @error AccessDenied   
     */
    getStreamingDistributionConfig(params: CloudFront.GetStreamingDistributionConfigRequest, callback?: (err: CloudFront.NoSuchStreamingDistribution|CloudFront.AccessDenied|any, data: CloudFront.GetStreamingDistributionConfigResult|any) => void): Request<CloudFront.GetStreamingDistributionConfigResult|any,CloudFront.NoSuchStreamingDistribution|CloudFront.AccessDenied|any>;
    /**
     * Lists origin access identities.
     *
     * @error InvalidArgument   
     */
    listCloudFrontOriginAccessIdentities(params: CloudFront.ListCloudFrontOriginAccessIdentitiesRequest, callback?: (err: CloudFront.InvalidArgument|any, data: CloudFront.ListCloudFrontOriginAccessIdentitiesResult|any) => void): Request<CloudFront.ListCloudFrontOriginAccessIdentitiesResult|any,CloudFront.InvalidArgument|any>;
    /**
     * List distributions.
     *
     * @error InvalidArgument   
     */
    listDistributions(params: CloudFront.ListDistributionsRequest, callback?: (err: CloudFront.InvalidArgument|any, data: CloudFront.ListDistributionsResult|any) => void): Request<CloudFront.ListDistributionsResult|any,CloudFront.InvalidArgument|any>;
    /**
     * List the distributions that are associated with a specified AWS WAF web ACL.
     *
     * @error InvalidArgument   
     * @error InvalidWebACLId   
     */
    listDistributionsByWebACLId(params: CloudFront.ListDistributionsByWebACLIdRequest, callback?: (err: CloudFront.InvalidArgument|CloudFront.InvalidWebACLId|any, data: CloudFront.ListDistributionsByWebACLIdResult|any) => void): Request<CloudFront.ListDistributionsByWebACLIdResult|any,CloudFront.InvalidArgument|CloudFront.InvalidWebACLId|any>;
    /**
     * Lists invalidation batches.
     *
     * @error InvalidArgument   
     * @error NoSuchDistribution   
     * @error AccessDenied   
     */
    listInvalidations(params: CloudFront.ListInvalidationsRequest, callback?: (err: CloudFront.InvalidArgument|CloudFront.NoSuchDistribution|CloudFront.AccessDenied|any, data: CloudFront.ListInvalidationsResult|any) => void): Request<CloudFront.ListInvalidationsResult|any,CloudFront.InvalidArgument|CloudFront.NoSuchDistribution|CloudFront.AccessDenied|any>;
    /**
     * List streaming distributions.
     *
     * @error InvalidArgument   
     */
    listStreamingDistributions(params: CloudFront.ListStreamingDistributionsRequest, callback?: (err: CloudFront.InvalidArgument|any, data: CloudFront.ListStreamingDistributionsResult|any) => void): Request<CloudFront.ListStreamingDistributionsResult|any,CloudFront.InvalidArgument|any>;
    /**
     * List tags for a CloudFront resource.
     *
     * @error AccessDenied   
     * @error InvalidArgument   
     * @error InvalidTagging   
     * @error NoSuchResource   
     */
    listTagsForResource(params: CloudFront.ListTagsForResourceRequest, callback?: (err: CloudFront.AccessDenied|CloudFront.InvalidArgument|CloudFront.InvalidTagging|CloudFront.NoSuchResource|any, data: CloudFront.ListTagsForResourceResult|any) => void): Request<CloudFront.ListTagsForResourceResult|any,CloudFront.AccessDenied|CloudFront.InvalidArgument|CloudFront.InvalidTagging|CloudFront.NoSuchResource|any>;
    /**
     * Add tags to a CloudFront resource.
     *
     * @error AccessDenied   
     * @error InvalidArgument   
     * @error InvalidTagging   
     * @error NoSuchResource   
     */
    tagResource(params: CloudFront.TagResourceRequest, callback?: (err: CloudFront.AccessDenied|CloudFront.InvalidArgument|CloudFront.InvalidTagging|CloudFront.NoSuchResource|any, data: any) => void): Request<any,CloudFront.AccessDenied|CloudFront.InvalidArgument|CloudFront.InvalidTagging|CloudFront.NoSuchResource|any>;
    /**
     * Remove tags from a CloudFront resource.
     *
     * @error AccessDenied   
     * @error InvalidArgument   
     * @error InvalidTagging   
     * @error NoSuchResource   
     */
    untagResource(params: CloudFront.UntagResourceRequest, callback?: (err: CloudFront.AccessDenied|CloudFront.InvalidArgument|CloudFront.InvalidTagging|CloudFront.NoSuchResource|any, data: any) => void): Request<any,CloudFront.AccessDenied|CloudFront.InvalidArgument|CloudFront.InvalidTagging|CloudFront.NoSuchResource|any>;
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
    updateCloudFrontOriginAccessIdentity(params: CloudFront.UpdateCloudFrontOriginAccessIdentityRequest, callback?: (err: CloudFront.AccessDenied|CloudFront.IllegalUpdate|CloudFront.InvalidIfMatchVersion|CloudFront.MissingBody|CloudFront.NoSuchCloudFrontOriginAccessIdentity|CloudFront.PreconditionFailed|CloudFront.InvalidArgument|CloudFront.InconsistentQuantities|any, data: CloudFront.UpdateCloudFrontOriginAccessIdentityResult|any) => void): Request<CloudFront.UpdateCloudFrontOriginAccessIdentityResult|any,CloudFront.AccessDenied|CloudFront.IllegalUpdate|CloudFront.InvalidIfMatchVersion|CloudFront.MissingBody|CloudFront.NoSuchCloudFrontOriginAccessIdentity|CloudFront.PreconditionFailed|CloudFront.InvalidArgument|CloudFront.InconsistentQuantities|any>;
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
     * @error TooManyQueryStringParameters   
     * @error InvalidQueryStringParameters   
     * @error TooManyDistributionsWithLambdaAssociations   
     * @error TooManyLambdaFunctionAssociations   
     * @error InvalidLambdaFunctionAssociation   
     */
    updateDistribution(params: CloudFront.UpdateDistributionRequest, callback?: (err: CloudFront.AccessDenied|CloudFront.CNAMEAlreadyExists|CloudFront.IllegalUpdate|CloudFront.InvalidIfMatchVersion|CloudFront.MissingBody|CloudFront.NoSuchDistribution|CloudFront.PreconditionFailed|CloudFront.TooManyDistributionCNAMEs|CloudFront.InvalidDefaultRootObject|CloudFront.InvalidRelativePath|CloudFront.InvalidErrorCode|CloudFront.InvalidResponseCode|CloudFront.InvalidArgument|CloudFront.InvalidOriginAccessIdentity|CloudFront.TooManyTrustedSigners|CloudFront.TrustedSignerDoesNotExist|CloudFront.InvalidViewerCertificate|CloudFront.InvalidMinimumProtocolVersion|CloudFront.InvalidRequiredProtocol|CloudFront.NoSuchOrigin|CloudFront.TooManyOrigins|CloudFront.TooManyCacheBehaviors|CloudFront.TooManyCookieNamesInWhiteList|CloudFront.InvalidForwardCookies|CloudFront.TooManyHeadersInForwardedValues|CloudFront.InvalidHeadersForS3Origin|CloudFront.InconsistentQuantities|CloudFront.TooManyCertificates|CloudFront.InvalidLocationCode|CloudFront.InvalidGeoRestrictionParameter|CloudFront.InvalidTTLOrder|CloudFront.InvalidWebACLId|CloudFront.TooManyOriginCustomHeaders|CloudFront.TooManyQueryStringParameters|CloudFront.InvalidQueryStringParameters|CloudFront.TooManyDistributionsWithLambdaAssociations|CloudFront.TooManyLambdaFunctionAssociations|CloudFront.InvalidLambdaFunctionAssociation|any, data: CloudFront.UpdateDistributionResult|any) => void): Request<CloudFront.UpdateDistributionResult|any,CloudFront.AccessDenied|CloudFront.CNAMEAlreadyExists|CloudFront.IllegalUpdate|CloudFront.InvalidIfMatchVersion|CloudFront.MissingBody|CloudFront.NoSuchDistribution|CloudFront.PreconditionFailed|CloudFront.TooManyDistributionCNAMEs|CloudFront.InvalidDefaultRootObject|CloudFront.InvalidRelativePath|CloudFront.InvalidErrorCode|CloudFront.InvalidResponseCode|CloudFront.InvalidArgument|CloudFront.InvalidOriginAccessIdentity|CloudFront.TooManyTrustedSigners|CloudFront.TrustedSignerDoesNotExist|CloudFront.InvalidViewerCertificate|CloudFront.InvalidMinimumProtocolVersion|CloudFront.InvalidRequiredProtocol|CloudFront.NoSuchOrigin|CloudFront.TooManyOrigins|CloudFront.TooManyCacheBehaviors|CloudFront.TooManyCookieNamesInWhiteList|CloudFront.InvalidForwardCookies|CloudFront.TooManyHeadersInForwardedValues|CloudFront.InvalidHeadersForS3Origin|CloudFront.InconsistentQuantities|CloudFront.TooManyCertificates|CloudFront.InvalidLocationCode|CloudFront.InvalidGeoRestrictionParameter|CloudFront.InvalidTTLOrder|CloudFront.InvalidWebACLId|CloudFront.TooManyOriginCustomHeaders|CloudFront.TooManyQueryStringParameters|CloudFront.InvalidQueryStringParameters|CloudFront.TooManyDistributionsWithLambdaAssociations|CloudFront.TooManyLambdaFunctionAssociations|CloudFront.InvalidLambdaFunctionAssociation|any>;
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
    updateStreamingDistribution(params: CloudFront.UpdateStreamingDistributionRequest, callback?: (err: CloudFront.AccessDenied|CloudFront.CNAMEAlreadyExists|CloudFront.IllegalUpdate|CloudFront.InvalidIfMatchVersion|CloudFront.MissingBody|CloudFront.NoSuchStreamingDistribution|CloudFront.PreconditionFailed|CloudFront.TooManyStreamingDistributionCNAMEs|CloudFront.InvalidArgument|CloudFront.InvalidOriginAccessIdentity|CloudFront.TooManyTrustedSigners|CloudFront.TrustedSignerDoesNotExist|CloudFront.InconsistentQuantities|any, data: CloudFront.UpdateStreamingDistributionResult|any) => void): Request<CloudFront.UpdateStreamingDistributionResult|any,CloudFront.AccessDenied|CloudFront.CNAMEAlreadyExists|CloudFront.IllegalUpdate|CloudFront.InvalidIfMatchVersion|CloudFront.MissingBody|CloudFront.NoSuchStreamingDistribution|CloudFront.PreconditionFailed|CloudFront.TooManyStreamingDistributionCNAMEs|CloudFront.InvalidArgument|CloudFront.InvalidOriginAccessIdentity|CloudFront.TooManyTrustedSigners|CloudFront.TrustedSignerDoesNotExist|CloudFront.InconsistentQuantities|any>;

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
    
    export type EventType = string;
    
    export type GeoRestrictionType = string;
    
    export type HeaderList = string[];
    
    export type HttpVersion = string;
    
    export type InvalidationSummaryList = InvalidationSummary[];
    
    export type ItemSelection = string;
    
    export type KeyPairIdList = string[];
    
    export type LambdaFunctionAssociationList = LambdaFunctionAssociation[];
    
    export type LocationList = string[];
    
    export type Method = string;
    
    export type MethodsList = Method[];
    
    export type MinimumProtocolVersion = string;
    
    export type OriginCustomHeadersList = OriginCustomHeader[];
    
    export type OriginList = Origin[];
    
    export type OriginProtocolPolicy = string;
    
    export type PathList = string[];
    
    export type PriceClass = string;
    
    export type QueryStringCacheKeysList = string[];
    
    export type ResourceARN = string;
    
    export type SSLSupportMethod = string;
    
    export type SignerList = Signer[];
    
    export type SslProtocol = string;
    
    export type SslProtocolsList = SslProtocol[];
    
    export type StreamingDistributionSummaryList = StreamingDistributionSummary[];
    
    export type TagKey = string;
    
    export type TagKeyList = TagKey[];
    
    export type TagList = Tag[];
    
    export type TagValue = string;
    
    export type ViewerProtocolPolicy = string;
    
    export type integer = number;
    
    export type long = number;
    
    export type timestamp = number;

    export interface AccessDenied {
        Message?: string;
    }
    export interface ActiveTrustedSigners {
        /** Enabled is true if any of the AWS accounts listed in the TrustedSigners complex
type for this RTMP distribution have active CloudFront key pairs. If not, 
Enabled is false .

For more information, see ActiveTrustedSigners . **/
        Enabled: boolean;
        /** A complex type that contains one Signer complex type for each trusted signer
specified in the TrustedSigners complex type.

For more information, see ActiveTrustedSigners . **/
        Quantity: integer;
        /** A complex type that contains one Signer complex type for each trusted signer
that is specified in the TrustedSigners complex type.

For more information, see ActiveTrustedSigners . **/
        Items?: SignerList;
    }
    export interface Aliases {
        /** The number of CNAME aliases, if any, that you want to associate with this
distribution. **/
        Quantity: integer;
        /** A complex type that contains the CNAME aliases, if any, that you want to
associate with this distribution. **/
        Items?: AliasList;
    }
    export interface AllowedMethods {
        /** The number of HTTP methods that you want CloudFront to forward to your origin.
Valid values are 2 (for GET and HEAD requests), 3 (for GET , HEAD , and OPTIONS 
requests) and 7 (for GET, HEAD, OPTIONS, PUT, PATCH, POST , and DELETE 
requests). **/
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
        /** The pattern (for example, images/&amp;#42;.jpg ) that specifies which requests to apply
the behavior to. When CloudFront receives a viewer request, the requested path
is compared with path patterns in the order in which cache behaviors are listed
in the distribution.

You can optionally include a slash ( / ) at the beginning of the path pattern.
For example, /images/*.jpg . CloudFront behavior is the same with or without the
leading / .

The path pattern for the default cache behavior is * and cannot be changed. If
the request for an object does not match the path pattern for any cache
behaviors, CloudFront applies the behavior in the default cache behavior.

For more information, see Path Pattern
[http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesPathPattern] 
in the Amazon CloudFront Developer Guide . **/
        PathPattern: string;
        /** The value of ID for the origin that you want CloudFront to route requests to
when a request matches the path pattern either for a cache behavior or for the
default cache behavior. **/
        TargetOriginId: string;
        /** A complex type that specifies how CloudFront handles query strings and cookies. **/
        ForwardedValues: ForwardedValues;
        /** A complex type that specifies the AWS accounts, if any, that you want to allow
to create signed URLs for private content.

If you want to require signed URLs in requests for objects in the target origin
that match the PathPattern for this cache behavior, specify true for Enabled ,
and specify the applicable values for Quantity and Items . For more information,
see Serving Private Content through CloudFront
[http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html] 
in the Amazon Amazon CloudFront Developer Guide .

If you don&#x27;t want to require signed URLs in requests for objects that match 
PathPattern , specify false for Enabled and 0 for Quantity . Omit Items .

To add, change, or remove one or more trusted signers, change Enabled to true 
(if it&#x27;s currently false ), change Quantity as applicable, and specify all of
the trusted signers that you want to include in the updated distribution. **/
        TrustedSigners: TrustedSigners;
        /** The protocol that viewers can use to access the files in the origin specified by 
TargetOriginId when a request matches the path pattern in PathPattern . You can
specify the following options:

 &amp;#42; allow-all : Viewers can use HTTP or HTTPS.
   
   
 * redirect-to-https : If a viewer submits an HTTP request, CloudFront returns
   an HTTP status code of 301 (Moved Permanently) to the viewer along with the
   HTTPS URL. The viewer then resubmits the request using the new URL.
   
   
 * https-only : If a viewer sends an HTTP request, CloudFront returns an HTTP
   status code of 403 (Forbidden).
   
   

For more information about requiring the HTTPS protocol, see Using an HTTPS
Connection to Access Your Objects
[http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/SecureConnections.html] 
in the Amazon CloudFront Developer Guide .

The only way to guarantee that viewers retrieve an object that was fetched from
the origin using HTTPS is never to use any other protocol to fetch the object.
If you have recently changed from HTTP to HTTPS, we recommend that you clear
your objects&#x27; cache because cached objects are protocol agnostic. That means
that an edge location will return an object from the cache regardless of whether
the current request protocol matches the protocol used previously. For more
information, see Specifying How Long Objects and Errors Stay in a CloudFront
Edge Cache (Expiration)
[http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html] 
in the Amazon CloudFront Developer Guide . **/
        ViewerProtocolPolicy: ViewerProtocolPolicy;
        /** The minimum amount of time that you want objects to stay in CloudFront caches
before CloudFront forwards another request to your origin to determine whether
the object has been updated. For more information, see Specifying How Long
Objects and Errors Stay in a CloudFront Edge Cache (Expiration)
[http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html] 
in the Amazon Amazon CloudFront Developer Guide .

You must specify 0 for MinTTL if you configure CloudFront to forward all headers
to your origin (under Headers , if you specify 1 for Quantity and &amp;#42; for Name ). **/
        MinTTL: long;
        AllowedMethods?: AllowedMethods;
        /** Indicates whether you want to distribute media files in the Microsoft Smooth
Streaming format using the origin that is associated with this cache behavior.
If so, specify true ; if not, specify false . If you specify true for 
SmoothStreaming , you can still distribute other content using this cache
behavior if the content matches the value of PathPattern . **/
        SmoothStreaming?: boolean;
        /** The default amount of time that you want objects to stay in CloudFront caches
before CloudFront forwards another request to your origin to determine whether
the object has been updated. The value that you specify applies only when your
origin does not add HTTP headers such as Cache-Control max-age , Cache-Control
s-maxage , and Expires to objects. For more information, see Specifying How Long
Objects and Errors Stay in a CloudFront Edge Cache (Expiration)
[http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html] 
in the Amazon CloudFront Developer Guide . **/
        DefaultTTL?: long;
        /** The maximum amount of time that you want objects to stay in CloudFront caches
before CloudFront forwards another request to your origin to determine whether
the object has been updated. The value that you specify applies only when your
origin adds HTTP headers such as Cache-Control max-age , Cache-Control s-maxage 
, and Expires to objects. For more information, see Specifying How Long Objects
and Errors Stay in a CloudFront Edge Cache (Expiration)
[http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html] 
in the Amazon CloudFront Developer Guide . **/
        MaxTTL?: long;
        /** Whether you want CloudFront to automatically compress certain files for this
cache behavior. If so, specify true; if not, specify false. For more
information, see Serving Compressed Files
[http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/ServingCompressedFiles.html] 
in the Amazon CloudFront Developer Guide . **/
        Compress?: boolean;
        /** A complex type that contains zero or more Lambda function associations for a
cache behavior. **/
        LambdaFunctionAssociations?: LambdaFunctionAssociations;
    }
    export interface CacheBehaviors {
        /** The number of cache behaviors for this distribution. **/
        Quantity: integer;
        /** Optional: A complex type that contains cache behaviors for this distribution. If 
Quantity is 0 , you can omit Items . **/
        Items?: CacheBehaviorList;
    }
    export interface CachedMethods {
        /** The number of HTTP methods for which you want CloudFront to cache responses.
Valid values are 2 (for caching responses to GET and HEAD requests) and 3 (for
caching responses to GET , HEAD , and OPTIONS requests). **/
        Quantity: integer;
        /** A complex type that contains the HTTP methods that you want CloudFront to cache
responses to. **/
        Items: MethodsList;
    }
    export interface CloudFrontOriginAccessIdentity {
        /** The ID for the origin access identity. For example: E74FTE3AJFJ256A . **/
        Id: string;
        /** The Amazon S3 canonical user ID for the origin access identity, used when giving
the origin access identity read permission to an object in Amazon S3. **/
        S3CanonicalUserId: string;
        /** The current configuration information for the identity. **/
        CloudFrontOriginAccessIdentityConfig?: CloudFrontOriginAccessIdentityConfig;
    }
    export interface CloudFrontOriginAccessIdentityAlreadyExists {
        Message?: string;
    }
    export interface CloudFrontOriginAccessIdentityConfig {
        /** A unique number that ensures the request can&#x27;t be replayed.

If the CallerReference is new (no matter the content of the 
CloudFrontOriginAccessIdentityConfig object), a new origin access identity is
created.

If the CallerReference is a value already sent in a previous identity request,
and the content of the CloudFrontOriginAccessIdentityConfig is identical to the
original request (ignoring white space), the response includes the same
information returned to the original request.

If the CallerReference is a value you already sent in a previous request to
create an identity, but the content of the CloudFrontOriginAccessIdentityConfig 
is different from the original request, CloudFront returns a 
CloudFrontOriginAccessIdentityAlreadyExists error. **/
        CallerReference: string;
        /** Any comments you want to include about the origin access identity. **/
        Comment: string;
    }
    export interface CloudFrontOriginAccessIdentityInUse {
        Message?: string;
    }
    export interface CloudFrontOriginAccessIdentityList {
        /** Use this when paginating results to indicate where to begin in your list of
origin access identities. The results include identities in the list that occur
after the marker. To get the next page of results, set the Marker to the value
of the NextMarker from the current page&#x27;s response (which is also the ID of the
last identity on that page). **/
        Marker: string;
        /** If IsTruncated is true , this element is present and contains the value you can
use for the Marker request parameter to continue listing your origin access
identities where they left off. **/
        NextMarker?: string;
        /** The maximum number of origin access identities you want in the response body. **/
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
        /** The ID for the origin access identity. For example: E74FTE3AJFJ256A . **/
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
        /** The number of different cookies that you want CloudFront to forward to the
origin for this cache behavior. **/
        Quantity: integer;
        /** A complex type that contains one Name element for each cookie that you want
CloudFront to forward to the origin for this cache behavior. **/
        Items?: CookieNameList;
    }
    export interface CookiePreference {
        /** Specifies which cookies to forward to the origin for this cache behavior: all,
none, or the list of cookies specified in the WhitelistedNames complex type.

Amazon S3 doesn&#x27;t process cookies. When the cache behavior is forwarding
requests to an Amazon S3 origin, specify none for the Forward element. **/
        Forward: ItemSelection;
        /** Required if you specify whitelist for the value of Forward: . A complex type
that specifies how many different cookies you want CloudFront to forward to the
origin for this cache behavior and, if you want to forward selected cookies, the
names of those cookies.

If you specify all or none for the value of Forward , omit WhitelistedNames . If
you change the value of Forward from whitelist to all or none and you don&#x27;t
delete the WhitelistedNames element and its child elements, CloudFront deletes
them automatically.

For the current limit on the number of cookie names that you can whitelist for
each cache behavior, see Amazon CloudFront Limits
[http://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#limits_cloudfront] 
in the AWS General Reference . **/
        WhitelistedNames?: CookieNames;
    }
    export interface CreateCloudFrontOriginAccessIdentityRequest {
        /** The current configuration information for the identity. **/
        CloudFrontOriginAccessIdentityConfig: CloudFrontOriginAccessIdentityConfig;
    }
    export interface CreateCloudFrontOriginAccessIdentityResult {
        /** The origin access identity&#x27;s information. **/
        CloudFrontOriginAccessIdentity?: CloudFrontOriginAccessIdentity;
        /** The fully qualified URI of the new origin access identity just created. For
example: 
https://cloudfront.amazonaws.com/2010-11-01/origin-access-identity/cloudfront/E74FTE3AJFJ256A 
. **/
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
https://cloudfront.amazonaws.com/2010-11-01/distribution/EDFDVBD632BHDS5 . **/
        Location?: string;
        /** The current version of the distribution created. **/
        ETag?: string;
    }
    export interface CreateDistributionWithTagsRequest {
        /** The distribution&#x27;s configuration information. **/
        DistributionConfigWithTags: DistributionConfigWithTags;
    }
    export interface CreateDistributionWithTagsResult {
        /** The distribution&#x27;s information. **/
        Distribution?: Distribution;
        /** The fully qualified URI of the new distribution resource just created. For
example: 
https://cloudfront.amazonaws.com/2010-11-01/distribution/EDFDVBD632BHDS5 . **/
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
including the Invalidation ID . **/
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
https://cloudfront.amazonaws.com/2010-11-01/streaming-distribution/EGTXBD79H29TRA8 
. **/
        Location?: string;
        /** The current version of the streaming distribution created. **/
        ETag?: string;
    }
    export interface CreateStreamingDistributionWithTagsRequest {
        /** The streaming distribution&#x27;s configuration information. **/
        StreamingDistributionConfigWithTags: StreamingDistributionConfigWithTags;
    }
    export interface CreateStreamingDistributionWithTagsResult {
        /** The streaming distribution&#x27;s information. **/
        StreamingDistribution?: StreamingDistribution;
        /** The fully qualified URI of the new streaming distribution resource just created.
For example: 
https://cloudfront.amazonaws.com/2010-11-01/streaming-distribution/EGTXBD79H29TRA8 
. **/
        Location?: string;
        ETag?: string;
    }
    export interface CustomErrorResponse {
        /** The HTTP status code for which you want to specify a custom error page and/or a
caching duration. **/
        ErrorCode: integer;
        /** The path to the custom error page that you want CloudFront to return to a viewer
when your origin returns the HTTP status code specified by ErrorCode , for
example, /4xx-errors/403-forbidden.html . If you want to store your objects and
your custom error pages in different locations, your distribution must include a
cache behavior for which the following is true:

 &amp;#42; The value of PathPattern matches the path to your custom error messages. For
   example, suppose you saved custom error pages for 4xx errors in an Amazon S3
   bucket in a directory named /4xx-errors . Your distribution must include a
   cache behavior for which the path pattern routes requests for your custom
   error pages to that location, for example, /4xx-errors/* .
   
   
 * The value of TargetOriginId specifies the value of the ID element for the
   origin that contains your custom error pages.
   
   

If you specify a value for ResponsePagePath , you must also specify a value for 
ResponseCode . If you don&#x27;t want to specify a value, include an empty element, 
&lt;ResponsePagePath&gt; , in the XML document.

We recommend that you store custom error pages in an Amazon S3 bucket. If you
store custom error pages on an HTTP server and the server starts to return 5xx
errors, CloudFront can&#x27;t get the files that you want to return to viewers
because the origin server is unavailable. **/
        ResponsePagePath?: string;
        /** The HTTP status code that you want CloudFront to return to the viewer along with
the custom error page. There are a variety of reasons that you might want
CloudFront to return a status code different from the status code that your
origin returned to CloudFront, for example:

 &amp;#42; Some Internet devices (some firewalls and corporate proxies, for example)
   intercept HTTP 4xx and 5xx and prevent the response from being returned to
   the viewer. If you substitute 200 , the response typically won&#x27;t be
   intercepted.
   
   
 * If you don&#x27;t care about distinguishing among different client errors or
   server errors, you can specify 400 or 500 as the ResponseCode for all 4xx or
   5xx errors.
   
   
 * You might want to return a 200 status code (OK) and static website so your
   customers don&#x27;t know that your website is down.
   
   

If you specify a value for ResponseCode , you must also specify a value for 
ResponsePagePath . If you don&#x27;t want to specify a value, include an empty
element, &lt;ResponseCode&gt; , in the XML document. **/
        ResponseCode?: string;
        /** The minimum amount of time, in seconds, that you want CloudFront to cache the
HTTP status code specified in ErrorCode . When this time period has elapsed,
CloudFront queries your origin to see whether the problem that caused the error
has been resolved and the requested object is now available.

If you don&#x27;t want to specify a value, include an empty element, 
&lt;ErrorCachingMinTTL&gt; , in the XML document.

For more information, see Customizing Error Responses
[http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/custom-error-pages.html] 
in the Amazon CloudFront Developer Guide . **/
        ErrorCachingMinTTL?: long;
    }
    export interface CustomErrorResponses {
        /** The number of HTTP status codes for which you want to specify a custom error
page and/or a caching duration. If Quantity is 0 , you can omit Items . **/
        Quantity: integer;
        /** A complex type that contains a CustomErrorResponse element for each HTTP status
code for which you want to specify a custom error page and/or a caching
duration. **/
        Items?: CustomErrorResponseList;
    }
    export interface CustomHeaders {
        /** The number of custom headers, if any, for this distribution. **/
        Quantity: integer;
        /** Optional : A list that contains one OriginCustomHeader element for each custom
header that you want CloudFront to forward to the origin. If Quantity is 0 ,
omit Items . **/
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
        /** A complex type that specifies how CloudFront handles query strings and cookies. **/
        ForwardedValues: ForwardedValues;
        /** A complex type that specifies the AWS accounts, if any, that you want to allow
to create signed URLs for private content.

If you want to require signed URLs in requests for objects in the target origin
that match the PathPattern for this cache behavior, specify true for Enabled ,
and specify the applicable values for Quantity and Items . For more information,
see Serving Private Content through CloudFront
[http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html] 
in the Amazon Amazon CloudFront Developer Guide .

If you don&#x27;t want to require signed URLs in requests for objects that match 
PathPattern , specify false for Enabled and 0 for Quantity . Omit Items .

To add, change, or remove one or more trusted signers, change Enabled to true 
(if it&#x27;s currently false ), change Quantity as applicable, and specify all of
the trusted signers that you want to include in the updated distribution. **/
        TrustedSigners: TrustedSigners;
        /** The protocol that viewers can use to access the files in the origin specified by 
TargetOriginId when a request matches the path pattern in PathPattern . You can
specify the following options:

 &amp;#42; allow-all : Viewers can use HTTP or HTTPS.
   
   
 * redirect-to-https : If a viewer submits an HTTP request, CloudFront returns
   an HTTP status code of 301 (Moved Permanently) to the viewer along with the
   HTTPS URL. The viewer then resubmits the request using the new URL.
   
   
 * https-only : If a viewer sends an HTTP request, CloudFront returns an HTTP
   status code of 403 (Forbidden).
   
   

For more information about requiring the HTTPS protocol, see Using an HTTPS
Connection to Access Your Objects
[http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/SecureConnections.html] 
in the Amazon CloudFront Developer Guide .

The only way to guarantee that viewers retrieve an object that was fetched from
the origin using HTTPS is never to use any other protocol to fetch the object.
If you have recently changed from HTTP to HTTPS, we recommend that you clear
your objects&#x27; cache because cached objects are protocol agnostic. That means
that an edge location will return an object from the cache regardless of whether
the current request protocol matches the protocol used previously. For more
information, see Specifying How Long Objects and Errors Stay in a CloudFront
Edge Cache (Expiration)
[http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html] 
in the Amazon CloudFront Developer Guide . **/
        ViewerProtocolPolicy: ViewerProtocolPolicy;
        /** The minimum amount of time that you want objects to stay in CloudFront caches
before CloudFront forwards another request to your origin to determine whether
the object has been updated. For more information, see Specifying How Long
Objects and Errors Stay in a CloudFront Edge Cache (Expiration)
[http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html] 
in the Amazon Amazon CloudFront Developer Guide .

You must specify 0 for MinTTL if you configure CloudFront to forward all headers
to your origin (under Headers , if you specify 1 for Quantity and &amp;#42; for Name ). **/
        MinTTL: long;
        AllowedMethods?: AllowedMethods;
        /** Indicates whether you want to distribute media files in the Microsoft Smooth
Streaming format using the origin that is associated with this cache behavior.
If so, specify true ; if not, specify false . If you specify true for 
SmoothStreaming , you can still distribute other content using this cache
behavior if the content matches the value of PathPattern . **/
        SmoothStreaming?: boolean;
        /** The default amount of time that you want objects to stay in CloudFront caches
before CloudFront forwards another request to your origin to determine whether
the object has been updated. The value that you specify applies only when your
origin does not add HTTP headers such as Cache-Control max-age , Cache-Control
s-maxage , and Expires to objects. For more information, see Specifying How Long
Objects and Errors Stay in a CloudFront Edge Cache (Expiration)
[http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html] 
in the Amazon CloudFront Developer Guide . **/
        DefaultTTL?: long;
        MaxTTL?: long;
        /** Whether you want CloudFront to automatically compress certain files for this
cache behavior. If so, specify true ; if not, specify false . For more
information, see Serving Compressed Files
[http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/ServingCompressedFiles.html] 
in the Amazon CloudFront Developer Guide . **/
        Compress?: boolean;
        /** A complex type that contains zero or more Lambda function associations for a
cache behavior. **/
        LambdaFunctionAssociations?: LambdaFunctionAssociations;
    }
    export interface DeleteCloudFrontOriginAccessIdentityRequest {
        /** The origin access identity&#x27;s ID. **/
        Id: string;
        /** The value of the ETag header you received from a previous GET or PUT request.
For example: E2QWRUHAPOMQZL . **/
        IfMatch?: string;
    }
    export interface DeleteDistributionRequest {
        /** The distribution ID. **/
        Id: string;
        /** The value of the ETag header that you received when you disabled the
distribution. For example: E2QWRUHAPOMQZL . **/
        IfMatch?: string;
    }
    export interface DeleteStreamingDistributionRequest {
        /** The distribution ID. **/
        Id: string;
        /** The value of the ETag header that you received when you disabled the streaming
distribution. For example: E2QWRUHAPOMQZL . **/
        IfMatch?: string;
    }
    export interface Distribution {
        /** The identifier for the distribution. For example: EDFDVBD632BHDS5 . **/
        Id: string;
        /** The ARN (Amazon Resource Name) for the distribution. For example: 
arn:aws:cloudfront::123456789012:distribution/EDFDVBD632BHDS5 , where 
123456789012 is your AWS account ID. **/
        ARN: string;
        /** This response element indicates the current status of the distribution. When the
status is Deployed , the distribution&#x27;s information is fully propagated to all
CloudFront edge locations. **/
        Status: string;
        /** The date and time the distribution was last modified. **/
        LastModifiedTime: timestamp;
        /** The number of invalidation batches currently in progress. **/
        InProgressInvalidationBatches: integer;
        /** The domain name corresponding to the distribution. For example: 
d604721fxaaqy9.cloudfront.net . **/
        DomainName: string;
        /** CloudFront automatically adds this element to the response only if you&#x27;ve set up
the distribution to serve private content with signed URLs. The element lists
the key pair IDs that CloudFront is aware of for each trusted signer. The Signer 
child element lists the AWS account number of the trusted signer (or an empty 
Self element if the signer is you). The Signer element also includes the IDs of
any active key pairs associated with the trusted signer&#x27;s AWS account. If no 
KeyPairId element appears for a Signer , that signer can&#x27;t create working signed
URLs. **/
        ActiveTrustedSigners: ActiveTrustedSigners;
        /** The current configuration information for the distribution. Send a GET request
to the / CloudFront API version /distribution ID/config resource. **/
        DistributionConfig: DistributionConfig;
    }
    export interface DistributionAlreadyExists {
        Message?: string;
    }
    export interface DistributionConfig {
        /** A unique value (for example, a date-time stamp) that ensures that the request
can&#x27;t be replayed.

If the value of CallerReference is new (regardless of the content of the 
DistributionConfig object), CloudFront creates a new distribution.

If CallerReference is a value you already sent in a previous request to create a
distribution, and if the content of the DistributionConfig is identical to the
original request (ignoring white space), CloudFront returns the same the
response that it returned to the original request.

If CallerReference is a value you already sent in a previous request to create a
distribution but the content of the DistributionConfig is different from the
original request, CloudFront returns a DistributionAlreadyExists error. **/
        CallerReference: string;
        /** A complex type that contains information about CNAMEs (alternate domain names),
if any, for this distribution. **/
        Aliases?: Aliases;
        /** The object that you want CloudFront to request from your origin (for example, 
index.html ) when a viewer requests the root URL for your distribution ( 
http://www.example.com ) instead of an object in your distribution ( 
http://www.example.com/product-description.html ). Specifying a default root
object avoids exposing the contents of your distribution.

Specify only the object name, for example, index.html . Do not add a / before
the object name.

If you don&#x27;t want to specify a default root object when you create a
distribution, include an empty DefaultRootObject element.

To delete the default root object from an existing distribution, update the
distribution configuration and include an empty DefaultRootObject element.

To replace the default root object, update the distribution configuration and
specify the new object.

For more information about the default root object, see Creating a Default Root
Object
[http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DefaultRootObject.html] 
in the Amazon CloudFront Developer Guide . **/
        DefaultRootObject?: string;
        /** A complex type that contains information about origins for this distribution. **/
        Origins: Origins;
        /** A complex type that describes the default cache behavior if you do not specify a 
CacheBehavior element or if files don&#x27;t match any of the values of PathPattern 
in CacheBehavior elements. You must create exactly one default cache behavior. **/
        DefaultCacheBehavior: DefaultCacheBehavior;
        /** A complex type that contains zero or more CacheBehavior elements. **/
        CacheBehaviors?: CacheBehaviors;
        /** A complex type that controls the following:

 &amp;#42; Whether CloudFront replaces HTTP status codes in the 4xx and 5xx range with
   custom error messages before returning the response to the viewer.
   
   
 * How long CloudFront caches HTTP status codes in the 4xx and 5xx range.
   
   

For more information about custom error pages, see Customizing Error Responses
[http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/custom-error-pages.html] 
in the Amazon CloudFront Developer Guide . **/
        CustomErrorResponses?: CustomErrorResponses;
        /** Any comments you want to include about the distribution.

If you don&#x27;t want to specify a comment, include an empty Comment element.

To delete an existing comment, update the distribution configuration and include
an empty Comment element.

To add or change a comment, update the distribution configuration and specify
the new comment. **/
        Comment: string;
        /** A complex type that controls whether access logs are written for the
distribution.

For more information about logging, see Access Logs
[http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/AccessLogs.html] 
in the Amazon CloudFront Developer Guide . **/
        Logging?: LoggingConfig;
        /** The price class that corresponds with the maximum price that you want to pay for
CloudFront service. If you specify PriceClass_All , CloudFront responds to
requests for your objects from all CloudFront edge locations.

If you specify a price class other than PriceClass_All , CloudFront serves your
objects from the CloudFront edge location that has the lowest latency among the
edge locations in your price class. Viewers who are in or near regions that are
excluded from your specified price class may encounter slower performance.

For more information about price classes, see Choosing the Price Class for a
CloudFront Distribution
[http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PriceClass.html] 
in the Amazon CloudFront Developer Guide . For information about CloudFront
pricing, including how price classes map to CloudFront regions, see Amazon
CloudFront Pricing [https://aws.amazon.com/cloudfront/pricing/] . **/
        PriceClass?: PriceClass;
        /** Specifies whether you want CloudFront to save access logs to an Amazon S3
bucket.

If you do not want to enable logging when you create a distribution, or if you
want to disable logging for an existing distribution, specify false for Enabled 
, and specify empty Bucket and Prefix elements.

If you specify false for Enabled but you specify values for Bucket and Prefix ,
the values are automatically deleted. **/
        Enabled: boolean;
        ViewerCertificate?: ViewerCertificate;
        Restrictions?: Restrictions;
        /** A unique identifier that specifies the AWS WAF web ACL, if any, to associate
with this distribution.

AWS WAF is a web application firewall that lets you monitor the HTTP and HTTPS
requests that are forwarded to CloudFront, and lets you control access to your
content. Based on conditions that you specify, such as the IP addresses that
requests originate from or the values of query strings, CloudFront responds to
requests either with the requested content or with an HTTP 403 status code
(Forbidden). You can also configure CloudFront to return a custom error page
when a request is blocked. For more information about AWS WAF, see the AWS WAF
Developer Guide
[http://docs.aws.amazon.com/waf/latest/developerguide/what-is-aws-waf.html] . **/
        WebACLId?: string;
        /** (Optional) Specify the maximum HTTP version that you want viewers to use to
communicate with CloudFront. The default value for new web distributions is
http2. Viewers that don&#x27;t support HTTP/2 automatically use an earlier HTTP
version.

For viewers and CloudFront to use HTTP/2, viewers must support TLS 1.2 or later,
and must support Server Name Identification (SNI).

In general, configuring CloudFront to communicate with viewers using HTTP/2
reduces latency. You can improve performance by optimizing for HTTP/2. For more
information, do an Internet search for &quot;http/2 optimization.&quot; **/
        HttpVersion?: HttpVersion;
        /** If you want CloudFront to respond to IPv6 DNS requests with an IPv6 address for
your distribution, specify true . If you specify false , CloudFront responds to
IPv6 DNS requests with the DNS response code NOERROR and with no IP addresses.
This allows viewers to submit a second request, for an IPv4 address for your
distribution.

In general, you should enable IPv6 if you have users on IPv6 networks who want
to access your content. However, if you&#x27;re using signed URLs or signed cookies
to restrict access to your content, and if you&#x27;re using a custom policy that
includes the IpAddress parameter to restrict the IP addresses that can access
your content, do not enable IPv6. If you want to restrict access to some content
by IP address and not restrict access to other content (or restrict access but
not by IP address), you can create two distributions. For more information, see 
Creating a Signed URL Using a Custom Policy
[http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-creating-signed-url-custom-policy.html] 
in the Amazon CloudFront Developer Guide .

If you&#x27;re using an Amazon Route 53 alias resource record set to route traffic to
your CloudFront distribution, you need to create a second alias resource record
set when both of the following are true:

 &amp;#42; You enable IPv6 for the distribution
   
   
 * You&#x27;re using alternate domain names in the URLs for your objects
   
   

For more information, see Routing Traffic to an Amazon CloudFront Web
Distribution by Using Your Domain Name
[http://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-to-cloudfront-distribution.html] 
in the Amazon Route 53 Developer Guide .

If you created a CNAME resource record set, either with Amazon Route 53 or with
another DNS service, you don&#x27;t need to make any changes. A CNAME record will
route traffic to your distribution regardless of the IP address format of the
viewer request. **/
        IsIPV6Enabled?: boolean;
    }
    export interface DistributionConfigWithTags {
        /** A distribution configuration. **/
        DistributionConfig: DistributionConfig;
        /** A complex type that contains zero or more Tag elements. **/
        Tags: Tags;
    }
    export interface DistributionList {
        /** The value you provided for the Marker request parameter. **/
        Marker: string;
        /** If IsTruncated is true , this element is present and contains the value you can
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
        /** The identifier for the distribution. For example: EDFDVBD632BHDS5 . **/
        Id: string;
        /** The ARN (Amazon Resource Name) for the distribution. For example: 
arn:aws:cloudfront::123456789012:distribution/EDFDVBD632BHDS5 , where 
123456789012 is your AWS account ID. **/
        ARN: string;
        /** The current status of the distribution. When the status is Deployed , the
distribution&#x27;s information is propagated to all CloudFront edge locations. **/
        Status: string;
        /** The date and time the distribution was last modified. **/
        LastModifiedTime: timestamp;
        /** The domain name that corresponds to the distribution. For example: 
d604721fxaaqy9.cloudfront.net . **/
        DomainName: string;
        /** A complex type that contains information about CNAMEs (alternate domain names),
if any, for this distribution. **/
        Aliases: Aliases;
        /** A complex type that contains information about origins for this distribution. **/
        Origins: Origins;
        /** A complex type that describes the default cache behavior if you do not specify a 
CacheBehavior element or if files don&#x27;t match any of the values of PathPattern 
in CacheBehavior elements. You must create exactly one default cache behavior. **/
        DefaultCacheBehavior: DefaultCacheBehavior;
        /** A complex type that contains zero or more CacheBehavior elements. **/
        CacheBehaviors: CacheBehaviors;
        /** A complex type that contains zero or more CustomErrorResponses elements. **/
        CustomErrorResponses: CustomErrorResponses;
        /** The comment originally specified when this distribution was created. **/
        Comment: string;
        PriceClass: PriceClass;
        /** Whether the distribution is enabled to accept user requests for content. **/
        Enabled: boolean;
        ViewerCertificate: ViewerCertificate;
        Restrictions: Restrictions;
        /** The Web ACL Id (if any) associated with the distribution. **/
        WebACLId: string;
        /** Specify the maximum HTTP version that you want viewers to use to communicate
with CloudFront. The default value for new web distributions is http2 . Viewers
that don&#x27;t support HTTP/2 will automatically use an earlier version. **/
        HttpVersion: HttpVersion;
        /** Whether CloudFront responds to IPv6 DNS requests with an IPv6 address for your
distribution. **/
        IsIPV6Enabled: boolean;
    }
    export interface ForwardedValues {
        /** Indicates whether you want CloudFront to forward query strings to the origin
that is associated with this cache behavior and cache based on the query string
parameters. CloudFront behavior depends on the value of QueryString and on the
values that you specify for QueryStringCacheKeys , if any:

If you specify true for QueryString and you don&#x27;t specify any values for 
QueryStringCacheKeys , CloudFront forwards all query string parameters to the
origin and caches based on all query string parameters. Depending on how many
query string parameters and values you have, this can adversely affect
performance because CloudFront must forward more requests to the origin.

If you specify true for QueryString and you specify one or more values for 
QueryStringCacheKeys , CloudFront forwards all query string parameters to the
origin, but it only caches based on the query string parameters that you
specify.

If you specify false for QueryString , CloudFront doesn&#x27;t forward any query
string parameters to the origin, and doesn&#x27;t cache based on query string
parameters.

For more information, see Configuring CloudFront to Cache Based on Query String
Parameters
[http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/QueryStringParameters.html] 
in the Amazon CloudFront Developer Guide . **/
        QueryString: boolean;
        /** A complex type that specifies whether you want CloudFront to forward cookies to
the origin and, if so, which ones. For more information about forwarding cookies
to the origin, see How CloudFront Forwards, Caches, and Logs Cookies
[http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Cookies.html] 
in the Amazon CloudFront Developer Guide . **/
        Cookies: CookiePreference;
        /** A complex type that specifies the Headers , if any, that you want CloudFront to
vary upon for this cache behavior. **/
        Headers?: Headers;
        /** A complex type that contains information about the query string parameters that
you want CloudFront to use for caching for this cache behavior. **/
        QueryStringCacheKeys?: QueryStringCacheKeys;
    }
    export interface GeoRestriction {
        /** The method that you want to use to restrict distribution of your content by
country:

 &amp;#42; none : No geo restriction is enabled, meaning access to content is not
   restricted by client geo location.
   
   
 * blacklist : The Location elements specify the countries in which you do not
   want CloudFront to distribute your content.
   
   
 * whitelist : The Location elements specify the countries in which you want
   CloudFront to distribute your content. **/
        RestrictionType: GeoRestrictionType;
        /** When geo restriction is enabled , this is the number of countries in your 
whitelist or blacklist . Otherwise, when it is not enabled, Quantity is 0 , and
you can omit Items . **/
        Quantity: integer;
        /** A complex type that contains a Location element for each country in which you
want CloudFront either to distribute your content ( whitelist ) or not
distribute your content ( blacklist ).

The Location element is a two-letter, uppercase country code for a country that
you want to include in your blacklist or whitelist . Include one Location 
element for each country.

CloudFront and MaxMind both use ISO 3166 country codes. For the current list of
countries and the corresponding codes, see ISO 3166-1-alpha-2 code on the 
International Organization for Standardization website. You can also refer to
the country list in the CloudFront console, which includes both country names
and codes. **/
        Items?: LocationList;
    }
    export interface GetCloudFrontOriginAccessIdentityConfigRequest {
        /** The identity&#x27;s ID. **/
        Id: string;
    }
    export interface GetCloudFrontOriginAccessIdentityConfigResult {
        /** The origin access identity&#x27;s configuration information. **/
        CloudFrontOriginAccessIdentityConfig?: CloudFrontOriginAccessIdentityConfig;
        /** The current version of the configuration. For example: E2QWRUHAPOMQZL . **/
        ETag?: string;
    }
    export interface GetCloudFrontOriginAccessIdentityRequest {
        /** The identity&#x27;s ID. **/
        Id: string;
    }
    export interface GetCloudFrontOriginAccessIdentityResult {
        /** The origin access identity&#x27;s information. **/
        CloudFrontOriginAccessIdentity?: CloudFrontOriginAccessIdentity;
        /** The current version of the origin access identity&#x27;s information. For example: 
E2QWRUHAPOMQZL . **/
        ETag?: string;
    }
    export interface GetDistributionConfigRequest {
        /** The distribution&#x27;s ID. **/
        Id: string;
    }
    export interface GetDistributionConfigResult {
        /** The distribution&#x27;s configuration information. **/
        DistributionConfig?: DistributionConfig;
        /** The current version of the configuration. For example: E2QWRUHAPOMQZL . **/
        ETag?: string;
    }
    export interface GetDistributionRequest {
        /** The distribution&#x27;s ID. **/
        Id: string;
    }
    export interface GetDistributionResult {
        /** The distribution&#x27;s information. **/
        Distribution?: Distribution;
        /** The current version of the distribution&#x27;s information. For example: 
E2QWRUHAPOMQZL . **/
        ETag?: string;
    }
    export interface GetInvalidationRequest {
        /** The distribution&#x27;s ID. **/
        DistributionId: string;
        /** The identifier for the invalidation request, for example, IDFDVBD632BHDS5 . **/
        Id: string;
    }
    export interface GetInvalidationResult {
        /** The invalidation&#x27;s information. For more information, see Invalidation Complex
Type
[http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/InvalidationDatatype.html] 
. **/
        Invalidation?: Invalidation;
    }
    export interface GetStreamingDistributionConfigRequest {
        /** The streaming distribution&#x27;s ID. **/
        Id: string;
    }
    export interface GetStreamingDistributionConfigResult {
        /** The streaming distribution&#x27;s configuration information. **/
        StreamingDistributionConfig?: StreamingDistributionConfig;
        /** The current version of the configuration. For example: E2QWRUHAPOMQZL . **/
        ETag?: string;
    }
    export interface GetStreamingDistributionRequest {
        /** The streaming distribution&#x27;s ID. **/
        Id: string;
    }
    export interface GetStreamingDistributionResult {
        /** The streaming distribution&#x27;s information. **/
        StreamingDistribution?: StreamingDistribution;
        /** The current version of the streaming distribution&#x27;s information. For example: 
E2QWRUHAPOMQZL . **/
        ETag?: string;
    }
    export interface Headers {
        /** The number of different headers that you want CloudFront to forward to the
origin for this cache behavior. You can configure each cache behavior in a web
distribution to do one of the following:

 &amp;#42; Forward all headers to your origin : Specify 1 for Quantity and * for Name .
   
   If you configure CloudFront to forward all headers to your origin, CloudFront
   doesn&#x27;t cache the objects associated with this cache behavior. Instead, it
   sends every request to the origin.
   
   
 * Forward a whitelist of headers you specify : Specify the number of headers
   that you want to forward, and specify the header names in Name elements.
   CloudFront caches your objects based on the values in all of the specified
   headers. CloudFront also forwards the headers that it forwards by default,
   but it caches your objects based only on the headers that you specify.
   
   
 * Forward only the default headers : Specify 0 for Quantity and omit Items . In
   this configuration, CloudFront doesn&#x27;t cache based on the values in the
   request headers. **/
        Quantity: integer;
        /** A complex type that contains one Name element for each header that you want
CloudFront to forward to the origin and to vary on for this cache behavior. If 
Quantity is 0 , omit Items . **/
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
    export interface InvalidLambdaFunctionAssociation {
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
    export interface InvalidQueryStringParameters {
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
    export interface InvalidTagging {
        Message?: string;
    }
    export interface InvalidViewerCertificate {
        Message?: string;
    }
    export interface InvalidWebACLId {
        Message?: string;
    }
    export interface Invalidation {
        /** The identifier for the invalidation request. For example: IDFDVBD632BHDS5 . **/
        Id: string;
        /** The status of the invalidation request. When the invalidation batch is finished,
the status is Completed . **/
        Status: string;
        /** The date and time the invalidation request was first made. **/
        CreateTime: timestamp;
        /** The current invalidation information for the batch request. **/
        InvalidationBatch: InvalidationBatch;
    }
    export interface InvalidationBatch {
        /** A complex type that contains information about the objects that you want to
invalidate. For more information, see Specifying the Objects to Invalidate
[http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Invalidation.html#invalidation-specifying-objects] 
in the Amazon CloudFront Developer Guide . **/
        Paths: Paths;
        /** A value that you specify to uniquely identify an invalidation request.
CloudFront uses the value to prevent you from accidentally resubmitting an
identical request. Whenever you create a new invalidation request, you must
specify a new value for CallerReference and change other values in the request
as applicable. One way to ensure that the value of CallerReference is unique is
to use a timestamp , for example, 20120301090000 .

If you make a second invalidation request with the same value for 
CallerReference , and if the rest of the request is the same, CloudFront doesn&#x27;t
create a new invalidation request. Instead, CloudFront returns information about
the invalidation request that you previously created with the same 
CallerReference .

If CallerReference is a value you already sent in a previous invalidation batch
request but the content of any Path is different from the original request,
CloudFront returns an InvalidationBatchAlreadyExists error. **/
        CallerReference: string;
    }
    export interface InvalidationList {
        /** The value that you provided for the Marker request parameter. **/
        Marker: string;
        /** If IsTruncated is true , this element is present and contains the value that you
can use for the Marker request parameter to continue listing your invalidation
batches where they left off. **/
        NextMarker?: string;
        /** The value that you provided for the MaxItems request parameter. **/
        MaxItems: integer;
        /** A flag that indicates whether more invalidation batch requests remain to be
listed. If your results were truncated, you can make a follow-up pagination
request using the Marker request parameter to retrieve more invalidation batches
in the list. **/
        IsTruncated: boolean;
        /** The number of invalidation batches that were created by the current AWS account. **/
        Quantity: integer;
        /** A complex type that contains one InvalidationSummary element for each
invalidation batch created by the current AWS account. **/
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
        /** The number of active CloudFront key pairs for AwsAccountNumber .

For more information, see ActiveTrustedSigners . **/
        Quantity: integer;
        /** A complex type that lists the active CloudFront key pairs, if any, that are
associated with AwsAccountNumber .

For more information, see ActiveTrustedSigners . **/
        Items?: KeyPairIdList;
    }
    export interface LambdaFunctionAssociation {
        /** The ARN of the Lambda function. **/
        LambdaFunctionARN?: string;
        /** Specifies the event type that triggers a Lambda function invocation. Valid
values are:

 &amp;#42; viewer-request
   
   
 * origin-request
   
   
 * viewer-response
   
   
 * origin-response **/
        EventType?: EventType;
    }
    export interface LambdaFunctionAssociations {
        /** The number of Lambda function associations for this cache behavior. **/
        Quantity: integer;
        /** Optional : A complex type that contains LambdaFunctionAssociation items for this
cache behavior. If Quantity is 0 , you can omit Items . **/
        Items?: LambdaFunctionAssociationList;
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
the value of Marker , specify the value of NextMarker from the last response.
(For the first request, omit Marker .) **/
        Marker?: string;
        /** The maximum number of distributions that you want CloudFront to return in the
response body. The maximum and default values are both 100. **/
        MaxItems?: string;
        /** The ID of the AWS WAF web ACL that you want to list the associated
distributions. If you specify &quot;null&quot; for the ID, the request returns a list of
the distributions that aren&#x27;t associated with a web ACL. **/
        WebACLId: string;
    }
    export interface ListDistributionsByWebACLIdResult {
        /** The DistributionList type. **/
        DistributionList?: DistributionList;
    }
    export interface ListDistributionsRequest {
        /** Use this when paginating results to indicate where to begin in your list of
distributions. The results include distributions in the list that occur after
the marker. To get the next page of results, set the Marker to the value of the 
NextMarker from the current page&#x27;s response (which is also the ID of the last
distribution on that page). **/
        Marker?: string;
        /** The maximum number of distributions you want in the response body. **/
        MaxItems?: string;
    }
    export interface ListDistributionsResult {
        /** The DistributionList type. **/
        DistributionList?: DistributionList;
    }
    export interface ListInvalidationsRequest {
        /** The distribution&#x27;s ID. **/
        DistributionId: string;
        /** Use this parameter when paginating results to indicate where to begin in your
list of invalidation batches. Because the results are returned in decreasing
order from most recent to oldest, the most recent results are on the first page,
the second page will contain earlier results, and so on. To get the next page of
results, set Marker to the value of the NextMarker from the current page&#x27;s
response. This value is the same as the ID of the last invalidation batch on
that page. **/
        Marker?: string;
        /** The maximum number of invalidation batches that you want in the response body. **/
        MaxItems?: string;
    }
    export interface ListInvalidationsResult {
        /** Information about invalidation batches. **/
        InvalidationList?: InvalidationList;
    }
    export interface ListStreamingDistributionsRequest {
        /** The value that you provided for the Marker request parameter. **/
        Marker?: string;
        /** The value that you provided for the MaxItems request parameter. **/
        MaxItems?: string;
    }
    export interface ListStreamingDistributionsResult {
        /** The StreamingDistributionList type. **/
        StreamingDistributionList?: StreamingDistributionList;
    }
    export interface ListTagsForResourceRequest {
        /** An ARN of a CloudFront resource. **/
        Resource: ResourceARN;
    }
    export interface ListTagsForResourceResult {
        /** A complex type that contains zero or more Tag elements. **/
        Tags: Tags;
    }
    export interface LoggingConfig {
        /** Specifies whether you want CloudFront to save access logs to an Amazon S3
bucket. If you do not want to enable logging when you create a distribution or
if you want to disable logging for an existing distribution, specify false for 
Enabled , and specify empty Bucket and Prefix elements. If you specify false for 
Enabled but you specify values for Bucket , prefix , and IncludeCookies , the
values are automatically deleted. **/
        Enabled: boolean;
        /** Specifies whether you want CloudFront to include cookies in access logs, specify 
true for IncludeCookies . If you choose to include cookies in logs, CloudFront
logs all cookies regardless of how you configure the cache behaviors for this
distribution. If you do not want to include cookies when you create a
distribution or if you want to disable include cookies for an existing
distribution, specify false for IncludeCookies . **/
        IncludeCookies: boolean;
        /** The Amazon S3 bucket to store the access logs in, for example, 
myawslogbucket.s3.amazonaws.com . **/
        Bucket: string;
        /** An optional string that you want CloudFront to prefix to the access log 
filenames for this distribution, for example, myprefix/ . If you want to enable
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
    export interface NoSuchResource {
        Message?: string;
    }
    export interface NoSuchStreamingDistribution {
        Message?: string;
    }
    export interface Origin {
        /** A unique identifier for the origin. The value of Id must be unique within the
distribution.

When you specify the value of TargetOriginId for the default cache behavior or
for another cache behavior, you indicate the origin to which you want the cache
behavior to route requests by specifying the value of the Id element for that
origin. When a request matches the path pattern for that cache behavior,
CloudFront routes the request to the specified origin. For more information, see 
Cache Behavior Settings
[http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesCacheBehavior] 
in the Amazon CloudFront Developer Guide . **/
        Id: string;
        /** Amazon S3 origins : The DNS name of the Amazon S3 bucket from which you want
CloudFront to get objects for this origin, for example, 
myawsbucket.s3.amazonaws.com .

Constraints for Amazon S3 origins:

 &amp;#42; If you configured Amazon S3 Transfer Acceleration for your bucket, do not
   specify the s3-accelerate endpoint for DomainName .
   
   
 * The bucket name must be between 3 and 63 characters long (inclusive).
   
   
 * The bucket name must contain only lowercase characters, numbers, periods,
   underscores, and dashes.
   
   
 * The bucket name must not contain adjacent periods.
   
   

Custom Origins : The DNS domain name for the HTTP server from which you want
CloudFront to get objects for this origin, for example, www.example.com .

Constraints for custom origins:

 * DomainName must be a valid DNS name that contains only a-z, A-Z, 0-9, dot
   (.), hyphen (-), or underscore (_) characters.
   
   
 * The name cannot exceed 128 characters. **/
        DomainName: string;
        /** An optional element that causes CloudFront to request your content from a
directory in your Amazon S3 bucket or your custom origin. When you include the 
OriginPath element, specify the directory name, beginning with a / . CloudFront
appends the directory name to the value of DomainName , for example, 
example.com/production . Do not include a / at the end of the directory name.

For example, suppose you&#x27;ve specified the following values for your
distribution:

 &amp;#42; DomainName : An Amazon S3 bucket named myawsbucket .
   
   
 * OriginPath : /production
   
   
 * CNAME : example.com
   
   

When a user enters example.com/index.html in a browser, CloudFront sends a
request to Amazon S3 for myawsbucket/production/index.html .

When a user enters example.com/acme/index.html in a browser, CloudFront sends a
request to Amazon S3 for myawsbucket/production/acme/index.html . **/
        OriginPath?: string;
        /** A complex type that contains names and values for the custom headers that you
want. **/
        CustomHeaders?: CustomHeaders;
        /** A complex type that contains information about the Amazon S3 origin. If the
origin is a custom origin, use the CustomOriginConfig element instead. **/
        S3OriginConfig?: S3OriginConfig;
        /** A complex type that contains information about a custom origin. If the origin is
an Amazon S3 bucket, use the S3OriginConfig element instead. **/
        CustomOriginConfig?: CustomOriginConfig;
    }
    export interface OriginCustomHeader {
        /** The name of a header that you want CloudFront to forward to your origin. For
more information, see Forwarding Custom Headers to Your Origin (Web
Distributions Only)
[http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/forward-custom-headers.html] 
in the Amazon Amazon CloudFront Developer Guide . **/
        HeaderName: string;
        /** The value for the header that you specified in the HeaderName field. **/
        HeaderValue: string;
    }
    export interface OriginSslProtocols {
        /** The number of SSL/TLS protocols that you want to allow CloudFront to use when
establishing an HTTPS connection with this origin. **/
        Quantity: integer;
        /** A list that contains allowed SSL/TLS protocols for this distribution. **/
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
        /** A complex type that contains a list of the paths that you want to invalidate. **/
        Items?: PathList;
    }
    export interface PreconditionFailed {
        Message?: string;
    }
    export interface QueryStringCacheKeys {
        /** The number of whitelisted query string parameters for this cache behavior. **/
        Quantity: integer;
        /** (Optional) A list that contains the query string parameters that you want
CloudFront to use as a basis for caching for this cache behavior. If Quantity is
0, you can omit Items . **/
        Items?: QueryStringCacheKeysList;
    }
    export interface Restrictions {
        GeoRestriction: GeoRestriction;
    }
    export interface S3Origin {
        /** The DNS name of the Amazon S3 origin. **/
        DomainName: string;
        /** The CloudFront origin access identity to associate with the RTMP distribution.
Use an origin access identity to configure the distribution so that end users
can only access objects in an Amazon S3 bucket through CloudFront.

If you want end users to be able to access objects using either the CloudFront
URL or the Amazon S3 URL, specify an empty OriginAccessIdentity element.

To delete the origin access identity from an existing distribution, update the
distribution configuration and include an empty OriginAccessIdentity element.

To replace the origin access identity, update the distribution configuration and
specify the new origin access identity.

For more information, see Using an Origin Access Identity to Restrict Access to
Your Amazon S3 Content
[http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html] 
in the Amazon Amazon CloudFront Developer Guide . **/
        OriginAccessIdentity: string;
    }
    export interface S3OriginConfig {
        /** The CloudFront origin access identity to associate with the origin. Use an
origin access identity to configure the origin so that viewers can only access
objects in an Amazon S3 bucket through CloudFront. The format of the value is:

origin-access-identity/CloudFront/ ID-of-origin-access-identity

where ID-of-origin-access-identity is the value that CloudFront returned in the 
ID element when you created the origin access identity.

If you want viewers to be able to access objects using either the CloudFront URL
or the Amazon S3 URL, specify an empty OriginAccessIdentity element.

To delete the origin access identity from an existing distribution, update the
distribution configuration and include an empty OriginAccessIdentity element.

To replace the origin access identity, update the distribution configuration and
specify the new origin access identity.

For more information about the origin access identity, see Serving Private
Content through CloudFront
[http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html] 
in the Amazon CloudFront Developer Guide . **/
        OriginAccessIdentity: string;
    }
    export interface Signer {
        /** An AWS account that is included in the TrustedSigners complex type for this RTMP
distribution. Valid values include:

 &amp;#42; self , which is the AWS account used to create the distribution.
   
   
 * An AWS account number. **/
        AwsAccountNumber?: string;
        /** A complex type that lists the active CloudFront key pairs, if any, that are
associated with AwsAccountNumber . **/
        KeyPairIds?: KeyPairIds;
    }
    export interface StreamingDistribution {
        /** The identifier for the RTMP distribution. For example: EGTXBD79EXAMPLE . **/
        Id: string;
        ARN: string;
        /** The current status of the RTMP distribution. When the status is Deployed , the
distribution&#x27;s information is propagated to all CloudFront edge locations. **/
        Status: string;
        /** The date and time that the distribution was last modified. **/
        LastModifiedTime?: timestamp;
        /** The domain name that corresponds to the streaming distribution. For example: 
s5c39gqb8ow64r.cloudfront.net . **/
        DomainName: string;
        /** A complex type that lists the AWS accounts, if any, that you included in the 
TrustedSigners complex type for this distribution. These are the accounts that
you want to allow to create signed URLs for private content.

The Signer complex type lists the AWS account number of the trusted signer or 
self if the signer is the AWS account that created the distribution. The Signer 
element also includes the IDs of any active CloudFront key pairs that are
associated with the trusted signer&#x27;s AWS account. If no KeyPairId element
appears for a Signer , that signer can&#x27;t create signed URLs.

For more information, see Serving Private Content through CloudFront
[http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html] 
in the Amazon CloudFront Developer Guide . **/
        ActiveTrustedSigners: ActiveTrustedSigners;
        /** The current configuration information for the RTMP distribution. **/
        StreamingDistributionConfig: StreamingDistributionConfig;
    }
    export interface StreamingDistributionAlreadyExists {
        Message?: string;
    }
    export interface StreamingDistributionConfig {
        /** A unique number that ensures that the request can&#x27;t be replayed. If the 
CallerReference is new (no matter the content of the StreamingDistributionConfig 
object), a new streaming distribution is created. If the CallerReference is a
value that you already sent in a previous request to create a streaming
distribution, and the content of the StreamingDistributionConfig is identical to
the original request (ignoring white space), the response includes the same
information returned to the original request. If the CallerReference is a value
that you already sent in a previous request to create a streaming distribution
but the content of the StreamingDistributionConfig is different from the
original request, CloudFront returns a DistributionAlreadyExists error. **/
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
        /** A complex type that specifies any AWS accounts that you want to permit to create
signed URLs for private content. If you want the distribution to use signed
URLs, include this element; if you want the distribution to use public URLs,
remove this element. For more information, see Serving Private Content through
CloudFront
[http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html] 
in the Amazon CloudFront Developer Guide . **/
        TrustedSigners: TrustedSigners;
        /** A complex type that contains information about price class for this streaming
distribution. **/
        PriceClass?: PriceClass;
        /** Whether the streaming distribution is enabled to accept user requests for
content. **/
        Enabled: boolean;
    }
    export interface StreamingDistributionConfigWithTags {
        /** A streaming distribution Configuration. **/
        StreamingDistributionConfig: StreamingDistributionConfig;
        /** A complex type that contains zero or more Tag elements. **/
        Tags: Tags;
    }
    export interface StreamingDistributionList {
        /** The value you provided for the Marker request parameter. **/
        Marker: string;
        /** If IsTruncated is true , this element is present and contains the value you can
use for the Marker request parameter to continue listing your RTMP distributions
where they left off. **/
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
        /** The identifier for the distribution. For example: EDFDVBD632BHDS5 . **/
        Id: string;
        /** The ARN (Amazon Resource Name) for the streaming distribution. For example: 
arn:aws:cloudfront::123456789012:streaming-distribution/EDFDVBD632BHDS5 , where 
123456789012 is your AWS account ID. **/
        ARN: string;
        /** Indicates the current status of the distribution. When the status is Deployed ,
the distribution&#x27;s information is fully propagated throughout the Amazon
CloudFront system. **/
        Status: string;
        /** The date and time the distribution was last modified. **/
        LastModifiedTime: timestamp;
        /** The domain name corresponding to the distribution. For example: 
d604721fxaaqy9.cloudfront.net . **/
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
cache behavior, specify true for Enabled , and specify the applicable values for 
Quantity and Items .If you don&#x27;t want to require signed URLs in requests for
objects that match PathPattern , specify false for Enabled and 0 for Quantity .
Omit Items . To add, change, or remove one or more trusted signers, change 
Enabled to true (if it&#x27;s currently false ), change Quantity as applicable, and
specify all of the trusted signers that you want to include in the updated
distribution. **/
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
distribution, specify false for Enabled , and specify empty Bucket and Prefix 
elements. If you specify false for Enabled but you specify values for Bucket and 
Prefix , the values are automatically deleted. **/
        Enabled: boolean;
        /** The Amazon S3 bucket to store the access logs in, for example, 
myawslogbucket.s3.amazonaws.com . **/
        Bucket: string;
        /** An optional string that you want CloudFront to prefix to the access log 
filenames for this streaming distribution, for example, myprefix/ . If you want
to enable logging, but you do not want to specify a prefix, you still must
include an empty Prefix element in the Logging element. **/
        Prefix: string;
    }
    export interface Tag {
        /** A string that contains Tag key.

The string length should be between 1 and 128 characters. Valid characters
include a-z , A-Z , 0-9 , space, and the special characters _ - . : / = + @ . **/
        Key: TagKey;
        /** A string that contains an optional Tag value.

The string length should be between 0 and 256 characters. Valid characters
include a-z , A-Z , 0-9 , space, and the special characters _ - . : / = + @ . **/
        Value?: TagValue;
    }
    export interface TagKeys {
        /** A complex type that contains Tag key elements. **/
        Items?: TagKeyList;
    }
    export interface TagResourceRequest {
        /** An ARN of a CloudFront resource. **/
        Resource: ResourceARN;
        /** A complex type that contains zero or more Tag elements. **/
        Tags: Tags;
    }
    export interface Tags {
        /** A complex type that contains Tag elements. **/
        Items?: TagList;
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
    export interface TooManyDistributionsWithLambdaAssociations {
        Message?: string;
    }
    export interface TooManyHeadersInForwardedValues {
        Message?: string;
    }
    export interface TooManyInvalidationsInProgress {
        Message?: string;
    }
    export interface TooManyLambdaFunctionAssociations {
        Message?: string;
    }
    export interface TooManyOriginCustomHeaders {
        Message?: string;
    }
    export interface TooManyOrigins {
        Message?: string;
    }
    export interface TooManyQueryStringParameters {
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
        /** Specifies whether you want to require viewers to use signed URLs to access the
files specified by PathPattern and TargetOriginId . **/
        Enabled: boolean;
        /** The number of trusted signers for this cache behavior. **/
        Quantity: integer;
        /** Optional : A complex type that contains trusted signers for this cache behavior.
If Quantity is 0 , you can omit Items . **/
        Items?: AwsAccountNumberList;
    }
    export interface UntagResourceRequest {
        /** An ARN of a CloudFront resource. **/
        Resource: ResourceARN;
        /** A complex type that contains zero or more Tag key elements. **/
        TagKeys: TagKeys;
    }
    export interface UpdateCloudFrontOriginAccessIdentityRequest {
        /** The identity&#x27;s configuration information. **/
        CloudFrontOriginAccessIdentityConfig: CloudFrontOriginAccessIdentityConfig;
        /** The identity&#x27;s id. **/
        Id: string;
        /** The value of the ETag header that you received when retrieving the identity&#x27;s
configuration. For example: E2QWRUHAPOMQZL . **/
        IfMatch?: string;
    }
    export interface UpdateCloudFrontOriginAccessIdentityResult {
        /** The origin access identity&#x27;s information. **/
        CloudFrontOriginAccessIdentity?: CloudFrontOriginAccessIdentity;
        /** The current version of the configuration. For example: E2QWRUHAPOMQZL . **/
        ETag?: string;
    }
    export interface UpdateDistributionRequest {
        /** The distribution&#x27;s configuration information. **/
        DistributionConfig: DistributionConfig;
        /** The distribution&#x27;s id. **/
        Id: string;
        /** The value of the ETag header that you received when retrieving the
distribution&#x27;s configuration. For example: E2QWRUHAPOMQZL . **/
        IfMatch?: string;
    }
    export interface UpdateDistributionResult {
        /** The distribution&#x27;s information. **/
        Distribution?: Distribution;
        /** The current version of the configuration. For example: E2QWRUHAPOMQZL . **/
        ETag?: string;
    }
    export interface UpdateStreamingDistributionRequest {
        /** The streaming distribution&#x27;s configuration information. **/
        StreamingDistributionConfig: StreamingDistributionConfig;
        /** The streaming distribution&#x27;s id. **/
        Id: string;
        /** The value of the ETag header that you received when retrieving the streaming
distribution&#x27;s configuration. For example: E2QWRUHAPOMQZL . **/
        IfMatch?: string;
    }
    export interface UpdateStreamingDistributionResult {
        /** The streaming distribution&#x27;s information. **/
        StreamingDistribution?: StreamingDistribution;
        /** The current version of the configuration. For example: E2QWRUHAPOMQZL . **/
        ETag?: string;
    }
    export interface ViewerCertificate {
        CloudFrontDefaultCertificate?: boolean;
        IAMCertificateId?: string;
        ACMCertificateArn?: string;
        /** If you specify a value for ACMCertificateArn or for IAMCertificateId , you must
also specify how you want CloudFront to serve HTTPS requests: using a method
that works for all clients or one that works for most clients:

 &amp;#42; vip : CloudFront uses dedicated IP addresses for your content and can respond
   to HTTPS requests from any viewer. However, you must request permission to
   use this feature, and you incur additional monthly charges.
   
   
 * sni-only : CloudFront can respond to HTTPS requests from viewers that support
   Server Name Indication (SNI). All modern browsers support SNI, but some
   browsers still in use don&#x27;t support SNI. If some of your users&#x27; browsers
   don&#x27;t support SNI, we recommend that you do one of the following:
   
    * Use the vip option (dedicated IP addresses) instead of sni-only .
      
      
    * Use the CloudFront SSL/TLS certificate instead of a custom certificate.
      This requires that you use the CloudFront domain name of your distribution
      in the URLs for your objects, for example, 
      https://d111111abcdef8.cloudfront.net/logo.png .
      
      
    * If you can control which browser your users use, upgrade the browser to
      one that supports SNI.
      
      
    * Use HTTP instead of HTTPS.
      
      
   
   

Do not specify a value for SSLSupportMethod if you specified 
&lt;CloudFrontDefaultCertificate&gt;true&lt;CloudFrontDefaultCertificate&gt; .

For more information, see Using Alternate Domain Names and HTTPS
[http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/SecureConnections.html#CNAMEsAndHTTPS.html] 
in the Amazon CloudFront Developer Guide . **/
        SSLSupportMethod?: SSLSupportMethod;
        /** Specify the minimum version of the SSL/TLS protocol that you want CloudFront to
use for HTTPS connections between viewers and CloudFront: SSLv3 or TLSv1 .
CloudFront serves your objects only to viewers that support SSL/TLS version that
you specify and later versions. The TLSv1 protocol is more secure, so we
recommend that you specify SSLv3 only if your users are using browsers or
devices that don&#x27;t support TLSv1 . Note the following:

 &amp;#42; If you specify
   &lt;CloudFrontDefaultCertificate&gt;true&lt;CloudFrontDefaultCertificate&gt;, the minimum
   SSL protocol version is TLSv1 and can&#x27;t be changed.
   
   
 * If you&#x27;re using a custom certificate (if you specify a value for 
   ACMCertificateArn or for IAMCertificateId ) and if you&#x27;re using SNI (if you
   specify sni-only for SSLSupportMethod ), you must specify TLSv1 for 
   MinimumProtocolVersion . **/
        MinimumProtocolVersion?: MinimumProtocolVersion;
        /** Include one of these values to specify the following:

 &amp;#42; Whether you want viewers to use HTTP or HTTPS to request your objects.
   
   
 * If you want viewers to use HTTPS, whether you&#x27;re using an alternate domain
   name such as example.com or the CloudFront domain name for your distribution,
   such as d111111abcdef8.cloudfront.net .
   
   
 * If you&#x27;re using an alternate domain name, whether AWS Certificate Manager
   (ACM) provided the certificate, or you purchased a certificate from a
   third-party certificate authority and imported it into ACM or uploaded it to
   the IAM certificate store.
   
   

You must specify one (and only one) of the three values. Do not specify false 
for CloudFrontDefaultCertificate .

If you want viewers to use HTTP to request your objects : Specify the following
value:

&lt;CloudFrontDefaultCertificate&gt;true&lt;CloudFrontDefaultCertificate&gt;

In addition, specify allow-all for ViewerProtocolPolicy for all of your cache
behaviors.

If you want viewers to use HTTPS to request your objects : Choose the type of
certificate that you want to use based on whether you&#x27;re using an alternate
domain name for your objects or the CloudFront domain name:

 * If you&#x27;re using an alternate domain name, such as example.com : Specify one
   of the following values, depending on whether ACM provided your certificate
   or you purchased your certificate from third-party certificate authority:
   
    * &lt;ACMCertificateArn&gt;ARN for ACM SSL/TLS certificate&lt;ACMCertificateArn&gt; 
      where ARN for ACM SSL/TLS certificate is the ARN for the ACM SSL/TLS
      certificate that you want to use for this distribution.
      
      
    * &lt;IAMCertificateId&gt;IAM certificate ID&lt;IAMCertificateId&gt; where IAM
      certificate ID is the ID that IAM returned when you added the certificate
      to the IAM certificate store.
      
      
   
   If you specify ACMCertificateArn or IAMCertificateId , you must also specify
   a value for SSLSupportMethod .
   
   If you choose to use an ACM certificate or a certificate in the IAM
   certificate store, we recommend that you use only an alternate domain name in
   your object URLs ( https://example.com/logo.jpg ). If you use the domain name
   that is associated with your CloudFront distribution ( 
   https://d111111abcdef8.cloudfront.net/logo.jpg ) and the viewer supports SNI 
   , then CloudFront behaves normally. However, if the browser does not support
   SNI, the user&#x27;s experience depends on the value that you choose for 
   SSLSupportMethod :
   
    * vip : The viewer displays a warning because there is a mismatch between
      the CloudFront domain name and the domain name in your SSL/TLS
      certificate.
      
      
    * sni-only : CloudFront drops the connection with the browser without
      returning the object.
      
      
   
   
 * If you&#x27;re using the CloudFront domain name for your distribution, such as 
   d111111abcdef8.cloudfront.net : Specify the following value:
   
   &lt;CloudFrontDefaultCertificate&gt;true&lt;CloudFrontDefaultCertificate&gt;
   
   If you want viewers to use HTTPS, you must also specify one of the following
   values in your cache behaviors:
   
    * &lt;ViewerProtocolPolicy&gt;https-only&lt;ViewerProtocolPolicy&gt;
      
      
    * &lt;ViewerProtocolPolicy&gt;redirect-to-https&lt;ViewerProtocolPolicy&gt;
      
      
   
   You can also optionally require that CloudFront use HTTPS to communicate with
   your origin by specifying one of the following values for the applicable
   origins:
   
    * &lt;OriginProtocolPolicy&gt;https-only&lt;OriginProtocolPolicy&gt;
      
      
    * &lt;OriginProtocolPolicy&gt;match-viewer&lt;OriginProtocolPolicy&gt;
      
      
   
   For more information, see Using Alternate Domain Names and HTTPS
   [http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/SecureConnections.html#CNAMEsAndHTTPS] 
   in the Amazon CloudFront Developer Guide . **/
        Certificate?: string;
        /** This field is deprecated. You can use one of the following: [ACMCertificateArn , 
IAMCertificateId , or CloudFrontDefaultCertificate] . **/
        CertificateSource?: CertificateSource;
    }
  }
}
