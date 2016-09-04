// Type definitions for aws-sdk - AWS Security Token Service
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

// COMMENTED <reference path="./aws-sdk.d.ts" />

declare module "aws-sdk" {

  /**
    * apiVersion: 2011-06-15
    * endpointPrefix: sts
    * serviceAbbreviation: AWS STS
    * signatureVersion: v4
    * protocol: query
    *
    * AWS Security Token Service The AWS Security Token Service (STS) is a web service
 that enables you to request temporary, limited-privilege credentials for AWS
 Identity and Access Management (IAM) users or for users that you authenticate
 (federated users). This guide provides descriptions of the STS API. For more
 detailed information about using this service, go to Temporary Security
 Credentials
 [http://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp.html]. 
 
  As an alternative to using the API, you can use one of the AWS SDKs, which
 consist of libraries and sample code for various programming languages and
 platforms (Java, Ruby, .NET, iOS, Android, etc.). The SDKs provide a convenient
 way to create programmatic access to STS. For example, the SDKs take care of
 cryptographically signing requests, managing errors, and retrying requests
 automatically. For information about the AWS SDKs, including how to download and
 install them, see the Tools for Amazon Web Services page
 [http://aws.amazon.com/tools/]. 
 
 For information about setting up signatures and authorization through the API,
 go to Signing AWS API Requests
 [http://docs.aws.amazon.com/general/latest/gr/signing_aws_api_requests.html] in
 the AWS General Reference. For general information about the Query API, go to 
 Making Query Requests
 [http://docs.aws.amazon.com/IAM/latest/UserGuide/IAM_UsingQueryAPI.html] in 
 Using IAM. For information about using security tokens with other AWS products,
 go to AWS Services That Work with IAM
 [http://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-services-that-work-with-iam.html] 
 in the IAM User Guide. 
 
 If you&#x27;re new to AWS and need additional technical information about a specific
 AWS product, you can find the product&#x27;s technical documentation at 
 http://aws.amazon.com/documentation/ [http://aws.amazon.com/documentation/]. 
 
  Endpoints 
 
 The AWS Security Token Service (STS) has a default endpoint of
 https://sts.amazonaws.com that maps to the US East (N. Virginia) region.
 Additional regions are available and are activated by default. For more
 information, see Activating and Deactivating AWS STS in an AWS Region
 [http://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html] 
 in the IAM User Guide.
 
 For information about STS endpoints, see Regions and Endpoints
 [http://docs.aws.amazon.com/general/latest/gr/rande.html#sts_region] in the AWS
 General Reference.
 
  Recording API requests 
 
 STS supports AWS CloudTrail, which is a service that records AWS calls for your
 AWS account and delivers log files to an Amazon S3 bucket. By using information
 collected by CloudTrail, you can determine what requests were successfully made
 to STS, who made the request, when it was made, and so on. To learn more about
 CloudTrail, including how to turn it on and find your log files, see the AWS
 CloudTrail User Guide
 [http://docs.aws.amazon.com/awscloudtrail/latest/userguide/what_is_cloud_trail_top_level.html]
 .
    *
    */
  export class STS extends Service {
    constructor(options?: any);
    endpoint: Endpoint;
    /**
     * Returns a set of temporary security credentials (consisting of an access key ID,
a secret access key, and a security token) that you can use to access AWS
resources that you might not normally have access to. Typically, you use 
AssumeRole for cross-account access or federation. For a comparison of 
AssumeRole with the other APIs that produce temporary credentials, see 
Requesting Temporary Security Credentials
[http://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html] 
and Comparing the AWS STS APIs
[http://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html#stsapi_comparison] 
in the IAM User Guide.

 Important: You cannot call AssumeRole by using AWS root account credentials;
access is denied. You must use credentials for an IAM user or an IAM role to
call AssumeRole. 

For cross-account access, imagine that you own multiple accounts and need to
access resources in each account. You could create long-term credentials in each
account to access those resources. However, managing all those credentials and
remembering which one can access which account can be time consuming. Instead,
you can create one set of long-term credentials in one account and then use
temporary security credentials to access all the other accounts by assuming
roles in those accounts. For more information about roles, see IAM Roles
(Delegation and Federation)
[http://docs.aws.amazon.com/IAM/latest/UserGuide/roles-toplevel.html] in the IAM
User Guide. 

For federation, you can, for example, grant single sign-on access to the AWS
Management Console. If you already have an identity and authentication system in
your corporate network, you don&#x27;t have to recreate user identities in AWS in
order to grant those user identities access to AWS. Instead, after a user has
been authenticated, you call AssumeRole (and specify the role with the
appropriate permissions) to get temporary security credentials for that user.
With those temporary security credentials, you construct a sign-in URL that
users can use to access the console. For more information, see Common Scenarios
for Temporary Credentials
[http://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp.html#sts-introduction] 
in the IAM User Guide.

The temporary security credentials are valid for the duration that you specified
when calling AssumeRole, which can be from 900 seconds (15 minutes) to a maximum
of 3600 seconds (1 hour). The default is 1 hour. 

The temporary security credentials created by AssumeRole can be used to make API
calls to any AWS service with the following exception: you cannot call the STS
service&#x27;s GetFederationToken or GetSessionToken APIs.

Optionally, you can pass an IAM access policy to this operation. If you choose
not to pass a policy, the temporary security credentials that are returned by
the operation have the permissions that are defined in the access policy of the
role that is being assumed. If you pass a policy to this operation, the
temporary security credentials that are returned by the operation have the
permissions that are allowed by both the access policy of the role that is being
assumed, and the policy that you pass. This gives you a way to further restrict
the permissions for the resulting temporary security credentials. You cannot use
the passed policy to grant permissions that are in excess of those allowed by
the access policy of the role that is being assumed. For more information, see 
Permissions for AssumeRole, AssumeRoleWithSAML, and AssumeRoleWithWebIdentity
[http://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_control-access_assumerole.html] 
in the IAM User Guide.

To assume a role, your AWS account must be trusted by the role. The trust
relationship is defined in the role&#x27;s trust policy when the role is created.
That trust policy states which accounts are allowed to delegate access to this
account&#x27;s role.

The user who wants to access the role must also have permissions delegated from
the role&#x27;s administrator. If the user is in a different account than the role,
then the user&#x27;s administrator must attach a policy that allows the user to call
AssumeRole on the ARN of the role in the other account. If the user is in the
same account as the role, then you can either attach a policy to the user
(identical to the previous different account user), or you can add the user as a
principal directly in the role&#x27;s trust policy

 Using MFA with AssumeRole 

You can optionally include multi-factor authentication (MFA) information when
you call AssumeRole. This is useful for cross-account scenarios in which you
want to make sure that the user who is assuming the role has been authenticated
using an AWS MFA device. In that scenario, the trust policy of the role being
assumed includes a condition that tests for MFA authentication; if the caller
does not include valid MFA information, the request to assume the role is
denied. The condition in a trust policy that tests for MFA authentication might
look like the following example.

 &quot;Condition&quot;: {&quot;Bool&quot;: {&quot;aws:MultiFactorAuthPresent&quot;: true}} 

For more information, see Configuring MFA-Protected API Access
[http://docs.aws.amazon.com/IAM/latest/UserGuide/MFAProtectedAPI.html] in the 
IAM User Guide guide.

To use MFA with AssumeRole, you pass values for the SerialNumber and TokenCode 
parameters. The SerialNumber value identifies the user&#x27;s hardware or virtual MFA
device. The TokenCode is the time-based one-time password (TOTP) that the MFA
devices produces.
     *
     * @error MalformedPolicyDocumentException   
     * @error PackedPolicyTooLargeException   
     * @error RegionDisabledException   
     */
    assumeRole(params: STS.AssumeRoleRequest, callback?: (err: STS.MalformedPolicyDocumentException | STS.PackedPolicyTooLargeException | STS.RegionDisabledException | any, data: STS.AssumeRoleResponse | any) => void): Request<STS.AssumeRoleResponse | any, STS.MalformedPolicyDocumentException | STS.PackedPolicyTooLargeException | STS.RegionDisabledException | any>;
    /**
     * Returns a set of temporary security credentials for users who have been
authenticated via a SAML authentication response. This operation provides a
mechanism for tying an enterprise identity store or directory to role-based AWS
access without user-specific credentials or configuration. For a comparison of 
AssumeRoleWithSAML with the other APIs that produce temporary credentials, see 
Requesting Temporary Security Credentials
[http://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html] 
and Comparing the AWS STS APIs
[http://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html#stsapi_comparison] 
in the IAM User Guide.

The temporary security credentials returned by this operation consist of an
access key ID, a secret access key, and a security token. Applications can use
these temporary security credentials to sign calls to AWS services.

The temporary security credentials are valid for the duration that you specified
when calling AssumeRole, or until the time specified in the SAML authentication
response&#x27;s SessionNotOnOrAfter value, whichever is shorter. The duration can be
from 900 seconds (15 minutes) to a maximum of 3600 seconds (1 hour). The default
is 1 hour.

The temporary security credentials created by AssumeRoleWithSAML can be used to
make API calls to any AWS service with the following exception: you cannot call
the STS service&#x27;s GetFederationToken or GetSessionToken APIs.

Optionally, you can pass an IAM access policy to this operation. If you choose
not to pass a policy, the temporary security credentials that are returned by
the operation have the permissions that are defined in the access policy of the
role that is being assumed. If you pass a policy to this operation, the
temporary security credentials that are returned by the operation have the
permissions that are allowed by the intersection of both the access policy of
the role that is being assumed, and the policy that you pass. This means that
both policies must grant the permission for the action to be allowed. This gives
you a way to further restrict the permissions for the resulting temporary
security credentials. You cannot use the passed policy to grant permissions that
are in excess of those allowed by the access policy of the role that is being
assumed. For more information, see Permissions for AssumeRole,
AssumeRoleWithSAML, and AssumeRoleWithWebIdentity
[http://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_control-access_assumerole.html] 
in the IAM User Guide.

Before your application can call AssumeRoleWithSAML, you must configure your
SAML identity provider (IdP) to issue the claims required by AWS. Additionally,
you must use AWS Identity and Access Management (IAM) to create a SAML provider
entity in your AWS account that represents your identity provider, and create an
IAM role that specifies this SAML provider in its trust policy. 

Calling AssumeRoleWithSAML does not require the use of AWS security credentials.
The identity of the caller is validated by using keys in the metadata document
that is uploaded for the SAML provider entity for your identity provider. 

Calling AssumeRoleWithSAML can result in an entry in your AWS CloudTrail logs.
The entry includes the value in the NameID element of the SAML assertion. We
recommend that you use a NameIDType that is not associated with any personally
identifiable information (PII). For example, you could instead use the
Persistent Identifier (urn:oasis:names:tc:SAML:2.0:nameid-format:persistent).

For more information, see the following resources:

 &amp;#42;   About SAML 2.0-based Federation
   [http://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_saml.html] 
   in the IAM User Guide. 
   
   
 *   Creating SAML Identity Providers
   [http://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_create_saml.html] 
   in the IAM User Guide. 
   
   
 *   Configuring a Relying Party and Claims
   [http://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_create_saml_relying-party.html] 
   in the IAM User Guide. 
   
   
 *   Creating a Role for SAML 2.0 Federation
   [http://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-idp_saml.html] 
   in the IAM User Guide.
     *
     * @error MalformedPolicyDocumentException   
     * @error PackedPolicyTooLargeException   
     * @error IDPRejectedClaimException   
     * @error InvalidIdentityTokenException   
     * @error ExpiredTokenException   
     * @error RegionDisabledException   
     */
    assumeRoleWithSAML(params: STS.AssumeRoleWithSAMLRequest, callback?: (err: STS.MalformedPolicyDocumentException | STS.PackedPolicyTooLargeException | STS.IDPRejectedClaimException | STS.InvalidIdentityTokenException | STS.ExpiredTokenException | STS.RegionDisabledException | any, data: STS.AssumeRoleWithSAMLResponse | any) => void): Request<STS.AssumeRoleWithSAMLResponse | any, STS.MalformedPolicyDocumentException | STS.PackedPolicyTooLargeException | STS.IDPRejectedClaimException | STS.InvalidIdentityTokenException | STS.ExpiredTokenException | STS.RegionDisabledException | any>;
    /**
     * Returns a set of temporary security credentials for users who have been
authenticated in a mobile or web application with a web identity provider, such
as Amazon Cognito, Login with Amazon, Facebook, Google, or any OpenID
Connect-compatible identity provider.

For mobile applications, we recommend that you use Amazon Cognito. You can use
Amazon Cognito with the AWS SDK for iOS [http://aws.amazon.com/sdkforios/] and
the AWS SDK for Android [http://aws.amazon.com/sdkforandroid/] to uniquely
identify a user and supply the user with a consistent identity throughout the
lifetime of an application.

To learn more about Amazon Cognito, see Amazon Cognito Overview
[http://docs.aws.amazon.com/mobile/sdkforandroid/developerguide/cognito-auth.html#d0e840] 
in the AWS SDK for Android Developer Guide guide and Amazon Cognito Overview
[http://docs.aws.amazon.com/mobile/sdkforios/developerguide/cognito-auth.html#d0e664] 
in the AWS SDK for iOS Developer Guide.

Calling AssumeRoleWithWebIdentity does not require the use of AWS security
credentials. Therefore, you can distribute an application (for example, on
mobile devices) that requests temporary security credentials without including
long-term AWS credentials in the application, and without deploying server-based
proxy services that use long-term AWS credentials. Instead, the identity of the
caller is validated by using a token from the web identity provider. For a
comparison of AssumeRoleWithWebIdentity with the other APIs that produce
temporary credentials, see Requesting Temporary Security Credentials
[http://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html] 
and Comparing the AWS STS APIs
[http://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html#stsapi_comparison] 
in the IAM User Guide.

The temporary security credentials returned by this API consist of an access key
ID, a secret access key, and a security token. Applications can use these
temporary security credentials to sign calls to AWS service APIs.

The credentials are valid for the duration that you specified when calling 
AssumeRoleWithWebIdentity, which can be from 900 seconds (15 minutes) to a
maximum of 3600 seconds (1 hour). The default is 1 hour. 

The temporary security credentials created by AssumeRoleWithWebIdentity can be
used to make API calls to any AWS service with the following exception: you
cannot call the STS service&#x27;s GetFederationToken or GetSessionToken APIs.

Optionally, you can pass an IAM access policy to this operation. If you choose
not to pass a policy, the temporary security credentials that are returned by
the operation have the permissions that are defined in the access policy of the
role that is being assumed. If you pass a policy to this operation, the
temporary security credentials that are returned by the operation have the
permissions that are allowed by both the access policy of the role that is being
assumed, and the policy that you pass. This gives you a way to further restrict
the permissions for the resulting temporary security credentials. You cannot use
the passed policy to grant permissions that are in excess of those allowed by
the access policy of the role that is being assumed. For more information, see 
Permissions for AssumeRole, AssumeRoleWithSAML, and AssumeRoleWithWebIdentity
[http://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_control-access_assumerole.html] 
in the IAM User Guide.

Before your application can call AssumeRoleWithWebIdentity, you must have an
identity token from a supported identity provider and create a role that the
application can assume. The role that your application assumes must trust the
identity provider that is associated with the identity token. In other words,
the identity provider must be specified in the role&#x27;s trust policy. 

Calling AssumeRoleWithWebIdentity can result in an entry in your AWS CloudTrail
logs. The entry includes the Subject
[http://openid.net/specs/openid-connect-core-1_0.html#Claims] of the provided
Web Identity Token. We recommend that you avoid using any personally
identifiable information (PII) in this field. For example, you could instead use
a GUID or a pairwise identifier, as suggested in the OIDC specification
[http://openid.net/specs/openid-connect-core-1_0.html#SubjectIDTypes].

For more information about how to use web identity federation and the 
AssumeRoleWithWebIdentity API, see the following resources: 

 &amp;#42;   Using Web Identity Federation APIs for Mobile Apps
   [http://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_oidc_manual] 
   and Federation Through a Web-based Identity Provider
   [http://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html#api_assumerolewithwebidentity]
   . 
   
   
 *   Web Identity Federation Playground
   [https://web-identity-federation-playground.s3.amazonaws.com/index.html].
   This interactive website lets you walk through the process of authenticating
   via Login with Amazon, Facebook, or Google, getting temporary security
   credentials, and then using those credentials to make a request to AWS. 
   
   
 *   AWS SDK for iOS [http://aws.amazon.com/sdkforios/] and AWS SDK for Android
   [http://aws.amazon.com/sdkforandroid/]. These toolkits contain sample apps
   that show how to invoke the identity providers, and then how to use the
   information from these providers to get and use temporary security
   credentials. 
   
   
 *   Web Identity Federation with Mobile Applications
   [http://aws.amazon.com/articles/4617974389850313]. This article discusses web
   identity federation and shows an example of how to use web identity
   federation to get access to content in Amazon S3.
     *
     * @error MalformedPolicyDocumentException   
     * @error PackedPolicyTooLargeException   
     * @error IDPRejectedClaimException   
     * @error IDPCommunicationErrorException   
     * @error InvalidIdentityTokenException   
     * @error ExpiredTokenException   
     * @error RegionDisabledException   
     */
    assumeRoleWithWebIdentity(params: STS.AssumeRoleWithWebIdentityRequest, callback?: (err: STS.MalformedPolicyDocumentException | STS.PackedPolicyTooLargeException | STS.IDPRejectedClaimException | STS.IDPCommunicationErrorException | STS.InvalidIdentityTokenException | STS.ExpiredTokenException | STS.RegionDisabledException | any, data: STS.AssumeRoleWithWebIdentityResponse | any) => void): Request<STS.AssumeRoleWithWebIdentityResponse | any, STS.MalformedPolicyDocumentException | STS.PackedPolicyTooLargeException | STS.IDPRejectedClaimException | STS.IDPCommunicationErrorException | STS.InvalidIdentityTokenException | STS.ExpiredTokenException | STS.RegionDisabledException | any>;
    /**
     * Decodes additional information about the authorization status of a request from
an encoded message returned in response to an AWS request.

For example, if a user is not authorized to perform an action that he or she has
requested, the request returns a Client.UnauthorizedOperation response (an HTTP
403 response). Some AWS actions additionally return an encoded message that can
provide details about this authorization failure. 

Only certain AWS actions return an encoded authorization message. The
documentation for an individual action indicates whether that action returns an
encoded message in addition to returning an HTTP code.

The message is encoded because the details of the authorization status can
constitute privileged information that the user who requested the action should
not see. To decode an authorization status message, a user must be granted
permissions via an IAM policy to request the DecodeAuthorizationMessage (
sts:DecodeAuthorizationMessage) action. 

The decoded message includes the following type of information:

 &amp;#42;  Whether the request was denied due to an explicit deny or due to the absence
   of an explicit allow. For more information, see Determining Whether a Request
   is Allowed or Denied
   [http://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html#policy-eval-denyallow] 
   in the IAM User Guide. 
   
   
 *  The principal who made the request.
   
   
 *  The requested action.
   
   
 *  The requested resource.
   
   
 *  The values of condition keys in the context of the user&#x27;s request.
     *
     * @error InvalidAuthorizationMessageException   
     */
    decodeAuthorizationMessage(params: STS.DecodeAuthorizationMessageRequest, callback?: (err: STS.InvalidAuthorizationMessageException | any, data: STS.DecodeAuthorizationMessageResponse | any) => void): Request<STS.DecodeAuthorizationMessageResponse | any, STS.InvalidAuthorizationMessageException | any>;
    /**
     * Returns details about the IAM identity whose credentials are used to call the
API.
     *
     */
    getCallerIdentity(params: STS.GetCallerIdentityRequest, callback?: (err: any, data: STS.GetCallerIdentityResponse | any) => void): Request<STS.GetCallerIdentityResponse | any, any>;
    /**
     * Returns a set of temporary security credentials (consisting of an access key ID,
a secret access key, and a security token) for a federated user. A typical use
is in a proxy application that gets temporary security credentials on behalf of
distributed applications inside a corporate network. Because you must call the 
GetFederationToken action using the long-term security credentials of an IAM
user, this call is appropriate in contexts where those credentials can be safely
stored, usually in a server-based application. For a comparison of 
GetFederationToken with the other APIs that produce temporary credentials, see 
Requesting Temporary Security Credentials
[http://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html] 
and Comparing the AWS STS APIs
[http://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html#stsapi_comparison] 
in the IAM User Guide.

 If you are creating a mobile-based or browser-based app that can authenticate
users using a web identity provider like Login with Amazon, Facebook, Google, or
an OpenID Connect-compatible identity provider, we recommend that you use Amazon
Cognito [http://aws.amazon.com/cognito/] or AssumeRoleWithWebIdentity. For more
information, see Federation Through a Web-based Identity Provider
[http://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html#api_assumerolewithwebidentity]
.

The GetFederationToken action must be called by using the long-term AWS security
credentials of an IAM user. You can also call GetFederationToken using the
security credentials of an AWS root account, but we do not recommended it.
Instead, we recommend that you create an IAM user for the purpose of the proxy
application and then attach a policy to the IAM user that limits federated users
to only the actions and resources that they need access to. For more
information, see IAM Best Practices
[http://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html] in the IAM
User Guide. 

The temporary security credentials that are obtained by using the long-term
credentials of an IAM user are valid for the specified duration, from 900
seconds (15 minutes) up to a maximium of 129600 seconds (36 hours). The default
is 43200 seconds (12 hours). Temporary credentials that are obtained by using
AWS root account credentials have a maximum duration of 3600 seconds (1 hour).

The temporary security credentials created by GetFederationToken can be used to
make API calls to any AWS service with the following exceptions:

 &amp;#42;  You cannot use these credentials to call any IAM APIs.
   
   
 *  You cannot call any STS APIs.
   
   

 Permissions 

The permissions for the temporary security credentials returned by 
GetFederationToken are determined by a combination of the following: 

 *  The policy or policies that are attached to the IAM user whose credentials
   are used to call GetFederationToken.
   
   
 *  The policy that is passed as a parameter in the call.
   
   

The passed policy is attached to the temporary security credentials that result
from the GetFederationToken API call--that is, to the federated user. When the
federated user makes an AWS request, AWS evaluates the policy attached to the
federated user in combination with the policy or policies attached to the IAM
user whose credentials were used to call GetFederationToken. AWS allows the
federated user&#x27;s request only when both the federated user and the IAM user are
explicitly allowed to perform the requested action. The passed policy cannot
grant more permissions than those that are defined in the IAM user policy.

A typical use case is that the permissions of the IAM user whose credentials are
used to call GetFederationToken are designed to allow access to all the actions
and resources that any federated user will need. Then, for individual users, you
pass a policy to the operation that scopes down the permissions to a level
that&#x27;s appropriate to that individual user, using a policy that allows only a
subset of permissions that are granted to the IAM user. 

If you do not pass a policy, the resulting temporary security credentials have
no effective permissions. The only exception is when the temporary security
credentials are used to access a resource that has a resource-based policy that
specifically allows the federated user to access the resource.

For more information about how permissions work, see Permissions for
GetFederationToken
[http://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_control-access_getfederationtoken.html]
. For information about using GetFederationToken to create temporary security
credentials, see GetFederationToken—Federation Through a Custom Identity Broker
[http://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html#api_getfederationtoken]
.
     *
     * @error MalformedPolicyDocumentException   
     * @error PackedPolicyTooLargeException   
     * @error RegionDisabledException   
     */
    getFederationToken(params: STS.GetFederationTokenRequest, callback?: (err: STS.MalformedPolicyDocumentException | STS.PackedPolicyTooLargeException | STS.RegionDisabledException | any, data: STS.GetFederationTokenResponse | any) => void): Request<STS.GetFederationTokenResponse | any, STS.MalformedPolicyDocumentException | STS.PackedPolicyTooLargeException | STS.RegionDisabledException | any>;
    /**
     * Returns a set of temporary credentials for an AWS account or IAM user. The
credentials consist of an access key ID, a secret access key, and a security
token. Typically, you use GetSessionToken if you want to use MFA to protect
programmatic calls to specific AWS APIs like Amazon EC2 StopInstances.
MFA-enabled IAM users would need to call GetSessionToken and submit an MFA code
that is associated with their MFA device. Using the temporary security
credentials that are returned from the call, IAM users can then make
programmatic calls to APIs that require MFA authentication. If you do not supply
a correct MFA code, then the API returns an access denied error. For a
comparison of GetSessionToken with the other APIs that produce temporary
credentials, see Requesting Temporary Security Credentials
[http://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html] 
and Comparing the AWS STS APIs
[http://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html#stsapi_comparison] 
in the IAM User Guide.

The GetSessionToken action must be called by using the long-term AWS security
credentials of the AWS account or an IAM user. Credentials that are created by
IAM users are valid for the duration that you specify, from 900 seconds (15
minutes) up to a maximum of 129600 seconds (36 hours), with a default of 43200
seconds (12 hours); credentials that are created by using account credentials
can range from 900 seconds (15 minutes) up to a maximum of 3600 seconds (1
hour), with a default of 1 hour. 

The temporary security credentials created by GetSessionToken can be used to
make API calls to any AWS service with the following exceptions:

 &amp;#42;  You cannot call any IAM APIs unless MFA authentication information is
   included in the request.
   
   
 *  You cannot call any STS API except AssumeRole.
   
   

We recommend that you do not call GetSessionToken with root account credentials.
Instead, follow our best practices
[http://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html#create-iam-users] 
by creating one or more IAM users, giving them the necessary permissions, and
using IAM users for everyday interaction with AWS. 

The permissions associated with the temporary security credentials returned by 
GetSessionToken are based on the permissions associated with account or IAM user
whose credentials are used to call the action. If GetSessionToken is called
using root account credentials, the temporary credentials have root account
permissions. Similarly, if GetSessionToken is called using the credentials of an
IAM user, the temporary credentials have the same permissions as the IAM user. 

For more information about using GetSessionToken to create temporary
credentials, go to Temporary Credentials for Users in Untrusted Environments
[http://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html#api_getsessiontoken] 
in the IAM User Guide.
     *
     * @error RegionDisabledException   
     */
    getSessionToken(params: STS.GetSessionTokenRequest, callback?: (err: STS.RegionDisabledException | any, data: STS.GetSessionTokenResponse | any) => void): Request<STS.GetSessionTokenResponse | any, STS.RegionDisabledException | any>;

