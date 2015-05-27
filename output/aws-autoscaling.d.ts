// DO NOT EDIT!
//
declare module "aws-sdk" {
    export class AutoScaling {
      constructor(options?: any);
      attachInstances(params: AttachInstancesQuery, callback: (err: any, data: any) => void): void;
      completeLifecycleAction(params: CompleteLifecycleActionType, callback: (err: any, data: CompleteLifecycleActionAnswer|any) => void): void;
      createAutoScalingGroup(params: CreateAutoScalingGroupType, callback: (err: AlreadyExistsFault|LimitExceededFault|any, data: any) => void): void;
      createLaunchConfiguration(params: CreateLaunchConfigurationType, callback: (err: AlreadyExistsFault|LimitExceededFault|any, data: any) => void): void;
      createOrUpdateTags(params: CreateOrUpdateTagsType, callback: (err: LimitExceededFault|AlreadyExistsFault|any, data: any) => void): void;
      deleteAutoScalingGroup(params: DeleteAutoScalingGroupType, callback: (err: ScalingActivityInProgressFault|ResourceInUseFault|any, data: any) => void): void;
      deleteLaunchConfiguration(params: LaunchConfigurationNameType, callback: (err: ResourceInUseFault|any, data: any) => void): void;
      deleteLifecycleHook(params: DeleteLifecycleHookType, callback: (err: any, data: DeleteLifecycleHookAnswer|any) => void): void;
      deleteNotificationConfiguration(params: DeleteNotificationConfigurationType, callback: (err: any, data: any) => void): void;
      deletePolicy(params: DeletePolicyType, callback: (err: any, data: any) => void): void;
      deleteScheduledAction(params: DeleteScheduledActionType, callback: (err: any, data: any) => void): void;
      deleteTags(params: DeleteTagsType, callback: (err: any, data: any) => void): void;
      describeAccountLimits(callback: (err: any, data: DescribeAccountLimitsAnswer|any) => void): void;
      describeAdjustmentTypes(callback: (err: any, data: DescribeAdjustmentTypesAnswer|any) => void): void;
      describeAutoScalingGroups(params: AutoScalingGroupNamesType, callback: (err: InvalidNextToken|any, data: AutoScalingGroupsType|any) => void): void;
      describeAutoScalingInstances(params: DescribeAutoScalingInstancesType, callback: (err: InvalidNextToken|any, data: AutoScalingInstancesType|any) => void): void;
      describeAutoScalingNotificationTypes(callback: (err: any, data: DescribeAutoScalingNotificationTypesAnswer|any) => void): void;
      describeLaunchConfigurations(params: LaunchConfigurationNamesType, callback: (err: InvalidNextToken|any, data: LaunchConfigurationsType|any) => void): void;
      describeLifecycleHookTypes(callback: (err: any, data: DescribeLifecycleHookTypesAnswer|any) => void): void;
      describeLifecycleHooks(params: DescribeLifecycleHooksType, callback: (err: any, data: DescribeLifecycleHooksAnswer|any) => void): void;
      describeMetricCollectionTypes(callback: (err: any, data: DescribeMetricCollectionTypesAnswer|any) => void): void;
      describeNotificationConfigurations(params: DescribeNotificationConfigurationsType, callback: (err: InvalidNextToken|any, data: DescribeNotificationConfigurationsAnswer|any) => void): void;
      describePolicies(params: DescribePoliciesType, callback: (err: InvalidNextToken|any, data: PoliciesType|any) => void): void;
      describeScalingActivities(params: DescribeScalingActivitiesType, callback: (err: InvalidNextToken|any, data: ActivitiesType|any) => void): void;
      describeScalingProcessTypes(callback: (err: any, data: ProcessesType|any) => void): void;
      describeScheduledActions(params: DescribeScheduledActionsType, callback: (err: InvalidNextToken|any, data: ScheduledActionsType|any) => void): void;
      describeTags(params: DescribeTagsType, callback: (err: InvalidNextToken|any, data: TagsType|any) => void): void;
      describeTerminationPolicyTypes(callback: (err: any, data: DescribeTerminationPolicyTypesAnswer|any) => void): void;
      detachInstances(params: DetachInstancesQuery, callback: (err: any, data: DetachInstancesAnswer|any) => void): void;
      disableMetricsCollection(params: DisableMetricsCollectionQuery, callback: (err: any, data: any) => void): void;
      enableMetricsCollection(params: EnableMetricsCollectionQuery, callback: (err: any, data: any) => void): void;
      enterStandby(params: EnterStandbyQuery, callback: (err: any, data: EnterStandbyAnswer|any) => void): void;
      executePolicy(params: ExecutePolicyType, callback: (err: ScalingActivityInProgressFault|any, data: any) => void): void;
      exitStandby(params: ExitStandbyQuery, callback: (err: any, data: ExitStandbyAnswer|any) => void): void;
      putLifecycleHook(params: PutLifecycleHookType, callback: (err: LimitExceededFault|any, data: PutLifecycleHookAnswer|any) => void): void;
      putNotificationConfiguration(params: PutNotificationConfigurationType, callback: (err: LimitExceededFault|any, data: any) => void): void;
      putScalingPolicy(params: PutScalingPolicyType, callback: (err: LimitExceededFault|any, data: PolicyARNType|any) => void): void;
      putScheduledUpdateGroupAction(params: PutScheduledUpdateGroupActionType, callback: (err: AlreadyExistsFault|LimitExceededFault|any, data: any) => void): void;
      recordLifecycleActionHeartbeat(params: RecordLifecycleActionHeartbeatType, callback: (err: any, data: RecordLifecycleActionHeartbeatAnswer|any) => void): void;
      resumeProcesses(params: ScalingProcessQuery, callback: (err: any, data: any) => void): void;
      setDesiredCapacity(params: SetDesiredCapacityType, callback: (err: ScalingActivityInProgressFault|any, data: any) => void): void;
      setInstanceHealth(params: SetInstanceHealthQuery, callback: (err: any, data: any) => void): void;
      suspendProcesses(params: ScalingProcessQuery, callback: (err: any, data: any) => void): void;
      terminateInstanceInAutoScalingGroup(params: TerminateInstanceInAutoScalingGroupType, callback: (err: ScalingActivityInProgressFault|any, data: ActivityType|any) => void): void;
      updateAutoScalingGroup(params: UpdateAutoScalingGroupType, callback: (err: ScalingActivityInProgressFault|any, data: any) => void): void;
    }

