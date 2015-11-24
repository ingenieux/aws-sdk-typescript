// DO NOT EDIT!
//

///<reference path="./aws-sdk-common.d.ts" />
declare module "aws-sdk" {
    export class DynamoDB {
      constructor(options?: any);
      batchGetItem(params: DynamoDBBatchGetItemInput, callback: (err: DynamoDBProvisionedThroughputExceededException|DynamoDBResourceNotFoundException|DynamoDBInternalServerError|any, data: DynamoDBBatchGetItemOutput|any) => void): void;
      batchWriteItem(params: DynamoDBBatchWriteItemInput, callback: (err: DynamoDBProvisionedThroughputExceededException|DynamoDBResourceNotFoundException|DynamoDBLimitExceededException|DynamoDBInternalServerError|any, data: DynamoDBBatchWriteItemOutput|any) => void): void;
      createTable(params: DynamoDBCreateTableInput, callback: (err: DynamoDBResourceInUseException|DynamoDBLimitExceededException|DynamoDBInternalServerError|any, data: DynamoDBCreateTableOutput|any) => void): void;
      deleteItem(params: DynamoDBDeleteItemInput, callback: (err: DynamoDBConditionalCheckFailedException|DynamoDBProvisionedThroughputExceededException|DynamoDBResourceNotFoundException|DynamoDBLimitExceededException|DynamoDBInternalServerError|any, data: DynamoDBDeleteItemOutput|any) => void): void;
      deleteTable(params: DynamoDBDeleteTableInput, callback: (err: DynamoDBResourceInUseException|DynamoDBResourceNotFoundException|DynamoDBLimitExceededException|DynamoDBInternalServerError|any, data: DynamoDBDeleteTableOutput|any) => void): void;
      describeTable(params: DynamoDBDescribeTableInput, callback: (err: DynamoDBResourceNotFoundException|DynamoDBInternalServerError|any, data: DynamoDBDescribeTableOutput|any) => void): void;
      getItem(params: DynamoDBGetItemInput, callback: (err: DynamoDBProvisionedThroughputExceededException|DynamoDBResourceNotFoundException|DynamoDBInternalServerError|any, data: DynamoDBGetItemOutput|any) => void): void;
      listTables(params: DynamoDBListTablesInput, callback: (err: DynamoDBInternalServerError|any, data: DynamoDBListTablesOutput|any) => void): void;
      putItem(params: DynamoDBPutItemInput, callback: (err: DynamoDBConditionalCheckFailedException|DynamoDBProvisionedThroughputExceededException|DynamoDBResourceNotFoundException|DynamoDBLimitExceededException|DynamoDBInternalServerError|any, data: DynamoDBPutItemOutput|any) => void): void;
      query(params: DynamoDBQueryInput, callback: (err: DynamoDBProvisionedThroughputExceededException|DynamoDBResourceNotFoundException|DynamoDBInternalServerError|any, data: DynamoDBQueryOutput|any) => void): void;
      scan(params: DynamoDBScanInput, callback: (err: DynamoDBProvisionedThroughputExceededException|DynamoDBResourceNotFoundException|DynamoDBInternalServerError|any, data: DynamoDBScanOutput|any) => void): void;
      updateItem(params: DynamoDBUpdateItemInput, callback: (err: DynamoDBConditionalCheckFailedException|DynamoDBProvisionedThroughputExceededException|DynamoDBResourceNotFoundException|DynamoDBLimitExceededException|DynamoDBInternalServerError|any, data: DynamoDBUpdateItemOutput|any) => void): void;
      updateTable(params: DynamoDBUpdateTableInput, callback: (err: DynamoDBResourceInUseException|DynamoDBResourceNotFoundException|DynamoDBLimitExceededException|DynamoDBInternalServerError|any, data: DynamoDBUpdateTableOutput|any) => void): void;
    }

