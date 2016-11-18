// Type definitions for aws-sdk - Amazon Simple Queue Service
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

// COMMENTED <reference path="./aws-sdk.d.ts" />

declare module "aws-sdk" {

 /**
   * apiVersion: 2012-11-05
   * endpointPrefix: sqs
   * serviceAbbreviation: Amazon SQS
   * signatureVersion: v4
   * protocol: query
   *
   * Welcome to the Amazon Simple Queue Service API Reference . This section
describes who should read this guide, how the guide is organized, and other
resources related to the Amazon Simple Queue Service (Amazon SQS).

Amazon SQS offers reliable and scalable hosted queues for storing messages as
they travel between computers. By using Amazon SQS, you can move data between
distributed components of your applications that perform different tasks without
losing messages or requiring each component to be always available.

Topics

 &amp;#42; 
   
   
 * 
   
   
 * CommonParameters
   
   
 * CommonErrors
   
   

Helpful Links

 * Making API Requests
   [http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/MakingRequestsArticle.html]
   
   
 * Amazon SQS product page [http://aws.amazon.com/sqs/]
   
   
 * Using Amazon SQS Message Attributes
   [http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/SQSMessageAttributes.html]
   
   
 * Using Amazon SQS Dead Letter Queues
   [http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/SQSDeadLetterQueue.html]
   
   
 * Regions and Endpoints
   [http://docs.aws.amazon.com/general/latest/gr/rande.html#sqs_region]
   
   

We also provide SDKs that enable you to access Amazon SQS from your preferred
programming language. The SDKs contain functionality that automatically takes
care of tasks such as:

 * Cryptographically signing your service requests
   
   
 * Retrying requests
   
   
 * Handling error responses
   
   

For a list of available SDKs, see Tools for Amazon Web Services
[http://aws.amazon.com/tools/] .
   *
   */
  export class SQS extends Service {
    constructor(options?: any);
    endpoint: Endpoint;
    /**
     * Adds a permission to a queue for a specific principal
[http://docs.aws.amazon.com/general/latest/gr/glos-chap.html#P] . This allows
for sharing access to the queue.

When you create a queue, you have full control access rights for the queue. Only
you (as owner of the queue) can grant or deny permissions to the queue. For more
information about these permissions, see Shared Queues
[http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/acp-overview.html] 
in the Amazon SQS Developer Guide .

AddPermission writes an Amazon SQS-generated policy. If you want to write your
own policy, use SetQueueAttributes to upload your policy. For more information
about writing your own policy, see Using The Access Policy Language
[http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/AccessPolicyLanguage.html] 
in the Amazon SQS Developer Guide .

Some API actions take lists of parameters. These lists are specified using the 
param.n notation. Values of n are integers starting from 1. For example, a
parameter list with two elements looks like this:

&amp;amp;Attribute.1=this

&amp;amp;Attribute.2=that
     *
     * @error OverLimit   
     */
    addPermission(params: SQS.AddPermissionRequest, callback?: (err: SQS.OverLimit|any, data: any) => void): Request<any,SQS.OverLimit|any>;
    /**
     * Changes the visibility timeout of a specified message in a queue to a new value.
The maximum allowed timeout value you can set the value to is 12 hours. This
means you can&#x27;t extend the timeout of a message in an existing queue to more
than a total visibility timeout of 12 hours. (For more information visibility
timeout, see Visibility Timeout
[http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/AboutVT.html] 
in the Amazon SQS Developer Guide .)

For example, let&#x27;s say you have a message and its default message visibility
timeout is 5 minutes. After 3 minutes, you call ChangeMessageVisiblity with a
timeout of 10 minutes. At that time, the timeout for the message would be
extended by 10 minutes beyond the time of the ChangeMessageVisibility call. This
results in a total visibility timeout of 13 minutes. You can continue to call
ChangeMessageVisibility to extend the visibility timeout to a maximum of 12
hours. If you try to extend beyond 12 hours, the request will be rejected.

There is a 120,000 limit for the number of inflight messages per queue. Messages
are inflight after they have been received from the queue by a consuming
component, but have not yet been deleted from the queue. If you reach the
120,000 limit, you will receive an OverLimit error message from Amazon SQS. To
help avoid reaching the limit, you should delete the messages from the queue
after they have been processed. You can also increase the number of queues you
use to process the messages.

If you attempt to set the VisibilityTimeout to an amount more than the maximum
time left, Amazon SQS returns an error. It will not automatically recalculate
and increase the timeout to the maximum time remaining.

Unlike with a queue, when you change the visibility timeout for a specific
message, that timeout value is applied immediately but is not saved in memory
for that message. If you don&#x27;t delete a message after it is received, the
visibility timeout for the message the next time it is received reverts to the
original timeout value, not the value you set with the ChangeMessageVisibility 
action.
     *
     * @error MessageNotInflight   
     * @error ReceiptHandleIsInvalid   
     */
    changeMessageVisibility(params: SQS.ChangeMessageVisibilityRequest, callback?: (err: SQS.MessageNotInflight|SQS.ReceiptHandleIsInvalid|any, data: any) => void): Request<any,SQS.MessageNotInflight|SQS.ReceiptHandleIsInvalid|any>;
    /**
     * Changes the visibility timeout of multiple messages. This is a batch version of 
ChangeMessageVisibility . The result of the action on each message is reported
individually in the response. You can send up to 10 ChangeMessageVisibility 
requests with each ChangeMessageVisibilityBatch action.

Because the batch request can result in a combination of successful and
unsuccessful actions, you should check for batch errors even when the call
returns an HTTP status code of 200.

Some API actions take lists of parameters. These lists are specified using the 
param.n notation. Values of n are integers starting from 1. For example, a
parameter list with two elements looks like this:

&amp;amp;Attribute.1=this

&amp;amp;Attribute.2=that
     *
     * @error TooManyEntriesInBatchRequest   
     * @error EmptyBatchRequest   
     * @error BatchEntryIdsNotDistinct   
     * @error InvalidBatchEntryId   
     */
    changeMessageVisibilityBatch(params: SQS.ChangeMessageVisibilityBatchRequest, callback?: (err: SQS.TooManyEntriesInBatchRequest|SQS.EmptyBatchRequest|SQS.BatchEntryIdsNotDistinct|SQS.InvalidBatchEntryId|any, data: SQS.ChangeMessageVisibilityBatchResult|any) => void): Request<SQS.ChangeMessageVisibilityBatchResult|any,SQS.TooManyEntriesInBatchRequest|SQS.EmptyBatchRequest|SQS.BatchEntryIdsNotDistinct|SQS.InvalidBatchEntryId|any>;
    /**
     * Creates a new standard or FIFO queue or returns the URL of an existing queue.
You can pass one or more attributes in the request.

 &amp;#42; If you don&#x27;t specify the FifoQueue attribute, Amazon SQS creates a standard
   queue.
   
   You can&#x27;t change the queue type after you create it and you can&#x27;t convert an
   existing standard queue into a FIFO queue. You must either create a new FIFO
   queue for your application or delete your existing standard queue and
   recreate it as a FIFO queue. For more information, see Moving From a Standard
   Queue to a FIFO Queue
   [http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues-moving.html] 
   in the Amazon SQS Developer Guide .
   
   
 * If you don&#x27;t provide a value for an attribute, the queue is created with the
   default value for the attribute.
   
   
 * If you delete a queue, you must wait at least 60 seconds before creating a
   queue with the same name.
   
   

To successfully create a new queue, you must provide a queue name that adheres
to the limits related to queues
[http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/limits-queues.html] 
and is unique within the scope of your queues.

To get the queue URL, use the GetQueueUrl action. GetQueueUrl requires only the 
QueueName parameter.

 * If you provide the name of an existing queue along with the exact names and
   values of all the queue&#x27;s attributes, CreateQueue returns the queue URL for
   the existing queue.
   
   
 * If the queue name, attribute names, or attribute values don&#x27;t match an
   existing queue, CreateQueue returns an error.
   
   

Some API actions take lists of parameters. Specify these lists using the param.n 
notation. Values of n are integers starting from 1. The following is an example
of a parameter list with two elements:

&amp;amp;Attribute.1=this

&amp;amp;Attribute.2=that
     *
     * @error QueueDeletedRecently   
     * @error QueueNameExists   
     */
    createQueue(params: SQS.CreateQueueRequest, callback?: (err: SQS.QueueDeletedRecently|SQS.QueueNameExists|any, data: SQS.CreateQueueResult|any) => void): Request<SQS.CreateQueueResult|any,SQS.QueueDeletedRecently|SQS.QueueNameExists|any>;
    /**
     * Deletes the specified message from the specified queue. You specify the message
by using the message&#x27;s receipt handle and not the message ID you received when
you sent the message. Even if the message is locked by another reader due to the
visibility timeout setting, it is still deleted from the queue. If you leave a
message in the queue for longer than the queue&#x27;s configured retention period,
Amazon SQS automatically deletes it.

The receipt handle is associated with a specific instance of receiving the
message. If you receive a message more than once, the receipt handle you get
each time you receive the message is different. When you request DeleteMessage ,
if you don&#x27;t provide the most recently received receipt handle for the message,
the request will still succeed, but the message might not be deleted.

It is possible you will receive a message even after you have deleted it. This
might happen on rare occasions if one of the servers storing a copy of the
message is unavailable when you request to delete the message. The copy remains
on the server and might be returned to you again on a subsequent receive
request. You should create your system to be idempotent so that receiving a
particular message more than once is not a problem.
     *
     * @error InvalidIdFormat   
     * @error ReceiptHandleIsInvalid   
     */
    deleteMessage(params: SQS.DeleteMessageRequest, callback?: (err: SQS.InvalidIdFormat|SQS.ReceiptHandleIsInvalid|any, data: any) => void): Request<any,SQS.InvalidIdFormat|SQS.ReceiptHandleIsInvalid|any>;
    /**
     * Deletes up to ten messages from the specified queue. This is a batch version of 
DeleteMessage . The result of the delete action on each message is reported
individually in the response.

Because the batch request can result in a combination of successful and
unsuccessful actions, you should check for batch errors even when the call
returns an HTTP status code of 200.

Some API actions take lists of parameters. These lists are specified using the 
param.n notation. Values of n are integers starting from 1. For example, a
parameter list with two elements looks like this:

&amp;amp;Attribute.1=this

&amp;amp;Attribute.2=that
     *
     * @error TooManyEntriesInBatchRequest   
     * @error EmptyBatchRequest   
     * @error BatchEntryIdsNotDistinct   
     * @error InvalidBatchEntryId   
     */
    deleteMessageBatch(params: SQS.DeleteMessageBatchRequest, callback?: (err: SQS.TooManyEntriesInBatchRequest|SQS.EmptyBatchRequest|SQS.BatchEntryIdsNotDistinct|SQS.InvalidBatchEntryId|any, data: SQS.DeleteMessageBatchResult|any) => void): Request<SQS.DeleteMessageBatchResult|any,SQS.TooManyEntriesInBatchRequest|SQS.EmptyBatchRequest|SQS.BatchEntryIdsNotDistinct|SQS.InvalidBatchEntryId|any>;
    /**
     * Deletes the queue specified by the queue URL , regardless of whether the queue
is empty. If the specified queue doesn&#x27;t exist, Amazon SQS returns a successful
response.

Use DeleteQueue with care; once you delete your queue, any messages in the queue
are no longer available.

When you delete a queue, the deletion process takes up to 60 seconds. Requests
you send involving that queue during the 60 seconds might succeed. For example,
a SendMessage request might succeed, but after the 60 seconds, the queue and
that message you sent no longer exist. Also, when you delete a queue, you must
wait at least 60 seconds before creating a queue with the same name.

We reserve the right to delete queues that have had no activity for more than 30
days. For more information, see How Amazon SQS Queues Work
[http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/SQSConcepts.html] 
in the Amazon SQS Developer Guide .
     *
     */
    deleteQueue(params: SQS.DeleteQueueRequest, callback?: (err: any, data: any) => void): Request<any,any>;
    /**
     * Gets attributes for the specified queue.

Some API actions take lists of parameters. These lists are specified using the 
param.n notation. Values of n are integers starting from 1. For example, a
parameter list with two elements looks like this:

&amp;amp;Attribute.1=this

&amp;amp;Attribute.2=that
     *
     * @error InvalidAttributeName   
     */
    getQueueAttributes(params: SQS.GetQueueAttributesRequest, callback?: (err: SQS.InvalidAttributeName|any, data: SQS.GetQueueAttributesResult|any) => void): Request<SQS.GetQueueAttributesResult|any,SQS.InvalidAttributeName|any>;
    /**
     * Returns the URL of an existing queue. This action provides a simple way to
retrieve the URL of an Amazon SQS queue.

To access a queue that belongs to another AWS account, use the 
QueueOwnerAWSAccountId parameter to specify the account ID of the queue&#x27;s owner.
The queue&#x27;s owner must grant you permission to access the queue. For more
information about shared queue access, see AddPermission or see Shared Queues
[http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/acp-overview.html] 
in the Amazon SQS Developer Guide .
     *
     * @error QueueDoesNotExist   
     */
    getQueueUrl(params: SQS.GetQueueUrlRequest, callback?: (err: SQS.QueueDoesNotExist|any, data: SQS.GetQueueUrlResult|any) => void): Request<SQS.GetQueueUrlResult|any,SQS.QueueDoesNotExist|any>;
    /**
     * Returns a list of your queues that have the RedrivePolicy queue attribute
configured with a dead letter queue.

For more information about using dead letter queues, see Using Amazon SQS Dead
Letter Queues
[http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/SQSDeadLetterQueue.html] 
in the Amazon SQS Developer Guide .
     *
     * @error QueueDoesNotExist   
     */
    listDeadLetterSourceQueues(params: SQS.ListDeadLetterSourceQueuesRequest, callback?: (err: SQS.QueueDoesNotExist|any, data: SQS.ListDeadLetterSourceQueuesResult|any) => void): Request<SQS.ListDeadLetterSourceQueuesResult|any,SQS.QueueDoesNotExist|any>;
    /**
     * Returns a list of your queues. The maximum number of queues that can be returned
is 1000. If you specify a value for the optional QueueNamePrefix parameter, only
queues with a name beginning with the specified value are returned.
     *
     */
    listQueues(params: SQS.ListQueuesRequest, callback?: (err: any, data: SQS.ListQueuesResult|any) => void): Request<SQS.ListQueuesResult|any,any>;
    /**
     * Deletes the messages in a queue specified by the queue URL .

When you use the PurgeQueue API, the deleted messages in the queue can&#x27;t be
retrieved.

When you purge a queue, the message deletion process takes up to 60 seconds. All
messages sent to the queue before calling PurgeQueue will be deleted; messages
sent to the queue while it is being purged might be deleted. While the queue is
being purged, messages sent to the queue before PurgeQueue was called might be
received, but will be deleted within the next minute.
     *
     * @error QueueDoesNotExist   
     * @error PurgeQueueInProgress   
     */
    purgeQueue(params: SQS.PurgeQueueRequest, callback?: (err: SQS.QueueDoesNotExist|SQS.PurgeQueueInProgress|any, data: any) => void): Request<any,SQS.QueueDoesNotExist|SQS.PurgeQueueInProgress|any>;
    /**
     * Retrieves one or more messages, with a maximum limit of 10 messages, from the
specified queue. Long poll support is enabled by using the WaitTimeSeconds 
parameter. For more information, see Amazon SQS Long Poll
[http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-long-polling.html] 
in the Amazon SQS Developer Guide .

Short poll is the default behavior where a weighted random set of machines is
sampled on a ReceiveMessage call. This means only the messages on the sampled
machines are returned. If the number of messages in the queue is small (less
than 1000), it is likely you will get fewer messages than you requested per 
ReceiveMessage call. If the number of messages in the queue is extremely small,
you might not receive any messages in a particular ReceiveMessage response; in
which case you should repeat the request.

For each message returned, the response includes the following:

 &amp;#42; Message body
   
   
 * MD5 digest of the message body. For information about MD5, see RFC1321
   [https://www.ietf.org/rfc/rfc1321.txt] .
   
   
 * Message ID you received when you sent the message to the queue.
   
   
 * Receipt handle.
   
   
 * Message attributes.
   
   
 * MD5 digest of the message attributes.
   
   

The receipt handle is the identifier you must provide when deleting the message.
For more information, see Queue and Message Identifiers
[http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/ImportantIdentifiers.html] 
in the Amazon SQS Developer Guide .

You can provide the VisibilityTimeout parameter in your request, which will be
applied to the messages that Amazon SQS returns in the response. If you don&#x27;t
include the parameter, the overall visibility timeout for the queue is used for
the returned messages. For more information, see Visibility Timeout
[http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/AboutVT.html] 
in the Amazon SQS Developer Guide .

A message that is not deleted or a message whose visibility is not extended
before the visibility timeout expires counts as a failed receive. Depending on
the configuration of the queue, the message might be sent to the dead letter
queue.

Going forward, new attributes might be added. If you are writing code that calls
this action, we recommend that you structure your code so that it can handle new
attributes gracefully.
     *
     * @error OverLimit   
     */
    receiveMessage(params: SQS.ReceiveMessageRequest, callback?: (err: SQS.OverLimit|any, data: SQS.ReceiveMessageResult|any) => void): Request<SQS.ReceiveMessageResult|any,SQS.OverLimit|any>;
    /**
     * Revokes any permissions in the queue policy that matches the specified Label 
parameter. Only the owner of the queue can remove permissions.
     *
     */
    removePermission(params: SQS.RemovePermissionRequest, callback?: (err: any, data: any) => void): Request<any,any>;
    /**
     * Delivers a message to the specified queue.

The following list shows the characters (in Unicode) that are allowed in your
message, according to the W3C XML specification:

#x9 | #xA | #xD | [ #x20 to #xD7FF ] | [ #xE000 to #xFFFD ] | [ #x10000 to 
#x10FFFF ]

For more information, see RFC1321 [https://www.ietf.org/rfc/rfc1321.txt] . If
you send any characters that aren&#x27;t included in this list, your request will be
rejected.
     *
     * @error InvalidMessageContents   
     * @error UnsupportedOperation   
     */
    sendMessage(params: SQS.SendMessageRequest, callback?: (err: SQS.InvalidMessageContents|SQS.UnsupportedOperation|any, data: SQS.SendMessageResult|any) => void): Request<SQS.SendMessageResult|any,SQS.InvalidMessageContents|SQS.UnsupportedOperation|any>;
    /**
     * Delivers up to ten messages to the specified queue. This is a batch version of 
SendMessage . For a FIFO queue, multiple messages within a single batch are
enqueued in the order they are sent.

The result of sending each message is reported individually in the response.
Because the batch request can result in a combination of successful and
unsuccessful actions, you should check for batch errors even when the call
returns an HTTP status code of 200.

The maximum allowed individual message size and the maximum total payload size
(the sum of the individual lengths of all of the batched messages) are both 256
KB (262,144 bytes).

The following list shows the characters (in Unicode) that are allowed in your
message, according to the W3C XML specification:

#x9 | #xA | #xD | [ #x20 to #xD7FF ] | [ #xE000 to #xFFFD ] | [ #x10000 to 
#x10FFFF ]

For more information, see RFC1321 [https://www.ietf.org/rfc/rfc1321.txt] . If
you send any characters that aren&#x27;t included in this list, your request will be
rejected.

If you don&#x27;t specify the DelaySeconds parameter for an entry, Amazon SQS uses
the default for the queue.

Some API actions take lists of parameters. These lists are specified using the 
param.n notation. Values of n are integers starting from 1. For example, a
parameter list with two elements looks like this:

&amp;amp;Attribute.1=this

&amp;amp;Attribute.2=that
     *
     * @error TooManyEntriesInBatchRequest   
     * @error EmptyBatchRequest   
     * @error BatchEntryIdsNotDistinct   
     * @error BatchRequestTooLong   
     * @error InvalidBatchEntryId   
     * @error UnsupportedOperation   
     */
    sendMessageBatch(params: SQS.SendMessageBatchRequest, callback?: (err: SQS.TooManyEntriesInBatchRequest|SQS.EmptyBatchRequest|SQS.BatchEntryIdsNotDistinct|SQS.BatchRequestTooLong|SQS.InvalidBatchEntryId|SQS.UnsupportedOperation|any, data: SQS.SendMessageBatchResult|any) => void): Request<SQS.SendMessageBatchResult|any,SQS.TooManyEntriesInBatchRequest|SQS.EmptyBatchRequest|SQS.BatchEntryIdsNotDistinct|SQS.BatchRequestTooLong|SQS.InvalidBatchEntryId|SQS.UnsupportedOperation|any>;
    /**
     * Sets the value of one or more queue attributes. When you change a queue&#x27;s
attributes, the change can take up to 60 seconds for most of the attributes to
propagate throughout the SQS system. Changes made to the MessageRetentionPeriod 
attribute can take up to 15 minutes.

In the future, new attributes might be added. When you write code that calls
this action, we recommend structuring your code so that it can handle new
attributes gracefully.
     *
     * @error InvalidAttributeName   
     */
    setQueueAttributes(params: SQS.SetQueueAttributesRequest, callback?: (err: SQS.InvalidAttributeName|any, data: any) => void): Request<any,SQS.InvalidAttributeName|any>;

  }

