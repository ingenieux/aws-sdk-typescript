// Type definitions for aws-sdk - Amazon WorkSpaces
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

///<reference path="./aws-sdk-common.d.ts" />

declare module "aws-sdk" {

    /*
     * apiVersion: 2015-04-08
     * endpointPrefix: workspaces
     * serviceAbbreviation: 
     * signatureVersion: v4
     * protocol: json
     */
    export class WorkSpaces extends Service {
      constructor(options?: any);
      endpoint: Endpoint;
      createWorkspaces(params: WorkSpaces.CreateWorkspacesRequest, callback?: (err: WorkSpaces.ResourceLimitExceededException|any, data: WorkSpaces.CreateWorkspacesResult|any) => void): Request;
      describeWorkspaceBundles(params: WorkSpaces.DescribeWorkspaceBundlesRequest, callback?: (err: WorkSpaces.InvalidParameterValuesException|any, data: WorkSpaces.DescribeWorkspaceBundlesResult|any) => void): Request;
      describeWorkspaceDirectories(params: WorkSpaces.DescribeWorkspaceDirectoriesRequest, callback?: (err: WorkSpaces.InvalidParameterValuesException|any, data: WorkSpaces.DescribeWorkspaceDirectoriesResult|any) => void): Request;
      describeWorkspaces(params: WorkSpaces.DescribeWorkspacesRequest, callback?: (err: WorkSpaces.InvalidParameterValuesException|WorkSpaces.ResourceUnavailableException|any, data: WorkSpaces.DescribeWorkspacesResult|any) => void): Request;
      rebootWorkspaces(params: WorkSpaces.RebootWorkspacesRequest, callback?: (err: any, data: WorkSpaces.RebootWorkspacesResult|any) => void): Request;
      rebuildWorkspaces(params: WorkSpaces.RebuildWorkspacesRequest, callback?: (err: any, data: WorkSpaces.RebuildWorkspacesResult|any) => void): Request;
      terminateWorkspaces(params: WorkSpaces.TerminateWorkspacesRequest, callback?: (err: any, data: WorkSpaces.TerminateWorkspacesResult|any) => void): Request;

    }

    export module WorkSpaces {
        export type ARN = string;    // pattern: &quot;^arn:aws:[A-Za-z0-9][A-za-z0-9_/.-]{0,62}:[A-za-z0-9_/.-]{0,63}:[A-za-z0-9_/.-]{0,63}:[A-Za-z0-9][A-za-z0-9_/.-]{0,127}$&quot;
        export type Alias = string;
        export type BooleanObject = boolean;
        export type BundleId = string;    // pattern: &quot;^wsb-[0-9a-z]{8,63}$&quot;
        export type BundleIdList = BundleId[];    // max: 25, min: 1
        export type BundleList = WorkspaceBundle[];
        export type BundleOwner = string;
        export type Compute = string;
        export type ComputerName = string;
        export type DefaultOu = string;
        export type Description = string;
        export type DirectoryId = string;    // pattern: &quot;^d-[0-9a-f]{8,63}$&quot;
        export type DirectoryIdList = DirectoryId[];    // max: 25, min: 1
        export type DirectoryList = WorkspaceDirectory[];
        export type DirectoryName = string;
        export type DnsIpAddresses = IpAddress[];
        export type ErrorType = string;
        export type ExceptionMessage = string;
        export type FailedCreateWorkspaceRequests = FailedCreateWorkspaceRequest[];
        export type FailedRebootWorkspaceRequests = FailedWorkspaceChangeRequest[];
        export type FailedRebuildWorkspaceRequests = FailedWorkspaceChangeRequest[];
        export type FailedTerminateWorkspaceRequests = FailedWorkspaceChangeRequest[];
        export type IpAddress = string;
        export type Limit = number;    // max: 25, min: 1
        export type NonEmptyString = string;    // min: 1
        export type PaginationToken = string;    // max: 63, min: 1
        export type RebootWorkspaceRequests = RebootRequest[];    // max: 25, min: 1
        export type RebuildWorkspaceRequests = RebuildRequest[];    // max: 1, min: 1
        export type RegistrationCode = string;    // max: 20, min: 1
        export type SecurityGroupId = string;    // pattern: &quot;^(sg-[0-9a-f]{8})$&quot;
        export type SubnetId = string;    // pattern: &quot;^(subnet-[0-9a-f]{8})$&quot;
        export type SubnetIds = SubnetId[];
        export type TerminateWorkspaceRequests = TerminateRequest[];    // max: 25, min: 1
        export type UserName = string;    // max: 63, min: 1
        export type VolumeEncryptionKey = string;
        export type WorkspaceDirectoryState = string;
        export type WorkspaceDirectoryType = string;
        export type WorkspaceErrorCode = string;
        export type WorkspaceId = string;    // pattern: &quot;^ws-[0-9a-z]{8,63}$&quot;
        export type WorkspaceIdList = WorkspaceId[];    // max: 25, min: 1
        export type WorkspaceList = Workspace[];
        export type WorkspaceRequestList = WorkspaceRequest[];    // max: 25, min: 1
        export type WorkspaceState = string;

