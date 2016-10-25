// Type definitions for aws-sdk - AWS Server Migration Service
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

// COMMENTED <reference path="./aws-sdk.d.ts" />

declare module "aws-sdk" {

 /**
   * apiVersion: 2016-10-24
   * endpointPrefix: sms
   * serviceAbbreviation: SMS
   * signatureVersion: v4
   * protocol: json
   *
   * Amazon Server Migration Service automates the process of migrating servers to
EC2.
   *
   */
  export class SMS extends Service {
    constructor(options?: any);
    endpoint: Endpoint;
    /**
     * The CreateReplicationJob API is used to create a ReplicationJob to replicate a
server on AWS. Call this API to first create a ReplicationJob, which will then
schedule periodic ReplicationRuns to replicate your server to AWS. Each
ReplicationRun will result in the creation of an AWS AMI.
     *
     * @error InvalidParameterException   
     * @error MissingRequiredParameterException   
     * @error UnauthorizedOperationException   
     * @error OperationNotPermittedException   
     * @error ServerCannotBeReplicatedException   
     * @error ReplicationJobAlreadyExistsException   
     * @error NoConnectorsAvailableException   
     * @error InternalError   
     */
    createReplicationJob(params: SMS.CreateReplicationJobRequest, callback?: (err: SMS.InvalidParameterException|SMS.MissingRequiredParameterException|SMS.UnauthorizedOperationException|SMS.OperationNotPermittedException|SMS.ServerCannotBeReplicatedException|SMS.ReplicationJobAlreadyExistsException|SMS.NoConnectorsAvailableException|SMS.InternalError|any, data: SMS.CreateReplicationJobResponse|any) => void): Request<SMS.CreateReplicationJobResponse|any,SMS.InvalidParameterException|SMS.MissingRequiredParameterException|SMS.UnauthorizedOperationException|SMS.OperationNotPermittedException|SMS.ServerCannotBeReplicatedException|SMS.ReplicationJobAlreadyExistsException|SMS.NoConnectorsAvailableException|SMS.InternalError|any>;
    /**
     * The DeleteReplicationJob API is used to delete a ReplicationJob, resulting in no
further ReplicationRuns. This will delete the contents of the S3 bucket used to
store SMS artifacts, but will not delete any AMIs created by the SMS service.
     *
     * @error InvalidParameterException   
     * @error MissingRequiredParameterException   
     * @error UnauthorizedOperationException   
     * @error OperationNotPermittedException   
     * @error ReplicationJobNotFoundException   
     */
    deleteReplicationJob(params: SMS.DeleteReplicationJobRequest, callback?: (err: SMS.InvalidParameterException|SMS.MissingRequiredParameterException|SMS.UnauthorizedOperationException|SMS.OperationNotPermittedException|SMS.ReplicationJobNotFoundException|any, data: SMS.DeleteReplicationJobResponse|any) => void): Request<SMS.DeleteReplicationJobResponse|any,SMS.InvalidParameterException|SMS.MissingRequiredParameterException|SMS.UnauthorizedOperationException|SMS.OperationNotPermittedException|SMS.ReplicationJobNotFoundException|any>;
    /**
     * The DeleteServerCatalog API clears all servers from your server catalog. This
means that these servers will no longer be accessible to the Server Migration
Service.
     *
     * @error UnauthorizedOperationException   
     * @error OperationNotPermittedException   
     * @error InvalidParameterException   
     * @error MissingRequiredParameterException   
     */
    deleteServerCatalog(params: SMS.DeleteServerCatalogRequest, callback?: (err: SMS.UnauthorizedOperationException|SMS.OperationNotPermittedException|SMS.InvalidParameterException|SMS.MissingRequiredParameterException|any, data: SMS.DeleteServerCatalogResponse|any) => void): Request<SMS.DeleteServerCatalogResponse|any,SMS.UnauthorizedOperationException|SMS.OperationNotPermittedException|SMS.InvalidParameterException|SMS.MissingRequiredParameterException|any>;
    /**
     * The DisassociateConnector API will disassociate a connector from the Server
Migration Service, rendering it unavailable to support replication jobs.
     *
     * @error MissingRequiredParameterException   
     * @error UnauthorizedOperationException   
     * @error OperationNotPermittedException   
     * @error InvalidParameterException   
     */
    disassociateConnector(params: SMS.DisassociateConnectorRequest, callback?: (err: SMS.MissingRequiredParameterException|SMS.UnauthorizedOperationException|SMS.OperationNotPermittedException|SMS.InvalidParameterException|any, data: SMS.DisassociateConnectorResponse|any) => void): Request<SMS.DisassociateConnectorResponse|any,SMS.MissingRequiredParameterException|SMS.UnauthorizedOperationException|SMS.OperationNotPermittedException|SMS.InvalidParameterException|any>;
    /**
     * The GetConnectors API returns a list of connectors that are registered with the
Server Migration Service.
     *
     * @error UnauthorizedOperationException   
     */
    getConnectors(params: SMS.GetConnectorsRequest, callback?: (err: SMS.UnauthorizedOperationException|any, data: SMS.GetConnectorsResponse|any) => void): Request<SMS.GetConnectorsResponse|any,SMS.UnauthorizedOperationException|any>;
    /**
     * The GetReplicationJobs API will return all of your ReplicationJobs and their
details. This API returns a paginated list, that may be consecutively called
with nextToken to retrieve all ReplicationJobs.
     *
     * @error InvalidParameterException   
     * @error MissingRequiredParameterException   
     * @error UnauthorizedOperationException   
     */
    getReplicationJobs(params: SMS.GetReplicationJobsRequest, callback?: (err: SMS.InvalidParameterException|SMS.MissingRequiredParameterException|SMS.UnauthorizedOperationException|any, data: SMS.GetReplicationJobsResponse|any) => void): Request<SMS.GetReplicationJobsResponse|any,SMS.InvalidParameterException|SMS.MissingRequiredParameterException|SMS.UnauthorizedOperationException|any>;
    /**
     * The GetReplicationRuns API will return all ReplicationRuns for a given
ReplicationJob. This API returns a paginated list, that may be consecutively
called with nextToken to retrieve all ReplicationRuns for a ReplicationJob.
     *
     * @error InvalidParameterException   
     * @error MissingRequiredParameterException   
     * @error UnauthorizedOperationException   
     */
    getReplicationRuns(params: SMS.GetReplicationRunsRequest, callback?: (err: SMS.InvalidParameterException|SMS.MissingRequiredParameterException|SMS.UnauthorizedOperationException|any, data: SMS.GetReplicationRunsResponse|any) => void): Request<SMS.GetReplicationRunsResponse|any,SMS.InvalidParameterException|SMS.MissingRequiredParameterException|SMS.UnauthorizedOperationException|any>;
    /**
     * The GetServers API returns a list of all servers in your server catalog. For
this call to succeed, you must previously have called ImportServerCatalog.
     *
     * @error UnauthorizedOperationException   
     */
    getServers(params: SMS.GetServersRequest, callback?: (err: SMS.UnauthorizedOperationException|any, data: SMS.GetServersResponse|any) => void): Request<SMS.GetServersResponse|any,SMS.UnauthorizedOperationException|any>;
    /**
     * The ImportServerCatalog API is used to gather the complete list of on-premises
servers on your premises. This API call requires connectors to be installed and
monitoring all servers you would like imported. This API call returns
immediately, but may take some time to retrieve all of the servers.
     *
     * @error UnauthorizedOperationException   
     * @error OperationNotPermittedException   
     * @error InvalidParameterException   
     * @error MissingRequiredParameterException   
     * @error NoConnectorsAvailableException   
     */
    importServerCatalog(params: SMS.ImportServerCatalogRequest, callback?: (err: SMS.UnauthorizedOperationException|SMS.OperationNotPermittedException|SMS.InvalidParameterException|SMS.MissingRequiredParameterException|SMS.NoConnectorsAvailableException|any, data: SMS.ImportServerCatalogResponse|any) => void): Request<SMS.ImportServerCatalogResponse|any,SMS.UnauthorizedOperationException|SMS.OperationNotPermittedException|SMS.InvalidParameterException|SMS.MissingRequiredParameterException|SMS.NoConnectorsAvailableException|any>;
    /**
     * The StartOnDemandReplicationRun API is used to start a ReplicationRun on demand
(in addition to those that are scheduled based on your frequency). This
ReplicationRun will start immediately. StartOnDemandReplicationRun is subject to
limits on how many on demand ReplicationRuns you may call per 24-hour period.
     *
     * @error InvalidParameterException   
     * @error MissingRequiredParameterException   
     * @error UnauthorizedOperationException   
     * @error OperationNotPermittedException   
     * @error ReplicationRunLimitExceededException   
     */
    startOnDemandReplicationRun(params: SMS.StartOnDemandReplicationRunRequest, callback?: (err: SMS.InvalidParameterException|SMS.MissingRequiredParameterException|SMS.UnauthorizedOperationException|SMS.OperationNotPermittedException|SMS.ReplicationRunLimitExceededException|any, data: SMS.StartOnDemandReplicationRunResponse|any) => void): Request<SMS.StartOnDemandReplicationRunResponse|any,SMS.InvalidParameterException|SMS.MissingRequiredParameterException|SMS.UnauthorizedOperationException|SMS.OperationNotPermittedException|SMS.ReplicationRunLimitExceededException|any>;
    /**
     * The UpdateReplicationJob API is used to change the settings of your existing
ReplicationJob created using CreateReplicationJob. Calling this API will affect
the next scheduled ReplicationRun.
     *
     * @error InvalidParameterException   
     * @error MissingRequiredParameterException   
     * @error OperationNotPermittedException   
     * @error UnauthorizedOperationException   
     * @error ServerCannotBeReplicatedException   
     * @error ReplicationJobNotFoundException   
     * @error InternalError   
     */
    updateReplicationJob(params: SMS.UpdateReplicationJobRequest, callback?: (err: SMS.InvalidParameterException|SMS.MissingRequiredParameterException|SMS.OperationNotPermittedException|SMS.UnauthorizedOperationException|SMS.ServerCannotBeReplicatedException|SMS.ReplicationJobNotFoundException|SMS.InternalError|any, data: SMS.UpdateReplicationJobResponse|any) => void): Request<SMS.UpdateReplicationJobResponse|any,SMS.InvalidParameterException|SMS.MissingRequiredParameterException|SMS.OperationNotPermittedException|SMS.UnauthorizedOperationException|SMS.ServerCannotBeReplicatedException|SMS.ReplicationJobNotFoundException|SMS.InternalError|any>;

  }

