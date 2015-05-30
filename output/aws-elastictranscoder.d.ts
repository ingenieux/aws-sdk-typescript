// DO NOT EDIT!
//
declare module "aws-sdk" {
    export class ElasticTranscoder {
      constructor(options?: any);
      cancelJob(params: ElasticTranscoderCancelJobRequest, callback: (err: ElasticTranscoderValidationException|ElasticTranscoderIncompatibleVersionException|ElasticTranscoderResourceNotFoundException|ElasticTranscoderResourceInUseException|ElasticTranscoderAccessDeniedException|ElasticTranscoderInternalServiceException|any, data: ElasticTranscoderCancelJobResponse|any) => void): void;
      createJob(params: ElasticTranscoderCreateJobRequest, callback: (err: ElasticTranscoderValidationException|ElasticTranscoderIncompatibleVersionException|ElasticTranscoderResourceNotFoundException|ElasticTranscoderAccessDeniedException|ElasticTranscoderLimitExceededException|ElasticTranscoderInternalServiceException|any, data: ElasticTranscoderCreateJobResponse|any) => void): void;
      createPipeline(params: ElasticTranscoderCreatePipelineRequest, callback: (err: ElasticTranscoderValidationException|ElasticTranscoderIncompatibleVersionException|ElasticTranscoderAccessDeniedException|ElasticTranscoderResourceNotFoundException|ElasticTranscoderLimitExceededException|ElasticTranscoderInternalServiceException|any, data: ElasticTranscoderCreatePipelineResponse|any) => void): void;
      createPreset(params: ElasticTranscoderCreatePresetRequest, callback: (err: ElasticTranscoderValidationException|ElasticTranscoderIncompatibleVersionException|ElasticTranscoderAccessDeniedException|ElasticTranscoderLimitExceededException|ElasticTranscoderInternalServiceException|any, data: ElasticTranscoderCreatePresetResponse|any) => void): void;
      deletePipeline(params: ElasticTranscoderDeletePipelineRequest, callback: (err: ElasticTranscoderValidationException|ElasticTranscoderIncompatibleVersionException|ElasticTranscoderResourceNotFoundException|ElasticTranscoderResourceInUseException|ElasticTranscoderAccessDeniedException|ElasticTranscoderInternalServiceException|any, data: ElasticTranscoderDeletePipelineResponse|any) => void): void;
      deletePreset(params: ElasticTranscoderDeletePresetRequest, callback: (err: ElasticTranscoderValidationException|ElasticTranscoderIncompatibleVersionException|ElasticTranscoderResourceNotFoundException|ElasticTranscoderAccessDeniedException|ElasticTranscoderInternalServiceException|any, data: ElasticTranscoderDeletePresetResponse|any) => void): void;
      listJobsByPipeline(params: ElasticTranscoderListJobsByPipelineRequest, callback: (err: ElasticTranscoderValidationException|ElasticTranscoderIncompatibleVersionException|ElasticTranscoderResourceNotFoundException|ElasticTranscoderAccessDeniedException|ElasticTranscoderInternalServiceException|any, data: ElasticTranscoderListJobsByPipelineResponse|any) => void): void;
      listJobsByStatus(params: ElasticTranscoderListJobsByStatusRequest, callback: (err: ElasticTranscoderValidationException|ElasticTranscoderIncompatibleVersionException|ElasticTranscoderResourceNotFoundException|ElasticTranscoderAccessDeniedException|ElasticTranscoderInternalServiceException|any, data: ElasticTranscoderListJobsByStatusResponse|any) => void): void;
      listPipelines(params: ElasticTranscoderListPipelinesRequest, callback: (err: ElasticTranscoderValidationException|ElasticTranscoderIncompatibleVersionException|ElasticTranscoderAccessDeniedException|ElasticTranscoderInternalServiceException|any, data: ElasticTranscoderListPipelinesResponse|any) => void): void;
      listPresets(params: ElasticTranscoderListPresetsRequest, callback: (err: ElasticTranscoderValidationException|ElasticTranscoderIncompatibleVersionException|ElasticTranscoderAccessDeniedException|ElasticTranscoderInternalServiceException|any, data: ElasticTranscoderListPresetsResponse|any) => void): void;
      readJob(params: ElasticTranscoderReadJobRequest, callback: (err: ElasticTranscoderValidationException|ElasticTranscoderIncompatibleVersionException|ElasticTranscoderResourceNotFoundException|ElasticTranscoderAccessDeniedException|ElasticTranscoderInternalServiceException|any, data: ElasticTranscoderReadJobResponse|any) => void): void;
      readPipeline(params: ElasticTranscoderReadPipelineRequest, callback: (err: ElasticTranscoderValidationException|ElasticTranscoderIncompatibleVersionException|ElasticTranscoderResourceNotFoundException|ElasticTranscoderAccessDeniedException|ElasticTranscoderInternalServiceException|any, data: ElasticTranscoderReadPipelineResponse|any) => void): void;
      readPreset(params: ElasticTranscoderReadPresetRequest, callback: (err: ElasticTranscoderValidationException|ElasticTranscoderIncompatibleVersionException|ElasticTranscoderResourceNotFoundException|ElasticTranscoderAccessDeniedException|ElasticTranscoderInternalServiceException|any, data: ElasticTranscoderReadPresetResponse|any) => void): void;
      testRole(params: ElasticTranscoderTestRoleRequest, callback: (err: ElasticTranscoderValidationException|ElasticTranscoderIncompatibleVersionException|ElasticTranscoderResourceNotFoundException|ElasticTranscoderAccessDeniedException|ElasticTranscoderInternalServiceException|any, data: ElasticTranscoderTestRoleResponse|any) => void): void;
      updatePipeline(params: ElasticTranscoderUpdatePipelineRequest, callback: (err: ElasticTranscoderValidationException|ElasticTranscoderIncompatibleVersionException|ElasticTranscoderAccessDeniedException|ElasticTranscoderResourceInUseException|ElasticTranscoderResourceNotFoundException|ElasticTranscoderInternalServiceException|any, data: ElasticTranscoderUpdatePipelineResponse|any) => void): void;
      updatePipelineNotifications(params: ElasticTranscoderUpdatePipelineNotificationsRequest, callback: (err: ElasticTranscoderValidationException|ElasticTranscoderIncompatibleVersionException|ElasticTranscoderResourceNotFoundException|ElasticTranscoderResourceInUseException|ElasticTranscoderAccessDeniedException|ElasticTranscoderInternalServiceException|any, data: ElasticTranscoderUpdatePipelineNotificationsResponse|any) => void): void;
      updatePipelineStatus(params: ElasticTranscoderUpdatePipelineStatusRequest, callback: (err: ElasticTranscoderValidationException|ElasticTranscoderIncompatibleVersionException|ElasticTranscoderResourceNotFoundException|ElasticTranscoderResourceInUseException|ElasticTranscoderAccessDeniedException|ElasticTranscoderInternalServiceException|any, data: ElasticTranscoderUpdatePipelineStatusResponse|any) => void): void;
    }

