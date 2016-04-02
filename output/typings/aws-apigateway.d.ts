// Type definitions for aws-sdk - Amazon API Gateway
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

// COMMENTED <reference path="./aws-sdk.d.ts" />

declare module "aws-sdk" {

  /**
    * apiVersion: 2015-07-09
    * endpointPrefix: apigateway
    * serviceAbbreviation: 
    * signatureVersion: v4
    * protocol: rest-json
    *
    * Amazon API GatewayAmazon API Gateway helps developers deliver robust, secure and
 scalable mobile and web application backends. Amazon API Gateway allows
 developers to securely connect mobile and web applications to APIs that run on
 AWS Lambda, Amazon EC2, or other publicly addressable web services that are
 hosted outside of AWS.
    *
    */
  export class APIGateway extends Service {
    constructor(options?: any);
    endpoint: Endpoint;
    /**
     * 
     *
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error TooManyRequestsException   
     * @error LimitExceededException   
     * @error BadRequestException   
     */
    createApiKey(params: APIGateway.CreateApiKeyRequest, callback?: (err: APIGateway.UnauthorizedException | APIGateway.NotFoundException | APIGateway.TooManyRequestsException | APIGateway.LimitExceededException | APIGateway.BadRequestException | any, data: APIGateway.ApiKey | any) => void): Request;
    /**
     * 
     *
     * @error BadRequestException   
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error LimitExceededException   
     * @error TooManyRequestsException   
     */
    createAuthorizer(params: APIGateway.CreateAuthorizerRequest, callback?: (err: APIGateway.BadRequestException | APIGateway.UnauthorizedException | APIGateway.NotFoundException | APIGateway.LimitExceededException | APIGateway.TooManyRequestsException | any, data: APIGateway.Authorizer | any) => void): Request;
    /**
     * Creates a new BasePathMapping resource.
     *
     * @error UnauthorizedException   
     * @error ConflictException   
     * @error BadRequestException   
     * @error NotFoundException   
     * @error TooManyRequestsException   
     */
    createBasePathMapping(params: APIGateway.CreateBasePathMappingRequest, callback?: (err: APIGateway.UnauthorizedException | APIGateway.ConflictException | APIGateway.BadRequestException | APIGateway.NotFoundException | APIGateway.TooManyRequestsException | any, data: APIGateway.BasePathMapping | any) => void): Request;
    /**
     * Creates a Deployment resource, which makes a specified RestApi callable over the
internet.
     *
     * @error UnauthorizedException   
     * @error BadRequestException   
     * @error NotFoundException   
     * @error ConflictException   
     * @error LimitExceededException   
     * @error TooManyRequestsException   
     * @error ServiceUnavailableException   
     */
    createDeployment(params: APIGateway.CreateDeploymentRequest, callback?: (err: APIGateway.UnauthorizedException | APIGateway.BadRequestException | APIGateway.NotFoundException | APIGateway.ConflictException | APIGateway.LimitExceededException | APIGateway.TooManyRequestsException | APIGateway.ServiceUnavailableException | any, data: APIGateway.Deployment | any) => void): Request;
    /**
     * Creates a new domain name.
     *
     * @error UnauthorizedException   
     * @error BadRequestException   
     * @error TooManyRequestsException   
     */
    createDomainName(params: APIGateway.CreateDomainNameRequest, callback?: (err: APIGateway.UnauthorizedException | APIGateway.BadRequestException | APIGateway.TooManyRequestsException | any, data: APIGateway.DomainName | any) => void): Request;
    /**
     * Adds a new Model resource to an existing RestApi resource.
     *
     * @error BadRequestException   
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error ConflictException   
     * @error LimitExceededException   
     * @error TooManyRequestsException   
     */
    createModel(params: APIGateway.CreateModelRequest, callback?: (err: APIGateway.BadRequestException | APIGateway.UnauthorizedException | APIGateway.NotFoundException | APIGateway.ConflictException | APIGateway.LimitExceededException | APIGateway.TooManyRequestsException | any, data: APIGateway.Model | any) => void): Request;
    /**
     * Creates a Resource resource.
     *
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error ConflictException   
     * @error LimitExceededException   
     * @error BadRequestException   
     * @error TooManyRequestsException   
     */
    createResource(params: APIGateway.CreateResourceRequest, callback?: (err: APIGateway.UnauthorizedException | APIGateway.NotFoundException | APIGateway.ConflictException | APIGateway.LimitExceededException | APIGateway.BadRequestException | APIGateway.TooManyRequestsException | any, data: APIGateway.Resource | any) => void): Request;
    /**
     * Creates a new RestApi resource.
     *
     * @error UnauthorizedException   
     * @error LimitExceededException   
     * @error BadRequestException   
     * @error TooManyRequestsException   
     */
    createRestApi(params: APIGateway.CreateRestApiRequest, callback?: (err: APIGateway.UnauthorizedException | APIGateway.LimitExceededException | APIGateway.BadRequestException | APIGateway.TooManyRequestsException | any, data: APIGateway.RestApi | any) => void): Request;
    /**
     * Creates a new Stage resource that references a pre-existing Deployment for the
API.
     *
     * @error UnauthorizedException   
     * @error BadRequestException   
     * @error NotFoundException   
     * @error ConflictException   
     * @error LimitExceededException   
     * @error TooManyRequestsException   
     */
    createStage(params: APIGateway.CreateStageRequest, callback?: (err: APIGateway.UnauthorizedException | APIGateway.BadRequestException | APIGateway.NotFoundException | APIGateway.ConflictException | APIGateway.LimitExceededException | APIGateway.TooManyRequestsException | any, data: APIGateway.Stage | any) => void): Request;
    /**
     * Deletes the ApiKey resource.
     *
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error TooManyRequestsException   
     */
    deleteApiKey(params: APIGateway.DeleteApiKeyRequest, callback?: (err: APIGateway.UnauthorizedException | APIGateway.NotFoundException | APIGateway.TooManyRequestsException | any, data: any) => void): Request;
    /**
     * Deletes an existing Authorizer resource.
     *
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error TooManyRequestsException   
     * @error BadRequestException   
     * @error ConflictException   
     */
    deleteAuthorizer(params: APIGateway.DeleteAuthorizerRequest, callback?: (err: APIGateway.UnauthorizedException | APIGateway.NotFoundException | APIGateway.TooManyRequestsException | APIGateway.BadRequestException | APIGateway.ConflictException | any, data: any) => void): Request;
    /**
     * Deletes the BasePathMapping resource.
     *
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error TooManyRequestsException   
     */
    deleteBasePathMapping(params: APIGateway.DeleteBasePathMappingRequest, callback?: (err: APIGateway.UnauthorizedException | APIGateway.NotFoundException | APIGateway.TooManyRequestsException | any, data: any) => void): Request;
    /**
     * 
     *
     * @error UnauthorizedException   
     * @error TooManyRequestsException   
     * @error BadRequestException   
     * @error NotFoundException   
     */
    deleteClientCertificate(params: APIGateway.DeleteClientCertificateRequest, callback?: (err: APIGateway.UnauthorizedException | APIGateway.TooManyRequestsException | APIGateway.BadRequestException | APIGateway.NotFoundException | any, data: any) => void): Request;
    /**
     * Deletes a Deployment resource. Deleting a deployment will only succeed if there
are no Stage resources associated with it.
     *
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error BadRequestException   
     * @error TooManyRequestsException   
     */
    deleteDeployment(params: APIGateway.DeleteDeploymentRequest, callback?: (err: APIGateway.UnauthorizedException | APIGateway.NotFoundException | APIGateway.BadRequestException | APIGateway.TooManyRequestsException | any, data: any) => void): Request;
    /**
     * Deletes the DomainName resource.
     *
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error TooManyRequestsException   
     */
    deleteDomainName(params: APIGateway.DeleteDomainNameRequest, callback?: (err: APIGateway.UnauthorizedException | APIGateway.NotFoundException | APIGateway.TooManyRequestsException | any, data: any) => void): Request;
    /**
     * Represents a delete integration.
     *
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error TooManyRequestsException   
     */
    deleteIntegration(params: APIGateway.DeleteIntegrationRequest, callback?: (err: APIGateway.UnauthorizedException | APIGateway.NotFoundException | APIGateway.TooManyRequestsException | any, data: any) => void): Request;
    /**
     * Represents a delete integration response.
     *
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error TooManyRequestsException   
     */
    deleteIntegrationResponse(params: APIGateway.DeleteIntegrationResponseRequest, callback?: (err: APIGateway.UnauthorizedException | APIGateway.NotFoundException | APIGateway.TooManyRequestsException | any, data: any) => void): Request;
    /**
     * Deletes an existing Method resource.
     *
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error TooManyRequestsException   
     */
    deleteMethod(params: APIGateway.DeleteMethodRequest, callback?: (err: APIGateway.UnauthorizedException | APIGateway.NotFoundException | APIGateway.TooManyRequestsException | any, data: any) => void): Request;
    /**
     * Deletes an existing MethodResponse resource.
     *
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error TooManyRequestsException   
     */
    deleteMethodResponse(params: APIGateway.DeleteMethodResponseRequest, callback?: (err: APIGateway.UnauthorizedException | APIGateway.NotFoundException | APIGateway.TooManyRequestsException | any, data: any) => void): Request;
    /**
     * Deletes a model.
     *
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error TooManyRequestsException   
     * @error BadRequestException   
     * @error ConflictException   
     */
    deleteModel(params: APIGateway.DeleteModelRequest, callback?: (err: APIGateway.UnauthorizedException | APIGateway.NotFoundException | APIGateway.TooManyRequestsException | APIGateway.BadRequestException | APIGateway.ConflictException | any, data: any) => void): Request;
    /**
     * Deletes a Resource resource.
     *
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error BadRequestException   
     * @error TooManyRequestsException   
     */
    deleteResource(params: APIGateway.DeleteResourceRequest, callback?: (err: APIGateway.UnauthorizedException | APIGateway.NotFoundException | APIGateway.BadRequestException | APIGateway.TooManyRequestsException | any, data: any) => void): Request;
    /**
     * Deletes the specified API.
     *
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error TooManyRequestsException   
     */
    deleteRestApi(params: APIGateway.DeleteRestApiRequest, callback?: (err: APIGateway.UnauthorizedException | APIGateway.NotFoundException | APIGateway.TooManyRequestsException | any, data: any) => void): Request;
    /**
     * Deletes a Stage resource.
     *
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error TooManyRequestsException   
     */
    deleteStage(params: APIGateway.DeleteStageRequest, callback?: (err: APIGateway.UnauthorizedException | APIGateway.NotFoundException | APIGateway.TooManyRequestsException | any, data: any) => void): Request;
    /**
     * Flushes all authorizer cache entries on a stage.
     *
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error BadRequestException   
     * @error TooManyRequestsException   
     */
    flushStageAuthorizersCache(params: APIGateway.FlushStageAuthorizersCacheRequest, callback?: (err: APIGateway.UnauthorizedException | APIGateway.NotFoundException | APIGateway.BadRequestException | APIGateway.TooManyRequestsException | any, data: any) => void): Request;
    /**
     * Flushes a stage&#x27;s cache.
     *
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error BadRequestException   
     * @error TooManyRequestsException   
     */
    flushStageCache(params: APIGateway.FlushStageCacheRequest, callback?: (err: APIGateway.UnauthorizedException | APIGateway.NotFoundException | APIGateway.BadRequestException | APIGateway.TooManyRequestsException | any, data: any) => void): Request;
    /**
     * 
     *
     * @error UnauthorizedException   
     * @error TooManyRequestsException   
     * @error LimitExceededException   
     */
    generateClientCertificate(params: APIGateway.GenerateClientCertificateRequest, callback?: (err: APIGateway.UnauthorizedException | APIGateway.TooManyRequestsException | APIGateway.LimitExceededException | any, data: APIGateway.ClientCertificate | any) => void): Request;
    /**
     * Gets information about the current Account resource.
     *
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error TooManyRequestsException   
     */
    getAccount(params: APIGateway.GetAccountRequest, callback?: (err: APIGateway.UnauthorizedException | APIGateway.NotFoundException | APIGateway.TooManyRequestsException | any, data: APIGateway.Account | any) => void): Request;
    /**
     * Gets information about the current ApiKey resource.
     *
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error TooManyRequestsException   
     */
    getApiKey(params: APIGateway.GetApiKeyRequest, callback?: (err: APIGateway.UnauthorizedException | APIGateway.NotFoundException | APIGateway.TooManyRequestsException | any, data: APIGateway.ApiKey | any) => void): Request;
    /**
     * Gets information about the current ApiKeys resource.
     *
     * @error BadRequestException   
     * @error UnauthorizedException   
     * @error TooManyRequestsException   
     */
    getApiKeys(params: APIGateway.GetApiKeysRequest, callback?: (err: APIGateway.BadRequestException | APIGateway.UnauthorizedException | APIGateway.TooManyRequestsException | any, data: APIGateway.ApiKeys | any) => void): Request;
    /**
     * Describe an existing Authorizer resource.
     *
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error TooManyRequestsException   
     */
    getAuthorizer(params: APIGateway.GetAuthorizerRequest, callback?: (err: APIGateway.UnauthorizedException | APIGateway.NotFoundException | APIGateway.TooManyRequestsException | any, data: APIGateway.Authorizer | any) => void): Request;
    /**
     * Describe an existing Authorizers resource.
     *
     * @error BadRequestException   
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error TooManyRequestsException   
     */
    getAuthorizers(params: APIGateway.GetAuthorizersRequest, callback?: (err: APIGateway.BadRequestException | APIGateway.UnauthorizedException | APIGateway.NotFoundException | APIGateway.TooManyRequestsException | any, data: APIGateway.Authorizers | any) => void): Request;
    /**
     * Describe a BasePathMapping resource.
     *
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error TooManyRequestsException   
     */
    getBasePathMapping(params: APIGateway.GetBasePathMappingRequest, callback?: (err: APIGateway.UnauthorizedException | APIGateway.NotFoundException | APIGateway.TooManyRequestsException | any, data: APIGateway.BasePathMapping | any) => void): Request;
    /**
     * Represents a collection of BasePathMapping resources.
     *
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error TooManyRequestsException   
     */
    getBasePathMappings(params: APIGateway.GetBasePathMappingsRequest, callback?: (err: APIGateway.UnauthorizedException | APIGateway.NotFoundException | APIGateway.TooManyRequestsException | any, data: APIGateway.BasePathMappings | any) => void): Request;
    /**
     * 
     *
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error TooManyRequestsException   
     */
    getClientCertificate(params: APIGateway.GetClientCertificateRequest, callback?: (err: APIGateway.UnauthorizedException | APIGateway.NotFoundException | APIGateway.TooManyRequestsException | any, data: APIGateway.ClientCertificate | any) => void): Request;
    /**
     * 
     *
     * @error BadRequestException   
     * @error UnauthorizedException   
     * @error TooManyRequestsException   
     */
    getClientCertificates(params: APIGateway.GetClientCertificatesRequest, callback?: (err: APIGateway.BadRequestException | APIGateway.UnauthorizedException | APIGateway.TooManyRequestsException | any, data: APIGateway.ClientCertificates | any) => void): Request;
    /**
     * Gets information about a Deployment resource.
     *
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error TooManyRequestsException   
     * @error ServiceUnavailableException   
     */
    getDeployment(params: APIGateway.GetDeploymentRequest, callback?: (err: APIGateway.UnauthorizedException | APIGateway.NotFoundException | APIGateway.TooManyRequestsException | APIGateway.ServiceUnavailableException | any, data: APIGateway.Deployment | any) => void): Request;
    /**
     * Gets information about a Deployments collection.
     *
     * @error BadRequestException   
     * @error UnauthorizedException   
     * @error TooManyRequestsException   
     * @error ServiceUnavailableException   
     */
    getDeployments(params: APIGateway.GetDeploymentsRequest, callback?: (err: APIGateway.BadRequestException | APIGateway.UnauthorizedException | APIGateway.TooManyRequestsException | APIGateway.ServiceUnavailableException | any, data: APIGateway.Deployments | any) => void): Request;
    /**
     * Represents a domain name that is contained in a simpler, more intuitive URL that
can be called.
     *
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error ServiceUnavailableException   
     * @error TooManyRequestsException   
     */
    getDomainName(params: APIGateway.GetDomainNameRequest, callback?: (err: APIGateway.UnauthorizedException | APIGateway.NotFoundException | APIGateway.ServiceUnavailableException | APIGateway.TooManyRequestsException | any, data: APIGateway.DomainName | any) => void): Request;
    /**
     * Represents a collection of DomainName resources.
     *
     * @error BadRequestException   
     * @error UnauthorizedException   
     * @error TooManyRequestsException   
     */
    getDomainNames(params: APIGateway.GetDomainNamesRequest, callback?: (err: APIGateway.BadRequestException | APIGateway.UnauthorizedException | APIGateway.TooManyRequestsException | any, data: APIGateway.DomainNames | any) => void): Request;
    /**
     * 
     *
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error BadRequestException   
     * @error TooManyRequestsException   
     */
    getExport(params: APIGateway.GetExportRequest, callback?: (err: APIGateway.UnauthorizedException | APIGateway.NotFoundException | APIGateway.BadRequestException | APIGateway.TooManyRequestsException | any, data: APIGateway.ExportResponse | any) => void): Request;
    /**
     * Represents a get integration.
     *
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error TooManyRequestsException   
     */
    getIntegration(params: APIGateway.GetIntegrationRequest, callback?: (err: APIGateway.UnauthorizedException | APIGateway.NotFoundException | APIGateway.TooManyRequestsException | any, data: APIGateway.Integration | any) => void): Request;
    /**
     * Represents a get integration response.
     *
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error TooManyRequestsException   
     */
    getIntegrationResponse(params: APIGateway.GetIntegrationResponseRequest, callback?: (err: APIGateway.UnauthorizedException | APIGateway.NotFoundException | APIGateway.TooManyRequestsException | any, data: APIGateway.IntegrationResponse | any) => void): Request;
    /**
     * Describe an existing Method resource.
     *
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error TooManyRequestsException   
     */
    getMethod(params: APIGateway.GetMethodRequest, callback?: (err: APIGateway.UnauthorizedException | APIGateway.NotFoundException | APIGateway.TooManyRequestsException | any, data: APIGateway.Method | any) => void): Request;
    /**
     * Describes a MethodResponse resource.
     *
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error TooManyRequestsException   
     */
    getMethodResponse(params: APIGateway.GetMethodResponseRequest, callback?: (err: APIGateway.UnauthorizedException | APIGateway.NotFoundException | APIGateway.TooManyRequestsException | any, data: APIGateway.MethodResponse | any) => void): Request;
    /**
     * Describes an existing model defined for a RestApi resource.
     *
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error TooManyRequestsException   
     */
    getModel(params: APIGateway.GetModelRequest, callback?: (err: APIGateway.UnauthorizedException | APIGateway.NotFoundException | APIGateway.TooManyRequestsException | any, data: APIGateway.Model | any) => void): Request;
    /**
     * Generates a sample mapping template that can be used to transform a payload into
the structure of a model.
     *
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error BadRequestException   
     * @error TooManyRequestsException   
     */
    getModelTemplate(params: APIGateway.GetModelTemplateRequest, callback?: (err: APIGateway.UnauthorizedException | APIGateway.NotFoundException | APIGateway.BadRequestException | APIGateway.TooManyRequestsException | any, data: APIGateway.Template | any) => void): Request;
    /**
     * Describes existing Models defined for a RestApi resource.
     *
     * @error BadRequestException   
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error TooManyRequestsException   
     */
    getModels(params: APIGateway.GetModelsRequest, callback?: (err: APIGateway.BadRequestException | APIGateway.UnauthorizedException | APIGateway.NotFoundException | APIGateway.TooManyRequestsException | any, data: APIGateway.Models | any) => void): Request;
    /**
     * Lists information about a resource.
     *
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error TooManyRequestsException   
     */
    getResource(params: APIGateway.GetResourceRequest, callback?: (err: APIGateway.UnauthorizedException | APIGateway.NotFoundException | APIGateway.TooManyRequestsException | any, data: APIGateway.Resource | any) => void): Request;
    /**
     * Lists information about a collection of Resource resources.
     *
     * @error BadRequestException   
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error TooManyRequestsException   
     */
    getResources(params: APIGateway.GetResourcesRequest, callback?: (err: APIGateway.BadRequestException | APIGateway.UnauthorizedException | APIGateway.NotFoundException | APIGateway.TooManyRequestsException | any, data: APIGateway.Resources | any) => void): Request;
    /**
     * Lists the RestApi resource in the collection.
     *
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error TooManyRequestsException   
     */
    getRestApi(params: APIGateway.GetRestApiRequest, callback?: (err: APIGateway.UnauthorizedException | APIGateway.NotFoundException | APIGateway.TooManyRequestsException | any, data: APIGateway.RestApi | any) => void): Request;
    /**
     * Lists the RestApis resources for your collection.
     *
     * @error BadRequestException   
     * @error UnauthorizedException   
     * @error TooManyRequestsException   
     */
    getRestApis(params: APIGateway.GetRestApisRequest, callback?: (err: APIGateway.BadRequestException | APIGateway.UnauthorizedException | APIGateway.TooManyRequestsException | any, data: APIGateway.RestApis | any) => void): Request;
    /**
     * 
     *
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error BadRequestException   
     * @error TooManyRequestsException   
     */
    getSdk(params: APIGateway.GetSdkRequest, callback?: (err: APIGateway.UnauthorizedException | APIGateway.NotFoundException | APIGateway.BadRequestException | APIGateway.TooManyRequestsException | any, data: APIGateway.SdkResponse | any) => void): Request;
    /**
     * Gets information about a Stage resource.
     *
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error TooManyRequestsException   
     */
    getStage(params: APIGateway.GetStageRequest, callback?: (err: APIGateway.UnauthorizedException | APIGateway.NotFoundException | APIGateway.TooManyRequestsException | any, data: APIGateway.Stage | any) => void): Request;
    /**
     * Gets information about one or more Stage resources.
     *
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error TooManyRequestsException   
     */
    getStages(params: APIGateway.GetStagesRequest, callback?: (err: APIGateway.UnauthorizedException | APIGateway.NotFoundException | APIGateway.TooManyRequestsException | any, data: APIGateway.Stages | any) => void): Request;
    /**
     * Represents a put integration.
     *
     * @error UnauthorizedException   
     * @error BadRequestException   
     * @error NotFoundException   
     * @error TooManyRequestsException   
     */
    putIntegration(params: APIGateway.PutIntegrationRequest, callback?: (err: APIGateway.UnauthorizedException | APIGateway.BadRequestException | APIGateway.NotFoundException | APIGateway.TooManyRequestsException | any, data: APIGateway.Integration | any) => void): Request;
    /**
     * Represents a put integration.
     *
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error LimitExceededException   
     * @error BadRequestException   
     * @error TooManyRequestsException   
     */
    putIntegrationResponse(params: APIGateway.PutIntegrationResponseRequest, callback?: (err: APIGateway.UnauthorizedException | APIGateway.NotFoundException | APIGateway.LimitExceededException | APIGateway.BadRequestException | APIGateway.TooManyRequestsException | any, data: APIGateway.IntegrationResponse | any) => void): Request;
    /**
     * Add a method to an existing Resource resource.
     *
     * @error BadRequestException   
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error ConflictException   
     * @error LimitExceededException   
     * @error TooManyRequestsException   
     */
    putMethod(params: APIGateway.PutMethodRequest, callback?: (err: APIGateway.BadRequestException | APIGateway.UnauthorizedException | APIGateway.NotFoundException | APIGateway.ConflictException | APIGateway.LimitExceededException | APIGateway.TooManyRequestsException | any, data: APIGateway.Method | any) => void): Request;
    /**
     * Adds a MethodResponse to an existing Method resource.
     *
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error ConflictException   
     * @error LimitExceededException   
     * @error BadRequestException   
     * @error TooManyRequestsException   
     */
    putMethodResponse(params: APIGateway.PutMethodResponseRequest, callback?: (err: APIGateway.UnauthorizedException | APIGateway.NotFoundException | APIGateway.ConflictException | APIGateway.LimitExceededException | APIGateway.BadRequestException | APIGateway.TooManyRequestsException | any, data: APIGateway.MethodResponse | any) => void): Request;
    /**
     * 
     *
     * @error BadRequestException   
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error TooManyRequestsException   
     */
    testInvokeAuthorizer(params: APIGateway.TestInvokeAuthorizerRequest, callback?: (err: APIGateway.BadRequestException | APIGateway.UnauthorizedException | APIGateway.NotFoundException | APIGateway.TooManyRequestsException | any, data: APIGateway.TestInvokeAuthorizerResponse | any) => void): Request;
    /**
     * 
     *
     * @error BadRequestException   
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error TooManyRequestsException   
     */
    testInvokeMethod(params: APIGateway.TestInvokeMethodRequest, callback?: (err: APIGateway.BadRequestException | APIGateway.UnauthorizedException | APIGateway.NotFoundException | APIGateway.TooManyRequestsException | any, data: APIGateway.TestInvokeMethodResponse | any) => void): Request;
    /**
     * Changes information about the current Account resource.
     *
     * @error UnauthorizedException   
     * @error BadRequestException   
     * @error NotFoundException   
     * @error TooManyRequestsException   
     */
    updateAccount(params: APIGateway.UpdateAccountRequest, callback?: (err: APIGateway.UnauthorizedException | APIGateway.BadRequestException | APIGateway.NotFoundException | APIGateway.TooManyRequestsException | any, data: APIGateway.Account | any) => void): Request;
    /**
     * Changes information about an ApiKey resource.
     *
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error BadRequestException   
     * @error TooManyRequestsException   
     */
    updateApiKey(params: APIGateway.UpdateApiKeyRequest, callback?: (err: APIGateway.UnauthorizedException | APIGateway.NotFoundException | APIGateway.BadRequestException | APIGateway.TooManyRequestsException | any, data: APIGateway.ApiKey | any) => void): Request;
    /**
     * Updates an existing Authorizer resource.
     *
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error BadRequestException   
     * @error TooManyRequestsException   
     */
    updateAuthorizer(params: APIGateway.UpdateAuthorizerRequest, callback?: (err: APIGateway.UnauthorizedException | APIGateway.NotFoundException | APIGateway.BadRequestException | APIGateway.TooManyRequestsException | any, data: APIGateway.Authorizer | any) => void): Request;
    /**
     * Changes information about the BasePathMapping resource.
     *
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error ConflictException   
     * @error BadRequestException   
     * @error TooManyRequestsException   
     */
    updateBasePathMapping(params: APIGateway.UpdateBasePathMappingRequest, callback?: (err: APIGateway.UnauthorizedException | APIGateway.NotFoundException | APIGateway.ConflictException | APIGateway.BadRequestException | APIGateway.TooManyRequestsException | any, data: APIGateway.BasePathMapping | any) => void): Request;
    /**
     * 
     *
     * @error UnauthorizedException   
     * @error TooManyRequestsException   
     * @error BadRequestException   
     * @error NotFoundException   
     */
    updateClientCertificate(params: APIGateway.UpdateClientCertificateRequest, callback?: (err: APIGateway.UnauthorizedException | APIGateway.TooManyRequestsException | APIGateway.BadRequestException | APIGateway.NotFoundException | any, data: APIGateway.ClientCertificate | any) => void): Request;
    /**
     * Changes information about a Deployment resource.
     *
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error BadRequestException   
     * @error TooManyRequestsException   
     * @error ServiceUnavailableException   
     */
    updateDeployment(params: APIGateway.UpdateDeploymentRequest, callback?: (err: APIGateway.UnauthorizedException | APIGateway.NotFoundException | APIGateway.BadRequestException | APIGateway.TooManyRequestsException | APIGateway.ServiceUnavailableException | any, data: APIGateway.Deployment | any) => void): Request;
    /**
     * Changes information about the DomainName resource.
     *
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error BadRequestException   
     * @error TooManyRequestsException   
     */
    updateDomainName(params: APIGateway.UpdateDomainNameRequest, callback?: (err: APIGateway.UnauthorizedException | APIGateway.NotFoundException | APIGateway.BadRequestException | APIGateway.TooManyRequestsException | any, data: APIGateway.DomainName | any) => void): Request;
    /**
     * Represents an update integration.
     *
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error BadRequestException   
     * @error TooManyRequestsException   
     */
    updateIntegration(params: APIGateway.UpdateIntegrationRequest, callback?: (err: APIGateway.UnauthorizedException | APIGateway.NotFoundException | APIGateway.BadRequestException | APIGateway.TooManyRequestsException | any, data: APIGateway.Integration | any) => void): Request;
    /**
     * Represents an update integration response.
     *
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error BadRequestException   
     * @error TooManyRequestsException   
     */
    updateIntegrationResponse(params: APIGateway.UpdateIntegrationResponseRequest, callback?: (err: APIGateway.UnauthorizedException | APIGateway.NotFoundException | APIGateway.BadRequestException | APIGateway.TooManyRequestsException | any, data: APIGateway.IntegrationResponse | any) => void): Request;
    /**
     * Updates an existing Method resource.
     *
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error BadRequestException   
     * @error TooManyRequestsException   
     */
    updateMethod(params: APIGateway.UpdateMethodRequest, callback?: (err: APIGateway.UnauthorizedException | APIGateway.NotFoundException | APIGateway.BadRequestException | APIGateway.TooManyRequestsException | any, data: APIGateway.Method | any) => void): Request;
    /**
     * Updates an existing MethodResponse resource.
     *
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error ConflictException   
     * @error LimitExceededException   
     * @error BadRequestException   
     * @error TooManyRequestsException   
     */
    updateMethodResponse(params: APIGateway.UpdateMethodResponseRequest, callback?: (err: APIGateway.UnauthorizedException | APIGateway.NotFoundException | APIGateway.ConflictException | APIGateway.LimitExceededException | APIGateway.BadRequestException | APIGateway.TooManyRequestsException | any, data: APIGateway.MethodResponse | any) => void): Request;
    /**
     * Changes information about a model.
     *
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error BadRequestException   
     * @error TooManyRequestsException   
     */
    updateModel(params: APIGateway.UpdateModelRequest, callback?: (err: APIGateway.UnauthorizedException | APIGateway.NotFoundException | APIGateway.BadRequestException | APIGateway.TooManyRequestsException | any, data: APIGateway.Model | any) => void): Request;
    /**
     * Changes information about a Resource resource.
     *
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error ConflictException   
     * @error BadRequestException   
     * @error TooManyRequestsException   
     */
    updateResource(params: APIGateway.UpdateResourceRequest, callback?: (err: APIGateway.UnauthorizedException | APIGateway.NotFoundException | APIGateway.ConflictException | APIGateway.BadRequestException | APIGateway.TooManyRequestsException | any, data: APIGateway.Resource | any) => void): Request;
    /**
     * Changes information about the specified API.
     *
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error ConflictException   
     * @error BadRequestException   
     * @error TooManyRequestsException   
     */
    updateRestApi(params: APIGateway.UpdateRestApiRequest, callback?: (err: APIGateway.UnauthorizedException | APIGateway.NotFoundException | APIGateway.ConflictException | APIGateway.BadRequestException | APIGateway.TooManyRequestsException | any, data: APIGateway.RestApi | any) => void): Request;
    /**
     * Changes information about a Stage resource.
     *
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error ConflictException   
     * @error BadRequestException   
     * @error TooManyRequestsException   
     */
    updateStage(params: APIGateway.UpdateStageRequest, callback?: (err: APIGateway.UnauthorizedException | APIGateway.NotFoundException | APIGateway.ConflictException | APIGateway.BadRequestException | APIGateway.TooManyRequestsException | any, data: APIGateway.Stage | any) => void): Request;

  }

