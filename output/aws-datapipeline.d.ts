// DO NOT EDIT!
//

///<reference path="./aws-sdk-common.d.ts" />
declare module "aws-sdk" {
    export class DataPipeline {
      constructor(options?: any);
      activatePipeline(params: DataPipelineActivatePipelineInput, callback: (err: DataPipelinePipelineNotFoundException|DataPipelinePipelineDeletedException|DataPipelineInternalServiceError|DataPipelineInvalidRequestException|any, data: DataPipelineActivatePipelineOutput|any) => void): void;
      addTags(params: DataPipelineAddTagsInput, callback: (err: DataPipelineInternalServiceError|DataPipelineInvalidRequestException|DataPipelinePipelineNotFoundException|DataPipelinePipelineDeletedException|any, data: DataPipelineAddTagsOutput|any) => void): void;
      createPipeline(params: DataPipelineCreatePipelineInput, callback: (err: DataPipelineInternalServiceError|DataPipelineInvalidRequestException|any, data: DataPipelineCreatePipelineOutput|any) => void): void;
      deactivatePipeline(params: DataPipelineDeactivatePipelineInput, callback: (err: DataPipelinePipelineNotFoundException|DataPipelinePipelineDeletedException|DataPipelineInternalServiceError|DataPipelineInvalidRequestException|any, data: DataPipelineDeactivatePipelineOutput|any) => void): void;
      deletePipeline(params: DataPipelineDeletePipelineInput, callback: (err: DataPipelinePipelineNotFoundException|DataPipelineInternalServiceError|DataPipelineInvalidRequestException|any, data: any) => void): void;
      describeObjects(params: DataPipelineDescribeObjectsInput, callback: (err: DataPipelineInternalServiceError|DataPipelineInvalidRequestException|DataPipelinePipelineNotFoundException|DataPipelinePipelineDeletedException|any, data: DataPipelineDescribeObjectsOutput|any) => void): void;
      describePipelines(params: DataPipelineDescribePipelinesInput, callback: (err: DataPipelinePipelineNotFoundException|DataPipelinePipelineDeletedException|DataPipelineInternalServiceError|DataPipelineInvalidRequestException|any, data: DataPipelineDescribePipelinesOutput|any) => void): void;
      evaluateExpression(params: DataPipelineEvaluateExpressionInput, callback: (err: DataPipelineInternalServiceError|DataPipelineTaskNotFoundException|DataPipelineInvalidRequestException|DataPipelinePipelineNotFoundException|DataPipelinePipelineDeletedException|any, data: DataPipelineEvaluateExpressionOutput|any) => void): void;
      getPipelineDefinition(params: DataPipelineGetPipelineDefinitionInput, callback: (err: DataPipelineInternalServiceError|DataPipelineInvalidRequestException|DataPipelinePipelineNotFoundException|DataPipelinePipelineDeletedException|any, data: DataPipelineGetPipelineDefinitionOutput|any) => void): void;
      listPipelines(params: DataPipelineListPipelinesInput, callback: (err: DataPipelineInternalServiceError|DataPipelineInvalidRequestException|any, data: DataPipelineListPipelinesOutput|any) => void): void;
      pollForTask(params: DataPipelinePollForTaskInput, callback: (err: DataPipelineInternalServiceError|DataPipelineInvalidRequestException|DataPipelineTaskNotFoundException|any, data: DataPipelinePollForTaskOutput|any) => void): void;
      putPipelineDefinition(params: DataPipelinePutPipelineDefinitionInput, callback: (err: DataPipelineInternalServiceError|DataPipelineInvalidRequestException|DataPipelinePipelineNotFoundException|DataPipelinePipelineDeletedException|any, data: DataPipelinePutPipelineDefinitionOutput|any) => void): void;
      queryObjects(params: DataPipelineQueryObjectsInput, callback: (err: DataPipelinePipelineNotFoundException|DataPipelinePipelineDeletedException|DataPipelineInternalServiceError|DataPipelineInvalidRequestException|any, data: DataPipelineQueryObjectsOutput|any) => void): void;
      removeTags(params: DataPipelineRemoveTagsInput, callback: (err: DataPipelineInternalServiceError|DataPipelineInvalidRequestException|DataPipelinePipelineNotFoundException|DataPipelinePipelineDeletedException|any, data: DataPipelineRemoveTagsOutput|any) => void): void;
      reportTaskProgress(params: DataPipelineReportTaskProgressInput, callback: (err: DataPipelineInternalServiceError|DataPipelineInvalidRequestException|DataPipelineTaskNotFoundException|DataPipelinePipelineNotFoundException|DataPipelinePipelineDeletedException|any, data: DataPipelineReportTaskProgressOutput|any) => void): void;
      reportTaskRunnerHeartbeat(params: DataPipelineReportTaskRunnerHeartbeatInput, callback: (err: DataPipelineInternalServiceError|DataPipelineInvalidRequestException|any, data: DataPipelineReportTaskRunnerHeartbeatOutput|any) => void): void;
      setStatus(params: DataPipelineSetStatusInput, callback: (err: DataPipelinePipelineNotFoundException|DataPipelinePipelineDeletedException|DataPipelineInternalServiceError|DataPipelineInvalidRequestException|any, data: any) => void): void;
      setTaskStatus(params: DataPipelineSetTaskStatusInput, callback: (err: DataPipelineInternalServiceError|DataPipelineTaskNotFoundException|DataPipelineInvalidRequestException|DataPipelinePipelineNotFoundException|DataPipelinePipelineDeletedException|any, data: DataPipelineSetTaskStatusOutput|any) => void): void;
      validatePipelineDefinition(params: DataPipelineValidatePipelineDefinitionInput, callback: (err: DataPipelineInternalServiceError|DataPipelineInvalidRequestException|DataPipelinePipelineNotFoundException|DataPipelinePipelineDeletedException|any, data: DataPipelineValidatePipelineDefinitionOutput|any) => void): void;
    }

