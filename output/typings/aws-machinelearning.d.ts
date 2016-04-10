// Type definitions for aws-sdk - Amazon Machine Learning
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

// COMMENTED <reference path="./aws-sdk.d.ts" />

declare module "aws-sdk" {

 /**
   * apiVersion: 2014-12-12
   * endpointPrefix: machinelearning
   * serviceAbbreviation: 
   * signatureVersion: v4
   * protocol: json
   *
   * Definition of the public APIs exposed by Amazon Machine Learning
   *
   */
  export class MachineLearning extends Service {
    constructor(options?: any);
    endpoint: Endpoint;
    /**
     * Generates predictions for a group of observations. The observations to process
exist in one or more data files referenced by a DataSource . This operation
creates a new BatchPrediction , and uses an MLModel and the data files
referenced by the DataSource as information sources.

CreateBatchPrediction is an asynchronous operation. In response to 
CreateBatchPrediction , Amazon Machine Learning (Amazon ML) immediately returns
and sets the BatchPrediction status to PENDING . After the BatchPrediction 
completes, Amazon ML sets the status to COMPLETED .

You can poll for status updates by using the GetBatchPrediction operation and
checking the Status parameter of the result. After the COMPLETED status appears,
the results are available in the location specified by the OutputUri parameter.
     *
     * @error InvalidInputException An error on the client occurred. Typically, the cause is an invalid input value.  
     * @error InternalServerException An error on the server occurred when trying to process a request.  
     * @error IdempotentParameterMismatchException A second request to use or change an object was not allowed. This can result
from retrying a request using a parameter that was not present in the original
request.  
     */
    createBatchPrediction(params: MachineLearning.CreateBatchPredictionInput, callback?: (err: MachineLearning.InvalidInputException|MachineLearning.InternalServerException|MachineLearning.IdempotentParameterMismatchException|any, data: MachineLearning.CreateBatchPredictionOutput|any) => void): Request;
    /**
     * Creates a DataSource object from an Amazon Relational Database Service
[http://aws.amazon.com/rds/] (Amazon RDS). A DataSource references data that can
be used to perform CreateMLModel , CreateEvaluation , or CreateBatchPrediction 
operations.

CreateDataSourceFromRDS is an asynchronous operation. In response to 
CreateDataSourceFromRDS , Amazon Machine Learning (Amazon ML) immediately
returns and sets the DataSource status to PENDING . After the DataSource is
created and ready for use, Amazon ML sets the Status parameter to COMPLETED . 
DataSource in COMPLETED or PENDING status can only be used to perform 
CreateMLModel , CreateEvaluation , or CreateBatchPrediction operations.

If Amazon ML cannot accept the input source, it sets the Status parameter to 
FAILED and includes an error message in the Message attribute of the 
GetDataSource operation response.
     *
     * @error InvalidInputException An error on the client occurred. Typically, the cause is an invalid input value.  
     * @error InternalServerException An error on the server occurred when trying to process a request.  
     * @error IdempotentParameterMismatchException A second request to use or change an object was not allowed. This can result
from retrying a request using a parameter that was not present in the original
request.  
     */
    createDataSourceFromRDS(params: MachineLearning.CreateDataSourceFromRDSInput, callback?: (err: MachineLearning.InvalidInputException|MachineLearning.InternalServerException|MachineLearning.IdempotentParameterMismatchException|any, data: MachineLearning.CreateDataSourceFromRDSOutput|any) => void): Request;
    /**
     * Creates a DataSource from Amazon Redshift [http://aws.amazon.com/redshift/] . A 
DataSource references data that can be used to perform either CreateMLModel , 
CreateEvaluation or CreateBatchPrediction operations.

CreateDataSourceFromRedshift is an asynchronous operation. In response to 
CreateDataSourceFromRedshift , Amazon Machine Learning (Amazon ML) immediately
returns and sets the DataSource status to PENDING . After the DataSource is
created and ready for use, Amazon ML sets the Status parameter to COMPLETED . 
DataSource in COMPLETED or PENDING status can only be used to perform 
CreateMLModel , CreateEvaluation , or CreateBatchPrediction operations.

If Amazon ML cannot accept the input source, it sets the Status parameter to 
FAILED and includes an error message in the Message attribute of the 
GetDataSource operation response.

The observations should exist in the database hosted on an Amazon Redshift
cluster and should be specified by a SelectSqlQuery . Amazon ML executes Unload
[http://docs.aws.amazon.com/redshift/latest/dg/t_Unloading_tables.html] command
in Amazon Redshift to transfer the result set of SelectSqlQuery to 
S3StagingLocation.

After the DataSource is created, it&#x27;s ready for use in evaluations and batch
predictions. If you plan to use the DataSource to train an MLModel , the 
DataSource requires another item -- a recipe. A recipe describes the observation
variables that participate in training an MLModel . A recipe describes how each
input variable will be used in training. Will the variable be included or
excluded from training? Will the variable be manipulated, for example, combined
with another variable or split apart into word combinations? The recipe provides
answers to these questions. For more information, see the Amazon Machine
Learning Developer Guide.
     *
     * @error InvalidInputException An error on the client occurred. Typically, the cause is an invalid input value.  
     * @error InternalServerException An error on the server occurred when trying to process a request.  
     * @error IdempotentParameterMismatchException A second request to use or change an object was not allowed. This can result
from retrying a request using a parameter that was not present in the original
request.  
     */
    createDataSourceFromRedshift(params: MachineLearning.CreateDataSourceFromRedshiftInput, callback?: (err: MachineLearning.InvalidInputException|MachineLearning.InternalServerException|MachineLearning.IdempotentParameterMismatchException|any, data: MachineLearning.CreateDataSourceFromRedshiftOutput|any) => void): Request;
    /**
     * Creates a DataSource object. A DataSource references data that can be used to
perform CreateMLModel , CreateEvaluation , or CreateBatchPrediction operations.

CreateDataSourceFromS3 is an asynchronous operation. In response to 
CreateDataSourceFromS3 , Amazon Machine Learning (Amazon ML) immediately returns
and sets the DataSource status to PENDING . After the DataSource is created and
ready for use, Amazon ML sets the Status parameter to COMPLETED . DataSource in 
COMPLETED or PENDING status can only be used to perform CreateMLModel , 
CreateEvaluation or CreateBatchPrediction operations.

If Amazon ML cannot accept the input source, it sets the Status parameter to 
FAILED and includes an error message in the Message attribute of the 
GetDataSource operation response.

The observation data used in a DataSource should be ready to use; that is, it
should have a consistent structure, and missing data values should be kept to a
minimum. The observation data must reside in one or more CSV files in an Amazon
Simple Storage Service (Amazon S3) bucket, along with a schema that describes
the data items by name and type. The same schema must be used for all of the
data files referenced by the DataSource .

After the DataSource has been created, it&#x27;s ready to use in evaluations and
batch predictions. If you plan to use the DataSource to train an MLModel , the 
DataSource requires another item: a recipe. A recipe describes the observation
variables that participate in training an MLModel . A recipe describes how each
input variable will be used in training. Will the variable be included or
excluded from training? Will the variable be manipulated, for example, combined
with another variable, or split apart into word combinations? The recipe
provides answers to these questions. For more information, see the Amazon
Machine Learning Developer Guide
[http://docs.aws.amazon.com/machine-learning/latest/dg] .
     *
     * @error InvalidInputException An error on the client occurred. Typically, the cause is an invalid input value.  
     * @error InternalServerException An error on the server occurred when trying to process a request.  
     * @error IdempotentParameterMismatchException A second request to use or change an object was not allowed. This can result
from retrying a request using a parameter that was not present in the original
request.  
     */
    createDataSourceFromS3(params: MachineLearning.CreateDataSourceFromS3Input, callback?: (err: MachineLearning.InvalidInputException|MachineLearning.InternalServerException|MachineLearning.IdempotentParameterMismatchException|any, data: MachineLearning.CreateDataSourceFromS3Output|any) => void): Request;
    /**
     * Creates a new Evaluation of an MLModel . An MLModel is evaluated on a set of
observations associated to a DataSource . Like a DataSource for an MLModel , the 
DataSource for an Evaluation contains values for the Target Variable. The 
Evaluation compares the predicted result for each observation to the actual
outcome and provides a summary so that you know how effective the MLModel 
functions on the test data. Evaluation generates a relevant performance metric
such as BinaryAUC, RegressionRMSE or MulticlassAvgFScore based on the
corresponding MLModelType : BINARY , REGRESSION or MULTICLASS .

CreateEvaluation is an asynchronous operation. In response to CreateEvaluation ,
Amazon Machine Learning (Amazon ML) immediately returns and sets the evaluation
status to PENDING . After the Evaluation is created and ready for use, Amazon ML
sets the status to COMPLETED .

You can use the GetEvaluation operation to check progress of the evaluation
during the creation operation.
     *
     * @error InvalidInputException An error on the client occurred. Typically, the cause is an invalid input value.  
     * @error InternalServerException An error on the server occurred when trying to process a request.  
     * @error IdempotentParameterMismatchException A second request to use or change an object was not allowed. This can result
from retrying a request using a parameter that was not present in the original
request.  
     */
    createEvaluation(params: MachineLearning.CreateEvaluationInput, callback?: (err: MachineLearning.InvalidInputException|MachineLearning.InternalServerException|MachineLearning.IdempotentParameterMismatchException|any, data: MachineLearning.CreateEvaluationOutput|any) => void): Request;
    /**
     * Creates a new MLModel using the data files and the recipe as information
sources.

An MLModel is nearly immutable. Users can only update the MLModelName and the 
ScoreThreshold in an MLModel without creating a new MLModel .

CreateMLModel is an asynchronous operation. In response to CreateMLModel ,
Amazon Machine Learning (Amazon ML) immediately returns and sets the MLModel 
status to PENDING . After the MLModel is created and ready for use, Amazon ML
sets the status to COMPLETED .

You can use the GetMLModel operation to check progress of the MLModel during the
creation operation.

CreateMLModel requires a DataSource with computed statistics, which can be
created by setting ComputeStatistics to true in CreateDataSourceFromRDS , 
CreateDataSourceFromS3 , or CreateDataSourceFromRedshift operations.
     *
     * @error InvalidInputException An error on the client occurred. Typically, the cause is an invalid input value.  
     * @error InternalServerException An error on the server occurred when trying to process a request.  
     * @error IdempotentParameterMismatchException A second request to use or change an object was not allowed. This can result
from retrying a request using a parameter that was not present in the original
request.  
     */
    createMLModel(params: MachineLearning.CreateMLModelInput, callback?: (err: MachineLearning.InvalidInputException|MachineLearning.InternalServerException|MachineLearning.IdempotentParameterMismatchException|any, data: MachineLearning.CreateMLModelOutput|any) => void): Request;
    /**
     * Creates a real-time endpoint for the MLModel . The endpoint contains the URI of
the MLModel ; that is, the location to send real-time prediction requests for
the specified MLModel .
     *
     * @error InvalidInputException An error on the client occurred. Typically, the cause is an invalid input value.  
     * @error ResourceNotFoundException A specified resource cannot be located.  
     * @error InternalServerException An error on the server occurred when trying to process a request.  
     */
    createRealtimeEndpoint(params: MachineLearning.CreateRealtimeEndpointInput, callback?: (err: MachineLearning.InvalidInputException|MachineLearning.ResourceNotFoundException|MachineLearning.InternalServerException|any, data: MachineLearning.CreateRealtimeEndpointOutput|any) => void): Request;
    /**
     * Assigns the DELETED status to a BatchPrediction , rendering it unusable.

After using the DeleteBatchPrediction operation, you can use the 
GetBatchPrediction operation to verify that the status of the BatchPrediction 
changed to DELETED.

Caution: The result of the DeleteBatchPrediction operation is irreversible.
     *
     * @error InvalidInputException An error on the client occurred. Typically, the cause is an invalid input value.  
     * @error ResourceNotFoundException A specified resource cannot be located.  
     * @error InternalServerException An error on the server occurred when trying to process a request.  
     */
    deleteBatchPrediction(params: MachineLearning.DeleteBatchPredictionInput, callback?: (err: MachineLearning.InvalidInputException|MachineLearning.ResourceNotFoundException|MachineLearning.InternalServerException|any, data: MachineLearning.DeleteBatchPredictionOutput|any) => void): Request;
    /**
     * Assigns the DELETED status to a DataSource , rendering it unusable.

After using the DeleteDataSource operation, you can use the GetDataSource 
operation to verify that the status of the DataSource changed to DELETED.

Caution: The results of the DeleteDataSource operation are irreversible.
     *
     * @error InvalidInputException An error on the client occurred. Typically, the cause is an invalid input value.  
     * @error ResourceNotFoundException A specified resource cannot be located.  
     * @error InternalServerException An error on the server occurred when trying to process a request.  
     */
    deleteDataSource(params: MachineLearning.DeleteDataSourceInput, callback?: (err: MachineLearning.InvalidInputException|MachineLearning.ResourceNotFoundException|MachineLearning.InternalServerException|any, data: MachineLearning.DeleteDataSourceOutput|any) => void): Request;
    /**
     * Assigns the DELETED status to an Evaluation , rendering it unusable.

After invoking the DeleteEvaluation operation, you can use the GetEvaluation 
operation to verify that the status of the Evaluation changed to DELETED .

Caution: The results of the DeleteEvaluation operation are irreversible.
     *
     * @error InvalidInputException An error on the client occurred. Typically, the cause is an invalid input value.  
     * @error ResourceNotFoundException A specified resource cannot be located.  
     * @error InternalServerException An error on the server occurred when trying to process a request.  
     */
    deleteEvaluation(params: MachineLearning.DeleteEvaluationInput, callback?: (err: MachineLearning.InvalidInputException|MachineLearning.ResourceNotFoundException|MachineLearning.InternalServerException|any, data: MachineLearning.DeleteEvaluationOutput|any) => void): Request;
    /**
     * Assigns the DELETED status to an MLModel , rendering it unusable.

After using the DeleteMLModel operation, you can use the GetMLModel operation to
verify that the status of the MLModel changed to DELETED.

Caution: The result of the DeleteMLModel operation is irreversible.
     *
     * @error InvalidInputException An error on the client occurred. Typically, the cause is an invalid input value.  
     * @error ResourceNotFoundException A specified resource cannot be located.  
     * @error InternalServerException An error on the server occurred when trying to process a request.  
     */
    deleteMLModel(params: MachineLearning.DeleteMLModelInput, callback?: (err: MachineLearning.InvalidInputException|MachineLearning.ResourceNotFoundException|MachineLearning.InternalServerException|any, data: MachineLearning.DeleteMLModelOutput|any) => void): Request;
    /**
     * Deletes a real time endpoint of an MLModel .
     *
     * @error InvalidInputException An error on the client occurred. Typically, the cause is an invalid input value.  
     * @error ResourceNotFoundException A specified resource cannot be located.  
     * @error InternalServerException An error on the server occurred when trying to process a request.  
     */
    deleteRealtimeEndpoint(params: MachineLearning.DeleteRealtimeEndpointInput, callback?: (err: MachineLearning.InvalidInputException|MachineLearning.ResourceNotFoundException|MachineLearning.InternalServerException|any, data: MachineLearning.DeleteRealtimeEndpointOutput|any) => void): Request;
    /**
     * Returns a list of BatchPrediction operations that match the search criteria in
the request.
     *
     * @error InvalidInputException An error on the client occurred. Typically, the cause is an invalid input value.  
     * @error InternalServerException An error on the server occurred when trying to process a request.  
     */
    describeBatchPredictions(params: MachineLearning.DescribeBatchPredictionsInput, callback?: (err: MachineLearning.InvalidInputException|MachineLearning.InternalServerException|any, data: MachineLearning.DescribeBatchPredictionsOutput|any) => void): Request;
    /**
     * Returns a list of DataSource that match the search criteria in the request.
     *
     * @error InvalidInputException An error on the client occurred. Typically, the cause is an invalid input value.  
     * @error InternalServerException An error on the server occurred when trying to process a request.  
     */
    describeDataSources(params: MachineLearning.DescribeDataSourcesInput, callback?: (err: MachineLearning.InvalidInputException|MachineLearning.InternalServerException|any, data: MachineLearning.DescribeDataSourcesOutput|any) => void): Request;
    /**
     * Returns a list of DescribeEvaluations that match the search criteria in the
request.
     *
     * @error InvalidInputException An error on the client occurred. Typically, the cause is an invalid input value.  
     * @error InternalServerException An error on the server occurred when trying to process a request.  
     */
    describeEvaluations(params: MachineLearning.DescribeEvaluationsInput, callback?: (err: MachineLearning.InvalidInputException|MachineLearning.InternalServerException|any, data: MachineLearning.DescribeEvaluationsOutput|any) => void): Request;
    /**
     * Returns a list of MLModel that match the search criteria in the request.
     *
     * @error InvalidInputException An error on the client occurred. Typically, the cause is an invalid input value.  
     * @error InternalServerException An error on the server occurred when trying to process a request.  
     */
    describeMLModels(params: MachineLearning.DescribeMLModelsInput, callback?: (err: MachineLearning.InvalidInputException|MachineLearning.InternalServerException|any, data: MachineLearning.DescribeMLModelsOutput|any) => void): Request;
    /**
     * Returns a BatchPrediction that includes detailed metadata, status, and data file
information for a Batch Prediction request.
     *
     * @error InvalidInputException An error on the client occurred. Typically, the cause is an invalid input value.  
     * @error ResourceNotFoundException A specified resource cannot be located.  
     * @error InternalServerException An error on the server occurred when trying to process a request.  
     */
    getBatchPrediction(params: MachineLearning.GetBatchPredictionInput, callback?: (err: MachineLearning.InvalidInputException|MachineLearning.ResourceNotFoundException|MachineLearning.InternalServerException|any, data: MachineLearning.GetBatchPredictionOutput|any) => void): Request;
    /**
     * Returns a DataSource that includes metadata and data file information, as well
as the current status of the DataSource .

GetDataSource provides results in normal or verbose format. The verbose format
adds the schema description and the list of files pointed to by the DataSource
to the normal format.
     *
     * @error InvalidInputException An error on the client occurred. Typically, the cause is an invalid input value.  
     * @error ResourceNotFoundException A specified resource cannot be located.  
     * @error InternalServerException An error on the server occurred when trying to process a request.  
     */
    getDataSource(params: MachineLearning.GetDataSourceInput, callback?: (err: MachineLearning.InvalidInputException|MachineLearning.ResourceNotFoundException|MachineLearning.InternalServerException|any, data: MachineLearning.GetDataSourceOutput|any) => void): Request;
    /**
     * Returns an Evaluation that includes metadata as well as the current status of
the Evaluation .
     *
     * @error InvalidInputException An error on the client occurred. Typically, the cause is an invalid input value.  
     * @error ResourceNotFoundException A specified resource cannot be located.  
     * @error InternalServerException An error on the server occurred when trying to process a request.  
     */
    getEvaluation(params: MachineLearning.GetEvaluationInput, callback?: (err: MachineLearning.InvalidInputException|MachineLearning.ResourceNotFoundException|MachineLearning.InternalServerException|any, data: MachineLearning.GetEvaluationOutput|any) => void): Request;
    /**
     * Returns an MLModel that includes detailed metadata, and data source information
as well as the current status of the MLModel .

GetMLModel provides results in normal or verbose format.
     *
     * @error InvalidInputException An error on the client occurred. Typically, the cause is an invalid input value.  
     * @error ResourceNotFoundException A specified resource cannot be located.  
     * @error InternalServerException An error on the server occurred when trying to process a request.  
     */
    getMLModel(params: MachineLearning.GetMLModelInput, callback?: (err: MachineLearning.InvalidInputException|MachineLearning.ResourceNotFoundException|MachineLearning.InternalServerException|any, data: MachineLearning.GetMLModelOutput|any) => void): Request;
    /**
     * Generates a prediction for the observation using the specified ML Model .

NoteNot all response parameters will be populated. Whether a response parameter
is populated depends on the type of model requested.
     *
     * @error InvalidInputException An error on the client occurred. Typically, the cause is an invalid input value.  
     * @error ResourceNotFoundException A specified resource cannot be located.  
     * @error LimitExceededException The subscriber exceeded the maximum number of operations. This exception can
occur when listing objects such as DataSource .  
     * @error InternalServerException An error on the server occurred when trying to process a request.  
     * @error PredictorNotMountedException The exception is thrown when a predict request is made to an unmounted MLModel .  
     */
    predict(params: MachineLearning.PredictInput, callback?: (err: MachineLearning.InvalidInputException|MachineLearning.ResourceNotFoundException|MachineLearning.LimitExceededException|MachineLearning.InternalServerException|MachineLearning.PredictorNotMountedException|any, data: MachineLearning.PredictOutput|any) => void): Request;
    /**
     * Updates the BatchPredictionName of a BatchPrediction .

You can use the GetBatchPrediction operation to view the contents of the updated
data element.
     *
     * @error InvalidInputException An error on the client occurred. Typically, the cause is an invalid input value.  
     * @error ResourceNotFoundException A specified resource cannot be located.  
     * @error InternalServerException An error on the server occurred when trying to process a request.  
     */
    updateBatchPrediction(params: MachineLearning.UpdateBatchPredictionInput, callback?: (err: MachineLearning.InvalidInputException|MachineLearning.ResourceNotFoundException|MachineLearning.InternalServerException|any, data: MachineLearning.UpdateBatchPredictionOutput|any) => void): Request;
    /**
     * Updates the DataSourceName of a DataSource .

You can use the GetDataSource operation to view the contents of the updated data
element.
     *
     * @error InvalidInputException An error on the client occurred. Typically, the cause is an invalid input value.  
     * @error ResourceNotFoundException A specified resource cannot be located.  
     * @error InternalServerException An error on the server occurred when trying to process a request.  
     */
    updateDataSource(params: MachineLearning.UpdateDataSourceInput, callback?: (err: MachineLearning.InvalidInputException|MachineLearning.ResourceNotFoundException|MachineLearning.InternalServerException|any, data: MachineLearning.UpdateDataSourceOutput|any) => void): Request;
    /**
     * Updates the EvaluationName of an Evaluation .

You can use the GetEvaluation operation to view the contents of the updated data
element.
     *
     * @error InvalidInputException An error on the client occurred. Typically, the cause is an invalid input value.  
     * @error ResourceNotFoundException A specified resource cannot be located.  
     * @error InternalServerException An error on the server occurred when trying to process a request.  
     */
    updateEvaluation(params: MachineLearning.UpdateEvaluationInput, callback?: (err: MachineLearning.InvalidInputException|MachineLearning.ResourceNotFoundException|MachineLearning.InternalServerException|any, data: MachineLearning.UpdateEvaluationOutput|any) => void): Request;
    /**
     * Updates the MLModelName and the ScoreThreshold of an MLModel .

You can use the GetMLModel operation to view the contents of the updated data
element.
     *
     * @error InvalidInputException An error on the client occurred. Typically, the cause is an invalid input value.  
     * @error ResourceNotFoundException A specified resource cannot be located.  
     * @error InternalServerException An error on the server occurred when trying to process a request.  
     */
    updateMLModel(params: MachineLearning.UpdateMLModelInput, callback?: (err: MachineLearning.InvalidInputException|MachineLearning.ResourceNotFoundException|MachineLearning.InternalServerException|any, data: MachineLearning.UpdateMLModelOutput|any) => void): Request;

  }

