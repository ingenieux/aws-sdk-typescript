// DO NOT EDIT!
//
declare module "aws-sdk" {
    export class DynamoDB {
      constructor(options?: any);
      batchGetItem(params: BatchGetItemInput, callback: (err: ProvisionedThroughputExceededException|ResourceNotFoundException|InternalServerError|any, data: BatchGetItemOutput|any) => void): void;
      batchWriteItem(params: BatchWriteItemInput, callback: (err: ProvisionedThroughputExceededException|ResourceNotFoundException|LimitExceededException|InternalServerError|any, data: BatchWriteItemOutput|any) => void): void;
      createTable(params: CreateTableInput, callback: (err: ResourceInUseException|LimitExceededException|InternalServerError|any, data: CreateTableOutput|any) => void): void;
      deleteItem(params: DeleteItemInput, callback: (err: ConditionalCheckFailedException|ProvisionedThroughputExceededException|ResourceNotFoundException|LimitExceededException|InternalServerError|any, data: DeleteItemOutput|any) => void): void;
      deleteTable(params: DeleteTableInput, callback: (err: ResourceInUseException|ResourceNotFoundException|LimitExceededException|InternalServerError|any, data: DeleteTableOutput|any) => void): void;
      describeTable(params: DescribeTableInput, callback: (err: ResourceNotFoundException|InternalServerError|any, data: DescribeTableOutput|any) => void): void;
      getItem(params: GetItemInput, callback: (err: ProvisionedThroughputExceededException|ResourceNotFoundException|InternalServerError|any, data: GetItemOutput|any) => void): void;
      listTables(params: ListTablesInput, callback: (err: InternalServerError|any, data: ListTablesOutput|any) => void): void;
      putItem(params: PutItemInput, callback: (err: ConditionalCheckFailedException|ProvisionedThroughputExceededException|ResourceNotFoundException|LimitExceededException|InternalServerError|any, data: PutItemOutput|any) => void): void;
      query(params: QueryInput, callback: (err: ProvisionedThroughputExceededException|ResourceNotFoundException|InternalServerError|any, data: QueryOutput|any) => void): void;
      scan(params: ScanInput, callback: (err: ProvisionedThroughputExceededException|ResourceNotFoundException|InternalServerError|any, data: ScanOutput|any) => void): void;
      updateItem(params: UpdateItemInput, callback: (err: ConditionalCheckFailedException|ProvisionedThroughputExceededException|ResourceNotFoundException|LimitExceededException|InternalServerError|any, data: UpdateItemOutput|any) => void): void;
      updateTable(params: UpdateTableInput, callback: (err: ResourceInUseException|ResourceNotFoundException|LimitExceededException|InternalServerError|any, data: UpdateTableOutput|any) => void): void;
    }

    export type AttributeAction = string;

    export type AttributeMap = any; // not really - it was 'map' instead - must fix this one

    export type AttributeName = string;

    export type AttributeNameList = Array<AttributeName>;

    export type AttributeUpdates = any; // not really - it was 'map' instead - must fix this one

    export interface AttributeValue {
      S?: StringAttributeValue;
      N?: NumberAttributeValue;
      B?: BinaryAttributeValue;
      SS?: StringSetAttributeValue;
      NS?: NumberSetAttributeValue;
      BS?: BinarySetAttributeValue;
    }


    export type AttributeValueList = Array<AttributeValue>;

    export interface AttributeValueUpdate {
      Value?: AttributeValue;
      Action?: AttributeAction;
    }


    export interface BatchGetItemInput {
      RequestItems: BatchGetRequestMap;
    }


    export interface BatchGetItemOutput {
      Responses?: BatchGetResponseMap;
      UnprocessedKeys?: BatchGetRequestMap;
    }


    export type BatchGetRequestMap = any; // not really - it was 'map' instead - must fix this one

    export type BatchGetResponseMap = any; // not really - it was 'map' instead - must fix this one

    export interface BatchResponse {
      Items?: ItemList;
      ConsumedCapacityUnits?: ConsumedCapacityUnits;
    }