    export interface DataPipelineActivatePipelineInput {
        pipelineId: DataPipelineid;
        parameterValues?: DataPipelineParameterValueList;
        startTimestamp?: DataPipelinetimestamp;
    }

    export interface DataPipelineActivatePipelineOutput {
    }

    export interface DataPipelineAddTagsInput {
        pipelineId: DataPipelineid;
        tags: DataPipelinetagList;
    }

    export interface DataPipelineAddTagsOutput {
    }

    export interface DataPipelineCreatePipelineInput {
        name: DataPipelineid;
        uniqueId: DataPipelineid;
        description?: DataPipelinestring;
        tags?: DataPipelinetagList;
    }

    export interface DataPipelineCreatePipelineOutput {
        pipelineId: DataPipelineid;
    }

    export interface DataPipelineDeactivatePipelineInput {
        pipelineId: DataPipelineid;
        cancelActive?: DataPipelinecancelActive;
    }

    export interface DataPipelineDeactivatePipelineOutput {
    }

    export interface DataPipelineDeletePipelineInput {
        pipelineId: DataPipelineid;
    }

    export interface DataPipelineDescribeObjectsInput {
        pipelineId: DataPipelineid;
        objectIds: DataPipelineidList;
        evaluateExpressions?: DataPipelineboolean;
        marker?: DataPipelinestring;
    }

    export interface DataPipelineDescribeObjectsOutput {
        pipelineObjects: DataPipelinePipelineObjectList;
        marker?: DataPipelinestring;
        hasMoreResults?: DataPipelineboolean;
    }

    export interface DataPipelineDescribePipelinesInput {
        pipelineIds: DataPipelineidList;
    }

    export interface DataPipelineDescribePipelinesOutput {
        pipelineDescriptionList: DataPipelinePipelineDescriptionList;
    }

    export interface DataPipelineEvaluateExpressionInput {
        pipelineId: DataPipelineid;
        objectId: DataPipelineid;
        expression: DataPipelinelongString;
    }

    export interface DataPipelineEvaluateExpressionOutput {
        evaluatedExpression: DataPipelinelongString;
    }

    export interface DataPipelineField {
        key: DataPipelinefieldNameString;
        stringValue?: DataPipelinefieldStringValue;
        refValue?: DataPipelinefieldNameString;
    }

    export interface DataPipelineGetPipelineDefinitionInput {
        pipelineId: DataPipelineid;
        version?: DataPipelinestring;
    }

