// DO NOT EDIT!
//

///<reference path="./aws-sdk-common.d.ts" />
declare module "aws-sdk" {
    export class IAM {
      constructor(options?: any);
      addClientIDToOpenIDConnectProvider(params: IAMAddClientIDToOpenIDConnectProviderRequest, callback: (err: IAMInvalidInputException|IAMNoSuchEntityException|IAMLimitExceededException|IAMServiceFailureException|any, data: any) => void): void;
      addRoleToInstanceProfile(params: IAMAddRoleToInstanceProfileRequest, callback: (err: IAMNoSuchEntityException|IAMEntityAlreadyExistsException|IAMLimitExceededException|IAMServiceFailureException|any, data: any) => void): void;
      addUserToGroup(params: IAMAddUserToGroupRequest, callback: (err: IAMNoSuchEntityException|IAMLimitExceededException|IAMServiceFailureException|any, data: any) => void): void;
      attachGroupPolicy(params: IAMAttachGroupPolicyRequest, callback: (err: IAMNoSuchEntityException|IAMLimitExceededException|IAMInvalidInputException|IAMServiceFailureException|any, data: any) => void): void;
      attachRolePolicy(params: IAMAttachRolePolicyRequest, callback: (err: IAMNoSuchEntityException|IAMLimitExceededException|IAMInvalidInputException|IAMServiceFailureException|any, data: any) => void): void;
      attachUserPolicy(params: IAMAttachUserPolicyRequest, callback: (err: IAMNoSuchEntityException|IAMLimitExceededException|IAMInvalidInputException|IAMServiceFailureException|any, data: any) => void): void;
      changePassword(params: IAMChangePasswordRequest, callback: (err: IAMNoSuchEntityException|IAMInvalidUserTypeException|IAMLimitExceededException|IAMEntityTemporarilyUnmodifiableException|IAMPasswordPolicyViolationException|IAMServiceFailureException|any, data: any) => void): void;
      createAccessKey(params: IAMCreateAccessKeyRequest, callback: (err: IAMNoSuchEntityException|IAMLimitExceededException|IAMServiceFailureException|any, data: IAMCreateAccessKeyResponse|any) => void): void;
      createAccountAlias(params: IAMCreateAccountAliasRequest, callback: (err: IAMEntityAlreadyExistsException|IAMLimitExceededException|IAMServiceFailureException|any, data: any) => void): void;
      createGroup(params: IAMCreateGroupRequest, callback: (err: IAMLimitExceededException|IAMEntityAlreadyExistsException|IAMNoSuchEntityException|IAMServiceFailureException|any, data: IAMCreateGroupResponse|any) => void): void;
      createInstanceProfile(params: IAMCreateInstanceProfileRequest, callback: (err: IAMEntityAlreadyExistsException|IAMLimitExceededException|IAMServiceFailureException|any, data: IAMCreateInstanceProfileResponse|any) => void): void;
      createLoginProfile(params: IAMCreateLoginProfileRequest, callback: (err: IAMEntityAlreadyExistsException|IAMNoSuchEntityException|IAMPasswordPolicyViolationException|IAMLimitExceededException|IAMServiceFailureException|any, data: IAMCreateLoginProfileResponse|any) => void): void;
      createOpenIDConnectProvider(params: IAMCreateOpenIDConnectProviderRequest, callback: (err: IAMInvalidInputException|IAMEntityAlreadyExistsException|IAMLimitExceededException|IAMServiceFailureException|any, data: IAMCreateOpenIDConnectProviderResponse|any) => void): void;
      createPolicy(params: IAMCreatePolicyRequest, callback: (err: IAMInvalidInputException|IAMLimitExceededException|IAMEntityAlreadyExistsException|IAMMalformedPolicyDocumentException|IAMServiceFailureException|any, data: IAMCreatePolicyResponse|any) => void): void;
      createPolicyVersion(params: IAMCreatePolicyVersionRequest, callback: (err: IAMNoSuchEntityException|IAMMalformedPolicyDocumentException|IAMInvalidInputException|IAMLimitExceededException|IAMServiceFailureException|any, data: IAMCreatePolicyVersionResponse|any) => void): void;
      createRole(params: IAMCreateRoleRequest, callback: (err: IAMLimitExceededException|IAMEntityAlreadyExistsException|IAMMalformedPolicyDocumentException|IAMServiceFailureException|any, data: IAMCreateRoleResponse|any) => void): void;
      createSAMLProvider(params: IAMCreateSAMLProviderRequest, callback: (err: IAMInvalidInputException|IAMEntityAlreadyExistsException|IAMLimitExceededException|IAMServiceFailureException|any, data: IAMCreateSAMLProviderResponse|any) => void): void;
      createUser(params: IAMCreateUserRequest, callback: (err: IAMLimitExceededException|IAMEntityAlreadyExistsException|IAMNoSuchEntityException|IAMServiceFailureException|any, data: IAMCreateUserResponse|any) => void): void;
      createVirtualMFADevice(params: IAMCreateVirtualMFADeviceRequest, callback: (err: IAMLimitExceededException|IAMEntityAlreadyExistsException|IAMServiceFailureException|any, data: IAMCreateVirtualMFADeviceResponse|any) => void): void;
      deactivateMFADevice(params: IAMDeactivateMFADeviceRequest, callback: (err: IAMEntityTemporarilyUnmodifiableException|IAMNoSuchEntityException|IAMLimitExceededException|IAMServiceFailureException|any, data: any) => void): void;
      deleteAccessKey(params: IAMDeleteAccessKeyRequest, callback: (err: IAMNoSuchEntityException|IAMLimitExceededException|IAMServiceFailureException|any, data: any) => void): void;
      deleteAccountAlias(params: IAMDeleteAccountAliasRequest, callback: (err: IAMNoSuchEntityException|IAMLimitExceededException|IAMServiceFailureException|any, data: any) => void): void;
      deleteAccountPasswordPolicy(callback: (err: IAMNoSuchEntityException|IAMLimitExceededException|IAMServiceFailureException|any, data: any) => void): void;
      deleteGroup(params: IAMDeleteGroupRequest, callback: (err: IAMNoSuchEntityException|IAMDeleteConflictException|IAMLimitExceededException|IAMServiceFailureException|any, data: any) => void): void;
      deleteGroupPolicy(params: IAMDeleteGroupPolicyRequest, callback: (err: IAMNoSuchEntityException|IAMLimitExceededException|IAMServiceFailureException|any, data: any) => void): void;
      deleteInstanceProfile(params: IAMDeleteInstanceProfileRequest, callback: (err: IAMNoSuchEntityException|IAMDeleteConflictException|IAMLimitExceededException|IAMServiceFailureException|any, data: any) => void): void;
      deleteLoginProfile(params: IAMDeleteLoginProfileRequest, callback: (err: IAMEntityTemporarilyUnmodifiableException|IAMNoSuchEntityException|IAMLimitExceededException|IAMServiceFailureException|any, data: any) => void): void;
      deleteOpenIDConnectProvider(params: IAMDeleteOpenIDConnectProviderRequest, callback: (err: IAMInvalidInputException|IAMNoSuchEntityException|IAMServiceFailureException|any, data: any) => void): void;
      deletePolicy(params: IAMDeletePolicyRequest, callback: (err: IAMNoSuchEntityException|IAMLimitExceededException|IAMInvalidInputException|IAMDeleteConflictException|IAMServiceFailureException|any, data: any) => void): void;
      deletePolicyVersion(params: IAMDeletePolicyVersionRequest, callback: (err: IAMNoSuchEntityException|IAMLimitExceededException|IAMInvalidInputException|IAMDeleteConflictException|IAMServiceFailureException|any, data: any) => void): void;
      deleteRole(params: IAMDeleteRoleRequest, callback: (err: IAMNoSuchEntityException|IAMDeleteConflictException|IAMLimitExceededException|IAMServiceFailureException|any, data: any) => void): void;
      deleteRolePolicy(params: IAMDeleteRolePolicyRequest, callback: (err: IAMNoSuchEntityException|IAMLimitExceededException|IAMServiceFailureException|any, data: any) => void): void;
      deleteSAMLProvider(params: IAMDeleteSAMLProviderRequest, callback: (err: IAMInvalidInputException|IAMLimitExceededException|IAMNoSuchEntityException|IAMServiceFailureException|any, data: any) => void): void;
      deleteSSHPublicKey(params: IAMDeleteSSHPublicKeyRequest, callback: (err: IAMNoSuchEntityException|any, data: any) => void): void;
      deleteServerCertificate(params: IAMDeleteServerCertificateRequest, callback: (err: IAMNoSuchEntityException|IAMDeleteConflictException|IAMLimitExceededException|IAMServiceFailureException|any, data: any) => void): void;
      deleteSigningCertificate(params: IAMDeleteSigningCertificateRequest, callback: (err: IAMNoSuchEntityException|IAMLimitExceededException|IAMServiceFailureException|any, data: any) => void): void;
      deleteUser(params: IAMDeleteUserRequest, callback: (err: IAMLimitExceededException|IAMNoSuchEntityException|IAMDeleteConflictException|IAMServiceFailureException|any, data: any) => void): void;
      deleteUserPolicy(params: IAMDeleteUserPolicyRequest, callback: (err: IAMNoSuchEntityException|IAMLimitExceededException|IAMServiceFailureException|any, data: any) => void): void;
      deleteVirtualMFADevice(params: IAMDeleteVirtualMFADeviceRequest, callback: (err: IAMNoSuchEntityException|IAMDeleteConflictException|IAMLimitExceededException|IAMServiceFailureException|any, data: any) => void): void;
      detachGroupPolicy(params: IAMDetachGroupPolicyRequest, callback: (err: IAMNoSuchEntityException|IAMLimitExceededException|IAMInvalidInputException|IAMServiceFailureException|any, data: any) => void): void;
      detachRolePolicy(params: IAMDetachRolePolicyRequest, callback: (err: IAMNoSuchEntityException|IAMLimitExceededException|IAMInvalidInputException|IAMServiceFailureException|any, data: any) => void): void;
      detachUserPolicy(params: IAMDetachUserPolicyRequest, callback: (err: IAMNoSuchEntityException|IAMLimitExceededException|IAMInvalidInputException|IAMServiceFailureException|any, data: any) => void): void;
      enableMFADevice(params: IAMEnableMFADeviceRequest, callback: (err: IAMEntityAlreadyExistsException|IAMEntityTemporarilyUnmodifiableException|IAMInvalidAuthenticationCodeException|IAMLimitExceededException|IAMNoSuchEntityException|IAMServiceFailureException|any, data: any) => void): void;
      generateCredentialReport(callback: (err: IAMLimitExceededException|IAMServiceFailureException|any, data: IAMGenerateCredentialReportResponse|any) => void): void;
      getAccessKeyLastUsed(params: IAMGetAccessKeyLastUsedRequest, callback: (err: IAMNoSuchEntityException|any, data: IAMGetAccessKeyLastUsedResponse|any) => void): void;
      getAccountAuthorizationDetails(params: IAMGetAccountAuthorizationDetailsRequest, callback: (err: IAMServiceFailureException|any, data: IAMGetAccountAuthorizationDetailsResponse|any) => void): void;
      getAccountPasswordPolicy(callback: (err: IAMNoSuchEntityException|IAMServiceFailureException|any, data: IAMGetAccountPasswordPolicyResponse|any) => void): void;
      getAccountSummary(callback: (err: IAMServiceFailureException|any, data: IAMGetAccountSummaryResponse|any) => void): void;
      getContextKeysForCustomPolicy(params: IAMGetContextKeysForCustomPolicyRequest, callback: (err: IAMInvalidInputException|any, data: IAMGetContextKeysForPolicyResponse|any) => void): void;
      getContextKeysForPrincipalPolicy(params: IAMGetContextKeysForPrincipalPolicyRequest, callback: (err: IAMNoSuchEntityException|IAMInvalidInputException|any, data: IAMGetContextKeysForPolicyResponse|any) => void): void;
      getCredentialReport(callback: (err: IAMCredentialReportNotPresentException|IAMCredentialReportExpiredException|IAMCredentialReportNotReadyException|IAMServiceFailureException|any, data: IAMGetCredentialReportResponse|any) => void): void;
      getGroup(params: IAMGetGroupRequest, callback: (err: IAMNoSuchEntityException|IAMServiceFailureException|any, data: IAMGetGroupResponse|any) => void): void;
      getGroupPolicy(params: IAMGetGroupPolicyRequest, callback: (err: IAMNoSuchEntityException|IAMServiceFailureException|any, data: IAMGetGroupPolicyResponse|any) => void): void;
      getInstanceProfile(params: IAMGetInstanceProfileRequest, callback: (err: IAMNoSuchEntityException|IAMServiceFailureException|any, data: IAMGetInstanceProfileResponse|any) => void): void;
      getLoginProfile(params: IAMGetLoginProfileRequest, callback: (err: IAMNoSuchEntityException|IAMServiceFailureException|any, data: IAMGetLoginProfileResponse|any) => void): void;
      getOpenIDConnectProvider(params: IAMGetOpenIDConnectProviderRequest, callback: (err: IAMInvalidInputException|IAMNoSuchEntityException|IAMServiceFailureException|any, data: IAMGetOpenIDConnectProviderResponse|any) => void): void;
      getPolicy(params: IAMGetPolicyRequest, callback: (err: IAMNoSuchEntityException|IAMInvalidInputException|IAMServiceFailureException|any, data: IAMGetPolicyResponse|any) => void): void;
      getPolicyVersion(params: IAMGetPolicyVersionRequest, callback: (err: IAMNoSuchEntityException|IAMInvalidInputException|IAMServiceFailureException|any, data: IAMGetPolicyVersionResponse|any) => void): void;
      getRole(params: IAMGetRoleRequest, callback: (err: IAMNoSuchEntityException|IAMServiceFailureException|any, data: IAMGetRoleResponse|any) => void): void;
      getRolePolicy(params: IAMGetRolePolicyRequest, callback: (err: IAMNoSuchEntityException|IAMServiceFailureException|any, data: IAMGetRolePolicyResponse|any) => void): void;
      getSAMLProvider(params: IAMGetSAMLProviderRequest, callback: (err: IAMNoSuchEntityException|IAMInvalidInputException|IAMServiceFailureException|any, data: IAMGetSAMLProviderResponse|any) => void): void;
      getSSHPublicKey(params: IAMGetSSHPublicKeyRequest, callback: (err: IAMNoSuchEntityException|IAMUnrecognizedPublicKeyEncodingException|any, data: IAMGetSSHPublicKeyResponse|any) => void): void;
      getServerCertificate(params: IAMGetServerCertificateRequest, callback: (err: IAMNoSuchEntityException|IAMServiceFailureException|any, data: IAMGetServerCertificateResponse|any) => void): void;
      getUser(params: IAMGetUserRequest, callback: (err: IAMNoSuchEntityException|IAMServiceFailureException|any, data: IAMGetUserResponse|any) => void): void;
      getUserPolicy(params: IAMGetUserPolicyRequest, callback: (err: IAMNoSuchEntityException|IAMServiceFailureException|any, data: IAMGetUserPolicyResponse|any) => void): void;
      listAccessKeys(params: IAMListAccessKeysRequest, callback: (err: IAMNoSuchEntityException|IAMServiceFailureException|any, data: IAMListAccessKeysResponse|any) => void): void;
      listAccountAliases(params: IAMListAccountAliasesRequest, callback: (err: IAMServiceFailureException|any, data: IAMListAccountAliasesResponse|any) => void): void;
      listAttachedGroupPolicies(params: IAMListAttachedGroupPoliciesRequest, callback: (err: IAMNoSuchEntityException|IAMInvalidInputException|IAMServiceFailureException|any, data: IAMListAttachedGroupPoliciesResponse|any) => void): void;
      listAttachedRolePolicies(params: IAMListAttachedRolePoliciesRequest, callback: (err: IAMNoSuchEntityException|IAMInvalidInputException|IAMServiceFailureException|any, data: IAMListAttachedRolePoliciesResponse|any) => void): void;
      listAttachedUserPolicies(params: IAMListAttachedUserPoliciesRequest, callback: (err: IAMNoSuchEntityException|IAMInvalidInputException|IAMServiceFailureException|any, data: IAMListAttachedUserPoliciesResponse|any) => void): void;
      listEntitiesForPolicy(params: IAMListEntitiesForPolicyRequest, callback: (err: IAMNoSuchEntityException|IAMInvalidInputException|IAMServiceFailureException|any, data: IAMListEntitiesForPolicyResponse|any) => void): void;
      listGroupPolicies(params: IAMListGroupPoliciesRequest, callback: (err: IAMNoSuchEntityException|IAMServiceFailureException|any, data: IAMListGroupPoliciesResponse|any) => void): void;
      listGroups(params: IAMListGroupsRequest, callback: (err: IAMServiceFailureException|any, data: IAMListGroupsResponse|any) => void): void;
      listGroupsForUser(params: IAMListGroupsForUserRequest, callback: (err: IAMNoSuchEntityException|IAMServiceFailureException|any, data: IAMListGroupsForUserResponse|any) => void): void;
      listInstanceProfiles(params: IAMListInstanceProfilesRequest, callback: (err: IAMServiceFailureException|any, data: IAMListInstanceProfilesResponse|any) => void): void;
      listInstanceProfilesForRole(params: IAMListInstanceProfilesForRoleRequest, callback: (err: IAMNoSuchEntityException|IAMServiceFailureException|any, data: IAMListInstanceProfilesForRoleResponse|any) => void): void;
      listMFADevices(params: IAMListMFADevicesRequest, callback: (err: IAMNoSuchEntityException|IAMServiceFailureException|any, data: IAMListMFADevicesResponse|any) => void): void;
      listOpenIDConnectProviders(params: IAMListOpenIDConnectProvidersRequest, callback: (err: IAMServiceFailureException|any, data: IAMListOpenIDConnectProvidersResponse|any) => void): void;
      listPolicies(params: IAMListPoliciesRequest, callback: (err: IAMServiceFailureException|any, data: IAMListPoliciesResponse|any) => void): void;
      listPolicyVersions(params: IAMListPolicyVersionsRequest, callback: (err: IAMNoSuchEntityException|IAMInvalidInputException|IAMServiceFailureException|any, data: IAMListPolicyVersionsResponse|any) => void): void;
      listRolePolicies(params: IAMListRolePoliciesRequest, callback: (err: IAMNoSuchEntityException|IAMServiceFailureException|any, data: IAMListRolePoliciesResponse|any) => void): void;
      listRoles(params: IAMListRolesRequest, callback: (err: IAMServiceFailureException|any, data: IAMListRolesResponse|any) => void): void;
      listSAMLProviders(params: IAMListSAMLProvidersRequest, callback: (err: IAMServiceFailureException|any, data: IAMListSAMLProvidersResponse|any) => void): void;
      listSSHPublicKeys(params: IAMListSSHPublicKeysRequest, callback: (err: IAMNoSuchEntityException|any, data: IAMListSSHPublicKeysResponse|any) => void): void;
      listServerCertificates(params: IAMListServerCertificatesRequest, callback: (err: IAMServiceFailureException|any, data: IAMListServerCertificatesResponse|any) => void): void;
      listSigningCertificates(params: IAMListSigningCertificatesRequest, callback: (err: IAMNoSuchEntityException|IAMServiceFailureException|any, data: IAMListSigningCertificatesResponse|any) => void): void;
      listUserPolicies(params: IAMListUserPoliciesRequest, callback: (err: IAMNoSuchEntityException|IAMServiceFailureException|any, data: IAMListUserPoliciesResponse|any) => void): void;
      listUsers(params: IAMListUsersRequest, callback: (err: IAMServiceFailureException|any, data: IAMListUsersResponse|any) => void): void;
      listVirtualMFADevices(params: IAMListVirtualMFADevicesRequest, callback: (err: any, data: IAMListVirtualMFADevicesResponse|any) => void): void;
      putGroupPolicy(params: IAMPutGroupPolicyRequest, callback: (err: IAMLimitExceededException|IAMMalformedPolicyDocumentException|IAMNoSuchEntityException|IAMServiceFailureException|any, data: any) => void): void;
      putRolePolicy(params: IAMPutRolePolicyRequest, callback: (err: IAMLimitExceededException|IAMMalformedPolicyDocumentException|IAMNoSuchEntityException|IAMServiceFailureException|any, data: any) => void): void;
      putUserPolicy(params: IAMPutUserPolicyRequest, callback: (err: IAMLimitExceededException|IAMMalformedPolicyDocumentException|IAMNoSuchEntityException|IAMServiceFailureException|any, data: any) => void): void;
      removeClientIDFromOpenIDConnectProvider(params: IAMRemoveClientIDFromOpenIDConnectProviderRequest, callback: (err: IAMInvalidInputException|IAMNoSuchEntityException|IAMServiceFailureException|any, data: any) => void): void;
      removeRoleFromInstanceProfile(params: IAMRemoveRoleFromInstanceProfileRequest, callback: (err: IAMNoSuchEntityException|IAMLimitExceededException|IAMServiceFailureException|any, data: any) => void): void;
      removeUserFromGroup(params: IAMRemoveUserFromGroupRequest, callback: (err: IAMNoSuchEntityException|IAMLimitExceededException|IAMServiceFailureException|any, data: any) => void): void;
      resyncMFADevice(params: IAMResyncMFADeviceRequest, callback: (err: IAMInvalidAuthenticationCodeException|IAMNoSuchEntityException|IAMLimitExceededException|IAMServiceFailureException|any, data: any) => void): void;
      setDefaultPolicyVersion(params: IAMSetDefaultPolicyVersionRequest, callback: (err: IAMNoSuchEntityException|IAMInvalidInputException|IAMLimitExceededException|IAMServiceFailureException|any, data: any) => void): void;
      simulateCustomPolicy(params: IAMSimulateCustomPolicyRequest, callback: (err: IAMInvalidInputException|IAMPolicyEvaluationException|any, data: IAMSimulatePolicyResponse|any) => void): void;
      simulatePrincipalPolicy(params: IAMSimulatePrincipalPolicyRequest, callback: (err: IAMNoSuchEntityException|IAMInvalidInputException|IAMPolicyEvaluationException|any, data: IAMSimulatePolicyResponse|any) => void): void;
      updateAccessKey(params: IAMUpdateAccessKeyRequest, callback: (err: IAMNoSuchEntityException|IAMLimitExceededException|IAMServiceFailureException|any, data: any) => void): void;
      updateAccountPasswordPolicy(params: IAMUpdateAccountPasswordPolicyRequest, callback: (err: IAMNoSuchEntityException|IAMMalformedPolicyDocumentException|IAMLimitExceededException|IAMServiceFailureException|any, data: any) => void): void;
      updateAssumeRolePolicy(params: IAMUpdateAssumeRolePolicyRequest, callback: (err: IAMNoSuchEntityException|IAMMalformedPolicyDocumentException|IAMLimitExceededException|IAMServiceFailureException|any, data: any) => void): void;
      updateGroup(params: IAMUpdateGroupRequest, callback: (err: IAMNoSuchEntityException|IAMEntityAlreadyExistsException|IAMLimitExceededException|IAMServiceFailureException|any, data: any) => void): void;
      updateLoginProfile(params: IAMUpdateLoginProfileRequest, callback: (err: IAMEntityTemporarilyUnmodifiableException|IAMNoSuchEntityException|IAMPasswordPolicyViolationException|IAMLimitExceededException|IAMServiceFailureException|any, data: any) => void): void;
      updateOpenIDConnectProviderThumbprint(params: IAMUpdateOpenIDConnectProviderThumbprintRequest, callback: (err: IAMInvalidInputException|IAMNoSuchEntityException|IAMServiceFailureException|any, data: any) => void): void;
      updateSAMLProvider(params: IAMUpdateSAMLProviderRequest, callback: (err: IAMNoSuchEntityException|IAMInvalidInputException|IAMLimitExceededException|IAMServiceFailureException|any, data: IAMUpdateSAMLProviderResponse|any) => void): void;
      updateSSHPublicKey(params: IAMUpdateSSHPublicKeyRequest, callback: (err: IAMNoSuchEntityException|any, data: any) => void): void;
      updateServerCertificate(params: IAMUpdateServerCertificateRequest, callback: (err: IAMNoSuchEntityException|IAMEntityAlreadyExistsException|IAMLimitExceededException|IAMServiceFailureException|any, data: any) => void): void;
      updateSigningCertificate(params: IAMUpdateSigningCertificateRequest, callback: (err: IAMNoSuchEntityException|IAMLimitExceededException|IAMServiceFailureException|any, data: any) => void): void;
      updateUser(params: IAMUpdateUserRequest, callback: (err: IAMNoSuchEntityException|IAMLimitExceededException|IAMEntityAlreadyExistsException|IAMEntityTemporarilyUnmodifiableException|IAMServiceFailureException|any, data: any) => void): void;
      uploadSSHPublicKey(params: IAMUploadSSHPublicKeyRequest, callback: (err: IAMLimitExceededException|IAMNoSuchEntityException|IAMInvalidPublicKeyException|IAMDuplicateSSHPublicKeyException|IAMUnrecognizedPublicKeyEncodingException|any, data: IAMUploadSSHPublicKeyResponse|any) => void): void;
      uploadServerCertificate(params: IAMUploadServerCertificateRequest, callback: (err: IAMLimitExceededException|IAMEntityAlreadyExistsException|IAMMalformedCertificateException|IAMKeyPairMismatchException|IAMServiceFailureException|any, data: IAMUploadServerCertificateResponse|any) => void): void;
      uploadSigningCertificate(params: IAMUploadSigningCertificateRequest, callback: (err: IAMLimitExceededException|IAMEntityAlreadyExistsException|IAMMalformedCertificateException|IAMInvalidCertificateException|IAMDuplicateCertificateException|IAMNoSuchEntityException|IAMServiceFailureException|any, data: IAMUploadSigningCertificateResponse|any) => void): void;
    }

