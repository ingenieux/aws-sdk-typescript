// Type definitions for aws-sdk - Amazon Route 53 Domains
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

// COMMENTED <reference path="./aws-sdk.d.ts" />

declare module "aws-sdk" {

  /**
    * apiVersion: 2014-05-15
    * endpointPrefix: route53domains
    * serviceAbbreviation: 
    * signatureVersion: v4
    * protocol: json
    *
    * 
    *
    */
  export class Route53Domains extends Service {
    constructor(options?: any);
    endpoint: Endpoint;
    /**
     * This operation checks the availability of one domain name. Note that if the
availability status of a domain is pending, you must submit another request to
determine the availability of the domain name.
     *
     * @error InvalidInput   
     * @error UnsupportedTLD   
     */
    checkDomainAvailability(params: Route53Domains.CheckDomainAvailabilityRequest, callback?: (err: Route53Domains.InvalidInput | Route53Domains.UnsupportedTLD | any, data: Route53Domains.CheckDomainAvailabilityResponse | any) => void): Request<Route53Domains.CheckDomainAvailabilityResponse | any, Route53Domains.InvalidInput | Route53Domains.UnsupportedTLD | any>;
    /**
     * This operation deletes the specified tags for a domain.

All tag operations are eventually consistent; subsequent operations may not
immediately represent all issued operations.
     *
     * @error InvalidInput   
     * @error OperationLimitExceeded   
     * @error UnsupportedTLD   
     */
    deleteTagsForDomain(params: Route53Domains.DeleteTagsForDomainRequest, callback?: (err: Route53Domains.InvalidInput | Route53Domains.OperationLimitExceeded | Route53Domains.UnsupportedTLD | any, data: Route53Domains.DeleteTagsForDomainResponse | any) => void): Request<Route53Domains.DeleteTagsForDomainResponse | any, Route53Domains.InvalidInput | Route53Domains.OperationLimitExceeded | Route53Domains.UnsupportedTLD | any>;
    /**
     * This operation disables automatic renewal of domain registration for the
specified domain.
     *
     * @error InvalidInput   
     * @error UnsupportedTLD   
     */
    disableDomainAutoRenew(params: Route53Domains.DisableDomainAutoRenewRequest, callback?: (err: Route53Domains.InvalidInput | Route53Domains.UnsupportedTLD | any, data: Route53Domains.DisableDomainAutoRenewResponse | any) => void): Request<Route53Domains.DisableDomainAutoRenewResponse | any, Route53Domains.InvalidInput | Route53Domains.UnsupportedTLD | any>;
    /**
     * This operation removes the transfer lock on the domain (specifically the 
clientTransferProhibited status) to allow domain transfers. We recommend you
refrain from performing this action unless you intend to transfer the domain to
a different registrar. Successful submission returns an operation ID that you
can use to track the progress and completion of the action. If the request is
not completed successfully, the domain registrant will be notified by email.
     *
     * @error InvalidInput   
     * @error DuplicateRequest   
     * @error TLDRulesViolation   
     * @error OperationLimitExceeded   
     * @error UnsupportedTLD   
     */
    disableDomainTransferLock(params: Route53Domains.DisableDomainTransferLockRequest, callback?: (err: Route53Domains.InvalidInput | Route53Domains.DuplicateRequest | Route53Domains.TLDRulesViolation | Route53Domains.OperationLimitExceeded | Route53Domains.UnsupportedTLD | any, data: Route53Domains.DisableDomainTransferLockResponse | any) => void): Request<Route53Domains.DisableDomainTransferLockResponse | any, Route53Domains.InvalidInput | Route53Domains.DuplicateRequest | Route53Domains.TLDRulesViolation | Route53Domains.OperationLimitExceeded | Route53Domains.UnsupportedTLD | any>;
    /**
     * This operation configures Amazon Route 53 to automatically renew the specified
domain before the domain registration expires. The cost of renewing your domain
registration is billed to your AWS account.

The period during which you can renew a domain name varies by TLD. For a list of
TLDs and their renewal policies, see &quot;Renewal, restoration, and deletion times&quot;
[http://wiki.gandi.net/en/domains/renew#renewal_restoration_and_deletion_times] 
on the website for our registrar partner, Gandi. Route 53 requires that you
renew before the end of the renewal period that is listed on the Gandi website
so we can complete processing before the deadline.
     *
     * @error InvalidInput   
     * @error UnsupportedTLD   
     * @error TLDRulesViolation   
     */
    enableDomainAutoRenew(params: Route53Domains.EnableDomainAutoRenewRequest, callback?: (err: Route53Domains.InvalidInput | Route53Domains.UnsupportedTLD | Route53Domains.TLDRulesViolation | any, data: Route53Domains.EnableDomainAutoRenewResponse | any) => void): Request<Route53Domains.EnableDomainAutoRenewResponse | any, Route53Domains.InvalidInput | Route53Domains.UnsupportedTLD | Route53Domains.TLDRulesViolation | any>;
    /**
     * This operation sets the transfer lock on the domain (specifically the 
clientTransferProhibited status) to prevent domain transfers. Successful
submission returns an operation ID that you can use to track the progress and
completion of the action. If the request is not completed successfully, the
domain registrant will be notified by email.
     *
     * @error InvalidInput   
     * @error DuplicateRequest   
     * @error TLDRulesViolation   
     * @error OperationLimitExceeded   
     * @error UnsupportedTLD   
     */
    enableDomainTransferLock(params: Route53Domains.EnableDomainTransferLockRequest, callback?: (err: Route53Domains.InvalidInput | Route53Domains.DuplicateRequest | Route53Domains.TLDRulesViolation | Route53Domains.OperationLimitExceeded | Route53Domains.UnsupportedTLD | any, data: Route53Domains.EnableDomainTransferLockResponse | any) => void): Request<Route53Domains.EnableDomainTransferLockResponse | any, Route53Domains.InvalidInput | Route53Domains.DuplicateRequest | Route53Domains.TLDRulesViolation | Route53Domains.OperationLimitExceeded | Route53Domains.UnsupportedTLD | any>;
    /**
     * For operations that require confirmation that the email address for the
registrant contact is valid, such as registering a new domain, this operation
returns information about whether the registrant contact has responded.

If you want us to resend the email, use the ResendContactReachabilityEmail 
operation.
     *
     * @error InvalidInput   
     * @error OperationLimitExceeded   
     * @error UnsupportedTLD   
     */
    getContactReachabilityStatus(params: Route53Domains.GetContactReachabilityStatusRequest, callback?: (err: Route53Domains.InvalidInput | Route53Domains.OperationLimitExceeded | Route53Domains.UnsupportedTLD | any, data: Route53Domains.GetContactReachabilityStatusResponse | any) => void): Request<Route53Domains.GetContactReachabilityStatusResponse | any, Route53Domains.InvalidInput | Route53Domains.OperationLimitExceeded | Route53Domains.UnsupportedTLD | any>;
    /**
     * This operation returns detailed information about the domain. The domain&#x27;s
contact information is also returned as part of the output.
     *
     * @error InvalidInput   
     * @error UnsupportedTLD   
     */
    getDomainDetail(params: Route53Domains.GetDomainDetailRequest, callback?: (err: Route53Domains.InvalidInput | Route53Domains.UnsupportedTLD | any, data: Route53Domains.GetDomainDetailResponse | any) => void): Request<Route53Domains.GetDomainDetailResponse | any, Route53Domains.InvalidInput | Route53Domains.UnsupportedTLD | any>;
    /**
     * The GetDomainSuggestions operation returns a list of suggested domain names
given a string, which can either be a domain name or simply a word or phrase
(without spaces).

 Parameters:  &amp;#42; DomainName (string): The basis for your domain suggestion
   search, a string with (or without) top-level domain specified.
 * SuggestionCount (int): The number of domain suggestions to be
   returned, maximum 50, minimum 1.
 * OnlyAvailable (bool): If true, availability check will be
   performed on suggestion results, and only available domains will be returned.
   If false, suggestions will be returned without checking whether the domain is
   actually available, and caller will have to call checkDomainAvailability for
   each suggestion to determine availability for registration.
     *
     * @error InvalidInput   
     * @error UnsupportedTLD   
     */
    getDomainSuggestions(params: Route53Domains.GetDomainSuggestionsRequest, callback?: (err: Route53Domains.InvalidInput | Route53Domains.UnsupportedTLD | any, data: Route53Domains.GetDomainSuggestionsResponse | any) => void): Request<Route53Domains.GetDomainSuggestionsResponse | any, Route53Domains.InvalidInput | Route53Domains.UnsupportedTLD | any>;
    /**
     * This operation returns the current status of an operation that is not completed.
     *
     * @error InvalidInput   
     */
    getOperationDetail(params: Route53Domains.GetOperationDetailRequest, callback?: (err: Route53Domains.InvalidInput | any, data: Route53Domains.GetOperationDetailResponse | any) => void): Request<Route53Domains.GetOperationDetailResponse | any, Route53Domains.InvalidInput | any>;
    /**
     * This operation returns all the domain names registered with Amazon Route 53 for
the current AWS account.
     *
     * @error InvalidInput   
     */
    listDomains(params: Route53Domains.ListDomainsRequest, callback?: (err: Route53Domains.InvalidInput | any, data: Route53Domains.ListDomainsResponse | any) => void): Request<Route53Domains.ListDomainsResponse | any, Route53Domains.InvalidInput | any>;
    /**
     * This operation returns the operation IDs of operations that are not yet
complete.
     *
     * @error InvalidInput   
     */
    listOperations(params: Route53Domains.ListOperationsRequest, callback?: (err: Route53Domains.InvalidInput | any, data: Route53Domains.ListOperationsResponse | any) => void): Request<Route53Domains.ListOperationsResponse | any, Route53Domains.InvalidInput | any>;
    /**
     * This operation returns all of the tags that are associated with the specified
domain.

All tag operations are eventually consistent; subsequent operations may not
immediately represent all issued operations.
     *
     * @error InvalidInput   
     * @error OperationLimitExceeded   
     * @error UnsupportedTLD   
     */
    listTagsForDomain(params: Route53Domains.ListTagsForDomainRequest, callback?: (err: Route53Domains.InvalidInput | Route53Domains.OperationLimitExceeded | Route53Domains.UnsupportedTLD | any, data: Route53Domains.ListTagsForDomainResponse | any) => void): Request<Route53Domains.ListTagsForDomainResponse | any, Route53Domains.InvalidInput | Route53Domains.OperationLimitExceeded | Route53Domains.UnsupportedTLD | any>;
    /**
     * This operation registers a domain. Domains are registered by the AWS registrar
partner, Gandi. For some top-level domains (TLDs), this operation requires extra
parameters.

When you register a domain, Amazon Route 53 does the following:

 &amp;#42; Creates a Amazon Route 53 hosted zone that has the same name as the domain.
   Amazon Route 53 assigns four name servers to your hosted zone and
   automatically updates your domain registration with the names of these name
   servers.
 * Enables autorenew, so your domain registration will renew automatically each
   year. We&#x27;ll notify you in advance of the renewal date so you can choose
   whether to renew the registration.
 * Optionally enables privacy protection, so WHOIS queries return contact
   information for our registrar partner, Gandi, instead of the information you
   entered for registrant, admin, and tech contacts.
 * If registration is successful, returns an operation ID that you can use to
   track the progress and completion of the action. If the request is not
   completed successfully, the domain registrant is notified by email.
 * Charges your AWS account an amount based on the top-level domain. For more
   information, see Amazon Route 53 Pricing
   [http://aws.amazon.com/route53/pricing/].
     *
     * @error InvalidInput   
     * @error UnsupportedTLD   
     * @error DuplicateRequest   
     * @error TLDRulesViolation   
     * @error DomainLimitExceeded   
     * @error OperationLimitExceeded   
     */
    registerDomain(params: Route53Domains.RegisterDomainRequest, callback?: (err: Route53Domains.InvalidInput | Route53Domains.UnsupportedTLD | Route53Domains.DuplicateRequest | Route53Domains.TLDRulesViolation | Route53Domains.DomainLimitExceeded | Route53Domains.OperationLimitExceeded | any, data: Route53Domains.RegisterDomainResponse | any) => void): Request<Route53Domains.RegisterDomainResponse | any, Route53Domains.InvalidInput | Route53Domains.UnsupportedTLD | Route53Domains.DuplicateRequest | Route53Domains.TLDRulesViolation | Route53Domains.DomainLimitExceeded | Route53Domains.OperationLimitExceeded | any>;
    /**
     * This operation renews a domain for the specified number of years. The cost of
renewing your domain is billed to your AWS account.

We recommend that you renew your domain several weeks before the expiration
date. Some TLD registries delete domains before the expiration date if you
haven&#x27;t renewed far enough in advance. For more information about renewing
domain registration, see Renewing Registration for a Domain
[http://docs.aws.amazon.com/console/route53/domain-renew] in the Amazon Route 53
documentation.
     *
     * @error InvalidInput   
     * @error UnsupportedTLD   
     * @error DuplicateRequest   
     * @error TLDRulesViolation   
     * @error OperationLimitExceeded   
     */
    renewDomain(params: Route53Domains.RenewDomainRequest, callback?: (err: Route53Domains.InvalidInput | Route53Domains.UnsupportedTLD | Route53Domains.DuplicateRequest | Route53Domains.TLDRulesViolation | Route53Domains.OperationLimitExceeded | any, data: Route53Domains.RenewDomainResponse | any) => void): Request<Route53Domains.RenewDomainResponse | any, Route53Domains.InvalidInput | Route53Domains.UnsupportedTLD | Route53Domains.DuplicateRequest | Route53Domains.TLDRulesViolation | Route53Domains.OperationLimitExceeded | any>;
    /**
     * For operations that require confirmation that the email address for the
registrant contact is valid, such as registering a new domain, this operation
resends the confirmation email to the current email address for the registrant
contact.
     *
     * @error InvalidInput   
     * @error OperationLimitExceeded   
     * @error UnsupportedTLD   
     */
    resendContactReachabilityEmail(params: Route53Domains.ResendContactReachabilityEmailRequest, callback?: (err: Route53Domains.InvalidInput | Route53Domains.OperationLimitExceeded | Route53Domains.UnsupportedTLD | any, data: Route53Domains.ResendContactReachabilityEmailResponse | any) => void): Request<Route53Domains.ResendContactReachabilityEmailResponse | any, Route53Domains.InvalidInput | Route53Domains.OperationLimitExceeded | Route53Domains.UnsupportedTLD | any>;
    /**
     * This operation returns the AuthCode for the domain. To transfer a domain to
another registrar, you provide this value to the new registrar.
     *
     * @error InvalidInput   
     * @error UnsupportedTLD   
     */
    retrieveDomainAuthCode(params: Route53Domains.RetrieveDomainAuthCodeRequest, callback?: (err: Route53Domains.InvalidInput | Route53Domains.UnsupportedTLD | any, data: Route53Domains.RetrieveDomainAuthCodeResponse | any) => void): Request<Route53Domains.RetrieveDomainAuthCodeResponse | any, Route53Domains.InvalidInput | Route53Domains.UnsupportedTLD | any>;
    /**
     * This operation transfers a domain from another registrar to Amazon Route 53.
When the transfer is complete, the domain is registered with the AWS registrar
partner, Gandi.

For transfer requirements, a detailed procedure, and information about viewing
the status of a domain transfer, see Transferring Registration for a Domain to
Amazon Route 53
[http://docs.aws.amazon.com/Route53/latest/DeveloperGuide/domain-transfer-to-route-53.html] 
in the Amazon Route 53 Developer Guide.

If the registrar for your domain is also the DNS service provider for the
domain, we highly recommend that you consider transferring your DNS service to
Amazon Route 53 or to another DNS service provider before you transfer your
registration. Some registrars provide free DNS service when you purchase a
domain registration. When you transfer the registration, the previous registrar
will not renew your domain registration and could end your DNS service at any
time.

Caution! If the registrar for your domain is also the DNS service provider for
the domain and you don&#x27;t transfer DNS service to another provider, your website,
email, and the web applications associated with the domain might become
unavailable. If the transfer is successful, this method returns an operation ID
that you can use to track the progress and completion of the action. If the
transfer doesn&#x27;t complete successfully, the domain registrant will be notified
by email.
     *
     * @error InvalidInput   
     * @error UnsupportedTLD   
     * @error DuplicateRequest   
     * @error TLDRulesViolation   
     * @error DomainLimitExceeded   
     * @error OperationLimitExceeded   
     */
    transferDomain(params: Route53Domains.TransferDomainRequest, callback?: (err: Route53Domains.InvalidInput | Route53Domains.UnsupportedTLD | Route53Domains.DuplicateRequest | Route53Domains.TLDRulesViolation | Route53Domains.DomainLimitExceeded | Route53Domains.OperationLimitExceeded | any, data: Route53Domains.TransferDomainResponse | any) => void): Request<Route53Domains.TransferDomainResponse | any, Route53Domains.InvalidInput | Route53Domains.UnsupportedTLD | Route53Domains.DuplicateRequest | Route53Domains.TLDRulesViolation | Route53Domains.DomainLimitExceeded | Route53Domains.OperationLimitExceeded | any>;
    /**
     * This operation updates the contact information for a particular domain.
Information for at least one contact (registrant, administrator, or technical)
must be supplied for update.

If the update is successful, this method returns an operation ID that you can
use to track the progress and completion of the action. If the request is not
completed successfully, the domain registrant will be notified by email.
     *
     * @error InvalidInput   
     * @error DuplicateRequest   
     * @error TLDRulesViolation   
     * @error OperationLimitExceeded   
     * @error UnsupportedTLD   
     */
    updateDomainContact(params: Route53Domains.UpdateDomainContactRequest, callback?: (err: Route53Domains.InvalidInput | Route53Domains.DuplicateRequest | Route53Domains.TLDRulesViolation | Route53Domains.OperationLimitExceeded | Route53Domains.UnsupportedTLD | any, data: Route53Domains.UpdateDomainContactResponse | any) => void): Request<Route53Domains.UpdateDomainContactResponse | any, Route53Domains.InvalidInput | Route53Domains.DuplicateRequest | Route53Domains.TLDRulesViolation | Route53Domains.OperationLimitExceeded | Route53Domains.UnsupportedTLD | any>;
    /**
     * This operation updates the specified domain contact&#x27;s privacy setting. When the
privacy option is enabled, personal information such as postal or email address
is hidden from the results of a public WHOIS query. The privacy services are
provided by the AWS registrar, Gandi. For more information, see the Gandi
privacy features [http://www.gandi.net/domain/whois/?currency=USD&amp;amp;lang=en].

This operation only affects the privacy of the specified contact type
(registrant, administrator, or tech). Successful acceptance returns an operation
ID that you can use with GetOperationDetail to track the progress and completion
of the action. If the request is not completed successfully, the domain
registrant will be notified by email.
     *
     * @error InvalidInput   
     * @error DuplicateRequest   
     * @error TLDRulesViolation   
     * @error OperationLimitExceeded   
     * @error UnsupportedTLD   
     */
    updateDomainContactPrivacy(params: Route53Domains.UpdateDomainContactPrivacyRequest, callback?: (err: Route53Domains.InvalidInput | Route53Domains.DuplicateRequest | Route53Domains.TLDRulesViolation | Route53Domains.OperationLimitExceeded | Route53Domains.UnsupportedTLD | any, data: Route53Domains.UpdateDomainContactPrivacyResponse | any) => void): Request<Route53Domains.UpdateDomainContactPrivacyResponse | any, Route53Domains.InvalidInput | Route53Domains.DuplicateRequest | Route53Domains.TLDRulesViolation | Route53Domains.OperationLimitExceeded | Route53Domains.UnsupportedTLD | any>;
    /**
     * This operation replaces the current set of name servers for the domain with the
specified set of name servers. If you use Amazon Route 53 as your DNS service,
specify the four name servers in the delegation set for the hosted zone for the
domain. 

If successful, this operation returns an operation ID that you can use to track
the progress and completion of the action. If the request is not completed
successfully, the domain registrant will be notified by email.
     *
     * @error InvalidInput   
     * @error DuplicateRequest   
     * @error TLDRulesViolation   
     * @error OperationLimitExceeded   
     * @error UnsupportedTLD   
     */
    updateDomainNameservers(params: Route53Domains.UpdateDomainNameserversRequest, callback?: (err: Route53Domains.InvalidInput | Route53Domains.DuplicateRequest | Route53Domains.TLDRulesViolation | Route53Domains.OperationLimitExceeded | Route53Domains.UnsupportedTLD | any, data: Route53Domains.UpdateDomainNameserversResponse | any) => void): Request<Route53Domains.UpdateDomainNameserversResponse | any, Route53Domains.InvalidInput | Route53Domains.DuplicateRequest | Route53Domains.TLDRulesViolation | Route53Domains.OperationLimitExceeded | Route53Domains.UnsupportedTLD | any>;
    /**
     * This operation adds or updates tags for a specified domain.

All tag operations are eventually consistent; subsequent operations may not
immediately represent all issued operations.
     *
     * @error InvalidInput   
     * @error OperationLimitExceeded   
     * @error UnsupportedTLD   
     */
    updateTagsForDomain(params: Route53Domains.UpdateTagsForDomainRequest, callback?: (err: Route53Domains.InvalidInput | Route53Domains.OperationLimitExceeded | Route53Domains.UnsupportedTLD | any, data: Route53Domains.UpdateTagsForDomainResponse | any) => void): Request<Route53Domains.UpdateTagsForDomainResponse | any, Route53Domains.InvalidInput | Route53Domains.OperationLimitExceeded | Route53Domains.UnsupportedTLD | any>;
    /**
     * This operation returns all the domain-related billing records for the current
AWS account for a specified period
     *
     * @error InvalidInput   
     */
    viewBilling(params: Route53Domains.ViewBillingRequest, callback?: (err: Route53Domains.InvalidInput | any, data: Route53Domains.ViewBillingResponse | any) => void): Request<Route53Domains.ViewBillingResponse | any, Route53Domains.InvalidInput | any>;

  }

