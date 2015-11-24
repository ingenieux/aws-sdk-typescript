// DO NOT EDIT!
//

///<reference path="./aws-sdk-common.d.ts" />
declare module "aws-sdk" {
    export class APIGateway {
      constructor(options?: any);
      createApiKey(params: APIGatewayCreateApiKeyRequest, callback: (err: APIGatewayUnauthorizedException|APIGatewayNotFoundException|APIGatewayTooManyRequestsException|APIGatewayLimitExceededException|APIGatewayBadRequestException|any, data: APIGatewayApiKey|any) => void): void;
      createBasePathMapping(params: APIGatewayCreateBasePathMappingRequest, callback: (err: APIGatewayUnauthorizedException|APIGatewayConflictException|APIGatewayBadRequestException|APIGatewayNotFoundException|APIGatewayTooManyRequestsException|any, data: APIGatewayBasePathMapping|any) => void): void;
      createDeployment(params: APIGatewayCreateDeploymentRequest, callback: (err: APIGatewayUnauthorizedException|APIGatewayBadRequestException|APIGatewayNotFoundException|APIGatewayConflictException|APIGatewayLimitExceededException|APIGatewayTooManyRequestsException|APIGatewayServiceUnavailableException|any, data: APIGatewayDeployment|any) => void): void;
      createDomainName(params: APIGatewayCreateDomainNameRequest, callback: (err: APIGatewayUnauthorizedException|APIGatewayBadRequestException|APIGatewayTooManyRequestsException|any, data: APIGatewayDomainName|any) => void): void;
      createModel(params: APIGatewayCreateModelRequest, callback: (err: APIGatewayBadRequestException|APIGatewayUnauthorizedException|APIGatewayNotFoundException|APIGatewayConflictException|APIGatewayLimitExceededException|APIGatewayTooManyRequestsException|any, data: APIGatewayModel|any) => void): void;
      createResource(params: APIGatewayCreateResourceRequest, callback: (err: APIGatewayUnauthorizedException|APIGatewayNotFoundException|APIGatewayConflictException|APIGatewayLimitExceededException|APIGatewayBadRequestException|APIGatewayTooManyRequestsException|any, data: APIGatewayResource|any) => void): void;
      createRestApi(params: APIGatewayCreateRestApiRequest, callback: (err: APIGatewayUnauthorizedException|APIGatewayLimitExceededException|APIGatewayBadRequestException|APIGatewayTooManyRequestsException|any, data: APIGatewayRestApi|any) => void): void;
      createStage(params: APIGatewayCreateStageRequest, callback: (err: APIGatewayUnauthorizedException|APIGatewayBadRequestException|APIGatewayNotFoundException|APIGatewayConflictException|APIGatewayLimitExceededException|APIGatewayTooManyRequestsException|any, data: APIGatewayStage|any) => void): void;
      deleteApiKey(params: APIGatewayDeleteApiKeyRequest, callback: (err: APIGatewayUnauthorizedException|APIGatewayNotFoundException|APIGatewayTooManyRequestsException|any, data: any) => void): void;
      deleteBasePathMapping(params: APIGatewayDeleteBasePathMappingRequest, callback: (err: APIGatewayUnauthorizedException|APIGatewayNotFoundException|APIGatewayTooManyRequestsException|any, data: any) => void): void;
      deleteClientCertificate(params: APIGatewayDeleteClientCertificateRequest, callback: (err: APIGatewayUnauthorizedException|APIGatewayTooManyRequestsException|APIGatewayBadRequestException|APIGatewayNotFoundException|any, data: any) => void): void;
      deleteDeployment(params: APIGatewayDeleteDeploymentRequest, callback: (err: APIGatewayUnauthorizedException|APIGatewayNotFoundException|APIGatewayBadRequestException|APIGatewayTooManyRequestsException|any, data: any) => void): void;
      deleteDomainName(params: APIGatewayDeleteDomainNameRequest, callback: (err: APIGatewayUnauthorizedException|APIGatewayNotFoundException|APIGatewayTooManyRequestsException|any, data: any) => void): void;
      deleteIntegration(params: APIGatewayDeleteIntegrationRequest, callback: (err: APIGatewayUnauthorizedException|APIGatewayNotFoundException|APIGatewayTooManyRequestsException|any, data: any) => void): void;
      deleteIntegrationResponse(params: APIGatewayDeleteIntegrationResponseRequest, callback: (err: APIGatewayUnauthorizedException|APIGatewayNotFoundException|APIGatewayTooManyRequestsException|any, data: any) => void): void;
      deleteMethod(params: APIGatewayDeleteMethodRequest, callback: (err: APIGatewayUnauthorizedException|APIGatewayNotFoundException|APIGatewayTooManyRequestsException|any, data: any) => void): void;
      deleteMethodResponse(params: APIGatewayDeleteMethodResponseRequest, callback: (err: APIGatewayUnauthorizedException|APIGatewayNotFoundException|APIGatewayTooManyRequestsException|any, data: any) => void): void;
      deleteModel(params: APIGatewayDeleteModelRequest, callback: (err: APIGatewayUnauthorizedException|APIGatewayNotFoundException|APIGatewayTooManyRequestsException|APIGatewayBadRequestException|APIGatewayConflictException|any, data: any) => void): void;
      deleteResource(params: APIGatewayDeleteResourceRequest, callback: (err: APIGatewayUnauthorizedException|APIGatewayNotFoundException|APIGatewayBadRequestException|APIGatewayTooManyRequestsException|any, data: any) => void): void;
      deleteRestApi(params: APIGatewayDeleteRestApiRequest, callback: (err: APIGatewayUnauthorizedException|APIGatewayNotFoundException|APIGatewayTooManyRequestsException|any, data: any) => void): void;
      deleteStage(params: APIGatewayDeleteStageRequest, callback: (err: APIGatewayUnauthorizedException|APIGatewayNotFoundException|APIGatewayTooManyRequestsException|any, data: any) => void): void;
      flushStageCache(params: APIGatewayFlushStageCacheRequest, callback: (err: APIGatewayUnauthorizedException|APIGatewayNotFoundException|APIGatewayBadRequestException|APIGatewayTooManyRequestsException|any, data: any) => void): void;
      generateClientCertificate(params: APIGatewayGenerateClientCertificateRequest, callback: (err: APIGatewayUnauthorizedException|APIGatewayTooManyRequestsException|APIGatewayLimitExceededException|any, data: APIGatewayClientCertificate|any) => void): void;
      getAccount(params: APIGatewayGetAccountRequest, callback: (err: APIGatewayUnauthorizedException|APIGatewayNotFoundException|APIGatewayTooManyRequestsException|any, data: APIGatewayAccount|any) => void): void;
      getApiKey(params: APIGatewayGetApiKeyRequest, callback: (err: APIGatewayUnauthorizedException|APIGatewayNotFoundException|APIGatewayTooManyRequestsException|any, data: APIGatewayApiKey|any) => void): void;
      getApiKeys(params: APIGatewayGetApiKeysRequest, callback: (err: APIGatewayUnauthorizedException|APIGatewayTooManyRequestsException|any, data: APIGatewayApiKeys|any) => void): void;
      getBasePathMapping(params: APIGatewayGetBasePathMappingRequest, callback: (err: APIGatewayUnauthorizedException|APIGatewayNotFoundException|APIGatewayTooManyRequestsException|any, data: APIGatewayBasePathMapping|any) => void): void;
      getBasePathMappings(params: APIGatewayGetBasePathMappingsRequest, callback: (err: APIGatewayUnauthorizedException|APIGatewayNotFoundException|APIGatewayTooManyRequestsException|any, data: APIGatewayBasePathMappings|any) => void): void;
      getClientCertificate(params: APIGatewayGetClientCertificateRequest, callback: (err: APIGatewayUnauthorizedException|APIGatewayNotFoundException|APIGatewayTooManyRequestsException|any, data: APIGatewayClientCertificate|any) => void): void;
      getClientCertificates(params: APIGatewayGetClientCertificatesRequest, callback: (err: APIGatewayUnauthorizedException|APIGatewayTooManyRequestsException|any, data: APIGatewayClientCertificates|any) => void): void;
      getDeployment(params: APIGatewayGetDeploymentRequest, callback: (err: APIGatewayUnauthorizedException|APIGatewayNotFoundException|APIGatewayTooManyRequestsException|APIGatewayServiceUnavailableException|any, data: APIGatewayDeployment|any) => void): void;
      getDeployments(params: APIGatewayGetDeploymentsRequest, callback: (err: APIGatewayUnauthorizedException|APIGatewayTooManyRequestsException|APIGatewayServiceUnavailableException|any, data: APIGatewayDeployments|any) => void): void;
      getDomainName(params: APIGatewayGetDomainNameRequest, callback: (err: APIGatewayUnauthorizedException|APIGatewayNotFoundException|APIGatewayServiceUnavailableException|APIGatewayTooManyRequestsException|any, data: APIGatewayDomainName|any) => void): void;
      getDomainNames(params: APIGatewayGetDomainNamesRequest, callback: (err: APIGatewayUnauthorizedException|APIGatewayTooManyRequestsException|any, data: APIGatewayDomainNames|any) => void): void;
      getIntegration(params: APIGatewayGetIntegrationRequest, callback: (err: APIGatewayUnauthorizedException|APIGatewayNotFoundException|APIGatewayTooManyRequestsException|any, data: APIGatewayIntegration|any) => void): void;
      getIntegrationResponse(params: APIGatewayGetIntegrationResponseRequest, callback: (err: APIGatewayUnauthorizedException|APIGatewayNotFoundException|APIGatewayTooManyRequestsException|any, data: APIGatewayIntegrationResponse|any) => void): void;
      getMethod(params: APIGatewayGetMethodRequest, callback: (err: APIGatewayUnauthorizedException|APIGatewayNotFoundException|APIGatewayTooManyRequestsException|any, data: APIGatewayMethod|any) => void): void;
      getMethodResponse(params: APIGatewayGetMethodResponseRequest, callback: (err: APIGatewayUnauthorizedException|APIGatewayNotFoundException|APIGatewayTooManyRequestsException|any, data: APIGatewayMethodResponse|any) => void): void;
      getModel(params: APIGatewayGetModelRequest, callback: (err: APIGatewayUnauthorizedException|APIGatewayNotFoundException|APIGatewayTooManyRequestsException|any, data: APIGatewayModel|any) => void): void;
      getModelTemplate(params: APIGatewayGetModelTemplateRequest, callback: (err: APIGatewayUnauthorizedException|APIGatewayNotFoundException|APIGatewayBadRequestException|APIGatewayTooManyRequestsException|any, data: APIGatewayTemplate|any) => void): void;
      getModels(params: APIGatewayGetModelsRequest, callback: (err: APIGatewayUnauthorizedException|APIGatewayNotFoundException|APIGatewayTooManyRequestsException|any, data: APIGatewayModels|any) => void): void;
      getResource(params: APIGatewayGetResourceRequest, callback: (err: APIGatewayUnauthorizedException|APIGatewayNotFoundException|APIGatewayTooManyRequestsException|any, data: APIGatewayResource|any) => void): void;
      getResources(params: APIGatewayGetResourcesRequest, callback: (err: APIGatewayUnauthorizedException|APIGatewayNotFoundException|APIGatewayTooManyRequestsException|any, data: APIGatewayResources|any) => void): void;
      getRestApi(params: APIGatewayGetRestApiRequest, callback: (err: APIGatewayUnauthorizedException|APIGatewayNotFoundException|APIGatewayTooManyRequestsException|any, data: APIGatewayRestApi|any) => void): void;
      getRestApis(params: APIGatewayGetRestApisRequest, callback: (err: APIGatewayUnauthorizedException|APIGatewayTooManyRequestsException|any, data: APIGatewayRestApis|any) => void): void;
      getSdk(params: APIGatewayGetSdkRequest, callback: (err: APIGatewayUnauthorizedException|APIGatewayNotFoundException|APIGatewayBadRequestException|APIGatewayTooManyRequestsException|any, data: APIGatewaySdkResponse|any) => void): void;
      getStage(params: APIGatewayGetStageRequest, callback: (err: APIGatewayUnauthorizedException|APIGatewayNotFoundException|APIGatewayTooManyRequestsException|any, data: APIGatewayStage|any) => void): void;
      getStages(params: APIGatewayGetStagesRequest, callback: (err: APIGatewayUnauthorizedException|APIGatewayNotFoundException|APIGatewayTooManyRequestsException|any, data: APIGatewayStages|any) => void): void;
      putIntegration(params: APIGatewayPutIntegrationRequest, callback: (err: APIGatewayUnauthorizedException|APIGatewayBadRequestException|APIGatewayNotFoundException|APIGatewayTooManyRequestsException|any, data: APIGatewayIntegration|any) => void): void;
      putIntegrationResponse(params: APIGatewayPutIntegrationResponseRequest, callback: (err: APIGatewayUnauthorizedException|APIGatewayNotFoundException|APIGatewayLimitExceededException|APIGatewayBadRequestException|APIGatewayTooManyRequestsException|any, data: APIGatewayIntegrationResponse|any) => void): void;
      putMethod(params: APIGatewayPutMethodRequest, callback: (err: APIGatewayBadRequestException|APIGatewayUnauthorizedException|APIGatewayNotFoundException|APIGatewayConflictException|APIGatewayLimitExceededException|APIGatewayTooManyRequestsException|any, data: APIGatewayMethod|any) => void): void;
      putMethodResponse(params: APIGatewayPutMethodResponseRequest, callback: (err: APIGatewayUnauthorizedException|APIGatewayNotFoundException|APIGatewayConflictException|APIGatewayLimitExceededException|APIGatewayBadRequestException|APIGatewayTooManyRequestsException|any, data: APIGatewayMethodResponse|any) => void): void;
      testInvokeMethod(params: APIGatewayTestInvokeMethodRequest, callback: (err: APIGatewayBadRequestException|APIGatewayUnauthorizedException|APIGatewayNotFoundException|APIGatewayTooManyRequestsException|any, data: APIGatewayTestInvokeMethodResponse|any) => void): void;
      updateAccount(params: APIGatewayUpdateAccountRequest, callback: (err: APIGatewayUnauthorizedException|APIGatewayBadRequestException|APIGatewayNotFoundException|APIGatewayTooManyRequestsException|any, data: APIGatewayAccount|any) => void): void;
      updateApiKey(params: APIGatewayUpdateApiKeyRequest, callback: (err: APIGatewayUnauthorizedException|APIGatewayNotFoundException|APIGatewayBadRequestException|APIGatewayTooManyRequestsException|any, data: APIGatewayApiKey|any) => void): void;
      updateBasePathMapping(params: APIGatewayUpdateBasePathMappingRequest, callback: (err: APIGatewayUnauthorizedException|APIGatewayNotFoundException|APIGatewayConflictException|APIGatewayBadRequestException|APIGatewayTooManyRequestsException|any, data: APIGatewayBasePathMapping|any) => void): void;
      updateClientCertificate(params: APIGatewayUpdateClientCertificateRequest, callback: (err: APIGatewayUnauthorizedException|APIGatewayTooManyRequestsException|APIGatewayBadRequestException|APIGatewayNotFoundException|any, data: APIGatewayClientCertificate|any) => void): void;
      updateDeployment(params: APIGatewayUpdateDeploymentRequest, callback: (err: APIGatewayUnauthorizedException|APIGatewayNotFoundException|APIGatewayBadRequestException|APIGatewayTooManyRequestsException|APIGatewayServiceUnavailableException|any, data: APIGatewayDeployment|any) => void): void;
      updateDomainName(params: APIGatewayUpdateDomainNameRequest, callback: (err: APIGatewayUnauthorizedException|APIGatewayNotFoundException|APIGatewayBadRequestException|APIGatewayTooManyRequestsException|any, data: APIGatewayDomainName|any) => void): void;
      updateIntegration(params: APIGatewayUpdateIntegrationRequest, callback: (err: APIGatewayUnauthorizedException|APIGatewayNotFoundException|APIGatewayBadRequestException|APIGatewayTooManyRequestsException|any, data: APIGatewayIntegration|any) => void): void;
      updateIntegrationResponse(params: APIGatewayUpdateIntegrationResponseRequest, callback: (err: APIGatewayUnauthorizedException|APIGatewayNotFoundException|APIGatewayBadRequestException|APIGatewayTooManyRequestsException|any, data: APIGatewayIntegrationResponse|any) => void): void;
      updateMethod(params: APIGatewayUpdateMethodRequest, callback: (err: APIGatewayUnauthorizedException|APIGatewayNotFoundException|APIGatewayBadRequestException|APIGatewayTooManyRequestsException|any, data: APIGatewayMethod|any) => void): void;
      updateMethodResponse(params: APIGatewayUpdateMethodResponseRequest, callback: (err: APIGatewayUnauthorizedException|APIGatewayNotFoundException|APIGatewayConflictException|APIGatewayLimitExceededException|APIGatewayBadRequestException|APIGatewayTooManyRequestsException|any, data: APIGatewayMethodResponse|any) => void): void;
      updateModel(params: APIGatewayUpdateModelRequest, callback: (err: APIGatewayUnauthorizedException|APIGatewayNotFoundException|APIGatewayBadRequestException|APIGatewayTooManyRequestsException|any, data: APIGatewayModel|any) => void): void;
      updateResource(params: APIGatewayUpdateResourceRequest, callback: (err: APIGatewayUnauthorizedException|APIGatewayNotFoundException|APIGatewayConflictException|APIGatewayBadRequestException|APIGatewayTooManyRequestsException|any, data: APIGatewayResource|any) => void): void;
      updateRestApi(params: APIGatewayUpdateRestApiRequest, callback: (err: APIGatewayUnauthorizedException|APIGatewayNotFoundException|APIGatewayConflictException|APIGatewayBadRequestException|APIGatewayTooManyRequestsException|any, data: APIGatewayRestApi|any) => void): void;
      updateStage(params: APIGatewayUpdateStageRequest, callback: (err: APIGatewayUnauthorizedException|APIGatewayNotFoundException|APIGatewayConflictException|APIGatewayBadRequestException|APIGatewayTooManyRequestsException|any, data: APIGatewayStage|any) => void): void;
    }

