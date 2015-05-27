// DO NOT EDIT!
//
declare module "aws-sdk" {
    export class MachineLearning {
      constructor(options?: any);
      createBatchPrediction(params: CreateBatchPredictionInput, callback: (err: InvalidInputException|InternalServerException|IdempotentParameterMismatchException|any, data: CreateBatchPredictionOutput|any) => void): void;
      createDataSourceFromRDS(params: CreateDataSourceFromRDSInput, callback: (err: InvalidInputException|InternalServerException|IdempotentParameterMismatchException|any, data: CreateDataSourceFromRDSOutput|any) => void): void;
      createDataSourceFromRedshift(params: CreateDataSourceFromRedshiftInput, callback: (err: InvalidInputException|InternalServerException|IdempotentParameterMismatchException|any, data: CreateDataSourceFromRedshiftOutput|any) => void): void;
      createDataSourceFromS3(params: CreateDataSourceFromS3Input, callback: (err: InvalidInputException|InternalServerException|IdempotentParameterMismatchException|any, data: CreateDataSourceFromS3Output|any) => void): void;
      createEvaluation(params: CreateEvaluationInput, callback: (err: InvalidInputException|InternalServerException|IdempotentParameterMismatchException|any, data: CreateEvaluationOutput|any) => void): void;
      createMLModel(params: CreateMLModelInput, callback: (err: InvalidInputException|InternalServerException|IdempotentParameterMismatchException|any, data: CreateMLModelOutput|any) => void): void;
      createRealtimeEndpoint(params: CreateRealtimeEndpointInput, callback: (err: InvalidInputException|ResourceNotFoundException|InternalServerException|any, data: CreateRealtimeEndpointOutput|any) => void): void;
      deleteBatchPrediction(params: DeleteBatchPredictionInput, callback: (err: InvalidInputException|ResourceNotFoundException|InternalServerException|any, data: DeleteBatchPredictionOutput|any) => void): void;
      deleteDataSource(params: DeleteDataSourceInput, callback: (err: InvalidInputException|ResourceNotFoundException|InternalServerException|any, data: DeleteDataSourceOutput|any) => void): void;
      deleteEvaluation(params: DeleteEvaluationInput, callback: (err: InvalidInputException|ResourceNotFoundException|InternalServerException|any, data: DeleteEvaluationOutput|any) => void): void;
      deleteMLModel(params: DeleteMLModelInput, callback: (err: InvalidInputException|ResourceNotFoundException|InternalServerException|any, data: DeleteMLModelOutput|any) => void): void;
      deleteRealtimeEndpoint(params: DeleteRealtimeEndpointInput, callback: (err: InvalidInputException|ResourceNotFoundException|InternalServerException|any, data: DeleteRealtimeEndpointOutput|any) => void): void;
      describeBatchPredictions(params: DescribeBatchPredictionsInput, callback: (err: InvalidInputException|InternalServerException|any, data: DescribeBatchPredictionsOutput|any) => void): void;
      describeDataSources(params: DescribeDataSourcesInput, callback: (err: InvalidInputException|InternalServerException|any, data: DescribeDataSourcesOutput|any) => void): void;
      describeEvaluations(params: DescribeEvaluationsInput, callback: (err: InvalidInputException|InternalServerException|any, data: DescribeEvaluationsOutput|any) => void): void;
      describeMLModels(params: DescribeMLModelsInput, callback: (err: InvalidInputException|InternalServerException|any, data: DescribeMLModelsOutput|any) => void): void;
      getBatchPrediction(params: GetBatchPredictionInput, callback: (err: InvalidInputException|ResourceNotFoundException|InternalServerException|any, data: GetBatchPredictionOutput|any) => void): void;
      getDataSource(params: GetDataSourceInput, callback: (err: InvalidInputException|ResourceNotFoundException|InternalServerException|any, data: GetDataSourceOutput|any) => void): void;
      getEvaluation(params: GetEvaluationInput, callback: (err: InvalidInputException|ResourceNotFoundException|InternalServerException|any, data: GetEvaluationOutput|any) => void): void;
      getMLModel(params: GetMLModelInput, callback: (err: InvalidInputException|ResourceNotFoundException|InternalServerException|any, data: GetMLModelOutput|any) => void): void;
      predict(params: PredictInput, callback: (err: InvalidInputException|ResourceNotFoundException|LimitExceededException|InternalServerException|PredictorNotMountedException|any, data: PredictOutput|any) => void): void;
      updateBatchPrediction(params: UpdateBatchPredictionInput, callback: (err: InvalidInputException|ResourceNotFoundException|InternalServerException|any, data: UpdateBatchPredictionOutput|any) => void): void;
      updateDataSource(params: UpdateDataSourceInput, callback: (err: InvalidInputException|ResourceNotFoundException|InternalServerException|any, data: UpdateDataSourceOutput|any) => void): void;
      updateEvaluation(params: UpdateEvaluationInput, callback: (err: InvalidInputException|ResourceNotFoundException|InternalServerException|any, data: UpdateEvaluationOutput|any) => void): void;
      updateMLModel(params: UpdateMLModelInput, callback: (err: InvalidInputException|ResourceNotFoundException|InternalServerException|any, data: UpdateMLModelOutput|any) => void): void;
    }

