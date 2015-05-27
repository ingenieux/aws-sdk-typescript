// DO NOT EDIT!
//
declare module "aws-sdk" {
    export class OpsWorks {
      constructor(options?: any);
      assignInstance(params: AssignInstanceRequest, callback: (err: ValidationException|ResourceNotFoundException|any, data: any) => void): void;
      assignVolume(params: AssignVolumeRequest, callback: (err: ValidationException|ResourceNotFoundException|any, data: any) => void): void;
      associateElasticIp(params: AssociateElasticIpRequest, callback: (err: ValidationException|ResourceNotFoundException|any, data: any) => void): void;
      attachElasticLoadBalancer(params: AttachElasticLoadBalancerRequest, callback: (err: ValidationException|ResourceNotFoundException|any, data: any) => void): void;
      cloneStack(params: CloneStackRequest, callback: (err: ValidationException|ResourceNotFoundException|any, data: CloneStackResult|any) => void): void;
      createApp(params: CreateAppRequest, callback: (err: ValidationException|ResourceNotFoundException|any, data: CreateAppResult|any) => void): void;
      createDeployment(params: CreateDeploymentRequest, callback: (err: ValidationException|ResourceNotFoundException|any, data: CreateDeploymentResult|any) => void): void;
      createInstance(params: CreateInstanceRequest, callback: (err: ValidationException|ResourceNotFoundException|any, data: CreateInstanceResult|any) => void): void;
      createLayer(params: CreateLayerRequest, callback: (err: ValidationException|ResourceNotFoundException|any, data: CreateLayerResult|any) => void): void;
      createStack(params: CreateStackRequest, callback: (err: ValidationException|any, data: CreateStackResult|any) => void): void;
      createUserProfile(params: CreateUserProfileRequest, callback: (err: ValidationException|any, data: CreateUserProfileResult|any) => void): void;
      deleteApp(params: DeleteAppRequest, callback: (err: ValidationException|ResourceNotFoundException|any, data: any) => void): void;
      deleteInstance(params: DeleteInstanceRequest, callback: (err: ValidationException|ResourceNotFoundException|any, data: any) => void): void;
      deleteLayer(params: DeleteLayerRequest, callback: (err: ValidationException|ResourceNotFoundException|any, data: any) => void): void;
      deleteStack(params: DeleteStackRequest, callback: (err: ValidationException|ResourceNotFoundException|any, data: any) => void): void;
      deleteUserProfile(params: DeleteUserProfileRequest, callback: (err: ValidationException|ResourceNotFoundException|any, data: any) => void): void;
      deregisterElasticIp(params: DeregisterElasticIpRequest, callback: (err: ValidationException|ResourceNotFoundException|any, data: any) => void): void;
      deregisterInstance(params: DeregisterInstanceRequest, callback: (err: ValidationException|ResourceNotFoundException|any, data: any) => void): void;
      deregisterRdsDbInstance(params: DeregisterRdsDbInstanceRequest, callback: (err: ValidationException|ResourceNotFoundException|any, data: any) => void): void;
      deregisterVolume(params: DeregisterVolumeRequest, callback: (err: ValidationException|ResourceNotFoundException|any, data: any) => void): void;
      describeApps(params: DescribeAppsRequest, callback: (err: ValidationException|ResourceNotFoundException|any, data: DescribeAppsResult|any) => void): void;
      describeCommands(params: DescribeCommandsRequest, callback: (err: ValidationException|ResourceNotFoundException|any, data: DescribeCommandsResult|any) => void): void;
      describeDeployments(params: DescribeDeploymentsRequest, callback: (err: ValidationException|ResourceNotFoundException|any, data: DescribeDeploymentsResult|any) => void): void;
      describeElasticIps(params: DescribeElasticIpsRequest, callback: (err: ValidationException|ResourceNotFoundException|any, data: DescribeElasticIpsResult|any) => void): void;
      describeElasticLoadBalancers(params: DescribeElasticLoadBalancersRequest, callback: (err: ValidationException|ResourceNotFoundException|any, data: DescribeElasticLoadBalancersResult|any) => void): void;
      describeInstances(params: DescribeInstancesRequest, callback: (err: ValidationException|ResourceNotFoundException|any, data: DescribeInstancesResult|any) => void): void;
      describeLayers(params: DescribeLayersRequest, callback: (err: ValidationException|ResourceNotFoundException|any, data: DescribeLayersResult|any) => void): void;
      describeLoadBasedAutoScaling(params: DescribeLoadBasedAutoScalingRequest, callback: (err: ValidationException|ResourceNotFoundException|any, data: DescribeLoadBasedAutoScalingResult|any) => void): void;
      describeMyUserProfile(callback: (err: any, data: DescribeMyUserProfileResult|any) => void): void;
      describePermissions(params: DescribePermissionsRequest, callback: (err: ValidationException|ResourceNotFoundException|any, data: DescribePermissionsResult|any) => void): void;
      describeRaidArrays(params: DescribeRaidArraysRequest, callback: (err: ValidationException|ResourceNotFoundException|any, data: DescribeRaidArraysResult|any) => void): void;
      describeRdsDbInstances(params: DescribeRdsDbInstancesRequest, callback: (err: ValidationException|ResourceNotFoundException|any, data: DescribeRdsDbInstancesResult|any) => void): void;
      describeServiceErrors(params: DescribeServiceErrorsRequest, callback: (err: ValidationException|ResourceNotFoundException|any, data: DescribeServiceErrorsResult|any) => void): void;
      describeStackProvisioningParameters(params: DescribeStackProvisioningParametersRequest, callback: (err: ValidationException|ResourceNotFoundException|any, data: DescribeStackProvisioningParametersResult|any) => void): void;
      describeStackSummary(params: DescribeStackSummaryRequest, callback: (err: ValidationException|ResourceNotFoundException|any, data: DescribeStackSummaryResult|any) => void): void;
      describeStacks(params: DescribeStacksRequest, callback: (err: ValidationException|ResourceNotFoundException|any, data: DescribeStacksResult|any) => void): void;
      describeTimeBasedAutoScaling(params: DescribeTimeBasedAutoScalingRequest, callback: (err: ValidationException|ResourceNotFoundException|any, data: DescribeTimeBasedAutoScalingResult|any) => void): void;
      describeUserProfiles(params: DescribeUserProfilesRequest, callback: (err: ValidationException|ResourceNotFoundException|any, data: DescribeUserProfilesResult|any) => void): void;
      describeVolumes(params: DescribeVolumesRequest, callback: (err: ValidationException|ResourceNotFoundException|any, data: DescribeVolumesResult|any) => void): void;
      detachElasticLoadBalancer(params: DetachElasticLoadBalancerRequest, callback: (err: ResourceNotFoundException|any, data: any) => void): void;
      disassociateElasticIp(params: DisassociateElasticIpRequest, callback: (err: ValidationException|ResourceNotFoundException|any, data: any) => void): void;
      getHostnameSuggestion(params: GetHostnameSuggestionRequest, callback: (err: ValidationException|ResourceNotFoundException|any, data: GetHostnameSuggestionResult|any) => void): void;
      grantAccess(params: GrantAccessRequest, callback: (err: ValidationException|ResourceNotFoundException|any, data: GrantAccessResult|any) => void): void;
      rebootInstance(params: RebootInstanceRequest, callback: (err: ValidationException|ResourceNotFoundException|any, data: any) => void): void;
      registerElasticIp(params: RegisterElasticIpRequest, callback: (err: ValidationException|ResourceNotFoundException|any, data: RegisterElasticIpResult|any) => void): void;
      registerInstance(params: RegisterInstanceRequest, callback: (err: ValidationException|ResourceNotFoundException|any, data: RegisterInstanceResult|any) => void): void;
      registerRdsDbInstance(params: RegisterRdsDbInstanceRequest, callback: (err: ValidationException|ResourceNotFoundException|any, data: any) => void): void;
      registerVolume(params: RegisterVolumeRequest, callback: (err: ValidationException|ResourceNotFoundException|any, data: RegisterVolumeResult|any) => void): void;
      setLoadBasedAutoScaling(params: SetLoadBasedAutoScalingRequest, callback: (err: ValidationException|ResourceNotFoundException|any, data: any) => void): void;
      setPermission(params: SetPermissionRequest, callback: (err: ValidationException|ResourceNotFoundException|any, data: any) => void): void;
      setTimeBasedAutoScaling(params: SetTimeBasedAutoScalingRequest, callback: (err: ValidationException|ResourceNotFoundException|any, data: any) => void): void;
      startInstance(params: StartInstanceRequest, callback: (err: ValidationException|ResourceNotFoundException|any, data: any) => void): void;
      startStack(params: StartStackRequest, callback: (err: ValidationException|ResourceNotFoundException|any, data: any) => void): void;
      stopInstance(params: StopInstanceRequest, callback: (err: ValidationException|ResourceNotFoundException|any, data: any) => void): void;
      stopStack(params: StopStackRequest, callback: (err: ValidationException|ResourceNotFoundException|any, data: any) => void): void;
      unassignInstance(params: UnassignInstanceRequest, callback: (err: ValidationException|ResourceNotFoundException|any, data: any) => void): void;
      unassignVolume(params: UnassignVolumeRequest, callback: (err: ValidationException|ResourceNotFoundException|any, data: any) => void): void;
      updateApp(params: UpdateAppRequest, callback: (err: ValidationException|ResourceNotFoundException|any, data: any) => void): void;
      updateElasticIp(params: UpdateElasticIpRequest, callback: (err: ValidationException|ResourceNotFoundException|any, data: any) => void): void;
      updateInstance(params: UpdateInstanceRequest, callback: (err: ValidationException|ResourceNotFoundException|any, data: any) => void): void;
      updateLayer(params: UpdateLayerRequest, callback: (err: ValidationException|ResourceNotFoundException|any, data: any) => void): void;
      updateMyUserProfile(params: UpdateMyUserProfileRequest, callback: (err: ValidationException|any, data: any) => void): void;
      updateRdsDbInstance(params: UpdateRdsDbInstanceRequest, callback: (err: ValidationException|ResourceNotFoundException|any, data: any) => void): void;
      updateStack(params: UpdateStackRequest, callback: (err: ValidationException|ResourceNotFoundException|any, data: any) => void): void;
      updateUserProfile(params: UpdateUserProfileRequest, callback: (err: ValidationException|ResourceNotFoundException|any, data: any) => void): void;
      updateVolume(params: UpdateVolumeRequest, callback: (err: ValidationException|ResourceNotFoundException|any, data: any) => void): void;
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


