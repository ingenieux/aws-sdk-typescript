// DO NOT EDIT!
//

///<reference path="./aws-sdk-common.d.ts" />
declare module "aws-sdk" {
    export class MachineLearning {
      constructor(options?: any);
      createBatchPrediction(params: MachineLearningCreateBatchPredictionInput, callback: (err: MachineLearningInvalidInputException|MachineLearningInternalServerException|MachineLearningIdempotentParameterMismatchException|any, data: MachineLearningCreateBatchPredictionOutput|any) => void): void;
      createDataSourceFromRDS(params: MachineLearningCreateDataSourceFromRDSInput, callback: (err: MachineLearningInvalidInputException|MachineLearningInternalServerException|MachineLearningIdempotentParameterMismatchException|any, data: MachineLearningCreateDataSourceFromRDSOutput|any) => void): void;
      createDataSourceFromRedshift(params: MachineLearningCreateDataSourceFromRedshiftInput, callback: (err: MachineLearningInvalidInputException|MachineLearningInternalServerException|MachineLearningIdempotentParameterMismatchException|any, data: MachineLearningCreateDataSourceFromRedshiftOutput|any) => void): void;
      createDataSourceFromS3(params: MachineLearningCreateDataSourceFromS3Input, callback: (err: MachineLearningInvalidInputException|MachineLearningInternalServerException|MachineLearningIdempotentParameterMismatchException|any, data: MachineLearningCreateDataSourceFromS3Output|any) => void): void;
      createEvaluation(params: MachineLearningCreateEvaluationInput, callback: (err: MachineLearningInvalidInputException|MachineLearningInternalServerException|MachineLearningIdempotentParameterMismatchException|any, data: MachineLearningCreateEvaluationOutput|any) => void): void;
      createMLModel(params: MachineLearningCreateMLModelInput, callback: (err: MachineLearningInvalidInputException|MachineLearningInternalServerException|MachineLearningIdempotentParameterMismatchException|any, data: MachineLearningCreateMLModelOutput|any) => void): void;
      createRealtimeEndpoint(params: MachineLearningCreateRealtimeEndpointInput, callback: (err: MachineLearningInvalidInputException|MachineLearningResourceNotFoundException|MachineLearningInternalServerException|any, data: MachineLearningCreateRealtimeEndpointOutput|any) => void): void;
      deleteBatchPrediction(params: MachineLearningDeleteBatchPredictionInput, callback: (err: MachineLearningInvalidInputException|MachineLearningResourceNotFoundException|MachineLearningInternalServerException|any, data: MachineLearningDeleteBatchPredictionOutput|any) => void): void;
      deleteDataSource(params: MachineLearningDeleteDataSourceInput, callback: (err: MachineLearningInvalidInputException|MachineLearningResourceNotFoundException|MachineLearningInternalServerException|any, data: MachineLearningDeleteDataSourceOutput|any) => void): void;
      deleteEvaluation(params: MachineLearningDeleteEvaluationInput, callback: (err: MachineLearningInvalidInputException|MachineLearningResourceNotFoundException|MachineLearningInternalServerException|any, data: MachineLearningDeleteEvaluationOutput|any) => void): void;
      deleteMLModel(params: MachineLearningDeleteMLModelInput, callback: (err: MachineLearningInvalidInputException|MachineLearningResourceNotFoundException|MachineLearningInternalServerException|any, data: MachineLearningDeleteMLModelOutput|any) => void): void;
      deleteRealtimeEndpoint(params: MachineLearningDeleteRealtimeEndpointInput, callback: (err: MachineLearningInvalidInputException|MachineLearningResourceNotFoundException|MachineLearningInternalServerException|any, data: MachineLearningDeleteRealtimeEndpointOutput|any) => void): void;
      describeBatchPredictions(params: MachineLearningDescribeBatchPredictionsInput, callback: (err: MachineLearningInvalidInputException|MachineLearningInternalServerException|any, data: MachineLearningDescribeBatchPredictionsOutput|any) => void): void;
      describeDataSources(params: MachineLearningDescribeDataSourcesInput, callback: (err: MachineLearningInvalidInputException|MachineLearningInternalServerException|any, data: MachineLearningDescribeDataSourcesOutput|any) => void): void;
      describeEvaluations(params: MachineLearningDescribeEvaluationsInput, callback: (err: MachineLearningInvalidInputException|MachineLearningInternalServerException|any, data: MachineLearningDescribeEvaluationsOutput|any) => void): void;
      describeMLModels(params: MachineLearningDescribeMLModelsInput, callback: (err: MachineLearningInvalidInputException|MachineLearningInternalServerException|any, data: MachineLearningDescribeMLModelsOutput|any) => void): void;
      getBatchPrediction(params: MachineLearningGetBatchPredictionInput, callback: (err: MachineLearningInvalidInputException|MachineLearningResourceNotFoundException|MachineLearningInternalServerException|any, data: MachineLearningGetBatchPredictionOutput|any) => void): void;
      getDataSource(params: MachineLearningGetDataSourceInput, callback: (err: MachineLearningInvalidInputException|MachineLearningResourceNotFoundException|MachineLearningInternalServerException|any, data: MachineLearningGetDataSourceOutput|any) => void): void;
      getEvaluation(params: MachineLearningGetEvaluationInput, callback: (err: MachineLearningInvalidInputException|MachineLearningResourceNotFoundException|MachineLearningInternalServerException|any, data: MachineLearningGetEvaluationOutput|any) => void): void;
      getMLModel(params: MachineLearningGetMLModelInput, callback: (err: MachineLearningInvalidInputException|MachineLearningResourceNotFoundException|MachineLearningInternalServerException|any, data: MachineLearningGetMLModelOutput|any) => void): void;
      predict(params: MachineLearningPredictInput, callback: (err: MachineLearningInvalidInputException|MachineLearningResourceNotFoundException|MachineLearningLimitExceededException|MachineLearningInternalServerException|MachineLearningPredictorNotMountedException|any, data: MachineLearningPredictOutput|any) => void): void;
      updateBatchPrediction(params: MachineLearningUpdateBatchPredictionInput, callback: (err: MachineLearningInvalidInputException|MachineLearningResourceNotFoundException|MachineLearningInternalServerException|any, data: MachineLearningUpdateBatchPredictionOutput|any) => void): void;
      updateDataSource(params: MachineLearningUpdateDataSourceInput, callback: (err: MachineLearningInvalidInputException|MachineLearningResourceNotFoundException|MachineLearningInternalServerException|any, data: MachineLearningUpdateDataSourceOutput|any) => void): void;
      updateEvaluation(params: MachineLearningUpdateEvaluationInput, callback: (err: MachineLearningInvalidInputException|MachineLearningResourceNotFoundException|MachineLearningInternalServerException|any, data: MachineLearningUpdateEvaluationOutput|any) => void): void;
      updateMLModel(params: MachineLearningUpdateMLModelInput, callback: (err: MachineLearningInvalidInputException|MachineLearningResourceNotFoundException|MachineLearningInternalServerException|any, data: MachineLearningUpdateMLModelOutput|any) => void): void;
    }

