// Type definitions for aws-sdk - Amazon EC2 Container Registry
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

///<reference path="./aws-sdk-common.d.ts" />

declare module "aws-sdk" {

    /*
     * apiVersion: 2015-09-21
     * endpointPrefix: ecr
     * serviceAbbreviation: Amazon ECR
     * signatureVersion: v4
     * protocol: json
     */
    export class ECR extends Service {
      constructor(options?: any);
      endpoint: Endpoint;
      batchCheckLayerAvailability(params: ECR.BatchCheckLayerAvailabilityRequest, callback?: (err: ECR.RepositoryNotFoundException|ECR.InvalidParameterException|ECR.ServerException|any, data: ECR.BatchCheckLayerAvailabilityResponse|any) => void): Request;
      batchDeleteImage(params: ECR.BatchDeleteImageRequest, callback?: (err: ECR.ServerException|ECR.InvalidParameterException|ECR.RepositoryNotFoundException|any, data: ECR.BatchDeleteImageResponse|any) => void): Request;
      batchGetImage(params: ECR.BatchGetImageRequest, callback?: (err: ECR.ServerException|ECR.InvalidParameterException|ECR.RepositoryNotFoundException|any, data: ECR.BatchGetImageResponse|any) => void): Request;
      completeLayerUpload(params: ECR.CompleteLayerUploadRequest, callback?: (err: ECR.ServerException|ECR.InvalidParameterException|ECR.RepositoryNotFoundException|ECR.UploadNotFoundException|ECR.InvalidLayerException|ECR.LayerPartTooSmallException|ECR.LayerAlreadyExistsException|ECR.EmptyUploadException|any, data: ECR.CompleteLayerUploadResponse|any) => void): Request;
      createRepository(params: ECR.CreateRepositoryRequest, callback?: (err: ECR.ServerException|ECR.InvalidParameterException|ECR.RepositoryAlreadyExistsException|ECR.LimitExceededException|any, data: ECR.CreateRepositoryResponse|any) => void): Request;
      deleteRepository(params: ECR.DeleteRepositoryRequest, callback?: (err: ECR.ServerException|ECR.InvalidParameterException|ECR.RepositoryNotFoundException|ECR.RepositoryNotEmptyException|any, data: ECR.DeleteRepositoryResponse|any) => void): Request;
      deleteRepositoryPolicy(params: ECR.DeleteRepositoryPolicyRequest, callback?: (err: ECR.ServerException|ECR.InvalidParameterException|ECR.RepositoryNotFoundException|ECR.RepositoryPolicyNotFoundException|any, data: ECR.DeleteRepositoryPolicyResponse|any) => void): Request;
      describeRepositories(params: ECR.DescribeRepositoriesRequest, callback?: (err: ECR.ServerException|ECR.InvalidParameterException|ECR.RepositoryNotFoundException|any, data: ECR.DescribeRepositoriesResponse|any) => void): Request;
      getAuthorizationToken(params: ECR.GetAuthorizationTokenRequest, callback?: (err: ECR.ServerException|ECR.InvalidParameterException|any, data: ECR.GetAuthorizationTokenResponse|any) => void): Request;
      getDownloadUrlForLayer(params: ECR.GetDownloadUrlForLayerRequest, callback?: (err: ECR.ServerException|ECR.InvalidParameterException|ECR.LayersNotFoundException|ECR.LayerInaccessibleException|ECR.RepositoryNotFoundException|any, data: ECR.GetDownloadUrlForLayerResponse|any) => void): Request;
      getRepositoryPolicy(params: ECR.GetRepositoryPolicyRequest, callback?: (err: ECR.ServerException|ECR.InvalidParameterException|ECR.RepositoryNotFoundException|ECR.RepositoryPolicyNotFoundException|any, data: ECR.GetRepositoryPolicyResponse|any) => void): Request;
      initiateLayerUpload(params: ECR.InitiateLayerUploadRequest, callback?: (err: ECR.ServerException|ECR.InvalidParameterException|ECR.RepositoryNotFoundException|any, data: ECR.InitiateLayerUploadResponse|any) => void): Request;
      listImages(params: ECR.ListImagesRequest, callback?: (err: ECR.ServerException|ECR.InvalidParameterException|ECR.RepositoryNotFoundException|any, data: ECR.ListImagesResponse|any) => void): Request;
      putImage(params: ECR.PutImageRequest, callback?: (err: ECR.ServerException|ECR.InvalidParameterException|ECR.RepositoryNotFoundException|ECR.ImageAlreadyExistsException|ECR.LayersNotFoundException|ECR.LimitExceededException|any, data: ECR.PutImageResponse|any) => void): Request;
      setRepositoryPolicy(params: ECR.SetRepositoryPolicyRequest, callback?: (err: ECR.ServerException|ECR.InvalidParameterException|ECR.RepositoryNotFoundException|any, data: ECR.SetRepositoryPolicyResponse|any) => void): Request;
      uploadLayerPart(params: ECR.UploadLayerPartRequest, callback?: (err: ECR.ServerException|ECR.InvalidParameterException|ECR.InvalidLayerPartException|ECR.RepositoryNotFoundException|ECR.UploadNotFoundException|ECR.LimitExceededException|any, data: ECR.UploadLayerPartResponse|any) => void): Request;

    }

