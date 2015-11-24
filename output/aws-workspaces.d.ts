// DO NOT EDIT!
//

///<reference path="./aws-sdk-common.d.ts" />
declare module "aws-sdk" {
    export class WorkSpaces {
      constructor(options?: any);
      createWorkspaces(params: WorkSpacesCreateWorkspacesRequest, callback: (err: WorkSpacesResourceLimitExceededException|any, data: WorkSpacesCreateWorkspacesResult|any) => void): void;
      describeWorkspaceBundles(params: WorkSpacesDescribeWorkspaceBundlesRequest, callback: (err: WorkSpacesInvalidParameterValuesException|any, data: WorkSpacesDescribeWorkspaceBundlesResult|any) => void): void;
      describeWorkspaceDirectories(params: WorkSpacesDescribeWorkspaceDirectoriesRequest, callback: (err: WorkSpacesInvalidParameterValuesException|any, data: WorkSpacesDescribeWorkspaceDirectoriesResult|any) => void): void;
      describeWorkspaces(params: WorkSpacesDescribeWorkspacesRequest, callback: (err: WorkSpacesInvalidParameterValuesException|WorkSpacesResourceUnavailableException|any, data: WorkSpacesDescribeWorkspacesResult|any) => void): void;
      rebootWorkspaces(params: WorkSpacesRebootWorkspacesRequest, callback: (err: any, data: WorkSpacesRebootWorkspacesResult|any) => void): void;
      rebuildWorkspaces(params: WorkSpacesRebuildWorkspacesRequest, callback: (err: any, data: WorkSpacesRebuildWorkspacesResult|any) => void): void;
      terminateWorkspaces(params: WorkSpacesTerminateWorkspacesRequest, callback: (err: any, data: WorkSpacesTerminateWorkspacesResult|any) => void): void;
    }

    export type WorkSpacesARN = string; // pattern: "^arn:aws:[A-Za-z0-9][A-za-z0-9_/.-]{0,62}:[A-za-z0-9_/.-]{0,63}:[A-za-z0-9_/.-]{0,63}:[A-Za-z0-9][A-za-z0-9_/.-]{0,127}$"
    export type WorkSpacesAlias = string;
    export type WorkSpacesBooleanObject = boolean;
    export type WorkSpacesBundleId = string; // pattern: "^wsb-[0-9a-z]{8,63}$"
    export type WorkSpacesBundleIdList = Array<WorkSpacesBundleId>; // max: 25
    export type WorkSpacesBundleList = Array<WorkSpacesWorkspaceBundle>;
    export type WorkSpacesBundleOwner = string;
    export type WorkSpacesCompute = string;
    export interface WorkSpacesComputeType {
        Name?: WorkSpacesCompute;
    }

    export type WorkSpacesComputerName = string;
    export interface WorkSpacesCreateWorkspacesRequest {
        Workspaces: WorkSpacesWorkspaceRequestList;
    }

    export interface WorkSpacesCreateWorkspacesResult {
        FailedRequests?: WorkSpacesFailedCreateWorkspaceRequests;
        PendingRequests?: WorkSpacesWorkspaceList;
    }

    export type WorkSpacesDefaultOu = string;
    export interface WorkSpacesDefaultWorkspaceCreationProperties {
        EnableWorkDocs?: WorkSpacesBooleanObject;
        EnableInternetAccess?: WorkSpacesBooleanObject;
        DefaultOu?: WorkSpacesDefaultOu;
        CustomSecurityGroupId?: WorkSpacesSecurityGroupId;
        UserEnabledAsLocalAdministrator?: WorkSpacesBooleanObject;
    }

    export interface WorkSpacesDescribeWorkspaceBundlesRequest {
        BundleIds?: WorkSpacesBundleIdList;
        Owner?: WorkSpacesBundleOwner;
        NextToken?: WorkSpacesPaginationToken;
    }

    export interface WorkSpacesDescribeWorkspaceBundlesResult {
        Bundles?: WorkSpacesBundleList;
        NextToken?: WorkSpacesPaginationToken;
    }

    export interface WorkSpacesDescribeWorkspaceDirectoriesRequest {
        DirectoryIds?: WorkSpacesDirectoryIdList;
        NextToken?: WorkSpacesPaginationToken;
    }

