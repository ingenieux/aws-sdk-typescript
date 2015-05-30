// DO NOT EDIT!
//
declare module "aws-sdk" {
    export class StorageGateway {
      constructor(options?: any);
      activateGateway(params: StorageGatewayActivateGatewayInput, callback: (err: StorageGatewayInvalidGatewayRequestException|StorageGatewayInternalServerError|any, data: StorageGatewayActivateGatewayOutput|any) => void): void;
      addCache(params: StorageGatewayAddCacheInput, callback: (err: StorageGatewayInvalidGatewayRequestException|StorageGatewayInternalServerError|any, data: StorageGatewayAddCacheOutput|any) => void): void;
      addUploadBuffer(params: StorageGatewayAddUploadBufferInput, callback: (err: StorageGatewayInvalidGatewayRequestException|StorageGatewayInternalServerError|any, data: StorageGatewayAddUploadBufferOutput|any) => void): void;
      addWorkingStorage(params: StorageGatewayAddWorkingStorageInput, callback: (err: StorageGatewayInvalidGatewayRequestException|StorageGatewayInternalServerError|any, data: StorageGatewayAddWorkingStorageOutput|any) => void): void;
      cancelArchival(params: StorageGatewayCancelArchivalInput, callback: (err: StorageGatewayInvalidGatewayRequestException|StorageGatewayInternalServerError|any, data: StorageGatewayCancelArchivalOutput|any) => void): void;
      cancelRetrieval(params: StorageGatewayCancelRetrievalInput, callback: (err: StorageGatewayInvalidGatewayRequestException|StorageGatewayInternalServerError|any, data: StorageGatewayCancelRetrievalOutput|any) => void): void;
      createCachediSCSIVolume(params: StorageGatewayCreateCachediSCSIVolumeInput, callback: (err: StorageGatewayInvalidGatewayRequestException|StorageGatewayInternalServerError|any, data: StorageGatewayCreateCachediSCSIVolumeOutput|any) => void): void;
      createSnapshot(params: StorageGatewayCreateSnapshotInput, callback: (err: StorageGatewayInvalidGatewayRequestException|StorageGatewayInternalServerError|any, data: StorageGatewayCreateSnapshotOutput|any) => void): void;
      createSnapshotFromVolumeRecoveryPoint(params: StorageGatewayCreateSnapshotFromVolumeRecoveryPointInput, callback: (err: StorageGatewayInvalidGatewayRequestException|StorageGatewayInternalServerError|any, data: StorageGatewayCreateSnapshotFromVolumeRecoveryPointOutput|any) => void): void;
      createStorediSCSIVolume(params: StorageGatewayCreateStorediSCSIVolumeInput, callback: (err: StorageGatewayInvalidGatewayRequestException|StorageGatewayInternalServerError|any, data: StorageGatewayCreateStorediSCSIVolumeOutput|any) => void): void;
      createTapes(params: StorageGatewayCreateTapesInput, callback: (err: StorageGatewayInvalidGatewayRequestException|StorageGatewayInternalServerError|any, data: StorageGatewayCreateTapesOutput|any) => void): void;
      deleteBandwidthRateLimit(params: StorageGatewayDeleteBandwidthRateLimitInput, callback: (err: StorageGatewayInvalidGatewayRequestException|StorageGatewayInternalServerError|any, data: StorageGatewayDeleteBandwidthRateLimitOutput|any) => void): void;
      deleteChapCredentials(params: StorageGatewayDeleteChapCredentialsInput, callback: (err: StorageGatewayInvalidGatewayRequestException|StorageGatewayInternalServerError|any, data: StorageGatewayDeleteChapCredentialsOutput|any) => void): void;
      deleteGateway(params: StorageGatewayDeleteGatewayInput, callback: (err: StorageGatewayInvalidGatewayRequestException|StorageGatewayInternalServerError|any, data: StorageGatewayDeleteGatewayOutput|any) => void): void;
      deleteSnapshotSchedule(params: StorageGatewayDeleteSnapshotScheduleInput, callback: (err: StorageGatewayInvalidGatewayRequestException|StorageGatewayInternalServerError|any, data: StorageGatewayDeleteSnapshotScheduleOutput|any) => void): void;
      deleteTape(params: StorageGatewayDeleteTapeInput, callback: (err: StorageGatewayInvalidGatewayRequestException|StorageGatewayInternalServerError|any, data: StorageGatewayDeleteTapeOutput|any) => void): void;
      deleteTapeArchive(params: StorageGatewayDeleteTapeArchiveInput, callback: (err: StorageGatewayInvalidGatewayRequestException|StorageGatewayInternalServerError|any, data: StorageGatewayDeleteTapeArchiveOutput|any) => void): void;
      deleteVolume(params: StorageGatewayDeleteVolumeInput, callback: (err: StorageGatewayInvalidGatewayRequestException|StorageGatewayInternalServerError|any, data: StorageGatewayDeleteVolumeOutput|any) => void): void;
      describeBandwidthRateLimit(params: StorageGatewayDescribeBandwidthRateLimitInput, callback: (err: StorageGatewayInvalidGatewayRequestException|StorageGatewayInternalServerError|any, data: StorageGatewayDescribeBandwidthRateLimitOutput|any) => void): void;
      describeCache(params: StorageGatewayDescribeCacheInput, callback: (err: StorageGatewayInvalidGatewayRequestException|StorageGatewayInternalServerError|any, data: StorageGatewayDescribeCacheOutput|any) => void): void;
      describeCachediSCSIVolumes(params: StorageGatewayDescribeCachediSCSIVolumesInput, callback: (err: StorageGatewayInvalidGatewayRequestException|StorageGatewayInternalServerError|any, data: StorageGatewayDescribeCachediSCSIVolumesOutput|any) => void): void;
      describeChapCredentials(params: StorageGatewayDescribeChapCredentialsInput, callback: (err: StorageGatewayInvalidGatewayRequestException|StorageGatewayInternalServerError|any, data: StorageGatewayDescribeChapCredentialsOutput|any) => void): void;
      describeGatewayInformation(params: StorageGatewayDescribeGatewayInformationInput, callback: (err: StorageGatewayInvalidGatewayRequestException|StorageGatewayInternalServerError|any, data: StorageGatewayDescribeGatewayInformationOutput|any) => void): void;
      describeMaintenanceStartTime(params: StorageGatewayDescribeMaintenanceStartTimeInput, callback: (err: StorageGatewayInvalidGatewayRequestException|StorageGatewayInternalServerError|any, data: StorageGatewayDescribeMaintenanceStartTimeOutput|any) => void): void;
      describeSnapshotSchedule(params: StorageGatewayDescribeSnapshotScheduleInput, callback: (err: StorageGatewayInvalidGatewayRequestException|StorageGatewayInternalServerError|any, data: StorageGatewayDescribeSnapshotScheduleOutput|any) => void): void;
      describeStorediSCSIVolumes(params: StorageGatewayDescribeStorediSCSIVolumesInput, callback: (err: StorageGatewayInvalidGatewayRequestException|StorageGatewayInternalServerError|any, data: StorageGatewayDescribeStorediSCSIVolumesOutput|any) => void): void;
      describeTapeArchives(params: StorageGatewayDescribeTapeArchivesInput, callback: (err: StorageGatewayInvalidGatewayRequestException|StorageGatewayInternalServerError|any, data: StorageGatewayDescribeTapeArchivesOutput|any) => void): void;
      describeTapeRecoveryPoints(params: StorageGatewayDescribeTapeRecoveryPointsInput, callback: (err: StorageGatewayInvalidGatewayRequestException|StorageGatewayInternalServerError|any, data: StorageGatewayDescribeTapeRecoveryPointsOutput|any) => void): void;
      describeTapes(params: StorageGatewayDescribeTapesInput, callback: (err: StorageGatewayInvalidGatewayRequestException|StorageGatewayInternalServerError|any, data: StorageGatewayDescribeTapesOutput|any) => void): void;
      describeUploadBuffer(params: StorageGatewayDescribeUploadBufferInput, callback: (err: StorageGatewayInvalidGatewayRequestException|StorageGatewayInternalServerError|any, data: StorageGatewayDescribeUploadBufferOutput|any) => void): void;
      describeVTLDevices(params: StorageGatewayDescribeVTLDevicesInput, callback: (err: StorageGatewayInvalidGatewayRequestException|StorageGatewayInternalServerError|any, data: StorageGatewayDescribeVTLDevicesOutput|any) => void): void;
      describeWorkingStorage(params: StorageGatewayDescribeWorkingStorageInput, callback: (err: StorageGatewayInvalidGatewayRequestException|StorageGatewayInternalServerError|any, data: StorageGatewayDescribeWorkingStorageOutput|any) => void): void;
      disableGateway(params: StorageGatewayDisableGatewayInput, callback: (err: StorageGatewayInvalidGatewayRequestException|StorageGatewayInternalServerError|any, data: StorageGatewayDisableGatewayOutput|any) => void): void;
      listGateways(params: StorageGatewayListGatewaysInput, callback: (err: StorageGatewayInvalidGatewayRequestException|StorageGatewayInternalServerError|any, data: StorageGatewayListGatewaysOutput|any) => void): void;
      listLocalDisks(params: StorageGatewayListLocalDisksInput, callback: (err: StorageGatewayInvalidGatewayRequestException|StorageGatewayInternalServerError|any, data: StorageGatewayListLocalDisksOutput|any) => void): void;
      listVolumeRecoveryPoints(params: StorageGatewayListVolumeRecoveryPointsInput, callback: (err: StorageGatewayInvalidGatewayRequestException|StorageGatewayInternalServerError|any, data: StorageGatewayListVolumeRecoveryPointsOutput|any) => void): void;
      listVolumes(params: StorageGatewayListVolumesInput, callback: (err: StorageGatewayInvalidGatewayRequestException|StorageGatewayInternalServerError|any, data: StorageGatewayListVolumesOutput|any) => void): void;
      resetCache(params: StorageGatewayResetCacheInput, callback: (err: StorageGatewayInvalidGatewayRequestException|StorageGatewayInternalServerError|any, data: StorageGatewayResetCacheOutput|any) => void): void;
      retrieveTapeArchive(params: StorageGatewayRetrieveTapeArchiveInput, callback: (err: StorageGatewayInvalidGatewayRequestException|StorageGatewayInternalServerError|any, data: StorageGatewayRetrieveTapeArchiveOutput|any) => void): void;
      retrieveTapeRecoveryPoint(params: StorageGatewayRetrieveTapeRecoveryPointInput, callback: (err: StorageGatewayInvalidGatewayRequestException|StorageGatewayInternalServerError|any, data: StorageGatewayRetrieveTapeRecoveryPointOutput|any) => void): void;
      shutdownGateway(params: StorageGatewayShutdownGatewayInput, callback: (err: StorageGatewayInvalidGatewayRequestException|StorageGatewayInternalServerError|any, data: StorageGatewayShutdownGatewayOutput|any) => void): void;
      startGateway(params: StorageGatewayStartGatewayInput, callback: (err: StorageGatewayInvalidGatewayRequestException|StorageGatewayInternalServerError|any, data: StorageGatewayStartGatewayOutput|any) => void): void;
      updateBandwidthRateLimit(params: StorageGatewayUpdateBandwidthRateLimitInput, callback: (err: StorageGatewayInvalidGatewayRequestException|StorageGatewayInternalServerError|any, data: StorageGatewayUpdateBandwidthRateLimitOutput|any) => void): void;
      updateChapCredentials(params: StorageGatewayUpdateChapCredentialsInput, callback: (err: StorageGatewayInvalidGatewayRequestException|StorageGatewayInternalServerError|any, data: StorageGatewayUpdateChapCredentialsOutput|any) => void): void;
      updateGatewayInformation(params: StorageGatewayUpdateGatewayInformationInput, callback: (err: StorageGatewayInvalidGatewayRequestException|StorageGatewayInternalServerError|any, data: StorageGatewayUpdateGatewayInformationOutput|any) => void): void;
      updateGatewaySoftwareNow(params: StorageGatewayUpdateGatewaySoftwareNowInput, callback: (err: StorageGatewayInvalidGatewayRequestException|StorageGatewayInternalServerError|any, data: StorageGatewayUpdateGatewaySoftwareNowOutput|any) => void): void;
      updateMaintenanceStartTime(params: StorageGatewayUpdateMaintenanceStartTimeInput, callback: (err: StorageGatewayInvalidGatewayRequestException|StorageGatewayInternalServerError|any, data: StorageGatewayUpdateMaintenanceStartTimeOutput|any) => void): void;
      updateSnapshotSchedule(params: StorageGatewayUpdateSnapshotScheduleInput, callback: (err: StorageGatewayInvalidGatewayRequestException|StorageGatewayInternalServerError|any, data: StorageGatewayUpdateSnapshotScheduleOutput|any) => void): void;
      updateVTLDeviceType(params: StorageGatewayUpdateVTLDeviceTypeInput, callback: (err: StorageGatewayInvalidGatewayRequestException|StorageGatewayInternalServerError|any, data: StorageGatewayUpdateVTLDeviceTypeOutput|any) => void): void;
    }

