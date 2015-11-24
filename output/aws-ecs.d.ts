// DO NOT EDIT!
//

///<reference path="./aws-sdk-common.d.ts" />
declare module "aws-sdk" {
    export class ECS {
      constructor(options?: any);
      createCluster(params: ECSCreateClusterRequest, callback: (err: ECSServerException|ECSClientException|ECSInvalidParameterException|any, data: ECSCreateClusterResponse|any) => void): void;
      createService(params: ECSCreateServiceRequest, callback: (err: ECSServerException|ECSClientException|ECSInvalidParameterException|ECSClusterNotFoundException|any, data: ECSCreateServiceResponse|any) => void): void;
      deleteCluster(params: ECSDeleteClusterRequest, callback: (err: ECSServerException|ECSClientException|ECSInvalidParameterException|ECSClusterNotFoundException|ECSClusterContainsContainerInstancesException|ECSClusterContainsServicesException|any, data: ECSDeleteClusterResponse|any) => void): void;
      deleteService(params: ECSDeleteServiceRequest, callback: (err: ECSServerException|ECSClientException|ECSInvalidParameterException|ECSClusterNotFoundException|ECSServiceNotFoundException|any, data: ECSDeleteServiceResponse|any) => void): void;
      deregisterContainerInstance(params: ECSDeregisterContainerInstanceRequest, callback: (err: ECSServerException|ECSClientException|ECSInvalidParameterException|ECSClusterNotFoundException|any, data: ECSDeregisterContainerInstanceResponse|any) => void): void;
      deregisterTaskDefinition(params: ECSDeregisterTaskDefinitionRequest, callback: (err: ECSServerException|ECSClientException|ECSInvalidParameterException|any, data: ECSDeregisterTaskDefinitionResponse|any) => void): void;
      describeClusters(params: ECSDescribeClustersRequest, callback: (err: ECSServerException|ECSClientException|ECSInvalidParameterException|any, data: ECSDescribeClustersResponse|any) => void): void;
      describeContainerInstances(params: ECSDescribeContainerInstancesRequest, callback: (err: ECSServerException|ECSClientException|ECSInvalidParameterException|ECSClusterNotFoundException|any, data: ECSDescribeContainerInstancesResponse|any) => void): void;
      describeServices(params: ECSDescribeServicesRequest, callback: (err: ECSServerException|ECSClientException|ECSInvalidParameterException|ECSClusterNotFoundException|any, data: ECSDescribeServicesResponse|any) => void): void;
      describeTaskDefinition(params: ECSDescribeTaskDefinitionRequest, callback: (err: ECSServerException|ECSClientException|ECSInvalidParameterException|any, data: ECSDescribeTaskDefinitionResponse|any) => void): void;
      describeTasks(params: ECSDescribeTasksRequest, callback: (err: ECSServerException|ECSClientException|ECSInvalidParameterException|ECSClusterNotFoundException|any, data: ECSDescribeTasksResponse|any) => void): void;
      discoverPollEndpoint(params: ECSDiscoverPollEndpointRequest, callback: (err: ECSServerException|ECSClientException|any, data: ECSDiscoverPollEndpointResponse|any) => void): void;
      listClusters(params: ECSListClustersRequest, callback: (err: ECSServerException|ECSClientException|ECSInvalidParameterException|any, data: ECSListClustersResponse|any) => void): void;
      listContainerInstances(params: ECSListContainerInstancesRequest, callback: (err: ECSServerException|ECSClientException|ECSInvalidParameterException|ECSClusterNotFoundException|any, data: ECSListContainerInstancesResponse|any) => void): void;
      listServices(params: ECSListServicesRequest, callback: (err: ECSServerException|ECSClientException|ECSInvalidParameterException|ECSClusterNotFoundException|any, data: ECSListServicesResponse|any) => void): void;
      listTaskDefinitionFamilies(params: ECSListTaskDefinitionFamiliesRequest, callback: (err: ECSServerException|ECSClientException|ECSInvalidParameterException|any, data: ECSListTaskDefinitionFamiliesResponse|any) => void): void;
      listTaskDefinitions(params: ECSListTaskDefinitionsRequest, callback: (err: ECSServerException|ECSClientException|ECSInvalidParameterException|any, data: ECSListTaskDefinitionsResponse|any) => void): void;
      listTasks(params: ECSListTasksRequest, callback: (err: ECSServerException|ECSClientException|ECSInvalidParameterException|ECSClusterNotFoundException|ECSServiceNotFoundException|any, data: ECSListTasksResponse|any) => void): void;
      registerContainerInstance(params: ECSRegisterContainerInstanceRequest, callback: (err: ECSServerException|ECSClientException|any, data: ECSRegisterContainerInstanceResponse|any) => void): void;
      registerTaskDefinition(params: ECSRegisterTaskDefinitionRequest, callback: (err: ECSServerException|ECSClientException|ECSInvalidParameterException|any, data: ECSRegisterTaskDefinitionResponse|any) => void): void;
      runTask(params: ECSRunTaskRequest, callback: (err: ECSServerException|ECSClientException|ECSInvalidParameterException|ECSClusterNotFoundException|any, data: ECSRunTaskResponse|any) => void): void;
      startTask(params: ECSStartTaskRequest, callback: (err: ECSServerException|ECSClientException|ECSInvalidParameterException|ECSClusterNotFoundException|any, data: ECSStartTaskResponse|any) => void): void;
      stopTask(params: ECSStopTaskRequest, callback: (err: ECSServerException|ECSClientException|ECSInvalidParameterException|ECSClusterNotFoundException|any, data: ECSStopTaskResponse|any) => void): void;
      submitContainerStateChange(params: ECSSubmitContainerStateChangeRequest, callback: (err: ECSServerException|ECSClientException|any, data: ECSSubmitContainerStateChangeResponse|any) => void): void;
      submitTaskStateChange(params: ECSSubmitTaskStateChangeRequest, callback: (err: ECSServerException|ECSClientException|any, data: ECSSubmitTaskStateChangeResponse|any) => void): void;
      updateContainerAgent(params: ECSUpdateContainerAgentRequest, callback: (err: ECSServerException|ECSClientException|ECSInvalidParameterException|ECSClusterNotFoundException|ECSUpdateInProgressException|ECSNoUpdateAvailableException|ECSMissingVersionException|any, data: ECSUpdateContainerAgentResponse|any) => void): void;
      updateService(params: ECSUpdateServiceRequest, callback: (err: ECSServerException|ECSClientException|ECSInvalidParameterException|ECSClusterNotFoundException|ECSServiceNotFoundException|ECSServiceNotActiveException|any, data: ECSUpdateServiceResponse|any) => void): void;
    }