    export type DynamoDBAttributeAction = string;
    export type DynamoDBAttributeMap = any; // not really - it was 'map' instead - must fix this one
    export type DynamoDBAttributeName = string;
    export type DynamoDBAttributeNameList = Array<DynamoDBAttributeName>;
    export type DynamoDBAttributeUpdates = any; // not really - it was 'map' instead - must fix this one
    export interface DynamoDBAttributeValue {
        S?: DynamoDBStringAttributeValue;
        N?: DynamoDBNumberAttributeValue;
        B?: DynamoDBBinaryAttributeValue;
        SS?: DynamoDBStringSetAttributeValue;
        NS?: DynamoDBNumberSetAttributeValue;
        BS?: DynamoDBBinarySetAttributeValue;
    }

    export type DynamoDBAttributeValueList = Array<DynamoDBAttributeValue>;
    export interface DynamoDBAttributeValueUpdate {
        Value?: DynamoDBAttributeValue;
        Action?: DynamoDBAttributeAction;
    }

    export interface DynamoDBBatchGetItemInput {
        RequestItems: DynamoDBBatchGetRequestMap;
    }

    export interface DynamoDBBatchGetItemOutput {
        Responses?: DynamoDBBatchGetResponseMap;
        UnprocessedKeys?: DynamoDBBatchGetRequestMap;
    }

    export type DynamoDBBatchGetRequestMap = any; // not really - it was 'map' instead - must fix this one
    export type DynamoDBBatchGetResponseMap = any; // not really - it was 'map' instead - must fix this one
    export interface DynamoDBBatchResponse {
        Items?: DynamoDBItemList;
        ConsumedCapacityUnits?: DynamoDBConsumedCapacityUnits;
    }

    export interface DynamoDBBatchWriteItemInput {
        RequestItems: DynamoDBBatchWriteItemRequestMap;
    }

    export interface DynamoDBBatchWriteItemOutput {
        Responses?: DynamoDBBatchWriteResponseMap;
        UnprocessedItems?: DynamoDBBatchWriteItemRequestMap;
    }

    export type DynamoDBBatchWriteItemRequestMap = any; // not really - it was 'map' instead - must fix this one
    export interface DynamoDBBatchWriteResponse {
        ConsumedCapacityUnits?: DynamoDBConsumedCapacityUnits;
    }

    export type DynamoDBBatchWriteResponseMap = any; // not really - it was 'map' instead - must fix this one
    export type DynamoDBBinaryAttributeValue = any; // not really - it was 'blob' instead - must fix this one
    export type DynamoDBBinarySetAttributeValue = Array<DynamoDBBinaryAttributeValue>;
    export type DynamoDBBooleanObject = boolean;
    export type DynamoDBComparisonOperator = string;
    export interface DynamoDBCondition {
        AttributeValueList?: DynamoDBAttributeValueList;
        ComparisonOperator: DynamoDBComparisonOperator;
    }

    export interface DynamoDBConditionalCheckFailedException {
        message?: DynamoDBErrorMessage;
    }

    export type DynamoDBConsistentRead = boolean;
    export type DynamoDBConsumedCapacityUnits = number;
    export interface DynamoDBCreateTableInput {
        TableName: DynamoDBTableName;
        KeySchema: DynamoDBKeySchema;
        ProvisionedThroughput: DynamoDBProvisionedThroughput;
    }

    export interface DynamoDBCreateTableOutput {
        TableDescription?: DynamoDBTableDescription;
    }

    export type DynamoDBDate = number;
    export interface DynamoDBDeleteItemInput {
        TableName: DynamoDBTableName;
        Key: DynamoDBKey;
        Expected?: DynamoDBExpectedAttributeMap;
        ReturnValues?: DynamoDBReturnValue;
    }

    export interface DynamoDBDeleteItemOutput {
        Attributes?: DynamoDBAttributeMap;
        ConsumedCapacityUnits?: DynamoDBConsumedCapacityUnits;
    }

    export interface DynamoDBDeleteRequest {
        Key: DynamoDBKey;
    }

    export interface DynamoDBDeleteTableInput {
        TableName: DynamoDBTableName;
    }

    export interface DynamoDBDeleteTableOutput {
        TableDescription?: DynamoDBTableDescription;
    }

