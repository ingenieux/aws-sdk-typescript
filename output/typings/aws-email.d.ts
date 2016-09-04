// Type definitions for aws-sdk - Amazon Simple Email Service
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

// COMMENTED <reference path="./aws-sdk.d.ts" />

declare module "aws-sdk" {

  /**
    * apiVersion: 2010-12-01
    * endpointPrefix: email
    * serviceAbbreviation: Amazon SES
    * signatureVersion: v4
    * protocol: query
    *
    * Amazon Simple Email Service  This is the API Reference for Amazon Simple Email
 Service (Amazon SES). This documentation is intended to be used in conjunction
 with the Amazon SES Developer Guide
 [http://docs.aws.amazon.com/ses/latest/DeveloperGuide/Welcome.html]. 
 
  For a list of Amazon SES endpoints to use in service requests, see Regions and
 Amazon SES [http://docs.aws.amazon.com/ses/latest/DeveloperGuide/regions.html] 
 in the Amazon SES Developer Guide.
    *
    */
  export class SES extends Service {
    constructor(options?: any);
    endpoint: Endpoint;
    /**
     * Creates a receipt rule set by cloning an existing one. All receipt rules and
configurations are copied to the new receipt rule set and are completely
independent of the source rule set.

For information about setting up rule sets, see the Amazon SES Developer Guide
[http://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rule-set.html]
.

This action is throttled at one request per second.
     *
     * @error RuleSetDoesNotExistException   
     * @error AlreadyExistsException   
     * @error LimitExceededException   
     */
    cloneReceiptRuleSet(params: SES.CloneReceiptRuleSetRequest, callback?: (err: SES.RuleSetDoesNotExistException | SES.AlreadyExistsException | SES.LimitExceededException | any, data: SES.CloneReceiptRuleSetResponse | any) => void): Request<SES.CloneReceiptRuleSetResponse | any, SES.RuleSetDoesNotExistException | SES.AlreadyExistsException | SES.LimitExceededException | any>;
    /**
     * Creates a new IP address filter.

For information about setting up IP address filters, see the Amazon SES
Developer Guide
[http://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-ip-filters.html]
.

This action is throttled at one request per second.
     *
     * @error LimitExceededException   
     * @error AlreadyExistsException   
     */
    createReceiptFilter(params: SES.CreateReceiptFilterRequest, callback?: (err: SES.LimitExceededException | SES.AlreadyExistsException | any, data: SES.CreateReceiptFilterResponse | any) => void): Request<SES.CreateReceiptFilterResponse | any, SES.LimitExceededException | SES.AlreadyExistsException | any>;
    /**
     * Creates a receipt rule.

For information about setting up receipt rules, see the Amazon SES Developer
Guide
[http://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rules.html]
.

This action is throttled at one request per second.
     *
     * @error InvalidSnsTopicException   
     * @error InvalidS3ConfigurationException   
     * @error InvalidLambdaFunctionException   
     * @error AlreadyExistsException   
     * @error RuleDoesNotExistException   
     * @error RuleSetDoesNotExistException   
     * @error LimitExceededException   
     */
    createReceiptRule(params: SES.CreateReceiptRuleRequest, callback?: (err: SES.InvalidSnsTopicException | SES.InvalidS3ConfigurationException | SES.InvalidLambdaFunctionException | SES.AlreadyExistsException | SES.RuleDoesNotExistException | SES.RuleSetDoesNotExistException | SES.LimitExceededException | any, data: SES.CreateReceiptRuleResponse | any) => void): Request<SES.CreateReceiptRuleResponse | any, SES.InvalidSnsTopicException | SES.InvalidS3ConfigurationException | SES.InvalidLambdaFunctionException | SES.AlreadyExistsException | SES.RuleDoesNotExistException | SES.RuleSetDoesNotExistException | SES.LimitExceededException | any>;
    /**
     * Creates an empty receipt rule set.

For information about setting up receipt rule sets, see the Amazon SES Developer
Guide
[http://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rule-set.html]
.

This action is throttled at one request per second.
     *
     * @error AlreadyExistsException   
     * @error LimitExceededException   
     */
    createReceiptRuleSet(params: SES.CreateReceiptRuleSetRequest, callback?: (err: SES.AlreadyExistsException | SES.LimitExceededException | any, data: SES.CreateReceiptRuleSetResponse | any) => void): Request<SES.CreateReceiptRuleSetResponse | any, SES.AlreadyExistsException | SES.LimitExceededException | any>;
    /**
     * Deletes the specified identity (an email address or a domain) from the list of
verified identities.

This action is throttled at one request per second.
     *
     */
    deleteIdentity(params: SES.DeleteIdentityRequest, callback?: (err: any, data: SES.DeleteIdentityResponse | any) => void): Request<SES.DeleteIdentityResponse | any, any>;
    /**
     * Deletes the specified sending authorization policy for the given identity (an
email address or a domain). This API returns successfully even if a policy with
the specified name does not exist.

This API is for the identity owner only. If you have not verified the identity,
this API will return an error.

Sending authorization is a feature that enables an identity owner to authorize
other senders to use its identities. For information about using sending
authorization, see the Amazon SES Developer Guide
[http://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html]
.

This action is throttled at one request per second.
     *
     */
    deleteIdentityPolicy(params: SES.DeleteIdentityPolicyRequest, callback?: (err: any, data: SES.DeleteIdentityPolicyResponse | any) => void): Request<SES.DeleteIdentityPolicyResponse | any, any>;
    /**
     * Deletes the specified IP address filter.

For information about managing IP address filters, see the Amazon SES Developer
Guide
[http://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-ip-filters.html]
.

This action is throttled at one request per second.
     *
     */
    deleteReceiptFilter(params: SES.DeleteReceiptFilterRequest, callback?: (err: any, data: SES.DeleteReceiptFilterResponse | any) => void): Request<SES.DeleteReceiptFilterResponse | any, any>;
    /**
     * Deletes the specified receipt rule.

For information about managing receipt rules, see the Amazon SES Developer Guide
[http://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rules.html]
.

This action is throttled at one request per second.
     *
     * @error RuleSetDoesNotExistException   
     */
    deleteReceiptRule(params: SES.DeleteReceiptRuleRequest, callback?: (err: SES.RuleSetDoesNotExistException | any, data: SES.DeleteReceiptRuleResponse | any) => void): Request<SES.DeleteReceiptRuleResponse | any, SES.RuleSetDoesNotExistException | any>;
    /**
     * Deletes the specified receipt rule set and all of the receipt rules it contains.

The currently active rule set cannot be deleted.

For information about managing receipt rule sets, see the Amazon SES Developer
Guide
[http://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rule-sets.html]
.

This action is throttled at one request per second.
     *
     * @error CannotDeleteException   
     */
    deleteReceiptRuleSet(params: SES.DeleteReceiptRuleSetRequest, callback?: (err: SES.CannotDeleteException | any, data: SES.DeleteReceiptRuleSetResponse | any) => void): Request<SES.DeleteReceiptRuleSetResponse | any, SES.CannotDeleteException | any>;
    /**
     * Deletes the specified email address from the list of verified addresses.

The DeleteVerifiedEmailAddress action is deprecated as of the May 15, 2012
release of Domain Verification. The DeleteIdentity action is now preferred.

This action is throttled at one request per second.
     *
     */
    deleteVerifiedEmailAddress(params: SES.DeleteVerifiedEmailAddressRequest, callback?: (err: any, data: any) => void): Request<any, any>;
    /**
     * Returns the metadata and receipt rules for the receipt rule set that is
currently active.

For information about setting up receipt rule sets, see the Amazon SES Developer
Guide
[http://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rule-set.html]
.

This action is throttled at one request per second.
     *
     */
    describeActiveReceiptRuleSet(params: SES.DescribeActiveReceiptRuleSetRequest, callback?: (err: any, data: SES.DescribeActiveReceiptRuleSetResponse | any) => void): Request<SES.DescribeActiveReceiptRuleSetResponse | any, any>;
    /**
     * Returns the details of the specified receipt rule.

For information about setting up receipt rules, see the Amazon SES Developer
Guide
[http://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rules.html]
.

This action is throttled at one request per second.
     *
     * @error RuleDoesNotExistException   
     * @error RuleSetDoesNotExistException   
     */
    describeReceiptRule(params: SES.DescribeReceiptRuleRequest, callback?: (err: SES.RuleDoesNotExistException | SES.RuleSetDoesNotExistException | any, data: SES.DescribeReceiptRuleResponse | any) => void): Request<SES.DescribeReceiptRuleResponse | any, SES.RuleDoesNotExistException | SES.RuleSetDoesNotExistException | any>;
    /**
     * Returns the details of the specified receipt rule set.

For information about managing receipt rule sets, see the Amazon SES Developer
Guide
[http://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rule-sets.html]
.

This action is throttled at one request per second.
     *
     * @error RuleSetDoesNotExistException   
     */
    describeReceiptRuleSet(params: SES.DescribeReceiptRuleSetRequest, callback?: (err: SES.RuleSetDoesNotExistException | any, data: SES.DescribeReceiptRuleSetResponse | any) => void): Request<SES.DescribeReceiptRuleSetResponse | any, SES.RuleSetDoesNotExistException | any>;
    /**
     * Returns the current status of Easy DKIM signing for an entity. For domain name
identities, this action also returns the DKIM tokens that are required for Easy
DKIM signing, and whether Amazon SES has successfully verified that these tokens
have been published.

This action takes a list of identities as input and returns the following
information for each:

 &amp;#42;  Whether Easy DKIM signing is enabled or disabled.
   
   
 &amp;#42;  A set of DKIM tokens that represent the identity. If the identity is an
   email address, the tokens represent the domain of that address.
   
   
 &amp;#42;  Whether Amazon SES has successfully verified the DKIM tokens published in
   the domain&#x27;s DNS. This information is only returned for domain name
   identities, not for email addresses.
   
   

This action is throttled at one request per second and can only get DKIM
attributes for up to 100 identities at a time.

For more information about creating DNS records using DKIM tokens, go to the 
Amazon SES Developer Guide
[http://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim-dns-records.html]
.
     *
     */
    getIdentityDkimAttributes(params: SES.GetIdentityDkimAttributesRequest, callback?: (err: any, data: SES.GetIdentityDkimAttributesResponse | any) => void): Request<SES.GetIdentityDkimAttributesResponse | any, any>;
    /**
     * Returns the custom MAIL FROM attributes for a list of identities (email
addresses and/or domains).

This action is throttled at one request per second and can only get custom MAIL
FROM attributes for up to 100 identities at a time.
     *
     */
    getIdentityMailFromDomainAttributes(params: SES.GetIdentityMailFromDomainAttributesRequest, callback?: (err: any, data: SES.GetIdentityMailFromDomainAttributesResponse | any) => void): Request<SES.GetIdentityMailFromDomainAttributesResponse | any, any>;
    /**
     * Given a list of verified identities (email addresses and/or domains), returns a
structure describing identity notification attributes.

This action is throttled at one request per second and can only get notification
attributes for up to 100 identities at a time.

For more information about using notifications with Amazon SES, see the Amazon
SES Developer Guide
[http://docs.aws.amazon.com/ses/latest/DeveloperGuide/notifications.html].
     *
     */
    getIdentityNotificationAttributes(params: SES.GetIdentityNotificationAttributesRequest, callback?: (err: any, data: SES.GetIdentityNotificationAttributesResponse | any) => void): Request<SES.GetIdentityNotificationAttributesResponse | any, any>;
    /**
     * Returns the requested sending authorization policies for the given identity (an
email address or a domain). The policies are returned as a map of policy names
to policy contents. You can retrieve a maximum of 20 policies at a time.

This API is for the identity owner only. If you have not verified the identity,
this API will return an error.

Sending authorization is a feature that enables an identity owner to authorize
other senders to use its identities. For information about using sending
authorization, see the Amazon SES Developer Guide
[http://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html]
.

This action is throttled at one request per second.
     *
     */
    getIdentityPolicies(params: SES.GetIdentityPoliciesRequest, callback?: (err: any, data: SES.GetIdentityPoliciesResponse | any) => void): Request<SES.GetIdentityPoliciesResponse | any, any>;
    /**
     * Given a list of identities (email addresses and/or domains), returns the
verification status and (for domain identities) the verification token for each
identity.

This action is throttled at one request per second and can only get verification
attributes for up to 100 identities at a time.
     *
     */
    getIdentityVerificationAttributes(params: SES.GetIdentityVerificationAttributesRequest, callback?: (err: any, data: SES.GetIdentityVerificationAttributesResponse | any) => void): Request<SES.GetIdentityVerificationAttributesResponse | any, any>;
    /**
     * Returns the user&#x27;s current sending limits.

This action is throttled at one request per second.
     *
     */
    getSendQuota(callback?: (err: any, data: SES.GetSendQuotaResponse | any) => void): Request<SES.GetSendQuotaResponse | any, any>;
    /**
     * Returns the user&#x27;s sending statistics. The result is a list of data points,
representing the last two weeks of sending activity.

Each data point in the list contains statistics for a 15-minute interval.

This action is throttled at one request per second.
     *
     */
    getSendStatistics(callback?: (err: any, data: SES.GetSendStatisticsResponse | any) => void): Request<SES.GetSendStatisticsResponse | any, any>;
    /**
     * Returns a list containing all of the identities (email addresses and domains)
for your AWS account, regardless of verification status.

This action is throttled at one request per second.
     *
     */
    listIdentities(params: SES.ListIdentitiesRequest, callback?: (err: any, data: SES.ListIdentitiesResponse | any) => void): Request<SES.ListIdentitiesResponse | any, any>;
    /**
     * Returns a list of sending authorization policies that are attached to the given
identity (an email address or a domain). This API returns only a list. If you
want the actual policy content, you can use GetIdentityPolicies.

This API is for the identity owner only. If you have not verified the identity,
this API will return an error.

Sending authorization is a feature that enables an identity owner to authorize
other senders to use its identities. For information about using sending
authorization, see the Amazon SES Developer Guide
[http://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html]
.

This action is throttled at one request per second.
     *
     */
    listIdentityPolicies(params: SES.ListIdentityPoliciesRequest, callback?: (err: any, data: SES.ListIdentityPoliciesResponse | any) => void): Request<SES.ListIdentityPoliciesResponse | any, any>;
    /**
     * Lists the IP address filters associated with your AWS account.

For information about managing IP address filters, see the Amazon SES Developer
Guide
[http://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-ip-filters.html]
.

This action is throttled at one request per second.
     *
     */
    listReceiptFilters(params: SES.ListReceiptFiltersRequest, callback?: (err: any, data: SES.ListReceiptFiltersResponse | any) => void): Request<SES.ListReceiptFiltersResponse | any, any>;
    /**
     * Lists the receipt rule sets that exist under your AWS account. If there are
additional receipt rule sets to be retrieved, you will receive a NextToken that
you can provide to the next call to ListReceiptRuleSets to retrieve the
additional entries.

For information about managing receipt rule sets, see the Amazon SES Developer
Guide
[http://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rule-sets.html]
.

This action is throttled at one request per second.
     *
     */
    listReceiptRuleSets(params: SES.ListReceiptRuleSetsRequest, callback?: (err: any, data: SES.ListReceiptRuleSetsResponse | any) => void): Request<SES.ListReceiptRuleSetsResponse | any, any>;
    /**
     * Returns a list containing all of the email addresses that have been verified.

The ListVerifiedEmailAddresses action is deprecated as of the May 15, 2012
release of Domain Verification. The ListIdentities action is now preferred.

This action is throttled at one request per second.
     *
     */
    listVerifiedEmailAddresses(callback?: (err: any, data: SES.ListVerifiedEmailAddressesResponse | any) => void): Request<SES.ListVerifiedEmailAddressesResponse | any, any>;
    /**
     * Adds or updates a sending authorization policy for the specified identity (an
email address or a domain).

This API is for the identity owner only. If you have not verified the identity,
this API will return an error.

Sending authorization is a feature that enables an identity owner to authorize
other senders to use its identities. For information about using sending
authorization, see the Amazon SES Developer Guide
[http://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html]
.

This action is throttled at one request per second.
     *
     * @error InvalidPolicyException   
     */
    putIdentityPolicy(params: SES.PutIdentityPolicyRequest, callback?: (err: SES.InvalidPolicyException | any, data: SES.PutIdentityPolicyResponse | any) => void): Request<SES.PutIdentityPolicyResponse | any, SES.InvalidPolicyException | any>;
    /**
     * Reorders the receipt rules within a receipt rule set.

All of the rules in the rule set must be represented in this request. That is,
this API will return an error if the reorder request doesn&#x27;t explicitly position
all of the rules.

For information about managing receipt rule sets, see the Amazon SES Developer
Guide
[http://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rule-sets.html]
.

This action is throttled at one request per second.
     *
     * @error RuleSetDoesNotExistException   
     * @error RuleDoesNotExistException   
     */
    reorderReceiptRuleSet(params: SES.ReorderReceiptRuleSetRequest, callback?: (err: SES.RuleSetDoesNotExistException | SES.RuleDoesNotExistException | any, data: SES.ReorderReceiptRuleSetResponse | any) => void): Request<SES.ReorderReceiptRuleSetResponse | any, SES.RuleSetDoesNotExistException | SES.RuleDoesNotExistException | any>;
    /**
     * Generates and sends a bounce message to the sender of an email you received
through Amazon SES. You can only use this API on an email up to 24 hours after
you receive it.

You cannot use this API to send generic bounces for mail that was not received
by Amazon SES.

For information about receiving email through Amazon SES, see the Amazon SES
Developer Guide
[http://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email.html].

This action is throttled at one request per second.
     *
     * @error MessageRejected   
     */
    sendBounce(params: SES.SendBounceRequest, callback?: (err: SES.MessageRejected | any, data: SES.SendBounceResponse | any) => void): Request<SES.SendBounceResponse | any, SES.MessageRejected | any>;
    /**
     * Composes an email message based on input data, and then immediately queues the
message for sending.

There are several important points to know about SendEmail:

 &amp;#42;  You can only send email from verified email addresses and domains;
   otherwise, you will get an &quot;Email address not verified&quot; error. If your
   account is still in the Amazon SES sandbox, you must also verify every
   recipient email address except for the recipients provided by the Amazon SES
   mailbox simulator. For more information, go to the Amazon SES Developer Guide
   [http://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-addresses-and-domains.html]
   .
   
   
 &amp;#42;  The total size of the message cannot exceed 10 MB. This includes any
   attachments that are part of the message.
   
   
 &amp;#42;  Amazon SES has a limit on the total number of recipients per message. The
   combined number of To:, CC: and BCC: email addresses cannot exceed 50. If you
   need to send an email message to a larger audience, you can divide your
   recipient list into groups of 50 or fewer, and then call Amazon SES
   repeatedly to send the message to each group.
   
   
 &amp;#42;  For every message that you send, the total number of recipients (To:, CC:
   and BCC:) is counted against your sending quota - the maximum number of
   emails you can send in a 24-hour period. For information about your sending
   quota, go to the Amazon SES Developer Guide
   [http://docs.aws.amazon.com/ses/latest/DeveloperGuide/manage-sending-limits.html]
   .
     *
     * @error MessageRejected   
     * @error MailFromDomainNotVerifiedException   
     */
    sendEmail(params: SES.SendEmailRequest, callback?: (err: SES.MessageRejected | SES.MailFromDomainNotVerifiedException | any, data: SES.SendEmailResponse | any) => void): Request<SES.SendEmailResponse | any, SES.MessageRejected | SES.MailFromDomainNotVerifiedException | any>;
    /**
     * Sends an email message, with header and content specified by the client. The 
SendRawEmail action is useful for sending multipart MIME emails. The raw text of
the message must comply with Internet email standards; otherwise, the message
cannot be sent. 

There are several important points to know about SendRawEmail:

 &amp;#42;  You can only send email from verified email addresses and domains;
   otherwise, you will get an &quot;Email address not verified&quot; error. If your
   account is still in the Amazon SES sandbox, you must also verify every
   recipient email address except for the recipients provided by the Amazon SES
   mailbox simulator. For more information, go to the Amazon SES Developer Guide
   [http://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-addresses-and-domains.html]
   .
   
   
 &amp;#42;  The total size of the message cannot exceed 10 MB. This includes any
   attachments that are part of the message.
   
   
 &amp;#42;  Amazon SES has a limit on the total number of recipients per message. The
   combined number of To:, CC: and BCC: email addresses cannot exceed 50. If you
   need to send an email message to a larger audience, you can divide your
   recipient list into groups of 50 or fewer, and then call Amazon SES
   repeatedly to send the message to each group.
   
   
 &amp;#42;  The To:, CC:, and BCC: headers in the raw message can contain a group list.
   Note that each recipient in a group list counts towards the 50-recipient
   limit.
   
   
 &amp;#42;  Amazon SES overrides any Message-ID and Date headers you provide.
   
   
 &amp;#42;  For every message that you send, the total number of recipients (To:, CC:
   and BCC:) is counted against your sending quota - the maximum number of
   emails you can send in a 24-hour period. For information about your sending
   quota, go to the Amazon SES Developer Guide
   [http://docs.aws.amazon.com/ses/latest/DeveloperGuide/manage-sending-limits.html]
   .
   
   
 &amp;#42;  If you are using sending authorization to send on behalf of another user, 
   SendRawEmail enables you to specify the cross-account identity for the
   email&#x27;s &quot;Source,&quot; &quot;From,&quot; and &quot;Return-Path&quot; parameters in one of two ways:
   you can pass optional parameters SourceArn, FromArn, and/or ReturnPathArn to
   the API, or you can include the following X-headers in the header of your raw
   email:
   
    &amp;#42;   X-SES-SOURCE-ARN 
      
      
    &amp;#42;   X-SES-FROM-ARN 
      
      
    &amp;#42;   X-SES-RETURN-PATH-ARN 
      
      
   
   Do not include these X-headers in the DKIM signature, because they are
   removed by Amazon SES before sending the email.
   
   For the most common sending authorization use case, we recommend that you
   specify the SourceIdentityArn and do not specify either the FromIdentityArn 
   or ReturnPathIdentityArn. (The same note applies to the corresponding
   X-headers.) If you only specify the SourceIdentityArn, Amazon SES will simply
   set the &quot;From&quot; address and the &quot;Return Path&quot; address to the identity
   specified in SourceIdentityArn. For more information about sending
   authorization, see the Amazon SES Developer Guide
   [http://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html]
   .
     *
     * @error MessageRejected   
     * @error MailFromDomainNotVerifiedException   
     */
    sendRawEmail(params: SES.SendRawEmailRequest, callback?: (err: SES.MessageRejected | SES.MailFromDomainNotVerifiedException | any, data: SES.SendRawEmailResponse | any) => void): Request<SES.SendRawEmailResponse | any, SES.MessageRejected | SES.MailFromDomainNotVerifiedException | any>;
    /**
     * Sets the specified receipt rule set as the active receipt rule set.

To disable your email-receiving through Amazon SES completely, you can call this
API with RuleSetName set to null.

For information about managing receipt rule sets, see the Amazon SES Developer
Guide
[http://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rule-sets.html]
.

This action is throttled at one request per second.
     *
     * @error RuleSetDoesNotExistException   
     */
    setActiveReceiptRuleSet(params: SES.SetActiveReceiptRuleSetRequest, callback?: (err: SES.RuleSetDoesNotExistException | any, data: SES.SetActiveReceiptRuleSetResponse | any) => void): Request<SES.SetActiveReceiptRuleSetResponse | any, SES.RuleSetDoesNotExistException | any>;
    /**
     * Enables or disables Easy DKIM signing of email sent from an identity:

 &amp;#42;  If Easy DKIM signing is enabled for a domain name identity (e.g., example.com
   ), then Amazon SES will DKIM-sign all email sent by addresses under that
   domain name (e.g., user@example.com).
   
   
 &amp;#42;  If Easy DKIM signing is enabled for an email address, then Amazon SES will
   DKIM-sign all email sent by that email address.
   
   

For email addresses (e.g., user@example.com), you can only enable Easy DKIM
signing if the corresponding domain (e.g., example.com) has been set up for Easy
DKIM using the AWS Console or the VerifyDomainDkim action.

This action is throttled at one request per second.

For more information about Easy DKIM signing, go to the Amazon SES Developer
Guide [http://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html].
     *
     */
    setIdentityDkimEnabled(params: SES.SetIdentityDkimEnabledRequest, callback?: (err: any, data: SES.SetIdentityDkimEnabledResponse | any) => void): Request<SES.SetIdentityDkimEnabledResponse | any, any>;
    /**
     * Given an identity (an email address or a domain), enables or disables whether
Amazon SES forwards bounce and complaint notifications as email. Feedback
forwarding can only be disabled when Amazon Simple Notification Service (Amazon
SNS) topics are specified for both bounces and complaints.

Feedback forwarding does not apply to delivery notifications. Delivery
notifications are only available through Amazon SNS.

This action is throttled at one request per second.

For more information about using notifications with Amazon SES, see the Amazon
SES Developer Guide
[http://docs.aws.amazon.com/ses/latest/DeveloperGuide/notifications.html].
     *
     */
    setIdentityFeedbackForwardingEnabled(params: SES.SetIdentityFeedbackForwardingEnabledRequest, callback?: (err: any, data: SES.SetIdentityFeedbackForwardingEnabledResponse | any) => void): Request<SES.SetIdentityFeedbackForwardingEnabledResponse | any, any>;
    /**
     * Given an identity (an email address or a domain), sets whether Amazon SES
includes the original email headers in the Amazon Simple Notification Service
(Amazon SNS) notifications of a specified type.

This action is throttled at one request per second.

For more information about using notifications with Amazon SES, see the Amazon
SES Developer Guide
[http://docs.aws.amazon.com/ses/latest/DeveloperGuide/notifications.html].
     *
     */
    setIdentityHeadersInNotificationsEnabled(params: SES.SetIdentityHeadersInNotificationsEnabledRequest, callback?: (err: any, data: SES.SetIdentityHeadersInNotificationsEnabledResponse | any) => void): Request<SES.SetIdentityHeadersInNotificationsEnabledResponse | any, any>;
    /**
     * Enables or disables the custom MAIL FROM domain setup for a verified identity
(an email address or a domain).

To send emails using the specified MAIL FROM domain, you must add an MX record
to your MAIL FROM domain&#x27;s DNS settings. If you want your emails to pass Sender
Policy Framework (SPF) checks, you must also add or update an SPF record. For
more information, see the Amazon SES Developer Guide
[http://docs.aws.amazon.com/ses/latest/DeveloperGuide/mail-from-set.html].

This action is throttled at one request per second.
     *
     */
    setIdentityMailFromDomain(params: SES.SetIdentityMailFromDomainRequest, callback?: (err: any, data: SES.SetIdentityMailFromDomainResponse | any) => void): Request<SES.SetIdentityMailFromDomainResponse | any, any>;
    /**
     * Given an identity (an email address or a domain), sets the Amazon Simple
Notification Service (Amazon SNS) topic to which Amazon SES will publish bounce,
complaint, and/or delivery notifications for emails sent with that identity as
the Source.

Unless feedback forwarding is enabled, you must specify Amazon SNS topics for
bounce and complaint notifications. For more information, see 
SetIdentityFeedbackForwardingEnabled.

This action is throttled at one request per second.

For more information about feedback notification, see the Amazon SES Developer
Guide [http://docs.aws.amazon.com/ses/latest/DeveloperGuide/notifications.html].
     *
     */
    setIdentityNotificationTopic(params: SES.SetIdentityNotificationTopicRequest, callback?: (err: any, data: SES.SetIdentityNotificationTopicResponse | any) => void): Request<SES.SetIdentityNotificationTopicResponse | any, any>;
    /**
     * Sets the position of the specified receipt rule in the receipt rule set.

For information about managing receipt rules, see the Amazon SES Developer Guide
[http://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rules.html]
.

This action is throttled at one request per second.
     *
     * @error RuleSetDoesNotExistException   
     * @error RuleDoesNotExistException   
     */
    setReceiptRulePosition(params: SES.SetReceiptRulePositionRequest, callback?: (err: SES.RuleSetDoesNotExistException | SES.RuleDoesNotExistException | any, data: SES.SetReceiptRulePositionResponse | any) => void): Request<SES.SetReceiptRulePositionResponse | any, SES.RuleSetDoesNotExistException | SES.RuleDoesNotExistException | any>;
    /**
     * Updates a receipt rule.

For information about managing receipt rules, see the Amazon SES Developer Guide
[http://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rules.html]
.

This action is throttled at one request per second.
     *
     * @error InvalidSnsTopicException   
     * @error InvalidS3ConfigurationException   
     * @error InvalidLambdaFunctionException   
     * @error RuleSetDoesNotExistException   
     * @error RuleDoesNotExistException   
     * @error LimitExceededException   
     */
    updateReceiptRule(params: SES.UpdateReceiptRuleRequest, callback?: (err: SES.InvalidSnsTopicException | SES.InvalidS3ConfigurationException | SES.InvalidLambdaFunctionException | SES.RuleSetDoesNotExistException | SES.RuleDoesNotExistException | SES.LimitExceededException | any, data: SES.UpdateReceiptRuleResponse | any) => void): Request<SES.UpdateReceiptRuleResponse | any, SES.InvalidSnsTopicException | SES.InvalidS3ConfigurationException | SES.InvalidLambdaFunctionException | SES.RuleSetDoesNotExistException | SES.RuleDoesNotExistException | SES.LimitExceededException | any>;
    /**
     * Returns a set of DKIM tokens for a domain. DKIM tokens are character strings
that represent your domain&#x27;s identity. Using these tokens, you will need to
create DNS CNAME records that point to DKIM public keys hosted by Amazon SES.
Amazon Web Services will eventually detect that you have updated your DNS
records; this detection process may take up to 72 hours. Upon successful
detection, Amazon SES will be able to DKIM-sign email originating from that
domain.

This action is throttled at one request per second.

To enable or disable Easy DKIM signing for a domain, use the 
SetIdentityDkimEnabled action.

For more information about creating DNS records using DKIM tokens, go to the 
Amazon SES Developer Guide
[http://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim-dns-records.html]
.
     *
     */
    verifyDomainDkim(params: SES.VerifyDomainDkimRequest, callback?: (err: any, data: SES.VerifyDomainDkimResponse | any) => void): Request<SES.VerifyDomainDkimResponse | any, any>;
    /**
     * Verifies a domain.

This action is throttled at one request per second.
     *
     */
    verifyDomainIdentity(params: SES.VerifyDomainIdentityRequest, callback?: (err: any, data: SES.VerifyDomainIdentityResponse | any) => void): Request<SES.VerifyDomainIdentityResponse | any, any>;
    /**
     * Verifies an email address. This action causes a confirmation email message to be
sent to the specified address.

The VerifyEmailAddress action is deprecated as of the May 15, 2012 release of
Domain Verification. The VerifyEmailIdentity action is now preferred.

This action is throttled at one request per second.
     *
     */
    verifyEmailAddress(params: SES.VerifyEmailAddressRequest, callback?: (err: any, data: any) => void): Request<any, any>;
    /**
     * Verifies an email address. This action causes a confirmation email message to be
sent to the specified address.

This action is throttled at one request per second.
     *
     */
    verifyEmailIdentity(params: SES.VerifyEmailIdentityRequest, callback?: (err: any, data: SES.VerifyEmailIdentityResponse | any) => void): Request<SES.VerifyEmailIdentityResponse | any, any>;

  }