    export module ECR {
        export type Arn = string;
        export type AuthorizationDataList = AuthorizationData[];
        export type Base64 = string;    // pattern: &quot;^\S+$&quot;
        export type BatchedOperationLayerDigest = string;    // max: 1000
        export type BatchedOperationLayerDigestList = BatchedOperationLayerDigest[];    // max: 100, min: 1
        export type ExceptionMessage = string;
        export type ExpirationTimestamp = number;
        export type ForceFlag = boolean;
        export type GetAuthorizationTokenRegistryIdList = RegistryId[];    // max: 10, min: 1
        export type ImageDigest = string;
        export type ImageFailureCode = string;
        export type ImageFailureList = ImageFailure[];
        export type ImageFailureReason = string;
        export type ImageIdentifierList = ImageIdentifier[];    // max: 100, min: 1
        export type ImageList = Image[];
        export type ImageManifest = string;
        export type ImageTag = string;
        export type LayerAvailability = string;
        export type LayerDigest = string;    // pattern: &quot;[a-zA-Z0-9-_+.]+:[a-fA-F0-9]+&quot;
        export type LayerDigestList = LayerDigest[];    // max: 100, min: 1
        export type LayerFailureCode = string;
        export type LayerFailureList = LayerFailure[];
        export type LayerFailureReason = string;
        export type LayerList = Layer[];
        export type LayerPartBlob = any;    // type: blob
        export type LayerSizeInBytes = number;
        export type MaxResults = number;    // max: 100, min: 1
        export type NextToken = string;
        export type PartSize = number;
        export type ProxyEndpoint = string;
        export type RegistryId = string;    // pattern: &quot;[0-9]{12}&quot;
        export type RepositoryList = Repository[];
        export type RepositoryName = string;    // pattern: &quot;(?:[a-z0-9]+(?:[._-][a-z0-9]+)*/)*[a-z0-9]+(?:[._-][a-z0-9]+)*&quot;, max: 256, min: 2
        export type RepositoryNameList = RepositoryName[];    // max: 100, min: 1
        export type RepositoryPolicyText = string;    // max: 10240
        export type UploadId = string;    // pattern: &quot;[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}&quot;
        export type Url = string;

