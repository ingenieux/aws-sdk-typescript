// DO NOT EDIT!
//

///<reference path="./aws-sdk-common.d.ts" />
declare module "aws-sdk" {
    export class Glacier {
      constructor(options?: any);
      abortMultipartUpload(params: GlacierAbortMultipartUploadInput, callback: (err: GlacierResourceNotFoundException|GlacierInvalidParameterValueException|GlacierMissingParameterValueException|GlacierServiceUnavailableException|any, data: any) => void): void;
      abortVaultLock(params: GlacierAbortVaultLockInput, callback: (err: GlacierResourceNotFoundException|GlacierInvalidParameterValueException|GlacierMissingParameterValueException|GlacierServiceUnavailableException|any, data: any) => void): void;
      addTagsToVault(params: GlacierAddTagsToVaultInput, callback: (err: GlacierInvalidParameterValueException|GlacierMissingParameterValueException|GlacierResourceNotFoundException|GlacierLimitExceededException|GlacierServiceUnavailableException|any, data: any) => void): void;
      completeMultipartUpload(params: GlacierCompleteMultipartUploadInput, callback: (err: GlacierResourceNotFoundException|GlacierInvalidParameterValueException|GlacierMissingParameterValueException|GlacierServiceUnavailableException|any, data: GlacierArchiveCreationOutput|any) => void): void;
      completeVaultLock(params: GlacierCompleteVaultLockInput, callback: (err: GlacierResourceNotFoundException|GlacierInvalidParameterValueException|GlacierMissingParameterValueException|GlacierServiceUnavailableException|any, data: any) => void): void;
      createVault(params: GlacierCreateVaultInput, callback: (err: GlacierInvalidParameterValueException|GlacierMissingParameterValueException|GlacierServiceUnavailableException|GlacierLimitExceededException|any, data: GlacierCreateVaultOutput|any) => void): void;
      deleteArchive(params: GlacierDeleteArchiveInput, callback: (err: GlacierResourceNotFoundException|GlacierInvalidParameterValueException|GlacierMissingParameterValueException|GlacierServiceUnavailableException|any, data: any) => void): void;
      deleteVault(params: GlacierDeleteVaultInput, callback: (err: GlacierResourceNotFoundException|GlacierInvalidParameterValueException|GlacierMissingParameterValueException|GlacierServiceUnavailableException|any, data: any) => void): void;
      deleteVaultAccessPolicy(params: GlacierDeleteVaultAccessPolicyInput, callback: (err: GlacierResourceNotFoundException|GlacierInvalidParameterValueException|GlacierMissingParameterValueException|GlacierServiceUnavailableException|any, data: any) => void): void;
      deleteVaultNotifications(params: GlacierDeleteVaultNotificationsInput, callback: (err: GlacierResourceNotFoundException|GlacierInvalidParameterValueException|GlacierMissingParameterValueException|GlacierServiceUnavailableException|any, data: any) => void): void;
      describeJob(params: GlacierDescribeJobInput, callback: (err: GlacierResourceNotFoundException|GlacierInvalidParameterValueException|GlacierMissingParameterValueException|GlacierServiceUnavailableException|any, data: GlacierGlacierJobDescription|any) => void): void;
      describeVault(params: GlacierDescribeVaultInput, callback: (err: GlacierResourceNotFoundException|GlacierInvalidParameterValueException|GlacierMissingParameterValueException|GlacierServiceUnavailableException|any, data: GlacierDescribeVaultOutput|any) => void): void;
      getDataRetrievalPolicy(params: GlacierGetDataRetrievalPolicyInput, callback: (err: GlacierInvalidParameterValueException|GlacierMissingParameterValueException|GlacierServiceUnavailableException|any, data: GlacierGetDataRetrievalPolicyOutput|any) => void): void;
      getJobOutput(params: GlacierGetJobOutputInput, callback: (err: GlacierResourceNotFoundException|GlacierInvalidParameterValueException|GlacierMissingParameterValueException|GlacierServiceUnavailableException|any, data: GlacierGetJobOutputOutput|any) => void): void;
      getVaultAccessPolicy(params: GlacierGetVaultAccessPolicyInput, callback: (err: GlacierResourceNotFoundException|GlacierInvalidParameterValueException|GlacierMissingParameterValueException|GlacierServiceUnavailableException|any, data: GlacierGetVaultAccessPolicyOutput|any) => void): void;
      getVaultLock(params: GlacierGetVaultLockInput, callback: (err: GlacierResourceNotFoundException|GlacierInvalidParameterValueException|GlacierMissingParameterValueException|GlacierServiceUnavailableException|any, data: GlacierGetVaultLockOutput|any) => void): void;
      getVaultNotifications(params: GlacierGetVaultNotificationsInput, callback: (err: GlacierResourceNotFoundException|GlacierInvalidParameterValueException|GlacierMissingParameterValueException|GlacierServiceUnavailableException|any, data: GlacierGetVaultNotificationsOutput|any) => void): void;
      initiateJob(params: GlacierInitiateJobInput, callback: (err: GlacierResourceNotFoundException|GlacierPolicyEnforcedException|GlacierInvalidParameterValueException|GlacierMissingParameterValueException|GlacierServiceUnavailableException|any, data: GlacierInitiateJobOutput|any) => void): void;
      initiateMultipartUpload(params: GlacierInitiateMultipartUploadInput, callback: (err: GlacierResourceNotFoundException|GlacierInvalidParameterValueException|GlacierMissingParameterValueException|GlacierServiceUnavailableException|any, data: GlacierInitiateMultipartUploadOutput|any) => void): void;
      initiateVaultLock(params: GlacierInitiateVaultLockInput, callback: (err: GlacierResourceNotFoundException|GlacierInvalidParameterValueException|GlacierMissingParameterValueException|GlacierServiceUnavailableException|any, data: GlacierInitiateVaultLockOutput|any) => void): void;
      listJobs(params: GlacierListJobsInput, callback: (err: GlacierResourceNotFoundException|GlacierInvalidParameterValueException|GlacierMissingParameterValueException|GlacierServiceUnavailableException|any, data: GlacierListJobsOutput|any) => void): void;
      listMultipartUploads(params: GlacierListMultipartUploadsInput, callback: (err: GlacierResourceNotFoundException|GlacierInvalidParameterValueException|GlacierMissingParameterValueException|GlacierServiceUnavailableException|any, data: GlacierListMultipartUploadsOutput|any) => void): void;
      listParts(params: GlacierListPartsInput, callback: (err: GlacierResourceNotFoundException|GlacierInvalidParameterValueException|GlacierMissingParameterValueException|GlacierServiceUnavailableException|any, data: GlacierListPartsOutput|any) => void): void;
      listTagsForVault(params: GlacierListTagsForVaultInput, callback: (err: GlacierInvalidParameterValueException|GlacierMissingParameterValueException|GlacierResourceNotFoundException|GlacierServiceUnavailableException|any, data: GlacierListTagsForVaultOutput|any) => void): void;
      listVaults(params: GlacierListVaultsInput, callback: (err: GlacierResourceNotFoundException|GlacierInvalidParameterValueException|GlacierMissingParameterValueException|GlacierServiceUnavailableException|any, data: GlacierListVaultsOutput|any) => void): void;
      removeTagsFromVault(params: GlacierRemoveTagsFromVaultInput, callback: (err: GlacierInvalidParameterValueException|GlacierMissingParameterValueException|GlacierResourceNotFoundException|GlacierServiceUnavailableException|any, data: any) => void): void;
      setDataRetrievalPolicy(params: GlacierSetDataRetrievalPolicyInput, callback: (err: GlacierInvalidParameterValueException|GlacierMissingParameterValueException|GlacierServiceUnavailableException|any, data: any) => void): void;
      setVaultAccessPolicy(params: GlacierSetVaultAccessPolicyInput, callback: (err: GlacierResourceNotFoundException|GlacierInvalidParameterValueException|GlacierMissingParameterValueException|GlacierServiceUnavailableException|any, data: any) => void): void;
      setVaultNotifications(params: GlacierSetVaultNotificationsInput, callback: (err: GlacierResourceNotFoundException|GlacierInvalidParameterValueException|GlacierMissingParameterValueException|GlacierServiceUnavailableException|any, data: any) => void): void;
      uploadArchive(params: GlacierUploadArchiveInput, callback: (err: GlacierResourceNotFoundException|GlacierInvalidParameterValueException|GlacierMissingParameterValueException|GlacierRequestTimeoutException|GlacierServiceUnavailableException|any, data: GlacierArchiveCreationOutput|any) => void): void;
      uploadMultipartPart(params: GlacierUploadMultipartPartInput, callback: (err: GlacierResourceNotFoundException|GlacierInvalidParameterValueException|GlacierMissingParameterValueException|GlacierRequestTimeoutException|GlacierServiceUnavailableException|any, data: GlacierUploadMultipartPartOutput|any) => void): void;
    }