    export type AppAttributes = any; // not really - it was 'map' instead - must fix this one

    export type AppAttributesKeys = string;

    export type AppType = string;

    export type Apps = Array<App>;

    export type Architecture = string;

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


    export type AutoScalingType = string;

    export interface BlockDeviceMapping {
      DeviceName?: String;
      NoDevice?: String;
      VirtualName?: String;
      Ebs?: EbsBlockDevice;
    }


    export type BlockDeviceMappings = Array<BlockDeviceMapping>;

    export type Boolean = boolean;

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


    export type Commands = Array<Command>;

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


    export type DailyAutoScalingSchedule = any; // not really - it was 'map' instead - must fix this one

    export interface DataSource {
      Type?: String;
      Arn?: String;
      DatabaseName?: String;
    }


    export type DataSources = Array<DataSource>;

    export type DateTime = string;

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


    export type DeploymentCommandArgs = any; // not really - it was 'map' instead - must fix this one

    export type DeploymentCommandName = string;

    export type Deployments = Array<Deployment>;

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


    export type Double = number;

    export interface EbsBlockDevice {
      SnapshotId?: String;
      Iops?: Integer;
      VolumeSize?: Integer;
      VolumeType?: VolumeType;
      DeleteOnTermination?: Boolean;
    }


    export interface ElasticIp {
      Ip?: String;
      Name?: String;
      Domain?: String;
      Region?: String;
      InstanceId?: String;
    }


