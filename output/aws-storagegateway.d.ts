// DO NOT EDIT!
//

///<reference path="./aws-sdk-common.d.ts" />
declare module "aws-sdk" {

    export class StorageGateway extends Service {
      constructor(options?: any);
      activateGateway(params: StorageGatewayActivateGatewayInput, callback?: (err: StorageGatewayInvalidGatewayRequestException|StorageGatewayInternalServerError|any, data: StorageGatewayActivateGatewayOutput|any) => void): Request;
      addCache(params: StorageGatewayAddCacheInput, callback?: (err: StorageGatewayInvalidGatewayRequestException|StorageGatewayInternalServerError|any, data: StorageGatewayAddCacheOutput|any) => void): Request;
      addTagsToResource(params: StorageGatewayAddTagsToResourceInput, callback?: (err: StorageGatewayInvalidGatewayRequestException|StorageGatewayInternalServerError|any, data: StorageGatewayAddTagsToResourceOutput|any) => void): Request;
      addUploadBuffer(params: StorageGatewayAddUploadBufferInput, callback?: (err: StorageGatewayInvalidGatewayRequestException|StorageGatewayInternalServerError|any, data: StorageGatewayAddUploadBufferOutput|any) => void): Request;
      addWorkingStorage(params: StorageGatewayAddWorkingStorageInput, callback?: (err: StorageGatewayInvalidGatewayRequestException|StorageGatewayInternalServerError|any, data: StorageGatewayAddWorkingStorageOutput|any) => void): Request;
      cancelArchival(params: StorageGatewayCancelArchivalInput, callback?: (err: StorageGatewayInvalidGatewayRequestException|StorageGatewayInternalServerError|any, data: StorageGatewayCancelArchivalOutput|any) => void): Request;
      cancelRetrieval(params: StorageGatewayCancelRetrievalInput, callback?: (err: StorageGatewayInvalidGatewayRequestException|StorageGatewayInternalServerError|any, data: StorageGatewayCancelRetrievalOutput|any) => void): Request;
      createCachediSCSIVolume(params: StorageGatewayCreateCachediSCSIVolumeInput, callback?: (err: StorageGatewayInvalidGatewayRequestException|StorageGatewayInternalServerError|any, data: StorageGatewayCreateCachediSCSIVolumeOutput|any) => void): Request;
      createSnapshot(params: StorageGatewayCreateSnapshotInput, callback?: (err: StorageGatewayInvalidGatewayRequestException|StorageGatewayInternalServerError|any, data: StorageGatewayCreateSnapshotOutput|any) => void): Request;
      createSnapshotFromVolumeRecoveryPoint(params: StorageGatewayCreateSnapshotFromVolumeRecoveryPointInput, callback?: (err: StorageGatewayInvalidGatewayRequestException|StorageGatewayInternalServerError|any, data: StorageGatewayCreateSnapshotFromVolumeRecoveryPointOutput|any) => void): Request;
      createStorediSCSIVolume(params: StorageGatewayCreateStorediSCSIVolumeInput, callback?: (err: StorageGatewayInvalidGatewayRequestException|StorageGatewayInternalServerError|any, data: StorageGatewayCreateStorediSCSIVolumeOutput|any) => void): Request;
      createTapes(params: StorageGatewayCreateTapesInput, callback?: (err: StorageGatewayInvalidGatewayRequestException|StorageGatewayInternalServerError|any, data: StorageGatewayCreateTapesOutput|any) => void): Request;
      deleteBandwidthRateLimit(params: StorageGatewayDeleteBandwidthRateLimitInput, callback?: (err: StorageGatewayInvalidGatewayRequestException|StorageGatewayInternalServerError|any, data: StorageGatewayDeleteBandwidthRateLimitOutput|any) => void): Request;
      deleteChapCredentials(params: StorageGatewayDeleteChapCredentialsInput, callback?: (err: StorageGatewayInvalidGatewayRequestException|StorageGatewayInternalServerError|any, data: StorageGatewayDeleteChapCredentialsOutput|any) => void): Request;
      deleteGateway(params: StorageGatewayDeleteGatewayInput, callback?: (err: StorageGatewayInvalidGatewayRequestException|StorageGatewayInternalServerError|any, data: StorageGatewayDeleteGatewayOutput|any) => void): Request;
      deleteSnapshotSchedule(params: StorageGatewayDeleteSnapshotScheduleInput, callback?: (err: StorageGatewayInvalidGatewayRequestException|StorageGatewayInternalServerError|any, data: StorageGatewayDeleteSnapshotScheduleOutput|any) => void): Request;
      deleteTape(params: StorageGatewayDeleteTapeInput, callback?: (err: StorageGatewayInvalidGatewayRequestException|StorageGatewayInternalServerError|any, data: StorageGatewayDeleteTapeOutput|any) => void): Request;
      deleteTapeArchive(params: StorageGatewayDeleteTapeArchiveInput, callback?: (err: StorageGatewayInvalidGatewayRequestException|StorageGatewayInternalServerError|any, data: StorageGatewayDeleteTapeArchiveOutput|any) => void): Request;
      deleteVolume(params: StorageGatewayDeleteVolumeInput, callback?: (err: StorageGatewayInvalidGatewayRequestException|StorageGatewayInternalServerError|any, data: StorageGatewayDeleteVolumeOutput|any) => void): Request;
      describeBandwidthRateLimit(params: StorageGatewayDescribeBandwidthRateLimitInput, callback?: (err: StorageGatewayInvalidGatewayRequestException|StorageGatewayInternalServerError|any, data: StorageGatewayDescribeBandwidthRateLimitOutput|any) => void): Request;
      describeCache(params: StorageGatewayDescribeCacheInput, callback?: (err: StorageGatewayInvalidGatewayRequestException|StorageGatewayInternalServerError|any, data: StorageGatewayDescribeCacheOutput|any) => void): Request;
      describeCachediSCSIVolumes(params: StorageGatewayDescribeCachediSCSIVolumesInput, callback?: (err: StorageGatewayInvalidGatewayRequestException|StorageGatewayInternalServerError|any, data: StorageGatewayDescribeCachediSCSIVolumesOutput|any) => void): Request;
      describeChapCredentials(params: StorageGatewayDescribeChapCredentialsInput, callback?: (err: StorageGatewayInvalidGatewayRequestException|StorageGatewayInternalServerError|any, data: StorageGatewayDescribeChapCredentialsOutput|any) => void): Request;
      describeGatewayInformation(params: StorageGatewayDescribeGatewayInformationInput, callback?: (err: StorageGatewayInvalidGatewayRequestException|StorageGatewayInternalServerError|any, data: StorageGatewayDescribeGatewayInformationOutput|any) => void): Request;
      describeMaintenanceStartTime(params: StorageGatewayDescribeMaintenanceStartTimeInput, callback?: (err: StorageGatewayInvalidGatewayRequestException|StorageGatewayInternalServerError|any, data: StorageGatewayDescribeMaintenanceStartTimeOutput|any) => void): Request;
      describeSnapshotSchedule(params: StorageGatewayDescribeSnapshotScheduleInput, callback?: (err: StorageGatewayInvalidGatewayRequestException|StorageGatewayInternalServerError|any, data: StorageGatewayDescribeSnapshotScheduleOutput|any) => void): Request;
      describeStorediSCSIVolumes(params: StorageGatewayDescribeStorediSCSIVolumesInput, callback?: (err: StorageGatewayInvalidGatewayRequestException|StorageGatewayInternalServerError|any, data: StorageGatewayDescribeStorediSCSIVolumesOutput|any) => void): Request;
      describeTapeArchives(params: StorageGatewayDescribeTapeArchivesInput, callback?: (err: StorageGatewayInvalidGatewayRequestException|StorageGatewayInternalServerError|any, data: StorageGatewayDescribeTapeArchivesOutput|any) => void): Request;
      describeTapeRecoveryPoints(params: StorageGatewayDescribeTapeRecoveryPointsInput, callback?: (err: StorageGatewayInvalidGatewayRequestException|StorageGatewayInternalServerError|any, data: StorageGatewayDescribeTapeRecoveryPointsOutput|any) => void): Request;
      describeTapes(params: StorageGatewayDescribeTapesInput, callback?: (err: StorageGatewayInvalidGatewayRequestException|StorageGatewayInternalServerError|any, data: StorageGatewayDescribeTapesOutput|any) => void): Request;
      describeUploadBuffer(params: StorageGatewayDescribeUploadBufferInput, callback?: (err: StorageGatewayInvalidGatewayRequestException|StorageGatewayInternalServerError|any, data: StorageGatewayDescribeUploadBufferOutput|any) => void): Request;
      describeVTLDevices(params: StorageGatewayDescribeVTLDevicesInput, callback?: (err: StorageGatewayInvalidGatewayRequestException|StorageGatewayInternalServerError|any, data: StorageGatewayDescribeVTLDevicesOutput|any) => void): Request;
      describeWorkingStorage(params: StorageGatewayDescribeWorkingStorageInput, callback?: (err: StorageGatewayInvalidGatewayRequestException|StorageGatewayInternalServerError|any, data: StorageGatewayDescribeWorkingStorageOutput|any) => void): Request;
      disableGateway(params: StorageGatewayDisableGatewayInput, callback?: (err: StorageGatewayInvalidGatewayRequestException|StorageGatewayInternalServerError|any, data: StorageGatewayDisableGatewayOutput|any) => void): Request;
      listGateways(params: StorageGatewayListGatewaysInput, callback?: (err: StorageGatewayInvalidGatewayRequestException|StorageGatewayInternalServerError|any, data: StorageGatewayListGatewaysOutput|any) => void): Request;
      listLocalDisks(params: StorageGatewayListLocalDisksInput, callback?: (err: StorageGatewayInvalidGatewayRequestException|StorageGatewayInternalServerError|any, data: StorageGatewayListLocalDisksOutput|any) => void): Request;
      listTagsForResource(params: StorageGatewayListTagsForResourceInput, callback?: (err: StorageGatewayInvalidGatewayRequestException|StorageGatewayInternalServerError|any, data: StorageGatewayListTagsForResourceOutput|any) => void): Request;
      listVolumeInitiators(params: StorageGatewayListVolumeInitiatorsInput, callback?: (err: StorageGatewayInvalidGatewayRequestException|StorageGatewayInternalServerError|any, data: StorageGatewayListVolumeInitiatorsOutput|any) => void): Request;
      listVolumeRecoveryPoints(params: StorageGatewayListVolumeRecoveryPointsInput, callback?: (err: StorageGatewayInvalidGatewayRequestException|StorageGatewayInternalServerError|any, data: StorageGatewayListVolumeRecoveryPointsOutput|any) => void): Request;
      listVolumes(params: StorageGatewayListVolumesInput, callback?: (err: StorageGatewayInvalidGatewayRequestException|StorageGatewayInternalServerError|any, data: StorageGatewayListVolumesOutput|any) => void): Request;
      removeTagsFromResource(params: StorageGatewayRemoveTagsFromResourceInput, callback?: (err: StorageGatewayInvalidGatewayRequestException|StorageGatewayInternalServerError|any, data: StorageGatewayRemoveTagsFromResourceOutput|any) => void): Request;
      resetCache(params: StorageGatewayResetCacheInput, callback?: (err: StorageGatewayInvalidGatewayRequestException|StorageGatewayInternalServerError|any, data: StorageGatewayResetCacheOutput|any) => void): Request;
      retrieveTapeArchive(params: StorageGatewayRetrieveTapeArchiveInput, callback?: (err: StorageGatewayInvalidGatewayRequestException|StorageGatewayInternalServerError|any, data: StorageGatewayRetrieveTapeArchiveOutput|any) => void): Request;
      retrieveTapeRecoveryPoint(params: StorageGatewayRetrieveTapeRecoveryPointInput, callback?: (err: StorageGatewayInvalidGatewayRequestException|StorageGatewayInternalServerError|any, data: StorageGatewayRetrieveTapeRecoveryPointOutput|any) => void): Request;
      shutdownGateway(params: StorageGatewayShutdownGatewayInput, callback?: (err: StorageGatewayInvalidGatewayRequestException|StorageGatewayInternalServerError|any, data: StorageGatewayShutdownGatewayOutput|any) => void): Request;
      startGateway(params: StorageGatewayStartGatewayInput, callback?: (err: StorageGatewayInvalidGatewayRequestException|StorageGatewayInternalServerError|any, data: StorageGatewayStartGatewayOutput|any) => void): Request;
      updateBandwidthRateLimit(params: StorageGatewayUpdateBandwidthRateLimitInput, callback?: (err: StorageGatewayInvalidGatewayRequestException|StorageGatewayInternalServerError|any, data: StorageGatewayUpdateBandwidthRateLimitOutput|any) => void): Request;
      updateChapCredentials(params: StorageGatewayUpdateChapCredentialsInput, callback?: (err: StorageGatewayInvalidGatewayRequestException|StorageGatewayInternalServerError|any, data: StorageGatewayUpdateChapCredentialsOutput|any) => void): Request;
      updateGatewayInformation(params: StorageGatewayUpdateGatewayInformationInput, callback?: (err: StorageGatewayInvalidGatewayRequestException|StorageGatewayInternalServerError|any, data: StorageGatewayUpdateGatewayInformationOutput|any) => void): Request;
      updateGatewaySoftwareNow(params: StorageGatewayUpdateGatewaySoftwareNowInput, callback?: (err: StorageGatewayInvalidGatewayRequestException|StorageGatewayInternalServerError|any, data: StorageGatewayUpdateGatewaySoftwareNowOutput|any) => void): Request;
      updateMaintenanceStartTime(params: StorageGatewayUpdateMaintenanceStartTimeInput, callback?: (err: StorageGatewayInvalidGatewayRequestException|StorageGatewayInternalServerError|any, data: StorageGatewayUpdateMaintenanceStartTimeOutput|any) => void): Request;
      updateSnapshotSchedule(params: StorageGatewayUpdateSnapshotScheduleInput, callback?: (err: StorageGatewayInvalidGatewayRequestException|StorageGatewayInternalServerError|any, data: StorageGatewayUpdateSnapshotScheduleOutput|any) => void): Request;
      updateVTLDeviceType(params: StorageGatewayUpdateVTLDeviceTypeInput, callback?: (err: StorageGatewayInvalidGatewayRequestException|StorageGatewayInternalServerError|any, data: StorageGatewayUpdateVTLDeviceTypeOutput|any) => void): Request;
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

