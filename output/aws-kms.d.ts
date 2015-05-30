// DO NOT EDIT!
//
declare module "aws-sdk" {
    export class KMS {
      constructor(options?: any);
      createAlias(params: KMSCreateAliasRequest, callback: (err: KMSDependencyTimeoutException|KMSAlreadyExistsException|KMSNotFoundException|KMSInvalidAliasNameException|KMSKMSInternalException|KMSLimitExceededException|any, data: any) => void): void;
      createGrant(params: KMSCreateGrantRequest, callback: (err: KMSNotFoundException|KMSDisabledException|KMSDependencyTimeoutException|KMSInvalidArnException|KMSKMSInternalException|KMSInvalidGrantTokenException|KMSLimitExceededException|any, data: KMSCreateGrantResponse|any) => void): void;
      createKey(params: KMSCreateKeyRequest, callback: (err: KMSMalformedPolicyDocumentException|KMSDependencyTimeoutException|KMSInvalidArnException|KMSUnsupportedOperationException|KMSKMSInternalException|KMSLimitExceededException|any, data: KMSCreateKeyResponse|any) => void): void;
      decrypt(params: KMSDecryptRequest, callback: (err: KMSNotFoundException|KMSDisabledException|KMSInvalidCiphertextException|KMSKeyUnavailableException|KMSDependencyTimeoutException|KMSInvalidGrantTokenException|KMSKMSInternalException|any, data: KMSDecryptResponse|any) => void): void;
      deleteAlias(params: KMSDeleteAliasRequest, callback: (err: KMSDependencyTimeoutException|KMSNotFoundException|KMSKMSInternalException|any, data: any) => void): void;
      describeKey(params: KMSDescribeKeyRequest, callback: (err: KMSNotFoundException|KMSInvalidArnException|KMSDependencyTimeoutException|KMSKMSInternalException|any, data: KMSDescribeKeyResponse|any) => void): void;
      disableKey(params: KMSDisableKeyRequest, callback: (err: KMSNotFoundException|KMSInvalidArnException|KMSDependencyTimeoutException|KMSKMSInternalException|any, data: any) => void): void;
      disableKeyRotation(params: KMSDisableKeyRotationRequest, callback: (err: KMSNotFoundException|KMSDisabledException|KMSInvalidArnException|KMSDependencyTimeoutException|KMSKMSInternalException|any, data: any) => void): void;
      enableKey(params: KMSEnableKeyRequest, callback: (err: KMSNotFoundException|KMSInvalidArnException|KMSDependencyTimeoutException|KMSKMSInternalException|KMSLimitExceededException|any, data: any) => void): void;
      enableKeyRotation(params: KMSEnableKeyRotationRequest, callback: (err: KMSNotFoundException|KMSDisabledException|KMSInvalidArnException|KMSDependencyTimeoutException|KMSKMSInternalException|any, data: any) => void): void;
      encrypt(params: KMSEncryptRequest, callback: (err: KMSNotFoundException|KMSDisabledException|KMSKeyUnavailableException|KMSDependencyTimeoutException|KMSInvalidKeyUsageException|KMSInvalidGrantTokenException|KMSKMSInternalException|any, data: KMSEncryptResponse|any) => void): void;
      generateDataKey(params: KMSGenerateDataKeyRequest, callback: (err: KMSNotFoundException|KMSDisabledException|KMSKeyUnavailableException|KMSDependencyTimeoutException|KMSInvalidKeyUsageException|KMSInvalidGrantTokenException|KMSKMSInternalException|any, data: KMSGenerateDataKeyResponse|any) => void): void;
      generateDataKeyWithoutPlaintext(params: KMSGenerateDataKeyWithoutPlaintextRequest, callback: (err: KMSNotFoundException|KMSDisabledException|KMSKeyUnavailableException|KMSDependencyTimeoutException|KMSInvalidKeyUsageException|KMSInvalidGrantTokenException|KMSKMSInternalException|any, data: KMSGenerateDataKeyWithoutPlaintextResponse|any) => void): void;
      generateRandom(params: KMSGenerateRandomRequest, callback: (err: KMSDependencyTimeoutException|KMSKMSInternalException|any, data: KMSGenerateRandomResponse|any) => void): void;
      getKeyPolicy(params: KMSGetKeyPolicyRequest, callback: (err: KMSNotFoundException|KMSInvalidArnException|KMSDependencyTimeoutException|KMSKMSInternalException|any, data: KMSGetKeyPolicyResponse|any) => void): void;
      getKeyRotationStatus(params: KMSGetKeyRotationStatusRequest, callback: (err: KMSNotFoundException|KMSInvalidArnException|KMSDependencyTimeoutException|KMSKMSInternalException|any, data: KMSGetKeyRotationStatusResponse|any) => void): void;
      listAliases(params: KMSListAliasesRequest, callback: (err: KMSDependencyTimeoutException|KMSInvalidMarkerException|KMSKMSInternalException|any, data: KMSListAliasesResponse|any) => void): void;
      listGrants(params: KMSListGrantsRequest, callback: (err: KMSDependencyTimeoutException|KMSInvalidMarkerException|KMSInvalidArnException|KMSKMSInternalException|any, data: KMSListGrantsResponse|any) => void): void;
      listKeyPolicies(params: KMSListKeyPoliciesRequest, callback: (err: KMSNotFoundException|KMSInvalidArnException|KMSDependencyTimeoutException|KMSKMSInternalException|any, data: KMSListKeyPoliciesResponse|any) => void): void;
      listKeys(params: KMSListKeysRequest, callback: (err: KMSDependencyTimeoutException|KMSKMSInternalException|any, data: KMSListKeysResponse|any) => void): void;
      putKeyPolicy(params: KMSPutKeyPolicyRequest, callback: (err: KMSNotFoundException|KMSInvalidArnException|KMSMalformedPolicyDocumentException|KMSDependencyTimeoutException|KMSInvalidArnException|KMSUnsupportedOperationException|KMSKMSInternalException|KMSLimitExceededException|any, data: any) => void): void;
      reEncrypt(params: KMSReEncryptRequest, callback: (err: KMSNotFoundException|KMSDisabledException|KMSInvalidCiphertextException|KMSKeyUnavailableException|KMSDependencyTimeoutException|KMSInvalidKeyUsageException|KMSInvalidGrantTokenException|KMSKMSInternalException|any, data: KMSReEncryptResponse|any) => void): void;
      retireGrant(params: KMSRetireGrantRequest, callback: (err: KMSInvalidGrantTokenException|KMSNotFoundException|KMSDependencyTimeoutException|KMSKMSInternalException|any, data: any) => void): void;
      revokeGrant(params: KMSRevokeGrantRequest, callback: (err: KMSNotFoundException|KMSDependencyTimeoutException|KMSInvalidArnException|KMSKMSInternalException|any, data: any) => void): void;
      updateAlias(params: KMSUpdateAliasRequest, callback: (err: KMSDependencyTimeoutException|KMSNotFoundException|KMSKMSInternalException|any, data: any) => void): void;
      updateKeyDescription(params: KMSUpdateKeyDescriptionRequest, callback: (err: KMSNotFoundException|KMSInvalidArnException|KMSDependencyTimeoutException|KMSKMSInternalException|any, data: any) => void): void;
    }

