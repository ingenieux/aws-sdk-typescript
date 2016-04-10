// Type definitions for aws-sdk - Amazon WorkSpaces
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

// COMMENTED <reference path="./aws-sdk.d.ts" />

declare module "aws-sdk" {

  /**
    * apiVersion: 2015-04-08
    * endpointPrefix: workspaces
    * serviceAbbreviation: 
    * signatureVersion: v4
    * protocol: json
    *
    * Amazon WorkSpaces ServiceThis is the Amazon WorkSpaces API Reference . This guide provides detailed
 information about Amazon WorkSpaces operations, data types, parameters, and
 errors.
    *
    */
  export class WorkSpaces extends Service {
    constructor(options?: any);
    endpoint: Endpoint;
    /**
     * Creates one or more WorkSpaces.

This operation is asynchronous and returns before the WorkSpaces are created.
     *
     * @error ResourceLimitExceededException Your resource limits have been exceeded.  
     */
    createWorkspaces(params: WorkSpaces.CreateWorkspacesRequest, callback?: (err: WorkSpaces.ResourceLimitExceededException | any, data: WorkSpaces.CreateWorkspacesResult | any) => void): Request;
    /**
     * Obtains information about the WorkSpace bundles that are available to your
account in the specified region.

You can filter the results with either the BundleIds parameter, or the Owner 
parameter, but not both.

This operation supports pagination with the use of the NextToken request and
response parameters. If more results are available, the NextToken response
member contains a token that you pass in the next call to this operation to
retrieve the next set of items.
     *
     * @error InvalidParameterValuesException One or more parameter values are not valid.  
     */
    describeWorkspaceBundles(params: WorkSpaces.DescribeWorkspaceBundlesRequest, callback?: (err: WorkSpaces.InvalidParameterValuesException | any, data: WorkSpaces.DescribeWorkspaceBundlesResult | any) => void): Request;
    /**
     * Retrieves information about the AWS Directory Service directories in the region
that are registered with Amazon WorkSpaces and are available to your account.

This operation supports pagination with the use of the NextToken request and
response parameters. If more results are available, the NextToken response
member contains a token that you pass in the next call to this operation to
retrieve the next set of items.
     *
     * @error InvalidParameterValuesException One or more parameter values are not valid.  
     */
    describeWorkspaceDirectories(params: WorkSpaces.DescribeWorkspaceDirectoriesRequest, callback?: (err: WorkSpaces.InvalidParameterValuesException | any, data: WorkSpaces.DescribeWorkspaceDirectoriesResult | any) => void): Request;
    /**
     * Obtains information about the specified WorkSpaces.

Only one of the filter parameters, such as BundleId , DirectoryId , or 
WorkspaceIds , can be specified at a time.

This operation supports pagination with the use of the NextToken request and
response parameters. If more results are available, the NextToken response
member contains a token that you pass in the next call to this operation to
retrieve the next set of items.
     *
     * @error InvalidParameterValuesException One or more parameter values are not valid.  
     * @error ResourceUnavailableException The specified resource is not available.  
     */
    describeWorkspaces(params: WorkSpaces.DescribeWorkspacesRequest, callback?: (err: WorkSpaces.InvalidParameterValuesException | WorkSpaces.ResourceUnavailableException | any, data: WorkSpaces.DescribeWorkspacesResult | any) => void): Request;
    /**
     * Reboots the specified WorkSpaces.

To be able to reboot a WorkSpace, the WorkSpace must have a State of AVAILABLE , 
IMPAIRED , or INOPERABLE .

This operation is asynchronous and will return before the WorkSpaces have
rebooted.
     *
     */
    rebootWorkspaces(params: WorkSpaces.RebootWorkspacesRequest, callback?: (err: any, data: WorkSpaces.RebootWorkspacesResult | any) => void): Request;
    /**
     * Rebuilds the specified WorkSpaces.

Rebuilding a WorkSpace is a potentially destructive action that can result in
the loss of data. Rebuilding a WorkSpace causes the following to occur:

 &amp;#42; The system is restored to the image of the bundle that the WorkSpace is
   created from. Any applications that have been installed, or system settings
   that have been made since the WorkSpace was created will be lost.
 * The data drive (D drive) is re-created from the last automatic snapshot taken
   of the data drive. The current contents of the data drive are overwritten.
   Automatic snapshots of the data drive are taken every 12 hours, so the
   snapshot can be as much as 12 hours old.

To be able to rebuild a WorkSpace, the WorkSpace must have a State of AVAILABLE 
or ERROR .

This operation is asynchronous and will return before the WorkSpaces have been
completely rebuilt.
     *
     */
    rebuildWorkspaces(params: WorkSpaces.RebuildWorkspacesRequest, callback?: (err: any, data: WorkSpaces.RebuildWorkspacesResult | any) => void): Request;
    /**
     * Terminates the specified WorkSpaces.

Terminating a WorkSpace is a permanent action and cannot be undone. The user&#x27;s
data is not maintained and will be destroyed. If you need to archive any user
data, contact Amazon Web Services before terminating the WorkSpace.

You can terminate a WorkSpace that is in any state except SUSPENDED .

This operation is asynchronous and will return before the WorkSpaces have been
completely terminated.
     *
     */
    terminateWorkspaces(params: WorkSpaces.TerminateWorkspacesRequest, callback?: (err: any, data: WorkSpaces.TerminateWorkspacesResult | any) => void): Request;

  }