    /**
     * Found on JS Sources - Sorry for the inconvenience :)
     *
     * *
     * @overload credentialsFrom(data, credentials = null)
     *   Creates a credentials object from STS response data containing
     *   credentials information. Useful for quickly setting AWS credentials.
     *
     *   @note This is a low-level utility function. If you want to load temporary
     *     credentials into your process for subsequent requests to AWS resources,
     *     you should use {AWS.TemporaryCredentials} instead.
     *   @param data [map] data retrieved from a call to {getFederatedToken},
     *     {getSessionToken}, {assumeRole}, or {assumeRoleWithWebIdentity}.
     *   @param credentials [AWS.Credentials] an optional credentials object to
     *     fill instead of creating a new object. Useful when modifying an
     *     existing credentials object from a refresh call.
     *   @return [AWS.TemporaryCredentials] the set of temporary credentials
     *     loaded from a raw STS operation response.
     *   @example Using credentialsFrom to load global AWS credentials
     *     var sts = new AWS.STS();
     *     sts.getSessionToken(function (err, data) {
     *       if (err) console.log("Error getting credentials");
     *       else {
     *         AWS.config.credentials = sts.credentialsFrom(data);
     *       }
     *     });
     *   @see AWS.TemporaryCredentials
   
     **/
    credentialsFrom(...args: any[]): any
    assumeRoleWithWebIdentity(...args: any[]): any
    assumeRoleWithSAML(...args: any[]): any
  }

