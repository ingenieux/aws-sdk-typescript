// DO NOT EDIT!
//
declare module "aws-sdk" {
    export class StorageGateway {
      constructor(options?: any);
      activateGateway(params: ActivateGatewayInput, callback: (err: InvalidGatewayRequestException|InternalServerError|any, data: ActivateGatewayOutput|any) => void): void;
      addCache(params: AddCacheInput, callback: (err: InvalidGatewayRequestException|InternalServerError|any, data: AddCacheOutput|any) => void): void;
      addUploadBuffer(params: AddUploadBufferInput, callback: (err: InvalidGatewayRequestException|InternalServerError|any, data: AddUploadBufferOutput|any) => void): void;
      addWorkingStorage(params: AddWorkingStorageInput, callback: (err: InvalidGatewayRequestException|InternalServerError|any, data: AddWorkingStorageOutput|any) => void): void;
      cancelArchival(params: CancelArchivalInput, callback: (err: InvalidGatewayRequestException|InternalServerError|any, data: CancelArchivalOutput|any) => void): void;
      cancelRetrieval(params: CancelRetrievalInput, callback: (err: InvalidGatewayRequestException|InternalServerError|any, data: CancelRetrievalOutput|any) => void): void;
      createCachediSCSIVolume(params: CreateCachediSCSIVolumeInput, callback: (err: InvalidGatewayRequestException|InternalServerError|any, data: CreateCachediSCSIVolumeOutput|any) => void): void;
      createSnapshot(params: CreateSnapshotInput, callback: (err: InvalidGatewayRequestException|InternalServerError|any, data: CreateSnapshotOutput|any) => void): void;
      createSnapshotFromVolumeRecoveryPoint(params: CreateSnapshotFromVolumeRecoveryPointInput, callback: (err: InvalidGatewayRequestException|InternalServerError|any, data: CreateSnapshotFromVolumeRecoveryPointOutput|any) => void): void;
      createStorediSCSIVolume(params: CreateStorediSCSIVolumeInput, callback: (err: InvalidGatewayRequestException|InternalServerError|any, data: CreateStorediSCSIVolumeOutput|any) => void): void;
      createTapes(params: CreateTapesInput, callback: (err: InvalidGatewayRequestException|InternalServerError|any, data: CreateTapesOutput|any) => void): void;
      deleteBandwidthRateLimit(params: DeleteBandwidthRateLimitInput, callback: (err: InvalidGatewayRequestException|InternalServerError|any, data: DeleteBandwidthRateLimitOutput|any) => void): void;
      deleteChapCredentials(params: DeleteChapCredentialsInput, callback: (err: InvalidGatewayRequestException|InternalServerError|any, data: DeleteChapCredentialsOutput|any) => void): void;
      deleteGateway(params: DeleteGatewayInput, callback: (err: InvalidGatewayRequestException|InternalServerError|any, data: DeleteGatewayOutput|any) => void): void;
      deleteSnapshotSchedule(params: DeleteSnapshotScheduleInput, callback: (err: InvalidGatewayRequestException|InternalServerError|any, data: DeleteSnapshotScheduleOutput|any) => void): void;
      deleteTape(params: DeleteTapeInput, callback: (err: InvalidGatewayRequestException|InternalServerError|any, data: DeleteTapeOutput|any) => void): void;
      deleteTapeArchive(params: DeleteTapeArchiveInput, callback: (err: InvalidGatewayRequestException|InternalServerError|any, data: DeleteTapeArchiveOutput|any) => void): void;
      deleteVolume(params: DeleteVolumeInput, callback: (err: InvalidGatewayRequestException|InternalServerError|any, data: DeleteVolumeOutput|any) => void): void;
      describeBandwidthRateLimit(params: DescribeBandwidthRateLimitInput, callback: (err: InvalidGatewayRequestException|InternalServerError|any, data: DescribeBandwidthRateLimitOutput|any) => void): void;
      describeCache(params: DescribeCacheInput, callback: (err: InvalidGatewayRequestException|InternalServerError|any, data: DescribeCacheOutput|any) => void): void;
      describeCachediSCSIVolumes(params: DescribeCachediSCSIVolumesInput, callback: (err: InvalidGatewayRequestException|InternalServerError|any, data: DescribeCachediSCSIVolumesOutput|any) => void): void;
      describeChapCredentials(params: DescribeChapCredentialsInput, callback: (err: InvalidGatewayRequestException|InternalServerError|any, data: DescribeChapCredentialsOutput|any) => void): void;
      describeGatewayInformation(params: DescribeGatewayInformationInput, callback: (err: InvalidGatewayRequestException|InternalServerError|any, data: DescribeGatewayInformationOutput|any) => void): void;
      describeMaintenanceStartTime(params: DescribeMaintenanceStartTimeInput, callback: (err: InvalidGatewayRequestException|InternalServerError|any, data: DescribeMaintenanceStartTimeOutput|any) => void): void;
      describeSnapshotSchedule(params: DescribeSnapshotScheduleInput, callback: (err: InvalidGatewayRequestException|InternalServerError|any, data: DescribeSnapshotScheduleOutput|any) => void): void;
      describeStorediSCSIVolumes(params: DescribeStorediSCSIVolumesInput, callback: (err: InvalidGatewayRequestException|InternalServerError|any, data: DescribeStorediSCSIVolumesOutput|any) => void): void;
      describeTapeArchives(params: DescribeTapeArchivesInput, callback: (err: InvalidGatewayRequestException|InternalServerError|any, data: DescribeTapeArchivesOutput|any) => void): void;
      describeTapeRecoveryPoints(params: DescribeTapeRecoveryPointsInput, callback: (err: InvalidGatewayRequestException|InternalServerError|any, data: DescribeTapeRecoveryPointsOutput|any) => void): void;
      describeTapes(params: DescribeTapesInput, callback: (err: InvalidGatewayRequestException|InternalServerError|any, data: DescribeTapesOutput|any) => void): void;
      describeUploadBuffer(params: DescribeUploadBufferInput, callback: (err: InvalidGatewayRequestException|InternalServerError|any, data: DescribeUploadBufferOutput|any) => void): void;
      describeVTLDevices(params: DescribeVTLDevicesInput, callback: (err: InvalidGatewayRequestException|InternalServerError|any, data: DescribeVTLDevicesOutput|any) => void): void;
      describeWorkingStorage(params: DescribeWorkingStorageInput, callback: (err: InvalidGatewayRequestException|InternalServerError|any, data: DescribeWorkingStorageOutput|any) => void): void;
      disableGateway(params: DisableGatewayInput, callback: (err: InvalidGatewayRequestException|InternalServerError|any, data: DisableGatewayOutput|any) => void): void;
      listGateways(params: ListGatewaysInput, callback: (err: InvalidGatewayRequestException|InternalServerError|any, data: ListGatewaysOutput|any) => void): void;
      listLocalDisks(params: ListLocalDisksInput, callback: (err: InvalidGatewayRequestException|InternalServerError|any, data: ListLocalDisksOutput|any) => void): void;
      listVolumeRecoveryPoints(params: ListVolumeRecoveryPointsInput, callback: (err: InvalidGatewayRequestException|InternalServerError|any, data: ListVolumeRecoveryPointsOutput|any) => void): void;
      listVolumes(params: ListVolumesInput, callback: (err: InvalidGatewayRequestException|InternalServerError|any, data: ListVolumesOutput|any) => void): void;
      resetCache(params: ResetCacheInput, callback: (err: InvalidGatewayRequestException|InternalServerError|any, data: ResetCacheOutput|any) => void): void;
      retrieveTapeArchive(params: RetrieveTapeArchiveInput, callback: (err: InvalidGatewayRequestException|InternalServerError|any, data: RetrieveTapeArchiveOutput|any) => void): void;
      retrieveTapeRecoveryPoint(params: RetrieveTapeRecoveryPointInput, callback: (err: InvalidGatewayRequestException|InternalServerError|any, data: RetrieveTapeRecoveryPointOutput|any) => void): void;
      shutdownGateway(params: ShutdownGatewayInput, callback: (err: InvalidGatewayRequestException|InternalServerError|any, data: ShutdownGatewayOutput|any) => void): void;
      startGateway(params: StartGatewayInput, callback: (err: InvalidGatewayRequestException|InternalServerError|any, data: StartGatewayOutput|any) => void): void;
      updateBandwidthRateLimit(params: UpdateBandwidthRateLimitInput, callback: (err: InvalidGatewayRequestException|InternalServerError|any, data: UpdateBandwidthRateLimitOutput|any) => void): void;
      updateChapCredentials(params: UpdateChapCredentialsInput, callback: (err: InvalidGatewayRequestException|InternalServerError|any, data: UpdateChapCredentialsOutput|any) => void): void;
      updateGatewayInformation(params: UpdateGatewayInformationInput, callback: (err: InvalidGatewayRequestException|InternalServerError|any, data: UpdateGatewayInformationOutput|any) => void): void;
      updateGatewaySoftwareNow(params: UpdateGatewaySoftwareNowInput, callback: (err: InvalidGatewayRequestException|InternalServerError|any, data: UpdateGatewaySoftwareNowOutput|any) => void): void;
      updateMaintenanceStartTime(params: UpdateMaintenanceStartTimeInput, callback: (err: InvalidGatewayRequestException|InternalServerError|any, data: UpdateMaintenanceStartTimeOutput|any) => void): void;
      updateSnapshotSchedule(params: UpdateSnapshotScheduleInput, callback: (err: InvalidGatewayRequestException|InternalServerError|any, data: UpdateSnapshotScheduleOutput|any) => void): void;
      updateVTLDeviceType(params: UpdateVTLDeviceTypeInput, callback: (err: InvalidGatewayRequestException|InternalServerError|any, data: UpdateVTLDeviceTypeOutput|any) => void): void;
    }

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