    export interface DataPipelineGetPipelineDefinitionOutput {
        pipelineObjects?: DataPipelinePipelineObjectList;
        parameterObjects?: DataPipelineParameterObjectList;
        parameterValues?: DataPipelineParameterValueList;
    }

    export interface DataPipelineInstanceIdentity {
        document?: DataPipelinestring;
        signature?: DataPipelinestring;
    }

    export interface DataPipelineInternalServiceError {
        message?: DataPipelineerrorMessage;
    }

    export interface DataPipelineInvalidRequestException {
        message?: DataPipelineerrorMessage;
    }

    export interface DataPipelineListPipelinesInput {
        marker?: DataPipelinestring;
    }

    export interface DataPipelineListPipelinesOutput {
        pipelineIdList: DataPipelinepipelineList;
        marker?: DataPipelinestring;
        hasMoreResults?: DataPipelineboolean;
    }

    export interface DataPipelineOperator {
        type?: DataPipelineOperatorType;
        values?: DataPipelinestringList;
    }

    export type DataPipelineOperatorType = string;
    export interface DataPipelineParameterAttribute {
        key: DataPipelineattributeNameString;
        stringValue: DataPipelineattributeValueString;
    }

    export type DataPipelineParameterAttributeList = Array<DataPipelineParameterAttribute>;
    export interface DataPipelineParameterObject {
        id: DataPipelinefieldNameString;
        attributes: DataPipelineParameterAttributeList;
    }

    export type DataPipelineParameterObjectList = Array<DataPipelineParameterObject>;
    export interface DataPipelineParameterValue {
        id: DataPipelinefieldNameString;
        stringValue: DataPipelinefieldStringValue;
    }

    export type DataPipelineParameterValueList = Array<DataPipelineParameterValue>;
    export interface DataPipelinePipelineDeletedException {
        message?: DataPipelineerrorMessage;
    }

    export interface DataPipelinePipelineDescription {
        pipelineId: DataPipelineid;
        name: DataPipelineid;
        fields: DataPipelinefieldList;
        description?: DataPipelinestring;
        tags?: DataPipelinetagList;
    }

    export type DataPipelinePipelineDescriptionList = Array<DataPipelinePipelineDescription>;
    export interface DataPipelinePipelineIdName {
        id?: DataPipelineid;
        name?: DataPipelineid;
    }

    export interface DataPipelinePipelineNotFoundException {
        message?: DataPipelineerrorMessage;
    }

    export interface DataPipelinePipelineObject {
        id: DataPipelineid;
        name: DataPipelineid;
        fields: DataPipelinefieldList;
    }

    export type DataPipelinePipelineObjectList = Array<DataPipelinePipelineObject>;
    export type DataPipelinePipelineObjectMap = any; // not really - it was 'map' instead - must fix this one
    export interface DataPipelinePollForTaskInput {
        workerGroup: DataPipelinestring;
        hostname?: DataPipelineid;
        instanceIdentity?: DataPipelineInstanceIdentity;
    }

    export interface DataPipelinePollForTaskOutput {
        taskObject?: DataPipelineTaskObject;
    }

    export interface DataPipelinePutPipelineDefinitionInput {
        pipelineId: DataPipelineid;
        pipelineObjects: DataPipelinePipelineObjectList;
        parameterObjects?: DataPipelineParameterObjectList;
        parameterValues?: DataPipelineParameterValueList;
    }

    export interface DataPipelinePutPipelineDefinitionOutput {
        validationErrors?: DataPipelineValidationErrors;
        validationWarnings?: DataPipelineValidationWarnings;
        errored: DataPipelineboolean;
    }

    export interface DataPipelineQuery {
        selectors?: DataPipelineSelectorList;
    }

    export interface DataPipelineQueryObjectsInput {
        pipelineId: DataPipelineid;
        query?: DataPipelineQuery;
        sphere: DataPipelinestring;
        marker?: DataPipelinestring;
        limit?: DataPipelineint;
    }

    export interface DataPipelineQueryObjectsOutput {
        ids?: DataPipelineidList;
        marker?: DataPipelinestring;
        hasMoreResults?: DataPipelineboolean;
    }

    export interface DataPipelineRemoveTagsInput {
        pipelineId: DataPipelineid;
        tagKeys: DataPipelinestringList;
    }

