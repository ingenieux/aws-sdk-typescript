// DO NOT EDIT!
//
declare module "aws-sdk" {
    export class ECS {
      constructor(options?: any);
      createCluster(params: CreateClusterRequest, callback: (err: ServerException|ClientException|any, data: CreateClusterResponse|any) => void): void;
      createService(params: CreateServiceRequest, callback: (err: ServerException|ClientException|any, data: CreateServiceResponse|any) => void): void;
      deleteCluster(params: DeleteClusterRequest, callback: (err: ServerException|ClientException|any, data: DeleteClusterResponse|any) => void): void;
      deleteService(params: DeleteServiceRequest, callback: (err: ServerException|ClientException|any, data: DeleteServiceResponse|any) => void): void;
      deregisterContainerInstance(params: DeregisterContainerInstanceRequest, callback: (err: ServerException|ClientException|any, data: DeregisterContainerInstanceResponse|any) => void): void;
      deregisterTaskDefinition(params: DeregisterTaskDefinitionRequest, callback: (err: ServerException|ClientException|any, data: DeregisterTaskDefinitionResponse|any) => void): void;
      describeClusters(params: DescribeClustersRequest, callback: (err: ServerException|ClientException|any, data: DescribeClustersResponse|any) => void): void;
      describeContainerInstances(params: DescribeContainerInstancesRequest, callback: (err: ServerException|ClientException|any, data: DescribeContainerInstancesResponse|any) => void): void;
      describeServices(params: DescribeServicesRequest, callback: (err: ServerException|ClientException|any, data: DescribeServicesResponse|any) => void): void;
      describeTaskDefinition(params: DescribeTaskDefinitionRequest, callback: (err: ServerException|ClientException|any, data: DescribeTaskDefinitionResponse|any) => void): void;
      describeTasks(params: DescribeTasksRequest, callback: (err: ServerException|ClientException|any, data: DescribeTasksResponse|any) => void): void;
      discoverPollEndpoint(params: DiscoverPollEndpointRequest, callback: (err: ServerException|ClientException|any, data: DiscoverPollEndpointResponse|any) => void): void;
      listClusters(params: ListClustersRequest, callback: (err: ServerException|ClientException|any, data: ListClustersResponse|any) => void): void;
      listContainerInstances(params: ListContainerInstancesRequest, callback: (err: ServerException|ClientException|any, data: ListContainerInstancesResponse|any) => void): void;
      listServices(params: ListServicesRequest, callback: (err: ServerException|ClientException|any, data: ListServicesResponse|any) => void): void;
      listTaskDefinitionFamilies(params: ListTaskDefinitionFamiliesRequest, callback: (err: ServerException|ClientException|any, data: ListTaskDefinitionFamiliesResponse|any) => void): void;
      listTaskDefinitions(params: ListTaskDefinitionsRequest, callback: (err: ServerException|ClientException|any, data: ListTaskDefinitionsResponse|any) => void): void;
      listTasks(params: ListTasksRequest, callback: (err: ServerException|ClientException|any, data: ListTasksResponse|any) => void): void;
      registerContainerInstance(params: RegisterContainerInstanceRequest, callback: (err: ServerException|ClientException|any, data: RegisterContainerInstanceResponse|any) => void): void;
      registerTaskDefinition(params: RegisterTaskDefinitionRequest, callback: (err: ServerException|ClientException|any, data: RegisterTaskDefinitionResponse|any) => void): void;
      runTask(params: RunTaskRequest, callback: (err: ServerException|ClientException|any, data: RunTaskResponse|any) => void): void;
      startTask(params: StartTaskRequest, callback: (err: ServerException|ClientException|any, data: StartTaskResponse|any) => void): void;
      stopTask(params: StopTaskRequest, callback: (err: ServerException|ClientException|any, data: StopTaskResponse|any) => void): void;
      submitContainerStateChange(params: SubmitContainerStateChangeRequest, callback: (err: ServerException|ClientException|any, data: SubmitContainerStateChangeResponse|any) => void): void;
      submitTaskStateChange(params: SubmitTaskStateChangeRequest, callback: (err: ServerException|ClientException|any, data: SubmitTaskStateChangeResponse|any) => void): void;
      updateService(params: UpdateServiceRequest, callback: (err: ServerException|ClientException|any, data: UpdateServiceResponse|any) => void): void;
    }

