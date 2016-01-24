// Type definitions for aws-sdk - AWS Device Farm
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

///<reference path="./aws-sdk-common.d.ts" />

declare module "aws-sdk" {

    /*
     * apiVersion: 2015-06-23
     * endpointPrefix: devicefarm
     * serviceAbbreviation: 
     * signatureVersion: v4
     * protocol: json
     */
    export class DeviceFarm extends Service {
      constructor(options?: any);
      endpoint: Endpoint;
      createDevicePool(params: DeviceFarm.CreateDevicePoolRequest, callback?: (err: DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any, data: DeviceFarm.CreateDevicePoolResult|any) => void): Request;
      createProject(params: DeviceFarm.CreateProjectRequest, callback?: (err: DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any, data: DeviceFarm.CreateProjectResult|any) => void): Request;
      createUpload(params: DeviceFarm.CreateUploadRequest, callback?: (err: DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any, data: DeviceFarm.CreateUploadResult|any) => void): Request;
      deleteDevicePool(params: DeviceFarm.DeleteDevicePoolRequest, callback?: (err: DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any, data: DeviceFarm.DeleteDevicePoolResult|any) => void): Request;
      deleteProject(params: DeviceFarm.DeleteProjectRequest, callback?: (err: DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any, data: DeviceFarm.DeleteProjectResult|any) => void): Request;
      deleteRun(params: DeviceFarm.DeleteRunRequest, callback?: (err: DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any, data: DeviceFarm.DeleteRunResult|any) => void): Request;
      deleteUpload(params: DeviceFarm.DeleteUploadRequest, callback?: (err: DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any, data: DeviceFarm.DeleteUploadResult|any) => void): Request;
      getAccountSettings(params: DeviceFarm.GetAccountSettingsRequest, callback?: (err: DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any, data: DeviceFarm.GetAccountSettingsResult|any) => void): Request;
      getDevice(params: DeviceFarm.GetDeviceRequest, callback?: (err: DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any, data: DeviceFarm.GetDeviceResult|any) => void): Request;
      getDevicePool(params: DeviceFarm.GetDevicePoolRequest, callback?: (err: DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any, data: DeviceFarm.GetDevicePoolResult|any) => void): Request;
      getDevicePoolCompatibility(params: DeviceFarm.GetDevicePoolCompatibilityRequest, callback?: (err: DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any, data: DeviceFarm.GetDevicePoolCompatibilityResult|any) => void): Request;
      getJob(params: DeviceFarm.GetJobRequest, callback?: (err: DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any, data: DeviceFarm.GetJobResult|any) => void): Request;
      getProject(params: DeviceFarm.GetProjectRequest, callback?: (err: DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any, data: DeviceFarm.GetProjectResult|any) => void): Request;
      getRun(params: DeviceFarm.GetRunRequest, callback?: (err: DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any, data: DeviceFarm.GetRunResult|any) => void): Request;
      getSuite(params: DeviceFarm.GetSuiteRequest, callback?: (err: DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any, data: DeviceFarm.GetSuiteResult|any) => void): Request;
      getTest(params: DeviceFarm.GetTestRequest, callback?: (err: DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any, data: DeviceFarm.GetTestResult|any) => void): Request;
      getUpload(params: DeviceFarm.GetUploadRequest, callback?: (err: DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any, data: DeviceFarm.GetUploadResult|any) => void): Request;
      listArtifacts(params: DeviceFarm.ListArtifactsRequest, callback?: (err: DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any, data: DeviceFarm.ListArtifactsResult|any) => void): Request;
      listDevicePools(params: DeviceFarm.ListDevicePoolsRequest, callback?: (err: DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any, data: DeviceFarm.ListDevicePoolsResult|any) => void): Request;
      listDevices(params: DeviceFarm.ListDevicesRequest, callback?: (err: DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any, data: DeviceFarm.ListDevicesResult|any) => void): Request;
      listJobs(params: DeviceFarm.ListJobsRequest, callback?: (err: DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any, data: DeviceFarm.ListJobsResult|any) => void): Request;
      listProjects(params: DeviceFarm.ListProjectsRequest, callback?: (err: DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any, data: DeviceFarm.ListProjectsResult|any) => void): Request;
      listRuns(params: DeviceFarm.ListRunsRequest, callback?: (err: DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any, data: DeviceFarm.ListRunsResult|any) => void): Request;
      listSamples(params: DeviceFarm.ListSamplesRequest, callback?: (err: DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any, data: DeviceFarm.ListSamplesResult|any) => void): Request;
      listSuites(params: DeviceFarm.ListSuitesRequest, callback?: (err: DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any, data: DeviceFarm.ListSuitesResult|any) => void): Request;
      listTests(params: DeviceFarm.ListTestsRequest, callback?: (err: DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any, data: DeviceFarm.ListTestsResult|any) => void): Request;
      listUniqueProblems(params: DeviceFarm.ListUniqueProblemsRequest, callback?: (err: DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any, data: DeviceFarm.ListUniqueProblemsResult|any) => void): Request;
      listUploads(params: DeviceFarm.ListUploadsRequest, callback?: (err: DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any, data: DeviceFarm.ListUploadsResult|any) => void): Request;
      scheduleRun(params: DeviceFarm.ScheduleRunRequest, callback?: (err: DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.IdempotencyException|DeviceFarm.ServiceAccountException|any, data: DeviceFarm.ScheduleRunResult|any) => void): Request;
      updateDevicePool(params: DeviceFarm.UpdateDevicePoolRequest, callback?: (err: DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any, data: DeviceFarm.UpdateDevicePoolResult|any) => void): Request;
      updateProject(params: DeviceFarm.UpdateProjectRequest, callback?: (err: DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any, data: DeviceFarm.UpdateProjectResult|any) => void): Request;

    }