    export type Activities = Array<Activity>;

    export interface ActivitiesType {
      Activities: Activities;
      NextToken?: XmlString;
    }


    export interface Activity {
      ActivityId: XmlString;
      AutoScalingGroupName: XmlStringMaxLen255;
      Description?: XmlString;
      Cause: XmlStringMaxLen1023;
      StartTime: TimestampType;
      EndTime?: TimestampType;
      StatusCode: ScalingActivityStatusCode;
      StatusMessage?: XmlStringMaxLen255;
      Progress?: Progress;
      Details?: XmlString;
    }


    export type ActivityIds = Array<XmlString>;

    export interface ActivityType {
      Activity?: Activity;
    }


    export interface AdjustmentType {
      AdjustmentType?: XmlStringMaxLen255;
    }


    export type AdjustmentTypes = Array<AdjustmentType>;

    export interface Alarm {
      AlarmName?: XmlStringMaxLen255;
      AlarmARN?: ResourceName;
    }


    export type Alarms = Array<Alarm>;

    export interface AlreadyExistsFault {
      message?: XmlStringMaxLen255;
    }


    export type AsciiStringMaxLen255 = string; // pattern: "[A-Za-z0-9\-_\/]+"

    export type AssociatePublicIpAddress = boolean;

    export interface AttachInstancesQuery {
      InstanceIds?: InstanceIds;
      AutoScalingGroupName: ResourceName;
    }


