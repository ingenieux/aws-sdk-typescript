// Type definitions for aws-sdk - Amazon Glacier
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

///<reference path="./aws-sdk-common.d.ts" />

declare module "aws-sdk" {

    /*
     * apiVersion: 2012-06-01
     * endpointPrefix: glacier
     * serviceAbbreviation: 
     * signatureVersion: v4
     * protocol: rest-json
     */
    export class Glacier extends Service {
      constructor(options?: any);
      endpoint: Endpoint;
      abortMultipartUpload(params: Glacier.AbortMultipartUploadInput, callback?: (err: Glacier.ResourceNotFoundException|Glacier.InvalidParameterValueException|Glacier.MissingParameterValueException|Glacier.ServiceUnavailableException|any, data: any) => void): Request;
      abortVaultLock(params: Glacier.AbortVaultLockInput, callback?: (err: Glacier.ResourceNotFoundException|Glacier.InvalidParameterValueException|Glacier.MissingParameterValueException|Glacier.ServiceUnavailableException|any, data: any) => void): Request;
      addTagsToVault(params: Glacier.AddTagsToVaultInput, callback?: (err: Glacier.InvalidParameterValueException|Glacier.MissingParameterValueException|Glacier.ResourceNotFoundException|Glacier.LimitExceededException|Glacier.ServiceUnavailableException|any, data: any) => void): Request;
      completeMultipartUpload(params: Glacier.CompleteMultipartUploadInput, callback?: (err: Glacier.ResourceNotFoundException|Glacier.InvalidParameterValueException|Glacier.MissingParameterValueException|Glacier.ServiceUnavailableException|any, data: Glacier.ArchiveCreationOutput|any) => void): Request;
      completeVaultLock(params: Glacier.CompleteVaultLockInput, callback?: (err: Glacier.ResourceNotFoundException|Glacier.InvalidParameterValueException|Glacier.MissingParameterValueException|Glacier.ServiceUnavailableException|any, data: any) => void): Request;
      createVault(params: Glacier.CreateVaultInput, callback?: (err: Glacier.InvalidParameterValueException|Glacier.MissingParameterValueException|Glacier.ServiceUnavailableException|Glacier.LimitExceededException|any, data: Glacier.CreateVaultOutput|any) => void): Request;
      deleteArchive(params: Glacier.DeleteArchiveInput, callback?: (err: Glacier.ResourceNotFoundException|Glacier.InvalidParameterValueException|Glacier.MissingParameterValueException|Glacier.ServiceUnavailableException|any, data: any) => void): Request;
      deleteVault(params: Glacier.DeleteVaultInput, callback?: (err: Glacier.ResourceNotFoundException|Glacier.InvalidParameterValueException|Glacier.MissingParameterValueException|Glacier.ServiceUnavailableException|any, data: any) => void): Request;
      deleteVaultAccessPolicy(params: Glacier.DeleteVaultAccessPolicyInput, callback?: (err: Glacier.ResourceNotFoundException|Glacier.InvalidParameterValueException|Glacier.MissingParameterValueException|Glacier.ServiceUnavailableException|any, data: any) => void): Request;
      deleteVaultNotifications(params: Glacier.DeleteVaultNotificationsInput, callback?: (err: Glacier.ResourceNotFoundException|Glacier.InvalidParameterValueException|Glacier.MissingParameterValueException|Glacier.ServiceUnavailableException|any, data: any) => void): Request;
      describeJob(params: Glacier.DescribeJobInput, callback?: (err: Glacier.ResourceNotFoundException|Glacier.InvalidParameterValueException|Glacier.MissingParameterValueException|Glacier.ServiceUnavailableException|any, data: Glacier.GlacierJobDescription|any) => void): Request;
      describeVault(params: Glacier.DescribeVaultInput, callback?: (err: Glacier.ResourceNotFoundException|Glacier.InvalidParameterValueException|Glacier.MissingParameterValueException|Glacier.ServiceUnavailableException|any, data: Glacier.DescribeVaultOutput|any) => void): Request;
      getDataRetrievalPolicy(params: Glacier.GetDataRetrievalPolicyInput, callback?: (err: Glacier.InvalidParameterValueException|Glacier.MissingParameterValueException|Glacier.ServiceUnavailableException|any, data: Glacier.GetDataRetrievalPolicyOutput|any) => void): Request;
      getJobOutput(params: Glacier.GetJobOutputInput, callback?: (err: Glacier.ResourceNotFoundException|Glacier.InvalidParameterValueException|Glacier.MissingParameterValueException|Glacier.ServiceUnavailableException|any, data: Glacier.GetJobOutputOutput|any) => void): Request;
      getVaultAccessPolicy(params: Glacier.GetVaultAccessPolicyInput, callback?: (err: Glacier.ResourceNotFoundException|Glacier.InvalidParameterValueException|Glacier.MissingParameterValueException|Glacier.ServiceUnavailableException|any, data: Glacier.GetVaultAccessPolicyOutput|any) => void): Request;
      getVaultLock(params: Glacier.GetVaultLockInput, callback?: (err: Glacier.ResourceNotFoundException|Glacier.InvalidParameterValueException|Glacier.MissingParameterValueException|Glacier.ServiceUnavailableException|any, data: Glacier.GetVaultLockOutput|any) => void): Request;
      getVaultNotifications(params: Glacier.GetVaultNotificationsInput, callback?: (err: Glacier.ResourceNotFoundException|Glacier.InvalidParameterValueException|Glacier.MissingParameterValueException|Glacier.ServiceUnavailableException|any, data: Glacier.GetVaultNotificationsOutput|any) => void): Request;
      initiateJob(params: Glacier.InitiateJobInput, callback?: (err: Glacier.ResourceNotFoundException|Glacier.PolicyEnforcedException|Glacier.InvalidParameterValueException|Glacier.MissingParameterValueException|Glacier.ServiceUnavailableException|any, data: Glacier.InitiateJobOutput|any) => void): Request;
      initiateMultipartUpload(params: Glacier.InitiateMultipartUploadInput, callback?: (err: Glacier.ResourceNotFoundException|Glacier.InvalidParameterValueException|Glacier.MissingParameterValueException|Glacier.ServiceUnavailableException|any, data: Glacier.InitiateMultipartUploadOutput|any) => void): Request;
      initiateVaultLock(params: Glacier.InitiateVaultLockInput, callback?: (err: Glacier.ResourceNotFoundException|Glacier.InvalidParameterValueException|Glacier.MissingParameterValueException|Glacier.ServiceUnavailableException|any, data: Glacier.InitiateVaultLockOutput|any) => void): Request;
      listJobs(params: Glacier.ListJobsInput, callback?: (err: Glacier.ResourceNotFoundException|Glacier.InvalidParameterValueException|Glacier.MissingParameterValueException|Glacier.ServiceUnavailableException|any, data: Glacier.ListJobsOutput|any) => void): Request;
      listMultipartUploads(params: Glacier.ListMultipartUploadsInput, callback?: (err: Glacier.ResourceNotFoundException|Glacier.InvalidParameterValueException|Glacier.MissingParameterValueException|Glacier.ServiceUnavailableException|any, data: Glacier.ListMultipartUploadsOutput|any) => void): Request;
      listParts(params: Glacier.ListPartsInput, callback?: (err: Glacier.ResourceNotFoundException|Glacier.InvalidParameterValueException|Glacier.MissingParameterValueException|Glacier.ServiceUnavailableException|any, data: Glacier.ListPartsOutput|any) => void): Request;
      listTagsForVault(params: Glacier.ListTagsForVaultInput, callback?: (err: Glacier.InvalidParameterValueException|Glacier.MissingParameterValueException|Glacier.ResourceNotFoundException|Glacier.ServiceUnavailableException|any, data: Glacier.ListTagsForVaultOutput|any) => void): Request;
      listVaults(params: Glacier.ListVaultsInput, callback?: (err: Glacier.ResourceNotFoundException|Glacier.InvalidParameterValueException|Glacier.MissingParameterValueException|Glacier.ServiceUnavailableException|any, data: Glacier.ListVaultsOutput|any) => void): Request;
      removeTagsFromVault(params: Glacier.RemoveTagsFromVaultInput, callback?: (err: Glacier.InvalidParameterValueException|Glacier.MissingParameterValueException|Glacier.ResourceNotFoundException|Glacier.ServiceUnavailableException|any, data: any) => void): Request;
      setDataRetrievalPolicy(params: Glacier.SetDataRetrievalPolicyInput, callback?: (err: Glacier.InvalidParameterValueException|Glacier.MissingParameterValueException|Glacier.ServiceUnavailableException|any, data: any) => void): Request;
      setVaultAccessPolicy(params: Glacier.SetVaultAccessPolicyInput, callback?: (err: Glacier.ResourceNotFoundException|Glacier.InvalidParameterValueException|Glacier.MissingParameterValueException|Glacier.ServiceUnavailableException|any, data: any) => void): Request;
      setVaultNotifications(params: Glacier.SetVaultNotificationsInput, callback?: (err: Glacier.ResourceNotFoundException|Glacier.InvalidParameterValueException|Glacier.MissingParameterValueException|Glacier.ServiceUnavailableException|any, data: any) => void): Request;
      uploadArchive(params: Glacier.UploadArchiveInput, callback?: (err: Glacier.ResourceNotFoundException|Glacier.InvalidParameterValueException|Glacier.MissingParameterValueException|Glacier.RequestTimeoutException|Glacier.ServiceUnavailableException|any, data: Glacier.ArchiveCreationOutput|any) => void): Request;
      uploadMultipartPart(params: Glacier.UploadMultipartPartInput, callback?: (err: Glacier.ResourceNotFoundException|Glacier.InvalidParameterValueException|Glacier.MissingParameterValueException|Glacier.RequestTimeoutException|Glacier.ServiceUnavailableException|any, data: Glacier.UploadMultipartPartOutput|any) => void): Request;