    export type KMSAWSAccountIdType = string;
    export type KMSAliasList = Array<KMSAliasListEntry>;
    export interface KMSAliasListEntry {
        AliasName?: KMSAliasNameType;
        AliasArn?: KMSArnType;
        TargetKeyId?: KMSKeyIdType;
    }

    export type KMSAliasNameType = string; // pattern: "^[a-zA-Z0-9:/_-]+$"
    export interface KMSAlreadyExistsException {
        message?: KMSErrorMessageType;
    }

    export type KMSArnType = string;
    export type KMSBooleanType = boolean;
    export type KMSCiphertextType = any; // not really - it was 'blob' instead - must fix this one
    export interface KMSCreateAliasRequest {
        AliasName: KMSAliasNameType;
        TargetKeyId: KMSKeyIdType;
    }

    export interface KMSCreateGrantRequest {
        KeyId: KMSKeyIdType;
        GranteePrincipal: KMSPrincipalIdType;
        RetiringPrincipal?: KMSPrincipalIdType;
        Operations?: KMSGrantOperationList;
        Constraints?: KMSGrantConstraints;
        GrantTokens?: KMSGrantTokenList;
    }

    export interface KMSCreateGrantResponse {
        GrantToken?: KMSGrantTokenType;
        GrantId?: KMSGrantIdType;
    }

    export interface KMSCreateKeyRequest {
        Policy?: KMSPolicyType;
        Description?: KMSDescriptionType;
        KeyUsage?: KMSKeyUsageType;
    }

    export interface KMSCreateKeyResponse {
        KeyMetadata?: KMSKeyMetadata;
    }

    export type KMSDataKeySpec = string;
    export type KMSDateType = number;
    export interface KMSDecryptRequest {
        CiphertextBlob: KMSCiphertextType;
        EncryptionContext?: KMSEncryptionContextType;
        GrantTokens?: KMSGrantTokenList;
    }

    export interface KMSDecryptResponse {
        KeyId?: KMSKeyIdType;
        Plaintext?: KMSPlaintextType;
    }

