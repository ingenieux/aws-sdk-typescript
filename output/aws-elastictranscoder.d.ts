// DO NOT EDIT!
//
declare module "aws-sdk" {
    export class ElasticTranscoder {
      constructor(options?: any);
      cancelJob(params: CancelJobRequest, callback: (err: ValidationException|IncompatibleVersionException|ResourceNotFoundException|ResourceInUseException|AccessDeniedException|InternalServiceException|any, data: CancelJobResponse|any) => void): void;
      createJob(params: CreateJobRequest, callback: (err: ValidationException|IncompatibleVersionException|ResourceNotFoundException|AccessDeniedException|LimitExceededException|InternalServiceException|any, data: CreateJobResponse|any) => void): void;
      createPipeline(params: CreatePipelineRequest, callback: (err: ValidationException|IncompatibleVersionException|AccessDeniedException|ResourceNotFoundException|LimitExceededException|InternalServiceException|any, data: CreatePipelineResponse|any) => void): void;
      createPreset(params: CreatePresetRequest, callback: (err: ValidationException|IncompatibleVersionException|AccessDeniedException|LimitExceededException|InternalServiceException|any, data: CreatePresetResponse|any) => void): void;
      deletePipeline(params: DeletePipelineRequest, callback: (err: ValidationException|IncompatibleVersionException|ResourceNotFoundException|ResourceInUseException|AccessDeniedException|InternalServiceException|any, data: DeletePipelineResponse|any) => void): void;
      deletePreset(params: DeletePresetRequest, callback: (err: ValidationException|IncompatibleVersionException|ResourceNotFoundException|AccessDeniedException|InternalServiceException|any, data: DeletePresetResponse|any) => void): void;
      listJobsByPipeline(params: ListJobsByPipelineRequest, callback: (err: ValidationException|IncompatibleVersionException|ResourceNotFoundException|AccessDeniedException|InternalServiceException|any, data: ListJobsByPipelineResponse|any) => void): void;
      listJobsByStatus(params: ListJobsByStatusRequest, callback: (err: ValidationException|IncompatibleVersionException|ResourceNotFoundException|AccessDeniedException|InternalServiceException|any, data: ListJobsByStatusResponse|any) => void): void;
      listPipelines(params: ListPipelinesRequest, callback: (err: ValidationException|IncompatibleVersionException|AccessDeniedException|InternalServiceException|any, data: ListPipelinesResponse|any) => void): void;
      listPresets(params: ListPresetsRequest, callback: (err: ValidationException|IncompatibleVersionException|AccessDeniedException|InternalServiceException|any, data: ListPresetsResponse|any) => void): void;
      readJob(params: ReadJobRequest, callback: (err: ValidationException|IncompatibleVersionException|ResourceNotFoundException|AccessDeniedException|InternalServiceException|any, data: ReadJobResponse|any) => void): void;
      readPipeline(params: ReadPipelineRequest, callback: (err: ValidationException|IncompatibleVersionException|ResourceNotFoundException|AccessDeniedException|InternalServiceException|any, data: ReadPipelineResponse|any) => void): void;
      readPreset(params: ReadPresetRequest, callback: (err: ValidationException|IncompatibleVersionException|ResourceNotFoundException|AccessDeniedException|InternalServiceException|any, data: ReadPresetResponse|any) => void): void;
      testRole(params: TestRoleRequest, callback: (err: ValidationException|IncompatibleVersionException|ResourceNotFoundException|AccessDeniedException|InternalServiceException|any, data: TestRoleResponse|any) => void): void;
      updatePipeline(params: UpdatePipelineRequest, callback: (err: ValidationException|IncompatibleVersionException|AccessDeniedException|ResourceInUseException|ResourceNotFoundException|InternalServiceException|any, data: UpdatePipelineResponse|any) => void): void;
      updatePipelineNotifications(params: UpdatePipelineNotificationsRequest, callback: (err: ValidationException|IncompatibleVersionException|ResourceNotFoundException|ResourceInUseException|AccessDeniedException|InternalServiceException|any, data: UpdatePipelineNotificationsResponse|any) => void): void;
      updatePipelineStatus(params: UpdatePipelineStatusRequest, callback: (err: ValidationException|IncompatibleVersionException|ResourceNotFoundException|ResourceInUseException|AccessDeniedException|InternalServiceException|any, data: UpdatePipelineStatusResponse|any) => void): void;
    }

