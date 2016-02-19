// Type definitions for aws-sdk - Amazon API Gateway
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

///<reference path="./aws-sdk-common.d.ts" />

declare module "aws-sdk" {

    /*
     * apiVersion: 2015-07-09
     * endpointPrefix: apigateway
     * serviceAbbreviation: 
     * signatureVersion: v4
     * protocol: rest-json
     */
    export class APIGateway extends Service {
      constructor(options?: any);
      endpoint: Endpoint;
      createApiKey(params: APIGateway.CreateApiKeyRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|APIGateway.LimitExceededException|APIGateway.BadRequestException|any, data: APIGateway.ApiKey|any) => void): Request;
      createAuthorizer(params: APIGateway.CreateAuthorizerRequest, callback?: (err: APIGateway.BadRequestException|APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.LimitExceededException|APIGateway.TooManyRequestsException|any, data: APIGateway.Authorizer|any) => void): Request;
      createBasePathMapping(params: APIGateway.CreateBasePathMappingRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.ConflictException|APIGateway.BadRequestException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|any, data: APIGateway.BasePathMapping|any) => void): Request;
      createDeployment(params: APIGateway.CreateDeploymentRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.BadRequestException|APIGateway.NotFoundException|APIGateway.ConflictException|APIGateway.LimitExceededException|APIGateway.TooManyRequestsException|APIGateway.ServiceUnavailableException|any, data: APIGateway.Deployment|any) => void): Request;
      createDomainName(params: APIGateway.CreateDomainNameRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.BadRequestException|APIGateway.TooManyRequestsException|any, data: APIGateway.DomainName|any) => void): Request;
      createModel(params: APIGateway.CreateModelRequest, callback?: (err: APIGateway.BadRequestException|APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.ConflictException|APIGateway.LimitExceededException|APIGateway.TooManyRequestsException|any, data: APIGateway.Model|any) => void): Request;
      createResource(params: APIGateway.CreateResourceRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.ConflictException|APIGateway.LimitExceededException|APIGateway.BadRequestException|APIGateway.TooManyRequestsException|any, data: APIGateway.Resource|any) => void): Request;
      createRestApi(params: APIGateway.CreateRestApiRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.LimitExceededException|APIGateway.BadRequestException|APIGateway.TooManyRequestsException|any, data: APIGateway.RestApi|any) => void): Request;
      createStage(params: APIGateway.CreateStageRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.BadRequestException|APIGateway.NotFoundException|APIGateway.ConflictException|APIGateway.LimitExceededException|APIGateway.TooManyRequestsException|any, data: APIGateway.Stage|any) => void): Request;
      deleteApiKey(params: APIGateway.DeleteApiKeyRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|any, data: any) => void): Request;
      deleteAuthorizer(params: APIGateway.DeleteAuthorizerRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|APIGateway.BadRequestException|APIGateway.ConflictException|any, data: any) => void): Request;
      deleteBasePathMapping(params: APIGateway.DeleteBasePathMappingRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|any, data: any) => void): Request;
      deleteClientCertificate(params: APIGateway.DeleteClientCertificateRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.TooManyRequestsException|APIGateway.BadRequestException|APIGateway.NotFoundException|any, data: any) => void): Request;
      deleteDeployment(params: APIGateway.DeleteDeploymentRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.BadRequestException|APIGateway.TooManyRequestsException|any, data: any) => void): Request;
      deleteDomainName(params: APIGateway.DeleteDomainNameRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|any, data: any) => void): Request;
      deleteIntegration(params: APIGateway.DeleteIntegrationRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|any, data: any) => void): Request;
      deleteIntegrationResponse(params: APIGateway.DeleteIntegrationResponseRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|any, data: any) => void): Request;
      deleteMethod(params: APIGateway.DeleteMethodRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|any, data: any) => void): Request;
      deleteMethodResponse(params: APIGateway.DeleteMethodResponseRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|any, data: any) => void): Request;
      deleteModel(params: APIGateway.DeleteModelRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|APIGateway.BadRequestException|APIGateway.ConflictException|any, data: any) => void): Request;
      deleteResource(params: APIGateway.DeleteResourceRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.BadRequestException|APIGateway.TooManyRequestsException|any, data: any) => void): Request;
      deleteRestApi(params: APIGateway.DeleteRestApiRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|any, data: any) => void): Request;
      deleteStage(params: APIGateway.DeleteStageRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|any, data: any) => void): Request;
      flushStageCache(params: APIGateway.FlushStageCacheRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.BadRequestException|APIGateway.TooManyRequestsException|any, data: any) => void): Request;
      generateClientCertificate(params: APIGateway.GenerateClientCertificateRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.TooManyRequestsException|APIGateway.LimitExceededException|any, data: APIGateway.ClientCertificate|any) => void): Request;
      getAccount(params: APIGateway.GetAccountRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|any, data: APIGateway.Account|any) => void): Request;
      getApiKey(params: APIGateway.GetApiKeyRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|any, data: APIGateway.ApiKey|any) => void): Request;
      getApiKeys(params: APIGateway.GetApiKeysRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.TooManyRequestsException|any, data: APIGateway.ApiKeys|any) => void): Request;
      getAuthorizer(params: APIGateway.GetAuthorizerRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|any, data: APIGateway.Authorizer|any) => void): Request;
      getAuthorizers(params: APIGateway.GetAuthorizersRequest, callback?: (err: APIGateway.BadRequestException|APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|any, data: APIGateway.Authorizers|any) => void): Request;
      getBasePathMapping(params: APIGateway.GetBasePathMappingRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|any, data: APIGateway.BasePathMapping|any) => void): Request;
      getBasePathMappings(params: APIGateway.GetBasePathMappingsRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|any, data: APIGateway.BasePathMappings|any) => void): Request;
      getClientCertificate(params: APIGateway.GetClientCertificateRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|any, data: APIGateway.ClientCertificate|any) => void): Request;
      getClientCertificates(params: APIGateway.GetClientCertificatesRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.TooManyRequestsException|any, data: APIGateway.ClientCertificates|any) => void): Request;
      getDeployment(params: APIGateway.GetDeploymentRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|APIGateway.ServiceUnavailableException|any, data: APIGateway.Deployment|any) => void): Request;
      getDeployments(params: APIGateway.GetDeploymentsRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.TooManyRequestsException|APIGateway.ServiceUnavailableException|any, data: APIGateway.Deployments|any) => void): Request;
      getDomainName(params: APIGateway.GetDomainNameRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.ServiceUnavailableException|APIGateway.TooManyRequestsException|any, data: APIGateway.DomainName|any) => void): Request;
      getDomainNames(params: APIGateway.GetDomainNamesRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.TooManyRequestsException|any, data: APIGateway.DomainNames|any) => void): Request;
      getExport(params: APIGateway.GetExportRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.BadRequestException|APIGateway.TooManyRequestsException|any, data: APIGateway.ExportResponse|any) => void): Request;
      getIntegration(params: APIGateway.GetIntegrationRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|any, data: APIGateway.Integration|any) => void): Request;
      getIntegrationResponse(params: APIGateway.GetIntegrationResponseRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|any, data: APIGateway.IntegrationResponse|any) => void): Request;
      getMethod(params: APIGateway.GetMethodRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|any, data: APIGateway.Method|any) => void): Request;
      getMethodResponse(params: APIGateway.GetMethodResponseRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|any, data: APIGateway.MethodResponse|any) => void): Request;
      getModel(params: APIGateway.GetModelRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|any, data: APIGateway.Model|any) => void): Request;
      getModelTemplate(params: APIGateway.GetModelTemplateRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.BadRequestException|APIGateway.TooManyRequestsException|any, data: APIGateway.Template|any) => void): Request;
      getModels(params: APIGateway.GetModelsRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|any, data: APIGateway.Models|any) => void): Request;
      getResource(params: APIGateway.GetResourceRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|any, data: APIGateway.Resource|any) => void): Request;
      getResources(params: APIGateway.GetResourcesRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|any, data: APIGateway.Resources|any) => void): Request;
      getRestApi(params: APIGateway.GetRestApiRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|any, data: APIGateway.RestApi|any) => void): Request;
      getRestApis(params: APIGateway.GetRestApisRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.TooManyRequestsException|any, data: APIGateway.RestApis|any) => void): Request;
      getSdk(params: APIGateway.GetSdkRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.BadRequestException|APIGateway.TooManyRequestsException|any, data: APIGateway.SdkResponse|any) => void): Request;
      getStage(params: APIGateway.GetStageRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|any, data: APIGateway.Stage|any) => void): Request;
      getStages(params: APIGateway.GetStagesRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|any, data: APIGateway.Stages|any) => void): Request;
      putIntegration(params: APIGateway.PutIntegrationRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.BadRequestException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|any, data: APIGateway.Integration|any) => void): Request;
      putIntegrationResponse(params: APIGateway.PutIntegrationResponseRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.LimitExceededException|APIGateway.BadRequestException|APIGateway.TooManyRequestsException|any, data: APIGateway.IntegrationResponse|any) => void): Request;
      putMethod(params: APIGateway.PutMethodRequest, callback?: (err: APIGateway.BadRequestException|APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.ConflictException|APIGateway.LimitExceededException|APIGateway.TooManyRequestsException|any, data: APIGateway.Method|any) => void): Request;
      putMethodResponse(params: APIGateway.PutMethodResponseRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.ConflictException|APIGateway.LimitExceededException|APIGateway.BadRequestException|APIGateway.TooManyRequestsException|any, data: APIGateway.MethodResponse|any) => void): Request;
      testInvokeMethod(params: APIGateway.TestInvokeMethodRequest, callback?: (err: APIGateway.BadRequestException|APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|any, data: APIGateway.TestInvokeMethodResponse|any) => void): Request;
      updateAccount(params: APIGateway.UpdateAccountRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.BadRequestException|APIGateway.NotFoundException|APIGateway.TooManyRequestsException|any, data: APIGateway.Account|any) => void): Request;
      updateApiKey(params: APIGateway.UpdateApiKeyRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.BadRequestException|APIGateway.TooManyRequestsException|any, data: APIGateway.ApiKey|any) => void): Request;
      updateAuthorizer(params: APIGateway.UpdateAuthorizerRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.BadRequestException|APIGateway.TooManyRequestsException|any, data: APIGateway.Authorizer|any) => void): Request;
      updateBasePathMapping(params: APIGateway.UpdateBasePathMappingRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.ConflictException|APIGateway.BadRequestException|APIGateway.TooManyRequestsException|any, data: APIGateway.BasePathMapping|any) => void): Request;
      updateClientCertificate(params: APIGateway.UpdateClientCertificateRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.TooManyRequestsException|APIGateway.BadRequestException|APIGateway.NotFoundException|any, data: APIGateway.ClientCertificate|any) => void): Request;
      updateDeployment(params: APIGateway.UpdateDeploymentRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.BadRequestException|APIGateway.TooManyRequestsException|APIGateway.ServiceUnavailableException|any, data: APIGateway.Deployment|any) => void): Request;
      updateDomainName(params: APIGateway.UpdateDomainNameRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.BadRequestException|APIGateway.TooManyRequestsException|any, data: APIGateway.DomainName|any) => void): Request;
      updateIntegration(params: APIGateway.UpdateIntegrationRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.BadRequestException|APIGateway.TooManyRequestsException|any, data: APIGateway.Integration|any) => void): Request;
      updateIntegrationResponse(params: APIGateway.UpdateIntegrationResponseRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.BadRequestException|APIGateway.TooManyRequestsException|any, data: APIGateway.IntegrationResponse|any) => void): Request;
      updateMethod(params: APIGateway.UpdateMethodRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.BadRequestException|APIGateway.TooManyRequestsException|any, data: APIGateway.Method|any) => void): Request;
      updateMethodResponse(params: APIGateway.UpdateMethodResponseRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.ConflictException|APIGateway.LimitExceededException|APIGateway.BadRequestException|APIGateway.TooManyRequestsException|any, data: APIGateway.MethodResponse|any) => void): Request;
      updateModel(params: APIGateway.UpdateModelRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.BadRequestException|APIGateway.TooManyRequestsException|any, data: APIGateway.Model|any) => void): Request;
      updateResource(params: APIGateway.UpdateResourceRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.ConflictException|APIGateway.BadRequestException|APIGateway.TooManyRequestsException|any, data: APIGateway.Resource|any) => void): Request;
      updateRestApi(params: APIGateway.UpdateRestApiRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.ConflictException|APIGateway.BadRequestException|APIGateway.TooManyRequestsException|any, data: APIGateway.RestApi|any) => void): Request;
      updateStage(params: APIGateway.UpdateStageRequest, callback?: (err: APIGateway.UnauthorizedException|APIGateway.NotFoundException|APIGateway.ConflictException|APIGateway.BadRequestException|APIGateway.TooManyRequestsException|any, data: APIGateway.Stage|any) => void): Request;

      // Found on JS Sources - Sorry for the inconvenience :)
      setAcceptHeader(...args: any[]): any
      // Found on JS Sources - Sorry for the inconvenience :)
      setupRequestListeners(...args: any[]): any
    }

    export module APIGateway {
        export type AuthorizerType = string;
        export type Blob = any;    // type: blob
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
        export type MapOfHeaderValues = {[key:string]: String};
        export type MapOfIntegrationResponse = {[key:string]: IntegrationResponse};
        export type MapOfMethod = {[key:string]: Method};
        export type MapOfMethodResponse = {[key:string]: MethodResponse};
        export type MapOfMethodSettings = {[key:string]: MethodSetting};
        export type MapOfMethodSnapshot = {[key:string]: MethodSnapshot};
        export type MapOfStringToBoolean = {[key:string]: NullableBoolean};
        export type MapOfStringToString = {[key:string]: String};
        export type NullableBoolean = boolean;
        export type NullableInteger = number;
        export type PathToMapOfMethodSnapshot = {[key:string]: MapOfMethodSnapshot};
        export type StatusCode = string;    // pattern: &quot;[1-5]\d\d&quot;
        export type String = string;
        export type Timestamp = number;
        export type op = string;

        export interface Account {
            cloudwatchRoleArn?: String;
            throttleSettings?: ThrottleSettings;
        }
        export interface ApiKey {
            id?: String;
            name?: String;
            description?: String;
            enabled?: Boolean;
            stageKeys?: ListOfString;
            createdDate?: Timestamp;
            lastUpdatedDate?: Timestamp;
        }
        export interface ApiKeys {
            position?: String;
            items?: ListOfApiKey;
        }
        export interface Authorizer {
            id?: String;
            name?: String;
            type?: AuthorizerType;
            authorizerUri?: String;
            authorizerCredentials?: String;
            identitySource?: String;
            identityValidationExpression?: String;
            authorizerResultTtlInSeconds?: NullableInteger;
        }
        export interface Authorizers {
            position?: String;
            items?: ListOfAuthorizer;
        }
        export interface BadRequestException {
            message?: String;
        }
        export interface BasePathMapping {
            basePath?: String;
            restApiId?: String;
            stage?: String;
        }
        export interface BasePathMappings {
            position?: String;
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
            name?: String;
            description?: String;
            enabled?: Boolean;
            stageKeys?: ListOfStageKeys;
        }
        export interface CreateAuthorizerRequest {
            restApiId: String;
            name: String;
            type: AuthorizerType;
            authorizerUri: String;
            authorizerCredentials?: String;
            identitySource: String;
            identityValidationExpression?: String;
            authorizerResultTtlInSeconds?: NullableInteger;
        }
        export interface CreateBasePathMappingRequest {
            domainName: String;
            basePath?: String;
            restApiId: String;
            stage?: String;
        }
        export interface CreateDeploymentRequest {
            restApiId: String;
            stageName: String;
            stageDescription?: String;
            description?: String;
            cacheClusterEnabled?: NullableBoolean;
            cacheClusterSize?: CacheClusterSize;
            variables?: MapOfStringToString;
        }
        export interface CreateDomainNameRequest {
            domainName: String;
            certificateName: String;
            certificateBody: String;
            certificatePrivateKey: String;
            certificateChain: String;
        }
        export interface CreateModelRequest {
            restApiId: String;
            name: String;
            description?: String;
            schema?: String;
            contentType: String;
        }
        export interface CreateResourceRequest {
            restApiId: String;
            parentId: String;
            pathPart: String;
        }
        export interface CreateRestApiRequest {
            name: String;
            description?: String;
            cloneFrom?: String;
        }
        export interface CreateStageRequest {
            restApiId: String;
            stageName: String;
            deploymentId: String;
            description?: String;
            cacheClusterEnabled?: Boolean;
            cacheClusterSize?: CacheClusterSize;
            variables?: MapOfStringToString;
        }
        export interface DeleteApiKeyRequest {
            apiKey: String;
        }
        export interface DeleteAuthorizerRequest {
            restApiId: String;
            authorizerId: String;
        }
        export interface DeleteBasePathMappingRequest {
            domainName: String;
            basePath: String;
        }
        export interface DeleteClientCertificateRequest {
            clientCertificateId: String;
        }
        export interface DeleteDeploymentRequest {
            restApiId: String;
            deploymentId: String;
        }
        export interface DeleteDomainNameRequest {
            domainName: String;
        }
        export interface DeleteIntegrationRequest {
            restApiId: String;
            resourceId: String;
            httpMethod: String;
        }
        export interface DeleteIntegrationResponseRequest {
            restApiId: String;
            resourceId: String;
            httpMethod: String;
            statusCode: StatusCode;
        }
        export interface DeleteMethodRequest {
            restApiId: String;
            resourceId: String;
            httpMethod: String;
        }
        export interface DeleteMethodResponseRequest {
            restApiId: String;
            resourceId: String;
            httpMethod: String;
            statusCode: StatusCode;
        }
        export interface DeleteModelRequest {
            restApiId: String;
            modelName: String;
        }
        export interface DeleteResourceRequest {
            restApiId: String;
            resourceId: String;
        }
        export interface DeleteRestApiRequest {
            restApiId: String;
        }
        export interface DeleteStageRequest {
            restApiId: String;
            stageName: String;
        }
        export interface Deployment {
            id?: String;
            description?: String;
            createdDate?: Timestamp;
            apiSummary?: PathToMapOfMethodSnapshot;
        }
        export interface Deployments {
            position?: String;
            items?: ListOfDeployment;
        }
        export interface DomainName {
            domainName?: String;
            certificateName?: String;
            certificateUploadDate?: Timestamp;
            distributionDomainName?: String;
        }
        export interface DomainNames {
            position?: String;
            items?: ListOfDomainName;
        }
        export interface ExportResponse {
            contentType?: String;
            contentDisposition?: String;
            body?: Blob;
        }
        export interface FlushStageCacheRequest {
            restApiId: String;
            stageName: String;
        }
        export interface GenerateClientCertificateRequest {
            description?: String;
        }
        export interface GetAccountRequest {
        }
        export interface GetApiKeyRequest {
            apiKey: String;
        }
        export interface GetApiKeysRequest {
            position?: String;
            limit?: NullableInteger;
        }
        export interface GetAuthorizerRequest {
            restApiId: String;
            authorizerId: String;
        }
        export interface GetAuthorizersRequest {
            restApiId: String;
            position?: String;
            limit?: NullableInteger;
        }
        export interface GetBasePathMappingRequest {
            domainName: String;
            basePath: String;
        }
        export interface GetBasePathMappingsRequest {
            domainName: String;
            position?: String;
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
            restApiId: String;
            deploymentId: String;
        }
        export interface GetDeploymentsRequest {
            restApiId: String;
            position?: String;
            limit?: NullableInteger;
        }
        export interface GetDomainNameRequest {
            domainName: String;
        }
        export interface GetDomainNamesRequest {
            position?: String;
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
            restApiId: String;
            resourceId: String;
            httpMethod: String;
        }
        export interface GetIntegrationResponseRequest {
            restApiId: String;
            resourceId: String;
            httpMethod: String;
            statusCode: StatusCode;
        }
        export interface GetMethodRequest {
            restApiId: String;
            resourceId: String;
            httpMethod: String;
        }
        export interface GetMethodResponseRequest {
            restApiId: String;
            resourceId: String;
            httpMethod: String;
            statusCode: StatusCode;
        }
        export interface GetModelRequest {
            restApiId: String;
            modelName: String;
            flatten?: Boolean;
        }
        export interface GetModelTemplateRequest {
            restApiId: String;
            modelName: String;
        }
        export interface GetModelsRequest {
            restApiId: String;
            position?: String;
            limit?: NullableInteger;
        }
        export interface GetResourceRequest {
            restApiId: String;
            resourceId: String;
        }
        export interface GetResourcesRequest {
            restApiId: String;
            position?: String;
            limit?: NullableInteger;
        }
        export interface GetRestApiRequest {
            restApiId: String;
        }
        export interface GetRestApisRequest {
            position?: String;
            limit?: NullableInteger;
        }
        export interface GetSdkRequest {
            restApiId: String;
            stageName: String;
            sdkType: String;
            parameters?: MapOfStringToString;
        }
        export interface GetStageRequest {
            restApiId: String;
            stageName: String;
        }
        export interface GetStagesRequest {
            restApiId: String;
            deploymentId?: String;
        }
        export interface Integration {
            type?: IntegrationType;
            httpMethod?: String;
            uri?: String;
            credentials?: String;
            requestParameters?: MapOfStringToString;
            requestTemplates?: MapOfStringToString;
            cacheNamespace?: String;
            cacheKeyParameters?: ListOfString;
            integrationResponses?: MapOfIntegrationResponse;
        }
        export interface IntegrationResponse {
            statusCode?: StatusCode;
            selectionPattern?: String;
            responseParameters?: MapOfStringToString;
            responseTemplates?: MapOfStringToString;
        }
        export interface LimitExceededException {
            retryAfterSeconds?: String;
            message?: String;
        }
        export interface Method {
            httpMethod?: String;
            authorizationType?: String;
            authorizerId?: String;
            apiKeyRequired?: NullableBoolean;
            requestParameters?: MapOfStringToBoolean;
            requestModels?: MapOfStringToString;
            methodResponses?: MapOfMethodResponse;
            methodIntegration?: Integration;
        }
        export interface MethodResponse {
            statusCode?: StatusCode;
            responseParameters?: MapOfStringToBoolean;
            responseModels?: MapOfStringToString;
        }
        export interface MethodSetting {
            metricsEnabled?: Boolean;
            loggingLevel?: String;
            dataTraceEnabled?: Boolean;
            throttlingBurstLimit?: Integer;
            throttlingRateLimit?: Double;
            cachingEnabled?: Boolean;
            cacheTtlInSeconds?: Integer;
            cacheDataEncrypted?: Boolean;
        }
        export interface MethodSnapshot {
            authorizationType?: String;
            apiKeyRequired?: Boolean;
        }
        export interface Model {
            id?: String;
            name?: String;
            description?: String;
            schema?: String;
            contentType?: String;
        }
        export interface Models {
            position?: String;
            items?: ListOfModel;
        }
        export interface NotFoundException {
            message?: String;
        }
        export interface PatchOperation {
            op?: op;
            path?: String;
            value?: String;
            from?: String;
        }
        export interface PutIntegrationRequest {
            restApiId: String;
            resourceId: String;
            httpMethod: String;
            type: IntegrationType;
            integrationHttpMethod?: String;
            uri?: String;
            credentials?: String;
            requestParameters?: MapOfStringToString;
            requestTemplates?: MapOfStringToString;
            cacheNamespace?: String;
            cacheKeyParameters?: ListOfString;
        }
        export interface PutIntegrationResponseRequest {
            restApiId: String;
            resourceId: String;
            httpMethod: String;
            statusCode: StatusCode;
            selectionPattern?: String;
            responseParameters?: MapOfStringToString;
            responseTemplates?: MapOfStringToString;
        }
        export interface PutMethodRequest {
            restApiId: String;
            resourceId: String;
            httpMethod: String;
            authorizationType: String;
            authorizerId?: String;
            apiKeyRequired?: Boolean;
            requestParameters?: MapOfStringToBoolean;
            requestModels?: MapOfStringToString;
        }
        export interface PutMethodResponseRequest {
            restApiId: String;
            resourceId: String;
            httpMethod: String;
            statusCode: StatusCode;
            responseParameters?: MapOfStringToBoolean;
            responseModels?: MapOfStringToString;
        }
        export interface Resource {
            id?: String;
            parentId?: String;
            pathPart?: String;
            path?: String;
            resourceMethods?: MapOfMethod;
        }
        export interface Resources {
            position?: String;
            items?: ListOfResource;
        }
        export interface RestApi {
            id?: String;
            name?: String;
            description?: String;
            createdDate?: Timestamp;
        }
        export interface RestApis {
            position?: String;
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
            deploymentId?: String;
            clientCertificateId?: String;
            stageName?: String;
            description?: String;
            cacheClusterEnabled?: Boolean;
            cacheClusterSize?: CacheClusterSize;
            cacheClusterStatus?: CacheClusterStatus;
            methodSettings?: MapOfMethodSettings;
            variables?: MapOfStringToString;
            createdDate?: Timestamp;
            lastUpdatedDate?: Timestamp;
        }
        export interface StageKey {
            restApiId?: String;
            stageName?: String;
        }
        export interface Stages {
            item?: ListOfStage;
        }
        export interface Template {
            value?: String;
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
            status?: Integer;
            body?: String;
            headers?: MapOfHeaderValues;
            log?: String;
            latency?: Long;
        }
        export interface ThrottleSettings {
            burstLimit?: Integer;
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
            patchOperations?: ListOfPatchOperation;
        }
        export interface UpdateApiKeyRequest {
            apiKey: String;
            patchOperations?: ListOfPatchOperation;
        }
        export interface UpdateAuthorizerRequest {
            restApiId: String;
            authorizerId: String;
            patchOperations?: ListOfPatchOperation;
        }
        export interface UpdateBasePathMappingRequest {
            domainName: String;
            basePath: String;
            patchOperations?: ListOfPatchOperation;
        }
        export interface UpdateClientCertificateRequest {
            clientCertificateId: String;
            patchOperations?: ListOfPatchOperation;
        }
        export interface UpdateDeploymentRequest {
            restApiId: String;
            deploymentId: String;
            patchOperations?: ListOfPatchOperation;
        }
        export interface UpdateDomainNameRequest {
            domainName: String;
            patchOperations?: ListOfPatchOperation;
        }
        export interface UpdateIntegrationRequest {
            restApiId: String;
            resourceId: String;
            httpMethod: String;
            patchOperations?: ListOfPatchOperation;
        }
        export interface UpdateIntegrationResponseRequest {
            restApiId: String;
            resourceId: String;
            httpMethod: String;
            statusCode: StatusCode;
            patchOperations?: ListOfPatchOperation;
        }
        export interface UpdateMethodRequest {
            restApiId: String;
            resourceId: String;
            httpMethod: String;
            patchOperations?: ListOfPatchOperation;
        }
        export interface UpdateMethodResponseRequest {
            restApiId: String;
            resourceId: String;
            httpMethod: String;
            statusCode: StatusCode;
            patchOperations?: ListOfPatchOperation;
        }
        export interface UpdateModelRequest {
            restApiId: String;
            modelName: String;
            patchOperations?: ListOfPatchOperation;
        }
        export interface UpdateResourceRequest {
            restApiId: String;
            resourceId: String;
            patchOperations?: ListOfPatchOperation;
        }
        export interface UpdateRestApiRequest {
            restApiId: String;
            patchOperations?: ListOfPatchOperation;
        }
        export interface UpdateStageRequest {
            restApiId: String;
            stageName: String;
            patchOperations?: ListOfPatchOperation;
        }

    }
}
