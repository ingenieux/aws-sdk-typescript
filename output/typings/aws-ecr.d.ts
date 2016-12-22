// Type definitions for aws-sdk - Amazon EC2 Container Registry
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

// COMMENTED <reference path="./aws-sdk.d.ts" />

declare module "aws-sdk" {

 /**
   * apiVersion: 2015-09-21
   * endpointPrefix: ecr
   * serviceAbbreviation: Amazon ECR
   * signatureVersion: v4
   * protocol: json
   *
   * Amazon EC2 Container Registry (Amazon ECR) is a managed AWS Docker registry
service. Customers can use the familiar Docker CLI to push, pull, and manage
images. Amazon ECR provides a secure, scalable, and reliable registry. Amazon
ECR supports private Docker repositories with resource-based permissions using
AWS IAM so that specific users or Amazon EC2 instances can access repositories
and images. Developers can use the Docker CLI to author and manage images.
   *
   */
  export class ECR extends Service {
    constructor(options?: any);
    endpoint: Endpoint;
    /**
     * Check the availability of multiple image layers in a specified registry and
repository.

This operation is used by the Amazon ECR proxy, and it is not intended for
general use by customers for pulling and pushing images. In most cases, you
should use the docker CLI to pull, tag, and push images.
     *
     * @error RepositoryNotFoundException   
     * @error InvalidParameterException   
     * @error ServerException   
     */
    batchCheckLayerAvailability(params: ECR.BatchCheckLayerAvailabilityRequest, callback?: (err: ECR.RepositoryNotFoundException|ECR.InvalidParameterException|ECR.ServerException|any, data: ECR.BatchCheckLayerAvailabilityResponse|any) => void): Request<ECR.BatchCheckLayerAvailabilityResponse|any,ECR.RepositoryNotFoundException|ECR.InvalidParameterException|ECR.ServerException|any>;
    /**
     * Deletes a list of specified images within a specified repository. Images are
specified with either imageTag or imageDigest .

You can remove a tag from an image by specifying the image&#x27;s tag in your
request. When you remove the last tag from an image, the image is deleted from
your repository.

You can completely delete an image (and all of its tags) by specifying the
image&#x27;s digest in your request.
     *
     * @error ServerException   
     * @error InvalidParameterException   
     * @error RepositoryNotFoundException   
     */
    batchDeleteImage(params: ECR.BatchDeleteImageRequest, callback?: (err: ECR.ServerException|ECR.InvalidParameterException|ECR.RepositoryNotFoundException|any, data: ECR.BatchDeleteImageResponse|any) => void): Request<ECR.BatchDeleteImageResponse|any,ECR.ServerException|ECR.InvalidParameterException|ECR.RepositoryNotFoundException|any>;
    /**
     * Gets detailed information for specified images within a specified repository.
Images are specified with either imageTag or imageDigest .
     *
     * @error ServerException   
     * @error InvalidParameterException   
     * @error RepositoryNotFoundException   
     */
    batchGetImage(params: ECR.BatchGetImageRequest, callback?: (err: ECR.ServerException|ECR.InvalidParameterException|ECR.RepositoryNotFoundException|any, data: ECR.BatchGetImageResponse|any) => void): Request<ECR.BatchGetImageResponse|any,ECR.ServerException|ECR.InvalidParameterException|ECR.RepositoryNotFoundException|any>;
    /**
     * Inform Amazon ECR that the image layer upload for a specified registry,
repository name, and upload ID, has completed. You can optionally provide a 
sha256 digest of the image layer for data validation purposes.

This operation is used by the Amazon ECR proxy, and it is not intended for
general use by customers for pulling and pushing images. In most cases, you
should use the docker CLI to pull, tag, and push images.
     *
     * @error ServerException   
     * @error InvalidParameterException   
     * @error RepositoryNotFoundException   
     * @error UploadNotFoundException   
     * @error InvalidLayerException   
     * @error LayerPartTooSmallException   
     * @error LayerAlreadyExistsException   
     * @error EmptyUploadException   
     */
    completeLayerUpload(params: ECR.CompleteLayerUploadRequest, callback?: (err: ECR.ServerException|ECR.InvalidParameterException|ECR.RepositoryNotFoundException|ECR.UploadNotFoundException|ECR.InvalidLayerException|ECR.LayerPartTooSmallException|ECR.LayerAlreadyExistsException|ECR.EmptyUploadException|any, data: ECR.CompleteLayerUploadResponse|any) => void): Request<ECR.CompleteLayerUploadResponse|any,ECR.ServerException|ECR.InvalidParameterException|ECR.RepositoryNotFoundException|ECR.UploadNotFoundException|ECR.InvalidLayerException|ECR.LayerPartTooSmallException|ECR.LayerAlreadyExistsException|ECR.EmptyUploadException|any>;
    /**
     * Creates an image repository.
     *
     * @error ServerException   
     * @error InvalidParameterException   
     * @error RepositoryAlreadyExistsException   
     * @error LimitExceededException   
     */
    createRepository(params: ECR.CreateRepositoryRequest, callback?: (err: ECR.ServerException|ECR.InvalidParameterException|ECR.RepositoryAlreadyExistsException|ECR.LimitExceededException|any, data: ECR.CreateRepositoryResponse|any) => void): Request<ECR.CreateRepositoryResponse|any,ECR.ServerException|ECR.InvalidParameterException|ECR.RepositoryAlreadyExistsException|ECR.LimitExceededException|any>;
    /**
     * Deletes an existing image repository. If a repository contains images, you must
use the force option to delete it.
     *
     * @error ServerException   
     * @error InvalidParameterException   
     * @error RepositoryNotFoundException   
     * @error RepositoryNotEmptyException   
     */
    deleteRepository(params: ECR.DeleteRepositoryRequest, callback?: (err: ECR.ServerException|ECR.InvalidParameterException|ECR.RepositoryNotFoundException|ECR.RepositoryNotEmptyException|any, data: ECR.DeleteRepositoryResponse|any) => void): Request<ECR.DeleteRepositoryResponse|any,ECR.ServerException|ECR.InvalidParameterException|ECR.RepositoryNotFoundException|ECR.RepositoryNotEmptyException|any>;
    /**
     * Deletes the repository policy from a specified repository.
     *
     * @error ServerException   
     * @error InvalidParameterException   
     * @error RepositoryNotFoundException   
     * @error RepositoryPolicyNotFoundException   
     */
    deleteRepositoryPolicy(params: ECR.DeleteRepositoryPolicyRequest, callback?: (err: ECR.ServerException|ECR.InvalidParameterException|ECR.RepositoryNotFoundException|ECR.RepositoryPolicyNotFoundException|any, data: ECR.DeleteRepositoryPolicyResponse|any) => void): Request<ECR.DeleteRepositoryPolicyResponse|any,ECR.ServerException|ECR.InvalidParameterException|ECR.RepositoryNotFoundException|ECR.RepositoryPolicyNotFoundException|any>;
    /**
     * Returns metadata about the images in a repository, including image size, image
tags, and creation date.

Beginning with Docker version 1.9, the Docker client compresses image layers
before pushing them to a V2 Docker registry. The output of the docker images 
command shows the uncompressed image size, so it may return a larger image size
than the image sizes returned by DescribeImages .
     *
     * @error ServerException   
     * @error InvalidParameterException   
     * @error RepositoryNotFoundException   
     * @error ImageNotFoundException   
     */
    describeImages(params: ECR.DescribeImagesRequest, callback?: (err: ECR.ServerException|ECR.InvalidParameterException|ECR.RepositoryNotFoundException|ECR.ImageNotFoundException|any, data: ECR.DescribeImagesResponse|any) => void): Request<ECR.DescribeImagesResponse|any,ECR.ServerException|ECR.InvalidParameterException|ECR.RepositoryNotFoundException|ECR.ImageNotFoundException|any>;
    /**
     * Describes image repositories in a registry.
     *
     * @error ServerException   
     * @error InvalidParameterException   
     * @error RepositoryNotFoundException   
     */
    describeRepositories(params: ECR.DescribeRepositoriesRequest, callback?: (err: ECR.ServerException|ECR.InvalidParameterException|ECR.RepositoryNotFoundException|any, data: ECR.DescribeRepositoriesResponse|any) => void): Request<ECR.DescribeRepositoriesResponse|any,ECR.ServerException|ECR.InvalidParameterException|ECR.RepositoryNotFoundException|any>;
    /**
     * Retrieves a token that is valid for a specified registry for 12 hours. This
command allows you to use the docker CLI to push and pull images with Amazon
ECR. If you do not specify a registry, the default registry is assumed.

The authorizationToken returned for each registry specified is a base64 encoded
string that can be decoded and used in a docker login command to authenticate to
a registry. The AWS CLI offers an aws ecr get-login command that simplifies the
login process.
     *
     * @error ServerException   
     * @error InvalidParameterException   
     */
    getAuthorizationToken(params: ECR.GetAuthorizationTokenRequest, callback?: (err: ECR.ServerException|ECR.InvalidParameterException|any, data: ECR.GetAuthorizationTokenResponse|any) => void): Request<ECR.GetAuthorizationTokenResponse|any,ECR.ServerException|ECR.InvalidParameterException|any>;
    /**
     * Retrieves the pre-signed Amazon S3 download URL corresponding to an image layer.
You can only get URLs for image layers that are referenced in an image.

This operation is used by the Amazon ECR proxy, and it is not intended for
general use by customers for pulling and pushing images. In most cases, you
should use the docker CLI to pull, tag, and push images.
     *
     * @error ServerException   
     * @error InvalidParameterException   
     * @error LayersNotFoundException   
     * @error LayerInaccessibleException   
     * @error RepositoryNotFoundException   
     */
    getDownloadUrlForLayer(params: ECR.GetDownloadUrlForLayerRequest, callback?: (err: ECR.ServerException|ECR.InvalidParameterException|ECR.LayersNotFoundException|ECR.LayerInaccessibleException|ECR.RepositoryNotFoundException|any, data: ECR.GetDownloadUrlForLayerResponse|any) => void): Request<ECR.GetDownloadUrlForLayerResponse|any,ECR.ServerException|ECR.InvalidParameterException|ECR.LayersNotFoundException|ECR.LayerInaccessibleException|ECR.RepositoryNotFoundException|any>;
    /**
     * Retrieves the repository policy for a specified repository.
     *
     * @error ServerException   
     * @error InvalidParameterException   
     * @error RepositoryNotFoundException   
     * @error RepositoryPolicyNotFoundException   
     */
    getRepositoryPolicy(params: ECR.GetRepositoryPolicyRequest, callback?: (err: ECR.ServerException|ECR.InvalidParameterException|ECR.RepositoryNotFoundException|ECR.RepositoryPolicyNotFoundException|any, data: ECR.GetRepositoryPolicyResponse|any) => void): Request<ECR.GetRepositoryPolicyResponse|any,ECR.ServerException|ECR.InvalidParameterException|ECR.RepositoryNotFoundException|ECR.RepositoryPolicyNotFoundException|any>;
    /**
     * Notify Amazon ECR that you intend to upload an image layer.

This operation is used by the Amazon ECR proxy, and it is not intended for
general use by customers for pulling and pushing images. In most cases, you
should use the docker CLI to pull, tag, and push images.
     *
     * @error ServerException   
     * @error InvalidParameterException   
     * @error RepositoryNotFoundException   
     */
    initiateLayerUpload(params: ECR.InitiateLayerUploadRequest, callback?: (err: ECR.ServerException|ECR.InvalidParameterException|ECR.RepositoryNotFoundException|any, data: ECR.InitiateLayerUploadResponse|any) => void): Request<ECR.InitiateLayerUploadResponse|any,ECR.ServerException|ECR.InvalidParameterException|ECR.RepositoryNotFoundException|any>;
    /**
     * Lists all the image IDs for a given repository.

You can filter images based on whether or not they are tagged by setting the 
tagStatus parameter to TAGGED or UNTAGGED . For example, you can filter your
results to return only UNTAGGED images and then pipe that result to a 
BatchDeleteImage operation to delete them. Or, you can filter your results to
return only TAGGED images to list all of the tags in your repository.
     *
     * @error ServerException   
     * @error InvalidParameterException   
     * @error RepositoryNotFoundException   
     */
    listImages(params: ECR.ListImagesRequest, callback?: (err: ECR.ServerException|ECR.InvalidParameterException|ECR.RepositoryNotFoundException|any, data: ECR.ListImagesResponse|any) => void): Request<ECR.ListImagesResponse|any,ECR.ServerException|ECR.InvalidParameterException|ECR.RepositoryNotFoundException|any>;
    /**
     * Creates or updates the image manifest and tags associated with an image.

This operation is used by the Amazon ECR proxy, and it is not intended for
general use by customers for pulling and pushing images. In most cases, you
should use the docker CLI to pull, tag, and push images.
     *
     * @error ServerException   
     * @error InvalidParameterException   
     * @error RepositoryNotFoundException   
     * @error ImageAlreadyExistsException   
     * @error LayersNotFoundException   
     * @error LimitExceededException   
     */
    putImage(params: ECR.PutImageRequest, callback?: (err: ECR.ServerException|ECR.InvalidParameterException|ECR.RepositoryNotFoundException|ECR.ImageAlreadyExistsException|ECR.LayersNotFoundException|ECR.LimitExceededException|any, data: ECR.PutImageResponse|any) => void): Request<ECR.PutImageResponse|any,ECR.ServerException|ECR.InvalidParameterException|ECR.RepositoryNotFoundException|ECR.ImageAlreadyExistsException|ECR.LayersNotFoundException|ECR.LimitExceededException|any>;
    /**
     * Applies a repository policy on a specified repository to control access
permissions.
     *
     * @error ServerException   
     * @error InvalidParameterException   
     * @error RepositoryNotFoundException   
     */
    setRepositoryPolicy(params: ECR.SetRepositoryPolicyRequest, callback?: (err: ECR.ServerException|ECR.InvalidParameterException|ECR.RepositoryNotFoundException|any, data: ECR.SetRepositoryPolicyResponse|any) => void): Request<ECR.SetRepositoryPolicyResponse|any,ECR.ServerException|ECR.InvalidParameterException|ECR.RepositoryNotFoundException|any>;
    /**
     * Uploads an image layer part to Amazon ECR.

This operation is used by the Amazon ECR proxy, and it is not intended for
general use by customers for pulling and pushing images. In most cases, you
should use the docker CLI to pull, tag, and push images.
     *
     * @error ServerException   
     * @error InvalidParameterException   
     * @error InvalidLayerPartException   
     * @error RepositoryNotFoundException   
     * @error UploadNotFoundException   
     * @error LimitExceededException   
     */
    uploadLayerPart(params: ECR.UploadLayerPartRequest, callback?: (err: ECR.ServerException|ECR.InvalidParameterException|ECR.InvalidLayerPartException|ECR.RepositoryNotFoundException|ECR.UploadNotFoundException|ECR.LimitExceededException|any, data: ECR.UploadLayerPartResponse|any) => void): Request<ECR.UploadLayerPartResponse|any,ECR.ServerException|ECR.InvalidParameterException|ECR.InvalidLayerPartException|ECR.RepositoryNotFoundException|ECR.UploadNotFoundException|ECR.LimitExceededException|any>;

  }