    export interface StorageGatewayAddTagsToResourceInput {
        ResourceARN: StorageGatewayResourceARN;
        Tags: StorageGatewayTags;
    }

    export interface StorageGatewayAddTagsToResourceOutput {
        ResourceARN?: StorageGatewayResourceARN;
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
        GatewayName?: StorageGatewaystring;
        GatewayTimezone?: StorageGatewayGatewayTimezone;
        GatewayState?: StorageGatewayGatewayState;
        GatewayNetworkInterfaces?: StorageGatewayGatewayNetworkInterfaces;
        GatewayType?: StorageGatewayGatewayType;
        NextUpdateAvailabilityDate?: StorageGatewayNextUpdateAvailabilityDate;
        LastSoftwareUpdate?: StorageGatewayLastSoftwareUpdate;
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
        GatewayName?: StorageGatewaystring;
    }

    export type StorageGatewayGatewayName = string; // pattern: "^[ -\.0-\[\]-~]*[!-\.0-\[\]-~][ -\.0-\[\]-~]*$"
    export type StorageGatewayGatewayNetworkInterfaces = Array<StorageGatewayNetworkInterface>;
    export type StorageGatewayGatewayOperationalState = string;
    export type StorageGatewayGatewayState = string;
    export type StorageGatewayGatewayTimezone = string;
    export type StorageGatewayGatewayType = string;
    export type StorageGatewayGateways = Array<StorageGatewayGatewayInfo>;
    export type StorageGatewayHourOfDay = number;
    export type StorageGatewayInitiator = string;
    export type StorageGatewayInitiators = Array<StorageGatewayInitiator>;
    export interface StorageGatewayInternalServerError {
        message?: StorageGatewaystring;
        error?: StorageGatewayStorageGatewayError;
    }

