// DO NOT EDIT!
//
declare module "aws-sdk" {
    export class AutoScaling {
      constructor(options?: any);
      attachInstances(params: AutoScalingAttachInstancesQuery, callback: (err: any, data: any) => void): void;
      completeLifecycleAction(params: AutoScalingCompleteLifecycleActionType, callback: (err: any, data: AutoScalingCompleteLifecycleActionAnswer|any) => void): void;
      createAutoScalingGroup(params: AutoScalingCreateAutoScalingGroupType, callback: (err: AutoScalingAlreadyExistsFault|AutoScalingLimitExceededFault|any, data: any) => void): void;
      createLaunchConfiguration(params: AutoScalingCreateLaunchConfigurationType, callback: (err: AutoScalingAlreadyExistsFault|AutoScalingLimitExceededFault|any, data: any) => void): void;
      createOrUpdateTags(params: AutoScalingCreateOrUpdateTagsType, callback: (err: AutoScalingLimitExceededFault|AutoScalingAlreadyExistsFault|any, data: any) => void): void;
      deleteAutoScalingGroup(params: AutoScalingDeleteAutoScalingGroupType, callback: (err: AutoScalingScalingActivityInProgressFault|AutoScalingResourceInUseFault|any, data: any) => void): void;
      deleteLaunchConfiguration(params: AutoScalingLaunchConfigurationNameType, callback: (err: AutoScalingResourceInUseFault|any, data: any) => void): void;
      deleteLifecycleHook(params: AutoScalingDeleteLifecycleHookType, callback: (err: any, data: AutoScalingDeleteLifecycleHookAnswer|any) => void): void;
      deleteNotificationConfiguration(params: AutoScalingDeleteNotificationConfigurationType, callback: (err: any, data: any) => void): void;
      deletePolicy(params: AutoScalingDeletePolicyType, callback: (err: any, data: any) => void): void;
      deleteScheduledAction(params: AutoScalingDeleteScheduledActionType, callback: (err: any, data: any) => void): void;
      deleteTags(params: AutoScalingDeleteTagsType, callback: (err: any, data: any) => void): void;
      describeAccountLimits(callback: (err: any, data: AutoScalingDescribeAccountLimitsAnswer|any) => void): void;
      describeAdjustmentTypes(callback: (err: any, data: AutoScalingDescribeAdjustmentTypesAnswer|any) => void): void;
      describeAutoScalingGroups(params: AutoScalingAutoScalingGroupNamesType, callback: (err: AutoScalingInvalidNextToken|any, data: AutoScalingAutoScalingGroupsType|any) => void): void;
      describeAutoScalingInstances(params: AutoScalingDescribeAutoScalingInstancesType, callback: (err: AutoScalingInvalidNextToken|any, data: AutoScalingAutoScalingInstancesType|any) => void): void;
      describeAutoScalingNotificationTypes(callback: (err: any, data: AutoScalingDescribeAutoScalingNotificationTypesAnswer|any) => void): void;
      describeLaunchConfigurations(params: AutoScalingLaunchConfigurationNamesType, callback: (err: AutoScalingInvalidNextToken|any, data: AutoScalingLaunchConfigurationsType|any) => void): void;
      describeLifecycleHookTypes(callback: (err: any, data: AutoScalingDescribeLifecycleHookTypesAnswer|any) => void): void;
      describeLifecycleHooks(params: AutoScalingDescribeLifecycleHooksType, callback: (err: any, data: AutoScalingDescribeLifecycleHooksAnswer|any) => void): void;
      describeMetricCollectionTypes(callback: (err: any, data: AutoScalingDescribeMetricCollectionTypesAnswer|any) => void): void;
      describeNotificationConfigurations(params: AutoScalingDescribeNotificationConfigurationsType, callback: (err: AutoScalingInvalidNextToken|any, data: AutoScalingDescribeNotificationConfigurationsAnswer|any) => void): void;
      describePolicies(params: AutoScalingDescribePoliciesType, callback: (err: AutoScalingInvalidNextToken|any, data: AutoScalingPoliciesType|any) => void): void;
      describeScalingActivities(params: AutoScalingDescribeScalingActivitiesType, callback: (err: AutoScalingInvalidNextToken|any, data: AutoScalingActivitiesType|any) => void): void;
      describeScalingProcessTypes(callback: (err: any, data: AutoScalingProcessesType|any) => void): void;
      describeScheduledActions(params: AutoScalingDescribeScheduledActionsType, callback: (err: AutoScalingInvalidNextToken|any, data: AutoScalingScheduledActionsType|any) => void): void;
      describeTags(params: AutoScalingDescribeTagsType, callback: (err: AutoScalingInvalidNextToken|any, data: AutoScalingTagsType|any) => void): void;
      describeTerminationPolicyTypes(callback: (err: any, data: AutoScalingDescribeTerminationPolicyTypesAnswer|any) => void): void;
      detachInstances(params: AutoScalingDetachInstancesQuery, callback: (err: any, data: AutoScalingDetachInstancesAnswer|any) => void): void;
      disableMetricsCollection(params: AutoScalingDisableMetricsCollectionQuery, callback: (err: any, data: any) => void): void;
      enableMetricsCollection(params: AutoScalingEnableMetricsCollectionQuery, callback: (err: any, data: any) => void): void;
      enterStandby(params: AutoScalingEnterStandbyQuery, callback: (err: any, data: AutoScalingEnterStandbyAnswer|any) => void): void;
      executePolicy(params: AutoScalingExecutePolicyType, callback: (err: AutoScalingScalingActivityInProgressFault|any, data: any) => void): void;
      exitStandby(params: AutoScalingExitStandbyQuery, callback: (err: any, data: AutoScalingExitStandbyAnswer|any) => void): void;
      putLifecycleHook(params: AutoScalingPutLifecycleHookType, callback: (err: AutoScalingLimitExceededFault|any, data: AutoScalingPutLifecycleHookAnswer|any) => void): void;
      putNotificationConfiguration(params: AutoScalingPutNotificationConfigurationType, callback: (err: AutoScalingLimitExceededFault|any, data: any) => void): void;
      putScalingPolicy(params: AutoScalingPutScalingPolicyType, callback: (err: AutoScalingLimitExceededFault|any, data: AutoScalingPolicyARNType|any) => void): void;
      putScheduledUpdateGroupAction(params: AutoScalingPutScheduledUpdateGroupActionType, callback: (err: AutoScalingAlreadyExistsFault|AutoScalingLimitExceededFault|any, data: any) => void): void;
      recordLifecycleActionHeartbeat(params: AutoScalingRecordLifecycleActionHeartbeatType, callback: (err: any, data: AutoScalingRecordLifecycleActionHeartbeatAnswer|any) => void): void;
      resumeProcesses(params: AutoScalingScalingProcessQuery, callback: (err: any, data: any) => void): void;
      setDesiredCapacity(params: AutoScalingSetDesiredCapacityType, callback: (err: AutoScalingScalingActivityInProgressFault|any, data: any) => void): void;
      setInstanceHealth(params: AutoScalingSetInstanceHealthQuery, callback: (err: any, data: any) => void): void;
      suspendProcesses(params: AutoScalingScalingProcessQuery, callback: (err: any, data: any) => void): void;
      terminateInstanceInAutoScalingGroup(params: AutoScalingTerminateInstanceInAutoScalingGroupType, callback: (err: AutoScalingScalingActivityInProgressFault|any, data: AutoScalingActivityType|any) => void): void;
      updateAutoScalingGroup(params: AutoScalingUpdateAutoScalingGroupType, callback: (err: AutoScalingScalingActivityInProgressFault|any, data: any) => void): void;
    }

