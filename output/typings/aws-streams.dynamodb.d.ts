// Type definitions for aws-sdk - Amazon DynamoDB Streams
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

// COMMENTED <reference path="./aws-sdk.d.ts" />

declare module "aws-sdk" {

  /**
    * apiVersion: 2012-08-10
    * endpointPrefix: streams.dynamodb
    * serviceAbbreviation: 
    * signatureVersion: v4
    * protocol: json
    *
    * Amazon DynamoDB Amazon DynamoDB Streams provides API actions for accessing
 streams and processing stream records. To learn more about application
 development with Streams, see Capturing Table Activity with DynamoDB Streams
 [http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Streams.html] 
 in the Amazon DynamoDB Developer Guide.
 
 The following are short descriptions of each low-level DynamoDB Streams action:
 
  &amp;#42;   DescribeStream - Returns detailed information about a particular stream.
    
    
  *   GetRecords - Retrieves the stream records from within a shard.
    
    
  *   GetShardIterator - Returns information on how to retrieve the streams record
    from a shard with a given shard ID.
    
    
  *   ListStreams - Returns a list of all the streams associated with the current
    AWS account and endpoint.
    *
    */
  export class DynamoDBStreams extends Service {
    constructor(options?: any);
    endpoint: Endpoint;
    /**
     * Returns information about a stream, including the current status of the stream,
its Amazon Resource Name (ARN), the composition of its shards, and its
corresponding DynamoDB table.

You can call DescribeStream at a maximum rate of 10 times per second.

Each shard in the stream has a SequenceNumberRange associated with it. If the 
SequenceNumberRange has a StartingSequenceNumber but no EndingSequenceNumber,
then the shard is still open (able to receive more stream records). If both 
StartingSequenceNumber and EndingSequenceNumber are present, then that shard is
closed and can no longer receive more data.
     *
     * @error ResourceNotFoundException   
     * @error InternalServerError   
     */
    describeStream(params: DynamoDBStreams.DescribeStreamInput, callback?: (err: DynamoDBStreams.ResourceNotFoundException | DynamoDBStreams.InternalServerError | any, data: DynamoDBStreams.DescribeStreamOutput | any) => void): Request<DynamoDBStreams.DescribeStreamOutput | any, DynamoDBStreams.ResourceNotFoundException | DynamoDBStreams.InternalServerError | any>;
    /**
     * Retrieves the stream records from a given shard.

Specify a shard iterator using the ShardIterator parameter. The shard iterator
specifies the position in the shard from which you want to start reading stream
records sequentially. If there are no stream records available in the portion of
the shard that the iterator points to, GetRecords returns an empty list. Note
that it might take multiple calls to get to a portion of the shard that contains
stream records.

 GetRecords can retrieve a maximum of 1 MB of data or 1000 stream records,
whichever comes first.
     *
     * @error ResourceNotFoundException   
     * @error LimitExceededException   
     * @error InternalServerError   
     * @error ExpiredIteratorException   
     * @error TrimmedDataAccessException   
     */
    getRecords(params: DynamoDBStreams.GetRecordsInput, callback?: (err: DynamoDBStreams.ResourceNotFoundException | DynamoDBStreams.LimitExceededException | DynamoDBStreams.InternalServerError | DynamoDBStreams.ExpiredIteratorException | DynamoDBStreams.TrimmedDataAccessException | any, data: DynamoDBStreams.GetRecordsOutput | any) => void): Request<DynamoDBStreams.GetRecordsOutput | any, DynamoDBStreams.ResourceNotFoundException | DynamoDBStreams.LimitExceededException | DynamoDBStreams.InternalServerError | DynamoDBStreams.ExpiredIteratorException | DynamoDBStreams.TrimmedDataAccessException | any>;
    /**
     * Returns a shard iterator. A shard iterator provides information about how to
retrieve the stream records from within a shard. Use the shard iterator in a
subsequent GetRecords request to read the stream records from the shard.

A shard iterator expires 15 minutes after it is returned to the requester.
     *
     * @error ResourceNotFoundException   
     * @error InternalServerError   
     * @error TrimmedDataAccessException   
     */
    getShardIterator(params: DynamoDBStreams.GetShardIteratorInput, callback?: (err: DynamoDBStreams.ResourceNotFoundException | DynamoDBStreams.InternalServerError | DynamoDBStreams.TrimmedDataAccessException | any, data: DynamoDBStreams.GetShardIteratorOutput | any) => void): Request<DynamoDBStreams.GetShardIteratorOutput | any, DynamoDBStreams.ResourceNotFoundException | DynamoDBStreams.InternalServerError | DynamoDBStreams.TrimmedDataAccessException | any>;
    /**
     * Returns an array of stream ARNs associated with the current account and
endpoint. If the TableName parameter is present, then ListStreams will return
only the streams ARNs for that table.

You can call ListStreams at a maximum rate of 5 times per second.
     *
     * @error ResourceNotFoundException   
     * @error InternalServerError   
     */
    listStreams(params: DynamoDBStreams.ListStreamsInput, callback?: (err: DynamoDBStreams.ResourceNotFoundException | DynamoDBStreams.InternalServerError | any, data: DynamoDBStreams.ListStreamsOutput | any) => void): Request<DynamoDBStreams.ListStreamsOutput | any, DynamoDBStreams.ResourceNotFoundException | DynamoDBStreams.InternalServerError | any>;

  }