  export module SES {

    export type Address = string;

    export type AddressList = Address[];

    export type AmazonResourceName = string;

    export type ArrivalDate = number;

    export type BehaviorOnMXFailure = string;

    export type BounceMessage = string;

    export type BounceSmtpReplyCode = string;

    export type BounceStatusCode = string;

    export type BounceType = string;

    export type BouncedRecipientInfoList = BouncedRecipientInfo[];

    export type Charset = string;

    export type Cidr = string;

    export type Counter = number;

    export type CustomMailFromStatus = string;

    export type DiagnosticCode = string;

    export type DkimAttributes = { [key: string]: IdentityDkimAttributes };

    export type Domain = string;

    export type DsnAction = string;

    export type DsnStatus = string;

    export type Enabled = boolean;

    export type Explanation = string;

    export type ExtensionFieldList = ExtensionField[];

    export type ExtensionFieldName = string;

    export type ExtensionFieldValue = string;

    export type HeaderName = string;

    export type HeaderValue = string;

    export type Identity = string;

    export type IdentityList = Identity[];

    export type IdentityType = string;

    export type InvocationType = string;

    export type LastAttemptDate = number;

    export type MailFromDomainAttributes = { [key: string]: IdentityMailFromDomainAttributes };

    export type MailFromDomainName = string;