  export module Route53Domains {

    export type AddressLine = string;

    export type BillingRecords = BillingRecord[];

    export type Boolean = boolean;

    export type City = string;

    export type ContactName = string;

    export type ContactNumber = string;

    export type ContactType = string;

    export type CountryCode = string;

    export type CurrentExpiryYear = number;

    export type DNSSec = string;

    export type DomainAuthCode = string;

    export type DomainAvailability = string;

    export type DomainName = string;

    export type DomainStatus = string;

    export type DomainStatusList = DomainStatus[];

    export type DomainSuggestionsList = DomainSuggestion[];

    export type DomainSummaryList = DomainSummary[];

    export type DurationInYears = number;

    export type Email = string;

    export type ErrorMessage = string;

    export type ExtraParamList = ExtraParam[];

    export type ExtraParamName = string;

    export type ExtraParamValue = string;

    export type FIAuthKey = string;

    export type GlueIp = string;

    export type GlueIpList = GlueIp[];

    export type HostName = string;

    export type Integer = number;

    export type InvoiceId = string;

    export type LangCode = string;

    export type NameserverList = Nameserver[];

    export type OperationId = string;

    export type OperationStatus = string;

    export type OperationSummaryList = OperationSummary[];

    export type OperationType = string;

    export type PageMarker = string;