  export module DynamoDBStreams {

    export type AttributeMap = { [key: string]: AttributeValue };

    export type AttributeName = string;

    export type BinaryAttributeValue = any;

    export type BinarySetAttributeValue = BinaryAttributeValue[];

    export type BooleanAttributeValue = boolean;

    export type Date = number;

    export type ErrorMessage = string;

    export type KeySchema = KeySchemaElement[];

    export type KeySchemaAttributeName = string;

    export type KeyType = string;

    export type ListAttributeValue = AttributeValue[];

    export type MapAttributeValue = { [key: string]: AttributeValue };

    export type NullAttributeValue = boolean;

    export type NumberAttributeValue = string;

    export type NumberSetAttributeValue = NumberAttributeValue[];

    export type OperationType = string;

    export type PositiveIntegerObject = number;

    export type PositiveLongObject = number;

    export type RecordList = Record[];

    export type SequenceNumber = string;

    export type ShardDescriptionList = Shard[];

    export type ShardId = string;

    export type ShardIterator = string;

    export type ShardIteratorType = string;

    export type StreamArn = string;

    export type StreamList = Stream[];

    export type StreamStatus = string;

    export type StreamViewType = string;

    export type String = string;

    export type StringAttributeValue = string;

    export type StringSetAttributeValue = StringAttributeValue[];

    export type TableName = string;