    export interface IAMAccessKey {
        UserName: IAMuserNameType;
        AccessKeyId: IAMaccessKeyIdType;
        Status: IAMstatusType;
        SecretAccessKey: IAMaccessKeySecretType;
        CreateDate?: IAMdateType;
    }

    export interface IAMAccessKeyLastUsed {
        LastUsedDate: IAMdateType;
        ServiceName: IAMstringType;
        Region: IAMstringType;
    }

    export interface IAMAccessKeyMetadata {
        UserName?: IAMuserNameType;
        AccessKeyId?: IAMaccessKeyIdType;
        Status?: IAMstatusType;
        CreateDate?: IAMdateType;
    }

    export type IAMActionNameListType = Array<IAMActionNameType>;
    export type IAMActionNameType = string;
    export interface IAMAddClientIDToOpenIDConnectProviderRequest {
        OpenIDConnectProviderArn: IAMarnType;
        ClientID: IAMclientIDType;
    }

    export interface IAMAddRoleToInstanceProfileRequest {
        InstanceProfileName: IAMinstanceProfileNameType;
        RoleName: IAMroleNameType;
    }

    export interface IAMAddUserToGroupRequest {
        GroupName: IAMgroupNameType;
        UserName: IAMexistingUserNameType;
    }

    export interface IAMAttachGroupPolicyRequest {
        GroupName: IAMgroupNameType;
        PolicyArn: IAMarnType;
    }

