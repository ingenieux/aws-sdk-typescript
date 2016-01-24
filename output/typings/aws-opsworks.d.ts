// Type definitions for aws-sdk - AWS OpsWorks
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

///<reference path="./aws-sdk-common.d.ts" />

declare module "aws-sdk" {

    /*
     * apiVersion: 2013-02-18
     * endpointPrefix: opsworks
     * serviceAbbreviation: 
     * signatureVersion: v4
     * protocol: json
     */
    export class OpsWorks extends Service {
      constructor(options?: any);
      endpoint: Endpoint;
      assignInstance(params: OpsWorks.AssignInstanceRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: any) => void): Request;
      assignVolume(params: OpsWorks.AssignVolumeRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: any) => void): Request;
      associateElasticIp(params: OpsWorks.AssociateElasticIpRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: any) => void): Request;
      attachElasticLoadBalancer(params: OpsWorks.AttachElasticLoadBalancerRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: any) => void): Request;
      cloneStack(params: OpsWorks.CloneStackRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: OpsWorks.CloneStackResult|any) => void): Request;
      createApp(params: OpsWorks.CreateAppRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: OpsWorks.CreateAppResult|any) => void): Request;
      createDeployment(params: OpsWorks.CreateDeploymentRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: OpsWorks.CreateDeploymentResult|any) => void): Request;
      createInstance(params: OpsWorks.CreateInstanceRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: OpsWorks.CreateInstanceResult|any) => void): Request;
      createLayer(params: OpsWorks.CreateLayerRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: OpsWorks.CreateLayerResult|any) => void): Request;
      createStack(params: OpsWorks.CreateStackRequest, callback?: (err: OpsWorks.ValidationException|any, data: OpsWorks.CreateStackResult|any) => void): Request;
      createUserProfile(params: OpsWorks.CreateUserProfileRequest, callback?: (err: OpsWorks.ValidationException|any, data: OpsWorks.CreateUserProfileResult|any) => void): Request;
      deleteApp(params: OpsWorks.DeleteAppRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: any) => void): Request;
      deleteInstance(params: OpsWorks.DeleteInstanceRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: any) => void): Request;
      deleteLayer(params: OpsWorks.DeleteLayerRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: any) => void): Request;
      deleteStack(params: OpsWorks.DeleteStackRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: any) => void): Request;
      deleteUserProfile(params: OpsWorks.DeleteUserProfileRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: any) => void): Request;
      deregisterEcsCluster(params: OpsWorks.DeregisterEcsClusterRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: any) => void): Request;
      deregisterElasticIp(params: OpsWorks.DeregisterElasticIpRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: any) => void): Request;
      deregisterInstance(params: OpsWorks.DeregisterInstanceRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: any) => void): Request;
      deregisterRdsDbInstance(params: OpsWorks.DeregisterRdsDbInstanceRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: any) => void): Request;
      deregisterVolume(params: OpsWorks.DeregisterVolumeRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: any) => void): Request;
      describeAgentVersions(params: OpsWorks.DescribeAgentVersionsRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: OpsWorks.DescribeAgentVersionsResult|any) => void): Request;
      describeApps(params: OpsWorks.DescribeAppsRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: OpsWorks.DescribeAppsResult|any) => void): Request;
      describeCommands(params: OpsWorks.DescribeCommandsRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: OpsWorks.DescribeCommandsResult|any) => void): Request;
      describeDeployments(params: OpsWorks.DescribeDeploymentsRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: OpsWorks.DescribeDeploymentsResult|any) => void): Request;
      describeEcsClusters(params: OpsWorks.DescribeEcsClustersRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: OpsWorks.DescribeEcsClustersResult|any) => void): Request;
      describeElasticIps(params: OpsWorks.DescribeElasticIpsRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: OpsWorks.DescribeElasticIpsResult|any) => void): Request;
      describeElasticLoadBalancers(params: OpsWorks.DescribeElasticLoadBalancersRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: OpsWorks.DescribeElasticLoadBalancersResult|any) => void): Request;
      describeInstances(params: OpsWorks.DescribeInstancesRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: OpsWorks.DescribeInstancesResult|any) => void): Request;
      describeLayers(params: OpsWorks.DescribeLayersRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: OpsWorks.DescribeLayersResult|any) => void): Request;
      describeLoadBasedAutoScaling(params: OpsWorks.DescribeLoadBasedAutoScalingRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: OpsWorks.DescribeLoadBasedAutoScalingResult|any) => void): Request;
      describeMyUserProfile(callback?: (err: any, data: OpsWorks.DescribeMyUserProfileResult|any) => void): Request;
      describePermissions(params: OpsWorks.DescribePermissionsRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: OpsWorks.DescribePermissionsResult|any) => void): Request;
      describeRaidArrays(params: OpsWorks.DescribeRaidArraysRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: OpsWorks.DescribeRaidArraysResult|any) => void): Request;
      describeRdsDbInstances(params: OpsWorks.DescribeRdsDbInstancesRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: OpsWorks.DescribeRdsDbInstancesResult|any) => void): Request;
      describeServiceErrors(params: OpsWorks.DescribeServiceErrorsRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: OpsWorks.DescribeServiceErrorsResult|any) => void): Request;
      describeStackProvisioningParameters(params: OpsWorks.DescribeStackProvisioningParametersRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: OpsWorks.DescribeStackProvisioningParametersResult|any) => void): Request;
      describeStackSummary(params: OpsWorks.DescribeStackSummaryRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: OpsWorks.DescribeStackSummaryResult|any) => void): Request;
      describeStacks(params: OpsWorks.DescribeStacksRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: OpsWorks.DescribeStacksResult|any) => void): Request;
      describeTimeBasedAutoScaling(params: OpsWorks.DescribeTimeBasedAutoScalingRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: OpsWorks.DescribeTimeBasedAutoScalingResult|any) => void): Request;
      describeUserProfiles(params: OpsWorks.DescribeUserProfilesRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: OpsWorks.DescribeUserProfilesResult|any) => void): Request;
      describeVolumes(params: OpsWorks.DescribeVolumesRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: OpsWorks.DescribeVolumesResult|any) => void): Request;
      detachElasticLoadBalancer(params: OpsWorks.DetachElasticLoadBalancerRequest, callback?: (err: OpsWorks.ResourceNotFoundException|any, data: any) => void): Request;
      disassociateElasticIp(params: OpsWorks.DisassociateElasticIpRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: any) => void): Request;
      getHostnameSuggestion(params: OpsWorks.GetHostnameSuggestionRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: OpsWorks.GetHostnameSuggestionResult|any) => void): Request;
      grantAccess(params: OpsWorks.GrantAccessRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: OpsWorks.GrantAccessResult|any) => void): Request;
      rebootInstance(params: OpsWorks.RebootInstanceRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: any) => void): Request;
      registerEcsCluster(params: OpsWorks.RegisterEcsClusterRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: OpsWorks.RegisterEcsClusterResult|any) => void): Request;
      registerElasticIp(params: OpsWorks.RegisterElasticIpRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: OpsWorks.RegisterElasticIpResult|any) => void): Request;
      registerInstance(params: OpsWorks.RegisterInstanceRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: OpsWorks.RegisterInstanceResult|any) => void): Request;
      registerRdsDbInstance(params: OpsWorks.RegisterRdsDbInstanceRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: any) => void): Request;
      registerVolume(params: OpsWorks.RegisterVolumeRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: OpsWorks.RegisterVolumeResult|any) => void): Request;
      setLoadBasedAutoScaling(params: OpsWorks.SetLoadBasedAutoScalingRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: any) => void): Request;
      setPermission(params: OpsWorks.SetPermissionRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: any) => void): Request;
      setTimeBasedAutoScaling(params: OpsWorks.SetTimeBasedAutoScalingRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: any) => void): Request;
      startInstance(params: OpsWorks.StartInstanceRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: any) => void): Request;
      startStack(params: OpsWorks.StartStackRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: any) => void): Request;
      stopInstance(params: OpsWorks.StopInstanceRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: any) => void): Request;
      stopStack(params: OpsWorks.StopStackRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: any) => void): Request;
      unassignInstance(params: OpsWorks.UnassignInstanceRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: any) => void): Request;
      unassignVolume(params: OpsWorks.UnassignVolumeRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: any) => void): Request;
      updateApp(params: OpsWorks.UpdateAppRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: any) => void): Request;
      updateElasticIp(params: OpsWorks.UpdateElasticIpRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: any) => void): Request;
      updateInstance(params: OpsWorks.UpdateInstanceRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: any) => void): Request;
      updateLayer(params: OpsWorks.UpdateLayerRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: any) => void): Request;
      updateMyUserProfile(params: OpsWorks.UpdateMyUserProfileRequest, callback?: (err: OpsWorks.ValidationException|any, data: any) => void): Request;
      updateRdsDbInstance(params: OpsWorks.UpdateRdsDbInstanceRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: any) => void): Request;
      updateStack(params: OpsWorks.UpdateStackRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: any) => void): Request;
      updateUserProfile(params: OpsWorks.UpdateUserProfileRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: any) => void): Request;
      updateVolume(params: OpsWorks.UpdateVolumeRequest, callback?: (err: OpsWorks.ValidationException|OpsWorks.ResourceNotFoundException|any, data: any) => void): Request;

    }

    export module OpsWorks {
        export type AgentVersions = AgentVersion[];
        export type AppAttributes = {[key:string]: String};
        export type AppAttributesKeys = string;
        export type AppType = string;
        export type Apps = App[];
        export type Architecture = string;
        export type AutoScalingType = string;
        export type BlockDeviceMappings = BlockDeviceMapping[];
        export type Boolean = boolean;
        export type Commands = Command[];
        export type DailyAutoScalingSchedule = {[key:string]: Switch};
        export type DataSources = DataSource[];
        export type DateTime = string;
        export type DeploymentCommandArgs = {[key:string]: Strings};
        export type DeploymentCommandName = string;
        export type Deployments = Deployment[];
        export type Double = number;
        export type EcsClusters = EcsCluster[];
        export type ElasticIps = ElasticIp[];
        export type ElasticLoadBalancers = ElasticLoadBalancer[];
        export type EnvironmentVariables = EnvironmentVariable[];
        export type Hour = string;
        export type Instances = Instance[];
        export type Integer = number;
        export type LayerAttributes = {[key:string]: String};
        export type LayerAttributesKeys = string;
        export type LayerType = string;
        export type Layers = Layer[];
        export type LoadBasedAutoScalingConfigurations = LoadBasedAutoScalingConfiguration[];
        export type Minute = number;    // max: 100, min: 1
        export type Parameters = {[key:string]: String};
        export type Permissions = Permission[];
        export type RaidArrays = RaidArray[];
        export type RdsDbInstances = RdsDbInstance[];
        export type RootDeviceType = string;
        export type ServiceErrors = ServiceError[];
        export type SourceType = string;
        export type StackAttributes = {[key:string]: String};
        export type StackAttributesKeys = string;
        export type Stacks = Stack[];
        export type String = string;
        export type Strings = String[];
        export type Switch = string;
        export type TimeBasedAutoScalingConfigurations = TimeBasedAutoScalingConfiguration[];
        export type UserProfiles = UserProfile[];
        export type ValidForInMinutes = number;    // max: 1440, min: 60
        export type VirtualizationType = string;
        export type VolumeConfigurations = VolumeConfiguration[];
        export type VolumeType = string;
        export type Volumes = Volume[];

        export interface AgentVersion {
            Version?: String;
            ConfigurationManager?: StackConfigurationManager;
        }
        export interface App {
            AppId?: String;
            StackId?: String;
            Shortname?: String;
            Name?: String;
            Description?: String;
            DataSources?: DataSources;
            Type?: AppType;
            AppSource?: Source;
            Domains?: Strings;
            EnableSsl?: Boolean;
            SslConfiguration?: SslConfiguration;
            Attributes?: AppAttributes;
            CreatedAt?: String;
            Environment?: EnvironmentVariables;
        }
        export interface AssignInstanceRequest {
            InstanceId: String;
            LayerIds: Strings;
        }
        export interface AssignVolumeRequest {
            VolumeId: String;
            InstanceId?: String;
        }
        export interface AssociateElasticIpRequest {
            ElasticIp: String;
            InstanceId?: String;
        }
        export interface AttachElasticLoadBalancerRequest {
            ElasticLoadBalancerName: String;
            LayerId: String;
        }
        export interface AutoScalingThresholds {
            InstanceCount?: Integer;
            ThresholdsWaitTime?: Minute;
            IgnoreMetricsTime?: Minute;
            CpuThreshold?: Double;
            MemoryThreshold?: Double;
            LoadThreshold?: Double;
            Alarms?: Strings;
        }
        export interface BlockDeviceMapping {
            DeviceName?: String;
            NoDevice?: String;
            VirtualName?: String;
            Ebs?: EbsBlockDevice;
        }
        export interface ChefConfiguration {
            ManageBerkshelf?: Boolean;
            BerkshelfVersion?: String;
        }
        export interface CloneStackRequest {
            SourceStackId: String;
            Name?: String;
            Region?: String;
            VpcId?: String;
            Attributes?: StackAttributes;
            ServiceRoleArn: String;
            DefaultInstanceProfileArn?: String;
            DefaultOs?: String;
            HostnameTheme?: String;
            DefaultAvailabilityZone?: String;
            DefaultSubnetId?: String;
            CustomJson?: String;
            ConfigurationManager?: StackConfigurationManager;
            ChefConfiguration?: ChefConfiguration;
            UseCustomCookbooks?: Boolean;
            UseOpsworksSecurityGroups?: Boolean;
            CustomCookbooksSource?: Source;
            DefaultSshKeyName?: String;
            ClonePermissions?: Boolean;
            CloneAppIds?: Strings;
            DefaultRootDeviceType?: RootDeviceType;
            AgentVersion?: String;
        }
        export interface CloneStackResult {
            StackId?: String;
        }
        export interface Command {
            CommandId?: String;
            InstanceId?: String;
            DeploymentId?: String;
            CreatedAt?: DateTime;
            AcknowledgedAt?: DateTime;
            CompletedAt?: DateTime;
            Status?: String;
            ExitCode?: Integer;
            LogUrl?: String;
            Type?: String;
        }
        export interface CreateAppRequest {
            StackId: String;
            Shortname?: String;
            Name: String;
            Description?: String;
            DataSources?: DataSources;
            Type: AppType;
            AppSource?: Source;
            Domains?: Strings;
            EnableSsl?: Boolean;
            SslConfiguration?: SslConfiguration;
            Attributes?: AppAttributes;
            Environment?: EnvironmentVariables;
        }
        export interface CreateAppResult {
            AppId?: String;
        }
        export interface CreateDeploymentRequest {
            StackId: String;
            AppId?: String;
            InstanceIds?: Strings;
            Command: DeploymentCommand;
            Comment?: String;
            CustomJson?: String;
        }
        export interface CreateDeploymentResult {
            DeploymentId?: String;
        }
        export interface CreateInstanceRequest {
            StackId: String;
            LayerIds: Strings;
            InstanceType: String;
            AutoScalingType?: AutoScalingType;
            Hostname?: String;
            Os?: String;
            AmiId?: String;
            SshKeyName?: String;
            AvailabilityZone?: String;
            VirtualizationType?: String;
            SubnetId?: String;
            Architecture?: Architecture;
            RootDeviceType?: RootDeviceType;
            BlockDeviceMappings?: BlockDeviceMappings;
            InstallUpdatesOnBoot?: Boolean;
            EbsOptimized?: Boolean;
            AgentVersion?: String;
        }
        export interface CreateInstanceResult {
            InstanceId?: String;
        }
        export interface CreateLayerRequest {
            StackId: String;
            Type: LayerType;
            Name: String;
            Shortname: String;
            Attributes?: LayerAttributes;
            CustomInstanceProfileArn?: String;
            CustomJson?: String;
            CustomSecurityGroupIds?: Strings;
            Packages?: Strings;
            VolumeConfigurations?: VolumeConfigurations;
            EnableAutoHealing?: Boolean;
            AutoAssignElasticIps?: Boolean;
            AutoAssignPublicIps?: Boolean;
            CustomRecipes?: Recipes;
            InstallUpdatesOnBoot?: Boolean;
            UseEbsOptimizedInstances?: Boolean;
            LifecycleEventConfiguration?: LifecycleEventConfiguration;
        }
        export interface CreateLayerResult {
            LayerId?: String;
        }
        export interface CreateStackRequest {
            Name: String;
            Region: String;
            VpcId?: String;
            Attributes?: StackAttributes;
            ServiceRoleArn: String;
            DefaultInstanceProfileArn: String;
            DefaultOs?: String;
            HostnameTheme?: String;
            DefaultAvailabilityZone?: String;
            DefaultSubnetId?: String;
            CustomJson?: String;
            ConfigurationManager?: StackConfigurationManager;
            ChefConfiguration?: ChefConfiguration;
            UseCustomCookbooks?: Boolean;
            UseOpsworksSecurityGroups?: Boolean;
            CustomCookbooksSource?: Source;
            DefaultSshKeyName?: String;
            DefaultRootDeviceType?: RootDeviceType;
            AgentVersion?: String;
        }
        export interface CreateStackResult {
            StackId?: String;
        }
        export interface CreateUserProfileRequest {
            IamUserArn: String;
            SshUsername?: String;
            SshPublicKey?: String;
            AllowSelfManagement?: Boolean;
        }
        export interface CreateUserProfileResult {
            IamUserArn?: String;
        }
        export interface DataSource {
            Type?: String;
            Arn?: String;
            DatabaseName?: String;
        }
        export interface DeleteAppRequest {
            AppId: String;
        }
        export interface DeleteInstanceRequest {
            InstanceId: String;
            DeleteElasticIp?: Boolean;
            DeleteVolumes?: Boolean;
        }
        export interface DeleteLayerRequest {
            LayerId: String;
        }
        export interface DeleteStackRequest {
            StackId: String;
        }
        export interface DeleteUserProfileRequest {
            IamUserArn: String;
        }
        export interface Deployment {
            DeploymentId?: String;
            StackId?: String;
            AppId?: String;
            CreatedAt?: DateTime;
            CompletedAt?: DateTime;
            Duration?: Integer;
            IamUserArn?: String;
            Comment?: String;
            Command?: DeploymentCommand;
            Status?: String;
            CustomJson?: String;
            InstanceIds?: Strings;
        }
        export interface DeploymentCommand {
            Name: DeploymentCommandName;
            Args?: DeploymentCommandArgs;
        }
        export interface DeregisterEcsClusterRequest {
            EcsClusterArn: String;
        }
        export interface DeregisterElasticIpRequest {
            ElasticIp: String;
        }
        export interface DeregisterInstanceRequest {
            InstanceId: String;
        }
        export interface DeregisterRdsDbInstanceRequest {
            RdsDbInstanceArn: String;
        }
        export interface DeregisterVolumeRequest {
            VolumeId: String;
        }
        export interface DescribeAgentVersionsRequest {
            StackId?: String;
            ConfigurationManager?: StackConfigurationManager;
        }
        export interface DescribeAgentVersionsResult {
            AgentVersions?: AgentVersions;
        }
        export interface DescribeAppsRequest {
            StackId?: String;
            AppIds?: Strings;
        }
        export interface DescribeAppsResult {
            Apps?: Apps;
        }
        export interface DescribeCommandsRequest {
            DeploymentId?: String;
            InstanceId?: String;
            CommandIds?: Strings;
        }
        export interface DescribeCommandsResult {
            Commands?: Commands;
        }
        export interface DescribeDeploymentsRequest {
            StackId?: String;
            AppId?: String;
            DeploymentIds?: Strings;
        }
        export interface DescribeDeploymentsResult {
            Deployments?: Deployments;
        }
        export interface DescribeEcsClustersRequest {
            EcsClusterArns?: Strings;
            StackId?: String;
            NextToken?: String;
            MaxResults?: Integer;
        }
        export interface DescribeEcsClustersResult {
            EcsClusters?: EcsClusters;
            NextToken?: String;
        }
        export interface DescribeElasticIpsRequest {
            InstanceId?: String;
            StackId?: String;
            Ips?: Strings;
        }
        export interface DescribeElasticIpsResult {
            ElasticIps?: ElasticIps;
        }
        export interface DescribeElasticLoadBalancersRequest {
            StackId?: String;
            LayerIds?: Strings;
        }
        export interface DescribeElasticLoadBalancersResult {
            ElasticLoadBalancers?: ElasticLoadBalancers;
        }
        export interface DescribeInstancesRequest {
            StackId?: String;
            LayerId?: String;
            InstanceIds?: Strings;
        }
        export interface DescribeInstancesResult {
            Instances?: Instances;
        }
        export interface DescribeLayersRequest {
            StackId?: String;
            LayerIds?: Strings;
        }
        export interface DescribeLayersResult {
            Layers?: Layers;
        }
        export interface DescribeLoadBasedAutoScalingRequest {
            LayerIds: Strings;
        }
        export interface DescribeLoadBasedAutoScalingResult {
            LoadBasedAutoScalingConfigurations?: LoadBasedAutoScalingConfigurations;
        }
        export interface DescribeMyUserProfileResult {
            UserProfile?: SelfUserProfile;
        }
        export interface DescribePermissionsRequest {
            IamUserArn?: String;
            StackId?: String;
        }
        export interface DescribePermissionsResult {
            Permissions?: Permissions;
        }
        export interface DescribeRaidArraysRequest {
            InstanceId?: String;
            StackId?: String;
            RaidArrayIds?: Strings;
        }
        export interface DescribeRaidArraysResult {
            RaidArrays?: RaidArrays;
        }
        export interface DescribeRdsDbInstancesRequest {
            StackId: String;
            RdsDbInstanceArns?: Strings;
        }
        export interface DescribeRdsDbInstancesResult {
            RdsDbInstances?: RdsDbInstances;
        }
        export interface DescribeServiceErrorsRequest {
            StackId?: String;
            InstanceId?: String;
            ServiceErrorIds?: Strings;
        }
        export interface DescribeServiceErrorsResult {
            ServiceErrors?: ServiceErrors;
        }
        export interface DescribeStackProvisioningParametersRequest {
            StackId: String;
        }
        export interface DescribeStackProvisioningParametersResult {
            AgentInstallerUrl?: String;
            Parameters?: Parameters;
        }
        export interface DescribeStackSummaryRequest {
            StackId: String;
        }
        export interface DescribeStackSummaryResult {
            StackSummary?: StackSummary;
        }
        export interface DescribeStacksRequest {
            StackIds?: Strings;
        }
        export interface DescribeStacksResult {
            Stacks?: Stacks;
        }
        export interface DescribeTimeBasedAutoScalingRequest {
            InstanceIds: Strings;
        }
        export interface DescribeTimeBasedAutoScalingResult {
            TimeBasedAutoScalingConfigurations?: TimeBasedAutoScalingConfigurations;
        }
        export interface DescribeUserProfilesRequest {
            IamUserArns?: Strings;
        }
        export interface DescribeUserProfilesResult {
            UserProfiles?: UserProfiles;
        }
        export interface DescribeVolumesRequest {
            InstanceId?: String;
            StackId?: String;
            RaidArrayId?: String;
            VolumeIds?: Strings;
        }
        export interface DescribeVolumesResult {
            Volumes?: Volumes;
        }
        export interface DetachElasticLoadBalancerRequest {
            ElasticLoadBalancerName: String;
            LayerId: String;
        }
        export interface DisassociateElasticIpRequest {
            ElasticIp: String;
        }
        export interface EbsBlockDevice {
            SnapshotId?: String;
            Iops?: Integer;
            VolumeSize?: Integer;
            VolumeType?: VolumeType;
            DeleteOnTermination?: Boolean;
        }
        export interface EcsCluster {
            EcsClusterArn?: String;
            EcsClusterName?: String;
            StackId?: String;
            RegisteredAt?: DateTime;
        }
        export interface ElasticIp {
            Ip?: String;
            Name?: String;
            Domain?: String;
            Region?: String;
            InstanceId?: String;
        }
        export interface ElasticLoadBalancer {
            ElasticLoadBalancerName?: String;
            Region?: String;
            DnsName?: String;
            StackId?: String;
            LayerId?: String;
            VpcId?: String;
            AvailabilityZones?: Strings;
            SubnetIds?: Strings;
            Ec2InstanceIds?: Strings;
        }
        export interface EnvironmentVariable {
            Key: String;
            Value: String;
            Secure?: Boolean;
        }
        export interface GetHostnameSuggestionRequest {
            LayerId: String;
        }
        export interface GetHostnameSuggestionResult {
            LayerId?: String;
            Hostname?: String;
        }
        export interface GrantAccessRequest {
            InstanceId: String;
            ValidForInMinutes?: ValidForInMinutes;
        }
        export interface GrantAccessResult {
            TemporaryCredential?: TemporaryCredential;
        }
        export interface Instance {
            AgentVersion?: String;
            AmiId?: String;
            Architecture?: Architecture;
            AutoScalingType?: AutoScalingType;
            AvailabilityZone?: String;
            BlockDeviceMappings?: BlockDeviceMappings;
            CreatedAt?: DateTime;
            EbsOptimized?: Boolean;
            Ec2InstanceId?: String;
            EcsClusterArn?: String;
            EcsContainerInstanceArn?: String;
            ElasticIp?: String;
            Hostname?: String;
            InfrastructureClass?: String;
            InstallUpdatesOnBoot?: Boolean;
            InstanceId?: String;
            InstanceProfileArn?: String;
            InstanceType?: String;
            LastServiceErrorId?: String;
            LayerIds?: Strings;
            Os?: String;
            Platform?: String;
            PrivateDns?: String;
            PrivateIp?: String;
            PublicDns?: String;
            PublicIp?: String;
            RegisteredBy?: String;
            ReportedAgentVersion?: String;
            ReportedOs?: ReportedOs;
            RootDeviceType?: RootDeviceType;
            RootDeviceVolumeId?: String;
            SecurityGroupIds?: Strings;
            SshHostDsaKeyFingerprint?: String;
            SshHostRsaKeyFingerprint?: String;
            SshKeyName?: String;
            StackId?: String;
            Status?: String;
            SubnetId?: String;
            VirtualizationType?: VirtualizationType;
        }
        export interface InstanceIdentity {
            Document?: String;
            Signature?: String;
        }
        export interface InstancesCount {
            Assigning?: Integer;
            Booting?: Integer;
            ConnectionLost?: Integer;
            Deregistering?: Integer;
            Online?: Integer;
            Pending?: Integer;
            Rebooting?: Integer;
            Registered?: Integer;
            Registering?: Integer;
            Requested?: Integer;
            RunningSetup?: Integer;
            SetupFailed?: Integer;
            ShuttingDown?: Integer;
            StartFailed?: Integer;
            Stopped?: Integer;
            Stopping?: Integer;
            Terminated?: Integer;
            Terminating?: Integer;
            Unassigning?: Integer;
        }
        export interface Layer {
            StackId?: String;
            LayerId?: String;
            Type?: LayerType;
            Name?: String;
            Shortname?: String;
            Attributes?: LayerAttributes;
            CustomInstanceProfileArn?: String;
            CustomJson?: String;
            CustomSecurityGroupIds?: Strings;
            DefaultSecurityGroupNames?: Strings;
            Packages?: Strings;
            VolumeConfigurations?: VolumeConfigurations;
            EnableAutoHealing?: Boolean;
            AutoAssignElasticIps?: Boolean;
            AutoAssignPublicIps?: Boolean;
            DefaultRecipes?: Recipes;
            CustomRecipes?: Recipes;
            CreatedAt?: DateTime;
            InstallUpdatesOnBoot?: Boolean;
            UseEbsOptimizedInstances?: Boolean;
            LifecycleEventConfiguration?: LifecycleEventConfiguration;
        }
        export interface LifecycleEventConfiguration {
            Shutdown?: ShutdownEventConfiguration;
        }
        export interface LoadBasedAutoScalingConfiguration {
            LayerId?: String;
            Enable?: Boolean;
            UpScaling?: AutoScalingThresholds;
            DownScaling?: AutoScalingThresholds;
        }
        export interface Permission {
            StackId?: String;
            IamUserArn?: String;
            AllowSsh?: Boolean;
            AllowSudo?: Boolean;
            Level?: String;
        }
        export interface RaidArray {
            RaidArrayId?: String;
            InstanceId?: String;
            Name?: String;
            RaidLevel?: Integer;
            NumberOfDisks?: Integer;
            Size?: Integer;
            Device?: String;
            MountPoint?: String;
            AvailabilityZone?: String;
            CreatedAt?: DateTime;
            StackId?: String;
            VolumeType?: String;
            Iops?: Integer;
        }
        export interface RdsDbInstance {
            RdsDbInstanceArn?: String;
            DbInstanceIdentifier?: String;
            DbUser?: String;
            DbPassword?: String;
            Region?: String;
            Address?: String;
            Engine?: String;
            StackId?: String;
            MissingOnRds?: Boolean;
        }
        export interface RebootInstanceRequest {
            InstanceId: String;
        }
        export interface Recipes {
            Setup?: Strings;
            Configure?: Strings;
            Deploy?: Strings;
            Undeploy?: Strings;
            Shutdown?: Strings;
        }
        export interface RegisterEcsClusterRequest {
            EcsClusterArn: String;
            StackId: String;
        }
        export interface RegisterEcsClusterResult {
            EcsClusterArn?: String;
        }
        export interface RegisterElasticIpRequest {
            ElasticIp: String;
            StackId: String;
        }
        export interface RegisterElasticIpResult {
            ElasticIp?: String;
        }
        export interface RegisterInstanceRequest {
            StackId: String;
            Hostname?: String;
            PublicIp?: String;
            PrivateIp?: String;
            RsaPublicKey?: String;
            RsaPublicKeyFingerprint?: String;
            InstanceIdentity?: InstanceIdentity;
        }
        export interface RegisterInstanceResult {
            InstanceId?: String;
        }
        export interface RegisterRdsDbInstanceRequest {
            StackId: String;
            RdsDbInstanceArn: String;
            DbUser: String;
            DbPassword: String;
        }
        export interface RegisterVolumeRequest {
            Ec2VolumeId?: String;
            StackId: String;
        }
        export interface RegisterVolumeResult {
            VolumeId?: String;
        }
        export interface ReportedOs {
            Family?: String;
            Name?: String;
            Version?: String;
        }
        export interface ResourceNotFoundException {
            message?: String;
        }
        export interface SelfUserProfile {
            IamUserArn?: String;
            Name?: String;
            SshUsername?: String;
            SshPublicKey?: String;
        }
        export interface ServiceError {
            ServiceErrorId?: String;
            StackId?: String;
            InstanceId?: String;
            Type?: String;
            Message?: String;
            CreatedAt?: DateTime;
        }
        export interface SetLoadBasedAutoScalingRequest {
            LayerId: String;
            Enable?: Boolean;
            UpScaling?: AutoScalingThresholds;
            DownScaling?: AutoScalingThresholds;
        }
        export interface SetPermissionRequest {
            StackId: String;
            IamUserArn: String;
            AllowSsh?: Boolean;
            AllowSudo?: Boolean;
            Level?: String;
        }
        export interface SetTimeBasedAutoScalingRequest {
            InstanceId: String;
            AutoScalingSchedule?: WeeklyAutoScalingSchedule;
        }
        export interface ShutdownEventConfiguration {
            ExecutionTimeout?: Integer;
            DelayUntilElbConnectionsDrained?: Boolean;
        }
        export interface Source {
            Type?: SourceType;
            Url?: String;
            Username?: String;
            Password?: String;
            SshKey?: String;
            Revision?: String;
        }
        export interface SslConfiguration {
            Certificate: String;
            PrivateKey: String;
            Chain?: String;
        }
        export interface Stack {
            StackId?: String;
            Name?: String;
            Arn?: String;
            Region?: String;
            VpcId?: String;
            Attributes?: StackAttributes;
            ServiceRoleArn?: String;
            DefaultInstanceProfileArn?: String;
            DefaultOs?: String;
            HostnameTheme?: String;
            DefaultAvailabilityZone?: String;
            DefaultSubnetId?: String;
            CustomJson?: String;
            ConfigurationManager?: StackConfigurationManager;
            ChefConfiguration?: ChefConfiguration;
            UseCustomCookbooks?: Boolean;
            UseOpsworksSecurityGroups?: Boolean;
            CustomCookbooksSource?: Source;
            DefaultSshKeyName?: String;
            CreatedAt?: DateTime;
            DefaultRootDeviceType?: RootDeviceType;
            AgentVersion?: String;
        }
        export interface StackConfigurationManager {
            Name?: String;
            Version?: String;
        }
        export interface StackSummary {
            StackId?: String;
            Name?: String;
            Arn?: String;
            LayersCount?: Integer;
            AppsCount?: Integer;
            InstancesCount?: InstancesCount;
        }
        export interface StartInstanceRequest {
            InstanceId: String;
        }
        export interface StartStackRequest {
            StackId: String;
        }
        export interface StopInstanceRequest {
            InstanceId: String;
        }
        export interface StopStackRequest {
            StackId: String;
        }
        export interface TemporaryCredential {
            Username?: String;
            Password?: String;
            ValidForInMinutes?: Integer;
            InstanceId?: String;
        }
        export interface TimeBasedAutoScalingConfiguration {
            InstanceId?: String;
            AutoScalingSchedule?: WeeklyAutoScalingSchedule;
        }
        export interface UnassignInstanceRequest {
            InstanceId: String;
        }
        export interface UnassignVolumeRequest {
            VolumeId: String;
        }
        export interface UpdateAppRequest {
            AppId: String;
            Name?: String;
            Description?: String;
            DataSources?: DataSources;
            Type?: AppType;
            AppSource?: Source;
            Domains?: Strings;
            EnableSsl?: Boolean;
            SslConfiguration?: SslConfiguration;
            Attributes?: AppAttributes;
            Environment?: EnvironmentVariables;
        }
        export interface UpdateElasticIpRequest {
            ElasticIp: String;
            Name?: String;
        }
        export interface UpdateInstanceRequest {
            InstanceId: String;
            LayerIds?: Strings;
            InstanceType?: String;
            AutoScalingType?: AutoScalingType;
            Hostname?: String;
            Os?: String;
            AmiId?: String;
            SshKeyName?: String;
            Architecture?: Architecture;
            InstallUpdatesOnBoot?: Boolean;
            EbsOptimized?: Boolean;
            AgentVersion?: String;
        }
        export interface UpdateLayerRequest {
            LayerId: String;
            Name?: String;
            Shortname?: String;
            Attributes?: LayerAttributes;
            CustomInstanceProfileArn?: String;
            CustomJson?: String;
            CustomSecurityGroupIds?: Strings;
            Packages?: Strings;
            VolumeConfigurations?: VolumeConfigurations;
            EnableAutoHealing?: Boolean;
            AutoAssignElasticIps?: Boolean;
            AutoAssignPublicIps?: Boolean;
            CustomRecipes?: Recipes;
            InstallUpdatesOnBoot?: Boolean;
            UseEbsOptimizedInstances?: Boolean;
            LifecycleEventConfiguration?: LifecycleEventConfiguration;
        }
        export interface UpdateMyUserProfileRequest {
            SshPublicKey?: String;
        }
        export interface UpdateRdsDbInstanceRequest {
            RdsDbInstanceArn: String;
            DbUser?: String;
            DbPassword?: String;
        }
        export interface UpdateStackRequest {
            StackId: String;
            Name?: String;
            Attributes?: StackAttributes;
            ServiceRoleArn?: String;
            DefaultInstanceProfileArn?: String;
            DefaultOs?: String;
            HostnameTheme?: String;
            DefaultAvailabilityZone?: String;
            DefaultSubnetId?: String;
            CustomJson?: String;
            ConfigurationManager?: StackConfigurationManager;
            ChefConfiguration?: ChefConfiguration;
            UseCustomCookbooks?: Boolean;
            CustomCookbooksSource?: Source;
            DefaultSshKeyName?: String;
            DefaultRootDeviceType?: RootDeviceType;
            UseOpsworksSecurityGroups?: Boolean;
            AgentVersion?: String;
        }
        export interface UpdateUserProfileRequest {
            IamUserArn: String;
            SshUsername?: String;
            SshPublicKey?: String;
            AllowSelfManagement?: Boolean;
        }
        export interface UpdateVolumeRequest {
            VolumeId: String;
            Name?: String;
            MountPoint?: String;
        }
        export interface UserProfile {
            IamUserArn?: String;
            Name?: String;
            SshUsername?: String;
            SshPublicKey?: String;
            AllowSelfManagement?: Boolean;
        }
        export interface ValidationException {
            message?: String;
        }
        export interface Volume {
            VolumeId?: String;
            Ec2VolumeId?: String;
            Name?: String;
            RaidArrayId?: String;
            InstanceId?: String;
            Status?: String;
            Size?: Integer;
            Device?: String;
            MountPoint?: String;
            Region?: String;
            AvailabilityZone?: String;
            VolumeType?: String;
            Iops?: Integer;
        }
        export interface VolumeConfiguration {
            MountPoint: String;
            RaidLevel?: Integer;
            NumberOfDisks: Integer;
            Size: Integer;
            VolumeType?: String;
            Iops?: Integer;
        }
        export interface WeeklyAutoScalingSchedule {
            Monday?: DailyAutoScalingSchedule;
            Tuesday?: DailyAutoScalingSchedule;
            Wednesday?: DailyAutoScalingSchedule;
            Thursday?: DailyAutoScalingSchedule;
            Friday?: DailyAutoScalingSchedule;
            Saturday?: DailyAutoScalingSchedule;
            Sunday?: DailyAutoScalingSchedule;
        }

    }
}