        export interface AuthorizationData {
            authorizationToken?: Base64;
            expiresAt?: ExpirationTimestamp;
            proxyEndpoint?: ProxyEndpoint;
        }
        export interface BatchCheckLayerAvailabilityRequest {
            registryId?: RegistryId;
            repositoryName: RepositoryName;
            layerDigests: BatchedOperationLayerDigestList;
        }
        export interface BatchCheckLayerAvailabilityResponse {
            layers?: LayerList;
            failures?: LayerFailureList;
        }
        export interface BatchDeleteImageRequest {
            registryId?: RegistryId;
            repositoryName: RepositoryName;
            imageIds: ImageIdentifierList;
        }
        export interface BatchDeleteImageResponse {
            imageIds?: ImageIdentifierList;
            failures?: ImageFailureList;
        }
        export interface BatchGetImageRequest {
            registryId?: RegistryId;
            repositoryName: RepositoryName;
            imageIds: ImageIdentifierList;
        }
        export interface BatchGetImageResponse {
            images?: ImageList;
            failures?: ImageFailureList;
        }
        export interface CompleteLayerUploadRequest {
            registryId?: RegistryId;
            repositoryName: RepositoryName;
            uploadId: UploadId;
            layerDigests: LayerDigestList;
        }
        export interface CompleteLayerUploadResponse {
            registryId?: RegistryId;
            repositoryName?: RepositoryName;
            uploadId?: UploadId;
            layerDigest?: LayerDigest;
        }
        export interface CreateRepositoryRequest {
            repositoryName: RepositoryName;
        }
        export interface CreateRepositoryResponse {
            repository?: Repository;
        }
        export interface DeleteRepositoryPolicyRequest {
            registryId?: RegistryId;
            repositoryName: RepositoryName;
        }
        export interface DeleteRepositoryPolicyResponse {
            registryId?: RegistryId;
            repositoryName?: RepositoryName;
            policyText?: RepositoryPolicyText;
        }
        export interface DeleteRepositoryRequest {
            registryId?: RegistryId;
            repositoryName: RepositoryName;
            force?: ForceFlag;
        }
        export interface DeleteRepositoryResponse {
            repository?: Repository;
        }
        export interface DescribeRepositoriesRequest {
            registryId?: RegistryId;
            repositoryNames?: RepositoryNameList;
            nextToken?: NextToken;
            maxResults?: MaxResults;
        }
        export interface DescribeRepositoriesResponse {
            repositories?: RepositoryList;
            nextToken?: NextToken;
        }
        export interface EmptyUploadException {
            message?: ExceptionMessage;
        }
        export interface GetAuthorizationTokenRequest {
            registryIds?: GetAuthorizationTokenRegistryIdList;
        }
        export interface GetAuthorizationTokenResponse {
            authorizationData?: AuthorizationDataList;
        }
        export interface GetDownloadUrlForLayerRequest {
            registryId?: RegistryId;
            repositoryName: RepositoryName;
            layerDigest: LayerDigest;
        }
        export interface GetDownloadUrlForLayerResponse {
            downloadUrl?: Url;
            layerDigest?: LayerDigest;
        }
        export interface GetRepositoryPolicyRequest {
            registryId?: RegistryId;
            repositoryName: RepositoryName;
        }
        export interface GetRepositoryPolicyResponse {
            registryId?: RegistryId;
            repositoryName?: RepositoryName;
            policyText?: RepositoryPolicyText;
        }
        export interface Image {
            registryId?: RegistryId;
            repositoryName?: RepositoryName;
            imageId?: ImageIdentifier;
            imageManifest?: ImageManifest;
        }
        export interface ImageAlreadyExistsException {
            message?: ExceptionMessage;
        }
        export interface ImageFailure {
            imageId?: ImageIdentifier;
            failureCode?: ImageFailureCode;
            failureReason?: ImageFailureReason;
        }
        export interface ImageIdentifier {
            imageDigest?: ImageDigest;
            imageTag?: ImageTag;
        }
        export interface InitiateLayerUploadRequest {
            registryId?: RegistryId;
            repositoryName: RepositoryName;
        }
        export interface InitiateLayerUploadResponse {
            uploadId?: UploadId;
            partSize?: PartSize;
        }
        export interface InvalidLayerException {
            message?: ExceptionMessage;
        }
        export interface InvalidLayerPartException {
            registryId?: RegistryId;
            repositoryName?: RepositoryName;
            uploadId?: UploadId;
            lastValidByteReceived?: PartSize;
            message?: ExceptionMessage;
        }
        export interface InvalidParameterException {
            message?: ExceptionMessage;
        }
        export interface Layer {
            layerDigest?: LayerDigest;
            layerAvailability?: LayerAvailability;
            layerSize?: LayerSizeInBytes;
        }
        export interface LayerAlreadyExistsException {
            message?: ExceptionMessage;
        }
        export interface LayerFailure {
            layerDigest?: BatchedOperationLayerDigest;
            failureCode?: LayerFailureCode;
            failureReason?: LayerFailureReason;
        }
        export interface LayerInaccessibleException {
            message?: ExceptionMessage;
        }
        export interface LayerPartTooSmallException {
            message?: ExceptionMessage;
        }
        export interface LayersNotFoundException {
            message?: ExceptionMessage;
        }
        export interface LimitExceededException {
            message?: ExceptionMessage;
        }
        export interface ListImagesRequest {
            registryId?: RegistryId;
            repositoryName: RepositoryName;
            nextToken?: NextToken;
            maxResults?: MaxResults;
        }
        export interface ListImagesResponse {
            imageIds?: ImageIdentifierList;
            nextToken?: NextToken;
        }
        export interface PutImageRequest {
            registryId?: RegistryId;
            repositoryName: RepositoryName;
            imageManifest: ImageManifest;
        }
        export interface PutImageResponse {
            image?: Image;
        }
        export interface Repository {
            repositoryArn?: Arn;
            registryId?: RegistryId;
            repositoryName?: RepositoryName;
        }
        export interface RepositoryAlreadyExistsException {
            message?: ExceptionMessage;
        }
        export interface RepositoryNotEmptyException {
            message?: ExceptionMessage;
        }
        export interface RepositoryNotFoundException {
            message?: ExceptionMessage;
        }
        export interface RepositoryPolicyNotFoundException {
            message?: ExceptionMessage;
        }
        export interface ServerException {
            message?: ExceptionMessage;
        }
        export interface SetRepositoryPolicyRequest {
            registryId?: RegistryId;
            repositoryName: RepositoryName;
            policyText: RepositoryPolicyText;
            force?: ForceFlag;
        }
        export interface SetRepositoryPolicyResponse {
            registryId?: RegistryId;
            repositoryName?: RepositoryName;
            policyText?: RepositoryPolicyText;
        }
        export interface UploadLayerPartRequest {
            registryId?: RegistryId;
            repositoryName: RepositoryName;
            uploadId: UploadId;
            partFirstByte: PartSize;
            partLastByte: PartSize;
            layerPartBlob: LayerPartBlob;
        }
        export interface UploadLayerPartResponse {
            registryId?: RegistryId;
            repositoryName?: RepositoryName;
            uploadId?: UploadId;
            lastByteReceived?: PartSize;
        }
        export interface UploadNotFoundException {
            message?: ExceptionMessage;
        }

    }
}
