// DO NOT EDIT!
//
declare module "aws-sdk" {
    export class SQS {
      constructor(options?: any);
      addPermission(params: AddPermissionRequest, callback: (err: OverLimit|any, data: any) => void): void;
      changeMessageVisibility(params: ChangeMessageVisibilityRequest, callback: (err: MessageNotInflight|ReceiptHandleIsInvalid|any, data: any) => void): void;
      changeMessageVisibilityBatch(params: ChangeMessageVisibilityBatchRequest, callback: (err: TooManyEntriesInBatchRequest|EmptyBatchRequest|BatchEntryIdsNotDistinct|InvalidBatchEntryId|any, data: ChangeMessageVisibilityBatchResult|any) => void): void;
      createQueue(params: CreateQueueRequest, callback: (err: QueueDeletedRecently|QueueNameExists|any, data: CreateQueueResult|any) => void): void;
      deleteMessage(params: DeleteMessageRequest, callback: (err: InvalidIdFormat|ReceiptHandleIsInvalid|any, data: any) => void): void;
      deleteMessageBatch(params: DeleteMessageBatchRequest, callback: (err: TooManyEntriesInBatchRequest|EmptyBatchRequest|BatchEntryIdsNotDistinct|InvalidBatchEntryId|any, data: DeleteMessageBatchResult|any) => void): void;
      deleteQueue(params: DeleteQueueRequest, callback: (err: any, data: any) => void): void;
      getQueueAttributes(params: GetQueueAttributesRequest, callback: (err: InvalidAttributeName|any, data: GetQueueAttributesResult|any) => void): void;
      getQueueUrl(params: GetQueueUrlRequest, callback: (err: QueueDoesNotExist|any, data: GetQueueUrlResult|any) => void): void;
      listDeadLetterSourceQueues(params: ListDeadLetterSourceQueuesRequest, callback: (err: QueueDoesNotExist|any, data: ListDeadLetterSourceQueuesResult|any) => void): void;
      listQueues(params: ListQueuesRequest, callback: (err: any, data: ListQueuesResult|any) => void): void;
      purgeQueue(params: PurgeQueueRequest, callback: (err: QueueDoesNotExist|PurgeQueueInProgress|any, data: any) => void): void;
      receiveMessage(params: ReceiveMessageRequest, callback: (err: OverLimit|any, data: ReceiveMessageResult|any) => void): void;
      removePermission(params: RemovePermissionRequest, callback: (err: any, data: any) => void): void;
      sendMessage(params: SendMessageRequest, callback: (err: InvalidMessageContents|UnsupportedOperation|any, data: SendMessageResult|any) => void): void;
      sendMessageBatch(params: SendMessageBatchRequest, callback: (err: TooManyEntriesInBatchRequest|EmptyBatchRequest|BatchEntryIdsNotDistinct|BatchRequestTooLong|InvalidBatchEntryId|UnsupportedOperation|any, data: SendMessageBatchResult|any) => void): void;
      setQueueAttributes(params: SetQueueAttributesRequest, callback: (err: InvalidAttributeName|any, data: any) => void): void;
    }

    export type AWSAccountIdList = Array<String>;

    export type ActionNameList = Array<String>;

    export interface AddPermissionRequest {
      QueueUrl: String;
      Label: String;
      AWSAccountIds: AWSAccountIdList;
      Actions: ActionNameList;
    }


    export type AttributeMap = any; // not really - it was 'map' instead - must fix this one

    export type AttributeNameList = Array<QueueAttributeName>;

    export interface BatchEntryIdsNotDistinct {
    }


    export interface BatchRequestTooLong {
    }


    export interface BatchResultErrorEntry {
      Id: String;
      SenderFault: Boolean;
      Code: String;
      Message?: String;
    }


    export type BatchResultErrorEntryList = Array<BatchResultErrorEntry>;

    export type Binary = any; // not really - it was 'blob' instead - must fix this one

    export type BinaryList = Array<Binary>;

    export type Boolean = boolean;

    export interface ChangeMessageVisibilityBatchRequest {
      QueueUrl: String;
      Entries: ChangeMessageVisibilityBatchRequestEntryList;
    }


    export interface ChangeMessageVisibilityBatchRequestEntry {
      Id: String;
      ReceiptHandle: String;
      VisibilityTimeout?: Integer;
    }


    export type ChangeMessageVisibilityBatchRequestEntryList = Array<ChangeMessageVisibilityBatchRequestEntry>;

    export interface ChangeMessageVisibilityBatchResult {
      Successful: ChangeMessageVisibilityBatchResultEntryList;
      Failed: BatchResultErrorEntryList;
    }


    export interface ChangeMessageVisibilityBatchResultEntry {
      Id: String;
    }


    export type ChangeMessageVisibilityBatchResultEntryList = Array<ChangeMessageVisibilityBatchResultEntry>;

    export interface ChangeMessageVisibilityRequest {
      QueueUrl: String;
      ReceiptHandle: String;
      VisibilityTimeout: Integer;
    }


    export interface CreateQueueRequest {
      QueueName: String;
      Attributes?: AttributeMap;
    }