    export interface IAMAttachRolePolicyRequest {
        RoleName: IAMroleNameType;
        PolicyArn: IAMarnType;
    }

    export interface IAMAttachUserPolicyRequest {
        UserName: IAMuserNameType;
        PolicyArn: IAMarnType;
    }

    export interface IAMAttachedPolicy {
        PolicyName?: IAMpolicyNameType;
        PolicyArn?: IAMarnType;
    }

    export type IAMBootstrapDatum = any; // not really - it was 'blob' instead - must fix this one
    export interface IAMChangePasswordRequest {
        OldPassword: IAMpasswordType;
        NewPassword: IAMpasswordType;
    }

    export type IAMColumnNumber = number;
    export interface IAMContextEntry {
        ContextKeyName?: IAMContextKeyNameType;
        ContextKeyValues?: IAMContextKeyValueListType;
        ContextKeyType?: IAMContextKeyTypeEnum;
    }

    export type IAMContextEntryListType = Array<IAMContextEntry>;
    export type IAMContextKeyNameType = string;
    export type IAMContextKeyNamesResultListType = Array<IAMContextKeyNameType>;
    export type IAMContextKeyTypeEnum = string;
    export type IAMContextKeyValueListType = Array<IAMContextKeyValueType>;
    export type IAMContextKeyValueType = string;
    export interface IAMCreateAccessKeyRequest {
        UserName?: IAMexistingUserNameType;
    }