    export type ActivationKey = string;

    export interface AddCacheInput {
      GatewayARN: GatewayARN;
      DiskIds: DiskIds;
    }


    export interface AddCacheOutput {
      GatewayARN?: GatewayARN;
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


    export type BandwidthDownloadRateLimit = number;

    export type BandwidthType = string;

    export type BandwidthUploadRateLimit = number;

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


    export type CachediSCSIVolumes = Array<CachediSCSIVolume>;

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


    export type ChapCredentials = Array<ChapInfo>;

    export interface ChapInfo {
      TargetARN?: TargetARN;
      SecretToAuthenticateInitiator?: ChapSecret;
      InitiatorName?: IqnName;
      SecretToAuthenticateTarget?: ChapSecret;
    }


    export type ChapSecret = string;

    export type ClientToken = string;

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


    export type DayOfWeek = number;

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
      GatewayTimezone?: GatewayTimezone;
      GatewayState?: GatewayState;
      GatewayNetworkInterfaces?: GatewayNetworkInterfaces;
      GatewayType?: GatewayType;
      NextUpdateAvailabilityDate?: NextUpdateAvailabilityDate;
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


    export type Description = string;

    export type DeviceType = string;

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


    export type DiskAllocationType = string;

    export type DiskId = string;

    export type DiskIds = Array<DiskId>;