    export interface StorageGatewayActivateGatewayInput {
        ActivationKey: StorageGatewayActivationKey;
        GatewayName: StorageGatewayGatewayName;
        GatewayTimezone: StorageGatewayGatewayTimezone;
        GatewayRegion: StorageGatewayRegionId;
        GatewayType?: StorageGatewayGatewayType;
        TapeDriveType?: StorageGatewayTapeDriveType;
        MediumChangerType?: StorageGatewayMediumChangerType;
    }

    export interface StorageGatewayActivateGatewayOutput {
        GatewayARN?: StorageGatewayGatewayARN;
    }

    export type StorageGatewayActivationKey = string;
    export interface StorageGatewayAddCacheInput {
        GatewayARN: StorageGatewayGatewayARN;
        DiskIds: StorageGatewayDiskIds;
    }

    export interface StorageGatewayAddCacheOutput {
        GatewayARN?: StorageGatewayGatewayARN;
    }

    export interface StorageGatewayAddUploadBufferInput {
        GatewayARN: StorageGatewayGatewayARN;
        DiskIds: StorageGatewayDiskIds;
    }

    export interface StorageGatewayAddUploadBufferOutput {
        GatewayARN?: StorageGatewayGatewayARN;
    }

    export interface StorageGatewayAddWorkingStorageInput {
        GatewayARN: StorageGatewayGatewayARN;
        DiskIds: StorageGatewayDiskIds;
    }