    export type AutoScalingActivities = Array<AutoScalingActivity>;
    export interface AutoScalingActivitiesType {
        Activities: AutoScalingActivities;
        NextToken?: AutoScalingXmlString;
    }

    export interface AutoScalingActivity {
        ActivityId: AutoScalingXmlString;
        AutoScalingGroupName: AutoScalingXmlStringMaxLen255;
        Description?: AutoScalingXmlString;
        Cause: AutoScalingXmlStringMaxLen1023;
        StartTime: AutoScalingTimestampType;
        EndTime?: AutoScalingTimestampType;
        StatusCode: AutoScalingScalingActivityStatusCode;
        StatusMessage?: AutoScalingXmlStringMaxLen255;
        Progress?: AutoScalingProgress;
        Details?: AutoScalingXmlString;
    }

    export type AutoScalingActivityIds = Array<AutoScalingXmlString>;
    export interface AutoScalingActivityType {
        Activity?: AutoScalingActivity;
    }

    export interface AutoScalingAdjustmentType {
        AdjustmentType?: AutoScalingXmlStringMaxLen255;
    }

    export type AutoScalingAdjustmentTypes = Array<AutoScalingAdjustmentType>;
    export interface AutoScalingAlarm {
        AlarmName?: AutoScalingXmlStringMaxLen255;
        AlarmARN?: AutoScalingResourceName;
    }

    export type AutoScalingAlarms = Array<AutoScalingAlarm>;
    export interface AutoScalingAlreadyExistsFault {
        message?: AutoScalingXmlStringMaxLen255;
    }

    export type AutoScalingAsciiStringMaxLen255 = string; // pattern: "[A-Za-z0-9\-_\/]+"
    export type AutoScalingAssociatePublicIpAddress = boolean;
    export interface AutoScalingAttachInstancesQuery {
        InstanceIds?: AutoScalingInstanceIds;
        AutoScalingGroupName: AutoScalingResourceName;
    }