    export type Max24HourSend = number;

    export type MaxItems = number;

    export type MaxSendRate = number;

    export type MessageData = string;

    export type MessageId = string;

    export type NextToken = string;

    export type NotificationAttributes = { [key: string]: IdentityNotificationAttributes };

    export type NotificationTopic = string;

    export type NotificationType = string;

    export type Policy = string;

    export type PolicyMap = { [key: string]: Policy };

    export type PolicyName = string;

    export type PolicyNameList = PolicyName[];

    export type RawMessageData = any;

    export type ReceiptActionsList = ReceiptAction[];

    export type ReceiptFilterList = ReceiptFilter[];

    export type ReceiptFilterName = string;

    export type ReceiptFilterPolicy = string;

    export type ReceiptRuleName = string;

    export type ReceiptRuleNamesList = ReceiptRuleName[];

    export type ReceiptRuleSetName = string;

    export type ReceiptRuleSetsLists = ReceiptRuleSetMetadata[];

    export type ReceiptRulesList = ReceiptRule[];

    export type Recipient = string;

    export type RecipientsList = Recipient[];

    export type RemoteMta = string;

    export type ReportingMta = string;

    export type RuleOrRuleSetName = string;

    export type S3BucketName = string;

    export type S3KeyPrefix = string;

    export type SNSActionEncoding = string;