  export module WorkSpaces {

    export type ARN = string;

    export type Alias = string;

    export type BooleanObject = boolean;

    export type BundleId = string;

    export type BundleIdList = BundleId[];

    export type BundleList = WorkspaceBundle[];

    export type BundleOwner = string;

    export type Compute = string;

    export type ComputerName = string;

    export type DefaultOu = string;

    export type Description = string;

    export type DirectoryId = string;

    export type DirectoryIdList = DirectoryId[];

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

    export type Limit = number;

    export type NonEmptyString = string;

    export type PaginationToken = string;

    export type RebootWorkspaceRequests = RebootRequest[];

    export type RebuildWorkspaceRequests = RebuildRequest[];

    export type RegistrationCode = string;

    export type SecurityGroupId = string;

    export type SubnetId = string;

    export type SubnetIds = SubnetId[];

    export type TerminateWorkspaceRequests = TerminateRequest[];

    export type UserName = string;

    export type VolumeEncryptionKey = string;

    export type WorkspaceDirectoryState = string;

    export type WorkspaceDirectoryType = string;

    export type WorkspaceErrorCode = string;

    export type WorkspaceId = string;

    export type WorkspaceIdList = WorkspaceId[];

    export type WorkspaceList = Workspace[];

    export type WorkspaceRequestList = WorkspaceRequest[];

    export type WorkspaceState = string;

