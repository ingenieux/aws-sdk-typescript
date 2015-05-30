// DO NOT EDIT!
//
declare module "aws-sdk" {
    export class EFS {
      constructor(options?: any);
      createFileSystem(params: EFSCreateFileSystemRequest, callback: (err: EFSBadRequest|EFSInternalServerError|EFSFileSystemAlreadyExists|EFSFileSystemLimitExceeded|any, data: EFSFileSystemDescription|any) => void): void;
      createMountTarget(params: EFSCreateMountTargetRequest, callback: (err: EFSBadRequest|EFSInternalServerError|EFSFileSystemNotFound|EFSIncorrectFileSystemLifeCycleState|EFSMountTargetConflict|EFSSubnetNotFound|EFSNoFreeAddressesInSubnet|EFSIpAddressInUse|EFSNetworkInterfaceLimitExceeded|EFSSecurityGroupLimitExceeded|EFSSecurityGroupNotFound|EFSUnsupportedAvailabilityZone|any, data: EFSMountTargetDescription|any) => void): void;
      createTags(params: EFSCreateTagsRequest, callback: (err: EFSBadRequest|EFSInternalServerError|EFSFileSystemNotFound|any, data: any) => void): void;
      deleteFileSystem(params: EFSDeleteFileSystemRequest, callback: (err: EFSBadRequest|EFSInternalServerError|EFSFileSystemNotFound|EFSFileSystemInUse|any, data: any) => void): void;
      deleteMountTarget(params: EFSDeleteMountTargetRequest, callback: (err: EFSBadRequest|EFSInternalServerError|EFSDependencyTimeout|EFSMountTargetNotFound|any, data: any) => void): void;
      deleteTags(params: EFSDeleteTagsRequest, callback: (err: EFSBadRequest|EFSInternalServerError|EFSFileSystemNotFound|any, data: any) => void): void;
      describeFileSystems(params: EFSDescribeFileSystemsRequest, callback: (err: EFSBadRequest|EFSInternalServerError|EFSFileSystemNotFound|any, data: EFSDescribeFileSystemsResponse|any) => void): void;
      describeMountTargetSecurityGroups(params: EFSDescribeMountTargetSecurityGroupsRequest, callback: (err: EFSBadRequest|EFSInternalServerError|EFSMountTargetNotFound|EFSIncorrectMountTargetState|any, data: EFSDescribeMountTargetSecurityGroupsResponse|any) => void): void;
      describeMountTargets(params: EFSDescribeMountTargetsRequest, callback: (err: EFSBadRequest|EFSInternalServerError|EFSFileSystemNotFound|any, data: EFSDescribeMountTargetsResponse|any) => void): void;
      describeTags(params: EFSDescribeTagsRequest, callback: (err: EFSBadRequest|EFSInternalServerError|EFSFileSystemNotFound|any, data: EFSDescribeTagsResponse|any) => void): void;
      modifyMountTargetSecurityGroups(params: EFSModifyMountTargetSecurityGroupsRequest, callback: (err: EFSBadRequest|EFSInternalServerError|EFSMountTargetNotFound|EFSIncorrectMountTargetState|EFSSecurityGroupLimitExceeded|EFSSecurityGroupNotFound|any, data: any) => void): void;
    }

    export type EFSAwsAccountId = string; // pattern: "[0-9]{12}"
    export interface EFSBadRequest {
        ErrorCode: EFSErrorCode;
        Message?: EFSErrorMessage;
    }

    export interface EFSCreateFileSystemRequest {
        CreationToken: EFSCreationToken;
    }

    export interface EFSCreateMountTargetRequest {
        FileSystemId: EFSFileSystemId;
        SubnetId: EFSSubnetId;
        IpAddress?: EFSIpAddress;
        SecurityGroups?: EFSSecurityGroups;
    }

    export interface EFSCreateTagsRequest {
        FileSystemId: EFSFileSystemId;
        Tags: EFSTags;
    }

    export type EFSCreationToken = string;
    export interface EFSDeleteFileSystemRequest {
        FileSystemId: EFSFileSystemId;
    }

    export interface EFSDeleteMountTargetRequest {
        MountTargetId: EFSMountTargetId;
    }

    export interface EFSDeleteTagsRequest {
        FileSystemId: EFSFileSystemId;
        TagKeys: EFSTagKeys;
    }

    export interface EFSDependencyTimeout {
        ErrorCode: EFSErrorCode;
        Message?: EFSErrorMessage;
    }

    export interface EFSDescribeFileSystemsRequest {
        MaxItems?: EFSMaxItems;
        Marker?: EFSMarker;
        CreationToken?: EFSCreationToken;
        FileSystemId?: EFSFileSystemId;
    }

    export interface EFSDescribeFileSystemsResponse {
        Marker?: EFSMarker;
        FileSystems?: EFSFileSystemDescriptions;
        NextMarker?: EFSMarker;
    }

    export interface EFSDescribeMountTargetSecurityGroupsRequest {
        MountTargetId: EFSMountTargetId;
    }

    export interface EFSDescribeMountTargetSecurityGroupsResponse {
        SecurityGroups: EFSSecurityGroups;
    }

    export interface EFSDescribeMountTargetsRequest {
        MaxItems?: EFSMaxItems;
        Marker?: EFSMarker;
        FileSystemId: EFSFileSystemId;
    }

    export interface EFSDescribeMountTargetsResponse {
        Marker?: EFSMarker;
        MountTargets?: EFSMountTargetDescriptions;
        NextMarker?: EFSMarker;
    }

