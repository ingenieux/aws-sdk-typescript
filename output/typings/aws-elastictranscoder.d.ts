// Type definitions for aws-sdk - Amazon Elastic Transcoder
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

// COMMENTED <reference path="./aws-sdk.d.ts" />

declare module "aws-sdk" {

  /**
    * apiVersion: 2012-09-25
    * endpointPrefix: elastictranscoder
    * serviceAbbreviation: 
    * signatureVersion: v4
    * protocol: rest-json
    *
    * AWS Elastic Transcoder Service The AWS Elastic Transcoder Service.
    *
    */
  export class ElasticTranscoder extends Service {
    constructor(options?: any);
    endpoint: Endpoint;
    /**
     * The CancelJob operation cancels an unfinished job.

You can only cancel a job that has a status of Submitted. To prevent a pipeline
from starting to process a job while you&#x27;re getting the job identifier, use 
UpdatePipelineStatus to temporarily pause the pipeline.
     *
     * @error ValidationException   
     * @error IncompatibleVersionException   
     * @error ResourceNotFoundException   
     * @error ResourceInUseException   
     * @error AccessDeniedException   
     * @error InternalServiceException   
     */
    cancelJob(params: ElasticTranscoder.CancelJobRequest, callback?: (err: ElasticTranscoder.ValidationException | ElasticTranscoder.IncompatibleVersionException | ElasticTranscoder.ResourceNotFoundException | ElasticTranscoder.ResourceInUseException | ElasticTranscoder.AccessDeniedException | ElasticTranscoder.InternalServiceException | any, data: ElasticTranscoder.CancelJobResponse | any) => void): Request<ElasticTranscoder.CancelJobResponse | any, ElasticTranscoder.ValidationException | ElasticTranscoder.IncompatibleVersionException | ElasticTranscoder.ResourceNotFoundException | ElasticTranscoder.ResourceInUseException | ElasticTranscoder.AccessDeniedException | ElasticTranscoder.InternalServiceException | any>;
    /**
     * When you create a job, Elastic Transcoder returns JSON data that includes the
values that you specified plus information about the job that is created. 

If you have specified more than one output for your jobs (for example, one
output for the Kindle Fire and another output for the Apple iPhone 4s), you
currently must use the Elastic Transcoder API to list the jobs (as opposed to
the AWS Console).
     *
     * @error ValidationException   
     * @error IncompatibleVersionException   
     * @error ResourceNotFoundException   
     * @error AccessDeniedException   
     * @error LimitExceededException   
     * @error InternalServiceException   
     */
    createJob(params: ElasticTranscoder.CreateJobRequest, callback?: (err: ElasticTranscoder.ValidationException | ElasticTranscoder.IncompatibleVersionException | ElasticTranscoder.ResourceNotFoundException | ElasticTranscoder.AccessDeniedException | ElasticTranscoder.LimitExceededException | ElasticTranscoder.InternalServiceException | any, data: ElasticTranscoder.CreateJobResponse | any) => void): Request<ElasticTranscoder.CreateJobResponse | any, ElasticTranscoder.ValidationException | ElasticTranscoder.IncompatibleVersionException | ElasticTranscoder.ResourceNotFoundException | ElasticTranscoder.AccessDeniedException | ElasticTranscoder.LimitExceededException | ElasticTranscoder.InternalServiceException | any>;
    /**
     * The CreatePipeline operation creates a pipeline with settings that you specify.
     *
     * @error ValidationException   
     * @error IncompatibleVersionException   
     * @error AccessDeniedException   
     * @error ResourceNotFoundException   
     * @error LimitExceededException   
     * @error InternalServiceException   
     */
    createPipeline(params: ElasticTranscoder.CreatePipelineRequest, callback?: (err: ElasticTranscoder.ValidationException | ElasticTranscoder.IncompatibleVersionException | ElasticTranscoder.AccessDeniedException | ElasticTranscoder.ResourceNotFoundException | ElasticTranscoder.LimitExceededException | ElasticTranscoder.InternalServiceException | any, data: ElasticTranscoder.CreatePipelineResponse | any) => void): Request<ElasticTranscoder.CreatePipelineResponse | any, ElasticTranscoder.ValidationException | ElasticTranscoder.IncompatibleVersionException | ElasticTranscoder.AccessDeniedException | ElasticTranscoder.ResourceNotFoundException | ElasticTranscoder.LimitExceededException | ElasticTranscoder.InternalServiceException | any>;
    /**
     * The CreatePreset operation creates a preset with settings that you specify.

Elastic Transcoder checks the CreatePreset settings to ensure that they meet
Elastic Transcoder requirements and to determine whether they comply with H.264
standards. If your settings are not valid for Elastic Transcoder, Elastic
Transcoder returns an HTTP 400 response (ValidationException) and does not
create the preset. If the settings are valid for Elastic Transcoder but aren&#x27;t
strictly compliant with the H.264 standard, Elastic Transcoder creates the
preset and returns a warning message in the response. This helps you determine
whether your settings comply with the H.264 standard while giving you greater
flexibility with respect to the video that Elastic Transcoder produces. Elastic
Transcoder uses the H.264 video-compression format. For more information, see
the International Telecommunication Union publication Recommendation ITU-T
H.264: Advanced video coding for generic audiovisual services.
     *
     * @error ValidationException   
     * @error IncompatibleVersionException   
     * @error AccessDeniedException   
     * @error LimitExceededException   
     * @error InternalServiceException   
     */
    createPreset(params: ElasticTranscoder.CreatePresetRequest, callback?: (err: ElasticTranscoder.ValidationException | ElasticTranscoder.IncompatibleVersionException | ElasticTranscoder.AccessDeniedException | ElasticTranscoder.LimitExceededException | ElasticTranscoder.InternalServiceException | any, data: ElasticTranscoder.CreatePresetResponse | any) => void): Request<ElasticTranscoder.CreatePresetResponse | any, ElasticTranscoder.ValidationException | ElasticTranscoder.IncompatibleVersionException | ElasticTranscoder.AccessDeniedException | ElasticTranscoder.LimitExceededException | ElasticTranscoder.InternalServiceException | any>;
    /**
     * The DeletePipeline operation removes a pipeline.

 You can only delete a pipeline that has never been used or that is not
currently in use (doesn&#x27;t contain any active jobs). If the pipeline is currently
in use, DeletePipeline returns an error.
     *
     * @error ValidationException   
     * @error IncompatibleVersionException   
     * @error ResourceNotFoundException   
     * @error ResourceInUseException   
     * @error AccessDeniedException   
     * @error InternalServiceException   
     */
    deletePipeline(params: ElasticTranscoder.DeletePipelineRequest, callback?: (err: ElasticTranscoder.ValidationException | ElasticTranscoder.IncompatibleVersionException | ElasticTranscoder.ResourceNotFoundException | ElasticTranscoder.ResourceInUseException | ElasticTranscoder.AccessDeniedException | ElasticTranscoder.InternalServiceException | any, data: ElasticTranscoder.DeletePipelineResponse | any) => void): Request<ElasticTranscoder.DeletePipelineResponse | any, ElasticTranscoder.ValidationException | ElasticTranscoder.IncompatibleVersionException | ElasticTranscoder.ResourceNotFoundException | ElasticTranscoder.ResourceInUseException | ElasticTranscoder.AccessDeniedException | ElasticTranscoder.InternalServiceException | any>;
    /**
     * The DeletePreset operation removes a preset that you&#x27;ve added in an AWS region.

You can&#x27;t delete the default presets that are included with Elastic Transcoder.
     *
     * @error ValidationException   
     * @error IncompatibleVersionException   
     * @error ResourceNotFoundException   
     * @error AccessDeniedException   
     * @error InternalServiceException   
     */
    deletePreset(params: ElasticTranscoder.DeletePresetRequest, callback?: (err: ElasticTranscoder.ValidationException | ElasticTranscoder.IncompatibleVersionException | ElasticTranscoder.ResourceNotFoundException | ElasticTranscoder.AccessDeniedException | ElasticTranscoder.InternalServiceException | any, data: ElasticTranscoder.DeletePresetResponse | any) => void): Request<ElasticTranscoder.DeletePresetResponse | any, ElasticTranscoder.ValidationException | ElasticTranscoder.IncompatibleVersionException | ElasticTranscoder.ResourceNotFoundException | ElasticTranscoder.AccessDeniedException | ElasticTranscoder.InternalServiceException | any>;
    /**
     * The ListJobsByPipeline operation gets a list of the jobs currently in a
pipeline.

Elastic Transcoder returns all of the jobs currently in the specified pipeline.
The response body contains one element for each job that satisfies the search
criteria.
     *
     * @error ValidationException   
     * @error IncompatibleVersionException   
     * @error ResourceNotFoundException   
     * @error AccessDeniedException   
     * @error InternalServiceException   
     */
    listJobsByPipeline(params: ElasticTranscoder.ListJobsByPipelineRequest, callback?: (err: ElasticTranscoder.ValidationException | ElasticTranscoder.IncompatibleVersionException | ElasticTranscoder.ResourceNotFoundException | ElasticTranscoder.AccessDeniedException | ElasticTranscoder.InternalServiceException | any, data: ElasticTranscoder.ListJobsByPipelineResponse | any) => void): Request<ElasticTranscoder.ListJobsByPipelineResponse | any, ElasticTranscoder.ValidationException | ElasticTranscoder.IncompatibleVersionException | ElasticTranscoder.ResourceNotFoundException | ElasticTranscoder.AccessDeniedException | ElasticTranscoder.InternalServiceException | any>;
    /**
     * The ListJobsByStatus operation gets a list of jobs that have a specified status.
The response body contains one element for each job that satisfies the search
criteria.
     *
     * @error ValidationException   
     * @error IncompatibleVersionException   
     * @error ResourceNotFoundException   
     * @error AccessDeniedException   
     * @error InternalServiceException   
     */
    listJobsByStatus(params: ElasticTranscoder.ListJobsByStatusRequest, callback?: (err: ElasticTranscoder.ValidationException | ElasticTranscoder.IncompatibleVersionException | ElasticTranscoder.ResourceNotFoundException | ElasticTranscoder.AccessDeniedException | ElasticTranscoder.InternalServiceException | any, data: ElasticTranscoder.ListJobsByStatusResponse | any) => void): Request<ElasticTranscoder.ListJobsByStatusResponse | any, ElasticTranscoder.ValidationException | ElasticTranscoder.IncompatibleVersionException | ElasticTranscoder.ResourceNotFoundException | ElasticTranscoder.AccessDeniedException | ElasticTranscoder.InternalServiceException | any>;
    /**
     * The ListPipelines operation gets a list of the pipelines associated with the
current AWS account.
     *
     * @error ValidationException   
     * @error IncompatibleVersionException   
     * @error AccessDeniedException   
     * @error InternalServiceException   
     */
    listPipelines(params: ElasticTranscoder.ListPipelinesRequest, callback?: (err: ElasticTranscoder.ValidationException | ElasticTranscoder.IncompatibleVersionException | ElasticTranscoder.AccessDeniedException | ElasticTranscoder.InternalServiceException | any, data: ElasticTranscoder.ListPipelinesResponse | any) => void): Request<ElasticTranscoder.ListPipelinesResponse | any, ElasticTranscoder.ValidationException | ElasticTranscoder.IncompatibleVersionException | ElasticTranscoder.AccessDeniedException | ElasticTranscoder.InternalServiceException | any>;
    /**
     * The ListPresets operation gets a list of the default presets included with
Elastic Transcoder and the presets that you&#x27;ve added in an AWS region.
     *
     * @error ValidationException   
     * @error IncompatibleVersionException   
     * @error AccessDeniedException   
     * @error InternalServiceException   
     */
    listPresets(params: ElasticTranscoder.ListPresetsRequest, callback?: (err: ElasticTranscoder.ValidationException | ElasticTranscoder.IncompatibleVersionException | ElasticTranscoder.AccessDeniedException | ElasticTranscoder.InternalServiceException | any, data: ElasticTranscoder.ListPresetsResponse | any) => void): Request<ElasticTranscoder.ListPresetsResponse | any, ElasticTranscoder.ValidationException | ElasticTranscoder.IncompatibleVersionException | ElasticTranscoder.AccessDeniedException | ElasticTranscoder.InternalServiceException | any>;
    /**
     * The ReadJob operation returns detailed information about a job.
     *
     * @error ValidationException   
     * @error IncompatibleVersionException   
     * @error ResourceNotFoundException   
     * @error AccessDeniedException   
     * @error InternalServiceException   
     */
    readJob(params: ElasticTranscoder.ReadJobRequest, callback?: (err: ElasticTranscoder.ValidationException | ElasticTranscoder.IncompatibleVersionException | ElasticTranscoder.ResourceNotFoundException | ElasticTranscoder.AccessDeniedException | ElasticTranscoder.InternalServiceException | any, data: ElasticTranscoder.ReadJobResponse | any) => void): Request<ElasticTranscoder.ReadJobResponse | any, ElasticTranscoder.ValidationException | ElasticTranscoder.IncompatibleVersionException | ElasticTranscoder.ResourceNotFoundException | ElasticTranscoder.AccessDeniedException | ElasticTranscoder.InternalServiceException | any>;
    /**
     * The ReadPipeline operation gets detailed information about a pipeline.
     *
     * @error ValidationException   
     * @error IncompatibleVersionException   
     * @error ResourceNotFoundException   
     * @error AccessDeniedException   
     * @error InternalServiceException   
     */
    readPipeline(params: ElasticTranscoder.ReadPipelineRequest, callback?: (err: ElasticTranscoder.ValidationException | ElasticTranscoder.IncompatibleVersionException | ElasticTranscoder.ResourceNotFoundException | ElasticTranscoder.AccessDeniedException | ElasticTranscoder.InternalServiceException | any, data: ElasticTranscoder.ReadPipelineResponse | any) => void): Request<ElasticTranscoder.ReadPipelineResponse | any, ElasticTranscoder.ValidationException | ElasticTranscoder.IncompatibleVersionException | ElasticTranscoder.ResourceNotFoundException | ElasticTranscoder.AccessDeniedException | ElasticTranscoder.InternalServiceException | any>;
    /**
     * The ReadPreset operation gets detailed information about a preset.
     *
     * @error ValidationException   
     * @error IncompatibleVersionException   
     * @error ResourceNotFoundException   
     * @error AccessDeniedException   
     * @error InternalServiceException   
     */
    readPreset(params: ElasticTranscoder.ReadPresetRequest, callback?: (err: ElasticTranscoder.ValidationException | ElasticTranscoder.IncompatibleVersionException | ElasticTranscoder.ResourceNotFoundException | ElasticTranscoder.AccessDeniedException | ElasticTranscoder.InternalServiceException | any, data: ElasticTranscoder.ReadPresetResponse | any) => void): Request<ElasticTranscoder.ReadPresetResponse | any, ElasticTranscoder.ValidationException | ElasticTranscoder.IncompatibleVersionException | ElasticTranscoder.ResourceNotFoundException | ElasticTranscoder.AccessDeniedException | ElasticTranscoder.InternalServiceException | any>;
    /**
     * The TestRole operation tests the IAM role used to create the pipeline.

The TestRole action lets you determine whether the IAM role you are using has
sufficient permissions to let Elastic Transcoder perform tasks associated with
the transcoding process. The action attempts to assume the specified IAM role,
checks read access to the input and output buckets, and tries to send a test
notification to Amazon SNS topics that you specify.
     *
     * @error ValidationException   
     * @error IncompatibleVersionException   
     * @error ResourceNotFoundException   
     * @error AccessDeniedException   
     * @error InternalServiceException   
     */
    testRole(params: ElasticTranscoder.TestRoleRequest, callback?: (err: ElasticTranscoder.ValidationException | ElasticTranscoder.IncompatibleVersionException | ElasticTranscoder.ResourceNotFoundException | ElasticTranscoder.AccessDeniedException | ElasticTranscoder.InternalServiceException | any, data: ElasticTranscoder.TestRoleResponse | any) => void): Request<ElasticTranscoder.TestRoleResponse | any, ElasticTranscoder.ValidationException | ElasticTranscoder.IncompatibleVersionException | ElasticTranscoder.ResourceNotFoundException | ElasticTranscoder.AccessDeniedException | ElasticTranscoder.InternalServiceException | any>;
    /**
     * Use the UpdatePipeline operation to update settings for a pipeline. When you
change pipeline settings, your changes take effect immediately. Jobs that you
have already submitted and that Elastic Transcoder has not started to process
are affected in addition to jobs that you submit after you change settings.
     *
     * @error ValidationException   
     * @error IncompatibleVersionException   
     * @error AccessDeniedException   
     * @error ResourceInUseException   
     * @error ResourceNotFoundException   
     * @error InternalServiceException   
     */
    updatePipeline(params: ElasticTranscoder.UpdatePipelineRequest, callback?: (err: ElasticTranscoder.ValidationException | ElasticTranscoder.IncompatibleVersionException | ElasticTranscoder.AccessDeniedException | ElasticTranscoder.ResourceInUseException | ElasticTranscoder.ResourceNotFoundException | ElasticTranscoder.InternalServiceException | any, data: ElasticTranscoder.UpdatePipelineResponse | any) => void): Request<ElasticTranscoder.UpdatePipelineResponse | any, ElasticTranscoder.ValidationException | ElasticTranscoder.IncompatibleVersionException | ElasticTranscoder.AccessDeniedException | ElasticTranscoder.ResourceInUseException | ElasticTranscoder.ResourceNotFoundException | ElasticTranscoder.InternalServiceException | any>;
    /**
     * With the UpdatePipelineNotifications operation, you can update Amazon Simple
Notification Service (Amazon SNS) notifications for a pipeline.

When you update notifications for a pipeline, Elastic Transcoder returns the
values that you specified in the request.
     *
     * @error ValidationException   
     * @error IncompatibleVersionException   
     * @error ResourceNotFoundException   
     * @error ResourceInUseException   
     * @error AccessDeniedException   
     * @error InternalServiceException   
     */
    updatePipelineNotifications(params: ElasticTranscoder.UpdatePipelineNotificationsRequest, callback?: (err: ElasticTranscoder.ValidationException | ElasticTranscoder.IncompatibleVersionException | ElasticTranscoder.ResourceNotFoundException | ElasticTranscoder.ResourceInUseException | ElasticTranscoder.AccessDeniedException | ElasticTranscoder.InternalServiceException | any, data: ElasticTranscoder.UpdatePipelineNotificationsResponse | any) => void): Request<ElasticTranscoder.UpdatePipelineNotificationsResponse | any, ElasticTranscoder.ValidationException | ElasticTranscoder.IncompatibleVersionException | ElasticTranscoder.ResourceNotFoundException | ElasticTranscoder.ResourceInUseException | ElasticTranscoder.AccessDeniedException | ElasticTranscoder.InternalServiceException | any>;
    /**
     * The UpdatePipelineStatus operation pauses or reactivates a pipeline, so that the
pipeline stops or restarts the processing of jobs.

Changing the pipeline status is useful if you want to cancel one or more jobs.
You can&#x27;t cancel jobs after Elastic Transcoder has started processing them; if
you pause the pipeline to which you submitted the jobs, you have more time to
get the job IDs for the jobs that you want to cancel, and to send a CancelJob 
request.
     *
     * @error ValidationException   
     * @error IncompatibleVersionException   
     * @error ResourceNotFoundException   
     * @error ResourceInUseException   
     * @error AccessDeniedException   
     * @error InternalServiceException   
     */
    updatePipelineStatus(params: ElasticTranscoder.UpdatePipelineStatusRequest, callback?: (err: ElasticTranscoder.ValidationException | ElasticTranscoder.IncompatibleVersionException | ElasticTranscoder.ResourceNotFoundException | ElasticTranscoder.ResourceInUseException | ElasticTranscoder.AccessDeniedException | ElasticTranscoder.InternalServiceException | any, data: ElasticTranscoder.UpdatePipelineStatusResponse | any) => void): Request<ElasticTranscoder.UpdatePipelineStatusResponse | any, ElasticTranscoder.ValidationException | ElasticTranscoder.IncompatibleVersionException | ElasticTranscoder.ResourceNotFoundException | ElasticTranscoder.ResourceInUseException | ElasticTranscoder.AccessDeniedException | ElasticTranscoder.InternalServiceException | any>;

  }