    export type Disks = Array<Disk>;

    export type DoubleObject = number;

    export type ErrorCode = string;

    export type GatewayARN = string;

    export type GatewayId = string;

    export interface GatewayInfo {
      GatewayARN?: GatewayARN;
      GatewayType?: GatewayType;
      GatewayOperationalState?: GatewayOperationalState;
    }


    export type GatewayName = string; // pattern: "^[ -\.0-\[\]-~]*[!-\.0-\[\]-~][ -\.0-\[\]-~]*$"

    export type GatewayNetworkInterfaces = Array<NetworkInterface>;

    export type GatewayOperationalState = string;

    export type GatewayState = string;

    export type GatewayTimezone = string;

    export type GatewayType = string;

    export type Gateways = Array<GatewayInfo>;

    export type HourOfDay = number;

    export interface InternalServerError {
      message?: string;
      error?: StorageGatewayError;
    }


    export interface InvalidGatewayRequestException {
      message?: string;
      error?: StorageGatewayError;
    }


    export type IqnName = string; // pattern: "[0-9a-z:.-]+"

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


    export type Marker = string;

    export type MediumChangerType = string;

    export type MinuteOfHour = number;

    export interface NetworkInterface {
      Ipv4Address?: string;
      MacAddress?: string;
      Ipv6Address?: string;
    }