    export type ElasticIps = Array<ElasticIp>;

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


    export type ElasticLoadBalancers = Array<ElasticLoadBalancer>;

    export interface EnvironmentVariable {
      Key: String;
      Value: String;
      Secure?: Boolean;
    }


    export type EnvironmentVariables = Array<EnvironmentVariable>;

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


    export type Hour = string;

    export interface Instance {
      InstanceId?: String;
      Ec2InstanceId?: String;
      VirtualizationType?: VirtualizationType;
      Hostname?: String;
      StackId?: String;
      LayerIds?: Strings;
      SecurityGroupIds?: Strings;
      InstanceType?: String;
      InstanceProfileArn?: String;
      Status?: String;
      Os?: String;
      AmiId?: String;
      AvailabilityZone?: String;
      SubnetId?: String;
      PublicDns?: String;
      PrivateDns?: String;
      PublicIp?: String;
      PrivateIp?: String;
      ElasticIp?: String;
      AutoScalingType?: AutoScalingType;
      SshKeyName?: String;
      SshHostRsaKeyFingerprint?: String;
      SshHostDsaKeyFingerprint?: String;
      CreatedAt?: DateTime;
      LastServiceErrorId?: String;
      Architecture?: Architecture;
      RootDeviceType?: RootDeviceType;
      RootDeviceVolumeId?: String;
      BlockDeviceMappings?: BlockDeviceMappings;
      InstallUpdatesOnBoot?: Boolean;
      EbsOptimized?: Boolean;
      ReportedAgentVersion?: String;
      ReportedOs?: ReportedOs;
      InfrastructureClass?: String;
      RegisteredBy?: String;
    }


