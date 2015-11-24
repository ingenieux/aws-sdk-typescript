// DO NOT EDIT!
//

///<reference path="./aws-sdk-common.d.ts" />
declare module "aws-sdk" {
    export class DeviceFarm {
      constructor(options?: any);
      createDevicePool(params: DeviceFarmCreateDevicePoolRequest, callback: (err: DeviceFarmArgumentException|DeviceFarmNotFoundException|DeviceFarmLimitExceededException|DeviceFarmServiceAccountException|any, data: DeviceFarmCreateDevicePoolResult|any) => void): void;
      createProject(params: DeviceFarmCreateProjectRequest, callback: (err: DeviceFarmArgumentException|DeviceFarmNotFoundException|DeviceFarmLimitExceededException|DeviceFarmServiceAccountException|any, data: DeviceFarmCreateProjectResult|any) => void): void;
      createUpload(params: DeviceFarmCreateUploadRequest, callback: (err: DeviceFarmArgumentException|DeviceFarmNotFoundException|DeviceFarmLimitExceededException|DeviceFarmServiceAccountException|any, data: DeviceFarmCreateUploadResult|any) => void): void;
      deleteDevicePool(params: DeviceFarmDeleteDevicePoolRequest, callback: (err: DeviceFarmArgumentException|DeviceFarmNotFoundException|DeviceFarmLimitExceededException|DeviceFarmServiceAccountException|any, data: DeviceFarmDeleteDevicePoolResult|any) => void): void;
      deleteProject(params: DeviceFarmDeleteProjectRequest, callback: (err: DeviceFarmArgumentException|DeviceFarmNotFoundException|DeviceFarmLimitExceededException|DeviceFarmServiceAccountException|any, data: DeviceFarmDeleteProjectResult|any) => void): void;
      deleteRun(params: DeviceFarmDeleteRunRequest, callback: (err: DeviceFarmArgumentException|DeviceFarmNotFoundException|DeviceFarmLimitExceededException|DeviceFarmServiceAccountException|any, data: DeviceFarmDeleteRunResult|any) => void): void;
      deleteUpload(params: DeviceFarmDeleteUploadRequest, callback: (err: DeviceFarmArgumentException|DeviceFarmNotFoundException|DeviceFarmLimitExceededException|DeviceFarmServiceAccountException|any, data: DeviceFarmDeleteUploadResult|any) => void): void;
      getAccountSettings(params: DeviceFarmGetAccountSettingsRequest, callback: (err: DeviceFarmArgumentException|DeviceFarmNotFoundException|DeviceFarmLimitExceededException|DeviceFarmServiceAccountException|any, data: DeviceFarmGetAccountSettingsResult|any) => void): void;
      getDevice(params: DeviceFarmGetDeviceRequest, callback: (err: DeviceFarmArgumentException|DeviceFarmNotFoundException|DeviceFarmLimitExceededException|DeviceFarmServiceAccountException|any, data: DeviceFarmGetDeviceResult|any) => void): void;
      getDevicePool(params: DeviceFarmGetDevicePoolRequest, callback: (err: DeviceFarmArgumentException|DeviceFarmNotFoundException|DeviceFarmLimitExceededException|DeviceFarmServiceAccountException|any, data: DeviceFarmGetDevicePoolResult|any) => void): void;
      getDevicePoolCompatibility(params: DeviceFarmGetDevicePoolCompatibilityRequest, callback: (err: DeviceFarmArgumentException|DeviceFarmNotFoundException|DeviceFarmLimitExceededException|DeviceFarmServiceAccountException|any, data: DeviceFarmGetDevicePoolCompatibilityResult|any) => void): void;
      getJob(params: DeviceFarmGetJobRequest, callback: (err: DeviceFarmArgumentException|DeviceFarmNotFoundException|DeviceFarmLimitExceededException|DeviceFarmServiceAccountException|any, data: DeviceFarmGetJobResult|any) => void): void;
      getProject(params: DeviceFarmGetProjectRequest, callback: (err: DeviceFarmArgumentException|DeviceFarmNotFoundException|DeviceFarmLimitExceededException|DeviceFarmServiceAccountException|any, data: DeviceFarmGetProjectResult|any) => void): void;
      getRun(params: DeviceFarmGetRunRequest, callback: (err: DeviceFarmArgumentException|DeviceFarmNotFoundException|DeviceFarmLimitExceededException|DeviceFarmServiceAccountException|any, data: DeviceFarmGetRunResult|any) => void): void;
      getSuite(params: DeviceFarmGetSuiteRequest, callback: (err: DeviceFarmArgumentException|DeviceFarmNotFoundException|DeviceFarmLimitExceededException|DeviceFarmServiceAccountException|any, data: DeviceFarmGetSuiteResult|any) => void): void;
      getTest(params: DeviceFarmGetTestRequest, callback: (err: DeviceFarmArgumentException|DeviceFarmNotFoundException|DeviceFarmLimitExceededException|DeviceFarmServiceAccountException|any, data: DeviceFarmGetTestResult|any) => void): void;
      getUpload(params: DeviceFarmGetUploadRequest, callback: (err: DeviceFarmArgumentException|DeviceFarmNotFoundException|DeviceFarmLimitExceededException|DeviceFarmServiceAccountException|any, data: DeviceFarmGetUploadResult|any) => void): void;
      listArtifacts(params: DeviceFarmListArtifactsRequest, callback: (err: DeviceFarmArgumentException|DeviceFarmNotFoundException|DeviceFarmLimitExceededException|DeviceFarmServiceAccountException|any, data: DeviceFarmListArtifactsResult|any) => void): void;
      listDevicePools(params: DeviceFarmListDevicePoolsRequest, callback: (err: DeviceFarmArgumentException|DeviceFarmNotFoundException|DeviceFarmLimitExceededException|DeviceFarmServiceAccountException|any, data: DeviceFarmListDevicePoolsResult|any) => void): void;
      listDevices(params: DeviceFarmListDevicesRequest, callback: (err: DeviceFarmArgumentException|DeviceFarmNotFoundException|DeviceFarmLimitExceededException|DeviceFarmServiceAccountException|any, data: DeviceFarmListDevicesResult|any) => void): void;
      listJobs(params: DeviceFarmListJobsRequest, callback: (err: DeviceFarmArgumentException|DeviceFarmNotFoundException|DeviceFarmLimitExceededException|DeviceFarmServiceAccountException|any, data: DeviceFarmListJobsResult|any) => void): void;
      listProjects(params: DeviceFarmListProjectsRequest, callback: (err: DeviceFarmArgumentException|DeviceFarmNotFoundException|DeviceFarmLimitExceededException|DeviceFarmServiceAccountException|any, data: DeviceFarmListProjectsResult|any) => void): void;
      listRuns(params: DeviceFarmListRunsRequest, callback: (err: DeviceFarmArgumentException|DeviceFarmNotFoundException|DeviceFarmLimitExceededException|DeviceFarmServiceAccountException|any, data: DeviceFarmListRunsResult|any) => void): void;
      listSamples(params: DeviceFarmListSamplesRequest, callback: (err: DeviceFarmArgumentException|DeviceFarmNotFoundException|DeviceFarmLimitExceededException|DeviceFarmServiceAccountException|any, data: DeviceFarmListSamplesResult|any) => void): void;
      listSuites(params: DeviceFarmListSuitesRequest, callback: (err: DeviceFarmArgumentException|DeviceFarmNotFoundException|DeviceFarmLimitExceededException|DeviceFarmServiceAccountException|any, data: DeviceFarmListSuitesResult|any) => void): void;
      listTests(params: DeviceFarmListTestsRequest, callback: (err: DeviceFarmArgumentException|DeviceFarmNotFoundException|DeviceFarmLimitExceededException|DeviceFarmServiceAccountException|any, data: DeviceFarmListTestsResult|any) => void): void;
      listUniqueProblems(params: DeviceFarmListUniqueProblemsRequest, callback: (err: DeviceFarmArgumentException|DeviceFarmNotFoundException|DeviceFarmLimitExceededException|DeviceFarmServiceAccountException|any, data: DeviceFarmListUniqueProblemsResult|any) => void): void;
      listUploads(params: DeviceFarmListUploadsRequest, callback: (err: DeviceFarmArgumentException|DeviceFarmNotFoundException|DeviceFarmLimitExceededException|DeviceFarmServiceAccountException|any, data: DeviceFarmListUploadsResult|any) => void): void;
      scheduleRun(params: DeviceFarmScheduleRunRequest, callback: (err: DeviceFarmArgumentException|DeviceFarmNotFoundException|DeviceFarmLimitExceededException|DeviceFarmIdempotencyException|DeviceFarmServiceAccountException|any, data: DeviceFarmScheduleRunResult|any) => void): void;
      updateDevicePool(params: DeviceFarmUpdateDevicePoolRequest, callback: (err: DeviceFarmArgumentException|DeviceFarmNotFoundException|DeviceFarmLimitExceededException|DeviceFarmServiceAccountException|any, data: DeviceFarmUpdateDevicePoolResult|any) => void): void;
      updateProject(params: DeviceFarmUpdateProjectRequest, callback: (err: DeviceFarmArgumentException|DeviceFarmNotFoundException|DeviceFarmLimitExceededException|DeviceFarmServiceAccountException|any, data: DeviceFarmUpdateProjectResult|any) => void): void;
    }

