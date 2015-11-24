// DO NOT EDIT!
//

///<reference path="./aws-sdk-common.d.ts" />
declare module "aws-sdk" {
    export class CodePipeline {
      constructor(options?: any);
      acknowledgeJob(params: CodePipelineAcknowledgeJobInput, callback: (err: CodePipelineValidationException|CodePipelineInvalidNonceException|CodePipelineJobNotFoundException|any, data: CodePipelineAcknowledgeJobOutput|any) => void): void;
      acknowledgeThirdPartyJob(params: CodePipelineAcknowledgeThirdPartyJobInput, callback: (err: CodePipelineValidationException|CodePipelineInvalidNonceException|CodePipelineJobNotFoundException|CodePipelineInvalidClientTokenException|any, data: CodePipelineAcknowledgeThirdPartyJobOutput|any) => void): void;
      createCustomActionType(params: CodePipelineCreateCustomActionTypeInput, callback: (err: CodePipelineValidationException|CodePipelineLimitExceededException|any, data: CodePipelineCreateCustomActionTypeOutput|any) => void): void;
      createPipeline(params: CodePipelineCreatePipelineInput, callback: (err: CodePipelineValidationException|CodePipelinePipelineNameInUseException|CodePipelineInvalidStageDeclarationException|CodePipelineInvalidActionDeclarationException|CodePipelineInvalidBlockerDeclarationException|CodePipelineInvalidStructureException|CodePipelineLimitExceededException|any, data: CodePipelineCreatePipelineOutput|any) => void): void;
      deleteCustomActionType(params: CodePipelineDeleteCustomActionTypeInput, callback: (err: CodePipelineValidationException|any, data: any) => void): void;
      deletePipeline(params: CodePipelineDeletePipelineInput, callback: (err: CodePipelineValidationException|any, data: any) => void): void;
      disableStageTransition(params: CodePipelineDisableStageTransitionInput, callback: (err: CodePipelineValidationException|CodePipelinePipelineNotFoundException|CodePipelineStageNotFoundException|any, data: any) => void): void;
      enableStageTransition(params: CodePipelineEnableStageTransitionInput, callback: (err: CodePipelineValidationException|CodePipelinePipelineNotFoundException|CodePipelineStageNotFoundException|any, data: any) => void): void;
      getJobDetails(params: CodePipelineGetJobDetailsInput, callback: (err: CodePipelineValidationException|CodePipelineJobNotFoundException|any, data: CodePipelineGetJobDetailsOutput|any) => void): void;
      getPipeline(params: CodePipelineGetPipelineInput, callback: (err: CodePipelineValidationException|CodePipelinePipelineNotFoundException|CodePipelinePipelineVersionNotFoundException|any, data: CodePipelineGetPipelineOutput|any) => void): void;
      getPipelineState(params: CodePipelineGetPipelineStateInput, callback: (err: CodePipelineValidationException|CodePipelinePipelineNotFoundException|any, data: CodePipelineGetPipelineStateOutput|any) => void): void;
      getThirdPartyJobDetails(params: CodePipelineGetThirdPartyJobDetailsInput, callback: (err: CodePipelineJobNotFoundException|CodePipelineValidationException|CodePipelineInvalidClientTokenException|CodePipelineInvalidJobException|any, data: CodePipelineGetThirdPartyJobDetailsOutput|any) => void): void;
      listActionTypes(params: CodePipelineListActionTypesInput, callback: (err: CodePipelineValidationException|CodePipelineInvalidNextTokenException|any, data: CodePipelineListActionTypesOutput|any) => void): void;
      listPipelines(params: CodePipelineListPipelinesInput, callback: (err: CodePipelineInvalidNextTokenException|any, data: CodePipelineListPipelinesOutput|any) => void): void;
      pollForJobs(params: CodePipelinePollForJobsInput, callback: (err: CodePipelineValidationException|CodePipelineActionTypeNotFoundException|any, data: CodePipelinePollForJobsOutput|any) => void): void;
      pollForThirdPartyJobs(params: CodePipelinePollForThirdPartyJobsInput, callback: (err: CodePipelineActionTypeNotFoundException|CodePipelineValidationException|any, data: CodePipelinePollForThirdPartyJobsOutput|any) => void): void;
      putActionRevision(params: CodePipelinePutActionRevisionInput, callback: (err: CodePipelinePipelineNotFoundException|CodePipelineStageNotFoundException|CodePipelineActionNotFoundException|CodePipelineValidationException|any, data: CodePipelinePutActionRevisionOutput|any) => void): void;
      putJobFailureResult(params: CodePipelinePutJobFailureResultInput, callback: (err: CodePipelineValidationException|CodePipelineJobNotFoundException|CodePipelineInvalidJobStateException|any, data: any) => void): void;
      putJobSuccessResult(params: CodePipelinePutJobSuccessResultInput, callback: (err: CodePipelineValidationException|CodePipelineJobNotFoundException|CodePipelineInvalidJobStateException|any, data: any) => void): void;
      putThirdPartyJobFailureResult(params: CodePipelinePutThirdPartyJobFailureResultInput, callback: (err: CodePipelineValidationException|CodePipelineJobNotFoundException|CodePipelineInvalidJobStateException|CodePipelineInvalidClientTokenException|any, data: any) => void): void;
      putThirdPartyJobSuccessResult(params: CodePipelinePutThirdPartyJobSuccessResultInput, callback: (err: CodePipelineValidationException|CodePipelineJobNotFoundException|CodePipelineInvalidJobStateException|CodePipelineInvalidClientTokenException|any, data: any) => void): void;
      startPipelineExecution(params: CodePipelineStartPipelineExecutionInput, callback: (err: CodePipelineValidationException|CodePipelinePipelineNotFoundException|any, data: CodePipelineStartPipelineExecutionOutput|any) => void): void;
      updatePipeline(params: CodePipelineUpdatePipelineInput, callback: (err: CodePipelineValidationException|CodePipelineInvalidStageDeclarationException|CodePipelineInvalidActionDeclarationException|CodePipelineInvalidBlockerDeclarationException|CodePipelineInvalidStructureException|any, data: CodePipelineUpdatePipelineOutput|any) => void): void;
    }