    export interface GlacierAbortMultipartUploadInput {
        accountId: Glacierstring;
        vaultName: Glacierstring;
        uploadId: Glacierstring;
    }

    export interface GlacierAbortVaultLockInput {
        accountId: Glacierstring;
        vaultName: Glacierstring;
    }

    export type GlacierActionCode = string;
    export interface GlacierAddTagsToVaultInput {
        accountId: Glacierstring;
        vaultName: Glacierstring;
        Tags?: GlacierTagMap;
    }

    export interface GlacierArchiveCreationOutput {
        location?: Glacierstring;
        checksum?: Glacierstring;
        archiveId?: Glacierstring;
    }

    export interface GlacierCompleteMultipartUploadInput {
        accountId: Glacierstring;
        vaultName: Glacierstring;
        uploadId: Glacierstring;
        archiveSize?: Glacierstring;
        checksum?: Glacierstring;
    }

    export interface GlacierCompleteVaultLockInput {
        accountId: Glacierstring;
        vaultName: Glacierstring;
        lockId: Glacierstring;
    }

    export interface GlacierCreateVaultInput {
        accountId: Glacierstring;
        vaultName: Glacierstring;
    }

    export interface GlacierCreateVaultOutput {
        location?: Glacierstring;
    }

    export interface GlacierDataRetrievalPolicy {
        Rules?: GlacierDataRetrievalRulesList;
    }

