// Type definitions for aws-sdk - Auto Scaling
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

///<reference path="./aws-sdk-common.d.ts" />

declare module "aws-sdk" {

    /*
     * apiVersion: 2011-01-01
     * endpointPrefix: autoscaling
     * serviceAbbreviation: 
     * signatureVersion: v4
     * protocol: query
     */
    export class AutoScaling extends Service {
      constructor(options?: any);
      endpoint: Endpoint;
      attachInstances(params: AutoScaling.AttachInstancesQuery, callback?: (err: AutoScaling.ResourceContentionFault|any, data: any) => void): Request;
      attachLoadBalancers(params: AutoScaling.AttachLoadBalancersType, callback?: (err: AutoScaling.ResourceContentionFault|any, data: AutoScaling.AttachLoadBalancersResultType|any) => void): Request;
      completeLifecycleAction(params: AutoScaling.CompleteLifecycleActionType, callback?: (err: AutoScaling.ResourceContentionFault|any, data: AutoScaling.CompleteLifecycleActionAnswer|any) => void): Request;
      createAutoScalingGroup(params: AutoScaling.CreateAutoScalingGroupType, callback?: (err: AutoScaling.AlreadyExistsFault|AutoScaling.LimitExceededFault|AutoScaling.ResourceContentionFault|any, data: any) => void): Request;
      createLaunchConfiguration(params: AutoScaling.CreateLaunchConfigurationType, callback?: (err: AutoScaling.AlreadyExistsFault|AutoScaling.LimitExceededFault|AutoScaling.ResourceContentionFault|any, data: any) => void): Request;
      createOrUpdateTags(params: AutoScaling.CreateOrUpdateTagsType, callback?: (err: AutoScaling.LimitExceededFault|AutoScaling.AlreadyExistsFault|AutoScaling.ResourceContentionFault|any, data: any) => void): Request;
      deleteAutoScalingGroup(params: AutoScaling.DeleteAutoScalingGroupType, callback?: (err: AutoScaling.ScalingActivityInProgressFault|AutoScaling.ResourceInUseFault|AutoScaling.ResourceContentionFault|any, data: any) => void): Request;
      deleteLaunchConfiguration(params: AutoScaling.LaunchConfigurationNameType, callback?: (err: AutoScaling.ResourceInUseFault|AutoScaling.ResourceContentionFault|any, data: any) => void): Request;
      deleteLifecycleHook(params: AutoScaling.DeleteLifecycleHookType, callback?: (err: AutoScaling.ResourceContentionFault|any, data: AutoScaling.DeleteLifecycleHookAnswer|any) => void): Request;
      deleteNotificationConfiguration(params: AutoScaling.DeleteNotificationConfigurationType, callback?: (err: AutoScaling.ResourceContentionFault|any, data: any) => void): Request;
      deletePolicy(params: AutoScaling.DeletePolicyType, callback?: (err: AutoScaling.ResourceContentionFault|any, data: any) => void): Request;
      deleteScheduledAction(params: AutoScaling.DeleteScheduledActionType, callback?: (err: AutoScaling.ResourceContentionFault|any, data: any) => void): Request;
      deleteTags(params: AutoScaling.DeleteTagsType, callback?: (err: AutoScaling.ResourceContentionFault|any, data: any) => void): Request;
      describeAccountLimits(callback?: (err: AutoScaling.ResourceContentionFault|any, data: AutoScaling.DescribeAccountLimitsAnswer|any) => void): Request;
      describeAdjustmentTypes(callback?: (err: AutoScaling.ResourceContentionFault|any, data: AutoScaling.DescribeAdjustmentTypesAnswer|any) => void): Request;
      describeAutoScalingGroups(params: AutoScaling.AutoScalingGroupNamesType, callback?: (err: AutoScaling.InvalidNextToken|AutoScaling.ResourceContentionFault|any, data: AutoScaling.AutoScalingGroupsType|any) => void): Request;
      describeAutoScalingInstances(params: AutoScaling.DescribeAutoScalingInstancesType, callback?: (err: AutoScaling.InvalidNextToken|AutoScaling.ResourceContentionFault|any, data: AutoScaling.AutoScalingInstancesType|any) => void): Request;
      describeAutoScalingNotificationTypes(callback?: (err: AutoScaling.ResourceContentionFault|any, data: AutoScaling.DescribeAutoScalingNotificationTypesAnswer|any) => void): Request;
      describeLaunchConfigurations(params: AutoScaling.LaunchConfigurationNamesType, callback?: (err: AutoScaling.InvalidNextToken|AutoScaling.ResourceContentionFault|any, data: AutoScaling.LaunchConfigurationsType|any) => void): Request;
      describeLifecycleHookTypes(callback?: (err: AutoScaling.ResourceContentionFault|any, data: AutoScaling.DescribeLifecycleHookTypesAnswer|any) => void): Request;
      describeLifecycleHooks(params: AutoScaling.DescribeLifecycleHooksType, callback?: (err: AutoScaling.ResourceContentionFault|any, data: AutoScaling.DescribeLifecycleHooksAnswer|any) => void): Request;
      describeLoadBalancers(params: AutoScaling.DescribeLoadBalancersRequest, callback?: (err: AutoScaling.ResourceContentionFault|any, data: AutoScaling.DescribeLoadBalancersResponse|any) => void): Request;
      describeMetricCollectionTypes(callback?: (err: AutoScaling.ResourceContentionFault|any, data: AutoScaling.DescribeMetricCollectionTypesAnswer|any) => void): Request;
      describeNotificationConfigurations(params: AutoScaling.DescribeNotificationConfigurationsType, callback?: (err: AutoScaling.InvalidNextToken|AutoScaling.ResourceContentionFault|any, data: AutoScaling.DescribeNotificationConfigurationsAnswer|any) => void): Request;
      describePolicies(params: AutoScaling.DescribePoliciesType, callback?: (err: AutoScaling.InvalidNextToken|AutoScaling.ResourceContentionFault|any, data: AutoScaling.PoliciesType|any) => void): Request;
      describeScalingActivities(params: AutoScaling.DescribeScalingActivitiesType, callback?: (err: AutoScaling.InvalidNextToken|AutoScaling.ResourceContentionFault|any, data: AutoScaling.ActivitiesType|any) => void): Request;
      describeScalingProcessTypes(callback?: (err: AutoScaling.ResourceContentionFault|any, data: AutoScaling.ProcessesType|any) => void): Request;
      describeScheduledActions(params: AutoScaling.DescribeScheduledActionsType, callback?: (err: AutoScaling.InvalidNextToken|AutoScaling.ResourceContentionFault|any, data: AutoScaling.ScheduledActionsType|any) => void): Request;
      describeTags(params: AutoScaling.DescribeTagsType, callback?: (err: AutoScaling.InvalidNextToken|AutoScaling.ResourceContentionFault|any, data: AutoScaling.TagsType|any) => void): Request;
      describeTerminationPolicyTypes(callback?: (err: AutoScaling.ResourceContentionFault|any, data: AutoScaling.DescribeTerminationPolicyTypesAnswer|any) => void): Request;
      detachInstances(params: AutoScaling.DetachInstancesQuery, callback?: (err: AutoScaling.ResourceContentionFault|any, data: AutoScaling.DetachInstancesAnswer|any) => void): Request;
      detachLoadBalancers(params: AutoScaling.DetachLoadBalancersType, callback?: (err: AutoScaling.ResourceContentionFault|any, data: AutoScaling.DetachLoadBalancersResultType|any) => void): Request;
      disableMetricsCollection(params: AutoScaling.DisableMetricsCollectionQuery, callback?: (err: AutoScaling.ResourceContentionFault|any, data: any) => void): Request;
      enableMetricsCollection(params: AutoScaling.EnableMetricsCollectionQuery, callback?: (err: AutoScaling.ResourceContentionFault|any, data: any) => void): Request;
      enterStandby(params: AutoScaling.EnterStandbyQuery, callback?: (err: AutoScaling.ResourceContentionFault|any, data: AutoScaling.EnterStandbyAnswer|any) => void): Request;
      executePolicy(params: AutoScaling.ExecutePolicyType, callback?: (err: AutoScaling.ScalingActivityInProgressFault|AutoScaling.ResourceContentionFault|any, data: any) => void): Request;
      exitStandby(params: AutoScaling.ExitStandbyQuery, callback?: (err: AutoScaling.ResourceContentionFault|any, data: AutoScaling.ExitStandbyAnswer|any) => void): Request;
      putLifecycleHook(params: AutoScaling.PutLifecycleHookType, callback?: (err: AutoScaling.LimitExceededFault|AutoScaling.ResourceContentionFault|any, data: AutoScaling.PutLifecycleHookAnswer|any) => void): Request;
      putNotificationConfiguration(params: AutoScaling.PutNotificationConfigurationType, callback?: (err: AutoScaling.LimitExceededFault|AutoScaling.ResourceContentionFault|any, data: any) => void): Request;
      putScalingPolicy(params: AutoScaling.PutScalingPolicyType, callback?: (err: AutoScaling.LimitExceededFault|AutoScaling.ResourceContentionFault|any, data: AutoScaling.PolicyARNType|any) => void): Request;
      putScheduledUpdateGroupAction(params: AutoScaling.PutScheduledUpdateGroupActionType, callback?: (err: AutoScaling.AlreadyExistsFault|AutoScaling.LimitExceededFault|AutoScaling.ResourceContentionFault|any, data: any) => void): Request;
      recordLifecycleActionHeartbeat(params: AutoScaling.RecordLifecycleActionHeartbeatType, callback?: (err: AutoScaling.ResourceContentionFault|any, data: AutoScaling.RecordLifecycleActionHeartbeatAnswer|any) => void): Request;
      resumeProcesses(params: AutoScaling.ScalingProcessQuery, callback?: (err: AutoScaling.ResourceInUseFault|AutoScaling.ResourceContentionFault|any, data: any) => void): Request;
      setDesiredCapacity(params: AutoScaling.SetDesiredCapacityType, callback?: (err: AutoScaling.ScalingActivityInProgressFault|AutoScaling.ResourceContentionFault|any, data: any) => void): Request;
      setInstanceHealth(params: AutoScaling.SetInstanceHealthQuery, callback?: (err: AutoScaling.ResourceContentionFault|any, data: any) => void): Request;
      setInstanceProtection(params: AutoScaling.SetInstanceProtectionQuery, callback?: (err: AutoScaling.LimitExceededFault|AutoScaling.ResourceContentionFault|any, data: AutoScaling.SetInstanceProtectionAnswer|any) => void): Request;
      suspendProcesses(params: AutoScaling.ScalingProcessQuery, callback?: (err: AutoScaling.ResourceInUseFault|AutoScaling.ResourceContentionFault|any, data: any) => void): Request;
      terminateInstanceInAutoScalingGroup(params: AutoScaling.TerminateInstanceInAutoScalingGroupType, callback?: (err: AutoScaling.ScalingActivityInProgressFault|AutoScaling.ResourceContentionFault|any, data: AutoScaling.ActivityType|any) => void): Request;
      updateAutoScalingGroup(params: AutoScaling.UpdateAutoScalingGroupType, callback?: (err: AutoScaling.ScalingActivityInProgressFault|AutoScaling.ResourceContentionFault|any, data: any) => void): Request;

    }

