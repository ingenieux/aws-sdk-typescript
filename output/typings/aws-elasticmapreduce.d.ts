// Type definitions for aws-sdk - Amazon Elastic MapReduce
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

// COMMENTED <reference path="./aws-sdk.d.ts" />

declare module "aws-sdk" {

  /**
   * apiVersion: 2009-03-31
   * endpointPrefix: elasticmapreduce
   * serviceAbbreviation: Amazon EMR
   * signatureVersion: v4
   * protocol: json
   *
   * Amazon Elastic MapReduce (Amazon EMR) is a web service that makes it easy to
   process large amounts of data efficiently. Amazon EMR uses Hadoop processing
   combined with several AWS products to do tasks such as web indexing, data
   mining, log file analysis, machine learning, scientific simulation, and data
   warehousing.
   *
   */
  export class EMR extends Service {
    constructor(options?: any);
    endpoint: Endpoint;
    /**
     * AddInstanceGroups adds an instance group to a running cluster.
     *
     * @error InternalServerError   
     */
    addInstanceGroups(params:EMR.AddInstanceGroupsInput, callback?:(err:EMR.InternalServerError | any, data:EMR.AddInstanceGroupsOutput | any) => void):Request<EMR.AddInstanceGroupsOutput | any, EMR.InternalServerError | any>;
    /**
     * AddJobFlowSteps adds new steps to a running job flow. A maximum of 256 steps are
allowed in each job flow.

If your job flow is long-running (such as a Hive data warehouse) or complex, you
may require more than 256 steps to process your data. You can bypass the
256-step limitation in various ways, including using the SSH shell to connect to
the master node and submitting queries directly to the software running on the
master node, such as Hive and Hadoop. For more information on how to do this, go
to Add More than 256 Steps to a Job Flow
[http://docs.aws.amazon.com/ElasticMapReduce/latest/DeveloperGuide/AddMoreThan256Steps.html] 
in the Amazon Elastic MapReduce Developer&#x27;s Guide .

A step specifies the location of a JAR file stored either on the master node of
the job flow or in Amazon S3. Each step is performed by the main function of the
main class of the JAR file. The main class can be specified either in the
manifest of the JAR or by using the MainFunction parameter of the step.

Elastic MapReduce executes each step in the order listed. For a step to be
considered complete, the main function must exit with a zero exit code and all
Hadoop jobs started while the step was running must have completed and run
successfully.

You can only add steps to a job flow that is in one of the following states:
STARTING, BOOTSTRAPPING, RUNNING, or WAITING.
     *
     * @error InternalServerError   
     */
    addJobFlowSteps(params:EMR.AddJobFlowStepsInput, callback?:(err:EMR.InternalServerError | any, data:EMR.AddJobFlowStepsOutput | any) => void):Request<EMR.AddJobFlowStepsOutput | any, EMR.InternalServerError | any>;
    /**
     * Adds tags to an Amazon EMR resource. Tags make it easier to associate clusters
in various ways, such as grouping clusters to track your Amazon EMR resource
allocation costs. For more information, see Tagging Amazon EMR Resources
[http://docs.aws.amazon.com/ElasticMapReduce/latest/DeveloperGuide/emr-plan-tags.html] 
.
     *
     * @error InternalServerException   
     * @error InvalidRequestException   
     */
    addTags(params:EMR.AddTagsInput, callback?:(err:EMR.InternalServerException | EMR.InvalidRequestException | any, data:EMR.AddTagsOutput | any) => void):Request<EMR.AddTagsOutput | any, EMR.InternalServerException | EMR.InvalidRequestException | any>;
    /**
     * Provides cluster-level details including status, hardware and software
configuration, VPC settings, and so on. For information about the cluster steps,
see ListSteps .
     *
     * @error InternalServerException   
     * @error InvalidRequestException   
     */
    describeCluster(params:EMR.DescribeClusterInput, callback?:(err:EMR.InternalServerException | EMR.InvalidRequestException | any, data:EMR.DescribeClusterOutput | any) => void):Request<EMR.DescribeClusterOutput | any, EMR.InternalServerException | EMR.InvalidRequestException | any>;
    /**
     * This API is deprecated and will eventually be removed. We recommend you use 
ListClusters , DescribeCluster , ListSteps , ListInstanceGroups and 
ListBootstrapActions instead.

DescribeJobFlows returns a list of job flows that match all of the supplied
parameters. The parameters can include a list of job flow IDs, job flow states,
and restrictions on job flow creation date and time.

Regardless of supplied parameters, only job flows created within the last two
months are returned.

If no parameters are supplied, then job flows matching either of the following
criteria are returned:

 &amp;#42; Job flows created and completed in the last two weeks
 * Job flows created within the last two months that are in one of the following
   states: RUNNING , WAITING , SHUTTING_DOWN , STARTING

Amazon Elastic MapReduce can return a maximum of 512 job flow descriptions.
     *
     * @error InternalServerError   
     */
    describeJobFlows(params:EMR.DescribeJobFlowsInput, callback?:(err:EMR.InternalServerError | any, data:EMR.DescribeJobFlowsOutput | any) => void):Request<EMR.DescribeJobFlowsOutput | any, EMR.InternalServerError | any>;
    /**
     * Provides more detail about the cluster step.
     *
     * @error InternalServerException   
     * @error InvalidRequestException   
     */
    describeStep(params:EMR.DescribeStepInput, callback?:(err:EMR.InternalServerException | EMR.InvalidRequestException | any, data:EMR.DescribeStepOutput | any) => void):Request<EMR.DescribeStepOutput | any, EMR.InternalServerException | EMR.InvalidRequestException | any>;
    /**
     * Provides information about the bootstrap actions associated with a cluster.
     *
     * @error InternalServerException   
     * @error InvalidRequestException   
     */
    listBootstrapActions(params:EMR.ListBootstrapActionsInput, callback?:(err:EMR.InternalServerException | EMR.InvalidRequestException | any, data:EMR.ListBootstrapActionsOutput | any) => void):Request<EMR.ListBootstrapActionsOutput | any, EMR.InternalServerException | EMR.InvalidRequestException | any>;
    /**
     * Provides the status of all clusters visible to this AWS account. Allows you to
filter the list of clusters based on certain criteria; for example, filtering by
cluster creation date and time or by status. This call returns a maximum of 50
clusters per call, but returns a marker to track the paging of the cluster list
across multiple ListClusters calls.
     *
     * @error InternalServerException   
     * @error InvalidRequestException   
     */
    listClusters(params:EMR.ListClustersInput, callback?:(err:EMR.InternalServerException | EMR.InvalidRequestException | any, data:EMR.ListClustersOutput | any) => void):Request<EMR.ListClustersOutput | any, EMR.InternalServerException | EMR.InvalidRequestException | any>;
    /**
     * Provides all available details about the instance groups in a cluster.
     *
     * @error InternalServerException   
     * @error InvalidRequestException   
     */
    listInstanceGroups(params:EMR.ListInstanceGroupsInput, callback?:(err:EMR.InternalServerException | EMR.InvalidRequestException | any, data:EMR.ListInstanceGroupsOutput | any) => void):Request<EMR.ListInstanceGroupsOutput | any, EMR.InternalServerException | EMR.InvalidRequestException | any>;
    /**
     * Provides information about the cluster instances that Amazon EMR provisions on
behalf of a user when it creates the cluster. For example, this operation
indicates when the EC2 instances reach the Ready state, when instances become
available to Amazon EMR to use for jobs, and the IP addresses for cluster
instances, etc.
     *
     * @error InternalServerException   
     * @error InvalidRequestException   
     */
    listInstances(params:EMR.ListInstancesInput, callback?:(err:EMR.InternalServerException | EMR.InvalidRequestException | any, data:EMR.ListInstancesOutput | any) => void):Request<EMR.ListInstancesOutput | any, EMR.InternalServerException | EMR.InvalidRequestException | any>;
    /**
     * Provides a list of steps for the cluster.
     *
     * @error InternalServerException   
     * @error InvalidRequestException   
     */
    listSteps(params:EMR.ListStepsInput, callback?:(err:EMR.InternalServerException | EMR.InvalidRequestException | any, data:EMR.ListStepsOutput | any) => void):Request<EMR.ListStepsOutput | any, EMR.InternalServerException | EMR.InvalidRequestException | any>;
    /**
     * ModifyInstanceGroups modifies the number of nodes and configuration settings of
an instance group. The input parameters include the new target instance count
for the group and the instance group ID. The call will either succeed or fail
atomically.
     *
     * @error InternalServerError   
     */
    modifyInstanceGroups(params:EMR.ModifyInstanceGroupsInput, callback?:(err:EMR.InternalServerError | any, data:any) => void):Request<any, EMR.InternalServerError | any>;
    /**
     * Removes tags from an Amazon EMR resource. Tags make it easier to associate
clusters in various ways, such as grouping clusters to track your Amazon EMR
resource allocation costs. For more information, see Tagging Amazon EMR
Resources
[http://docs.aws.amazon.com/ElasticMapReduce/latest/DeveloperGuide/emr-plan-tags.html] 
.

The following example removes the stack tag with value Prod from a cluster:
     *
     * @error InternalServerException   
     * @error InvalidRequestException   
     */
    removeTags(params:EMR.RemoveTagsInput, callback?:(err:EMR.InternalServerException | EMR.InvalidRequestException | any, data:EMR.RemoveTagsOutput | any) => void):Request<EMR.RemoveTagsOutput | any, EMR.InternalServerException | EMR.InvalidRequestException | any>;
    /**
     * RunJobFlow creates and starts running a new job flow. The job flow will run the
steps specified. Once the job flow completes, the cluster is stopped and the
HDFS partition is lost. To prevent loss of data, configure the last step of the
job flow to store results in Amazon S3. If the JobFlowInstancesConfig 
KeepJobFlowAliveWhenNoSteps parameter is set to TRUE , the job flow will
transition to the WAITING state rather than shutting down once the steps have
completed.

For additional protection, you can set the JobFlowInstancesConfig 
TerminationProtected parameter to TRUE to lock the job flow and prevent it from
being terminated by API call, user intervention, or in the event of a job flow
error.

A maximum of 256 steps are allowed in each job flow.

If your job flow is long-running (such as a Hive data warehouse) or complex, you
may require more than 256 steps to process your data. You can bypass the
256-step limitation in various ways, including using the SSH shell to connect to
the master node and submitting queries directly to the software running on the
master node, such as Hive and Hadoop. For more information on how to do this, go
to Add More than 256 Steps to a Job Flow
[http://docs.aws.amazon.com/ElasticMapReduce/latest/DeveloperGuide/AddMoreThan256Steps.html] 
in the Amazon Elastic MapReduce Developer&#x27;s Guide .

For long running job flows, we recommend that you periodically store your
results.
     *
     * @error InternalServerError   
     */
    runJobFlow(params:EMR.RunJobFlowInput, callback?:(err:EMR.InternalServerError | any, data:EMR.RunJobFlowOutput | any) => void):Request<EMR.RunJobFlowOutput | any, EMR.InternalServerError | any>;
    /**
     * SetTerminationProtection locks a job flow so the Amazon EC2 instances in the
cluster cannot be terminated by user intervention, an API call, or in the event
of a job-flow error. The cluster still terminates upon successful completion of
the job flow. Calling SetTerminationProtection on a job flow is analogous to
calling the Amazon EC2 DisableAPITermination API on all of the EC2 instances in
a cluster.

SetTerminationProtection is used to prevent accidental termination of a job flow
and to ensure that in the event of an error, the instances will persist so you
can recover any data stored in their ephemeral instance storage.

To terminate a job flow that has been locked by setting SetTerminationProtection
to true , you must first unlock the job flow by a subsequent call to
SetTerminationProtection in which you set the value to false .

For more information, go to Protecting a Job Flow from Termination
[http://docs.aws.amazon.com/ElasticMapReduce/latest/DeveloperGuide/UsingEMR_TerminationProtection.html] 
in the Amazon Elastic MapReduce Developer&#x27;s Guide.
     *
     * @error InternalServerError   
     */
    setTerminationProtection(params:EMR.SetTerminationProtectionInput, callback?:(err:EMR.InternalServerError | any, data:any) => void):Request<any, EMR.InternalServerError | any>;
    /**
     * Sets whether all AWS Identity and Access Management (IAM) users under your
account can access the specified job flows. This action works on running job
flows. You can also set the visibility of a job flow when you launch it using
the VisibleToAllUsers parameter of RunJobFlow . The SetVisibleToAllUsers action
can be called only by an IAM user who created the job flow or the AWS account
that owns the job flow.
     *
     * @error InternalServerError   
     */
    setVisibleToAllUsers(params:EMR.SetVisibleToAllUsersInput, callback?:(err:EMR.InternalServerError | any, data:any) => void):Request<any, EMR.InternalServerError | any>;
    /**
     * TerminateJobFlows shuts a list of job flows down. When a job flow is shut down,
any step not yet completed is canceled and the EC2 instances on which the job
flow is running are stopped. Any log files not already saved are uploaded to
Amazon S3 if a LogUri was specified when the job flow was created.

The maximum number of JobFlows allowed is 10. The call to TerminateJobFlows is
asynchronous. Depending on the configuration of the job flow, it may take up to
5-20 minutes for the job flow to completely terminate and release allocated
resources, such as Amazon EC2 instances.
     *
     * @error InternalServerError   
     */
    terminateJobFlows(params:EMR.TerminateJobFlowsInput, callback?:(err:EMR.InternalServerError | any, data:any) => void):Request<any, EMR.InternalServerError | any>;

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