    export type Boolean = boolean;

    export type BoxedBoolean = boolean;

    export type BoxedInteger = number;

    export interface ClientException {
      message?: String;
    }


    export interface Cluster {
      clusterArn?: String;
      clusterName?: String;
      status?: String;
      registeredContainerInstancesCount?: Integer;
      runningTasksCount?: Integer;
      pendingTasksCount?: Integer;
    }


    export type Clusters = Array<Cluster>;

    export interface Container {
      containerArn?: String;
      taskArn?: String;
      name?: String;
      lastStatus?: String;
      exitCode?: BoxedInteger;
      reason?: String;
      networkBindings?: NetworkBindings;
    }


    export interface ContainerDefinition {
      name?: String;
      image?: String;
      cpu?: Integer;
      memory?: Integer;
      links?: StringList;
      portMappings?: PortMappingList;
      essential?: BoxedBoolean;
      entryPoint?: StringList;
      command?: StringList;
      environment?: EnvironmentVariables;
      mountPoints?: MountPointList;
      volumesFrom?: VolumeFromList;
    }


    export type ContainerDefinitions = Array<ContainerDefinition>;

    export interface ContainerInstance {
      containerInstanceArn?: String;
      ec2InstanceId?: String;
      remainingResources?: Resources;
      registeredResources?: Resources;
      status?: String;
      agentConnected?: Boolean;
      runningTasksCount?: Integer;
      pendingTasksCount?: Integer;
    }


    export type ContainerInstances = Array<ContainerInstance>;

    export interface ContainerOverride {
      name?: String;
      command?: StringList;
    }


    export type ContainerOverrides = Array<ContainerOverride>;

    export type Containers = Array<Container>;

    export interface CreateClusterRequest {
      clusterName?: String;
    }


    export interface CreateClusterResponse {
      cluster?: Cluster;
    }


    export interface CreateServiceRequest {
      cluster?: String;
      serviceName: String;
      taskDefinition?: String;
      loadBalancers?: LoadBalancers;
      desiredCount?: BoxedInteger;
      clientToken?: String;
      role?: String;
    }


    export interface CreateServiceResponse {
      service?: Service;
    }


    export interface DeleteClusterRequest {
      cluster: String;
    }


    export interface DeleteClusterResponse {
      cluster?: Cluster;
    }


    export interface DeleteServiceRequest {
      cluster?: String;
      service: String;
    }


    export interface DeleteServiceResponse {
      service?: Service;
    }


    export interface Deployment {
      id?: String;
      status?: String;
      taskDefinition?: String;
      desiredCount?: Integer;
      pendingCount?: Integer;
      runningCount?: Integer;
      createdAt?: Timestamp;
      updatedAt?: Timestamp;
    }


    export type Deployments = Array<Deployment>;

    export interface DeregisterContainerInstanceRequest {
      cluster?: String;
      containerInstance: String;
      force?: BoxedBoolean;
    }


    export interface DeregisterContainerInstanceResponse {
      containerInstance?: ContainerInstance;
    }


    export interface DeregisterTaskDefinitionRequest {
      taskDefinition: String;
    }


    export interface DeregisterTaskDefinitionResponse {
      taskDefinition?: TaskDefinition;
    }


    export interface DescribeClustersRequest {
      clusters?: StringList;
    }


    export interface DescribeClustersResponse {
      clusters?: Clusters;
      failures?: Failures;
    }


