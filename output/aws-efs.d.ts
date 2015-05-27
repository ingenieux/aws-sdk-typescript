// DO NOT EDIT!
//
declare module "aws-sdk" {
    export class EFS {
      constructor(options?: any);
      createFileSystem(params: CreateFileSystemRequest, callback: (err: BadRequest|InternalServerError|FileSystemAlreadyExists|FileSystemLimitExceeded|any, data: FileSystemDescription|any) => void): void;
      createMountTarget(params: CreateMountTargetRequest, callback: (err: BadRequest|InternalServerError|FileSystemNotFound|IncorrectFileSystemLifeCycleState|MountTargetConflict|SubnetNotFound|NoFreeAddressesInSubnet|IpAddressInUse|NetworkInterfaceLimitExceeded|SecurityGroupLimitExceeded|SecurityGroupNotFound|UnsupportedAvailabilityZone|any, data: MountTargetDescription|any) => void): void;
      createTags(params: CreateTagsRequest, callback: (err: BadRequest|InternalServerError|FileSystemNotFound|any, data: any) => void): void;
      deleteFileSystem(params: DeleteFileSystemRequest, callback: (err: BadRequest|InternalServerError|FileSystemNotFound|FileSystemInUse|any, data: any) => void): void;
      deleteMountTarget(params: DeleteMountTargetRequest, callback: (err: BadRequest|InternalServerError|DependencyTimeout|MountTargetNotFound|any, data: any) => void): void;
      deleteTags(params: DeleteTagsRequest, callback: (err: BadRequest|InternalServerError|FileSystemNotFound|any, data: any) => void): void;
      describeFileSystems(params: DescribeFileSystemsRequest, callback: (err: BadRequest|InternalServerError|FileSystemNotFound|any, data: DescribeFileSystemsResponse|any) => void): void;
      describeMountTargetSecurityGroups(params: DescribeMountTargetSecurityGroupsRequest, callback: (err: BadRequest|InternalServerError|MountTargetNotFound|IncorrectMountTargetState|any, data: DescribeMountTargetSecurityGroupsResponse|any) => void): void;
      describeMountTargets(params: DescribeMountTargetsRequest, callback: (err: BadRequest|InternalServerError|FileSystemNotFound|any, data: DescribeMountTargetsResponse|any) => void): void;
      describeTags(params: DescribeTagsRequest, callback: (err: BadRequest|InternalServerError|FileSystemNotFound|any, data: DescribeTagsResponse|any) => void): void;
      modifyMountTargetSecurityGroups(params: ModifyMountTargetSecurityGroupsRequest, callback: (err: BadRequest|InternalServerError|MountTargetNotFound|IncorrectMountTargetState|SecurityGroupLimitExceeded|SecurityGroupNotFound|any, data: any) => void): void;
    }

    export type AwsAccountId = string; // pattern: "[0-9]{12}"

    export interface BadRequest {
      ErrorCode: ErrorCode;
      Message?: ErrorMessage;
    }


    export interface CreateFileSystemRequest {
      CreationToken: CreationToken;
    }


    export interface CreateMountTargetRequest {
      FileSystemId: FileSystemId;
      SubnetId: SubnetId;
      IpAddress?: IpAddress;
      SecurityGroups?: SecurityGroups;
    }


    export interface CreateTagsRequest {
      FileSystemId: FileSystemId;
      Tags: Tags;
    }


    export type CreationToken = string;

    export interface DeleteFileSystemRequest {
      FileSystemId: FileSystemId;
    }


    export interface DeleteMountTargetRequest {
      MountTargetId: MountTargetId;
    }


    export interface DeleteTagsRequest {
      FileSystemId: FileSystemId;
      TagKeys: TagKeys;
    }


    export interface DependencyTimeout {
      ErrorCode: ErrorCode;
      Message?: ErrorMessage;
    }


    export interface DescribeFileSystemsRequest {
      MaxItems?: MaxItems;
      Marker?: Marker;
      CreationToken?: CreationToken;
      FileSystemId?: FileSystemId;
    }


    export interface DescribeFileSystemsResponse {
      Marker?: Marker;
      FileSystems?: FileSystemDescriptions;
      NextMarker?: Marker;
    }


    export interface DescribeMountTargetSecurityGroupsRequest {
      MountTargetId: MountTargetId;
    }