    export type ElasticTranscoderAccessControl = string; // pattern: "(^FullControl$)|(^Read$)|(^ReadAcp$)|(^WriteAcp$)"
    export type ElasticTranscoderAccessControls = Array<ElasticTranscoderAccessControl>; // max: 30
    export interface ElasticTranscoderAccessDeniedException {
    }

    export interface ElasticTranscoderArtwork {
        InputKey?: ElasticTranscoderWatermarkKey;
        MaxWidth?: ElasticTranscoderDigitsOrAuto;
        MaxHeight?: ElasticTranscoderDigitsOrAuto;
        SizingPolicy?: ElasticTranscoderSizingPolicy;
        PaddingPolicy?: ElasticTranscoderPaddingPolicy;
        AlbumArtFormat?: ElasticTranscoderJpgOrPng;
        Encryption?: ElasticTranscoderEncryption;
    }

    export type ElasticTranscoderArtworks = Array<ElasticTranscoderArtwork>;
    export type ElasticTranscoderAscending = string; // pattern: "(^true$)|(^false$)"
    export type ElasticTranscoderAspectRatio = string; // pattern: "(^auto$)|(^1:1$)|(^4:3$)|(^3:2$)|(^16:9$)"
    export type ElasticTranscoderAudioBitDepth = string; // pattern: "(^16$)|(^24$)"
    export type ElasticTranscoderAudioBitOrder = string; // pattern: "(^LittleEndian$)"
    export type ElasticTranscoderAudioBitRate = string; // pattern: "^\d{1,3}$"
    export type ElasticTranscoderAudioChannels = string; // pattern: "(^auto$)|(^0$)|(^1$)|(^2$)"
    export type ElasticTranscoderAudioCodec = string; // pattern: "(^AAC$)|(^vorbis$)|(^mp3$)|(^mp2$)|(^pcm$)|(^flac$)"
    export interface ElasticTranscoderAudioCodecOptions {
        Profile?: ElasticTranscoderAudioCodecProfile;
        BitDepth?: ElasticTranscoderAudioBitDepth;
        BitOrder?: ElasticTranscoderAudioBitOrder;
        Signed?: ElasticTranscoderAudioSigned;
    }

    export type ElasticTranscoderAudioCodecProfile = string; // pattern: "(^auto$)|(^AAC-LC$)|(^HE-AAC$)|(^HE-AACv2$)"
    export type ElasticTranscoderAudioPackingMode = string; // pattern: "(^SingleTrack$)|(^OneChannelPerTrack$)|(^OneChannelPerTrackWithMosTo8Tracks$)"
    export interface ElasticTranscoderAudioParameters {
        Codec?: ElasticTranscoderAudioCodec;
        SampleRate?: ElasticTranscoderAudioSampleRate;
        BitRate?: ElasticTranscoderAudioBitRate;
        Channels?: ElasticTranscoderAudioChannels;
        AudioPackingMode?: ElasticTranscoderAudioPackingMode;
        CodecOptions?: ElasticTranscoderAudioCodecOptions;
    }