    export interface CreateQueueResult {
      QueueUrl?: String;
    }


    export interface DeleteMessageBatchRequest {
      QueueUrl: String;
      Entries: DeleteMessageBatchRequestEntryList;
    }


    export interface DeleteMessageBatchRequestEntry {
      Id: String;
      ReceiptHandle: String;
    }


    export type DeleteMessageBatchRequestEntryList = Array<DeleteMessageBatchRequestEntry>;

    export interface DeleteMessageBatchResult {
      Successful: DeleteMessageBatchResultEntryList;
      Failed: BatchResultErrorEntryList;
    }


    export interface DeleteMessageBatchResultEntry {
      Id: String;
    }


    export type DeleteMessageBatchResultEntryList = Array<DeleteMessageBatchResultEntry>;

    export interface DeleteMessageRequest {
      QueueUrl: String;
      ReceiptHandle: String;
    }


    export interface DeleteQueueRequest {
      QueueUrl: String;
    }


    export interface EmptyBatchRequest {
    }


    export interface GetQueueAttributesRequest {
      QueueUrl: String;
      AttributeNames?: AttributeNameList;
    }


    export interface GetQueueAttributesResult {
      Attributes?: AttributeMap;
    }


    export interface GetQueueUrlRequest {
      QueueName: String;
      QueueOwnerAWSAccountId?: String;
    }


    export interface GetQueueUrlResult {
      QueueUrl?: String;
    }


    export type Integer = number;

    export interface InvalidAttributeName {
    }


    export interface InvalidBatchEntryId {
    }


    export interface InvalidIdFormat {
    }


    export interface InvalidMessageContents {
    }


    export interface ListDeadLetterSourceQueuesRequest {
      QueueUrl: String;
    }


    export interface ListDeadLetterSourceQueuesResult {
      queueUrls: QueueUrlList;
    }


    export interface ListQueuesRequest {
      QueueNamePrefix?: String;
    }


    export interface ListQueuesResult {
      QueueUrls?: QueueUrlList;
    }


    export interface Message {
      MessageId?: String;
      ReceiptHandle?: String;
      MD5OfBody?: String;
      Body?: String;
      Attributes?: AttributeMap;
      MD5OfMessageAttributes?: String;
      MessageAttributes?: MessageAttributeMap;
    }


    export type MessageAttributeMap = any; // not really - it was 'map' instead - must fix this one

    export type MessageAttributeName = string;

    export type MessageAttributeNameList = Array<MessageAttributeName>;

    export interface MessageAttributeValue {
      StringValue?: String;
      BinaryValue?: Binary;
      StringListValues?: StringList;
      BinaryListValues?: BinaryList;
      DataType: String;
    }


    export type MessageList = Array<Message>;

    export interface MessageNotInflight {
    }


    export interface OverLimit {
    }


    export interface PurgeQueueInProgress {
    }


    export interface PurgeQueueRequest {
      QueueUrl: String;
    }


    export type QueueAttributeName = string;

    export interface QueueDeletedRecently {
    }


    export interface QueueDoesNotExist {
    }


    export interface QueueNameExists {
    }


    export type QueueUrlList = Array<String>;

    export interface ReceiptHandleIsInvalid {
    }


    export interface ReceiveMessageRequest {
      QueueUrl: String;
      AttributeNames?: AttributeNameList;
      MessageAttributeNames?: MessageAttributeNameList;
      MaxNumberOfMessages?: Integer;
      VisibilityTimeout?: Integer;
      WaitTimeSeconds?: Integer;
    }


    export interface ReceiveMessageResult {
      Messages?: MessageList;
    }


    export interface RemovePermissionRequest {
      QueueUrl: String;
      Label: String;
    }


    export interface SendMessageBatchRequest {
      QueueUrl: String;
      Entries: SendMessageBatchRequestEntryList;
    }


    export interface SendMessageBatchRequestEntry {
      Id: String;
      MessageBody: String;
      DelaySeconds?: Integer;
      MessageAttributes?: MessageAttributeMap;
    }


    export type SendMessageBatchRequestEntryList = Array<SendMessageBatchRequestEntry>;

    export interface SendMessageBatchResult {
      Successful: SendMessageBatchResultEntryList;
      Failed: BatchResultErrorEntryList;
    }


    export interface SendMessageBatchResultEntry {
      Id: String;
      MessageId: String;
      MD5OfMessageBody: String;
      MD5OfMessageAttributes?: String;
    }


    export type SendMessageBatchResultEntryList = Array<SendMessageBatchResultEntry>;

    export interface SendMessageRequest {
      QueueUrl: String;
      MessageBody: String;
      DelaySeconds?: Integer;
      MessageAttributes?: MessageAttributeMap;
    }


    export interface SendMessageResult {
      MD5OfMessageBody?: String;
      MD5OfMessageAttributes?: String;
      MessageId?: String;
    }


    export interface SetQueueAttributesRequest {
      QueueUrl: String;
      Attributes: AttributeMap;
    }


    export type String = string;

    export type StringList = Array<String>;

    export interface TooManyEntriesInBatchRequest {
    }


    export interface UnsupportedOperation {
    }


}