    export interface WorkSpacesDescribeWorkspaceDirectoriesResult {
        Directories?: WorkSpacesDirectoryList;
        NextToken?: WorkSpacesPaginationToken;
    }

    export interface WorkSpacesDescribeWorkspacesRequest {
        WorkspaceIds?: WorkSpacesWorkspaceIdList;
        DirectoryId?: WorkSpacesDirectoryId;
        UserName?: WorkSpacesUserName;
        BundleId?: WorkSpacesBundleId;
        Limit?: WorkSpacesLimit;
        NextToken?: WorkSpacesPaginationToken;
    }

    export interface WorkSpacesDescribeWorkspacesResult {
        Workspaces?: WorkSpacesWorkspaceList;
        NextToken?: WorkSpacesPaginationToken;
    }

    export type WorkSpacesDescription = string;
    export type WorkSpacesDirectoryId = string; // pattern: "^d-[0-9a-f]{8,63}$"
    export type WorkSpacesDirectoryIdList = Array<WorkSpacesDirectoryId>; // max: 25
    export type WorkSpacesDirectoryList = Array<WorkSpacesWorkspaceDirectory>;
    export type WorkSpacesDirectoryName = string;
    export type WorkSpacesDnsIpAddresses = Array<WorkSpacesIpAddress>;
    export type WorkSpacesErrorType = string;
    export type WorkSpacesExceptionMessage = string;
    export interface WorkSpacesFailedCreateWorkspaceRequest {
        WorkspaceRequest?: WorkSpacesWorkspaceRequest;
        ErrorCode?: WorkSpacesErrorType;
        ErrorMessage?: WorkSpacesDescription;
    }

    export type WorkSpacesFailedCreateWorkspaceRequests = Array<WorkSpacesFailedCreateWorkspaceRequest>;
    export type WorkSpacesFailedRebootWorkspaceRequests = Array<WorkSpacesFailedWorkspaceChangeRequest>;
    export type WorkSpacesFailedRebuildWorkspaceRequests = Array<WorkSpacesFailedWorkspaceChangeRequest>;
    export type WorkSpacesFailedTerminateWorkspaceRequests = Array<WorkSpacesFailedWorkspaceChangeRequest>;
    export interface WorkSpacesFailedWorkspaceChangeRequest {
        WorkspaceId?: WorkSpacesWorkspaceId;
        ErrorCode?: WorkSpacesErrorType;
        ErrorMessage?: WorkSpacesDescription;
    }

    export interface WorkSpacesInvalidParameterValuesException {
        message?: WorkSpacesExceptionMessage;
    }

    export type WorkSpacesIpAddress = string;
    export type WorkSpacesLimit = number;
    export type WorkSpacesNonEmptyString = string;
    export type WorkSpacesPaginationToken = string;
    export interface WorkSpacesRebootRequest {
        WorkspaceId: WorkSpacesWorkspaceId;
    }

    export type WorkSpacesRebootWorkspaceRequests = Array<WorkSpacesRebootRequest>; // max: 25
    export interface WorkSpacesRebootWorkspacesRequest {
        RebootWorkspaceRequests: WorkSpacesRebootWorkspaceRequests;
    }

    export interface WorkSpacesRebootWorkspacesResult {
        FailedRequests?: WorkSpacesFailedRebootWorkspaceRequests;
    }

    export interface WorkSpacesRebuildRequest {
        WorkspaceId: WorkSpacesWorkspaceId;
    }

    export type WorkSpacesRebuildWorkspaceRequests = Array<WorkSpacesRebuildRequest>; // max: 1
    export interface WorkSpacesRebuildWorkspacesRequest {
        RebuildWorkspaceRequests: WorkSpacesRebuildWorkspaceRequests;
    }

    export interface WorkSpacesRebuildWorkspacesResult {
        FailedRequests?: WorkSpacesFailedRebuildWorkspaceRequests;
    }

    export type WorkSpacesRegistrationCode = string;
    export interface WorkSpacesResourceLimitExceededException {
        message?: WorkSpacesExceptionMessage;
    }

    export interface WorkSpacesResourceUnavailableException {
        message?: WorkSpacesExceptionMessage;
        ResourceId?: WorkSpacesNonEmptyString;
    }

