// DO NOT EDIT!
//
declare module "aws-sdk" {
    export class ImportExport {
      constructor(options?: any);
      cancelJob(params: CancelJobInput, callback: (err: InvalidJobIdException|ExpiredJobIdException|CanceledJobIdException|UnableToCancelJobIdException|InvalidAccessKeyIdException|InvalidVersionException|any, data: CancelJobOutput|any) => void): void;
      createJob(params: CreateJobInput, callback: (err: MissingParameterException|InvalidParameterException|InvalidAccessKeyIdException|InvalidAddressException|InvalidManifestFieldException|MissingManifestFieldException|NoSuchBucketException|MissingCustomsException|InvalidCustomsException|InvalidFileSystemException|MultipleRegionsException|BucketPermissionException|MalformedManifestException|CreateJobQuotaExceededException|InvalidJobIdException|InvalidVersionException|any, data: CreateJobOutput|any) => void): void;
      getShippingLabel(params: GetShippingLabelInput, callback: (err: InvalidJobIdException|ExpiredJobIdException|CanceledJobIdException|InvalidAccessKeyIdException|InvalidAddressException|InvalidVersionException|InvalidParameterException|any, data: GetShippingLabelOutput|any) => void): void;
      getStatus(params: GetStatusInput, callback: (err: InvalidJobIdException|ExpiredJobIdException|CanceledJobIdException|InvalidAccessKeyIdException|InvalidVersionException|any, data: GetStatusOutput|any) => void): void;
      listJobs(params: ListJobsInput, callback: (err: InvalidParameterException|InvalidAccessKeyIdException|InvalidVersionException|any, data: ListJobsOutput|any) => void): void;
      updateJob(params: UpdateJobInput, callback: (err: MissingParameterException|InvalidParameterException|InvalidAccessKeyIdException|InvalidAddressException|InvalidManifestFieldException|InvalidJobIdException|MissingManifestFieldException|NoSuchBucketException|ExpiredJobIdException|CanceledJobIdException|MissingCustomsException|InvalidCustomsException|InvalidFileSystemException|MultipleRegionsException|BucketPermissionException|MalformedManifestException|UnableToUpdateJobIdException|InvalidVersionException|any, data: UpdateJobOutput|any) => void): void;
    }

    export type APIVersion = string;

    export interface Artifact {
      Description?: Description;
      URL?: URL;
    }


    export type ArtifactList = Array<Artifact>;

    export interface BucketPermissionException {
      message?: ErrorMessage;
    }


    export interface CancelJobInput {
      JobId: JobId;
      APIVersion?: APIVersion;
    }


    export interface CancelJobOutput {
      Success?: Success;
    }


    export interface CanceledJobIdException {
      message?: ErrorMessage;
    }


    export type Carrier = string;

    export interface CreateJobInput {
      JobType: JobType;
      Manifest: Manifest;
      ManifestAddendum?: ManifestAddendum;
      ValidateOnly: ValidateOnly;
      APIVersion?: APIVersion;
    }


    export interface CreateJobOutput {
      JobId?: JobId;
      JobType?: JobType;
      Signature?: Signature;
      SignatureFileContents?: SignatureFileContents;
      WarningMessage?: WarningMessage;
      ArtifactList?: ArtifactList;
    }


    export interface CreateJobQuotaExceededException {
      message?: ErrorMessage;
    }


    export type CreationDate = number;

    export type CurrentManifest = string;

    export type Description = string;

    export type ErrorCount = number;

    export type ErrorMessage = string;

    export interface ExpiredJobIdException {
      message?: ErrorMessage;
    }


    export type GenericString = string;

    export interface GetShippingLabelInput {
      jobIds: JobIdList;
      name?: GenericString;
      company?: GenericString;
      phoneNumber?: GenericString;
      country?: GenericString;
      stateOrProvince?: GenericString;
      city?: GenericString;
      postalCode?: GenericString;
      street1?: GenericString;
      street2?: GenericString;
      street3?: GenericString;
      APIVersion?: GenericString;
    }


    export interface GetShippingLabelOutput {
      ShippingLabelURL?: GenericString;
      Warning?: GenericString;
    }


    export interface GetStatusInput {
      JobId: JobId;
      APIVersion?: APIVersion;
    }


    export interface GetStatusOutput {
      JobId?: JobId;
      JobType?: JobType;
      LocationCode?: LocationCode;
      LocationMessage?: LocationMessage;
      ProgressCode?: ProgressCode;
      ProgressMessage?: ProgressMessage;
      Carrier?: Carrier;
      TrackingNumber?: TrackingNumber;
      LogBucket?: LogBucket;
      LogKey?: LogKey;
      ErrorCount?: ErrorCount;
      Signature?: Signature;
      SignatureFileContents?: Signature;
      CurrentManifest?: CurrentManifest;
      CreationDate?: CreationDate;
      ArtifactList?: ArtifactList;
    }


    export interface InvalidAccessKeyIdException {
      message?: ErrorMessage;
    }


    export interface InvalidAddressException {
      message?: ErrorMessage;
    }


    export interface InvalidCustomsException {
      message?: ErrorMessage;
    }


    export interface InvalidFileSystemException {
      message?: ErrorMessage;
    }


    export interface InvalidJobIdException {
      message?: ErrorMessage;
    }


    export interface InvalidManifestFieldException {
      message?: ErrorMessage;
    }


    export interface InvalidParameterException {
      message?: ErrorMessage;
    }


    export interface InvalidVersionException {
      message?: ErrorMessage;
    }


    export type IsCanceled = boolean;

    export type IsTruncated = boolean;

    export interface Job {
      JobId?: JobId;
      CreationDate?: CreationDate;
      IsCanceled?: IsCanceled;
      JobType?: JobType;
    }


    export type JobId = string;

    export type JobIdList = Array<GenericString>;

    export type JobType = string;

    export type JobsList = Array<Job>;

    export interface ListJobsInput {
      MaxJobs?: MaxJobs;
      Marker?: Marker;
      APIVersion?: APIVersion;
    }


    export interface ListJobsOutput {
      Jobs?: JobsList;
      IsTruncated?: IsTruncated;
    }


    export type LocationCode = string;

    export type LocationMessage = string;

    export type LogBucket = string;

    export type LogKey = string;

    export interface MalformedManifestException {
      message?: ErrorMessage;
    }


    export type Manifest = string;

    export type ManifestAddendum = string;

    export type Marker = string;

    export type MaxJobs = number;

    export interface MissingCustomsException {
      message?: ErrorMessage;
    }


    export interface MissingManifestFieldException {
      message?: ErrorMessage;
    }


    export interface MissingParameterException {
      message?: ErrorMessage;
    }


    export interface MultipleRegionsException {
      message?: ErrorMessage;
    }


    export interface NoSuchBucketException {
      message?: ErrorMessage;
    }


    export type ProgressCode = string;

    export type ProgressMessage = string;

    export type Signature = string;

    export type SignatureFileContents = string;

    export type Success = boolean;

    export type TrackingNumber = string;

    export type URL = string;

    export interface UnableToCancelJobIdException {
      message?: ErrorMessage;
    }


    export interface UnableToUpdateJobIdException {
      message?: ErrorMessage;
    }


    export interface UpdateJobInput {
      JobId: JobId;
      Manifest: Manifest;
      JobType: JobType;
      ValidateOnly: ValidateOnly;
      APIVersion?: APIVersion;
    }


    export interface UpdateJobOutput {
      Success?: Success;
      WarningMessage?: WarningMessage;
      ArtifactList?: ArtifactList;
    }


    export type ValidateOnly = boolean;

    export type WarningMessage = string;

}