    export type ElasticTranscoderAudioSampleRate = string; // pattern: "(^auto$)|(^22050$)|(^32000$)|(^44100$)|(^48000$)|(^96000$)|(^192000$)"
    export type ElasticTranscoderAudioSigned = string; // pattern: "(^Signed$)"
    export type ElasticTranscoderBase64EncodedString = string; // pattern: "^$|(^(?:[A-Za-z0-9\+/]{4})*(?:[A-Za-z0-9\+/]{2}==|[A-Za-z0-9\+/]{3}=)?$)"
    export type ElasticTranscoderBucketName = string; // pattern: "^(\w|\.|-){1,255}$"
    export interface ElasticTranscoderCancelJobRequest {
        Id: ElasticTranscoderId;
    }

    export interface ElasticTranscoderCancelJobResponse {
    }

    export interface ElasticTranscoderCaptionFormat {
        Format?: ElasticTranscoderCaptionFormatFormat;
        Pattern?: ElasticTranscoderCaptionFormatPattern;
        Encryption?: ElasticTranscoderEncryption;
    }

    export type ElasticTranscoderCaptionFormatFormat = string; // pattern: "(^mov-text$)|(^srt$)|(^scc$)|(^webvtt$)|(^dfxp$)"
    export type ElasticTranscoderCaptionFormatPattern = string; // pattern: "(^$)|(^.*\{language\}.*$)"
    export type ElasticTranscoderCaptionFormats = Array<ElasticTranscoderCaptionFormat>; // max: 4
    export type ElasticTranscoderCaptionMergePolicy = string; // pattern: "(^MergeOverride$)|(^MergeRetain$)|(^Override$)"
    export interface ElasticTranscoderCaptionSource {
        Key?: ElasticTranscoderKey;
        Language?: ElasticTranscoderKey;
        TimeOffset?: ElasticTranscoderTimeOffset;
        Label?: ElasticTranscoderName;
        Encryption?: ElasticTranscoderEncryption;
    }

    export type ElasticTranscoderCaptionSources = Array<ElasticTranscoderCaptionSource>; // max: 20
    export interface ElasticTranscoderCaptions {
        MergePolicy?: ElasticTranscoderCaptionMergePolicy;
        CaptionSources?: ElasticTranscoderCaptionSources;
        CaptionFormats?: ElasticTranscoderCaptionFormats;
    }

    export interface ElasticTranscoderClip {
        TimeSpan?: ElasticTranscoderTimeSpan;
    }

    export type ElasticTranscoderCodecOption = string;
    export type ElasticTranscoderCodecOptions = any; // not really - it was 'map' instead - must fix this one
    export type ElasticTranscoderComposition = Array<ElasticTranscoderClip>;
    export interface ElasticTranscoderCreateJobOutput {
        Key?: ElasticTranscoderKey;
        ThumbnailPattern?: ElasticTranscoderThumbnailPattern;
        ThumbnailEncryption?: ElasticTranscoderEncryption;
        Rotate?: ElasticTranscoderRotate;
        PresetId?: ElasticTranscoderId;
        SegmentDuration?: ElasticTranscoderFloatString;
        Watermarks?: ElasticTranscoderJobWatermarks;
        AlbumArt?: ElasticTranscoderJobAlbumArt;
        Composition?: ElasticTranscoderComposition;
        Captions?: ElasticTranscoderCaptions;
        Encryption?: ElasticTranscoderEncryption;
    }

    export type ElasticTranscoderCreateJobOutputs = Array<ElasticTranscoderCreateJobOutput>; // max: 30
    export interface ElasticTranscoderCreateJobPlaylist {
        Name?: ElasticTranscoderFilename;
        Format?: ElasticTranscoderPlaylistFormat;
        OutputKeys?: ElasticTranscoderOutputKeys;
        HlsContentProtection?: ElasticTranscoderHlsContentProtection;
        PlayReadyDrm?: ElasticTranscoderPlayReadyDrm;
    }

    export type ElasticTranscoderCreateJobPlaylists = Array<ElasticTranscoderCreateJobPlaylist>; // max: 30
    export interface ElasticTranscoderCreateJobRequest {
        PipelineId: ElasticTranscoderId;
        Input: ElasticTranscoderJobInput;
        Output?: ElasticTranscoderCreateJobOutput;
        Outputs?: ElasticTranscoderCreateJobOutputs;
        OutputKeyPrefix?: ElasticTranscoderKey;
        Playlists?: ElasticTranscoderCreateJobPlaylists;
        UserMetadata?: ElasticTranscoderUserMetadata;
    }

    export interface ElasticTranscoderCreateJobResponse {
        Job?: ElasticTranscoderJob;
    }

