// Type definitions for aws-sdk - AWS Key Management Service
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

///<reference path="./aws-sdk-common.d.ts" />

declare module "aws-sdk" {

    /*
     * apiVersion: 2014-11-01
     * endpointPrefix: kms
     * serviceAbbreviation: KMS
     * signatureVersion: v4
     * protocol: json
     */
    export class KMS extends Service {
      constructor(options?: any);
      endpoint: Endpoint;
      cancelKeyDeletion(params: KMS.CancelKeyDeletionRequest, callback?: (err: KMS.NotFoundException|KMS.InvalidArnException|KMS.DependencyTimeoutException|KMS.KMSInternalException|KMS.KMSInvalidStateException|any, data: KMS.CancelKeyDeletionResponse|any) => void): Request;
      createAlias(params: KMS.CreateAliasRequest, callback?: (err: KMS.DependencyTimeoutException|KMS.AlreadyExistsException|KMS.NotFoundException|KMS.InvalidAliasNameException|KMS.KMSInternalException|KMS.LimitExceededException|KMS.KMSInvalidStateException|any, data: any) => void): Request;
      createGrant(params: KMS.CreateGrantRequest, callback?: (err: KMS.NotFoundException|KMS.DisabledException|KMS.DependencyTimeoutException|KMS.InvalidArnException|KMS.KMSInternalException|KMS.InvalidGrantTokenException|KMS.LimitExceededException|KMS.KMSInvalidStateException|any, data: KMS.CreateGrantResponse|any) => void): Request;
      createKey(params: KMS.CreateKeyRequest, callback?: (err: KMS.MalformedPolicyDocumentException|KMS.DependencyTimeoutException|KMS.InvalidArnException|KMS.UnsupportedOperationException|KMS.KMSInternalException|KMS.LimitExceededException|any, data: KMS.CreateKeyResponse|any) => void): Request;
      decrypt(params: KMS.DecryptRequest, callback?: (err: KMS.NotFoundException|KMS.DisabledException|KMS.InvalidCiphertextException|KMS.KeyUnavailableException|KMS.DependencyTimeoutException|KMS.InvalidGrantTokenException|KMS.KMSInternalException|KMS.KMSInvalidStateException|any, data: KMS.DecryptResponse|any) => void): Request;
      deleteAlias(params: KMS.DeleteAliasRequest, callback?: (err: KMS.DependencyTimeoutException|KMS.NotFoundException|KMS.KMSInternalException|KMS.KMSInvalidStateException|any, data: any) => void): Request;
      describeKey(params: KMS.DescribeKeyRequest, callback?: (err: KMS.NotFoundException|KMS.InvalidArnException|KMS.DependencyTimeoutException|KMS.KMSInternalException|any, data: KMS.DescribeKeyResponse|any) => void): Request;
      disableKey(params: KMS.DisableKeyRequest, callback?: (err: KMS.NotFoundException|KMS.InvalidArnException|KMS.DependencyTimeoutException|KMS.KMSInternalException|KMS.KMSInvalidStateException|any, data: any) => void): Request;
      disableKeyRotation(params: KMS.DisableKeyRotationRequest, callback?: (err: KMS.NotFoundException|KMS.DisabledException|KMS.InvalidArnException|KMS.DependencyTimeoutException|KMS.KMSInternalException|KMS.KMSInvalidStateException|any, data: any) => void): Request;
      enableKey(params: KMS.EnableKeyRequest, callback?: (err: KMS.NotFoundException|KMS.InvalidArnException|KMS.DependencyTimeoutException|KMS.KMSInternalException|KMS.LimitExceededException|KMS.KMSInvalidStateException|any, data: any) => void): Request;
      enableKeyRotation(params: KMS.EnableKeyRotationRequest, callback?: (err: KMS.NotFoundException|KMS.DisabledException|KMS.InvalidArnException|KMS.DependencyTimeoutException|KMS.KMSInternalException|KMS.KMSInvalidStateException|any, data: any) => void): Request;
      encrypt(params: KMS.EncryptRequest, callback?: (err: KMS.NotFoundException|KMS.DisabledException|KMS.KeyUnavailableException|KMS.DependencyTimeoutException|KMS.InvalidKeyUsageException|KMS.InvalidGrantTokenException|KMS.KMSInternalException|KMS.KMSInvalidStateException|any, data: KMS.EncryptResponse|any) => void): Request;
      generateDataKey(params: KMS.GenerateDataKeyRequest, callback?: (err: KMS.NotFoundException|KMS.DisabledException|KMS.KeyUnavailableException|KMS.DependencyTimeoutException|KMS.InvalidKeyUsageException|KMS.InvalidGrantTokenException|KMS.KMSInternalException|KMS.KMSInvalidStateException|any, data: KMS.GenerateDataKeyResponse|any) => void): Request;
      generateDataKeyWithoutPlaintext(params: KMS.GenerateDataKeyWithoutPlaintextRequest, callback?: (err: KMS.NotFoundException|KMS.DisabledException|KMS.KeyUnavailableException|KMS.DependencyTimeoutException|KMS.InvalidKeyUsageException|KMS.InvalidGrantTokenException|KMS.KMSInternalException|KMS.KMSInvalidStateException|any, data: KMS.GenerateDataKeyWithoutPlaintextResponse|any) => void): Request;
      generateRandom(params: KMS.GenerateRandomRequest, callback?: (err: KMS.DependencyTimeoutException|KMS.KMSInternalException|any, data: KMS.GenerateRandomResponse|any) => void): Request;
      getKeyPolicy(params: KMS.GetKeyPolicyRequest, callback?: (err: KMS.NotFoundException|KMS.InvalidArnException|KMS.DependencyTimeoutException|KMS.KMSInternalException|KMS.KMSInvalidStateException|any, data: KMS.GetKeyPolicyResponse|any) => void): Request;
      getKeyRotationStatus(params: KMS.GetKeyRotationStatusRequest, callback?: (err: KMS.NotFoundException|KMS.InvalidArnException|KMS.DependencyTimeoutException|KMS.KMSInternalException|KMS.KMSInvalidStateException|any, data: KMS.GetKeyRotationStatusResponse|any) => void): Request;
      listAliases(params: KMS.ListAliasesRequest, callback?: (err: KMS.DependencyTimeoutException|KMS.InvalidMarkerException|KMS.KMSInternalException|any, data: KMS.ListAliasesResponse|any) => void): Request;
      listGrants(params: KMS.ListGrantsRequest, callback?: (err: KMS.NotFoundException|KMS.DependencyTimeoutException|KMS.InvalidMarkerException|KMS.InvalidArnException|KMS.KMSInternalException|KMS.KMSInvalidStateException|any, data: KMS.ListGrantsResponse|any) => void): Request;
      listKeyPolicies(params: KMS.ListKeyPoliciesRequest, callback?: (err: KMS.NotFoundException|KMS.InvalidArnException|KMS.DependencyTimeoutException|KMS.KMSInternalException|KMS.KMSInvalidStateException|any, data: KMS.ListKeyPoliciesResponse|any) => void): Request;
      listKeys(params: KMS.ListKeysRequest, callback?: (err: KMS.DependencyTimeoutException|KMS.KMSInternalException|any, data: KMS.ListKeysResponse|any) => void): Request;
      listRetirableGrants(params: KMS.ListRetirableGrantsRequest, callback?: (err: KMS.DependencyTimeoutException|KMS.InvalidMarkerException|KMS.InvalidArnException|KMS.NotFoundException|KMS.KMSInternalException|any, data: KMS.ListGrantsResponse|any) => void): Request;
      putKeyPolicy(params: KMS.PutKeyPolicyRequest, callback?: (err: KMS.NotFoundException|KMS.InvalidArnException|KMS.MalformedPolicyDocumentException|KMS.DependencyTimeoutException|KMS.InvalidArnException|KMS.UnsupportedOperationException|KMS.KMSInternalException|KMS.LimitExceededException|KMS.KMSInvalidStateException|any, data: any) => void): Request;
      reEncrypt(params: KMS.ReEncryptRequest, callback?: (err: KMS.NotFoundException|KMS.DisabledException|KMS.InvalidCiphertextException|KMS.KeyUnavailableException|KMS.DependencyTimeoutException|KMS.InvalidKeyUsageException|KMS.InvalidGrantTokenException|KMS.KMSInternalException|KMS.KMSInvalidStateException|any, data: KMS.ReEncryptResponse|any) => void): Request;
      retireGrant(params: KMS.RetireGrantRequest, callback?: (err: KMS.InvalidGrantTokenException|KMS.InvalidGrantIdException|KMS.NotFoundException|KMS.DependencyTimeoutException|KMS.KMSInternalException|KMS.KMSInvalidStateException|any, data: any) => void): Request;
      revokeGrant(params: KMS.RevokeGrantRequest, callback?: (err: KMS.NotFoundException|KMS.DependencyTimeoutException|KMS.InvalidArnException|KMS.InvalidGrantIdException|KMS.KMSInternalException|KMS.KMSInvalidStateException|any, data: any) => void): Request;
      scheduleKeyDeletion(params: KMS.ScheduleKeyDeletionRequest, callback?: (err: KMS.NotFoundException|KMS.InvalidArnException|KMS.DependencyTimeoutException|KMS.KMSInternalException|KMS.KMSInvalidStateException|any, data: KMS.ScheduleKeyDeletionResponse|any) => void): Request;
      updateAlias(params: KMS.UpdateAliasRequest, callback?: (err: KMS.DependencyTimeoutException|KMS.NotFoundException|KMS.KMSInternalException|KMS.KMSInvalidStateException|any, data: any) => void): Request;
      updateKeyDescription(params: KMS.UpdateKeyDescriptionRequest, callback?: (err: KMS.NotFoundException|KMS.InvalidArnException|KMS.DependencyTimeoutException|KMS.KMSInternalException|KMS.KMSInvalidStateException|any, data: any) => void): Request;

    }