    export type MachineLearningAlgorithm = string;
    export type MachineLearningAwsUserArn = string; // pattern: "arn:aws:iam::[0-9]+:((user/.+)|(root))"
    export interface MachineLearningBatchPrediction {
        BatchPredictionId?: MachineLearningEntityId;
        MLModelId?: MachineLearningEntityId;
        BatchPredictionDataSourceId?: MachineLearningEntityId;
        InputDataLocationS3?: MachineLearningS3Url;
        CreatedByIamUser?: MachineLearningAwsUserArn;
        CreatedAt?: MachineLearningEpochTime;
        LastUpdatedAt?: MachineLearningEpochTime;
        Name?: MachineLearningEntityName;
        Status?: MachineLearningEntityStatus;
        OutputUri?: MachineLearningS3Url;
        Message?: MachineLearningMessage;
    }

    export type MachineLearningBatchPredictionFilterVariable = string;
    export type MachineLearningBatchPredictions = Array<MachineLearningBatchPrediction>;
    export type MachineLearningComparatorValue = string; // pattern: ".*\S.*|^$"
    export type MachineLearningComputeStatistics = boolean;
    export interface MachineLearningCreateBatchPredictionInput {
        BatchPredictionId: MachineLearningEntityId;
        BatchPredictionName?: MachineLearningEntityName;
        MLModelId: MachineLearningEntityId;
        BatchPredictionDataSourceId: MachineLearningEntityId;
        OutputUri: MachineLearningS3Url;
    }