    export interface AutoScalingGroup {
      AutoScalingGroupName: XmlStringMaxLen255;
      AutoScalingGroupARN?: ResourceName;
      LaunchConfigurationName: XmlStringMaxLen255;
      MinSize: AutoScalingGroupMinSize;
      MaxSize: AutoScalingGroupMaxSize;
      DesiredCapacity: AutoScalingGroupDesiredCapacity;
      DefaultCooldown: Cooldown;
      AvailabilityZones: AvailabilityZones;
      LoadBalancerNames?: LoadBalancerNames;
      HealthCheckType: XmlStringMaxLen32;
      HealthCheckGracePeriod?: HealthCheckGracePeriod;
      Instances?: Instances;
      CreatedTime: TimestampType;
      SuspendedProcesses?: SuspendedProcesses;
      PlacementGroup?: XmlStringMaxLen255;
      VPCZoneIdentifier?: XmlStringMaxLen255;
      EnabledMetrics?: EnabledMetrics;
      Status?: XmlStringMaxLen255;
      Tags?: TagDescriptionList;
      TerminationPolicies?: TerminationPolicies;
    }


    export type AutoScalingGroupDesiredCapacity = number;

    export type AutoScalingGroupMaxSize = number;

    export type AutoScalingGroupMinSize = number;

    export type AutoScalingGroupNames = Array<ResourceName>;

    export interface AutoScalingGroupNamesType {
      AutoScalingGroupNames?: AutoScalingGroupNames;
      NextToken?: XmlString;
      MaxRecords?: MaxRecords;
    }


    export type AutoScalingGroups = Array<AutoScalingGroup>;

    export interface AutoScalingGroupsType {
      AutoScalingGroups: AutoScalingGroups;
      NextToken?: XmlString;
    }


    export interface AutoScalingInstanceDetails {
      InstanceId: XmlStringMaxLen16;
      AutoScalingGroupName: XmlStringMaxLen255;
      AvailabilityZone: XmlStringMaxLen255;
      LifecycleState: XmlStringMaxLen32;
      HealthStatus: XmlStringMaxLen32;
      LaunchConfigurationName: XmlStringMaxLen255;
    }


    export type AutoScalingInstances = Array<AutoScalingInstanceDetails>;

    export interface AutoScalingInstancesType {
      AutoScalingInstances?: AutoScalingInstances;
      NextToken?: XmlString;
    }


    export type AutoScalingNotificationTypes = Array<XmlStringMaxLen255>;

    export type AvailabilityZones = Array<XmlStringMaxLen255>;

    export type BlockDeviceEbsDeleteOnTermination = boolean;

    export type BlockDeviceEbsIops = number;

    export type BlockDeviceEbsVolumeSize = number;

    export type BlockDeviceEbsVolumeType = string;

    export interface BlockDeviceMapping {
      VirtualName?: XmlStringMaxLen255;
      DeviceName: XmlStringMaxLen255;
      Ebs?: Ebs;
      NoDevice?: NoDevice;
    }


    export type BlockDeviceMappings = Array<BlockDeviceMapping>;

    export type ClassicLinkVPCSecurityGroups = Array<XmlStringMaxLen255>;

    export interface CompleteLifecycleActionAnswer {
    }


    export interface CompleteLifecycleActionType {
      LifecycleHookName: AsciiStringMaxLen255;
      AutoScalingGroupName: ResourceName;
      LifecycleActionToken: LifecycleActionToken;
      LifecycleActionResult: LifecycleActionResult;
    }


    export type Cooldown = number;