    export interface AutoScalingAutoScalingGroup {
        AutoScalingGroupName: AutoScalingXmlStringMaxLen255;
        AutoScalingGroupARN?: AutoScalingResourceName;
        LaunchConfigurationName: AutoScalingXmlStringMaxLen255;
        MinSize: AutoScalingAutoScalingGroupMinSize;
        MaxSize: AutoScalingAutoScalingGroupMaxSize;
        DesiredCapacity: AutoScalingAutoScalingGroupDesiredCapacity;
        DefaultCooldown: AutoScalingCooldown;
        AvailabilityZones: AutoScalingAvailabilityZones;
        LoadBalancerNames?: AutoScalingLoadBalancerNames;
        HealthCheckType: AutoScalingXmlStringMaxLen32;
        HealthCheckGracePeriod?: AutoScalingHealthCheckGracePeriod;
        Instances?: AutoScalingInstances;
        CreatedTime: AutoScalingTimestampType;
        SuspendedProcesses?: AutoScalingSuspendedProcesses;
        PlacementGroup?: AutoScalingXmlStringMaxLen255;
        VPCZoneIdentifier?: AutoScalingXmlStringMaxLen255;
        EnabledMetrics?: AutoScalingEnabledMetrics;
        Status?: AutoScalingXmlStringMaxLen255;
        Tags?: AutoScalingTagDescriptionList;
        TerminationPolicies?: AutoScalingTerminationPolicies;
    }

    export type AutoScalingAutoScalingGroupDesiredCapacity = number;
    export type AutoScalingAutoScalingGroupMaxSize = number;
    export type AutoScalingAutoScalingGroupMinSize = number;
    export type AutoScalingAutoScalingGroupNames = Array<AutoScalingResourceName>;
    export interface AutoScalingAutoScalingGroupNamesType {
        AutoScalingGroupNames?: AutoScalingAutoScalingGroupNames;
        NextToken?: AutoScalingXmlString;
        MaxRecords?: AutoScalingMaxRecords;
    }

    export type AutoScalingAutoScalingGroups = Array<AutoScalingAutoScalingGroup>;
    export interface AutoScalingAutoScalingGroupsType {
        AutoScalingGroups: AutoScalingAutoScalingGroups;
        NextToken?: AutoScalingXmlString;
    }

    export interface AutoScalingAutoScalingInstanceDetails {
        InstanceId: AutoScalingXmlStringMaxLen16;
        AutoScalingGroupName: AutoScalingXmlStringMaxLen255;
        AvailabilityZone: AutoScalingXmlStringMaxLen255;
        LifecycleState: AutoScalingXmlStringMaxLen32;
        HealthStatus: AutoScalingXmlStringMaxLen32;
        LaunchConfigurationName: AutoScalingXmlStringMaxLen255;
    }

    export type AutoScalingAutoScalingInstances = Array<AutoScalingAutoScalingInstanceDetails>;
    export interface AutoScalingAutoScalingInstancesType {
        AutoScalingInstances?: AutoScalingAutoScalingInstances;
        NextToken?: AutoScalingXmlString;
    }

    export type AutoScalingAutoScalingNotificationTypes = Array<AutoScalingXmlStringMaxLen255>;
    export type AutoScalingAvailabilityZones = Array<AutoScalingXmlStringMaxLen255>;
    export type AutoScalingBlockDeviceEbsDeleteOnTermination = boolean;
    export type AutoScalingBlockDeviceEbsIops = number;
    export type AutoScalingBlockDeviceEbsVolumeSize = number;
    export type AutoScalingBlockDeviceEbsVolumeType = string;
    export interface AutoScalingBlockDeviceMapping {
        VirtualName?: AutoScalingXmlStringMaxLen255;
        DeviceName: AutoScalingXmlStringMaxLen255;
        Ebs?: AutoScalingEbs;
        NoDevice?: AutoScalingNoDevice;
    }

    export type AutoScalingBlockDeviceMappings = Array<AutoScalingBlockDeviceMapping>;
    export type AutoScalingClassicLinkVPCSecurityGroups = Array<AutoScalingXmlStringMaxLen255>;
    export interface AutoScalingCompleteLifecycleActionAnswer {
    }

    export interface AutoScalingCompleteLifecycleActionType {
        LifecycleHookName: AutoScalingAsciiStringMaxLen255;
        AutoScalingGroupName: AutoScalingResourceName;
        LifecycleActionToken: AutoScalingLifecycleActionToken;
        LifecycleActionResult: AutoScalingLifecycleActionResult;
    }

    export type AutoScalingCooldown = number;
    export interface AutoScalingCreateAutoScalingGroupType {
        AutoScalingGroupName: AutoScalingXmlStringMaxLen255;
        LaunchConfigurationName?: AutoScalingResourceName;
        InstanceId?: AutoScalingXmlStringMaxLen16;
        MinSize: AutoScalingAutoScalingGroupMinSize;
        MaxSize: AutoScalingAutoScalingGroupMaxSize;
        DesiredCapacity?: AutoScalingAutoScalingGroupDesiredCapacity;
        DefaultCooldown?: AutoScalingCooldown;
        AvailabilityZones?: AutoScalingAvailabilityZones;
        LoadBalancerNames?: AutoScalingLoadBalancerNames;
        HealthCheckType?: AutoScalingXmlStringMaxLen32;
        HealthCheckGracePeriod?: AutoScalingHealthCheckGracePeriod;
        PlacementGroup?: AutoScalingXmlStringMaxLen255;
        VPCZoneIdentifier?: AutoScalingXmlStringMaxLen255;
        TerminationPolicies?: AutoScalingTerminationPolicies;
        Tags?: AutoScalingTags;
    }

