// Type definitions for aws-sdk - Amazon EC2 Container Service
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

///<reference path="./aws-sdk-common.d.ts" />

declare module "aws-sdk" {

    /*
     * apiVersion: 2014-11-13
     * endpointPrefix: ecs
     * serviceAbbreviation: Amazon ECS
     * signatureVersion: v4
     * protocol: json
     */
    export class ECS extends Service {
      constructor(options?: any);
      endpoint: Endpoint;
      createCluster(params: ECS.CreateClusterRequest, callback?: (err: ECS.ServerException|ECS.ClientException|ECS.InvalidParameterException|any, data: ECS.CreateClusterResponse|any) => void): Request;
      createService(params: ECS.CreateServiceRequest, callback?: (err: ECS.ServerException|ECS.ClientException|ECS.InvalidParameterException|ECS.ClusterNotFoundException|any, data: ECS.CreateServiceResponse|any) => void): Request;
      deleteCluster(params: ECS.DeleteClusterRequest, callback?: (err: ECS.ServerException|ECS.ClientException|ECS.InvalidParameterException|ECS.ClusterNotFoundException|ECS.ClusterContainsContainerInstancesException|ECS.ClusterContainsServicesException|any, data: ECS.DeleteClusterResponse|any) => void): Request;
      deleteService(params: ECS.DeleteServiceRequest, callback?: (err: ECS.ServerException|ECS.ClientException|ECS.InvalidParameterException|ECS.ClusterNotFoundException|ECS.ServiceNotFoundException|any, data: ECS.DeleteServiceResponse|any) => void): Request;
      deregisterContainerInstance(params: ECS.DeregisterContainerInstanceRequest, callback?: (err: ECS.ServerException|ECS.ClientException|ECS.InvalidParameterException|ECS.ClusterNotFoundException|any, data: ECS.DeregisterContainerInstanceResponse|any) => void): Request;
      deregisterTaskDefinition(params: ECS.DeregisterTaskDefinitionRequest, callback?: (err: ECS.ServerException|ECS.ClientException|ECS.InvalidParameterException|any, data: ECS.DeregisterTaskDefinitionResponse|any) => void): Request;
      describeClusters(params: ECS.DescribeClustersRequest, callback?: (err: ECS.ServerException|ECS.ClientException|ECS.InvalidParameterException|any, data: ECS.DescribeClustersResponse|any) => void): Request;
      describeContainerInstances(params: ECS.DescribeContainerInstancesRequest, callback?: (err: ECS.ServerException|ECS.ClientException|ECS.InvalidParameterException|ECS.ClusterNotFoundException|any, data: ECS.DescribeContainerInstancesResponse|any) => void): Request;
      describeServices(params: ECS.DescribeServicesRequest, callback?: (err: ECS.ServerException|ECS.ClientException|ECS.InvalidParameterException|ECS.ClusterNotFoundException|any, data: ECS.DescribeServicesResponse|any) => void): Request;
      describeTaskDefinition(params: ECS.DescribeTaskDefinitionRequest, callback?: (err: ECS.ServerException|ECS.ClientException|ECS.InvalidParameterException|any, data: ECS.DescribeTaskDefinitionResponse|any) => void): Request;
      describeTasks(params: ECS.DescribeTasksRequest, callback?: (err: ECS.ServerException|ECS.ClientException|ECS.InvalidParameterException|ECS.ClusterNotFoundException|any, data: ECS.DescribeTasksResponse|any) => void): Request;
      discoverPollEndpoint(params: ECS.DiscoverPollEndpointRequest, callback?: (err: ECS.ServerException|ECS.ClientException|any, data: ECS.DiscoverPollEndpointResponse|any) => void): Request;
      listClusters(params: ECS.ListClustersRequest, callback?: (err: ECS.ServerException|ECS.ClientException|ECS.InvalidParameterException|any, data: ECS.ListClustersResponse|any) => void): Request;
      listContainerInstances(params: ECS.ListContainerInstancesRequest, callback?: (err: ECS.ServerException|ECS.ClientException|ECS.InvalidParameterException|ECS.ClusterNotFoundException|any, data: ECS.ListContainerInstancesResponse|any) => void): Request;
      listServices(params: ECS.ListServicesRequest, callback?: (err: ECS.ServerException|ECS.ClientException|ECS.InvalidParameterException|ECS.ClusterNotFoundException|any, data: ECS.ListServicesResponse|any) => void): Request;
      listTaskDefinitionFamilies(params: ECS.ListTaskDefinitionFamiliesRequest, callback?: (err: ECS.ServerException|ECS.ClientException|ECS.InvalidParameterException|any, data: ECS.ListTaskDefinitionFamiliesResponse|any) => void): Request;
      listTaskDefinitions(params: ECS.ListTaskDefinitionsRequest, callback?: (err: ECS.ServerException|ECS.ClientException|ECS.InvalidParameterException|any, data: ECS.ListTaskDefinitionsResponse|any) => void): Request;
      listTasks(params: ECS.ListTasksRequest, callback?: (err: ECS.ServerException|ECS.ClientException|ECS.InvalidParameterException|ECS.ClusterNotFoundException|ECS.ServiceNotFoundException|any, data: ECS.ListTasksResponse|any) => void): Request;
      registerContainerInstance(params: ECS.RegisterContainerInstanceRequest, callback?: (err: ECS.ServerException|ECS.ClientException|any, data: ECS.RegisterContainerInstanceResponse|any) => void): Request;
      registerTaskDefinition(params: ECS.RegisterTaskDefinitionRequest, callback?: (err: ECS.ServerException|ECS.ClientException|ECS.InvalidParameterException|any, data: ECS.RegisterTaskDefinitionResponse|any) => void): Request;
      runTask(params: ECS.RunTaskRequest, callback?: (err: ECS.ServerException|ECS.ClientException|ECS.InvalidParameterException|ECS.ClusterNotFoundException|any, data: ECS.RunTaskResponse|any) => void): Request;
      startTask(params: ECS.StartTaskRequest, callback?: (err: ECS.ServerException|ECS.ClientException|ECS.InvalidParameterException|ECS.ClusterNotFoundException|any, data: ECS.StartTaskResponse|any) => void): Request;
      stopTask(params: ECS.StopTaskRequest, callback?: (err: ECS.ServerException|ECS.ClientException|ECS.InvalidParameterException|ECS.ClusterNotFoundException|any, data: ECS.StopTaskResponse|any) => void): Request;
      submitContainerStateChange(params: ECS.SubmitContainerStateChangeRequest, callback?: (err: ECS.ServerException|ECS.ClientException|any, data: ECS.SubmitContainerStateChangeResponse|any) => void): Request;
      submitTaskStateChange(params: ECS.SubmitTaskStateChangeRequest, callback?: (err: ECS.ServerException|ECS.ClientException|any, data: ECS.SubmitTaskStateChangeResponse|any) => void): Request;
      updateContainerAgent(params: ECS.UpdateContainerAgentRequest, callback?: (err: ECS.ServerException|ECS.ClientException|ECS.InvalidParameterException|ECS.ClusterNotFoundException|ECS.UpdateInProgressException|ECS.NoUpdateAvailableException|ECS.MissingVersionException|any, data: ECS.UpdateContainerAgentResponse|any) => void): Request;
      updateService(params: ECS.UpdateServiceRequest, callback?: (err: ECS.ServerException|ECS.ClientException|ECS.InvalidParameterException|ECS.ClusterNotFoundException|ECS.ServiceNotFoundException|ECS.ServiceNotActiveException|any, data: ECS.UpdateServiceResponse|any) => void): Request;

    }