    export type ECSAgentUpdateStatus = string;
    export interface ECSAttribute {
        name: ECSString;
        value?: ECSString;
    }

    export type ECSAttributes = Array<ECSAttribute>;
    export type ECSBoolean = boolean;
    export type ECSBoxedBoolean = boolean;
    export type ECSBoxedInteger = number;
    export interface ECSClientException {
        message?: ECSString;
    }

    export interface ECSCluster {
        clusterArn?: ECSString;
        clusterName?: ECSString;
        status?: ECSString;
        registeredContainerInstancesCount?: ECSInteger;
        runningTasksCount?: ECSInteger;
        pendingTasksCount?: ECSInteger;
        activeServicesCount?: ECSInteger;
    }

    export interface ECSClusterContainsContainerInstancesException {
    }

    export interface ECSClusterContainsServicesException {
    }

    export interface ECSClusterNotFoundException {
    }

    export type ECSClusters = Array<ECSCluster>;
    export interface ECSContainer {
        containerArn?: ECSString;
        taskArn?: ECSString;
        name?: ECSString;
        lastStatus?: ECSString;
        exitCode?: ECSBoxedInteger;
        reason?: ECSString;
        networkBindings?: ECSNetworkBindings;
    }

    export interface ECSContainerDefinition {
        name?: ECSString;
        image?: ECSString;
        cpu?: ECSInteger;
        memory?: ECSInteger;
        links?: ECSStringList;
        portMappings?: ECSPortMappingList;
        essential?: ECSBoxedBoolean;
        entryPoint?: ECSStringList;
        command?: ECSStringList;
        environment?: ECSEnvironmentVariables;
        mountPoints?: ECSMountPointList;
        volumesFrom?: ECSVolumeFromList;
        hostname?: ECSString;
        user?: ECSString;
        workingDirectory?: ECSString;
        disableNetworking?: ECSBoxedBoolean;
        privileged?: ECSBoxedBoolean;
        readonlyRootFilesystem?: ECSBoxedBoolean;
        dnsServers?: ECSStringList;
        dnsSearchDomains?: ECSStringList;
        extraHosts?: ECSHostEntryList;
        dockerSecurityOptions?: ECSStringList;
        dockerLabels?: ECSDockerLabelsMap;
        ulimits?: ECSUlimitList;
        logConfiguration?: ECSLogConfiguration;
    }

