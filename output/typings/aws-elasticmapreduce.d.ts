// Type definitions for aws-sdk - Amazon Elastic MapReduce
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

///<reference path="./aws-sdk-common.d.ts" />

declare module "aws-sdk" {

    /*
     * apiVersion: 2009-03-31
     * endpointPrefix: elasticmapreduce
     * serviceAbbreviation: Amazon EMR
     * signatureVersion: v4
     * protocol: json
     */
    export class EMR extends Service {
      constructor(options?: any);
      endpoint: Endpoint;
      addInstanceGroups(params: EMR.AddInstanceGroupsInput, callback?: (err: EMR.InternalServerError|any, data: EMR.AddInstanceGroupsOutput|any) => void): Request;
      addJobFlowSteps(params: EMR.AddJobFlowStepsInput, callback?: (err: EMR.InternalServerError|any, data: EMR.AddJobFlowStepsOutput|any) => void): Request;
      addTags(params: EMR.AddTagsInput, callback?: (err: EMR.InternalServerException|EMR.InvalidRequestException|any, data: EMR.AddTagsOutput|any) => void): Request;
      describeCluster(params: EMR.DescribeClusterInput, callback?: (err: EMR.InternalServerException|EMR.InvalidRequestException|any, data: EMR.DescribeClusterOutput|any) => void): Request;
      describeJobFlows(params: EMR.DescribeJobFlowsInput, callback?: (err: EMR.InternalServerError|any, data: EMR.DescribeJobFlowsOutput|any) => void): Request;
      describeStep(params: EMR.DescribeStepInput, callback?: (err: EMR.InternalServerException|EMR.InvalidRequestException|any, data: EMR.DescribeStepOutput|any) => void): Request;
      listBootstrapActions(params: EMR.ListBootstrapActionsInput, callback?: (err: EMR.InternalServerException|EMR.InvalidRequestException|any, data: EMR.ListBootstrapActionsOutput|any) => void): Request;
      listClusters(params: EMR.ListClustersInput, callback?: (err: EMR.InternalServerException|EMR.InvalidRequestException|any, data: EMR.ListClustersOutput|any) => void): Request;
      listInstanceGroups(params: EMR.ListInstanceGroupsInput, callback?: (err: EMR.InternalServerException|EMR.InvalidRequestException|any, data: EMR.ListInstanceGroupsOutput|any) => void): Request;
      listInstances(params: EMR.ListInstancesInput, callback?: (err: EMR.InternalServerException|EMR.InvalidRequestException|any, data: EMR.ListInstancesOutput|any) => void): Request;
      listSteps(params: EMR.ListStepsInput, callback?: (err: EMR.InternalServerException|EMR.InvalidRequestException|any, data: EMR.ListStepsOutput|any) => void): Request;
      modifyInstanceGroups(params: EMR.ModifyInstanceGroupsInput, callback?: (err: EMR.InternalServerError|any, data: any) => void): Request;
      removeTags(params: EMR.RemoveTagsInput, callback?: (err: EMR.InternalServerException|EMR.InvalidRequestException|any, data: EMR.RemoveTagsOutput|any) => void): Request;
      runJobFlow(params: EMR.RunJobFlowInput, callback?: (err: EMR.InternalServerError|any, data: EMR.RunJobFlowOutput|any) => void): Request;
      setTerminationProtection(params: EMR.SetTerminationProtectionInput, callback?: (err: EMR.InternalServerError|any, data: any) => void): Request;
      setVisibleToAllUsers(params: EMR.SetVisibleToAllUsersInput, callback?: (err: EMR.InternalServerError|any, data: any) => void): Request;
      terminateJobFlows(params: EMR.TerminateJobFlowsInput, callback?: (err: EMR.InternalServerError|any, data: any) => void): Request;

    }