    export interface MachineLearningCreateBatchPredictionOutput {
        BatchPredictionId?: MachineLearningEntityId;
    }

    export interface MachineLearningCreateDataSourceFromRDSInput {
        DataSourceId: MachineLearningEntityId;
        DataSourceName?: MachineLearningEntityName;
        RDSData: MachineLearningRDSDataSpec;
        RoleARN: MachineLearningRoleARN;
        ComputeStatistics?: MachineLearningComputeStatistics;
    }

    export interface MachineLearningCreateDataSourceFromRDSOutput {
        DataSourceId?: MachineLearningEntityId;
    }

    export interface MachineLearningCreateDataSourceFromRedshiftInput {
        DataSourceId: MachineLearningEntityId;
        DataSourceName?: MachineLearningEntityName;
        DataSpec: MachineLearningRedshiftDataSpec;
        RoleARN: MachineLearningRoleARN;
        ComputeStatistics?: MachineLearningComputeStatistics;
    }

    export interface MachineLearningCreateDataSourceFromRedshiftOutput {
        DataSourceId?: MachineLearningEntityId;
    }

    export interface MachineLearningCreateDataSourceFromS3Input {
        DataSourceId: MachineLearningEntityId;
        DataSourceName?: MachineLearningEntityName;
        DataSpec: MachineLearningS3DataSpec;
        ComputeStatistics?: MachineLearningComputeStatistics;
    }

    export interface MachineLearningCreateDataSourceFromS3Output {
        DataSourceId?: MachineLearningEntityId;
    }

    export interface MachineLearningCreateEvaluationInput {
        EvaluationId: MachineLearningEntityId;
        EvaluationName?: MachineLearningEntityName;
        MLModelId: MachineLearningEntityId;
        EvaluationDataSourceId: MachineLearningEntityId;
    }

    export interface MachineLearningCreateEvaluationOutput {
        EvaluationId?: MachineLearningEntityId;
    }

    export interface MachineLearningCreateMLModelInput {
        MLModelId: MachineLearningEntityId;
        MLModelName?: MachineLearningEntityName;
        MLModelType: MachineLearningMLModelType;
        Parameters?: MachineLearningTrainingParameters;
        TrainingDataSourceId: MachineLearningEntityId;
        Recipe?: MachineLearningRecipe;
        RecipeUri?: MachineLearningS3Url;
    }

    export interface MachineLearningCreateMLModelOutput {
        MLModelId?: MachineLearningEntityId;
    }

    export interface MachineLearningCreateRealtimeEndpointInput {
        MLModelId: MachineLearningEntityId;
    }

    export interface MachineLearningCreateRealtimeEndpointOutput {
        MLModelId?: MachineLearningEntityId;
        RealtimeEndpointInfo?: MachineLearningRealtimeEndpointInfo;
    }

    export type MachineLearningDataRearrangement = string;
    export type MachineLearningDataSchema = string;
    export interface MachineLearningDataSource {
        DataSourceId?: MachineLearningEntityId;
        DataLocationS3?: MachineLearningS3Url;
        DataRearrangement?: MachineLearningDataRearrangement;
        CreatedByIamUser?: MachineLearningAwsUserArn;
        CreatedAt?: MachineLearningEpochTime;
        LastUpdatedAt?: MachineLearningEpochTime;
        DataSizeInBytes?: MachineLearningLongType;
        NumberOfFiles?: MachineLearningLongType;
        Name?: MachineLearningEntityName;
        Status?: MachineLearningEntityStatus;
        Message?: MachineLearningMessage;
        RedshiftMetadata?: MachineLearningRedshiftMetadata;
        RDSMetadata?: MachineLearningRDSMetadata;
        RoleARN?: MachineLearningRoleARN;
        ComputeStatistics?: MachineLearningComputeStatistics;
    }