    export interface AttributeValue {
      /** A String data type. **/
      S?: StringAttributeValue;
      /** A Number data type. **/
      N?: NumberAttributeValue;
      /** A Binary data type. **/
      B?: BinaryAttributeValue;
      /** A String Set data type. **/
      SS?: StringSetAttributeValue;
      /** A Number Set data type. **/
      NS?: NumberSetAttributeValue;
      /** A Binary Set data type. **/
      BS?: BinarySetAttributeValue;
      /** A Map data type. **/
      M?: MapAttributeValue;
      /** A List data type. **/
      L?: ListAttributeValue;
      /** A Null data type. **/
      NULL?: NullAttributeValue;
      /** A Boolean data type. **/
      BOOL?: BooleanAttributeValue;
    }
    export interface DescribeStreamInput {
      /** The Amazon Resource Name (ARN) for the stream. **/
      StreamArn: StreamArn;
      /** The maximum number of shard objects to return. The upper limit is 100. **/
      Limit?: PositiveIntegerObject;
      /** The shard ID of the first item that this operation will evaluate. Use the value
that was returned for LastEvaluatedShardId in the previous operation. **/
      ExclusiveStartShardId?: ShardId;
    }
    export interface DescribeStreamOutput {
      /** A complete description of the stream, including its creation date and time, the
DynamoDB table associated with the stream, the shard IDs within the stream, and
the beginning and ending sequence numbers of stream records within the shards. **/
      StreamDescription?: StreamDescription;
    }
    export interface ExpiredIteratorException {
      /** The provided iterator exceeds the maximum age allowed. **/
      message?: ErrorMessage;
    }
    export interface GetRecordsInput {
      /** A shard iterator that was retrieved from a previous GetShardIterator operation.
This iterator can be used to access the stream records in this shard. **/
      ShardIterator: ShardIterator;
      /** The maximum number of records to return from the shard. The upper limit is 1000. **/
      Limit?: PositiveIntegerObject;
    }
    export interface GetRecordsOutput {
      /** The stream records from the shard, which were retrieved using the shard
iterator. **/
      Records?: RecordList;
      /** The next position in the shard from which to start sequentially reading stream
records. If set to null, the shard has been closed and the requested iterator
will not return any more data. **/
      NextShardIterator?: ShardIterator;
    }
    export interface GetShardIteratorInput {
      /** The Amazon Resource Name (ARN) for the stream. **/
      StreamArn: StreamArn;
      /** The identifier of the shard. The iterator will be returned for this shard ID. **/
      ShardId: ShardId;
      /** Determines how the shard iterator is used to start reading stream records from
the shard:

&amp;#42;   AT_SEQUENCE_NUMBER - Start reading exactly from the position denoted by a
 specific sequence number.
 
 
*   AFTER_SEQUENCE_NUMBER - Start reading right after the position denoted by a
 specific sequence number.
 
 
*   TRIM_HORIZON - Start reading at the last (untrimmed) stream record, which is
 the oldest record in the shard. In DynamoDB Streams, there is a 24 hour limit
 on data retention. Stream records whose age exceeds this limit are subject to
 removal (trimming) from the stream.
 
 
*   LATEST - Start reading just after the most recent stream record in the
 shard, so that you always read the most recent data in the shard. **/
      ShardIteratorType: ShardIteratorType;
      /** The sequence number of a stream record in the shard from which to start reading. **/
      SequenceNumber?: SequenceNumber;
    }
    export interface GetShardIteratorOutput {
      /** The position in the shard from which to start reading stream records
sequentially. A shard iterator specifies this position using the sequence number
of a stream record in a shard. **/
      ShardIterator?: ShardIterator;
    }
    export interface InternalServerError {
      /** The server encountered an internal error trying to fulfill the request. **/
      message?: ErrorMessage;
    }
    export interface KeySchemaElement {
      /** The name of a key attribute. **/
      AttributeName: KeySchemaAttributeName;
      /** The attribute data, consisting of the data type and the attribute value itself. **/
      KeyType: KeyType;
    }
    export interface LimitExceededException {
      /** Too many operations for a given subscriber. **/
      message?: ErrorMessage;
    }
    export interface ListStreamsInput {
      /** If this parameter is provided, then only the streams associated with this table
name are returned. **/
      TableName?: TableName;
      /** The maximum number of streams to return. The upper limit is 100. **/
      Limit?: PositiveIntegerObject;
      /** The ARN (Amazon Resource Name) of the first item that this operation will
evaluate. Use the value that was returned for LastEvaluatedStreamArn in the
previous operation. **/
      ExclusiveStartStreamArn?: StreamArn;
    }
    export interface ListStreamsOutput {
      /** A list of stream descriptors associated with the current account and endpoint. **/
      Streams?: StreamList;
      /** The stream ARN of the item where the operation stopped, inclusive of the
previous result set. Use this value to start a new operation, excluding this
value in the new request.

If LastEvaluatedStreamArn is empty, then the &quot;last page&quot; of results has been
processed and there is no more data to be retrieved.

If LastEvaluatedStreamArn is not empty, it does not necessarily mean that there
is more data in the result set. The only way to know when you have reached the
end of the result set is when LastEvaluatedStreamArn is empty. **/
      LastEvaluatedStreamArn?: StreamArn;
    }
    export interface Record {
      /** A globally unique identifier for the event that was recorded in this stream
record. **/
      eventID?: String;
      /** The type of data modification that was performed on the DynamoDB table:

&amp;#42;   INSERT - a new item was added to the table.
 
 
*   MODIFY - one or more of an existing item&#x27;s attributes were modified.
 
 
*   REMOVE - the item was deleted from the table **/
      eventName?: OperationType;
      /** The version number of the stream record format. This number is updated whenever
the structure of Record is modified.

Client applications must not assume that eventVersion will remain at a
particular value, as this number is subject to change at any time. In general, 
eventVersion will only increase as the low-level DynamoDB Streams API evolves. **/
      eventVersion?: String;
      /** The AWS service from which the stream record originated. For DynamoDB Streams,
this is aws:dynamodb. **/
      eventSource?: String;
      /** The region in which the GetRecords request was received. **/
      awsRegion?: String;
      /** The main body of the stream record, containing all of the DynamoDB-specific
fields. **/
      dynamodb?: StreamRecord;
    }
    export interface ResourceNotFoundException {
      /** The resource which is being requested does not exist. **/
      message?: ErrorMessage;
    }
    export interface SequenceNumberRange {
      /** The first sequence number. **/
      StartingSequenceNumber?: SequenceNumber;
      /** The last sequence number. **/
      EndingSequenceNumber?: SequenceNumber;
    }
    export interface Shard {
      /** The system-generated identifier for this shard. **/
      ShardId?: ShardId;
      /** The range of possible sequence numbers for the shard. **/
      SequenceNumberRange?: SequenceNumberRange;
      /** The shard ID of the current shard&#x27;s parent. **/
      ParentShardId?: ShardId;
    }
    export interface Stream {
      /** The Amazon Resource Name (ARN) for the stream. **/
      StreamArn?: StreamArn;
      /** The DynamoDB table with which the stream is associated. **/
      TableName?: TableName;
      /** A timestamp, in ISO 8601 format, for this stream.

Note that LatestStreamLabel is not a unique identifier for the stream, because
it is possible that a stream from another table might have the same timestamp.
However, the combination of the following three elements is guaranteed to be
unique:

&amp;#42;  the AWS customer ID.
 
 
*  the table name
 
 
*  the StreamLabel **/
      StreamLabel?: String;
    }
    export interface StreamDescription {
      /** The Amazon Resource Name (ARN) for the stream. **/
      StreamArn?: StreamArn;
      /** A timestamp, in ISO 8601 format, for this stream.

Note that LatestStreamLabel is not a unique identifier for the stream, because
it is possible that a stream from another table might have the same timestamp.
However, the combination of the following three elements is guaranteed to be
unique:

&amp;#42;  the AWS customer ID.
 
 
*  the table name
 
 
*  the StreamLabel **/
      StreamLabel?: String;
      /** Indicates the current status of the stream:

&amp;#42;   ENABLING - Streams is currently being enabled on the DynamoDB table.
 
 
*   ENABLED - the stream is enabled.
 
 
*   DISABLING - Streams is currently being disabled on the DynamoDB table.
 
 
*   DISABLED - the stream is disabled. **/
      StreamStatus?: StreamStatus;
      /** Indicates the format of the records within this stream:

&amp;#42;   KEYS_ONLY - only the key attributes of items that were modified in the
 DynamoDB table.
 
 
*   NEW_IMAGE - entire items from the table, as they appeared after they were
 modified.
 
 
*   OLD_IMAGE - entire items from the table, as they appeared before they were
 modified.
 
 
*   NEW_AND_OLD_IMAGES - both the new and the old images of the items from the
 table. **/
      StreamViewType?: StreamViewType;
      /** The date and time when the request to create this stream was issued. **/
      CreationRequestDateTime?: Date;
      /** The DynamoDB table with which the stream is associated. **/
      TableName?: TableName;
      /** The key attribute(s) of the stream&#x27;s DynamoDB table. **/
      KeySchema?: KeySchema;
      /** The shards that comprise the stream. **/
      Shards?: ShardDescriptionList;
      /** The shard ID of the item where the operation stopped, inclusive of the previous
result set. Use this value to start a new operation, excluding this value in the
new request.

If LastEvaluatedShardId is empty, then the &quot;last page&quot; of results has been
processed and there is currently no more data to be retrieved.

If LastEvaluatedShardId is not empty, it does not necessarily mean that there is
more data in the result set. The only way to know when you have reached the end
of the result set is when LastEvaluatedShardId is empty. **/
      LastEvaluatedShardId?: ShardId;
    }
    export interface StreamRecord {
      /** The approximate date and time when the stream record was created, in UNIX epoch
time [http://www.epochconverter.com/] format. **/
      ApproximateCreationDateTime?: Date;
      /** The primary key attribute(s) for the DynamoDB item that was modified. **/
      Keys?: AttributeMap;
      /** The item in the DynamoDB table as it appeared after it was modified. **/
      NewImage?: AttributeMap;
      /** The item in the DynamoDB table as it appeared before it was modified. **/
      OldImage?: AttributeMap;
      /** The sequence number of the stream record. **/
      SequenceNumber?: SequenceNumber;
      /** The size of the stream record, in bytes. **/
      SizeBytes?: PositiveLongObject;
      /** The type of data from the modified DynamoDB item that was captured in this
stream record:

&amp;#42;   KEYS_ONLY - only the key attributes of the modified item.
 
 
*   NEW_IMAGE - the entire item, as it appeared after it was modified.
 
 
*   OLD_IMAGE - the entire item, as it appeared before it was modified.
 
 
*   NEW_AND_OLD_IMAGES - both the new and the old item images of the item. **/
      StreamViewType?: StreamViewType;
    }
    export interface TrimmedDataAccessException {
      /** &quot;The data you are trying to access has been trimmed. **/
      message?: ErrorMessage;
    }
  }
}
