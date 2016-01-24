// Type definitions for aws-sdk - Amazon DynamoDB
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

///<reference path="./aws-sdk-common.d.ts" />

declare module "aws-sdk" {

    /*
     * apiVersion: 2012-08-10
     * endpointPrefix: dynamodb
     * serviceAbbreviation: DynamoDB
     * signatureVersion: v4
     * protocol: json
     */
    export class DynamoDB extends Service {
      constructor(options?: any);
      endpoint: Endpoint;
      batchGetItem(params: DynamoDB.BatchGetItemInput, callback?: (err: DynamoDB.ProvisionedThroughputExceededException|DynamoDB.ResourceNotFoundException|DynamoDB.InternalServerError|any, data: DynamoDB.BatchGetItemOutput|any) => void): Request;
      batchWriteItem(params: DynamoDB.BatchWriteItemInput, callback?: (err: DynamoDB.ProvisionedThroughputExceededException|DynamoDB.ResourceNotFoundException|DynamoDB.ItemCollectionSizeLimitExceededException|DynamoDB.InternalServerError|any, data: DynamoDB.BatchWriteItemOutput|any) => void): Request;
      createTable(params: DynamoDB.CreateTableInput, callback?: (err: DynamoDB.ResourceInUseException|DynamoDB.LimitExceededException|DynamoDB.InternalServerError|any, data: DynamoDB.CreateTableOutput|any) => void): Request;
      deleteItem(params: DynamoDB.DeleteItemInput, callback?: (err: DynamoDB.ConditionalCheckFailedException|DynamoDB.ProvisionedThroughputExceededException|DynamoDB.ResourceNotFoundException|DynamoDB.ItemCollectionSizeLimitExceededException|DynamoDB.InternalServerError|any, data: DynamoDB.DeleteItemOutput|any) => void): Request;
      deleteTable(params: DynamoDB.DeleteTableInput, callback?: (err: DynamoDB.ResourceInUseException|DynamoDB.ResourceNotFoundException|DynamoDB.LimitExceededException|DynamoDB.InternalServerError|any, data: DynamoDB.DeleteTableOutput|any) => void): Request;
      describeTable(params: DynamoDB.DescribeTableInput, callback?: (err: DynamoDB.ResourceNotFoundException|DynamoDB.InternalServerError|any, data: DynamoDB.DescribeTableOutput|any) => void): Request;
      getItem(params: DynamoDB.GetItemInput, callback?: (err: DynamoDB.ProvisionedThroughputExceededException|DynamoDB.ResourceNotFoundException|DynamoDB.InternalServerError|any, data: DynamoDB.GetItemOutput|any) => void): Request;
      listTables(params: DynamoDB.ListTablesInput, callback?: (err: DynamoDB.InternalServerError|any, data: DynamoDB.ListTablesOutput|any) => void): Request;
      putItem(params: DynamoDB.PutItemInput, callback?: (err: DynamoDB.ConditionalCheckFailedException|DynamoDB.ProvisionedThroughputExceededException|DynamoDB.ResourceNotFoundException|DynamoDB.ItemCollectionSizeLimitExceededException|DynamoDB.InternalServerError|any, data: DynamoDB.PutItemOutput|any) => void): Request;
      query(params: DynamoDB.QueryInput, callback?: (err: DynamoDB.ProvisionedThroughputExceededException|DynamoDB.ResourceNotFoundException|DynamoDB.InternalServerError|any, data: DynamoDB.QueryOutput|any) => void): Request;
      scan(params: DynamoDB.ScanInput, callback?: (err: DynamoDB.ProvisionedThroughputExceededException|DynamoDB.ResourceNotFoundException|DynamoDB.InternalServerError|any, data: DynamoDB.ScanOutput|any) => void): Request;
      updateItem(params: DynamoDB.UpdateItemInput, callback?: (err: DynamoDB.ConditionalCheckFailedException|DynamoDB.ProvisionedThroughputExceededException|DynamoDB.ResourceNotFoundException|DynamoDB.ItemCollectionSizeLimitExceededException|DynamoDB.InternalServerError|any, data: DynamoDB.UpdateItemOutput|any) => void): Request;
      updateTable(params: DynamoDB.UpdateTableInput, callback?: (err: DynamoDB.ResourceInUseException|DynamoDB.ResourceNotFoundException|DynamoDB.LimitExceededException|DynamoDB.InternalServerError|any, data: DynamoDB.UpdateTableOutput|any) => void): Request;

