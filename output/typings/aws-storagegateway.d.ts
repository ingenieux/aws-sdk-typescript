// Type definitions for aws-sdk - AWS Storage Gateway
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

///<reference path="./aws-sdk-common.d.ts" />

declare module "aws-sdk" {

    /*
     * apiVersion: 2013-06-30
     * endpointPrefix: storagegateway
     * serviceAbbreviation: 
     * signatureVersion: v4
     * protocol: json
     */
    export class StorageGateway extends Service {
      constructor(options?: any);
      endpoint: Endpoint;
      activateGateway(params: StorageGateway.ActivateGatewayInput, callback?: (err: StorageGateway.InvalidGatewayRequestException|StorageGateway.InternalServerError|any, data: StorageGateway.ActivateGatewayOutput|any) => void): Request;
      addCache(params: StorageGateway.AddCacheInput, callback?: (err: StorageGateway.InvalidGatewayRequestException|StorageGateway.InternalServerError|any, data: StorageGateway.AddCacheOutput|any) => void): Request;
      addTagsToResource(params: StorageGateway.AddTagsToResourceInput, callback?: (err: StorageGateway.InvalidGatewayRequestException|StorageGateway.InternalServerError|any, data: StorageGateway.AddTagsToResourceOutput|any) => void): Request;
      addUploadBuffer(params: StorageGateway.AddUploadBufferInput, callback?: (err: StorageGateway.InvalidGatewayRequestException|StorageGateway.InternalServerError|any, data: StorageGateway.AddUploadBufferOutput|any) => void): Request;
      addWorkingStorage(params: StorageGateway.AddWorkingStorageInput, callback?: (err: StorageGateway.InvalidGatewayRequestException|StorageGateway.InternalServerError|any, data: StorageGateway.AddWorkingStorageOutput|any) => void): Request;
      cancelArchival(params: StorageGateway.CancelArchivalInput, callback?: (err: StorageGateway.InvalidGatewayRequestException|StorageGateway.InternalServerError|any, data: StorageGateway.CancelArchivalOutput|any) => void): Request;
      cancelRetrieval(params: StorageGateway.CancelRetrievalInput, callback?: (err: StorageGateway.InvalidGatewayRequestException|StorageGateway.InternalServerError|any, data: StorageGateway.CancelRetrievalOutput|any) => void): Request;
      createCachediSCSIVolume(params: StorageGateway.CreateCachediSCSIVolumeInput, callback?: (err: StorageGateway.InvalidGatewayRequestException|StorageGateway.InternalServerError|any, data: StorageGateway.CreateCachediSCSIVolumeOutput|any) => void): Request;
      createSnapshot(params: StorageGateway.CreateSnapshotInput, callback?: (err: StorageGateway.InvalidGatewayRequestException|StorageGateway.InternalServerError|any, data: StorageGateway.CreateSnapshotOutput|any) => void): Request;
      createSnapshotFromVolumeRecoveryPoint(params: StorageGateway.CreateSnapshotFromVolumeRecoveryPointInput, callback?: (err: StorageGateway.InvalidGatewayRequestException|StorageGateway.InternalServerError|any, data: StorageGateway.CreateSnapshotFromVolumeRecoveryPointOutput|any) => void): Request;
      createStorediSCSIVolume(params: StorageGateway.CreateStorediSCSIVolumeInput, callback?: (err: StorageGateway.InvalidGatewayRequestException|StorageGateway.InternalServerError|any, data: StorageGateway.CreateStorediSCSIVolumeOutput|any) => void): Request;
      createTapeWithBarcode(params: StorageGateway.CreateTapeWithBarcodeInput, callback?: (err: StorageGateway.InvalidGatewayRequestException|StorageGateway.InternalServerError|any, data: StorageGateway.CreateTapeWithBarcodeOutput|any) => void): Request;
      createTapes(params: StorageGateway.CreateTapesInput, callback?: (err: StorageGateway.InvalidGatewayRequestException|StorageGateway.InternalServerError|any, data: StorageGateway.CreateTapesOutput|any) => void): Request;
      deleteBandwidthRateLimit(params: StorageGateway.DeleteBandwidthRateLimitInput, callback?: (err: StorageGateway.InvalidGatewayRequestException|StorageGateway.InternalServerError|any, data: StorageGateway.DeleteBandwidthRateLimitOutput|any) => void): Request;
      deleteChapCredentials(params: StorageGateway.DeleteChapCredentialsInput, callback?: (err: StorageGateway.InvalidGatewayRequestException|StorageGateway.InternalServerError|any, data: StorageGateway.DeleteChapCredentialsOutput|any) => void): Request;
      deleteGateway(params: StorageGateway.DeleteGatewayInput, callback?: (err: StorageGateway.InvalidGatewayRequestException|StorageGateway.InternalServerError|any, data: StorageGateway.DeleteGatewayOutput|any) => void): Request;
      deleteSnapshotSchedule(params: StorageGateway.DeleteSnapshotScheduleInput, callback?: (err: StorageGateway.InvalidGatewayRequestException|StorageGateway.InternalServerError|any, data: StorageGateway.DeleteSnapshotScheduleOutput|any) => void): Request;
      deleteTape(params: StorageGateway.DeleteTapeInput, callback?: (err: StorageGateway.InvalidGatewayRequestException|StorageGateway.InternalServerError|any, data: StorageGateway.DeleteTapeOutput|any) => void): Request;
      deleteTapeArchive(params: StorageGateway.DeleteTapeArchiveInput, callback?: (err: StorageGateway.InvalidGatewayRequestException|StorageGateway.InternalServerError|any, data: StorageGateway.DeleteTapeArchiveOutput|any) => void): Request;
      deleteVolume(params: StorageGateway.DeleteVolumeInput, callback?: (err: StorageGateway.InvalidGatewayRequestException|StorageGateway.InternalServerError|any, data: StorageGateway.DeleteVolumeOutput|any) => void): Request;
      describeBandwidthRateLimit(params: StorageGateway.DescribeBandwidthRateLimitInput, callback?: (err: StorageGateway.InvalidGatewayRequestException|StorageGateway.InternalServerError|any, data: StorageGateway.DescribeBandwidthRateLimitOutput|any) => void): Request;
      describeCache(params: StorageGateway.DescribeCacheInput, callback?: (err: StorageGateway.InvalidGatewayRequestException|StorageGateway.InternalServerError|any, data: StorageGateway.DescribeCacheOutput|any) => void): Request;
      describeCachediSCSIVolumes(params: StorageGateway.DescribeCachediSCSIVolumesInput, callback?: (err: StorageGateway.InvalidGatewayRequestException|StorageGateway.InternalServerError|any, data: StorageGateway.DescribeCachediSCSIVolumesOutput|any) => void): Request;
      describeChapCredentials(params: StorageGateway.DescribeChapCredentialsInput, callback?: (err: StorageGateway.InvalidGatewayRequestException|StorageGateway.InternalServerError|any, data: StorageGateway.DescribeChapCredentialsOutput|any) => void): Request;
      describeGatewayInformation(params: StorageGateway.DescribeGatewayInformationInput, callback?: (err: StorageGateway.InvalidGatewayRequestException|StorageGateway.InternalServerError|any, data: StorageGateway.DescribeGatewayInformationOutput|any) => void): Request;
      describeMaintenanceStartTime(params: StorageGateway.DescribeMaintenanceStartTimeInput, callback?: (err: StorageGateway.InvalidGatewayRequestException|StorageGateway.InternalServerError|any, data: StorageGateway.DescribeMaintenanceStartTimeOutput|any) => void): Request;
      describeSnapshotSchedule(params: StorageGateway.DescribeSnapshotScheduleInput, callback?: (err: StorageGateway.InvalidGatewayRequestException|StorageGateway.InternalServerError|any, data: StorageGateway.DescribeSnapshotScheduleOutput|any) => void): Request;
      describeStorediSCSIVolumes(params: StorageGateway.DescribeStorediSCSIVolumesInput, callback?: (err: StorageGateway.InvalidGatewayRequestException|StorageGateway.InternalServerError|any, data: StorageGateway.DescribeStorediSCSIVolumesOutput|any) => void): Request;
      describeTapeArchives(params: StorageGateway.DescribeTapeArchivesInput, callback?: (err: StorageGateway.InvalidGatewayRequestException|StorageGateway.InternalServerError|any, data: StorageGateway.DescribeTapeArchivesOutput|any) => void): Request;
      describeTapeRecoveryPoints(params: StorageGateway.DescribeTapeRecoveryPointsInput, callback?: (err: StorageGateway.InvalidGatewayRequestException|StorageGateway.InternalServerError|any, data: StorageGateway.DescribeTapeRecoveryPointsOutput|any) => void): Request;
      describeTapes(params: StorageGateway.DescribeTapesInput, callback?: (err: StorageGateway.InvalidGatewayRequestException|StorageGateway.InternalServerError|any, data: StorageGateway.DescribeTapesOutput|any) => void): Request;
      describeUploadBuffer(params: StorageGateway.DescribeUploadBufferInput, callback?: (err: StorageGateway.InvalidGatewayRequestException|StorageGateway.InternalServerError|any, data: StorageGateway.DescribeUploadBufferOutput|any) => void): Request;
      describeVTLDevices(params: StorageGateway.DescribeVTLDevicesInput, callback?: (err: StorageGateway.InvalidGatewayRequestException|StorageGateway.InternalServerError|any, data: StorageGateway.DescribeVTLDevicesOutput|any) => void): Request;
      describeWorkingStorage(params: StorageGateway.DescribeWorkingStorageInput, callback?: (err: StorageGateway.InvalidGatewayRequestException|StorageGateway.InternalServerError|any, data: StorageGateway.DescribeWorkingStorageOutput|any) => void): Request;
      disableGateway(params: StorageGateway.DisableGatewayInput, callback?: (err: StorageGateway.InvalidGatewayRequestException|StorageGateway.InternalServerError|any, data: StorageGateway.DisableGatewayOutput|any) => void): Request;
      listGateways(params: StorageGateway.ListGatewaysInput, callback?: (err: StorageGateway.InvalidGatewayRequestException|StorageGateway.InternalServerError|any, data: StorageGateway.ListGatewaysOutput|any) => void): Request;
      listLocalDisks(params: StorageGateway.ListLocalDisksInput, callback?: (err: StorageGateway.InvalidGatewayRequestException|StorageGateway.InternalServerError|any, data: StorageGateway.ListLocalDisksOutput|any) => void): Request;
      listTagsForResource(params: StorageGateway.ListTagsForResourceInput, callback?: (err: StorageGateway.InvalidGatewayRequestException|StorageGateway.InternalServerError|any, data: StorageGateway.ListTagsForResourceOutput|any) => void): Request;
      listVolumeInitiators(params: StorageGateway.ListVolumeInitiatorsInput, callback?: (err: StorageGateway.InvalidGatewayRequestException|StorageGateway.InternalServerError|any, data: StorageGateway.ListVolumeInitiatorsOutput|any) => void): Request;
      listVolumeRecoveryPoints(params: StorageGateway.ListVolumeRecoveryPointsInput, callback?: (err: StorageGateway.InvalidGatewayRequestException|StorageGateway.InternalServerError|any, data: StorageGateway.ListVolumeRecoveryPointsOutput|any) => void): Request;
      listVolumes(params: StorageGateway.ListVolumesInput, callback?: (err: StorageGateway.InvalidGatewayRequestException|StorageGateway.InternalServerError|any, data: StorageGateway.ListVolumesOutput|any) => void): Request;
      removeTagsFromResource(params: StorageGateway.RemoveTagsFromResourceInput, callback?: (err: StorageGateway.InvalidGatewayRequestException|StorageGateway.InternalServerError|any, data: StorageGateway.RemoveTagsFromResourceOutput|any) => void): Request;
      resetCache(params: StorageGateway.ResetCacheInput, callback?: (err: StorageGateway.InvalidGatewayRequestException|StorageGateway.InternalServerError|any, data: StorageGateway.ResetCacheOutput|any) => void): Request;
      retrieveTapeArchive(params: StorageGateway.RetrieveTapeArchiveInput, callback?: (err: StorageGateway.InvalidGatewayRequestException|StorageGateway.InternalServerError|any, data: StorageGateway.RetrieveTapeArchiveOutput|any) => void): Request;
      retrieveTapeRecoveryPoint(params: StorageGateway.RetrieveTapeRecoveryPointInput, callback?: (err: StorageGateway.InvalidGatewayRequestException|StorageGateway.InternalServerError|any, data: StorageGateway.RetrieveTapeRecoveryPointOutput|any) => void): Request;
      shutdownGateway(params: StorageGateway.ShutdownGatewayInput, callback?: (err: StorageGateway.InvalidGatewayRequestException|StorageGateway.InternalServerError|any, data: StorageGateway.ShutdownGatewayOutput|any) => void): Request;
      startGateway(params: StorageGateway.StartGatewayInput, callback?: (err: StorageGateway.InvalidGatewayRequestException|StorageGateway.InternalServerError|any, data: StorageGateway.StartGatewayOutput|any) => void): Request;
      updateBandwidthRateLimit(params: StorageGateway.UpdateBandwidthRateLimitInput, callback?: (err: StorageGateway.InvalidGatewayRequestException|StorageGateway.InternalServerError|any, data: StorageGateway.UpdateBandwidthRateLimitOutput|any) => void): Request;
      updateChapCredentials(params: StorageGateway.UpdateChapCredentialsInput, callback?: (err: StorageGateway.InvalidGatewayRequestException|StorageGateway.InternalServerError|any, data: StorageGateway.UpdateChapCredentialsOutput|any) => void): Request;
      updateGatewayInformation(params: StorageGateway.UpdateGatewayInformationInput, callback?: (err: StorageGateway.InvalidGatewayRequestException|StorageGateway.InternalServerError|any, data: StorageGateway.UpdateGatewayInformationOutput|any) => void): Request;
      updateGatewaySoftwareNow(params: StorageGateway.UpdateGatewaySoftwareNowInput, callback?: (err: StorageGateway.InvalidGatewayRequestException|StorageGateway.InternalServerError|any, data: StorageGateway.UpdateGatewaySoftwareNowOutput|any) => void): Request;
      updateMaintenanceStartTime(params: StorageGateway.UpdateMaintenanceStartTimeInput, callback?: (err: StorageGateway.InvalidGatewayRequestException|StorageGateway.InternalServerError|any, data: StorageGateway.UpdateMaintenanceStartTimeOutput|any) => void): Request;
      updateSnapshotSchedule(params: StorageGateway.UpdateSnapshotScheduleInput, callback?: (err: StorageGateway.InvalidGatewayRequestException|StorageGateway.InternalServerError|any, data: StorageGateway.UpdateSnapshotScheduleOutput|any) => void): Request;
      updateVTLDeviceType(params: StorageGateway.UpdateVTLDeviceTypeInput, callback?: (err: StorageGateway.InvalidGatewayRequestException|StorageGateway.InternalServerError|any, data: StorageGateway.UpdateVTLDeviceTypeOutput|any) => void): Request;

    }