    export interface ElasticTranscoderCreatePipelineRequest {
        Name: ElasticTranscoderName;
        InputBucket: ElasticTranscoderBucketName;
        OutputBucket?: ElasticTranscoderBucketName;
        Role: ElasticTranscoderRole;
        AwsKmsKeyArn?: ElasticTranscoderKeyArn;
        Notifications?: ElasticTranscoderNotifications;
        ContentConfig?: ElasticTranscoderPipelineOutputConfig;
        ThumbnailConfig?: ElasticTranscoderPipelineOutputConfig;
    }

    export interface ElasticTranscoderCreatePipelineResponse {
        Pipeline?: ElasticTranscoderPipeline;
        Warnings?: ElasticTranscoderWarnings;
    }

    export interface ElasticTranscoderCreatePresetRequest {
        Name: ElasticTranscoderName;
        Description?: ElasticTranscoderDescription;
        Container: ElasticTranscoderPresetContainer;
        Video?: ElasticTranscoderVideoParameters;
        Audio?: ElasticTranscoderAudioParameters;
        Thumbnails?: ElasticTranscoderThumbnails;
    }

    export interface ElasticTranscoderCreatePresetResponse {
        Preset?: ElasticTranscoderPreset;
        Warning?: ElasticTranscoderString;
    }

    export interface ElasticTranscoderDeletePipelineRequest {
        Id: ElasticTranscoderId;
    }

    export interface ElasticTranscoderDeletePipelineResponse {
    }

    export interface ElasticTranscoderDeletePresetRequest {
        Id: ElasticTranscoderId;
    }

    export interface ElasticTranscoderDeletePresetResponse {
    }

    export type ElasticTranscoderDescription = string;
    export interface ElasticTranscoderDetectedProperties {
        Width?: ElasticTranscoderNullableInteger;
        Height?: ElasticTranscoderNullableInteger;
        FrameRate?: ElasticTranscoderFloatString;
        FileSize?: ElasticTranscoderNullableLong;
        DurationMillis?: ElasticTranscoderNullableLong;
    }

    export type ElasticTranscoderDigits = string; // pattern: "^\d{1,5}$"
    export type ElasticTranscoderDigitsOrAuto = string; // pattern: "(^auto$)|(^\d{2,4}$)"
    export interface ElasticTranscoderEncryption {
        Mode?: ElasticTranscoderEncryptionMode;
        Key?: ElasticTranscoderBase64EncodedString;
        KeyMd5?: ElasticTranscoderBase64EncodedString;
        InitializationVector?: ElasticTranscoderZeroTo255String;
    }

    export type ElasticTranscoderEncryptionMode = string; // pattern: "(^s3$)|(^s3-aws-kms$)|(^aes-cbc-pkcs7$)|(^aes-ctr$)|(^aes-gcm$)"
    export type ElasticTranscoderExceptionMessages = Array<ElasticTranscoderString>;
    export type ElasticTranscoderFilename = string;
    export type ElasticTranscoderFixedGOP = string; // pattern: "(^true$)|(^false$)"
    export type ElasticTranscoderFloatString = string; // pattern: "^\d{1,5}(\.\d{0,5})?$"
    export type ElasticTranscoderFrameRate = string; // pattern: "(^auto$)|(^10$)|(^15$)|(^23.97$)|(^24$)|(^25$)|(^29.97$)|(^30$)|(^50$)|(^60$)"
    export type ElasticTranscoderGrantee = string;
    export type ElasticTranscoderGranteeType = string; // pattern: "(^Canonical$)|(^Email$)|(^Group$)"
    export interface ElasticTranscoderHlsContentProtection {
        Method?: ElasticTranscoderHlsContentProtectionMethod;
        Key?: ElasticTranscoderBase64EncodedString;
        KeyMd5?: ElasticTranscoderBase64EncodedString;
        InitializationVector?: ElasticTranscoderZeroTo255String;
        LicenseAcquisitionUrl?: ElasticTranscoderZeroTo512String;
        KeyStoragePolicy?: ElasticTranscoderKeyStoragePolicy;
    }

    export type ElasticTranscoderHlsContentProtectionMethod = string; // pattern: "(^aes-128$)"
    export type ElasticTranscoderHorizontalAlign = string; // pattern: "(^Left$)|(^Right$)|(^Center$)"
    export type ElasticTranscoderId = string; // pattern: "^\d{13}-\w{6}$"
    export interface ElasticTranscoderIncompatibleVersionException {
    }

    export type ElasticTranscoderInterlaced = string; // pattern: "(^auto$)|(^true$)|(^false$)"
    export interface ElasticTranscoderInternalServiceException {
    }

    export interface ElasticTranscoderJob {
        Id?: ElasticTranscoderId;
        Arn?: ElasticTranscoderString;
        PipelineId?: ElasticTranscoderId;
        Input?: ElasticTranscoderJobInput;
        Output?: ElasticTranscoderJobOutput;
        Outputs?: ElasticTranscoderJobOutputs;
        OutputKeyPrefix?: ElasticTranscoderKey;
        Playlists?: ElasticTranscoderPlaylists;
        Status?: ElasticTranscoderJobStatus;
        UserMetadata?: ElasticTranscoderUserMetadata;
        Timing?: ElasticTranscoderTiming;
    }