    export interface CodePipelineAWSSessionCredentials {
        accessKeyId: CodePipelineAccessKeyId;
        secretAccessKey: CodePipelineSecretAccessKey;
        sessionToken: CodePipelineSessionToken;
    }

    export type CodePipelineAccessKeyId = string;
    export type CodePipelineAccountId = string; // pattern: "[0-9]{12}"
    export interface CodePipelineAcknowledgeJobInput {
        jobId: CodePipelineJobId;
        nonce: CodePipelineNonce;
    }

    export interface CodePipelineAcknowledgeJobOutput {
        status?: CodePipelineJobStatus;
    }

    export interface CodePipelineAcknowledgeThirdPartyJobInput {
        jobId: CodePipelineThirdPartyJobId;
        nonce: CodePipelineNonce;
        clientToken: CodePipelineClientToken;
    }

    export interface CodePipelineAcknowledgeThirdPartyJobOutput {
        status?: CodePipelineJobStatus;
    }

    export type CodePipelineActionCategory = string;
    export interface CodePipelineActionConfiguration {
        configuration?: CodePipelineActionConfigurationMap;
    }

    export type CodePipelineActionConfigurationKey = string;
    export type CodePipelineActionConfigurationMap = any; // not really - it was 'map' instead - must fix this one
    export interface CodePipelineActionConfigurationProperty {
        name: CodePipelineActionConfigurationKey;
        required: CodePipelineBoolean;
        key: CodePipelineBoolean;
        secret: CodePipelineBoolean;
        queryable?: CodePipelineBoolean;
        description?: CodePipelineDescription;
        type?: CodePipelineActionConfigurationPropertyType;
    }