  export module SQS {
    
    export type AWSAccountIdList = String[];
    
    export type ActionNameList = String[];
    
    export type AttributeNameList = QueueAttributeName[];
    
    export type BatchResultErrorEntryList = BatchResultErrorEntry[];
    
    export type Binary = any;
    
    export type BinaryList = Binary[];
    
    export type Boolean = boolean;
    
    export type ChangeMessageVisibilityBatchRequestEntryList = ChangeMessageVisibilityBatchRequestEntry[];
    
    export type ChangeMessageVisibilityBatchResultEntryList = ChangeMessageVisibilityBatchResultEntry[];
    
    export type DeleteMessageBatchRequestEntryList = DeleteMessageBatchRequestEntry[];
    
    export type DeleteMessageBatchResultEntryList = DeleteMessageBatchResultEntry[];
    
    export type Integer = number;
    
    export type MessageAttributeName = string;
    
    export type MessageAttributeNameList = MessageAttributeName[];
    
    export type MessageBodyAttributeMap = {[key:string]: MessageAttributeValue};
    
    export type MessageList = Message[];
    
    export type MessageSystemAttributeMap = {[key:string]: String};
    
    export type MessageSystemAttributeName = string;
    
    export type QueueAttributeMap = {[key:string]: String};
    
    export type QueueAttributeName = string;
    