  export module STS {

    export type Audience = string;

    export type Issuer = string;

    export type NameQualifier = string;

    export type SAMLAssertionType = string;

    export type Subject = string;

    export type SubjectType = string;

    export type accessKeyIdType = string;

    export type accessKeySecretType = string;

    export type accountType = string;

    export type arnType = string;

    export type assumedRoleIdType = string;

    export type clientTokenType = string;

    export type dateType = number;

    export type decodedMessageType = string;

    export type durationSecondsType = number;

    export type encodedMessageType = string;

    export type expiredIdentityTokenMessage = string;

    export type externalIdType = string;

    export type federatedIdType = string;

    export type idpCommunicationErrorMessage = string;

    export type idpRejectedClaimMessage = string;

    export type invalidAuthorizationMessage = string;

    export type invalidIdentityTokenMessage = string;

    export type malformedPolicyDocumentMessage = string;

    export type nonNegativeIntegerType = number;

    export type packedPolicyTooLargeMessage = string;

    export type regionDisabledMessage = string;

    export type roleDurationSecondsType = number;

    export type roleSessionNameType = string;

    export type serialNumberType = string;

    export type sessionPolicyDocumentType = string;

    export type tokenCodeType = string;

    export type tokenType = string;

    export type urlType = string;

    export type userIdType = string;

