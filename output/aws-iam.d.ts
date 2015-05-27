// DO NOT EDIT!
//
declare module "aws-sdk" {
    export class IAM {
      constructor(options?: any);
      addClientIDToOpenIDConnectProvider(params: AddClientIDToOpenIDConnectProviderRequest, callback: (err: InvalidInputException|NoSuchEntityException|LimitExceededException|ServiceFailureException|any, data: any) => void): void;
      addRoleToInstanceProfile(params: AddRoleToInstanceProfileRequest, callback: (err: NoSuchEntityException|EntityAlreadyExistsException|LimitExceededException|ServiceFailureException|any, data: any) => void): void;
      addUserToGroup(params: AddUserToGroupRequest, callback: (err: NoSuchEntityException|LimitExceededException|ServiceFailureException|any, data: any) => void): void;
      attachGroupPolicy(params: AttachGroupPolicyRequest, callback: (err: NoSuchEntityException|LimitExceededException|InvalidInputException|ServiceFailureException|any, data: any) => void): void;
      attachRolePolicy(params: AttachRolePolicyRequest, callback: (err: NoSuchEntityException|LimitExceededException|InvalidInputException|ServiceFailureException|any, data: any) => void): void;
      attachUserPolicy(params: AttachUserPolicyRequest, callback: (err: NoSuchEntityException|LimitExceededException|InvalidInputException|ServiceFailureException|any, data: any) => void): void;
      changePassword(params: ChangePasswordRequest, callback: (err: NoSuchEntityException|InvalidUserTypeException|LimitExceededException|EntityTemporarilyUnmodifiableException|PasswordPolicyViolationException|ServiceFailureException|any, data: any) => void): void;
      createAccessKey(params: CreateAccessKeyRequest, callback: (err: NoSuchEntityException|LimitExceededException|ServiceFailureException|any, data: CreateAccessKeyResponse|any) => void): void;
      createAccountAlias(params: CreateAccountAliasRequest, callback: (err: EntityAlreadyExistsException|LimitExceededException|ServiceFailureException|any, data: any) => void): void;
      createGroup(params: CreateGroupRequest, callback: (err: LimitExceededException|EntityAlreadyExistsException|NoSuchEntityException|ServiceFailureException|any, data: CreateGroupResponse|any) => void): void;
      createInstanceProfile(params: CreateInstanceProfileRequest, callback: (err: EntityAlreadyExistsException|LimitExceededException|ServiceFailureException|any, data: CreateInstanceProfileResponse|any) => void): void;
      createLoginProfile(params: CreateLoginProfileRequest, callback: (err: EntityAlreadyExistsException|NoSuchEntityException|PasswordPolicyViolationException|LimitExceededException|ServiceFailureException|any, data: CreateLoginProfileResponse|any) => void): void;
      createOpenIDConnectProvider(params: CreateOpenIDConnectProviderRequest, callback: (err: InvalidInputException|EntityAlreadyExistsException|LimitExceededException|ServiceFailureException|any, data: CreateOpenIDConnectProviderResponse|any) => void): void;
      createPolicy(params: CreatePolicyRequest, callback: (err: InvalidInputException|LimitExceededException|EntityAlreadyExistsException|MalformedPolicyDocumentException|ServiceFailureException|any, data: CreatePolicyResponse|any) => void): void;
      createPolicyVersion(params: CreatePolicyVersionRequest, callback: (err: NoSuchEntityException|MalformedPolicyDocumentException|InvalidInputException|LimitExceededException|ServiceFailureException|any, data: CreatePolicyVersionResponse|any) => void): void;
      createRole(params: CreateRoleRequest, callback: (err: LimitExceededException|EntityAlreadyExistsException|MalformedPolicyDocumentException|ServiceFailureException|any, data: CreateRoleResponse|any) => void): void;
      createSAMLProvider(params: CreateSAMLProviderRequest, callback: (err: InvalidInputException|EntityAlreadyExistsException|LimitExceededException|ServiceFailureException|any, data: CreateSAMLProviderResponse|any) => void): void;
      createUser(params: CreateUserRequest, callback: (err: LimitExceededException|EntityAlreadyExistsException|NoSuchEntityException|ServiceFailureException|any, data: CreateUserResponse|any) => void): void;
      createVirtualMFADevice(params: CreateVirtualMFADeviceRequest, callback: (err: LimitExceededException|EntityAlreadyExistsException|ServiceFailureException|any, data: CreateVirtualMFADeviceResponse|any) => void): void;
      deactivateMFADevice(params: DeactivateMFADeviceRequest, callback: (err: EntityTemporarilyUnmodifiableException|NoSuchEntityException|LimitExceededException|ServiceFailureException|any, data: any) => void): void;
      deleteAccessKey(params: DeleteAccessKeyRequest, callback: (err: NoSuchEntityException|LimitExceededException|ServiceFailureException|any, data: any) => void): void;
      deleteAccountAlias(params: DeleteAccountAliasRequest, callback: (err: NoSuchEntityException|LimitExceededException|ServiceFailureException|any, data: any) => void): void;
      deleteAccountPasswordPolicy(callback: (err: NoSuchEntityException|LimitExceededException|ServiceFailureException|any, data: any) => void): void;
      deleteGroup(params: DeleteGroupRequest, callback: (err: NoSuchEntityException|DeleteConflictException|LimitExceededException|ServiceFailureException|any, data: any) => void): void;
      deleteGroupPolicy(params: DeleteGroupPolicyRequest, callback: (err: NoSuchEntityException|LimitExceededException|ServiceFailureException|any, data: any) => void): void;
      deleteInstanceProfile(params: DeleteInstanceProfileRequest, callback: (err: NoSuchEntityException|DeleteConflictException|LimitExceededException|ServiceFailureException|any, data: any) => void): void;
      deleteLoginProfile(params: DeleteLoginProfileRequest, callback: (err: EntityTemporarilyUnmodifiableException|NoSuchEntityException|LimitExceededException|ServiceFailureException|any, data: any) => void): void;
      deleteOpenIDConnectProvider(params: DeleteOpenIDConnectProviderRequest, callback: (err: InvalidInputException|NoSuchEntityException|ServiceFailureException|any, data: any) => void): void;
      deletePolicy(params: DeletePolicyRequest, callback: (err: NoSuchEntityException|LimitExceededException|InvalidInputException|DeleteConflictException|ServiceFailureException|any, data: any) => void): void;
      deletePolicyVersion(params: DeletePolicyVersionRequest, callback: (err: NoSuchEntityException|LimitExceededException|InvalidInputException|DeleteConflictException|ServiceFailureException|any, data: any) => void): void;
      deleteRole(params: DeleteRoleRequest, callback: (err: NoSuchEntityException|DeleteConflictException|LimitExceededException|ServiceFailureException|any, data: any) => void): void;
      deleteRolePolicy(params: DeleteRolePolicyRequest, callback: (err: NoSuchEntityException|LimitExceededException|ServiceFailureException|any, data: any) => void): void;
      deleteSAMLProvider(params: DeleteSAMLProviderRequest, callback: (err: InvalidInputException|LimitExceededException|NoSuchEntityException|ServiceFailureException|any, data: any) => void): void;
      deleteServerCertificate(params: DeleteServerCertificateRequest, callback: (err: NoSuchEntityException|DeleteConflictException|LimitExceededException|ServiceFailureException|any, data: any) => void): void;
      deleteSigningCertificate(params: DeleteSigningCertificateRequest, callback: (err: NoSuchEntityException|LimitExceededException|ServiceFailureException|any, data: any) => void): void;
      deleteUser(params: DeleteUserRequest, callback: (err: LimitExceededException|NoSuchEntityException|DeleteConflictException|ServiceFailureException|any, data: any) => void): void;
      deleteUserPolicy(params: DeleteUserPolicyRequest, callback: (err: NoSuchEntityException|LimitExceededException|ServiceFailureException|any, data: any) => void): void;
      deleteVirtualMFADevice(params: DeleteVirtualMFADeviceRequest, callback: (err: NoSuchEntityException|DeleteConflictException|LimitExceededException|ServiceFailureException|any, data: any) => void): void;
      detachGroupPolicy(params: DetachGroupPolicyRequest, callback: (err: NoSuchEntityException|LimitExceededException|InvalidInputException|ServiceFailureException|any, data: any) => void): void;
      detachRolePolicy(params: DetachRolePolicyRequest, callback: (err: NoSuchEntityException|LimitExceededException|InvalidInputException|ServiceFailureException|any, data: any) => void): void;
      detachUserPolicy(params: DetachUserPolicyRequest, callback: (err: NoSuchEntityException|LimitExceededException|InvalidInputException|ServiceFailureException|any, data: any) => void): void;
      enableMFADevice(params: EnableMFADeviceRequest, callback: (err: EntityAlreadyExistsException|EntityTemporarilyUnmodifiableException|InvalidAuthenticationCodeException|LimitExceededException|NoSuchEntityException|ServiceFailureException|any, data: any) => void): void;
      generateCredentialReport(callback: (err: LimitExceededException|ServiceFailureException|any, data: GenerateCredentialReportResponse|any) => void): void;
      getAccessKeyLastUsed(params: GetAccessKeyLastUsedRequest, callback: (err: NoSuchEntityException|any, data: GetAccessKeyLastUsedResponse|any) => void): void;
      getAccountAuthorizationDetails(params: GetAccountAuthorizationDetailsRequest, callback: (err: ServiceFailureException|any, data: GetAccountAuthorizationDetailsResponse|any) => void): void;
      getAccountPasswordPolicy(callback: (err: NoSuchEntityException|ServiceFailureException|any, data: GetAccountPasswordPolicyResponse|any) => void): void;
      getAccountSummary(callback: (err: ServiceFailureException|any, data: GetAccountSummaryResponse|any) => void): void;
      getCredentialReport(callback: (err: CredentialReportNotPresentException|CredentialReportExpiredException|CredentialReportNotReadyException|ServiceFailureException|any, data: GetCredentialReportResponse|any) => void): void;
      getGroup(params: GetGroupRequest, callback: (err: NoSuchEntityException|ServiceFailureException|any, data: GetGroupResponse|any) => void): void;
      getGroupPolicy(params: GetGroupPolicyRequest, callback: (err: NoSuchEntityException|ServiceFailureException|any, data: GetGroupPolicyResponse|any) => void): void;
      getInstanceProfile(params: GetInstanceProfileRequest, callback: (err: NoSuchEntityException|ServiceFailureException|any, data: GetInstanceProfileResponse|any) => void): void;
      getLoginProfile(params: GetLoginProfileRequest, callback: (err: NoSuchEntityException|ServiceFailureException|any, data: GetLoginProfileResponse|any) => void): void;
      getOpenIDConnectProvider(params: GetOpenIDConnectProviderRequest, callback: (err: InvalidInputException|NoSuchEntityException|ServiceFailureException|any, data: GetOpenIDConnectProviderResponse|any) => void): void;
      getPolicy(params: GetPolicyRequest, callback: (err: NoSuchEntityException|InvalidInputException|ServiceFailureException|any, data: GetPolicyResponse|any) => void): void;
      getPolicyVersion(params: GetPolicyVersionRequest, callback: (err: NoSuchEntityException|InvalidInputException|ServiceFailureException|any, data: GetPolicyVersionResponse|any) => void): void;
      getRole(params: GetRoleRequest, callback: (err: NoSuchEntityException|ServiceFailureException|any, data: GetRoleResponse|any) => void): void;
      getRolePolicy(params: GetRolePolicyRequest, callback: (err: NoSuchEntityException|ServiceFailureException|any, data: GetRolePolicyResponse|any) => void): void;
      getSAMLProvider(params: GetSAMLProviderRequest, callback: (err: NoSuchEntityException|InvalidInputException|ServiceFailureException|any, data: GetSAMLProviderResponse|any) => void): void;
      getServerCertificate(params: GetServerCertificateRequest, callback: (err: NoSuchEntityException|ServiceFailureException|any, data: GetServerCertificateResponse|any) => void): void;
      getUser(params: GetUserRequest, callback: (err: NoSuchEntityException|ServiceFailureException|any, data: GetUserResponse|any) => void): void;
      getUserPolicy(params: GetUserPolicyRequest, callback: (err: NoSuchEntityException|ServiceFailureException|any, data: GetUserPolicyResponse|any) => void): void;
      listAccessKeys(params: ListAccessKeysRequest, callback: (err: NoSuchEntityException|ServiceFailureException|any, data: ListAccessKeysResponse|any) => void): void;
      listAccountAliases(params: ListAccountAliasesRequest, callback: (err: ServiceFailureException|any, data: ListAccountAliasesResponse|any) => void): void;
      listAttachedGroupPolicies(params: ListAttachedGroupPoliciesRequest, callback: (err: NoSuchEntityException|InvalidInputException|ServiceFailureException|any, data: ListAttachedGroupPoliciesResponse|any) => void): void;
      listAttachedRolePolicies(params: ListAttachedRolePoliciesRequest, callback: (err: NoSuchEntityException|InvalidInputException|ServiceFailureException|any, data: ListAttachedRolePoliciesResponse|any) => void): void;
      listAttachedUserPolicies(params: ListAttachedUserPoliciesRequest, callback: (err: NoSuchEntityException|InvalidInputException|ServiceFailureException|any, data: ListAttachedUserPoliciesResponse|any) => void): void;
      listEntitiesForPolicy(params: ListEntitiesForPolicyRequest, callback: (err: NoSuchEntityException|InvalidInputException|ServiceFailureException|any, data: ListEntitiesForPolicyResponse|any) => void): void;
      listGroupPolicies(params: ListGroupPoliciesRequest, callback: (err: NoSuchEntityException|ServiceFailureException|any, data: ListGroupPoliciesResponse|any) => void): void;
      listGroups(params: ListGroupsRequest, callback: (err: ServiceFailureException|any, data: ListGroupsResponse|any) => void): void;
      listGroupsForUser(params: ListGroupsForUserRequest, callback: (err: NoSuchEntityException|ServiceFailureException|any, data: ListGroupsForUserResponse|any) => void): void;
      listInstanceProfiles(params: ListInstanceProfilesRequest, callback: (err: ServiceFailureException|any, data: ListInstanceProfilesResponse|any) => void): void;
      listInstanceProfilesForRole(params: ListInstanceProfilesForRoleRequest, callback: (err: NoSuchEntityException|ServiceFailureException|any, data: ListInstanceProfilesForRoleResponse|any) => void): void;
      listMFADevices(params: ListMFADevicesRequest, callback: (err: NoSuchEntityException|ServiceFailureException|any, data: ListMFADevicesResponse|any) => void): void;
      listOpenIDConnectProviders(params: ListOpenIDConnectProvidersRequest, callback: (err: ServiceFailureException|any, data: ListOpenIDConnectProvidersResponse|any) => void): void;
      listPolicies(params: ListPoliciesRequest, callback: (err: ServiceFailureException|any, data: ListPoliciesResponse|any) => void): void;
      listPolicyVersions(params: ListPolicyVersionsRequest, callback: (err: NoSuchEntityException|InvalidInputException|ServiceFailureException|any, data: ListPolicyVersionsResponse|any) => void): void;
      listRolePolicies(params: ListRolePoliciesRequest, callback: (err: NoSuchEntityException|ServiceFailureException|any, data: ListRolePoliciesResponse|any) => void): void;
      listRoles(params: ListRolesRequest, callback: (err: ServiceFailureException|any, data: ListRolesResponse|any) => void): void;
      listSAMLProviders(params: ListSAMLProvidersRequest, callback: (err: ServiceFailureException|any, data: ListSAMLProvidersResponse|any) => void): void;
      listServerCertificates(params: ListServerCertificatesRequest, callback: (err: ServiceFailureException|any, data: ListServerCertificatesResponse|any) => void): void;
      listSigningCertificates(params: ListSigningCertificatesRequest, callback: (err: NoSuchEntityException|ServiceFailureException|any, data: ListSigningCertificatesResponse|any) => void): void;
      listUserPolicies(params: ListUserPoliciesRequest, callback: (err: NoSuchEntityException|ServiceFailureException|any, data: ListUserPoliciesResponse|any) => void): void;
      listUsers(params: ListUsersRequest, callback: (err: ServiceFailureException|any, data: ListUsersResponse|any) => void): void;
      listVirtualMFADevices(params: ListVirtualMFADevicesRequest, callback: (err: any, data: ListVirtualMFADevicesResponse|any) => void): void;
      putGroupPolicy(params: PutGroupPolicyRequest, callback: (err: LimitExceededException|MalformedPolicyDocumentException|NoSuchEntityException|ServiceFailureException|any, data: any) => void): void;
      putRolePolicy(params: PutRolePolicyRequest, callback: (err: LimitExceededException|MalformedPolicyDocumentException|NoSuchEntityException|ServiceFailureException|any, data: any) => void): void;
      putUserPolicy(params: PutUserPolicyRequest, callback: (err: LimitExceededException|MalformedPolicyDocumentException|NoSuchEntityException|ServiceFailureException|any, data: any) => void): void;
      removeClientIDFromOpenIDConnectProvider(params: RemoveClientIDFromOpenIDConnectProviderRequest, callback: (err: InvalidInputException|NoSuchEntityException|ServiceFailureException|any, data: any) => void): void;
      removeRoleFromInstanceProfile(params: RemoveRoleFromInstanceProfileRequest, callback: (err: NoSuchEntityException|LimitExceededException|ServiceFailureException|any, data: any) => void): void;
      removeUserFromGroup(params: RemoveUserFromGroupRequest, callback: (err: NoSuchEntityException|LimitExceededException|ServiceFailureException|any, data: any) => void): void;
      resyncMFADevice(params: ResyncMFADeviceRequest, callback: (err: InvalidAuthenticationCodeException|NoSuchEntityException|LimitExceededException|ServiceFailureException|any, data: any) => void): void;
      setDefaultPolicyVersion(params: SetDefaultPolicyVersionRequest, callback: (err: NoSuchEntityException|InvalidInputException|LimitExceededException|ServiceFailureException|any, data: any) => void): void;
      updateAccessKey(params: UpdateAccessKeyRequest, callback: (err: NoSuchEntityException|LimitExceededException|ServiceFailureException|any, data: any) => void): void;
      updateAccountPasswordPolicy(params: UpdateAccountPasswordPolicyRequest, callback: (err: NoSuchEntityException|MalformedPolicyDocumentException|LimitExceededException|ServiceFailureException|any, data: any) => void): void;
      updateAssumeRolePolicy(params: UpdateAssumeRolePolicyRequest, callback: (err: NoSuchEntityException|MalformedPolicyDocumentException|LimitExceededException|ServiceFailureException|any, data: any) => void): void;
      updateGroup(params: UpdateGroupRequest, callback: (err: NoSuchEntityException|EntityAlreadyExistsException|LimitExceededException|ServiceFailureException|any, data: any) => void): void;
      updateLoginProfile(params: UpdateLoginProfileRequest, callback: (err: EntityTemporarilyUnmodifiableException|NoSuchEntityException|PasswordPolicyViolationException|LimitExceededException|ServiceFailureException|any, data: any) => void): void;
      updateOpenIDConnectProviderThumbprint(params: UpdateOpenIDConnectProviderThumbprintRequest, callback: (err: InvalidInputException|NoSuchEntityException|ServiceFailureException|any, data: any) => void): void;
      updateSAMLProvider(params: UpdateSAMLProviderRequest, callback: (err: NoSuchEntityException|InvalidInputException|LimitExceededException|ServiceFailureException|any, data: UpdateSAMLProviderResponse|any) => void): void;
      updateServerCertificate(params: UpdateServerCertificateRequest, callback: (err: NoSuchEntityException|EntityAlreadyExistsException|LimitExceededException|ServiceFailureException|any, data: any) => void): void;
      updateSigningCertificate(params: UpdateSigningCertificateRequest, callback: (err: NoSuchEntityException|LimitExceededException|ServiceFailureException|any, data: any) => void): void;
      updateUser(params: UpdateUserRequest, callback: (err: NoSuchEntityException|LimitExceededException|EntityAlreadyExistsException|EntityTemporarilyUnmodifiableException|ServiceFailureException|any, data: any) => void): void;
      uploadServerCertificate(params: UploadServerCertificateRequest, callback: (err: LimitExceededException|EntityAlreadyExistsException|MalformedCertificateException|KeyPairMismatchException|ServiceFailureException|any, data: UploadServerCertificateResponse|any) => void): void;
      uploadSigningCertificate(params: UploadSigningCertificateRequest, callback: (err: LimitExceededException|EntityAlreadyExistsException|MalformedCertificateException|InvalidCertificateException|DuplicateCertificateException|NoSuchEntityException|ServiceFailureException|any, data: UploadSigningCertificateResponse|any) => void): void;
    }

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