    export type MachineLearningDataSourceFilterVariable = string;
    export type MachineLearningDataSources = Array<MachineLearningDataSource>;
    export interface MachineLearningDeleteBatchPredictionInput {
        BatchPredictionId: MachineLearningEntityId;
    }

    export interface MachineLearningDeleteBatchPredictionOutput {
        BatchPredictionId?: MachineLearningEntityId;
    }

    export interface MachineLearningDeleteDataSourceInput {
        DataSourceId: MachineLearningEntityId;
    }

    export interface MachineLearningDeleteDataSourceOutput {
        DataSourceId?: MachineLearningEntityId;
    }

    export interface MachineLearningDeleteEvaluationInput {
        EvaluationId: MachineLearningEntityId;
    }

    export interface MachineLearningDeleteEvaluationOutput {
        EvaluationId?: MachineLearningEntityId;
    }

    export interface MachineLearningDeleteMLModelInput {
        MLModelId: MachineLearningEntityId;
    }

    export interface MachineLearningDeleteMLModelOutput {
        MLModelId?: MachineLearningEntityId;
    }

    export interface MachineLearningDeleteRealtimeEndpointInput {
        MLModelId: MachineLearningEntityId;
    }

    export interface MachineLearningDeleteRealtimeEndpointOutput {
        MLModelId?: MachineLearningEntityId;
        RealtimeEndpointInfo?: MachineLearningRealtimeEndpointInfo;
    }

    export interface MachineLearningDescribeBatchPredictionsInput {
        FilterVariable?: MachineLearningBatchPredictionFilterVariable;
        EQ?: MachineLearningComparatorValue;
        GT?: MachineLearningComparatorValue;
        LT?: MachineLearningComparatorValue;
        GE?: MachineLearningComparatorValue;
        LE?: MachineLearningComparatorValue;
        NE?: MachineLearningComparatorValue;
        Prefix?: MachineLearningComparatorValue;
        SortOrder?: MachineLearningSortOrder;
        NextToken?: MachineLearningStringType;
        Limit?: MachineLearningPageLimit;
    }

    export interface MachineLearningDescribeBatchPredictionsOutput {
        Results?: MachineLearningBatchPredictions;
        NextToken?: MachineLearningStringType;
    }

    export interface MachineLearningDescribeDataSourcesInput {
        FilterVariable?: MachineLearningDataSourceFilterVariable;
        EQ?: MachineLearningComparatorValue;
        GT?: MachineLearningComparatorValue;
        LT?: MachineLearningComparatorValue;
        GE?: MachineLearningComparatorValue;
        LE?: MachineLearningComparatorValue;
        NE?: MachineLearningComparatorValue;
        Prefix?: MachineLearningComparatorValue;
        SortOrder?: MachineLearningSortOrder;
        NextToken?: MachineLearningStringType;
        Limit?: MachineLearningPageLimit;
    }

    export interface MachineLearningDescribeDataSourcesOutput {
        Results?: MachineLearningDataSources;
        NextToken?: MachineLearningStringType;
    }

    export interface MachineLearningDescribeEvaluationsInput {
        FilterVariable?: MachineLearningEvaluationFilterVariable;
        EQ?: MachineLearningComparatorValue;
        GT?: MachineLearningComparatorValue;
        LT?: MachineLearningComparatorValue;
        GE?: MachineLearningComparatorValue;
        LE?: MachineLearningComparatorValue;
        NE?: MachineLearningComparatorValue;
        Prefix?: MachineLearningComparatorValue;
        SortOrder?: MachineLearningSortOrder;
        NextToken?: MachineLearningStringType;
        Limit?: MachineLearningPageLimit;
    }

    export interface MachineLearningDescribeEvaluationsOutput {
        Results?: MachineLearningEvaluations;
        NextToken?: MachineLearningStringType;
    }