    export module ECS {
        export type AgentUpdateStatus = string;
        export type Attributes = Attribute[];
        export type Boolean = boolean;
        export type BoxedBoolean = boolean;
        export type BoxedInteger = number;
        export type Clusters = Cluster[];
        export type ContainerDefinitions = ContainerDefinition[];
        export type ContainerInstances = ContainerInstance[];
        export type ContainerOverrides = ContainerOverride[];
        export type Containers = Container[];
        export type Deployments = Deployment[];
        export type DesiredStatus = string;
        export type DockerLabelsMap = {[key:string]: String};
        export type Double = number;
        export type EnvironmentVariables = KeyValuePair[];
        export type Failures = Failure[];
        export type HostEntryList = HostEntry[];
        export type Integer = number;
        export type LoadBalancers = LoadBalancer[];
        export type LogConfigurationOptionsMap = {[key:string]: String};
        export type LogDriver = string;
        export type Long = number;
        export type MountPointList = MountPoint[];
        export type NetworkBindings = NetworkBinding[];
        export type PortMappingList = PortMapping[];
        export type RequiresAttributes = Attribute[];
        export type Resources = Resource[];
        export type ServiceEvents = ServiceEvent[];
        export type Services = Service[];
        export type SortOrder = string;
        export type String = string;
        export type StringList = String[];
        export type TaskDefinitionStatus = string;
        export type Tasks = Task[];
        export type Timestamp = number;
        export type TransportProtocol = string;
        export type UlimitList = Ulimit[];
        export type UlimitName = string;
        export type VolumeFromList = VolumeFrom[];
        export type VolumeList = Volume[];

