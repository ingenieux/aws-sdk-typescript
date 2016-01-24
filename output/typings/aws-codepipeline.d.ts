// Type definitions for aws-sdk - AWS CodePipeline
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

///<reference path="./aws-sdk-common.d.ts" />

declare module "aws-sdk" {

    /*
     * apiVersion: 2015-07-09
     * endpointPrefix: codepipeline
     * serviceAbbreviation: CodePipeline
     * signatureVersion: v4
     * protocol: json
     */
    export class CodePipeline extends Service {
      constructor(options?: any);
      endpoint: Endpoint;
      acknowledgeJob(params: CodePipeline.AcknowledgeJobInput, callback?: (err: CodePipeline.ValidationException|CodePipeline.InvalidNonceException|CodePipeline.JobNotFoundException|any, data: CodePipeline.AcknowledgeJobOutput|any) => void): Request;
      acknowledgeThirdPartyJob(params: CodePipeline.AcknowledgeThirdPartyJobInput, callback?: (err: CodePipeline.ValidationException|CodePipeline.InvalidNonceException|CodePipeline.JobNotFoundException|CodePipeline.InvalidClientTokenException|any, data: CodePipeline.AcknowledgeThirdPartyJobOutput|any) => void): Request;
      createCustomActionType(params: CodePipeline.CreateCustomActionTypeInput, callback?: (err: CodePipeline.ValidationException|CodePipeline.LimitExceededException|any, data: CodePipeline.CreateCustomActionTypeOutput|any) => void): Request;
      createPipeline(params: CodePipeline.CreatePipelineInput, callback?: (err: CodePipeline.ValidationException|CodePipeline.PipelineNameInUseException|CodePipeline.InvalidStageDeclarationException|CodePipeline.InvalidActionDeclarationException|CodePipeline.InvalidBlockerDeclarationException|CodePipeline.InvalidStructureException|CodePipeline.LimitExceededException|any, data: CodePipeline.CreatePipelineOutput|any) => void): Request;
      deleteCustomActionType(params: CodePipeline.DeleteCustomActionTypeInput, callback?: (err: CodePipeline.ValidationException|any, data: any) => void): Request;
      deletePipeline(params: CodePipeline.DeletePipelineInput, callback?: (err: CodePipeline.ValidationException|any, data: any) => void): Request;
      disableStageTransition(params: CodePipeline.DisableStageTransitionInput, callback?: (err: CodePipeline.ValidationException|CodePipeline.PipelineNotFoundException|CodePipeline.StageNotFoundException|any, data: any) => void): Request;
      enableStageTransition(params: CodePipeline.EnableStageTransitionInput, callback?: (err: CodePipeline.ValidationException|CodePipeline.PipelineNotFoundException|CodePipeline.StageNotFoundException|any, data: any) => void): Request;
      getJobDetails(params: CodePipeline.GetJobDetailsInput, callback?: (err: CodePipeline.ValidationException|CodePipeline.JobNotFoundException|any, data: CodePipeline.GetJobDetailsOutput|any) => void): Request;
      getPipeline(params: CodePipeline.GetPipelineInput, callback?: (err: CodePipeline.ValidationException|CodePipeline.PipelineNotFoundException|CodePipeline.PipelineVersionNotFoundException|any, data: CodePipeline.GetPipelineOutput|any) => void): Request;
      getPipelineState(params: CodePipeline.GetPipelineStateInput, callback?: (err: CodePipeline.ValidationException|CodePipeline.PipelineNotFoundException|any, data: CodePipeline.GetPipelineStateOutput|any) => void): Request;
      getThirdPartyJobDetails(params: CodePipeline.GetThirdPartyJobDetailsInput, callback?: (err: CodePipeline.JobNotFoundException|CodePipeline.ValidationException|CodePipeline.InvalidClientTokenException|CodePipeline.InvalidJobException|any, data: CodePipeline.GetThirdPartyJobDetailsOutput|any) => void): Request;
      listActionTypes(params: CodePipeline.ListActionTypesInput, callback?: (err: CodePipeline.ValidationException|CodePipeline.InvalidNextTokenException|any, data: CodePipeline.ListActionTypesOutput|any) => void): Request;
      listPipelines(params: CodePipeline.ListPipelinesInput, callback?: (err: CodePipeline.InvalidNextTokenException|any, data: CodePipeline.ListPipelinesOutput|any) => void): Request;
      pollForJobs(params: CodePipeline.PollForJobsInput, callback?: (err: CodePipeline.ValidationException|CodePipeline.ActionTypeNotFoundException|any, data: CodePipeline.PollForJobsOutput|any) => void): Request;
      pollForThirdPartyJobs(params: CodePipeline.PollForThirdPartyJobsInput, callback?: (err: CodePipeline.ActionTypeNotFoundException|CodePipeline.ValidationException|any, data: CodePipeline.PollForThirdPartyJobsOutput|any) => void): Request;
      putActionRevision(params: CodePipeline.PutActionRevisionInput, callback?: (err: CodePipeline.PipelineNotFoundException|CodePipeline.StageNotFoundException|CodePipeline.ActionNotFoundException|CodePipeline.ValidationException|any, data: CodePipeline.PutActionRevisionOutput|any) => void): Request;
      putJobFailureResult(params: CodePipeline.PutJobFailureResultInput, callback?: (err: CodePipeline.ValidationException|CodePipeline.JobNotFoundException|CodePipeline.InvalidJobStateException|any, data: any) => void): Request;
      putJobSuccessResult(params: CodePipeline.PutJobSuccessResultInput, callback?: (err: CodePipeline.ValidationException|CodePipeline.JobNotFoundException|CodePipeline.InvalidJobStateException|any, data: any) => void): Request;
      putThirdPartyJobFailureResult(params: CodePipeline.PutThirdPartyJobFailureResultInput, callback?: (err: CodePipeline.ValidationException|CodePipeline.JobNotFoundException|CodePipeline.InvalidJobStateException|CodePipeline.InvalidClientTokenException|any, data: any) => void): Request;
      putThirdPartyJobSuccessResult(params: CodePipeline.PutThirdPartyJobSuccessResultInput, callback?: (err: CodePipeline.ValidationException|CodePipeline.JobNotFoundException|CodePipeline.InvalidJobStateException|CodePipeline.InvalidClientTokenException|any, data: any) => void): Request;
      startPipelineExecution(params: CodePipeline.StartPipelineExecutionInput, callback?: (err: CodePipeline.ValidationException|CodePipeline.PipelineNotFoundException|any, data: CodePipeline.StartPipelineExecutionOutput|any) => void): Request;
      updatePipeline(params: CodePipeline.UpdatePipelineInput, callback?: (err: CodePipeline.ValidationException|CodePipeline.InvalidStageDeclarationException|CodePipeline.InvalidActionDeclarationException|CodePipeline.InvalidBlockerDeclarationException|CodePipeline.InvalidStructureException|any, data: CodePipeline.UpdatePipelineOutput|any) => void): Request;

    }