    export type DeviceFarmAWSAccountNumber = string;
    export interface DeviceFarmAccountSettings {
        awsAccountNumber?: DeviceFarmAWSAccountNumber;
        unmeteredDevices?: DeviceFarmPurchasedDevicesMap;
    }

    export type DeviceFarmAmazonResourceName = string;
    export type DeviceFarmAmazonResourceNames = Array<DeviceFarmAmazonResourceName>;
    export interface DeviceFarmArgumentException {
        message?: DeviceFarmMessage;
    }

    export interface DeviceFarmArtifact {
        arn?: DeviceFarmAmazonResourceName;
        name?: DeviceFarmName;
        type?: DeviceFarmArtifactType;
        extension?: DeviceFarmString;
        url?: DeviceFarmURL;
    }

    export type DeviceFarmArtifactCategory = string;
    export type DeviceFarmArtifactType = string;
    export type DeviceFarmArtifacts = Array<DeviceFarmArtifact>;
    export type DeviceFarmBillingMethod = string;
    export type DeviceFarmBoolean = boolean;
    export interface DeviceFarmCPU {
        frequency?: DeviceFarmString;
        architecture?: DeviceFarmString;
        clock?: DeviceFarmDouble;
    }

    export type DeviceFarmContentType = string;
    export interface DeviceFarmCounters {
        total?: DeviceFarmInteger;
        passed?: DeviceFarmInteger;
        failed?: DeviceFarmInteger;
        warned?: DeviceFarmInteger;
        errored?: DeviceFarmInteger;
        stopped?: DeviceFarmInteger;
        skipped?: DeviceFarmInteger;
    }

