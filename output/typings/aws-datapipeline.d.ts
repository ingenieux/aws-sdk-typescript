// Type definitions for aws-sdk - AWS Data Pipeline
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

// COMMENTED <reference path="./aws-sdk.d.ts" />

declare module "aws-sdk" {

  /**
    * apiVersion: 2012-10-29
    * endpointPrefix: datapipeline
    * serviceAbbreviation: 
    * signatureVersion: v4
    * protocol: json
    *
    * AWS Data Pipeline configures and manages a data-driven workflow called a
 pipeline. AWS Data Pipeline handles the details of scheduling and ensuring that
 data dependencies are met so that your application can focus on processing the
 data.
 
 AWS Data Pipeline provides a JAR implementation of a task runner called AWS Data
 Pipeline Task Runner. AWS Data Pipeline Task Runner provides logic for common
 data management scenarios, such as performing database queries and running data
 analysis using Amazon Elastic MapReduce (Amazon EMR). You can use AWS Data
 Pipeline Task Runner as your task runner, or you can write your own task runner
 to provide custom data management.
 
 AWS Data Pipeline implements two main sets of functionality. Use the first set
 to create a pipeline and define data sources, schedules, dependencies, and the
 transforms to be performed on the data. Use the second set in your task runner
 application to receive the next task ready for processing. The logic for
 performing the task, such as querying the data, running data analysis, or
 converting the data from one format to another, is contained within the task
 runner. The task runner performs the task assigned to it by the web service,
 reporting progress to the web service as it does so. When the task is done, the
 task runner reports the final success or failure of the task to the web service.
    *
    */
  export class DataPipeline extends Service {
    constructor(options?: any);
    endpoint: Endpoint;
    /**
     * Validates the specified pipeline and starts processing pipeline tasks. If the
pipeline does not pass validation, activation fails.

If you need to pause the pipeline to investigate an issue with a component, such
as a data source or script, call DeactivatePipeline.

To activate a finished pipeline, modify the end date for the pipeline and then
activate it.
     *
     * @error PipelineNotFoundException The specified pipeline was not found. Verify that you used the correct user and
account identifiers.  
     * @error PipelineDeletedException The specified pipeline has been deleted.  
     * @error InternalServiceError An internal service error occurred.  
     * @error InvalidRequestException The request was not valid. Verify that your request was properly formatted, that
the signature was generated with the correct credentials, and that you haven&#x27;t
exceeded any of the service limits for your account.  
     */
    activatePipeline(params: DataPipeline.ActivatePipelineInput, callback?: (err: DataPipeline.PipelineNotFoundException | DataPipeline.PipelineDeletedException | DataPipeline.InternalServiceError | DataPipeline.InvalidRequestException | any, data: DataPipeline.ActivatePipelineOutput | any) => void): Request<DataPipeline.ActivatePipelineOutput | any, DataPipeline.PipelineNotFoundException | DataPipeline.PipelineDeletedException | DataPipeline.InternalServiceError | DataPipeline.InvalidRequestException | any>;
    /**
     * Adds or modifies tags for the specified pipeline.
     *
     * @error InternalServiceError An internal service error occurred.  
     * @error InvalidRequestException The request was not valid. Verify that your request was properly formatted, that
the signature was generated with the correct credentials, and that you haven&#x27;t
exceeded any of the service limits for your account.  
     * @error PipelineNotFoundException The specified pipeline was not found. Verify that you used the correct user and
account identifiers.  
     * @error PipelineDeletedException The specified pipeline has been deleted.  
     */
    addTags(params: DataPipeline.AddTagsInput, callback?: (err: DataPipeline.InternalServiceError | DataPipeline.InvalidRequestException | DataPipeline.PipelineNotFoundException | DataPipeline.PipelineDeletedException | any, data: DataPipeline.AddTagsOutput | any) => void): Request<DataPipeline.AddTagsOutput | any, DataPipeline.InternalServiceError | DataPipeline.InvalidRequestException | DataPipeline.PipelineNotFoundException | DataPipeline.PipelineDeletedException | any>;
    /**
     * Creates a new, empty pipeline. Use PutPipelineDefinition to populate the
pipeline.
     *
     * @error InternalServiceError An internal service error occurred.  
     * @error InvalidRequestException The request was not valid. Verify that your request was properly formatted, that
the signature was generated with the correct credentials, and that you haven&#x27;t
exceeded any of the service limits for your account.  
     */
    createPipeline(params: DataPipeline.CreatePipelineInput, callback?: (err: DataPipeline.InternalServiceError | DataPipeline.InvalidRequestException | any, data: DataPipeline.CreatePipelineOutput | any) => void): Request<DataPipeline.CreatePipelineOutput | any, DataPipeline.InternalServiceError | DataPipeline.InvalidRequestException | any>;
    /**
     * Deactivates the specified running pipeline. The pipeline is set to the 
DEACTIVATING state until the deactivation process completes.

To resume a deactivated pipeline, use ActivatePipeline. By default, the pipeline
resumes from the last completed execution. Optionally, you can specify the date
and time to resume the pipeline.
     *
     * @error PipelineNotFoundException The specified pipeline was not found. Verify that you used the correct user and
account identifiers.  
     * @error PipelineDeletedException The specified pipeline has been deleted.  
     * @error InternalServiceError An internal service error occurred.  
     * @error InvalidRequestException The request was not valid. Verify that your request was properly formatted, that
the signature was generated with the correct credentials, and that you haven&#x27;t
exceeded any of the service limits for your account.  
     */
    deactivatePipeline(params: DataPipeline.DeactivatePipelineInput, callback?: (err: DataPipeline.PipelineNotFoundException | DataPipeline.PipelineDeletedException | DataPipeline.InternalServiceError | DataPipeline.InvalidRequestException | any, data: DataPipeline.DeactivatePipelineOutput | any) => void): Request<DataPipeline.DeactivatePipelineOutput | any, DataPipeline.PipelineNotFoundException | DataPipeline.PipelineDeletedException | DataPipeline.InternalServiceError | DataPipeline.InvalidRequestException | any>;
    /**
     * Deletes a pipeline, its pipeline definition, and its run history. AWS Data
Pipeline attempts to cancel instances associated with the pipeline that are
currently being processed by task runners.

Deleting a pipeline cannot be undone. You cannot query or restore a deleted
pipeline. To temporarily pause a pipeline instead of deleting it, call SetStatus 
with the status set to PAUSE on individual components. Components that are
paused by SetStatus can be resumed.
     *
     * @error PipelineNotFoundException The specified pipeline was not found. Verify that you used the correct user and
account identifiers.  
     * @error InternalServiceError An internal service error occurred.  
     * @error InvalidRequestException The request was not valid. Verify that your request was properly formatted, that
the signature was generated with the correct credentials, and that you haven&#x27;t
exceeded any of the service limits for your account.  
     */
    deletePipeline(params: DataPipeline.DeletePipelineInput, callback?: (err: DataPipeline.PipelineNotFoundException | DataPipeline.InternalServiceError | DataPipeline.InvalidRequestException | any, data: any) => void): Request<any, DataPipeline.PipelineNotFoundException | DataPipeline.InternalServiceError | DataPipeline.InvalidRequestException | any>;
    /**
     * Gets the object definitions for a set of objects associated with the pipeline.
Object definitions are composed of a set of fields that define the properties of
the object.
     *
     * @error InternalServiceError An internal service error occurred.  
     * @error InvalidRequestException The request was not valid. Verify that your request was properly formatted, that
the signature was generated with the correct credentials, and that you haven&#x27;t
exceeded any of the service limits for your account.  
     * @error PipelineNotFoundException The specified pipeline was not found. Verify that you used the correct user and
account identifiers.  
     * @error PipelineDeletedException The specified pipeline has been deleted.  
     */
    describeObjects(params: DataPipeline.DescribeObjectsInput, callback?: (err: DataPipeline.InternalServiceError | DataPipeline.InvalidRequestException | DataPipeline.PipelineNotFoundException | DataPipeline.PipelineDeletedException | any, data: DataPipeline.DescribeObjectsOutput | any) => void): Request<DataPipeline.DescribeObjectsOutput | any, DataPipeline.InternalServiceError | DataPipeline.InvalidRequestException | DataPipeline.PipelineNotFoundException | DataPipeline.PipelineDeletedException | any>;
    /**
     * Retrieves metadata about one or more pipelines. The information retrieved
includes the name of the pipeline, the pipeline identifier, its current state,
and the user account that owns the pipeline. Using account credentials, you can
retrieve metadata about pipelines that you or your IAM users have created. If
you are using an IAM user account, you can retrieve metadata about only those
pipelines for which you have read permissions.

To retrieve the full pipeline definition instead of metadata about the pipeline,
call GetPipelineDefinition.
     *
     * @error PipelineNotFoundException The specified pipeline was not found. Verify that you used the correct user and
account identifiers.  
     * @error PipelineDeletedException The specified pipeline has been deleted.  
     * @error InternalServiceError An internal service error occurred.  
     * @error InvalidRequestException The request was not valid. Verify that your request was properly formatted, that
the signature was generated with the correct credentials, and that you haven&#x27;t
exceeded any of the service limits for your account.  
     */
    describePipelines(params: DataPipeline.DescribePipelinesInput, callback?: (err: DataPipeline.PipelineNotFoundException | DataPipeline.PipelineDeletedException | DataPipeline.InternalServiceError | DataPipeline.InvalidRequestException | any, data: DataPipeline.DescribePipelinesOutput | any) => void): Request<DataPipeline.DescribePipelinesOutput | any, DataPipeline.PipelineNotFoundException | DataPipeline.PipelineDeletedException | DataPipeline.InternalServiceError | DataPipeline.InvalidRequestException | any>;
    /**
     * Task runners call EvaluateExpression to evaluate a string in the context of the
specified object. For example, a task runner can evaluate SQL queries stored in
Amazon S3.
     *
     * @error InternalServiceError An internal service error occurred.  
     * @error TaskNotFoundException The specified task was not found.  
     * @error InvalidRequestException The request was not valid. Verify that your request was properly formatted, that
the signature was generated with the correct credentials, and that you haven&#x27;t
exceeded any of the service limits for your account.  
     * @error PipelineNotFoundException The specified pipeline was not found. Verify that you used the correct user and
account identifiers.  
     * @error PipelineDeletedException The specified pipeline has been deleted.  
     */
    evaluateExpression(params: DataPipeline.EvaluateExpressionInput, callback?: (err: DataPipeline.InternalServiceError | DataPipeline.TaskNotFoundException | DataPipeline.InvalidRequestException | DataPipeline.PipelineNotFoundException | DataPipeline.PipelineDeletedException | any, data: DataPipeline.EvaluateExpressionOutput | any) => void): Request<DataPipeline.EvaluateExpressionOutput | any, DataPipeline.InternalServiceError | DataPipeline.TaskNotFoundException | DataPipeline.InvalidRequestException | DataPipeline.PipelineNotFoundException | DataPipeline.PipelineDeletedException | any>;
    /**
     * Gets the definition of the specified pipeline. You can call 
GetPipelineDefinition to retrieve the pipeline definition that you provided
using PutPipelineDefinition.
     *
     * @error InternalServiceError An internal service error occurred.  
     * @error InvalidRequestException The request was not valid. Verify that your request was properly formatted, that
the signature was generated with the correct credentials, and that you haven&#x27;t
exceeded any of the service limits for your account.  
     * @error PipelineNotFoundException The specified pipeline was not found. Verify that you used the correct user and
account identifiers.  
     * @error PipelineDeletedException The specified pipeline has been deleted.  
     */
    getPipelineDefinition(params: DataPipeline.GetPipelineDefinitionInput, callback?: (err: DataPipeline.InternalServiceError | DataPipeline.InvalidRequestException | DataPipeline.PipelineNotFoundException | DataPipeline.PipelineDeletedException | any, data: DataPipeline.GetPipelineDefinitionOutput | any) => void): Request<DataPipeline.GetPipelineDefinitionOutput | any, DataPipeline.InternalServiceError | DataPipeline.InvalidRequestException | DataPipeline.PipelineNotFoundException | DataPipeline.PipelineDeletedException | any>;
    /**
     * Lists the pipeline identifiers for all active pipelines that you have permission
to access.
     *
     * @error InternalServiceError An internal service error occurred.  
     * @error InvalidRequestException The request was not valid. Verify that your request was properly formatted, that
the signature was generated with the correct credentials, and that you haven&#x27;t
exceeded any of the service limits for your account.  
     */
    listPipelines(params: DataPipeline.ListPipelinesInput, callback?: (err: DataPipeline.InternalServiceError | DataPipeline.InvalidRequestException | any, data: DataPipeline.ListPipelinesOutput | any) => void): Request<DataPipeline.ListPipelinesOutput | any, DataPipeline.InternalServiceError | DataPipeline.InvalidRequestException | any>;
    /**
     * Task runners call PollForTask to receive a task to perform from AWS Data
Pipeline. The task runner specifies which tasks it can perform by setting a
value for the workerGroup parameter. The task returned can come from any of the
pipelines that match the workerGroup value passed in by the task runner and that
was launched using the IAM user credentials specified by the task runner.

If tasks are ready in the work queue, PollForTask returns a response
immediately. If no tasks are available in the queue, PollForTask uses
long-polling and holds on to a poll connection for up to a 90 seconds, during
which time the first newly scheduled task is handed to the task runner. To
accomodate this, set the socket timeout in your task runner to 90 seconds. The
task runner should not call PollForTask again on the same workerGroup until it
receives a response, and this can take up to 90 seconds.
     *
     * @error InternalServiceError An internal service error occurred.  
     * @error InvalidRequestException The request was not valid. Verify that your request was properly formatted, that
the signature was generated with the correct credentials, and that you haven&#x27;t
exceeded any of the service limits for your account.  
     * @error TaskNotFoundException The specified task was not found.  
     */
    pollForTask(params: DataPipeline.PollForTaskInput, callback?: (err: DataPipeline.InternalServiceError | DataPipeline.InvalidRequestException | DataPipeline.TaskNotFoundException | any, data: DataPipeline.PollForTaskOutput | any) => void): Request<DataPipeline.PollForTaskOutput | any, DataPipeline.InternalServiceError | DataPipeline.InvalidRequestException | DataPipeline.TaskNotFoundException | any>;
    /**
     * Adds tasks, schedules, and preconditions to the specified pipeline. You can use 
PutPipelineDefinition to populate a new pipeline.

 PutPipelineDefinition also validates the configuration as it adds it to the
pipeline. Changes to the pipeline are saved unless one of the following three
validation errors exists in the pipeline. 

 1. An object is missing a name or identifier field.
 2. A string or reference field is empty.
 3. The number of objects in the pipeline exceeds the maximum allowed objects.
 4. The pipeline is in a FINISHED state.

 Pipeline object definitions are passed to the PutPipelineDefinition action and
returned by the GetPipelineDefinition action.
     *
     * @error InternalServiceError An internal service error occurred.  
     * @error InvalidRequestException The request was not valid. Verify that your request was properly formatted, that
the signature was generated with the correct credentials, and that you haven&#x27;t
exceeded any of the service limits for your account.  
     * @error PipelineNotFoundException The specified pipeline was not found. Verify that you used the correct user and
account identifiers.  
     * @error PipelineDeletedException The specified pipeline has been deleted.  
     */
    putPipelineDefinition(params: DataPipeline.PutPipelineDefinitionInput, callback?: (err: DataPipeline.InternalServiceError | DataPipeline.InvalidRequestException | DataPipeline.PipelineNotFoundException | DataPipeline.PipelineDeletedException | any, data: DataPipeline.PutPipelineDefinitionOutput | any) => void): Request<DataPipeline.PutPipelineDefinitionOutput | any, DataPipeline.InternalServiceError | DataPipeline.InvalidRequestException | DataPipeline.PipelineNotFoundException | DataPipeline.PipelineDeletedException | any>;
    /**
     * Queries the specified pipeline for the names of objects that match the specified
set of conditions.
     *
     * @error PipelineNotFoundException The specified pipeline was not found. Verify that you used the correct user and
account identifiers.  
     * @error PipelineDeletedException The specified pipeline has been deleted.  
     * @error InternalServiceError An internal service error occurred.  
     * @error InvalidRequestException The request was not valid. Verify that your request was properly formatted, that
the signature was generated with the correct credentials, and that you haven&#x27;t
exceeded any of the service limits for your account.  
     */
    queryObjects(params: DataPipeline.QueryObjectsInput, callback?: (err: DataPipeline.PipelineNotFoundException | DataPipeline.PipelineDeletedException | DataPipeline.InternalServiceError | DataPipeline.InvalidRequestException | any, data: DataPipeline.QueryObjectsOutput | any) => void): Request<DataPipeline.QueryObjectsOutput | any, DataPipeline.PipelineNotFoundException | DataPipeline.PipelineDeletedException | DataPipeline.InternalServiceError | DataPipeline.InvalidRequestException | any>;
    /**
     * Removes existing tags from the specified pipeline.
     *
     * @error InternalServiceError An internal service error occurred.  
     * @error InvalidRequestException The request was not valid. Verify that your request was properly formatted, that
the signature was generated with the correct credentials, and that you haven&#x27;t
exceeded any of the service limits for your account.  
     * @error PipelineNotFoundException The specified pipeline was not found. Verify that you used the correct user and
account identifiers.  
     * @error PipelineDeletedException The specified pipeline has been deleted.  
     */
    removeTags(params: DataPipeline.RemoveTagsInput, callback?: (err: DataPipeline.InternalServiceError | DataPipeline.InvalidRequestException | DataPipeline.PipelineNotFoundException | DataPipeline.PipelineDeletedException | any, data: DataPipeline.RemoveTagsOutput | any) => void): Request<DataPipeline.RemoveTagsOutput | any, DataPipeline.InternalServiceError | DataPipeline.InvalidRequestException | DataPipeline.PipelineNotFoundException | DataPipeline.PipelineDeletedException | any>;
    /**
     * Task runners call ReportTaskProgress when assigned a task to acknowledge that it
has the task. If the web service does not receive this acknowledgement within 2
minutes, it assigns the task in a subsequent PollForTask call. After this
initial acknowledgement, the task runner only needs to report progress every 15
minutes to maintain its ownership of the task. You can change this reporting
time from 15 minutes by specifying a reportProgressTimeout field in your
pipeline.

If a task runner does not report its status after 5 minutes, AWS Data Pipeline
assumes that the task runner is unable to process the task and reassigns the
task in a subsequent response to PollForTask. Task runners should call 
ReportTaskProgress every 60 seconds.
     *
     * @error InternalServiceError An internal service error occurred.  
     * @error InvalidRequestException The request was not valid. Verify that your request was properly formatted, that
the signature was generated with the correct credentials, and that you haven&#x27;t
exceeded any of the service limits for your account.  
     * @error TaskNotFoundException The specified task was not found.  
     * @error PipelineNotFoundException The specified pipeline was not found. Verify that you used the correct user and
account identifiers.  
     * @error PipelineDeletedException The specified pipeline has been deleted.  
     */
    reportTaskProgress(params: DataPipeline.ReportTaskProgressInput, callback?: (err: DataPipeline.InternalServiceError | DataPipeline.InvalidRequestException | DataPipeline.TaskNotFoundException | DataPipeline.PipelineNotFoundException | DataPipeline.PipelineDeletedException | any, data: DataPipeline.ReportTaskProgressOutput | any) => void): Request<DataPipeline.ReportTaskProgressOutput | any, DataPipeline.InternalServiceError | DataPipeline.InvalidRequestException | DataPipeline.TaskNotFoundException | DataPipeline.PipelineNotFoundException | DataPipeline.PipelineDeletedException | any>;
    /**
     * Task runners call ReportTaskRunnerHeartbeat every 15 minutes to indicate that
they are operational. If the AWS Data Pipeline Task Runner is launched on a
resource managed by AWS Data Pipeline, the web service can use this call to
detect when the task runner application has failed and restart a new instance.
     *
     * @error InternalServiceError An internal service error occurred.  
     * @error InvalidRequestException The request was not valid. Verify that your request was properly formatted, that
the signature was generated with the correct credentials, and that you haven&#x27;t
exceeded any of the service limits for your account.  
     */
    reportTaskRunnerHeartbeat(params: DataPipeline.ReportTaskRunnerHeartbeatInput, callback?: (err: DataPipeline.InternalServiceError | DataPipeline.InvalidRequestException | any, data: DataPipeline.ReportTaskRunnerHeartbeatOutput | any) => void): Request<DataPipeline.ReportTaskRunnerHeartbeatOutput | any, DataPipeline.InternalServiceError | DataPipeline.InvalidRequestException | any>;
    /**
     * Requests that the status of the specified physical or logical pipeline objects
be updated in the specified pipeline. This update might not occur immediately,
but is eventually consistent. The status that can be set depends on the type of
object (for example, DataNode or Activity). You cannot perform this operation on 
FINISHED pipelines and attempting to do so returns InvalidRequestException.
     *
     * @error PipelineNotFoundException The specified pipeline was not found. Verify that you used the correct user and
account identifiers.  
     * @error PipelineDeletedException The specified pipeline has been deleted.  
     * @error InternalServiceError An internal service error occurred.  
     * @error InvalidRequestException The request was not valid. Verify that your request was properly formatted, that
the signature was generated with the correct credentials, and that you haven&#x27;t
exceeded any of the service limits for your account.  
     */
    setStatus(params: DataPipeline.SetStatusInput, callback?: (err: DataPipeline.PipelineNotFoundException | DataPipeline.PipelineDeletedException | DataPipeline.InternalServiceError | DataPipeline.InvalidRequestException | any, data: any) => void): Request<any, DataPipeline.PipelineNotFoundException | DataPipeline.PipelineDeletedException | DataPipeline.InternalServiceError | DataPipeline.InvalidRequestException | any>;
    /**
     * Task runners call SetTaskStatus to notify AWS Data Pipeline that a task is
completed and provide information about the final status. A task runner makes
this call regardless of whether the task was sucessful. A task runner does not
need to call SetTaskStatus for tasks that are canceled by the web service during
a call to ReportTaskProgress.
     *
     * @error InternalServiceError An internal service error occurred.  
     * @error TaskNotFoundException The specified task was not found.  
     * @error InvalidRequestException The request was not valid. Verify that your request was properly formatted, that
the signature was generated with the correct credentials, and that you haven&#x27;t
exceeded any of the service limits for your account.  
     * @error PipelineNotFoundException The specified pipeline was not found. Verify that you used the correct user and
account identifiers.  
     * @error PipelineDeletedException The specified pipeline has been deleted.  
     */
    setTaskStatus(params: DataPipeline.SetTaskStatusInput, callback?: (err: DataPipeline.InternalServiceError | DataPipeline.TaskNotFoundException | DataPipeline.InvalidRequestException | DataPipeline.PipelineNotFoundException | DataPipeline.PipelineDeletedException | any, data: DataPipeline.SetTaskStatusOutput | any) => void): Request<DataPipeline.SetTaskStatusOutput | any, DataPipeline.InternalServiceError | DataPipeline.TaskNotFoundException | DataPipeline.InvalidRequestException | DataPipeline.PipelineNotFoundException | DataPipeline.PipelineDeletedException | any>;
    /**
     * Validates the specified pipeline definition to ensure that it is well formed and
can be run without error.
     *
     * @error InternalServiceError An internal service error occurred.  
     * @error InvalidRequestException The request was not valid. Verify that your request was properly formatted, that
the signature was generated with the correct credentials, and that you haven&#x27;t
exceeded any of the service limits for your account.  
     * @error PipelineNotFoundException The specified pipeline was not found. Verify that you used the correct user and
account identifiers.  
     * @error PipelineDeletedException The specified pipeline has been deleted.  
     */
    validatePipelineDefinition(params: DataPipeline.ValidatePipelineDefinitionInput, callback?: (err: DataPipeline.InternalServiceError | DataPipeline.InvalidRequestException | DataPipeline.PipelineNotFoundException | DataPipeline.PipelineDeletedException | any, data: DataPipeline.ValidatePipelineDefinitionOutput | any) => void): Request<DataPipeline.ValidatePipelineDefinitionOutput | any, DataPipeline.InternalServiceError | DataPipeline.InvalidRequestException | DataPipeline.PipelineNotFoundException | DataPipeline.PipelineDeletedException | any>;

  }

