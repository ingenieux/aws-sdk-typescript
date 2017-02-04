// Type definitions for aws-sdk - AWS Device Farm
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

// COMMENTED <reference path="./aws-sdk.d.ts" />

declare module "aws-sdk" {

 /**
   * apiVersion: 2015-06-23
   * endpointPrefix: devicefarm
   * serviceAbbreviation: 
   * signatureVersion: v4
   * protocol: json
   *
   * AWS Device Farm is a service that enables mobile app developers to test Android,
iOS, and Fire OS apps on physical phones, tablets, and other devices in the
cloud.
   *
   */
  export class DeviceFarm extends Service {
    constructor(options?: any);
    endpoint: Endpoint;
    /**
     * Creates a device pool.
     *
     * @error ArgumentException   
     * @error NotFoundException   
     * @error LimitExceededException   
     * @error ServiceAccountException   
     */
    createDevicePool(params: DeviceFarm.CreateDevicePoolRequest, callback?: (err: DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any, data: DeviceFarm.CreateDevicePoolResult|any) => void): Request<DeviceFarm.CreateDevicePoolResult|any,DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any>;
    /**
     * Creates a new project.
     *
     * @error ArgumentException   
     * @error NotFoundException   
     * @error LimitExceededException   
     * @error ServiceAccountException   
     */
    createProject(params: DeviceFarm.CreateProjectRequest, callback?: (err: DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any, data: DeviceFarm.CreateProjectResult|any) => void): Request<DeviceFarm.CreateProjectResult|any,DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any>;
    /**
     * Specifies and starts a remote access session.
     *
     * @error ArgumentException   
     * @error NotFoundException   
     * @error LimitExceededException   
     * @error ServiceAccountException   
     */
    createRemoteAccessSession(params: DeviceFarm.CreateRemoteAccessSessionRequest, callback?: (err: DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any, data: DeviceFarm.CreateRemoteAccessSessionResult|any) => void): Request<DeviceFarm.CreateRemoteAccessSessionResult|any,DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any>;
    /**
     * Uploads an app or test scripts.
     *
     * @error ArgumentException   
     * @error NotFoundException   
     * @error LimitExceededException   
     * @error ServiceAccountException   
     */
    createUpload(params: DeviceFarm.CreateUploadRequest, callback?: (err: DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any, data: DeviceFarm.CreateUploadResult|any) => void): Request<DeviceFarm.CreateUploadResult|any,DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any>;
    /**
     * Deletes a device pool given the pool ARN. Does not allow deletion of curated
pools owned by the system.
     *
     * @error ArgumentException   
     * @error NotFoundException   
     * @error LimitExceededException   
     * @error ServiceAccountException   
     */
    deleteDevicePool(params: DeviceFarm.DeleteDevicePoolRequest, callback?: (err: DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any, data: DeviceFarm.DeleteDevicePoolResult|any) => void): Request<DeviceFarm.DeleteDevicePoolResult|any,DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any>;
    /**
     * Deletes an AWS Device Farm project, given the project ARN.

 Note Deleting this resource does not stop an in-progress run.
     *
     * @error ArgumentException   
     * @error NotFoundException   
     * @error LimitExceededException   
     * @error ServiceAccountException   
     */
    deleteProject(params: DeviceFarm.DeleteProjectRequest, callback?: (err: DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any, data: DeviceFarm.DeleteProjectResult|any) => void): Request<DeviceFarm.DeleteProjectResult|any,DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any>;
    /**
     * Deletes a completed remote access session and its results.
     *
     * @error ArgumentException   
     * @error NotFoundException   
     * @error LimitExceededException   
     * @error ServiceAccountException   
     */
    deleteRemoteAccessSession(params: DeviceFarm.DeleteRemoteAccessSessionRequest, callback?: (err: DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any, data: DeviceFarm.DeleteRemoteAccessSessionResult|any) => void): Request<DeviceFarm.DeleteRemoteAccessSessionResult|any,DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any>;
    /**
     * Deletes the run, given the run ARN.

 Note Deleting this resource does not stop an in-progress run.
     *
     * @error ArgumentException   
     * @error NotFoundException   
     * @error LimitExceededException   
     * @error ServiceAccountException   
     */
    deleteRun(params: DeviceFarm.DeleteRunRequest, callback?: (err: DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any, data: DeviceFarm.DeleteRunResult|any) => void): Request<DeviceFarm.DeleteRunResult|any,DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any>;
    /**
     * Deletes an upload given the upload ARN.
     *
     * @error ArgumentException   
     * @error NotFoundException   
     * @error LimitExceededException   
     * @error ServiceAccountException   
     */
    deleteUpload(params: DeviceFarm.DeleteUploadRequest, callback?: (err: DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any, data: DeviceFarm.DeleteUploadResult|any) => void): Request<DeviceFarm.DeleteUploadResult|any,DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any>;
    /**
     * Returns the number of unmetered iOS and/or unmetered Android devices that have
been purchased by the account.
     *
     * @error ArgumentException   
     * @error NotFoundException   
     * @error LimitExceededException   
     * @error ServiceAccountException   
     */
    getAccountSettings(params: DeviceFarm.GetAccountSettingsRequest, callback?: (err: DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any, data: DeviceFarm.GetAccountSettingsResult|any) => void): Request<DeviceFarm.GetAccountSettingsResult|any,DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any>;
    /**
     * Gets information about a unique device type.
     *
     * @error ArgumentException   
     * @error NotFoundException   
     * @error LimitExceededException   
     * @error ServiceAccountException   
     */
    getDevice(params: DeviceFarm.GetDeviceRequest, callback?: (err: DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any, data: DeviceFarm.GetDeviceResult|any) => void): Request<DeviceFarm.GetDeviceResult|any,DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any>;
    /**
     * Gets information about a device pool.
     *
     * @error ArgumentException   
     * @error NotFoundException   
     * @error LimitExceededException   
     * @error ServiceAccountException   
     */
    getDevicePool(params: DeviceFarm.GetDevicePoolRequest, callback?: (err: DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any, data: DeviceFarm.GetDevicePoolResult|any) => void): Request<DeviceFarm.GetDevicePoolResult|any,DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any>;
    /**
     * Gets information about compatibility with a device pool.
     *
     * @error ArgumentException   
     * @error NotFoundException   
     * @error LimitExceededException   
     * @error ServiceAccountException   
     */
    getDevicePoolCompatibility(params: DeviceFarm.GetDevicePoolCompatibilityRequest, callback?: (err: DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any, data: DeviceFarm.GetDevicePoolCompatibilityResult|any) => void): Request<DeviceFarm.GetDevicePoolCompatibilityResult|any,DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any>;
    /**
     * Gets information about a job.
     *
     * @error ArgumentException   
     * @error NotFoundException   
     * @error LimitExceededException   
     * @error ServiceAccountException   
     */
    getJob(params: DeviceFarm.GetJobRequest, callback?: (err: DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any, data: DeviceFarm.GetJobResult|any) => void): Request<DeviceFarm.GetJobResult|any,DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any>;
    /**
     * Gets the current status and future status of all offerings purchased by an AWS
account. The response indicates how many offerings are currently available and
the offerings that will be available in the next period. The API returns a 
NotEligible error if the user is not permitted to invoke the operation. Please
contact aws-devicefarm-support@amazon.com [aws-devicefarm-support@amazon.com] if
you believe that you should be able to invoke this operation.
     *
     * @error ArgumentException   
     * @error NotFoundException   
     * @error NotEligibleException   
     * @error LimitExceededException   
     * @error ServiceAccountException   
     */
    getOfferingStatus(params: DeviceFarm.GetOfferingStatusRequest, callback?: (err: DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.NotEligibleException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any, data: DeviceFarm.GetOfferingStatusResult|any) => void): Request<DeviceFarm.GetOfferingStatusResult|any,DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.NotEligibleException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any>;
    /**
     * Gets information about a project.
     *
     * @error ArgumentException   
     * @error NotFoundException   
     * @error LimitExceededException   
     * @error ServiceAccountException   
     */
    getProject(params: DeviceFarm.GetProjectRequest, callback?: (err: DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any, data: DeviceFarm.GetProjectResult|any) => void): Request<DeviceFarm.GetProjectResult|any,DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any>;
    /**
     * Returns a link to a currently running remote access session.
     *
     * @error ArgumentException   
     * @error NotFoundException   
     * @error LimitExceededException   
     * @error ServiceAccountException   
     */
    getRemoteAccessSession(params: DeviceFarm.GetRemoteAccessSessionRequest, callback?: (err: DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any, data: DeviceFarm.GetRemoteAccessSessionResult|any) => void): Request<DeviceFarm.GetRemoteAccessSessionResult|any,DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any>;
    /**
     * Gets information about a run.
     *
     * @error ArgumentException   
     * @error NotFoundException   
     * @error LimitExceededException   
     * @error ServiceAccountException   
     */
    getRun(params: DeviceFarm.GetRunRequest, callback?: (err: DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any, data: DeviceFarm.GetRunResult|any) => void): Request<DeviceFarm.GetRunResult|any,DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any>;
    /**
     * Gets information about a suite.
     *
     * @error ArgumentException   
     * @error NotFoundException   
     * @error LimitExceededException   
     * @error ServiceAccountException   
     */
    getSuite(params: DeviceFarm.GetSuiteRequest, callback?: (err: DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any, data: DeviceFarm.GetSuiteResult|any) => void): Request<DeviceFarm.GetSuiteResult|any,DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any>;
    /**
     * Gets information about a test.
     *
     * @error ArgumentException   
     * @error NotFoundException   
     * @error LimitExceededException   
     * @error ServiceAccountException   
     */
    getTest(params: DeviceFarm.GetTestRequest, callback?: (err: DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any, data: DeviceFarm.GetTestResult|any) => void): Request<DeviceFarm.GetTestResult|any,DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any>;
    /**
     * Gets information about an upload.
     *
     * @error ArgumentException   
     * @error NotFoundException   
     * @error LimitExceededException   
     * @error ServiceAccountException   
     */
    getUpload(params: DeviceFarm.GetUploadRequest, callback?: (err: DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any, data: DeviceFarm.GetUploadResult|any) => void): Request<DeviceFarm.GetUploadResult|any,DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any>;
    /**
     * Installs an application to the device in a remote access session. For Android
applications, the file must be in .apk format. For iOS applications, the file
must be in .ipa format.
     *
     * @error ArgumentException   
     * @error NotFoundException   
     * @error LimitExceededException   
     * @error ServiceAccountException   
     */
    installToRemoteAccessSession(params: DeviceFarm.InstallToRemoteAccessSessionRequest, callback?: (err: DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any, data: DeviceFarm.InstallToRemoteAccessSessionResult|any) => void): Request<DeviceFarm.InstallToRemoteAccessSessionResult|any,DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any>;
    /**
     * Gets information about artifacts.
     *
     * @error ArgumentException   
     * @error NotFoundException   
     * @error LimitExceededException   
     * @error ServiceAccountException   
     */
    listArtifacts(params: DeviceFarm.ListArtifactsRequest, callback?: (err: DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any, data: DeviceFarm.ListArtifactsResult|any) => void): Request<DeviceFarm.ListArtifactsResult|any,DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any>;
    /**
     * Gets information about device pools.
     *
     * @error ArgumentException   
     * @error NotFoundException   
     * @error LimitExceededException   
     * @error ServiceAccountException   
     */
    listDevicePools(params: DeviceFarm.ListDevicePoolsRequest, callback?: (err: DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any, data: DeviceFarm.ListDevicePoolsResult|any) => void): Request<DeviceFarm.ListDevicePoolsResult|any,DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any>;
    /**
     * Gets information about unique device types.
     *
     * @error ArgumentException   
     * @error NotFoundException   
     * @error LimitExceededException   
     * @error ServiceAccountException   
     */
    listDevices(params: DeviceFarm.ListDevicesRequest, callback?: (err: DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any, data: DeviceFarm.ListDevicesResult|any) => void): Request<DeviceFarm.ListDevicesResult|any,DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any>;
    /**
     * Gets information about jobs.
     *
     * @error ArgumentException   
     * @error NotFoundException   
     * @error LimitExceededException   
     * @error ServiceAccountException   
     */
    listJobs(params: DeviceFarm.ListJobsRequest, callback?: (err: DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any, data: DeviceFarm.ListJobsResult|any) => void): Request<DeviceFarm.ListJobsResult|any,DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any>;
    /**
     * Returns a list of all historical purchases, renewals, and system renewal
transactions for an AWS account. The list is paginated and ordered by a
descending timestamp (most recent transactions are first). The API returns a 
NotEligible error if the user is not permitted to invoke the operation. Please
contact aws-devicefarm-support@amazon.com [aws-devicefarm-support@amazon.com] if
you believe that you should be able to invoke this operation.
     *
     * @error ArgumentException   
     * @error NotFoundException   
     * @error NotEligibleException   
     * @error LimitExceededException   
     * @error ServiceAccountException   
     */
    listOfferingTransactions(params: DeviceFarm.ListOfferingTransactionsRequest, callback?: (err: DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.NotEligibleException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any, data: DeviceFarm.ListOfferingTransactionsResult|any) => void): Request<DeviceFarm.ListOfferingTransactionsResult|any,DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.NotEligibleException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any>;
    /**
     * Returns a list of products or offerings that the user can manage through the
API. Each offering record indicates the recurring price per unit and the
frequency for that offering. The API returns a NotEligible error if the user is
not permitted to invoke the operation. Please contact 
aws-devicefarm-support@amazon.com [aws-devicefarm-support@amazon.com] if you
believe that you should be able to invoke this operation.
     *
     * @error ArgumentException   
     * @error NotFoundException   
     * @error NotEligibleException   
     * @error LimitExceededException   
     * @error ServiceAccountException   
     */
    listOfferings(params: DeviceFarm.ListOfferingsRequest, callback?: (err: DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.NotEligibleException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any, data: DeviceFarm.ListOfferingsResult|any) => void): Request<DeviceFarm.ListOfferingsResult|any,DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.NotEligibleException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any>;
    /**
     * Gets information about projects.
     *
     * @error ArgumentException   
     * @error NotFoundException   
     * @error LimitExceededException   
     * @error ServiceAccountException   
     */
    listProjects(params: DeviceFarm.ListProjectsRequest, callback?: (err: DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any, data: DeviceFarm.ListProjectsResult|any) => void): Request<DeviceFarm.ListProjectsResult|any,DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any>;
    /**
     * Returns a list of all currently running remote access sessions.
     *
     * @error ArgumentException   
     * @error NotFoundException   
     * @error LimitExceededException   
     * @error ServiceAccountException   
     */
    listRemoteAccessSessions(params: DeviceFarm.ListRemoteAccessSessionsRequest, callback?: (err: DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any, data: DeviceFarm.ListRemoteAccessSessionsResult|any) => void): Request<DeviceFarm.ListRemoteAccessSessionsResult|any,DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any>;
    /**
     * Gets information about runs, given an AWS Device Farm project ARN.
     *
     * @error ArgumentException   
     * @error NotFoundException   
     * @error LimitExceededException   
     * @error ServiceAccountException   
     */
    listRuns(params: DeviceFarm.ListRunsRequest, callback?: (err: DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any, data: DeviceFarm.ListRunsResult|any) => void): Request<DeviceFarm.ListRunsResult|any,DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any>;
    /**
     * Gets information about samples, given an AWS Device Farm project ARN
     *
     * @error ArgumentException   
     * @error NotFoundException   
     * @error LimitExceededException   
     * @error ServiceAccountException   
     */
    listSamples(params: DeviceFarm.ListSamplesRequest, callback?: (err: DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any, data: DeviceFarm.ListSamplesResult|any) => void): Request<DeviceFarm.ListSamplesResult|any,DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any>;
    /**
     * Gets information about suites.
     *
     * @error ArgumentException   
     * @error NotFoundException   
     * @error LimitExceededException   
     * @error ServiceAccountException   
     */
    listSuites(params: DeviceFarm.ListSuitesRequest, callback?: (err: DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any, data: DeviceFarm.ListSuitesResult|any) => void): Request<DeviceFarm.ListSuitesResult|any,DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any>;
    /**
     * Gets information about tests.
     *
     * @error ArgumentException   
     * @error NotFoundException   
     * @error LimitExceededException   
     * @error ServiceAccountException   
     */
    listTests(params: DeviceFarm.ListTestsRequest, callback?: (err: DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any, data: DeviceFarm.ListTestsResult|any) => void): Request<DeviceFarm.ListTestsResult|any,DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any>;
    /**
     * Gets information about unique problems.
     *
     * @error ArgumentException   
     * @error NotFoundException   
     * @error LimitExceededException   
     * @error ServiceAccountException   
     */
    listUniqueProblems(params: DeviceFarm.ListUniqueProblemsRequest, callback?: (err: DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any, data: DeviceFarm.ListUniqueProblemsResult|any) => void): Request<DeviceFarm.ListUniqueProblemsResult|any,DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any>;
    /**
     * Gets information about uploads, given an AWS Device Farm project ARN.
     *
     * @error ArgumentException   
     * @error NotFoundException   
     * @error LimitExceededException   
     * @error ServiceAccountException   
     */
    listUploads(params: DeviceFarm.ListUploadsRequest, callback?: (err: DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any, data: DeviceFarm.ListUploadsResult|any) => void): Request<DeviceFarm.ListUploadsResult|any,DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any>;
    /**
     * Immediately purchases offerings for an AWS account. Offerings renew with the
latest total purchased quantity for an offering, unless the renewal was
overridden. The API returns a NotEligible error if the user is not permitted to
invoke the operation. Please contact aws-devicefarm-support@amazon.com
[aws-devicefarm-support@amazon.com] if you believe that you should be able to
invoke this operation.
     *
     * @error ArgumentException   
     * @error NotFoundException   
     * @error NotEligibleException   
     * @error LimitExceededException   
     * @error ServiceAccountException   
     */
    purchaseOffering(params: DeviceFarm.PurchaseOfferingRequest, callback?: (err: DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.NotEligibleException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any, data: DeviceFarm.PurchaseOfferingResult|any) => void): Request<DeviceFarm.PurchaseOfferingResult|any,DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.NotEligibleException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any>;
    /**
     * Explicitly sets the quantity of devices to renew for an offering, starting from
the effectiveDate of the next period. The API returns a NotEligible error if the
user is not permitted to invoke the operation. Please contact 
aws-devicefarm-support@amazon.com [aws-devicefarm-support@amazon.com] if you
believe that you should be able to invoke this operation.
     *
     * @error ArgumentException   
     * @error NotFoundException   
     * @error NotEligibleException   
     * @error LimitExceededException   
     * @error ServiceAccountException   
     */
    renewOffering(params: DeviceFarm.RenewOfferingRequest, callback?: (err: DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.NotEligibleException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any, data: DeviceFarm.RenewOfferingResult|any) => void): Request<DeviceFarm.RenewOfferingResult|any,DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.NotEligibleException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any>;
    /**
     * Schedules a run.
     *
     * @error ArgumentException   
     * @error NotFoundException   
     * @error LimitExceededException   
     * @error IdempotencyException   
     * @error ServiceAccountException   
     */
    scheduleRun(params: DeviceFarm.ScheduleRunRequest, callback?: (err: DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.IdempotencyException|DeviceFarm.ServiceAccountException|any, data: DeviceFarm.ScheduleRunResult|any) => void): Request<DeviceFarm.ScheduleRunResult|any,DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.IdempotencyException|DeviceFarm.ServiceAccountException|any>;
    /**
     * Ends a specified remote access session.
     *
     * @error ArgumentException   
     * @error NotFoundException   
     * @error LimitExceededException   
     * @error ServiceAccountException   
     */
    stopRemoteAccessSession(params: DeviceFarm.StopRemoteAccessSessionRequest, callback?: (err: DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any, data: DeviceFarm.StopRemoteAccessSessionResult|any) => void): Request<DeviceFarm.StopRemoteAccessSessionResult|any,DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any>;
    /**
     * Initiates a stop request for the current test run. AWS Device Farm will
immediately stop the run on devices where tests have not started executing, and
you will not be billed for these devices. On devices where tests have started
executing, Setup Suite and Teardown Suite tests will run to completion before
stopping execution on those devices. You will be billed for Setup, Teardown, and
any tests that were in progress or already completed.
     *
     * @error ArgumentException   
     * @error NotFoundException   
     * @error LimitExceededException   
     * @error ServiceAccountException   
     */
    stopRun(params: DeviceFarm.StopRunRequest, callback?: (err: DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any, data: DeviceFarm.StopRunResult|any) => void): Request<DeviceFarm.StopRunResult|any,DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any>;
    /**
     * Modifies the name, description, and rules in a device pool given the attributes
and the pool ARN. Rule updates are all-or-nothing, meaning they can only be
updated as a whole (or not at all).
     *
     * @error ArgumentException   
     * @error NotFoundException   
     * @error LimitExceededException   
     * @error ServiceAccountException   
     */
    updateDevicePool(params: DeviceFarm.UpdateDevicePoolRequest, callback?: (err: DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any, data: DeviceFarm.UpdateDevicePoolResult|any) => void): Request<DeviceFarm.UpdateDevicePoolResult|any,DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any>;
    /**
     * Modifies the specified project name, given the project ARN and a new name.
     *
     * @error ArgumentException   
     * @error NotFoundException   
     * @error LimitExceededException   
     * @error ServiceAccountException   
     */
    updateProject(params: DeviceFarm.UpdateProjectRequest, callback?: (err: DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any, data: DeviceFarm.UpdateProjectResult|any) => void): Request<DeviceFarm.UpdateProjectResult|any,DeviceFarm.ArgumentException|DeviceFarm.NotFoundException|DeviceFarm.LimitExceededException|DeviceFarm.ServiceAccountException|any>;

  }

