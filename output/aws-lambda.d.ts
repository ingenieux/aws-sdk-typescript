// DO NOT EDIT!
//
declare module "aws-sdk" {
    export class Lambda {
      constructor(options?: any);
      addEventSource(params: LambdaAddEventSourceRequest, callback: (err: LambdaServiceException|LambdaInvalidParameterValueException|any, data: LambdaEventSourceConfiguration|any) => void): void;
      deleteFunction(params: LambdaDeleteFunctionRequest, callback: (err: LambdaServiceException|LambdaResourceNotFoundException|any, data: any) => void): void;
      getEventSource(params: LambdaGetEventSourceRequest, callback: (err: LambdaServiceException|LambdaResourceNotFoundException|LambdaInvalidParameterValueException|any, data: LambdaEventSourceConfiguration|any) => void): void;
      getFunction(params: LambdaGetFunctionRequest, callback: (err: LambdaServiceException|LambdaResourceNotFoundException|any, data: LambdaGetFunctionResponse|any) => void): void;
      getFunctionConfiguration(params: LambdaGetFunctionConfigurationRequest, callback: (err: LambdaServiceException|LambdaResourceNotFoundException|any, data: LambdaFunctionConfiguration|any) => void): void;
      invokeAsync(params: LambdaInvokeAsyncRequest, callback: (err: LambdaServiceException|LambdaResourceNotFoundException|LambdaInvalidRequestContentException|any, data: LambdaInvokeAsyncResponse|any) => void): void;
      listEventSources(params: LambdaListEventSourcesRequest, callback: (err: LambdaServiceException|LambdaResourceNotFoundException|LambdaInvalidParameterValueException|any, data: LambdaListEventSourcesResponse|any) => void): void;
      listFunctions(params: LambdaListFunctionsRequest, callback: (err: LambdaServiceException|any, data: LambdaListFunctionsResponse|any) => void): void;
      removeEventSource(params: LambdaRemoveEventSourceRequest, callback: (err: LambdaServiceException|LambdaResourceNotFoundException|LambdaInvalidParameterValueException|any, data: any) => void): void;
      updateFunctionConfiguration(params: LambdaUpdateFunctionConfigurationRequest, callback: (err: LambdaServiceException|LambdaResourceNotFoundException|LambdaInvalidParameterValueException|any, data: LambdaFunctionConfiguration|any) => void): void;
      uploadFunction(params: LambdaUploadFunctionRequest, callback: (err: LambdaServiceException|LambdaInvalidParameterValueException|LambdaResourceNotFoundException|any, data: LambdaFunctionConfiguration|any) => void): void;
    }

    export interface LambdaAddEventSourceRequest {
        EventSource: LambdaString;
        FunctionName: LambdaFunctionName;
        Role: LambdaRoleArn;
        BatchSize?: LambdaInteger;
        Parameters?: LambdaMap;
    }

    export type LambdaBlob = any; // not really - it was 'blob' instead - must fix this one
    export interface LambdaDeleteFunctionRequest {
        FunctionName: LambdaFunctionName;
    }

    export type LambdaDescription = string;
    export interface LambdaEventSourceConfiguration {
        UUID?: LambdaString;
        BatchSize?: LambdaInteger;
        EventSource?: LambdaString;
        FunctionName?: LambdaFunctionName;
        Parameters?: LambdaMap;
        Role?: LambdaRoleArn;
        LastModified?: LambdaTimestamp;
        IsActive?: LambdaBoolean;
        Status?: LambdaString;
    }

    export type LambdaEventSourceList = Array<LambdaEventSourceConfiguration>;
    export type LambdaFunctionArn = string; // pattern: "arn:aws:lambda:[a-z]{2}-[a-z]+-\d{1}:\d{12}:function:[a-zA-Z0-9-_]+(\/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})?"
    export interface LambdaFunctionCodeLocation {
        RepositoryType?: LambdaString;
        Location?: LambdaString;
    }

