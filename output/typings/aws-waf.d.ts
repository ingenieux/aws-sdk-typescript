// Type definitions for aws-sdk - AWS WAF
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

// COMMENTED <reference path="./aws-sdk.d.ts" />

declare module "aws-sdk" {

  /**
    * apiVersion: 2015-08-24
    * endpointPrefix: waf
    * serviceAbbreviation: WAF
    * signatureVersion: v4
    * protocol: json
    *
    * This is the AWS WAF API Reference . This guide is for developers who need
 detailed information about the AWS WAF API actions, data types, and errors. For
 detailed information about AWS WAF features and an overview of how to use the
 AWS WAF API, see the AWS WAF Developer Guide
 [http://docs.aws.amazon.com/waf/latest/developerguide/] .
    *
    */
  export class WAF extends Service {
    constructor(options?: any);
    endpoint: Endpoint;
    /**
     * Creates a ByteMatchSet . You then use UpdateByteMatchSet to identify the part of
a web request that you want AWS WAF to inspect, such as the values of the 
User-Agent header or the query string. For example, you can create a 
ByteMatchSet that matches any requests with User-Agent headers that contain the
string BadBot . You can then configure AWS WAF to reject those requests.

To create and configure a ByteMatchSet , perform the following steps:

 1. Use GetChangeToken to get the change token that you provide in the 
    ChangeToken parameter of a CreateByteMatchSet request.
 2. Submit a CreateByteMatchSet request.
 3. Use GetChangeToken to get the change token that you provide in the 
    ChangeToken parameter of an UpdateByteMatchSet request.
 4. Submit an UpdateByteMatchSet request to specify the part of the request that
    you want AWS WAF to inspect (for example, the header or the URI) and the
    value that you want AWS WAF to watch for.

For more information about how to use the AWS WAF API to allow or block HTTP
requests, see the AWS WAF Developer Guide
[http://docs.aws.amazon.com/waf/latest/developerguide/] .
     *
     * @error WAFDisallowedNameException   
     * @error WAFInternalErrorException   
     * @error WAFInvalidAccountException   
     * @error WAFInvalidParameterException   
     * @error WAFStaleDataException   
     * @error WAFLimitsExceededException   
     */
    createByteMatchSet(params: WAF.CreateByteMatchSetRequest, callback?: (err: WAF.WAFDisallowedNameException | WAF.WAFInternalErrorException | WAF.WAFInvalidAccountException | WAF.WAFInvalidParameterException | WAF.WAFStaleDataException | WAF.WAFLimitsExceededException | any, data: WAF.CreateByteMatchSetResponse | any) => void): Request;
    /**
     * Creates an IPSet , which you use to specify which web requests you want to allow
or block based on the IP addresses that the requests originate from. For
example, if you&#x27;re receiving a lot of requests from one or more individual IP
addresses or one or more ranges of IP addresses and you want to block the
requests, you can create an IPSet that contains those IP addresses and then
configure AWS WAF to block the requests.

To create and configure an IPSet , perform the following steps:

 1. Use GetChangeToken to get the change token that you provide in the 
    ChangeToken parameter of a CreateIPSet request.
 2. Submit a CreateIPSet request.
 3. Use GetChangeToken to get the change token that you provide in the 
    ChangeToken parameter of an UpdateIPSet request.
 4. Submit an UpdateIPSet request to specify the IP addresses that you want AWS
    WAF to watch for.

For more information about how to use the AWS WAF API to allow or block HTTP
requests, see the AWS WAF Developer Guide
[http://docs.aws.amazon.com/waf/latest/developerguide/] .
     *
     * @error WAFStaleDataException   
     * @error WAFInternalErrorException   
     * @error WAFInvalidAccountException   
     * @error WAFDisallowedNameException   
     * @error WAFInvalidParameterException   
     * @error WAFLimitsExceededException   
     */
    createIPSet(params: WAF.CreateIPSetRequest, callback?: (err: WAF.WAFStaleDataException | WAF.WAFInternalErrorException | WAF.WAFInvalidAccountException | WAF.WAFDisallowedNameException | WAF.WAFInvalidParameterException | WAF.WAFLimitsExceededException | any, data: WAF.CreateIPSetResponse | any) => void): Request;
    /**
     * Creates a Rule , which contains the IPSet objects, ByteMatchSet objects, and
other predicates that identify the requests that you want to block. If you add
more than one predicate to a Rule , a request must match all of the
specifications to be allowed or blocked. For example, suppose you add the
following to a Rule :

 &amp;#42; An IPSet that matches the IP address 192.0.2.44/32
 * A ByteMatchSet that matches BadBot in the User-Agent header

You then add the Rule to a WebACL and specify that you want to blocks requests
that satisfy the Rule . For a request to be blocked, it must come from the IP
address 192.0.2.44 and the User-Agent header in the request must contain the
value BadBot .

To create and configure a Rule , perform the following steps:

 1. Create and update the predicates that you want to include in the Rule . For
    more information, see CreateByteMatchSet , CreateIPSet , and 
    CreateSqlInjectionMatchSet .
 2. Use GetChangeToken to get the change token that you provide in the 
    ChangeToken parameter of a CreateRule request.
 3. Submit a CreateRule request.
 4. Use GetChangeToken to get the change token that you provide in the 
    ChangeToken parameter of an UpdateRule request.
 5. Submit an UpdateRule request to specify the predicates that you want to
    include in the Rule .
 6. Create and update a WebACL that contains the Rule . For more information,
    see CreateWebACL .

For more information about how to use the AWS WAF API to allow or block HTTP
requests, see the AWS WAF Developer Guide
[http://docs.aws.amazon.com/waf/latest/developerguide/] .
     *
     * @error WAFStaleDataException   
     * @error WAFInternalErrorException   
     * @error WAFDisallowedNameException   
     * @error WAFInvalidParameterException   
     * @error WAFLimitsExceededException   
     */
    createRule(params: WAF.CreateRuleRequest, callback?: (err: WAF.WAFStaleDataException | WAF.WAFInternalErrorException | WAF.WAFDisallowedNameException | WAF.WAFInvalidParameterException | WAF.WAFLimitsExceededException | any, data: WAF.CreateRuleResponse | any) => void): Request;
    /**
     * Creates a SizeConstraintSet . You then use UpdateSizeConstraintSet to identify
the part of a web request that you want AWS WAF to check for length, such as the
length of the User-Agent header or the length of the query string. For example,
you can create a SizeConstraintSet that matches any requests that have a query
string that is longer than 100 bytes. You can then configure AWS WAF to reject
those requests.

To create and configure a SizeConstraintSet , perform the following steps:

 1. Use GetChangeToken to get the change token that you provide in the 
    ChangeToken parameter of a CreateSizeConstraintSet request.
 2. Submit a CreateSizeConstraintSet request.
 3. Use GetChangeToken to get the change token that you provide in the 
    ChangeToken parameter of an UpdateSizeConstraintSet request.
 4. Submit an UpdateSizeConstraintSet request to specify the part of the request
    that you want AWS WAF to inspect (for example, the header or the URI) and
    the value that you want AWS WAF to watch for.

For more information about how to use the AWS WAF API to allow or block HTTP
requests, see the AWS WAF Developer Guide
[http://docs.aws.amazon.com/waf/latest/developerguide/] .
     *
     * @error WAFStaleDataException   
     * @error WAFInternalErrorException   
     * @error WAFInvalidAccountException   
     * @error WAFDisallowedNameException   
     * @error WAFInvalidParameterException   
     * @error WAFLimitsExceededException   
     */
    createSizeConstraintSet(params: WAF.CreateSizeConstraintSetRequest, callback?: (err: WAF.WAFStaleDataException | WAF.WAFInternalErrorException | WAF.WAFInvalidAccountException | WAF.WAFDisallowedNameException | WAF.WAFInvalidParameterException | WAF.WAFLimitsExceededException | any, data: WAF.CreateSizeConstraintSetResponse | any) => void): Request;
    /**
     * Creates a SqlInjectionMatchSet , which you use to allow, block, or count
requests that contain snippets of SQL code in a specified part of web requests.
AWS WAF searches for character sequences that are likely to be malicious
strings.

To create and configure a SqlInjectionMatchSet , perform the following steps:

 1. Use GetChangeToken to get the change token that you provide in the 
    ChangeToken parameter of a CreateSqlInjectionMatchSet request.
 2. Submit a CreateSqlInjectionMatchSet request.
 3. Use GetChangeToken to get the change token that you provide in the 
    ChangeToken parameter of an UpdateSqlInjectionMatchSet request.
 4. Submit an UpdateSqlInjectionMatchSet request to specify the parts of web
    requests in which you want to allow, block, or count malicious SQL code.

For more information about how to use the AWS WAF API to allow or block HTTP
requests, see the AWS WAF Developer Guide
[http://docs.aws.amazon.com/waf/latest/developerguide/] .
     *
     * @error WAFDisallowedNameException   
     * @error WAFInternalErrorException   
     * @error WAFInvalidAccountException   
     * @error WAFInvalidParameterException   
     * @error WAFStaleDataException   
     * @error WAFLimitsExceededException   
     */
    createSqlInjectionMatchSet(params: WAF.CreateSqlInjectionMatchSetRequest, callback?: (err: WAF.WAFDisallowedNameException | WAF.WAFInternalErrorException | WAF.WAFInvalidAccountException | WAF.WAFInvalidParameterException | WAF.WAFStaleDataException | WAF.WAFLimitsExceededException | any, data: WAF.CreateSqlInjectionMatchSetResponse | any) => void): Request;
    /**
     * Creates a WebACL , which contains the Rules that identify the CloudFront web
requests that you want to allow, block, or count. AWS WAF evaluates Rules in
order based on the value of Priority for each Rule .

You also specify a default action, either ALLOW or BLOCK . If a web request
doesn&#x27;t match any of the Rules in a WebACL , AWS WAF responds to the request
with the default action.

To create and configure a WebACL , perform the following steps:

 1. Create and update the ByteMatchSet objects and other predicates that you
    want to include in Rules . For more information, see CreateByteMatchSet , 
    UpdateByteMatchSet , CreateIPSet , UpdateIPSet , CreateSqlInjectionMatchSet 
    , and UpdateSqlInjectionMatchSet .
 2. Create and update the Rules that you want to include in the WebACL . For
    more information, see CreateRule and UpdateRule .
 3. Use GetChangeToken to get the change token that you provide in the 
    ChangeToken parameter of a CreateWebACL request.
 4. Submit a CreateWebACL request.
 5. Use GetChangeToken to get the change token that you provide in the 
    ChangeToken parameter of an UpdateWebACL request.
 6. Submit an UpdateWebACL request to specify the Rules that you want to include
    in the WebACL , to specify the default action, and to associate the WebACL 
    with a CloudFront distribution.

For more information about how to use the AWS WAF API, see the AWS WAF Developer
Guide [http://docs.aws.amazon.com/waf/latest/developerguide/] .
     *
     * @error WAFStaleDataException   
     * @error WAFInternalErrorException   
     * @error WAFInvalidAccountException   
     * @error WAFDisallowedNameException   
     * @error WAFInvalidParameterException   
     * @error WAFLimitsExceededException   
     */
    createWebACL(params: WAF.CreateWebACLRequest, callback?: (err: WAF.WAFStaleDataException | WAF.WAFInternalErrorException | WAF.WAFInvalidAccountException | WAF.WAFDisallowedNameException | WAF.WAFInvalidParameterException | WAF.WAFLimitsExceededException | any, data: WAF.CreateWebACLResponse | any) => void): Request;
    /**
     * Permanently deletes a ByteMatchSet . You can&#x27;t delete a ByteMatchSet if it&#x27;s
still used in any Rules or if it still includes any ByteMatchTuple objects (any
filters).

If you just want to remove a ByteMatchSet from a Rule , use UpdateRule .

To permanently delete a ByteMatchSet , perform the following steps:

 1. Update the ByteMatchSet to remove filters, if any. For more information, see 
    UpdateByteMatchSet .
 2. Use GetChangeToken to get the change token that you provide in the 
    ChangeToken parameter of a DeleteByteMatchSet request.
 3. Submit a DeleteByteMatchSet request.
     *
     * @error WAFInternalErrorException   
     * @error WAFInvalidAccountException   
     * @error WAFNonexistentItemException   
     * @error WAFReferencedItemException   
     * @error WAFStaleDataException   
     * @error WAFNonEmptyEntityException   
     */
    deleteByteMatchSet(params: WAF.DeleteByteMatchSetRequest, callback?: (err: WAF.WAFInternalErrorException | WAF.WAFInvalidAccountException | WAF.WAFNonexistentItemException | WAF.WAFReferencedItemException | WAF.WAFStaleDataException | WAF.WAFNonEmptyEntityException | any, data: WAF.DeleteByteMatchSetResponse | any) => void): Request;
    /**
     * Permanently deletes an IPSet . You can&#x27;t delete an IPSet if it&#x27;s still used in
any Rules or if it still includes any IP addresses.

If you just want to remove an IPSet from a Rule , use UpdateRule .

To permanently delete an IPSet from AWS WAF, perform the following steps:

 1. Update the IPSet to remove IP address ranges, if any. For more information,
    see UpdateIPSet .
 2. Use GetChangeToken to get the change token that you provide in the 
    ChangeToken parameter of a DeleteIPSet request.
 3. Submit a DeleteIPSet request.
     *
     * @error WAFStaleDataException   
     * @error WAFInternalErrorException   
     * @error WAFInvalidAccountException   
     * @error WAFNonexistentItemException   
     * @error WAFReferencedItemException   
     * @error WAFNonEmptyEntityException   
     */
    deleteIPSet(params: WAF.DeleteIPSetRequest, callback?: (err: WAF.WAFStaleDataException | WAF.WAFInternalErrorException | WAF.WAFInvalidAccountException | WAF.WAFNonexistentItemException | WAF.WAFReferencedItemException | WAF.WAFNonEmptyEntityException | any, data: WAF.DeleteIPSetResponse | any) => void): Request;
    /**
     * Permanently deletes a Rule . You can&#x27;t delete a Rule if it&#x27;s still used in any 
WebACL objects or if it still includes any predicates, such as ByteMatchSet 
objects.

If you just want to remove a Rule from a WebACL , use UpdateWebACL .

To permanently delete a Rule from AWS WAF, perform the following steps:

 1. Update the Rule to remove predicates, if any. For more information, see 
    UpdateRule .
 2. Use GetChangeToken to get the change token that you provide in the 
    ChangeToken parameter of a DeleteRule request.
 3. Submit a DeleteRule request.
     *
     * @error WAFStaleDataException   
     * @error WAFInternalErrorException   
     * @error WAFInvalidAccountException   
     * @error WAFNonexistentItemException   
     * @error WAFReferencedItemException   
     * @error WAFNonEmptyEntityException   
     */
    deleteRule(params: WAF.DeleteRuleRequest, callback?: (err: WAF.WAFStaleDataException | WAF.WAFInternalErrorException | WAF.WAFInvalidAccountException | WAF.WAFNonexistentItemException | WAF.WAFReferencedItemException | WAF.WAFNonEmptyEntityException | any, data: WAF.DeleteRuleResponse | any) => void): Request;
    /**
     * Permanently deletes a SizeConstraintSet . You can&#x27;t delete a SizeConstraintSet 
if it&#x27;s still used in any Rules or if it still includes any SizeConstraint 
objects (any filters).

If you just want to remove a SizeConstraintSet from a Rule , use UpdateRule .

To permanently delete a SizeConstraintSet , perform the following steps:

 1. Update the SizeConstraintSet to remove filters, if any. For more
    information, see UpdateSizeConstraintSet .
 2. Use GetChangeToken to get the change token that you provide in the 
    ChangeToken parameter of a DeleteSizeConstraintSet request.
 3. Submit a DeleteSizeConstraintSet request.
     *
     * @error WAFStaleDataException   
     * @error WAFInternalErrorException   
     * @error WAFInvalidAccountException   
     * @error WAFNonexistentItemException   
     * @error WAFReferencedItemException   
     * @error WAFNonEmptyEntityException   
     */
    deleteSizeConstraintSet(params: WAF.DeleteSizeConstraintSetRequest, callback?: (err: WAF.WAFStaleDataException | WAF.WAFInternalErrorException | WAF.WAFInvalidAccountException | WAF.WAFNonexistentItemException | WAF.WAFReferencedItemException | WAF.WAFNonEmptyEntityException | any, data: WAF.DeleteSizeConstraintSetResponse | any) => void): Request;
    /**
     * Permanently deletes a SqlInjectionMatchSet . You can&#x27;t delete a 
SqlInjectionMatchSet if it&#x27;s still used in any Rules or if it still contains any 
SqlInjectionMatchTuple objects.

If you just want to remove a SqlInjectionMatchSet from a Rule , use UpdateRule .

To permanently delete a SqlInjectionMatchSet from AWS WAF, perform the following
steps:

 1. Update the SqlInjectionMatchSet to remove filters, if any. For more
    information, see UpdateSqlInjectionMatchSet .
 2. Use GetChangeToken to get the change token that you provide in the 
    ChangeToken parameter of a DeleteSqlInjectionMatchSet request.
 3. Submit a DeleteSqlInjectionMatchSet request.
     *
     * @error WAFInternalErrorException   
     * @error WAFInvalidAccountException   
     * @error WAFNonexistentItemException   
     * @error WAFReferencedItemException   
     * @error WAFStaleDataException   
     * @error WAFNonEmptyEntityException   
     */
    deleteSqlInjectionMatchSet(params: WAF.DeleteSqlInjectionMatchSetRequest, callback?: (err: WAF.WAFInternalErrorException | WAF.WAFInvalidAccountException | WAF.WAFNonexistentItemException | WAF.WAFReferencedItemException | WAF.WAFStaleDataException | WAF.WAFNonEmptyEntityException | any, data: WAF.DeleteSqlInjectionMatchSetResponse | any) => void): Request;
    /**
     * Permanently deletes a WebACL . You can&#x27;t delete a WebACL if it still contains
any Rules .

To delete a WebACL , perform the following steps:

 1. Update the WebACL to remove Rules , if any. For more information, see 
    UpdateWebACL .
 2. Use GetChangeToken to get the change token that you provide in the 
    ChangeToken parameter of a DeleteWebACL request.
 3. Submit a DeleteWebACL request.
     *
     * @error WAFStaleDataException   
     * @error WAFInternalErrorException   
     * @error WAFInvalidAccountException   
     * @error WAFNonexistentItemException   
     * @error WAFReferencedItemException   
     * @error WAFNonEmptyEntityException   
     */
    deleteWebACL(params: WAF.DeleteWebACLRequest, callback?: (err: WAF.WAFStaleDataException | WAF.WAFInternalErrorException | WAF.WAFInvalidAccountException | WAF.WAFNonexistentItemException | WAF.WAFReferencedItemException | WAF.WAFNonEmptyEntityException | any, data: WAF.DeleteWebACLResponse | any) => void): Request;
    /**
     * Returns the ByteMatchSet specified by ByteMatchSetId .
     *
     * @error WAFInternalErrorException   
     * @error WAFInvalidAccountException   
     * @error WAFNonexistentItemException   
     */
    getByteMatchSet(params: WAF.GetByteMatchSetRequest, callback?: (err: WAF.WAFInternalErrorException | WAF.WAFInvalidAccountException | WAF.WAFNonexistentItemException | any, data: WAF.GetByteMatchSetResponse | any) => void): Request;
    /**
     * When you want to create, update, or delete AWS WAF objects, get a change token
and include the change token in the create, update, or delete request. Change
tokens ensure that your application doesn&#x27;t submit conflicting requests to AWS
WAF.

Each create, update, or delete request must use a unique change token. If your
application submits a GetChangeToken request and then submits a second 
GetChangeToken request before submitting a create, update, or delete request,
the second GetChangeToken request returns the same value as the first 
GetChangeToken request.

When you use a change token in a create, update, or delete request, the status
of the change token changes to PENDING , which indicates that AWS WAF is
propagating the change to all AWS WAF servers. Use GetChangeTokenStatus to
determine the status of your change token.
     *
     * @error WAFInternalErrorException   
     */
    getChangeToken(params: WAF.GetChangeTokenRequest, callback?: (err: WAF.WAFInternalErrorException | any, data: WAF.GetChangeTokenResponse | any) => void): Request;
    /**
     * Returns the status of a ChangeToken that you got by calling GetChangeToken . 
ChangeTokenStatus is one of the following values:

 &amp;#42; PROVISIONED : You requested the change token by calling GetChangeToken , but
   you haven&#x27;t used it yet in a call to create, update, or delete an AWS WAF
   object.
 * PENDING : AWS WAF is propagating the create, update, or delete request to all
   AWS WAF servers.
 * IN_SYNC : Propagation is complete.
     *
     * @error WAFNonexistentItemException   
     * @error WAFInternalErrorException   
     */
    getChangeTokenStatus(params: WAF.GetChangeTokenStatusRequest, callback?: (err: WAF.WAFNonexistentItemException | WAF.WAFInternalErrorException | any, data: WAF.GetChangeTokenStatusResponse | any) => void): Request;
    /**
     * Returns the IPSet that is specified by IPSetId .
     *
     * @error WAFInternalErrorException   
     * @error WAFInvalidAccountException   
     * @error WAFNonexistentItemException   
     */
    getIPSet(params: WAF.GetIPSetRequest, callback?: (err: WAF.WAFInternalErrorException | WAF.WAFInvalidAccountException | WAF.WAFNonexistentItemException | any, data: WAF.GetIPSetResponse | any) => void): Request;
    /**
     * Returns the Rule that is specified by the RuleId that you included in the 
GetRule request.
     *
     * @error WAFInternalErrorException   
     * @error WAFInvalidAccountException   
     * @error WAFNonexistentItemException   
     */
    getRule(params: WAF.GetRuleRequest, callback?: (err: WAF.WAFInternalErrorException | WAF.WAFInvalidAccountException | WAF.WAFNonexistentItemException | any, data: WAF.GetRuleResponse | any) => void): Request;
    /**
     * Gets detailed information about a specified number of requests--a sample--that
AWS WAF randomly selects from among the first 5,000 requests that your AWS
resource received during a time range that you choose. You can specify a sample
size of up to 100 requests, and you can specify any time range in the previous
three hours.

GetSampledRequests returns a time range, which is usually the time range that
you specified. However, if your resource (such as a CloudFront distribution)
received 5,000 requests before the specified time range elapsed, 
GetSampledRequests returns an updated time range. This new time range indicates
the actual period during which AWS WAF selected the requests in the sample.
     *
     * @error WAFNonexistentItemException   
     * @error WAFInternalErrorException   
     */
    getSampledRequests(params: WAF.GetSampledRequestsRequest, callback?: (err: WAF.WAFNonexistentItemException | WAF.WAFInternalErrorException | any, data: WAF.GetSampledRequestsResponse | any) => void): Request;
    /**
     * Returns the SizeConstraintSet specified by SizeConstraintSetId .
     *
     * @error WAFInternalErrorException   
     * @error WAFInvalidAccountException   
     * @error WAFNonexistentItemException   
     */
    getSizeConstraintSet(params: WAF.GetSizeConstraintSetRequest, callback?: (err: WAF.WAFInternalErrorException | WAF.WAFInvalidAccountException | WAF.WAFNonexistentItemException | any, data: WAF.GetSizeConstraintSetResponse | any) => void): Request;
    /**
     * Returns the SqlInjectionMatchSet that is specified by SqlInjectionMatchSetId .
     *
     * @error WAFInternalErrorException   
     * @error WAFInvalidAccountException   
     * @error WAFNonexistentItemException   
     */
    getSqlInjectionMatchSet(params: WAF.GetSqlInjectionMatchSetRequest, callback?: (err: WAF.WAFInternalErrorException | WAF.WAFInvalidAccountException | WAF.WAFNonexistentItemException | any, data: WAF.GetSqlInjectionMatchSetResponse | any) => void): Request;
    /**
     * Returns the WebACL that is specified by WebACLId .
     *
     * @error WAFInternalErrorException   
     * @error WAFInvalidAccountException   
     * @error WAFNonexistentItemException   
     */
    getWebACL(params: WAF.GetWebACLRequest, callback?: (err: WAF.WAFInternalErrorException | WAF.WAFInvalidAccountException | WAF.WAFNonexistentItemException | any, data: WAF.GetWebACLResponse | any) => void): Request;
    /**
     * Returns an array of ByteMatchSetSummary objects.
     *
     * @error WAFInternalErrorException   
     * @error WAFInvalidAccountException   
     */
    listByteMatchSets(params: WAF.ListByteMatchSetsRequest, callback?: (err: WAF.WAFInternalErrorException | WAF.WAFInvalidAccountException | any, data: WAF.ListByteMatchSetsResponse | any) => void): Request;
    /**
     * Returns an array of IPSetSummary objects in the response.
     *
     * @error WAFInternalErrorException   
     * @error WAFInvalidAccountException   
     */
    listIPSets(params: WAF.ListIPSetsRequest, callback?: (err: WAF.WAFInternalErrorException | WAF.WAFInvalidAccountException | any, data: WAF.ListIPSetsResponse | any) => void): Request;
    /**
     * Returns an array of RuleSummary objects.
     *
     * @error WAFInternalErrorException   
     * @error WAFInvalidAccountException   
     */
    listRules(params: WAF.ListRulesRequest, callback?: (err: WAF.WAFInternalErrorException | WAF.WAFInvalidAccountException | any, data: WAF.ListRulesResponse | any) => void): Request;
    /**
     * Returns an array of SizeConstraintSetSummary objects.
     *
     * @error WAFInternalErrorException   
     * @error WAFInvalidAccountException   
     */
    listSizeConstraintSets(params: WAF.ListSizeConstraintSetsRequest, callback?: (err: WAF.WAFInternalErrorException | WAF.WAFInvalidAccountException | any, data: WAF.ListSizeConstraintSetsResponse | any) => void): Request;
    /**
     * Returns an array of SqlInjectionMatchSet objects.
     *
     * @error WAFInternalErrorException   
     * @error WAFInvalidAccountException   
     */
    listSqlInjectionMatchSets(params: WAF.ListSqlInjectionMatchSetsRequest, callback?: (err: WAF.WAFInternalErrorException | WAF.WAFInvalidAccountException | any, data: WAF.ListSqlInjectionMatchSetsResponse | any) => void): Request;
    /**
     * Returns an array of WebACLSummary objects in the response.
     *
     * @error WAFInternalErrorException   
     * @error WAFInvalidAccountException   
     */
    listWebACLs(params: WAF.ListWebACLsRequest, callback?: (err: WAF.WAFInternalErrorException | WAF.WAFInvalidAccountException | any, data: WAF.ListWebACLsResponse | any) => void): Request;
    /**
     * Inserts or deletes ByteMatchTuple objects (filters) in a ByteMatchSet . For each 
ByteMatchTuple object, you specify the following values:

 &amp;#42; Whether to insert or delete the object from the array. If you want to change
   a ByteMatchSetUpdate object, you delete the existing object and add a new
   one.
 * The part of a web request that you want AWS WAF to inspect, such as a query
   string or the value of the User-Agent header.
 * The bytes (typically a string that corresponds with ASCII characters) that
   you want AWS WAF to look for. For more information, including how you specify
   the values for the AWS WAF API and the AWS CLI or SDKs, see TargetString in
   the ByteMatchTuple data type.
 * Where to look, such as at the beginning or the end of a query string.
 * Whether to perform any conversions on the request, such as converting it to
   lowercase, before inspecting it for the specified string.

For example, you can add a ByteMatchSetUpdate object that matches web requests
in which User-Agent headers contain the string BadBot . You can then configure
AWS WAF to block those requests.

To create and configure a ByteMatchSet , perform the following steps:

 1. Create a ByteMatchSet. For more information, see CreateByteMatchSet .
 2. Use GetChangeToken to get the change token that you provide in the 
    ChangeToken parameter of an UpdateByteMatchSet request.
 3. Submit an UpdateByteMatchSet request to specify the part of the request that
    you want AWS WAF to inspect (for example, the header or the URI) and the
    value that you want AWS WAF to watch for.

For more information about how to use the AWS WAF API to allow or block HTTP
requests, see the AWS WAF Developer Guide
[http://docs.aws.amazon.com/waf/latest/developerguide/] .
     *
     * @error WAFInternalErrorException   
     * @error WAFInvalidAccountException   
     * @error WAFInvalidOperationException   
     * @error WAFInvalidParameterException   
     * @error WAFNonexistentContainerException   
     * @error WAFNonexistentItemException   
     * @error WAFStaleDataException   
     * @error WAFLimitsExceededException   
     */
    updateByteMatchSet(params: WAF.UpdateByteMatchSetRequest, callback?: (err: WAF.WAFInternalErrorException | WAF.WAFInvalidAccountException | WAF.WAFInvalidOperationException | WAF.WAFInvalidParameterException | WAF.WAFNonexistentContainerException | WAF.WAFNonexistentItemException | WAF.WAFStaleDataException | WAF.WAFLimitsExceededException | any, data: WAF.UpdateByteMatchSetResponse | any) => void): Request;
    /**
     * Inserts or deletes IPSetDescriptor objects in an IPSet . For each 
IPSetDescriptor object, you specify the following values:

 &amp;#42; Whether to insert or delete the object from the array. If you want to change
   an IPSetDescriptor object, you delete the existing object and add a new one.
 * The IP address version, IPv4 .
 * The IP address in CIDR notation, for example, 192.0.2.0/24 (for the range of
   IP addresses from 192.0.2.0 to 192.0.2.255 ) or 192.0.2.44/32 (for the
   individual IP address 192.0.2.44 ).

AWS WAF supports /8, /16, /24, and /32 IP address ranges. For more information
about CIDR notation, see the Wikipedia entry Classless Inter-Domain Routing
[https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing] .

You use an IPSet to specify which web requests you want to allow or block based
on the IP addresses that the requests originated from. For example, if you&#x27;re
receiving a lot of requests from one or a small number of IP addresses and you
want to block the requests, you can create an IPSet that specifies those IP
addresses, and then configure AWS WAF to block the requests.

To create and configure an IPSet , perform the following steps:

 1. Submit a CreateIPSet request.
 2. Use GetChangeToken to get the change token that you provide in the 
    ChangeToken parameter of an UpdateIPSet request.
 3. Submit an UpdateIPSet request to specify the IP addresses that you want AWS
    WAF to watch for.

When you update an IPSet , you specify the IP addresses that you want to add
and/or the IP addresses that you want to delete. If you want to change an IP
address, you delete the existing IP address and add the new one.

For more information about how to use the AWS WAF API to allow or block HTTP
requests, see the AWS WAF Developer Guide
[http://docs.aws.amazon.com/waf/latest/developerguide/] .
     *
     * @error WAFStaleDataException   
     * @error WAFInternalErrorException   
     * @error WAFInvalidAccountException   
     * @error WAFInvalidOperationException   
     * @error WAFInvalidParameterException   
     * @error WAFNonexistentContainerException   
     * @error WAFNonexistentItemException   
     * @error WAFReferencedItemException   
     * @error WAFLimitsExceededException   
     */
    updateIPSet(params: WAF.UpdateIPSetRequest, callback?: (err: WAF.WAFStaleDataException | WAF.WAFInternalErrorException | WAF.WAFInvalidAccountException | WAF.WAFInvalidOperationException | WAF.WAFInvalidParameterException | WAF.WAFNonexistentContainerException | WAF.WAFNonexistentItemException | WAF.WAFReferencedItemException | WAF.WAFLimitsExceededException | any, data: WAF.UpdateIPSetResponse | any) => void): Request;
    /**
     * Inserts or deletes Predicate objects in a Rule . Each Predicate object
identifies a predicate, such as a ByteMatchSet or an IPSet , that specifies the
web requests that you want to allow, block, or count. If you add more than one
predicate to a Rule , a request must match all of the specifications to be
allowed, blocked, or counted. For example, suppose you add the following to a 
Rule :

 &amp;#42; A ByteMatchSet that matches the value BadBot in the User-Agent header
 * An IPSet that matches the IP address 192.0.2.44

You then add the Rule to a WebACL and specify that you want to block requests
that satisfy the Rule . For a request to be blocked, the User-Agent header in
the request must contain the value BadBot and the request must originate from
the IP address 192.0.2.44.

To create and configure a Rule , perform the following steps:

 1. Create and update the predicates that you want to include in the Rule .
 2. Create the Rule . See CreateRule .
 3. Use GetChangeToken to get the change token that you provide in the 
    ChangeToken parameter of an UpdateRule request.
 4. Submit an UpdateRule request to add predicates to the Rule .
 5. Create and update a WebACL that contains the Rule . See CreateWebACL .

If you want to replace one ByteMatchSet or IPSet with another, you delete the
existing one and add the new one.

For more information about how to use the AWS WAF API to allow or block HTTP
requests, see the AWS WAF Developer Guide
[http://docs.aws.amazon.com/waf/latest/developerguide/] .
     *
     * @error WAFStaleDataException   
     * @error WAFInternalErrorException   
     * @error WAFInvalidAccountException   
     * @error WAFInvalidOperationException   
     * @error WAFInvalidParameterException   
     * @error WAFNonexistentContainerException   
     * @error WAFNonexistentItemException   
     * @error WAFReferencedItemException   
     * @error WAFLimitsExceededException   
     */
    updateRule(params: WAF.UpdateRuleRequest, callback?: (err: WAF.WAFStaleDataException | WAF.WAFInternalErrorException | WAF.WAFInvalidAccountException | WAF.WAFInvalidOperationException | WAF.WAFInvalidParameterException | WAF.WAFNonexistentContainerException | WAF.WAFNonexistentItemException | WAF.WAFReferencedItemException | WAF.WAFLimitsExceededException | any, data: WAF.UpdateRuleResponse | any) => void): Request;
    /**
     * Inserts or deletes SizeConstraint objects (filters) in a SizeConstraintSet . For
each SizeConstraint object, you specify the following values:

 &amp;#42; Whether to insert or delete the object from the array. If you want to change
   a SizeConstraintSetUpdate object, you delete the existing object and add a
   new one.
 * The part of a web request that you want AWS WAF to evaluate, such as the
   length of a query string or the length of the User-Agent header.
 * Whether to perform any transformations on the request, such as converting it
   to lowercase, before checking its length. Note that transformations of the
   request body are not supported because the AWS resource forwards only the
   first 8192 bytes of your request to AWS WAF.
 * A ComparisonOperator used for evaluating the selected part of the request
   against the specified Size , such as equals, greater than, less than, and so
   on.
 * The length, in bytes, that you want AWS WAF to watch for in selected part of
   the request. The length is computed after applying the transformation.

For example, you can add a SizeConstraintSetUpdate object that matches web
requests in which the length of the User-Agent header is greater than 100 bytes.
You can then configure AWS WAF to block those requests.

To create and configure a SizeConstraintSet , perform the following steps:

 1. Create a SizeConstraintSet. For more information, see 
    CreateSizeConstraintSet .
 2. Use GetChangeToken to get the change token that you provide in the 
    ChangeToken parameter of an UpdateSizeConstraintSet request.
 3. Submit an UpdateSizeConstraintSet request to specify the part of the request
    that you want AWS WAF to inspect (for example, the header or the URI) and
    the value that you want AWS WAF to watch for.

For more information about how to use the AWS WAF API to allow or block HTTP
requests, see the AWS WAF Developer Guide
[http://docs.aws.amazon.com/waf/latest/developerguide/] .
     *
     * @error WAFStaleDataException   
     * @error WAFInternalErrorException   
     * @error WAFInvalidAccountException   
     * @error WAFInvalidOperationException   
     * @error WAFInvalidParameterException   
     * @error WAFNonexistentContainerException   
     * @error WAFNonexistentItemException   
     * @error WAFReferencedItemException   
     * @error WAFLimitsExceededException   
     */
    updateSizeConstraintSet(params: WAF.UpdateSizeConstraintSetRequest, callback?: (err: WAF.WAFStaleDataException | WAF.WAFInternalErrorException | WAF.WAFInvalidAccountException | WAF.WAFInvalidOperationException | WAF.WAFInvalidParameterException | WAF.WAFNonexistentContainerException | WAF.WAFNonexistentItemException | WAF.WAFReferencedItemException | WAF.WAFLimitsExceededException | any, data: WAF.UpdateSizeConstraintSetResponse | any) => void): Request;
    /**
     * Inserts or deletes SqlInjectionMatchTuple objects (filters) in a 
SqlInjectionMatchSet . For each SqlInjectionMatchTuple object, you specify the
following values:

 &amp;#42; Action : Whether to insert the object into or delete the object from the
   array. To change a SqlInjectionMatchTuple , you delete the existing object
   and add a new one.
 * FieldToMatch : The part of web requests that you want AWS WAF to inspect and,
   if you want AWS WAF to inspect a header, the name of the header.
 * TextTransformation : Which text transformation, if any, to perform on the web
   request before inspecting the request for snippets of malicious SQL code.

You use SqlInjectionMatchSet objects to specify which CloudFront requests you
want to allow, block, or count. For example, if you&#x27;re receiving requests that
contain snippets of SQL code in the query string and you want to block the
requests, you can create a SqlInjectionMatchSet with the applicable settings,
and then configure AWS WAF to block the requests.

To create and configure a SqlInjectionMatchSet , perform the following steps:

 1. Submit a CreateSqlInjectionMatchSet request.
 2. Use GetChangeToken to get the change token that you provide in the 
    ChangeToken parameter of an UpdateIPSet request.
 3. Submit an UpdateSqlInjectionMatchSet request to specify the parts of web
    requests that you want AWS WAF to inspect for snippets of SQL code.

For more information about how to use the AWS WAF API to allow or block HTTP
requests, see the AWS WAF Developer Guide
[http://docs.aws.amazon.com/waf/latest/developerguide/] .
     *
     * @error WAFInternalErrorException   
     * @error WAFInvalidAccountException   
     * @error WAFInvalidOperationException   
     * @error WAFInvalidParameterException   
     * @error WAFNonexistentContainerException   
     * @error WAFNonexistentItemException   
     * @error WAFStaleDataException   
     * @error WAFLimitsExceededException   
     */
    updateSqlInjectionMatchSet(params: WAF.UpdateSqlInjectionMatchSetRequest, callback?: (err: WAF.WAFInternalErrorException | WAF.WAFInvalidAccountException | WAF.WAFInvalidOperationException | WAF.WAFInvalidParameterException | WAF.WAFNonexistentContainerException | WAF.WAFNonexistentItemException | WAF.WAFStaleDataException | WAF.WAFLimitsExceededException | any, data: WAF.UpdateSqlInjectionMatchSetResponse | any) => void): Request;
    /**
     * Inserts or deletes ActivatedRule objects in a WebACL . Each Rule identifies web
requests that you want to allow, block, or count. When you update a WebACL , you
specify the following values:

 &amp;#42; A default action for the WebACL , either ALLOW or BLOCK . AWS WAF performs
   the default action if a request doesn&#x27;t match the criteria in any of the 
   Rules in a WebACL .
 * The Rules that you want to add and/or delete. If you want to replace one Rule 
   with another, you delete the existing Rule and add the new one.
 * For each Rule , whether you want AWS WAF to allow requests, block requests,
   or count requests that match the conditions in the Rule .
 * The order in which you want AWS WAF to evaluate the Rules in a WebACL . If
   you add more than one Rule to a WebACL , AWS WAF evaluates each request
   against the Rules in order based on the value of Priority . (The Rule that
   has the lowest value for Priority is evaluated first.) When a web request
   matches all of the predicates (such as ByteMatchSets and IPSets ) in a Rule ,
   AWS WAF immediately takes the corresponding action, allow or block, and
   doesn&#x27;t evaluate the request against the remaining Rules in the WebACL , if
   any.
 * The CloudFront distribution that you want to associate with the WebACL .

To create and configure a WebACL , perform the following steps:

 1. Create and update the predicates that you want to include in Rules . For
    more information, see CreateByteMatchSet , UpdateByteMatchSet , CreateIPSet 
    , UpdateIPSet , CreateSqlInjectionMatchSet , and UpdateSqlInjectionMatchSet 
    .
 2. Create and update the Rules that you want to include in the WebACL . For
    more information, see CreateRule and UpdateRule .
 3. Create a WebACL . See CreateWebACL .
 4. Use GetChangeToken to get the change token that you provide in the 
    ChangeToken parameter of an UpdateWebACL request.
 5. Submit an UpdateWebACL request to specify the Rules that you want to include
    in the WebACL , to specify the default action, and to associate the WebACL 
    with a CloudFront distribution.

For more information about how to use the AWS WAF API to allow or block HTTP
requests, see the AWS WAF Developer Guide
[http://docs.aws.amazon.com/waf/latest/developerguide/] .
     *
     * @error WAFStaleDataException   
     * @error WAFInternalErrorException   
     * @error WAFInvalidAccountException   
     * @error WAFInvalidOperationException   
     * @error WAFInvalidParameterException   
     * @error WAFNonexistentContainerException   
     * @error WAFNonexistentItemException   
     * @error WAFReferencedItemException   
     * @error WAFLimitsExceededException   
     */
    updateWebACL(params: WAF.UpdateWebACLRequest, callback?: (err: WAF.WAFStaleDataException | WAF.WAFInternalErrorException | WAF.WAFInvalidAccountException | WAF.WAFInvalidOperationException | WAF.WAFInvalidParameterException | WAF.WAFNonexistentContainerException | WAF.WAFNonexistentItemException | WAF.WAFReferencedItemException | WAF.WAFLimitsExceededException | any, data: WAF.UpdateWebACLResponse | any) => void): Request;

  }