    export interface StorageGatewayAddWorkingStorageOutput {
        GatewayARN?: StorageGatewayGatewayARN;
    }

    export type StorageGatewayBandwidthDownloadRateLimit = number;
    export type StorageGatewayBandwidthType = string;
    export type StorageGatewayBandwidthUploadRateLimit = number;
    export interface StorageGatewayCachediSCSIVolume {
        VolumeARN?: StorageGatewayVolumeARN;
        VolumeId?: StorageGatewayVolumeId;
        VolumeType?: StorageGatewayVolumeType;
        VolumeStatus?: StorageGatewayVolumeStatus;
        VolumeSizeInBytes?: StorageGatewaylong;
        VolumeProgress?: StorageGatewayDoubleObject;
        SourceSnapshotId?: StorageGatewaySnapshotId;
        VolumeiSCSIAttributes?: StorageGatewayVolumeiSCSIAttributes;
    }

    export type StorageGatewayCachediSCSIVolumes = Array<StorageGatewayCachediSCSIVolume>;
    export interface StorageGatewayCancelArchivalInput {
        GatewayARN: StorageGatewayGatewayARN;
        TapeARN: StorageGatewayTapeARN;
    }

    export interface StorageGatewayCancelArchivalOutput {
        TapeARN?: StorageGatewayTapeARN;
    }

    export interface StorageGatewayCancelRetrievalInput {
        GatewayARN: StorageGatewayGatewayARN;
        TapeARN: StorageGatewayTapeARN;
    }

    export interface StorageGatewayCancelRetrievalOutput {
        TapeARN?: StorageGatewayTapeARN;
    }