    export type ECSContainerDefinitions = Array<ECSContainerDefinition>;
    export interface ECSContainerInstance {
        containerInstanceArn?: ECSString;
        ec2InstanceId?: ECSString;
        versionInfo?: ECSVersionInfo;
        remainingResources?: ECSResources;
        registeredResources?: ECSResources;
        status?: ECSString;
        agentConnected?: ECSBoolean;
        runningTasksCount?: ECSInteger;
        pendingTasksCount?: ECSInteger;
        agentUpdateStatus?: ECSAgentUpdateStatus;
        attributes?: ECSAttributes;
    }

    export type ECSContainerInstances = Array<ECSContainerInstance>;
    export interface ECSContainerOverride {
        name?: ECSString;
        command?: ECSStringList;
        environment?: ECSEnvironmentVariables;
    }

    export type ECSContainerOverrides = Array<ECSContainerOverride>;
    export type ECSContainers = Array<ECSContainer>;
    export interface ECSCreateClusterRequest {
        clusterName?: ECSString;
    }

    export interface ECSCreateClusterResponse {
        cluster?: ECSCluster;
    }

    export interface ECSCreateServiceRequest {
        cluster?: ECSString;
        serviceName: ECSString;
        taskDefinition: ECSString;
        loadBalancers?: ECSLoadBalancers;
        desiredCount: ECSBoxedInteger;
        clientToken?: ECSString;
        role?: ECSString;
    }

    export interface ECSCreateServiceResponse {
        service?: ECSService;
    }

    export interface ECSDeleteClusterRequest {
        cluster: ECSString;
    }

    export interface ECSDeleteClusterResponse {
        cluster?: ECSCluster;
    }

    export interface ECSDeleteServiceRequest {
        cluster?: ECSString;
        service: ECSString;
    }

    export interface ECSDeleteServiceResponse {
        service?: ECSService;
    }

    export interface ECSDeployment {
        id?: ECSString;
        status?: ECSString;
        taskDefinition?: ECSString;
        desiredCount?: ECSInteger;
        pendingCount?: ECSInteger;
        runningCount?: ECSInteger;
        createdAt?: ECSTimestamp;
        updatedAt?: ECSTimestamp;
    }

    export type ECSDeployments = Array<ECSDeployment>;
    export interface ECSDeregisterContainerInstanceRequest {
        cluster?: ECSString;
        containerInstance: ECSString;
        force?: ECSBoxedBoolean;
    }

    export interface ECSDeregisterContainerInstanceResponse {
        containerInstance?: ECSContainerInstance;
    }

    export interface ECSDeregisterTaskDefinitionRequest {
        taskDefinition: ECSString;
    }

    export interface ECSDeregisterTaskDefinitionResponse {
        taskDefinition?: ECSTaskDefinition;
    }