    export interface EFSDescribeTagsRequest {
        MaxItems?: EFSMaxItems;
        Marker?: EFSMarker;
        FileSystemId: EFSFileSystemId;
    }

    export interface EFSDescribeTagsResponse {
        Marker?: EFSMarker;
        Tags: EFSTags;
        NextMarker?: EFSMarker;
    }

    export type EFSErrorCode = string;
    export type EFSErrorMessage = string;
    export interface EFSFileSystemAlreadyExists {
        ErrorCode: EFSErrorCode;
        Message?: EFSErrorMessage;
        FileSystemId: EFSFileSystemId;
    }

    export interface EFSFileSystemDescription {
        OwnerId: EFSAwsAccountId;
        CreationToken: EFSCreationToken;
        FileSystemId: EFSFileSystemId;
        CreationTime: EFSTimestamp;
        LifeCycleState: EFSLifeCycleState;
        Name?: EFSTagValue;
        NumberOfMountTargets: EFSMountTargetCount;
        SizeInBytes: EFSFileSystemSize;
    }

    export type EFSFileSystemDescriptions = Array<EFSFileSystemDescription>;
    export type EFSFileSystemId = string; // pattern: "fs-[0-9a-f]{8}"
    export interface EFSFileSystemInUse {
        ErrorCode: EFSErrorCode;
        Message?: EFSErrorMessage;
    }

    export interface EFSFileSystemLimitExceeded {
        ErrorCode: EFSErrorCode;
        Message?: EFSErrorMessage;
    }

    export interface EFSFileSystemNotFound {
        ErrorCode: EFSErrorCode;
        Message?: EFSErrorMessage;
    }

    export interface EFSFileSystemSize {
        Value: EFSFileSystemSizeValue;
        Timestamp?: EFSTimestamp;
    }

    export type EFSFileSystemSizeValue = number;
    export interface EFSIncorrectFileSystemLifeCycleState {
        ErrorCode: EFSErrorCode;
        Message?: EFSErrorMessage;
    }

    export interface EFSIncorrectMountTargetState {
        ErrorCode: EFSErrorCode;
        Message?: EFSErrorMessage;
    }

    export interface EFSInternalServerError {
        ErrorCode: EFSErrorCode;
        Message?: EFSErrorMessage;
    }

    export type EFSIpAddress = string; // pattern: "[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}"
    export interface EFSIpAddressInUse {
        ErrorCode: EFSErrorCode;
        Message?: EFSErrorMessage;
    }

    export type EFSLifeCycleState = string;
    export type EFSMarker = string;
    export type EFSMaxItems = number;
    export interface EFSModifyMountTargetSecurityGroupsRequest {
        MountTargetId: EFSMountTargetId;
        SecurityGroups?: EFSSecurityGroups;
    }

    export interface EFSMountTargetConflict {
        ErrorCode: EFSErrorCode;
        Message?: EFSErrorMessage;
    }

    export type EFSMountTargetCount = number;
    export interface EFSMountTargetDescription {
        OwnerId?: EFSAwsAccountId;
        MountTargetId: EFSMountTargetId;
        FileSystemId: EFSFileSystemId;
        SubnetId: EFSSubnetId;
        LifeCycleState: EFSLifeCycleState;
        IpAddress?: EFSIpAddress;
        NetworkInterfaceId?: EFSNetworkInterfaceId;
    }

    export type EFSMountTargetDescriptions = Array<EFSMountTargetDescription>;
    export type EFSMountTargetId = string; // pattern: "fsmt-[0-9a-f]{8}"
    export interface EFSMountTargetNotFound {
        ErrorCode: EFSErrorCode;
        Message?: EFSErrorMessage;
    }

    export type EFSNetworkInterfaceId = string; // pattern: "eni-[0-9a-f]{8}"
    export interface EFSNetworkInterfaceLimitExceeded {
        ErrorCode: EFSErrorCode;
        Message?: EFSErrorMessage;
    }

    export interface EFSNoFreeAddressesInSubnet {
        ErrorCode: EFSErrorCode;
        Message?: EFSErrorMessage;
    }

    export type EFSSecurityGroup = string; // pattern: "sg-[0-9a-f]{8}"
    export interface EFSSecurityGroupLimitExceeded {
        ErrorCode: EFSErrorCode;
        Message?: EFSErrorMessage;
    }

    export interface EFSSecurityGroupNotFound {
        ErrorCode: EFSErrorCode;
        Message?: EFSErrorMessage;
    }

    export type EFSSecurityGroups = Array<EFSSecurityGroup>; // max: 5
    export type EFSSubnetId = string; // pattern: "subnet-[0-9a-f]{8}"
    export interface EFSSubnetNotFound {
        ErrorCode: EFSErrorCode;
        Message?: EFSErrorMessage;
    }

    export interface EFSTag {
        Key: EFSTagKey;
        Value: EFSTagValue;
    }

    export type EFSTagKey = string; // pattern: "^([\p{L}\p{Z}\p{N}_.:/=+\-%@]*)$"
    export type EFSTagKeys = Array<EFSTagKey>;
    export type EFSTagValue = string; // pattern: "^([\p{L}\p{Z}\p{N}_.:/=+\-%@]*)$"
    export type EFSTags = Array<EFSTag>;
    export type EFSTimestamp = number;
    export interface EFSUnsupportedAvailabilityZone {
        ErrorCode: EFSErrorCode;
        Message?: EFSErrorMessage;
    }

}
