// Type definitions for aws-sdk - AWS Key Management Service
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

// COMMENTED <reference path="./aws-sdk.d.ts" />

declare module "aws-sdk" {

 /**
   * apiVersion: 2014-11-01
   * endpointPrefix: kms
   * serviceAbbreviation: KMS
   * signatureVersion: v4
   * protocol: json
   *
   * AWS Key Management ServiceAWS Key Management Service (AWS KMS) is an encryption
and key management web service. This guide describes the AWS KMS operations that
you can call programmatically. For general information about AWS KMS, see the 
AWS Key Management Service Developer Guide
[http://docs.aws.amazon.com/kms/latest/developerguide/] .

AWS provides SDKs that consist of libraries and sample code for various
programming languages and platforms (Java, Ruby, .Net, iOS, Android, etc.). The
SDKs provide a convenient way to create programmatic access to AWS KMS and other
AWS services. For example, the SDKs take care of tasks such as signing requests
(see below), managing errors, and retrying requests automatically. For more
information about the AWS SDKs, including how to download and install them, see 
Tools for Amazon Web Services [http://aws.amazon.com/tools/] .

We recommend that you use the AWS SDKs to make programmatic API calls to AWS
KMS.

Clients must support TLS (Transport Layer Security) 1.0. We recommend TLS 1.2.
Clients must also support cipher suites with Perfect Forward Secrecy (PFS) such
as Ephemeral Diffie-Hellman (DHE) or Elliptic Curve Ephemeral Diffie-Hellman
(ECDHE). Most modern systems such as Java 7 and later support these modes.

Signing Requests

Requests must be signed by using an access key ID and a secret access key. We
strongly recommend that you do not use your AWS account access key ID and secret
key for everyday work with AWS KMS. Instead, use the access key ID and secret
access key for an IAM user, or you can use the AWS Security Token Service to
generate temporary security credentials that you can use to sign requests.

All AWS KMS operations require Signature Version 4
[http://docs.aws.amazon.com/general/latest/gr/signature-version-4.html] .

Logging API Requests

AWS KMS supports AWS CloudTrail, a service that logs AWS API calls and related
events for your AWS account and delivers them to an Amazon S3 bucket that you
specify. By using the information collected by CloudTrail, you can determine
what requests were made to AWS KMS, who made the request, when it was made, and
so on. To learn more about CloudTrail, including how to turn it on and find your
log files, see the AWS CloudTrail User Guide
[http://docs.aws.amazon.com/awscloudtrail/latest/userguide/] .

Additional Resources

For more information about credentials and request signing, see the following:

 &amp;#42; AWS Security Credentials
   [http://docs.aws.amazon.com/general/latest/gr/aws-security-credentials.html] 
   - This topic provides general information about the types of credentials used
   for accessing AWS.
 * AWS Security Token Service [http://docs.aws.amazon.com/STS/latest/UsingSTS/] 
   - This guide describes how to create and use temporary security credentials.
 * Signing AWS API Requests
   [http://docs.aws.amazon.com/general/latest/gr/signing_aws_api_requests.html] 
   - This set of topics walks you through the process of signing a request using
   an access key ID and a secret access key.

Commonly Used APIs

Of the APIs discussed in this guide, the following will prove the most useful
for most applications. You will likely perform actions other than these, such as
creating keys and assigning policies, by using the console.

 * Encrypt
 * Decrypt
 * GenerateDataKey
 * GenerateDataKeyWithoutPlaintext
   *
   */
  export class KMS extends Service {
    constructor(options?: any);
    endpoint: Endpoint;
    /**
     * Cancels the deletion of a customer master key (CMK). When this operation is
successful, the CMK is set to the Disabled state. To enable a CMK, use EnableKey 
.

For more information about scheduling and canceling deletion of a CMK, go to 
Deleting Customer Master Keys
[http://docs.aws.amazon.com/kms/latest/developerguide/deleting-keys.html] in the 
AWS Key Management Service Developer Guide .
     *
     * @error NotFoundException The request was rejected because the specified entity or resource could not be
found.  
     * @error InvalidArnException The request was rejected because a specified ARN was not valid.  
     * @error DependencyTimeoutException The system timed out while trying to fulfill the request. The request can be
retried.  
     * @error KMSInternalException The request was rejected because an internal exception occurred. The request can
be retried.  
     * @error KMSInvalidStateException The request was rejected because the state of the specified resource is not
valid for this request.

For more information about how key state affects the use of a customer master
key (CMK), go to How Key State Affects the Use of a Customer Master Key
[http://docs.aws.amazon.com/kms/latest/developerguide/key-state.html] in the AWS
Key Management Service Developer Guide .  
     */
    cancelKeyDeletion(params: KMS.CancelKeyDeletionRequest, callback?: (err: KMS.NotFoundException|KMS.InvalidArnException|KMS.DependencyTimeoutException|KMS.KMSInternalException|KMS.KMSInvalidStateException|any, data: KMS.CancelKeyDeletionResponse|any) => void): Request;
    /**
     * Creates a display name for a customer master key. An alias can be used to
identify a key and should be unique. The console enforces a one-to-one mapping
between the alias and a key. An alias name can contain only alphanumeric
characters, forward slashes (/), underscores (_), and dashes (-). An alias must
start with the word &quot;alias&quot; followed by a forward slash (alias/). An alias that
begins with &quot;aws&quot; after the forward slash (alias/aws...) is reserved by Amazon
Web Services (AWS).

The alias and the key it is mapped to must be in the same AWS account and the
same region.

To map an alias to a different key, call UpdateAlias .
     *
     * @error DependencyTimeoutException The system timed out while trying to fulfill the request. The request can be
retried.  
     * @error AlreadyExistsException The request was rejected because it attempted to create a resource that already
exists.  
     * @error NotFoundException The request was rejected because the specified entity or resource could not be
found.  
     * @error InvalidAliasNameException The request was rejected because the specified alias name is not valid.  
     * @error KMSInternalException The request was rejected because an internal exception occurred. The request can
be retried.  
     * @error LimitExceededException The request was rejected because a limit was exceeded. For more information, see 
Limits [http://docs.aws.amazon.com/kms/latest/developerguide/limits.html] in the 
AWS Key Management Service Developer Guide .  
     * @error KMSInvalidStateException The request was rejected because the state of the specified resource is not
valid for this request.

For more information about how key state affects the use of a customer master
key (CMK), go to How Key State Affects the Use of a Customer Master Key
[http://docs.aws.amazon.com/kms/latest/developerguide/key-state.html] in the AWS
Key Management Service Developer Guide .  
     */
    createAlias(params: KMS.CreateAliasRequest, callback?: (err: KMS.DependencyTimeoutException|KMS.AlreadyExistsException|KMS.NotFoundException|KMS.InvalidAliasNameException|KMS.KMSInternalException|KMS.LimitExceededException|KMS.KMSInvalidStateException|any, data: any) => void): Request;
    /**
     * Adds a grant to a key to specify who can use the key and under what conditions.
Grants are alternate permission mechanisms to key policies.

For more information about grants, see Grants
[http://docs.aws.amazon.com/kms/latest/developerguide/grants.html] in the AWS
Key Management Service Developer Guide .
     *
     * @error NotFoundException The request was rejected because the specified entity or resource could not be
found.  
     * @error DisabledException The request was rejected because the specified key was marked as disabled.  
     * @error DependencyTimeoutException The system timed out while trying to fulfill the request. The request can be
retried.  
     * @error InvalidArnException The request was rejected because a specified ARN was not valid.  
     * @error KMSInternalException The request was rejected because an internal exception occurred. The request can
be retried.  
     * @error InvalidGrantTokenException The request was rejected because a grant token provided as part of the request
is invalid.  
     * @error LimitExceededException The request was rejected because a limit was exceeded. For more information, see 
Limits [http://docs.aws.amazon.com/kms/latest/developerguide/limits.html] in the 
AWS Key Management Service Developer Guide .  
     * @error KMSInvalidStateException The request was rejected because the state of the specified resource is not
valid for this request.

For more information about how key state affects the use of a customer master
key (CMK), go to How Key State Affects the Use of a Customer Master Key
[http://docs.aws.amazon.com/kms/latest/developerguide/key-state.html] in the AWS
Key Management Service Developer Guide .  
     */
    createGrant(params: KMS.CreateGrantRequest, callback?: (err: KMS.NotFoundException|KMS.DisabledException|KMS.DependencyTimeoutException|KMS.InvalidArnException|KMS.KMSInternalException|KMS.InvalidGrantTokenException|KMS.LimitExceededException|KMS.KMSInvalidStateException|any, data: KMS.CreateGrantResponse|any) => void): Request;
    /**
     * Creates a customer master key. Customer master keys can be used to encrypt small
amounts of data (less than 4K) directly, but they are most commonly used to
encrypt or envelope data keys that are then used to encrypt customer data. For
more information about data keys, see GenerateDataKey and 
GenerateDataKeyWithoutPlaintext .
     *
     * @error MalformedPolicyDocumentException The request was rejected because the specified policy is not syntactically or
semantically correct.  
     * @error DependencyTimeoutException The system timed out while trying to fulfill the request. The request can be
retried.  
     * @error InvalidArnException The request was rejected because a specified ARN was not valid.  
     * @error UnsupportedOperationException The request was rejected because a specified parameter is not supported.  
     * @error KMSInternalException The request was rejected because an internal exception occurred. The request can
be retried.  
     * @error LimitExceededException The request was rejected because a limit was exceeded. For more information, see 
Limits [http://docs.aws.amazon.com/kms/latest/developerguide/limits.html] in the 
AWS Key Management Service Developer Guide .  
     */
    createKey(params: KMS.CreateKeyRequest, callback?: (err: KMS.MalformedPolicyDocumentException|KMS.DependencyTimeoutException|KMS.InvalidArnException|KMS.UnsupportedOperationException|KMS.KMSInternalException|KMS.LimitExceededException|any, data: KMS.CreateKeyResponse|any) => void): Request;
    /**
     * Decrypts ciphertext. Ciphertext is plaintext that has been previously encrypted
by using any of the following functions: &amp;#42; GenerateDataKey
 * GenerateDataKeyWithoutPlaintext
 * Encrypt



Note that if a caller has been granted access permissions to all keys (through,
for example, IAM user policies that grant Decrypt permission on all resources),
then ciphertext encrypted by using keys in other accounts where the key grants
access to the caller can be decrypted. To remedy this, we recommend that you do
not grant Decrypt access in an IAM user policy. Instead grant Decrypt access
only in key policies. If you must grant Decrypt access in an IAM user policy,
you should scope the resource to specific keys or to specific trusted accounts.
     *
     * @error NotFoundException The request was rejected because the specified entity or resource could not be
found.  
     * @error DisabledException The request was rejected because the specified key was marked as disabled.  
     * @error InvalidCiphertextException The request was rejected because the specified ciphertext has been corrupted or
is otherwise invalid.  
     * @error KeyUnavailableException The request was rejected because the key was not available. The request can be
retried.  
     * @error DependencyTimeoutException The system timed out while trying to fulfill the request. The request can be
retried.  
     * @error InvalidGrantTokenException The request was rejected because a grant token provided as part of the request
is invalid.  
     * @error KMSInternalException The request was rejected because an internal exception occurred. The request can
be retried.  
     * @error KMSInvalidStateException The request was rejected because the state of the specified resource is not
valid for this request.

For more information about how key state affects the use of a customer master
key (CMK), go to How Key State Affects the Use of a Customer Master Key
[http://docs.aws.amazon.com/kms/latest/developerguide/key-state.html] in the AWS
Key Management Service Developer Guide .  
     */
    decrypt(params: KMS.DecryptRequest, callback?: (err: KMS.NotFoundException|KMS.DisabledException|KMS.InvalidCiphertextException|KMS.KeyUnavailableException|KMS.DependencyTimeoutException|KMS.InvalidGrantTokenException|KMS.KMSInternalException|KMS.KMSInvalidStateException|any, data: KMS.DecryptResponse|any) => void): Request;
    /**
     * Deletes the specified alias. To map an alias to a different key, call 
UpdateAlias .
     *
     * @error DependencyTimeoutException The system timed out while trying to fulfill the request. The request can be
retried.  
     * @error NotFoundException The request was rejected because the specified entity or resource could not be
found.  
     * @error KMSInternalException The request was rejected because an internal exception occurred. The request can
be retried.  
     * @error KMSInvalidStateException The request was rejected because the state of the specified resource is not
valid for this request.

For more information about how key state affects the use of a customer master
key (CMK), go to How Key State Affects the Use of a Customer Master Key
[http://docs.aws.amazon.com/kms/latest/developerguide/key-state.html] in the AWS
Key Management Service Developer Guide .  
     */
    deleteAlias(params: KMS.DeleteAliasRequest, callback?: (err: KMS.DependencyTimeoutException|KMS.NotFoundException|KMS.KMSInternalException|KMS.KMSInvalidStateException|any, data: any) => void): Request;
    /**
     * Provides detailed information about the specified customer master key.
     *
     * @error NotFoundException The request was rejected because the specified entity or resource could not be
found.  
     * @error InvalidArnException The request was rejected because a specified ARN was not valid.  
     * @error DependencyTimeoutException The system timed out while trying to fulfill the request. The request can be
retried.  
     * @error KMSInternalException The request was rejected because an internal exception occurred. The request can
be retried.  
     */
    describeKey(params: KMS.DescribeKeyRequest, callback?: (err: KMS.NotFoundException|KMS.InvalidArnException|KMS.DependencyTimeoutException|KMS.KMSInternalException|any, data: KMS.DescribeKeyResponse|any) => void): Request;
    /**
     * Sets the state of a master key to disabled, thereby preventing its use for
cryptographic operations. For more information about how key state affects the
use of a master key, go to How Key State Affects the Use of a Customer Master
Key [http://docs.aws.amazon.com/kms/latest/developerguide/key-state.html] in the 
AWS Key Management Service Developer Guide .
     *
     * @error NotFoundException The request was rejected because the specified entity or resource could not be
found.  
     * @error InvalidArnException The request was rejected because a specified ARN was not valid.  
     * @error DependencyTimeoutException The system timed out while trying to fulfill the request. The request can be
retried.  
     * @error KMSInternalException The request was rejected because an internal exception occurred. The request can
be retried.  
     * @error KMSInvalidStateException The request was rejected because the state of the specified resource is not
valid for this request.

For more information about how key state affects the use of a customer master
key (CMK), go to How Key State Affects the Use of a Customer Master Key
[http://docs.aws.amazon.com/kms/latest/developerguide/key-state.html] in the AWS
Key Management Service Developer Guide .  
     */
    disableKey(params: KMS.DisableKeyRequest, callback?: (err: KMS.NotFoundException|KMS.InvalidArnException|KMS.DependencyTimeoutException|KMS.KMSInternalException|KMS.KMSInvalidStateException|any, data: any) => void): Request;
    /**
     * Disables rotation of the specified key.
     *
     * @error NotFoundException The request was rejected because the specified entity or resource could not be
found.  
     * @error DisabledException The request was rejected because the specified key was marked as disabled.  
     * @error InvalidArnException The request was rejected because a specified ARN was not valid.  
     * @error DependencyTimeoutException The system timed out while trying to fulfill the request. The request can be
retried.  
     * @error KMSInternalException The request was rejected because an internal exception occurred. The request can
be retried.  
     * @error KMSInvalidStateException The request was rejected because the state of the specified resource is not
valid for this request.

For more information about how key state affects the use of a customer master
key (CMK), go to How Key State Affects the Use of a Customer Master Key
[http://docs.aws.amazon.com/kms/latest/developerguide/key-state.html] in the AWS
Key Management Service Developer Guide .  
     */
    disableKeyRotation(params: KMS.DisableKeyRotationRequest, callback?: (err: KMS.NotFoundException|KMS.DisabledException|KMS.InvalidArnException|KMS.DependencyTimeoutException|KMS.KMSInternalException|KMS.KMSInvalidStateException|any, data: any) => void): Request;
    /**
     * Marks a key as enabled, thereby permitting its use.
     *
     * @error NotFoundException The request was rejected because the specified entity or resource could not be
found.  
     * @error InvalidArnException The request was rejected because a specified ARN was not valid.  
     * @error DependencyTimeoutException The system timed out while trying to fulfill the request. The request can be
retried.  
     * @error KMSInternalException The request was rejected because an internal exception occurred. The request can
be retried.  
     * @error LimitExceededException The request was rejected because a limit was exceeded. For more information, see 
Limits [http://docs.aws.amazon.com/kms/latest/developerguide/limits.html] in the 
AWS Key Management Service Developer Guide .  
     * @error KMSInvalidStateException The request was rejected because the state of the specified resource is not
valid for this request.

For more information about how key state affects the use of a customer master
key (CMK), go to How Key State Affects the Use of a Customer Master Key
[http://docs.aws.amazon.com/kms/latest/developerguide/key-state.html] in the AWS
Key Management Service Developer Guide .  
     */
    enableKey(params: KMS.EnableKeyRequest, callback?: (err: KMS.NotFoundException|KMS.InvalidArnException|KMS.DependencyTimeoutException|KMS.KMSInternalException|KMS.LimitExceededException|KMS.KMSInvalidStateException|any, data: any) => void): Request;
    /**
     * Enables rotation of the specified customer master key.
     *
     * @error NotFoundException The request was rejected because the specified entity or resource could not be
found.  
     * @error DisabledException The request was rejected because the specified key was marked as disabled.  
     * @error InvalidArnException The request was rejected because a specified ARN was not valid.  
     * @error DependencyTimeoutException The system timed out while trying to fulfill the request. The request can be
retried.  
     * @error KMSInternalException The request was rejected because an internal exception occurred. The request can
be retried.  
     * @error KMSInvalidStateException The request was rejected because the state of the specified resource is not
valid for this request.

For more information about how key state affects the use of a customer master
key (CMK), go to How Key State Affects the Use of a Customer Master Key
[http://docs.aws.amazon.com/kms/latest/developerguide/key-state.html] in the AWS
Key Management Service Developer Guide .  
     */
    enableKeyRotation(params: KMS.EnableKeyRotationRequest, callback?: (err: KMS.NotFoundException|KMS.DisabledException|KMS.InvalidArnException|KMS.DependencyTimeoutException|KMS.KMSInternalException|KMS.KMSInvalidStateException|any, data: any) => void): Request;
    /**
     * Encrypts plaintext into ciphertext by using a customer master key. The Encrypt 
function has two primary use cases: &amp;#42; You can encrypt up to 4 KB of arbitrary
   data such as an RSA key, a database password, or other sensitive customer
   information.
 * If you are moving encrypted data from one
   region to another, you can use this API to encrypt in the new region the
   plaintext data key that was used to encrypt the data in the original region.
   This provides you with an encrypted copy of the data key that can be
   decrypted in the new region and used there to decrypt the encrypted data.



Unless you are moving encrypted data from one region to another, you don&#x27;t use
this function to encrypt a generated data key within a region. You retrieve data
keys already encrypted by calling the GenerateDataKey or 
GenerateDataKeyWithoutPlaintext function. Data keys don&#x27;t need to be encrypted
again by calling Encrypt .

If you want to encrypt data locally in your application, you can use the 
GenerateDataKey function to return a plaintext data encryption key and a copy of
the key encrypted under the customer master key (CMK) of your choosing.
     *
     * @error NotFoundException The request was rejected because the specified entity or resource could not be
found.  
     * @error DisabledException The request was rejected because the specified key was marked as disabled.  
     * @error KeyUnavailableException The request was rejected because the key was not available. The request can be
retried.  
     * @error DependencyTimeoutException The system timed out while trying to fulfill the request. The request can be
retried.  
     * @error InvalidKeyUsageException The request was rejected because the specified KeySpec parameter is not valid.
The currently supported value is ENCRYPT/DECRYPT.  
     * @error InvalidGrantTokenException The request was rejected because a grant token provided as part of the request
is invalid.  
     * @error KMSInternalException The request was rejected because an internal exception occurred. The request can
be retried.  
     * @error KMSInvalidStateException The request was rejected because the state of the specified resource is not
valid for this request.

For more information about how key state affects the use of a customer master
key (CMK), go to How Key State Affects the Use of a Customer Master Key
[http://docs.aws.amazon.com/kms/latest/developerguide/key-state.html] in the AWS
Key Management Service Developer Guide .  
     */
    encrypt(params: KMS.EncryptRequest, callback?: (err: KMS.NotFoundException|KMS.DisabledException|KMS.KeyUnavailableException|KMS.DependencyTimeoutException|KMS.InvalidKeyUsageException|KMS.InvalidGrantTokenException|KMS.KMSInternalException|KMS.KMSInvalidStateException|any, data: KMS.EncryptResponse|any) => void): Request;
    /**
     * Generates a data key that you can use in your application to locally encrypt
data. This call returns a plaintext version of the key in the Plaintext field of
the response object and an encrypted copy of the key in the CiphertextBlob 
field. The key is encrypted by using the master key specified by the KeyId 
field. To decrypt the encrypted key, pass it to the Decrypt API.

We recommend that you use the following pattern to locally encrypt data: call
the GenerateDataKey API, use the key returned in the Plaintext response field to
locally encrypt data, and then erase the plaintext data key from memory. Store
the encrypted data key (contained in the CiphertextBlob field) alongside of the
locally encrypted data.

You should not call the Encrypt function to re-encrypt your data keys within a
region. GenerateDataKey always returns the data key encrypted and tied to the
customer master key that will be used to decrypt it. There is no need to decrypt
it twice.If you decide to use the optional EncryptionContext parameter, you must also
store the context in full or at least store enough information along with the
encrypted data to be able to reconstruct the context when submitting the
ciphertext to the Decrypt API. It is a good practice to choose a context that
you can reconstruct on the fly to better secure the ciphertext. For more
information about how this parameter is used, see Encryption Context
[http://docs.aws.amazon.com/kms/latest/developerguide/encrypt-context.html] .

To decrypt data, pass the encrypted data key to the Decrypt API. Decrypt uses
the associated master key to decrypt the encrypted data key and returns it as
plaintext. Use the plaintext data key to locally decrypt your data and then
erase the key from memory. You must specify the encryption context, if any, that
you specified when you generated the key. The encryption context is logged by
CloudTrail, and you can use this log to help track the use of particular data.
     *
     * @error NotFoundException The request was rejected because the specified entity or resource could not be
found.  
     * @error DisabledException The request was rejected because the specified key was marked as disabled.  
     * @error KeyUnavailableException The request was rejected because the key was not available. The request can be
retried.  
     * @error DependencyTimeoutException The system timed out while trying to fulfill the request. The request can be
retried.  
     * @error InvalidKeyUsageException The request was rejected because the specified KeySpec parameter is not valid.
The currently supported value is ENCRYPT/DECRYPT.  
     * @error InvalidGrantTokenException The request was rejected because a grant token provided as part of the request
is invalid.  
     * @error KMSInternalException The request was rejected because an internal exception occurred. The request can
be retried.  
     * @error KMSInvalidStateException The request was rejected because the state of the specified resource is not
valid for this request.

For more information about how key state affects the use of a customer master
key (CMK), go to How Key State Affects the Use of a Customer Master Key
[http://docs.aws.amazon.com/kms/latest/developerguide/key-state.html] in the AWS
Key Management Service Developer Guide .  
     */
    generateDataKey(params: KMS.GenerateDataKeyRequest, callback?: (err: KMS.NotFoundException|KMS.DisabledException|KMS.KeyUnavailableException|KMS.DependencyTimeoutException|KMS.InvalidKeyUsageException|KMS.InvalidGrantTokenException|KMS.KMSInternalException|KMS.KMSInvalidStateException|any, data: KMS.GenerateDataKeyResponse|any) => void): Request;
    /**
     * Returns a data key encrypted by a customer master key without the plaintext copy
of that key. Otherwise, this API functions exactly like GenerateDataKey . You
can use this API to, for example, satisfy an audit requirement that an encrypted
key be made available without exposing the plaintext copy of that key.
     *
     * @error NotFoundException The request was rejected because the specified entity or resource could not be
found.  
     * @error DisabledException The request was rejected because the specified key was marked as disabled.  
     * @error KeyUnavailableException The request was rejected because the key was not available. The request can be
retried.  
     * @error DependencyTimeoutException The system timed out while trying to fulfill the request. The request can be
retried.  
     * @error InvalidKeyUsageException The request was rejected because the specified KeySpec parameter is not valid.
The currently supported value is ENCRYPT/DECRYPT.  
     * @error InvalidGrantTokenException The request was rejected because a grant token provided as part of the request
is invalid.  
     * @error KMSInternalException The request was rejected because an internal exception occurred. The request can
be retried.  
     * @error KMSInvalidStateException The request was rejected because the state of the specified resource is not
valid for this request.

For more information about how key state affects the use of a customer master
key (CMK), go to How Key State Affects the Use of a Customer Master Key
[http://docs.aws.amazon.com/kms/latest/developerguide/key-state.html] in the AWS
Key Management Service Developer Guide .  
     */
    generateDataKeyWithoutPlaintext(params: KMS.GenerateDataKeyWithoutPlaintextRequest, callback?: (err: KMS.NotFoundException|KMS.DisabledException|KMS.KeyUnavailableException|KMS.DependencyTimeoutException|KMS.InvalidKeyUsageException|KMS.InvalidGrantTokenException|KMS.KMSInternalException|KMS.KMSInvalidStateException|any, data: KMS.GenerateDataKeyWithoutPlaintextResponse|any) => void): Request;
    /**
     * Generates an unpredictable byte string.
     *
     * @error DependencyTimeoutException The system timed out while trying to fulfill the request. The request can be
retried.  
     * @error KMSInternalException The request was rejected because an internal exception occurred. The request can
be retried.  
     */
    generateRandom(params: KMS.GenerateRandomRequest, callback?: (err: KMS.DependencyTimeoutException|KMS.KMSInternalException|any, data: KMS.GenerateRandomResponse|any) => void): Request;
    /**
     * Retrieves a policy attached to the specified key.
     *
     * @error NotFoundException The request was rejected because the specified entity or resource could not be
found.  
     * @error InvalidArnException The request was rejected because a specified ARN was not valid.  
     * @error DependencyTimeoutException The system timed out while trying to fulfill the request. The request can be
retried.  
     * @error KMSInternalException The request was rejected because an internal exception occurred. The request can
be retried.  
     * @error KMSInvalidStateException The request was rejected because the state of the specified resource is not
valid for this request.

For more information about how key state affects the use of a customer master
key (CMK), go to How Key State Affects the Use of a Customer Master Key
[http://docs.aws.amazon.com/kms/latest/developerguide/key-state.html] in the AWS
Key Management Service Developer Guide .  
     */
    getKeyPolicy(params: KMS.GetKeyPolicyRequest, callback?: (err: KMS.NotFoundException|KMS.InvalidArnException|KMS.DependencyTimeoutException|KMS.KMSInternalException|KMS.KMSInvalidStateException|any, data: KMS.GetKeyPolicyResponse|any) => void): Request;
    /**
     * Retrieves a Boolean value that indicates whether key rotation is enabled for the
specified key.
     *
     * @error NotFoundException The request was rejected because the specified entity or resource could not be
found.  
     * @error InvalidArnException The request was rejected because a specified ARN was not valid.  
     * @error DependencyTimeoutException The system timed out while trying to fulfill the request. The request can be
retried.  
     * @error KMSInternalException The request was rejected because an internal exception occurred. The request can
be retried.  
     * @error KMSInvalidStateException The request was rejected because the state of the specified resource is not
valid for this request.

For more information about how key state affects the use of a customer master
key (CMK), go to How Key State Affects the Use of a Customer Master Key
[http://docs.aws.amazon.com/kms/latest/developerguide/key-state.html] in the AWS
Key Management Service Developer Guide .  
     */
    getKeyRotationStatus(params: KMS.GetKeyRotationStatusRequest, callback?: (err: KMS.NotFoundException|KMS.InvalidArnException|KMS.DependencyTimeoutException|KMS.KMSInternalException|KMS.KMSInvalidStateException|any, data: KMS.GetKeyRotationStatusResponse|any) => void): Request;
    /**
     * Lists all of the key aliases in the account.
     *
     * @error DependencyTimeoutException The system timed out while trying to fulfill the request. The request can be
retried.  
     * @error InvalidMarkerException The request was rejected because the marker that specifies where pagination
should next begin is not valid.  
     * @error KMSInternalException The request was rejected because an internal exception occurred. The request can
be retried.  
     */
    listAliases(params: KMS.ListAliasesRequest, callback?: (err: KMS.DependencyTimeoutException|KMS.InvalidMarkerException|KMS.KMSInternalException|any, data: KMS.ListAliasesResponse|any) => void): Request;
    /**
     * List the grants for a specified key.
     *
     * @error NotFoundException The request was rejected because the specified entity or resource could not be
found.  
     * @error DependencyTimeoutException The system timed out while trying to fulfill the request. The request can be
retried.  
     * @error InvalidMarkerException The request was rejected because the marker that specifies where pagination
should next begin is not valid.  
     * @error InvalidArnException The request was rejected because a specified ARN was not valid.  
     * @error KMSInternalException The request was rejected because an internal exception occurred. The request can
be retried.  
     * @error KMSInvalidStateException The request was rejected because the state of the specified resource is not
valid for this request.

For more information about how key state affects the use of a customer master
key (CMK), go to How Key State Affects the Use of a Customer Master Key
[http://docs.aws.amazon.com/kms/latest/developerguide/key-state.html] in the AWS
Key Management Service Developer Guide .  
     */
    listGrants(params: KMS.ListGrantsRequest, callback?: (err: KMS.NotFoundException|KMS.DependencyTimeoutException|KMS.InvalidMarkerException|KMS.InvalidArnException|KMS.KMSInternalException|KMS.KMSInvalidStateException|any, data: KMS.ListGrantsResponse|any) => void): Request;
    /**
     * Retrieves a list of policies attached to a key.
     *
     * @error NotFoundException The request was rejected because the specified entity or resource could not be
found.  
     * @error InvalidArnException The request was rejected because a specified ARN was not valid.  
     * @error DependencyTimeoutException The system timed out while trying to fulfill the request. The request can be
retried.  
     * @error KMSInternalException The request was rejected because an internal exception occurred. The request can
be retried.  
     * @error KMSInvalidStateException The request was rejected because the state of the specified resource is not
valid for this request.

For more information about how key state affects the use of a customer master
key (CMK), go to How Key State Affects the Use of a Customer Master Key
[http://docs.aws.amazon.com/kms/latest/developerguide/key-state.html] in the AWS
Key Management Service Developer Guide .  
     */
    listKeyPolicies(params: KMS.ListKeyPoliciesRequest, callback?: (err: KMS.NotFoundException|KMS.InvalidArnException|KMS.DependencyTimeoutException|KMS.KMSInternalException|KMS.KMSInvalidStateException|any, data: KMS.ListKeyPoliciesResponse|any) => void): Request;
    /**
     * Lists the customer master keys.
     *
     * @error DependencyTimeoutException The system timed out while trying to fulfill the request. The request can be
retried.  
     * @error KMSInternalException The request was rejected because an internal exception occurred. The request can
be retried.  
     */
    listKeys(params: KMS.ListKeysRequest, callback?: (err: KMS.DependencyTimeoutException|KMS.KMSInternalException|any, data: KMS.ListKeysResponse|any) => void): Request;
    /**
     * Returns a list of all grants for which the grant&#x27;s RetiringPrincipal matches the
one specified.

A typical use is to list all grants that you are able to retire. To retire a
grant, use RetireGrant .
     *
     * @error DependencyTimeoutException The system timed out while trying to fulfill the request. The request can be
retried.  
     * @error InvalidMarkerException The request was rejected because the marker that specifies where pagination
should next begin is not valid.  
     * @error InvalidArnException The request was rejected because a specified ARN was not valid.  
     * @error NotFoundException The request was rejected because the specified entity or resource could not be
found.  
     * @error KMSInternalException The request was rejected because an internal exception occurred. The request can
be retried.  
     */
    listRetirableGrants(params: KMS.ListRetirableGrantsRequest, callback?: (err: KMS.DependencyTimeoutException|KMS.InvalidMarkerException|KMS.InvalidArnException|KMS.NotFoundException|KMS.KMSInternalException|any, data: KMS.ListGrantsResponse|any) => void): Request;
    /**
     * Attaches a policy to the specified key.
     *
     * @error NotFoundException The request was rejected because the specified entity or resource could not be
found.  
     * @error InvalidArnException The request was rejected because a specified ARN was not valid.  
     * @error MalformedPolicyDocumentException The request was rejected because the specified policy is not syntactically or
semantically correct.  
     * @error DependencyTimeoutException The system timed out while trying to fulfill the request. The request can be
retried.  
     * @error InvalidArnException The request was rejected because a specified ARN was not valid.  
     * @error UnsupportedOperationException The request was rejected because a specified parameter is not supported.  
     * @error KMSInternalException The request was rejected because an internal exception occurred. The request can
be retried.  
     * @error LimitExceededException The request was rejected because a limit was exceeded. For more information, see 
Limits [http://docs.aws.amazon.com/kms/latest/developerguide/limits.html] in the 
AWS Key Management Service Developer Guide .  
     * @error KMSInvalidStateException The request was rejected because the state of the specified resource is not
valid for this request.

For more information about how key state affects the use of a customer master
key (CMK), go to How Key State Affects the Use of a Customer Master Key
[http://docs.aws.amazon.com/kms/latest/developerguide/key-state.html] in the AWS
Key Management Service Developer Guide .  
     */
    putKeyPolicy(params: KMS.PutKeyPolicyRequest, callback?: (err: KMS.NotFoundException|KMS.InvalidArnException|KMS.MalformedPolicyDocumentException|KMS.DependencyTimeoutException|KMS.InvalidArnException|KMS.UnsupportedOperationException|KMS.KMSInternalException|KMS.LimitExceededException|KMS.KMSInvalidStateException|any, data: any) => void): Request;
    /**
     * Encrypts data on the server side with a new customer master key without exposing
the plaintext of the data on the client side. The data is first decrypted and
then encrypted. This operation can also be used to change the encryption context
of a ciphertext.

Unlike other actions, ReEncrypt is authorized twice - once as ReEncryptFrom on
the source key and once as ReEncryptTo on the destination key. We therefore
recommend that you include the &quot;action&quot;:&quot;kms:ReEncrypt&amp;#42;&quot; statement in your key
policies to permit re-encryption from or to the key. The statement is included
automatically when you authorize use of the key through the console but must be
included manually when you set a policy by using the PutKeyPolicy function.
     *
     * @error NotFoundException The request was rejected because the specified entity or resource could not be
found.  
     * @error DisabledException The request was rejected because the specified key was marked as disabled.  
     * @error InvalidCiphertextException The request was rejected because the specified ciphertext has been corrupted or
is otherwise invalid.  
     * @error KeyUnavailableException The request was rejected because the key was not available. The request can be
retried.  
     * @error DependencyTimeoutException The system timed out while trying to fulfill the request. The request can be
retried.  
     * @error InvalidKeyUsageException The request was rejected because the specified KeySpec parameter is not valid.
The currently supported value is ENCRYPT/DECRYPT.  
     * @error InvalidGrantTokenException The request was rejected because a grant token provided as part of the request
is invalid.  
     * @error KMSInternalException The request was rejected because an internal exception occurred. The request can
be retried.  
     * @error KMSInvalidStateException The request was rejected because the state of the specified resource is not
valid for this request.

For more information about how key state affects the use of a customer master
key (CMK), go to How Key State Affects the Use of a Customer Master Key
[http://docs.aws.amazon.com/kms/latest/developerguide/key-state.html] in the AWS
Key Management Service Developer Guide .  
     */
    reEncrypt(params: KMS.ReEncryptRequest, callback?: (err: KMS.NotFoundException|KMS.DisabledException|KMS.InvalidCiphertextException|KMS.KeyUnavailableException|KMS.DependencyTimeoutException|KMS.InvalidKeyUsageException|KMS.InvalidGrantTokenException|KMS.KMSInternalException|KMS.KMSInvalidStateException|any, data: KMS.ReEncryptResponse|any) => void): Request;
    /**
     * Retires a grant. You can retire a grant when you&#x27;re done using it to clean up.
You should revoke a grant when you intend to actively deny operations that
depend on it. The following are permitted to call this API: &amp;#42; The account that
   created the grant
 * The RetiringPrincipal , if present
 * The GranteePrincipal , if RetireGrant is a grantee operation

The grant to retire must be identified by its grant token or by a combination of
the key ARN and the grant ID. A grant token is a unique variable-length
base64-encoded string. A grant ID is a 64 character unique identifier of a
grant. Both are returned by the CreateGrant function.
     *
     * @error InvalidGrantTokenException The request was rejected because a grant token provided as part of the request
is invalid.  
     * @error InvalidGrantIdException The request was rejected because the specified GrantId is not valid.  
     * @error NotFoundException The request was rejected because the specified entity or resource could not be
found.  
     * @error DependencyTimeoutException The system timed out while trying to fulfill the request. The request can be
retried.  
     * @error KMSInternalException The request was rejected because an internal exception occurred. The request can
be retried.  
     * @error KMSInvalidStateException The request was rejected because the state of the specified resource is not
valid for this request.

For more information about how key state affects the use of a customer master
key (CMK), go to How Key State Affects the Use of a Customer Master Key
[http://docs.aws.amazon.com/kms/latest/developerguide/key-state.html] in the AWS
Key Management Service Developer Guide .  
     */
    retireGrant(params: KMS.RetireGrantRequest, callback?: (err: KMS.InvalidGrantTokenException|KMS.InvalidGrantIdException|KMS.NotFoundException|KMS.DependencyTimeoutException|KMS.KMSInternalException|KMS.KMSInvalidStateException|any, data: any) => void): Request;
    /**
     * Revokes a grant. You can revoke a grant to actively deny operations that depend
on it.
     *
     * @error NotFoundException The request was rejected because the specified entity or resource could not be
found.  
     * @error DependencyTimeoutException The system timed out while trying to fulfill the request. The request can be
retried.  
     * @error InvalidArnException The request was rejected because a specified ARN was not valid.  
     * @error InvalidGrantIdException The request was rejected because the specified GrantId is not valid.  
     * @error KMSInternalException The request was rejected because an internal exception occurred. The request can
be retried.  
     * @error KMSInvalidStateException The request was rejected because the state of the specified resource is not
valid for this request.

For more information about how key state affects the use of a customer master
key (CMK), go to How Key State Affects the Use of a Customer Master Key
[http://docs.aws.amazon.com/kms/latest/developerguide/key-state.html] in the AWS
Key Management Service Developer Guide .  
     */
    revokeGrant(params: KMS.RevokeGrantRequest, callback?: (err: KMS.NotFoundException|KMS.DependencyTimeoutException|KMS.InvalidArnException|KMS.InvalidGrantIdException|KMS.KMSInternalException|KMS.KMSInvalidStateException|any, data: any) => void): Request;
    /**
     * Schedules the deletion of a customer master key (CMK). You may provide a waiting
period, specified in days, before deletion occurs. If you do not provide a
waiting period, the default period of 30 days is used. When this operation is
successful, the state of the CMK changes to PendingDeletion . Before the waiting
period ends, you can use CancelKeyDeletion to cancel the deletion of the CMK.
After the waiting period ends, AWS KMS deletes the CMK and all AWS KMS data
associated with it, including all aliases that point to it.

Deleting a CMK is a destructive and potentially dangerous operation. When a CMK
is deleted, all data that was encrypted under the CMK is rendered unrecoverable.
To restrict the use of a CMK without deleting it, use DisableKey .

For more information about scheduling a CMK for deletion, go to Deleting
Customer Master Keys
[http://docs.aws.amazon.com/kms/latest/developerguide/deleting-keys.html] in the 
AWS Key Management Service Developer Guide .
     *
     * @error NotFoundException The request was rejected because the specified entity or resource could not be
found.  
     * @error InvalidArnException The request was rejected because a specified ARN was not valid.  
     * @error DependencyTimeoutException The system timed out while trying to fulfill the request. The request can be
retried.  
     * @error KMSInternalException The request was rejected because an internal exception occurred. The request can
be retried.  
     * @error KMSInvalidStateException The request was rejected because the state of the specified resource is not
valid for this request.

For more information about how key state affects the use of a customer master
key (CMK), go to How Key State Affects the Use of a Customer Master Key
[http://docs.aws.amazon.com/kms/latest/developerguide/key-state.html] in the AWS
Key Management Service Developer Guide .  
     */
    scheduleKeyDeletion(params: KMS.ScheduleKeyDeletionRequest, callback?: (err: KMS.NotFoundException|KMS.InvalidArnException|KMS.DependencyTimeoutException|KMS.KMSInternalException|KMS.KMSInvalidStateException|any, data: KMS.ScheduleKeyDeletionResponse|any) => void): Request;
    /**
     * Updates an alias to map it to a different key.

An alias is not a property of a key. Therefore, an alias can be mapped to and
unmapped from an existing key without changing the properties of the key.

An alias name can contain only alphanumeric characters, forward slashes (/),
underscores (_), and dashes (-). An alias must start with the word &quot;alias&quot;
followed by a forward slash (alias/). An alias that begins with &quot;aws&quot; after the
forward slash (alias/aws...) is reserved by Amazon Web Services (AWS).

The alias and the key it is mapped to must be in the same AWS account and the
same region.
     *
     * @error DependencyTimeoutException The system timed out while trying to fulfill the request. The request can be
retried.  
     * @error NotFoundException The request was rejected because the specified entity or resource could not be
found.  
     * @error KMSInternalException The request was rejected because an internal exception occurred. The request can
be retried.  
     * @error KMSInvalidStateException The request was rejected because the state of the specified resource is not
valid for this request.

For more information about how key state affects the use of a customer master
key (CMK), go to How Key State Affects the Use of a Customer Master Key
[http://docs.aws.amazon.com/kms/latest/developerguide/key-state.html] in the AWS
Key Management Service Developer Guide .  
     */
    updateAlias(params: KMS.UpdateAliasRequest, callback?: (err: KMS.DependencyTimeoutException|KMS.NotFoundException|KMS.KMSInternalException|KMS.KMSInvalidStateException|any, data: any) => void): Request;
    /**
     * Updates the description of a key.
     *
     * @error NotFoundException The request was rejected because the specified entity or resource could not be
found.  
     * @error InvalidArnException The request was rejected because a specified ARN was not valid.  
     * @error DependencyTimeoutException The system timed out while trying to fulfill the request. The request can be
retried.  
     * @error KMSInternalException The request was rejected because an internal exception occurred. The request can
be retried.  
     * @error KMSInvalidStateException The request was rejected because the state of the specified resource is not
valid for this request.

For more information about how key state affects the use of a customer master
key (CMK), go to How Key State Affects the Use of a Customer Master Key
[http://docs.aws.amazon.com/kms/latest/developerguide/key-state.html] in the AWS
Key Management Service Developer Guide .  
     */
    updateKeyDescription(params: KMS.UpdateKeyDescriptionRequest, callback?: (err: KMS.NotFoundException|KMS.InvalidArnException|KMS.DependencyTimeoutException|KMS.KMSInternalException|KMS.KMSInvalidStateException|any, data: any) => void): Request;

  }

