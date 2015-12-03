// DO NOT EDIT!
//

///<reference path="./aws-sdk-common.d.ts" />
declare module "aws-sdk" {

    export class DynamoDB extends Service {
      constructor(options?: any);
      batchGetItem(params: DynamoDB.BatchGetItemInput, callback?: (err: DynamoDB.ProvisionedThroughputExceededException|DynamoDB.ResourceNotFoundException|DynamoDB.InternalServerError|any, data: DynamoDB.BatchGetItemOutput|any) => void): Request;
      batchWriteItem(params: DynamoDB.BatchWriteItemInput, callback?: (err: DynamoDB.ProvisionedThroughputExceededException|DynamoDB.ResourceNotFoundException|DynamoDB.LimitExceededException|DynamoDB.InternalServerError|any, data: DynamoDB.BatchWriteItemOutput|any) => void): Request;
      createTable(params: DynamoDB.CreateTableInput, callback?: (err: DynamoDB.ResourceInUseException|DynamoDB.LimitExceededException|DynamoDB.InternalServerError|any, data: DynamoDB.CreateTableOutput|any) => void): Request;
      deleteItem(params: DynamoDB.DeleteItemInput, callback?: (err: DynamoDB.ConditionalCheckFailedException|DynamoDB.ProvisionedThroughputExceededException|DynamoDB.ResourceNotFoundException|DynamoDB.LimitExceededException|DynamoDB.InternalServerError|any, data: DynamoDB.DeleteItemOutput|any) => void): Request;
      deleteTable(params: DynamoDB.DeleteTableInput, callback?: (err: DynamoDB.ResourceInUseException|DynamoDB.ResourceNotFoundException|DynamoDB.LimitExceededException|DynamoDB.InternalServerError|any, data: DynamoDB.DeleteTableOutput|any) => void): Request;
      describeTable(params: DynamoDB.DescribeTableInput, callback?: (err: DynamoDB.ResourceNotFoundException|DynamoDB.InternalServerError|any, data: DynamoDB.DescribeTableOutput|any) => void): Request;
      getItem(params: DynamoDB.GetItemInput, callback?: (err: DynamoDB.ProvisionedThroughputExceededException|DynamoDB.ResourceNotFoundException|DynamoDB.InternalServerError|any, data: DynamoDB.GetItemOutput|any) => void): Request;
      listTables(params: DynamoDB.ListTablesInput, callback?: (err: DynamoDB.InternalServerError|any, data: DynamoDB.ListTablesOutput|any) => void): Request;
      putItem(params: DynamoDB.PutItemInput, callback?: (err: DynamoDB.ConditionalCheckFailedException|DynamoDB.ProvisionedThroughputExceededException|DynamoDB.ResourceNotFoundException|DynamoDB.LimitExceededException|DynamoDB.InternalServerError|any, data: DynamoDB.PutItemOutput|any) => void): Request;
      query(params: DynamoDB.QueryInput, callback?: (err: DynamoDB.ProvisionedThroughputExceededException|DynamoDB.ResourceNotFoundException|DynamoDB.InternalServerError|any, data: DynamoDB.QueryOutput|any) => void): Request;
      scan(params: DynamoDB.ScanInput, callback?: (err: DynamoDB.ProvisionedThroughputExceededException|DynamoDB.ResourceNotFoundException|DynamoDB.InternalServerError|any, data: DynamoDB.ScanOutput|any) => void): Request;
      updateItem(params: DynamoDB.UpdateItemInput, callback?: (err: DynamoDB.ConditionalCheckFailedException|DynamoDB.ProvisionedThroughputExceededException|DynamoDB.ResourceNotFoundException|DynamoDB.LimitExceededException|DynamoDB.InternalServerError|any, data: DynamoDB.UpdateItemOutput|any) => void): Request;
      updateTable(params: DynamoDB.UpdateTableInput, callback?: (err: DynamoDB.ResourceInUseException|DynamoDB.ResourceNotFoundException|DynamoDB.LimitExceededException|DynamoDB.InternalServerError|any, data: DynamoDB.UpdateTableOutput|any) => void): Request;
    }
    