    export type StorageGatewayChapCredentials = Array<StorageGatewayChapInfo>;
    export interface StorageGatewayChapInfo {
        TargetARN?: StorageGatewayTargetARN;
        SecretToAuthenticateInitiator?: StorageGatewayChapSecret;
        InitiatorName?: StorageGatewayIqnName;
        SecretToAuthenticateTarget?: StorageGatewayChapSecret;
    }

    export type StorageGatewayChapSecret = string;
    export type StorageGatewayClientToken = string;
    export interface StorageGatewayCreateCachediSCSIVolumeInput {
        GatewayARN: StorageGatewayGatewayARN;
        VolumeSizeInBytes: StorageGatewaylong;
        SnapshotId?: StorageGatewaySnapshotId;
        TargetName: StorageGatewayTargetName;
        NetworkInterfaceId: StorageGatewayNetworkInterfaceId;
        ClientToken: StorageGatewayClientToken;
    }

    export interface StorageGatewayCreateCachediSCSIVolumeOutput {
        VolumeARN?: StorageGatewayVolumeARN;
        TargetARN?: StorageGatewayTargetARN;
    }

    export interface StorageGatewayCreateSnapshotFromVolumeRecoveryPointInput {
        VolumeARN: StorageGatewayVolumeARN;
        SnapshotDescription: StorageGatewaySnapshotDescription;
    }

    export interface StorageGatewayCreateSnapshotFromVolumeRecoveryPointOutput {
        SnapshotId?: StorageGatewaySnapshotId;
        VolumeARN?: StorageGatewayVolumeARN;
        VolumeRecoveryPointTime?: StorageGatewaystring;
    }

    export interface StorageGatewayCreateSnapshotInput {
        VolumeARN: StorageGatewayVolumeARN;
        SnapshotDescription: StorageGatewaySnapshotDescription;
    }

    export interface StorageGatewayCreateSnapshotOutput {
        VolumeARN?: StorageGatewayVolumeARN;
        SnapshotId?: StorageGatewaySnapshotId;
    }

    export interface StorageGatewayCreateStorediSCSIVolumeInput {
        GatewayARN: StorageGatewayGatewayARN;
        DiskId: StorageGatewayDiskId;
        SnapshotId?: StorageGatewaySnapshotId;
        PreserveExistingData: StorageGatewayboolean;
        TargetName: StorageGatewayTargetName;
        NetworkInterfaceId: StorageGatewayNetworkInterfaceId;
    }

    export interface StorageGatewayCreateStorediSCSIVolumeOutput {
        VolumeARN?: StorageGatewayVolumeARN;
        VolumeSizeInBytes?: StorageGatewaylong;
        TargetARN?: StorageGatewayTargetARN;
    }

    export interface StorageGatewayCreateTapesInput {
        GatewayARN: StorageGatewayGatewayARN;
        TapeSizeInBytes: StorageGatewayTapeSize;
        ClientToken: StorageGatewayClientToken;
        NumTapesToCreate: StorageGatewayNumTapesToCreate;
        TapeBarcodePrefix: StorageGatewayTapeBarcodePrefix;
    }

    export interface StorageGatewayCreateTapesOutput {
        TapeARNs?: StorageGatewayTapeARNs;
    }

    export type StorageGatewayDayOfWeek = number;
    export interface StorageGatewayDeleteBandwidthRateLimitInput {
        GatewayARN: StorageGatewayGatewayARN;
        BandwidthType: StorageGatewayBandwidthType;
    }

    export interface StorageGatewayDeleteBandwidthRateLimitOutput {
        GatewayARN?: StorageGatewayGatewayARN;
    }

    export interface StorageGatewayDeleteChapCredentialsInput {
        TargetARN: StorageGatewayTargetARN;
        InitiatorName: StorageGatewayIqnName;
    }

    export interface StorageGatewayDeleteChapCredentialsOutput {
        TargetARN?: StorageGatewayTargetARN;
        InitiatorName?: StorageGatewayIqnName;
    }

    export interface StorageGatewayDeleteGatewayInput {
        GatewayARN: StorageGatewayGatewayARN;
    }

    export interface StorageGatewayDeleteGatewayOutput {
        GatewayARN?: StorageGatewayGatewayARN;
    }

    export interface StorageGatewayDeleteSnapshotScheduleInput {
        VolumeARN: StorageGatewayVolumeARN;
    }

    export interface StorageGatewayDeleteSnapshotScheduleOutput {
        VolumeARN?: StorageGatewayVolumeARN;
    }

    export interface StorageGatewayDeleteTapeArchiveInput {
        TapeARN: StorageGatewayTapeARN;
    }

    export interface StorageGatewayDeleteTapeArchiveOutput {
        TapeARN?: StorageGatewayTapeARN;
    }

    export interface StorageGatewayDeleteTapeInput {
        GatewayARN: StorageGatewayGatewayARN;
        TapeARN: StorageGatewayTapeARN;
    }

    export interface StorageGatewayDeleteTapeOutput {
        TapeARN?: StorageGatewayTapeARN;
    }

    export interface StorageGatewayDeleteVolumeInput {
        VolumeARN: StorageGatewayVolumeARN;
    }

    export interface StorageGatewayDeleteVolumeOutput {
        VolumeARN?: StorageGatewayVolumeARN;
    }

    export interface StorageGatewayDescribeBandwidthRateLimitInput {
        GatewayARN: StorageGatewayGatewayARN;
    }

