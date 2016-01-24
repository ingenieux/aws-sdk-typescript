// Type definitions for aws-sdk - Amazon Simple Queue Service
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

///<reference path="./aws-sdk-common.d.ts" />

declare module "aws-sdk" {

    /*
     * apiVersion: 2012-11-05
     * endpointPrefix: sqs
     * serviceAbbreviation: Amazon SQS
     * signatureVersion: v4
     * protocol: query
     */
    export class SQS extends Service {
      constructor(options?: any);
      endpoint: Endpoint;
      addPermission(params: SQS.AddPermissionRequest, callback?: (err: SQS.OverLimit|any, data: any) => void): Request;
      changeMessageVisibility(params: SQS.ChangeMessageVisibilityRequest, callback?: (err: SQS.MessageNotInflight|SQS.ReceiptHandleIsInvalid|any, data: any) => void): Request;
      changeMessageVisibilityBatch(params: SQS.ChangeMessageVisibilityBatchRequest, callback?: (err: SQS.TooManyEntriesInBatchRequest|SQS.EmptyBatchRequest|SQS.BatchEntryIdsNotDistinct|SQS.InvalidBatchEntryId|any, data: SQS.ChangeMessageVisibilityBatchResult|any) => void): Request;
      createQueue(params: SQS.CreateQueueRequest, callback?: (err: SQS.QueueDeletedRecently|SQS.QueueNameExists|any, data: SQS.CreateQueueResult|any) => void): Request;
      deleteMessage(params: SQS.DeleteMessageRequest, callback?: (err: SQS.InvalidIdFormat|SQS.ReceiptHandleIsInvalid|any, data: any) => void): Request;
      deleteMessageBatch(params: SQS.DeleteMessageBatchRequest, callback?: (err: SQS.TooManyEntriesInBatchRequest|SQS.EmptyBatchRequest|SQS.BatchEntryIdsNotDistinct|SQS.InvalidBatchEntryId|any, data: SQS.DeleteMessageBatchResult|any) => void): Request;
      deleteQueue(params: SQS.DeleteQueueRequest, callback?: (err: any, data: any) => void): Request;
      getQueueAttributes(params: SQS.GetQueueAttributesRequest, callback?: (err: SQS.InvalidAttributeName|any, data: SQS.GetQueueAttributesResult|any) => void): Request;
      getQueueUrl(params: SQS.GetQueueUrlRequest, callback?: (err: SQS.QueueDoesNotExist|any, data: SQS.GetQueueUrlResult|any) => void): Request;
      listDeadLetterSourceQueues(params: SQS.ListDeadLetterSourceQueuesRequest, callback?: (err: SQS.QueueDoesNotExist|any, data: SQS.ListDeadLetterSourceQueuesResult|any) => void): Request;
      listQueues(params: SQS.ListQueuesRequest, callback?: (err: any, data: SQS.ListQueuesResult|any) => void): Request;
      purgeQueue(params: SQS.PurgeQueueRequest, callback?: (err: SQS.QueueDoesNotExist|SQS.PurgeQueueInProgress|any, data: any) => void): Request;
      receiveMessage(params: SQS.ReceiveMessageRequest, callback?: (err: SQS.OverLimit|any, data: SQS.ReceiveMessageResult|any) => void): Request;
      removePermission(params: SQS.RemovePermissionRequest, callback?: (err: any, data: any) => void): Request;
      sendMessage(params: SQS.SendMessageRequest, callback?: (err: SQS.InvalidMessageContents|SQS.UnsupportedOperation|any, data: SQS.SendMessageResult|any) => void): Request;
      sendMessageBatch(params: SQS.SendMessageBatchRequest, callback?: (err: SQS.TooManyEntriesInBatchRequest|SQS.EmptyBatchRequest|SQS.BatchEntryIdsNotDistinct|SQS.BatchRequestTooLong|SQS.InvalidBatchEntryId|SQS.UnsupportedOperation|any, data: SQS.SendMessageBatchResult|any) => void): Request;
      setQueueAttributes(params: SQS.SetQueueAttributesRequest, callback?: (err: SQS.InvalidAttributeName|any, data: any) => void): Request;