    export interface CreateAutoScalingGroupType {
      AutoScalingGroupName: XmlStringMaxLen255;
      LaunchConfigurationName?: ResourceName;
      InstanceId?: XmlStringMaxLen16;
      MinSize: AutoScalingGroupMinSize;
      MaxSize: AutoScalingGroupMaxSize;
      DesiredCapacity?: AutoScalingGroupDesiredCapacity;
      DefaultCooldown?: Cooldown;
      AvailabilityZones?: AvailabilityZones;
      LoadBalancerNames?: LoadBalancerNames;
      HealthCheckType?: XmlStringMaxLen32;
      HealthCheckGracePeriod?: HealthCheckGracePeriod;
      PlacementGroup?: XmlStringMaxLen255;
      VPCZoneIdentifier?: XmlStringMaxLen255;
      TerminationPolicies?: TerminationPolicies;
      Tags?: Tags;
    }


    export interface CreateLaunchConfigurationType {
      LaunchConfigurationName: XmlStringMaxLen255;
      ImageId?: XmlStringMaxLen255;
      KeyName?: XmlStringMaxLen255;
      SecurityGroups?: SecurityGroups;
      ClassicLinkVPCId?: XmlStringMaxLen255;
      ClassicLinkVPCSecurityGroups?: ClassicLinkVPCSecurityGroups;
      UserData?: XmlStringUserData;
      InstanceId?: XmlStringMaxLen16;
      InstanceType?: XmlStringMaxLen255;
      KernelId?: XmlStringMaxLen255;
      RamdiskId?: XmlStringMaxLen255;
      BlockDeviceMappings?: BlockDeviceMappings;
      InstanceMonitoring?: InstanceMonitoring;
      SpotPrice?: SpotPrice;
      IamInstanceProfile?: XmlStringMaxLen1600;
      EbsOptimized?: EbsOptimized;
      AssociatePublicIpAddress?: AssociatePublicIpAddress;
      PlacementTenancy?: XmlStringMaxLen64;
    }


    export interface CreateOrUpdateTagsType {
      Tags: Tags;
    }


    export interface DeleteAutoScalingGroupType {
      AutoScalingGroupName: ResourceName;
      ForceDelete?: ForceDelete;
    }


    export interface DeleteLifecycleHookAnswer {
    }


    export interface DeleteLifecycleHookType {
      LifecycleHookName: AsciiStringMaxLen255;
      AutoScalingGroupName: ResourceName;
    }


    export interface DeleteNotificationConfigurationType {
      AutoScalingGroupName: ResourceName;
      TopicARN: ResourceName;
    }


    export interface DeletePolicyType {
      AutoScalingGroupName?: ResourceName;
      PolicyName: ResourceName;
    }


    export interface DeleteScheduledActionType {
      AutoScalingGroupName?: ResourceName;
      ScheduledActionName: ResourceName;
    }


    export interface DeleteTagsType {
      Tags: Tags;
    }


    export interface DescribeAccountLimitsAnswer {
      MaxNumberOfAutoScalingGroups?: MaxNumberOfAutoScalingGroups;
      MaxNumberOfLaunchConfigurations?: MaxNumberOfLaunchConfigurations;
    }


    export interface DescribeAdjustmentTypesAnswer {
      AdjustmentTypes?: AdjustmentTypes;
    }


    export interface DescribeAutoScalingInstancesType {
      InstanceIds?: InstanceIds;
      MaxRecords?: MaxRecords;
      NextToken?: XmlString;
    }


    export interface DescribeAutoScalingNotificationTypesAnswer {
      AutoScalingNotificationTypes?: AutoScalingNotificationTypes;
    }


    export interface DescribeLifecycleHookTypesAnswer {
      LifecycleHookTypes?: AutoScalingNotificationTypes;
    }


    export interface DescribeLifecycleHooksAnswer {
      LifecycleHooks?: LifecycleHooks;
    }


    export interface DescribeLifecycleHooksType {
      AutoScalingGroupName: ResourceName;
      LifecycleHookNames?: LifecycleHookNames;
    }


