// Type definitions for aws-sdk - Amazon Elastic Transcoder
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

///<reference path="./aws-sdk-common.d.ts" />

declare module "aws-sdk" {

    /*
     * apiVersion: 2012-09-25
     * endpointPrefix: elastictranscoder
     * serviceAbbreviation: 
     * signatureVersion: v4
     * protocol: rest-json
     */
    export class ElasticTranscoder extends Service {
      constructor(options?: any);
      endpoint: Endpoint;
      cancelJob(params: ElasticTranscoder.CancelJobRequest, callback?: (err: ElasticTranscoder.ValidationException|ElasticTranscoder.IncompatibleVersionException|ElasticTranscoder.ResourceNotFoundException|ElasticTranscoder.ResourceInUseException|ElasticTranscoder.AccessDeniedException|ElasticTranscoder.InternalServiceException|any, data: ElasticTranscoder.CancelJobResponse|any) => void): Request;
      createJob(params: ElasticTranscoder.CreateJobRequest, callback?: (err: ElasticTranscoder.ValidationException|ElasticTranscoder.IncompatibleVersionException|ElasticTranscoder.ResourceNotFoundException|ElasticTranscoder.AccessDeniedException|ElasticTranscoder.LimitExceededException|ElasticTranscoder.InternalServiceException|any, data: ElasticTranscoder.CreateJobResponse|any) => void): Request;
      createPipeline(params: ElasticTranscoder.CreatePipelineRequest, callback?: (err: ElasticTranscoder.ValidationException|ElasticTranscoder.IncompatibleVersionException|ElasticTranscoder.AccessDeniedException|ElasticTranscoder.ResourceNotFoundException|ElasticTranscoder.LimitExceededException|ElasticTranscoder.InternalServiceException|any, data: ElasticTranscoder.CreatePipelineResponse|any) => void): Request;
      createPreset(params: ElasticTranscoder.CreatePresetRequest, callback?: (err: ElasticTranscoder.ValidationException|ElasticTranscoder.IncompatibleVersionException|ElasticTranscoder.AccessDeniedException|ElasticTranscoder.LimitExceededException|ElasticTranscoder.InternalServiceException|any, data: ElasticTranscoder.CreatePresetResponse|any) => void): Request;
      deletePipeline(params: ElasticTranscoder.DeletePipelineRequest, callback?: (err: ElasticTranscoder.ValidationException|ElasticTranscoder.IncompatibleVersionException|ElasticTranscoder.ResourceNotFoundException|ElasticTranscoder.ResourceInUseException|ElasticTranscoder.AccessDeniedException|ElasticTranscoder.InternalServiceException|any, data: ElasticTranscoder.DeletePipelineResponse|any) => void): Request;
      deletePreset(params: ElasticTranscoder.DeletePresetRequest, callback?: (err: ElasticTranscoder.ValidationException|ElasticTranscoder.IncompatibleVersionException|ElasticTranscoder.ResourceNotFoundException|ElasticTranscoder.AccessDeniedException|ElasticTranscoder.InternalServiceException|any, data: ElasticTranscoder.DeletePresetResponse|any) => void): Request;
      listJobsByPipeline(params: ElasticTranscoder.ListJobsByPipelineRequest, callback?: (err: ElasticTranscoder.ValidationException|ElasticTranscoder.IncompatibleVersionException|ElasticTranscoder.ResourceNotFoundException|ElasticTranscoder.AccessDeniedException|ElasticTranscoder.InternalServiceException|any, data: ElasticTranscoder.ListJobsByPipelineResponse|any) => void): Request;
      listJobsByStatus(params: ElasticTranscoder.ListJobsByStatusRequest, callback?: (err: ElasticTranscoder.ValidationException|ElasticTranscoder.IncompatibleVersionException|ElasticTranscoder.ResourceNotFoundException|ElasticTranscoder.AccessDeniedException|ElasticTranscoder.InternalServiceException|any, data: ElasticTranscoder.ListJobsByStatusResponse|any) => void): Request;
      listPipelines(params: ElasticTranscoder.ListPipelinesRequest, callback?: (err: ElasticTranscoder.ValidationException|ElasticTranscoder.IncompatibleVersionException|ElasticTranscoder.AccessDeniedException|ElasticTranscoder.InternalServiceException|any, data: ElasticTranscoder.ListPipelinesResponse|any) => void): Request;
      listPresets(params: ElasticTranscoder.ListPresetsRequest, callback?: (err: ElasticTranscoder.ValidationException|ElasticTranscoder.IncompatibleVersionException|ElasticTranscoder.AccessDeniedException|ElasticTranscoder.InternalServiceException|any, data: ElasticTranscoder.ListPresetsResponse|any) => void): Request;
      readJob(params: ElasticTranscoder.ReadJobRequest, callback?: (err: ElasticTranscoder.ValidationException|ElasticTranscoder.IncompatibleVersionException|ElasticTranscoder.ResourceNotFoundException|ElasticTranscoder.AccessDeniedException|ElasticTranscoder.InternalServiceException|any, data: ElasticTranscoder.ReadJobResponse|any) => void): Request;
      readPipeline(params: ElasticTranscoder.ReadPipelineRequest, callback?: (err: ElasticTranscoder.ValidationException|ElasticTranscoder.IncompatibleVersionException|ElasticTranscoder.ResourceNotFoundException|ElasticTranscoder.AccessDeniedException|ElasticTranscoder.InternalServiceException|any, data: ElasticTranscoder.ReadPipelineResponse|any) => void): Request;
      readPreset(params: ElasticTranscoder.ReadPresetRequest, callback?: (err: ElasticTranscoder.ValidationException|ElasticTranscoder.IncompatibleVersionException|ElasticTranscoder.ResourceNotFoundException|ElasticTranscoder.AccessDeniedException|ElasticTranscoder.InternalServiceException|any, data: ElasticTranscoder.ReadPresetResponse|any) => void): Request;
      testRole(params: ElasticTranscoder.TestRoleRequest, callback?: (err: ElasticTranscoder.ValidationException|ElasticTranscoder.IncompatibleVersionException|ElasticTranscoder.ResourceNotFoundException|ElasticTranscoder.AccessDeniedException|ElasticTranscoder.InternalServiceException|any, data: ElasticTranscoder.TestRoleResponse|any) => void): Request;
      updatePipeline(params: ElasticTranscoder.UpdatePipelineRequest, callback?: (err: ElasticTranscoder.ValidationException|ElasticTranscoder.IncompatibleVersionException|ElasticTranscoder.AccessDeniedException|ElasticTranscoder.ResourceInUseException|ElasticTranscoder.ResourceNotFoundException|ElasticTranscoder.InternalServiceException|any, data: ElasticTranscoder.UpdatePipelineResponse|any) => void): Request;
      updatePipelineNotifications(params: ElasticTranscoder.UpdatePipelineNotificationsRequest, callback?: (err: ElasticTranscoder.ValidationException|ElasticTranscoder.IncompatibleVersionException|ElasticTranscoder.ResourceNotFoundException|ElasticTranscoder.ResourceInUseException|ElasticTranscoder.AccessDeniedException|ElasticTranscoder.InternalServiceException|any, data: ElasticTranscoder.UpdatePipelineNotificationsResponse|any) => void): Request;
      updatePipelineStatus(params: ElasticTranscoder.UpdatePipelineStatusRequest, callback?: (err: ElasticTranscoder.ValidationException|ElasticTranscoder.IncompatibleVersionException|ElasticTranscoder.ResourceNotFoundException|ElasticTranscoder.ResourceInUseException|ElasticTranscoder.AccessDeniedException|ElasticTranscoder.InternalServiceException|any, data: ElasticTranscoder.UpdatePipelineStatusResponse|any) => void): Request;

    }