        export interface Attribute {
            name: String;
            value?: String;
        }
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
            activeServicesCount?: Integer;
        }
        export interface ClusterContainsContainerInstancesException {
        }
        export interface ClusterContainsServicesException {
        }
        export interface ClusterNotFoundException {
        }
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
            hostname?: String;
            user?: String;
            workingDirectory?: String;
            disableNetworking?: BoxedBoolean;
            privileged?: BoxedBoolean;
            readonlyRootFilesystem?: BoxedBoolean;
            dnsServers?: StringList;
            dnsSearchDomains?: StringList;
            extraHosts?: HostEntryList;
            dockerSecurityOptions?: StringList;
            dockerLabels?: DockerLabelsMap;
            ulimits?: UlimitList;
            logConfiguration?: LogConfiguration;
        }
        export interface ContainerInstance {
            containerInstanceArn?: String;
            ec2InstanceId?: String;
            versionInfo?: VersionInfo;
            remainingResources?: Resources;
            registeredResources?: Resources;
            status?: String;
            agentConnected?: Boolean;
            runningTasksCount?: Integer;
            pendingTasksCount?: Integer;
            agentUpdateStatus?: AgentUpdateStatus;
            attributes?: Attributes;
        }
        export interface ContainerOverride {
            name?: String;
            command?: StringList;
            environment?: EnvironmentVariables;
        }
        export interface CreateClusterRequest {
            clusterName?: String;
        }
        export interface CreateClusterResponse {
            cluster?: Cluster;
        }
        export interface CreateServiceRequest {
            cluster?: String;
            serviceName: String;
            taskDefinition: String;
            loadBalancers?: LoadBalancers;
            desiredCount: BoxedInteger;
            clientToken?: String;
            role?: String;
            deploymentConfiguration?: DeploymentConfiguration;
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
        export interface DeploymentConfiguration {
            maximumPercent?: BoxedInteger;
            minimumHealthyPercent?: BoxedInteger;
        }
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
            telemetryEndpoint?: String;
        }
        export interface Failure {
            arn?: String;
            reason?: String;
        }
        export interface HostEntry {
            hostname: String;
            ipAddress: String;
        }
        export interface HostVolumeProperties {
            sourcePath?: String;
        }
        export interface InvalidParameterException {
        }
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
            status?: TaskDefinitionStatus;
            sort?: SortOrder;
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
            desiredStatus?: DesiredStatus;
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
        export interface LogConfiguration {
            logDriver: LogDriver;
            options?: LogConfigurationOptionsMap;
        }
        export interface MissingVersionException {
        }
        export interface MountPoint {
            sourceVolume?: String;
            containerPath?: String;
            readOnly?: BoxedBoolean;
        }
        export interface NetworkBinding {
            bindIP?: String;
            containerPort?: BoxedInteger;
            hostPort?: BoxedInteger;
            protocol?: TransportProtocol;
        }
        export interface NoUpdateAvailableException {
        }
        export interface PortMapping {
            containerPort?: Integer;
            hostPort?: Integer;
            protocol?: TransportProtocol;
        }
        export interface RegisterContainerInstanceRequest {
            cluster?: String;
            instanceIdentityDocument?: String;
            instanceIdentityDocumentSignature?: String;
            totalResources?: Resources;
            versionInfo?: VersionInfo;
            containerInstanceArn?: String;
            attributes?: Attributes;
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
            deploymentConfiguration?: DeploymentConfiguration;
            deployments?: Deployments;
            roleArn?: String;
            events?: ServiceEvents;
        }
        export interface ServiceEvent {
            id?: String;
            createdAt?: Timestamp;
            message?: String;
        }
        export interface ServiceNotActiveException {
        }
        export interface ServiceNotFoundException {
        }
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
            reason?: String;
        }
        export interface StopTaskResponse {
            task?: Task;
        }
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
            stoppedReason?: String;
            createdAt?: Timestamp;
            startedAt?: Timestamp;
            stoppedAt?: Timestamp;
        }
        export interface TaskDefinition {
            taskDefinitionArn?: String;
            containerDefinitions?: ContainerDefinitions;
            family?: String;
            revision?: Integer;
            volumes?: VolumeList;
            status?: TaskDefinitionStatus;
            requiresAttributes?: RequiresAttributes;
        }
        export interface TaskOverride {
            containerOverrides?: ContainerOverrides;
        }
        export interface Ulimit {
            name: UlimitName;
            softLimit: Integer;
            hardLimit: Integer;
        }
        export interface UpdateContainerAgentRequest {
            cluster?: String;
            containerInstance: String;
        }
        export interface UpdateContainerAgentResponse {
            containerInstance?: ContainerInstance;
        }
        export interface UpdateInProgressException {
        }
        export interface UpdateServiceRequest {
            cluster?: String;
            service: String;
            desiredCount?: BoxedInteger;
            taskDefinition?: String;
            deploymentConfiguration?: DeploymentConfiguration;
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

    }
}