    export interface DescribeContainerInstancesRequest {
      cluster?: String;
      containerInstances: StringList;
    }


    export interface DescribeContainerInstancesResponse {
      containerInstances?: ContainerInstances;
      failures?: Failures;
    }


    export interface DescribeServicesRequest {
      cluster?: String;
      services: StringList;
    }


    export interface DescribeServicesResponse {
      services?: Services;
      failures?: Failures;
    }


    export interface DescribeTaskDefinitionRequest {
      taskDefinition: String;
    }


    export interface DescribeTaskDefinitionResponse {
      taskDefinition?: TaskDefinition;
    }


    export interface DescribeTasksRequest {
      cluster?: String;
      tasks: StringList;
    }


    export interface DescribeTasksResponse {
      tasks?: Tasks;
      failures?: Failures;
    }


    export interface DiscoverPollEndpointRequest {
      containerInstance?: String;
      cluster?: String;
    }


    export interface DiscoverPollEndpointResponse {
      endpoint?: String;
    }


    export type Double = number;

    export type EnvironmentVariables = Array<KeyValuePair>;

    export interface Failure {
      arn?: String;
      reason?: String;
    }


    export type Failures = Array<Failure>;

    export interface HostVolumeProperties {
      sourcePath?: String;
    }


    export type Integer = number;

    export interface KeyValuePair {
      name?: String;
      value?: String;
    }


    export interface ListClustersRequest {
      nextToken?: String;
      maxResults?: BoxedInteger;
    }


    export interface ListClustersResponse {
      clusterArns?: StringList;
      nextToken?: String;
    }


    export interface ListContainerInstancesRequest {
      cluster?: String;
      nextToken?: String;
      maxResults?: BoxedInteger;
    }


    export interface ListContainerInstancesResponse {
      containerInstanceArns?: StringList;
      nextToken?: String;
    }


    export interface ListServicesRequest {
      cluster?: String;
      nextToken?: String;
      maxResults?: BoxedInteger;
    }


    export interface ListServicesResponse {
      serviceArns?: StringList;
      nextToken?: String;
    }


    export interface ListTaskDefinitionFamiliesRequest {
      familyPrefix?: String;
      nextToken?: String;
      maxResults?: BoxedInteger;
    }


    export interface ListTaskDefinitionFamiliesResponse {
      families?: StringList;
      nextToken?: String;
    }


    export interface ListTaskDefinitionsRequest {
      familyPrefix?: String;
      nextToken?: String;
      maxResults?: BoxedInteger;
    }


    export interface ListTaskDefinitionsResponse {
      taskDefinitionArns?: StringList;
      nextToken?: String;
    }


    export interface ListTasksRequest {
      cluster?: String;
      containerInstance?: String;
      family?: String;
      nextToken?: String;
      maxResults?: BoxedInteger;
      startedBy?: String;
      serviceName?: String;
    }


    export interface ListTasksResponse {
      taskArns?: StringList;
      nextToken?: String;
    }


    export interface LoadBalancer {
      loadBalancerName?: String;
      containerName?: String;
      containerPort?: BoxedInteger;
    }


    export type LoadBalancers = Array<LoadBalancer>;

    export type Long = number;

    export interface MountPoint {
      sourceVolume?: String;
      containerPath?: String;
      readOnly?: BoxedBoolean;
    }


    export type MountPointList = Array<MountPoint>;

    export interface NetworkBinding {
      bindIP?: String;
      containerPort?: BoxedInteger;
      hostPort?: BoxedInteger;
    }


    export type NetworkBindings = Array<NetworkBinding>;

    export interface PortMapping {
      containerPort?: Integer;
      hostPort?: Integer;
    }


    export type PortMappingList = Array<PortMapping>;

    export interface RegisterContainerInstanceRequest {
      cluster?: String;
      instanceIdentityDocument?: String;
      instanceIdentityDocumentSignature?: String;
      totalResources?: Resources;
      versionInfo?: VersionInfo;
    }