    export interface GlacierDataRetrievalRule {
        Strategy?: Glacierstring;
        BytesPerHour?: GlacierNullableLong;
    }

    export type GlacierDataRetrievalRulesList = Array<GlacierDataRetrievalRule>;
    export type GlacierDateTime = string;
    export interface GlacierDeleteArchiveInput {
        accountId: Glacierstring;
        vaultName: Glacierstring;
        archiveId: Glacierstring;
    }

    export interface GlacierDeleteVaultAccessPolicyInput {
        accountId: Glacierstring;
        vaultName: Glacierstring;
    }

    export interface GlacierDeleteVaultInput {
        accountId: Glacierstring;
        vaultName: Glacierstring;
    }

    export interface GlacierDeleteVaultNotificationsInput {
        accountId: Glacierstring;
        vaultName: Glacierstring;
    }

    export interface GlacierDescribeJobInput {
        accountId: Glacierstring;
        vaultName: Glacierstring;
        jobId: Glacierstring;
    }

    export interface GlacierDescribeVaultInput {
        accountId: Glacierstring;
        vaultName: Glacierstring;
    }

    export interface GlacierDescribeVaultOutput {
        VaultARN?: Glacierstring;
        VaultName?: Glacierstring;
        CreationDate?: Glacierstring;
        LastInventoryDate?: Glacierstring;
        NumberOfArchives?: Glacierlong;
        SizeInBytes?: Glacierlong;
    }

    export interface GlacierGetDataRetrievalPolicyInput {
        accountId: Glacierstring;
    }

    export interface GlacierGetDataRetrievalPolicyOutput {
        Policy?: GlacierDataRetrievalPolicy;
    }

    export interface GlacierGetJobOutputInput {
        accountId: Glacierstring;
        vaultName: Glacierstring;
        jobId: Glacierstring;
        range?: Glacierstring;
    }

    export interface GlacierGetJobOutputOutput {
        body?: GlacierStream;
        checksum?: Glacierstring;
        status?: Glacierhttpstatus;
        contentRange?: Glacierstring;
        acceptRanges?: Glacierstring;
        contentType?: Glacierstring;
        archiveDescription?: Glacierstring;
    }

    export interface GlacierGetVaultAccessPolicyInput {
        accountId: Glacierstring;
        vaultName: Glacierstring;
    }

    export interface GlacierGetVaultAccessPolicyOutput {
        policy?: GlacierVaultAccessPolicy;
    }

    export interface GlacierGetVaultLockInput {
        accountId: Glacierstring;
        vaultName: Glacierstring;
    }

    export interface GlacierGetVaultLockOutput {
        Policy?: Glacierstring;
        State?: Glacierstring;
        ExpirationDate?: Glacierstring;
        CreationDate?: Glacierstring;
    }