    export interface DeviceFarmCreateDevicePoolRequest {
        projectArn: DeviceFarmAmazonResourceName;
        name: DeviceFarmName;
        description?: DeviceFarmMessage;
        rules: DeviceFarmRules;
    }

    export interface DeviceFarmCreateDevicePoolResult {
        devicePool?: DeviceFarmDevicePool;
    }

    export interface DeviceFarmCreateProjectRequest {
        name: DeviceFarmName;
    }

    export interface DeviceFarmCreateProjectResult {
        project?: DeviceFarmProject;
    }

    export interface DeviceFarmCreateUploadRequest {
        projectArn: DeviceFarmAmazonResourceName;
        name: DeviceFarmName;
        type: DeviceFarmUploadType;
        contentType?: DeviceFarmContentType;
    }

    export interface DeviceFarmCreateUploadResult {
        upload?: DeviceFarmUpload;
    }

    export type DeviceFarmDateTime = number;
    export interface DeviceFarmDeleteDevicePoolRequest {
        arn: DeviceFarmAmazonResourceName;
    }

    export interface DeviceFarmDeleteDevicePoolResult {
    }

    export interface DeviceFarmDeleteProjectRequest {
        arn: DeviceFarmAmazonResourceName;
    }

    export interface DeviceFarmDeleteProjectResult {
    }

    export interface DeviceFarmDeleteRunRequest {
        arn: DeviceFarmAmazonResourceName;
    }

    export interface DeviceFarmDeleteRunResult {
    }

    export interface DeviceFarmDeleteUploadRequest {
        arn: DeviceFarmAmazonResourceName;
    }

    export interface DeviceFarmDeleteUploadResult {
    }