    export interface DescribeMetricCollectionTypesAnswer {
      Metrics?: MetricCollectionTypes;
      Granularities?: MetricGranularityTypes;
    }


    export interface DescribeNotificationConfigurationsAnswer {
      NotificationConfigurations: NotificationConfigurations;
      NextToken?: XmlString;
    }


    export interface DescribeNotificationConfigurationsType {
      AutoScalingGroupNames?: AutoScalingGroupNames;
      NextToken?: XmlString;
      MaxRecords?: MaxRecords;
    }


    export interface DescribePoliciesType {
      AutoScalingGroupName?: ResourceName;
      PolicyNames?: PolicyNames;
      NextToken?: XmlString;
      MaxRecords?: MaxRecords;
    }


    export interface DescribeScalingActivitiesType {
      ActivityIds?: ActivityIds;
      AutoScalingGroupName?: ResourceName;
      MaxRecords?: MaxRecords;
      NextToken?: XmlString;
    }


    export interface DescribeScheduledActionsType {
      AutoScalingGroupName?: ResourceName;
      ScheduledActionNames?: ScheduledActionNames;
      StartTime?: TimestampType;
      EndTime?: TimestampType;
      NextToken?: XmlString;
      MaxRecords?: MaxRecords;
    }


    export interface DescribeTagsType {
      Filters?: Filters;
      NextToken?: XmlString;
      MaxRecords?: MaxRecords;
    }


    export interface DescribeTerminationPolicyTypesAnswer {
      TerminationPolicyTypes?: TerminationPolicies;
    }


    export interface DetachInstancesAnswer {
      Activities?: Activities;
    }


    export interface DetachInstancesQuery {
      InstanceIds?: InstanceIds;
      AutoScalingGroupName: ResourceName;
      ShouldDecrementDesiredCapacity: ShouldDecrementDesiredCapacity;
    }


    export interface DisableMetricsCollectionQuery {
      AutoScalingGroupName: ResourceName;
      Metrics?: Metrics;
    }


    export interface Ebs {
      SnapshotId?: XmlStringMaxLen255;
      VolumeSize?: BlockDeviceEbsVolumeSize;
      VolumeType?: BlockDeviceEbsVolumeType;
      DeleteOnTermination?: BlockDeviceEbsDeleteOnTermination;
      Iops?: BlockDeviceEbsIops;
    }


    export type EbsOptimized = boolean;

    export interface EnableMetricsCollectionQuery {
      AutoScalingGroupName: ResourceName;
      Metrics?: Metrics;
      Granularity: XmlStringMaxLen255;
    }


    export interface EnabledMetric {
      Metric?: XmlStringMaxLen255;
      Granularity?: XmlStringMaxLen255;
    }


    export type EnabledMetrics = Array<EnabledMetric>;

    export interface EnterStandbyAnswer {
      Activities?: Activities;
    }


    export interface EnterStandbyQuery {
      InstanceIds?: InstanceIds;
      AutoScalingGroupName: ResourceName;
      ShouldDecrementDesiredCapacity: ShouldDecrementDesiredCapacity;
    }


    export interface ExecutePolicyType {
      AutoScalingGroupName?: ResourceName;
      PolicyName: ResourceName;
      HonorCooldown?: HonorCooldown;
    }


    export interface ExitStandbyAnswer {
      Activities?: Activities;
    }


    export interface ExitStandbyQuery {
      InstanceIds?: InstanceIds;
      AutoScalingGroupName: ResourceName;
    }


    export interface Filter {
      Name?: XmlString;
      Values?: Values;
    }


    export type Filters = Array<Filter>;

    export type ForceDelete = boolean;

    export type GlobalTimeout = number;

    export type HealthCheckGracePeriod = number;

    export type HeartbeatTimeout = number;

    export type HonorCooldown = boolean;

    export interface Instance {
      InstanceId: XmlStringMaxLen16;
      AvailabilityZone: XmlStringMaxLen255;
      LifecycleState: LifecycleState;
      HealthStatus: XmlStringMaxLen32;
      LaunchConfigurationName: XmlStringMaxLen255;
    }