    export type BootstrapDatum = any; // not really - it was 'blob' instead - must fix this one

    export interface ChangePasswordRequest {
      OldPassword: passwordType;
      NewPassword: passwordType;
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


    export type EntityType = string;

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


    export type ManagedPolicyDetailListType = Array<ManagedPolicyDetail>;

    export interface NoSuchEntityException {
      message?: noSuchEntityMessage;
    }


    export interface OpenIDConnectProviderListEntry {
      Arn?: arnType;
    }


    export type OpenIDConnectProviderListType = Array<OpenIDConnectProviderListEntry>;

    export type OpenIDConnectProviderUrlType = string;

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


    export interface PolicyGroup {
      GroupName?: groupNameType;
    }


    export type PolicyGroupListType = Array<PolicyGroup>;

    export interface PolicyRole {
      RoleName?: roleNameType;
    }


    export type PolicyRoleListType = Array<PolicyRole>;

    export interface PolicyUser {
      UserName?: userNameType;
    }


    export type PolicyUserListType = Array<PolicyUser>;

    export interface PolicyVersion {
      Document?: policyDocumentType;
      VersionId?: policyVersionIdType;
      IsDefaultVersion?: booleanType;
      CreateDate?: dateType;
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


    export type ReportContentType = any; // not really - it was 'blob' instead - must fix this one