    export interface ECSDescribeClustersRequest {
        clusters?: ECSStringList;
    }

    export interface ECSDescribeClustersResponse {
        clusters?: ECSClusters;
        failures?: ECSFailures;
    }

    export interface ECSDescribeContainerInstancesRequest {
        cluster?: ECSString;
        containerInstances: ECSStringList;
    }

    export interface ECSDescribeContainerInstancesResponse {
        containerInstances?: ECSContainerInstances;
        failures?: ECSFailures;
    }

    export interface ECSDescribeServicesRequest {
        cluster?: ECSString;
        services: ECSStringList;
    }

    export interface ECSDescribeServicesResponse {
        services?: ECSServices;
        failures?: ECSFailures;
    }

    export interface ECSDescribeTaskDefinitionRequest {
        taskDefinition: ECSString;
    }

    export interface ECSDescribeTaskDefinitionResponse {
        taskDefinition?: ECSTaskDefinition;
    }

    export interface ECSDescribeTasksRequest {
        cluster?: ECSString;
        tasks: ECSStringList;
    }

    export interface ECSDescribeTasksResponse {
        tasks?: ECSTasks;
        failures?: ECSFailures;
    }

    export type ECSDesiredStatus = string;
    export interface ECSDiscoverPollEndpointRequest {
        containerInstance?: ECSString;
        cluster?: ECSString;
    }

    export interface ECSDiscoverPollEndpointResponse {
        endpoint?: ECSString;
        telemetryEndpoint?: ECSString;
    }

    export type ECSDockerLabelsMap = any; // not really - it was 'map' instead - must fix this one
    export type ECSDouble = number;
    export type ECSEnvironmentVariables = Array<ECSKeyValuePair>;
    export interface ECSFailure {
        arn?: ECSString;
        reason?: ECSString;
    }

    export type ECSFailures = Array<ECSFailure>;
    export interface ECSHostEntry {
        hostname: ECSString;
        ipAddress: ECSString;
    }

    export type ECSHostEntryList = Array<ECSHostEntry>;
    export interface ECSHostVolumeProperties {
        sourcePath?: ECSString;
    }

    export type ECSInteger = number;
    export interface ECSInvalidParameterException {
    }

    export interface ECSKeyValuePair {
        name?: ECSString;
        value?: ECSString;
    }

    export interface ECSListClustersRequest {
        nextToken?: ECSString;
        maxResults?: ECSBoxedInteger;
    }

    export interface ECSListClustersResponse {
        clusterArns?: ECSStringList;
        nextToken?: ECSString;
    }

    export interface ECSListContainerInstancesRequest {
        cluster?: ECSString;
        nextToken?: ECSString;
        maxResults?: ECSBoxedInteger;
    }

    export interface ECSListContainerInstancesResponse {
        containerInstanceArns?: ECSStringList;
        nextToken?: ECSString;
    }

    export interface ECSListServicesRequest {
        cluster?: ECSString;
        nextToken?: ECSString;
        maxResults?: ECSBoxedInteger;
    }

    export interface ECSListServicesResponse {
        serviceArns?: ECSStringList;
        nextToken?: ECSString;
    }

    export interface ECSListTaskDefinitionFamiliesRequest {
        familyPrefix?: ECSString;
        nextToken?: ECSString;
        maxResults?: ECSBoxedInteger;
    }

    export interface ECSListTaskDefinitionFamiliesResponse {
        families?: ECSStringList;
        nextToken?: ECSString;
    }

    export interface ECSListTaskDefinitionsRequest {
        familyPrefix?: ECSString;
        status?: ECSTaskDefinitionStatus;
        sort?: ECSSortOrder;
        nextToken?: ECSString;
        maxResults?: ECSBoxedInteger;
    }

    export interface ECSListTaskDefinitionsResponse {
        taskDefinitionArns?: ECSStringList;
        nextToken?: ECSString;
    }

