// Type definitions for aws-sdk - Amazon Machine Learning
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

///<reference path="./aws-sdk-common.d.ts" />

declare module "aws-sdk" {

    /*
     * apiVersion: 2014-12-12
     * endpointPrefix: machinelearning
     * serviceAbbreviation: 
     * signatureVersion: v4
     * protocol: json
     */
    export class MachineLearning extends Service {
      constructor(options?: any);
      endpoint: Endpoint;
      createBatchPrediction(params: MachineLearning.CreateBatchPredictionInput, callback?: (err: MachineLearning.InvalidInputException|MachineLearning.InternalServerException|MachineLearning.IdempotentParameterMismatchException|any, data: MachineLearning.CreateBatchPredictionOutput|any) => void): Request;
      createDataSourceFromRDS(params: MachineLearning.CreateDataSourceFromRDSInput, callback?: (err: MachineLearning.InvalidInputException|MachineLearning.InternalServerException|MachineLearning.IdempotentParameterMismatchException|any, data: MachineLearning.CreateDataSourceFromRDSOutput|any) => void): Request;
      createDataSourceFromRedshift(params: MachineLearning.CreateDataSourceFromRedshiftInput, callback?: (err: MachineLearning.InvalidInputException|MachineLearning.InternalServerException|MachineLearning.IdempotentParameterMismatchException|any, data: MachineLearning.CreateDataSourceFromRedshiftOutput|any) => void): Request;
      createDataSourceFromS3(params: MachineLearning.CreateDataSourceFromS3Input, callback?: (err: MachineLearning.InvalidInputException|MachineLearning.InternalServerException|MachineLearning.IdempotentParameterMismatchException|any, data: MachineLearning.CreateDataSourceFromS3Output|any) => void): Request;
      createEvaluation(params: MachineLearning.CreateEvaluationInput, callback?: (err: MachineLearning.InvalidInputException|MachineLearning.InternalServerException|MachineLearning.IdempotentParameterMismatchException|any, data: MachineLearning.CreateEvaluationOutput|any) => void): Request;
      createMLModel(params: MachineLearning.CreateMLModelInput, callback?: (err: MachineLearning.InvalidInputException|MachineLearning.InternalServerException|MachineLearning.IdempotentParameterMismatchException|any, data: MachineLearning.CreateMLModelOutput|any) => void): Request;
      createRealtimeEndpoint(params: MachineLearning.CreateRealtimeEndpointInput, callback?: (err: MachineLearning.InvalidInputException|MachineLearning.ResourceNotFoundException|MachineLearning.InternalServerException|any, data: MachineLearning.CreateRealtimeEndpointOutput|any) => void): Request;
      deleteBatchPrediction(params: MachineLearning.DeleteBatchPredictionInput, callback?: (err: MachineLearning.InvalidInputException|MachineLearning.ResourceNotFoundException|MachineLearning.InternalServerException|any, data: MachineLearning.DeleteBatchPredictionOutput|any) => void): Request;
      deleteDataSource(params: MachineLearning.DeleteDataSourceInput, callback?: (err: MachineLearning.InvalidInputException|MachineLearning.ResourceNotFoundException|MachineLearning.InternalServerException|any, data: MachineLearning.DeleteDataSourceOutput|any) => void): Request;
      deleteEvaluation(params: MachineLearning.DeleteEvaluationInput, callback?: (err: MachineLearning.InvalidInputException|MachineLearning.ResourceNotFoundException|MachineLearning.InternalServerException|any, data: MachineLearning.DeleteEvaluationOutput|any) => void): Request;
      deleteMLModel(params: MachineLearning.DeleteMLModelInput, callback?: (err: MachineLearning.InvalidInputException|MachineLearning.ResourceNotFoundException|MachineLearning.InternalServerException|any, data: MachineLearning.DeleteMLModelOutput|any) => void): Request;
      deleteRealtimeEndpoint(params: MachineLearning.DeleteRealtimeEndpointInput, callback?: (err: MachineLearning.InvalidInputException|MachineLearning.ResourceNotFoundException|MachineLearning.InternalServerException|any, data: MachineLearning.DeleteRealtimeEndpointOutput|any) => void): Request;
      describeBatchPredictions(params: MachineLearning.DescribeBatchPredictionsInput, callback?: (err: MachineLearning.InvalidInputException|MachineLearning.InternalServerException|any, data: MachineLearning.DescribeBatchPredictionsOutput|any) => void): Request;
      describeDataSources(params: MachineLearning.DescribeDataSourcesInput, callback?: (err: MachineLearning.InvalidInputException|MachineLearning.InternalServerException|any, data: MachineLearning.DescribeDataSourcesOutput|any) => void): Request;
      describeEvaluations(params: MachineLearning.DescribeEvaluationsInput, callback?: (err: MachineLearning.InvalidInputException|MachineLearning.InternalServerException|any, data: MachineLearning.DescribeEvaluationsOutput|any) => void): Request;
      describeMLModels(params: MachineLearning.DescribeMLModelsInput, callback?: (err: MachineLearning.InvalidInputException|MachineLearning.InternalServerException|any, data: MachineLearning.DescribeMLModelsOutput|any) => void): Request;
      getBatchPrediction(params: MachineLearning.GetBatchPredictionInput, callback?: (err: MachineLearning.InvalidInputException|MachineLearning.ResourceNotFoundException|MachineLearning.InternalServerException|any, data: MachineLearning.GetBatchPredictionOutput|any) => void): Request;
      getDataSource(params: MachineLearning.GetDataSourceInput, callback?: (err: MachineLearning.InvalidInputException|MachineLearning.ResourceNotFoundException|MachineLearning.InternalServerException|any, data: MachineLearning.GetDataSourceOutput|any) => void): Request;
      getEvaluation(params: MachineLearning.GetEvaluationInput, callback?: (err: MachineLearning.InvalidInputException|MachineLearning.ResourceNotFoundException|MachineLearning.InternalServerException|any, data: MachineLearning.GetEvaluationOutput|any) => void): Request;
      getMLModel(params: MachineLearning.GetMLModelInput, callback?: (err: MachineLearning.InvalidInputException|MachineLearning.ResourceNotFoundException|MachineLearning.InternalServerException|any, data: MachineLearning.GetMLModelOutput|any) => void): Request;
      predict(params: MachineLearning.PredictInput, callback?: (err: MachineLearning.InvalidInputException|MachineLearning.ResourceNotFoundException|MachineLearning.LimitExceededException|MachineLearning.InternalServerException|MachineLearning.PredictorNotMountedException|any, data: MachineLearning.PredictOutput|any) => void): Request;
      updateBatchPrediction(params: MachineLearning.UpdateBatchPredictionInput, callback?: (err: MachineLearning.InvalidInputException|MachineLearning.ResourceNotFoundException|MachineLearning.InternalServerException|any, data: MachineLearning.UpdateBatchPredictionOutput|any) => void): Request;
      updateDataSource(params: MachineLearning.UpdateDataSourceInput, callback?: (err: MachineLearning.InvalidInputException|MachineLearning.ResourceNotFoundException|MachineLearning.InternalServerException|any, data: MachineLearning.UpdateDataSourceOutput|any) => void): Request;
      updateEvaluation(params: MachineLearning.UpdateEvaluationInput, callback?: (err: MachineLearning.InvalidInputException|MachineLearning.ResourceNotFoundException|MachineLearning.InternalServerException|any, data: MachineLearning.UpdateEvaluationOutput|any) => void): Request;
      updateMLModel(params: MachineLearning.UpdateMLModelInput, callback?: (err: MachineLearning.InvalidInputException|MachineLearning.ResourceNotFoundException|MachineLearning.InternalServerException|any, data: MachineLearning.UpdateMLModelOutput|any) => void): Request;

