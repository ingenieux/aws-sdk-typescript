// DO NOT EDIT!
//
declare module "aws-sdk" {
    export class KMS {
      constructor(options?: any);
      createAlias(params: CreateAliasRequest, callback: (err: DependencyTimeoutException|AlreadyExistsException|NotFoundException|InvalidAliasNameException|KMSInternalException|LimitExceededException|any, data: any) => void): void;
      createGrant(params: CreateGrantRequest, callback: (err: NotFoundException|DisabledException|DependencyTimeoutException|InvalidArnException|KMSInternalException|InvalidGrantTokenException|LimitExceededException|any, data: CreateGrantResponse|any) => void): void;
      createKey(params: CreateKeyRequest, callback: (err: MalformedPolicyDocumentException|DependencyTimeoutException|InvalidArnException|UnsupportedOperationException|KMSInternalException|LimitExceededException|any, data: CreateKeyResponse|any) => void): void;
      decrypt(params: DecryptRequest, callback: (err: NotFoundException|DisabledException|InvalidCiphertextException|KeyUnavailableException|DependencyTimeoutException|InvalidGrantTokenException|KMSInternalException|any, data: DecryptResponse|any) => void): void;
      deleteAlias(params: DeleteAliasRequest, callback: (err: DependencyTimeoutException|NotFoundException|KMSInternalException|any, data: any) => void): void;
      describeKey(params: DescribeKeyRequest, callback: (err: NotFoundException|InvalidArnException|DependencyTimeoutException|KMSInternalException|any, data: DescribeKeyResponse|any) => void): void;
      disableKey(params: DisableKeyRequest, callback: (err: NotFoundException|InvalidArnException|DependencyTimeoutException|KMSInternalException|any, data: any) => void): void;
      disableKeyRotation(params: DisableKeyRotationRequest, callback: (err: NotFoundException|DisabledException|InvalidArnException|DependencyTimeoutException|KMSInternalException|any, data: any) => void): void;
      enableKey(params: EnableKeyRequest, callback: (err: NotFoundException|InvalidArnException|DependencyTimeoutException|KMSInternalException|LimitExceededException|any, data: any) => void): void;
      enableKeyRotation(params: EnableKeyRotationRequest, callback: (err: NotFoundException|DisabledException|InvalidArnException|DependencyTimeoutException|KMSInternalException|any, data: any) => void): void;
      encrypt(params: EncryptRequest, callback: (err: NotFoundException|DisabledException|KeyUnavailableException|DependencyTimeoutException|InvalidKeyUsageException|InvalidGrantTokenException|KMSInternalException|any, data: EncryptResponse|any) => void): void;
      generateDataKey(params: GenerateDataKeyRequest, callback: (err: NotFoundException|DisabledException|KeyUnavailableException|DependencyTimeoutException|InvalidKeyUsageException|InvalidGrantTokenException|KMSInternalException|any, data: GenerateDataKeyResponse|any) => void): void;
      generateDataKeyWithoutPlaintext(params: GenerateDataKeyWithoutPlaintextRequest, callback: (err: NotFoundException|DisabledException|KeyUnavailableException|DependencyTimeoutException|InvalidKeyUsageException|InvalidGrantTokenException|KMSInternalException|any, data: GenerateDataKeyWithoutPlaintextResponse|any) => void): void;
      generateRandom(params: GenerateRandomRequest, callback: (err: DependencyTimeoutException|KMSInternalException|any, data: GenerateRandomResponse|any) => void): void;
      getKeyPolicy(params: GetKeyPolicyRequest, callback: (err: NotFoundException|InvalidArnException|DependencyTimeoutException|KMSInternalException|any, data: GetKeyPolicyResponse|any) => void): void;
      getKeyRotationStatus(params: GetKeyRotationStatusRequest, callback: (err: NotFoundException|InvalidArnException|DependencyTimeoutException|KMSInternalException|any, data: GetKeyRotationStatusResponse|any) => void): void;
      listAliases(params: ListAliasesRequest, callback: (err: DependencyTimeoutException|InvalidMarkerException|KMSInternalException|any, data: ListAliasesResponse|any) => void): void;
      listGrants(params: ListGrantsRequest, callback: (err: DependencyTimeoutException|InvalidMarkerException|InvalidArnException|KMSInternalException|any, data: ListGrantsResponse|any) => void): void;
      listKeyPolicies(params: ListKeyPoliciesRequest, callback: (err: NotFoundException|InvalidArnException|DependencyTimeoutException|KMSInternalException|any, data: ListKeyPoliciesResponse|any) => void): void;
      listKeys(params: ListKeysRequest, callback: (err: DependencyTimeoutException|KMSInternalException|any, data: ListKeysResponse|any) => void): void;
      putKeyPolicy(params: PutKeyPolicyRequest, callback: (err: NotFoundException|InvalidArnException|MalformedPolicyDocumentException|DependencyTimeoutException|InvalidArnException|UnsupportedOperationException|KMSInternalException|LimitExceededException|any, data: any) => void): void;
      reEncrypt(params: ReEncryptRequest, callback: (err: NotFoundException|DisabledException|InvalidCiphertextException|KeyUnavailableException|DependencyTimeoutException|InvalidKeyUsageException|InvalidGrantTokenException|KMSInternalException|any, data: ReEncryptResponse|any) => void): void;
      retireGrant(params: RetireGrantRequest, callback: (err: InvalidGrantTokenException|NotFoundException|DependencyTimeoutException|KMSInternalException|any, data: any) => void): void;
      revokeGrant(params: RevokeGrantRequest, callback: (err: NotFoundException|DependencyTimeoutException|InvalidArnException|KMSInternalException|any, data: any) => void): void;
      updateAlias(params: UpdateAliasRequest, callback: (err: DependencyTimeoutException|NotFoundException|KMSInternalException|any, data: any) => void): void;
      updateKeyDescription(params: UpdateKeyDescriptionRequest, callback: (err: NotFoundException|InvalidArnException|DependencyTimeoutException|KMSInternalException|any, data: any) => void): void;
    }