  export module APIGateway {

    export type AuthorizerType = string;

    export type Blob = any;

    export type Boolean = boolean;

    export type CacheClusterSize = string;

    export type CacheClusterStatus = string;

    export type Double = number;

    export type Integer = number;

    export type IntegrationType = string;

    export type ListOfApiKey = ApiKey[];

    export type ListOfAuthorizer = Authorizer[];

    export type ListOfBasePathMapping = BasePathMapping[];

    export type ListOfClientCertificate = ClientCertificate[];

    export type ListOfDeployment = Deployment[];

    export type ListOfDomainName = DomainName[];

    export type ListOfModel = Model[];

    export type ListOfPatchOperation = PatchOperation[];

    export type ListOfResource = Resource[];

    export type ListOfRestApi = RestApi[];

    export type ListOfStage = Stage[];

    export type ListOfStageKeys = StageKey[];

    export type ListOfString = String[];

    export type Long = number;

    export type MapOfHeaderValues = { [key: string]: String };

    export type MapOfIntegrationResponse = { [key: string]: IntegrationResponse };

    export type MapOfMethod = { [key: string]: Method };

    export type MapOfMethodResponse = { [key: string]: MethodResponse };

    export type MapOfMethodSettings = { [key: string]: MethodSetting };

    export type MapOfMethodSnapshot = { [key: string]: MethodSnapshot };