    export type PageMaxItems = number;

    export type Price = number;

    export type ReachabilityStatus = string;

    export type RegistrarName = string;

    export type RegistrarUrl = string;

    export type RegistrarWhoIsServer = string;

    export type RegistryDomainId = string;

    export type Reseller = string;

    export type State = string;

    export type String = string;

    export type TagKey = string;

    export type TagKeyList = TagKey[];

    export type TagList = Tag[];

    export type TagValue = string;

    export type Timestamp = number;

    export type ZipCode = string;

    export interface BillingRecord {
      /** The name of a domain.

Type: String **/
      DomainName?: DomainName;
      /** The operation that you were charged for.

Type: String

Valid values:  &amp;#42; REGISTER_DOMAIN
* TRANSFER_IN_DOMAIN
* RENEW_DOMAIN
* CHANGE_DOMAIN_OWNER **/
      Operation?: OperationType;
      /** The ID of the invoice that is associated with the billing record.

Type: String **/
      InvoiceId?: InvoiceId;
      /** The date that the operation was billed, in Unix format.

Type: Double **/
      BillDate?: Timestamp;
      /** The price that you were charged for the operation, in US dollars.

Type: Double

Example value: 12.0 **/
      Price?: Price;
    }
    export interface CheckDomainAvailabilityRequest {
      /** The name of a domain.

Type: String

Default: None

Constraints: The domain name can contain only the letters a through z, the
numbers 0 through 9, and hyphen (-). Internationalized Domain Names are not
supported.

Required: Yes **/
      DomainName: DomainName;
      /** Reserved for future use. **/
      IdnLangCode?: LangCode;
    }
    export interface CheckDomainAvailabilityResponse {
      /** Whether the domain name is available for registering.

You can only register domains designated as AVAILABLE.

Type: String

Valid values:

&amp;#42; AVAILABLE – The domain name is available.
* AVAILABLE_RESERVED – The domain name is reserved under specific conditions.
* AVAILABLE_PREORDER – The domain name is available and can be preordered.
* UNAVAILABLE – The domain name is not available.
* UNAVAILABLE_PREMIUM – The domain name is not available.
* UNAVAILABLE_RESTRICTED – The domain name is forbidden.
* RESERVED – The domain name has been reserved for another person or
 organization.
* DONT_KNOW – The TLD registry didn&#x27;t reply with a definitive answer about
 whether the domain name is available. Amazon Route 53 can return this
 response for a variety of reasons, for example, the registry is performing
 maintenance. Try again later. **/
      Availability: DomainAvailability;
    }
    export interface ContactDetail {
      /** First name of contact.

Type: String

Default: None

Constraints: Maximum 255 characters.

Parents: RegistrantContact, AdminContact, TechContact 

Required: Yes **/
      FirstName?: ContactName;
      /** Last name of contact.

Type: String

Default: None

Constraints: Maximum 255 characters.

Parents: RegistrantContact, AdminContact, TechContact

Required: Yes **/
      LastName?: ContactName;
      /** Indicates whether the contact is a person, company, association, or public
organization. If you choose an option other than PERSON, you must enter an
organization name, and you can&#x27;t enable privacy protection for the contact.

Type: String

Default: None

Constraints: Maximum 255 characters.

Valid values: PERSON | COMPANY | ASSOCIATION | PUBLIC_BODY

Parents: RegistrantContact, AdminContact, TechContact 

Required: Yes **/
      ContactType?: ContactType;
      /** Name of the organization for contact types other than PERSON.

Type: String

Default: None

Constraints: Maximum 255 characters. Contact type must not be PERSON.

Parents: RegistrantContact, AdminContact, TechContact

Required: No **/
      OrganizationName?: ContactName;
      /** First line of the contact&#x27;s address.

Type: String

Default: None

Constraints: Maximum 255 characters.

Parents: RegistrantContact, AdminContact, TechContact

Required: Yes **/
      AddressLine1?: AddressLine;
      /** Second line of contact&#x27;s address, if any.

Type: String

Default: None

Constraints: Maximum 255 characters.

Parents: RegistrantContact, AdminContact, TechContact

Required: No **/
      AddressLine2?: AddressLine;
      /** The city of the contact&#x27;s address.

Type: String

Default: None

Constraints: Maximum 255 characters.

Parents: RegistrantContact, AdminContact, TechContact

Required: Yes **/
      City?: City;
      /** The state or province of the contact&#x27;s city.

Type: String

Default: None

Constraints: Maximum 255 characters.

Parents: RegistrantContact, AdminContact, TechContact

Required: No **/
      State?: State;
      /** Code for the country of the contact&#x27;s address.

Type: String

Default: None

Constraints: Maximum 255 characters.

Parents: RegistrantContact, AdminContact, TechContact

Required: Yes **/
      CountryCode?: CountryCode;
      /** The zip or postal code of the contact&#x27;s address.

Type: String

Default: None

Constraints: Maximum 255 characters.

Parents: RegistrantContact, AdminContact, TechContact

Required: No **/
      ZipCode?: ZipCode;
      /** The phone number of the contact.

Type: String

Default: None

Constraints: Phone number must be specified in the format &quot;+[country dialing
code].[number including any area code]&quot;. For example, a US phone number might
appear as &quot;+1.1234567890&quot;.

Parents: RegistrantContact, AdminContact, TechContact

Required: Yes **/
      PhoneNumber?: ContactNumber;
      /** Email address of the contact.

Type: String

Default: None

Constraints: Maximum 254 characters.

Parents: RegistrantContact, AdminContact, TechContact 

Required: Yes **/
      Email?: Email;
      /** Fax number of the contact.

Type: String

Default: None

Constraints: Phone number must be specified in the format &quot;+[country dialing
code].[number including any area code]&quot;. For example, a US phone number might
appear as &quot;+1.1234567890&quot;.

Parents: RegistrantContact, AdminContact, TechContact

Required: No **/
      Fax?: ContactNumber;
      /** A list of name-value pairs for parameters required by certain top-level domains.

Type: Complex

Default: None

Parents: RegistrantContact, AdminContact, TechContact

Children: Name, Value

Required: No **/
      ExtraParams?: ExtraParamList;
    }
    export interface DeleteTagsForDomainRequest {
      /** The domain for which you want to delete one or more tags.

The name of a domain.

Type: String

Default: None

Constraints: The domain name can contain only the letters a through z, the
numbers 0 through 9, and hyphen (-). Hyphens are allowed only when they&#x27;re
surrounded by letters, numbers, or other hyphens. You can&#x27;t specify a hyphen at
the beginning or end of a label. To specify an Internationalized Domain Name,
you must convert the name to Punycode.

Required: Yes **/
      DomainName: DomainName;
      /** A list of tag keys to delete.

Type: A list that contains the keys of the tags that you want to delete.

Default: None

Required: No

&#x27; **/
      TagsToDelete: TagKeyList;
    }
    export interface DeleteTagsForDomainResponse {
    }
    export interface DisableDomainAutoRenewRequest {
      DomainName: DomainName;
    }
    export interface DisableDomainAutoRenewResponse {
    }
    export interface DisableDomainTransferLockRequest {
      /** The name of a domain.

Type: String

Default: None

Constraints: The domain name can contain only the letters a through z, the
numbers 0 through 9, and hyphen (-). Internationalized Domain Names are not
supported.

Required: Yes **/
      DomainName: DomainName;
    }
    export interface DisableDomainTransferLockResponse {
      /** Identifier for tracking the progress of the request. To use this ID to query the
operation status, use GetOperationDetail.

Type: String

Default: None

Constraints: Maximum 255 characters. **/
      OperationId: OperationId;
    }
    export interface DomainLimitExceeded {
      message?: ErrorMessage;
    }
    export interface DomainSuggestion {
      DomainName?: DomainName;
      Availability?: String;
    }
    export interface DomainSummary {
      /** The name of a domain.

Type: String **/
      DomainName: DomainName;
      /** Indicates whether the domain is automatically renewed upon expiration.

Type: Boolean

Valid values: True | False **/
      AutoRenew?: Boolean;
      /** Indicates whether a domain is locked from unauthorized transfer to another
party.

Type: Boolean

Valid values: True | False **/
      TransferLock?: Boolean;
      /** Expiration date of the domain in Coordinated Universal Time (UTC).

Type: Long **/
      Expiry?: Timestamp;
    }
    export interface DuplicateRequest {
      message?: ErrorMessage;
    }
    export interface EnableDomainAutoRenewRequest {
      DomainName: DomainName;
    }
    export interface EnableDomainAutoRenewResponse {
    }
    export interface EnableDomainTransferLockRequest {
      /** The name of a domain.

Type: String

Default: None

Constraints: The domain name can contain only the letters a through z, the
numbers 0 through 9, and hyphen (-). Internationalized Domain Names are not
supported.

Required: Yes **/
      DomainName: DomainName;
    }
    export interface EnableDomainTransferLockResponse {
      /** Identifier for tracking the progress of the request. To use this ID to query the
operation status, use GetOperationDetail.

Type: String

Default: None

Constraints: Maximum 255 characters. **/
      OperationId: OperationId;
    }
    export interface ExtraParam {
      /** Name of the additional parameter required by the top-level domain.

Type: String

Default: None

Valid values: DUNS_NUMBER | BRAND_NUMBER | BIRTH_DEPARTMENT | 
BIRTH_DATE_IN_YYYY_MM_DD | BIRTH_COUNTRY | BIRTH_CITY | DOCUMENT_NUMBER | 
AU_ID_NUMBER | AU_ID_TYPE | CA_LEGAL_TYPE | CA_BUSINESS_ENTITY_TYPE |
ES_IDENTIFICATION | ES_IDENTIFICATION_TYPE | ES_LEGAL_FORM | FI_BUSINESS_NUMBER 
| FI_ID_NUMBER | IT_PIN | RU_PASSPORT_DATA | SE_ID_NUMBER | SG_ID_NUMBER | 
VAT_NUMBER

Parent: ExtraParams

Required: Yes **/
      Name: ExtraParamName;
      /** Values corresponding to the additional parameter names required by some
top-level domains.

Type: String

Default: None

Constraints: Maximum 2048 characters.

Parent: ExtraParams

Required: Yes **/
      Value: ExtraParamValue;
    }
    export interface GetContactReachabilityStatusRequest {
      /** The name of the domain for which you want to know whether the registrant contact
has confirmed that the email address is valid.

Type: String

Default: None

Required: Yes **/
      domainName?: DomainName;
    }
    export interface GetContactReachabilityStatusResponse {
      /** The domain name for which you requested the reachability status. **/
      domainName?: DomainName;
      /** Whether the registrant contact has responded. PENDING indicates that we sent the
confirmation email and haven&#x27;t received a response yet, DONE indicates that we
sent the email and got confirmation from the registrant contact, and EXPIRED 
indicates that the time limit expired before the registrant contact responded. 

Type: String

Valid values: PENDING, DONE, EXPIRED **/
      status?: ReachabilityStatus;
    }
    export interface GetDomainDetailRequest {
      /** The name of a domain.

Type: String

Default: None

Constraints: The domain name can contain only the letters a through z, the
numbers 0 through 9, and hyphen (-). Internationalized Domain Names are not
supported.

Required: Yes **/
      DomainName: DomainName;
    }
    export interface GetDomainDetailResponse {
      /** The name of a domain.

Type: String **/
      DomainName: DomainName;
      /** The name of the domain.

Type: String **/
      Nameservers: NameserverList;
      /** Specifies whether the domain registration is set to renew automatically.

Type: Boolean **/
      AutoRenew?: Boolean;
      /** Provides details about the domain administrative contact. 

Type: Complex

Children: FirstName, MiddleName, LastName, ContactType, OrganizationName, 
AddressLine1, AddressLine2, City, State, CountryCode, ZipCode, PhoneNumber, 
Email, Fax, ExtraParams **/
      AdminContact: ContactDetail;
      /** Provides details about the domain registrant. 

Type: Complex

Children: FirstName, MiddleName, LastName, ContactType, OrganizationName, 
AddressLine1, AddressLine2, City, State, CountryCode, ZipCode, PhoneNumber, 
Email, Fax, ExtraParams **/
      RegistrantContact: ContactDetail;
      /** Provides details about the domain technical contact.

Type: Complex

Children: FirstName, MiddleName, LastName, ContactType, OrganizationName, 
AddressLine1, AddressLine2, City, State, CountryCode, ZipCode, PhoneNumber, 
Email, Fax, ExtraParams **/
      TechContact: ContactDetail;
      /** Specifies whether contact information for the admin contact is concealed from
WHOIS queries. If the value is true, WHOIS (&quot;who is&quot;) queries will return
contact information for our registrar partner, Gandi, instead of the contact
information that you enter.

Type: Boolean **/
      AdminPrivacy?: Boolean;
      /** Specifies whether contact information for the registrant contact is concealed
from WHOIS queries. If the value is true, WHOIS (&quot;who is&quot;) queries will return
contact information for our registrar partner, Gandi, instead of the contact
information that you enter.

Type: Boolean **/
      RegistrantPrivacy?: Boolean;
      /** Specifies whether contact information for the tech contact is concealed from
WHOIS queries. If the value is true, WHOIS (&quot;who is&quot;) queries will return
contact information for our registrar partner, Gandi, instead of the contact
information that you enter.

Type: Boolean **/
      TechPrivacy?: Boolean;
      /** Name of the registrar of the domain as identified in the registry. Amazon Route
53 domains are registered by registrar Gandi. The value is &quot;GANDI SAS&quot;. 

Type: String **/
      RegistrarName?: RegistrarName;
      /** The fully qualified name of the WHOIS server that can answer the WHOIS query for
the domain.

Type: String **/
      WhoIsServer?: RegistrarWhoIsServer;
      /** Web address of the registrar.

Type: String **/
      RegistrarUrl?: RegistrarUrl;
      /** Email address to contact to report incorrect contact information for a domain,
to report that the domain is being used to send spam, to report that someone is
cybersquatting on a domain name, or report some other type of abuse. 

Type: String **/
      AbuseContactEmail?: Email;
      /** Phone number for reporting abuse. 

Type: String **/
      AbuseContactPhone?: ContactNumber;
      /** Reserved for future use. **/
      RegistryDomainId?: RegistryDomainId;
      /** The date when the domain was created as found in the response to a WHOIS query.
The date format is Unix time. **/
      CreationDate?: Timestamp;
      /** The last updated date of the domain as found in the response to a WHOIS query.
The date format is Unix time. **/
      UpdatedDate?: Timestamp;
      /** The date when the registration for the domain is set to expire. The date format
is Unix time. **/
      ExpirationDate?: Timestamp;
      /** Reseller of the domain. Domains registered or transferred using Amazon Route 53
domains will have &quot;Amazon&quot; as the reseller. 

Type: String **/
      Reseller?: Reseller;
      /** Reserved for future use. **/
      DnsSec?: DNSSec;
      /** An array of domain name status codes, also known as Extensible Provisioning
Protocol (EPP) status codes.

ICANN, the organization that maintains a central database of domain names, has
developed a set of domain name status codes that tell you the status of a
variety of operations on a domain name, for example, registering a domain name,
transferring a domain name to another registrar, renewing the registration for a
domain name, and so on. All registrars use this same set of status codes.

For a current list of domain name status codes and an explanation of what each
code means, go to the ICANN website [https://www.icann.org/] and search for epp
status codes. (Search on the ICANN website; web searches sometimes return an old
version of the document.)

Type: Array of String **/
      StatusList?: DomainStatusList;
    }
    export interface GetDomainSuggestionsRequest {
      DomainName: DomainName;
      SuggestionCount: Integer;
      OnlyAvailable: Boolean;
    }
    export interface GetDomainSuggestionsResponse {
      SuggestionsList?: DomainSuggestionsList;
    }
    export interface GetOperationDetailRequest {
      /** The identifier for the operation for which you want to get the status. Amazon
Route 53 returned the identifier in the response to the original request.

Type: String

Default: None

Required: Yes **/
      OperationId: OperationId;
    }
    export interface GetOperationDetailResponse {
      /** The identifier for the operation.

Type: String **/
      OperationId?: OperationId;
      /** The current status of the requested operation in the system.

Type: String **/
      Status?: OperationStatus;
      /** Detailed information on the status including possible errors.

Type: String **/
      Message?: ErrorMessage;
      /** The name of a domain.

Type: String **/
      DomainName?: DomainName;
      /** The type of operation that was requested.

Type: String **/
      Type?: OperationType;
      /** The date when the request was submitted. **/
      SubmittedDate?: Timestamp;
    }
    export interface InvalidInput {
      message?: ErrorMessage;
    }
    export interface ListDomainsRequest {
      /** For an initial request for a list of domains, omit this element. If the number
of domains that are associated with the current AWS account is greater than the
value that you specified for MaxItems, you can use Marker to return additional
domains. Get the value of NextPageMarker from the previous response, and submit
another request that includes the value of NextPageMarker in the Marker element.

Type: String

Default: None

Constraints: The marker must match the value specified in the previous request. 

Required: No **/
      Marker?: PageMarker;
      /** Number of domains to be returned.

Type: Integer

Default: 20

Constraints: A numeral between 1 and 100.

Required: No **/
      MaxItems?: PageMaxItems;
    }
    export interface ListDomainsResponse {
      /** A summary of domains.

Type: Complex type containing a list of domain summaries.

Children: AutoRenew, DomainName, Expiry, TransferLock **/
      Domains: DomainSummaryList;
      /** If there are more domains than you specified for MaxItems in the request, submit
another request and include the value of NextPageMarker in the value of Marker.

Type: String

Parent: Operations **/
      NextPageMarker?: PageMarker;
    }
    export interface ListOperationsRequest {
      /** For an initial request for a list of operations, omit this element. If the
number of operations that are not yet complete is greater than the value that
you specified for MaxItems, you can use Marker to return additional operations.
Get the value of NextPageMarker from the previous response, and submit another
request that includes the value of NextPageMarker in the Marker element.

Type: String

Default: None

Required: No **/
      Marker?: PageMarker;
      /** Number of domains to be returned.

Type: Integer

Default: 20

Constraints: A value between 1 and 100.

Required: No **/
      MaxItems?: PageMaxItems;
    }
    export interface ListOperationsResponse {
      /** Lists summaries of the operations.

Type: Complex type containing a list of operation summaries

Children: OperationId, Status, SubmittedDate, Type **/
      Operations: OperationSummaryList;
      /** If there are more operations than you specified for MaxItems in the request,
submit another request and include the value of NextPageMarker in the value of 
Marker.

Type: String

Parent: Operations **/
      NextPageMarker?: PageMarker;
    }
    export interface ListTagsForDomainRequest {
      /** The domain for which you want to get a list of tags. **/
      DomainName: DomainName;
    }
    export interface ListTagsForDomainResponse {
      /** A list of the tags that are associated with the specified domain.

Type: A complex type containing a list of tags

Each tag includes the following elements.

&amp;#42; Key
 
 The key (name) of a tag.
 
 Type: String
 
 
* Value
 
 The value of a tag.
 
 Type: String **/
      TagList: TagList;
    }
    export interface Nameserver {
      /** The fully qualified host name of the name server.

Type: String

Constraint: Maximum 255 characterss

Parent: Nameservers **/
      Name: HostName;
      /** Glue IP address of a name server entry. Glue IP addresses are required only when
the name of the name server is a subdomain of the domain. For example, if your
domain is example.com and the name server for the domain is ns.example.com, you
need to specify the IP address for ns.example.com.

Type: List of IP addresses.

Constraints: The list can contain only one IPv4 and one IPv6 address.

Parent: Nameservers **/
      GlueIps?: GlueIpList;
    }
    export interface OperationLimitExceeded {
      message?: ErrorMessage;
    }
    export interface OperationSummary {
      /** Identifier returned to track the requested action.

Type: String **/
      OperationId: OperationId;
      /** The current status of the requested operation in the system.

Type: String **/
      Status: OperationStatus;
      /** Type of the action requested.

Type: String

Valid values: REGISTER_DOMAIN | DELETE_DOMAIN | TRANSFER_IN_DOMAIN | 
UPDATE_DOMAIN_CONTACT | UPDATE_NAMESERVER | CHANGE_PRIVACY_PROTECTION | 
DOMAIN_LOCK **/
      Type: OperationType;
      /** The date when the request was submitted. **/
      SubmittedDate: Timestamp;
    }
    export interface RegisterDomainRequest {
      /** The name of a domain.

Type: String

Default: None

Constraints: The domain name can contain only the letters a through z, the
numbers 0 through 9, and hyphen (-). Internationalized Domain Names are not
supported.

Required: Yes **/
      DomainName: DomainName;
      /** Reserved for future use. **/
      IdnLangCode?: LangCode;
      /** The number of years the domain will be registered. Domains are registered for a
minimum of one year. The maximum period depends on the top-level domain.

Type: Integer

Default: 1

Valid values: Integer from 1 to 10

Required: Yes **/
      DurationInYears: DurationInYears;
      /** Indicates whether the domain will be automatically renewed (true) or not (false
). Autorenewal only takes effect after the account is charged.

Type: Boolean

Valid values: true | false

Default: true

Required: No **/
      AutoRenew?: Boolean;
      /** Provides detailed contact information.

Type: Complex

Children: FirstName, MiddleName, LastName, ContactType, OrganizationName, 
AddressLine1, AddressLine2, City, State, CountryCode, ZipCode, PhoneNumber, 
Email, Fax, ExtraParams

Required: Yes **/
      AdminContact: ContactDetail;
      /** Provides detailed contact information.

Type: Complex

Children: FirstName, MiddleName, LastName, ContactType, OrganizationName, 
AddressLine1, AddressLine2, City, State, CountryCode, ZipCode, PhoneNumber, 
Email, Fax, ExtraParams

Required: Yes **/
      RegistrantContact: ContactDetail;
      /** Provides detailed contact information.

Type: Complex

Children: FirstName, MiddleName, LastName, ContactType, OrganizationName, 
AddressLine1, AddressLine2, City, State, CountryCode, ZipCode, PhoneNumber, 
Email, Fax, ExtraParams

Required: Yes **/
      TechContact: ContactDetail;
      /** Whether you want to conceal contact information from WHOIS queries. If you
specify true, WHOIS (&quot;who is&quot;) queries will return contact information for our
registrar partner, Gandi, instead of the contact information that you enter.

Type: Boolean

Default: true

Valid values: true | false

Required: No **/
      PrivacyProtectAdminContact?: Boolean;
      /** Whether you want to conceal contact information from WHOIS queries. If you
specify true, WHOIS (&quot;who is&quot;) queries will return contact information for our
registrar partner, Gandi, instead of the contact information that you enter.

Type: Boolean

Default: true

Valid values: true | false

Required: No **/
      PrivacyProtectRegistrantContact?: Boolean;
      /** Whether you want to conceal contact information from WHOIS queries. If you
specify true, WHOIS (&quot;who is&quot;) queries will return contact information for our
registrar partner, Gandi, instead of the contact information that you enter.

Type: Boolean

Default: true

Valid values: true | false

Required: No **/
      PrivacyProtectTechContact?: Boolean;
    }
    export interface RegisterDomainResponse {
      /** Identifier for tracking the progress of the request. To use this ID to query the
operation status, use GetOperationDetail.

Type: String

Default: None

Constraints: Maximum 255 characters. **/
      OperationId: OperationId;
    }
    export interface RenewDomainRequest {
      DomainName: DomainName;
      /** The number of years that you want to renew the domain for. The maximum number of
years depends on the top-level domain. For the range of valid values for your
domain, see Domains that You Can Register with Amazon Route 53
[http://docs.aws.amazon.com/console/route53/domain-tld-list] in the Amazon Route
53 documentation.

Type: Integer

Default: 1

Valid values: Integer from 1 to 10

Required: No **/
      DurationInYears?: DurationInYears;
      /** The year when the registration for the domain is set to expire. This value must
match the current expiration date for the domain.

Type: Integer

Default: None

Valid values: Integer

Required: Yes **/
      CurrentExpiryYear: CurrentExpiryYear;
    }
    export interface RenewDomainResponse {
      OperationId: OperationId;
    }
    export interface ResendContactReachabilityEmailRequest {
      /** The name of the domain for which you want Amazon Route 53 to resend a
confirmation email to the registrant contact.

Type: String

Default: None

Required: Yes **/
      domainName?: DomainName;
    }
    export interface ResendContactReachabilityEmailResponse {
      /** The domain name for which you requested a confirmation email. **/
      domainName?: DomainName;
      /** The email address for the registrant contact at the time that we sent the
verification email. **/
      emailAddress?: Email;
      /** True if the email address for the registrant contact has already been verified,
and false otherwise. If the email address has already been verified, we don&#x27;t
send another confirmation email. **/
      isAlreadyVerified?: Boolean;
    }
    export interface RetrieveDomainAuthCodeRequest {
      /** The name of a domain.

Type: String

Default: None

Constraints: The domain name can contain only the letters a through z, the
numbers 0 through 9, and hyphen (-). Internationalized Domain Names are not
supported.

Required: Yes **/
      DomainName: DomainName;
    }
    export interface RetrieveDomainAuthCodeResponse {
      /** The authorization code for the domain.

Type: String **/
      AuthCode: DomainAuthCode;
    }
    export interface TLDRulesViolation {
      message?: ErrorMessage;
    }
    export interface Tag {
      /** The key (name) of a tag.

Type: String

Default: None

Valid values: A-Z, a-z, 0-9, space, &quot;.:/=+\-@&quot;

Constraints: Each key can be 1-128 characters long.

Required: Yes **/
      Key?: TagKey;
      /** The value of a tag.

Type: String

Default: None

Valid values: A-Z, a-z, 0-9, space, &quot;.:/=+\-@&quot;

Constraints: Each value can be 0-256 characters long.

Required: Yes **/
      Value?: TagValue;
    }
    export interface TransferDomainRequest {
      /** The name of a domain.

Type: String

Default: None

Constraints: The domain name can contain only the letters a through z, the
numbers 0 through 9, and hyphen (-). Internationalized Domain Names are not
supported.

Required: Yes **/
      DomainName: DomainName;
      /** Reserved for future use. **/
      IdnLangCode?: LangCode;
      /** The number of years the domain will be registered. Domains are registered for a
minimum of one year. The maximum period depends on the top-level domain.

Type: Integer

Default: 1

Valid values: Integer from 1 to 10

Required: Yes **/
      DurationInYears: DurationInYears;
      /** Contains details for the host and glue IP addresses.

Type: Complex

Children: GlueIps, Name

Required: No **/
      Nameservers?: NameserverList;
      /** The authorization code for the domain. You get this value from the current
registrar.

Type: String

Required: Yes **/
      AuthCode?: DomainAuthCode;
      /** Indicates whether the domain will be automatically renewed (true) or not
(false). Autorenewal only takes effect after the account is charged.

Type: Boolean

Valid values: true | false

Default: true

Required: No **/
      AutoRenew?: Boolean;
      /** Provides detailed contact information.

Type: Complex

Children: FirstName, MiddleName, LastName, ContactType, OrganizationName, 
AddressLine1, AddressLine2, City, State, CountryCode, ZipCode, PhoneNumber, 
Email, Fax, ExtraParams

Required: Yes **/
      AdminContact: ContactDetail;
      /** Provides detailed contact information.

Type: Complex

Children: FirstName, MiddleName, LastName, ContactType, OrganizationName, 
AddressLine1, AddressLine2, City, State, CountryCode, ZipCode, PhoneNumber, 
Email, Fax, ExtraParams

Required: Yes **/
      RegistrantContact: ContactDetail;
      /** Provides detailed contact information.

Type: Complex

Children: FirstName, MiddleName, LastName, ContactType, OrganizationName, 
AddressLine1, AddressLine2, City, State, CountryCode, ZipCode, PhoneNumber, 
Email, Fax, ExtraParams

Required: Yes **/
      TechContact: ContactDetail;
      /** Whether you want to conceal contact information from WHOIS queries. If you
specify true, WHOIS (&quot;who is&quot;) queries will return contact information for our
registrar partner, Gandi, instead of the contact information that you enter.

Type: Boolean

Default: true

Valid values: true | false

Required: No **/
      PrivacyProtectAdminContact?: Boolean;
      /** Whether you want to conceal contact information from WHOIS queries. If you
specify true, WHOIS (&quot;who is&quot;) queries will return contact information for our
registrar partner, Gandi, instead of the contact information that you enter.

Type: Boolean

Default: true

Valid values: true | false

Required: No **/
      PrivacyProtectRegistrantContact?: Boolean;
      /** Whether you want to conceal contact information from WHOIS queries. If you
specify true, WHOIS (&quot;who is&quot;) queries will return contact information for our
registrar partner, Gandi, instead of the contact information that you enter.

Type: Boolean

Default: true

Valid values: true | false

Required: No **/
      PrivacyProtectTechContact?: Boolean;
    }
    export interface TransferDomainResponse {
      /** Identifier for tracking the progress of the request. To use this ID to query the
operation status, use GetOperationDetail.

Type: String

Default: None

Constraints: Maximum 255 characters. **/
      OperationId: OperationId;
    }
    export interface UnsupportedTLD {
      message?: ErrorMessage;
    }
    export interface UpdateDomainContactPrivacyRequest {
      /** The name of a domain.

Type: String

Default: None

Constraints: The domain name can contain only the letters a through z, the
numbers 0 through 9, and hyphen (-). Internationalized Domain Names are not
supported.

Required: Yes **/
      DomainName: DomainName;
      /** Whether you want to conceal contact information from WHOIS queries. If you
specify true, WHOIS (&quot;who is&quot;) queries will return contact information for our
registrar partner, Gandi, instead of the contact information that you enter.

Type: Boolean

Default: None

Valid values: true | false

Required: No **/
      AdminPrivacy?: Boolean;
      /** Whether you want to conceal contact information from WHOIS queries. If you
specify true, WHOIS (&quot;who is&quot;) queries will return contact information for our
registrar partner, Gandi, instead of the contact information that you enter.

Type: Boolean

Default: None

Valid values: true | false

Required: No **/
      RegistrantPrivacy?: Boolean;
      /** Whether you want to conceal contact information from WHOIS queries. If you
specify true, WHOIS (&quot;who is&quot;) queries will return contact information for our
registrar partner, Gandi, instead of the contact information that you enter.

Type: Boolean

Default: None

Valid values: true | false

Required: No **/
      TechPrivacy?: Boolean;
    }
    export interface UpdateDomainContactPrivacyResponse {
      /** Identifier for tracking the progress of the request. To use this ID to query the
operation status, use GetOperationDetail.

Type: String

Default: None

Constraints: Maximum 255 characters. **/
      OperationId: OperationId;
    }
    export interface UpdateDomainContactRequest {
      /** The name of a domain.

Type: String

Default: None

Constraints: The domain name can contain only the letters a through z, the
numbers 0 through 9, and hyphen (-). Internationalized Domain Names are not
supported.

Required: Yes **/
      DomainName: DomainName;
      /** Provides detailed contact information.

Type: Complex

Children: FirstName, MiddleName, LastName, ContactType, OrganizationName, 
AddressLine1, AddressLine2, City, State, CountryCode, ZipCode, PhoneNumber, 
Email, Fax, ExtraParams

Required: Yes **/
      AdminContact?: ContactDetail;
      /** Provides detailed contact information.

Type: Complex

Children: FirstName, MiddleName, LastName, ContactType, OrganizationName, 
AddressLine1, AddressLine2, City, State, CountryCode, ZipCode, PhoneNumber, 
Email, Fax, ExtraParams

Required: Yes **/
      RegistrantContact?: ContactDetail;
      /** Provides detailed contact information.

Type: Complex

Children: FirstName, MiddleName, LastName, ContactType, OrganizationName, 
AddressLine1, AddressLine2, City, State, CountryCode, ZipCode, PhoneNumber, 
Email, Fax, ExtraParams

Required: Yes **/
      TechContact?: ContactDetail;
    }
    export interface UpdateDomainContactResponse {
      /** Identifier for tracking the progress of the request. To use this ID to query the
operation status, use GetOperationDetail.

Type: String

Default: None

Constraints: Maximum 255 characters. **/
      OperationId: OperationId;
    }
    export interface UpdateDomainNameserversRequest {
      /** The name of a domain.

Type: String

Default: None

Constraints: The domain name can contain only the letters a through z, the
numbers 0 through 9, and hyphen (-). Internationalized Domain Names are not
supported.

Required: Yes **/
      DomainName: DomainName;
      /** The authorization key for .fi domains **/
      FIAuthKey?: FIAuthKey;
      /** A list of new name servers for the domain.

Type: Complex

Children: Name, GlueIps

Required: Yes **/
      Nameservers: NameserverList;
    }
    export interface UpdateDomainNameserversResponse {
      /** Identifier for tracking the progress of the request. To use this ID to query the
operation status, use GetOperationDetail.

Type: String

Default: None

Constraints: Maximum 255 characters. **/
      OperationId: OperationId;
    }
    export interface UpdateTagsForDomainRequest {
      /** The domain for which you want to add or update tags.

The name of a domain.

Type: String

Default: None

Constraints: The domain name can contain only the letters a through z, the
numbers 0 through 9, and hyphen (-). Hyphens are allowed only when they&#x27;re
surrounded by letters, numbers, or other hyphens. You can&#x27;t specify a hyphen at
the beginning or end of a label. To specify an Internationalized Domain Name,
you must convert the name to Punycode.

Required: Yes **/
      DomainName: DomainName;
      /** A list of the tag keys and values that you want to add or update. If you specify
a key that already exists, the corresponding value will be replaced.

Type: A complex type containing a list of tags

Default: None

Required: No

&#x27; Each tag includes the following elements:

&amp;#42; Key
 
 The key (name) of a tag.
 
 Type: String
 
 Default: None
 
 Valid values: Unicode characters including alphanumeric, space, and
 &quot;.:/=+\-@&quot;
 
 Constraints: Each key can be 1-128 characters long.
 
 Required: Yes
 
 
* Value
 
 The value of a tag.
 
 Type: String
 
 Default: None
 
 Valid values: Unicode characters including alphanumeric, space, and
 &quot;.:/=+\-@&quot;
 
 Constraints: Each value can be 0-256 characters long.
 
 Required: Yes **/
      TagsToUpdate?: TagList;
    }
    export interface UpdateTagsForDomainResponse {
    }
    export interface ViewBillingRequest {
      /** The beginning date and time for the time period for which you want a list of
billing records. Specify the date in Unix time format.

Type: Double

Default: None

Required: Yes **/
      Start?: Timestamp;
      /** The end date and time for the time period for which you want a list of billing
records. Specify the date in Unix time format.

Type: Double

Default: None

Required: Yes **/
      End?: Timestamp;
      /** For an initial request for a list of billing records, omit this element. If the
number of billing records that are associated with the current AWS account
during the specified period is greater than the value that you specified for 
MaxItems, you can use Marker to return additional billing records. Get the value
of NextPageMarker from the previous response, and submit another request that
includes the value of NextPageMarker in the Marker element. 

Type: String

Default: None

Constraints: The marker must match the value of NextPageMarker that was returned
in the previous response.

Required: No **/
      Marker?: PageMarker;
      /** The number of billing records to be returned.

Type: Integer

Default: 20

Constraints: A value between 1 and 100.

Required: No **/
      MaxItems?: PageMaxItems;
    }
    export interface ViewBillingResponse {
      /** If there are more billing records than you specified for MaxItems in the
request, submit another request and include the value of NextPageMarker in the
value of Marker.

Type: String

Parent: BillingRecords **/
      NextPageMarker?: PageMarker;
      /** A summary of billing records.

Type: Complex type containing a list of billing record summaries.

Children: DomainName, Operation, InvoiceId, BillDate and Price **/
      BillingRecords?: BillingRecords;
    }
  }
}