    export interface IAMCreateAccessKeyResponse {
        AccessKey: IAMAccessKey;
    }

    export interface IAMCreateAccountAliasRequest {
        AccountAlias: IAMaccountAliasType;
    }

    export interface IAMCreateGroupRequest {
        Path?: IAMpathType;
        GroupName: IAMgroupNameType;
    }

    export interface IAMCreateGroupResponse {
        Group: IAMGroup;
    }

    export interface IAMCreateInstanceProfileRequest {
        InstanceProfileName: IAMinstanceProfileNameType;
        Path?: IAMpathType;
    }

    export interface IAMCreateInstanceProfileResponse {
        InstanceProfile: IAMInstanceProfile;
    }

    export interface IAMCreateLoginProfileRequest {
        UserName: IAMuserNameType;
        Password: IAMpasswordType;
        PasswordResetRequired?: IAMbooleanType;
    }

    export interface IAMCreateLoginProfileResponse {
        LoginProfile: IAMLoginProfile;
    }

    export interface IAMCreateOpenIDConnectProviderRequest {
        Url: IAMOpenIDConnectProviderUrlType;
        ClientIDList?: IAMclientIDListType;
        ThumbprintList: IAMthumbprintListType;
    }

    export interface IAMCreateOpenIDConnectProviderResponse {
        OpenIDConnectProviderArn?: IAMarnType;
    }

    export interface IAMCreatePolicyRequest {
        PolicyName: IAMpolicyNameType;
        Path?: IAMpolicyPathType;
        PolicyDocument: IAMpolicyDocumentType;
        Description?: IAMpolicyDescriptionType;
    }

    export interface IAMCreatePolicyResponse {
        Policy?: IAMPolicy;
    }

    export interface IAMCreatePolicyVersionRequest {
        PolicyArn: IAMarnType;
        PolicyDocument: IAMpolicyDocumentType;
        SetAsDefault?: IAMbooleanType;
    }

    export interface IAMCreatePolicyVersionResponse {
        PolicyVersion?: IAMPolicyVersion;
    }

    export interface IAMCreateRoleRequest {
        Path?: IAMpathType;
        RoleName: IAMroleNameType;
        AssumeRolePolicyDocument: IAMpolicyDocumentType;
    }

    export interface IAMCreateRoleResponse {
        Role: IAMRole;
    }

    export interface IAMCreateSAMLProviderRequest {
        SAMLMetadataDocument: IAMSAMLMetadataDocumentType;
        Name: IAMSAMLProviderNameType;
    }

    export interface IAMCreateSAMLProviderResponse {
        SAMLProviderArn?: IAMarnType;
    }

    export interface IAMCreateUserRequest {
        Path?: IAMpathType;
        UserName: IAMuserNameType;
    }

    export interface IAMCreateUserResponse {
        User?: IAMUser;
    }

    export interface IAMCreateVirtualMFADeviceRequest {
        Path?: IAMpathType;
        VirtualMFADeviceName: IAMvirtualMFADeviceName;
    }

    export interface IAMCreateVirtualMFADeviceResponse {
        VirtualMFADevice: IAMVirtualMFADevice;
    }

    export interface IAMCredentialReportExpiredException {
        message?: IAMcredentialReportExpiredExceptionMessage;
    }

    export interface IAMCredentialReportNotPresentException {
        message?: IAMcredentialReportNotPresentExceptionMessage;
    }

    export interface IAMCredentialReportNotReadyException {
        message?: IAMcredentialReportNotReadyExceptionMessage;
    }

    export interface IAMDeactivateMFADeviceRequest {
        UserName: IAMexistingUserNameType;
        SerialNumber: IAMserialNumberType;
    }

    export interface IAMDeleteAccessKeyRequest {
        UserName?: IAMexistingUserNameType;
        AccessKeyId: IAMaccessKeyIdType;
    }

    export interface IAMDeleteAccountAliasRequest {
        AccountAlias: IAMaccountAliasType;
    }

    export interface IAMDeleteConflictException {
        message?: IAMdeleteConflictMessage;
    }

    export interface IAMDeleteGroupPolicyRequest {
        GroupName: IAMgroupNameType;
        PolicyName: IAMpolicyNameType;
    }

    export interface IAMDeleteGroupRequest {
        GroupName: IAMgroupNameType;
    }

    export interface IAMDeleteInstanceProfileRequest {
        InstanceProfileName: IAMinstanceProfileNameType;
    }

    export interface IAMDeleteLoginProfileRequest {
        UserName: IAMuserNameType;
    }

    export interface IAMDeleteOpenIDConnectProviderRequest {
        OpenIDConnectProviderArn: IAMarnType;
    }

    export interface IAMDeletePolicyRequest {
        PolicyArn: IAMarnType;
    }

    export interface IAMDeletePolicyVersionRequest {
        PolicyArn: IAMarnType;
        VersionId: IAMpolicyVersionIdType;
    }

    export interface IAMDeleteRolePolicyRequest {
        RoleName: IAMroleNameType;
        PolicyName: IAMpolicyNameType;
    }

    export interface IAMDeleteRoleRequest {
        RoleName: IAMroleNameType;
    }

    export interface IAMDeleteSAMLProviderRequest {
        SAMLProviderArn: IAMarnType;
    }

    export interface IAMDeleteSSHPublicKeyRequest {
        UserName: IAMuserNameType;
        SSHPublicKeyId: IAMpublicKeyIdType;
    }

    export interface IAMDeleteServerCertificateRequest {
        ServerCertificateName: IAMserverCertificateNameType;
    }

    export interface IAMDeleteSigningCertificateRequest {
        UserName?: IAMexistingUserNameType;
        CertificateId: IAMcertificateIdType;
    }

    export interface IAMDeleteUserPolicyRequest {
        UserName: IAMexistingUserNameType;
        PolicyName: IAMpolicyNameType;
    }

    export interface IAMDeleteUserRequest {
        UserName: IAMexistingUserNameType;
    }

    export interface IAMDeleteVirtualMFADeviceRequest {
        SerialNumber: IAMserialNumberType;
    }

    export interface IAMDetachGroupPolicyRequest {
        GroupName: IAMgroupNameType;
        PolicyArn: IAMarnType;
    }

    export interface IAMDetachRolePolicyRequest {
        RoleName: IAMroleNameType;
        PolicyArn: IAMarnType;
    }

    export interface IAMDetachUserPolicyRequest {
        UserName: IAMuserNameType;
        PolicyArn: IAMarnType;
    }

    export interface IAMDuplicateCertificateException {
        message?: IAMduplicateCertificateMessage;
    }

    export interface IAMDuplicateSSHPublicKeyException {
        message?: IAMduplicateSSHPublicKeyMessage;
    }

    export interface IAMEnableMFADeviceRequest {
        UserName: IAMexistingUserNameType;
        SerialNumber: IAMserialNumberType;
        AuthenticationCode1: IAMauthenticationCodeType;
        AuthenticationCode2: IAMauthenticationCodeType;
    }

    export interface IAMEntityAlreadyExistsException {
        message?: IAMentityAlreadyExistsMessage;
    }

    export interface IAMEntityTemporarilyUnmodifiableException {
        message?: IAMentityTemporarilyUnmodifiableMessage;
    }

    export type IAMEntityType = string;
    export type IAMEvalDecisionDetailsType = any; // not really - it was 'map' instead - must fix this one
    export type IAMEvalDecisionSourceType = string;
    export interface IAMEvaluationResult {
        EvalActionName: IAMActionNameType;
        EvalResourceName?: IAMResourceNameType;
        EvalDecision: IAMPolicyEvaluationDecisionType;
        MatchedStatements?: IAMStatementListType;
        MissingContextValues?: IAMContextKeyNamesResultListType;
        EvalDecisionDetails?: IAMEvalDecisionDetailsType;
        ResourceSpecificResults?: IAMResourceSpecificResultListType;
    }

    export type IAMEvaluationResultsListType = Array<IAMEvaluationResult>;
    export interface IAMGenerateCredentialReportResponse {
        State?: IAMReportStateType;
        Description?: IAMReportStateDescriptionType;
    }

    export interface IAMGetAccessKeyLastUsedRequest {
        AccessKeyId: IAMaccessKeyIdType;
    }

    export interface IAMGetAccessKeyLastUsedResponse {
        UserName?: IAMexistingUserNameType;
        AccessKeyLastUsed?: IAMAccessKeyLastUsed;
    }

    export interface IAMGetAccountAuthorizationDetailsRequest {
        Filter?: IAMentityListType;
        MaxItems?: IAMmaxItemsType;
        Marker?: IAMmarkerType;
    }

    export interface IAMGetAccountAuthorizationDetailsResponse {
        UserDetailList?: IAMuserDetailListType;
        GroupDetailList?: IAMgroupDetailListType;
        RoleDetailList?: IAMroleDetailListType;
        Policies?: IAMManagedPolicyDetailListType;
        IsTruncated?: IAMbooleanType;
        Marker?: IAMmarkerType;
    }

    export interface IAMGetAccountPasswordPolicyResponse {
        PasswordPolicy: IAMPasswordPolicy;
    }