    export interface LambdaFunctionConfiguration {
        FunctionName?: LambdaFunctionName;
        FunctionARN?: LambdaFunctionArn;
        ConfigurationId?: LambdaString;
        Runtime?: LambdaRuntime;
        Role?: LambdaRoleArn;
        Handler?: LambdaHandler;
        Mode?: LambdaMode;
        CodeSize?: LambdaLong;
        Description?: LambdaDescription;
        Timeout?: LambdaTimeout;
        MemorySize?: LambdaMemorySize;
        LastModified?: LambdaTimestamp;
    }

    export type LambdaFunctionList = Array<LambdaFunctionConfiguration>;
    export type LambdaFunctionName = string; // pattern: "[a-zA-Z0-9-_]+"
    export interface LambdaGetEventSourceRequest {
        UUID: LambdaString;
    }

    export interface LambdaGetFunctionConfigurationRequest {
        FunctionName: LambdaFunctionName;
    }

    export interface LambdaGetFunctionRequest {
        FunctionName: LambdaFunctionName;
    }

    export interface LambdaGetFunctionResponse {
        Configuration?: LambdaFunctionConfiguration;
        Code?: LambdaFunctionCodeLocation;
    }

    export type LambdaHandler = string; // pattern: "[a-zA-Z0-9./\-_]+"
    export type LambdaHttpStatus = number;
    export type LambdaInteger = number;
    export interface LambdaInvalidParameterValueException {
        Type?: LambdaString;
        message?: LambdaString;
    }

    export interface LambdaInvalidRequestContentException {
        Type?: LambdaString;
        message?: LambdaString;
    }

    export interface LambdaInvokeAsyncRequest {
        FunctionName: LambdaFunctionName;
        InvokeArgs: LambdaBlob;
    }

    export interface LambdaInvokeAsyncResponse {
        Status?: LambdaHttpStatus;
    }

    export interface LambdaListEventSourcesRequest {
        EventSourceArn?: LambdaString;
        FunctionName?: LambdaFunctionName;
        Marker?: LambdaString;
        MaxItems?: LambdaMaxListItems;
    }

    export interface LambdaListEventSourcesResponse {
        NextMarker?: LambdaString;
        EventSources?: LambdaEventSourceList;
    }

    export interface LambdaListFunctionsRequest {
        Marker?: LambdaString;
        MaxItems?: LambdaMaxListItems;
    }

    export interface LambdaListFunctionsResponse {
        NextMarker?: LambdaString;
        Functions?: LambdaFunctionList;
    }

    export type LambdaLong = number;
    export type LambdaMap = any; // not really - it was 'map' instead - must fix this one
    export type LambdaMaxListItems = number;
    export type LambdaMemorySize = number;
    export type LambdaMode = string;
    export interface LambdaRemoveEventSourceRequest {
        UUID: LambdaString;
    }

    export interface LambdaResourceNotFoundException {
        Type?: LambdaString;
        Message?: LambdaString;
    }

    export type LambdaRoleArn = string; // pattern: "arn:aws:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+"
    export type LambdaRuntime = string;
    export interface LambdaServiceException {
        Type?: LambdaString;
        Message?: LambdaString;
    }

    export type LambdaString = string;
    export type LambdaTimeout = number;
    export type LambdaTimestamp = number;
    export interface LambdaUpdateFunctionConfigurationRequest {
        FunctionName: LambdaFunctionName;
        Role?: LambdaRoleArn;
        Handler?: LambdaHandler;
        Description?: LambdaDescription;
        Timeout?: LambdaTimeout;
        MemorySize?: LambdaMemorySize;
    }

    export interface LambdaUploadFunctionRequest {
        FunctionName: LambdaFunctionName;
        FunctionZip: LambdaBlob;
        Runtime: LambdaRuntime;
        Role: LambdaRoleArn;
        Handler: LambdaHandler;
        Mode: LambdaMode;
        Description?: LambdaDescription;
        Timeout?: LambdaTimeout;
        MemorySize?: LambdaMemorySize;
    }

    export type LambdaBoolean = boolean;
}