    export module CodePipeline {
        export type AccessKeyId = string;
        export type AccountId = string;    // pattern: &quot;[0-9]{12}&quot;
        export type ActionCategory = string;
        export type ActionConfigurationKey = string;    // max: 50, min: 1
        export type ActionConfigurationMap = {[key:string]: ActionConfigurationValue};
        export type ActionConfigurationPropertyList = ActionConfigurationProperty[];    // max: 10
        export type ActionConfigurationPropertyType = string;
        export type ActionConfigurationQueryableValue = string;    // pattern: &quot;[a-zA-Z0-9_-]+&quot;, max: 20, min: 1
        export type ActionConfigurationValue = string;    // max: 250, min: 1
        export type ActionExecutionStatus = string;
        export type ActionName = string;    // pattern: &quot;[A-Za-z0-9.@\-_]+&quot;, max: 100, min: 1
        export type ActionOwner = string;
        export type ActionProvider = string;    // pattern: &quot;[0-9A-Za-z_-]+&quot;, max: 25, min: 1
        export type ActionRunOrder = number;    // max: 999, min: 1
        export type ActionStateList = ActionState[];
        export type ActionTypeList = ActionType[];
        export type ArtifactList = Artifact[];
        export type ArtifactLocationType = string;
        export type ArtifactName = string;    // pattern: &quot;[a-zA-Z0-9_\-]+&quot;, max: 100, min: 1
        export type ArtifactStoreLocation = string;    // pattern: &quot;[a-zA-Z0-9\-\.]+&quot;, max: 63, min: 3
        export type ArtifactStoreType = string;
        export type BlockerName = string;    // max: 100, min: 1
        export type BlockerType = string;
        export type Boolean = boolean;
        export type ClientId = string;    // pattern: &quot;[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}&quot;
        export type ClientToken = string;
        export type Code = string;
        export type ContinuationToken = string;
        export type Description = string;    // max: 2048, min: 1
        export type DisabledReason = string;    // pattern: &quot;[a-zA-Z0-9!@ \(\)\.\*\?\-]+&quot;, max: 300, min: 1
        export type Enabled = boolean;
        export type EncryptionKeyId = string;    // max: 100, min: 1
        export type EncryptionKeyType = string;
        export type ExecutionId = string;
        export type ExecutionSummary = string;
        export type FailureType = string;
        export type InputArtifactList = InputArtifact[];
        export type JobId = string;    // pattern: &quot;[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}&quot;
        export type JobList = Job[];
        export type JobStatus = string;
        export type LastChangedAt = number;
        export type LastChangedBy = string;
        export type MaxBatchSize = number;    // min: 1
        export type MaximumArtifactCount = number;    // max: 5
        export type Message = string;
        export type MinimumArtifactCount = number;    // max: 5
        export type NextToken = string;
        export type Nonce = string;
        export type OutputArtifactList = OutputArtifact[];
        export type Percentage = number;    // max: 100
        export type PipelineExecutionId = string;    // pattern: &quot;[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}&quot;
        export type PipelineList = PipelineSummary[];
        export type PipelineName = string;    // pattern: &quot;[A-Za-z0-9.@\-_]+&quot;, max: 100, min: 1
        export type PipelineStageDeclarationList = StageDeclaration[];
        export type PipelineVersion = number;    // min: 1
        export type QueryParamMap = {[key:string]: ActionConfigurationQueryableValue};    // max: 1
        export type Revision = string;
        export type RevisionChangeId = string;
        export type RevisionChangeIdentifier = string;
        export type RevisionId = string;
        export type RoleArn = string;    // pattern: &quot;arn:[^:]+:iam::[0-9]{12}:role/.*&quot;
        export type S3BucketName = string;
        export type S3ObjectKey = string;
        export type SecretAccessKey = string;
        export type SessionToken = string;
        export type StageActionDeclarationList = ActionDeclaration[];
        export type StageBlockerDeclarationList = BlockerDeclaration[];
        export type StageName = string;    // pattern: &quot;[A-Za-z0-9.@\-_]+&quot;, max: 100, min: 1
        export type StageStateList = StageState[];
        export type StageTransitionType = string;
        export type ThirdPartyJobId = string;    // max: 512, min: 1
        export type ThirdPartyJobList = ThirdPartyJob[];
        export type Timestamp = number;
        export type Url = string;    // max: 2048, min: 1
        export type UrlTemplate = string;    // max: 2048, min: 1
        export type Version = string;    // pattern: &quot;[0-9A-Za-z_-]+&quot;, max: 9, min: 1