    export type CodePipelineActionConfigurationPropertyList = Array<CodePipelineActionConfigurationProperty>; // max: 10
    export type CodePipelineActionConfigurationPropertyType = string;
    export type CodePipelineActionConfigurationQueryableValue = string; // pattern: "[a-zA-Z0-9_-]+"
    export type CodePipelineActionConfigurationValue = string;
    export interface CodePipelineActionContext {
        name?: CodePipelineActionName;
    }

    export interface CodePipelineActionDeclaration {
        name: CodePipelineActionName;
        actionTypeId: CodePipelineActionTypeId;
        runOrder?: CodePipelineActionRunOrder;
        configuration?: CodePipelineActionConfigurationMap;
        outputArtifacts?: CodePipelineOutputArtifactList;
        inputArtifacts?: CodePipelineInputArtifactList;
        roleArn?: CodePipelineRoleArn;
    }

    export interface CodePipelineActionExecution {
        status?: CodePipelineActionExecutionStatus;
        summary?: CodePipelineExecutionSummary;
        lastStatusChange?: CodePipelineTimestamp;
        externalExecutionId?: CodePipelineExecutionId;
        externalExecutionUrl?: CodePipelineUrl;
        percentComplete?: CodePipelinePercentage;
        errorDetails?: CodePipelineErrorDetails;
    }

    export type CodePipelineActionExecutionStatus = string;
    export type CodePipelineActionName = string; // pattern: "[A-Za-z0-9.@\-_]+"
    export interface CodePipelineActionNotFoundException {
    }

    export type CodePipelineActionOwner = string;
    export type CodePipelineActionProvider = string; // pattern: "[0-9A-Za-z_-]+"
    export interface CodePipelineActionRevision {
        revisionId: CodePipelineRevisionId;
        revisionChangeId?: CodePipelineRevisionChangeId;
        created: CodePipelineTimestamp;
    }

    export type CodePipelineActionRunOrder = number;
    export interface CodePipelineActionState {
        actionName?: CodePipelineActionName;
        currentRevision?: CodePipelineActionRevision;
        latestExecution?: CodePipelineActionExecution;
        entityUrl?: CodePipelineUrl;
        revisionUrl?: CodePipelineUrl;
    }

    export type CodePipelineActionStateList = Array<CodePipelineActionState>;
    export interface CodePipelineActionType {
        id: CodePipelineActionTypeId;
        settings?: CodePipelineActionTypeSettings;
        actionConfigurationProperties?: CodePipelineActionConfigurationPropertyList;
        inputArtifactDetails: CodePipelineArtifactDetails;
        outputArtifactDetails: CodePipelineArtifactDetails;
    }

    export interface CodePipelineActionTypeId {
        category: CodePipelineActionCategory;
        owner: CodePipelineActionOwner;
        provider: CodePipelineActionProvider;
        version: CodePipelineVersion;
    }

    export type CodePipelineActionTypeList = Array<CodePipelineActionType>;
    export interface CodePipelineActionTypeNotFoundException {
    }

    export interface CodePipelineActionTypeSettings {
        thirdPartyConfigurationUrl?: CodePipelineUrl;
        entityUrlTemplate?: CodePipelineUrlTemplate;
        executionUrlTemplate?: CodePipelineUrlTemplate;
        revisionUrlTemplate?: CodePipelineUrlTemplate;
    }

    export interface CodePipelineArtifact {
        name?: CodePipelineArtifactName;
        revision?: CodePipelineRevision;
        location?: CodePipelineArtifactLocation;
    }

    export interface CodePipelineArtifactDetails {
        minimumCount: CodePipelineMinimumArtifactCount;
        maximumCount: CodePipelineMaximumArtifactCount;
    }

    export type CodePipelineArtifactList = Array<CodePipelineArtifact>;
    export interface CodePipelineArtifactLocation {
        type?: CodePipelineArtifactLocationType;
        s3Location?: CodePipelineS3ArtifactLocation;
    }