    export module DeviceFarm {
        export type AWSAccountNumber = string;    // max: 16, min: 2
        export type AmazonResourceName = string;    // min: 32
        export type AmazonResourceNames = AmazonResourceName[];
        export type ArtifactCategory = string;
        export type ArtifactType = string;
        export type Artifacts = Artifact[];
        export type BillingMethod = string;
        export type Boolean = boolean;
        export type ContentType = string;    // max: 64
        export type DateTime = number;
        export type DeviceAttribute = string;
        export type DeviceFormFactor = string;
        export type DevicePlatform = string;
        export type DevicePoolCompatibilityResults = DevicePoolCompatibilityResult[];
        export type DevicePoolType = string;
        export type DevicePools = DevicePool[];
        export type Devices = Device[];
        export type Double = number;
        export type ExecutionResult = string;
        export type ExecutionStatus = string;
        export type Filter = string;    // max: 8192
        export type IncompatibilityMessages = IncompatibilityMessage[];
        export type Integer = number;
        export type Jobs = Job[];
        export type Long = number;
        export type Message = string;    // max: 8192
        export type Metadata = string;    // max: 8192
        export type Name = string;    // max: 256
        export type PaginationToken = string;    // max: 1024, min: 4
        export type Problems = Problem[];
        export type Projects = Project[];
        export type PurchasedDevicesMap = {[key:string]: Integer};
        export type RuleOperator = string;
        export type Rules = Rule[];
        export type Runs = Run[];
        export type SampleType = string;
        export type Samples = Sample[];
        export type String = string;
        export type Suites = Suite[];
        export type TestParameters = {[key:string]: String};
        export type TestType = string;
        export type Tests = Test[];
        export type URL = string;    // max: 2048
        export type UniqueProblems = UniqueProblem[];
        export type UniqueProblemsByExecutionResultMap = {[key:string]: UniqueProblems};
        export type UploadStatus = string;
        export type UploadType = string;
        export type Uploads = Upload[];

