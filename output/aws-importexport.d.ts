// DO NOT EDIT!
//

///<reference path="./aws-sdk-common.d.ts" />
declare module "aws-sdk" {
    export class ImportExport {
      constructor(options?: any);
      cancelJob(params: ImportExportCancelJobInput, callback: (err: ImportExportInvalidJobIdException|ImportExportExpiredJobIdException|ImportExportCanceledJobIdException|ImportExportUnableToCancelJobIdException|ImportExportInvalidAccessKeyIdException|ImportExportInvalidVersionException|any, data: ImportExportCancelJobOutput|any) => void): void;
      createJob(params: ImportExportCreateJobInput, callback: (err: ImportExportMissingParameterException|ImportExportInvalidParameterException|ImportExportInvalidAccessKeyIdException|ImportExportInvalidAddressException|ImportExportInvalidManifestFieldException|ImportExportMissingManifestFieldException|ImportExportNoSuchBucketException|ImportExportMissingCustomsException|ImportExportInvalidCustomsException|ImportExportInvalidFileSystemException|ImportExportMultipleRegionsException|ImportExportBucketPermissionException|ImportExportMalformedManifestException|ImportExportCreateJobQuotaExceededException|ImportExportInvalidJobIdException|ImportExportInvalidVersionException|any, data: ImportExportCreateJobOutput|any) => void): void;
      getShippingLabel(params: ImportExportGetShippingLabelInput, callback: (err: ImportExportInvalidJobIdException|ImportExportExpiredJobIdException|ImportExportCanceledJobIdException|ImportExportInvalidAccessKeyIdException|ImportExportInvalidAddressException|ImportExportInvalidVersionException|ImportExportInvalidParameterException|any, data: ImportExportGetShippingLabelOutput|any) => void): void;
      getStatus(params: ImportExportGetStatusInput, callback: (err: ImportExportInvalidJobIdException|ImportExportExpiredJobIdException|ImportExportCanceledJobIdException|ImportExportInvalidAccessKeyIdException|ImportExportInvalidVersionException|any, data: ImportExportGetStatusOutput|any) => void): void;
      listJobs(params: ImportExportListJobsInput, callback: (err: ImportExportInvalidParameterException|ImportExportInvalidAccessKeyIdException|ImportExportInvalidVersionException|any, data: ImportExportListJobsOutput|any) => void): void;
      updateJob(params: ImportExportUpdateJobInput, callback: (err: ImportExportMissingParameterException|ImportExportInvalidParameterException|ImportExportInvalidAccessKeyIdException|ImportExportInvalidAddressException|ImportExportInvalidManifestFieldException|ImportExportInvalidJobIdException|ImportExportMissingManifestFieldException|ImportExportNoSuchBucketException|ImportExportExpiredJobIdException|ImportExportCanceledJobIdException|ImportExportMissingCustomsException|ImportExportInvalidCustomsException|ImportExportInvalidFileSystemException|ImportExportMultipleRegionsException|ImportExportBucketPermissionException|ImportExportMalformedManifestException|ImportExportUnableToUpdateJobIdException|ImportExportInvalidVersionException|any, data: ImportExportUpdateJobOutput|any) => void): void;
    }

    export type ImportExportAPIVersion = string;
    export interface ImportExportArtifact {
        Description?: ImportExportDescription;
        URL?: ImportExportURL;
    }

    export type ImportExportArtifactList = Array<ImportExportArtifact>;
    export interface ImportExportBucketPermissionException {
        message?: ImportExportErrorMessage;
    }

    export interface ImportExportCancelJobInput {
        JobId: ImportExportJobId;
        APIVersion?: ImportExportAPIVersion;
    }

    export interface ImportExportCancelJobOutput {
        Success?: ImportExportSuccess;
    }

    export interface ImportExportCanceledJobIdException {
        message?: ImportExportErrorMessage;
    }

    export type ImportExportCarrier = string;
    export interface ImportExportCreateJobInput {
        JobType: ImportExportJobType;
        Manifest: ImportExportManifest;
        ManifestAddendum?: ImportExportManifestAddendum;
        ValidateOnly: ImportExportValidateOnly;
        APIVersion?: ImportExportAPIVersion;
    }

    export interface ImportExportCreateJobOutput {
        JobId?: ImportExportJobId;
        JobType?: ImportExportJobType;
        Signature?: ImportExportSignature;
        SignatureFileContents?: ImportExportSignatureFileContents;
        WarningMessage?: ImportExportWarningMessage;
        ArtifactList?: ImportExportArtifactList;
    }

    export interface ImportExportCreateJobQuotaExceededException {
        message?: ImportExportErrorMessage;
    }

    export type ImportExportCreationDate = number;
    export type ImportExportCurrentManifest = string;
    export type ImportExportDescription = string;
    export type ImportExportErrorCount = number;
    export type ImportExportErrorMessage = string;
    export interface ImportExportExpiredJobIdException {
        message?: ImportExportErrorMessage;
    }

    export type ImportExportGenericString = string;
    export interface ImportExportGetShippingLabelInput {
        jobIds: ImportExportJobIdList;
        name?: ImportExportname;
        company?: ImportExportcompany;
        phoneNumber?: ImportExportphoneNumber;
        country?: ImportExportcountry;
        stateOrProvince?: ImportExportstateOrProvince;
        city?: ImportExportcity;
        postalCode?: ImportExportpostalCode;
        street1?: ImportExportstreet1;
        street2?: ImportExportstreet2;
        street3?: ImportExportstreet3;
        APIVersion?: ImportExportAPIVersion;
    }