  export module KMS {
    
    export type AWSAccountIdType = string;
    
    export type AliasList = AliasListEntry[];
    
    export type AliasNameType = string;
    
    export type ArnType = string;
    
    export type BooleanType = boolean;
    
    export type CiphertextType = any;
    
    export type DataKeySpec = string;
    
    export type DateType = number;
    
    export type DescriptionType = string;
    
    export type EncryptionContextKey = string;
    
    export type EncryptionContextType = {[key:string]: EncryptionContextValue};
    
    export type EncryptionContextValue = string;
    
    export type ErrorMessageType = string;
    
    export type GrantIdType = string;
    
    export type GrantList = GrantListEntry[];
    
    export type GrantNameType = string;
    
    export type GrantOperation = string;
    
    export type GrantOperationList = GrantOperation[];
    
    export type GrantTokenList = GrantTokenType[];
    
    export type GrantTokenType = string;
    
    export type KeyIdType = string;
    
    export type KeyList = KeyListEntry[];
    
    export type KeyState = string;
    
    export type KeyUsageType = string;
    
    export type LimitType = number;
    
    export type MarkerType = string;
    
    export type NumberOfBytesType = number;
    
    export type PendingWindowInDaysType = number;
    
    export type PlaintextType = any;
    
    export type PolicyNameList = PolicyNameType[];
    
