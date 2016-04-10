// Type definitions for aws-sdk - AWS IoT
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

// COMMENTED <reference path="./aws-sdk.d.ts" />

declare module "aws-sdk" {

 /**
   * apiVersion: 2015-05-28
   * endpointPrefix: iot
   * serviceAbbreviation: 
   * signatureVersion: v4
   * protocol: rest-json
   *
   * AWS IoTAWS IoT provides secure, bi-directional communication between
Internet-connected things (such as sensors, actuators, embedded devices, or
smart appliances) and the AWS cloud. You can discover your custom IoT-Data
endpoint to communicate with, configure rules for data processing and
integration with other services, organize resources associated with each thing
(Thing Registry), configure logging, and create and manage policies and
credentials to authenticate things.

For more information about how AWS IoT works, see the Developer Guide
[http://docs.aws.amazon.com/iot/latest/developerguide/aws-iot-how-it-works.html] 
.
   *
   */
  export class Iot extends Service {
    constructor(options?: any);
    endpoint: Endpoint;
    /**
     * Accepts a pending certificate transfer. The default state of the certificate is
INACTIVE.

To check for pending certificate transfers, call ListCertificates to enumerate
your certificates.
     *
     * @error ResourceNotFoundException The specified resource does not exist.  
     * @error TransferAlreadyCompletedException You can&#x27;t revert the certificate transfer because the transfer is already
complete.  
     * @error InvalidRequestException The request is not valid.  
     * @error ThrottlingException The rate exceeds the limit.  
     * @error UnauthorizedException You are not authorized to perform this operation.  
     * @error ServiceUnavailableException The service is temporarily unavailable.  
     * @error InternalFailureException An unexpected error has occurred.  
     */
    acceptCertificateTransfer(params: Iot.AcceptCertificateTransferRequest, callback?: (err: Iot.ResourceNotFoundException|Iot.TransferAlreadyCompletedException|Iot.InvalidRequestException|Iot.ThrottlingException|Iot.UnauthorizedException|Iot.ServiceUnavailableException|Iot.InternalFailureException|any, data: any) => void): Request;
    /**
     * Attaches the specified policy to the specified principal (certificate or other
credential).
     *
     * @error ResourceNotFoundException The specified resource does not exist.  
     * @error InvalidRequestException The request is not valid.  
     * @error ThrottlingException The rate exceeds the limit.  
     * @error UnauthorizedException You are not authorized to perform this operation.  
     * @error ServiceUnavailableException The service is temporarily unavailable.  
     * @error InternalFailureException An unexpected error has occurred.  
     * @error LimitExceededException The number of attached entities exceeds the limit.  
     */
    attachPrincipalPolicy(params: Iot.AttachPrincipalPolicyRequest, callback?: (err: Iot.ResourceNotFoundException|Iot.InvalidRequestException|Iot.ThrottlingException|Iot.UnauthorizedException|Iot.ServiceUnavailableException|Iot.InternalFailureException|Iot.LimitExceededException|any, data: any) => void): Request;
    /**
     * Attaches the specified principal to the specified thing.
     *
     * @error ResourceNotFoundException The specified resource does not exist.  
     * @error InvalidRequestException The request is not valid.  
     * @error ThrottlingException The rate exceeds the limit.  
     * @error UnauthorizedException You are not authorized to perform this operation.  
     * @error ServiceUnavailableException The service is temporarily unavailable.  
     * @error InternalFailureException An unexpected error has occurred.  
     */
    attachThingPrincipal(params: Iot.AttachThingPrincipalRequest, callback?: (err: Iot.ResourceNotFoundException|Iot.InvalidRequestException|Iot.ThrottlingException|Iot.UnauthorizedException|Iot.ServiceUnavailableException|Iot.InternalFailureException|any, data: Iot.AttachThingPrincipalResponse|any) => void): Request;
    /**
     * Cancels a pending transfer for the specified certificate.

Note Only the transfer source account can use this operation to cancel a
transfer. (Transfer destinations can use RejectCertificateTransfer instead.)
After transfer, AWS IoT returns the certificate to the source account in the
INACTIVE state. After the destination account has accepted the transfer, the
transfer cannot be cancelled.

After a certificate transfer is cancelled, the status of the certificate changes
from PENDING_TRANSFER to INACTIVE.
     *
     * @error ResourceNotFoundException The specified resource does not exist.  
     * @error TransferAlreadyCompletedException You can&#x27;t revert the certificate transfer because the transfer is already
complete.  
     * @error InvalidRequestException The request is not valid.  
     * @error ThrottlingException The rate exceeds the limit.  
     * @error UnauthorizedException You are not authorized to perform this operation.  
     * @error ServiceUnavailableException The service is temporarily unavailable.  
     * @error InternalFailureException An unexpected error has occurred.  
     */
    cancelCertificateTransfer(params: Iot.CancelCertificateTransferRequest, callback?: (err: Iot.ResourceNotFoundException|Iot.TransferAlreadyCompletedException|Iot.InvalidRequestException|Iot.ThrottlingException|Iot.UnauthorizedException|Iot.ServiceUnavailableException|Iot.InternalFailureException|any, data: any) => void): Request;
    /**
     * Creates an X.509 certificate using the specified certificate signing request.

Note Reusing the same certificate signing request (CSR) results in a distinct
certificate.

You can create multiple certificates in a batch by creating a directory, copying
multiple .csr files into that directory, and then specifying that directory on
the command line. The following commands show how to create a batch of
certificates given a batch of CSRs.

Assuming a set of CSRs are located inside of the directory my-csr-directory:

&gt;On Linux and OS X, the command is:

$ ls my-csr-directory/ | xargs -I {} aws iot create-certificate-from-csr
--certificate-signing-request file://my-csr-directory/{}

This command lists all of the CSRs in my-csr-directory and pipes each CSR file
name to the aws iot create-certificate-from-csr AWS CLI command to create a
certificate for the corresponding CSR.

The aws iot create-certificate-from-csr part of the command can also be run in
parallel to speed up the certificate creation process:

$ ls my-csr-directory/ | xargs -P 10 -I {} aws iot create-certificate-from-csr
--certificate-signing-request file://my-csr-directory/{}

On Windows PowerShell, the command to create certificates for all CSRs in
my-csr-directory is:

&gt; ls -Name my-csr-directory | %{aws iot create-certificate-from-csr
--certificate-signing-request file://my-csr-directory/$_}

On a Windows command prompt, the command to create certificates for all CSRs in
my-csr-directory is:

&gt; forfiles /p my-csr-directory /c &quot;cmd /c aws iot create-certificate-from-csr
--certificate-signing-request file://@path&quot;
     *
     * @error InvalidRequestException The request is not valid.  
     * @error ThrottlingException The rate exceeds the limit.  
     * @error UnauthorizedException You are not authorized to perform this operation.  
     * @error ServiceUnavailableException The service is temporarily unavailable.  
     * @error InternalFailureException An unexpected error has occurred.  
     */
    createCertificateFromCsr(params: Iot.CreateCertificateFromCsrRequest, callback?: (err: Iot.InvalidRequestException|Iot.ThrottlingException|Iot.UnauthorizedException|Iot.ServiceUnavailableException|Iot.InternalFailureException|any, data: Iot.CreateCertificateFromCsrResponse|any) => void): Request;
    /**
     * Creates a 2048-bit RSA key pair and issues an X.509 certificate using the issued
public key.

Note This is the only time AWS IoT issues the private key for this certificate,
so it is important to keep it in a secure location.
     *
     * @error InvalidRequestException The request is not valid.  
     * @error ThrottlingException The rate exceeds the limit.  
     * @error UnauthorizedException You are not authorized to perform this operation.  
     * @error ServiceUnavailableException The service is temporarily unavailable.  
     * @error InternalFailureException An unexpected error has occurred.  
     */
    createKeysAndCertificate(params: Iot.CreateKeysAndCertificateRequest, callback?: (err: Iot.InvalidRequestException|Iot.ThrottlingException|Iot.UnauthorizedException|Iot.ServiceUnavailableException|Iot.InternalFailureException|any, data: Iot.CreateKeysAndCertificateResponse|any) => void): Request;
    /**
     * Creates an AWS IoT policy.

The created policy is the default version for the policy. This operation creates
a policy version with a version identifier of 1 and sets 1 as the policy&#x27;s
default version.
     *
     * @error ResourceAlreadyExistsException The resource already exists.  
     * @error MalformedPolicyException The policy documentation is not valid.  
     * @error InvalidRequestException The request is not valid.  
     * @error ThrottlingException The rate exceeds the limit.  
     * @error UnauthorizedException You are not authorized to perform this operation.  
     * @error ServiceUnavailableException The service is temporarily unavailable.  
     * @error InternalFailureException An unexpected error has occurred.  
     */
    createPolicy(params: Iot.CreatePolicyRequest, callback?: (err: Iot.ResourceAlreadyExistsException|Iot.MalformedPolicyException|Iot.InvalidRequestException|Iot.ThrottlingException|Iot.UnauthorizedException|Iot.ServiceUnavailableException|Iot.InternalFailureException|any, data: Iot.CreatePolicyResponse|any) => void): Request;
    /**
     * Creates a new version of the specified AWS IoT policy. To update a policy,
create a new policy version. A managed policy can have up to five versions. If
the policy has five versions, you must use DeletePolicyVersion to delete an
existing version before you create a new one.

Optionally, you can set the new version as the policy&#x27;s default version. The
default version is the operative version (that is, the version that is in effect
for the certificates to which the policy is attached).
     *
     * @error ResourceNotFoundException The specified resource does not exist.  
     * @error MalformedPolicyException The policy documentation is not valid.  
     * @error VersionsLimitExceededException The number of policy versions exceeds the limit.  
     * @error InvalidRequestException The request is not valid.  
     * @error ThrottlingException The rate exceeds the limit.  
     * @error UnauthorizedException You are not authorized to perform this operation.  
     * @error ServiceUnavailableException The service is temporarily unavailable.  
     * @error InternalFailureException An unexpected error has occurred.  
     */
    createPolicyVersion(params: Iot.CreatePolicyVersionRequest, callback?: (err: Iot.ResourceNotFoundException|Iot.MalformedPolicyException|Iot.VersionsLimitExceededException|Iot.InvalidRequestException|Iot.ThrottlingException|Iot.UnauthorizedException|Iot.ServiceUnavailableException|Iot.InternalFailureException|any, data: Iot.CreatePolicyVersionResponse|any) => void): Request;
    /**
     * Creates a thing in the Thing Registry.
     *
     * @error InvalidRequestException The request is not valid.  
     * @error ThrottlingException The rate exceeds the limit.  
     * @error UnauthorizedException You are not authorized to perform this operation.  
     * @error ServiceUnavailableException The service is temporarily unavailable.  
     * @error InternalFailureException An unexpected error has occurred.  
     * @error ResourceAlreadyExistsException The resource already exists.  
     */
    createThing(params: Iot.CreateThingRequest, callback?: (err: Iot.InvalidRequestException|Iot.ThrottlingException|Iot.UnauthorizedException|Iot.ServiceUnavailableException|Iot.InternalFailureException|Iot.ResourceAlreadyExistsException|any, data: Iot.CreateThingResponse|any) => void): Request;
    /**
     * Creates a rule. Creating rules is an administrator-level action. Any user who
has permission to create rules will be able to access data processed by the
rule.
     *
     * @error SqlParseException The Rule-SQL expression can&#x27;t be parsed correctly.  
     * @error InternalException An unexpected error has occurred.  
     * @error InvalidRequestException The request is not valid.  
     * @error ResourceAlreadyExistsException The resource already exists.  
     * @error ServiceUnavailableException The service is temporarily unavailable.  
     */
    createTopicRule(params: Iot.CreateTopicRuleRequest, callback?: (err: Iot.SqlParseException|Iot.InternalException|Iot.InvalidRequestException|Iot.ResourceAlreadyExistsException|Iot.ServiceUnavailableException|any, data: any) => void): Request;
    /**
     * Deletes the specified certificate.

A certificate cannot be deleted if it has a policy attached to it or if its
status is set to ACTIVE. To delete a certificate, first use the 
DetachPrincipalPolicy API to detach all policies. Next, use the 
UpdateCertificate API to set the certificate to the INACTIVE status.
     *
     * @error DeleteConflictException You can&#x27;t delete the resource because it is attached to one or more resources.  
     * @error ResourceNotFoundException The specified resource does not exist.  
     * @error CertificateStateException The certificate operation is not allowed.  
     */
    deleteCertificate(params: Iot.DeleteCertificateRequest, callback?: (err: Iot.DeleteConflictException|Iot.ResourceNotFoundException|Iot.CertificateStateException|any, data: any) => void): Request;
    /**
     * Deletes the specified policy.

A policy cannot be deleted if it has non-default versions or it is attached to
any certificate.

To delete a policy, use the DeletePolicyVersion API to delete all non-default
versions of the policy; use the DetachPrincipalPolicy API to detach the policy
from any certificate; and then use the DeletePolicy API to delete the policy.

When a policy is deleted using DeletePolicy, its default version is deleted with
it.
     *
     * @error DeleteConflictException You can&#x27;t delete the resource because it is attached to one or more resources.  
     * @error ResourceNotFoundException The specified resource does not exist.  
     * @error InvalidRequestException The request is not valid.  
     * @error ThrottlingException The rate exceeds the limit.  
     * @error UnauthorizedException You are not authorized to perform this operation.  
     * @error ServiceUnavailableException The service is temporarily unavailable.  
     * @error InternalFailureException An unexpected error has occurred.  
     */
    deletePolicy(params: Iot.DeletePolicyRequest, callback?: (err: Iot.DeleteConflictException|Iot.ResourceNotFoundException|Iot.InvalidRequestException|Iot.ThrottlingException|Iot.UnauthorizedException|Iot.ServiceUnavailableException|Iot.InternalFailureException|any, data: any) => void): Request;
    /**
     * Deletes the specified version of the specified policy. You cannot delete the
default version of a policy using this API. To delete the default version of a
policy, use DeletePolicy . To find out which version of a policy is marked as
the default version, use ListPolicyVersions.
     *
     * @error DeleteConflictException You can&#x27;t delete the resource because it is attached to one or more resources.  
     * @error ResourceNotFoundException The specified resource does not exist.  
     * @error InvalidRequestException The request is not valid.  
     * @error ThrottlingException The rate exceeds the limit.  
     * @error UnauthorizedException You are not authorized to perform this operation.  
     * @error ServiceUnavailableException The service is temporarily unavailable.  
     * @error InternalFailureException An unexpected error has occurred.  
     */
    deletePolicyVersion(params: Iot.DeletePolicyVersionRequest, callback?: (err: Iot.DeleteConflictException|Iot.ResourceNotFoundException|Iot.InvalidRequestException|Iot.ThrottlingException|Iot.UnauthorizedException|Iot.ServiceUnavailableException|Iot.InternalFailureException|any, data: any) => void): Request;
    /**
     * Deletes the specified thing from the Thing Registry.
     *
     * @error ResourceNotFoundException The specified resource does not exist.  
     * @error InvalidRequestException The request is not valid.  
     * @error ThrottlingException The rate exceeds the limit.  
     * @error UnauthorizedException You are not authorized to perform this operation.  
     * @error ServiceUnavailableException The service is temporarily unavailable.  
     * @error InternalFailureException An unexpected error has occurred.  
     */
    deleteThing(params: Iot.DeleteThingRequest, callback?: (err: Iot.ResourceNotFoundException|Iot.InvalidRequestException|Iot.ThrottlingException|Iot.UnauthorizedException|Iot.ServiceUnavailableException|Iot.InternalFailureException|any, data: Iot.DeleteThingResponse|any) => void): Request;
    /**
     * Deletes the specified rule.
     *
     * @error InternalException An unexpected error has occurred.  
     * @error InvalidRequestException The request is not valid.  
     * @error ServiceUnavailableException The service is temporarily unavailable.  
     * @error UnauthorizedException You are not authorized to perform this operation.  
     */
    deleteTopicRule(params: Iot.DeleteTopicRuleRequest, callback?: (err: Iot.InternalException|Iot.InvalidRequestException|Iot.ServiceUnavailableException|Iot.UnauthorizedException|any, data: any) => void): Request;
    /**
     * Gets information about the specified certificate.
     *
     * @error InvalidRequestException The request is not valid.  
     * @error ThrottlingException The rate exceeds the limit.  
     * @error UnauthorizedException You are not authorized to perform this operation.  
     * @error ServiceUnavailableException The service is temporarily unavailable.  
     * @error InternalFailureException An unexpected error has occurred.  
     * @error ResourceNotFoundException The specified resource does not exist.  
     */
    describeCertificate(params: Iot.DescribeCertificateRequest, callback?: (err: Iot.InvalidRequestException|Iot.ThrottlingException|Iot.UnauthorizedException|Iot.ServiceUnavailableException|Iot.InternalFailureException|Iot.ResourceNotFoundException|any, data: Iot.DescribeCertificateResponse|any) => void): Request;
    /**
     * Returns a unique endpoint specific to the AWS account making the call. You
specify the following URI when updating state information for your thing:
https:// endpoint /things/ thingName /shadow.
     *
     * @error InternalFailureException An unexpected error has occurred.  
     * @error UnauthorizedException You are not authorized to perform this operation.  
     * @error ThrottlingException The rate exceeds the limit.  
     */
    describeEndpoint(params: Iot.DescribeEndpointRequest, callback?: (err: Iot.InternalFailureException|Iot.UnauthorizedException|Iot.ThrottlingException|any, data: Iot.DescribeEndpointResponse|any) => void): Request;
    /**
     * Gets information about the specified thing.
     *
     * @error ResourceNotFoundException The specified resource does not exist.  
     * @error InvalidRequestException The request is not valid.  
     * @error ThrottlingException The rate exceeds the limit.  
     * @error UnauthorizedException You are not authorized to perform this operation.  
     * @error ServiceUnavailableException The service is temporarily unavailable.  
     * @error InternalFailureException An unexpected error has occurred.  
     */
    describeThing(params: Iot.DescribeThingRequest, callback?: (err: Iot.ResourceNotFoundException|Iot.InvalidRequestException|Iot.ThrottlingException|Iot.UnauthorizedException|Iot.ServiceUnavailableException|Iot.InternalFailureException|any, data: Iot.DescribeThingResponse|any) => void): Request;
    /**
     * Removes the specified policy from the specified certificate.
     *
     * @error ResourceNotFoundException The specified resource does not exist.  
     * @error InvalidRequestException The request is not valid.  
     * @error ThrottlingException The rate exceeds the limit.  
     * @error UnauthorizedException You are not authorized to perform this operation.  
     * @error ServiceUnavailableException The service is temporarily unavailable.  
     * @error InternalFailureException An unexpected error has occurred.  
     */
    detachPrincipalPolicy(params: Iot.DetachPrincipalPolicyRequest, callback?: (err: Iot.ResourceNotFoundException|Iot.InvalidRequestException|Iot.ThrottlingException|Iot.UnauthorizedException|Iot.ServiceUnavailableException|Iot.InternalFailureException|any, data: any) => void): Request;
    /**
     * Detaches the specified principal from the specified thing.
     *
     * @error ResourceNotFoundException The specified resource does not exist.  
     * @error InvalidRequestException The request is not valid.  
     * @error ThrottlingException The rate exceeds the limit.  
     * @error UnauthorizedException You are not authorized to perform this operation.  
     * @error ServiceUnavailableException The service is temporarily unavailable.  
     * @error InternalFailureException An unexpected error has occurred.  
     */
    detachThingPrincipal(params: Iot.DetachThingPrincipalRequest, callback?: (err: Iot.ResourceNotFoundException|Iot.InvalidRequestException|Iot.ThrottlingException|Iot.UnauthorizedException|Iot.ServiceUnavailableException|Iot.InternalFailureException|any, data: Iot.DetachThingPrincipalResponse|any) => void): Request;
    /**
     * Disables the specified rule.
     *
     * @error InternalException An unexpected error has occurred.  
     * @error InvalidRequestException The request is not valid.  
     * @error ServiceUnavailableException The service is temporarily unavailable.  
     * @error UnauthorizedException You are not authorized to perform this operation.  
     */
    disableTopicRule(params: Iot.DisableTopicRuleRequest, callback?: (err: Iot.InternalException|Iot.InvalidRequestException|Iot.ServiceUnavailableException|Iot.UnauthorizedException|any, data: any) => void): Request;
    /**
     * Enables the specified rule.
     *
     * @error InternalException An unexpected error has occurred.  
     * @error InvalidRequestException The request is not valid.  
     * @error ServiceUnavailableException The service is temporarily unavailable.  
     * @error UnauthorizedException You are not authorized to perform this operation.  
     */
    enableTopicRule(params: Iot.EnableTopicRuleRequest, callback?: (err: Iot.InternalException|Iot.InvalidRequestException|Iot.ServiceUnavailableException|Iot.UnauthorizedException|any, data: any) => void): Request;
    /**
     * Gets the logging options.
     *
     * @error InternalException An unexpected error has occurred.  
     * @error InvalidRequestException The request is not valid.  
     * @error ServiceUnavailableException The service is temporarily unavailable.  
     */
    getLoggingOptions(params: Iot.GetLoggingOptionsRequest, callback?: (err: Iot.InternalException|Iot.InvalidRequestException|Iot.ServiceUnavailableException|any, data: Iot.GetLoggingOptionsResponse|any) => void): Request;
    /**
     * Gets information about the specified policy with the policy document of the
default version.
     *
     * @error ResourceNotFoundException The specified resource does not exist.  
     * @error InvalidRequestException The request is not valid.  
     * @error ThrottlingException The rate exceeds the limit.  
     * @error UnauthorizedException You are not authorized to perform this operation.  
     * @error ServiceUnavailableException The service is temporarily unavailable.  
     * @error InternalFailureException An unexpected error has occurred.  
     */
    getPolicy(params: Iot.GetPolicyRequest, callback?: (err: Iot.ResourceNotFoundException|Iot.InvalidRequestException|Iot.ThrottlingException|Iot.UnauthorizedException|Iot.ServiceUnavailableException|Iot.InternalFailureException|any, data: Iot.GetPolicyResponse|any) => void): Request;
    /**
     * Gets information about the specified policy version.
     *
     * @error ResourceNotFoundException The specified resource does not exist.  
     * @error InvalidRequestException The request is not valid.  
     * @error ThrottlingException The rate exceeds the limit.  
     * @error UnauthorizedException You are not authorized to perform this operation.  
     * @error ServiceUnavailableException The service is temporarily unavailable.  
     * @error InternalFailureException An unexpected error has occurred.  
     */
    getPolicyVersion(params: Iot.GetPolicyVersionRequest, callback?: (err: Iot.ResourceNotFoundException|Iot.InvalidRequestException|Iot.ThrottlingException|Iot.UnauthorizedException|Iot.ServiceUnavailableException|Iot.InternalFailureException|any, data: Iot.GetPolicyVersionResponse|any) => void): Request;
    /**
     * Gets information about the specified rule.
     *
     * @error InternalException An unexpected error has occurred.  
     * @error InvalidRequestException The request is not valid.  
     * @error ServiceUnavailableException The service is temporarily unavailable.  
     * @error UnauthorizedException You are not authorized to perform this operation.  
     */
    getTopicRule(params: Iot.GetTopicRuleRequest, callback?: (err: Iot.InternalException|Iot.InvalidRequestException|Iot.ServiceUnavailableException|Iot.UnauthorizedException|any, data: Iot.GetTopicRuleResponse|any) => void): Request;
    /**
     * Lists your certificates.

The results are paginated with a default page size of 25. You can use the
returned marker to retrieve additional results.
     *
     * @error InvalidRequestException The request is not valid.  
     * @error ThrottlingException The rate exceeds the limit.  
     * @error UnauthorizedException You are not authorized to perform this operation.  
     * @error ServiceUnavailableException The service is temporarily unavailable.  
     * @error InternalFailureException An unexpected error has occurred.  
     */
    listCertificates(params: Iot.ListCertificatesRequest, callback?: (err: Iot.InvalidRequestException|Iot.ThrottlingException|Iot.UnauthorizedException|Iot.ServiceUnavailableException|Iot.InternalFailureException|any, data: Iot.ListCertificatesResponse|any) => void): Request;
    /**
     * Lists your policies.
     *
     * @error InvalidRequestException The request is not valid.  
     * @error ThrottlingException The rate exceeds the limit.  
     * @error UnauthorizedException You are not authorized to perform this operation.  
     * @error ServiceUnavailableException The service is temporarily unavailable.  
     * @error InternalFailureException An unexpected error has occurred.  
     */
    listPolicies(params: Iot.ListPoliciesRequest, callback?: (err: Iot.InvalidRequestException|Iot.ThrottlingException|Iot.UnauthorizedException|Iot.ServiceUnavailableException|Iot.InternalFailureException|any, data: Iot.ListPoliciesResponse|any) => void): Request;
    /**
     * Lists the versions of the specified policy, and identifies the default version.
     *
     * @error ResourceNotFoundException The specified resource does not exist.  
     * @error InvalidRequestException The request is not valid.  
     * @error ThrottlingException The rate exceeds the limit.  
     * @error UnauthorizedException You are not authorized to perform this operation.  
     * @error ServiceUnavailableException The service is temporarily unavailable.  
     * @error InternalFailureException An unexpected error has occurred.  
     */
    listPolicyVersions(params: Iot.ListPolicyVersionsRequest, callback?: (err: Iot.ResourceNotFoundException|Iot.InvalidRequestException|Iot.ThrottlingException|Iot.UnauthorizedException|Iot.ServiceUnavailableException|Iot.InternalFailureException|any, data: Iot.ListPolicyVersionsResponse|any) => void): Request;
    /**
     * Lists the policies attached to the specified principal. If you use an Cognito
identity, the ID must be in AmazonCognito Identity format
[http://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_GetCredentialsForIdentity.html#API_GetCredentialsForIdentity_RequestSyntax] 
.
     *
     * @error ResourceNotFoundException The specified resource does not exist.  
     * @error InvalidRequestException The request is not valid.  
     * @error ThrottlingException The rate exceeds the limit.  
     * @error UnauthorizedException You are not authorized to perform this operation.  
     * @error ServiceUnavailableException The service is temporarily unavailable.  
     * @error InternalFailureException An unexpected error has occurred.  
     */
    listPrincipalPolicies(params: Iot.ListPrincipalPoliciesRequest, callback?: (err: Iot.ResourceNotFoundException|Iot.InvalidRequestException|Iot.ThrottlingException|Iot.UnauthorizedException|Iot.ServiceUnavailableException|Iot.InternalFailureException|any, data: Iot.ListPrincipalPoliciesResponse|any) => void): Request;
    /**
     * Lists the things associated with the specified principal.
     *
     * @error InvalidRequestException The request is not valid.  
     * @error ThrottlingException The rate exceeds the limit.  
     * @error UnauthorizedException You are not authorized to perform this operation.  
     * @error ServiceUnavailableException The service is temporarily unavailable.  
     * @error InternalFailureException An unexpected error has occurred.  
     */
    listPrincipalThings(params: Iot.ListPrincipalThingsRequest, callback?: (err: Iot.InvalidRequestException|Iot.ThrottlingException|Iot.UnauthorizedException|Iot.ServiceUnavailableException|Iot.InternalFailureException|any, data: Iot.ListPrincipalThingsResponse|any) => void): Request;
    /**
     * Lists the principals associated with the specified thing.
     *
     * @error InvalidRequestException The request is not valid.  
     * @error ThrottlingException The rate exceeds the limit.  
     * @error UnauthorizedException You are not authorized to perform this operation.  
     * @error ServiceUnavailableException The service is temporarily unavailable.  
     * @error InternalFailureException An unexpected error has occurred.  
     */
    listThingPrincipals(params: Iot.ListThingPrincipalsRequest, callback?: (err: Iot.InvalidRequestException|Iot.ThrottlingException|Iot.UnauthorizedException|Iot.ServiceUnavailableException|Iot.InternalFailureException|any, data: Iot.ListThingPrincipalsResponse|any) => void): Request;
    /**
     * Lists your things. You can pass an AttributeName or AttributeValue to filter
your things (for example, &quot;ListThings where AttributeName=Color and
AttributeValue=Red&quot;).
     *
     * @error InvalidRequestException The request is not valid.  
     * @error ThrottlingException The rate exceeds the limit.  
     * @error UnauthorizedException You are not authorized to perform this operation.  
     * @error ServiceUnavailableException The service is temporarily unavailable.  
     * @error InternalFailureException An unexpected error has occurred.  
     */
    listThings(params: Iot.ListThingsRequest, callback?: (err: Iot.InvalidRequestException|Iot.ThrottlingException|Iot.UnauthorizedException|Iot.ServiceUnavailableException|Iot.InternalFailureException|any, data: Iot.ListThingsResponse|any) => void): Request;
    /**
     * Lists the rules for the specific topic.
     *
     * @error InternalException An unexpected error has occurred.  
     * @error InvalidRequestException The request is not valid.  
     * @error ServiceUnavailableException The service is temporarily unavailable.  
     */
    listTopicRules(params: Iot.ListTopicRulesRequest, callback?: (err: Iot.InternalException|Iot.InvalidRequestException|Iot.ServiceUnavailableException|any, data: Iot.ListTopicRulesResponse|any) => void): Request;
    /**
     * Rejects a pending certificate transfer. After AWS IoT rejects a certificate
transfer, the certificate status changes from PENDING_TRANFER to INACTIVE .

To check for pending certificate transfers, call ListCertificates to enumerate
your certificates.

This operation can only be called by the transfer destination. After it is
called, the certificate will be returned to the source&#x27;s account in the INACTIVE
state.
     *
     * @error ResourceNotFoundException The specified resource does not exist.  
     * @error TransferAlreadyCompletedException You can&#x27;t revert the certificate transfer because the transfer is already
complete.  
     * @error InvalidRequestException The request is not valid.  
     * @error ThrottlingException The rate exceeds the limit.  
     * @error UnauthorizedException You are not authorized to perform this operation.  
     * @error ServiceUnavailableException The service is temporarily unavailable.  
     * @error InternalFailureException An unexpected error has occurred.  
     */
    rejectCertificateTransfer(params: Iot.RejectCertificateTransferRequest, callback?: (err: Iot.ResourceNotFoundException|Iot.TransferAlreadyCompletedException|Iot.InvalidRequestException|Iot.ThrottlingException|Iot.UnauthorizedException|Iot.ServiceUnavailableException|Iot.InternalFailureException|any, data: any) => void): Request;
    /**
     * Replaces the specified rule. You must specify all parameters for the new rule.
Creating rules is an administrator-level action. Any user who has permission to
create rules will be able to access data processed by the rule.
     *
     * @error SqlParseException The Rule-SQL expression can&#x27;t be parsed correctly.  
     * @error InternalException An unexpected error has occurred.  
     * @error InvalidRequestException The request is not valid.  
     * @error ServiceUnavailableException The service is temporarily unavailable.  
     * @error UnauthorizedException You are not authorized to perform this operation.  
     */
    replaceTopicRule(params: Iot.ReplaceTopicRuleRequest, callback?: (err: Iot.SqlParseException|Iot.InternalException|Iot.InvalidRequestException|Iot.ServiceUnavailableException|Iot.UnauthorizedException|any, data: any) => void): Request;
    /**
     * Sets the specified version of the specified policy as the policy&#x27;s default
(operative) version. This action affects all certificates to which the policy is
attached. To list the principals the policy is attached to, use the
ListPrincipalPolicy API.
     *
     * @error ResourceNotFoundException The specified resource does not exist.  
     * @error InvalidRequestException The request is not valid.  
     * @error ThrottlingException The rate exceeds the limit.  
     * @error UnauthorizedException You are not authorized to perform this operation.  
     * @error ServiceUnavailableException The service is temporarily unavailable.  
     * @error InternalFailureException An unexpected error has occurred.  
     */
    setDefaultPolicyVersion(params: Iot.SetDefaultPolicyVersionRequest, callback?: (err: Iot.ResourceNotFoundException|Iot.InvalidRequestException|Iot.ThrottlingException|Iot.UnauthorizedException|Iot.ServiceUnavailableException|Iot.InternalFailureException|any, data: any) => void): Request;
    /**
     * Sets the logging options.
     *
     * @error InternalException An unexpected error has occurred.  
     * @error InvalidRequestException The request is not valid.  
     * @error ServiceUnavailableException The service is temporarily unavailable.  
     */
    setLoggingOptions(params: Iot.SetLoggingOptionsRequest, callback?: (err: Iot.InternalException|Iot.InvalidRequestException|Iot.ServiceUnavailableException|any, data: any) => void): Request;
    /**
     * Transfers the specified certificate to the specified AWS account.

You can cancel the transfer until it is acknowledged by the recipient.

No notification is sent to the transfer destination&#x27;s account. It is up to the
caller to notify the transfer target.

The certificate being transferred must not be in the ACTIVE state. You can use
the UpdateCertificate API to deactivate it.

The certificate must not have any policies attached to it. You can use the
DetachPrincipalPolicy API to detach them.
     *
     * @error InvalidRequestException The request is not valid.  
     * @error ResourceNotFoundException The specified resource does not exist.  
     * @error CertificateStateException The certificate operation is not allowed.  
     * @error TransferConflictException You can&#x27;t transfer the certificate because authorization policies are still
attached.  
     * @error ThrottlingException The rate exceeds the limit.  
     * @error UnauthorizedException You are not authorized to perform this operation.  
     * @error ServiceUnavailableException The service is temporarily unavailable.  
     * @error InternalFailureException An unexpected error has occurred.  
     */
    transferCertificate(params: Iot.TransferCertificateRequest, callback?: (err: Iot.InvalidRequestException|Iot.ResourceNotFoundException|Iot.CertificateStateException|Iot.TransferConflictException|Iot.ThrottlingException|Iot.UnauthorizedException|Iot.ServiceUnavailableException|Iot.InternalFailureException|any, data: Iot.TransferCertificateResponse|any) => void): Request;
    /**
     * Updates the status of the specified certificate. This operation is idempotent.

Moving a certificate from the ACTIVE state (including REVOKED) will not
disconnect currently connected devices, but these devices will be unable to
reconnect.

The ACTIVE state is required to authenticate devices connecting to AWS IoT using
a certificate.
     *
     * @error ResourceNotFoundException The specified resource does not exist.  
     * @error CertificateStateException The certificate operation is not allowed.  
     * @error InvalidRequestException The request is not valid.  
     * @error ThrottlingException The rate exceeds the limit.  
     * @error UnauthorizedException You are not authorized to perform this operation.  
     * @error ServiceUnavailableException The service is temporarily unavailable.  
     * @error InternalFailureException An unexpected error has occurred.  
     */
    updateCertificate(params: Iot.UpdateCertificateRequest, callback?: (err: Iot.ResourceNotFoundException|Iot.CertificateStateException|Iot.InvalidRequestException|Iot.ThrottlingException|Iot.UnauthorizedException|Iot.ServiceUnavailableException|Iot.InternalFailureException|any, data: any) => void): Request;
    /**
     * Updates the data for a thing.
     *
     * @error InvalidRequestException The request is not valid.  
     * @error ThrottlingException The rate exceeds the limit.  
     * @error UnauthorizedException You are not authorized to perform this operation.  
     * @error ServiceUnavailableException The service is temporarily unavailable.  
     * @error InternalFailureException An unexpected error has occurred.  
     * @error ResourceNotFoundException The specified resource does not exist.  
     */
    updateThing(params: Iot.UpdateThingRequest, callback?: (err: Iot.InvalidRequestException|Iot.ThrottlingException|Iot.UnauthorizedException|Iot.ServiceUnavailableException|Iot.InternalFailureException|Iot.ResourceNotFoundException|any, data: Iot.UpdateThingResponse|any) => void): Request;

  }