    export interface APIGatewayAccount {
        cloudwatchRoleArn?: APIGatewayString;
        throttleSettings?: APIGatewayThrottleSettings;
    }

    export interface APIGatewayApiKey {
        id?: APIGatewayString;
        name?: APIGatewayString;
        description?: APIGatewayString;
        enabled?: APIGatewayBoolean;
        stageKeys?: APIGatewayListOfString;
        createdDate?: APIGatewayTimestamp;
        lastUpdatedDate?: APIGatewayTimestamp;
    }

    export interface APIGatewayApiKeys {
        position?: APIGatewayString;
        items?: APIGatewayListOfApiKey;
    }

    export interface APIGatewayBadRequestException {
        message?: APIGatewayString;
    }

    export interface APIGatewayBasePathMapping {
        basePath?: APIGatewayString;
        restApiId?: APIGatewayString;
        stage?: APIGatewayString;
    }

    export interface APIGatewayBasePathMappings {
        position?: APIGatewayString;
        items?: APIGatewayListOfBasePathMapping;
    }

    export type APIGatewayBlob = any; // not really - it was 'blob' instead - must fix this one
    export type APIGatewayBoolean = boolean;
    export type APIGatewayCacheClusterSize = string;
    export type APIGatewayCacheClusterStatus = string;
    export interface APIGatewayClientCertificate {
        clientCertificateId?: APIGatewayString;
        description?: APIGatewayString;
        pemEncodedCertificate?: APIGatewayString;
        createdDate?: APIGatewayTimestamp;
        expirationDate?: APIGatewayTimestamp;
    }

