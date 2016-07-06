// Type definitions for aws-sdk - AWS CodePipeline
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

// COMMENTED <reference path="./aws-sdk.d.ts" />

declare module "aws-sdk" {

 /**
   * apiVersion: 2015-07-09
   * endpointPrefix: codepipeline
   * serviceAbbreviation: CodePipeline
   * signatureVersion: v4
   * protocol: json
   *
   * AWS CodePipelineOverview

This is the AWS CodePipeline API Reference. This guide provides descriptions of
the actions and data types for AWS CodePipeline. Some functionality for your
pipeline is only configurable through the API. For additional information, see
the AWS CodePipeline User Guide
[http://docs.aws.amazon.com/codepipeline/latest/userguide/welcome.html] .

You can use the AWS CodePipeline API to work with pipelines, stages, actions,
gates, and transitions, as described below.

Pipelines are models of automated release processes. Each pipeline is uniquely
named, and consists of actions, gates, and stages.

You can work with pipelines by calling:

 &amp;#42; CreatePipeline , which creates a uniquely-named pipeline.
   
   
 * DeletePipeline , which deletes the specified pipeline.
   
   
 * GetPipeline , which returns information about a pipeline structure.
   
   
 * GetPipelineState , which returns information about the current state of the
   stages and actions of a pipeline.
   
   
 * ListPipelines , which gets a summary of all of the pipelines associated with
   your account.
   
   
 * StartPipelineExecution , which runs the the most recent revision of an
   artifact through the pipeline.
   
   
 * UpdatePipeline , which updates a pipeline with edits or changes to the
   structure of the pipeline.
   
   

Pipelines include stages , which are which are logical groupings of gates and
actions. Each stage contains one or more actions that must complete before the
next stage begins. A stage will result in success or failure. If a stage fails,
then the pipeline stops at that stage and will remain stopped until either a new
version of an artifact appears in the source location, or a user takes action to
re-run the most recent artifact through the pipeline. You can call 
GetPipelineState , which displays the status of a pipeline, including the status
of stages in the pipeline, or GetPipeline , which returns the entire structure
of the pipeline, including the stages of that pipeline. For more information
about the structure of stages and actions, also refer to the AWS CodePipeline
Pipeline Structure Reference
[http://docs.aws.amazon.com/codepipeline/latest/userguide/pipeline-structure.html] 
.

Pipeline stages include actions , which are categorized into categories such as
source or build actions performed within a stage of a pipeline. For example, you
can use a source action to import artifacts into a pipeline from a source such
as Amazon S3. Like stages, you do not work with actions directly in most cases,
but you do define and interact with actions when working with pipeline
operations such as CreatePipeline and GetPipelineState .

Pipelines also include transitions , which allow the transition of artifacts
from one stage to the next in a pipeline after the actions in one stage
complete.

You can work with transitions by calling:

 * DisableStageTransition , which prevents artifacts from transitioning to the
   next stage in a pipeline.
   
   
 * EnableStageTransition , which enables transition of artifacts between stages
   in a pipeline.
   
   

Using the API to integrate with AWS CodePipeline

For third-party integrators or developers who want to create their own
integrations with AWS CodePipeline, the expected sequence varies from the
standard API user. In order to integrate with AWS CodePipeline, developers will
need to work with the following items:

Jobs , which are instances of an action. For example, a job for a source action
might import a revision of an artifact from a source.

You can work with jobs by calling:

 * AcknowledgeJob , which confirms whether a job worker has received the
   specified job,
   
   
 * GetJobDetails , which returns the details of a job,
   
   
 * PollForJobs , which determines whether there are any jobs to act upon,
   
   
 * PutJobFailureResult , which provides details of a job failure, and
   
   
 * PutJobSuccessResult , which provides details of a job success.
   
   

Third party jobs , which are instances of an action created by a partner action
and integrated into AWS CodePipeline. Partner actions are created by members of
the AWS Partner Network.

You can work with third party jobs by calling:

 * AcknowledgeThirdPartyJob , which confirms whether a job worker has received
   the specified job,
   
   
 * GetThirdPartyJobDetails , which requests the details of a job for a partner
   action,
   
   
 * PollForThirdPartyJobs , which determines whether there are any jobs to act
   upon,
   
   
 * PutThirdPartyJobFailureResult , which provides details of a job failure, and
   
   
 * PutThirdPartyJobSuccessResult , which provides details of a job success.
   *
   */
  export class CodePipeline extends Service {
    constructor(options?: any);
    endpoint: Endpoint;
    /**
     * Returns information about a specified job and whether that job has been received
by the job worker. Only used for custom actions.
     *
     * @error ValidationException   
     * @error InvalidNonceException   
     * @error JobNotFoundException   
     */
    acknowledgeJob(params: CodePipeline.AcknowledgeJobInput, callback?: (err: CodePipeline.ValidationException|CodePipeline.InvalidNonceException|CodePipeline.JobNotFoundException|any, data: CodePipeline.AcknowledgeJobOutput|any) => void): Request<CodePipeline.AcknowledgeJobOutput|any,CodePipeline.ValidationException|CodePipeline.InvalidNonceException|CodePipeline.JobNotFoundException|any>;
    /**
     * Confirms a job worker has received the specified job. Only used for partner
actions.
     *
     * @error ValidationException   
     * @error InvalidNonceException   
     * @error JobNotFoundException   
     * @error InvalidClientTokenException   
     */
    acknowledgeThirdPartyJob(params: CodePipeline.AcknowledgeThirdPartyJobInput, callback?: (err: CodePipeline.ValidationException|CodePipeline.InvalidNonceException|CodePipeline.JobNotFoundException|CodePipeline.InvalidClientTokenException|any, data: CodePipeline.AcknowledgeThirdPartyJobOutput|any) => void): Request<CodePipeline.AcknowledgeThirdPartyJobOutput|any,CodePipeline.ValidationException|CodePipeline.InvalidNonceException|CodePipeline.JobNotFoundException|CodePipeline.InvalidClientTokenException|any>;
    /**
     * Creates a new custom action that can be used in all pipelines associated with
the AWS account. Only used for custom actions.
     *
     * @error ValidationException   
     * @error LimitExceededException   
     */
    createCustomActionType(params: CodePipeline.CreateCustomActionTypeInput, callback?: (err: CodePipeline.ValidationException|CodePipeline.LimitExceededException|any, data: CodePipeline.CreateCustomActionTypeOutput|any) => void): Request<CodePipeline.CreateCustomActionTypeOutput|any,CodePipeline.ValidationException|CodePipeline.LimitExceededException|any>;
    /**
     * Creates a pipeline.
     *
     * @error ValidationException   
     * @error PipelineNameInUseException   
     * @error InvalidStageDeclarationException   
     * @error InvalidActionDeclarationException   
     * @error InvalidBlockerDeclarationException   
     * @error InvalidStructureException   
     * @error LimitExceededException   
     */
    createPipeline(params: CodePipeline.CreatePipelineInput, callback?: (err: CodePipeline.ValidationException|CodePipeline.PipelineNameInUseException|CodePipeline.InvalidStageDeclarationException|CodePipeline.InvalidActionDeclarationException|CodePipeline.InvalidBlockerDeclarationException|CodePipeline.InvalidStructureException|CodePipeline.LimitExceededException|any, data: CodePipeline.CreatePipelineOutput|any) => void): Request<CodePipeline.CreatePipelineOutput|any,CodePipeline.ValidationException|CodePipeline.PipelineNameInUseException|CodePipeline.InvalidStageDeclarationException|CodePipeline.InvalidActionDeclarationException|CodePipeline.InvalidBlockerDeclarationException|CodePipeline.InvalidStructureException|CodePipeline.LimitExceededException|any>;
    /**
     * Marks a custom action as deleted. PollForJobs for the custom action will fail
after the action is marked for deletion. Only used for custom actions.

You cannot recreate a custom action after it has been deleted unless you
increase the version number of the action.
     *
     * @error ValidationException   
     */
    deleteCustomActionType(params: CodePipeline.DeleteCustomActionTypeInput, callback?: (err: CodePipeline.ValidationException|any, data: any) => void): Request<any,CodePipeline.ValidationException|any>;
    /**
     * Deletes the specified pipeline.
     *
     * @error ValidationException   
     */
    deletePipeline(params: CodePipeline.DeletePipelineInput, callback?: (err: CodePipeline.ValidationException|any, data: any) => void): Request<any,CodePipeline.ValidationException|any>;
    /**
     * Prevents artifacts in a pipeline from transitioning to the next stage in the
pipeline.
     *
     * @error ValidationException   
     * @error PipelineNotFoundException   
     * @error StageNotFoundException   
     */
    disableStageTransition(params: CodePipeline.DisableStageTransitionInput, callback?: (err: CodePipeline.ValidationException|CodePipeline.PipelineNotFoundException|CodePipeline.StageNotFoundException|any, data: any) => void): Request<any,CodePipeline.ValidationException|CodePipeline.PipelineNotFoundException|CodePipeline.StageNotFoundException|any>;
    /**
     * Enables artifacts in a pipeline to transition to a stage in a pipeline.
     *
     * @error ValidationException   
     * @error PipelineNotFoundException   
     * @error StageNotFoundException   
     */
    enableStageTransition(params: CodePipeline.EnableStageTransitionInput, callback?: (err: CodePipeline.ValidationException|CodePipeline.PipelineNotFoundException|CodePipeline.StageNotFoundException|any, data: any) => void): Request<any,CodePipeline.ValidationException|CodePipeline.PipelineNotFoundException|CodePipeline.StageNotFoundException|any>;
    /**
     * Returns information about a job. Only used for custom actions.

When this API is called, AWS CodePipeline returns temporary credentials for the
Amazon S3 bucket used to store artifacts for the pipeline, if the action
requires access to that Amazon S3 bucket for input or output artifacts.
Additionally, this API returns any secret values defined for the action.
     *
     * @error ValidationException   
     * @error JobNotFoundException   
     */
    getJobDetails(params: CodePipeline.GetJobDetailsInput, callback?: (err: CodePipeline.ValidationException|CodePipeline.JobNotFoundException|any, data: CodePipeline.GetJobDetailsOutput|any) => void): Request<CodePipeline.GetJobDetailsOutput|any,CodePipeline.ValidationException|CodePipeline.JobNotFoundException|any>;
    /**
     * Returns the metadata, structure, stages, and actions of a pipeline. Can be used
to return the entire structure of a pipeline in JSON format, which can then be
modified and used to update the pipeline structure with UpdatePipeline .
     *
     * @error ValidationException   
     * @error PipelineNotFoundException   
     * @error PipelineVersionNotFoundException   
     */
    getPipeline(params: CodePipeline.GetPipelineInput, callback?: (err: CodePipeline.ValidationException|CodePipeline.PipelineNotFoundException|CodePipeline.PipelineVersionNotFoundException|any, data: CodePipeline.GetPipelineOutput|any) => void): Request<CodePipeline.GetPipelineOutput|any,CodePipeline.ValidationException|CodePipeline.PipelineNotFoundException|CodePipeline.PipelineVersionNotFoundException|any>;
    /**
     * Returns information about the state of a pipeline, including the stages and
actions.
     *
     * @error ValidationException   
     * @error PipelineNotFoundException   
     */
    getPipelineState(params: CodePipeline.GetPipelineStateInput, callback?: (err: CodePipeline.ValidationException|CodePipeline.PipelineNotFoundException|any, data: CodePipeline.GetPipelineStateOutput|any) => void): Request<CodePipeline.GetPipelineStateOutput|any,CodePipeline.ValidationException|CodePipeline.PipelineNotFoundException|any>;
    /**
     * Requests the details of a job for a third party action. Only used for partner
actions.

When this API is called, AWS CodePipeline returns temporary credentials for the
Amazon S3 bucket used to store artifacts for the pipeline, if the action
requires access to that Amazon S3 bucket for input or output artifacts.
Additionally, this API returns any secret values defined for the action.
     *
     * @error JobNotFoundException   
     * @error ValidationException   
     * @error InvalidClientTokenException   
     * @error InvalidJobException   
     */
    getThirdPartyJobDetails(params: CodePipeline.GetThirdPartyJobDetailsInput, callback?: (err: CodePipeline.JobNotFoundException|CodePipeline.ValidationException|CodePipeline.InvalidClientTokenException|CodePipeline.InvalidJobException|any, data: CodePipeline.GetThirdPartyJobDetailsOutput|any) => void): Request<CodePipeline.GetThirdPartyJobDetailsOutput|any,CodePipeline.JobNotFoundException|CodePipeline.ValidationException|CodePipeline.InvalidClientTokenException|CodePipeline.InvalidJobException|any>;
    /**
     * Gets a summary of all AWS CodePipeline action types associated with your
account.
     *
     * @error ValidationException   
     * @error InvalidNextTokenException   
     */
    listActionTypes(params: CodePipeline.ListActionTypesInput, callback?: (err: CodePipeline.ValidationException|CodePipeline.InvalidNextTokenException|any, data: CodePipeline.ListActionTypesOutput|any) => void): Request<CodePipeline.ListActionTypesOutput|any,CodePipeline.ValidationException|CodePipeline.InvalidNextTokenException|any>;
    /**
     * Gets a summary of all of the pipelines associated with your account.
     *
     * @error InvalidNextTokenException   
     */
    listPipelines(params: CodePipeline.ListPipelinesInput, callback?: (err: CodePipeline.InvalidNextTokenException|any, data: CodePipeline.ListPipelinesOutput|any) => void): Request<CodePipeline.ListPipelinesOutput|any,CodePipeline.InvalidNextTokenException|any>;
    /**
     * Returns information about any jobs for AWS CodePipeline to act upon.

When this API is called, AWS CodePipeline returns temporary credentials for the
Amazon S3 bucket used to store artifacts for the pipeline, if the action
requires access to that Amazon S3 bucket for input or output artifacts.
Additionally, this API returns any secret values defined for the action.
     *
     * @error ValidationException   
     * @error ActionTypeNotFoundException   
     */
    pollForJobs(params: CodePipeline.PollForJobsInput, callback?: (err: CodePipeline.ValidationException|CodePipeline.ActionTypeNotFoundException|any, data: CodePipeline.PollForJobsOutput|any) => void): Request<CodePipeline.PollForJobsOutput|any,CodePipeline.ValidationException|CodePipeline.ActionTypeNotFoundException|any>;
    /**
     * Determines whether there are any third party jobs for a job worker to act on.
Only used for partner actions.

When this API is called, AWS CodePipeline returns temporary credentials for the
Amazon S3 bucket used to store artifacts for the pipeline, if the action
requires access to that Amazon S3 bucket for input or output artifacts.
     *
     * @error ActionTypeNotFoundException   
     * @error ValidationException   
     */
    pollForThirdPartyJobs(params: CodePipeline.PollForThirdPartyJobsInput, callback?: (err: CodePipeline.ActionTypeNotFoundException|CodePipeline.ValidationException|any, data: CodePipeline.PollForThirdPartyJobsOutput|any) => void): Request<CodePipeline.PollForThirdPartyJobsOutput|any,CodePipeline.ActionTypeNotFoundException|CodePipeline.ValidationException|any>;
    /**
     * Provides information to AWS CodePipeline about new revisions to a source.
     *
     * @error PipelineNotFoundException   
     * @error StageNotFoundException   
     * @error ActionNotFoundException   
     * @error ValidationException   
     */
    putActionRevision(params: CodePipeline.PutActionRevisionInput, callback?: (err: CodePipeline.PipelineNotFoundException|CodePipeline.StageNotFoundException|CodePipeline.ActionNotFoundException|CodePipeline.ValidationException|any, data: CodePipeline.PutActionRevisionOutput|any) => void): Request<CodePipeline.PutActionRevisionOutput|any,CodePipeline.PipelineNotFoundException|CodePipeline.StageNotFoundException|CodePipeline.ActionNotFoundException|CodePipeline.ValidationException|any>;
    /**
     * Provides the response to a manual approval request to AWS CodePipeline. Valid
responses include Approved and Rejected.
     *
     * @error InvalidApprovalTokenException   
     * @error ApprovalAlreadyCompletedException   
     * @error PipelineNotFoundException   
     * @error StageNotFoundException   
     * @error ActionNotFoundException   
     * @error ValidationException   
     */
    putApprovalResult(params: CodePipeline.PutApprovalResultInput, callback?: (err: CodePipeline.InvalidApprovalTokenException|CodePipeline.ApprovalAlreadyCompletedException|CodePipeline.PipelineNotFoundException|CodePipeline.StageNotFoundException|CodePipeline.ActionNotFoundException|CodePipeline.ValidationException|any, data: CodePipeline.PutApprovalResultOutput|any) => void): Request<CodePipeline.PutApprovalResultOutput|any,CodePipeline.InvalidApprovalTokenException|CodePipeline.ApprovalAlreadyCompletedException|CodePipeline.PipelineNotFoundException|CodePipeline.StageNotFoundException|CodePipeline.ActionNotFoundException|CodePipeline.ValidationException|any>;
    /**
     * Represents the failure of a job as returned to the pipeline by a job worker.
Only used for custom actions.
     *
     * @error ValidationException   
     * @error JobNotFoundException   
     * @error InvalidJobStateException   
     */
    putJobFailureResult(params: CodePipeline.PutJobFailureResultInput, callback?: (err: CodePipeline.ValidationException|CodePipeline.JobNotFoundException|CodePipeline.InvalidJobStateException|any, data: any) => void): Request<any,CodePipeline.ValidationException|CodePipeline.JobNotFoundException|CodePipeline.InvalidJobStateException|any>;
    /**
     * Represents the success of a job as returned to the pipeline by a job worker.
Only used for custom actions.
     *
     * @error ValidationException   
     * @error JobNotFoundException   
     * @error InvalidJobStateException   
     */
    putJobSuccessResult(params: CodePipeline.PutJobSuccessResultInput, callback?: (err: CodePipeline.ValidationException|CodePipeline.JobNotFoundException|CodePipeline.InvalidJobStateException|any, data: any) => void): Request<any,CodePipeline.ValidationException|CodePipeline.JobNotFoundException|CodePipeline.InvalidJobStateException|any>;
    /**
     * Represents the failure of a third party job as returned to the pipeline by a job
worker. Only used for partner actions.
     *
     * @error ValidationException   
     * @error JobNotFoundException   
     * @error InvalidJobStateException   
     * @error InvalidClientTokenException   
     */
    putThirdPartyJobFailureResult(params: CodePipeline.PutThirdPartyJobFailureResultInput, callback?: (err: CodePipeline.ValidationException|CodePipeline.JobNotFoundException|CodePipeline.InvalidJobStateException|CodePipeline.InvalidClientTokenException|any, data: any) => void): Request<any,CodePipeline.ValidationException|CodePipeline.JobNotFoundException|CodePipeline.InvalidJobStateException|CodePipeline.InvalidClientTokenException|any>;
    /**
     * Represents the success of a third party job as returned to the pipeline by a job
worker. Only used for partner actions.
     *
     * @error ValidationException   
     * @error JobNotFoundException   
     * @error InvalidJobStateException   
     * @error InvalidClientTokenException   
     */
    putThirdPartyJobSuccessResult(params: CodePipeline.PutThirdPartyJobSuccessResultInput, callback?: (err: CodePipeline.ValidationException|CodePipeline.JobNotFoundException|CodePipeline.InvalidJobStateException|CodePipeline.InvalidClientTokenException|any, data: any) => void): Request<any,CodePipeline.ValidationException|CodePipeline.JobNotFoundException|CodePipeline.InvalidJobStateException|CodePipeline.InvalidClientTokenException|any>;
    /**
     * Resumes the pipeline execution by retrying the last failed actions in a stage.
     *
     * @error ValidationException   
     * @error PipelineNotFoundException   
     * @error StageNotFoundException   
     * @error StageNotRetryableException   
     * @error NotLatestPipelineExecutionException   
     */
    retryStageExecution(params: CodePipeline.RetryStageExecutionInput, callback?: (err: CodePipeline.ValidationException|CodePipeline.PipelineNotFoundException|CodePipeline.StageNotFoundException|CodePipeline.StageNotRetryableException|CodePipeline.NotLatestPipelineExecutionException|any, data: CodePipeline.RetryStageExecutionOutput|any) => void): Request<CodePipeline.RetryStageExecutionOutput|any,CodePipeline.ValidationException|CodePipeline.PipelineNotFoundException|CodePipeline.StageNotFoundException|CodePipeline.StageNotRetryableException|CodePipeline.NotLatestPipelineExecutionException|any>;
    /**
     * Starts the specified pipeline. Specifically, it begins processing the latest
commit to the source location specified as part of the pipeline.
     *
     * @error ValidationException   
     * @error PipelineNotFoundException   
     */
    startPipelineExecution(params: CodePipeline.StartPipelineExecutionInput, callback?: (err: CodePipeline.ValidationException|CodePipeline.PipelineNotFoundException|any, data: CodePipeline.StartPipelineExecutionOutput|any) => void): Request<CodePipeline.StartPipelineExecutionOutput|any,CodePipeline.ValidationException|CodePipeline.PipelineNotFoundException|any>;
    /**
     * Updates a specified pipeline with edits or changes to its structure. Use a JSON
file with the pipeline structure in conjunction with UpdatePipeline to provide
the full structure of the pipeline. Updating the pipeline increases the version
number of the pipeline by 1.
     *
     * @error ValidationException   
     * @error InvalidStageDeclarationException   
     * @error InvalidActionDeclarationException   
     * @error InvalidBlockerDeclarationException   
     * @error InvalidStructureException   
     */
    updatePipeline(params: CodePipeline.UpdatePipelineInput, callback?: (err: CodePipeline.ValidationException|CodePipeline.InvalidStageDeclarationException|CodePipeline.InvalidActionDeclarationException|CodePipeline.InvalidBlockerDeclarationException|CodePipeline.InvalidStructureException|any, data: CodePipeline.UpdatePipelineOutput|any) => void): Request<CodePipeline.UpdatePipelineOutput|any,CodePipeline.ValidationException|CodePipeline.InvalidStageDeclarationException|CodePipeline.InvalidActionDeclarationException|CodePipeline.InvalidBlockerDeclarationException|CodePipeline.InvalidStructureException|any>;

  }