    export interface IAMGetAccountSummaryResponse {
        SummaryMap?: IAMsummaryMapType;
    }

    export interface IAMGetContextKeysForCustomPolicyRequest {
        PolicyInputList: IAMSimulationPolicyListType;
    }

    export interface IAMGetContextKeysForPolicyResponse {
        ContextKeyNames?: IAMContextKeyNamesResultListType;
    }

    export interface IAMGetContextKeysForPrincipalPolicyRequest {
        PolicySourceArn: IAMarnType;
        PolicyInputList?: IAMSimulationPolicyListType;
    }

    export interface IAMGetCredentialReportResponse {
        Content?: IAMReportContentType;
        ReportFormat?: IAMReportFormatType;
        GeneratedTime?: IAMdateType;
    }

    export interface IAMGetGroupPolicyRequest {
        GroupName: IAMgroupNameType;
        PolicyName: IAMpolicyNameType;
    }

    export interface IAMGetGroupPolicyResponse {
        GroupName: IAMgroupNameType;
        PolicyName: IAMpolicyNameType;
        PolicyDocument: IAMpolicyDocumentType;
    }

    export interface IAMGetGroupRequest {
        GroupName: IAMgroupNameType;
        Marker?: IAMmarkerType;
        MaxItems?: IAMmaxItemsType;
    }

    export interface IAMGetGroupResponse {
        Group: IAMGroup;
        Users: IAMuserListType;
        IsTruncated?: IAMbooleanType;
        Marker?: IAMmarkerType;
    }

    export interface IAMGetInstanceProfileRequest {
        InstanceProfileName: IAMinstanceProfileNameType;
    }

    export interface IAMGetInstanceProfileResponse {
        InstanceProfile: IAMInstanceProfile;
    }

    export interface IAMGetLoginProfileRequest {
        UserName: IAMuserNameType;
    }

    export interface IAMGetLoginProfileResponse {
        LoginProfile: IAMLoginProfile;
    }

    export interface IAMGetOpenIDConnectProviderRequest {
        OpenIDConnectProviderArn: IAMarnType;
    }

    export interface IAMGetOpenIDConnectProviderResponse {
        Url?: IAMOpenIDConnectProviderUrlType;
        ClientIDList?: IAMclientIDListType;
        ThumbprintList?: IAMthumbprintListType;
        CreateDate?: IAMdateType;
    }

    export interface IAMGetPolicyRequest {
        PolicyArn: IAMarnType;
    }

    export interface IAMGetPolicyResponse {
        Policy?: IAMPolicy;
    }

    export interface IAMGetPolicyVersionRequest {
        PolicyArn: IAMarnType;
        VersionId: IAMpolicyVersionIdType;
    }

    export interface IAMGetPolicyVersionResponse {
        PolicyVersion?: IAMPolicyVersion;
    }

    export interface IAMGetRolePolicyRequest {
        RoleName: IAMroleNameType;
        PolicyName: IAMpolicyNameType;
    }

    export interface IAMGetRolePolicyResponse {
        RoleName: IAMroleNameType;
        PolicyName: IAMpolicyNameType;
        PolicyDocument: IAMpolicyDocumentType;
    }

    export interface IAMGetRoleRequest {
        RoleName: IAMroleNameType;
    }

    export interface IAMGetRoleResponse {
        Role: IAMRole;
    }

    export interface IAMGetSAMLProviderRequest {
        SAMLProviderArn: IAMarnType;
    }

    export interface IAMGetSAMLProviderResponse {
        SAMLMetadataDocument?: IAMSAMLMetadataDocumentType;
        CreateDate?: IAMdateType;
        ValidUntil?: IAMdateType;
    }

    export interface IAMGetSSHPublicKeyRequest {
        UserName: IAMuserNameType;
        SSHPublicKeyId: IAMpublicKeyIdType;
        Encoding: IAMencodingType;
    }

    export interface IAMGetSSHPublicKeyResponse {
        SSHPublicKey?: IAMSSHPublicKey;
    }

    export interface IAMGetServerCertificateRequest {
        ServerCertificateName: IAMserverCertificateNameType;
    }

    export interface IAMGetServerCertificateResponse {
        ServerCertificate: IAMServerCertificate;
    }

    export interface IAMGetUserPolicyRequest {
        UserName: IAMexistingUserNameType;
        PolicyName: IAMpolicyNameType;
    }

    export interface IAMGetUserPolicyResponse {
        UserName: IAMexistingUserNameType;
        PolicyName: IAMpolicyNameType;
        PolicyDocument: IAMpolicyDocumentType;
    }

    export interface IAMGetUserRequest {
        UserName?: IAMexistingUserNameType;
    }

    export interface IAMGetUserResponse {
        User: IAMUser;
    }

    export interface IAMGroup {
        Path: IAMpathType;
        GroupName: IAMgroupNameType;
        GroupId: IAMidType;
        Arn: IAMarnType;
        CreateDate: IAMdateType;
    }

    export interface IAMGroupDetail {
        Path?: IAMpathType;
        GroupName?: IAMgroupNameType;
        GroupId?: IAMidType;
        Arn?: IAMarnType;
        CreateDate?: IAMdateType;
        GroupPolicyList?: IAMpolicyDetailListType;
        AttachedManagedPolicies?: IAMattachedPoliciesListType;
    }

    export interface IAMInstanceProfile {
        Path: IAMpathType;
        InstanceProfileName: IAMinstanceProfileNameType;
        InstanceProfileId: IAMidType;
        Arn: IAMarnType;
        CreateDate: IAMdateType;
        Roles: IAMroleListType;
    }

    export interface IAMInvalidAuthenticationCodeException {
        message?: IAMinvalidAuthenticationCodeMessage;
    }

    export interface IAMInvalidCertificateException {
        message?: IAMinvalidCertificateMessage;
    }

    export interface IAMInvalidInputException {
        message?: IAMinvalidInputMessage;
    }

    export interface IAMInvalidPublicKeyException {
        message?: IAMinvalidPublicKeyMessage;
    }

    export interface IAMInvalidUserTypeException {
        message?: IAMinvalidUserTypeMessage;
    }

    export interface IAMKeyPairMismatchException {
        message?: IAMkeyPairMismatchMessage;
    }

    export interface IAMLimitExceededException {
        message?: IAMlimitExceededMessage;
    }

    export type IAMLineNumber = number;
    export interface IAMListAccessKeysRequest {
        UserName?: IAMexistingUserNameType;
        Marker?: IAMmarkerType;
        MaxItems?: IAMmaxItemsType;
    }

    export interface IAMListAccessKeysResponse {
        AccessKeyMetadata: IAMaccessKeyMetadataListType;
        IsTruncated?: IAMbooleanType;
        Marker?: IAMmarkerType;
    }

    export interface IAMListAccountAliasesRequest {
        Marker?: IAMmarkerType;
        MaxItems?: IAMmaxItemsType;
    }

    export interface IAMListAccountAliasesResponse {
        AccountAliases: IAMaccountAliasListType;
        IsTruncated?: IAMbooleanType;
        Marker?: IAMmarkerType;
    }

    export interface IAMListAttachedGroupPoliciesRequest {
        GroupName: IAMgroupNameType;
        PathPrefix?: IAMpolicyPathType;
        Marker?: IAMmarkerType;
        MaxItems?: IAMmaxItemsType;
    }

    export interface IAMListAttachedGroupPoliciesResponse {
        AttachedPolicies?: IAMattachedPoliciesListType;
        IsTruncated?: IAMbooleanType;
        Marker?: IAMmarkerType;
    }

    export interface IAMListAttachedRolePoliciesRequest {
        RoleName: IAMroleNameType;
        PathPrefix?: IAMpolicyPathType;
        Marker?: IAMmarkerType;
        MaxItems?: IAMmaxItemsType;
    }

    export interface IAMListAttachedRolePoliciesResponse {
        AttachedPolicies?: IAMattachedPoliciesListType;
        IsTruncated?: IAMbooleanType;
        Marker?: IAMmarkerType;
    }

    export interface IAMListAttachedUserPoliciesRequest {
        UserName: IAMuserNameType;
        PathPrefix?: IAMpolicyPathType;
        Marker?: IAMmarkerType;
        MaxItems?: IAMmaxItemsType;
    }

    export interface IAMListAttachedUserPoliciesResponse {
        AttachedPolicies?: IAMattachedPoliciesListType;
        IsTruncated?: IAMbooleanType;
        Marker?: IAMmarkerType;
    }

    export interface IAMListEntitiesForPolicyRequest {
        PolicyArn: IAMarnType;
        EntityFilter?: IAMEntityType;
        PathPrefix?: IAMpathType;
        Marker?: IAMmarkerType;
        MaxItems?: IAMmaxItemsType;
    }

    export interface IAMListEntitiesForPolicyResponse {
        PolicyGroups?: IAMPolicyGroupListType;
        PolicyUsers?: IAMPolicyUserListType;
        PolicyRoles?: IAMPolicyRoleListType;
        IsTruncated?: IAMbooleanType;
        Marker?: IAMmarkerType;
    }

    export interface IAMListGroupPoliciesRequest {
        GroupName: IAMgroupNameType;
        Marker?: IAMmarkerType;
        MaxItems?: IAMmaxItemsType;
    }

    export interface IAMListGroupPoliciesResponse {
        PolicyNames: IAMpolicyNameListType;
        IsTruncated?: IAMbooleanType;
        Marker?: IAMmarkerType;
    }