    export interface StorageGatewayDescribeBandwidthRateLimitOutput {
        GatewayARN?: StorageGatewayGatewayARN;
        AverageUploadRateLimitInBitsPerSec?: StorageGatewayBandwidthUploadRateLimit;
        AverageDownloadRateLimitInBitsPerSec?: StorageGatewayBandwidthDownloadRateLimit;
    }

    export interface StorageGatewayDescribeCacheInput {
        GatewayARN: StorageGatewayGatewayARN;
    }

    export interface StorageGatewayDescribeCacheOutput {
        GatewayARN?: StorageGatewayGatewayARN;
        DiskIds?: StorageGatewayDiskIds;
        CacheAllocatedInBytes?: StorageGatewaylong;
        CacheUsedPercentage?: StorageGatewaydouble;
        CacheDirtyPercentage?: StorageGatewaydouble;
        CacheHitPercentage?: StorageGatewaydouble;
        CacheMissPercentage?: StorageGatewaydouble;
    }

    export interface StorageGatewayDescribeCachediSCSIVolumesInput {
        VolumeARNs: StorageGatewayVolumeARNs;
    }

    export interface StorageGatewayDescribeCachediSCSIVolumesOutput {
        CachediSCSIVolumes?: StorageGatewayCachediSCSIVolumes;
    }

    export interface StorageGatewayDescribeChapCredentialsInput {
        TargetARN: StorageGatewayTargetARN;
    }

    export interface StorageGatewayDescribeChapCredentialsOutput {
        ChapCredentials?: StorageGatewayChapCredentials;
    }

    export interface StorageGatewayDescribeGatewayInformationInput {
        GatewayARN: StorageGatewayGatewayARN;
    }

    export interface StorageGatewayDescribeGatewayInformationOutput {
        GatewayARN?: StorageGatewayGatewayARN;
        GatewayId?: StorageGatewayGatewayId;
        GatewayTimezone?: StorageGatewayGatewayTimezone;
        GatewayState?: StorageGatewayGatewayState;
        GatewayNetworkInterfaces?: StorageGatewayGatewayNetworkInterfaces;
        GatewayType?: StorageGatewayGatewayType;
        NextUpdateAvailabilityDate?: StorageGatewayNextUpdateAvailabilityDate;
    }

    export interface StorageGatewayDescribeMaintenanceStartTimeInput {
        GatewayARN: StorageGatewayGatewayARN;
    }

    export interface StorageGatewayDescribeMaintenanceStartTimeOutput {
        GatewayARN?: StorageGatewayGatewayARN;
        HourOfDay?: StorageGatewayHourOfDay;
        MinuteOfHour?: StorageGatewayMinuteOfHour;
        DayOfWeek?: StorageGatewayDayOfWeek;
        Timezone?: StorageGatewayGatewayTimezone;
    }

    export interface StorageGatewayDescribeSnapshotScheduleInput {
        VolumeARN: StorageGatewayVolumeARN;
    }

    export interface StorageGatewayDescribeSnapshotScheduleOutput {
        VolumeARN?: StorageGatewayVolumeARN;
        StartAt?: StorageGatewayHourOfDay;
        RecurrenceInHours?: StorageGatewayRecurrenceInHours;
        Description?: StorageGatewayDescription;
        Timezone?: StorageGatewayGatewayTimezone;
    }

    export interface StorageGatewayDescribeStorediSCSIVolumesInput {
        VolumeARNs: StorageGatewayVolumeARNs;
    }

    export interface StorageGatewayDescribeStorediSCSIVolumesOutput {
        StorediSCSIVolumes?: StorageGatewayStorediSCSIVolumes;
    }

    export interface StorageGatewayDescribeTapeArchivesInput {
        TapeARNs?: StorageGatewayTapeARNs;
        Marker?: StorageGatewayMarker;
        Limit?: StorageGatewayPositiveIntObject;
    }

    export interface StorageGatewayDescribeTapeArchivesOutput {
        TapeArchives?: StorageGatewayTapeArchives;
        Marker?: StorageGatewayMarker;
    }

    export interface StorageGatewayDescribeTapeRecoveryPointsInput {
        GatewayARN: StorageGatewayGatewayARN;
        Marker?: StorageGatewayMarker;
        Limit?: StorageGatewayPositiveIntObject;
    }

    export interface StorageGatewayDescribeTapeRecoveryPointsOutput {
        GatewayARN?: StorageGatewayGatewayARN;
        TapeRecoveryPointInfos?: StorageGatewayTapeRecoveryPointInfos;
        Marker?: StorageGatewayMarker;
    }

    export interface StorageGatewayDescribeTapesInput {
        GatewayARN: StorageGatewayGatewayARN;
        TapeARNs?: StorageGatewayTapeARNs;
        Marker?: StorageGatewayMarker;
        Limit?: StorageGatewayPositiveIntObject;
    }

    export interface StorageGatewayDescribeTapesOutput {
        Tapes?: StorageGatewayTapes;
        Marker?: StorageGatewayMarker;
    }

    export interface StorageGatewayDescribeUploadBufferInput {
        GatewayARN: StorageGatewayGatewayARN;
    }

    export interface StorageGatewayDescribeUploadBufferOutput {
        GatewayARN?: StorageGatewayGatewayARN;
        DiskIds?: StorageGatewayDiskIds;
        UploadBufferUsedInBytes?: StorageGatewaylong;
        UploadBufferAllocatedInBytes?: StorageGatewaylong;
    }