    export interface MachineLearningDescribeMLModelsInput {
        FilterVariable?: MachineLearningMLModelFilterVariable;
        EQ?: MachineLearningComparatorValue;
        GT?: MachineLearningComparatorValue;
        LT?: MachineLearningComparatorValue;
        GE?: MachineLearningComparatorValue;
        LE?: MachineLearningComparatorValue;
        NE?: MachineLearningComparatorValue;
        Prefix?: MachineLearningComparatorValue;
        SortOrder?: MachineLearningSortOrder;
        NextToken?: MachineLearningStringType;
        Limit?: MachineLearningPageLimit;
    }

    export interface MachineLearningDescribeMLModelsOutput {
        Results?: MachineLearningMLModels;
        NextToken?: MachineLearningStringType;
    }

    export type MachineLearningDetailsAttributes = string;
    export type MachineLearningDetailsMap = any; // not really - it was 'map' instead - must fix this one
    export type MachineLearningDetailsValue = string;
    export type MachineLearningEDPPipelineId = string;
    export type MachineLearningEDPResourceRole = string;
    export type MachineLearningEDPSecurityGroupId = string;
    export type MachineLearningEDPSecurityGroupIds = Array<MachineLearningEDPSecurityGroupId>;
    export type MachineLearningEDPServiceRole = string;
    export type MachineLearningEDPSubnetId = string;
    export type MachineLearningEntityId = string; // pattern: "[a-zA-Z0-9_.-]+"
    export type MachineLearningEntityName = string; // pattern: ".*\S.*|^$"
    export type MachineLearningEntityStatus = string;
    export type MachineLearningEpochTime = number;
    export type MachineLearningErrorCode = number;
    export type MachineLearningErrorMessage = string;
    export interface MachineLearningEvaluation {
        EvaluationId?: MachineLearningEntityId;
        MLModelId?: MachineLearningEntityId;
        EvaluationDataSourceId?: MachineLearningEntityId;
        InputDataLocationS3?: MachineLearningS3Url;
        CreatedByIamUser?: MachineLearningAwsUserArn;
        CreatedAt?: MachineLearningEpochTime;
        LastUpdatedAt?: MachineLearningEpochTime;
        Name?: MachineLearningEntityName;
        Status?: MachineLearningEntityStatus;
        PerformanceMetrics?: MachineLearningPerformanceMetrics;
        Message?: MachineLearningMessage;
    }

    export type MachineLearningEvaluationFilterVariable = string;
    export type MachineLearningEvaluations = Array<MachineLearningEvaluation>;
    export interface MachineLearningGetBatchPredictionInput {
        BatchPredictionId: MachineLearningEntityId;
    }

    export interface MachineLearningGetBatchPredictionOutput {
        BatchPredictionId?: MachineLearningEntityId;
        MLModelId?: MachineLearningEntityId;
        BatchPredictionDataSourceId?: MachineLearningEntityId;
        InputDataLocationS3?: MachineLearningS3Url;
        CreatedByIamUser?: MachineLearningAwsUserArn;
        CreatedAt?: MachineLearningEpochTime;
        LastUpdatedAt?: MachineLearningEpochTime;
        Name?: MachineLearningEntityName;
        Status?: MachineLearningEntityStatus;
        OutputUri?: MachineLearningS3Url;
        LogUri?: MachineLearningPresignedS3Url;
        Message?: MachineLearningMessage;
    }

    export interface MachineLearningGetDataSourceInput {
        DataSourceId: MachineLearningEntityId;
        Verbose?: MachineLearningVerbose;
    }

    export interface MachineLearningGetDataSourceOutput {
        DataSourceId?: MachineLearningEntityId;
        DataLocationS3?: MachineLearningS3Url;
        DataRearrangement?: MachineLearningDataRearrangement;
        CreatedByIamUser?: MachineLearningAwsUserArn;
        CreatedAt?: MachineLearningEpochTime;
        LastUpdatedAt?: MachineLearningEpochTime;
        DataSizeInBytes?: MachineLearningLongType;
        NumberOfFiles?: MachineLearningLongType;
        Name?: MachineLearningEntityName;
        Status?: MachineLearningEntityStatus;
        LogUri?: MachineLearningPresignedS3Url;
        Message?: MachineLearningMessage;
        RedshiftMetadata?: MachineLearningRedshiftMetadata;
        RDSMetadata?: MachineLearningRDSMetadata;
        RoleARN?: MachineLearningRoleARN;
        ComputeStatistics?: MachineLearningComputeStatistics;
        DataSourceSchema?: MachineLearningDataSchema;
    }