      // Found on JS Sources - Sorry for the inconvenience :)
      setupRequestListeners(...args: any[]): any
      // Found on JS Sources - Sorry for the inconvenience :)
      validateAccountId(...args: any[]): any
      // Found on JS Sources - Sorry for the inconvenience :)
      addGlacierApiVersion(...args: any[]): any
      // Found on JS Sources - Sorry for the inconvenience :)
      addTreeHashHeaders(...args: any[]): any
      // Found on JS Sources - Sorry for the inconvenience :)
      computeChecksums(...args: any[]): any
      // Found on JS Sources - Sorry for the inconvenience :)
      buildHashTree(...args: any[]): any
    }

    export module Glacier {
        export type ActionCode = string;
        export type DataRetrievalRulesList = DataRetrievalRule[];
        export type DateTime = string;
        export type JobList = GlacierJobDescription[];
        export type NotificationEventList = string[];
        export type NullableLong = number;
        export type PartList = PartListElement[];
        export type Size = number;
        export type StatusCode = string;
        export type Stream = any;    // type: blob
        export type TagKey = string;
        export type TagKeyList = string[];
        export type TagMap = {[key:string]: TagValue};
        export type TagValue = string;
        export type UploadsList = UploadListElement[];
        export type VaultList = DescribeVaultOutput[];
        export type httpstatus = number;
        export type long = number;