    export interface StorageGatewayDescribeVTLDevicesInput {
        GatewayARN: StorageGatewayGatewayARN;
        VTLDeviceARNs?: StorageGatewayVTLDeviceARNs;
        Marker?: StorageGatewayMarker;
        Limit?: StorageGatewayPositiveIntObject;
    }

    export interface StorageGatewayDescribeVTLDevicesOutput {
        GatewayARN?: StorageGatewayGatewayARN;
        VTLDevices?: StorageGatewayVTLDevices;
        Marker?: StorageGatewayMarker;
    }

    export interface StorageGatewayDescribeWorkingStorageInput {
        GatewayARN: StorageGatewayGatewayARN;
    }

    export interface StorageGatewayDescribeWorkingStorageOutput {
        GatewayARN?: StorageGatewayGatewayARN;
        DiskIds?: StorageGatewayDiskIds;
        WorkingStorageUsedInBytes?: StorageGatewaylong;
        WorkingStorageAllocatedInBytes?: StorageGatewaylong;
    }

    export type StorageGatewayDescription = string;
    export type StorageGatewayDeviceType = string;
    export interface StorageGatewayDeviceiSCSIAttributes {
        TargetARN?: StorageGatewayTargetARN;
        NetworkInterfaceId?: StorageGatewayNetworkInterfaceId;
        NetworkInterfacePort?: StorageGatewayinteger;
        ChapEnabled?: StorageGatewayboolean;
    }

    export interface StorageGatewayDisableGatewayInput {
        GatewayARN: StorageGatewayGatewayARN;
    }

    export interface StorageGatewayDisableGatewayOutput {
        GatewayARN?: StorageGatewayGatewayARN;
    }

    export interface StorageGatewayDisk {
        DiskId?: StorageGatewayDiskId;
        DiskPath?: StorageGatewaystring;
        DiskNode?: StorageGatewaystring;
        DiskStatus?: StorageGatewaystring;
        DiskSizeInBytes?: StorageGatewaylong;
        DiskAllocationType?: StorageGatewayDiskAllocationType;
        DiskAllocationResource?: StorageGatewaystring;
    }

    export type StorageGatewayDiskAllocationType = string;
    export type StorageGatewayDiskId = string;
    export type StorageGatewayDiskIds = Array<StorageGatewayDiskId>;
    export type StorageGatewayDisks = Array<StorageGatewayDisk>;
    export type StorageGatewayDoubleObject = number;
    export type StorageGatewayErrorCode = string;
    export type StorageGatewayGatewayARN = string;
    export type StorageGatewayGatewayId = string;
    export interface StorageGatewayGatewayInfo {
        GatewayARN?: StorageGatewayGatewayARN;
        GatewayType?: StorageGatewayGatewayType;
        GatewayOperationalState?: StorageGatewayGatewayOperationalState;
    }

    export type StorageGatewayGatewayName = string; // pattern: "^[ -\.0-\[\]-~]*[!-\.0-\[\]-~][ -\.0-\[\]-~]*$"
    export type StorageGatewayGatewayNetworkInterfaces = Array<StorageGatewayNetworkInterface>;
    export type StorageGatewayGatewayOperationalState = string;
    export type StorageGatewayGatewayState = string;
    export type StorageGatewayGatewayTimezone = string;
    export type StorageGatewayGatewayType = string;
    export type StorageGatewayGateways = Array<StorageGatewayGatewayInfo>;
    export type StorageGatewayHourOfDay = number;
    export interface StorageGatewayInternalServerError {
        message?: StorageGatewaystring;
        error?: StorageGatewayStorageGatewayError;
    }

    export interface StorageGatewayInvalidGatewayRequestException {
        message?: StorageGatewaystring;
        error?: StorageGatewayStorageGatewayError;
    }

    export type StorageGatewayIqnName = string; // pattern: "[0-9a-z:.-]+"
    export interface StorageGatewayListGatewaysInput {
        Marker?: StorageGatewayMarker;
        Limit?: StorageGatewayPositiveIntObject;
    }

    export interface StorageGatewayListGatewaysOutput {
        Gateways?: StorageGatewayGateways;
        Marker?: StorageGatewayMarker;
    }

    export interface StorageGatewayListLocalDisksInput {
        GatewayARN: StorageGatewayGatewayARN;
    }

    export interface StorageGatewayListLocalDisksOutput {
        GatewayARN?: StorageGatewayGatewayARN;
        Disks?: StorageGatewayDisks;
    }

    export interface StorageGatewayListVolumeRecoveryPointsInput {
        GatewayARN: StorageGatewayGatewayARN;
    }

    export interface StorageGatewayListVolumeRecoveryPointsOutput {
        GatewayARN?: StorageGatewayGatewayARN;
        VolumeRecoveryPointInfos?: StorageGatewayVolumeRecoveryPointInfos;
    }

    export interface StorageGatewayListVolumesInput {
        GatewayARN: StorageGatewayGatewayARN;
        Marker?: StorageGatewayMarker;
        Limit?: StorageGatewayPositiveIntObject;
    }

    export interface StorageGatewayListVolumesOutput {
        GatewayARN?: StorageGatewayGatewayARN;
        Marker?: StorageGatewayMarker;
        VolumeInfos?: StorageGatewayVolumeInfos;
    }

    export type StorageGatewayMarker = string;
    export type StorageGatewayMediumChangerType = string;
    export type StorageGatewayMinuteOfHour = number;
    export interface StorageGatewayNetworkInterface {
        Ipv4Address?: StorageGatewaystring;
        MacAddress?: StorageGatewaystring;
        Ipv6Address?: StorageGatewaystring;
    }