    export type WorkSpacesSecurityGroupId = string; // pattern: "^(sg-[0-9a-f]{8})$"
    export type WorkSpacesSubnetId = string; // pattern: "^(subnet-[0-9a-f]{8})$"
    export type WorkSpacesSubnetIds = Array<WorkSpacesSubnetId>;
    export interface WorkSpacesTerminateRequest {
        WorkspaceId: WorkSpacesWorkspaceId;
    }

    export type WorkSpacesTerminateWorkspaceRequests = Array<WorkSpacesTerminateRequest>; // max: 25
    export interface WorkSpacesTerminateWorkspacesRequest {
        TerminateWorkspaceRequests: WorkSpacesTerminateWorkspaceRequests;
    }

    export interface WorkSpacesTerminateWorkspacesResult {
        FailedRequests?: WorkSpacesFailedTerminateWorkspaceRequests;
    }

    export type WorkSpacesUserName = string;
    export interface WorkSpacesUserStorage {
        Capacity?: WorkSpacesNonEmptyString;
    }

    export type WorkSpacesVolumeEncryptionKey = string;
    export interface WorkSpacesWorkspace {
        WorkspaceId?: WorkSpacesWorkspaceId;
        DirectoryId?: WorkSpacesDirectoryId;
        UserName?: WorkSpacesUserName;
        IpAddress?: WorkSpacesIpAddress;
        State?: WorkSpacesWorkspaceState;
        BundleId?: WorkSpacesBundleId;
        SubnetId?: WorkSpacesSubnetId;
        ErrorMessage?: WorkSpacesDescription;
        ErrorCode?: WorkSpacesWorkspaceErrorCode;
        ComputerName?: WorkSpacesComputerName;
        VolumeEncryptionKey?: WorkSpacesVolumeEncryptionKey;
        UserVolumeEncryptionEnabled?: WorkSpacesBooleanObject;
        RootVolumeEncryptionEnabled?: WorkSpacesBooleanObject;
    }

    export interface WorkSpacesWorkspaceBundle {
        BundleId?: WorkSpacesBundleId;
        Name?: WorkSpacesNonEmptyString;
        Owner?: WorkSpacesBundleOwner;
        Description?: WorkSpacesDescription;
        UserStorage?: WorkSpacesUserStorage;
        ComputeType?: WorkSpacesComputeType;
    }

    export interface WorkSpacesWorkspaceDirectory {
        DirectoryId?: WorkSpacesDirectoryId;
        Alias?: WorkSpacesAlias;
        DirectoryName?: WorkSpacesDirectoryName;
        RegistrationCode?: WorkSpacesRegistrationCode;
        SubnetIds?: WorkSpacesSubnetIds;
        DnsIpAddresses?: WorkSpacesDnsIpAddresses;
        CustomerUserName?: WorkSpacesUserName;
        IamRoleId?: WorkSpacesARN;
        DirectoryType?: WorkSpacesWorkspaceDirectoryType;
        WorkspaceSecurityGroupId?: WorkSpacesSecurityGroupId;
        State?: WorkSpacesWorkspaceDirectoryState;
        WorkspaceCreationProperties?: WorkSpacesDefaultWorkspaceCreationProperties;
    }

    export type WorkSpacesWorkspaceDirectoryState = string;
    export type WorkSpacesWorkspaceDirectoryType = string;
    export type WorkSpacesWorkspaceErrorCode = string;
    export type WorkSpacesWorkspaceId = string; // pattern: "^ws-[0-9a-z]{8,63}$"
    export type WorkSpacesWorkspaceIdList = Array<WorkSpacesWorkspaceId>; // max: 25
    export type WorkSpacesWorkspaceList = Array<WorkSpacesWorkspace>;
    export interface WorkSpacesWorkspaceRequest {
        DirectoryId: WorkSpacesDirectoryId;
        UserName: WorkSpacesUserName;
        BundleId: WorkSpacesBundleId;
        VolumeEncryptionKey?: WorkSpacesVolumeEncryptionKey;
        UserVolumeEncryptionEnabled?: WorkSpacesBooleanObject;
        RootVolumeEncryptionEnabled?: WorkSpacesBooleanObject;
    }

    export type WorkSpacesWorkspaceRequestList = Array<WorkSpacesWorkspaceRequest>; // max: 25
    export type WorkSpacesWorkspaceState = string;
}