    export interface KMSDeleteAliasRequest {
        AliasName: KMSAliasNameType;
    }

    export interface KMSDependencyTimeoutException {
        message?: KMSErrorMessageType;
    }

    export interface KMSDescribeKeyRequest {
        KeyId: KMSKeyIdType;
    }

    export interface KMSDescribeKeyResponse {
        KeyMetadata?: KMSKeyMetadata;
    }

    export type KMSDescriptionType = string;
    export interface KMSDisableKeyRequest {
        KeyId: KMSKeyIdType;
    }

    export interface KMSDisableKeyRotationRequest {
        KeyId: KMSKeyIdType;
    }

    export interface KMSDisabledException {
        message?: KMSErrorMessageType;
    }

    export interface KMSEnableKeyRequest {
        KeyId: KMSKeyIdType;
    }

    export interface KMSEnableKeyRotationRequest {
        KeyId: KMSKeyIdType;
    }

    export interface KMSEncryptRequest {
        KeyId: KMSKeyIdType;
        Plaintext: KMSPlaintextType;
        EncryptionContext?: KMSEncryptionContextType;
        GrantTokens?: KMSGrantTokenList;
    }

    export interface KMSEncryptResponse {
        CiphertextBlob?: KMSCiphertextType;
        KeyId?: KMSKeyIdType;
    }

    export type KMSEncryptionContextKey = string;
    export type KMSEncryptionContextType = any; // not really - it was 'map' instead - must fix this one
    export type KMSEncryptionContextValue = string;
    export type KMSErrorMessageType = string;
    export interface KMSGenerateDataKeyRequest {
        KeyId: KMSKeyIdType;
        EncryptionContext?: KMSEncryptionContextType;
        NumberOfBytes?: KMSNumberOfBytesType;
        KeySpec?: KMSDataKeySpec;
        GrantTokens?: KMSGrantTokenList;
    }

    export interface KMSGenerateDataKeyResponse {
        CiphertextBlob?: KMSCiphertextType;
        Plaintext?: KMSPlaintextType;
        KeyId?: KMSKeyIdType;
    }

    export interface KMSGenerateDataKeyWithoutPlaintextRequest {
        KeyId: KMSKeyIdType;
        EncryptionContext?: KMSEncryptionContextType;
        KeySpec?: KMSDataKeySpec;
        NumberOfBytes?: KMSNumberOfBytesType;
        GrantTokens?: KMSGrantTokenList;
    }

    export interface KMSGenerateDataKeyWithoutPlaintextResponse {
        CiphertextBlob?: KMSCiphertextType;
        KeyId?: KMSKeyIdType;
    }

    export interface KMSGenerateRandomRequest {
        NumberOfBytes?: KMSNumberOfBytesType;
    }

    export interface KMSGenerateRandomResponse {
        Plaintext?: KMSPlaintextType;
    }

    export interface KMSGetKeyPolicyRequest {
        KeyId: KMSKeyIdType;
        PolicyName: KMSPolicyNameType;
    }

    export interface KMSGetKeyPolicyResponse {
        Policy?: KMSPolicyType;
    }

    export interface KMSGetKeyRotationStatusRequest {
        KeyId: KMSKeyIdType;
    }

    export interface KMSGetKeyRotationStatusResponse {
        KeyRotationEnabled?: KMSBooleanType;
    }

    export interface KMSGrantConstraints {
        EncryptionContextSubset?: KMSEncryptionContextType;
        EncryptionContextEquals?: KMSEncryptionContextType;
    }

    export type KMSGrantIdType = string;
    export type KMSGrantList = Array<KMSGrantListEntry>;
    export interface KMSGrantListEntry {
        GrantId?: KMSGrantIdType;
        GranteePrincipal?: KMSPrincipalIdType;
        RetiringPrincipal?: KMSPrincipalIdType;
        IssuingAccount?: KMSPrincipalIdType;
        Operations?: KMSGrantOperationList;
        Constraints?: KMSGrantConstraints;
    }

    export type KMSGrantOperation = string;
    export type KMSGrantOperationList = Array<KMSGrantOperation>;
    export type KMSGrantTokenList = Array<KMSGrantTokenType>; // max: 10
    export type KMSGrantTokenType = string;
    export interface KMSInvalidAliasNameException {
        message?: KMSErrorMessageType;
    }

    export interface KMSInvalidArnException {
        message?: KMSErrorMessageType;
    }

    export interface KMSInvalidCiphertextException {
        message?: KMSErrorMessageType;
    }

    export interface KMSInvalidGrantTokenException {
        message?: KMSErrorMessageType;
    }