    export type Algorithm = string;

    export type AwsUserArn = string; // pattern: "arn:aws:iam::[0-9]+:((user/.+)|(root))"

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


    export type BatchPredictionFilterVariable = string;

    export type BatchPredictions = Array<BatchPrediction>;

    export type ComparatorValue = string; // pattern: ".*\S.*|^$"

    export type ComputeStatistics = boolean;

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


    export type DataRearrangement = string;

    export type DataSchema = string;

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


    export type DataSourceFilterVariable = string;

    export type DataSources = Array<DataSource>;

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


    export type DetailsAttributes = string;

    export type DetailsMap = any; // not really - it was 'map' instead - must fix this one

    export type DetailsValue = string;

    export type EDPPipelineId = string;

    export type EDPResourceRole = string;

    export type EDPSecurityGroupId = string;

    export type EDPSecurityGroupIds = Array<EDPSecurityGroupId>;

    export type EDPServiceRole = string;

    export type EDPSubnetId = string;

    export type EntityId = string; // pattern: "[a-zA-Z0-9_.-]+"

    export type EntityName = string; // pattern: ".*\S.*|^$"

    export type EntityStatus = string;

    export type EpochTime = number;

    export type ErrorCode = number;

    export type ErrorMessage = string;

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


    export type EvaluationFilterVariable = string;

    export type Evaluations = Array<Evaluation>;

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


    export type IntegerType = number;

    export interface InternalServerException {
      message?: ErrorMessage;
      code?: ErrorCode;
    }


    export interface InvalidInputException {
      message?: ErrorMessage;
      code?: ErrorCode;
    }


    export type Label = string;

    export interface LimitExceededException {
      message?: ErrorMessage;
      code?: ErrorCode;
    }


    export type LongType = number;

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


    export type MLModelFilterVariable = string;

    export type MLModelName = string;

    export type MLModelType = string;

    export type MLModels = Array<MLModel>;

    export type Message = string;

    export type PageLimit = number;

    export interface PerformanceMetrics {
      Properties?: PerformanceMetricsProperties;
    }


    export type PerformanceMetricsProperties = any; // not really - it was 'map' instead - must fix this one

    export type PerformanceMetricsPropertyKey = string;

    export type PerformanceMetricsPropertyValue = string;

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


    export type PresignedS3Url = string;

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


    export type RDSDatabaseName = string;

    export type RDSDatabasePassword = string;

    export type RDSDatabaseUsername = string;

    export type RDSInstanceIdentifier = string; // pattern: "[a-z0-9-]+"

    export interface RDSMetadata {
      Database?: RDSDatabase;
      DatabaseUserName?: RDSDatabaseUsername;
      SelectSqlQuery?: RDSSelectSqlQuery;
      ResourceRole?: EDPResourceRole;
      ServiceRole?: EDPServiceRole;
      DataPipelineId?: EDPPipelineId;
    }


    export type RDSSelectSqlQuery = string;

    export interface RealtimeEndpointInfo {
      PeakRequestsPerSecond?: IntegerType;
      CreatedAt?: EpochTime;
      EndpointUrl?: VipURL;
      EndpointStatus?: RealtimeEndpointStatus;
    }


    export type RealtimeEndpointStatus = string;

    export type Recipe = string;

    export type Record = any; // not really - it was 'map' instead - must fix this one

    export type RedshiftClusterIdentifier = string; // pattern: "[a-z0-9-]+"

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


    export type RedshiftDatabaseName = string; // pattern: "[a-z0-9]+"

    export type RedshiftDatabasePassword = string;

    export type RedshiftDatabaseUsername = string;

    export interface RedshiftMetadata {
      RedshiftDatabase?: RedshiftDatabase;
      DatabaseUserName?: RedshiftDatabaseUsername;
      SelectSqlQuery?: RedshiftSelectSqlQuery;
    }


    export type RedshiftSelectSqlQuery = string;

    export interface ResourceNotFoundException {
      message?: ErrorMessage;
      code?: ErrorCode;
    }


    export type RoleARN = string;

    export interface S3DataSpec {
      DataLocationS3: S3Url;
      DataRearrangement?: DataRearrangement;
      DataSchema?: DataSchema;
      DataSchemaLocationS3?: S3Url;
    }


    export type S3Url = string; // pattern: "s3://([^/]+)(/.*)?"

    export type ScoreThreshold = number;

    export type ScoreValue = number;

    export type ScoreValuePerLabelMap = any; // not really - it was 'map' instead - must fix this one

    export type SortOrder = string;

    export type StringType = string;

    export type TrainingParameters = any; // not really - it was 'map' instead - must fix this one

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


    export type VariableName = string;

    export type VariableValue = string; // pattern: "[a-zA-Z0-9_]*"

    export type Verbose = boolean;

    export type VipURL = string; // pattern: "https://[a-zA-Z0-9-.]*\.amazon(aws)?\.com[/]?"

    export type floatLabel = number;

}