  export module ECR {
    
    export type Arn = string;
    
    export type AuthorizationDataList = AuthorizationData[];
    
    export type Base64 = string;
    
    export type BatchedOperationLayerDigest = string;
    
    export type BatchedOperationLayerDigestList = BatchedOperationLayerDigest[];
    
    export type CreationTimestamp = number;
    
    export type ExceptionMessage = string;
    
    export type ExpirationTimestamp = number;
    
    export type ForceFlag = boolean;
    
    export type GetAuthorizationTokenRegistryIdList = RegistryId[];
    
    export type ImageDetailList = ImageDetail[];
    
    export type ImageDigest = string;
    
    export type ImageFailureCode = string;
    
    export type ImageFailureList = ImageFailure[];
    
    export type ImageFailureReason = string;
    
    export type ImageIdentifierList = ImageIdentifier[];
    
    export type ImageList = Image[];
    
    export type ImageManifest = string;
    
    export type ImageSizeInBytes = number;
    
    export type ImageTag = string;
    
    export type ImageTagList = ImageTag[];
    
    export type LayerAvailability = string;
    
    export type LayerDigest = string;
    
    export type LayerDigestList = LayerDigest[];
    
    export type LayerFailureCode = string;
    
    export type LayerFailureList = LayerFailure[];
    