    export type userNameType = string;

    export type webIdentitySubjectType = string;

    export interface AssumeRoleRequest {
      /** The Amazon Resource Name (ARN) of the role to assume. **/
      RoleArn: arnType;
      /** An identifier for the assumed role session.

Use the role session name to uniquely identify a session when the same role is
assumed by different principals or for different reasons. In cross-account
scenarios, the role session name is visible to, and can be logged by the account
that owns the role. The role session name is also used in the ARN of the assumed
role principal. This means that subsequent cross-account API requests using the
temporary security credentials will expose the role session name to the external
account in their CloudTrail logs.

The format for this parameter, as described by its regex pattern, is a string of
characters consisting of upper- and lower-case alphanumeric characters with no
spaces. You can also include underscores or any of the following characters:
=,.@- **/
      RoleSessionName: roleSessionNameType;
      /** An IAM policy in JSON format.

This parameter is optional. If you pass a policy, the temporary security
credentials that are returned by the operation have the permissions that are
allowed by both (the intersection of) the access policy of the role that is
being assumed, and the policy that you pass. This gives you a way to further
restrict the permissions for the resulting temporary security credentials. You
cannot use the passed policy to grant permissions that are in excess of those
allowed by the access policy of the role that is being assumed. For more
information, see Permissions for AssumeRole, AssumeRoleWithSAML, and
AssumeRoleWithWebIdentity
[http://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_control-access_assumerole.html] 
in the IAM User Guide.

The format for this parameter, as described by its regex pattern, is a string of
characters up to 2048 characters in length. The characters can be any ASCII
character from the space character to the end of the valid character list
(\u0020-\u00FF). It can also include the tab (\u0009), linefeed (\u000A), and
carriage return (\u000D) characters.

The policy plain text must be 2048 bytes or shorter. However, an internal
conversion compresses it into a packed binary format with a separate limit. The
PackedPolicySize response element indicates by percentage how close to the upper
size limit the policy is, with 100% equaling the maximum allowed size. **/
      Policy?: sessionPolicyDocumentType;
      /** The duration, in seconds, of the role session. The value can range from 900
seconds (15 minutes) to 3600 seconds (1 hour). By default, the value is set to
3600 seconds.

This is separate from the duration of a console session that you might request
using the returned credentials. The request to the federation endpoint for a
console sign-in token takes a SessionDuration parameter that specifies the
maximum length of the console session, separately from the DurationSeconds 
parameter on this API. For more information, see Creating a URL that Enables
Federated Users to Access the AWS Management Console
[http://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_enable-console-custom-url.html] 
in the IAM User Guide. **/
      DurationSeconds?: roleDurationSecondsType;
      /** A unique identifier that is used by third parties when assuming roles in their
customers&#x27; accounts. For each role that the third party can assume, they should
instruct their customers to ensure the role&#x27;s trust policy checks for the
external ID that the third party generated. Each time the third party assumes
the role, they should pass the customer&#x27;s external ID. The external ID is useful
in order to help third parties bind a role to the customer who created it. For
more information about the external ID, see How to Use an External ID When
Granting Access to Your AWS Resources to a Third Party
[http://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-user_externalid.html] 
in the IAM User Guide.

The format for this parameter, as described by its regex pattern, is a string of
characters consisting of upper- and lower-case alphanumeric characters with no
spaces. You can also include underscores or any of the following characters:
=,.@:\/- **/
      ExternalId?: externalIdType;
      /** The identification number of the MFA device that is associated with the user who
is making the AssumeRole call. Specify this value if the trust policy of the
role being assumed includes a condition that requires MFA authentication. The
value is either the serial number for a hardware device (such as GAHT12345678)
or an Amazon Resource Name (ARN) for a virtual device (such as 
arn:aws:iam::123456789012:mfa/user).

The format for this parameter, as described by its regex pattern, is a string of
characters consisting of upper- and lower-case alphanumeric characters with no
spaces. You can also include underscores or any of the following characters:
=,.@- **/
      SerialNumber?: serialNumberType;
      /** The value provided by the MFA device, if the trust policy of the role being
assumed requires MFA (that is, if the policy includes a condition that tests for
MFA). If the role being assumed requires MFA and if the TokenCode value is
missing or expired, the AssumeRole call returns an &quot;access denied&quot; error.

The format for this parameter, as described by its regex pattern, is a sequence
of six numeric digits. **/
      TokenCode?: tokenCodeType;
    }
    export interface AssumeRoleResponse {
      /** The temporary security credentials, which include an access key ID, a secret
access key, and a security (or session) token.

Note: The size of the security token that STS APIs return is not fixed. We
strongly recommend that you make no assumptions about the maximum size. As of
this writing, the typical size is less than 4096 bytes, but that can vary. Also,
future updates to AWS might require larger sizes. **/
      Credentials?: Credentials;
      /** The Amazon Resource Name (ARN) and the assumed role ID, which are identifiers
that you can use to refer to the resulting temporary security credentials. For
example, you can reference these credentials as a principal in a resource-based
policy by using the ARN or assumed role ID. The ARN and ID include the 
RoleSessionName that you specified when you called AssumeRole. **/
      AssumedRoleUser?: AssumedRoleUser;
      /** A percentage value that indicates the size of the policy in packed form. The
service rejects any policy with a packed size greater than 100 percent, which
means the policy exceeded the allowed space. **/
      PackedPolicySize?: nonNegativeIntegerType;
    }
    export interface AssumeRoleWithSAMLRequest {
      /** The Amazon Resource Name (ARN) of the role that the caller is assuming. **/
      RoleArn: arnType;
      /** The Amazon Resource Name (ARN) of the SAML provider in IAM that describes the
IdP. **/
      PrincipalArn: arnType;
      /** The base-64 encoded SAML authentication response provided by the IdP.

For more information, see Configuring a Relying Party and Adding Claims
[http://docs.aws.amazon.com/IAM/latest/UserGuide/create-role-saml-IdP-tasks.html] 
in the Using IAM guide. **/
      SAMLAssertion: SAMLAssertionType;
      /** An IAM policy in JSON format.

The policy parameter is optional. If you pass a policy, the temporary security
credentials that are returned by the operation have the permissions that are
allowed by both the access policy of the role that is being assumed, and the
policy that you pass. This gives you a way to further restrict the permissions
for the resulting temporary security credentials. You cannot use the passed
policy to grant permissions that are in excess of those allowed by the access
policy of the role that is being assumed. For more information, Permissions for
AssumeRole, AssumeRoleWithSAML, and AssumeRoleWithWebIdentity
[http://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_control-access_assumerole.html] 
in the IAM User Guide. 

The format for this parameter, as described by its regex pattern, is a string of
characters up to 2048 characters in length. The characters can be any ASCII
character from the space character to the end of the valid character list
(\u0020-\u00FF). It can also include the tab (\u0009), linefeed (\u000A), and
carriage return (\u000D) characters.

The policy plain text must be 2048 bytes or shorter. However, an internal
conversion compresses it into a packed binary format with a separate limit. The
PackedPolicySize response element indicates by percentage how close to the upper
size limit the policy is, with 100% equaling the maximum allowed size. **/
      Policy?: sessionPolicyDocumentType;
      /** The duration, in seconds, of the role session. The value can range from 900
seconds (15 minutes) to 3600 seconds (1 hour). By default, the value is set to
3600 seconds. An expiration can also be specified in the SAML authentication
response&#x27;s SessionNotOnOrAfter value. The actual expiration time is whichever
value is shorter. 

This is separate from the duration of a console session that you might request
using the returned credentials. The request to the federation endpoint for a
console sign-in token takes a SessionDuration parameter that specifies the
maximum length of the console session, separately from the DurationSeconds 
parameter on this API. For more information, see Enabling SAML 2.0 Federated
Users to Access the AWS Management Console
[http://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_enable-console-saml.html] 
in the IAM User Guide. **/
      DurationSeconds?: roleDurationSecondsType;
    }
    export interface AssumeRoleWithSAMLResponse {
      /** The temporary security credentials, which include an access key ID, a secret
access key, and a security (or session) token.

Note: The size of the security token that STS APIs return is not fixed. We
strongly recommend that you make no assumptions about the maximum size. As of
this writing, the typical size is less than 4096 bytes, but that can vary. Also,
future updates to AWS might require larger sizes. **/
      Credentials?: Credentials;
      /** The identifiers for the temporary security credentials that the operation
returns. **/
      AssumedRoleUser?: AssumedRoleUser;
      /** A percentage value that indicates the size of the policy in packed form. The
service rejects any policy with a packed size greater than 100 percent, which
means the policy exceeded the allowed space. **/
      PackedPolicySize?: nonNegativeIntegerType;
      /** The value of the NameID element in the Subject element of the SAML assertion. **/
      Subject?: Subject;
      /** The format of the name ID, as defined by the Format attribute in the NameID 
element of the SAML assertion. Typical examples of the format are transient or 
persistent. 

If the format includes the prefix urn:oasis:names:tc:SAML:2.0:nameid-format,
that prefix is removed. For example, 
urn:oasis:names:tc:SAML:2.0:nameid-format:transient is returned as transient. If
the format includes any other prefix, the format is returned with no
modifications. **/
      SubjectType?: SubjectType;
      /** The value of the Issuer element of the SAML assertion. **/
      Issuer?: Issuer;
      /** The value of the Recipient attribute of the SubjectConfirmationData element of
the SAML assertion. **/
      Audience?: Audience;
      /** A hash value based on the concatenation of the Issuer response value, the AWS
account ID, and the friendly name (the last part of the ARN) of the SAML
provider in IAM. The combination of NameQualifier and Subject can be used to
uniquely identify a federated user. 

The following pseudocode shows how the hash value is calculated:

BASE64 ( SHA1 ( &quot;https://example.com/saml&quot; + &quot;123456789012&quot; + &quot;/MySAMLIdP&quot; ) ) **/
      NameQualifier?: NameQualifier;
    }
    export interface AssumeRoleWithWebIdentityRequest {
      /** The Amazon Resource Name (ARN) of the role that the caller is assuming. **/
      RoleArn: arnType;
      /** An identifier for the assumed role session. Typically, you pass the name or
identifier that is associated with the user who is using your application. That
way, the temporary security credentials that your application will use are
associated with that user. This session name is included as part of the ARN and
assumed role ID in the AssumedRoleUser response element.

The format for this parameter, as described by its regex pattern, is a string of
characters consisting of upper- and lower-case alphanumeric characters with no
spaces. You can also include underscores or any of the following characters:
=,.@- **/
      RoleSessionName: roleSessionNameType;
      /** The OAuth 2.0 access token or OpenID Connect ID token that is provided by the
identity provider. Your application must get this token by authenticating the
user who is using your application with a web identity provider before the
application makes an AssumeRoleWithWebIdentity call. **/
      WebIdentityToken: clientTokenType;
      /** The fully qualified host component of the domain name of the identity provider.

Specify this value only for OAuth 2.0 access tokens. Currently www.amazon.com 
and graph.facebook.com are the only supported identity providers for OAuth 2.0
access tokens. Do not include URL schemes and port numbers.

Do not specify this value for OpenID Connect ID tokens. **/
      ProviderId?: urlType;
      /** An IAM policy in JSON format.

The policy parameter is optional. If you pass a policy, the temporary security
credentials that are returned by the operation have the permissions that are
allowed by both the access policy of the role that is being assumed, and the
policy that you pass. This gives you a way to further restrict the permissions
for the resulting temporary security credentials. You cannot use the passed
policy to grant permissions that are in excess of those allowed by the access
policy of the role that is being assumed. For more information, see Permissions
for AssumeRoleWithWebIdentity
[http://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_control-access_assumerole.html] 
in the IAM User Guide. 

The format for this parameter, as described by its regex pattern, is a string of
characters up to 2048 characters in length. The characters can be any ASCII
character from the space character to the end of the valid character list
(\u0020-\u00FF). It can also include the tab (\u0009), linefeed (\u000A), and
carriage return (\u000D) characters.

The policy plain text must be 2048 bytes or shorter. However, an internal
conversion compresses it into a packed binary format with a separate limit. The
PackedPolicySize response element indicates by percentage how close to the upper
size limit the policy is, with 100% equaling the maximum allowed size. **/
      Policy?: sessionPolicyDocumentType;
      /** The duration, in seconds, of the role session. The value can range from 900
seconds (15 minutes) to 3600 seconds (1 hour). By default, the value is set to
3600 seconds.

This is separate from the duration of a console session that you might request
using the returned credentials. The request to the federation endpoint for a
console sign-in token takes a SessionDuration parameter that specifies the
maximum length of the console session, separately from the DurationSeconds 
parameter on this API. For more information, see Creating a URL that Enables
Federated Users to Access the AWS Management Console
[http://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_enable-console-custom-url.html] 
in the IAM User Guide. **/
      DurationSeconds?: roleDurationSecondsType;
    }
    export interface AssumeRoleWithWebIdentityResponse {
      /** The temporary security credentials, which include an access key ID, a secret
access key, and a security token.

Note: The size of the security token that STS APIs return is not fixed. We
strongly recommend that you make no assumptions about the maximum size. As of
this writing, the typical size is less than 4096 bytes, but that can vary. Also,
future updates to AWS might require larger sizes. **/
      Credentials?: Credentials;
      /** The unique user identifier that is returned by the identity provider. This
identifier is associated with the WebIdentityToken that was submitted with the 
AssumeRoleWithWebIdentity call. The identifier is typically unique to the user
and the application that acquired the WebIdentityToken (pairwise identifier).
For OpenID Connect ID tokens, this field contains the value returned by the
identity provider as the token&#x27;s sub (Subject) claim. **/
      SubjectFromWebIdentityToken?: webIdentitySubjectType;
      /** The Amazon Resource Name (ARN) and the assumed role ID, which are identifiers
that you can use to refer to the resulting temporary security credentials. For
example, you can reference these credentials as a principal in a resource-based
policy by using the ARN or assumed role ID. The ARN and ID include the 
RoleSessionName that you specified when you called AssumeRole. **/
      AssumedRoleUser?: AssumedRoleUser;
      /** A percentage value that indicates the size of the policy in packed form. The
service rejects any policy with a packed size greater than 100 percent, which
means the policy exceeded the allowed space. **/
      PackedPolicySize?: nonNegativeIntegerType;
      /** The issuing authority of the web identity token presented. For OpenID Connect
ID Tokens this contains the value of the iss field. For OAuth 2.0 access tokens,
this contains the value of the ProviderId parameter that was passed in the 
AssumeRoleWithWebIdentity request. **/
      Provider?: Issuer;
      /** The intended audience (also known as client ID) of the web identity token. This
is traditionally the client identifier issued to the application that requested
the web identity token. **/
      Audience?: Audience;
    }
    export interface AssumedRoleUser {
      /** A unique identifier that contains the role ID and the role session name of the
role that is being assumed. The role ID is generated by AWS when the role is
created. **/
      AssumedRoleId: assumedRoleIdType;
      /** The ARN of the temporary security credentials that are returned from the 
AssumeRole action. For more information about ARNs and how to use them in
policies, see IAM Identifiers
[http://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html] in 
Using IAM. **/
      Arn: arnType;
    }
    export interface Credentials {
      /** The access key ID that identifies the temporary security credentials. **/
      AccessKeyId: accessKeyIdType;
      /** The secret access key that can be used to sign requests. **/
      SecretAccessKey: accessKeySecretType;
      /** The token that users must pass to the service API to use the temporary
credentials. **/
      SessionToken: tokenType;
      /** The date on which the current credentials expire. **/
      Expiration: dateType;
    }
    export interface DecodeAuthorizationMessageRequest {
      /** The encoded message that was returned with the response. **/
      EncodedMessage: encodedMessageType;
    }
    export interface DecodeAuthorizationMessageResponse {
      /** An XML document that contains the decoded message. **/
      DecodedMessage?: decodedMessageType;
    }
    export interface ExpiredTokenException {
      message?: expiredIdentityTokenMessage;
    }
    export interface FederatedUser {
      /** The string that identifies the federated user associated with the credentials,
similar to the unique ID of an IAM user. **/
      FederatedUserId: federatedIdType;
      /** The ARN that specifies the federated user that is associated with the
credentials. For more information about ARNs and how to use them in policies,
see IAM Identifiers
[http://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html] in 
Using IAM. **/
      Arn: arnType;
    }
    export interface GetCallerIdentityRequest {
    }
    export interface GetCallerIdentityResponse {
      /** The unique identifier of the calling entity. The exact value depends on the type
of entity making the call. The values returned are those listed in the 
aws:userid column in the Principal table
[http://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_variables.html#principaltable] 
found on the Policy Variables reference page in the IAM User Guide. **/
      UserId?: userIdType;
      /** The AWS account ID number of the account that owns or contains the calling
entity. **/
      Account?: accountType;
      /** The AWS ARN associated with the calling entity. **/
      Arn?: arnType;
    }
    export interface GetFederationTokenRequest {
      /** The name of the federated user. The name is used as an identifier for the
temporary security credentials (such as Bob). For example, you can reference the
federated user name in a resource-based policy, such as in an Amazon S3 bucket
policy.

The format for this parameter, as described by its regex pattern, is a string of
characters consisting of upper- and lower-case alphanumeric characters with no
spaces. You can also include underscores or any of the following characters:
=,.@- **/
      Name: userNameType;
      /** An IAM policy in JSON format that is passed with the GetFederationToken call and
evaluated along with the policy or policies that are attached to the IAM user
whose credentials are used to call GetFederationToken. The passed policy is used
to scope down the permissions that are available to the IAM user, by allowing
only a subset of the permissions that are granted to the IAM user. The passed
policy cannot grant more permissions than those granted to the IAM user. The
final permissions for the federated user are the most restrictive set based on
the intersection of the passed policy and the IAM user policy.

If you do not pass a policy, the resulting temporary security credentials have
no effective permissions. The only exception is when the temporary security
credentials are used to access a resource that has a resource-based policy that
specifically allows the federated user to access the resource.

The format for this parameter, as described by its regex pattern, is a string of
characters up to 2048 characters in length. The characters can be any ASCII
character from the space character to the end of the valid character list
(\u0020-\u00FF). It can also include the tab (\u0009), linefeed (\u000A), and
carriage return (\u000D) characters.

The policy plain text must be 2048 bytes or shorter. However, an internal
conversion compresses it into a packed binary format with a separate limit. The
PackedPolicySize response element indicates by percentage how close to the upper
size limit the policy is, with 100% equaling the maximum allowed size.

For more information about how permissions work, see Permissions for
GetFederationToken
[http://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_control-access_getfederationtoken.html]
. **/
      Policy?: sessionPolicyDocumentType;
      /** The duration, in seconds, that the session should last. Acceptable durations for
federation sessions range from 900 seconds (15 minutes) to 129600 seconds (36
hours), with 43200 seconds (12 hours) as the default. Sessions obtained using
AWS account (root) credentials are restricted to a maximum of 3600 seconds (one
hour). If the specified duration is longer than one hour, the session obtained
by using AWS account (root) credentials defaults to one hour. **/
      DurationSeconds?: durationSecondsType;
    }
    export interface GetFederationTokenResponse {
      /** The temporary security credentials, which include an access key ID, a secret
access key, and a security (or session) token.

Note: The size of the security token that STS APIs return is not fixed. We
strongly recommend that you make no assumptions about the maximum size. As of
this writing, the typical size is less than 4096 bytes, but that can vary. Also,
future updates to AWS might require larger sizes. **/
      Credentials?: Credentials;
      /** Identifiers for the federated user associated with the credentials (such as 
arn:aws:sts::123456789012:federated-user/Bob or 123456789012:Bob). You can use
the federated user&#x27;s ARN in your resource-based policies, such as an Amazon S3
bucket policy. **/
      FederatedUser?: FederatedUser;
      /** A percentage value indicating the size of the policy in packed form. The service
rejects policies for which the packed size is greater than 100 percent of the
allowed value. **/
      PackedPolicySize?: nonNegativeIntegerType;
    }
    export interface GetSessionTokenRequest {
      /** The duration, in seconds, that the credentials should remain valid. Acceptable
durations for IAM user sessions range from 900 seconds (15 minutes) to 129600
seconds (36 hours), with 43200 seconds (12 hours) as the default. Sessions for
AWS account owners are restricted to a maximum of 3600 seconds (one hour). If
the duration is longer than one hour, the session for AWS account owners
defaults to one hour. **/
      DurationSeconds?: durationSecondsType;
      /** The identification number of the MFA device that is associated with the IAM user
who is making the GetSessionToken call. Specify this value if the IAM user has a
policy that requires MFA authentication. The value is either the serial number
for a hardware device (such as GAHT12345678) or an Amazon Resource Name (ARN)
for a virtual device (such as arn:aws:iam::123456789012:mfa/user). You can find
the device for an IAM user by going to the AWS Management Console and viewing
the user&#x27;s security credentials. 

The format for this parameter, as described by its regex pattern, is a string of
characters consisting of upper- and lower-case alphanumeric characters with no
spaces. You can also include underscores or any of the following characters:
=,.@- **/
      SerialNumber?: serialNumberType;
      /** The value provided by the MFA device, if MFA is required. If any policy requires
the IAM user to submit an MFA code, specify this value. If MFA authentication is
required, and the user does not provide a code when requesting a set of
temporary security credentials, the user will receive an &quot;access denied&quot;
response when requesting resources that require MFA authentication.

The format for this parameter, as described by its regex pattern, is a sequence
of six numeric digits. **/
      TokenCode?: tokenCodeType;
    }
    export interface GetSessionTokenResponse {
      /** The temporary security credentials, which include an access key ID, a secret
access key, and a security (or session) token.

Note: The size of the security token that STS APIs return is not fixed. We
strongly recommend that you make no assumptions about the maximum size. As of
this writing, the typical size is less than 4096 bytes, but that can vary. Also,
future updates to AWS might require larger sizes. **/
      Credentials?: Credentials;
    }
    export interface IDPCommunicationErrorException {
      message?: idpCommunicationErrorMessage;
    }
    export interface IDPRejectedClaimException {
      message?: idpRejectedClaimMessage;
    }
    export interface InvalidAuthorizationMessageException {
      message?: invalidAuthorizationMessage;
    }
    export interface InvalidIdentityTokenException {
      message?: invalidIdentityTokenMessage;
    }
    export interface MalformedPolicyDocumentException {
      message?: malformedPolicyDocumentMessage;
    }
    export interface PackedPolicyTooLargeException {
      message?: packedPolicyTooLargeMessage;
    }
    export interface RegionDisabledException {
      message?: regionDisabledMessage;
    }
  }
}
