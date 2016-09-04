// Type definitions for aws-sdk - AWS Identity and Access Management
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

// COMMENTED <reference path="./aws-sdk.d.ts" />

declare module "aws-sdk" {

  /**
    * apiVersion: 2010-05-08
    * endpointPrefix: iam
    * serviceAbbreviation: IAM
    * signatureVersion: v4
    * protocol: query
    *
    * AWS Identity and Access Management AWS Identity and Access Management (IAM) is a
 web service that you can use to manage users and user permissions under your AWS
 account. This guide provides descriptions of IAM actions that you can call
 programmatically. For general information about IAM, see AWS Identity and Access
 Management (IAM) [http://aws.amazon.com/iam/]. For the user guide for IAM, see 
 Using IAM [http://docs.aws.amazon.com/IAM/latest/UserGuide/]. 
 
 AWS provides SDKs that consist of libraries and sample code for various
 programming languages and platforms (Java, Ruby, .NET, iOS, Android, etc.). The
 SDKs provide a convenient way to create programmatic access to IAM and AWS. For
 example, the SDKs take care of tasks such as cryptographically signing requests
 (see below), managing errors, and retrying requests automatically. For
 information about the AWS SDKs, including how to download and install them, see
 the Tools for Amazon Web Services [http://aws.amazon.com/tools/] page. 
 
 We recommend that you use the AWS SDKs to make programmatic API calls to IAM.
 However, you can also use the IAM Query API to make direct calls to the IAM web
 service. To learn more about the IAM Query API, see Making Query Requests
 [http://docs.aws.amazon.com/IAM/latest/UserGuide/IAM_UsingQueryAPI.html] in the 
 Using IAM guide. IAM supports GET and POST requests for all actions. That is,
 the API does not require you to use GET for some actions and POST for others.
 However, GET requests are subject to the limitation size of a URL. Therefore,
 for operations that require larger sizes, use a POST request. 
 
  Signing Requests 
 
 Requests must be signed using an access key ID and a secret access key. We
 strongly recommend that you do not use your AWS account access key ID and secret
 access key for everyday work with IAM. You can use the access key ID and secret
 access key for an IAM user or you can use the AWS Security Token Service to
 generate temporary security credentials and use those to sign requests.
 
 To sign requests, we recommend that you use Signature Version 4
 [http://docs.aws.amazon.com/general/latest/gr/signature-version-4.html]. If you
 have an existing application that uses Signature Version 2, you do not have to
 update it to use Signature Version 4. However, some operations now require
 Signature Version 4. The documentation for operations that require version 4
 indicate this requirement. 
 
  Additional Resources 
 
 For more information, see the following:
 
  &amp;#42;   AWS Security Credentials
    [http://docs.aws.amazon.com/general/latest/gr/aws-security-credentials.html].
    This topic provides general information about the types of credentials used
    for accessing AWS. 
    
    
  *   IAM Best Practices
    [http://docs.aws.amazon.com/IAM/latest/UserGuide/IAMBestPractices.html]. This
    topic presents a list of suggestions for using the IAM service to help secure
    your AWS resources. 
    
    
  *   Signing AWS API Requests
    [http://docs.aws.amazon.com/general/latest/gr/signing_aws_api_requests.html].
    This set of topics walk you through the process of signing a request using an
    access key ID and secret access key.
    *
    */
  export class IAM extends Service {
    constructor(options?: any);
    endpoint: Endpoint;
    /**
     * Adds a new client ID (also known as audience) to the list of client IDs already
registered for the specified IAM OpenID Connect (OIDC) provider resource.

This action is idempotent; it does not fail or return an error if you add an
existing client ID to the provider.
     *
     * @error InvalidInputException   
     * @error NoSuchEntityException   
     * @error LimitExceededException   
     * @error ServiceFailureException   
     */
    addClientIDToOpenIDConnectProvider(params: IAM.AddClientIDToOpenIDConnectProviderRequest, callback?: (err: IAM.InvalidInputException | IAM.NoSuchEntityException | IAM.LimitExceededException | IAM.ServiceFailureException | any, data: any) => void): Request<any, IAM.InvalidInputException | IAM.NoSuchEntityException | IAM.LimitExceededException | IAM.ServiceFailureException | any>;
    /**
     * Adds the specified IAM role to the specified instance profile.

The caller of this API must be granted the PassRole permission on the IAM role
by a permission policy.

For more information about roles, go to Working with Roles
[http://docs.aws.amazon.com/IAM/latest/UserGuide/WorkingWithRoles.html]. For
more information about instance profiles, go to About Instance Profiles
[http://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html].
     *
     * @error NoSuchEntityException   
     * @error EntityAlreadyExistsException   
     * @error LimitExceededException   
     * @error ServiceFailureException   
     */
    addRoleToInstanceProfile(params: IAM.AddRoleToInstanceProfileRequest, callback?: (err: IAM.NoSuchEntityException | IAM.EntityAlreadyExistsException | IAM.LimitExceededException | IAM.ServiceFailureException | any, data: any) => void): Request<any, IAM.NoSuchEntityException | IAM.EntityAlreadyExistsException | IAM.LimitExceededException | IAM.ServiceFailureException | any>;
    /**
     * Adds the specified user to the specified group.
     *
     * @error NoSuchEntityException   
     * @error LimitExceededException   
     * @error ServiceFailureException   
     */
    addUserToGroup(params: IAM.AddUserToGroupRequest, callback?: (err: IAM.NoSuchEntityException | IAM.LimitExceededException | IAM.ServiceFailureException | any, data: any) => void): Request<any, IAM.NoSuchEntityException | IAM.LimitExceededException | IAM.ServiceFailureException | any>;
    /**
     * Attaches the specified managed policy to the specified IAM group.

You use this API to attach a managed policy to a group. To embed an inline
policy in a group, use PutGroupPolicy.

For more information about policies, see Managed Policies and Inline Policies
[http://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html] 
in the IAM User Guide.
     *
     * @error NoSuchEntityException   
     * @error LimitExceededException   
     * @error InvalidInputException   
     * @error ServiceFailureException   
     */
    attachGroupPolicy(params: IAM.AttachGroupPolicyRequest, callback?: (err: IAM.NoSuchEntityException | IAM.LimitExceededException | IAM.InvalidInputException | IAM.ServiceFailureException | any, data: any) => void): Request<any, IAM.NoSuchEntityException | IAM.LimitExceededException | IAM.InvalidInputException | IAM.ServiceFailureException | any>;
    /**
     * Attaches the specified managed policy to the specified IAM role.

When you attach a managed policy to a role, the managed policy becomes part of
the role&#x27;s permission (access) policy. You cannot use a managed policy as the
role&#x27;s trust policy. The role&#x27;s trust policy is created at the same time as the
role, using CreateRole. You can update a role&#x27;s trust policy using 
UpdateAssumeRolePolicy.

Use this API to attach a managed policy to a role. To embed an inline policy in
a role, use PutRolePolicy. For more information about policies, see Managed
Policies and Inline Policies
[http://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html] 
in the IAM User Guide.
     *
     * @error NoSuchEntityException   
     * @error LimitExceededException   
     * @error InvalidInputException   
     * @error ServiceFailureException   
     */
    attachRolePolicy(params: IAM.AttachRolePolicyRequest, callback?: (err: IAM.NoSuchEntityException | IAM.LimitExceededException | IAM.InvalidInputException | IAM.ServiceFailureException | any, data: any) => void): Request<any, IAM.NoSuchEntityException | IAM.LimitExceededException | IAM.InvalidInputException | IAM.ServiceFailureException | any>;
    /**
     * Attaches the specified managed policy to the specified user.

You use this API to attach a managed policy to a user. To embed an inline policy
in a user, use PutUserPolicy.

For more information about policies, see Managed Policies and Inline Policies
[http://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html] 
in the IAM User Guide.
     *
     * @error NoSuchEntityException   
     * @error LimitExceededException   
     * @error InvalidInputException   
     * @error ServiceFailureException   
     */
    attachUserPolicy(params: IAM.AttachUserPolicyRequest, callback?: (err: IAM.NoSuchEntityException | IAM.LimitExceededException | IAM.InvalidInputException | IAM.ServiceFailureException | any, data: any) => void): Request<any, IAM.NoSuchEntityException | IAM.LimitExceededException | IAM.InvalidInputException | IAM.ServiceFailureException | any>;
    /**
     * Changes the password of the IAM user who is calling this action. The root
account password is not affected by this action.

To change the password for a different user, see UpdateLoginProfile. For more
information about modifying passwords, see Managing Passwords
[http://docs.aws.amazon.com/IAM/latest/UserGuide/Using_ManagingLogins.html] in
the IAM User Guide.
     *
     * @error NoSuchEntityException   
     * @error InvalidUserTypeException   
     * @error LimitExceededException   
     * @error EntityTemporarilyUnmodifiableException   
     * @error PasswordPolicyViolationException   
     * @error ServiceFailureException   
     */
    changePassword(params: IAM.ChangePasswordRequest, callback?: (err: IAM.NoSuchEntityException | IAM.InvalidUserTypeException | IAM.LimitExceededException | IAM.EntityTemporarilyUnmodifiableException | IAM.PasswordPolicyViolationException | IAM.ServiceFailureException | any, data: any) => void): Request<any, IAM.NoSuchEntityException | IAM.InvalidUserTypeException | IAM.LimitExceededException | IAM.EntityTemporarilyUnmodifiableException | IAM.PasswordPolicyViolationException | IAM.ServiceFailureException | any>;
    /**
     * Creates a new AWS secret access key and corresponding AWS access key ID for the
specified user. The default status for new keys is Active.

If you do not specify a user name, IAM determines the user name implicitly based
on the AWS access key ID signing the request. Because this action works for
access keys under the AWS account, you can use this action to manage root
credentials even if the AWS account has no associated users.

 For information about limits on the number of keys you can create, see 
Limitations on IAM Entities
[http://docs.aws.amazon.com/IAM/latest/UserGuide/LimitationsOnEntities.html] in
the IAM User Guide.

To ensure the security of your AWS account, the secret access key is accessible
only during key and user creation. You must save the key (for example, in a text
file) if you want to be able to access it again. If a secret key is lost, you
can delete the access keys for the associated user and then create new keys.
     *
     * @error NoSuchEntityException   
     * @error LimitExceededException   
     * @error ServiceFailureException   
     */
    createAccessKey(params: IAM.CreateAccessKeyRequest, callback?: (err: IAM.NoSuchEntityException | IAM.LimitExceededException | IAM.ServiceFailureException | any, data: IAM.CreateAccessKeyResponse | any) => void): Request<IAM.CreateAccessKeyResponse | any, IAM.NoSuchEntityException | IAM.LimitExceededException | IAM.ServiceFailureException | any>;
    /**
     * Creates an alias for your AWS account. For information about using an AWS
account alias, see Using an Alias for Your AWS Account ID
[http://docs.aws.amazon.com/IAM/latest/UserGuide/AccountAlias.html] in the IAM
User Guide.
     *
     * @error EntityAlreadyExistsException   
     * @error LimitExceededException   
     * @error ServiceFailureException   
     */
    createAccountAlias(params: IAM.CreateAccountAliasRequest, callback?: (err: IAM.EntityAlreadyExistsException | IAM.LimitExceededException | IAM.ServiceFailureException | any, data: any) => void): Request<any, IAM.EntityAlreadyExistsException | IAM.LimitExceededException | IAM.ServiceFailureException | any>;
    /**
     * Creates a new group.

 For information about the number of groups you can create, see Limitations on
IAM Entities
[http://docs.aws.amazon.com/IAM/latest/UserGuide/LimitationsOnEntities.html] in
the IAM User Guide.
     *
     * @error LimitExceededException   
     * @error EntityAlreadyExistsException   
     * @error NoSuchEntityException   
     * @error ServiceFailureException   
     */
    createGroup(params: IAM.CreateGroupRequest, callback?: (err: IAM.LimitExceededException | IAM.EntityAlreadyExistsException | IAM.NoSuchEntityException | IAM.ServiceFailureException | any, data: IAM.CreateGroupResponse | any) => void): Request<IAM.CreateGroupResponse | any, IAM.LimitExceededException | IAM.EntityAlreadyExistsException | IAM.NoSuchEntityException | IAM.ServiceFailureException | any>;
    /**
     * Creates a new instance profile. For information about instance profiles, go to 
About Instance Profiles
[http://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html].

 For information about the number of instance profiles you can create, see 
Limitations on IAM Entities
[http://docs.aws.amazon.com/IAM/latest/UserGuide/LimitationsOnEntities.html] in
the IAM User Guide.
     *
     * @error EntityAlreadyExistsException   
     * @error LimitExceededException   
     * @error ServiceFailureException   
     */
    createInstanceProfile(params: IAM.CreateInstanceProfileRequest, callback?: (err: IAM.EntityAlreadyExistsException | IAM.LimitExceededException | IAM.ServiceFailureException | any, data: IAM.CreateInstanceProfileResponse | any) => void): Request<IAM.CreateInstanceProfileResponse | any, IAM.EntityAlreadyExistsException | IAM.LimitExceededException | IAM.ServiceFailureException | any>;
    /**
     * Creates a password for the specified user, giving the user the ability to
access AWS services through the AWS Management Console. For more information
about managing passwords, see Managing Passwords
[http://docs.aws.amazon.com/IAM/latest/UserGuide/Using_ManagingLogins.html] in
the IAM User Guide.
     *
     * @error EntityAlreadyExistsException   
     * @error NoSuchEntityException   
     * @error PasswordPolicyViolationException   
     * @error LimitExceededException   
     * @error ServiceFailureException   
     */
    createLoginProfile(params: IAM.CreateLoginProfileRequest, callback?: (err: IAM.EntityAlreadyExistsException | IAM.NoSuchEntityException | IAM.PasswordPolicyViolationException | IAM.LimitExceededException | IAM.ServiceFailureException | any, data: IAM.CreateLoginProfileResponse | any) => void): Request<IAM.CreateLoginProfileResponse | any, IAM.EntityAlreadyExistsException | IAM.NoSuchEntityException | IAM.PasswordPolicyViolationException | IAM.LimitExceededException | IAM.ServiceFailureException | any>;
    /**
     * Creates an IAM entity to describe an identity provider (IdP) that supports 
OpenID Connect (OIDC) [http://openid.net/connect/].

The OIDC provider that you create with this operation can be used as a principal
in a role&#x27;s trust policy to establish a trust relationship between AWS and the
OIDC provider.

When you create the IAM OIDC provider, you specify the URL of the OIDC identity
provider (IdP) to trust, a list of client IDs (also known as audiences) that
identify the application or applications that are allowed to authenticate using
the OIDC provider, and a list of thumbprints of the server certificate(s) that
the IdP uses. You get all of this information from the OIDC IdP that you want to
use for access to AWS.

Because trust for the OIDC provider is ultimately derived from the IAM provider
that this action creates, it is a best practice to limit access to the 
CreateOpenIDConnectProvider action to highly-privileged users.
     *
     * @error InvalidInputException   
     * @error EntityAlreadyExistsException   
     * @error LimitExceededException   
     * @error ServiceFailureException   
     */
    createOpenIDConnectProvider(params: IAM.CreateOpenIDConnectProviderRequest, callback?: (err: IAM.InvalidInputException | IAM.EntityAlreadyExistsException | IAM.LimitExceededException | IAM.ServiceFailureException | any, data: IAM.CreateOpenIDConnectProviderResponse | any) => void): Request<IAM.CreateOpenIDConnectProviderResponse | any, IAM.InvalidInputException | IAM.EntityAlreadyExistsException | IAM.LimitExceededException | IAM.ServiceFailureException | any>;
    /**
     * Creates a new managed policy for your AWS account.

This operation creates a policy version with a version identifier of v1 and sets
v1 as the policy&#x27;s default version. For more information about policy versions,
see Versioning for Managed Policies
[http://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-versions.html] 
in the IAM User Guide.

For more information about managed policies in general, see Managed Policies and
Inline Policies
[http://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html] 
in the IAM User Guide.
     *
     * @error InvalidInputException   
     * @error LimitExceededException   
     * @error EntityAlreadyExistsException   
     * @error MalformedPolicyDocumentException   
     * @error ServiceFailureException   
     */
    createPolicy(params: IAM.CreatePolicyRequest, callback?: (err: IAM.InvalidInputException | IAM.LimitExceededException | IAM.EntityAlreadyExistsException | IAM.MalformedPolicyDocumentException | IAM.ServiceFailureException | any, data: IAM.CreatePolicyResponse | any) => void): Request<IAM.CreatePolicyResponse | any, IAM.InvalidInputException | IAM.LimitExceededException | IAM.EntityAlreadyExistsException | IAM.MalformedPolicyDocumentException | IAM.ServiceFailureException | any>;
    /**
     * Creates a new version of the specified managed policy. To update a managed
policy, you create a new policy version. A managed policy can have up to five
versions. If the policy has five versions, you must delete an existing version
using DeletePolicyVersion before you create a new version.

Optionally, you can set the new version as the policy&#x27;s default version. The
default version is the version that is in effect for the IAM users, groups, and
roles to which the policy is attached.

For more information about managed policy versions, see Versioning for Managed
Policies
[http://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-versions.html] 
in the IAM User Guide.
     *
     * @error NoSuchEntityException   
     * @error MalformedPolicyDocumentException   
     * @error InvalidInputException   
     * @error LimitExceededException   
     * @error ServiceFailureException   
     */
    createPolicyVersion(params: IAM.CreatePolicyVersionRequest, callback?: (err: IAM.NoSuchEntityException | IAM.MalformedPolicyDocumentException | IAM.InvalidInputException | IAM.LimitExceededException | IAM.ServiceFailureException | any, data: IAM.CreatePolicyVersionResponse | any) => void): Request<IAM.CreatePolicyVersionResponse | any, IAM.NoSuchEntityException | IAM.MalformedPolicyDocumentException | IAM.InvalidInputException | IAM.LimitExceededException | IAM.ServiceFailureException | any>;
    /**
     * Creates a new role for your AWS account. For more information about roles, go to 
Working with Roles
[http://docs.aws.amazon.com/IAM/latest/UserGuide/WorkingWithRoles.html]. For
information about limitations on role names and the number of roles you can
create, go to Limitations on IAM Entities
[http://docs.aws.amazon.com/IAM/latest/UserGuide/LimitationsOnEntities.html] in
the IAM User Guide.
     *
     * @error LimitExceededException   
     * @error EntityAlreadyExistsException   
     * @error MalformedPolicyDocumentException   
     * @error ServiceFailureException   
     */
    createRole(params: IAM.CreateRoleRequest, callback?: (err: IAM.LimitExceededException | IAM.EntityAlreadyExistsException | IAM.MalformedPolicyDocumentException | IAM.ServiceFailureException | any, data: IAM.CreateRoleResponse | any) => void): Request<IAM.CreateRoleResponse | any, IAM.LimitExceededException | IAM.EntityAlreadyExistsException | IAM.MalformedPolicyDocumentException | IAM.ServiceFailureException | any>;
    /**
     * Creates an IAM resource that describes an identity provider (IdP) that supports
SAML 2.0.

The SAML provider resource that you create with this operation can be used as a
principal in an IAM role&#x27;s trust policy to enable federated users who sign-in
using the SAML IdP to assume the role. You can create an IAM role that supports
Web-based single sign-on (SSO) to the AWS Management Console or one that
supports API access to AWS.

When you create the SAML provider resource, you upload an a SAML metadata
document that you get from your IdP and that includes the issuer&#x27;s name,
expiration information, and keys that can be used to validate the SAML
authentication response (assertions) that the IdP sends. You must generate the
metadata document using the identity management software that is used as your
organization&#x27;s IdP.

 This operation requires Signature Version 4
[http://docs.aws.amazon.com/general/latest/gr/signature-version-4.html].

 For more information, see Enabling SAML 2.0 Federated Users to Access the AWS
Management Console
[http://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_enable-console-saml.html] 
and About SAML 2.0-based Federation
[http://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_saml.html] 
in the IAM User Guide.
     *
     * @error InvalidInputException   
     * @error EntityAlreadyExistsException   
     * @error LimitExceededException   
     * @error ServiceFailureException   
     */
    createSAMLProvider(params: IAM.CreateSAMLProviderRequest, callback?: (err: IAM.InvalidInputException | IAM.EntityAlreadyExistsException | IAM.LimitExceededException | IAM.ServiceFailureException | any, data: IAM.CreateSAMLProviderResponse | any) => void): Request<IAM.CreateSAMLProviderResponse | any, IAM.InvalidInputException | IAM.EntityAlreadyExistsException | IAM.LimitExceededException | IAM.ServiceFailureException | any>;
    /**
     * Creates a new IAM user for your AWS account.

 For information about limitations on the number of IAM users you can create,
see Limitations on IAM Entities
[http://docs.aws.amazon.com/IAM/latest/UserGuide/LimitationsOnEntities.html] in
the IAM User Guide.
     *
     * @error LimitExceededException   
     * @error EntityAlreadyExistsException   
     * @error NoSuchEntityException   
     * @error ServiceFailureException   
     */
    createUser(params: IAM.CreateUserRequest, callback?: (err: IAM.LimitExceededException | IAM.EntityAlreadyExistsException | IAM.NoSuchEntityException | IAM.ServiceFailureException | any, data: IAM.CreateUserResponse | any) => void): Request<IAM.CreateUserResponse | any, IAM.LimitExceededException | IAM.EntityAlreadyExistsException | IAM.NoSuchEntityException | IAM.ServiceFailureException | any>;
    /**
     * Creates a new virtual MFA device for the AWS account. After creating the virtual
MFA, use EnableMFADevice to attach the MFA device to an IAM user. For more
information about creating and working with virtual MFA devices, go to Using a
Virtual MFA Device
[http://docs.aws.amazon.com/IAM/latest/UserGuide/Using_VirtualMFA.html] in the 
IAM User Guide.

For information about limits on the number of MFA devices you can create, see 
Limitations on Entities
[http://docs.aws.amazon.com/IAM/latest/UserGuide/LimitationsOnEntities.html] in
the IAM User Guide.

The seed information contained in the QR code and the Base32 string should be
treated like any other secret access information, such as your AWS access keys
or your passwords. After you provision your virtual device, you should ensure
that the information is destroyed following secure procedures.
     *
     * @error LimitExceededException   
     * @error EntityAlreadyExistsException   
     * @error ServiceFailureException   
     */
    createVirtualMFADevice(params: IAM.CreateVirtualMFADeviceRequest, callback?: (err: IAM.LimitExceededException | IAM.EntityAlreadyExistsException | IAM.ServiceFailureException | any, data: IAM.CreateVirtualMFADeviceResponse | any) => void): Request<IAM.CreateVirtualMFADeviceResponse | any, IAM.LimitExceededException | IAM.EntityAlreadyExistsException | IAM.ServiceFailureException | any>;
    /**
     * Deactivates the specified MFA device and removes it from association with the
user name for which it was originally enabled.

For more information about creating and working with virtual MFA devices, go to 
Using a Virtual MFA Device
[http://docs.aws.amazon.com/IAM/latest/UserGuide/Using_VirtualMFA.html] in the 
IAM User Guide.
     *
     * @error EntityTemporarilyUnmodifiableException   
     * @error NoSuchEntityException   
     * @error LimitExceededException   
     * @error ServiceFailureException   
     */
    deactivateMFADevice(params: IAM.DeactivateMFADeviceRequest, callback?: (err: IAM.EntityTemporarilyUnmodifiableException | IAM.NoSuchEntityException | IAM.LimitExceededException | IAM.ServiceFailureException | any, data: any) => void): Request<any, IAM.EntityTemporarilyUnmodifiableException | IAM.NoSuchEntityException | IAM.LimitExceededException | IAM.ServiceFailureException | any>;
    /**
     * Deletes the access key pair associated with the specified IAM user.

If you do not specify a user name, IAM determines the user name implicitly based
on the AWS access key ID signing the request. Because this action works for
access keys under the AWS account, you can use this action to manage root
credentials even if the AWS account has no associated users.
     *
     * @error NoSuchEntityException   
     * @error LimitExceededException   
     * @error ServiceFailureException   
     */
    deleteAccessKey(params: IAM.DeleteAccessKeyRequest, callback?: (err: IAM.NoSuchEntityException | IAM.LimitExceededException | IAM.ServiceFailureException | any, data: any) => void): Request<any, IAM.NoSuchEntityException | IAM.LimitExceededException | IAM.ServiceFailureException | any>;
    /**
     * Deletes the specified AWS account alias. For information about using an AWS
account alias, see Using an Alias for Your AWS Account ID
[http://docs.aws.amazon.com/IAM/latest/UserGuide/AccountAlias.html] in the IAM
User Guide.
     *
     * @error NoSuchEntityException   
     * @error LimitExceededException   
     * @error ServiceFailureException   
     */
    deleteAccountAlias(params: IAM.DeleteAccountAliasRequest, callback?: (err: IAM.NoSuchEntityException | IAM.LimitExceededException | IAM.ServiceFailureException | any, data: any) => void): Request<any, IAM.NoSuchEntityException | IAM.LimitExceededException | IAM.ServiceFailureException | any>;
    /**
     * Deletes the password policy for the AWS account. There are no parameters.
     *
     * @error NoSuchEntityException   
     * @error LimitExceededException   
     * @error ServiceFailureException   
     */
    deleteAccountPasswordPolicy(callback?: (err: IAM.NoSuchEntityException | IAM.LimitExceededException | IAM.ServiceFailureException | any, data: any) => void): Request<any, IAM.NoSuchEntityException | IAM.LimitExceededException | IAM.ServiceFailureException | any>;
    /**
     * Deletes the specified IAM group. The group must not contain any users or have
any attached policies.
     *
     * @error NoSuchEntityException   
     * @error DeleteConflictException   
     * @error LimitExceededException   
     * @error ServiceFailureException   
     */
    deleteGroup(params: IAM.DeleteGroupRequest, callback?: (err: IAM.NoSuchEntityException | IAM.DeleteConflictException | IAM.LimitExceededException | IAM.ServiceFailureException | any, data: any) => void): Request<any, IAM.NoSuchEntityException | IAM.DeleteConflictException | IAM.LimitExceededException | IAM.ServiceFailureException | any>;
    /**
     * Deletes the specified inline policy that is embedded in the specified IAM group.

A group can also have managed policies attached to it. To detach a managed
policy from a group, use DetachGroupPolicy. For more information about policies,
refer to Managed Policies and Inline Policies
[http://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html] 
in the IAM User Guide.
     *
     * @error NoSuchEntityException   
     * @error LimitExceededException   
     * @error ServiceFailureException   
     */
    deleteGroupPolicy(params: IAM.DeleteGroupPolicyRequest, callback?: (err: IAM.NoSuchEntityException | IAM.LimitExceededException | IAM.ServiceFailureException | any, data: any) => void): Request<any, IAM.NoSuchEntityException | IAM.LimitExceededException | IAM.ServiceFailureException | any>;
    /**
     * Deletes the specified instance profile. The instance profile must not have an
associated role.

Make sure you do not have any Amazon EC2 instances running with the instance
profile you are about to delete. Deleting a role or instance profile that is
associated with a running instance will break any applications running on the
instance.

For more information about instance profiles, go to About Instance Profiles
[http://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html].
     *
     * @error NoSuchEntityException   
     * @error DeleteConflictException   
     * @error LimitExceededException   
     * @error ServiceFailureException   
     */
    deleteInstanceProfile(params: IAM.DeleteInstanceProfileRequest, callback?: (err: IAM.NoSuchEntityException | IAM.DeleteConflictException | IAM.LimitExceededException | IAM.ServiceFailureException | any, data: any) => void): Request<any, IAM.NoSuchEntityException | IAM.DeleteConflictException | IAM.LimitExceededException | IAM.ServiceFailureException | any>;
    /**
     * Deletes the password for the specified IAM user, which terminates the user&#x27;s
ability to access AWS services through the AWS Management Console.

 Deleting a user&#x27;s password does not prevent a user from accessing AWS through
the command line interface or the API. To prevent all user access you must also
either make any access keys inactive or delete them. For more information about
making keys inactive or deleting them, see UpdateAccessKey and DeleteAccessKey.
     *
     * @error EntityTemporarilyUnmodifiableException   
     * @error NoSuchEntityException   
     * @error LimitExceededException   
     * @error ServiceFailureException   
     */
    deleteLoginProfile(params: IAM.DeleteLoginProfileRequest, callback?: (err: IAM.EntityTemporarilyUnmodifiableException | IAM.NoSuchEntityException | IAM.LimitExceededException | IAM.ServiceFailureException | any, data: any) => void): Request<any, IAM.EntityTemporarilyUnmodifiableException | IAM.NoSuchEntityException | IAM.LimitExceededException | IAM.ServiceFailureException | any>;
    /**
     * Deletes an OpenID Connect identity provider (IdP) resource object in IAM.

Deleting an IAM OIDC provider resource does not update any roles that reference
the provider as a principal in their trust policies. Any attempt to assume a
role that references a deleted provider fails.

This action is idempotent; it does not fail or return an error if you call the
action for a provider that does not exist.
     *
     * @error InvalidInputException   
     * @error NoSuchEntityException   
     * @error ServiceFailureException   
     */
    deleteOpenIDConnectProvider(params: IAM.DeleteOpenIDConnectProviderRequest, callback?: (err: IAM.InvalidInputException | IAM.NoSuchEntityException | IAM.ServiceFailureException | any, data: any) => void): Request<any, IAM.InvalidInputException | IAM.NoSuchEntityException | IAM.ServiceFailureException | any>;
    /**
     * Deletes the specified managed policy.

Before you can delete a managed policy, you must first detach the policy from
all users, groups, and roles that it is attached to, and you must delete all of
the policy&#x27;s versions. The following steps describe the process for deleting a
managed policy:

 &amp;#42;  Detach the policy from all users, groups, and roles that the policy is
   attached to, using the DetachUserPolicy, DetachGroupPolicy, or 
   DetachRolePolicy APIs. To list all the users, groups, and roles that a policy
   is attached to, use ListEntitiesForPolicy.
   
   
 *  Delete all versions of the policy using DeletePolicyVersion. To list the
   policy&#x27;s versions, use ListPolicyVersions. You cannot use DeletePolicyVersion 
   to delete the version that is marked as the default version. You delete the
   policy&#x27;s default version in the next step of the process.
   
   
 *  Delete the policy (this automatically deletes the policy&#x27;s default version)
   using this API.
   
   

For information about managed policies, see Managed Policies and Inline Policies
[http://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html] 
in the IAM User Guide.
     *
     * @error NoSuchEntityException   
     * @error LimitExceededException   
     * @error InvalidInputException   
     * @error DeleteConflictException   
     * @error ServiceFailureException   
     */
    deletePolicy(params: IAM.DeletePolicyRequest, callback?: (err: IAM.NoSuchEntityException | IAM.LimitExceededException | IAM.InvalidInputException | IAM.DeleteConflictException | IAM.ServiceFailureException | any, data: any) => void): Request<any, IAM.NoSuchEntityException | IAM.LimitExceededException | IAM.InvalidInputException | IAM.DeleteConflictException | IAM.ServiceFailureException | any>;
    /**
     * Deletes the specified version from the specified managed policy.

You cannot delete the default version from a policy using this API. To delete
the default version from a policy, use DeletePolicy. To find out which version
of a policy is marked as the default version, use ListPolicyVersions.

For information about versions for managed policies, see Versioning for Managed
Policies
[http://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-versions.html] 
in the IAM User Guide.
     *
     * @error NoSuchEntityException   
     * @error LimitExceededException   
     * @error InvalidInputException   
     * @error DeleteConflictException   
     * @error ServiceFailureException   
     */
    deletePolicyVersion(params: IAM.DeletePolicyVersionRequest, callback?: (err: IAM.NoSuchEntityException | IAM.LimitExceededException | IAM.InvalidInputException | IAM.DeleteConflictException | IAM.ServiceFailureException | any, data: any) => void): Request<any, IAM.NoSuchEntityException | IAM.LimitExceededException | IAM.InvalidInputException | IAM.DeleteConflictException | IAM.ServiceFailureException | any>;
    /**
     * Deletes the specified role. The role must not have any policies attached. For
more information about roles, go to Working with Roles
[http://docs.aws.amazon.com/IAM/latest/UserGuide/WorkingWithRoles.html].

Make sure you do not have any Amazon EC2 instances running with the role you are
about to delete. Deleting a role or instance profile that is associated with a
running instance will break any applications running on the instance.
     *
     * @error NoSuchEntityException   
     * @error DeleteConflictException   
     * @error LimitExceededException   
     * @error ServiceFailureException   
     */
    deleteRole(params: IAM.DeleteRoleRequest, callback?: (err: IAM.NoSuchEntityException | IAM.DeleteConflictException | IAM.LimitExceededException | IAM.ServiceFailureException | any, data: any) => void): Request<any, IAM.NoSuchEntityException | IAM.DeleteConflictException | IAM.LimitExceededException | IAM.ServiceFailureException | any>;
    /**
     * Deletes the specified inline policy that is embedded in the specified IAM role.

A role can also have managed policies attached to it. To detach a managed policy
from a role, use DetachRolePolicy. For more information about policies, refer to 
Managed Policies and Inline Policies
[http://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html] 
in the IAM User Guide.
     *
     * @error NoSuchEntityException   
     * @error LimitExceededException   
     * @error ServiceFailureException   
     */
    deleteRolePolicy(params: IAM.DeleteRolePolicyRequest, callback?: (err: IAM.NoSuchEntityException | IAM.LimitExceededException | IAM.ServiceFailureException | any, data: any) => void): Request<any, IAM.NoSuchEntityException | IAM.LimitExceededException | IAM.ServiceFailureException | any>;
    /**
     * Deletes a SAML provider resource in IAM.

Deleting the provider resource from IAM does not update any roles that reference
the SAML provider resource&#x27;s ARN as a principal in their trust policies. Any
attempt to assume a role that references a non-existent provider resource ARN
fails.

 This operation requires Signature Version 4
[http://docs.aws.amazon.com/general/latest/gr/signature-version-4.html].
     *
     * @error InvalidInputException   
     * @error LimitExceededException   
     * @error NoSuchEntityException   
     * @error ServiceFailureException   
     */
    deleteSAMLProvider(params: IAM.DeleteSAMLProviderRequest, callback?: (err: IAM.InvalidInputException | IAM.LimitExceededException | IAM.NoSuchEntityException | IAM.ServiceFailureException | any, data: any) => void): Request<any, IAM.InvalidInputException | IAM.LimitExceededException | IAM.NoSuchEntityException | IAM.ServiceFailureException | any>;
    /**
     * Deletes the specified SSH public key.

The SSH public key deleted by this action is used only for authenticating the
associated IAM user to an AWS CodeCommit repository. For more information about
using SSH keys to authenticate to an AWS CodeCommit repository, see Set up AWS
CodeCommit for SSH Connections
[http://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-credentials-ssh.html] 
in the AWS CodeCommit User Guide.
     *
     * @error NoSuchEntityException   
     */
    deleteSSHPublicKey(params: IAM.DeleteSSHPublicKeyRequest, callback?: (err: IAM.NoSuchEntityException | any, data: any) => void): Request<any, IAM.NoSuchEntityException | any>;
    /**
     * Deletes the specified server certificate.

For more information about working with server certificates, including a list of
AWS services that can use the server certificates that you manage with IAM, go
to Working with Server Certificates
[http://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html] 
in the IAM User Guide.

 If you are using a server certificate with Elastic Load Balancing, deleting the
certificate could have implications for your application. If Elastic Load
Balancing doesn&#x27;t detect the deletion of bound certificates, it may continue to
use the certificates. This could cause Elastic Load Balancing to stop accepting
traffic. We recommend that you remove the reference to the certificate from
Elastic Load Balancing before using this command to delete the certificate. For
more information, go to DeleteLoadBalancerListeners
[http://docs.aws.amazon.com/ElasticLoadBalancing/latest/APIReference/API_DeleteLoadBalancerListeners.html] 
in the Elastic Load Balancing API Reference.
     *
     * @error NoSuchEntityException   
     * @error DeleteConflictException   
     * @error LimitExceededException   
     * @error ServiceFailureException   
     */
    deleteServerCertificate(params: IAM.DeleteServerCertificateRequest, callback?: (err: IAM.NoSuchEntityException | IAM.DeleteConflictException | IAM.LimitExceededException | IAM.ServiceFailureException | any, data: any) => void): Request<any, IAM.NoSuchEntityException | IAM.DeleteConflictException | IAM.LimitExceededException | IAM.ServiceFailureException | any>;
    /**
     * Deletes a signing certificate associated with the specified IAM user.

If you do not specify a user name, IAM determines the user name implicitly based
on the AWS access key ID signing the request. Because this action works for
access keys under the AWS account, you can use this action to manage root
credentials even if the AWS account has no associated IAM users.
     *
     * @error NoSuchEntityException   
     * @error LimitExceededException   
     * @error ServiceFailureException   
     */
    deleteSigningCertificate(params: IAM.DeleteSigningCertificateRequest, callback?: (err: IAM.NoSuchEntityException | IAM.LimitExceededException | IAM.ServiceFailureException | any, data: any) => void): Request<any, IAM.NoSuchEntityException | IAM.LimitExceededException | IAM.ServiceFailureException | any>;
    /**
     * Deletes the specified IAM user. The user must not belong to any groups or have
any access keys, signing certificates, or attached policies.
     *
     * @error LimitExceededException   
     * @error NoSuchEntityException   
     * @error DeleteConflictException   
     * @error ServiceFailureException   
     */
    deleteUser(params: IAM.DeleteUserRequest, callback?: (err: IAM.LimitExceededException | IAM.NoSuchEntityException | IAM.DeleteConflictException | IAM.ServiceFailureException | any, data: any) => void): Request<any, IAM.LimitExceededException | IAM.NoSuchEntityException | IAM.DeleteConflictException | IAM.ServiceFailureException | any>;
    /**
     * Deletes the specified inline policy that is embedded in the specified IAM user.

A user can also have managed policies attached to it. To detach a managed policy
from a user, use DetachUserPolicy. For more information about policies, refer to 
Managed Policies and Inline Policies
[http://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html] 
in the IAM User Guide.
     *
     * @error NoSuchEntityException   
     * @error LimitExceededException   
     * @error ServiceFailureException   
     */
    deleteUserPolicy(params: IAM.DeleteUserPolicyRequest, callback?: (err: IAM.NoSuchEntityException | IAM.LimitExceededException | IAM.ServiceFailureException | any, data: any) => void): Request<any, IAM.NoSuchEntityException | IAM.LimitExceededException | IAM.ServiceFailureException | any>;
    /**
     * Deletes a virtual MFA device.

 You must deactivate a user&#x27;s virtual MFA device before you can delete it. For
information about deactivating MFA devices, see DeactivateMFADevice.
     *
     * @error NoSuchEntityException   
     * @error DeleteConflictException   
     * @error LimitExceededException   
     * @error ServiceFailureException   
     */
    deleteVirtualMFADevice(params: IAM.DeleteVirtualMFADeviceRequest, callback?: (err: IAM.NoSuchEntityException | IAM.DeleteConflictException | IAM.LimitExceededException | IAM.ServiceFailureException | any, data: any) => void): Request<any, IAM.NoSuchEntityException | IAM.DeleteConflictException | IAM.LimitExceededException | IAM.ServiceFailureException | any>;
    /**
     * Removes the specified managed policy from the specified IAM group.

A group can also have inline policies embedded with it. To delete an inline
policy, use the DeleteGroupPolicy API. For information about policies, see 
Managed Policies and Inline Policies
[http://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html] 
in the IAM User Guide.
     *
     * @error NoSuchEntityException   
     * @error LimitExceededException   
     * @error InvalidInputException   
     * @error ServiceFailureException   
     */
    detachGroupPolicy(params: IAM.DetachGroupPolicyRequest, callback?: (err: IAM.NoSuchEntityException | IAM.LimitExceededException | IAM.InvalidInputException | IAM.ServiceFailureException | any, data: any) => void): Request<any, IAM.NoSuchEntityException | IAM.LimitExceededException | IAM.InvalidInputException | IAM.ServiceFailureException | any>;
    /**
     * Removes the specified managed policy from the specified role.

A role can also have inline policies embedded with it. To delete an inline
policy, use the DeleteRolePolicy API. For information about policies, see 
Managed Policies and Inline Policies
[http://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html] 
in the IAM User Guide.
     *
     * @error NoSuchEntityException   
     * @error LimitExceededException   
     * @error InvalidInputException   
     * @error ServiceFailureException   
     */
    detachRolePolicy(params: IAM.DetachRolePolicyRequest, callback?: (err: IAM.NoSuchEntityException | IAM.LimitExceededException | IAM.InvalidInputException | IAM.ServiceFailureException | any, data: any) => void): Request<any, IAM.NoSuchEntityException | IAM.LimitExceededException | IAM.InvalidInputException | IAM.ServiceFailureException | any>;
    /**
     * Removes the specified managed policy from the specified user.

A user can also have inline policies embedded with it. To delete an inline
policy, use the DeleteUserPolicy API. For information about policies, see 
Managed Policies and Inline Policies
[http://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html] 
in the IAM User Guide.
     *
     * @error NoSuchEntityException   
     * @error LimitExceededException   
     * @error InvalidInputException   
     * @error ServiceFailureException   
     */
    detachUserPolicy(params: IAM.DetachUserPolicyRequest, callback?: (err: IAM.NoSuchEntityException | IAM.LimitExceededException | IAM.InvalidInputException | IAM.ServiceFailureException | any, data: any) => void): Request<any, IAM.NoSuchEntityException | IAM.LimitExceededException | IAM.InvalidInputException | IAM.ServiceFailureException | any>;
    /**
     * Enables the specified MFA device and associates it with the specified IAM user.
When enabled, the MFA device is required for every subsequent login by the IAM
user associated with the device.
     *
     * @error EntityAlreadyExistsException   
     * @error EntityTemporarilyUnmodifiableException   
     * @error InvalidAuthenticationCodeException   
     * @error LimitExceededException   
     * @error NoSuchEntityException   
     * @error ServiceFailureException   
     */
    enableMFADevice(params: IAM.EnableMFADeviceRequest, callback?: (err: IAM.EntityAlreadyExistsException | IAM.EntityTemporarilyUnmodifiableException | IAM.InvalidAuthenticationCodeException | IAM.LimitExceededException | IAM.NoSuchEntityException | IAM.ServiceFailureException | any, data: any) => void): Request<any, IAM.EntityAlreadyExistsException | IAM.EntityTemporarilyUnmodifiableException | IAM.InvalidAuthenticationCodeException | IAM.LimitExceededException | IAM.NoSuchEntityException | IAM.ServiceFailureException | any>;
    /**
     * Generates a credential report for the AWS account. For more information about
the credential report, see Getting Credential Reports
[http://docs.aws.amazon.com/IAM/latest/UserGuide/credential-reports.html] in the 
IAM User Guide.
     *
     * @error LimitExceededException   
     * @error ServiceFailureException   
     */
    generateCredentialReport(callback?: (err: IAM.LimitExceededException | IAM.ServiceFailureException | any, data: IAM.GenerateCredentialReportResponse | any) => void): Request<IAM.GenerateCredentialReportResponse | any, IAM.LimitExceededException | IAM.ServiceFailureException | any>;
    /**
     * Retrieves information about when the specified access key was last used. The
information includes the date and time of last use, along with the AWS service
and region that were specified in the last request made with that key.
     *
     * @error NoSuchEntityException   
     */
    getAccessKeyLastUsed(params: IAM.GetAccessKeyLastUsedRequest, callback?: (err: IAM.NoSuchEntityException | any, data: IAM.GetAccessKeyLastUsedResponse | any) => void): Request<IAM.GetAccessKeyLastUsedResponse | any, IAM.NoSuchEntityException | any>;
    /**
     * Retrieves information about all IAM users, groups, roles, and policies in your
AWS account, including their relationships to one another. Use this API to
obtain a snapshot of the configuration of IAM permissions (users, groups, roles,
and policies) in your account.

You can optionally filter the results using the Filter parameter. You can
paginate the results using the MaxItems and Marker parameters.
     *
     * @error ServiceFailureException   
     */
    getAccountAuthorizationDetails(params: IAM.GetAccountAuthorizationDetailsRequest, callback?: (err: IAM.ServiceFailureException | any, data: IAM.GetAccountAuthorizationDetailsResponse | any) => void): Request<IAM.GetAccountAuthorizationDetailsResponse | any, IAM.ServiceFailureException | any>;
    /**
     * Retrieves the password policy for the AWS account. For more information about
using a password policy, go to Managing an IAM Password Policy
[http://docs.aws.amazon.com/IAM/latest/UserGuide/Using_ManagingPasswordPolicies.html]
.
     *
     * @error NoSuchEntityException   
     * @error ServiceFailureException   
     */
    getAccountPasswordPolicy(callback?: (err: IAM.NoSuchEntityException | IAM.ServiceFailureException | any, data: IAM.GetAccountPasswordPolicyResponse | any) => void): Request<IAM.GetAccountPasswordPolicyResponse | any, IAM.NoSuchEntityException | IAM.ServiceFailureException | any>;
    /**
     * Retrieves information about IAM entity usage and IAM quotas in the AWS account.

 For information about limitations on IAM entities, see Limitations on IAM
Entities
[http://docs.aws.amazon.com/IAM/latest/UserGuide/LimitationsOnEntities.html] in
the IAM User Guide.
     *
     * @error ServiceFailureException   
     */
    getAccountSummary(callback?: (err: IAM.ServiceFailureException | any, data: IAM.GetAccountSummaryResponse | any) => void): Request<IAM.GetAccountSummaryResponse | any, IAM.ServiceFailureException | any>;
    /**
     * Gets a list of all of the context keys referenced in the input policies. The
policies are supplied as a list of one or more strings. To get the context keys
from policies associated with an IAM user, group, or role, use 
GetContextKeysForPrincipalPolicy.

Context keys are variables maintained by AWS and its services that provide
details about the context of an API query request, and can be evaluated by
testing against a value specified in an IAM policy. Use
GetContextKeysForCustomPolicy to understand what key names and values you must
supply when you call SimulateCustomPolicy. Note that all parameters are shown in
unencoded form here for clarity, but must be URL encoded to be included as a
part of a real HTML request.
     *
     * @error InvalidInputException   
     */
    getContextKeysForCustomPolicy(params: IAM.GetContextKeysForCustomPolicyRequest, callback?: (err: IAM.InvalidInputException | any, data: IAM.GetContextKeysForPolicyResponse | any) => void): Request<IAM.GetContextKeysForPolicyResponse | any, IAM.InvalidInputException | any>;
    /**
     * Gets a list of all of the context keys referenced in all of the IAM policies
attached to the specified IAM entity. The entity can be an IAM user, group, or
role. If you specify a user, then the request also includes all of the policies
attached to groups that the user is a member of.

You can optionally include a list of one or more additional policies, specified
as strings. If you want to include only a list of policies by string, use 
GetContextKeysForCustomPolicy instead.

 Note: This API discloses information about the permissions granted to other
users. If you do not want users to see other user&#x27;s permissions, then consider
allowing them to use GetContextKeysForCustomPolicy instead.

Context keys are variables maintained by AWS and its services that provide
details about the context of an API query request, and can be evaluated by
testing against a value in an IAM policy. Use GetContextKeysForPrincipalPolicy 
to understand what key names and values you must supply when you call 
SimulatePrincipalPolicy.
     *
     * @error NoSuchEntityException   
     * @error InvalidInputException   
     */
    getContextKeysForPrincipalPolicy(params: IAM.GetContextKeysForPrincipalPolicyRequest, callback?: (err: IAM.NoSuchEntityException | IAM.InvalidInputException | any, data: IAM.GetContextKeysForPolicyResponse | any) => void): Request<IAM.GetContextKeysForPolicyResponse | any, IAM.NoSuchEntityException | IAM.InvalidInputException | any>;
    /**
     * Retrieves a credential report for the AWS account. For more information about
the credential report, see Getting Credential Reports
[http://docs.aws.amazon.com/IAM/latest/UserGuide/credential-reports.html] in the 
IAM User Guide.
     *
     * @error CredentialReportNotPresentException   
     * @error CredentialReportExpiredException   
     * @error CredentialReportNotReadyException   
     * @error ServiceFailureException   
     */
    getCredentialReport(callback?: (err: IAM.CredentialReportNotPresentException | IAM.CredentialReportExpiredException | IAM.CredentialReportNotReadyException | IAM.ServiceFailureException | any, data: IAM.GetCredentialReportResponse | any) => void): Request<IAM.GetCredentialReportResponse | any, IAM.CredentialReportNotPresentException | IAM.CredentialReportExpiredException | IAM.CredentialReportNotReadyException | IAM.ServiceFailureException | any>;
    /**
     * Returns a list of IAM users that are in the specified IAM group. You can
paginate the results using the MaxItems and Marker parameters.
     *
     * @error NoSuchEntityException   
     * @error ServiceFailureException   
     */
    getGroup(params: IAM.GetGroupRequest, callback?: (err: IAM.NoSuchEntityException | IAM.ServiceFailureException | any, data: IAM.GetGroupResponse | any) => void): Request<IAM.GetGroupResponse | any, IAM.NoSuchEntityException | IAM.ServiceFailureException | any>;
    /**
     * Retrieves the specified inline policy document that is embedded in the specified
IAM group.

Policies returned by this API are URL-encoded compliant with RFC 3986
[https://tools.ietf.org/html/rfc3986]. You can use a URL decoding method to
convert the policy back to plain JSON text. For example, if you use Java, you
can use the decode method of the java.net.URLDecoder utility class in the Java
SDK. Other languages and SDKs provide similar functionality.

An IAM group can also have managed policies attached to it. To retrieve a
managed policy document that is attached to a group, use GetPolicy to determine
the policy&#x27;s default version, then use GetPolicyVersion to retrieve the policy
document.

For more information about policies, see Managed Policies and Inline Policies
[http://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html] 
in the IAM User Guide.
     *
     * @error NoSuchEntityException   
     * @error ServiceFailureException   
     */
    getGroupPolicy(params: IAM.GetGroupPolicyRequest, callback?: (err: IAM.NoSuchEntityException | IAM.ServiceFailureException | any, data: IAM.GetGroupPolicyResponse | any) => void): Request<IAM.GetGroupPolicyResponse | any, IAM.NoSuchEntityException | IAM.ServiceFailureException | any>;
    /**
     * Retrieves information about the specified instance profile, including the
instance profile&#x27;s path, GUID, ARN, and role. For more information about
instance profiles, see About Instance Profiles
[http://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html] in
the IAM User Guide.
     *
     * @error NoSuchEntityException   
     * @error ServiceFailureException   
     */
    getInstanceProfile(params: IAM.GetInstanceProfileRequest, callback?: (err: IAM.NoSuchEntityException | IAM.ServiceFailureException | any, data: IAM.GetInstanceProfileResponse | any) => void): Request<IAM.GetInstanceProfileResponse | any, IAM.NoSuchEntityException | IAM.ServiceFailureException | any>;
    /**
     * Retrieves the user name and password-creation date for the specified IAM user.
If the user has not been assigned a password, the action returns a 404 (
NoSuchEntity) error.
     *
     * @error NoSuchEntityException   
     * @error ServiceFailureException   
     */
    getLoginProfile(params: IAM.GetLoginProfileRequest, callback?: (err: IAM.NoSuchEntityException | IAM.ServiceFailureException | any, data: IAM.GetLoginProfileResponse | any) => void): Request<IAM.GetLoginProfileResponse | any, IAM.NoSuchEntityException | IAM.ServiceFailureException | any>;
    /**
     * Returns information about the specified OpenID Connect (OIDC) provider resource
object in IAM.
     *
     * @error InvalidInputException   
     * @error NoSuchEntityException   
     * @error ServiceFailureException   
     */
    getOpenIDConnectProvider(params: IAM.GetOpenIDConnectProviderRequest, callback?: (err: IAM.InvalidInputException | IAM.NoSuchEntityException | IAM.ServiceFailureException | any, data: IAM.GetOpenIDConnectProviderResponse | any) => void): Request<IAM.GetOpenIDConnectProviderResponse | any, IAM.InvalidInputException | IAM.NoSuchEntityException | IAM.ServiceFailureException | any>;
    /**
     * Retrieves information about the specified managed policy, including the policy&#x27;s
default version and the total number of IAM users, groups, and roles to which
the policy is attached. To retrieve the list of the specific users, groups, and
roles that the policy is attached to, use the ListEntitiesForPolicy API. This
API returns metadata about the policy. To retrieve the actual policy document
for a specific version of the policy, use GetPolicyVersion.

This API retrieves information about managed policies. To retrieve information
about an inline policy that is embedded with an IAM user, group, or role, use
the GetUserPolicy, GetGroupPolicy, or GetRolePolicy API.

For more information about policies, see Managed Policies and Inline Policies
[http://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html] 
in the IAM User Guide.
     *
     * @error NoSuchEntityException   
     * @error InvalidInputException   
     * @error ServiceFailureException   
     */
    getPolicy(params: IAM.GetPolicyRequest, callback?: (err: IAM.NoSuchEntityException | IAM.InvalidInputException | IAM.ServiceFailureException | any, data: IAM.GetPolicyResponse | any) => void): Request<IAM.GetPolicyResponse | any, IAM.NoSuchEntityException | IAM.InvalidInputException | IAM.ServiceFailureException | any>;
    /**
     * Retrieves information about the specified version of the specified managed
policy, including the policy document.

Policies returned by this API are URL-encoded compliant with RFC 3986
[https://tools.ietf.org/html/rfc3986]. You can use a URL decoding method to
convert the policy back to plain JSON text. For example, if you use Java, you
can use the decode method of the java.net.URLDecoder utility class in the Java
SDK. Other languages and SDKs provide similar functionality.

To list the available versions for a policy, use ListPolicyVersions.

This API retrieves information about managed policies. To retrieve information
about an inline policy that is embedded in a user, group, or role, use the 
GetUserPolicy, GetGroupPolicy, or GetRolePolicy API.

For more information about the types of policies, see Managed Policies and
Inline Policies
[http://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html] 
in the IAM User Guide.

For more information about managed policy versions, see Versioning for Managed
Policies
[http://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-versions.html] 
in the IAM User Guide.
     *
     * @error NoSuchEntityException   
     * @error InvalidInputException   
     * @error ServiceFailureException   
     */
    getPolicyVersion(params: IAM.GetPolicyVersionRequest, callback?: (err: IAM.NoSuchEntityException | IAM.InvalidInputException | IAM.ServiceFailureException | any, data: IAM.GetPolicyVersionResponse | any) => void): Request<IAM.GetPolicyVersionResponse | any, IAM.NoSuchEntityException | IAM.InvalidInputException | IAM.ServiceFailureException | any>;
    /**
     * Retrieves information about the specified role, including the role&#x27;s path, GUID,
ARN, and the role&#x27;s trust policy that grants permission to assume the role. For
more information about roles, see Working with Roles
[http://docs.aws.amazon.com/IAM/latest/UserGuide/WorkingWithRoles.html].

Policies returned by this API are URL-encoded compliant with RFC 3986
[https://tools.ietf.org/html/rfc3986]. You can use a URL decoding method to
convert the policy back to plain JSON text. For example, if you use Java, you
can use the decode method of the java.net.URLDecoder utility class in the Java
SDK. Other languages and SDKs provide similar functionality.
     *
     * @error NoSuchEntityException   
     * @error ServiceFailureException   
     */
    getRole(params: IAM.GetRoleRequest, callback?: (err: IAM.NoSuchEntityException | IAM.ServiceFailureException | any, data: IAM.GetRoleResponse | any) => void): Request<IAM.GetRoleResponse | any, IAM.NoSuchEntityException | IAM.ServiceFailureException | any>;
    /**
     * Retrieves the specified inline policy document that is embedded with the
specified IAM role.

Policies returned by this API are URL-encoded compliant with RFC 3986
[https://tools.ietf.org/html/rfc3986]. You can use a URL decoding method to
convert the policy back to plain JSON text. For example, if you use Java, you
can use the decode method of the java.net.URLDecoder utility class in the Java
SDK. Other languages and SDKs provide similar functionality.

An IAM role can also have managed policies attached to it. To retrieve a managed
policy document that is attached to a role, use GetPolicy to determine the
policy&#x27;s default version, then use GetPolicyVersion to retrieve the policy
document.

For more information about policies, see Managed Policies and Inline Policies
[http://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html] 
in the IAM User Guide.

For more information about roles, see Using Roles to Delegate Permissions and
Federate Identities
[http://docs.aws.amazon.com/IAM/latest/UserGuide/roles-toplevel.html].
     *
     * @error NoSuchEntityException   
     * @error ServiceFailureException   
     */
    getRolePolicy(params: IAM.GetRolePolicyRequest, callback?: (err: IAM.NoSuchEntityException | IAM.ServiceFailureException | any, data: IAM.GetRolePolicyResponse | any) => void): Request<IAM.GetRolePolicyResponse | any, IAM.NoSuchEntityException | IAM.ServiceFailureException | any>;
    /**
     * Returns the SAML provider metadocument that was uploaded when the IAM SAML
provider resource object was created or updated.

This operation requires Signature Version 4
[http://docs.aws.amazon.com/general/latest/gr/signature-version-4.html].
     *
     * @error NoSuchEntityException   
     * @error InvalidInputException   
     * @error ServiceFailureException   
     */
    getSAMLProvider(params: IAM.GetSAMLProviderRequest, callback?: (err: IAM.NoSuchEntityException | IAM.InvalidInputException | IAM.ServiceFailureException | any, data: IAM.GetSAMLProviderResponse | any) => void): Request<IAM.GetSAMLProviderResponse | any, IAM.NoSuchEntityException | IAM.InvalidInputException | IAM.ServiceFailureException | any>;
    /**
     * Retrieves the specified SSH public key, including metadata about the key.

The SSH public key retrieved by this action is used only for authenticating the
associated IAM user to an AWS CodeCommit repository. For more information about
using SSH keys to authenticate to an AWS CodeCommit repository, see Set up AWS
CodeCommit for SSH Connections
[http://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-credentials-ssh.html] 
in the AWS CodeCommit User Guide.
     *
     * @error NoSuchEntityException   
     * @error UnrecognizedPublicKeyEncodingException   
     */
    getSSHPublicKey(params: IAM.GetSSHPublicKeyRequest, callback?: (err: IAM.NoSuchEntityException | IAM.UnrecognizedPublicKeyEncodingException | any, data: IAM.GetSSHPublicKeyResponse | any) => void): Request<IAM.GetSSHPublicKeyResponse | any, IAM.NoSuchEntityException | IAM.UnrecognizedPublicKeyEncodingException | any>;
    /**
     * Retrieves information about the specified server certificate stored in IAM.

For more information about working with server certificates, including a list of
AWS services that can use the server certificates that you manage with IAM, go
to Working with Server Certificates
[http://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html] 
in the IAM User Guide.
     *
     * @error NoSuchEntityException   
     * @error ServiceFailureException   
     */
    getServerCertificate(params: IAM.GetServerCertificateRequest, callback?: (err: IAM.NoSuchEntityException | IAM.ServiceFailureException | any, data: IAM.GetServerCertificateResponse | any) => void): Request<IAM.GetServerCertificateResponse | any, IAM.NoSuchEntityException | IAM.ServiceFailureException | any>;
    /**
     * Retrieves information about the specified IAM user, including the user&#x27;s
creation date, path, unique ID, and ARN.

If you do not specify a user name, IAM determines the user name implicitly based
on the AWS access key ID used to sign the request to this API.
     *
     * @error NoSuchEntityException   
     * @error ServiceFailureException   
     */
    getUser(params: IAM.GetUserRequest, callback?: (err: IAM.NoSuchEntityException | IAM.ServiceFailureException | any, data: IAM.GetUserResponse | any) => void): Request<IAM.GetUserResponse | any, IAM.NoSuchEntityException | IAM.ServiceFailureException | any>;
    /**
     * Retrieves the specified inline policy document that is embedded in the specified
IAM user.

Policies returned by this API are URL-encoded compliant with RFC 3986
[https://tools.ietf.org/html/rfc3986]. You can use a URL decoding method to
convert the policy back to plain JSON text. For example, if you use Java, you
can use the decode method of the java.net.URLDecoder utility class in the Java
SDK. Other languages and SDKs provide similar functionality.

An IAM user can also have managed policies attached to it. To retrieve a managed
policy document that is attached to a user, use GetPolicy to determine the
policy&#x27;s default version, then use GetPolicyVersion to retrieve the policy
document.

For more information about policies, see Managed Policies and Inline Policies
[http://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html] 
in the IAM User Guide.
     *
     * @error NoSuchEntityException   
     * @error ServiceFailureException   
     */
    getUserPolicy(params: IAM.GetUserPolicyRequest, callback?: (err: IAM.NoSuchEntityException | IAM.ServiceFailureException | any, data: IAM.GetUserPolicyResponse | any) => void): Request<IAM.GetUserPolicyResponse | any, IAM.NoSuchEntityException | IAM.ServiceFailureException | any>;
    /**
     * Returns information about the access key IDs associated with the specified IAM
user. If there are none, the action returns an empty list.

Although each user is limited to a small number of keys, you can still paginate
the results using the MaxItems and Marker parameters.

If the UserName field is not specified, the UserName is determined implicitly
based on the AWS access key ID used to sign the request. Because this action
works for access keys under the AWS account, you can use this action to manage
root credentials even if the AWS account has no associated users.

To ensure the security of your AWS account, the secret access key is accessible
only during key and user creation.
     *
     * @error NoSuchEntityException   
     * @error ServiceFailureException   
     */
    listAccessKeys(params: IAM.ListAccessKeysRequest, callback?: (err: IAM.NoSuchEntityException | IAM.ServiceFailureException | any, data: IAM.ListAccessKeysResponse | any) => void): Request<IAM.ListAccessKeysResponse | any, IAM.NoSuchEntityException | IAM.ServiceFailureException | any>;
    /**
     * Lists the account alias associated with the AWS account (Note: you can have only
one). For information about using an AWS account alias, see Using an Alias for
Your AWS Account ID
[http://docs.aws.amazon.com/IAM/latest/UserGuide/AccountAlias.html] in the IAM
User Guide.
     *
     * @error ServiceFailureException   
     */
    listAccountAliases(params: IAM.ListAccountAliasesRequest, callback?: (err: IAM.ServiceFailureException | any, data: IAM.ListAccountAliasesResponse | any) => void): Request<IAM.ListAccountAliasesResponse | any, IAM.ServiceFailureException | any>;
    /**
     * Lists all managed policies that are attached to the specified IAM group.

An IAM group can also have inline policies embedded with it. To list the inline
policies for a group, use the ListGroupPolicies API. For information about
policies, see Managed Policies and Inline Policies
[http://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html] 
in the IAM User Guide.

You can paginate the results using the MaxItems and Marker parameters. You can
use the PathPrefix parameter to limit the list of policies to only those
matching the specified path prefix. If there are no policies attached to the
specified group (or none that match the specified path prefix), the action
returns an empty list.
     *
     * @error NoSuchEntityException   
     * @error InvalidInputException   
     * @error ServiceFailureException   
     */
    listAttachedGroupPolicies(params: IAM.ListAttachedGroupPoliciesRequest, callback?: (err: IAM.NoSuchEntityException | IAM.InvalidInputException | IAM.ServiceFailureException | any, data: IAM.ListAttachedGroupPoliciesResponse | any) => void): Request<IAM.ListAttachedGroupPoliciesResponse | any, IAM.NoSuchEntityException | IAM.InvalidInputException | IAM.ServiceFailureException | any>;
    /**
     * Lists all managed policies that are attached to the specified IAM role.

An IAM role can also have inline policies embedded with it. To list the inline
policies for a role, use the ListRolePolicies API. For information about
policies, see Managed Policies and Inline Policies
[http://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html] 
in the IAM User Guide.

You can paginate the results using the MaxItems and Marker parameters. You can
use the PathPrefix parameter to limit the list of policies to only those
matching the specified path prefix. If there are no policies attached to the
specified role (or none that match the specified path prefix), the action
returns an empty list.
     *
     * @error NoSuchEntityException   
     * @error InvalidInputException   
     * @error ServiceFailureException   
     */
    listAttachedRolePolicies(params: IAM.ListAttachedRolePoliciesRequest, callback?: (err: IAM.NoSuchEntityException | IAM.InvalidInputException | IAM.ServiceFailureException | any, data: IAM.ListAttachedRolePoliciesResponse | any) => void): Request<IAM.ListAttachedRolePoliciesResponse | any, IAM.NoSuchEntityException | IAM.InvalidInputException | IAM.ServiceFailureException | any>;
    /**
     * Lists all managed policies that are attached to the specified IAM user.

An IAM user can also have inline policies embedded with it. To list the inline
policies for a user, use the ListUserPolicies API. For information about
policies, see Managed Policies and Inline Policies
[http://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html] 
in the IAM User Guide.

You can paginate the results using the MaxItems and Marker parameters. You can
use the PathPrefix parameter to limit the list of policies to only those
matching the specified path prefix. If there are no policies attached to the
specified group (or none that match the specified path prefix), the action
returns an empty list.
     *
     * @error NoSuchEntityException   
     * @error InvalidInputException   
     * @error ServiceFailureException   
     */
    listAttachedUserPolicies(params: IAM.ListAttachedUserPoliciesRequest, callback?: (err: IAM.NoSuchEntityException | IAM.InvalidInputException | IAM.ServiceFailureException | any, data: IAM.ListAttachedUserPoliciesResponse | any) => void): Request<IAM.ListAttachedUserPoliciesResponse | any, IAM.NoSuchEntityException | IAM.InvalidInputException | IAM.ServiceFailureException | any>;
    /**
     * Lists all IAM users, groups, and roles that the specified managed policy is
attached to.

You can use the optional EntityFilter parameter to limit the results to a
particular type of entity (users, groups, or roles). For example, to list only
the roles that are attached to the specified policy, set EntityFilter to Role.

You can paginate the results using the MaxItems and Marker parameters.
     *
     * @error NoSuchEntityException   
     * @error InvalidInputException   
     * @error ServiceFailureException   
     */
    listEntitiesForPolicy(params: IAM.ListEntitiesForPolicyRequest, callback?: (err: IAM.NoSuchEntityException | IAM.InvalidInputException | IAM.ServiceFailureException | any, data: IAM.ListEntitiesForPolicyResponse | any) => void): Request<IAM.ListEntitiesForPolicyResponse | any, IAM.NoSuchEntityException | IAM.InvalidInputException | IAM.ServiceFailureException | any>;
    /**
     * Lists the names of the inline policies that are embedded in the specified IAM
group.

An IAM group can also have managed policies attached to it. To list the managed
policies that are attached to a group, use ListAttachedGroupPolicies. For more
information about policies, see Managed Policies and Inline Policies
[http://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html] 
in the IAM User Guide.

You can paginate the results using the MaxItems and Marker parameters. If there
are no inline policies embedded with the specified group, the action returns an
empty list.
     *
     * @error NoSuchEntityException   
     * @error ServiceFailureException   
     */
    listGroupPolicies(params: IAM.ListGroupPoliciesRequest, callback?: (err: IAM.NoSuchEntityException | IAM.ServiceFailureException | any, data: IAM.ListGroupPoliciesResponse | any) => void): Request<IAM.ListGroupPoliciesResponse | any, IAM.NoSuchEntityException | IAM.ServiceFailureException | any>;
    /**
     * Lists the IAM groups that have the specified path prefix.

 You can paginate the results using the MaxItems and Marker parameters.
     *
     * @error ServiceFailureException   
     */
    listGroups(params: IAM.ListGroupsRequest, callback?: (err: IAM.ServiceFailureException | any, data: IAM.ListGroupsResponse | any) => void): Request<IAM.ListGroupsResponse | any, IAM.ServiceFailureException | any>;
    /**
     * Lists the IAM groups that the specified IAM user belongs to.

You can paginate the results using the MaxItems and Marker parameters.
     *
     * @error NoSuchEntityException   
     * @error ServiceFailureException   
     */
    listGroupsForUser(params: IAM.ListGroupsForUserRequest, callback?: (err: IAM.NoSuchEntityException | IAM.ServiceFailureException | any, data: IAM.ListGroupsForUserResponse | any) => void): Request<IAM.ListGroupsForUserResponse | any, IAM.NoSuchEntityException | IAM.ServiceFailureException | any>;
    /**
     * Lists the instance profiles that have the specified path prefix. If there are
none, the action returns an empty list. For more information about instance
profiles, go to About Instance Profiles
[http://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html].

You can paginate the results using the MaxItems and Marker parameters.
     *
     * @error ServiceFailureException   
     */
    listInstanceProfiles(params: IAM.ListInstanceProfilesRequest, callback?: (err: IAM.ServiceFailureException | any, data: IAM.ListInstanceProfilesResponse | any) => void): Request<IAM.ListInstanceProfilesResponse | any, IAM.ServiceFailureException | any>;
    /**
     * Lists the instance profiles that have the specified associated IAM role. If
there are none, the action returns an empty list. For more information about
instance profiles, go to About Instance Profiles
[http://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html].

You can paginate the results using the MaxItems and Marker parameters.
     *
     * @error NoSuchEntityException   
     * @error ServiceFailureException   
     */
    listInstanceProfilesForRole(params: IAM.ListInstanceProfilesForRoleRequest, callback?: (err: IAM.NoSuchEntityException | IAM.ServiceFailureException | any, data: IAM.ListInstanceProfilesForRoleResponse | any) => void): Request<IAM.ListInstanceProfilesForRoleResponse | any, IAM.NoSuchEntityException | IAM.ServiceFailureException | any>;
    /**
     * Lists the MFA devices for an IAM user. If the request includes a IAM user name,
then this action lists all the MFA devices associated with the specified user.
If you do not specify a user name, IAM determines the user name implicitly based
on the AWS access key ID signing the request for this API.

You can paginate the results using the MaxItems and Marker parameters.
     *
     * @error NoSuchEntityException   
     * @error ServiceFailureException   
     */
    listMFADevices(params: IAM.ListMFADevicesRequest, callback?: (err: IAM.NoSuchEntityException | IAM.ServiceFailureException | any, data: IAM.ListMFADevicesResponse | any) => void): Request<IAM.ListMFADevicesResponse | any, IAM.NoSuchEntityException | IAM.ServiceFailureException | any>;
    /**
     * Lists information about the IAM OpenID Connect (OIDC) provider resource objects
defined in the AWS account.
     *
     * @error ServiceFailureException   
     */
    listOpenIDConnectProviders(params: IAM.ListOpenIDConnectProvidersRequest, callback?: (err: IAM.ServiceFailureException | any, data: IAM.ListOpenIDConnectProvidersResponse | any) => void): Request<IAM.ListOpenIDConnectProvidersResponse | any, IAM.ServiceFailureException | any>;
    /**
     * Lists all the managed policies that are available in your AWS account, including
your own customer-defined managed policies and all AWS managed policies.

You can filter the list of policies that is returned using the optional 
OnlyAttached, Scope, and PathPrefix parameters. For example, to list only the
customer managed policies in your AWS account, set Scope to Local. To list only
AWS managed policies, set Scope to AWS.

You can paginate the results using the MaxItems and Marker parameters.

For more information about managed policies, see Managed Policies and Inline
Policies
[http://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html] 
in the IAM User Guide.
     *
     * @error ServiceFailureException   
     */
    listPolicies(params: IAM.ListPoliciesRequest, callback?: (err: IAM.ServiceFailureException | any, data: IAM.ListPoliciesResponse | any) => void): Request<IAM.ListPoliciesResponse | any, IAM.ServiceFailureException | any>;
    /**
     * Lists information about the versions of the specified managed policy, including
the version that is currently set as the policy&#x27;s default version.

For more information about managed policies, see Managed Policies and Inline
Policies
[http://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html] 
in the IAM User Guide.
     *
     * @error NoSuchEntityException   
     * @error InvalidInputException   
     * @error ServiceFailureException   
     */
    listPolicyVersions(params: IAM.ListPolicyVersionsRequest, callback?: (err: IAM.NoSuchEntityException | IAM.InvalidInputException | IAM.ServiceFailureException | any, data: IAM.ListPolicyVersionsResponse | any) => void): Request<IAM.ListPolicyVersionsResponse | any, IAM.NoSuchEntityException | IAM.InvalidInputException | IAM.ServiceFailureException | any>;
    /**
     * Lists the names of the inline policies that are embedded in the specified IAM
role.

An IAM role can also have managed policies attached to it. To list the managed
policies that are attached to a role, use ListAttachedRolePolicies. For more
information about policies, see Managed Policies and Inline Policies
[http://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html] 
in the IAM User Guide.

You can paginate the results using the MaxItems and Marker parameters. If there
are no inline policies embedded with the specified role, the action returns an
empty list.
     *
     * @error NoSuchEntityException   
     * @error ServiceFailureException   
     */
    listRolePolicies(params: IAM.ListRolePoliciesRequest, callback?: (err: IAM.NoSuchEntityException | IAM.ServiceFailureException | any, data: IAM.ListRolePoliciesResponse | any) => void): Request<IAM.ListRolePoliciesResponse | any, IAM.NoSuchEntityException | IAM.ServiceFailureException | any>;
    /**
     * Lists the IAM roles that have the specified path prefix. If there are none, the
action returns an empty list. For more information about roles, go to Working
with Roles
[http://docs.aws.amazon.com/IAM/latest/UserGuide/WorkingWithRoles.html].

You can paginate the results using the MaxItems and Marker parameters.
     *
     * @error ServiceFailureException   
     */
    listRoles(params: IAM.ListRolesRequest, callback?: (err: IAM.ServiceFailureException | any, data: IAM.ListRolesResponse | any) => void): Request<IAM.ListRolesResponse | any, IAM.ServiceFailureException | any>;
    /**
     * Lists the SAML provider resource objects defined in IAM in the account.

 This operation requires Signature Version 4
[http://docs.aws.amazon.com/general/latest/gr/signature-version-4.html].
     *
     * @error ServiceFailureException   
     */
    listSAMLProviders(params: IAM.ListSAMLProvidersRequest, callback?: (err: IAM.ServiceFailureException | any, data: IAM.ListSAMLProvidersResponse | any) => void): Request<IAM.ListSAMLProvidersResponse | any, IAM.ServiceFailureException | any>;
    /**
     * Returns information about the SSH public keys associated with the specified IAM
user. If there are none, the action returns an empty list.

The SSH public keys returned by this action are used only for authenticating the
IAM user to an AWS CodeCommit repository. For more information about using SSH
keys to authenticate to an AWS CodeCommit repository, see Set up AWS CodeCommit
for SSH Connections
[http://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-credentials-ssh.html] 
in the AWS CodeCommit User Guide.

Although each user is limited to a small number of keys, you can still paginate
the results using the MaxItems and Marker parameters.
     *
     * @error NoSuchEntityException   
     */
    listSSHPublicKeys(params: IAM.ListSSHPublicKeysRequest, callback?: (err: IAM.NoSuchEntityException | any, data: IAM.ListSSHPublicKeysResponse | any) => void): Request<IAM.ListSSHPublicKeysResponse | any, IAM.NoSuchEntityException | any>;
    /**
     * Lists the server certificates stored in IAM that have the specified path prefix.
If none exist, the action returns an empty list.

 You can paginate the results using the MaxItems and Marker parameters.

For more information about working with server certificates, including a list of
AWS services that can use the server certificates that you manage with IAM, go
to Working with Server Certificates
[http://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html] 
in the IAM User Guide.
     *
     * @error ServiceFailureException   
     */
    listServerCertificates(params: IAM.ListServerCertificatesRequest, callback?: (err: IAM.ServiceFailureException | any, data: IAM.ListServerCertificatesResponse | any) => void): Request<IAM.ListServerCertificatesResponse | any, IAM.ServiceFailureException | any>;
    /**
     * Returns information about the signing certificates associated with the specified
IAM user. If there are none, the action returns an empty list.

Although each user is limited to a small number of signing certificates, you can
still paginate the results using the MaxItems and Marker parameters.

If the UserName field is not specified, the user name is determined implicitly
based on the AWS access key ID used to sign the request for this API. Because
this action works for access keys under the AWS account, you can use this action
to manage root credentials even if the AWS account has no associated users.
     *
     * @error NoSuchEntityException   
     * @error ServiceFailureException   
     */
    listSigningCertificates(params: IAM.ListSigningCertificatesRequest, callback?: (err: IAM.NoSuchEntityException | IAM.ServiceFailureException | any, data: IAM.ListSigningCertificatesResponse | any) => void): Request<IAM.ListSigningCertificatesResponse | any, IAM.NoSuchEntityException | IAM.ServiceFailureException | any>;
    /**
     * Lists the names of the inline policies embedded in the specified IAM user.

An IAM user can also have managed policies attached to it. To list the managed
policies that are attached to a user, use ListAttachedUserPolicies. For more
information about policies, see Managed Policies and Inline Policies
[http://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html] 
in the IAM User Guide.

You can paginate the results using the MaxItems and Marker parameters. If there
are no inline policies embedded with the specified user, the action returns an
empty list.
     *
     * @error NoSuchEntityException   
     * @error ServiceFailureException   
     */
    listUserPolicies(params: IAM.ListUserPoliciesRequest, callback?: (err: IAM.NoSuchEntityException | IAM.ServiceFailureException | any, data: IAM.ListUserPoliciesResponse | any) => void): Request<IAM.ListUserPoliciesResponse | any, IAM.NoSuchEntityException | IAM.ServiceFailureException | any>;
    /**
     * Lists the IAM users that have the specified path prefix. If no path prefix is
specified, the action returns all users in the AWS account. If there are none,
the action returns an empty list.

You can paginate the results using the MaxItems and Marker parameters.
     *
     * @error ServiceFailureException   
     */
    listUsers(params: IAM.ListUsersRequest, callback?: (err: IAM.ServiceFailureException | any, data: IAM.ListUsersResponse | any) => void): Request<IAM.ListUsersResponse | any, IAM.ServiceFailureException | any>;
    /**
     * Lists the virtual MFA devices defined in the AWS account by assignment status.
If you do not specify an assignment status, the action returns a list of all
virtual MFA devices. Assignment status can be Assigned, Unassigned, or Any.

You can paginate the results using the MaxItems and Marker parameters.
     *
     */
    listVirtualMFADevices(params: IAM.ListVirtualMFADevicesRequest, callback?: (err: any, data: IAM.ListVirtualMFADevicesResponse | any) => void): Request<IAM.ListVirtualMFADevicesResponse | any, any>;
    /**
     * Adds or updates an inline policy document that is embedded in the specified IAM
group.

A user can also have managed policies attached to it. To attach a managed policy
to a group, use AttachGroupPolicy. To create a new managed policy, use 
CreatePolicy. For information about policies, see Managed Policies and Inline
Policies
[http://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html] 
in the IAM User Guide.

For information about limits on the number of inline policies that you can embed
in a group, see Limitations on IAM Entities
[http://docs.aws.amazon.com/IAM/latest/UserGuide/LimitationsOnEntities.html] in
the IAM User Guide.

Because policy documents can be large, you should use POST rather than GET when
calling PutGroupPolicy. For general information about using the Query API with
IAM, go to Making Query Requests
[http://docs.aws.amazon.com/IAM/latest/UserGuide/IAM_UsingQueryAPI.html] in the 
IAM User Guide.
     *
     * @error LimitExceededException   
     * @error MalformedPolicyDocumentException   
     * @error NoSuchEntityException   
     * @error ServiceFailureException   
     */
    putGroupPolicy(params: IAM.PutGroupPolicyRequest, callback?: (err: IAM.LimitExceededException | IAM.MalformedPolicyDocumentException | IAM.NoSuchEntityException | IAM.ServiceFailureException | any, data: any) => void): Request<any, IAM.LimitExceededException | IAM.MalformedPolicyDocumentException | IAM.NoSuchEntityException | IAM.ServiceFailureException | any>;
    /**
     * Adds or updates an inline policy document that is embedded in the specified IAM
role.

When you embed an inline policy in a role, the inline policy is used as part of
the role&#x27;s access (permissions) policy. The role&#x27;s trust policy is created at
the same time as the role, using CreateRole. You can update a role&#x27;s trust
policy using UpdateAssumeRolePolicy. For more information about IAM roles, go to 
Using Roles to Delegate Permissions and Federate Identities
[http://docs.aws.amazon.com/IAM/latest/UserGuide/roles-toplevel.html].

A role can also have a managed policy attached to it. To attach a managed policy
to a role, use AttachRolePolicy. To create a new managed policy, use 
CreatePolicy. For information about policies, see Managed Policies and Inline
Policies
[http://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html] 
in the IAM User Guide.

For information about limits on the number of inline policies that you can embed
with a role, see Limitations on IAM Entities
[http://docs.aws.amazon.com/IAM/latest/UserGuide/LimitationsOnEntities.html] in
the IAM User Guide.

Because policy documents can be large, you should use POST rather than GET when
calling PutRolePolicy. For general information about using the Query API with
IAM, go to Making Query Requests
[http://docs.aws.amazon.com/IAM/latest/UserGuide/IAM_UsingQueryAPI.html] in the 
IAM User Guide.
     *
     * @error LimitExceededException   
     * @error MalformedPolicyDocumentException   
     * @error NoSuchEntityException   
     * @error ServiceFailureException   
     */
    putRolePolicy(params: IAM.PutRolePolicyRequest, callback?: (err: IAM.LimitExceededException | IAM.MalformedPolicyDocumentException | IAM.NoSuchEntityException | IAM.ServiceFailureException | any, data: any) => void): Request<any, IAM.LimitExceededException | IAM.MalformedPolicyDocumentException | IAM.NoSuchEntityException | IAM.ServiceFailureException | any>;
    /**
     * Adds or updates an inline policy document that is embedded in the specified IAM
user.

An IAM user can also have a managed policy attached to it. To attach a managed
policy to a user, use AttachUserPolicy. To create a new managed policy, use 
CreatePolicy. For information about policies, see Managed Policies and Inline
Policies
[http://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html] 
in the IAM User Guide.

For information about limits on the number of inline policies that you can embed
in a user, see Limitations on IAM Entities
[http://docs.aws.amazon.com/IAM/latest/UserGuide/LimitationsOnEntities.html] in
the IAM User Guide.

Because policy documents can be large, you should use POST rather than GET when
calling PutUserPolicy. For general information about using the Query API with
IAM, go to Making Query Requests
[http://docs.aws.amazon.com/IAM/latest/UserGuide/IAM_UsingQueryAPI.html] in the 
IAM User Guide.
     *
     * @error LimitExceededException   
     * @error MalformedPolicyDocumentException   
     * @error NoSuchEntityException   
     * @error ServiceFailureException   
     */
    putUserPolicy(params: IAM.PutUserPolicyRequest, callback?: (err: IAM.LimitExceededException | IAM.MalformedPolicyDocumentException | IAM.NoSuchEntityException | IAM.ServiceFailureException | any, data: any) => void): Request<any, IAM.LimitExceededException | IAM.MalformedPolicyDocumentException | IAM.NoSuchEntityException | IAM.ServiceFailureException | any>;
    /**
     * Removes the specified client ID (also known as audience) from the list of client
IDs registered for the specified IAM OpenID Connect (OIDC) provider resource
object.

This action is idempotent; it does not fail or return an error if you try to
remove a client ID that does not exist.
     *
     * @error InvalidInputException   
     * @error NoSuchEntityException   
     * @error ServiceFailureException   
     */
    removeClientIDFromOpenIDConnectProvider(params: IAM.RemoveClientIDFromOpenIDConnectProviderRequest, callback?: (err: IAM.InvalidInputException | IAM.NoSuchEntityException | IAM.ServiceFailureException | any, data: any) => void): Request<any, IAM.InvalidInputException | IAM.NoSuchEntityException | IAM.ServiceFailureException | any>;
    /**
     * Removes the specified IAM role from the specified EC2 instance profile.

Make sure you do not have any Amazon EC2 instances running with the role you are
about to remove from the instance profile. Removing a role from an instance
profile that is associated with a running instance break any applications
running on the instance.

 For more information about IAM roles, go to Working with Roles
[http://docs.aws.amazon.com/IAM/latest/UserGuide/WorkingWithRoles.html]. For
more information about instance profiles, go to About Instance Profiles
[http://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html].
     *
     * @error NoSuchEntityException   
     * @error LimitExceededException   
     * @error ServiceFailureException   
     */
    removeRoleFromInstanceProfile(params: IAM.RemoveRoleFromInstanceProfileRequest, callback?: (err: IAM.NoSuchEntityException | IAM.LimitExceededException | IAM.ServiceFailureException | any, data: any) => void): Request<any, IAM.NoSuchEntityException | IAM.LimitExceededException | IAM.ServiceFailureException | any>;
    /**
     * Removes the specified user from the specified group.
     *
     * @error NoSuchEntityException   
     * @error LimitExceededException   
     * @error ServiceFailureException   
     */
    removeUserFromGroup(params: IAM.RemoveUserFromGroupRequest, callback?: (err: IAM.NoSuchEntityException | IAM.LimitExceededException | IAM.ServiceFailureException | any, data: any) => void): Request<any, IAM.NoSuchEntityException | IAM.LimitExceededException | IAM.ServiceFailureException | any>;
    /**
     * Synchronizes the specified MFA device with its IAM resource object on the AWS
servers.

For more information about creating and working with virtual MFA devices, go to 
Using a Virtual MFA Device
[http://docs.aws.amazon.com/IAM/latest/UserGuide/Using_VirtualMFA.html] in the 
IAM User Guide.
     *
     * @error InvalidAuthenticationCodeException   
     * @error NoSuchEntityException   
     * @error LimitExceededException   
     * @error ServiceFailureException   
     */
    resyncMFADevice(params: IAM.ResyncMFADeviceRequest, callback?: (err: IAM.InvalidAuthenticationCodeException | IAM.NoSuchEntityException | IAM.LimitExceededException | IAM.ServiceFailureException | any, data: any) => void): Request<any, IAM.InvalidAuthenticationCodeException | IAM.NoSuchEntityException | IAM.LimitExceededException | IAM.ServiceFailureException | any>;
    /**
     * Sets the specified version of the specified policy as the policy&#x27;s default
(operative) version.

This action affects all users, groups, and roles that the policy is attached to.
To list the users, groups, and roles that the policy is attached to, use the 
ListEntitiesForPolicy API.

For information about managed policies, see Managed Policies and Inline Policies
[http://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html] 
in the IAM User Guide.
     *
     * @error NoSuchEntityException   
     * @error InvalidInputException   
     * @error LimitExceededException   
     * @error ServiceFailureException   
     */
    setDefaultPolicyVersion(params: IAM.SetDefaultPolicyVersionRequest, callback?: (err: IAM.NoSuchEntityException | IAM.InvalidInputException | IAM.LimitExceededException | IAM.ServiceFailureException | any, data: any) => void): Request<any, IAM.NoSuchEntityException | IAM.InvalidInputException | IAM.LimitExceededException | IAM.ServiceFailureException | any>;
    /**
     * Simulate how a set of IAM policies and optionally a resource-based policy works
with a list of API actions and AWS resources to determine the policies&#x27;
effective permissions. The policies are provided as strings.

The simulation does not perform the API actions; it only checks the
authorization to determine if the simulated policies allow or deny the actions.

If you want to simulate existing policies attached to an IAM user, group, or
role, use SimulatePrincipalPolicy instead.

Context keys are variables maintained by AWS and its services that provide
details about the context of an API query request. You can use the Condition 
element of an IAM policy to evaluate context keys. To get the list of context
keys that the policies require for correct simulation, use 
GetContextKeysForCustomPolicy.

If the output is long, you can use MaxItems and Marker parameters to paginate
the results.
     *
     * @error InvalidInputException   
     * @error PolicyEvaluationException   
     */
    simulateCustomPolicy(params: IAM.SimulateCustomPolicyRequest, callback?: (err: IAM.InvalidInputException | IAM.PolicyEvaluationException | any, data: IAM.SimulatePolicyResponse | any) => void): Request<IAM.SimulatePolicyResponse | any, IAM.InvalidInputException | IAM.PolicyEvaluationException | any>;
    /**
     * Simulate how a set of IAM policies attached to an IAM entity works with a list
of API actions and AWS resources to determine the policies&#x27; effective
permissions. The entity can be an IAM user, group, or role. If you specify a
user, then the simulation also includes all of the policies that are attached to
groups that the user belongs to .

You can optionally include a list of one or more additional policies specified
as strings to include in the simulation. If you want to simulate only policies
specified as strings, use SimulateCustomPolicy instead.

You can also optionally include one resource-based policy to be evaluated with
each of the resources included in the simulation.

The simulation does not perform the API actions, it only checks the
authorization to determine if the simulated policies allow or deny the actions.

 Note: This API discloses information about the permissions granted to other
users. If you do not want users to see other user&#x27;s permissions, then consider
allowing them to use SimulateCustomPolicy instead.

Context keys are variables maintained by AWS and its services that provide
details about the context of an API query request. You can use the Condition 
element of an IAM policy to evaluate context keys. To get the list of context
keys that the policies require for correct simulation, use 
GetContextKeysForPrincipalPolicy.

If the output is long, you can use the MaxItems and Marker parameters to
paginate the results.
     *
     * @error NoSuchEntityException   
     * @error InvalidInputException   
     * @error PolicyEvaluationException   
     */
    simulatePrincipalPolicy(params: IAM.SimulatePrincipalPolicyRequest, callback?: (err: IAM.NoSuchEntityException | IAM.InvalidInputException | IAM.PolicyEvaluationException | any, data: IAM.SimulatePolicyResponse | any) => void): Request<IAM.SimulatePolicyResponse | any, IAM.NoSuchEntityException | IAM.InvalidInputException | IAM.PolicyEvaluationException | any>;
    /**
     * Changes the status of the specified access key from Active to Inactive, or vice
versa. This action can be used to disable a user&#x27;s key as part of a key rotation
work flow.

If the UserName field is not specified, the UserName is determined implicitly
based on the AWS access key ID used to sign the request. Because this action
works for access keys under the AWS account, you can use this action to manage
root credentials even if the AWS account has no associated users.

For information about rotating keys, see Managing Keys and Certificates
[http://docs.aws.amazon.com/IAM/latest/UserGuide/ManagingCredentials.html] in
the IAM User Guide.
     *
     * @error NoSuchEntityException   
     * @error LimitExceededException   
     * @error ServiceFailureException   
     */
    updateAccessKey(params: IAM.UpdateAccessKeyRequest, callback?: (err: IAM.NoSuchEntityException | IAM.LimitExceededException | IAM.ServiceFailureException | any, data: any) => void): Request<any, IAM.NoSuchEntityException | IAM.LimitExceededException | IAM.ServiceFailureException | any>;
    /**
     * Updates the password policy settings for the AWS account.

This action does not support partial updates. No parameters are required, but if
you do not specify a parameter, that parameter&#x27;s value reverts to its default
value. See the Request Parameters section for each parameter&#x27;s default value.

 For more information about using a password policy, see Managing an IAM
Password Policy
[http://docs.aws.amazon.com/IAM/latest/UserGuide/Using_ManagingPasswordPolicies.html] 
in the IAM User Guide.
     *
     * @error NoSuchEntityException   
     * @error MalformedPolicyDocumentException   
     * @error LimitExceededException   
     * @error ServiceFailureException   
     */
    updateAccountPasswordPolicy(params: IAM.UpdateAccountPasswordPolicyRequest, callback?: (err: IAM.NoSuchEntityException | IAM.MalformedPolicyDocumentException | IAM.LimitExceededException | IAM.ServiceFailureException | any, data: any) => void): Request<any, IAM.NoSuchEntityException | IAM.MalformedPolicyDocumentException | IAM.LimitExceededException | IAM.ServiceFailureException | any>;
    /**
     * Updates the policy that grants an IAM entity permission to assume a role. This
is typically referred to as the &quot;role trust policy&quot;. For more information about
roles, go to Using Roles to Delegate Permissions and Federate Identities
[http://docs.aws.amazon.com/IAM/latest/UserGuide/roles-toplevel.html].
     *
     * @error NoSuchEntityException   
     * @error MalformedPolicyDocumentException   
     * @error LimitExceededException   
     * @error ServiceFailureException   
     */
    updateAssumeRolePolicy(params: IAM.UpdateAssumeRolePolicyRequest, callback?: (err: IAM.NoSuchEntityException | IAM.MalformedPolicyDocumentException | IAM.LimitExceededException | IAM.ServiceFailureException | any, data: any) => void): Request<any, IAM.NoSuchEntityException | IAM.MalformedPolicyDocumentException | IAM.LimitExceededException | IAM.ServiceFailureException | any>;
    /**
     * Updates the name and/or the path of the specified IAM group.

 You should understand the implications of changing a group&#x27;s path or name. For
more information, see Renaming Users and Groups
[http://docs.aws.amazon.com/IAM/latest/UserGuide/Using_WorkingWithGroupsAndUsers.html] 
in the IAM User Guide.

To change an IAM group name the requester must have appropriate permissions on
both the source object and the target object. For example, to change &quot;Managers&quot;
to &quot;MGRs&quot;, the entity making the request must have permission on both &quot;Managers&quot;
and &quot;MGRs&quot;, or must have permission on all (&amp;#42;). For more information about
permissions, see Permissions and Policies
[http://docs.aws.amazon.com/IAM/latest/UserGuide/PermissionsAndPolicies.html].
     *
     * @error NoSuchEntityException   
     * @error EntityAlreadyExistsException   
     * @error LimitExceededException   
     * @error ServiceFailureException   
     */
    updateGroup(params: IAM.UpdateGroupRequest, callback?: (err: IAM.NoSuchEntityException | IAM.EntityAlreadyExistsException | IAM.LimitExceededException | IAM.ServiceFailureException | any, data: any) => void): Request<any, IAM.NoSuchEntityException | IAM.EntityAlreadyExistsException | IAM.LimitExceededException | IAM.ServiceFailureException | any>;
    /**
     * Changes the password for the specified IAM user.

IAM users can change their own passwords by calling ChangePassword. For more
information about modifying passwords, see Managing Passwords
[http://docs.aws.amazon.com/IAM/latest/UserGuide/Using_ManagingLogins.html] in
the IAM User Guide.
     *
     * @error EntityTemporarilyUnmodifiableException   
     * @error NoSuchEntityException   
     * @error PasswordPolicyViolationException   
     * @error LimitExceededException   
     * @error ServiceFailureException   
     */
    updateLoginProfile(params: IAM.UpdateLoginProfileRequest, callback?: (err: IAM.EntityTemporarilyUnmodifiableException | IAM.NoSuchEntityException | IAM.PasswordPolicyViolationException | IAM.LimitExceededException | IAM.ServiceFailureException | any, data: any) => void): Request<any, IAM.EntityTemporarilyUnmodifiableException | IAM.NoSuchEntityException | IAM.PasswordPolicyViolationException | IAM.LimitExceededException | IAM.ServiceFailureException | any>;
    /**
     * Replaces the existing list of server certificate thumbprints associated with an
OpenID Connect (OIDC) provider resource object with a new list of thumbprints.

The list that you pass with this action completely replaces the existing list of
thumbprints. (The lists are not merged.)

Typically, you need to update a thumbprint only when the identity provider&#x27;s
certificate changes, which occurs rarely. However, if the provider&#x27;s certificate 
does change, any attempt to assume an IAM role that specifies the OIDC provider
as a principal fails until the certificate thumbprint is updated.

Because trust for the OIDC provider is ultimately derived from the provider&#x27;s
certificate and is validated by the thumbprint, it is a best practice to limit
access to the UpdateOpenIDConnectProviderThumbprint action to highly-privileged
users.
     *
     * @error InvalidInputException   
     * @error NoSuchEntityException   
     * @error ServiceFailureException   
     */
    updateOpenIDConnectProviderThumbprint(params: IAM.UpdateOpenIDConnectProviderThumbprintRequest, callback?: (err: IAM.InvalidInputException | IAM.NoSuchEntityException | IAM.ServiceFailureException | any, data: any) => void): Request<any, IAM.InvalidInputException | IAM.NoSuchEntityException | IAM.ServiceFailureException | any>;
    /**
     * Updates the metadata document for an existing SAML provider resource object.

This operation requires Signature Version 4
[http://docs.aws.amazon.com/general/latest/gr/signature-version-4.html].
     *
     * @error NoSuchEntityException   
     * @error InvalidInputException   
     * @error LimitExceededException   
     * @error ServiceFailureException   
     */
    updateSAMLProvider(params: IAM.UpdateSAMLProviderRequest, callback?: (err: IAM.NoSuchEntityException | IAM.InvalidInputException | IAM.LimitExceededException | IAM.ServiceFailureException | any, data: IAM.UpdateSAMLProviderResponse | any) => void): Request<IAM.UpdateSAMLProviderResponse | any, IAM.NoSuchEntityException | IAM.InvalidInputException | IAM.LimitExceededException | IAM.ServiceFailureException | any>;
    /**
     * Sets the status of an IAM user&#x27;s SSH public key to active or inactive. SSH
public keys that are inactive cannot be used for authentication. This action can
be used to disable a user&#x27;s SSH public key as part of a key rotation work flow.

The SSH public key affected by this action is used only for authenticating the
associated IAM user to an AWS CodeCommit repository. For more information about
using SSH keys to authenticate to an AWS CodeCommit repository, see Set up AWS
CodeCommit for SSH Connections
[http://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-credentials-ssh.html] 
in the AWS CodeCommit User Guide.
     *
     * @error NoSuchEntityException   
     */
    updateSSHPublicKey(params: IAM.UpdateSSHPublicKeyRequest, callback?: (err: IAM.NoSuchEntityException | any, data: any) => void): Request<any, IAM.NoSuchEntityException | any>;
    /**
     * Updates the name and/or the path of the specified server certificate stored in
IAM.

For more information about working with server certificates, including a list of
AWS services that can use the server certificates that you manage with IAM, go
to Working with Server Certificates
[http://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html] 
in the IAM User Guide.

You should understand the implications of changing a server certificate&#x27;s path
or name. For more information, see Renaming a Server Certificate
[http://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs_manage.html#RenamingServerCerts] 
in the IAM User Guide.

To change a server certificate name the requester must have appropriate
permissions on both the source object and the target object. For example, to
change the name from &quot;ProductionCert&quot; to &quot;ProdCert&quot;, the entity making the
request must have permission on &quot;ProductionCert&quot; and &quot;ProdCert&quot;, or must have
permission on all (&amp;#42;). For more information about permissions, see Access
Management [http://docs.aws.amazon.com/IAM/latest/UserGuide/access.html] in the 
IAM User Guide.
     *
     * @error NoSuchEntityException   
     * @error EntityAlreadyExistsException   
     * @error LimitExceededException   
     * @error ServiceFailureException   
     */
    updateServerCertificate(params: IAM.UpdateServerCertificateRequest, callback?: (err: IAM.NoSuchEntityException | IAM.EntityAlreadyExistsException | IAM.LimitExceededException | IAM.ServiceFailureException | any, data: any) => void): Request<any, IAM.NoSuchEntityException | IAM.EntityAlreadyExistsException | IAM.LimitExceededException | IAM.ServiceFailureException | any>;
    /**
     * Changes the status of the specified user signing certificate from active to
disabled, or vice versa. This action can be used to disable an IAM user&#x27;s
signing certificate as part of a certificate rotation work flow.

If the UserName field is not specified, the UserName is determined implicitly
based on the AWS access key ID used to sign the request. Because this action
works for access keys under the AWS account, you can use this action to manage
root credentials even if the AWS account has no associated users.
     *
     * @error NoSuchEntityException   
     * @error LimitExceededException   
     * @error ServiceFailureException   
     */
    updateSigningCertificate(params: IAM.UpdateSigningCertificateRequest, callback?: (err: IAM.NoSuchEntityException | IAM.LimitExceededException | IAM.ServiceFailureException | any, data: any) => void): Request<any, IAM.NoSuchEntityException | IAM.LimitExceededException | IAM.ServiceFailureException | any>;
    /**
     * Updates the name and/or the path of the specified IAM user.

 You should understand the implications of changing an IAM user&#x27;s path or name.
For more information, see Renaming an IAM User
[http://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_manage.html#id_users_renaming] 
and Renaming an IAM Group
[http://docs.aws.amazon.com/IAM/latest/UserGuide/id_groups_manage_rename.html] 
in the IAM User Guide.

 To change a user name the requester must have appropriate permissions on both
the source object and the target object. For example, to change Bob to Robert,
the entity making the request must have permission on Bob and Robert, or must
have permission on all (&amp;#42;). For more information about permissions, see 
Permissions and Policies
[http://docs.aws.amazon.com/IAM/latest/UserGuide/PermissionsAndPolicies.html].
     *
     * @error NoSuchEntityException   
     * @error LimitExceededException   
     * @error EntityAlreadyExistsException   
     * @error EntityTemporarilyUnmodifiableException   
     * @error ServiceFailureException   
     */
    updateUser(params: IAM.UpdateUserRequest, callback?: (err: IAM.NoSuchEntityException | IAM.LimitExceededException | IAM.EntityAlreadyExistsException | IAM.EntityTemporarilyUnmodifiableException | IAM.ServiceFailureException | any, data: any) => void): Request<any, IAM.NoSuchEntityException | IAM.LimitExceededException | IAM.EntityAlreadyExistsException | IAM.EntityTemporarilyUnmodifiableException | IAM.ServiceFailureException | any>;
    /**
     * Uploads an SSH public key and associates it with the specified IAM user.

The SSH public key uploaded by this action can be used only for authenticating
the associated IAM user to an AWS CodeCommit repository. For more information
about using SSH keys to authenticate to an AWS CodeCommit repository, see Set up
AWS CodeCommit for SSH Connections
[http://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-credentials-ssh.html] 
in the AWS CodeCommit User Guide.
     *
     * @error LimitExceededException   
     * @error NoSuchEntityException   
     * @error InvalidPublicKeyException   
     * @error DuplicateSSHPublicKeyException   
     * @error UnrecognizedPublicKeyEncodingException   
     */
    uploadSSHPublicKey(params: IAM.UploadSSHPublicKeyRequest, callback?: (err: IAM.LimitExceededException | IAM.NoSuchEntityException | IAM.InvalidPublicKeyException | IAM.DuplicateSSHPublicKeyException | IAM.UnrecognizedPublicKeyEncodingException | any, data: IAM.UploadSSHPublicKeyResponse | any) => void): Request<IAM.UploadSSHPublicKeyResponse | any, IAM.LimitExceededException | IAM.NoSuchEntityException | IAM.InvalidPublicKeyException | IAM.DuplicateSSHPublicKeyException | IAM.UnrecognizedPublicKeyEncodingException | any>;
    /**
     * Uploads a server certificate entity for the AWS account. The server certificate
entity includes a public key certificate, a private key, and an optional
certificate chain, which should all be PEM-encoded.

For more information about working with server certificates, including a list of
AWS services that can use the server certificates that you manage with IAM, go
to Working with Server Certificates
[http://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html] 
in the IAM User Guide.

For information about the number of server certificates you can upload, see 
Limitations on IAM Entities and Objects
[http://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-limits.html] in
the IAM User Guide.

Because the body of the public key certificate, private key, and the certificate
chain can be large, you should use POST rather than GET when calling 
UploadServerCertificate. For information about setting up signatures and
authorization through the API, go to Signing AWS API Requests
[http://docs.aws.amazon.com/general/latest/gr/signing_aws_api_requests.html] in
the AWS General Reference. For general information about using the Query API
with IAM, go to Calling the API by Making HTTP Query Requests
[http://docs.aws.amazon.com/IAM/latest/UserGuide/programming.html] in the IAM
User Guide.
     *
     * @error LimitExceededException   
     * @error EntityAlreadyExistsException   
     * @error MalformedCertificateException   
     * @error KeyPairMismatchException   
     * @error ServiceFailureException   
     */
    uploadServerCertificate(params: IAM.UploadServerCertificateRequest, callback?: (err: IAM.LimitExceededException | IAM.EntityAlreadyExistsException | IAM.MalformedCertificateException | IAM.KeyPairMismatchException | IAM.ServiceFailureException | any, data: IAM.UploadServerCertificateResponse | any) => void): Request<IAM.UploadServerCertificateResponse | any, IAM.LimitExceededException | IAM.EntityAlreadyExistsException | IAM.MalformedCertificateException | IAM.KeyPairMismatchException | IAM.ServiceFailureException | any>;
    /**
     * Uploads an X.509 signing certificate and associates it with the specified IAM
user. Some AWS services use X.509 signing certificates to validate requests that
are signed with a corresponding private key. When you upload the certificate,
its default status is Active.

If the UserName field is not specified, the IAM user name is determined
implicitly based on the AWS access key ID used to sign the request. Because this
action works for access keys under the AWS account, you can use this action to
manage root credentials even if the AWS account has no associated users.

Because the body of a X.509 certificate can be large, you should use POST rather
than GET when calling UploadSigningCertificate. For information about setting up
signatures and authorization through the API, go to Signing AWS API Requests
[http://docs.aws.amazon.com/general/latest/gr/signing_aws_api_requests.html] in
the AWS General Reference. For general information about using the Query API
with IAM, go to Making Query Requests
[http://docs.aws.amazon.com/IAM/latest/UserGuide/IAM_UsingQueryAPI.html] in the 
IAM User Guide.
     *
     * @error LimitExceededException   
     * @error EntityAlreadyExistsException   
     * @error MalformedCertificateException   
     * @error InvalidCertificateException   
     * @error DuplicateCertificateException   
     * @error NoSuchEntityException   
     * @error ServiceFailureException   
     */
    uploadSigningCertificate(params: IAM.UploadSigningCertificateRequest, callback?: (err: IAM.LimitExceededException | IAM.EntityAlreadyExistsException | IAM.MalformedCertificateException | IAM.InvalidCertificateException | IAM.DuplicateCertificateException | IAM.NoSuchEntityException | IAM.ServiceFailureException | any, data: IAM.UploadSigningCertificateResponse | any) => void): Request<IAM.UploadSigningCertificateResponse | any, IAM.LimitExceededException | IAM.EntityAlreadyExistsException | IAM.MalformedCertificateException | IAM.InvalidCertificateException | IAM.DuplicateCertificateException | IAM.NoSuchEntityException | IAM.ServiceFailureException | any>;

  }