    export interface APIGatewayClientCertificates {
        position?: APIGatewayString;
        items?: APIGatewayListOfClientCertificate;
    }

    export interface APIGatewayConflictException {
        message?: APIGatewayString;
    }

    export interface APIGatewayCreateApiKeyRequest {
        name?: APIGatewayString;
        description?: APIGatewayString;
        enabled?: APIGatewayBoolean;
        stageKeys?: APIGatewayListOfStageKeys;
    }

    export interface APIGatewayCreateBasePathMappingRequest {
        domainName: APIGatewayString;
        basePath?: APIGatewayString;
        restApiId: APIGatewayString;
        stage?: APIGatewayString;
    }

    export interface APIGatewayCreateDeploymentRequest {
        restApiId: APIGatewayString;
        stageName: APIGatewayString;
        stageDescription?: APIGatewayString;
        description?: APIGatewayString;
        cacheClusterEnabled?: APIGatewayNullableBoolean;
        cacheClusterSize?: APIGatewayCacheClusterSize;
        variables?: APIGatewayMapOfStringToString;
    }

    export interface APIGatewayCreateDomainNameRequest {
        domainName: APIGatewayString;
        certificateName: APIGatewayString;
        certificateBody: APIGatewayString;
        certificatePrivateKey: APIGatewayString;
        certificateChain: APIGatewayString;
    }

