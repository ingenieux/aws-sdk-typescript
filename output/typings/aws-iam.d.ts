// Type definitions for aws-sdk - AWS Identity and Access Management
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

///<reference path="./aws-sdk-common.d.ts" />

declare module "aws-sdk" {

    /*
     * apiVersion: 2010-05-08
     * endpointPrefix: iam
     * serviceAbbreviation: IAM
     * signatureVersion: v4
     * protocol: query
     */
    export class IAM extends Service {
      constructor(options?: any);
      endpoint: Endpoint;
      addClientIDToOpenIDConnectProvider(params: IAM.AddClientIDToOpenIDConnectProviderRequest, callback?: (err: IAM.InvalidInputException|IAM.NoSuchEntityException|IAM.LimitExceededException|IAM.ServiceFailureException|any, data: any) => void): Request;
      addRoleToInstanceProfile(params: IAM.AddRoleToInstanceProfileRequest, callback?: (err: IAM.NoSuchEntityException|IAM.EntityAlreadyExistsException|IAM.LimitExceededException|IAM.ServiceFailureException|any, data: any) => void): Request;
      addUserToGroup(params: IAM.AddUserToGroupRequest, callback?: (err: IAM.NoSuchEntityException|IAM.LimitExceededException|IAM.ServiceFailureException|any, data: any) => void): Request;
      attachGroupPolicy(params: IAM.AttachGroupPolicyRequest, callback?: (err: IAM.NoSuchEntityException|IAM.LimitExceededException|IAM.InvalidInputException|IAM.ServiceFailureException|any, data: any) => void): Request;
      attachRolePolicy(params: IAM.AttachRolePolicyRequest, callback?: (err: IAM.NoSuchEntityException|IAM.LimitExceededException|IAM.InvalidInputException|IAM.ServiceFailureException|any, data: any) => void): Request;
      attachUserPolicy(params: IAM.AttachUserPolicyRequest, callback?: (err: IAM.NoSuchEntityException|IAM.LimitExceededException|IAM.InvalidInputException|IAM.ServiceFailureException|any, data: any) => void): Request;
      changePassword(params: IAM.ChangePasswordRequest, callback?: (err: IAM.NoSuchEntityException|IAM.InvalidUserTypeException|IAM.LimitExceededException|IAM.EntityTemporarilyUnmodifiableException|IAM.PasswordPolicyViolationException|IAM.ServiceFailureException|any, data: any) => void): Request;
      createAccessKey(params: IAM.CreateAccessKeyRequest, callback?: (err: IAM.NoSuchEntityException|IAM.LimitExceededException|IAM.ServiceFailureException|any, data: IAM.CreateAccessKeyResponse|any) => void): Request;
      createAccountAlias(params: IAM.CreateAccountAliasRequest, callback?: (err: IAM.EntityAlreadyExistsException|IAM.LimitExceededException|IAM.ServiceFailureException|any, data: any) => void): Request;
      createGroup(params: IAM.CreateGroupRequest, callback?: (err: IAM.LimitExceededException|IAM.EntityAlreadyExistsException|IAM.NoSuchEntityException|IAM.ServiceFailureException|any, data: IAM.CreateGroupResponse|any) => void): Request;
      createInstanceProfile(params: IAM.CreateInstanceProfileRequest, callback?: (err: IAM.EntityAlreadyExistsException|IAM.LimitExceededException|IAM.ServiceFailureException|any, data: IAM.CreateInstanceProfileResponse|any) => void): Request;
      createLoginProfile(params: IAM.CreateLoginProfileRequest, callback?: (err: IAM.EntityAlreadyExistsException|IAM.NoSuchEntityException|IAM.PasswordPolicyViolationException|IAM.LimitExceededException|IAM.ServiceFailureException|any, data: IAM.CreateLoginProfileResponse|any) => void): Request;
      createOpenIDConnectProvider(params: IAM.CreateOpenIDConnectProviderRequest, callback?: (err: IAM.InvalidInputException|IAM.EntityAlreadyExistsException|IAM.LimitExceededException|IAM.ServiceFailureException|any, data: IAM.CreateOpenIDConnectProviderResponse|any) => void): Request;
      createPolicy(params: IAM.CreatePolicyRequest, callback?: (err: IAM.InvalidInputException|IAM.LimitExceededException|IAM.EntityAlreadyExistsException|IAM.MalformedPolicyDocumentException|IAM.ServiceFailureException|any, data: IAM.CreatePolicyResponse|any) => void): Request;
      createPolicyVersion(params: IAM.CreatePolicyVersionRequest, callback?: (err: IAM.NoSuchEntityException|IAM.MalformedPolicyDocumentException|IAM.InvalidInputException|IAM.LimitExceededException|IAM.ServiceFailureException|any, data: IAM.CreatePolicyVersionResponse|any) => void): Request;
      createRole(params: IAM.CreateRoleRequest, callback?: (err: IAM.LimitExceededException|IAM.EntityAlreadyExistsException|IAM.MalformedPolicyDocumentException|IAM.ServiceFailureException|any, data: IAM.CreateRoleResponse|any) => void): Request;
      createSAMLProvider(params: IAM.CreateSAMLProviderRequest, callback?: (err: IAM.InvalidInputException|IAM.EntityAlreadyExistsException|IAM.LimitExceededException|IAM.ServiceFailureException|any, data: IAM.CreateSAMLProviderResponse|any) => void): Request;
      createUser(params: IAM.CreateUserRequest, callback?: (err: IAM.LimitExceededException|IAM.EntityAlreadyExistsException|IAM.NoSuchEntityException|IAM.ServiceFailureException|any, data: IAM.CreateUserResponse|any) => void): Request;
      createVirtualMFADevice(params: IAM.CreateVirtualMFADeviceRequest, callback?: (err: IAM.LimitExceededException|IAM.EntityAlreadyExistsException|IAM.ServiceFailureException|any, data: IAM.CreateVirtualMFADeviceResponse|any) => void): Request;
      deactivateMFADevice(params: IAM.DeactivateMFADeviceRequest, callback?: (err: IAM.EntityTemporarilyUnmodifiableException|IAM.NoSuchEntityException|IAM.LimitExceededException|IAM.ServiceFailureException|any, data: any) => void): Request;
      deleteAccessKey(params: IAM.DeleteAccessKeyRequest, callback?: (err: IAM.NoSuchEntityException|IAM.LimitExceededException|IAM.ServiceFailureException|any, data: any) => void): Request;
      deleteAccountAlias(params: IAM.DeleteAccountAliasRequest, callback?: (err: IAM.NoSuchEntityException|IAM.LimitExceededException|IAM.ServiceFailureException|any, data: any) => void): Request;
      deleteAccountPasswordPolicy(callback?: (err: IAM.NoSuchEntityException|IAM.LimitExceededException|IAM.ServiceFailureException|any, data: any) => void): Request;
      deleteGroup(params: IAM.DeleteGroupRequest, callback?: (err: IAM.NoSuchEntityException|IAM.DeleteConflictException|IAM.LimitExceededException|IAM.ServiceFailureException|any, data: any) => void): Request;
      deleteGroupPolicy(params: IAM.DeleteGroupPolicyRequest, callback?: (err: IAM.NoSuchEntityException|IAM.LimitExceededException|IAM.ServiceFailureException|any, data: any) => void): Request;
      deleteInstanceProfile(params: IAM.DeleteInstanceProfileRequest, callback?: (err: IAM.NoSuchEntityException|IAM.DeleteConflictException|IAM.LimitExceededException|IAM.ServiceFailureException|any, data: any) => void): Request;
      deleteLoginProfile(params: IAM.DeleteLoginProfileRequest, callback?: (err: IAM.EntityTemporarilyUnmodifiableException|IAM.NoSuchEntityException|IAM.LimitExceededException|IAM.ServiceFailureException|any, data: any) => void): Request;
      deleteOpenIDConnectProvider(params: IAM.DeleteOpenIDConnectProviderRequest, callback?: (err: IAM.InvalidInputException|IAM.NoSuchEntityException|IAM.ServiceFailureException|any, data: any) => void): Request;
      deletePolicy(params: IAM.DeletePolicyRequest, callback?: (err: IAM.NoSuchEntityException|IAM.LimitExceededException|IAM.InvalidInputException|IAM.DeleteConflictException|IAM.ServiceFailureException|any, data: any) => void): Request;
      deletePolicyVersion(params: IAM.DeletePolicyVersionRequest, callback?: (err: IAM.NoSuchEntityException|IAM.LimitExceededException|IAM.InvalidInputException|IAM.DeleteConflictException|IAM.ServiceFailureException|any, data: any) => void): Request;
      deleteRole(params: IAM.DeleteRoleRequest, callback?: (err: IAM.NoSuchEntityException|IAM.DeleteConflictException|IAM.LimitExceededException|IAM.ServiceFailureException|any, data: any) => void): Request;
      deleteRolePolicy(params: IAM.DeleteRolePolicyRequest, callback?: (err: IAM.NoSuchEntityException|IAM.LimitExceededException|IAM.ServiceFailureException|any, data: any) => void): Request;
      deleteSAMLProvider(params: IAM.DeleteSAMLProviderRequest, callback?: (err: IAM.InvalidInputException|IAM.LimitExceededException|IAM.NoSuchEntityException|IAM.ServiceFailureException|any, data: any) => void): Request;
      deleteSSHPublicKey(params: IAM.DeleteSSHPublicKeyRequest, callback?: (err: IAM.NoSuchEntityException|any, data: any) => void): Request;
      deleteServerCertificate(params: IAM.DeleteServerCertificateRequest, callback?: (err: IAM.NoSuchEntityException|IAM.DeleteConflictException|IAM.LimitExceededException|IAM.ServiceFailureException|any, data: any) => void): Request;
      deleteSigningCertificate(params: IAM.DeleteSigningCertificateRequest, callback?: (err: IAM.NoSuchEntityException|IAM.LimitExceededException|IAM.ServiceFailureException|any, data: any) => void): Request;
      deleteUser(params: IAM.DeleteUserRequest, callback?: (err: IAM.LimitExceededException|IAM.NoSuchEntityException|IAM.DeleteConflictException|IAM.ServiceFailureException|any, data: any) => void): Request;
      deleteUserPolicy(params: IAM.DeleteUserPolicyRequest, callback?: (err: IAM.NoSuchEntityException|IAM.LimitExceededException|IAM.ServiceFailureException|any, data: any) => void): Request;
      deleteVirtualMFADevice(params: IAM.DeleteVirtualMFADeviceRequest, callback?: (err: IAM.NoSuchEntityException|IAM.DeleteConflictException|IAM.LimitExceededException|IAM.ServiceFailureException|any, data: any) => void): Request;
      detachGroupPolicy(params: IAM.DetachGroupPolicyRequest, callback?: (err: IAM.NoSuchEntityException|IAM.LimitExceededException|IAM.InvalidInputException|IAM.ServiceFailureException|any, data: any) => void): Request;
      detachRolePolicy(params: IAM.DetachRolePolicyRequest, callback?: (err: IAM.NoSuchEntityException|IAM.LimitExceededException|IAM.InvalidInputException|IAM.ServiceFailureException|any, data: any) => void): Request;
      detachUserPolicy(params: IAM.DetachUserPolicyRequest, callback?: (err: IAM.NoSuchEntityException|IAM.LimitExceededException|IAM.InvalidInputException|IAM.ServiceFailureException|any, data: any) => void): Request;
      enableMFADevice(params: IAM.EnableMFADeviceRequest, callback?: (err: IAM.EntityAlreadyExistsException|IAM.EntityTemporarilyUnmodifiableException|IAM.InvalidAuthenticationCodeException|IAM.LimitExceededException|IAM.NoSuchEntityException|IAM.ServiceFailureException|any, data: any) => void): Request;
      generateCredentialReport(callback?: (err: IAM.LimitExceededException|IAM.ServiceFailureException|any, data: IAM.GenerateCredentialReportResponse|any) => void): Request;
      getAccessKeyLastUsed(params: IAM.GetAccessKeyLastUsedRequest, callback?: (err: IAM.NoSuchEntityException|any, data: IAM.GetAccessKeyLastUsedResponse|any) => void): Request;
      getAccountAuthorizationDetails(params: IAM.GetAccountAuthorizationDetailsRequest, callback?: (err: IAM.ServiceFailureException|any, data: IAM.GetAccountAuthorizationDetailsResponse|any) => void): Request;
      getAccountPasswordPolicy(callback?: (err: IAM.NoSuchEntityException|IAM.ServiceFailureException|any, data: IAM.GetAccountPasswordPolicyResponse|any) => void): Request;
      getAccountSummary(callback?: (err: IAM.ServiceFailureException|any, data: IAM.GetAccountSummaryResponse|any) => void): Request;
      getContextKeysForCustomPolicy(params: IAM.GetContextKeysForCustomPolicyRequest, callback?: (err: IAM.InvalidInputException|any, data: IAM.GetContextKeysForPolicyResponse|any) => void): Request;
      getContextKeysForPrincipalPolicy(params: IAM.GetContextKeysForPrincipalPolicyRequest, callback?: (err: IAM.NoSuchEntityException|IAM.InvalidInputException|any, data: IAM.GetContextKeysForPolicyResponse|any) => void): Request;
      getCredentialReport(callback?: (err: IAM.CredentialReportNotPresentException|IAM.CredentialReportExpiredException|IAM.CredentialReportNotReadyException|IAM.ServiceFailureException|any, data: IAM.GetCredentialReportResponse|any) => void): Request;
      getGroup(params: IAM.GetGroupRequest, callback?: (err: IAM.NoSuchEntityException|IAM.ServiceFailureException|any, data: IAM.GetGroupResponse|any) => void): Request;
      getGroupPolicy(params: IAM.GetGroupPolicyRequest, callback?: (err: IAM.NoSuchEntityException|IAM.ServiceFailureException|any, data: IAM.GetGroupPolicyResponse|any) => void): Request;
      getInstanceProfile(params: IAM.GetInstanceProfileRequest, callback?: (err: IAM.NoSuchEntityException|IAM.ServiceFailureException|any, data: IAM.GetInstanceProfileResponse|any) => void): Request;
      getLoginProfile(params: IAM.GetLoginProfileRequest, callback?: (err: IAM.NoSuchEntityException|IAM.ServiceFailureException|any, data: IAM.GetLoginProfileResponse|any) => void): Request;
      getOpenIDConnectProvider(params: IAM.GetOpenIDConnectProviderRequest, callback?: (err: IAM.InvalidInputException|IAM.NoSuchEntityException|IAM.ServiceFailureException|any, data: IAM.GetOpenIDConnectProviderResponse|any) => void): Request;
      getPolicy(params: IAM.GetPolicyRequest, callback?: (err: IAM.NoSuchEntityException|IAM.InvalidInputException|IAM.ServiceFailureException|any, data: IAM.GetPolicyResponse|any) => void): Request;
      getPolicyVersion(params: IAM.GetPolicyVersionRequest, callback?: (err: IAM.NoSuchEntityException|IAM.InvalidInputException|IAM.ServiceFailureException|any, data: IAM.GetPolicyVersionResponse|any) => void): Request;
      getRole(params: IAM.GetRoleRequest, callback?: (err: IAM.NoSuchEntityException|IAM.ServiceFailureException|any, data: IAM.GetRoleResponse|any) => void): Request;
      getRolePolicy(params: IAM.GetRolePolicyRequest, callback?: (err: IAM.NoSuchEntityException|IAM.ServiceFailureException|any, data: IAM.GetRolePolicyResponse|any) => void): Request;
      getSAMLProvider(params: IAM.GetSAMLProviderRequest, callback?: (err: IAM.NoSuchEntityException|IAM.InvalidInputException|IAM.ServiceFailureException|any, data: IAM.GetSAMLProviderResponse|any) => void): Request;
      getSSHPublicKey(params: IAM.GetSSHPublicKeyRequest, callback?: (err: IAM.NoSuchEntityException|IAM.UnrecognizedPublicKeyEncodingException|any, data: IAM.GetSSHPublicKeyResponse|any) => void): Request;
      getServerCertificate(params: IAM.GetServerCertificateRequest, callback?: (err: IAM.NoSuchEntityException|IAM.ServiceFailureException|any, data: IAM.GetServerCertificateResponse|any) => void): Request;
      getUser(params: IAM.GetUserRequest, callback?: (err: IAM.NoSuchEntityException|IAM.ServiceFailureException|any, data: IAM.GetUserResponse|any) => void): Request;
      getUserPolicy(params: IAM.GetUserPolicyRequest, callback?: (err: IAM.NoSuchEntityException|IAM.ServiceFailureException|any, data: IAM.GetUserPolicyResponse|any) => void): Request;
      listAccessKeys(params: IAM.ListAccessKeysRequest, callback?: (err: IAM.NoSuchEntityException|IAM.ServiceFailureException|any, data: IAM.ListAccessKeysResponse|any) => void): Request;
      listAccountAliases(params: IAM.ListAccountAliasesRequest, callback?: (err: IAM.ServiceFailureException|any, data: IAM.ListAccountAliasesResponse|any) => void): Request;
      listAttachedGroupPolicies(params: IAM.ListAttachedGroupPoliciesRequest, callback?: (err: IAM.NoSuchEntityException|IAM.InvalidInputException|IAM.ServiceFailureException|any, data: IAM.ListAttachedGroupPoliciesResponse|any) => void): Request;
      listAttachedRolePolicies(params: IAM.ListAttachedRolePoliciesRequest, callback?: (err: IAM.NoSuchEntityException|IAM.InvalidInputException|IAM.ServiceFailureException|any, data: IAM.ListAttachedRolePoliciesResponse|any) => void): Request;
      listAttachedUserPolicies(params: IAM.ListAttachedUserPoliciesRequest, callback?: (err: IAM.NoSuchEntityException|IAM.InvalidInputException|IAM.ServiceFailureException|any, data: IAM.ListAttachedUserPoliciesResponse|any) => void): Request;
      listEntitiesForPolicy(params: IAM.ListEntitiesForPolicyRequest, callback?: (err: IAM.NoSuchEntityException|IAM.InvalidInputException|IAM.ServiceFailureException|any, data: IAM.ListEntitiesForPolicyResponse|any) => void): Request;
      listGroupPolicies(params: IAM.ListGroupPoliciesRequest, callback?: (err: IAM.NoSuchEntityException|IAM.ServiceFailureException|any, data: IAM.ListGroupPoliciesResponse|any) => void): Request;
      listGroups(params: IAM.ListGroupsRequest, callback?: (err: IAM.ServiceFailureException|any, data: IAM.ListGroupsResponse|any) => void): Request;
      listGroupsForUser(params: IAM.ListGroupsForUserRequest, callback?: (err: IAM.NoSuchEntityException|IAM.ServiceFailureException|any, data: IAM.ListGroupsForUserResponse|any) => void): Request;
      listInstanceProfiles(params: IAM.ListInstanceProfilesRequest, callback?: (err: IAM.ServiceFailureException|any, data: IAM.ListInstanceProfilesResponse|any) => void): Request;
      listInstanceProfilesForRole(params: IAM.ListInstanceProfilesForRoleRequest, callback?: (err: IAM.NoSuchEntityException|IAM.ServiceFailureException|any, data: IAM.ListInstanceProfilesForRoleResponse|any) => void): Request;
      listMFADevices(params: IAM.ListMFADevicesRequest, callback?: (err: IAM.NoSuchEntityException|IAM.ServiceFailureException|any, data: IAM.ListMFADevicesResponse|any) => void): Request;
      listOpenIDConnectProviders(params: IAM.ListOpenIDConnectProvidersRequest, callback?: (err: IAM.ServiceFailureException|any, data: IAM.ListOpenIDConnectProvidersResponse|any) => void): Request;
      listPolicies(params: IAM.ListPoliciesRequest, callback?: (err: IAM.ServiceFailureException|any, data: IAM.ListPoliciesResponse|any) => void): Request;
      listPolicyVersions(params: IAM.ListPolicyVersionsRequest, callback?: (err: IAM.NoSuchEntityException|IAM.InvalidInputException|IAM.ServiceFailureException|any, data: IAM.ListPolicyVersionsResponse|any) => void): Request;
      listRolePolicies(params: IAM.ListRolePoliciesRequest, callback?: (err: IAM.NoSuchEntityException|IAM.ServiceFailureException|any, data: IAM.ListRolePoliciesResponse|any) => void): Request;
      listRoles(params: IAM.ListRolesRequest, callback?: (err: IAM.ServiceFailureException|any, data: IAM.ListRolesResponse|any) => void): Request;
      listSAMLProviders(params: IAM.ListSAMLProvidersRequest, callback?: (err: IAM.ServiceFailureException|any, data: IAM.ListSAMLProvidersResponse|any) => void): Request;
      listSSHPublicKeys(params: IAM.ListSSHPublicKeysRequest, callback?: (err: IAM.NoSuchEntityException|any, data: IAM.ListSSHPublicKeysResponse|any) => void): Request;
      listServerCertificates(params: IAM.ListServerCertificatesRequest, callback?: (err: IAM.ServiceFailureException|any, data: IAM.ListServerCertificatesResponse|any) => void): Request;
      listSigningCertificates(params: IAM.ListSigningCertificatesRequest, callback?: (err: IAM.NoSuchEntityException|IAM.ServiceFailureException|any, data: IAM.ListSigningCertificatesResponse|any) => void): Request;
      listUserPolicies(params: IAM.ListUserPoliciesRequest, callback?: (err: IAM.NoSuchEntityException|IAM.ServiceFailureException|any, data: IAM.ListUserPoliciesResponse|any) => void): Request;
      listUsers(params: IAM.ListUsersRequest, callback?: (err: IAM.ServiceFailureException|any, data: IAM.ListUsersResponse|any) => void): Request;
      listVirtualMFADevices(params: IAM.ListVirtualMFADevicesRequest, callback?: (err: any, data: IAM.ListVirtualMFADevicesResponse|any) => void): Request;
      putGroupPolicy(params: IAM.PutGroupPolicyRequest, callback?: (err: IAM.LimitExceededException|IAM.MalformedPolicyDocumentException|IAM.NoSuchEntityException|IAM.ServiceFailureException|any, data: any) => void): Request;
      putRolePolicy(params: IAM.PutRolePolicyRequest, callback?: (err: IAM.LimitExceededException|IAM.MalformedPolicyDocumentException|IAM.NoSuchEntityException|IAM.ServiceFailureException|any, data: any) => void): Request;
      putUserPolicy(params: IAM.PutUserPolicyRequest, callback?: (err: IAM.LimitExceededException|IAM.MalformedPolicyDocumentException|IAM.NoSuchEntityException|IAM.ServiceFailureException|any, data: any) => void): Request;
      removeClientIDFromOpenIDConnectProvider(params: IAM.RemoveClientIDFromOpenIDConnectProviderRequest, callback?: (err: IAM.InvalidInputException|IAM.NoSuchEntityException|IAM.ServiceFailureException|any, data: any) => void): Request;
      removeRoleFromInstanceProfile(params: IAM.RemoveRoleFromInstanceProfileRequest, callback?: (err: IAM.NoSuchEntityException|IAM.LimitExceededException|IAM.ServiceFailureException|any, data: any) => void): Request;
      removeUserFromGroup(params: IAM.RemoveUserFromGroupRequest, callback?: (err: IAM.NoSuchEntityException|IAM.LimitExceededException|IAM.ServiceFailureException|any, data: any) => void): Request;
      resyncMFADevice(params: IAM.ResyncMFADeviceRequest, callback?: (err: IAM.InvalidAuthenticationCodeException|IAM.NoSuchEntityException|IAM.LimitExceededException|IAM.ServiceFailureException|any, data: any) => void): Request;
      setDefaultPolicyVersion(params: IAM.SetDefaultPolicyVersionRequest, callback?: (err: IAM.NoSuchEntityException|IAM.InvalidInputException|IAM.LimitExceededException|IAM.ServiceFailureException|any, data: any) => void): Request;
      simulateCustomPolicy(params: IAM.SimulateCustomPolicyRequest, callback?: (err: IAM.InvalidInputException|IAM.PolicyEvaluationException|any, data: IAM.SimulatePolicyResponse|any) => void): Request;
      simulatePrincipalPolicy(params: IAM.SimulatePrincipalPolicyRequest, callback?: (err: IAM.NoSuchEntityException|IAM.InvalidInputException|IAM.PolicyEvaluationException|any, data: IAM.SimulatePolicyResponse|any) => void): Request;
      updateAccessKey(params: IAM.UpdateAccessKeyRequest, callback?: (err: IAM.NoSuchEntityException|IAM.LimitExceededException|IAM.ServiceFailureException|any, data: any) => void): Request;
      updateAccountPasswordPolicy(params: IAM.UpdateAccountPasswordPolicyRequest, callback?: (err: IAM.NoSuchEntityException|IAM.MalformedPolicyDocumentException|IAM.LimitExceededException|IAM.ServiceFailureException|any, data: any) => void): Request;
      updateAssumeRolePolicy(params: IAM.UpdateAssumeRolePolicyRequest, callback?: (err: IAM.NoSuchEntityException|IAM.MalformedPolicyDocumentException|IAM.LimitExceededException|IAM.ServiceFailureException|any, data: any) => void): Request;
      updateGroup(params: IAM.UpdateGroupRequest, callback?: (err: IAM.NoSuchEntityException|IAM.EntityAlreadyExistsException|IAM.LimitExceededException|IAM.ServiceFailureException|any, data: any) => void): Request;
      updateLoginProfile(params: IAM.UpdateLoginProfileRequest, callback?: (err: IAM.EntityTemporarilyUnmodifiableException|IAM.NoSuchEntityException|IAM.PasswordPolicyViolationException|IAM.LimitExceededException|IAM.ServiceFailureException|any, data: any) => void): Request;
      updateOpenIDConnectProviderThumbprint(params: IAM.UpdateOpenIDConnectProviderThumbprintRequest, callback?: (err: IAM.InvalidInputException|IAM.NoSuchEntityException|IAM.ServiceFailureException|any, data: any) => void): Request;
      updateSAMLProvider(params: IAM.UpdateSAMLProviderRequest, callback?: (err: IAM.NoSuchEntityException|IAM.InvalidInputException|IAM.LimitExceededException|IAM.ServiceFailureException|any, data: IAM.UpdateSAMLProviderResponse|any) => void): Request;
      updateSSHPublicKey(params: IAM.UpdateSSHPublicKeyRequest, callback?: (err: IAM.NoSuchEntityException|any, data: any) => void): Request;
      updateServerCertificate(params: IAM.UpdateServerCertificateRequest, callback?: (err: IAM.NoSuchEntityException|IAM.EntityAlreadyExistsException|IAM.LimitExceededException|IAM.ServiceFailureException|any, data: any) => void): Request;
      updateSigningCertificate(params: IAM.UpdateSigningCertificateRequest, callback?: (err: IAM.NoSuchEntityException|IAM.LimitExceededException|IAM.ServiceFailureException|any, data: any) => void): Request;
      updateUser(params: IAM.UpdateUserRequest, callback?: (err: IAM.NoSuchEntityException|IAM.LimitExceededException|IAM.EntityAlreadyExistsException|IAM.EntityTemporarilyUnmodifiableException|IAM.ServiceFailureException|any, data: any) => void): Request;
      uploadSSHPublicKey(params: IAM.UploadSSHPublicKeyRequest, callback?: (err: IAM.LimitExceededException|IAM.NoSuchEntityException|IAM.InvalidPublicKeyException|IAM.DuplicateSSHPublicKeyException|IAM.UnrecognizedPublicKeyEncodingException|any, data: IAM.UploadSSHPublicKeyResponse|any) => void): Request;
      uploadServerCertificate(params: IAM.UploadServerCertificateRequest, callback?: (err: IAM.LimitExceededException|IAM.EntityAlreadyExistsException|IAM.MalformedCertificateException|IAM.KeyPairMismatchException|IAM.ServiceFailureException|any, data: IAM.UploadServerCertificateResponse|any) => void): Request;
      uploadSigningCertificate(params: IAM.UploadSigningCertificateRequest, callback?: (err: IAM.LimitExceededException|IAM.EntityAlreadyExistsException|IAM.MalformedCertificateException|IAM.InvalidCertificateException|IAM.DuplicateCertificateException|IAM.NoSuchEntityException|IAM.ServiceFailureException|any, data: IAM.UploadSigningCertificateResponse|any) => void): Request;

    }