    export module StorageGateway {
        export type ActivationKey = string;    // max: 50, min: 1
        export type BandwidthDownloadRateLimit = number;    // min: 102400
        export type BandwidthType = string;    // max: 25, min: 3
        export type BandwidthUploadRateLimit = number;    // min: 51200
        export type CachediSCSIVolumes = CachediSCSIVolume[];
        export type ChapCredentials = ChapInfo[];
        export type ChapSecret = string;    // max: 100, min: 1
        export type ClientToken = string;    // max: 100, min: 5
        export type DayOfWeek = number;    // max: 6
        export type Description = string;    // max: 255, min: 1
        export type DeviceType = string;    // max: 50, min: 2
        export type DiskAllocationType = string;    // max: 100, min: 3
        export type DiskId = string;    // max: 300, min: 1
        export type DiskIds = DiskId[];
        export type Disks = Disk[];
        export type DoubleObject = number;
        export type ErrorCode = string;
        export type GatewayARN = string;    // max: 500, min: 50
        export type GatewayId = string;    // max: 30, min: 12
        export type GatewayName = string;    // pattern: &quot;^[ -\.0-\[\]-~]*[!-\.0-\[\]-~][ -\.0-\[\]-~]*$&quot;, max: 255, min: 2
        export type GatewayNetworkInterfaces = NetworkInterface[];
        export type GatewayOperationalState = string;    // max: 25, min: 2
        export type GatewayState = string;    // max: 25, min: 2
        export type GatewayTimezone = string;    // max: 10, min: 3
        export type GatewayType = string;    // max: 20, min: 2
        export type Gateways = GatewayInfo[];
        export type HourOfDay = number;    // max: 23
        export type Initiator = string;    // max: 50, min: 1
        export type Initiators = Initiator[];
        export type IqnName = string;    // pattern: &quot;[0-9a-z:.-]+&quot;, max: 255, min: 1
        export type LastSoftwareUpdate = string;    // max: 25, min: 1
        export type Marker = string;    // max: 1000, min: 1
        export type MediumChangerType = string;    // max: 50, min: 2
        export type MinuteOfHour = number;    // max: 59
        export type NetworkInterfaceId = string;    // pattern: &quot;\A(25[0-5]|2[0-4]\d|[0-1]?\d?\d)(\.(25[0-5]|2[0-4]\d|[0-1]?\d?\d)){3}\z&quot;
        export type NextUpdateAvailabilityDate = string;    // max: 25, min: 1
        export type NumTapesToCreate = number;    // max: 10, min: 1
        export type PositiveIntObject = number;    // min: 1
        export type RecurrenceInHours = number;    // max: 24, min: 1
        export type RegionId = string;    // max: 25, min: 1
        export type ResourceARN = string;    // max: 500, min: 50
        export type SnapshotDescription = string;    // max: 255, min: 1
        export type SnapshotId = string;    // pattern: &quot;\Asnap-[0-9a-fA-F]{8}\z&quot;
        export type StorediSCSIVolumes = StorediSCSIVolume[];
        export type TagKey = string;    // pattern: &quot;^([\p{L}\p{Z}\p{N}_.:/=+\-%@]*)$&quot;, max: 128, min: 1
        export type TagKeys = TagKey[];
        export type TagValue = string;    // max: 256
        export type Tags = Tag[];
        export type TapeARN = string;    // max: 500, min: 50
        export type TapeARNs = TapeARN[];
        export type TapeArchiveStatus = string;
        export type TapeArchives = TapeArchive[];
        export type TapeBarcode = string;    // pattern: &quot;^[A-Z0-9]*$&quot;, max: 16, min: 7
        export type TapeBarcodePrefix = string;    // pattern: &quot;^[A-Z]*$&quot;, max: 4, min: 1
        export type TapeDriveType = string;    // max: 50, min: 2
        export type TapeRecoveryPointInfos = TapeRecoveryPointInfo[];
        export type TapeRecoveryPointStatus = string;
        export type TapeSize = number;
        export type TapeStatus = string;
        export type Tapes = Tape[];
        export type TargetARN = string;    // max: 800, min: 50
        export type TargetName = string;    // pattern: &quot;^[-\.;a-z0-9]+$&quot;, max: 200, min: 1
        export type Time = number;
        export type VTLDeviceARN = string;    // max: 500, min: 50
        export type VTLDeviceARNs = VTLDeviceARN[];
        export type VTLDeviceProductIdentifier = string;
        export type VTLDeviceType = string;
        export type VTLDeviceVendor = string;
        export type VTLDevices = VTLDevice[];
        export type VolumeARN = string;    // max: 500, min: 50
        export type VolumeARNs = VolumeARN[];
        export type VolumeId = string;    // max: 30, min: 12
        export type VolumeInfos = VolumeInfo[];
        export type VolumeRecoveryPointInfos = VolumeRecoveryPointInfo[];
        export type VolumeStatus = string;    // max: 50, min: 3
        export type VolumeType = string;    // max: 100, min: 3
        export type double = number;
        export type errorDetails = {[key:string]: string};
        export type integer = number;
        export type long = number;