        export interface ComputeType {
            Name?: Compute;
        }
        export interface CreateWorkspacesRequest {
            Workspaces: WorkspaceRequestList;
        }
        export interface CreateWorkspacesResult {
            FailedRequests?: FailedCreateWorkspaceRequests;
            PendingRequests?: WorkspaceList;
        }
        export interface DefaultWorkspaceCreationProperties {
            EnableWorkDocs?: BooleanObject;
            EnableInternetAccess?: BooleanObject;
            DefaultOu?: DefaultOu;
            CustomSecurityGroupId?: SecurityGroupId;
            UserEnabledAsLocalAdministrator?: BooleanObject;
        }
        export interface DescribeWorkspaceBundlesRequest {
            BundleIds?: BundleIdList;
            Owner?: BundleOwner;
            NextToken?: PaginationToken;
        }
        export interface DescribeWorkspaceBundlesResult {
            Bundles?: BundleList;
            NextToken?: PaginationToken;
        }
        export interface DescribeWorkspaceDirectoriesRequest {
            DirectoryIds?: DirectoryIdList;
            NextToken?: PaginationToken;
        }
        export interface DescribeWorkspaceDirectoriesResult {
            Directories?: DirectoryList;
            NextToken?: PaginationToken;
        }
        export interface DescribeWorkspacesRequest {
            WorkspaceIds?: WorkspaceIdList;
            DirectoryId?: DirectoryId;
            UserName?: UserName;
            BundleId?: BundleId;
            Limit?: Limit;
            NextToken?: PaginationToken;
        }
        export interface DescribeWorkspacesResult {
            Workspaces?: WorkspaceList;
            NextToken?: PaginationToken;
        }
        export interface FailedCreateWorkspaceRequest {
            WorkspaceRequest?: WorkspaceRequest;
            ErrorCode?: ErrorType;
            ErrorMessage?: Description;
        }
        export interface FailedWorkspaceChangeRequest {
            WorkspaceId?: WorkspaceId;
            ErrorCode?: ErrorType;
            ErrorMessage?: Description;
        }
        export interface InvalidParameterValuesException {
            message?: ExceptionMessage;
        }
        export interface RebootRequest {
            WorkspaceId: WorkspaceId;
        }
        export interface RebootWorkspacesRequest {
            RebootWorkspaceRequests: RebootWorkspaceRequests;
        }
        export interface RebootWorkspacesResult {
            FailedRequests?: FailedRebootWorkspaceRequests;
        }
        export interface RebuildRequest {
            WorkspaceId: WorkspaceId;
        }
        export interface RebuildWorkspacesRequest {
            RebuildWorkspaceRequests: RebuildWorkspaceRequests;
        }
        export interface RebuildWorkspacesResult {
            FailedRequests?: FailedRebuildWorkspaceRequests;
        }
        export interface ResourceLimitExceededException {
            message?: ExceptionMessage;
        }
        export interface ResourceUnavailableException {
            message?: ExceptionMessage;
            ResourceId?: NonEmptyString;
        }
        export interface TerminateRequest {
            WorkspaceId: WorkspaceId;
        }
        export interface TerminateWorkspacesRequest {
            TerminateWorkspaceRequests: TerminateWorkspaceRequests;
        }
        export interface TerminateWorkspacesResult {
            FailedRequests?: FailedTerminateWorkspaceRequests;
        }
        export interface UserStorage {
            Capacity?: NonEmptyString;
        }
        export interface Workspace {
            WorkspaceId?: WorkspaceId;
            DirectoryId?: DirectoryId;
            UserName?: UserName;
            IpAddress?: IpAddress;
            State?: WorkspaceState;
            BundleId?: BundleId;
            SubnetId?: SubnetId;
            ErrorMessage?: Description;
            ErrorCode?: WorkspaceErrorCode;
            ComputerName?: ComputerName;
            VolumeEncryptionKey?: VolumeEncryptionKey;
            UserVolumeEncryptionEnabled?: BooleanObject;
            RootVolumeEncryptionEnabled?: BooleanObject;
        }
        export interface WorkspaceBundle {
            BundleId?: BundleId;
            Name?: NonEmptyString;
            Owner?: BundleOwner;
            Description?: Description;
            UserStorage?: UserStorage;
            ComputeType?: ComputeType;
        }
        export interface WorkspaceDirectory {
            DirectoryId?: DirectoryId;
            Alias?: Alias;
            DirectoryName?: DirectoryName;
            RegistrationCode?: RegistrationCode;
            SubnetIds?: SubnetIds;
            DnsIpAddresses?: DnsIpAddresses;
            CustomerUserName?: UserName;
            IamRoleId?: ARN;
            DirectoryType?: WorkspaceDirectoryType;
            WorkspaceSecurityGroupId?: SecurityGroupId;
            State?: WorkspaceDirectoryState;
            WorkspaceCreationProperties?: DefaultWorkspaceCreationProperties;
        }
        export interface WorkspaceRequest {
            DirectoryId: DirectoryId;
            UserName: UserName;
            BundleId: BundleId;
            VolumeEncryptionKey?: VolumeEncryptionKey;
            UserVolumeEncryptionEnabled?: BooleanObject;
            RootVolumeEncryptionEnabled?: BooleanObject;
        }

    }
}