        export interface AccountSettings {
            awsAccountNumber?: AWSAccountNumber;
            unmeteredDevices?: PurchasedDevicesMap;
        }
        export interface ArgumentException {
            message?: Message;
        }
        export interface Artifact {
            arn?: AmazonResourceName;
            name?: Name;
            type?: ArtifactType;
            extension?: String;
            url?: URL;
        }
        export interface CPU {
            frequency?: String;
            architecture?: String;
            clock?: Double;
        }
        export interface Counters {
            total?: Integer;
            passed?: Integer;
            failed?: Integer;
            warned?: Integer;
            errored?: Integer;
            stopped?: Integer;
            skipped?: Integer;
        }
        export interface CreateDevicePoolRequest {
            projectArn: AmazonResourceName;
            name: Name;
            description?: Message;
            rules: Rules;
        }
        export interface CreateDevicePoolResult {
            devicePool?: DevicePool;
        }
        export interface CreateProjectRequest {
            name: Name;
        }
        export interface CreateProjectResult {
            project?: Project;
        }
        export interface CreateUploadRequest {
            projectArn: AmazonResourceName;
            name: Name;
            type: UploadType;
            contentType?: ContentType;
        }
        export interface CreateUploadResult {
            upload?: Upload;
        }
        export interface DeleteDevicePoolRequest {
            arn: AmazonResourceName;
        }
        export interface DeleteDevicePoolResult {
        }
        export interface DeleteProjectRequest {
            arn: AmazonResourceName;
        }
        export interface DeleteProjectResult {
        }
        export interface DeleteRunRequest {
            arn: AmazonResourceName;
        }
        export interface DeleteRunResult {
        }
        export interface DeleteUploadRequest {
            arn: AmazonResourceName;
        }
        export interface DeleteUploadResult {
        }
        export interface Device {
            arn?: AmazonResourceName;
            name?: Name;
            manufacturer?: String;
            model?: String;
            formFactor?: DeviceFormFactor;
            platform?: DevicePlatform;
            os?: String;
            cpu?: CPU;
            resolution?: Resolution;
            heapSize?: Long;
            memory?: Long;
            image?: String;
            carrier?: String;
            radio?: String;
        }
        export interface DeviceMinutes {
            total?: Double;
            metered?: Double;
            unmetered?: Double;
        }
        export interface DevicePool {
            arn?: AmazonResourceName;
            name?: Name;
            description?: Message;
            type?: DevicePoolType;
            rules?: Rules;
        }
        export interface DevicePoolCompatibilityResult {
            device?: Device;
            compatible?: Boolean;
            incompatibilityMessages?: IncompatibilityMessages;
        }
        export interface GetAccountSettingsRequest {
        }
        export interface GetAccountSettingsResult {
            accountSettings?: AccountSettings;
        }
        export interface GetDevicePoolCompatibilityRequest {
            devicePoolArn: AmazonResourceName;
            appArn?: AmazonResourceName;
            testType?: TestType;
        }
        export interface GetDevicePoolCompatibilityResult {
            compatibleDevices?: DevicePoolCompatibilityResults;
            incompatibleDevices?: DevicePoolCompatibilityResults;
        }
        export interface GetDevicePoolRequest {
            arn: AmazonResourceName;
        }
        export interface GetDevicePoolResult {
            devicePool?: DevicePool;
        }
        export interface GetDeviceRequest {
            arn: AmazonResourceName;
        }
        export interface GetDeviceResult {
            device?: Device;
        }
        export interface GetJobRequest {
            arn: AmazonResourceName;
        }
        export interface GetJobResult {
            job?: Job;
        }
        export interface GetProjectRequest {
            arn: AmazonResourceName;
        }
        export interface GetProjectResult {
            project?: Project;
        }
        export interface GetRunRequest {
            arn: AmazonResourceName;
        }
        export interface GetRunResult {
            run?: Run;
        }
        export interface GetSuiteRequest {
            arn: AmazonResourceName;
        }
        export interface GetSuiteResult {
            suite?: Suite;
        }
        export interface GetTestRequest {
            arn: AmazonResourceName;
        }
        export interface GetTestResult {
            test?: Test;
        }
        export interface GetUploadRequest {
            arn: AmazonResourceName;
        }
        export interface GetUploadResult {
            upload?: Upload;
        }
        export interface IdempotencyException {
            message?: Message;
        }
        export interface IncompatibilityMessage {
            message?: Message;
            type?: DeviceAttribute;
        }
        export interface Job {
            arn?: AmazonResourceName;
            name?: Name;
            type?: TestType;
            created?: DateTime;
            status?: ExecutionStatus;
            result?: ExecutionResult;
            started?: DateTime;
            stopped?: DateTime;
            counters?: Counters;
            message?: Message;
            device?: Device;
            deviceMinutes?: DeviceMinutes;
        }
        export interface LimitExceededException {
            message?: Message;
        }
        export interface ListArtifactsRequest {
            arn: AmazonResourceName;
            type: ArtifactCategory;
            nextToken?: PaginationToken;
        }
        export interface ListArtifactsResult {
            artifacts?: Artifacts;
            nextToken?: PaginationToken;
        }
        export interface ListDevicePoolsRequest {
            arn: AmazonResourceName;
            type?: DevicePoolType;
            nextToken?: PaginationToken;
        }
        export interface ListDevicePoolsResult {
            devicePools?: DevicePools;
            nextToken?: PaginationToken;
        }
        export interface ListDevicesRequest {
            arn?: AmazonResourceName;
            nextToken?: PaginationToken;
        }
        export interface ListDevicesResult {
            devices?: Devices;
            nextToken?: PaginationToken;
        }
        export interface ListJobsRequest {
            arn: AmazonResourceName;
            nextToken?: PaginationToken;
        }
        export interface ListJobsResult {
            jobs?: Jobs;
            nextToken?: PaginationToken;
        }
        export interface ListProjectsRequest {
            arn?: AmazonResourceName;
            nextToken?: PaginationToken;
        }
        export interface ListProjectsResult {
            projects?: Projects;
            nextToken?: PaginationToken;
        }
        export interface ListRunsRequest {
            arn: AmazonResourceName;
            nextToken?: PaginationToken;
        }
        export interface ListRunsResult {
            runs?: Runs;
            nextToken?: PaginationToken;
        }
        export interface ListSamplesRequest {
            arn: AmazonResourceName;
            nextToken?: PaginationToken;
        }
        export interface ListSamplesResult {
            samples?: Samples;
            nextToken?: PaginationToken;
        }
        export interface ListSuitesRequest {
            arn: AmazonResourceName;
            nextToken?: PaginationToken;
        }
        export interface ListSuitesResult {
            suites?: Suites;
            nextToken?: PaginationToken;
        }
        export interface ListTestsRequest {
            arn: AmazonResourceName;
            nextToken?: PaginationToken;
        }
        export interface ListTestsResult {
            tests?: Tests;
            nextToken?: PaginationToken;
        }
        export interface ListUniqueProblemsRequest {
            arn: AmazonResourceName;
            nextToken?: PaginationToken;
        }
        export interface ListUniqueProblemsResult {
            uniqueProblems?: UniqueProblemsByExecutionResultMap;
            nextToken?: PaginationToken;
        }
        export interface ListUploadsRequest {
            arn: AmazonResourceName;
            nextToken?: PaginationToken;
        }
        export interface ListUploadsResult {
            uploads?: Uploads;
            nextToken?: PaginationToken;
        }
        export interface Location {
            latitude: Double;
            longitude: Double;
        }
        export interface NotFoundException {
            message?: Message;
        }
        export interface Problem {
            run?: ProblemDetail;
            job?: ProblemDetail;
            suite?: ProblemDetail;
            test?: ProblemDetail;
            device?: Device;
            result?: ExecutionResult;
            message?: Message;
        }
        export interface ProblemDetail {
            arn?: AmazonResourceName;
            name?: Name;
        }
        export interface Project {
            arn?: AmazonResourceName;
            name?: Name;
            created?: DateTime;
        }
        export interface Radios {
            wifi?: Boolean;
            bluetooth?: Boolean;
            nfc?: Boolean;
            gps?: Boolean;
        }
        export interface Resolution {
            width?: Integer;
            height?: Integer;
        }
        export interface Rule {
            attribute?: DeviceAttribute;
            operator?: RuleOperator;
            value?: String;
        }
        export interface Run {
            arn?: AmazonResourceName;
            name?: Name;
            type?: TestType;
            platform?: DevicePlatform;
            created?: DateTime;
            status?: ExecutionStatus;
            result?: ExecutionResult;
            started?: DateTime;
            stopped?: DateTime;
            counters?: Counters;
            message?: Message;
            totalJobs?: Integer;
            completedJobs?: Integer;
            billingMethod?: BillingMethod;
            deviceMinutes?: DeviceMinutes;
        }
        export interface Sample {
            arn?: AmazonResourceName;
            type?: SampleType;
            url?: URL;
        }
        export interface ScheduleRunConfiguration {
            extraDataPackageArn?: AmazonResourceName;
            networkProfileArn?: AmazonResourceName;
            locale?: String;
            location?: Location;
            radios?: Radios;
            auxiliaryApps?: AmazonResourceNames;
            billingMethod?: BillingMethod;
        }
        export interface ScheduleRunRequest {
            projectArn: AmazonResourceName;
            appArn?: AmazonResourceName;
            devicePoolArn: AmazonResourceName;
            name?: Name;
            test: ScheduleRunTest;
            configuration?: ScheduleRunConfiguration;
        }
        export interface ScheduleRunResult {
            run?: Run;
        }
        export interface ScheduleRunTest {
            type: TestType;
            testPackageArn?: AmazonResourceName;
            filter?: Filter;
            parameters?: TestParameters;
        }
        export interface ServiceAccountException {
            message?: Message;
        }
        export interface Suite {
            arn?: AmazonResourceName;
            name?: Name;
            type?: TestType;
            created?: DateTime;
            status?: ExecutionStatus;
            result?: ExecutionResult;
            started?: DateTime;
            stopped?: DateTime;
            counters?: Counters;
            message?: Message;
            deviceMinutes?: DeviceMinutes;
        }
        export interface Test {
            arn?: AmazonResourceName;
            name?: Name;
            type?: TestType;
            created?: DateTime;
            status?: ExecutionStatus;
            result?: ExecutionResult;
            started?: DateTime;
            stopped?: DateTime;
            counters?: Counters;
            message?: Message;
            deviceMinutes?: DeviceMinutes;
        }
        export interface UniqueProblem {
            message?: Message;
            problems?: Problems;
        }
        export interface UpdateDevicePoolRequest {
            arn: AmazonResourceName;
            name?: Name;
            description?: Message;
            rules?: Rules;
        }
        export interface UpdateDevicePoolResult {
            devicePool?: DevicePool;
        }
        export interface UpdateProjectRequest {
            arn: AmazonResourceName;
            name?: Name;
        }
        export interface UpdateProjectResult {
            project?: Project;
        }
        export interface Upload {
            arn?: AmazonResourceName;
            name?: Name;
            created?: DateTime;
            type?: UploadType;
            status?: UploadStatus;
            url?: URL;
            metadata?: Metadata;
            contentType?: ContentType;
            message?: Message;
        }

    }
}