    export interface DynamoDBDescribeTableInput {
        TableName: DynamoDBTableName;
    }

    export interface DynamoDBDescribeTableOutput {
        Table?: DynamoDBTableDescription;
    }

    export type DynamoDBErrorMessage = string;
    export type DynamoDBExpectedAttributeMap = any; // not really - it was 'map' instead - must fix this one
    export interface DynamoDBExpectedAttributeValue {
        Value?: DynamoDBAttributeValue;
        Exists?: DynamoDBBooleanObject;
    }

    export type DynamoDBFilterConditionMap = any; // not really - it was 'map' instead - must fix this one
    export interface DynamoDBGetItemInput {
        TableName: DynamoDBTableName;
        Key: DynamoDBKey;
        AttributesToGet?: DynamoDBAttributeNameList;
        ConsistentRead?: DynamoDBConsistentRead;
    }

    export interface DynamoDBGetItemOutput {
        Item?: DynamoDBAttributeMap;
        ConsumedCapacityUnits?: DynamoDBConsumedCapacityUnits;
    }

    export type DynamoDBInteger = number;
    export interface DynamoDBInternalServerError {
        message?: DynamoDBErrorMessage;
    }

    export type DynamoDBItemList = Array<DynamoDBAttributeMap>;
    export interface DynamoDBKey {
        HashKeyElement: DynamoDBAttributeValue;
        RangeKeyElement?: DynamoDBAttributeValue;
    }

    export type DynamoDBKeyList = Array<DynamoDBKey>; // max: 100
    export interface DynamoDBKeySchema {
        HashKeyElement: DynamoDBKeySchemaElement;
        RangeKeyElement?: DynamoDBKeySchemaElement;
    }

    export type DynamoDBKeySchemaAttributeName = string;
    export interface DynamoDBKeySchemaElement {
        AttributeName: DynamoDBKeySchemaAttributeName;
        AttributeType: DynamoDBScalarAttributeType;
    }

    export interface DynamoDBKeysAndAttributes {
        Keys: DynamoDBKeyList;
        AttributesToGet?: DynamoDBAttributeNameList;
        ConsistentRead?: DynamoDBConsistentRead;
    }

    export interface DynamoDBLimitExceededException {
        message?: DynamoDBErrorMessage;
    }

    export interface DynamoDBListTablesInput {
        ExclusiveStartTableName?: DynamoDBTableName;
        Limit?: DynamoDBListTablesInputLimit;
    }

    export type DynamoDBListTablesInputLimit = number;
    export interface DynamoDBListTablesOutput {
        TableNames?: DynamoDBTableNameList;
        LastEvaluatedTableName?: DynamoDBTableName;
    }

    export type DynamoDBLong = number;
    export type DynamoDBNumberAttributeValue = string;
    export type DynamoDBNumberSetAttributeValue = Array<DynamoDBNumberAttributeValue>;
    export type DynamoDBPositiveIntegerObject = number;
    export type DynamoDBPositiveLongObject = number;
    export interface DynamoDBProvisionedThroughput {
        ReadCapacityUnits: DynamoDBPositiveLongObject;
        WriteCapacityUnits: DynamoDBPositiveLongObject;
    }

    export interface DynamoDBProvisionedThroughputDescription {
        LastIncreaseDateTime?: DynamoDBDate;
        LastDecreaseDateTime?: DynamoDBDate;
        NumberOfDecreasesToday?: DynamoDBPositiveLongObject;
        ReadCapacityUnits?: DynamoDBPositiveLongObject;
        WriteCapacityUnits?: DynamoDBPositiveLongObject;
    }

    export interface DynamoDBProvisionedThroughputExceededException {
        message?: DynamoDBErrorMessage;
    }

    export interface DynamoDBPutItemInput {
        TableName: DynamoDBTableName;
        Item: DynamoDBPutItemInputAttributeMap;
        Expected?: DynamoDBExpectedAttributeMap;
        ReturnValues?: DynamoDBReturnValue;
    }