  export module ElasticTranscoder {

    export type AccessControl = string;

    export type AccessControls = AccessControl[];

    export type Artworks = Artwork[];

    export type Ascending = string;

    export type AspectRatio = string;

    export type AudioBitDepth = string;

    export type AudioBitOrder = string;

    export type AudioBitRate = string;

    export type AudioChannels = string;

    export type AudioCodec = string;

    export type AudioCodecProfile = string;

    export type AudioPackingMode = string;

    export type AudioSampleRate = string;

    export type AudioSigned = string;

    export type Base64EncodedString = string;

    export type BucketName = string;

    export type CaptionFormatFormat = string;

    export type CaptionFormatPattern = string;

    export type CaptionFormats = CaptionFormat[];

    export type CaptionMergePolicy = string;

    export type CaptionSources = CaptionSource[];

    export type CodecOption = string;

    export type CodecOptions = { [key: string]: CodecOption };

    export type Composition = Clip[];

    export type CreateJobOutputs = CreateJobOutput[];

    export type CreateJobPlaylists = CreateJobPlaylist[];

    export type Description = string;

    export type Digits = string;

    export type DigitsOrAuto = string;

    export type EncryptionMode = string;

    export type ExceptionMessages = String[];

    export type Filename = string;

    export type FixedGOP = string;

    export type FloatString = string;

    export type FrameRate = string;

    export type Grantee = string;

    export type GranteeType = string;

    export type HlsContentProtectionMethod = string;

    export type HorizontalAlign = string;

    export type Id = string;

    export type Interlaced = string;

    export type JobContainer = string;

    export type JobOutputs = JobOutput[];

    export type JobStatus = string;

    export type JobWatermarks = JobWatermark[];

    export type Jobs = Job[];

    export type JpgOrPng = string;

    export type Key = string;

    export type KeyArn = string;

    export type KeyIdGuid = string;

    export type KeyStoragePolicy = string;

    export type KeyframesMaxDist = string;

    export type LongKey = string;

    export type MaxFrameRate = string;

    export type MergePolicy = string;

    export type Name = string;

    export type NonEmptyBase64EncodedString = string;

    export type NullableInteger = number;

    export type NullableLong = number;

    export type OneTo512String = string;

    export type Opacity = string;

    export type OutputKeys = Key[];

    export type PaddingPolicy = string;

    export type Permissions = Permission[];

    export type PipelineStatus = string;

    export type Pipelines = Pipeline[];

    export type PixelsOrPercent = string;

    export type PlayReadyDrmFormatString = string;

    export type PlaylistFormat = string;

    export type Playlists = Playlist[];

    export type PresetContainer = string;

    export type PresetType = string;

    export type PresetWatermarkId = string;

    export type PresetWatermarks = PresetWatermark[];

    export type Presets = Preset[];

    export type Resolution = string;

    export type Role = string;

    export type Rotate = string;

    export type SizingPolicy = string;

    export type SnsTopic = string;

    export type SnsTopics = SnsTopic[];

    export type StorageClass = string;

    export type String = string;

    export type Success = string;

    export type Target = string;

    export type ThumbnailPattern = string;

    export type ThumbnailResolution = string;

    export type Time = string;

    export type TimeOffset = string;

    export type UserMetadata = { [key: string]: String };

    export type VerticalAlign = string;

    export type VideoBitRate = string;

    export type VideoCodec = string;

    export type Warnings = Warning[];

    export type WatermarkKey = string;

    export type WatermarkSizingPolicy = string;

    export type ZeroTo255String = string;

    export type ZeroTo512String = string;