  export module SMS {
    
    export type AmiId = string;
    
    export type ConnectorCapability = string;
    
    export type ConnectorCapabilityList = ConnectorCapability[];
    
    export type ConnectorId = string;
    
    export type ConnectorList = Connector[];
    
    export type ConnectorStatus = string;
    
    export type ConnectorVersion = string;
    
    export type Description = string;
    
    export type ErrorMessage = string;
    
    export type Frequency = number;
    
    export type IpAddress = string;
    
    export type LicenseType = string;
    
    export type MacAddress = string;
    
    export type MaxResults = number;
    
    export type NextToken = string;
    
    export type ReplicationJobId = string;
    
    export type ReplicationJobList = ReplicationJob[];
    
    export type ReplicationJobState = string;
    
    export type ReplicationJobStatusMessage = string;
    
    export type ReplicationJobTerminated = boolean;
    
    export type ReplicationRunId = string;
    
    export type ReplicationRunList = ReplicationRun[];
    
    export type ReplicationRunState = string;
    
    export type ReplicationRunStatusMessage = string;
    
    export type ReplicationRunType = string;
    
    export type RoleName = string;
    
    export type ServerCatalogStatus = string;
    
    export type ServerId = string;
    
    export type ServerList = Server[];
    
    export type ServerType = string;
    