    export interface DescribeMountTargetSecurityGroupsResponse {
      SecurityGroups: SecurityGroups;
    }


    export interface DescribeMountTargetsRequest {
      MaxItems?: MaxItems;
      Marker?: Marker;
      FileSystemId: FileSystemId;
    }


    export interface DescribeMountTargetsResponse {
      Marker?: Marker;
      MountTargets?: MountTargetDescriptions;
      NextMarker?: Marker;
    }


    export interface DescribeTagsRequest {
      MaxItems?: MaxItems;
      Marker?: Marker;
      FileSystemId: FileSystemId;
    }


    export interface DescribeTagsResponse {
      Marker?: Marker;
      Tags: Tags;
      NextMarker?: Marker;
    }


    export type ErrorCode = string;

    export type ErrorMessage = string;

    export interface FileSystemAlreadyExists {
      ErrorCode: ErrorCode;
      Message?: ErrorMessage;
      FileSystemId: FileSystemId;
    }


    export interface FileSystemDescription {
      OwnerId: AwsAccountId;
      CreationToken: CreationToken;
      FileSystemId: FileSystemId;
      CreationTime: Timestamp;
      LifeCycleState: LifeCycleState;
      Name?: TagValue;
      NumberOfMountTargets: MountTargetCount;
      SizeInBytes: FileSystemSize;
    }


    export type FileSystemDescriptions = Array<FileSystemDescription>;

    export type FileSystemId = string; // pattern: "fs-[0-9a-f]{8}"

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
      Value: FileSystemSizeValue;
      Timestamp?: Timestamp;
    }


    export type FileSystemSizeValue = number;

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


    export type IpAddress = string; // pattern: "[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}"

    export interface IpAddressInUse {
      ErrorCode: ErrorCode;
      Message?: ErrorMessage;
    }


    export type LifeCycleState = string;

    export type Marker = string;

    export type MaxItems = number;

    export interface ModifyMountTargetSecurityGroupsRequest {
      MountTargetId: MountTargetId;
      SecurityGroups?: SecurityGroups;
    }


    export interface MountTargetConflict {
      ErrorCode: ErrorCode;
      Message?: ErrorMessage;
    }


    export type MountTargetCount = number;

    export interface MountTargetDescription {
      OwnerId?: AwsAccountId;
      MountTargetId: MountTargetId;
      FileSystemId: FileSystemId;
      SubnetId: SubnetId;
      LifeCycleState: LifeCycleState;
      IpAddress?: IpAddress;
      NetworkInterfaceId?: NetworkInterfaceId;
    }


    export type MountTargetDescriptions = Array<MountTargetDescription>;

    export type MountTargetId = string; // pattern: "fsmt-[0-9a-f]{8}"

    export interface MountTargetNotFound {
      ErrorCode: ErrorCode;
      Message?: ErrorMessage;
    }


    export type NetworkInterfaceId = string; // pattern: "eni-[0-9a-f]{8}"

    export interface NetworkInterfaceLimitExceeded {
      ErrorCode: ErrorCode;
      Message?: ErrorMessage;
    }


    export interface NoFreeAddressesInSubnet {
      ErrorCode: ErrorCode;
      Message?: ErrorMessage;
    }


    export type SecurityGroup = string; // pattern: "sg-[0-9a-f]{8}"

    export interface SecurityGroupLimitExceeded {
      ErrorCode: ErrorCode;
      Message?: ErrorMessage;
    }


    export interface SecurityGroupNotFound {
      ErrorCode: ErrorCode;
      Message?: ErrorMessage;
    }


    export type SecurityGroups = Array<SecurityGroup>; // max: 5

    export type SubnetId = string; // pattern: "subnet-[0-9a-f]{8}"

    export interface SubnetNotFound {
      ErrorCode: ErrorCode;
      Message?: ErrorMessage;
    }


    export interface Tag {
      Key: TagKey;
      Value: TagValue;
    }


    export type TagKey = string; // pattern: "^([\p{L}\p{Z}\p{N}_.:/=+\-%@]*)$"

    export type TagKeys = Array<TagKey>;

    export type TagValue = string; // pattern: "^([\p{L}\p{Z}\p{N}_.:/=+\-%@]*)$"

    export type Tags = Array<Tag>;

    export type Timestamp = number;

    export interface UnsupportedAvailabilityZone {
      ErrorCode: ErrorCode;
      Message?: ErrorMessage;
    }


}