    export type CodePipelineArtifactLocationType = string;
    export type CodePipelineArtifactName = string; // pattern: "[a-zA-Z0-9_\-]+"
    export interface CodePipelineArtifactStore {
        type: CodePipelineArtifactStoreType;
        location: CodePipelineArtifactStoreLocation;
        encryptionKey?: CodePipelineEncryptionKey;
    }

    export type CodePipelineArtifactStoreLocation = string; // pattern: "[a-zA-Z0-9\-\.]+"
    export type CodePipelineArtifactStoreType = string;
    export interface CodePipelineBlockerDeclaration {
        name: CodePipelineBlockerName;
        type: CodePipelineBlockerType;
    }

    export type CodePipelineBlockerName = string;
    export type CodePipelineBlockerType = string;
    export type CodePipelineBoolean = boolean;
    export type CodePipelineClientId = string; // pattern: "[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"
    export type CodePipelineClientToken = string;
    export type CodePipelineCode = string;
    export type CodePipelineContinuationToken = string;
    export interface CodePipelineCreateCustomActionTypeInput {
        category: CodePipelineActionCategory;
        provider: CodePipelineActionProvider;
        version: CodePipelineVersion;
        settings?: CodePipelineActionTypeSettings;
        configurationProperties?: CodePipelineActionConfigurationPropertyList;
        inputArtifactDetails: CodePipelineArtifactDetails;
        outputArtifactDetails: CodePipelineArtifactDetails;
    }

    export interface CodePipelineCreateCustomActionTypeOutput {
        actionType: CodePipelineActionType;
    }

    export interface CodePipelineCreatePipelineInput {
        pipeline: CodePipelinePipelineDeclaration;
    }

    export interface CodePipelineCreatePipelineOutput {
        pipeline?: CodePipelinePipelineDeclaration;
    }

    export interface CodePipelineCurrentRevision {
        revision: CodePipelineRevision;
        changeIdentifier: CodePipelineRevisionChangeIdentifier;
    }

    export interface CodePipelineDeleteCustomActionTypeInput {
        category: CodePipelineActionCategory;
        provider: CodePipelineActionProvider;
        version: CodePipelineVersion;
    }

    export interface CodePipelineDeletePipelineInput {
        name: CodePipelinePipelineName;
    }

    export type CodePipelineDescription = string;
    export interface CodePipelineDisableStageTransitionInput {
        pipelineName: CodePipelinePipelineName;
        stageName: CodePipelineStageName;
        transitionType: CodePipelineStageTransitionType;
        reason: CodePipelineDisabledReason;
    }

    export type CodePipelineDisabledReason = string; // pattern: "[a-zA-Z0-9!@ \(\)\.\*\?\-]+"
    export interface CodePipelineEnableStageTransitionInput {
        pipelineName: CodePipelinePipelineName;
        stageName: CodePipelineStageName;
        transitionType: CodePipelineStageTransitionType;
    }

    export type CodePipelineEnabled = boolean;
    export interface CodePipelineEncryptionKey {
        id: CodePipelineEncryptionKeyId;
        type: CodePipelineEncryptionKeyType;
    }

    export type CodePipelineEncryptionKeyId = string;
    export type CodePipelineEncryptionKeyType = string;
    export interface CodePipelineErrorDetails {
        code?: CodePipelineCode;
        message?: CodePipelineMessage;
    }

    export interface CodePipelineExecutionDetails {
        summary?: CodePipelineExecutionSummary;
        externalExecutionId?: CodePipelineExecutionId;
        percentComplete?: CodePipelinePercentage;
    }

    export type CodePipelineExecutionId = string;
    export type CodePipelineExecutionSummary = string;
    export interface CodePipelineFailureDetails {
        type: CodePipelineFailureType;
        message: CodePipelineMessage;
        externalExecutionId?: CodePipelineExecutionId;
    }