  export module MachineLearning {
    
    export type Algorithm = string;
    
    export type AwsUserArn = string;
    
    export type BatchPredictionFilterVariable = string;
    
    export type BatchPredictions = BatchPrediction[];
    
    export type ComparatorValue = string;
    
    export type ComputeStatistics = boolean;
    
    export type DataRearrangement = string;
    
    export type DataSchema = string;
    
    export type DataSourceFilterVariable = string;
    
    export type DataSources = DataSource[];
    
    export type DetailsAttributes = string;
    
    export type DetailsMap = {[key:string]: DetailsValue};
    
    export type DetailsValue = string;
    
    export type EDPPipelineId = string;
    
    export type EDPResourceRole = string;
    
    export type EDPSecurityGroupId = string;
    
    export type EDPSecurityGroupIds = EDPSecurityGroupId[];
    
    export type EDPServiceRole = string;
    
    export type EDPSubnetId = string;
    
    export type EntityId = string;
    
    export type EntityName = string;
    
    export type EntityStatus = string;
    
    export type EpochTime = number;
    
    export type ErrorCode = number;
    
    export type ErrorMessage = string;
    
    export type EvaluationFilterVariable = string;
    
    export type Evaluations = Evaluation[];
    
    export type IntegerType = number;
    
    export type Label = string;
    