    export type AccessControl = string; // pattern: "(^FullControl$)|(^Read$)|(^ReadAcp$)|(^WriteAcp$)"

    export type AccessControls = Array<AccessControl>; // max: 30

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


    export type Artworks = Array<Artwork>;

    export type Ascending = string; // pattern: "(^true$)|(^false$)"

    export type AspectRatio = string; // pattern: "(^auto$)|(^1:1$)|(^4:3$)|(^3:2$)|(^16:9$)"

    export type AudioBitDepth = string; // pattern: "(^16$)|(^24$)"

    export type AudioBitOrder = string; // pattern: "(^LittleEndian$)"

    export type AudioBitRate = string; // pattern: "^\d{1,3}$"

    export type AudioChannels = string; // pattern: "(^auto$)|(^0$)|(^1$)|(^2$)"

    export type AudioCodec = string; // pattern: "(^AAC$)|(^vorbis$)|(^mp3$)|(^mp2$)|(^pcm$)|(^flac$)"

    export interface AudioCodecOptions {
      Profile?: AudioCodecProfile;
      BitDepth?: AudioBitDepth;
      BitOrder?: AudioBitOrder;
      Signed?: AudioSigned;
    }


    export type AudioCodecProfile = string; // pattern: "(^auto$)|(^AAC-LC$)|(^HE-AAC$)|(^HE-AACv2$)"

    export type AudioPackingMode = string; // pattern: "(^SingleTrack$)|(^OneChannelPerTrack$)|(^OneChannelPerTrackWithMosTo8Tracks$)"

    export interface AudioParameters {
      Codec?: AudioCodec;
      SampleRate?: AudioSampleRate;
      BitRate?: AudioBitRate;
      Channels?: AudioChannels;
      AudioPackingMode?: AudioPackingMode;
      CodecOptions?: AudioCodecOptions;
    }


    export type AudioSampleRate = string; // pattern: "(^auto$)|(^22050$)|(^32000$)|(^44100$)|(^48000$)|(^96000$)|(^192000$)"

    export type AudioSigned = string; // pattern: "(^Signed$)"

    export type Base64EncodedString = string; // pattern: "^$|(^(?:[A-Za-z0-9\+/]{4})*(?:[A-Za-z0-9\+/]{2}==|[A-Za-z0-9\+/]{3}=)?$)"

    export type BucketName = string; // pattern: "^(\w|\.|-){1,255}$"

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


    export type CaptionFormatFormat = string; // pattern: "(^mov-text$)|(^srt$)|(^scc$)|(^webvtt$)|(^dfxp$)"

    export type CaptionFormatPattern = string; // pattern: "(^$)|(^.*\{language\}.*$)"

    export type CaptionFormats = Array<CaptionFormat>; // max: 4

    export type CaptionMergePolicy = string; // pattern: "(^MergeOverride$)|(^MergeRetain$)|(^Override$)"

    export interface CaptionSource {
      Key?: Key;
      Language?: Key;
      TimeOffset?: TimeOffset;
      Label?: Name;
      Encryption?: Encryption;
    }


    export type CaptionSources = Array<CaptionSource>; // max: 20

    export interface Captions {
      MergePolicy?: CaptionMergePolicy;
      CaptionSources?: CaptionSources;
      CaptionFormats?: CaptionFormats;
    }


    export interface Clip {
      TimeSpan?: TimeSpan;
    }


    export type CodecOption = string;

    export type CodecOptions = any; // not really - it was 'map' instead - must fix this one

    export type Composition = Array<Clip>;

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


    export type CreateJobOutputs = Array<CreateJobOutput>; // max: 30

    export interface CreateJobPlaylist {
      Name?: Filename;
      Format?: PlaylistFormat;
      OutputKeys?: OutputKeys;
      HlsContentProtection?: HlsContentProtection;
      PlayReadyDrm?: PlayReadyDrm;
    }


    export type CreateJobPlaylists = Array<CreateJobPlaylist>; // max: 30

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


    export type Description = string;

    export interface DetectedProperties {
      Width?: NullableInteger;
      Height?: NullableInteger;
      FrameRate?: FloatString;
      FileSize?: NullableLong;
      DurationMillis?: NullableLong;
    }


    export type Digits = string; // pattern: "^\d{1,5}$"

    export type DigitsOrAuto = string; // pattern: "(^auto$)|(^\d{2,4}$)"

