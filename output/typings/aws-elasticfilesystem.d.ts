// Type definitions for aws-sdk - Amazon Elastic File System
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

///<reference path="./aws-sdk-common.d.ts" />

declare module "aws-sdk" {

    /*
     * apiVersion: 2015-02-01
     * endpointPrefix: elasticfilesystem
     * serviceAbbreviation: EFS
     * signatureVersion: v4
     * protocol: rest-json
     */
    export class EFS extends Service {
      constructor(options?: any);
      endpoint: Endpoint;
      createFileSystem(params: EFS.CreateFileSystemRequest, callback?: (err: EFS.BadRequest|EFS.InternalServerError|EFS.FileSystemAlreadyExists|EFS.FileSystemLimitExceeded|any, data: EFS.FileSystemDescription|any) => void): Request;
      createMountTarget(params: EFS.CreateMountTargetRequest, callback?: (err: EFS.BadRequest|EFS.InternalServerError|EFS.FileSystemNotFound|EFS.IncorrectFileSystemLifeCycleState|EFS.MountTargetConflict|EFS.SubnetNotFound|EFS.NoFreeAddressesInSubnet|EFS.IpAddressInUse|EFS.NetworkInterfaceLimitExceeded|EFS.SecurityGroupLimitExceeded|EFS.SecurityGroupNotFound|EFS.UnsupportedAvailabilityZone|any, data: EFS.MountTargetDescription|any) => void): Request;
      createTags(params: EFS.CreateTagsRequest, callback?: (err: EFS.BadRequest|EFS.InternalServerError|EFS.FileSystemNotFound|any, data: any) => void): Request;
      deleteFileSystem(params: EFS.DeleteFileSystemRequest, callback?: (err: EFS.BadRequest|EFS.InternalServerError|EFS.FileSystemNotFound|EFS.FileSystemInUse|any, data: any) => void): Request;
      deleteMountTarget(params: EFS.DeleteMountTargetRequest, callback?: (err: EFS.BadRequest|EFS.InternalServerError|EFS.DependencyTimeout|EFS.MountTargetNotFound|any, data: any) => void): Request;
      deleteTags(params: EFS.DeleteTagsRequest, callback?: (err: EFS.BadRequest|EFS.InternalServerError|EFS.FileSystemNotFound|any, data: any) => void): Request;
      describeFileSystems(params: EFS.DescribeFileSystemsRequest, callback?: (err: EFS.BadRequest|EFS.InternalServerError|EFS.FileSystemNotFound|any, data: EFS.DescribeFileSystemsResponse|any) => void): Request;
      describeMountTargetSecurityGroups(params: EFS.DescribeMountTargetSecurityGroupsRequest, callback?: (err: EFS.BadRequest|EFS.InternalServerError|EFS.MountTargetNotFound|EFS.IncorrectMountTargetState|any, data: EFS.DescribeMountTargetSecurityGroupsResponse|any) => void): Request;
      describeMountTargets(params: EFS.DescribeMountTargetsRequest, callback?: (err: EFS.BadRequest|EFS.InternalServerError|EFS.FileSystemNotFound|EFS.MountTargetNotFound|any, data: EFS.DescribeMountTargetsResponse|any) => void): Request;
      describeTags(params: EFS.DescribeTagsRequest, callback?: (err: EFS.BadRequest|EFS.InternalServerError|EFS.FileSystemNotFound|any, data: EFS.DescribeTagsResponse|any) => void): Request;
      modifyMountTargetSecurityGroups(params: EFS.ModifyMountTargetSecurityGroupsRequest, callback?: (err: EFS.BadRequest|EFS.InternalServerError|EFS.MountTargetNotFound|EFS.IncorrectMountTargetState|EFS.SecurityGroupLimitExceeded|EFS.SecurityGroupNotFound|any, data: any) => void): Request;

    }

    export module EFS {
        export type AwsAccountId = string;
        export type CreationToken = string;    // max: 64, min: 1
        export type ErrorCode = string;    // min: 1
        export type ErrorMessage = string;
        export type FileSystemDescriptions = FileSystemDescription[];
        export type FileSystemId = string;
        export type FileSystemSizeValue = number;
        export type IpAddress = string;
        export type LifeCycleState = string;
        export type Marker = string;
        export type MaxItems = number;    // min: 1
        export type MountTargetCount = number;
        export type MountTargetDescriptions = MountTargetDescription[];
        export type MountTargetId = string;
        export type NetworkInterfaceId = string;
        export type SecurityGroup = string;
        export type SecurityGroups = SecurityGroup[];    // max: 5
        export type SubnetId = string;
        export type TagKey = string;    // max: 128, min: 1
        export type TagKeys = TagKey[];
        export type TagValue = string;    // max: 256
        export type Tags = Tag[];
        export type Timestamp = number;

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
            FileSystemId?: FileSystemId;
            MountTargetId?: MountTargetId;
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
            MountTargetId: MountTargetId;
            SecurityGroups?: SecurityGroups;
        }
        export interface MountTargetConflict {
            ErrorCode: ErrorCode;
            Message?: ErrorMessage;
        }
        export interface MountTargetDescription {
            OwnerId?: AwsAccountId;
            MountTargetId: MountTargetId;
            FileSystemId: FileSystemId;
            SubnetId: SubnetId;
            LifeCycleState: LifeCycleState;
            IpAddress?: IpAddress;
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
            Key: TagKey;
            Value: TagValue;
        }
        export interface UnsupportedAvailabilityZone {
            ErrorCode: ErrorCode;
            Message?: ErrorMessage;
        }

    }
}
