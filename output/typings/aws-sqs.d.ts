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
   * Welcome to the Amazon Simple Queue Service API Reference.

Amazon Simple Queue Service (Amazon SQS) is a reliable, highly-scalable hosted
queue for storing messages as they travel between applications or microservices.
Amazon SQS moves data between distributed application components and helps you
decouple these components.

 Standard queues
[http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/standard-queues.html] 
are available in all regions. FIFO queues
[http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html] 
are available in US West (Oregon) and US East (Ohio).

You can use AWS SDKs [http://aws.amazon.com/tools/#sdk] to access Amazon SQS
using your favorite programming language. The SDKs perform tasks such as the
following automatically:

 &amp;#42;  Cryptographically sign your service requests
   
   
 *  Retry requests
   
   
 *  Handle error responses
   
   

 Additional Information 

 *   Amazon SQS Product Page [http://aws.amazon.com/sqs/] 
   
   
 *   Amazon SQS Developer Guide 
   
    *   Making API Requests
      [http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/MakingRequestsArticle.html] 
      
      
    *   Using Amazon SQS Message Attributes
      [http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-message-attributes.html] 
      
      
    *   Using Amazon SQS Dead Letter Queues
      [http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html] 
      
      
   
   
 *   Amazon Web Services General Reference 
   
    *   Regions and Endpoints
      [http://docs.aws.amazon.com/general/latest/gr/rande.html#sqs_region]
   *
   */
  export class SQS extends Service {
    constructor(options?: any);
    endpoint: Endpoint;
    /**
     * Adds a permission to a queue for a specific principal
[http://docs.aws.amazon.com/general/latest/gr/glos-chap.html#P]. This allows
sharing access to the queue.

When you create a queue, you have full control access rights for the queue. Only
you, the owner of the queue, can grant or deny permissions to the queue. For
more information about these permissions, see Shared Queues
[http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/acp-overview.html] 
in the Amazon SQS Developer Guide.

 AddPermission writes an Amazon-SQS-generated policy. If you want to write your
own policy, use SetQueueAttributes to upload your policy. For more information
about writing your own policy, see Using The Access Policy Language
[http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/AccessPolicyLanguage.html] 
in the Amazon SQS Developer Guide.

Some actions take lists of parameters. These lists are specified using the 
param.n notation. Values of n are integers starting from 1. For example, a
parameter list with two elements looks like this:

 &amp;Attribute.1=this 

 &amp;Attribute.2=that
     *
     * @error OverLimit   
     */
    addPermission(params: SQS.AddPermissionRequest, callback?: (err: SQS.OverLimit|any, data: any) => void): Request<any,SQS.OverLimit|any>;
    /**
     * Changes the visibility timeout of a specified message in a queue to a new value.
The maximum allowed timeout value is 12 hours. Thus, you can&#x27;t extend the
timeout of a message in an existing queue to more than a total visibility
timeout of 12 hours. For more information, see Visibility Timeout
[http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html] 
in the Amazon SQS Developer Guide.

For example, you have a message and with the default visibility timeout of 5
minutes. After 3 minutes, you call ChangeMessageVisiblity with a timeout of 10
minutes. At that time, the timeout for the message is extended by 10 minutes
beyond the time of the ChangeMessageVisibility action. This results in a total
visibility timeout of 13 minutes. You can continue to call the 
ChangeMessageVisibility to extend the visibility timeout to a maximum of 12
hours. If you try to extend the visibility timeout beyond 12 hours, your request
is rejected.

A message is considered to be in flight after it&#x27;s received from a queue by a
consumer, but not yet deleted from the queue.

For standard queues, there can be a maximum of 120,000 inflight messages per
queue. If you reach this limit, Amazon SQS returns the OverLimit error message.
To avoid reaching the limit, you should delete messages from the queue after
they&#x27;re processed. You can also increase the number of queues you use to process
your messages.

For FIFO queues, there can be a maximum of 20,000 inflight messages per queue.
If you reach this limit, Amazon SQS returns no error messages.

If you attempt to set the VisibilityTimeout to a value greater than the maximum
time left, Amazon SQS returns an error. Amazon SQS doesn&#x27;t automatically
recalculate and increase the timeout to the maximum remaining time.

Unlike with a queue, when you change the visibility timeout for a specific
message the timeout value is applied immediately but isn&#x27;t saved in memory for
that message. If you don&#x27;t delete a message after it is received, the visibility
timeout for the message reverts to the original timeout value (not to the value
you set using the ChangeMessageVisibility action) the next time the message is
received.
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

Some actions take lists of parameters. These lists are specified using the 
param.n notation. Values of n are integers starting from 1. For example, a
parameter list with two elements looks like this:

 &amp;Attribute.1=this 

 &amp;Attribute.2=that
     *
     * @error TooManyEntriesInBatchRequest   
     * @error EmptyBatchRequest   
     * @error BatchEntryIdsNotDistinct   
     * @error InvalidBatchEntryId   
     */
    changeMessageVisibilityBatch(params: SQS.ChangeMessageVisibilityBatchRequest, callback?: (err: SQS.TooManyEntriesInBatchRequest|SQS.EmptyBatchRequest|SQS.BatchEntryIdsNotDistinct|SQS.InvalidBatchEntryId|any, data: SQS.ChangeMessageVisibilityBatchResult|any) => void): Request<SQS.ChangeMessageVisibilityBatchResult|any,SQS.TooManyEntriesInBatchRequest|SQS.EmptyBatchRequest|SQS.BatchEntryIdsNotDistinct|SQS.InvalidBatchEntryId|any>;
    /**
     * Creates a new standard or FIFO queue or returns the URL of an existing queue.
You can pass one or more attributes in the request. Keep the following caveats
in mind:

 &amp;#42;  If you don&#x27;t specify the FifoQueue attribute, Amazon SQS creates a standard
   queue.
   
    You can&#x27;t change the queue type after you create it and you can&#x27;t convert an
   existing standard queue into a FIFO queue. You must either create a new FIFO
   queue for your application or delete your existing standard queue and
   recreate it as a FIFO queue. For more information, see Moving From a Standard
   Queue to a FIFO Queue
   [http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html#FIFO-queues-moving] 
   in the Amazon SQS Developer Guide. 
   
   
 *  If you don&#x27;t provide a value for an attribute, the queue is created with the
   default value for the attribute.
   
   
 *  If you delete a queue, you must wait at least 60 seconds before creating a
   queue with the same name.
   
   

To successfully create a new queue, you must provide a queue name that adheres
to the limits related to queues
[http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/limits-queues.html] 
and is unique within the scope of your queues.

To get the queue URL, use the GetQueueUrl action. GetQueueUrl requires only the 
QueueName parameter. be aware of existing queue names:

 *  If you provide the name of an existing queue along with the exact names and
   values of all the queue&#x27;s attributes, CreateQueue returns the queue URL for
   the existing queue.
   
   
 *  If the queue name, attribute names, or attribute values don&#x27;t match an
   existing queue, CreateQueue returns an error.
   
   

Some actions take lists of parameters. These lists are specified using the 
param.n notation. Values of n are integers starting from 1. For example, a
parameter list with two elements looks like this:

 &amp;Attribute.1=this 

 &amp;Attribute.2=that
     *
     * @error QueueDeletedRecently   
     * @error QueueNameExists   
     */
    createQueue(params: SQS.CreateQueueRequest, callback?: (err: SQS.QueueDeletedRecently|SQS.QueueNameExists|any, data: SQS.CreateQueueResult|any) => void): Request<SQS.CreateQueueResult|any,SQS.QueueDeletedRecently|SQS.QueueNameExists|any>;
    /**
     * Deletes the specified message from the specified queue. You specify the message
by using the message&#x27;s receipt handle and not the MessageId you receive when you
send the message. Even if the message is locked by another reader due to the
visibility timeout setting, it is still deleted from the queue. If you leave a
message in the queue for longer than the queue&#x27;s configured retention period,
Amazon SQS automatically deletes the message. 

 The receipt handle is associated with a specific instance of receiving the
message. If you receive a message more than once, the receipt handle you get
each time you receive the message is different. If you don&#x27;t provide the most
recently received receipt handle for the message when you use the DeleteMessage 
action, the request succeeds, but the message might not be deleted.

For standard queues, it is possible to receive a message even after you deleting
it. This might happen on rare occasions if one of the servers storing a copy of
the message is unavailable when you send the request to delete the message. The
copy remains on the server and might be returned to you on a subsequent receive
request. You should ensure that your application is idempotent, so that
receiving a message more than once does not cause issues.
     *
     * @error InvalidIdFormat   
     * @error ReceiptHandleIsInvalid   
     */
    deleteMessage(params: SQS.DeleteMessageRequest, callback?: (err: SQS.InvalidIdFormat|SQS.ReceiptHandleIsInvalid|any, data: any) => void): Request<any,SQS.InvalidIdFormat|SQS.ReceiptHandleIsInvalid|any>;
    /**
     * Deletes up to ten messages from the specified queue. This is a batch version of 
DeleteMessage . The result of the action on each message is reported
individually in the response.

Because the batch request can result in a combination of successful and
unsuccessful actions, you should check for batch errors even when the call
returns an HTTP status code of 200.

Some actions take lists of parameters. These lists are specified using the 
param.n notation. Values of n are integers starting from 1. For example, a
parameter list with two elements looks like this:

 &amp;Attribute.1=this 

 &amp;Attribute.2=that
     *
     * @error TooManyEntriesInBatchRequest   
     * @error EmptyBatchRequest   
     * @error BatchEntryIdsNotDistinct   
     * @error InvalidBatchEntryId   
     */
    deleteMessageBatch(params: SQS.DeleteMessageBatchRequest, callback?: (err: SQS.TooManyEntriesInBatchRequest|SQS.EmptyBatchRequest|SQS.BatchEntryIdsNotDistinct|SQS.InvalidBatchEntryId|any, data: SQS.DeleteMessageBatchResult|any) => void): Request<SQS.DeleteMessageBatchResult|any,SQS.TooManyEntriesInBatchRequest|SQS.EmptyBatchRequest|SQS.BatchEntryIdsNotDistinct|SQS.InvalidBatchEntryId|any>;
    /**
     * Deletes the queue specified by the QueueUrl, even if the queue is empty. If the
specified queue doesn&#x27;t exist, Amazon SQS returns a successful response.

Be careful with the DeleteQueue action: When you delete a queue, any messages in
the queue are no longer available. 

When you delete a queue, the deletion process takes up to 60 seconds. Requests
you send involving that queue during the 60 seconds might succeed. For example,
a SendMessage request might succeed, but after 60 seconds the queue and the
message you sent no longer exist.

When you delete a queue, you must wait at least 60 seconds before creating a
queue with the same name.
     *
     */
    deleteQueue(params: SQS.DeleteQueueRequest, callback?: (err: any, data: any) => void): Request<any,any>;
    /**
     * Gets attributes for the specified queue.

Some actions take lists of parameters. These lists are specified using the 
param.n notation. Values of n are integers starting from 1. For example, a
parameter list with two elements looks like this:

 &amp;Attribute.1=this 

 &amp;Attribute.2=that
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
in the Amazon SQS Developer Guide.
     *
     * @error QueueDoesNotExist   
     */
    getQueueUrl(params: SQS.GetQueueUrlRequest, callback?: (err: SQS.QueueDoesNotExist|any, data: SQS.GetQueueUrlResult|any) => void): Request<SQS.GetQueueUrlResult|any,SQS.QueueDoesNotExist|any>;
    /**
     * Returns a list of your queues that have the RedrivePolicy queue attribute
configured with a dead letter queue.

For more information about using dead letter queues, see Using Amazon SQS Dead
Letter Queues
[http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html] 
in the Amazon SQS Developer Guide.
     *
     * @error QueueDoesNotExist   
     */
    listDeadLetterSourceQueues(params: SQS.ListDeadLetterSourceQueuesRequest, callback?: (err: SQS.QueueDoesNotExist|any, data: SQS.ListDeadLetterSourceQueuesResult|any) => void): Request<SQS.ListDeadLetterSourceQueuesResult|any,SQS.QueueDoesNotExist|any>;
    /**
     * Returns a list of your queues. The maximum number of queues that can be returned
is 1,000. If you specify a value for the optional QueueNamePrefix parameter,
only queues with a name that begins with the specified value are returned.
     *
     */
    listQueues(params: SQS.ListQueuesRequest, callback?: (err: any, data: SQS.ListQueuesResult|any) => void): Request<SQS.ListQueuesResult|any,any>;
    /**
     * Deletes the messages in a queue specified by the QueueURL parameter.

When you use the PurgeQueue action, you can&#x27;t retrieve a message deleted from a
queue.

When you purge a queue, the message deletion process takes up to 60 seconds. All
messages sent to the queue before calling the PurgeQueue action are deleted.
Messages sent to the queue while it is being purged might be deleted. While the
queue is being purged, messages sent to the queue before PurgeQueue is called
might be received, but are deleted within the next minute.
     *
     * @error QueueDoesNotExist   
     * @error PurgeQueueInProgress   
     */
    purgeQueue(params: SQS.PurgeQueueRequest, callback?: (err: SQS.QueueDoesNotExist|SQS.PurgeQueueInProgress|any, data: any) => void): Request<any,SQS.QueueDoesNotExist|SQS.PurgeQueueInProgress|any>;
    /**
     * Retrieves one or more messages (up to 10), from the specified queue. Using the 
WaitTimeSeconds parameter enables long-poll support. For more information, see 
Amazon SQS Long Polling
[http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-long-polling.html] 
in the Amazon SQS Developer Guide. 

Short poll is the default behavior where a weighted random set of machines is
sampled on a ReceiveMessage call. Thus, only the messages on the sampled
machines are returned. If the number of messages in the queue is small (fewer
than 1,000), you most likely get fewer messages than you requested per 
ReceiveMessage call. If the number of messages in the queue is extremely small,
you might not receive any messages in a particular ReceiveMessage response. If
this happens, repeat the request. 

For each message returned, the response includes the following:

 &amp;#42;  The message body.
   
   
 *  An MD5 digest of the message body. For information on MD5, see RFC1321
   [https://www.ietf.org/rfc/rfc1321.txt].
   
   
 *  The MessageId you received when you sent the message to the queue.
   
   
 *  The receipt handle.
   
   
 *  The message attributes.
   
   
 *  An MD5 digest of the message attributes.
   
   

The receipt handle is the identifier you must provide when deleting the message.
For more information, see Queue and Message Identifiers
[http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-queue-message-identifiers.html] 
in the Amazon SQS Developer Guide.

You can provide the VisibilityTimeout parameter in your request. The parameter
is applied to the messages that Amazon SQS returns in the response. If you don&#x27;t
include the parameter, the overall visibility timeout for the queue is used for
the returned messages. For more information, see Visibility Timeout
[http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html] 
in the Amazon SQS Developer Guide.

A message that isn&#x27;t deleted or a message whose visibility isn&#x27;t extended before
the visibility timeout expires counts as a failed receive. Depending on the
configuration of the queue, the message might be sent to the dead letter queue.

In the future, new attributes might be added. If you write code that calls this
action, we recommend that you structure your code so that it can handle new
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

 &amp;#42;   #x9 
   
   
 *   #xA 
   
   
 *   #xD 
   
   
 *   #x20 to #xD7FF 
   
   
 *   #xE000 to #xFFFD 
   
   
 *   #x10000 to #x10FFFF 
   
   

For more information, see RFC1321 [https://www.ietf.org/rfc/rfc1321.txt]. If you
send any characters that aren&#x27;t included in this list, your request is rejected.
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

 &amp;#42;   #x9 
   
   
 *   #xA 
   
   
 *   #xD 
   
   
 *   #x20 to #xD7FF 
   
   
 *   #xE000 to #xFFFD 
   
   
 *   #x10000 to #x10FFFF 
   
   

For more information, see RFC1321 [https://www.ietf.org/rfc/rfc1321.txt]. If you
send any characters that aren&#x27;t included in this list, your request is rejected.

If you don&#x27;t specify the DelaySeconds parameter for an entry, Amazon SQS uses
the default value for the queue.

Some actions take lists of parameters. These lists are specified using the 
param.n notation. Values of n are integers starting from 1. For example, a
parameter list with two elements looks like this:

 &amp;Attribute.1=this 

 &amp;Attribute.2=that
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
propagate throughout the Amazon SQS system. Changes made to the 
MessageRetentionPeriod attribute can take up to 15 minutes.

In the future, new attributes might be added. If you write code that calls this
action, we recommend that you structure your code so that it can handle new
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
        /** The URL of the Amazon SQS queue to which permissions are added.

Queue URLs are case-sensitive. **/
        QueueUrl: String;
        /** The unique identification of the permission you&#x27;re setting (for example, 
AliceSendMessage). Maximum 80 characters. Allowed characters include
alphanumeric characters, hyphens (-), and underscores (_). **/
        Label: String;
        /** The AWS account number of the principal
[http://docs.aws.amazon.com/general/latest/gr/glos-chap.html#P] who is given
permission. The principal must have an AWS account, but does not need to be
signed up for Amazon SQS. For information about locating the AWS account
identification, see Your AWS Identifiers
[http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/AWSCredentials.html] 
in the Amazon SQS Developer Guide. **/
        AWSAccountIds: AWSAccountIdList;
        /** The action the client wants to allow for the specified principal. The following
values are valid:

 &amp;#42;   * 
   
   
 *   ChangeMessageVisibility 
   
   
 *   DeleteMessage 
   
   
 *   GetQueueAttributes 
   
   
 *   GetQueueUrl 
   
   
 *   ReceiveMessage 
   
   
 *   SendMessage 
   
   

For more information about these actions, see Understanding Permissions
[http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/acp-overview.html#PermissionTypes] 
in the Amazon SQS Developer Guide.

Specifying SendMessage, DeleteMessage, or ChangeMessageVisibility for 
ActionName.n also grants permissions for the corresponding batch versions of
those actions: SendMessageBatch, DeleteMessageBatch, and 
ChangeMessageVisibilityBatch. **/
        Actions: ActionNameList;
    }
    export interface BatchEntryIdsNotDistinct {
    }
    export interface BatchRequestTooLong {
    }
    export interface BatchResultErrorEntry {
        /** The Id of an entry in a batch request. **/
        Id: String;
        /** Specifies whether the error happened due to the sender&#x27;s fault. **/
        SenderFault: Boolean;
        /** An error code representing why the action failed on this entry. **/
        Code: String;
        /** A message explaining why the action failed on this entry. **/
        Message?: String;
    }
    export interface ChangeMessageVisibilityBatchRequest {
        /** The URL of the Amazon SQS queue whose messages&#x27; visibility is changed.

Queue URLs are case-sensitive. **/
        QueueUrl: String;
        /** A list of receipt handles of the messages for which the visibility timeout must
be changed. **/
        Entries: ChangeMessageVisibilityBatchRequestEntryList;
    }
    export interface ChangeMessageVisibilityBatchRequestEntry {
        /** An identifier for this particular receipt handle used to communicate the result.

The Ids of a batch request need to be unique within a request **/
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
        /** The URL of the Amazon SQS queue whose message&#x27;s visibility is changed.

Queue URLs are case-sensitive. **/
        QueueUrl: String;
        /** The receipt handle associated with the message whose visibility timeout is
changed. This parameter is returned by the ReceiveMessage action. **/
        ReceiptHandle: String;
        /** The new value for the message&#x27;s visibility timeout (in seconds). Values values: 
0 to 43200. Maximum: 12 hours. **/
        VisibilityTimeout: Integer;
    }
    export interface CreateQueueRequest {
        /** The name of the new queue. The following limits apply to this name:

 &amp;#42;  A queue name can have up to 80 characters.
   
   
 *  Valid values: alphanumeric characters, hyphens (-), and underscores (_).
   
   
 *  A FIFO queue name must end with the .fifo suffix.
   
   

Queue names are case-sensitive. **/
        QueueName: String;
        /** A map of attributes with their corresponding values.

The following lists the names, descriptions, and values of the special request
parameters that the CreateQueue action uses:

 &amp;#42;   DelaySeconds - The number of seconds for which the delivery of all messages
   in the queue is delayed. Valid values: An integer from 0 to 900 seconds (15
   minutes). The default is 0 (zero). 
   
   
 *   MaximumMessageSize - The limit of how many bytes a message can contain
   before Amazon SQS rejects it. Valid values: An integer from 1,024 bytes (1
   KiB) to 262,144 bytes (256 KiB). The default is 262,144 (256 KiB). 
   
   
 *   MessageRetentionPeriod - The number of seconds for which Amazon SQS retains
   a message. Valid values: An integer from 60 seconds (1 minute) to 1,209,600
   seconds (14 days). The default is 345,600 (4 days). 
   
   
 *   Policy - The queue&#x27;s policy. A valid AWS policy. For more information about
   policy structure, see Overview of AWS IAM Policies
   [http://docs.aws.amazon.com/IAM/latest/UserGuide/PoliciesOverview.html] in
   the Amazon IAM User Guide. 
   
   
 *   ReceiveMessageWaitTimeSeconds - The number of seconds for which a 
   ReceiveMessage action waits for a message to arrive. Valid values: An integer
   from 0 to 20 (seconds). The default is 0 (zero). 
   
   
 *   RedrivePolicy - The parameters for the dead letter queue functionality of
   the source queue. For more information about the redrive policy and dead
   letter queues, see Using Amazon SQS Dead Letter Queues
   [http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html] 
   in the Amazon SQS Developer Guide. 
   
   The dead letter queue of a FIFO queue must also be a FIFO queue. Similarly,
   the dead letter queue of a standard queue must also be a standard queue.
   
   
 *   VisibilityTimeout - The visibility timeout for the queue. Valid values: An
   integer from 0 to 43,200 (12 hours). The default is 30. For more information
   about the visibility timeout, see Visibility Timeout
   [http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html] 
   in the Amazon SQS Developer Guide.
   
   

The following attributes apply only to FIFO (first-in-first-out) queues
[http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html]
:

 *   FifoQueue - Designates a queue as FIFO. You can provide this attribute only
   during queue creation. You can&#x27;t change it for an existing queue. When you
   set this attribute, you must provide a MessageGroupId explicitly.
   
   For more information, see FIFO Queue Logic
   [http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html#FIFO-queues-understanding-logic] 
   in the Amazon SQS Developer Guide.
   
   
 *   ContentBasedDeduplication - Enables content-based deduplication. For more
   information, see Exactly-Once Processing
   [http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html#FIFO-queues-exactly-once-processing] 
   in the Amazon SQS Developer Guide. 
   
    *  Every message must have a unique MessageDeduplicationId,
      
       *  You may provide a MessageDeduplicationId explicitly.
         
         
       *  If you aren&#x27;t able to provide a MessageDeduplicationId and you enable 
         ContentBasedDeduplication for your queue, Amazon SQS uses a SHA-256
         hash to generate the MessageDeduplicationId using the body of the
         message (but not the attributes of the message). 
         
         
       *  If you don&#x27;t provide a MessageDeduplicationId and the queue doesn&#x27;t
         have ContentBasedDeduplication set, the action fails with an error.
         
         
       *  If the queue has ContentBasedDeduplication set, your 
         MessageDeduplicationId overrides the generated one.
         
         
      
      
    *  When ContentBasedDeduplication is in effect, messages with identical
      content sent within the deduplication interval are treated as duplicates
      and only one copy of the message is delivered.
      
      
    *  You can also use ContentBasedDeduplication for messages with identical
      content to be treated as duplicates.
      
      
    *  If you send one message with ContentBasedDeduplication enabled and then
      another message with a MessageDeduplicationId that is the same as the one
      generated for the first MessageDeduplicationId, the two messages are
      treated as duplicates and only one copy of the message is delivered. 
      
      
   
   

Any other valid special request parameters (such as the following) are ignored:

 *   ApproximateNumberOfMessages 
   
   
 *   ApproximateNumberOfMessagesDelayed 
   
   
 *   ApproximateNumberOfMessagesNotVisible 
   
   
 *   CreatedTimestamp 
   
   
 *   LastModifiedTimestamp 
   
   
 *   QueueArn **/
        Attributes?: QueueAttributeMap;
    }
    export interface CreateQueueResult {
        /** The URL of the created Amazon SQS queue. **/
        QueueUrl?: String;
    }
    export interface DeleteMessageBatchRequest {
        /** The URL of the Amazon SQS queue from which messages are deleted.

Queue URLs are case-sensitive. **/
        QueueUrl: String;
        /** A list of receipt handles for the messages to be deleted. **/
        Entries: DeleteMessageBatchRequestEntryList;
    }
    export interface DeleteMessageBatchRequestEntry {
        /** An identifier for this particular receipt handle. This is used to communicate
the result.

The Ids of a batch request need to be unique within a request **/
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
        /** The URL of the Amazon SQS queue from which messages are deleted.

Queue URLs are case-sensitive. **/
        QueueUrl: String;
        /** The receipt handle associated with the message to delete. **/
        ReceiptHandle: String;
    }
    export interface DeleteQueueRequest {
        /** The URL of the Amazon SQS queue to delete.

Queue URLs are case-sensitive. **/
        QueueUrl: String;
    }
    export interface EmptyBatchRequest {
    }
    export interface GetQueueAttributesRequest {
        /** The URL of the Amazon SQS queue whose attribute information is retrieved.

Queue URLs are case-sensitive. **/
        QueueUrl: String;
        /** A list of attributes for which to retrieve information.

In the future, new attributes might be added. If you write code that calls this
action, we recommend that you structure your code so that it can handle new
attributes gracefully.

The following attributes are supported:

 &amp;#42;   All - Returns all values. 
   
   
 *   ApproximateNumberOfMessages - Returns the approximate number of visible
   messages in a queue. For more information, see Resources Required to Process
   Messages
   [http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-resources-required-process-messages.html] 
   in the Amazon SQS Developer Guide. 
   
   
 *   ApproximateNumberOfMessagesDelayed - Returns the approximate number of
   messages that are waiting to be added to the queue. 
   
   
 *   ApproximateNumberOfMessagesNotVisible - Returns the approximate number of
   messages that have not timed-out and aren&#x27;t deleted. For more information,
   see Resources Required to Process Messages
   [http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-resources-required-process-messages.html] 
   in the Amazon SQS Developer Guide. 
   
   
 *   CreatedTimestamp - Returns the time when the queue was created in seconds (
   epoch time [http://en.wikipedia.org/wiki/Unix_time]).
   
   
 *   DelaySeconds - Returns the default delay on the queue in seconds.
   
   
 *   LastModifiedTimestamp - Returns the time when the queue was last changed in
   seconds (epoch time [http://en.wikipedia.org/wiki/Unix_time]).
   
   
 *   MaximumMessageSize - Returns the limit of how many bytes a message can
   contain before Amazon SQS rejects it.
   
   
 *   MessageRetentionPeriod - Returns the number of seconds for which Amazon SQS
   retains a message.
   
   
 *   Policy - Returns the policy of the queue.
   
   
 *   QueueArn - Returns the Amazon resource name (ARN) of the queue.
   
   
 *   ReceiveMessageWaitTimeSeconds - Returns the number of seconds for which the 
   ReceiveMessage action waits for a message to arrive. 
   
   
 *   RedrivePolicy - Returns the parameters for dead letter queue functionality
   of the source queue. For more information about the redrive policy and dead
   letter queues, see Using Amazon SQS Dead Letter Queues
   [http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html] 
   in the Amazon SQS Developer Guide. 
   
   
 *   VisibilityTimeout - Returns the visibility timeout for the queue. For more
   information about the visibility timeout, see Visibility Timeout
   [http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html] 
   in the Amazon SQS Developer Guide. 
   
   

The following attributes apply only to FIFO (first-in-first-out) queues
[http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html]
:

 *   FifoQueue - Returns whether the queue is FIFO. For more information, see 
   FIFO Queue Logic
   [http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html#FIFO-queues-understanding-logic] 
   in the Amazon SQS Developer Guide.
   
   
 *   ContentBasedDeduplication - Returns whether content-based deduplication is
   enabled for the queue. For more information, see Exactly-Once Processing
   [http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html#FIFO-queues-exactly-once-processing] 
   in the Amazon SQS Developer Guide. **/
        AttributeNames?: AttributeNameList;
    }
    export interface GetQueueAttributesResult {
        /** A map of attributes to their respective values. **/
        Attributes?: QueueAttributeMap;
    }
    export interface GetQueueUrlRequest {
        /** The name of the queue whose URL must be fetched. Maximum 80 characters. Valid
values: alphanumeric characters, hyphens (-), and underscores (_).

Queue names are case-sensitive. **/
        QueueName: String;
        /** The AWS account ID of the account that created the queue. **/
        QueueOwnerAWSAccountId?: String;
    }
    export interface GetQueueUrlResult {
        /** The URL of the queue. **/
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
        /** The URL of a dead letter queue.

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
        /** A list of queue URLs, up to 1,000 entries. **/
        QueueUrls?: QueueUrlList;
    }
    export interface Message {
        /** A unique identifier for the message. A MessageIdis considered unique across all
AWS accounts for an extended period of time. **/
        MessageId?: String;
        /** An identifier associated with the act of receiving the message. A new receipt
handle is returned every time you receive a message. When deleting a message,
you provide the last received receipt handle to delete the message. **/
        ReceiptHandle?: String;
        /** An MD5 digest of the non-URL-encoded message body string. **/
        MD5OfBody?: String;
        /** The message&#x27;s contents (not URL-encoded). **/
        Body?: String;
        /** SenderId, SentTimestamp, ApproximateReceiveCount, and/or 
ApproximateFirstReceiveTimestamp. SentTimestamp and 
ApproximateFirstReceiveTimestamp are each returned as an integer representing
the epoch time [http://en.wikipedia.org/wiki/Unix_time] in milliseconds. **/
        Attributes?: MessageSystemAttributeMap;
        /** An MD5 digest of the non-URL-encoded message attribute string. You can use this
attribute to verify that Amazon SQS received the message correctly. Amazon SQS
URL-decodes the message before creating the MD5 digest. For information on MD5,
see RFC1321 [https://www.ietf.org/rfc/rfc1321.txt]. **/
        MD5OfMessageAttributes?: String;
        /** Each message attribute consists of a Name, Type, and Value. For more
information, see Message Attribute Items and Validation
[http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-message-attributes.html#message-attributes-items-validation] 
in the Amazon SQS Developer Guide. **/
        MessageAttributes?: MessageBodyAttributeMap;
    }
    export interface MessageAttributeValue {
        /** Strings are Unicode with UTF-8 binary encoding. For a list of code values, see 
ASCII Printable Characters
[http://en.wikipedia.org/wiki/ASCII#ASCII_printable_characters]. **/
        StringValue?: String;
        /** Binary type attributes can store any binary data, such as compressed data,
encrypted data, or images. **/
        BinaryValue?: Binary;
        /** Not implemented. Reserved for future use. **/
        StringListValues?: StringList;
        /** Not implemented. Reserved for future use. **/
        BinaryListValues?: BinaryList;
        /** Amazon SQS supports the following logical data types: String, Number, and Binary
. For the Number data type, you must use StringValue.

You can also append custom labels. For more information, see Message Attribute
Data Types and Validation
[http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-message-attributes.html#message-attributes-data-types-validation] 
in the Amazon SQS Developer Guide. **/
        DataType: String;
    }
    export interface MessageNotInflight {
    }
    export interface OverLimit {
    }
    export interface PurgeQueueInProgress {
    }
    export interface PurgeQueueRequest {
        /** The URL of the queue from which the PurgeQueue action deletes messages.

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
        /** The URL of the Amazon SQS queue from which messages are received.

Queue URLs are case-sensitive. **/
        QueueUrl: String;
        /** A list of attributes that need to be returned along with each message. These
attributes include:

 &amp;#42;   All - Returns all values.
   
   
 *   ApproximateFirstReceiveTimestamp - Returns the time the message was first
   received from the queue (epoch time [http://en.wikipedia.org/wiki/Unix_time] 
   in milliseconds).
   
   
 *   ApproximateReceiveCount - Returns the number of times a message has been
   received from the queue but not deleted.
   
   
 *   SenderId 
   
    *  For an IAM user, returns the IAM user ID, for example 
      ABCDEFGHI1JKLMNOPQ23R.
      
      
    *  For an IAM role, returns the IAM role ID, for example 
      ABCDE1F2GH3I4JK5LMNOP:i-a123b456.
      
      
   
   
 *   SentTimestamp - Returns the time the message was sent to the queue (epoch
   time [http://en.wikipedia.org/wiki/Unix_time] in milliseconds).
   
   
 *   MessageDeduplicationId - Returns the value provided by the sender that calls
   the SendMessage action.
   
   
 *   MessageGroupId - Returns the value provided by the sender that calls the 
   SendMessage action. Messages with the same MessageGroupId are returned in
   sequence.
   
   
 *   SequenceNumber - Returns the value provided by Amazon SQS.
   
   

Any other valid special request parameters (such as the following) are ignored:

 *   ApproximateNumberOfMessages 
   
   
 *   ApproximateNumberOfMessagesDelayed 
   
   
 *   ApproximateNumberOfMessagesNotVisible 
   
   
 *   CreatedTimestamp 
   
   
 *   ContentBasedDeduplication 
   
   
 *   DelaySeconds 
   
   
 *   FifoQueue 
   
   
 *   LastModifiedTimestamp 
   
   
 *   MaximumMessageSize 
   
   
 *   MessageRetentionPeriod 
   
   
 *   Policy 
   
   
 *   QueueArn, 
   
   
 *   ReceiveMessageWaitTimeSeconds 
   
   
 *   RedrivePolicy 
   
   
 *   VisibilityTimeout **/
        AttributeNames?: AttributeNameList;
        /** The name of the message attribute, where N is the index.

 &amp;#42;  The name can contain alphanumeric characters and the underscore (_), hyphen (
   -), and period (.).
   
   
 *  The name is case-sensitive and must be unique among all attribute names for
   the message.
   
   
 *  The name must not start with AWS-reserved prefixes such as AWS. or Amazon. 
   (or any casing variants).
   
   
 *  The name must not start or end with a period (.), and it should not have
   periods in succession (..).
   
   
 *  The name can be up to 256 characters long.
   
   

When using ReceiveMessage, you can send a list of attribute names to receive, or
you can return all of the attributes by specifying All or .* in your request.
You can also use all message attributes starting with a prefix, for example 
bar.*. **/
        MessageAttributeNames?: MessageAttributeNameList;
        /** The maximum number of messages to return. Amazon SQS never returns more messages
than this value (however, fewer messages might be returned). Valid values are 1
to 10. Default is 1. **/
        MaxNumberOfMessages?: Integer;
        /** The duration (in seconds) that the received messages are hidden from subsequent
retrieve requests after being retrieved by a ReceiveMessage request. **/
        VisibilityTimeout?: Integer;
        /** The duration (in seconds) for which the call waits for a message to arrive in
the queue before returning. If a message is available, the call returns sooner
than WaitTimeSeconds. **/
        WaitTimeSeconds?: Integer;
        /** This parameter applies only to FIFO (first-in-first-out) queues.

The token used for deduplication of ReceiveMessage calls. If a networking issue
occurs after a ReceiveMessage action, and instead of a response you receive a
generic error, you can retry the same action with an identical 
ReceiveRequestAttemptId to retrieve the same set of messages, even if their
visibility timeout has not yet expired.

 &amp;#42;  You can use ReceiveRequestAttemptId only for 5 minutes after a ReceiveMessage 
   action.
   
   
 *  When you set FifoQueue, a caller of the ReceiveMessage action can provide a 
   ReceiveRequestAttemptId explicitly.
   
   
 *  If a caller of the ReceiveMessage action doesn&#x27;t provide a 
   ReceiveRequestAttemptId, Amazon SQS generates a ReceiveRequestAttemptId.
   
   
 *  You can retry the ReceiveMessage action with the same ReceiveRequestAttemptId 
   if none of the messages have been modified (deleted or had their visibility
   changes).
   
   
 *  During a visibility timeout, subsequent calls with the same 
   ReceiveRequestAttemptId return the same messages and receipt handles. If a
   retry occurs within the deduplication interval, it resets the visibility
   timeout. For more information, see Visibility Timeout
   [http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html] 
   in the Amazon Simple Queue Service Developer Guide.
   
   If a caller of the ReceiveMessage action is still processing messages when
   the visibility timeout expires and messages become visible, another worker
   reading from the same queue can receive the same messages and therefore
   process duplicates. Also, if a reader whose message processing time is longer
   than the visibility timeout tries to delete the processed messages, the
   action fails with an error.
   
   To mitigate this effect, ensure that your application observes a safe
   threshold before the visibility timeout expires and extend the visibility
   timeout as necessary.
   
   
 *  While messages with a particular MessageGroupId are invisible, no more
   messages belonging to the same MessageGroupId are returned until the
   visibility timeout expires. You can still receive messages with another 
   MessageGroupId as long as it is also visible.
   
   
 *  If a caller of ReceiveMessage can&#x27;t track the ReceiveRequestAttemptId, no
   retries work until the original visibility timeout expires. As a result,
   delays might occur but the messages in the queue remain in a strict order.
   
   

The length of ReceiveRequestAttemptId is 128 characters. ReceiveRequestAttemptId 
can contain alphanumeric characters (a-z, A-Z, 0-9) and punctuation (
!&quot;#$%&amp;&#x27;()*+,-./:;&lt;=&gt;?@[\]^_&#x60;{|}~).

For best practices of using ReceiveRequestAttemptId, see Using the
ReceiveRequestAttemptId Request Parameter
[http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queue-recommendations.html#using-receiverequestattemptid-request-parameter] 
in the Amazon Simple Queue Service Developer Guide. **/
        ReceiveRequestAttemptId?: String;
    }
    export interface ReceiveMessageResult {
        /** A list of messages. **/
        Messages?: MessageList;
    }
    export interface RemovePermissionRequest {
        /** The URL of the Amazon SQS queue from which permissions are removed.

Queue URLs are case-sensitive. **/
        QueueUrl: String;
        /** The identification of the permission to remove. This is the label added using
the AddPermission action. **/
        Label: String;
    }
    export interface SendMessageBatchRequest {
        /** The URL of the Amazon SQS queue to which batched messages are sent.

Queue URLs are case-sensitive. **/
        QueueUrl: String;
        /** A list of SendMessageBatchRequestEntry items. **/
        Entries: SendMessageBatchRequestEntryList;
    }
    export interface SendMessageBatchRequestEntry {
        /** An identifier for a message in this batch used to communicate the result.

The Ids of a batch request need to be unique within a request **/
        Id: String;
        /** The body of the message. **/
        MessageBody: String;
        /** The number of seconds for which a specific message is delayed. Valid values: 0
to 900. Maximum: 15 minutes. Messages with a positive DelaySeconds value become
available for processing after the delay period is finished. If you don&#x27;t
specify a value, the default value for the queue is applied. 

When you set FifoQueue, you can&#x27;t set DelaySeconds per message. You can set this
parameter only on a queue level. **/
        DelaySeconds?: Integer;
        /** Each message attribute consists of a Name, Type, and Value. For more
information, see Message Attribute Items and Validation
[http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-message-attributes.html#message-attributes-items-validation] 
in the Amazon SQS Developer Guide. **/
        MessageAttributes?: MessageBodyAttributeMap;
        /** This parameter applies only to FIFO (first-in-first-out) queues.

The token used for deduplication of messages within a 5-minute minimum
deduplication interval. If a message with a particular MessageDeduplicationId is
sent successfully, subsequent messages with the same MessageDeduplicationId are
accepted successfully but aren&#x27;t delivered. For more information, see 
Exactly-Once Processing
[http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html#FIFO-queues-exactly-once-processing] 
in the Amazon SQS Developer Guide.

 &amp;#42;  Every message must have a unique MessageDeduplicationId,
   
    *  You may provide a MessageDeduplicationId explicitly.
      
      
    *  If you aren&#x27;t able to provide a MessageDeduplicationId and you enable 
      ContentBasedDeduplication for your queue, Amazon SQS uses a SHA-256 hash
      to generate the MessageDeduplicationId using the body of the message (but
      not the attributes of the message). 
      
      
    *  If you don&#x27;t provide a MessageDeduplicationId and the queue doesn&#x27;t have 
      ContentBasedDeduplication set, the action fails with an error.
      
      
    *  If the queue has ContentBasedDeduplication set, your 
      MessageDeduplicationId overrides the generated one.
      
      
   
   
 *  When ContentBasedDeduplication is in effect, messages with identical content
   sent within the deduplication interval are treated as duplicates and only one
   copy of the message is delivered.
   
   
 *  You can also use ContentBasedDeduplication for messages with identical
   content to be treated as duplicates.
   
   
 *  If you send one message with ContentBasedDeduplication enabled and then
   another message with a MessageDeduplicationId that is the same as the one
   generated for the first MessageDeduplicationId, the two messages are treated
   as duplicates and only one copy of the message is delivered. 
   
   

The MessageDeduplicationId is available to the recipient of the message (this
can be useful for troubleshooting delivery issues).

If a message is sent successfully but the acknowledgement is lost and the
message is resent with the same MessageDeduplicationId after the deduplication
interval, Amazon SQS can&#x27;t detect duplicate messages.

The length of MessageDeduplicationId is 128 characters. MessageDeduplicationId 
can contain alphanumeric characters (a-z, A-Z, 0-9) and punctuation (
!&quot;#$%&amp;&#x27;()*+,-./:;&lt;=&gt;?@[\]^_&#x60;{|}~).

For best practices of using MessageDeduplicationId, see Using the
MessageDeduplicationId Property
[http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queue-recommendations.html#using-messagededuplicationid-property] 
in the Amazon Simple Queue Service Developer Guide. **/
        MessageDeduplicationId?: String;
        /** This parameter applies only to FIFO (first-in-first-out) queues.

The tag that specifies that a message belongs to a specific message group.
Messages that belong to the same message group are processed in a FIFO manner
(however, messages in different message groups might be processed out of order).
To interleave multiple ordered streams within a single queue, use MessageGroupId 
values (for example, session data for multiple users). In this scenario,
multiple readers can process the queue, but the session data of each user is
processed in a FIFO fashion.

 &amp;#42;  You must associate a non-empty MessageGroupId with a message. If you don&#x27;t
   provide a MessageGroupId, the action fails.
   
   
 *   ReceiveMessage might return messages with multiple MessageGroupId values.
   For each MessageGroupId, the messages are sorted by time sent. The caller
   can&#x27;t specify a MessageGroupId.
   
   

The length of MessageGroupId is 128 characters. Valid values are alphanumeric
characters and punctuation (!&quot;#$%&amp;&#x27;()*+,-./:;&lt;=&gt;?@[\]^_&#x60;{|}~).

For best practices of using MessageGroupId, see Using the MessageGroupId
Property
[http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queue-recommendations.html#using-messagegroupid-property] 
in the Amazon Simple Queue Service Developer Guide. **/
        MessageGroupId?: String;
    }
    export interface SendMessageBatchResult {
        /** A list of SendMessageBatchResultEntry items. **/
        Successful: SendMessageBatchResultEntryList;
        /** A list of BatchResultErrorEntry items with error details about each message that
can&#x27;t be enqueued. **/
        Failed: BatchResultErrorEntryList;
    }
    export interface SendMessageBatchResultEntry {
        /** An identifier for the message in this batch. **/
        Id: String;
        /** An identifier for the message. **/
        MessageId: String;
        /** An MD5 digest of the non-URL-encoded message attribute string. You can use this
attribute to verify that Amazon SQS received the message correctly. Amazon SQS
URL-decodes the message before creating the MD5 digest. For information on MD5,
see RFC1321 [https://www.ietf.org/rfc/rfc1321.txt]. **/
        MD5OfMessageBody: String;
        /** An MD5 digest of the non-URL-encoded message attribute string. You can use this
attribute to verify that Amazon SQS received the message correctly. Amazon SQS
URL-decodes the message before creating the MD5 digest. For information on MD5,
see RFC1321 [https://www.ietf.org/rfc/rfc1321.txt]. **/
        MD5OfMessageAttributes?: String;
        /** This parameter applies only to FIFO (first-in-first-out) queues.

A large, non-consecutive number that Amazon SQS assigns to each message.

The length of SequenceNumber is 128 bits. As SequenceNumber continues to
increase for a particular MessageGroupId. **/
        SequenceNumber?: String;
    }
    export interface SendMessageRequest {
        /** The URL of the Amazon SQS queue to which a message is sent.

Queue URLs are case-sensitive. **/
        QueueUrl: String;
        /** The message to send. The maximum string size is 256 KB.

The following list shows the characters (in Unicode) that are allowed in your
message, according to the W3C XML specification:

 &amp;#42;   #x9 
   
   
 *   #xA 
   
   
 *   #xD 
   
   
 *   #x20 to #xD7FF 
   
   
 *   #xE000 to #xFFFD 
   
   
 *   #x10000 to #x10FFFF 
   
   

For more information, see RFC1321 [https://www.ietf.org/rfc/rfc1321.txt]. If you
send any characters that aren&#x27;t included in this list, your request is rejected. **/
        MessageBody: String;
        /** The number of seconds to delay a specific message. Valid values: 0 to 900.
Maximum: 15 minutes. Messages with a positive DelaySeconds value become
available for processing after the delay period is finished. If you don&#x27;t
specify a value, the default value for the queue applies. 

When you set FifoQueue, you can&#x27;t set DelaySeconds per message. You can set this
parameter only on a queue level. **/
        DelaySeconds?: Integer;
        /** Each message attribute consists of a Name, Type, and Value. For more
information, see Message Attribute Items and Validation
[http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-message-attributes.html#message-attributes-items-validation] 
in the Amazon SQS Developer Guide. **/
        MessageAttributes?: MessageBodyAttributeMap;
        /** This parameter applies only to FIFO (first-in-first-out) queues.

The token used for deduplication of sent messages. If a message with a
particular MessageDeduplicationId is sent successfully, any messages sent with
the same MessageDeduplicationId are accepted successfully but aren&#x27;t delivered
during the 5-minute deduplication interval. For more information, see 
Exactly-Once Processing
[http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html#FIFO-queues-exactly-once-processing] 
in the Amazon SQS Developer Guide.

 &amp;#42;  Every message must have a unique MessageDeduplicationId,
   
    *  You may provide a MessageDeduplicationId explicitly.
      
      
    *  If you aren&#x27;t able to provide a MessageDeduplicationId and you enable 
      ContentBasedDeduplication for your queue, Amazon SQS uses a SHA-256 hash
      to generate the MessageDeduplicationId using the body of the message (but
      not the attributes of the message). 
      
      
    *  If you don&#x27;t provide a MessageDeduplicationId and the queue doesn&#x27;t have 
      ContentBasedDeduplication set, the action fails with an error.
      
      
    *  If the queue has ContentBasedDeduplication set, your 
      MessageDeduplicationId overrides the generated one.
      
      
   
   
 *  When ContentBasedDeduplication is in effect, messages with identical content
   sent within the deduplication interval are treated as duplicates and only one
   copy of the message is delivered.
   
   
 *  You can also use ContentBasedDeduplication for messages with identical
   content to be treated as duplicates.
   
   
 *  If you send one message with ContentBasedDeduplication enabled and then
   another message with a MessageDeduplicationId that is the same as the one
   generated for the first MessageDeduplicationId, the two messages are treated
   as duplicates and only one copy of the message is delivered. 
   
   

The MessageDeduplicationId is available to the recipient of the message (this
can be useful for troubleshooting delivery issues).

If a message is sent successfully but the acknowledgement is lost and the
message is resent with the same MessageDeduplicationId after the deduplication
interval, Amazon SQS can&#x27;t detect duplicate messages.

The length of MessageDeduplicationId is 128 characters. MessageDeduplicationId 
can contain alphanumeric characters (a-z, A-Z, 0-9) and punctuation (
!&quot;#$%&amp;&#x27;()*+,-./:;&lt;=&gt;?@[\]^_&#x60;{|}~).

For best practices of using MessageDeduplicationId, see Using the
MessageDeduplicationId Property
[http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queue-recommendations.html#using-messagededuplicationid-property] 
in the Amazon Simple Queue Service Developer Guide. **/
        MessageDeduplicationId?: String;
        /** This parameter applies only to FIFO (first-in-first-out) queues.

The tag that specifies that a message belongs to a specific message group.
Messages that belong to the same message group are processed in a FIFO manner
(however, messages in different message groups might be processed out of order).
To interleave multiple ordered streams within a single queue, use MessageGroupId 
values (for example, session data for multiple users). In this scenario,
multiple readers can process the queue, but the session data of each user is
processed in a FIFO fashion.

 &amp;#42;  You must associate a non-empty MessageGroupId with a message. If you don&#x27;t
   provide a MessageGroupId, the action fails.
   
   
 *   ReceiveMessage might return messages with multiple MessageGroupId values.
   For each MessageGroupId, the messages are sorted by time sent. The caller
   can&#x27;t specify a MessageGroupId.
   
   

The length of MessageGroupId is 128 characters. Valid values are alphanumeric
characters and punctuation (!&quot;#$%&amp;&#x27;()*+,-./:;&lt;=&gt;?@[\]^_&#x60;{|}~).

For best practices of using MessageGroupId, see Using the MessageGroupId
Property
[http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queue-recommendations.html#using-messagegroupid-property] 
in the Amazon Simple Queue Service Developer Guide. **/
        MessageGroupId?: String;
    }
    export interface SendMessageResult {
        /** An MD5 digest of the non-URL-encoded message attribute string. You can use this
attribute to verify that Amazon SQS received the message correctly. Amazon SQS
URL-decodes the message before creating the MD5 digest. For information on MD5,
see RFC1321 [https://www.ietf.org/rfc/rfc1321.txt]. **/
        MD5OfMessageBody?: String;
        /** An MD5 digest of the non-URL-encoded message attribute string. You can use this
attribute to verify that Amazon SQS received the message correctly. Amazon SQS
URL-decodes the message before creating the MD5 digest. For information on MD5,
see RFC1321 [https://www.ietf.org/rfc/rfc1321.txt]. **/
        MD5OfMessageAttributes?: String;
        /** An attribute containing the MessageId of the message sent to the queue. For more
information, see Queue and Message Identifiers
[http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-queue-message-identifiers.html] 
in the Amazon SQS Developer Guide. **/
        MessageId?: String;
        /** This parameter applies only to FIFO (first-in-first-out) queues.

A large, non-consecutive number that Amazon SQS assigns to each message.

The length of SequenceNumber is 128 bits. SequenceNumber continues to increase
for a particular MessageGroupId. **/
        SequenceNumber?: String;
    }
    export interface SetQueueAttributesRequest {
        /** The URL of the Amazon SQS queue whose attributes are set.

Queue URLs are case-sensitive. **/
        QueueUrl: String;
        /** A map of attributes to set.

The following lists the names, descriptions, and values of the special request
parameters that the SetQueueAttributes action uses:

 &amp;#42;   DelaySeconds - The number of seconds for which the delivery of all messages
   in the queue is delayed. Valid values: An integer from 0 to 900 (15 minutes).
   The default is 0 (zero). 
   
   
 *   MaximumMessageSize - The limit of how many bytes a message can contain
   before Amazon SQS rejects it. Valid values: An integer from 1,024 bytes (1
   KiB) up to 262,144 bytes (256 KiB). The default is 262,144 (256 KiB). 
   
   
 *   MessageRetentionPeriod - The number of seconds for which Amazon SQS retains
   a message. Valid values: An integer representing seconds, from 60 (1 minute)
   to 1,209,600 (14 days). The default is 345,600 (4 days). 
   
   
 *   Policy - The queue&#x27;s policy. A valid AWS policy. For more information about
   policy structure, see Overview of AWS IAM Policies
   [http://docs.aws.amazon.com/IAM/latest/UserGuide/PoliciesOverview.html] in
   the Amazon IAM User Guide. 
   
   
 *   ReceiveMessageWaitTimeSeconds - The number of seconds for which a 
   ReceiveMessage action waits for a message to arrive. Valid values: an integer
   from 0 to 20 (seconds). The default is 0. 
   
   
 *   RedrivePolicy - The parameters for the dead letter queue functionality of
   the source queue. For more information about the redrive policy and dead
   letter queues, see Using Amazon SQS Dead Letter Queues
   [http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html] 
   in the Amazon SQS Developer Guide. 
   
   The dead letter queue of a FIFO queue must also be a FIFO queue. Similarly,
   the dead letter queue of a standard queue must also be a standard queue.
   
   
 *   VisibilityTimeout - The visibility timeout for the queue. Valid values: an
   integer from 0 to 43,200 (12 hours). The default is 30. For more information
   about the visibility timeout, see Visibility Timeout
   [http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html] 
   in the Amazon SQS Developer Guide.
   
   

The following attribute applies only to FIFO (first-in-first-out) queues
[http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html]
:

 *   ContentBasedDeduplication - Enables content-based deduplication. For more
   information, see Exactly-Once Processing
   [http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html#FIFO-queues-exactly-once-processing] 
   in the Amazon SQS Developer Guide. 
   
    *  Every message must have a unique MessageDeduplicationId,
      
       *  You may provide a MessageDeduplicationId explicitly.
         
         
       *  If you aren&#x27;t able to provide a MessageDeduplicationId and you enable 
         ContentBasedDeduplication for your queue, Amazon SQS uses a SHA-256
         hash to generate the MessageDeduplicationId using the body of the
         message (but not the attributes of the message). 
         
         
       *  If you don&#x27;t provide a MessageDeduplicationId and the queue doesn&#x27;t
         have ContentBasedDeduplication set, the action fails with an error.
         
         
       *  If the queue has ContentBasedDeduplication set, your 
         MessageDeduplicationId overrides the generated one.
         
         
      
      
    *  When ContentBasedDeduplication is in effect, messages with identical
      content sent within the deduplication interval are treated as duplicates
      and only one copy of the message is delivered.
      
      
    *  You can also use ContentBasedDeduplication for messages with identical
      content to be treated as duplicates.
      
      
    *  If you send one message with ContentBasedDeduplication enabled and then
      another message with a MessageDeduplicationId that is the same as the one
      generated for the first MessageDeduplicationId, the two messages are
      treated as duplicates and only one copy of the message is delivered. 
      
      
   
   

Any other valid special request parameters (such as the following) are ignored:

 *   ApproximateNumberOfMessages 
   
   
 *   ApproximateNumberOfMessagesDelayed 
   
   
 *   ApproximateNumberOfMessagesNotVisible 
   
   
 *   CreatedTimestamp 
   
   
 *   LastModifiedTimestamp 
   
   
 *   QueueArn **/
        Attributes: QueueAttributeMap;
    }
    export interface TooManyEntriesInBatchRequest {
    }
    export interface UnsupportedOperation {
    }
  }
}