    export interface ElasticTranscoderJobAlbumArt {
        MergePolicy?: ElasticTranscoderMergePolicy;
        Artwork?: ElasticTranscoderArtworks;
    }

    export type ElasticTranscoderJobContainer = string; // pattern: "(^auto$)|(^3gp$)|(^asf$)|(^avi$)|(^divx$)|(^flv$)|(^mkv$)|(^mov$)|(^mp4$)|(^mpeg$)|(^mpeg-ps$)|(^mpeg-ts$)|(^mxf$)|(^ogg$)|(^ts$)|(^vob$)|(^wav$)|(^webm$)|(^mp3$)|(^m4a$)|(^aac$)"
    export interface ElasticTranscoderJobInput {
        Key?: ElasticTranscoderKey;
        FrameRate?: ElasticTranscoderFrameRate;
        Resolution?: ElasticTranscoderResolution;
        AspectRatio?: ElasticTranscoderAspectRatio;
        Interlaced?: ElasticTranscoderInterlaced;
        Container?: ElasticTranscoderJobContainer;
        Encryption?: ElasticTranscoderEncryption;
        DetectedProperties?: ElasticTranscoderDetectedProperties;
    }

    export interface ElasticTranscoderJobOutput {
        Id?: ElasticTranscoderString;
        Key?: ElasticTranscoderKey;
        ThumbnailPattern?: ElasticTranscoderThumbnailPattern;
        ThumbnailEncryption?: ElasticTranscoderEncryption;
        Rotate?: ElasticTranscoderRotate;
        PresetId?: ElasticTranscoderId;
        SegmentDuration?: ElasticTranscoderFloatString;
        Status?: ElasticTranscoderJobStatus;
        StatusDetail?: ElasticTranscoderDescription;
        Duration?: ElasticTranscoderNullableLong;
        Width?: ElasticTranscoderNullableInteger;
        Height?: ElasticTranscoderNullableInteger;
        FrameRate?: ElasticTranscoderFloatString;
        FileSize?: ElasticTranscoderNullableLong;
        DurationMillis?: ElasticTranscoderNullableLong;
        Watermarks?: ElasticTranscoderJobWatermarks;
        AlbumArt?: ElasticTranscoderJobAlbumArt;
        Composition?: ElasticTranscoderComposition;
        Captions?: ElasticTranscoderCaptions;
        Encryption?: ElasticTranscoderEncryption;
        AppliedColorSpaceConversion?: ElasticTranscoderString;
    }

    export type ElasticTranscoderJobOutputs = Array<ElasticTranscoderJobOutput>;
    export type ElasticTranscoderJobStatus = string; // pattern: "(^Submitted$)|(^Progressing$)|(^Complete$)|(^Canceled$)|(^Error$)"
    export interface ElasticTranscoderJobWatermark {
        PresetWatermarkId?: ElasticTranscoderPresetWatermarkId;
        InputKey?: ElasticTranscoderWatermarkKey;
        Encryption?: ElasticTranscoderEncryption;
    }

    export type ElasticTranscoderJobWatermarks = Array<ElasticTranscoderJobWatermark>;
    export type ElasticTranscoderJobs = Array<ElasticTranscoderJob>;
    export type ElasticTranscoderJpgOrPng = string; // pattern: "(^jpg$)|(^png$)"
    export type ElasticTranscoderKey = string;
    export type ElasticTranscoderKeyArn = string;
    export type ElasticTranscoderKeyIdGuid = string; // pattern: "(^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{12}$)|(^[0-9A-Fa-f]{32}$)"
    export type ElasticTranscoderKeyStoragePolicy = string; // pattern: "(^NoStore$)|(^WithVariantPlaylists$)"
    export type ElasticTranscoderKeyframesMaxDist = string; // pattern: "^\d{1,6}$"
    export interface ElasticTranscoderLimitExceededException {
    }

    export interface ElasticTranscoderListJobsByPipelineRequest {
        PipelineId: ElasticTranscoderId;
        Ascending?: ElasticTranscoderAscending;
        PageToken?: ElasticTranscoderId;
    }

    export interface ElasticTranscoderListJobsByPipelineResponse {
        Jobs?: ElasticTranscoderJobs;
        NextPageToken?: ElasticTranscoderId;
    }

    export interface ElasticTranscoderListJobsByStatusRequest {
        Status: ElasticTranscoderJobStatus;
        Ascending?: ElasticTranscoderAscending;
        PageToken?: ElasticTranscoderId;
    }

    export interface ElasticTranscoderListJobsByStatusResponse {
        Jobs?: ElasticTranscoderJobs;
        NextPageToken?: ElasticTranscoderId;
    }

    export interface ElasticTranscoderListPipelinesRequest {
        Ascending?: ElasticTranscoderAscending;
        PageToken?: ElasticTranscoderId;
    }