  export module Iot {
    
    export type ActionList = Action[];
    
    export type AlarmName = string;
    
    export type AscendingOrder = boolean;
    
    export type AttributeName = string;
    
    export type AttributeValue = string;
    
    export type Attributes = {[key:string]: AttributeValue};
    
    export type AwsAccountId = string;
    
    export type AwsArn = string;
    
    export type BucketName = string;
    
    export type CertificateArn = string;
    
    export type CertificateId = string;
    
    export type CertificatePem = string;
    
    export type CertificateSigningRequest = string;
    
    export type CertificateStatus = string;
    
    export type Certificates = Certificate[];
    
    export type ClientId = string;
    
    export type CreatedAtDate = number;
    
    export type DateType = number;
    
    export type DeliveryStreamName = string;
    
    export type Description = string;
    
    export type ElasticsearchEndpoint = string;
    
    export type ElasticsearchId = string;
    
    export type ElasticsearchIndex = string;
    
    export type ElasticsearchType = string;
    
    export type EndpointAddress = string;
    
    export type FunctionArn = string;
    
    export type HashKeyField = string;
    
    export type HashKeyValue = string;
    
    export type IsDefaultVersion = boolean;
    
    export type IsDisabled = boolean;
    
    export type Key = string;
    
    export type LogLevel = string;
    