    export interface ECSListTasksRequest {
        cluster?: ECSString;
        containerInstance?: ECSString;
        family?: ECSString;
        nextToken?: ECSString;
        maxResults?: ECSBoxedInteger;
        startedBy?: ECSString;
        serviceName?: ECSString;
        desiredStatus?: ECSDesiredStatus;
    }

    export interface ECSListTasksResponse {
        taskArns?: ECSStringList;
        nextToken?: ECSString;
    }

    export interface ECSLoadBalancer {
        loadBalancerName?: ECSString;
        containerName?: ECSString;
        containerPort?: ECSBoxedInteger;
    }

    export type ECSLoadBalancers = Array<ECSLoadBalancer>;
    export interface ECSLogConfiguration {
        logDriver: ECSLogDriver;
        options?: ECSLogConfigurationOptionsMap;
    }

    export type ECSLogConfigurationOptionsMap = any; // not really - it was 'map' instead - must fix this one
    export type ECSLogDriver = string;
    export type ECSLong = number;
    export interface ECSMissingVersionException {
    }

    export interface ECSMountPoint {
        sourceVolume?: ECSString;
        containerPath?: ECSString;
        readOnly?: ECSBoxedBoolean;
    }

    export type ECSMountPointList = Array<ECSMountPoint>;
    export interface ECSNetworkBinding {
        bindIP?: ECSString;
        containerPort?: ECSBoxedInteger;
        hostPort?: ECSBoxedInteger;
        protocol?: ECSTransportProtocol;
    }

    export type ECSNetworkBindings = Array<ECSNetworkBinding>;
    export interface ECSNoUpdateAvailableException {
    }

    export interface ECSPortMapping {
        containerPort?: ECSInteger;
        hostPort?: ECSInteger;
        protocol?: ECSTransportProtocol;
    }

    export type ECSPortMappingList = Array<ECSPortMapping>;
    export interface ECSRegisterContainerInstanceRequest {
        cluster?: ECSString;
        instanceIdentityDocument?: ECSString;
        instanceIdentityDocumentSignature?: ECSString;
        totalResources?: ECSResources;
        versionInfo?: ECSVersionInfo;
        containerInstanceArn?: ECSString;
        attributes?: ECSAttributes;
    }

    export interface ECSRegisterContainerInstanceResponse {
        containerInstance?: ECSContainerInstance;
    }

    export interface ECSRegisterTaskDefinitionRequest {
        family: ECSString;
        containerDefinitions: ECSContainerDefinitions;
        volumes?: ECSVolumeList;
    }

    export interface ECSRegisterTaskDefinitionResponse {
        taskDefinition?: ECSTaskDefinition;
    }

    export type ECSRequiresAttributes = Array<ECSAttribute>;
    export interface ECSResource {
        name?: ECSString;
        type?: ECSString;
        doubleValue?: ECSDouble;
        longValue?: ECSLong;
        integerValue?: ECSInteger;
        stringSetValue?: ECSStringList;
    }

    export type ECSResources = Array<ECSResource>;
    export interface ECSRunTaskRequest {
        cluster?: ECSString;
        taskDefinition: ECSString;
        overrides?: ECSTaskOverride;
        count?: ECSBoxedInteger;
        startedBy?: ECSString;
    }

    export interface ECSRunTaskResponse {
        tasks?: ECSTasks;
        failures?: ECSFailures;
    }

    export interface ECSServerException {
        message?: ECSString;
    }

    export interface ECSService {
        serviceArn?: ECSString;
        serviceName?: ECSString;
        clusterArn?: ECSString;
        loadBalancers?: ECSLoadBalancers;
        status?: ECSString;
        desiredCount?: ECSInteger;
        runningCount?: ECSInteger;
        pendingCount?: ECSInteger;
        taskDefinition?: ECSString;
        deployments?: ECSDeployments;
        roleArn?: ECSString;
        events?: ECSServiceEvents;
    }

    export interface ECSServiceEvent {
        id?: ECSString;
        createdAt?: ECSTimestamp;
        message?: ECSString;
    }