    export interface ComputeType {
      /** The name of the compute type for the bundle. **/
      Name?: Compute;
    }
    export interface CreateWorkspacesRequest {
      /** An array of structures that specify the WorkSpaces to create. **/
      Workspaces: WorkspaceRequestList;
    }
    export interface CreateWorkspacesResult {
      /** An array of structures that represent the WorkSpaces that could not be created. **/
      FailedRequests?: FailedCreateWorkspaceRequests;
      /** An array of structures that represent the WorkSpaces that were created.

Because this operation is asynchronous, the identifier in WorkspaceId is not
immediately available. If you immediately call DescribeWorkspaces with this
identifier, no information will be returned. **/
      PendingRequests?: WorkspaceList;
    }
    export interface DefaultWorkspaceCreationProperties {
      /** Specifies if the directory is enabled for Amazon WorkDocs. **/
      EnableWorkDocs?: BooleanObject;
      /** A public IP address will be attached to all WorkSpaces that are created or
rebuilt. **/
      EnableInternetAccess?: BooleanObject;
      /** The organizational unit (OU) in the directory that the WorkSpace machine
accounts are placed in. **/
      DefaultOu?: DefaultOu;
      /** The identifier of any custom security groups that are applied to the WorkSpaces
when they are created. **/
      CustomSecurityGroupId?: SecurityGroupId;
      /** The WorkSpace user is an administrator on the WorkSpace. **/
      UserEnabledAsLocalAdministrator?: BooleanObject;
    }
    export interface DescribeWorkspaceBundlesRequest {
      /** An array of strings that contains the identifiers of the bundles to retrieve.
This parameter cannot be combined with any other filter parameter. **/
      BundleIds?: BundleIdList;
      /** The owner of the bundles to retrieve. This parameter cannot be combined with any
other filter parameter.

This contains one of the following values:

&amp;#42; null - Retrieves the bundles that belong to the account making the call.
* AMAZON - Retrieves the bundles that are provided by AWS. **/
      Owner?: BundleOwner;
      /** The NextToken value from a previous call to this operation. Pass null if this is
the first call. **/
      NextToken?: PaginationToken;
    }
    export interface DescribeWorkspaceBundlesResult {
      /** An array of structures that contain information about the bundles. **/
      Bundles?: BundleList;
      /** If not null, more results are available. Pass this value for the NextToken 
parameter in a subsequent call to this operation to retrieve the next set of
items. This token is valid for one day and must be used within that timeframe. **/
      NextToken?: PaginationToken;
    }
    export interface DescribeWorkspaceDirectoriesRequest {
      /** An array of strings that contains the directory identifiers to retrieve
information for. If this member is null, all directories are retrieved. **/
      DirectoryIds?: DirectoryIdList;
      /** The NextToken value from a previous call to this operation. Pass null if this is
the first call. **/
      NextToken?: PaginationToken;
    }
    export interface DescribeWorkspaceDirectoriesResult {
      /** An array of structures that contain information about the directories. **/
      Directories?: DirectoryList;
      /** If not null, more results are available. Pass this value for the NextToken 
parameter in a subsequent call to this operation to retrieve the next set of
items. This token is valid for one day and must be used within that timeframe. **/
      NextToken?: PaginationToken;
    }
    export interface DescribeWorkspacesRequest {
      /** An array of strings that contain the identifiers of the WorkSpaces for which to
retrieve information. This parameter cannot be combined with any other filter
parameter.

Because the CreateWorkspaces operation is asynchronous, the identifier returned
by CreateWorkspaces is not immediately available. If you immediately call 
DescribeWorkspaces with this identifier, no information will be returned. **/
      WorkspaceIds?: WorkspaceIdList;
      /** Specifies the directory identifier to which to limit the WorkSpaces. Optionally,
you can specify a specific directory user with the UserName parameter. This
parameter cannot be combined with any other filter parameter. **/
      DirectoryId?: DirectoryId;
      /** Used with the DirectoryId parameter to specify the directory user for which to
obtain the WorkSpace. **/
      UserName?: UserName;
      /** The identifier of a bundle to obtain the WorkSpaces for. All WorkSpaces that are
created from this bundle will be retrieved. This parameter cannot be combined
with any other filter parameter. **/
      BundleId?: BundleId;
      /** The maximum number of items to return. **/
      Limit?: Limit;
      /** The NextToken value from a previous call to this operation. Pass null if this is
the first call. **/
      NextToken?: PaginationToken;
    }
    export interface DescribeWorkspacesResult {
      /** An array of structures that contain the information about the WorkSpaces.

Because the CreateWorkspaces operation is asynchronous, some of this information
may be incomplete for a newly-created WorkSpace. **/
      Workspaces?: WorkspaceList;
      /** If not null, more results are available. Pass this value for the NextToken 
parameter in a subsequent call to this operation to retrieve the next set of
items. This token is valid for one day and must be used within that timeframe. **/
      NextToken?: PaginationToken;
    }
    export interface FailedCreateWorkspaceRequest {
      /** A WorkspaceRequest object that contains the information about the WorkSpace that
could not be created. **/
      WorkspaceRequest?: WorkspaceRequest;
      /** The error code. **/
      ErrorCode?: ErrorType;
      /** The textual error message. **/
      ErrorMessage?: Description;
    }
    export interface FailedWorkspaceChangeRequest {
      /** The identifier of the WorkSpace. **/
      WorkspaceId?: WorkspaceId;
      /** The error code. **/
      ErrorCode?: ErrorType;
      /** The textual error message. **/
      ErrorMessage?: Description;
    }
    export interface InvalidParameterValuesException {
      /** The exception error message. **/
      message?: ExceptionMessage;
    }
    export interface RebootRequest {
      /** The identifier of the WorkSpace to reboot. **/
      WorkspaceId: WorkspaceId;
    }
    export interface RebootWorkspacesRequest {
      /** An array of structures that specify the WorkSpaces to reboot. **/
      RebootWorkspaceRequests: RebootWorkspaceRequests;
    }
    export interface RebootWorkspacesResult {
      /** An array of structures that represent any WorkSpaces that could not be rebooted. **/
      FailedRequests?: FailedRebootWorkspaceRequests;
    }
    export interface RebuildRequest {
      /** The identifier of the WorkSpace to rebuild. **/
      WorkspaceId: WorkspaceId;
    }
    export interface RebuildWorkspacesRequest {
      /** An array of structures that specify the WorkSpaces to rebuild. **/
      RebuildWorkspaceRequests: RebuildWorkspaceRequests;
    }
    export interface RebuildWorkspacesResult {
      /** An array of structures that represent any WorkSpaces that could not be rebuilt. **/
      FailedRequests?: FailedRebuildWorkspaceRequests;
    }
    export interface ResourceLimitExceededException {
      /** The exception error message. **/
      message?: ExceptionMessage;
    }
    export interface ResourceUnavailableException {
      /** The exception error message. **/
      message?: ExceptionMessage;
      /** The identifier of the resource that is not available. **/
      ResourceId?: NonEmptyString;
    }
    export interface TerminateRequest {
      /** The identifier of the WorkSpace to terminate. **/
      WorkspaceId: WorkspaceId;
    }
    export interface TerminateWorkspacesRequest {
      /** An array of structures that specify the WorkSpaces to terminate. **/
      TerminateWorkspaceRequests: TerminateWorkspaceRequests;
    }
    export interface TerminateWorkspacesResult {
      /** An array of structures that represent any WorkSpaces that could not be
terminated. **/
      FailedRequests?: FailedTerminateWorkspaceRequests;
    }
    export interface UserStorage {
      /** The amount of user storage for the bundle. **/
      Capacity?: NonEmptyString;
    }
    export interface Workspace {
      /** The identifier of the WorkSpace. **/
      WorkspaceId?: WorkspaceId;
      /** The identifier of the AWS Directory Service directory that the WorkSpace belongs
to. **/
      DirectoryId?: DirectoryId;
      /** The user that the WorkSpace is assigned to. **/
      UserName?: UserName;
      /** The IP address of the WorkSpace. **/
      IpAddress?: IpAddress;
      /** The operational state of the WorkSpace. **/
      State?: WorkspaceState;
      /** The identifier of the bundle that the WorkSpace was created from. **/
      BundleId?: BundleId;
      /** The identifier of the subnet that the WorkSpace is in. **/
      SubnetId?: SubnetId;
      /** If the WorkSpace could not be created, this contains a textual error message
that describes the failure. **/
      ErrorMessage?: Description;
      /** If the WorkSpace could not be created, this contains the error code. **/
      ErrorCode?: WorkspaceErrorCode;
      /** The name of the WorkSpace as seen by the operating system. **/
      ComputerName?: ComputerName;
      /** The KMS key used to encrypt data stored on your WorkSpace. **/
      VolumeEncryptionKey?: VolumeEncryptionKey;
      /** Specifies whether the data stored on the user volume, or D: drive, is encrypted. **/
      UserVolumeEncryptionEnabled?: BooleanObject;
      /** Specifies whether the data stored on the root volume, or C: drive, is encrypted. **/
      RootVolumeEncryptionEnabled?: BooleanObject;
    }
    export interface WorkspaceBundle {
      /** The bundle identifier. **/
      BundleId?: BundleId;
      /** The name of the bundle. **/
      Name?: NonEmptyString;
      /** The owner of the bundle. This contains the owner&#x27;s account identifier, or AMAZON 
if the bundle is provided by AWS. **/
      Owner?: BundleOwner;
      /** The bundle description. **/
      Description?: Description;
      /** A UserStorage object that specifies the amount of user storage that the bundle
contains. **/
      UserStorage?: UserStorage;
      /** A ComputeType object that specifies the compute type for the bundle. **/
      ComputeType?: ComputeType;
    }
    export interface WorkspaceDirectory {
      /** The directory identifier. **/
      DirectoryId?: DirectoryId;
      /** The directory alias. **/
      Alias?: Alias;
      /** The name of the directory. **/
      DirectoryName?: DirectoryName;
      /** The registration code for the directory. This is the code that users enter in
their Amazon WorkSpaces client application to connect to the directory. **/
      RegistrationCode?: RegistrationCode;
      /** An array of strings that contains the identifiers of the subnets used with the
directory. **/
      SubnetIds?: SubnetIds;
      /** An array of strings that contains the IP addresses of the DNS servers for the
directory. **/
      DnsIpAddresses?: DnsIpAddresses;
      /** The user name for the service account. **/
      CustomerUserName?: UserName;
      /** The identifier of the IAM role. This is the role that allows Amazon WorkSpaces
to make calls to other services, such as Amazon EC2, on your behalf. **/
      IamRoleId?: ARN;
      /** The directory type. **/
      DirectoryType?: WorkspaceDirectoryType;
      /** The identifier of the security group that is assigned to new WorkSpaces. **/
      WorkspaceSecurityGroupId?: SecurityGroupId;
      /** The state of the directory&#x27;s registration with Amazon WorkSpaces **/
      State?: WorkspaceDirectoryState;
      /** A structure that specifies the default creation properties for all WorkSpaces in
the directory. **/
      WorkspaceCreationProperties?: DefaultWorkspaceCreationProperties;
    }
    export interface WorkspaceRequest {
      /** The identifier of the AWS Directory Service directory to create the WorkSpace
in. You can use the DescribeWorkspaceDirectories operation to obtain a list of
the directories that are available. **/
      DirectoryId: DirectoryId;
      /** The username that the WorkSpace is assigned to. This username must exist in the
AWS Directory Service directory specified by the DirectoryId member. **/
      UserName: UserName;
      /** The identifier of the bundle to create the WorkSpace from. You can use the 
DescribeWorkspaceBundles operation to obtain a list of the bundles that are
available. **/
      BundleId: BundleId;
      /** The KMS key used to encrypt data stored on your WorkSpace. **/
      VolumeEncryptionKey?: VolumeEncryptionKey;
      /** Specifies whether the data stored on the user volume, or D: drive, is encrypted. **/
      UserVolumeEncryptionEnabled?: BooleanObject;
      /** Specifies whether the data stored on the root volume, or C: drive, is encrypted. **/
      RootVolumeEncryptionEnabled?: BooleanObject;
    }
  }
}