    export interface Encryption {
      Mode?: EncryptionMode;
      Key?: Base64EncodedString;
      KeyMd5?: Base64EncodedString;
      InitializationVector?: ZeroTo255String;
    }


    export type EncryptionMode = string; // pattern: "(^s3$)|(^s3-aws-kms$)|(^aes-cbc-pkcs7$)|(^aes-ctr$)|(^aes-gcm$)"

    export type ExceptionMessages = Array<String>;

    export type Filename = string;

    export type FixedGOP = string; // pattern: "(^true$)|(^false$)"

    export type FloatString = string; // pattern: "^\d{1,5}(\.\d{0,5})?$"

    export type FrameRate = string; // pattern: "(^auto$)|(^10$)|(^15$)|(^23.97$)|(^24$)|(^25$)|(^29.97$)|(^30$)|(^50$)|(^60$)"

    export type Grantee = string;

    export type GranteeType = string; // pattern: "(^Canonical$)|(^Email$)|(^Group$)"

    export interface HlsContentProtection {
      Method?: HlsContentProtectionMethod;
      Key?: Base64EncodedString;
      KeyMd5?: Base64EncodedString;
      InitializationVector?: ZeroTo255String;
      LicenseAcquisitionUrl?: ZeroTo512String;
      KeyStoragePolicy?: KeyStoragePolicy;
    }


    export type HlsContentProtectionMethod = string; // pattern: "(^aes-128$)"

    export type HorizontalAlign = string; // pattern: "(^Left$)|(^Right$)|(^Center$)"

    export type Id = string; // pattern: "^\d{13}-\w{6}$"

    export interface IncompatibleVersionException {
    }


    export type Interlaced = string; // pattern: "(^auto$)|(^true$)|(^false$)"

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


    export type JobContainer = string; // pattern: "(^auto$)|(^3gp$)|(^asf$)|(^avi$)|(^divx$)|(^flv$)|(^mkv$)|(^mov$)|(^mp4$)|(^mpeg$)|(^mpeg-ps$)|(^mpeg-ts$)|(^mxf$)|(^ogg$)|(^ts$)|(^vob$)|(^wav$)|(^webm$)|(^mp3$)|(^m4a$)|(^aac$)"

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


    export type JobOutputs = Array<JobOutput>;

    export type JobStatus = string; // pattern: "(^Submitted$)|(^Progressing$)|(^Complete$)|(^Canceled$)|(^Error$)"

    export interface JobWatermark {
      PresetWatermarkId?: PresetWatermarkId;
      InputKey?: WatermarkKey;
      Encryption?: Encryption;
    }


    export type JobWatermarks = Array<JobWatermark>;

    export type Jobs = Array<Job>;

    export type JpgOrPng = string; // pattern: "(^jpg$)|(^png$)"

    export type Key = string;

    export type KeyArn = string;

    export type KeyIdGuid = string; // pattern: "(^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{12}$)|(^[0-9A-Fa-f]{32}$)"

    export type KeyStoragePolicy = string; // pattern: "(^NoStore$)|(^WithVariantPlaylists$)"

    export type KeyframesMaxDist = string; // pattern: "^\d{1,6}$"

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


    export type MaxFrameRate = string; // pattern: "(^10$)|(^15$)|(^23.97$)|(^24$)|(^25$)|(^29.97$)|(^30$)|(^50$)|(^60$)"

    export type MergePolicy = string; // pattern: "(^Replace$)|(^Prepend$)|(^Append$)|(^Fallback$)"

    export type Name = string;

    export type NonEmptyBase64EncodedString = string; // pattern: "(^(?:[A-Za-z0-9\+/]{4})*(?:[A-Za-z0-9\+/]{2}==|[A-Za-z0-9\+/]{3}=)?$)"

    export interface Notifications {
      Progressing?: SnsTopic;
      Completed?: SnsTopic;
      Warning?: SnsTopic;
      Error?: SnsTopic;
    }


    export type NullableInteger = number;

    export type NullableLong = number;

    export type OneTo512String = string;

    export type Opacity = string; // pattern: "^\d{1,3}(\.\d{0,20})?$"

    export type OutputKeys = Array<Key>; // max: 30

    export type PaddingPolicy = string; // pattern: "(^Pad$)|(^NoPad$)"

    export interface Permission {
      GranteeType?: GranteeType;
      Grantee?: Grantee;
      Access?: AccessControls;
    }


    export type Permissions = Array<Permission>; // max: 30

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