    export interface GlacierGetVaultNotificationsInput {
        accountId: Glacierstring;
        vaultName: Glacierstring;
    }

    export interface GlacierGetVaultNotificationsOutput {
        vaultNotificationConfig?: GlacierVaultNotificationConfig;
    }

    export interface GlacierGlacierJobDescription {
        JobId?: Glacierstring;
        JobDescription?: Glacierstring;
        Action?: GlacierActionCode;
        ArchiveId?: Glacierstring;
        VaultARN?: Glacierstring;
        CreationDate?: Glacierstring;
        Completed?: Glacierboolean;
        StatusCode?: GlacierStatusCode;
        StatusMessage?: Glacierstring;
        ArchiveSizeInBytes?: GlacierSize;
        InventorySizeInBytes?: GlacierSize;
        SNSTopic?: Glacierstring;
        CompletionDate?: Glacierstring;
        SHA256TreeHash?: Glacierstring;
        ArchiveSHA256TreeHash?: Glacierstring;
        RetrievalByteRange?: Glacierstring;
        InventoryRetrievalParameters?: GlacierInventoryRetrievalJobDescription;
    }

    export interface GlacierInitiateJobInput {
        accountId: Glacierstring;
        vaultName: Glacierstring;
        jobParameters?: GlacierJobParameters;
    }

    export interface GlacierInitiateJobOutput {
        location?: Glacierstring;
        jobId?: Glacierstring;
    }

    export interface GlacierInitiateMultipartUploadInput {
        accountId: Glacierstring;
        vaultName: Glacierstring;
        archiveDescription?: Glacierstring;
        partSize?: Glacierstring;
    }

    export interface GlacierInitiateMultipartUploadOutput {
        location?: Glacierstring;
        uploadId?: Glacierstring;
    }

    export interface GlacierInitiateVaultLockInput {
        accountId: Glacierstring;
        vaultName: Glacierstring;
        policy?: GlacierVaultLockPolicy;
    }

    export interface GlacierInitiateVaultLockOutput {
        lockId?: Glacierstring;
    }

    export interface GlacierInvalidParameterValueException {
        type?: Glacierstring;
        code?: Glacierstring;
        message?: Glacierstring;
    }

    export interface GlacierInventoryRetrievalJobDescription {
        Format?: Glacierstring;
        StartDate?: GlacierDateTime;
        EndDate?: GlacierDateTime;
        Limit?: Glacierstring;
        Marker?: Glacierstring;
    }

    export interface GlacierInventoryRetrievalJobInput {
        StartDate?: Glacierstring;
        EndDate?: Glacierstring;
        Limit?: Glacierstring;
        Marker?: Glacierstring;
    }

    export type GlacierJobList = Array<GlacierGlacierJobDescription>;
    export interface GlacierJobParameters {
        Format?: Glacierstring;
        Type?: Glacierstring;
        ArchiveId?: Glacierstring;
        Description?: Glacierstring;
        SNSTopic?: Glacierstring;
        RetrievalByteRange?: Glacierstring;
        InventoryRetrievalParameters?: GlacierInventoryRetrievalJobInput;
    }

    export interface GlacierLimitExceededException {
        type?: Glacierstring;
        code?: Glacierstring;
        message?: Glacierstring;
    }

    export interface GlacierListJobsInput {
        accountId: Glacierstring;
        vaultName: Glacierstring;
        limit?: Glacierstring;
        marker?: Glacierstring;
        statuscode?: Glacierstring;
        completed?: Glacierstring;
    }

    export interface GlacierListJobsOutput {
        JobList?: GlacierJobList;
        Marker?: Glacierstring;
    }

    export interface GlacierListMultipartUploadsInput {
        accountId: Glacierstring;
        vaultName: Glacierstring;
        marker?: Glacierstring;
        limit?: Glacierstring;
    }

    export interface GlacierListMultipartUploadsOutput {
        UploadsList?: GlacierUploadsList;
        Marker?: Glacierstring;
    }

    export interface GlacierListPartsInput {
        accountId: Glacierstring;
        vaultName: Glacierstring;
        uploadId: Glacierstring;
        marker?: Glacierstring;
        limit?: Glacierstring;
    }