    export type ReportFormatType = string;

    export type ReportStateDescriptionType = string;

    export type ReportStateType = string;

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


    export type SAMLMetadataDocumentType = string;

    export interface SAMLProviderListEntry {
      Arn?: arnType;
      ValidUntil?: dateType;
      CreateDate?: dateType;
    }


    export type SAMLProviderListType = Array<SAMLProviderListEntry>;

    export type SAMLProviderNameType = string; // pattern: "[\w._-]*"

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


    export type accessKeyIdType = string; // pattern: "[\w]*"

    export type accessKeyMetadataListType = Array<AccessKeyMetadata>;

    export type accessKeySecretType = string;

    export type accountAliasListType = Array<accountAliasType>;

    export type accountAliasType = string; // pattern: "^[a-z0-9](([a-z0-9]|-(?!-))*[a-z0-9])?$"

    export type arnType = string;

    export type assignmentStatusType = string;

    export type attachedPoliciesListType = Array<AttachedPolicy>;

    export type attachmentCountType = number;

    export type authenticationCodeType = string; // pattern: "[\d]*"

    export type booleanObjectType = boolean;

    export type booleanType = boolean;

    export type certificateBodyType = string; // pattern: "[\u0009\u000A\u000D\u0020-\u00FF]+"

    export type certificateChainType = string; // pattern: "[\u0009\u000A\u000D\u0020-\u00FF]*"