    export type StorageGatewayNetworkInterfaceId = string; // pattern: "\A(25[0-5]|2[0-4]\d|[0-1]?\d?\d)(\.(25[0-5]|2[0-4]\d|[0-1]?\d?\d)){3}\z"
    export type StorageGatewayNextUpdateAvailabilityDate = string;
    export type StorageGatewayNumTapesToCreate = number;
    export type StorageGatewayPositiveIntObject = number;
    export type StorageGatewayRecurrenceInHours = number;
    export type StorageGatewayRegionId = string;
    export interface StorageGatewayResetCacheInput {
        GatewayARN: StorageGatewayGatewayARN;
    }

    export interface StorageGatewayResetCacheOutput {
        GatewayARN?: StorageGatewayGatewayARN;
    }

    export interface StorageGatewayRetrieveTapeArchiveInput {
        TapeARN: StorageGatewayTapeARN;
        GatewayARN: StorageGatewayGatewayARN;
    }

    export interface StorageGatewayRetrieveTapeArchiveOutput {
        TapeARN?: StorageGatewayTapeARN;
    }

    export interface StorageGatewayRetrieveTapeRecoveryPointInput {
        TapeARN: StorageGatewayTapeARN;
        GatewayARN: StorageGatewayGatewayARN;
    }

    export interface StorageGatewayRetrieveTapeRecoveryPointOutput {
        TapeARN?: StorageGatewayTapeARN;
    }

    export interface StorageGatewayShutdownGatewayInput {
        GatewayARN: StorageGatewayGatewayARN;
    }

    export interface StorageGatewayShutdownGatewayOutput {
        GatewayARN?: StorageGatewayGatewayARN;
    }

    export type StorageGatewaySnapshotDescription = string;
    export type StorageGatewaySnapshotId = string; // pattern: "\Asnap-[0-9a-fA-F]{8}\z"
    export interface StorageGatewayStartGatewayInput {
        GatewayARN: StorageGatewayGatewayARN;
    }

    export interface StorageGatewayStartGatewayOutput {
        GatewayARN?: StorageGatewayGatewayARN;
    }

    export interface StorageGatewayStorageGatewayError {
        errorCode?: StorageGatewayErrorCode;
        errorDetails?: StorageGatewayerrorDetails;
    }

    export interface StorageGatewayStorediSCSIVolume {
        VolumeARN?: StorageGatewayVolumeARN;
        VolumeId?: StorageGatewayVolumeId;
        VolumeType?: StorageGatewayVolumeType;
        VolumeStatus?: StorageGatewayVolumeStatus;
        VolumeSizeInBytes?: StorageGatewaylong;
        VolumeProgress?: StorageGatewayDoubleObject;
        VolumeDiskId?: StorageGatewayDiskId;
        SourceSnapshotId?: StorageGatewaySnapshotId;
        PreservedExistingData?: StorageGatewayboolean;
        VolumeiSCSIAttributes?: StorageGatewayVolumeiSCSIAttributes;
    }

    export type StorageGatewayStorediSCSIVolumes = Array<StorageGatewayStorediSCSIVolume>;
    export interface StorageGatewayTape {
        TapeARN?: StorageGatewayTapeARN;
        TapeBarcode?: StorageGatewayTapeBarcode;
        TapeSizeInBytes?: StorageGatewayTapeSize;
        TapeStatus?: StorageGatewayTapeStatus;
        VTLDevice?: StorageGatewayVTLDeviceARN;
        Progress?: StorageGatewayDoubleObject;
    }

    export type StorageGatewayTapeARN = string;
    export type StorageGatewayTapeARNs = Array<StorageGatewayTapeARN>;
    export interface StorageGatewayTapeArchive {
        TapeARN?: StorageGatewayTapeARN;
        TapeBarcode?: StorageGatewayTapeBarcode;
        TapeSizeInBytes?: StorageGatewayTapeSize;
        CompletionTime?: StorageGatewayTime;
        RetrievedTo?: StorageGatewayGatewayARN;
        TapeStatus?: StorageGatewayTapeArchiveStatus;
    }

    export type StorageGatewayTapeArchiveStatus = string;
    export type StorageGatewayTapeArchives = Array<StorageGatewayTapeArchive>;
    export type StorageGatewayTapeBarcode = string; // pattern: "^[A-Z0-9]*$"
    export type StorageGatewayTapeBarcodePrefix = string; // pattern: "^[A-Z]*$"
    export type StorageGatewayTapeDriveType = string;
    export interface StorageGatewayTapeRecoveryPointInfo {
        TapeARN?: StorageGatewayTapeARN;
        TapeRecoveryPointTime?: StorageGatewayTime;
        TapeSizeInBytes?: StorageGatewayTapeSize;
        TapeStatus?: StorageGatewayTapeRecoveryPointStatus;
    }

    export type StorageGatewayTapeRecoveryPointInfos = Array<StorageGatewayTapeRecoveryPointInfo>;
    export type StorageGatewayTapeRecoveryPointStatus = string;
    export type StorageGatewayTapeSize = number;
    export type StorageGatewayTapeStatus = string;
    export type StorageGatewayTapes = Array<StorageGatewayTape>;
    export type StorageGatewayTargetARN = string;
    export type StorageGatewayTargetName = string; // pattern: "^[-\.;a-z0-9]+$"
    export type StorageGatewayTime = number;
    export interface StorageGatewayUpdateBandwidthRateLimitInput {
        GatewayARN: StorageGatewayGatewayARN;
        AverageUploadRateLimitInBitsPerSec?: StorageGatewayBandwidthUploadRateLimit;
        AverageDownloadRateLimitInBitsPerSec?: StorageGatewayBandwidthDownloadRateLimit;
    }