    export type NetworkInterfaceId = string; // pattern: "\A(25[0-5]|2[0-4]\d|[0-1]?\d?\d)(\.(25[0-5]|2[0-4]\d|[0-1]?\d?\d)){3}\z"

    export type NextUpdateAvailabilityDate = string;

    export type NumTapesToCreate = number;

    export type PositiveIntObject = number;

    export type RecurrenceInHours = number;

    export type RegionId = string;

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


    export type SnapshotDescription = string;

    export type SnapshotId = string; // pattern: "\Asnap-[0-9a-fA-F]{8}\z"

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


    export type StorediSCSIVolumes = Array<StorediSCSIVolume>;

    export interface Tape {
      TapeARN?: TapeARN;
      TapeBarcode?: TapeBarcode;
      TapeSizeInBytes?: TapeSize;
      TapeStatus?: TapeStatus;
      VTLDevice?: VTLDeviceARN;
      Progress?: DoubleObject;
    }


    export type TapeARN = string;

    export type TapeARNs = Array<TapeARN>;

    export interface TapeArchive {
      TapeARN?: TapeARN;
      TapeBarcode?: TapeBarcode;
      TapeSizeInBytes?: TapeSize;
      CompletionTime?: Time;
      RetrievedTo?: GatewayARN;
      TapeStatus?: TapeArchiveStatus;
    }


    export type TapeArchiveStatus = string;

    export type TapeArchives = Array<TapeArchive>;

    export type TapeBarcode = string; // pattern: "^[A-Z0-9]*$"

    export type TapeBarcodePrefix = string; // pattern: "^[A-Z]*$"

    export type TapeDriveType = string;

    export interface TapeRecoveryPointInfo {
      TapeARN?: TapeARN;
      TapeRecoveryPointTime?: Time;
      TapeSizeInBytes?: TapeSize;
      TapeStatus?: TapeRecoveryPointStatus;
    }


    export type TapeRecoveryPointInfos = Array<TapeRecoveryPointInfo>;

    export type TapeRecoveryPointStatus = string;

    export type TapeSize = number;

    export type TapeStatus = string;

    export type Tapes = Array<Tape>;

    export type TargetARN = string;

    export type TargetName = string; // pattern: "^[-\.;a-z0-9]+$"

    export type Time = number;

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


    export type VTLDeviceARN = string;

    export type VTLDeviceARNs = Array<VTLDeviceARN>;

    export type VTLDeviceProductIdentifier = string;

    export type VTLDeviceType = string;

    export type VTLDeviceVendor = string;

    export type VTLDevices = Array<VTLDevice>;

    export type VolumeARN = string;

    export type VolumeARNs = Array<VolumeARN>;

    export type VolumeId = string;

    export interface VolumeInfo {
      VolumeARN?: VolumeARN;
      VolumeType?: VolumeType;
    }


    export type VolumeInfos = Array<VolumeInfo>;

    export interface VolumeRecoveryPointInfo {
      VolumeARN?: VolumeARN;
      VolumeSizeInBytes?: long;
      VolumeUsageInBytes?: long;
      VolumeRecoveryPointTime?: string;
    }


    export type VolumeRecoveryPointInfos = Array<VolumeRecoveryPointInfo>;

    export type VolumeStatus = string;

    export type VolumeType = string;

    export interface VolumeiSCSIAttributes {
      TargetARN?: TargetARN;
      NetworkInterfaceId?: NetworkInterfaceId;
      NetworkInterfacePort?: integer;
      LunNumber?: PositiveIntObject;
      ChapEnabled?: boolean;
    }


    export type boolean = boolean;

    export type double = number;

    export type errorDetails = any; // not really - it was 'map' instead - must fix this one

    export type integer = number;

    export type long = number;

    export type string = string;

}