  export module CodePipeline {
    
    export type AccessKeyId = string;
    
    export type AccountId = string;
    
    export type ActionCategory = string;
    
    export type ActionConfigurationKey = string;
    
    export type ActionConfigurationMap = {[key:string]: ActionConfigurationValue};
    
    export type ActionConfigurationPropertyList = ActionConfigurationProperty[];
    
    export type ActionConfigurationPropertyType = string;
    
    export type ActionConfigurationQueryableValue = string;
    
    export type ActionConfigurationValue = string;
    
    export type ActionExecutionStatus = string;
    
    export type ActionExecutionToken = string;
    
    export type ActionName = string;
    
    export type ActionOwner = string;
    
    export type ActionProvider = string;
    
    export type ActionRunOrder = number;
    
    export type ActionStateList = ActionState[];
    
    export type ActionTypeList = ActionType[];
    
    export type ApprovalStatus = string;
    
    export type ApprovalSummary = string;
    
    export type ApprovalToken = string;
    
    export type ArtifactList = Artifact[];
    
    export type ArtifactLocationType = string;
    
    export type ArtifactName = string;
    
    export type ArtifactStoreLocation = string;
    
    export type ArtifactStoreType = string;
    
    export type BlockerName = string;
    
    export type BlockerType = string;
    