      // Found on JS Sources - Sorry for the inconvenience :)
      setupRequestListeners(...args: any[]): any
      // Found on JS Sources - Sorry for the inconvenience :)
      verifySendMessageChecksum(...args: any[]): any
      // Found on JS Sources - Sorry for the inconvenience :)
      verifySendMessageBatchChecksum(...args: any[]): any
      // Found on JS Sources - Sorry for the inconvenience :)
      verifyReceiveMessageChecksum(...args: any[]): any
      // Found on JS Sources - Sorry for the inconvenience :)
      throwInvalidChecksumError(...args: any[]): any
      // Found on JS Sources - Sorry for the inconvenience :)
      isChecksumValid(...args: any[]): any
      // Found on JS Sources - Sorry for the inconvenience :)
      calculateChecksum(...args: any[]): any
      // Found on JS Sources - Sorry for the inconvenience :)
      buildEndpoint(...args: any[]): any
    }

    export module SQS {
        export type AWSAccountIdList = String[];
        export type ActionNameList = String[];
        export type AttributeMap = {[key:string]: String};
        export type AttributeNameList = QueueAttributeName[];
        export type BatchResultErrorEntryList = BatchResultErrorEntry[];
        export type Binary = any;    // type: blob
        export type BinaryList = Binary[];
        export type Boolean = boolean;
        export type ChangeMessageVisibilityBatchRequestEntryList = ChangeMessageVisibilityBatchRequestEntry[];
        export type ChangeMessageVisibilityBatchResultEntryList = ChangeMessageVisibilityBatchResultEntry[];
        export type DeleteMessageBatchRequestEntryList = DeleteMessageBatchRequestEntry[];
        export type DeleteMessageBatchResultEntryList = DeleteMessageBatchResultEntry[];
        export type Integer = number;
        export type MessageAttributeMap = {[key:string]: MessageAttributeValue};
        export type MessageAttributeName = string;
        export type MessageAttributeNameList = MessageAttributeName[];
        export type MessageList = Message[];
        export type QueueAttributeName = string;
        export type QueueUrlList = String[];
        export type SendMessageBatchRequestEntryList = SendMessageBatchRequestEntry[];
        export type SendMessageBatchResultEntryList = SendMessageBatchResultEntry[];
        export type String = string;
        export type StringList = String[];

        export interface AddPermissionRequest {
            QueueUrl: String;
            Label: String;
            AWSAccountIds: AWSAccountIdList;
            Actions: ActionNameList;
        }
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
        export interface ChangeMessageVisibilityBatchRequest {
            QueueUrl: String;
            Entries: ChangeMessageVisibilityBatchRequestEntryList;
        }
        export interface ChangeMessageVisibilityBatchRequestEntry {
            Id: String;
            ReceiptHandle: String;
            VisibilityTimeout?: Integer;
        }
        export interface ChangeMessageVisibilityBatchResult {
            Successful: ChangeMessageVisibilityBatchResultEntryList;
            Failed: BatchResultErrorEntryList;
        }
        export interface ChangeMessageVisibilityBatchResultEntry {
            Id: String;
        }
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
        export interface DeleteMessageBatchResult {
            Successful: DeleteMessageBatchResultEntryList;
            Failed: BatchResultErrorEntryList;
        }
        export interface DeleteMessageBatchResultEntry {
            Id: String;
        }
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
        export interface MessageAttributeValue {
            StringValue?: String;
            BinaryValue?: Binary;
            StringListValues?: StringList;
            BinaryListValues?: BinaryList;
            DataType: String;
        }
        export interface MessageNotInflight {
        }
        export interface OverLimit {
        }
        export interface PurgeQueueInProgress {
        }
        export interface PurgeQueueRequest {
            QueueUrl: String;
        }
        export interface QueueDeletedRecently {
        }
        export interface QueueDoesNotExist {
        }
        export interface QueueNameExists {
        }
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
        export interface TooManyEntriesInBatchRequest {
        }
        export interface UnsupportedOperation {
        }

    }
}