    export interface ElasticTranscoderListPipelinesResponse {
        Pipelines?: ElasticTranscoderPipelines;
        NextPageToken?: ElasticTranscoderId;
    }

    export interface ElasticTranscoderListPresetsRequest {
        Ascending?: ElasticTranscoderAscending;
        PageToken?: ElasticTranscoderId;
    }

    export interface ElasticTranscoderListPresetsResponse {
        Presets?: ElasticTranscoderPresets;
        NextPageToken?: ElasticTranscoderId;
    }

    export type ElasticTranscoderMaxFrameRate = string; // pattern: "(^10$)|(^15$)|(^23.97$)|(^24$)|(^25$)|(^29.97$)|(^30$)|(^50$)|(^60$)"
    export type ElasticTranscoderMergePolicy = string; // pattern: "(^Replace$)|(^Prepend$)|(^Append$)|(^Fallback$)"
    export type ElasticTranscoderName = string;
    export type ElasticTranscoderNonEmptyBase64EncodedString = string; // pattern: "(^(?:[A-Za-z0-9\+/]{4})*(?:[A-Za-z0-9\+/]{2}==|[A-Za-z0-9\+/]{3}=)?$)"
    export interface ElasticTranscoderNotifications {
        Progressing?: ElasticTranscoderSnsTopic;
        Completed?: ElasticTranscoderSnsTopic;
        Warning?: ElasticTranscoderSnsTopic;
        Error?: ElasticTranscoderSnsTopic;
    }

    export type ElasticTranscoderNullableInteger = number;
    export type ElasticTranscoderNullableLong = number;
    export type ElasticTranscoderOneTo512String = string;
    export type ElasticTranscoderOpacity = string; // pattern: "^\d{1,3}(\.\d{0,20})?$"
    export type ElasticTranscoderOutputKeys = Array<ElasticTranscoderKey>; // max: 30
    export type ElasticTranscoderPaddingPolicy = string; // pattern: "(^Pad$)|(^NoPad$)"
    export interface ElasticTranscoderPermission {
        GranteeType?: ElasticTranscoderGranteeType;
        Grantee?: ElasticTranscoderGrantee;
        Access?: ElasticTranscoderAccessControls;
    }

    export type ElasticTranscoderPermissions = Array<ElasticTranscoderPermission>; // max: 30
    export interface ElasticTranscoderPipeline {
        Id?: ElasticTranscoderId;
        Arn?: ElasticTranscoderString;
        Name?: ElasticTranscoderName;
        Status?: ElasticTranscoderPipelineStatus;
        InputBucket?: ElasticTranscoderBucketName;
        OutputBucket?: ElasticTranscoderBucketName;
        Role?: ElasticTranscoderRole;
        AwsKmsKeyArn?: ElasticTranscoderKeyArn;
        Notifications?: ElasticTranscoderNotifications;
        ContentConfig?: ElasticTranscoderPipelineOutputConfig;
        ThumbnailConfig?: ElasticTranscoderPipelineOutputConfig;
    }

    export interface ElasticTranscoderPipelineOutputConfig {
        Bucket?: ElasticTranscoderBucketName;
        StorageClass?: ElasticTranscoderStorageClass;
        Permissions?: ElasticTranscoderPermissions;
    }

    export type ElasticTranscoderPipelineStatus = string; // pattern: "(^Active$)|(^Paused$)"
    export type ElasticTranscoderPipelines = Array<ElasticTranscoderPipeline>;
    export type ElasticTranscoderPixelsOrPercent = string; // pattern: "(^\d{1,3}(\.\d{0,5})?%$)|(^\d{1,4}?px$)"
    export interface ElasticTranscoderPlayReadyDrm {
        Format?: ElasticTranscoderPlayReadyDrmFormatString;
        Key?: ElasticTranscoderNonEmptyBase64EncodedString;
        KeyMd5?: ElasticTranscoderNonEmptyBase64EncodedString;
        KeyId?: ElasticTranscoderKeyIdGuid;
        InitializationVector?: ElasticTranscoderZeroTo255String;
        LicenseAcquisitionUrl?: ElasticTranscoderOneTo512String;
    }

    export type ElasticTranscoderPlayReadyDrmFormatString = string; // pattern: "(^microsoft$)|(^discretix-3.0$)"
    export interface ElasticTranscoderPlaylist {
        Name?: ElasticTranscoderFilename;
        Format?: ElasticTranscoderPlaylistFormat;
        OutputKeys?: ElasticTranscoderOutputKeys;
        HlsContentProtection?: ElasticTranscoderHlsContentProtection;
        PlayReadyDrm?: ElasticTranscoderPlayReadyDrm;
        Status?: ElasticTranscoderJobStatus;
        StatusDetail?: ElasticTranscoderDescription;
    }