    export interface AutoScalingCreateLaunchConfigurationType {
        LaunchConfigurationName: AutoScalingXmlStringMaxLen255;
        ImageId?: AutoScalingXmlStringMaxLen255;
        KeyName?: AutoScalingXmlStringMaxLen255;
        SecurityGroups?: AutoScalingSecurityGroups;
        ClassicLinkVPCId?: AutoScalingXmlStringMaxLen255;
        ClassicLinkVPCSecurityGroups?: AutoScalingClassicLinkVPCSecurityGroups;
        UserData?: AutoScalingXmlStringUserData;
        InstanceId?: AutoScalingXmlStringMaxLen16;
        InstanceType?: AutoScalingXmlStringMaxLen255;
        KernelId?: AutoScalingXmlStringMaxLen255;
        RamdiskId?: AutoScalingXmlStringMaxLen255;
        BlockDeviceMappings?: AutoScalingBlockDeviceMappings;
        InstanceMonitoring?: AutoScalingInstanceMonitoring;
        SpotPrice?: AutoScalingSpotPrice;
        IamInstanceProfile?: AutoScalingXmlStringMaxLen1600;
        EbsOptimized?: AutoScalingEbsOptimized;
        AssociatePublicIpAddress?: AutoScalingAssociatePublicIpAddress;
        PlacementTenancy?: AutoScalingXmlStringMaxLen64;
    }

    export interface AutoScalingCreateOrUpdateTagsType {
        Tags: AutoScalingTags;
    }

    export interface AutoScalingDeleteAutoScalingGroupType {
        AutoScalingGroupName: AutoScalingResourceName;
        ForceDelete?: AutoScalingForceDelete;
    }

    export interface AutoScalingDeleteLifecycleHookAnswer {
    }

    export interface AutoScalingDeleteLifecycleHookType {
        LifecycleHookName: AutoScalingAsciiStringMaxLen255;
        AutoScalingGroupName: AutoScalingResourceName;
    }

    export interface AutoScalingDeleteNotificationConfigurationType {
        AutoScalingGroupName: AutoScalingResourceName;
        TopicARN: AutoScalingResourceName;
    }

    export interface AutoScalingDeletePolicyType {
        AutoScalingGroupName?: AutoScalingResourceName;
        PolicyName: AutoScalingResourceName;
    }

    export interface AutoScalingDeleteScheduledActionType {
        AutoScalingGroupName?: AutoScalingResourceName;
        ScheduledActionName: AutoScalingResourceName;
    }

    export interface AutoScalingDeleteTagsType {
        Tags: AutoScalingTags;
    }

    export interface AutoScalingDescribeAccountLimitsAnswer {
        MaxNumberOfAutoScalingGroups?: AutoScalingMaxNumberOfAutoScalingGroups;
        MaxNumberOfLaunchConfigurations?: AutoScalingMaxNumberOfLaunchConfigurations;
    }

    export interface AutoScalingDescribeAdjustmentTypesAnswer {
        AdjustmentTypes?: AutoScalingAdjustmentTypes;
    }

    export interface AutoScalingDescribeAutoScalingInstancesType {
        InstanceIds?: AutoScalingInstanceIds;
        MaxRecords?: AutoScalingMaxRecords;
        NextToken?: AutoScalingXmlString;
    }

    export interface AutoScalingDescribeAutoScalingNotificationTypesAnswer {
        AutoScalingNotificationTypes?: AutoScalingAutoScalingNotificationTypes;
    }

    export interface AutoScalingDescribeLifecycleHookTypesAnswer {
        LifecycleHookTypes?: AutoScalingAutoScalingNotificationTypes;
    }

    export interface AutoScalingDescribeLifecycleHooksAnswer {
        LifecycleHooks?: AutoScalingLifecycleHooks;
    }

    export interface AutoScalingDescribeLifecycleHooksType {
        AutoScalingGroupName: AutoScalingResourceName;
        LifecycleHookNames?: AutoScalingLifecycleHookNames;
    }

    export interface AutoScalingDescribeMetricCollectionTypesAnswer {
        Metrics?: AutoScalingMetricCollectionTypes;
        Granularities?: AutoScalingMetricGranularityTypes;
    }

    export interface AutoScalingDescribeNotificationConfigurationsAnswer {
        NotificationConfigurations: AutoScalingNotificationConfigurations;
        NextToken?: AutoScalingXmlString;
    }

    export interface AutoScalingDescribeNotificationConfigurationsType {
        AutoScalingGroupNames?: AutoScalingAutoScalingGroupNames;
        NextToken?: AutoScalingXmlString;
        MaxRecords?: AutoScalingMaxRecords;
    }