    export interface IAMListGroupsForUserRequest {
        UserName: IAMexistingUserNameType;
        Marker?: IAMmarkerType;
        MaxItems?: IAMmaxItemsType;
    }

    export interface IAMListGroupsForUserResponse {
        Groups: IAMgroupListType;
        IsTruncated?: IAMbooleanType;
        Marker?: IAMmarkerType;
    }

    export interface IAMListGroupsRequest {
        PathPrefix?: IAMpathPrefixType;
        Marker?: IAMmarkerType;
        MaxItems?: IAMmaxItemsType;
    }

    export interface IAMListGroupsResponse {
        Groups: IAMgroupListType;
        IsTruncated?: IAMbooleanType;
        Marker?: IAMmarkerType;
    }

    export interface IAMListInstanceProfilesForRoleRequest {
        RoleName: IAMroleNameType;
        Marker?: IAMmarkerType;
        MaxItems?: IAMmaxItemsType;
    }

    export interface IAMListInstanceProfilesForRoleResponse {
        InstanceProfiles: IAMinstanceProfileListType;
        IsTruncated?: IAMbooleanType;
        Marker?: IAMmarkerType;
    }

    export interface IAMListInstanceProfilesRequest {
        PathPrefix?: IAMpathPrefixType;
        Marker?: IAMmarkerType;
        MaxItems?: IAMmaxItemsType;
    }

    export interface IAMListInstanceProfilesResponse {
        InstanceProfiles: IAMinstanceProfileListType;
        IsTruncated?: IAMbooleanType;
        Marker?: IAMmarkerType;
    }

    export interface IAMListMFADevicesRequest {
        UserName?: IAMexistingUserNameType;
        Marker?: IAMmarkerType;
        MaxItems?: IAMmaxItemsType;
    }

    export interface IAMListMFADevicesResponse {
        MFADevices: IAMmfaDeviceListType;
        IsTruncated?: IAMbooleanType;
        Marker?: IAMmarkerType;
    }

    export interface IAMListOpenIDConnectProvidersRequest {
    }

    export interface IAMListOpenIDConnectProvidersResponse {
        OpenIDConnectProviderList?: IAMOpenIDConnectProviderListType;
    }

    export interface IAMListPoliciesRequest {
        Scope?: IAMpolicyScopeType;
        OnlyAttached?: IAMbooleanType;
        PathPrefix?: IAMpolicyPathType;
        Marker?: IAMmarkerType;
        MaxItems?: IAMmaxItemsType;
    }

    export interface IAMListPoliciesResponse {
        Policies?: IAMpolicyListType;
        IsTruncated?: IAMbooleanType;
        Marker?: IAMmarkerType;
    }

    export interface IAMListPolicyVersionsRequest {
        PolicyArn: IAMarnType;
        Marker?: IAMmarkerType;
        MaxItems?: IAMmaxItemsType;
    }

    export interface IAMListPolicyVersionsResponse {
        Versions?: IAMpolicyDocumentVersionListType;
        IsTruncated?: IAMbooleanType;
        Marker?: IAMmarkerType;
    }

    export interface IAMListRolePoliciesRequest {
        RoleName: IAMroleNameType;
        Marker?: IAMmarkerType;
        MaxItems?: IAMmaxItemsType;
    }

    export interface IAMListRolePoliciesResponse {
        PolicyNames: IAMpolicyNameListType;
        IsTruncated?: IAMbooleanType;
        Marker?: IAMmarkerType;
    }

    export interface IAMListRolesRequest {
        PathPrefix?: IAMpathPrefixType;
        Marker?: IAMmarkerType;
        MaxItems?: IAMmaxItemsType;
    }

    export interface IAMListRolesResponse {
        Roles: IAMroleListType;
        IsTruncated?: IAMbooleanType;
        Marker?: IAMmarkerType;
    }

    export interface IAMListSAMLProvidersRequest {
    }

    export interface IAMListSAMLProvidersResponse {
        SAMLProviderList?: IAMSAMLProviderListType;
    }

    export interface IAMListSSHPublicKeysRequest {
        UserName?: IAMuserNameType;
        Marker?: IAMmarkerType;
        MaxItems?: IAMmaxItemsType;
    }

    export interface IAMListSSHPublicKeysResponse {
        SSHPublicKeys?: IAMSSHPublicKeyListType;
        IsTruncated?: IAMbooleanType;
        Marker?: IAMmarkerType;
    }

    export interface IAMListServerCertificatesRequest {
        PathPrefix?: IAMpathPrefixType;
        Marker?: IAMmarkerType;
        MaxItems?: IAMmaxItemsType;
    }

    export interface IAMListServerCertificatesResponse {
        ServerCertificateMetadataList: IAMserverCertificateMetadataListType;
        IsTruncated?: IAMbooleanType;
        Marker?: IAMmarkerType;
    }

    export interface IAMListSigningCertificatesRequest {
        UserName?: IAMexistingUserNameType;
        Marker?: IAMmarkerType;
        MaxItems?: IAMmaxItemsType;
    }

    export interface IAMListSigningCertificatesResponse {
        Certificates: IAMcertificateListType;
        IsTruncated?: IAMbooleanType;
        Marker?: IAMmarkerType;
    }

    export interface IAMListUserPoliciesRequest {
        UserName: IAMexistingUserNameType;
        Marker?: IAMmarkerType;
        MaxItems?: IAMmaxItemsType;
    }

    export interface IAMListUserPoliciesResponse {
        PolicyNames: IAMpolicyNameListType;
        IsTruncated?: IAMbooleanType;
        Marker?: IAMmarkerType;
    }

    export interface IAMListUsersRequest {
        PathPrefix?: IAMpathPrefixType;
        Marker?: IAMmarkerType;
        MaxItems?: IAMmaxItemsType;
    }

    export interface IAMListUsersResponse {
        Users: IAMuserListType;
        IsTruncated?: IAMbooleanType;
        Marker?: IAMmarkerType;
    }

    export interface IAMListVirtualMFADevicesRequest {
        AssignmentStatus?: IAMassignmentStatusType;
        Marker?: IAMmarkerType;
        MaxItems?: IAMmaxItemsType;
    }

    export interface IAMListVirtualMFADevicesResponse {
        VirtualMFADevices: IAMvirtualMFADeviceListType;
        IsTruncated?: IAMbooleanType;
        Marker?: IAMmarkerType;
    }

    export interface IAMLoginProfile {
        UserName: IAMuserNameType;
        CreateDate: IAMdateType;
        PasswordResetRequired?: IAMbooleanType;
    }

    export interface IAMMFADevice {
        UserName: IAMuserNameType;
        SerialNumber: IAMserialNumberType;
        EnableDate: IAMdateType;
    }

    export interface IAMMalformedCertificateException {
        message?: IAMmalformedCertificateMessage;
    }

    export interface IAMMalformedPolicyDocumentException {
        message?: IAMmalformedPolicyDocumentMessage;
    }

    export interface IAMManagedPolicyDetail {
        PolicyName?: IAMpolicyNameType;
        PolicyId?: IAMidType;
        Arn?: IAMarnType;
        Path?: IAMpolicyPathType;
        DefaultVersionId?: IAMpolicyVersionIdType;
        AttachmentCount?: IAMattachmentCountType;
        IsAttachable?: IAMbooleanType;
        Description?: IAMpolicyDescriptionType;
        CreateDate?: IAMdateType;
        UpdateDate?: IAMdateType;
        PolicyVersionList?: IAMpolicyDocumentVersionListType;
    }

    export type IAMManagedPolicyDetailListType = Array<IAMManagedPolicyDetail>;
    export interface IAMNoSuchEntityException {
        message?: IAMnoSuchEntityMessage;
    }

    export interface IAMOpenIDConnectProviderListEntry {
        Arn?: IAMarnType;
    }

    export type IAMOpenIDConnectProviderListType = Array<IAMOpenIDConnectProviderListEntry>;
    export type IAMOpenIDConnectProviderUrlType = string;
    export interface IAMPasswordPolicy {
        MinimumPasswordLength?: IAMminimumPasswordLengthType;
        RequireSymbols?: IAMbooleanType;
        RequireNumbers?: IAMbooleanType;
        RequireUppercaseCharacters?: IAMbooleanType;
        RequireLowercaseCharacters?: IAMbooleanType;
        AllowUsersToChangePassword?: IAMbooleanType;
        ExpirePasswords?: IAMbooleanType;
        MaxPasswordAge?: IAMmaxPasswordAgeType;
        PasswordReusePrevention?: IAMpasswordReusePreventionType;
        HardExpiry?: IAMbooleanObjectType;
    }

    export interface IAMPasswordPolicyViolationException {
        message?: IAMpasswordPolicyViolationMessage;
    }

    export interface IAMPolicy {
        PolicyName?: IAMpolicyNameType;
        PolicyId?: IAMidType;
        Arn?: IAMarnType;
        Path?: IAMpolicyPathType;
        DefaultVersionId?: IAMpolicyVersionIdType;
        AttachmentCount?: IAMattachmentCountType;
        IsAttachable?: IAMbooleanType;
        Description?: IAMpolicyDescriptionType;
        CreateDate?: IAMdateType;
        UpdateDate?: IAMdateType;
    }

    export interface IAMPolicyDetail {
        PolicyName?: IAMpolicyNameType;
        PolicyDocument?: IAMpolicyDocumentType;
    }

    export type IAMPolicyEvaluationDecisionType = string;
    export interface IAMPolicyEvaluationException {
        message?: IAMpolicyEvaluationErrorMessage;
    }

    export interface IAMPolicyGroup {
        GroupName?: IAMgroupNameType;
    }

