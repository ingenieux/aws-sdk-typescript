// DO NOT EDIT!
//
declare module "aws-sdk" {
    export class ECS {
      constructor(options?: any);
      createCluster(params: ECSCreateClusterRequest, callback: (err: ECSServerException|ECSClientException|any, data: ECSCreateClusterResponse|any) => void): void;
      createService(params: ECSCreateServiceRequest, callback: (err: ECSServerException|ECSClientException|any, data: ECSCreateServiceResponse|any) => void): void;
      deleteCluster(params: ECSDeleteClusterRequest, callback: (err: ECSServerException|ECSClientException|any, data: ECSDeleteClusterResponse|any) => void): void;
      deleteService(params: ECSDeleteServiceRequest, callback: (err: ECSServerException|ECSClientException|any, data: ECSDeleteServiceResponse|any) => void): void;
      deregisterContainerInstance(params: ECSDeregisterContainerInstanceRequest, callback: (err: ECSServerException|ECSClientException|any, data: ECSDeregisterContainerInstanceResponse|any) => void): void;
      deregisterTaskDefinition(params: ECSDeregisterTaskDefinitionRequest, callback: (err: ECSServerException|ECSClientException|any, data: ECSDeregisterTaskDefinitionResponse|any) => void): void;
      describeClusters(params: ECSDescribeClustersRequest, callback: (err: ECSServerException|ECSClientException|any, data: ECSDescribeClustersResponse|any) => void): void;
      describeContainerInstances(params: ECSDescribeContainerInstancesRequest, callback: (err: ECSServerException|ECSClientException|any, data: ECSDescribeContainerInstancesResponse|any) => void): void;
      describeServices(params: ECSDescribeServicesRequest, callback: (err: ECSServerException|ECSClientException|any, data: ECSDescribeServicesResponse|any) => void): void;
      describeTaskDefinition(params: ECSDescribeTaskDefinitionRequest, callback: (err: ECSServerException|ECSClientException|any, data: ECSDescribeTaskDefinitionResponse|any) => void): void;
      describeTasks(params: ECSDescribeTasksRequest, callback: (err: ECSServerException|ECSClientException|any, data: ECSDescribeTasksResponse|any) => void): void;
      discoverPollEndpoint(params: ECSDiscoverPollEndpointRequest, callback: (err: ECSServerException|ECSClientException|any, data: ECSDiscoverPollEndpointResponse|any) => void): void;
      listClusters(params: ECSListClustersRequest, callback: (err: ECSServerException|ECSClientException|any, data: ECSListClustersResponse|any) => void): void;
      listContainerInstances(params: ECSListContainerInstancesRequest, callback: (err: ECSServerException|ECSClientException|any, data: ECSListContainerInstancesResponse|any) => void): void;
      listServices(params: ECSListServicesRequest, callback: (err: ECSServerException|ECSClientException|any, data: ECSListServicesResponse|any) => void): void;
      listTaskDefinitionFamilies(params: ECSListTaskDefinitionFamiliesRequest, callback: (err: ECSServerException|ECSClientException|any, data: ECSListTaskDefinitionFamiliesResponse|any) => void): void;
      listTaskDefinitions(params: ECSListTaskDefinitionsRequest, callback: (err: ECSServerException|ECSClientException|any, data: ECSListTaskDefinitionsResponse|any) => void): void;
      listTasks(params: ECSListTasksRequest, callback: (err: ECSServerException|ECSClientException|any, data: ECSListTasksResponse|any) => void): void;
      registerContainerInstance(params: ECSRegisterContainerInstanceRequest, callback: (err: ECSServerException|ECSClientException|any, data: ECSRegisterContainerInstanceResponse|any) => void): void;
      registerTaskDefinition(params: ECSRegisterTaskDefinitionRequest, callback: (err: ECSServerException|ECSClientException|any, data: ECSRegisterTaskDefinitionResponse|any) => void): void;
      runTask(params: ECSRunTaskRequest, callback: (err: ECSServerException|ECSClientException|any, data: ECSRunTaskResponse|any) => void): void;
      startTask(params: ECSStartTaskRequest, callback: (err: ECSServerException|ECSClientException|any, data: ECSStartTaskResponse|any) => void): void;
      stopTask(params: ECSStopTaskRequest, callback: (err: ECSServerException|ECSClientException|any, data: ECSStopTaskResponse|any) => void): void;
      submitContainerStateChange(params: ECSSubmitContainerStateChangeRequest, callback: (err: ECSServerException|ECSClientException|any, data: ECSSubmitContainerStateChangeResponse|any) => void): void;
      submitTaskStateChange(params: ECSSubmitTaskStateChangeRequest, callback: (err: ECSServerException|ECSClientException|any, data: ECSSubmitTaskStateChangeResponse|any) => void): void;
      updateService(params: ECSUpdateServiceRequest, callback: (err: ECSServerException|ECSClientException|any, data: ECSUpdateServiceResponse|any) => void): void;
    }

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
    }

    export type ECSContainerDefinitions = Array<ECSContainerDefinition>;
    export interface ECSContainerInstance {
        containerInstanceArn?: ECSString;
        ec2InstanceId?: ECSString;
        remainingResources?: ECSResources;
        registeredResources?: ECSResources;
        status?: ECSString;
        agentConnected?: ECSBoolean;
        runningTasksCount?: ECSInteger;
        pendingTasksCount?: ECSInteger;
    }

    export type ECSContainerInstances = Array<ECSContainerInstance>;
    export interface ECSContainerOverride {
        name?: ECSString;
        command?: ECSStringList;
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
        taskDefinition?: ECSString;
        loadBalancers?: ECSLoadBalancers;
        desiredCount?: ECSBoxedInteger;
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

    export interface ECSDiscoverPollEndpointRequest {
        containerInstance?: ECSString;
        cluster?: ECSString;
    }

    export interface ECSDiscoverPollEndpointResponse {
        endpoint?: ECSString;
    }

    export type ECSDouble = number;
    export type ECSEnvironmentVariables = Array<ECSKeyValuePair>;
    export interface ECSFailure {
        arn?: ECSString;
        reason?: ECSString;
    }

    export type ECSFailures = Array<ECSFailure>;
    export interface ECSHostVolumeProperties {
        sourcePath?: ECSString;
    }

    export type ECSInteger = number;
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
    export type ECSLong = number;
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
    }

    export type ECSNetworkBindings = Array<ECSNetworkBinding>;
    export interface ECSPortMapping {
        containerPort?: ECSInteger;
        hostPort?: ECSInteger;
    }

    export type ECSPortMappingList = Array<ECSPortMapping>;
    export interface ECSRegisterContainerInstanceRequest {
        cluster?: ECSString;
        instanceIdentityDocument?: ECSString;
        instanceIdentityDocumentSignature?: ECSString;
        totalResources?: ECSResources;
        versionInfo?: ECSVersionInfo;
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
    export type ECSServices = Array<ECSService>;
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
    }

    export interface ECSTaskOverride {
        containerOverrides?: ECSContainerOverrides;
    }

    export type ECSTasks = Array<ECSTask>;
    export type ECSTimestamp = number;
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