    export type MapOfStringToBoolean = { [key: string]: NullableBoolean };

    export type MapOfStringToList = { [key: string]: ListOfString };

    export type MapOfStringToString = { [key: string]: String };

    export type NullableBoolean = boolean;

    export type NullableInteger = number;

    export type PathToMapOfMethodSnapshot = { [key: string]: MapOfMethodSnapshot };

    export type StatusCode = string;

    export type String = string;

    export type Timestamp = number;

    export type UnauthorizedCacheControlHeaderStrategy = string;

    export type op = string;

    export interface Account {
      /** Specifies the Amazon resource name (ARN) of an Amazon CloudWatch role for the
current Account resource. **/
      cloudwatchRoleArn?: String;
      /** Specifies the application programming interface (API) throttle settings for the
current Account resource. **/
      throttleSettings?: ThrottleSettings;
    }
    export interface ApiKey {
      /** The identifier of the API Key. **/
      id?: String;
      /** The name of the API Key. **/
      name?: String;
      /** The description of the API Key. **/
      description?: String;
      /** Specifies whether the API Key can be used by callers. **/
      enabled?: Boolean;
      /** A list of Stage resources that are associated with the ApiKey resource. **/
      stageKeys?: ListOfString;
      /** The date when the API Key was created, in ISO 8601 format
[http://www.iso.org/iso/home/standards/iso8601.htm] . **/
      createdDate?: Timestamp;
      /** When the API Key was last updated, in ISO 8601 format. **/
      lastUpdatedDate?: Timestamp;
    }
    export interface ApiKeys {
      position?: String;
      /** The current page of any ApiKey resources in the collection of ApiKey resources. **/
      items?: ListOfApiKey;
    }
    export interface Authorizer {
      /** The identifier for the authorizer resource. **/
      id?: String;
      /** [Required] The name of the authorizer. **/
      name?: String;
      /** [Required] The type of the authorizer. Currently, the only valid type is TOKEN. **/
      type?: AuthorizerType;
      /** [Required] Specifies the authorizer&#x27;s Uniform Resource Identifier (URI). For
TOKEN authorizers, this must be a well-formed Lambda function URI. The URI
should be of the form arn:aws:apigateway:{region}:lambda:path/{service_api} . 
Region is used to determine the right endpoint. In this case, path is used to
indicate that the remaining substring in the URI should be treated as the path
to the resource, including the initial / . For Lambda functions, this is usually
of the form /2015-03-31/functions/[FunctionARN]/invocations **/
      authorizerUri?: String;
      /** Specifies the credentials required for the authorizer, if any. Two options are
available. To specify an IAM Role for Amazon API Gateway to assume, use the
role&#x27;s Amazon Resource Name (ARN). To use resource-based permissions on the
Lambda function, specify null. **/
      authorizerCredentials?: String;
      /** [Required] The source of the identity in an incoming request. For TOKEN
authorizers, this value is a mapping expression with the same syntax as
integration parameter mappings. The only valid source for tokens is &#x27;header&#x27;, so
the expression should match &#x27;method.request.header.[headerName]&#x27;. The value of
the header &#x27;[headerName]&#x27; will be interpreted as the incoming token. **/
      identitySource?: String;
      /** A validation expression for the incoming identity. For TOKEN authorizers, this
value should be a regular expression. The incoming token from the client is
matched against this expression, and will proceed if the token matches. If the
token doesn&#x27;t match, the client receives a 401 Unauthorized response. **/
      identityValidationExpression?: String;
      /** The TTL in seconds of cached authorizer results. If greater than 0, API Gateway
will cache authorizer responses. If this field is not set, the default value is
300. The maximum value is 3600, or 1 hour. **/
      authorizerResultTtlInSeconds?: NullableInteger;
    }
    export interface Authorizers {
      position?: String;
      /** Gets the current list of Authorizer resources in the collection. **/
      items?: ListOfAuthorizer;
    }
    export interface BadRequestException {
      message?: String;
    }
    export interface BasePathMapping {
      /** The base path name that callers of the API must provide as part of the URL after
the domain name. **/
      basePath?: String;
      /** The name of the API. **/
      restApiId?: String;
      /** The name of the API&#x27;s stage. **/
      stage?: String;
    }
    export interface BasePathMappings {
      position?: String;
      /** The current page of any BasePathMapping resources in the collection of base path
mapping resources. **/
      items?: ListOfBasePathMapping;
    }
    export interface ClientCertificate {
      clientCertificateId?: String;
      description?: String;
      pemEncodedCertificate?: String;
      createdDate?: Timestamp;
      expirationDate?: Timestamp;
    }
    export interface ClientCertificates {
      position?: String;
      items?: ListOfClientCertificate;
    }
    export interface ConflictException {
      message?: String;
    }
    export interface CreateApiKeyRequest {
      /** The name of the ApiKey . **/
      name?: String;
      /** The description of the ApiKey . **/
      description?: String;
      /** Specifies whether the ApiKey can be used by callers. **/
      enabled?: Boolean;
      /** Specifies whether the ApiKey can be used by callers. **/
      stageKeys?: ListOfStageKeys;
    }
    export interface CreateAuthorizerRequest {
      restApiId: String;
      /** [Required] The name of the authorizer. **/
      name: String;
      /** [Required] The type of the authorizer. **/
      type: AuthorizerType;
      /** [Required] Specifies the authorizer&#x27;s Uniform Resource Identifier (URI). **/
      authorizerUri: String;
      /** Specifies the credentials required for the authorizer, if any. **/
      authorizerCredentials?: String;
      /** [Required] The source of the identity in an incoming request. **/
      identitySource: String;
      /** A validation expression for the incoming identity. **/
      identityValidationExpression?: String;
      /** The TTL of cached authorizer results. **/
      authorizerResultTtlInSeconds?: NullableInteger;
    }
    export interface CreateBasePathMappingRequest {
      /** The domain name of the BasePathMapping resource to create. **/
      domainName: String;
      /** The base path name that callers of the API must provide as part of the URL after
the domain name. This value must be unique for all of the mappings across a
single API. Leave this blank if you do not want callers to specify a base path
name after the domain name. **/
      basePath?: String;
      /** The name of the API that you want to apply this mapping to. **/
      restApiId: String;
      /** The name of the API&#x27;s stage that you want to use for this mapping. Leave this
blank if you do not want callers to explicitly specify the stage name after any
base path name. **/
      stage?: String;
    }
    export interface CreateDeploymentRequest {
      /** The RestApi resource identifier for the Deployment resource to create. **/
      restApiId: String;
      /** The name of the Stage resource for the Deployment resource to create. **/
      stageName: String;
      /** The description of the Stage resource for the Deployment resource to create. **/
      stageDescription?: String;
      /** The description for the Deployment resource to create. **/
      description?: String;
      /** Enables a cache cluster for the Stage resource specified in the input. **/
      cacheClusterEnabled?: NullableBoolean;
      /** Specifies the cache cluster size for the Stage resource specified in the input,
if a cache cluster is enabled. **/
      cacheClusterSize?: CacheClusterSize;
      /** A map that defines the stage variables for the Stage resource that is associated
with the new deployment. Variable names can have alphanumeric characters, and
the values must match [A-Za-z0-9-._~:/?#&amp;=,]+ . **/
      variables?: MapOfStringToString;
    }
    export interface CreateDomainNameRequest {
      /** The name of the DomainName resource. **/
      domainName: String;
      /** The name of the certificate. **/
      certificateName: String;
      /** The body of the server certificate provided by your certificate authority. **/
      certificateBody: String;
      /** Your certificate&#x27;s private key. **/
      certificatePrivateKey: String;
      /** The intermediate certificates and optionally the root certificate, one after the
other without any blank lines. If you include the root certificate, your
certificate chain must start with intermediate certificates and end with the
root certificate. Use the intermediate certificates that were provided by your
certificate authority. Do not include any intermediaries that are not in the
chain of trust path. **/
      certificateChain: String;
    }
    export interface CreateModelRequest {
      /** The RestApi identifier under which the Model will be created. **/
      restApiId: String;
      /** The name of the model. **/
      name: String;
      /** The description of the model. **/
      description?: String;
      /** The schema for the model. For application/json models, this should be 
JSON-schema draft v4 [http://json-schema.org/documentation.html] model. **/
      schema?: String;
      /** The content-type for the model. **/
      contentType: String;
    }
    export interface CreateResourceRequest {
      /** The identifier of the RestApi for the resource. **/
      restApiId: String;
      /** The parent resource&#x27;s identifier. **/
      parentId: String;
      /** The last path segment for this resource. **/
      pathPart: String;
    }
    export interface CreateRestApiRequest {
      /** The name of the RestApi . **/
      name: String;
      /** The description of the RestApi . **/
      description?: String;
      /** The Id of the RestApi that you want to clone from. **/
      cloneFrom?: String;
    }
    export interface CreateStageRequest {
      /** The identifier of the RestApi resource for the Stage resource to create. **/
      restApiId: String;
      /** The name for the Stage resource. **/
      stageName: String;
      /** The identifier of the Deployment resource for the Stage resource. **/
      deploymentId: String;
      /** The description of the Stage resource. **/
      description?: String;
      /** Whether cache clustering is enabled for the stage. **/
      cacheClusterEnabled?: Boolean;
      /** The stage&#x27;s cache cluster size. **/
      cacheClusterSize?: CacheClusterSize;
      /** A map that defines the stage variables for the new Stage resource. Variable
names can have alphanumeric characters, and the values must match 
[A-Za-z0-9-._~:/?#&amp;=,]+ . **/
      variables?: MapOfStringToString;
    }
    export interface DeleteApiKeyRequest {
      /** The identifier of the ApiKey resource to be deleted. **/
      apiKey: String;
    }
    export interface DeleteAuthorizerRequest {
      /** The RestApi identifier for the Authorizer resource. **/
      restApiId: String;
      /** The identifier of the Authorizer resource. **/
      authorizerId: String;
    }
    export interface DeleteBasePathMappingRequest {
      /** The domain name of the BasePathMapping resource to delete. **/
      domainName: String;
      /** The base path name of the BasePathMapping resource to delete. **/
      basePath: String;
    }
    export interface DeleteClientCertificateRequest {
      clientCertificateId: String;
    }
    export interface DeleteDeploymentRequest {
      /** The identifier of the RestApi resource for the Deployment resource to delete. **/
      restApiId: String;
      /** The identifier of the Deployment resource to delete. **/
      deploymentId: String;
    }
    export interface DeleteDomainNameRequest {
      /** The name of the DomainName resource to be deleted. **/
      domainName: String;
    }
    export interface DeleteIntegrationRequest {
      /** Specifies a delete integration request&#x27;s API identifier. **/
      restApiId: String;
      /** Specifies a delete integration request&#x27;s resource identifier. **/
      resourceId: String;
      /** Specifies a delete integration request&#x27;s HTTP method. **/
      httpMethod: String;
    }
    export interface DeleteIntegrationResponseRequest {
      /** Specifies a delete integration response request&#x27;s API identifier. **/
      restApiId: String;
      /** Specifies a delete integration response request&#x27;s resource identifier. **/
      resourceId: String;
      /** Specifies a delete integration response request&#x27;s HTTP method. **/
      httpMethod: String;
      /** Specifies a delete integration response request&#x27;s status code. **/
      statusCode: StatusCode;
    }
    export interface DeleteMethodRequest {
      /** The RestApi identifier for the Method resource. **/
      restApiId: String;
      /** The Resource identifier for the Method resource. **/
      resourceId: String;
      /** The HTTP verb that identifies the Method resource. **/
      httpMethod: String;
    }
    export interface DeleteMethodResponseRequest {
      /** The RestApi identifier for the MethodResponse resource. **/
      restApiId: String;
      /** The Resource identifier for the MethodResponse resource. **/
      resourceId: String;
      /** The HTTP verb identifier for the parent Method resource. **/
      httpMethod: String;
      /** The status code identifier for the MethodResponse resource. **/
      statusCode: StatusCode;
    }
    export interface DeleteModelRequest {
      /** The RestApi under which the model will be deleted. **/
      restApiId: String;
      /** The name of the model to delete. **/
      modelName: String;
    }
    export interface DeleteResourceRequest {
      /** The RestApi identifier for the Resource resource. **/
      restApiId: String;
      /** The identifier of the Resource resource. **/
      resourceId: String;
    }
    export interface DeleteRestApiRequest {
      /** The ID of the RestApi you want to delete. **/
      restApiId: String;
    }
    export interface DeleteStageRequest {
      /** The identifier of the RestApi resource for the Stage resource to delete. **/
      restApiId: String;
      /** The name of the Stage resource to delete. **/
      stageName: String;
    }
    export interface Deployment {
      /** The identifier for the deployment resource. **/
      id?: String;
      /** The description for the deployment resource. **/
      description?: String;
      /** The date and time that the deployment resource was created. **/
      createdDate?: Timestamp;
      /** Gets a summary of the RestApi at the date and time that the deployment resource
was created. **/
      apiSummary?: PathToMapOfMethodSnapshot;
    }
    export interface Deployments {
      position?: String;
      /** The current page of any Deployment resources in the collection of deployment
resources. **/
      items?: ListOfDeployment;
    }
    export interface DomainName {
      /** The name of the DomainName resource. **/
      domainName?: String;
      /** The name of the certificate. **/
      certificateName?: String;
      /** The date when the certificate was uploaded, in ISO 8601 format
[http://www.iso.org/iso/home/standards/iso8601.htm] . **/
      certificateUploadDate?: Timestamp;
      /** The domain name of the Amazon CloudFront distribution. For more information, see
the Amazon CloudFront documentation
[http://aws.amazon.com/documentation/cloudfront/] . **/
      distributionDomainName?: String;
    }
    export interface DomainNames {
      position?: String;
      /** The current page of any DomainName resources in the collection of DomainName 
resources. **/
      items?: ListOfDomainName;
    }
    export interface ExportResponse {
      contentType?: String;
      contentDisposition?: String;
      body?: Blob;
    }
    export interface FlushStageAuthorizersCacheRequest {
      /** The API identifier of the stage to flush. **/
      restApiId: String;
      /** The name of the stage to flush. **/
      stageName: String;
    }
    export interface FlushStageCacheRequest {
      /** The API identifier of the stage to flush its cache. **/
      restApiId: String;
      /** The name of the stage to flush its cache. **/
      stageName: String;
    }
    export interface GenerateClientCertificateRequest {
      description?: String;
    }
    export interface GetAccountRequest {
    }
    export interface GetApiKeyRequest {
      /** The identifier of the ApiKey resource. **/
      apiKey: String;
    }
    export interface GetApiKeysRequest {
      /** The position of the current ApiKeys resource to get information about. **/
      position?: String;
      /** The maximum number of ApiKeys to get information about. **/
      limit?: NullableInteger;
    }
    export interface GetAuthorizerRequest {
      /** The RestApi identifier for the Authorizer resource. **/
      restApiId: String;
      /** The identifier of the Authorizer resource. **/
      authorizerId: String;
    }
    export interface GetAuthorizersRequest {
      /** The RestApi identifier for the Authorizers resource. **/
      restApiId: String;
      position?: String;
      limit?: NullableInteger;
    }
    export interface GetBasePathMappingRequest {
      /** The domain name of the BasePathMapping resource to be described. **/
      domainName: String;
      /** The base path name that callers of the API must provide as part of the URL after
the domain name. This value must be unique for all of the mappings across a
single API. Leave this blank if you do not want callers to specify any base path
name after the domain name. **/
      basePath: String;
    }
    export interface GetBasePathMappingsRequest {
      /** The domain name of a BasePathMapping resource. **/
      domainName: String;
      /** The position of the current BasePathMapping resource in the collection to get
information about. **/
      position?: String;
      /** The maximum number of BasePathMapping resources in the collection to get
information about. The default limit is 25. It should be an integer between 1 -
500. **/
      limit?: NullableInteger;
    }
    export interface GetClientCertificateRequest {
      clientCertificateId: String;
    }
    export interface GetClientCertificatesRequest {
      position?: String;
      limit?: NullableInteger;
    }
    export interface GetDeploymentRequest {
      /** The identifier of the RestApi resource for the Deployment resource to get
information about. **/
      restApiId: String;
      /** The identifier of the Deployment resource to get information about. **/
      deploymentId: String;
    }
    export interface GetDeploymentsRequest {
      /** The identifier of the RestApi resource for the collection of Deployment 
resources to get information about. **/
      restApiId: String;
      /** The position of the current Deployment resource in the collection to get
information about. **/
      position?: String;
      /** The maximum number of Deployment resources in the collection to get information
about. The default limit is 25. It should be an integer between 1 - 500. **/
      limit?: NullableInteger;
    }
    export interface GetDomainNameRequest {
      /** The name of the DomainName resource. **/
      domainName: String;
    }
    export interface GetDomainNamesRequest {
      /** The position of the current domain names to get information about. **/
      position?: String;
      /** The maximum number of DomainName resources in the collection to get information
about. The default limit is 25. It should be an integer between 1 - 500. **/
      limit?: NullableInteger;
    }
    export interface GetExportRequest {
      restApiId: String;
      stageName: String;
      exportType: String;
      parameters?: MapOfStringToString;
      accepts?: String;
    }
    export interface GetIntegrationRequest {
      /** Specifies a get integration request&#x27;s API identifier. **/
      restApiId: String;
      /** Specifies a get integration request&#x27;s resource identifier **/
      resourceId: String;
      /** Specifies a get integration request&#x27;s HTTP method. **/
      httpMethod: String;
    }
    export interface GetIntegrationResponseRequest {
      /** Specifies a get integration response request&#x27;s API identifier. **/
      restApiId: String;
      /** Specifies a get integration response request&#x27;s resource identifier. **/
      resourceId: String;
      /** Specifies a get integration response request&#x27;s HTTP method. **/
      httpMethod: String;
      /** Specifies a get integration response request&#x27;s status code. **/
      statusCode: StatusCode;
    }
    export interface GetMethodRequest {
      /** The RestApi identifier for the Method resource. **/
      restApiId: String;
      /** The Resource identifier for the Method resource. **/
      resourceId: String;
      /** Specifies the put method request&#x27;s HTTP method type. **/
      httpMethod: String;
    }
    export interface GetMethodResponseRequest {
      /** The RestApi identifier for the MethodResponse resource. **/
      restApiId: String;
      /** The Resource identifier for the MethodResponse resource. **/
      resourceId: String;
      /** The HTTP verb identifier for the parent Method resource. **/
      httpMethod: String;
      /** The status code identifier for the MethodResponse resource. **/
      statusCode: StatusCode;
    }
    export interface GetModelRequest {
      /** The RestApi identifier under which the Model exists. **/
      restApiId: String;
      /** The name of the model as an identifier. **/
      modelName: String;
      /** Resolves all external model references and returns a flattened model schema. **/
      flatten?: Boolean;
    }
    export interface GetModelTemplateRequest {
      /** The ID of the RestApi under which the model exists. **/
      restApiId: String;
      /** The name of the model for which to generate a template. **/
      modelName: String;
    }
    export interface GetModelsRequest {
      /** The RestApi identifier. **/
      restApiId: String;
      /** The position of the next set of results in the Models resource to get
information about. **/
      position?: String;
      /** The maximum number of models in the collection to get information about. The
default limit is 25. It should be an integer between 1 - 500. **/
      limit?: NullableInteger;
    }
    export interface GetResourceRequest {
      /** The RestApi identifier for the resource. **/
      restApiId: String;
      /** The identifier for the Resource resource. **/
      resourceId: String;
    }
    export interface GetResourcesRequest {
      /** The RestApi identifier for the Resource. **/
      restApiId: String;
      /** The position of the next set of results in the current Resources resource to get
information about. **/
      position?: String;
      /** The maximum number of Resource resources in the collection to get information
about. The default limit is 25. It should be an integer between 1 - 500. **/
      limit?: NullableInteger;
    }
    export interface GetRestApiRequest {
      /** The identifier of the RestApi resource. **/
      restApiId: String;
    }
    export interface GetRestApisRequest {
      /** The position of the current RestApis resource in the collection to get
information about. **/
      position?: String;
      /** The maximum number of RestApi resources in the collection to get information
about. The default limit is 25. It should be an integer between 1 - 500. **/
      limit?: NullableInteger;
    }
    export interface GetSdkRequest {
      restApiId: String;
      stageName: String;
      sdkType: String;
      parameters?: MapOfStringToString;
    }
    export interface GetStageRequest {
      /** The identifier of the RestApi resource for the Stage resource to get information
about. **/
      restApiId: String;
      /** The name of the Stage resource to get information about. **/
      stageName: String;
    }
    export interface GetStagesRequest {
      /** The stages&#x27; API identifiers. **/
      restApiId: String;
      /** The stages&#x27; deployment identifiers. **/
      deploymentId?: String;
    }
    export interface Integration {
      /** Specifies the integration&#x27;s type. **/
      type?: IntegrationType;
      /** Specifies the integration&#x27;s HTTP method type. **/
      httpMethod?: String;
      /** Specifies the integration&#x27;s Uniform Resource Identifier (URI). For HTTP
integrations, the URI must be a fully formed, encoded HTTP(S) URL according to
the RFC-3986 specification [https://www.ietf.org/rfc/rfc3986.txt] . For AWS
integrations, the URI should be of the form 
arn:aws:apigateway:{region}:{subdomain.service|service}:{path|action}/{service_api} 
. Region , subdomain and service are used to determine the right endpoint. For
AWS services that use the Action= query string parameter, service_api should be
a valid action for the desired service. For RESTful AWS service APIs, path is
used to indicate that the remaining substring in the URI should be treated as
the path to the resource, including the initial / . **/
      uri?: String;
      /** Specifies the credentials required for the integration, if any. For AWS
integrations, three options are available. To specify an IAM Role for Amazon API
Gateway to assume, use the role&#x27;s Amazon Resource Name (ARN). To require that
the caller&#x27;s identity be passed through from the request, specify the string 
arn:aws:iam::\&amp;#42;:user/\* . To use resource-based permissions on supported AWS
services, specify null. **/
      credentials?: String;
      /** Represents requests parameters that are sent with the backend request. Request
parameters are represented as a key/value map, with a destination as the key and
a source as the value. A source must match an existing method request parameter,
or a static value. Static values must be enclosed with single quotes, and be
pre-encoded based on their destination in the request. The destination must
match the pattern integration.request.{location}.{name} , where location is
either querystring, path, or header. name must be a valid, unique parameter
name. **/
      requestParameters?: MapOfStringToString;
      /** Specifies the integration&#x27;s request templates. **/
      requestTemplates?: MapOfStringToString;
      /** Specifies the integration&#x27;s cache namespace. **/
      cacheNamespace?: String;
      /** Specifies the integration&#x27;s cache key parameters. **/
      cacheKeyParameters?: ListOfString;
      /** Specifies the integration&#x27;s responses. **/
      integrationResponses?: MapOfIntegrationResponse;
    }
    export interface IntegrationResponse {
      /** Specifies the status code that is used to map the integration response to an
existing MethodResponse . **/
      statusCode?: StatusCode;
      /** Specifies the regular expression (regex) pattern used to choose an integration
response based on the response from the backend. If the backend is an AWS Lambda
function, the AWS Lambda function error header is matched. For all other HTTP
and AWS backends, the HTTP status code is matched. **/
      selectionPattern?: String;
      /** Represents response parameters that can be read from the backend response.
Response parameters are represented as a key/value map, with a destination as
the key and a source as the value. A destination must match an existing response
parameter in the MethodResponse . The source can be a header from the backend
response, or a static value. Static values are specified using enclosing single
quotes, and backend response headers can be read using the pattern 
integration.response.header.{name} . **/
      responseParameters?: MapOfStringToString;
      /** Specifies the templates used to transform the integration response body.
Response templates are represented as a key/value map, with a content-type as
the key and a template as the value. **/
      responseTemplates?: MapOfStringToString;
    }
    export interface LimitExceededException {
      retryAfterSeconds?: String;
      message?: String;
    }
    export interface Method {
      /** The HTTP method. **/
      httpMethod?: String;
      /** The method&#x27;s authorization type. **/
      authorizationType?: String;
      /** Specifies the identifier of an Authorizer to use on this Method. The
authorizationType must be CUSTOM. **/
      authorizerId?: String;
      /** Specifies whether the method requires a valid ApiKey . **/
      apiKeyRequired?: NullableBoolean;
      /** Represents request parameters that can be accepted by Amazon API Gateway.
Request parameters are represented as a key/value map, with a source as the key
and a Boolean flag as the value. The Boolean flag is used to specify whether the
parameter is required. A source must match the pattern 
method.request.{location}.{name} , where location is either querystring, path,
or header. name is a valid, unique parameter name. Sources specified here are
available to the integration for mapping to integration request parameters or
templates. **/
      requestParameters?: MapOfStringToBoolean;
      /** Specifies the Model resources used for the request&#x27;s content type. Request
models are represented as a key/value map, with a content type as the key and a 
Model name as the value. **/
      requestModels?: MapOfStringToString;
      /** Represents available responses that can be sent to the caller. Method responses
are represented as a key/value map, with an HTTP status code as the key and a 
MethodResponse as the value. The status codes are available for the Integration 
responses to map to. **/
      methodResponses?: MapOfMethodResponse;
      /** The method&#x27;s integration. **/
      methodIntegration?: Integration;
    }
    export interface MethodResponse {
      /** The method response&#x27;s status code. **/
      statusCode?: StatusCode;
      /** Represents response parameters that can be sent back to the caller by Amazon API
Gateway. Response parameters are represented as a key/value map, with a
destination as the key and a boolean flag as the value, which is used to specify
whether the parameter is required. A destination must match the pattern 
method.response.header.{name} , where name is a valid, unique header name.
Destinations specified here are available to the integration for mapping from
integration response parameters. **/
      responseParameters?: MapOfStringToBoolean;
      /** Specifies the Model resources used for the response&#x27;s content-type. Response
models are represented as a key/value map, with a content-type as the key and a 
Model name as the value. **/
      responseModels?: MapOfStringToString;
    }
    export interface MethodSetting {
      /** Specifies whether Amazon CloudWatch metrics are enabled for this method. The
PATCH path for this setting is /{method_setting_key}/metrics/enabled , and the
value is a Boolean. **/
      metricsEnabled?: Boolean;
      /** Specifies the logging level for this method, which effects the log entries
pushed to Amazon CloudWatch Logs. The PATCH path for this setting is 
/{method_setting_key}/logging/loglevel , and the available levels are OFF , 
ERROR , and INFO . **/
      loggingLevel?: String;
      /** Specifies the whether data trace logging is enabled for this method, which
effects the log entries pushed to Amazon CloudWatch Logs. The PATCH path for
this setting is /{method_setting_key}/logging/dataTrace , and the value is a
Boolean. **/
      dataTraceEnabled?: Boolean;
      /** Specifies the throttling burst limit. The PATCH path for this setting is 
/{method_setting_key}/throttling/burstLimit , and the value is an integer. **/
      throttlingBurstLimit?: Integer;
      /** Specifies the throttling rate limit. The PATCH path for this setting is 
/{method_setting_key}/throttling/rateLimit , and the value is a double. **/
      throttlingRateLimit?: Double;
      /** Specifies whether responses should be cached and returned for requests. A cache
cluster must be enabled on the stage for responses to be cached. The PATCH path
for this setting is /{method_setting_key}/caching/enabled , and the value is a
Boolean. **/
      cachingEnabled?: Boolean;
      /** Specifies the time to live (TTL) in seconds, for cached responses. The higher a
the TTL, the longer the response will be cached. The PATCH path for this setting
is /{method_setting_key}/caching/ttlInSeconds , and the value is an integer. **/
      cacheTtlInSeconds?: Integer;
      /** Specifies whether the cached responses are encrypted. The PATCH path for this
setting is /{method_setting_key}/caching/dataEncrypted , and the value is a
Boolean. **/
      cacheDataEncrypted?: Boolean;
      /** Specifies whether authorization is required for a cache invalidation request.
The PATCH path for this setting is 
/{method_setting_key}/caching/requireAuthorizationForCacheControl , and the
value is a Boolean. **/
      requireAuthorizationForCacheControl?: Boolean;
      /** Specifies the strategy on how to handle the unauthorized requests for cache
invalidation. The PATCH path for this setting is 
/{method_setting_key}/caching/unauthorizedCacheControlHeaderStrategy , and the
available values are FAIL_WITH_403 , SUCCEED_WITH_RESPONSE_HEADER , 
SUCCEED_WITHOUT_RESPONSE_HEADER . **/
      unauthorizedCacheControlHeaderStrategy?: UnauthorizedCacheControlHeaderStrategy;
    }
    export interface MethodSnapshot {
      /** Specifies the type of authorization used for the method. **/
      authorizationType?: String;
      /** Specifies whether the method requires a valid ApiKey . **/
      apiKeyRequired?: Boolean;
    }
    export interface Model {
      /** The identifier for the model resource. **/
      id?: String;
      /** The name of the model. **/
      name?: String;
      /** The description of the model. **/
      description?: String;
      /** The schema for the model. For application/json models, this should be 
JSON-schema draft v4 [http://json-schema.org/documentation.html] model. **/
      schema?: String;
      /** The content-type for the model. **/
      contentType?: String;
    }
    export interface Models {
      position?: String;
      /** Gets the current Model resource in the collection. **/
      items?: ListOfModel;
    }
    export interface NotFoundException {
      message?: String;
    }
    export interface PatchOperation {
      /** A patch operation whose value indicates the operation to perform. Its value MUST
be one of &quot;add&quot;, &quot;remove&quot;, &quot;replace&quot;, &quot;move&quot;, &quot;copy&quot;, or &quot;test&quot;; other values
are errors. **/
      op?: op;
      /** Operation objects MUST have exactly one &quot;path&quot; member. That member&#x27;s value is a
string containing a &#x60;JSON-Pointer&#x60; value that references a location within the
target document (the &quot;target location&quot;) where the operation is performed. **/
      path?: String;
      /** The actual value content. **/
      value?: String;
      /** The &quot;move&quot; and &quot;copy&quot; operation object MUST contain a &quot;from&quot; member, which is a
string containing a JSON Pointer value that references the location in the
target document to move the value from. **/
      from?: String;
    }
    export interface PutIntegrationRequest {
      /** Specifies a put integration request&#x27;s API identifier. **/
      restApiId: String;
      /** Specifies a put integration request&#x27;s resource ID. **/
      resourceId: String;
      /** Specifies a put integration request&#x27;s HTTP method. **/
      httpMethod: String;
      /** Specifies a put integration input&#x27;s type. **/
      type: IntegrationType;
      /** Specifies a put integration HTTP method. When the integration type is HTTP or
AWS, this field is required. **/
      integrationHttpMethod?: String;
      /** Specifies a put integration input&#x27;s Uniform Resource Identifier (URI). When the
integration type is HTTP or AWS, this field is required. **/
      uri?: String;
      /** Specifies whether credentials are required for a put integration. **/
      credentials?: String;
      /** Represents request parameters that are sent with the backend request. Request
parameters are represented as a key/value map, with a destination as the key and
a source as the value. A source must match an existing method request parameter,
or a static value. Static values must be enclosed with single quotes, and be
pre-encoded based on their destination in the request. The destination must
match the pattern integration.request.{location}.{name} , where location is
either querystring, path, or header. name must be a valid, unique parameter
name. **/
      requestParameters?: MapOfStringToString;
      /** Specifies the templates used to transform the method request body. Request
templates are represented as a key/value map, with a content-type as the key and
a template as the value. **/
      requestTemplates?: MapOfStringToString;
      /** Specifies a put integration input&#x27;s cache namespace. **/
      cacheNamespace?: String;
      /** Specifies a put integration input&#x27;s cache key parameters. **/
      cacheKeyParameters?: ListOfString;
    }
    export interface PutIntegrationResponseRequest {
      /** Specifies a put integration response request&#x27;s API identifier. **/
      restApiId: String;
      /** Specifies a put integration response request&#x27;s resource identifier. **/
      resourceId: String;
      /** Specifies a put integration response request&#x27;s HTTP method. **/
      httpMethod: String;
      /** Specifies the status code that is used to map the integration response to an
existing MethodResponse . **/
      statusCode: StatusCode;
      /** Specifies the selection pattern of a put integration response. **/
      selectionPattern?: String;
      /** Represents response parameters that can be read from the backend response.
Response parameters are represented as a key/value map, with a destination as
the key and a source as the value. A destination must match an existing response
parameter in the Method . The source can be a header from the backend response,
or a static value. Static values are specified using enclosing single quotes,
and backend response headers can be read using the pattern 
integration.response.header.{name} . **/
      responseParameters?: MapOfStringToString;
      /** Specifies a put integration response&#x27;s templates. **/
      responseTemplates?: MapOfStringToString;
    }
    export interface PutMethodRequest {
      /** The RestApi identifier for the new Method resource. **/
      restApiId: String;
      /** The Resource identifier for the new Method resource. **/
      resourceId: String;
      /** Specifies the put method request&#x27;s HTTP method type. **/
      httpMethod: String;
      /** Specifies the type of authorization used for the method. **/
      authorizationType: String;
      /** Specifies the identifier of an Authorizer to use on this Method, if the type is
CUSTOM. **/
      authorizerId?: String;
      /** Specifies whether the method required a valid ApiKey . **/
      apiKeyRequired?: Boolean;
      /** Represents requests parameters that are sent with the backend request. Request
parameters are represented as a key/value map, with a destination as the key and
a source as the value. A source must match an existing method request parameter,
or a static value. Static values must be enclosed with single quotes, and be
pre-encoded based on their destination in the request. The destination must
match the pattern integration.request.{location}.{name} , where location is
either querystring, path, or header. name must be a valid, unique parameter
name. **/
      requestParameters?: MapOfStringToBoolean;
      /** Specifies the Model resources used for the request&#x27;s content type. Request
models are represented as a key/value map, with a content type as the key and a 
Model name as the value. **/
      requestModels?: MapOfStringToString;
    }
    export interface PutMethodResponseRequest {
      /** The RestApi identifier for the Method resource. **/
      restApiId: String;
      /** The Resource identifier for the Method resource. **/
      resourceId: String;
      /** The HTTP verb that identifies the Method resource. **/
      httpMethod: String;
      /** The method response&#x27;s status code. **/
      statusCode: StatusCode;
      /** Represents response parameters that can be sent back to the caller by Amazon API
Gateway. Response parameters are represented as a key/value map, with a
destination as the key and a Boolean flag as the value. The Boolean flag is used
to specify whether the parameter is required. A destination must match the
pattern method.response.header.{name} , where name is a valid, unique header
name. Destinations specified here are available to the integration for mapping
from integration response parameters. **/
      responseParameters?: MapOfStringToBoolean;
      /** Specifies the Model resources used for the response&#x27;s content type. Response
models are represented as a key/value map, with a content type as the key and a 
Model name as the value. **/
      responseModels?: MapOfStringToString;
    }
    export interface Resource {
      /** The resource&#x27;s identifier. **/
      id?: String;
      /** The parent resource&#x27;s identifier. **/
      parentId?: String;
      /** The last path segment for this resource. **/
      pathPart?: String;
      /** The full path for this resource. **/
      path?: String;
      /** Map of methods for this resource, which is included only if requested using the 
embed option. **/
      resourceMethods?: MapOfMethod;
    }
    export interface Resources {
      position?: String;
      /** Gets the current Resource resource in the collection. **/
      items?: ListOfResource;
    }
    export interface RestApi {
      /** The API&#x27;s identifier. This identifier is unique across all of your APIs in
Amazon API Gateway. **/
      id?: String;
      /** The API&#x27;s name. **/
      name?: String;
      /** The API&#x27;s description. **/
      description?: String;
      /** The date when the API was created, in ISO 8601 format
[http://www.iso.org/iso/home/standards/iso8601.htm] . **/
      createdDate?: Timestamp;
    }
    export interface RestApis {
      position?: String;
      /** An array of links to the current page of RestApi resources. **/
      items?: ListOfRestApi;
    }
    export interface SdkResponse {
      contentType?: String;
      contentDisposition?: String;
      body?: Blob;
    }
    export interface ServiceUnavailableException {
      retryAfterSeconds?: String;
      message?: String;
    }
    export interface Stage {
      /** The identifier of the Deployment that the stage points to. **/
      deploymentId?: String;
      clientCertificateId?: String;
      /** The name of the stage is the first path segment in the Uniform Resource
Identifier (URI) of a call to Amazon API Gateway. **/
      stageName?: String;
      /** The stage&#x27;s description. **/
      description?: String;
      /** Specifies whether a cache cluster is enabled for the stage. **/
      cacheClusterEnabled?: Boolean;
      /** The size of the cache cluster for the stage, if enabled. **/
      cacheClusterSize?: CacheClusterSize;
      /** The status of the cache cluster for the stage, if enabled. **/
      cacheClusterStatus?: CacheClusterStatus;
      /** A map that defines the method settings for a Stage resource. Keys are defined as 
{resource_path}/{http_method} for an individual method override, or \&amp;#42;/\* for
the settings applied to all methods in the stage. **/
      methodSettings?: MapOfMethodSettings;
      /** A map that defines the stage variables for a Stage resource. Variable names can
have alphanumeric characters, and the values must match [A-Za-z0-9-._~:/?#&amp;=,]+ 
. **/
      variables?: MapOfStringToString;
      /** The date and time that the stage was created, in ISO 8601 format
[http://www.iso.org/iso/home/standards/iso8601.htm] . **/
      createdDate?: Timestamp;
      /** The date and time that information about the stage was last updated, in ISO 8601
format [http://www.iso.org/iso/home/standards/iso8601.htm] . **/
      lastUpdatedDate?: Timestamp;
    }
    export interface StageKey {
      /** A list of Stage resources that are associated with the ApiKey resource. **/
      restApiId?: String;
      /** The stage name in the RestApi that the stage key references. **/
      stageName?: String;
    }
    export interface Stages {
      /** An individual Stage resource. **/
      item?: ListOfStage;
    }
    export interface Template {
      /** The Apache Velocity Template Language (VTL)
[http://velocity.apache.org/engine/devel/vtl-reference-guide.html] template
content used for the template resource. **/
      value?: String;
    }
    export interface TestInvokeAuthorizerRequest {
      restApiId: String;
      authorizerId: String;
      headers?: MapOfHeaderValues;
      pathWithQueryString?: String;
      body?: String;
      stageVariables?: MapOfStringToString;
      additionalContext?: MapOfStringToString;
    }
    export interface TestInvokeAuthorizerResponse {
      /** The HTTP status code that the client would have received. Value is 0 if the
authorizer succeeded. **/
      clientStatus?: Integer;
      /** The Amazon API Gateway execution log for the test authorizer request. **/
      log?: String;
      /** The execution latency of the test authorizer request **/
      latency?: Long;
      /** The principal identity returned by the Authorizer **/
      principalId?: String;
      /** The policy JSON document returned by the Authorizer **/
      policy?: String;
      authorization?: MapOfStringToList;
    }
    export interface TestInvokeMethodRequest {
      restApiId: String;
      resourceId: String;
      httpMethod: String;
      pathWithQueryString?: String;
      body?: String;
      headers?: MapOfHeaderValues;
      clientCertificateId?: String;
      stageVariables?: MapOfStringToString;
    }
    export interface TestInvokeMethodResponse {
      /** The HTTP status code. **/
      status?: Integer;
      /** The body of HTTP response. **/
      body?: String;
      /** The headers of HTTP response. **/
      headers?: MapOfHeaderValues;
      /** The Amazon API Gateway execution log for the test invoke request. **/
      log?: String;
      /** The execution latency of the test invoke request. **/
      latency?: Long;
    }
    export interface ThrottleSettings {
      /** Returns the burstLimit when ThrottleSettings is called. **/
      burstLimit?: Integer;
      /** Returns the rateLimit when ThrottleSettings is called. **/
      rateLimit?: Double;
    }
    export interface TooManyRequestsException {
      retryAfterSeconds?: String;
      message?: String;
    }
    export interface UnauthorizedException {
      message?: String;
    }
    export interface UpdateAccountRequest {
      /** A list of operations describing the updates to apply to the specified resource.
The patches are applied in the order specified in the list. **/
      patchOperations?: ListOfPatchOperation;
    }
    export interface UpdateApiKeyRequest {
      /** The identifier of the ApiKey resource to be updated. **/
      apiKey: String;
      /** A list of operations describing the updates to apply to the specified resource.
The patches are applied in the order specified in the list. **/
      patchOperations?: ListOfPatchOperation;
    }
    export interface UpdateAuthorizerRequest {
      /** The RestApi identifier for the Authorizer resource. **/
      restApiId: String;
      /** The identifier of the Authorizer resource. **/
      authorizerId: String;
      /** A list of operations describing the updates to apply to the specified resource.
The patches are applied in the order specified in the list. **/
      patchOperations?: ListOfPatchOperation;
    }
    export interface UpdateBasePathMappingRequest {
      /** The domain name of the BasePathMapping resource to change. **/
      domainName: String;
      /** The base path of the BasePathMapping resource to change. **/
      basePath: String;
      /** A list of operations describing the updates to apply to the specified resource.
The patches are applied in the order specified in the list. **/
      patchOperations?: ListOfPatchOperation;
    }
    export interface UpdateClientCertificateRequest {
      clientCertificateId: String;
      /** A list of operations describing the updates to apply to the specified resource.
The patches are applied in the order specified in the list. **/
      patchOperations?: ListOfPatchOperation;
    }
    export interface UpdateDeploymentRequest {
      /** The replacement identifier of the RestApi resource for the Deployment resource
to change information about. **/
      restApiId: String;
      /** The replacment identifier for the Deployment resource to change information
about. **/
      deploymentId: String;
      /** A list of operations describing the updates to apply to the specified resource.
The patches are applied in the order specified in the list. **/
      patchOperations?: ListOfPatchOperation;
    }
    export interface UpdateDomainNameRequest {
      /** The name of the DomainName resource to be changed. **/
      domainName: String;
      /** A list of operations describing the updates to apply to the specified resource.
The patches are applied in the order specified in the list. **/
      patchOperations?: ListOfPatchOperation;
    }
    export interface UpdateIntegrationRequest {
      /** Represents an update integration request&#x27;s API identifier. **/
      restApiId: String;
      /** Represents an update integration request&#x27;s resource identifier. **/
      resourceId: String;
      /** Represents an update integration request&#x27;s HTTP method. **/
      httpMethod: String;
      /** A list of operations describing the updates to apply to the specified resource.
The patches are applied in the order specified in the list. **/
      patchOperations?: ListOfPatchOperation;
    }
    export interface UpdateIntegrationResponseRequest {
      /** Specifies an update integration response request&#x27;s API identifier. **/
      restApiId: String;
      /** Specifies an update integration response request&#x27;s resource identifier. **/
      resourceId: String;
      /** Specifies an update integration response request&#x27;s HTTP method. **/
      httpMethod: String;
      /** Specifies an update integration response request&#x27;s status code. **/
      statusCode: StatusCode;
      /** A list of operations describing the updates to apply to the specified resource.
The patches are applied in the order specified in the list. **/
      patchOperations?: ListOfPatchOperation;
    }
    export interface UpdateMethodRequest {
      /** The RestApi identifier for the Method resource. **/
      restApiId: String;
      /** The Resource identifier for the Method resource. **/
      resourceId: String;
      /** The HTTP verb that identifies the Method resource. **/
      httpMethod: String;
      /** A list of operations describing the updates to apply to the specified resource.
The patches are applied in the order specified in the list. **/
      patchOperations?: ListOfPatchOperation;
    }
    export interface UpdateMethodResponseRequest {
      /** The RestApi identifier for the MethodResponse resource. **/
      restApiId: String;
      /** The Resource identifier for the MethodResponse resource. **/
      resourceId: String;
      /** The HTTP verb identifier for the parent Method resource. **/
      httpMethod: String;
      /** The status code identifier for the MethodResponse resource. **/
      statusCode: StatusCode;
      /** A list of operations describing the updates to apply to the specified resource.
The patches are applied in the order specified in the list. **/
      patchOperations?: ListOfPatchOperation;
    }
    export interface UpdateModelRequest {
      /** The RestApi identifier under which the model exists. **/
      restApiId: String;
      /** The name of the model to update. **/
      modelName: String;
      /** A list of operations describing the updates to apply to the specified resource.
The patches are applied in the order specified in the list. **/
      patchOperations?: ListOfPatchOperation;
    }
    export interface UpdateResourceRequest {
      /** The RestApi identifier for the Resource resource. **/
      restApiId: String;
      /** The identifier of the Resource resource. **/
      resourceId: String;
      /** A list of operations describing the updates to apply to the specified resource.
The patches are applied in the order specified in the list. **/
      patchOperations?: ListOfPatchOperation;
    }
    export interface UpdateRestApiRequest {
      /** The ID of the RestApi you want to update. **/
      restApiId: String;
      /** A list of operations describing the updates to apply to the specified resource.
The patches are applied in the order specified in the list. **/
      patchOperations?: ListOfPatchOperation;
    }
    export interface UpdateStageRequest {
      /** The identifier of the RestApi resource for the Stage resource to change
information about. **/
      restApiId: String;
      /** The name of the Stage resource to change information about. **/
      stageName: String;
      /** A list of operations describing the updates to apply to the specified resource.
The patches are applied in the order specified in the list. **/
      patchOperations?: ListOfPatchOperation;
    }
  }
}