    export module IAM {
        export type ActionNameListType = ActionNameType[];
        export type ActionNameType = string;    // max: 128, min: 3
        export type BootstrapDatum = any;    // type: blob
        export type ColumnNumber = number;
        export type ContextEntryListType = ContextEntry[];
        export type ContextKeyNameType = string;    // max: 256, min: 5
        export type ContextKeyNamesResultListType = ContextKeyNameType[];
        export type ContextKeyTypeEnum = string;
        export type ContextKeyValueListType = ContextKeyValueType[];
        export type ContextKeyValueType = string;
        export type EntityType = string;
        export type EvalDecisionDetailsType = {[key:string]: PolicyEvaluationDecisionType};
        export type EvalDecisionSourceType = string;    // max: 256, min: 3
        export type EvaluationResultsListType = EvaluationResult[];
        export type LineNumber = number;
        export type ManagedPolicyDetailListType = ManagedPolicyDetail[];
        export type OpenIDConnectProviderListType = OpenIDConnectProviderListEntry[];
        export type OpenIDConnectProviderUrlType = string;    // max: 255, min: 1
        export type PolicyEvaluationDecisionType = string;
        export type PolicyGroupListType = PolicyGroup[];
        export type PolicyIdentifierType = string;
        export type PolicyRoleListType = PolicyRole[];
        export type PolicySourceType = string;
        export type PolicyUserListType = PolicyUser[];
        export type ReportContentType = any;    // type: blob
        export type ReportFormatType = string;
        export type ReportStateDescriptionType = string;
        export type ReportStateType = string;
        export type ResourceHandlingOptionType = string;    // max: 64, min: 1
        export type ResourceNameListType = ResourceNameType[];
        export type ResourceNameType = string;    // max: 2048, min: 1
        export type ResourceSpecificResultListType = ResourceSpecificResult[];
        export type SAMLMetadataDocumentType = string;    // max: 10000000, min: 1000
        export type SAMLProviderListType = SAMLProviderListEntry[];
        export type SAMLProviderNameType = string;    // pattern: &quot;[\w._-]+&quot;, max: 128, min: 1
        export type SSHPublicKeyListType = SSHPublicKeyMetadata[];
        export type SimulationPolicyListType = policyDocumentType[];
        export type StatementListType = Statement[];
        export type accessKeyIdType = string;    // pattern: &quot;[\w]+&quot;, max: 32, min: 16
        export type accessKeyMetadataListType = AccessKeyMetadata[];
        export type accessKeySecretType = string;
        export type accountAliasListType = accountAliasType[];
        export type accountAliasType = string;    // pattern: &quot;^[a-z0-9](([a-z0-9]|-(?!-))*[a-z0-9])?$&quot;, max: 63, min: 3
        export type arnType = string;    // max: 2048, min: 20
        export type assignmentStatusType = string;
        export type attachedPoliciesListType = AttachedPolicy[];
        export type attachmentCountType = number;
        export type authenticationCodeType = string;    // pattern: &quot;[\d]+&quot;, max: 6, min: 6
        export type booleanObjectType = boolean;
        export type booleanType = boolean;
        export type certificateBodyType = string;    // pattern: &quot;[\u0009\u000A\u000D\u0020-\u00FF]+&quot;, max: 16384, min: 1
        export type certificateChainType = string;    // pattern: &quot;[\u0009\u000A\u000D\u0020-\u00FF]+&quot;, max: 2097152, min: 1
        export type certificateIdType = string;    // pattern: &quot;[\w]+&quot;, max: 128, min: 24
        export type certificateListType = SigningCertificate[];
        export type clientIDListType = clientIDType[];
        export type clientIDType = string;    // max: 255, min: 1
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
        export type existingUserNameType = string;    // pattern: &quot;[\w+=,.@-]+&quot;, max: 128, min: 1
        export type groupDetailListType = GroupDetail[];
        export type groupListType = Group[];
        export type groupNameListType = groupNameType[];
        export type groupNameType = string;    // pattern: &quot;[\w+=,.@-]+&quot;, max: 128, min: 1
        export type idType = string;    // pattern: &quot;[\w]+&quot;, max: 32, min: 16
        export type instanceProfileListType = InstanceProfile[];
        export type instanceProfileNameType = string;    // pattern: &quot;[\w+=,.@-]+&quot;, max: 128, min: 1
        export type invalidAuthenticationCodeMessage = string;
        export type invalidCertificateMessage = string;
        export type invalidInputMessage = string;
        export type invalidPublicKeyMessage = string;
        export type invalidUserTypeMessage = string;
        export type keyPairMismatchMessage = string;
        export type limitExceededMessage = string;
        export type malformedCertificateMessage = string;
        export type malformedPolicyDocumentMessage = string;
        export type markerType = string;    // pattern: &quot;[\u0020-\u00FF]+&quot;, max: 320, min: 1
        export type maxItemsType = number;    // max: 1000, min: 1
        export type maxPasswordAgeType = number;    // max: 1095, min: 1
        export type mfaDeviceListType = MFADevice[];
        export type minimumPasswordLengthType = number;    // max: 128, min: 6
        export type noSuchEntityMessage = string;
        export type passwordPolicyViolationMessage = string;
        export type passwordReusePreventionType = number;    // max: 24, min: 1
        export type passwordType = string;    // pattern: &quot;[\u0009\u000A\u000D\u0020-\u00FF]+&quot;, max: 128, min: 1
        export type pathPrefixType = string;    // pattern: &quot;\u002F[\u0021-\u007F]*&quot;, max: 512, min: 1
        export type pathType = string;    // pattern: &quot;(\u002F)|(\u002F[\u0021-\u007F]+\u002F)&quot;, max: 512, min: 1
        export type policyDescriptionType = string;    // max: 1000
        export type policyDetailListType = PolicyDetail[];
        export type policyDocumentType = string;    // pattern: &quot;[\u0009\u000A\u000D\u0020-\u00FF]+&quot;, max: 131072, min: 1
        export type policyDocumentVersionListType = PolicyVersion[];
        export type policyEvaluationErrorMessage = string;
        export type policyListType = Policy[];
        export type policyNameListType = policyNameType[];
        export type policyNameType = string;    // pattern: &quot;[\w+=,.@-]+&quot;, max: 128, min: 1
        export type policyPathType = string;    // pattern: &quot;((/[A-Za-z0-9\.,\+@=_-]+)*)/&quot;
        export type policyScopeType = string;
        export type policyVersionIdType = string;    // pattern: &quot;v[1-9][0-9]*(\.[A-Za-z0-9-]*)?&quot;
        export type privateKeyType = string;    // pattern: &quot;[\u0009\u000A\u000D\u0020-\u00FF]+&quot;, max: 16384, min: 1
        export type publicKeyFingerprintType = string;    // pattern: &quot;[:\w]+&quot;, max: 48, min: 48
        export type publicKeyIdType = string;    // pattern: &quot;[\w]+&quot;, max: 128, min: 20
        export type publicKeyMaterialType = string;    // pattern: &quot;[\u0009\u000A\u000D\u0020-\u00FF]+&quot;, max: 16384, min: 1
        export type roleDetailListType = RoleDetail[];
        export type roleListType = Role[];
        export type roleNameType = string;    // pattern: &quot;[\w+=,.@-]+&quot;, max: 64, min: 1
        export type serialNumberType = string;    // pattern: &quot;[\w+=/:,.@-]+&quot;, max: 256, min: 9
        export type serverCertificateMetadataListType = ServerCertificateMetadata[];
        export type serverCertificateNameType = string;    // pattern: &quot;[\w+=,.@-]+&quot;, max: 128, min: 1
        export type serviceFailureExceptionMessage = string;
        export type statusType = string;
        export type stringType = string;
        export type summaryKeyType = string;
        export type summaryMapType = {[key:string]: summaryValueType};
        export type summaryValueType = number;
        export type thumbprintListType = thumbprintType[];
        export type thumbprintType = string;    // max: 40, min: 40
        export type unrecognizedPublicKeyEncodingMessage = string;
        export type userDetailListType = UserDetail[];
        export type userListType = User[];
        export type userNameType = string;    // pattern: &quot;[\w+=,.@-]+&quot;, max: 64, min: 1
        export type virtualMFADeviceListType = VirtualMFADevice[];
        export type virtualMFADeviceName = string;    // pattern: &quot;[\w+=,.@-]+&quot;, min: 1