    export interface DeviceFarmDevice {
        arn?: DeviceFarmAmazonResourceName;
        name?: DeviceFarmName;
        manufacturer?: DeviceFarmString;
        model?: DeviceFarmString;
        formFactor?: DeviceFarmDeviceFormFactor;
        platform?: DeviceFarmDevicePlatform;
        os?: DeviceFarmString;
        cpu?: DeviceFarmCPU;
        resolution?: DeviceFarmResolution;
        heapSize?: DeviceFarmLong;
        memory?: DeviceFarmLong;
        image?: DeviceFarmString;
        carrier?: DeviceFarmString;
        radio?: DeviceFarmString;
    }

    export type DeviceFarmDeviceAttribute = string;
    export type DeviceFarmDeviceFormFactor = string;
    export interface DeviceFarmDeviceMinutes {
        total?: DeviceFarmDouble;
        metered?: DeviceFarmDouble;
        unmetered?: DeviceFarmDouble;
    }

    export type DeviceFarmDevicePlatform = string;
    export interface DeviceFarmDevicePool {
        arn?: DeviceFarmAmazonResourceName;
        name?: DeviceFarmName;
        description?: DeviceFarmMessage;
        type?: DeviceFarmDevicePoolType;
        rules?: DeviceFarmRules;
    }

    export interface DeviceFarmDevicePoolCompatibilityResult {
        device?: DeviceFarmDevice;
        compatible?: DeviceFarmBoolean;
        incompatibilityMessages?: DeviceFarmIncompatibilityMessages;
    }

    export type DeviceFarmDevicePoolCompatibilityResults = Array<DeviceFarmDevicePoolCompatibilityResult>;
    export type DeviceFarmDevicePoolType = string;
    export type DeviceFarmDevicePools = Array<DeviceFarmDevicePool>;
    export type DeviceFarmDevices = Array<DeviceFarmDevice>;
    export type DeviceFarmDouble = number;
    export type DeviceFarmExecutionResult = string;
    export type DeviceFarmExecutionStatus = string;
    export type DeviceFarmFilter = string;
    export interface DeviceFarmGetAccountSettingsRequest {
    }

    export interface DeviceFarmGetAccountSettingsResult {
        accountSettings?: DeviceFarmAccountSettings;
    }

    export interface DeviceFarmGetDevicePoolCompatibilityRequest {
        devicePoolArn: DeviceFarmAmazonResourceName;
        appArn: DeviceFarmAmazonResourceName;
        testType?: DeviceFarmTestType;
    }

    export interface DeviceFarmGetDevicePoolCompatibilityResult {
        compatibleDevices?: DeviceFarmDevicePoolCompatibilityResults;
        incompatibleDevices?: DeviceFarmDevicePoolCompatibilityResults;
    }

    export interface DeviceFarmGetDevicePoolRequest {
        arn: DeviceFarmAmazonResourceName;
    }

    export interface DeviceFarmGetDevicePoolResult {
        devicePool?: DeviceFarmDevicePool;
    }

    export interface DeviceFarmGetDeviceRequest {
        arn: DeviceFarmAmazonResourceName;
    }

    export interface DeviceFarmGetDeviceResult {
        device?: DeviceFarmDevice;
    }

    export interface DeviceFarmGetJobRequest {
        arn: DeviceFarmAmazonResourceName;
    }

    export interface DeviceFarmGetJobResult {
        job?: DeviceFarmJob;
    }

    export interface DeviceFarmGetProjectRequest {
        arn: DeviceFarmAmazonResourceName;
    }

    export interface DeviceFarmGetProjectResult {
        project?: DeviceFarmProject;
    }

    export interface DeviceFarmGetRunRequest {
        arn: DeviceFarmAmazonResourceName;
    }

    export interface DeviceFarmGetRunResult {
        run?: DeviceFarmRun;
    }

    export interface DeviceFarmGetSuiteRequest {
        arn: DeviceFarmAmazonResourceName;
    }

    export interface DeviceFarmGetSuiteResult {
        suite?: DeviceFarmSuite;
    }

    export interface DeviceFarmGetTestRequest {
        arn: DeviceFarmAmazonResourceName;
    }

    export interface DeviceFarmGetTestResult {
        test?: DeviceFarmTest;
    }