    export type certificateIdType = string; // pattern: "[\w]*"

    export type certificateListType = Array<SigningCertificate>;

    export type clientIDListType = Array<clientIDType>;

    export type clientIDType = string;

    export type credentialReportExpiredExceptionMessage = string;

    export type credentialReportNotPresentExceptionMessage = string;

    export type credentialReportNotReadyExceptionMessage = string;

    export type dateType = number;

    export type deleteConflictMessage = string;

    export type duplicateCertificateMessage = string;

    export type entityAlreadyExistsMessage = string;

    export type entityListType = Array<EntityType>;

    export type entityTemporarilyUnmodifiableMessage = string;

    export type existingUserNameType = string; // pattern: "[\w+=,.@-]*"

    export type groupDetailListType = Array<GroupDetail>;

    export type groupListType = Array<Group>;

    export type groupNameListType = Array<groupNameType>;

    export type groupNameType = string; // pattern: "[\w+=,.@-]*"

    export type idType = string; // pattern: "[\w]*"

    export type instanceProfileListType = Array<InstanceProfile>;

    export type instanceProfileNameType = string; // pattern: "[\w+=,.@-]*"

    export type invalidAuthenticationCodeMessage = string;

    export type invalidCertificateMessage = string;

    export type invalidInputMessage = string;