    export interface APIGatewayCreateModelRequest {
        restApiId: APIGatewayString;
        name: APIGatewayString;
        description?: APIGatewayString;
        schema?: APIGatewayString;
        contentType: APIGatewayString;
    }

    export interface APIGatewayCreateResourceRequest {
        restApiId: APIGatewayString;
        parentId: APIGatewayString;
        pathPart: APIGatewayString;
    }

    export interface APIGatewayCreateRestApiRequest {
        name: APIGatewayString;
        description?: APIGatewayString;
        cloneFrom?: APIGatewayString;
    }

    export interface APIGatewayCreateStageRequest {
        restApiId: APIGatewayString;
        stageName: APIGatewayString;
        deploymentId: APIGatewayString;
        description?: APIGatewayString;
        cacheClusterEnabled?: APIGatewayBoolean;
        cacheClusterSize?: APIGatewayCacheClusterSize;
        variables?: APIGatewayMapOfStringToString;
    }

    export interface APIGatewayDeleteApiKeyRequest {
        apiKey: APIGatewayString;
    }

    export interface APIGatewayDeleteBasePathMappingRequest {
        domainName: APIGatewayString;
        basePath: APIGatewayString;
    }

    export interface APIGatewayDeleteClientCertificateRequest {
        clientCertificateId: APIGatewayString;
    }