      // Found on JS Sources - Sorry for the inconvenience :)
      setupRequestListeners(...args: any[]): any
      // Found on JS Sources - Sorry for the inconvenience :)
      buildEndpoint(...args: any[]): any
    }

    export module MachineLearning {
        export type Algorithm = string;
        export type AwsUserArn = string;    // pattern: &quot;arn:aws:iam::[0-9]+:((user/.+)|(root))&quot;
        export type BatchPredictionFilterVariable = string;
        export type BatchPredictions = BatchPrediction[];
        export type ComparatorValue = string;    // pattern: &quot;.*\S.*|^$&quot;, max: 1024
        export type ComputeStatistics = boolean;
        export type DataRearrangement = string;
        export type DataSchema = string;    // max: 131071
        export type DataSourceFilterVariable = string;
        export type DataSources = DataSource[];
        export type DetailsAttributes = string;
        export type DetailsMap = {[key:string]: DetailsValue};
        export type DetailsValue = string;    // min: 1
        export type EDPPipelineId = string;    // max: 1024, min: 1
        export type EDPResourceRole = string;    // max: 64, min: 1
        export type EDPSecurityGroupId = string;    // max: 255, min: 1
        export type EDPSecurityGroupIds = EDPSecurityGroupId[];
        export type EDPServiceRole = string;    // max: 64, min: 1
        export type EDPSubnetId = string;    // max: 255, min: 1
        export type EntityId = string;    // pattern: &quot;[a-zA-Z0-9_.-]+&quot;, max: 64, min: 1
        export type EntityName = string;    // pattern: &quot;.*\S.*|^$&quot;, max: 1024
        export type EntityStatus = string;
        export type EpochTime = number;
        export type ErrorCode = number;
        export type ErrorMessage = string;    // max: 2048
        export type EvaluationFilterVariable = string;
        export type Evaluations = Evaluation[];
        export type IntegerType = number;
        export type Label = string;    // min: 1
        export type LongType = number;
        export type MLModelFilterVariable = string;
        export type MLModelName = string;    // max: 1024
        export type MLModelType = string;
        export type MLModels = MLModel[];
        export type Message = string;    // max: 10240
        export type PageLimit = number;    // max: 100, min: 1
        export type PerformanceMetricsProperties = {[key:string]: PerformanceMetricsPropertyValue};
        export type PerformanceMetricsPropertyKey = string;
        export type PerformanceMetricsPropertyValue = string;
        export type PresignedS3Url = string;
        export type RDSDatabaseName = string;    // max: 64, min: 1
        export type RDSDatabasePassword = string;    // max: 128, min: 8
        export type RDSDatabaseUsername = string;    // max: 128, min: 1
        export type RDSInstanceIdentifier = string;    // pattern: &quot;[a-z0-9-]+&quot;, max: 63, min: 1
        export type RDSSelectSqlQuery = string;    // max: 16777216, min: 1
        export type RealtimeEndpointStatus = string;
        export type Recipe = string;    // max: 131071
        export type Record = {[key:string]: VariableValue};
        export type RedshiftClusterIdentifier = string;    // pattern: &quot;[a-z0-9-]+&quot;, max: 63, min: 1
        export type RedshiftDatabaseName = string;    // pattern: &quot;[a-z0-9]+&quot;, max: 64, min: 1
        export type RedshiftDatabasePassword = string;    // max: 64, min: 8
        export type RedshiftDatabaseUsername = string;    // max: 128, min: 1
        export type RedshiftSelectSqlQuery = string;    // max: 16777216, min: 1
        export type RoleARN = string;    // max: 100, min: 1
        export type S3Url = string;    // pattern: &quot;s3://([^/]+)(/.*)?&quot;, max: 2048
        export type ScoreThreshold = number;
        export type ScoreValue = number;
        export type ScoreValuePerLabelMap = {[key:string]: ScoreValue};
        export type SortOrder = string;
        export type StringType = string;
        export type TrainingParameters = {[key:string]: StringType};
        export type VariableName = string;
        export type VariableValue = string;
        export type Verbose = boolean;
        export type VipURL = string;    // pattern: &quot;https://[a-zA-Z0-9-.]*\.amazon(aws)?\.com[/]?&quot;, max: 2048
        export type floatLabel = number;