    export interface AccessDeniedException {
    }
    export interface Artwork {
      /** The name of the file to be used as album art. To determine which Amazon S3
bucket contains the specified file, Elastic Transcoder checks the pipeline
specified by PipelineId; the InputBucket object in that pipeline identifies the
bucket.

If the file name includes a prefix, for example, cooking/pie.jpg, include the
prefix in the key. If the file isn&#x27;t in the specified bucket, Elastic Transcoder
returns an error. **/
      InputKey?: WatermarkKey;
      /** The maximum width of the output album art in pixels. If you specify auto,
Elastic Transcoder uses 600 as the default value. If you specify a numeric
value, enter an even integer between 32 and 4096, inclusive. **/
      MaxWidth?: DigitsOrAuto;
      /** The maximum height of the output album art in pixels. If you specify auto,
Elastic Transcoder uses 600 as the default value. If you specify a numeric
value, enter an even integer between 32 and 3072, inclusive. **/
      MaxHeight?: DigitsOrAuto;
      /** Specify one of the following values to control scaling of the output album art:

&amp;#42; Fit: Elastic Transcoder scales the output art so it matches the value that
 you specified in either MaxWidth or MaxHeight without exceeding the other
 value.
&amp;#42; Fill: Elastic Transcoder scales the output art so it matches the value that
 you specified in either MaxWidth or MaxHeight and matches or exceeds the
 other value. Elastic Transcoder centers the output art and then crops it in
 the dimension (if any) that exceeds the maximum value. 
&amp;#42; Stretch: Elastic Transcoder stretches the output art to match the values that
 you specified for MaxWidth and MaxHeight. If the relative proportions of the
 input art and the output art are different, the output art will be distorted.
&amp;#42; Keep: Elastic Transcoder does not scale the output art. If either dimension
 of the input art exceeds the values that you specified for MaxWidth and 
 MaxHeight, Elastic Transcoder crops the output art.
&amp;#42; ShrinkToFit: Elastic Transcoder scales the output art down so that its
 dimensions match the values that you specified for at least one of MaxWidth 
 and MaxHeight without exceeding either value. If you specify this option,
 Elastic Transcoder does not scale the art up.
&amp;#42; ShrinkToFill Elastic Transcoder scales the output art down so that its
 dimensions match the values that you specified for at least one of MaxWidth 
 and MaxHeight without dropping below either value. If you specify this
 option, Elastic Transcoder does not scale the art up. **/
      SizingPolicy?: SizingPolicy;
      /** When you set PaddingPolicy to Pad, Elastic Transcoder may add white bars to the
top and bottom and/or left and right sides of the output album art to make the
total size of the output art match the values that you specified for MaxWidth 
and MaxHeight. **/
      PaddingPolicy?: PaddingPolicy;
      /** The format of album art, if any. Valid formats are .jpg and .png. **/
      AlbumArtFormat?: JpgOrPng;
      /** The encryption settings, if any, that you want Elastic Transcoder to apply to
your artwork. **/
      Encryption?: Encryption;
    }
    export interface AudioCodecOptions {
      /** You can only choose an audio profile when you specify AAC for the value of
Audio:Codec.

Specify the AAC profile for the output file. Elastic Transcoder supports the
following profiles:

&amp;#42; auto: If you specify auto, Elastic Transcoder will select the profile based
 on the bit rate selected for the output file.
&amp;#42; AAC-LC: The most common AAC profile. Use for bit rates larger than 64 kbps.
&amp;#42; HE-AAC: Not supported on some older players and devices. Use for bit rates
 between 40 and 80 kbps.
&amp;#42; HE-AACv2: Not supported on some players and devices. Use for bit rates less
 than 48 kbps.

All outputs in a Smooth playlist must have the same value for Profile.

If you created any presets before AAC profiles were added, Elastic Transcoder
automatically updated your presets to use AAC-LC. You can change the value as
required. **/
      Profile?: AudioCodecProfile;
      /** You can only choose an audio bit depth when you specify flac or pcm for the
value of Audio:Codec.

The bit depth of a sample is how many bits of information are included in the
audio samples. The higher the bit depth, the better the audio, but the larger
the file.

Valid values are 16 and 24.

The most common bit depth is 24. **/
      BitDepth?: AudioBitDepth;
      /** You can only choose an audio bit order when you specify pcm for the value of
Audio:Codec.

The order the bits of a PCM sample are stored in.

The supported value is LittleEndian. **/
      BitOrder?: AudioBitOrder;
      /** You can only choose whether an audio sample is signed when you specify pcm for
the value of Audio:Codec.

Whether audio samples are represented with negative and positive numbers
(signed) or only positive numbers (unsigned).

The supported value is Signed. **/
      Signed?: AudioSigned;
    }
    export interface AudioParameters {
      /** The audio codec for the output file. Valid values include aac, flac, mp2, mp3, 
pcm, and vorbis. **/
      Codec?: AudioCodec;
      /** The sample rate of the audio stream in the output file, in Hertz. Valid values
include:

auto, 22050, 32000, 44100, 48000, 96000

If you specify auto, Elastic Transcoder automatically detects the sample rate. **/
      SampleRate?: AudioSampleRate;
      /** The bit rate of the audio stream in the output file, in kilobits/second. Enter
an integer between 64 and 320, inclusive. **/
      BitRate?: AudioBitRate;
      /** The number of audio channels in the output file. The following values are valid:

auto, 0, 1, 2

One channel carries the information played by a single speaker. For example, a
stereo track with two channels sends one channel to the left speaker, and the
other channel to the right speaker. The output channels are organized into
tracks. If you want Elastic Transcoder to automatically detect the number of
audio channels in the input file and use that value for the output file, select 
auto.

The output of a specific channel value and inputs are as follows:

&amp;#42; auto channel specified, with any input: Pass through up to eight input
 channels.
&amp;#42; 0 channels specified, with any input: Audio omitted from the output.
&amp;#42; 1 channel specified, with at least one input channel: Mono sound.
&amp;#42; 2 channels specified, with any input: Two identical mono channels or stereo.
 For more information about tracks, see Audio:AudioPackingMode.

For more information about how Elastic Transcoder organizes channels and
tracks, see Audio:AudioPackingMode. **/
      Channels?: AudioChannels;
      /** The method of organizing audio channels and tracks. Use Audio:Channels to
specify the number of channels in your output, and Audio:AudioPackingMode to
specify the number of tracks and their relation to the channels. If you do not
specify an Audio:AudioPackingMode, Elastic Transcoder uses SingleTrack.

The following values are valid:

SingleTrack, OneChannelPerTrack, and OneChannelPerTrackWithMosTo8Tracks

When you specify SingleTrack, Elastic Transcoder creates a single track for your
output. The track can have up to eight channels. Use SingleTrack for all non-mxf 
containers.

The outputs of SingleTrack for a specific channel value and inputs are as
follows:

&amp;#42; 0 channels with any input: Audio omitted from the output
&amp;#42; 1, 2, or auto channels with no audio input: Audio omitted from the output
&amp;#42; 1 channel with any input with audio: One track with one channel, downmixed if
 necessary
&amp;#42; 2 channels with one track with one channel: One track with two identical
 channels
&amp;#42; 2 or auto channels with two tracks with one channel each: One track with two
 channels
&amp;#42; 2 or auto channels with one track with two channels: One track with two
 channels
&amp;#42; 2 channels with one track with multiple channels: One track with two channels
&amp;#42; auto channels with one track with one channel: One track with one channel
&amp;#42; auto channels with one track with multiple channels: One track with multiple
 channels

When you specify OneChannelPerTrack, Elastic Transcoder creates a new track for
every channel in your output. Your output can have up to eight single-channel
tracks.

The outputs of OneChannelPerTrack for a specific channel value and inputs are as
follows:

&amp;#42; 0 channels with any input: Audio omitted from the output
&amp;#42; 1, 2, or auto channels with no audio input: Audio omitted from the output
&amp;#42; 1 channel with any input with audio: One track with one channel, downmixed if
 necessary
&amp;#42; 2 channels with one track with one channel: Two tracks with one identical
 channel each
&amp;#42; 2 or auto channels with two tracks with one channel each: Two tracks with one
 channel each
&amp;#42; 2 or auto channels with one track with two channels: Two tracks with one
 channel each
&amp;#42; 2 channels with one track with multiple channels: Two tracks with one channel
 each
&amp;#42; auto channels with one track with one channel: One track with one channel
&amp;#42; auto channels with one track with multiple channels: Up to eight tracks with
 one channel each

When you specify OneChannelPerTrackWithMosTo8Tracks, Elastic Transcoder creates
eight single-channel tracks for your output. All tracks that do not contain
audio data from an input channel are MOS, or Mit Out Sound, tracks.

The outputs of OneChannelPerTrackWithMosTo8Tracks for a specific channel value
and inputs are as follows:

&amp;#42; 0 channels with any input: Audio omitted from the output
&amp;#42; 1, 2, or auto channels with no audio input: Audio omitted from the output
&amp;#42; 1 channel with any input with audio: One track with one channel, downmixed if
 necessary, plus six MOS tracks
&amp;#42; 2 channels with one track with one channel: Two tracks with one identical
 channel each, plus six MOS tracks
&amp;#42; 2 or auto channels with two tracks with one channel each: Two tracks with one
 channel each, plus six MOS tracks
&amp;#42; 2 or auto channels with one track with two channels: Two tracks with one
 channel each, plus six MOS tracks
&amp;#42; 2 channels with one track with multiple channels: Two tracks with one channel
 each, plus six MOS tracks
&amp;#42; auto channels with one track with one channel: One track with one channel,
 plus seven MOS tracks
&amp;#42; auto channels with one track with multiple channels: Up to eight tracks with
 one channel each, plus MOS tracks until there are eight tracks in all **/
      AudioPackingMode?: AudioPackingMode;
      /** If you specified AAC for Audio:Codec, this is the AAC compression profile to
use. Valid values include:

auto, AAC-LC, HE-AAC, HE-AACv2

If you specify auto, Elastic Transcoder chooses a profile based on the bit rate
of the output file. **/
      CodecOptions?: AudioCodecOptions;
    }
    export interface CancelJobRequest {
      /** The identifier of the job that you want to cancel. 

To get a list of the jobs (including their jobId) that have a status of 
Submitted, use the ListJobsByStatus API action. **/
      Id: Id;
    }
    export interface CancelJobResponse {
    }
    export interface CaptionFormat {
      /** The format you specify determines whether Elastic Transcoder generates an
embedded or sidecar caption for this output.

&amp;#42; Valid Embedded Caption Formats:
 
  &amp;#42; for FLAC: None
    
    
  &amp;#42; For MP3: None
    
    
  &amp;#42; For MP4: mov-text
    
    
  &amp;#42; For MPEG-TS: None
    
    
  &amp;#42; For ogg: None
    
    
  &amp;#42; For webm: None
    
    
 
 
&amp;#42; Valid Sidecar Caption Formats: Elastic Transcoder supports dfxp (first div
 element only), scc, srt, and webvtt. If you want ttml or smpte-tt compatible
 captions, specify dfxp as your output format.
 
  &amp;#42; For FMP4: dfxp
    
    
  &amp;#42; Non-FMP4 outputs: All sidecar types
    
    
 
 fmp4 captions have an extension of .ismt **/
      Format?: CaptionFormatFormat;
      /** The prefix for caption filenames, in the form description-{language}, where:

&amp;#42; description is a description of the video.
&amp;#42; {language} is a literal value that Elastic Transcoder replaces with the two-
 or three-letter code for the language of the caption in the output file
 names.

If you don&#x27;t include {language} in the file name pattern, Elastic Transcoder
automatically appends &quot;{language}&quot; to the value that you specify for the
description. In addition, Elastic Transcoder automatically appends the count to
the end of the segment files.

For example, suppose you&#x27;re transcoding into srt format. When you enter
&quot;Sydney-{language}-sunrise&quot;, and the language of the captions is English (en),
the name of the first caption file will be Sydney-en-sunrise00000.srt. **/
      Pattern?: CaptionFormatPattern;
      /** The encryption settings, if any, that you want Elastic Transcoder to apply to
your caption formats. **/
      Encryption?: Encryption;
    }
    export interface CaptionSource {
      /** The name of the sidecar caption file that you want Elastic Transcoder to include
in the output file. **/
      Key?: LongKey;
      /** A string that specifies the language of the caption. Specify this as one of:

&amp;#42; 2-character ISO 639-1 code
 
 
&amp;#42; 3-character ISO 639-2 code
 
 

For more information on ISO language codes and language names, see the List of
ISO 639-1 codes. **/
      Language?: Key;
      /** For clip generation or captions that do not start at the same time as the
associated video file, the TimeOffset tells Elastic Transcoder how much of the
video to encode before including captions.

Specify the TimeOffset in the form [+-]SS.sss or [+-]HH:mm:SS.ss. **/
      TimeOffset?: TimeOffset;
      /** The label of the caption shown in the player when choosing a language. We
recommend that you put the caption language name here, in the language of the
captions. **/
      Label?: Name;
      /** The encryption settings, if any, that you want Elastic Transcoder to apply to
your caption sources. **/
      Encryption?: Encryption;
    }
    export interface Captions {
      /** A policy that determines how Elastic Transcoder handles the existence of
multiple captions.

&amp;#42; MergeOverride: Elastic Transcoder transcodes both embedded and sidecar
 captions into outputs. If captions for a language are embedded in the input
 file and also appear in a sidecar file, Elastic Transcoder uses the sidecar
 captions and ignores the embedded captions for that language.
 
 
&amp;#42; MergeRetain: Elastic Transcoder transcodes both embedded and sidecar captions
 into outputs. If captions for a language are embedded in the input file and
 also appear in a sidecar file, Elastic Transcoder uses the embedded captions
 and ignores the sidecar captions for that language. If CaptionSources is
 empty, Elastic Transcoder omits all sidecar captions from the output files.
 
 
&amp;#42; Override: Elastic Transcoder transcodes only the sidecar captions that you
 specify in CaptionSources.
 
 

MergePolicy cannot be null. **/
      MergePolicy?: CaptionMergePolicy;
      /** Source files for the input sidecar captions used during the transcoding process.
To omit all sidecar captions, leave CaptionSources blank. **/
      CaptionSources?: CaptionSources;
      /** The array of file formats for the output captions. If you leave this value
blank, Elastic Transcoder returns an error. **/
      CaptionFormats?: CaptionFormats;
    }
    export interface Clip {
      /** Settings that determine when a clip begins and how long it lasts. **/
      TimeSpan?: TimeSpan;
    }
    export interface CreateJobOutput {
      /** The name to assign to the transcoded file. Elastic Transcoder saves the file in
the Amazon S3 bucket specified by the OutputBucket object in the pipeline that
is specified by the pipeline ID. If a file with the specified name already
exists in the output bucket, the job fails. **/
      Key?: Key;
      /** Whether you want Elastic Transcoder to create thumbnails for your videos and, if
so, how you want Elastic Transcoder to name the files.

If you don&#x27;t want Elastic Transcoder to create thumbnails, specify &quot;&quot;.

If you do want Elastic Transcoder to create thumbnails, specify the information
that you want to include in the file name for each thumbnail. You can specify
the following values in any sequence: 

&amp;#42;   {count} (Required): If you want to create thumbnails, you must include 
 {count} in the ThumbnailPattern object. Wherever you specify {count}, Elastic
 Transcoder adds a five-digit sequence number (beginning with 00001) to
 thumbnail file names. The number indicates where a given thumbnail appears in
 the sequence of thumbnails for a transcoded file. 
 
 If you specify a literal value and/or {resolution} but you omit {count},
 Elastic Transcoder returns a validation error and does not create the job. 
&amp;#42;   Literal values (Optional): You can specify literal values anywhere in the 
 ThumbnailPattern object. For example, you can include them as a file name
 prefix or as a delimiter between {resolution} and {count}. 
 
 
&amp;#42;   {resolution} (Optional): If you want Elastic Transcoder to include the
 resolution in the file name, include {resolution} in the ThumbnailPattern 
 object. 
 
 

When creating thumbnails, Elastic Transcoder automatically saves the files in
the format (.jpg or .png) that appears in the preset that you specified in the 
PresetID value of CreateJobOutput. Elastic Transcoder also appends the
applicable file name extension. **/
      ThumbnailPattern?: ThumbnailPattern;
      /** The encryption settings, if any, that you want Elastic Transcoder to apply to
your thumbnail. **/
      ThumbnailEncryption?: Encryption;
      /** The number of degrees clockwise by which you want Elastic Transcoder to rotate
the output relative to the input. Enter one of the following values: auto, 0, 90
, 180, 270. The value auto generally works only if the file that you&#x27;re
transcoding contains rotation metadata. **/
      Rotate?: Rotate;
      /** The Id of the preset to use for this job. The preset determines the audio,
video, and thumbnail settings that Elastic Transcoder uses for transcoding. **/
      PresetId?: Id;
      /** (Outputs in Fragmented MP4 or MPEG-TS format only.If you specify a preset in 
PresetId for which the value of Container is fmp4 (Fragmented MP4) or ts 
(MPEG-TS), SegmentDuration is the target maximum duration of each segment in
seconds. For HLSv3 format playlists, each media segment is stored in a separate 
.ts file. For HLSv4 and Smooth playlists, all media segments for an output are
stored in a single file. Each segment is approximately the length of the 
SegmentDuration, though individual segments might be shorter or longer.

The range of valid values is 1 to 60 seconds. If the duration of the video is
not evenly divisible by SegmentDuration, the duration of the last segment is the
remainder of total length/SegmentDuration.

Elastic Transcoder creates an output-specific playlist for each output HLS 
output that you specify in OutputKeys. To add an output to the master playlist
for this job, include it in the OutputKeys of the associated playlist. **/
      SegmentDuration?: FloatString;
      /** Information about the watermarks that you want Elastic Transcoder to add to the
video during transcoding. You can specify up to four watermarks for each output.
Settings for each watermark must be defined in the preset for the current
output. **/
      Watermarks?: JobWatermarks;
      /** Information about the album art that you want Elastic Transcoder to add to the
file during transcoding. You can specify up to twenty album artworks for each
output. Settings for each artwork must be defined in the job for the current
output. **/
      AlbumArt?: JobAlbumArt;
      /** You can create an output file that contains an excerpt from the input file. This
excerpt, called a clip, can come from the beginning, middle, or end of the file.
The Composition object contains settings for the clips that make up an output
file. For the current release, you can only specify settings for a single clip
per output file. The Composition object cannot be null. **/
      Composition?: Composition;
      /** You can configure Elastic Transcoder to transcode captions, or subtitles, from
one format to another. All captions must be in UTF-8. Elastic Transcoder
supports two types of captions:

&amp;#42; Embedded: Embedded captions are included in the same file as the audio and
 video. Elastic Transcoder supports only one embedded caption per language, to
 a maximum of 300 embedded captions per file.
 
 Valid input values include: CEA-608 (EIA-608, first non-empty channel only), 
 CEA-708 (EIA-708, first non-empty channel only), and mov-text
 
 Valid outputs include: mov-text
 
 Elastic Transcoder supports a maximum of one embedded format per output.
 
 
&amp;#42; Sidecar: Sidecar captions are kept in a separate metadata file from the audio
 and video data. Sidecar captions require a player that is capable of
 understanding the relationship between the video file and the sidecar file.
 Elastic Transcoder supports only one sidecar caption per language, to a
 maximum of 20 sidecar captions per file.
 
 Valid input values include: dfxp (first div element only), ebu-tt, scc, smpt, 
 srt, ttml (first div element only), and webvtt
 
 Valid outputs include: dfxp (first div element only), scc, srt, and webvtt.
 
 

If you want ttml or smpte-tt compatible captions, specify dfxp as your output
format.

Elastic Transcoder does not support OCR (Optical Character Recognition), does
not accept pictures as a valid input for captions, and is not available for
audio-only transcoding. Elastic Transcoder does not preserve text formatting
(for example, italics) during the transcoding process.

To remove captions or leave the captions empty, set Captions to null. To pass
through existing captions unchanged, set the MergePolicy to MergeRetain, and
pass in a null CaptionSources array.

For more information on embedded files, see the Subtitles Wikipedia page.

For more information on sidecar files, see the Extensible Metadata Platform and
Sidecar file Wikipedia pages. **/
      Captions?: Captions;
      /** You can specify encryption settings for any output files that you want to use
for a transcoding job. This includes the output file and any watermarks,
thumbnails, album art, or captions that you want to use. You must specify
encryption settings for each file individually. **/
      Encryption?: Encryption;
    }
    export interface CreateJobPlaylist {
      /** The name that you want Elastic Transcoder to assign to the master playlist, for
example, nyc-vacation.m3u8. If the name includes a / character, the section of
the name before the last / must be identical for all Name objects. If you create
more than one master playlist, the values of all Name objects must be unique.

Note: Elastic Transcoder automatically appends the relevant file extension to
the file name (.m3u8 for HLSv3 and HLSv4 playlists, and .ism and .ismc for 
Smooth playlists). If you include a file extension in Name, the file name will
have two extensions. **/
      Name?: Filename;
      /** The format of the output playlist. Valid formats include HLSv3, HLSv4, and 
Smooth. **/
      Format?: PlaylistFormat;
      /** For each output in this job that you want to include in a master playlist, the
value of the Outputs:Key object. 

&amp;#42;  If your output is not HLS or does not have a segment duration set, the name
 of the output file is a concatenation of OutputKeyPrefix and Outputs:Key:
 
 OutputKeyPrefixOutputs:Key
 
 
&amp;#42;  If your output is HLSv3 and has a segment duration set, or is not included in
 a playlist, Elastic Transcoder creates an output playlist file with a file
 extension of .m3u8, and a series of .ts files that include a five-digit
 sequential counter beginning with 00000:
 
 OutputKeyPrefixOutputs:Key.m3u8
 
 OutputKeyPrefixOutputs:Key00000.ts
 
 
&amp;#42;  If your output is HLSv4, has a segment duration set, and is included in an 
 HLSv4 playlist, Elastic Transcoder creates an output playlist file with a
 file extension of _v4.m3u8. If the output is video, Elastic Transcoder also
 creates an output file with an extension of _iframe.m3u8:
 
 OutputKeyPrefixOutputs:Key_v4.m3u8
 
 OutputKeyPrefixOutputs:Key_iframe.m3u8
 
 OutputKeyPrefixOutputs:Key.ts
 
 

Elastic Transcoder automatically appends the relevant file extension to the file
name. If you include a file extension in Output Key, the file name will have two
extensions.

If you include more than one output in a playlist, any segment duration
settings, clip settings, or caption settings must be the same for all outputs in
the playlist. For Smooth playlists, the Audio:Profile, Video:Profile, and 
Video:FrameRate to Video:KeyframesMaxDist ratio must be the same for all
outputs. **/
      OutputKeys?: OutputKeys;
      /** The HLS content protection settings, if any, that you want Elastic Transcoder to
apply to the output files associated with this playlist. **/
      HlsContentProtection?: HlsContentProtection;
      /** The DRM settings, if any, that you want Elastic Transcoder to apply to the
output files associated with this playlist. **/
      PlayReadyDrm?: PlayReadyDrm;
    }
    export interface CreateJobRequest {
      /** The Id of the pipeline that you want Elastic Transcoder to use for transcoding.
The pipeline determines several settings, including the Amazon S3 bucket from
which Elastic Transcoder gets the files to transcode and the bucket into which
Elastic Transcoder puts the transcoded files. **/
      PipelineId: Id;
      /** A section of the request body that provides information about the file that is
being transcoded. **/
      Input: JobInput;
      Output?: CreateJobOutput;
      /** A section of the request body that provides information about the transcoded
(target) files. We recommend that you use the Outputs syntax instead of the 
Output syntax. **/
      Outputs?: CreateJobOutputs;
      /** The value, if any, that you want Elastic Transcoder to prepend to the names of
all files that this job creates, including output files, thumbnails, and
playlists. **/
      OutputKeyPrefix?: Key;
      /** If you specify a preset in PresetId for which the value of Container is fmp4
(Fragmented MP4) or ts (MPEG-TS), Playlists contains information about the
master playlists that you want Elastic Transcoder to create.

The maximum number of master playlists in a job is 30. **/
      Playlists?: CreateJobPlaylists;
      /** User-defined metadata that you want to associate with an Elastic Transcoder job.
You specify metadata in key/value pairs, and you can add up to 10 key/value 
pairs per job. Elastic Transcoder does not guarantee that key/value pairs will
be returned in the same order in which you specify them. **/
      UserMetadata?: UserMetadata;
    }
    export interface CreateJobResponse {
      /** A section of the response body that provides information about the job that is
created. **/
      Job?: Job;
    }
    export interface CreatePipelineRequest {
      /** The name of the pipeline. We recommend that the name be unique within the AWS
account, but uniqueness is not enforced.

Constraints: Maximum 40 characters. **/
      Name: Name;
      /** The Amazon S3 bucket in which you saved the media files that you want to
transcode. **/
      InputBucket: BucketName;
      /** The Amazon S3 bucket in which you want Elastic Transcoder to save the transcoded
files. (Use this, or use ContentConfig:Bucket plus ThumbnailConfig:Bucket.)

Specify this value when all of the following are true:  &amp;#42; You want to save
 transcoded files, thumbnails (if any), and playlists (if any) together in one
 bucket.
&amp;#42; You do not want to
 specify the users or groups who have access to the transcoded files,
 thumbnails, and playlists.
&amp;#42; You do not want to
 specify the permissions that Elastic Transcoder grants to the files. When
 Elastic Transcoder saves files in OutputBucket, it grants full control over
 the files only to the AWS account that owns the role that is specified by 
 Role.
&amp;#42; You want to associate
 the transcoded files and thumbnails with the Amazon S3 Standard storage
 class.



If you want to save transcoded files and playlists in one bucket and thumbnails
in another bucket, specify which users can access the transcoded files or the
permissions the users have, or change the Amazon S3 storage class, omit 
OutputBucket and specify values for ContentConfig and ThumbnailConfig instead. **/
      OutputBucket?: BucketName;
      /** The IAM Amazon Resource Name (ARN) for the role that you want Elastic Transcoder
to use to create the pipeline. **/
      Role: Role;
      /** The AWS Key Management Service (AWS KMS) key that you want to use with this
pipeline.

If you use either S3 or S3-AWS-KMS as your Encryption:Mode, you don&#x27;t need to
provide a key with your job because a default key, known as an AWS-KMS key, is
created for you automatically. You need to provide an AWS-KMS key only if you
want to use a non-default AWS-KMS key, or if you are using an Encryption:Mode of 
AES-PKCS7, AES-CTR, or AES-GCM. **/
      AwsKmsKeyArn?: KeyArn;
      /** The Amazon Simple Notification Service (Amazon SNS) topic that you want to
notify to report job status.

To receive notifications, you must also subscribe to the new topic in the Amazon
SNS console.  &amp;#42; Progressing: The topic ARN for the Amazon Simple Notification Service (Amazon
 SNS) topic that you want to notify when Elastic Transcoder has started to
 process a job in this pipeline. This is the ARN that Amazon SNS returned when
 you created the topic. For more information, see Create a Topic in the Amazon
 Simple Notification Service Developer Guide.
&amp;#42; Completed: The topic ARN for the Amazon SNS topic that you want to notify
 when Elastic Transcoder has finished processing a job in this pipeline. This
 is the ARN that Amazon SNS returned when you created the topic.
&amp;#42; Warning: The topic ARN for the Amazon SNS topic that you want to notify when
 Elastic Transcoder encounters a warning condition while processing a job in
 this pipeline. This is the ARN that Amazon SNS returned when you created the
 topic.
&amp;#42; Error: The topic ARN for the Amazon SNS topic that you want to notify when
 Elastic Transcoder encounters an error condition while processing a job in
 this pipeline. This is the ARN that Amazon SNS returned when you created the
 topic. **/
      Notifications?: Notifications;
      /** The optional ContentConfig object specifies information about the Amazon S3
bucket in which you want Elastic Transcoder to save transcoded files and
playlists: which bucket to use, which users you want to have access to the
files, the type of access you want users to have, and the storage class that you
want to assign to the files.

If you specify values for ContentConfig, you must also specify values for 
ThumbnailConfig.

If you specify values for ContentConfig and ThumbnailConfig, omit the 
OutputBucket object.

&amp;#42; Bucket: The Amazon S3 bucket in which you want Elastic Transcoder to save
 transcoded files and playlists.
&amp;#42; Permissions (Optional): The Permissions object specifies which users you want
 to have access to transcoded files and the type of access you want them to
 have. You can grant permissions to a maximum of 30 users and/or predefined
 Amazon S3 groups.
&amp;#42; Grantee Type: Specify the type of value that appears in the Grantee object:  &amp;#42; 
    Canonical: The value in the Grantee object is either the canonical user ID
    for an AWS account or an origin access identity for an Amazon CloudFront
    distribution. For more information about canonical user IDs, see Access
    Control List (ACL) Overview in the Amazon Simple Storage Service Developer
    Guide. For more information about using CloudFront origin access
    identities to require that users use CloudFront URLs instead of Amazon S3
    URLs, see Using an Origin Access Identity to Restrict Access to Your
    Amazon S3 Content. A canonical user ID is not the same as an AWS account
    number. 
  &amp;#42; 
    Email: The value in the Grantee object is the registered email address of
    an AWS account.
  &amp;#42; 
    Group: The value in the Grantee object is one of the following predefined
    Amazon S3 groups: AllUsers, AuthenticatedUsers, or LogDelivery.
 
 
&amp;#42;  Grantee: The AWS user or group that you want to have access to transcoded
 files and playlists. To identify the user or group, you can specify the
 canonical user ID for an AWS account, an origin access identity for a
 CloudFront distribution, the registered email address of an AWS account, or a
 predefined Amazon S3 group 
&amp;#42;  Access: The permission that you want to give to the AWS user that you
 specified in Grantee. Permissions are granted on the files that Elastic
 Transcoder adds to the bucket, including playlists and video files. Valid
 values include:  &amp;#42; READ: The grantee can read the objects and metadata for objects that
    Elastic Transcoder adds to the Amazon S3 bucket.
  &amp;#42; READ_ACP: The grantee can read the object ACL for objects that Elastic
    Transcoder adds to the Amazon S3 bucket. 
  &amp;#42; WRITE_ACP: The grantee can write the ACL for the objects that Elastic
    Transcoder adds to the Amazon S3 bucket.
  &amp;#42; FULL_CONTROL: The grantee has READ, READ_ACP, and WRITE_ACP permissions
    for the objects that Elastic Transcoder adds to the Amazon S3 bucket.
 
 
&amp;#42;  StorageClass: The Amazon S3 storage class, Standard or ReducedRedundancy,
 that you want Elastic Transcoder to assign to the video files and playlists
 that it stores in your Amazon S3 bucket. **/
      ContentConfig?: PipelineOutputConfig;
      /** The ThumbnailConfig object specifies several values, including the Amazon S3
bucket in which you want Elastic Transcoder to save thumbnail files, which users
you want to have access to the files, the type of access you want users to have,
and the storage class that you want to assign to the files.

If you specify values for ContentConfig, you must also specify values for 
ThumbnailConfig even if you don&#x27;t want to create thumbnails.

If you specify values for ContentConfig and ThumbnailConfig, omit the 
OutputBucket object.

&amp;#42; Bucket: The Amazon S3 bucket in which you want Elastic Transcoder to save
 thumbnail files.
&amp;#42; Permissions (Optional): The Permissions object specifies which users and/or
 predefined Amazon S3 groups you want to have access to thumbnail files, and
 the type of access you want them to have. You can grant permissions to a
 maximum of 30 users and/or predefined Amazon S3 groups.
&amp;#42;  GranteeType: Specify the type of value that appears in the Grantee object:  &amp;#42;  Canonical: The value in the Grantee object is either the canonical user
    ID for an AWS account or an origin access identity for an Amazon
    CloudFront distribution. A canonical user ID is not the same as an AWS
    account number.
  &amp;#42; 
    Email: The value in the Grantee object is the registered email address of
    an AWS account. 
  &amp;#42; 
    Group: The value in the Grantee object is one of the following predefined
    Amazon S3 groups: AllUsers, AuthenticatedUsers, or LogDelivery.
 
 
&amp;#42;  Grantee: The AWS user or group that you want to have access to thumbnail
 files. To identify the user or group, you can specify the canonical user ID
 for an AWS account, an origin access identity for a CloudFront distribution,
 the registered email address of an AWS account, or a predefined Amazon S3
 group. 
&amp;#42;  Access: The permission that you want to give to the AWS user that you
 specified in Grantee. Permissions are granted on the thumbnail files that
 Elastic Transcoder adds to the bucket. Valid values include:  &amp;#42; READ: The grantee can read the thumbnails and metadata for objects that
    Elastic Transcoder adds to the Amazon S3 bucket.
  &amp;#42; READ_ACP: The grantee can read the object ACL for thumbnails that Elastic
    Transcoder adds to the Amazon S3 bucket. 
  &amp;#42; WRITE_ACP: The grantee can write the ACL for the thumbnails that Elastic
    Transcoder adds to the Amazon S3 bucket.
  &amp;#42; FULL_CONTROL: The grantee has READ, READ_ACP, and WRITE_ACP permissions
    for the thumbnails that Elastic Transcoder adds to the Amazon S3 bucket. 
 
 
&amp;#42;  StorageClass: The Amazon S3 storage class, Standard or ReducedRedundancy,
 that you want Elastic Transcoder to assign to the thumbnails that it stores
 in your Amazon S3 bucket. **/
      ThumbnailConfig?: PipelineOutputConfig;
    }
    export interface CreatePipelineResponse {
      /** A section of the response body that provides information about the pipeline that
is created. **/
      Pipeline?: Pipeline;
      /** Elastic Transcoder returns a warning if the resources used by your pipeline are
not in the same region as the pipeline.

Using resources in the same region, such as your Amazon S3 buckets, Amazon SNS
notification topics, and AWS KMS key, reduces processing time and prevents
cross-regional charges. **/
      Warnings?: Warnings;
    }
    export interface CreatePresetRequest {
      /** The name of the preset. We recommend that the name be unique within the AWS
account, but uniqueness is not enforced. **/
      Name: Name;
      /** A description of the preset. **/
      Description?: Description;
      /** The container type for the output file. Valid values include flac, flv, fmp4, 
gif, mp3, mp4, mpg, mxf, oga, ogg, ts, and webm. **/
      Container: PresetContainer;
      /** A section of the request body that specifies the video parameters. **/
      Video?: VideoParameters;
      /** A section of the request body that specifies the audio parameters. **/
      Audio?: AudioParameters;
      /** A section of the request body that specifies the thumbnail parameters, if any. **/
      Thumbnails?: Thumbnails;
    }
    export interface CreatePresetResponse {
      /** A section of the response body that provides information about the preset that
is created. **/
      Preset?: Preset;
      /** If the preset settings don&#x27;t comply with the standards for the video codec but
Elastic Transcoder created the preset, this message explains the reason the
preset settings don&#x27;t meet the standard. Elastic Transcoder created the preset
because the settings might produce acceptable output. **/
      Warning?: String;
    }
    export interface DeletePipelineRequest {
      /** The identifier of the pipeline that you want to delete. **/
      Id: Id;
    }
    export interface DeletePipelineResponse {
    }
    export interface DeletePresetRequest {
      /** The identifier of the preset for which you want to get detailed information. **/
      Id: Id;
    }
    export interface DeletePresetResponse {
    }
    export interface DetectedProperties {
      /** The detected width of the input file, in pixels. **/
      Width?: NullableInteger;
      /** The detected height of the input file, in pixels. **/
      Height?: NullableInteger;
      /** The detected frame rate of the input file, in frames per second. **/
      FrameRate?: FloatString;
      /** The detected file size of the input file, in bytes. **/
      FileSize?: NullableLong;
      /** The detected duration of the input file, in milliseconds. **/
      DurationMillis?: NullableLong;
    }
    export interface Encryption {
      /** The specific server-side encryption mode that you want Elastic Transcoder to use
when decrypting your input files or encrypting your output files. Elastic
Transcoder supports the following options:

&amp;#42; S3: Amazon S3 creates and manages the keys used for encrypting your files.
 
 
&amp;#42; S3-AWS-KMS: Amazon S3 calls the Amazon Key Management Service, which creates
 and manages the keys that are used for encrypting your files. If you specify 
 S3-AWS-KMS and you don&#x27;t want to use the default key, you must add the
 AWS-KMS key that you want to use to your pipeline.
 
 
&amp;#42; AES-CBC-PKCS7: A padded cipher-block mode of operation originally used for
 HLS files.
 
 
&amp;#42; AES-CTR: AES Counter Mode.
 
 
&amp;#42; AES-GCM: AES Galois Counter Mode, a mode of operation that is an
 authenticated encryption format, meaning that a file, key, or initialization
 vector that has been tampered with will fail the decryption process.
 
 

For all three AES options, you must provide the following settings, which must
be base64-encoded:

&amp;#42; Key
 
 
&amp;#42; Key MD5
 
 
&amp;#42; Initialization Vector
 
 

For the AES modes, your private encryption keys and your unencrypted data are
never stored by AWS; therefore, it is important that you safely manage your
encryption keys. If you lose them, you won&#x27;t be able to unencrypt your data. **/
      Mode?: EncryptionMode;
      /** The data encryption key that you want Elastic Transcoder to use to encrypt your
output file, or that was used to encrypt your input file. The key must be
base64-encoded and it must be one of the following bit lengths before being
base64-encoded:

128, 192, or 256. 

The key must also be encrypted by using the Amazon Key Management Service. **/
      Key?: Base64EncodedString;
      /** The MD5 digest of the key that you used to encrypt your input file, or that you
want Elastic Transcoder to use to encrypt your output file. Elastic Transcoder
uses the key digest as a checksum to make sure your key was not corrupted in
transit. The key MD5 must be base64-encoded, and it must be exactly 16 bytes
long before being base64-encoded. **/
      KeyMd5?: Base64EncodedString;
      /** The series of random bits created by a random bit generator, unique for every
encryption operation, that you used to encrypt your input files or that you want
Elastic Transcoder to use to encrypt your output files. The initialization
vector must be base64-encoded, and it must be exactly 16 bytes long before being
base64-encoded. **/
      InitializationVector?: ZeroTo255String;
    }
    export interface HlsContentProtection {
      /** The content protection method for your output. The only valid value is: aes-128.

This value will be written into the method attribute of the EXT-X-KEY metadata
tag in the output playlist. **/
      Method?: HlsContentProtectionMethod;
      /** If you want Elastic Transcoder to generate a key for you, leave this field
blank.

If you choose to supply your own key, you must encrypt the key by using AWS KMS.
The key must be base64-encoded, and it must be one of the following bit lengths
before being base64-encoded:

128, 192, or 256. **/
      Key?: Base64EncodedString;
      /** If Elastic Transcoder is generating your key for you, you must leave this field
blank.

The MD5 digest of the key that you want Elastic Transcoder to use to encrypt
your output file, and that you want Elastic Transcoder to use as a checksum to
make sure your key was not corrupted in transit. The key MD5 must be
base64-encoded, and it must be exactly 16 bytes before being base64- encoded. **/
      KeyMd5?: Base64EncodedString;
      /** If Elastic Transcoder is generating your key for you, you must leave this field
blank.

The series of random bits created by a random bit generator, unique for every
encryption operation, that you want Elastic Transcoder to use to encrypt your
output files. The initialization vector must be base64-encoded, and it must be
exactly 16 bytes before being base64-encoded. **/
      InitializationVector?: ZeroTo255String;
      /** The location of the license key required to decrypt your HLS playlist. The URL
must be an absolute path, and is referenced in the URI attribute of the
EXT-X-KEY metadata tag in the playlist file. **/
      LicenseAcquisitionUrl?: ZeroTo512String;
      /** Specify whether you want Elastic Transcoder to write your HLS license key to an
Amazon S3 bucket. If you choose WithVariantPlaylists, LicenseAcquisitionUrl must
be left blank and Elastic Transcoder writes your data key into the same bucket
as the associated playlist. **/
      KeyStoragePolicy?: KeyStoragePolicy;
    }
    export interface IncompatibleVersionException {
    }
    export interface InternalServiceException {
    }
    export interface Job {
      /** The identifier that Elastic Transcoder assigned to the job. You use this value
to get settings for the job or to delete the job. **/
      Id?: Id;
      /** The Amazon Resource Name (ARN) for the job. **/
      Arn?: String;
      /** The Id of the pipeline that you want Elastic Transcoder to use for transcoding.
The pipeline determines several settings, including the Amazon S3 bucket from
which Elastic Transcoder gets the files to transcode and the bucket into which
Elastic Transcoder puts the transcoded files. **/
      PipelineId?: Id;
      /** A section of the request or response body that provides information about the
file that is being transcoded. **/
      Input?: JobInput;
      /** If you specified one output for a job, information about that output. If you
specified multiple outputs for a job, the Output object lists information about
the first output. This duplicates the information that is listed for the first
output in the Outputs object.

Outputs recommended instead. A section of the request or response body that
provides information about the transcoded (target) file. **/
      Output?: JobOutput;
      /** Information about the output files. We recommend that you use the Outputs syntax
for all jobs, even when you want Elastic Transcoder to transcode a file into
only one format. Do not use both the Outputs and Output syntaxes in the same
request. You can create a maximum of 30 outputs per job. 

If you specify more than one output for a job, Elastic Transcoder creates the
files for each output in the order in which you specify them in the job. **/
      Outputs?: JobOutputs;
      /** The value, if any, that you want Elastic Transcoder to prepend to the names of
all files that this job creates, including output files, thumbnails, and
playlists. We recommend that you add a / or some other delimiter to the end of
the OutputKeyPrefix. **/
      OutputKeyPrefix?: Key;
      /** Outputs in Fragmented MP4 or MPEG-TS format only.If you specify a preset in 
PresetId for which the value of Container is fmp4 (Fragmented MP4) or ts
(MPEG-TS), Playlists contains information about the master playlists that you
want Elastic Transcoder to create.

The maximum number of master playlists in a job is 30. **/
      Playlists?: Playlists;
      /** The status of the job: Submitted, Progressing, Complete, Canceled, or Error. **/
      Status?: JobStatus;
      /** User-defined metadata that you want to associate with an Elastic Transcoder job.
You specify metadata in key/value pairs, and you can add up to 10 key/value 
pairs per job. Elastic Transcoder does not guarantee that key/value pairs will
be returned in the same order in which you specify them.

Metadata keys and values must use characters from the following list:

&amp;#42; 0-9
 
 
&amp;#42; A-Z and a-z
 
 
&amp;#42; Space
 
 
&amp;#42; The following symbols: _.:/=+-%@ **/
      UserMetadata?: UserMetadata;
      /** Details about the timing of a job. **/
      Timing?: Timing;
    }
    export interface JobAlbumArt {
      /** A policy that determines how Elastic Transcoder will handle the existence of
multiple album artwork files.

&amp;#42; Replace: The specified album art will replace any existing album art.
&amp;#42; Prepend: The specified album art will be placed in front of any existing
 album art.
&amp;#42; Append: The specified album art will be placed after any existing album art.
&amp;#42; Fallback: If the original input file contains artwork, Elastic Transcoder
 will use that artwork for the output. If the original input does not contain
 artwork, Elastic Transcoder will use the specified album art file. **/
      MergePolicy?: MergePolicy;
      /** The file to be used as album art. There can be multiple artworks associated with
an audio file, to a maximum of 20. Valid formats are .jpg and .png **/
      Artwork?: Artworks;
    }
    export interface JobInput {
      /** The name of the file to transcode. Elsewhere in the body of the JSON block is
the the ID of the pipeline to use for processing the job. The InputBucket object
in that pipeline tells Elastic Transcoder which Amazon S3 bucket to get the file
from. 

If the file name includes a prefix, such as cooking/lasagna.mpg, include the
prefix in the key. If the file isn&#x27;t in the specified bucket, Elastic Transcoder
returns an error. **/
      Key?: LongKey;
      /** The frame rate of the input file. If you want Elastic Transcoder to
automatically detect the frame rate of the input file, specify auto. If you want
to specify the frame rate for the input file, enter one of the following values: 

10, 15, 23.97, 24, 25, 29.97, 30, 60 

If you specify a value other than auto, Elastic Transcoder disables automatic
detection of the frame rate. **/
      FrameRate?: FrameRate;
      /** This value must be auto, which causes Elastic Transcoder to automatically detect
the resolution of the input file. **/
      Resolution?: Resolution;
      /** The aspect ratio of the input file. If you want Elastic Transcoder to
automatically detect the aspect ratio of the input file, specify auto. If you
want to specify the aspect ratio for the output file, enter one of the following
values: 

1:1, 4:3, 3:2, 16:9 

If you specify a value other than auto, Elastic Transcoder disables automatic
detection of the aspect ratio. **/
      AspectRatio?: AspectRatio;
      /** Whether the input file is interlaced. If you want Elastic Transcoder to
automatically detect whether the input file is interlaced, specify auto. If you
want to specify whether the input file is interlaced, enter one of the following
values:

true, false

If you specify a value other than auto, Elastic Transcoder disables automatic
detection of interlacing. **/
      Interlaced?: Interlaced;
      /** The container type for the input file. If you want Elastic Transcoder to
automatically detect the container type of the input file, specify auto. If you
want to specify the container type for the input file, enter one of the
following values: 

3gp, aac, asf, avi, divx, flv, m4a, mkv, mov, mp3, mp4, mpeg, mpeg-ps, mpeg-ts, 
mxf, ogg, vob, wav, webm **/
      Container?: JobContainer;
      /** The encryption settings, if any, that are used for decrypting your input files.
If your input file is encrypted, you must specify the mode that Elastic
Transcoder will use to decrypt your file. **/
      Encryption?: Encryption;
      /** The detected properties of the input file. **/
      DetectedProperties?: DetectedProperties;
    }
    export interface JobOutput {
      /** A sequential counter, starting with 1, that identifies an output among the
outputs from the current job. In the Output syntax, this value is always 1. **/
      Id?: String;
      /** The name to assign to the transcoded file. Elastic Transcoder saves the file in
the Amazon S3 bucket specified by the OutputBucket object in the pipeline that
is specified by the pipeline ID. **/
      Key?: Key;
      /** Whether you want Elastic Transcoder to create thumbnails for your videos and, if
so, how you want Elastic Transcoder to name the files.

If you don&#x27;t want Elastic Transcoder to create thumbnails, specify &quot;&quot;.

If you do want Elastic Transcoder to create thumbnails, specify the information
that you want to include in the file name for each thumbnail. You can specify
the following values in any sequence: 

&amp;#42;   {count} (Required): If you want to create thumbnails, you must include 
 {count} in the ThumbnailPattern object. Wherever you specify {count}, Elastic
 Transcoder adds a five-digit sequence number (beginning with 00001) to
 thumbnail file names. The number indicates where a given thumbnail appears in
 the sequence of thumbnails for a transcoded file. 
 
 If you specify a literal value and/or {resolution} but you omit {count},
 Elastic Transcoder returns a validation error and does not create the job. 
&amp;#42;   Literal values (Optional): You can specify literal values anywhere in the 
 ThumbnailPattern object. For example, you can include them as a file name
 prefix or as a delimiter between {resolution} and {count}. 
 
 
&amp;#42;   {resolution} (Optional): If you want Elastic Transcoder to include the
 resolution in the file name, include {resolution} in the ThumbnailPattern 
 object. 
 
 

When creating thumbnails, Elastic Transcoder automatically saves the files in
the format (.jpg or .png) that appears in the preset that you specified in the 
PresetID value of CreateJobOutput. Elastic Transcoder also appends the
applicable file name extension. **/
      ThumbnailPattern?: ThumbnailPattern;
      /** The encryption settings, if any, that you want Elastic Transcoder to apply to
your thumbnail. **/
      ThumbnailEncryption?: Encryption;
      /** The number of degrees clockwise by which you want Elastic Transcoder to rotate
the output relative to the input. Enter one of the following values: 

auto, 0, 90, 180, 270

The value auto generally works only if the file that you&#x27;re transcoding
contains rotation metadata. **/
      Rotate?: Rotate;
      /** The value of the Id object for the preset that you want to use for this job. The
preset determines the audio, video, and thumbnail settings that Elastic
Transcoder uses for transcoding. To use a preset that you created, specify the
preset ID that Elastic Transcoder returned in the response when you created the
preset. You can also use the Elastic Transcoder system presets, which you can
get with ListPresets. **/
      PresetId?: Id;
      /** (Outputs in Fragmented MP4 or MPEG-TS format only.If you specify a preset in 
PresetId for which the value of Container is fmp4 (Fragmented MP4) or ts 
(MPEG-TS), SegmentDuration is the target maximum duration of each segment in
seconds. For HLSv3 format playlists, each media segment is stored in a separate 
.ts file. For HLSv4 and Smooth playlists, all media segments for an output are
stored in a single file. Each segment is approximately the length of the 
SegmentDuration, though individual segments might be shorter or longer.

The range of valid values is 1 to 60 seconds. If the duration of the video is
not evenly divisible by SegmentDuration, the duration of the last segment is the
remainder of total length/SegmentDuration.

Elastic Transcoder creates an output-specific playlist for each output HLS 
output that you specify in OutputKeys. To add an output to the master playlist
for this job, include it in the OutputKeys of the associated playlist. **/
      SegmentDuration?: FloatString;
      /** The status of one output in a job. If you specified only one output for the
job, Outputs:Status is always the same as Job:Status. If you specified more than
one output:  &amp;#42; Job:Status and Outputs:Status for all of the outputs is Submitted until
 Elastic Transcoder starts to process the first output.
&amp;#42; When Elastic Transcoder starts to process the first output, Outputs:Status 
 for that output and Job:Status both change to Progressing. For each output,
 the value of Outputs:Status remains Submitted until Elastic Transcoder starts
 to process the output.
&amp;#42; Job:Status remains Progressing until all of the outputs reach a
 terminal status, either Complete or Error.
&amp;#42; When all of the outputs reach a terminal status, Job:Status changes to
 Complete only if Outputs:Status for all of the outputs is Complete. If 
 Outputs:Status for one or more outputs is Error, the terminal status for 
 Job:Status is also Error.

The value of Status is one of the following: Submitted, Progressing, Complete, 
Canceled, or Error. **/
      Status?: JobStatus;
      /** Information that further explains Status. **/
      StatusDetail?: Description;
      /** Duration of the output file, in seconds. **/
      Duration?: NullableLong;
      /** Specifies the width of the output file in pixels. **/
      Width?: NullableInteger;
      /** Height of the output file, in pixels. **/
      Height?: NullableInteger;
      /** Frame rate of the output file, in frames per second. **/
      FrameRate?: FloatString;
      /** File size of the output file, in bytes. **/
      FileSize?: NullableLong;
      /** Duration of the output file, in milliseconds. **/
      DurationMillis?: NullableLong;
      /** Information about the watermarks that you want Elastic Transcoder to add to the
video during transcoding. You can specify up to four watermarks for each output.
Settings for each watermark must be defined in the preset that you specify in 
Preset for the current output.

Watermarks are added to the output video in the sequence in which you list them
in the job output—the first watermark in the list is added to the output video
first, the second watermark in the list is added next, and so on. As a result,
if the settings in a preset cause Elastic Transcoder to place all watermarks in
the same location, the second watermark that you add will cover the first one,
the third one will cover the second, and the fourth one will cover the third. **/
      Watermarks?: JobWatermarks;
      /** The album art to be associated with the output file, if any. **/
      AlbumArt?: JobAlbumArt;
      /** You can create an output file that contains an excerpt from the input file. This
excerpt, called a clip, can come from the beginning, middle, or end of the file.
The Composition object contains settings for the clips that make up an output
file. For the current release, you can only specify settings for a single clip
per output file. The Composition object cannot be null. **/
      Composition?: Composition;
      /** You can configure Elastic Transcoder to transcode captions, or subtitles, from
one format to another. All captions must be in UTF-8. Elastic Transcoder
supports two types of captions:

&amp;#42; Embedded: Embedded captions are included in the same file as the audio and
 video. Elastic Transcoder supports only one embedded caption per language, to
 a maximum of 300 embedded captions per file.
 
 Valid input values include: CEA-608 (EIA-608, first non-empty channel only), 
 CEA-708 (EIA-708, first non-empty channel only), and mov-text
 
 Valid outputs include: mov-text
 
 Elastic Transcoder supports a maximum of one embedded format per output.
 
 
&amp;#42; Sidecar: Sidecar captions are kept in a separate metadata file from the audio
 and video data. Sidecar captions require a player that is capable of
 understanding the relationship between the video file and the sidecar file.
 Elastic Transcoder supports only one sidecar caption per language, to a
 maximum of 20 sidecar captions per file.
 
 Valid input values include: dfxp (first div element only), ebu-tt, scc, smpt, 
 srt, ttml (first div element only), and webvtt
 
 Valid outputs include: dfxp (first div element only), scc, srt, and webvtt.
 
 

If you want ttml or smpte-tt compatible captions, specify dfxp as your output
format.

Elastic Transcoder does not support OCR (Optical Character Recognition), does
not accept pictures as a valid input for captions, and is not available for
audio-only transcoding. Elastic Transcoder does not preserve text formatting
(for example, italics) during the transcoding process.

To remove captions or leave the captions empty, set Captions to null. To pass
through existing captions unchanged, set the MergePolicy to MergeRetain, and
pass in a null CaptionSources array.

For more information on embedded files, see the Subtitles Wikipedia page.

For more information on sidecar files, see the Extensible Metadata Platform and
Sidecar file Wikipedia pages. **/
      Captions?: Captions;
      /** The encryption settings, if any, that you want Elastic Transcoder to apply to
your output files. If you choose to use encryption, you must specify a mode to
use. If you choose not to use encryption, Elastic Transcoder will write an
unencrypted file to your Amazon S3 bucket. **/
      Encryption?: Encryption;
      /** If Elastic Transcoder used a preset with a ColorSpaceConversionMode to transcode
the output file, the AppliedColorSpaceConversion parameter shows the conversion
used. If no ColorSpaceConversionMode was defined in the preset, this parameter
will not be included in the job response. **/
      AppliedColorSpaceConversion?: String;
    }
    export interface JobWatermark {
      /** The ID of the watermark settings that Elastic Transcoder uses to add watermarks
to the video during transcoding. The settings are in the preset specified by
Preset for the current output. In that preset, the value of Watermarks Id tells
Elastic Transcoder which settings to use. **/
      PresetWatermarkId?: PresetWatermarkId;
      /** The name of the .png or .jpg file that you want to use for the watermark. To
determine which Amazon S3 bucket contains the specified file, Elastic Transcoder
checks the pipeline specified by Pipeline; the Input Bucket object in that
pipeline identifies the bucket.

If the file name includes a prefix, for example, logos/128x64.png, include the
prefix in the key. If the file isn&#x27;t in the specified bucket, Elastic Transcoder
returns an error. **/
      InputKey?: WatermarkKey;
      /** The encryption settings, if any, that you want Elastic Transcoder to apply to
your watermarks. **/
      Encryption?: Encryption;
    }
    export interface LimitExceededException {
    }
    export interface ListJobsByPipelineRequest {
      /** The ID of the pipeline for which you want to get job information. **/
      PipelineId: Id;
      /** To list jobs in chronological order by the date and time that they were
submitted, enter true. To list jobs in reverse chronological order, enter false. **/
      Ascending?: Ascending;
      /** When Elastic Transcoder returns more than one page of results, use pageToken in
subsequent GET requests to get each successive page of results. **/
      PageToken?: Id;
    }
    export interface ListJobsByPipelineResponse {
      /** An array of Job objects that are in the specified pipeline. **/
      Jobs?: Jobs;
      /** A value that you use to access the second and subsequent pages of results, if
any. When the jobs in the specified pipeline fit on one page or when you&#x27;ve
reached the last page of results, the value of NextPageToken is null. **/
      NextPageToken?: Id;
    }
    export interface ListJobsByStatusRequest {
      /** To get information about all of the jobs associated with the current AWS account
that have a given status, specify the following status: Submitted, Progressing, 
Complete, Canceled, or Error. **/
      Status: JobStatus;
      /** To list jobs in chronological order by the date and time that they were
submitted, enter true. To list jobs in reverse chronological order, enter false. **/
      Ascending?: Ascending;
      /** When Elastic Transcoder returns more than one page of results, use pageToken in
subsequent GET requests to get each successive page of results. **/
      PageToken?: Id;
    }
    export interface ListJobsByStatusResponse {
      /** An array of Job objects that have the specified status. **/
      Jobs?: Jobs;
      /** A value that you use to access the second and subsequent pages of results, if
any. When the jobs in the specified pipeline fit on one page or when you&#x27;ve
reached the last page of results, the value of NextPageToken is null. **/
      NextPageToken?: Id;
    }
    export interface ListPipelinesRequest {
      /** To list pipelines in chronological order by the date and time that they were
created, enter true. To list pipelines in reverse chronological order, enter 
false. **/
      Ascending?: Ascending;
      /** When Elastic Transcoder returns more than one page of results, use pageToken in
subsequent GET requests to get each successive page of results. **/
      PageToken?: Id;
    }
    export interface ListPipelinesResponse {
      /** An array of Pipeline objects. **/
      Pipelines?: Pipelines;
      /** A value that you use to access the second and subsequent pages of results, if
any. When the pipelines fit on one page or when you&#x27;ve reached the last page of
results, the value of NextPageToken is null. **/
      NextPageToken?: Id;
    }
    export interface ListPresetsRequest {
      /** To list presets in chronological order by the date and time that they were
created, enter true. To list presets in reverse chronological order, enter false
. **/
      Ascending?: Ascending;
      /** When Elastic Transcoder returns more than one page of results, use pageToken in
subsequent GET requests to get each successive page of results. **/
      PageToken?: Id;
    }
    export interface ListPresetsResponse {
      /** An array of Preset objects. **/
      Presets?: Presets;
      /** A value that you use to access the second and subsequent pages of results, if
any. When the presets fit on one page or when you&#x27;ve reached the last page of
results, the value of NextPageToken is null. **/
      NextPageToken?: Id;
    }
    export interface Notifications {
      /** The Amazon Simple Notification Service (Amazon SNS) topic that you want to
notify when Elastic Transcoder has started to process the job. **/
      Progressing?: SnsTopic;
      /** The Amazon SNS topic that you want to notify when Elastic Transcoder has
finished processing the job. **/
      Completed?: SnsTopic;
      /** The Amazon SNS topic that you want to notify when Elastic Transcoder encounters
a warning condition. **/
      Warning?: SnsTopic;
      /** The Amazon SNS topic that you want to notify when Elastic Transcoder encounters
an error condition. **/
      Error?: SnsTopic;
    }
    export interface Permission {
      /** The type of value that appears in the Grantee object:  &amp;#42; Canonical: Either the canonical user ID for an AWS account or an origin
 access identity for an Amazon CloudFront distribution. A canonical user ID is
 not the same as an AWS account number.
&amp;#42; Email: The registered email address of an AWS account.
&amp;#42; Group: One of the following predefined Amazon S3 groups: AllUsers, 
 AuthenticatedUsers, or LogDelivery. **/
      GranteeType?: GranteeType;
      /** The AWS user or group that you want to have access to transcoded files and
playlists. To identify the user or group, you can specify the canonical user ID
for an AWS account, an origin access identity for a CloudFront distribution, the
registered email address of an AWS account, or a predefined Amazon S3 group. **/
      Grantee?: Grantee;
      /** The permission that you want to give to the AWS user that is listed in Grantee.
Valid values include:  &amp;#42; READ: The grantee can read the thumbnails and metadata for thumbnails that
 Elastic Transcoder adds to the Amazon S3 bucket.
&amp;#42; READ_ACP: The grantee can read the object ACL for thumbnails that Elastic
 Transcoder adds to the Amazon S3 bucket.
&amp;#42; WRITE_ACP: The grantee can write the ACL for the thumbnails that Elastic
 Transcoder adds to the Amazon S3 bucket.
&amp;#42; FULL_CONTROL: The grantee has READ, READ_ACP, and WRITE_ACP permissions for
 the thumbnails that Elastic Transcoder adds to the Amazon S3 bucket. **/
      Access?: AccessControls;
    }
    export interface Pipeline {
      /** The identifier for the pipeline. You use this value to identify the pipeline in
which you want to perform a variety of operations, such as creating a job or a
preset. **/
      Id?: Id;
      /** The Amazon Resource Name (ARN) for the pipeline. **/
      Arn?: String;
      /** The name of the pipeline. We recommend that the name be unique within the AWS
account, but uniqueness is not enforced.

Constraints: Maximum 40 characters **/
      Name?: Name;
      /** The current status of the pipeline:

&amp;#42; Active: The pipeline is processing jobs.
&amp;#42; Paused: The pipeline is not currently processing jobs. **/
      Status?: PipelineStatus;
      /** The Amazon S3 bucket from which Elastic Transcoder gets media files for
transcoding and the graphics files, if any, that you want to use for watermarks. **/
      InputBucket?: BucketName;
      /** The Amazon S3 bucket in which you want Elastic Transcoder to save transcoded
files, thumbnails, and playlists. Either you specify this value, or you specify
both ContentConfig and ThumbnailConfig. **/
      OutputBucket?: BucketName;
      /** The IAM Amazon Resource Name (ARN) for the role that Elastic Transcoder uses to
transcode jobs for this pipeline. **/
      Role?: Role;
      /** The AWS Key Management Service (AWS KMS) key that you want to use with this
pipeline.

If you use either S3 or S3-AWS-KMS as your Encryption:Mode, you don&#x27;t need to
provide a key with your job because a default key, known as an AWS-KMS key, is
created for you automatically. You need to provide an AWS-KMS key only if you
want to use a non-default AWS-KMS key, or if you are using an Encryption:Mode of 
AES-PKCS7, AES-CTR, or AES-GCM. **/
      AwsKmsKeyArn?: KeyArn;
      /** The Amazon Simple Notification Service (Amazon SNS) topic that you want to
notify to report job status.

To receive notifications, you must also subscribe to the new topic in the Amazon
SNS console.  &amp;#42; Progressing (optional): The Amazon Simple Notification Service (Amazon SNS)
 topic that you want to notify when Elastic Transcoder has started to process
 the job.
&amp;#42; Completed (optional): The Amazon SNS topic that you want to notify when
 Elastic Transcoder has finished processing the job.
&amp;#42; Warning (optional): The Amazon SNS topic that you want to notify when Elastic
 Transcoder encounters a warning condition.
&amp;#42; Error (optional): The Amazon SNS topic that you want to notify when Elastic
 Transcoder encounters an error condition. **/
      Notifications?: Notifications;
      /** Information about the Amazon S3 bucket in which you want Elastic Transcoder to
save transcoded files and playlists. Either you specify both ContentConfig and 
ThumbnailConfig, or you specify OutputBucket.

&amp;#42; Bucket: The Amazon S3 bucket in which you want Elastic Transcoder to save
 transcoded files and playlists.
&amp;#42; Permissions: A list of the users and/or predefined Amazon S3 groups you want
 to have access to transcoded files and playlists, and the type of access that
 you want them to have.  &amp;#42; GranteeType: The type of value that appears in the Grantee object:  &amp;#42; 
       Canonical: Either the canonical user ID for an AWS account or an origin
       access identity for an Amazon CloudFront distribution.
     &amp;#42; 
       Email: The registered email address of an AWS account.
     &amp;#42; 
       Group: One of the following predefined Amazon S3 groups: AllUsers, 
       AuthenticatedUsers, or LogDelivery.
    
    
  &amp;#42; Grantee: The AWS user or group that you want to have access to transcoded
    files and playlists.
  &amp;#42; Access: The permission that you want to give to the AWS user that is
    listed in Grantee. Valid values include:  &amp;#42; READ: The grantee can read the objects and metadata for objects that
       Elastic Transcoder adds to the Amazon S3 bucket.
     &amp;#42; READ_ACP: The grantee can read the object ACL for objects that Elastic
       Transcoder adds to the Amazon S3 bucket.
     &amp;#42; WRITE_ACP: The grantee can write the ACL for the objects that Elastic
       Transcoder adds to the Amazon S3 bucket.
     &amp;#42; FULL_CONTROL: The grantee has READ, READ_ACP, and WRITE_ACP permissions
       for the objects that Elastic Transcoder adds to the Amazon S3 bucket.
    
    
 
 
&amp;#42; StorageClass: The Amazon S3 storage class, Standard or ReducedRedundancy,
 that you want Elastic Transcoder to assign to the video files and playlists
 that it stores in your Amazon S3 bucket. **/
      ContentConfig?: PipelineOutputConfig;
      /** Information about the Amazon S3 bucket in which you want Elastic Transcoder to
save thumbnail files. Either you specify both ContentConfig and ThumbnailConfig,
or you specify OutputBucket.

&amp;#42; Bucket: The Amazon S3 bucket in which you want Elastic Transcoder to save
 thumbnail files. 
&amp;#42; Permissions: A list of the users and/or predefined Amazon S3 groups you want
 to have access to thumbnail files, and the type of access that you want them
 to have.  &amp;#42; GranteeType: The type of value that appears in the Grantee
    object:  &amp;#42; Canonical: Either the canonical user ID for an AWS account or an origin
       access identity for an Amazon CloudFront distribution. A canonical user
       ID is not the same as an AWS account number.
     &amp;#42; Email: The registered email address of an AWS account.
     &amp;#42; Group: One of the following predefined Amazon S3 groups: AllUsers, 
       AuthenticatedUsers, or LogDelivery.
    
    
  &amp;#42; Grantee: The AWS user or group that you want to have access to thumbnail
    files.
  &amp;#42; Access: The permission that you want to give to the AWS user that
    is listed in Grantee. Valid values include:  &amp;#42; READ: The grantee can read the thumbnails and metadata for thumbnails
       that Elastic Transcoder adds to the Amazon S3 bucket.
     &amp;#42; READ_ACP: The grantee can read the object ACL for thumbnails that
       Elastic Transcoder adds to the Amazon S3 bucket.
     &amp;#42; WRITE_ACP: The grantee can write the ACL for the thumbnails that
       Elastic Transcoder adds to the Amazon S3 bucket.
     &amp;#42; FULL_CONTROL: The grantee has READ, READ_ACP, and WRITE_ACP permissions
       for the thumbnails that Elastic Transcoder adds to the Amazon S3
       bucket.
    
    
 
 
&amp;#42; StorageClass: The Amazon S3 storage class, Standard or ReducedRedundancy,
 that you want Elastic Transcoder to assign to the thumbnails that it stores
 in your Amazon S3 bucket. **/
      ThumbnailConfig?: PipelineOutputConfig;
    }
    export interface PipelineOutputConfig {
      /** The Amazon S3 bucket in which you want Elastic Transcoder to save the
transcoded files. Specify this value when all of the following are true:  &amp;#42; You
 want to save transcoded files, thumbnails (if any), and playlists (if any)
 together in one bucket.
&amp;#42; You
 do not want to specify the users or groups who have access to the transcoded
 files, thumbnails, and playlists.
&amp;#42; You
 do not want to specify the permissions that Elastic Transcoder grants to the
 files. 
&amp;#42; You
 want to associate the transcoded files and thumbnails with the Amazon S3
 Standard storage class.

If you want to save transcoded files and playlists in one bucket and thumbnails
in another bucket, specify which users can access the transcoded files or the
permissions the users have, or change the Amazon S3 storage class, omit
OutputBucket and specify values for ContentConfig and ThumbnailConfig instead. **/
      Bucket?: BucketName;
      /** The Amazon S3 storage class, Standard or ReducedRedundancy, that you want
Elastic Transcoder to assign to the video files and playlists that it stores in
your Amazon S3 bucket. **/
      StorageClass?: StorageClass;
      /** Optional. The Permissions object specifies which users and/or predefined Amazon
S3 groups you want to have access to transcoded files and playlists, and the
type of access you want them to have. You can grant permissions to a maximum of
30 users and/or predefined Amazon S3 groups.

If you include Permissions, Elastic Transcoder grants only the permissions that
you specify. It does not grant full permissions to the owner of the role
specified by Role. If you want that user to have full control, you must
explicitly grant full control to the user.

If you omit Permissions, Elastic Transcoder grants full control over the
transcoded files and playlists to the owner of the role specified by Role, and
grants no other permissions to any other user or group. **/
      Permissions?: Permissions;
    }
    export interface PlayReadyDrm {
      /** The type of DRM, if any, that you want Elastic Transcoder to apply to the output
files associated with this playlist. **/
      Format?: PlayReadyDrmFormatString;
      /** The DRM key for your file, provided by your DRM license provider. The key must
be base64-encoded, and it must be one of the following bit lengths before being
base64-encoded:

128, 192, or 256. 

The key must also be encrypted by using AWS KMS. **/
      Key?: NonEmptyBase64EncodedString;
      /** The MD5 digest of the key used for DRM on your file, and that you want Elastic
Transcoder to use as a checksum to make sure your key was not corrupted in
transit. The key MD5 must be base64-encoded, and it must be exactly 16 bytes
before being base64-encoded. **/
      KeyMd5?: NonEmptyBase64EncodedString;
      /** The ID for your DRM key, so that your DRM license provider knows which key to
provide.

The key ID must be provided in big endian, and Elastic Transcoder will convert
it to little endian before inserting it into the PlayReady DRM headers. If you
are unsure whether your license server provides your key ID in big or little
endian, check with your DRM provider. **/
      KeyId?: KeyIdGuid;
      /** The series of random bits created by a random bit generator, unique for every
encryption operation, that you want Elastic Transcoder to use to encrypt your
files. The initialization vector must be base64-encoded, and it must be exactly
8 bytes long before being base64-encoded. If no initialization vector is
provided, Elastic Transcoder generates one for you. **/
      InitializationVector?: ZeroTo255String;
      /** The location of the license key required to play DRM content. The URL must be an
absolute path, and is referenced by the PlayReady header. The PlayReady header
is referenced in the protection header of the client manifest for Smooth
Streaming outputs, and in the EXT-X-DXDRM and EXT-XDXDRMINFO metadata tags for
HLS playlist outputs. An example URL looks like this: 
https://www.example.com/exampleKey/ **/
      LicenseAcquisitionUrl?: OneTo512String;
    }
    export interface Playlist {
      /** The name that you want Elastic Transcoder to assign to the master playlist, for
example, nyc-vacation.m3u8. If the name includes a / character, the section of
the name before the last / must be identical for all Name objects. If you create
more than one master playlist, the values of all Name objects must be unique.

Note: Elastic Transcoder automatically appends the relevant file extension to
the file name (.m3u8 for HLSv3 and HLSv4 playlists, and .ism and .ismc for 
Smooth playlists). If you include a file extension in Name, the file name will
have two extensions. **/
      Name?: Filename;
      /** The format of the output playlist. Valid formats include HLSv3, HLSv4, and 
Smooth. **/
      Format?: PlaylistFormat;
      /** For each output in this job that you want to include in a master playlist, the
value of the Outputs:Key object.

&amp;#42;  If your output is not HLS or does not have a segment duration set, the name
 of the output file is a concatenation of OutputKeyPrefix and Outputs:Key:
 
 OutputKeyPrefixOutputs:Key
 
 
&amp;#42;  If your output is HLSv3 and has a segment duration set, or is not included in
 a playlist, Elastic Transcoder creates an output playlist file with a file
 extension of .m3u8, and a series of .ts files that include a five-digit
 sequential counter beginning with 00000:
 
 OutputKeyPrefixOutputs:Key.m3u8
 
 OutputKeyPrefixOutputs:Key00000.ts
 
 
&amp;#42;  If your output is HLSv4, has a segment duration set, and is included in an 
 HLSv4 playlist, Elastic Transcoder creates an output playlist file with a
 file extension of _v4.m3u8. If the output is video, Elastic Transcoder also
 creates an output file with an extension of _iframe.m3u8:
 
 OutputKeyPrefixOutputs:Key_v4.m3u8
 
 OutputKeyPrefixOutputs:Key_iframe.m3u8
 
 OutputKeyPrefixOutputs:Key.ts
 
 

Elastic Transcoder automatically appends the relevant file extension to the file
name. If you include a file extension in Output Key, the file name will have two
extensions.

If you include more than one output in a playlist, any segment duration
settings, clip settings, or caption settings must be the same for all outputs in
the playlist. For Smooth playlists, the Audio:Profile, Video:Profile, and 
Video:FrameRate to Video:KeyframesMaxDist ratio must be the same for all
outputs. **/
      OutputKeys?: OutputKeys;
      /** The HLS content protection settings, if any, that you want Elastic Transcoder to
apply to the output files associated with this playlist. **/
      HlsContentProtection?: HlsContentProtection;
      /** The DRM settings, if any, that you want Elastic Transcoder to apply to the
output files associated with this playlist. **/
      PlayReadyDrm?: PlayReadyDrm;
      /** The status of the job with which the playlist is associated. **/
      Status?: JobStatus;
      /** Information that further explains the status. **/
      StatusDetail?: Description;
    }
    export interface Preset {
      /** Identifier for the new preset. You use this value to get settings for the preset
or to delete it. **/
      Id?: Id;
      /** The Amazon Resource Name (ARN) for the preset. **/
      Arn?: String;
      /** The name of the preset. **/
      Name?: Name;
      /** A description of the preset. **/
      Description?: Description;
      /** The container type for the output file. Valid values include flac, flv, fmp4, 
gif, mp3, mp4, mpg, mxf, oga, ogg, ts, and webm. **/
      Container?: PresetContainer;
      /** A section of the response body that provides information about the audio preset
values. **/
      Audio?: AudioParameters;
      /** A section of the response body that provides information about the video preset
values. **/
      Video?: VideoParameters;
      /** A section of the response body that provides information about the thumbnail
preset values, if any. **/
      Thumbnails?: Thumbnails;
      /** Whether the preset is a default preset provided by Elastic Transcoder (System)
or a preset that you have defined (Custom). **/
      Type?: PresetType;
    }
    export interface PresetWatermark {
      /** A unique identifier for the settings for one watermark. The value of Id can be
up to 40 characters long. **/
      Id?: PresetWatermarkId;
      /** The maximum width of the watermark in one of the following formats:  &amp;#42; number of
 pixels (px): The minimum value is 16 pixels, and the maximum value is the
 value of MaxWidth.
&amp;#42; integer
 percentage (%): The range of valid values is 0 to 100. Use the value of 
 Target to specify whether you want Elastic Transcoder to include the black
 bars that are added by Elastic Transcoder, if any, in the calculation.
&amp;#42; 
&amp;#42; MaxWidth
&amp;#42; **/
      MaxWidth?: PixelsOrPercent;
      /** The maximum height of the watermark in one of the following formats:  &amp;#42; number
 of pixels (px): The minimum value is 16 pixels, and the maximum value is the
 value of MaxHeight.
&amp;#42; integer
 percentage (%): The range of valid values is 0 to 100. Use the value of 
 Target to specify whether you want Elastic Transcoder to include the black
 bars that are added by Elastic Transcoder, if any, in the calculation.

If you specify the value in pixels, it must be less than or equal to the value
of MaxHeight. **/
      MaxHeight?: PixelsOrPercent;
      /** A value that controls scaling of the watermark:  &amp;#42; Fit: Elastic Transcoder scales the watermark so it matches the value that you
 specified in either MaxWidth or MaxHeight without exceeding the other value.
&amp;#42; Stretch: Elastic Transcoder stretches the watermark to match the values that
 you specified for MaxWidth and MaxHeight. If the relative proportions of the
 watermark and the values of MaxWidth and MaxHeight are different, the
 watermark will be distorted.
&amp;#42; ShrinkToFit: Elastic Transcoder scales the watermark down so that its
 dimensions match the values that you specified for at least one of MaxWidth 
 and MaxHeight without exceeding either value. If you specify this option,
 Elastic Transcoder does not scale the watermark up. **/
      SizingPolicy?: WatermarkSizingPolicy;
      /** The horizontal position of the watermark unless you specify a non-zero value for 
HorizontalOffset:  &amp;#42; Left: The left edge of the watermark is aligned with the left border of the
 video.
&amp;#42; Right: The right edge of the watermark is aligned with the right border of
 the video.
&amp;#42; Center: The watermark is centered between the left and right borders. **/
      HorizontalAlign?: HorizontalAlign;
      /** The amount by which you want the horizontal position of the watermark to be
offset from the position specified by HorizontalAlign:  &amp;#42; number of pixels (px):
 The minimum value is 0 pixels, and the maximum value is the value of
 MaxWidth.
&amp;#42; integer percentage
 (%): The range of valid values is 0 to 100.

For example, if you specify Left for HorizontalAlign and 5px for 
HorizontalOffset, the left side of the watermark appears 5 pixels from the left
border of the output video.

HorizontalOffset is only valid when the value of HorizontalAlign is Left or 
Right. If you specify an offset that causes the watermark to extend beyond the
left or right border and Elastic Transcoder has not added black bars, the
watermark is cropped. If Elastic Transcoder has added black bars, the watermark
extends into the black bars. If the watermark extends beyond the black bars, it
is cropped.

Use the value of Target to specify whether you want to include the black bars
that are added by Elastic Transcoder, if any, in the offset calculation. **/
      HorizontalOffset?: PixelsOrPercent;
      /** The vertical position of the watermark unless you specify a non-zero value for 
VerticalOffset:  &amp;#42; Top: The top edge of the watermark is aligned with the top border of the
 video.
&amp;#42; Bottom: The bottom edge of the watermark is aligned with the bottom border of
 the video.
&amp;#42; Center: The watermark is centered between the top and bottom borders. **/
      VerticalAlign?: VerticalAlign;
      /** VerticalOffset The amount by which you want the vertical position of the
watermark to be offset from the position specified by VerticalAlign: &amp;#42; number of
 pixels (px): The minimum value is 0 pixels, and the maximum value is the
 value of MaxHeight.
&amp;#42; integer
 percentage (%): The range of valid values is 0 to 100.

For example, if you specify Top for VerticalAlign and 5px for VerticalOffset,
the top of the watermark appears 5 pixels from the top border of the output
video.

VerticalOffset is only valid when the value of VerticalAlign is Top or Bottom.

If you specify an offset that causes the watermark to extend beyond the top or
bottom border and Elastic Transcoder has not added black bars, the watermark is
cropped. If Elastic Transcoder has added black bars, the watermark extends into
the black bars. If the watermark extends beyond the black bars, it is cropped.

Use the value of Target to specify whether you want Elastic Transcoder to
include the black bars that are added by Elastic Transcoder, if any, in the
offset calculation. **/
      VerticalOffset?: PixelsOrPercent;
      /** A percentage that indicates how much you want a watermark to obscure the video
in the location where it appears. Valid values are 0 (the watermark is
invisible) to 100 (the watermark completely obscures the video in the specified
location). The datatype of Opacity is float.

Elastic Transcoder supports transparent .png graphics. If you use a transparent
.png, the transparent portion of the video appears as if you had specified a
value of 0 for Opacity. The .jpg file format doesn&#x27;t support transparency. **/
      Opacity?: Opacity;
      /** A value that determines how Elastic Transcoder interprets values that you
specified for HorizontalOffset, VerticalOffset, MaxWidth, and MaxHeight:  &amp;#42; 
 Content: HorizontalOffset and VerticalOffset values are calculated based on
 the borders of the video excluding black bars added by Elastic Transcoder, if
 any. In addition, MaxWidth and MaxHeight, if specified as a percentage, are
 calculated based on the borders of the video excluding black bars added by
 Elastic Transcoder, if any.
&amp;#42; 
 Frame: HorizontalOffset and VerticalOffset values are calculated based on the
 borders of the video including black bars added by Elastic Transcoder, if
 any.
&amp;#42; 
&amp;#42; 
 MaxWidth
&amp;#42; 
&amp;#42; 
 MaxHeight
&amp;#42; **/
      Target?: Target;
    }
    export interface ReadJobRequest {
      /** The identifier of the job for which you want to get detailed information. **/
      Id: Id;
    }
    export interface ReadJobResponse {
      /** A section of the response body that provides information about the job. **/
      Job?: Job;
    }
    export interface ReadPipelineRequest {
      /** The identifier of the pipeline to read. **/
      Id: Id;
    }
    export interface ReadPipelineResponse {
      /** A section of the response body that provides information about the pipeline. **/
      Pipeline?: Pipeline;
      /** Elastic Transcoder returns a warning if the resources used by your pipeline are
not in the same region as the pipeline.

Using resources in the same region, such as your Amazon S3 buckets, Amazon SNS
notification topics, and AWS KMS key, reduces processing time and prevents
cross-regional charges. **/
      Warnings?: Warnings;
    }
    export interface ReadPresetRequest {
      /** The identifier of the preset for which you want to get detailed information. **/
      Id: Id;
    }
    export interface ReadPresetResponse {
      /** A section of the response body that provides information about the preset. **/
      Preset?: Preset;
    }
    export interface ResourceInUseException {
    }
    export interface ResourceNotFoundException {
    }
    export interface TestRoleRequest {
      /** The IAM Amazon Resource Name (ARN) for the role that you want Elastic Transcoder
to test. **/
      Role: Role;
      /** The Amazon S3 bucket that contains media files to be transcoded. The action
attempts to read from this bucket. **/
      InputBucket: BucketName;
      /** The Amazon S3 bucket that Elastic Transcoder will write transcoded media files
to. The action attempts to read from this bucket. **/
      OutputBucket: BucketName;
      /** The ARNs of one or more Amazon Simple Notification Service (Amazon SNS) topics
that you want the action to send a test notification to. **/
      Topics: SnsTopics;
    }
    export interface TestRoleResponse {
      /** If the operation is successful, this value is true; otherwise, the value is 
false. **/
      Success?: Success;
      /** If the Success element contains false, this value is an array of one or more
error messages that were generated during the test process. **/
      Messages?: ExceptionMessages;
    }
    export interface Thumbnails {
      /** The format of thumbnails, if any. Valid values are jpg and png. 

You specify whether you want Elastic Transcoder to create thumbnails when you
create a job. **/
      Format?: JpgOrPng;
      /** The approximate number of seconds between thumbnails. Specify an integer value. **/
      Interval?: Digits;
      /** To better control resolution and aspect ratio of thumbnails, we recommend that
you use the values MaxWidth, MaxHeight, SizingPolicy, and PaddingPolicy instead
of Resolution and AspectRatio. The two groups of settings are mutually
exclusive. Do not use them together.

The width and height of thumbnail files in pixels. Specify a value in the format 
width x height where both values are even integers. The values cannot exceed the
width and height that you specified in the Video:Resolution object. **/
      Resolution?: ThumbnailResolution;
      /** To better control resolution and aspect ratio of thumbnails, we recommend that
you use the values MaxWidth, MaxHeight, SizingPolicy, and PaddingPolicy instead
of Resolution and AspectRatio. The two groups of settings are mutually
exclusive. Do not use them together.

The aspect ratio of thumbnails. Valid values include:

auto, 1:1, 4:3, 3:2, 16:9

If you specify auto, Elastic Transcoder tries to preserve the aspect ratio of
the video in the output file. **/
      AspectRatio?: AspectRatio;
      /** The maximum width of thumbnails in pixels. If you specify auto, Elastic
Transcoder uses 1920 (Full HD) as the default value. If you specify a numeric
value, enter an even integer between 32 and 4096. **/
      MaxWidth?: DigitsOrAuto;
      /** The maximum height of thumbnails in pixels. If you specify auto, Elastic
Transcoder uses 1080 (Full HD) as the default value. If you specify a numeric
value, enter an even integer between 32 and 3072. **/
      MaxHeight?: DigitsOrAuto;
      /** Specify one of the following values to control scaling of thumbnails:

&amp;#42; Fit: Elastic Transcoder scales thumbnails so they match the value that you
 specified in thumbnail MaxWidth or MaxHeight settings without exceeding the
 other value. 
&amp;#42; Fill: Elastic Transcoder scales thumbnails so they match the value that you
 specified in thumbnail MaxWidth or MaxHeight settings and matches or exceeds
 the other value. Elastic Transcoder centers the image in thumbnails and then
 crops in the dimension (if any) that exceeds the maximum value.
&amp;#42; Stretch: Elastic Transcoder stretches thumbnails to match the values that you
 specified for thumbnail MaxWidth and MaxHeight settings. If the relative
 proportions of the input video and thumbnails are different, the thumbnails
 will be distorted.
&amp;#42; Keep: Elastic Transcoder does not scale thumbnails. If either dimension of
 the input video exceeds the values that you specified for thumbnail MaxWidth 
 and MaxHeight settings, Elastic Transcoder crops the thumbnails.
&amp;#42; ShrinkToFit: Elastic Transcoder scales thumbnails down so that their
 dimensions match the values that you specified for at least one of thumbnail 
 MaxWidth and MaxHeight without exceeding either value. If you specify this
 option, Elastic Transcoder does not scale thumbnails up.
&amp;#42; ShrinkToFill: Elastic Transcoder scales thumbnails down so that their
 dimensions match the values that you specified for at least one of MaxWidth 
 and MaxHeight without dropping below either value. If you specify this
 option, Elastic Transcoder does not scale thumbnails up. **/
      SizingPolicy?: SizingPolicy;
      /** When you set PaddingPolicy to Pad, Elastic Transcoder may add black bars to the
top and bottom and/or left and right sides of thumbnails to make the total size
of the thumbnails match the values that you specified for thumbnail MaxWidth and 
MaxHeight settings. **/
      PaddingPolicy?: PaddingPolicy;
    }
    export interface TimeSpan {
      /** The place in the input file where you want a clip to start. The format can be
either HH:mm:ss.SSS (maximum value: 23:59:59.999; SSS is thousandths of a
second) or sssss.SSS (maximum value: 86399.999). If you don&#x27;t specify a value,
Elastic Transcoder starts at the beginning of the input file. **/
      StartTime?: Time;
      /** The duration of the clip. The format can be either HH:mm:ss.SSS (maximum value:
23:59:59.999; SSS is thousandths of a second) or sssss.SSS (maximum value:
86399.999). If you don&#x27;t specify a value, Elastic Transcoder creates an output
file from StartTime to the end of the file.

If you specify a value longer than the duration of the input file, Elastic
Transcoder transcodes the file and returns a warning message. **/
      Duration?: Time;
    }
    export interface Timing {
      /** The time the job was submitted to Elastic Transcoder, in epoch milliseconds. **/
      SubmitTimeMillis?: NullableLong;
      /** The time the job began transcoding, in epoch milliseconds. **/
      StartTimeMillis?: NullableLong;
      /** The time the job finished transcoding, in epoch milliseconds. **/
      FinishTimeMillis?: NullableLong;
    }
    export interface UpdatePipelineNotificationsRequest {
      /** The identifier of the pipeline for which you want to change notification
settings. **/
      Id: Id;
      /** The topic ARN for the Amazon Simple Notification Service (Amazon SNS) topic that
you want to notify to report job status.

To receive notifications, you must also subscribe to the new topic in the Amazon
SNS console.  &amp;#42; Progressing: The topic ARN for the Amazon Simple Notification Service (Amazon
 SNS) topic that you want to notify when Elastic Transcoder has started to
 process jobs that are added to this pipeline. This is the ARN that Amazon SNS
 returned when you created the topic.
&amp;#42; Completed: The topic ARN for the Amazon SNS topic that you want to notify
 when Elastic Transcoder has finished processing a job. This is the ARN that
 Amazon SNS returned when you created the topic.
&amp;#42; Warning: The topic ARN for the Amazon SNS topic that you want to notify when
 Elastic Transcoder encounters a warning condition. This is the ARN that
 Amazon SNS returned when you created the topic.
&amp;#42; Error: The topic ARN for the Amazon SNS topic that you want to notify when
 Elastic Transcoder encounters an error condition. This is the ARN that Amazon
 SNS returned when you created the topic. **/
      Notifications: Notifications;
    }
    export interface UpdatePipelineNotificationsResponse {
      /** A section of the response body that provides information about the pipeline. **/
      Pipeline?: Pipeline;
    }
    export interface UpdatePipelineRequest {
      /** The ID of the pipeline that you want to update. **/
      Id: Id;
      /** The name of the pipeline. We recommend that the name be unique within the AWS
account, but uniqueness is not enforced.

Constraints: Maximum 40 characters **/
      Name?: Name;
      /** The Amazon S3 bucket in which you saved the media files that you want to
transcode and the graphics that you want to use as watermarks. **/
      InputBucket?: BucketName;
      /** The IAM Amazon Resource Name (ARN) for the role that you want Elastic Transcoder
to use to transcode jobs for this pipeline. **/
      Role?: Role;
      /** The AWS Key Management Service (AWS KMS) key that you want to use with this
pipeline.

If you use either S3 or S3-AWS-KMS as your Encryption:Mode, you don&#x27;t need to
provide a key with your job because a default key, known as an AWS-KMS key, is
created for you automatically. You need to provide an AWS-KMS key only if you
want to use a non-default AWS-KMS key, or if you are using an Encryption:Mode of 
AES-PKCS7, AES-CTR, or AES-GCM. **/
      AwsKmsKeyArn?: KeyArn;
      Notifications?: Notifications;
      /** The optional ContentConfig object specifies information about the Amazon S3
bucket in which you want Elastic Transcoder to save transcoded files and
playlists: which bucket to use, which users you want to have access to the
files, the type of access you want users to have, and the storage class that you
want to assign to the files.

If you specify values for ContentConfig, you must also specify values for 
ThumbnailConfig.

If you specify values for ContentConfig and ThumbnailConfig, omit the 
OutputBucket object.

&amp;#42; Bucket: The Amazon S3 bucket in which you want Elastic Transcoder to save
 transcoded files and playlists.
&amp;#42; Permissions (Optional): The Permissions object specifies which users you want
 to have access to transcoded files and the type of access you want them to
 have. You can grant permissions to a maximum of 30 users and/or predefined
 Amazon S3 groups.
&amp;#42; Grantee Type: Specify the type of value that appears in the Grantee object:  &amp;#42; 
    Canonical: The value in the Grantee object is either the canonical user ID
    for an AWS account or an origin access identity for an Amazon CloudFront
    distribution. For more information about canonical user IDs, see Access
    Control List (ACL) Overview in the Amazon Simple Storage Service Developer
    Guide. For more information about using CloudFront origin access
    identities to require that users use CloudFront URLs instead of Amazon S3
    URLs, see Using an Origin Access Identity to Restrict Access to Your
    Amazon S3 Content. A canonical user ID is not the same as an AWS account
    number. 
  &amp;#42; 
    Email: The value in the Grantee object is the registered email address of
    an AWS account.
  &amp;#42; 
    Group: The value in the Grantee object is one of the following predefined
    Amazon S3 groups: AllUsers, AuthenticatedUsers, or LogDelivery.
 
 
&amp;#42;  Grantee: The AWS user or group that you want to have access to transcoded
 files and playlists. To identify the user or group, you can specify the
 canonical user ID for an AWS account, an origin access identity for a
 CloudFront distribution, the registered email address of an AWS account, or a
 predefined Amazon S3 group 
&amp;#42;  Access: The permission that you want to give to the AWS user that you
 specified in Grantee. Permissions are granted on the files that Elastic
 Transcoder adds to the bucket, including playlists and video files. Valid
 values include:  &amp;#42; READ: The grantee can read the objects and metadata for objects that
    Elastic Transcoder adds to the Amazon S3 bucket.
  &amp;#42; READ_ACP: The grantee can read the object ACL for objects that Elastic
    Transcoder adds to the Amazon S3 bucket. 
  &amp;#42; WRITE_ACP: The grantee can write the ACL for the objects that Elastic
    Transcoder adds to the Amazon S3 bucket.
  &amp;#42; FULL_CONTROL: The grantee has READ, READ_ACP, and WRITE_ACP permissions
    for the objects that Elastic Transcoder adds to the Amazon S3 bucket.
 
 
&amp;#42;  StorageClass: The Amazon S3 storage class, Standard or ReducedRedundancy,
 that you want Elastic Transcoder to assign to the video files and playlists
 that it stores in your Amazon S3 bucket. **/
      ContentConfig?: PipelineOutputConfig;
      /** The ThumbnailConfig object specifies several values, including the Amazon S3
bucket in which you want Elastic Transcoder to save thumbnail files, which users
you want to have access to the files, the type of access you want users to have,
and the storage class that you want to assign to the files.

If you specify values for ContentConfig, you must also specify values for 
ThumbnailConfig even if you don&#x27;t want to create thumbnails.

If you specify values for ContentConfig and ThumbnailConfig, omit the 
OutputBucket object.

&amp;#42; Bucket: The Amazon S3 bucket in which you want Elastic Transcoder to save
 thumbnail files.
&amp;#42; Permissions (Optional): The Permissions object specifies which users and/or
 predefined Amazon S3 groups you want to have access to thumbnail files, and
 the type of access you want them to have. You can grant permissions to a
 maximum of 30 users and/or predefined Amazon S3 groups.
&amp;#42;  GranteeType: Specify the type of value that appears in the Grantee object:  &amp;#42;  Canonical: The value in the Grantee object is either the canonical user
    ID for an AWS account or an origin access identity for an Amazon
    CloudFront distribution. A canonical user ID is not the same as an AWS
    account number.
  &amp;#42; 
    Email: The value in the Grantee object is the registered email address of
    an AWS account. 
  &amp;#42; 
    Group: The value in the Grantee object is one of the following predefined
    Amazon S3 groups: AllUsers, AuthenticatedUsers, or LogDelivery.
 
 
&amp;#42;  Grantee: The AWS user or group that you want to have access to thumbnail
 files. To identify the user or group, you can specify the canonical user ID
 for an AWS account, an origin access identity for a CloudFront distribution,
 the registered email address of an AWS account, or a predefined Amazon S3
 group. 
&amp;#42;  Access: The permission that you want to give to the AWS user that you
 specified in Grantee. Permissions are granted on the thumbnail files that
 Elastic Transcoder adds to the bucket. Valid values include:  &amp;#42; READ: The grantee can read the thumbnails and metadata for objects that
    Elastic Transcoder adds to the Amazon S3 bucket.
  &amp;#42; READ_ACP: The grantee can read the object ACL for thumbnails that Elastic
    Transcoder adds to the Amazon S3 bucket. 
  &amp;#42; WRITE_ACP: The grantee can write the ACL for the thumbnails that Elastic
    Transcoder adds to the Amazon S3 bucket.
  &amp;#42; FULL_CONTROL: The grantee has READ, READ_ACP, and WRITE_ACP permissions
    for the thumbnails that Elastic Transcoder adds to the Amazon S3 bucket. 
 
 
&amp;#42;  StorageClass: The Amazon S3 storage class, Standard or ReducedRedundancy,
 that you want Elastic Transcoder to assign to the thumbnails that it stores
 in your Amazon S3 bucket. **/
      ThumbnailConfig?: PipelineOutputConfig;
    }
    export interface UpdatePipelineResponse {
      Pipeline?: Pipeline;
      /** Elastic Transcoder returns a warning if the resources used by your pipeline are
not in the same region as the pipeline.

Using resources in the same region, such as your Amazon S3 buckets, Amazon SNS
notification topics, and AWS KMS key, reduces processing time and prevents
cross-regional charges. **/
      Warnings?: Warnings;
    }
    export interface UpdatePipelineStatusRequest {
      /** The identifier of the pipeline to update. **/
      Id: Id;
      /** The desired status of the pipeline:

&amp;#42;  Active: The pipeline is processing jobs.
&amp;#42;  Paused: The pipeline is not currently processing jobs. **/
      Status: PipelineStatus;
    }
    export interface UpdatePipelineStatusResponse {
      /** A section of the response body that provides information about the pipeline. **/
      Pipeline?: Pipeline;
    }
    export interface ValidationException {
    }
    export interface VideoParameters {
      /** The video codec for the output file. Valid values include gif, H.264, mpeg2, and 
vp8. You can only specify vp8 when the container type is webm, gif when the
container type is gif, and mpeg2 when the container type is mpg. **/
      Codec?: VideoCodec;
      /** Profile (H.264/VP8 Only) 

The H.264 profile that you want to use for the output file. Elastic Transcoder
supports the following profiles:

&amp;#42; baseline: The profile most commonly used for videoconferencing and for mobile
 applications.
&amp;#42; main: The profile used for standard-definition digital TV broadcasts.
&amp;#42; high: The profile used for high-definition digital TV broadcasts and for
 Blu-ray discs.

Level (H.264 Only) 

The H.264 level that you want to use for the output file. Elastic Transcoder
supports the following levels:

1, 1b, 1.1, 1.2, 1.3, 2, 2.1, 2.2, 3, 3.1, 3.2, 4, 4.1

MaxReferenceFrames (H.264 Only) 

Applicable only when the value of Video:Codec is H.264. The maximum number of
previously decoded frames to use as a reference for decoding future frames.
Valid values are integers 0 through 16, but we recommend that you not use a
value greater than the following:

Min(Floor(Maximum decoded picture buffer in macroblocks &amp;#42; 256 / (Width in
pixels &amp;#42; Height in pixels)), 16) 

where Width in pixels and Height in pixels represent either MaxWidth and
MaxHeight, or Resolution. Maximum decoded picture buffer in macroblocks depends
on the value of the Level object. See the list below. (A macroblock is a block
of pixels measuring 16x16.) 

&amp;#42; 1 - 396
&amp;#42; 1b - 396
&amp;#42; 1.1 - 900
&amp;#42; 1.2 - 2376
&amp;#42; 1.3 - 2376
&amp;#42; 2 - 2376
&amp;#42; 2.1 - 4752
&amp;#42; 2.2 - 8100
&amp;#42; 3 - 8100
&amp;#42; 3.1 - 18000
&amp;#42; 3.2 - 20480
&amp;#42; 4 - 32768
&amp;#42; 4.1 - 32768

MaxBitRate (Optional, H.264/MPEG2/VP8 only) 

The maximum number of bits per second in a video buffer; the size of the buffer
is specified by BufferSize. Specify a value between 16 and 62,500. You can
reduce the bandwidth required to stream a video by reducing the maximum bit
rate, but this also reduces the quality of the video.

BufferSize (Optional, H.264/MPEG2/VP8 only) 

The maximum number of bits in any x seconds of the output video. This window is
commonly 10 seconds, the standard segment duration when you&#x27;re using FMP4 or
MPEG-TS for the container type of the output video. Specify an integer greater
than 0. If you specify MaxBitRate and omit BufferSize, Elastic Transcoder sets 
BufferSize to 10 times the value of MaxBitRate.

InterlacedMode (Optional, H.264/MPEG2 Only) 

The interlace mode for the output video.

Interlaced video is used to double the perceived frame rate for a video by
interlacing two fields (one field on every other line, the other field on the
other lines) so that the human eye registers multiple pictures per frame.
Interlacing reduces the bandwidth required for transmitting a video, but can
result in blurred images and flickering.

Valid values include Progressive (no interlacing, top to bottom), TopFirst (top
field first), BottomFirst (bottom field first), and Auto.

If InterlaceMode is not specified, Elastic Transcoder uses Progressive for the
output. If Auto is specified, Elastic Transcoder interlaces the output.

ColorSpaceConversionMode (Optional, H.264/MPEG2 Only) 

The color space conversion Elastic Transcoder applies to the output video. Color
spaces are the algorithms used by the computer to store information about how to
render color. Bt.601 is the standard for standard definition video, while Bt.709 
is the standard for high definition video.

Valid values include None, Bt709toBt601, Bt601toBt709, and Auto.

If you chose Auto for ColorSpaceConversionMode and your output is interlaced,
your frame rate is one of 23.97, 24, 25, 29.97, 50, or 60, your SegmentDuration 
is null, and you are using one of the resolution changes from the list below,
Elastic Transcoder applies the following color space conversions:

&amp;#42; Standard to HD, 720x480 to 1920x1080 - Elastic Transcoder applies 
 Bt601ToBt709
&amp;#42; Standard to HD, 720x576 to 1920x1080 - Elastic Transcoder applies 
 Bt601ToBt709
&amp;#42; HD to Standard, 1920x1080 to 720x480 - Elastic Transcoder applies 
 Bt709ToBt601
&amp;#42; HD to Standard, 1920x1080 to 720x576 - Elastic Transcoder applies 
 Bt709ToBt601

Elastic Transcoder may change the behavior of the ColorspaceConversionMode Auto 
mode in the future. All outputs in a playlist must use the same 
ColorSpaceConversionMode. If you do not specify a ColorSpaceConversionMode, Elastic Transcoder does not
change the color space of a file. If you are unsure what 
ColorSpaceConversionMode was applied to your output file, you can check the 
AppliedColorSpaceConversion parameter included in your job response. If your job
does not have an AppliedColorSpaceConversion in its response, no 
ColorSpaceConversionMode was applied.

ChromaSubsampling 

The sampling pattern for the chroma (color) channels of the output video. Valid
values include yuv420p and yuv422p.

yuv420p samples the chroma information of every other horizontal and every other
vertical line, yuv422p samples the color information of every horizontal line
and every other vertical line.

LoopCount (Gif Only) 

The number of times you want the output gif to loop. Valid values include 
Infinite and integers between 0 and 100, inclusive. **/
      CodecOptions?: CodecOptions;
      /** Applicable only when the value of Video:Codec is one of H.264, MPEG2, or VP8.

The maximum number of frames between key frames. Key frames are fully encoded
frames; the frames between key frames are encoded based, in part, on the content
of the key frames. The value is an integer formatted as a string; valid values
are between 1 (every frame is a key frame) and 100000, inclusive. A higher value
results in higher compression but may also discernibly decrease video quality.

For Smooth outputs, the FrameRate must have a constant ratio to the 
KeyframesMaxDist. This allows Smooth playlists to switch between different
quality levels while the file is being played.

For example, an input file can have a FrameRate of 30 with a KeyframesMaxDist of
90. The output file then needs to have a ratio of 1:3. Valid outputs would have 
FrameRate of 30, 25, and 10, and KeyframesMaxDist of 90, 75, and 30,
respectively.

Alternately, this can be achieved by setting FrameRate to auto and having the
same values for MaxFrameRate and KeyframesMaxDist. **/
      KeyframesMaxDist?: KeyframesMaxDist;
      /** Applicable only when the value of Video:Codec is one of H.264, MPEG2, or VP8.

Whether to use a fixed value for FixedGOP. Valid values are true and false:

&amp;#42; true: Elastic Transcoder uses the value of KeyframesMaxDist for the distance
 between key frames (the number of frames in a group of pictures, or GOP).
&amp;#42; false: The distance between key frames can vary.

FixedGOP must be set to true for fmp4 containers. **/
      FixedGOP?: FixedGOP;
      /** The bit rate of the video stream in the output file, in kilobits/second. Valid
values depend on the values of Level and Profile. If you specify auto, Elastic
Transcoder uses the detected bit rate of the input source. If you specify a
value other than auto, we recommend that you specify a value less than or equal
to the maximum H.264-compliant value listed for your level and profile:

Level - Maximum video bit rate in kilobits/second (baseline and main Profile) :
maximum video bit rate in kilobits/second (high Profile) 

&amp;#42; 1 - 64 : 80
&amp;#42; 1b - 128 : 160
&amp;#42; 1.1 - 192 : 240
&amp;#42; 1.2 - 384 : 480
&amp;#42; 1.3 - 768 : 960
&amp;#42; 2 - 2000 : 2500
&amp;#42; 3 - 10000 : 12500
&amp;#42; 3.1 - 14000 : 17500
&amp;#42; 3.2 - 20000 : 25000
&amp;#42; 4 - 20000 : 25000
&amp;#42; 4.1 - 50000 : 62500 **/
      BitRate?: VideoBitRate;
      /** The frames per second for the video stream in the output file. Valid values
include:

auto, 10, 15, 23.97, 24, 25, 29.97, 30, 60

If you specify auto, Elastic Transcoder uses the detected frame rate of the
input source. If you specify a frame rate, we recommend that you perform the
following calculation:

Frame rate = maximum recommended decoding speed in luma samples/second / (width
in pixels &amp;#42; height in pixels) 

where:

&amp;#42; width in pixels and height in pixels represent the Resolution of the output
 video.
&amp;#42; maximum recommended decoding speed in Luma samples/second is less than or
 equal to the maximum value listed in the following table, based on the value
 that you specified for Level.

The maximum recommended decoding speed in Luma samples/second for each level is
described in the following list (Level - Decoding speed):

&amp;#42; 1 - 380160
&amp;#42; 1b - 380160
&amp;#42; 1.1 - 76800
&amp;#42; 1.2 - 1536000
&amp;#42; 1.3 - 3041280
&amp;#42; 2 - 3041280
&amp;#42; 2.1 - 5068800
&amp;#42; 2.2 - 5184000
&amp;#42; 3 - 10368000
&amp;#42; 3.1 - 27648000
&amp;#42; 3.2 - 55296000
&amp;#42; 4 - 62914560
&amp;#42; 4.1 - 62914560 **/
      FrameRate?: FrameRate;
      /** If you specify auto for FrameRate, Elastic Transcoder uses the frame rate of the
input video for the frame rate of the output video. Specify the maximum frame
rate that you want Elastic Transcoder to use when the frame rate of the input
video is greater than the desired maximum frame rate of the output video. Valid
values include: 10, 15, 23.97, 24, 25, 29.97, 30, 60. **/
      MaxFrameRate?: MaxFrameRate;
      /** To better control resolution and aspect ratio of output videos, we recommend
that you use the values MaxWidth, MaxHeight, SizingPolicy, PaddingPolicy, and 
DisplayAspectRatio instead of Resolution and AspectRatio. The two groups of
settings are mutually exclusive. Do not use them together.

The width and height of the video in the output file, in pixels. Valid values
are auto and width x height:

&amp;#42; auto: Elastic Transcoder attempts to preserve the width and height of the
 input file, subject to the following rules.
&amp;#42; width x height: The width and height of the output video in pixels.

Note the following about specifying the width and height:

&amp;#42; The width must be an even integer between 128 and 4096, inclusive.
&amp;#42; The height must be an even integer between 96 and 3072, inclusive.
&amp;#42; If you specify a resolution that is less than the resolution of the input
 file, Elastic Transcoder rescales the output file to the lower resolution.
&amp;#42; If you specify a resolution that is greater than the resolution of the input
 file, Elastic Transcoder rescales the output to the higher resolution.
&amp;#42; We recommend that you specify a resolution for which the product of width and
 height is less than or equal to the applicable value in the following list (
 List - Max width x height value):
&amp;#42;  1 - 25344 1b - 25344 1.1 - 101376 1.2 - 101376 1.3 - 101376 2 - 101376 2.1 -
 202752 2.2 - 404720 3 - 404720 3.1 - 921600 3.2 - 1310720 4 - 2097152 4.1 -
 2097152 **/
      Resolution?: Resolution;
      /** To better control resolution and aspect ratio of output videos, we recommend
that you use the values MaxWidth, MaxHeight, SizingPolicy, PaddingPolicy, and 
DisplayAspectRatio instead of Resolution and AspectRatio. The two groups of
settings are mutually exclusive. Do not use them together.

The display aspect ratio of the video in the output file. Valid values include:

auto, 1:1, 4:3, 3:2, 16:9

If you specify auto, Elastic Transcoder tries to preserve the aspect ratio of
the input file.

If you specify an aspect ratio for the output file that differs from aspect
ratio of the input file, Elastic Transcoder adds pillarboxing (black bars on the
sides) or letterboxing (black bars on the top and bottom) to maintain the aspect
ratio of the active region of the video. **/
      AspectRatio?: AspectRatio;
      /** The maximum width of the output video in pixels. If you specify auto, Elastic
Transcoder uses 1920 (Full HD) as the default value. If you specify a numeric
value, enter an even integer between 128 and 4096. **/
      MaxWidth?: DigitsOrAuto;
      /** The maximum height of the output video in pixels. If you specify auto, Elastic
Transcoder uses 1080 (Full HD) as the default value. If you specify a numeric
value, enter an even integer between 96 and 3072. **/
      MaxHeight?: DigitsOrAuto;
      /** The value that Elastic Transcoder adds to the metadata in the output file. **/
      DisplayAspectRatio?: AspectRatio;
      /** Specify one of the following values to control scaling of the output video:

&amp;#42; Fit: Elastic Transcoder scales the output video so it matches the value that
 you specified in either MaxWidth or MaxHeight without exceeding the other
 value.
&amp;#42; Fill: Elastic Transcoder scales the output video so it matches the value that
 you specified in either MaxWidth or MaxHeight and matches or exceeds the
 other value. Elastic Transcoder centers the output video and then crops it in
 the dimension (if any) that exceeds the maximum value.
&amp;#42; Stretch: Elastic Transcoder stretches the output video to match the values
 that you specified for MaxWidth and MaxHeight. If the relative proportions of
 the input video and the output video are different, the output video will be
 distorted.
&amp;#42; Keep: Elastic Transcoder does not scale the output video. If either dimension
 of the input video exceeds the values that you specified for MaxWidth and 
 MaxHeight, Elastic Transcoder crops the output video.
&amp;#42; ShrinkToFit: Elastic Transcoder scales the output video down so that its
 dimensions match the values that you specified for at least one of MaxWidth 
 and MaxHeight without exceeding either value. If you specify this option,
 Elastic Transcoder does not scale the video up.
&amp;#42; ShrinkToFill: Elastic Transcoder scales the output video down so that its
 dimensions match the values that you specified for at least one of MaxWidth 
 and MaxHeight without dropping below either value. If you specify this
 option, Elastic Transcoder does not scale the video up. **/
      SizingPolicy?: SizingPolicy;
      /** When you set PaddingPolicy to Pad, Elastic Transcoder may add black bars to the
top and bottom and/or left and right sides of the output video to make the total
size of the output video match the values that you specified for MaxWidth and 
MaxHeight. **/
      PaddingPolicy?: PaddingPolicy;
      /** Settings for the size, location, and opacity of graphics that you want Elastic
Transcoder to overlay over videos that are transcoded using this preset. You can
specify settings for up to four watermarks. Watermarks appear in the specified
size and location, and with the specified opacity for the duration of the
transcoded video.

Watermarks can be in .png or .jpg format. If you want to display a watermark
that is not rectangular, use the .png format, which supports transparency.

When you create a job that uses this preset, you specify the .png or .jpg
graphics that you want Elastic Transcoder to include in the transcoded videos.
You can specify fewer graphics in the job than you specify watermark settings in
the preset, which allows you to use the same preset for up to four watermarks
that have different dimensions. **/
      Watermarks?: PresetWatermarks;
    }
    export interface Warning {
      /** The code of the cross-regional warning. **/
      Code?: String;
      /** The message explaining what resources are in a different region from the
pipeline.

Note: AWS KMS keys must be in the same region as the pipeline. **/
      Message?: String;
    }
  }
}