  export module DeviceFarm {
    
    export type AWSAccountNumber = string;
    
    export type AmazonResourceName = string;
    
    export type AmazonResourceNames = AmazonResourceName[];
    
    export type ArtifactCategory = string;
    
    export type ArtifactType = string;
    
    export type Artifacts = Artifact[];
    
    export type BillingMethod = string;
    
    export type Boolean = boolean;
    
    export type ContentType = string;
    
    export type CurrencyCode = string;
    
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
    
    export type Filter = string;
    
    export type IncompatibilityMessages = IncompatibilityMessage[];
    
    export type Integer = number;
    
    export type Jobs = Job[];
    
    export type Long = number;
    
    export type Message = string;
    
    export type Metadata = string;
    
    export type Name = string;
    
    export type OfferingIdentifier = string;
    
    export type OfferingStatusMap = {[key:string]: OfferingStatus};
    
    export type OfferingTransactionType = string;
    
    export type OfferingTransactions = OfferingTransaction[];
    
    export type OfferingType = string;
    
    export type Offerings = Offering[];
    
    export type PaginationToken = string;
    
    export type Problems = Problem[];
    
    export type Projects = Project[];
    
    export type PurchasedDevicesMap = {[key:string]: Integer};
    
    export type RecurringChargeFrequency = string;
    
