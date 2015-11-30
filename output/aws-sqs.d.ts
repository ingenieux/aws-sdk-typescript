// DO NOT EDIT!
//

///<reference path="./aws-sdk-common.d.ts" />
declare module "aws-sdk" {

    export class SQS extends Service {
      constructor(options?: any);
      addPermission(params: SQSAddPermissionRequest, callback?: (err: SQSOverLimit|any, data: any) => void): Request;
      changeMessageVisibility(params: SQSChangeMessageVisibilityRequest, callback?: (err: SQSMessageNotInflight|SQSReceiptHandleIsInvalid|any, data: any) => void): Request;
      changeMessageVisibilityBatch(params: SQSChangeMessageVisibilityBatchRequest, callback?: (err: SQSTooManyEntriesInBatchRequest|SQSEmptyBatchRequest|SQSBatchEntryIdsNotDistinct|SQSInvalidBatchEntryId|any, data: SQSChangeMessageVisibilityBatchResult|any) => void): Request;
      createQueue(params: SQSCreateQueueRequest, callback?: (err: SQSQueueDeletedRecently|SQSQueueNameExists|any, data: SQSCreateQueueResult|any) => void): Request;
      deleteMessage(params: SQSDeleteMessageRequest, callback?: (err: SQSInvalidIdFormat|SQSReceiptHandleIsInvalid|any, data: any) => void): Request;
      deleteMessageBatch(params: SQSDeleteMessageBatchRequest, callback?: (err: SQSTooManyEntriesInBatchRequest|SQSEmptyBatchRequest|SQSBatchEntryIdsNotDistinct|SQSInvalidBatchEntryId|any, data: SQSDeleteMessageBatchResult|any) => void): Request;
      deleteQueue(params: SQSDeleteQueueRequest, callback?: (err: any, data: any) => void): Request;
      getQueueAttributes(params: SQSGetQueueAttributesRequest, callback?: (err: SQSInvalidAttributeName|any, data: SQSGetQueueAttributesResult|any) => void): Request;
      getQueueUrl(params: SQSGetQueueUrlRequest, callback?: (err: SQSQueueDoesNotExist|any, data: SQSGetQueueUrlResult|any) => void): Request;
      listDeadLetterSourceQueues(params: SQSListDeadLetterSourceQueuesRequest, callback?: (err: SQSQueueDoesNotExist|any, data: SQSListDeadLetterSourceQueuesResult|any) => void): Request;
      listQueues(params: SQSListQueuesRequest, callback?: (err: any, data: SQSListQueuesResult|any) => void): Request;
      purgeQueue(params: SQSPurgeQueueRequest, callback?: (err: SQSQueueDoesNotExist|SQSPurgeQueueInProgress|any, data: any) => void): Request;
      receiveMessage(params: SQSReceiveMessageRequest, callback?: (err: SQSOverLimit|any, data: SQSReceiveMessageResult|any) => void): Request;
      removePermission(params: SQSRemovePermissionRequest, callback?: (err: any, data: any) => void): Request;
      sendMessage(params: SQSSendMessageRequest, callback?: (err: SQSInvalidMessageContents|SQSUnsupportedOperation|any, data: SQSSendMessageResult|any) => void): Request;
      sendMessageBatch(params: SQSSendMessageBatchRequest, callback?: (err: SQSTooManyEntriesInBatchRequest|SQSEmptyBatchRequest|SQSBatchEntryIdsNotDistinct|SQSBatchRequestTooLong|SQSInvalidBatchEntryId|SQSUnsupportedOperation|any, data: SQSSendMessageBatchResult|any) => void): Request;
      setQueueAttributes(params: SQSSetQueueAttributesRequest, callback?: (err: SQSInvalidAttributeName|any, data: any) => void): Request;
    }

    export type SQSAWSAccountIdList = Array<SQSString>;
    export type SQSActionNameList = Array<SQSString>;
    export interface SQSAddPermissionRequest {
        QueueUrl: SQSString;
        Label: SQSString;
        AWSAccountIds: SQSAWSAccountIdList;
        Actions: SQSActionNameList;
    }