    export interface AutoScalingDescribePoliciesType {
        AutoScalingGroupName?: AutoScalingResourceName;
        PolicyNames?: AutoScalingPolicyNames;
        NextToken?: AutoScalingXmlString;
        MaxRecords?: AutoScalingMaxRecords;
    }

    export interface AutoScalingDescribeScalingActivitiesType {
        ActivityIds?: AutoScalingActivityIds;
        AutoScalingGroupName?: AutoScalingResourceName;
        MaxRecords?: AutoScalingMaxRecords;
        NextToken?: AutoScalingXmlString;
    }

    export interface AutoScalingDescribeScheduledActionsType {
        AutoScalingGroupName?: AutoScalingResourceName;
        ScheduledActionNames?: AutoScalingScheduledActionNames;
        StartTime?: AutoScalingTimestampType;
        EndTime?: AutoScalingTimestampType;
        NextToken?: AutoScalingXmlString;
        MaxRecords?: AutoScalingMaxRecords;
    }

    export interface AutoScalingDescribeTagsType {
        Filters?: AutoScalingFilters;
        NextToken?: AutoScalingXmlString;
        MaxRecords?: AutoScalingMaxRecords;
    }

    export interface AutoScalingDescribeTerminationPolicyTypesAnswer {
        TerminationPolicyTypes?: AutoScalingTerminationPolicies;
    }

    export interface AutoScalingDetachInstancesAnswer {
        Activities?: AutoScalingActivities;
    }

    export interface AutoScalingDetachInstancesQuery {
        InstanceIds?: AutoScalingInstanceIds;
        AutoScalingGroupName: AutoScalingResourceName;
        ShouldDecrementDesiredCapacity: AutoScalingShouldDecrementDesiredCapacity;
    }

    export interface AutoScalingDisableMetricsCollectionQuery {
        AutoScalingGroupName: AutoScalingResourceName;
        Metrics?: AutoScalingMetrics;
    }

    export interface AutoScalingEbs {
        SnapshotId?: AutoScalingXmlStringMaxLen255;
        VolumeSize?: AutoScalingBlockDeviceEbsVolumeSize;
        VolumeType?: AutoScalingBlockDeviceEbsVolumeType;
        DeleteOnTermination?: AutoScalingBlockDeviceEbsDeleteOnTermination;
        Iops?: AutoScalingBlockDeviceEbsIops;
    }

    export type AutoScalingEbsOptimized = boolean;
    export interface AutoScalingEnableMetricsCollectionQuery {
        AutoScalingGroupName: AutoScalingResourceName;
        Metrics?: AutoScalingMetrics;
        Granularity: AutoScalingXmlStringMaxLen255;
    }

    export interface AutoScalingEnabledMetric {
        Metric?: AutoScalingXmlStringMaxLen255;
        Granularity?: AutoScalingXmlStringMaxLen255;
    }

    export type AutoScalingEnabledMetrics = Array<AutoScalingEnabledMetric>;
    export interface AutoScalingEnterStandbyAnswer {
        Activities?: AutoScalingActivities;
    }

    export interface AutoScalingEnterStandbyQuery {
        InstanceIds?: AutoScalingInstanceIds;
        AutoScalingGroupName: AutoScalingResourceName;
        ShouldDecrementDesiredCapacity: AutoScalingShouldDecrementDesiredCapacity;
    }

    export interface AutoScalingExecutePolicyType {
        AutoScalingGroupName?: AutoScalingResourceName;
        PolicyName: AutoScalingResourceName;
        HonorCooldown?: AutoScalingHonorCooldown;
    }

    export interface AutoScalingExitStandbyAnswer {
        Activities?: AutoScalingActivities;
    }

    export interface AutoScalingExitStandbyQuery {
        InstanceIds?: AutoScalingInstanceIds;
        AutoScalingGroupName: AutoScalingResourceName;
    }

    export interface AutoScalingFilter {
        Name?: AutoScalingXmlString;
        Values?: AutoScalingValues;
    }

    export type AutoScalingFilters = Array<AutoScalingFilter>;
    export type AutoScalingForceDelete = boolean;
    export type AutoScalingGlobalTimeout = number;
    export type AutoScalingHealthCheckGracePeriod = number;
    export type AutoScalingHeartbeatTimeout = number;
    export type AutoScalingHonorCooldown = boolean;
    export interface AutoScalingInstance {
        InstanceId: AutoScalingXmlStringMaxLen16;
        AvailabilityZone: AutoScalingXmlStringMaxLen255;
        LifecycleState: AutoScalingLifecycleState;
        HealthStatus: AutoScalingXmlStringMaxLen32;
        LaunchConfigurationName: AutoScalingXmlStringMaxLen255;
    }

    export type AutoScalingInstanceIds = Array<AutoScalingXmlStringMaxLen16>;
    export interface AutoScalingInstanceMonitoring {
        Enabled?: AutoScalingMonitoringEnabled;
    }