  export module IAM {

    export type ActionNameListType = ActionNameType[];

    export type ActionNameType = string;

    export type BootstrapDatum = any;

    export type ColumnNumber = number;

    export type ContextEntryListType = ContextEntry[];

    export type ContextKeyNameType = string;

    export type ContextKeyNamesResultListType = ContextKeyNameType[];

    export type ContextKeyTypeEnum = string;

    export type ContextKeyValueListType = ContextKeyValueType[];

    export type ContextKeyValueType = string;

    export type EntityType = string;

    export type EvalDecisionDetailsType = { [key: string]: PolicyEvaluationDecisionType };

    export type EvalDecisionSourceType = string;

    export type EvaluationResultsListType = EvaluationResult[];

    export type LineNumber = number;

    export type ManagedPolicyDetailListType = ManagedPolicyDetail[];

    export type OpenIDConnectProviderListType = OpenIDConnectProviderListEntry[];

    export type OpenIDConnectProviderUrlType = string;

    export type PolicyEvaluationDecisionType = string;

    export type PolicyGroupListType = PolicyGroup[];

    export type PolicyIdentifierType = string;

    export type PolicyRoleListType = PolicyRole[];

    export type PolicySourceType = string;

    export type PolicyUserListType = PolicyUser[];

    export type ReportContentType = any;