    export type LongType = number;
    
    export type MLModelFilterVariable = string;
    
    export type MLModelName = string;
    
    export type MLModelType = string;
    
    export type MLModels = MLModel[];
    
    export type Message = string;
    
    export type PageLimit = number;
    
    export type PerformanceMetricsProperties = {[key:string]: PerformanceMetricsPropertyValue};
    
    export type PerformanceMetricsPropertyKey = string;
    
    export type PerformanceMetricsPropertyValue = string;
    
    export type PresignedS3Url = string;
    
    export type RDSDatabaseName = string;
    
    export type RDSDatabasePassword = string;
    
    export type RDSDatabaseUsername = string;
    
    export type RDSInstanceIdentifier = string;
    
    export type RDSSelectSqlQuery = string;
    
    export type RealtimeEndpointStatus = string;
    
    export type Recipe = string;
    
    export type Record = {[key:string]: VariableValue};
    
    export type RedshiftClusterIdentifier = string;
    
    export type RedshiftDatabaseName = string;
    
    export type RedshiftDatabasePassword = string;
    
    export type RedshiftDatabaseUsername = string;
    
    export type RedshiftSelectSqlQuery = string;
    
    export type RoleARN = string;
    
    export type S3Url = string;
    
    export type ScoreThreshold = number;
    
    export type ScoreValue = number;
    
    export type ScoreValuePerLabelMap = {[key:string]: ScoreValue};
    
    export type SortOrder = string;
    
    export type StringType = string;
    
    export type TrainingParameters = {[key:string]: StringType};
    
    export type VariableName = string;
    
    export type VariableValue = string;
    
    export type Verbose = boolean;
    
    export type VipURL = string;
    
    export type floatLabel = number;

