// Type definitions for aws-sdk - AWS Import/Export
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

///<reference path="./aws-sdk-common.d.ts" />

declare module "aws-sdk" {

    /*
     * apiVersion: 2010-06-01
     * endpointPrefix: importexport
     * serviceAbbreviation: 
     * signatureVersion: v2
     * protocol: query
     */
    export class ImportExport extends Service {
      constructor(options?: any);
      endpoint: Endpoint;
      cancelJob(params: ImportExport.CancelJobInput, callback?: (err: ImportExport.InvalidJobIdException|ImportExport.ExpiredJobIdException|ImportExport.CanceledJobIdException|ImportExport.UnableToCancelJobIdException|ImportExport.InvalidAccessKeyIdException|ImportExport.InvalidVersionException|any, data: ImportExport.CancelJobOutput|any) => void): Request;
      createJob(params: ImportExport.CreateJobInput, callback?: (err: ImportExport.MissingParameterException|ImportExport.InvalidParameterException|ImportExport.InvalidAccessKeyIdException|ImportExport.InvalidAddressException|ImportExport.InvalidManifestFieldException|ImportExport.MissingManifestFieldException|ImportExport.NoSuchBucketException|ImportExport.MissingCustomsException|ImportExport.InvalidCustomsException|ImportExport.InvalidFileSystemException|ImportExport.MultipleRegionsException|ImportExport.BucketPermissionException|ImportExport.MalformedManifestException|ImportExport.CreateJobQuotaExceededException|ImportExport.InvalidJobIdException|ImportExport.InvalidVersionException|any, data: ImportExport.CreateJobOutput|any) => void): Request;
      getShippingLabel(params: ImportExport.GetShippingLabelInput, callback?: (err: ImportExport.InvalidJobIdException|ImportExport.ExpiredJobIdException|ImportExport.CanceledJobIdException|ImportExport.InvalidAccessKeyIdException|ImportExport.InvalidAddressException|ImportExport.InvalidVersionException|ImportExport.InvalidParameterException|any, data: ImportExport.GetShippingLabelOutput|any) => void): Request;
      getStatus(params: ImportExport.GetStatusInput, callback?: (err: ImportExport.InvalidJobIdException|ImportExport.ExpiredJobIdException|ImportExport.CanceledJobIdException|ImportExport.InvalidAccessKeyIdException|ImportExport.InvalidVersionException|any, data: ImportExport.GetStatusOutput|any) => void): Request;
      listJobs(params: ImportExport.ListJobsInput, callback?: (err: ImportExport.InvalidParameterException|ImportExport.InvalidAccessKeyIdException|ImportExport.InvalidVersionException|any, data: ImportExport.ListJobsOutput|any) => void): Request;
      updateJob(params: ImportExport.UpdateJobInput, callback?: (err: ImportExport.MissingParameterException|ImportExport.InvalidParameterException|ImportExport.InvalidAccessKeyIdException|ImportExport.InvalidAddressException|ImportExport.InvalidManifestFieldException|ImportExport.InvalidJobIdException|ImportExport.MissingManifestFieldException|ImportExport.NoSuchBucketException|ImportExport.ExpiredJobIdException|ImportExport.CanceledJobIdException|ImportExport.MissingCustomsException|ImportExport.InvalidCustomsException|ImportExport.InvalidFileSystemException|ImportExport.MultipleRegionsException|ImportExport.BucketPermissionException|ImportExport.MalformedManifestException|ImportExport.UnableToUpdateJobIdException|ImportExport.InvalidVersionException|any, data: ImportExport.UpdateJobOutput|any) => void): Request;

    }

    export module ImportExport {
        export type APIVersion = string;
        export type ArtifactList = Artifact[];
        export type Carrier = string;
        export type CreationDate = number;
        export type CurrentManifest = string;
        export type Description = string;
        export type ErrorCount = number;
        export type ErrorMessage = string;
        export type GenericString = string;
        export type IsCanceled = boolean;
        export type IsTruncated = boolean;
        export type JobId = string;
        export type JobIdList = GenericString[];
        export type JobType = string;
        export type JobsList = Job[];
        export type LocationCode = string;
        export type LocationMessage = string;
        export type LogBucket = string;
        export type LogKey = string;
        export type Manifest = string;
        export type ManifestAddendum = string;
        export type Marker = string;
        export type MaxJobs = number;
        export type ProgressCode = string;
        export type ProgressMessage = string;
        export type Signature = string;
        export type SignatureFileContents = string;
        export type Success = boolean;
        export type TrackingNumber = string;
        export type URL = string;
        export type ValidateOnly = boolean;
        export type WarningMessage = string;
        export type city = string;
        export type company = string;
        export type country = string;
        export type name = string;
        export type phoneNumber = string;
        export type postalCode = string;
        export type stateOrProvince = string;
        export type street1 = string;
        export type street2 = string;
        export type street3 = string;

        export interface Artifact {
            Description?: Description;
            URL?: URL;
        }
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
        export interface ExpiredJobIdException {
            message?: ErrorMessage;
        }
        export interface GetShippingLabelInput {
            jobIds: JobIdList;
            name?: name;
            company?: company;
            phoneNumber?: phoneNumber;
            country?: country;
            stateOrProvince?: stateOrProvince;
            city?: city;
            postalCode?: postalCode;
            street1?: street1;
            street2?: street2;
            street3?: street3;
            APIVersion?: APIVersion;
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
        export interface Job {
            JobId?: JobId;
            CreationDate?: CreationDate;
            IsCanceled?: IsCanceled;
            JobType?: JobType;
        }
        export interface ListJobsInput {
            MaxJobs?: MaxJobs;
            Marker?: Marker;
            APIVersion?: APIVersion;
        }
        export interface ListJobsOutput {
            Jobs?: JobsList;
            IsTruncated?: IsTruncated;
        }
        export interface MalformedManifestException {
            message?: ErrorMessage;
        }
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

    }
}
