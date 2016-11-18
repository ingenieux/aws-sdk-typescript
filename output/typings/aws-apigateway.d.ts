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
   * Amazon API GatewayAmazon API Gateway helps developers deliver robust, secure,
and scalable mobile and web application back ends. Amazon API Gateway allows
developers to securely connect mobile and web applications to APIs that run on
AWS Lambda, Amazon EC2, or other publicly addressable web services that are
hosted outside of AWS.
   *
   */
  export class APIGateway extends Service {
    constructor(options?: any);
    endpoint: Endpoint;
    /**
     * Create an ApiKey resource.

AWS CLI
[http://docs.aws.amazon.com/cli/latest/reference/apigateway/create-api-key.html]
     *
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error TooManyRequestsException   
     * @error LimitExceededException   
     * @error BadRequestException   
     * @error ConflictException   
     */
    createApiKey(params: APIGateway.CreateApiKeyRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|APIGateway.LimitExceededException|APIGateway.BadRequestException|APIGateway.ConflictException|any, data: APIGateway.ApiKey|any) => void): Request<APIGateway.ApiKey|any,APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|APIGateway.LimitExceededException|APIGateway.BadRequestException|APIGateway.ConflictException|any>;
    /**
     * Adds a new Authorizer resource to an existing RestApi resource.

AWS CLI
[http://docs.aws.amazon.com/cli/latest/reference/apigateway/create-authorizer.html]
     *
     * @error BadRequestException   
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error LimitExceededException   
     * @error TooManyRequestsException   
     */
    createAuthorizer(params: APIGateway.CreateAuthorizerRequest, callback?: (err: APIGateway.BadRequestException|APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.LimitExceededException|APIGateway.TooManyRequestsException|any, data: APIGateway.Authorizer|any) => void): Request<APIGateway.Authorizer|any,APIGateway.BadRequestException|APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.LimitExceededException|APIGateway.TooManyRequestsException|any>;
    /**
     * Creates a new BasePathMapping resource.
     *
     * @error UnauthorizedException   
     * @error ConflictException   
     * @error BadRequestException   
     * @error NotFoundException   
     * @error TooManyRequestsException   
     */
    createBasePathMapping(params: APIGateway.CreateBasePathMappingRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.ConflictException|APIGateway.BadRequestException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|any, data: APIGateway.BasePathMapping|any) => void): Request<APIGateway.BasePathMapping|any,APIGateway.UnauthorizedException|APIGateway.ConflictException|APIGateway.BadRequestException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|any>;
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
    createDeployment(params: APIGateway.CreateDeploymentRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.BadRequestException|APIGateway.NotFoundException|APIGateway.ConflictException|APIGateway.LimitExceededException|APIGateway.TooManyRequestsException|APIGateway.ServiceUnavailableException|any, data: APIGateway.Deployment|any) => void): Request<APIGateway.Deployment|any,APIGateway.UnauthorizedException|APIGateway.BadRequestException|APIGateway.NotFoundException|APIGateway.ConflictException|APIGateway.LimitExceededException|APIGateway.TooManyRequestsException|APIGateway.ServiceUnavailableException|any>;
    /**
     * Creates a new domain name.
     *
     * @error UnauthorizedException   
     * @error BadRequestException   
     * @error ConflictException   
     * @error TooManyRequestsException   
     */
    createDomainName(params: APIGateway.CreateDomainNameRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.BadRequestException|APIGateway.ConflictException|APIGateway.TooManyRequestsException|any, data: APIGateway.DomainName|any) => void): Request<APIGateway.DomainName|any,APIGateway.UnauthorizedException|APIGateway.BadRequestException|APIGateway.ConflictException|APIGateway.TooManyRequestsException|any>;
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
    createModel(params: APIGateway.CreateModelRequest, callback?: (err: APIGateway.BadRequestException|APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.ConflictException|APIGateway.LimitExceededException|APIGateway.TooManyRequestsException|any, data: APIGateway.Model|any) => void): Request<APIGateway.Model|any,APIGateway.BadRequestException|APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.ConflictException|APIGateway.LimitExceededException|APIGateway.TooManyRequestsException|any>;
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
    createResource(params: APIGateway.CreateResourceRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.ConflictException|APIGateway.LimitExceededException|APIGateway.BadRequestException|APIGateway.TooManyRequestsException|any, data: APIGateway.Resource|any) => void): Request<APIGateway.Resource|any,APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.ConflictException|APIGateway.LimitExceededException|APIGateway.BadRequestException|APIGateway.TooManyRequestsException|any>;
    /**
     * Creates a new RestApi resource.
     *
     * @error UnauthorizedException   
     * @error LimitExceededException   
     * @error BadRequestException   
     * @error TooManyRequestsException   
     */
    createRestApi(params: APIGateway.CreateRestApiRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.LimitExceededException|APIGateway.BadRequestException|APIGateway.TooManyRequestsException|any, data: APIGateway.RestApi|any) => void): Request<APIGateway.RestApi|any,APIGateway.UnauthorizedException|APIGateway.LimitExceededException|APIGateway.BadRequestException|APIGateway.TooManyRequestsException|any>;
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
    createStage(params: APIGateway.CreateStageRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.BadRequestException|APIGateway.NotFoundException|APIGateway.ConflictException|APIGateway.LimitExceededException|APIGateway.TooManyRequestsException|any, data: APIGateway.Stage|any) => void): Request<APIGateway.Stage|any,APIGateway.UnauthorizedException|APIGateway.BadRequestException|APIGateway.NotFoundException|APIGateway.ConflictException|APIGateway.LimitExceededException|APIGateway.TooManyRequestsException|any>;
    /**
     * Creates a usage plan with the throttle and quota limits, as well as the
associated API stages, specified in the payload.
     *
     * @error BadRequestException   
     * @error UnauthorizedException   
     * @error TooManyRequestsException   
     * @error LimitExceededException   
     * @error ConflictException   
     * @error NotFoundException   
     */
    createUsagePlan(params: APIGateway.CreateUsagePlanRequest, callback?: (err: APIGateway.BadRequestException|APIGateway.UnauthorizedException|APIGateway.TooManyRequestsException|APIGateway.LimitExceededException|APIGateway.ConflictException|APIGateway.NotFoundException|any, data: APIGateway.UsagePlan|any) => void): Request<APIGateway.UsagePlan|any,APIGateway.BadRequestException|APIGateway.UnauthorizedException|APIGateway.TooManyRequestsException|APIGateway.LimitExceededException|APIGateway.ConflictException|APIGateway.NotFoundException|any>;
    /**
     * Creates a usage plan key for adding an existing API key to a usage plan.
     *
     * @error BadRequestException   
     * @error ConflictException   
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error TooManyRequestsException   
     */
    createUsagePlanKey(params: APIGateway.CreateUsagePlanKeyRequest, callback?: (err: APIGateway.BadRequestException|APIGateway.ConflictException|APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|any, data: APIGateway.UsagePlanKey|any) => void): Request<APIGateway.UsagePlanKey|any,APIGateway.BadRequestException|APIGateway.ConflictException|APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|any>;
    /**
     * Deletes the ApiKey resource.
     *
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error TooManyRequestsException   
     */
    deleteApiKey(params: APIGateway.DeleteApiKeyRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|any, data: any) => void): Request<any,APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|any>;
    /**
     * Deletes an existing Authorizer resource.

AWS CLI
[http://docs.aws.amazon.com/cli/latest/reference/apigateway/delete-authorizer.html]
     *
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error TooManyRequestsException   
     * @error BadRequestException   
     * @error ConflictException   
     */
    deleteAuthorizer(params: APIGateway.DeleteAuthorizerRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|APIGateway.BadRequestException|APIGateway.ConflictException|any, data: any) => void): Request<any,APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|APIGateway.BadRequestException|APIGateway.ConflictException|any>;
    /**
     * Deletes the BasePathMapping resource.
     *
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error TooManyRequestsException   
     */
    deleteBasePathMapping(params: APIGateway.DeleteBasePathMappingRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|any, data: any) => void): Request<any,APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|any>;
    /**
     * Deletes the ClientCertificate resource.
     *
     * @error UnauthorizedException   
     * @error TooManyRequestsException   
     * @error BadRequestException   
     * @error NotFoundException   
     */
    deleteClientCertificate(params: APIGateway.DeleteClientCertificateRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.TooManyRequestsException|APIGateway.BadRequestException|APIGateway.NotFoundException|any, data: any) => void): Request<any,APIGateway.UnauthorizedException|APIGateway.TooManyRequestsException|APIGateway.BadRequestException|APIGateway.NotFoundException|any>;
    /**
     * Deletes a Deployment resource. Deleting a deployment will only succeed if there
are no Stage resources associated with it.
     *
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error BadRequestException   
     * @error TooManyRequestsException   
     */
    deleteDeployment(params: APIGateway.DeleteDeploymentRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.BadRequestException|APIGateway.TooManyRequestsException|any, data: any) => void): Request<any,APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.BadRequestException|APIGateway.TooManyRequestsException|any>;
    /**
     * Deletes the DomainName resource.
     *
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error TooManyRequestsException   
     */
    deleteDomainName(params: APIGateway.DeleteDomainNameRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|any, data: any) => void): Request<any,APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|any>;
    /**
     * Represents a delete integration.
     *
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error TooManyRequestsException   
     * @error ConflictException   
     */
    deleteIntegration(params: APIGateway.DeleteIntegrationRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|APIGateway.ConflictException|any, data: any) => void): Request<any,APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|APIGateway.ConflictException|any>;
    /**
     * Represents a delete integration response.
     *
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error TooManyRequestsException   
     * @error BadRequestException   
     * @error ConflictException   
     */
    deleteIntegrationResponse(params: APIGateway.DeleteIntegrationResponseRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|APIGateway.BadRequestException|APIGateway.ConflictException|any, data: any) => void): Request<any,APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|APIGateway.BadRequestException|APIGateway.ConflictException|any>;
    /**
     * Deletes an existing Method resource.
     *
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error TooManyRequestsException   
     * @error ConflictException   
     */
    deleteMethod(params: APIGateway.DeleteMethodRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|APIGateway.ConflictException|any, data: any) => void): Request<any,APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|APIGateway.ConflictException|any>;
    /**
     * Deletes an existing MethodResponse resource.
     *
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error TooManyRequestsException   
     * @error BadRequestException   
     * @error ConflictException   
     */
    deleteMethodResponse(params: APIGateway.DeleteMethodResponseRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|APIGateway.BadRequestException|APIGateway.ConflictException|any, data: any) => void): Request<any,APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|APIGateway.BadRequestException|APIGateway.ConflictException|any>;
    /**
     * Deletes a model.
     *
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error TooManyRequestsException   
     * @error BadRequestException   
     * @error ConflictException   
     */
    deleteModel(params: APIGateway.DeleteModelRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|APIGateway.BadRequestException|APIGateway.ConflictException|any, data: any) => void): Request<any,APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|APIGateway.BadRequestException|APIGateway.ConflictException|any>;
    /**
     * Deletes a Resource resource.
     *
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error BadRequestException   
     * @error ConflictException   
     * @error TooManyRequestsException   
     */
    deleteResource(params: APIGateway.DeleteResourceRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.BadRequestException|APIGateway.ConflictException|APIGateway.TooManyRequestsException|any, data: any) => void): Request<any,APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.BadRequestException|APIGateway.ConflictException|APIGateway.TooManyRequestsException|any>;
    /**
     * Deletes the specified API.
     *
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error TooManyRequestsException   
     * @error BadRequestException   
     */
    deleteRestApi(params: APIGateway.DeleteRestApiRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|APIGateway.BadRequestException|any, data: any) => void): Request<any,APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|APIGateway.BadRequestException|any>;
    /**
     * Deletes a Stage resource.
     *
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error TooManyRequestsException   
     * @error BadRequestException   
     */
    deleteStage(params: APIGateway.DeleteStageRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|APIGateway.BadRequestException|any, data: any) => void): Request<any,APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|APIGateway.BadRequestException|any>;
    /**
     * Deletes a usage plan of a given plan Id.
     *
     * @error UnauthorizedException   
     * @error TooManyRequestsException   
     * @error BadRequestException   
     * @error NotFoundException   
     */
    deleteUsagePlan(params: APIGateway.DeleteUsagePlanRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.TooManyRequestsException|APIGateway.BadRequestException|APIGateway.NotFoundException|any, data: any) => void): Request<any,APIGateway.UnauthorizedException|APIGateway.TooManyRequestsException|APIGateway.BadRequestException|APIGateway.NotFoundException|any>;
    /**
     * Deletes a usage plan key and remove the underlying API key from the associated
usage plan.
     *
     * @error BadRequestException   
     * @error ConflictException   
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error TooManyRequestsException   
     */
    deleteUsagePlanKey(params: APIGateway.DeleteUsagePlanKeyRequest, callback?: (err: APIGateway.BadRequestException|APIGateway.ConflictException|APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|any, data: any) => void): Request<any,APIGateway.BadRequestException|APIGateway.ConflictException|APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|any>;
    /**
     * Flushes all authorizer cache entries on a stage.
     *
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error BadRequestException   
     * @error TooManyRequestsException   
     */
    flushStageAuthorizersCache(params: APIGateway.FlushStageAuthorizersCacheRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.BadRequestException|APIGateway.TooManyRequestsException|any, data: any) => void): Request<any,APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.BadRequestException|APIGateway.TooManyRequestsException|any>;
    /**
     * Flushes a stage&#x27;s cache.
     *
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error BadRequestException   
     * @error TooManyRequestsException   
     */
    flushStageCache(params: APIGateway.FlushStageCacheRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.BadRequestException|APIGateway.TooManyRequestsException|any, data: any) => void): Request<any,APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.BadRequestException|APIGateway.TooManyRequestsException|any>;
    /**
     * Generates a ClientCertificate resource.
     *
     * @error UnauthorizedException   
     * @error TooManyRequestsException   
     * @error LimitExceededException   
     */
    generateClientCertificate(params: APIGateway.GenerateClientCertificateRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.TooManyRequestsException|APIGateway.LimitExceededException|any, data: APIGateway.ClientCertificate|any) => void): Request<APIGateway.ClientCertificate|any,APIGateway.UnauthorizedException|APIGateway.TooManyRequestsException|APIGateway.LimitExceededException|any>;
    /**
     * Gets information about the current Account resource.
     *
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error TooManyRequestsException   
     */
    getAccount(params: APIGateway.GetAccountRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|any, data: APIGateway.Account|any) => void): Request<APIGateway.Account|any,APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|any>;
    /**
     * Gets information about the current ApiKey resource.
     *
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error TooManyRequestsException   
     */
    getApiKey(params: APIGateway.GetApiKeyRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|any, data: APIGateway.ApiKey|any) => void): Request<APIGateway.ApiKey|any,APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|any>;
    /**
     * Gets information about the current ApiKeys resource.
     *
     * @error BadRequestException   
     * @error UnauthorizedException   
     * @error TooManyRequestsException   
     */
    getApiKeys(params: APIGateway.GetApiKeysRequest, callback?: (err: APIGateway.BadRequestException|APIGateway.UnauthorizedException|APIGateway.TooManyRequestsException|any, data: APIGateway.ApiKeys|any) => void): Request<APIGateway.ApiKeys|any,APIGateway.BadRequestException|APIGateway.UnauthorizedException|APIGateway.TooManyRequestsException|any>;
    /**
     * Describe an existing Authorizer resource.

AWS CLI
[http://docs.aws.amazon.com/cli/latest/reference/apigateway/get-authorizer.html]
     *
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error TooManyRequestsException   
     */
    getAuthorizer(params: APIGateway.GetAuthorizerRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|any, data: APIGateway.Authorizer|any) => void): Request<APIGateway.Authorizer|any,APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|any>;
    /**
     * Describe an existing Authorizers resource.

AWS CLI
[http://docs.aws.amazon.com/cli/latest/reference/apigateway/get-authorizers.html]
     *
     * @error BadRequestException   
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error TooManyRequestsException   
     */
    getAuthorizers(params: APIGateway.GetAuthorizersRequest, callback?: (err: APIGateway.BadRequestException|APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|any, data: APIGateway.Authorizers|any) => void): Request<APIGateway.Authorizers|any,APIGateway.BadRequestException|APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|any>;
    /**
     * Describe a BasePathMapping resource.
     *
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error TooManyRequestsException   
     */
    getBasePathMapping(params: APIGateway.GetBasePathMappingRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|any, data: APIGateway.BasePathMapping|any) => void): Request<APIGateway.BasePathMapping|any,APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|any>;
    /**
     * Represents a collection of BasePathMapping resources.
     *
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error TooManyRequestsException   
     */
    getBasePathMappings(params: APIGateway.GetBasePathMappingsRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|any, data: APIGateway.BasePathMappings|any) => void): Request<APIGateway.BasePathMappings|any,APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|any>;
    /**
     * Gets information about the current ClientCertificate resource.
     *
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error TooManyRequestsException   
     */
    getClientCertificate(params: APIGateway.GetClientCertificateRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|any, data: APIGateway.ClientCertificate|any) => void): Request<APIGateway.ClientCertificate|any,APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|any>;
    /**
     * Gets a collection of ClientCertificate resources.
     *
     * @error BadRequestException   
     * @error UnauthorizedException   
     * @error TooManyRequestsException   
     */
    getClientCertificates(params: APIGateway.GetClientCertificatesRequest, callback?: (err: APIGateway.BadRequestException|APIGateway.UnauthorizedException|APIGateway.TooManyRequestsException|any, data: APIGateway.ClientCertificates|any) => void): Request<APIGateway.ClientCertificates|any,APIGateway.BadRequestException|APIGateway.UnauthorizedException|APIGateway.TooManyRequestsException|any>;
    /**
     * Gets information about a Deployment resource.
     *
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error TooManyRequestsException   
     * @error ServiceUnavailableException   
     */
    getDeployment(params: APIGateway.GetDeploymentRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|APIGateway.ServiceUnavailableException|any, data: APIGateway.Deployment|any) => void): Request<APIGateway.Deployment|any,APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|APIGateway.ServiceUnavailableException|any>;
    /**
     * Gets information about a Deployments collection.
     *
     * @error BadRequestException   
     * @error UnauthorizedException   
     * @error TooManyRequestsException   
     * @error ServiceUnavailableException   
     */
    getDeployments(params: APIGateway.GetDeploymentsRequest, callback?: (err: APIGateway.BadRequestException|APIGateway.UnauthorizedException|APIGateway.TooManyRequestsException|APIGateway.ServiceUnavailableException|any, data: APIGateway.Deployments|any) => void): Request<APIGateway.Deployments|any,APIGateway.BadRequestException|APIGateway.UnauthorizedException|APIGateway.TooManyRequestsException|APIGateway.ServiceUnavailableException|any>;
    /**
     * Represents a domain name that is contained in a simpler, more intuitive URL that
can be called.
     *
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error ServiceUnavailableException   
     * @error TooManyRequestsException   
     */
    getDomainName(params: APIGateway.GetDomainNameRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.ServiceUnavailableException|APIGateway.TooManyRequestsException|any, data: APIGateway.DomainName|any) => void): Request<APIGateway.DomainName|any,APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.ServiceUnavailableException|APIGateway.TooManyRequestsException|any>;
    /**
     * Represents a collection of DomainName resources.
     *
     * @error BadRequestException   
     * @error UnauthorizedException   
     * @error TooManyRequestsException   
     */
    getDomainNames(params: APIGateway.GetDomainNamesRequest, callback?: (err: APIGateway.BadRequestException|APIGateway.UnauthorizedException|APIGateway.TooManyRequestsException|any, data: APIGateway.DomainNames|any) => void): Request<APIGateway.DomainNames|any,APIGateway.BadRequestException|APIGateway.UnauthorizedException|APIGateway.TooManyRequestsException|any>;
    /**
     * Exports a deployed version of a RestApi in a specified format.
     *
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error BadRequestException   
     * @error TooManyRequestsException   
     */
    getExport(params: APIGateway.GetExportRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.BadRequestException|APIGateway.TooManyRequestsException|any, data: APIGateway.ExportResponse|any) => void): Request<APIGateway.ExportResponse|any,APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.BadRequestException|APIGateway.TooManyRequestsException|any>;
    /**
     * Represents a get integration.
     *
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error TooManyRequestsException   
     */
    getIntegration(params: APIGateway.GetIntegrationRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|any, data: APIGateway.Integration|any) => void): Request<APIGateway.Integration|any,APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|any>;
    /**
     * Represents a get integration response.
     *
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error TooManyRequestsException   
     */
    getIntegrationResponse(params: APIGateway.GetIntegrationResponseRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|any, data: APIGateway.IntegrationResponse|any) => void): Request<APIGateway.IntegrationResponse|any,APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|any>;
    /**
     * Describe an existing Method resource.
     *
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error TooManyRequestsException   
     */
    getMethod(params: APIGateway.GetMethodRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|any, data: APIGateway.Method|any) => void): Request<APIGateway.Method|any,APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|any>;
    /**
     * Describes a MethodResponse resource.
     *
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error TooManyRequestsException   
     */
    getMethodResponse(params: APIGateway.GetMethodResponseRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|any, data: APIGateway.MethodResponse|any) => void): Request<APIGateway.MethodResponse|any,APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|any>;
    /**
     * Describes an existing model defined for a RestApi resource.
     *
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error TooManyRequestsException   
     */
    getModel(params: APIGateway.GetModelRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|any, data: APIGateway.Model|any) => void): Request<APIGateway.Model|any,APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|any>;
    /**
     * Generates a sample mapping template that can be used to transform a payload into
the structure of a model.
     *
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error BadRequestException   
     * @error TooManyRequestsException   
     */
    getModelTemplate(params: APIGateway.GetModelTemplateRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.BadRequestException|APIGateway.TooManyRequestsException|any, data: APIGateway.Template|any) => void): Request<APIGateway.Template|any,APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.BadRequestException|APIGateway.TooManyRequestsException|any>;
    /**
     * Describes existing Models defined for a RestApi resource.
     *
     * @error BadRequestException   
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error TooManyRequestsException   
     */
    getModels(params: APIGateway.GetModelsRequest, callback?: (err: APIGateway.BadRequestException|APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|any, data: APIGateway.Models|any) => void): Request<APIGateway.Models|any,APIGateway.BadRequestException|APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|any>;
    /**
     * Lists information about a resource.
     *
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error TooManyRequestsException   
     */
    getResource(params: APIGateway.GetResourceRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|any, data: APIGateway.Resource|any) => void): Request<APIGateway.Resource|any,APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|any>;
    /**
     * Lists information about a collection of Resource resources.
     *
     * @error BadRequestException   
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error TooManyRequestsException   
     */
    getResources(params: APIGateway.GetResourcesRequest, callback?: (err: APIGateway.BadRequestException|APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|any, data: APIGateway.Resources|any) => void): Request<APIGateway.Resources|any,APIGateway.BadRequestException|APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|any>;
    /**
     * Lists the RestApi resource in the collection.
     *
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error TooManyRequestsException   
     */
    getRestApi(params: APIGateway.GetRestApiRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|any, data: APIGateway.RestApi|any) => void): Request<APIGateway.RestApi|any,APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|any>;
    /**
     * Lists the RestApis resources for your collection.
     *
     * @error BadRequestException   
     * @error UnauthorizedException   
     * @error TooManyRequestsException   
     */
    getRestApis(params: APIGateway.GetRestApisRequest, callback?: (err: APIGateway.BadRequestException|APIGateway.UnauthorizedException|APIGateway.TooManyRequestsException|any, data: APIGateway.RestApis|any) => void): Request<APIGateway.RestApis|any,APIGateway.BadRequestException|APIGateway.UnauthorizedException|APIGateway.TooManyRequestsException|any>;
    /**
     * Generates a client SDK for a RestApi and Stage .
     *
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error BadRequestException   
     * @error TooManyRequestsException   
     */
    getSdk(params: APIGateway.GetSdkRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.BadRequestException|APIGateway.TooManyRequestsException|any, data: APIGateway.SdkResponse|any) => void): Request<APIGateway.SdkResponse|any,APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.BadRequestException|APIGateway.TooManyRequestsException|any>;
    /**
     * Gets information about a Stage resource.
     *
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error TooManyRequestsException   
     */
    getStage(params: APIGateway.GetStageRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|any, data: APIGateway.Stage|any) => void): Request<APIGateway.Stage|any,APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|any>;
    /**
     * Gets information about one or more Stage resources.
     *
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error TooManyRequestsException   
     */
    getStages(params: APIGateway.GetStagesRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|any, data: APIGateway.Stages|any) => void): Request<APIGateway.Stages|any,APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|any>;
    /**
     * Gets the usage data of a usage plan in a specified time interval.
     *
     * @error BadRequestException   
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error TooManyRequestsException   
     */
    getUsage(params: APIGateway.GetUsageRequest, callback?: (err: APIGateway.BadRequestException|APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|any, data: APIGateway.Usage|any) => void): Request<APIGateway.Usage|any,APIGateway.BadRequestException|APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|any>;
    /**
     * Gets a usage plan of a given plan identifier.
     *
     * @error BadRequestException   
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error TooManyRequestsException   
     */
    getUsagePlan(params: APIGateway.GetUsagePlanRequest, callback?: (err: APIGateway.BadRequestException|APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|any, data: APIGateway.UsagePlan|any) => void): Request<APIGateway.UsagePlan|any,APIGateway.BadRequestException|APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|any>;
    /**
     * Gets a usage plan key of a given key identifier.
     *
     * @error BadRequestException   
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error TooManyRequestsException   
     */
    getUsagePlanKey(params: APIGateway.GetUsagePlanKeyRequest, callback?: (err: APIGateway.BadRequestException|APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|any, data: APIGateway.UsagePlanKey|any) => void): Request<APIGateway.UsagePlanKey|any,APIGateway.BadRequestException|APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|any>;
    /**
     * Gets all the usage plan keys representing the API keys added to a specified
usage plan.
     *
     * @error BadRequestException   
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error TooManyRequestsException   
     */
    getUsagePlanKeys(params: APIGateway.GetUsagePlanKeysRequest, callback?: (err: APIGateway.BadRequestException|APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|any, data: APIGateway.UsagePlanKeys|any) => void): Request<APIGateway.UsagePlanKeys|any,APIGateway.BadRequestException|APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|any>;
    /**
     * Gets all the usage plans of the caller&#x27;s account.
     *
     * @error BadRequestException   
     * @error UnauthorizedException   
     * @error TooManyRequestsException   
     * @error ConflictException   
     * @error NotFoundException   
     */
    getUsagePlans(params: APIGateway.GetUsagePlansRequest, callback?: (err: APIGateway.BadRequestException|APIGateway.UnauthorizedException|APIGateway.TooManyRequestsException|APIGateway.ConflictException|APIGateway.NotFoundException|any, data: APIGateway.UsagePlans|any) => void): Request<APIGateway.UsagePlans|any,APIGateway.BadRequestException|APIGateway.UnauthorizedException|APIGateway.TooManyRequestsException|APIGateway.ConflictException|APIGateway.NotFoundException|any>;
    /**
     * Import API keys from an external source, such as a CSV-formatted file.
     *
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error TooManyRequestsException   
     * @error LimitExceededException   
     * @error BadRequestException   
     * @error ConflictException   
     */
    importApiKeys(params: APIGateway.ImportApiKeysRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|APIGateway.LimitExceededException|APIGateway.BadRequestException|APIGateway.ConflictException|any, data: APIGateway.ApiKeyIds|any) => void): Request<APIGateway.ApiKeyIds|any,APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|APIGateway.LimitExceededException|APIGateway.BadRequestException|APIGateway.ConflictException|any>;
    /**
     * A feature of the Amazon API Gateway control service for creating a new API from
an external API definition file.
     *
     * @error UnauthorizedException   
     * @error LimitExceededException   
     * @error BadRequestException   
     * @error TooManyRequestsException   
     * @error ConflictException   
     */
    importRestApi(params: APIGateway.ImportRestApiRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.LimitExceededException|APIGateway.BadRequestException|APIGateway.TooManyRequestsException|APIGateway.ConflictException|any, data: APIGateway.RestApi|any) => void): Request<APIGateway.RestApi|any,APIGateway.UnauthorizedException|APIGateway.LimitExceededException|APIGateway.BadRequestException|APIGateway.TooManyRequestsException|APIGateway.ConflictException|any>;
    /**
     * Represents a put integration.
     *
     * @error UnauthorizedException   
     * @error BadRequestException   
     * @error ConflictException   
     * @error NotFoundException   
     * @error TooManyRequestsException   
     */
    putIntegration(params: APIGateway.PutIntegrationRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.BadRequestException|APIGateway.ConflictException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|any, data: APIGateway.Integration|any) => void): Request<APIGateway.Integration|any,APIGateway.UnauthorizedException|APIGateway.BadRequestException|APIGateway.ConflictException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|any>;
    /**
     * Represents a put integration.
     *
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error LimitExceededException   
     * @error BadRequestException   
     * @error TooManyRequestsException   
     * @error ConflictException   
     */
    putIntegrationResponse(params: APIGateway.PutIntegrationResponseRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.LimitExceededException|APIGateway.BadRequestException|APIGateway.TooManyRequestsException|APIGateway.ConflictException|any, data: APIGateway.IntegrationResponse|any) => void): Request<APIGateway.IntegrationResponse|any,APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.LimitExceededException|APIGateway.BadRequestException|APIGateway.TooManyRequestsException|APIGateway.ConflictException|any>;
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
    putMethod(params: APIGateway.PutMethodRequest, callback?: (err: APIGateway.BadRequestException|APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.ConflictException|APIGateway.LimitExceededException|APIGateway.TooManyRequestsException|any, data: APIGateway.Method|any) => void): Request<APIGateway.Method|any,APIGateway.BadRequestException|APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.ConflictException|APIGateway.LimitExceededException|APIGateway.TooManyRequestsException|any>;
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
    putMethodResponse(params: APIGateway.PutMethodResponseRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.ConflictException|APIGateway.LimitExceededException|APIGateway.BadRequestException|APIGateway.TooManyRequestsException|any, data: APIGateway.MethodResponse|any) => void): Request<APIGateway.MethodResponse|any,APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.ConflictException|APIGateway.LimitExceededException|APIGateway.BadRequestException|APIGateway.TooManyRequestsException|any>;
    /**
     * A feature of the Amazon API Gateway control service for updating an existing API
with an input of external API definitions. The update can take the form of
merging the supplied definition into the existing API or overwriting the
existing API.
     *
     * @error UnauthorizedException   
     * @error LimitExceededException   
     * @error NotFoundException   
     * @error BadRequestException   
     * @error TooManyRequestsException   
     * @error ConflictException   
     */
    putRestApi(params: APIGateway.PutRestApiRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.LimitExceededException|APIGateway.NotFoundException|APIGateway.BadRequestException|APIGateway.TooManyRequestsException|APIGateway.ConflictException|any, data: APIGateway.RestApi|any) => void): Request<APIGateway.RestApi|any,APIGateway.UnauthorizedException|APIGateway.LimitExceededException|APIGateway.NotFoundException|APIGateway.BadRequestException|APIGateway.TooManyRequestsException|APIGateway.ConflictException|any>;
    /**
     * Simulate the execution of an Authorizer in your RestApi with headers,
parameters, and an incoming request body.

Enable custom authorizers
[http://docs.aws.amazon.com/apigateway/latest/developerguide/use-custom-authorizer.html]
     *
     * @error BadRequestException   
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error TooManyRequestsException   
     */
    testInvokeAuthorizer(params: APIGateway.TestInvokeAuthorizerRequest, callback?: (err: APIGateway.BadRequestException|APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|any, data: APIGateway.TestInvokeAuthorizerResponse|any) => void): Request<APIGateway.TestInvokeAuthorizerResponse|any,APIGateway.BadRequestException|APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|any>;
    /**
     * Simulate the execution of a Method in your RestApi with headers, parameters, and
an incoming request body.
     *
     * @error BadRequestException   
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error TooManyRequestsException   
     */
    testInvokeMethod(params: APIGateway.TestInvokeMethodRequest, callback?: (err: APIGateway.BadRequestException|APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|any, data: APIGateway.TestInvokeMethodResponse|any) => void): Request<APIGateway.TestInvokeMethodResponse|any,APIGateway.BadRequestException|APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|any>;
    /**
     * Changes information about the current Account resource.
     *
     * @error UnauthorizedException   
     * @error BadRequestException   
     * @error NotFoundException   
     * @error TooManyRequestsException   
     */
    updateAccount(params: APIGateway.UpdateAccountRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.BadRequestException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|any, data: APIGateway.Account|any) => void): Request<APIGateway.Account|any,APIGateway.UnauthorizedException|APIGateway.BadRequestException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|any>;
    /**
     * Changes information about an ApiKey resource.
     *
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error BadRequestException   
     * @error TooManyRequestsException   
     * @error ConflictException   
     */
    updateApiKey(params: APIGateway.UpdateApiKeyRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.BadRequestException|APIGateway.TooManyRequestsException|APIGateway.ConflictException|any, data: APIGateway.ApiKey|any) => void): Request<APIGateway.ApiKey|any,APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.BadRequestException|APIGateway.TooManyRequestsException|APIGateway.ConflictException|any>;
    /**
     * Updates an existing Authorizer resource.

AWS CLI
[http://docs.aws.amazon.com/cli/latest/reference/apigateway/update-authorizer.html]
     *
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error BadRequestException   
     * @error TooManyRequestsException   
     */
    updateAuthorizer(params: APIGateway.UpdateAuthorizerRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.BadRequestException|APIGateway.TooManyRequestsException|any, data: APIGateway.Authorizer|any) => void): Request<APIGateway.Authorizer|any,APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.BadRequestException|APIGateway.TooManyRequestsException|any>;
    /**
     * Changes information about the BasePathMapping resource.
     *
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error ConflictException   
     * @error BadRequestException   
     * @error TooManyRequestsException   
     */
    updateBasePathMapping(params: APIGateway.UpdateBasePathMappingRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.ConflictException|APIGateway.BadRequestException|APIGateway.TooManyRequestsException|any, data: APIGateway.BasePathMapping|any) => void): Request<APIGateway.BasePathMapping|any,APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.ConflictException|APIGateway.BadRequestException|APIGateway.TooManyRequestsException|any>;
    /**
     * Changes information about an ClientCertificate resource.
     *
     * @error UnauthorizedException   
     * @error TooManyRequestsException   
     * @error BadRequestException   
     * @error NotFoundException   
     */
    updateClientCertificate(params: APIGateway.UpdateClientCertificateRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.TooManyRequestsException|APIGateway.BadRequestException|APIGateway.NotFoundException|any, data: APIGateway.ClientCertificate|any) => void): Request<APIGateway.ClientCertificate|any,APIGateway.UnauthorizedException|APIGateway.TooManyRequestsException|APIGateway.BadRequestException|APIGateway.NotFoundException|any>;
    /**
     * Changes information about a Deployment resource.
     *
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error BadRequestException   
     * @error TooManyRequestsException   
     * @error ServiceUnavailableException   
     */
    updateDeployment(params: APIGateway.UpdateDeploymentRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.BadRequestException|APIGateway.TooManyRequestsException|APIGateway.ServiceUnavailableException|any, data: APIGateway.Deployment|any) => void): Request<APIGateway.Deployment|any,APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.BadRequestException|APIGateway.TooManyRequestsException|APIGateway.ServiceUnavailableException|any>;
    /**
     * Changes information about the DomainName resource.
     *
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error BadRequestException   
     * @error ConflictException   
     * @error TooManyRequestsException   
     */
    updateDomainName(params: APIGateway.UpdateDomainNameRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.BadRequestException|APIGateway.ConflictException|APIGateway.TooManyRequestsException|any, data: APIGateway.DomainName|any) => void): Request<APIGateway.DomainName|any,APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.BadRequestException|APIGateway.ConflictException|APIGateway.TooManyRequestsException|any>;
    /**
     * Represents an update integration.
     *
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error BadRequestException   
     * @error TooManyRequestsException   
     * @error ConflictException   
     */
    updateIntegration(params: APIGateway.UpdateIntegrationRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.BadRequestException|APIGateway.TooManyRequestsException|APIGateway.ConflictException|any, data: APIGateway.Integration|any) => void): Request<APIGateway.Integration|any,APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.BadRequestException|APIGateway.TooManyRequestsException|APIGateway.ConflictException|any>;
    /**
     * Represents an update integration response.
     *
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error ConflictException   
     * @error BadRequestException   
     * @error TooManyRequestsException   
     */
    updateIntegrationResponse(params: APIGateway.UpdateIntegrationResponseRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.ConflictException|APIGateway.BadRequestException|APIGateway.TooManyRequestsException|any, data: APIGateway.IntegrationResponse|any) => void): Request<APIGateway.IntegrationResponse|any,APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.ConflictException|APIGateway.BadRequestException|APIGateway.TooManyRequestsException|any>;
    /**
     * Updates an existing Method resource.
     *
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error BadRequestException   
     * @error ConflictException   
     * @error TooManyRequestsException   
     */
    updateMethod(params: APIGateway.UpdateMethodRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.BadRequestException|APIGateway.ConflictException|APIGateway.TooManyRequestsException|any, data: APIGateway.Method|any) => void): Request<APIGateway.Method|any,APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.BadRequestException|APIGateway.ConflictException|APIGateway.TooManyRequestsException|any>;
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
    updateMethodResponse(params: APIGateway.UpdateMethodResponseRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.ConflictException|APIGateway.LimitExceededException|APIGateway.BadRequestException|APIGateway.TooManyRequestsException|any, data: APIGateway.MethodResponse|any) => void): Request<APIGateway.MethodResponse|any,APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.ConflictException|APIGateway.LimitExceededException|APIGateway.BadRequestException|APIGateway.TooManyRequestsException|any>;
    /**
     * Changes information about a model.
     *
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error BadRequestException   
     * @error ConflictException   
     * @error TooManyRequestsException   
     */
    updateModel(params: APIGateway.UpdateModelRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.BadRequestException|APIGateway.ConflictException|APIGateway.TooManyRequestsException|any, data: APIGateway.Model|any) => void): Request<APIGateway.Model|any,APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.BadRequestException|APIGateway.ConflictException|APIGateway.TooManyRequestsException|any>;
    /**
     * Changes information about a Resource resource.
     *
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error ConflictException   
     * @error BadRequestException   
     * @error TooManyRequestsException   
     */
    updateResource(params: APIGateway.UpdateResourceRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.ConflictException|APIGateway.BadRequestException|APIGateway.TooManyRequestsException|any, data: APIGateway.Resource|any) => void): Request<APIGateway.Resource|any,APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.ConflictException|APIGateway.BadRequestException|APIGateway.TooManyRequestsException|any>;
    /**
     * Changes information about the specified API.
     *
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error ConflictException   
     * @error BadRequestException   
     * @error TooManyRequestsException   
     */
    updateRestApi(params: APIGateway.UpdateRestApiRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.ConflictException|APIGateway.BadRequestException|APIGateway.TooManyRequestsException|any, data: APIGateway.RestApi|any) => void): Request<APIGateway.RestApi|any,APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.ConflictException|APIGateway.BadRequestException|APIGateway.TooManyRequestsException|any>;
    /**
     * Changes information about a Stage resource.
     *
     * @error UnauthorizedException   
     * @error NotFoundException   
     * @error ConflictException   
     * @error BadRequestException   
     * @error TooManyRequestsException   
     */
    updateStage(params: APIGateway.UpdateStageRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.ConflictException|APIGateway.BadRequestException|APIGateway.TooManyRequestsException|any, data: APIGateway.Stage|any) => void): Request<APIGateway.Stage|any,APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.ConflictException|APIGateway.BadRequestException|APIGateway.TooManyRequestsException|any>;
    /**
     * Grants a temporary extension to the reamining quota of a usage plan associated
with a specified API key.
     *
     * @error UnauthorizedException   
     * @error TooManyRequestsException   
     * @error BadRequestException   
     * @error NotFoundException   
     */
    updateUsage(params: APIGateway.UpdateUsageRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.TooManyRequestsException|APIGateway.BadRequestException|APIGateway.NotFoundException|any, data: APIGateway.Usage|any) => void): Request<APIGateway.Usage|any,APIGateway.UnauthorizedException|APIGateway.TooManyRequestsException|APIGateway.BadRequestException|APIGateway.NotFoundException|any>;
    /**
     * Updates a usage plan of a given plan Id.
     *
     * @error UnauthorizedException   
     * @error TooManyRequestsException   
     * @error BadRequestException   
     * @error NotFoundException   
     * @error ConflictException   
     */
    updateUsagePlan(params: APIGateway.UpdateUsagePlanRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.TooManyRequestsException|APIGateway.BadRequestException|APIGateway.NotFoundException|APIGateway.ConflictException|any, data: APIGateway.UsagePlan|any) => void): Request<APIGateway.UsagePlan|any,APIGateway.UnauthorizedException|APIGateway.TooManyRequestsException|APIGateway.BadRequestException|APIGateway.NotFoundException|APIGateway.ConflictException|any>;

    useRawPayload(...args: any[]): any
  }

  export module APIGateway {
    
    export type ApiKeysFormat = string;
    
    export type AuthorizerType = string;
    
    export type Blob = any;
    
    export type Boolean = boolean;
    
    export type CacheClusterSize = string;
    
    export type CacheClusterStatus = string;
    
    export type ContentHandlingStrategy = string;
    
    export type Double = number;
    
    export type Integer = number;
    
    export type IntegrationType = string;
    
    export type ListOfARNs = ProviderARN[];
    
    export type ListOfApiKey = ApiKey[];
    
    export type ListOfApiStage = ApiStage[];
    
    export type ListOfAuthorizer = Authorizer[];
    
    export type ListOfBasePathMapping = BasePathMapping[];
    
    export type ListOfClientCertificate = ClientCertificate[];
    
    export type ListOfDeployment = Deployment[];
    
    export type ListOfDomainName = DomainName[];
    
    export type ListOfLong = Long[];
    
    export type ListOfModel = Model[];
    
    export type ListOfPatchOperation = PatchOperation[];
    
    export type ListOfResource = Resource[];
    
    export type ListOfRestApi = RestApi[];
    
    export type ListOfStage = Stage[];
    
    export type ListOfStageKeys = StageKey[];
    
    export type ListOfString = String[];
    
    export type ListOfUsage = ListOfLong[];
    
    export type ListOfUsagePlan = UsagePlan[];
    
    export type ListOfUsagePlanKey = UsagePlanKey[];
    
    export type Long = number;
    
    export type MapOfHeaderValues = {[key:string]: String};
    
    export type MapOfIntegrationResponse = {[key:string]: IntegrationResponse};
    
    export type MapOfKeyUsages = {[key:string]: ListOfUsage};
    
    export type MapOfMethod = {[key:string]: Method};
    
    export type MapOfMethodResponse = {[key:string]: MethodResponse};
    
    export type MapOfMethodSettings = {[key:string]: MethodSetting};
    
    export type MapOfMethodSnapshot = {[key:string]: MethodSnapshot};
    
    export type MapOfStringToBoolean = {[key:string]: NullableBoolean};
    
    export type MapOfStringToList = {[key:string]: ListOfString};
    
    export type MapOfStringToString = {[key:string]: String};
    
    export type NullableBoolean = boolean;
    
    export type NullableInteger = number;
    
    export type Op = string;
    
    export type PathToMapOfMethodSnapshot = {[key:string]: MapOfMethodSnapshot};
    
    export type ProviderARN = string;
    
    export type PutMode = string;
    
    export type QuotaPeriodType = string;
    
    export type StatusCode = string;
    
    export type String = string;
    
    export type Timestamp = number;
    
    export type UnauthorizedCacheControlHeaderStrategy = string;

    export interface Account {
        /** The ARN of an Amazon CloudWatch role for the current Account . **/
        cloudwatchRoleArn?: String;
        /** Specifies the API request limits configured for the current Account . **/
        throttleSettings?: ThrottleSettings;
        /** A list of features supported for the account. When usage plans are enabled, the
features list will include an entry of &quot;UsagePlans&quot; . **/
        features?: ListOfString;
        /** The version of the API keys used for the account. **/
        apiKeyVersion?: String;
    }
    export interface ApiKey {
        /** The identifier of the API Key. **/
        id?: String;
        /** The value of the API Key. **/
        value?: String;
        /** The name of the API Key. **/
        name?: String;
        /** The description of the API Key. **/
        description?: String;
        /** Specifies whether the API Key can be used by callers. **/
        enabled?: Boolean;
        /** The date when the API Key was created, in ISO 8601 format
[http://www.iso.org/iso/home/standards/iso8601.htm] . **/
        createdDate?: Timestamp;
        /** When the API Key was last updated, in ISO 8601 format. **/
        lastUpdatedDate?: Timestamp;
        /** A list of Stage resources that are associated with the ApiKey resource. **/
        stageKeys?: ListOfString;
    }
    export interface ApiKeyIds {
        /** A list of all the ApiKey identifiers. **/
        ids?: ListOfString;
        /** A list of warning messages. **/
        warnings?: ListOfString;
    }
    export interface ApiKeys {
        /** A list of warning messages logged during the import of API keys when the 
failOnWarnings option is set to true. **/
        warnings?: ListOfString;
        position?: String;
        /** The current page of any ApiKey resources in the collection of ApiKey resources. **/
        items?: ListOfApiKey;
    }
    export interface ApiStage {
        /** API Id of the associated API stage in a usage plan. **/
        apiId?: String;
        /** API stage name of the associated API stage in a usage plan. **/
        stage?: String;
    }
    export interface Authorizer {
        /** The identifier for the authorizer resource. **/
        id?: String;
        /** [Required] The name of the authorizer. **/
        name?: String;
        /** [Required] The type of the authorizer. Currently, the valid type is TOKEN for a
Lambda function or COGNITO_USER_POOLS for an Amazon Cognito user pool. **/
        type?: AuthorizerType;
        /** A list of the provider ARNs of the authorizer. For an TOKEN authorizer, this is
not defined. For authorizers of the COGNITO_USER_POOLS type, each element
corresponds to a user pool ARN of this format: 
arn:aws:cognito-idp:{region}:{account_id}:userpool/{user_pool_id} . **/
        providerARNs?: ListOfARNs;
        /** Optional customer-defined field, used in Swagger imports/exports. Has no
functional impact. **/
        authType?: String;
        /** [Required] Specifies the authorizer&#x27;s Uniform Resource Identifier (URI). For 
TOKEN authorizers, this must be a well-formed Lambda function URI, for example, 
arn:aws:apigateway:us-west-2:lambda:path/2015-03-31/functions/arn:aws:lambda:us-west-2:{account_id}:function:{lambda_function_name}/invocations 
. In general, the URI has this form 
arn:aws:apigateway:{region}:lambda:path/{service_api} , where {region} is the
same as the region hosting the Lambda function, path indicates that the
remaining substring in the URI should be treated as the path to the resource,
including the initial / . For Lambda functions, this is usually of the form
/2015-03-31/functions/[FunctionARN]/invocations. **/
        authorizerUri?: String;
        /** Specifies the credentials required for the authorizer, if any. Two options are
available. To specify an IAM role for Amazon API Gateway to assume, use the
role&#x27;s Amazon Resource Name (ARN). To use resource-based permissions on the
Lambda function, specify null. **/
        authorizerCredentials?: String;
        /** [Required] The source of the identity in an incoming request. For a TOKEN 
authorizer, this value is a mapping expression with the same syntax as
integration parameter mappings. The only valid source for tokens is &#x27;header&#x27;, so
the expression should match &#x27;method.request.header.[headerName]&#x27;. The value of
the header &#x27;[headerName]&#x27; will be interpreted as the incoming token. For 
COGNITO_USER_POOLS authorizers, this property is used. **/
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
        /** The identifier of the client certificate. **/
        clientCertificateId?: String;
        /** The description of the client certificate. **/
        description?: String;
        /** The PEM-encoded public key of the client certificate, which can be used to
configure certificate authentication in the integration endpoint . **/
        pemEncodedCertificate?: String;
        /** The date when the client certificate was created, in ISO 8601 format
[http://www.iso.org/iso/home/standards/iso8601.htm] . **/
        createdDate?: Timestamp;
        /** The date when the client certificate will expire, in ISO 8601 format
[http://www.iso.org/iso/home/standards/iso8601.htm] . **/
        expirationDate?: Timestamp;
    }
    export interface ClientCertificates {
        position?: String;
        /** The current page of any ClientCertificate resources in the collection of 
ClientCertificate resources. **/
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
        /** Specifies whether ( true ) or not ( false ) the key identifier is distinct from
the created API key value. **/
        generateDistinctId?: Boolean;
        /** Specifies a value of the API key. **/
        value?: String;
        /** DEPRECATED FOR USAGE PLANS - Specifies stages associated with the API key. **/
        stageKeys?: ListOfStageKeys;
    }
    export interface CreateAuthorizerRequest {
        /** The RestApi identifier under which the Authorizer will be created. **/
        restApiId: String;
        /** [Required] The name of the authorizer. **/
        name: String;
        /** [Required] The type of the authorizer. **/
        type: AuthorizerType;
        /** A list of the Cognito Your User Pool authorizer&#x27;s provider ARNs. **/
        providerARNs?: ListOfARNs;
        /** Optional customer-defined field, used in Swagger imports/exports. Has no
functional impact. **/
        authType?: String;
        /** [Required] Specifies the authorizer&#x27;s Uniform Resource Identifier (URI). **/
        authorizerUri?: String;
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
        stageName?: String;
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
with the new deployment. Variable names can have alphanumeric and underscore
characters, and the values must match [A-Za-z0-9-._~:/?#&amp;=,]+ . **/
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
        /** The ID of the RestApi that you want to clone from. **/
        cloneFrom?: String;
        /** The list of binary media types supported by the RestApi . By default, the 
RestApi supports only UTF-8-encoded text payloads. **/
        binaryMediaTypes?: ListOfString;
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
names can have alphanumeric and underscore characters, and the values must match 
[A-Za-z0-9-._~:/?#&amp;=,]+ . **/
        variables?: MapOfStringToString;
    }
    export interface CreateUsagePlanKeyRequest {
        /** The Id of the UsagePlan resource representing the usage plan containing the
to-be-created UsagePlanKey resource representing a plan customer. **/
        usagePlanId: String;
        /** The identifier of a UsagePlanKey resource for a plan customer. **/
        keyId: String;
        /** The type of a UsagePlanKey resource for a plan customer. **/
        keyType: String;
    }
    export interface CreateUsagePlanRequest {
        /** The name of the usage plan. **/
        name: String;
        /** The description of the usage plan. **/
        description?: String;
        /** The associated API stages of the usage plan. **/
        apiStages?: ListOfApiStage;
        /** The throttling limits of the usage plan. **/
        throttle?: ThrottleSettings;
        /** The quota of the usage plan. **/
        quota?: QuotaSettings;
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
        /** The identifier of the ClientCertificate resource to be deleted. **/
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
        /** The HTTP verb of the Method resource. **/
        httpMethod: String;
    }
    export interface DeleteMethodResponseRequest {
        /** The RestApi identifier for the MethodResponse resource. **/
        restApiId: String;
        /** The Resource identifier for the MethodResponse resource. **/
        resourceId: String;
        /** The HTTP verb of the Method resource. **/
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
    export interface DeleteUsagePlanKeyRequest {
        /** The Id of the UsagePlan resource representing the usage plan containing the
to-be-deleted UsagePlanKey resource representing a plan customer. **/
        usagePlanId: String;
        /** The Id of the UsagePlanKey resource to be deleted. **/
        keyId: String;
    }
    export interface DeleteUsagePlanRequest {
        /** The Id of the to-be-deleted usage plan. **/
        usagePlanId: String;
    }
    export interface Deployment {
        /** The identifier for the deployment resource. **/
        id?: String;
        /** The description for the deployment resource. **/
        description?: String;
        /** The date and time that the deployment resource was created. **/
        createdDate?: Timestamp;
        /** A summary of the RestApi at the date and time that the deployment resource was
created. **/
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
        /** The content-type header value in the HTTP response. This will correspond to a
valid &#x27;accept&#x27; type in the request. **/
        contentType?: String;
        /** The content-disposition header value in the HTTP response. **/
        contentDisposition?: String;
        /** The binary blob response to GetExport , which contains the export. **/
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
        /** The description of the ClientCertificate . **/
        description?: String;
    }
    export interface GetAccountRequest {
    }
    export interface GetApiKeyRequest {
        /** The identifier of the ApiKey resource. **/
        apiKey: String;
        /** A boolean flag to specify whether ( true ) or not ( false ) the result contains
the key value. **/
        includeValue?: NullableBoolean;
    }
    export interface GetApiKeysRequest {
        /** The position of the current ApiKeys resource to get information about. **/
        position?: String;
        /** The maximum number of ApiKeys to get information about. **/
        limit?: NullableInteger;
        /** The name of queried API keys. **/
        nameQuery?: String;
        customerId?: String;
        /** A boolean flag to specify whether ( true ) or not ( false ) the result contains
key values. **/
        includeValues?: NullableBoolean;
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
        /** If not all Authorizer resources in the response were present, the position will
specify where to start the next page of results. **/
        position?: String;
        /** Limit the number of Authorizer resources in the response. **/
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
        /** The identifier of the ClientCertificate resource to be described. **/
        clientCertificateId: String;
    }
    export interface GetClientCertificatesRequest {
        /** The position of the current ClientCertificate resource in the collection to get
information about. **/
        position?: String;
        /** The maximum number of ClientCertificate resources in the collection to get
information about. The default limit is 25. It should be an integer between 1 -
500. **/
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
        /** The identifier of the RestApi to be exported. **/
        restApiId: String;
        /** The name of the Stage that will be exported. **/
        stageName: String;
        /** The type of export. Currently only &#x27;swagger&#x27; is supported. **/
        exportType: String;
        /** A key-value map of query string parameters that specify properties of the
export, depending on the requested exportType . For exportType swagger , any
combination of the following parameters are supported: integrations will export
the API with x-amazon-apigateway-integration extensions. authorizers will export
the API with x-amazon-apigateway-authorizer extensions. postman will export the
API with Postman extensions, allowing for import to the Postman tool **/
        parameters?: MapOfStringToString;
        /** The content-type of the export, for example application/json . Currently 
application/json and application/yaml are supported for exportType of swagger .
This should be specified in the Accept header for direct API requests. **/
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
        /** Specifies the method request&#x27;s HTTP method type. **/
        httpMethod: String;
    }
    export interface GetMethodResponseRequest {
        /** The RestApi identifier for the MethodResponse resource. **/
        restApiId: String;
        /** The Resource identifier for the MethodResponse resource. **/
        resourceId: String;
        /** The HTTP verb of the Method resource. **/
        httpMethod: String;
        /** The status code for the MethodResponse resource. **/
        statusCode: StatusCode;
    }
    export interface GetModelRequest {
        /** The RestApi identifier under which the Model exists. **/
        restApiId: String;
        /** The name of the model as an identifier. **/
        modelName: String;
        /** A query parameter of a Boolean value to resolve ( true ) all external model
references and returns a flattened model schema or not ( false ) The default is 
false . **/
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
        /** The identifier of the RestApi that the SDK will use. **/
        restApiId: String;
        /** The name of the Stage that the SDK will use. **/
        stageName: String;
        /** The language for the generated SDK. Currently javascript , android , and 
objectivec (for iOS) are supported. **/
        sdkType: String;
        /** A key-value map of query string parameters that specify properties of the SDK,
depending on the requested sdkType . For sdkType of objectivec , a parameter
named classPrefix is required. For sdkType of android , parameters named groupId 
, artifactId , artifactVersion , and invokerPackage are required. **/
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
    export interface GetUsagePlanKeyRequest {
        /** The Id of the UsagePlan resource representing the usage plan containing the
to-be-retrieved UsagePlanKey resource representing a plan customer. **/
        usagePlanId: String;
        /** The key Id of the to-be-retrieved UsagePlanKey resource representing a plan
customer. **/
        keyId: String;
    }
    export interface GetUsagePlanKeysRequest {
        /** The Id of the UsagePlan resource representing the usage plan containing the
to-be-retrieved UsagePlanKey resource representing a plan customer. **/
        usagePlanId: String;
        /** A query parameter specifying the zero-based index specifying the position of a
usage plan key. **/
        position?: String;
        /** A query parameter specifying the maximum number usage plan keys returned by the
GET request. **/
        limit?: NullableInteger;
        /** A query parameter specifying the name of the to-be-returned usage plan keys. **/
        nameQuery?: String;
    }
    export interface GetUsagePlanRequest {
        /** The identifier of the UsagePlan resource to be retrieved. **/
        usagePlanId: String;
    }
    export interface GetUsagePlansRequest {
        /** The zero-based array index specifying the position of the to-be-retrieved 
UsagePlan resource. **/
        position?: String;
        /** The identifier of the API key associated with the usage plans. **/
        keyId?: String;
        /** The number of UsagePlan resources to be returned as the result. **/
        limit?: NullableInteger;
    }
    export interface GetUsageRequest {
        /** The Id of the usage plan associated with the usage data. **/
        usagePlanId: String;
        /** The Id of the API key associated with the resultant usage data. **/
        keyId?: String;
        /** The starting date (e.g., 2016-01-01) of the usage data. **/
        startDate: String;
        /** The ending date (e.g., 2016-12-31) of the usage data. **/
        endDate: String;
        /** Position **/
        position?: String;
        /** The maximum number of results to be returned. **/
        limit?: NullableInteger;
    }
    export interface ImportApiKeysRequest {
        /** The payload of the POST request to import API keys. For the payload format, see 
API Key File Format
[http://docs.aws.amazon.com/apigateway/latest/developerguide/api-key-file-format.html] 
. **/
        body: Blob;
        /** A query parameter to specify the input format to imported API keys. Currently,
only the csv format is supported. **/
        format: ApiKeysFormat;
        /** A query parameter to indicate whether to rollback ApiKey importation ( true ) or
not ( false ) when error is encountered. **/
        failOnWarnings?: Boolean;
    }
    export interface ImportRestApiRequest {
        /** A query parameter to indicate whether to rollback the API creation ( true ) or
not ( false ) when a warning is encountered. The default value is false . **/
        failOnWarnings?: Boolean;
        /** Custom header parameters as part of the request. **/
        parameters?: MapOfStringToString;
        /** The POST request body containing external API definitions. Currently, only
Swagger definition JSON files are supported. **/
        body: Blob;
    }
    export interface Integration {
        /** Specifies the integration&#x27;s type. The valid value is HTTP for integrating with
an HTTP back end, AWS for any AWS service endpoints, MOCK for testing without
actually invoking the back end, HTTP_PROXY for integrating with the HTTP proxy
integration, or AWS_PROXY for integrating with the Lambda proxy integration
type. **/
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
        /** A key-value map specifying request parameters that are passed from the method
request to the back end. The key is an integration request parameter name and
the associated value is a method request parameter value or static value that
must be enclosed within single quotes and pre-encoded as required by the back
end. The method request parameter value must match the pattern of 
method.request.{location}.{name} , where location is querystring , path , or 
header and name must be a valid and unique method request parameter name. **/
        requestParameters?: MapOfStringToString;
        /** Represents a map of Velocity templates that are applied on the request payload
based on the value of the Content-Type header sent by the client. The content
type value is the key in this map, and the template (as a String) is the value. **/
        requestTemplates?: MapOfStringToString;
        /** Specifies how the method request body of an unmapped content type will be passed
through the integration request to the back end without transformation. A
content type is unmapped if no mapping template is defined in the integration or
the content type does not match any of the mapped content types, as specified in 
requestTemplates . There are three valid values: WHEN_NO_MATCH , 
WHEN_NO_TEMPLATES , and NEVER .

 &amp;#42; WHEN_NO_MATCH passes the method request body through the integration request
   to the back end without transformation when the method request content type
   does not match any content type associated with the mapping templates defined
   in the integration request.
 * WHEN_NO_TEMPLATES passes the method request body through the integration
   request to the back end without transformation when no mapping template is
   defined in the integration request. If a template is defined when this option
   is selected, the method request of an unmapped content-type will be rejected
   with an HTTP 415 Unsupported Media Type response.
 * NEVER rejects the method request with an HTTP 415 Unsupported Media Type 
   response when either the method request content type does not match any
   content type associated with the mapping templates defined in the integration
   request or no mapping template is defined in the integration request. **/
        passthroughBehavior?: String;
        /** Specifies how to handle request payload content type conversions. Supported
values are CONVERT_TO_BINARY and CONVERT_TO_TEXT , with the following behaviors:

 &amp;#42; CONVERT_TO_BINARY : Converts a request payload from a Base64-encoded string
   to the corresponding binary blob.
   
   
 * CONVERT_TO_TEXT : Converts a request payload from a binary blob to a
   Base64-encoded string.
   
   

If this property is not defined, the request payload will be passed through from
the method request to integration request without modification, provided that
the passthroughBehaviors is configured to support payload pass-through. **/
        contentHandling?: ContentHandlingStrategy;
        /** Specifies the integration&#x27;s cache namespace. **/
        cacheNamespace?: String;
        /** Specifies the integration&#x27;s cache key parameters. **/
        cacheKeyParameters?: ListOfString;
        /** Specifies the integration&#x27;s responses.



EXAMPLE: GET INTEGRATION RESPONSES OF A METHOD
REQUEST


GET /restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration/responses/200 HTTP/1.1 Content-Type: application/json Host: apigateway.us-east-1.amazonaws.com X-Amz-Date: 20160607T191449Z Authorization: AWS4-HMAC-SHA256 Credential={access_key_ID}/20160607/us-east-1/apigateway/aws4_request, SignedHeaders=content-type;host;x-amz-date, Signature={sig4_hash} 

RESPONSE
The successful response returns 200 OK status and a payload as follows:

{ &quot;_links&quot;: { &quot;curies&quot;: { &quot;href&quot;: &quot;http://docs.aws.amazon.com/apigateway/latest/developerguide/restapi-integration-response-{rel}.html&quot;, &quot;name&quot;: &quot;integrationresponse&quot;, &quot;templated&quot;: true }, &quot;self&quot;: { &quot;href&quot;: &quot;/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration/responses/200&quot;, &quot;title&quot;: &quot;200&quot; }, &quot;integrationresponse:delete&quot;: { &quot;href&quot;: &quot;/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration/responses/200&quot; }, &quot;integrationresponse:update&quot;: { &quot;href&quot;: &quot;/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration/responses/200&quot; } }, &quot;responseParameters&quot;: { &quot;method.response.header.Content-Type&quot;: &quot;&#x27;application/xml&#x27;&quot; }, &quot;responseTemplates&quot;: { &quot;application/json&quot;: &quot;$util.urlDecode(\&quot;%3CkinesisStreams%3E#foreach($stream in $input.path(&#x27;$.StreamNames&#x27;))%3Cstream%3E%3Cname%3E$stream%3C/name%3E%3C/stream%3E#end%3C/kinesisStreams%3E\&quot;)\n&quot; }, &quot;statusCode&quot;: &quot;200&quot; }



Creating an API
[http://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-create-api.html] **/
        integrationResponses?: MapOfIntegrationResponse;
    }
    export interface IntegrationResponse {
        /** Specifies the status code that is used to map the integration response to an
existing MethodResponse . **/
        statusCode?: StatusCode;
        /** Specifies the regular expression (regex) pattern used to choose an integration
response based on the response from the back end. For example, if the success
response returns nothing and the error response returns some string, you could
use the .+ regex to match error response. However, make sure that the error
response does not contain any newline ( \n ) character in such cases. If the
back end is an AWS Lambda function, the AWS Lambda function error header is
matched. For all other HTTP and AWS back ends, the HTTP status code is matched. **/
        selectionPattern?: String;
        /** A key-value map specifying response parameters that are passed to the method
response from the back end. The key is a method response header parameter name
and the mapped value is an integration response header value, a static value
enclosed within a pair of single quotes, or a JSON expression from the
integration response body. The mapping key must match the pattern of 
method.response.header.{name} , where name is a valid and unique header name.
The mapped non-static value must match the pattern of 
integration.response.header.{name} or 
integration.response.body.{JSON-expression} , where name is a valid and unique
response header name and JSON-expression is a valid JSON expression without the 
$ prefix. **/
        responseParameters?: MapOfStringToString;
        /** Specifies the templates used to transform the integration response body.
Response templates are represented as a key/value map, with a content-type as
the key and a template as the value. **/
        responseTemplates?: MapOfStringToString;
        /** Specifies how to handle response payload content type conversions. Supported
values are CONVERT_TO_BINARY and CONVERT_TO_TEXT , with the following behaviors:

 &amp;#42; CONVERT_TO_BINARY : Converts a response payload from a Base64-encoded string
   to the corresponding binary blob.
   
   
 * CONVERT_TO_TEXT : Converts a response payload from a binary blob to a
   Base64-encoded string.
   
   

If this property is not defined, the response payload will be passed through
from the integration response to the method response without modification. **/
        contentHandling?: ContentHandlingStrategy;
    }
    export interface LimitExceededException {
        retryAfterSeconds?: String;
        message?: String;
    }
    export interface Method {
        /** The method&#x27;s HTTP verb. **/
        httpMethod?: String;
        /** The method&#x27;s authorization type. **/
        authorizationType?: String;
        /** The identifier of an Authorizer to use on this method. The authorizationType 
must be CUSTOM . **/
        authorizerId?: String;
        /** A boolean flag specifying whether a valid ApiKey is required to invoke this
method. **/
        apiKeyRequired?: NullableBoolean;
        /** A key-value map defining required or optional method request parameters that can
be accepted by Amazon API Gateway. A key is a method request parameter name
matching the pattern of method.request.{location}.{name} , where location is 
querystring , path , or header and name is a valid and unique parameter name.
The value associated with the key is a Boolean flag indicating whether the
parameter is required ( true ) or optional ( false ). The method request
parameter names defined here are available in Integration to be mapped to
integration request parameters or templates. **/
        requestParameters?: MapOfStringToBoolean;
        /** A key-value map specifying data schemas, represented by Model resources, (as the
mapped value) of the request payloads of given content types (as the mapping
key). **/
        requestModels?: MapOfStringToString;
        /** Gets a method response associated with a given HTTP status code.

The collection of method responses are encapsulated in a key-value map, where
the key is a response&#x27;s HTTP status code and the value is a MethodResponse 
resource that specifies the response returned to the caller from the back end
through the integration response.

EXAMPLE: GET A 200 OK RESPONSE OF A GET METHOD
REQUEST


GET /restapis/uojnr9hd57/resources/0cjtch/methods/GET/responses/200 HTTP/1.1 Content-Type: application/json Host: apigateway.us-east-1.amazonaws.com Content-Length: 117 X-Amz-Date: 20160613T215008Z Authorization: AWS4-HMAC-SHA256 Credential={access_key_ID}/20160613/us-east-1/apigateway/aws4_request, SignedHeaders=content-type;host;x-amz-date, Signature={sig4_hash}

RESPONSE
The successful response returns a 200 OK status code and a payload similar to
the following:

{ &quot;_links&quot;: { &quot;curies&quot;: { &quot;href&quot;: &quot;http://docs.aws.amazon.com/apigateway/latest/developerguide/restapi-method-response-{rel}.html&quot;, &quot;name&quot;: &quot;methodresponse&quot;, &quot;templated&quot;: true }, &quot;self&quot;: { &quot;href&quot;: &quot;/restapis/uojnr9hd57/resources/0cjtch/methods/GET/responses/200&quot;, &quot;title&quot;: &quot;200&quot; }, &quot;methodresponse:delete&quot;: { &quot;href&quot;: &quot;/restapis/uojnr9hd57/resources/0cjtch/methods/GET/responses/200&quot; }, &quot;methodresponse:update&quot;: { &quot;href&quot;: &quot;/restapis/uojnr9hd57/resources/0cjtch/methods/GET/responses/200&quot; } }, &quot;responseModels&quot;: { &quot;application/json&quot;: &quot;Empty&quot; }, &quot;responseParameters&quot;: { &quot;method.response.header.operator&quot;: false, &quot;method.response.header.operand_2&quot;: false, &quot;method.response.header.operand_1&quot;: false }, &quot;statusCode&quot;: &quot;200&quot; }



AWS CLI
[http://docs.aws.amazon.com/cli/latest/reference/apigateway/get-method-response.html] **/
        methodResponses?: MapOfMethodResponse;
        /** Gets the method&#x27;s integration responsible for passing the client-submitted
request to the back end and performing necessary transformations to make the
request compliant with the back end.



EXAMPLE:
REQUEST


GET /restapis/uojnr9hd57/resources/0cjtch/methods/GET/integration HTTP/1.1 Content-Type: application/json Host: apigateway.us-east-1.amazonaws.com Content-Length: 117 X-Amz-Date: 20160613T213210Z Authorization: AWS4-HMAC-SHA256 Credential={access_key_ID}/20160613/us-east-1/apigateway/aws4_request, SignedHeaders=content-type;host;x-amz-date, Signature={sig4_hash}

RESPONSE
The successful response returns a 200 OK status code and a payload similar to
the following:

{ &quot;_links&quot;: { &quot;curies&quot;: [ { &quot;href&quot;: &quot;http://docs.aws.amazon.com/apigateway/latest/developerguide/restapi-integration-{rel}.html&quot;, &quot;name&quot;: &quot;integration&quot;, &quot;templated&quot;: true }, { &quot;href&quot;: &quot;http://docs.aws.amazon.com/apigateway/latest/developerguide/restapi-integration-response-{rel}.html&quot;, &quot;name&quot;: &quot;integrationresponse&quot;, &quot;templated&quot;: true } ], &quot;self&quot;: { &quot;href&quot;: &quot;/restapis/uojnr9hd57/resources/0cjtch/methods/GET/integration&quot; }, &quot;integration:delete&quot;: { &quot;href&quot;: &quot;/restapis/uojnr9hd57/resources/0cjtch/methods/GET/integration&quot; }, &quot;integration:responses&quot;: { &quot;href&quot;: &quot;/restapis/uojnr9hd57/resources/0cjtch/methods/GET/integration/responses/200&quot;, &quot;name&quot;: &quot;200&quot;, &quot;title&quot;: &quot;200&quot; }, &quot;integration:update&quot;: { &quot;href&quot;: &quot;/restapis/uojnr9hd57/resources/0cjtch/methods/GET/integration&quot; }, &quot;integrationresponse:put&quot;: { &quot;href&quot;: &quot;/restapis/uojnr9hd57/resources/0cjtch/methods/GET/integration/responses/{status_code}&quot;, &quot;templated&quot;: true } }, &quot;cacheKeyParameters&quot;: [], &quot;cacheNamespace&quot;: &quot;0cjtch&quot;, &quot;credentials&quot;: &quot;arn:aws:iam::123456789012:role/apigAwsProxyRole&quot;, &quot;httpMethod&quot;: &quot;POST&quot;, &quot;passthroughBehavior&quot;: &quot;WHEN_NO_MATCH&quot;, &quot;requestTemplates&quot;: { &quot;application/json&quot;: &quot;{\n \&quot;a\&quot;: \&quot;$input.params(&#x27;operand1&#x27;)\&quot;,\n \&quot;b\&quot;: \&quot;$input.params(&#x27;operand2&#x27;)\&quot;, \n \&quot;op\&quot;: \&quot;$input.params(&#x27;operator&#x27;)\&quot; \n}&quot; }, &quot;type&quot;: &quot;AWS&quot;, &quot;uri&quot;: &quot;arn:aws:apigateway:us-west-2:lambda:path//2015-03-31/functions/arn:aws:lambda:us-west-2:123456789012:function:Calc/invocations&quot;, &quot;_embedded&quot;: { &quot;integration:responses&quot;: { &quot;_links&quot;: { &quot;self&quot;: { &quot;href&quot;: &quot;/restapis/uojnr9hd57/resources/0cjtch/methods/GET/integration/responses/200&quot;, &quot;name&quot;: &quot;200&quot;, &quot;title&quot;: &quot;200&quot; }, &quot;integrationresponse:delete&quot;: { &quot;href&quot;: &quot;/restapis/uojnr9hd57/resources/0cjtch/methods/GET/integration/responses/200&quot; }, &quot;integrationresponse:update&quot;: { &quot;href&quot;: &quot;/restapis/uojnr9hd57/resources/0cjtch/methods/GET/integration/responses/200&quot; } }, &quot;responseParameters&quot;: { &quot;method.response.header.operator&quot;: &quot;integration.response.body.op&quot;, &quot;method.response.header.operand_2&quot;: &quot;integration.response.body.b&quot;, &quot;method.response.header.operand_1&quot;: &quot;integration.response.body.a&quot; }, &quot;responseTemplates&quot;: { &quot;application/json&quot;: &quot;#set($res = $input.path(&#x27;$&#x27;))\n{\n \&quot;result\&quot;: \&quot;$res.a, $res.b, $res.op = $res.c\&quot;,\n \&quot;a\&quot; : \&quot;$res.a\&quot;,\n \&quot;b\&quot; : \&quot;$res.b\&quot;,\n \&quot;op\&quot; : \&quot;$res.op\&quot;,\n \&quot;c\&quot; : \&quot;$res.c\&quot;\n}&quot; }, &quot;selectionPattern&quot;: &quot;&quot;, &quot;statusCode&quot;: &quot;200&quot; } } }



AWS CLI
[http://docs.aws.amazon.com/cli/latest/reference/apigateway/get-integration.html] **/
        methodIntegration?: Integration;
    }
    export interface MethodResponse {
        /** The method response&#x27;s status code. **/
        statusCode?: StatusCode;
        /** A key-value map specifying required or optional response parameters that Amazon
API Gateway can send back to the caller. A key defines a method response header
and the value specifies whether the associated method response header is
required or not. The expression of the key must match the pattern 
method.response.header.{name} , where name is a valid and unique header name.
Amazon API Gateway passes certain integration response data to the method
response headers specified here according to the mapping you prescribe in the
API&#x27;s IntegrationResponse . The integration response data that can be mapped
include an integration response header expressed in 
integration.response.header.{name} , a static value enclosed within a pair of
single quotes (e.g., &#x27;application/json&#x27; ), or a JSON expression from the
back-end response payload in the form of 
integration.response.body.{JSON-expression} , where JSON-expression is a valid
JSON expression without the $ prefix.) **/
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
        /** Specifies whether data trace logging is enabled for this method, which effects
the log entries pushed to Amazon CloudWatch Logs. The PATCH path for this
setting is /{method_setting_key}/logging/dataTrace , and the value is a Boolean. **/
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
        /** Specifies the time to live (TTL), in seconds, for cached responses. The higher
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
        /** Specifies how to handle unauthorized requests for cache invalidation. The PATCH
path for this setting is 
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
JSON-schema draft v4 [http://json-schema.org/documentation.html] model. Do not
include &quot;\&amp;#42;/&quot; characters in the description of any properties because such &quot;\*/&quot;
characters may be interpreted as the closing marker for comments in some
languages, such as Java or JavaScript, causing the installation of your API&#x27;s
SDK generated by API Gateway to fail. **/
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
        /** An update operation to be performed with this PATCH request. The valid value can
be &quot;add&quot;, &quot;remove&quot;, or &quot;replace&quot;. Not all valid operations are supported for a
given resource. Support of the operations depends on specific operational
contexts. Attempts to apply an unsupported operation on a resource will return
an error message. **/
        op?: Op;
        /** The op operation&#x27;s target, as identified by a JSON Pointer
[https://tools.ietf.org/html/draft-ietf-appsawg-json-pointer-08] value that
references a location within the targeted resource. For example, if the target
resource has an updateable property of {&quot;name&quot;:&quot;value&quot;} , the path for this
property is /name . If the name property value is a JSON object (e.g., {&quot;name&quot;:
{&quot;child/name&quot;: &quot;child-value&quot;}} ), the path for the child/name property will be 
/name/child~1name . Any slash (&quot;/&quot;) character appearing in path names must be
escaped with &quot;~1&quot;, as shown in the example above. Each op operation can have
only one path associated with it. **/
        path?: String;
        /** The new target value of the update operation. **/
        value?: String;
        /** Not supported. **/
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
integration type is HTTP or AWS, this field is required. For integration with
Lambda as an AWS service proxy, this value is of the
&#x27;arn:aws:apigateway:&lt;region&gt;:lambda:path/2015-03-31/functions/&lt;functionArn&gt;/invocations&#x27;
format. **/
        uri?: String;
        /** Specifies whether credentials are required for a put integration. **/
        credentials?: String;
        /** A key-value map specifying request parameters that are passed from the method
request to the back end. The key is an integration request parameter name and
the associated value is a method request parameter value or static value that
must be enclosed within single quotes and pre-encoded as required by the back
end. The method request parameter value must match the pattern of 
method.request.{location}.{name} , where location is querystring , path , or 
header and name must be a valid and unique method request parameter name. **/
        requestParameters?: MapOfStringToString;
        /** Represents a map of Velocity templates that are applied on the request payload
based on the value of the Content-Type header sent by the client. The content
type value is the key in this map, and the template (as a String) is the value. **/
        requestTemplates?: MapOfStringToString;
        /** Specifies the pass-through behavior for incoming requests based on the
Content-Type header in the request, and the available mapping templates
specified as the requestTemplates property on the Integration resource. There
are three valid values: WHEN_NO_MATCH , WHEN_NO_TEMPLATES , and NEVER .

 &amp;#42; WHEN_NO_MATCH passes the request body for unmapped content types through to
   the integration back end without transformation.
   
   
 * NEVER rejects unmapped content types with an HTTP 415 &#x27;Unsupported Media
   Type&#x27; response.
   
   
 * WHEN_NO_TEMPLATES allows pass-through when the integration has NO content
   types mapped to templates. However if there is at least one content type
   defined, unmapped content types will be rejected with the same 415 response. **/
        passthroughBehavior?: String;
        /** Specifies a put integration input&#x27;s cache namespace. **/
        cacheNamespace?: String;
        /** Specifies a put integration input&#x27;s cache key parameters. **/
        cacheKeyParameters?: ListOfString;
        /** Specifies how to handle request payload content type conversions. Supported
values are CONVERT_TO_BINARY and CONVERT_TO_TEXT , with the following behaviors:

 &amp;#42; CONVERT_TO_BINARY : Converts a request payload from a Base64-encoded string
   to the corresponding binary blob.
   
   
 * CONVERT_TO_TEXT : Converts a request payload from a binary blob to a
   Base64-encoded string.
   
   

If this property is not defined, the request payload will be passed through from
the method request to integration request without modification, provided that
the passthroughBehaviors is configured to support payload pass-through. **/
        contentHandling?: ContentHandlingStrategy;
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
        /** A key-value map specifying response parameters that are passed to the method
response from the back end. The key is a method response header parameter name
and the mapped value is an integration response header value, a static value
enclosed within a pair of single quotes, or a JSON expression from the
integration response body. The mapping key must match the pattern of 
method.response.header.{name} , where name is a valid and unique header name.
The mapped non-static value must match the pattern of 
integration.response.header.{name} or 
integration.response.body.{JSON-expression} , where name must be a valid and
unique response header name and JSON-expression a valid JSON expression without
the $ prefix. **/
        responseParameters?: MapOfStringToString;
        /** Specifies a put integration response&#x27;s templates. **/
        responseTemplates?: MapOfStringToString;
        /** Specifies how to handle response payload content type conversions. Supported
values are CONVERT_TO_BINARY and CONVERT_TO_TEXT , with the following behaviors:

 &amp;#42; CONVERT_TO_BINARY : Converts a response payload from a Base64-encoded string
   to the corresponding binary blob.
   
   
 * CONVERT_TO_TEXT : Converts a response payload from a binary blob to a
   Base64-encoded string.
   
   

If this property is not defined, the response payload will be passed through
from the integration response to the method response without modification. **/
        contentHandling?: ContentHandlingStrategy;
    }
    export interface PutMethodRequest {
        /** The RestApi identifier for the new Method resource. **/
        restApiId: String;
        /** The Resource identifier for the new Method resource. **/
        resourceId: String;
        /** Specifies the method request&#x27;s HTTP method type. **/
        httpMethod: String;
        /** Specifies the type of authorization used for the method. **/
        authorizationType: String;
        /** Specifies the identifier of an Authorizer to use on this Method, if the type is
CUSTOM. **/
        authorizerId?: String;
        /** Specifies whether the method required a valid ApiKey . **/
        apiKeyRequired?: Boolean;
        /** A key-value map defining required or optional method request parameters that can
be accepted by Amazon API Gateway. A key defines a method request parameter name
matching the pattern of method.request.{location}.{name} , where location is 
querystring , path , or header and name is a valid and unique parameter name.
The value associated with the key is a Boolean flag indicating whether the
parameter is required ( true ) or optional ( false ). The method request
parameter names defined here are available in Integration to be mapped to
integration request parameters or body-mapping templates. **/
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
        /** The HTTP verb of the Method resource. **/
        httpMethod: String;
        /** The method response&#x27;s status code. **/
        statusCode: StatusCode;
        /** A key-value map specifying required or optional response parameters that Amazon
API Gateway can send back to the caller. A key defines a method response header
name and the associated value is a Boolean flag indicating whether the method
response parameter is required or not. The method response header names must
match the pattern of method.response.header.{name} , where name is a valid and
unique header name. The response parameter names defined here are available in
the integration response to be mapped from an integration response header
expressed in integration.response.header.{name} , a static value enclosed within
a pair of single quotes (e.g., &#x27;application/json&#x27; ), or a JSON expression from
the back-end response payload in the form of 
integration.response.body.{JSON-expression} , where JSON-expression is a valid
JSON expression without the $ prefix.) **/
        responseParameters?: MapOfStringToBoolean;
        /** Specifies the Model resources used for the response&#x27;s content type. Response
models are represented as a key/value map, with a content type as the key and a 
Model name as the value. **/
        responseModels?: MapOfStringToString;
    }
    export interface PutRestApiRequest {
        /** The identifier of the RestApi to be updated. **/
        restApiId: String;
        /** The mode query parameter to specify the update mode. Valid values are &quot;merge&quot;
and &quot;overwrite&quot;. By default, the update mode is &quot;merge&quot;. **/
        mode?: PutMode;
        /** A query parameter to indicate whether to rollback the API update ( true ) or not
( false ) when a warning is encountered. The default value is false . **/
        failOnWarnings?: Boolean;
        /** Custom headers supplied as part of the request. **/
        parameters?: MapOfStringToString;
        /** The PUT request body containing external API definitions. Currently, only
Swagger definition JSON files are supported. **/
        body: Blob;
    }
    export interface QuotaSettings {
        /** The maximum number of requests that can be made in a given time period. **/
        limit?: Integer;
        /** The number of requests subtracted from the given limit in the initial time
period. **/
        offset?: Integer;
        /** The time period in which the limit applies. Valid values are &quot;DAY&quot;, &quot;WEEK&quot; or
&quot;MONTH&quot;. **/
        period?: QuotaPeriodType;
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
        /** Gets an API resource&#x27;s method of a given HTTP verb.

The resource methods are a map of methods indexed by methods&#x27; HTTP verbs enabled
on the resource. This method map is included in the 200 OK response of the GET
/restapis/{restapi_id}/resources/{resource_id} or GET
/restapis/{restapi_id}/resources/{resource_id}?embed=methods request.

EXAMPLE: GET THE GET METHOD OF AN API RESOURCE
REQUEST
GET /restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET HTTP/1.1 Content-Type: application/json Host: apigateway.us-east-1.amazonaws.com X-Amz-Date: 20160608T031827Z Authorization: AWS4-HMAC-SHA256 Credential={access_key_ID}/20160608/us-east-1/apigateway/aws4_request, SignedHeaders=content-type;host;x-amz-date, Signature={sig4_hash}

RESPONSE
{ &quot;_links&quot;: { &quot;curies&quot;: [ { &quot;href&quot;: &quot;http://docs.aws.amazon.com/apigateway/latest/developerguide/restapi-integration-{rel}.html&quot;, &quot;name&quot;: &quot;integration&quot;, &quot;templated&quot;: true }, { &quot;href&quot;: &quot;http://docs.aws.amazon.com/apigateway/latest/developerguide/restapi-integration-response-{rel}.html&quot;, &quot;name&quot;: &quot;integrationresponse&quot;, &quot;templated&quot;: true }, { &quot;href&quot;: &quot;http://docs.aws.amazon.com/apigateway/latest/developerguide/restapi-method-{rel}.html&quot;, &quot;name&quot;: &quot;method&quot;, &quot;templated&quot;: true }, { &quot;href&quot;: &quot;http://docs.aws.amazon.com/apigateway/latest/developerguide/restapi-method-response-{rel}.html&quot;, &quot;name&quot;: &quot;methodresponse&quot;, &quot;templated&quot;: true } ], &quot;self&quot;: { &quot;href&quot;: &quot;/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET&quot;, &quot;name&quot;: &quot;GET&quot;, &quot;title&quot;: &quot;GET&quot; }, &quot;integration:put&quot;: { &quot;href&quot;: &quot;/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration&quot; }, &quot;method:delete&quot;: { &quot;href&quot;: &quot;/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET&quot; }, &quot;method:integration&quot;: { &quot;href&quot;: &quot;/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration&quot; }, &quot;method:responses&quot;: { &quot;href&quot;: &quot;/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/responses/200&quot;, &quot;name&quot;: &quot;200&quot;, &quot;title&quot;: &quot;200&quot; }, &quot;method:update&quot;: { &quot;href&quot;: &quot;/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET&quot; }, &quot;methodresponse:put&quot;: { &quot;href&quot;: &quot;/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/responses/{status_code}&quot;, &quot;templated&quot;: true } }, &quot;apiKeyRequired&quot;: false, &quot;authorizationType&quot;: &quot;NONE&quot;, &quot;httpMethod&quot;: &quot;GET&quot;, &quot;_embedded&quot;: { &quot;method:integration&quot;: { &quot;_links&quot;: { &quot;self&quot;: { &quot;href&quot;: &quot;/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration&quot; }, &quot;integration:delete&quot;: { &quot;href&quot;: &quot;/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration&quot; }, &quot;integration:responses&quot;: { &quot;href&quot;: &quot;/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration/responses/200&quot;, &quot;name&quot;: &quot;200&quot;, &quot;title&quot;: &quot;200&quot; }, &quot;integration:update&quot;: { &quot;href&quot;: &quot;/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration&quot; }, &quot;integrationresponse:put&quot;: { &quot;href&quot;: &quot;/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration/responses/{status_code}&quot;, &quot;templated&quot;: true } }, &quot;cacheKeyParameters&quot;: [], &quot;cacheNamespace&quot;: &quot;3kzxbg5sa2&quot;, &quot;credentials&quot;: &quot;arn:aws:iam::123456789012:role/apigAwsProxyRole&quot;, &quot;httpMethod&quot;: &quot;POST&quot;, &quot;passthroughBehavior&quot;: &quot;WHEN_NO_MATCH&quot;, &quot;requestParameters&quot;: { &quot;integration.request.header.Content-Type&quot;: &quot;&#x27;application/x-amz-json-1.1&#x27;&quot; }, &quot;requestTemplates&quot;: { &quot;application/json&quot;: &quot;{\n}&quot; }, &quot;type&quot;: &quot;AWS&quot;, &quot;uri&quot;: &quot;arn:aws:apigateway:us-east-1:kinesis:action/ListStreams&quot;, &quot;_embedded&quot;: { &quot;integration:responses&quot;: { &quot;_links&quot;: { &quot;self&quot;: { &quot;href&quot;: &quot;/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration/responses/200&quot;, &quot;name&quot;: &quot;200&quot;, &quot;title&quot;: &quot;200&quot; }, &quot;integrationresponse:delete&quot;: { &quot;href&quot;: &quot;/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration/responses/200&quot; }, &quot;integrationresponse:update&quot;: { &quot;href&quot;: &quot;/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration/responses/200&quot; } }, &quot;responseParameters&quot;: { &quot;method.response.header.Content-Type&quot;: &quot;&#x27;application/xml&#x27;&quot; }, &quot;responseTemplates&quot;: { &quot;application/json&quot;: &quot;$util.urlDecode(\&quot;%3CkinesisStreams%3E#foreach($stream in $input.path(&#x27;$.StreamNames&#x27;))%3Cstream%3E%3Cname%3E$stream%3C/name%3E%3C/stream%3E#end%3C/kinesisStreams%3E\&quot;)\n&quot; }, &quot;statusCode&quot;: &quot;200&quot; } } }, &quot;method:responses&quot;: { &quot;_links&quot;: { &quot;self&quot;: { &quot;href&quot;: &quot;/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/responses/200&quot;, &quot;name&quot;: &quot;200&quot;, &quot;title&quot;: &quot;200&quot; }, &quot;methodresponse:delete&quot;: { &quot;href&quot;: &quot;/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/responses/200&quot; }, &quot;methodresponse:update&quot;: { &quot;href&quot;: &quot;/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/responses/200&quot; } }, &quot;responseModels&quot;: { &quot;application/json&quot;: &quot;Empty&quot; }, &quot;responseParameters&quot;: { &quot;method.response.header.Content-Type&quot;: false }, &quot;statusCode&quot;: &quot;200&quot; } } }

If the OPTIONS is enabled on the resource, you can follow the example here to
get that method. Just replace the GET of the last path segment in the request
URL with OPTIONS . **/
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
        /** The warning messages reported when failonwarnings is turned on during API
import. **/
        warnings?: ListOfString;
        /** The list of binary media types supported by the RestApi . By default, the 
RestApi supports only UTF-8-encoded text payloads. **/
        binaryMediaTypes?: ListOfString;
    }
    export interface RestApis {
        position?: String;
        /** An array of links to the current page of RestApi resources. **/
        items?: ListOfRestApi;
    }
    export interface SdkResponse {
        /** The content-type header value in the HTTP response. **/
        contentType?: String;
        /** The content-disposition header value in the HTTP response. **/
        contentDisposition?: String;
        /** The binary blob response to GetSdk , which contains the generated SDK. **/
        body?: Blob;
    }
    export interface ServiceUnavailableException {
        retryAfterSeconds?: String;
        message?: String;
    }
    export interface Stage {
        /** The identifier of the Deployment that the stage points to. **/
        deploymentId?: String;
        /** The identifier of a client certificate for an API stage. **/
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
        /** A map that defines the method settings for a Stage resource. Keys (designated as 
/{method_setting_key below) are method paths defined as 
{resource_path}/{http_method} for an individual method override, or /\&amp;#42;/\* for
overriding all methods in the stage. **/
        methodSettings?: MapOfMethodSettings;
        /** A map that defines the stage variables for a Stage resource. Variable names can
have alphanumeric and underscore characters, and the values must match 
[A-Za-z0-9-._~:/?#&amp;=,]+ . **/
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
        /** Specifies a test invoke authorizer request&#x27;s RestApi identifier. **/
        restApiId: String;
        /** Specifies a test invoke authorizer request&#x27;s Authorizer ID. **/
        authorizerId: String;
        /** [Required] A key-value map of headers to simulate an incoming invocation
request. This is where the incoming authorization token, or identity source,
should be specified. **/
        headers?: MapOfHeaderValues;
        /** [Optional] The URI path, including query string, of the simulated invocation
request. Use this to specify path parameters and query string parameters. **/
        pathWithQueryString?: String;
        /** [Optional] The simulated request body of an incoming invocation request. **/
        body?: String;
        /** A key-value map of stage variables to simulate an invocation on a deployed Stage 
. **/
        stageVariables?: MapOfStringToString;
        /** [Optional] A key-value map of additional context variables. **/
        additionalContext?: MapOfStringToString;
    }
    export interface TestInvokeAuthorizerResponse {
        /** The HTTP status code that the client would have received. Value is 0 if the
authorizer succeeded. **/
        clientStatus?: Integer;
        /** The Amazon API Gateway execution log for the test authorizer request. **/
        log?: String;
        /** The execution latency of the test authorizer request. **/
        latency?: Long;
        /** The principal identity returned by the Authorizer **/
        principalId?: String;
        /** The JSON policy document returned by the Authorizer **/
        policy?: String;
        authorization?: MapOfStringToList;
        /** The open identity claims
[http://openid.net/specs/openid-connect-core-1_0.html#StandardClaims] , with any
supported custom attributes, returned from the Cognito Your User Pool configured
for the API. **/
        claims?: MapOfStringToString;
    }
    export interface TestInvokeMethodRequest {
        /** Specifies a test invoke method request&#x27;s API identifier. **/
        restApiId: String;
        /** Specifies a test invoke method request&#x27;s resource ID. **/
        resourceId: String;
        /** Specifies a test invoke method request&#x27;s HTTP method. **/
        httpMethod: String;
        /** The URI path, including query string, of the simulated invocation request. Use
this to specify path parameters and query string parameters. **/
        pathWithQueryString?: String;
        /** The simulated request body of an incoming invocation request. **/
        body?: String;
        /** A key-value map of headers to simulate an incoming invocation request. **/
        headers?: MapOfHeaderValues;
        /** A ClientCertificate identifier to use in the test invocation. API Gateway will
use the certificate when making the HTTPS request to the defined back-end
endpoint. **/
        clientCertificateId?: String;
        /** A key-value map of stage variables to simulate an invocation on a deployed Stage 
. **/
        stageVariables?: MapOfStringToString;
    }
    export interface TestInvokeMethodResponse {
        /** The HTTP status code. **/
        status?: Integer;
        /** The body of the HTTP response. **/
        body?: String;
        /** The headers of the HTTP response. **/
        headers?: MapOfHeaderValues;
        /** The Amazon API Gateway execution log for the test invoke request. **/
        log?: String;
        /** The execution latency of the test invoke request. **/
        latency?: Long;
    }
    export interface ThrottleSettings {
        /** The API request burst limit, the maximum rate limit over a time ranging from one
to a few seconds, depending upon whether the underlying token bucket is at its
full capacity. **/
        burstLimit?: Integer;
        /** The API request steady-state rate limit. **/
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
        /** A list of update operations to be applied to the specified resource and in the
order specified in this list. **/
        patchOperations?: ListOfPatchOperation;
    }
    export interface UpdateApiKeyRequest {
        /** The identifier of the ApiKey resource to be updated. **/
        apiKey: String;
        /** A list of update operations to be applied to the specified resource and in the
order specified in this list. **/
        patchOperations?: ListOfPatchOperation;
    }
    export interface UpdateAuthorizerRequest {
        /** The RestApi identifier for the Authorizer resource. **/
        restApiId: String;
        /** The identifier of the Authorizer resource. **/
        authorizerId: String;
        /** A list of update operations to be applied to the specified resource and in the
order specified in this list. **/
        patchOperations?: ListOfPatchOperation;
    }
    export interface UpdateBasePathMappingRequest {
        /** The domain name of the BasePathMapping resource to change. **/
        domainName: String;
        /** The base path of the BasePathMapping resource to change. **/
        basePath: String;
        /** A list of update operations to be applied to the specified resource and in the
order specified in this list. **/
        patchOperations?: ListOfPatchOperation;
    }
    export interface UpdateClientCertificateRequest {
        /** The identifier of the ClientCertificate resource to be updated. **/
        clientCertificateId: String;
        /** A list of update operations to be applied to the specified resource and in the
order specified in this list. **/
        patchOperations?: ListOfPatchOperation;
    }
    export interface UpdateDeploymentRequest {
        /** The replacement identifier of the RestApi resource for the Deployment resource
to change information about. **/
        restApiId: String;
        /** The replacement identifier for the Deployment resource to change information
about. **/
        deploymentId: String;
        /** A list of update operations to be applied to the specified resource and in the
order specified in this list. **/
        patchOperations?: ListOfPatchOperation;
    }
    export interface UpdateDomainNameRequest {
        /** The name of the DomainName resource to be changed. **/
        domainName: String;
        /** A list of update operations to be applied to the specified resource and in the
order specified in this list. **/
        patchOperations?: ListOfPatchOperation;
    }
    export interface UpdateIntegrationRequest {
        /** Represents an update integration request&#x27;s API identifier. **/
        restApiId: String;
        /** Represents an update integration request&#x27;s resource identifier. **/
        resourceId: String;
        /** Represents an update integration request&#x27;s HTTP method. **/
        httpMethod: String;
        /** A list of update operations to be applied to the specified resource and in the
order specified in this list. **/
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
        /** A list of update operations to be applied to the specified resource and in the
order specified in this list. **/
        patchOperations?: ListOfPatchOperation;
    }
    export interface UpdateMethodRequest {
        /** The RestApi identifier for the Method resource. **/
        restApiId: String;
        /** The Resource identifier for the Method resource. **/
        resourceId: String;
        /** The HTTP verb of the Method resource. **/
        httpMethod: String;
        /** A list of update operations to be applied to the specified resource and in the
order specified in this list. **/
        patchOperations?: ListOfPatchOperation;
    }
    export interface UpdateMethodResponseRequest {
        /** The RestApi identifier for the MethodResponse resource. **/
        restApiId: String;
        /** The Resource identifier for the MethodResponse resource. **/
        resourceId: String;
        /** The HTTP verb of the Method resource. **/
        httpMethod: String;
        /** The status code for the MethodResponse resource. **/
        statusCode: StatusCode;
        /** A list of update operations to be applied to the specified resource and in the
order specified in this list. **/
        patchOperations?: ListOfPatchOperation;
    }
    export interface UpdateModelRequest {
        /** The RestApi identifier under which the model exists. **/
        restApiId: String;
        /** The name of the model to update. **/
        modelName: String;
        /** A list of update operations to be applied to the specified resource and in the
order specified in this list. **/
        patchOperations?: ListOfPatchOperation;
    }
    export interface UpdateResourceRequest {
        /** The RestApi identifier for the Resource resource. **/
        restApiId: String;
        /** The identifier of the Resource resource. **/
        resourceId: String;
        /** A list of update operations to be applied to the specified resource and in the
order specified in this list. **/
        patchOperations?: ListOfPatchOperation;
    }
    export interface UpdateRestApiRequest {
        /** The ID of the RestApi you want to update. **/
        restApiId: String;
        /** A list of update operations to be applied to the specified resource and in the
order specified in this list. **/
        patchOperations?: ListOfPatchOperation;
    }
    export interface UpdateStageRequest {
        /** The identifier of the RestApi resource for the Stage resource to change
information about. **/
        restApiId: String;
        /** The name of the Stage resource to change information about. **/
        stageName: String;
        /** A list of update operations to be applied to the specified resource and in the
order specified in this list. **/
        patchOperations?: ListOfPatchOperation;
    }
    export interface UpdateUsagePlanRequest {
        /** The Id of the to-be-updated usage plan. **/
        usagePlanId: String;
        /** A list of update operations to be applied to the specified resource and in the
order specified in this list. **/
        patchOperations?: ListOfPatchOperation;
    }
    export interface UpdateUsageRequest {
        /** The Id of the usage plan associated with the usage data. **/
        usagePlanId: String;
        /** The identifier of the API key associated with the usage plan in which a
temporary extension is granted to the remaining quota. **/
        keyId: String;
        /** A list of update operations to be applied to the specified resource and in the
order specified in this list. **/
        patchOperations?: ListOfPatchOperation;
    }
    export interface Usage {
        /** The plan Id associated with this usage data. **/
        usagePlanId?: String;
        /** The starting date of the usage data. **/
        startDate?: String;
        /** The ending date of the usage data. **/
        endDate?: String;
        position?: String;
        /** The usage data, as daily logs of used and remaining quotas, over the specified
time interval indexed over the API keys in a usage plan. For example, {...,
&quot;values&quot; : { &quot;{api_key}&quot; : [ [0, 100], [10, 90], [100, 10]]} , where {api_key} 
stands for an API key value and the daily log entry is of the format [used
quota, remaining quota] . **/
        items?: MapOfKeyUsages;
    }
    export interface UsagePlan {
        /** The identifier of a UsagePlan resource. **/
        id?: String;
        /** The name of a usage plan. **/
        name?: String;
        /** The description of a usage plan. **/
        description?: String;
        /** The associated API stages of a usage plan. **/
        apiStages?: ListOfApiStage;
        /** The request throttle limits of a usage plan. **/
        throttle?: ThrottleSettings;
        /** The maximum number of permitted requests per a given unit time interval. **/
        quota?: QuotaSettings;
    }
    export interface UsagePlanKey {
        /** The Id of a usage plan key. **/
        id?: String;
        /** The type of a usage plan key. Currently, the valid key type is API_KEY . **/
        type?: String;
        /** The value of a usage plan key. **/
        value?: String;
        /** The name of a usage plan key. **/
        name?: String;
    }
    export interface UsagePlanKeys {
        position?: String;
        /** Gets the current item of the usage plan keys collection. **/
        items?: ListOfUsagePlanKey;
    }
    export interface UsagePlans {
        position?: String;
        /** Gets the current item when enumerating the collection of UsagePlan . **/
        items?: ListOfUsagePlan;
    }
  }
}