    export interface StorageGatewayInvalidGatewayRequestException {
        message?: StorageGatewaystring;
        error?: StorageGatewayStorageGatewayError;
    }

    export type StorageGatewayIqnName = string; // pattern: "[0-9a-z:.-]+"
    export type StorageGatewayLastSoftwareUpdate = string;
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

    export interface StorageGatewayListTagsForResourceInput {
        ResourceARN?: StorageGatewayResourceARN;
        Marker?: StorageGatewayMarker;
        Limit?: StorageGatewayPositiveIntObject;
    }

    export interface StorageGatewayListTagsForResourceOutput {
        ResourceARN?: StorageGatewayResourceARN;
        Marker?: StorageGatewayMarker;
        Tags?: StorageGatewayTags;
    }

    export interface StorageGatewayListVolumeInitiatorsInput {
        VolumeARN: StorageGatewayVolumeARN;
    }

    export interface StorageGatewayListVolumeInitiatorsOutput {
        Initiators?: StorageGatewayInitiators;
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
    export interface StorageGatewayRemoveTagsFromResourceInput {
        ResourceARN?: StorageGatewayResourceARN;
        TagKeys?: StorageGatewayTagKeys;
    }

    export interface StorageGatewayRemoveTagsFromResourceOutput {
        ResourceARN?: StorageGatewayResourceARN;
    }

    export interface StorageGatewayResetCacheInput {
        GatewayARN: StorageGatewayGatewayARN;
    }

    export interface StorageGatewayResetCacheOutput {
        GatewayARN?: StorageGatewayGatewayARN;
    }

    export type StorageGatewayResourceARN = string;
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
    export interface StorageGatewayTag {
        Key: StorageGatewayTagKey;
        Value: StorageGatewayTagValue;
    }

    export type StorageGatewayTagKey = string; // pattern: "^([\p{L}\p{Z}\p{N}_.:/=+\-%@]*)$"
    export type StorageGatewayTagKeys = Array<StorageGatewayTagKey>;
    export type StorageGatewayTagValue = string;
    export type StorageGatewayTags = Array<StorageGatewayTag>;
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
        GatewayName?: StorageGatewaystring;
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