    export type SQSAttributeMap = any; // not really - it was 'map' instead - must fix this one
    export type SQSAttributeNameList = Array<SQSQueueAttributeName>;
    export interface SQSBatchEntryIdsNotDistinct {
    }

    export interface SQSBatchRequestTooLong {
    }

    export interface SQSBatchResultErrorEntry {
        Id: SQSString;
        SenderFault: SQSBoolean;
        Code: SQSString;
        Message?: SQSString;
    }

    export type SQSBatchResultErrorEntryList = Array<SQSBatchResultErrorEntry>;
    export type SQSBinary = any; // not really - it was 'blob' instead - must fix this one
    export type SQSBinaryList = Array<SQSBinary>;
    export type SQSBoolean = boolean;
    export interface SQSChangeMessageVisibilityBatchRequest {
        QueueUrl: SQSString;
        Entries: SQSChangeMessageVisibilityBatchRequestEntryList;
    }

    export interface SQSChangeMessageVisibilityBatchRequestEntry {
        Id: SQSString;
        ReceiptHandle: SQSString;
        VisibilityTimeout?: SQSInteger;
    }

    export type SQSChangeMessageVisibilityBatchRequestEntryList = Array<SQSChangeMessageVisibilityBatchRequestEntry>;
    export interface SQSChangeMessageVisibilityBatchResult {
        Successful: SQSChangeMessageVisibilityBatchResultEntryList;
        Failed: SQSBatchResultErrorEntryList;
    }

    export interface SQSChangeMessageVisibilityBatchResultEntry {
        Id: SQSString;
    }

    export type SQSChangeMessageVisibilityBatchResultEntryList = Array<SQSChangeMessageVisibilityBatchResultEntry>;
    export interface SQSChangeMessageVisibilityRequest {
        QueueUrl: SQSString;
        ReceiptHandle: SQSString;
        VisibilityTimeout: SQSInteger;
    }

    export interface SQSCreateQueueRequest {
        QueueName: SQSString;
        Attributes?: SQSAttributeMap;
    }

    export interface SQSCreateQueueResult {
        QueueUrl?: SQSString;
    }

    export interface SQSDeleteMessageBatchRequest {
        QueueUrl: SQSString;
        Entries: SQSDeleteMessageBatchRequestEntryList;
    }

    export interface SQSDeleteMessageBatchRequestEntry {
        Id: SQSString;
        ReceiptHandle: SQSString;
    }

    export type SQSDeleteMessageBatchRequestEntryList = Array<SQSDeleteMessageBatchRequestEntry>;
    export interface SQSDeleteMessageBatchResult {
        Successful: SQSDeleteMessageBatchResultEntryList;
        Failed: SQSBatchResultErrorEntryList;
    }

    export interface SQSDeleteMessageBatchResultEntry {
        Id: SQSString;
    }

    export type SQSDeleteMessageBatchResultEntryList = Array<SQSDeleteMessageBatchResultEntry>;
    export interface SQSDeleteMessageRequest {
        QueueUrl: SQSString;
        ReceiptHandle: SQSString;
    }

    export interface SQSDeleteQueueRequest {
        QueueUrl: SQSString;
    }

    export interface SQSEmptyBatchRequest {
    }

    export interface SQSGetQueueAttributesRequest {
        QueueUrl: SQSString;
        AttributeNames?: SQSAttributeNameList;
    }

    export interface SQSGetQueueAttributesResult {
        Attributes?: SQSAttributeMap;
    }

    export interface SQSGetQueueUrlRequest {
        QueueName: SQSString;
        QueueOwnerAWSAccountId?: SQSString;
    }

    export interface SQSGetQueueUrlResult {
        QueueUrl?: SQSString;
    }

    export type SQSInteger = number;
    export interface SQSInvalidAttributeName {
    }

    export interface SQSInvalidBatchEntryId {
    }

    export interface SQSInvalidIdFormat {
    }

    export interface SQSInvalidMessageContents {
    }

    export interface SQSListDeadLetterSourceQueuesRequest {
        QueueUrl: SQSString;
    }