    export type AutoScalingInstances = Array<AutoScalingInstance>;
    export interface AutoScalingInvalidNextToken {
        message?: AutoScalingXmlStringMaxLen255;
    }

    export interface AutoScalingLaunchConfiguration {
        LaunchConfigurationName: AutoScalingXmlStringMaxLen255;
        LaunchConfigurationARN?: AutoScalingResourceName;
        ImageId: AutoScalingXmlStringMaxLen255;
        KeyName?: AutoScalingXmlStringMaxLen255;
        SecurityGroups?: AutoScalingSecurityGroups;
        ClassicLinkVPCId?: AutoScalingXmlStringMaxLen255;
        ClassicLinkVPCSecurityGroups?: AutoScalingClassicLinkVPCSecurityGroups;
        UserData?: AutoScalingXmlStringUserData;
        InstanceType: AutoScalingXmlStringMaxLen255;
        KernelId?: AutoScalingXmlStringMaxLen255;
        RamdiskId?: AutoScalingXmlStringMaxLen255;
        BlockDeviceMappings?: AutoScalingBlockDeviceMappings;
        InstanceMonitoring?: AutoScalingInstanceMonitoring;
        SpotPrice?: AutoScalingSpotPrice;
        IamInstanceProfile?: AutoScalingXmlStringMaxLen1600;
        CreatedTime: AutoScalingTimestampType;
        EbsOptimized?: AutoScalingEbsOptimized;
        AssociatePublicIpAddress?: AutoScalingAssociatePublicIpAddress;
        PlacementTenancy?: AutoScalingXmlStringMaxLen64;
    }

    export interface AutoScalingLaunchConfigurationNameType {
        LaunchConfigurationName: AutoScalingResourceName;
    }

    export type AutoScalingLaunchConfigurationNames = Array<AutoScalingResourceName>;
    export interface AutoScalingLaunchConfigurationNamesType {
        LaunchConfigurationNames?: AutoScalingLaunchConfigurationNames;
        NextToken?: AutoScalingXmlString;
        MaxRecords?: AutoScalingMaxRecords;
    }

    export type AutoScalingLaunchConfigurations = Array<AutoScalingLaunchConfiguration>;
    export interface AutoScalingLaunchConfigurationsType {
        LaunchConfigurations: AutoScalingLaunchConfigurations;
        NextToken?: AutoScalingXmlString;
    }

    export type AutoScalingLifecycleActionResult = string;
    export type AutoScalingLifecycleActionToken = string;
    export interface AutoScalingLifecycleHook {
        LifecycleHookName?: AutoScalingAsciiStringMaxLen255;
        AutoScalingGroupName?: AutoScalingResourceName;
        LifecycleTransition?: AutoScalingLifecycleTransition;
        NotificationTargetARN?: AutoScalingResourceName;
        RoleARN?: AutoScalingResourceName;
        NotificationMetadata?: AutoScalingXmlStringMaxLen1023;
        HeartbeatTimeout?: AutoScalingHeartbeatTimeout;
        GlobalTimeout?: AutoScalingGlobalTimeout;
        DefaultResult?: AutoScalingLifecycleActionResult;
    }

    export type AutoScalingLifecycleHookNames = Array<AutoScalingAsciiStringMaxLen255>;
    export type AutoScalingLifecycleHooks = Array<AutoScalingLifecycleHook>;
    export type AutoScalingLifecycleState = string;
    export type AutoScalingLifecycleTransition = string;
    export interface AutoScalingLimitExceededFault {
        message?: AutoScalingXmlStringMaxLen255;
    }

    export type AutoScalingLoadBalancerNames = Array<AutoScalingXmlStringMaxLen255>;
    export type AutoScalingMaxNumberOfAutoScalingGroups = number;
    export type AutoScalingMaxNumberOfLaunchConfigurations = number;
    export type AutoScalingMaxRecords = number;
    export interface AutoScalingMetricCollectionType {
        Metric?: AutoScalingXmlStringMaxLen255;
    }

    export type AutoScalingMetricCollectionTypes = Array<AutoScalingMetricCollectionType>;
    export interface AutoScalingMetricGranularityType {
        Granularity?: AutoScalingXmlStringMaxLen255;
    }

    export type AutoScalingMetricGranularityTypes = Array<AutoScalingMetricGranularityType>;
    export type AutoScalingMetrics = Array<AutoScalingXmlStringMaxLen255>;
    export type AutoScalingMinAdjustmentStep = number;
    export type AutoScalingMonitoringEnabled = boolean;
    export type AutoScalingNoDevice = boolean;
    export interface AutoScalingNotificationConfiguration {
        AutoScalingGroupName?: AutoScalingResourceName;
        TopicARN?: AutoScalingResourceName;
        NotificationType?: AutoScalingXmlStringMaxLen255;
    }