    export type InstanceIds = Array<XmlStringMaxLen16>;

    export interface InstanceMonitoring {
      Enabled?: MonitoringEnabled;
    }


    export type Instances = Array<Instance>;

    export interface InvalidNextToken {
      message?: XmlStringMaxLen255;
    }


    export interface LaunchConfiguration {
      LaunchConfigurationName: XmlStringMaxLen255;
      LaunchConfigurationARN?: ResourceName;
      ImageId: XmlStringMaxLen255;
      KeyName?: XmlStringMaxLen255;
      SecurityGroups?: SecurityGroups;
      ClassicLinkVPCId?: XmlStringMaxLen255;
      ClassicLinkVPCSecurityGroups?: ClassicLinkVPCSecurityGroups;
      UserData?: XmlStringUserData;
      InstanceType: XmlStringMaxLen255;
      KernelId?: XmlStringMaxLen255;
      RamdiskId?: XmlStringMaxLen255;
      BlockDeviceMappings?: BlockDeviceMappings;
      InstanceMonitoring?: InstanceMonitoring;
      SpotPrice?: SpotPrice;
      IamInstanceProfile?: XmlStringMaxLen1600;
      CreatedTime: TimestampType;
      EbsOptimized?: EbsOptimized;
      AssociatePublicIpAddress?: AssociatePublicIpAddress;
      PlacementTenancy?: XmlStringMaxLen64;
    }


    export interface LaunchConfigurationNameType {
      LaunchConfigurationName: ResourceName;
    }


    export type LaunchConfigurationNames = Array<ResourceName>;

    export interface LaunchConfigurationNamesType {
      LaunchConfigurationNames?: LaunchConfigurationNames;
      NextToken?: XmlString;
      MaxRecords?: MaxRecords;
    }


    export type LaunchConfigurations = Array<LaunchConfiguration>;

    export interface LaunchConfigurationsType {
      LaunchConfigurations: LaunchConfigurations;
      NextToken?: XmlString;
    }


    export type LifecycleActionResult = string;

    export type LifecycleActionToken = string;

    export interface LifecycleHook {
      LifecycleHookName?: AsciiStringMaxLen255;
      AutoScalingGroupName?: ResourceName;
      LifecycleTransition?: LifecycleTransition;
      NotificationTargetARN?: ResourceName;
      RoleARN?: ResourceName;
      NotificationMetadata?: XmlStringMaxLen1023;
      HeartbeatTimeout?: HeartbeatTimeout;
      GlobalTimeout?: GlobalTimeout;
      DefaultResult?: LifecycleActionResult;
    }


    export type LifecycleHookNames = Array<AsciiStringMaxLen255>;

    export type LifecycleHooks = Array<LifecycleHook>;

    export type LifecycleState = string;

    export type LifecycleTransition = string;

    export interface LimitExceededFault {
      message?: XmlStringMaxLen255;
    }


    export type LoadBalancerNames = Array<XmlStringMaxLen255>;

    export type MaxNumberOfAutoScalingGroups = number;

    export type MaxNumberOfLaunchConfigurations = number;

    export type MaxRecords = number;

    export interface MetricCollectionType {
      Metric?: XmlStringMaxLen255;
    }


    export type MetricCollectionTypes = Array<MetricCollectionType>;

    export interface MetricGranularityType {
      Granularity?: XmlStringMaxLen255;
    }


    export type MetricGranularityTypes = Array<MetricGranularityType>;

    export type Metrics = Array<XmlStringMaxLen255>;

    export type MinAdjustmentStep = number;

    export type MonitoringEnabled = boolean;

    export type NoDevice = boolean;

    export interface NotificationConfiguration {
      AutoScalingGroupName?: ResourceName;
      TopicARN?: ResourceName;
      NotificationType?: XmlStringMaxLen255;
    }