    export module KMS {
        export type AWSAccountIdType = string;
        export type AliasList = AliasListEntry[];
        export type AliasNameType = string;    // pattern: &quot;^[a-zA-Z0-9:/_-]+$&quot;, max: 256, min: 1
        export type ArnType = string;    // max: 2048, min: 20
        export type BooleanType = boolean;
        export type CiphertextType = any;    // max: 6144, min: 1, type: blob
        export type DataKeySpec = string;
        export type DateType = number;
        export type DescriptionType = string;    // max: 8192
        export type EncryptionContextKey = string;
        export type EncryptionContextType = {[key:string]: EncryptionContextValue};
        export type EncryptionContextValue = string;
        export type ErrorMessageType = string;
        export type GrantIdType = string;    // max: 128, min: 1
        export type GrantList = GrantListEntry[];
        export type GrantNameType = string;    // pattern: &quot;^[a-zA-Z0-9:/_-]+$&quot;, max: 256, min: 1
        export type GrantOperation = string;
        export type GrantOperationList = GrantOperation[];
        export type GrantTokenList = GrantTokenType[];    // max: 10
        export type GrantTokenType = string;    // max: 8192, min: 1
        export type KeyIdType = string;    // max: 256, min: 1
        export type KeyList = KeyListEntry[];
        export type KeyState = string;
        export type KeyUsageType = string;
        export type LimitType = number;    // max: 1000, min: 1
        export type MarkerType = string;    // pattern: &quot;[\u0020-\u00FF]*&quot;, max: 320, min: 1
        export type NumberOfBytesType = number;    // max: 1024, min: 1
        export type PendingWindowInDaysType = number;    // max: 365, min: 1
        export type PlaintextType = any;    // max: 4096, min: 1, type: blob
        export type PolicyNameList = PolicyNameType[];
        export type PolicyNameType = string;    // pattern: &quot;[\w]+&quot;, max: 128, min: 1
        export type PolicyType = string;    // pattern: &quot;[\u0009\u000A\u000D\u0020-\u00FF]+&quot;, max: 131072, min: 1
        export type PrincipalIdType = string;    // max: 256, min: 1