    export type AutoScalingNotificationConfigurations = Array<AutoScalingNotificationConfiguration>;
    export interface AutoScalingPoliciesType {
        ScalingPolicies?: AutoScalingScalingPolicies;
        NextToken?: AutoScalingXmlString;
    }

    export interface AutoScalingPolicyARNType {
        PolicyARN?: AutoScalingResourceName;
    }

    export type AutoScalingPolicyIncrement = number;
    export type AutoScalingPolicyNames = Array<AutoScalingResourceName>;
    export type AutoScalingProcessNames = Array<AutoScalingXmlStringMaxLen255>;
    export interface AutoScalingProcessType {
        ProcessName: AutoScalingXmlStringMaxLen255;
    }

    export type AutoScalingProcesses = Array<AutoScalingProcessType>;
    export interface AutoScalingProcessesType {
        Processes?: AutoScalingProcesses;
    }

    export type AutoScalingProgress = number;
    export type AutoScalingPropagateAtLaunch = boolean;
    export interface AutoScalingPutLifecycleHookAnswer {
    }

    export interface AutoScalingPutLifecycleHookType {
        LifecycleHookName: AutoScalingAsciiStringMaxLen255;
        AutoScalingGroupName: AutoScalingResourceName;
        LifecycleTransition?: AutoScalingLifecycleTransition;
        RoleARN?: AutoScalingResourceName;
        NotificationTargetARN?: AutoScalingResourceName;
        NotificationMetadata?: AutoScalingXmlStringMaxLen1023;
        HeartbeatTimeout?: AutoScalingHeartbeatTimeout;
        DefaultResult?: AutoScalingLifecycleActionResult;
    }

    export interface AutoScalingPutNotificationConfigurationType {
        AutoScalingGroupName: AutoScalingResourceName;
        TopicARN: AutoScalingResourceName;
        NotificationTypes: AutoScalingAutoScalingNotificationTypes;
    }

    export interface AutoScalingPutScalingPolicyType {
        AutoScalingGroupName: AutoScalingResourceName;
        PolicyName: AutoScalingXmlStringMaxLen255;
        ScalingAdjustment: AutoScalingPolicyIncrement;
        AdjustmentType: AutoScalingXmlStringMaxLen255;
        Cooldown?: AutoScalingCooldown;
        MinAdjustmentStep?: AutoScalingMinAdjustmentStep;
    }

    export interface AutoScalingPutScheduledUpdateGroupActionType {
        AutoScalingGroupName: AutoScalingResourceName;
        ScheduledActionName: AutoScalingXmlStringMaxLen255;
        Time?: AutoScalingTimestampType;
        StartTime?: AutoScalingTimestampType;
        EndTime?: AutoScalingTimestampType;
        Recurrence?: AutoScalingXmlStringMaxLen255;
        MinSize?: AutoScalingAutoScalingGroupMinSize;
        MaxSize?: AutoScalingAutoScalingGroupMaxSize;
        DesiredCapacity?: AutoScalingAutoScalingGroupDesiredCapacity;
    }

    export interface AutoScalingRecordLifecycleActionHeartbeatAnswer {
    }

    export interface AutoScalingRecordLifecycleActionHeartbeatType {
        LifecycleHookName: AutoScalingAsciiStringMaxLen255;
        AutoScalingGroupName: AutoScalingResourceName;
        LifecycleActionToken: AutoScalingLifecycleActionToken;
    }

    export interface AutoScalingResourceInUseFault {
        message?: AutoScalingXmlStringMaxLen255;
    }

    export type AutoScalingResourceName = string; // pattern: "[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*"
    export interface AutoScalingScalingActivityInProgressFault {
        message?: AutoScalingXmlStringMaxLen255;
    }

    export type AutoScalingScalingActivityStatusCode = string;
    export type AutoScalingScalingPolicies = Array<AutoScalingScalingPolicy>;
    export interface AutoScalingScalingPolicy {
        AutoScalingGroupName?: AutoScalingXmlStringMaxLen255;
        PolicyName?: AutoScalingXmlStringMaxLen255;
        ScalingAdjustment?: AutoScalingPolicyIncrement;
        AdjustmentType?: AutoScalingXmlStringMaxLen255;
        Cooldown?: AutoScalingCooldown;
        PolicyARN?: AutoScalingResourceName;
        Alarms?: AutoScalingAlarms;
        MinAdjustmentStep?: AutoScalingMinAdjustmentStep;
    }

    export interface AutoScalingScalingProcessQuery {
        AutoScalingGroupName: AutoScalingResourceName;
        ScalingProcesses?: AutoScalingProcessNames;
    }

    export type AutoScalingScheduledActionNames = Array<AutoScalingResourceName>;
    export interface AutoScalingScheduledActionsType {
        ScheduledUpdateGroupActions?: AutoScalingScheduledUpdateGroupActions;
        NextToken?: AutoScalingXmlString;
    }