    export type RecurringCharges = RecurringCharge[];
    
    export type RemoteAccessSessions = RemoteAccessSession[];
    
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
    
    export type TransactionIdentifier = string;
    
    export type URL = string;
    
    export type UniqueProblems = UniqueProblem[];
    
    export type UniqueProblemsByExecutionResultMap = {[key:string]: UniqueProblems};
    
    export type UploadStatus = string;
    
    export type UploadType = string;
    
    export type Uploads = Upload[];

    export interface AccountSettings {
        /** The AWS account number specified in the AccountSettings container. **/
        awsAccountNumber?: AWSAccountNumber;
        /** Returns the unmetered devices you have purchased or want to purchase. **/
        unmeteredDevices?: PurchasedDevicesMap;
        /** Returns the unmetered remote access devices you have purchased or want to
purchase. **/
        unmeteredRemoteAccessDevices?: PurchasedDevicesMap;
    }
    export interface ArgumentException {
        /** Any additional information about the exception. **/
        message?: Message;
    }
    export interface Artifact {
        /** The artifact&#x27;s ARN. **/
        arn?: AmazonResourceName;
        /** The artifact&#x27;s name. **/
        name?: Name;
        /** The artifact&#x27;s type.

Allowed values include the following:

 &amp;#42;  UNKNOWN: An unknown type.
   
   
 *  SCREENSHOT: The screenshot type.
   
   
 *  DEVICE_LOG: The device log type.
   
   
 *  MESSAGE_LOG: The message log type.
   
   
 *  RESULT_LOG: The result log type.
   
   
 *  SERVICE_LOG: The service log type.
   
   
 *  WEBKIT_LOG: The web kit log type.
   
   
 *  INSTRUMENTATION_OUTPUT: The instrumentation type.
   
   
 *  EXERCISER_MONKEY_OUTPUT: For Android, the artifact (log) generated by an
   Android fuzz test.
   
   
 *  CALABASH_JSON_OUTPUT: The Calabash JSON output type.
   
   
 *  CALABASH_PRETTY_OUTPUT: The Calabash pretty output type.
   
   
 *  CALABASH_STANDARD_OUTPUT: The Calabash standard output type.
   
   
 *  CALABASH_JAVA_XML_OUTPUT: The Calabash Java XML output type.
   
   
 *  AUTOMATION_OUTPUT: The automation output type.
   
   
 *  APPIUM_SERVER_OUTPUT: The Appium server output type.
   
   
 *  APPIUM_JAVA_OUTPUT: The Appium Java output type.
   
   
 *  APPIUM_JAVA_XML_OUTPUT: The Appium Java XML output type.
   
   
 *  APPIUM_PYTHON_OUTPUT: The Appium Python output type.
   
   
 *  APPIUM_PYTHON_XML_OUTPUT: The Appium Python XML output type.
   
   
 *  EXPLORER_EVENT_LOG: The Explorer event log output type.
   
   
 *  EXPLORER_SUMMARY_LOG: The Explorer summary log output type.
   
   
 *  APPLICATION_CRASH_REPORT: The application crash report output type.
   
   
 *  XCTEST_LOG: The XCode test output type. **/
        type?: ArtifactType;
        /** The artifact&#x27;s file extension. **/
        extension?: String;
        /** The pre-signed Amazon S3 URL that can be used with a corresponding GET request
to download the artifact&#x27;s file. **/
        url?: URL;
    }
    export interface CPU {
        /** The CPU&#x27;s frequency. **/
        frequency?: String;
        /** The CPU&#x27;s architecture, for example x86 or ARM. **/
        architecture?: String;
        /** The clock speed of the device&#x27;s CPU, expressed in hertz (Hz). For example, a 1.2
GHz CPU is expressed as 1200000000. **/
        clock?: Double;
    }
    export interface Counters {
        /** The total number of entities. **/
        total?: Integer;
        /** The number of passed entities. **/
        passed?: Integer;
        /** The number of failed entities. **/
        failed?: Integer;
        /** The number of warned entities. **/
        warned?: Integer;
        /** The number of errored entities. **/
        errored?: Integer;
        /** The number of stopped entities. **/
        stopped?: Integer;
        /** The number of skipped entities. **/
        skipped?: Integer;
    }
    export interface CreateDevicePoolRequest {
        /** The ARN of the project for the device pool. **/
        projectArn: AmazonResourceName;
        /** The device pool&#x27;s name. **/
        name: Name;
        /** The device pool&#x27;s description. **/
        description?: Message;
        /** The device pool&#x27;s rules. **/
        rules: Rules;
    }
    export interface CreateDevicePoolResult {
        /** The newly created device pool. **/
        devicePool?: DevicePool;
    }
    export interface CreateProjectRequest {
        /** The project&#x27;s name. **/
        name: Name;
    }
    export interface CreateProjectResult {
        /** The newly created project. **/
        project?: Project;
    }
    export interface CreateRemoteAccessSessionConfiguration {
        /** Returns the billing method for purposes of configuring a remote access session. **/
        billingMethod?: BillingMethod;
    }
    export interface CreateRemoteAccessSessionRequest {
        /** The Amazon Resource Name (ARN) of the project for which you want to create a
remote access session. **/
        projectArn: AmazonResourceName;
        /** The Amazon Resource Name (ARN) of the device for which you want to create a
remote access session. **/
        deviceArn: AmazonResourceName;
        /** The name of the remote access session that you wish to create. **/
        name?: Name;
        /** The configuration information for the remote access session request. **/
        configuration?: CreateRemoteAccessSessionConfiguration;
    }
    export interface CreateRemoteAccessSessionResult {
        /** A container that describes the remote access session when the request to create
a remote access session is sent. **/
        remoteAccessSession?: RemoteAccessSession;
    }
    export interface CreateUploadRequest {
        /** The ARN of the project for the upload. **/
        projectArn: AmazonResourceName;
        /** The upload&#x27;s file name. The name should not contain the &#x27;/&#x27; character. If
uploading an iOS app, the file name needs to end with the .ipa extension. If
uploading an Android app, the file name needs to end with the .apk extension.
For all others, the file name must end with the .zip file extension. **/
        name: Name;
        /** The upload&#x27;s upload type.

Must be one of the following values:

 &amp;#42;  ANDROID_APP: An Android upload.
   
   
 *  IOS_APP: An iOS upload.
   
   
 *  WEB_APP: A web appliction upload.
   
   
 *  EXTERNAL_DATA: An external data upload.
   
   
 *  APPIUM_JAVA_JUNIT_TEST_PACKAGE: An Appium Java JUnit test package upload.
   
   
 *  APPIUM_JAVA_TESTNG_TEST_PACKAGE: An Appium Java TestNG test package upload.
   
   
 *  APPIUM_PYTHON_TEST_PACKAGE: An Appium Python test package upload.
   
   
 *  APPIUM_WEB_JAVA_JUNIT_TEST_PACKAGE: An Appium Java JUnit test package
   upload.
   
   
 *  APPIUM_WEB_JAVA_TESTNG_TEST_PACKAGE: An Appium Java TestNG test package
   upload.
   
   
 *  APPIUM_WEB_PYTHON_TEST_PACKAGE: An Appium Python test package upload.
   
   
 *  CALABASH_TEST_PACKAGE: A Calabash test package upload.
   
   
 *  INSTRUMENTATION_TEST_PACKAGE: An instrumentation upload.
   
   
 *  UIAUTOMATION_TEST_PACKAGE: A uiautomation test package upload.
   
   
 *  UIAUTOMATOR_TEST_PACKAGE: A uiautomator test package upload.
   
   
 *  XCTEST_TEST_PACKAGE: An XCode test package upload.
   
   
 *  XCTEST_UI_TEST_PACKAGE: An XCode UI test package upload.
   
   

 Note If you call CreateUpload with WEB_APP specified, AWS Device Farm throws an 
ArgumentException error. **/
        type: UploadType;
        /** The upload&#x27;s content type (for example, &quot;application/octet-stream&quot;). **/
        contentType?: ContentType;
    }
    export interface CreateUploadResult {
        /** The newly created upload. **/
        upload?: Upload;
    }
    export interface DeleteDevicePoolRequest {
        /** Represents the Amazon Resource Name (ARN) of the Device Farm device pool you
wish to delete. **/
        arn: AmazonResourceName;
    }
    export interface DeleteDevicePoolResult {
    }
    export interface DeleteProjectRequest {
        /** Represents the Amazon Resource Name (ARN) of the Device Farm project you wish to
delete. **/
        arn: AmazonResourceName;
    }
    export interface DeleteProjectResult {
    }
    export interface DeleteRemoteAccessSessionRequest {
        /** The Amazon Resource Name (ARN) of the sesssion for which you want to delete
remote access. **/
        arn: AmazonResourceName;
    }
    export interface DeleteRemoteAccessSessionResult {
    }
    export interface DeleteRunRequest {
        /** The Amazon Resource Name (ARN) for the run you wish to delete. **/
        arn: AmazonResourceName;
    }
    export interface DeleteRunResult {
    }
    export interface DeleteUploadRequest {
        /** Represents the Amazon Resource Name (ARN) of the Device Farm upload you wish to
delete. **/
        arn: AmazonResourceName;
    }
    export interface DeleteUploadResult {
    }
    export interface Device {
        /** The device&#x27;s ARN. **/
        arn?: AmazonResourceName;
        /** The device&#x27;s display name. **/
        name?: Name;
        /** The device&#x27;s manufacturer name. **/
        manufacturer?: String;
        /** The device&#x27;s model name. **/
        model?: String;
        /** The device&#x27;s form factor.

Allowed values include:

 &amp;#42;  PHONE: The phone form factor.
   
   
 *  TABLET: The tablet form factor. **/
        formFactor?: DeviceFormFactor;
        /** The device&#x27;s platform.

Allowed values include:

 &amp;#42;  ANDROID: The Android platform.
   
   
 *  IOS: The iOS platform. **/
        platform?: DevicePlatform;
        /** The device&#x27;s operating system type. **/
        os?: String;
        /** Information about the device&#x27;s CPU. **/
        cpu?: CPU;
        resolution?: Resolution;
        /** The device&#x27;s heap size, expressed in bytes. **/
        heapSize?: Long;
        /** The device&#x27;s total memory size, expressed in bytes. **/
        memory?: Long;
        /** The device&#x27;s image name. **/
        image?: String;
        /** The device&#x27;s carrier. **/
        carrier?: String;
        /** The device&#x27;s radio. **/
        radio?: String;
        /** Specifies whether remote access has been enabled for the specified device. **/
        remoteAccessEnabled?: Boolean;
        /** The type of fleet to which this device belongs. Possible values for fleet type
are PRIVATE and PUBLIC. **/
        fleetType?: String;
        /** The name of the fleet to which this device belongs. **/
        fleetName?: String;
    }
    export interface DeviceMinutes {
        /** When specified, represents the total minutes used by the resource to run tests. **/
        total?: Double;
        /** When specified, represents only the sum of metered minutes used by the resource
to run tests. **/
        metered?: Double;
        /** When specified, represents only the sum of unmetered minutes used by the
resource to run tests. **/
        unmetered?: Double;
    }
    export interface DevicePool {
        /** The device pool&#x27;s ARN. **/
        arn?: AmazonResourceName;
        /** The device pool&#x27;s name. **/
        name?: Name;
        /** The device pool&#x27;s description. **/
        description?: Message;
        /** The device pool&#x27;s type.

Allowed values include:

 &amp;#42;  CURATED: A device pool that is created and managed by AWS Device Farm.
   
   
 *  PRIVATE: A device pool that is created and managed by the device pool
   developer. **/
        type?: DevicePoolType;
        /** Information about the device pool&#x27;s rules. **/
        rules?: Rules;
    }
    export interface DevicePoolCompatibilityResult {
        device?: Device;
        /** Whether the result was compatible with the device pool. **/
        compatible?: Boolean;
        /** Information about the compatibility. **/
        incompatibilityMessages?: IncompatibilityMessages;
    }
    export interface GetAccountSettingsRequest {
    }
    export interface GetAccountSettingsResult {
        accountSettings?: AccountSettings;
    }
    export interface GetDevicePoolCompatibilityRequest {
        /** The device pool&#x27;s ARN. **/
        devicePoolArn: AmazonResourceName;
        /** The ARN of the app that is associated with the specified device pool. **/
        appArn?: AmazonResourceName;
        /** The test type for the specified device pool.

Allowed values include the following:

 &amp;#42;  BUILTIN_FUZZ: The built-in fuzz type.
   
   
 *  BUILTIN_EXPLORER: For Android, an app explorer that will traverse an Android
   app, interacting with it and capturing screenshots at the same time.
   
   
 *  APPIUM_JAVA_JUNIT: The Appium Java JUnit type.
   
   
 *  APPIUM_JAVA_TESTNG: The Appium Java TestNG type.
   
   
 *  APPIUM_PYTHON: The Appium Python type.
   
   
 *  APPIUM_WEB_JAVA_JUNIT: The Appium Java JUnit type for Web apps.
   
   
 *  APPIUM_WEB_JAVA_TESTNG: The Appium Java TestNG type for Web apps.
   
   
 *  APPIUM_WEB_PYTHON: The Appium Python type for Web apps.
   
   
 *  CALABASH: The Calabash type.
   
   
 *  INSTRUMENTATION: The Instrumentation type.
   
   
 *  UIAUTOMATION: The uiautomation type.
   
   
 *  UIAUTOMATOR: The uiautomator type.
   
   
 *  XCTEST: The XCode test type.
   
   
 *  XCTEST_UI: The XCode UI test type. **/
        testType?: TestType;
    }
    export interface GetDevicePoolCompatibilityResult {
        /** Information about compatible devices. **/
        compatibleDevices?: DevicePoolCompatibilityResults;
        /** Information about incompatible devices. **/
        incompatibleDevices?: DevicePoolCompatibilityResults;
    }
    export interface GetDevicePoolRequest {
        /** The device pool&#x27;s ARN. **/
        arn: AmazonResourceName;
    }
    export interface GetDevicePoolResult {
        devicePool?: DevicePool;
    }
    export interface GetDeviceRequest {
        /** The device type&#x27;s ARN. **/
        arn: AmazonResourceName;
    }
    export interface GetDeviceResult {
        device?: Device;
    }
    export interface GetJobRequest {
        /** The job&#x27;s ARN. **/
        arn: AmazonResourceName;
    }
    export interface GetJobResult {
        job?: Job;
    }
    export interface GetOfferingStatusRequest {
        /** An identifier that was returned from the previous call to this operation, which
can be used to return the next set of items in the list. **/
        nextToken?: PaginationToken;
    }
    export interface GetOfferingStatusResult {
        /** When specified, gets the offering status for the current period. **/
        current?: OfferingStatusMap;
        /** When specified, gets the offering status for the next period. **/
        nextPeriod?: OfferingStatusMap;
        /** An identifier that was returned from the previous call to this operation, which
can be used to return the next set of items in the list. **/
        nextToken?: PaginationToken;
    }
    export interface GetProjectRequest {
        /** The project&#x27;s ARN. **/
        arn: AmazonResourceName;
    }
    export interface GetProjectResult {
        project?: Project;
    }
    export interface GetRemoteAccessSessionRequest {
        /** The Amazon Resource Name (ARN) of the remote access session about which you want
to get session information. **/
        arn: AmazonResourceName;
    }
    export interface GetRemoteAccessSessionResult {
        /** A container that lists detailed information about the remote access session. **/
        remoteAccessSession?: RemoteAccessSession;
    }
    export interface GetRunRequest {
        /** The run&#x27;s ARN. **/
        arn: AmazonResourceName;
    }
    export interface GetRunResult {
        run?: Run;
    }
    export interface GetSuiteRequest {
        /** The suite&#x27;s ARN. **/
        arn: AmazonResourceName;
    }
    export interface GetSuiteResult {
        suite?: Suite;
    }
    export interface GetTestRequest {
        /** The test&#x27;s ARN. **/
        arn: AmazonResourceName;
    }
    export interface GetTestResult {
        test?: Test;
    }
    export interface GetUploadRequest {
        /** The upload&#x27;s ARN. **/
        arn: AmazonResourceName;
    }
    export interface GetUploadResult {
        upload?: Upload;
    }
    export interface IdempotencyException {
        /** Any additional information about the exception. **/
        message?: Message;
    }
    export interface IncompatibilityMessage {
        /** A message about the incompatibility. **/
        message?: Message;
        /** The type of incompatibility.

Allowed values include:

 &amp;#42;  ARN: The ARN.
   
   
 *  FORM_FACTOR: The form factor (for example, phone or tablet).
   
   
 *  MANUFACTURER: The manufacturer.
   
   
 *  PLATFORM: The platform (for example, Android or iOS). **/
        type?: DeviceAttribute;
    }
    export interface InstallToRemoteAccessSessionRequest {
        /** The Amazon Resource Name (ARN) of the remote access session about which you are
requesting information. **/
        remoteAccessSessionArn: AmazonResourceName;
        /** The Amazon Resource Name (ARN) of the app about which you are requesting
information. **/
        appArn: AmazonResourceName;
    }
    export interface InstallToRemoteAccessSessionResult {
        appUpload?: Upload;
    }
    export interface Job {
        /** The job&#x27;s ARN. **/
        arn?: AmazonResourceName;
        /** The job&#x27;s name. **/
        name?: Name;
        /** The job&#x27;s type.

Allowed values include the following:

 &amp;#42;  BUILTIN_FUZZ: The built-in fuzz type.
   
   
 *  BUILTIN_EXPLORER: For Android, an app explorer that will traverse an Android
   app, interacting with it and capturing screenshots at the same time.
   
   
 *  APPIUM_JAVA_JUNIT: The Appium Java JUnit type.
   
   
 *  APPIUM_JAVA_TESTNG: The Appium Java TestNG type.
   
   
 *  APPIUM_PYTHON: The Appium Python type.
   
   
 *  APPIUM_WEB_JAVA_JUNIT: The Appium Java JUnit type for Web apps.
   
   
 *  APPIUM_WEB_JAVA_TESTNG: The Appium Java TestNG type for Web apps.
   
   
 *  APPIUM_WEB_PYTHON: The Appium Python type for Web apps.
   
   
 *  CALABASH: The Calabash type.
   
   
 *  INSTRUMENTATION: The Instrumentation type.
   
   
 *  UIAUTOMATION: The uiautomation type.
   
   
 *  UIAUTOMATOR: The uiautomator type.
   
   
 *  XCTEST: The XCode test type.
   
   
 *  XCTEST_UI: The XCode UI test type. **/
        type?: TestType;
        /** When the job was created. **/
        created?: DateTime;
        /** The job&#x27;s status.

Allowed values include:

 &amp;#42;  PENDING: A pending status.
   
   
 *  PENDING_CONCURRENCY: A pending concurrency status.
   
   
 *  PENDING_DEVICE: A pending device status.
   
   
 *  PROCESSING: A processing status.
   
   
 *  SCHEDULING: A scheduling status.
   
   
 *  PREPARING: A preparing status.
   
   
 *  RUNNING: A running status.
   
   
 *  COMPLETED: A completed status.
   
   
 *  STOPPING: A stopping status. **/
        status?: ExecutionStatus;
        /** The job&#x27;s result.

Allowed values include:

 &amp;#42;  PENDING: A pending condition.
   
   
 *  PASSED: A passing condition.
   
   
 *  WARNED: A warning condition.
   
   
 *  FAILED: A failed condition.
   
   
 *  SKIPPED: A skipped condition.
   
   
 *  ERRORED: An error condition.
   
   
 *  STOPPED: A stopped condition. **/
        result?: ExecutionResult;
        /** The job&#x27;s start time. **/
        started?: DateTime;
        /** The job&#x27;s stop time. **/
        stopped?: DateTime;
        /** The job&#x27;s result counters. **/
        counters?: Counters;
        /** A message about the job&#x27;s result. **/
        message?: Message;
        device?: Device;
        /** Represents the total (metered or unmetered) minutes used by the job. **/
        deviceMinutes?: DeviceMinutes;
    }
    export interface LimitExceededException {
        /** Any additional information about the exception. **/
        message?: Message;
    }
    export interface ListArtifactsRequest {
        /** The Run, Job, Suite, or Test ARN. **/
        arn: AmazonResourceName;
        /** The artifacts&#x27; type.

Allowed values include:

 &amp;#42;  FILE: The artifacts are files.
   
   
 *  LOG: The artifacts are logs.
   
   
 *  SCREENSHOT: The artifacts are screenshots. **/
        type: ArtifactCategory;
        /** An identifier that was returned from the previous call to this operation, which
can be used to return the next set of items in the list. **/
        nextToken?: PaginationToken;
    }
    export interface ListArtifactsResult {
        /** Information about the artifacts. **/
        artifacts?: Artifacts;
        /** If the number of items that are returned is significantly large, this is an
identifier that is also returned, which can be used in a subsequent call to this
operation to return the next set of items in the list. **/
        nextToken?: PaginationToken;
    }
    export interface ListDevicePoolsRequest {
        /** The project ARN. **/
        arn: AmazonResourceName;
        /** The device pools&#x27; type.

Allowed values include:

 &amp;#42;  CURATED: A device pool that is created and managed by AWS Device Farm.
   
   
 *  PRIVATE: A device pool that is created and managed by the device pool
   developer. **/
        type?: DevicePoolType;
        /** An identifier that was returned from the previous call to this operation, which
can be used to return the next set of items in the list. **/
        nextToken?: PaginationToken;
    }
    export interface ListDevicePoolsResult {
        /** Information about the device pools. **/
        devicePools?: DevicePools;
        /** If the number of items that are returned is significantly large, this is an
identifier that is also returned, which can be used in a subsequent call to this
operation to return the next set of items in the list. **/
        nextToken?: PaginationToken;
    }
    export interface ListDevicesRequest {
        /** The Amazon Resource Name (ARN) of the project. **/
        arn?: AmazonResourceName;
        /** An identifier that was returned from the previous call to this operation, which
can be used to return the next set of items in the list. **/
        nextToken?: PaginationToken;
    }
    export interface ListDevicesResult {
        /** Information about the devices. **/
        devices?: Devices;
        /** If the number of items that are returned is significantly large, this is an
identifier that is also returned, which can be used in a subsequent call to this
operation to return the next set of items in the list. **/
        nextToken?: PaginationToken;
    }
    export interface ListJobsRequest {
        /** The jobs&#x27; ARNs. **/
        arn: AmazonResourceName;
        /** An identifier that was returned from the previous call to this operation, which
can be used to return the next set of items in the list. **/
        nextToken?: PaginationToken;
    }
    export interface ListJobsResult {
        /** Information about the jobs. **/
        jobs?: Jobs;
        /** If the number of items that are returned is significantly large, this is an
identifier that is also returned, which can be used in a subsequent call to this
operation to return the next set of items in the list. **/
        nextToken?: PaginationToken;
    }
    export interface ListOfferingTransactionsRequest {
        /** An identifier that was returned from the previous call to this operation, which
can be used to return the next set of items in the list. **/
        nextToken?: PaginationToken;
    }
    export interface ListOfferingTransactionsResult {
        /** The audit log of subscriptions you have purchased and modified through AWS
Device Farm. **/
        offeringTransactions?: OfferingTransactions;
        /** An identifier that was returned from the previous call to this operation, which
can be used to return the next set of items in the list. **/
        nextToken?: PaginationToken;
    }
    export interface ListOfferingsRequest {
        /** An identifier that was returned from the previous call to this operation, which
can be used to return the next set of items in the list. **/
        nextToken?: PaginationToken;
    }
    export interface ListOfferingsResult {
        /** A value representing the list offering results. **/
        offerings?: Offerings;
        /** An identifier that was returned from the previous call to this operation, which
can be used to return the next set of items in the list. **/
        nextToken?: PaginationToken;
    }
    export interface ListProjectsRequest {
        /** Optional. If no Amazon Resource Name (ARN) is specified, then AWS Device Farm
returns a list of all projects for the AWS account. You can also specify a
project ARN. **/
        arn?: AmazonResourceName;
        /** An identifier that was returned from the previous call to this operation, which
can be used to return the next set of items in the list. **/
        nextToken?: PaginationToken;
    }
    export interface ListProjectsResult {
        /** Information about the projects. **/
        projects?: Projects;
        /** If the number of items that are returned is significantly large, this is an
identifier that is also returned, which can be used in a subsequent call to this
operation to return the next set of items in the list. **/
        nextToken?: PaginationToken;
    }
    export interface ListRemoteAccessSessionsRequest {
        /** The Amazon Resource Name (ARN) of the remote access session about which you are
requesting information. **/
        arn: AmazonResourceName;
        /** An identifier that was returned from the previous call to this operation, which
can be used to return the next set of items in the list. **/
        nextToken?: PaginationToken;
    }
    export interface ListRemoteAccessSessionsResult {
        /** A container representing the metadata from the service about each remote access
session you are requesting. **/
        remoteAccessSessions?: RemoteAccessSessions;
        /** An identifier that was returned from the previous call to this operation, which
can be used to return the next set of items in the list. **/
        nextToken?: PaginationToken;
    }
    export interface ListRunsRequest {
        /** The Amazon Resource Name (ARN) of the project for which you want to list runs. **/
        arn: AmazonResourceName;
        /** An identifier that was returned from the previous call to this operation, which
can be used to return the next set of items in the list. **/
        nextToken?: PaginationToken;
    }
    export interface ListRunsResult {
        /** Information about the runs. **/
        runs?: Runs;
        /** If the number of items that are returned is significantly large, this is an
identifier that is also returned, which can be used in a subsequent call to this
operation to return the next set of items in the list. **/
        nextToken?: PaginationToken;
    }
    export interface ListSamplesRequest {
        /** The Amazon Resource Name (ARN) of the project for which you want to list
samples. **/
        arn: AmazonResourceName;
        /** An identifier that was returned from the previous call to this operation, which
can be used to return the next set of items in the list. **/
        nextToken?: PaginationToken;
    }
    export interface ListSamplesResult {
        /** Information about the samples. **/
        samples?: Samples;
        /** If the number of items that are returned is significantly large, this is an
identifier that is also returned, which can be used in a subsequent call to this
operation to return the next set of items in the list. **/
        nextToken?: PaginationToken;
    }
    export interface ListSuitesRequest {
        /** The suites&#x27; ARNs. **/
        arn: AmazonResourceName;
        /** An identifier that was returned from the previous call to this operation, which
can be used to return the next set of items in the list. **/
        nextToken?: PaginationToken;
    }
    export interface ListSuitesResult {
        /** Information about the suites. **/
        suites?: Suites;
        /** If the number of items that are returned is significantly large, this is an
identifier that is also returned, which can be used in a subsequent call to this
operation to return the next set of items in the list. **/
        nextToken?: PaginationToken;
    }
    export interface ListTestsRequest {
        /** The tests&#x27; ARNs. **/
        arn: AmazonResourceName;
        /** An identifier that was returned from the previous call to this operation, which
can be used to return the next set of items in the list. **/
        nextToken?: PaginationToken;
    }
    export interface ListTestsResult {
        /** Information about the tests. **/
        tests?: Tests;
        /** If the number of items that are returned is significantly large, this is an
identifier that is also returned, which can be used in a subsequent call to this
operation to return the next set of items in the list. **/
        nextToken?: PaginationToken;
    }
    export interface ListUniqueProblemsRequest {
        /** The unique problems&#x27; ARNs. **/
        arn: AmazonResourceName;
        /** An identifier that was returned from the previous call to this operation, which
can be used to return the next set of items in the list. **/
        nextToken?: PaginationToken;
    }
    export interface ListUniqueProblemsResult {
        /** Information about the unique problems.

Allowed values include:

 &amp;#42;  PENDING: A pending condition.
   
   
 *  PASSED: A passing condition.
   
   
 *  WARNED: A warning condition.
   
   
 *  FAILED: A failed condition.
   
   
 *  SKIPPED: A skipped condition.
   
   
 *  ERRORED: An error condition.
   
   
 *  STOPPED: A stopped condition. **/
        uniqueProblems?: UniqueProblemsByExecutionResultMap;
        /** If the number of items that are returned is significantly large, this is an
identifier that is also returned, which can be used in a subsequent call to this
operation to return the next set of items in the list. **/
        nextToken?: PaginationToken;
    }
    export interface ListUploadsRequest {
        /** The Amazon Resource Name (ARN) of the project for which you want to list
uploads. **/
        arn: AmazonResourceName;
        /** An identifier that was returned from the previous call to this operation, which
can be used to return the next set of items in the list. **/
        nextToken?: PaginationToken;
    }
    export interface ListUploadsResult {
        /** Information about the uploads. **/
        uploads?: Uploads;
        /** If the number of items that are returned is significantly large, this is an
identifier that is also returned, which can be used in a subsequent call to this
operation to return the next set of items in the list. **/
        nextToken?: PaginationToken;
    }
    export interface Location {
        /** The latitude. **/
        latitude: Double;
        /** The longitude. **/
        longitude: Double;
    }
    export interface MonetaryAmount {
        /** The numerical amount of an offering or transaction. **/
        amount?: Double;
        /** The currency code of a monetary amount. For example, USD means &quot;U.S. dollars.&quot; **/
        currencyCode?: CurrencyCode;
    }
    export interface NotEligibleException {
        /** The HTTP response code of a Not Eligible exception. **/
        message?: Message;
    }
    export interface NotFoundException {
        /** Any additional information about the exception. **/
        message?: Message;
    }
    export interface Offering {
        /** The ID that corresponds to a device offering. **/
        id?: OfferingIdentifier;
        /** A string describing the offering. **/
        description?: Message;
        /** The type of offering (e.g., &quot;RECURRING&quot;) for a device. **/
        type?: OfferingType;
        /** The platform of the device (e.g., ANDROID or IOS). **/
        platform?: DevicePlatform;
        /** Specifies whether there are recurring charges for the offering. **/
        recurringCharges?: RecurringCharges;
    }
    export interface OfferingStatus {
        /** The type specified for the offering status. **/
        type?: OfferingTransactionType;
        /** Represents the metadata of an offering status. **/
        offering?: Offering;
        /** The number of available devices in the offering. **/
        quantity?: Integer;
        /** The date on which the offering is effective. **/
        effectiveOn?: DateTime;
    }
    export interface OfferingTransaction {
        /** The status of an offering transaction. **/
        offeringStatus?: OfferingStatus;
        /** The transaction ID of the offering transaction. **/
        transactionId?: TransactionIdentifier;
        /** The date on which an offering transaction was created. **/
        createdOn?: DateTime;
        /** The cost of an offering transaction. **/
        cost?: MonetaryAmount;
    }
    export interface Problem {
        /** Information about the associated run. **/
        run?: ProblemDetail;
        /** Information about the associated job. **/
        job?: ProblemDetail;
        /** Information about the associated suite. **/
        suite?: ProblemDetail;
        /** Information about the associated test. **/
        test?: ProblemDetail;
        /** Information about the associated device. **/
        device?: Device;
        /** The problem&#x27;s result.

Allowed values include:

 &amp;#42;  PENDING: A pending condition.
   
   
 *  PASSED: A passing condition.
   
   
 *  WARNED: A warning condition.
   
   
 *  FAILED: A failed condition.
   
   
 *  SKIPPED: A skipped condition.
   
   
 *  ERRORED: An error condition.
   
   
 *  STOPPED: A stopped condition. **/
        result?: ExecutionResult;
        /** A message about the problem&#x27;s result. **/
        message?: Message;
    }
    export interface ProblemDetail {
        /** The problem detail&#x27;s ARN. **/
        arn?: AmazonResourceName;
        /** The problem detail&#x27;s name. **/
        name?: Name;
    }
    export interface Project {
        /** The project&#x27;s ARN. **/
        arn?: AmazonResourceName;
        /** The project&#x27;s name. **/
        name?: Name;
        /** When the project was created. **/
        created?: DateTime;
    }
    export interface PurchaseOfferingRequest {
        /** The ID of the offering. **/
        offeringId?: OfferingIdentifier;
        /** The number of device slots you wish to purchase in an offering request. **/
        quantity?: Integer;
    }
    export interface PurchaseOfferingResult {
        /** Represents the offering transaction for the purchase result. **/
        offeringTransaction?: OfferingTransaction;
    }
    export interface Radios {
        /** True if Wi-Fi is enabled at the beginning of the test; otherwise, false. **/
        wifi?: Boolean;
        /** True if Bluetooth is enabled at the beginning of the test; otherwise, false. **/
        bluetooth?: Boolean;
        /** True if NFC is enabled at the beginning of the test; otherwise, false. **/
        nfc?: Boolean;
        /** True if GPS is enabled at the beginning of the test; otherwise, false. **/
        gps?: Boolean;
    }
    export interface RecurringCharge {
        /** The cost of the recurring charge. **/
        cost?: MonetaryAmount;
        /** The frequency in which charges will recur. **/
        frequency?: RecurringChargeFrequency;
    }
    export interface RemoteAccessSession {
        /** The Amazon Resource Name (ARN) of the remote access session. **/
        arn?: AmazonResourceName;
        /** The name of the remote access session. **/
        name?: Name;
        /** The date and time the remote access session was created. **/
        created?: DateTime;
        /** The status of the remote access session. Can be any of the following:

 &amp;#42;  PENDING: A pending status.
   
   
 *  PENDING_CONCURRENCY: A pending concurrency status.
   
   
 *  PENDING_DEVICE: A pending device status.
   
   
 *  PROCESSING: A processing status.
   
   
 *  SCHEDULING: A scheduling status.
   
   
 *  PREPARING: A preparing status.
   
   
 *  RUNNING: A running status.
   
   
 *  COMPLETED: A completed status.
   
   
 *  STOPPING: A stopping status. **/
        status?: ExecutionStatus;
        /** The result of the remote access session. Can be any of the following:

 &amp;#42;  PENDING: A pending condition.
   
   
 *  PASSED: A passing condition.
   
   
 *  WARNED: A warning condition.
   
   
 *  FAILED: A failed condition.
   
   
 *  SKIPPED: A skipped condition.
   
   
 *  ERRORED: An error condition.
   
   
 *  STOPPED: A stopped condition. **/
        result?: ExecutionResult;
        /** A message about the remote access session. **/
        message?: Message;
        /** The date and time the remote access session was started. **/
        started?: DateTime;
        /** The date and time the remote access session was stopped. **/
        stopped?: DateTime;
        device?: Device;
        /** The billing method of the remote access session. Possible values include METERED 
or UNMETERED. For more information about metered devices, see AWS Device Farm
terminology
[http://docs.aws.amazon.com/devicefarm/latest/developerguide/welcome.html#welcome-terminology]
.&quot; **/
        billingMethod?: BillingMethod;
        deviceMinutes?: DeviceMinutes;
        /** The endpoint for the remote access sesssion. **/
        endpoint?: String;
    }
    export interface RenewOfferingRequest {
        /** The ID of a request to renew an offering. **/
        offeringId?: OfferingIdentifier;
        /** The quantity requested in an offering renewal. **/
        quantity?: Integer;
    }
    export interface RenewOfferingResult {
        /** Represents the status of the offering transaction for the renewal. **/
        offeringTransaction?: OfferingTransaction;
    }
    export interface Resolution {
        /** The screen resolution&#x27;s width, expressed in pixels. **/
        width?: Integer;
        /** The screen resolution&#x27;s height, expressed in pixels. **/
        height?: Integer;
    }
    export interface Rule {
        /** The rule&#x27;s stringified attribute. For example, specify the value as &quot;\&quot;abc\&quot;&quot;.

Allowed values include:

 &amp;#42;  ARN: The ARN.
   
   
 *  FORM_FACTOR: The form factor (for example, phone or tablet).
   
   
 *  MANUFACTURER: The manufacturer.
   
   
 *  PLATFORM: The platform (for example, Android or iOS). **/
        attribute?: DeviceAttribute;
        /** The rule&#x27;s operator.

 &amp;#42;  EQUALS: The equals operator.
   
   
 *  GREATER_THAN: The greater-than operator.
   
   
 *  IN: The in operator.
   
   
 *  LESS_THAN: The less-than operator.
   
   
 *  NOT_IN: The not-in operator. **/
        operator?: RuleOperator;
        /** The rule&#x27;s value. **/
        value?: String;
    }
    export interface Run {
        /** The run&#x27;s ARN. **/
        arn?: AmazonResourceName;
        /** The run&#x27;s name. **/
        name?: Name;
        /** The run&#x27;s type.

Must be one of the following values:

 &amp;#42;  BUILTIN_FUZZ: The built-in fuzz type.
   
   
 *  BUILTIN_EXPLORER: For Android, an app explorer that will traverse an Android
   app, interacting with it and capturing screenshots at the same time.
   
   
 *  APPIUM_JAVA_JUNIT: The Appium Java JUnit type.
   
   
 *  APPIUM_JAVA_TESTNG: The Appium Java TestNG type.
   
   
 *  APPIUM_PYTHON: The Appium Python type.
   
   
 *  APPIUM_WEB_JAVA_JUNIT: The Appium Java JUnit type for Web apps.
   
   
 *  APPIUM_WEB_JAVA_TESTNG: The Appium Java TestNG type for Web apps.
   
   
 *  APPIUM_WEB_PYTHON: The Appium Python type for Web apps.
   
   
 *  CALABASH: The Calabash type.
   
   
 *  INSTRUMENTATION: The Instrumentation type.
   
   
 *  UIAUTOMATION: The uiautomation type.
   
   
 *  UIAUTOMATOR: The uiautomator type.
   
   
 *  XCTEST: The XCode test type.
   
   
 *  XCTEST_UI: The XCode UI test type. **/
        type?: TestType;
        /** The run&#x27;s platform.

Allowed values include:

 &amp;#42;  ANDROID: The Android platform.
   
   
 *  IOS: The iOS platform. **/
        platform?: DevicePlatform;
        /** When the run was created. **/
        created?: DateTime;
        /** The run&#x27;s status.

Allowed values include:

 &amp;#42;  PENDING: A pending status.
   
   
 *  PENDING_CONCURRENCY: A pending concurrency status.
   
   
 *  PENDING_DEVICE: A pending device status.
   
   
 *  PROCESSING: A processing status.
   
   
 *  SCHEDULING: A scheduling status.
   
   
 *  PREPARING: A preparing status.
   
   
 *  RUNNING: A running status.
   
   
 *  COMPLETED: A completed status.
   
   
 *  STOPPING: A stopping status. **/
        status?: ExecutionStatus;
        /** The run&#x27;s result.

Allowed values include:

 &amp;#42;  PENDING: A pending condition.
   
   
 *  PASSED: A passing condition.
   
   
 *  WARNED: A warning condition.
   
   
 *  FAILED: A failed condition.
   
   
 *  SKIPPED: A skipped condition.
   
   
 *  ERRORED: An error condition.
   
   
 *  STOPPED: A stopped condition. **/
        result?: ExecutionResult;
        /** The run&#x27;s start time. **/
        started?: DateTime;
        /** The run&#x27;s stop time. **/
        stopped?: DateTime;
        /** The run&#x27;s result counters. **/
        counters?: Counters;
        /** A message about the run&#x27;s result. **/
        message?: Message;
        /** The total number of jobs for the run. **/
        totalJobs?: Integer;
        /** The total number of completed jobs. **/
        completedJobs?: Integer;
        /** Specifies the billing method for a test run: metered or unmetered. If the
parameter is not specified, the default value is metered. **/
        billingMethod?: BillingMethod;
        /** Represents the total (metered or unmetered) minutes used by the test run. **/
        deviceMinutes?: DeviceMinutes;
    }
    export interface Sample {
        /** The sample&#x27;s ARN. **/
        arn?: AmazonResourceName;
        /** The sample&#x27;s type.

Must be one of the following values:

 &amp;#42;  CPU: A CPU sample type. This is expressed as the app processing CPU time
   (including child processes) as reported by process, as a percentage.
   
   
 *  MEMORY: A memory usage sample type. This is expressed as the total
   proportional set size of an app process, in kilobytes.
   
   
 *  NATIVE_AVG_DRAWTIME
   
   
 *  NATIVE_FPS
   
   
 *  NATIVE_FRAMES
   
   
 *  NATIVE_MAX_DRAWTIME
   
   
 *  NATIVE_MIN_DRAWTIME
   
   
 *  OPENGL_AVG_DRAWTIME
   
   
 *  OPENGL_FPS
   
   
 *  OPENGL_FRAMES
   
   
 *  OPENGL_MAX_DRAWTIME
   
   
 *  OPENGL_MIN_DRAWTIME
   
   
 *  RX
   
   
 *  RX_RATE: The total number of bytes per second (TCP and UDP) that are sent,
   by app process.
   
   
 *  THREADS: A threads sample type. This is expressed as the total number of
   threads per app process.
   
   
 *  TX
   
   
 *  TX_RATE: The total number of bytes per second (TCP and UDP) that are
   received, by app process. **/
        type?: SampleType;
        /** The pre-signed Amazon S3 URL that can be used with a corresponding GET request
to download the sample&#x27;s file. **/
        url?: URL;
    }
    export interface ScheduleRunConfiguration {
        /** The ARN of the extra data for the run. The extra data is a .zip file that AWS
Device Farm will extract to external data for Android or the app&#x27;s sandbox for
iOS. **/
        extraDataPackageArn?: AmazonResourceName;
        /** Reserved for internal use. **/
        networkProfileArn?: AmazonResourceName;
        /** Information about the locale that is used for the run. **/
        locale?: String;
        /** Information about the location that is used for the run. **/
        location?: Location;
        /** Information about the radio states for the run. **/
        radios?: Radios;
        /** A list of auxiliary apps for the run. **/
        auxiliaryApps?: AmazonResourceNames;
        /** Specifies the billing method for a test run: metered or unmetered. If the
parameter is not specified, the default value is metered. **/
        billingMethod?: BillingMethod;
    }
    export interface ScheduleRunRequest {
        /** The ARN of the project for the run to be scheduled. **/
        projectArn: AmazonResourceName;
        /** The ARN of the app to schedule a run. **/
        appArn?: AmazonResourceName;
        /** The ARN of the device pool for the run to be scheduled. **/
        devicePoolArn: AmazonResourceName;
        /** The name for the run to be scheduled. **/
        name?: Name;
        /** Information about the test for the run to be scheduled. **/
        test: ScheduleRunTest;
        /** Information about the settings for the run to be scheduled. **/
        configuration?: ScheduleRunConfiguration;
    }
    export interface ScheduleRunResult {
        /** Information about the scheduled run. **/
        run?: Run;
    }
    export interface ScheduleRunTest {
        /** The test&#x27;s type.

Must be one of the following values:

 &amp;#42;  BUILTIN_FUZZ: The built-in fuzz type.
   
   
 *  BUILTIN_EXPLORER: For Android, an app explorer that will traverse an Android
   app, interacting with it and capturing screenshots at the same time.
   
   
 *  APPIUM_JAVA_JUNIT: The Appium Java JUnit type.
   
   
 *  APPIUM_JAVA_TESTNG: The Appium Java TestNG type.
   
   
 *  APPIUM_PYTHON: The Appium Python type.
   
   
 *  APPIUM_WEB_JAVA_JUNIT: The Appium Java JUnit type for Web apps.
   
   
 *  APPIUM_WEB_JAVA_TESTNG: The Appium Java TestNG type for Web apps.
   
   
 *  APPIUM_WEB_PYTHON: The Appium Python type for Web apps.
   
   
 *  CALABASH: The Calabash type.
   
   
 *  INSTRUMENTATION: The Instrumentation type.
   
   
 *  UIAUTOMATION: The uiautomation type.
   
   
 *  UIAUTOMATOR: The uiautomator type.
   
   
 *  XCTEST: The XCode test type.
   
   
 *  XCTEST_UI: The XCode UI test type. **/
        type: TestType;
        /** The ARN of the uploaded test that will be run. **/
        testPackageArn?: AmazonResourceName;
        /** The test&#x27;s filter. **/
        filter?: Filter;
        /** The test&#x27;s parameters, such as test framework parameters and fixture settings. **/
        parameters?: TestParameters;
    }
    export interface ServiceAccountException {
        /** Any additional information about the exception. **/
        message?: Message;
    }
    export interface StopRemoteAccessSessionRequest {
        /** The Amazon Resource Name (ARN) of the remote access session you wish to stop. **/
        arn: AmazonResourceName;
    }
    export interface StopRemoteAccessSessionResult {
        /** A container representing the metadata from the service about the remote access
session you are stopping. **/
        remoteAccessSession?: RemoteAccessSession;
    }
    export interface StopRunRequest {
        /** Represents the Amazon Resource Name (ARN) of the Device Farm run you wish to
stop. **/
        arn: AmazonResourceName;
    }
    export interface StopRunResult {
        run?: Run;
    }
    export interface Suite {
        /** The suite&#x27;s ARN. **/
        arn?: AmazonResourceName;
        /** The suite&#x27;s name. **/
        name?: Name;
        /** The suite&#x27;s type.

Must be one of the following values:

 &amp;#42;  BUILTIN_FUZZ: The built-in fuzz type.
   
   
 *  BUILTIN_EXPLORER: For Android, an app explorer that will traverse an Android
   app, interacting with it and capturing screenshots at the same time.
   
   
 *  APPIUM_JAVA_JUNIT: The Appium Java JUnit type.
   
   
 *  APPIUM_JAVA_TESTNG: The Appium Java TestNG type.
   
   
 *  APPIUM_PYTHON: The Appium Python type.
   
   
 *  APPIUM_WEB_JAVA_JUNIT: The Appium Java JUnit type for Web apps.
   
   
 *  APPIUM_WEB_JAVA_TESTNG: The Appium Java TestNG type for Web apps.
   
   
 *  APPIUM_WEB_PYTHON: The Appium Python type for Web apps.
   
   
 *  CALABASH: The Calabash type.
   
   
 *  INSTRUMENTATION: The Instrumentation type.
   
   
 *  UIAUTOMATION: The uiautomation type.
   
   
 *  UIAUTOMATOR: The uiautomator type.
   
   
 *  XCTEST: The XCode test type.
   
   
 *  XCTEST_UI: The XCode UI test type. **/
        type?: TestType;
        /** When the suite was created. **/
        created?: DateTime;
        /** The suite&#x27;s status.

Allowed values include:

 &amp;#42;  PENDING: A pending status.
   
   
 *  PENDING_CONCURRENCY: A pending concurrency status.
   
   
 *  PENDING_DEVICE: A pending device status.
   
   
 *  PROCESSING: A processing status.
   
   
 *  SCHEDULING: A scheduling status.
   
   
 *  PREPARING: A preparing status.
   
   
 *  RUNNING: A running status.
   
   
 *  COMPLETED: A completed status.
   
   
 *  STOPPING: A stopping status. **/
        status?: ExecutionStatus;
        /** The suite&#x27;s result.

Allowed values include:

 &amp;#42;  PENDING: A pending condition.
   
   
 *  PASSED: A passing condition.
   
   
 *  WARNED: A warning condition.
   
   
 *  FAILED: A failed condition.
   
   
 *  SKIPPED: A skipped condition.
   
   
 *  ERRORED: An error condition.
   
   
 *  STOPPED: A stopped condition. **/
        result?: ExecutionResult;
        /** The suite&#x27;s start time. **/
        started?: DateTime;
        /** The suite&#x27;s stop time. **/
        stopped?: DateTime;
        /** The suite&#x27;s result counters. **/
        counters?: Counters;
        /** A message about the suite&#x27;s result. **/
        message?: Message;
        /** Represents the total (metered or unmetered) minutes used by the test suite. **/
        deviceMinutes?: DeviceMinutes;
    }
    export interface Test {
        /** The test&#x27;s ARN. **/
        arn?: AmazonResourceName;
        /** The test&#x27;s name. **/
        name?: Name;
        /** The test&#x27;s type.

Must be one of the following values:

 &amp;#42;  BUILTIN_FUZZ: The built-in fuzz type.
   
   
 *  BUILTIN_EXPLORER: For Android, an app explorer that will traverse an Android
   app, interacting with it and capturing screenshots at the same time.
   
   
 *  APPIUM_JAVA_JUNIT: The Appium Java JUnit type.
   
   
 *  APPIUM_JAVA_TESTNG: The Appium Java TestNG type.
   
   
 *  APPIUM_PYTHON: The Appium Python type.
   
   
 *  APPIUM_WEB_JAVA_JUNIT: The Appium Java JUnit type for Web apps.
   
   
 *  APPIUM_WEB_JAVA_TESTNG: The Appium Java TestNG type for Web apps.
   
   
 *  APPIUM_WEB_PYTHON: The Appium Python type for Web apps.
   
   
 *  CALABASH: The Calabash type.
   
   
 *  INSTRUMENTATION: The Instrumentation type.
   
   
 *  UIAUTOMATION: The uiautomation type.
   
   
 *  UIAUTOMATOR: The uiautomator type.
   
   
 *  XCTEST: The XCode test type.
   
   
 *  XCTEST_UI: The XCode UI test type. **/
        type?: TestType;
        /** When the test was created. **/
        created?: DateTime;
        /** The test&#x27;s status.

Allowed values include:

 &amp;#42;  PENDING: A pending status.
   
   
 *  PENDING_CONCURRENCY: A pending concurrency status.
   
   
 *  PENDING_DEVICE: A pending device status.
   
   
 *  PROCESSING: A processing status.
   
   
 *  SCHEDULING: A scheduling status.
   
   
 *  PREPARING: A preparing status.
   
   
 *  RUNNING: A running status.
   
   
 *  COMPLETED: A completed status.
   
   
 *  STOPPING: A stopping status. **/
        status?: ExecutionStatus;
        /** The test&#x27;s result.

Allowed values include:

 &amp;#42;  PENDING: A pending condition.
   
   
 *  PASSED: A passing condition.
   
   
 *  WARNED: A warning condition.
   
   
 *  FAILED: A failed condition.
   
   
 *  SKIPPED: A skipped condition.
   
   
 *  ERRORED: An error condition.
   
   
 *  STOPPED: A stopped condition. **/
        result?: ExecutionResult;
        /** The test&#x27;s start time. **/
        started?: DateTime;
        /** The test&#x27;s stop time. **/
        stopped?: DateTime;
        /** The test&#x27;s result counters. **/
        counters?: Counters;
        /** A message about the test&#x27;s result. **/
        message?: Message;
        /** Represents the total (metered or unmetered) minutes used by the test. **/
        deviceMinutes?: DeviceMinutes;
    }
    export interface UniqueProblem {
        /** A message about the unique problems&#x27; result. **/
        message?: Message;
        /** Information about the problems. **/
        problems?: Problems;
    }
    export interface UpdateDevicePoolRequest {
        /** The Amazon Resourc Name (ARN) of the Device Farm device pool you wish to update. **/
        arn: AmazonResourceName;
        /** A string representing the name of the device pool you wish to update. **/
        name?: Name;
        /** A description of the device pool you wish to update. **/
        description?: Message;
        /** Represents the rules you wish to modify for the device pool. Updating rules is
optional; however, if you choose to update rules for your request, the update
will replace the existing rules. **/
        rules?: Rules;
    }
    export interface UpdateDevicePoolResult {
        devicePool?: DevicePool;
    }
    export interface UpdateProjectRequest {
        /** The Amazon Resource Name (ARN) of the project whose name you wish to update. **/
        arn: AmazonResourceName;
        /** A string representing the new name of the project that you are updating. **/
        name?: Name;
    }
    export interface UpdateProjectResult {
        project?: Project;
    }
    export interface Upload {
        /** The upload&#x27;s ARN. **/
        arn?: AmazonResourceName;
        /** The upload&#x27;s file name. **/
        name?: Name;
        /** When the upload was created. **/
        created?: DateTime;
        /** The upload&#x27;s type.

Must be one of the following values:

 &amp;#42;  ANDROID_APP: An Android upload.
   
   
 *  IOS_APP: An iOS upload.
   
   
 *  WEB_APP: A web appliction upload.
   
   
 *  EXTERNAL_DATA: An external data upload.
   
   
 *  APPIUM_JAVA_JUNIT_TEST_PACKAGE: An Appium Java JUnit test package upload.
   
   
 *  APPIUM_JAVA_TESTNG_TEST_PACKAGE: An Appium Java TestNG test package upload.
   
   
 *  APPIUM_PYTHON_TEST_PACKAGE: An Appium Python test package upload.
   
   
 *  APPIUM_WEB_JAVA_JUNIT_TEST_PACKAGE: An Appium Java JUnit test package
   upload.
   
   
 *  APPIUM_WEB_JAVA_TESTNG_TEST_PACKAGE: An Appium Java TestNG test package
   upload.
   
   
 *  APPIUM_WEB_PYTHON_TEST_PACKAGE: An Appium Python test package upload.
   
   
 *  CALABASH_TEST_PACKAGE: A Calabash test package upload.
   
   
 *  INSTRUMENTATION_TEST_PACKAGE: An instrumentation upload.
   
   
 *  UIAUTOMATION_TEST_PACKAGE: A uiautomation test package upload.
   
   
 *  UIAUTOMATOR_TEST_PACKAGE: A uiautomator test package upload.
   
   
 *  XCTEST_TEST_PACKAGE: An XCode test package upload.
   
   
 *  XCTEST_UI_TEST_PACKAGE: An XCode UI test package upload. **/
        type?: UploadType;
        /** The upload&#x27;s status.

Must be one of the following values:

 &amp;#42;  FAILED: A failed status.
   
   
 *  INITIALIZED: An initialized status.
   
   
 *  PROCESSING: A processing status.
   
   
 *  SUCCEEDED: A succeeded status. **/
        status?: UploadStatus;
        /** The pre-signed Amazon S3 URL that was used to store a file through a
corresponding PUT request. **/
        url?: URL;
        /** The upload&#x27;s metadata. For example, for Android, this contains information that
is parsed from the manifest and is displayed in the AWS Device Farm console
after the associated app is uploaded. **/
        metadata?: Metadata;
        /** The upload&#x27;s content type (for example, &quot;application/octet-stream&quot;). **/
        contentType?: ContentType;
        /** A message about the upload&#x27;s result. **/
        message?: Message;
    }
  }
}