    export module EMR {
        export type ActionOnFailure = string;
        export type ApplicationList = Application[];
        export type Boolean = boolean;
        export type BooleanObject = boolean;
        export type BootstrapActionConfigList = BootstrapActionConfig[];
        export type BootstrapActionDetailList = BootstrapActionDetail[];
        export type ClusterId = string;
        export type ClusterState = string;
        export type ClusterStateChangeReasonCode = string;
        export type ClusterStateList = ClusterState[];
        export type ClusterSummaryList = ClusterSummary[];
        export type CommandList = Command[];
        export type ConfigurationList = Configuration[];
        export type Date = number;
        export type EC2InstanceIdsToTerminateList = InstanceId[];
        export type EbsBlockDeviceConfigList = EbsBlockDeviceConfig[];
        export type EbsBlockDeviceList = EbsBlockDevice[];
        export type EbsVolumeList = EbsVolume[];
        export type ErrorCode = string;    // max: 256, min: 1
        export type ErrorMessage = string;
        export type InstanceGroupConfigList = InstanceGroupConfig[];
        export type InstanceGroupDetailList = InstanceGroupDetail[];
        export type InstanceGroupId = string;
        export type InstanceGroupIdsList = XmlStringMaxLen256[];
        export type InstanceGroupList = InstanceGroup[];
        export type InstanceGroupModifyConfigList = InstanceGroupModifyConfig[];
        export type InstanceGroupState = string;
        export type InstanceGroupStateChangeReasonCode = string;
        export type InstanceGroupType = string;
        export type InstanceGroupTypeList = InstanceGroupType[];
        export type InstanceId = string;
        export type InstanceList = Instance[];
        export type InstanceRoleType = string;
        export type InstanceState = string;
        export type InstanceStateChangeReasonCode = string;
        export type InstanceType = string;    // pattern: &quot;[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*&quot;, max: 256, min: 1
        export type Integer = number;
        export type JobFlowDetailList = JobFlowDetail[];
        export type JobFlowExecutionState = string;
        export type JobFlowExecutionStateList = JobFlowExecutionState[];
        export type KeyValueList = KeyValue[];
        export type Marker = string;
        export type MarketType = string;
        export type NewSupportedProductsList = SupportedProductConfig[];
        export type ResourceId = string;
        export type SecurityGroupsList = XmlStringMaxLen256[];
        export type StepConfigList = StepConfig[];
        export type StepDetailList = StepDetail[];
        export type StepExecutionState = string;
        export type StepId = string;
        export type StepIdsList = XmlStringMaxLen256[];
        export type StepState = string;
        export type StepStateChangeReasonCode = string;
        export type StepStateList = StepState[];
        export type StepSummaryList = StepSummary[];
        export type String = string;
        export type StringList = String[];
        export type StringMap = {[key:string]: String};
        export type SupportedProductsList = XmlStringMaxLen256[];
        export type TagList = Tag[];
        export type XmlString = string;    // pattern: &quot;[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*&quot;, max: 10280
        export type XmlStringList = XmlString[];
        export type XmlStringMaxLen256 = string;    // pattern: &quot;[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*&quot;, max: 256