    export interface BatchPrediction {
        /** The ID assigned to the BatchPrediction at creation. This value should be
identical to the value of the BatchPredictionID in the request. **/
        BatchPredictionId?: EntityId;
        /** The ID of the MLModel that generated predictions for the BatchPrediction 
request. **/
        MLModelId?: EntityId;
        /** The ID of the DataSource that points to the group of observations to predict. **/
        BatchPredictionDataSourceId?: EntityId;
        /** The location of the data file or directory in Amazon Simple Storage Service
(Amazon S3). **/
        InputDataLocationS3?: S3Url;
        /** The AWS user account that invoked the BatchPrediction . The account type can be
either an AWS root account or an AWS Identity and Access Management (IAM) user
account. **/
        CreatedByIamUser?: AwsUserArn;
        /** The time that the BatchPrediction was created. The time is expressed in epoch
time. **/
        CreatedAt?: EpochTime;
        /** The time of the most recent edit to the BatchPrediction . The time is expressed
in epoch time. **/
        LastUpdatedAt?: EpochTime;
        /** A user-supplied name or description of the BatchPrediction . **/
        Name?: EntityName;
        /** The status of the BatchPrediction . This element can have one of the following
values:

 &amp;#42; PENDING - Amazon Machine Learning (Amazon ML) submitted a request to generate
   predictions for a batch of observations.
 * INPROGRESS - The process is underway.
 * FAILED - The request to peform a batch prediction did not run to completion.
   It is not usable.
 * COMPLETED - The batch prediction process completed successfully.
 * DELETED - The BatchPrediction is marked as deleted. It is not usable. **/
        Status?: EntityStatus;
        /** The location of an Amazon S3 bucket or directory to receive the operation
results. The following substrings are not allowed in the s3 key portion of the
&quot;outputURI&quot; field: &#x27;:&#x27;, &#x27;//&#x27;, &#x27;/./&#x27;, &#x27;/../&#x27;. **/
        OutputUri?: S3Url;
        /** A description of the most recent details about processing the batch prediction
request. **/
        Message?: Message;
    }
    export interface CreateBatchPredictionInput {
        /** A user-supplied ID that uniquely identifies the BatchPrediction . **/
        BatchPredictionId: EntityId;
        /** A user-supplied name or description of the BatchPrediction . BatchPredictionName 
can only use the UTF-8 character set. **/
        BatchPredictionName?: EntityName;
        /** The ID of the MLModel that will generate predictions for the group of
observations. **/
        MLModelId: EntityId;
        /** The ID of the DataSource that points to the group of observations to predict. **/
        BatchPredictionDataSourceId: EntityId;
        /** The location of an Amazon Simple Storage Service (Amazon S3) bucket or directory
to store the batch prediction results. The following substrings are not allowed
in the s3 key portion of the &quot;outputURI&quot; field: &#x27;:&#x27;, &#x27;//&#x27;, &#x27;/./&#x27;, &#x27;/../&#x27;.

Amazon ML needs permissions to store and retrieve the logs on your behalf. For
information about how to set permissions, see the Amazon Machine Learning
Developer Guide [http://docs.aws.amazon.com/machine-learning/latest/dg] . **/
        OutputUri: S3Url;
    }
    export interface CreateBatchPredictionOutput {
        /** A user-supplied ID that uniquely identifies the BatchPrediction . This value is
identical to the value of the BatchPredictionId in the request. **/
        BatchPredictionId?: EntityId;
    }
    export interface CreateDataSourceFromRDSInput {
        /** A user-supplied ID that uniquely identifies the DataSource . Typically, an
Amazon Resource Number (ARN) becomes the ID for a DataSource . **/
        DataSourceId: EntityId;
        /** A user-supplied name or description of the DataSource . **/
        DataSourceName?: EntityName;
        /** The data specification of an Amazon RDS DataSource :

 &amp;#42; DatabaseInformation - * DatabaseName - Name of the Amazon RDS database.
    * InstanceIdentifier - Unique identifier for the Amazon RDS database
      instance.
   
   
   
   
 * DatabaseCredentials - AWS Identity and Access Management (IAM) credentials
   that are used to connect to the Amazon RDS database.
   
   
 * ResourceRole - Role (DataPipelineDefaultResourceRole) assumed by an Amazon
   Elastic Compute Cloud (EC2) instance to carry out the copy task from Amazon
   RDS to Amazon S3. For more information, see Role templates
   [http://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-iam-roles.html] 
   for data pipelines.
   
   
 * ServiceRole - Role (DataPipelineDefaultRole) assumed by the AWS Data Pipeline
   service to monitor the progress of the copy task from Amazon RDS to Amazon
   Simple Storage Service (S3). For more information, see Role templates
   [http://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-iam-roles.html] 
   for data pipelines.
   
   
 * SecurityInfo - Security information to use to access an Amazon RDS instance.
   You need to set up appropriate ingress rules for the security entity IDs
   provided to allow access to the Amazon RDS instance. Specify a [ SubnetId , 
   SecurityGroupIds ] pair for a VPC-based Amazon RDS instance.
   
   
 * SelectSqlQuery - Query that is used to retrieve the observation data for the 
   Datasource .
   
   
 * S3StagingLocation - Amazon S3 location for staging RDS data. The data
   retrieved from Amazon RDS using SelectSqlQuery is stored in this location.
   
   
 * DataSchemaUri - Amazon S3 location of the DataSchema .
   
   
 * DataSchema - A JSON string representing the schema. This is not required if 
   DataSchemaUri is specified.
   
   
 * DataRearrangement - A JSON string representing the splitting requirement of a 
   Datasource .
   
   
   Sample - &quot;{\&quot;splitting\&quot;:{\&quot;percentBegin\&quot;:10,\&quot;percentEnd\&quot;:60}}&quot; **/
        RDSData: RDSDataSpec;
        /** The role that Amazon ML assumes on behalf of the user to create and activate a
data pipeline in the user’s account and copy data (using the SelectSqlQuery )
query from Amazon RDS to Amazon S3. **/
        RoleARN: RoleARN;
        /** The compute statistics for a DataSource . The statistics are generated from the
observation data referenced by a DataSource . Amazon ML uses the statistics
internally during an MLModel training. This parameter must be set to true if the 
DataSource needs to be used for MLModel training. **/
        ComputeStatistics?: ComputeStatistics;
    }
    export interface CreateDataSourceFromRDSOutput {
        /** A user-supplied ID that uniquely identifies the datasource. This value should be
identical to the value of the DataSourceID in the request. **/
        DataSourceId?: EntityId;
    }
    export interface CreateDataSourceFromRedshiftInput {
        /** A user-supplied ID that uniquely identifies the DataSource . **/
        DataSourceId: EntityId;
        /** A user-supplied name or description of the DataSource . **/
        DataSourceName?: EntityName;
        /** The data specification of an Amazon Redshift DataSource :

 &amp;#42; DatabaseInformation - * DatabaseName - Name of the Amazon Redshift database.
    * ClusterIdentifier - Unique ID for the Amazon Redshift cluster.
   
   
   
   
 * DatabaseCredentials - AWS Identity abd Access Management (IAM) credentials
   that are used to connect to the Amazon Redshift database.
   
   
 * SelectSqlQuery - Query that is used to retrieve the observation data for the 
   Datasource .
   
   
 * S3StagingLocation - Amazon Simple Storage Service (Amazon S3) location for
   staging Amazon Redshift data. The data retrieved from Amazon Relational
   Database Service (Amazon RDS) using SelectSqlQuery is stored in this
   location.
   
   
 * DataSchemaUri - Amazon S3 location of the DataSchema .
   
   
 * DataSchema - A JSON string representing the schema. This is not required if 
   DataSchemaUri is specified.
   
   
 * DataRearrangement - A JSON string representing the splitting requirement of a 
   Datasource .
   
   
   Sample - &quot;{\&quot;splitting\&quot;:{\&quot;percentBegin\&quot;:10,\&quot;percentEnd\&quot;:60}}&quot; **/
        DataSpec: RedshiftDataSpec;
        /** A fully specified role Amazon Resource Name (ARN). Amazon ML assumes the role on
behalf of the user to create the following:

 &amp;#42; A security group to allow Amazon ML to execute the SelectSqlQuery query on an
   Amazon Redshift cluster
   
   
 * An Amazon S3 bucket policy to grant Amazon ML read/write permissions on the 
   S3StagingLocation **/
        RoleARN: RoleARN;
        /** The compute statistics for a DataSource . The statistics are generated from the
observation data referenced by a DataSource . Amazon ML uses the statistics
internally during MLModel training. This parameter must be set to true if the 
DataSource needs to be used for MLModel training **/
        ComputeStatistics?: ComputeStatistics;
    }
    export interface CreateDataSourceFromRedshiftOutput {
        /** A user-supplied ID that uniquely identifies the datasource. This value should be
identical to the value of the DataSourceID in the request. **/
        DataSourceId?: EntityId;
    }
    export interface CreateDataSourceFromS3Input {
        /** A user-supplied identifier that uniquely identifies the DataSource . **/
        DataSourceId: EntityId;
        /** A user-supplied name or description of the DataSource . **/
        DataSourceName?: EntityName;
        /** The data specification of a DataSource :

 &amp;#42; DataLocationS3 - Amazon Simple Storage Service (Amazon S3) location of the
   observation data.
   
   
 * DataSchemaLocationS3 - Amazon S3 location of the DataSchema .
   
   
 * DataSchema - A JSON string representing the schema. This is not required if 
   DataSchemaUri is specified.
   
   
 * DataRearrangement - A JSON string representing the splitting requirement of a 
   Datasource .
   
   
   Sample - &quot;{\&quot;splitting\&quot;:{\&quot;percentBegin\&quot;:10,\&quot;percentEnd\&quot;:60}}&quot; **/
        DataSpec: S3DataSpec;
        /** The compute statistics for a DataSource . The statistics are generated from the
observation data referenced by a DataSource . Amazon ML uses the statistics
internally during an MLModel training. This parameter must be set to true if the 
DataSource needs to be used for MLModel training **/
        ComputeStatistics?: ComputeStatistics;
    }
    export interface CreateDataSourceFromS3Output {
        /** A user-supplied ID that uniquely identifies the datasource. This value should be
identical to the value of the DataSourceID in the request. **/
        DataSourceId?: EntityId;
    }
    export interface CreateEvaluationInput {
        /** A user-supplied ID that uniquely identifies the Evaluation . **/
        EvaluationId: EntityId;
        /** A user-supplied name or description of the Evaluation . **/
        EvaluationName?: EntityName;
        /** The ID of the MLModel to evaluate.

The schema used in creating the MLModel must match the schema of the DataSource 
used in the Evaluation . **/
        MLModelId: EntityId;
        /** The ID of the DataSource for the evaluation. The schema of the DataSource must
match the schema used to create the MLModel . **/
        EvaluationDataSourceId: EntityId;
    }
    export interface CreateEvaluationOutput {
        /** The user-supplied ID that uniquely identifies the Evaluation . This value should
be identical to the value of the EvaluationId in the request. **/
        EvaluationId?: EntityId;
    }
    export interface CreateMLModelInput {
        /** A user-supplied ID that uniquely identifies the MLModel . **/
        MLModelId: EntityId;
        /** A user-supplied name or description of the MLModel . **/
        MLModelName?: EntityName;
        /** The category of supervised learning that this MLModel will address. Choose from
the following types:

 &amp;#42; Choose REGRESSION if the MLModel will be used to predict a numeric value.
 * Choose BINARY if the MLModel result has two possible values.
 * Choose MULTICLASS if the MLModel result has a limited number of values.

For more information, see the Amazon Machine Learning Developer Guide
[http://docs.aws.amazon.com/machine-learning/latest/dg] . **/
        MLModelType: MLModelType;
        /** A list of the training parameters in the MLModel . The list is implemented as a
map of key/value pairs.

The following is the current set of training parameters:

 &amp;#42; sgd.l1RegularizationAmount - Coefficient regularization L1 norm. It controls
   overfitting the data by penalizing large coefficients. This tends to drive
   coefficients to zero, resulting in sparse feature set. If you use this
   parameter, start by specifying a small value such as 1.0E-08.
   
   The value is a double that ranges from 0 to MAX_DOUBLE. The default is not to
   use L1 normalization. The parameter cannot be used when L2 is specified. Use
   this parameter sparingly.
   
   
 * sgd.l2RegularizationAmount - Coefficient regularization L2 norm. It controls
   overfitting the data by penalizing large coefficients. This tends to drive
   coefficients to small, nonzero values. If you use this parameter, start by
   specifying a small value such as 1.0E-08.
   
   The valuseis a double that ranges from 0 to MAX_DOUBLE. The default is not to
   use L2 normalization. This cannot be used when L1 is specified. Use this
   parameter sparingly.
   
   
 * sgd.maxPasses - Number of times that the training process traverses the
   observations to build the MLModel . The value is an integer that ranges from
   1 to 10000. The default value is 10.
   
   
 * sgd.maxMLModelSizeInBytes - Maximum allowed size of the model. Depending on
   the input data, the size of the model might affect its performance.
   
   The value is an integer that ranges from 100000 to 2147483648. The default
   value is 33554432. **/
        Parameters?: TrainingParameters;
        /** The DataSource that points to the training data. **/
        TrainingDataSourceId: EntityId;
        /** The data recipe for creating MLModel . You must specify either the recipe or its
URI. If you don’t specify a recipe or its URI, Amazon ML creates a default. **/
        Recipe?: Recipe;
        /** The Amazon Simple Storage Service (Amazon S3) location and file name that
contains the MLModel recipe. You must specify either the recipe or its URI. If
you don’t specify a recipe or its URI, Amazon ML creates a default. **/
        RecipeUri?: S3Url;
    }
    export interface CreateMLModelOutput {
        /** A user-supplied ID that uniquely identifies the MLModel . This value should be
identical to the value of the MLModelId in the request. **/
        MLModelId?: EntityId;
    }
    export interface CreateRealtimeEndpointInput {
        /** The ID assigned to the MLModel during creation. **/
        MLModelId: EntityId;
    }
    export interface CreateRealtimeEndpointOutput {
        /** A user-supplied ID that uniquely identifies the MLModel . This value should be
identical to the value of the MLModelId in the request. **/
        MLModelId?: EntityId;
        /** The endpoint information of the MLModel **/
        RealtimeEndpointInfo?: RealtimeEndpointInfo;
    }
    export interface DataSource {
        /** The ID that is assigned to the DataSource during creation. **/
        DataSourceId?: EntityId;
        /** The location and name of the data in Amazon Simple Storage Service (Amazon S3)
that is used by a DataSource . **/
        DataLocationS3?: S3Url;
        /** A JSON string that represents the splitting requirement of a Datasource . **/
        DataRearrangement?: DataRearrangement;
        /** The AWS user account from which the DataSource was created. The account type can
be either an AWS root account or an AWS Identity and Access Management (IAM)
user account. **/
        CreatedByIamUser?: AwsUserArn;
        /** The time that the DataSource was created. The time is expressed in epoch time. **/
        CreatedAt?: EpochTime;
        /** The time of the most recent edit to the BatchPrediction . The time is expressed
in epoch time. **/
        LastUpdatedAt?: EpochTime;
        /** The total number of observations contained in the data files that the DataSource 
references. **/
        DataSizeInBytes?: LongType;
        /** The number of data files referenced by the DataSource . **/
        NumberOfFiles?: LongType;
        /** A user-supplied name or description of the DataSource . **/
        Name?: EntityName;
        /** The current status of the DataSource . This element can have one of the
following values:

 &amp;#42; PENDING - Amazon Machine Learning (Amazon ML) submitted a request to create a 
   DataSource .
 * INPROGRESS - The creation process is underway.
 * FAILED - The request to create a DataSource did not run to completion. It is
   not usable.
 * COMPLETED - The creation process completed successfully.
 * DELETED - The DataSource is marked as deleted. It is not usable. **/
        Status?: EntityStatus;
        /** A description of the most recent details about creating the DataSource . **/
        Message?: Message;
        RedshiftMetadata?: RedshiftMetadata;
        RDSMetadata?: RDSMetadata;
        RoleARN?: RoleARN;
        /** The parameter is true if statistics need to be generated from the observation
data. **/
        ComputeStatistics?: ComputeStatistics;
    }
    export interface DeleteBatchPredictionInput {
        /** A user-supplied ID that uniquely identifies the BatchPrediction . **/
        BatchPredictionId: EntityId;
    }
    export interface DeleteBatchPredictionOutput {
        /** A user-supplied ID that uniquely identifies the BatchPrediction . This value
should be identical to the value of the BatchPredictionID in the request. **/
        BatchPredictionId?: EntityId;
    }
    export interface DeleteDataSourceInput {
        /** A user-supplied ID that uniquely identifies the DataSource . **/
        DataSourceId: EntityId;
    }
    export interface DeleteDataSourceOutput {
        /** A user-supplied ID that uniquely identifies the DataSource . This value should
be identical to the value of the DataSourceID in the request. **/
        DataSourceId?: EntityId;
    }
    export interface DeleteEvaluationInput {
        /** A user-supplied ID that uniquely identifies the Evaluation to delete. **/
        EvaluationId: EntityId;
    }
    export interface DeleteEvaluationOutput {
        /** A user-supplied ID that uniquely identifies the Evaluation . This value should
be identical to the value of the EvaluationId in the request. **/
        EvaluationId?: EntityId;
    }
    export interface DeleteMLModelInput {
        /** A user-supplied ID that uniquely identifies the MLModel . **/
        MLModelId: EntityId;
    }
    export interface DeleteMLModelOutput {
        /** A user-supplied ID that uniquely identifies the MLModel . This value should be
identical to the value of the MLModelID in the request. **/
        MLModelId?: EntityId;
    }
    export interface DeleteRealtimeEndpointInput {
        /** The ID assigned to the MLModel during creation. **/
        MLModelId: EntityId;
    }
    export interface DeleteRealtimeEndpointOutput {
        /** A user-supplied ID that uniquely identifies the MLModel . This value should be
identical to the value of the MLModelId in the request. **/
        MLModelId?: EntityId;
        /** The endpoint information of the MLModel **/
        RealtimeEndpointInfo?: RealtimeEndpointInfo;
    }
    export interface DescribeBatchPredictionsInput {
        /** Use one of the following variables to filter a list of BatchPrediction :

 &amp;#42; CreatedAt - Sets the search criteria to the BatchPrediction creation date.
 * Status - Sets the search criteria to the BatchPrediction status.
 * Name - Sets the search criteria to the contents of the BatchPrediction Name .
 * IAMUser - Sets the search criteria to the user account that invoked the 
   BatchPrediction creation.
 * MLModelId - Sets the search criteria to the MLModel used in the 
   BatchPrediction .
 * DataSourceId - Sets the search criteria to the DataSource used in the 
   BatchPrediction .
 * DataURI - Sets the search criteria to the data file(s) used in the 
   BatchPrediction . The URL can identify either a file or an Amazon Simple
   Storage Solution (Amazon S3) bucket or directory. **/
        FilterVariable?: BatchPredictionFilterVariable;
        /** The equal to operator. The BatchPrediction results will have FilterVariable 
values that exactly match the value specified with EQ . **/
        EQ?: ComparatorValue;
        /** The greater than operator. The BatchPrediction results will have FilterVariable 
values that are greater than the value specified with GT . **/
        GT?: ComparatorValue;
        /** The less than operator. The BatchPrediction results will have FilterVariable 
values that are less than the value specified with LT . **/
        LT?: ComparatorValue;
        /** The greater than or equal to operator. The BatchPrediction results will have 
FilterVariable values that are greater than or equal to the value specified with 
GE . **/
        GE?: ComparatorValue;
        /** The less than or equal to operator. The BatchPrediction results will have 
FilterVariable values that are less than or equal to the value specified with LE 
. **/
        LE?: ComparatorValue;
        /** The not equal to operator. The BatchPrediction results will have FilterVariable 
values not equal to the value specified with NE . **/
        NE?: ComparatorValue;
        /** A string that is found at the beginning of a variable, such as Name or Id .

For example, a Batch Prediction operation could have the Name 
2014-09-09-HolidayGiftMailer . To search for this BatchPrediction , select Name 
for the FilterVariable and any of the following strings for the Prefix :

 &amp;#42; 2014-09
   
   
 * 2014-09-09
   
   
 * 2014-09-09-Holiday **/
        Prefix?: ComparatorValue;
        /** A two-value parameter that determines the sequence of the resulting list of 
MLModel s.

 &amp;#42; asc - Arranges the list in ascending order (A-Z, 0-9).
 * dsc - Arranges the list in descending order (Z-A, 9-0).

Results are sorted by FilterVariable . **/
        SortOrder?: SortOrder;
        /** An ID of the page in the paginated results. **/
        NextToken?: StringType;
        /** The number of pages of information to include in the result. The range of
acceptable values is 1 through 100. The default value is 100. **/
        Limit?: PageLimit;
    }
    export interface DescribeBatchPredictionsOutput {
        /** A list of BatchPrediction objects that meet the search criteria. **/
        Results?: BatchPredictions;
        /** The ID of the next page in the paginated results that indicates at least one
more page follows. **/
        NextToken?: StringType;
    }
    export interface DescribeDataSourcesInput {
        /** Use one of the following variables to filter a list of DataSource :

 &amp;#42; CreatedAt - Sets the search criteria to DataSource creation dates.
 * Status - Sets the search criteria to DataSource statuses.
 * Name - Sets the search criteria to the contents of DataSource Name .
 * DataUri - Sets the search criteria to the URI of data files used to create
   the DataSource . The URI can identify either a file or an Amazon Simple
   Storage Service (Amazon S3) bucket or directory.
 * IAMUser - Sets the search criteria to the user account that invoked the 
   DataSource creation. **/
        FilterVariable?: DataSourceFilterVariable;
        /** The equal to operator. The DataSource results will have FilterVariable values
that exactly match the value specified with EQ . **/
        EQ?: ComparatorValue;
        /** The greater than operator. The DataSource results will have FilterVariable 
values that are greater than the value specified with GT . **/
        GT?: ComparatorValue;
        /** The less than operator. The DataSource results will have FilterVariable values
that are less than the value specified with LT . **/
        LT?: ComparatorValue;
        /** The greater than or equal to operator. The DataSource results will have 
FilterVariable values that are greater than or equal to the value specified with 
GE . **/
        GE?: ComparatorValue;
        /** The less than or equal to operator. The DataSource results will have 
FilterVariable values that are less than or equal to the value specified with LE 
. **/
        LE?: ComparatorValue;
        /** The not equal to operator. The DataSource results will have FilterVariable 
values not equal to the value specified with NE . **/
        NE?: ComparatorValue;
        /** A string that is found at the beginning of a variable, such as Name or Id .

For example, a DataSource could have the Name 2014-09-09-HolidayGiftMailer . To
search for this DataSource , select Name for the FilterVariable and any of the
following strings for the Prefix :

 &amp;#42; 2014-09
   
   
 * 2014-09-09
   
   
 * 2014-09-09-Holiday **/
        Prefix?: ComparatorValue;
        /** A two-value parameter that determines the sequence of the resulting list of 
DataSource .

 &amp;#42; asc - Arranges the list in ascending order (A-Z, 0-9).
 * dsc - Arranges the list in descending order (Z-A, 9-0).

Results are sorted by FilterVariable . **/
        SortOrder?: SortOrder;
        /** The ID of the page in the paginated results. **/
        NextToken?: StringType;
        /** The maximum number of DataSource to include in the result. **/
        Limit?: PageLimit;
    }
    export interface DescribeDataSourcesOutput {
        /** A list of DataSource that meet the search criteria. **/
        Results?: DataSources;
        /** An ID of the next page in the paginated results that indicates at least one more
page follows. **/
        NextToken?: StringType;
    }
    export interface DescribeEvaluationsInput {
        /** Use one of the following variable to filter a list of Evaluation objects:

 &amp;#42; CreatedAt - Sets the search criteria to the Evaluation creation date.
 * Status - Sets the search criteria to the Evaluation status.
 * Name - Sets the search criteria to the contents of Evaluation Name .
 * IAMUser - Sets the search criteria to the user account that invoked an 
   Evaluation .
 * MLModelId - Sets the search criteria to the MLModel that was evaluated.
 * DataSourceId - Sets the search criteria to the DataSource used in Evaluation 
   .
 * DataUri - Sets the search criteria to the data file(s) used in Evaluation .
   The URL can identify either a file or an Amazon Simple Storage Solution
   (Amazon S3) bucket or directory. **/
        FilterVariable?: EvaluationFilterVariable;
        /** The equal to operator. The Evaluation results will have FilterVariable values
that exactly match the value specified with EQ . **/
        EQ?: ComparatorValue;
        /** The greater than operator. The Evaluation results will have FilterVariable 
values that are greater than the value specified with GT . **/
        GT?: ComparatorValue;
        /** The less than operator. The Evaluation results will have FilterVariable values
that are less than the value specified with LT . **/
        LT?: ComparatorValue;
        /** The greater than or equal to operator. The Evaluation results will have 
FilterVariable values that are greater than or equal to the value specified with 
GE . **/
        GE?: ComparatorValue;
        /** The less than or equal to operator. The Evaluation results will have 
FilterVariable values that are less than or equal to the value specified with LE 
. **/
        LE?: ComparatorValue;
        /** The not equal to operator. The Evaluation results will have FilterVariable 
values not equal to the value specified with NE . **/
        NE?: ComparatorValue;
        /** A string that is found at the beginning of a variable, such as Name or Id .

For example, an Evaluation could have the Name 2014-09-09-HolidayGiftMailer . To
search for this Evaluation , select Name for the FilterVariable and any of the
following strings for the Prefix :

 &amp;#42; 2014-09
   
   
 * 2014-09-09
   
   
 * 2014-09-09-Holiday **/
        Prefix?: ComparatorValue;
        /** A two-value parameter that determines the sequence of the resulting list of 
Evaluation .

 &amp;#42; asc - Arranges the list in ascending order (A-Z, 0-9).
 * dsc - Arranges the list in descending order (Z-A, 9-0).

Results are sorted by FilterVariable . **/
        SortOrder?: SortOrder;
        /** The ID of the page in the paginated results. **/
        NextToken?: StringType;
        /** The maximum number of Evaluation to include in the result. **/
        Limit?: PageLimit;
    }
    export interface DescribeEvaluationsOutput {
        /** A list of Evaluation that meet the search criteria. **/
        Results?: Evaluations;
        /** The ID of the next page in the paginated results that indicates at least one
more page follows. **/
        NextToken?: StringType;
    }
    export interface DescribeMLModelsInput {
        /** Use one of the following variables to filter a list of MLModel :

 &amp;#42; CreatedAt - Sets the search criteria to MLModel creation date.
 * Status - Sets the search criteria to MLModel status.
 * Name - Sets the search criteria to the contents of MLModel Name .
 * IAMUser - Sets the search criteria to the user account that invoked the 
   MLModel creation.
 * TrainingDataSourceId - Sets the search criteria to the DataSource used to
   train one or more MLModel .
 * RealtimeEndpointStatus - Sets the search criteria to the MLModel real-time
   endpoint status.
 * MLModelType - Sets the search criteria to MLModel type: binary, regression,
   or multi-class.
 * Algorithm - Sets the search criteria to the algorithm that the MLModel uses.
 * TrainingDataURI - Sets the search criteria to the data file(s) used in
   training a MLModel . The URL can identify either a file or an Amazon Simple
   Storage Service (Amazon S3) bucket or directory. **/
        FilterVariable?: MLModelFilterVariable;
        /** The equal to operator. The MLModel results will have FilterVariable values that
exactly match the value specified with EQ . **/
        EQ?: ComparatorValue;
        /** The greater than operator. The MLModel results will have FilterVariable values
that are greater than the value specified with GT . **/
        GT?: ComparatorValue;
        /** The less than operator. The MLModel results will have FilterVariable values that
are less than the value specified with LT . **/
        LT?: ComparatorValue;
        /** The greater than or equal to operator. The MLModel results will have 
FilterVariable values that are greater than or equal to the value specified with 
GE . **/
        GE?: ComparatorValue;
        /** The less than or equal to operator. The MLModel results will have FilterVariable 
values that are less than or equal to the value specified with LE . **/
        LE?: ComparatorValue;
        /** The not equal to operator. The MLModel results will have FilterVariable values
not equal to the value specified with NE . **/
        NE?: ComparatorValue;
        /** A string that is found at the beginning of a variable, such as Name or Id .

For example, an MLModel could have the Name 2014-09-09-HolidayGiftMailer . To
search for this MLModel , select Name for the FilterVariable and any of the
following strings for the Prefix :

 &amp;#42; 2014-09
   
   
 * 2014-09-09
   
   
 * 2014-09-09-Holiday **/
        Prefix?: ComparatorValue;
        /** A two-value parameter that determines the sequence of the resulting list of 
MLModel .

 &amp;#42; asc - Arranges the list in ascending order (A-Z, 0-9).
 * dsc - Arranges the list in descending order (Z-A, 9-0).

Results are sorted by FilterVariable . **/
        SortOrder?: SortOrder;
        /** The ID of the page in the paginated results. **/
        NextToken?: StringType;
        /** The number of pages of information to include in the result. The range of
acceptable values is 1 through 100. The default value is 100. **/
        Limit?: PageLimit;
    }
    export interface DescribeMLModelsOutput {
        /** A list of MLModel that meet the search criteria. **/
        Results?: MLModels;
        /** The ID of the next page in the paginated results that indicates at least one
more page follows. **/
        NextToken?: StringType;
    }
    export interface Evaluation {
        /** The ID that is assigned to the Evaluation at creation. **/
        EvaluationId?: EntityId;
        /** The ID of the MLModel that is the focus of the evaluation. **/
        MLModelId?: EntityId;
        /** The ID of the DataSource that is used to evaluate the MLModel . **/
        EvaluationDataSourceId?: EntityId;
        /** The location and name of the data in Amazon Simple Storage Server (Amazon S3)
that is used in the evaluation. **/
        InputDataLocationS3?: S3Url;
        /** The AWS user account that invoked the evaluation. The account type can be either
an AWS root account or an AWS Identity and Access Management (IAM) user account. **/
        CreatedByIamUser?: AwsUserArn;
        /** The time that the Evaluation was created. The time is expressed in epoch time. **/
        CreatedAt?: EpochTime;
        /** The time of the most recent edit to the Evaluation . The time is expressed in
epoch time. **/
        LastUpdatedAt?: EpochTime;
        /** A user-supplied name or description of the Evaluation . **/
        Name?: EntityName;
        /** The status of the evaluation. This element can have one of the following values:

 &amp;#42; PENDING - Amazon Machine Learning (Amazon ML) submitted a request to evaluate
   an MLModel .
 * INPROGRESS - The evaluation is underway.
 * FAILED - The request to evaluate an MLModel did not run to completion. It is
   not usable.
 * COMPLETED - The evaluation process completed successfully.
 * DELETED - The Evaluation is marked as deleted. It is not usable. **/
        Status?: EntityStatus;
        /** Measurements of how well the MLModel performed, using observations referenced by
the DataSource . One of the following metrics is returned, based on the type of
the MLModel:

 &amp;#42; BinaryAUC: A binary MLModel uses the Area Under the Curve (AUC) technique to
   measure performance.
   
   
 * RegressionRMSE: A regression MLModel uses the Root Mean Square Error (RMSE)
   technique to measure performance. RMSE measures the difference between
   predicted and actual values for a single variable.
   
   
 * MulticlassAvgFScore: A multiclass MLModel uses the F1 score technique to
   measure performance.
   
   

For more information about performance metrics, please see the Amazon Machine
Learning Developer Guide [http://docs.aws.amazon.com/machine-learning/latest/dg] 
. **/
        PerformanceMetrics?: PerformanceMetrics;
        /** A description of the most recent details about evaluating the MLModel . **/
        Message?: Message;
    }
    export interface GetBatchPredictionInput {
        /** An ID assigned to the BatchPrediction at creation. **/
        BatchPredictionId: EntityId;
    }
    export interface GetBatchPredictionOutput {
        /** An ID assigned to the BatchPrediction at creation. This value should be
identical to the value of the BatchPredictionID in the request. **/
        BatchPredictionId?: EntityId;
        /** The ID of the MLModel that generated predictions for the BatchPrediction 
request. **/
        MLModelId?: EntityId;
        /** The ID of the DataSource that was used to create the BatchPrediction . **/
        BatchPredictionDataSourceId?: EntityId;
        /** The location of the data file or directory in Amazon Simple Storage Service
(Amazon S3). **/
        InputDataLocationS3?: S3Url;
        /** The AWS user account that invoked the BatchPrediction . The account type can be
either an AWS root account or an AWS Identity and Access Management (IAM) user
account. **/
        CreatedByIamUser?: AwsUserArn;
        /** The time when the BatchPrediction was created. The time is expressed in epoch
time. **/
        CreatedAt?: EpochTime;
        /** The time of the most recent edit to BatchPrediction . The time is expressed in
epoch time. **/
        LastUpdatedAt?: EpochTime;
        /** A user-supplied name or description of the BatchPrediction . **/
        Name?: EntityName;
        /** The status of the BatchPrediction , which can be one of the following values:

 &amp;#42; PENDING - Amazon Machine Learning (Amazon ML) submitted a request to generate
   batch predictions.
 * INPROGRESS - The batch predictions are in progress.
 * FAILED - The request to perform a batch prediction did not run to completion.
   It is not usable.
 * COMPLETED - The batch prediction process completed successfully.
 * DELETED - The BatchPrediction is marked as deleted. It is not usable. **/
        Status?: EntityStatus;
        /** The location of an Amazon S3 bucket or directory to receive the operation
results. **/
        OutputUri?: S3Url;
        /** A link to the file that contains logs of the CreateBatchPrediction operation. **/
        LogUri?: PresignedS3Url;
        /** A description of the most recent details about processing the batch prediction
request. **/
        Message?: Message;
    }
    export interface GetDataSourceInput {
        /** The ID assigned to the DataSource at creation. **/
        DataSourceId: EntityId;
        /** Specifies whether the GetDataSource operation should return DataSourceSchema .

If true, DataSourceSchema is returned.

If false, DataSourceSchema is not returned. **/
        Verbose?: Verbose;
    }
    export interface GetDataSourceOutput {
        /** The ID assigned to the DataSource at creation. This value should be identical to
the value of the DataSourceId in the request. **/
        DataSourceId?: EntityId;
        /** The location of the data file or directory in Amazon Simple Storage Service
(Amazon S3). **/
        DataLocationS3?: S3Url;
        /** A JSON string that captures the splitting rearrangement requirement of the 
DataSource . **/
        DataRearrangement?: DataRearrangement;
        /** The AWS user account from which the DataSource was created. The account type can
be either an AWS root account or an AWS Identity and Access Management (IAM)
user account. **/
        CreatedByIamUser?: AwsUserArn;
        /** The time that the DataSource was created. The time is expressed in epoch time. **/
        CreatedAt?: EpochTime;
        /** The time of the most recent edit to the DataSource . The time is expressed in
epoch time. **/
        LastUpdatedAt?: EpochTime;
        /** The total size of observations in the data files. **/
        DataSizeInBytes?: LongType;
        /** The number of data files referenced by the DataSource . **/
        NumberOfFiles?: LongType;
        /** A user-supplied name or description of the DataSource . **/
        Name?: EntityName;
        /** The current status of the DataSource . This element can have one of the
following values:

 &amp;#42; PENDING - Amazon Machine Language (Amazon ML) submitted a request to create a 
   DataSource .
 * INPROGRESS - The creation process is underway.
 * FAILED - The request to create a DataSource did not run to completion. It is
   not usable.
 * COMPLETED - The creation process completed successfully.
 * DELETED - The DataSource is marked as deleted. It is not usable. **/
        Status?: EntityStatus;
        /** A link to the file containining logs of either create DataSource operation. **/
        LogUri?: PresignedS3Url;
        /** The description of the most recent details about creating the DataSource . **/
        Message?: Message;
        RedshiftMetadata?: RedshiftMetadata;
        RDSMetadata?: RDSMetadata;
        RoleARN?: RoleARN;
        /** The parameter is true if statistics need to be generated from the observation
data. **/
        ComputeStatistics?: ComputeStatistics;
        /** The schema used by all of the data files of this DataSource .

NoteThis parameter is provided as part of the verbose format. **/
        DataSourceSchema?: DataSchema;
    }
    export interface GetEvaluationInput {
        /** The ID of the Evaluation to retrieve. The evaluation of each MLModel is recorded
and cataloged. The ID provides the means to access the information. **/
        EvaluationId: EntityId;
    }
    export interface GetEvaluationOutput {
        /** The evaluation ID which is same as the EvaluationId in the request. **/
        EvaluationId?: EntityId;
        /** The ID of the MLModel that was the focus of the evaluation. **/
        MLModelId?: EntityId;
        /** The DataSource used for this evaluation. **/
        EvaluationDataSourceId?: EntityId;
        /** The location of the data file or directory in Amazon Simple Storage Service
(Amazon S3). **/
        InputDataLocationS3?: S3Url;
        /** The AWS user account that invoked the evaluation. The account type can be either
an AWS root account or an AWS Identity and Access Management (IAM) user account. **/
        CreatedByIamUser?: AwsUserArn;
        /** The time that the Evaluation was created. The time is expressed in epoch time. **/
        CreatedAt?: EpochTime;
        /** The time of the most recent edit to the BatchPrediction . The time is expressed
in epoch time. **/
        LastUpdatedAt?: EpochTime;
        /** A user-supplied name or description of the Evaluation . **/
        Name?: EntityName;
        /** The status of the evaluation. This element can have one of the following values:

 &amp;#42; PENDING - Amazon Machine Language (Amazon ML) submitted a request to evaluate
   an MLModel .
 * INPROGRESS - The evaluation is underway.
 * FAILED - The request to evaluate an MLModel did not run to completion. It is
   not usable.
 * COMPLETED - The evaluation process completed successfully.
 * DELETED - The Evaluation is marked as deleted. It is not usable. **/
        Status?: EntityStatus;
        /** Measurements of how well the MLModel performed using observations referenced by
the DataSource . One of the following metric is returned based on the type of
the MLModel :

 &amp;#42; BinaryAUC: A binary MLModel uses the Area Under the Curve (AUC) technique to
   measure performance.
   
   
 * RegressionRMSE: A regression MLModel uses the Root Mean Square Error (RMSE)
   technique to measure performance. RMSE measures the difference between
   predicted and actual values for a single variable.
   
   
 * MulticlassAvgFScore: A multiclass MLModel uses the F1 score technique to
   measure performance.
   
   

For more information about performance metrics, please see the Amazon Machine
Learning Developer Guide [http://docs.aws.amazon.com/machine-learning/latest/dg] 
. **/
        PerformanceMetrics?: PerformanceMetrics;
        /** A link to the file that contains logs of the CreateEvaluation operation. **/
        LogUri?: PresignedS3Url;
        /** A description of the most recent details about evaluating the MLModel . **/
        Message?: Message;
    }
    export interface GetMLModelInput {
        /** The ID assigned to the MLModel at creation. **/
        MLModelId: EntityId;
        /** Specifies whether the GetMLModel operation should return Recipe .

If true, Recipe is returned.

If false, Recipe is not returned. **/
        Verbose?: Verbose;
    }
    export interface GetMLModelOutput {
        /** The MLModel ID which is same as the MLModelId in the request. **/
        MLModelId?: EntityId;
        /** The ID of the training DataSource . **/
        TrainingDataSourceId?: EntityId;
        /** The AWS user account from which the MLModel was created. The account type can be
either an AWS root account or an AWS Identity and Access Management (IAM) user
account. **/
        CreatedByIamUser?: AwsUserArn;
        /** The time that the MLModel was created. The time is expressed in epoch time. **/
        CreatedAt?: EpochTime;
        /** The time of the most recent edit to the MLModel . The time is expressed in epoch
time. **/
        LastUpdatedAt?: EpochTime;
        /** A user-supplied name or description of the MLModel . **/
        Name?: MLModelName;
        /** The current status of the MLModel . This element can have one of the following
values:

 &amp;#42; PENDING - Amazon Machine Learning (Amazon ML) submitted a request to describe
   a MLModel .
 * INPROGRESS - The request is processing.
 * FAILED - The request did not run to completion. It is not usable.
 * COMPLETED - The request completed successfully.
 * DELETED - The MLModel is marked as deleted. It is not usable. **/
        Status?: EntityStatus;
        SizeInBytes?: LongType;
        /** The current endpoint of the MLModel **/
        EndpointInfo?: RealtimeEndpointInfo;
        /** A list of the training parameters in the MLModel . The list is implemented as a
map of key/value pairs.

The following is the current set of training parameters:

 &amp;#42; sgd.l1RegularizationAmount - Coefficient regularization L1 norm. It controls
   overfitting the data by penalizing large coefficients. This tends to drive
   coefficients to zero, resulting in a sparse feature set. If you use this
   parameter, specify a small value, such as 1.0E-04 or 1.0E-08.
   
   The value is a double that ranges from 0 to MAX_DOUBLE. The default is not to
   use L1 normalization. The parameter cannot be used when L2 is specified. Use
   this parameter sparingly.
   
   
 * sgd.l2RegularizationAmount - Coefficient regularization L2 norm. It controls
   overfitting the data by penalizing large coefficients. This tends to drive
   coefficients to small, nonzero values. If you use this parameter, specify a
   small value, such as 1.0E-04 or 1.0E-08.
   
   The value is a double that ranges from 0 to MAX_DOUBLE. The default is not to
   use L2 normalization. This parameter cannot be used when L1 is specified. Use
   this parameter sparingly.
   
   
 * sgd.maxPasses - The number of times that the training process traverses the
   observations to build the MLModel . The value is an integer that ranges from
   1 to 10000. The default value is 10.
   
   
 * sgd.maxMLModelSizeInBytes - The maximum allowed size of the model. Depending
   on the input data, the model size might affect performance.
   
   The value is an integer that ranges from 100000 to 2147483648. The default
   value is 33554432. **/
        TrainingParameters?: TrainingParameters;
        /** The location of the data file or directory in Amazon Simple Storage Service
(Amazon S3). **/
        InputDataLocationS3?: S3Url;
        /** Identifies the MLModel category. The following are the available types:

 &amp;#42; REGRESSION -- Produces a numeric result. For example, &quot;What listing price
   should a house have?&quot;
 * BINARY -- Produces one of two possible results. For example, &quot;Is this an
   e-commerce website?&quot;
 * MULTICLASS -- Produces more than two possible results. For example, &quot;Is this
   a HIGH, LOW or MEDIUM risk trade?&quot; **/
        MLModelType?: MLModelType;
        /** The scoring threshold is used in binary classification MLModel s, and marks the
boundary between a positive prediction and a negative prediction.

Output values greater than or equal to the threshold receive a positive result
from the MLModel, such as true . Output values less than the threshold receive a
negative response from the MLModel, such as false . **/
        ScoreThreshold?: ScoreThreshold;
        /** The time of the most recent edit to the ScoreThreshold . The time is expressed
in epoch time. **/
        ScoreThresholdLastUpdatedAt?: EpochTime;
        /** A link to the file that contains logs of the CreateMLModel operation. **/
        LogUri?: PresignedS3Url;
        /** Description of the most recent details about accessing the MLModel . **/
        Message?: Message;
        /** The recipe to use when training the MLModel . The Recipe provides detailed
information about the observation data to use during training, as well as
manipulations to perform on the observation data during training.

NoteThis parameter is provided as part of the verbose format. **/
        Recipe?: Recipe;
        /** The schema used by all of the data files referenced by the DataSource .

NoteThis parameter is provided as part of the verbose format. **/
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
        /** The ID assigned to the MLModel at creation. **/
        MLModelId?: EntityId;
        /** The ID of the training DataSource . The CreateMLModel operation uses the 
TrainingDataSourceId . **/
        TrainingDataSourceId?: EntityId;
        /** The AWS user account from which the MLModel was created. The account type can be
either an AWS root account or an AWS Identity and Access Management (IAM) user
account. **/
        CreatedByIamUser?: AwsUserArn;
        /** The time that the MLModel was created. The time is expressed in epoch time. **/
        CreatedAt?: EpochTime;
        /** The time of the most recent edit to the MLModel . The time is expressed in epoch
time. **/
        LastUpdatedAt?: EpochTime;
        /** A user-supplied name or description of the MLModel . **/
        Name?: MLModelName;
        /** The current status of an MLModel . This element can have one of the following
values:

 &amp;#42; PENDING - Amazon Machine Learning (Amazon ML) submitted a request to create
   an MLModel .
 * INPROGRESS - The creation process is underway.
 * FAILED - The request to create an MLModel did not run to completion. It is
   not usable.
 * COMPLETED - The creation process completed successfully.
 * DELETED - The MLModel is marked as deleted. It is not usable. **/
        Status?: EntityStatus;
        SizeInBytes?: LongType;
        /** The current endpoint of the MLModel . **/
        EndpointInfo?: RealtimeEndpointInfo;
        /** A list of the training parameters in the MLModel . The list is implemented as a
map of key/value pairs.

The following is the current set of training parameters:

 &amp;#42; sgd.l1RegularizationAmount - Coefficient regularization L1 norm. It controls
   overfitting the data by penalizing large coefficients. This tends to drive
   coefficients to zero, resulting in a sparse feature set. If you use this
   parameter, specify a small value, such as 1.0E-04 or 1.0E-08.
   
   The value is a double that ranges from 0 to MAX_DOUBLE. The default is not to
   use L1 normalization. The parameter cannot be used when L2 is specified. Use
   this parameter sparingly.
   
   
 * sgd.l2RegularizationAmount - Coefficient regularization L2 norm. It controls
   overfitting the data by penalizing large coefficients. This tends to drive
   coefficients to small, nonzero values. If you use this parameter, specify a
   small value, such as 1.0E-04 or 1.0E-08.
   
   The valus is a double that ranges from 0 to MAX_DOUBLE. The default is not to
   use L2 normalization. This cannot be used when L1 is specified. Use this
   parameter sparingly.
   
   
 * sgd.maxPasses - Number of times that the training process traverses the
   observations to build the MLModel . The value is an integer that ranges from
   1 to 10000. The default value is 10.
   
   
 * sgd.maxMLModelSizeInBytes - Maximum allowed size of the model. Depending on
   the input data, the model size might affect performance.
   
   The value is an integer that ranges from 100000 to 2147483648. The default
   value is 33554432. **/
        TrainingParameters?: TrainingParameters;
        /** The location of the data file or directory in Amazon Simple Storage Service
(Amazon S3). **/
        InputDataLocationS3?: S3Url;
        /** The algorithm used to train the MLModel . The following algorithm is supported:

 &amp;#42; SGD -- Stochastic gradient descent. The goal of SGD is to minimize the
   gradient of the loss function. **/
        Algorithm?: Algorithm;
        /** Identifies the MLModel category. The following are the available types:

 &amp;#42; REGRESSION - Produces a numeric result. For example, &quot;What listing price
   should a house have?&quot;.
 * BINARY - Produces one of two possible results. For example, &quot;Is this a
   child-friendly web site?&quot;.
 * MULTICLASS - Produces more than two possible results. For example, &quot;Is this a
   HIGH, LOW or MEDIUM risk trade?&quot;. **/
        MLModelType?: MLModelType;
        ScoreThreshold?: ScoreThreshold;
        /** The time of the most recent edit to the ScoreThreshold . The time is expressed
in epoch time. **/
        ScoreThresholdLastUpdatedAt?: EpochTime;
        /** A description of the most recent details about accessing the MLModel . **/
        Message?: Message;
    }
    export interface PerformanceMetrics {
        Properties?: PerformanceMetricsProperties;
    }
    export interface PredictInput {
        /** A unique identifier of the MLModel . **/
        MLModelId: EntityId;
        Record: Record;
        PredictEndpoint: VipURL;
    }
    export interface PredictOutput {
        Prediction?: Prediction;
    }
    export interface Prediction {
        /** The prediction label for either a BINARY or MULTICLASS MLModel . **/
        predictedLabel?: Label;
        /** The prediction value for REGRESSION MLModel . **/
        predictedValue?: floatLabel;
        predictedScores?: ScoreValuePerLabelMap;
        details?: DetailsMap;
    }
    export interface PredictorNotMountedException {
        message?: ErrorMessage;
    }
    export interface RDSDataSpec {
        /** Describes the DatabaseName and InstanceIdentifier of an an Amazon RDS database. **/
        DatabaseInformation: RDSDatabase;
        /** The query that is used to retrieve the observation data for the DataSource . **/
        SelectSqlQuery: RDSSelectSqlQuery;
        /** The AWS Identity and Access Management (IAM) credentials that are used connect
to the Amazon RDS database. **/
        DatabaseCredentials: RDSDatabaseCredentials;
        /** The Amazon S3 location for staging Amazon RDS data. The data retrieved from
Amazon RDS using SelectSqlQuery is stored in this location. **/
        S3StagingLocation: S3Url;
        /** DataRearrangement - A JSON string that represents the splitting requirement of a 
DataSource .


Sample - &quot;{\&quot;splitting\&quot;:{\&quot;percentBegin\&quot;:10,\&quot;percentEnd\&quot;:60}}&quot; **/
        DataRearrangement?: DataRearrangement;
        /** A JSON string that represents the schema for an Amazon RDS DataSource . The 
DataSchema defines the structure of the observation data in the data file(s)
referenced in the DataSource .

A DataSchema is not required if you specify a DataSchemaUri

Define your DataSchema as a series of key-value pairs. attributes and 
excludedVariableNames have an array of key-value pairs for their value. Use the
following format to define your DataSchema .

{ &quot;version&quot;: &quot;1.0&quot;,

&quot;recordAnnotationFieldName&quot;: &quot;F1&quot;,

&quot;recordWeightFieldName&quot;: &quot;F2&quot;,

&quot;targetFieldName&quot;: &quot;F3&quot;,

&quot;dataFormat&quot;: &quot;CSV&quot;,

&quot;dataFileContainsHeader&quot;: true,

&quot;attributes&quot;: [

{ &quot;fieldName&quot;: &quot;F1&quot;, &quot;fieldType&quot;: &quot;TEXT&quot; }, { &quot;fieldName&quot;: &quot;F2&quot;, &quot;fieldType&quot;:
&quot;NUMERIC&quot; }, { &quot;fieldName&quot;: &quot;F3&quot;, &quot;fieldType&quot;: &quot;CATEGORICAL&quot; }, { &quot;fieldName&quot;:
&quot;F4&quot;, &quot;fieldType&quot;: &quot;NUMERIC&quot; }, { &quot;fieldName&quot;: &quot;F5&quot;, &quot;fieldType&quot;: &quot;CATEGORICAL&quot;
}, { &quot;fieldName&quot;: &quot;F6&quot;, &quot;fieldType&quot;: &quot;TEXT&quot; }, { &quot;fieldName&quot;: &quot;F7&quot;, &quot;fieldType&quot;:
&quot;WEIGHTED_INT_SEQUENCE&quot; }, { &quot;fieldName&quot;: &quot;F8&quot;, &quot;fieldType&quot;:
&quot;WEIGHTED_STRING_SEQUENCE&quot; } ],

&quot;excludedVariableNames&quot;: [ &quot;F6&quot; ] } **/
        DataSchema?: DataSchema;
        /** The Amazon S3 location of the DataSchema . **/
        DataSchemaUri?: S3Url;
        /** The role (DataPipelineDefaultResourceRole) assumed by an Amazon Elastic Compute
Cloud (Amazon EC2) instance to carry out the copy operation from Amazon RDS to
an Amazon S3 task. For more information, see Role templates
[http://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-iam-roles.html] 
for data pipelines. **/
        ResourceRole: EDPResourceRole;
        /** The role (DataPipelineDefaultRole) assumed by AWS Data Pipeline service to
monitor the progress of the copy task from Amazon RDS to Amazon S3. For more
information, see Role templates
[http://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-iam-roles.html] 
for data pipelines. **/
        ServiceRole: EDPServiceRole;
        /** The subnet ID to be used to access a VPC-based RDS DB instance. This attribute
is used by Data Pipeline to carry out the copy task from Amazon RDS to Amazon
S3. **/
        SubnetId: EDPSubnetId;
        /** The security group IDs to be used to access a VPC-based RDS DB instance. Ensure
that there are appropriate ingress rules set up to allow access to the RDS DB
instance. This attribute is used by Data Pipeline to carry out the copy
operation from Amazon RDS to an Amazon S3 task. **/
        SecurityGroupIds: EDPSecurityGroupIds;
    }
    export interface RDSDatabase {
        /** The ID of an RDS DB instance. **/
        InstanceIdentifier: RDSInstanceIdentifier;
        DatabaseName: RDSDatabaseName;
    }
    export interface RDSDatabaseCredentials {
        Username: RDSDatabaseUsername;
        Password: RDSDatabasePassword;
    }
    export interface RDSMetadata {
        /** The database details required to connect to an Amazon RDS. **/
        Database?: RDSDatabase;
        DatabaseUserName?: RDSDatabaseUsername;
        /** The SQL query that is supplied during CreateDataSourceFromRDS . Returns only if 
Verbose is true in GetDataSourceInput . **/
        SelectSqlQuery?: RDSSelectSqlQuery;
        /** The role (DataPipelineDefaultResourceRole) assumed by an Amazon EC2 instance to
carry out the copy task from Amazon RDS to Amazon S3. For more information, see 
Role templates
[http://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-iam-roles.html] 
for data pipelines. **/
        ResourceRole?: EDPResourceRole;
        /** The role (DataPipelineDefaultRole) assumed by the Data Pipeline service to
monitor the progress of the copy task from Amazon RDS to Amazon S3. For more
information, see Role templates
[http://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-iam-roles.html] 
for data pipelines. **/
        ServiceRole?: EDPServiceRole;
        /** The ID of the Data Pipeline instance that is used to carry to copy data from
Amazon RDS to Amazon S3. You can use the ID to find details about the instance
in the Data Pipeline console. **/
        DataPipelineId?: EDPPipelineId;
    }
    export interface RealtimeEndpointInfo {
        /** The maximum processing rate for the real-time endpoint for MLModel , measured in
incoming requests per second. **/
        PeakRequestsPerSecond?: IntegerType;
        /** The time that the request to create the real-time endpoint for the MLModel was
received. The time is expressed in epoch time. **/
        CreatedAt?: EpochTime;
        /** The URI that specifies where to send real-time prediction requests for the 
MLModel .

NoteThe application must wait until the real-time endpoint is ready before using
this URI. **/
        EndpointUrl?: VipURL;
        /** The current status of the real-time endpoint for the MLModel . This element can
have one of the following values:

 &amp;#42; NONE - Endpoint does not exist or was previously deleted.
 * READY - Endpoint is ready to be used for real-time predictions.
 * UPDATING - Updating/creating the endpoint. **/
        EndpointStatus?: RealtimeEndpointStatus;
    }
    export interface RedshiftDataSpec {
        /** Describes the DatabaseName and ClusterIdentifier for an Amazon Redshift 
DataSource . **/
        DatabaseInformation: RedshiftDatabase;
        /** Describes the SQL Query to execute on an Amazon Redshift database for an Amazon
Redshift DataSource . **/
        SelectSqlQuery: RedshiftSelectSqlQuery;
        /** Describes AWS Identity and Access Management (IAM) credentials that are used
connect to the Amazon Redshift database. **/
        DatabaseCredentials: RedshiftDatabaseCredentials;
        /** Describes an Amazon S3 location to store the result set of the SelectSqlQuery 
query. **/
        S3StagingLocation: S3Url;
        /** Describes the splitting specifications for a DataSource . **/
        DataRearrangement?: DataRearrangement;
        /** A JSON string that represents the schema for an Amazon Redshift DataSource . The 
DataSchema defines the structure of the observation data in the data file(s)
referenced in the DataSource .

A DataSchema is not required if you specify a DataSchemaUri .

Define your DataSchema as a series of key-value pairs. attributes and 
excludedVariableNames have an array of key-value pairs for their value. Use the
following format to define your DataSchema .

{ &quot;version&quot;: &quot;1.0&quot;,

&quot;recordAnnotationFieldName&quot;: &quot;F1&quot;,

&quot;recordWeightFieldName&quot;: &quot;F2&quot;,

&quot;targetFieldName&quot;: &quot;F3&quot;,

&quot;dataFormat&quot;: &quot;CSV&quot;,

&quot;dataFileContainsHeader&quot;: true,

&quot;attributes&quot;: [

{ &quot;fieldName&quot;: &quot;F1&quot;, &quot;fieldType&quot;: &quot;TEXT&quot; }, { &quot;fieldName&quot;: &quot;F2&quot;, &quot;fieldType&quot;:
&quot;NUMERIC&quot; }, { &quot;fieldName&quot;: &quot;F3&quot;, &quot;fieldType&quot;: &quot;CATEGORICAL&quot; }, { &quot;fieldName&quot;:
&quot;F4&quot;, &quot;fieldType&quot;: &quot;NUMERIC&quot; }, { &quot;fieldName&quot;: &quot;F5&quot;, &quot;fieldType&quot;: &quot;CATEGORICAL&quot;
}, { &quot;fieldName&quot;: &quot;F6&quot;, &quot;fieldType&quot;: &quot;TEXT&quot; }, { &quot;fieldName&quot;: &quot;F7&quot;, &quot;fieldType&quot;:
&quot;WEIGHTED_INT_SEQUENCE&quot; }, { &quot;fieldName&quot;: &quot;F8&quot;, &quot;fieldType&quot;:
&quot;WEIGHTED_STRING_SEQUENCE&quot; } ],

&quot;excludedVariableNames&quot;: [ &quot;F6&quot; ] } **/
        DataSchema?: DataSchema;
        /** Describes the schema location for an Amazon Redshift DataSource . **/
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
        /** The SQL query that is specified during CreateDataSourceFromRedshift . Returns
only if Verbose is true in GetDataSourceInput. **/
        SelectSqlQuery?: RedshiftSelectSqlQuery;
    }
    export interface ResourceNotFoundException {
        message?: ErrorMessage;
        code?: ErrorCode;
    }
    export interface S3DataSpec {
        /** The location of the data file(s) used by a DataSource . The URI specifies a data
file or an Amazon Simple Storage Service (Amazon S3) directory or bucket
containing data files. **/
        DataLocationS3: S3Url;
        /** Describes the splitting requirement of a Datasource . **/
        DataRearrangement?: DataRearrangement;
        /** A JSON string that represents the schema for an Amazon S3 DataSource . The 
DataSchema defines the structure of the observation data in the data file(s)
referenced in the DataSource .

Define your DataSchema as a series of key-value pairs. attributes and 
excludedVariableNames have an array of key-value pairs for their value. Use the
following format to define your DataSchema .

{ &quot;version&quot;: &quot;1.0&quot;,

&quot;recordAnnotationFieldName&quot;: &quot;F1&quot;,

&quot;recordWeightFieldName&quot;: &quot;F2&quot;,

&quot;targetFieldName&quot;: &quot;F3&quot;,

&quot;dataFormat&quot;: &quot;CSV&quot;,

&quot;dataFileContainsHeader&quot;: true,

&quot;attributes&quot;: [

{ &quot;fieldName&quot;: &quot;F1&quot;, &quot;fieldType&quot;: &quot;TEXT&quot; }, { &quot;fieldName&quot;: &quot;F2&quot;, &quot;fieldType&quot;:
&quot;NUMERIC&quot; }, { &quot;fieldName&quot;: &quot;F3&quot;, &quot;fieldType&quot;: &quot;CATEGORICAL&quot; }, { &quot;fieldName&quot;:
&quot;F4&quot;, &quot;fieldType&quot;: &quot;NUMERIC&quot; }, { &quot;fieldName&quot;: &quot;F5&quot;, &quot;fieldType&quot;: &quot;CATEGORICAL&quot;
}, { &quot;fieldName&quot;: &quot;F6&quot;, &quot;fieldType&quot;: &quot;TEXT&quot; }, { &quot;fieldName&quot;: &quot;F7&quot;, &quot;fieldType&quot;:
&quot;WEIGHTED_INT_SEQUENCE&quot; }, { &quot;fieldName&quot;: &quot;F8&quot;, &quot;fieldType&quot;:
&quot;WEIGHTED_STRING_SEQUENCE&quot; } ],

&quot;excludedVariableNames&quot;: [ &quot;F6&quot; ] } **/
        DataSchema?: DataSchema;
        /** Describes the schema Location in Amazon S3. **/
        DataSchemaLocationS3?: S3Url;
    }
    export interface UpdateBatchPredictionInput {
        /** The ID assigned to the BatchPrediction during creation. **/
        BatchPredictionId: EntityId;
        /** A new user-supplied name or description of the BatchPrediction . **/
        BatchPredictionName: EntityName;
    }
    export interface UpdateBatchPredictionOutput {
        /** The ID assigned to the BatchPrediction during creation. This value should be
identical to the value of the BatchPredictionId in the request. **/
        BatchPredictionId?: EntityId;
    }
    export interface UpdateDataSourceInput {
        /** The ID assigned to the DataSource during creation. **/
        DataSourceId: EntityId;
        /** A new user-supplied name or description of the DataSource that will replace the
current description. **/
        DataSourceName: EntityName;
    }
    export interface UpdateDataSourceOutput {
        /** The ID assigned to the DataSource during creation. This value should be
identical to the value of the DataSourceID in the request. **/
        DataSourceId?: EntityId;
    }
    export interface UpdateEvaluationInput {
        /** The ID assigned to the Evaluation during creation. **/
        EvaluationId: EntityId;
        /** A new user-supplied name or description of the Evaluation that will replace the
current content. **/
        EvaluationName: EntityName;
    }
    export interface UpdateEvaluationOutput {
        /** The ID assigned to the Evaluation during creation. This value should be
identical to the value of the Evaluation in the request. **/
        EvaluationId?: EntityId;
    }
    export interface UpdateMLModelInput {
        /** The ID assigned to the MLModel during creation. **/
        MLModelId: EntityId;
        /** A user-supplied name or description of the MLModel . **/
        MLModelName?: EntityName;
        /** The ScoreThreshold used in binary classification MLModel that marks the boundary
between a positive prediction and a negative prediction.

Output values greater than or equal to the ScoreThreshold receive a positive
result from the MLModel , such as true . Output values less than the 
ScoreThreshold receive a negative response from the MLModel , such as false . **/
        ScoreThreshold?: ScoreThreshold;
    }
    export interface UpdateMLModelOutput {
        /** The ID assigned to the MLModel during creation. This value should be identical
to the value of the MLModelID in the request. **/
        MLModelId?: EntityId;
    }
  }
}
