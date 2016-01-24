// Type definitions for aws-sdk - AWS Data Pipeline
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

///<reference path="./aws-sdk-common.d.ts" />

declare module "aws-sdk" {

    /*
     * apiVersion: 2012-10-29
     * endpointPrefix: datapipeline
     * serviceAbbreviation: 
     * signatureVersion: v4
     * protocol: json
     */
    export class DataPipeline extends Service {
      constructor(options?: any);
      endpoint: Endpoint;
      activatePipeline(params: DataPipeline.ActivatePipelineInput, callback?: (err: DataPipeline.PipelineNotFoundException|DataPipeline.PipelineDeletedException|DataPipeline.InternalServiceError|DataPipeline.InvalidRequestException|any, data: DataPipeline.ActivatePipelineOutput|any) => void): Request;
      addTags(params: DataPipeline.AddTagsInput, callback?: (err: DataPipeline.InternalServiceError|DataPipeline.InvalidRequestException|DataPipeline.PipelineNotFoundException|DataPipeline.PipelineDeletedException|any, data: DataPipeline.AddTagsOutput|any) => void): Request;
      createPipeline(params: DataPipeline.CreatePipelineInput, callback?: (err: DataPipeline.InternalServiceError|DataPipeline.InvalidRequestException|any, data: DataPipeline.CreatePipelineOutput|any) => void): Request;
      deactivatePipeline(params: DataPipeline.DeactivatePipelineInput, callback?: (err: DataPipeline.PipelineNotFoundException|DataPipeline.PipelineDeletedException|DataPipeline.InternalServiceError|DataPipeline.InvalidRequestException|any, data: DataPipeline.DeactivatePipelineOutput|any) => void): Request;
      deletePipeline(params: DataPipeline.DeletePipelineInput, callback?: (err: DataPipeline.PipelineNotFoundException|DataPipeline.InternalServiceError|DataPipeline.InvalidRequestException|any, data: any) => void): Request;
      describeObjects(params: DataPipeline.DescribeObjectsInput, callback?: (err: DataPipeline.InternalServiceError|DataPipeline.InvalidRequestException|DataPipeline.PipelineNotFoundException|DataPipeline.PipelineDeletedException|any, data: DataPipeline.DescribeObjectsOutput|any) => void): Request;
      describePipelines(params: DataPipeline.DescribePipelinesInput, callback?: (err: DataPipeline.PipelineNotFoundException|DataPipeline.PipelineDeletedException|DataPipeline.InternalServiceError|DataPipeline.InvalidRequestException|any, data: DataPipeline.DescribePipelinesOutput|any) => void): Request;
      evaluateExpression(params: DataPipeline.EvaluateExpressionInput, callback?: (err: DataPipeline.InternalServiceError|DataPipeline.TaskNotFoundException|DataPipeline.InvalidRequestException|DataPipeline.PipelineNotFoundException|DataPipeline.PipelineDeletedException|any, data: DataPipeline.EvaluateExpressionOutput|any) => void): Request;
      getPipelineDefinition(params: DataPipeline.GetPipelineDefinitionInput, callback?: (err: DataPipeline.InternalServiceError|DataPipeline.InvalidRequestException|DataPipeline.PipelineNotFoundException|DataPipeline.PipelineDeletedException|any, data: DataPipeline.GetPipelineDefinitionOutput|any) => void): Request;
      listPipelines(params: DataPipeline.ListPipelinesInput, callback?: (err: DataPipeline.InternalServiceError|DataPipeline.InvalidRequestException|any, data: DataPipeline.ListPipelinesOutput|any) => void): Request;
      pollForTask(params: DataPipeline.PollForTaskInput, callback?: (err: DataPipeline.InternalServiceError|DataPipeline.InvalidRequestException|DataPipeline.TaskNotFoundException|any, data: DataPipeline.PollForTaskOutput|any) => void): Request;
      putPipelineDefinition(params: DataPipeline.PutPipelineDefinitionInput, callback?: (err: DataPipeline.InternalServiceError|DataPipeline.InvalidRequestException|DataPipeline.PipelineNotFoundException|DataPipeline.PipelineDeletedException|any, data: DataPipeline.PutPipelineDefinitionOutput|any) => void): Request;
      queryObjects(params: DataPipeline.QueryObjectsInput, callback?: (err: DataPipeline.PipelineNotFoundException|DataPipeline.PipelineDeletedException|DataPipeline.InternalServiceError|DataPipeline.InvalidRequestException|any, data: DataPipeline.QueryObjectsOutput|any) => void): Request;
      removeTags(params: DataPipeline.RemoveTagsInput, callback?: (err: DataPipeline.InternalServiceError|DataPipeline.InvalidRequestException|DataPipeline.PipelineNotFoundException|DataPipeline.PipelineDeletedException|any, data: DataPipeline.RemoveTagsOutput|any) => void): Request;
      reportTaskProgress(params: DataPipeline.ReportTaskProgressInput, callback?: (err: DataPipeline.InternalServiceError|DataPipeline.InvalidRequestException|DataPipeline.TaskNotFoundException|DataPipeline.PipelineNotFoundException|DataPipeline.PipelineDeletedException|any, data: DataPipeline.ReportTaskProgressOutput|any) => void): Request;
      reportTaskRunnerHeartbeat(params: DataPipeline.ReportTaskRunnerHeartbeatInput, callback?: (err: DataPipeline.InternalServiceError|DataPipeline.InvalidRequestException|any, data: DataPipeline.ReportTaskRunnerHeartbeatOutput|any) => void): Request;
      setStatus(params: DataPipeline.SetStatusInput, callback?: (err: DataPipeline.PipelineNotFoundException|DataPipeline.PipelineDeletedException|DataPipeline.InternalServiceError|DataPipeline.InvalidRequestException|any, data: any) => void): Request;
      setTaskStatus(params: DataPipeline.SetTaskStatusInput, callback?: (err: DataPipeline.InternalServiceError|DataPipeline.TaskNotFoundException|DataPipeline.InvalidRequestException|DataPipeline.PipelineNotFoundException|DataPipeline.PipelineDeletedException|any, data: DataPipeline.SetTaskStatusOutput|any) => void): Request;
      validatePipelineDefinition(params: DataPipeline.ValidatePipelineDefinitionInput, callback?: (err: DataPipeline.InternalServiceError|DataPipeline.InvalidRequestException|DataPipeline.PipelineNotFoundException|DataPipeline.PipelineDeletedException|any, data: DataPipeline.ValidatePipelineDefinitionOutput|any) => void): Request;

    }