      // Found on JS Sources - Sorry for the inconvenience :)
      setupRequestListeners(...args: any[]): any
      // Found on JS Sources - Sorry for the inconvenience :)
      checkCrc32(...args: any[]): any
      // Found on JS Sources - Sorry for the inconvenience :)
      crc32IsValid(...args: any[]): any
      // Found on JS Sources - Sorry for the inconvenience :)
      defaultRetryCount(...args: any[]): any
      // Found on JS Sources - Sorry for the inconvenience :)
      retryDelays(...args: any[]): any
    }

    export module DynamoDB {
        export type AttributeAction = string;
        export type AttributeDefinitions = AttributeDefinition[];
        export type AttributeMap = {[key:string]: AttributeValue};
        export type AttributeName = string;    // max: 65535
        export type AttributeNameList = AttributeName[];    // min: 1
        export type AttributeUpdates = {[key:string]: AttributeValueUpdate};
        export type AttributeValueList = AttributeValue[];
        export type Backfilling = boolean;
        export type BatchGetRequestMap = {[key:string]: KeysAndAttributes};    // max: 100, min: 1
        export type BatchGetResponseMap = {[key:string]: ItemList};
        export type BatchWriteItemRequestMap = {[key:string]: WriteRequests};    // max: 25, min: 1
        export type BinaryAttributeValue = any;    // type: blob
        export type BinarySetAttributeValue = BinaryAttributeValue[];
        export type BooleanAttributeValue = boolean;
        export type BooleanObject = boolean;
        export type ComparisonOperator = string;
        export type ConditionExpression = string;
        export type ConditionalOperator = string;
        export type ConsistentRead = boolean;
        export type ConsumedCapacityMultiple = ConsumedCapacity[];
        export type ConsumedCapacityUnits = number;
        export type Date = number;
        export type ErrorMessage = string;
        export type ExpectedAttributeMap = {[key:string]: ExpectedAttributeValue};
        export type ExpressionAttributeNameMap = {[key:string]: AttributeName};
        export type ExpressionAttributeNameVariable = string;
        export type ExpressionAttributeValueMap = {[key:string]: AttributeValue};
        export type ExpressionAttributeValueVariable = string;
        export type FilterConditionMap = {[key:string]: Condition};
        export type GlobalSecondaryIndexDescriptionList = GlobalSecondaryIndexDescription[];
        export type GlobalSecondaryIndexList = GlobalSecondaryIndex[];
        export type GlobalSecondaryIndexUpdateList = GlobalSecondaryIndexUpdate[];
        export type IndexName = string;    // pattern: &quot;[a-zA-Z0-9_.-]+&quot;, max: 255, min: 3
        export type IndexStatus = string;
        export type Integer = number;
        export type ItemCollectionKeyAttributeMap = {[key:string]: AttributeValue};
        export type ItemCollectionMetricsMultiple = ItemCollectionMetrics[];
        export type ItemCollectionMetricsPerTable = {[key:string]: ItemCollectionMetricsMultiple};
        export type ItemCollectionSizeEstimateBound = number;
        export type ItemCollectionSizeEstimateRange = ItemCollectionSizeEstimateBound[];
        export type ItemList = AttributeMap[];
        export type Key = {[key:string]: AttributeValue};
        export type KeyConditions = {[key:string]: Condition};
        export type KeyExpression = string;
        export type KeyList = Key[];    // max: 100, min: 1
        export type KeySchema = KeySchemaElement[];    // max: 2, min: 1
        export type KeySchemaAttributeName = string;    // max: 255, min: 1
        export type KeyType = string;
        export type ListAttributeValue = AttributeValue[];
        export type ListTablesInputLimit = number;    // max: 100, min: 1
        export type LocalSecondaryIndexDescriptionList = LocalSecondaryIndexDescription[];
        export type LocalSecondaryIndexList = LocalSecondaryIndex[];
        export type Long = number;
        export type MapAttributeValue = {[key:string]: AttributeValue};
        export type NonKeyAttributeName = string;    // max: 255, min: 1
        export type NonKeyAttributeNameList = NonKeyAttributeName[];    // max: 20, min: 1
        export type NullAttributeValue = boolean;
        export type NumberAttributeValue = string;
        export type NumberSetAttributeValue = NumberAttributeValue[];
        export type PositiveIntegerObject = number;    // min: 1
        export type PositiveLongObject = number;    // min: 1
        export type ProjectionExpression = string;
        export type ProjectionType = string;
        export type PutItemInputAttributeMap = {[key:string]: AttributeValue};
        export type ReturnConsumedCapacity = string;
        export type ReturnItemCollectionMetrics = string;
        export type ReturnValue = string;
        export type ScalarAttributeType = string;
        export type ScanSegment = number;    // max: 999999
        export type ScanTotalSegments = number;    // max: 1000000, min: 1
        export type SecondaryIndexesCapacityMap = {[key:string]: Capacity};
        export type Select = string;
        export type StreamArn = string;    // max: 1024, min: 37
        export type StreamEnabled = boolean;
        export type StreamViewType = string;
        export type String = string;
        export type StringAttributeValue = string;
        export type StringSetAttributeValue = StringAttributeValue[];
        export type TableName = string;    // pattern: &quot;[a-zA-Z0-9_.-]+&quot;, max: 255, min: 3
        export type TableNameList = TableName[];
        export type TableStatus = string;
        export type UpdateExpression = string;
        export type WriteRequests = WriteRequest[];    // max: 25, min: 1