    export module DynamoDB {
        export type AttributeAction = string;
        export type AttributeMap = {[key:string]: AttributeValue};
        export type AttributeName = string;    // max: 65535
        export type AttributeNameList = AttributeName[];    // min: 1
        export type AttributeUpdates = {[key:string]: AttributeValueUpdate};
        export type AttributeValueList = AttributeValue[];
        export type BatchGetRequestMap = {[key:string]: KeysAndAttributes};    // max: 100, min: 1
        export type BatchGetResponseMap = {[key:string]: BatchResponse};
        export type BatchWriteItemRequestMap = {[key:string]: WriteRequests};    // max: 25, min: 1
        export type BatchWriteResponseMap = {[key:string]: BatchWriteResponse};
        export type BinaryAttributeValue = any;    // type: blob
        export type BinarySetAttributeValue = BinaryAttributeValue[];
        export type BooleanObject = boolean;
        export type ComparisonOperator = string;
        export type ConsistentRead = boolean;
        export type ConsumedCapacityUnits = number;
        export type Date = number;
        export type ErrorMessage = string;
        export type ExpectedAttributeMap = {[key:string]: ExpectedAttributeValue};
        export type FilterConditionMap = {[key:string]: Condition};
        export type Integer = number;
        export type ItemList = AttributeMap[];
        export type KeyList = Key[];    // max: 100, min: 1
        export type KeySchemaAttributeName = string;    // max: 255, min: 1
        export type ListTablesInputLimit = number;    // max: 100, min: 1
        export type Long = number;
        export type NumberAttributeValue = string;
        export type NumberSetAttributeValue = NumberAttributeValue[];
        export type PositiveIntegerObject = number;    // min: 1
        export type PositiveLongObject = number;    // min: 1
        export type PutItemInputAttributeMap = {[key:string]: AttributeValue};
        export type ReturnValue = string;
        export type ScalarAttributeType = string;
        export type String = string;
        export type StringAttributeValue = string;
        export type StringSetAttributeValue = StringAttributeValue[];
        export type TableName = string;    // pattern: &quot;[a-zA-Z0-9_.-]+&quot;, max: 255, min: 3
        export type TableNameList = TableName[];
        export type TableStatus = string;
        export type WriteRequests = WriteRequest[];    // max: 25, min: 1

        export interface AttributeValue {
            S?: StringAttributeValue;            
            N?: NumberAttributeValue;            
            B?: BinaryAttributeValue;            
            SS?: StringSetAttributeValue;            
            NS?: NumberSetAttributeValue;            
            BS?: BinarySetAttributeValue;            
        }
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
        export interface BatchWriteResponse {
            ConsumedCapacityUnits?: ConsumedCapacityUnits;            
        }
        export interface Condition {
            AttributeValueList?: AttributeValueList;            
            ComparisonOperator: ComparisonOperator;            
        }
        export interface ConditionalCheckFailedException {
            message?: ErrorMessage;            
        }
        export interface CreateTableInput {
            TableName: TableName;            
            KeySchema: KeySchema;            
            ProvisionedThroughput: ProvisionedThroughput;            
        }
        export interface CreateTableOutput {
            TableDescription?: TableDescription;            
        }
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
        export interface ExpectedAttributeValue {
            Value?: AttributeValue;            
            Exists?: BooleanObject;            
        }
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
        export interface InternalServerError {
            message?: ErrorMessage;            
        }
        export interface Key {
            HashKeyElement: AttributeValue;            
            RangeKeyElement?: AttributeValue;            
        }
        export interface KeySchema {
            HashKeyElement: KeySchemaElement;            
            RangeKeyElement?: KeySchemaElement;            
        }
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
        export interface ListTablesOutput {
            TableNames?: TableNameList;            
            LastEvaluatedTableName?: TableName;            
        }
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
        export interface TableDescription {
            TableName?: TableName;            
            KeySchema?: KeySchema;            
            TableStatus?: TableStatus;            
            CreationDateTime?: Date;            
            ProvisionedThroughput?: ProvisionedThroughputDescription;            
            TableSizeBytes?: Long;            
            ItemCount?: Long;            
        }
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

    }
}
