// DO NOT EDIT!
//

///<reference path="./aws-sdk-common.d.ts" />
declare module "aws-sdk" {

    export class Lambda extends Service {
      constructor(options?: any);
      addEventSource(params: Lambda.AddEventSourceRequest, callback?: (err: Lambda.ServiceException|Lambda.InvalidParameterValueException|any, data: Lambda.EventSourceConfiguration|any) => void): Request;
      deleteFunction(params: Lambda.DeleteFunctionRequest, callback?: (err: Lambda.ServiceException|Lambda.ResourceNotFoundException|any, data: any) => void): Request;
      getEventSource(params: Lambda.GetEventSourceRequest, callback?: (err: Lambda.ServiceException|Lambda.ResourceNotFoundException|Lambda.InvalidParameterValueException|any, data: Lambda.EventSourceConfiguration|any) => void): Request;
      getFunction(params: Lambda.GetFunctionRequest, callback?: (err: Lambda.ServiceException|Lambda.ResourceNotFoundException|any, data: Lambda.GetFunctionResponse|any) => void): Request;
      getFunctionConfiguration(params: Lambda.GetFunctionConfigurationRequest, callback?: (err: Lambda.ServiceException|Lambda.ResourceNotFoundException|any, data: Lambda.FunctionConfiguration|any) => void): Request;
      invokeAsync(params: Lambda.InvokeAsyncRequest, callback?: (err: Lambda.ServiceException|Lambda.ResourceNotFoundException|Lambda.InvalidRequestContentException|any, data: Lambda.InvokeAsyncResponse|any) => void): Request;
      listEventSources(params: Lambda.ListEventSourcesRequest, callback?: (err: Lambda.ServiceException|Lambda.ResourceNotFoundException|Lambda.InvalidParameterValueException|any, data: Lambda.ListEventSourcesResponse|any) => void): Request;
      listFunctions(params: Lambda.ListFunctionsRequest, callback?: (err: Lambda.ServiceException|any, data: Lambda.ListFunctionsResponse|any) => void): Request;
      removeEventSource(params: Lambda.RemoveEventSourceRequest, callback?: (err: Lambda.ServiceException|Lambda.ResourceNotFoundException|Lambda.InvalidParameterValueException|any, data: any) => void): Request;
      updateFunctionConfiguration(params: Lambda.UpdateFunctionConfigurationRequest, callback?: (err: Lambda.ServiceException|Lambda.ResourceNotFoundException|Lambda.InvalidParameterValueException|any, data: Lambda.FunctionConfiguration|any) => void): Request;
      uploadFunction(params: Lambda.UploadFunctionRequest, callback?: (err: Lambda.ServiceException|Lambda.InvalidParameterValueException|Lambda.ResourceNotFoundException|any, data: Lambda.FunctionConfiguration|any) => void): Request;
    }
    
    export module Lambda {
        export type Blob = any;    // type: blob
        export type Description = string;    // max: 256
        export type EventSourceList = EventSourceConfiguration[];
        export type FunctionArn = string;    // pattern: &quot;arn:aws:lambda:[a-z]{2}-[a-z]+-\d{1}:\d{12}:function:[a-zA-Z0-9-_]+(\/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})?&quot;
        export type FunctionList = FunctionConfiguration[];
        export type FunctionName = string;    // pattern: &quot;[a-zA-Z0-9-_]+&quot;, max: 64, min: 1
        export type Handler = string;    // pattern: &quot;[a-zA-Z0-9./\-_]+&quot;
        export type HttpStatus = number;
        export type Integer = number;
        export type Long = number;
        export type Map = {[key:string]: String};
        export type MaxListItems = number;    // max: 10000, min: 1
        export type MemorySize = number;    // max: 1024, min: 128
        export type Mode = string;
        export type RoleArn = string;    // pattern: &quot;arn:aws:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+&quot;
        export type Runtime = string;
        export type String = string;
        export type Timeout = number;    // max: 60, min: 1
        export type Timestamp = number;
        export type Boolean = boolean;

        export interface AddEventSourceRequest {
            EventSource: String;            
            FunctionName: FunctionName;            
            Role: RoleArn;            
            BatchSize?: Integer;            
            Parameters?: Map;            
        }
        export interface DeleteFunctionRequest {
            FunctionName: FunctionName;            
        }
        export interface EventSourceConfiguration {
            UUID?: String;            
            BatchSize?: Integer;            
            EventSource?: String;            
            FunctionName?: FunctionName;            
            Parameters?: Map;            
            Role?: RoleArn;            
            LastModified?: Timestamp;            
            IsActive?: Boolean;            
            Status?: String;            
        }
        export interface FunctionCodeLocation {
            RepositoryType?: String;            
            Location?: String;            
        }
        export interface FunctionConfiguration {
            FunctionName?: FunctionName;            
            FunctionARN?: FunctionArn;            
            ConfigurationId?: String;            
            Runtime?: Runtime;            
            Role?: RoleArn;            
            Handler?: Handler;            
            Mode?: Mode;            
            CodeSize?: Long;            
            Description?: Description;            
            Timeout?: Timeout;            
            MemorySize?: MemorySize;            
            LastModified?: Timestamp;            
        }
        export interface GetEventSourceRequest {
            UUID: String;            
        }
        export interface GetFunctionConfigurationRequest {
            FunctionName: FunctionName;            
        }
        export interface GetFunctionRequest {
            FunctionName: FunctionName;            
        }
        export interface GetFunctionResponse {
            Configuration?: FunctionConfiguration;            
            Code?: FunctionCodeLocation;            
        }
        export interface InvalidParameterValueException {
            Type?: String;            
            message?: String;            
        }
        export interface InvalidRequestContentException {
            Type?: String;            
            message?: String;            
        }
        export interface InvokeAsyncRequest {
            FunctionName: FunctionName;            
            InvokeArgs: Blob;            
        }
        export interface InvokeAsyncResponse {
            Status?: HttpStatus;            
        }
        export interface ListEventSourcesRequest {
            EventSourceArn?: String;            
            FunctionName?: FunctionName;            
            Marker?: String;            
            MaxItems?: MaxListItems;            
        }
        export interface ListEventSourcesResponse {
            NextMarker?: String;            
            EventSources?: EventSourceList;            
        }
        export interface ListFunctionsRequest {
            Marker?: String;            
            MaxItems?: MaxListItems;            
        }
        export interface ListFunctionsResponse {
            NextMarker?: String;            
            Functions?: FunctionList;            
        }
        export interface RemoveEventSourceRequest {
            UUID: String;            
        }
        export interface ResourceNotFoundException {
            Type?: String;            
            Message?: String;            
        }
        export interface ServiceException {
            Type?: String;            
            Message?: String;            
        }
        export interface UpdateFunctionConfigurationRequest {
            FunctionName: FunctionName;            
            Role?: RoleArn;            
            Handler?: Handler;            
            Description?: Description;            
            Timeout?: Timeout;            
            MemorySize?: MemorySize;            
        }
        export interface UploadFunctionRequest {
            FunctionName: FunctionName;            
            FunctionZip: Blob;            
            Runtime: Runtime;            
            Role: RoleArn;            
            Handler: Handler;            
            Mode: Mode;            
            Description?: Description;            
            Timeout?: Timeout;            
            MemorySize?: MemorySize;            
        }

    }
}