    export type invalidUserTypeMessage = string;

    export type keyPairMismatchMessage = string;

    export type limitExceededMessage = string;

    export type malformedCertificateMessage = string;

    export type malformedPolicyDocumentMessage = string;

    export type markerType = string; // pattern: "[\u0020-\u00FF]*"

    export type maxItemsType = number;

    export type maxPasswordAgeType = number;

    export type mfaDeviceListType = Array<MFADevice>;

    export type minimumPasswordLengthType = number;

    export type noSuchEntityMessage = string;

    export type passwordPolicyViolationMessage = string;

    export type passwordReusePreventionType = number;

    export type passwordType = string; // pattern: "[\u0009\u000A\u000D\u0020-\u00FF]+"

    export type pathPrefixType = string; // pattern: "\u002F[\u0021-\u007F]*"

    export type pathType = string; // pattern: "(\u002F)|(\u002F[\u0021-\u007F]+\u002F)"

    export type policyDescriptionType = string;

    export type policyDetailListType = Array<PolicyDetail>;

    export type policyDocumentType = string; // pattern: "[\u0009\u000A\u000D\u0020-\u00FF]+"

    export type policyDocumentVersionListType = Array<PolicyVersion>;

    export type policyListType = Array<Policy>;

    export type policyNameListType = Array<policyNameType>;

