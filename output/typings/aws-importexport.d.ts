// Type definitions for aws-sdk - AWS Import/Export
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

// COMMENTED <reference path="./aws-sdk.d.ts" />

declare module "aws-sdk" {

  /**
    * apiVersion: 2010-06-01
    * endpointPrefix: importexport
    * serviceAbbreviation: 
    * signatureVersion: v2
    * protocol: query
    *
    * AWS Import/Export Service AWS Import/Export accelerates transferring large
 amounts of data between the AWS cloud and portable storage devices that you mail
 to us. AWS Import/Export transfers data directly onto and off of your storage
 devices using Amazon&#x27;s high-speed internal network and bypassing the Internet.
 For large data sets, AWS Import/Export is often faster than Internet transfer
 and more cost effective than upgrading your connectivity.
    *
    */
  export class ImportExport extends Service {
    constructor(options?: any);
    endpoint: Endpoint;
    /**
     * This operation cancels a specified job. Only the job owner can cancel it. The
operation fails if the job has already started or is complete.
     *
     * @error InvalidJobIdException The JOBID was missing, not found, or not associated with the AWS account.  
     * @error ExpiredJobIdException Indicates that the specified job has expired out of the system.  
     * @error CanceledJobIdException The specified job ID has been canceled and is no longer valid.  
     * @error UnableToCancelJobIdException AWS Import/Export cannot cancel the job  
     * @error InvalidAccessKeyIdException The AWS Access Key ID specified in the request did not match the manifest&#x27;s
accessKeyId value. The manifest and the request authentication must use the same
AWS Access Key ID.  
     * @error InvalidVersionException The client tool version is invalid.  
     */
    cancelJob(params: ImportExport.CancelJobInput, callback?: (err: ImportExport.InvalidJobIdException | ImportExport.ExpiredJobIdException | ImportExport.CanceledJobIdException | ImportExport.UnableToCancelJobIdException | ImportExport.InvalidAccessKeyIdException | ImportExport.InvalidVersionException | any, data: ImportExport.CancelJobOutput | any) => void): Request<ImportExport.CancelJobOutput | any, ImportExport.InvalidJobIdException | ImportExport.ExpiredJobIdException | ImportExport.CanceledJobIdException | ImportExport.UnableToCancelJobIdException | ImportExport.InvalidAccessKeyIdException | ImportExport.InvalidVersionException | any>;
    /**
     * This operation initiates the process of scheduling an upload or download of your
data. You include in the request a manifest that describes the data transfer
specifics. The response to the request includes a job ID, which you can use in
other operations, a signature that you use to identify your storage device, and
the address where you should ship your storage device.
     *
     * @error MissingParameterException One or more required parameters was missing from the request.  
     * @error InvalidParameterException One or more parameters had an invalid value.  
     * @error InvalidAccessKeyIdException The AWS Access Key ID specified in the request did not match the manifest&#x27;s
accessKeyId value. The manifest and the request authentication must use the same
AWS Access Key ID.  
     * @error InvalidAddressException The address specified in the manifest is invalid.  
     * @error InvalidManifestFieldException One or more manifest fields was invalid. Please correct and resubmit.  
     * @error MissingManifestFieldException One or more required fields were missing from the manifest file. Please correct
and resubmit.  
     * @error NoSuchBucketException The specified bucket does not exist. Create the specified bucket or change the
manifest&#x27;s bucket, exportBucket, or logBucket field to a bucket that the
account, as specified by the manifest&#x27;s Access Key ID, has write permissions to.  
     * @error MissingCustomsException One or more required customs parameters was missing from the manifest.  
     * @error InvalidCustomsException One or more customs parameters was invalid. Please correct and resubmit.  
     * @error InvalidFileSystemException File system specified in export manifest is invalid.  
     * @error MultipleRegionsException Your manifest file contained buckets from multiple regions. A job is restricted
to buckets from one region. Please correct and resubmit.  
     * @error BucketPermissionException The account specified does not have the appropriate bucket permissions.  
     * @error MalformedManifestException Your manifest is not well-formed.  
     * @error CreateJobQuotaExceededException Each account can create only a certain number of jobs per day. If you need to
create more than this, please contact awsimportexport@amazon.com to explain your
particular use case.  
     * @error InvalidJobIdException The JOBID was missing, not found, or not associated with the AWS account.  
     * @error InvalidVersionException The client tool version is invalid.  
     */
    createJob(params: ImportExport.CreateJobInput, callback?: (err: ImportExport.MissingParameterException | ImportExport.InvalidParameterException | ImportExport.InvalidAccessKeyIdException | ImportExport.InvalidAddressException | ImportExport.InvalidManifestFieldException | ImportExport.MissingManifestFieldException | ImportExport.NoSuchBucketException | ImportExport.MissingCustomsException | ImportExport.InvalidCustomsException | ImportExport.InvalidFileSystemException | ImportExport.MultipleRegionsException | ImportExport.BucketPermissionException | ImportExport.MalformedManifestException | ImportExport.CreateJobQuotaExceededException | ImportExport.InvalidJobIdException | ImportExport.InvalidVersionException | any, data: ImportExport.CreateJobOutput | any) => void): Request<ImportExport.CreateJobOutput | any, ImportExport.MissingParameterException | ImportExport.InvalidParameterException | ImportExport.InvalidAccessKeyIdException | ImportExport.InvalidAddressException | ImportExport.InvalidManifestFieldException | ImportExport.MissingManifestFieldException | ImportExport.NoSuchBucketException | ImportExport.MissingCustomsException | ImportExport.InvalidCustomsException | ImportExport.InvalidFileSystemException | ImportExport.MultipleRegionsException | ImportExport.BucketPermissionException | ImportExport.MalformedManifestException | ImportExport.CreateJobQuotaExceededException | ImportExport.InvalidJobIdException | ImportExport.InvalidVersionException | any>;
    /**
     * This operation generates a pre-paid UPS shipping label that you will use to ship
your device to AWS for processing.
     *
     * @error InvalidJobIdException The JOBID was missing, not found, or not associated with the AWS account.  
     * @error ExpiredJobIdException Indicates that the specified job has expired out of the system.  
     * @error CanceledJobIdException The specified job ID has been canceled and is no longer valid.  
     * @error InvalidAccessKeyIdException The AWS Access Key ID specified in the request did not match the manifest&#x27;s
accessKeyId value. The manifest and the request authentication must use the same
AWS Access Key ID.  
     * @error InvalidAddressException The address specified in the manifest is invalid.  
     * @error InvalidVersionException The client tool version is invalid.  
     * @error InvalidParameterException One or more parameters had an invalid value.  
     */
    getShippingLabel(params: ImportExport.GetShippingLabelInput, callback?: (err: ImportExport.InvalidJobIdException | ImportExport.ExpiredJobIdException | ImportExport.CanceledJobIdException | ImportExport.InvalidAccessKeyIdException | ImportExport.InvalidAddressException | ImportExport.InvalidVersionException | ImportExport.InvalidParameterException | any, data: ImportExport.GetShippingLabelOutput | any) => void): Request<ImportExport.GetShippingLabelOutput | any, ImportExport.InvalidJobIdException | ImportExport.ExpiredJobIdException | ImportExport.CanceledJobIdException | ImportExport.InvalidAccessKeyIdException | ImportExport.InvalidAddressException | ImportExport.InvalidVersionException | ImportExport.InvalidParameterException | any>;
    /**
     * This operation returns information about a job, including where the job is in
the processing pipeline, the status of the results, and the signature value
associated with the job. You can only return information about jobs you own.
     *
     * @error InvalidJobIdException The JOBID was missing, not found, or not associated with the AWS account.  
     * @error ExpiredJobIdException Indicates that the specified job has expired out of the system.  
     * @error CanceledJobIdException The specified job ID has been canceled and is no longer valid.  
     * @error InvalidAccessKeyIdException The AWS Access Key ID specified in the request did not match the manifest&#x27;s
accessKeyId value. The manifest and the request authentication must use the same
AWS Access Key ID.  
     * @error InvalidVersionException The client tool version is invalid.  
     */
    getStatus(params: ImportExport.GetStatusInput, callback?: (err: ImportExport.InvalidJobIdException | ImportExport.ExpiredJobIdException | ImportExport.CanceledJobIdException | ImportExport.InvalidAccessKeyIdException | ImportExport.InvalidVersionException | any, data: ImportExport.GetStatusOutput | any) => void): Request<ImportExport.GetStatusOutput | any, ImportExport.InvalidJobIdException | ImportExport.ExpiredJobIdException | ImportExport.CanceledJobIdException | ImportExport.InvalidAccessKeyIdException | ImportExport.InvalidVersionException | any>;
    /**
     * This operation returns the jobs associated with the requester. AWS Import/Export
lists the jobs in reverse chronological order based on the date of creation. For
example if Job Test1 was created 2009Dec30 and Test2 was created 2010Feb05, the
ListJobs operation would return Test2 followed by Test1.
     *
     * @error InvalidParameterException One or more parameters had an invalid value.  
     * @error InvalidAccessKeyIdException The AWS Access Key ID specified in the request did not match the manifest&#x27;s
accessKeyId value. The manifest and the request authentication must use the same
AWS Access Key ID.  
     * @error InvalidVersionException The client tool version is invalid.  
     */
    listJobs(params: ImportExport.ListJobsInput, callback?: (err: ImportExport.InvalidParameterException | ImportExport.InvalidAccessKeyIdException | ImportExport.InvalidVersionException | any, data: ImportExport.ListJobsOutput | any) => void): Request<ImportExport.ListJobsOutput | any, ImportExport.InvalidParameterException | ImportExport.InvalidAccessKeyIdException | ImportExport.InvalidVersionException | any>;
    /**
     * You use this operation to change the parameters specified in the original
manifest file by supplying a new manifest file. The manifest file attached to
this request replaces the original manifest file. You can only use the operation
after a CreateJob request but before the data transfer starts and you can only
use it on jobs you own.
     *
     * @error MissingParameterException One or more required parameters was missing from the request.  
     * @error InvalidParameterException One or more parameters had an invalid value.  
     * @error InvalidAccessKeyIdException The AWS Access Key ID specified in the request did not match the manifest&#x27;s
accessKeyId value. The manifest and the request authentication must use the same
AWS Access Key ID.  
     * @error InvalidAddressException The address specified in the manifest is invalid.  
     * @error InvalidManifestFieldException One or more manifest fields was invalid. Please correct and resubmit.  
     * @error InvalidJobIdException The JOBID was missing, not found, or not associated with the AWS account.  
     * @error MissingManifestFieldException One or more required fields were missing from the manifest file. Please correct
and resubmit.  
     * @error NoSuchBucketException The specified bucket does not exist. Create the specified bucket or change the
manifest&#x27;s bucket, exportBucket, or logBucket field to a bucket that the
account, as specified by the manifest&#x27;s Access Key ID, has write permissions to.  
     * @error ExpiredJobIdException Indicates that the specified job has expired out of the system.  
     * @error CanceledJobIdException The specified job ID has been canceled and is no longer valid.  
     * @error MissingCustomsException One or more required customs parameters was missing from the manifest.  
     * @error InvalidCustomsException One or more customs parameters was invalid. Please correct and resubmit.  
     * @error InvalidFileSystemException File system specified in export manifest is invalid.  
     * @error MultipleRegionsException Your manifest file contained buckets from multiple regions. A job is restricted
to buckets from one region. Please correct and resubmit.  
     * @error BucketPermissionException The account specified does not have the appropriate bucket permissions.  
     * @error MalformedManifestException Your manifest is not well-formed.  
     * @error UnableToUpdateJobIdException AWS Import/Export cannot update the job  
     * @error InvalidVersionException The client tool version is invalid.  
     */
    updateJob(params: ImportExport.UpdateJobInput, callback?: (err: ImportExport.MissingParameterException | ImportExport.InvalidParameterException | ImportExport.InvalidAccessKeyIdException | ImportExport.InvalidAddressException | ImportExport.InvalidManifestFieldException | ImportExport.InvalidJobIdException | ImportExport.MissingManifestFieldException | ImportExport.NoSuchBucketException | ImportExport.ExpiredJobIdException | ImportExport.CanceledJobIdException | ImportExport.MissingCustomsException | ImportExport.InvalidCustomsException | ImportExport.InvalidFileSystemException | ImportExport.MultipleRegionsException | ImportExport.BucketPermissionException | ImportExport.MalformedManifestException | ImportExport.UnableToUpdateJobIdException | ImportExport.InvalidVersionException | any, data: ImportExport.UpdateJobOutput | any) => void): Request<ImportExport.UpdateJobOutput | any, ImportExport.MissingParameterException | ImportExport.InvalidParameterException | ImportExport.InvalidAccessKeyIdException | ImportExport.InvalidAddressException | ImportExport.InvalidManifestFieldException | ImportExport.InvalidJobIdException | ImportExport.MissingManifestFieldException | ImportExport.NoSuchBucketException | ImportExport.ExpiredJobIdException | ImportExport.CanceledJobIdException | ImportExport.MissingCustomsException | ImportExport.InvalidCustomsException | ImportExport.InvalidFileSystemException | ImportExport.MultipleRegionsException | ImportExport.BucketPermissionException | ImportExport.MalformedManifestException | ImportExport.UnableToUpdateJobIdException | ImportExport.InvalidVersionException | any>;

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