    export type DynamoDBPutItemInputAttributeMap = any; // not really - it was 'map' instead - must fix this one
    export interface DynamoDBPutItemOutput {
        Attributes?: DynamoDBAttributeMap;
        ConsumedCapacityUnits?: DynamoDBConsumedCapacityUnits;
    }

    export interface DynamoDBPutRequest {
        Item: DynamoDBPutItemInputAttributeMap;
    }

    export interface DynamoDBQueryInput {
        TableName: DynamoDBTableName;
        AttributesToGet?: DynamoDBAttributeNameList;
        Limit?: DynamoDBPositiveIntegerObject;
        ConsistentRead?: DynamoDBConsistentRead;
        Count?: DynamoDBBooleanObject;
        HashKeyValue: DynamoDBAttributeValue;
        RangeKeyCondition?: DynamoDBCondition;
        ScanIndexForward?: DynamoDBBooleanObject;
        ExclusiveStartKey?: DynamoDBKey;
    }

    export interface DynamoDBQueryOutput {
        Items?: DynamoDBItemList;
        Count?: DynamoDBInteger;
        LastEvaluatedKey?: DynamoDBKey;
        ConsumedCapacityUnits?: DynamoDBConsumedCapacityUnits;
    }

    export interface DynamoDBResourceInUseException {
        message?: DynamoDBErrorMessage;
    }

    export interface DynamoDBResourceNotFoundException {
        message?: DynamoDBErrorMessage;
    }

    export type DynamoDBReturnValue = string;
    export type DynamoDBScalarAttributeType = string;
    export interface DynamoDBScanInput {
        TableName: DynamoDBTableName;
        AttributesToGet?: DynamoDBAttributeNameList;
        Limit?: DynamoDBPositiveIntegerObject;
        Count?: DynamoDBBooleanObject;
        ScanFilter?: DynamoDBFilterConditionMap;
        ExclusiveStartKey?: DynamoDBKey;
    }

    export interface DynamoDBScanOutput {
        Items?: DynamoDBItemList;
        Count?: DynamoDBInteger;
        ScannedCount?: DynamoDBInteger;
        LastEvaluatedKey?: DynamoDBKey;
        ConsumedCapacityUnits?: DynamoDBConsumedCapacityUnits;
    }

    export type DynamoDBString = string;
    export type DynamoDBStringAttributeValue = string;
    export type DynamoDBStringSetAttributeValue = Array<DynamoDBStringAttributeValue>;
    export interface DynamoDBTableDescription {
        TableName?: DynamoDBTableName;
        KeySchema?: DynamoDBKeySchema;
        TableStatus?: DynamoDBTableStatus;
        CreationDateTime?: DynamoDBDate;
        ProvisionedThroughput?: DynamoDBProvisionedThroughputDescription;
        TableSizeBytes?: DynamoDBLong;
        ItemCount?: DynamoDBLong;
    }

    export type DynamoDBTableName = string; // pattern: "[a-zA-Z0-9_.-]+"
    export type DynamoDBTableNameList = Array<DynamoDBTableName>;
    export type DynamoDBTableStatus = string;
    export interface DynamoDBUpdateItemInput {
        TableName: DynamoDBTableName;
        Key: DynamoDBKey;
        AttributeUpdates: DynamoDBAttributeUpdates;
        Expected?: DynamoDBExpectedAttributeMap;
        ReturnValues?: DynamoDBReturnValue;
    }

    export interface DynamoDBUpdateItemOutput {
        Attributes?: DynamoDBAttributeMap;
        ConsumedCapacityUnits?: DynamoDBConsumedCapacityUnits;
    }

    export interface DynamoDBUpdateTableInput {
        TableName: DynamoDBTableName;
        ProvisionedThroughput: DynamoDBProvisionedThroughput;
    }

    export interface DynamoDBUpdateTableOutput {
        TableDescription?: DynamoDBTableDescription;
    }

    export interface DynamoDBWriteRequest {
        PutRequest?: DynamoDBPutRequest;
        DeleteRequest?: DynamoDBDeleteRequest;
    }

    export type DynamoDBWriteRequests = Array<DynamoDBWriteRequest>; // max: 25
}