    export module ElasticTranscoder {
        export type AccessControl = string;    // pattern: &quot;(^FullControl$)|(^Read$)|(^ReadAcp$)|(^WriteAcp$)&quot;
        export type AccessControls = AccessControl[];    // max: 30
        export type Artworks = Artwork[];
        export type Ascending = string;    // pattern: &quot;(^true$)|(^false$)&quot;
        export type AspectRatio = string;    // pattern: &quot;(^auto$)|(^1:1$)|(^4:3$)|(^3:2$)|(^16:9$)&quot;
        export type AudioBitDepth = string;    // pattern: &quot;(^16$)|(^24$)&quot;
        export type AudioBitOrder = string;    // pattern: &quot;(^LittleEndian$)&quot;
        export type AudioBitRate = string;    // pattern: &quot;^\d{1,3}$&quot;
        export type AudioChannels = string;    // pattern: &quot;(^auto$)|(^0$)|(^1$)|(^2$)&quot;
        export type AudioCodec = string;    // pattern: &quot;(^AAC$)|(^vorbis$)|(^mp3$)|(^mp2$)|(^pcm$)|(^flac$)&quot;
        export type AudioCodecProfile = string;    // pattern: &quot;(^auto$)|(^AAC-LC$)|(^HE-AAC$)|(^HE-AACv2$)&quot;
        export type AudioPackingMode = string;    // pattern: &quot;(^SingleTrack$)|(^OneChannelPerTrack$)|(^OneChannelPerTrackWithMosTo8Tracks$)&quot;
        export type AudioSampleRate = string;    // pattern: &quot;(^auto$)|(^22050$)|(^32000$)|(^44100$)|(^48000$)|(^96000$)|(^192000$)&quot;
        export type AudioSigned = string;    // pattern: &quot;(^Signed$)&quot;
        export type Base64EncodedString = string;    // pattern: &quot;^$|(^(?:[A-Za-z0-9\+/]{4})*(?:[A-Za-z0-9\+/]{2}==|[A-Za-z0-9\+/]{3}=)?$)&quot;
        export type BucketName = string;    // pattern: &quot;^(\w|\.|-){1,255}$&quot;
        export type CaptionFormatFormat = string;    // pattern: &quot;(^mov-text$)|(^srt$)|(^scc$)|(^webvtt$)|(^dfxp$)&quot;
        export type CaptionFormatPattern = string;    // pattern: &quot;(^$)|(^.*\{language\}.*$)&quot;
        export type CaptionFormats = CaptionFormat[];    // max: 4
        export type CaptionMergePolicy = string;    // pattern: &quot;(^MergeOverride$)|(^MergeRetain$)|(^Override$)&quot;
        export type CaptionSources = CaptionSource[];    // max: 20
        export type CodecOption = string;    // max: 255, min: 1
        export type CodecOptions = {[key:string]: CodecOption};    // max: 30
        export type Composition = Clip[];
        export type CreateJobOutputs = CreateJobOutput[];    // max: 30
        export type CreateJobPlaylists = CreateJobPlaylist[];    // max: 30
        export type Description = string;    // max: 255
        export type Digits = string;    // pattern: &quot;^\d{1,5}$&quot;
        export type DigitsOrAuto = string;    // pattern: &quot;(^auto$)|(^\d{2,4}$)&quot;
        export type EncryptionMode = string;    // pattern: &quot;(^s3$)|(^s3-aws-kms$)|(^aes-cbc-pkcs7$)|(^aes-ctr$)|(^aes-gcm$)&quot;
        export type ExceptionMessages = String[];
        export type Filename = string;    // max: 255, min: 1
        export type FixedGOP = string;    // pattern: &quot;(^true$)|(^false$)&quot;
        export type FloatString = string;    // pattern: &quot;^\d{1,5}(\.\d{0,5})?$&quot;
        export type FrameRate = string;    // pattern: &quot;(^auto$)|(^10$)|(^15$)|(^23.97$)|(^24$)|(^25$)|(^29.97$)|(^30$)|(^50$)|(^60$)&quot;
        export type Grantee = string;    // max: 255, min: 1
        export type GranteeType = string;    // pattern: &quot;(^Canonical$)|(^Email$)|(^Group$)&quot;
        export type HlsContentProtectionMethod = string;    // pattern: &quot;(^aes-128$)&quot;
        export type HorizontalAlign = string;    // pattern: &quot;(^Left$)|(^Right$)|(^Center$)&quot;
        export type Id = string;    // pattern: &quot;^\d{13}-\w{6}$&quot;
        export type Interlaced = string;    // pattern: &quot;(^auto$)|(^true$)|(^false$)&quot;
        export type JobContainer = string;    // pattern: &quot;(^auto$)|(^3gp$)|(^asf$)|(^avi$)|(^divx$)|(^flv$)|(^mkv$)|(^mov$)|(^mp4$)|(^mpeg$)|(^mpeg-ps$)|(^mpeg-ts$)|(^mxf$)|(^ogg$)|(^ts$)|(^vob$)|(^wav$)|(^webm$)|(^mp3$)|(^m4a$)|(^aac$)&quot;
        export type JobOutputs = JobOutput[];
        export type JobStatus = string;    // pattern: &quot;(^Submitted$)|(^Progressing$)|(^Complete$)|(^Canceled$)|(^Error$)&quot;
        export type JobWatermarks = JobWatermark[];
        export type Jobs = Job[];
        export type JpgOrPng = string;    // pattern: &quot;(^jpg$)|(^png$)&quot;
        export type Key = string;    // max: 255, min: 1
        export type KeyArn = string;    // max: 255
        export type KeyIdGuid = string;    // pattern: &quot;(^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{12}$)|(^[0-9A-Fa-f]{32}$)&quot;
        export type KeyStoragePolicy = string;    // pattern: &quot;(^NoStore$)|(^WithVariantPlaylists$)&quot;
        export type KeyframesMaxDist = string;    // pattern: &quot;^\d{1,6}$&quot;
        export type MaxFrameRate = string;    // pattern: &quot;(^10$)|(^15$)|(^23.97$)|(^24$)|(^25$)|(^29.97$)|(^30$)|(^50$)|(^60$)&quot;
        export type MergePolicy = string;    // pattern: &quot;(^Replace$)|(^Prepend$)|(^Append$)|(^Fallback$)&quot;
        export type Name = string;    // max: 40, min: 1
        export type NonEmptyBase64EncodedString = string;    // pattern: &quot;(^(?:[A-Za-z0-9\+/]{4})*(?:[A-Za-z0-9\+/]{2}==|[A-Za-z0-9\+/]{3}=)?$)&quot;
        export type NullableInteger = number;
        export type NullableLong = number;
        export type OneTo512String = string;    // max: 512, min: 1
        export type Opacity = string;    // pattern: &quot;^\d{1,3}(\.\d{0,20})?$&quot;
        export type OutputKeys = Key[];    // max: 30
        export type PaddingPolicy = string;    // pattern: &quot;(^Pad$)|(^NoPad$)&quot;
        export type Permissions = Permission[];    // max: 30
        export type PipelineStatus = string;    // pattern: &quot;(^Active$)|(^Paused$)&quot;
        export type Pipelines = Pipeline[];
        export type PixelsOrPercent = string;    // pattern: &quot;(^\d{1,3}(\.\d{0,5})?%$)|(^\d{1,4}?px$)&quot;
        export type PlayReadyDrmFormatString = string;    // pattern: &quot;(^microsoft$)|(^discretix-3.0$)&quot;
        export type PlaylistFormat = string;    // pattern: &quot;(^HLSv3$)|(^HLSv4$)|(^Smooth$)&quot;
        export type Playlists = Playlist[];
        export type PresetContainer = string;    // pattern: &quot;(^mp4$)|(^ts$)|(^webm$)|(^mp3$)|(^flac$)|(^oga$)|(^ogg$)|(^fmp4$)|(^mpg$)|(^flv$)|(^gif$)|(^mxf$)&quot;
        export type PresetType = string;    // pattern: &quot;(^System$)|(^Custom$)&quot;
        export type PresetWatermarkId = string;    // max: 40, min: 1
        export type PresetWatermarks = PresetWatermark[];
        export type Presets = Preset[];
        export type Resolution = string;    // pattern: &quot;(^auto$)|(^\d{1,5}x\d{1,5}$)&quot;
        export type Role = string;    // pattern: &quot;^arn:aws:iam::\w{12}:role/.+$&quot;
        export type Rotate = string;    // pattern: &quot;(^auto$)|(^0$)|(^90$)|(^180$)|(^270$)&quot;
        export type SizingPolicy = string;    // pattern: &quot;(^Fit$)|(^Fill$)|(^Stretch$)|(^Keep$)|(^ShrinkToFit$)|(^ShrinkToFill$)&quot;
        export type SnsTopic = string;    // pattern: &quot;(^$)|(^arn:aws:sns:.*:\w{12}:.+$)&quot;
        export type SnsTopics = SnsTopic[];    // max: 30
        export type StorageClass = string;    // pattern: &quot;(^ReducedRedundancy$)|(^Standard$)&quot;
        export type String = string;
        export type Success = string;    // pattern: &quot;(^true$)|(^false$)&quot;
        export type Target = string;    // pattern: &quot;(^Content$)|(^Frame$)&quot;
        export type ThumbnailPattern = string;    // pattern: &quot;(^$)|(^.*\{count\}.*$)&quot;
        export type ThumbnailResolution = string;    // pattern: &quot;^\d{1,5}x\d{1,5}$&quot;
        export type Time = string;    // pattern: &quot;(^\d{1,5}(\.\d{0,3})?$)|(^([0-1]?[0-9]:|2[0-3]:)?([0-5]?[0-9]:)?[0-5]?[0-9](\.\d{0,3})?$)&quot;
        export type TimeOffset = string;    // pattern: &quot;(^[+-]?\d{1,5}(\.\d{0,3})?$)|(^[+-]?([0-1]?[0-9]:|2[0-3]:)?([0-5]?[0-9]:)?[0-5]?[0-9](\.\d{0,3})?$)&quot;
        export type UserMetadata = {[key:string]: String};
        export type VerticalAlign = string;    // pattern: &quot;(^Top$)|(^Bottom$)|(^Center$)&quot;
        export type VideoBitRate = string;    // pattern: &quot;(^\d{2,5}$)|(^auto$)&quot;
        export type VideoCodec = string;    // pattern: &quot;(^H\.264$)|(^vp8$)|(^mpeg2$)|(^gif$)&quot;
        export type Warnings = Warning[];
        export type WatermarkKey = string;    // pattern: &quot;(^.{1,}.jpg$)|(^.{1,}.jpeg$)|(^.{1,}.png$)&quot;, max: 255, min: 1
        export type WatermarkSizingPolicy = string;    // pattern: &quot;(^Fit$)|(^Stretch$)|(^ShrinkToFit$)&quot;
        export type ZeroTo255String = string;    // max: 255
        export type ZeroTo512String = string;    // max: 512