    export interface InstanceIdentity {
      Document?: String;
      Signature?: String;
    }


    export type Instances = Array<Instance>;

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


    export type Integer = number;

    export interface Layer {
      StackId?: String;
      LayerId?: String;
      Type?: LayerType;
      Name?: String;
      Shortname?: String;
      Attributes?: LayerAttributes;
      CustomInstanceProfileArn?: String;
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


    export type LayerAttributes = any; // not really - it was 'map' instead - must fix this one

    export type LayerAttributesKeys = string;

    export type LayerType = string;

    export type Layers = Array<Layer>;

    export interface LifecycleEventConfiguration {
      Shutdown?: ShutdownEventConfiguration;
    }


    export interface LoadBasedAutoScalingConfiguration {
      LayerId?: String;
      Enable?: Boolean;
      UpScaling?: AutoScalingThresholds;
      DownScaling?: AutoScalingThresholds;
    }


    export type LoadBasedAutoScalingConfigurations = Array<LoadBasedAutoScalingConfiguration>;

    export type Minute = number;

    export type Parameters = any; // not really - it was 'map' instead - must fix this one

    export interface Permission {
      StackId?: String;
      IamUserArn?: String;
      AllowSsh?: Boolean;
      AllowSudo?: Boolean;
      Level?: String;
    }


    export type Permissions = Array<Permission>;

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


    export type RaidArrays = Array<RaidArray>;

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


    export type RdsDbInstances = Array<RdsDbInstance>;

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


    export type RootDeviceType = string;

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


    export type ServiceErrors = Array<ServiceError>;

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


    export type SourceType = string;

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
    }


    export type StackAttributes = any; // not really - it was 'map' instead - must fix this one

    export type StackAttributesKeys = string;

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


    export type Stacks = Array<Stack>;

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


    export type String = string;

    export type Strings = Array<String>;

    export type Switch = string;

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


    export type TimeBasedAutoScalingConfigurations = Array<TimeBasedAutoScalingConfiguration>;

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
    }


    export interface UpdateLayerRequest {
      LayerId: String;
      Name?: String;
      Shortname?: String;
      Attributes?: LayerAttributes;
      CustomInstanceProfileArn?: String;
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


    export type UserProfiles = Array<UserProfile>;

    export type ValidForInMinutes = number;

    export interface ValidationException {
      message?: String;
    }


    export type VirtualizationType = string;

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


    export type VolumeConfigurations = Array<VolumeConfiguration>;

    export type VolumeType = string;

    export type Volumes = Array<Volume>;

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