        export interface AddInstanceGroupsInput {
            InstanceGroups: InstanceGroupConfigList;
            JobFlowId: XmlStringMaxLen256;
        }
        export interface AddInstanceGroupsOutput {
            JobFlowId?: XmlStringMaxLen256;
            InstanceGroupIds?: InstanceGroupIdsList;
        }
        export interface AddJobFlowStepsInput {
            JobFlowId: XmlStringMaxLen256;
            Steps: StepConfigList;
        }
        export interface AddJobFlowStepsOutput {
            StepIds?: StepIdsList;
        }
        export interface AddTagsInput {
            ResourceId: ResourceId;
            Tags: TagList;
        }
        export interface AddTagsOutput {
        }
        export interface Application {
            Name?: String;
            Version?: String;
            Args?: StringList;
            AdditionalInfo?: StringMap;
        }
        export interface BootstrapActionConfig {
            Name: XmlStringMaxLen256;
            ScriptBootstrapAction: ScriptBootstrapActionConfig;
        }
        export interface BootstrapActionDetail {
            BootstrapActionConfig?: BootstrapActionConfig;
        }
        export interface Cluster {
            Id?: ClusterId;
            Name?: String;
            Status?: ClusterStatus;
            Ec2InstanceAttributes?: Ec2InstanceAttributes;
            LogUri?: String;
            RequestedAmiVersion?: String;
            RunningAmiVersion?: String;
            ReleaseLabel?: String;
            AutoTerminate?: Boolean;
            TerminationProtected?: Boolean;
            VisibleToAllUsers?: Boolean;
            Applications?: ApplicationList;
            Tags?: TagList;
            ServiceRole?: String;
            NormalizedInstanceHours?: Integer;
            MasterPublicDnsName?: String;
            Configurations?: ConfigurationList;
        }
        export interface ClusterStateChangeReason {
            Code?: ClusterStateChangeReasonCode;
            Message?: String;
        }
        export interface ClusterStatus {
            State?: ClusterState;
            StateChangeReason?: ClusterStateChangeReason;
            Timeline?: ClusterTimeline;
        }
        export interface ClusterSummary {
            Id?: ClusterId;
            Name?: String;
            Status?: ClusterStatus;
            NormalizedInstanceHours?: Integer;
        }
        export interface ClusterTimeline {
            CreationDateTime?: Date;
            ReadyDateTime?: Date;
            EndDateTime?: Date;
        }
        export interface Command {
            Name?: String;
            ScriptPath?: String;
            Args?: StringList;
        }
        export interface Configuration {
            Classification?: String;
            Configurations?: ConfigurationList;
            Properties?: StringMap;
        }
        export interface DescribeClusterInput {
            ClusterId: ClusterId;
        }
        export interface DescribeClusterOutput {
            Cluster?: Cluster;
        }
        export interface DescribeJobFlowsInput {
            CreatedAfter?: Date;
            CreatedBefore?: Date;
            JobFlowIds?: XmlStringList;
            JobFlowStates?: JobFlowExecutionStateList;
        }
        export interface DescribeJobFlowsOutput {
            JobFlows?: JobFlowDetailList;
        }
        export interface DescribeStepInput {
            ClusterId: ClusterId;
            StepId: StepId;
        }
        export interface DescribeStepOutput {
            Step?: Step;
        }
        export interface EbsBlockDevice {
            VolumeSpecification?: VolumeSpecification;
            Device?: String;
        }
        export interface EbsBlockDeviceConfig {
            VolumeSpecification: VolumeSpecification;
            VolumesPerInstance?: Integer;
        }
        export interface EbsConfiguration {
            EbsBlockDeviceConfigs?: EbsBlockDeviceConfigList;
            EbsOptimized?: BooleanObject;
        }
        export interface EbsVolume {
            Device?: String;
            VolumeId?: String;
        }
        export interface Ec2InstanceAttributes {
            Ec2KeyName?: String;
            Ec2SubnetId?: String;
            Ec2AvailabilityZone?: String;
            IamInstanceProfile?: String;
            EmrManagedMasterSecurityGroup?: String;
            EmrManagedSlaveSecurityGroup?: String;
            ServiceAccessSecurityGroup?: String;
            AdditionalMasterSecurityGroups?: StringList;
            AdditionalSlaveSecurityGroups?: StringList;
        }
        export interface HadoopJarStepConfig {
            Properties?: KeyValueList;
            Jar: XmlString;
            MainClass?: XmlString;
            Args?: XmlStringList;
        }
        export interface HadoopStepConfig {
            Jar?: String;
            Properties?: StringMap;
            MainClass?: String;
            Args?: StringList;
        }
        export interface Instance {
            Id?: InstanceId;
            Ec2InstanceId?: InstanceId;
            PublicDnsName?: String;
            PublicIpAddress?: String;
            PrivateDnsName?: String;
            PrivateIpAddress?: String;
            Status?: InstanceStatus;
            InstanceGroupId?: String;
            EbsVolumes?: EbsVolumeList;
        }
        export interface InstanceGroup {
            Id?: InstanceGroupId;
            Name?: String;
            Market?: MarketType;
            InstanceGroupType?: InstanceGroupType;
            BidPrice?: String;
            InstanceType?: InstanceType;
            RequestedInstanceCount?: Integer;
            RunningInstanceCount?: Integer;
            Status?: InstanceGroupStatus;
            Configurations?: ConfigurationList;
            EbsBlockDevices?: EbsBlockDeviceList;
            EbsOptimized?: BooleanObject;
        }
        export interface InstanceGroupConfig {
            Name?: XmlStringMaxLen256;
            Market?: MarketType;
            InstanceRole: InstanceRoleType;
            BidPrice?: XmlStringMaxLen256;
            InstanceType: InstanceType;
            InstanceCount: Integer;
            Configurations?: ConfigurationList;
            EbsConfiguration?: EbsConfiguration;
        }
        export interface InstanceGroupDetail {
            InstanceGroupId?: XmlStringMaxLen256;
            Name?: XmlStringMaxLen256;
            Market: MarketType;
            InstanceRole: InstanceRoleType;
            BidPrice?: XmlStringMaxLen256;
            InstanceType: InstanceType;
            InstanceRequestCount: Integer;
            InstanceRunningCount: Integer;
            State: InstanceGroupState;
            LastStateChangeReason?: XmlString;
            CreationDateTime: Date;
            StartDateTime?: Date;
            ReadyDateTime?: Date;
            EndDateTime?: Date;
        }
        export interface InstanceGroupModifyConfig {
            InstanceGroupId: XmlStringMaxLen256;
            InstanceCount?: Integer;
            EC2InstanceIdsToTerminate?: EC2InstanceIdsToTerminateList;
        }
        export interface InstanceGroupStateChangeReason {
            Code?: InstanceGroupStateChangeReasonCode;
            Message?: String;
        }
        export interface InstanceGroupStatus {
            State?: InstanceGroupState;
            StateChangeReason?: InstanceGroupStateChangeReason;
            Timeline?: InstanceGroupTimeline;
        }
        export interface InstanceGroupTimeline {
            CreationDateTime?: Date;
            ReadyDateTime?: Date;
            EndDateTime?: Date;
        }
        export interface InstanceStateChangeReason {
            Code?: InstanceStateChangeReasonCode;
            Message?: String;
        }
        export interface InstanceStatus {
            State?: InstanceState;
            StateChangeReason?: InstanceStateChangeReason;
            Timeline?: InstanceTimeline;
        }
        export interface InstanceTimeline {
            CreationDateTime?: Date;
            ReadyDateTime?: Date;
            EndDateTime?: Date;
        }
        export interface InternalServerError {
        }
        export interface InternalServerException {
            Message?: ErrorMessage;
        }
        export interface InvalidRequestException {
            ErrorCode?: ErrorCode;
            Message?: ErrorMessage;
        }
        export interface JobFlowDetail {
            JobFlowId: XmlStringMaxLen256;
            Name: XmlStringMaxLen256;
            LogUri?: XmlString;
            AmiVersion?: XmlStringMaxLen256;
            ExecutionStatusDetail: JobFlowExecutionStatusDetail;
            Instances: JobFlowInstancesDetail;
            Steps?: StepDetailList;
            BootstrapActions?: BootstrapActionDetailList;
            SupportedProducts?: SupportedProductsList;
            VisibleToAllUsers?: Boolean;
            JobFlowRole?: XmlString;
            ServiceRole?: XmlString;
        }
        export interface JobFlowExecutionStatusDetail {
            State: JobFlowExecutionState;
            CreationDateTime: Date;
            StartDateTime?: Date;
            ReadyDateTime?: Date;
            EndDateTime?: Date;
            LastStateChangeReason?: XmlString;
        }
        export interface JobFlowInstancesConfig {
            MasterInstanceType?: InstanceType;
            SlaveInstanceType?: InstanceType;
            InstanceCount?: Integer;
            InstanceGroups?: InstanceGroupConfigList;
            Ec2KeyName?: XmlStringMaxLen256;
            Placement?: PlacementType;
            KeepJobFlowAliveWhenNoSteps?: Boolean;
            TerminationProtected?: Boolean;
            HadoopVersion?: XmlStringMaxLen256;
            Ec2SubnetId?: XmlStringMaxLen256;
            EmrManagedMasterSecurityGroup?: XmlStringMaxLen256;
            EmrManagedSlaveSecurityGroup?: XmlStringMaxLen256;
            ServiceAccessSecurityGroup?: XmlStringMaxLen256;
            AdditionalMasterSecurityGroups?: SecurityGroupsList;
            AdditionalSlaveSecurityGroups?: SecurityGroupsList;
        }
        export interface JobFlowInstancesDetail {
            MasterInstanceType: InstanceType;
            MasterPublicDnsName?: XmlString;
            MasterInstanceId?: XmlString;
            SlaveInstanceType: InstanceType;
            InstanceCount: Integer;
            InstanceGroups?: InstanceGroupDetailList;
            NormalizedInstanceHours?: Integer;
            Ec2KeyName?: XmlStringMaxLen256;
            Ec2SubnetId?: XmlStringMaxLen256;
            Placement?: PlacementType;
            KeepJobFlowAliveWhenNoSteps?: Boolean;
            TerminationProtected?: Boolean;
            HadoopVersion?: XmlStringMaxLen256;
        }
        export interface KeyValue {
            Key?: XmlString;
            Value?: XmlString;
        }
        export interface ListBootstrapActionsInput {
            ClusterId: ClusterId;
            Marker?: Marker;
        }
        export interface ListBootstrapActionsOutput {
            BootstrapActions?: CommandList;
            Marker?: Marker;
        }
        export interface ListClustersInput {
            CreatedAfter?: Date;
            CreatedBefore?: Date;
            ClusterStates?: ClusterStateList;
            Marker?: Marker;
        }
        export interface ListClustersOutput {
            Clusters?: ClusterSummaryList;
            Marker?: Marker;
        }
        export interface ListInstanceGroupsInput {
            ClusterId: ClusterId;
            Marker?: Marker;
        }
        export interface ListInstanceGroupsOutput {
            InstanceGroups?: InstanceGroupList;
            Marker?: Marker;
        }
        export interface ListInstancesInput {
            ClusterId: ClusterId;
            InstanceGroupId?: InstanceGroupId;
            InstanceGroupTypes?: InstanceGroupTypeList;
            Marker?: Marker;
        }
        export interface ListInstancesOutput {
            Instances?: InstanceList;
            Marker?: Marker;
        }
        export interface ListStepsInput {
            ClusterId: ClusterId;
            StepStates?: StepStateList;
            StepIds?: XmlStringList;
            Marker?: Marker;
        }
        export interface ListStepsOutput {
            Steps?: StepSummaryList;
            Marker?: Marker;
        }
        export interface ModifyInstanceGroupsInput {
            InstanceGroups?: InstanceGroupModifyConfigList;
        }
        export interface PlacementType {
            AvailabilityZone: XmlString;
        }
        export interface RemoveTagsInput {
            ResourceId: ResourceId;
            TagKeys: StringList;
        }
        export interface RemoveTagsOutput {
        }
        export interface RunJobFlowInput {
            Name: XmlStringMaxLen256;
            LogUri?: XmlString;
            AdditionalInfo?: XmlString;
            AmiVersion?: XmlStringMaxLen256;
            ReleaseLabel?: XmlStringMaxLen256;
            Instances: JobFlowInstancesConfig;
            Steps?: StepConfigList;
            BootstrapActions?: BootstrapActionConfigList;
            SupportedProducts?: SupportedProductsList;
            NewSupportedProducts?: NewSupportedProductsList;
            Applications?: ApplicationList;
            Configurations?: ConfigurationList;
            VisibleToAllUsers?: Boolean;
            JobFlowRole?: XmlString;
            ServiceRole?: XmlString;
            Tags?: TagList;
        }
        export interface RunJobFlowOutput {
            JobFlowId?: XmlStringMaxLen256;
        }
        export interface ScriptBootstrapActionConfig {
            Path: XmlString;
            Args?: XmlStringList;
        }
        export interface SetTerminationProtectionInput {
            JobFlowIds: XmlStringList;
            TerminationProtected: Boolean;
        }
        export interface SetVisibleToAllUsersInput {
            JobFlowIds: XmlStringList;
            VisibleToAllUsers: Boolean;
        }
        export interface Step {
            Id?: StepId;
            Name?: String;
            Config?: HadoopStepConfig;
            ActionOnFailure?: ActionOnFailure;
            Status?: StepStatus;
        }
        export interface StepConfig {
            Name: XmlStringMaxLen256;
            ActionOnFailure?: ActionOnFailure;
            HadoopJarStep: HadoopJarStepConfig;
        }
        export interface StepDetail {
            StepConfig: StepConfig;
            ExecutionStatusDetail: StepExecutionStatusDetail;
        }
        export interface StepExecutionStatusDetail {
            State: StepExecutionState;
            CreationDateTime: Date;
            StartDateTime?: Date;
            EndDateTime?: Date;
            LastStateChangeReason?: XmlString;
        }
        export interface StepStateChangeReason {
            Code?: StepStateChangeReasonCode;
            Message?: String;
        }
        export interface StepStatus {
            State?: StepState;
            StateChangeReason?: StepStateChangeReason;
            Timeline?: StepTimeline;
        }
        export interface StepSummary {
            Id?: StepId;
            Name?: String;
            Config?: HadoopStepConfig;
            ActionOnFailure?: ActionOnFailure;
            Status?: StepStatus;
        }
        export interface StepTimeline {
            CreationDateTime?: Date;
            StartDateTime?: Date;
            EndDateTime?: Date;
        }
        export interface SupportedProductConfig {
            Name?: XmlStringMaxLen256;
            Args?: XmlStringList;
        }
        export interface Tag {
            Key?: String;
            Value?: String;
        }
        export interface TerminateJobFlowsInput {
            JobFlowIds: XmlStringList;
        }
        export interface VolumeSpecification {
            VolumeType: String;
            Iops?: Integer;
            SizeInGB: Integer;
        }

    }
}