    export type ReportFormatType = string;

    export type ReportStateDescriptionType = string;

    export type ReportStateType = string;

    export type ResourceHandlingOptionType = string;

    export type ResourceNameListType = ResourceNameType[];

    export type ResourceNameType = string;

    export type ResourceSpecificResultListType = ResourceSpecificResult[];

    export type SAMLMetadataDocumentType = string;

    export type SAMLProviderListType = SAMLProviderListEntry[];

    export type SAMLProviderNameType = string;

    export type SSHPublicKeyListType = SSHPublicKeyMetadata[];

    export type SimulationPolicyListType = policyDocumentType[];

    export type StatementListType = Statement[];

    export type accessKeyIdType = string;

    export type accessKeyMetadataListType = AccessKeyMetadata[];

    export type accessKeySecretType = string;

    export type accountAliasListType = accountAliasType[];

    export type accountAliasType = string;

    export type arnType = string;

    export type assignmentStatusType = string;

    export type attachedPoliciesListType = AttachedPolicy[];

    export type attachmentCountType = number;

    export type authenticationCodeType = string;

    export type booleanObjectType = boolean;

    export type booleanType = boolean;

    export type certificateBodyType = string;

    export type certificateChainType = string;

    export type certificateIdType = string;

    export type certificateListType = SigningCertificate[];