        export interface BatchPrediction {
            BatchPredictionId?: EntityId;
            MLModelId?: EntityId;
            BatchPredictionDataSourceId?: EntityId;
            InputDataLocationS3?: S3Url;
            CreatedByIamUser?: AwsUserArn;
            CreatedAt?: EpochTime;
            LastUpdatedAt?: EpochTime;
            Name?: EntityName;
            Status?: EntityStatus;
            OutputUri?: S3Url;
            Message?: Message;
        }
        export interface CreateBatchPredictionInput {
            BatchPredictionId: EntityId;
            BatchPredictionName?: EntityName;
            MLModelId: EntityId;
            BatchPredictionDataSourceId: EntityId;
            OutputUri: S3Url;
        }
        export interface CreateBatchPredictionOutput {
            BatchPredictionId?: EntityId;
        }
        export interface CreateDataSourceFromRDSInput {
            DataSourceId: EntityId;
            DataSourceName?: EntityName;
            RDSData: RDSDataSpec;
            RoleARN: RoleARN;
            ComputeStatistics?: ComputeStatistics;
        }
        export interface CreateDataSourceFromRDSOutput {
            DataSourceId?: EntityId;
        }
        export interface CreateDataSourceFromRedshiftInput {
            DataSourceId: EntityId;
            DataSourceName?: EntityName;
            DataSpec: RedshiftDataSpec;
            RoleARN: RoleARN;
            ComputeStatistics?: ComputeStatistics;
        }
        export interface CreateDataSourceFromRedshiftOutput {
            DataSourceId?: EntityId;
        }
        export interface CreateDataSourceFromS3Input {
            DataSourceId: EntityId;
            DataSourceName?: EntityName;
            DataSpec: S3DataSpec;
            ComputeStatistics?: ComputeStatistics;
        }
        export interface CreateDataSourceFromS3Output {
            DataSourceId?: EntityId;
        }
        export interface CreateEvaluationInput {
            EvaluationId: EntityId;
            EvaluationName?: EntityName;
            MLModelId: EntityId;
            EvaluationDataSourceId: EntityId;
        }
        export interface CreateEvaluationOutput {
            EvaluationId?: EntityId;
        }
        export interface CreateMLModelInput {
            MLModelId: EntityId;
            MLModelName?: EntityName;
            MLModelType: MLModelType;
            Parameters?: TrainingParameters;
            TrainingDataSourceId: EntityId;
            Recipe?: Recipe;
            RecipeUri?: S3Url;
        }
        export interface CreateMLModelOutput {
            MLModelId?: EntityId;
        }
        export interface CreateRealtimeEndpointInput {
            MLModelId: EntityId;
        }
        export interface CreateRealtimeEndpointOutput {
            MLModelId?: EntityId;
            RealtimeEndpointInfo?: RealtimeEndpointInfo;
        }
        export interface DataSource {
            DataSourceId?: EntityId;
            DataLocationS3?: S3Url;
            DataRearrangement?: DataRearrangement;
            CreatedByIamUser?: AwsUserArn;
            CreatedAt?: EpochTime;
            LastUpdatedAt?: EpochTime;
            DataSizeInBytes?: LongType;
            NumberOfFiles?: LongType;
            Name?: EntityName;
            Status?: EntityStatus;
            Message?: Message;
            RedshiftMetadata?: RedshiftMetadata;
            RDSMetadata?: RDSMetadata;
            RoleARN?: RoleARN;
            ComputeStatistics?: ComputeStatistics;
        }
        export interface DeleteBatchPredictionInput {
            BatchPredictionId: EntityId;
        }
        export interface DeleteBatchPredictionOutput {
            BatchPredictionId?: EntityId;
        }
        export interface DeleteDataSourceInput {
            DataSourceId: EntityId;
        }
        export interface DeleteDataSourceOutput {
            DataSourceId?: EntityId;
        }
        export interface DeleteEvaluationInput {
            EvaluationId: EntityId;
        }
        export interface DeleteEvaluationOutput {
            EvaluationId?: EntityId;
        }
        export interface DeleteMLModelInput {
            MLModelId: EntityId;
        }
        export interface DeleteMLModelOutput {
            MLModelId?: EntityId;
        }
        export interface DeleteRealtimeEndpointInput {
            MLModelId: EntityId;
        }
        export interface DeleteRealtimeEndpointOutput {
            MLModelId?: EntityId;
            RealtimeEndpointInfo?: RealtimeEndpointInfo;
        }
        export interface DescribeBatchPredictionsInput {
            FilterVariable?: BatchPredictionFilterVariable;
            EQ?: ComparatorValue;
            GT?: ComparatorValue;
            LT?: ComparatorValue;
            GE?: ComparatorValue;
            LE?: ComparatorValue;
            NE?: ComparatorValue;
            Prefix?: ComparatorValue;
            SortOrder?: SortOrder;
            NextToken?: StringType;
            Limit?: PageLimit;
        }
        export interface DescribeBatchPredictionsOutput {
            Results?: BatchPredictions;
            NextToken?: StringType;
        }
        export interface DescribeDataSourcesInput {
            FilterVariable?: DataSourceFilterVariable;
            EQ?: ComparatorValue;
            GT?: ComparatorValue;
            LT?: ComparatorValue;
            GE?: ComparatorValue;
            LE?: ComparatorValue;
            NE?: ComparatorValue;
            Prefix?: ComparatorValue;
            SortOrder?: SortOrder;
            NextToken?: StringType;
            Limit?: PageLimit;
        }
        export interface DescribeDataSourcesOutput {
            Results?: DataSources;
            NextToken?: StringType;
        }
        export interface DescribeEvaluationsInput {
            FilterVariable?: EvaluationFilterVariable;
            EQ?: ComparatorValue;
            GT?: ComparatorValue;
            LT?: ComparatorValue;
            GE?: ComparatorValue;
            LE?: ComparatorValue;
            NE?: ComparatorValue;
            Prefix?: ComparatorValue;
            SortOrder?: SortOrder;
            NextToken?: StringType;
            Limit?: PageLimit;
        }
        export interface DescribeEvaluationsOutput {
            Results?: Evaluations;
            NextToken?: StringType;
        }
        export interface DescribeMLModelsInput {
            FilterVariable?: MLModelFilterVariable;
            EQ?: ComparatorValue;
            GT?: ComparatorValue;
            LT?: ComparatorValue;
            GE?: ComparatorValue;
            LE?: ComparatorValue;
            NE?: ComparatorValue;
            Prefix?: ComparatorValue;
            SortOrder?: SortOrder;
            NextToken?: StringType;
            Limit?: PageLimit;
        }
        export interface DescribeMLModelsOutput {
            Results?: MLModels;
            NextToken?: StringType;
        }
        export interface Evaluation {
            EvaluationId?: EntityId;
            MLModelId?: EntityId;
            EvaluationDataSourceId?: EntityId;
            InputDataLocationS3?: S3Url;
            CreatedByIamUser?: AwsUserArn;
            CreatedAt?: EpochTime;
            LastUpdatedAt?: EpochTime;
            Name?: EntityName;
            Status?: EntityStatus;
            PerformanceMetrics?: PerformanceMetrics;
            Message?: Message;
        }
        export interface GetBatchPredictionInput {
            BatchPredictionId: EntityId;
        }
        export interface GetBatchPredictionOutput {
            BatchPredictionId?: EntityId;
            MLModelId?: EntityId;
            BatchPredictionDataSourceId?: EntityId;
            InputDataLocationS3?: S3Url;
            CreatedByIamUser?: AwsUserArn;
            CreatedAt?: EpochTime;
            LastUpdatedAt?: EpochTime;
            Name?: EntityName;
            Status?: EntityStatus;
            OutputUri?: S3Url;
            LogUri?: PresignedS3Url;
            Message?: Message;
        }
        export interface GetDataSourceInput {
            DataSourceId: EntityId;
            Verbose?: Verbose;
        }
        export interface GetDataSourceOutput {
            DataSourceId?: EntityId;
            DataLocationS3?: S3Url;
            DataRearrangement?: DataRearrangement;
            CreatedByIamUser?: AwsUserArn;
            CreatedAt?: EpochTime;
            LastUpdatedAt?: EpochTime;
            DataSizeInBytes?: LongType;
            NumberOfFiles?: LongType;
            Name?: EntityName;
            Status?: EntityStatus;
            LogUri?: PresignedS3Url;
            Message?: Message;
            RedshiftMetadata?: RedshiftMetadata;
            RDSMetadata?: RDSMetadata;
            RoleARN?: RoleARN;
            ComputeStatistics?: ComputeStatistics;
            DataSourceSchema?: DataSchema;
        }
        export interface GetEvaluationInput {
            EvaluationId: EntityId;
        }
        export interface GetEvaluationOutput {
            EvaluationId?: EntityId;
            MLModelId?: EntityId;
            EvaluationDataSourceId?: EntityId;
            InputDataLocationS3?: S3Url;
            CreatedByIamUser?: AwsUserArn;
            CreatedAt?: EpochTime;
            LastUpdatedAt?: EpochTime;
            Name?: EntityName;
            Status?: EntityStatus;
            PerformanceMetrics?: PerformanceMetrics;
            LogUri?: PresignedS3Url;
            Message?: Message;
        }
        export interface GetMLModelInput {
            MLModelId: EntityId;
            Verbose?: Verbose;
        }
        export interface GetMLModelOutput {
            MLModelId?: EntityId;
            TrainingDataSourceId?: EntityId;
            CreatedByIamUser?: AwsUserArn;
            CreatedAt?: EpochTime;
            LastUpdatedAt?: EpochTime;
            Name?: MLModelName;
            Status?: EntityStatus;
            SizeInBytes?: LongType;
            EndpointInfo?: RealtimeEndpointInfo;
            TrainingParameters?: TrainingParameters;
            InputDataLocationS3?: S3Url;
            MLModelType?: MLModelType;
            ScoreThreshold?: ScoreThreshold;
            ScoreThresholdLastUpdatedAt?: EpochTime;
            LogUri?: PresignedS3Url;
            Message?: Message;
            Recipe?: Recipe;
            Schema?: DataSchema;
        }
        export interface IdempotentParameterMismatchException {
            message?: ErrorMessage;
            code?: ErrorCode;
        }
        export interface InternalServerException {
            message?: ErrorMessage;
            code?: ErrorCode;
        }
        export interface InvalidInputException {
            message?: ErrorMessage;
            code?: ErrorCode;
        }
        export interface LimitExceededException {
            message?: ErrorMessage;
            code?: ErrorCode;
        }
        export interface MLModel {
            MLModelId?: EntityId;
            TrainingDataSourceId?: EntityId;
            CreatedByIamUser?: AwsUserArn;
            CreatedAt?: EpochTime;
            LastUpdatedAt?: EpochTime;
            Name?: MLModelName;
            Status?: EntityStatus;
            SizeInBytes?: LongType;
            EndpointInfo?: RealtimeEndpointInfo;
            TrainingParameters?: TrainingParameters;
            InputDataLocationS3?: S3Url;
            Algorithm?: Algorithm;
            MLModelType?: MLModelType;
            ScoreThreshold?: ScoreThreshold;
            ScoreThresholdLastUpdatedAt?: EpochTime;
            Message?: Message;
        }
        export interface PerformanceMetrics {
            Properties?: PerformanceMetricsProperties;
        }
        export interface PredictInput {
            MLModelId: EntityId;
            Record: Record;
            PredictEndpoint: VipURL;
        }
        export interface PredictOutput {
            Prediction?: Prediction;
        }
        export interface Prediction {
            predictedLabel?: Label;
            predictedValue?: floatLabel;
            predictedScores?: ScoreValuePerLabelMap;
            details?: DetailsMap;
        }
        export interface PredictorNotMountedException {
            message?: ErrorMessage;
        }
        export interface RDSDataSpec {
            DatabaseInformation: RDSDatabase;
            SelectSqlQuery: RDSSelectSqlQuery;
            DatabaseCredentials: RDSDatabaseCredentials;
            S3StagingLocation: S3Url;
            DataRearrangement?: DataRearrangement;
            DataSchema?: DataSchema;
            DataSchemaUri?: S3Url;
            ResourceRole: EDPResourceRole;
            ServiceRole: EDPServiceRole;
            SubnetId: EDPSubnetId;
            SecurityGroupIds: EDPSecurityGroupIds;
        }
        export interface RDSDatabase {
            InstanceIdentifier: RDSInstanceIdentifier;
            DatabaseName: RDSDatabaseName;
        }
        export interface RDSDatabaseCredentials {
            Username: RDSDatabaseUsername;
            Password: RDSDatabasePassword;
        }
        export interface RDSMetadata {
            Database?: RDSDatabase;
            DatabaseUserName?: RDSDatabaseUsername;
            SelectSqlQuery?: RDSSelectSqlQuery;
            ResourceRole?: EDPResourceRole;
            ServiceRole?: EDPServiceRole;
            DataPipelineId?: EDPPipelineId;
        }
        export interface RealtimeEndpointInfo {
            PeakRequestsPerSecond?: IntegerType;
            CreatedAt?: EpochTime;
            EndpointUrl?: VipURL;
            EndpointStatus?: RealtimeEndpointStatus;
        }
        export interface RedshiftDataSpec {
            DatabaseInformation: RedshiftDatabase;
            SelectSqlQuery: RedshiftSelectSqlQuery;
            DatabaseCredentials: RedshiftDatabaseCredentials;
            S3StagingLocation: S3Url;
            DataRearrangement?: DataRearrangement;
            DataSchema?: DataSchema;
            DataSchemaUri?: S3Url;
        }
        export interface RedshiftDatabase {
            DatabaseName: RedshiftDatabaseName;
            ClusterIdentifier: RedshiftClusterIdentifier;
        }
        export interface RedshiftDatabaseCredentials {
            Username: RedshiftDatabaseUsername;
            Password: RedshiftDatabasePassword;
        }
        export interface RedshiftMetadata {
            RedshiftDatabase?: RedshiftDatabase;
            DatabaseUserName?: RedshiftDatabaseUsername;
            SelectSqlQuery?: RedshiftSelectSqlQuery;
        }
        export interface ResourceNotFoundException {
            message?: ErrorMessage;
            code?: ErrorCode;
        }
        export interface S3DataSpec {
            DataLocationS3: S3Url;
            DataRearrangement?: DataRearrangement;
            DataSchema?: DataSchema;
            DataSchemaLocationS3?: S3Url;
        }
        export interface UpdateBatchPredictionInput {
            BatchPredictionId: EntityId;
            BatchPredictionName: EntityName;
        }
        export interface UpdateBatchPredictionOutput {
            BatchPredictionId?: EntityId;
        }
        export interface UpdateDataSourceInput {
            DataSourceId: EntityId;
            DataSourceName: EntityName;
        }
        export interface UpdateDataSourceOutput {
            DataSourceId?: EntityId;
        }
        export interface UpdateEvaluationInput {
            EvaluationId: EntityId;
            EvaluationName: EntityName;
        }
        export interface UpdateEvaluationOutput {
            EvaluationId?: EntityId;
        }
        export interface UpdateMLModelInput {
            MLModelId: EntityId;
            MLModelName?: EntityName;
            ScoreThreshold?: ScoreThreshold;
        }
        export interface UpdateMLModelOutput {
            MLModelId?: EntityId;
        }

    }
}