    export type Timestamp = number;
    
    export type VmId = string;
    
    export type VmManagerId = string;
    
    export type VmManagerName = string;
    
    export type VmManagerType = string;
    
    export type VmName = string;
    
    export type VmPath = string;

    export interface Connector {
        connectorId?: ConnectorId;
        version?: ConnectorVersion;
        status?: ConnectorStatus;
        capabilityList?: ConnectorCapabilityList;
        vmManagerName?: VmManagerName;
        vmManagerType?: VmManagerType;
        vmManagerId?: VmManagerId;
        ipAddress?: IpAddress;
        macAddress?: MacAddress;
        associatedOn?: Timestamp;
    }
    export interface CreateReplicationJobRequest {
        serverId: ServerId;
        seedReplicationTime: Timestamp;
        frequency: Frequency;
        licenseType?: LicenseType;
        roleName?: RoleName;
        description?: Description;
    }
    export interface CreateReplicationJobResponse {
        replicationJobId?: ReplicationJobId;
    }
    export interface DeleteReplicationJobRequest {
        replicationJobId: ReplicationJobId;
    }
    export interface DeleteReplicationJobResponse {
    }
    export interface DeleteServerCatalogRequest {
    }
    export interface DeleteServerCatalogResponse {
    }
    export interface DisassociateConnectorRequest {
        connectorId: ConnectorId;
    }
    export interface DisassociateConnectorResponse {
    }
    export interface GetConnectorsRequest {
        nextToken?: NextToken;
        maxResults?: MaxResults;
    }
    export interface GetConnectorsResponse {
        connectorList?: ConnectorList;
        nextToken?: NextToken;
    }
    export interface GetReplicationJobsRequest {
        replicationJobId?: ReplicationJobId;
        nextToken?: NextToken;
        maxResults?: MaxResults;
    }
    export interface GetReplicationJobsResponse {
        replicationJobList?: ReplicationJobList;
        nextToken?: NextToken;
    }
    export interface GetReplicationRunsRequest {
        replicationJobId: ReplicationJobId;
        nextToken?: NextToken;
        maxResults?: MaxResults;
    }
    export interface GetReplicationRunsResponse {
        replicationJob?: ReplicationJob;
        replicationRunList?: ReplicationRunList;
        nextToken?: NextToken;
    }
    export interface GetServersRequest {
        nextToken?: NextToken;
        maxResults?: MaxResults;
    }
    export interface GetServersResponse {
        lastModifiedOn?: Timestamp;
        serverCatalogStatus?: ServerCatalogStatus;
        serverList?: ServerList;
        nextToken?: NextToken;
    }
    export interface ImportServerCatalogRequest {
    }
    export interface ImportServerCatalogResponse {
    }
    export interface InternalError {
        message?: ErrorMessage;
    }
    export interface InvalidParameterException {
        message?: ErrorMessage;
    }
    export interface MissingRequiredParameterException {
        message?: ErrorMessage;
    }
    export interface NoConnectorsAvailableException {
        message?: ErrorMessage;
    }
    export interface OperationNotPermittedException {
        message?: ErrorMessage;
    }
    export interface ReplicationJob {
        replicationJobId?: ReplicationJobId;
        serverId?: ServerId;
        serverType?: ServerType;
        vmServer?: VmServer;
        seedReplicationTime?: Timestamp;
        frequency?: Frequency;
        nextReplicationRunStartTime?: Timestamp;
        licenseType?: LicenseType;
        roleName?: RoleName;
        latestAmiId?: AmiId;
        state?: ReplicationJobState;
        statusMessage?: ReplicationJobStatusMessage;
        description?: Description;
        replicationRunList?: ReplicationRunList;
    }
    export interface ReplicationJobAlreadyExistsException {
        message?: ErrorMessage;
    }
    export interface ReplicationJobNotFoundException {
        message?: ErrorMessage;
    }
    export interface ReplicationRun {
        replicationRunId?: ReplicationRunId;
        state?: ReplicationRunState;
        type?: ReplicationRunType;
        statusMessage?: ReplicationRunStatusMessage;
        amiId?: AmiId;
        scheduledStartTime?: Timestamp;
        completedTime?: Timestamp;
        description?: Description;
    }
    export interface ReplicationRunLimitExceededException {
        message?: ErrorMessage;
    }
    export interface Server {
        serverId?: ServerId;
        serverType?: ServerType;
        vmServer?: VmServer;
        replicationJobId?: ReplicationJobId;
        replicationJobTerminated?: ReplicationJobTerminated;
    }
    export interface ServerCannotBeReplicatedException {
        message?: ErrorMessage;
    }
    export interface StartOnDemandReplicationRunRequest {
        replicationJobId: ReplicationJobId;
        description?: Description;
    }
    export interface StartOnDemandReplicationRunResponse {
        replicationRunId?: ReplicationRunId;
    }
    export interface UnauthorizedOperationException {
        message?: ErrorMessage;
    }
    export interface UpdateReplicationJobRequest {
        replicationJobId: ReplicationJobId;
        frequency?: Frequency;
        nextReplicationRunStartTime?: Timestamp;
        licenseType?: LicenseType;
        roleName?: RoleName;
        description?: Description;
    }
    export interface UpdateReplicationJobResponse {
    }
    export interface VmServer {
        vmServerAddress?: VmServerAddress;
        vmName?: VmName;
        vmManagerName?: VmManagerName;
        vmManagerType?: VmManagerType;
        vmPath?: VmPath;
    }
    export interface VmServerAddress {
        vmManagerId?: VmManagerId;
        vmId?: VmId;
    }
  }
}
