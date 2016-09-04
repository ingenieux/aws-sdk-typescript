// Type definitions for aws-sdk - Amazon Elastic File System
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

// COMMENTED <reference path="./aws-sdk.d.ts" />

declare module "aws-sdk" {

  /**
    * apiVersion: 2015-02-01
    * endpointPrefix: elasticfilesystem
    * serviceAbbreviation: EFS
    * signatureVersion: v4
    * protocol: rest-json
    *
    * Amazon Elastic File System
    *
    */
  export class EFS extends Service {
    constructor(options?: any);
    endpoint: Endpoint;
    /**
     * Creates a new, empty file system. The operation requires a creation token in the
request that Amazon EFS uses to ensure idempotent creation (calling the
operation with same creation token has no effect). If a file system does not
currently exist that is owned by the caller&#x27;s AWS account with the specified
creation token, this operation does the following:

 &amp;#42;  Creates a new, empty file system. The file system will have an Amazon EFS
   assigned ID, and an initial lifecycle state creating.
   
   
 &amp;#42;  Returns with the description of the created file system.
   
   

Otherwise, this operation returns a FileSystemAlreadyExists error with the ID of
the existing file system.

For basic use cases, you can use a randomly generated UUID for the creation
token.

 The idempotent operation allows you to retry a CreateFileSystem call without
risk of creating an extra file system. This can happen when an initial call
fails in a way that leaves it uncertain whether or not a file system was
actually created. An example might be that a transport level timeout occurred or
your connection was reset. As long as you use the same creation token, if the
initial call had succeeded in creating a file system, the client can learn of
its existence from the FileSystemAlreadyExists error.

The CreateFileSystem call returns while the file system&#x27;s lifecycle state is
still creating. You can check the file system creation status by calling the 
DescribeFileSystems operation, which among other things returns the file system
state.

This operation also takes an optional PerformanceMode parameter that you choose
for your file system. We recommend generalPurpose performance mode for most file
systems. File systems using the maxIO performance mode can scale to higher
levels of aggregate throughput and operations per second with a tradeoff of
slightly higher latencies for most file operations. The performance mode can&#x27;t
be changed after the file system has been created. For more information, see 
Amazon EFS: Performance Modes
[http://docs.aws.amazon.com/efs/latest/ug/performance.html#performancemodes.html]
.

After the file system is fully created, Amazon EFS sets its lifecycle state to 
available, at which point you can create one or more mount targets for the file
system in your VPC. For more information, see CreateMountTarget. You mount your
Amazon EFS file system on an EC2 instances in your VPC via the mount target. For
more information, see Amazon EFS: How it Works
[http://docs.aws.amazon.com/efs/latest/ug/how-it-works.html]. 

 This operation requires permissions for the elasticfilesystem:CreateFileSystem 
action.
     *
     * @error BadRequest   
     * @error InternalServerError   
     * @error FileSystemAlreadyExists   
     * @error FileSystemLimitExceeded   
     */
    createFileSystem(params: EFS.CreateFileSystemRequest, callback?: (err: EFS.BadRequest | EFS.InternalServerError | EFS.FileSystemAlreadyExists | EFS.FileSystemLimitExceeded | any, data: EFS.FileSystemDescription | any) => void): Request<EFS.FileSystemDescription | any, EFS.BadRequest | EFS.InternalServerError | EFS.FileSystemAlreadyExists | EFS.FileSystemLimitExceeded | any>;
    /**
     * Creates a mount target for a file system. You can then mount the file system on
EC2 instances via the mount target.

You can create one mount target in each Availability Zone in your VPC. All EC2
instances in a VPC within a given Availability Zone share a single mount target
for a given file system. If you have multiple subnets in an Availability Zone,
you create a mount target in one of the subnets. EC2 instances do not need to be
in the same subnet as the mount target in order to access their file system. For
more information, see Amazon EFS: How it Works
[http://docs.aws.amazon.com/efs/latest/ug/how-it-works.html]. 

In the request, you also specify a file system ID for which you are creating the
mount target and the file system&#x27;s lifecycle state must be available. For more
information, see DescribeFileSystems.

In the request, you also provide a subnet ID, which determines the following:

 &amp;#42;  VPC in which Amazon EFS creates the mount target
   
   
 &amp;#42;  Availability Zone in which Amazon EFS creates the mount target
   
   
 &amp;#42;  IP address range from which Amazon EFS selects the IP address of the mount
   target (if you don&#x27;t specify an IP address in the request)
   
   

After creating the mount target, Amazon EFS returns a response that includes, a 
MountTargetId and an IpAddress. You use this IP address when mounting the file
system in an EC2 instance. You can also use the mount target&#x27;s DNS name when
mounting the file system. The EC2 instance on which you mount the file system
via the mount target can resolve the mount target&#x27;s DNS name to its IP address.
For more information, see How it Works: Implementation Overview
[http://docs.aws.amazon.com/efs/latest/ug/how-it-works.html#how-it-works-implementation]
. 

Note that you can create mount targets for a file system in only one VPC, and
there can be only one mount target per Availability Zone. That is, if the file
system already has one or more mount targets created for it, the subnet
specified in the request to add another mount target must meet the following
requirements:

 &amp;#42;  Must belong to the same VPC as the subnets of the existing mount targets
   
   
 &amp;#42;  Must not be in the same Availability Zone as any of the subnets of the
   existing mount targets
   
   

If the request satisfies the requirements, Amazon EFS does the following:

 &amp;#42;  Creates a new mount target in the specified subnet.
   
   
 &amp;#42;  Also creates a new network interface in the subnet as follows:
   
    &amp;#42;  If the request provides an IpAddress, Amazon EFS assigns that IP address
      to the network interface. Otherwise, Amazon EFS assigns a free address in
      the subnet (in the same way that the Amazon EC2 CreateNetworkInterface 
      call does when a request does not specify a primary private IP address).
      
      
    &amp;#42;  If the request provides SecurityGroups, this network interface is
      associated with those security groups. Otherwise, it belongs to the
      default security group for the subnet&#x27;s VPC.
      
      
    &amp;#42;  Assigns the description Mount target fsmt-id for file system fs-id where 
      fsmt-id is the mount target ID, and fs-id is the FileSystemId.
      
      
    &amp;#42;  Sets the requesterManaged property of the network interface to true, and
      the requesterId value to EFS.
      
      
   
   Each Amazon EFS mount target has one corresponding requestor-managed EC2
   network interface. After the network interface is created, Amazon EFS sets
   the NetworkInterfaceId field in the mount target&#x27;s description to the network
   interface ID, and the IpAddress field to its address. If network interface
   creation fails, the entire CreateMountTarget operation fails.
   
   

The CreateMountTarget call returns only after creating the network interface,
but while the mount target state is still creating. You can check the mount
target creation status by calling the DescribeFileSystems operation, which among
other things returns the mount target state.

We recommend you create a mount target in each of the Availability Zones. There
are cost considerations for using a file system in an Availability Zone through
a mount target created in another Availability Zone. For more information, see 
Amazon EFS [http://aws.amazon.com/efs/]. In addition, by always using a mount
target local to the instance&#x27;s Availability Zone, you eliminate a partial
failure scenario. If the Availability Zone in which your mount target is created
goes down, then you won&#x27;t be able to access your file system through that mount
target. 

This operation requires permissions for the following action on the file system:

 &amp;#42;   elasticfilesystem:CreateMountTarget 
   
   

This operation also requires permissions for the following Amazon EC2 actions:

 &amp;#42;   ec2:DescribeSubnets 
   
   
 &amp;#42;   ec2:DescribeNetworkInterfaces 
   
   
 &amp;#42;   ec2:CreateNetworkInterface
     *
     * @error BadRequest   
     * @error InternalServerError   
     * @error FileSystemNotFound   
     * @error IncorrectFileSystemLifeCycleState   
     * @error MountTargetConflict   
     * @error SubnetNotFound   
     * @error NoFreeAddressesInSubnet   
     * @error IpAddressInUse   
     * @error NetworkInterfaceLimitExceeded   
     * @error SecurityGroupLimitExceeded   
     * @error SecurityGroupNotFound   
     * @error UnsupportedAvailabilityZone   
     */
    createMountTarget(params: EFS.CreateMountTargetRequest, callback?: (err: EFS.BadRequest | EFS.InternalServerError | EFS.FileSystemNotFound | EFS.IncorrectFileSystemLifeCycleState | EFS.MountTargetConflict | EFS.SubnetNotFound | EFS.NoFreeAddressesInSubnet | EFS.IpAddressInUse | EFS.NetworkInterfaceLimitExceeded | EFS.SecurityGroupLimitExceeded | EFS.SecurityGroupNotFound | EFS.UnsupportedAvailabilityZone | any, data: EFS.MountTargetDescription | any) => void): Request<EFS.MountTargetDescription | any, EFS.BadRequest | EFS.InternalServerError | EFS.FileSystemNotFound | EFS.IncorrectFileSystemLifeCycleState | EFS.MountTargetConflict | EFS.SubnetNotFound | EFS.NoFreeAddressesInSubnet | EFS.IpAddressInUse | EFS.NetworkInterfaceLimitExceeded | EFS.SecurityGroupLimitExceeded | EFS.SecurityGroupNotFound | EFS.UnsupportedAvailabilityZone | any>;
    /**
     * Creates or overwrites tags associated with a file system. Each tag is a
key-value pair. If a tag key specified in the request already exists on the file
system, this operation overwrites its value with the value provided in the
request. If you add the Name tag to your file system, Amazon EFS returns it in
the response to the DescribeFileSystems operation. 

This operation requires permission for the elasticfilesystem:CreateTags action.
     *
     * @error BadRequest   
     * @error InternalServerError   
     * @error FileSystemNotFound   
     */
    createTags(params: EFS.CreateTagsRequest, callback?: (err: EFS.BadRequest | EFS.InternalServerError | EFS.FileSystemNotFound | any, data: any) => void): Request<any, EFS.BadRequest | EFS.InternalServerError | EFS.FileSystemNotFound | any>;
    /**
     * Deletes a file system, permanently severing access to its contents. Upon return,
the file system no longer exists and you can&#x27;t access any contents of the
deleted file system.

 You can&#x27;t delete a file system that is in use. That is, if the file system has
any mount targets, you must first delete them. For more information, see 
DescribeMountTargets and DeleteMountTarget. 

The DeleteFileSystem call returns while the file system state is still deleting.
You can check the file system deletion status by calling the DescribeFileSystems 
operation, which returns a list of file systems in your account. If you pass
file system ID or creation token for the deleted file system, the 
DescribeFileSystems returns a 404 FileSystemNotFound error.

This operation requires permissions for the elasticfilesystem:DeleteFileSystem 
action.
     *
     * @error BadRequest   
     * @error InternalServerError   
     * @error FileSystemNotFound   
     * @error FileSystemInUse   
     */
    deleteFileSystem(params: EFS.DeleteFileSystemRequest, callback?: (err: EFS.BadRequest | EFS.InternalServerError | EFS.FileSystemNotFound | EFS.FileSystemInUse | any, data: any) => void): Request<any, EFS.BadRequest | EFS.InternalServerError | EFS.FileSystemNotFound | EFS.FileSystemInUse | any>;
    /**
     * Deletes the specified mount target.

This operation forcibly breaks any mounts of the file system via the mount
target that is being deleted, which might disrupt instances or applications
using those mounts. To avoid applications getting cut off abruptly, you might
consider unmounting any mounts of the mount target, if feasible. The operation
also deletes the associated network interface. Uncommitted writes may be lost,
but breaking a mount target using this operation does not corrupt the file
system itself. The file system you created remains. You can mount an EC2
instance in your VPC via another mount target.

This operation requires permissions for the following action on the file system:

 &amp;#42;   elasticfilesystem:DeleteMountTarget 
   
   

The DeleteMountTarget call returns while the mount target state is still 
deleting. You can check the mount target deletion by calling the 
DescribeMountTargets operation, which returns a list of mount target
descriptions for the given file system. 

The operation also requires permissions for the following Amazon EC2 action on
the mount target&#x27;s network interface:

 &amp;#42;   ec2:DeleteNetworkInterface
     *
     * @error BadRequest   
     * @error InternalServerError   
     * @error DependencyTimeout   
     * @error MountTargetNotFound   
     */
    deleteMountTarget(params: EFS.DeleteMountTargetRequest, callback?: (err: EFS.BadRequest | EFS.InternalServerError | EFS.DependencyTimeout | EFS.MountTargetNotFound | any, data: any) => void): Request<any, EFS.BadRequest | EFS.InternalServerError | EFS.DependencyTimeout | EFS.MountTargetNotFound | any>;
    /**
     * Deletes the specified tags from a file system. If the DeleteTags request
includes a tag key that does not exist, Amazon EFS ignores it and doesn&#x27;t cause
an error. For more information about tags and related restrictions, see Tag
Restrictions
[http://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html] 
in the AWS Billing and Cost Management User Guide.

This operation requires permissions for the elasticfilesystem:DeleteTags action.
     *
     * @error BadRequest   
     * @error InternalServerError   
     * @error FileSystemNotFound   
     */
    deleteTags(params: EFS.DeleteTagsRequest, callback?: (err: EFS.BadRequest | EFS.InternalServerError | EFS.FileSystemNotFound | any, data: any) => void): Request<any, EFS.BadRequest | EFS.InternalServerError | EFS.FileSystemNotFound | any>;
    /**
     * Returns the description of a specific Amazon EFS file system if either the file
system CreationToken or the FileSystemId is provided. Otherwise, it returns
descriptions of all file systems owned by the caller&#x27;s AWS account in the AWS
Region of the endpoint that you&#x27;re calling.

 When retrieving all file system descriptions, you can optionally specify the 
MaxItems parameter to limit the number of descriptions in a response. If more
file system descriptions remain, Amazon EFS returns a NextMarker, an opaque
token, in the response. In this case, you should send a subsequent request with
the Marker request parameter set to the value of NextMarker. 

To retrieve a list of your file system descriptions, this operation is used in
an iterative process, where DescribeFileSystems is called first without the 
Marker and then the operation continues to call it with the Marker parameter set
to the value of the NextMarker from the previous response until the response has
no NextMarker. 

The implementation may return fewer than MaxItems file system descriptions while
still including a NextMarker value. 

 The order of file systems returned in the response of one DescribeFileSystems 
call and the order of file systems returned across the responses of a multi-call
iteration is unspecified. 

 This operation requires permissions for the 
elasticfilesystem:DescribeFileSystems action.
     *
     * @error BadRequest   
     * @error InternalServerError   
     * @error FileSystemNotFound   
     */
    describeFileSystems(params: EFS.DescribeFileSystemsRequest, callback?: (err: EFS.BadRequest | EFS.InternalServerError | EFS.FileSystemNotFound | any, data: EFS.DescribeFileSystemsResponse | any) => void): Request<EFS.DescribeFileSystemsResponse | any, EFS.BadRequest | EFS.InternalServerError | EFS.FileSystemNotFound | any>;
    /**
     * Returns the security groups currently in effect for a mount target. This
operation requires that the network interface of the mount target has been
created and the lifecycle state of the mount target is not deleted.

This operation requires permissions for the following actions:

 &amp;#42;   elasticfilesystem:DescribeMountTargetSecurityGroups action on the mount
   target&#x27;s file system. 
   
   
 &amp;#42;   ec2:DescribeNetworkInterfaceAttribute action on the mount target&#x27;s network
   interface.
     *
     * @error BadRequest   
     * @error InternalServerError   
     * @error MountTargetNotFound   
     * @error IncorrectMountTargetState   
     */
    describeMountTargetSecurityGroups(params: EFS.DescribeMountTargetSecurityGroupsRequest, callback?: (err: EFS.BadRequest | EFS.InternalServerError | EFS.MountTargetNotFound | EFS.IncorrectMountTargetState | any, data: EFS.DescribeMountTargetSecurityGroupsResponse | any) => void): Request<EFS.DescribeMountTargetSecurityGroupsResponse | any, EFS.BadRequest | EFS.InternalServerError | EFS.MountTargetNotFound | EFS.IncorrectMountTargetState | any>;
    /**
     * Returns the descriptions of all the current mount targets, or a specific mount
target, for a file system. When requesting all of the current mount targets, the
order of mount targets returned in the response is unspecified.

This operation requires permissions for the 
elasticfilesystem:DescribeMountTargets action, on either the file system ID that
you specify in FileSystemId, or on the file system of the mount target that you
specify in MountTargetId.
     *
     * @error BadRequest   
     * @error InternalServerError   
     * @error FileSystemNotFound   
     * @error MountTargetNotFound   
     */
    describeMountTargets(params: EFS.DescribeMountTargetsRequest, callback?: (err: EFS.BadRequest | EFS.InternalServerError | EFS.FileSystemNotFound | EFS.MountTargetNotFound | any, data: EFS.DescribeMountTargetsResponse | any) => void): Request<EFS.DescribeMountTargetsResponse | any, EFS.BadRequest | EFS.InternalServerError | EFS.FileSystemNotFound | EFS.MountTargetNotFound | any>;
    /**
     * Returns the tags associated with a file system. The order of tags returned in
the response of one DescribeTags call and the order of tags returned across the
responses of a multi-call iteration (when using pagination) is unspecified. 

 This operation requires permissions for the elasticfilesystem:DescribeTags 
action.
     *
     * @error BadRequest   
     * @error InternalServerError   
     * @error FileSystemNotFound   
     */
    describeTags(params: EFS.DescribeTagsRequest, callback?: (err: EFS.BadRequest | EFS.InternalServerError | EFS.FileSystemNotFound | any, data: EFS.DescribeTagsResponse | any) => void): Request<EFS.DescribeTagsResponse | any, EFS.BadRequest | EFS.InternalServerError | EFS.FileSystemNotFound | any>;
    /**
     * Modifies the set of security groups in effect for a mount target.

When you create a mount target, Amazon EFS also creates a new network interface.
For more information, see CreateMountTarget. This operation replaces the
security groups in effect for the network interface associated with a mount
target, with the SecurityGroups provided in the request. This operation requires
that the network interface of the mount target has been created and the
lifecycle state of the mount target is not deleted. 

The operation requires permissions for the following actions:

 &amp;#42;   elasticfilesystem:ModifyMountTargetSecurityGroups action on the mount
   target&#x27;s file system. 
   
   
 &amp;#42;   ec2:ModifyNetworkInterfaceAttribute action on the mount target&#x27;s network
   interface.
     *
     * @error BadRequest   
     * @error InternalServerError   
     * @error MountTargetNotFound   
     * @error IncorrectMountTargetState   
     * @error SecurityGroupLimitExceeded   
     * @error SecurityGroupNotFound   
     */
    modifyMountTargetSecurityGroups(params: EFS.ModifyMountTargetSecurityGroupsRequest, callback?: (err: EFS.BadRequest | EFS.InternalServerError | EFS.MountTargetNotFound | EFS.IncorrectMountTargetState | EFS.SecurityGroupLimitExceeded | EFS.SecurityGroupNotFound | any, data: any) => void): Request<any, EFS.BadRequest | EFS.InternalServerError | EFS.MountTargetNotFound | EFS.IncorrectMountTargetState | EFS.SecurityGroupLimitExceeded | EFS.SecurityGroupNotFound | any>;

  }