        export interface AccessKey {
            UserName: userNameType;
            AccessKeyId: accessKeyIdType;
            Status: statusType;
            SecretAccessKey: accessKeySecretType;
            CreateDate?: dateType;
        }
        export interface AccessKeyLastUsed {
            LastUsedDate: dateType;
            ServiceName: stringType;
            Region: stringType;
        }
        export interface AccessKeyMetadata {
            UserName?: userNameType;
            AccessKeyId?: accessKeyIdType;
            Status?: statusType;
            CreateDate?: dateType;
        }
        export interface AddClientIDToOpenIDConnectProviderRequest {
            OpenIDConnectProviderArn: arnType;
            ClientID: clientIDType;
        }
        export interface AddRoleToInstanceProfileRequest {
            InstanceProfileName: instanceProfileNameType;
            RoleName: roleNameType;
        }
        export interface AddUserToGroupRequest {
            GroupName: groupNameType;
            UserName: existingUserNameType;
        }
        export interface AttachGroupPolicyRequest {
            GroupName: groupNameType;
            PolicyArn: arnType;
        }
        export interface AttachRolePolicyRequest {
            RoleName: roleNameType;
            PolicyArn: arnType;
        }
        export interface AttachUserPolicyRequest {
            UserName: userNameType;
            PolicyArn: arnType;
        }
        export interface AttachedPolicy {
            PolicyName?: policyNameType;
            PolicyArn?: arnType;
        }
        export interface ChangePasswordRequest {
            OldPassword: passwordType;
            NewPassword: passwordType;
        }
        export interface ContextEntry {
            ContextKeyName?: ContextKeyNameType;
            ContextKeyValues?: ContextKeyValueListType;
            ContextKeyType?: ContextKeyTypeEnum;
        }
        export interface CreateAccessKeyRequest {
            UserName?: existingUserNameType;
        }
        export interface CreateAccessKeyResponse {
            AccessKey: AccessKey;
        }
        export interface CreateAccountAliasRequest {
            AccountAlias: accountAliasType;
        }
        export interface CreateGroupRequest {
            Path?: pathType;
            GroupName: groupNameType;
        }
        export interface CreateGroupResponse {
            Group: Group;
        }
        export interface CreateInstanceProfileRequest {
            InstanceProfileName: instanceProfileNameType;
            Path?: pathType;
        }
        export interface CreateInstanceProfileResponse {
            InstanceProfile: InstanceProfile;
        }
        export interface CreateLoginProfileRequest {
            UserName: userNameType;
            Password: passwordType;
            PasswordResetRequired?: booleanType;
        }
        export interface CreateLoginProfileResponse {
            LoginProfile: LoginProfile;
        }
        export interface CreateOpenIDConnectProviderRequest {
            Url: OpenIDConnectProviderUrlType;
            ClientIDList?: clientIDListType;
            ThumbprintList: thumbprintListType;
        }
        export interface CreateOpenIDConnectProviderResponse {
            OpenIDConnectProviderArn?: arnType;
        }
        export interface CreatePolicyRequest {
            PolicyName: policyNameType;
            Path?: policyPathType;
            PolicyDocument: policyDocumentType;
            Description?: policyDescriptionType;
        }
        export interface CreatePolicyResponse {
            Policy?: Policy;
        }
        export interface CreatePolicyVersionRequest {
            PolicyArn: arnType;
            PolicyDocument: policyDocumentType;
            SetAsDefault?: booleanType;
        }
        export interface CreatePolicyVersionResponse {
            PolicyVersion?: PolicyVersion;
        }
        export interface CreateRoleRequest {
            Path?: pathType;
            RoleName: roleNameType;
            AssumeRolePolicyDocument: policyDocumentType;
        }
        export interface CreateRoleResponse {
            Role: Role;
        }
        export interface CreateSAMLProviderRequest {
            SAMLMetadataDocument: SAMLMetadataDocumentType;
            Name: SAMLProviderNameType;
        }
        export interface CreateSAMLProviderResponse {
            SAMLProviderArn?: arnType;
        }
        export interface CreateUserRequest {
            Path?: pathType;
            UserName: userNameType;
        }
        export interface CreateUserResponse {
            User?: User;
        }
        export interface CreateVirtualMFADeviceRequest {
            Path?: pathType;
            VirtualMFADeviceName: virtualMFADeviceName;
        }
        export interface CreateVirtualMFADeviceResponse {
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
            UserName: existingUserNameType;
            SerialNumber: serialNumberType;
        }
        export interface DeleteAccessKeyRequest {
            UserName?: existingUserNameType;
            AccessKeyId: accessKeyIdType;
        }
        export interface DeleteAccountAliasRequest {
            AccountAlias: accountAliasType;
        }
        export interface DeleteConflictException {
            message?: deleteConflictMessage;
        }
        export interface DeleteGroupPolicyRequest {
            GroupName: groupNameType;
            PolicyName: policyNameType;
        }
        export interface DeleteGroupRequest {
            GroupName: groupNameType;
        }
        export interface DeleteInstanceProfileRequest {
            InstanceProfileName: instanceProfileNameType;
        }
        export interface DeleteLoginProfileRequest {
            UserName: userNameType;
        }
        export interface DeleteOpenIDConnectProviderRequest {
            OpenIDConnectProviderArn: arnType;
        }
        export interface DeletePolicyRequest {
            PolicyArn: arnType;
        }
        export interface DeletePolicyVersionRequest {
            PolicyArn: arnType;
            VersionId: policyVersionIdType;
        }
        export interface DeleteRolePolicyRequest {
            RoleName: roleNameType;
            PolicyName: policyNameType;
        }
        export interface DeleteRoleRequest {
            RoleName: roleNameType;
        }
        export interface DeleteSAMLProviderRequest {
            SAMLProviderArn: arnType;
        }
        export interface DeleteSSHPublicKeyRequest {
            UserName: userNameType;
            SSHPublicKeyId: publicKeyIdType;
        }
        export interface DeleteServerCertificateRequest {
            ServerCertificateName: serverCertificateNameType;
        }
        export interface DeleteSigningCertificateRequest {
            UserName?: existingUserNameType;
            CertificateId: certificateIdType;
        }
        export interface DeleteUserPolicyRequest {
            UserName: existingUserNameType;
            PolicyName: policyNameType;
        }
        export interface DeleteUserRequest {
            UserName: existingUserNameType;
        }
        export interface DeleteVirtualMFADeviceRequest {
            SerialNumber: serialNumberType;
        }
        export interface DetachGroupPolicyRequest {
            GroupName: groupNameType;
            PolicyArn: arnType;
        }
        export interface DetachRolePolicyRequest {
            RoleName: roleNameType;
            PolicyArn: arnType;
        }
        export interface DetachUserPolicyRequest {
            UserName: userNameType;
            PolicyArn: arnType;
        }
        export interface DuplicateCertificateException {
            message?: duplicateCertificateMessage;
        }
        export interface DuplicateSSHPublicKeyException {
            message?: duplicateSSHPublicKeyMessage;
        }
        export interface EnableMFADeviceRequest {
            UserName: existingUserNameType;
            SerialNumber: serialNumberType;
            AuthenticationCode1: authenticationCodeType;
            AuthenticationCode2: authenticationCodeType;
        }
        export interface EntityAlreadyExistsException {
            message?: entityAlreadyExistsMessage;
        }
        export interface EntityTemporarilyUnmodifiableException {
            message?: entityTemporarilyUnmodifiableMessage;
        }
        export interface EvaluationResult {
            EvalActionName: ActionNameType;
            EvalResourceName?: ResourceNameType;
            EvalDecision: PolicyEvaluationDecisionType;
            MatchedStatements?: StatementListType;
            MissingContextValues?: ContextKeyNamesResultListType;
            EvalDecisionDetails?: EvalDecisionDetailsType;
            ResourceSpecificResults?: ResourceSpecificResultListType;
        }
        export interface GenerateCredentialReportResponse {
            State?: ReportStateType;
            Description?: ReportStateDescriptionType;
        }
        export interface GetAccessKeyLastUsedRequest {
            AccessKeyId: accessKeyIdType;
        }
        export interface GetAccessKeyLastUsedResponse {
            UserName?: existingUserNameType;
            AccessKeyLastUsed?: AccessKeyLastUsed;
        }
        export interface GetAccountAuthorizationDetailsRequest {
            Filter?: entityListType;
            MaxItems?: maxItemsType;
            Marker?: markerType;
        }
        export interface GetAccountAuthorizationDetailsResponse {
            UserDetailList?: userDetailListType;
            GroupDetailList?: groupDetailListType;
            RoleDetailList?: roleDetailListType;
            Policies?: ManagedPolicyDetailListType;
            IsTruncated?: booleanType;
            Marker?: markerType;
        }
        export interface GetAccountPasswordPolicyResponse {
            PasswordPolicy: PasswordPolicy;
        }
        export interface GetAccountSummaryResponse {
            SummaryMap?: summaryMapType;
        }
        export interface GetContextKeysForCustomPolicyRequest {
            PolicyInputList: SimulationPolicyListType;
        }
        export interface GetContextKeysForPolicyResponse {
            ContextKeyNames?: ContextKeyNamesResultListType;
        }
        export interface GetContextKeysForPrincipalPolicyRequest {
            PolicySourceArn: arnType;
            PolicyInputList?: SimulationPolicyListType;
        }
        export interface GetCredentialReportResponse {
            Content?: ReportContentType;
            ReportFormat?: ReportFormatType;
            GeneratedTime?: dateType;
        }
        export interface GetGroupPolicyRequest {
            GroupName: groupNameType;
            PolicyName: policyNameType;
        }
        export interface GetGroupPolicyResponse {
            GroupName: groupNameType;
            PolicyName: policyNameType;
            PolicyDocument: policyDocumentType;
        }
        export interface GetGroupRequest {
            GroupName: groupNameType;
            Marker?: markerType;
            MaxItems?: maxItemsType;
        }
        export interface GetGroupResponse {
            Group: Group;
            Users: userListType;
            IsTruncated?: booleanType;
            Marker?: markerType;
        }
        export interface GetInstanceProfileRequest {
            InstanceProfileName: instanceProfileNameType;
        }
        export interface GetInstanceProfileResponse {
            InstanceProfile: InstanceProfile;
        }
        export interface GetLoginProfileRequest {
            UserName: userNameType;
        }
        export interface GetLoginProfileResponse {
            LoginProfile: LoginProfile;
        }
        export interface GetOpenIDConnectProviderRequest {
            OpenIDConnectProviderArn: arnType;
        }
        export interface GetOpenIDConnectProviderResponse {
            Url?: OpenIDConnectProviderUrlType;
            ClientIDList?: clientIDListType;
            ThumbprintList?: thumbprintListType;
            CreateDate?: dateType;
        }
        export interface GetPolicyRequest {
            PolicyArn: arnType;
        }
        export interface GetPolicyResponse {
            Policy?: Policy;
        }
        export interface GetPolicyVersionRequest {
            PolicyArn: arnType;
            VersionId: policyVersionIdType;
        }
        export interface GetPolicyVersionResponse {
            PolicyVersion?: PolicyVersion;
        }
        export interface GetRolePolicyRequest {
            RoleName: roleNameType;
            PolicyName: policyNameType;
        }
        export interface GetRolePolicyResponse {
            RoleName: roleNameType;
            PolicyName: policyNameType;
            PolicyDocument: policyDocumentType;
        }
        export interface GetRoleRequest {
            RoleName: roleNameType;
        }
        export interface GetRoleResponse {
            Role: Role;
        }
        export interface GetSAMLProviderRequest {
            SAMLProviderArn: arnType;
        }
        export interface GetSAMLProviderResponse {
            SAMLMetadataDocument?: SAMLMetadataDocumentType;
            CreateDate?: dateType;
            ValidUntil?: dateType;
        }
        export interface GetSSHPublicKeyRequest {
            UserName: userNameType;
            SSHPublicKeyId: publicKeyIdType;
            Encoding: encodingType;
        }
        export interface GetSSHPublicKeyResponse {
            SSHPublicKey?: SSHPublicKey;
        }
        export interface GetServerCertificateRequest {
            ServerCertificateName: serverCertificateNameType;
        }
        export interface GetServerCertificateResponse {
            ServerCertificate: ServerCertificate;
        }
        export interface GetUserPolicyRequest {
            UserName: existingUserNameType;
            PolicyName: policyNameType;
        }
        export interface GetUserPolicyResponse {
            UserName: existingUserNameType;
            PolicyName: policyNameType;
            PolicyDocument: policyDocumentType;
        }
        export interface GetUserRequest {
            UserName?: existingUserNameType;
        }
        export interface GetUserResponse {
            User: User;
        }
        export interface Group {
            Path: pathType;
            GroupName: groupNameType;
            GroupId: idType;
            Arn: arnType;
            CreateDate: dateType;
        }
        export interface GroupDetail {
            Path?: pathType;
            GroupName?: groupNameType;
            GroupId?: idType;
            Arn?: arnType;
            CreateDate?: dateType;
            GroupPolicyList?: policyDetailListType;
            AttachedManagedPolicies?: attachedPoliciesListType;
        }
        export interface InstanceProfile {
            Path: pathType;
            InstanceProfileName: instanceProfileNameType;
            InstanceProfileId: idType;
            Arn: arnType;
            CreateDate: dateType;
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
            UserName?: existingUserNameType;
            Marker?: markerType;
            MaxItems?: maxItemsType;
        }
        export interface ListAccessKeysResponse {
            AccessKeyMetadata: accessKeyMetadataListType;
            IsTruncated?: booleanType;
            Marker?: markerType;
        }
        export interface ListAccountAliasesRequest {
            Marker?: markerType;
            MaxItems?: maxItemsType;
        }
        export interface ListAccountAliasesResponse {
            AccountAliases: accountAliasListType;
            IsTruncated?: booleanType;
            Marker?: markerType;
        }
        export interface ListAttachedGroupPoliciesRequest {
            GroupName: groupNameType;
            PathPrefix?: policyPathType;
            Marker?: markerType;
            MaxItems?: maxItemsType;
        }
        export interface ListAttachedGroupPoliciesResponse {
            AttachedPolicies?: attachedPoliciesListType;
            IsTruncated?: booleanType;
            Marker?: markerType;
        }
        export interface ListAttachedRolePoliciesRequest {
            RoleName: roleNameType;
            PathPrefix?: policyPathType;
            Marker?: markerType;
            MaxItems?: maxItemsType;
        }
        export interface ListAttachedRolePoliciesResponse {
            AttachedPolicies?: attachedPoliciesListType;
            IsTruncated?: booleanType;
            Marker?: markerType;
        }
        export interface ListAttachedUserPoliciesRequest {
            UserName: userNameType;
            PathPrefix?: policyPathType;
            Marker?: markerType;
            MaxItems?: maxItemsType;
        }
        export interface ListAttachedUserPoliciesResponse {
            AttachedPolicies?: attachedPoliciesListType;
            IsTruncated?: booleanType;
            Marker?: markerType;
        }
        export interface ListEntitiesForPolicyRequest {
            PolicyArn: arnType;
            EntityFilter?: EntityType;
            PathPrefix?: pathType;
            Marker?: markerType;
            MaxItems?: maxItemsType;
        }
        export interface ListEntitiesForPolicyResponse {
            PolicyGroups?: PolicyGroupListType;
            PolicyUsers?: PolicyUserListType;
            PolicyRoles?: PolicyRoleListType;
            IsTruncated?: booleanType;
            Marker?: markerType;
        }
        export interface ListGroupPoliciesRequest {
            GroupName: groupNameType;
            Marker?: markerType;
            MaxItems?: maxItemsType;
        }
        export interface ListGroupPoliciesResponse {
            PolicyNames: policyNameListType;
            IsTruncated?: booleanType;
            Marker?: markerType;
        }
        export interface ListGroupsForUserRequest {
            UserName: existingUserNameType;
            Marker?: markerType;
            MaxItems?: maxItemsType;
        }
        export interface ListGroupsForUserResponse {
            Groups: groupListType;
            IsTruncated?: booleanType;
            Marker?: markerType;
        }
        export interface ListGroupsRequest {
            PathPrefix?: pathPrefixType;
            Marker?: markerType;
            MaxItems?: maxItemsType;
        }
        export interface ListGroupsResponse {
            Groups: groupListType;
            IsTruncated?: booleanType;
            Marker?: markerType;
        }
        export interface ListInstanceProfilesForRoleRequest {
            RoleName: roleNameType;
            Marker?: markerType;
            MaxItems?: maxItemsType;
        }
        export interface ListInstanceProfilesForRoleResponse {
            InstanceProfiles: instanceProfileListType;
            IsTruncated?: booleanType;
            Marker?: markerType;
        }
        export interface ListInstanceProfilesRequest {
            PathPrefix?: pathPrefixType;
            Marker?: markerType;
            MaxItems?: maxItemsType;
        }
        export interface ListInstanceProfilesResponse {
            InstanceProfiles: instanceProfileListType;
            IsTruncated?: booleanType;
            Marker?: markerType;
        }
        export interface ListMFADevicesRequest {
            UserName?: existingUserNameType;
            Marker?: markerType;
            MaxItems?: maxItemsType;
        }
        export interface ListMFADevicesResponse {
            MFADevices: mfaDeviceListType;
            IsTruncated?: booleanType;
            Marker?: markerType;
        }
        export interface ListOpenIDConnectProvidersRequest {
        }
        export interface ListOpenIDConnectProvidersResponse {
            OpenIDConnectProviderList?: OpenIDConnectProviderListType;
        }
        export interface ListPoliciesRequest {
            Scope?: policyScopeType;
            OnlyAttached?: booleanType;
            PathPrefix?: policyPathType;
            Marker?: markerType;
            MaxItems?: maxItemsType;
        }
        export interface ListPoliciesResponse {
            Policies?: policyListType;
            IsTruncated?: booleanType;
            Marker?: markerType;
        }
        export interface ListPolicyVersionsRequest {
            PolicyArn: arnType;
            Marker?: markerType;
            MaxItems?: maxItemsType;
        }
        export interface ListPolicyVersionsResponse {
            Versions?: policyDocumentVersionListType;
            IsTruncated?: booleanType;
            Marker?: markerType;
        }
        export interface ListRolePoliciesRequest {
            RoleName: roleNameType;
            Marker?: markerType;
            MaxItems?: maxItemsType;
        }
        export interface ListRolePoliciesResponse {
            PolicyNames: policyNameListType;
            IsTruncated?: booleanType;
            Marker?: markerType;
        }
        export interface ListRolesRequest {
            PathPrefix?: pathPrefixType;
            Marker?: markerType;
            MaxItems?: maxItemsType;
        }
        export interface ListRolesResponse {
            Roles: roleListType;
            IsTruncated?: booleanType;
            Marker?: markerType;
        }
        export interface ListSAMLProvidersRequest {
        }
        export interface ListSAMLProvidersResponse {
            SAMLProviderList?: SAMLProviderListType;
        }
        export interface ListSSHPublicKeysRequest {
            UserName?: userNameType;
            Marker?: markerType;
            MaxItems?: maxItemsType;
        }
        export interface ListSSHPublicKeysResponse {
            SSHPublicKeys?: SSHPublicKeyListType;
            IsTruncated?: booleanType;
            Marker?: markerType;
        }
        export interface ListServerCertificatesRequest {
            PathPrefix?: pathPrefixType;
            Marker?: markerType;
            MaxItems?: maxItemsType;
        }
        export interface ListServerCertificatesResponse {
            ServerCertificateMetadataList: serverCertificateMetadataListType;
            IsTruncated?: booleanType;
            Marker?: markerType;
        }
        export interface ListSigningCertificatesRequest {
            UserName?: existingUserNameType;
            Marker?: markerType;
            MaxItems?: maxItemsType;
        }
        export interface ListSigningCertificatesResponse {
            Certificates: certificateListType;
            IsTruncated?: booleanType;
            Marker?: markerType;
        }
        export interface ListUserPoliciesRequest {
            UserName: existingUserNameType;
            Marker?: markerType;
            MaxItems?: maxItemsType;
        }
        export interface ListUserPoliciesResponse {
            PolicyNames: policyNameListType;
            IsTruncated?: booleanType;
            Marker?: markerType;
        }
        export interface ListUsersRequest {
            PathPrefix?: pathPrefixType;
            Marker?: markerType;
            MaxItems?: maxItemsType;
        }
        export interface ListUsersResponse {
            Users: userListType;
            IsTruncated?: booleanType;
            Marker?: markerType;
        }
        export interface ListVirtualMFADevicesRequest {
            AssignmentStatus?: assignmentStatusType;
            Marker?: markerType;
            MaxItems?: maxItemsType;
        }
        export interface ListVirtualMFADevicesResponse {
            VirtualMFADevices: virtualMFADeviceListType;
            IsTruncated?: booleanType;
            Marker?: markerType;
        }
        export interface LoginProfile {
            UserName: userNameType;
            CreateDate: dateType;
            PasswordResetRequired?: booleanType;
        }
        export interface MFADevice {
            UserName: userNameType;
            SerialNumber: serialNumberType;
            EnableDate: dateType;
        }
        export interface MalformedCertificateException {
            message?: malformedCertificateMessage;
        }
        export interface MalformedPolicyDocumentException {
            message?: malformedPolicyDocumentMessage;
        }
        export interface ManagedPolicyDetail {
            PolicyName?: policyNameType;
            PolicyId?: idType;
            Arn?: arnType;
            Path?: policyPathType;
            DefaultVersionId?: policyVersionIdType;
            AttachmentCount?: attachmentCountType;
            IsAttachable?: booleanType;
            Description?: policyDescriptionType;
            CreateDate?: dateType;
            UpdateDate?: dateType;
            PolicyVersionList?: policyDocumentVersionListType;
        }
        export interface NoSuchEntityException {
            message?: noSuchEntityMessage;
        }
        export interface OpenIDConnectProviderListEntry {
            Arn?: arnType;
        }
        export interface PasswordPolicy {
            MinimumPasswordLength?: minimumPasswordLengthType;
            RequireSymbols?: booleanType;
            RequireNumbers?: booleanType;
            RequireUppercaseCharacters?: booleanType;
            RequireLowercaseCharacters?: booleanType;
            AllowUsersToChangePassword?: booleanType;
            ExpirePasswords?: booleanType;
            MaxPasswordAge?: maxPasswordAgeType;
            PasswordReusePrevention?: passwordReusePreventionType;
            HardExpiry?: booleanObjectType;
        }
        export interface PasswordPolicyViolationException {
            message?: passwordPolicyViolationMessage;
        }
        export interface Policy {
            PolicyName?: policyNameType;
            PolicyId?: idType;
            Arn?: arnType;
            Path?: policyPathType;
            DefaultVersionId?: policyVersionIdType;
            AttachmentCount?: attachmentCountType;
            IsAttachable?: booleanType;
            Description?: policyDescriptionType;
            CreateDate?: dateType;
            UpdateDate?: dateType;
        }
        export interface PolicyDetail {
            PolicyName?: policyNameType;
            PolicyDocument?: policyDocumentType;
        }
        export interface PolicyEvaluationException {
            message?: policyEvaluationErrorMessage;
        }
        export interface PolicyGroup {
            GroupName?: groupNameType;
        }
        export interface PolicyRole {
            RoleName?: roleNameType;
        }
        export interface PolicyUser {
            UserName?: userNameType;
        }
        export interface PolicyVersion {
            Document?: policyDocumentType;
            VersionId?: policyVersionIdType;
            IsDefaultVersion?: booleanType;
            CreateDate?: dateType;
        }
        export interface Position {
            Line?: LineNumber;
            Column?: ColumnNumber;
        }
        export interface PutGroupPolicyRequest {
            GroupName: groupNameType;
            PolicyName: policyNameType;
            PolicyDocument: policyDocumentType;
        }
        export interface PutRolePolicyRequest {
            RoleName: roleNameType;
            PolicyName: policyNameType;
            PolicyDocument: policyDocumentType;
        }
        export interface PutUserPolicyRequest {
            UserName: existingUserNameType;
            PolicyName: policyNameType;
            PolicyDocument: policyDocumentType;
        }
        export interface RemoveClientIDFromOpenIDConnectProviderRequest {
            OpenIDConnectProviderArn: arnType;
            ClientID: clientIDType;
        }
        export interface RemoveRoleFromInstanceProfileRequest {
            InstanceProfileName: instanceProfileNameType;
            RoleName: roleNameType;
        }
        export interface RemoveUserFromGroupRequest {
            GroupName: groupNameType;
            UserName: existingUserNameType;
        }
        export interface ResourceSpecificResult {
            EvalResourceName: ResourceNameType;
            EvalResourceDecision: PolicyEvaluationDecisionType;
            MatchedStatements?: StatementListType;
            MissingContextValues?: ContextKeyNamesResultListType;
            EvalDecisionDetails?: EvalDecisionDetailsType;
        }
        export interface ResyncMFADeviceRequest {
            UserName: existingUserNameType;
            SerialNumber: serialNumberType;
            AuthenticationCode1: authenticationCodeType;
            AuthenticationCode2: authenticationCodeType;
        }
        export interface Role {
            Path: pathType;
            RoleName: roleNameType;
            RoleId: idType;
            Arn: arnType;
            CreateDate: dateType;
            AssumeRolePolicyDocument?: policyDocumentType;
        }
        export interface RoleDetail {
            Path?: pathType;
            RoleName?: roleNameType;
            RoleId?: idType;
            Arn?: arnType;
            CreateDate?: dateType;
            AssumeRolePolicyDocument?: policyDocumentType;
            InstanceProfileList?: instanceProfileListType;
            RolePolicyList?: policyDetailListType;
            AttachedManagedPolicies?: attachedPoliciesListType;
        }
        export interface SAMLProviderListEntry {
            Arn?: arnType;
            ValidUntil?: dateType;
            CreateDate?: dateType;
        }
        export interface SSHPublicKey {
            UserName: userNameType;
            SSHPublicKeyId: publicKeyIdType;
            Fingerprint: publicKeyFingerprintType;
            SSHPublicKeyBody: publicKeyMaterialType;
            Status: statusType;
            UploadDate?: dateType;
        }
        export interface SSHPublicKeyMetadata {
            UserName: userNameType;
            SSHPublicKeyId: publicKeyIdType;
            Status: statusType;
            UploadDate: dateType;
        }
        export interface ServerCertificate {
            ServerCertificateMetadata: ServerCertificateMetadata;
            CertificateBody: certificateBodyType;
            CertificateChain?: certificateChainType;
        }
        export interface ServerCertificateMetadata {
            Path: pathType;
            ServerCertificateName: serverCertificateNameType;
            ServerCertificateId: idType;
            Arn: arnType;
            UploadDate?: dateType;
            Expiration?: dateType;
        }
        export interface ServiceFailureException {
            message?: serviceFailureExceptionMessage;
        }
        export interface SetDefaultPolicyVersionRequest {
            PolicyArn: arnType;
            VersionId: policyVersionIdType;
        }
        export interface SigningCertificate {
            UserName: userNameType;
            CertificateId: certificateIdType;
            CertificateBody: certificateBodyType;
            Status: statusType;
            UploadDate?: dateType;
        }
        export interface SimulateCustomPolicyRequest {
            PolicyInputList: SimulationPolicyListType;
            ActionNames: ActionNameListType;
            ResourceArns?: ResourceNameListType;
            ResourcePolicy?: policyDocumentType;
            ResourceOwner?: ResourceNameType;
            CallerArn?: ResourceNameType;
            ContextEntries?: ContextEntryListType;
            ResourceHandlingOption?: ResourceHandlingOptionType;
            MaxItems?: maxItemsType;
            Marker?: markerType;
        }
        export interface SimulatePolicyResponse {
            EvaluationResults?: EvaluationResultsListType;
            IsTruncated?: booleanType;
            Marker?: markerType;
        }
        export interface SimulatePrincipalPolicyRequest {
            PolicySourceArn: arnType;
            PolicyInputList?: SimulationPolicyListType;
            ActionNames: ActionNameListType;
            ResourceArns?: ResourceNameListType;
            ResourcePolicy?: policyDocumentType;
            ResourceOwner?: ResourceNameType;
            CallerArn?: ResourceNameType;
            ContextEntries?: ContextEntryListType;
            ResourceHandlingOption?: ResourceHandlingOptionType;
            MaxItems?: maxItemsType;
            Marker?: markerType;
        }
        export interface Statement {
            SourcePolicyId?: PolicyIdentifierType;
            SourcePolicyType?: PolicySourceType;
            StartPosition?: Position;
            EndPosition?: Position;
        }
        export interface UnrecognizedPublicKeyEncodingException {
            message?: unrecognizedPublicKeyEncodingMessage;
        }
        export interface UpdateAccessKeyRequest {
            UserName?: existingUserNameType;
            AccessKeyId: accessKeyIdType;
            Status: statusType;
        }
        export interface UpdateAccountPasswordPolicyRequest {
            MinimumPasswordLength?: minimumPasswordLengthType;
            RequireSymbols?: booleanType;
            RequireNumbers?: booleanType;
            RequireUppercaseCharacters?: booleanType;
            RequireLowercaseCharacters?: booleanType;
            AllowUsersToChangePassword?: booleanType;
            MaxPasswordAge?: maxPasswordAgeType;
            PasswordReusePrevention?: passwordReusePreventionType;
            HardExpiry?: booleanObjectType;
        }
        export interface UpdateAssumeRolePolicyRequest {
            RoleName: roleNameType;
            PolicyDocument: policyDocumentType;
        }
        export interface UpdateGroupRequest {
            GroupName: groupNameType;
            NewPath?: pathType;
            NewGroupName?: groupNameType;
        }
        export interface UpdateLoginProfileRequest {
            UserName: userNameType;
            Password?: passwordType;
            PasswordResetRequired?: booleanObjectType;
        }
        export interface UpdateOpenIDConnectProviderThumbprintRequest {
            OpenIDConnectProviderArn: arnType;
            ThumbprintList: thumbprintListType;
        }
        export interface UpdateSAMLProviderRequest {
            SAMLMetadataDocument: SAMLMetadataDocumentType;
            SAMLProviderArn: arnType;
        }
        export interface UpdateSAMLProviderResponse {
            SAMLProviderArn?: arnType;
        }
        export interface UpdateSSHPublicKeyRequest {
            UserName: userNameType;
            SSHPublicKeyId: publicKeyIdType;
            Status: statusType;
        }
        export interface UpdateServerCertificateRequest {
            ServerCertificateName: serverCertificateNameType;
            NewPath?: pathType;
            NewServerCertificateName?: serverCertificateNameType;
        }
        export interface UpdateSigningCertificateRequest {
            UserName?: existingUserNameType;
            CertificateId: certificateIdType;
            Status: statusType;
        }
        export interface UpdateUserRequest {
            UserName: existingUserNameType;
            NewPath?: pathType;
            NewUserName?: userNameType;
        }
        export interface UploadSSHPublicKeyRequest {
            UserName: userNameType;
            SSHPublicKeyBody: publicKeyMaterialType;
        }
        export interface UploadSSHPublicKeyResponse {
            SSHPublicKey?: SSHPublicKey;
        }
        export interface UploadServerCertificateRequest {
            Path?: pathType;
            ServerCertificateName: serverCertificateNameType;
            CertificateBody: certificateBodyType;
            PrivateKey: privateKeyType;
            CertificateChain?: certificateChainType;
        }
        export interface UploadServerCertificateResponse {
            ServerCertificateMetadata?: ServerCertificateMetadata;
        }
        export interface UploadSigningCertificateRequest {
            UserName?: existingUserNameType;
            CertificateBody: certificateBodyType;
        }
        export interface UploadSigningCertificateResponse {
            Certificate: SigningCertificate;
        }
        export interface User {
            Path: pathType;
            UserName: userNameType;
            UserId: idType;
            Arn: arnType;
            CreateDate: dateType;
            PasswordLastUsed?: dateType;
        }
        export interface UserDetail {
            Path?: pathType;
            UserName?: userNameType;
            UserId?: idType;
            Arn?: arnType;
            CreateDate?: dateType;
            UserPolicyList?: policyDetailListType;
            GroupList?: groupNameListType;
            AttachedManagedPolicies?: attachedPoliciesListType;
        }
        export interface VirtualMFADevice {
            SerialNumber: serialNumberType;
            Base32StringSeed?: BootstrapDatum;
            QRCodePNG?: BootstrapDatum;
            User?: User;
            EnableDate?: dateType;
        }

    }
}