    export interface APIGatewayDeleteDeploymentRequest {
        restApiId: APIGatewayString;
        deploymentId: APIGatewayString;
    }

    export interface APIGatewayDeleteDomainNameRequest {
        domainName: APIGatewayString;
    }

    export interface APIGatewayDeleteIntegrationRequest {
        restApiId: APIGatewayString;
        resourceId: APIGatewayString;
        httpMethod: APIGatewayString;
    }

    export interface APIGatewayDeleteIntegrationResponseRequest {
        restApiId: APIGatewayString;
        resourceId: APIGatewayString;
        httpMethod: APIGatewayString;
        statusCode: APIGatewayStatusCode;
    }

    export interface APIGatewayDeleteMethodRequest {
        restApiId: APIGatewayString;
        resourceId: APIGatewayString;
        httpMethod: APIGatewayString;
    }

    export interface APIGatewayDeleteMethodResponseRequest {
        restApiId: APIGatewayString;
        resourceId: APIGatewayString;
        httpMethod: APIGatewayString;
        statusCode: APIGatewayStatusCode;
    }

    export interface APIGatewayDeleteModelRequest {
        restApiId: APIGatewayString;
        modelName: APIGatewayString;
    }

    export interface APIGatewayDeleteResourceRequest {
        restApiId: APIGatewayString;
        resourceId: APIGatewayString;
    }

    export interface APIGatewayDeleteRestApiRequest {
        restApiId: APIGatewayString;
    }

    export interface APIGatewayDeleteStageRequest {
        restApiId: APIGatewayString;
        stageName: APIGatewayString;
    }

    export interface APIGatewayDeployment {
        id?: APIGatewayString;
        description?: APIGatewayString;
        createdDate?: APIGatewayTimestamp;
        apiSummary?: APIGatewayPathToMapOfMethodSnapshot;
    }

    export interface APIGatewayDeployments {
        position?: APIGatewayString;
        items?: APIGatewayListOfDeployment;
    }

    export interface APIGatewayDomainName {
        domainName?: APIGatewayString;
        certificateName?: APIGatewayString;
        certificateUploadDate?: APIGatewayTimestamp;
        distributionDomainName?: APIGatewayString;
    }

    export interface APIGatewayDomainNames {
        position?: APIGatewayString;
        items?: APIGatewayListOfDomainName;
    }

    export type APIGatewayDouble = number;
    export interface APIGatewayFlushStageCacheRequest {
        restApiId: APIGatewayString;
        stageName: APIGatewayString;
    }

    export interface APIGatewayGenerateClientCertificateRequest {
        description?: APIGatewayString;
    }

    export interface APIGatewayGetAccountRequest {
    }

    export interface APIGatewayGetApiKeyRequest {
        apiKey: APIGatewayString;
    }

    export interface APIGatewayGetApiKeysRequest {
        position?: APIGatewayString;
        limit?: APIGatewayNullableInteger;
    }

    export interface APIGatewayGetBasePathMappingRequest {
        domainName: APIGatewayString;
        basePath: APIGatewayString;
    }

    export interface APIGatewayGetBasePathMappingsRequest {
        domainName: APIGatewayString;
        position?: APIGatewayString;
        limit?: APIGatewayNullableInteger;
    }

    export interface APIGatewayGetClientCertificateRequest {
        clientCertificateId: APIGatewayString;
    }

    export interface APIGatewayGetClientCertificatesRequest {
        position?: APIGatewayString;
        limit?: APIGatewayNullableInteger;
    }