    export interface MachineLearningGetEvaluationInput {
        EvaluationId: MachineLearningEntityId;
    }

    export interface MachineLearningGetEvaluationOutput {
        EvaluationId?: MachineLearningEntityId;
        MLModelId?: MachineLearningEntityId;
        EvaluationDataSourceId?: MachineLearningEntityId;
        InputDataLocationS3?: MachineLearningS3Url;
        CreatedByIamUser?: MachineLearningAwsUserArn;
        CreatedAt?: MachineLearningEpochTime;
        LastUpdatedAt?: MachineLearningEpochTime;
        Name?: MachineLearningEntityName;
        Status?: MachineLearningEntityStatus;
        PerformanceMetrics?: MachineLearningPerformanceMetrics;
        LogUri?: MachineLearningPresignedS3Url;
        Message?: MachineLearningMessage;
    }

    export interface MachineLearningGetMLModelInput {
        MLModelId: MachineLearningEntityId;
        Verbose?: MachineLearningVerbose;
    }

    export interface MachineLearningGetMLModelOutput {
        MLModelId?: MachineLearningEntityId;
        TrainingDataSourceId?: MachineLearningEntityId;
        CreatedByIamUser?: MachineLearningAwsUserArn;
        CreatedAt?: MachineLearningEpochTime;
        LastUpdatedAt?: MachineLearningEpochTime;
        Name?: MachineLearningMLModelName;
        Status?: MachineLearningEntityStatus;
        SizeInBytes?: MachineLearningLongType;
        EndpointInfo?: MachineLearningRealtimeEndpointInfo;
        TrainingParameters?: MachineLearningTrainingParameters;
        InputDataLocationS3?: MachineLearningS3Url;
        MLModelType?: MachineLearningMLModelType;
        ScoreThreshold?: MachineLearningScoreThreshold;
        ScoreThresholdLastUpdatedAt?: MachineLearningEpochTime;
        LogUri?: MachineLearningPresignedS3Url;
        Message?: MachineLearningMessage;
        Recipe?: MachineLearningRecipe;
        Schema?: MachineLearningDataSchema;
    }

    export interface MachineLearningIdempotentParameterMismatchException {
        message?: MachineLearningErrorMessage;
        code?: MachineLearningErrorCode;
    }

    export type MachineLearningIntegerType = number;
    export interface MachineLearningInternalServerException {
        message?: MachineLearningErrorMessage;
        code?: MachineLearningErrorCode;
    }

    export interface MachineLearningInvalidInputException {
        message?: MachineLearningErrorMessage;
        code?: MachineLearningErrorCode;
    }

    export type MachineLearningLabel = string;
    export interface MachineLearningLimitExceededException {
        message?: MachineLearningErrorMessage;
        code?: MachineLearningErrorCode;
    }

    export type MachineLearningLongType = number;
    export interface MachineLearningMLModel {
        MLModelId?: MachineLearningEntityId;
        TrainingDataSourceId?: MachineLearningEntityId;
        CreatedByIamUser?: MachineLearningAwsUserArn;
        CreatedAt?: MachineLearningEpochTime;
        LastUpdatedAt?: MachineLearningEpochTime;
        Name?: MachineLearningMLModelName;
        Status?: MachineLearningEntityStatus;
        SizeInBytes?: MachineLearningLongType;
        EndpointInfo?: MachineLearningRealtimeEndpointInfo;
        TrainingParameters?: MachineLearningTrainingParameters;
        InputDataLocationS3?: MachineLearningS3Url;
        Algorithm?: MachineLearningAlgorithm;
        MLModelType?: MachineLearningMLModelType;
        ScoreThreshold?: MachineLearningScoreThreshold;
        ScoreThresholdLastUpdatedAt?: MachineLearningEpochTime;
        Message?: MachineLearningMessage;
    }