    export module AutoScaling {
        export type Activities = Activity[];
        export type ActivityIds = XmlString[];
        export type AdjustmentTypes = AdjustmentType[];
        export type Alarms = Alarm[];
        export type AsciiStringMaxLen255 = string;    // pattern: &quot;[A-Za-z0-9\-_\/]+&quot;, max: 255, min: 1
        export type AssociatePublicIpAddress = boolean;
        export type AutoScalingGroupDesiredCapacity = number;
        export type AutoScalingGroupMaxSize = number;
        export type AutoScalingGroupMinSize = number;
        export type AutoScalingGroupNames = ResourceName[];
        export type AutoScalingGroups = AutoScalingGroup[];
        export type AutoScalingInstances = AutoScalingInstanceDetails[];
        export type AutoScalingNotificationTypes = XmlStringMaxLen255[];
        export type AvailabilityZones = XmlStringMaxLen255[];    // min: 1
        export type BlockDeviceEbsDeleteOnTermination = boolean;
        export type BlockDeviceEbsEncrypted = boolean;
        export type BlockDeviceEbsIops = number;    // max: 20000, min: 100
        export type BlockDeviceEbsVolumeSize = number;    // max: 16384, min: 1
        export type BlockDeviceEbsVolumeType = string;    // max: 255, min: 1
        export type BlockDeviceMappings = BlockDeviceMapping[];
        export type ClassicLinkVPCSecurityGroups = XmlStringMaxLen255[];
        export type Cooldown = number;
        export type EbsOptimized = boolean;
        export type EnabledMetrics = EnabledMetric[];
        export type EstimatedInstanceWarmup = number;
        export type Filters = Filter[];
        export type ForceDelete = boolean;
        export type GlobalTimeout = number;
        export type HealthCheckGracePeriod = number;
        export type HeartbeatTimeout = number;
        export type HonorCooldown = boolean;
        export type InstanceIds = XmlStringMaxLen19[];
        export type InstanceProtected = boolean;
        export type Instances = Instance[];
        export type LaunchConfigurationNames = ResourceName[];
        export type LaunchConfigurations = LaunchConfiguration[];
        export type LifecycleActionResult = string;
        export type LifecycleActionToken = string;    // max: 36, min: 36
        export type LifecycleHookNames = AsciiStringMaxLen255[];
        export type LifecycleHooks = LifecycleHook[];
        export type LifecycleState = string;
        export type LifecycleTransition = string;
        export type LoadBalancerNames = XmlStringMaxLen255[];
        export type LoadBalancerStates = LoadBalancerState[];
        export type MaxNumberOfAutoScalingGroups = number;
        export type MaxNumberOfLaunchConfigurations = number;
        export type MaxRecords = number;
        export type MetricCollectionTypes = MetricCollectionType[];
        export type MetricGranularityTypes = MetricGranularityType[];
        export type MetricScale = number;
        export type Metrics = XmlStringMaxLen255[];
        export type MinAdjustmentMagnitude = number;
        export type MinAdjustmentStep = number;
        export type MonitoringEnabled = boolean;
        export type NoDevice = boolean;
        export type NotificationConfigurations = NotificationConfiguration[];
        export type NumberOfAutoScalingGroups = number;
        export type NumberOfLaunchConfigurations = number;
        export type PolicyIncrement = number;
        export type PolicyNames = ResourceName[];
        export type PolicyTypes = XmlStringMaxLen64[];
        export type ProcessNames = XmlStringMaxLen255[];
        export type Processes = ProcessType[];
        export type Progress = number;
        export type PropagateAtLaunch = boolean;
        export type ProtectedFromScaleIn = boolean;
        export type ResourceName = string;    // pattern: &quot;[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*&quot;, max: 1600, min: 1
        export type ScalingActivityStatusCode = string;
        export type ScalingPolicies = ScalingPolicy[];
        export type ScheduledActionNames = ResourceName[];
        export type ScheduledUpdateGroupActions = ScheduledUpdateGroupAction[];
        export type SecurityGroups = XmlString[];
        export type ShouldDecrementDesiredCapacity = boolean;
        export type ShouldRespectGracePeriod = boolean;
        export type SpotPrice = string;    // max: 255, min: 1
        export type StepAdjustments = StepAdjustment[];
        export type SuspendedProcesses = SuspendedProcess[];
        export type TagDescriptionList = TagDescription[];
        export type TagKey = string;    // pattern: &quot;[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*&quot;, max: 128, min: 1
        export type TagValue = string;    // pattern: &quot;[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*&quot;, max: 256
        export type Tags = Tag[];
        export type TerminationPolicies = XmlStringMaxLen1600[];
        export type TimestampType = number;
        export type Values = XmlString[];
        export type XmlString = string;    // pattern: &quot;[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*&quot;
        export type XmlStringMaxLen1023 = string;    // pattern: &quot;[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*&quot;, max: 1023, min: 1
        export type XmlStringMaxLen1600 = string;    // pattern: &quot;[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*&quot;, max: 1600, min: 1
        export type XmlStringMaxLen19 = string;    // pattern: &quot;[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*&quot;, max: 19, min: 1
        export type XmlStringMaxLen255 = string;    // pattern: &quot;[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*&quot;, max: 255, min: 1
        export type XmlStringMaxLen32 = string;    // pattern: &quot;[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*&quot;, max: 32, min: 1
        export type XmlStringMaxLen64 = string;    // pattern: &quot;[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*&quot;, max: 64, min: 1
        export type XmlStringUserData = string;    // pattern: &quot;[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*&quot;, max: 21847

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
        export interface ActivityType {
            Activity?: Activity;
        }
        export interface AdjustmentType {
            AdjustmentType?: XmlStringMaxLen255;
        }
        export interface Alarm {
            AlarmName?: XmlStringMaxLen255;
            AlarmARN?: ResourceName;
        }
        export interface AlreadyExistsFault {
            message?: XmlStringMaxLen255;
        }
        export interface AttachInstancesQuery {
            InstanceIds?: InstanceIds;
            AutoScalingGroupName: ResourceName;
        }
        export interface AttachLoadBalancersResultType {
        }
        export interface AttachLoadBalancersType {
            AutoScalingGroupName?: ResourceName;
            LoadBalancerNames?: LoadBalancerNames;
        }
        export interface AutoScalingGroup {
            AutoScalingGroupName: XmlStringMaxLen255;
            AutoScalingGroupARN?: ResourceName;
            LaunchConfigurationName?: XmlStringMaxLen255;
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
            NewInstancesProtectedFromScaleIn?: InstanceProtected;
        }
        export interface AutoScalingGroupNamesType {
            AutoScalingGroupNames?: AutoScalingGroupNames;
            NextToken?: XmlString;
            MaxRecords?: MaxRecords;
        }
        export interface AutoScalingGroupsType {
            AutoScalingGroups: AutoScalingGroups;
            NextToken?: XmlString;
        }
        export interface AutoScalingInstanceDetails {
            InstanceId: XmlStringMaxLen19;
            AutoScalingGroupName: XmlStringMaxLen255;
            AvailabilityZone: XmlStringMaxLen255;
            LifecycleState: XmlStringMaxLen32;
            HealthStatus: XmlStringMaxLen32;
            LaunchConfigurationName: XmlStringMaxLen255;
            ProtectedFromScaleIn: InstanceProtected;
        }
        export interface AutoScalingInstancesType {
            AutoScalingInstances?: AutoScalingInstances;
            NextToken?: XmlString;
        }
        export interface BlockDeviceMapping {
            VirtualName?: XmlStringMaxLen255;
            DeviceName: XmlStringMaxLen255;
            Ebs?: Ebs;
            NoDevice?: NoDevice;
        }
        export interface CompleteLifecycleActionAnswer {
        }
        export interface CompleteLifecycleActionType {
            LifecycleHookName: AsciiStringMaxLen255;
            AutoScalingGroupName: ResourceName;
            LifecycleActionToken: LifecycleActionToken;
            LifecycleActionResult: LifecycleActionResult;
        }
        export interface CreateAutoScalingGroupType {
            AutoScalingGroupName: XmlStringMaxLen255;
            LaunchConfigurationName?: ResourceName;
            InstanceId?: XmlStringMaxLen19;
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
            NewInstancesProtectedFromScaleIn?: InstanceProtected;
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
            InstanceId?: XmlStringMaxLen19;
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
            NumberOfAutoScalingGroups?: NumberOfAutoScalingGroups;
            NumberOfLaunchConfigurations?: NumberOfLaunchConfigurations;
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
        export interface DescribeLoadBalancersRequest {
            AutoScalingGroupName: ResourceName;
            NextToken?: XmlString;
            MaxRecords?: MaxRecords;
        }
        export interface DescribeLoadBalancersResponse {
            LoadBalancers?: LoadBalancerStates;
            NextToken?: XmlString;
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
            PolicyTypes?: PolicyTypes;
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
        export interface DetachLoadBalancersResultType {
        }
        export interface DetachLoadBalancersType {
            AutoScalingGroupName?: ResourceName;
            LoadBalancerNames?: LoadBalancerNames;
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
            Encrypted?: BlockDeviceEbsEncrypted;
        }
        export interface EnableMetricsCollectionQuery {
            AutoScalingGroupName: ResourceName;
            Metrics?: Metrics;
            Granularity: XmlStringMaxLen255;
        }
        export interface EnabledMetric {
            Metric?: XmlStringMaxLen255;
            Granularity?: XmlStringMaxLen255;
        }
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
            MetricValue?: MetricScale;
            BreachThreshold?: MetricScale;
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
        export interface Instance {
            InstanceId: XmlStringMaxLen19;
            AvailabilityZone: XmlStringMaxLen255;
            LifecycleState: LifecycleState;
            HealthStatus: XmlStringMaxLen32;
            LaunchConfigurationName: XmlStringMaxLen255;
            ProtectedFromScaleIn: InstanceProtected;
        }
        export interface InstanceMonitoring {
            Enabled?: MonitoringEnabled;
        }
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
        export interface LaunchConfigurationNamesType {
            LaunchConfigurationNames?: LaunchConfigurationNames;
            NextToken?: XmlString;
            MaxRecords?: MaxRecords;
        }
        export interface LaunchConfigurationsType {
            LaunchConfigurations: LaunchConfigurations;
            NextToken?: XmlString;
        }
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
        export interface LimitExceededFault {
            message?: XmlStringMaxLen255;
        }
        export interface LoadBalancerState {
            LoadBalancerName?: XmlStringMaxLen255;
            State?: XmlStringMaxLen255;
        }
        export interface MetricCollectionType {
            Metric?: XmlStringMaxLen255;
        }
        export interface MetricGranularityType {
            Granularity?: XmlStringMaxLen255;
        }
        export interface NotificationConfiguration {
            AutoScalingGroupName?: ResourceName;
            TopicARN?: ResourceName;
            NotificationType?: XmlStringMaxLen255;
        }
        export interface PoliciesType {
            ScalingPolicies?: ScalingPolicies;
            NextToken?: XmlString;
        }
        export interface PolicyARNType {
            PolicyARN?: ResourceName;
        }
        export interface ProcessType {
            ProcessName: XmlStringMaxLen255;
        }
        export interface ProcessesType {
            Processes?: Processes;
        }
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
            PolicyType?: XmlStringMaxLen64;
            AdjustmentType: XmlStringMaxLen255;
            MinAdjustmentStep?: MinAdjustmentStep;
            MinAdjustmentMagnitude?: MinAdjustmentMagnitude;
            ScalingAdjustment?: PolicyIncrement;
            Cooldown?: Cooldown;
            MetricAggregationType?: XmlStringMaxLen32;
            StepAdjustments?: StepAdjustments;
            EstimatedInstanceWarmup?: EstimatedInstanceWarmup;
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
        export interface ResourceContentionFault {
            message?: XmlStringMaxLen255;
        }
        export interface ResourceInUseFault {
            message?: XmlStringMaxLen255;
        }
        export interface ScalingActivityInProgressFault {
            message?: XmlStringMaxLen255;
        }
        export interface ScalingPolicy {
            AutoScalingGroupName?: XmlStringMaxLen255;
            PolicyName?: XmlStringMaxLen255;
            PolicyARN?: ResourceName;
            PolicyType?: XmlStringMaxLen64;
            AdjustmentType?: XmlStringMaxLen255;
            MinAdjustmentStep?: MinAdjustmentStep;
            MinAdjustmentMagnitude?: MinAdjustmentMagnitude;
            ScalingAdjustment?: PolicyIncrement;
            Cooldown?: Cooldown;
            StepAdjustments?: StepAdjustments;
            MetricAggregationType?: XmlStringMaxLen32;
            EstimatedInstanceWarmup?: EstimatedInstanceWarmup;
            Alarms?: Alarms;
        }
        export interface ScalingProcessQuery {
            AutoScalingGroupName: ResourceName;
            ScalingProcesses?: ProcessNames;
        }
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
        export interface SetDesiredCapacityType {
            AutoScalingGroupName: ResourceName;
            DesiredCapacity: AutoScalingGroupDesiredCapacity;
            HonorCooldown?: HonorCooldown;
        }
        export interface SetInstanceHealthQuery {
            InstanceId: XmlStringMaxLen19;
            HealthStatus: XmlStringMaxLen32;
            ShouldRespectGracePeriod?: ShouldRespectGracePeriod;
        }
        export interface SetInstanceProtectionAnswer {
        }
        export interface SetInstanceProtectionQuery {
            InstanceIds: InstanceIds;
            AutoScalingGroupName: ResourceName;
            ProtectedFromScaleIn: ProtectedFromScaleIn;
        }
        export interface StepAdjustment {
            MetricIntervalLowerBound?: MetricScale;
            MetricIntervalUpperBound?: MetricScale;
            ScalingAdjustment: PolicyIncrement;
        }
        export interface SuspendedProcess {
            ProcessName?: XmlStringMaxLen255;
            SuspensionReason?: XmlStringMaxLen255;
        }
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
        export interface TagsType {
            Tags?: TagDescriptionList;
            NextToken?: XmlString;
        }
        export interface TerminateInstanceInAutoScalingGroupType {
            InstanceId: XmlStringMaxLen19;
            ShouldDecrementDesiredCapacity: ShouldDecrementDesiredCapacity;
        }
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
            NewInstancesProtectedFromScaleIn?: InstanceProtected;
        }

    }
}