    export interface DeviceFarmGetUploadRequest {
        arn: DeviceFarmAmazonResourceName;
    }

    export interface DeviceFarmGetUploadResult {
        upload?: DeviceFarmUpload;
    }

    export interface DeviceFarmIdempotencyException {
        message?: DeviceFarmMessage;
    }

    export interface DeviceFarmIncompatibilityMessage {
        message?: DeviceFarmMessage;
        type?: DeviceFarmDeviceAttribute;
    }

    export type DeviceFarmIncompatibilityMessages = Array<DeviceFarmIncompatibilityMessage>;
    export type DeviceFarmInteger = number;
    export interface DeviceFarmJob {
        arn?: DeviceFarmAmazonResourceName;
        name?: DeviceFarmName;
        type?: DeviceFarmTestType;
        created?: DeviceFarmDateTime;
        status?: DeviceFarmExecutionStatus;
        result?: DeviceFarmExecutionResult;
        started?: DeviceFarmDateTime;
        stopped?: DeviceFarmDateTime;
        counters?: DeviceFarmCounters;
        message?: DeviceFarmMessage;
        device?: DeviceFarmDevice;
        deviceMinutes?: DeviceFarmDeviceMinutes;
    }

    export type DeviceFarmJobs = Array<DeviceFarmJob>;
    export interface DeviceFarmLimitExceededException {
        message?: DeviceFarmMessage;
    }

    export interface DeviceFarmListArtifactsRequest {
        arn: DeviceFarmAmazonResourceName;
        type: DeviceFarmArtifactCategory;
        nextToken?: DeviceFarmPaginationToken;
    }

    export interface DeviceFarmListArtifactsResult {
        artifacts?: DeviceFarmArtifacts;
        nextToken?: DeviceFarmPaginationToken;
    }

    export interface DeviceFarmListDevicePoolsRequest {
        arn: DeviceFarmAmazonResourceName;
        type?: DeviceFarmDevicePoolType;
        nextToken?: DeviceFarmPaginationToken;
    }

    export interface DeviceFarmListDevicePoolsResult {
        devicePools?: DeviceFarmDevicePools;
        nextToken?: DeviceFarmPaginationToken;
    }

    export interface DeviceFarmListDevicesRequest {
        arn?: DeviceFarmAmazonResourceName;
        nextToken?: DeviceFarmPaginationToken;
    }

    export interface DeviceFarmListDevicesResult {
        devices?: DeviceFarmDevices;
        nextToken?: DeviceFarmPaginationToken;
    }

    export interface DeviceFarmListJobsRequest {
        arn: DeviceFarmAmazonResourceName;
        nextToken?: DeviceFarmPaginationToken;
    }

    export interface DeviceFarmListJobsResult {
        jobs?: DeviceFarmJobs;
        nextToken?: DeviceFarmPaginationToken;
    }

    export interface DeviceFarmListProjectsRequest {
        arn?: DeviceFarmAmazonResourceName;
        nextToken?: DeviceFarmPaginationToken;
    }

    export interface DeviceFarmListProjectsResult {
        projects?: DeviceFarmProjects;
        nextToken?: DeviceFarmPaginationToken;
    }

    export interface DeviceFarmListRunsRequest {
        arn: DeviceFarmAmazonResourceName;
        nextToken?: DeviceFarmPaginationToken;
    }

    export interface DeviceFarmListRunsResult {
        runs?: DeviceFarmRuns;
        nextToken?: DeviceFarmPaginationToken;
    }

    export interface DeviceFarmListSamplesRequest {
        arn: DeviceFarmAmazonResourceName;
        nextToken?: DeviceFarmPaginationToken;
    }

    export interface DeviceFarmListSamplesResult {
        samples?: DeviceFarmSamples;
        nextToken?: DeviceFarmPaginationToken;
    }

    export interface DeviceFarmListSuitesRequest {
        arn: DeviceFarmAmazonResourceName;
        nextToken?: DeviceFarmPaginationToken;
    }

    export interface DeviceFarmListSuitesResult {
        suites?: DeviceFarmSuites;
        nextToken?: DeviceFarmPaginationToken;
    }

    export interface DeviceFarmListTestsRequest {
        arn: DeviceFarmAmazonResourceName;
        nextToken?: DeviceFarmPaginationToken;
    }