  export module WAF {

    export type Action = string;

    export type ActivatedRules = ActivatedRule[];

    export type ByteMatchSetSummaries = ByteMatchSetSummary[];

    export type ByteMatchSetUpdates = ByteMatchSetUpdate[];

    export type ByteMatchTargetString = any;

    export type ByteMatchTuples = ByteMatchTuple[];

    export type ChangeAction = string;

    export type ChangeToken = string;

    export type ChangeTokenStatus = string;

    export type ComparisonOperator = string;

    export type Country = string;

    export type HTTPHeaders = HTTPHeader[];

    export type HTTPMethod = string;

    export type HTTPVersion = string;

    export type HeaderName = string;

    export type HeaderValue = string;

    export type IPSetDescriptorType = string;

    export type IPSetDescriptorValue = string;

    export type IPSetDescriptors = IPSetDescriptor[];

    export type IPSetSummaries = IPSetSummary[];

    export type IPSetUpdates = IPSetUpdate[];

    export type IPString = string;

    export type ListMaxItems = number;

    export type MatchFieldData = string;

    export type MatchFieldType = string;

    export type MetricName = string;

    export type Negated = boolean;

    export type NextMarker = string;

    export type PaginationLimit = number;

    export type ParameterExceptionField = string;

    export type ParameterExceptionParameter = string;