        export interface AbortMultipartUploadInput {
            accountId: string;
            vaultName: string;
            uploadId: string;
        }
        export interface AbortVaultLockInput {
            accountId: string;
            vaultName: string;
        }
        export interface AddTagsToVaultInput {
            accountId: string;
            vaultName: string;
            Tags?: TagMap;
        }
        export interface ArchiveCreationOutput {
            location?: string;
            checksum?: string;
            archiveId?: string;
        }
        export interface CompleteMultipartUploadInput {
            accountId: string;
            vaultName: string;
            uploadId: string;
            archiveSize?: string;
            checksum?: string;
        }
        export interface CompleteVaultLockInput {
            accountId: string;
            vaultName: string;
            lockId: string;
        }
        export interface CreateVaultInput {
            accountId: string;
            vaultName: string;
        }
        export interface CreateVaultOutput {
            location?: string;
        }
        export interface DataRetrievalPolicy {
            Rules?: DataRetrievalRulesList;
        }
        export interface DataRetrievalRule {
            Strategy?: string;
            BytesPerHour?: NullableLong;
        }
        export interface DeleteArchiveInput {
            accountId: string;
            vaultName: string;
            archiveId: string;
        }
        export interface DeleteVaultAccessPolicyInput {
            accountId: string;
            vaultName: string;
        }
        export interface DeleteVaultInput {
            accountId: string;
            vaultName: string;
        }
        export interface DeleteVaultNotificationsInput {
            accountId: string;
            vaultName: string;
        }
        export interface DescribeJobInput {
            accountId: string;
            vaultName: string;
            jobId: string;
        }
        export interface DescribeVaultInput {
            accountId: string;
            vaultName: string;
        }
        export interface DescribeVaultOutput {
            VaultARN?: string;
            VaultName?: string;
            CreationDate?: string;
            LastInventoryDate?: string;
            NumberOfArchives?: long;
            SizeInBytes?: long;
        }
        export interface GetDataRetrievalPolicyInput {
            accountId: string;
        }
        export interface GetDataRetrievalPolicyOutput {
            Policy?: DataRetrievalPolicy;
        }
        export interface GetJobOutputInput {
            accountId: string;
            vaultName: string;
            jobId: string;
            range?: string;
        }
        export interface GetJobOutputOutput {
            body?: Stream;
            checksum?: string;
            status?: httpstatus;
            contentRange?: string;
            acceptRanges?: string;
            contentType?: string;
            archiveDescription?: string;
        }
        export interface GetVaultAccessPolicyInput {
            accountId: string;
            vaultName: string;
        }
        export interface GetVaultAccessPolicyOutput {
            policy?: VaultAccessPolicy;
        }
        export interface GetVaultLockInput {
            accountId: string;
            vaultName: string;
        }
        export interface GetVaultLockOutput {
            Policy?: string;
            State?: string;
            ExpirationDate?: string;
            CreationDate?: string;
        }
        export interface GetVaultNotificationsInput {
            accountId: string;
            vaultName: string;
        }
        export interface GetVaultNotificationsOutput {
            vaultNotificationConfig?: VaultNotificationConfig;
        }
        export interface GlacierJobDescription {
            JobId?: string;
            JobDescription?: string;
            Action?: ActionCode;
            ArchiveId?: string;
            VaultARN?: string;
            CreationDate?: string;
            Completed?: boolean;
            StatusCode?: StatusCode;
            StatusMessage?: string;
            ArchiveSizeInBytes?: Size;
            InventorySizeInBytes?: Size;
            SNSTopic?: string;
            CompletionDate?: string;
            SHA256TreeHash?: string;
            ArchiveSHA256TreeHash?: string;
            RetrievalByteRange?: string;
            InventoryRetrievalParameters?: InventoryRetrievalJobDescription;
        }
        export interface InitiateJobInput {
            accountId: string;
            vaultName: string;
            jobParameters?: JobParameters;
        }
        export interface InitiateJobOutput {
            location?: string;
            jobId?: string;
        }
        export interface InitiateMultipartUploadInput {
            accountId: string;
            vaultName: string;
            archiveDescription?: string;
            partSize?: string;
        }
        export interface InitiateMultipartUploadOutput {
            location?: string;
            uploadId?: string;
        }
        export interface InitiateVaultLockInput {
            accountId: string;
            vaultName: string;
            policy?: VaultLockPolicy;
        }
        export interface InitiateVaultLockOutput {
            lockId?: string;
        }
        export interface InvalidParameterValueException {
            type?: string;
            code?: string;
            message?: string;
        }
        export interface InventoryRetrievalJobDescription {
            Format?: string;
            StartDate?: DateTime;
            EndDate?: DateTime;
            Limit?: string;
            Marker?: string;
        }
        export interface InventoryRetrievalJobInput {
            StartDate?: string;
            EndDate?: string;
            Limit?: string;
            Marker?: string;
        }
        export interface JobParameters {
            Format?: string;
            Type?: string;
            ArchiveId?: string;
            Description?: string;
            SNSTopic?: string;
            RetrievalByteRange?: string;
            InventoryRetrievalParameters?: InventoryRetrievalJobInput;
        }
        export interface LimitExceededException {
            type?: string;
            code?: string;
            message?: string;
        }
        export interface ListJobsInput {
            accountId: string;
            vaultName: string;
            limit?: string;
            marker?: string;
            statuscode?: string;
            completed?: string;
        }
        export interface ListJobsOutput {
            JobList?: JobList;
            Marker?: string;
        }
        export interface ListMultipartUploadsInput {
            accountId: string;
            vaultName: string;
            marker?: string;
            limit?: string;
        }
        export interface ListMultipartUploadsOutput {
            UploadsList?: UploadsList;
            Marker?: string;
        }
        export interface ListPartsInput {
            accountId: string;
            vaultName: string;
            uploadId: string;
            marker?: string;
            limit?: string;
        }
        export interface ListPartsOutput {
            MultipartUploadId?: string;
            VaultARN?: string;
            ArchiveDescription?: string;
            PartSizeInBytes?: long;
            CreationDate?: string;
            Parts?: PartList;
            Marker?: string;
        }
        export interface ListTagsForVaultInput {
            accountId: string;
            vaultName: string;
        }
        export interface ListTagsForVaultOutput {
            Tags?: TagMap;
        }
        export interface ListVaultsInput {
            accountId: string;
            marker?: string;
            limit?: string;
        }
        export interface ListVaultsOutput {
            VaultList?: VaultList;
            Marker?: string;
        }
        export interface MissingParameterValueException {
            type?: string;
            code?: string;
            message?: string;
        }
        export interface PartListElement {
            RangeInBytes?: string;
            SHA256TreeHash?: string;
        }
        export interface PolicyEnforcedException {
            type?: string;
            code?: string;
            message?: string;
        }
        export interface RemoveTagsFromVaultInput {
            accountId: string;
            vaultName: string;
            TagKeys?: TagKeyList;
        }
        export interface RequestTimeoutException {
            type?: string;
            code?: string;
            message?: string;
        }
        export interface ResourceNotFoundException {
            type?: string;
            code?: string;
            message?: string;
        }
        export interface ServiceUnavailableException {
            type?: string;
            code?: string;
            message?: string;
        }
        export interface SetDataRetrievalPolicyInput {
            accountId: string;
            Policy?: DataRetrievalPolicy;
        }
        export interface SetVaultAccessPolicyInput {
            accountId: string;
            vaultName: string;
            policy?: VaultAccessPolicy;
        }
        export interface SetVaultNotificationsInput {
            accountId: string;
            vaultName: string;
            vaultNotificationConfig?: VaultNotificationConfig;
        }
        export interface UploadArchiveInput {
            vaultName: string;
            accountId: string;
            archiveDescription?: string;
            checksum?: string;
            body?: Stream;
        }
        export interface UploadListElement {
            MultipartUploadId?: string;
            VaultARN?: string;
            ArchiveDescription?: string;
            PartSizeInBytes?: long;
            CreationDate?: string;
        }
        export interface UploadMultipartPartInput {
            accountId: string;
            vaultName: string;
            uploadId: string;
            checksum?: string;
            range?: string;
            body?: Stream;
        }
        export interface UploadMultipartPartOutput {
            checksum?: string;
        }
        export interface VaultAccessPolicy {
            Policy?: string;
        }
        export interface VaultLockPolicy {
            Policy?: string;
        }
        export interface VaultNotificationConfig {
            SNSTopic?: string;
            Events?: NotificationEventList;
        }

    }
}