    export type QueueUrlList = String[];
    
    export type SendMessageBatchRequestEntryList = SendMessageBatchRequestEntry[];
    
    export type SendMessageBatchResultEntryList = SendMessageBatchResultEntry[];
    
    export type String = string;
    
    export type StringList = String[];

    export interface AddPermissionRequest {
        /** The URL of the Amazon SQS queue to take action on.

Queue URLs are case-sensitive. **/
        QueueUrl: String;
        /** The unique identification of the permission you&#x27;re setting (e.g., 
AliceSendMessage ). Constraints: Maximum 80 characters; alphanumeric characters,
hyphens (-), and underscores (_) are allowed. **/
        Label: String;
        /** The AWS account number of the principal
[http://docs.aws.amazon.com/general/latest/gr/glos-chap.html#P] who will be
given permission. The principal must have an AWS account, but does not need to
be signed up for Amazon SQS. For information about locating the AWS account
identification, see Your AWS Identifiers
[http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/AWSCredentials.html] 
in the Amazon SQS Developer Guide . **/
        AWSAccountIds: AWSAccountIdList;
        /** The action the client wants to allow for the specified principal. The following
are valid values: &amp;#42; | SendMessage | ReceiveMessage | DeleteMessage |
ChangeMessageVisibility | GetQueueAttributes | GetQueueUrl . For more
information about these actions, see Understanding Permissions
[http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/acp-overview.html#PermissionTypes] 
in the Amazon SQS Developer Guide .

Specifying SendMessage , DeleteMessage , or ChangeMessageVisibility for the 
ActionName.n also grants permissions for the corresponding batch versions of
those actions: SendMessageBatch , DeleteMessageBatch , and 
ChangeMessageVisibilityBatch . **/
        Actions: ActionNameList;
    }
    export interface BatchEntryIdsNotDistinct {
    }
    export interface BatchRequestTooLong {
    }
    export interface BatchResultErrorEntry {
        /** The id of an entry in a batch request. **/
        Id: String;
        /** Whether the error happened due to the sender&#x27;s fault. **/
        SenderFault: Boolean;
        /** An error code representing why the action failed on this entry. **/
        Code: String;
        /** A message explaining why the action failed on this entry. **/
        Message?: String;
    }
    export interface ChangeMessageVisibilityBatchRequest {
        /** The URL of the Amazon SQS queue to take action on.

Queue URLs are case-sensitive. **/
        QueueUrl: String;
        /** A list of receipt handles of the messages for which the visibility timeout must
be changed. **/
        Entries: ChangeMessageVisibilityBatchRequestEntryList;
    }
    export interface ChangeMessageVisibilityBatchRequestEntry {
        /** An identifier for this particular receipt handle. This is used to communicate
the result. Note that the Id s of a batch request need to be unique within the
request. **/
        Id: String;
        /** A receipt handle. **/
        ReceiptHandle: String;
        /** The new value (in seconds) for the message&#x27;s visibility timeout. **/
        VisibilityTimeout?: Integer;
    }
    export interface ChangeMessageVisibilityBatchResult {
        /** A list of ChangeMessageVisibilityBatchResultEntry items. **/
        Successful: ChangeMessageVisibilityBatchResultEntryList;
        /** A list of BatchResultErrorEntry items. **/
        Failed: BatchResultErrorEntryList;
    }
    export interface ChangeMessageVisibilityBatchResultEntry {
        /** Represents a message whose visibility timeout has been changed successfully. **/
        Id: String;
    }
    export interface ChangeMessageVisibilityRequest {
        /** The URL of the Amazon SQS queue to take action on.

Queue URLs are case-sensitive. **/
        QueueUrl: String;
        /** The receipt handle associated with the message whose visibility timeout should
be changed. This parameter is returned by the ReceiveMessage action. **/
        ReceiptHandle: String;
        /** The new value (in seconds - from 0 to 43200 - maximum 12 hours) for the
message&#x27;s visibility timeout. **/
        VisibilityTimeout: Integer;
    }
    export interface CreateQueueRequest {
        /** The name of the new queue. The following limits apply to this name:

 &amp;#42; A queue name can have up to 80 characters.
   
   
 * The following are accepted: alphanumeric chatacters, hyphens ( - ), and
   underscores ( _ ).
   
   
 * A FIFO queue name must end with the .fifo suffix.
   
   

Queue names are case-sensitive. **/
        QueueName: String;
        /** A map of attributes with their corresponding values.

The following lists the names, descriptions, and values of the special request
parameters that the CreateQueue action uses:

 &amp;#42; DelaySeconds - The number of seconds for which the delivery of all messages
   in the queue is delayed. An integer from 0 to 900 (15 minutes). The default
   is 0 (zero).
   
   
 * MaximumMessageSize - The limit of how many bytes a message can contain before
   Amazon SQS rejects it. An integer from 1,024 bytes (1 KiB) up to 262,144
   bytes (256 KiB). The default is 262,144 (256 KiB).
   
   
 * MessageRetentionPeriod - The number of seconds for which Amazon SQS retains a
   message. An integer representing seconds, from 60 (1 minute) to 120,9600 (14
   days). The default is 345,600 (4 days).
   
   
 * Policy - The queue&#x27;s policy. A valid AWS policy. For more information about
   policy structure, see Overview of AWS IAM Policies
   [http://docs.aws.amazon.com/IAM/latest/UserGuide/PoliciesOverview.html] in
   the Amazon IAM User Guide .
   
   
 * ReceiveMessageWaitTimeSeconds - The number of seconds for which a 
   ReceiveMessage action will wait for a message to arrive. An integer from 0 to
   20 (seconds). The default is 0.
   
   
 * RedrivePolicy - The parameters for the dead letter queue functionality of the
   source queue. For more information about the redrive policy and dead letter
   queues, see Using Amazon SQS Dead Letter Queues
   [http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/SQSDeadLetterQueue.html] 
   in the Amazon SQS Developer Guide .
   
   The dead letter queue of a FIFO queue must also be a FIFO queue. Similarly,
   the dead letter queue of a standard queue must also be a standard queue.
   
   
 * VisibilityTimeout - The visibility timeout for the queue. An integer from 0
   to 43200 (12 hours). The default is 30. For more information about the
   visibility timeout, see Visibility Timeout
   [http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/AboutVT.html] 
   in the Amazon SQS Developer Guide .
   
   

The following attributes apply only to FIFO (first-in-first-out) queues
[http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html] 
:

 * FifoQueue - Designates a queue as FIFO. You can provide this attribute only
   during queue creation; you can&#x27;t change it for an existing queue. When you
   set this attribute, you must provide a MessageGroupId explicitly.
   
   For more information, see FIFO Queue Logic
   [http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html#FIFO-queues-understanding-logic] 
   in the Amazon SQS Developer Guide .
   
   
 * ContentBasedDeduplication - Enables content-based deduplication. For more
   information, see Exactly-Once Processing
   [http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html#FIFO-queues-exactly-once-processing] 
   in the Amazon SQS Developer Guide .
   
    * Every message must have a unique MessageDeduplicationId ,
      
       * You may provide a MessageDeduplicationId explicitly.
         
         
       * If you aren&#x27;t able to provide a MessageDeduplicationId and you enable 
         ContentBasedDeduplication for your queue, Amazon SQS uses a SHA-256
         hash to generate the MessageDeduplicationId using the body of the
         message (but not the attributes of the message).
         
         
       * If you don&#x27;t provide a MessageDeduplicationId and the queue doesn&#x27;t
         have ContentBasedDeduplication set, the action fails with an error.
         
         
       * If the queue has ContentBasedDeduplication set, your 
         MessageDeduplicationId overrides the generated one.
         
         
      
      
    * When ContentBasedDeduplication is in effect, messages with identical
      content sent within the deduplication interval are treated as duplicates
      and only one copy of the message is delivered.
      
      
    * You can also use ContentBasedDeduplication for messages with identical
      content to be treated as duplicates.
      
      
    * If you send one message with ContentBasedDeduplication enabled and then
      another message with a MessageDeduplicationId that is the same as the one
      generated for the first MessageDeduplicationId , the two messages are
      treated as duplicates and only one copy of the message is delivered.
      
      
   
   

Any other valid special request parameters that are specified (such as 
ApproximateNumberOfMessages , ApproximateNumberOfMessagesDelayed , 
ApproximateNumberOfMessagesNotVisible , CreatedTimestamp , LastModifiedTimestamp 
, and QueueArn ) will be ignored. **/
        Attributes?: QueueAttributeMap;
    }
    export interface CreateQueueResult {
        /** The URL for the created Amazon SQS queue. **/
        QueueUrl?: String;
    }
    export interface DeleteMessageBatchRequest {
        /** The URL of the Amazon SQS queue to take action on.

Queue URLs are case-sensitive. **/
        QueueUrl: String;
        /** A list of receipt handles for the messages to be deleted. **/
        Entries: DeleteMessageBatchRequestEntryList;
    }
    export interface DeleteMessageBatchRequestEntry {
        /** An identifier for this particular receipt handle. This is used to communicate
the result. Note that the Id s of a batch request need to be unique within the
request. **/
        Id: String;
        /** A receipt handle. **/
        ReceiptHandle: String;
    }
    export interface DeleteMessageBatchResult {
        /** A list of DeleteMessageBatchResultEntry items. **/
        Successful: DeleteMessageBatchResultEntryList;
        /** A list of BatchResultErrorEntry items. **/
        Failed: BatchResultErrorEntryList;
    }
    export interface DeleteMessageBatchResultEntry {
        /** Represents a successfully deleted message. **/
        Id: String;
    }
    export interface DeleteMessageRequest {
        /** The URL of the Amazon SQS queue to take action on.

Queue URLs are case-sensitive. **/
        QueueUrl: String;
        /** The receipt handle associated with the message to delete. **/
        ReceiptHandle: String;
    }
    export interface DeleteQueueRequest {
        /** The URL of the Amazon SQS queue to take action on.

Queue URLs are case-sensitive. **/
        QueueUrl: String;
    }
    export interface EmptyBatchRequest {
    }
    export interface GetQueueAttributesRequest {
        /** The URL of the Amazon SQS queue to take action on.

Queue URLs are case-sensitive. **/
        QueueUrl: String;
        /** A list of attributes for which to retrieve information.

Going forward, new attributes might be added. If you are writing code that calls
this action, we recommend that you structure your code so that it can handle new
attributes gracefully.

The following attributes are supported:

 &amp;#42; All - Returns all values.
   
   
 * ApproximateNumberOfMessages - Returns the approximate number of visible
   messages in a queue. For more information, see Resources Required to Process
   Messages
   [http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/ApproximateNumber.html] 
   in the Amazon SQS Developer Guide .
   
   
 * ApproximateNumberOfMessagesDelayed - Returns the approximate number of
   messages that are waiting to be added to the queue.
   
   
 * ApproximateNumberOfMessagesNotVisible - Returns the approximate number of
   messages that have not timed-out and are not deleted. For more information,
   see Resources Required to Process Messages
   [http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/ApproximateNumber.html] 
   in the Amazon SQS Developer Guide .
   
   
 * CreatedTimestamp - Returns the time when the queue was created in seconds
   (epoch time).
   
   
 * DelaySeconds - Returns the default delay on the queue in seconds.
   
   
 * LastModifiedTimestamp - Returns the time when the queue was last changed in
   seconds (epoch time).
   
   
 * MaximumMessageSize - Returns the limit of how many bytes a message can
   contain before Amazon SQS rejects it.
   
   
 * MessageRetentionPeriod - Returns the number of seconds for which Amazon SQS
   retains a message.
   
   
 * Policy - Returns the policy of the queue.
   
   
 * QueueArn - Returns the Amazon resource name (ARN) of the queue.
   
   
 * ReceiveMessageWaitTimeSeconds - Returns the number of seconds for which
   ReceiveMessage call will wait for a message to arrive.
   
   
 * RedrivePolicy - Returns the parameters for dead letter queue functionality of
   the source queue. For more information about the redrive policy and dead
   letter queues, see Using Amazon SQS Dead Letter Queues
   [http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/SQSDeadLetterQueue.html] 
   in the Amazon SQS Developer Guide .
   
   
 * VisibilityTimeout - Returns the visibility timeout for the queue. For more
   information about the visibility timeout, see Visibility Timeout
   [http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/AboutVT.html] 
   in the Amazon SQS Developer Guide .
   
   

The following attributes apply only to FIFO (first-in-first-out) queues
[http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html] 
:

 * FifoQueue - Returns whether the queue is FIFO. For more information, see FIFO
   Queue Logic
   [http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html#FIFO-queues-understanding-logic] 
   in the Amazon SQS Developer Guide .
   
   
 * ContentBasedDeduplication - Returns whether content-based deduplication is
   enabled for the queue. For more information, see Exactly-Once Processing
   [http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html#FIFO-queues-exactly-once-processing] 
   in the Amazon SQS Developer Guide . **/
        AttributeNames?: AttributeNameList;
    }
    export interface GetQueueAttributesResult {
        /** A map of attributes to the respective values. **/
        Attributes?: QueueAttributeMap;
    }
    export interface GetQueueUrlRequest {
        /** The name of the queue whose URL must be fetched. Maximum 80 characters;
alphanumeric characters, hyphens (-), and underscores (_) are allowed.

Queue names are case-sensitive. **/
        QueueName: String;
        /** The AWS account ID of the account that created the queue. **/
        QueueOwnerAWSAccountId?: String;
    }
    export interface GetQueueUrlResult {
        /** The URL for the queue. **/
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
        /** The queue URL of a dead letter queue.

Queue URLs are case-sensitive. **/
        QueueUrl: String;
    }
    export interface ListDeadLetterSourceQueuesResult {
        /** A list of source queue URLs that have the RedrivePolicy queue attribute
configured with a dead letter queue. **/
        queueUrls: QueueUrlList;
    }
    export interface ListQueuesRequest {
        /** A string to use for filtering the list results. Only those queues whose name
begins with the specified string are returned.

Queue names are case-sensitive. **/
        QueueNamePrefix?: String;
    }
    export interface ListQueuesResult {
        /** A list of queue URLs, up to 1000 entries. **/
        QueueUrls?: QueueUrlList;
    }
    export interface Message {
        /** A unique identifier for the message. Message IDs are considered unique across
all AWS accounts for an extended period of time. **/
        MessageId?: String;
        /** An identifier associated with the act of receiving the message. A new receipt
handle is returned every time you receive a message. When deleting a message,
you provide the last received receipt handle to delete the message. **/
        ReceiptHandle?: String;
        /** An MD5 digest of the non-URL-encoded message body string. **/
        MD5OfBody?: String;
        /** The message&#x27;s contents (not URL-encoded). **/
        Body?: String;
        /** SenderId , SentTimestamp , ApproximateReceiveCount , and/or 
ApproximateFirstReceiveTimestamp . SentTimestamp and 
ApproximateFirstReceiveTimestamp are each returned as an integer representing
the epoch time [http://en.wikipedia.org/wiki/Unix_time] in milliseconds. **/
        Attributes?: MessageSystemAttributeMap;
        /** An MD5 digest of the non-URL-encoded message attribute string. This can be used
to verify that Amazon SQS received the message correctly. Amazon SQS first URL
decodes the message before creating the MD5 digest. For information about MD5,
see RFC1321 [https://www.ietf.org/rfc/rfc1321.txt] . **/
        MD5OfMessageAttributes?: String;
        /** Each message attribute consists of a Name, Type, and Value. For more
information, see Message Attribute Items
[http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/SQSMessageAttributes.html#SQSMessageAttributesNTV] 
in the Amazon SQS Developer Guide . **/
        MessageAttributes?: MessageBodyAttributeMap;
    }
    export interface MessageAttributeValue {
        /** Strings are Unicode with UTF8 binary encoding. For a list of code values, see 
ASCII Printable Characters
[http://en.wikipedia.org/wiki/ASCII#ASCII_printable_characters] . **/
        StringValue?: String;
        /** Binary type attributes can store any binary data, for example, compressed data,
encrypted data, or images. **/
        BinaryValue?: Binary;
        /** Not implemented. Reserved for future use. **/
        StringListValues?: StringList;
        /** Not implemented. Reserved for future use. **/
        BinaryListValues?: BinaryList;
        /** Amazon SQS supports the following logical data types: String, Number, and
Binary. For the Number data type, you must use StringValue.

You can also append custom labels. For more information, see Message Attribute
Data Types
[http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/SQSMessageAttributes.html#SQSMessageAttributes.DataTypes] 
in the Amazon SQS Developer Guide . **/
        DataType: String;
    }
    export interface MessageNotInflight {
    }
    export interface OverLimit {
    }
    export interface PurgeQueueInProgress {
    }
    export interface PurgeQueueRequest {
        /** The queue URL of the queue to delete the messages from when using the PurgeQueue 
API.

Queue URLs are case-sensitive. **/
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
        /** The URL of the Amazon SQS queue to take action on.

Queue URLs are case-sensitive. **/
        QueueUrl: String;
        /** A list of attributes that need to be returned along with each message. These
attributes include:

 &amp;#42; All - Returns all values.
   
   
 * ApproximateFirstReceiveTimestamp - Returns the time the message was first
   received from the queue (epoch time in milliseconds).
   
   
 * ApproximateReceiveCount - Returns the number of times a message has been
   received from the queue but not deleted.
   
   
 * SenderId
   
    * For an IAM user, returns the IAM user ID, for example 
      ABCDEFGHI1JKLMNOPQ23R .
      
      
    * For an IAM role, returns the IAM role ID, for example 
      ABCDE1F2GH3I4JK5LMNOP:i-a123b456 .
      
      
   
   
 * SentTimestamp - Returns the time the message was sent to the queue (epoch
   time in milliseconds).
   
   
 * MessageDeduplicationId - Returns the value provided by the sender that calls
   the SendMessage action.
   
   
 * MessageGroupId - Returns the value provided by the sender that calls the 
   SendMessage action. Messages with the same MessageGroupId are returned in
   sequence.
   
   
 * SequenceNumber - Returns the value provided by Amazon SQS.
   
   

Any other valid special request parameters (such as the following) that are
specified are ignored:

 * ApproximateNumberOfMessages
   
   
 * ApproximateNumberOfMessagesDelayed
   
   
 * ApproximateNumberOfMessagesNotVisible
   
   
 * CreatedTimestamp
   
   
 * ContentBasedDeduplication
   
   
 * DelaySeconds
   
   
 * LastModifiedTimestamp
   
   
 * MaximumMessageSize
   
   
 * MessageRetentionPeriod
   
   
 * Policy
   
   
 * QueueArn ,
   
   
 * ReceiveMessageWaitTimeSeconds
   
   
 * RedrivePolicy
   
   
 * FifoQueue
   
   
 * VisibilityTimeout **/
        AttributeNames?: AttributeNameList;
        /** The name of the message attribute, where N is the index. The message attribute
name can contain the following characters: A-Z, a-z, 0-9, underscore (_), hyphen
(-), and period (.). The name must not start or end with a period, and it should
not have successive periods. The name is case sensitive and must be unique among
all attribute names for the message. The name can be up to 256 characters long.
The name can&#x27;t start with &quot;AWS.&quot; or &quot;Amazon.&quot; (or any variations in casing),
because these prefixes are reserved for use by Amazon Web Services.

When using ReceiveMessage , you can send a list of attribute names to receive,
or you can return all of the attributes by specifying &quot;All&quot; or &quot;.&amp;#42;&quot; in your
request. You can also use &quot;bar.*&quot; to return all message attributes starting with
the &quot;bar&quot; prefix. **/
        MessageAttributeNames?: MessageAttributeNameList;
        /** The maximum number of messages to return. Amazon SQS never returns more messages
than this value but might return fewer. Values can be from 1 to 10. Default is
1.

All of the messages are not necessarily returned. **/
        MaxNumberOfMessages?: Integer;
        /** The duration (in seconds) that the received messages are hidden from subsequent
retrieve requests after being retrieved by a ReceiveMessage request. **/
        VisibilityTimeout?: Integer;
        /** The duration (in seconds) for which the call will wait for a message to arrive
in the queue before returning. If a message is available, the call will return
sooner than WaitTimeSeconds. **/
        WaitTimeSeconds?: Integer;
        /** This parameter applies only to FIFO (first-in-first-out) queues.

The token used for deduplication of ReceiveMessage calls. If a networking issue
occurs after a ReceiveMessage action, and instead of a response you receive a
generic error, you can retry the same action with an identical 
ReceiveRequestAttemptId to retrieve the same set of messages, even if their
visibility timeout has not yet expired.

 &amp;#42; You can use ReceiveRequestAttemptId only for 5 minutes after a ReceiveMessage 
   action.
   
   
 * When you set FifoQueue , a caller of the ReceiveMessage action can provide a 
   ReceiveRequestAttemptId explicitly.
   
   
 * If a caller of the ReceiveMessage action doesn&#x27;t provide a 
   ReceiveRequestAttemptId , Amazon SQS generates a ReceiveRequestAttemptId .
   
   
 * You can retry the ReceiveMessage action with the same ReceiveRequestAttemptId 
   if none of the messages have been modified (deleted or had their visibility
   changes).
   
   
 * During a visibility timeout, subsequent calls with the same 
   ReceiveRequestAttemptId return the same messages and receipt handles. If a
   retry occurs within the deduplication interval, it resets the visibility
   timeout. For more information, see Visibility Timeout
   [http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/AboutVT.html] 
   in the Amazon Simple Queue Service Developer Guide .
   
   If a caller of the ReceiveMessage action is still processing messages when
   the visibility timeout expires and messages become visible, another worker
   reading from the same queue can receive the same messages and therefore
   process duplicates. Also, if a reader whose message processing time is longer
   than the visibility timeout tries to delete the processed messages, the
   action fails with an error.
   
   To mitigate this effect, ensure that your application observes a safe
   threshold before the visibility timeout expires and extend the visibility
   timeout as necessary.
   
   
 * While messages with a particular MessageGroupId are invisible, no more
   messages belonging to the same MessageGroupId are returned until the
   visibility timeout expires. You can still receive messages with another 
   MessageGroupId as long as it is also visible.
   
   
 * If a caller of ReceiveMessage can&#x27;t track the ReceiveRequestAttemptId , no
   retries will work until the original visibility timeout expires. As a result,
   delays might occur but the messages in the queue will remain in a strict
   order.
   
   

The length of ReceiveRequestAttemptId is 128 characters. ReceiveRequestAttemptId 
can contain alphanumeric characters ( a-z , A-Z , 0-9 ) and punctuation ( 
!&quot;#$%&amp;&#x27;()*+,-./:;&lt;=&gt;?@[\]^_&#x60;{|}~ ).

For best practices of using ReceiveRequestAttemptId , see Using the
ReceiveRequestAttemptId Request Parameter
[http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queue-recommendations.html#using-receiverequestattemptid-request-parameter] 
in the Amazon Simple Queue Service Developer Guide . **/
        ReceiveRequestAttemptId?: String;
    }
    export interface ReceiveMessageResult {
        /** A list of messages. **/
        Messages?: MessageList;
    }
    export interface RemovePermissionRequest {
        /** The URL of the Amazon SQS queue to take action on.

Queue URLs are case-sensitive. **/
        QueueUrl: String;
        /** The identification of the permission to remove. This is the label added with the 
AddPermission action. **/
        Label: String;
    }
    export interface SendMessageBatchRequest {
        /** The URL of the Amazon SQS queue to take action on.

Queue URLs are case-sensitive. **/
        QueueUrl: String;
        /** A list of SendMessageBatchRequestEntry items. **/
        Entries: SendMessageBatchRequestEntryList;
    }
    export interface SendMessageBatchRequestEntry {
        /** An identifier for the message in this batch. This is used to communicate the
result. Note that the Id s of a batch request need to be unique within the
request. **/
        Id: String;
        /** Body of the message. **/
        MessageBody: String;
        /** The number of seconds (0 to 900 - 15 minutes) to delay a specific message.
Messages with a positive DelaySeconds value become available for processing
after the delay time is finished. If you don&#x27;t specify a value, the default
value for the queue applies.

When you set FifoQueue , you can&#x27;t set DelaySeconds per message. You can set
this parameter only on a queue level. **/
        DelaySeconds?: Integer;
        /** Each message attribute consists of a Name, Type, and Value. For more
information, see Message Attribute Items
[http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/SQSMessageAttributes.html#SQSMessageAttributesNTV] 
in the Amazon SQS Developer Guide . **/
        MessageAttributes?: MessageBodyAttributeMap;
        /** This parameter applies only to FIFO (first-in-first-out) queues.

The token used for deduplication of messages within a 5-minute minimum
deduplication interval. If a message with a particular MessageDeduplicationId is
sent successfully, subsequent messages with the same MessageDeduplicationId are
accepted successfully but aren&#x27;t delivered. For more information, see 
Exactly-Once Processing
[http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html#FIFO-queues-exactly-once-processing] 
in the Amazon SQS Developer Guide .

 &amp;#42; Every message must have a unique MessageDeduplicationId ,
   
    * You may provide a MessageDeduplicationId explicitly.
      
      
    * If you aren&#x27;t able to provide a MessageDeduplicationId and you enable 
      ContentBasedDeduplication for your queue, Amazon SQS uses a SHA-256 hash
      to generate the MessageDeduplicationId using the body of the message (but
      not the attributes of the message).
      
      
    * If you don&#x27;t provide a MessageDeduplicationId and the queue doesn&#x27;t have 
      ContentBasedDeduplication set, the action fails with an error.
      
      
    * If the queue has ContentBasedDeduplication set, your 
      MessageDeduplicationId overrides the generated one.
      
      
   
   
 * When ContentBasedDeduplication is in effect, messages with identical content
   sent within the deduplication interval are treated as duplicates and only one
   copy of the message is delivered.
   
   
 * You can also use ContentBasedDeduplication for messages with identical
   content to be treated as duplicates.
   
   
 * If you send one message with ContentBasedDeduplication enabled and then
   another message with a MessageDeduplicationId that is the same as the one
   generated for the first MessageDeduplicationId , the two messages are treated
   as duplicates and only one copy of the message is delivered.
   
   

The MessageDeduplicationId is available to the recipient of the message (this
can be useful for troubleshooting delivery issues).

If a message is sent successfully but the acknowledgement is lost and the
message is resent with the same MessageDeduplicationId after the deduplication
interval, Amazon SQS can&#x27;t detect duplicate messages.

The length of MessageDeduplicationId is 128 characters. MessageDeduplicationId 
can contain alphanumeric characters ( a-z , A-Z , 0-9 ) and punctuation ( 
!&quot;#$%&amp;&#x27;()*+,-./:;&lt;=&gt;?@[\]^_&#x60;{|}~ ).

For best practices of using MessageDeduplicationId , see Using the
MessageDeduplicationId Property
[http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queue-recommendations.html#using-messagededuplicationid-property] 
in the Amazon Simple Queue Service Developer Guide . **/
        MessageDeduplicationId?: String;
        /** This parameter applies only to FIFO (first-in-first-out) queues.

The tag that specifies that a message belongs to a specific message group.
Messages that belong to the same message group are processed in a FIFO manner
(however, messages in different message groups might be processed out of order).
To interleave multiple ordered streams within a single queue, use MessageGroupId 
values (for example, session data for multiple users). In this scenario,
multiple readers can process the queue, but the session data of each user is
processed in a FIFO fashion.

 &amp;#42; You must associate a non-empty MessageGroupId with a message. If you don&#x27;t
   provide a MessageGroupId , the action fails.
   
   
 * ReceiveMessage might return messages with multiple MessageGroupId values. For
   each MessageGroupId , the messages are sorted by time sent. The caller can&#x27;t
   specify a MessageGroupId .
   
   

The length of MessageGroupId is 128 characters. Valid values are alphanumeric
characters and punctuation (!&quot;#$%&amp;&#x27;()*+,-./:;&lt;=&gt;?@[\]^_&#x60;{|}~) .

For best practices of using MessageGroupId , see Using the MessageGroupId
Property
[http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queue-recommendations.html#using-messagegroupid-property] 
in the Amazon Simple Queue Service Developer Guide . **/
        MessageGroupId?: String;
    }
    export interface SendMessageBatchResult {
        /** A list of SendMessageBatchResultEntry items. **/
        Successful: SendMessageBatchResultEntryList;
        /** A list of BatchResultErrorEntry items with the error detail about each message
that could not be enqueued. **/
        Failed: BatchResultErrorEntryList;
    }
    export interface SendMessageBatchResultEntry {
        /** An identifier for the message in this batch. **/
        Id: String;
        /** An identifier for the message. **/
        MessageId: String;
        /** An MD5 digest of the non-URL-encoded message body string. This can be used to
verify that Amazon SQS received the message correctly. Amazon SQS first URL
decodes the message before creating the MD5 digest. For information about MD5,
see RFC1321 [https://www.ietf.org/rfc/rfc1321.txt] . **/
        MD5OfMessageBody: String;
        /** An MD5 digest of the non-URL-encoded message attribute string. This can be used
to verify that Amazon SQS received the message batch correctly. Amazon SQS first
URL decodes the message before creating the MD5 digest. For information about
MD5, see RFC1321 [https://www.ietf.org/rfc/rfc1321.txt] . **/
        MD5OfMessageAttributes?: String;
        /** This element applies only to FIFO (first-in-first-out) queues.

A large, non-consecutive number that Amazon SQS assigns to each message.

The length of SequenceNumber is 128 bits. As SequenceNumber continues to
increase for a particular MessageGroupId . **/
        SequenceNumber?: String;
    }
    export interface SendMessageRequest {
        /** The URL of the Amazon SQS queue to take action on.

Queue URLs are case-sensitive. **/
        QueueUrl: String;
        /** The message to send. String maximum 256 KB in size. For a list of allowed
characters, see the preceding note. **/
        MessageBody: String;
        /** The number of seconds (0 to 900 - 15 minutes) to delay a specific message.
Messages with a positive DelaySeconds value become available for processing
after the delay time is finished. If you don&#x27;t specify a value, the default
value for the queue applies.

When you set FifoQueue , you can&#x27;t set DelaySeconds per message. You can set
this parameter only on a queue level. **/
        DelaySeconds?: Integer;
        /** Each message attribute consists of a Name, Type, and Value. For more
information, see Message Attribute Items
[http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/SQSMessageAttributes.html#SQSMessageAttributesNTV] 
in the Amazon SQS Developer Guide . **/
        MessageAttributes?: MessageBodyAttributeMap;
        /** This parameter applies only to FIFO (first-in-first-out) queues.

The token used for deduplication of sent messages. If a message with a
particular MessageDeduplicationId is sent successfully, any messages sent with
the same MessageDeduplicationId are accepted successfully but aren&#x27;t delivered
during the 5-minute deduplication interval. For more information, see 
Exactly-Once Processing
[http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html#FIFO-queues-exactly-once-processing] 
in the Amazon SQS Developer Guide .

 &amp;#42; Every message must have a unique MessageDeduplicationId ,
   
    * You may provide a MessageDeduplicationId explicitly.
      
      
    * If you aren&#x27;t able to provide a MessageDeduplicationId and you enable 
      ContentBasedDeduplication for your queue, Amazon SQS uses a SHA-256 hash
      to generate the MessageDeduplicationId using the body of the message (but
      not the attributes of the message).
      
      
    * If you don&#x27;t provide a MessageDeduplicationId and the queue doesn&#x27;t have 
      ContentBasedDeduplication set, the action fails with an error.
      
      
    * If the queue has ContentBasedDeduplication set, your 
      MessageDeduplicationId overrides the generated one.
      
      
   
   
 * When ContentBasedDeduplication is in effect, messages with identical content
   sent within the deduplication interval are treated as duplicates and only one
   copy of the message is delivered.
   
   
 * You can also use ContentBasedDeduplication for messages with identical
   content to be treated as duplicates.
   
   
 * If you send one message with ContentBasedDeduplication enabled and then
   another message with a MessageDeduplicationId that is the same as the one
   generated for the first MessageDeduplicationId , the two messages are treated
   as duplicates and only one copy of the message is delivered.
   
   

The MessageDeduplicationId is available to the recipient of the message (this
can be useful for troubleshooting delivery issues).

If a message is sent successfully but the acknowledgdment is lost and the
message is resent with the same MessageDeduplicationId after the deduplication
interval, Amazon SQS can&#x27;t detect duplicate messages.

The length of MessageDeduplicationId is 128 characters. MessageDeduplicationId 
can contain alphanumeric characters ( a-z , A-Z , 0-9 ) and punctuation ( 
!&quot;#$%&amp;&#x27;()*+,-./:;&lt;=&gt;?@[\]^_&#x60;{|}~ ).

For best practices of using MessageDeduplicationId , see Using the
MessageDeduplicationId Property
[http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queue-recommendations.html#using-messagededuplicationid-property] 
in the Amazon Simple Queue Service Developer Guide . **/
        MessageDeduplicationId?: String;
        /** This parameter applies only to FIFO (first-in-first-out) queues.

The tag that specifies that a message belongs to a specific message group.
Messages that belong to the same message group are processed in a FIFO manner
(however, messages in different message groups might be processed out of order).
To interleave multiple ordered streams within a single queue, use MessageGroupId 
values (for example, session data for multiple users). In this scenario,
multiple readers can process the queue, but the session data of each user is
processed in a FIFO fashion.

 &amp;#42; You must associate a non-empty MessageGroupId with a message. If you don&#x27;t
   provide a MessageGroupId , the action fails.
   
   
 * ReceiveMessage might return messages with multiple MessageGroupId values. For
   each MessageGroupId , the messages are sorted by time sent. The caller can&#x27;t
   specify a MessageGroupId .
   
   

The length of MessageGroupId is 128 characters. Valid values are alphanumeric
characters and punctuation (!&quot;#$%&amp;&#x27;()*+,-./:;&lt;=&gt;?@[\]^_&#x60;{|}~) .

For best practices of using MessageGroupId , see Using the MessageGroupId
Property
[http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queue-recommendations.html#using-messagegroupid-property] 
in the Amazon Simple Queue Service Developer Guide . **/
        MessageGroupId?: String;
    }
    export interface SendMessageResult {
        /** An MD5 digest of the non-URL-encoded message body string. This can be used to
verify that Amazon SQS received the message correctly. Amazon SQS first URL
decodes the message before creating the MD5 digest. For information about MD5,
see RFC1321 [https://www.ietf.org/rfc/rfc1321.txt] . **/
        MD5OfMessageBody?: String;
        /** An MD5 digest of the non-URL-encoded message attribute string. This can be used
to verify that Amazon SQS received the message correctly. Amazon SQS first URL
decodes the message before creating the MD5 digest. For information about MD5,
see RFC1321 [https://www.ietf.org/rfc/rfc1321.txt] . **/
        MD5OfMessageAttributes?: String;
        /** An element containing the message ID of the message sent to the queue. For more
information, see Queue and Message Identifiers
[http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/ImportantIdentifiers.html] 
in the Amazon SQS Developer Guide . **/
        MessageId?: String;
        /** This element applies only to FIFO (first-in-first-out) queues.

A large, non-consecutive number that Amazon SQS assigns to each message.

The length of SequenceNumber is 128 bits. SequenceNumber continues to increase
for a particular MessageGroupId . **/
        SequenceNumber?: String;
    }
    export interface SetQueueAttributesRequest {
        /** The URL of the Amazon SQS queue to take action on.

Queue URLs are case-sensitive. **/
        QueueUrl: String;
        /** A map of attributes to set.

The following lists the names, descriptions, and values of the special request
parameters that the SetQueueAttributes action uses:

 &amp;#42; DelaySeconds - The number of seconds for which the delivery of all messages
   in the queue is delayed. An integer from 0 to 900 (15 minutes). The default
   is 0 (zero).
   
   
 * MaximumMessageSize - The limit of how many bytes a message can contain before
   Amazon SQS rejects it. An integer from 1,024 bytes (1 KiB) up to 262,144
   bytes (256 KiB). The default is 262,144 (256 KiB).
   
   
 * MessageRetentionPeriod - The number of seconds for which Amazon SQS retains a
   message. An integer representing seconds, from 60 (1 minute) to 120,9600 (14
   days). The default is 345,600 (4 days).
   
   
 * Policy - The queue&#x27;s policy. A valid AWS policy. For more information about
   policy structure, see Overview of AWS IAM Policies
   [http://docs.aws.amazon.com/IAM/latest/UserGuide/PoliciesOverview.html] in
   the Amazon IAM User Guide .
   
   
 * ReceiveMessageWaitTimeSeconds - The number of seconds for which a 
   ReceiveMessage action will wait for a message to arrive. An integer from 0 to
   20 (seconds). The default is 0.
   
   
 * RedrivePolicy - The parameters for the dead letter queue functionality of the
   source queue. For more information about the redrive policy and dead letter
   queues, see Using Amazon SQS Dead Letter Queues
   [http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/SQSDeadLetterQueue.html] 
   in the Amazon SQS Developer Guide .
   
   The dead letter queue of a FIFO queue must also be a FIFO queue. Similarly,
   the dead letter queue of a standard queue must also be a standard queue.
   
   
 * VisibilityTimeout - The visibility timeout for the queue. An integer from 0
   to 43200 (12 hours). The default is 30. For more information about the
   visibility timeout, see Visibility Timeout
   [http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/AboutVT.html] 
   in the Amazon SQS Developer Guide .
   
   

The following attribute applies only to FIFO (first-in-first-out) queues
[http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html] 
:

 * ContentBasedDeduplication - Enables content-based deduplication. For more
   information, see Exactly-Once Processing
   [http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html#FIFO-queues-exactly-once-processing] 
   in the Amazon SQS Developer Guide .
   
    * Every message must have a unique MessageDeduplicationId ,
      
       * You may provide a MessageDeduplicationId explicitly.
         
         
       * If you aren&#x27;t able to provide a MessageDeduplicationId and you enable 
         ContentBasedDeduplication for your queue, Amazon SQS uses a SHA-256
         hash to generate the MessageDeduplicationId using the body of the
         message (but not the attributes of the message).
         
         
       * If you don&#x27;t provide a MessageDeduplicationId and the queue doesn&#x27;t
         have ContentBasedDeduplication set, the action fails with an error.
         
         
       * If the queue has ContentBasedDeduplication set, your 
         MessageDeduplicationId overrides the generated one.
         
         
      
      
    * When ContentBasedDeduplication is in effect, messages with identical
      content sent within the deduplication interval are treated as duplicates
      and only one copy of the message is delivered.
      
      
    * You can also use ContentBasedDeduplication for messages with identical
      content to be treated as duplicates.
      
      
    * If you send one message with ContentBasedDeduplication enabled and then
      another message with a MessageDeduplicationId that is the same as the one
      generated for the first MessageDeduplicationId , the two messages are
      treated as duplicates and only one copy of the message is delivered.
      
      
   
   

Any other valid special request parameters that are specified (such as 
ApproximateNumberOfMessages , ApproximateNumberOfMessagesDelayed , 
ApproximateNumberOfMessagesNotVisible , CreatedTimestamp , LastModifiedTimestamp 
, and QueueArn ) will be ignored. **/
        Attributes: QueueAttributeMap;
    }
    export interface TooManyEntriesInBatchRequest {
    }
    export interface UnsupportedOperation {
    }
  }
}