    export type ParameterExceptionReason = string;

    export type PopulationSize = number;

    export type PositionalConstraint = string;

    export type PredicateType = string;

    export type Predicates = Predicate[];

    export type ResourceId = string;

    export type ResourceName = string;

    export type RulePriority = number;

    export type RuleSummaries = RuleSummary[];

    export type RuleUpdates = RuleUpdate[];

    export type SampleWeight = number;

    export type SampledHTTPRequests = SampledHTTPRequest[];

    export type Size = number;

    export type SizeConstraintSetSummaries = SizeConstraintSetSummary[];

    export type SizeConstraintSetUpdates = SizeConstraintSetUpdate[];

    export type SizeConstraints = SizeConstraint[];

    export type SqlInjectionMatchSetSummaries = SqlInjectionMatchSetSummary[];

    export type SqlInjectionMatchSetUpdates = SqlInjectionMatchSetUpdate[];

    export type SqlInjectionMatchTuples = SqlInjectionMatchTuple[];

    export type TextTransformation = string;

    export type Timestamp = number;

    export type URIString = string;

    export type WafActionType = string;

    export type WebACLSummaries = WebACLSummary[];

    export type WebACLUpdates = WebACLUpdate[];

    export type errorMessage = string;

    export interface ActivatedRule {
      /** Specifies the order in which the Rules in a WebACL are evaluated. Rules with a
lower value for Priority are evaluated before Rules with a higher value. The
value must be a unique integer. If you add multiple Rules to a WebACL , the
values don&#x27;t need to be consecutive. **/
      Priority: RulePriority;
      /** The RuleId for a Rule . You use RuleId to get more information about a Rule (see 
GetRule ), update a Rule (see UpdateRule ), insert a Rule into a WebACL or
delete a one from a WebACL (see UpdateWebACL ), or delete a Rule from AWS WAF
(see DeleteRule ).

RuleId is returned by CreateRule and by ListRules . **/
      RuleId: ResourceId;
      /** Specifies the action that CloudFront or AWS WAF takes when a web request matches
the conditions in the Rule . Valid values for Action include the following:

&amp;#42; ALLOW : CloudFront responds with the requested object.
* BLOCK : CloudFront responds with an HTTP 403 (Forbidden) status code.
* COUNT : AWS WAF increments a counter of requests that match the conditions in
 the rule and then continues to inspect the web request based on the remaining
 rules in the web ACL. **/
      Action: WafAction;
    }
    export interface ByteMatchSet {
      /** The ByteMatchSetId for a ByteMatchSet . You use ByteMatchSetId to get
information about a ByteMatchSet (see GetByteMatchSet ), update a ByteMatchSet 
(see UpdateByteMatchSet , insert a ByteMatchSet into a Rule or delete one from a 
Rule (see UpdateRule ), and delete a ByteMatchSet from AWS WAF (see 
DeleteByteMatchSet ).

ByteMatchSetId is returned by CreateByteMatchSet and by ListByteMatchSets . **/
      ByteMatchSetId: ResourceId;
      /** A friendly name or description of the ByteMatchSet . You can&#x27;t change Name after
you create a ByteMatchSet . **/
      Name?: ResourceName;
      /** Specifies the bytes (typically a string that corresponds with ASCII characters)
that you want AWS WAF to search for in web requests, the location in requests
that you want AWS WAF to search, and other settings. **/
      ByteMatchTuples: ByteMatchTuples;
    }
    export interface ByteMatchSetSummary {
      /** The ByteMatchSetId for a ByteMatchSet . You use ByteMatchSetId to get
information about a ByteMatchSet , update a ByteMatchSet , remove a ByteMatchSet 
from a Rule , and delete a ByteMatchSet from AWS WAF.

ByteMatchSetId is returned by CreateByteMatchSet and by ListByteMatchSets . **/
      ByteMatchSetId: ResourceId;
      /** A friendly name or description of the ByteMatchSet . You can&#x27;t change Name after
you create a ByteMatchSet . **/
      Name: ResourceName;
    }
    export interface ByteMatchSetUpdate {
      /** Specifies whether to insert or delete a ByteMatchTuple . **/
      Action: ChangeAction;
      /** Information about the part of a web request that you want AWS WAF to inspect and
the value that you want AWS WAF to search for. If you specify DELETE for the
value of Action , the ByteMatchTuple values must exactly match the values in the 
ByteMatchTuple that you want to delete from the ByteMatchSet . **/
      ByteMatchTuple: ByteMatchTuple;
    }
    export interface ByteMatchTuple {
      /** The part of a web request that you want AWS WAF to search, such as a specified
header or a query string. For more information, see FieldToMatch . **/
      FieldToMatch: FieldToMatch;
      /** The value that you want AWS WAF to search for. AWS WAF searches for the
specified string in the part of web requests that you specified in FieldToMatch 
. The maximum length of the value is 50 bytes.

Valid values depend on the values that you specified for FieldToMatch :

&amp;#42; HEADER : The value that you want AWS WAF to search for in the request header
 that you specified in FieldToMatch , for example, the value of the User-Agent 
 or Referer header.
* METHOD : The HTTP method, which indicates the type of operation specified in
 the request. CloudFront supports the following methods: DELETE , GET , HEAD , 
 OPTIONS , PATCH , POST , and PUT .
* QUERY_STRING : The value that you want AWS WAF to search for in the query
 string, which is the part of a URL that appears after a ? character.
* URI : The value that you want AWS WAF to search for in the part of a URL that
 identifies a resource, for example, /images/daily-ad.jpg .
* BODY : The part of a request that contains any additional data that you want
 to send to your web server as the HTTP request body, such as data from a
 form. The request body immediately follows the request headers. Note that
 only the first 8192 bytes of the request body are forwarded to AWS WAF for
 inspection. To allow or block requests based on the length of the body, you
 can create a size constraint set. For more information, see 
 CreateSizeConstraintSet .

If TargetString includes alphabetic characters A-Z and a-z, note that the value
is case sensitive.

If you&#x27;re using the AWS WAF API

Specify a base64-encoded version of the value. The maximum length of the value
before you base64-encode it is 50 bytes.

For example, suppose the value of Type is HEADER and the value of Data is 
User-Agent . If you want to search the User-Agent header for the value BadBot ,
you base64-encode BadBot using MIME base64 encoding and include the resulting
value, QmFkQm90 , in the value of TargetString .

If you&#x27;re using the AWS CLI or one of the AWS SDKs

The value that you want AWS WAF to search for. The SDK automatically base64
encodes the value. **/
      TargetString: ByteMatchTargetString;
      /** Text transformations eliminate some of the unusual formatting that attackers use
in web requests in an effort to bypass AWS WAF. If you specify a transformation,
AWS WAF performs the transformation on TargetString before inspecting a request
for a match.

CMD_LINE

When you&#x27;re concerned that attackers are injecting an operating system
commandline command and using unusual formatting to disguise some or all of the
command, use this option to perform the following transformations:

&amp;#42; Delete the following characters: \ &quot; &#x27; ^
* Delete spaces before the following characters: / (
* Replace the following characters with a space: , ;
* Replace multiple spaces with one space
* Convert uppercase letters (A-Z) to lowercase (a-z)

COMPRESS_WHITE_SPACE

Use this option to replace the following characters with a space character
(decimal 32):

* \f, formfeed, decimal 12
* \t, tab, decimal 9
* \n, newline, decimal 10
* \r, carriage return, decimal 13
* \v, vertical tab, decimal 11
* non-breaking space, decimal 160

COMPRESS_WHITE_SPACE also replaces multiple spaces with one space.

HTML_ENTITY_DECODE

Use this option to replace HTML-encoded characters with unencoded characters. 
HTML_ENTITY_DECODE performs the following operations:

* Replaces (ampersand)quot; with &quot;
* Replaces (ampersand)nbsp; with a non-breaking space, decimal 160
* Replaces (ampersand)lt; with a &quot;less than&quot; symbol
* Replaces (ampersand)gt; with
* Replaces characters that are represented in hexadecimal format, 
 (ampersand)#xhhhh; , with the corresponding characters
* Replaces characters that are represented in decimal format, (ampersand)#nnnn; 
 , with the corresponding characters

LOWERCASE

Use this option to convert uppercase letters (A-Z) to lowercase (a-z).

URL_DECODE

Use this option to decode a URL-encoded value.

NONE

Specify NONE if you don&#x27;t want to perform any text transformations. **/
      TextTransformation: TextTransformation;
      /** Within the portion of a web request that you want to search (for example, in the
query string, if any), specify where you want AWS WAF to search. Valid values
include the following:

CONTAINS

The specified part of the web request must include the value of TargetString ,
but the location doesn&#x27;t matter.

CONTAINS_WORD

The specified part of the web request must include the value of TargetString ,
and TargetString must contain only alphanumeric characters or underscore (A-Z,
a-z, 0-9, or _). In addition, TargetString must be a word, which means one of
the following:

&amp;#42; TargetString exactly matches the value of the specified part of the web
 request, such as the value of a header.
* TargetString is at the beginning of the specified part of the web request and
 is followed by a character other than an alphanumeric character or underscore
 (_), for example, BadBot; .
* TargetString is at the end of the specified part of the web request and is
 preceded by a character other than an alphanumeric character or underscore
 (_), for example, ;BadBot .
* TargetString is in the middle of the specified part of the web request and is
 preceded and followed by characters other than alphanumeric characters or
 underscore (_), for example, -BadBot; .

EXACTLY

The value of the specified part of the web request must exactly match the value
of TargetString .

STARTS_WITH

The value of TargetString must appear at the beginning of the specified part of
the web request.

ENDS_WITH

The value of TargetString must appear at the end of the specified part of the
web request. **/
      PositionalConstraint: PositionalConstraint;
    }
    export interface CreateByteMatchSetRequest {
      /** A friendly name or description of the ByteMatchSet . You can&#x27;t change Name after
you create a ByteMatchSet . **/
      Name: ResourceName;
      /** The value returned by the most recent call to GetChangeToken . **/
      ChangeToken: ChangeToken;
    }
    export interface CreateByteMatchSetResponse {
      /** A ByteMatchSet that contains no ByteMatchTuple objects. **/
      ByteMatchSet?: ByteMatchSet;
      /** The ChangeToken that you used to submit the CreateByteMatchSet request. You can
also use this value to query the status of the request. For more information,
see GetChangeTokenStatus . **/
      ChangeToken?: ChangeToken;
    }
    export interface CreateIPSetRequest {
      /** A friendly name or description of the IPSet . You can&#x27;t change Name after you
create the IPSet . **/
      Name: ResourceName;
      /** The value returned by the most recent call to GetChangeToken . **/
      ChangeToken: ChangeToken;
    }
    export interface CreateIPSetResponse {
      /** The IPSet returned in the CreateIPSet response. **/
      IPSet?: IPSet;
      /** The ChangeToken that you used to submit the CreateIPSet request. You can also
use this value to query the status of the request. For more information, see 
GetChangeTokenStatus . **/
      ChangeToken?: ChangeToken;
    }
    export interface CreateRuleRequest {
      /** A friendly name or description of the Rule . You can&#x27;t change the name of a Rule 
after you create it. **/
      Name: ResourceName;
      /** A friendly name or description for the metrics for this Rule . The name can
contain only alphanumeric characters (A-Z, a-z, 0-9); the name can&#x27;t contain
whitespace. You can&#x27;t change the name of the metric after you create the Rule . **/
      MetricName: MetricName;
      /** The value returned by the most recent call to GetChangeToken . **/
      ChangeToken: ChangeToken;
    }
    export interface CreateRuleResponse {
      /** The Rule returned in the CreateRule response. **/
      Rule?: Rule;
      /** The ChangeToken that you used to submit the CreateRule request. You can also use
this value to query the status of the request. For more information, see 
GetChangeTokenStatus . **/
      ChangeToken?: ChangeToken;
    }
    export interface CreateSizeConstraintSetRequest {
      /** A friendly name or description of the SizeConstraintSet . You can&#x27;t change Name 
after you create a SizeConstraintSet . **/
      Name: ResourceName;
      /** The value returned by the most recent call to GetChangeToken . **/
      ChangeToken: ChangeToken;
    }
    export interface CreateSizeConstraintSetResponse {
      /** A SizeConstraintSet that contains no SizeConstraint objects. **/
      SizeConstraintSet?: SizeConstraintSet;
      /** The ChangeToken that you used to submit the CreateSizeConstraintSet request. You
can also use this value to query the status of the request. For more
information, see GetChangeTokenStatus . **/
      ChangeToken?: ChangeToken;
    }
    export interface CreateSqlInjectionMatchSetRequest {
      /** A friendly name or description for the SqlInjectionMatchSet that you&#x27;re
creating. You can&#x27;t change Name after you create the SqlInjectionMatchSet . **/
      Name: ResourceName;
      /** The value returned by the most recent call to GetChangeToken . **/
      ChangeToken: ChangeToken;
    }
    export interface CreateSqlInjectionMatchSetResponse {
      /** A SqlInjectionMatchSet . **/
      SqlInjectionMatchSet?: SqlInjectionMatchSet;
      /** The ChangeToken that you used to submit the CreateSqlInjectionMatchSet request.
You can also use this value to query the status of the request. For more
information, see GetChangeTokenStatus . **/
      ChangeToken?: ChangeToken;
    }
    export interface CreateWebACLRequest {
      /** A friendly name or description of the WebACL . You can&#x27;t change Name after you
create the WebACL . **/
      Name: ResourceName;
      /** A friendly name or description for the metrics for this WebACL . The name can
contain only alphanumeric characters (A-Z, a-z, 0-9); the name can&#x27;t contain
whitespace. You can&#x27;t change MetricName after you create the WebACL . **/
      MetricName: MetricName;
      /** The action that you want AWS WAF to take when a request doesn&#x27;t match the
criteria specified in any of the Rule objects that are associated with the 
WebACL . **/
      DefaultAction: WafAction;
      /** The value returned by the most recent call to GetChangeToken . **/
      ChangeToken: ChangeToken;
    }
    export interface CreateWebACLResponse {
      /** The WebACL returned in the CreateWebACL response. **/
      WebACL?: WebACL;
      /** The ChangeToken that you used to submit the CreateWebACL request. You can also
use this value to query the status of the request. For more information, see 
GetChangeTokenStatus . **/
      ChangeToken?: ChangeToken;
    }
    export interface DeleteByteMatchSetRequest {
      /** The ByteMatchSetId of the ByteMatchSet that you want to delete. ByteMatchSetId 
is returned by CreateByteMatchSet and by ListByteMatchSets . **/
      ByteMatchSetId: ResourceId;
      /** The value returned by the most recent call to GetChangeToken . **/
      ChangeToken: ChangeToken;
    }
    export interface DeleteByteMatchSetResponse {
      /** The ChangeToken that you used to submit the DeleteByteMatchSet request. You can
also use this value to query the status of the request. For more information,
see GetChangeTokenStatus . **/
      ChangeToken?: ChangeToken;
    }
    export interface DeleteIPSetRequest {
      /** The IPSetId of the IPSet that you want to delete. IPSetId is returned by 
CreateIPSet and by ListIPSets . **/
      IPSetId: ResourceId;
      /** The value returned by the most recent call to GetChangeToken . **/
      ChangeToken: ChangeToken;
    }
    export interface DeleteIPSetResponse {
      /** The ChangeToken that you used to submit the DeleteIPSet request. You can also
use this value to query the status of the request. For more information, see 
GetChangeTokenStatus . **/
      ChangeToken?: ChangeToken;
    }
    export interface DeleteRuleRequest {
      /** The RuleId of the Rule that you want to delete. RuleId is returned by CreateRule 
and by ListRules . **/
      RuleId: ResourceId;
      /** The value returned by the most recent call to GetChangeToken . **/
      ChangeToken: ChangeToken;
    }
    export interface DeleteRuleResponse {
      /** The ChangeToken that you used to submit the DeleteRule request. You can also use
this value to query the status of the request. For more information, see 
GetChangeTokenStatus . **/
      ChangeToken?: ChangeToken;
    }
    export interface DeleteSizeConstraintSetRequest {
      /** The SizeConstraintSetId of the SizeConstraintSet that you want to delete. 
SizeConstraintSetId is returned by CreateSizeConstraintSet and by 
ListSizeConstraintSets . **/
      SizeConstraintSetId: ResourceId;
      /** The value returned by the most recent call to GetChangeToken . **/
      ChangeToken: ChangeToken;
    }
    export interface DeleteSizeConstraintSetResponse {
      /** The ChangeToken that you used to submit the DeleteSizeConstraintSet request. You
can also use this value to query the status of the request. For more
information, see GetChangeTokenStatus . **/
      ChangeToken?: ChangeToken;
    }
    export interface DeleteSqlInjectionMatchSetRequest {
      /** The SqlInjectionMatchSetId of the SqlInjectionMatchSet that you want to delete. 
SqlInjectionMatchSetId is returned by CreateSqlInjectionMatchSet and by 
ListSqlInjectionMatchSets . **/
      SqlInjectionMatchSetId: ResourceId;
      /** The value returned by the most recent call to GetChangeToken . **/
      ChangeToken: ChangeToken;
    }
    export interface DeleteSqlInjectionMatchSetResponse {
      /** The ChangeToken that you used to submit the DeleteSqlInjectionMatchSet request.
You can also use this value to query the status of the request. For more
information, see GetChangeTokenStatus . **/
      ChangeToken?: ChangeToken;
    }
    export interface DeleteWebACLRequest {
      /** The WebACLId of the WebACL that you want to delete. WebACLId is returned by 
CreateWebACL and by ListWebACLs . **/
      WebACLId: ResourceId;
      /** The value returned by the most recent call to GetChangeToken . **/
      ChangeToken: ChangeToken;
    }
    export interface DeleteWebACLResponse {
      /** The ChangeToken that you used to submit the DeleteWebACL request. You can also
use this value to query the status of the request. For more information, see 
GetChangeTokenStatus . **/
      ChangeToken?: ChangeToken;
    }
    export interface FieldToMatch {
      /** The part of the web request that you want AWS WAF to search for a specified
string. Parts of a request that you can search include the following:

&amp;#42; HEADER : A specified request header, for example, the value of the User-Agent 
 or Referer header. If you choose HEADER for the type, specify the name of the
 header in Data .
* METHOD : The HTTP method, which indicated the type of operation that the
 request is asking the origin to perform. Amazon CloudFront supports the
 following methods: DELETE , GET , HEAD , OPTIONS , PATCH , POST , and PUT .
* QUERY_STRING : A query string, which is the part of a URL that appears after
 a ? character, if any.
* URI : The part of a web request that identifies a resource, for example, 
 /images/daily-ad.jpg .
* BODY : The part of a request that contains any additional data that you want
 to send to your web server as the HTTP request body, such as data from a
 form. The request body immediately follows the request headers. Note that
 only the first 8192 bytes of the request body are forwarded to AWS WAF for
 inspection. To allow or block requests based on the length of the body, you
 can create a size constraint set. For more information, see 
 CreateSizeConstraintSet . **/
      Type: MatchFieldType;
      /** When the value of Type is HEADER , enter the name of the header that you want
AWS WAF to search, for example, User-Agent or Referer . If the value of Type is
any other value, omit Data .

The name of the header is not case sensitive. **/
      Data?: MatchFieldData;
    }
    export interface GetByteMatchSetRequest {
      /** The ByteMatchSetId of the ByteMatchSet that you want to get. ByteMatchSetId is
returned by CreateByteMatchSet and by ListByteMatchSets . **/
      ByteMatchSetId: ResourceId;
    }
    export interface GetByteMatchSetResponse {
      /** Information about the ByteMatchSet that you specified in the GetByteMatchSet 
request. For more information, see the following topics:

&amp;#42; ByteMatchSet : Contains ByteMatchSetId , ByteMatchTuples , and Name
* ByteMatchTuples : Contains an array of ByteMatchTuple objects. Each 
 ByteMatchTuple object contains FieldToMatch , PositionalConstraint , 
 TargetString , and TextTransformation
* FieldToMatch : Contains Data and Type **/
      ByteMatchSet?: ByteMatchSet;
    }
    export interface GetChangeTokenRequest {
    }
    export interface GetChangeTokenResponse {
      /** The ChangeToken that you used in the request. Use this value in a 
GetChangeTokenStatus request to get the current status of the request. **/
      ChangeToken?: ChangeToken;
    }
    export interface GetChangeTokenStatusRequest {
      /** The change token for which you want to get the status. This change token was
previously returned in the GetChangeToken response. **/
      ChangeToken: ChangeToken;
    }
    export interface GetChangeTokenStatusResponse {
      /** The status of the change token. **/
      ChangeTokenStatus?: ChangeTokenStatus;
    }
    export interface GetIPSetRequest {
      /** The IPSetId of the IPSet that you want to get. IPSetId is returned by 
CreateIPSet and by ListIPSets . **/
      IPSetId: ResourceId;
    }
    export interface GetIPSetResponse {
      /** Information about the IPSet that you specified in the GetIPSet request. For more
information, see the following topics:

&amp;#42; IPSet : Contains IPSetDescriptors , IPSetId , and Name
* IPSetDescriptors : Contains an array of IPSetDescriptor objects. Each 
 IPSetDescriptor object contains Type and Value **/
      IPSet?: IPSet;
    }
    export interface GetRuleRequest {
      /** The RuleId of the Rule that you want to get. RuleId is returned by CreateRule 
and by ListRules . **/
      RuleId: ResourceId;
    }
    export interface GetRuleResponse {
      /** Information about the Rule that you specified in the GetRule request. For more
information, see the following topics:

&amp;#42; Rule : Contains MetricName , Name , an array of Predicate objects, and RuleId
* Predicate : Each Predicate object contains DataId , Negated , and Type **/
      Rule?: Rule;
    }
    export interface GetSampledRequestsRequest {
      /** The WebACLId of the WebACL for which you want GetSampledRequests to return a
sample of requests. **/
      WebAclId: ResourceId;
      /** RuleId is one of two values:

&amp;#42; The RuleId of the Rule for which you want GetSampledRequests to return a
 sample of requests.
* Default_Action , which causes GetSampledRequests to return a sample of the
 requests that didn&#x27;t match any of the rules in the specified WebACL . **/
      RuleId: ResourceId;
      /** The start date and time and the end date and time of the range for which you
want GetSampledRequests to return a sample of requests. Specify the date and
time in Unix time format (in seconds). You can specify any time range in the
previous three hours. **/
      TimeWindow: TimeWindow;
      /** The number of requests that you want AWS WAF to return from among the first
5,000 requests that your AWS resource received during the time range. If your
resource received fewer requests than the value of MaxItems , GetSampledRequests 
returns information about all of them. **/
      MaxItems: ListMaxItems;
    }
    export interface GetSampledRequestsResponse {
      /** A complex type that contains detailed information about each of the requests in
the sample. **/
      SampledRequests?: SampledHTTPRequests;
      /** The total number of requests from which GetSampledRequests got a sample of 
MaxItems requests. If PopulationSize is less than MaxItems , the sample includes
every request that your AWS resource received during the specified time range. **/
      PopulationSize?: PopulationSize;
      /** Usually, TimeWindow is the time range that you specified in the 
GetSampledRequests request. However, if your AWS resource received more than
5,000 requests during the time range that you specified in the request, 
GetSampledRequests returns the time range for the first 5,000 requests. **/
      TimeWindow?: TimeWindow;
    }
    export interface GetSizeConstraintSetRequest {
      /** The SizeConstraintSetId of the SizeConstraintSet that you want to get. 
SizeConstraintSetId is returned by CreateSizeConstraintSet and by 
ListSizeConstraintSets . **/
      SizeConstraintSetId: ResourceId;
    }
    export interface GetSizeConstraintSetResponse {
      /** Information about the SizeConstraintSet that you specified in the 
GetSizeConstraintSet request. For more information, see the following topics:

&amp;#42; SizeConstraintSet : Contains SizeConstraintSetId , SizeConstraints , and Name
* SizeConstraints : Contains an array of SizeConstraint objects. Each 
 SizeConstraint object contains FieldToMatch , TextTransformation , 
 ComparisonOperator , and Size
* FieldToMatch : Contains Data and Type **/
      SizeConstraintSet?: SizeConstraintSet;
    }
    export interface GetSqlInjectionMatchSetRequest {
      /** The SqlInjectionMatchSetId of the SqlInjectionMatchSet that you want to get. 
SqlInjectionMatchSetId is returned by CreateSqlInjectionMatchSet and by 
ListSqlInjectionMatchSets . **/
      SqlInjectionMatchSetId: ResourceId;
    }
    export interface GetSqlInjectionMatchSetResponse {
      /** Information about the SqlInjectionMatchSet that you specified in the 
GetSqlInjectionMatchSet request. For more information, see the following topics:

&amp;#42; SqlInjectionMatchSet : Contains Name , SqlInjectionMatchSetId , and an array
 of SqlInjectionMatchTuple objects
* SqlInjectionMatchTuple : Each SqlInjectionMatchTuple object contains 
 FieldToMatch and TextTransformation
* FieldToMatch : Contains Data and Type **/
      SqlInjectionMatchSet?: SqlInjectionMatchSet;
    }
    export interface GetWebACLRequest {
      /** The WebACLId of the WebACL that you want to get. WebACLId is returned by 
CreateWebACL and by ListWebACLs . **/
      WebACLId: ResourceId;
    }
    export interface GetWebACLResponse {
      /** Information about the WebACL that you specified in the GetWebACL request. For
more information, see the following topics:

&amp;#42; WebACL : Contains DefaultAction , MetricName , Name , an array of Rule 
 objects, and WebACLId
* DefaultAction (Data type is WafAction ): Contains Type
* Rules : Contains an array of ActivatedRule objects, which contain Action , 
 Priority , and RuleId
* Action : Contains Type **/
      WebACL?: WebACL;
    }
    export interface HTTPHeader {
      /** The name of one of the headers in the sampled web request. **/
      Name?: HeaderName;
      /** The value of one of the headers in the sampled web request. **/
      Value?: HeaderValue;
    }
    export interface HTTPRequest {
      /** The IP address that the request originated from. If the WebACL is associated
with a CloudFront distribution, this is the value of one of the following fields
in CloudFront access logs:

&amp;#42; c-ip , if the viewer did not use an HTTP proxy or a load balancer to send the
 request
* x-forwarded-for , if the viewer did use an HTTP proxy or a load balancer to
 send the request **/
      ClientIP?: IPString;
      /** The two-letter country code for the country that the request originated from.
For a current list of country codes, see the Wikipedia entry ISO 3166-1 alpha-2
[https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2] . **/
      Country?: Country;
      /** The part of a web request that identifies the resource, for example, 
/images/daily-ad.jpg . **/
      URI?: URIString;
      /** The HTTP method specified in the sampled web request. CloudFront supports the
following methods: DELETE , GET , HEAD , OPTIONS , PATCH , POST , and PUT . **/
      Method?: HTTPMethod;
      /** The HTTP version specified in the sampled web request, for example, HTTP/1.1 . **/
      HTTPVersion?: HTTPVersion;
      /** A complex type that contains two values for each header in the sampled web
request: the name of the header and the value of the header. **/
      Headers?: HTTPHeaders;
    }
    export interface IPSet {
      /** The IPSetId for an IPSet . You use IPSetId to get information about an IPSet 
(see GetIPSet ), update an IPSet (see UpdateIPSet ), insert an IPSet into a Rule 
or delete one from a Rule (see UpdateRule ), and delete an IPSet from AWS WAF
(see DeleteIPSet ).

IPSetId is returned by CreateIPSet and by ListIPSets . **/
      IPSetId: ResourceId;
      /** A friendly name or description of the IPSet . You can&#x27;t change the name of an 
IPSet after you create it. **/
      Name?: ResourceName;
      /** The IP address type ( IPV4 ) and the IP address range (in CIDR notation) that
web requests originate from. If the WebACL is associated with a CloudFront
distribution, this is the value of one of the following fields in CloudFront
access logs:

&amp;#42; c-ip , if the viewer did not use an HTTP proxy or a load balancer to send the
 request
* x-forwarded-for , if the viewer did use an HTTP proxy or a load balancer to
 send the request **/
      IPSetDescriptors: IPSetDescriptors;
    }
    export interface IPSetDescriptor {
      /** Specify IPV4 . **/
      Type: IPSetDescriptorType;
      /** Specify an IPv4 address by using CIDR notation. For example:

&amp;#42; To configure AWS WAF to allow, block, or count requests that originated from
 the IP address 192.0.2.44, specify 192.0.2.44/32 .
* To configure AWS WAF to allow, block, or count requests that originated from
 IP addresses from 192.0.2.0 to 192.0.2.255, specify 192.0.2.0/24 .

AWS WAF supports only /8, /16, /24, and /32 IP addresses.

For more information about CIDR notation, see the Wikipedia entry Classless
Inter-Domain Routing
[https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing] . **/
      Value: IPSetDescriptorValue;
    }
    export interface IPSetSummary {
      /** The IPSetId for an IPSet . You can use IPSetId in a GetIPSet request to get
detailed information about an IPSet . **/
      IPSetId: ResourceId;
      /** A friendly name or description of the IPSet . You can&#x27;t change the name of an 
IPSet after you create it. **/
      Name: ResourceName;
    }
    export interface IPSetUpdate {
      /** Specifies whether to insert or delete an IP address with UpdateIPSet . **/
      Action: ChangeAction;
      /** The IP address type ( IPV4 ) and the IP address range (in CIDR notation) that
web requests originate from. **/
      IPSetDescriptor: IPSetDescriptor;
    }
    export interface ListByteMatchSetsRequest {
      /** If you specify a value for Limit and you have more ByteMatchSets than the value
of Limit , AWS WAF returns a NextMarker value in the response that allows you to
list another group of ByteMatchSets . For the second and subsequent 
ListByteMatchSets requests, specify the value of NextMarker from the previous
response to get information about another batch of ByteMatchSets . **/
      NextMarker?: NextMarker;
      /** Specifies the number of ByteMatchSet objects that you want AWS WAF to return for
this request. If you have more ByteMatchSets objects than the number you specify
for Limit , the response includes a NextMarker value that you can use to get
another batch of ByteMatchSet objects. **/
      Limit: PaginationLimit;
    }
    export interface ListByteMatchSetsResponse {
      /** If you have more ByteMatchSet objects than the number that you specified for 
Limit in the request, the response includes a NextMarker value. To list more 
ByteMatchSet objects, submit another ListByteMatchSets request, and specify the 
NextMarker value from the response in the NextMarker value in the next request. **/
      NextMarker?: NextMarker;
      /** An array of ByteMatchSetSummary objects. **/
      ByteMatchSets?: ByteMatchSetSummaries;
    }
    export interface ListIPSetsRequest {
      /** If you specify a value for Limit and you have more IPSets than the value of 
Limit , AWS WAF returns a NextMarker value in the response that allows you to
list another group of IPSets . For the second and subsequent ListIPSets 
requests, specify the value of NextMarker from the previous response to get
information about another batch of ByteMatchSets . **/
      NextMarker?: NextMarker;
      /** Specifies the number of IPSet objects that you want AWS WAF to return for this
request. If you have more IPSet objects than the number you specify for Limit ,
the response includes a NextMarker value that you can use to get another batch
of IPSet objects. **/
      Limit: PaginationLimit;
    }
    export interface ListIPSetsResponse {
      /** If you have more IPSet objects than the number that you specified for Limit in
the request, the response includes a NextMarker value. To list more IPSet 
objects, submit another ListIPSets request, and specify the NextMarker value
from the response in the NextMarker value in the next request. **/
      NextMarker?: NextMarker;
      /** An array of IPSetSummary objects. **/
      IPSets?: IPSetSummaries;
    }
    export interface ListRulesRequest {
      /** If you specify a value for Limit and you have more Rules than the value of Limit 
, AWS WAF returns a NextMarker value in the response that allows you to list
another group of Rules . For the second and subsequent ListRules requests,
specify the value of NextMarker from the previous response to get information
about another batch of Rules . **/
      NextMarker?: NextMarker;
      /** Specifies the number of Rules that you want AWS WAF to return for this request.
If you have more Rules than the number that you specify for Limit , the response
includes a NextMarker value that you can use to get another batch of Rules . **/
      Limit: PaginationLimit;
    }
    export interface ListRulesResponse {
      /** If you have more Rules than the number that you specified for Limit in the
request, the response includes a NextMarker value. To list more Rules , submit
another ListRules request, and specify the NextMarker value from the response in
the NextMarker value in the next request. **/
      NextMarker?: NextMarker;
      /** An array of RuleSummary objects. **/
      Rules?: RuleSummaries;
    }
    export interface ListSizeConstraintSetsRequest {
      /** If you specify a value for Limit and you have more SizeConstraintSets than the
value of Limit , AWS WAF returns a NextMarker value in the response that allows
you to list another group of SizeConstraintSets . For the second and subsequent 
ListSizeConstraintSets requests, specify the value of NextMarker from the
previous response to get information about another batch of SizeConstraintSets . **/
      NextMarker?: NextMarker;
      /** Specifies the number of SizeConstraintSet objects that you want AWS WAF to
return for this request. If you have more SizeConstraintSets objects than the
number you specify for Limit , the response includes a NextMarker value that you
can use to get another batch of SizeConstraintSet objects. **/
      Limit: PaginationLimit;
    }
    export interface ListSizeConstraintSetsResponse {
      /** If you have more SizeConstraintSet objects than the number that you specified
for Limit in the request, the response includes a NextMarker value. To list more 
SizeConstraintSet objects, submit another ListSizeConstraintSets request, and
specify the NextMarker value from the response in the NextMarker value in the
next request. **/
      NextMarker?: NextMarker;
      /** An array of SizeConstraintSetSummary objects. **/
      SizeConstraintSets?: SizeConstraintSetSummaries;
    }
    export interface ListSqlInjectionMatchSetsRequest {
      /** If you specify a value for Limit and you have more SqlInjectionMatchSet objects
than the value of Limit , AWS WAF returns a NextMarker value in the response
that allows you to list another group of SqlInjectionMatchSets . For the second
and subsequent ListSqlInjectionMatchSets requests, specify the value of 
NextMarker from the previous response to get information about another batch of 
SqlInjectionMatchSets . **/
      NextMarker?: NextMarker;
      /** Specifies the number of SqlInjectionMatchSet objects that you want AWS WAF to
return for this request. If you have more SqlInjectionMatchSet objects than the
number you specify for Limit , the response includes a NextMarker value that you
can use to get another batch of Rules . **/
      Limit: PaginationLimit;
    }
    export interface ListSqlInjectionMatchSetsResponse {
      /** If you have more SqlInjectionMatchSet objects than the number that you specified
for Limit in the request, the response includes a NextMarker value. To list more 
SqlInjectionMatchSet objects, submit another ListSqlInjectionMatchSets request,
and specify the NextMarker value from the response in the NextMarker value in
the next request. **/
      NextMarker?: NextMarker;
      /** An array of SqlInjectionMatchSetSummary objects. **/
      SqlInjectionMatchSets?: SqlInjectionMatchSetSummaries;
    }
    export interface ListWebACLsRequest {
      /** If you specify a value for Limit and you have more WebACL objects than the
number that you specify for Limit , AWS WAF returns a NextMarker value in the
response that allows you to list another group of WebACL objects. For the second
and subsequent ListWebACLs requests, specify the value of NextMarker from the
previous response to get information about another batch of WebACL objects. **/
      NextMarker?: NextMarker;
      /** Specifies the number of WebACL objects that you want AWS WAF to return for this
request. If you have more WebACL objects than the number that you specify for 
Limit , the response includes a NextMarker value that you can use to get another
batch of WebACL objects. **/
      Limit: PaginationLimit;
    }
    export interface ListWebACLsResponse {
      /** If you have more WebACL objects than the number that you specified for Limit in
the request, the response includes a NextMarker value. To list more WebACL 
objects, submit another ListWebACLs request, and specify the NextMarker value
from the response in the NextMarker value in the next request. **/
      NextMarker?: NextMarker;
      /** An array of WebACLSummary objects. **/
      WebACLs?: WebACLSummaries;
    }
    export interface Predicate {
      /** Set Negated to False if you want AWS WAF to allow, block, or count requests
based on the settings in the specified ByteMatchSet , IPSet , or 
SqlInjectionMatchSet . For example, if an IPSet includes the IP address 
192.0.2.44 , AWS WAF will allow or block requests based on that IP address.

Set Negated to True if you want AWS WAF to allow or block a request based on the
negation of the settings in the ByteMatchSet , IPSet , or SqlInjectionMatchSet .
For example, if an IPSet includes the IP address 192.0.2.44 , AWS WAF will
allow, block, or count requests based on all IP addresses except 192.0.2.44 . **/
      Negated: Negated;
      /** The type of predicate in a Rule , such as ByteMatchSet or IPSet . **/
      Type: PredicateType;
      /** A unique identifier for a predicate in a Rule , such as ByteMatchSetId or 
IPSetId . The ID is returned by the corresponding Create or List command. **/
      DataId: ResourceId;
    }
    export interface Rule {
      /** A unique identifier for a Rule . You use RuleId to get more information about a 
Rule (see GetRule ), update a Rule (see UpdateRule ), insert a Rule into a 
WebACL or delete a one from a WebACL (see UpdateWebACL ), or delete a Rule from
AWS WAF (see DeleteRule ).

RuleId is returned by CreateRule and by ListRules . **/
      RuleId: ResourceId;
      /** The friendly name or description for the Rule . You can&#x27;t change the name of a 
Rule after you create it. **/
      Name?: ResourceName;
      MetricName?: MetricName;
      /** The Predicates object contains one Predicate element for each ByteMatchSet , 
IPSet , or SqlInjectionMatchSet object that you want to include in a Rule . **/
      Predicates: Predicates;
    }
    export interface RuleSummary {
      /** A unique identifier for a Rule . You use RuleId to get more information about a 
Rule (see GetRule ), update a Rule (see UpdateRule ), insert a Rule into a 
WebACL or delete one from a WebACL (see UpdateWebACL ), or delete a Rule from
AWS WAF (see DeleteRule ).

RuleId is returned by CreateRule and by ListRules . **/
      RuleId: ResourceId;
      /** A friendly name or description of the Rule . You can&#x27;t change the name of a Rule 
after you create it. **/
      Name: ResourceName;
    }
    export interface RuleUpdate {
      /** Specify INSERT to add a Predicate to a Rule . Use DELETE to remove a Predicate 
from a Rule . **/
      Action: ChangeAction;
      /** The ID of the Predicate (such as an IPSet ) that you want to add to a Rule . **/
      Predicate: Predicate;
    }
    export interface SampledHTTPRequest {
      /** A complex type that contains detailed information about the request. **/
      Request: HTTPRequest;
      /** A value that indicates how one result in the response relates proportionally to
other results in the response. A result that has a weight of 2 represents
roughly twice as many CloudFront web requests as a result that has a weight of 1 
. **/
      Weight: SampleWeight;
      /** The time at which AWS WAF received the request from your AWS resource, in Unix
time format (in seconds). **/
      Timestamp?: Timestamp;
      /** The action for the Rule that the request matched: ALLOW , BLOCK , or COUNT . **/
      Action?: Action;
    }
    export interface SizeConstraint {
      FieldToMatch: FieldToMatch;
      /** Text transformations eliminate some of the unusual formatting that attackers use
in web requests in an effort to bypass AWS WAF. If you specify a transformation,
AWS WAF performs the transformation on FieldToMatch before inspecting a request
for a match.

Note that if you choose BODY for the value of Type , you must choose NONE for 
TextTransformation because CloudFront forwards only the first 8192 bytes for
inspection.

NONE

Specify NONE if you don&#x27;t want to perform any text transformations.

CMD_LINE

When you&#x27;re concerned that attackers are injecting an operating system command
line command and using unusual formatting to disguise some or all of the
command, use this option to perform the following transformations:

&amp;#42; Delete the following characters: \ &quot; &#x27; ^
* Delete spaces before the following characters: / (
* Replace the following characters with a space: , ;
* Replace multiple spaces with one space
* Convert uppercase letters (A-Z) to lowercase (a-z)

COMPRESS_WHITE_SPACE

Use this option to replace the following characters with a space character
(decimal 32):

* \f, formfeed, decimal 12
* \t, tab, decimal 9
* \n, newline, decimal 10
* \r, carriage return, decimal 13
* \v, vertical tab, decimal 11
* non-breaking space, decimal 160

COMPRESS_WHITE_SPACE also replaces multiple spaces with one space.

HTML_ENTITY_DECODE

Use this option to replace HTML-encoded characters with unencoded characters. 
HTML_ENTITY_DECODE performs the following operations:

* Replaces (ampersand)quot; with &quot;
* Replaces (ampersand)nbsp; with a non-breaking space, decimal 160
* Replaces (ampersand)lt; with a &quot;less than&quot; symbol
* Replaces (ampersand)gt; with
* Replaces characters that are represented in hexadecimal format, 
 (ampersand)#xhhhh; , with the corresponding characters
* Replaces characters that are represented in decimal format, (ampersand)#nnnn; 
 , with the corresponding characters

LOWERCASE

Use this option to convert uppercase letters (A-Z) to lowercase (a-z).

URL_DECODE

Use this option to decode a URL-encoded value. **/
      TextTransformation: TextTransformation;
      /** The type of comparison you want AWS WAF to perform. AWS WAF uses this in
combination with the provided Size and FieldToMatch to build an expression in
the form of &quot; Size ComparisonOperator size in bytes of FieldToMatch &quot;. If that
expression is true, the SizeConstraint is considered to match.

EQ : Used to test if the Size is equal to the size of the FieldToMatch

NE : Used to test if the Size is not equal to the size of the FieldToMatch

LE : Used to test if the Size is less than or equal to the size of the 
FieldToMatch

LT : Used to test if the Size is strictly less than the size of the FieldToMatch

GE : Used to test if the Size is greater than or equal to the size of the 
FieldToMatch

GT : Used to test if the Size is strictly greater than the size of the 
FieldToMatch **/
      ComparisonOperator: ComparisonOperator;
      /** The size in bytes that you want AWS WAF to compare against the size of the
specified FieldToMatch . AWS WAF uses this in combination with 
ComparisonOperator and FieldToMatch to build an expression in the form of &quot; Size 
ComparisonOperator size in bytes of FieldToMatch &quot;. If that expression is true,
the SizeConstraint is considered to match.

Valid values for size are 0 - 21474836480 bytes (0 - 20 GB).

If you specify URI for the value of Type , the / in the URI counts as one
character. For example, the URI /logo.jpg is nine characters long. **/
      Size: Size;
    }
    export interface SizeConstraintSet {
      /** A unique identifier for a SizeConstraintSet . You use SizeConstraintSetId to get
information about a SizeConstraintSet (see GetSizeConstraintSet ), update a 
SizeConstraintSet (see UpdateSizeConstraintSet , insert a SizeConstraintSet into
a Rule or delete one from a Rule (see UpdateRule ), and delete a 
SizeConstraintSet from AWS WAF (see DeleteSizeConstraintSet ).

SizeConstraintSetId is returned by CreateSizeConstraintSet and by 
ListSizeConstraintSets . **/
      SizeConstraintSetId: ResourceId;
      /** The name, if any, of the SizeConstraintSet . **/
      Name?: ResourceName;
      /** Specifies the parts of web requests that you want to inspect the size of. **/
      SizeConstraints: SizeConstraints;
    }
    export interface SizeConstraintSetSummary {
      /** A unique identifier for a SizeConstraintSet . You use SizeConstraintSetId to get
information about a SizeConstraintSet (see GetSizeConstraintSet ), update a 
SizeConstraintSet (see UpdateSizeConstraintSet , insert a SizeConstraintSet into
a Rule or delete one from a Rule (see UpdateRule ), and delete a 
SizeConstraintSet from AWS WAF (see DeleteSizeConstraintSet ).

SizeConstraintSetId is returned by CreateSizeConstraintSet and by 
ListSizeConstraintSets . **/
      SizeConstraintSetId: ResourceId;
      /** The name of the SizeConstraintSet , if any. **/
      Name: ResourceName;
    }
    export interface SizeConstraintSetUpdate {
      /** Specify INSERT to add a SizeConstraintSetUpdate to a SizeConstraintSet . Use 
DELETE to remove a SizeConstraintSetUpdate from a SizeConstraintSet . **/
      Action: ChangeAction;
      /** Specifies a constraint on the size of a part of the web request. AWS WAF uses
the Size , ComparisonOperator , and FieldToMatch to build an expression in the
form of &quot; Size ComparisonOperator size in bytes of FieldToMatch &quot;. If that
expression is true, the SizeConstraint is considered to match. **/
      SizeConstraint: SizeConstraint;
    }
    export interface SqlInjectionMatchSet {
      /** A unique identifier for a SqlInjectionMatchSet . You use SqlInjectionMatchSetId 
to get information about a SqlInjectionMatchSet (see GetSqlInjectionMatchSet ),
update a SqlInjectionMatchSet (see UpdateSqlInjectionMatchSet , insert a 
SqlInjectionMatchSet into a Rule or delete one from a Rule (see UpdateRule ),
and delete a SqlInjectionMatchSet from AWS WAF (see DeleteSqlInjectionMatchSet 
).

SqlInjectionMatchSetId is returned by CreateSqlInjectionMatchSet and by 
ListSqlInjectionMatchSets . **/
      SqlInjectionMatchSetId: ResourceId;
      /** The name, if any, of the SqlInjectionMatchSet . **/
      Name?: ResourceName;
      /** Specifies the parts of web requests that you want to inspect for snippets of
malicious SQL code. **/
      SqlInjectionMatchTuples: SqlInjectionMatchTuples;
    }
    export interface SqlInjectionMatchSetSummary {
      /** A unique identifier for a SqlInjectionMatchSet . You use SqlInjectionMatchSetId 
to get information about a SqlInjectionMatchSet (see GetSqlInjectionMatchSet ),
update a SqlInjectionMatchSet (see UpdateSqlInjectionMatchSet , insert a 
SqlInjectionMatchSet into a Rule or delete one from a Rule (see UpdateRule ),
and delete a SqlInjectionMatchSet from AWS WAF (see DeleteSqlInjectionMatchSet 
).

SqlInjectionMatchSetId is returned by CreateSqlInjectionMatchSet and by 
ListSqlInjectionMatchSets . **/
      SqlInjectionMatchSetId: ResourceId;
      /** The name of the SqlInjectionMatchSet , if any, specified by Id . **/
      Name: ResourceName;
    }
    export interface SqlInjectionMatchSetUpdate {
      /** Specify INSERT to add a SqlInjectionMatchSetUpdate to a SqlInjectionMatchSet .
Use DELETE to remove a SqlInjectionMatchSetUpdate from a SqlInjectionMatchSet . **/
      Action: ChangeAction;
      /** Specifies the part of a web request that you want AWS WAF to inspect for
snippets of malicious SQL code and, if you want AWS WAF to inspect a header, the
name of the header. **/
      SqlInjectionMatchTuple: SqlInjectionMatchTuple;
    }
    export interface SqlInjectionMatchTuple {
      FieldToMatch: FieldToMatch;
      /** Text transformations eliminate some of the unusual formatting that attackers use
in web requests in an effort to bypass AWS WAF. If you specify a transformation,
AWS WAF performs the transformation on FieldToMatch before inspecting a request
for a match.

CMD_LINE

When you&#x27;re concerned that attackers are injecting an operating system
commandline command and using unusual formatting to disguise some or all of the
command, use this option to perform the following transformations:

&amp;#42; Delete the following characters: \ &quot; &#x27; ^
* Delete spaces before the following characters: / (
* Replace the following characters with a space: , ;
* Replace multiple spaces with one space
* Convert uppercase letters (A-Z) to lowercase (a-z)

COMPRESS_WHITE_SPACE

Use this option to replace the following characters with a space character
(decimal 32):

* \f, formfeed, decimal 12
* \t, tab, decimal 9
* \n, newline, decimal 10
* \r, carriage return, decimal 13
* \v, vertical tab, decimal 11
* non-breaking space, decimal 160

COMPRESS_WHITE_SPACE also replaces multiple spaces with one space.

HTML_ENTITY_DECODE

Use this option to replace HTML-encoded characters with unencoded characters. 
HTML_ENTITY_DECODE performs the following operations:

* Replaces (ampersand)quot; with &quot;
* Replaces (ampersand)nbsp; with a non-breaking space, decimal 160
* Replaces (ampersand)lt; with a &quot;less than&quot; symbol
* Replaces (ampersand)gt; with
* Replaces characters that are represented in hexadecimal format, 
 (ampersand)#xhhhh; , with the corresponding characters
* Replaces characters that are represented in decimal format, (ampersand)#nnnn; 
 , with the corresponding characters

LOWERCASE

Use this option to convert uppercase letters (A-Z) to lowercase (a-z).

URL_DECODE

Use this option to decode a URL-encoded value.

NONE

Specify NONE if you don&#x27;t want to perform any text transformations. **/
      TextTransformation: TextTransformation;
    }
    export interface TimeWindow {
      /** The beginning of the time range from which you want GetSampledRequests to return
a sample of the requests that your AWS resource received. You can specify any
time range in the previous three hours. **/
      StartTime: Timestamp;
      /** The end of the time range from which you want GetSampledRequests to return a
sample of the requests that your AWS resource received. You can specify any time
range in the previous three hours. **/
      EndTime: Timestamp;
    }
    export interface UpdateByteMatchSetRequest {
      /** The ByteMatchSetId of the ByteMatchSet that you want to update. ByteMatchSetId 
is returned by CreateByteMatchSet and by ListByteMatchSets . **/
      ByteMatchSetId: ResourceId;
      /** The value returned by the most recent call to GetChangeToken . **/
      ChangeToken: ChangeToken;
      /** An array of ByteMatchSetUpdate objects that you want to insert into or delete
from a ByteMatchSet . For more information, see the applicable data types:

&amp;#42; ByteMatchSetUpdate : Contains Action and ByteMatchTuple
* ByteMatchTuple : Contains FieldToMatch , PositionalConstraint , TargetString 
 , and TextTransformation
* FieldToMatch : Contains Data and Type **/
      Updates: ByteMatchSetUpdates;
    }
    export interface UpdateByteMatchSetResponse {
      /** The ChangeToken that you used to submit the UpdateByteMatchSet request. You can
also use this value to query the status of the request. For more information,
see GetChangeTokenStatus . **/
      ChangeToken?: ChangeToken;
    }
    export interface UpdateIPSetRequest {
      /** The IPSetId of the IPSet that you want to update. IPSetId is returned by 
CreateIPSet and by ListIPSets . **/
      IPSetId: ResourceId;
      /** The value returned by the most recent call to GetChangeToken . **/
      ChangeToken: ChangeToken;
      /** An array of IPSetUpdate objects that you want to insert into or delete from an 
IPSet . For more information, see the applicable data types:

&amp;#42; IPSetUpdate : Contains Action and IPSetDescriptor
* IPSetDescriptor : Contains Type and Value **/
      Updates: IPSetUpdates;
    }
    export interface UpdateIPSetResponse {
      /** The ChangeToken that you used to submit the UpdateIPSet request. You can also
use this value to query the status of the request. For more information, see 
GetChangeTokenStatus . **/
      ChangeToken?: ChangeToken;
    }
    export interface UpdateRuleRequest {
      /** The RuleId of the Rule that you want to update. RuleId is returned by CreateRule 
and by ListRules . **/
      RuleId: ResourceId;
      /** The value returned by the most recent call to GetChangeToken . **/
      ChangeToken: ChangeToken;
      /** An array of RuleUpdate objects that you want to insert into or delete from a 
Rule . For more information, see the applicable data types:

&amp;#42; RuleUpdate : Contains Action and Predicate
* Predicate : Contains DataId , Negated , and Type
* FieldToMatch : Contains Data and Type **/
      Updates: RuleUpdates;
    }
    export interface UpdateRuleResponse {
      /** The ChangeToken that you used to submit the UpdateRule request. You can also use
this value to query the status of the request. For more information, see 
GetChangeTokenStatus . **/
      ChangeToken?: ChangeToken;
    }
    export interface UpdateSizeConstraintSetRequest {
      /** The SizeConstraintSetId of the SizeConstraintSet that you want to update. 
SizeConstraintSetId is returned by CreateSizeConstraintSet and by 
ListSizeConstraintSets . **/
      SizeConstraintSetId: ResourceId;
      /** The value returned by the most recent call to GetChangeToken . **/
      ChangeToken: ChangeToken;
      /** An array of SizeConstraintSetUpdate objects that you want to insert into or
delete from a SizeConstraintSet . For more information, see the applicable data
types:

&amp;#42; SizeConstraintSetUpdate : Contains Action and SizeConstraint
* SizeConstraint : Contains FieldToMatch , TextTransformation , 
 ComparisonOperator , and Size
* FieldToMatch : Contains Data and Type **/
      Updates: SizeConstraintSetUpdates;
    }
    export interface UpdateSizeConstraintSetResponse {
      /** The ChangeToken that you used to submit the UpdateSizeConstraintSet request. You
can also use this value to query the status of the request. For more
information, see GetChangeTokenStatus . **/
      ChangeToken?: ChangeToken;
    }
    export interface UpdateSqlInjectionMatchSetRequest {
      /** The SqlInjectionMatchSetId of the SqlInjectionMatchSet that you want to update. 
SqlInjectionMatchSetId is returned by CreateSqlInjectionMatchSet and by 
ListSqlInjectionMatchSets . **/
      SqlInjectionMatchSetId: ResourceId;
      /** The value returned by the most recent call to GetChangeToken . **/
      ChangeToken: ChangeToken;
      /** An array of SqlInjectionMatchSetUpdate objects that you want to insert into or
delete from a SqlInjectionMatchSet . For more information, see the applicable
data types:

&amp;#42; SqlInjectionMatchSetUpdate : Contains Action and SqlInjectionMatchTuple
* SqlInjectionMatchTuple : Contains FieldToMatch and TextTransformation
* FieldToMatch : Contains Data and Type **/
      Updates: SqlInjectionMatchSetUpdates;
    }
    export interface UpdateSqlInjectionMatchSetResponse {
      /** The ChangeToken that you used to submit the UpdateSqlInjectionMatchSet request.
You can also use this value to query the status of the request. For more
information, see GetChangeTokenStatus . **/
      ChangeToken?: ChangeToken;
    }
    export interface UpdateWebACLRequest {
      /** The WebACLId of the WebACL that you want to update. WebACLId is returned by 
CreateWebACL and by ListWebACLs . **/
      WebACLId: ResourceId;
      /** The value returned by the most recent call to GetChangeToken . **/
      ChangeToken: ChangeToken;
      /** An array of updates to make to the WebACL .

An array of WebACLUpdate objects that you want to insert into or delete from a 
WebACL . For more information, see the applicable data types:

&amp;#42; WebACLUpdate : Contains Action and ActivatedRule
* ActivatedRule : Contains Action , Priority , and RuleId
* WafAction : Contains Type **/
      Updates?: WebACLUpdates;
      DefaultAction?: WafAction;
    }
    export interface UpdateWebACLResponse {
      /** The ChangeToken that you used to submit the UpdateWebACL request. You can also
use this value to query the status of the request. For more information, see 
GetChangeTokenStatus . **/
      ChangeToken?: ChangeToken;
    }
    export interface WAFDisallowedNameException {
      message?: errorMessage;
    }
    export interface WAFInternalErrorException {
      message?: errorMessage;
    }
    export interface WAFInvalidAccountException {
    }
    export interface WAFInvalidOperationException {
      message?: errorMessage;
    }
    export interface WAFInvalidParameterException {
      field?: ParameterExceptionField;
      parameter?: ParameterExceptionParameter;
      reason?: ParameterExceptionReason;
    }
    export interface WAFLimitsExceededException {
      message?: errorMessage;
    }
    export interface WAFNonEmptyEntityException {
      message?: errorMessage;
    }
    export interface WAFNonexistentContainerException {
      message?: errorMessage;
    }
    export interface WAFNonexistentItemException {
      message?: errorMessage;
    }
    export interface WAFReferencedItemException {
      message?: errorMessage;
    }
    export interface WAFStaleDataException {
      message?: errorMessage;
    }
    export interface WafAction {
      /** Specifies how you want AWS WAF to respond to requests that match the settings in
a Rule . Valid settings include the following:

&amp;#42; ALLOW : AWS WAF allows requests
* BLOCK : AWS WAF blocks requests
* COUNT : AWS WAF increments a counter of the requests that match all of the
 conditions in the rule. AWS WAF then continues to inspect the web request
 based on the remaining rules in the web ACL. You can&#x27;t specify COUNT for the
 default action for a WebACL . **/
      Type: WafActionType;
    }
    export interface WebACL {
      /** A unique identifier for a WebACL . You use WebACLId to get information about a 
WebACL (see GetWebACL ), update a WebACL (see UpdateWebACL , and delete a WebACL 
from AWS WAF (see DeleteWebACL ).

WebACLId is returned by CreateWebACL and by ListWebACLs . **/
      WebACLId: ResourceId;
      /** A friendly name or description of the WebACL . You can&#x27;t change the name of a 
WebACL after you create it. **/
      Name?: ResourceName;
      MetricName?: MetricName;
      /** The action to perform if none of the Rules contained in the WebACL match. The
action is specified by the WafAction object. **/
      DefaultAction: WafAction;
      /** An array that contains the action for each Rule in a WebACL , the priority of
the Rule , and the ID of the Rule . **/
      Rules: ActivatedRules;
    }
    export interface WebACLSummary {
      /** A unique identifier for a WebACL . You use WebACLId to get information about a 
WebACL (see GetWebACL ), update a WebACL (see UpdateWebACL , and delete a WebACL 
from AWS WAF (see DeleteWebACL ).

WebACLId is returned by CreateWebACL and by ListWebACLs . **/
      WebACLId: ResourceId;
      /** A friendly name or description of the WebACL . You can&#x27;t change the name of a 
WebACL after you create it. **/
      Name: ResourceName;
    }
    export interface WebACLUpdate {
      /** Specifies whether to insert a Rule into or delete a Rule from a WebACL . **/
      Action: ChangeAction;
      ActivatedRule: ActivatedRule;
    }
  }
}