    export interface BatchWriteItemInput {
      RequestItems: BatchWriteItemRequestMap;
    }


    export interface BatchWriteItemOutput {
      Responses?: BatchWriteResponseMap;
      UnprocessedItems?: BatchWriteItemRequestMap;
    }


    export type BatchWriteItemRequestMap = any; // not really - it was 'map' instead - must fix this one

    export interface BatchWriteResponse {
      ConsumedCapacityUnits?: ConsumedCapacityUnits;
    }


    export type BatchWriteResponseMap = any; // not really - it was 'map' instead - must fix this one

    export type BinaryAttributeValue = any; // not really - it was 'blob' instead - must fix this one

    export type BinarySetAttributeValue = Array<BinaryAttributeValue>;

    export type BooleanObject = boolean;

    export type ComparisonOperator = string;

    export interface Condition {
      AttributeValueList?: AttributeValueList;
      ComparisonOperator: ComparisonOperator;
    }


    export interface ConditionalCheckFailedException {
      message?: ErrorMessage;
    }


    export type ConsistentRead = boolean;

    export type ConsumedCapacityUnits = number;

    export interface CreateTableInput {
      TableName: TableName;
      KeySchema: KeySchema;
      ProvisionedThroughput: ProvisionedThroughput;
    }


    export interface CreateTableOutput {
      TableDescription?: TableDescription;
    }


    export type Date = number;

    export interface DeleteItemInput {
      TableName: TableName;
      Key: Key;
      Expected?: ExpectedAttributeMap;
      ReturnValues?: ReturnValue;
    }


    export interface DeleteItemOutput {
      Attributes?: AttributeMap;
      ConsumedCapacityUnits?: ConsumedCapacityUnits;
    }


    export interface DeleteRequest {
      Key: Key;
    }


    export interface DeleteTableInput {
      TableName: TableName;
    }


    export interface DeleteTableOutput {
      TableDescription?: TableDescription;
    }


    export interface DescribeTableInput {
      TableName: TableName;
    }


    export interface DescribeTableOutput {
      Table?: TableDescription;
    }


    export type ErrorMessage = string;

    export type ExpectedAttributeMap = any; // not really - it was 'map' instead - must fix this one

    export interface ExpectedAttributeValue {
      Value?: AttributeValue;
      Exists?: BooleanObject;
    }


    export type FilterConditionMap = any; // not really - it was 'map' instead - must fix this one

    export interface GetItemInput {
      TableName: TableName;
      Key: Key;
      AttributesToGet?: AttributeNameList;
      ConsistentRead?: ConsistentRead;
    }


    export interface GetItemOutput {
      Item?: AttributeMap;
      ConsumedCapacityUnits?: ConsumedCapacityUnits;
    }


    export type Integer = number;

    export interface InternalServerError {
      message?: ErrorMessage;
    }


    export type ItemList = Array<AttributeMap>;

    export interface Key {
      HashKeyElement: AttributeValue;
      RangeKeyElement?: AttributeValue;
    }


    export type KeyList = Array<Key>; // max: 100

    export interface KeySchema {
      HashKeyElement: KeySchemaElement;
      RangeKeyElement?: KeySchemaElement;
    }


    export type KeySchemaAttributeName = string;

    export interface KeySchemaElement {
      AttributeName: KeySchemaAttributeName;
      AttributeType: ScalarAttributeType;
    }


    export interface KeysAndAttributes {
      Keys: KeyList;
      AttributesToGet?: AttributeNameList;
      ConsistentRead?: ConsistentRead;
    }


    export interface LimitExceededException {
      message?: ErrorMessage;
    }


    export interface ListTablesInput {
      ExclusiveStartTableName?: TableName;
      Limit?: ListTablesInputLimit;
    }


    export type ListTablesInputLimit = number;

    export interface ListTablesOutput {
      TableNames?: TableNameList;
      LastEvaluatedTableName?: TableName;
    }


    export type Long = number;

    export type NumberAttributeValue = string;