    export type MachineLearningMLModelFilterVariable = string;
    export type MachineLearningMLModelName = string;
    export type MachineLearningMLModelType = string;
    export type MachineLearningMLModels = Array<MachineLearningMLModel>;
    export type MachineLearningMessage = string;
    export type MachineLearningPageLimit = number;
    export interface MachineLearningPerformanceMetrics {
        Properties?: MachineLearningPerformanceMetricsProperties;
    }

    export type MachineLearningPerformanceMetricsProperties = any; // not really - it was 'map' instead - must fix this one
    export type MachineLearningPerformanceMetricsPropertyKey = string;
    export type MachineLearningPerformanceMetricsPropertyValue = string;
    export interface MachineLearningPredictInput {
        MLModelId: MachineLearningEntityId;
        Record: MachineLearningRecord;
        PredictEndpoint: MachineLearningVipURL;
    }

    export interface MachineLearningPredictOutput {
        Prediction?: MachineLearningPrediction;
    }

    export interface MachineLearningPrediction {
        predictedLabel?: MachineLearningLabel;
        predictedValue?: MachineLearningfloatLabel;
        predictedScores?: MachineLearningScoreValuePerLabelMap;
        details?: MachineLearningDetailsMap;
    }

    export interface MachineLearningPredictorNotMountedException {
        message?: MachineLearningErrorMessage;
    }

    export type MachineLearningPresignedS3Url = string;
    export interface MachineLearningRDSDataSpec {
        DatabaseInformation: MachineLearningRDSDatabase;
        SelectSqlQuery: MachineLearningRDSSelectSqlQuery;
        DatabaseCredentials: MachineLearningRDSDatabaseCredentials;
        S3StagingLocation: MachineLearningS3Url;
        DataRearrangement?: MachineLearningDataRearrangement;
        DataSchema?: MachineLearningDataSchema;
        DataSchemaUri?: MachineLearningS3Url;
        ResourceRole: MachineLearningEDPResourceRole;
        ServiceRole: MachineLearningEDPServiceRole;
        SubnetId: MachineLearningEDPSubnetId;
        SecurityGroupIds: MachineLearningEDPSecurityGroupIds;
    }

    export interface MachineLearningRDSDatabase {
        InstanceIdentifier: MachineLearningRDSInstanceIdentifier;
        DatabaseName: MachineLearningRDSDatabaseName;
    }

    export interface MachineLearningRDSDatabaseCredentials {
        Username: MachineLearningRDSDatabaseUsername;
        Password: MachineLearningRDSDatabasePassword;
    }

    export type MachineLearningRDSDatabaseName = string;
    export type MachineLearningRDSDatabasePassword = string;
    export type MachineLearningRDSDatabaseUsername = string;
    export type MachineLearningRDSInstanceIdentifier = string; // pattern: "[a-z0-9-]+"
    export interface MachineLearningRDSMetadata {
        Database?: MachineLearningRDSDatabase;
        DatabaseUserName?: MachineLearningRDSDatabaseUsername;
        SelectSqlQuery?: MachineLearningRDSSelectSqlQuery;
        ResourceRole?: MachineLearningEDPResourceRole;
        ServiceRole?: MachineLearningEDPServiceRole;
        DataPipelineId?: MachineLearningEDPPipelineId;
    }

    export type MachineLearningRDSSelectSqlQuery = string;
    export interface MachineLearningRealtimeEndpointInfo {
        PeakRequestsPerSecond?: MachineLearningIntegerType;
        CreatedAt?: MachineLearningEpochTime;
        EndpointUrl?: MachineLearningVipURL;
        EndpointStatus?: MachineLearningRealtimeEndpointStatus;
    }