  export module EFS {

    export type AwsAccountId = string;

    export type CreationToken = string;

    export type ErrorCode = string;

    export type ErrorMessage = string;

    export type FileSystemDescriptions = FileSystemDescription[];

    export type FileSystemId = string;

    export type FileSystemSizeValue = number;

    export type IpAddress = string;

    export type LifeCycleState = string;

    export type Marker = string;

    export type MaxItems = number;

    export type MountTargetCount = number;

    export type MountTargetDescriptions = MountTargetDescription[];

    export type MountTargetId = string;

    export type NetworkInterfaceId = string;

    export type PerformanceMode = string;

    export type SecurityGroup = string;

    export type SecurityGroups = SecurityGroup[];

    export type SubnetId = string;

    export type TagKey = string;

    export type TagKeys = TagKey[];

    export type TagValue = string;

    export type Tags = Tag[];

    export type Timestamp = number;

    export interface BadRequest {
      ErrorCode: ErrorCode;
      Message?: ErrorMessage;
    }
    export interface CreateFileSystemRequest {
      /** String of up to 64 ASCII characters. Amazon EFS uses this to ensure idempotent
creation. **/
      CreationToken: CreationToken;
      /** The PerformanceMode of the file system. We recommend generalPurpose performance
mode for most file systems. File systems using the maxIO performance mode can
scale to higher levels of aggregate throughput and operations per second with a
tradeoff of slightly higher latencies for most file operations. This can&#x27;t be
changed after the file system has been created. **/
      PerformanceMode?: PerformanceMode;
    }
    export interface CreateMountTargetRequest {
      /** ID of the file system for which to create the mount target. **/
      FileSystemId: FileSystemId;
      /** ID of the subnet to add the mount target in. **/
      SubnetId: SubnetId;
      /** Valid IPv4 address within the address range of the specified subnet. **/
      IpAddress?: IpAddress;
      /** Up to five VPC security group IDs, of the form sg-xxxxxxxx. These must be for
the same VPC as subnet specified. **/
      SecurityGroups?: SecurityGroups;
    }
    export interface CreateTagsRequest {
      /** ID of the file system whose tags you want to modify (String). This operation
modifies the tags only, not the file system. **/
      FileSystemId: FileSystemId;
      /** Array of Tag objects to add. Each Tag object is a key-value pair. **/
      Tags: Tags;
    }
    export interface DeleteFileSystemRequest {
      /** ID of the file system you want to delete. **/
      FileSystemId: FileSystemId;
    }
    export interface DeleteMountTargetRequest {
      /** ID of the mount target to delete (String). **/
      MountTargetId: MountTargetId;
    }
    export interface DeleteTagsRequest {
      /** ID of the file system whose tags you want to delete (String). **/
      FileSystemId: FileSystemId;
      /** List of tag keys to delete. **/
      TagKeys: TagKeys;
    }
    export interface DependencyTimeout {
      ErrorCode: ErrorCode;
      Message?: ErrorMessage;
    }
    export interface DescribeFileSystemsRequest {
      /** (Optional) Specifies the maximum number of file systems to return in the
response (integer). This parameter value must be greater than 0. The number of
items that Amazon EFS returns is the minimum of the MaxItems parameter specified
in the request and the service&#x27;s internal maximum number of items per page. **/
      MaxItems?: MaxItems;
      /** (Optional) Opaque pagination token returned from a previous DescribeFileSystems 
operation (String). If present, specifies to continue the list from where the
returning call had left off. **/
      Marker?: Marker;
      /** (Optional) Restricts the list to the file system with this creation token
(String). You specify a creation token when you create an Amazon EFS file
system. **/
      CreationToken?: CreationToken;
      /** (Optional) ID of the file system whose description you want to retrieve
(String). **/
      FileSystemId?: FileSystemId;
    }
    export interface DescribeFileSystemsResponse {
      /** Present if provided by caller in the request (String). **/
      Marker?: Marker;
      /** Array of file system descriptions. **/
      FileSystems?: FileSystemDescriptions;
      /** Present if there are more file systems than returned in the response (String).
You can use the NextMarker in the subsequent request to fetch the descriptions. **/
      NextMarker?: Marker;
    }
    export interface DescribeMountTargetSecurityGroupsRequest {
      /** ID of the mount target whose security groups you want to retrieve. **/
      MountTargetId: MountTargetId;
    }
    export interface DescribeMountTargetSecurityGroupsResponse {
      /** Array of security groups. **/
      SecurityGroups: SecurityGroups;
    }
    export interface DescribeMountTargetsRequest {
      /** (Optional) Maximum number of mount targets to return in the response. It must be
an integer with a value greater than zero. **/
      MaxItems?: MaxItems;
      /** (Optional) Opaque pagination token returned from a previous DescribeMountTargets 
operation (String). If present, it specifies to continue the list from where the
previous returning call left off. **/
      Marker?: Marker;
      /** (Optional) ID of the file system whose mount targets you want to list (String).
It must be included in your request if MountTargetId is not included. **/
      FileSystemId?: FileSystemId;
      /** (Optional) ID of the mount target that you want to have described (String). It
must be included in your request if FileSystemId is not included. **/
      MountTargetId?: MountTargetId;
    }
    export interface DescribeMountTargetsResponse {
      /** If the request included the Marker, the response returns that value in this
field. **/
      Marker?: Marker;
      /** Returns the file system&#x27;s mount targets as an array of MountTargetDescription 
objects. **/
      MountTargets?: MountTargetDescriptions;
      /** If a value is present, there are more mount targets to return. In a subsequent
request, you can provide Marker in your request with this value to retrieve the
next set of mount targets. **/
      NextMarker?: Marker;
    }
    export interface DescribeTagsRequest {
      /** (Optional) Maximum number of file system tags to return in the response. It must
be an integer with a value greater than zero. **/
      MaxItems?: MaxItems;
      /** (Optional) Opaque pagination token returned from a previous DescribeTags 
operation (String). If present, it specifies to continue the list from where the
previous call left off. **/
      Marker?: Marker;
      /** ID of the file system whose tag set you want to retrieve. **/
      FileSystemId: FileSystemId;
    }
    export interface DescribeTagsResponse {
      /** If the request included a Marker, the response returns that value in this field. **/
      Marker?: Marker;
      /** Returns tags associated with the file system as an array of Tag objects. **/
      Tags: Tags;
      /** If a value is present, there are more tags to return. In a subsequent request,
you can provide the value of NextMarker as the value of the Marker parameter in
your next request to retrieve the next set of tags. **/
      NextMarker?: Marker;
    }
    export interface FileSystemAlreadyExists {
      ErrorCode: ErrorCode;
      Message?: ErrorMessage;
      FileSystemId: FileSystemId;
    }
    export interface FileSystemDescription {
      /** AWS account that created the file system. If the file system was created by an
IAM user, the parent account to which the user belongs is the owner. **/
      OwnerId: AwsAccountId;
      /** Opaque string specified in the request. **/
      CreationToken: CreationToken;
      /** ID of the file system, assigned by Amazon EFS. **/
      FileSystemId: FileSystemId;
      /** Time that the file system was created, in seconds (since 1970-01-01T00:00:00Z). **/
      CreationTime: Timestamp;
      /** Lifecycle phase of the file system. **/
      LifeCycleState: LifeCycleState;
      /** You can add tags to a file system, including a Name tag. For more information,
see CreateTags. If the file system has a Name tag, Amazon EFS returns the value
in this field. **/
      Name?: TagValue;
      /** Current number of mount targets that the file system has. For more information,
see CreateMountTarget. **/
      NumberOfMountTargets: MountTargetCount;
      /** Latest known metered size (in bytes) of data stored in the file system, in
bytes, in its Value field, and the time at which that size was determined in its 
Timestamp field. The Timestamp value is the integer number of seconds since
1970-01-01T00:00:00Z. Note that the value does not represent the size of a
consistent snapshot of the file system, but it is eventually consistent when
there are no writes to the file system. That is, the value will represent actual
size only if the file system is not modified for a period longer than a couple
of hours. Otherwise, the value is not the exact size the file system was at any
instant in time. **/
      SizeInBytes: FileSystemSize;
      /** The PerformanceMode of the file system. **/
      PerformanceMode: PerformanceMode;
    }
    export interface FileSystemInUse {
      ErrorCode: ErrorCode;
      Message?: ErrorMessage;
    }
    export interface FileSystemLimitExceeded {
      ErrorCode: ErrorCode;
      Message?: ErrorMessage;
    }
    export interface FileSystemNotFound {
      ErrorCode: ErrorCode;
      Message?: ErrorMessage;
    }
    export interface FileSystemSize {
      /** Latest known metered size (in bytes) of data stored in the file system. **/
      Value: FileSystemSizeValue;
      /** Time at which the size of data, returned in the Value field, was determined. The
value is the integer number of seconds since 1970-01-01T00:00:00Z. **/
      Timestamp?: Timestamp;
    }
    export interface IncorrectFileSystemLifeCycleState {
      ErrorCode: ErrorCode;
      Message?: ErrorMessage;
    }
    export interface IncorrectMountTargetState {
      ErrorCode: ErrorCode;
      Message?: ErrorMessage;
    }
    export interface InternalServerError {
      ErrorCode: ErrorCode;
      Message?: ErrorMessage;
    }
    export interface IpAddressInUse {
      ErrorCode: ErrorCode;
      Message?: ErrorMessage;
    }
    export interface ModifyMountTargetSecurityGroupsRequest {
      /** ID of the mount target whose security groups you want to modify. **/
      MountTargetId: MountTargetId;
      /** Array of up to five VPC security group IDs. **/
      SecurityGroups?: SecurityGroups;
    }
    export interface MountTargetConflict {
      ErrorCode: ErrorCode;
      Message?: ErrorMessage;
    }
    export interface MountTargetDescription {
      /** AWS account ID that owns the resource. **/
      OwnerId?: AwsAccountId;
      /** System-assigned mount target ID. **/
      MountTargetId: MountTargetId;
      /** ID of the file system for which the mount target is intended. **/
      FileSystemId: FileSystemId;
      /** ID of the mount target&#x27;s subnet. **/
      SubnetId: SubnetId;
      /** Lifecycle state of the mount target. **/
      LifeCycleState: LifeCycleState;
      /** Address at which the file system may be mounted via the mount target. **/
      IpAddress?: IpAddress;
      /** ID of the network interface that Amazon EFS created when it created the mount
target. **/
      NetworkInterfaceId?: NetworkInterfaceId;
    }
    export interface MountTargetNotFound {
      ErrorCode: ErrorCode;
      Message?: ErrorMessage;
    }
    export interface NetworkInterfaceLimitExceeded {
      ErrorCode: ErrorCode;
      Message?: ErrorMessage;
    }
    export interface NoFreeAddressesInSubnet {
      ErrorCode: ErrorCode;
      Message?: ErrorMessage;
    }
    export interface SecurityGroupLimitExceeded {
      ErrorCode: ErrorCode;
      Message?: ErrorMessage;
    }
    export interface SecurityGroupNotFound {
      ErrorCode: ErrorCode;
      Message?: ErrorMessage;
    }
    export interface SubnetNotFound {
      ErrorCode: ErrorCode;
      Message?: ErrorMessage;
    }
    export interface Tag {
      /** Tag key (String). The key can&#x27;t start with aws:. **/
      Key: TagKey;
      /** Value of the tag key. **/
      Value: TagValue;
    }
    export interface UnsupportedAvailabilityZone {
      ErrorCode: ErrorCode;
      Message?: ErrorMessage;
    }
  }
}