    export type ElasticTranscoderPlaylistFormat = string; // pattern: "(^HLSv3$)|(^HLSv4$)|(^Smooth$)"
    export type ElasticTranscoderPlaylists = Array<ElasticTranscoderPlaylist>;
    export interface ElasticTranscoderPreset {
        Id?: ElasticTranscoderId;
        Arn?: ElasticTranscoderString;
        Name?: ElasticTranscoderName;
        Description?: ElasticTranscoderDescription;
        Container?: ElasticTranscoderPresetContainer;
        Audio?: ElasticTranscoderAudioParameters;
        Video?: ElasticTranscoderVideoParameters;
        Thumbnails?: ElasticTranscoderThumbnails;
        Type?: ElasticTranscoderPresetType;
    }

    export type ElasticTranscoderPresetContainer = string; // pattern: "(^mp4$)|(^ts$)|(^webm$)|(^mp3$)|(^flac$)|(^oga$)|(^ogg$)|(^fmp4$)|(^mpg$)|(^flv$)|(^gif$)|(^mxf$)"
    export type ElasticTranscoderPresetType = string; // pattern: "(^System$)|(^Custom$)"
    export interface ElasticTranscoderPresetWatermark {
        Id?: ElasticTranscoderPresetWatermarkId;
        MaxWidth?: ElasticTranscoderPixelsOrPercent;
        MaxHeight?: ElasticTranscoderPixelsOrPercent;
        SizingPolicy?: ElasticTranscoderWatermarkSizingPolicy;
        HorizontalAlign?: ElasticTranscoderHorizontalAlign;
        HorizontalOffset?: ElasticTranscoderPixelsOrPercent;
        VerticalAlign?: ElasticTranscoderVerticalAlign;
        VerticalOffset?: ElasticTranscoderPixelsOrPercent;
        Opacity?: ElasticTranscoderOpacity;
        Target?: ElasticTranscoderTarget;
    }

    export type ElasticTranscoderPresetWatermarkId = string;
    export type ElasticTranscoderPresetWatermarks = Array<ElasticTranscoderPresetWatermark>;
    export type ElasticTranscoderPresets = Array<ElasticTranscoderPreset>;
    export interface ElasticTranscoderReadJobRequest {
        Id: ElasticTranscoderId;
    }

    export interface ElasticTranscoderReadJobResponse {
        Job?: ElasticTranscoderJob;
    }

    export interface ElasticTranscoderReadPipelineRequest {
        Id: ElasticTranscoderId;
    }

    export interface ElasticTranscoderReadPipelineResponse {
        Pipeline?: ElasticTranscoderPipeline;
        Warnings?: ElasticTranscoderWarnings;
    }

    export interface ElasticTranscoderReadPresetRequest {
        Id: ElasticTranscoderId;
    }

    export interface ElasticTranscoderReadPresetResponse {
        Preset?: ElasticTranscoderPreset;
    }

    export type ElasticTranscoderResolution = string; // pattern: "(^auto$)|(^\d{1,5}x\d{1,5}$)"
    export interface ElasticTranscoderResourceInUseException {
    }

    export interface ElasticTranscoderResourceNotFoundException {
    }

    export type ElasticTranscoderRole = string; // pattern: "^arn:aws:iam::\w{12}:role/.+$"
    export type ElasticTranscoderRotate = string; // pattern: "(^auto$)|(^0$)|(^90$)|(^180$)|(^270$)"
    export type ElasticTranscoderSizingPolicy = string; // pattern: "(^Fit$)|(^Fill$)|(^Stretch$)|(^Keep$)|(^ShrinkToFit$)|(^ShrinkToFill$)"
    export type ElasticTranscoderSnsTopic = string; // pattern: "(^$)|(^arn:aws:sns:.*:\w{12}:.+$)"
    export type ElasticTranscoderSnsTopics = Array<ElasticTranscoderSnsTopic>; // max: 30
    export type ElasticTranscoderStorageClass = string; // pattern: "(^ReducedRedundancy$)|(^Standard$)"
    export type ElasticTranscoderString = string;
    export type ElasticTranscoderSuccess = string; // pattern: "(^true$)|(^false$)"
    export type ElasticTranscoderTarget = string; // pattern: "(^Content$)|(^Frame$)"
    export interface ElasticTranscoderTestRoleRequest {
        Role: ElasticTranscoderRole;
        InputBucket: ElasticTranscoderBucketName;
        OutputBucket: ElasticTranscoderBucketName;
        Topics: ElasticTranscoderSnsTopics;
    }

    export interface ElasticTranscoderTestRoleResponse {
        Success?: ElasticTranscoderSuccess;
        Messages?: ElasticTranscoderExceptionMessages;
    }

    export type ElasticTranscoderThumbnailPattern = string; // pattern: "(^$)|(^.*\{count\}.*$)"
    export type ElasticTranscoderThumbnailResolution = string; // pattern: "^\d{1,5}x\d{1,5}$"
    export interface ElasticTranscoderThumbnails {
        Format?: ElasticTranscoderJpgOrPng;
        Interval?: ElasticTranscoderDigits;
        Resolution?: ElasticTranscoderThumbnailResolution;
        AspectRatio?: ElasticTranscoderAspectRatio;
        MaxWidth?: ElasticTranscoderDigitsOrAuto;
        MaxHeight?: ElasticTranscoderDigitsOrAuto;
        SizingPolicy?: ElasticTranscoderSizingPolicy;
        PaddingPolicy?: ElasticTranscoderPaddingPolicy;
    }