  export module DataPipeline {

    export type OperatorType = string;

    export type ParameterAttributeList = ParameterAttribute[];

    export type ParameterObjectList = ParameterObject[];

    export type ParameterValueList = ParameterValue[];

    export type PipelineDescriptionList = PipelineDescription[];

    export type PipelineObjectList = PipelineObject[];

    export type PipelineObjectMap = { [key: string]: PipelineObject };

    export type SelectorList = Selector[];

    export type TaskStatus = string;

    export type ValidationErrors = ValidationError[];

    export type ValidationWarnings = ValidationWarning[];

    export type attributeNameString = string;

    export type attributeValueString = string;

    export type cancelActive = boolean;

    export type errorMessage = string;

    export type fieldList = Field[];

    export type fieldNameString = string;

    export type fieldStringValue = string;

    export type id = string;

    export type idList = id[];

    export type int = number;

    export type longString = string;

    export type pipelineList = PipelineIdName[];

    export type stringList = string[];

    export type tagKey = string;

    export type tagList = Tag[];

    export type tagValue = string;

    export type taskId = string;

    export type timestamp = number;

    export type validationMessage = string;

    export type validationMessages = validationMessage[];

    export interface ActivatePipelineInput {
      /** The ID of the pipeline. **/
      pipelineId: id;
      /** A list of parameter values to pass to the pipeline at activation. **/
      parameterValues?: ParameterValueList;
      /** The date and time to resume the pipeline. By default, the pipeline resumes from
the last completed execution. **/
      startTimestamp?: timestamp;
    }
    export interface ActivatePipelineOutput {
    }
    export interface AddTagsInput {
      /** The ID of the pipeline. **/
      pipelineId: id;
      /** The tags to add, as key/value pairs. **/
      tags: tagList;
    }
    export interface AddTagsOutput {
    }
    export interface CreatePipelineInput {
      /** The name for the pipeline. You can use the same name for multiple pipelines
associated with your AWS account, because AWS Data Pipeline assigns each
pipeline a unique pipeline identifier. **/
      name: id;
      /** A unique identifier. This identifier is not the same as the pipeline identifier
assigned by AWS Data Pipeline. You are responsible for defining the format and
ensuring the uniqueness of this identifier. You use this parameter to ensure
idempotency during repeated calls to CreatePipeline. For example, if the first
call to CreatePipeline does not succeed, you can pass in the same unique
identifier and pipeline name combination on a subsequent call to CreatePipeline. 
CreatePipeline ensures that if a pipeline already exists with the same name and
unique identifier, a new pipeline is not created. Instead, you&#x27;ll receive the
pipeline identifier from the previous attempt. The uniqueness of the name and
unique identifier combination is scoped to the AWS account or IAM user
credentials. **/
      uniqueId: id;
      /** The description for the pipeline. **/
      description?: string;
      /** A list of tags to associate with the pipeline at creation. Tags let you control
access to pipelines. For more information, see Controlling User Access to
Pipelines
[http://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-control-access.html] 
in the AWS Data Pipeline Developer Guide. **/
      tags?: tagList;
    }
    export interface CreatePipelineOutput {
      /** The ID that AWS Data Pipeline assigns the newly created pipeline. For example, 
df-06372391ZG65EXAMPLE. **/
      pipelineId: id;
    }
    export interface DeactivatePipelineInput {
      /** The ID of the pipeline. **/
      pipelineId: id;
      /** Indicates whether to cancel any running objects. The default is true, which sets
the state of any running objects to CANCELED. If this value is false, the
pipeline is deactivated after all running objects finish. **/
      cancelActive?: cancelActive;
    }
    export interface DeactivatePipelineOutput {
    }
    export interface DeletePipelineInput {
      /** The ID of the pipeline. **/
      pipelineId: id;
    }
    export interface DescribeObjectsInput {
      /** The ID of the pipeline that contains the object definitions. **/
      pipelineId: id;
      /** The IDs of the pipeline objects that contain the definitions to be described.
You can pass as many as 25 identifiers in a single call to DescribeObjects. **/
      objectIds: idList;
      /** Indicates whether any expressions in the object should be evaluated when the
object descriptions are returned. **/
      evaluateExpressions?: boolean;
      /** The starting point for the results to be returned. For the first call, this
value should be empty. As long as there are more results, continue to call 
DescribeObjects with the marker value from the previous call to retrieve the
next set of results. **/
      marker?: string;
    }
    export interface DescribeObjectsOutput {
      /** An array of object definitions. **/
      pipelineObjects: PipelineObjectList;
      /** The starting point for the next page of results. To view the next page of
results, call DescribeObjects again with this marker value. If the value is
null, there are no more results. **/
      marker?: string;
      /** Indicates whether there are more results to return. **/
      hasMoreResults?: boolean;
    }
    export interface DescribePipelinesInput {
      /** The IDs of the pipelines to describe. You can pass as many as 25 identifiers in
a single call. To obtain pipeline IDs, call ListPipelines. **/
      pipelineIds: idList;
    }
    export interface DescribePipelinesOutput {
      /** An array of descriptions for the specified pipelines. **/
      pipelineDescriptionList: PipelineDescriptionList;
    }
    export interface EvaluateExpressionInput {
      /** The ID of the pipeline. **/
      pipelineId: id;
      /** The ID of the object. **/
      objectId: id;
      /** The expression to evaluate. **/
      expression: longString;
    }
    export interface EvaluateExpressionOutput {
      /** The evaluated expression. **/
      evaluatedExpression: longString;
    }
    export interface Field {
      /** The field identifier. **/
      key: fieldNameString;
      /** The field value, expressed as a String. **/
      stringValue?: fieldStringValue;
      /** The field value, expressed as the identifier of another object. **/
      refValue?: fieldNameString;
    }
    export interface GetPipelineDefinitionInput {
      /** The ID of the pipeline. **/
      pipelineId: id;
      /** The version of the pipeline definition to retrieve. Set this parameter to latest 
(default) to use the last definition saved to the pipeline or active to use the
last definition that was activated. **/
      version?: string;
    }
    export interface GetPipelineDefinitionOutput {
      /** The objects defined in the pipeline. **/
      pipelineObjects?: PipelineObjectList;
      /** The parameter objects used in the pipeline definition. **/
      parameterObjects?: ParameterObjectList;
      /** The parameter values used in the pipeline definition. **/
      parameterValues?: ParameterValueList;
    }
    export interface InstanceIdentity {
      /** A description of an EC2 instance that is generated when the instance is launched
and exposed to the instance via the instance metadata service in the form of a
JSON representation of an object. **/
      document?: string;
      /** A signature which can be used to verify the accuracy and authenticity of the
information provided in the instance identity document. **/
      signature?: string;
    }
    export interface InternalServiceError {
      /** Description of the error message. **/
      message?: errorMessage;
    }
    export interface InvalidRequestException {
      /** Description of the error message. **/
      message?: errorMessage;
    }
    export interface ListPipelinesInput {
      /** The starting point for the results to be returned. For the first call, this
value should be empty. As long as there are more results, continue to call 
ListPipelines with the marker value from the previous call to retrieve the next
set of results. **/
      marker?: string;
    }
    export interface ListPipelinesOutput {
      /** The pipeline identifiers. If you require additional information about the
pipelines, you can use these identifiers to call DescribePipelines and 
GetPipelineDefinition. **/
      pipelineIdList: pipelineList;
      /** The starting point for the next page of results. To view the next page of
results, call ListPipelinesOutput again with this marker value. If the value is
null, there are no more results. **/
      marker?: string;
      /** Indicates whether there are more results that can be obtained by a subsequent
call. **/
      hasMoreResults?: boolean;
    }
    export interface Operator {
      /** The logical operation to be performed: equal (EQ), equal reference (REF_EQ),
less than or equal (LE), greater than or equal (GE), or between (BETWEEN). Equal
reference (REF_EQ) can be used only with reference fields. The other comparison
types can be used only with String fields. The comparison types you can use
apply only to certain object fields, as detailed below. 

The comparison operators EQ and REF_EQ act on the following fields: 

&amp;#42; name
&amp;#42; @sphere
&amp;#42; parent
&amp;#42; @componentParent
&amp;#42; @instanceParent
&amp;#42; @status
&amp;#42; @scheduledStartTime
&amp;#42; @scheduledEndTime
&amp;#42; @actualStartTime
&amp;#42; @actualEndTime

The comparison operators GE, LE, and BETWEEN act on the following fields: 

&amp;#42; @scheduledStartTime
&amp;#42; @scheduledEndTime
&amp;#42; @actualStartTime
&amp;#42; @actualEndTime

Note that fields beginning with the at sign (@) are read-only and set by the web
service. When you name fields, you should choose names containing only
alpha-numeric values, as symbols may be reserved by AWS Data Pipeline.
User-defined fields that you add to a pipeline should prefix their name with the
string &quot;my&quot;. **/
      type?: OperatorType;
      /** The value that the actual field value will be compared with. **/
      values?: stringList;
    }
    export interface ParameterAttribute {
      /** The field identifier. **/
      key: attributeNameString;
      /** The field value, expressed as a String. **/
      stringValue: attributeValueString;
    }
    export interface ParameterObject {
      /** The ID of the parameter object. **/
      id: fieldNameString;
      /** The attributes of the parameter object. **/
      attributes: ParameterAttributeList;
    }
    export interface ParameterValue {
      /** The ID of the parameter value. **/
      id: fieldNameString;
      /** The field value, expressed as a String. **/
      stringValue: fieldStringValue;
    }
    export interface PipelineDeletedException {
      /** Description of the error message. **/
      message?: errorMessage;
    }
    export interface PipelineDescription {
      /** The pipeline identifier that was assigned by AWS Data Pipeline. This is a string
of the form df-297EG78HU43EEXAMPLE. **/
      pipelineId: id;
      /** The name of the pipeline. **/
      name: id;
      /** A list of read-only fields that contain metadata about the pipeline: @userId,
@accountId, and @pipelineState. **/
      fields: fieldList;
      /** Description of the pipeline. **/
      description?: string;
      /** A list of tags to associated with a pipeline. Tags let you control access to
pipelines. For more information, see Controlling User Access to Pipelines
[http://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-control-access.html] 
in the AWS Data Pipeline Developer Guide. **/
      tags?: tagList;
    }
    export interface PipelineIdName {
      /** The ID of the pipeline that was assigned by AWS Data Pipeline. This is a string
of the form df-297EG78HU43EEXAMPLE. **/
      id?: id;
      /** The name of the pipeline. **/
      name?: id;
    }
    export interface PipelineNotFoundException {
      /** Description of the error message. **/
      message?: errorMessage;
    }
    export interface PipelineObject {
      /** The ID of the object. **/
      id: id;
      /** The name of the object. **/
      name: id;
      /** Key-value pairs that define the properties of the object. **/
      fields: fieldList;
    }
    export interface PollForTaskInput {
      /** The type of task the task runner is configured to accept and process. The worker
group is set as a field on objects in the pipeline when they are created. You
can only specify a single value for workerGroup in the call to PollForTask.
There are no wildcard values permitted in workerGroup; the string must be an
exact, case-sensitive, match. **/
      workerGroup: string;
      /** The public DNS name of the calling task runner. **/
      hostname?: id;
      /** Identity information for the EC2 instance that is hosting the task runner. You
can get this value from the instance using 
http://169.254.169.254/latest/meta-data/instance-id. For more information, see 
Instance Metadata
[http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AESDG-chapter-instancedata.html] 
in the Amazon Elastic Compute Cloud User Guide. Passing in this value proves
that your task runner is running on an EC2 instance, and ensures the proper AWS
Data Pipeline service charges are applied to your pipeline. **/
      instanceIdentity?: InstanceIdentity;
    }
    export interface PollForTaskOutput {
      /** The information needed to complete the task that is being assigned to the task
runner. One of the fields returned in this object is taskId, which contains an
identifier for the task being assigned. The calling task runner uses taskId in
subsequent calls to ReportTaskProgress and SetTaskStatus. **/
      taskObject?: TaskObject;
    }
    export interface PutPipelineDefinitionInput {
      /** The ID of the pipeline. **/
      pipelineId: id;
      /** The objects that define the pipeline. These objects overwrite the existing
pipeline definition. **/
      pipelineObjects: PipelineObjectList;
      /** The parameter objects used with the pipeline. **/
      parameterObjects?: ParameterObjectList;
      /** The parameter values used with the pipeline. **/
      parameterValues?: ParameterValueList;
    }
    export interface PutPipelineDefinitionOutput {
      /** The validation errors that are associated with the objects defined in 
pipelineObjects. **/
      validationErrors?: ValidationErrors;
      /** The validation warnings that are associated with the objects defined in 
pipelineObjects. **/
      validationWarnings?: ValidationWarnings;
      /** Indicates whether there were validation errors, and the pipeline definition is
stored but cannot be activated until you correct the pipeline and call 
PutPipelineDefinition to commit the corrected pipeline. **/
      errored: boolean;
    }
    export interface Query {
      /** List of selectors that define the query. An object must satisfy all of the
selectors to match the query. **/
      selectors?: SelectorList;
    }
    export interface QueryObjectsInput {
      /** The ID of the pipeline. **/
      pipelineId: id;
      /** The query that defines the objects to be returned. The Query object can contain
a maximum of ten selectors. The conditions in the query are limited to top-level
String fields in the object. These filters can be applied to components,
instances, and attempts. **/
      query?: Query;
      /** Indicates whether the query applies to components or instances. The possible
values are: COMPONENT, INSTANCE, and ATTEMPT. **/
      sphere: string;
      /** The starting point for the results to be returned. For the first call, this
value should be empty. As long as there are more results, continue to call 
QueryObjects with the marker value from the previous call to retrieve the next
set of results. **/
      marker?: string;
      /** The maximum number of object names that QueryObjects will return in a single
call. The default value is 100. **/
      limit?: int;
    }
    export interface QueryObjectsOutput {
      /** The identifiers that match the query selectors. **/
      ids?: idList;
      /** The starting point for the next page of results. To view the next page of
results, call QueryObjects again with this marker value. If the value is null,
there are no more results. **/
      marker?: string;
      /** Indicates whether there are more results that can be obtained by a subsequent
call. **/
      hasMoreResults?: boolean;
    }
    export interface RemoveTagsInput {
      /** The ID of the pipeline. **/
      pipelineId: id;
      /** The keys of the tags to remove. **/
      tagKeys: stringList;
    }
    export interface RemoveTagsOutput {
    }
    export interface ReportTaskProgressInput {
      /** The ID of the task assigned to the task runner. This value is provided in the
response for PollForTask. **/
      taskId: taskId;
      /** Key-value pairs that define the properties of the ReportTaskProgressInput
object. **/
      fields?: fieldList;
    }
    export interface ReportTaskProgressOutput {
      /** If true, the calling task runner should cancel processing of the task. The task
runner does not need to call SetTaskStatus for canceled tasks. **/
      canceled: boolean;
    }
    export interface ReportTaskRunnerHeartbeatInput {
      /** The ID of the task runner. This value should be unique across your AWS account.
In the case of AWS Data Pipeline Task Runner launched on a resource managed by
AWS Data Pipeline, the web service provides a unique identifier when it launches
the application. If you have written a custom task runner, you should assign a
unique identifier for the task runner. **/
      taskrunnerId: id;
      /** The type of task the task runner is configured to accept and process. The worker
group is set as a field on objects in the pipeline when they are created. You
can only specify a single value for workerGroup. There are no wildcard values
permitted in workerGroup; the string must be an exact, case-sensitive, match. **/
      workerGroup?: string;
      /** The public DNS name of the task runner. **/
      hostname?: id;
    }
    export interface ReportTaskRunnerHeartbeatOutput {
      /** Indicates whether the calling task runner should terminate. **/
      terminate: boolean;
    }
    export interface Selector {
      /** The name of the field that the operator will be applied to. The field name is
the &quot;key&quot; portion of the field definition in the pipeline definition syntax that
is used by the AWS Data Pipeline API. If the field is not set on the object, the
condition fails. **/
      fieldName?: string;
      operator?: Operator;
    }
    export interface SetStatusInput {
      /** The ID of the pipeline that contains the objects. **/
      pipelineId: id;
      /** The IDs of the objects. The corresponding objects can be either physical or
components, but not a mix of both types. **/
      objectIds: idList;
      /** The status to be set on all the objects specified in objectIds. For components,
use PAUSE or RESUME. For instances, use TRY_CANCEL, RERUN, or MARK_FINISHED. **/
      status: string;
    }
    export interface SetTaskStatusInput {
      /** The ID of the task assigned to the task runner. This value is provided in the
response for PollForTask. **/
      taskId: taskId;
      /** If FINISHED, the task successfully completed. If FAILED, the task ended
unsuccessfully. Preconditions use false. **/
      taskStatus: TaskStatus;
      /** If an error occurred during the task, this value specifies the error code. This
value is set on the physical attempt object. It is used to display error
information to the user. It should not start with string &quot;Service_&quot; which is
reserved by the system. **/
      errorId?: string;
      /** If an error occurred during the task, this value specifies a text description of
the error. This value is set on the physical attempt object. It is used to
display error information to the user. The web service does not parse this
value. **/
      errorMessage?: errorMessage;
      /** If an error occurred during the task, this value specifies the stack trace
associated with the error. This value is set on the physical attempt object. It
is used to display error information to the user. The web service does not parse
this value. **/
      errorStackTrace?: string;
    }
    export interface SetTaskStatusOutput {
    }
    export interface Tag {
      /** The key name of a tag defined by a user. For more information, see Controlling
User Access to Pipelines
[http://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-control-access.html] 
in the AWS Data Pipeline Developer Guide. **/
      key: tagKey;
      /** The optional value portion of a tag defined by a user. For more information, see 
Controlling User Access to Pipelines
[http://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-control-access.html] 
in the AWS Data Pipeline Developer Guide. **/
      value: tagValue;
    }
    export interface TaskNotFoundException {
      /** Description of the error message. **/
      message?: errorMessage;
    }
    export interface TaskObject {
      /** An internal identifier for the task. This ID is passed to the SetTaskStatus and 
ReportTaskProgress actions. **/
      taskId?: taskId;
      /** The ID of the pipeline that provided the task. **/
      pipelineId?: id;
      /** The ID of the pipeline task attempt object. AWS Data Pipeline uses this value to
track how many times a task is attempted. **/
      attemptId?: id;
      /** Connection information for the location where the task runner will publish the
output of the task. **/
      objects?: PipelineObjectMap;
    }
    export interface ValidatePipelineDefinitionInput {
      /** The ID of the pipeline. **/
      pipelineId: id;
      /** The objects that define the pipeline changes to validate against the pipeline. **/
      pipelineObjects: PipelineObjectList;
      /** The parameter objects used with the pipeline. **/
      parameterObjects?: ParameterObjectList;
      /** The parameter values used with the pipeline. **/
      parameterValues?: ParameterValueList;
    }
    export interface ValidatePipelineDefinitionOutput {
      /** Any validation errors that were found. **/
      validationErrors?: ValidationErrors;
      /** Any validation warnings that were found. **/
      validationWarnings?: ValidationWarnings;
      /** Indicates whether there were validation errors. **/
      errored: boolean;
    }
    export interface ValidationError {
      /** The identifier of the object that contains the validation error. **/
      id?: id;
      /** A description of the validation error. **/
      errors?: validationMessages;
    }
    export interface ValidationWarning {
      /** The identifier of the object that contains the validation warning. **/
      id?: id;
      /** A description of the validation warning. **/
      warnings?: validationMessages;
    }
  }
}
