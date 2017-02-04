// Type definitions for aws-sdk - AWS Certificate Manager
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

// COMMENTED <reference path="./aws-sdk.d.ts" />

declare module "aws-sdk" {

 /**
   * apiVersion: 2015-12-08
   * endpointPrefix: acm
   * serviceAbbreviation: ACM
   * signatureVersion: v4
   * protocol: json
   *
   * AWS Certificate Manager Welcome to the AWS Certificate Manager (ACM) API
documentation.

You can use ACM to manage SSL/TLS certificates for your AWS-based websites and
applications. For general information about using ACM, see the AWS Certificate
Manager User Guide [http://docs.aws.amazon.com/acm/latest/userguide/].
   *
   */
  export class ACM extends Service {
    constructor(options?: any);
    endpoint: Endpoint;
    /**
     * Adds one or more tags to an ACM Certificate. Tags are labels that you can use to
identify and organize your AWS resources. Each tag consists of a key and an
optional value. You specify the certificate on input by its Amazon Resource Name
(ARN). You specify the tag by using a key-value pair.

You can apply a tag to just one certificate if you want to identify a specific
characteristic of that certificate, or you can apply the same tag to multiple
certificates if you want to filter for a common relationship among those
certificates. Similarly, you can apply the same tag to multiple resources if you
want to specify a relationship among those resources. For example, you can add
the same tag to an ACM Certificate and an Elastic Load Balancing load balancer
to indicate that they are both used by the same website. For more information,
see Tagging ACM Certificates
[http://docs.aws.amazon.com/acm/latest/userguide/tags.html].

To remove one or more tags, use the RemoveTagsFromCertificate action. To view
all of the tags that have been applied to the certificate, use the 
ListTagsForCertificate action.
     *
     * @error ResourceNotFoundException   
     * @error InvalidArnException   
     * @error InvalidTagException   
     * @error TooManyTagsException   
     */
    addTagsToCertificate(params: ACM.AddTagsToCertificateRequest, callback?: (err: ACM.ResourceNotFoundException|ACM.InvalidArnException|ACM.InvalidTagException|ACM.TooManyTagsException|any, data: any) => void): Request<any,ACM.ResourceNotFoundException|ACM.InvalidArnException|ACM.InvalidTagException|ACM.TooManyTagsException|any>;
    /**
     * Deletes an ACM Certificate and its associated private key. If this action
succeeds, the certificate no longer appears in the list of ACM Certificates that
can be displayed by calling the ListCertificates action or be retrieved by
calling the GetCertificate action. The certificate will not be available for use
by other AWS services.

You cannot delete an ACM Certificate that is being used by another AWS service.
To delete a certificate that is in use, the certificate association must first
be removed.
     *
     * @error ResourceNotFoundException   
     * @error ResourceInUseException   
     * @error InvalidArnException   
     */
    deleteCertificate(params: ACM.DeleteCertificateRequest, callback?: (err: ACM.ResourceNotFoundException|ACM.ResourceInUseException|ACM.InvalidArnException|any, data: any) => void): Request<any,ACM.ResourceNotFoundException|ACM.ResourceInUseException|ACM.InvalidArnException|any>;
    /**
     * Returns detailed metadata about the specified ACM Certificate.
     *
     * @error ResourceNotFoundException   
     * @error InvalidArnException   
     */
    describeCertificate(params: ACM.DescribeCertificateRequest, callback?: (err: ACM.ResourceNotFoundException|ACM.InvalidArnException|any, data: ACM.DescribeCertificateResponse|any) => void): Request<ACM.DescribeCertificateResponse|any,ACM.ResourceNotFoundException|ACM.InvalidArnException|any>;
    /**
     * Retrieves an ACM Certificate and certificate chain for the certificate specified
by an ARN. The chain is an ordered list of certificates that contains the root
certificate, intermediate certificates of subordinate CAs, and the ACM
Certificate. The certificate and certificate chain are base64 encoded. If you
want to decode the certificate chain to see the individual certificate fields,
you can use OpenSSL.

Currently, ACM Certificates can be used only with Elastic Load Balancing and
Amazon CloudFront.
     *
     * @error ResourceNotFoundException   
     * @error RequestInProgressException   
     * @error InvalidArnException   
     */
    getCertificate(params: ACM.GetCertificateRequest, callback?: (err: ACM.ResourceNotFoundException|ACM.RequestInProgressException|ACM.InvalidArnException|any, data: ACM.GetCertificateResponse|any) => void): Request<ACM.GetCertificateResponse|any,ACM.ResourceNotFoundException|ACM.RequestInProgressException|ACM.InvalidArnException|any>;
    /**
     * Imports an SSL/TLS certificate into AWS Certificate Manager (ACM) to use with 
ACM&#x27;s integrated AWS services
[http://docs.aws.amazon.com/acm/latest/userguide/acm-services.html].

ACM does not provide managed renewal
[http://docs.aws.amazon.com/acm/latest/userguide/acm-renewal.html] for
certificates that you import.

For more information about importing certificates into ACM, including the
differences between certificates that you import and those that ACM provides,
see Importing Certificates
[http://docs.aws.amazon.com/acm/latest/userguide/import-certificate.html] in the 
AWS Certificate Manager User Guide.

To import a certificate, you must provide the certificate and the matching
private key. When the certificate is not self-signed, you must also provide a
certificate chain. You can omit the certificate chain when importing a
self-signed certificate.

The certificate, private key, and certificate chain must be PEM-encoded. For
more information about converting these items to PEM format, see Importing
Certificates Troubleshooting
[http://docs.aws.amazon.com/acm/latest/userguide/import-certificate.html#import-certificate-troubleshooting] 
in the AWS Certificate Manager User Guide.

To import a new certificate, omit the CertificateArn field. Include this field
only when you want to replace a previously imported certificate.

This operation returns the Amazon Resource Name (ARN)
[http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html] of
the imported certificate.
     *
     * @error ResourceNotFoundException   
     * @error LimitExceededException   
     */
    importCertificate(params: ACM.ImportCertificateRequest, callback?: (err: ACM.ResourceNotFoundException|ACM.LimitExceededException|any, data: ACM.ImportCertificateResponse|any) => void): Request<ACM.ImportCertificateResponse|any,ACM.ResourceNotFoundException|ACM.LimitExceededException|any>;
    /**
     * Retrieves a list of ACM Certificates and the domain name for each. You can
optionally filter the list to return only the certificates that match the
specified status.
     *
     */
    listCertificates(params: ACM.ListCertificatesRequest, callback?: (err: any, data: ACM.ListCertificatesResponse|any) => void): Request<ACM.ListCertificatesResponse|any,any>;
    /**
     * Lists the tags that have been applied to the ACM Certificate. Use the
certificate&#x27;s Amazon Resource Name (ARN) to specify the certificate. To add a
tag to an ACM Certificate, use the AddTagsToCertificate action. To delete a tag,
use the RemoveTagsFromCertificate action.
     *
     * @error ResourceNotFoundException   
     * @error InvalidArnException   
     */
    listTagsForCertificate(params: ACM.ListTagsForCertificateRequest, callback?: (err: ACM.ResourceNotFoundException|ACM.InvalidArnException|any, data: ACM.ListTagsForCertificateResponse|any) => void): Request<ACM.ListTagsForCertificateResponse|any,ACM.ResourceNotFoundException|ACM.InvalidArnException|any>;
    /**
     * Remove one or more tags from an ACM Certificate. A tag consists of a key-value
pair. If you do not specify the value portion of the tag when calling this
function, the tag will be removed regardless of value. If you specify a value,
the tag is removed only if it is associated with the specified value.

To add tags to a certificate, use the AddTagsToCertificate action. To view all
of the tags that have been applied to a specific ACM Certificate, use the 
ListTagsForCertificate action.
     *
     * @error ResourceNotFoundException   
     * @error InvalidArnException   
     * @error InvalidTagException   
     */
    removeTagsFromCertificate(params: ACM.RemoveTagsFromCertificateRequest, callback?: (err: ACM.ResourceNotFoundException|ACM.InvalidArnException|ACM.InvalidTagException|any, data: any) => void): Request<any,ACM.ResourceNotFoundException|ACM.InvalidArnException|ACM.InvalidTagException|any>;
    /**
     * Requests an ACM Certificate for use with other AWS services. To request an ACM
Certificate, you must specify the fully qualified domain name (FQDN) for your
site. You can also specify additional FQDNs if users can reach your site by
using other names. For each domain name you specify, email is sent to the domain
owner to request approval to issue the certificate. After receiving approval
from the domain owner, the ACM Certificate is issued. For more information, see
the AWS Certificate Manager User Guide
[http://docs.aws.amazon.com/acm/latest/userguide/].
     *
     * @error LimitExceededException   
     * @error InvalidDomainValidationOptionsException   
     */
    requestCertificate(params: ACM.RequestCertificateRequest, callback?: (err: ACM.LimitExceededException|ACM.InvalidDomainValidationOptionsException|any, data: ACM.RequestCertificateResponse|any) => void): Request<ACM.RequestCertificateResponse|any,ACM.LimitExceededException|ACM.InvalidDomainValidationOptionsException|any>;
    /**
     * Resends the email that requests domain ownership validation. The domain owner or
an authorized representative must approve the ACM Certificate before it can be
issued. The certificate can be approved by clicking a link in the mail to
navigate to the Amazon certificate approval website and then clicking I Approve.
However, the validation email can be blocked by spam filters. Therefore, if you
do not receive the original mail, you can request that the mail be resent within
72 hours of requesting the ACM Certificate. If more than 72 hours have elapsed
since your original request or since your last attempt to resend validation
mail, you must request a new certificate.
     *
     * @error ResourceNotFoundException   
     * @error InvalidStateException   
     * @error InvalidArnException   
     * @error InvalidDomainValidationOptionsException   
     */
    resendValidationEmail(params: ACM.ResendValidationEmailRequest, callback?: (err: ACM.ResourceNotFoundException|ACM.InvalidStateException|ACM.InvalidArnException|ACM.InvalidDomainValidationOptionsException|any, data: any) => void): Request<any,ACM.ResourceNotFoundException|ACM.InvalidStateException|ACM.InvalidArnException|ACM.InvalidDomainValidationOptionsException|any>;

  }