    export type CodePipelineFailureType = string;
    export interface CodePipelineGetJobDetailsInput {
        jobId: CodePipelineJobId;
    }

    export interface CodePipelineGetJobDetailsOutput {
        jobDetails?: CodePipelineJobDetails;
    }

    export interface CodePipelineGetPipelineInput {
        name: CodePipelinePipelineName;
        version?: CodePipelinePipelineVersion;
    }

    export interface CodePipelineGetPipelineOutput {
        pipeline?: CodePipelinePipelineDeclaration;
    }

    export interface CodePipelineGetPipelineStateInput {
        name: CodePipelinePipelineName;
    }

    export interface CodePipelineGetPipelineStateOutput {
        pipelineName?: CodePipelinePipelineName;
        pipelineVersion?: CodePipelinePipelineVersion;
        stageStates?: CodePipelineStageStateList;
        created?: CodePipelineTimestamp;
        updated?: CodePipelineTimestamp;
    }

    export interface CodePipelineGetThirdPartyJobDetailsInput {
        jobId: CodePipelineThirdPartyJobId;
        clientToken: CodePipelineClientToken;
    }

    export interface CodePipelineGetThirdPartyJobDetailsOutput {
        jobDetails?: CodePipelineThirdPartyJobDetails;
    }

    export interface CodePipelineInputArtifact {
        name: CodePipelineArtifactName;
    }

    export type CodePipelineInputArtifactList = Array<CodePipelineInputArtifact>;
    export interface CodePipelineInvalidActionDeclarationException {
    }

    export interface CodePipelineInvalidBlockerDeclarationException {
    }

    export interface CodePipelineInvalidClientTokenException {
    }

    export interface CodePipelineInvalidJobException {
    }

    export interface CodePipelineInvalidJobStateException {
    }

    export interface CodePipelineInvalidNextTokenException {
    }

    export interface CodePipelineInvalidNonceException {
    }

    export interface CodePipelineInvalidStageDeclarationException {
    }

    export interface CodePipelineInvalidStructureException {
    }

    export interface CodePipelineJob {
        id?: CodePipelineJobId;
        data?: CodePipelineJobData;
        nonce?: CodePipelineNonce;
        accountId?: CodePipelineAccountId;
    }

    export interface CodePipelineJobData {
        actionTypeId?: CodePipelineActionTypeId;
        actionConfiguration?: CodePipelineActionConfiguration;
        pipelineContext?: CodePipelinePipelineContext;
        inputArtifacts?: CodePipelineArtifactList;
        outputArtifacts?: CodePipelineArtifactList;
        artifactCredentials?: CodePipelineAWSSessionCredentials;
        continuationToken?: CodePipelineContinuationToken;
        encryptionKey?: CodePipelineEncryptionKey;
    }

    export interface CodePipelineJobDetails {
        id?: CodePipelineJobId;
        data?: CodePipelineJobData;
        accountId?: CodePipelineAccountId;
    }

    export type CodePipelineJobId = string; // pattern: "[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"
    export type CodePipelineJobList = Array<CodePipelineJob>;
    export interface CodePipelineJobNotFoundException {
    }

    export type CodePipelineJobStatus = string;
    export type CodePipelineLastChangedAt = number;
    export type CodePipelineLastChangedBy = string;
    export interface CodePipelineLimitExceededException {
    }

    export interface CodePipelineListActionTypesInput {
        actionOwnerFilter?: CodePipelineActionOwner;
        nextToken?: CodePipelineNextToken;
    }

    export interface CodePipelineListActionTypesOutput {
        actionTypes: CodePipelineActionTypeList;
        nextToken?: CodePipelineNextToken;
    }

    export interface CodePipelineListPipelinesInput {
        nextToken?: CodePipelineNextToken;
    }

    export interface CodePipelineListPipelinesOutput {
        pipelines?: CodePipelinePipelineList;
        nextToken?: CodePipelineNextToken;
    }