    export type NotificationConfigurations = Array<NotificationConfiguration>;

    export interface PoliciesType {
      ScalingPolicies?: ScalingPolicies;
      NextToken?: XmlString;
    }


    export interface PolicyARNType {
      PolicyARN?: ResourceName;
    }


    export type PolicyIncrement = number;

    export type PolicyNames = Array<ResourceName>;

    export type ProcessNames = Array<XmlStringMaxLen255>;

    export interface ProcessType {
      ProcessName: XmlStringMaxLen255;
    }


    export type Processes = Array<ProcessType>;

    export interface ProcessesType {
      Processes?: Processes;
    }


    export type Progress = number;

    export type PropagateAtLaunch = boolean;

    export interface PutLifecycleHookAnswer {
    }


    export interface PutLifecycleHookType {
      LifecycleHookName: AsciiStringMaxLen255;
      AutoScalingGroupName: ResourceName;
      LifecycleTransition?: LifecycleTransition;
      RoleARN?: ResourceName;
      NotificationTargetARN?: ResourceName;
      NotificationMetadata?: XmlStringMaxLen1023;
      HeartbeatTimeout?: HeartbeatTimeout;
      DefaultResult?: LifecycleActionResult;
    }


    export interface PutNotificationConfigurationType {
      AutoScalingGroupName: ResourceName;
      TopicARN: ResourceName;
      NotificationTypes: AutoScalingNotificationTypes;
    }


    export interface PutScalingPolicyType {
      AutoScalingGroupName: ResourceName;
      PolicyName: XmlStringMaxLen255;
      ScalingAdjustment: PolicyIncrement;
      AdjustmentType: XmlStringMaxLen255;
      Cooldown?: Cooldown;
      MinAdjustmentStep?: MinAdjustmentStep;
    }


    export interface PutScheduledUpdateGroupActionType {
      AutoScalingGroupName: ResourceName;
      ScheduledActionName: XmlStringMaxLen255;
      Time?: TimestampType;
      StartTime?: TimestampType;
      EndTime?: TimestampType;
      Recurrence?: XmlStringMaxLen255;
      MinSize?: AutoScalingGroupMinSize;
      MaxSize?: AutoScalingGroupMaxSize;
      DesiredCapacity?: AutoScalingGroupDesiredCapacity;
    }


    export interface RecordLifecycleActionHeartbeatAnswer {
    }


    export interface RecordLifecycleActionHeartbeatType {
      LifecycleHookName: AsciiStringMaxLen255;
      AutoScalingGroupName: ResourceName;
      LifecycleActionToken: LifecycleActionToken;
    }


    export interface ResourceInUseFault {
      message?: XmlStringMaxLen255;
    }


    export type ResourceName = string; // pattern: "[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*"

    export interface ScalingActivityInProgressFault {
      message?: XmlStringMaxLen255;
    }


    export type ScalingActivityStatusCode = string;

    export type ScalingPolicies = Array<ScalingPolicy>;

    export interface ScalingPolicy {
      AutoScalingGroupName?: XmlStringMaxLen255;
      PolicyName?: XmlStringMaxLen255;
      ScalingAdjustment?: PolicyIncrement;
      AdjustmentType?: XmlStringMaxLen255;
      Cooldown?: Cooldown;
      PolicyARN?: ResourceName;
      Alarms?: Alarms;
      MinAdjustmentStep?: MinAdjustmentStep;
    }


    export interface ScalingProcessQuery {
      AutoScalingGroupName: ResourceName;
      ScalingProcesses?: ProcessNames;
    }


    export type ScheduledActionNames = Array<ResourceName>;

    export interface ScheduledActionsType {
      ScheduledUpdateGroupActions?: ScheduledUpdateGroupActions;
      NextToken?: XmlString;
    }