    export type SendDataPointList = SendDataPoint[];

    export type SentLast24Hours = number;

    export type StopScope = string;

    export type Timestamp = number;

    export type TlsPolicy = string;

    export type VerificationAttributes = { [key: string]: IdentityVerificationAttributes };

    export type VerificationStatus = string;

    export type VerificationToken = string;

    export type VerificationTokenList = VerificationToken[];

    export interface AddHeaderAction {
      /** The name of the header to add. Must be between 1 and 50 characters, inclusive,
and consist of alphanumeric (a-z, A-Z, 0-9) characters and dashes only. **/
      HeaderName: HeaderName;
      /** Must be less than 2048 characters, and must not contain newline characters (&quot;\r&quot;
or &quot;\n&quot;). **/
      HeaderValue: HeaderValue;
    }
    export interface AlreadyExistsException {
      Name?: RuleOrRuleSetName;
    }
    export interface Body {
      /** The content of the message, in text format. Use this for text-based email
clients, or clients on high-latency networks (such as mobile devices). **/
      Text?: Content;
      /** The content of the message, in HTML format. Use this for email clients that can
process HTML. You can include clickable links, formatted text, and much more in
an HTML message. **/
      Html?: Content;
    }
    export interface BounceAction {
      /** The Amazon Resource Name (ARN) of the Amazon SNS topic to notify when the bounce
action is taken. An example of an Amazon SNS topic ARN is 
arn:aws:sns:us-west-2:123456789012:MyTopic. For more information about Amazon
SNS topics, see the Amazon SNS Developer Guide
[http://docs.aws.amazon.com/sns/latest/dg/CreateTopic.html]. **/
      TopicArn?: AmazonResourceName;
      /** The SMTP reply code, as defined by RFC 5321
[https://tools.ietf.org/html/rfc5321]. **/
      SmtpReplyCode: BounceSmtpReplyCode;
      /** The SMTP enhanced status code, as defined by RFC 3463
[https://tools.ietf.org/html/rfc3463]. **/
      StatusCode?: BounceStatusCode;
      /** Human-readable text to include in the bounce message. **/
      Message: BounceMessage;
      /** The email address of the sender of the bounced email. This is the address from
which the bounce message will be sent. **/
      Sender: Address;
    }
    export interface BouncedRecipientInfo {
      /** The email address of the recipient of the bounced email. **/
      Recipient: Address;
      /** This parameter is used only for sending authorization. It is the ARN of the
identity that is associated with the sending authorization policy that permits
you to receive email for the recipient of the bounced email. For more
information about sending authorization, see the Amazon SES Developer Guide
[http://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html]
. **/
      RecipientArn?: AmazonResourceName;
      /** The reason for the bounce. You must provide either this parameter or 
RecipientDsnFields. **/
      BounceType?: BounceType;
      /** Recipient-related DSN fields, most of which would normally be filled in
automatically when provided with a BounceType. You must provide either this
parameter or BounceType. **/
      RecipientDsnFields?: RecipientDsnFields;
    }
    export interface CannotDeleteException {
      Name?: RuleOrRuleSetName;
    }
    export interface CloneReceiptRuleSetRequest {
      /** The name of the rule set to create. The name must:

&amp;#42;  Contain only ASCII letters (a-z, A-Z), numbers (0-9), periods (.),
 underscores (_), or dashes (-).
 
 
&amp;#42;  Start and end with a letter or number.
 
 
&amp;#42;  Contain less than 64 characters. **/
      RuleSetName: ReceiptRuleSetName;
      /** The name of the rule set to clone. **/
      OriginalRuleSetName: ReceiptRuleSetName;
    }
    export interface CloneReceiptRuleSetResponse {
    }
    export interface Content {
      /** The textual data of the content. **/
      Data: MessageData;
      /** The character set of the content. **/
      Charset?: Charset;
    }
    export interface CreateReceiptFilterRequest {
      /** A data structure that describes the IP address filter to create, which consists
of a name, an IP address range, and whether to allow or block mail from it. **/
      Filter: ReceiptFilter;
    }
    export interface CreateReceiptFilterResponse {
    }
    export interface CreateReceiptRuleRequest {
      /** The name of the rule set to which to add the rule. **/
      RuleSetName: ReceiptRuleSetName;
      /** The name of an existing rule after which the new rule will be placed. If this
parameter is null, the new rule will be inserted at the beginning of the rule
list. **/
      After?: ReceiptRuleName;
      /** A data structure that contains the specified rule&#x27;s name, actions, recipients,
domains, enabled status, scan status, and TLS policy. **/
      Rule: ReceiptRule;
    }
    export interface CreateReceiptRuleResponse {
    }
    export interface CreateReceiptRuleSetRequest {
      /** The name of the rule set to create. The name must:

&amp;#42;  Contain only ASCII letters (a-z, A-Z), numbers (0-9), periods (.),
 underscores (_), or dashes (-).
 
 
&amp;#42;  Start and end with a letter or number.
 
 
&amp;#42;  Contain less than 64 characters. **/
      RuleSetName: ReceiptRuleSetName;
    }
    export interface CreateReceiptRuleSetResponse {
    }
    export interface DeleteIdentityPolicyRequest {
      /** The identity that is associated with the policy that you want to delete. You can
specify the identity by using its name or by using its Amazon Resource Name
(ARN). Examples: user@example.com, example.com, 
arn:aws:ses:us-east-1:123456789012:identity/example.com.

To successfully call this API, you must own the identity. **/
      Identity: Identity;
      /** The name of the policy to be deleted. **/
      PolicyName: PolicyName;
    }
    export interface DeleteIdentityPolicyResponse {
    }
    export interface DeleteIdentityRequest {
      /** The identity to be removed from the list of identities for the AWS Account. **/
      Identity: Identity;
    }
    export interface DeleteIdentityResponse {
    }
    export interface DeleteReceiptFilterRequest {
      /** The name of the IP address filter to delete. **/
      FilterName: ReceiptFilterName;
    }
    export interface DeleteReceiptFilterResponse {
    }
    export interface DeleteReceiptRuleRequest {
      /** The name of the receipt rule set that contains the receipt rule to delete. **/
      RuleSetName: ReceiptRuleSetName;
      /** The name of the receipt rule to delete. **/
      RuleName: ReceiptRuleName;
    }
    export interface DeleteReceiptRuleResponse {
    }
    export interface DeleteReceiptRuleSetRequest {
      /** The name of the receipt rule set to delete. **/
      RuleSetName: ReceiptRuleSetName;
    }
    export interface DeleteReceiptRuleSetResponse {
    }
    export interface DeleteVerifiedEmailAddressRequest {
      /** An email address to be removed from the list of verified addresses. **/
      EmailAddress: Address;
    }
    export interface DescribeActiveReceiptRuleSetRequest {
    }
    export interface DescribeActiveReceiptRuleSetResponse {
      /** The metadata for the currently active receipt rule set. The metadata consists of
the rule set name and a timestamp of when the rule set was created. **/
      Metadata?: ReceiptRuleSetMetadata;
      /** The receipt rules that belong to the active rule set. **/
      Rules?: ReceiptRulesList;
    }
    export interface DescribeReceiptRuleRequest {
      /** The name of the receipt rule set to which the receipt rule belongs. **/
      RuleSetName: ReceiptRuleSetName;
      /** The name of the receipt rule. **/
      RuleName: ReceiptRuleName;
    }
    export interface DescribeReceiptRuleResponse {
      /** A data structure that contains the specified receipt rule&#x27;s name, actions,
recipients, domains, enabled status, scan status, and Transport Layer Security
(TLS) policy. **/
      Rule?: ReceiptRule;
    }
    export interface DescribeReceiptRuleSetRequest {
      /** The name of the receipt rule set to describe. **/
      RuleSetName: ReceiptRuleSetName;
    }
    export interface DescribeReceiptRuleSetResponse {
      /** The metadata for the receipt rule set, which consists of the rule set name and
the timestamp of when the rule set was created. **/
      Metadata?: ReceiptRuleSetMetadata;
      /** A list of the receipt rules that belong to the specified receipt rule set. **/
      Rules?: ReceiptRulesList;
    }
    export interface Destination {
      /** The To: field(s) of the message. **/
      ToAddresses?: AddressList;
      /** The CC: field(s) of the message. **/
      CcAddresses?: AddressList;
      /** The BCC: field(s) of the message. **/
      BccAddresses?: AddressList;
    }
    export interface ExtensionField {
      /** The name of the header to add. Must be between 1 and 50 characters, inclusive,
and consist of alphanumeric (a-z, A-Z, 0-9) characters and dashes only. **/
      Name: ExtensionFieldName;
      /** The value of the header to add. Must be less than 2048 characters, and must not
contain newline characters (&quot;\r&quot; or &quot;\n&quot;). **/
      Value: ExtensionFieldValue;
    }
    export interface GetIdentityDkimAttributesRequest {
      /** A list of one or more verified identities - email addresses, domains, or both. **/
      Identities: IdentityList;
    }
    export interface GetIdentityDkimAttributesResponse {
      /** The DKIM attributes for an email address or a domain. **/
      DkimAttributes: DkimAttributes;
    }
    export interface GetIdentityMailFromDomainAttributesRequest {
      /** A list of one or more identities. **/
      Identities: IdentityList;
    }
    export interface GetIdentityMailFromDomainAttributesResponse {
      /** A map of identities to custom MAIL FROM attributes. **/
      MailFromDomainAttributes: MailFromDomainAttributes;
    }
    export interface GetIdentityNotificationAttributesRequest {
      /** A list of one or more identities. You can specify an identity by using its name
or by using its Amazon Resource Name (ARN). Examples: user@example.com, 
example.com, arn:aws:ses:us-east-1:123456789012:identity/example.com. **/
      Identities: IdentityList;
    }
    export interface GetIdentityNotificationAttributesResponse {
      /** A map of Identity to IdentityNotificationAttributes. **/
      NotificationAttributes: NotificationAttributes;
    }
    export interface GetIdentityPoliciesRequest {
      /** The identity for which the policies will be retrieved. You can specify an
identity by using its name or by using its Amazon Resource Name (ARN). Examples: 
user@example.com, example.com, 
arn:aws:ses:us-east-1:123456789012:identity/example.com.

To successfully call this API, you must own the identity. **/
      Identity: Identity;
      /** A list of the names of policies to be retrieved. You can retrieve a maximum of
20 policies at a time. If you do not know the names of the policies that are
attached to the identity, you can use ListIdentityPolicies. **/
      PolicyNames: PolicyNameList;
    }
    export interface GetIdentityPoliciesResponse {
      /** A map of policy names to policies. **/
      Policies: PolicyMap;
    }
    export interface GetIdentityVerificationAttributesRequest {
      /** A list of identities. **/
      Identities: IdentityList;
    }
    export interface GetIdentityVerificationAttributesResponse {
      /** A map of Identities to IdentityVerificationAttributes objects. **/
      VerificationAttributes: VerificationAttributes;
    }
    export interface GetSendQuotaResponse {
      /** The maximum number of emails the user is allowed to send in a 24-hour interval.
A value of -1 signifies an unlimited quota. **/
      Max24HourSend?: Max24HourSend;
      /** The maximum number of emails that Amazon SES can accept from the user&#x27;s account
per second.

The rate at which Amazon SES accepts the user&#x27;s messages might be less than the
maximum send rate. **/
      MaxSendRate?: MaxSendRate;
      /** The number of emails sent during the previous 24 hours. **/
      SentLast24Hours?: SentLast24Hours;
    }
    export interface GetSendStatisticsResponse {
      /** A list of data points, each of which represents 15 minutes of activity. **/
      SendDataPoints?: SendDataPointList;
    }
    export interface IdentityDkimAttributes {
      /** True if DKIM signing is enabled for email sent from the identity; false
otherwise. **/
      DkimEnabled: Enabled;
      /** Describes whether Amazon SES has successfully verified the DKIM DNS records
(tokens) published in the domain name&#x27;s DNS. (This only applies to domain
identities, not email address identities.) **/
      DkimVerificationStatus: VerificationStatus;
      /** A set of character strings that represent the domain&#x27;s identity. Using these
tokens, you will need to create DNS CNAME records that point to DKIM public keys
hosted by Amazon SES. Amazon Web Services will eventually detect that you have
updated your DNS records; this detection process may take up to 72 hours. Upon
successful detection, Amazon SES will be able to DKIM-sign email originating
from that domain. (This only applies to domain identities, not email address
identities.)

For more information about creating DNS records using DKIM tokens, go to the 
Amazon SES Developer Guide
[http://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim-dns-records.html]
. **/
      DkimTokens?: VerificationTokenList;
    }
    export interface IdentityMailFromDomainAttributes {
      /** The custom MAIL FROM domain that the identity is configured to use. **/
      MailFromDomain: MailFromDomainName;
      /** The state that indicates whether Amazon SES has successfully read the MX record
required for custom MAIL FROM domain setup. If the state is Success, Amazon SES
uses the specified custom MAIL FROM domain when the verified identity sends an
email. All other states indicate that Amazon SES takes the action described by 
BehaviorOnMXFailure. **/
      MailFromDomainStatus: CustomMailFromStatus;
      /** The action that Amazon SES takes if it cannot successfully read the required MX
record when you send an email. A value of UseDefaultValue indicates that if
Amazon SES cannot read the required MX record, it uses amazonses.com (or a
subdomain of that) as the MAIL FROM domain. A value of RejectMessage indicates
that if Amazon SES cannot read the required MX record, Amazon SES returns a 
MailFromDomainNotVerified error and does not send the email.

The custom MAIL FROM setup states that result in this behavior are Pending, 
Failed, and TemporaryFailure. **/
      BehaviorOnMXFailure: BehaviorOnMXFailure;
    }
    export interface IdentityNotificationAttributes {
      /** The Amazon Resource Name (ARN) of the Amazon SNS topic where Amazon SES will
publish bounce notifications. **/
      BounceTopic: NotificationTopic;
      /** The Amazon Resource Name (ARN) of the Amazon SNS topic where Amazon SES will
publish complaint notifications. **/
      ComplaintTopic: NotificationTopic;
      /** The Amazon Resource Name (ARN) of the Amazon SNS topic where Amazon SES will
publish delivery notifications. **/
      DeliveryTopic: NotificationTopic;
      /** Describes whether Amazon SES will forward bounce and complaint notifications as
email. true indicates that Amazon SES will forward bounce and complaint
notifications as email, while false indicates that bounce and complaint
notifications will be published only to the specified bounce and complaint
Amazon SNS topics. **/
      ForwardingEnabled: Enabled;
      /** Describes whether Amazon SES includes the original email headers in Amazon SNS
notifications of type Bounce. A value of true specifies that Amazon SES will
include headers in bounce notifications, and a value of false specifies that
Amazon SES will not include headers in bounce notifications. **/
      HeadersInBounceNotificationsEnabled?: Enabled;
      /** Describes whether Amazon SES includes the original email headers in Amazon SNS
notifications of type Complaint. A value of true specifies that Amazon SES will
include headers in complaint notifications, and a value of false specifies that
Amazon SES will not include headers in complaint notifications. **/
      HeadersInComplaintNotificationsEnabled?: Enabled;
      /** Describes whether Amazon SES includes the original email headers in Amazon SNS
notifications of type Delivery. A value of true specifies that Amazon SES will
include headers in delivery notifications, and a value of false specifies that
Amazon SES will not include headers in delivery notifications. **/
      HeadersInDeliveryNotificationsEnabled?: Enabled;
    }
    export interface IdentityVerificationAttributes {
      /** The verification status of the identity: &quot;Pending&quot;, &quot;Success&quot;, &quot;Failed&quot;, or
&quot;TemporaryFailure&quot;. **/
      VerificationStatus: VerificationStatus;
      /** The verification token for a domain identity. Null for email address identities. **/
      VerificationToken?: VerificationToken;
    }
    export interface InvalidLambdaFunctionException {
      FunctionArn?: AmazonResourceName;
    }
    export interface InvalidPolicyException {
    }
    export interface InvalidS3ConfigurationException {
      Bucket?: S3BucketName;
    }
    export interface InvalidSnsTopicException {
      Topic?: AmazonResourceName;
    }
    export interface LambdaAction {
      /** The Amazon Resource Name (ARN) of the Amazon SNS topic to notify when the Lambda
action is taken. An example of an Amazon SNS topic ARN is 
arn:aws:sns:us-west-2:123456789012:MyTopic. For more information about Amazon
SNS topics, see the Amazon SNS Developer Guide
[http://docs.aws.amazon.com/sns/latest/dg/CreateTopic.html]. **/
      TopicArn?: AmazonResourceName;
      /** The Amazon Resource Name (ARN) of the AWS Lambda function. An example of an AWS
Lambda function ARN is arn:aws:lambda:us-west-2:account-id:function:MyFunction.
For more information about AWS Lambda, see the AWS Lambda Developer Guide
[http://docs.aws.amazon.com/lambda/latest/dg/welcome.html]. **/
      FunctionArn: AmazonResourceName;
      /** The invocation type of the AWS Lambda function. An invocation type of 
RequestResponse means that the execution of the function will immediately result
in a response, and a value of Event means that the function will be invoked
asynchronously. The default value is Event. For information about AWS Lambda
invocation types, see the AWS Lambda Developer Guide
[http://docs.aws.amazon.com/lambda/latest/dg/API_Invoke.html].

There is a 30-second timeout on RequestResponse invocations. You should use 
Event invocation in most cases. Use RequestResponse only when you want to make a
mail flow decision, such as whether to stop the receipt rule or the receipt rule
set. **/
      InvocationType?: InvocationType;
    }
    export interface LimitExceededException {
    }
    export interface ListIdentitiesRequest {
      /** The type of the identities to list. Possible values are &quot;EmailAddress&quot; and
&quot;Domain&quot;. If this parameter is omitted, then all identities will be listed. **/
      IdentityType?: IdentityType;
      /** The token to use for pagination. **/
      NextToken?: NextToken;
      /** The maximum number of identities per page. Possible values are 1-1000 inclusive. **/
      MaxItems?: MaxItems;
    }
    export interface ListIdentitiesResponse {
      /** A list of identities. **/
      Identities: IdentityList;
      /** The token used for pagination. **/
      NextToken?: NextToken;
    }
    export interface ListIdentityPoliciesRequest {
      /** The identity that is associated with the policy for which the policies will be
listed. You can specify an identity by using its name or by using its Amazon
Resource Name (ARN). Examples: user@example.com, example.com, 
arn:aws:ses:us-east-1:123456789012:identity/example.com.

To successfully call this API, you must own the identity. **/
      Identity: Identity;
    }
    export interface ListIdentityPoliciesResponse {
      /** A list of names of policies that apply to the specified identity. **/
      PolicyNames: PolicyNameList;
    }
    export interface ListReceiptFiltersRequest {
    }
    export interface ListReceiptFiltersResponse {
      /** A list of IP address filter data structures, which each consist of a name, an IP
address range, and whether to allow or block mail from it. **/
      Filters?: ReceiptFilterList;
    }
    export interface ListReceiptRuleSetsRequest {
      /** A token returned from a previous call to ListReceiptRuleSets to indicate the
position in the receipt rule set list. **/
      NextToken?: NextToken;
    }
    export interface ListReceiptRuleSetsResponse {
      /** The metadata for the currently active receipt rule set. The metadata consists of
the rule set name and the timestamp of when the rule set was created. **/
      RuleSets?: ReceiptRuleSetsLists;
      /** A token indicating that there are additional receipt rule sets available to be
listed. Pass this token to successive calls of ListReceiptRuleSets to retrieve
up to 100 receipt rule sets at a time. **/
      NextToken?: NextToken;
    }
    export interface ListVerifiedEmailAddressesResponse {
      /** A list of email addresses that have been verified. **/
      VerifiedEmailAddresses?: AddressList;
    }
    export interface MailFromDomainNotVerifiedException {
    }
    export interface Message {
      /** The subject of the message: A short summary of the content, which will appear in
the recipient&#x27;s inbox. **/
      Subject: Content;
      /** The message body. **/
      Body: Body;
    }
    export interface MessageDsn {
      /** The reporting MTA that attempted to deliver the message, formatted as specified
in RFC 3464 [https://tools.ietf.org/html/rfc3464] (mta-name-type; mta-name). The
default value is dns; inbound-smtp.[region].amazonaws.com. **/
      ReportingMta: ReportingMta;
      /** When the message was received by the reporting mail transfer agent (MTA), in RFC
822 [https://www.ietf.org/rfc/rfc0822.txt] date-time format. **/
      ArrivalDate?: ArrivalDate;
      /** Additional X-headers to include in the DSN. **/
      ExtensionFields?: ExtensionFieldList;
    }
    export interface MessageRejected {
    }
    export interface PutIdentityPolicyRequest {
      /** The identity to which the policy will apply. You can specify an identity by
using its name or by using its Amazon Resource Name (ARN). Examples: 
user@example.com, example.com, 
arn:aws:ses:us-east-1:123456789012:identity/example.com.

To successfully call this API, you must own the identity. **/
      Identity: Identity;
      /** The name of the policy.

The policy name cannot exceed 64 characters and can only include alphanumeric
characters, dashes, and underscores. **/
      PolicyName: PolicyName;
      /** The text of the policy in JSON format. The policy cannot exceed 4 KB.

For information about the syntax of sending authorization policies, see the 
Amazon SES Developer Guide
[http://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization-policies.html]
. **/
      Policy: Policy;
    }
    export interface PutIdentityPolicyResponse {
    }
    export interface RawMessage {
      /** The raw data of the message. The client must ensure that the message format
complies with Internet email standards regarding email header fields, MIME
types, MIME encoding, and base64 encoding.

The To:, CC:, and BCC: headers in the raw message can contain a group list.

If you are using SendRawEmail with sending authorization, you can include
X-headers in the raw message to specify the &quot;Source,&quot; &quot;From,&quot; and &quot;Return-Path&quot;
addresses. For more information, see the documentation for SendRawEmail. 

Do not include these X-headers in the DKIM signature, because they are removed
by Amazon SES before sending the email.

For more information, go to the Amazon SES Developer Guide
[http://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-email-raw.html]. **/
      Data: RawMessageData;
    }
    export interface ReceiptAction {
      /** Saves the received message to an Amazon Simple Storage Service (Amazon S3)
bucket and, optionally, publishes a notification to Amazon SNS. **/
      S3Action?: S3Action;
      /** Rejects the received email by returning a bounce response to the sender and,
optionally, publishes a notification to Amazon Simple Notification Service
(Amazon SNS). **/
      BounceAction?: BounceAction;
      /** Calls Amazon WorkMail and, optionally, publishes a notification to Amazon SNS. **/
      WorkmailAction?: WorkmailAction;
      /** Calls an AWS Lambda function, and optionally, publishes a notification to Amazon
SNS. **/
      LambdaAction?: LambdaAction;
      /** Terminates the evaluation of the receipt rule set and optionally publishes a
notification to Amazon SNS. **/
      StopAction?: StopAction;
      /** Adds a header to the received email. **/
      AddHeaderAction?: AddHeaderAction;
      /** Publishes the email content within a notification to Amazon SNS. **/
      SNSAction?: SNSAction;
    }
    export interface ReceiptFilter {
      /** The name of the IP address filter. The name must:

&amp;#42;  Contain only ASCII letters (a-z, A-Z), numbers (0-9), periods (.),
 underscores (_), or dashes (-).
 
 
&amp;#42;  Start and end with a letter or number.
 
 
&amp;#42;  Contain less than 64 characters. **/
      Name: ReceiptFilterName;
      /** A structure that provides the IP addresses to block or allow, and whether to
block or allow incoming mail from them. **/
      IpFilter: ReceiptIpFilter;
    }
    export interface ReceiptIpFilter {
      /** Indicates whether to block or allow incoming mail from the specified IP
addresses. **/
      Policy: ReceiptFilterPolicy;
      /** A single IP address or a range of IP addresses that you want to block or allow,
specified in Classless Inter-Domain Routing (CIDR) notation. An example of a
single email address is 10.0.0.1. An example of a range of IP addresses is
10.0.0.1/24. For more information about CIDR notation, see RFC 2317
[https://tools.ietf.org/html/rfc2317]. **/
      Cidr: Cidr;
    }
    export interface ReceiptRule {
      /** The name of the receipt rule. The name must:

&amp;#42;  Contain only ASCII letters (a-z, A-Z), numbers (0-9), periods (.),
 underscores (_), or dashes (-).
 
 
&amp;#42;  Start and end with a letter or number.
 
 
&amp;#42;  Contain less than 64 characters. **/
      Name: ReceiptRuleName;
      /** If true, the receipt rule is active. The default value is false. **/
      Enabled?: Enabled;
      /** Specifies whether Amazon SES should require that incoming email is delivered
over a connection encrypted with Transport Layer Security (TLS). If this
parameter is set to Require, Amazon SES will bounce emails that are not received
over TLS. The default is Optional. **/
      TlsPolicy?: TlsPolicy;
      /** The recipient domains and email addresses to which the receipt rule applies. If
this field is not specified, this rule will match all recipients under all
verified domains. **/
      Recipients?: RecipientsList;
      /** An ordered list of actions to perform on messages that match at least one of the
recipient email addresses or domains specified in the receipt rule. **/
      Actions?: ReceiptActionsList;
      /** If true, then messages to which this receipt rule applies are scanned for spam
and viruses. The default value is false. **/
      ScanEnabled?: Enabled;
    }
    export interface ReceiptRuleSetMetadata {
      /** The name of the receipt rule set. The name must:

&amp;#42;  Contain only ASCII letters (a-z, A-Z), numbers (0-9), periods (.),
 underscores (_), or dashes (-).
 
 
&amp;#42;  Start and end with a letter or number.
 
 
&amp;#42;  Contain less than 64 characters. **/
      Name?: ReceiptRuleSetName;
      /** The date and time the receipt rule set was created. **/
      CreatedTimestamp?: Timestamp;
    }
    export interface RecipientDsnFields {
      /** The email address to which the message was ultimately delivered. This
corresponds to the Final-Recipient in the DSN. If not specified, FinalRecipient 
will be set to the Recipient specified in the BouncedRecipientInfo structure.
Either FinalRecipient or the recipient in BouncedRecipientInfo must be a
recipient of the original bounced message.

Do not prepend the FinalRecipient email address with rfc 822;, as described in 
RFC 3798 [https://tools.ietf.org/html/rfc3798]. **/
      FinalRecipient?: Address;
      /** The action performed by the reporting mail transfer agent (MTA) as a result of
its attempt to deliver the message to the recipient address. This is required by 
RFC 3464 [https://tools.ietf.org/html/rfc3464]. **/
      Action: DsnAction;
      /** The MTA to which the remote MTA attempted to deliver the message, formatted as
specified in RFC 3464 [https://tools.ietf.org/html/rfc3464] (mta-name-type;
mta-name). This parameter typically applies only to propagating synchronous
bounces. **/
      RemoteMta?: RemoteMta;
      /** The status code that indicates what went wrong. This is required by RFC 3464
[https://tools.ietf.org/html/rfc3464]. **/
      Status: DsnStatus;
      /** An extended explanation of what went wrong; this is usually an SMTP response.
See RFC 3463 [https://tools.ietf.org/html/rfc3463] for the correct formatting of
this parameter. **/
      DiagnosticCode?: DiagnosticCode;
      /** The time the final delivery attempt was made, in RFC 822
[https://www.ietf.org/rfc/rfc0822.txt] date-time format. **/
      LastAttemptDate?: LastAttemptDate;
      /** Additional X-headers to include in the DSN. **/
      ExtensionFields?: ExtensionFieldList;
    }
    export interface ReorderReceiptRuleSetRequest {
      /** The name of the receipt rule set to reorder. **/
      RuleSetName: ReceiptRuleSetName;
      /** A list of the specified receipt rule set&#x27;s receipt rules in the order that you
want to put them. **/
      RuleNames: ReceiptRuleNamesList;
    }
    export interface ReorderReceiptRuleSetResponse {
    }
    export interface RuleDoesNotExistException {
      Name?: RuleOrRuleSetName;
    }
    export interface RuleSetDoesNotExistException {
      Name?: RuleOrRuleSetName;
    }
    export interface S3Action {
      /** The ARN of the Amazon SNS topic to notify when the message is saved to the
Amazon S3 bucket. An example of an Amazon SNS topic ARN is 
arn:aws:sns:us-west-2:123456789012:MyTopic. For more information about Amazon
SNS topics, see the Amazon SNS Developer Guide
[http://docs.aws.amazon.com/sns/latest/dg/CreateTopic.html]. **/
      TopicArn?: AmazonResourceName;
      /** The name of the Amazon S3 bucket to which to save the received email. **/
      BucketName: S3BucketName;
      /** The key prefix of the Amazon S3 bucket. The key prefix is similar to a directory
name that enables you to store similar data under the same directory in a
bucket. **/
      ObjectKeyPrefix?: S3KeyPrefix;
      /** The customer master key that Amazon SES should use to encrypt your emails before
saving them to the Amazon S3 bucket. You can use the default master key or a
custom master key you created in AWS KMS as follows:

&amp;#42;  To use the default master key, provide an ARN in the form of 
 arn:aws:kms:REGION:ACCOUNT-ID-WITHOUT-HYPHENS:alias/aws/ses. For example, if
 your AWS account ID is 123456789012 and you want to use the default master
 key in the US West (Oregon) region, the ARN of the default master key would
 be arn:aws:kms:us-west-2:123456789012:alias/aws/ses. If you use the default
 master key, you don&#x27;t need to perform any extra steps to give Amazon SES
 permission to use the key.
 
 
&amp;#42;  To use a custom master key you created in AWS KMS, provide the ARN of the
 master key and ensure that you add a statement to your key&#x27;s policy to give
 Amazon SES permission to use it. For more information about giving
 permissions, see the Amazon SES Developer Guide
 [http://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-permissions.html]
 .
 
 

For more information about key policies, see the AWS KMS Developer Guide
[http://docs.aws.amazon.com/kms/latest/developerguide/concepts.html]. If you do
not specify a master key, Amazon SES will not encrypt your emails.

Your mail is encrypted by Amazon SES using the Amazon S3 encryption client
before the mail is submitted to Amazon S3 for storage. It is not encrypted using
Amazon S3 server-side encryption. This means that you must use the Amazon S3
encryption client to decrypt the email after retrieving it from Amazon S3, as
the service has no access to use your AWS KMS keys for decryption. This
encryption client is currently available with the AWS Java SDK
[http://aws.amazon.com/sdk-for-java/] and AWS Ruby SDK
[http://aws.amazon.com/sdk-for-ruby/] only. For more information about
client-side encryption using AWS KMS master keys, see the Amazon S3 Developer
Guide
[http://alpha-docs-aws.amazon.com/AmazonS3/latest/dev/UsingClientSideEncryption.html]
. **/
      KmsKeyArn?: AmazonResourceName;
    }
    export interface SNSAction {
      /** The Amazon Resource Name (ARN) of the Amazon SNS topic to notify. An example of
an Amazon SNS topic ARN is arn:aws:sns:us-west-2:123456789012:MyTopic. For more
information about Amazon SNS topics, see the Amazon SNS Developer Guide
[http://docs.aws.amazon.com/sns/latest/dg/CreateTopic.html]. **/
      TopicArn: AmazonResourceName;
      /** The encoding to use for the email within the Amazon SNS notification. UTF-8 is
easier to use, but may not preserve all special characters when a message was
encoded with a different encoding format. Base64 preserves all special
characters. The default value is UTF-8. **/
      Encoding?: SNSActionEncoding;
    }
    export interface SendBounceRequest {
      /** The message ID of the message to be bounced. **/
      OriginalMessageId: MessageId;
      /** The address to use in the &quot;From&quot; header of the bounce message. This must be an
identity that you have verified with Amazon SES. **/
      BounceSender: Address;
      /** Human-readable text for the bounce message to explain the failure. If not
specified, the text will be auto-generated based on the bounced recipient
information. **/
      Explanation?: Explanation;
      /** Message-related DSN fields. If not specified, Amazon SES will choose the values. **/
      MessageDsn?: MessageDsn;
      /** A list of recipients of the bounced message, including the information required
to create the Delivery Status Notifications (DSNs) for the recipients. You must
specify at least one BouncedRecipientInfo in the list. **/
      BouncedRecipientInfoList: BouncedRecipientInfoList;
      /** This parameter is used only for sending authorization. It is the ARN of the
identity that is associated with the sending authorization policy that permits
you to use the address in the &quot;From&quot; header of the bounce. For more information
about sending authorization, see the Amazon SES Developer Guide
[http://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html]
. **/
      BounceSenderArn?: AmazonResourceName;
    }
    export interface SendBounceResponse {
      /** The message ID of the bounce message. **/
      MessageId?: MessageId;
    }
    export interface SendDataPoint {
      /** Time of the data point. **/
      Timestamp?: Timestamp;
      /** Number of emails that have been enqueued for sending. **/
      DeliveryAttempts?: Counter;
      /** Number of emails that have bounced. **/
      Bounces?: Counter;
      /** Number of unwanted emails that were rejected by recipients. **/
      Complaints?: Counter;
      /** Number of emails rejected by Amazon SES. **/
      Rejects?: Counter;
    }
    export interface SendEmailRequest {
      /** The email address that is sending the email. This email address must be either
individually verified with Amazon SES, or from a domain that has been verified
with Amazon SES. For information about verifying identities, see the Amazon SES
Developer Guide
[http://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-addresses-and-domains.html]
.

If you are sending on behalf of another user and have been permitted to do so by
a sending authorization policy, then you must also specify the SourceArn 
parameter. For more information about sending authorization, see the Amazon SES
Developer Guide
[http://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html]
.

In all cases, the email address must be 7-bit ASCII. If the text must contain
any other characters, then you must use MIME encoded-word syntax (RFC 2047)
instead of a literal string. MIME encoded-word syntax uses the following form: 
=?charset?encoding?encoded-text?=. For more information, see RFC 2047
[http://tools.ietf.org/html/rfc2047]. **/
      Source: Address;
      /** The destination for this email, composed of To:, CC:, and BCC: fields. **/
      Destination: Destination;
      /** The message to be sent. **/
      Message: Message;
      /** The reply-to email address(es) for the message. If the recipient replies to the
message, each reply-to address will receive the reply. **/
      ReplyToAddresses?: AddressList;
      /** The email address to which bounces and complaints are to be forwarded when
feedback forwarding is enabled. If the message cannot be delivered to the
recipient, then an error message will be returned from the recipient&#x27;s ISP; this
message will then be forwarded to the email address specified by the ReturnPath 
parameter. The ReturnPath parameter is never overwritten. This email address
must be either individually verified with Amazon SES, or from a domain that has
been verified with Amazon SES. **/
      ReturnPath?: Address;
      /** This parameter is used only for sending authorization. It is the ARN of the
identity that is associated with the sending authorization policy that permits
you to send for the email address specified in the Source parameter.

For example, if the owner of example.com (which has ARN 
arn:aws:ses:us-east-1:123456789012:identity/example.com) attaches a policy to it
that authorizes you to send from user@example.com, then you would specify the 
SourceArn to be arn:aws:ses:us-east-1:123456789012:identity/example.com, and the 
Source to be user@example.com.

For more information about sending authorization, see the Amazon SES Developer
Guide
[http://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html]
. **/
      SourceArn?: AmazonResourceName;
      /** This parameter is used only for sending authorization. It is the ARN of the
identity that is associated with the sending authorization policy that permits
you to use the email address specified in the ReturnPath parameter.

For example, if the owner of example.com (which has ARN 
arn:aws:ses:us-east-1:123456789012:identity/example.com) attaches a policy to it
that authorizes you to use feedback@example.com, then you would specify the 
ReturnPathArn to be arn:aws:ses:us-east-1:123456789012:identity/example.com, and
the ReturnPath to be feedback@example.com.

For more information about sending authorization, see the Amazon SES Developer
Guide
[http://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html]
. **/
      ReturnPathArn?: AmazonResourceName;
    }
    export interface SendEmailResponse {
      /** The unique message identifier returned from the SendEmail action. **/
      MessageId: MessageId;
    }
    export interface SendRawEmailRequest {
      /** The identity&#x27;s email address. If you do not provide a value for this parameter,
you must specify a &quot;From&quot; address in the raw text of the message. (You can also
specify both.)

By default, the string must be 7-bit ASCII. If the text must contain any other
characters, then you must use MIME encoded-word syntax (RFC 2047) instead of a
literal string. MIME encoded-word syntax uses the following form: 
=?charset?encoding?encoded-text?=. For more information, see RFC 2047
[http://tools.ietf.org/html/rfc2047]. 

If you specify the Source parameter and have feedback forwarding enabled, then
bounces and complaints will be sent to this email address. This takes precedence
over any Return-Path header that you might include in the raw text of the
message. **/
      Source?: Address;
      /** A list of destinations for the message, consisting of To:, CC:, and BCC:
addresses. **/
      Destinations?: AddressList;
      /** The raw text of the message. The client is responsible for ensuring the
following:

&amp;#42;  Message must contain a header and a body, separated by a blank line.
 
 
&amp;#42;  All required header fields must be present.
 
 
&amp;#42;  Each part of a multipart MIME message must be formatted properly.
 
 
&amp;#42;  MIME content types must be among those supported by Amazon SES. For more
 information, go to the Amazon SES Developer Guide
 [http://docs.aws.amazon.com/ses/latest/DeveloperGuide/mime-types.html].
 
 
&amp;#42;  Must be base64-encoded. **/
      RawMessage: RawMessage;
      /** This parameter is used only for sending authorization. It is the ARN of the
identity that is associated with the sending authorization policy that permits
you to specify a particular &quot;From&quot; address in the header of the raw email.

Instead of using this parameter, you can use the X-header X-SES-FROM-ARN in the
raw message of the email. If you use both the FromArn parameter and the
corresponding X-header, Amazon SES uses the value of the FromArn parameter.

For information about when to use this parameter, see the description of 
SendRawEmail in this guide, or see the Amazon SES Developer Guide
[http://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization-delegate-sender-tasks-email.html]
. **/
      FromArn?: AmazonResourceName;
      /** This parameter is used only for sending authorization. It is the ARN of the
identity that is associated with the sending authorization policy that permits
you to send for the email address specified in the Source parameter.

For example, if the owner of example.com (which has ARN 
arn:aws:ses:us-east-1:123456789012:identity/example.com) attaches a policy to it
that authorizes you to send from user@example.com, then you would specify the 
SourceArn to be arn:aws:ses:us-east-1:123456789012:identity/example.com, and the 
Source to be user@example.com.

Instead of using this parameter, you can use the X-header X-SES-SOURCE-ARN in
the raw message of the email. If you use both the SourceArn parameter and the
corresponding X-header, Amazon SES uses the value of the SourceArn parameter.

For information about when to use this parameter, see the description of 
SendRawEmail in this guide, or see the Amazon SES Developer Guide
[http://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization-delegate-sender-tasks-email.html]
. **/
      SourceArn?: AmazonResourceName;
      /** This parameter is used only for sending authorization. It is the ARN of the
identity that is associated with the sending authorization policy that permits
you to use the email address specified in the ReturnPath parameter.

For example, if the owner of example.com (which has ARN 
arn:aws:ses:us-east-1:123456789012:identity/example.com) attaches a policy to it
that authorizes you to use feedback@example.com, then you would specify the 
ReturnPathArn to be arn:aws:ses:us-east-1:123456789012:identity/example.com, and
the ReturnPath to be feedback@example.com.

Instead of using this parameter, you can use the X-header X-SES-RETURN-PATH-ARN 
in the raw message of the email. If you use both the ReturnPathArn parameter and
the corresponding X-header, Amazon SES uses the value of the ReturnPathArn 
parameter.

For information about when to use this parameter, see the description of 
SendRawEmail in this guide, or see the Amazon SES Developer Guide
[http://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization-delegate-sender-tasks-email.html]
. **/
      ReturnPathArn?: AmazonResourceName;
    }
    export interface SendRawEmailResponse {
      /** The unique message identifier returned from the SendRawEmail action. **/
      MessageId: MessageId;
    }
    export interface SetActiveReceiptRuleSetRequest {
      /** The name of the receipt rule set to make active. Setting this value to null
disables all email receiving. **/
      RuleSetName?: ReceiptRuleSetName;
    }
    export interface SetActiveReceiptRuleSetResponse {
    }
    export interface SetIdentityDkimEnabledRequest {
      /** The identity for which DKIM signing should be enabled or disabled. **/
      Identity: Identity;
      /** Sets whether DKIM signing is enabled for an identity. Set to true to enable DKIM
signing for this identity; false to disable it. **/
      DkimEnabled: Enabled;
    }
    export interface SetIdentityDkimEnabledResponse {
    }
    export interface SetIdentityFeedbackForwardingEnabledRequest {
      /** The identity for which to set bounce and complaint notification forwarding.
Examples: user@example.com, example.com. **/
      Identity: Identity;
      /** Sets whether Amazon SES will forward bounce and complaint notifications as
email. true specifies that Amazon SES will forward bounce and complaint
notifications as email, in addition to any Amazon SNS topic publishing otherwise
specified. false specifies that Amazon SES will publish bounce and complaint
notifications only through Amazon SNS. This value can only be set to false when
Amazon SNS topics are set for both Bounce and Complaint notification types. **/
      ForwardingEnabled: Enabled;
    }
    export interface SetIdentityFeedbackForwardingEnabledResponse {
    }
    export interface SetIdentityHeadersInNotificationsEnabledRequest {
      /** The identity for which to enable or disable headers in notifications. Examples: 
user@example.com, example.com. **/
      Identity: Identity;
      /** The notification type for which to enable or disable headers in notifications. **/
      NotificationType: NotificationType;
      /** Sets whether Amazon SES includes the original email headers in Amazon SNS
notifications of the specified notification type. A value of true specifies that
Amazon SES will include headers in notifications, and a value of false specifies
that Amazon SES will not include headers in notifications.

This value can only be set when NotificationType is already set to use a
particular Amazon SNS topic. **/
      Enabled: Enabled;
    }
    export interface SetIdentityHeadersInNotificationsEnabledResponse {
    }
    export interface SetIdentityMailFromDomainRequest {
      /** The verified identity for which you want to enable or disable the specified
custom MAIL FROM domain. **/
      Identity: Identity;
      /** The custom MAIL FROM domain that you want the verified identity to use. The MAIL
FROM domain must 1) be a subdomain of the verified identity, 2) not be used in a
&quot;From&quot; address if the MAIL FROM domain is the destination of email feedback
forwarding (for more information, see the Amazon SES Developer Guide
[http://docs.aws.amazon.com/ses/latest/DeveloperGuide/mail-from.html]), and 3)
not be used to receive emails. A value of null disables the custom MAIL FROM
setting for the identity. **/
      MailFromDomain?: MailFromDomainName;
      /** The action that you want Amazon SES to take if it cannot successfully read the
required MX record when you send an email. If you choose UseDefaultValue, Amazon
SES will use amazonses.com (or a subdomain of that) as the MAIL FROM domain. If
you choose RejectMessage, Amazon SES will return a MailFromDomainNotVerified 
error and not send the email.

The action specified in BehaviorOnMXFailure is taken when the custom MAIL FROM
domain setup is in the Pending, Failed, and TemporaryFailure states. **/
      BehaviorOnMXFailure?: BehaviorOnMXFailure;
    }
    export interface SetIdentityMailFromDomainResponse {
    }
    export interface SetIdentityNotificationTopicRequest {
      /** The identity for which the Amazon SNS topic will be set. You can specify an
identity by using its name or by using its Amazon Resource Name (ARN). Examples: 
user@example.com, example.com, 
arn:aws:ses:us-east-1:123456789012:identity/example.com. **/
      Identity: Identity;
      /** The type of notifications that will be published to the specified Amazon SNS
topic. **/
      NotificationType: NotificationType;
      /** The Amazon Resource Name (ARN) of the Amazon SNS topic. If the parameter is
omitted from the request or a null value is passed, SnsTopic is cleared and
publishing is disabled. **/
      SnsTopic?: NotificationTopic;
    }
    export interface SetIdentityNotificationTopicResponse {
    }
    export interface SetReceiptRulePositionRequest {
      /** The name of the receipt rule set that contains the receipt rule to reposition. **/
      RuleSetName: ReceiptRuleSetName;
      /** The name of the receipt rule to reposition. **/
      RuleName: ReceiptRuleName;
      /** The name of the receipt rule after which to place the specified receipt rule. **/
      After?: ReceiptRuleName;
    }
    export interface SetReceiptRulePositionResponse {
    }
    export interface StopAction {
      /** The scope to which the Stop action applies. That is, what is being stopped. **/
      Scope: StopScope;
      /** The Amazon Resource Name (ARN) of the Amazon SNS topic to notify when the stop
action is taken. An example of an Amazon SNS topic ARN is 
arn:aws:sns:us-west-2:123456789012:MyTopic. For more information about Amazon
SNS topics, see the Amazon SNS Developer Guide
[http://docs.aws.amazon.com/sns/latest/dg/CreateTopic.html]. **/
      TopicArn?: AmazonResourceName;
    }
    export interface UpdateReceiptRuleRequest {
      /** The name of the receipt rule set to which the receipt rule belongs. **/
      RuleSetName: ReceiptRuleSetName;
      /** A data structure that contains the updated receipt rule information. **/
      Rule: ReceiptRule;
    }
    export interface UpdateReceiptRuleResponse {
    }
    export interface VerifyDomainDkimRequest {
      /** The name of the domain to be verified for Easy DKIM signing. **/
      Domain: Domain;
    }
    export interface VerifyDomainDkimResponse {
      /** A set of character strings that represent the domain&#x27;s identity. If the identity
is an email address, the tokens represent the domain of that address.

Using these tokens, you will need to create DNS CNAME records that point to DKIM
public keys hosted by Amazon SES. Amazon Web Services will eventually detect
that you have updated your DNS records; this detection process may take up to 72
hours. Upon successful detection, Amazon SES will be able to DKIM-sign emails
originating from that domain.

For more information about creating DNS records using DKIM tokens, go to the 
Amazon SES Developer Guide
[http://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim-dns-records.html]
. **/
      DkimTokens: VerificationTokenList;
    }
    export interface VerifyDomainIdentityRequest {
      /** The domain to be verified. **/
      Domain: Domain;
    }
    export interface VerifyDomainIdentityResponse {
      /** A TXT record that must be placed in the DNS settings for the domain, in order to
complete domain verification. **/
      VerificationToken: VerificationToken;
    }
    export interface VerifyEmailAddressRequest {
      /** The email address to be verified. **/
      EmailAddress: Address;
    }
    export interface VerifyEmailIdentityRequest {
      /** The email address to be verified. **/
      EmailAddress: Address;
    }
    export interface VerifyEmailIdentityResponse {
    }
    export interface WorkmailAction {
      /** The Amazon Resource Name (ARN) of the Amazon SNS topic to notify when the
WorkMail action is called. An example of an Amazon SNS topic ARN is 
arn:aws:sns:us-west-2:123456789012:MyTopic. For more information about Amazon
SNS topics, see the Amazon SNS Developer Guide
[http://docs.aws.amazon.com/sns/latest/dg/CreateTopic.html]. **/
      TopicArn?: AmazonResourceName;
      /** The ARN of the Amazon WorkMail organization. An example of an Amazon WorkMail
organization ARN is 
arn:aws:workmail:us-west-2:123456789012:organization/m-68755160c4cb4e29a2b2f8fb58f359d7
. For information about Amazon WorkMail organizations, see the Amazon WorkMail
Administrator Guide
[http://docs.aws.amazon.com/workmail/latest/adminguide/organizations_overview.html]
. **/
      OrganizationArn: AmazonResourceName;
    }
  }
}