    export interface GlacierListPartsOutput {
        MultipartUploadId?: Glacierstring;
        VaultARN?: Glacierstring;
        ArchiveDescription?: Glacierstring;
        PartSizeInBytes?: Glacierlong;
        CreationDate?: Glacierstring;
        Parts?: GlacierPartList;
        Marker?: Glacierstring;
    }

    export interface GlacierListTagsForVaultInput {
        accountId: Glacierstring;
        vaultName: Glacierstring;
    }

    export interface GlacierListTagsForVaultOutput {
        Tags?: GlacierTagMap;
    }

    export interface GlacierListVaultsInput {
        accountId: Glacierstring;
        marker?: Glacierstring;
        limit?: Glacierstring;
    }

    export interface GlacierListVaultsOutput {
        VaultList?: GlacierVaultList;
        Marker?: Glacierstring;
    }

    export interface GlacierMissingParameterValueException {
        type?: Glacierstring;
        code?: Glacierstring;
        message?: Glacierstring;
    }

    export type GlacierNotificationEventList = Array<Glacierstring>;
    export type GlacierNullableLong = number;
    export type GlacierPartList = Array<GlacierPartListElement>;
    export interface GlacierPartListElement {
        RangeInBytes?: Glacierstring;
        SHA256TreeHash?: Glacierstring;
    }

    export interface GlacierPolicyEnforcedException {
        type?: Glacierstring;
        code?: Glacierstring;
        message?: Glacierstring;
    }

    export interface GlacierRemoveTagsFromVaultInput {
        accountId: Glacierstring;
        vaultName: Glacierstring;
        TagKeys?: GlacierTagKeyList;
    }

    export interface GlacierRequestTimeoutException {
        type?: Glacierstring;
        code?: Glacierstring;
        message?: Glacierstring;
    }

    export interface GlacierResourceNotFoundException {
        type?: Glacierstring;
        code?: Glacierstring;
        message?: Glacierstring;
    }

    export interface GlacierServiceUnavailableException {
        type?: Glacierstring;
        code?: Glacierstring;
        message?: Glacierstring;
    }

    export interface GlacierSetDataRetrievalPolicyInput {
        accountId: Glacierstring;
        Policy?: GlacierDataRetrievalPolicy;
    }

    export interface GlacierSetVaultAccessPolicyInput {
        accountId: Glacierstring;
        vaultName: Glacierstring;
        policy?: GlacierVaultAccessPolicy;
    }

    export interface GlacierSetVaultNotificationsInput {
        accountId: Glacierstring;
        vaultName: Glacierstring;
        vaultNotificationConfig?: GlacierVaultNotificationConfig;
    }

    export type GlacierSize = number;
    export type GlacierStatusCode = string;
    export type GlacierStream = any; // not really - it was 'blob' instead - must fix this one
    export type GlacierTagKey = string;
    export type GlacierTagKeyList = Array<Glacierstring>;
    export type GlacierTagMap = any; // not really - it was 'map' instead - must fix this one
    export type GlacierTagValue = string;
    export interface GlacierUploadArchiveInput {
        vaultName: Glacierstring;
        accountId: Glacierstring;
        archiveDescription?: Glacierstring;
        checksum?: Glacierstring;
        body?: GlacierStream;
    }

    export interface GlacierUploadListElement {
        MultipartUploadId?: Glacierstring;
        VaultARN?: Glacierstring;
        ArchiveDescription?: Glacierstring;
        PartSizeInBytes?: Glacierlong;
        CreationDate?: Glacierstring;
    }

    export interface GlacierUploadMultipartPartInput {
        accountId: Glacierstring;
        vaultName: Glacierstring;
        uploadId: Glacierstring;
        checksum?: Glacierstring;
        range?: Glacierstring;
        body?: GlacierStream;
    }

    export interface GlacierUploadMultipartPartOutput {
        checksum?: Glacierstring;
    }

    export type GlacierUploadsList = Array<GlacierUploadListElement>;
    export interface GlacierVaultAccessPolicy {
        Policy?: Glacierstring;
    }

    export type GlacierVaultList = Array<GlacierDescribeVaultOutput>;
    export interface GlacierVaultLockPolicy {
        Policy?: Glacierstring;
    }

    export interface GlacierVaultNotificationConfig {
        SNSTopic?: Glacierstring;
        Events?: GlacierNotificationEventList;
    }

    export type Glacierboolean = boolean;
    export type Glacierhttpstatus = number;
    export type Glacierlong = number;
    export type Glacierstring = string;
}