    export type CodePipelineMaxBatchSize = number;
    export type CodePipelineMaximumArtifactCount = number;
    export type CodePipelineMessage = string;
    export type CodePipelineMinimumArtifactCount = number;
    export type CodePipelineNextToken = string;
    export type CodePipelineNonce = string;
    export interface CodePipelineOutputArtifact {
        name: CodePipelineArtifactName;
    }

    export type CodePipelineOutputArtifactList = Array<CodePipelineOutputArtifact>;
    export type CodePipelinePercentage = number;
    export interface CodePipelinePipelineContext {
        pipelineName?: CodePipelinePipelineName;
        stage?: CodePipelineStageContext;
        action?: CodePipelineActionContext;
    }

    export interface CodePipelinePipelineDeclaration {
        name: CodePipelinePipelineName;
        roleArn: CodePipelineRoleArn;
        artifactStore: CodePipelineArtifactStore;
        stages: CodePipelinePipelineStageDeclarationList;
        version?: CodePipelinePipelineVersion;
    }

    export type CodePipelinePipelineExecutionId = string; // pattern: "[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"
    export type CodePipelinePipelineList = Array<CodePipelinePipelineSummary>;
    export type CodePipelinePipelineName = string; // pattern: "[A-Za-z0-9.@\-_]+"
    export interface CodePipelinePipelineNameInUseException {
    }

    export interface CodePipelinePipelineNotFoundException {
    }

    export type CodePipelinePipelineStageDeclarationList = Array<CodePipelineStageDeclaration>;
    export interface CodePipelinePipelineSummary {
        name?: CodePipelinePipelineName;
        version?: CodePipelinePipelineVersion;
        created?: CodePipelineTimestamp;
        updated?: CodePipelineTimestamp;
    }

    export type CodePipelinePipelineVersion = number;
    export interface CodePipelinePipelineVersionNotFoundException {
    }

    export interface CodePipelinePollForJobsInput {
        actionTypeId: CodePipelineActionTypeId;
        maxBatchSize?: CodePipelineMaxBatchSize;
        queryParam?: CodePipelineQueryParamMap;
    }

    export interface CodePipelinePollForJobsOutput {
        jobs?: CodePipelineJobList;
    }

    export interface CodePipelinePollForThirdPartyJobsInput {
        actionTypeId: CodePipelineActionTypeId;
        maxBatchSize?: CodePipelineMaxBatchSize;
    }

    export interface CodePipelinePollForThirdPartyJobsOutput {
        jobs?: CodePipelineThirdPartyJobList;
    }

    export interface CodePipelinePutActionRevisionInput {
        pipelineName: CodePipelinePipelineName;
        stageName: CodePipelineStageName;
        actionName: CodePipelineActionName;
        actionRevision: CodePipelineActionRevision;
    }

    export interface CodePipelinePutActionRevisionOutput {
        newRevision?: CodePipelineBoolean;
        pipelineExecutionId?: CodePipelinePipelineExecutionId;
    }

    export interface CodePipelinePutJobFailureResultInput {
        jobId: CodePipelineJobId;
        failureDetails: CodePipelineFailureDetails;
    }

    export interface CodePipelinePutJobSuccessResultInput {
        jobId: CodePipelineJobId;
        currentRevision?: CodePipelineCurrentRevision;
        continuationToken?: CodePipelineContinuationToken;
        executionDetails?: CodePipelineExecutionDetails;
    }

    export interface CodePipelinePutThirdPartyJobFailureResultInput {
        jobId: CodePipelineThirdPartyJobId;
        clientToken: CodePipelineClientToken;
        failureDetails: CodePipelineFailureDetails;
    }

    export interface CodePipelinePutThirdPartyJobSuccessResultInput {
        jobId: CodePipelineThirdPartyJobId;
        clientToken: CodePipelineClientToken;
        currentRevision?: CodePipelineCurrentRevision;
        continuationToken?: CodePipelineContinuationToken;
        executionDetails?: CodePipelineExecutionDetails;
    }