    export type Marker = string;
    
    export type MaxResults = number;
    
    export type MessageFormat = string;
    
    export type MetricName = string;
    
    export type MetricNamespace = string;
    
    export type MetricTimestamp = string;
    
    export type MetricUnit = string;
    
    export type MetricValue = string;
    
    export type NextToken = string;
    
    export type PageSize = number;
    
    export type PartitionKey = string;
    
    export type PayloadField = string;
    
    export type Policies = Policy[];
    
    export type PolicyArn = string;
    
    export type PolicyDocument = string;
    
    export type PolicyName = string;
    
    export type PolicyVersionId = string;
    
    export type PolicyVersions = PolicyVersion[];
    
    export type Principal = string;
    
    export type PrincipalArn = string;
    
    export type Principals = PrincipalArn[];
    
    export type PrivateKey = string;
    
    export type PublicKey = string;
    
    export type QueueUrl = string;
    
    export type RangeKeyField = string;
    
    export type RangeKeyValue = string;
    
    export type RuleArn = string;
    
    export type RuleName = string;
    
    export type SQL = string;
    
    export type SetAsActive = boolean;
    
    export type SetAsDefault = boolean;
    
    export type StateReason = string;
    
    export type StateValue = string;
    
    export type StreamName = string;
    
    export type TableName = string;
    