    export type LayerFailureReason = string;
    
    export type LayerList = Layer[];
    
    export type LayerPartBlob = any;
    
    export type LayerSizeInBytes = number;
    
    export type MaxResults = number;
    
    export type MediaType = string;
    
    export type MediaTypeList = MediaType[];
    
    export type NextToken = string;
    
    export type PartSize = number;
    
    export type ProxyEndpoint = string;
    
    export type PushTimestamp = number;
    
    export type RegistryId = string;
    
    export type RepositoryList = Repository[];
    
    export type RepositoryName = string;
    
    export type RepositoryNameList = RepositoryName[];
    
    export type RepositoryPolicyText = string;
    
    export type TagStatus = string;
    
    export type UploadId = string;
    
    export type Url = string;

    export interface AuthorizationData {
        /** A base64-encoded string that contains authorization data for the specified
Amazon ECR registry. When the string is decoded, it is presented in the format 
user:password for private registry authentication using docker login . **/
        authorizationToken?: Base64;
        /** The Unix time in seconds and milliseconds when the authorization token expires.
Authorization tokens are valid for 12 hours. **/
        expiresAt?: ExpirationTimestamp;
        /** The registry URL to use for this authorization token in a docker login command.
The Amazon ECR registry URL format is 
https://aws_account_id.dkr.ecr.region.amazonaws.com . For example, 
https://012345678910.dkr.ecr.us-east-1.amazonaws.com .. **/
        proxyEndpoint?: ProxyEndpoint;
    }
    export interface BatchCheckLayerAvailabilityRequest {
        /** The AWS account ID associated with the registry that contains the image layers
to check. If you do not specify a registry, the default registry is assumed. **/
        registryId?: RegistryId;
        /** The name of the repository that is associated with the image layers to check. **/
        repositoryName: RepositoryName;
        /** The digests of the image layers to check. **/
        layerDigests: BatchedOperationLayerDigestList;
    }
    export interface BatchCheckLayerAvailabilityResponse {
        /** A list of image layer objects corresponding to the image layer references in the
request. **/
        layers?: LayerList;
        /** Any failures associated with the call. **/
        failures?: LayerFailureList;
    }
    export interface BatchDeleteImageRequest {
        /** The AWS account ID associated with the registry that contains the image to
delete. If you do not specify a registry, the default registry is assumed. **/
        registryId?: RegistryId;
        /** The repository that contains the image to delete. **/
        repositoryName: RepositoryName;
        /** A list of image ID references that correspond to images to delete. The format of
the imageIds reference is imageTag=tag or imageDigest=digest . **/
        imageIds: ImageIdentifierList;
    }
    export interface BatchDeleteImageResponse {
        /** The image IDs of the deleted images. **/
        imageIds?: ImageIdentifierList;
        /** Any failures associated with the call. **/
        failures?: ImageFailureList;
    }
    export interface BatchGetImageRequest {
        /** The AWS account ID associated with the registry that contains the images to
describe. If you do not specify a registry, the default registry is assumed. **/
        registryId?: RegistryId;
        /** The repository that contains the images to describe. **/
        repositoryName: RepositoryName;
        /** A list of image ID references that correspond to images to describe. The format
of the imageIds reference is imageTag=tag or imageDigest=digest . **/
        imageIds: ImageIdentifierList;
        /** The accepted media types for the request.

Valid values: application/vnd.docker.distribution.manifest.v1+json | 
application/vnd.docker.distribution.manifest.v2+json | 
application/vnd.oci.image.manifest.v1+json **/
        acceptedMediaTypes?: MediaTypeList;
    }
    export interface BatchGetImageResponse {
        /** A list of image objects corresponding to the image references in the request. **/
        images?: ImageList;
        /** Any failures associated with the call. **/
        failures?: ImageFailureList;
    }
    export interface CompleteLayerUploadRequest {
        /** The AWS account ID associated with the registry to which to upload layers. If
you do not specify a registry, the default registry is assumed. **/
        registryId?: RegistryId;
        /** The name of the repository to associate with the image layer. **/
        repositoryName: RepositoryName;
        /** The upload ID from a previous InitiateLayerUpload operation to associate with
the image layer. **/
        uploadId: UploadId;
        /** The sha256 digest of the image layer. **/
        layerDigests: LayerDigestList;
    }
    export interface CompleteLayerUploadResponse {
        /** The registry ID associated with the request. **/
        registryId?: RegistryId;
        /** The repository name associated with the request. **/
        repositoryName?: RepositoryName;
        /** The upload ID associated with the layer. **/
        uploadId?: UploadId;
        /** The sha256 digest of the image layer. **/
        layerDigest?: LayerDigest;
    }
    export interface CreateRepositoryRequest {
        /** The name to use for the repository. The repository name may be specified on its
own (such as nginx-web-app ) or it can be prepended with a namespace to group
the repository into a category (such as project-a/nginx-web-app ). **/
        repositoryName: RepositoryName;
    }
    export interface CreateRepositoryResponse {
        /** The repository that was created. **/
        repository?: Repository;
    }
    export interface DeleteRepositoryPolicyRequest {
        /** The AWS account ID associated with the registry that contains the repository
policy to delete. If you do not specify a registry, the default registry is
assumed. **/
        registryId?: RegistryId;
        /** The name of the repository that is associated with the repository policy to
delete. **/
        repositoryName: RepositoryName;
    }
    export interface DeleteRepositoryPolicyResponse {
        /** The registry ID associated with the request. **/
        registryId?: RegistryId;
        /** The repository name associated with the request. **/
        repositoryName?: RepositoryName;
        /** The JSON repository policy that was deleted from the repository. **/
        policyText?: RepositoryPolicyText;
    }
    export interface DeleteRepositoryRequest {
        /** The AWS account ID associated with the registry that contains the repository to
delete. If you do not specify a registry, the default registry is assumed. **/
        registryId?: RegistryId;
        /** The name of the repository to delete. **/
        repositoryName: RepositoryName;
        /** Force the deletion of the repository if it contains images. **/
        force?: ForceFlag;
    }
    export interface DeleteRepositoryResponse {
        /** The repository that was deleted. **/
        repository?: Repository;
    }
    export interface DescribeImagesFilter {
        /** The tag status with which to filter your DescribeImages results. You can filter
results based on whether they are TAGGED or UNTAGGED . **/
        tagStatus?: TagStatus;
    }
    export interface DescribeImagesRequest {
        /** The AWS account ID associated with the registry that contains the repository in
which to describe images. If you do not specify a registry, the default registry
is assumed. **/
        registryId?: RegistryId;
        /** A list of repositories to describe. If this parameter is omitted, then all
repositories in a registry are described. **/
        repositoryName: RepositoryName;
        /** The list of image IDs for the requested repository. **/
        imageIds?: ImageIdentifierList;
        /** The nextToken value returned from a previous paginated DescribeImages request
where maxResults was used and the results exceeded the value of that parameter.
Pagination continues from the end of the previous results that returned the 
nextToken value. This value is null when there are no more results to return. **/
        nextToken?: NextToken;
        /** The maximum number of repository results returned by DescribeImages in paginated
output. When this parameter is used, DescribeImages only returns maxResults 
results in a single page along with a nextToken response element. The remaining
results of the initial request can be seen by sending another DescribeImages 
request with the returned nextToken value. This value can be between 1 and 100.
If this parameter is not used, then DescribeImages returns up to 100 results and
a nextToken value, if applicable. **/
        maxResults?: MaxResults;
        /** The filter key and value with which to filter your DescribeImages results. **/
        filter?: DescribeImagesFilter;
    }
    export interface DescribeImagesResponse {
        /** A list of ImageDetail objects that contain data about the image. **/
        imageDetails?: ImageDetailList;
        /** The nextToken value to include in a future DescribeImages request. When the
results of a DescribeImages request exceed maxResults , this value can be used
to retrieve the next page of results. This value is null when there are no more
results to return. **/
        nextToken?: NextToken;
    }
    export interface DescribeRepositoriesRequest {
        /** The AWS account ID associated with the registry that contains the repositories
to be described. If you do not specify a registry, the default registry is
assumed. **/
        registryId?: RegistryId;
        /** A list of repositories to describe. If this parameter is omitted, then all
repositories in a registry are described. **/
        repositoryNames?: RepositoryNameList;
        /** The nextToken value returned from a previous paginated DescribeRepositories 
request where maxResults was used and the results exceeded the value of that
parameter. Pagination continues from the end of the previous results that
returned the nextToken value. This value is null when there are no more results
to return.

This token should be treated as an opaque identifier that is only used to
retrieve the next items in a list and not for other programmatic purposes. **/
        nextToken?: NextToken;
        /** The maximum number of repository results returned by DescribeRepositories in
paginated output. When this parameter is used, DescribeRepositories only returns 
maxResults results in a single page along with a nextToken response element. The
remaining results of the initial request can be seen by sending another 
DescribeRepositories request with the returned nextToken value. This value can
be between 1 and 100. If this parameter is not used, then DescribeRepositories 
returns up to 100 results and a nextToken value, if applicable. **/
        maxResults?: MaxResults;
    }
    export interface DescribeRepositoriesResponse {
        /** A list of repository objects corresponding to valid repositories. **/
        repositories?: RepositoryList;
        /** The nextToken value to include in a future DescribeRepositories request. When
the results of a DescribeRepositories request exceed maxResults , this value can
be used to retrieve the next page of results. This value is null when there are
no more results to return. **/
        nextToken?: NextToken;
    }
    export interface EmptyUploadException {
        /** The error message associated with the exception. **/
        message?: ExceptionMessage;
    }
    export interface GetAuthorizationTokenRequest {
        /** A list of AWS account IDs that are associated with the registries for which to
get authorization tokens. If you do not specify a registry, the default registry
is assumed. **/
        registryIds?: GetAuthorizationTokenRegistryIdList;
    }
    export interface GetAuthorizationTokenResponse {
        /** A list of authorization token data objects that correspond to the registryIds 
values in the request. **/
        authorizationData?: AuthorizationDataList;
    }
    export interface GetDownloadUrlForLayerRequest {
        /** The AWS account ID associated with the registry that contains the image layer to
download. If you do not specify a registry, the default registry is assumed. **/
        registryId?: RegistryId;
        /** The name of the repository that is associated with the image layer to download. **/
        repositoryName: RepositoryName;
        /** The digest of the image layer to download. **/
        layerDigest: LayerDigest;
    }
    export interface GetDownloadUrlForLayerResponse {
        /** The pre-signed Amazon S3 download URL for the requested layer. **/
        downloadUrl?: Url;
        /** The digest of the image layer to download. **/
        layerDigest?: LayerDigest;
    }
    export interface GetRepositoryPolicyRequest {
        /** The AWS account ID associated with the registry that contains the repository. If
you do not specify a registry, the default registry is assumed. **/
        registryId?: RegistryId;
        /** The name of the repository whose policy you want to retrieve. **/
        repositoryName: RepositoryName;
    }
    export interface GetRepositoryPolicyResponse {
        /** The registry ID associated with the request. **/
        registryId?: RegistryId;
        /** The repository name associated with the request. **/
        repositoryName?: RepositoryName;
        /** The JSON repository policy text associated with the repository. **/
        policyText?: RepositoryPolicyText;
    }
    export interface Image {
        /** The AWS account ID associated with the registry containing the image. **/
        registryId?: RegistryId;
        /** The name of the repository associated with the image. **/
        repositoryName?: RepositoryName;
        /** An object containing the image tag and image digest associated with an image. **/
        imageId?: ImageIdentifier;
        /** The image manifest associated with the image. **/
        imageManifest?: ImageManifest;
    }
    export interface ImageAlreadyExistsException {
        /** The error message associated with the exception. **/
        message?: ExceptionMessage;
    }
    export interface ImageDetail {
        /** The AWS account ID associated with the registry to which this image belongs. **/
        registryId?: RegistryId;
        /** The name of the repository to which this image belongs. **/
        repositoryName?: RepositoryName;
        /** The sha256 digest of the image manifest. **/
        imageDigest?: ImageDigest;
        /** The list of tags associated with this image. **/
        imageTags?: ImageTagList;
        /** The size, in bytes, of the image in the repository.

Beginning with Docker version 1.9, the Docker client compresses image layers
before pushing them to a V2 Docker registry. The output of the docker images 
command shows the uncompressed image size, so it may return a larger image size
than the image sizes returned by DescribeImages . **/
        imageSizeInBytes?: ImageSizeInBytes;
        /** The date and time, expressed in standard JavaScript date format, at which the
current image was pushed to the repository. **/
        imagePushedAt?: PushTimestamp;
    }
    export interface ImageFailure {
        /** The image ID associated with the failure. **/
        imageId?: ImageIdentifier;
        /** The code associated with the failure. **/
        failureCode?: ImageFailureCode;
        /** The reason for the failure. **/
        failureReason?: ImageFailureReason;
    }
    export interface ImageIdentifier {
        /** The sha256 digest of the image manifest. **/
        imageDigest?: ImageDigest;
        /** The tag used for the image. **/
        imageTag?: ImageTag;
    }
    export interface ImageNotFoundException {
        message?: ExceptionMessage;
    }
    export interface InitiateLayerUploadRequest {
        /** The AWS account ID associated with the registry that you intend to upload layers
to. If you do not specify a registry, the default registry is assumed. **/
        registryId?: RegistryId;
        /** The name of the repository that you intend to upload layers to. **/
        repositoryName: RepositoryName;
    }
    export interface InitiateLayerUploadResponse {
        /** The upload ID for the layer upload. This parameter is passed to further 
UploadLayerPart and CompleteLayerUpload operations. **/
        uploadId?: UploadId;
        /** The size, in bytes, that Amazon ECR expects future layer part uploads to be. **/
        partSize?: PartSize;
    }
    export interface InvalidLayerException {
        /** The error message associated with the exception. **/
        message?: ExceptionMessage;
    }
    export interface InvalidLayerPartException {
        /** The registry ID associated with the exception. **/
        registryId?: RegistryId;
        /** The repository name associated with the exception. **/
        repositoryName?: RepositoryName;
        /** The upload ID associated with the exception. **/
        uploadId?: UploadId;
        /** The last valid byte received from the layer part upload that is associated with
the exception. **/
        lastValidByteReceived?: PartSize;
        /** The error message associated with the exception. **/
        message?: ExceptionMessage;
    }
    export interface InvalidParameterException {
        /** The error message associated with the exception. **/
        message?: ExceptionMessage;
    }
    export interface Layer {
        /** The sha256 digest of the image layer. **/
        layerDigest?: LayerDigest;
        /** The availability status of the image layer. **/
        layerAvailability?: LayerAvailability;
        /** The size, in bytes, of the image layer. **/
        layerSize?: LayerSizeInBytes;
        /** The media type of the layer, such as 
application/vnd.docker.image.rootfs.diff.tar.gzip or 
application/vnd.oci.image.layer.v1.tar+gzip . **/
        mediaType?: MediaType;
    }
    export interface LayerAlreadyExistsException {
        /** The error message associated with the exception. **/
        message?: ExceptionMessage;
    }
    export interface LayerFailure {
        /** The layer digest associated with the failure. **/
        layerDigest?: BatchedOperationLayerDigest;
        /** The failure code associated with the failure. **/
        failureCode?: LayerFailureCode;
        /** The reason for the failure. **/
        failureReason?: LayerFailureReason;
    }
    export interface LayerInaccessibleException {
        /** The error message associated with the exception. **/
        message?: ExceptionMessage;
    }
    export interface LayerPartTooSmallException {
        /** The error message associated with the exception. **/
        message?: ExceptionMessage;
    }
    export interface LayersNotFoundException {
        /** The error message associated with the exception. **/
        message?: ExceptionMessage;
    }
    export interface LimitExceededException {
        /** The error message associated with the exception. **/
        message?: ExceptionMessage;
    }
    export interface ListImagesFilter {
        /** The tag status with which to filter your ListImages results. You can filter
results based on whether they are TAGGED or UNTAGGED . **/
        tagStatus?: TagStatus;
    }
    export interface ListImagesRequest {
        /** The AWS account ID associated with the registry that contains the repository to
list images in. If you do not specify a registry, the default registry is
assumed. **/
        registryId?: RegistryId;
        /** The repository whose image IDs are to be listed. **/
        repositoryName: RepositoryName;
        /** The nextToken value returned from a previous paginated ListImages request where 
maxResults was used and the results exceeded the value of that parameter.
Pagination continues from the end of the previous results that returned the 
nextToken value. This value is null when there are no more results to return.

This token should be treated as an opaque identifier that is only used to
retrieve the next items in a list and not for other programmatic purposes. **/
        nextToken?: NextToken;
        /** The maximum number of image results returned by ListImages in paginated output.
When this parameter is used, ListImages only returns maxResults results in a
single page along with a nextToken response element. The remaining results of
the initial request can be seen by sending another ListImages request with the
returned nextToken value. This value can be between 1 and 100. If this parameter
is not used, then ListImages returns up to 100 results and a nextToken value, if
applicable. **/
        maxResults?: MaxResults;
        /** The filter key and value with which to filter your ListImages results. **/
        filter?: ListImagesFilter;
    }
    export interface ListImagesResponse {
        /** The list of image IDs for the requested repository. **/
        imageIds?: ImageIdentifierList;
        /** The nextToken value to include in a future ListImages request. When the results
of a ListImages request exceed maxResults , this value can be used to retrieve
the next page of results. This value is null when there are no more results to
return. **/
        nextToken?: NextToken;
    }
    export interface PutImageRequest {
        /** The AWS account ID associated with the registry that contains the repository in
which to put the image. If you do not specify a registry, the default registry
is assumed. **/
        registryId?: RegistryId;
        /** The name of the repository in which to put the image. **/
        repositoryName: RepositoryName;
        /** The image manifest corresponding to the image to be uploaded. **/
        imageManifest: ImageManifest;
        /** The tag to associate with the image. This parameter is required for images that
use the Docker Image Manifest V2 Schema 2 or OCI formats. **/
        imageTag?: ImageTag;
    }
    export interface PutImageResponse {
        /** Details of the image uploaded. **/
        image?: Image;
    }
    export interface Repository {
        /** The Amazon Resource Name (ARN) that identifies the repository. The ARN contains
the arn:aws:ecr namespace, followed by the region of the repository, the AWS
account ID of the repository owner, the repository namespace, and then the
repository name. For example, arn:aws:ecr:region:012345678910:repository/test . **/
        repositoryArn?: Arn;
        /** The AWS account ID associated with the registry that contains the repository. **/
        registryId?: RegistryId;
        /** The name of the repository. **/
        repositoryName?: RepositoryName;
        /** The URI for the repository. You can use this URI for Docker push and pull 
operations. **/
        repositoryUri?: Url;
        /** The date and time, in JavaScript date/time format, when the repository was
created. **/
        createdAt?: CreationTimestamp;
    }
    export interface RepositoryAlreadyExistsException {
        /** The error message associated with the exception. **/
        message?: ExceptionMessage;
    }
    export interface RepositoryNotEmptyException {
        /** The error message associated with the exception. **/
        message?: ExceptionMessage;
    }
    export interface RepositoryNotFoundException {
        /** The error message associated with the exception. **/
        message?: ExceptionMessage;
    }
    export interface RepositoryPolicyNotFoundException {
        /** The error message associated with the exception. **/
        message?: ExceptionMessage;
    }
    export interface ServerException {
        /** The error message associated with the exception. **/
        message?: ExceptionMessage;
    }
    export interface SetRepositoryPolicyRequest {
        /** The AWS account ID associated with the registry that contains the repository. If
you do not specify a registry, the default registry is assumed. **/
        registryId?: RegistryId;
        /** The name of the repository to receive the policy. **/
        repositoryName: RepositoryName;
        /** The JSON repository policy text to apply to the repository. **/
        policyText: RepositoryPolicyText;
        /** If the policy you are attempting to set on a repository policy would prevent you
from setting another policy in the future, you must force the 
SetRepositoryPolicy operation. This is intended to prevent accidental repository
lock outs. **/
        force?: ForceFlag;
    }
    export interface SetRepositoryPolicyResponse {
        /** The registry ID associated with the request. **/
        registryId?: RegistryId;
        /** The repository name associated with the request. **/
        repositoryName?: RepositoryName;
        /** The JSON repository policy text applied to the repository. **/
        policyText?: RepositoryPolicyText;
    }
    export interface UploadLayerPartRequest {
        /** The AWS account ID associated with the registry that you are uploading layer
parts to. If you do not specify a registry, the default registry is assumed. **/
        registryId?: RegistryId;
        /** The name of the repository that you are uploading layer parts to. **/
        repositoryName: RepositoryName;
        /** The upload ID from a previous InitiateLayerUpload operation to associate with
the layer part upload. **/
        uploadId: UploadId;
        /** The integer value of the first byte of the layer part. **/
        partFirstByte: PartSize;
        /** The integer value of the last byte of the layer part. **/
        partLastByte: PartSize;
        /** The base64-encoded layer part payload. **/
        layerPartBlob: LayerPartBlob;
    }
    export interface UploadLayerPartResponse {
        /** The registry ID associated with the request. **/
        registryId?: RegistryId;
        /** The repository name associated with the request. **/
        repositoryName?: RepositoryName;
        /** The upload ID associated with the request. **/
        uploadId?: UploadId;
        /** The integer value of the last byte received in the request. **/
        lastByteReceived?: PartSize;
    }
    export interface UploadNotFoundException {
        /** The error message associated with the exception. **/
        message?: ExceptionMessage;
    }
  }
}