    export type Boolean = boolean;
    
    export type ClientId = string;
    
    export type ClientToken = string;
    
    export type Code = string;
    
    export type ContinuationToken = string;
    
    export type Description = string;
    
    export type DisabledReason = string;
    
    export type Enabled = boolean;
    
    export type EncryptionKeyId = string;
    
    export type EncryptionKeyType = string;
    
    export type ExecutionId = string;
    
    export type ExecutionSummary = string;
    
    export type FailureType = string;
    
    export type InputArtifactList = InputArtifact[];
    
    export type JobId = string;
    
    export type JobList = Job[];
    
    export type JobStatus = string;
    
    export type LastChangedAt = number;
    
    export type LastChangedBy = string;
    
    export type LastUpdatedBy = string;
    
    export type MaxBatchSize = number;
    
    export type MaximumArtifactCount = number;
    
    export type Message = string;
    
    export type MinimumArtifactCount = number;
    
    export type NextToken = string;
    
    export type Nonce = string;
    
    export type OutputArtifactList = OutputArtifact[];
    
    export type Percentage = number;
    
    export type PipelineExecutionId = string;
    
    export type PipelineList = PipelineSummary[];
    
    export type PipelineName = string;
    
    export type PipelineStageDeclarationList = StageDeclaration[];
    