    export interface StorageGatewayUpdateBandwidthRateLimitOutput {
        GatewayARN?: StorageGatewayGatewayARN;
    }

    export interface StorageGatewayUpdateChapCredentialsInput {
        TargetARN: StorageGatewayTargetARN;
        SecretToAuthenticateInitiator: StorageGatewayChapSecret;
        InitiatorName: StorageGatewayIqnName;
        SecretToAuthenticateTarget?: StorageGatewayChapSecret;
    }

    export interface StorageGatewayUpdateChapCredentialsOutput {
        TargetARN?: StorageGatewayTargetARN;
        InitiatorName?: StorageGatewayIqnName;
    }

    export interface StorageGatewayUpdateGatewayInformationInput {
        GatewayARN: StorageGatewayGatewayARN;
        GatewayName?: StorageGatewayGatewayName;
        GatewayTimezone?: StorageGatewayGatewayTimezone;
    }

    export interface StorageGatewayUpdateGatewayInformationOutput {
        GatewayARN?: StorageGatewayGatewayARN;
    }

    export interface StorageGatewayUpdateGatewaySoftwareNowInput {
        GatewayARN: StorageGatewayGatewayARN;
    }

    export interface StorageGatewayUpdateGatewaySoftwareNowOutput {
        GatewayARN?: StorageGatewayGatewayARN;
    }

    export interface StorageGatewayUpdateMaintenanceStartTimeInput {
        GatewayARN: StorageGatewayGatewayARN;
        HourOfDay: StorageGatewayHourOfDay;
        MinuteOfHour: StorageGatewayMinuteOfHour;
        DayOfWeek: StorageGatewayDayOfWeek;
    }

    export interface StorageGatewayUpdateMaintenanceStartTimeOutput {
        GatewayARN?: StorageGatewayGatewayARN;
    }

    export interface StorageGatewayUpdateSnapshotScheduleInput {
        VolumeARN: StorageGatewayVolumeARN;
        StartAt: StorageGatewayHourOfDay;
        RecurrenceInHours: StorageGatewayRecurrenceInHours;
        Description?: StorageGatewayDescription;
    }

    export interface StorageGatewayUpdateSnapshotScheduleOutput {
        VolumeARN?: StorageGatewayVolumeARN;
    }

    export interface StorageGatewayUpdateVTLDeviceTypeInput {
        VTLDeviceARN: StorageGatewayVTLDeviceARN;
        DeviceType: StorageGatewayDeviceType;
    }

    export interface StorageGatewayUpdateVTLDeviceTypeOutput {
        VTLDeviceARN?: StorageGatewayVTLDeviceARN;
    }

    export interface StorageGatewayVTLDevice {
        VTLDeviceARN?: StorageGatewayVTLDeviceARN;
        VTLDeviceType?: StorageGatewayVTLDeviceType;
        VTLDeviceVendor?: StorageGatewayVTLDeviceVendor;
        VTLDeviceProductIdentifier?: StorageGatewayVTLDeviceProductIdentifier;
        DeviceiSCSIAttributes?: StorageGatewayDeviceiSCSIAttributes;
    }

    export type StorageGatewayVTLDeviceARN = string;
    export type StorageGatewayVTLDeviceARNs = Array<StorageGatewayVTLDeviceARN>;
    export type StorageGatewayVTLDeviceProductIdentifier = string;
    export type StorageGatewayVTLDeviceType = string;
    export type StorageGatewayVTLDeviceVendor = string;
    export type StorageGatewayVTLDevices = Array<StorageGatewayVTLDevice>;
    export type StorageGatewayVolumeARN = string;
    export type StorageGatewayVolumeARNs = Array<StorageGatewayVolumeARN>;
    export type StorageGatewayVolumeId = string;
    export interface StorageGatewayVolumeInfo {
        VolumeARN?: StorageGatewayVolumeARN;
        VolumeType?: StorageGatewayVolumeType;
    }

    export type StorageGatewayVolumeInfos = Array<StorageGatewayVolumeInfo>;
    export interface StorageGatewayVolumeRecoveryPointInfo {
        VolumeARN?: StorageGatewayVolumeARN;
        VolumeSizeInBytes?: StorageGatewaylong;
        VolumeUsageInBytes?: StorageGatewaylong;
        VolumeRecoveryPointTime?: StorageGatewaystring;
    }

    export type StorageGatewayVolumeRecoveryPointInfos = Array<StorageGatewayVolumeRecoveryPointInfo>;
    export type StorageGatewayVolumeStatus = string;
    export type StorageGatewayVolumeType = string;
    export interface StorageGatewayVolumeiSCSIAttributes {
        TargetARN?: StorageGatewayTargetARN;
        NetworkInterfaceId?: StorageGatewayNetworkInterfaceId;
        NetworkInterfacePort?: StorageGatewayinteger;
        LunNumber?: StorageGatewayPositiveIntObject;
        ChapEnabled?: StorageGatewayboolean;
    }

    export type StorageGatewayboolean = boolean;
    export type StorageGatewaydouble = number;
    export type StorageGatewayerrorDetails = any; // not really - it was 'map' instead - must fix this one
    export type StorageGatewayinteger = number;
    export type StorageGatewaylong = number;
    export type StorageGatewaystring = string;
}