    export type EC2InstanceIdsList = InstanceId[];

    export type EC2InstanceIdsToTerminateList = InstanceId[];

    export type EbsBlockDeviceConfigList = EbsBlockDeviceConfig[];

    export type EbsBlockDeviceList = EbsBlockDevice[];

    export type EbsVolumeList = EbsVolume[];

    export type ErrorCode = string;

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

    export type InstanceStateList = InstanceState[];

    export type InstanceType = string;

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

    export type StringMap = { [key:string]:String };

    export type SupportedProductsList = XmlStringMaxLen256[];

    export type TagList = Tag[];

    export type XmlString = string;

    export type XmlStringList = XmlString[];

    export type XmlStringMaxLen256 = string;

    export interface AddInstanceGroupsInput {
      /** Instance Groups to add. **/
      InstanceGroups:InstanceGroupConfigList;
      /** Job flow in which to add the instance groups. **/
      JobFlowId:XmlStringMaxLen256;
    }
    export interface AddInstanceGroupsOutput {
      /** The job flow ID in which the instance groups are added. **/
      JobFlowId?:XmlStringMaxLen256;
      /** Instance group IDs of the newly created instance groups. **/
      InstanceGroupIds?:InstanceGroupIdsList;
    }
    export interface AddJobFlowStepsInput {
      /** A string that uniquely identifies the job flow. This identifier is returned by 
RunJobFlow and can also be obtained from ListClusters . **/
      JobFlowId:XmlStringMaxLen256;
      /** A list of StepConfig to be executed by the job flow. **/
      Steps:StepConfigList;
    }
    export interface AddJobFlowStepsOutput {
      /** The identifiers of the list of steps added to the job flow. **/
      StepIds?:StepIdsList;
    }
    export interface AddTagsInput {
      /** The Amazon EMR resource identifier to which tags will be added. This value must
be a cluster identifier. **/
      ResourceId:ResourceId;
      /** A list of tags to associate with a cluster and propagate to Amazon EC2
instances. Tags are user-defined key/value pairs that consist of a required key
string with a maximum of 128 characters, and an optional value string with a
maximum of 256 characters. **/
      Tags:TagList;
    }
    export interface AddTagsOutput {
    }
    export interface Application {
      /** The name of the application. **/
      Name?:String;
      /** The version of the application. **/
      Version?:String;
      /** Arguments for Amazon EMR to pass to the application. **/
      Args?:StringList;
      /** This option is for advanced users only. This is meta information about
third-party applications that third-party vendors use for testing purposes. **/
      AdditionalInfo?:StringMap;
    }
    export interface BootstrapActionConfig {
      /** The name of the bootstrap action. **/
      Name:XmlStringMaxLen256;
      /** The script run by the bootstrap action. **/
      ScriptBootstrapAction:ScriptBootstrapActionConfig;
    }
    export interface BootstrapActionDetail {
      /** A description of the bootstrap action. **/
      BootstrapActionConfig?:BootstrapActionConfig;
    }
    export interface Cluster {
      /** The unique identifier for the cluster. **/
      Id?:ClusterId;
      /** The name of the cluster. **/
      Name?:String;
      /** The current status details about the cluster. **/
      Status?:ClusterStatus;
      Ec2InstanceAttributes?:Ec2InstanceAttributes;
      /** The path to the Amazon S3 location where logs for this cluster are stored. **/
      LogUri?:String;
      /** The AMI version requested for this cluster. **/
      RequestedAmiVersion?:String;
      /** The AMI version running on this cluster. **/
      RunningAmiVersion?:String;
      /** The release label for the Amazon EMR release. For Amazon EMR 3.x and 2.x AMIs,
use amiVersion instead instead of ReleaseLabel. **/
      ReleaseLabel?:String;
      /** Specifies whether the cluster should terminate after completing all steps. **/
      AutoTerminate?:Boolean;
      /** Indicates whether Amazon EMR will lock the cluster to prevent the EC2 instances
from being terminated by an API call or user intervention, or in the event of a
cluster error. **/
      TerminationProtected?:Boolean;
      /** Indicates whether the job flow is visible to all IAM users of the AWS account
associated with the job flow. If this value is set to true , all IAM users of
that AWS account can view and manage the job flow if they have the proper policy
permissions set. If this value is false , only the IAM user that created the
cluster can view and manage it. This value can be changed using the 
SetVisibleToAllUsers action. **/
      VisibleToAllUsers?:Boolean;
      /** The applications installed on this cluster. **/
      Applications?:ApplicationList;
      /** A list of tags associated with a cluster. **/
      Tags?:TagList;
      /** The IAM role that will be assumed by the Amazon EMR service to access AWS
resources on your behalf. **/
      ServiceRole?:String;
      /** An approximation of the cost of the job flow, represented in m1.small/hours.
This value is incremented one time for every hour an m1.small instance runs.
Larger instances are weighted more, so an EC2 instance that is roughly four
times more expensive would result in the normalized instance hours being
incremented by four. This result is only an approximation and does not reflect
the actual billing rate. **/
      NormalizedInstanceHours?:Integer;
      /** The public DNS name of the master EC2 instance. **/
      MasterPublicDnsName?:String;
      /** Amazon EMR releases 4.x or later.

The list of Configurations supplied to the EMR cluster. **/
      Configurations?:ConfigurationList;
    }
    export interface ClusterStateChangeReason {
      /** The programmatic code for the state change reason. **/
      Code?:ClusterStateChangeReasonCode;
      /** The descriptive message for the state change reason. **/
      Message?:String;
    }
    export interface ClusterStatus {
      /** The current state of the cluster. **/
      State?:ClusterState;
      /** The reason for the cluster status change. **/
      StateChangeReason?:ClusterStateChangeReason;
      /** A timeline that represents the status of a cluster over the lifetime of the
cluster. **/
      Timeline?:ClusterTimeline;
    }
    export interface ClusterSummary {
      /** The unique identifier for the cluster. **/
      Id?:ClusterId;
      /** The name of the cluster. **/
      Name?:String;
      /** The details about the current status of the cluster. **/
      Status?:ClusterStatus;
      /** An approximation of the cost of the job flow, represented in m1.small/hours.
This value is incremented one time for every hour an m1.small instance runs.
Larger instances are weighted more, so an EC2 instance that is roughly four
times more expensive would result in the normalized instance hours being
incremented by four. This result is only an approximation and does not reflect
the actual billing rate. **/
      NormalizedInstanceHours?:Integer;
    }
    export interface ClusterTimeline {
      /** The creation date and time of the cluster. **/
      CreationDateTime?:Date;
      /** The date and time when the cluster was ready to execute steps. **/
      ReadyDateTime?:Date;
      /** The date and time when the cluster was terminated. **/
      EndDateTime?:Date;
    }
    export interface Command {
      /** The name of the command. **/
      Name?:String;
      /** The Amazon S3 location of the command script. **/
      ScriptPath?:String;
      /** Arguments for Amazon EMR to pass to the command for execution. **/
      Args?:StringList;
    }
    export interface Configuration {
      /** The classification of a configuration. For more information see, Amazon EMR
Configurations
[http://docs.aws.amazon.com/ElasticMapReduce/latest/API/EmrConfigurations.html] 
. **/
      Classification?:String;
      /** A list of configurations you apply to this configuration object. **/
      Configurations?:ConfigurationList;
      /** A set of properties supplied to the Configuration object. **/
      Properties?:StringMap;
    }
    export interface DescribeClusterInput {
      /** The identifier of the cluster to describe. **/
      ClusterId:ClusterId;
    }
    export interface DescribeClusterOutput {
      /** This output contains the details for the requested cluster. **/
      Cluster?:Cluster;
    }
    export interface DescribeJobFlowsInput {
      /** Return only job flows created after this date and time. **/
      CreatedAfter?:Date;
      /** Return only job flows created before this date and time. **/
      CreatedBefore?:Date;
      /** Return only job flows whose job flow ID is contained in this list. **/
      JobFlowIds?:XmlStringList;
      /** Return only job flows whose state is contained in this list. **/
      JobFlowStates?:JobFlowExecutionStateList;
    }
    export interface DescribeJobFlowsOutput {
      /** A list of job flows matching the parameters supplied. **/
      JobFlows?:JobFlowDetailList;
    }
    export interface DescribeStepInput {
      /** The identifier of the cluster with steps to describe. **/
      ClusterId:ClusterId;
      /** The identifier of the step to describe. **/
      StepId:StepId;
    }
    export interface DescribeStepOutput {
      /** The step details for the requested step identifier. **/
      Step?:Step;
    }
    export interface EbsBlockDevice {
      /** EBS volume specifications such as volume type, IOPS, and size(GiB) that will be
requested for the EBS volume attached to an EC2 instance in the cluster. **/
      VolumeSpecification?:VolumeSpecification;
      /** The device name that is exposed to the instance, such as /dev/sdh. **/
      Device?:String;
    }
    export interface EbsBlockDeviceConfig {
      /** EBS volume specifications such as volume type, IOPS, and size(GiB) that will be
requested for the EBS volume attached to an EC2 instance in the cluster. **/
      VolumeSpecification:VolumeSpecification;
      /** Number of EBS volumes with specific volume configuration, that will be
associated with every instance in the instance group **/
      VolumesPerInstance?:Integer;
    }
    export interface EbsConfiguration {
      EbsBlockDeviceConfigs?:EbsBlockDeviceConfigList;
      EbsOptimized?:BooleanObject;
    }
    export interface EbsVolume {
      /** The device name that is exposed to the instance, such as /dev/sdh. **/
      Device?:String;
      /** The volume identifier of the EBS volume. **/
      VolumeId?:String;
    }
    export interface Ec2InstanceAttributes {
      /** The name of the Amazon EC2 key pair to use when connecting with SSH into the
master node as a user named &quot;hadoop&quot;. **/
      Ec2KeyName?:String;
      /** To launch the job flow in Amazon VPC, set this parameter to the identifier of
the Amazon VPC subnet where you want the job flow to launch. If you do not
specify this value, the job flow is launched in the normal AWS cloud, outside of
a VPC.

Amazon VPC currently does not support cluster compute quadruple extra large
(cc1.4xlarge) instances. Thus, you cannot specify the cc1.4xlarge instance type
for nodes of a job flow launched in a VPC. **/
      Ec2SubnetId?:String;
      /** The Availability Zone in which the cluster will run. **/
      Ec2AvailabilityZone?:String;
      /** The IAM role that was specified when the job flow was launched. The EC2
instances of the job flow assume this role. **/
      IamInstanceProfile?:String;
      /** The identifier of the Amazon EC2 security group for the master node. **/
      EmrManagedMasterSecurityGroup?:String;
      /** The identifier of the Amazon EC2 security group for the slave nodes. **/
      EmrManagedSlaveSecurityGroup?:String;
      /** The identifier of the Amazon EC2 security group for the Amazon EMR service to
access clusters in VPC private subnets. **/
      ServiceAccessSecurityGroup?:String;
      /** A list of additional Amazon EC2 security group IDs for the master node. **/
      AdditionalMasterSecurityGroups?:StringList;
      /** A list of additional Amazon EC2 security group IDs for the slave nodes. **/
      AdditionalSlaveSecurityGroups?:StringList;
    }
    export interface HadoopJarStepConfig {
      /** A list of Java properties that are set when the step runs. You can use these
properties to pass key value pairs to your main function. **/
      Properties?:KeyValueList;
      /** A path to a JAR file run during the step. **/
      Jar:XmlString;
      /** The name of the main class in the specified Java file. If not specified, the JAR
file should specify a Main-Class in its manifest file. **/
      MainClass?:XmlString;
      /** A list of command line arguments passed to the JAR file&#x27;s main function when
executed. **/
      Args?:XmlStringList;
    }
    export interface HadoopStepConfig {
      /** The path to the JAR file that runs during the step. **/
      Jar?:String;
      /** The list of Java properties that are set when the step runs. You can use these
properties to pass key value pairs to your main function. **/
      Properties?:StringMap;
      /** The name of the main class in the specified Java file. If not specified, the JAR
file should specify a main class in its manifest file. **/
      MainClass?:String;
      /** The list of command line arguments to pass to the JAR file&#x27;s main function for
execution. **/
      Args?:StringList;
    }
    export interface Instance {
      /** The unique identifier for the instance in Amazon EMR. **/
      Id?:InstanceId;
      /** The unique identifier of the instance in Amazon EC2. **/
      Ec2InstanceId?:InstanceId;
      /** The public DNS name of the instance. **/
      PublicDnsName?:String;
      /** The public IP address of the instance. **/
      PublicIpAddress?:String;
      /** The private DNS name of the instance. **/
      PrivateDnsName?:String;
      /** The private IP address of the instance. **/
      PrivateIpAddress?:String;
      /** The current status of the instance. **/
      Status?:InstanceStatus;
      /** The identifier of the instance group to which this instance belongs. **/
      InstanceGroupId?:String;
      /** The list of EBS volumes that are attached to this instance. **/
      EbsVolumes?:EbsVolumeList;
    }
    export interface InstanceGroup {
      /** The identifier of the instance group. **/
      Id?:InstanceGroupId;
      /** The name of the instance group. **/
      Name?:String;
      /** The marketplace to provision instances for this group. Valid values are
ON_DEMAND or SPOT. **/
      Market?:MarketType;
      /** The type of the instance group. Valid values are MASTER, CORE or TASK. **/
      InstanceGroupType?:InstanceGroupType;
      /** The bid price for each EC2 instance in the instance group when launching nodes
as Spot Instances, expressed in USD. **/
      BidPrice?:String;
      /** The EC2 instance type for all instances in the instance group. **/
      InstanceType?:InstanceType;
      /** The target number of instances for the instance group. **/
      RequestedInstanceCount?:Integer;
      /** The number of instances currently running in this instance group. **/
      RunningInstanceCount?:Integer;
      /** The current status of the instance group. **/
      Status?:InstanceGroupStatus;
      /** Amazon EMR releases 4.x or later.

The list of configurations supplied for an EMR cluster instance group. You can
specify a separate configuration for each instance group (master, core, and
task). **/
      Configurations?:ConfigurationList;
      /** The EBS block devices that are mapped to this instance group. **/
      EbsBlockDevices?:EbsBlockDeviceList;
      /** If the instance group is EBS-optimized. An Amazon EBS–optimized instance uses an
optimized configuration stack and provides additional, dedicated capacity for
Amazon EBS I/O. **/
      EbsOptimized?:BooleanObject;
      /** Policy for customizing shrink operations. **/
      ShrinkPolicy?:ShrinkPolicy;
    }
    export interface InstanceGroupConfig {
      /** Friendly name given to the instance group. **/
      Name?:XmlStringMaxLen256;
      /** Market type of the Amazon EC2 instances used to create a cluster node. **/
      Market?:MarketType;
      /** The role of the instance group in the cluster. **/
      InstanceRole:InstanceRoleType;
      /** Bid price for each Amazon EC2 instance in the instance group when launching
nodes as Spot Instances, expressed in USD. **/
      BidPrice?:XmlStringMaxLen256;
      /** The Amazon EC2 instance type for all instances in the instance group. **/
      InstanceType:InstanceType;
      /** Target number of instances for the instance group. **/
      InstanceCount:Integer;
      /** Amazon EMR releases 4.x or later.

The list of configurations supplied for an EMR cluster instance group. You can
specify a separate configuration for each instance group (master, core, and
task). **/
      Configurations?:ConfigurationList;
      /** EBS configurations that will be attached to each Amazon EC2 instance in the
instance group. **/
      EbsConfiguration?:EbsConfiguration;
    }
    export interface InstanceGroupDetail {
      /** Unique identifier for the instance group. **/
      InstanceGroupId?:XmlStringMaxLen256;
      /** Friendly name for the instance group. **/
      Name?:XmlStringMaxLen256;
      /** Market type of the Amazon EC2 instances used to create a cluster node. **/
      Market:MarketType;
      /** Instance group role in the cluster **/
      InstanceRole:InstanceRoleType;
      /** Bid price for EC2 Instances when launching nodes as Spot Instances, expressed in
USD. **/
      BidPrice?:XmlStringMaxLen256;
      /** Amazon EC2 Instance type. **/
      InstanceType:InstanceType;
      /** Target number of instances to run in the instance group. **/
      InstanceRequestCount:Integer;
      /** Actual count of running instances. **/
      InstanceRunningCount:Integer;
      /** State of instance group. The following values are deprecated: STARTING,
TERMINATED, and FAILED. **/
      State:InstanceGroupState;
      /** Details regarding the state of the instance group. **/
      LastStateChangeReason?:XmlString;
      /** The date/time the instance group was created. **/
      CreationDateTime:Date;
      /** The date/time the instance group was started. **/
      StartDateTime?:Date;
      /** The date/time the instance group was available to the cluster. **/
      ReadyDateTime?:Date;
      /** The date/time the instance group was terminated. **/
      EndDateTime?:Date;
    }
    export interface InstanceGroupModifyConfig {
      /** Unique ID of the instance group to expand or shrink. **/
      InstanceGroupId:XmlStringMaxLen256;
      /** Target size for the instance group. **/
      InstanceCount?:Integer;
      /** The EC2 InstanceIds to terminate. Once you terminate the instances, the instance
group will not return to its original requested size. **/
      EC2InstanceIdsToTerminate?:EC2InstanceIdsToTerminateList;
      /** Policy for customizing shrink operations. **/
      ShrinkPolicy?:ShrinkPolicy;
    }
    export interface InstanceGroupStateChangeReason {
      /** The programmable code for the state change reason. **/
      Code?:InstanceGroupStateChangeReasonCode;
      /** The status change reason description. **/
      Message?:String;
    }
    export interface InstanceGroupStatus {
      /** The current state of the instance group. **/
      State?:InstanceGroupState;
      /** The status change reason details for the instance group. **/
      StateChangeReason?:InstanceGroupStateChangeReason;
      /** The timeline of the instance group status over time. **/
      Timeline?:InstanceGroupTimeline;
    }
    export interface InstanceGroupTimeline {
      /** The creation date and time of the instance group. **/
      CreationDateTime?:Date;
      /** The date and time when the instance group became ready to perform tasks. **/
      ReadyDateTime?:Date;
      /** The date and time when the instance group terminated. **/
      EndDateTime?:Date;
    }
    export interface InstanceResizePolicy {
      /** Specific list of instances to be terminated when shrinking an instance group. **/
      InstancesToTerminate?:EC2InstanceIdsList;
      /** Specific list of instances to be protected when shrinking an instance group. **/
      InstancesToProtect?:EC2InstanceIdsList;
      /** Decommissioning timeout override for the specific list of instances to be
terminated. **/
      InstanceTerminationTimeout?:Integer;
    }
    export interface InstanceStateChangeReason {
      /** The programmable code for the state change reason. **/
      Code?:InstanceStateChangeReasonCode;
      /** The status change reason description. **/
      Message?:String;
    }
    export interface InstanceStatus {
      /** The current state of the instance. **/
      State?:InstanceState;
      /** The details of the status change reason for the instance. **/
      StateChangeReason?:InstanceStateChangeReason;
      /** The timeline of the instance status over time. **/
      Timeline?:InstanceTimeline;
    }
    export interface InstanceTimeline {
      /** The creation date and time of the instance. **/
      CreationDateTime?:Date;
      /** The date and time when the instance was ready to perform tasks. **/
      ReadyDateTime?:Date;
      /** The date and time when the instance was terminated. **/
      EndDateTime?:Date;
    }
    export interface InternalServerError {
    }
    export interface InternalServerException {
      /** The message associated with the exception. **/
      Message?:ErrorMessage;
    }
    export interface InvalidRequestException {
      /** The error code associated with the exception. **/
      ErrorCode?:ErrorCode;
      /** The message associated with the exception. **/
      Message?:ErrorMessage;
    }
    export interface JobFlowDetail {
      /** The job flow identifier. **/
      JobFlowId:XmlStringMaxLen256;
      /** The name of the job flow. **/
      Name:XmlStringMaxLen256;
      /** The location in Amazon S3 where log files for the job are stored. **/
      LogUri?:XmlString;
      /** The version of the AMI used to initialize Amazon EC2 instances in the job flow.
For a list of AMI versions currently supported by Amazon ElasticMapReduce, go to 
AMI Versions Supported in Elastic MapReduce
[http://docs.aws.amazon.com/ElasticMapReduce/latest/DeveloperGuide/EnvironmentConfig_AMIVersion.html#ami-versions-supported] 
in the Amazon Elastic MapReduce Developer Guide. **/
      AmiVersion?:XmlStringMaxLen256;
      /** Describes the execution status of the job flow. **/
      ExecutionStatusDetail:JobFlowExecutionStatusDetail;
      /** Describes the Amazon EC2 instances of the job flow. **/
      Instances:JobFlowInstancesDetail;
      /** A list of steps run by the job flow. **/
      Steps?:StepDetailList;
      /** A list of the bootstrap actions run by the job flow. **/
      BootstrapActions?:BootstrapActionDetailList;
      /** A list of strings set by third party software when the job flow is launched. If
you are not using third party software to manage the job flow this value is
empty. **/
      SupportedProducts?:SupportedProductsList;
      /** Specifies whether the job flow is visible to all IAM users of the AWS account
associated with the job flow. If this value is set to true , all IAM users of
that AWS account can view and (if they have the proper policy permissions set)
manage the job flow. If it is set to false , only the IAM user that created the
job flow can view and manage it. This value can be changed using the 
SetVisibleToAllUsers action. **/
      VisibleToAllUsers?:Boolean;
      /** The IAM role that was specified when the job flow was launched. The EC2
instances of the job flow assume this role. **/
      JobFlowRole?:XmlString;
      /** The IAM role that will be assumed by the Amazon EMR service to access AWS
resources on your behalf. **/
      ServiceRole?:XmlString;
    }
    export interface JobFlowExecutionStatusDetail {
      /** The state of the job flow. **/
      State:JobFlowExecutionState;
      /** The creation date and time of the job flow. **/
      CreationDateTime:Date;
      /** The start date and time of the job flow. **/
      StartDateTime?:Date;
      /** The date and time when the job flow was ready to start running bootstrap
actions. **/
      ReadyDateTime?:Date;
      /** The completion date and time of the job flow. **/
      EndDateTime?:Date;
      /** Description of the job flow last changed state. **/
      LastStateChangeReason?:XmlString;
    }
    export interface JobFlowInstancesConfig {
      /** The EC2 instance type of the master node. **/
      MasterInstanceType?:InstanceType;
      /** The EC2 instance type of the slave nodes. **/
      SlaveInstanceType?:InstanceType;
      /** The number of Amazon EC2 instances used to execute the job flow. **/
      InstanceCount?:Integer;
      /** Configuration for the job flow&#x27;s instance groups. **/
      InstanceGroups?:InstanceGroupConfigList;
      /** The name of the Amazon EC2 key pair that can be used to ssh to the master node
as the user called &quot;hadoop.&quot; **/
      Ec2KeyName?:XmlStringMaxLen256;
      /** The Availability Zone the job flow will run in. **/
      Placement?:PlacementType;
      /** Specifies whether the job flow should be kept alive after completing all steps. **/
      KeepJobFlowAliveWhenNoSteps?:Boolean;
      /** Specifies whether to lock the job flow to prevent the Amazon EC2 instances from
being terminated by API call, user intervention, or in the event of a job flow
error. **/
      TerminationProtected?:Boolean;
      /** The Hadoop version for the job flow. Valid inputs are &quot;0.18&quot; (deprecated),
&quot;0.20&quot; (deprecated), &quot;0.20.205&quot; (deprecated), &quot;1.0.3&quot;, &quot;2.2.0&quot;, or &quot;2.4.0&quot;. If
you do not set this value, the default of 0.18 is used, unless the AmiVersion
parameter is set in the RunJobFlow call, in which case the default version of
Hadoop for that AMI version is used. **/
      HadoopVersion?:XmlStringMaxLen256;
      /** To launch the job flow in Amazon Virtual Private Cloud (Amazon VPC), set this
parameter to the identifier of the Amazon VPC subnet where you want the job flow
to launch. If you do not specify this value, the job flow is launched in the
normal Amazon Web Services cloud, outside of an Amazon VPC.

Amazon VPC currently does not support cluster compute quadruple extra large
(cc1.4xlarge) instances. Thus you cannot specify the cc1.4xlarge instance type
for nodes of a job flow launched in a Amazon VPC. **/
      Ec2SubnetId?:XmlStringMaxLen256;
      /** The identifier of the Amazon EC2 security group for the master node. **/
      EmrManagedMasterSecurityGroup?:XmlStringMaxLen256;
      /** The identifier of the Amazon EC2 security group for the slave nodes. **/
      EmrManagedSlaveSecurityGroup?:XmlStringMaxLen256;
      /** The identifier of the Amazon EC2 security group for the Amazon EMR service to
access clusters in VPC private subnets. **/
      ServiceAccessSecurityGroup?:XmlStringMaxLen256;
      /** A list of additional Amazon EC2 security group IDs for the master node. **/
      AdditionalMasterSecurityGroups?:SecurityGroupsList;
      /** A list of additional Amazon EC2 security group IDs for the slave nodes. **/
      AdditionalSlaveSecurityGroups?:SecurityGroupsList;
    }
    export interface JobFlowInstancesDetail {
      /** The Amazon EC2 master node instance type. **/
      MasterInstanceType:InstanceType;
      /** The DNS name of the master node. **/
      MasterPublicDnsName?:XmlString;
      /** The Amazon EC2 instance identifier of the master node. **/
      MasterInstanceId?:XmlString;
      /** The Amazon EC2 slave node instance type. **/
      SlaveInstanceType:InstanceType;
      /** The number of Amazon EC2 instances in the cluster. If the value is 1, the same
instance serves as both the master and slave node. If the value is greater than
1, one instance is the master node and all others are slave nodes. **/
      InstanceCount:Integer;
      /** Details about the job flow&#x27;s instance groups. **/
      InstanceGroups?:InstanceGroupDetailList;
      /** An approximation of the cost of the job flow, represented in m1.small/hours.
This value is incremented once for every hour an m1.small runs. Larger instances
are weighted more, so an Amazon EC2 instance that is roughly four times more
expensive would result in the normalized instance hours being incremented by
four. This result is only an approximation and does not reflect the actual
billing rate. **/
      NormalizedInstanceHours?:Integer;
      /** The name of an Amazon EC2 key pair that can be used to ssh to the master node of
job flow. **/
      Ec2KeyName?:XmlStringMaxLen256;
      /** For job flows launched within Amazon Virtual Private Cloud, this value specifies
the identifier of the subnet where the job flow was launched. **/
      Ec2SubnetId?:XmlStringMaxLen256;
      /** The Amazon EC2 Availability Zone for the job flow. **/
      Placement?:PlacementType;
      /** Specifies whether the job flow should terminate after completing all steps. **/
      KeepJobFlowAliveWhenNoSteps?:Boolean;
      /** Specifies whether the Amazon EC2 instances in the cluster are protected from
termination by API calls, user intervention, or in the event of a job flow
error. **/
      TerminationProtected?:Boolean;
      /** The Hadoop version for the job flow. **/
      HadoopVersion?:XmlStringMaxLen256;
    }
    export interface KeyValue {
      /** The unique identifier of a key value pair. **/
      Key?:XmlString;
      /** The value part of the identified key. **/
      Value?:XmlString;
    }
    export interface ListBootstrapActionsInput {
      /** The cluster identifier for the bootstrap actions to list . **/
      ClusterId:ClusterId;
      /** The pagination token that indicates the next set of results to retrieve . **/
      Marker?:Marker;
    }
    export interface ListBootstrapActionsOutput {
      /** The bootstrap actions associated with the cluster . **/
      BootstrapActions?:CommandList;
      /** The pagination token that indicates the next set of results to retrieve . **/
      Marker?:Marker;
    }
    export interface ListClustersInput {
      /** The creation date and time beginning value filter for listing clusters . **/
      CreatedAfter?:Date;
      /** The creation date and time end value filter for listing clusters . **/
      CreatedBefore?:Date;
      /** The cluster state filters to apply when listing clusters. **/
      ClusterStates?:ClusterStateList;
      /** The pagination token that indicates the next set of results to retrieve. **/
      Marker?:Marker;
    }
    export interface ListClustersOutput {
      /** The list of clusters for the account based on the given filters. **/
      Clusters?:ClusterSummaryList;
      /** The pagination token that indicates the next set of results to retrieve. **/
      Marker?:Marker;
    }
    export interface ListInstanceGroupsInput {
      /** The identifier of the cluster for which to list the instance groups. **/
      ClusterId:ClusterId;
      /** The pagination token that indicates the next set of results to retrieve. **/
      Marker?:Marker;
    }
    export interface ListInstanceGroupsOutput {
      /** The list of instance groups for the cluster and given filters. **/
      InstanceGroups?:InstanceGroupList;
      /** The pagination token that indicates the next set of results to retrieve. **/
      Marker?:Marker;
    }
    export interface ListInstancesInput {
      /** The identifier of the cluster for which to list the instances. **/
      ClusterId:ClusterId;
      /** The identifier of the instance group for which to list the instances. **/
      InstanceGroupId?:InstanceGroupId;
      /** The type of instance group for which to list the instances. **/
      InstanceGroupTypes?:InstanceGroupTypeList;
      /** A list of instance states that will filter the instances returned with this
request. **/
      InstanceStates?:InstanceStateList;
      /** The pagination token that indicates the next set of results to retrieve. **/
      Marker?:Marker;
    }
    export interface ListInstancesOutput {
      /** The list of instances for the cluster and given filters. **/
      Instances?:InstanceList;
      /** The pagination token that indicates the next set of results to retrieve. **/
      Marker?:Marker;
    }
    export interface ListStepsInput {
      /** The identifier of the cluster for which to list the steps. **/
      ClusterId:ClusterId;
      /** The filter to limit the step list based on certain states. **/
      StepStates?:StepStateList;
      /** The filter to limit the step list based on the identifier of the steps. **/
      StepIds?:XmlStringList;
      /** The pagination token that indicates the next set of results to retrieve. **/
      Marker?:Marker;
    }
    export interface ListStepsOutput {
      /** The filtered list of steps for the cluster. **/
      Steps?:StepSummaryList;
      /** The pagination token that indicates the next set of results to retrieve. **/
      Marker?:Marker;
    }
    export interface ModifyInstanceGroupsInput {
      /** Instance groups to change. **/
      InstanceGroups?:InstanceGroupModifyConfigList;
    }
    export interface PlacementType {
      /** The Amazon EC2 Availability Zone for the job flow. **/
      AvailabilityZone:XmlString;
    }
    export interface RemoveTagsInput {
      /** The Amazon EMR resource identifier from which tags will be removed. This value
must be a cluster identifier. **/
      ResourceId:ResourceId;
      /** A list of tag keys to remove from a resource. **/
      TagKeys:StringList;
    }
    export interface RemoveTagsOutput {
    }
    export interface RunJobFlowInput {
      /** The name of the job flow. **/
      Name:XmlStringMaxLen256;
      /** The location in Amazon S3 to write the log files of the job flow. If a value is
not provided, logs are not created. **/
      LogUri?:XmlString;
      /** A JSON string for selecting additional features. **/
      AdditionalInfo?:XmlString;
      /** For Amazon EMR releases 3.x and 2.x. For Amazon EMR releases 4.x and greater,
use ReleaseLabel.

The version of the Amazon Machine Image (AMI) to use when launching Amazon EC2
instances in the job flow. The following values are valid:

       &amp;#42; The version number of the AMI to use, for example, &quot;2.0.&quot;

If the AMI supports multiple versions of Hadoop (for example, AMI 1.0 supports
both Hadoop 0.18 and 0.20) you can use the JobFlowInstancesConfig HadoopVersion 
parameter to modify the version of Hadoop from the defaults shown above.

For details about the AMI versions currently supported by Amazon Elastic
MapReduce, go to AMI Versions Supported in Elastic MapReduce
[http://docs.aws.amazon.com/ElasticMapReduce/latest/DeveloperGuide/EnvironmentConfig_AMIVersion.html#ami-versions-supported] 
in the Amazon Elastic MapReduce Developer&#x27;s Guide. **/
      AmiVersion?:XmlStringMaxLen256;
      /** Amazon EMR releases 4.x or later.

The release label for the Amazon EMR release. For Amazon EMR 3.x and 2.x AMIs,
use amiVersion instead instead of ReleaseLabel. **/
      ReleaseLabel?:XmlStringMaxLen256;
      /** A specification of the number and type of Amazon EC2 instances on which to run
the job flow. **/
      Instances:JobFlowInstancesConfig;
      /** A list of steps to be executed by the job flow. **/
      Steps?:StepConfigList;
      /** A list of bootstrap actions that will be run before Hadoop is started on the
cluster nodes. **/
      BootstrapActions?:BootstrapActionConfigList;
      /** For Amazon EMR releases 3.x and 2.x. For Amazon EMR releases 4.x and greater,
use Applications.

A list of strings that indicates third-party software to use with the job flow.
For more information, go to Use Third Party Applications with Amazon EMR
[http://docs.aws.amazon.com/ElasticMapReduce/latest/DeveloperGuide/emr-supported-products.html] 
. Currently supported values are:

       &amp;#42; &quot;mapr-m3&quot; - launch the job flow using MapR M3 Edition.
       * &quot;mapr-m5&quot; - launch the job flow using MapR M5 Edition. **/
      SupportedProducts?:SupportedProductsList;
      /** For Amazon EMR releases 3.x and 2.x. For Amazon EMR releases 4.x and greater,
use Applications.

A list of strings that indicates third-party software to use with the job flow
that accepts a user argument list. EMR accepts and forwards the argument list to
the corresponding installation script as bootstrap action arguments. For more
information, see Launch a Job Flow on the MapR Distribution for Hadoop
[http://docs.aws.amazon.com/ElasticMapReduce/latest/DeveloperGuide/emr-mapr.html] 
. Currently supported values are:

       &amp;#42; &quot;mapr-m3&quot; - launch the cluster using MapR M3 Edition.
       * &quot;mapr-m5&quot; - launch the cluster using MapR M5 Edition.
       * &quot;mapr&quot; with the user arguments specifying &quot;--edition,m3&quot; or &quot;--edition,m5&quot; -
       launch the job flow using MapR M3 or M5 Edition respectively.
       * &quot;mapr-m7&quot; - launch the cluster using MapR M7 Edition.
       * &quot;hunk&quot; - launch the cluster with the Hunk Big Data Analtics Platform.
       * &quot;hue&quot;- launch the cluster with Hue installed.
       * &quot;spark&quot; - launch the cluster with Apache Spark installed.
       * &quot;ganglia&quot; - launch the cluster with the Ganglia Monitoring System installed. **/
      NewSupportedProducts?:NewSupportedProductsList;
      /** Amazon EMR releases 4.x or later.

A list of applications for the cluster. Valid values are: &quot;Hadoop&quot;, &quot;Hive&quot;,
&quot;Mahout&quot;, &quot;Pig&quot;, and &quot;Spark.&quot; They are case insensitive. **/
      Applications?:ApplicationList;
      /** Amazon EMR releases 4.x or later.

The list of configurations supplied for the EMR cluster you are creating. **/
      Configurations?:ConfigurationList;
      /** Whether the job flow is visible to all IAM users of the AWS account associated
with the job flow. If this value is set to true , all IAM users of that AWS
account can view and (if they have the proper policy permissions set) manage the
job flow. If it is set to false , only the IAM user that created the job flow
can view and manage it. **/
      VisibleToAllUsers?:Boolean;
      /** Also called instance profile and EC2 role. An IAM role for an EMR cluster. The
EC2 instances of the cluster assume this role. The default role is 
EMR_EC2_DefaultRole . In order to use the default role, you must have already
created it using the CLI or console. **/
      JobFlowRole?:XmlString;
      /** The IAM role that will be assumed by the Amazon EMR service to access AWS
resources on your behalf. **/
      ServiceRole?:XmlString;
      /** A list of tags to associate with a cluster and propagate to Amazon EC2
instances. **/
      Tags?:TagList;
    }
    export interface RunJobFlowOutput {
      /** An unique identifier for the job flow. **/
      JobFlowId?:XmlStringMaxLen256;
    }
    export interface ScriptBootstrapActionConfig {
      /** Location of the script to run during a bootstrap action. Can be either a
location in Amazon S3 or on a local file system. **/
      Path:XmlString;
      /** A list of command line arguments to pass to the bootstrap action script. **/
      Args?:XmlStringList;
    }
    export interface SetTerminationProtectionInput {
      /** A list of strings that uniquely identify the job flows to protect. This
identifier is returned by RunJobFlow and can also be obtained from 
DescribeJobFlows . **/
      JobFlowIds:XmlStringList;
      /** A Boolean that indicates whether to protect the job flow and prevent the Amazon
EC2 instances in the cluster from shutting down due to API calls, user
intervention, or job-flow error. **/
      TerminationProtected:Boolean;
    }
    export interface SetVisibleToAllUsersInput {
      /** Identifiers of the job flows to receive the new visibility setting. **/
      JobFlowIds:XmlStringList;
      /** Whether the specified job flows are visible to all IAM users of the AWS account
associated with the job flow. If this value is set to True, all IAM users of
that AWS account can view and, if they have the proper IAM policy permissions
set, manage the job flows. If it is set to False, only the IAM user that created
a job flow can view and manage it. **/
      VisibleToAllUsers:Boolean;
    }
    export interface ShrinkPolicy {
      /** The desired timeout for decommissioning an instance. Overrides the default YARN
decommissioning timeout. **/
      DecommissionTimeout?:Integer;
      /** Custom policy for requesting termination protection or termination of specific
instances when shrinking an instance group. **/
      InstanceResizePolicy?:InstanceResizePolicy;
    }
    export interface Step {
      /** The identifier of the cluster step. **/
      Id?:StepId;
      /** The name of the cluster step. **/
      Name?:String;
      /** The Hadoop job configuration of the cluster step. **/
      Config?:HadoopStepConfig;
      /** This specifies what action to take when the cluster step fails. Possible values
are TERMINATE_CLUSTER, CANCEL_AND_WAIT, and CONTINUE. **/
      ActionOnFailure?:ActionOnFailure;
      /** The current execution status details of the cluster step. **/
      Status?:StepStatus;
    }
    export interface StepConfig {
      /** The name of the job flow step. **/
      Name:XmlStringMaxLen256;
      /** The action to take if the job flow step fails. **/
      ActionOnFailure?:ActionOnFailure;
      /** The JAR file used for the job flow step. **/
      HadoopJarStep:HadoopJarStepConfig;
    }
    export interface StepDetail {
      /** The step configuration. **/
      StepConfig:StepConfig;
      /** The description of the step status. **/
      ExecutionStatusDetail:StepExecutionStatusDetail;
    }
    export interface StepExecutionStatusDetail {
      /** The state of the job flow step. **/
      State:StepExecutionState;
      /** The creation date and time of the step. **/
      CreationDateTime:Date;
      /** The start date and time of the step. **/
      StartDateTime?:Date;
      /** The completion date and time of the step. **/
      EndDateTime?:Date;
      /** A description of the step&#x27;s current state. **/
      LastStateChangeReason?:XmlString;
    }
    export interface StepStateChangeReason {
      /** The programmable code for the state change reason. Note: Currently, the service
provides no code for the state change. **/
      Code?:StepStateChangeReasonCode;
      /** The descriptive message for the state change reason. **/
      Message?:String;
    }
    export interface StepStatus {
      /** The execution state of the cluster step. **/
      State?:StepState;
      /** The reason for the step execution status change. **/
      StateChangeReason?:StepStateChangeReason;
      /** The timeline of the cluster step status over time. **/
      Timeline?:StepTimeline;
    }
    export interface StepSummary {
      /** The identifier of the cluster step. **/
      Id?:StepId;
      /** The name of the cluster step. **/
      Name?:String;
      /** The Hadoop job configuration of the cluster step. **/
      Config?:HadoopStepConfig;
      /** This specifies what action to take when the cluster step fails. Possible values
are TERMINATE_CLUSTER, CANCEL_AND_WAIT, and CONTINUE. **/
      ActionOnFailure?:ActionOnFailure;
      /** The current execution status details of the cluster step. **/
      Status?:StepStatus;
    }
    export interface StepTimeline {
      /** The date and time when the cluster step was created. **/
      CreationDateTime?:Date;
      /** The date and time when the cluster step execution started. **/
      StartDateTime?:Date;
      /** The date and time when the cluster step execution completed or failed. **/
      EndDateTime?:Date;
    }
    export interface SupportedProductConfig {
      /** The name of the product configuration. **/
      Name?:XmlStringMaxLen256;
      /** The list of user-supplied arguments. **/
      Args?:XmlStringList;
    }
    export interface Tag {
      /** A user-defined key, which is the minimum required information for a valid tag.
For more information, see Tagging Amazon EMR Resources
[http://docs.aws.amazon.com/ElasticMapReduce/latest/DeveloperGuide/emr-plan-tags.html] 
. **/
      Key?:String;
      /** A user-defined value, which is optional in a tag. For more information, see 
Tagging Amazon EMR Resources
[http://docs.aws.amazon.com/ElasticMapReduce/latest/DeveloperGuide/emr-plan-tags.html] 
. **/
      Value?:String;
    }
    export interface TerminateJobFlowsInput {
      /** A list of job flows to be shutdown. **/
      JobFlowIds:XmlStringList;
    }
    export interface VolumeSpecification {
      /** The volume type. Volume types supported are gp2, io1, standard. **/
      VolumeType:String;
      /** The number of I/O operations per second (IOPS) that the volume supports. **/
      Iops?:Integer;
      /** The volume size, in gibibytes (GiB). This can be a number from 1 – 1024. If the
volume type is EBS-optimized, the minimum value is 10. **/
      SizeInGB:Integer;
    }
  }
}