    export type PolicyNameType = string;
    
    export type PolicyType = string;
    
    export type PrincipalIdType = string;

    export interface AliasListEntry {
        /** String that contains the alias. **/
        AliasName?: AliasNameType;
        /** String that contains the key ARN. **/
        AliasArn?: ArnType;
        /** String that contains the key identifier pointed to by the alias. **/
        TargetKeyId?: KeyIdType;
    }
    export interface AlreadyExistsException {
        message?: ErrorMessageType;
    }
    export interface CancelKeyDeletionRequest {
        /** The unique identifier for the customer master key (CMK) for which to cancel
deletion.

To specify this value, use the unique key ID or the Amazon Resource Name (ARN)
of the CMK. Examples: &amp;#42; Unique key ID: 1234abcd-12ab-34cd-56ef-1234567890ab
 * Key ARN:
   arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab



To obtain the unique key ID and key ARN for a given CMK, use ListKeys or 
DescribeKey . **/
        KeyId: KeyIdType;
    }
    export interface CancelKeyDeletionResponse {
        /** The unique identifier of the master key for which deletion is canceled. **/
        KeyId?: KeyIdType;
    }
    export interface CreateAliasRequest {
        /** String that contains the display name. The name must start with the word &quot;alias&quot;
followed by a forward slash (alias/). Aliases that begin with &quot;alias/AWS&quot; are
reserved. **/
        AliasName: AliasNameType;
        /** An identifier of the key for which you are creating the alias. This value cannot
be another alias but can be a globally unique identifier or a fully specified
ARN to a key. &amp;#42; Key ARN Example -
   arn:aws:kms:us-east-1:123456789012:key/12345678-1234-1234-1234-123456789012
 * Globally Unique Key ID Example -
   12345678-1234-1234-1234-123456789012 **/
        TargetKeyId: KeyIdType;
    }
    export interface CreateGrantRequest {
        /** The unique identifier for the customer master key (CMK) that the grant applies
to.

To specify this value, use the globally unique key ID or the Amazon Resource
Name (ARN) of the key. Examples: &amp;#42; Globally unique key ID:
   12345678-1234-1234-1234-123456789012
 * Key ARN:
   arn:aws:kms:us-west-2:123456789012:key/12345678-1234-1234-1234-123456789012 **/
        KeyId: KeyIdType;
        /** The principal that is given permission to perform the operations that the grant
permits.

To specify the principal, use the Amazon Resource Name (ARN)
[http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html] of
an AWS principal. Valid AWS principals include AWS accounts (root), IAM users,
federated users, and assumed role users. For examples of the ARN syntax to use
for specifying a principal, see AWS Identity and Access Management (IAM)
[http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-iam] 
in the Example ARNs section of the AWS General Reference . **/
        GranteePrincipal: PrincipalIdType;
        /** The principal that is given permission to retire the grant by using RetireGrant 
operation.

To specify the principal, use the Amazon Resource Name (ARN)
[http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html] of
an AWS principal. Valid AWS principals include AWS accounts (root), IAM users,
federated users, and assumed role users. For examples of the ARN syntax to use
for specifying a principal, see AWS Identity and Access Management (IAM)
[http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-iam] 
in the Example ARNs section of the AWS General Reference . **/
        RetiringPrincipal?: PrincipalIdType;
        /** A list of operations that the grant permits. The list can contain any
combination of one or more of the following values: &amp;#42; Decrypt
 * Encrypt
 * GenerateDataKey
 * 
   GenerateDataKeyWithoutPlaintext
 * ReEncryptFrom
 * ReEncryptTo
 * CreateGrant
 * RetireGrant **/
        Operations?: GrantOperationList;
        /** The conditions under which the operations permitted by the grant are allowed.

You can use this value to allow the operations permitted by the grant only when
a specified encryption context is present. For more information, see Encryption
Context
[http://docs.aws.amazon.com/kms/latest/developerguide/encrypt-context.html] in
the AWS Key Management Service Developer Guide . **/
        Constraints?: GrantConstraints;
        /** A list of grant tokens.

For more information, go to Grant Tokens
[http://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#grant_token] 
in the AWS Key Management Service Developer Guide . **/
        GrantTokens?: GrantTokenList;
        /** A friendly name for identifying the grant. Use this value to prevent unintended
creation of duplicate grants when retrying this request.

When this value is absent, all CreateGrant requests result in a new grant with a
unique GrantId even if all the supplied parameters are identical. This can
result in unintended duplicates when you retry the CreateGrant request.

When this value is present, you can retry a CreateGrant request with identical
parameters; if the grant already exists, the original GrantId is returned
without creating a new grant. Note that the returned grant token is unique with
every CreateGrant request, even when a duplicate GrantId is returned. All grant
tokens obtained in this way can be used interchangeably. **/
        Name?: GrantNameType;
    }
    export interface CreateGrantResponse {
        /** The grant token.

For more information about using grant tokens, see Grant Tokens
[http://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#grant_token] 
in the AWS Key Management Service Developer Guide . **/
        GrantToken?: GrantTokenType;
        /** The unique identifier for the grant.

You can use the GrantId in a subsequent RetireGrant or RevokeGrant operation. **/
        GrantId?: GrantIdType;
    }
    export interface CreateKeyRequest {
        /** Policy to attach to the key. This is required and delegates back to the account.
The key is the root of trust. The policy size limit is 32 KiB (32768 bytes). **/
        Policy?: PolicyType;
        /** Description of the key. We recommend that you choose a description that helps
your customer decide whether the key is appropriate for a task. **/
        Description?: DescriptionType;
        /** Specifies the intended use of the key. Currently this defaults to
ENCRYPT/DECRYPT, and only symmetric encryption and decryption are supported. **/
        KeyUsage?: KeyUsageType;
    }
    export interface CreateKeyResponse {
        /** Metadata associated with the key. **/
        KeyMetadata?: KeyMetadata;
    }
    export interface DecryptRequest {
        /** Ciphertext to be decrypted. The blob includes metadata. **/
        CiphertextBlob: CiphertextType;
        /** The encryption context. If this was specified in the Encrypt function, it must
be specified here or the decryption operation will fail. For more information,
see Encryption Context
[http://docs.aws.amazon.com/kms/latest/developerguide/encrypt-context.html] . **/
        EncryptionContext?: EncryptionContextType;
        /** A list of grant tokens.

For more information, go to Grant Tokens
[http://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#grant_token] 
in the AWS Key Management Service Developer Guide . **/
        GrantTokens?: GrantTokenList;
    }
    export interface DecryptResponse {
        /** ARN of the key used to perform the decryption. This value is returned if no
errors are encountered during the operation. **/
        KeyId?: KeyIdType;
        /** Decrypted plaintext data. This value may not be returned if the customer master
key is not available or if you didn&#x27;t have permission to use it. **/
        Plaintext?: PlaintextType;
    }
    export interface DeleteAliasRequest {
        /** The alias to be deleted. The name must start with the word &quot;alias&quot; followed by a
forward slash (alias/). Aliases that begin with &quot;alias/AWS&quot; are reserved. **/
        AliasName: AliasNameType;
    }
    export interface DependencyTimeoutException {
        message?: ErrorMessageType;
    }
    export interface DescribeKeyRequest {
        /** A unique identifier for the customer master key. This value can be a globally
unique identifier, a fully specified ARN to either an alias or a key, or an
alias name prefixed by &quot;alias/&quot;. &amp;#42; Key ARN Example -
   arn:aws:kms:us-east-1:123456789012:key/12345678-1234-1234-1234-123456789012
 * Alias ARN Example -
   arn:aws:kms:us-east-1:123456789012:alias/MyAliasName
 * Globally Unique Key ID Example -
   12345678-1234-1234-1234-123456789012
 * Alias Name Example - alias/MyAliasName **/
        KeyId: KeyIdType;
        /** A list of grant tokens.

For more information, go to Grant Tokens
[http://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#grant_token] 
in the AWS Key Management Service Developer Guide . **/
        GrantTokens?: GrantTokenList;
    }
    export interface DescribeKeyResponse {
        /** Metadata associated with the key. **/
        KeyMetadata?: KeyMetadata;
    }
    export interface DisableKeyRequest {
        /** A unique identifier for the customer master key. This value can be a globally
unique identifier or the fully specified ARN to a key. &amp;#42; Key ARN Example -
   arn:aws:kms:us-east-1:123456789012:key/12345678-1234-1234-1234-123456789012
 * Globally Unique Key ID
   Example - 12345678-1234-1234-1234-123456789012 **/
        KeyId: KeyIdType;
    }
    export interface DisableKeyRotationRequest {
        /** A unique identifier for the customer master key. This value can be a globally
unique identifier or the fully specified ARN to a key. &amp;#42; Key ARN Example -
   arn:aws:kms:us-east-1:123456789012:key/12345678-1234-1234-1234-123456789012
 * Globally Unique Key ID
   Example - 12345678-1234-1234-1234-123456789012 **/
        KeyId: KeyIdType;
    }
    export interface DisabledException {
        message?: ErrorMessageType;
    }
    export interface EnableKeyRequest {
        /** A unique identifier for the customer master key. This value can be a globally
unique identifier or the fully specified ARN to a key. &amp;#42; Key ARN Example -
   arn:aws:kms:us-east-1:123456789012:key/12345678-1234-1234-1234-123456789012
 * Globally Unique Key ID
   Example - 12345678-1234-1234-1234-123456789012 **/
        KeyId: KeyIdType;
    }
    export interface EnableKeyRotationRequest {
        /** A unique identifier for the customer master key. This value can be a globally
unique identifier or the fully specified ARN to a key. &amp;#42; Key ARN Example -
   arn:aws:kms:us-east-1:123456789012:key/12345678-1234-1234-1234-123456789012
 * Globally Unique Key ID
   Example - 12345678-1234-1234-1234-123456789012 **/
        KeyId: KeyIdType;
    }
    export interface EncryptRequest {
        /** A unique identifier for the customer master key. This value can be a globally
unique identifier, a fully specified ARN to either an alias or a key, or an
alias name prefixed by &quot;alias/&quot;. &amp;#42; Key ARN Example -
   arn:aws:kms:us-east-1:123456789012:key/12345678-1234-1234-1234-123456789012
 * Alias ARN Example -
   arn:aws:kms:us-east-1:123456789012:alias/MyAliasName
 * Globally Unique Key ID Example -
   12345678-1234-1234-1234-123456789012
 * Alias Name Example - alias/MyAliasName **/
        KeyId: KeyIdType;
        /** Data to be encrypted. **/
        Plaintext: PlaintextType;
        /** Name/value pair that specifies the encryption context to be used for
authenticated encryption. If used here, the same value must be supplied to the 
Decrypt API or decryption will fail. For more information, see Encryption
Context
[http://docs.aws.amazon.com/kms/latest/developerguide/encrypt-context.html] . **/
        EncryptionContext?: EncryptionContextType;
        /** A list of grant tokens.

For more information, go to Grant Tokens
[http://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#grant_token] 
in the AWS Key Management Service Developer Guide . **/
        GrantTokens?: GrantTokenList;
    }
    export interface EncryptResponse {
        /** The encrypted plaintext. If you are using the CLI, the value is Base64 encoded.
Otherwise, it is not encoded. **/
        CiphertextBlob?: CiphertextType;
        /** The ID of the key used during encryption. **/
        KeyId?: KeyIdType;
    }
    export interface GenerateDataKeyRequest {
        /** A unique identifier for the customer master key. This value can be a globally
unique identifier, a fully specified ARN to either an alias or a key, or an
alias name prefixed by &quot;alias/&quot;. &amp;#42; Key ARN Example -
   arn:aws:kms:us-east-1:123456789012:key/12345678-1234-1234-1234-123456789012
 * Alias ARN Example -
   arn:aws:kms:us-east-1:123456789012:alias/MyAliasName
 * Globally Unique Key ID Example -
   12345678-1234-1234-1234-123456789012
 * Alias Name Example - alias/MyAliasName **/
        KeyId: KeyIdType;
        /** Name/value pair that contains additional data to be authenticated during the
encryption and decryption processes that use the key. This value is logged by
AWS CloudTrail to provide context around the data encrypted by the key. **/
        EncryptionContext?: EncryptionContextType;
        /** Integer that contains the number of bytes to generate. Common values are 128,
256, 512, and 1024. 1024 is the current limit. We recommend that you use the 
KeySpec parameter instead. **/
        NumberOfBytes?: NumberOfBytesType;
        /** Value that identifies the encryption algorithm and key size to generate a data
key for. Currently this can be AES_128 or AES_256. **/
        KeySpec?: DataKeySpec;
        /** A list of grant tokens.

For more information, go to Grant Tokens
[http://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#grant_token] 
in the AWS Key Management Service Developer Guide . **/
        GrantTokens?: GrantTokenList;
    }
    export interface GenerateDataKeyResponse {
        /** Ciphertext that contains the encrypted data key. You must store the blob and
enough information to reconstruct the encryption context so that the data
encrypted by using the key can later be decrypted. You must provide both the
ciphertext blob and the encryption context to the Decrypt API to recover the
plaintext data key and decrypt the object.

If you are using the CLI, the value is Base64 encoded. Otherwise, it is not
encoded. **/
        CiphertextBlob?: CiphertextType;
        /** Plaintext that contains the data key. Use this for encryption and decryption and
then remove it from memory as soon as possible. **/
        Plaintext?: PlaintextType;
        /** System generated unique identifier of the key to be used to decrypt the
encrypted copy of the data key. **/
        KeyId?: KeyIdType;
    }
    export interface GenerateDataKeyWithoutPlaintextRequest {
        /** A unique identifier for the customer master key. This value can be a globally
unique identifier, a fully specified ARN to either an alias or a key, or an
alias name prefixed by &quot;alias/&quot;. &amp;#42; Key ARN Example -
   arn:aws:kms:us-east-1:123456789012:key/12345678-1234-1234-1234-123456789012
 * Alias ARN Example -
   arn:aws:kms:us-east-1:123456789012:alias/MyAliasName
 * Globally Unique Key ID Example -
   12345678-1234-1234-1234-123456789012
 * Alias Name Example - alias/MyAliasName **/
        KeyId: KeyIdType;
        /** Name:value pair that contains additional data to be authenticated during the
encryption and decryption processes. **/
        EncryptionContext?: EncryptionContextType;
        /** Value that identifies the encryption algorithm and key size. Currently this can
be AES_128 or AES_256. **/
        KeySpec?: DataKeySpec;
        /** Integer that contains the number of bytes to generate. Common values are 128,
256, 512, 1024 and so on. We recommend that you use the KeySpec parameter
instead. **/
        NumberOfBytes?: NumberOfBytesType;
        /** A list of grant tokens.

For more information, go to Grant Tokens
[http://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#grant_token] 
in the AWS Key Management Service Developer Guide . **/
        GrantTokens?: GrantTokenList;
    }
    export interface GenerateDataKeyWithoutPlaintextResponse {
        /** Ciphertext that contains the wrapped data key. You must store the blob and
encryption context so that the key can be used in a future decrypt operation.

If you are using the CLI, the value is Base64 encoded. Otherwise, it is not
encoded. **/
        CiphertextBlob?: CiphertextType;
        /** System generated unique identifier of the key to be used to decrypt the
encrypted copy of the data key. **/
        KeyId?: KeyIdType;
    }
    export interface GenerateRandomRequest {
        /** Integer that contains the number of bytes to generate. Common values are 128,
256, 512, 1024 and so on. The current limit is 1024 bytes. **/
        NumberOfBytes?: NumberOfBytesType;
    }
    export interface GenerateRandomResponse {
        /** Plaintext that contains the unpredictable byte string. **/
        Plaintext?: PlaintextType;
    }
    export interface GetKeyPolicyRequest {
        /** A unique identifier for the customer master key. This value can be a globally
unique identifier or the fully specified ARN to a key. &amp;#42; Key ARN Example -
   arn:aws:kms:us-east-1:123456789012:key/12345678-1234-1234-1234-123456789012
 * Globally Unique Key ID
   Example - 12345678-1234-1234-1234-123456789012 **/
        KeyId: KeyIdType;
        /** String that contains the name of the policy. Currently, this must be &quot;default&quot;.
Policy names can be discovered by calling ListKeyPolicies . **/
        PolicyName: PolicyNameType;
    }
    export interface GetKeyPolicyResponse {
        /** A policy document in JSON format. **/
        Policy?: PolicyType;
    }
    export interface GetKeyRotationStatusRequest {
        /** A unique identifier for the customer master key. This value can be a globally
unique identifier or the fully specified ARN to a key. &amp;#42; Key ARN Example -
   arn:aws:kms:us-east-1:123456789012:key/12345678-1234-1234-1234-123456789012
 * Globally Unique Key ID
   Example - 12345678-1234-1234-1234-123456789012 **/
        KeyId: KeyIdType;
    }
    export interface GetKeyRotationStatusResponse {
        /** A Boolean value that specifies whether key rotation is enabled. **/
        KeyRotationEnabled?: BooleanType;
    }
    export interface GrantConstraints {
        /** Contains a list of key-value pairs, a subset of which must be present in the
encryption context of a subsequent operation permitted by the grant. When a
subsequent operation permitted by the grant includes an encryption context that
matches this list or is a subset of this list, the grant allows the operation.
Otherwise, the operation is not allowed. **/
        EncryptionContextSubset?: EncryptionContextType;
        /** Contains a list of key-value pairs that must be present in the encryption
context of a subsequent operation permitted by the grant. When a subsequent
operation permitted by the grant includes an encryption context that matches
this list, the grant allows the operation. Otherwise, the operation is not
allowed. **/
        EncryptionContextEquals?: EncryptionContextType;
    }
    export interface GrantListEntry {
        /** The unique identifier for the customer master key (CMK) to which the grant
applies. **/
        KeyId?: KeyIdType;
        /** The unique identifier for the grant. **/
        GrantId?: GrantIdType;
        /** The friendly name that identifies the grant. If a name was provided in the 
CreateGrant request, that name is returned. Otherwise this value is null. **/
        Name?: GrantNameType;
        /** The date and time when the grant was created. **/
        CreationDate?: DateType;
        /** The principal that receives the grant&#x27;s permissions. **/
        GranteePrincipal?: PrincipalIdType;
        /** The principal that can retire the grant. **/
        RetiringPrincipal?: PrincipalIdType;
        /** The AWS account under which the grant was issued. **/
        IssuingAccount?: PrincipalIdType;
        /** The list of operations permitted by the grant. **/
        Operations?: GrantOperationList;
        /** The conditions under which the grant&#x27;s operations are allowed. **/
        Constraints?: GrantConstraints;
    }
    export interface InvalidAliasNameException {
        message?: ErrorMessageType;
    }
    export interface InvalidArnException {
        message?: ErrorMessageType;
    }
    export interface InvalidCiphertextException {
        message?: ErrorMessageType;
    }
    export interface InvalidGrantIdException {
        message?: ErrorMessageType;
    }
    export interface InvalidGrantTokenException {
        message?: ErrorMessageType;
    }
    export interface InvalidKeyUsageException {
        message?: ErrorMessageType;
    }
    export interface InvalidMarkerException {
        message?: ErrorMessageType;
    }
    export interface KMSInternalException {
        message?: ErrorMessageType;
    }
    export interface KMSInvalidStateException {
        message?: ErrorMessageType;
    }
    export interface KeyListEntry {
        /** Unique identifier of the key. **/
        KeyId?: KeyIdType;
        /** ARN of the key. **/
        KeyArn?: ArnType;
    }
    export interface KeyMetadata {
        /** The twelve-digit account ID of the AWS account that owns the key. **/
        AWSAccountId?: AWSAccountIdType;
        /** The globally unique identifier for the key. **/
        KeyId: KeyIdType;
        /** The Amazon Resource Name (ARN) of the key. For examples, see AWS Key Management
Service (AWS KMS)
[http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-kms] 
in the Example ARNs section of the AWS General Reference . **/
        Arn?: ArnType;
        /** The date and time when the key was created. **/
        CreationDate?: DateType;
        /** Specifies whether the key is enabled. When KeyState is Enabled this value is
true, otherwise it is false. **/
        Enabled?: BooleanType;
        /** The friendly description of the key. **/
        Description?: DescriptionType;
        /** The cryptographic operations for which you can use the key. Currently the only
allowed value is ENCRYPT_DECRYPT , which means you can use the key for the 
Encrypt and Decrypt operations. **/
        KeyUsage?: KeyUsageType;
        /** The state of the customer master key (CMK).

For more information about how key state affects the use of a CMK, go to How Key
State Affects the Use of a Customer Master Key
[http://docs.aws.amazon.com/kms/latest/developerguide/key-state.html] in the AWS
Key Management Service Developer Guide . **/
        KeyState?: KeyState;
        /** The date and time after which AWS KMS deletes the customer master key (CMK).
This value is present only when KeyState is PendingDeletion , otherwise this
value is null. **/
        DeletionDate?: DateType;
    }
    export interface KeyUnavailableException {
        message?: ErrorMessageType;
    }
    export interface LimitExceededException {
        message?: ErrorMessageType;
    }
    export interface ListAliasesRequest {
        /** When paginating results, specify the maximum number of items to return in the
response. If additional items exist beyond the number you specify, the Truncated 
element in the response is set to true.

This value is optional. If you include a value, it must be between 1 and 100,
inclusive. If you do not include a value, it defaults to 50. **/
        Limit?: LimitType;
        /** Use this parameter only when paginating results and only in a subsequent request
after you&#x27;ve received a response with truncated results. Set it to the value of 
NextMarker from the response you just received. **/
        Marker?: MarkerType;
    }
    export interface ListAliasesResponse {
        /** A list of key aliases in the user&#x27;s account. **/
        Aliases?: AliasList;
        /** When Truncated is true, this value is present and contains the value to use for
the Marker parameter in a subsequent pagination request. **/
        NextMarker?: MarkerType;
        /** A flag that indicates whether there are more items in the list. If your results
were truncated, you can use the Marker parameter to make a subsequent pagination
request to retrieve more items in the list. **/
        Truncated?: BooleanType;
    }
    export interface ListGrantsRequest {
        /** When paginating results, specify the maximum number of items to return in the
response. If additional items exist beyond the number you specify, the Truncated 
element in the response is set to true.

This value is optional. If you include a value, it must be between 1 and 100,
inclusive. If you do not include a value, it defaults to 50. **/
        Limit?: LimitType;
        /** Use this parameter only when paginating results and only in a subsequent request
after you&#x27;ve received a response with truncated results. Set it to the value of 
NextMarker from the response you just received. **/
        Marker?: MarkerType;
        /** A unique identifier for the customer master key. This value can be a globally
unique identifier or the fully specified ARN to a key. &amp;#42; Key ARN Example -
   arn:aws:kms:us-east-1:123456789012:key/12345678-1234-1234-1234-123456789012
 * Globally Unique Key ID
   Example - 12345678-1234-1234-1234-123456789012 **/
        KeyId: KeyIdType;
    }
    export interface ListGrantsResponse {
        /** A list of grants. **/
        Grants?: GrantList;
        /** When Truncated is true, this value is present and contains the value to use for
the Marker parameter in a subsequent pagination request. **/
        NextMarker?: MarkerType;
        /** A flag that indicates whether there are more items in the list. If your results
were truncated, you can use the Marker parameter to make a subsequent pagination
request to retrieve more items in the list. **/
        Truncated?: BooleanType;
    }
    export interface ListKeyPoliciesRequest {
        /** A unique identifier for the customer master key. This value can be a globally
unique identifier, a fully specified ARN to either an alias or a key, or an
alias name prefixed by &quot;alias/&quot;. &amp;#42; Key ARN Example -
   arn:aws:kms:us-east-1:123456789012:key/12345678-1234-1234-1234-123456789012
 * Alias ARN Example -
   arn:aws:kms:us-east-1:123456789012:alias/MyAliasName
 * Globally Unique Key ID Example -
   12345678-1234-1234-1234-123456789012
 * Alias Name Example - alias/MyAliasName **/
        KeyId: KeyIdType;
        /** When paginating results, specify the maximum number of items to return in the
response. If additional items exist beyond the number you specify, the Truncated 
element in the response is set to true.

This value is optional. If you include a value, it must be between 1 and 1000,
inclusive. If you do not include a value, it defaults to 100.

Currently only 1 policy can be attached to a key. **/
        Limit?: LimitType;
        /** Use this parameter only when paginating results and only in a subsequent request
after you&#x27;ve received a response with truncated results. Set it to the value of 
NextMarker from the response you just received. **/
        Marker?: MarkerType;
    }
    export interface ListKeyPoliciesResponse {
        /** A list of policy names. Currently, there is only one policy and it is named
&quot;Default&quot;. **/
        PolicyNames?: PolicyNameList;
        /** When Truncated is true, this value is present and contains the value to use for
the Marker parameter in a subsequent pagination request. **/
        NextMarker?: MarkerType;
        /** A flag that indicates whether there are more items in the list. If your results
were truncated, you can use the Marker parameter to make a subsequent pagination
request to retrieve more items in the list. **/
        Truncated?: BooleanType;
    }
    export interface ListKeysRequest {
        /** When paginating results, specify the maximum number of items to return in the
response. If additional items exist beyond the number you specify, the Truncated 
element in the response is set to true.

This value is optional. If you include a value, it must be between 1 and 1000,
inclusive. If you do not include a value, it defaults to 100. **/
        Limit?: LimitType;
        /** Use this parameter only when paginating results and only in a subsequent request
after you&#x27;ve received a response with truncated results. Set it to the value of 
NextMarker from the response you just received. **/
        Marker?: MarkerType;
    }
    export interface ListKeysResponse {
        /** A list of keys. **/
        Keys?: KeyList;
        /** When Truncated is true, this value is present and contains the value to use for
the Marker parameter in a subsequent pagination request. **/
        NextMarker?: MarkerType;
        /** A flag that indicates whether there are more items in the list. If your results
were truncated, you can use the Marker parameter to make a subsequent pagination
request to retrieve more items in the list. **/
        Truncated?: BooleanType;
    }
    export interface ListRetirableGrantsRequest {
        /** When paginating results, specify the maximum number of items to return in the
response. If additional items exist beyond the number you specify, the Truncated 
element in the response is set to true.

This value is optional. If you include a value, it must be between 1 and 100,
inclusive. If you do not include a value, it defaults to 50. **/
        Limit?: LimitType;
        /** Use this parameter only when paginating results and only in a subsequent request
after you&#x27;ve received a response with truncated results. Set it to the value of 
NextMarker from the response you just received. **/
        Marker?: MarkerType;
        /** The retiring principal for which to list grants.

To specify the retiring principal, use the Amazon Resource Name (ARN)
[http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html] of
an AWS principal. Valid AWS principals include AWS accounts (root), IAM users,
federated users, and assumed role users. For examples of the ARN syntax for
specifying a principal, go to AWS Identity and Access Management (IAM)
[http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-iam] 
in the Example ARNs section of the Amazon Web Services General Reference . **/
        RetiringPrincipal: PrincipalIdType;
    }
    export interface MalformedPolicyDocumentException {
        message?: ErrorMessageType;
    }
    export interface NotFoundException {
        message?: ErrorMessageType;
    }
    export interface PutKeyPolicyRequest {
        /** A unique identifier for the customer master key. This value can be a globally
unique identifier or the fully specified ARN to a key. &amp;#42; Key ARN Example -
   arn:aws:kms:us-east-1:123456789012:key/12345678-1234-1234-1234-123456789012
 * Globally Unique Key ID
   Example - 12345678-1234-1234-1234-123456789012 **/
        KeyId: KeyIdType;
        /** Name of the policy to be attached. Currently, the only supported name is
&quot;default&quot;. **/
        PolicyName: PolicyNameType;
        /** The policy to attach to the key. This is required and delegates back to the
account. The key is the root of trust. The policy size limit is 32 KiB (32768
bytes). **/
        Policy: PolicyType;
    }
    export interface ReEncryptRequest {
        /** Ciphertext of the data to re-encrypt. **/
        CiphertextBlob: CiphertextType;
        /** Encryption context used to encrypt and decrypt the data specified in the 
CiphertextBlob parameter. **/
        SourceEncryptionContext?: EncryptionContextType;
        /** A unique identifier for the customer master key used to re-encrypt the data.
This value can be a globally unique identifier, a fully specified ARN to either
an alias or a key, or an alias name prefixed by &quot;alias/&quot;. &amp;#42; Key ARN Example -
   arn:aws:kms:us-east-1:123456789012:key/12345678-1234-1234-1234-123456789012
 * Alias ARN Example -
   arn:aws:kms:us-east-1:123456789012:alias/MyAliasName
 * Globally Unique Key
   ID Example - 12345678-1234-1234-1234-123456789012
 * Alias Name Example -
   alias/MyAliasName **/
        DestinationKeyId: KeyIdType;
        /** Encryption context to be used when the data is re-encrypted. **/
        DestinationEncryptionContext?: EncryptionContextType;
        /** A list of grant tokens.

For more information, go to Grant Tokens
[http://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#grant_token] 
in the AWS Key Management Service Developer Guide . **/
        GrantTokens?: GrantTokenList;
    }
    export interface ReEncryptResponse {
        /** The re-encrypted data. If you are using the CLI, the value is Base64 encoded.
Otherwise, it is not encoded. **/
        CiphertextBlob?: CiphertextType;
        /** Unique identifier of the key used to originally encrypt the data. **/
        SourceKeyId?: KeyIdType;
        /** Unique identifier of the key used to re-encrypt the data. **/
        KeyId?: KeyIdType;
    }
    export interface RetireGrantRequest {
        /** Token that identifies the grant to be retired. **/
        GrantToken?: GrantTokenType;
        /** A unique identifier for the customer master key associated with the grant. This
value can be a globally unique identifier or a fully specified ARN of the key. &amp;#42; 
   Key ARN Example -
   arn:aws:kms:us-east-1:123456789012:key/12345678-1234-1234-1234-123456789012
 * 
   Globally Unique Key ID Example - 12345678-1234-1234-1234-123456789012 **/
        KeyId?: KeyIdType;
        /** Unique identifier of the grant to be retired. The grant ID is returned by the 
CreateGrant function. &amp;#42; Grant ID Example -
   0123456789012345678901234567890123456789012345678901234567890123 **/
        GrantId?: GrantIdType;
    }
    export interface RevokeGrantRequest {
        /** A unique identifier for the customer master key associated with the grant. This
value can be a globally unique identifier or the fully specified ARN to a key. &amp;#42; 
   Key ARN Example -
   arn:aws:kms:us-east-1:123456789012:key/12345678-1234-1234-1234-123456789012
 * 
   Globally Unique Key ID Example - 12345678-1234-1234-1234-123456789012 **/
        KeyId: KeyIdType;
        /** Identifier of the grant to be revoked. **/
        GrantId: GrantIdType;
    }
    export interface ScheduleKeyDeletionRequest {
        /** The unique identifier for the customer master key (CMK) to delete.

To specify this value, use the unique key ID or the Amazon Resource Name (ARN)
of the CMK. Examples: &amp;#42; Unique key ID: 1234abcd-12ab-34cd-56ef-1234567890ab
 * Key ARN:
   arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab



To obtain the unique key ID and key ARN for a given CMK, use ListKeys or 
DescribeKey . **/
        KeyId: KeyIdType;
        /** The waiting period, specified in number of days. After the waiting period ends,
AWS KMS deletes the customer master key (CMK).

This value is optional. If you include a value, it must be between 7 and 30,
inclusive. If you do not include a value, it defaults to 30. **/
        PendingWindowInDays?: PendingWindowInDaysType;
    }
    export interface ScheduleKeyDeletionResponse {
        /** The unique identifier of the customer master key (CMK) for which deletion is
scheduled. **/
        KeyId?: KeyIdType;
        /** The date and time after which AWS KMS deletes the customer master key (CMK). **/
        DeletionDate?: DateType;
    }
    export interface UnsupportedOperationException {
        message?: ErrorMessageType;
    }
    export interface UpdateAliasRequest {
        /** String that contains the name of the alias to be modified. The name must start
with the word &quot;alias&quot; followed by a forward slash (alias/). Aliases that begin
with &quot;alias/aws&quot; are reserved. **/
        AliasName: AliasNameType;
        /** Unique identifier of the customer master key to be mapped to the alias. This
value can be a globally unique identifier or the fully specified ARN of a key. &amp;#42; 
   Key ARN Example -
   arn:aws:kms:us-east-1:123456789012:key/12345678-1234-1234-1234-123456789012
 * 
   Globally Unique Key ID Example - 12345678-1234-1234-1234-123456789012



You can call ListAliases to verify that the alias is mapped to the correct 
TargetKeyId . **/
        TargetKeyId: KeyIdType;
    }
    export interface UpdateKeyDescriptionRequest {
        /** A unique identifier for the customer master key. This value can be a globally
unique identifier or the fully specified ARN to a key. &amp;#42; Key ARN Example -
   arn:aws:kms:us-east-1:123456789012:key/12345678-1234-1234-1234-123456789012
 * Globally Unique Key ID
   Example - 12345678-1234-1234-1234-123456789012 **/
        KeyId: KeyIdType;
        /** New description for the key. **/
        Description: DescriptionType;
    }
  }
}