    export type AWSAccountIdType = string;

    export type AliasList = Array<AliasListEntry>;

    export interface AliasListEntry {
      AliasName?: AliasNameType;
      AliasArn?: ArnType;
      TargetKeyId?: KeyIdType;
    }


    export type AliasNameType = string; // pattern: "^[a-zA-Z0-9:/_-]+$"

    export interface AlreadyExistsException {
      message?: ErrorMessageType;
    }


    export type ArnType = string;

    export type BooleanType = boolean;

    export type CiphertextType = any; // not really - it was 'blob' instead - must fix this one

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


    export type DataKeySpec = string;

    export type DateType = number;

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
    }


    export interface DescribeKeyResponse {
      KeyMetadata?: KeyMetadata;
    }


    export type DescriptionType = string;

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


    export type EncryptionContextKey = string;

    export type EncryptionContextType = any; // not really - it was 'map' instead - must fix this one

    export type EncryptionContextValue = string;

    export type ErrorMessageType = string;

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


    export type GrantIdType = string;

    export type GrantList = Array<GrantListEntry>;

    export interface GrantListEntry {
      GrantId?: GrantIdType;
      GranteePrincipal?: PrincipalIdType;
      RetiringPrincipal?: PrincipalIdType;
      IssuingAccount?: PrincipalIdType;
      Operations?: GrantOperationList;
      Constraints?: GrantConstraints;
    }


    export type GrantOperation = string;

    export type GrantOperationList = Array<GrantOperation>;

    export type GrantTokenList = Array<GrantTokenType>; // max: 10

    export type GrantTokenType = string;

    export interface InvalidAliasNameException {
      message?: ErrorMessageType;
    }


    export interface InvalidArnException {
      message?: ErrorMessageType;
    }


    export interface InvalidCiphertextException {
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


    export type KeyIdType = string;

    export type KeyList = Array<KeyListEntry>;

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
    }


    export interface KeyUnavailableException {
      message?: ErrorMessageType;
    }


    export type KeyUsageType = string;

    export interface LimitExceededException {
      message?: ErrorMessageType;
    }


    export type LimitType = number;

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
      KeyId: KeyIdType;
      Limit?: LimitType;
      Marker?: MarkerType;
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


    export interface MalformedPolicyDocumentException {
      message?: ErrorMessageType;
    }


    export type MarkerType = string; // pattern: "[\u0020-\u00FF]*"

    export interface NotFoundException {
      message?: ErrorMessageType;
    }


    export type NumberOfBytesType = number;

    export type PlaintextType = any; // not really - it was 'blob' instead - must fix this one

    export type PolicyNameList = Array<PolicyNameType>;

    export type PolicyNameType = string; // pattern: "[\w]+"

    export type PolicyType = string; // pattern: "[\u0009\u000A\u000D\u0020-\u00FF]+"

    export type PrincipalIdType = string;

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