    export interface DeviceFarmListTestsResult {
        tests?: DeviceFarmTests;
        nextToken?: DeviceFarmPaginationToken;
    }

    export interface DeviceFarmListUniqueProblemsRequest {
        arn: DeviceFarmAmazonResourceName;
        nextToken?: DeviceFarmPaginationToken;
    }

    export interface DeviceFarmListUniqueProblemsResult {
        uniqueProblems?: DeviceFarmUniqueProblemsByExecutionResultMap;
        nextToken?: DeviceFarmPaginationToken;
    }

    export interface DeviceFarmListUploadsRequest {
        arn: DeviceFarmAmazonResourceName;
        nextToken?: DeviceFarmPaginationToken;
    }

    export interface DeviceFarmListUploadsResult {
        uploads?: DeviceFarmUploads;
        nextToken?: DeviceFarmPaginationToken;
    }

    export interface DeviceFarmLocation {
        latitude: DeviceFarmDouble;
        longitude: DeviceFarmDouble;
    }

    export type DeviceFarmLong = number;
    export type DeviceFarmMessage = string;
    export type DeviceFarmMetadata = string;
    export type DeviceFarmName = string;
    export interface DeviceFarmNotFoundException {
        message?: DeviceFarmMessage;
    }

    export type DeviceFarmPaginationToken = string;
    export interface DeviceFarmProblem {
        run?: DeviceFarmProblemDetail;
        job?: DeviceFarmProblemDetail;
        suite?: DeviceFarmProblemDetail;
        test?: DeviceFarmProblemDetail;
        device?: DeviceFarmDevice;
        result?: DeviceFarmExecutionResult;
        message?: DeviceFarmMessage;
    }

    export interface DeviceFarmProblemDetail {
        arn?: DeviceFarmAmazonResourceName;
        name?: DeviceFarmName;
    }

    export type DeviceFarmProblems = Array<DeviceFarmProblem>;
    export interface DeviceFarmProject {
        arn?: DeviceFarmAmazonResourceName;
        name?: DeviceFarmName;
        created?: DeviceFarmDateTime;
    }

    export type DeviceFarmProjects = Array<DeviceFarmProject>;
    export type DeviceFarmPurchasedDevicesMap = any; // not really - it was 'map' instead - must fix this one
    export interface DeviceFarmRadios {
        wifi?: DeviceFarmBoolean;
        bluetooth?: DeviceFarmBoolean;
        nfc?: DeviceFarmBoolean;
        gps?: DeviceFarmBoolean;
    }

    export interface DeviceFarmResolution {
        width?: DeviceFarmInteger;
        height?: DeviceFarmInteger;
    }

    export interface DeviceFarmRule {
        attribute?: DeviceFarmDeviceAttribute;
        operator?: DeviceFarmRuleOperator;
        value?: DeviceFarmString;
    }

    export type DeviceFarmRuleOperator = string;
    export type DeviceFarmRules = Array<DeviceFarmRule>;
    export interface DeviceFarmRun {
        arn?: DeviceFarmAmazonResourceName;
        name?: DeviceFarmName;
        type?: DeviceFarmTestType;
        platform?: DeviceFarmDevicePlatform;
        created?: DeviceFarmDateTime;
        status?: DeviceFarmExecutionStatus;
        result?: DeviceFarmExecutionResult;
        started?: DeviceFarmDateTime;
        stopped?: DeviceFarmDateTime;
        counters?: DeviceFarmCounters;
        message?: DeviceFarmMessage;
        totalJobs?: DeviceFarmInteger;
        completedJobs?: DeviceFarmInteger;
        billingMethod?: DeviceFarmBillingMethod;
        deviceMinutes?: DeviceFarmDeviceMinutes;
    }

    export type DeviceFarmRuns = Array<DeviceFarmRun>;
    export interface DeviceFarmSample {
        arn?: DeviceFarmAmazonResourceName;
        type?: DeviceFarmSampleType;
        url?: DeviceFarmURL;
    }