  export module ACM {
    
    export type Arn = string;
    
    export type CertificateBody = string;
    
    export type CertificateBodyBlob = any;
    
    export type CertificateChain = string;
    
    export type CertificateChainBlob = any;
    
    export type CertificateStatus = string;
    
    export type CertificateStatuses = CertificateStatus[];
    
    export type CertificateSummaryList = CertificateSummary[];
    
    export type CertificateType = string;
    
    export type DomainList = DomainNameString[];
    
    export type DomainNameString = string;
    
    export type DomainStatus = string;
    
    export type DomainValidationList = DomainValidation[];
    
    export type DomainValidationOptionList = DomainValidationOption[];
    
    export type FailureReason = string;
    
    export type IdempotencyToken = string;
    
    export type InUseList = String[];
    
    export type KeyAlgorithm = string;
    
    export type MaxItems = number;
    
    export type NextToken = string;
    
    export type PrivateKeyBlob = any;
    
    export type RenewalStatus = string;
    
    export type RevocationReason = string;
    
    export type String = string;
    
    export type TStamp = number;
    
    export type TagKey = string;
    
    export type TagList = Tag[];
    
    export type TagValue = string;
    
    export type ValidationEmailList = String[];

    export interface AddTagsToCertificateRequest {
        /** String that contains the ARN of the ACM Certificate to which the tag is to be
applied. This must be of the form:

 
arn:aws:acm:region:123456789012:certificate/12345678-1234-1234-1234-123456789012 

For more information about ARNs, see Amazon Resource Names (ARNs) and AWS
Service Namespaces
[http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html]. **/
        CertificateArn: Arn;
        /** The key-value pair that defines the tag. The tag value is optional. **/
        Tags: TagList;
    }
    export interface CertificateDetail {
        /** The Amazon Resource Name (ARN) of the certificate. For more information about
ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces
[http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html] in
the AWS General Reference. **/
        CertificateArn?: Arn;
        /** The fully qualified domain name for the certificate, such as www.example.com or
example.com. **/
        DomainName?: DomainNameString;
        /** One or more domain names (subject alternative names) included in the
certificate. This list contains the domain names that are bound to the public
key that is contained in the certificate. The subject alternative names include
the canonical domain name (CN) of the certificate and additional domain names
that can be used to connect to the website. **/
        SubjectAlternativeNames?: DomainList;
        /** Contains information about the initial validation of each domain name that
occurs as a result of the RequestCertificate request. This field exists only
when the certificate type is AMAZON_ISSUED. **/
        DomainValidationOptions?: DomainValidationList;
        /** The serial number of the certificate. **/
        Serial?: String;
        /** The name of the entity that is associated with the public key contained in the
certificate. **/
        Subject?: String;
        /** The name of the certificate authority that issued and signed the certificate. **/
        Issuer?: String;
        /** The time at which the certificate was requested. This value exists only when the
certificate type is AMAZON_ISSUED. **/
        CreatedAt?: TStamp;
        /** The time at which the certificate was issued. This value exists only when the
certificate type is AMAZON_ISSUED. **/
        IssuedAt?: TStamp;
        /** The date and time at which the certificate was imported. This value exists only
when the certificate type is IMPORTED. **/
        ImportedAt?: TStamp;
        /** The status of the certificate. **/
        Status?: CertificateStatus;
        /** The time at which the certificate was revoked. This value exists only when the
certificate status is REVOKED. **/
        RevokedAt?: TStamp;
        /** The reason the certificate was revoked. This value exists only when the
certificate status is REVOKED. **/
        RevocationReason?: RevocationReason;
        /** The time before which the certificate is not valid. **/
        NotBefore?: TStamp;
        /** The time after which the certificate is not valid. **/
        NotAfter?: TStamp;
        /** The algorithm that was used to generate the key pair (the public and private
key). **/
        KeyAlgorithm?: KeyAlgorithm;
        /** The algorithm that was used to sign the certificate. **/
        SignatureAlgorithm?: String;
        /** A list of ARNs for the AWS resources that are using the certificate. A
certificate can be used by multiple AWS resources. **/
        InUseBy?: InUseList;
        /** The reason the certificate request failed. This value exists only when the
certificate status is FAILED. For more information, see Certificate Request
Failed
[http://docs.aws.amazon.com/acm/latest/userguide/troubleshooting.html#troubleshooting-failed] 
in the AWS Certificate Manager User Guide. **/
        FailureReason?: FailureReason;
        /** The source of the certificate. For certificates provided by ACM, this value is 
AMAZON_ISSUED. For certificates that you imported with ImportCertificate, this
value is IMPORTED. ACM does not provide managed renewal
[http://docs.aws.amazon.com/acm/latest/userguide/acm-renewal.html] for imported
certificates. For more information about the differences between certificates
that you import and those that ACM provides, see Importing Certificates
[http://docs.aws.amazon.com/acm/latest/userguide/import-certificate.html] in the 
AWS Certificate Manager User Guide. **/
        Type?: CertificateType;
        /** Contains information about the status of ACM&#x27;s managed renewal
[http://docs.aws.amazon.com/acm/latest/userguide/acm-renewal.html] for the
certificate. This field exists only when the certificate type is AMAZON_ISSUED. **/
        RenewalSummary?: RenewalSummary;
    }
    export interface CertificateSummary {
        /** Amazon Resource Name (ARN) of the certificate. This is of the form:

 
arn:aws:acm:region:123456789012:certificate/12345678-1234-1234-1234-123456789012 

For more information about ARNs, see Amazon Resource Names (ARNs) and AWS
Service Namespaces
[http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html]. **/
        CertificateArn?: Arn;
        /** Fully qualified domain name (FQDN), such as www.example.com or example.com, for
the certificate. **/
        DomainName?: DomainNameString;
    }
    export interface DeleteCertificateRequest {
        /** String that contains the ARN of the ACM Certificate to be deleted. This must be
of the form:

 
arn:aws:acm:region:123456789012:certificate/12345678-1234-1234-1234-123456789012 

For more information about ARNs, see Amazon Resource Names (ARNs) and AWS
Service Namespaces
[http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html]. **/
        CertificateArn: Arn;
    }
    export interface DescribeCertificateRequest {
        /** The Amazon Resource Name (ARN) of the ACM Certificate. The ARN must have the
following form:

 
arn:aws:acm:region:123456789012:certificate/12345678-1234-1234-1234-123456789012 

For more information about ARNs, see Amazon Resource Names (ARNs) and AWS
Service Namespaces
[http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html]. **/
        CertificateArn: Arn;
    }
    export interface DescribeCertificateResponse {
        /** Metadata about an ACM certificate. **/
        Certificate?: CertificateDetail;
    }
    export interface DomainValidation {
        /** A fully qualified domain name (FQDN) in the certificate. For example, 
www.example.com or example.com. **/
        DomainName: DomainNameString;
        /** A list of email addresses that ACM used to send domain validation emails. **/
        ValidationEmails?: ValidationEmailList;
        /** The domain name that ACM used to send domain validation emails. **/
        ValidationDomain?: DomainNameString;
        /** The validation status of the domain name. **/
        ValidationStatus?: DomainStatus;
    }
    export interface DomainValidationOption {
        /** A fully qualified domain name (FQDN) in the certificate request. **/
        DomainName: DomainNameString;
        /** The domain name that you want ACM to use to send you validation emails. This
domain name is the suffix of the email addresses that you want ACM to use. This
must be the same as the DomainName value or a superdomain of the DomainName 
value. For example, if you request a certificate for testing.example.com, you
can specify example.com for this value. In that case, ACM sends domain
validation emails to the following five addresses:

 &amp;#42;  admin@example.com
   
   
 *  administrator@example.com
   
   
 *  hostmaster@example.com
   
   
 *  postmaster@example.com
   
   
 *  webmaster@example.com **/
        ValidationDomain: DomainNameString;
    }
    export interface GetCertificateRequest {
        /** String that contains a certificate ARN in the following format:

 
arn:aws:acm:region:123456789012:certificate/12345678-1234-1234-1234-123456789012 

For more information about ARNs, see Amazon Resource Names (ARNs) and AWS
Service Namespaces
[http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html]. **/
        CertificateArn: Arn;
    }
    export interface GetCertificateResponse {
        /** String that contains the ACM Certificate represented by the ARN specified at
input. **/
        Certificate?: CertificateBody;
        /** The certificate chain that contains the root certificate issued by the
certificate authority (CA). **/
        CertificateChain?: CertificateChain;
    }
    export interface ImportCertificateRequest {
        /** The Amazon Resource Name (ARN)
[http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html] of
an imported certificate to replace. To import a new certificate, omit this
field. **/
        CertificateArn?: Arn;
        /** The certificate to import. It must meet the following requirements:

 &amp;#42;  Must be PEM-encoded.
   
   
 *  Must contain a 1024-bit or 2048-bit RSA public key.
   
   
 *  Must be valid at the time of import. You cannot import a certificate before
   its validity period begins (the certificate&#x27;s NotBefore date) or after it
   expires (the certificate&#x27;s NotAfter date). **/
        Certificate: CertificateBodyBlob;
        /** The private key that matches the public key in the certificate. It must meet the
following requirements:

 &amp;#42;  Must be PEM-encoded.
   
   
 *  Must be unencrypted. You cannot import a private key that is protected by a
   password or passphrase. **/
        PrivateKey: PrivateKeyBlob;
        /** The certificate chain. It must be PEM-encoded. **/
        CertificateChain?: CertificateChainBlob;
    }
    export interface ImportCertificateResponse {
        /** The Amazon Resource Name (ARN)
[http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html] of
the imported certificate. **/
        CertificateArn?: Arn;
    }
    export interface InvalidArnException {
        message?: String;
    }
    export interface InvalidDomainValidationOptionsException {
        message?: String;
    }
    export interface InvalidStateException {
        message?: String;
    }
    export interface InvalidTagException {
        message?: String;
    }
    export interface LimitExceededException {
        message?: String;
    }
    export interface ListCertificatesRequest {
        /** The status or statuses on which to filter the list of ACM Certificates. **/
        CertificateStatuses?: CertificateStatuses;
        /** Use this parameter only when paginating results and only in a subsequent request
after you receive a response with truncated results. Set it to the value of 
NextToken from the response you just received. **/
        NextToken?: NextToken;
        /** Use this parameter when paginating results to specify the maximum number of
items to return in the response. If additional items exist beyond the number you
specify, the NextToken element is sent in the response. Use this NextToken value
in a subsequent request to retrieve additional items. **/
        MaxItems?: MaxItems;
    }
    export interface ListCertificatesResponse {
        /** When the list is truncated, this value is present and contains the value to use
for the NextToken parameter in a subsequent pagination request. **/
        NextToken?: NextToken;
        /** A list of ACM Certificates. **/
        CertificateSummaryList?: CertificateSummaryList;
    }
    export interface ListTagsForCertificateRequest {
        /** String that contains the ARN of the ACM Certificate for which you want to list
the tags. This has the following form:

 
arn:aws:acm:region:123456789012:certificate/12345678-1234-1234-1234-123456789012 

For more information about ARNs, see Amazon Resource Names (ARNs) and AWS
Service Namespaces
[http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html]. **/
        CertificateArn: Arn;
    }
    export interface ListTagsForCertificateResponse {
        /** The key-value pairs that define the applied tags. **/
        Tags?: TagList;
    }
    export interface RemoveTagsFromCertificateRequest {
        /** String that contains the ARN of the ACM Certificate with one or more tags that
you want to remove. This must be of the form:

 
arn:aws:acm:region:123456789012:certificate/12345678-1234-1234-1234-123456789012 

For more information about ARNs, see Amazon Resource Names (ARNs) and AWS
Service Namespaces
[http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html]. **/
        CertificateArn: Arn;
        /** The key-value pair that defines the tag to remove. **/
        Tags: TagList;
    }
    export interface RenewalSummary {
        /** The status of ACM&#x27;s managed renewal
[http://docs.aws.amazon.com/acm/latest/userguide/acm-renewal.html] of the
certificate. **/
        RenewalStatus: RenewalStatus;
        /** Contains information about the validation of each domain name in the
certificate, as it pertains to ACM&#x27;s managed renewal
[http://docs.aws.amazon.com/acm/latest/userguide/acm-renewal.html]. This is
different from the initial validation that occurs as a result of the 
RequestCertificate request. This field exists only when the certificate type is 
AMAZON_ISSUED. **/
        DomainValidationOptions: DomainValidationList;
    }
    export interface RequestCertificateRequest {
        /** Fully qualified domain name (FQDN), such as www.example.com, of the site that
you want to secure with an ACM Certificate. Use an asterisk (&amp;#42;) to create a
wildcard certificate that protects several sites in the same domain. For
example, *.example.com protects www.example.com, site.example.com, and
images.example.com. **/
        DomainName: DomainNameString;
        /** Additional FQDNs to be included in the Subject Alternative Name extension of the
ACM Certificate. For example, add the name www.example.net to a certificate for
which the DomainName field is www.example.com if users can reach your site by
using either name. **/
        SubjectAlternativeNames?: DomainList;
        /** Customer chosen string that can be used to distinguish between calls to 
RequestCertificate. Idempotency tokens time out after one hour. Therefore, if
you call RequestCertificate multiple times with the same idempotency token
within one hour, ACM recognizes that you are requesting only one certificate and
will issue only one. If you change the idempotency token for each call, ACM
recognizes that you are requesting multiple certificates. **/
        IdempotencyToken?: IdempotencyToken;
        /** The domain name that you want ACM to use to send you emails to validate your
ownership of the domain. **/
        DomainValidationOptions?: DomainValidationOptionList;
    }
    export interface RequestCertificateResponse {
        /** String that contains the ARN of the issued certificate. This must be of the
form:

 
arn:aws:acm:us-east-1:123456789012:certificate/12345678-1234-1234-1234-123456789012 **/
        CertificateArn?: Arn;
    }
    export interface RequestInProgressException {
        message?: String;
    }
    export interface ResendValidationEmailRequest {
        /** String that contains the ARN of the requested certificate. The certificate ARN
is generated and returned by the RequestCertificate action as soon as the
request is made. By default, using this parameter causes email to be sent to all
top-level domains you specified in the certificate request.

The ARN must be of the form:

 
arn:aws:acm:us-east-1:123456789012:certificate/12345678-1234-1234-1234-123456789012 **/
        CertificateArn: Arn;
        /** The fully qualified domain name (FQDN) of the certificate that needs to be
validated. **/
        Domain: DomainNameString;
        /** The base validation domain that will act as the suffix of the email addresses
that are used to send the emails. This must be the same as the Domain value or a
superdomain of the Domain value. For example, if you requested a certificate for 
site.subdomain.example.com and specify a ValidationDomain of 
subdomain.example.com, ACM sends email to the domain registrant, technical
contact, and administrative contact in WHOIS and the following five addresses:

 &amp;#42;  admin@subdomain.example.com
   
   
 *  administrator@subdomain.example.com
   
   
 *  hostmaster@subdomain.example.com
   
   
 *  postmaster@subdomain.example.com
   
   
 *  webmaster@subdomain.example.com **/
        ValidationDomain: DomainNameString;
    }
    export interface ResourceInUseException {
        message?: String;
    }
    export interface ResourceNotFoundException {
        message?: String;
    }
    export interface Tag {
        /** The key of the tag. **/
        Key: TagKey;
        /** The value of the tag. **/
        Value?: TagValue;
    }
    export interface TooManyTagsException {
        message?: String;
    }
  }
}