    export interface ImportExportGetShippingLabelOutput {
        ShippingLabelURL?: ImportExportGenericString;
        Warning?: ImportExportGenericString;
    }

    export interface ImportExportGetStatusInput {
        JobId: ImportExportJobId;
        APIVersion?: ImportExportAPIVersion;
    }

    export interface ImportExportGetStatusOutput {
        JobId?: ImportExportJobId;
        JobType?: ImportExportJobType;
        LocationCode?: ImportExportLocationCode;
        LocationMessage?: ImportExportLocationMessage;
        ProgressCode?: ImportExportProgressCode;
        ProgressMessage?: ImportExportProgressMessage;
        Carrier?: ImportExportCarrier;
        TrackingNumber?: ImportExportTrackingNumber;
        LogBucket?: ImportExportLogBucket;
        LogKey?: ImportExportLogKey;
        ErrorCount?: ImportExportErrorCount;
        Signature?: ImportExportSignature;
        SignatureFileContents?: ImportExportSignature;
        CurrentManifest?: ImportExportCurrentManifest;
        CreationDate?: ImportExportCreationDate;
        ArtifactList?: ImportExportArtifactList;
    }

    export interface ImportExportInvalidAccessKeyIdException {
        message?: ImportExportErrorMessage;
    }

    export interface ImportExportInvalidAddressException {
        message?: ImportExportErrorMessage;
    }

    export interface ImportExportInvalidCustomsException {
        message?: ImportExportErrorMessage;
    }

    export interface ImportExportInvalidFileSystemException {
        message?: ImportExportErrorMessage;
    }

    export interface ImportExportInvalidJobIdException {
        message?: ImportExportErrorMessage;
    }

    export interface ImportExportInvalidManifestFieldException {
        message?: ImportExportErrorMessage;
    }

    export interface ImportExportInvalidParameterException {
        message?: ImportExportErrorMessage;
    }

    export interface ImportExportInvalidVersionException {
        message?: ImportExportErrorMessage;
    }

    export type ImportExportIsCanceled = boolean;
    export type ImportExportIsTruncated = boolean;
    export interface ImportExportJob {
        JobId?: ImportExportJobId;
        CreationDate?: ImportExportCreationDate;
        IsCanceled?: ImportExportIsCanceled;
        JobType?: ImportExportJobType;
    }

    export type ImportExportJobId = string;
    export type ImportExportJobIdList = Array<ImportExportGenericString>;
    export type ImportExportJobType = string;
    export type ImportExportJobsList = Array<ImportExportJob>;
    export interface ImportExportListJobsInput {
        MaxJobs?: ImportExportMaxJobs;
        Marker?: ImportExportMarker;
        APIVersion?: ImportExportAPIVersion;
    }

    export interface ImportExportListJobsOutput {
        Jobs?: ImportExportJobsList;
        IsTruncated?: ImportExportIsTruncated;
    }

    export type ImportExportLocationCode = string;
    export type ImportExportLocationMessage = string;
    export type ImportExportLogBucket = string;
    export type ImportExportLogKey = string;
    export interface ImportExportMalformedManifestException {
        message?: ImportExportErrorMessage;
    }

    export type ImportExportManifest = string;
    export type ImportExportManifestAddendum = string;
    export type ImportExportMarker = string;
    export type ImportExportMaxJobs = number;
    export interface ImportExportMissingCustomsException {
        message?: ImportExportErrorMessage;
    }

    export interface ImportExportMissingManifestFieldException {
        message?: ImportExportErrorMessage;
    }

    export interface ImportExportMissingParameterException {
        message?: ImportExportErrorMessage;
    }

    export interface ImportExportMultipleRegionsException {
        message?: ImportExportErrorMessage;
    }

    export interface ImportExportNoSuchBucketException {
        message?: ImportExportErrorMessage;
    }

    export type ImportExportProgressCode = string;
    export type ImportExportProgressMessage = string;
    export type ImportExportSignature = string;
    export type ImportExportSignatureFileContents = string;
    export type ImportExportSuccess = boolean;
    export type ImportExportTrackingNumber = string;
    export type ImportExportURL = string;
    export interface ImportExportUnableToCancelJobIdException {
        message?: ImportExportErrorMessage;
    }

    export interface ImportExportUnableToUpdateJobIdException {
        message?: ImportExportErrorMessage;
    }

    export interface ImportExportUpdateJobInput {
        JobId: ImportExportJobId;
        Manifest: ImportExportManifest;
        JobType: ImportExportJobType;
        ValidateOnly: ImportExportValidateOnly;
        APIVersion?: ImportExportAPIVersion;
    }

    export interface ImportExportUpdateJobOutput {
        Success?: ImportExportSuccess;
        WarningMessage?: ImportExportWarningMessage;
        ArtifactList?: ImportExportArtifactList;
    }

    export type ImportExportValidateOnly = boolean;
    export type ImportExportWarningMessage = string;
    export type ImportExportcity = string;
    export type ImportExportcompany = string;
    export type ImportExportcountry = string;
    export type ImportExportname = string;
    export type ImportExportphoneNumber = string;
    export type ImportExportpostalCode = string;
    export type ImportExportstateOrProvince = string;
    export type ImportExportstreet1 = string;
    export type ImportExportstreet2 = string;
    export type ImportExportstreet3 = string;
}