    export type IAMPolicyGroupListType = Array<IAMPolicyGroup>;
    export type IAMPolicyIdentifierType = string;
    export interface IAMPolicyRole {
        RoleName?: IAMroleNameType;
    }

    export type IAMPolicyRoleListType = Array<IAMPolicyRole>;
    export type IAMPolicySourceType = string;
    export interface IAMPolicyUser {
        UserName?: IAMuserNameType;
    }

    export type IAMPolicyUserListType = Array<IAMPolicyUser>;
    export interface IAMPolicyVersion {
        Document?: IAMpolicyDocumentType;
        VersionId?: IAMpolicyVersionIdType;
        IsDefaultVersion?: IAMbooleanType;
        CreateDate?: IAMdateType;
    }

    export interface IAMPosition {
        Line?: IAMLineNumber;
        Column?: IAMColumnNumber;
    }

    export interface IAMPutGroupPolicyRequest {
        GroupName: IAMgroupNameType;
        PolicyName: IAMpolicyNameType;
        PolicyDocument: IAMpolicyDocumentType;
    }

    export interface IAMPutRolePolicyRequest {
        RoleName: IAMroleNameType;
        PolicyName: IAMpolicyNameType;
        PolicyDocument: IAMpolicyDocumentType;
    }

    export interface IAMPutUserPolicyRequest {
        UserName: IAMexistingUserNameType;
        PolicyName: IAMpolicyNameType;
        PolicyDocument: IAMpolicyDocumentType;
    }

    export interface IAMRemoveClientIDFromOpenIDConnectProviderRequest {
        OpenIDConnectProviderArn: IAMarnType;
        ClientID: IAMclientIDType;
    }

    export interface IAMRemoveRoleFromInstanceProfileRequest {
        InstanceProfileName: IAMinstanceProfileNameType;
        RoleName: IAMroleNameType;
    }

    export interface IAMRemoveUserFromGroupRequest {
        GroupName: IAMgroupNameType;
        UserName: IAMexistingUserNameType;
    }

    export type IAMReportContentType = any; // not really - it was 'blob' instead - must fix this one
    export type IAMReportFormatType = string;
    export type IAMReportStateDescriptionType = string;
    export type IAMReportStateType = string;
    export type IAMResourceHandlingOptionType = string;
    export type IAMResourceNameListType = Array<IAMResourceNameType>;
    export type IAMResourceNameType = string;
    export interface IAMResourceSpecificResult {
        EvalResourceName: IAMResourceNameType;
        EvalResourceDecision: IAMPolicyEvaluationDecisionType;
        MatchedStatements?: IAMStatementListType;
        MissingContextValues?: IAMContextKeyNamesResultListType;
        EvalDecisionDetails?: IAMEvalDecisionDetailsType;
    }

    export type IAMResourceSpecificResultListType = Array<IAMResourceSpecificResult>;
    export interface IAMResyncMFADeviceRequest {
        UserName: IAMexistingUserNameType;
        SerialNumber: IAMserialNumberType;
        AuthenticationCode1: IAMauthenticationCodeType;
        AuthenticationCode2: IAMauthenticationCodeType;
    }

    export interface IAMRole {
        Path: IAMpathType;
        RoleName: IAMroleNameType;
        RoleId: IAMidType;
        Arn: IAMarnType;
        CreateDate: IAMdateType;
        AssumeRolePolicyDocument?: IAMpolicyDocumentType;
    }

    export interface IAMRoleDetail {
        Path?: IAMpathType;
        RoleName?: IAMroleNameType;
        RoleId?: IAMidType;
        Arn?: IAMarnType;
        CreateDate?: IAMdateType;
        AssumeRolePolicyDocument?: IAMpolicyDocumentType;
        InstanceProfileList?: IAMinstanceProfileListType;
        RolePolicyList?: IAMpolicyDetailListType;
        AttachedManagedPolicies?: IAMattachedPoliciesListType;
    }

    export type IAMSAMLMetadataDocumentType = string;
    export interface IAMSAMLProviderListEntry {
        Arn?: IAMarnType;
        ValidUntil?: IAMdateType;
        CreateDate?: IAMdateType;
    }

    export type IAMSAMLProviderListType = Array<IAMSAMLProviderListEntry>;
    export type IAMSAMLProviderNameType = string; // pattern: "[\w._-]+"
    export interface IAMSSHPublicKey {
        UserName: IAMuserNameType;
        SSHPublicKeyId: IAMpublicKeyIdType;
        Fingerprint: IAMpublicKeyFingerprintType;
        SSHPublicKeyBody: IAMpublicKeyMaterialType;
        Status: IAMstatusType;
        UploadDate?: IAMdateType;
    }

    export type IAMSSHPublicKeyListType = Array<IAMSSHPublicKeyMetadata>;
    export interface IAMSSHPublicKeyMetadata {
        UserName: IAMuserNameType;
        SSHPublicKeyId: IAMpublicKeyIdType;
        Status: IAMstatusType;
        UploadDate: IAMdateType;
    }

    export interface IAMServerCertificate {
        ServerCertificateMetadata: IAMServerCertificateMetadata;
        CertificateBody: IAMcertificateBodyType;
        CertificateChain?: IAMcertificateChainType;
    }

    export interface IAMServerCertificateMetadata {
        Path: IAMpathType;
        ServerCertificateName: IAMserverCertificateNameType;
        ServerCertificateId: IAMidType;
        Arn: IAMarnType;
        UploadDate?: IAMdateType;
        Expiration?: IAMdateType;
    }

    export interface IAMServiceFailureException {
        message?: IAMserviceFailureExceptionMessage;
    }

    export interface IAMSetDefaultPolicyVersionRequest {
        PolicyArn: IAMarnType;
        VersionId: IAMpolicyVersionIdType;
    }

    export interface IAMSigningCertificate {
        UserName: IAMuserNameType;
        CertificateId: IAMcertificateIdType;
        CertificateBody: IAMcertificateBodyType;
        Status: IAMstatusType;
        UploadDate?: IAMdateType;
    }

    export interface IAMSimulateCustomPolicyRequest {
        PolicyInputList: IAMSimulationPolicyListType;
        ActionNames: IAMActionNameListType;
        ResourceArns?: IAMResourceNameListType;
        ResourcePolicy?: IAMpolicyDocumentType;
        ResourceOwner?: IAMResourceNameType;
        CallerArn?: IAMResourceNameType;
        ContextEntries?: IAMContextEntryListType;
        ResourceHandlingOption?: IAMResourceHandlingOptionType;
        MaxItems?: IAMmaxItemsType;
        Marker?: IAMmarkerType;
    }

    export interface IAMSimulatePolicyResponse {
        EvaluationResults?: IAMEvaluationResultsListType;
        IsTruncated?: IAMbooleanType;
        Marker?: IAMmarkerType;
    }

    export interface IAMSimulatePrincipalPolicyRequest {
        PolicySourceArn: IAMarnType;
        PolicyInputList?: IAMSimulationPolicyListType;
        ActionNames: IAMActionNameListType;
        ResourceArns?: IAMResourceNameListType;
        ResourcePolicy?: IAMpolicyDocumentType;
        ResourceOwner?: IAMResourceNameType;
        CallerArn?: IAMResourceNameType;
        ContextEntries?: IAMContextEntryListType;
        ResourceHandlingOption?: IAMResourceHandlingOptionType;
        MaxItems?: IAMmaxItemsType;
        Marker?: IAMmarkerType;
    }

    export type IAMSimulationPolicyListType = Array<IAMpolicyDocumentType>;
    export interface IAMStatement {
        SourcePolicyId?: IAMPolicyIdentifierType;
        SourcePolicyType?: IAMPolicySourceType;
        StartPosition?: IAMPosition;
        EndPosition?: IAMPosition;
    }

    export type IAMStatementListType = Array<IAMStatement>;
    export interface IAMUnrecognizedPublicKeyEncodingException {
        message?: IAMunrecognizedPublicKeyEncodingMessage;
    }

    export interface IAMUpdateAccessKeyRequest {
        UserName?: IAMexistingUserNameType;
        AccessKeyId: IAMaccessKeyIdType;
        Status: IAMstatusType;
    }

    export interface IAMUpdateAccountPasswordPolicyRequest {
        MinimumPasswordLength?: IAMminimumPasswordLengthType;
        RequireSymbols?: IAMbooleanType;
        RequireNumbers?: IAMbooleanType;
        RequireUppercaseCharacters?: IAMbooleanType;
        RequireLowercaseCharacters?: IAMbooleanType;
        AllowUsersToChangePassword?: IAMbooleanType;
        MaxPasswordAge?: IAMmaxPasswordAgeType;
        PasswordReusePrevention?: IAMpasswordReusePreventionType;
        HardExpiry?: IAMbooleanObjectType;
    }

    export interface IAMUpdateAssumeRolePolicyRequest {
        RoleName: IAMroleNameType;
        PolicyDocument: IAMpolicyDocumentType;
    }

    export interface IAMUpdateGroupRequest {
        GroupName: IAMgroupNameType;
        NewPath?: IAMpathType;
        NewGroupName?: IAMgroupNameType;
    }

    export interface IAMUpdateLoginProfileRequest {
        UserName: IAMuserNameType;
        Password?: IAMpasswordType;
        PasswordResetRequired?: IAMbooleanObjectType;
    }

    export interface IAMUpdateOpenIDConnectProviderThumbprintRequest {
        OpenIDConnectProviderArn: IAMarnType;
        ThumbprintList: IAMthumbprintListType;
    }

