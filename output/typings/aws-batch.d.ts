// Type definitions for aws-sdk - AWS Batch
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

// COMMENTED <reference path="./aws-sdk.d.ts" />

declare module "aws-sdk" {

 /**
   * apiVersion: 2016-08-10
   * endpointPrefix: batch
   * serviceAbbreviation: AWS Batch
   * signatureVersion: v4
   * protocol: rest-json
   *
   * AWS Batch enables you to run batch computing workloads on the AWS Cloud. Batch
computing is a common way for developers, scientists, and engineers to access
large amounts of compute resources, and AWS Batch removes the undifferentiated
heavy lifting of configuring and managing the required infrastructure. AWS Batch
will be familiar to users of traditional batch computing software. This service
can efficiently provision resources in response to jobs submitted in order to
eliminate capacity constraints, reduce compute costs, and deliver results
quickly.

As a fully managed service, AWS Batch enables developers, scientists, and
engineers to run batch computing workloads of any scale. AWS Batch automatically
provisions compute resources and optimizes the workload distribution based on
the quantity and scale of the workloads. With AWS Batch, there is no need to
install or manage batch computing software, which allows you to focus on
analyzing results and solving problems. AWS Batch reduces operational
complexities, saves time, and reduces costs, which makes it easy for developers,
scientists, and engineers to run their batch jobs in the AWS Cloud.
   *
   */
  export class Batch extends Service {
    constructor(options?: any);
    endpoint: Endpoint;
    /**
     * Cancels jobs in an AWS Batch job queue. Jobs that are in the SUBMITTED, PENDING,
or RUNNABLE state are cancelled. Jobs that have progressed to STARTING or 
RUNNING are not cancelled (but the API operation still succeeds, even if no jobs
are cancelled); these jobs must be terminated with the TerminateJob operation.
     *
     * @error ClientException   
     * @error ServerException   
     */
    cancelJob(params: Batch.CancelJobRequest, callback?: (err: Batch.ClientException|Batch.ServerException|any, data: Batch.CancelJobResponse|any) => void): Request<Batch.CancelJobResponse|any,Batch.ClientException|Batch.ServerException|any>;
    /**
     * Creates an AWS Batch compute environment. You can create MANAGED or UNMANAGED
compute environments.

In a managed compute environment, AWS Batch manages the compute resources within
the environment, based on the compute resources that you specify. Instances
launched into a managed compute environment use the latest Amazon ECS-optimized
AMI. You can choose to use Amazon EC2 On-Demand instances in your managed
compute environment, or you can use Amazon EC2 Spot instances that only launch
when the Spot bid price is below a specified percentage of the On-Demand price.

In an unmanaged compute environment, you can manage your own compute resources.
This provides more compute resource configuration options, such as using a
custom AMI, but you must ensure that your AMI meets the Amazon ECS container
instance AMI specification. For more information, see Container Instance AMIs
[http://docs.aws.amazon.com/AmazonECS/latest/developerguide/container_instance_AMIs.html] 
in the Amazon EC2 Container Service Developer Guide. After you have created your
unmanaged compute environment, you can use the DescribeComputeEnvironments 
operation to find the Amazon ECS cluster that is associated with it and then
manually launch your container instances into that Amazon ECS cluster. For more
information, see Launching an Amazon ECS Container Instance
[http://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_container_instance.html] 
in the Amazon EC2 Container Service Developer Guide.
     *
     * @error ClientException   
     * @error ServerException   
     */
    createComputeEnvironment(params: Batch.CreateComputeEnvironmentRequest, callback?: (err: Batch.ClientException|Batch.ServerException|any, data: Batch.CreateComputeEnvironmentResponse|any) => void): Request<Batch.CreateComputeEnvironmentResponse|any,Batch.ClientException|Batch.ServerException|any>;
    /**
     * Creates an AWS Batch job queue. When you create a job queue, you associate one
or more compute environments to the queue and assign an order of preference for
the compute environments.

You also set a priority to the job queue that determines the order in which the
AWS Batch scheduler places jobs onto its associated compute environments. For
example, if a compute environment is associated with more than one job queue,
the job queue with a higher priority is given preference for scheduling jobs to
that compute environment.
     *
     * @error ClientException   
     * @error ServerException   
     */
    createJobQueue(params: Batch.CreateJobQueueRequest, callback?: (err: Batch.ClientException|Batch.ServerException|any, data: Batch.CreateJobQueueResponse|any) => void): Request<Batch.CreateJobQueueResponse|any,Batch.ClientException|Batch.ServerException|any>;
    /**
     * Deletes an AWS Batch compute environment.

Before you can delete a compute environment, you must set its state to DISABLED 
with the UpdateComputeEnvironment API operation and disassociate it from any job
queues with the UpdateJobQueue API operation.
     *
     * @error ClientException   
     * @error ServerException   
     */
    deleteComputeEnvironment(params: Batch.DeleteComputeEnvironmentRequest, callback?: (err: Batch.ClientException|Batch.ServerException|any, data: Batch.DeleteComputeEnvironmentResponse|any) => void): Request<Batch.DeleteComputeEnvironmentResponse|any,Batch.ClientException|Batch.ServerException|any>;
    /**
     * Deletes the specified job queue. You must first disable submissions for a queue
with the UpdateJobQueue operation and terminate any jobs that have not completed
with the TerminateJob.

It is not necessary to disassociate compute environments from a queue before
submitting a DeleteJobQueue request.
     *
     * @error ClientException   
     * @error ServerException   
     */
    deleteJobQueue(params: Batch.DeleteJobQueueRequest, callback?: (err: Batch.ClientException|Batch.ServerException|any, data: Batch.DeleteJobQueueResponse|any) => void): Request<Batch.DeleteJobQueueResponse|any,Batch.ClientException|Batch.ServerException|any>;
    /**
     * Deregisters an AWS Batch job definition.
     *
     * @error ClientException   
     * @error ServerException   
     */
    deregisterJobDefinition(params: Batch.DeregisterJobDefinitionRequest, callback?: (err: Batch.ClientException|Batch.ServerException|any, data: Batch.DeregisterJobDefinitionResponse|any) => void): Request<Batch.DeregisterJobDefinitionResponse|any,Batch.ClientException|Batch.ServerException|any>;
    /**
     * Describes one or more of your compute environments.

If you are using an unmanaged compute environment, you can use the 
DescribeComputeEnvironment operation to determine the ecsClusterArn that you
should launch your Amazon ECS container instances into.
     *
     * @error ClientException   
     * @error ServerException   
     */
    describeComputeEnvironments(params: Batch.DescribeComputeEnvironmentsRequest, callback?: (err: Batch.ClientException|Batch.ServerException|any, data: Batch.DescribeComputeEnvironmentsResponse|any) => void): Request<Batch.DescribeComputeEnvironmentsResponse|any,Batch.ClientException|Batch.ServerException|any>;
    /**
     * Describes a list of job definitions. You can specify a status (such as ACTIVE)
to only return job definitions that match that status.
     *
     * @error ClientException   
     * @error ServerException   
     */
    describeJobDefinitions(params: Batch.DescribeJobDefinitionsRequest, callback?: (err: Batch.ClientException|Batch.ServerException|any, data: Batch.DescribeJobDefinitionsResponse|any) => void): Request<Batch.DescribeJobDefinitionsResponse|any,Batch.ClientException|Batch.ServerException|any>;
    /**
     * Describes one or more of your job queues.
     *
     * @error ClientException   
     * @error ServerException   
     */
    describeJobQueues(params: Batch.DescribeJobQueuesRequest, callback?: (err: Batch.ClientException|Batch.ServerException|any, data: Batch.DescribeJobQueuesResponse|any) => void): Request<Batch.DescribeJobQueuesResponse|any,Batch.ClientException|Batch.ServerException|any>;
    /**
     * Describes a list of AWS Batch jobs.
     *
     * @error ClientException   
     * @error ServerException   
     */
    describeJobs(params: Batch.DescribeJobsRequest, callback?: (err: Batch.ClientException|Batch.ServerException|any, data: Batch.DescribeJobsResponse|any) => void): Request<Batch.DescribeJobsResponse|any,Batch.ClientException|Batch.ServerException|any>;
    /**
     * Returns a list of task jobs for a specified job queue. You can filter the
results by job status with the jobStatus parameter.
     *
     * @error ClientException   
     * @error ServerException   
     */
    listJobs(params: Batch.ListJobsRequest, callback?: (err: Batch.ClientException|Batch.ServerException|any, data: Batch.ListJobsResponse|any) => void): Request<Batch.ListJobsResponse|any,Batch.ClientException|Batch.ServerException|any>;
    /**
     * Registers an AWS Batch job definition.
     *
     * @error ClientException   
     * @error ServerException   
     */
    registerJobDefinition(params: Batch.RegisterJobDefinitionRequest, callback?: (err: Batch.ClientException|Batch.ServerException|any, data: Batch.RegisterJobDefinitionResponse|any) => void): Request<Batch.RegisterJobDefinitionResponse|any,Batch.ClientException|Batch.ServerException|any>;
    /**
     * Submits an AWS Batch job from a job definition. Parameters specified during 
SubmitJob override parameters defined in the job definition.
     *
     * @error ClientException   
     * @error ServerException   
     */
    submitJob(params: Batch.SubmitJobRequest, callback?: (err: Batch.ClientException|Batch.ServerException|any, data: Batch.SubmitJobResponse|any) => void): Request<Batch.SubmitJobResponse|any,Batch.ClientException|Batch.ServerException|any>;
    /**
     * Terminates jobs in a job queue. Jobs that are in the STARTING or RUNNING state
are terminated, which causes them to transition to FAILED. Jobs that have not
progressed to the STARTING state are cancelled.
     *
     * @error ClientException   
     * @error ServerException   
     */
    terminateJob(params: Batch.TerminateJobRequest, callback?: (err: Batch.ClientException|Batch.ServerException|any, data: Batch.TerminateJobResponse|any) => void): Request<Batch.TerminateJobResponse|any,Batch.ClientException|Batch.ServerException|any>;
    /**
     * Updates an AWS Batch compute environment.
     *
     * @error ClientException   
     * @error ServerException   
     */
    updateComputeEnvironment(params: Batch.UpdateComputeEnvironmentRequest, callback?: (err: Batch.ClientException|Batch.ServerException|any, data: Batch.UpdateComputeEnvironmentResponse|any) => void): Request<Batch.UpdateComputeEnvironmentResponse|any,Batch.ClientException|Batch.ServerException|any>;
    /**
     * Updates a job queue.
     *
     * @error ClientException   
     * @error ServerException   
     */
    updateJobQueue(params: Batch.UpdateJobQueueRequest, callback?: (err: Batch.ClientException|Batch.ServerException|any, data: Batch.UpdateJobQueueResponse|any) => void): Request<Batch.UpdateJobQueueResponse|any,Batch.ClientException|Batch.ServerException|any>;

  }