    export interface APIGatewayGetDeploymentRequest {
        restApiId: APIGatewayString;
        deploymentId: APIGatewayString;
    }

    export interface APIGatewayGetDeploymentsRequest {
        restApiId: APIGatewayString;
        position?: APIGatewayString;
        limit?: APIGatewayNullableInteger;
    }

    export interface APIGatewayGetDomainNameRequest {
        domainName: APIGatewayString;
    }

    export interface APIGatewayGetDomainNamesRequest {
        position?: APIGatewayString;
        limit?: APIGatewayNullableInteger;
    }

    export interface APIGatewayGetIntegrationRequest {
        restApiId: APIGatewayString;
        resourceId: APIGatewayString;
        httpMethod: APIGatewayString;
    }

    export interface APIGatewayGetIntegrationResponseRequest {
        restApiId: APIGatewayString;
        resourceId: APIGatewayString;
        httpMethod: APIGatewayString;
        statusCode: APIGatewayStatusCode;
    }

    export interface APIGatewayGetMethodRequest {
        restApiId: APIGatewayString;
        resourceId: APIGatewayString;
        httpMethod: APIGatewayString;
    }

    export interface APIGatewayGetMethodResponseRequest {
        restApiId: APIGatewayString;
        resourceId: APIGatewayString;
        httpMethod: APIGatewayString;
        statusCode: APIGatewayStatusCode;
    }

    export interface APIGatewayGetModelRequest {
        restApiId: APIGatewayString;
        modelName: APIGatewayString;
        flatten?: APIGatewayBoolean;
    }

    export interface APIGatewayGetModelTemplateRequest {
        restApiId: APIGatewayString;
        modelName: APIGatewayString;
    }

    export interface APIGatewayGetModelsRequest {
        restApiId: APIGatewayString;
        position?: APIGatewayString;
        limit?: APIGatewayNullableInteger;
    }

    export interface APIGatewayGetResourceRequest {
        restApiId: APIGatewayString;
        resourceId: APIGatewayString;
    }

    export interface APIGatewayGetResourcesRequest {
        restApiId: APIGatewayString;
        position?: APIGatewayString;
        limit?: APIGatewayNullableInteger;
    }

    export interface APIGatewayGetRestApiRequest {
        restApiId: APIGatewayString;
    }

    export interface APIGatewayGetRestApisRequest {
        position?: APIGatewayString;
        limit?: APIGatewayNullableInteger;
    }

    export interface APIGatewayGetSdkRequest {
        restApiId: APIGatewayString;
        stageName: APIGatewayString;
        sdkType: APIGatewayString;
        parameters?: APIGatewayMapOfStringToString;
    }

    export interface APIGatewayGetStageRequest {
        restApiId: APIGatewayString;
        stageName: APIGatewayString;
    }

    export interface APIGatewayGetStagesRequest {
        restApiId: APIGatewayString;
        deploymentId?: APIGatewayString;
    }

    export type APIGatewayInteger = number;
    export interface APIGatewayIntegration {
        type?: APIGatewayIntegrationType;
        httpMethod?: APIGatewayString;
        uri?: APIGatewayString;
        credentials?: APIGatewayString;
        requestParameters?: APIGatewayMapOfStringToString;
        requestTemplates?: APIGatewayMapOfStringToString;
        cacheNamespace?: APIGatewayString;
        cacheKeyParameters?: APIGatewayListOfString;
        integrationResponses?: APIGatewayMapOfIntegrationResponse;
    }

    export interface APIGatewayIntegrationResponse {
        statusCode?: APIGatewayStatusCode;
        selectionPattern?: APIGatewayString;
        responseParameters?: APIGatewayMapOfStringToString;
        responseTemplates?: APIGatewayMapOfStringToString;
    }

    export type APIGatewayIntegrationType = string;
    export interface APIGatewayLimitExceededException {
        retryAfterSeconds?: APIGatewayString;
        message?: APIGatewayString;
    }

    export type APIGatewayListOfApiKey = Array<APIGatewayApiKey>;
    export type APIGatewayListOfBasePathMapping = Array<APIGatewayBasePathMapping>;
    export type APIGatewayListOfClientCertificate = Array<APIGatewayClientCertificate>;
    export type APIGatewayListOfDeployment = Array<APIGatewayDeployment>;
    export type APIGatewayListOfDomainName = Array<APIGatewayDomainName>;
    export type APIGatewayListOfModel = Array<APIGatewayModel>;
    export type APIGatewayListOfPatchOperation = Array<APIGatewayPatchOperation>;
    export type APIGatewayListOfResource = Array<APIGatewayResource>;
    export type APIGatewayListOfRestApi = Array<APIGatewayRestApi>;
    export type APIGatewayListOfStage = Array<APIGatewayStage>;
    export type APIGatewayListOfStageKeys = Array<APIGatewayStageKey>;
    export type APIGatewayListOfString = Array<APIGatewayString>;
    export type APIGatewayLong = number;
    export type APIGatewayMapOfHeaderValues = any; // not really - it was 'map' instead - must fix this one
    export type APIGatewayMapOfIntegrationResponse = any; // not really - it was 'map' instead - must fix this one
    export type APIGatewayMapOfMethod = any; // not really - it was 'map' instead - must fix this one
    export type APIGatewayMapOfMethodResponse = any; // not really - it was 'map' instead - must fix this one
    export type APIGatewayMapOfMethodSettings = any; // not really - it was 'map' instead - must fix this one
    export type APIGatewayMapOfMethodSnapshot = any; // not really - it was 'map' instead - must fix this one
    export type APIGatewayMapOfStringToBoolean = any; // not really - it was 'map' instead - must fix this one
    export type APIGatewayMapOfStringToString = any; // not really - it was 'map' instead - must fix this one
    export interface APIGatewayMethod {
        httpMethod?: APIGatewayString;
        authorizationType?: APIGatewayString;
        apiKeyRequired?: APIGatewayNullableBoolean;
        requestParameters?: APIGatewayMapOfStringToBoolean;
        requestModels?: APIGatewayMapOfStringToString;
        methodResponses?: APIGatewayMapOfMethodResponse;
        methodIntegration?: APIGatewayIntegration;
    }