    export type ThingArn = string;
    
    export type ThingAttributeList = ThingAttribute[];
    
    export type ThingName = string;
    
    export type ThingNameList = ThingName[];
    
    export type Topic = string;
    
    export type TopicPattern = string;
    
    export type TopicRuleList = TopicRuleListItem[];
    
    export type UseBase64 = boolean;
    
    export type errorMessage = string;

    export interface AcceptCertificateTransferRequest {
        /** The ID of the certificate. **/
        certificateId: CertificateId;
        /** Specifies whether the certificate is active. **/
        setAsActive?: SetAsActive;
    }
    export interface Action {
        /** Write to a DynamoDB table. **/
        dynamoDB?: DynamoDBAction;
        /** Invoke a Lambda function. **/
        lambda?: LambdaAction;
        /** Publish to an Amazon SNS topic. **/
        sns?: SnsAction;
        /** Publish to an Amazon SQS queue. **/
        sqs?: SqsAction;
        /** Write data to an Amazon Kinesis stream. **/
        kinesis?: KinesisAction;
        /** Publish to another MQTT topic. **/
        republish?: RepublishAction;
        /** Write to an Amazon S3 bucket. **/
        s3?: S3Action;
        /** Write to an Amazon Kinesis Firehose stream. **/
        firehose?: FirehoseAction;
        /** Capture a CloudWatch metric. **/
        cloudwatchMetric?: CloudwatchMetricAction;
        /** Change the state of a CloudWatch alarm. **/
        cloudwatchAlarm?: CloudwatchAlarmAction;
        /** Write data to an Amazon Elasticsearch Service; domain. **/
        elasticsearch?: ElasticsearchAction;
    }
    export interface AttachPrincipalPolicyRequest {
        /** The policy name. **/
        policyName: PolicyName;
        /** The principal, which can be a certificate ARN (as returned from the
CreateCertificate operation) or an Amazon Cognito ID. **/
        principal: Principal;
    }
    export interface AttachThingPrincipalRequest {
        /** The name of the thing. **/
        thingName: ThingName;
        /** The principal (certificate or other credential). **/
        principal: Principal;
    }
    export interface AttachThingPrincipalResponse {
    }
    export interface AttributePayload {
        /** A JSON string containing up to three key-value pair in JSON format (for example,
{\&quot;attributes\&quot;:{\&quot;string1\&quot;:\&quot;string2\&quot;}}). **/
        attributes?: Attributes;
    }
    export interface CancelCertificateTransferRequest {
        /** The ID of the certificate. **/
        certificateId: CertificateId;
    }
    export interface Certificate {
        /** The ARN of the certificate. **/
        certificateArn?: CertificateArn;
        /** The ID of the certificate. **/
        certificateId?: CertificateId;
        /** The status of the certificate. **/
        status?: CertificateStatus;
        /** The date and time the certificate was created. **/
        creationDate?: DateType;
    }
    export interface CertificateDescription {
        /** The ARN of the certificate. **/
        certificateArn?: CertificateArn;
        /** The ID of the certificate. **/
        certificateId?: CertificateId;
        /** The status of the certificate. **/
        status?: CertificateStatus;
        /** The certificate data, in PEM format. **/
        certificatePem?: CertificatePem;
        /** The ID of the AWS account that owns the certificate. **/
        ownedBy?: AwsAccountId;
        /** The date and time the certificate was created. **/
        creationDate?: DateType;
        /** The date and time the certificate was last modified. **/
        lastModifiedDate?: DateType;
    }
    export interface CertificateStateException {
        /** The message for the exception. **/
        message?: errorMessage;
    }
    export interface CloudwatchAlarmAction {
        /** The IAM role that allows access to the CloudWatch alarm. **/
        roleArn: AwsArn;
        /** The CloudWatch alarm name. **/
        alarmName: AlarmName;
        /** The reason for the alarm change. **/
        stateReason: StateReason;
        /** The value of the alarm state. Acceptable values are: OK, ALARM,
INSUFFICIENT_DATA. **/
        stateValue: StateValue;
    }
    export interface CloudwatchMetricAction {
        /** The IAM role that allows access to the CloudWatch metric. **/
        roleArn: AwsArn;
        /** The CloudWatch metric namespace name. **/
        metricNamespace: MetricNamespace;
        /** The CloudWatch metric name. **/
        metricName: MetricName;
        /** The CloudWatch metric value. **/
        metricValue: MetricValue;
        /** The metric unit
[http://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/cloudwatch_concepts.html#Unit] 
supported by CloudWatch. **/
        metricUnit: MetricUnit;
        /** An optional Unix timestamp
[http://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/cloudwatch_concepts.html#about_timestamp] 
. **/
        metricTimestamp?: MetricTimestamp;
    }
    export interface CreateCertificateFromCsrRequest {
        /** The certificate signing request (CSR). **/
        certificateSigningRequest: CertificateSigningRequest;
        /** Specifies whether the certificate is active. **/
        setAsActive?: SetAsActive;
    }
    export interface CreateCertificateFromCsrResponse {
        /** The Amazon Resource Name (ARN) of the certificate. You can use the ARN as a
principal for policy operations. **/
        certificateArn?: CertificateArn;
        /** The ID of the certificate. Certificate management operations only take a
certificateId. **/
        certificateId?: CertificateId;
        /** The certificate data, in PEM format. **/
        certificatePem?: CertificatePem;
    }
    export interface CreateKeysAndCertificateRequest {
        /** Specifies whether the certificate is active. **/
        setAsActive?: SetAsActive;
    }
    export interface CreateKeysAndCertificateResponse {
        /** The ARN of the certificate. **/
        certificateArn?: CertificateArn;
        /** The ID of the certificate. AWS IoT issues a default subject name for the
certificate (for example, AWS IoT Certificate). **/
        certificateId?: CertificateId;
        /** The certificate data, in PEM format. **/
        certificatePem?: CertificatePem;
        /** The generated key pair. **/
        keyPair?: KeyPair;
    }
    export interface CreatePolicyRequest {
        /** The policy name. **/
        policyName: PolicyName;
        /** The JSON document that describes the policy. policyDocument must have a minimum
length of 1, with a maximum length of 2048, excluding whitespace. **/
        policyDocument: PolicyDocument;
    }
    export interface CreatePolicyResponse {
        /** The policy name. **/
        policyName?: PolicyName;
        /** The policy ARN. **/
        policyArn?: PolicyArn;
        /** The JSON document that describes the policy. **/
        policyDocument?: PolicyDocument;
        /** The policy version ID. **/
        policyVersionId?: PolicyVersionId;
    }
    export interface CreatePolicyVersionRequest {
        /** The policy name. **/
        policyName: PolicyName;
        /** The JSON document that describes the policy. Minimum length of 1. Maximum length
of 2048, excluding whitespaces **/
        policyDocument: PolicyDocument;
        /** Specifies whether the policy version is set as the default. When this parameter
is true, the new policy version becomes the operative version (that is, the
version that is in effect for the certificates to which the policy is attached). **/
        setAsDefault?: SetAsDefault;
    }
    export interface CreatePolicyVersionResponse {
        /** The policy ARN. **/
        policyArn?: PolicyArn;
        /** The JSON document that describes the policy. **/
        policyDocument?: PolicyDocument;
        /** The policy version ID. **/
        policyVersionId?: PolicyVersionId;
        /** Specifies whether the policy version is the default. **/
        isDefaultVersion?: IsDefaultVersion;
    }
    export interface CreateThingRequest {
        /** The name of the thing. **/
        thingName: ThingName;
        /** The attribute payload, which consists of up to 3 name/value pairs in a JSON
document (for example, {\&quot;attributes\&quot;:{\&quot;string1\&quot;:\&quot;string2\&quot;}}). **/
        attributePayload?: AttributePayload;
    }
    export interface CreateThingResponse {
        /** The name of the thing. **/
        thingName?: ThingName;
        /** The thing ARN. **/
        thingArn?: ThingArn;
    }
    export interface CreateTopicRuleRequest {
        /** The name of the rule. **/
        ruleName: RuleName;
        /** The rule payload. **/
        topicRulePayload: TopicRulePayload;
    }
    export interface DeleteCertificateRequest {
        /** The ID of the certificate. **/
        certificateId: CertificateId;
    }
    export interface DeleteConflictException {
        /** The message for the exception. **/
        message?: errorMessage;
    }
    export interface DeletePolicyRequest {
        /** The name of the policy to delete. **/
        policyName: PolicyName;
    }
    export interface DeletePolicyVersionRequest {
        /** The name of the policy. **/
        policyName: PolicyName;
        /** The policy version ID. **/
        policyVersionId: PolicyVersionId;
    }
    export interface DeleteThingRequest {
        /** The thing name. **/
        thingName: ThingName;
    }
    export interface DeleteThingResponse {
    }
    export interface DeleteTopicRuleRequest {
        /** The name of the rule. **/
        ruleName: RuleName;
    }
    export interface DescribeCertificateRequest {
        /** The ID of the certificate. **/
        certificateId: CertificateId;
    }
    export interface DescribeCertificateResponse {
        /** The description of the certificate. **/
        certificateDescription?: CertificateDescription;
    }
    export interface DescribeEndpointRequest {
    }
    export interface DescribeEndpointResponse {
        /** The endpoint. The format of the endpoint is as follows: identifier .iot. region 
.amazonaws.com. **/
        endpointAddress?: EndpointAddress;
    }
    export interface DescribeThingRequest {
        /** The name of the thing. **/
        thingName: ThingName;
    }
    export interface DescribeThingResponse {
        /** The default client ID. **/
        defaultClientId?: ClientId;
        /** The name of the thing. **/
        thingName?: ThingName;
        /** The attributes, which are name/value pairs in JSON format (for example:
{\&quot;attributes\&quot;:{\&quot;some-name1\&quot;:\&quot;some-value1\&quot;},
{\&quot;some-name2\&quot;:\&quot;some-value2\&quot;}, {\&quot;some-name3\&quot;:\&quot;some-value3\&quot;}}) **/
        attributes?: Attributes;
    }
    export interface DetachPrincipalPolicyRequest {
        /** The name of the policy to detach. **/
        policyName: PolicyName;
        /** The principal.

If the principal is a certificate, specify the certificate ARN. If the principal
is an Amazon Cognito identity, specify the identity ID. **/
        principal: Principal;
    }
    export interface DetachThingPrincipalRequest {
        /** The name of the thing. **/
        thingName: ThingName;
        /** The principal. **/
        principal: Principal;
    }
    export interface DetachThingPrincipalResponse {
    }
    export interface DisableTopicRuleRequest {
        /** The name of the rule to disable. **/
        ruleName: RuleName;
    }
    export interface DynamoDBAction {
        /** The name of the DynamoDB table. **/
        tableName: TableName;
        /** The ARN of the IAM role that grants access to the DynamoDB table. **/
        roleArn: AwsArn;
        /** The hash key name. **/
        hashKeyField: HashKeyField;
        /** The hash key value. **/
        hashKeyValue: HashKeyValue;
        /** The range key name. **/
        rangeKeyField: RangeKeyField;
        /** The range key value. **/
        rangeKeyValue: RangeKeyValue;
        /** The action payload. This name can be customized. **/
        payloadField?: PayloadField;
    }
    export interface ElasticsearchAction {
        /** The IAM role ARN that has access to Elasticsearch. **/
        roleArn: AwsArn;
        /** The endpoint of your Elasticsearch domain. **/
        endpoint: ElasticsearchEndpoint;
        /** The Elasticsearch index where you want to store your data. **/
        index: ElasticsearchIndex;
        /** The type of document you are storing. **/
        type: ElasticsearchType;
        /** The unique identifier for the document you are storing. **/
        id: ElasticsearchId;
    }
    export interface EnableTopicRuleRequest {
        /** The name of the topic rule to enable. **/
        ruleName: RuleName;
    }
    export interface FirehoseAction {
        /** The IAM role that grants access to the Amazon Kinesis Firehost stream. **/
        roleArn: AwsArn;
        /** The delivery stream name. **/
        deliveryStreamName: DeliveryStreamName;
    }
    export interface GetLoggingOptionsRequest {
    }
    export interface GetLoggingOptionsResponse {
        /** The ARN of the IAM role that grants access. **/
        roleArn?: AwsArn;
        /** The logging level. **/
        logLevel?: LogLevel;
    }
    export interface GetPolicyRequest {
        /** The name of the policy. **/
        policyName: PolicyName;
    }
    export interface GetPolicyResponse {
        /** The policy name. **/
        policyName?: PolicyName;
        /** The policy ARN. **/
        policyArn?: PolicyArn;
        /** The JSON document that describes the policy. **/
        policyDocument?: PolicyDocument;
        /** The default policy version ID. **/
        defaultVersionId?: PolicyVersionId;
    }
    export interface GetPolicyVersionRequest {
        /** The name of the policy. **/
        policyName: PolicyName;
        /** The policy version ID. **/
        policyVersionId: PolicyVersionId;
    }
    export interface GetPolicyVersionResponse {
        /** The policy ARN. **/
        policyArn?: PolicyArn;
        /** The policy name. **/
        policyName?: PolicyName;
        /** The JSON document that describes the policy. **/
        policyDocument?: PolicyDocument;
        /** The policy version ID. **/
        policyVersionId?: PolicyVersionId;
        /** Specifies whether the policy version is the default. **/
        isDefaultVersion?: IsDefaultVersion;
    }
    export interface GetTopicRuleRequest {
        /** The name of the rule. **/
        ruleName: RuleName;
    }
    export interface GetTopicRuleResponse {
        /** The rule ARN. **/
        ruleArn?: RuleArn;
        /** The rule. **/
        rule?: TopicRule;
    }
    export interface InternalException {
        /** The message for the exception. **/
        message?: errorMessage;
    }
    export interface InternalFailureException {
        /** The message for the exception. **/
        message?: errorMessage;
    }
    export interface InvalidRequestException {
        /** The message for the exception. **/
        message?: errorMessage;
    }
    export interface KeyPair {
        /** The public key. **/
        PublicKey?: PublicKey;
        /** The private key. **/
        PrivateKey?: PrivateKey;
    }
    export interface KinesisAction {
        /** The ARN of the IAM role that grants access to the Amazon Kinesis stream. **/
        roleArn: AwsArn;
        /** The name of the Amazon Kinesis stream. **/
        streamName: StreamName;
        /** The partition key. **/
        partitionKey?: PartitionKey;
    }
    export interface LambdaAction {
        /** The ARN of the Lambda function. **/
        functionArn: FunctionArn;
    }
    export interface LimitExceededException {
        /** The message for the exception. **/
        message?: errorMessage;
    }
    export interface ListCertificatesRequest {
        /** The result page size. **/
        pageSize?: PageSize;
        /** The marker for the next set of results. **/
        marker?: Marker;
        /** Specifies the order for results. If True, the results are returned in ascending
order, based on the creation date. **/
        ascendingOrder?: AscendingOrder;
    }
    export interface ListCertificatesResponse {
        /** The descriptions of the certificates. **/
        certificates?: Certificates;
        /** The marker for the next set of results, or null if there are no additional
results. **/
        nextMarker?: Marker;
    }
    export interface ListPoliciesRequest {
        /** The marker for the next set of results. **/
        marker?: Marker;
        /** The result page size. **/
        pageSize?: PageSize;
        /** Specifies the order for results. If true, the results are returned in ascending
creation order. **/
        ascendingOrder?: AscendingOrder;
    }
    export interface ListPoliciesResponse {
        /** The descriptions of the policies. **/
        policies?: Policies;
        /** The marker for the next set of results, or null if there are no additional
results. **/
        nextMarker?: Marker;
    }
    export interface ListPolicyVersionsRequest {
        /** The policy name. **/
        policyName: PolicyName;
    }
    export interface ListPolicyVersionsResponse {
        /** The policy versions. **/
        policyVersions?: PolicyVersions;
    }
    export interface ListPrincipalPoliciesRequest {
        /** The principal. **/
        principal: Principal;
        /** The marker for the next set of results. **/
        marker?: Marker;
        /** The result page size. **/
        pageSize?: PageSize;
        /** Specifies the order for results. If true, results are returned in ascending
creation order. **/
        ascendingOrder?: AscendingOrder;
    }
    export interface ListPrincipalPoliciesResponse {
        /** The policies. **/
        policies?: Policies;
        /** The marker for the next set of results, or null if there are no additional
results. **/
        nextMarker?: Marker;
    }
    export interface ListPrincipalThingsRequest {
        /** A token used to retrieve the next value. **/
        nextToken?: NextToken;
        /** The maximum number of principals to return. **/
        maxResults?: MaxResults;
        /** The principal. **/
        principal: Principal;
    }
    export interface ListPrincipalThingsResponse {
        /** The things. **/
        things?: ThingNameList;
        /** A token used to retrieve the next value. **/
        nextToken?: NextToken;
    }
    export interface ListThingPrincipalsRequest {
        /** The name of the thing. **/
        thingName: ThingName;
    }
    export interface ListThingPrincipalsResponse {
        /** The principals. **/
        principals?: Principals;
    }
    export interface ListThingsRequest {
        /** The token for the next value. **/
        nextToken?: NextToken;
        /** The maximum number of results. **/
        maxResults?: MaxResults;
        /** The attribute name. **/
        attributeName?: AttributeName;
        /** The attribute value. **/
        attributeValue?: AttributeValue;
    }
    export interface ListThingsResponse {
        /** The things. **/
        things?: ThingAttributeList;
        /** A token used to retrieve the next value. **/
        nextToken?: NextToken;
    }
    export interface ListTopicRulesRequest {
        /** The topic. **/
        topic?: Topic;
        /** The maximum number of results to return. **/
        maxResults?: MaxResults;
        /** A token used to retrieve the next value. **/
        nextToken?: NextToken;
        /** Specifies whether the rule is disabled. **/
        ruleDisabled?: IsDisabled;
    }
    export interface ListTopicRulesResponse {
        /** The rules. **/
        rules?: TopicRuleList;
        /** A token used to retrieve the next value. **/
        nextToken?: NextToken;
    }
    export interface LoggingOptionsPayload {
        /** The ARN of the IAM role that grants access. **/
        roleArn: AwsArn;
        /** The logging level. **/
        logLevel?: LogLevel;
    }
    export interface MalformedPolicyException {
        /** The message for the exception. **/
        message?: errorMessage;
    }
    export interface Policy {
        /** The policy name. **/
        policyName?: PolicyName;
        /** The policy ARN. **/
        policyArn?: PolicyArn;
    }
    export interface PolicyVersion {
        /** The policy version ID. **/
        versionId?: PolicyVersionId;
        /** Specifies whether the policy version is the default. **/
        isDefaultVersion?: IsDefaultVersion;
        /** The date and time the policy was created. **/
        createDate?: DateType;
    }
    export interface RejectCertificateTransferRequest {
        /** The ID of the certificate. **/
        certificateId: CertificateId;
    }
    export interface ReplaceTopicRuleRequest {
        /** The name of the rule. **/
        ruleName: RuleName;
        /** The rule payload. **/
        topicRulePayload: TopicRulePayload;
    }
    export interface RepublishAction {
        /** The ARN of the IAM role that grants access. **/
        roleArn: AwsArn;
        /** The name of the MQTT topic. **/
        topic: TopicPattern;
    }
    export interface ResourceAlreadyExistsException {
        /** The message for the exception. **/
        message?: errorMessage;
    }
    export interface ResourceNotFoundException {
        /** The message for the exception. **/
        message?: errorMessage;
    }
    export interface S3Action {
        /** The ARN of the IAM role that grants access. **/
        roleArn: AwsArn;
        /** The Amazon S3 bucket. **/
        bucketName: BucketName;
        /** The object key. **/
        key: Key;
    }
    export interface ServiceUnavailableException {
        /** The message for the exception. **/
        message?: errorMessage;
    }
    export interface SetDefaultPolicyVersionRequest {
        /** The policy name. **/
        policyName: PolicyName;
        /** The policy version ID. **/
        policyVersionId: PolicyVersionId;
    }
    export interface SetLoggingOptionsRequest {
        /** The logging options payload. **/
        loggingOptionsPayload: LoggingOptionsPayload;
    }
    export interface SnsAction {
        /** The ARN of the SNS topic. **/
        targetArn: AwsArn;
        /** The ARN of the IAM role that grants access. **/
        roleArn: AwsArn;
        /** The message format of the message to publish. Optional. Accepted values are
&quot;JSON&quot; and &quot;RAW&quot;. The default value of the attribute is &quot;RAW&quot;. SNS uses this
setting to determine if the payload should be parsed and relevant
platform-specific bits of the payload should be extracted. To read more about
SNS message formats, see 
[http://docs.aws.amazon.com/sns/latest/dg/json-formats.html] refer to their
official documentation. **/
        messageFormat?: MessageFormat;
    }
    export interface SqlParseException {
        /** The message for the exception. **/
        message?: errorMessage;
    }
    export interface SqsAction {
        /** The ARN of the IAM role that grants access. **/
        roleArn: AwsArn;
        /** The URL of the Amazon SQS queue. **/
        queueUrl: QueueUrl;
        /** Specifies whether to use Base64 encoding. **/
        useBase64?: UseBase64;
    }
    export interface ThingAttribute {
        /** The name of the thing. **/
        thingName?: ThingName;
        /** The attributes. **/
        attributes?: Attributes;
    }
    export interface ThrottlingException {
        /** The message for the exception. **/
        message?: errorMessage;
    }
    export interface TopicRule {
        /** The name of the rule. **/
        ruleName?: RuleName;
        /** The SQL statement used to query the topic. When using a SQL query with multiple
lines, be sure to escape the newline characters. **/
        sql?: SQL;
        /** The description of the rule. **/
        description?: Description;
        /** The date and time the rule was created. **/
        createdAt?: CreatedAtDate;
        /** The actions associated with the rule. **/
        actions?: ActionList;
        /** Specifies whether the rule is disabled. **/
        ruleDisabled?: IsDisabled;
    }
    export interface TopicRuleListItem {
        /** The rule ARN. **/
        ruleArn?: RuleArn;
        /** The name of the rule. **/
        ruleName?: RuleName;
        /** The pattern for the topic names that apply. **/
        topicPattern?: TopicPattern;
        /** The date and time the rule was created. **/
        createdAt?: CreatedAtDate;
        /** Specifies whether the rule is disabled. **/
        ruleDisabled?: IsDisabled;
    }
    export interface TopicRulePayload {
        /** The SQL statement used to query the topic. For more information, see AWS IoT SQL
Reference
[http://docs.aws.amazon.com/iot/latest/developerguide/iot-rules.html#aws-iot-sql-reference] 
in the AWS IoT Developer Guide . **/
        sql: SQL;
        /** The description of the rule. **/
        description?: Description;
        /** The actions associated with the rule. **/
        actions: ActionList;
        /** Specifies whether the rule is disabled. **/
        ruleDisabled?: IsDisabled;
    }
    export interface TransferAlreadyCompletedException {
        /** The message for the exception. **/
        message?: errorMessage;
    }
    export interface TransferCertificateRequest {
        /** The ID of the certificate. **/
        certificateId: CertificateId;
        /** The AWS account. **/
        targetAwsAccount: AwsAccountId;
    }
    export interface TransferCertificateResponse {
        /** The ARN of the certificate. **/
        transferredCertificateArn?: CertificateArn;
    }
    export interface TransferConflictException {
        /** The message for the exception. **/
        message?: errorMessage;
    }
    export interface UnauthorizedException {
        /** The message for the exception. **/
        message?: errorMessage;
    }
    export interface UpdateCertificateRequest {
        /** The ID of the certificate. **/
        certificateId: CertificateId;
        /** The new status.

Note: Setting the status to PENDING_TRANSFER will result in an exception being
thrown. PENDING_TRANSFER is a status used internally by AWS IoT. It is not
intended for developer use. **/
        newStatus: CertificateStatus;
    }
    export interface UpdateThingRequest {
        /** The thing name. **/
        thingName: ThingName;
        /** The attribute payload, a JSON string containing up to three key-value pairs (for
example, {\&quot;attributes\&quot;:{\&quot;string1\&quot;:\&quot;string2\&quot;}}). **/
        attributePayload: AttributePayload;
    }
    export interface UpdateThingResponse {
    }
    export interface VersionsLimitExceededException {
        /** The message for the exception. **/
        message?: errorMessage;
    }
  }
}