        export interface AttributeDefinition {
            AttributeName: KeySchemaAttributeName;
            AttributeType: ScalarAttributeType;
        }
        export interface AttributeValue {
            S?: StringAttributeValue;
            N?: NumberAttributeValue;
            B?: BinaryAttributeValue;
            SS?: StringSetAttributeValue;
            NS?: NumberSetAttributeValue;
            BS?: BinarySetAttributeValue;
            M?: MapAttributeValue;
            L?: ListAttributeValue;
            NULL?: NullAttributeValue;
            BOOL?: BooleanAttributeValue;
        }
        export interface AttributeValueUpdate {
            Value?: AttributeValue;
            Action?: AttributeAction;
        }
        export interface BatchGetItemInput {
            RequestItems: BatchGetRequestMap;
            ReturnConsumedCapacity?: ReturnConsumedCapacity;
        }
        export interface BatchGetItemOutput {
            Responses?: BatchGetResponseMap;
            UnprocessedKeys?: BatchGetRequestMap;
            ConsumedCapacity?: ConsumedCapacityMultiple;
        }
        export interface BatchWriteItemInput {
            RequestItems: BatchWriteItemRequestMap;
            ReturnConsumedCapacity?: ReturnConsumedCapacity;
            ReturnItemCollectionMetrics?: ReturnItemCollectionMetrics;
        }
        export interface BatchWriteItemOutput {
            UnprocessedItems?: BatchWriteItemRequestMap;
            ItemCollectionMetrics?: ItemCollectionMetricsPerTable;
            ConsumedCapacity?: ConsumedCapacityMultiple;
        }
        export interface Capacity {
            CapacityUnits?: ConsumedCapacityUnits;
        }
        export interface Condition {
            AttributeValueList?: AttributeValueList;
            ComparisonOperator: ComparisonOperator;
        }
        export interface ConditionalCheckFailedException {
            message?: ErrorMessage;
        }
        export interface ConsumedCapacity {
            TableName?: TableName;
            CapacityUnits?: ConsumedCapacityUnits;
            Table?: Capacity;
            LocalSecondaryIndexes?: SecondaryIndexesCapacityMap;
            GlobalSecondaryIndexes?: SecondaryIndexesCapacityMap;
        }
        export interface CreateGlobalSecondaryIndexAction {
            IndexName: IndexName;
            KeySchema: KeySchema;
            Projection: Projection;
            ProvisionedThroughput: ProvisionedThroughput;
        }
        export interface CreateTableInput {
            AttributeDefinitions: AttributeDefinitions;
            TableName: TableName;
            KeySchema: KeySchema;
            LocalSecondaryIndexes?: LocalSecondaryIndexList;
            GlobalSecondaryIndexes?: GlobalSecondaryIndexList;
            ProvisionedThroughput: ProvisionedThroughput;
            StreamSpecification?: StreamSpecification;
        }
        export interface CreateTableOutput {
            TableDescription?: TableDescription;
        }
        export interface DeleteGlobalSecondaryIndexAction {
            IndexName: IndexName;
        }
        export interface DeleteItemInput {
            TableName: TableName;
            Key: Key;
            Expected?: ExpectedAttributeMap;
            ConditionalOperator?: ConditionalOperator;
            ReturnValues?: ReturnValue;
            ReturnConsumedCapacity?: ReturnConsumedCapacity;
            ReturnItemCollectionMetrics?: ReturnItemCollectionMetrics;
            ConditionExpression?: ConditionExpression;
            ExpressionAttributeNames?: ExpressionAttributeNameMap;
            ExpressionAttributeValues?: ExpressionAttributeValueMap;
        }
        export interface DeleteItemOutput {
            Attributes?: AttributeMap;
            ConsumedCapacity?: ConsumedCapacity;
            ItemCollectionMetrics?: ItemCollectionMetrics;
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
            ComparisonOperator?: ComparisonOperator;
            AttributeValueList?: AttributeValueList;
        }
        export interface GetItemInput {
            TableName: TableName;
            Key: Key;
            AttributesToGet?: AttributeNameList;
            ConsistentRead?: ConsistentRead;
            ReturnConsumedCapacity?: ReturnConsumedCapacity;
            ProjectionExpression?: ProjectionExpression;
            ExpressionAttributeNames?: ExpressionAttributeNameMap;
        }
        export interface GetItemOutput {
            Item?: AttributeMap;
            ConsumedCapacity?: ConsumedCapacity;
        }
        export interface GlobalSecondaryIndex {
            IndexName: IndexName;
            KeySchema: KeySchema;
            Projection: Projection;
            ProvisionedThroughput: ProvisionedThroughput;
        }
        export interface GlobalSecondaryIndexDescription {
            IndexName?: IndexName;
            KeySchema?: KeySchema;
            Projection?: Projection;
            IndexStatus?: IndexStatus;
            Backfilling?: Backfilling;
            ProvisionedThroughput?: ProvisionedThroughputDescription;
            IndexSizeBytes?: Long;
            ItemCount?: Long;
            IndexArn?: String;
        }
        export interface GlobalSecondaryIndexUpdate {
            Update?: UpdateGlobalSecondaryIndexAction;
            Create?: CreateGlobalSecondaryIndexAction;
            Delete?: DeleteGlobalSecondaryIndexAction;
        }
        export interface InternalServerError {
            message?: ErrorMessage;
        }
        export interface ItemCollectionMetrics {
            ItemCollectionKey?: ItemCollectionKeyAttributeMap;
            SizeEstimateRangeGB?: ItemCollectionSizeEstimateRange;
        }
        export interface ItemCollectionSizeLimitExceededException {
            message?: ErrorMessage;
        }
        export interface KeySchemaElement {
            AttributeName: KeySchemaAttributeName;
            KeyType: KeyType;
        }
        export interface KeysAndAttributes {
            Keys: KeyList;
            AttributesToGet?: AttributeNameList;
            ConsistentRead?: ConsistentRead;
            ProjectionExpression?: ProjectionExpression;
            ExpressionAttributeNames?: ExpressionAttributeNameMap;
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
        export interface LocalSecondaryIndex {
            IndexName: IndexName;
            KeySchema: KeySchema;
            Projection: Projection;
        }
        export interface LocalSecondaryIndexDescription {
            IndexName?: IndexName;
            KeySchema?: KeySchema;
            Projection?: Projection;
            IndexSizeBytes?: Long;
            ItemCount?: Long;
            IndexArn?: String;
        }
        export interface Projection {
            ProjectionType?: ProjectionType;
            NonKeyAttributes?: NonKeyAttributeNameList;
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
            ReturnConsumedCapacity?: ReturnConsumedCapacity;
            ReturnItemCollectionMetrics?: ReturnItemCollectionMetrics;
            ConditionalOperator?: ConditionalOperator;
            ConditionExpression?: ConditionExpression;
            ExpressionAttributeNames?: ExpressionAttributeNameMap;
            ExpressionAttributeValues?: ExpressionAttributeValueMap;
        }
        export interface PutItemOutput {
            Attributes?: AttributeMap;
            ConsumedCapacity?: ConsumedCapacity;
            ItemCollectionMetrics?: ItemCollectionMetrics;
        }
        export interface PutRequest {
            Item: PutItemInputAttributeMap;
        }
        export interface QueryInput {
            TableName: TableName;
            IndexName?: IndexName;
            Select?: Select;
            AttributesToGet?: AttributeNameList;
            Limit?: PositiveIntegerObject;
            ConsistentRead?: ConsistentRead;
            KeyConditions?: KeyConditions;
            QueryFilter?: FilterConditionMap;
            ConditionalOperator?: ConditionalOperator;
            ScanIndexForward?: BooleanObject;
            ExclusiveStartKey?: Key;
            ReturnConsumedCapacity?: ReturnConsumedCapacity;
            ProjectionExpression?: ProjectionExpression;
            FilterExpression?: ConditionExpression;
            KeyConditionExpression?: KeyExpression;
            ExpressionAttributeNames?: ExpressionAttributeNameMap;
            ExpressionAttributeValues?: ExpressionAttributeValueMap;
        }
        export interface QueryOutput {
            Items?: ItemList;
            Count?: Integer;
            ScannedCount?: Integer;
            LastEvaluatedKey?: Key;
            ConsumedCapacity?: ConsumedCapacity;
        }
        export interface ResourceInUseException {
            message?: ErrorMessage;
        }
        export interface ResourceNotFoundException {
            message?: ErrorMessage;
        }
        export interface ScanInput {
            TableName: TableName;
            IndexName?: IndexName;
            AttributesToGet?: AttributeNameList;
            Limit?: PositiveIntegerObject;
            Select?: Select;
            ScanFilter?: FilterConditionMap;
            ConditionalOperator?: ConditionalOperator;
            ExclusiveStartKey?: Key;
            ReturnConsumedCapacity?: ReturnConsumedCapacity;
            TotalSegments?: ScanTotalSegments;
            Segment?: ScanSegment;
            ProjectionExpression?: ProjectionExpression;
            FilterExpression?: ConditionExpression;
            ExpressionAttributeNames?: ExpressionAttributeNameMap;
            ExpressionAttributeValues?: ExpressionAttributeValueMap;
            ConsistentRead?: ConsistentRead;
        }
        export interface ScanOutput {
            Items?: ItemList;
            Count?: Integer;
            ScannedCount?: Integer;
            LastEvaluatedKey?: Key;
            ConsumedCapacity?: ConsumedCapacity;
        }
        export interface StreamSpecification {
            StreamEnabled?: StreamEnabled;
            StreamViewType?: StreamViewType;
        }
        export interface TableDescription {
            AttributeDefinitions?: AttributeDefinitions;
            TableName?: TableName;
            KeySchema?: KeySchema;
            TableStatus?: TableStatus;
            CreationDateTime?: Date;
            ProvisionedThroughput?: ProvisionedThroughputDescription;
            TableSizeBytes?: Long;
            ItemCount?: Long;
            TableArn?: String;
            LocalSecondaryIndexes?: LocalSecondaryIndexDescriptionList;
            GlobalSecondaryIndexes?: GlobalSecondaryIndexDescriptionList;
            StreamSpecification?: StreamSpecification;
            LatestStreamLabel?: String;
            LatestStreamArn?: StreamArn;
        }
        export interface UpdateGlobalSecondaryIndexAction {
            IndexName: IndexName;
            ProvisionedThroughput: ProvisionedThroughput;
        }
        export interface UpdateItemInput {
            TableName: TableName;
            Key: Key;
            AttributeUpdates?: AttributeUpdates;
            Expected?: ExpectedAttributeMap;
            ConditionalOperator?: ConditionalOperator;
            ReturnValues?: ReturnValue;
            ReturnConsumedCapacity?: ReturnConsumedCapacity;
            ReturnItemCollectionMetrics?: ReturnItemCollectionMetrics;
            UpdateExpression?: UpdateExpression;
            ConditionExpression?: ConditionExpression;
            ExpressionAttributeNames?: ExpressionAttributeNameMap;
            ExpressionAttributeValues?: ExpressionAttributeValueMap;
        }
        export interface UpdateItemOutput {
            Attributes?: AttributeMap;
            ConsumedCapacity?: ConsumedCapacity;
            ItemCollectionMetrics?: ItemCollectionMetrics;
        }
        export interface UpdateTableInput {
            AttributeDefinitions?: AttributeDefinitions;
            TableName: TableName;
            ProvisionedThroughput?: ProvisionedThroughput;
            GlobalSecondaryIndexUpdates?: GlobalSecondaryIndexUpdateList;
            StreamSpecification?: StreamSpecification;
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