        export interface ActivateGatewayInput {
            ActivationKey: ActivationKey;
            GatewayName: GatewayName;
            GatewayTimezone: GatewayTimezone;
            GatewayRegion: RegionId;
            GatewayType?: GatewayType;
            TapeDriveType?: TapeDriveType;
            MediumChangerType?: MediumChangerType;
        }
        export interface ActivateGatewayOutput {
            GatewayARN?: GatewayARN;
        }
        export interface AddCacheInput {
            GatewayARN: GatewayARN;
            DiskIds: DiskIds;
        }
        export interface AddCacheOutput {
            GatewayARN?: GatewayARN;
        }
        export interface AddTagsToResourceInput {
            ResourceARN: ResourceARN;
            Tags: Tags;
        }
        export interface AddTagsToResourceOutput {
            ResourceARN?: ResourceARN;
        }
        export interface AddUploadBufferInput {
            GatewayARN: GatewayARN;
            DiskIds: DiskIds;
        }
        export interface AddUploadBufferOutput {
            GatewayARN?: GatewayARN;
        }
        export interface AddWorkingStorageInput {
            GatewayARN: GatewayARN;
            DiskIds: DiskIds;
        }
        export interface AddWorkingStorageOutput {
            GatewayARN?: GatewayARN;
        }
        export interface CachediSCSIVolume {
            VolumeARN?: VolumeARN;
            VolumeId?: VolumeId;
            VolumeType?: VolumeType;
            VolumeStatus?: VolumeStatus;
            VolumeSizeInBytes?: long;
            VolumeProgress?: DoubleObject;
            SourceSnapshotId?: SnapshotId;
            VolumeiSCSIAttributes?: VolumeiSCSIAttributes;
        }
        export interface CancelArchivalInput {
            GatewayARN: GatewayARN;
            TapeARN: TapeARN;
        }
        export interface CancelArchivalOutput {
            TapeARN?: TapeARN;
        }
        export interface CancelRetrievalInput {
            GatewayARN: GatewayARN;
            TapeARN: TapeARN;
        }
        export interface CancelRetrievalOutput {
            TapeARN?: TapeARN;
        }
        export interface ChapInfo {
            TargetARN?: TargetARN;
            SecretToAuthenticateInitiator?: ChapSecret;
            InitiatorName?: IqnName;
            SecretToAuthenticateTarget?: ChapSecret;
        }
        export interface CreateCachediSCSIVolumeInput {
            GatewayARN: GatewayARN;
            VolumeSizeInBytes: long;
            SnapshotId?: SnapshotId;
            TargetName: TargetName;
            NetworkInterfaceId: NetworkInterfaceId;
            ClientToken: ClientToken;
        }
        export interface CreateCachediSCSIVolumeOutput {
            VolumeARN?: VolumeARN;
            TargetARN?: TargetARN;
        }
        export interface CreateSnapshotFromVolumeRecoveryPointInput {
            VolumeARN: VolumeARN;
            SnapshotDescription: SnapshotDescription;
        }
        export interface CreateSnapshotFromVolumeRecoveryPointOutput {
            SnapshotId?: SnapshotId;
            VolumeARN?: VolumeARN;
            VolumeRecoveryPointTime?: string;
        }
        export interface CreateSnapshotInput {
            VolumeARN: VolumeARN;
            SnapshotDescription: SnapshotDescription;
        }
        export interface CreateSnapshotOutput {
            VolumeARN?: VolumeARN;
            SnapshotId?: SnapshotId;
        }
        export interface CreateStorediSCSIVolumeInput {
            GatewayARN: GatewayARN;
            DiskId: DiskId;
            SnapshotId?: SnapshotId;
            PreserveExistingData: boolean;
            TargetName: TargetName;
            NetworkInterfaceId: NetworkInterfaceId;
        }
        export interface CreateStorediSCSIVolumeOutput {
            VolumeARN?: VolumeARN;
            VolumeSizeInBytes?: long;
            TargetARN?: TargetARN;
        }
        export interface CreateTapeWithBarcodeInput {
            GatewayARN: GatewayARN;
            TapeSizeInBytes: TapeSize;
            TapeBarcode: TapeBarcode;
        }
        export interface CreateTapeWithBarcodeOutput {
            TapeARN?: TapeARN;
        }
        export interface CreateTapesInput {
            GatewayARN: GatewayARN;
            TapeSizeInBytes: TapeSize;
            ClientToken: ClientToken;
            NumTapesToCreate: NumTapesToCreate;
            TapeBarcodePrefix: TapeBarcodePrefix;
        }
        export interface CreateTapesOutput {
            TapeARNs?: TapeARNs;
        }
        export interface DeleteBandwidthRateLimitInput {
            GatewayARN: GatewayARN;
            BandwidthType: BandwidthType;
        }
        export interface DeleteBandwidthRateLimitOutput {
            GatewayARN?: GatewayARN;
        }
        export interface DeleteChapCredentialsInput {
            TargetARN: TargetARN;
            InitiatorName: IqnName;
        }
        export interface DeleteChapCredentialsOutput {
            TargetARN?: TargetARN;
            InitiatorName?: IqnName;
        }
        export interface DeleteGatewayInput {
            GatewayARN: GatewayARN;
        }
        export interface DeleteGatewayOutput {
            GatewayARN?: GatewayARN;
        }
        export interface DeleteSnapshotScheduleInput {
            VolumeARN: VolumeARN;
        }
        export interface DeleteSnapshotScheduleOutput {
            VolumeARN?: VolumeARN;
        }
        export interface DeleteTapeArchiveInput {
            TapeARN: TapeARN;
        }
        export interface DeleteTapeArchiveOutput {
            TapeARN?: TapeARN;
        }
        export interface DeleteTapeInput {
            GatewayARN: GatewayARN;
            TapeARN: TapeARN;
        }
        export interface DeleteTapeOutput {
            TapeARN?: TapeARN;
        }
        export interface DeleteVolumeInput {
            VolumeARN: VolumeARN;
        }
        export interface DeleteVolumeOutput {
            VolumeARN?: VolumeARN;
        }
        export interface DescribeBandwidthRateLimitInput {
            GatewayARN: GatewayARN;
        }
        export interface DescribeBandwidthRateLimitOutput {
            GatewayARN?: GatewayARN;
            AverageUploadRateLimitInBitsPerSec?: BandwidthUploadRateLimit;
            AverageDownloadRateLimitInBitsPerSec?: BandwidthDownloadRateLimit;
        }
        export interface DescribeCacheInput {
            GatewayARN: GatewayARN;
        }
        export interface DescribeCacheOutput {
            GatewayARN?: GatewayARN;
            DiskIds?: DiskIds;
            CacheAllocatedInBytes?: long;
            CacheUsedPercentage?: double;
            CacheDirtyPercentage?: double;
            CacheHitPercentage?: double;
            CacheMissPercentage?: double;
        }
        export interface DescribeCachediSCSIVolumesInput {
            VolumeARNs: VolumeARNs;
        }
        export interface DescribeCachediSCSIVolumesOutput {
            CachediSCSIVolumes?: CachediSCSIVolumes;
        }
        export interface DescribeChapCredentialsInput {
            TargetARN: TargetARN;
        }
        export interface DescribeChapCredentialsOutput {
            ChapCredentials?: ChapCredentials;
        }
        export interface DescribeGatewayInformationInput {
            GatewayARN: GatewayARN;
        }
        export interface DescribeGatewayInformationOutput {
            GatewayARN?: GatewayARN;
            GatewayId?: GatewayId;
            GatewayName?: string;
            GatewayTimezone?: GatewayTimezone;
            GatewayState?: GatewayState;
            GatewayNetworkInterfaces?: GatewayNetworkInterfaces;
            GatewayType?: GatewayType;
            NextUpdateAvailabilityDate?: NextUpdateAvailabilityDate;
            LastSoftwareUpdate?: LastSoftwareUpdate;
        }
        export interface DescribeMaintenanceStartTimeInput {
            GatewayARN: GatewayARN;
        }
        export interface DescribeMaintenanceStartTimeOutput {
            GatewayARN?: GatewayARN;
            HourOfDay?: HourOfDay;
            MinuteOfHour?: MinuteOfHour;
            DayOfWeek?: DayOfWeek;
            Timezone?: GatewayTimezone;
        }
        export interface DescribeSnapshotScheduleInput {
            VolumeARN: VolumeARN;
        }
        export interface DescribeSnapshotScheduleOutput {
            VolumeARN?: VolumeARN;
            StartAt?: HourOfDay;
            RecurrenceInHours?: RecurrenceInHours;
            Description?: Description;
            Timezone?: GatewayTimezone;
        }
        export interface DescribeStorediSCSIVolumesInput {
            VolumeARNs: VolumeARNs;
        }
        export interface DescribeStorediSCSIVolumesOutput {
            StorediSCSIVolumes?: StorediSCSIVolumes;
        }
        export interface DescribeTapeArchivesInput {
            TapeARNs?: TapeARNs;
            Marker?: Marker;
            Limit?: PositiveIntObject;
        }
        export interface DescribeTapeArchivesOutput {
            TapeArchives?: TapeArchives;
            Marker?: Marker;
        }
        export interface DescribeTapeRecoveryPointsInput {
            GatewayARN: GatewayARN;
            Marker?: Marker;
            Limit?: PositiveIntObject;
        }
        export interface DescribeTapeRecoveryPointsOutput {
            GatewayARN?: GatewayARN;
            TapeRecoveryPointInfos?: TapeRecoveryPointInfos;
            Marker?: Marker;
        }
        export interface DescribeTapesInput {
            GatewayARN: GatewayARN;
            TapeARNs?: TapeARNs;
            Marker?: Marker;
            Limit?: PositiveIntObject;
        }
        export interface DescribeTapesOutput {
            Tapes?: Tapes;
            Marker?: Marker;
        }
        export interface DescribeUploadBufferInput {
            GatewayARN: GatewayARN;
        }
        export interface DescribeUploadBufferOutput {
            GatewayARN?: GatewayARN;
            DiskIds?: DiskIds;
            UploadBufferUsedInBytes?: long;
            UploadBufferAllocatedInBytes?: long;
        }
        export interface DescribeVTLDevicesInput {
            GatewayARN: GatewayARN;
            VTLDeviceARNs?: VTLDeviceARNs;
            Marker?: Marker;
            Limit?: PositiveIntObject;
        }
        export interface DescribeVTLDevicesOutput {
            GatewayARN?: GatewayARN;
            VTLDevices?: VTLDevices;
            Marker?: Marker;
        }
        export interface DescribeWorkingStorageInput {
            GatewayARN: GatewayARN;
        }
        export interface DescribeWorkingStorageOutput {
            GatewayARN?: GatewayARN;
            DiskIds?: DiskIds;
            WorkingStorageUsedInBytes?: long;
            WorkingStorageAllocatedInBytes?: long;
        }
        export interface DeviceiSCSIAttributes {
            TargetARN?: TargetARN;
            NetworkInterfaceId?: NetworkInterfaceId;
            NetworkInterfacePort?: integer;
            ChapEnabled?: boolean;
        }
        export interface DisableGatewayInput {
            GatewayARN: GatewayARN;
        }
        export interface DisableGatewayOutput {
            GatewayARN?: GatewayARN;
        }
        export interface Disk {
            DiskId?: DiskId;
            DiskPath?: string;
            DiskNode?: string;
            DiskStatus?: string;
            DiskSizeInBytes?: long;
            DiskAllocationType?: DiskAllocationType;
            DiskAllocationResource?: string;
        }
        export interface GatewayInfo {
            GatewayARN?: GatewayARN;
            GatewayType?: GatewayType;
            GatewayOperationalState?: GatewayOperationalState;
            GatewayName?: string;
        }
        export interface InternalServerError {
            message?: string;
            error?: StorageGatewayError;
        }
        export interface InvalidGatewayRequestException {
            message?: string;
            error?: StorageGatewayError;
        }
        export interface ListGatewaysInput {
            Marker?: Marker;
            Limit?: PositiveIntObject;
        }
        export interface ListGatewaysOutput {
            Gateways?: Gateways;
            Marker?: Marker;
        }
        export interface ListLocalDisksInput {
            GatewayARN: GatewayARN;
        }
        export interface ListLocalDisksOutput {
            GatewayARN?: GatewayARN;
            Disks?: Disks;
        }
        export interface ListTagsForResourceInput {
            ResourceARN: ResourceARN;
            Marker?: Marker;
            Limit?: PositiveIntObject;
        }
        export interface ListTagsForResourceOutput {
            ResourceARN?: ResourceARN;
            Marker?: Marker;
            Tags?: Tags;
        }
        export interface ListVolumeInitiatorsInput {
            VolumeARN: VolumeARN;
        }
        export interface ListVolumeInitiatorsOutput {
            Initiators?: Initiators;
        }
        export interface ListVolumeRecoveryPointsInput {
            GatewayARN: GatewayARN;
        }
        export interface ListVolumeRecoveryPointsOutput {
            GatewayARN?: GatewayARN;
            VolumeRecoveryPointInfos?: VolumeRecoveryPointInfos;
        }
        export interface ListVolumesInput {
            GatewayARN: GatewayARN;
            Marker?: Marker;
            Limit?: PositiveIntObject;
        }
        export interface ListVolumesOutput {
            GatewayARN?: GatewayARN;
            Marker?: Marker;
            VolumeInfos?: VolumeInfos;
        }
        export interface NetworkInterface {
            Ipv4Address?: string;
            MacAddress?: string;
            Ipv6Address?: string;
        }
        export interface RemoveTagsFromResourceInput {
            ResourceARN: ResourceARN;
            TagKeys: TagKeys;
        }
        export interface RemoveTagsFromResourceOutput {
            ResourceARN?: ResourceARN;
        }
        export interface ResetCacheInput {
            GatewayARN: GatewayARN;
        }
        export interface ResetCacheOutput {
            GatewayARN?: GatewayARN;
        }
        export interface RetrieveTapeArchiveInput {
            TapeARN: TapeARN;
            GatewayARN: GatewayARN;
        }
        export interface RetrieveTapeArchiveOutput {
            TapeARN?: TapeARN;
        }
        export interface RetrieveTapeRecoveryPointInput {
            TapeARN: TapeARN;
            GatewayARN: GatewayARN;
        }
        export interface RetrieveTapeRecoveryPointOutput {
            TapeARN?: TapeARN;
        }
        export interface ShutdownGatewayInput {
            GatewayARN: GatewayARN;
        }
        export interface ShutdownGatewayOutput {
            GatewayARN?: GatewayARN;
        }
        export interface StartGatewayInput {
            GatewayARN: GatewayARN;
        }
        export interface StartGatewayOutput {
            GatewayARN?: GatewayARN;
        }
        export interface StorageGatewayError {
            errorCode?: ErrorCode;
            errorDetails?: errorDetails;
        }
        export interface StorediSCSIVolume {
            VolumeARN?: VolumeARN;
            VolumeId?: VolumeId;
            VolumeType?: VolumeType;
            VolumeStatus?: VolumeStatus;
            VolumeSizeInBytes?: long;
            VolumeProgress?: DoubleObject;
            VolumeDiskId?: DiskId;
            SourceSnapshotId?: SnapshotId;
            PreservedExistingData?: boolean;
            VolumeiSCSIAttributes?: VolumeiSCSIAttributes;
        }
        export interface Tag {
            Key: TagKey;
            Value: TagValue;
        }
        export interface Tape {
            TapeARN?: TapeARN;
            TapeBarcode?: TapeBarcode;
            TapeSizeInBytes?: TapeSize;
            TapeStatus?: TapeStatus;
            VTLDevice?: VTLDeviceARN;
            Progress?: DoubleObject;
        }
        export interface TapeArchive {
            TapeARN?: TapeARN;
            TapeBarcode?: TapeBarcode;
            TapeSizeInBytes?: TapeSize;
            CompletionTime?: Time;
            RetrievedTo?: GatewayARN;
            TapeStatus?: TapeArchiveStatus;
        }
        export interface TapeRecoveryPointInfo {
            TapeARN?: TapeARN;
            TapeRecoveryPointTime?: Time;
            TapeSizeInBytes?: TapeSize;
            TapeStatus?: TapeRecoveryPointStatus;
        }
        export interface UpdateBandwidthRateLimitInput {
            GatewayARN: GatewayARN;
            AverageUploadRateLimitInBitsPerSec?: BandwidthUploadRateLimit;
            AverageDownloadRateLimitInBitsPerSec?: BandwidthDownloadRateLimit;
        }
        export interface UpdateBandwidthRateLimitOutput {
            GatewayARN?: GatewayARN;
        }
        export interface UpdateChapCredentialsInput {
            TargetARN: TargetARN;
            SecretToAuthenticateInitiator: ChapSecret;
            InitiatorName: IqnName;
            SecretToAuthenticateTarget?: ChapSecret;
        }
        export interface UpdateChapCredentialsOutput {
            TargetARN?: TargetARN;
            InitiatorName?: IqnName;
        }
        export interface UpdateGatewayInformationInput {
            GatewayARN: GatewayARN;
            GatewayName?: GatewayName;
            GatewayTimezone?: GatewayTimezone;
        }
        export interface UpdateGatewayInformationOutput {
            GatewayARN?: GatewayARN;
            GatewayName?: string;
        }
        export interface UpdateGatewaySoftwareNowInput {
            GatewayARN: GatewayARN;
        }
        export interface UpdateGatewaySoftwareNowOutput {
            GatewayARN?: GatewayARN;
        }
        export interface UpdateMaintenanceStartTimeInput {
            GatewayARN: GatewayARN;
            HourOfDay: HourOfDay;
            MinuteOfHour: MinuteOfHour;
            DayOfWeek: DayOfWeek;
        }
        export interface UpdateMaintenanceStartTimeOutput {
            GatewayARN?: GatewayARN;
        }
        export interface UpdateSnapshotScheduleInput {
            VolumeARN: VolumeARN;
            StartAt: HourOfDay;
            RecurrenceInHours: RecurrenceInHours;
            Description?: Description;
        }
        export interface UpdateSnapshotScheduleOutput {
            VolumeARN?: VolumeARN;
        }
        export interface UpdateVTLDeviceTypeInput {
            VTLDeviceARN: VTLDeviceARN;
            DeviceType: DeviceType;
        }
        export interface UpdateVTLDeviceTypeOutput {
            VTLDeviceARN?: VTLDeviceARN;
        }
        export interface VTLDevice {
            VTLDeviceARN?: VTLDeviceARN;
            VTLDeviceType?: VTLDeviceType;
            VTLDeviceVendor?: VTLDeviceVendor;
            VTLDeviceProductIdentifier?: VTLDeviceProductIdentifier;
            DeviceiSCSIAttributes?: DeviceiSCSIAttributes;
        }
        export interface VolumeInfo {
            VolumeARN?: VolumeARN;
            VolumeType?: VolumeType;
        }
        export interface VolumeRecoveryPointInfo {
            VolumeARN?: VolumeARN;
            VolumeSizeInBytes?: long;
            VolumeUsageInBytes?: long;
            VolumeRecoveryPointTime?: string;
        }
        export interface VolumeiSCSIAttributes {
            TargetARN?: TargetARN;
            NetworkInterfaceId?: NetworkInterfaceId;
            NetworkInterfacePort?: integer;
            LunNumber?: PositiveIntObject;
            ChapEnabled?: boolean;
        }

    }
}