    export type DeviceFarmSampleType = string;
    export type DeviceFarmSamples = Array<DeviceFarmSample>;
    export interface DeviceFarmScheduleRunConfiguration {
        extraDataPackageArn?: DeviceFarmAmazonResourceName;
        networkProfileArn?: DeviceFarmAmazonResourceName;
        locale?: DeviceFarmString;
        location?: DeviceFarmLocation;
        radios?: DeviceFarmRadios;
        auxiliaryApps?: DeviceFarmAmazonResourceNames;
        billingMethod?: DeviceFarmBillingMethod;
    }

    export interface DeviceFarmScheduleRunRequest {
        projectArn: DeviceFarmAmazonResourceName;
        appArn: DeviceFarmAmazonResourceName;
        devicePoolArn: DeviceFarmAmazonResourceName;
        name?: DeviceFarmName;
        test: DeviceFarmScheduleRunTest;
        configuration?: DeviceFarmScheduleRunConfiguration;
    }

    export interface DeviceFarmScheduleRunResult {
        run?: DeviceFarmRun;
    }

    export interface DeviceFarmScheduleRunTest {
        type: DeviceFarmTestType;
        testPackageArn?: DeviceFarmAmazonResourceName;
        filter?: DeviceFarmFilter;
        parameters?: DeviceFarmTestParameters;
    }

    export interface DeviceFarmServiceAccountException {
        message?: DeviceFarmMessage;
    }

    export type DeviceFarmString = string;
    export interface DeviceFarmSuite {
        arn?: DeviceFarmAmazonResourceName;
        name?: DeviceFarmName;
        type?: DeviceFarmTestType;
        created?: DeviceFarmDateTime;
        status?: DeviceFarmExecutionStatus;
        result?: DeviceFarmExecutionResult;
        started?: DeviceFarmDateTime;
        stopped?: DeviceFarmDateTime;
        counters?: DeviceFarmCounters;
        message?: DeviceFarmMessage;
        deviceMinutes?: DeviceFarmDeviceMinutes;
    }

    export type DeviceFarmSuites = Array<DeviceFarmSuite>;
    export interface DeviceFarmTest {
        arn?: DeviceFarmAmazonResourceName;
        name?: DeviceFarmName;
        type?: DeviceFarmTestType;
        created?: DeviceFarmDateTime;
        status?: DeviceFarmExecutionStatus;
        result?: DeviceFarmExecutionResult;
        started?: DeviceFarmDateTime;
        stopped?: DeviceFarmDateTime;
        counters?: DeviceFarmCounters;
        message?: DeviceFarmMessage;
        deviceMinutes?: DeviceFarmDeviceMinutes;
    }

    export type DeviceFarmTestParameters = any; // not really - it was 'map' instead - must fix this one
    export type DeviceFarmTestType = string;
    export type DeviceFarmTests = Array<DeviceFarmTest>;
    export type DeviceFarmURL = string;
    export interface DeviceFarmUniqueProblem {
        message?: DeviceFarmMessage;
        problems?: DeviceFarmProblems;
    }

    export type DeviceFarmUniqueProblems = Array<DeviceFarmUniqueProblem>;
    export type DeviceFarmUniqueProblemsByExecutionResultMap = any; // not really - it was 'map' instead - must fix this one
    export interface DeviceFarmUpdateDevicePoolRequest {
        arn: DeviceFarmAmazonResourceName;
        name?: DeviceFarmName;
        description?: DeviceFarmMessage;
        rules?: DeviceFarmRules;
    }

    export interface DeviceFarmUpdateDevicePoolResult {
        devicePool?: DeviceFarmDevicePool;
    }

    export interface DeviceFarmUpdateProjectRequest {
        arn: DeviceFarmAmazonResourceName;
        name?: DeviceFarmName;
    }

    export interface DeviceFarmUpdateProjectResult {
        project?: DeviceFarmProject;
    }

    export interface DeviceFarmUpload {
        arn?: DeviceFarmAmazonResourceName;
        name?: DeviceFarmName;
        created?: DeviceFarmDateTime;
        type?: DeviceFarmUploadType;
        status?: DeviceFarmUploadStatus;
        url?: DeviceFarmURL;
        metadata?: DeviceFarmMetadata;
        contentType?: DeviceFarmContentType;
        message?: DeviceFarmMessage;
    }

    export type DeviceFarmUploadStatus = string;
    export type DeviceFarmUploadType = string;
    export type DeviceFarmUploads = Array<DeviceFarmUpload>;
}
