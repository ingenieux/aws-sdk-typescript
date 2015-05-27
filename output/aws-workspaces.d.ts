// DO NOT EDIT!
//
declare module "aws-sdk" {
    export class WorkSpaces {
      constructor(options?: any);
      createWorkspaces(params: CreateWorkspacesRequest, callback: (err: ResourceLimitExceededException|any, data: CreateWorkspacesResult|any) => void): void;
      describeWorkspaceBundles(params: DescribeWorkspaceBundlesRequest, callback: (err: InvalidParameterValuesException|any, data: DescribeWorkspaceBundlesResult|any) => void): void;
      describeWorkspaceDirectories(params: DescribeWorkspaceDirectoriesRequest, callback: (err: InvalidParameterValuesException|any, data: DescribeWorkspaceDirectoriesResult|any) => void): void;
      describeWorkspaces(params: DescribeWorkspacesRequest, callback: (err: InvalidParameterValuesException|ResourceUnavailableException|any, data: DescribeWorkspacesResult|any) => void): void;
      rebootWorkspaces(params: RebootWorkspacesRequest, callback: (err: any, data: RebootWorkspacesResult|any) => void): void;
      rebuildWorkspaces(params: RebuildWorkspacesRequest, callback: (err: any, data: RebuildWorkspacesResult|any) => void): void;
      terminateWorkspaces(params: TerminateWorkspacesRequest, callback: (err: any, data: TerminateWorkspacesResult|any) => void): void;
    }

    export type ARN = string; // pattern: "^arn:aws:[A-Za-z0-9][A-za-z0-9_/.-]{0,62}:[A-za-z0-9_/.-]{0,63}:[A-za-z0-9_/.-]{0,63}:[A-Za-z0-9][A-za-z0-9_/.-]{0,127}$"

    export type Alias = string;

    export type BooleanObject = boolean;

    export type BundleId = string; // pattern: "^wsb-[0-9a-z]{8,63}$"

    export type BundleIdList = Array<BundleId>; // max: 25

    export type BundleList = Array<WorkspaceBundle>;

    export type BundleOwner = string;

    export type Compute = string;

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


    export type DefaultOu = string;

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


    export type Description = string;

    export type DirectoryId = string; // pattern: "^d-[0-9a-f]{8,63}$"

    export type DirectoryIdList = Array<DirectoryId>; // max: 25

    export type DirectoryList = Array<WorkspaceDirectory>;

    export type DirectoryName = string;

    export type DnsIpAddresses = Array<IpAddress>;

    export type ErrorType = string;

    export type ExceptionMessage = string;

    export interface FailedCreateWorkspaceRequest {
      WorkspaceRequest?: WorkspaceRequest;
      ErrorCode?: ErrorType;
      ErrorMessage?: Description;
    }


    export type FailedCreateWorkspaceRequests = Array<FailedCreateWorkspaceRequest>;

    export type FailedRebootWorkspaceRequests = Array<FailedWorkspaceChangeRequest>;

    export type FailedRebuildWorkspaceRequests = Array<FailedWorkspaceChangeRequest>;

    export type FailedTerminateWorkspaceRequests = Array<FailedWorkspaceChangeRequest>;

    export interface FailedWorkspaceChangeRequest {
      WorkspaceId?: WorkspaceId;
      ErrorCode?: ErrorType;
      ErrorMessage?: Description;
    }


    export interface InvalidParameterValuesException {
      message?: ExceptionMessage;
    }


    export type IpAddress = string;

    export type Limit = number;

    export type NonEmptyString = string;

    export type PaginationToken = string;

    export interface RebootRequest {
      WorkspaceId: WorkspaceId;
    }


    export type RebootWorkspaceRequests = Array<RebootRequest>; // max: 25

    export interface RebootWorkspacesRequest {
      RebootWorkspaceRequests: RebootWorkspaceRequests;
    }


    export interface RebootWorkspacesResult {
      FailedRequests?: FailedRebootWorkspaceRequests;
    }


    export interface RebuildRequest {
      WorkspaceId: WorkspaceId;
    }


    export type RebuildWorkspaceRequests = Array<RebuildRequest>; // max: 1

    export interface RebuildWorkspacesRequest {
      RebuildWorkspaceRequests: RebuildWorkspaceRequests;
    }


    export interface RebuildWorkspacesResult {
      FailedRequests?: FailedRebuildWorkspaceRequests;
    }


    export type RegistrationCode = string;

    export interface ResourceLimitExceededException {
      message?: ExceptionMessage;
    }


    export interface ResourceUnavailableException {
      message?: ExceptionMessage;
      ResourceId?: NonEmptyString;
    }


    export type SecurityGroupId = string; // pattern: "^(sg-[0-9a-f]{8})$"

    export type SubnetId = string; // pattern: "^(subnet-[0-9a-f]{8})$"

    export type SubnetIds = Array<SubnetId>;

    export interface TerminateRequest {
      WorkspaceId: WorkspaceId;
    }


    export type TerminateWorkspaceRequests = Array<TerminateRequest>; // max: 25

    export interface TerminateWorkspacesRequest {
      TerminateWorkspaceRequests: TerminateWorkspaceRequests;
    }


    export interface TerminateWorkspacesResult {
      FailedRequests?: FailedTerminateWorkspaceRequests;
    }


    export type UserName = string;

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


    export type WorkspaceDirectoryState = string;

    export type WorkspaceDirectoryType = string;

    export type WorkspaceErrorCode = string;

    export type WorkspaceId = string; // pattern: "^ws-[0-9a-z]{8,63}$"

    export type WorkspaceIdList = Array<WorkspaceId>; // max: 25

    export type WorkspaceList = Array<Workspace>;

    export interface WorkspaceRequest {
      DirectoryId: DirectoryId;
      UserName: UserName;
      BundleId: BundleId;
    }


    export type WorkspaceRequestList = Array<WorkspaceRequest>; // max: 25

    export type WorkspaceState = string;

}