    export type ElasticTranscoderTime = string; // pattern: "(^\d{1,5}(\.\d{0,3})?$)|(^([0-1]?[0-9]:|2[0-3]:)?([0-5]?[0-9]:)?[0-5]?[0-9](\.\d{0,3})?$)"
    export type ElasticTranscoderTimeOffset = string; // pattern: "(^[+-]?\d{1,5}(\.\d{0,3})?$)|(^[+-]?([0-1]?[0-9]:|2[0-3]:)?([0-5]?[0-9]:)?[0-5]?[0-9](\.\d{0,3})?$)"
    export interface ElasticTranscoderTimeSpan {
        StartTime?: ElasticTranscoderTime;
        Duration?: ElasticTranscoderTime;
    }

    export interface ElasticTranscoderTiming {
        SubmitTimeMillis?: ElasticTranscoderNullableLong;
        StartTimeMillis?: ElasticTranscoderNullableLong;
        FinishTimeMillis?: ElasticTranscoderNullableLong;
    }

    export interface ElasticTranscoderUpdatePipelineNotificationsRequest {
        Id: ElasticTranscoderId;
        Notifications: ElasticTranscoderNotifications;
    }

    export interface ElasticTranscoderUpdatePipelineNotificationsResponse {
        Pipeline?: ElasticTranscoderPipeline;
    }

    export interface ElasticTranscoderUpdatePipelineRequest {
        Id: ElasticTranscoderId;
        Name?: ElasticTranscoderName;
        InputBucket?: ElasticTranscoderBucketName;
        Role?: ElasticTranscoderRole;
        AwsKmsKeyArn?: ElasticTranscoderKeyArn;
        Notifications?: ElasticTranscoderNotifications;
        ContentConfig?: ElasticTranscoderPipelineOutputConfig;
        ThumbnailConfig?: ElasticTranscoderPipelineOutputConfig;
    }

    export interface ElasticTranscoderUpdatePipelineResponse {
        Pipeline?: ElasticTranscoderPipeline;
        Warnings?: ElasticTranscoderWarnings;
    }

    export interface ElasticTranscoderUpdatePipelineStatusRequest {
        Id: ElasticTranscoderId;
        Status: ElasticTranscoderPipelineStatus;
    }

    export interface ElasticTranscoderUpdatePipelineStatusResponse {
        Pipeline?: ElasticTranscoderPipeline;
    }

    export type ElasticTranscoderUserMetadata = any; // not really - it was 'map' instead - must fix this one
    export interface ElasticTranscoderValidationException {
    }

    export type ElasticTranscoderVerticalAlign = string; // pattern: "(^Top$)|(^Bottom$)|(^Center$)"
    export type ElasticTranscoderVideoBitRate = string; // pattern: "(^\d{2,5}$)|(^auto$)"
    export type ElasticTranscoderVideoCodec = string; // pattern: "(^H\.264$)|(^vp8$)|(^mpeg2$)|(^gif$)"
    export interface ElasticTranscoderVideoParameters {
        Codec?: ElasticTranscoderVideoCodec;
        CodecOptions?: ElasticTranscoderCodecOptions;
        KeyframesMaxDist?: ElasticTranscoderKeyframesMaxDist;
        FixedGOP?: ElasticTranscoderFixedGOP;
        BitRate?: ElasticTranscoderVideoBitRate;
        FrameRate?: ElasticTranscoderFrameRate;
        MaxFrameRate?: ElasticTranscoderMaxFrameRate;
        Resolution?: ElasticTranscoderResolution;
        AspectRatio?: ElasticTranscoderAspectRatio;
        MaxWidth?: ElasticTranscoderDigitsOrAuto;
        MaxHeight?: ElasticTranscoderDigitsOrAuto;
        DisplayAspectRatio?: ElasticTranscoderAspectRatio;
        SizingPolicy?: ElasticTranscoderSizingPolicy;
        PaddingPolicy?: ElasticTranscoderPaddingPolicy;
        Watermarks?: ElasticTranscoderPresetWatermarks;
    }

    export interface ElasticTranscoderWarning {
        Code?: ElasticTranscoderString;
        Message?: ElasticTranscoderString;
    }

    export type ElasticTranscoderWarnings = Array<ElasticTranscoderWarning>;
    export type ElasticTranscoderWatermarkKey = string; // pattern: "(^.{1,}.jpg$)|(^.{1,}.jpeg$)|(^.{1,}.png$)"
    export type ElasticTranscoderWatermarkSizingPolicy = string; // pattern: "(^Fit$)|(^Stretch$)|(^ShrinkToFit$)"
    export type ElasticTranscoderZeroTo255String = string;
    export type ElasticTranscoderZeroTo512String = string;
}