    export interface ScheduledUpdateGroupAction {
      AutoScalingGroupName?: XmlStringMaxLen255;
      ScheduledActionName?: XmlStringMaxLen255;
      ScheduledActionARN?: ResourceName;
      Time?: TimestampType;
      StartTime?: TimestampType;
      EndTime?: TimestampType;
      Recurrence?: XmlStringMaxLen255;
      MinSize?: AutoScalingGroupMinSize;
      MaxSize?: AutoScalingGroupMaxSize;
      DesiredCapacity?: AutoScalingGroupDesiredCapacity;
    }


    export type ScheduledUpdateGroupActions = Array<ScheduledUpdateGroupAction>;

    export type SecurityGroups = Array<XmlString>;

    export interface SetDesiredCapacityType {
      AutoScalingGroupName: ResourceName;
      DesiredCapacity: AutoScalingGroupDesiredCapacity;
      HonorCooldown?: HonorCooldown;
    }


    export interface SetInstanceHealthQuery {
      InstanceId: XmlStringMaxLen16;
      HealthStatus: XmlStringMaxLen32;
      ShouldRespectGracePeriod?: ShouldRespectGracePeriod;
    }


    export type ShouldDecrementDesiredCapacity = boolean;

    export type ShouldRespectGracePeriod = boolean;

    export type SpotPrice = string;

    export interface SuspendedProcess {
      ProcessName?: XmlStringMaxLen255;
      SuspensionReason?: XmlStringMaxLen255;
    }


    export type SuspendedProcesses = Array<SuspendedProcess>;

    export interface Tag {
      ResourceId?: XmlString;
      ResourceType?: XmlString;
      Key: TagKey;
      Value?: TagValue;
      PropagateAtLaunch?: PropagateAtLaunch;
    }


    export interface TagDescription {
      ResourceId?: XmlString;
      ResourceType?: XmlString;
      Key?: TagKey;
      Value?: TagValue;
      PropagateAtLaunch?: PropagateAtLaunch;
    }


    export type TagDescriptionList = Array<TagDescription>;

    export type TagKey = string; // pattern: "[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*"

    export type TagValue = string; // pattern: "[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*"

    export type Tags = Array<Tag>;

    export interface TagsType {
      Tags?: TagDescriptionList;
      NextToken?: XmlString;
    }


    export interface TerminateInstanceInAutoScalingGroupType {
      InstanceId: XmlStringMaxLen16;
      ShouldDecrementDesiredCapacity: ShouldDecrementDesiredCapacity;
    }


    export type TerminationPolicies = Array<XmlStringMaxLen1600>;

    export type TimestampType = number;

    export interface UpdateAutoScalingGroupType {
      AutoScalingGroupName: ResourceName;
      LaunchConfigurationName?: ResourceName;
      MinSize?: AutoScalingGroupMinSize;
      MaxSize?: AutoScalingGroupMaxSize;
      DesiredCapacity?: AutoScalingGroupDesiredCapacity;
      DefaultCooldown?: Cooldown;
      AvailabilityZones?: AvailabilityZones;
      HealthCheckType?: XmlStringMaxLen32;
      HealthCheckGracePeriod?: HealthCheckGracePeriod;
      PlacementGroup?: XmlStringMaxLen255;
      VPCZoneIdentifier?: XmlStringMaxLen255;
      TerminationPolicies?: TerminationPolicies;
    }


    export type Values = Array<XmlString>;

    export type XmlString = string; // pattern: "[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*"

    export type XmlStringMaxLen1023 = string; // pattern: "[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*"

    export type XmlStringMaxLen16 = string; // pattern: "[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*"

    export type XmlStringMaxLen1600 = string; // pattern: "[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*"

    export type XmlStringMaxLen255 = string; // pattern: "[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*"

    export type XmlStringMaxLen32 = string; // pattern: "[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*"

    export type XmlStringMaxLen64 = string; // pattern: "[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*"

    export type XmlStringUserData = string; // pattern: "[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*"

}