    export module DataPipeline {
        export type OperatorType = string;
        export type ParameterAttributeList = ParameterAttribute[];
        export type ParameterObjectList = ParameterObject[];
        export type ParameterValueList = ParameterValue[];
        export type PipelineDescriptionList = PipelineDescription[];
        export type PipelineObjectList = PipelineObject[];
        export type PipelineObjectMap = {[key:string]: PipelineObject};
        export type SelectorList = Selector[];
        export type TaskStatus = string;
        export type ValidationErrors = ValidationError[];
        export type ValidationWarnings = ValidationWarning[];
        export type attributeNameString = string;    // pattern: &quot;[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*&quot;, max: 256, min: 1
        export type attributeValueString = string;    // pattern: &quot;[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*&quot;, max: 10240
        export type cancelActive = boolean;
        export type errorMessage = string;
        export type fieldList = Field[];
        export type fieldNameString = string;    // pattern: &quot;[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*&quot;, max: 256, min: 1
        export type fieldStringValue = string;    // pattern: &quot;[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*&quot;, max: 10240
        export type id = string;    // pattern: &quot;[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*&quot;, max: 1024, min: 1
        export type idList = id[];
        export type int = number;
        export type longString = string;    // pattern: &quot;[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*&quot;, max: 20971520
        export type pipelineList = PipelineIdName[];
        export type stringList = string[];
        export type tagKey = string;    // max: 128, min: 1
        export type tagList = Tag[];    // max: 10
        export type tagValue = string;    // max: 256
        export type taskId = string;    // pattern: &quot;[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*&quot;, max: 2048, min: 1
        export type timestamp = number;
        export type validationMessage = string;    // pattern: &quot;[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*&quot;, max: 10000
        export type validationMessages = validationMessage[];