    export type clientIDListType = clientIDType[];

    export type clientIDType = string;

    export type credentialReportExpiredExceptionMessage = string;

    export type credentialReportNotPresentExceptionMessage = string;

    export type credentialReportNotReadyExceptionMessage = string;

    export type dateType = number;

    export type deleteConflictMessage = string;

    export type duplicateCertificateMessage = string;

    export type duplicateSSHPublicKeyMessage = string;

    export type encodingType = string;

    export type entityAlreadyExistsMessage = string;

    export type entityListType = EntityType[];

    export type entityTemporarilyUnmodifiableMessage = string;

    export type existingUserNameType = string;

    export type groupDetailListType = GroupDetail[];

    export type groupListType = Group[];

    export type groupNameListType = groupNameType[];

    export type groupNameType = string;

    export type idType = string;

    export type instanceProfileListType = InstanceProfile[];

    export type instanceProfileNameType = string;

    export type invalidAuthenticationCodeMessage = string;

    export type invalidCertificateMessage = string;

    export type invalidInputMessage = string;

    export type invalidPublicKeyMessage = string;

    export type invalidUserTypeMessage = string;

    export type keyPairMismatchMessage = string;

    export type limitExceededMessage = string;

    export type malformedCertificateMessage = string;

    export type malformedPolicyDocumentMessage = string;

    export type markerType = string;

    export type maxItemsType = number;

    export type maxPasswordAgeType = number;

    export type mfaDeviceListType = MFADevice[];

    export type minimumPasswordLengthType = number;

    export type noSuchEntityMessage = string;

    export type passwordPolicyViolationMessage = string;

    export type passwordReusePreventionType = number;

    export type passwordType = string;

    export type pathPrefixType = string;

    export type pathType = string;

    export type policyDescriptionType = string;

    export type policyDetailListType = PolicyDetail[];

    export type policyDocumentType = string;

    export type policyDocumentVersionListType = PolicyVersion[];

    export type policyEvaluationErrorMessage = string;

    export type policyListType = Policy[];

    export type policyNameListType = policyNameType[];

    export type policyNameType = string;

    export type policyPathType = string;

    export type policyScopeType = string;

    export type policyVersionIdType = string;

    export type privateKeyType = string;

    export type publicKeyFingerprintType = string;

    export type publicKeyIdType = string;

    export type publicKeyMaterialType = string;

    export type roleDetailListType = RoleDetail[];

    export type roleListType = Role[];

    export type roleNameType = string;

    export type serialNumberType = string;

    export type serverCertificateMetadataListType = ServerCertificateMetadata[];

    export type serverCertificateNameType = string;

    export type serviceFailureExceptionMessage = string;

    export type statusType = string;

    export type stringType = string;

    export type summaryKeyType = string;

    export type summaryMapType = { [key: string]: summaryValueType };

    export type summaryValueType = number;

    export type thumbprintListType = thumbprintType[];

    export type thumbprintType = string;

    export type unrecognizedPublicKeyEncodingMessage = string;

    export type userDetailListType = UserDetail[];

    export type userListType = User[];

    export type userNameType = string;

    export type virtualMFADeviceListType = VirtualMFADevice[];

    export type virtualMFADeviceName = string;