    export interface RegisterContainerInstanceResponse {
      containerInstance?: ContainerInstance;
    }


    export interface RegisterTaskDefinitionRequest {
      family: String;
      containerDefinitions: ContainerDefinitions;
      volumes?: VolumeList;
    }


    export interface RegisterTaskDefinitionResponse {
      taskDefinition?: TaskDefinition;
    }


    export interface Resource {
      name?: String;
      type?: String;
      doubleValue?: Double;
      longValue?: Long;
      integerValue?: Integer;
      stringSetValue?: StringList;
    }


    export type Resources = Array<Resource>;

    export interface RunTaskRequest {
      cluster?: String;
      taskDefinition: String;
      overrides?: TaskOverride;
      count?: BoxedInteger;
      startedBy?: String;
    }


    export interface RunTaskResponse {
      tasks?: Tasks;
      failures?: Failures;
    }


    export interface ServerException {
      message?: String;
    }


    export interface Service {
      serviceArn?: String;
      serviceName?: String;
      clusterArn?: String;
      loadBalancers?: LoadBalancers;
      status?: String;
      desiredCount?: Integer;
      runningCount?: Integer;
      pendingCount?: Integer;
      taskDefinition?: String;
      deployments?: Deployments;
      roleArn?: String;
      events?: ServiceEvents;
    }


    export interface ServiceEvent {
      id?: String;
      createdAt?: Timestamp;
      message?: String;
    }


    export type ServiceEvents = Array<ServiceEvent>;

    export type Services = Array<Service>;

    export interface StartTaskRequest {
      cluster?: String;
      taskDefinition: String;
      overrides?: TaskOverride;
      containerInstances: StringList;
      startedBy?: String;
    }


    export interface StartTaskResponse {
      tasks?: Tasks;
      failures?: Failures;
    }


    export interface StopTaskRequest {
      cluster?: String;
      task: String;
    }


    export interface StopTaskResponse {
      task?: Task;
    }


    export type String = string;

    export type StringList = Array<String>;

    export interface SubmitContainerStateChangeRequest {
      cluster?: String;
      task?: String;
      containerName?: String;
      status?: String;
      exitCode?: BoxedInteger;
      reason?: String;
      networkBindings?: NetworkBindings;
    }


    export interface SubmitContainerStateChangeResponse {
      acknowledgment?: String;
    }


    export interface SubmitTaskStateChangeRequest {
      cluster?: String;
      task?: String;
      status?: String;
      reason?: String;
    }


    export interface SubmitTaskStateChangeResponse {
      acknowledgment?: String;
    }


    export interface Task {
      taskArn?: String;
      clusterArn?: String;
      taskDefinitionArn?: String;
      containerInstanceArn?: String;
      overrides?: TaskOverride;
      lastStatus?: String;
      desiredStatus?: String;
      containers?: Containers;
      startedBy?: String;
    }


    export interface TaskDefinition {
      taskDefinitionArn?: String;
      containerDefinitions?: ContainerDefinitions;
      family?: String;
      revision?: Integer;
      volumes?: VolumeList;
    }


    export interface TaskOverride {
      containerOverrides?: ContainerOverrides;
    }


    export type Tasks = Array<Task>;

    export type Timestamp = number;

    export interface UpdateServiceRequest {
      cluster?: String;
      service: String;
      desiredCount?: BoxedInteger;
      taskDefinition?: String;
    }


    export interface UpdateServiceResponse {
      service?: Service;
    }


    export interface VersionInfo {
      agentVersion?: String;
      agentHash?: String;
      dockerVersion?: String;
    }


    export interface Volume {
      name?: String;
      host?: HostVolumeProperties;
    }


    export interface VolumeFrom {
      sourceContainer?: String;
      readOnly?: BoxedBoolean;
    }


    export type VolumeFromList = Array<VolumeFrom>;

    export type VolumeList = Array<Volume>;

}