    export type policyNameType = string; // pattern: "[\w+=,.@-]*"

    export type policyPathType = string; // pattern: "((/[A-Za-z0-9\.,\+@=_-]+)*)/"

    export type policyScopeType = string;

    export type policyVersionIdType = string; // pattern: "v[1-9][0-9]*(\.[A-Za-z0-9-]*)?"

    export type privateKeyType = string; // pattern: "[\u0009\u000A\u000D\u0020-\u00FF]*"

    export type roleDetailListType = Array<RoleDetail>;

    export type roleListType = Array<Role>;

    export type roleNameType = string; // pattern: "[\w+=,.@-]*"

    export type serialNumberType = string; // pattern: "[\w+=/:,.@-]*"

    export type serverCertificateMetadataListType = Array<ServerCertificateMetadata>;

    export type serverCertificateNameType = string; // pattern: "[\w+=,.@-]*"

    export type serviceFailureExceptionMessage = string;

    export type statusType = string;

    export type stringType = string;

    export type summaryKeyType = string;

    export type summaryMapType = any; // not really - it was 'map' instead - must fix this one

    export type summaryValueType = number;

    export type thumbprintListType = Array<thumbprintType>;

    export type thumbprintType = string;

    export type userDetailListType = Array<UserDetail>;

    export type userListType = Array<User>;

    export type userNameType = string; // pattern: "[\w+=,.@-]*"

    export type virtualMFADeviceListType = Array<VirtualMFADevice>;

    export type virtualMFADeviceName = string; // pattern: "[\w+=,.@-]*"

}
