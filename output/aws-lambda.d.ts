// DO NOT EDIT!
//
declare module "aws-sdk" {
    export class Lambda {
      constructor(options?: any);
      addEventSource(params: AddEventSourceRequest, callback: (err: ServiceException|InvalidParameterValueException|any, data: EventSourceConfiguration|any) => void): void;
      deleteFunction(params: DeleteFunctionRequest, callback: (err: ServiceException|ResourceNotFoundException|any, data: any) => void): void;
      getEventSource(params: GetEventSourceRequest, callback: (err: ServiceException|ResourceNotFoundException|InvalidParameterValueException|any, data: EventSourceConfiguration|any) => void): void;
      getFunction(params: GetFunctionRequest, callback: (err: ServiceException|ResourceNotFoundException|any, data: GetFunctionResponse|any) => void): void;
      getFunctionConfiguration(params: GetFunctionConfigurationRequest, callback: (err: ServiceException|ResourceNotFoundException|any, data: FunctionConfiguration|any) => void): void;
      invokeAsync(params: InvokeAsyncRequest, callback: (err: ServiceException|ResourceNotFoundException|InvalidRequestContentException|any, data: InvokeAsyncResponse|any) => void): void;
      listEventSources(params: ListEventSourcesRequest, callback: (err: ServiceException|ResourceNotFoundException|InvalidParameterValueException|any, data: ListEventSourcesResponse|any) => void): void;
      listFunctions(params: ListFunctionsRequest, callback: (err: ServiceException|any, data: ListFunctionsResponse|any) => void): void;
      removeEventSource(params: RemoveEventSourceRequest, callback: (err: ServiceException|ResourceNotFoundException|InvalidParameterValueException|any, data: any) => void): void;
      updateFunctionConfiguration(params: UpdateFunctionConfigurationRequest, callback: (err: ServiceException|ResourceNotFoundException|InvalidParameterValueException|any, data: FunctionConfiguration|any) => void): void;
      uploadFunction(params: UploadFunctionRequest, callback: (err: ServiceException|InvalidParameterValueException|ResourceNotFoundException|any, data: FunctionConfiguration|any) => void): void;
    }

    export interface AddEventSourceRequest {
      EventSource: String;
      FunctionName: FunctionName;
      Role: RoleArn;
      BatchSize?: Integer;
      Parameters?: Map;
    }


    export type Blob = any; // not really - it was 'blob' instead - must fix this one

    export interface DeleteFunctionRequest {
      FunctionName: FunctionName;
    }


    export type Description = string;

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


    export type EventSourceList = Array<EventSourceConfiguration>;

    export type FunctionArn = string; // pattern: "arn:aws:lambda:[a-z]{2}-[a-z]+-\d{1}:\d{12}:function:[a-zA-Z0-9-_]+(\/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})?"

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


    export type FunctionList = Array<FunctionConfiguration>;

    export type FunctionName = string; // pattern: "[a-zA-Z0-9-_]+"

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


    export type Handler = string; // pattern: "[a-zA-Z0-9./\-_]+"

    export type HttpStatus = number;

    export type Integer = number;

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


    export type Long = number;

    export type Map = any; // not really - it was 'map' instead - must fix this one

    export type MaxListItems = number;

    export type MemorySize = number;

    export type Mode = string;

    export interface RemoveEventSourceRequest {
      UUID: String;
    }


    export interface ResourceNotFoundException {
      Type?: String;
      Message?: String;
    }


    export type RoleArn = string; // pattern: "arn:aws:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+"

    export type Runtime = string;

    export interface ServiceException {
      Type?: String;
      Message?: String;
    }


    export type String = string;

    export type Timeout = number;

    export type Timestamp = number;

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


    export type Boolean = boolean;

}