    export interface DataPipelineRemoveTagsOutput {
    }

    export interface DataPipelineReportTaskProgressInput {
        taskId: DataPipelinetaskId;
        fields?: DataPipelinefieldList;
    }

    export interface DataPipelineReportTaskProgressOutput {
        canceled: DataPipelineboolean;
    }

    export interface DataPipelineReportTaskRunnerHeartbeatInput {
        taskrunnerId: DataPipelineid;
        workerGroup?: DataPipelinestring;
        hostname?: DataPipelineid;
    }

    export interface DataPipelineReportTaskRunnerHeartbeatOutput {
        terminate: DataPipelineboolean;
    }

    export interface DataPipelineSelector {
        fieldName?: DataPipelinestring;
        operator?: DataPipelineOperator;
    }

    export type DataPipelineSelectorList = Array<DataPipelineSelector>;
    export interface DataPipelineSetStatusInput {
        pipelineId: DataPipelineid;
        objectIds: DataPipelineidList;
        status: DataPipelinestring;
    }

    export interface DataPipelineSetTaskStatusInput {
        taskId: DataPipelinetaskId;
        taskStatus: DataPipelineTaskStatus;
        errorId?: DataPipelinestring;
        errorMessage?: DataPipelineerrorMessage;
        errorStackTrace?: DataPipelinestring;
    }

    export interface DataPipelineSetTaskStatusOutput {
    }

    export interface DataPipelineTag {
        key: DataPipelinetagKey;
        value: DataPipelinetagValue;
    }

    export interface DataPipelineTaskNotFoundException {
        message?: DataPipelineerrorMessage;
    }

    export interface DataPipelineTaskObject {
        taskId?: DataPipelinetaskId;
        pipelineId?: DataPipelineid;
        attemptId?: DataPipelineid;
        objects?: DataPipelinePipelineObjectMap;
    }

    export type DataPipelineTaskStatus = string;
    export interface DataPipelineValidatePipelineDefinitionInput {
        pipelineId: DataPipelineid;
        pipelineObjects: DataPipelinePipelineObjectList;
        parameterObjects?: DataPipelineParameterObjectList;
        parameterValues?: DataPipelineParameterValueList;
    }

    export interface DataPipelineValidatePipelineDefinitionOutput {
        validationErrors?: DataPipelineValidationErrors;
        validationWarnings?: DataPipelineValidationWarnings;
        errored: DataPipelineboolean;
    }

    export interface DataPipelineValidationError {
        id?: DataPipelineid;
        errors?: DataPipelinevalidationMessages;
    }

    export type DataPipelineValidationErrors = Array<DataPipelineValidationError>;
    export interface DataPipelineValidationWarning {
        id?: DataPipelineid;
        warnings?: DataPipelinevalidationMessages;
    }

    export type DataPipelineValidationWarnings = Array<DataPipelineValidationWarning>;
    export type DataPipelineattributeNameString = string; // pattern: "[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*"
    export type DataPipelineattributeValueString = string; // pattern: "[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*"
    export type DataPipelineboolean = boolean;
    export type DataPipelinecancelActive = boolean;
    export type DataPipelineerrorMessage = string;
    export type DataPipelinefieldList = Array<DataPipelineField>;
    export type DataPipelinefieldNameString = string; // pattern: "[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*"
    export type DataPipelinefieldStringValue = string; // pattern: "[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*"
    export type DataPipelineid = string; // pattern: "[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*"
    export type DataPipelineidList = Array<DataPipelineid>;
    export type DataPipelineint = number;
    export type DataPipelinelongString = string; // pattern: "[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*"
    export type DataPipelinepipelineList = Array<DataPipelinePipelineIdName>;
    export type DataPipelinestring = string; // pattern: "[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*"
    export type DataPipelinestringList = Array<DataPipelinestring>;
    export type DataPipelinetagKey = string;
    export type DataPipelinetagList = Array<DataPipelineTag>; // max: 10
    export type DataPipelinetagValue = string;
    export type DataPipelinetaskId = string; // pattern: "[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*"
    export type DataPipelinetimestamp = number;
    export type DataPipelinevalidationMessage = string; // pattern: "[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*"
    export type DataPipelinevalidationMessages = Array<DataPipelinevalidationMessage>;
}