        export interface AWSSessionCredentials {
            accessKeyId: AccessKeyId;
            secretAccessKey: SecretAccessKey;
            sessionToken: SessionToken;
        }
        export interface AcknowledgeJobInput {
            jobId: JobId;
            nonce: Nonce;
        }
        export interface AcknowledgeJobOutput {
            status?: JobStatus;
        }
        export interface AcknowledgeThirdPartyJobInput {
            jobId: ThirdPartyJobId;
            nonce: Nonce;
            clientToken: ClientToken;
        }
        export interface AcknowledgeThirdPartyJobOutput {
            status?: JobStatus;
        }
        export interface ActionConfiguration {
            configuration?: ActionConfigurationMap;
        }
        export interface ActionConfigurationProperty {
            name: ActionConfigurationKey;
            required: Boolean;
            key: Boolean;
            secret: Boolean;
            queryable?: Boolean;
            description?: Description;
            type?: ActionConfigurationPropertyType;
        }
        export interface ActionContext {
            name?: ActionName;
        }
        export interface ActionDeclaration {
            name: ActionName;
            actionTypeId: ActionTypeId;
            runOrder?: ActionRunOrder;
            configuration?: ActionConfigurationMap;
            outputArtifacts?: OutputArtifactList;
            inputArtifacts?: InputArtifactList;
            roleArn?: RoleArn;
        }
        export interface ActionExecution {
            status?: ActionExecutionStatus;
            summary?: ExecutionSummary;
            lastStatusChange?: Timestamp;
            externalExecutionId?: ExecutionId;
            externalExecutionUrl?: Url;
            percentComplete?: Percentage;
            errorDetails?: ErrorDetails;
        }
        export interface ActionNotFoundException {
        }
        export interface ActionRevision {
            revisionId: RevisionId;
            revisionChangeId?: RevisionChangeId;
            created: Timestamp;
        }
        export interface ActionState {
            actionName?: ActionName;
            currentRevision?: ActionRevision;
            latestExecution?: ActionExecution;
            entityUrl?: Url;
            revisionUrl?: Url;
        }
        export interface ActionType {
            id: ActionTypeId;
            settings?: ActionTypeSettings;
            actionConfigurationProperties?: ActionConfigurationPropertyList;
            inputArtifactDetails: ArtifactDetails;
            outputArtifactDetails: ArtifactDetails;
        }
        export interface ActionTypeId {
            category: ActionCategory;
            owner: ActionOwner;
            provider: ActionProvider;
            version: Version;
        }
        export interface ActionTypeNotFoundException {
        }
        export interface ActionTypeSettings {
            thirdPartyConfigurationUrl?: Url;
            entityUrlTemplate?: UrlTemplate;
            executionUrlTemplate?: UrlTemplate;
            revisionUrlTemplate?: UrlTemplate;
        }
        export interface Artifact {
            name?: ArtifactName;
            revision?: Revision;
            location?: ArtifactLocation;
        }
        export interface ArtifactDetails {
            minimumCount: MinimumArtifactCount;
            maximumCount: MaximumArtifactCount;
        }
        export interface ArtifactLocation {
            type?: ArtifactLocationType;
            s3Location?: S3ArtifactLocation;
        }
        export interface ArtifactStore {
            type: ArtifactStoreType;
            location: ArtifactStoreLocation;
            encryptionKey?: EncryptionKey;
        }
        export interface BlockerDeclaration {
            name: BlockerName;
            type: BlockerType;
        }
        export interface CreateCustomActionTypeInput {
            category: ActionCategory;
            provider: ActionProvider;
            version: Version;
            settings?: ActionTypeSettings;
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
            revision: Revision;
            changeIdentifier: RevisionChangeIdentifier;
        }
        export interface DeleteCustomActionTypeInput {
            category: ActionCategory;
            provider: ActionProvider;
            version: Version;
        }
        export interface DeletePipelineInput {
            name: PipelineName;
        }
        export interface DisableStageTransitionInput {
            pipelineName: PipelineName;
            stageName: StageName;
            transitionType: StageTransitionType;
            reason: DisabledReason;
        }
        export interface EnableStageTransitionInput {
            pipelineName: PipelineName;
            stageName: StageName;
            transitionType: StageTransitionType;
        }
        export interface EncryptionKey {
            id: EncryptionKeyId;
            type: EncryptionKeyType;
        }
        export interface ErrorDetails {
            code?: Code;
            message?: Message;
        }
        export interface ExecutionDetails {
            summary?: ExecutionSummary;
            externalExecutionId?: ExecutionId;
            percentComplete?: Percentage;
        }
        export interface FailureDetails {
            type: FailureType;
            message: Message;
            externalExecutionId?: ExecutionId;
        }
        export interface GetJobDetailsInput {
            jobId: JobId;
        }
        export interface GetJobDetailsOutput {
            jobDetails?: JobDetails;
        }
        export interface GetPipelineInput {
            name: PipelineName;
            version?: PipelineVersion;
        }
        export interface GetPipelineOutput {
            pipeline?: PipelineDeclaration;
        }
        export interface GetPipelineStateInput {
            name: PipelineName;
        }
        export interface GetPipelineStateOutput {
            pipelineName?: PipelineName;
            pipelineVersion?: PipelineVersion;
            stageStates?: StageStateList;
            created?: Timestamp;
            updated?: Timestamp;
        }
        export interface GetThirdPartyJobDetailsInput {
            jobId: ThirdPartyJobId;
            clientToken: ClientToken;
        }
        export interface GetThirdPartyJobDetailsOutput {
            jobDetails?: ThirdPartyJobDetails;
        }
        export interface InputArtifact {
            name: ArtifactName;
        }
        export interface InvalidActionDeclarationException {
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
            id?: JobId;
            data?: JobData;
            nonce?: Nonce;
            accountId?: AccountId;
        }
        export interface JobData {
            actionTypeId?: ActionTypeId;
            actionConfiguration?: ActionConfiguration;
            pipelineContext?: PipelineContext;
            inputArtifacts?: ArtifactList;
            outputArtifacts?: ArtifactList;
            artifactCredentials?: AWSSessionCredentials;
            continuationToken?: ContinuationToken;
            encryptionKey?: EncryptionKey;
        }
        export interface JobDetails {
            id?: JobId;
            data?: JobData;
            accountId?: AccountId;
        }
        export interface JobNotFoundException {
        }
        export interface LimitExceededException {
        }
        export interface ListActionTypesInput {
            actionOwnerFilter?: ActionOwner;
            nextToken?: NextToken;
        }
        export interface ListActionTypesOutput {
            actionTypes: ActionTypeList;
            nextToken?: NextToken;
        }
        export interface ListPipelinesInput {
            nextToken?: NextToken;
        }
        export interface ListPipelinesOutput {
            pipelines?: PipelineList;
            nextToken?: NextToken;
        }
        export interface OutputArtifact {
            name: ArtifactName;
        }
        export interface PipelineContext {
            pipelineName?: PipelineName;
            stage?: StageContext;
            action?: ActionContext;
        }
        export interface PipelineDeclaration {
            name: PipelineName;
            roleArn: RoleArn;
            artifactStore: ArtifactStore;
            stages: PipelineStageDeclarationList;
            version?: PipelineVersion;
        }
        export interface PipelineNameInUseException {
        }
        export interface PipelineNotFoundException {
        }
        export interface PipelineSummary {
            name?: PipelineName;
            version?: PipelineVersion;
            created?: Timestamp;
            updated?: Timestamp;
        }
        export interface PipelineVersionNotFoundException {
        }
        export interface PollForJobsInput {
            actionTypeId: ActionTypeId;
            maxBatchSize?: MaxBatchSize;
            queryParam?: QueryParamMap;
        }
        export interface PollForJobsOutput {
            jobs?: JobList;
        }
        export interface PollForThirdPartyJobsInput {
            actionTypeId: ActionTypeId;
            maxBatchSize?: MaxBatchSize;
        }
        export interface PollForThirdPartyJobsOutput {
            jobs?: ThirdPartyJobList;
        }
        export interface PutActionRevisionInput {
            pipelineName: PipelineName;
            stageName: StageName;
            actionName: ActionName;
            actionRevision: ActionRevision;
        }
        export interface PutActionRevisionOutput {
            newRevision?: Boolean;
            pipelineExecutionId?: PipelineExecutionId;
        }
        export interface PutJobFailureResultInput {
            jobId: JobId;
            failureDetails: FailureDetails;
        }
        export interface PutJobSuccessResultInput {
            jobId: JobId;
            currentRevision?: CurrentRevision;
            continuationToken?: ContinuationToken;
            executionDetails?: ExecutionDetails;
        }
        export interface PutThirdPartyJobFailureResultInput {
            jobId: ThirdPartyJobId;
            clientToken: ClientToken;
            failureDetails: FailureDetails;
        }
        export interface PutThirdPartyJobSuccessResultInput {
            jobId: ThirdPartyJobId;
            clientToken: ClientToken;
            currentRevision?: CurrentRevision;
            continuationToken?: ContinuationToken;
            executionDetails?: ExecutionDetails;
        }
        export interface S3ArtifactLocation {
            bucketName: S3BucketName;
            objectKey: S3ObjectKey;
        }
        export interface StageContext {
            name?: StageName;
        }
        export interface StageDeclaration {
            name: StageName;
            blockers?: StageBlockerDeclarationList;
            actions: StageActionDeclarationList;
        }
        export interface StageNotFoundException {
        }
        export interface StageState {
            stageName?: StageName;
            inboundTransitionState?: TransitionState;
            actionStates?: ActionStateList;
        }
        export interface StartPipelineExecutionInput {
            name: PipelineName;
        }
        export interface StartPipelineExecutionOutput {
            pipelineExecutionId?: PipelineExecutionId;
        }
        export interface ThirdPartyJob {
            clientId?: ClientId;
            jobId?: JobId;
        }
        export interface ThirdPartyJobData {
            actionTypeId?: ActionTypeId;
            actionConfiguration?: ActionConfiguration;
            pipelineContext?: PipelineContext;
            inputArtifacts?: ArtifactList;
            outputArtifacts?: ArtifactList;
            artifactCredentials?: AWSSessionCredentials;
            continuationToken?: ContinuationToken;
            encryptionKey?: EncryptionKey;
        }
        export interface ThirdPartyJobDetails {
            id?: ThirdPartyJobId;
            data?: ThirdPartyJobData;
            nonce?: Nonce;
        }
        export interface TransitionState {
            enabled?: Enabled;
            lastChangedBy?: LastChangedBy;
            lastChangedAt?: LastChangedAt;
            disabledReason?: DisabledReason;
        }
        export interface UpdatePipelineInput {
            pipeline: PipelineDeclaration;
        }
        export interface UpdatePipelineOutput {
            pipeline?: PipelineDeclaration;
        }
        export interface ValidationException {
        }

    }
}