    export type ECSServiceEvents = Array<ECSServiceEvent>;
    export interface ECSServiceNotActiveException {
    }

    export interface ECSServiceNotFoundException {
    }

    export type ECSServices = Array<ECSService>;
    export type ECSSortOrder = string;
    export interface ECSStartTaskRequest {
        cluster?: ECSString;
        taskDefinition: ECSString;
        overrides?: ECSTaskOverride;
        containerInstances: ECSStringList;
        startedBy?: ECSString;
    }

    export interface ECSStartTaskResponse {
        tasks?: ECSTasks;
        failures?: ECSFailures;
    }

    export interface ECSStopTaskRequest {
        cluster?: ECSString;
        task: ECSString;
    }

    export interface ECSStopTaskResponse {
        task?: ECSTask;
    }

    export type ECSString = string;
    export type ECSStringList = Array<ECSString>;
    export interface ECSSubmitContainerStateChangeRequest {
        cluster?: ECSString;
        task?: ECSString;
        containerName?: ECSString;
        status?: ECSString;
        exitCode?: ECSBoxedInteger;
        reason?: ECSString;
        networkBindings?: ECSNetworkBindings;
    }

    export interface ECSSubmitContainerStateChangeResponse {
        acknowledgment?: ECSString;
    }

    export interface ECSSubmitTaskStateChangeRequest {
        cluster?: ECSString;
        task?: ECSString;
        status?: ECSString;
        reason?: ECSString;
    }

    export interface ECSSubmitTaskStateChangeResponse {
        acknowledgment?: ECSString;
    }

    export interface ECSTask {
        taskArn?: ECSString;
        clusterArn?: ECSString;
        taskDefinitionArn?: ECSString;
        containerInstanceArn?: ECSString;
        overrides?: ECSTaskOverride;
        lastStatus?: ECSString;
        desiredStatus?: ECSString;
        containers?: ECSContainers;
        startedBy?: ECSString;
    }

    export interface ECSTaskDefinition {
        taskDefinitionArn?: ECSString;
        containerDefinitions?: ECSContainerDefinitions;
        family?: ECSString;
        revision?: ECSInteger;
        volumes?: ECSVolumeList;
        status?: ECSTaskDefinitionStatus;
        requiresAttributes?: ECSRequiresAttributes;
    }

    export type ECSTaskDefinitionStatus = string;
    export interface ECSTaskOverride {
        containerOverrides?: ECSContainerOverrides;
    }

    export type ECSTasks = Array<ECSTask>;
    export type ECSTimestamp = number;
    export type ECSTransportProtocol = string;
    export interface ECSUlimit {
        name: ECSUlimitName;
        softLimit: ECSInteger;
        hardLimit: ECSInteger;
    }

    export type ECSUlimitList = Array<ECSUlimit>;
    export type ECSUlimitName = string;
    export interface ECSUpdateContainerAgentRequest {
        cluster?: ECSString;
        containerInstance: ECSString;
    }

    export interface ECSUpdateContainerAgentResponse {
        containerInstance?: ECSContainerInstance;
    }

    export interface ECSUpdateInProgressException {
    }

    export interface ECSUpdateServiceRequest {
        cluster?: ECSString;
        service: ECSString;
        desiredCount?: ECSBoxedInteger;
        taskDefinition?: ECSString;
    }

    export interface ECSUpdateServiceResponse {
        service?: ECSService;
    }

    export interface ECSVersionInfo {
        agentVersion?: ECSString;
        agentHash?: ECSString;
        dockerVersion?: ECSString;
    }

    export interface ECSVolume {
        name?: ECSString;
        host?: ECSHostVolumeProperties;
    }

    export interface ECSVolumeFrom {
        sourceContainer?: ECSString;
        readOnly?: ECSBoxedBoolean;
    }

    export type ECSVolumeFromList = Array<ECSVolumeFrom>;
    export type ECSVolumeList = Array<ECSVolume>;
}
