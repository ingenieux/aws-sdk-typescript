// DO NOT EDIT!
//
declare module "aws-sdk" {
    export class Glacier {
      constructor(options?: any);
      abortMultipartUpload(params: AbortMultipartUploadInput, callback: (err: ResourceNotFoundException|InvalidParameterValueException|MissingParameterValueException|ServiceUnavailableException|any, data: any) => void): void;
      completeMultipartUpload(params: CompleteMultipartUploadInput, callback: (err: ResourceNotFoundException|InvalidParameterValueException|MissingParameterValueException|ServiceUnavailableException|any, data: ArchiveCreationOutput|any) => void): void;
      createVault(params: CreateVaultInput, callback: (err: InvalidParameterValueException|MissingParameterValueException|ServiceUnavailableException|LimitExceededException|any, data: CreateVaultOutput|any) => void): void;
      deleteArchive(params: DeleteArchiveInput, callback: (err: ResourceNotFoundException|InvalidParameterValueException|MissingParameterValueException|ServiceUnavailableException|any, data: any) => void): void;
      deleteVault(params: DeleteVaultInput, callback: (err: ResourceNotFoundException|InvalidParameterValueException|MissingParameterValueException|ServiceUnavailableException|any, data: any) => void): void;
      deleteVaultAccessPolicy(params: DeleteVaultAccessPolicyInput, callback: (err: ResourceNotFoundException|InvalidParameterValueException|MissingParameterValueException|ServiceUnavailableException|any, data: any) => void): void;
      deleteVaultNotifications(params: DeleteVaultNotificationsInput, callback: (err: ResourceNotFoundException|InvalidParameterValueException|MissingParameterValueException|ServiceUnavailableException|any, data: any) => void): void;
      describeJob(params: DescribeJobInput, callback: (err: ResourceNotFoundException|InvalidParameterValueException|MissingParameterValueException|ServiceUnavailableException|any, data: GlacierJobDescription|any) => void): void;
      describeVault(params: DescribeVaultInput, callback: (err: ResourceNotFoundException|InvalidParameterValueException|MissingParameterValueException|ServiceUnavailableException|any, data: DescribeVaultOutput|any) => void): void;
      getDataRetrievalPolicy(params: GetDataRetrievalPolicyInput, callback: (err: InvalidParameterValueException|MissingParameterValueException|ServiceUnavailableException|any, data: GetDataRetrievalPolicyOutput|any) => void): void;
      getJobOutput(params: GetJobOutputInput, callback: (err: ResourceNotFoundException|InvalidParameterValueException|MissingParameterValueException|ServiceUnavailableException|any, data: GetJobOutputOutput|any) => void): void;
      getVaultAccessPolicy(params: GetVaultAccessPolicyInput, callback: (err: ResourceNotFoundException|InvalidParameterValueException|MissingParameterValueException|ServiceUnavailableException|any, data: GetVaultAccessPolicyOutput|any) => void): void;
      getVaultNotifications(params: GetVaultNotificationsInput, callback: (err: ResourceNotFoundException|InvalidParameterValueException|MissingParameterValueException|ServiceUnavailableException|any, data: GetVaultNotificationsOutput|any) => void): void;
      initiateJob(params: InitiateJobInput, callback: (err: ResourceNotFoundException|PolicyEnforcedException|InvalidParameterValueException|MissingParameterValueException|ServiceUnavailableException|any, data: InitiateJobOutput|any) => void): void;
      initiateMultipartUpload(params: InitiateMultipartUploadInput, callback: (err: ResourceNotFoundException|InvalidParameterValueException|MissingParameterValueException|ServiceUnavailableException|any, data: InitiateMultipartUploadOutput|any) => void): void;
      listJobs(params: ListJobsInput, callback: (err: ResourceNotFoundException|InvalidParameterValueException|MissingParameterValueException|ServiceUnavailableException|any, data: ListJobsOutput|any) => void): void;
      listMultipartUploads(params: ListMultipartUploadsInput, callback: (err: ResourceNotFoundException|InvalidParameterValueException|MissingParameterValueException|ServiceUnavailableException|any, data: ListMultipartUploadsOutput|any) => void): void;
      listParts(params: ListPartsInput, callback: (err: ResourceNotFoundException|InvalidParameterValueException|MissingParameterValueException|ServiceUnavailableException|any, data: ListPartsOutput|any) => void): void;
      listVaults(params: ListVaultsInput, callback: (err: ResourceNotFoundException|InvalidParameterValueException|MissingParameterValueException|ServiceUnavailableException|any, data: ListVaultsOutput|any) => void): void;
      setDataRetrievalPolicy(params: SetDataRetrievalPolicyInput, callback: (err: InvalidParameterValueException|MissingParameterValueException|ServiceUnavailableException|any, data: any) => void): void;
      setVaultAccessPolicy(params: SetVaultAccessPolicyInput, callback: (err: ResourceNotFoundException|InvalidParameterValueException|MissingParameterValueException|ServiceUnavailableException|any, data: any) => void): void;
      setVaultNotifications(params: SetVaultNotificationsInput, callback: (err: ResourceNotFoundException|InvalidParameterValueException|MissingParameterValueException|ServiceUnavailableException|any, data: any) => void): void;
      uploadArchive(params: UploadArchiveInput, callback: (err: ResourceNotFoundException|InvalidParameterValueException|MissingParameterValueException|RequestTimeoutException|ServiceUnavailableException|any, data: ArchiveCreationOutput|any) => void): void;
      uploadMultipartPart(params: UploadMultipartPartInput, callback: (err: ResourceNotFoundException|InvalidParameterValueException|MissingParameterValueException|RequestTimeoutException|ServiceUnavailableException|any, data: UploadMultipartPartOutput|any) => void): void;
    }

    export interface AbortMultipartUploadInput {
      accountId: string;
      vaultName: string;
      uploadId: string;
    }


    export type ActionCode = string;

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


    export type DataRetrievalRulesList = Array<DataRetrievalRule>;

    export type DateTime = string;

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


    export type JobList = Array<GlacierJobDescription>;

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


    export type NotificationEventList = Array<string>;

    export type NullableLong = number;

    export type PartList = Array<PartListElement>;

    export interface PartListElement {
      RangeInBytes?: string;
      SHA256TreeHash?: string;
    }


    export interface PolicyEnforcedException {
      type?: string;
      code?: string;
      message?: string;
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


    export type Size = number;

    export type StatusCode = string;

    export type Stream = any; // not really - it was 'blob' instead - must fix this one

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


    export type UploadsList = Array<UploadListElement>;

    export interface VaultAccessPolicy {
      Policy?: string;
    }


    export type VaultList = Array<DescribeVaultOutput>;

    export interface VaultNotificationConfig {
      SNSTopic?: string;
      Events?: NotificationEventList;
    }


    export type boolean = boolean;

    export type httpstatus = number;

    export type long = number;

    export type string = string;

}