    export interface AccessKey {
      /** The name of the IAM user that the access key is associated with. **/
      UserName: userNameType;
      /** The ID for this access key. **/
      AccessKeyId: accessKeyIdType;
      /** The status of the access key. Active means the key is valid for API calls, while 
Inactive means it is not. **/
      Status: statusType;
      /** The secret key used to sign requests. **/
      SecretAccessKey: accessKeySecretType;
      /** The date when the access key was created. **/
      CreateDate?: dateType;
    }
    export interface AccessKeyLastUsed {
      /** The date and time, in ISO 8601 date-time format [http://www.iso.org/iso/iso8601]
, when the access key was most recently used. This field is null when:

&amp;#42;  The user does not have an access key.
 
 
*  An access key exists but has never been used, at least not since IAM started
 tracking this information on April 22nd, 2015.
 
 
*  There is no sign-in data associated with the user **/
      LastUsedDate: dateType;
      /** The name of the AWS service with which this access key was most recently used.
This field is null when:

&amp;#42;  The user does not have an access key.
 
 
*  An access key exists but has never been used, at least not since IAM started
 tracking this information on April 22nd, 2015.
 
 
*  There is no sign-in data associated with the user **/
      ServiceName: stringType;
      /** The AWS region where this access key was most recently used. This field is null
when:

&amp;#42;  The user does not have an access key.
 
 
*  An access key exists but has never been used, at least not since IAM started
 tracking this information on April 22nd, 2015.
 
 
*  There is no sign-in data associated with the user
 
 

For more information about AWS regions, see Regions and Endpoints
[http://docs.aws.amazon.com/general/latest/gr/rande.html] in the Amazon Web
Services General Reference. **/
      Region: stringType;
    }
    export interface AccessKeyMetadata {
      /** The name of the IAM user that the key is associated with. **/
      UserName?: userNameType;
      /** The ID for this access key. **/
      AccessKeyId?: accessKeyIdType;
      /** The status of the access key. Active means the key is valid for API calls; 
Inactive means it is not. **/
      Status?: statusType;
      /** The date when the access key was created. **/
      CreateDate?: dateType;
    }
    export interface AddClientIDToOpenIDConnectProviderRequest {
      /** The Amazon Resource Name (ARN) of the IAM OpenID Connect (OIDC) provider
resource to add the client ID to. You can get a list of OIDC provider ARNs by
using the ListOpenIDConnectProviders action. **/
      OpenIDConnectProviderArn: arnType;
      /** The client ID (also known as audience) to add to the IAM OpenID Connect provider
resource. **/
      ClientID: clientIDType;
    }
    export interface AddRoleToInstanceProfileRequest {
      /** The name of the instance profile to update.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of upper and lowercase alphanumeric characters
with no spaces. You can also include any of the following characters: =,.@- **/
      InstanceProfileName: instanceProfileNameType;
      /** The name of the role to add.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of upper and lowercase alphanumeric characters
with no spaces. You can also include any of the following characters: =,.@- **/
      RoleName: roleNameType;
    }
    export interface AddUserToGroupRequest {
      /** The name of the group to update.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of upper and lowercase alphanumeric characters
with no spaces. You can also include any of the following characters: =,.@- **/
      GroupName: groupNameType;
      /** The name of the user to add.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of upper and lowercase alphanumeric characters
with no spaces. You can also include any of the following characters: =,.@- **/
      UserName: existingUserNameType;
    }
    export interface AttachGroupPolicyRequest {
      /** The name (friendly name, not ARN) of the group to attach the policy to.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of upper and lowercase alphanumeric characters
with no spaces. You can also include any of the following characters: =,.@- **/
      GroupName: groupNameType;
      /** The Amazon Resource Name (ARN) of the IAM policy you want to attach.

For more information about ARNs, see Amazon Resource Names (ARNs) and AWS
Service Namespaces
[http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html] in
the AWS General Reference. **/
      PolicyArn: arnType;
    }
    export interface AttachRolePolicyRequest {
      /** The name (friendly name, not ARN) of the role to attach the policy to.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of upper and lowercase alphanumeric characters
with no spaces. You can also include any of the following characters: =,.@- **/
      RoleName: roleNameType;
      /** The Amazon Resource Name (ARN) of the IAM policy you want to attach.

For more information about ARNs, see Amazon Resource Names (ARNs) and AWS
Service Namespaces
[http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html] in
the AWS General Reference. **/
      PolicyArn: arnType;
    }
    export interface AttachUserPolicyRequest {
      /** The name (friendly name, not ARN) of the IAM user to attach the policy to.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of upper and lowercase alphanumeric characters
with no spaces. You can also include any of the following characters: =,.@- **/
      UserName: userNameType;
      /** The Amazon Resource Name (ARN) of the IAM policy you want to attach.

For more information about ARNs, see Amazon Resource Names (ARNs) and AWS
Service Namespaces
[http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html] in
the AWS General Reference. **/
      PolicyArn: arnType;
    }
    export interface AttachedPolicy {
      /** The friendly name of the attached policy. **/
      PolicyName?: policyNameType;
      PolicyArn?: arnType;
    }
    export interface ChangePasswordRequest {
      /** The IAM user&#x27;s current password. **/
      OldPassword: passwordType;
      /** The new password. The new password must conform to the AWS account&#x27;s password
policy, if one exists.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of almost any printable ASCII character from the
space (\u0020) through the end of the ASCII character range (\u00FF). You can
also include the tab (\u0009), line feed (\u000A), and carriage return (\u000D)
characters. Although any of these characters are valid in a password, note that
many tools, such as the AWS Management Console, might restrict the ability to
enter certain characters because they have special meaning within that tool. **/
      NewPassword: passwordType;
    }
    export interface ContextEntry {
      /** The full name of a condition context key, including the service prefix. For
example, aws:SourceIp or s3:VersionId. **/
      ContextKeyName?: ContextKeyNameType;
      /** The value (or values, if the condition context key supports multiple values) to
provide to the simulation for use when the key is referenced by a Condition 
element in an input policy. **/
      ContextKeyValues?: ContextKeyValueListType;
      /** The data type of the value (or values) specified in the ContextKeyValues 
parameter. **/
      ContextKeyType?: ContextKeyTypeEnum;
    }
    export interface CreateAccessKeyRequest {
      /** The name of the IAM user that the new key will belong to.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of upper and lowercase alphanumeric characters
with no spaces. You can also include any of the following characters: =,.@- **/
      UserName?: existingUserNameType;
    }
    export interface CreateAccessKeyResponse {
      /** A structure with details about the access key. **/
      AccessKey: AccessKey;
    }
    export interface CreateAccountAliasRequest {
      /** The account alias to create.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of lowercase letters, digits, and dashes. You
cannot start or finish with a dash, nor can you have two dashes in a row. **/
      AccountAlias: accountAliasType;
    }
    export interface CreateGroupRequest {
      /** The path to the group. For more information about paths, see IAM Identifiers
[http://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html] in the 
IAM User Guide.

This parameter is optional. If it is not included, it defaults to a slash (/).

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of either a forward slash (/) by itself or a
string that must begin and end with forward slashes, containing any ASCII
character from the ! (\u0021) thru the DEL character (\u007F), including most
punctuation characters, digits, and upper and lowercased letters. **/
      Path?: pathType;
      /** The name of the group to create. Do not include the path in this value.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of upper and lowercase alphanumeric characters
with no spaces. You can also include any of the following characters: =,.@-. The
group name must be unique within the account. Group names are not distinguished
by case. For example, you cannot create groups named both &quot;ADMINS&quot; and &quot;admins&quot;. **/
      GroupName: groupNameType;
    }
    export interface CreateGroupResponse {
      /** A structure containing details about the new group. **/
      Group: Group;
    }
    export interface CreateInstanceProfileRequest {
      /** The name of the instance profile to create.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of upper and lowercase alphanumeric characters
with no spaces. You can also include any of the following characters: =,.@- **/
      InstanceProfileName: instanceProfileNameType;
      /** The path to the instance profile. For more information about paths, see IAM
Identifiers
[http://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html] in the 
IAM User Guide.

This parameter is optional. If it is not included, it defaults to a slash (/).

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of either a forward slash (/) by itself or a
string that must begin and end with forward slashes, containing any ASCII
character from the ! (\u0021) thru the DEL character (\u007F), including most
punctuation characters, digits, and upper and lowercased letters. **/
      Path?: pathType;
    }
    export interface CreateInstanceProfileResponse {
      /** A structure containing details about the new instance profile. **/
      InstanceProfile: InstanceProfile;
    }
    export interface CreateLoginProfileRequest {
      /** The name of the IAM user to create a password for. The user must already exist.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of upper and lowercase alphanumeric characters
with no spaces. You can also include any of the following characters: =,.@- **/
      UserName: userNameType;
      /** The new password for the user.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of almost any printable ASCII character from the
space (\u0020) through the end of the ASCII character range (\u00FF). You can
also include the tab (\u0009), line feed (\u000A), and carriage return (\u000D)
characters. Although any of these characters are valid in a password, note that
many tools, such as the AWS Management Console, might restrict the ability to
enter certain characters because they have special meaning within that tool. **/
      Password: passwordType;
      /** Specifies whether the user is required to set a new password on next sign-in. **/
      PasswordResetRequired?: booleanType;
    }
    export interface CreateLoginProfileResponse {
      /** A structure containing the user name and password create date. **/
      LoginProfile: LoginProfile;
    }
    export interface CreateOpenIDConnectProviderRequest {
      /** The URL of the identity provider. The URL must begin with &quot;https://&quot; and should
correspond to the iss claim in the provider&#x27;s OpenID Connect ID tokens. Per the
OIDC standard, path components are allowed but query parameters are not.
Typically the URL consists of only a host name, like
&quot;https://server.example.org&quot; or &quot;https://example.com&quot;.

You cannot register the same provider multiple times in a single AWS account. If
you try to submit a URL that has already been used for an OpenID Connect
provider in the AWS account, you will get an error. **/
      Url: OpenIDConnectProviderUrlType;
      /** A list of client IDs (also known as audiences). When a mobile or web app
registers with an OpenID Connect provider, they establish a value that
identifies the application. (This is the value that&#x27;s sent as the client_id 
parameter on OAuth requests.)

You can register multiple client IDs with the same provider. For example, you
might have multiple applications that use the same OIDC provider. You cannot
register more than 100 client IDs with a single IAM OIDC provider.

There is no defined format for a client ID. The 
CreateOpenIDConnectProviderRequest action accepts client IDs up to 255
characters long. **/
      ClientIDList?: clientIDListType;
      /** A list of server certificate thumbprints for the OpenID Connect (OIDC) identity
provider&#x27;s server certificate(s). Typically this list includes only one entry.
However, IAM lets you have up to five thumbprints for an OIDC provider. This
lets you maintain multiple thumbprints if the identity provider is rotating
certificates.

The server certificate thumbprint is the hex-encoded SHA-1 hash value of the
X.509 certificate used by the domain where the OpenID Connect provider makes its
keys available. It is always a 40-character string.

You must provide at least one thumbprint when creating an IAM OIDC provider. For
example, if the OIDC provider is server.example.com and the provider stores its
keys at &quot;https://keys.server.example.com/openid-connect&quot;, the thumbprint string
would be the hex-encoded SHA-1 hash value of the certificate used by
https://keys.server.example.com.

For more information about obtaining the OIDC provider&#x27;s thumbprint, see 
Obtaining the Thumbprint for an OpenID Connect Provider
[http://docs.aws.amazon.com/IAM/latest/UserGuide/identity-providers-oidc-obtain-thumbprint.html] 
in the IAM User Guide. **/
      ThumbprintList: thumbprintListType;
    }
    export interface CreateOpenIDConnectProviderResponse {
      /** The Amazon Resource Name (ARN) of the new IAM OpenID Connect provider that is
created. For more information, see OpenIDConnectProviderListEntry. **/
      OpenIDConnectProviderArn?: arnType;
    }
    export interface CreatePolicyRequest {
      /** The friendly name of the policy.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of upper and lowercase alphanumeric characters
with no spaces. You can also include any of the following characters: =,.@- **/
      PolicyName: policyNameType;
      /** The path for the policy.

For more information about paths, see IAM Identifiers
[http://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html] in the 
IAM User Guide.

This parameter is optional. If it is not included, it defaults to a slash (/).

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of either a forward slash (/) by itself or a
string that must begin and end with forward slashes, containing any ASCII
character from the ! (\u0021) thru the DEL character (\u007F), including most
punctuation characters, digits, and upper and lowercased letters. **/
      Path?: policyPathType;
      /** The JSON policy document that you want to use as the content for the new policy.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of any printable ASCII character ranging from
the space character (\u0020) through end of the ASCII character range (\u00FF).
It also includes the special characters tab (\u0009), line feed (\u000A), and
carriage return (\u000D). **/
      PolicyDocument: policyDocumentType;
      /** A friendly description of the policy.

Typically used to store information about the permissions defined in the policy.
For example, &quot;Grants access to production DynamoDB tables.&quot;

The policy description is immutable. After a value is assigned, it cannot be
changed. **/
      Description?: policyDescriptionType;
    }
    export interface CreatePolicyResponse {
      /** A structure containing details about the new policy. **/
      Policy?: Policy;
    }
    export interface CreatePolicyVersionRequest {
      /** The Amazon Resource Name (ARN) of the IAM policy to which you want to add a new
version.

For more information about ARNs, see Amazon Resource Names (ARNs) and AWS
Service Namespaces
[http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html] in
the AWS General Reference. **/
      PolicyArn: arnType;
      /** The JSON policy document that you want to use as the content for this new
version of the policy.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of any printable ASCII character ranging from
the space character (\u0020) through end of the ASCII character range (\u00FF).
It also includes the special characters tab (\u0009), line feed (\u000A), and
carriage return (\u000D). **/
      PolicyDocument: policyDocumentType;
      /** Specifies whether to set this version as the policy&#x27;s default version.

When this parameter is true, the new policy version becomes the operative
version; that is, the version that is in effect for the IAM users, groups, and
roles that the policy is attached to.

For more information about managed policy versions, see Versioning for Managed
Policies
[http://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-versions.html] 
in the IAM User Guide. **/
      SetAsDefault?: booleanType;
    }
    export interface CreatePolicyVersionResponse {
      /** A structure containing details about the new policy version. **/
      PolicyVersion?: PolicyVersion;
    }
    export interface CreateRoleRequest {
      /** The path to the role. For more information about paths, see IAM Identifiers
[http://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html] in the 
IAM User Guide.

This parameter is optional. If it is not included, it defaults to a slash (/).

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of either a forward slash (/) by itself or a
string that must begin and end with forward slashes, containing any ASCII
character from the ! (\u0021) thru the DEL character (\u007F), including most
punctuation characters, digits, and upper and lowercased letters. **/
      Path?: pathType;
      /** The name of the role to create.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of upper and lowercase alphanumeric characters
with no spaces. You can also include any of the following characters: =,.@-.
Role names are not distinguished by case. For example, you cannot create roles
named both &quot;PRODROLE&quot; and &quot;prodrole&quot;. **/
      RoleName: roleNameType;
      /** The trust relationship policy document that grants an entity permission to
assume the role.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of any printable ASCII character ranging from
the space character (\u0020) through end of the ASCII character range (\u00FF).
It also includes the special characters tab (\u0009), line feed (\u000A), and
carriage return (\u000D). **/
      AssumeRolePolicyDocument: policyDocumentType;
    }
    export interface CreateRoleResponse {
      /** A structure containing details about the new role. **/
      Role: Role;
    }
    export interface CreateSAMLProviderRequest {
      /** An XML document generated by an identity provider (IdP) that supports SAML 2.0.
The document includes the issuer&#x27;s name, expiration information, and keys that
can be used to validate the SAML authentication response (assertions) that are
received from the IdP. You must generate the metadata document using the
identity management software that is used as your organization&#x27;s IdP.

For more information, see About SAML 2.0-based Federation
[http://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_saml.html] 
in the IAM User Guide **/
      SAMLMetadataDocument: SAMLMetadataDocumentType;
      /** The name of the provider to create.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of upper and lowercase alphanumeric characters
with no spaces. You can also include any of the following characters: =,.@- **/
      Name: SAMLProviderNameType;
    }
    export interface CreateSAMLProviderResponse {
      /** The Amazon Resource Name (ARN) of the new SAML provider resource in IAM. **/
      SAMLProviderArn?: arnType;
    }
    export interface CreateUserRequest {
      /** The path for the user name. For more information about paths, see IAM
Identifiers
[http://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html] in the 
IAM User Guide.

This parameter is optional. If it is not included, it defaults to a slash (/).

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of either a forward slash (/) by itself or a
string that must begin and end with forward slashes, containing any ASCII
character from the ! (\u0021) thru the DEL character (\u007F), including most
punctuation characters, digits, and upper and lowercased letters. **/
      Path?: pathType;
      /** The name of the user to create.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of upper and lowercase alphanumeric characters
with no spaces. You can also include any of the following characters: =,.@-.
User names are not distinguished by case. For example, you cannot create users
named both &quot;TESTUSER&quot; and &quot;testuser&quot;. **/
      UserName: userNameType;
    }
    export interface CreateUserResponse {
      /** A structure with details about the new IAM user. **/
      User?: User;
    }
    export interface CreateVirtualMFADeviceRequest {
      /** The path for the virtual MFA device. For more information about paths, see IAM
Identifiers
[http://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html] in the 
IAM User Guide.

This parameter is optional. If it is not included, it defaults to a slash (/).

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of either a forward slash (/) by itself or a
string that must begin and end with forward slashes, containing any ASCII
character from the ! (\u0021) thru the DEL character (\u007F), including most
punctuation characters, digits, and upper and lowercased letters. **/
      Path?: pathType;
      /** The name of the virtual MFA device. Use with path to uniquely identify a virtual
MFA device.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of upper and lowercase alphanumeric characters
with no spaces. You can also include any of the following characters: =,.@- **/
      VirtualMFADeviceName: virtualMFADeviceName;
    }
    export interface CreateVirtualMFADeviceResponse {
      /** A structure containing details about the new virtual MFA device. **/
      VirtualMFADevice: VirtualMFADevice;
    }
    export interface CredentialReportExpiredException {
      message?: credentialReportExpiredExceptionMessage;
    }
    export interface CredentialReportNotPresentException {
      message?: credentialReportNotPresentExceptionMessage;
    }
    export interface CredentialReportNotReadyException {
      message?: credentialReportNotReadyExceptionMessage;
    }
    export interface DeactivateMFADeviceRequest {
      /** The name of the user whose MFA device you want to deactivate.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of upper and lowercase alphanumeric characters
with no spaces. You can also include any of the following characters: =,.@- **/
      UserName: existingUserNameType;
      /** The serial number that uniquely identifies the MFA device. For virtual MFA
devices, the serial number is the device ARN.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of upper and lowercase alphanumeric characters
with no spaces. You can also include any of the following characters: =/:,.@- **/
      SerialNumber: serialNumberType;
    }
    export interface DeleteAccessKeyRequest {
      /** The name of the user whose access key pair you want to delete.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of upper and lowercase alphanumeric characters
with no spaces. You can also include any of the following characters: =,.@- **/
      UserName?: existingUserNameType;
      /** The access key ID for the access key ID and secret access key you want to
delete.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters that can consist of any upper or lowercased letter or
digit. **/
      AccessKeyId: accessKeyIdType;
    }
    export interface DeleteAccountAliasRequest {
      /** The name of the account alias to delete.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of lowercase letters, digits, and dashes. You
cannot start or finish with a dash, nor can you have two dashes in a row. **/
      AccountAlias: accountAliasType;
    }
    export interface DeleteConflictException {
      message?: deleteConflictMessage;
    }
    export interface DeleteGroupPolicyRequest {
      /** The name (friendly name, not ARN) identifying the group that the policy is
embedded in.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of upper and lowercase alphanumeric characters
with no spaces. You can also include any of the following characters: =,.@- **/
      GroupName: groupNameType;
      /** The name identifying the policy document to delete.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of upper and lowercase alphanumeric characters
with no spaces. You can also include any of the following characters: =,.@- **/
      PolicyName: policyNameType;
    }
    export interface DeleteGroupRequest {
      /** The name of the IAM group to delete.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of upper and lowercase alphanumeric characters
with no spaces. You can also include any of the following characters: =,.@- **/
      GroupName: groupNameType;
    }
    export interface DeleteInstanceProfileRequest {
      /** The name of the instance profile to delete.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of upper and lowercase alphanumeric characters
with no spaces. You can also include any of the following characters: =,.@- **/
      InstanceProfileName: instanceProfileNameType;
    }
    export interface DeleteLoginProfileRequest {
      /** The name of the user whose password you want to delete.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of upper and lowercase alphanumeric characters
with no spaces. You can also include any of the following characters: =,.@- **/
      UserName: userNameType;
    }
    export interface DeleteOpenIDConnectProviderRequest {
      /** The Amazon Resource Name (ARN) of the IAM OpenID Connect provider resource
object to delete. You can get a list of OpenID Connect provider resource ARNs by
using the ListOpenIDConnectProviders action. **/
      OpenIDConnectProviderArn: arnType;
    }
    export interface DeletePolicyRequest {
      /** The Amazon Resource Name (ARN) of the IAM policy you want to delete.

For more information about ARNs, see Amazon Resource Names (ARNs) and AWS
Service Namespaces
[http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html] in
the AWS General Reference. **/
      PolicyArn: arnType;
    }
    export interface DeletePolicyVersionRequest {
      /** The Amazon Resource Name (ARN) of the IAM policy from which you want to delete a
version.

For more information about ARNs, see Amazon Resource Names (ARNs) and AWS
Service Namespaces
[http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html] in
the AWS General Reference. **/
      PolicyArn: arnType;
      /** The policy version to delete.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters that consists of the lowercase letter &#x27;v&#x27; followed by one
or two digits, and optionally followed by a period &#x27;.&#x27; and a string of letters
and digits.

For more information about managed policy versions, see Versioning for Managed
Policies
[http://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-versions.html] 
in the IAM User Guide. **/
      VersionId: policyVersionIdType;
    }
    export interface DeleteRolePolicyRequest {
      /** The name (friendly name, not ARN) identifying the role that the policy is
embedded in.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of upper and lowercase alphanumeric characters
with no spaces. You can also include any of the following characters: =,.@- **/
      RoleName: roleNameType;
      /** The name of the inline policy to delete from the specified IAM role.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of upper and lowercase alphanumeric characters
with no spaces. You can also include any of the following characters: =,.@- **/
      PolicyName: policyNameType;
    }
    export interface DeleteRoleRequest {
      /** The name of the role to delete.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of upper and lowercase alphanumeric characters
with no spaces. You can also include any of the following characters: =,.@- **/
      RoleName: roleNameType;
    }
    export interface DeleteSAMLProviderRequest {
      /** The Amazon Resource Name (ARN) of the SAML provider to delete. **/
      SAMLProviderArn: arnType;
    }
    export interface DeleteSSHPublicKeyRequest {
      /** The name of the IAM user associated with the SSH public key.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of upper and lowercase alphanumeric characters
with no spaces. You can also include any of the following characters: =,.@- **/
      UserName: userNameType;
      /** The unique identifier for the SSH public key.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters that can consist of any upper or lowercased letter or
digit. **/
      SSHPublicKeyId: publicKeyIdType;
    }
    export interface DeleteServerCertificateRequest {
      /** The name of the server certificate you want to delete.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of upper and lowercase alphanumeric characters
with no spaces. You can also include any of the following characters: =,.@- **/
      ServerCertificateName: serverCertificateNameType;
    }
    export interface DeleteSigningCertificateRequest {
      /** The name of the user the signing certificate belongs to.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of upper and lowercase alphanumeric characters
with no spaces. You can also include any of the following characters: =,.@- **/
      UserName?: existingUserNameType;
      /** The ID of the signing certificate to delete.

The format of this parameter, as described by its regex
[http://wikipedia.org/wiki/regex] pattern, is a string of characters that can be
upper- or lower-cased letters or digits. **/
      CertificateId: certificateIdType;
    }
    export interface DeleteUserPolicyRequest {
      /** The name (friendly name, not ARN) identifying the user that the policy is
embedded in.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of upper and lowercase alphanumeric characters
with no spaces. You can also include any of the following characters: =,.@- **/
      UserName: existingUserNameType;
      /** The name identifying the policy document to delete.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of upper and lowercase alphanumeric characters
with no spaces. You can also include any of the following characters: =,.@- **/
      PolicyName: policyNameType;
    }
    export interface DeleteUserRequest {
      /** The name of the user to delete.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of upper and lowercase alphanumeric characters
with no spaces. You can also include any of the following characters: =,.@- **/
      UserName: existingUserNameType;
    }
    export interface DeleteVirtualMFADeviceRequest {
      /** The serial number that uniquely identifies the MFA device. For virtual MFA
devices, the serial number is the same as the ARN.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of upper and lowercase alphanumeric characters
with no spaces. You can also include any of the following characters: =/:,.@- **/
      SerialNumber: serialNumberType;
    }
    export interface DetachGroupPolicyRequest {
      /** The name (friendly name, not ARN) of the IAM group to detach the policy from.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of upper and lowercase alphanumeric characters
with no spaces. You can also include any of the following characters: =,.@- **/
      GroupName: groupNameType;
      /** The Amazon Resource Name (ARN) of the IAM policy you want to detach.

For more information about ARNs, see Amazon Resource Names (ARNs) and AWS
Service Namespaces
[http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html] in
the AWS General Reference. **/
      PolicyArn: arnType;
    }
    export interface DetachRolePolicyRequest {
      /** The name (friendly name, not ARN) of the IAM role to detach the policy from.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of upper and lowercase alphanumeric characters
with no spaces. You can also include any of the following characters: =,.@- **/
      RoleName: roleNameType;
      /** The Amazon Resource Name (ARN) of the IAM policy you want to detach.

For more information about ARNs, see Amazon Resource Names (ARNs) and AWS
Service Namespaces
[http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html] in
the AWS General Reference. **/
      PolicyArn: arnType;
    }
    export interface DetachUserPolicyRequest {
      /** The name (friendly name, not ARN) of the IAM user to detach the policy from.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of upper and lowercase alphanumeric characters
with no spaces. You can also include any of the following characters: =,.@- **/
      UserName: userNameType;
      /** The Amazon Resource Name (ARN) of the IAM policy you want to detach.

For more information about ARNs, see Amazon Resource Names (ARNs) and AWS
Service Namespaces
[http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html] in
the AWS General Reference. **/
      PolicyArn: arnType;
    }
    export interface DuplicateCertificateException {
      message?: duplicateCertificateMessage;
    }
    export interface DuplicateSSHPublicKeyException {
      message?: duplicateSSHPublicKeyMessage;
    }
    export interface EnableMFADeviceRequest {
      /** The name of the IAM user for whom you want to enable the MFA device.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of upper and lowercase alphanumeric characters
with no spaces. You can also include any of the following characters: =,.@- **/
      UserName: existingUserNameType;
      /** The serial number that uniquely identifies the MFA device. For virtual MFA
devices, the serial number is the device ARN.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of upper and lowercase alphanumeric characters
with no spaces. You can also include any of the following characters: =/:,.@- **/
      SerialNumber: serialNumberType;
      /** An authentication code emitted by the device.

The format for this parameter is a string of 6 digits. **/
      AuthenticationCode1: authenticationCodeType;
      /** A subsequent authentication code emitted by the device.

The format for this parameter is a string of 6 digits. **/
      AuthenticationCode2: authenticationCodeType;
    }
    export interface EntityAlreadyExistsException {
      message?: entityAlreadyExistsMessage;
    }
    export interface EntityTemporarilyUnmodifiableException {
      message?: entityTemporarilyUnmodifiableMessage;
    }
    export interface EvaluationResult {
      /** The name of the API action tested on the indicated resource. **/
      EvalActionName: ActionNameType;
      /** The ARN of the resource that the indicated API action was tested on. **/
      EvalResourceName?: ResourceNameType;
      /** The result of the simulation. **/
      EvalDecision: PolicyEvaluationDecisionType;
      /** A list of the statements in the input policies that determine the result for
this scenario. Remember that even if multiple statements allow the action on the
resource, if only one statement denies that action, then the explicit deny
overrides any allow, and the deny statement is the only entry included in the
result. **/
      MatchedStatements?: StatementListType;
      /** A list of context keys that are required by the included input policies but that
were not provided by one of the input parameters. This list is used when the
resource in a simulation is &quot;&amp;#42;&quot;, either explicitly, or when the ResourceArns 
parameter blank. If you include a list of resources, then any missing context
values are instead included under the ResourceSpecificResults section. To
discover the context keys used by a set of policies, you can call 
GetContextKeysForCustomPolicy or GetContextKeysForPrincipalPolicy. **/
      MissingContextValues?: ContextKeyNamesResultListType;
      /** Additional details about the results of the evaluation decision. When there are
both IAM policies and resource policies, this parameter explains how each set of
policies contributes to the final evaluation decision. When simulating
cross-account access to a resource, both the resource-based policy and the
caller&#x27;s IAM policy must grant access. See How IAM Roles Differ from
Resource-based Policies
[http://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_compare-resource-policies.html] **/
      EvalDecisionDetails?: EvalDecisionDetailsType;
      /** The individual results of the simulation of the API action specified in
EvalActionName on each resource. **/
      ResourceSpecificResults?: ResourceSpecificResultListType;
    }
    export interface GenerateCredentialReportResponse {
      /** Information about the state of the credential report. **/
      State?: ReportStateType;
      /** Information about the credential report. **/
      Description?: ReportStateDescriptionType;
    }
    export interface GetAccessKeyLastUsedRequest {
      /** The identifier of an access key.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters that can consist of any upper or lowercased letter or
digit. **/
      AccessKeyId: accessKeyIdType;
    }
    export interface GetAccessKeyLastUsedResponse {
      /** The name of the AWS IAM user that owns this access key. **/
      UserName?: existingUserNameType;
      /** Contains information about the last time the access key was used. **/
      AccessKeyLastUsed?: AccessKeyLastUsed;
    }
    export interface GetAccountAuthorizationDetailsRequest {
      /** A list of entity types used to filter the results. Only the entities that match
the types you specify are included in the output. Use the value 
LocalManagedPolicy to include customer managed policies.

The format for this parameter is a comma-separated (if more than one) list of
strings. Each string value in the list must be one of the valid values listed
below. **/
      Filter?: entityListType;
      /** Use this only when paginating results to indicate the maximum number of items
you want in the response. If additional items exist beyond the maximum you
specify, the IsTruncated response element is true.

This parameter is optional. If you do not include it, it defaults to 100. Note
that IAM might return fewer results, even when there are more results available.
In that case, the IsTruncated response element returns true and Marker contains
a value to include in the subsequent call that tells the service where to
continue from. **/
      MaxItems?: maxItemsType;
      /** Use this parameter only when paginating results and only after you receive a
response indicating that the results are truncated. Set it to the value of the 
Marker element in the response that you received to indicate where the next call
should start. **/
      Marker?: markerType;
    }
    export interface GetAccountAuthorizationDetailsResponse {
      /** A list containing information about IAM users. **/
      UserDetailList?: userDetailListType;
      /** A list containing information about IAM groups. **/
      GroupDetailList?: groupDetailListType;
      /** A list containing information about IAM roles. **/
      RoleDetailList?: roleDetailListType;
      /** A list containing information about managed policies. **/
      Policies?: ManagedPolicyDetailListType;
      /** A flag that indicates whether there are more items to return. If your results
were truncated, you can make a subsequent pagination request using the Marker 
request parameter to retrieve more items. Note that IAM might return fewer than
the MaxItems number of results even when there are more results available. We
recommend that you check IsTruncated after every call to ensure that you receive
all of your results. **/
      IsTruncated?: booleanType;
      /** When IsTruncated is true, this element is present and contains the value to use
for the Marker parameter in a subsequent pagination request. **/
      Marker?: markerType;
    }
    export interface GetAccountPasswordPolicyResponse {
      PasswordPolicy: PasswordPolicy;
    }
    export interface GetAccountSummaryResponse {
      /** A set of key value pairs containing information about IAM entity usage and IAM
quotas. **/
      SummaryMap?: summaryMapType;
    }
    export interface GetContextKeysForCustomPolicyRequest {
      /** A list of policies for which you want the list of context keys referenced in
those policies. Each document is specified as a string containing the complete,
valid JSON text of an IAM policy.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of any printable ASCII character ranging from
the space character (\u0020) through end of the ASCII character range (\u00FF).
It also includes the special characters tab (\u0009), line feed (\u000A), and
carriage return (\u000D). **/
      PolicyInputList: SimulationPolicyListType;
    }
    export interface GetContextKeysForPolicyResponse {
      /** The list of context keys that are referenced in the input policies. **/
      ContextKeyNames?: ContextKeyNamesResultListType;
    }
    export interface GetContextKeysForPrincipalPolicyRequest {
      /** The ARN of a user, group, or role whose policies contain the context keys that
you want listed. If you specify a user, the list includes context keys that are
found in all policies attached to the user as well as to all groups that the
user is a member of. If you pick a group or a role, then it includes only those
context keys that are found in policies attached to that entity. Note that all
parameters are shown in unencoded form here for clarity, but must be URL encoded
to be included as a part of a real HTML request.

For more information about ARNs, see Amazon Resource Names (ARNs) and AWS
Service Namespaces
[http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html] in
the AWS General Reference. **/
      PolicySourceArn: arnType;
      /** An optional list of additional policies for which you want the list of context
keys that are referenced.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of any printable ASCII character ranging from
the space character (\u0020) through end of the ASCII character range (\u00FF).
It also includes the special characters tab (\u0009), line feed (\u000A), and
carriage return (\u000D). **/
      PolicyInputList?: SimulationPolicyListType;
    }
    export interface GetCredentialReportResponse {
      /** Contains the credential report. The report is Base64-encoded. **/
      Content?: ReportContentType;
      /** The format (MIME type) of the credential report. **/
      ReportFormat?: ReportFormatType;
      /** The date and time when the credential report was created, in ISO 8601 date-time
format [http://www.iso.org/iso/iso8601]. **/
      GeneratedTime?: dateType;
    }
    export interface GetGroupPolicyRequest {
      /** The name of the group the policy is associated with.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of upper and lowercase alphanumeric characters
with no spaces. You can also include any of the following characters: =,.@- **/
      GroupName: groupNameType;
      /** The name of the policy document to get.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of upper and lowercase alphanumeric characters
with no spaces. You can also include any of the following characters: =,.@- **/
      PolicyName: policyNameType;
    }
    export interface GetGroupPolicyResponse {
      /** The group the policy is associated with. **/
      GroupName: groupNameType;
      /** The name of the policy. **/
      PolicyName: policyNameType;
      /** The policy document. **/
      PolicyDocument: policyDocumentType;
    }
    export interface GetGroupRequest {
      /** The name of the group.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of upper and lowercase alphanumeric characters
with no spaces. You can also include any of the following characters: =,.@- **/
      GroupName: groupNameType;
      /** Use this parameter only when paginating results and only after you receive a
response indicating that the results are truncated. Set it to the value of the 
Marker element in the response that you received to indicate where the next call
should start. **/
      Marker?: markerType;
      /** Use this only when paginating results to indicate the maximum number of items
you want in the response. If additional items exist beyond the maximum you
specify, the IsTruncated response element is true.

This parameter is optional. If you do not include it, it defaults to 100. Note
that IAM might return fewer results, even when there are more results available.
In that case, the IsTruncated response element returns true and Marker contains
a value to include in the subsequent call that tells the service where to
continue from. **/
      MaxItems?: maxItemsType;
    }
    export interface GetGroupResponse {
      /** A structure that contains details about the group. **/
      Group: Group;
      /** A list of users in the group. **/
      Users: userListType;
      /** A flag that indicates whether there are more items to return. If your results
were truncated, you can make a subsequent pagination request using the Marker 
request parameter to retrieve more items. Note that IAM might return fewer than
the MaxItems number of results even when there are more results available. We
recommend that you check IsTruncated after every call to ensure that you receive
all of your results. **/
      IsTruncated?: booleanType;
      /** When IsTruncated is true, this element is present and contains the value to use
for the Marker parameter in a subsequent pagination request. **/
      Marker?: markerType;
    }
    export interface GetInstanceProfileRequest {
      /** The name of the instance profile to get information about.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of upper and lowercase alphanumeric characters
with no spaces. You can also include any of the following characters: =,.@- **/
      InstanceProfileName: instanceProfileNameType;
    }
    export interface GetInstanceProfileResponse {
      /** A structure containing details about the instance profile. **/
      InstanceProfile: InstanceProfile;
    }
    export interface GetLoginProfileRequest {
      /** The name of the user whose login profile you want to retrieve.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of upper and lowercase alphanumeric characters
with no spaces. You can also include any of the following characters: =,.@- **/
      UserName: userNameType;
    }
    export interface GetLoginProfileResponse {
      /** A structure containing the user name and password create date for the user. **/
      LoginProfile: LoginProfile;
    }
    export interface GetOpenIDConnectProviderRequest {
      /** The Amazon Resource Name (ARN) of the OIDC provider resource object in IAM to
get information for. You can get a list of OIDC provider resource ARNs by using
the ListOpenIDConnectProviders action.

For more information about ARNs, see Amazon Resource Names (ARNs) and AWS
Service Namespaces
[http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html] in
the AWS General Reference. **/
      OpenIDConnectProviderArn: arnType;
    }
    export interface GetOpenIDConnectProviderResponse {
      /** The URL that the IAM OIDC provider resource object is associated with. For more
information, see CreateOpenIDConnectProvider. **/
      Url?: OpenIDConnectProviderUrlType;
      /** A list of client IDs (also known as audiences) that are associated with the
specified IAM OIDC provider resource object. For more information, see 
CreateOpenIDConnectProvider. **/
      ClientIDList?: clientIDListType;
      /** A list of certificate thumbprints that are associated with the specified IAM
OIDC provider resource object. For more information, see 
CreateOpenIDConnectProvider. **/
      ThumbprintList?: thumbprintListType;
      /** The date and time when the IAM OIDC provider resource object was created in the
AWS account. **/
      CreateDate?: dateType;
    }
    export interface GetPolicyRequest {
      /** The Amazon Resource Name (ARN) of the managed policy that you want information
about.

For more information about ARNs, see Amazon Resource Names (ARNs) and AWS
Service Namespaces
[http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html] in
the AWS General Reference. **/
      PolicyArn: arnType;
    }
    export interface GetPolicyResponse {
      /** A structure containing details about the policy. **/
      Policy?: Policy;
    }
    export interface GetPolicyVersionRequest {
      /** The Amazon Resource Name (ARN) of the managed policy that you want information
about.

For more information about ARNs, see Amazon Resource Names (ARNs) and AWS
Service Namespaces
[http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html] in
the AWS General Reference. **/
      PolicyArn: arnType;
      /** Identifies the policy version to retrieve.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters that consists of the lowercase letter &#x27;v&#x27; followed by one
or two digits, and optionally followed by a period &#x27;.&#x27; and a string of letters
and digits. **/
      VersionId: policyVersionIdType;
    }
    export interface GetPolicyVersionResponse {
      /** A structure containing details about the policy version. **/
      PolicyVersion?: PolicyVersion;
    }
    export interface GetRolePolicyRequest {
      /** The name of the role associated with the policy.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of upper and lowercase alphanumeric characters
with no spaces. You can also include any of the following characters: =,.@- **/
      RoleName: roleNameType;
      /** The name of the policy document to get.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of upper and lowercase alphanumeric characters
with no spaces. You can also include any of the following characters: =,.@- **/
      PolicyName: policyNameType;
    }
    export interface GetRolePolicyResponse {
      /** The role the policy is associated with. **/
      RoleName: roleNameType;
      /** The name of the policy. **/
      PolicyName: policyNameType;
      /** The policy document. **/
      PolicyDocument: policyDocumentType;
    }
    export interface GetRoleRequest {
      /** The name of the IAM role to get information about.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of upper and lowercase alphanumeric characters
with no spaces. You can also include any of the following characters: =,.@- **/
      RoleName: roleNameType;
    }
    export interface GetRoleResponse {
      /** A structure containing details about the IAM role. **/
      Role: Role;
    }
    export interface GetSAMLProviderRequest {
      /** The Amazon Resource Name (ARN) of the SAML provider resource object in IAM to
get information about.

For more information about ARNs, see Amazon Resource Names (ARNs) and AWS
Service Namespaces
[http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html] in
the AWS General Reference. **/
      SAMLProviderArn: arnType;
    }
    export interface GetSAMLProviderResponse {
      /** The XML metadata document that includes information about an identity provider. **/
      SAMLMetadataDocument?: SAMLMetadataDocumentType;
      /** The date and time when the SAML provider was created. **/
      CreateDate?: dateType;
      /** The expiration date and time for the SAML provider. **/
      ValidUntil?: dateType;
    }
    export interface GetSSHPublicKeyRequest {
      /** The name of the IAM user associated with the SSH public key.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of upper and lowercase alphanumeric characters
with no spaces. You can also include any of the following characters: =,.@- **/
      UserName: userNameType;
      /** The unique identifier for the SSH public key.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters that can consist of any upper or lowercased letter or
digit. **/
      SSHPublicKeyId: publicKeyIdType;
      /** Specifies the public key encoding format to use in the response. To retrieve the
public key in ssh-rsa format, use SSH. To retrieve the public key in PEM format,
use PEM. **/
      Encoding: encodingType;
    }
    export interface GetSSHPublicKeyResponse {
      /** A structure containing details about the SSH public key. **/
      SSHPublicKey?: SSHPublicKey;
    }
    export interface GetServerCertificateRequest {
      /** The name of the server certificate you want to retrieve information about.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of upper and lowercase alphanumeric characters
with no spaces. You can also include any of the following characters: =,.@- **/
      ServerCertificateName: serverCertificateNameType;
    }
    export interface GetServerCertificateResponse {
      /** A structure containing details about the server certificate. **/
      ServerCertificate: ServerCertificate;
    }
    export interface GetUserPolicyRequest {
      /** The name of the user who the policy is associated with.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of upper and lowercase alphanumeric characters
with no spaces. You can also include any of the following characters: =,.@- **/
      UserName: existingUserNameType;
      /** The name of the policy document to get.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of upper and lowercase alphanumeric characters
with no spaces. You can also include any of the following characters: =,.@- **/
      PolicyName: policyNameType;
    }
    export interface GetUserPolicyResponse {
      /** The user the policy is associated with. **/
      UserName: existingUserNameType;
      /** The name of the policy. **/
      PolicyName: policyNameType;
      /** The policy document. **/
      PolicyDocument: policyDocumentType;
    }
    export interface GetUserRequest {
      /** The name of the user to get information about.

This parameter is optional. If it is not included, it defaults to the user
making the request. The regex pattern [http://wikipedia.org/wiki/regex] for this
parameter is a string of characters consisting of upper and lowercase
alphanumeric characters with no spaces. You can also include any of the
following characters: =,.@- **/
      UserName?: existingUserNameType;
    }
    export interface GetUserResponse {
      /** A structure containing details about the IAM user. **/
      User: User;
    }
    export interface Group {
      /** The path to the group. For more information about paths, see IAM Identifiers
[http://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html] in the 
Using IAM guide. **/
      Path: pathType;
      /** The friendly name that identifies the group. **/
      GroupName: groupNameType;
      /** The stable and unique string identifying the group. For more information about
IDs, see IAM Identifiers
[http://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html] in the 
Using IAM guide. **/
      GroupId: idType;
      /** The Amazon Resource Name (ARN) specifying the group. For more information about
ARNs and how to use them in policies, see IAM Identifiers
[http://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html] in the 
Using IAM guide. **/
      Arn: arnType;
      /** The date and time, in ISO 8601 date-time format [http://www.iso.org/iso/iso8601]
, when the group was created. **/
      CreateDate: dateType;
    }
    export interface GroupDetail {
      /** The path to the group. For more information about paths, see IAM Identifiers
[http://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html] in the 
Using IAM guide. **/
      Path?: pathType;
      /** The friendly name that identifies the group. **/
      GroupName?: groupNameType;
      /** The stable and unique string identifying the group. For more information about
IDs, see IAM Identifiers
[http://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html] in the 
Using IAM guide. **/
      GroupId?: idType;
      Arn?: arnType;
      /** The date and time, in ISO 8601 date-time format [http://www.iso.org/iso/iso8601]
, when the group was created. **/
      CreateDate?: dateType;
      /** A list of the inline policies embedded in the group. **/
      GroupPolicyList?: policyDetailListType;
      /** A list of the managed policies attached to the group. **/
      AttachedManagedPolicies?: attachedPoliciesListType;
    }
    export interface InstanceProfile {
      /** The path to the instance profile. For more information about paths, see IAM
Identifiers
[http://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html] in the 
Using IAM guide. **/
      Path: pathType;
      /** The name identifying the instance profile. **/
      InstanceProfileName: instanceProfileNameType;
      /** The stable and unique string identifying the instance profile. For more
information about IDs, see IAM Identifiers
[http://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html] in the 
Using IAM guide. **/
      InstanceProfileId: idType;
      /** The Amazon Resource Name (ARN) specifying the instance profile. For more
information about ARNs and how to use them in policies, see IAM Identifiers
[http://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html] in the 
Using IAM guide. **/
      Arn: arnType;
      /** The date when the instance profile was created. **/
      CreateDate: dateType;
      /** The role associated with the instance profile. **/
      Roles: roleListType;
    }
    export interface InvalidAuthenticationCodeException {
      message?: invalidAuthenticationCodeMessage;
    }
    export interface InvalidCertificateException {
      message?: invalidCertificateMessage;
    }
    export interface InvalidInputException {
      message?: invalidInputMessage;
    }
    export interface InvalidPublicKeyException {
      message?: invalidPublicKeyMessage;
    }
    export interface InvalidUserTypeException {
      message?: invalidUserTypeMessage;
    }
    export interface KeyPairMismatchException {
      message?: keyPairMismatchMessage;
    }
    export interface LimitExceededException {
      message?: limitExceededMessage;
    }
    export interface ListAccessKeysRequest {
      /** The name of the user.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of upper and lowercase alphanumeric characters
with no spaces. You can also include any of the following characters: =,.@- **/
      UserName?: existingUserNameType;
      /** Use this parameter only when paginating results and only after you receive a
response indicating that the results are truncated. Set it to the value of the 
Marker element in the response that you received to indicate where the next call
should start. **/
      Marker?: markerType;
      /** Use this only when paginating results to indicate the maximum number of items
you want in the response. If additional items exist beyond the maximum you
specify, the IsTruncated response element is true.

This parameter is optional. If you do not include it, it defaults to 100. Note
that IAM might return fewer results, even when there are more results available.
In that case, the IsTruncated response element returns true and Marker contains
a value to include in the subsequent call that tells the service where to
continue from. **/
      MaxItems?: maxItemsType;
    }
    export interface ListAccessKeysResponse {
      /** A list of objects containing metadata about the access keys. **/
      AccessKeyMetadata: accessKeyMetadataListType;
      /** A flag that indicates whether there are more items to return. If your results
were truncated, you can make a subsequent pagination request using the Marker 
request parameter to retrieve more items. Note that IAM might return fewer than
the MaxItems number of results even when there are more results available. We
recommend that you check IsTruncated after every call to ensure that you receive
all of your results. **/
      IsTruncated?: booleanType;
      /** When IsTruncated is true, this element is present and contains the value to use
for the Marker parameter in a subsequent pagination request. **/
      Marker?: markerType;
    }
    export interface ListAccountAliasesRequest {
      /** Use this parameter only when paginating results and only after you receive a
response indicating that the results are truncated. Set it to the value of the 
Marker element in the response that you received to indicate where the next call
should start. **/
      Marker?: markerType;
      /** Use this only when paginating results to indicate the maximum number of items
you want in the response. If additional items exist beyond the maximum you
specify, the IsTruncated response element is true.

This parameter is optional. If you do not include it, it defaults to 100. Note
that IAM might return fewer results, even when there are more results available.
In that case, the IsTruncated response element returns true and Marker contains
a value to include in the subsequent call that tells the service where to
continue from. **/
      MaxItems?: maxItemsType;
    }
    export interface ListAccountAliasesResponse {
      /** A list of aliases associated with the account. AWS supports only one alias per
account. **/
      AccountAliases: accountAliasListType;
      /** A flag that indicates whether there are more items to return. If your results
were truncated, you can make a subsequent pagination request using the Marker 
request parameter to retrieve more items. Note that IAM might return fewer than
the MaxItems number of results even when there are more results available. We
recommend that you check IsTruncated after every call to ensure that you receive
all of your results. **/
      IsTruncated?: booleanType;
      /** When IsTruncated is true, this element is present and contains the value to use
for the Marker parameter in a subsequent pagination request. **/
      Marker?: markerType;
    }
    export interface ListAttachedGroupPoliciesRequest {
      /** The name (friendly name, not ARN) of the group to list attached policies for.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of upper and lowercase alphanumeric characters
with no spaces. You can also include any of the following characters: =,.@- **/
      GroupName: groupNameType;
      /** The path prefix for filtering the results. This parameter is optional. If it is
not included, it defaults to a slash (/), listing all policies.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of either a forward slash (/) by itself or a
string that must begin and end with forward slashes, containing any ASCII
character from the ! (\u0021) thru the DEL character (\u007F), including most
punctuation characters, digits, and upper and lowercased letters. **/
      PathPrefix?: policyPathType;
      /** Use this parameter only when paginating results and only after you receive a
response indicating that the results are truncated. Set it to the value of the 
Marker element in the response that you received to indicate where the next call
should start. **/
      Marker?: markerType;
      /** Use this only when paginating results to indicate the maximum number of items
you want in the response. If additional items exist beyond the maximum you
specify, the IsTruncated response element is true.

This parameter is optional. If you do not include it, it defaults to 100. Note
that IAM might return fewer results, even when there are more results available.
In that case, the IsTruncated response element returns true and Marker contains
a value to include in the subsequent call that tells the service where to
continue from. **/
      MaxItems?: maxItemsType;
    }
    export interface ListAttachedGroupPoliciesResponse {
      /** A list of the attached policies. **/
      AttachedPolicies?: attachedPoliciesListType;
      /** A flag that indicates whether there are more items to return. If your results
were truncated, you can make a subsequent pagination request using the Marker 
request parameter to retrieve more items. Note that IAM might return fewer than
the MaxItems number of results even when there are more results available. We
recommend that you check IsTruncated after every call to ensure that you receive
all of your results. **/
      IsTruncated?: booleanType;
      /** When IsTruncated is true, this element is present and contains the value to use
for the Marker parameter in a subsequent pagination request. **/
      Marker?: markerType;
    }
    export interface ListAttachedRolePoliciesRequest {
      /** The name (friendly name, not ARN) of the role to list attached policies for.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of upper and lowercase alphanumeric characters
with no spaces. You can also include any of the following characters: =,.@- **/
      RoleName: roleNameType;
      /** The path prefix for filtering the results. This parameter is optional. If it is
not included, it defaults to a slash (/), listing all policies.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of either a forward slash (/) by itself or a
string that must begin and end with forward slashes, containing any ASCII
character from the ! (\u0021) thru the DEL character (\u007F), including most
punctuation characters, digits, and upper and lowercased letters. **/
      PathPrefix?: policyPathType;
      /** Use this parameter only when paginating results and only after you receive a
response indicating that the results are truncated. Set it to the value of the 
Marker element in the response that you received to indicate where the next call
should start. **/
      Marker?: markerType;
      /** Use this only when paginating results to indicate the maximum number of items
you want in the response. If additional items exist beyond the maximum you
specify, the IsTruncated response element is true.

This parameter is optional. If you do not include it, it defaults to 100. Note
that IAM might return fewer results, even when there are more results available.
In that case, the IsTruncated response element returns true and Marker contains
a value to include in the subsequent call that tells the service where to
continue from. **/
      MaxItems?: maxItemsType;
    }
    export interface ListAttachedRolePoliciesResponse {
      /** A list of the attached policies. **/
      AttachedPolicies?: attachedPoliciesListType;
      /** A flag that indicates whether there are more items to return. If your results
were truncated, you can make a subsequent pagination request using the Marker 
request parameter to retrieve more items. Note that IAM might return fewer than
the MaxItems number of results even when there are more results available. We
recommend that you check IsTruncated after every call to ensure that you receive
all of your results. **/
      IsTruncated?: booleanType;
      /** When IsTruncated is true, this element is present and contains the value to use
for the Marker parameter in a subsequent pagination request. **/
      Marker?: markerType;
    }
    export interface ListAttachedUserPoliciesRequest {
      /** The name (friendly name, not ARN) of the user to list attached policies for.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of upper and lowercase alphanumeric characters
with no spaces. You can also include any of the following characters: =,.@- **/
      UserName: userNameType;
      /** The path prefix for filtering the results. This parameter is optional. If it is
not included, it defaults to a slash (/), listing all policies.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of either a forward slash (/) by itself or a
string that must begin and end with forward slashes, containing any ASCII
character from the ! (\u0021) thru the DEL character (\u007F), including most
punctuation characters, digits, and upper and lowercased letters. **/
      PathPrefix?: policyPathType;
      /** Use this parameter only when paginating results and only after you receive a
response indicating that the results are truncated. Set it to the value of the 
Marker element in the response that you received to indicate where the next call
should start. **/
      Marker?: markerType;
      /** Use this only when paginating results to indicate the maximum number of items
you want in the response. If additional items exist beyond the maximum you
specify, the IsTruncated response element is true.

This parameter is optional. If you do not include it, it defaults to 100. Note
that IAM might return fewer results, even when there are more results available.
In that case, the IsTruncated response element returns true and Marker contains
a value to include in the subsequent call that tells the service where to
continue from. **/
      MaxItems?: maxItemsType;
    }
    export interface ListAttachedUserPoliciesResponse {
      /** A list of the attached policies. **/
      AttachedPolicies?: attachedPoliciesListType;
      /** A flag that indicates whether there are more items to return. If your results
were truncated, you can make a subsequent pagination request using the Marker 
request parameter to retrieve more items. Note that IAM might return fewer than
the MaxItems number of results even when there are more results available. We
recommend that you check IsTruncated after every call to ensure that you receive
all of your results. **/
      IsTruncated?: booleanType;
      /** When IsTruncated is true, this element is present and contains the value to use
for the Marker parameter in a subsequent pagination request. **/
      Marker?: markerType;
    }
    export interface ListEntitiesForPolicyRequest {
      /** The Amazon Resource Name (ARN) of the IAM policy for which you want the
versions.

For more information about ARNs, see Amazon Resource Names (ARNs) and AWS
Service Namespaces
[http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html] in
the AWS General Reference. **/
      PolicyArn: arnType;
      /** The entity type to use for filtering the results.

For example, when EntityFilter is Role, only the roles that are attached to the
specified policy are returned. This parameter is optional. If it is not
included, all attached entities (users, groups, and roles) are returned. The
argument for this parameter must be one of the valid values listed below. **/
      EntityFilter?: EntityType;
      /** The path prefix for filtering the results. This parameter is optional. If it is
not included, it defaults to a slash (/), listing all entities.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of either a forward slash (/) by itself or a
string that must begin and end with forward slashes, containing any ASCII
character from the ! (\u0021) thru the DEL character (\u007F), including most
punctuation characters, digits, and upper and lowercased letters. **/
      PathPrefix?: pathType;
      /** Use this parameter only when paginating results and only after you receive a
response indicating that the results are truncated. Set it to the value of the 
Marker element in the response that you received to indicate where the next call
should start. **/
      Marker?: markerType;
      /** Use this only when paginating results to indicate the maximum number of items
you want in the response. If additional items exist beyond the maximum you
specify, the IsTruncated response element is true.

This parameter is optional. If you do not include it, it defaults to 100. Note
that IAM might return fewer results, even when there are more results available.
In that case, the IsTruncated response element returns true and Marker contains
a value to include in the subsequent call that tells the service where to
continue from. **/
      MaxItems?: maxItemsType;
    }
    export interface ListEntitiesForPolicyResponse {
      /** A list of IAM groups that the policy is attached to. **/
      PolicyGroups?: PolicyGroupListType;
      /** A list of IAM users that the policy is attached to. **/
      PolicyUsers?: PolicyUserListType;
      /** A list of IAM roles that the policy is attached to. **/
      PolicyRoles?: PolicyRoleListType;
      /** A flag that indicates whether there are more items to return. If your results
were truncated, you can make a subsequent pagination request using the Marker 
request parameter to retrieve more items. Note that IAM might return fewer than
the MaxItems number of results even when there are more results available. We
recommend that you check IsTruncated after every call to ensure that you receive
all of your results. **/
      IsTruncated?: booleanType;
      /** When IsTruncated is true, this element is present and contains the value to use
for the Marker parameter in a subsequent pagination request. **/
      Marker?: markerType;
    }
    export interface ListGroupPoliciesRequest {
      /** The name of the group to list policies for.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of upper and lowercase alphanumeric characters
with no spaces. You can also include any of the following characters: =,.@- **/
      GroupName: groupNameType;
      /** Use this parameter only when paginating results and only after you receive a
response indicating that the results are truncated. Set it to the value of the 
Marker element in the response that you received to indicate where the next call
should start. **/
      Marker?: markerType;
      /** Use this only when paginating results to indicate the maximum number of items
you want in the response. If additional items exist beyond the maximum you
specify, the IsTruncated response element is true.

This parameter is optional. If you do not include it, it defaults to 100. Note
that IAM might return fewer results, even when there are more results available.
In that case, the IsTruncated response element returns true and Marker contains
a value to include in the subsequent call that tells the service where to
continue from. **/
      MaxItems?: maxItemsType;
    }
    export interface ListGroupPoliciesResponse {
      /** A list of policy names. **/
      PolicyNames: policyNameListType;
      /** A flag that indicates whether there are more items to return. If your results
were truncated, you can make a subsequent pagination request using the Marker 
request parameter to retrieve more items. Note that IAM might return fewer than
the MaxItems number of results even when there are more results available. We
recommend that you check IsTruncated after every call to ensure that you receive
all of your results. **/
      IsTruncated?: booleanType;
      /** When IsTruncated is true, this element is present and contains the value to use
for the Marker parameter in a subsequent pagination request. **/
      Marker?: markerType;
    }
    export interface ListGroupsForUserRequest {
      /** The name of the user to list groups for.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of upper and lowercase alphanumeric characters
with no spaces. You can also include any of the following characters: =,.@- **/
      UserName: existingUserNameType;
      /** Use this parameter only when paginating results and only after you receive a
response indicating that the results are truncated. Set it to the value of the 
Marker element in the response that you received to indicate where the next call
should start. **/
      Marker?: markerType;
      /** Use this only when paginating results to indicate the maximum number of items
you want in the response. If additional items exist beyond the maximum you
specify, the IsTruncated response element is true.

This parameter is optional. If you do not include it, it defaults to 100. Note
that IAM might return fewer results, even when there are more results available.
In that case, the IsTruncated response element returns true and Marker contains
a value to include in the subsequent call that tells the service where to
continue from. **/
      MaxItems?: maxItemsType;
    }
    export interface ListGroupsForUserResponse {
      /** A list of groups. **/
      Groups: groupListType;
      /** A flag that indicates whether there are more items to return. If your results
were truncated, you can make a subsequent pagination request using the Marker 
request parameter to retrieve more items. Note that IAM might return fewer than
the MaxItems number of results even when there are more results available. We
recommend that you check IsTruncated after every call to ensure that you receive
all of your results. **/
      IsTruncated?: booleanType;
      /** When IsTruncated is true, this element is present and contains the value to use
for the Marker parameter in a subsequent pagination request. **/
      Marker?: markerType;
    }
    export interface ListGroupsRequest {
      /** The path prefix for filtering the results. For example, the prefix 
/division_abc/subdivision_xyz/ gets all groups whose path starts with 
/division_abc/subdivision_xyz/.

This parameter is optional. If it is not included, it defaults to a slash (/),
listing all groups. The regex pattern [http://wikipedia.org/wiki/regex] for this
parameter is a string of characters consisting of either a forward slash (/) by
itself or a string that must begin and end with forward slashes, containing any
ASCII character from the ! (\u0021) thru the DEL character (\u007F), including
most punctuation characters, digits, and upper and lowercased letters. **/
      PathPrefix?: pathPrefixType;
      /** Use this parameter only when paginating results and only after you receive a
response indicating that the results are truncated. Set it to the value of the 
Marker element in the response that you received to indicate where the next call
should start. **/
      Marker?: markerType;
      /** Use this only when paginating results to indicate the maximum number of items
you want in the response. If additional items exist beyond the maximum you
specify, the IsTruncated response element is true.

This parameter is optional. If you do not include it, it defaults to 100. Note
that IAM might return fewer results, even when there are more results available.
In that case, the IsTruncated response element returns true and Marker contains
a value to include in the subsequent call that tells the service where to
continue from. **/
      MaxItems?: maxItemsType;
    }
    export interface ListGroupsResponse {
      /** A list of groups. **/
      Groups: groupListType;
      /** A flag that indicates whether there are more items to return. If your results
were truncated, you can make a subsequent pagination request using the Marker 
request parameter to retrieve more items. Note that IAM might return fewer than
the MaxItems number of results even when there are more results available. We
recommend that you check IsTruncated after every call to ensure that you receive
all of your results. **/
      IsTruncated?: booleanType;
      /** When IsTruncated is true, this element is present and contains the value to use
for the Marker parameter in a subsequent pagination request. **/
      Marker?: markerType;
    }
    export interface ListInstanceProfilesForRoleRequest {
      /** The name of the role to list instance profiles for.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of upper and lowercase alphanumeric characters
with no spaces. You can also include any of the following characters: =,.@- **/
      RoleName: roleNameType;
      /** Use this parameter only when paginating results and only after you receive a
response indicating that the results are truncated. Set it to the value of the 
Marker element in the response that you received to indicate where the next call
should start. **/
      Marker?: markerType;
      /** Use this only when paginating results to indicate the maximum number of items
you want in the response. If additional items exist beyond the maximum you
specify, the IsTruncated response element is true.

This parameter is optional. If you do not include it, it defaults to 100. Note
that IAM might return fewer results, even when there are more results available.
In that case, the IsTruncated response element returns true and Marker contains
a value to include in the subsequent call that tells the service where to
continue from. **/
      MaxItems?: maxItemsType;
    }
    export interface ListInstanceProfilesForRoleResponse {
      /** A list of instance profiles. **/
      InstanceProfiles: instanceProfileListType;
      /** A flag that indicates whether there are more items to return. If your results
were truncated, you can make a subsequent pagination request using the Marker 
request parameter to retrieve more items. Note that IAM might return fewer than
the MaxItems number of results even when there are more results available. We
recommend that you check IsTruncated after every call to ensure that you receive
all of your results. **/
      IsTruncated?: booleanType;
      /** When IsTruncated is true, this element is present and contains the value to use
for the Marker parameter in a subsequent pagination request. **/
      Marker?: markerType;
    }
    export interface ListInstanceProfilesRequest {
      /** The path prefix for filtering the results. For example, the prefix 
/application_abc/component_xyz/ gets all instance profiles whose path starts
with /application_abc/component_xyz/.

This parameter is optional. If it is not included, it defaults to a slash (/),
listing all instance profiles. The regex pattern
[http://wikipedia.org/wiki/regex] for this parameter is a string of characters
consisting of either a forward slash (/) by itself or a string that must begin
and end with forward slashes, containing any ASCII character from the ! (\u0021)
thru the DEL character (\u007F), including most punctuation characters, digits,
and upper and lowercased letters. **/
      PathPrefix?: pathPrefixType;
      /** Use this parameter only when paginating results and only after you receive a
response indicating that the results are truncated. Set it to the value of the 
Marker element in the response that you received to indicate where the next call
should start. **/
      Marker?: markerType;
      /** Use this only when paginating results to indicate the maximum number of items
you want in the response. If additional items exist beyond the maximum you
specify, the IsTruncated response element is true.

This parameter is optional. If you do not include it, it defaults to 100. Note
that IAM might return fewer results, even when there are more results available.
In that case, the IsTruncated response element returns true and Marker contains
a value to include in the subsequent call that tells the service where to
continue from. **/
      MaxItems?: maxItemsType;
    }
    export interface ListInstanceProfilesResponse {
      /** A list of instance profiles. **/
      InstanceProfiles: instanceProfileListType;
      /** A flag that indicates whether there are more items to return. If your results
were truncated, you can make a subsequent pagination request using the Marker 
request parameter to retrieve more items. Note that IAM might return fewer than
the MaxItems number of results even when there are more results available. We
recommend that you check IsTruncated after every call to ensure that you receive
all of your results. **/
      IsTruncated?: booleanType;
      /** When IsTruncated is true, this element is present and contains the value to use
for the Marker parameter in a subsequent pagination request. **/
      Marker?: markerType;
    }
    export interface ListMFADevicesRequest {
      /** The name of the user whose MFA devices you want to list.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of upper and lowercase alphanumeric characters
with no spaces. You can also include any of the following characters: =,.@- **/
      UserName?: existingUserNameType;
      /** Use this parameter only when paginating results and only after you receive a
response indicating that the results are truncated. Set it to the value of the 
Marker element in the response that you received to indicate where the next call
should start. **/
      Marker?: markerType;
      /** Use this only when paginating results to indicate the maximum number of items
you want in the response. If additional items exist beyond the maximum you
specify, the IsTruncated response element is true.

This parameter is optional. If you do not include it, it defaults to 100. Note
that IAM might return fewer results, even when there are more results available.
In that case, the IsTruncated response element returns true and Marker contains
a value to include in the subsequent call that tells the service where to
continue from. **/
      MaxItems?: maxItemsType;
    }
    export interface ListMFADevicesResponse {
      /** A list of MFA devices. **/
      MFADevices: mfaDeviceListType;
      /** A flag that indicates whether there are more items to return. If your results
were truncated, you can make a subsequent pagination request using the Marker 
request parameter to retrieve more items. Note that IAM might return fewer than
the MaxItems number of results even when there are more results available. We
recommend that you check IsTruncated after every call to ensure that you receive
all of your results. **/
      IsTruncated?: booleanType;
      /** When IsTruncated is true, this element is present and contains the value to use
for the Marker parameter in a subsequent pagination request. **/
      Marker?: markerType;
    }
    export interface ListOpenIDConnectProvidersRequest {
    }
    export interface ListOpenIDConnectProvidersResponse {
      /** The list of IAM OIDC provider resource objects defined in the AWS account. **/
      OpenIDConnectProviderList?: OpenIDConnectProviderListType;
    }
    export interface ListPoliciesRequest {
      /** The scope to use for filtering the results.

To list only AWS managed policies, set Scope to AWS. To list only the customer
managed policies in your AWS account, set Scope to Local.

This parameter is optional. If it is not included, or if it is set to All, all
policies are returned. **/
      Scope?: policyScopeType;
      /** A flag to filter the results to only the attached policies.

When OnlyAttached is true, the returned list contains only the policies that are
attached to an IAM user, group, or role. When OnlyAttached is false, or when the
parameter is not included, all policies are returned. **/
      OnlyAttached?: booleanType;
      /** The path prefix for filtering the results. This parameter is optional. If it is
not included, it defaults to a slash (/), listing all policies. The regex
pattern [http://wikipedia.org/wiki/regex] for this parameter is a string of
characters consisting of either a forward slash (/) by itself or a string that
must begin and end with forward slashes, containing any ASCII character from the
! (\u0021) thru the DEL character (\u007F), including most punctuation
characters, digits, and upper and lowercased letters. **/
      PathPrefix?: policyPathType;
      /** Use this parameter only when paginating results and only after you receive a
response indicating that the results are truncated. Set it to the value of the 
Marker element in the response that you received to indicate where the next call
should start. **/
      Marker?: markerType;
      /** Use this only when paginating results to indicate the maximum number of items
you want in the response. If additional items exist beyond the maximum you
specify, the IsTruncated response element is true.

This parameter is optional. If you do not include it, it defaults to 100. Note
that IAM might return fewer results, even when there are more results available.
In that case, the IsTruncated response element returns true and Marker contains
a value to include in the subsequent call that tells the service where to
continue from. **/
      MaxItems?: maxItemsType;
    }
    export interface ListPoliciesResponse {
      /** A list of policies. **/
      Policies?: policyListType;
      /** A flag that indicates whether there are more items to return. If your results
were truncated, you can make a subsequent pagination request using the Marker 
request parameter to retrieve more items. Note that IAM might return fewer than
the MaxItems number of results even when there are more results available. We
recommend that you check IsTruncated after every call to ensure that you receive
all of your results. **/
      IsTruncated?: booleanType;
      /** When IsTruncated is true, this element is present and contains the value to use
for the Marker parameter in a subsequent pagination request. **/
      Marker?: markerType;
    }
    export interface ListPolicyVersionsRequest {
      /** The Amazon Resource Name (ARN) of the IAM policy for which you want the
versions.

For more information about ARNs, see Amazon Resource Names (ARNs) and AWS
Service Namespaces
[http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html] in
the AWS General Reference. **/
      PolicyArn: arnType;
      /** Use this parameter only when paginating results and only after you receive a
response indicating that the results are truncated. Set it to the value of the 
Marker element in the response that you received to indicate where the next call
should start. **/
      Marker?: markerType;
      /** Use this only when paginating results to indicate the maximum number of items
you want in the response. If additional items exist beyond the maximum you
specify, the IsTruncated response element is true.

This parameter is optional. If you do not include it, it defaults to 100. Note
that IAM might return fewer results, even when there are more results available.
In that case, the IsTruncated response element returns true and Marker contains
a value to include in the subsequent call that tells the service where to
continue from. **/
      MaxItems?: maxItemsType;
    }
    export interface ListPolicyVersionsResponse {
      /** A list of policy versions.

For more information about managed policy versions, see Versioning for Managed
Policies
[http://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-versions.html] 
in the IAM User Guide. **/
      Versions?: policyDocumentVersionListType;
      /** A flag that indicates whether there are more items to return. If your results
were truncated, you can make a subsequent pagination request using the Marker 
request parameter to retrieve more items. Note that IAM might return fewer than
the MaxItems number of results even when there are more results available. We
recommend that you check IsTruncated after every call to ensure that you receive
all of your results. **/
      IsTruncated?: booleanType;
      /** When IsTruncated is true, this element is present and contains the value to use
for the Marker parameter in a subsequent pagination request. **/
      Marker?: markerType;
    }
    export interface ListRolePoliciesRequest {
      /** The name of the role to list policies for.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of upper and lowercase alphanumeric characters
with no spaces. You can also include any of the following characters: =,.@- **/
      RoleName: roleNameType;
      /** Use this parameter only when paginating results and only after you receive a
response indicating that the results are truncated. Set it to the value of the 
Marker element in the response that you received to indicate where the next call
should start. **/
      Marker?: markerType;
      /** Use this only when paginating results to indicate the maximum number of items
you want in the response. If additional items exist beyond the maximum you
specify, the IsTruncated response element is true.

This parameter is optional. If you do not include it, it defaults to 100. Note
that IAM might return fewer results, even when there are more results available.
In that case, the IsTruncated response element returns true and Marker contains
a value to include in the subsequent call that tells the service where to
continue from. **/
      MaxItems?: maxItemsType;
    }
    export interface ListRolePoliciesResponse {
      /** A list of policy names. **/
      PolicyNames: policyNameListType;
      /** A flag that indicates whether there are more items to return. If your results
were truncated, you can make a subsequent pagination request using the Marker 
request parameter to retrieve more items. Note that IAM might return fewer than
the MaxItems number of results even when there are more results available. We
recommend that you check IsTruncated after every call to ensure that you receive
all of your results. **/
      IsTruncated?: booleanType;
      /** When IsTruncated is true, this element is present and contains the value to use
for the Marker parameter in a subsequent pagination request. **/
      Marker?: markerType;
    }
    export interface ListRolesRequest {
      /** The path prefix for filtering the results. For example, the prefix 
/application_abc/component_xyz/ gets all roles whose path starts with 
/application_abc/component_xyz/.

This parameter is optional. If it is not included, it defaults to a slash (/),
listing all roles. The regex pattern [http://wikipedia.org/wiki/regex] for this
parameter is a string of characters consisting of either a forward slash (/) by
itself or a string that must begin and end with forward slashes, containing any
ASCII character from the ! (\u0021) thru the DEL character (\u007F), including
most punctuation characters, digits, and upper and lowercased letters. **/
      PathPrefix?: pathPrefixType;
      /** Use this parameter only when paginating results and only after you receive a
response indicating that the results are truncated. Set it to the value of the 
Marker element in the response that you received to indicate where the next call
should start. **/
      Marker?: markerType;
      /** Use this only when paginating results to indicate the maximum number of items
you want in the response. If additional items exist beyond the maximum you
specify, the IsTruncated response element is true.

This parameter is optional. If you do not include it, it defaults to 100. Note
that IAM might return fewer results, even when there are more results available.
In that case, the IsTruncated response element returns true and Marker contains
a value to include in the subsequent call that tells the service where to
continue from. **/
      MaxItems?: maxItemsType;
    }
    export interface ListRolesResponse {
      /** A list of roles. **/
      Roles: roleListType;
      /** A flag that indicates whether there are more items to return. If your results
were truncated, you can make a subsequent pagination request using the Marker 
request parameter to retrieve more items. Note that IAM might return fewer than
the MaxItems number of results even when there are more results available. We
recommend that you check IsTruncated after every call to ensure that you receive
all of your results. **/
      IsTruncated?: booleanType;
      /** When IsTruncated is true, this element is present and contains the value to use
for the Marker parameter in a subsequent pagination request. **/
      Marker?: markerType;
    }
    export interface ListSAMLProvidersRequest {
    }
    export interface ListSAMLProvidersResponse {
      /** The list of SAML provider resource objects defined in IAM for this AWS account. **/
      SAMLProviderList?: SAMLProviderListType;
    }
    export interface ListSSHPublicKeysRequest {
      /** The name of the IAM user to list SSH public keys for. If none is specified, the
UserName field is determined implicitly based on the AWS access key used to sign
the request.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of upper and lowercase alphanumeric characters
with no spaces. You can also include any of the following characters: =,.@- **/
      UserName?: userNameType;
      /** Use this parameter only when paginating results and only after you receive a
response indicating that the results are truncated. Set it to the value of the 
Marker element in the response that you received to indicate where the next call
should start. **/
      Marker?: markerType;
      /** Use this only when paginating results to indicate the maximum number of items
you want in the response. If additional items exist beyond the maximum you
specify, the IsTruncated response element is true.

This parameter is optional. If you do not include it, it defaults to 100. Note
that IAM might return fewer results, even when there are more results available.
In that case, the IsTruncated response element returns true and Marker contains
a value to include in the subsequent call that tells the service where to
continue from. **/
      MaxItems?: maxItemsType;
    }
    export interface ListSSHPublicKeysResponse {
      /** A list of the SSH public keys assigned to IAM user. **/
      SSHPublicKeys?: SSHPublicKeyListType;
      /** A flag that indicates whether there are more items to return. If your results
were truncated, you can make a subsequent pagination request using the Marker 
request parameter to retrieve more items. Note that IAM might return fewer than
the MaxItems number of results even when there are more results available. We
recommend that you check IsTruncated after every call to ensure that you receive
all of your results. **/
      IsTruncated?: booleanType;
      /** When IsTruncated is true, this element is present and contains the value to use
for the Marker parameter in a subsequent pagination request. **/
      Marker?: markerType;
    }
    export interface ListServerCertificatesRequest {
      /** The path prefix for filtering the results. For example: /company/servercerts 
would get all server certificates for which the path starts with 
/company/servercerts.

This parameter is optional. If it is not included, it defaults to a slash (/),
listing all server certificates. The regex pattern
[http://wikipedia.org/wiki/regex] for this parameter is a string of characters
consisting of either a forward slash (/) by itself or a string that must begin
and end with forward slashes, containing any ASCII character from the ! (\u0021)
thru the DEL character (\u007F), including most punctuation characters, digits,
and upper and lowercased letters. **/
      PathPrefix?: pathPrefixType;
      /** Use this parameter only when paginating results and only after you receive a
response indicating that the results are truncated. Set it to the value of the 
Marker element in the response that you received to indicate where the next call
should start. **/
      Marker?: markerType;
      /** Use this only when paginating results to indicate the maximum number of items
you want in the response. If additional items exist beyond the maximum you
specify, the IsTruncated response element is true.

This parameter is optional. If you do not include it, it defaults to 100. Note
that IAM might return fewer results, even when there are more results available.
In that case, the IsTruncated response element returns true and Marker contains
a value to include in the subsequent call that tells the service where to
continue from. **/
      MaxItems?: maxItemsType;
    }
    export interface ListServerCertificatesResponse {
      /** A list of server certificates. **/
      ServerCertificateMetadataList: serverCertificateMetadataListType;
      /** A flag that indicates whether there are more items to return. If your results
were truncated, you can make a subsequent pagination request using the Marker 
request parameter to retrieve more items. Note that IAM might return fewer than
the MaxItems number of results even when there are more results available. We
recommend that you check IsTruncated after every call to ensure that you receive
all of your results. **/
      IsTruncated?: booleanType;
      /** When IsTruncated is true, this element is present and contains the value to use
for the Marker parameter in a subsequent pagination request. **/
      Marker?: markerType;
    }
    export interface ListSigningCertificatesRequest {
      /** The name of the IAM user whose signing certificates you want to examine.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of upper and lowercase alphanumeric characters
with no spaces. You can also include any of the following characters: =,.@- **/
      UserName?: existingUserNameType;
      /** Use this parameter only when paginating results and only after you receive a
response indicating that the results are truncated. Set it to the value of the 
Marker element in the response that you received to indicate where the next call
should start. **/
      Marker?: markerType;
      /** Use this only when paginating results to indicate the maximum number of items
you want in the response. If additional items exist beyond the maximum you
specify, the IsTruncated response element is true.

This parameter is optional. If you do not include it, it defaults to 100. Note
that IAM might return fewer results, even when there are more results available.
In that case, the IsTruncated response element returns true and Marker contains
a value to include in the subsequent call that tells the service where to
continue from. **/
      MaxItems?: maxItemsType;
    }
    export interface ListSigningCertificatesResponse {
      /** A list of the user&#x27;s signing certificate information. **/
      Certificates: certificateListType;
      /** A flag that indicates whether there are more items to return. If your results
were truncated, you can make a subsequent pagination request using the Marker 
request parameter to retrieve more items. Note that IAM might return fewer than
the MaxItems number of results even when there are more results available. We
recommend that you check IsTruncated after every call to ensure that you receive
all of your results. **/
      IsTruncated?: booleanType;
      /** When IsTruncated is true, this element is present and contains the value to use
for the Marker parameter in a subsequent pagination request. **/
      Marker?: markerType;
    }
    export interface ListUserPoliciesRequest {
      /** The name of the user to list policies for.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of upper and lowercase alphanumeric characters
with no spaces. You can also include any of the following characters: =,.@- **/
      UserName: existingUserNameType;
      /** Use this parameter only when paginating results and only after you receive a
response indicating that the results are truncated. Set it to the value of the 
Marker element in the response that you received to indicate where the next call
should start. **/
      Marker?: markerType;
      /** Use this only when paginating results to indicate the maximum number of items
you want in the response. If additional items exist beyond the maximum you
specify, the IsTruncated response element is true.

This parameter is optional. If you do not include it, it defaults to 100. Note
that IAM might return fewer results, even when there are more results available.
In that case, the IsTruncated response element returns true and Marker contains
a value to include in the subsequent call that tells the service where to
continue from. **/
      MaxItems?: maxItemsType;
    }
    export interface ListUserPoliciesResponse {
      /** A list of policy names. **/
      PolicyNames: policyNameListType;
      /** A flag that indicates whether there are more items to return. If your results
were truncated, you can make a subsequent pagination request using the Marker 
request parameter to retrieve more items. Note that IAM might return fewer than
the MaxItems number of results even when there are more results available. We
recommend that you check IsTruncated after every call to ensure that you receive
all of your results. **/
      IsTruncated?: booleanType;
      /** When IsTruncated is true, this element is present and contains the value to use
for the Marker parameter in a subsequent pagination request. **/
      Marker?: markerType;
    }
    export interface ListUsersRequest {
      /** The path prefix for filtering the results. For example: 
/division_abc/subdivision_xyz/, which would get all user names whose path starts
with /division_abc/subdivision_xyz/.

This parameter is optional. If it is not included, it defaults to a slash (/),
listing all user names. The regex pattern [http://wikipedia.org/wiki/regex] for
this parameter is a string of characters consisting of either a forward slash
(/) by itself or a string that must begin and end with forward slashes,
containing any ASCII character from the ! (\u0021) thru the DEL character
(\u007F), including most punctuation characters, digits, and upper and
lowercased letters. **/
      PathPrefix?: pathPrefixType;
      /** Use this parameter only when paginating results and only after you receive a
response indicating that the results are truncated. Set it to the value of the 
Marker element in the response that you received to indicate where the next call
should start. **/
      Marker?: markerType;
      /** Use this only when paginating results to indicate the maximum number of items
you want in the response. If additional items exist beyond the maximum you
specify, the IsTruncated response element is true.

This parameter is optional. If you do not include it, it defaults to 100. Note
that IAM might return fewer results, even when there are more results available.
In that case, the IsTruncated response element returns true and Marker contains
a value to include in the subsequent call that tells the service where to
continue from. **/
      MaxItems?: maxItemsType;
    }
    export interface ListUsersResponse {
      /** A list of users. **/
      Users: userListType;
      /** A flag that indicates whether there are more items to return. If your results
were truncated, you can make a subsequent pagination request using the Marker 
request parameter to retrieve more items. Note that IAM might return fewer than
the MaxItems number of results even when there are more results available. We
recommend that you check IsTruncated after every call to ensure that you receive
all of your results. **/
      IsTruncated?: booleanType;
      /** When IsTruncated is true, this element is present and contains the value to use
for the Marker parameter in a subsequent pagination request. **/
      Marker?: markerType;
    }
    export interface ListVirtualMFADevicesRequest {
      /** The status (Unassigned or Assigned) of the devices to list. If you do not
specify an AssignmentStatus, the action defaults to Any which lists both
assigned and unassigned virtual MFA devices. **/
      AssignmentStatus?: assignmentStatusType;
      /** Use this parameter only when paginating results and only after you receive a
response indicating that the results are truncated. Set it to the value of the 
Marker element in the response that you received to indicate where the next call
should start. **/
      Marker?: markerType;
      /** Use this only when paginating results to indicate the maximum number of items
you want in the response. If additional items exist beyond the maximum you
specify, the IsTruncated response element is true.

This parameter is optional. If you do not include it, it defaults to 100. Note
that IAM might return fewer results, even when there are more results available.
In that case, the IsTruncated response element returns true and Marker contains
a value to include in the subsequent call that tells the service where to
continue from. **/
      MaxItems?: maxItemsType;
    }
    export interface ListVirtualMFADevicesResponse {
      /** The list of virtual MFA devices in the current account that match the 
AssignmentStatus value that was passed in the request. **/
      VirtualMFADevices: virtualMFADeviceListType;
      /** A flag that indicates whether there are more items to return. If your results
were truncated, you can make a subsequent pagination request using the Marker 
request parameter to retrieve more items. Note that IAM might return fewer than
the MaxItems number of results even when there are more results available. We
recommend that you check IsTruncated after every call to ensure that you receive
all of your results. **/
      IsTruncated?: booleanType;
      /** When IsTruncated is true, this element is present and contains the value to use
for the Marker parameter in a subsequent pagination request. **/
      Marker?: markerType;
    }
    export interface LoginProfile {
      /** The name of the user, which can be used for signing in to the AWS Management
Console. **/
      UserName: userNameType;
      /** The date when the password for the user was created. **/
      CreateDate: dateType;
      /** Specifies whether the user is required to set a new password on next sign-in. **/
      PasswordResetRequired?: booleanType;
    }
    export interface MFADevice {
      /** The user with whom the MFA device is associated. **/
      UserName: userNameType;
      /** The serial number that uniquely identifies the MFA device. For virtual MFA
devices, the serial number is the device ARN. **/
      SerialNumber: serialNumberType;
      /** The date when the MFA device was enabled for the user. **/
      EnableDate: dateType;
    }
    export interface MalformedCertificateException {
      message?: malformedCertificateMessage;
    }
    export interface MalformedPolicyDocumentException {
      message?: malformedPolicyDocumentMessage;
    }
    export interface ManagedPolicyDetail {
      /** The friendly name (not ARN) identifying the policy. **/
      PolicyName?: policyNameType;
      /** The stable and unique string identifying the policy.

For more information about IDs, see IAM Identifiers
[http://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html] in the 
Using IAM guide. **/
      PolicyId?: idType;
      Arn?: arnType;
      /** The path to the policy.

For more information about paths, see IAM Identifiers
[http://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html] in the 
Using IAM guide. **/
      Path?: policyPathType;
      /** The identifier for the version of the policy that is set as the default
(operative) version.

For more information about policy versions, see Versioning for Managed Policies
[http://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-versions.html] 
in the Using IAM guide. **/
      DefaultVersionId?: policyVersionIdType;
      /** The number of principal entities (users, groups, and roles) that the policy is
attached to. **/
      AttachmentCount?: attachmentCountType;
      /** Specifies whether the policy can be attached to an IAM user, group, or role. **/
      IsAttachable?: booleanType;
      /** A friendly description of the policy. **/
      Description?: policyDescriptionType;
      /** The date and time, in ISO 8601 date-time format [http://www.iso.org/iso/iso8601]
, when the policy was created. **/
      CreateDate?: dateType;
      /** The date and time, in ISO 8601 date-time format [http://www.iso.org/iso/iso8601]
, when the policy was last updated.

When a policy has only one version, this field contains the date and time when
the policy was created. When a policy has more than one version, this field
contains the date and time when the most recent policy version was created. **/
      UpdateDate?: dateType;
      /** A list containing information about the versions of the policy. **/
      PolicyVersionList?: policyDocumentVersionListType;
    }
    export interface NoSuchEntityException {
      message?: noSuchEntityMessage;
    }
    export interface OpenIDConnectProviderListEntry {
      Arn?: arnType;
    }
    export interface PasswordPolicy {
      /** Minimum length to require for IAM user passwords. **/
      MinimumPasswordLength?: minimumPasswordLengthType;
      /** Specifies whether to require symbols for IAM user passwords. **/
      RequireSymbols?: booleanType;
      /** Specifies whether to require numbers for IAM user passwords. **/
      RequireNumbers?: booleanType;
      /** Specifies whether to require uppercase characters for IAM user passwords. **/
      RequireUppercaseCharacters?: booleanType;
      /** Specifies whether to require lowercase characters for IAM user passwords. **/
      RequireLowercaseCharacters?: booleanType;
      /** Specifies whether IAM users are allowed to change their own password. **/
      AllowUsersToChangePassword?: booleanType;
      /** Indicates whether passwords in the account expire. Returns true if
MaxPasswordAge is contains a value greater than 0. Returns false if
MaxPasswordAge is 0 or not present. **/
      ExpirePasswords?: booleanType;
      /** The number of days that an IAM user password is valid. **/
      MaxPasswordAge?: maxPasswordAgeType;
      /** Specifies the number of previous passwords that IAM users are prevented from
reusing. **/
      PasswordReusePrevention?: passwordReusePreventionType;
      /** Specifies whether IAM users are prevented from setting a new password after
their password has expired. **/
      HardExpiry?: booleanObjectType;
    }
    export interface PasswordPolicyViolationException {
      message?: passwordPolicyViolationMessage;
    }
    export interface Policy {
      /** The friendly name (not ARN) identifying the policy. **/
      PolicyName?: policyNameType;
      /** The stable and unique string identifying the policy.

For more information about IDs, see IAM Identifiers
[http://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html] in the 
Using IAM guide. **/
      PolicyId?: idType;
      Arn?: arnType;
      /** The path to the policy.

For more information about paths, see IAM Identifiers
[http://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html] in the 
Using IAM guide. **/
      Path?: policyPathType;
      /** The identifier for the version of the policy that is set as the default version. **/
      DefaultVersionId?: policyVersionIdType;
      /** The number of entities (users, groups, and roles) that the policy is attached
to. **/
      AttachmentCount?: attachmentCountType;
      /** Specifies whether the policy can be attached to an IAM user, group, or role. **/
      IsAttachable?: booleanType;
      /** A friendly description of the policy.

This element is included in the response to the GetPolicy operation. It is not
included in the response to the ListPolicies operation. **/
      Description?: policyDescriptionType;
      /** The date and time, in ISO 8601 date-time format [http://www.iso.org/iso/iso8601]
, when the policy was created. **/
      CreateDate?: dateType;
      /** The date and time, in ISO 8601 date-time format [http://www.iso.org/iso/iso8601]
, when the policy was last updated.

When a policy has only one version, this field contains the date and time when
the policy was created. When a policy has more than one version, this field
contains the date and time when the most recent policy version was created. **/
      UpdateDate?: dateType;
    }
    export interface PolicyDetail {
      /** The name of the policy. **/
      PolicyName?: policyNameType;
      /** The policy document. **/
      PolicyDocument?: policyDocumentType;
    }
    export interface PolicyEvaluationException {
      message?: policyEvaluationErrorMessage;
    }
    export interface PolicyGroup {
      /** The name (friendly name, not ARN) identifying the group. **/
      GroupName?: groupNameType;
      /** The stable and unique string identifying the group. For more information about
IDs, see IAM Identifiers
[http://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html] in
the IAM User Guide. **/
      GroupId?: idType;
    }
    export interface PolicyRole {
      /** The name (friendly name, not ARN) identifying the role. **/
      RoleName?: roleNameType;
      /** The stable and unique string identifying the role. For more information about
IDs, see IAM Identifiers
[http://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html] in
the IAM User Guide. **/
      RoleId?: idType;
    }
    export interface PolicyUser {
      /** The name (friendly name, not ARN) identifying the user. **/
      UserName?: userNameType;
      /** The stable and unique string identifying the user. For more information about
IDs, see IAM Identifiers
[http://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html] in
the IAM User Guide. **/
      UserId?: idType;
    }
    export interface PolicyVersion {
      /** The policy document.

The policy document is returned in the response to the GetPolicyVersion and 
GetAccountAuthorizationDetails operations. It is not returned in the response to
the CreatePolicyVersion or ListPolicyVersions operations. **/
      Document?: policyDocumentType;
      /** The identifier for the policy version.

Policy version identifiers always begin with v (always lowercase). When a policy
is created, the first policy version is v1. **/
      VersionId?: policyVersionIdType;
      /** Specifies whether the policy version is set as the policy&#x27;s default version. **/
      IsDefaultVersion?: booleanType;
      /** The date and time, in ISO 8601 date-time format [http://www.iso.org/iso/iso8601]
, when the policy version was created. **/
      CreateDate?: dateType;
    }
    export interface Position {
      /** The line containing the specified position in the document. **/
      Line?: LineNumber;
      /** The column in the line containing the specified position in the document. **/
      Column?: ColumnNumber;
    }
    export interface PutGroupPolicyRequest {
      /** The name of the group to associate the policy with.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of upper and lowercase alphanumeric characters
with no spaces. You can also include any of the following characters: =,.@- **/
      GroupName: groupNameType;
      /** The name of the policy document.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of upper and lowercase alphanumeric characters
with no spaces. You can also include any of the following characters: =,.@- **/
      PolicyName: policyNameType;
      /** The policy document.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of any printable ASCII character ranging from
the space character (\u0020) through end of the ASCII character range (\u00FF).
It also includes the special characters tab (\u0009), line feed (\u000A), and
carriage return (\u000D). **/
      PolicyDocument: policyDocumentType;
    }
    export interface PutRolePolicyRequest {
      /** The name of the role to associate the policy with.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of upper and lowercase alphanumeric characters
with no spaces. You can also include any of the following characters: =,.@- **/
      RoleName: roleNameType;
      /** The name of the policy document.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of upper and lowercase alphanumeric characters
with no spaces. You can also include any of the following characters: =,.@- **/
      PolicyName: policyNameType;
      /** The policy document.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of any printable ASCII character ranging from
the space character (\u0020) through end of the ASCII character range (\u00FF).
It also includes the special characters tab (\u0009), line feed (\u000A), and
carriage return (\u000D). **/
      PolicyDocument: policyDocumentType;
    }
    export interface PutUserPolicyRequest {
      /** The name of the user to associate the policy with.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of upper and lowercase alphanumeric characters
with no spaces. You can also include any of the following characters: =,.@- **/
      UserName: existingUserNameType;
      /** The name of the policy document.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of upper and lowercase alphanumeric characters
with no spaces. You can also include any of the following characters: =,.@- **/
      PolicyName: policyNameType;
      /** The policy document.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of any printable ASCII character ranging from
the space character (\u0020) through end of the ASCII character range (\u00FF).
It also includes the special characters tab (\u0009), line feed (\u000A), and
carriage return (\u000D). **/
      PolicyDocument: policyDocumentType;
    }
    export interface RemoveClientIDFromOpenIDConnectProviderRequest {
      /** The Amazon Resource Name (ARN) of the IAM OIDC provider resource to remove the
client ID from. You can get a list of OIDC provider ARNs by using the 
ListOpenIDConnectProviders action.

For more information about ARNs, see Amazon Resource Names (ARNs) and AWS
Service Namespaces
[http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html] in
the AWS General Reference. **/
      OpenIDConnectProviderArn: arnType;
      /** The client ID (also known as audience) to remove from the IAM OIDC provider
resource. For more information about client IDs, see CreateOpenIDConnectProvider
. **/
      ClientID: clientIDType;
    }
    export interface RemoveRoleFromInstanceProfileRequest {
      /** The name of the instance profile to update.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of upper and lowercase alphanumeric characters
with no spaces. You can also include any of the following characters: =,.@- **/
      InstanceProfileName: instanceProfileNameType;
      /** The name of the role to remove.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of upper and lowercase alphanumeric characters
with no spaces. You can also include any of the following characters: =,.@- **/
      RoleName: roleNameType;
    }
    export interface RemoveUserFromGroupRequest {
      /** The name of the group to update.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of upper and lowercase alphanumeric characters
with no spaces. You can also include any of the following characters: =,.@- **/
      GroupName: groupNameType;
      /** The name of the user to remove.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of upper and lowercase alphanumeric characters
with no spaces. You can also include any of the following characters: =,.@- **/
      UserName: existingUserNameType;
    }
    export interface ResourceSpecificResult {
      /** The name of the simulated resource, in Amazon Resource Name (ARN) format. **/
      EvalResourceName: ResourceNameType;
      /** The result of the simulation of the simulated API action on the resource
specified in EvalResourceName. **/
      EvalResourceDecision: PolicyEvaluationDecisionType;
      /** A list of the statements in the input policies that determine the result for
this part of the simulation. Remember that even if multiple statements allow the
action on the resource, if any statement denies that action, then the explicit
deny overrides any allow, and the deny statement is the only entry included in
the result. **/
      MatchedStatements?: StatementListType;
      /** A list of context keys that are required by the included input policies but that
were not provided by one of the input parameters. This list is used when a list
of ARNs is included in the ResourceArns parameter instead of &quot;&amp;#42;&quot;. If you do not
specify individual resources, by setting ResourceArns to &quot;*&quot; or by not including
the ResourceArns parameter, then any missing context values are instead included
under the EvaluationResults section. To discover the context keys used by a set
of policies, you can call GetContextKeysForCustomPolicy or 
GetContextKeysForPrincipalPolicy. **/
      MissingContextValues?: ContextKeyNamesResultListType;
      /** Additional details about the results of the evaluation decision. When there are
both IAM policies and resource policies, this parameter explains how each set of
policies contributes to the final evaluation decision. When simulating
cross-account access to a resource, both the resource-based policy and the
caller&#x27;s IAM policy must grant access. **/
      EvalDecisionDetails?: EvalDecisionDetailsType;
    }
    export interface ResyncMFADeviceRequest {
      /** The name of the user whose MFA device you want to resynchronize.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of upper and lowercase alphanumeric characters
with no spaces. You can also include any of the following characters: =,.@- **/
      UserName: existingUserNameType;
      /** Serial number that uniquely identifies the MFA device.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of upper and lowercase alphanumeric characters
with no spaces. You can also include any of the following characters: =,.@- **/
      SerialNumber: serialNumberType;
      /** An authentication code emitted by the device.

The format for this parameter is a sequence of six digits. **/
      AuthenticationCode1: authenticationCodeType;
      /** A subsequent authentication code emitted by the device.

The format for this parameter is a sequence of six digits. **/
      AuthenticationCode2: authenticationCodeType;
    }
    export interface Role {
      /** The path to the role. For more information about paths, see IAM Identifiers
[http://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html] in the 
Using IAM guide. **/
      Path: pathType;
      /** The friendly name that identifies the role. **/
      RoleName: roleNameType;
      /** The stable and unique string identifying the role. For more information about
IDs, see IAM Identifiers
[http://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html] in the 
Using IAM guide. **/
      RoleId: idType;
      /** The Amazon Resource Name (ARN) specifying the role. For more information about
ARNs and how to use them in policies, see IAM Identifiers
[http://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html] in the 
Using IAM guide. **/
      Arn: arnType;
      /** The date and time, in ISO 8601 date-time format [http://www.iso.org/iso/iso8601]
, when the role was created. **/
      CreateDate: dateType;
      /** The policy that grants an entity permission to assume the role. **/
      AssumeRolePolicyDocument?: policyDocumentType;
    }
    export interface RoleDetail {
      /** The path to the role. For more information about paths, see IAM Identifiers
[http://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html] in the 
Using IAM guide. **/
      Path?: pathType;
      /** The friendly name that identifies the role. **/
      RoleName?: roleNameType;
      /** The stable and unique string identifying the role. For more information about
IDs, see IAM Identifiers
[http://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html] in the 
Using IAM guide. **/
      RoleId?: idType;
      Arn?: arnType;
      /** The date and time, in ISO 8601 date-time format [http://www.iso.org/iso/iso8601]
, when the role was created. **/
      CreateDate?: dateType;
      /** The trust policy that grants permission to assume the role. **/
      AssumeRolePolicyDocument?: policyDocumentType;
      InstanceProfileList?: instanceProfileListType;
      /** A list of inline policies embedded in the role. These policies are the role&#x27;s
access (permissions) policies. **/
      RolePolicyList?: policyDetailListType;
      /** A list of managed policies attached to the role. These policies are the role&#x27;s
access (permissions) policies. **/
      AttachedManagedPolicies?: attachedPoliciesListType;
    }
    export interface SAMLProviderListEntry {
      /** The Amazon Resource Name (ARN) of the SAML provider. **/
      Arn?: arnType;
      /** The expiration date and time for the SAML provider. **/
      ValidUntil?: dateType;
      /** The date and time when the SAML provider was created. **/
      CreateDate?: dateType;
    }
    export interface SSHPublicKey {
      /** The name of the IAM user associated with the SSH public key. **/
      UserName: userNameType;
      /** The unique identifier for the SSH public key. **/
      SSHPublicKeyId: publicKeyIdType;
      /** The MD5 message digest of the SSH public key. **/
      Fingerprint: publicKeyFingerprintType;
      /** The SSH public key. **/
      SSHPublicKeyBody: publicKeyMaterialType;
      /** The status of the SSH public key. Active means the key can be used for
authentication with an AWS CodeCommit repository. Inactive means the key cannot
be used. **/
      Status: statusType;
      /** The date and time, in ISO 8601 date-time format [http://www.iso.org/iso/iso8601]
, when the SSH public key was uploaded. **/
      UploadDate?: dateType;
    }
    export interface SSHPublicKeyMetadata {
      /** The name of the IAM user associated with the SSH public key. **/
      UserName: userNameType;
      /** The unique identifier for the SSH public key. **/
      SSHPublicKeyId: publicKeyIdType;
      /** The status of the SSH public key. Active means the key can be used for
authentication with an AWS CodeCommit repository. Inactive means the key cannot
be used. **/
      Status: statusType;
      /** The date and time, in ISO 8601 date-time format [http://www.iso.org/iso/iso8601]
, when the SSH public key was uploaded. **/
      UploadDate: dateType;
    }
    export interface ServerCertificate {
      /** The meta information of the server certificate, such as its name, path, ID, and
ARN. **/
      ServerCertificateMetadata: ServerCertificateMetadata;
      /** The contents of the public key certificate. **/
      CertificateBody: certificateBodyType;
      /** The contents of the public key certificate chain. **/
      CertificateChain?: certificateChainType;
    }
    export interface ServerCertificateMetadata {
      /** The path to the server certificate. For more information about paths, see IAM
Identifiers
[http://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html] in the 
Using IAM guide. **/
      Path: pathType;
      /** The name that identifies the server certificate. **/
      ServerCertificateName: serverCertificateNameType;
      /** The stable and unique string identifying the server certificate. For more
information about IDs, see IAM Identifiers
[http://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html] in the 
Using IAM guide. **/
      ServerCertificateId: idType;
      /** The Amazon Resource Name (ARN) specifying the server certificate. For more
information about ARNs and how to use them in policies, see IAM Identifiers
[http://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html] in the 
Using IAM guide. **/
      Arn: arnType;
      /** The date when the server certificate was uploaded. **/
      UploadDate?: dateType;
      /** The date on which the certificate is set to expire. **/
      Expiration?: dateType;
    }
    export interface ServiceFailureException {
      message?: serviceFailureExceptionMessage;
    }
    export interface SetDefaultPolicyVersionRequest {
      /** The Amazon Resource Name (ARN) of the IAM policy whose default version you want
to set.

For more information about ARNs, see Amazon Resource Names (ARNs) and AWS
Service Namespaces
[http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html] in
the AWS General Reference. **/
      PolicyArn: arnType;
      /** The version of the policy to set as the default (operative) version.

For more information about managed policy versions, see Versioning for Managed
Policies
[http://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-versions.html] 
in the IAM User Guide. **/
      VersionId: policyVersionIdType;
    }
    export interface SigningCertificate {
      /** The name of the user the signing certificate is associated with. **/
      UserName: userNameType;
      /** The ID for the signing certificate. **/
      CertificateId: certificateIdType;
      /** The contents of the signing certificate. **/
      CertificateBody: certificateBodyType;
      /** The status of the signing certificate. Active means the key is valid for API
calls, while Inactive means it is not. **/
      Status: statusType;
      /** The date when the signing certificate was uploaded. **/
      UploadDate?: dateType;
    }
    export interface SimulateCustomPolicyRequest {
      /** A list of policy documents to include in the simulation. Each document is
specified as a string containing the complete, valid JSON text of an IAM policy.
Do not include any resource-based policies in this parameter. Any resource-based
policy must be submitted with the ResourcePolicy parameter. The policies cannot
be &quot;scope-down&quot; policies, such as you could include in a call to 
GetFederationToken
[http://docs.aws.amazon.com/IAM/latest/APIReference/API_GetFederationToken.html] 
or one of the AssumeRole
[http://docs.aws.amazon.com/IAM/latest/APIReference/API_AssumeRole.html] APIs to
restrict what a user can do while using the temporary credentials.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of any printable ASCII character ranging from
the space character (\u0020) through end of the ASCII character range (\u00FF).
It also includes the special characters tab (\u0009), line feed (\u000A), and
carriage return (\u000D). **/
      PolicyInputList: SimulationPolicyListType;
      /** A list of names of API actions to evaluate in the simulation. Each action is
evaluated against each resource. Each action must include the service
identifier, such as iam:CreateUser. **/
      ActionNames: ActionNameListType;
      /** A list of ARNs of AWS resources to include in the simulation. If this parameter
is not provided then the value defaults to &amp;#42; (all resources). Each API in the 
ActionNames parameter is evaluated for each resource in this list. The
simulation determines the access result (allowed or denied) of each combination
and reports it in the response.

The simulation does not automatically retrieve policies for the specified
resources. If you want to include a resource policy in the simulation, then you
must include the policy as a string in the ResourcePolicy parameter.

If you include a ResourcePolicy, then it must be applicable to all of the
resources included in the simulation or you receive an invalid input error.

For more information about ARNs, see Amazon Resource Names (ARNs) and AWS
Service Namespaces
[http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html] in
the AWS General Reference. **/
      ResourceArns?: ResourceNameListType;
      /** A resource-based policy to include in the simulation provided as a string. Each
resource in the simulation is treated as if it had this policy attached. You can
include only one resource-based policy in a simulation.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of any printable ASCII character ranging from
the space character (\u0020) through end of the ASCII character range (\u00FF).
It also includes the special characters tab (\u0009), line feed (\u000A), and
carriage return (\u000D). **/
      ResourcePolicy?: policyDocumentType;
      /** An AWS account ID that specifies the owner of any simulated resource that does
not identify its owner in the resource ARN, such as an S3 bucket or object. If 
ResourceOwner is specified, it is also used as the account owner of any 
ResourcePolicy included in the simulation. If the ResourceOwner parameter is not
specified, then the owner of the resources and the resource policy defaults to
the account of the identity provided in CallerArn. This parameter is required
only if you specify a resource-based policy and account that owns the resource
is different from the account that owns the simulated calling user CallerArn. **/
      ResourceOwner?: ResourceNameType;
      /** The ARN of the IAM user that you want to use as the simulated caller of the
APIs. CallerArn is required if you include a ResourcePolicy so that the policy&#x27;s 
Principal element has a value to use in evaluating the policy.

You can specify only the ARN of an IAM user. You cannot specify the ARN of an
assumed role, federated user, or a service principal. **/
      CallerArn?: ResourceNameType;
      /** A list of context keys and corresponding values for the simulation to use.
Whenever a context key is evaluated in one of the simulated IAM permission
policies, the corresponding value is supplied. **/
      ContextEntries?: ContextEntryListType;
      /** Specifies the type of simulation to run. Different APIs that support
resource-based policies require different combinations of resources. By
specifying the type of simulation to run, you enable the policy simulator to
enforce the presence of the required resources to ensure reliable simulation
results. If your simulation does not match one of the following scenarios, then
you can omit this parameter. The following list shows each of the supported
scenario values and the resources that you must define to run the simulation.

Each of the EC2 scenarios requires that you specify instance, image, and
security-group resources. If your scenario includes an EBS volume, then you must
specify that volume as a resource. If the EC2 scenario includes VPC, then you
must supply the network-interface resource. If it includes an IP subnet, then
you must specify the subnet resource. For more information on the EC2 scenario
options, see Supported Platforms
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-supported-platforms.html] 
in the AWS EC2 User Guide.

&amp;#42;   EC2-Classic-InstanceStore 
 
 instance, image, security-group
 
 
*   EC2-Classic-EBS 
 
 instance, image, security-group, volume
 
 
*   EC2-VPC-InstanceStore 
 
 instance, image, security-group, network-interface
 
 
*   EC2-VPC-InstanceStore-Subnet 
 
 instance, image, security-group, network-interface, subnet
 
 
*   EC2-VPC-EBS 
 
 instance, image, security-group, network-interface, volume
 
 
*   EC2-VPC-EBS-Subnet 
 
 instance, image, security-group, network-interface, subnet, volume **/
      ResourceHandlingOption?: ResourceHandlingOptionType;
      /** Use this only when paginating results to indicate the maximum number of items
you want in the response. If additional items exist beyond the maximum you
specify, the IsTruncated response element is true.

This parameter is optional. If you do not include it, it defaults to 100. Note
that IAM might return fewer results, even when there are more results available.
In that case, the IsTruncated response element returns true and Marker contains
a value to include in the subsequent call that tells the service where to
continue from. **/
      MaxItems?: maxItemsType;
      /** Use this parameter only when paginating results and only after you receive a
response indicating that the results are truncated. Set it to the value of the 
Marker element in the response that you received to indicate where the next call
should start. **/
      Marker?: markerType;
    }
    export interface SimulatePolicyResponse {
      /** The results of the simulation. **/
      EvaluationResults?: EvaluationResultsListType;
      /** A flag that indicates whether there are more items to return. If your results
were truncated, you can make a subsequent pagination request using the Marker 
request parameter to retrieve more items. Note that IAM might return fewer than
the MaxItems number of results even when there are more results available. We
recommend that you check IsTruncated after every call to ensure that you receive
all of your results. **/
      IsTruncated?: booleanType;
      /** When IsTruncated is true, this element is present and contains the value to use
for the Marker parameter in a subsequent pagination request. **/
      Marker?: markerType;
    }
    export interface SimulatePrincipalPolicyRequest {
      /** The Amazon Resource Name (ARN) of a user, group, or role whose policies you want
to include in the simulation. If you specify a user, group, or role, the
simulation includes all policies that are associated with that entity. If you
specify a user, the simulation also includes all policies that are attached to
any groups the user belongs to.

For more information about ARNs, see Amazon Resource Names (ARNs) and AWS
Service Namespaces
[http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html] in
the AWS General Reference. **/
      PolicySourceArn: arnType;
      /** An optional list of additional policy documents to include in the simulation.
Each document is specified as a string containing the complete, valid JSON text
of an IAM policy.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of any printable ASCII character ranging from
the space character (\u0020) through end of the ASCII character range (\u00FF).
It also includes the special characters tab (\u0009), line feed (\u000A), and
carriage return (\u000D). **/
      PolicyInputList?: SimulationPolicyListType;
      /** A list of names of API actions to evaluate in the simulation. Each action is
evaluated for each resource. Each action must include the service identifier,
such as iam:CreateUser. **/
      ActionNames: ActionNameListType;
      /** A list of ARNs of AWS resources to include in the simulation. If this parameter
is not provided then the value defaults to &amp;#42; (all resources). Each API in the 
ActionNames parameter is evaluated for each resource in this list. The
simulation determines the access result (allowed or denied) of each combination
and reports it in the response.

The simulation does not automatically retrieve policies for the specified
resources. If you want to include a resource policy in the simulation, then you
must include the policy as a string in the ResourcePolicy parameter.

For more information about ARNs, see Amazon Resource Names (ARNs) and AWS
Service Namespaces
[http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html] in
the AWS General Reference. **/
      ResourceArns?: ResourceNameListType;
      /** A resource-based policy to include in the simulation provided as a string. Each
resource in the simulation is treated as if it had this policy attached. You can
include only one resource-based policy in a simulation.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of any printable ASCII character ranging from
the space character (\u0020) through end of the ASCII character range (\u00FF).
It also includes the special characters tab (\u0009), line feed (\u000A), and
carriage return (\u000D). **/
      ResourcePolicy?: policyDocumentType;
      /** An AWS account ID that specifies the owner of any simulated resource that does
not identify its owner in the resource ARN, such as an S3 bucket or object. If 
ResourceOwner is specified, it is also used as the account owner of any 
ResourcePolicy included in the simulation. If the ResourceOwner parameter is not
specified, then the owner of the resources and the resource policy defaults to
the account of the identity provided in CallerArn. This parameter is required
only if you specify a resource-based policy and account that owns the resource
is different from the account that owns the simulated calling user CallerArn. **/
      ResourceOwner?: ResourceNameType;
      /** The ARN of the IAM user that you want to specify as the simulated caller of the
APIs. If you do not specify a CallerArn, it defaults to the ARN of the user that
you specify in PolicySourceArn, if you specified a user. If you include both a 
PolicySourceArn (for example, arn:aws:iam::123456789012:user/David) and a 
CallerArn (for example, arn:aws:iam::123456789012:user/Bob), the result is that
you simulate calling the APIs as Bob, as if Bob had David&#x27;s policies.

You can specify only the ARN of an IAM user. You cannot specify the ARN of an
assumed role, federated user, or a service principal.

CallerArn is required if you include a ResourcePolicy and the PolicySourceArn 
is not the ARN for an IAM user. This is required so that the resource-based
policy&#x27;s Principal element has a value to use in evaluating the policy.

For more information about ARNs, see Amazon Resource Names (ARNs) and AWS
Service Namespaces
[http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html] in
the AWS General Reference. **/
      CallerArn?: ResourceNameType;
      /** A list of context keys and corresponding values for the simulation to use.
Whenever a context key is evaluated in one of the simulated IAM permission
policies, the corresponding value is supplied. **/
      ContextEntries?: ContextEntryListType;
      /** Specifies the type of simulation to run. Different APIs that support
resource-based policies require different combinations of resources. By
specifying the type of simulation to run, you enable the policy simulator to
enforce the presence of the required resources to ensure reliable simulation
results. If your simulation does not match one of the following scenarios, then
you can omit this parameter. The following list shows each of the supported
scenario values and the resources that you must define to run the simulation.

Each of the EC2 scenarios requires that you specify instance, image, and
security-group resources. If your scenario includes an EBS volume, then you must
specify that volume as a resource. If the EC2 scenario includes VPC, then you
must supply the network-interface resource. If it includes an IP subnet, then
you must specify the subnet resource. For more information on the EC2 scenario
options, see Supported Platforms
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-supported-platforms.html] 
in the AWS EC2 User Guide.

&amp;#42;   EC2-Classic-InstanceStore 
 
 instance, image, security-group
 
 
*   EC2-Classic-EBS 
 
 instance, image, security-group, volume
 
 
*   EC2-VPC-InstanceStore 
 
 instance, image, security-group, network-interface
 
 
*   EC2-VPC-InstanceStore-Subnet 
 
 instance, image, security-group, network-interface, subnet
 
 
*   EC2-VPC-EBS 
 
 instance, image, security-group, network-interface, volume
 
 
*   EC2-VPC-EBS-Subnet 
 
 instance, image, security-group, network-interface, subnet, volume **/
      ResourceHandlingOption?: ResourceHandlingOptionType;
      /** Use this only when paginating results to indicate the maximum number of items
you want in the response. If additional items exist beyond the maximum you
specify, the IsTruncated response element is true.

This parameter is optional. If you do not include it, it defaults to 100. Note
that IAM might return fewer results, even when there are more results available.
In that case, the IsTruncated response element returns true and Marker contains
a value to include in the subsequent call that tells the service where to
continue from. **/
      MaxItems?: maxItemsType;
      /** Use this parameter only when paginating results and only after you receive a
response indicating that the results are truncated. Set it to the value of the 
Marker element in the response that you received to indicate where the next call
should start. **/
      Marker?: markerType;
    }
    export interface Statement {
      /** The identifier of the policy that was provided as an input. **/
      SourcePolicyId?: PolicyIdentifierType;
      /** The type of the policy. **/
      SourcePolicyType?: PolicySourceType;
      /** The row and column of the beginning of the Statement in an IAM policy. **/
      StartPosition?: Position;
      /** The row and column of the end of a Statement in an IAM policy. **/
      EndPosition?: Position;
    }
    export interface UnrecognizedPublicKeyEncodingException {
      message?: unrecognizedPublicKeyEncodingMessage;
    }
    export interface UpdateAccessKeyRequest {
      /** The name of the user whose key you want to update.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of upper and lowercase alphanumeric characters
with no spaces. You can also include any of the following characters: =,.@- **/
      UserName?: existingUserNameType;
      /** The access key ID of the secret access key you want to update.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters that can consist of any upper or lowercased letter or
digit. **/
      AccessKeyId: accessKeyIdType;
      /** The status you want to assign to the secret access key. Active means the key
can be used for API calls to AWS, while Inactive means the key cannot be used. **/
      Status: statusType;
    }
    export interface UpdateAccountPasswordPolicyRequest {
      /** The minimum number of characters allowed in an IAM user password.

Default value: 6 **/
      MinimumPasswordLength?: minimumPasswordLengthType;
      /** Specifies whether IAM user passwords must contain at least one of the following
non-alphanumeric characters:

! @ # $ % ^ &amp;amp; &amp;#42; ( ) _ + - = [ ] { } | &#x27;

Default value: false **/
      RequireSymbols?: booleanType;
      /** Specifies whether IAM user passwords must contain at least one numeric character
(0 to 9).

Default value: false **/
      RequireNumbers?: booleanType;
      /** Specifies whether IAM user passwords must contain at least one uppercase
character from the ISO basic Latin alphabet (A to Z).

Default value: false **/
      RequireUppercaseCharacters?: booleanType;
      /** Specifies whether IAM user passwords must contain at least one lowercase
character from the ISO basic Latin alphabet (a to z).

Default value: false **/
      RequireLowercaseCharacters?: booleanType;
      /** Allows all IAM users in your account to use the AWS Management Console to
change their own passwords. For more information, see Letting IAM Users Change
Their Own Passwords
[http://docs.aws.amazon.com/IAM/latest/UserGuide/HowToPwdIAMUser.html] in the 
IAM User Guide.

Default value: false **/
      AllowUsersToChangePassword?: booleanType;
      /** The number of days that an IAM user password is valid. The default value of 0
means IAM user passwords never expire.

Default value: 0 **/
      MaxPasswordAge?: maxPasswordAgeType;
      /** Specifies the number of previous passwords that IAM users are prevented from
reusing. The default value of 0 means IAM users are not prevented from reusing
previous passwords.

Default value: 0 **/
      PasswordReusePrevention?: passwordReusePreventionType;
      /** Prevents IAM users from setting a new password after their password has expired.

Default value: false **/
      HardExpiry?: booleanObjectType;
    }
    export interface UpdateAssumeRolePolicyRequest {
      /** The name of the role to update with the new policy.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of upper and lowercase alphanumeric characters
with no spaces. You can also include any of the following characters: =,.@- **/
      RoleName: roleNameType;
      /** The policy that grants an entity permission to assume the role.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of any printable ASCII character ranging from
the space character (\u0020) through end of the ASCII character range (\u00FF).
It also includes the special characters tab (\u0009), line feed (\u000A), and
carriage return (\u000D). **/
      PolicyDocument: policyDocumentType;
    }
    export interface UpdateGroupRequest {
      /** Name of the IAM group to update. If you&#x27;re changing the name of the group, this
is the original name.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of upper and lowercase alphanumeric characters
with no spaces. You can also include any of the following characters: =,.@- **/
      GroupName: groupNameType;
      /** New path for the IAM group. Only include this if changing the group&#x27;s path.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of either a forward slash (/) by itself or a
string that must begin and end with forward slashes, containing any ASCII
character from the ! (\u0021) thru the DEL character (\u007F), including most
punctuation characters, digits, and upper and lowercased letters. **/
      NewPath?: pathType;
      /** New name for the IAM group. Only include this if changing the group&#x27;s name.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of upper and lowercase alphanumeric characters
with no spaces. You can also include any of the following characters: =,.@- **/
      NewGroupName?: groupNameType;
    }
    export interface UpdateLoginProfileRequest {
      /** The name of the user whose password you want to update.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of upper and lowercase alphanumeric characters
with no spaces. You can also include any of the following characters: =,.@- **/
      UserName: userNameType;
      /** The new password for the specified IAM user.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of any printable ASCII character ranging from
the space character (\u0020) through end of the ASCII character range (\u00FF).
It also includes the special characters tab (\u0009), line feed (\u000A), and
carriage return (\u000D). However, the format can be further restricted by the
account administrator by setting a password policy on the AWS account. For more
information, see UpdateAccountPasswordPolicy. **/
      Password?: passwordType;
      /** Allows this new password to be used only once by requiring the specified IAM
user to set a new password on next sign-in. **/
      PasswordResetRequired?: booleanObjectType;
    }
    export interface UpdateOpenIDConnectProviderThumbprintRequest {
      /** The Amazon Resource Name (ARN) of the IAM OIDC provider resource object for
which you want to update the thumbprint. You can get a list of OIDC provider
ARNs by using the ListOpenIDConnectProviders action.

For more information about ARNs, see Amazon Resource Names (ARNs) and AWS
Service Namespaces
[http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html] in
the AWS General Reference. **/
      OpenIDConnectProviderArn: arnType;
      /** A list of certificate thumbprints that are associated with the specified IAM
OpenID Connect provider. For more information, see CreateOpenIDConnectProvider. **/
      ThumbprintList: thumbprintListType;
    }
    export interface UpdateSAMLProviderRequest {
      /** An XML document generated by an identity provider (IdP) that supports SAML 2.0.
The document includes the issuer&#x27;s name, expiration information, and keys that
can be used to validate the SAML authentication response (assertions) that are
received from the IdP. You must generate the metadata document using the
identity management software that is used as your organization&#x27;s IdP. **/
      SAMLMetadataDocument: SAMLMetadataDocumentType;
      /** The Amazon Resource Name (ARN) of the SAML provider to update.

For more information about ARNs, see Amazon Resource Names (ARNs) and AWS
Service Namespaces
[http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html] in
the AWS General Reference. **/
      SAMLProviderArn: arnType;
    }
    export interface UpdateSAMLProviderResponse {
      /** The Amazon Resource Name (ARN) of the SAML provider that was updated. **/
      SAMLProviderArn?: arnType;
    }
    export interface UpdateSSHPublicKeyRequest {
      /** The name of the IAM user associated with the SSH public key.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of upper and lowercase alphanumeric characters
with no spaces. You can also include any of the following characters: =,.@- **/
      UserName: userNameType;
      /** The unique identifier for the SSH public key.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters that can consist of any upper or lowercased letter or
digit. **/
      SSHPublicKeyId: publicKeyIdType;
      /** The status to assign to the SSH public key. Active means the key can be used for
authentication with an AWS CodeCommit repository. Inactive means the key cannot
be used. **/
      Status: statusType;
    }
    export interface UpdateServerCertificateRequest {
      /** The name of the server certificate that you want to update.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of upper and lowercase alphanumeric characters
with no spaces. You can also include any of the following characters: =,.@- **/
      ServerCertificateName: serverCertificateNameType;
      /** The new path for the server certificate. Include this only if you are updating
the server certificate&#x27;s path.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of either a forward slash (/) by itself or a
string that must begin and end with forward slashes, containing any ASCII
character from the ! (\u0021) thru the DEL character (\u007F), including most
punctuation characters, digits, and upper and lowercased letters. **/
      NewPath?: pathType;
      /** The new name for the server certificate. Include this only if you are updating
the server certificate&#x27;s name. The name of the certificate cannot contain any
spaces.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of upper and lowercase alphanumeric characters
with no spaces. You can also include any of the following characters: =,.@- **/
      NewServerCertificateName?: serverCertificateNameType;
    }
    export interface UpdateSigningCertificateRequest {
      /** The name of the IAM user the signing certificate belongs to.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of upper and lowercase alphanumeric characters
with no spaces. You can also include any of the following characters: =,.@- **/
      UserName?: existingUserNameType;
      /** The ID of the signing certificate you want to update.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters that can consist of any upper or lowercased letter or
digit. **/
      CertificateId: certificateIdType;
      /** The status you want to assign to the certificate. Active means the certificate
can be used for API calls to AWS, while Inactive means the certificate cannot be
used. **/
      Status: statusType;
    }
    export interface UpdateUserRequest {
      /** Name of the user to update. If you&#x27;re changing the name of the user, this is the
original user name.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of upper and lowercase alphanumeric characters
with no spaces. You can also include any of the following characters: =,.@- **/
      UserName: existingUserNameType;
      /** New path for the IAM user. Include this parameter only if you&#x27;re changing the
user&#x27;s path.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of either a forward slash (/) by itself or a
string that must begin and end with forward slashes, containing any ASCII
character from the ! (\u0021) thru the DEL character (\u007F), including most
punctuation characters, digits, and upper and lowercased letters. **/
      NewPath?: pathType;
      /** New name for the user. Include this parameter only if you&#x27;re changing the user&#x27;s
name.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of upper and lowercase alphanumeric characters
with no spaces. You can also include any of the following characters: =,.@- **/
      NewUserName?: userNameType;
    }
    export interface UploadSSHPublicKeyRequest {
      /** The name of the IAM user to associate the SSH public key with.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of upper and lowercase alphanumeric characters
with no spaces. You can also include any of the following characters: =,.@- **/
      UserName: userNameType;
      /** The SSH public key. The public key must be encoded in ssh-rsa format or PEM
format.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of any printable ASCII character ranging from
the space character (\u0020) through end of the ASCII character range (\u00FF).
It also includes the special characters tab (\u0009), line feed (\u000A), and
carriage return (\u000D). **/
      SSHPublicKeyBody: publicKeyMaterialType;
    }
    export interface UploadSSHPublicKeyResponse {
      /** Contains information about the SSH public key. **/
      SSHPublicKey?: SSHPublicKey;
    }
    export interface UploadServerCertificateRequest {
      /** The path for the server certificate. For more information about paths, see IAM
Identifiers
[http://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html] in the 
IAM User Guide.

This parameter is optional. If it is not included, it defaults to a slash (/).
The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of either a forward slash (/) by itself or a
string that must begin and end with forward slashes, containing any ASCII
character from the ! (\u0021) thru the DEL character (\u007F), including most
punctuation characters, digits, and upper and lowercased letters.

If you are uploading a server certificate specifically for use with Amazon
CloudFront distributions, you must specify a path using the --path option. The
path must begin with /cloudfront and must include a trailing slash (for example, 
/cloudfront/test/). **/
      Path?: pathType;
      /** The name for the server certificate. Do not include the path in this value. The
name of the certificate cannot contain any spaces.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of upper and lowercase alphanumeric characters
with no spaces. You can also include any of the following characters: =,.@- **/
      ServerCertificateName: serverCertificateNameType;
      /** The contents of the public key certificate in PEM-encoded format.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of any printable ASCII character ranging from
the space character (\u0020) through end of the ASCII character range (\u00FF).
It also includes the special characters tab (\u0009), line feed (\u000A), and
carriage return (\u000D). **/
      CertificateBody: certificateBodyType;
      /** The contents of the private key in PEM-encoded format.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of any printable ASCII character ranging from
the space character (\u0020) through end of the ASCII character range (\u00FF).
It also includes the special characters tab (\u0009), line feed (\u000A), and
carriage return (\u000D). **/
      PrivateKey: privateKeyType;
      /** The contents of the certificate chain. This is typically a concatenation of the
PEM-encoded public key certificates of the chain.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of any printable ASCII character ranging from
the space character (\u0020) through end of the ASCII character range (\u00FF).
It also includes the special characters tab (\u0009), line feed (\u000A), and
carriage return (\u000D). **/
      CertificateChain?: certificateChainType;
    }
    export interface UploadServerCertificateResponse {
      /** The meta information of the uploaded server certificate without its certificate
body, certificate chain, and private key. **/
      ServerCertificateMetadata?: ServerCertificateMetadata;
    }
    export interface UploadSigningCertificateRequest {
      /** The name of the user the signing certificate is for.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of upper and lowercase alphanumeric characters
with no spaces. You can also include any of the following characters: =,.@- **/
      UserName?: existingUserNameType;
      /** The contents of the signing certificate.

The regex pattern [http://wikipedia.org/wiki/regex] for this parameter is a
string of characters consisting of any printable ASCII character ranging from
the space character (\u0020) through end of the ASCII character range (\u00FF).
It also includes the special characters tab (\u0009), line feed (\u000A), and
carriage return (\u000D). **/
      CertificateBody: certificateBodyType;
    }
    export interface UploadSigningCertificateResponse {
      /** Information about the certificate. **/
      Certificate: SigningCertificate;
    }
    export interface User {
      /** The path to the user. For more information about paths, see IAM Identifiers
[http://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html] in the 
Using IAM guide. **/
      Path: pathType;
      /** The friendly name identifying the user. **/
      UserName: userNameType;
      /** The stable and unique string identifying the user. For more information about
IDs, see IAM Identifiers
[http://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html] in the 
Using IAM guide. **/
      UserId: idType;
      /** The Amazon Resource Name (ARN) that identifies the user. For more information
about ARNs and how to use ARNs in policies, see IAM Identifiers
[http://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html] in the 
Using IAM guide. **/
      Arn: arnType;
      /** The date and time, in ISO 8601 date-time format [http://www.iso.org/iso/iso8601]
, when the user was created. **/
      CreateDate: dateType;
      /** The date and time, in ISO 8601 date-time format [http://www.iso.org/iso/iso8601]
, when the user&#x27;s password was last used to sign in to an AWS website. For a
list of AWS websites that capture a user&#x27;s last sign-in time, see the Credential
Reports
[http://docs.aws.amazon.com/IAM/latest/UserGuide/credential-reports.html] topic
in the Using IAM guide. If a password is used more than once in a five-minute
span, only the first use is returned in this field. This field is null (not
present) when:

&amp;#42;  The user does not have a password
 
 
*  The password exists but has never been used (at least not since IAM started
 tracking this information on October 20th, 2014
 
 
*  there is no sign-in data associated with the user
 
 

This value is returned only in the GetUser and ListUsers actions. **/
      PasswordLastUsed?: dateType;
    }
    export interface UserDetail {
      /** The path to the user. For more information about paths, see IAM Identifiers
[http://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html] in the 
Using IAM guide. **/
      Path?: pathType;
      /** The friendly name identifying the user. **/
      UserName?: userNameType;
      /** The stable and unique string identifying the user. For more information about
IDs, see IAM Identifiers
[http://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html] in the 
Using IAM guide. **/
      UserId?: idType;
      Arn?: arnType;
      /** The date and time, in ISO 8601 date-time format [http://www.iso.org/iso/iso8601]
, when the user was created. **/
      CreateDate?: dateType;
      /** A list of the inline policies embedded in the user. **/
      UserPolicyList?: policyDetailListType;
      /** A list of IAM groups that the user is in. **/
      GroupList?: groupNameListType;
      /** A list of the managed policies attached to the user. **/
      AttachedManagedPolicies?: attachedPoliciesListType;
    }
    export interface VirtualMFADevice {
      /** The serial number associated with VirtualMFADevice. **/
      SerialNumber: serialNumberType;
      /** The Base32 seed defined as specified in RFC3548
[http://www.ietf.org/rfc/rfc3548.txt]. The Base32StringSeed is Base64-encoded. **/
      Base32StringSeed?: BootstrapDatum;
      /** A QR code PNG image that encodes 
otpauth://totp/$virtualMFADeviceName@$AccountName?secret=$Base32String where 
$virtualMFADeviceName is one of the create call arguments, AccountName is the
user name if set (otherwise, the account ID otherwise), and Base32String is the
seed in Base32 format. The Base32String value is Base64-encoded. **/
      QRCodePNG?: BootstrapDatum;
      User?: User;
      /** The date and time on which the virtual MFA device was enabled. **/
      EnableDate?: dateType;
    }
  }
}