    export interface KMSInvalidKeyUsageException {
        message?: KMSErrorMessageType;
    }

    export interface KMSInvalidMarkerException {
        message?: KMSErrorMessageType;
    }

    export interface KMSKMSInternalException {
        message?: KMSErrorMessageType;
    }

    export type KMSKeyIdType = string;
    export type KMSKeyList = Array<KMSKeyListEntry>;
    export interface KMSKeyListEntry {
        KeyId?: KMSKeyIdType;
        KeyArn?: KMSArnType;
    }

    export interface KMSKeyMetadata {
        AWSAccountId?: KMSAWSAccountIdType;
        KeyId: KMSKeyIdType;
        Arn?: KMSArnType;
        CreationDate?: KMSDateType;
        Enabled?: KMSBooleanType;
        Description?: KMSDescriptionType;
        KeyUsage?: KMSKeyUsageType;
    }

    export interface KMSKeyUnavailableException {
        message?: KMSErrorMessageType;
    }

    export type KMSKeyUsageType = string;
    export interface KMSLimitExceededException {
        message?: KMSErrorMessageType;
    }

    export type KMSLimitType = number;
    export interface KMSListAliasesRequest {
        Limit?: KMSLimitType;
        Marker?: KMSMarkerType;
    }

    export interface KMSListAliasesResponse {
        Aliases?: KMSAliasList;
        NextMarker?: KMSMarkerType;
        Truncated?: KMSBooleanType;
    }

    export interface KMSListGrantsRequest {
        KeyId: KMSKeyIdType;
        Limit?: KMSLimitType;
        Marker?: KMSMarkerType;
    }

    export interface KMSListGrantsResponse {
        Grants?: KMSGrantList;
        NextMarker?: KMSMarkerType;
        Truncated?: KMSBooleanType;
    }

    export interface KMSListKeyPoliciesRequest {
        KeyId: KMSKeyIdType;
        Limit?: KMSLimitType;
        Marker?: KMSMarkerType;
    }

    export interface KMSListKeyPoliciesResponse {
        PolicyNames?: KMSPolicyNameList;
        NextMarker?: KMSMarkerType;
        Truncated?: KMSBooleanType;
    }

    export interface KMSListKeysRequest {
        Limit?: KMSLimitType;
        Marker?: KMSMarkerType;
    }

    export interface KMSListKeysResponse {
        Keys?: KMSKeyList;
        NextMarker?: KMSMarkerType;
        Truncated?: KMSBooleanType;
    }

    export interface KMSMalformedPolicyDocumentException {
        message?: KMSErrorMessageType;
    }

    export type KMSMarkerType = string; // pattern: "[\u0020-\u00FF]*"
    export interface KMSNotFoundException {
        message?: KMSErrorMessageType;
    }

    export type KMSNumberOfBytesType = number;
    export type KMSPlaintextType = any; // not really - it was 'blob' instead - must fix this one
    export type KMSPolicyNameList = Array<KMSPolicyNameType>;
    export type KMSPolicyNameType = string; // pattern: "[\w]+"
    export type KMSPolicyType = string; // pattern: "[\u0009\u000A\u000D\u0020-\u00FF]+"
    export type KMSPrincipalIdType = string;
    export interface KMSPutKeyPolicyRequest {
        KeyId: KMSKeyIdType;
        PolicyName: KMSPolicyNameType;
        Policy: KMSPolicyType;
    }

    export interface KMSReEncryptRequest {
        CiphertextBlob: KMSCiphertextType;
        SourceEncryptionContext?: KMSEncryptionContextType;
        DestinationKeyId: KMSKeyIdType;
        DestinationEncryptionContext?: KMSEncryptionContextType;
        GrantTokens?: KMSGrantTokenList;
    }

    export interface KMSReEncryptResponse {
        CiphertextBlob?: KMSCiphertextType;
        SourceKeyId?: KMSKeyIdType;
        KeyId?: KMSKeyIdType;
    }

    export interface KMSRetireGrantRequest {
        GrantToken?: KMSGrantTokenType;
        KeyId?: KMSKeyIdType;
        GrantId?: KMSGrantIdType;
    }

    export interface KMSRevokeGrantRequest {
        KeyId: KMSKeyIdType;
        GrantId: KMSGrantIdType;
    }

    export interface KMSUnsupportedOperationException {
        message?: KMSErrorMessageType;
    }

    export interface KMSUpdateAliasRequest {
        AliasName: KMSAliasNameType;
        TargetKeyId: KMSKeyIdType;
    }

    export interface KMSUpdateKeyDescriptionRequest {
        KeyId: KMSKeyIdType;
        Description: KMSDescriptionType;
    }

}