    export type CodePipelineQueryParamMap = any; // not really - it was 'map' instead - must fix this one
    export type CodePipelineRevision = string;
    export type CodePipelineRevisionChangeId = string;
    export type CodePipelineRevisionChangeIdentifier = string;
    export type CodePipelineRevisionId = string;
    export type CodePipelineRoleArn = string; // pattern: "arn:[^:]+:iam::[0-9]{12}:role/.*"
    export interface CodePipelineS3ArtifactLocation {
        bucketName: CodePipelineS3BucketName;
        objectKey: CodePipelineS3ObjectKey;
    }

    export type CodePipelineS3BucketName = string;
    export type CodePipelineS3ObjectKey = string;
    export type CodePipelineSecretAccessKey = string;
    export type CodePipelineSessionToken = string;
    export type CodePipelineStageActionDeclarationList = Array<CodePipelineActionDeclaration>;
    export type CodePipelineStageBlockerDeclarationList = Array<CodePipelineBlockerDeclaration>;
    export interface CodePipelineStageContext {
        name?: CodePipelineStageName;
    }

    export interface CodePipelineStageDeclaration {
        name: CodePipelineStageName;
        blockers?: CodePipelineStageBlockerDeclarationList;
        actions: CodePipelineStageActionDeclarationList;
    }

    export type CodePipelineStageName = string; // pattern: "[A-Za-z0-9.@\-_]+"
    export interface CodePipelineStageNotFoundException {
    }

    export interface CodePipelineStageState {
        stageName?: CodePipelineStageName;
        inboundTransitionState?: CodePipelineTransitionState;
        actionStates?: CodePipelineActionStateList;
    }

    export type CodePipelineStageStateList = Array<CodePipelineStageState>;
    export type CodePipelineStageTransitionType = string;
    export interface CodePipelineStartPipelineExecutionInput {
        name: CodePipelinePipelineName;
    }

    export interface CodePipelineStartPipelineExecutionOutput {
        pipelineExecutionId?: CodePipelinePipelineExecutionId;
    }

    export interface CodePipelineThirdPartyJob {
        clientId?: CodePipelineClientId;
        jobId?: CodePipelineJobId;
    }

    export interface CodePipelineThirdPartyJobData {
        actionTypeId?: CodePipelineActionTypeId;
        actionConfiguration?: CodePipelineActionConfiguration;
        pipelineContext?: CodePipelinePipelineContext;
        inputArtifacts?: CodePipelineArtifactList;
        outputArtifacts?: CodePipelineArtifactList;
        artifactCredentials?: CodePipelineAWSSessionCredentials;
        continuationToken?: CodePipelineContinuationToken;
        encryptionKey?: CodePipelineEncryptionKey;
    }

    export interface CodePipelineThirdPartyJobDetails {
        id?: CodePipelineThirdPartyJobId;
        data?: CodePipelineThirdPartyJobData;
        nonce?: CodePipelineNonce;
    }

    export type CodePipelineThirdPartyJobId = string;
    export type CodePipelineThirdPartyJobList = Array<CodePipelineThirdPartyJob>;
    export type CodePipelineTimestamp = number;
    export interface CodePipelineTransitionState {
        enabled?: CodePipelineEnabled;
        lastChangedBy?: CodePipelineLastChangedBy;
        lastChangedAt?: CodePipelineLastChangedAt;
        disabledReason?: CodePipelineDisabledReason;
    }

    export interface CodePipelineUpdatePipelineInput {
        pipeline: CodePipelinePipelineDeclaration;
    }

    export interface CodePipelineUpdatePipelineOutput {
        pipeline?: CodePipelinePipelineDeclaration;
    }

    export type CodePipelineUrl = string;
    export type CodePipelineUrlTemplate = string;
    export interface CodePipelineValidationException {
    }

    export type CodePipelineVersion = string; // pattern: "[0-9A-Za-z_-]+"
}