    export type NumberSetAttributeValue = Array<NumberAttributeValue>;

    export type PositiveIntegerObject = number;

    export type PositiveLongObject = number;

    export interface ProvisionedThroughput {
      ReadCapacityUnits: PositiveLongObject;
      WriteCapacityUnits: PositiveLongObject;
    }


    export interface ProvisionedThroughputDescription {
      LastIncreaseDateTime?: Date;
      LastDecreaseDateTime?: Date;
      NumberOfDecreasesToday?: PositiveLongObject;
      ReadCapacityUnits?: PositiveLongObject;
      WriteCapacityUnits?: PositiveLongObject;
    }


    export interface ProvisionedThroughputExceededException {
      message?: ErrorMessage;
    }


    export interface PutItemInput {
      TableName: TableName;
      Item: PutItemInputAttributeMap;
      Expected?: ExpectedAttributeMap;
      ReturnValues?: ReturnValue;
    }


    export type PutItemInputAttributeMap = any; // not really - it was 'map' instead - must fix this one

    export interface PutItemOutput {
      Attributes?: AttributeMap;
      ConsumedCapacityUnits?: ConsumedCapacityUnits;
    }


    export interface PutRequest {
      Item: PutItemInputAttributeMap;
    }


    export interface QueryInput {
      TableName: TableName;
      AttributesToGet?: AttributeNameList;
      Limit?: PositiveIntegerObject;
      ConsistentRead?: ConsistentRead;
      Count?: BooleanObject;
      HashKeyValue: AttributeValue;
      RangeKeyCondition?: Condition;
      ScanIndexForward?: BooleanObject;
      ExclusiveStartKey?: Key;
    }


    export interface QueryOutput {
      Items?: ItemList;
      Count?: Integer;
      LastEvaluatedKey?: Key;
      ConsumedCapacityUnits?: ConsumedCapacityUnits;
    }


    export interface ResourceInUseException {
      message?: ErrorMessage;
    }


    export interface ResourceNotFoundException {
      message?: ErrorMessage;
    }


    export type ReturnValue = string;

    export type ScalarAttributeType = string;

    export interface ScanInput {
      TableName: TableName;
      AttributesToGet?: AttributeNameList;
      Limit?: PositiveIntegerObject;
      Count?: BooleanObject;
      ScanFilter?: FilterConditionMap;
      ExclusiveStartKey?: Key;
    }


    export interface ScanOutput {
      Items?: ItemList;
      Count?: Integer;
      ScannedCount?: Integer;
      LastEvaluatedKey?: Key;
      ConsumedCapacityUnits?: ConsumedCapacityUnits;
    }


    export type String = string;

    export type StringAttributeValue = string;

    export type StringSetAttributeValue = Array<StringAttributeValue>;

    export interface TableDescription {
      TableName?: TableName;
      KeySchema?: KeySchema;
      TableStatus?: TableStatus;
      CreationDateTime?: Date;
      ProvisionedThroughput?: ProvisionedThroughputDescription;
      TableSizeBytes?: Long;
      ItemCount?: Long;
    }


    export type TableName = string; // pattern: "[a-zA-Z0-9_.-]+"

    export type TableNameList = Array<TableName>;

    export type TableStatus = string;

    export interface UpdateItemInput {
      TableName: TableName;
      Key: Key;
      AttributeUpdates: AttributeUpdates;
      Expected?: ExpectedAttributeMap;
      ReturnValues?: ReturnValue;
    }


    export interface UpdateItemOutput {
      Attributes?: AttributeMap;
      ConsumedCapacityUnits?: ConsumedCapacityUnits;
    }


    export interface UpdateTableInput {
      TableName: TableName;
      ProvisionedThroughput: ProvisionedThroughput;
    }


    export interface UpdateTableOutput {
      TableDescription?: TableDescription;
    }


    export interface WriteRequest {
      PutRequest?: PutRequest;
      DeleteRequest?: DeleteRequest;
    }


    export type WriteRequests = Array<WriteRequest>; // max: 25

}