    export interface IAMUpdateSAMLProviderRequest {
        SAMLMetadataDocument: IAMSAMLMetadataDocumentType;
        SAMLProviderArn: IAMarnType;
    }

    export interface IAMUpdateSAMLProviderResponse {
        SAMLProviderArn?: IAMarnType;
    }

    export interface IAMUpdateSSHPublicKeyRequest {
        UserName: IAMuserNameType;
        SSHPublicKeyId: IAMpublicKeyIdType;
        Status: IAMstatusType;
    }

    export interface IAMUpdateServerCertificateRequest {
        ServerCertificateName: IAMserverCertificateNameType;
        NewPath?: IAMpathType;
        NewServerCertificateName?: IAMserverCertificateNameType;
    }

    export interface IAMUpdateSigningCertificateRequest {
        UserName?: IAMexistingUserNameType;
        CertificateId: IAMcertificateIdType;
        Status: IAMstatusType;
    }

    export interface IAMUpdateUserRequest {
        UserName: IAMexistingUserNameType;
        NewPath?: IAMpathType;
        NewUserName?: IAMuserNameType;
    }

    export interface IAMUploadSSHPublicKeyRequest {
        UserName: IAMuserNameType;
        SSHPublicKeyBody: IAMpublicKeyMaterialType;
    }

    export interface IAMUploadSSHPublicKeyResponse {
        SSHPublicKey?: IAMSSHPublicKey;
    }

    export interface IAMUploadServerCertificateRequest {
        Path?: IAMpathType;
        ServerCertificateName: IAMserverCertificateNameType;
        CertificateBody: IAMcertificateBodyType;
        PrivateKey: IAMprivateKeyType;
        CertificateChain?: IAMcertificateChainType;
    }

    export interface IAMUploadServerCertificateResponse {
        ServerCertificateMetadata?: IAMServerCertificateMetadata;
    }

    export interface IAMUploadSigningCertificateRequest {
        UserName?: IAMexistingUserNameType;
        CertificateBody: IAMcertificateBodyType;
    }

    export interface IAMUploadSigningCertificateResponse {
        Certificate: IAMSigningCertificate;
    }

    export interface IAMUser {
        Path: IAMpathType;
        UserName: IAMuserNameType;
        UserId: IAMidType;
        Arn: IAMarnType;
        CreateDate: IAMdateType;
        PasswordLastUsed?: IAMdateType;
    }

    export interface IAMUserDetail {
        Path?: IAMpathType;
        UserName?: IAMuserNameType;
        UserId?: IAMidType;
        Arn?: IAMarnType;
        CreateDate?: IAMdateType;
        UserPolicyList?: IAMpolicyDetailListType;
        GroupList?: IAMgroupNameListType;
        AttachedManagedPolicies?: IAMattachedPoliciesListType;
    }

    export interface IAMVirtualMFADevice {
        SerialNumber: IAMserialNumberType;
        Base32StringSeed?: IAMBootstrapDatum;
        QRCodePNG?: IAMBootstrapDatum;
        User?: IAMUser;
        EnableDate?: IAMdateType;
    }

    export type IAMaccessKeyIdType = string; // pattern: "[\w]+"
    export type IAMaccessKeyMetadataListType = Array<IAMAccessKeyMetadata>;
    export type IAMaccessKeySecretType = string;
    export type IAMaccountAliasListType = Array<IAMaccountAliasType>;
    export type IAMaccountAliasType = string; // pattern: "^[a-z0-9](([a-z0-9]|-(?!-))*[a-z0-9])?$"
    export type IAMarnType = string;
    export type IAMassignmentStatusType = string;
    export type IAMattachedPoliciesListType = Array<IAMAttachedPolicy>;
    export type IAMattachmentCountType = number;
    export type IAMauthenticationCodeType = string; // pattern: "[\d]+"
    export type IAMbooleanObjectType = boolean;
    export type IAMbooleanType = boolean;
    export type IAMcertificateBodyType = string; // pattern: "[\u0009\u000A\u000D\u0020-\u00FF]+"
    export type IAMcertificateChainType = string; // pattern: "[\u0009\u000A\u000D\u0020-\u00FF]+"
    export type IAMcertificateIdType = string; // pattern: "[\w]+"
    export type IAMcertificateListType = Array<IAMSigningCertificate>;
    export type IAMclientIDListType = Array<IAMclientIDType>;
    export type IAMclientIDType = string;
    export type IAMcredentialReportExpiredExceptionMessage = string;
    export type IAMcredentialReportNotPresentExceptionMessage = string;
    export type IAMcredentialReportNotReadyExceptionMessage = string;
    export type IAMdateType = number;
    export type IAMdeleteConflictMessage = string;
    export type IAMduplicateCertificateMessage = string;
    export type IAMduplicateSSHPublicKeyMessage = string;
    export type IAMencodingType = string;
    export type IAMentityAlreadyExistsMessage = string;
    export type IAMentityListType = Array<IAMEntityType>;
    export type IAMentityTemporarilyUnmodifiableMessage = string;
    export type IAMexistingUserNameType = string; // pattern: "[\w+=,.@-]+"
    export type IAMgroupDetailListType = Array<IAMGroupDetail>;
    export type IAMgroupListType = Array<IAMGroup>;
    export type IAMgroupNameListType = Array<IAMgroupNameType>;
    export type IAMgroupNameType = string; // pattern: "[\w+=,.@-]+"
    export type IAMidType = string; // pattern: "[\w]+"
    export type IAMinstanceProfileListType = Array<IAMInstanceProfile>;
    export type IAMinstanceProfileNameType = string; // pattern: "[\w+=,.@-]+"
    export type IAMinvalidAuthenticationCodeMessage = string;
    export type IAMinvalidCertificateMessage = string;
    export type IAMinvalidInputMessage = string;
    export type IAMinvalidPublicKeyMessage = string;
    export type IAMinvalidUserTypeMessage = string;
    export type IAMkeyPairMismatchMessage = string;
    export type IAMlimitExceededMessage = string;
    export type IAMmalformedCertificateMessage = string;
    export type IAMmalformedPolicyDocumentMessage = string;
    export type IAMmarkerType = string; // pattern: "[\u0020-\u00FF]+"
    export type IAMmaxItemsType = number;
    export type IAMmaxPasswordAgeType = number;
    export type IAMmfaDeviceListType = Array<IAMMFADevice>;
    export type IAMminimumPasswordLengthType = number;
    export type IAMnoSuchEntityMessage = string;
    export type IAMpasswordPolicyViolationMessage = string;
    export type IAMpasswordReusePreventionType = number;
    export type IAMpasswordType = string; // pattern: "[\u0009\u000A\u000D\u0020-\u00FF]+"
    export type IAMpathPrefixType = string; // pattern: "\u002F[\u0021-\u007F]*"
    export type IAMpathType = string; // pattern: "(\u002F)|(\u002F[\u0021-\u007F]+\u002F)"
    export type IAMpolicyDescriptionType = string;
    export type IAMpolicyDetailListType = Array<IAMPolicyDetail>;
    export type IAMpolicyDocumentType = string; // pattern: "[\u0009\u000A\u000D\u0020-\u00FF]+"
    export type IAMpolicyDocumentVersionListType = Array<IAMPolicyVersion>;
    export type IAMpolicyEvaluationErrorMessage = string;
    export type IAMpolicyListType = Array<IAMPolicy>;
    export type IAMpolicyNameListType = Array<IAMpolicyNameType>;
    export type IAMpolicyNameType = string; // pattern: "[\w+=,.@-]+"
    export type IAMpolicyPathType = string; // pattern: "((/[A-Za-z0-9\.,\+@=_-]+)*)/"
    export type IAMpolicyScopeType = string;
    export type IAMpolicyVersionIdType = string; // pattern: "v[1-9][0-9]*(\.[A-Za-z0-9-]*)?"
    export type IAMprivateKeyType = string; // pattern: "[\u0009\u000A\u000D\u0020-\u00FF]+"
    export type IAMpublicKeyFingerprintType = string; // pattern: "[:\w]+"
    export type IAMpublicKeyIdType = string; // pattern: "[\w]+"
    export type IAMpublicKeyMaterialType = string; // pattern: "[\u0009\u000A\u000D\u0020-\u00FF]+"
    export type IAMroleDetailListType = Array<IAMRoleDetail>;
    export type IAMroleListType = Array<IAMRole>;
    export type IAMroleNameType = string; // pattern: "[\w+=,.@-]+"
    export type IAMserialNumberType = string; // pattern: "[\w+=/:,.@-]+"
    export type IAMserverCertificateMetadataListType = Array<IAMServerCertificateMetadata>;
    export type IAMserverCertificateNameType = string; // pattern: "[\w+=,.@-]+"
    export type IAMserviceFailureExceptionMessage = string;
    export type IAMstatusType = string;
    export type IAMstringType = string;
    export type IAMsummaryKeyType = string;
    export type IAMsummaryMapType = any; // not really - it was 'map' instead - must fix this one
    export type IAMsummaryValueType = number;
    export type IAMthumbprintListType = Array<IAMthumbprintType>;
    export type IAMthumbprintType = string;
    export type IAMunrecognizedPublicKeyEncodingMessage = string;
    export type IAMuserDetailListType = Array<IAMUserDetail>;
    export type IAMuserListType = Array<IAMUser>;
    export type IAMuserNameType = string; // pattern: "[\w+=,.@-]+"
    export type IAMvirtualMFADeviceListType = Array<IAMVirtualMFADevice>;
    export type IAMvirtualMFADeviceName = string; // pattern: "[\w+=,.@-]+"
}