    export type PipelineVersion = number;
    
    export type QueryParamMap = {[key:string]: ActionConfigurationQueryableValue};
    
    export type Revision = string;
    
    export type RevisionChangeIdentifier = string;
    
    export type RoleArn = string;
    
    export type S3BucketName = string;
    
    export type S3ObjectKey = string;
    
    export type SecretAccessKey = string;
    
    export type SessionToken = string;
    
    export type StageActionDeclarationList = ActionDeclaration[];
    
    export type StageBlockerDeclarationList = BlockerDeclaration[];
    
    export type StageExecutionStatus = string;
    
    export type StageName = string;
    
    export type StageRetryMode = string;
    
    export type StageStateList = StageState[];
    
    export type StageTransitionType = string;
    
    export type ThirdPartyJobId = string;
    
    export type ThirdPartyJobList = ThirdPartyJob[];
    
    export type Timestamp = number;
    
    export type Url = string;
    
    export type UrlTemplate = string;
    
    export type Version = string;

    export interface AWSSessionCredentials {
        /** The access key for the session. **/
        accessKeyId: AccessKeyId;
        /** The secret access key for the session. **/
        secretAccessKey: SecretAccessKey;
        /** The token for the session. **/
        sessionToken: SessionToken;
    }
    export interface AcknowledgeJobInput {
        /** The unique system-generated ID of the job for which you want to confirm receipt. **/
        jobId: JobId;
        /** A system-generated random number that AWS CodePipeline uses to ensure that the
job is being worked on by only one job worker. This number must be returned in
the response. **/
        nonce: Nonce;
    }
    export interface AcknowledgeJobOutput {
        /** Whether the job worker has received the specified job. **/
        status?: JobStatus;
    }
    export interface AcknowledgeThirdPartyJobInput {
        /** The unique system-generated ID of the job. **/
        jobId: ThirdPartyJobId;
        /** A system-generated random number that AWS CodePipeline uses to ensure that the
job is being worked on by only one job worker. This number must be returned in
the response. **/
        nonce: Nonce;
        /** The clientToken portion of the clientId and clientToken pair used to verify that
the calling entity is allowed access to the job and its details. **/
        clientToken: ClientToken;
    }
    export interface AcknowledgeThirdPartyJobOutput {
        /** The status information for the third party job, if any. **/
        status?: JobStatus;
    }
    export interface ActionConfiguration {
        /** The configuration data for the action. **/
        configuration?: ActionConfigurationMap;
    }
    export interface ActionConfigurationProperty {
        /** The name of the action configuration property. **/
        name: ActionConfigurationKey;
        /** Whether the configuration property is a required value. **/
        required: Boolean;
        /** Whether the configuration property is a key. **/
        key: Boolean;
        /** Whether the configuration property is secret. Secrets are hidden from all calls
except for GetJobDetails, GetThirdPartyJobDetails, PollForJobs, and
PollForThirdPartyJobs.

When updating a pipeline, passing &amp;#42; * * * * without changing any other values of
the action will preserve the prior value of the secret. **/
        secret: Boolean;
        /** Indicates that the proprety will be used in conjunction with PollForJobs. When
creating a custom action, an action can have up to one queryable property. If it
has one, that property must be both required and not secret.

If you create a pipeline with a custom action type, and that custom action
contains a queryable property, the value for that configuration property is
subject to additional restrictions. The value must be less than or equal to
twenty (20) characters. The value can contain only alphanumeric characters,
underscores, and hyphens. **/
        queryable?: Boolean;
        /** The description of the action configuration property that will be displayed to
users. **/
        description?: Description;
        /** The type of the configuration property. **/
        type?: ActionConfigurationPropertyType;
    }
    export interface ActionContext {
        /** The name of the action within the context of a job. **/
        name?: ActionName;
    }
    export interface ActionDeclaration {
        /** The action declaration&#x27;s name. **/
        name: ActionName;
        /** The configuration information for the action type. **/
        actionTypeId: ActionTypeId;
        /** The order in which actions are run. **/
        runOrder?: ActionRunOrder;
        /** The action declaration&#x27;s configuration. **/
        configuration?: ActionConfigurationMap;
        /** The name or ID of the result of the action declaration, such as a test or build
artifact. **/
        outputArtifacts?: OutputArtifactList;
        /** The name or ID of the artifact consumed by the action, such as a test or build
artifact. **/
        inputArtifacts?: InputArtifactList;
        /** The ARN of the IAM service role that will perform the declared action. This is
assumed through the roleArn for the pipeline. **/
        roleArn?: RoleArn;
    }
    export interface ActionExecution {
        /** The status of the action, or for a completed action, the last status of the
action. **/
        status?: ActionExecutionStatus;
        /** A summary of the run of the action. **/
        summary?: ExecutionSummary;
        /** The last status change of the action. **/
        lastStatusChange?: Timestamp;
        /** The system-generated token used to identify a unique approval request. The token
for each open approval request can be obtained using the GetPipelineState
command and is used to validate that the approval request corresponding to this
token is still valid. **/
        token?: ActionExecutionToken;
        /** The ARN of the user who last changed the pipeline. **/
        lastUpdatedBy?: LastUpdatedBy;
        /** The external ID of the run of the action. **/
        externalExecutionId?: ExecutionId;
        /** The URL of a resource external to AWS that will be used when running the action,
for example an external repository URL. **/
        externalExecutionUrl?: Url;
        /** A percentage of completeness of the action as it runs. **/
        percentComplete?: Percentage;
        /** The details of an error returned by a URL external to AWS. **/
        errorDetails?: ErrorDetails;
    }
    export interface ActionNotFoundException {
    }
    export interface ActionRevision {
        /** The system-generated unique ID that identifies the revision number of the
action. **/
        revisionId: Revision;
        /** The unique identifier of the change that set the state to this revision, for
example a deployment ID or timestamp. **/
        revisionChangeId: RevisionChangeIdentifier;
        /** The date and time when the most recent version of the action was created, in
timestamp format. **/
        created: Timestamp;
    }
    export interface ActionState {
        /** The name of the action. **/
        actionName?: ActionName;
        currentRevision?: ActionRevision;
        latestExecution?: ActionExecution;
        /** A URL link for more information about the state of the action, such as a
deployment group details page. **/
        entityUrl?: Url;
        /** A URL link for more information about the revision, such as a commit details
page. **/
        revisionUrl?: Url;
    }
    export interface ActionType {
        id: ActionTypeId;
        /** The settings for the action type. **/
        settings?: ActionTypeSettings;
        /** The configuration properties for the action type. **/
        actionConfigurationProperties?: ActionConfigurationPropertyList;
        /** The details of the input artifact for the action, such as its commit ID. **/
        inputArtifactDetails: ArtifactDetails;
        /** The details of the output artifact of the action, such as its commit ID. **/
        outputArtifactDetails: ArtifactDetails;
    }
    export interface ActionTypeId {
        /** A category defines what kind of action can be taken in the stage, and constrains
the provider type for the action. Valid categories are limited to one of the
values below. **/
        category: ActionCategory;
        /** The creator of the action being called. **/
        owner: ActionOwner;
        /** The provider of the service being called by the action. Valid providers are
determined by the action category. For example, an action in the Deploy category
type might have a provider of AWS CodeDeploy, which would be specified as
CodeDeploy. **/
        provider: ActionProvider;
        /** A string that identifies the action type. **/
        version: Version;
    }
    export interface ActionTypeNotFoundException {
    }
    export interface ActionTypeSettings {
        /** The URL of a sign-up page where users can sign up for an external service and
perform initial configuration of the action provided by that service. **/
        thirdPartyConfigurationUrl?: Url;
        /** The URL returned to the AWS CodePipeline console that provides a deep link to
the resources of the external system, such as the configuration page for an AWS
CodeDeploy deployment group. This link is provided as part of the action display
within the pipeline. **/
        entityUrlTemplate?: UrlTemplate;
        /** The URL returned to the AWS CodePipeline console that contains a link to the
top-level landing page for the external system, such as console page for AWS
CodeDeploy. This link is shown on the pipeline view page in the AWS CodePipeline
console and provides a link to the execution entity of the external action. **/
        executionUrlTemplate?: UrlTemplate;
        /** The URL returned to the AWS CodePipeline console that contains a link to the
page where customers can update or change the configuration of the external
action. **/
        revisionUrlTemplate?: UrlTemplate;
    }
    export interface ApprovalAlreadyCompletedException {
    }
    export interface ApprovalResult {
        /** The summary of the current status of the approval request. **/
        summary: ApprovalSummary;
        /** The response submitted by a reviewer assigned to an approval action request. **/
        status: ApprovalStatus;
    }
    export interface Artifact {
        /** The artifact&#x27;s name. **/
        name?: ArtifactName;
        /** The artifact&#x27;s revision ID. Depending on the type of object, this could be a
commit ID (GitHub) or a revision ID (Amazon S3). **/
        revision?: Revision;
        /** The location of an artifact. **/
        location?: ArtifactLocation;
    }
    export interface ArtifactDetails {
        /** The minimum number of artifacts allowed for the action type. **/
        minimumCount: MinimumArtifactCount;
        /** The maximum number of artifacts allowed for the action type. **/
        maximumCount: MaximumArtifactCount;
    }
    export interface ArtifactLocation {
        /** The type of artifact in the location. **/
        type?: ArtifactLocationType;
        /** The Amazon S3 bucket that contains the artifact. **/
        s3Location?: S3ArtifactLocation;
    }
    export interface ArtifactStore {
        /** The type of the artifact store, such as S3. **/
        type: ArtifactStoreType;
        /** The location for storing the artifacts for a pipeline, such as an S3 bucket or
folder. **/
        location: ArtifactStoreLocation;
        /** The encryption key used to encrypt the data in the artifact store, such as an
AWS Key Management Service (AWS KMS) key. If this is undefined, the default key
for Amazon S3 is used. **/
        encryptionKey?: EncryptionKey;
    }
    export interface BlockerDeclaration {
        /** Reserved for future use. **/
        name: BlockerName;
        /** Reserved for future use. **/
        type: BlockerType;
    }
    export interface CreateCustomActionTypeInput {
        /** The category of the custom action, such as a source action or a build action.

Although Source is listed as a valid value, it is not currently functional. This
value is reserved for future use. **/
        category: ActionCategory;
        /** The provider of the service used in the custom action, such as AWS CodeDeploy. **/
        provider: ActionProvider;
        /** The version number of the custom action. **/
        version: Version;
        settings?: ActionTypeSettings;
        /** The configuration properties for the custom action.

You can refer to a name in the configuration properties of the custom action
within the URL templates by following the format of {Config:name}, as long as
the configuration property is both required and not secret. For more
information, see Create a Custom Action for a Pipeline
[http://docs.aws.amazon.com/codepipeline/latest/userguide/how-to-create-custom-action.html] 
. **/
        configurationProperties?: ActionConfigurationPropertyList;
        inputArtifactDetails: ArtifactDetails;
        outputArtifactDetails: ArtifactDetails;
    }
    export interface CreateCustomActionTypeOutput {
        actionType: ActionType;
    }
    export interface CreatePipelineInput {
        pipeline: PipelineDeclaration;
    }
    export interface CreatePipelineOutput {
        pipeline?: PipelineDeclaration;
    }
    export interface CurrentRevision {
        /** The revision ID of the current version of an artifact. **/
        revision: Revision;
        /** The change identifier for the current revision. **/
        changeIdentifier: RevisionChangeIdentifier;
    }
    export interface DeleteCustomActionTypeInput {
        /** The category of the custom action that you want to delete, such as source or
deploy. **/
        category: ActionCategory;
        /** The provider of the service used in the custom action, such as AWS CodeDeploy. **/
        provider: ActionProvider;
        /** The version of the custom action to delete. **/
        version: Version;
    }
    export interface DeletePipelineInput {
        /** The name of the pipeline to be deleted. **/
        name: PipelineName;
    }
    export interface DisableStageTransitionInput {
        /** The name of the pipeline in which you want to disable the flow of artifacts from
one stage to another. **/
        pipelineName: PipelineName;
        /** The name of the stage where you want to disable the inbound or outbound
transition of artifacts. **/
        stageName: StageName;
        /** Specifies whether artifacts will be prevented from transitioning into the stage
and being processed by the actions in that stage (inbound), or prevented from
transitioning from the stage after they have been processed by the actions in
that stage (outbound). **/
        transitionType: StageTransitionType;
        /** The reason given to the user why a stage is disabled, such as waiting for manual
approval or manual tests. This message is displayed in the pipeline console UI. **/
        reason: DisabledReason;
    }
    export interface EnableStageTransitionInput {
        /** The name of the pipeline in which you want to enable the flow of artifacts from
one stage to another. **/
        pipelineName: PipelineName;
        /** The name of the stage where you want to enable the transition of artifacts,
either into the stage (inbound) or from that stage to the next stage (outbound). **/
        stageName: StageName;
        /** Specifies whether artifacts will be allowed to enter the stage and be processed
by the actions in that stage (inbound) or whether already-processed artifacts
will be allowed to transition to the next stage (outbound). **/
        transitionType: StageTransitionType;
    }
    export interface EncryptionKey {
        /** The ID used to identify the key. For an AWS KMS key, this is the key ID or key
ARN. **/
        id: EncryptionKeyId;
        /** The type of encryption key, such as an AWS Key Management Service (AWS KMS) key.
When creating or updating a pipeline, the value must be set to &#x27;KMS&#x27;. **/
        type: EncryptionKeyType;
    }
    export interface ErrorDetails {
        /** The system ID or error number code of the error. **/
        code?: Code;
        /** The text of the error message. **/
        message?: Message;
    }
    export interface ExecutionDetails {
        /** The summary of the current status of the actions. **/
        summary?: ExecutionSummary;
        /** The system-generated unique ID of this action used to identify this job worker
in any external systems, such as AWS CodeDeploy. **/
        externalExecutionId?: ExecutionId;
        /** The percentage of work completed on the action, represented on a scale of zero
to one hundred percent. **/
        percentComplete?: Percentage;
    }
    export interface FailureDetails {
        /** The type of the failure. **/
        type: FailureType;
        /** The message about the failure. **/
        message: Message;
        /** The external ID of the run of the action that failed. **/
        externalExecutionId?: ExecutionId;
    }
    export interface GetJobDetailsInput {
        /** The unique system-generated ID for the job. **/
        jobId: JobId;
    }
    export interface GetJobDetailsOutput {
        /** The details of the job.

If AWSSessionCredentials is used, a long-running job can call GetJobDetails
again to obtain new credentials. **/
        jobDetails?: JobDetails;
    }
    export interface GetPipelineInput {
        /** The name of the pipeline for which you want to get information. Pipeline names
must be unique under an Amazon Web Services (AWS) user account. **/
        name: PipelineName;
        /** The version number of the pipeline. If you do not specify a version, defaults to
the most current version. **/
        version?: PipelineVersion;
    }
    export interface GetPipelineOutput {
        pipeline?: PipelineDeclaration;
    }
    export interface GetPipelineStateInput {
        /** The name of the pipeline about which you want to get information. **/
        name: PipelineName;
    }
    export interface GetPipelineStateOutput {
        /** The name of the pipeline for which you want to get the state. **/
        pipelineName?: PipelineName;
        /** The version number of the pipeline.

A newly-created pipeline is always assigned a version number of 1 . **/
        pipelineVersion?: PipelineVersion;
        /** A list of the pipeline stage output information, including stage name, state,
most recent run details, whether the stage is disabled, and other data. **/
        stageStates?: StageStateList;
        /** The date and time the pipeline was created, in timestamp format. **/
        created?: Timestamp;
        /** The date and time the pipeline was last updated, in timestamp format. **/
        updated?: Timestamp;
    }
    export interface GetThirdPartyJobDetailsInput {
        /** The unique system-generated ID used for identifying the job. **/
        jobId: ThirdPartyJobId;
        /** The clientToken portion of the clientId and clientToken pair used to verify that
the calling entity is allowed access to the job and its details. **/
        clientToken: ClientToken;
    }
    export interface GetThirdPartyJobDetailsOutput {
        /** The details of the job, including any protected values defined for the job. **/
        jobDetails?: ThirdPartyJobDetails;
    }
    export interface InputArtifact {
        /** The name of the artifact to be worked on, for example, &quot;My App&quot;.

The input artifact of an action must exactly match the output artifact declared
in a preceding action, but the input artifact does not have to be the next
action in strict sequence from the action that provided the output artifact.
Actions in parallel can declare different output artifacts, which are in turn
consumed by different following actions. **/
        name: ArtifactName;
    }
    export interface InvalidActionDeclarationException {
    }
    export interface InvalidApprovalTokenException {
    }
    export interface InvalidBlockerDeclarationException {
    }
    export interface InvalidClientTokenException {
    }
    export interface InvalidJobException {
    }
    export interface InvalidJobStateException {
    }
    export interface InvalidNextTokenException {
    }
    export interface InvalidNonceException {
    }
    export interface InvalidStageDeclarationException {
    }
    export interface InvalidStructureException {
    }
    export interface Job {
        /** The unique system-generated ID of the job. **/
        id?: JobId;
        /** Additional data about a job. **/
        data?: JobData;
        /** A system-generated random number that AWS CodePipeline uses to ensure that the
job is being worked on by only one job worker. This number must be returned in
the response. **/
        nonce?: Nonce;
        /** The ID of the AWS account to use when performing the job. **/
        accountId?: AccountId;
    }
    export interface JobData {
        actionTypeId?: ActionTypeId;
        actionConfiguration?: ActionConfiguration;
        pipelineContext?: PipelineContext;
        /** The artifact supplied to the job. **/
        inputArtifacts?: ArtifactList;
        /** The output of the job. **/
        outputArtifacts?: ArtifactList;
        artifactCredentials?: AWSSessionCredentials;
        /** A system-generated token, such as a AWS CodeDeploy deployment ID, that a job
requires in order to continue the job asynchronously. **/
        continuationToken?: ContinuationToken;
        encryptionKey?: EncryptionKey;
    }
    export interface JobDetails {
        /** The unique system-generated ID of the job. **/
        id?: JobId;
        data?: JobData;
        /** The AWS account ID associated with the job. **/
        accountId?: AccountId;
    }
    export interface JobNotFoundException {
    }
    export interface LimitExceededException {
    }
    export interface ListActionTypesInput {
        /** Filters the list of action types to those created by a specified entity. **/
        actionOwnerFilter?: ActionOwner;
        /** An identifier that was returned from the previous list action types call, which
can be used to return the next set of action types in the list. **/
        nextToken?: NextToken;
    }
    export interface ListActionTypesOutput {
        /** Provides details of the action types. **/
        actionTypes: ActionTypeList;
        /** If the amount of returned information is significantly large, an identifier is
also returned which can be used in a subsequent list action types call to return
the next set of action types in the list. **/
        nextToken?: NextToken;
    }
    export interface ListPipelinesInput {
        /** An identifier that was returned from the previous list pipelines call, which can
be used to return the next set of pipelines in the list. **/
        nextToken?: NextToken;
    }
    export interface ListPipelinesOutput {
        /** The list of pipelines. **/
        pipelines?: PipelineList;
        /** If the amount of returned information is significantly large, an identifier is
also returned which can be used in a subsequent list pipelines call to return
the next set of pipelines in the list. **/
        nextToken?: NextToken;
    }
    export interface NotLatestPipelineExecutionException {
    }
    export interface OutputArtifact {
        /** The name of the output of an artifact, such as &quot;My App&quot;.

The input artifact of an action must exactly match the output artifact declared
in a preceding action, but the input artifact does not have to be the next
action in strict sequence from the action that provided the output artifact.
Actions in parallel can declare different output artifacts, which are in turn
consumed by different following actions.

Output artifact names must be unique within a pipeline. **/
        name: ArtifactName;
    }
    export interface PipelineContext {
        /** The name of the pipeline. This is a user-specified value. Pipeline names must be
unique across all pipeline names under an Amazon Web Services account. **/
        pipelineName?: PipelineName;
        /** The stage of the pipeline. **/
        stage?: StageContext;
        action?: ActionContext;
    }
    export interface PipelineDeclaration {
        /** The name of the action to be performed. **/
        name: PipelineName;
        /** The Amazon Resource Name (ARN) for AWS CodePipeline to use to either perform
actions with no actionRoleArn, or to use to assume roles for actions with an
actionRoleArn. **/
        roleArn: RoleArn;
        artifactStore: ArtifactStore;
        /** The stage in which to perform the action. **/
        stages: PipelineStageDeclarationList;
        /** The version number of the pipeline. A new pipeline always has a version number
of 1. This number is automatically incremented when a pipeline is updated. **/
        version?: PipelineVersion;
    }
    export interface PipelineNameInUseException {
    }
    export interface PipelineNotFoundException {
    }
    export interface PipelineSummary {
        /** The name of the pipeline. **/
        name?: PipelineName;
        /** The version number of the pipeline. **/
        version?: PipelineVersion;
        /** The date and time the pipeline was created, in timestamp format. **/
        created?: Timestamp;
        /** The date and time of the last update to the pipeline, in timestamp format. **/
        updated?: Timestamp;
    }
    export interface PipelineVersionNotFoundException {
    }
    export interface PollForJobsInput {
        actionTypeId: ActionTypeId;
        /** The maximum number of jobs to return in a poll for jobs call. **/
        maxBatchSize?: MaxBatchSize;
        /** A map of property names and values. For an action type with no queryable
properties, this value must be null or an empty map. For an action type with a
queryable property, you must supply that property as a key in the map. Only jobs
whose action configuration matches the mapped value will be returned. **/
        queryParam?: QueryParamMap;
    }
    export interface PollForJobsOutput {
        /** Information about the jobs to take action on. **/
        jobs?: JobList;
    }
    export interface PollForThirdPartyJobsInput {
        actionTypeId: ActionTypeId;
        /** The maximum number of jobs to return in a poll for jobs call. **/
        maxBatchSize?: MaxBatchSize;
    }
    export interface PollForThirdPartyJobsOutput {
        /** Information about the jobs to take action on. **/
        jobs?: ThirdPartyJobList;
    }
    export interface PutActionRevisionInput {
        /** The name of the pipeline that will start processing the revision to the source. **/
        pipelineName: PipelineName;
        /** The name of the stage that contains the action that will act upon the revision. **/
        stageName: StageName;
        /** The name of the action that will process the revision. **/
        actionName: ActionName;
        actionRevision: ActionRevision;
    }
    export interface PutActionRevisionOutput {
        /** The new revision number or ID for the revision after the action completes. **/
        newRevision?: Boolean;
        /** The ID of the current workflow state of the pipeline. **/
        pipelineExecutionId?: PipelineExecutionId;
    }
    export interface PutApprovalResultInput {
        /** The name of the pipeline that contains the action. **/
        pipelineName: PipelineName;
        /** The name of the stage that contains the action. **/
        stageName: StageName;
        /** The name of the action for which approval is requested. **/
        actionName: ActionName;
        /** Represents information about the result of the approval request. **/
        result: ApprovalResult;
        /** The system-generated token used to identify a unique approval request. The token
for each open approval request can be obtained using the GetPipelineState action
and is used to validate that the approval request corresponding to this token is
still valid. **/
        token?: ApprovalToken;
    }
    export interface PutApprovalResultOutput {
        /** The timestamp showing when the approval or rejection was submitted. **/
        approvedAt?: Timestamp;
    }
    export interface PutJobFailureResultInput {
        /** The unique system-generated ID of the job that failed. This is the same ID
returned from PollForJobs. **/
        jobId: JobId;
        /** The details about the failure of a job. **/
        failureDetails: FailureDetails;
    }
    export interface PutJobSuccessResultInput {
        /** The unique system-generated ID of the job that succeeded. This is the same ID
returned from PollForJobs. **/
        jobId: JobId;
        /** The ID of the current revision of the artifact successfully worked upon by the
job. **/
        currentRevision?: CurrentRevision;
        /** A token generated by a job worker, such as an AWS CodeDeploy deployment ID, that
a successful job provides to identify a custom action in progress. Future jobs
will use this token in order to identify the running instance of the action. It
can be reused to return additional information about the progress of the custom
action. When the action is complete, no continuation token should be supplied. **/
        continuationToken?: ContinuationToken;
        /** The execution details of the successful job, such as the actions taken by the
job worker. **/
        executionDetails?: ExecutionDetails;
    }
    export interface PutThirdPartyJobFailureResultInput {
        /** The ID of the job that failed. This is the same ID returned from
PollForThirdPartyJobs. **/
        jobId: ThirdPartyJobId;
        /** The clientToken portion of the clientId and clientToken pair used to verify that
the calling entity is allowed access to the job and its details. **/
        clientToken: ClientToken;
        failureDetails: FailureDetails;
    }
    export interface PutThirdPartyJobSuccessResultInput {
        /** The ID of the job that successfully completed. This is the same ID returned from
PollForThirdPartyJobs. **/
        jobId: ThirdPartyJobId;
        /** The clientToken portion of the clientId and clientToken pair used to verify that
the calling entity is allowed access to the job and its details. **/
        clientToken: ClientToken;
        currentRevision?: CurrentRevision;
        /** A token generated by a job worker, such as an AWS CodeDeploy deployment ID, that
a successful job provides to identify a partner action in progress. Future jobs
will use this token in order to identify the running instance of the action. It
can be reused to return additional information about the progress of the partner
action. When the action is complete, no continuation token should be supplied. **/
        continuationToken?: ContinuationToken;
        executionDetails?: ExecutionDetails;
    }
    export interface RetryStageExecutionInput {
        /** The name of the pipeline that contains the failed stage. **/
        pipelineName: PipelineName;
        /** The name of the failed stage to be retried. **/
        stageName: StageName;
        /** The ID of the pipeline execution in the failed stage to be retried. Use the 
GetPipelineState action to retrieve the current pipelineExecutionId of the
failed stage **/
        pipelineExecutionId: PipelineExecutionId;
        /** The scope of the retry attempt. Currently, the only supported value is
FAILED_ACTIONS. **/
        retryMode: StageRetryMode;
    }
    export interface RetryStageExecutionOutput {
        /** The ID of the current workflow execution in the failed stage. **/
        pipelineExecutionId?: PipelineExecutionId;
    }
    export interface S3ArtifactLocation {
        /** The name of the Amazon S3 bucket. **/
        bucketName: S3BucketName;
        /** The key of the object in the Amazon S3 bucket, which uniquely identifies the
object in the bucket. **/
        objectKey: S3ObjectKey;
    }
    export interface StageContext {
        /** The name of the stage. **/
        name?: StageName;
    }
    export interface StageDeclaration {
        /** The name of the stage. **/
        name: StageName;
        /** Reserved for future use. **/
        blockers?: StageBlockerDeclarationList;
        /** The actions included in a stage. **/
        actions: StageActionDeclarationList;
    }
    export interface StageExecution {
        /** The ID of the pipeline execution associated with the stage. **/
        pipelineExecutionId: PipelineExecutionId;
        /** The status of the stage, or for a completed stage, the last status of the stage. **/
        status: StageExecutionStatus;
    }
    export interface StageNotFoundException {
    }
    export interface StageNotRetryableException {
    }
    export interface StageState {
        /** The name of the stage. **/
        stageName?: StageName;
        /** The state of the inbound transition, which is either enabled or disabled. **/
        inboundTransitionState?: TransitionState;
        /** The state of the stage. **/
        actionStates?: ActionStateList;
        /** Information about the latest execution in the stage, including its ID and
status. **/
        latestExecution?: StageExecution;
    }
    export interface StartPipelineExecutionInput {
        /** The name of the pipeline to start. **/
        name: PipelineName;
    }
    export interface StartPipelineExecutionOutput {
        /** The unique system-generated ID of the pipeline that was started. **/
        pipelineExecutionId?: PipelineExecutionId;
    }
    export interface ThirdPartyJob {
        /** The clientToken portion of the clientId and clientToken pair used to verify that
the calling entity is allowed access to the job and its details. **/
        clientId?: ClientId;
        /** The identifier used to identify the job in AWS CodePipeline. **/
        jobId?: JobId;
    }
    export interface ThirdPartyJobData {
        actionTypeId?: ActionTypeId;
        actionConfiguration?: ActionConfiguration;
        pipelineContext?: PipelineContext;
        /** The name of the artifact that will be worked upon by the action, if any. This
name might be system-generated, such as &quot;MyApp&quot;, or might be defined by the user
when the action is created. The input artifact name must match the name of an
output artifact generated by an action in an earlier action or stage of the
pipeline. **/
        inputArtifacts?: ArtifactList;
        /** The name of the artifact that will be the result of the action, if any. This
name might be system-generated, such as &quot;MyBuiltApp&quot;, or might be defined by the
user when the action is created. **/
        outputArtifacts?: ArtifactList;
        artifactCredentials?: AWSSessionCredentials;
        /** A system-generated token, such as a AWS CodeDeploy deployment ID, that a job
requires in order to continue the job asynchronously. **/
        continuationToken?: ContinuationToken;
        /** The encryption key used to encrypt and decrypt data in the artifact store for
the pipeline, such as an AWS Key Management Service (AWS KMS) key. This is
optional and might not be present. **/
        encryptionKey?: EncryptionKey;
    }
    export interface ThirdPartyJobDetails {
        /** The identifier used to identify the job details in AWS CodePipeline. **/
        id?: ThirdPartyJobId;
        /** The data to be returned by the third party job worker. **/
        data?: ThirdPartyJobData;
        /** A system-generated random number that AWS CodePipeline uses to ensure that the
job is being worked on by only one job worker. This number must be returned in
the response. **/
        nonce?: Nonce;
    }
    export interface TransitionState {
        /** Whether the transition between stages is enabled (true) or disabled (false). **/
        enabled?: Enabled;
        /** The ID of the user who last changed the transition state. **/
        lastChangedBy?: LastChangedBy;
        /** The timestamp when the transition state was last changed. **/
        lastChangedAt?: LastChangedAt;
        /** The user-specified reason why the transition between two stages of a pipeline
was disabled. **/
        disabledReason?: DisabledReason;
    }
    export interface UpdatePipelineInput {
        /** The name of the pipeline to be updated. **/
        pipeline: PipelineDeclaration;
    }
    export interface UpdatePipelineOutput {
        /** The structure of the updated pipeline. **/
        pipeline?: PipelineDeclaration;
    }
    export interface ValidationException {
    }
  }
}