        export interface AccessDeniedException {
        }
        export interface Artwork {
            InputKey?: WatermarkKey;
            MaxWidth?: DigitsOrAuto;
            MaxHeight?: DigitsOrAuto;
            SizingPolicy?: SizingPolicy;
            PaddingPolicy?: PaddingPolicy;
            AlbumArtFormat?: JpgOrPng;
            Encryption?: Encryption;
        }
        export interface AudioCodecOptions {
            Profile?: AudioCodecProfile;
            BitDepth?: AudioBitDepth;
            BitOrder?: AudioBitOrder;
            Signed?: AudioSigned;
        }
        export interface AudioParameters {
            Codec?: AudioCodec;
            SampleRate?: AudioSampleRate;
            BitRate?: AudioBitRate;
            Channels?: AudioChannels;
            AudioPackingMode?: AudioPackingMode;
            CodecOptions?: AudioCodecOptions;
        }
        export interface CancelJobRequest {
            Id: Id;
        }
        export interface CancelJobResponse {
        }
        export interface CaptionFormat {
            Format?: CaptionFormatFormat;
            Pattern?: CaptionFormatPattern;
            Encryption?: Encryption;
        }
        export interface CaptionSource {
            Key?: Key;
            Language?: Key;
            TimeOffset?: TimeOffset;
            Label?: Name;
            Encryption?: Encryption;
        }
        export interface Captions {
            MergePolicy?: CaptionMergePolicy;
            CaptionSources?: CaptionSources;
            CaptionFormats?: CaptionFormats;
        }
        export interface Clip {
            TimeSpan?: TimeSpan;
        }
        export interface CreateJobOutput {
            Key?: Key;
            ThumbnailPattern?: ThumbnailPattern;
            ThumbnailEncryption?: Encryption;
            Rotate?: Rotate;
            PresetId?: Id;
            SegmentDuration?: FloatString;
            Watermarks?: JobWatermarks;
            AlbumArt?: JobAlbumArt;
            Composition?: Composition;
            Captions?: Captions;
            Encryption?: Encryption;
        }
        export interface CreateJobPlaylist {
            Name?: Filename;
            Format?: PlaylistFormat;
            OutputKeys?: OutputKeys;
            HlsContentProtection?: HlsContentProtection;
            PlayReadyDrm?: PlayReadyDrm;
        }
        export interface CreateJobRequest {
            PipelineId: Id;
            Input: JobInput;
            Output?: CreateJobOutput;
            Outputs?: CreateJobOutputs;
            OutputKeyPrefix?: Key;
            Playlists?: CreateJobPlaylists;
            UserMetadata?: UserMetadata;
        }
        export interface CreateJobResponse {
            Job?: Job;
        }
        export interface CreatePipelineRequest {
            Name: Name;
            InputBucket: BucketName;
            OutputBucket?: BucketName;
            Role: Role;
            AwsKmsKeyArn?: KeyArn;
            Notifications?: Notifications;
            ContentConfig?: PipelineOutputConfig;
            ThumbnailConfig?: PipelineOutputConfig;
        }
        export interface CreatePipelineResponse {
            Pipeline?: Pipeline;
            Warnings?: Warnings;
        }
        export interface CreatePresetRequest {
            Name: Name;
            Description?: Description;
            Container: PresetContainer;
            Video?: VideoParameters;
            Audio?: AudioParameters;
            Thumbnails?: Thumbnails;
        }
        export interface CreatePresetResponse {
            Preset?: Preset;
            Warning?: String;
        }
        export interface DeletePipelineRequest {
            Id: Id;
        }
        export interface DeletePipelineResponse {
        }
        export interface DeletePresetRequest {
            Id: Id;
        }
        export interface DeletePresetResponse {
        }
        export interface DetectedProperties {
            Width?: NullableInteger;
            Height?: NullableInteger;
            FrameRate?: FloatString;
            FileSize?: NullableLong;
            DurationMillis?: NullableLong;
        }
        export interface Encryption {
            Mode?: EncryptionMode;
            Key?: Base64EncodedString;
            KeyMd5?: Base64EncodedString;
            InitializationVector?: ZeroTo255String;
        }
        export interface HlsContentProtection {
            Method?: HlsContentProtectionMethod;
            Key?: Base64EncodedString;
            KeyMd5?: Base64EncodedString;
            InitializationVector?: ZeroTo255String;
            LicenseAcquisitionUrl?: ZeroTo512String;
            KeyStoragePolicy?: KeyStoragePolicy;
        }
        export interface IncompatibleVersionException {
        }
        export interface InternalServiceException {
        }
        export interface Job {
            Id?: Id;
            Arn?: String;
            PipelineId?: Id;
            Input?: JobInput;
            Output?: JobOutput;
            Outputs?: JobOutputs;
            OutputKeyPrefix?: Key;
            Playlists?: Playlists;
            Status?: JobStatus;
            UserMetadata?: UserMetadata;
            Timing?: Timing;
        }
        export interface JobAlbumArt {
            MergePolicy?: MergePolicy;
            Artwork?: Artworks;
        }
        export interface JobInput {
            Key?: Key;
            FrameRate?: FrameRate;
            Resolution?: Resolution;
            AspectRatio?: AspectRatio;
            Interlaced?: Interlaced;
            Container?: JobContainer;
            Encryption?: Encryption;
            DetectedProperties?: DetectedProperties;
        }
        export interface JobOutput {
            Id?: String;
            Key?: Key;
            ThumbnailPattern?: ThumbnailPattern;
            ThumbnailEncryption?: Encryption;
            Rotate?: Rotate;
            PresetId?: Id;
            SegmentDuration?: FloatString;
            Status?: JobStatus;
            StatusDetail?: Description;
            Duration?: NullableLong;
            Width?: NullableInteger;
            Height?: NullableInteger;
            FrameRate?: FloatString;
            FileSize?: NullableLong;
            DurationMillis?: NullableLong;
            Watermarks?: JobWatermarks;
            AlbumArt?: JobAlbumArt;
            Composition?: Composition;
            Captions?: Captions;
            Encryption?: Encryption;
            AppliedColorSpaceConversion?: String;
        }
        export interface JobWatermark {
            PresetWatermarkId?: PresetWatermarkId;
            InputKey?: WatermarkKey;
            Encryption?: Encryption;
        }
        export interface LimitExceededException {
        }
        export interface ListJobsByPipelineRequest {
            PipelineId: Id;
            Ascending?: Ascending;
            PageToken?: Id;
        }
        export interface ListJobsByPipelineResponse {
            Jobs?: Jobs;
            NextPageToken?: Id;
        }
        export interface ListJobsByStatusRequest {
            Status: JobStatus;
            Ascending?: Ascending;
            PageToken?: Id;
        }
        export interface ListJobsByStatusResponse {
            Jobs?: Jobs;
            NextPageToken?: Id;
        }
        export interface ListPipelinesRequest {
            Ascending?: Ascending;
            PageToken?: Id;
        }
        export interface ListPipelinesResponse {
            Pipelines?: Pipelines;
            NextPageToken?: Id;
        }
        export interface ListPresetsRequest {
            Ascending?: Ascending;
            PageToken?: Id;
        }
        export interface ListPresetsResponse {
            Presets?: Presets;
            NextPageToken?: Id;
        }
        export interface Notifications {
            Progressing?: SnsTopic;
            Completed?: SnsTopic;
            Warning?: SnsTopic;
            Error?: SnsTopic;
        }
        export interface Permission {
            GranteeType?: GranteeType;
            Grantee?: Grantee;
            Access?: AccessControls;
        }
        export interface Pipeline {
            Id?: Id;
            Arn?: String;
            Name?: Name;
            Status?: PipelineStatus;
            InputBucket?: BucketName;
            OutputBucket?: BucketName;
            Role?: Role;
            AwsKmsKeyArn?: KeyArn;
            Notifications?: Notifications;
            ContentConfig?: PipelineOutputConfig;
            ThumbnailConfig?: PipelineOutputConfig;
        }
        export interface PipelineOutputConfig {
            Bucket?: BucketName;
            StorageClass?: StorageClass;
            Permissions?: Permissions;
        }
        export interface PlayReadyDrm {
            Format?: PlayReadyDrmFormatString;
            Key?: NonEmptyBase64EncodedString;
            KeyMd5?: NonEmptyBase64EncodedString;
            KeyId?: KeyIdGuid;
            InitializationVector?: ZeroTo255String;
            LicenseAcquisitionUrl?: OneTo512String;
        }
        export interface Playlist {
            Name?: Filename;
            Format?: PlaylistFormat;
            OutputKeys?: OutputKeys;
            HlsContentProtection?: HlsContentProtection;
            PlayReadyDrm?: PlayReadyDrm;
            Status?: JobStatus;
            StatusDetail?: Description;
        }
        export interface Preset {
            Id?: Id;
            Arn?: String;
            Name?: Name;
            Description?: Description;
            Container?: PresetContainer;
            Audio?: AudioParameters;
            Video?: VideoParameters;
            Thumbnails?: Thumbnails;
            Type?: PresetType;
        }
        export interface PresetWatermark {
            Id?: PresetWatermarkId;
            MaxWidth?: PixelsOrPercent;
            MaxHeight?: PixelsOrPercent;
            SizingPolicy?: WatermarkSizingPolicy;
            HorizontalAlign?: HorizontalAlign;
            HorizontalOffset?: PixelsOrPercent;
            VerticalAlign?: VerticalAlign;
            VerticalOffset?: PixelsOrPercent;
            Opacity?: Opacity;
            Target?: Target;
        }
        export interface ReadJobRequest {
            Id: Id;
        }
        export interface ReadJobResponse {
            Job?: Job;
        }
        export interface ReadPipelineRequest {
            Id: Id;
        }
        export interface ReadPipelineResponse {
            Pipeline?: Pipeline;
            Warnings?: Warnings;
        }
        export interface ReadPresetRequest {
            Id: Id;
        }
        export interface ReadPresetResponse {
            Preset?: Preset;
        }
        export interface ResourceInUseException {
        }
        export interface ResourceNotFoundException {
        }
        export interface TestRoleRequest {
            Role: Role;
            InputBucket: BucketName;
            OutputBucket: BucketName;
            Topics: SnsTopics;
        }
        export interface TestRoleResponse {
            Success?: Success;
            Messages?: ExceptionMessages;
        }
        export interface Thumbnails {
            Format?: JpgOrPng;
            Interval?: Digits;
            Resolution?: ThumbnailResolution;
            AspectRatio?: AspectRatio;
            MaxWidth?: DigitsOrAuto;
            MaxHeight?: DigitsOrAuto;
            SizingPolicy?: SizingPolicy;
            PaddingPolicy?: PaddingPolicy;
        }
        export interface TimeSpan {
            StartTime?: Time;
            Duration?: Time;
        }
        export interface Timing {
            SubmitTimeMillis?: NullableLong;
            StartTimeMillis?: NullableLong;
            FinishTimeMillis?: NullableLong;
        }
        export interface UpdatePipelineNotificationsRequest {
            Id: Id;
            Notifications: Notifications;
        }
        export interface UpdatePipelineNotificationsResponse {
            Pipeline?: Pipeline;
        }
        export interface UpdatePipelineRequest {
            Id: Id;
            Name?: Name;
            InputBucket?: BucketName;
            Role?: Role;
            AwsKmsKeyArn?: KeyArn;
            Notifications?: Notifications;
            ContentConfig?: PipelineOutputConfig;
            ThumbnailConfig?: PipelineOutputConfig;
        }
        export interface UpdatePipelineResponse {
            Pipeline?: Pipeline;
            Warnings?: Warnings;
        }
        export interface UpdatePipelineStatusRequest {
            Id: Id;
            Status: PipelineStatus;
        }
        export interface UpdatePipelineStatusResponse {
            Pipeline?: Pipeline;
        }
        export interface ValidationException {
        }
        export interface VideoParameters {
            Codec?: VideoCodec;
            CodecOptions?: CodecOptions;
            KeyframesMaxDist?: KeyframesMaxDist;
            FixedGOP?: FixedGOP;
            BitRate?: VideoBitRate;
            FrameRate?: FrameRate;
            MaxFrameRate?: MaxFrameRate;
            Resolution?: Resolution;
            AspectRatio?: AspectRatio;
            MaxWidth?: DigitsOrAuto;
            MaxHeight?: DigitsOrAuto;
            DisplayAspectRatio?: AspectRatio;
            SizingPolicy?: SizingPolicy;
            PaddingPolicy?: PaddingPolicy;
            Watermarks?: PresetWatermarks;
        }
        export interface Warning {
            Code?: String;
            Message?: String;
        }

    }
}