    export interface APIGatewayMethodResponse {
        statusCode?: APIGatewayStatusCode;
        responseParameters?: APIGatewayMapOfStringToBoolean;
        responseModels?: APIGatewayMapOfStringToString;
    }

    export interface APIGatewayMethodSetting {
        metricsEnabled?: APIGatewayBoolean;
        loggingLevel?: APIGatewayString;
        dataTraceEnabled?: APIGatewayBoolean;
        throttlingBurstLimit?: APIGatewayInteger;
        throttlingRateLimit?: APIGatewayDouble;
        cachingEnabled?: APIGatewayBoolean;
        cacheTtlInSeconds?: APIGatewayInteger;
        cacheDataEncrypted?: APIGatewayBoolean;
    }

    export interface APIGatewayMethodSnapshot {
        authorizationType?: APIGatewayString;
        apiKeyRequired?: APIGatewayBoolean;
    }

    export interface APIGatewayModel {
        id?: APIGatewayString;
        name?: APIGatewayString;
        description?: APIGatewayString;
        schema?: APIGatewayString;
        contentType?: APIGatewayString;
    }

    export interface APIGatewayModels {
        position?: APIGatewayString;
        items?: APIGatewayListOfModel;
    }

    export interface APIGatewayNotFoundException {
        message?: APIGatewayString;
    }

    export type APIGatewayNullableBoolean = boolean;
    export type APIGatewayNullableInteger = number;
    export interface APIGatewayPatchOperation {
        op?: APIGatewayop;
        path?: APIGatewayString;
        value?: APIGatewayString;
        from?: APIGatewayString;
    }

    export type APIGatewayPathToMapOfMethodSnapshot = any; // not really - it was 'map' instead - must fix this one
    export interface APIGatewayPutIntegrationRequest {
        restApiId: APIGatewayString;
        resourceId: APIGatewayString;
        httpMethod: APIGatewayString;
        type: APIGatewayIntegrationType;
        integrationHttpMethod?: APIGatewayString;
        uri?: APIGatewayString;
        credentials?: APIGatewayString;
        requestParameters?: APIGatewayMapOfStringToString;
        requestTemplates?: APIGatewayMapOfStringToString;
        cacheNamespace?: APIGatewayString;
        cacheKeyParameters?: APIGatewayListOfString;
    }

    export interface APIGatewayPutIntegrationResponseRequest {
        restApiId: APIGatewayString;
        resourceId: APIGatewayString;
        httpMethod: APIGatewayString;
        statusCode: APIGatewayStatusCode;
        selectionPattern?: APIGatewayString;
        responseParameters?: APIGatewayMapOfStringToString;
        responseTemplates?: APIGatewayMapOfStringToString;
    }

    export interface APIGatewayPutMethodRequest {
        restApiId: APIGatewayString;
        resourceId: APIGatewayString;
        httpMethod: APIGatewayString;
        authorizationType: APIGatewayString;
        apiKeyRequired?: APIGatewayBoolean;
        requestParameters?: APIGatewayMapOfStringToBoolean;
        requestModels?: APIGatewayMapOfStringToString;
    }

    export interface APIGatewayPutMethodResponseRequest {
        restApiId: APIGatewayString;
        resourceId: APIGatewayString;
        httpMethod: APIGatewayString;
        statusCode: APIGatewayStatusCode;
        responseParameters?: APIGatewayMapOfStringToBoolean;
        responseModels?: APIGatewayMapOfStringToString;
    }

    export interface APIGatewayResource {
        id?: APIGatewayString;
        parentId?: APIGatewayString;
        pathPart?: APIGatewayString;
        path?: APIGatewayString;
        resourceMethods?: APIGatewayMapOfMethod;
    }

    export interface APIGatewayResources {
        position?: APIGatewayString;
        items?: APIGatewayListOfResource;
    }

    export interface APIGatewayRestApi {
        id?: APIGatewayString;
        name?: APIGatewayString;
        description?: APIGatewayString;
        createdDate?: APIGatewayTimestamp;
    }

    export interface APIGatewayRestApis {
        position?: APIGatewayString;
        items?: APIGatewayListOfRestApi;
    }

    export interface APIGatewaySdkResponse {
        contentType?: APIGatewayString;
        contentDisposition?: APIGatewayString;
        body?: APIGatewayBlob;
    }