    export interface SQSListDeadLetterSourceQueuesResult {
        queueUrls: SQSQueueUrlList;
    }

    export interface SQSListQueuesRequest {
        QueueNamePrefix?: SQSString;
    }

    export interface SQSListQueuesResult {
        QueueUrls?: SQSQueueUrlList;
    }

    export interface SQSMessage {
        MessageId?: SQSString;
        ReceiptHandle?: SQSString;
        MD5OfBody?: SQSString;
        Body?: SQSString;
        Attributes?: SQSAttributeMap;
        MD5OfMessageAttributes?: SQSString;
        MessageAttributes?: SQSMessageAttributeMap;
    }

    export type SQSMessageAttributeMap = any; // not really - it was 'map' instead - must fix this one
    export type SQSMessageAttributeName = string;
    export type SQSMessageAttributeNameList = Array<SQSMessageAttributeName>;
    export interface SQSMessageAttributeValue {
        StringValue?: SQSString;
        BinaryValue?: SQSBinary;
        StringListValues?: SQSStringList;
        BinaryListValues?: SQSBinaryList;
        DataType: SQSString;
    }

    export type SQSMessageList = Array<SQSMessage>;
    export interface SQSMessageNotInflight {
    }

    export interface SQSOverLimit {
    }

    export interface SQSPurgeQueueInProgress {
    }

    export interface SQSPurgeQueueRequest {
        QueueUrl: SQSString;
    }

    export type SQSQueueAttributeName = string;
    export interface SQSQueueDeletedRecently {
    }

    export interface SQSQueueDoesNotExist {
    }

    export interface SQSQueueNameExists {
    }

    export type SQSQueueUrlList = Array<SQSString>;
    export interface SQSReceiptHandleIsInvalid {
    }

    export interface SQSReceiveMessageRequest {
        QueueUrl: SQSString;
        AttributeNames?: SQSAttributeNameList;
        MessageAttributeNames?: SQSMessageAttributeNameList;
        MaxNumberOfMessages?: SQSInteger;
        VisibilityTimeout?: SQSInteger;
        WaitTimeSeconds?: SQSInteger;
    }

    export interface SQSReceiveMessageResult {
        Messages?: SQSMessageList;
    }

    export interface SQSRemovePermissionRequest {
        QueueUrl: SQSString;
        Label: SQSString;
    }

    export interface SQSSendMessageBatchRequest {
        QueueUrl: SQSString;
        Entries: SQSSendMessageBatchRequestEntryList;
    }

    export interface SQSSendMessageBatchRequestEntry {
        Id: SQSString;
        MessageBody: SQSString;
        DelaySeconds?: SQSInteger;
        MessageAttributes?: SQSMessageAttributeMap;
    }

    export type SQSSendMessageBatchRequestEntryList = Array<SQSSendMessageBatchRequestEntry>;
    export interface SQSSendMessageBatchResult {
        Successful: SQSSendMessageBatchResultEntryList;
        Failed: SQSBatchResultErrorEntryList;
    }

    export interface SQSSendMessageBatchResultEntry {
        Id: SQSString;
        MessageId: SQSString;
        MD5OfMessageBody: SQSString;
        MD5OfMessageAttributes?: SQSString;
    }

    export type SQSSendMessageBatchResultEntryList = Array<SQSSendMessageBatchResultEntry>;
    export interface SQSSendMessageRequest {
        QueueUrl: SQSString;
        MessageBody: SQSString;
        DelaySeconds?: SQSInteger;
        MessageAttributes?: SQSMessageAttributeMap;
    }

    export interface SQSSendMessageResult {
        MD5OfMessageBody?: SQSString;
        MD5OfMessageAttributes?: SQSString;
        MessageId?: SQSString;
    }

    export interface SQSSetQueueAttributesRequest {
        QueueUrl: SQSString;
        Attributes: SQSAttributeMap;
    }

    export type SQSString = string;
    export type SQSStringList = Array<SQSString>;
    export interface SQSTooManyEntriesInBatchRequest {
    }

    export interface SQSUnsupportedOperation {
    }

}