        export interface ActivatePipelineInput {
            pipelineId: id;
            parameterValues?: ParameterValueList;
            startTimestamp?: timestamp;
        }
        export interface ActivatePipelineOutput {
        }
        export interface AddTagsInput {
            pipelineId: id;
            tags: tagList;
        }
        export interface AddTagsOutput {
        }
        export interface CreatePipelineInput {
            name: id;
            uniqueId: id;
            description?: string;
            tags?: tagList;
        }
        export interface CreatePipelineOutput {
            pipelineId: id;
        }
        export interface DeactivatePipelineInput {
            pipelineId: id;
            cancelActive?: cancelActive;
        }
        export interface DeactivatePipelineOutput {
        }
        export interface DeletePipelineInput {
            pipelineId: id;
        }
        export interface DescribeObjectsInput {
            pipelineId: id;
            objectIds: idList;
            evaluateExpressions?: boolean;
            marker?: string;
        }
        export interface DescribeObjectsOutput {
            pipelineObjects: PipelineObjectList;
            marker?: string;
            hasMoreResults?: boolean;
        }
        export interface DescribePipelinesInput {
            pipelineIds: idList;
        }
        export interface DescribePipelinesOutput {
            pipelineDescriptionList: PipelineDescriptionList;
        }
        export interface EvaluateExpressionInput {
            pipelineId: id;
            objectId: id;
            expression: longString;
        }
        export interface EvaluateExpressionOutput {
            evaluatedExpression: longString;
        }
        export interface Field {
            key: fieldNameString;
            stringValue?: fieldStringValue;
            refValue?: fieldNameString;
        }
        export interface GetPipelineDefinitionInput {
            pipelineId: id;
            version?: string;
        }
        export interface GetPipelineDefinitionOutput {
            pipelineObjects?: PipelineObjectList;
            parameterObjects?: ParameterObjectList;
            parameterValues?: ParameterValueList;
        }
        export interface InstanceIdentity {
            document?: string;
            signature?: string;
        }
        export interface InternalServiceError {
            message?: errorMessage;
        }
        export interface InvalidRequestException {
            message?: errorMessage;
        }
        export interface ListPipelinesInput {
            marker?: string;
        }
        export interface ListPipelinesOutput {
            pipelineIdList: pipelineList;
            marker?: string;
            hasMoreResults?: boolean;
        }
        export interface Operator {
            type?: OperatorType;
            values?: stringList;
        }
        export interface ParameterAttribute {
            key: attributeNameString;
            stringValue: attributeValueString;
        }
        export interface ParameterObject {
            id: fieldNameString;
            attributes: ParameterAttributeList;
        }
        export interface ParameterValue {
            id: fieldNameString;
            stringValue: fieldStringValue;
        }
        export interface PipelineDeletedException {
            message?: errorMessage;
        }
        export interface PipelineDescription {
            pipelineId: id;
            name: id;
            fields: fieldList;
            description?: string;
            tags?: tagList;
        }
        export interface PipelineIdName {
            id?: id;
            name?: id;
        }
        export interface PipelineNotFoundException {
            message?: errorMessage;
        }
        export interface PipelineObject {
            id: id;
            name: id;
            fields: fieldList;
        }
        export interface PollForTaskInput {
            workerGroup: string;
            hostname?: id;
            instanceIdentity?: InstanceIdentity;
        }
        export interface PollForTaskOutput {
            taskObject?: TaskObject;
        }
        export interface PutPipelineDefinitionInput {
            pipelineId: id;
            pipelineObjects: PipelineObjectList;
            parameterObjects?: ParameterObjectList;
            parameterValues?: ParameterValueList;
        }
        export interface PutPipelineDefinitionOutput {
            validationErrors?: ValidationErrors;
            validationWarnings?: ValidationWarnings;
            errored: boolean;
        }
        export interface Query {
            selectors?: SelectorList;
        }
        export interface QueryObjectsInput {
            pipelineId: id;
            query?: Query;
            sphere: string;
            marker?: string;
            limit?: int;
        }
        export interface QueryObjectsOutput {
            ids?: idList;
            marker?: string;
            hasMoreResults?: boolean;
        }
        export interface RemoveTagsInput {
            pipelineId: id;
            tagKeys: stringList;
        }
        export interface RemoveTagsOutput {
        }
        export interface ReportTaskProgressInput {
            taskId: taskId;
            fields?: fieldList;
        }
        export interface ReportTaskProgressOutput {
            canceled: boolean;
        }
        export interface ReportTaskRunnerHeartbeatInput {
            taskrunnerId: id;
            workerGroup?: string;
            hostname?: id;
        }
        export interface ReportTaskRunnerHeartbeatOutput {
            terminate: boolean;
        }
        export interface Selector {
            fieldName?: string;
            operator?: Operator;
        }
        export interface SetStatusInput {
            pipelineId: id;
            objectIds: idList;
            status: string;
        }
        export interface SetTaskStatusInput {
            taskId: taskId;
            taskStatus: TaskStatus;
            errorId?: string;
            errorMessage?: errorMessage;
            errorStackTrace?: string;
        }
        export interface SetTaskStatusOutput {
        }
        export interface Tag {
            key: tagKey;
            value: tagValue;
        }
        export interface TaskNotFoundException {
            message?: errorMessage;
        }
        export interface TaskObject {
            taskId?: taskId;
            pipelineId?: id;
            attemptId?: id;
            objects?: PipelineObjectMap;
        }
        export interface ValidatePipelineDefinitionInput {
            pipelineId: id;
            pipelineObjects: PipelineObjectList;
            parameterObjects?: ParameterObjectList;
            parameterValues?: ParameterValueList;
        }
        export interface ValidatePipelineDefinitionOutput {
            validationErrors?: ValidationErrors;
            validationWarnings?: ValidationWarnings;
            errored: boolean;
        }
        export interface ValidationError {
            id?: id;
            errors?: validationMessages;
        }
        export interface ValidationWarning {
            id?: id;
            warnings?: validationMessages;
        }

    }
}