    export type PipelineStatus = string; // pattern: "(^Active$)|(^Paused$)"

    export type Pipelines = Array<Pipeline>;

    export type PixelsOrPercent = string; // pattern: "(^\d{1,3}(\.\d{0,5})?%$)|(^\d{1,4}?px$)"

    export interface PlayReadyDrm {
      Format?: PlayReadyDrmFormatString;
      Key?: NonEmptyBase64EncodedString;
      KeyMd5?: NonEmptyBase64EncodedString;
      KeyId?: KeyIdGuid;
      InitializationVector?: ZeroTo255String;
      LicenseAcquisitionUrl?: OneTo512String;
    }


    export type PlayReadyDrmFormatString = string; // pattern: "(^microsoft$)|(^discretix-3.0$)"

    export interface Playlist {
      Name?: Filename;
      Format?: PlaylistFormat;
      OutputKeys?: OutputKeys;
      HlsContentProtection?: HlsContentProtection;
      PlayReadyDrm?: PlayReadyDrm;
      Status?: JobStatus;
      StatusDetail?: Description;
    }


    export type PlaylistFormat = string; // pattern: "(^HLSv3$)|(^HLSv4$)|(^Smooth$)"

    export type Playlists = Array<Playlist>;

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


    export type PresetContainer = string; // pattern: "(^mp4$)|(^ts$)|(^webm$)|(^mp3$)|(^flac$)|(^oga$)|(^ogg$)|(^fmp4$)|(^mpg$)|(^flv$)|(^gif$)|(^mxf$)"

    export type PresetType = string; // pattern: "(^System$)|(^Custom$)"

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


    export type PresetWatermarkId = string;

    export type PresetWatermarks = Array<PresetWatermark>;

    export type Presets = Array<Preset>;

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


    export type Resolution = string; // pattern: "(^auto$)|(^\d{1,5}x\d{1,5}$)"

    export interface ResourceInUseException {
    }


    export interface ResourceNotFoundException {
    }


    export type Role = string; // pattern: "^arn:aws:iam::\w{12}:role/.+$"

    export type Rotate = string; // pattern: "(^auto$)|(^0$)|(^90$)|(^180$)|(^270$)"

    export type SizingPolicy = string; // pattern: "(^Fit$)|(^Fill$)|(^Stretch$)|(^Keep$)|(^ShrinkToFit$)|(^ShrinkToFill$)"

    export type SnsTopic = string; // pattern: "(^$)|(^arn:aws:sns:.*:\w{12}:.+$)"

    export type SnsTopics = Array<SnsTopic>; // max: 30

    export type StorageClass = string; // pattern: "(^ReducedRedundancy$)|(^Standard$)"

    export type String = string;

    export type Success = string; // pattern: "(^true$)|(^false$)"

    export type Target = string; // pattern: "(^Content$)|(^Frame$)"

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


    export type ThumbnailPattern = string; // pattern: "(^$)|(^.*\{count\}.*$)"

    export type ThumbnailResolution = string; // pattern: "^\d{1,5}x\d{1,5}$"

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


    export type Time = string; // pattern: "(^\d{1,5}(\.\d{0,3})?$)|(^([0-1]?[0-9]:|2[0-3]:)?([0-5]?[0-9]:)?[0-5]?[0-9](\.\d{0,3})?$)"

    export type TimeOffset = string; // pattern: "(^[+-]?\d{1,5}(\.\d{0,3})?$)|(^[+-]?([0-1]?[0-9]:|2[0-3]:)?([0-5]?[0-9]:)?[0-5]?[0-9](\.\d{0,3})?$)"

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


    export type UserMetadata = any; // not really - it was 'map' instead - must fix this one

    export interface ValidationException {
    }


    export type VerticalAlign = string; // pattern: "(^Top$)|(^Bottom$)|(^Center$)"

    export type VideoBitRate = string; // pattern: "(^\d{2,5}$)|(^auto$)"

    export type VideoCodec = string; // pattern: "(^H\.264$)|(^vp8$)|(^mpeg2$)|(^gif$)"

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


    export type Warnings = Array<Warning>;

    export type WatermarkKey = string; // pattern: "(^.{1,}.jpg$)|(^.{1,}.jpeg$)|(^.{1,}.png$)"

    export type WatermarkSizingPolicy = string; // pattern: "(^Fit$)|(^Stretch$)|(^ShrinkToFit$)"

    export type ZeroTo255String = string;

    export type ZeroTo512String = string;

}