    export type MachineLearningRealtimeEndpointStatus = string;
    export type MachineLearningRecipe = string;
    export type MachineLearningRecord = any; // not really - it was 'map' instead - must fix this one
    export type MachineLearningRedshiftClusterIdentifier = string; // pattern: "[a-z0-9-]+"
    export interface MachineLearningRedshiftDataSpec {
        DatabaseInformation: MachineLearningRedshiftDatabase;
        SelectSqlQuery: MachineLearningRedshiftSelectSqlQuery;
        DatabaseCredentials: MachineLearningRedshiftDatabaseCredentials;
        S3StagingLocation: MachineLearningS3Url;
        DataRearrangement?: MachineLearningDataRearrangement;
        DataSchema?: MachineLearningDataSchema;
        DataSchemaUri?: MachineLearningS3Url;
    }

    export interface MachineLearningRedshiftDatabase {
        DatabaseName: MachineLearningRedshiftDatabaseName;
        ClusterIdentifier: MachineLearningRedshiftClusterIdentifier;
    }

    export interface MachineLearningRedshiftDatabaseCredentials {
        Username: MachineLearningRedshiftDatabaseUsername;
        Password: MachineLearningRedshiftDatabasePassword;
    }

    export type MachineLearningRedshiftDatabaseName = string; // pattern: "[a-z0-9]+"
    export type MachineLearningRedshiftDatabasePassword = string;
    export type MachineLearningRedshiftDatabaseUsername = string;
    export interface MachineLearningRedshiftMetadata {
        RedshiftDatabase?: MachineLearningRedshiftDatabase;
        DatabaseUserName?: MachineLearningRedshiftDatabaseUsername;
        SelectSqlQuery?: MachineLearningRedshiftSelectSqlQuery;
    }

    export type MachineLearningRedshiftSelectSqlQuery = string;
    export interface MachineLearningResourceNotFoundException {
        message?: MachineLearningErrorMessage;
        code?: MachineLearningErrorCode;
    }

    export type MachineLearningRoleARN = string;
    export interface MachineLearningS3DataSpec {
        DataLocationS3: MachineLearningS3Url;
        DataRearrangement?: MachineLearningDataRearrangement;
        DataSchema?: MachineLearningDataSchema;
        DataSchemaLocationS3?: MachineLearningS3Url;
    }

    export type MachineLearningS3Url = string; // pattern: "s3://([^/]+)(/.*)?"
    export type MachineLearningScoreThreshold = number;
    export type MachineLearningScoreValue = number;
    export type MachineLearningScoreValuePerLabelMap = any; // not really - it was 'map' instead - must fix this one
    export type MachineLearningSortOrder = string;
    export type MachineLearningStringType = string;
    export type MachineLearningTrainingParameters = any; // not really - it was 'map' instead - must fix this one
    export interface MachineLearningUpdateBatchPredictionInput {
        BatchPredictionId: MachineLearningEntityId;
        BatchPredictionName: MachineLearningEntityName;
    }

    export interface MachineLearningUpdateBatchPredictionOutput {
        BatchPredictionId?: MachineLearningEntityId;
    }

    export interface MachineLearningUpdateDataSourceInput {
        DataSourceId: MachineLearningEntityId;
        DataSourceName: MachineLearningEntityName;
    }

    export interface MachineLearningUpdateDataSourceOutput {
        DataSourceId?: MachineLearningEntityId;
    }

    export interface MachineLearningUpdateEvaluationInput {
        EvaluationId: MachineLearningEntityId;
        EvaluationName: MachineLearningEntityName;
    }

    export interface MachineLearningUpdateEvaluationOutput {
        EvaluationId?: MachineLearningEntityId;
    }

    export interface MachineLearningUpdateMLModelInput {
        MLModelId: MachineLearningEntityId;
        MLModelName?: MachineLearningEntityName;
        ScoreThreshold?: MachineLearningScoreThreshold;
    }

    export interface MachineLearningUpdateMLModelOutput {
        MLModelId?: MachineLearningEntityId;
    }

    export type MachineLearningVariableName = string;
    export type MachineLearningVariableValue = string;
    export type MachineLearningVerbose = boolean;
    export type MachineLearningVipURL = string; // pattern: "https://[a-zA-Z0-9-.]*\.amazon(aws)?\.com[/]?"
    export type MachineLearningfloatLabel = number;
}