  export module Batch {
    
    export type Boolean = boolean;
    
    export type CEState = string;
    
    export type CEStatus = string;
    
    export type CEType = string;
    
    export type CRType = string;
    
    export type ComputeEnvironmentDetailList = ComputeEnvironmentDetail[];
    
    export type ComputeEnvironmentOrders = ComputeEnvironmentOrder[];
    
    export type EnvironmentVariables = KeyValuePair[];
    
    export type Integer = number;
    
    export type JQState = string;
    
    export type JQStatus = string;
    
    export type JobDefinitionList = JobDefinition[];
    
    export type JobDefinitionType = string;
    
    export type JobDependencyList = JobDependency[];
    
    export type JobDetailList = JobDetail[];
    
    export type JobQueueDetailList = JobQueueDetail[];
    
    export type JobStatus = string;
    
    export type JobSummaryList = JobSummary[];
    
    export type Long = number;
    
    export type MountPoints = MountPoint[];
    
    export type ParametersMap = {[key:string]: String};
    
    export type String = string;
    
    export type StringList = String[];
    
    export type TagsMap = {[key:string]: String};
    
    export type Ulimits = Ulimit[];
    
    export type Volumes = Volume[];

    export interface CancelJobRequest {
        /** A list of up to 100 job IDs to cancel. **/
        jobId: String;
        /** A message to attach to the job that explains the reason for cancelling it. This
message is returned by future DescribeJobs operations on the job. This message
is also recorded in the AWS Batch activity logs. **/
        reason: String;
    }
    export interface CancelJobResponse {
    }
    export interface ClientException {
        message?: String;
    }
    export interface ComputeEnvironmentDetail {
        /** The name of the compute environment. **/
        computeEnvironmentName: String;
        /** The Amazon Resource Name (ARN) of the compute environment. **/
        computeEnvironmentArn: String;
        /** The Amazon Resource Name (ARN) of the underlying Amazon ECS cluster used by the
compute environment. **/
        ecsClusterArn: String;
        /** The type of the compute environment. **/
        type?: CEType;
        /** The state of the compute environment. The valid values are ENABLED or DISABLED.
An ENABLED state indicates that you can register instances with the compute
environment and that the associated instances can accept jobs. **/
        state?: CEState;
        /** The current status of the compute environment (for example, CREATING or VALID). **/
        status?: CEStatus;
        /** A short, human-readable string to provide additional details about the current
status of the compute environment. **/
        statusReason?: String;
        /** The compute resources defined for the compute environment. **/
        computeResources?: ComputeResource;
        /** The service role associated with the compute environment that allows AWS Batch
to make calls to AWS API operations on your behalf. **/
        serviceRole?: String;
    }
    export interface ComputeEnvironmentOrder {
        /** The order of the compute environment. **/
        order: Integer;
        /** The Amazon Resource Name (ARN) of the compute environment. **/
        computeEnvironment: String;
    }
    export interface ComputeResource {
        /** The type of compute environment. **/
        type: CRType;
        /** The minimum number of EC2 vCPUs that an environment should maintain. **/
        minvCpus: Integer;
        /** The maximum number of EC2 vCPUs that an environment can reach. **/
        maxvCpus: Integer;
        /** The desired number of EC2 vCPUS in the compute environment. **/
        desiredvCpus?: Integer;
        /** The instances types that may launched. **/
        instanceTypes: StringList;
        /** The VPC subnets into which the compute resources are launched. **/
        subnets: StringList;
        /** The EC2 security group that is associated with instances launched in the compute
environment. **/
        securityGroupIds: StringList;
        /** The EC2 key pair that is used for instances launched in the compute environment. **/
        ec2KeyPair?: String;
        /** The Amazon ECS instance role applied to Amazon EC2 instances in a compute
environment. **/
        instanceRole: String;
        /** Key-value pair tags to be applied to resources that are launched in the compute
environment. **/
        tags?: TagsMap;
        /** The minimum percentage that a Spot Instance price must be when compared with the
On-Demand price for that instance type before instances are launched. For
example, if your bid percentage is 20%, then the Spot price must be below 20% of
the current On-Demand price for that EC2 instance. **/
        bidPercentage?: Integer;
        /** The Amazon Resource Name (ARN) of the Amazon EC2 Spot Fleet IAM role applied to
a SPOT compute environment. **/
        spotIamFleetRole?: String;
    }
    export interface ComputeResourceUpdate {
        /** The minimum number of EC2 vCPUs that an environment should maintain. **/
        minvCpus?: Integer;
        /** The maximum number of EC2 vCPUs that an environment can reach. **/
        maxvCpus?: Integer;
        /** The desired number of EC2 vCPUS in the compute environment. **/
        desiredvCpus?: Integer;
    }
    export interface ContainerDetail {
        /** The image used to start the container. **/
        image?: String;
        /** The number of VCPUs allocated for the job. **/
        vcpus?: Integer;
        /** The number of MiB of memory reserved for the job. **/
        memory?: Integer;
        /** The command that is passed to the container. **/
        command?: StringList;
        /** The Amazon Resource Name (ARN) associated with the job upon execution. **/
        jobRoleArn?: String;
        /** A list of volumes associated with the job. **/
        volumes?: Volumes;
        /** The environment variables to pass to a container. **/
        environment?: EnvironmentVariables;
        /** The mount points for data volumes in your container. **/
        mountPoints?: MountPoints;
        /** When this parameter is true, the container is given read-only access to its root
file system. **/
        readonlyRootFilesystem?: Boolean;
        /** A list of ulimit values to set in the container. **/
        ulimits?: Ulimits;
        /** When this parameter is true, the container is given elevated privileges on the
host container instance (similar to the root user). **/
        privileged?: Boolean;
        /** The user name to use inside the container. **/
        user?: String;
        /** The exit code to return upon completion. **/
        exitCode?: Integer;
        /** A short (255 max characters) human-readable string to provide additional details
about a running or stopped container. **/
        reason?: String;
        /** The Amazon Resource Name (ARN) of the container instance on which the container
is running. **/
        containerInstanceArn?: String;
    }
    export interface ContainerOverrides {
        /** The number of vCPUs to reserve for the container. This value overrides the value
set in the job definition. **/
        vcpus?: Integer;
        /** The number of MiB of memory reserved for the job. This value overrides the value
set in the job definition. **/
        memory?: Integer;
        /** The command to send to the container that overrides the default command from the
Docker image or the job definition. **/
        command?: StringList;
        /** The environment variables to send to the container. You can add new environment
variables, which are added to the container at launch, or you can override the
existing environment variables from the Docker image or the job definition. **/
        environment?: EnvironmentVariables;
    }
    export interface ContainerProperties {
        /** The image used to start a container. This string is passed directly to the
Docker daemon. Images in the Docker Hub registry are available by default. Other
repositories are specified with repository-url/image:tag . Up to 255 letters
(uppercase and lowercase), numbers, hyphens, underscores, colons, periods,
forward slashes, and number signs are allowed. This parameter maps to Image in
the Create a container
[https://docs.docker.com/engine/reference/api/docker_remote_api_v1.23/#create-a-container] 
section of the Docker Remote API
[https://docs.docker.com/engine/reference/api/docker_remote_api_v1.23/] and the 
IMAGE parameter of docker run [https://docs.docker.com/engine/reference/run/].

 &amp;#42;  Images in Amazon ECR repositories use the full registry and repository URI
   (for example, 
   012345678910.dkr.ecr.&lt;region-name&gt;.amazonaws.com/&lt;repository-name&gt;). 
   
   
 *  Images in official repositories on Docker Hub use a single name (for
   example, ubuntu or mongo).
   
   
 *  Images in other repositories on Docker Hub are qualified with an
   organization name (for example, amazon/amazon-ecs-agent).
   
   
 *  Images in other online repositories are qualified further by a domain name
   (for example, quay.io/assemblyline/ubuntu). **/
        image: String;
        /** The number of vCPUs reserved for the container. This parameter maps to CpuShares 
in the Create a container
[https://docs.docker.com/engine/reference/api/docker_remote_api_v1.23/#create-a-container] 
section of the Docker Remote API
[https://docs.docker.com/engine/reference/api/docker_remote_api_v1.23/] and the 
--cpu-shares option to docker run
[https://docs.docker.com/engine/reference/run/]. Each vCPU is equivalent to
1,024 CPU shares. **/
        vcpus: Integer;
        /** The hard limit (in MiB) of memory to present to the container. If your container
attempts to exceed the memory specified here, the container is killed. This
parameter maps to Memory in the Create a container
[https://docs.docker.com/engine/reference/api/docker_remote_api_v1.23/#create-a-container] 
section of the Docker Remote API
[https://docs.docker.com/engine/reference/api/docker_remote_api_v1.23/] and the 
--memory option to docker run [https://docs.docker.com/engine/reference/run/]. **/
        memory: Integer;
        /** The command that is passed to the container. This parameter maps to Cmd in the 
Create a container
[https://docs.docker.com/engine/reference/api/docker_remote_api_v1.23/#create-a-container] 
section of the Docker Remote API
[https://docs.docker.com/engine/reference/api/docker_remote_api_v1.23/] and the 
COMMAND parameter to docker run [https://docs.docker.com/engine/reference/run/].
For more information, see https://docs.docker.com/engine/reference/builder/#cmd
[https://docs.docker.com/engine/reference/builder/#cmd]. **/
        command?: StringList;
        /** The Amazon Resource Name (ARN) of the IAM role that the container can assume for
AWS permissions. **/
        jobRoleArn?: String;
        /** A list of data volumes used in a job. **/
        volumes?: Volumes;
        /** The environment variables to pass to a container. This parameter maps to Env in
the Create a container
[https://docs.docker.com/engine/reference/api/docker_remote_api_v1.23/#create-a-container] 
section of the Docker Remote API
[https://docs.docker.com/engine/reference/api/docker_remote_api_v1.23/] and the 
--env option to docker run [https://docs.docker.com/engine/reference/run/].

We do not recommend using plain text environment variables for sensitive
information, such as credential data. **/
        environment?: EnvironmentVariables;
        /** The mount points for data volumes in your container. This parameter maps to 
Volumes in the Create a container
[https://docs.docker.com/engine/reference/api/docker_remote_api_v1.23/#create-a-container] 
section of the Docker Remote API
[https://docs.docker.com/engine/reference/api/docker_remote_api_v1.23/] and the 
--volume option to docker run [https://docs.docker.com/engine/reference/run/]. **/
        mountPoints?: MountPoints;
        /** When this parameter is true, the container is given read-only access to its root
file system. This parameter maps to ReadonlyRootfs in the Create a container
[https://docs.docker.com/engine/reference/api/docker_remote_api_v1.23/#create-a-container] 
section of the Docker Remote API
[https://docs.docker.com/engine/reference/api/docker_remote_api_v1.23/] and the 
--read-only option to docker run. **/
        readonlyRootFilesystem?: Boolean;
        /** When this parameter is true, the container is given elevated privileges on the
host container instance (similar to the root user). This parameter maps to 
Privileged in the Create a container
[https://docs.docker.com/engine/reference/api/docker_remote_api_v1.23/#create-a-container] 
section of the Docker Remote API
[https://docs.docker.com/engine/reference/api/docker_remote_api_v1.23/] and the 
--privileged option to docker run
[https://docs.docker.com/engine/reference/run/]. **/
        privileged?: Boolean;
        /** A list of ulimits to set in the container. This parameter maps to Ulimits in the 
Create a container
[https://docs.docker.com/engine/reference/api/docker_remote_api_v1.23/#create-a-container] 
section of the Docker Remote API
[https://docs.docker.com/engine/reference/api/docker_remote_api_v1.23/] and the 
--ulimit option to docker run [https://docs.docker.com/engine/reference/run/]. **/
        ulimits?: Ulimits;
        /** The user name to use inside the container. This parameter maps to User in the 
Create a container
[https://docs.docker.com/engine/reference/api/docker_remote_api_v1.23/#create-a-container] 
section of the Docker Remote API
[https://docs.docker.com/engine/reference/api/docker_remote_api_v1.23/] and the 
--user option to docker run [https://docs.docker.com/engine/reference/run/]. **/
        user?: String;
    }
    export interface CreateComputeEnvironmentRequest {
        /** The name for your compute environment. Up to 128 letters (uppercase and
lowercase), numbers, and underscores are allowed. **/
        computeEnvironmentName: String;
        /** The type of the compute environment. **/
        type: CEType;
        /** The state of the compute environment. If the state is ENABLED, then the compute
environment accepts jobs from a queue and can scale out automatically based on
queues. **/
        state?: CEState;
        /** Details of the compute resources managed by the compute environment. This
parameter is required for managed compute environments. **/
        computeResources?: ComputeResource;
        /** The full Amazon Resource Name (ARN) of the IAM role that allows AWS Batch to
make calls to other AWS services on your behalf. **/
        serviceRole: String;
    }
    export interface CreateComputeEnvironmentResponse {
        /** The name of the compute environment. **/
        computeEnvironmentName?: String;
        /** The Amazon Resource Name (ARN) of the compute environment. **/
        computeEnvironmentArn?: String;
    }
    export interface CreateJobQueueRequest {
        /** The name of the job queue. **/
        jobQueueName: String;
        /** The state of the job queue. If the job queue state is ENABLED, it is able to
accept jobs. **/
        state?: JQState;
        /** The priority of the job queue. Job queues with a higher priority (or a lower
integer value for the priority parameter) are evaluated first when associated
with same compute environment. Priority is determined in ascending order, for
example, a job queue with a priority value of 1 is given scheduling preference
over a job queue with a priority value of 10. **/
        priority: Integer;
        /** The set of compute environments mapped to a job queue and their order relative
to each other. The job scheduler uses this parameter to determine which compute
environment should execute a given job. Compute environments must be in the 
VALID state before you can associate them with a job queue. You can associate up
to 3 compute environments with a job queue. **/
        computeEnvironmentOrder: ComputeEnvironmentOrders;
    }
    export interface CreateJobQueueResponse {
        /** The name of the job queue. **/
        jobQueueName: String;
        /** The Amazon Resource Name (ARN) of the job queue. **/
        jobQueueArn: String;
    }
    export interface DeleteComputeEnvironmentRequest {
        /** The name or Amazon Resource Name (ARN) of the compute environment to delete. **/
        computeEnvironment: String;
    }
    export interface DeleteComputeEnvironmentResponse {
    }
    export interface DeleteJobQueueRequest {
        /** The short name or full Amazon Resource Name (ARN) of the queue to delete. **/
        jobQueue: String;
    }
    export interface DeleteJobQueueResponse {
    }
    export interface DeregisterJobDefinitionRequest {
        /** The name and revision (name:revision) or full Amazon Resource Name (ARN) of the
job definition to deregister. **/
        jobDefinition: String;
    }
    export interface DeregisterJobDefinitionResponse {
    }
    export interface DescribeComputeEnvironmentsRequest {
        /** A list of up to 100 compute environment names or full Amazon Resource Name (ARN)
entries. **/
        computeEnvironments?: StringList;
        /** The maximum number of cluster results returned by DescribeComputeEnvironments in
paginated output. When this parameter is used, DescribeComputeEnvironments only
returns maxResults results in a single page along with a nextToken response
element. The remaining results of the initial request can be seen by sending
another DescribeComputeEnvironments request with the returned nextToken value.
This value can be between 1 and 100. If this parameter is not used, then 
DescribeComputeEnvironments returns up to 100 results and a nextToken value if
applicable. **/
        maxResults?: Integer;
        /** The nextToken value returned from a previous paginated 
DescribeComputeEnvironments request where maxResults was used and the results
exceeded the value of that parameter. Pagination continues from the end of the
previous results that returned the nextToken value. This value is null when
there are no more results to return.

This token should be treated as an opaque identifier that is only used to
retrieve the next items in a list and not for other programmatic purposes. **/
        nextToken?: String;
    }
    export interface DescribeComputeEnvironmentsResponse {
        /** The list of compute environments. **/
        computeEnvironments?: ComputeEnvironmentDetailList;
        /** The nextToken value to include in a future DescribeComputeEnvironments request.
When the results of a DescribeJobDefinitions request exceed maxResults, this
value can be used to retrieve the next page of results. This value is null when
there are no more results to return. **/
        nextToken?: String;
    }
    export interface DescribeJobDefinitionsRequest {
        /** A space-separated list of up to 100 job definition names or full Amazon Resource
Name (ARN) entries. **/
        jobDefinitions?: StringList;
        /** The maximum number of results returned by DescribeJobDefinitions in paginated
output. When this parameter is used, DescribeJobDefinitions only returns 
maxResults results in a single page along with a nextToken response element. The
remaining results of the initial request can be seen by sending another 
DescribeJobDefinitions request with the returned nextToken value. This value can
be between 1 and 100. If this parameter is not used, then DescribeJobDefinitions 
returns up to 100 results and a nextToken value if applicable. **/
        maxResults?: Integer;
        /** The name of the job definition to describe. **/
        jobDefinitionName?: String;
        /** The status with which to filter job definitions. **/
        status?: String;
        /** The nextToken value returned from a previous paginated DescribeJobDefinitions 
request where maxResults was used and the results exceeded the value of that
parameter. Pagination continues from the end of the previous results that
returned the nextToken value. This value is null when there are no more results
to return.

This token should be treated as an opaque identifier that is only used to
retrieve the next items in a list and not for other programmatic purposes. **/
        nextToken?: String;
    }
    export interface DescribeJobDefinitionsResponse {
        /** The list of job definitions. **/
        jobDefinitions?: JobDefinitionList;
        /** The nextToken value to include in a future DescribeJobDefinitions request. When
the results of a DescribeJobDefinitions request exceed maxResults, this value
can be used to retrieve the next page of results. This value is null when there
are no more results to return. **/
        nextToken?: String;
    }
    export interface DescribeJobQueuesRequest {
        /** A list of up to 100 queue names or full queue Amazon Resource Name (ARN)
entries. **/
        jobQueues?: StringList;
        /** The maximum number of results returned by DescribeJobQueues in paginated output.
When this parameter is used, DescribeJobQueues only returns maxResults results
in a single page along with a nextToken response element. The remaining results
of the initial request can be seen by sending another DescribeJobQueues request
with the returned nextToken value. This value can be between 1 and 100. If this
parameter is not used, then DescribeJobQueues returns up to 100 results and a 
nextToken value if applicable. **/
        maxResults?: Integer;
        /** The nextToken value returned from a previous paginated DescribeJobQueues request
where maxResults was used and the results exceeded the value of that parameter.
Pagination continues from the end of the previous results that returned the 
nextToken value. This value is null when there are no more results to return.

This token should be treated as an opaque identifier that is only used to
retrieve the next items in a list and not for other programmatic purposes. **/
        nextToken?: String;
    }
    export interface DescribeJobQueuesResponse {
        /** The list of job queues. **/
        jobQueues?: JobQueueDetailList;
        /** The nextToken value to include in a future DescribeJobQueues request. When the
results of a DescribeJobQueues request exceed maxResults, this value can be used
to retrieve the next page of results. This value is null when there are no more
results to return. **/
        nextToken?: String;
    }
    export interface DescribeJobsRequest {
        /** A space-separated list of up to 100 job IDs. **/
        jobs: StringList;
    }
    export interface DescribeJobsResponse {
        /** The list of jobs. **/
        jobs?: JobDetailList;
    }
    export interface Host {
        /** The path on the host container instance that is presented to the container. If
this parameter is empty, then the Docker daemon has assigned a host path for
you. If the host parameter contains a sourcePath file location, then the data
volume persists at the specified location on the host container instance until
you delete it manually. If the sourcePath value does not exist on the host
container instance, the Docker daemon creates it. If the location does exist,
the contents of the source path folder are exported. **/
        sourcePath?: String;
    }
    export interface JobDefinition {
        /** The name of the job definition. **/
        jobDefinitionName: String;
        /** The Amazon Resource Name (ARN) for the job definition. **/
        jobDefinitionArn: String;
        /** The revision of the job definition. **/
        revision: Integer;
        /** The status of the job definition. **/
        status?: String;
        /** The type of job definition. **/
        type: String;
        /** Default parameters or parameter substitution placeholders that are set in the
job definition. Parameters are specified as a key-value pair mapping. Parameters
in a SubmitJob request override any corresponding parameter defaults from the
job definition. **/
        parameters?: ParametersMap;
        /** An object with various properties specific to container-based jobs. **/
        containerProperties?: ContainerProperties;
    }
    export interface JobDependency {
        /** The job ID of the AWS Batch job associated with this dependency. **/
        jobId?: String;
    }
    export interface JobDetail {
        /** The name of the job. **/
        jobName: String;
        /** The ID for the job. **/
        jobId: String;
        /** The Amazon Resource Name (ARN) of the job queue with which the job is
associated. **/
        jobQueue: String;
        /** The current status for the job. **/
        status: JobStatus;
        /** A short, human-readable string to provide additional details about the current
status of the job. **/
        statusReason?: String;
        /** The Unix timestamp for when the job was created (when the task entered the 
PENDING state). **/
        createdAt?: Long;
        /** The Unix timestamp for when the job was started (when the task transitioned from
the PENDING state to the RUNNING state). **/
        startedAt: Long;
        /** The Unix timestamp for when the job was stopped (when the task transitioned from
the RUNNING state to the STOPPED state). **/
        stoppedAt?: Long;
        /** A list of job names or IDs on which this job depends. **/
        dependsOn?: JobDependencyList;
        /** The job definition that is used by this job. **/
        jobDefinition: String;
        /** Additional parameters passed to the job that replace parameter substitution
placeholders or override any corresponding parameter defaults from the job
definition. **/
        parameters?: ParametersMap;
        /** An object representing the details of the container that is associated with the
job. **/
        container?: ContainerDetail;
    }
    export interface JobQueueDetail {
        /** The name of the job queue. **/
        jobQueueName: String;
        /** The Amazon Resource Name (ARN) of the job queue. **/
        jobQueueArn: String;
        /** Describes the ability of the queue to accept new jobs. **/
        state: JQState;
        /** The status of the job queue (for example, CREATING or VALID). **/
        status?: JQStatus;
        /** A short, human-readable string to provide additional details about the current
status of the job queue. **/
        statusReason?: String;
        /** The priority of the job queue. **/
        priority: Integer;
        /** The compute environments that are attached to the job queue and the order in
which job placement is preferred. Compute environments are selected for job
placement in ascending order. **/
        computeEnvironmentOrder: ComputeEnvironmentOrders;
    }
    export interface JobSummary {
        /** The ID of the job. **/
        jobId: String;
        /** The name of the job. **/
        jobName: String;
    }
    export interface KeyValuePair {
        /** The name of the key value pair. For environment variables, this is the name of
the environment variable. **/
        name?: String;
        /** The value of the key value pair. For environment variables, this is the value of
the environment variable. **/
        value?: String;
    }
    export interface ListJobsRequest {
        /** The name or full Amazon Resource Name (ARN) of the job queue with which to list
jobs. **/
        jobQueue: String;
        /** The job status with which to filter jobs in the specified queue. **/
        jobStatus?: JobStatus;
        /** The maximum number of results returned by ListJobs in paginated output. When
this parameter is used, ListJobs only returns maxResults results in a single
page along with a nextToken response element. The remaining results of the
initial request can be seen by sending another ListJobs request with the
returned nextToken value. This value can be between 1 and 100. If this parameter
is not used, then ListJobs returns up to 100 results and a nextToken value if
applicable. **/
        maxResults?: Integer;
        /** The nextToken value returned from a previous paginated ListJobs request where 
maxResults was used and the results exceeded the value of that parameter.
Pagination continues from the end of the previous results that returned the 
nextToken value. This value is null when there are no more results to return.

This token should be treated as an opaque identifier that is only used to
retrieve the next items in a list and not for other programmatic purposes. **/
        nextToken?: String;
    }
    export interface ListJobsResponse {
        /** A list of job summaries that match the request. **/
        jobSummaryList: JobSummaryList;
        /** The nextToken value to include in a future ListJobs request. When the results of
a ListJobs request exceed maxResults, this value can be used to retrieve the
next page of results. This value is null when there are no more results to
return. **/
        nextToken?: String;
    }
    export interface MountPoint {
        /** The path on the container at which to mount the host volume. **/
        containerPath?: String;
        /** If this value is true, the container has read-only access to the volume;
otherwise, the container can write to the volume. The default value is false. **/
        readOnly?: Boolean;
        /** The name of the volume to mount. **/
        sourceVolume?: String;
    }
    export interface RegisterJobDefinitionRequest {
        /** The name of the job definition to register. **/
        jobDefinitionName: String;
        /** The type of job definition. **/
        type: JobDefinitionType;
        /** Default parameter substitution placeholders to set in the job definition.
Parameters are specified as a key-value pair mapping. Parameters in a SubmitJob 
request override any corresponding parameter defaults from the job definition. **/
        parameters?: ParametersMap;
        /** An object with various properties specific for container-based jobs. This
parameter is required if the type parameter is container. **/
        containerProperties?: ContainerProperties;
    }
    export interface RegisterJobDefinitionResponse {
        /** The name of the job definition. **/
        jobDefinitionName: String;
        /** The Amazon Resource Name (ARN) of the job definition. **/
        jobDefinitionArn: String;
        /** The revision of the job definition. **/
        revision: Integer;
    }
    export interface ServerException {
        message?: String;
    }
    export interface SubmitJobRequest {
        /** The name of the job. **/
        jobName: String;
        /** The job queue into which the job will be submitted. You can specify either the
name or the Amazon Resource Name (ARN) of the queue. **/
        jobQueue: String;
        /** A list of job names or IDs on which this job depends. A job can depend upon a
maximum of 100 jobs. **/
        dependsOn?: JobDependencyList;
        /** The job definition used by this job. This value can be either a name:revision or
the Amazon Resource Name (ARN) for the job definition. **/
        jobDefinition: String;
        /** Additional parameters passed to the job that replace parameter substitution
placeholders that are set in the job definition. Parameters are specified as a
key and value pair mapping. Parameters in a SubmitJob request override any
corresponding parameter defaults from the job definition. **/
        parameters?: ParametersMap;
        /** A list of container overrides in JSON format that specify the name of a
container in the specified job definition and the overrides it should receive.
You can override the default command for a container (that is specified in the
job definition or the Docker image) with a command override. You can also
override existing environment variables (that are specified in the job
definition or Docker image) on a container or add new environment variables to
it with an environment override. **/
        containerOverrides?: ContainerOverrides;
    }
    export interface SubmitJobResponse {
        /** The name of the job. **/
        jobName: String;
        /** The unique identifier for the job. **/
        jobId: String;
    }
    export interface TerminateJobRequest {
        /** Job IDs to be terminated. Up to 100 jobs can be specified. **/
        jobId: String;
        /** A message to attach to the job that explains the reason for cancelling it. This
message is returned by future DescribeJobs operations on the job. This message
is also recorded in the AWS Batch activity logs. **/
        reason: String;
    }
    export interface TerminateJobResponse {
    }
    export interface Ulimit {
        /** The hard limit for the ulimit type. **/
        hardLimit: Integer;
        /** The type of the ulimit. **/
        name: String;
        /** The soft limit for the ulimit type. **/
        softLimit: Integer;
    }
    export interface UpdateComputeEnvironmentRequest {
        /** The name or full Amazon Resource Name (ARN) of the compute environment to
update. **/
        computeEnvironment: String;
        /** The state of the compute environment. Compute environments in the ENABLED state
can accept jobs from a queue and scale in or out automatically based on the
workload demand of its associated queues. **/
        state?: CEState;
        /** Details of the compute resources managed by the compute environment. Required
for a managed compute environment. **/
        computeResources?: ComputeResourceUpdate;
        /** The name or full Amazon Resource Name (ARN) of the IAM role that allows AWS
Batch to make calls to ECS, Auto Scaling, and EC2 on your behalf. **/
        serviceRole?: String;
    }
    export interface UpdateComputeEnvironmentResponse {
        /** The name of compute environment. **/
        computeEnvironmentName?: String;
        /** The Amazon Resource Name (ARN) of the compute environment. **/
        computeEnvironmentArn?: String;
    }
    export interface UpdateJobQueueRequest {
        /** The name or the Amazon Resource Name (ARN) of the job queue. **/
        jobQueue: String;
        /** Describes the queue&#x27;s ability to accept new jobs. **/
        state?: JQState;
        /** The priority of the job queue. Job queues with a higher priority (or a lower
integer value for the priority parameter) are evaluated first when associated
with same compute environment. Priority is determined in ascending order, for
example, a job queue with a priority value of 1 is given scheduling preference
over a job queue with a priority value of 10. **/
        priority?: Integer;
        /** Details the set of compute environments mapped to a job queue and their order
relative to each other. This is one of the parameters used by the job scheduler
to determine which compute environment should execute a given job. **/
        computeEnvironmentOrder?: ComputeEnvironmentOrders;
    }
    export interface UpdateJobQueueResponse {
        /** The name of the job queue. **/
        jobQueueName?: String;
        /** The Amazon Resource Name (ARN) of the job queue. **/
        jobQueueArn?: String;
    }
    export interface Volume {
        /** The contents of the host parameter determine whether your data volume persists
on the host container instance and where it is stored. If the host parameter is
empty, then the Docker daemon assigns a host path for your data volume, but the
data is not guaranteed to persist after the containers associated with it stop
running. **/
        host?: Host;
        /** The name of the volume. Up to 255 letters (uppercase and lowercase), numbers,
hyphens, and underscores are allowed. This name is referenced in the 
sourceVolume parameter of container definition mountPoints. **/
        name?: String;
    }
  }
}