        export interface AliasListEntry {
            AliasName?: AliasNameType;
            AliasArn?: ArnType;
            TargetKeyId?: KeyIdType;
        }
        export interface AlreadyExistsException {
            message?: ErrorMessageType;
        }
        export interface CancelKeyDeletionRequest {
            KeyId: KeyIdType;
        }
        export interface CancelKeyDeletionResponse {
            KeyId?: KeyIdType;
        }
        export interface CreateAliasRequest {
            AliasName: AliasNameType;
            TargetKeyId: KeyIdType;
        }
        export interface CreateGrantRequest {
            KeyId: KeyIdType;
            GranteePrincipal: PrincipalIdType;
            RetiringPrincipal?: PrincipalIdType;
            Operations?: GrantOperationList;
            Constraints?: GrantConstraints;
            GrantTokens?: GrantTokenList;
            Name?: GrantNameType;
        }
        export interface CreateGrantResponse {
            GrantToken?: GrantTokenType;
            GrantId?: GrantIdType;
        }
        export interface CreateKeyRequest {
            Policy?: PolicyType;
            Description?: DescriptionType;
            KeyUsage?: KeyUsageType;
        }
        export interface CreateKeyResponse {
            KeyMetadata?: KeyMetadata;
        }
        export interface DecryptRequest {
            CiphertextBlob: CiphertextType;
            EncryptionContext?: EncryptionContextType;
            GrantTokens?: GrantTokenList;
        }
        export interface DecryptResponse {
            KeyId?: KeyIdType;
            Plaintext?: PlaintextType;
        }
        export interface DeleteAliasRequest {
            AliasName: AliasNameType;
        }
        export interface DependencyTimeoutException {
            message?: ErrorMessageType;
        }
        export interface DescribeKeyRequest {
            KeyId: KeyIdType;
            GrantTokens?: GrantTokenList;
        }
        export interface DescribeKeyResponse {
            KeyMetadata?: KeyMetadata;
        }
        export interface DisableKeyRequest {
            KeyId: KeyIdType;
        }
        export interface DisableKeyRotationRequest {
            KeyId: KeyIdType;
        }
        export interface DisabledException {
            message?: ErrorMessageType;
        }
        export interface EnableKeyRequest {
            KeyId: KeyIdType;
        }
        export interface EnableKeyRotationRequest {
            KeyId: KeyIdType;
        }
        export interface EncryptRequest {
            KeyId: KeyIdType;
            Plaintext: PlaintextType;
            EncryptionContext?: EncryptionContextType;
            GrantTokens?: GrantTokenList;
        }
        export interface EncryptResponse {
            CiphertextBlob?: CiphertextType;
            KeyId?: KeyIdType;
        }
        export interface GenerateDataKeyRequest {
            KeyId: KeyIdType;
            EncryptionContext?: EncryptionContextType;
            NumberOfBytes?: NumberOfBytesType;
            KeySpec?: DataKeySpec;
            GrantTokens?: GrantTokenList;
        }
        export interface GenerateDataKeyResponse {
            CiphertextBlob?: CiphertextType;
            Plaintext?: PlaintextType;
            KeyId?: KeyIdType;
        }
        export interface GenerateDataKeyWithoutPlaintextRequest {
            KeyId: KeyIdType;
            EncryptionContext?: EncryptionContextType;
            KeySpec?: DataKeySpec;
            NumberOfBytes?: NumberOfBytesType;
            GrantTokens?: GrantTokenList;
        }
        export interface GenerateDataKeyWithoutPlaintextResponse {
            CiphertextBlob?: CiphertextType;
            KeyId?: KeyIdType;
        }
        export interface GenerateRandomRequest {
            NumberOfBytes?: NumberOfBytesType;
        }
        export interface GenerateRandomResponse {
            Plaintext?: PlaintextType;
        }
        export interface GetKeyPolicyRequest {
            KeyId: KeyIdType;
            PolicyName: PolicyNameType;
        }
        export interface GetKeyPolicyResponse {
            Policy?: PolicyType;
        }
        export interface GetKeyRotationStatusRequest {
            KeyId: KeyIdType;
        }
        export interface GetKeyRotationStatusResponse {
            KeyRotationEnabled?: BooleanType;
        }
        export interface GrantConstraints {
            EncryptionContextSubset?: EncryptionContextType;
            EncryptionContextEquals?: EncryptionContextType;
        }
        export interface GrantListEntry {
            KeyId?: KeyIdType;
            GrantId?: GrantIdType;
            Name?: GrantNameType;
            CreationDate?: DateType;
            GranteePrincipal?: PrincipalIdType;
            RetiringPrincipal?: PrincipalIdType;
            IssuingAccount?: PrincipalIdType;
            Operations?: GrantOperationList;
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
            KeyId?: KeyIdType;
            KeyArn?: ArnType;
        }
        export interface KeyMetadata {
            AWSAccountId?: AWSAccountIdType;
            KeyId: KeyIdType;
            Arn?: ArnType;
            CreationDate?: DateType;
            Enabled?: BooleanType;
            Description?: DescriptionType;
            KeyUsage?: KeyUsageType;
            KeyState?: KeyState;
            DeletionDate?: DateType;
        }
        export interface KeyUnavailableException {
            message?: ErrorMessageType;
        }
        export interface LimitExceededException {
            message?: ErrorMessageType;
        }
        export interface ListAliasesRequest {
            Limit?: LimitType;
            Marker?: MarkerType;
        }
        export interface ListAliasesResponse {
            Aliases?: AliasList;
            NextMarker?: MarkerType;
            Truncated?: BooleanType;
        }
        export interface ListGrantsRequest {
            Limit?: LimitType;
            Marker?: MarkerType;
            KeyId: KeyIdType;
        }
        export interface ListGrantsResponse {
            Grants?: GrantList;
            NextMarker?: MarkerType;
            Truncated?: BooleanType;
        }
        export interface ListKeyPoliciesRequest {
            KeyId: KeyIdType;
            Limit?: LimitType;
            Marker?: MarkerType;
        }
        export interface ListKeyPoliciesResponse {
            PolicyNames?: PolicyNameList;
            NextMarker?: MarkerType;
            Truncated?: BooleanType;
        }
        export interface ListKeysRequest {
            Limit?: LimitType;
            Marker?: MarkerType;
        }
        export interface ListKeysResponse {
            Keys?: KeyList;
            NextMarker?: MarkerType;
            Truncated?: BooleanType;
        }
        export interface ListRetirableGrantsRequest {
            Limit?: LimitType;
            Marker?: MarkerType;
            RetiringPrincipal: PrincipalIdType;
        }
        export interface MalformedPolicyDocumentException {
            message?: ErrorMessageType;
        }
        export interface NotFoundException {
            message?: ErrorMessageType;
        }
        export interface PutKeyPolicyRequest {
            KeyId: KeyIdType;
            PolicyName: PolicyNameType;
            Policy: PolicyType;
        }
        export interface ReEncryptRequest {
            CiphertextBlob: CiphertextType;
            SourceEncryptionContext?: EncryptionContextType;
            DestinationKeyId: KeyIdType;
            DestinationEncryptionContext?: EncryptionContextType;
            GrantTokens?: GrantTokenList;
        }
        export interface ReEncryptResponse {
            CiphertextBlob?: CiphertextType;
            SourceKeyId?: KeyIdType;
            KeyId?: KeyIdType;
        }
        export interface RetireGrantRequest {
            GrantToken?: GrantTokenType;
            KeyId?: KeyIdType;
            GrantId?: GrantIdType;
        }
        export interface RevokeGrantRequest {
            KeyId: KeyIdType;
            GrantId: GrantIdType;
        }
        export interface ScheduleKeyDeletionRequest {
            KeyId: KeyIdType;
            PendingWindowInDays?: PendingWindowInDaysType;
        }
        export interface ScheduleKeyDeletionResponse {
            KeyId?: KeyIdType;
            DeletionDate?: DateType;
        }
        export interface UnsupportedOperationException {
            message?: ErrorMessageType;
        }
        export interface UpdateAliasRequest {
            AliasName: AliasNameType;
            TargetKeyId: KeyIdType;
        }
        export interface UpdateKeyDescriptionRequest {
            KeyId: KeyIdType;
            Description: DescriptionType;
        }

    }
}
