// DO NOT EDIT!
//
declare module "aws-sdk" {
    export class DataPipeline {
      constructor(options?: any);
      activatePipeline(params: ActivatePipelineInput, callback: (err: PipelineNotFoundException|PipelineDeletedException|InternalServiceError|InvalidRequestException|any, data: ActivatePipelineOutput|any) => void): void;
      addTags(params: AddTagsInput, callback: (err: InternalServiceError|InvalidRequestException|PipelineNotFoundException|PipelineDeletedException|any, data: AddTagsOutput|any) => void): void;
      createPipeline(params: CreatePipelineInput, callback: (err: InternalServiceError|InvalidRequestException|any, data: CreatePipelineOutput|any) => void): void;
      deactivatePipeline(params: DeactivatePipelineInput, callback: (err: PipelineNotFoundException|PipelineDeletedException|InternalServiceError|InvalidRequestException|any, data: DeactivatePipelineOutput|any) => void): void;
      deletePipeline(params: DeletePipelineInput, callback: (err: PipelineNotFoundException|InternalServiceError|InvalidRequestException|any, data: any) => void): void;
      describeObjects(params: DescribeObjectsInput, callback: (err: InternalServiceError|InvalidRequestException|PipelineNotFoundException|PipelineDeletedException|any, data: DescribeObjectsOutput|any) => void): void;
      describePipelines(params: DescribePipelinesInput, callback: (err: PipelineNotFoundException|PipelineDeletedException|InternalServiceError|InvalidRequestException|any, data: DescribePipelinesOutput|any) => void): void;
      evaluateExpression(params: EvaluateExpressionInput, callback: (err: InternalServiceError|TaskNotFoundException|InvalidRequestException|PipelineNotFoundException|PipelineDeletedException|any, data: EvaluateExpressionOutput|any) => void): void;
      getPipelineDefinition(params: GetPipelineDefinitionInput, callback: (err: InternalServiceError|InvalidRequestException|PipelineNotFoundException|PipelineDeletedException|any, data: GetPipelineDefinitionOutput|any) => void): void;
      listPipelines(params: ListPipelinesInput, callback: (err: InternalServiceError|InvalidRequestException|any, data: ListPipelinesOutput|any) => void): void;
      pollForTask(params: PollForTaskInput, callback: (err: InternalServiceError|InvalidRequestException|TaskNotFoundException|any, data: PollForTaskOutput|any) => void): void;
      putPipelineDefinition(params: PutPipelineDefinitionInput, callback: (err: InternalServiceError|InvalidRequestException|PipelineNotFoundException|PipelineDeletedException|any, data: PutPipelineDefinitionOutput|any) => void): void;
      queryObjects(params: QueryObjectsInput, callback: (err: PipelineNotFoundException|PipelineDeletedException|InternalServiceError|InvalidRequestException|any, data: QueryObjectsOutput|any) => void): void;
      removeTags(params: RemoveTagsInput, callback: (err: InternalServiceError|InvalidRequestException|PipelineNotFoundException|PipelineDeletedException|any, data: RemoveTagsOutput|any) => void): void;
      reportTaskProgress(params: ReportTaskProgressInput, callback: (err: InternalServiceError|InvalidRequestException|TaskNotFoundException|PipelineNotFoundException|PipelineDeletedException|any, data: ReportTaskProgressOutput|any) => void): void;
      reportTaskRunnerHeartbeat(params: ReportTaskRunnerHeartbeatInput, callback: (err: InternalServiceError|InvalidRequestException|any, data: ReportTaskRunnerHeartbeatOutput|any) => void): void;
      setStatus(params: SetStatusInput, callback: (err: PipelineNotFoundException|PipelineDeletedException|InternalServiceError|InvalidRequestException|any, data: any) => void): void;
      setTaskStatus(params: SetTaskStatusInput, callback: (err: InternalServiceError|TaskNotFoundException|InvalidRequestException|PipelineNotFoundException|PipelineDeletedException|any, data: SetTaskStatusOutput|any) => void): void;
      validatePipelineDefinition(params: ValidatePipelineDefinitionInput, callback: (err: InternalServiceError|InvalidRequestException|PipelineNotFoundException|PipelineDeletedException|any, data: ValidatePipelineDefinitionOutput|any) => void): void;
    }

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


    export type OperatorType = string;

    export interface ParameterAttribute {
      key: attributeNameString;
      stringValue: attributeValueString;
    }


    export type ParameterAttributeList = Array<ParameterAttribute>;

    export interface ParameterObject {
      id: fieldNameString;
      attributes: ParameterAttributeList;
    }


    export type ParameterObjectList = Array<ParameterObject>;

    export interface ParameterValue {
      id: fieldNameString;
      stringValue: fieldStringValue;
    }


    export type ParameterValueList = Array<ParameterValue>;

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


    export type PipelineDescriptionList = Array<PipelineDescription>;

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


    export type PipelineObjectList = Array<PipelineObject>;

    export type PipelineObjectMap = any; // not really - it was 'map' instead - must fix this one

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


    export type SelectorList = Array<Selector>;

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


    export type TaskStatus = string;

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


    export type ValidationErrors = Array<ValidationError>;

    export interface ValidationWarning {
      id?: id;
      warnings?: validationMessages;
    }


    export type ValidationWarnings = Array<ValidationWarning>;

    export type attributeNameString = string; // pattern: "[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*"

    export type attributeValueString = string; // pattern: "[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*"

    export type boolean = boolean;

    export type cancelActive = boolean;

    export type errorMessage = string;

    export type fieldList = Array<Field>;

    export type fieldNameString = string; // pattern: "[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*"

    export type fieldStringValue = string; // pattern: "[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*"

    export type id = string; // pattern: "[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*"

    export type idList = Array<id>;

    export type int = number;

    export type longString = string; // pattern: "[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*"

    export type pipelineList = Array<PipelineIdName>;

    export type string = string; // pattern: "[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*"

    export type stringList = Array<string>;

    export type tagKey = string;

    export type tagList = Array<Tag>; // max: 10

    export type tagValue = string;

    export type taskId = string; // pattern: "[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*"

    export type timestamp = number;

    export type validationMessage = string; // pattern: "[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*"

    export type validationMessages = Array<validationMessage>;

}