    export interface AutoScalingScheduledUpdateGroupAction {
        AutoScalingGroupName?: AutoScalingXmlStringMaxLen255;
        ScheduledActionName?: AutoScalingXmlStringMaxLen255;
        ScheduledActionARN?: AutoScalingResourceName;
        Time?: AutoScalingTimestampType;
        StartTime?: AutoScalingTimestampType;
        EndTime?: AutoScalingTimestampType;
        Recurrence?: AutoScalingXmlStringMaxLen255;
        MinSize?: AutoScalingAutoScalingGroupMinSize;
        MaxSize?: AutoScalingAutoScalingGroupMaxSize;
        DesiredCapacity?: AutoScalingAutoScalingGroupDesiredCapacity;
    }

    export type AutoScalingScheduledUpdateGroupActions = Array<AutoScalingScheduledUpdateGroupAction>;
    export type AutoScalingSecurityGroups = Array<AutoScalingXmlString>;
    export interface AutoScalingSetDesiredCapacityType {
        AutoScalingGroupName: AutoScalingResourceName;
        DesiredCapacity: AutoScalingAutoScalingGroupDesiredCapacity;
        HonorCooldown?: AutoScalingHonorCooldown;
    }

    export interface AutoScalingSetInstanceHealthQuery {
        InstanceId: AutoScalingXmlStringMaxLen16;
        HealthStatus: AutoScalingXmlStringMaxLen32;
        ShouldRespectGracePeriod?: AutoScalingShouldRespectGracePeriod;
    }

    export type AutoScalingShouldDecrementDesiredCapacity = boolean;
    export type AutoScalingShouldRespectGracePeriod = boolean;
    export type AutoScalingSpotPrice = string;
    export interface AutoScalingSuspendedProcess {
        ProcessName?: AutoScalingXmlStringMaxLen255;
        SuspensionReason?: AutoScalingXmlStringMaxLen255;
    }

    export type AutoScalingSuspendedProcesses = Array<AutoScalingSuspendedProcess>;
    export interface AutoScalingTag {
        ResourceId?: AutoScalingXmlString;
        ResourceType?: AutoScalingXmlString;
        Key: AutoScalingTagKey;
        Value?: AutoScalingTagValue;
        PropagateAtLaunch?: AutoScalingPropagateAtLaunch;
    }

    export interface AutoScalingTagDescription {
        ResourceId?: AutoScalingXmlString;
        ResourceType?: AutoScalingXmlString;
        Key?: AutoScalingTagKey;
        Value?: AutoScalingTagValue;
        PropagateAtLaunch?: AutoScalingPropagateAtLaunch;
    }

    export type AutoScalingTagDescriptionList = Array<AutoScalingTagDescription>;
    export type AutoScalingTagKey = string; // pattern: "[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*"
    export type AutoScalingTagValue = string; // pattern: "[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*"
    export type AutoScalingTags = Array<AutoScalingTag>;
    export interface AutoScalingTagsType {
        Tags?: AutoScalingTagDescriptionList;
        NextToken?: AutoScalingXmlString;
    }

    export interface AutoScalingTerminateInstanceInAutoScalingGroupType {
        InstanceId: AutoScalingXmlStringMaxLen16;
        ShouldDecrementDesiredCapacity: AutoScalingShouldDecrementDesiredCapacity;
    }

    export type AutoScalingTerminationPolicies = Array<AutoScalingXmlStringMaxLen1600>;
    export type AutoScalingTimestampType = number;
    export interface AutoScalingUpdateAutoScalingGroupType {
        AutoScalingGroupName: AutoScalingResourceName;
        LaunchConfigurationName?: AutoScalingResourceName;
        MinSize?: AutoScalingAutoScalingGroupMinSize;
        MaxSize?: AutoScalingAutoScalingGroupMaxSize;
        DesiredCapacity?: AutoScalingAutoScalingGroupDesiredCapacity;
        DefaultCooldown?: AutoScalingCooldown;
        AvailabilityZones?: AutoScalingAvailabilityZones;
        HealthCheckType?: AutoScalingXmlStringMaxLen32;
        HealthCheckGracePeriod?: AutoScalingHealthCheckGracePeriod;
        PlacementGroup?: AutoScalingXmlStringMaxLen255;
        VPCZoneIdentifier?: AutoScalingXmlStringMaxLen255;
        TerminationPolicies?: AutoScalingTerminationPolicies;
    }

    export type AutoScalingValues = Array<AutoScalingXmlString>;
    export type AutoScalingXmlString = string; // pattern: "[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*"
    export type AutoScalingXmlStringMaxLen1023 = string; // pattern: "[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*"
    export type AutoScalingXmlStringMaxLen16 = string; // pattern: "[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*"
    export type AutoScalingXmlStringMaxLen1600 = string; // pattern: "[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*"
    export type AutoScalingXmlStringMaxLen255 = string; // pattern: "[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*"
    export type AutoScalingXmlStringMaxLen32 = string; // pattern: "[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*"
    export type AutoScalingXmlStringMaxLen64 = string; // pattern: "[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*"
    export type AutoScalingXmlStringUserData = string; // pattern: "[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*"
}