    export interface APIGatewayServiceUnavailableException {
        retryAfterSeconds?: APIGatewayString;
        message?: APIGatewayString;
    }

    export interface APIGatewayStage {
        deploymentId?: APIGatewayString;
        clientCertificateId?: APIGatewayString;
        stageName?: APIGatewayString;
        description?: APIGatewayString;
        cacheClusterEnabled?: APIGatewayBoolean;
        cacheClusterSize?: APIGatewayCacheClusterSize;
        cacheClusterStatus?: APIGatewayCacheClusterStatus;
        methodSettings?: APIGatewayMapOfMethodSettings;
        variables?: APIGatewayMapOfStringToString;
        createdDate?: APIGatewayTimestamp;
        lastUpdatedDate?: APIGatewayTimestamp;
    }

    export interface APIGatewayStageKey {
        restApiId?: APIGatewayString;
        stageName?: APIGatewayString;
    }

    export interface APIGatewayStages {
        item?: APIGatewayListOfStage;
    }

    export type APIGatewayStatusCode = string; // pattern: "[1-5]\d\d"
    export type APIGatewayString = string;
    export interface APIGatewayTemplate {
        value?: APIGatewayString;
    }

    export interface APIGatewayTestInvokeMethodRequest {
        restApiId: APIGatewayString;
        resourceId: APIGatewayString;
        httpMethod: APIGatewayString;
        pathWithQueryString?: APIGatewayString;
        body?: APIGatewayString;
        headers?: APIGatewayMapOfHeaderValues;
        clientCertificateId?: APIGatewayString;
        stageVariables?: APIGatewayMapOfStringToString;
    }

    export interface APIGatewayTestInvokeMethodResponse {
        status?: APIGatewayInteger;
        body?: APIGatewayString;
        headers?: APIGatewayMapOfHeaderValues;
        log?: APIGatewayString;
        latency?: APIGatewayLong;
    }

    export interface APIGatewayThrottleSettings {
        burstLimit?: APIGatewayInteger;
        rateLimit?: APIGatewayDouble;
    }

    export type APIGatewayTimestamp = number;
    export interface APIGatewayTooManyRequestsException {
        retryAfterSeconds?: APIGatewayString;
        message?: APIGatewayString;
    }

    export interface APIGatewayUnauthorizedException {
        message?: APIGatewayString;
    }

    export interface APIGatewayUpdateAccountRequest {
        patchOperations?: APIGatewayListOfPatchOperation;
    }

    export interface APIGatewayUpdateApiKeyRequest {
        apiKey: APIGatewayString;
        patchOperations?: APIGatewayListOfPatchOperation;
    }

    export interface APIGatewayUpdateBasePathMappingRequest {
        domainName: APIGatewayString;
        basePath: APIGatewayString;
        patchOperations?: APIGatewayListOfPatchOperation;
    }

    export interface APIGatewayUpdateClientCertificateRequest {
        clientCertificateId: APIGatewayString;
        patchOperations?: APIGatewayListOfPatchOperation;
    }

    export interface APIGatewayUpdateDeploymentRequest {
        restApiId: APIGatewayString;
        deploymentId: APIGatewayString;
        patchOperations?: APIGatewayListOfPatchOperation;
    }

    export interface APIGatewayUpdateDomainNameRequest {
        domainName: APIGatewayString;
        patchOperations?: APIGatewayListOfPatchOperation;
    }

    export interface APIGatewayUpdateIntegrationRequest {
        restApiId: APIGatewayString;
        resourceId: APIGatewayString;
        httpMethod: APIGatewayString;
        patchOperations?: APIGatewayListOfPatchOperation;
    }

    export interface APIGatewayUpdateIntegrationResponseRequest {
        restApiId: APIGatewayString;
        resourceId: APIGatewayString;
        httpMethod: APIGatewayString;
        statusCode: APIGatewayStatusCode;
        patchOperations?: APIGatewayListOfPatchOperation;
    }

    export interface APIGatewayUpdateMethodRequest {
        restApiId: APIGatewayString;
        resourceId: APIGatewayString;
        httpMethod: APIGatewayString;
        patchOperations?: APIGatewayListOfPatchOperation;
    }

    export interface APIGatewayUpdateMethodResponseRequest {
        restApiId: APIGatewayString;
        resourceId: APIGatewayString;
        httpMethod: APIGatewayString;
        statusCode: APIGatewayStatusCode;
        patchOperations?: APIGatewayListOfPatchOperation;
    }

    export interface APIGatewayUpdateModelRequest {
        restApiId: APIGatewayString;
        modelName: APIGatewayString;
        patchOperations?: APIGatewayListOfPatchOperation;
    }

    export interface APIGatewayUpdateResourceRequest {
        restApiId: APIGatewayString;
        resourceId: APIGatewayString;
        patchOperations?: APIGatewayListOfPatchOperation;
    }

    export interface APIGatewayUpdateRestApiRequest {
        restApiId: APIGatewayString;
        patchOperations?: APIGatewayListOfPatchOperation;
    }

    export interface APIGatewayUpdateStageRequest {
        restApiId: APIGatewayString;
        stageName: APIGatewayString;
        patchOperations?: APIGatewayListOfPatchOperation;
    }

    export type APIGatewayop = string;
}
