// Type definitions for aws-sdk - Amazon Simple Notification Service
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

// COMMENTED <reference path="./aws-sdk.d.ts" />

declare module "aws-sdk" {

  /**
    * apiVersion: 2010-03-31
    * endpointPrefix: sns
    * serviceAbbreviation: Amazon SNS
    * signatureVersion: v4
    * protocol: query
    *
    * Amazon Simple Notification ServiceAmazon Simple Notification Service (Amazon
 SNS) is a web service that enables you to build distributed web-enabled
 applications. Applications can use Amazon SNS to easily push real-time
 notification messages to interested subscribers over multiple delivery
 protocols. For more information about this product see http://aws.amazon.com/sns
 [http://aws.amazon.com/sns/] . For detailed information about Amazon SNS
 features and their associated API calls, see the Amazon SNS Developer Guide
 [http://docs.aws.amazon.com/sns/latest/dg/] .
 
 We also provide SDKs that enable you to access Amazon SNS from your preferred
 programming language. The SDKs contain functionality that automatically takes
 care of tasks such as: cryptographically signing your service requests, retrying
 requests, and handling error responses. For a list of available SDKs, go to 
 Tools for Amazon Web Services [http://aws.amazon.com/tools/] .
    *
    */
  export class SNS extends Service {
    constructor(options?: any);
    endpoint: Endpoint;
    /**
     * Adds a statement to a topic&#x27;s access control policy, granting access for the
specified AWS accounts to the specified actions.
     *
     * @error InvalidParameterException Indicates that a request parameter does not comply with the associated
constraints.  
     * @error InternalErrorException Indicates an internal service error.  
     * @error AuthorizationErrorException Indicates that the user has been denied access to the requested resource.  
     * @error NotFoundException Indicates that the requested resource does not exist.  
     */
    addPermission(params: SNS.AddPermissionInput, callback?: (err: SNS.InvalidParameterException | SNS.InternalErrorException | SNS.AuthorizationErrorException | SNS.NotFoundException | any, data: any) => void): Request<any, SNS.InvalidParameterException | SNS.InternalErrorException | SNS.AuthorizationErrorException | SNS.NotFoundException | any>;
    /**
     * Verifies an endpoint owner&#x27;s intent to receive messages by validating the token
sent to the endpoint by an earlier Subscribe action. If the token is valid, the
action creates a new subscription and returns its Amazon Resource Name (ARN).
This call requires an AWS signature only when the AuthenticateOnUnsubscribe flag
is set to &quot;true&quot;.
     *
     * @error SubscriptionLimitExceededException Indicates that the customer already owns the maximum allowed number of
subscriptions.  
     * @error InvalidParameterException Indicates that a request parameter does not comply with the associated
constraints.  
     * @error NotFoundException Indicates that the requested resource does not exist.  
     * @error InternalErrorException Indicates an internal service error.  
     * @error AuthorizationErrorException Indicates that the user has been denied access to the requested resource.  
     */
    confirmSubscription(params: SNS.ConfirmSubscriptionInput, callback?: (err: SNS.SubscriptionLimitExceededException | SNS.InvalidParameterException | SNS.NotFoundException | SNS.InternalErrorException | SNS.AuthorizationErrorException | any, data: SNS.ConfirmSubscriptionResponse | any) => void): Request<SNS.ConfirmSubscriptionResponse | any, SNS.SubscriptionLimitExceededException | SNS.InvalidParameterException | SNS.NotFoundException | SNS.InternalErrorException | SNS.AuthorizationErrorException | any>;
    /**
     * Creates a platform application object for one of the supported push notification
services, such as APNS and GCM, to which devices and mobile apps may register.
You must specify PlatformPrincipal and PlatformCredential attributes when using
the CreatePlatformApplication action. The PlatformPrincipal is received from the
notification service. For APNS/APNS_SANDBOX, PlatformPrincipal is &quot;SSL
certificate&quot;. For GCM, PlatformPrincipal is not applicable. For ADM,
PlatformPrincipal is &quot;client id&quot;. The PlatformCredential is also received from
the notification service. For APNS/APNS_SANDBOX, PlatformCredential is &quot;private
key&quot;. For GCM, PlatformCredential is &quot;API key&quot;. For ADM, PlatformCredential is
&quot;client secret&quot;. The PlatformApplicationArn that is returned when using 
CreatePlatformApplication is then used as an attribute for the 
CreatePlatformEndpoint action. For more information, see Using Amazon SNS Mobile
Push Notifications [http://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html] 
.
     *
     * @error InvalidParameterException Indicates that a request parameter does not comply with the associated
constraints.  
     * @error InternalErrorException Indicates an internal service error.  
     * @error AuthorizationErrorException Indicates that the user has been denied access to the requested resource.  
     */
    createPlatformApplication(params: SNS.CreatePlatformApplicationInput, callback?: (err: SNS.InvalidParameterException | SNS.InternalErrorException | SNS.AuthorizationErrorException | any, data: SNS.CreatePlatformApplicationResponse | any) => void): Request<SNS.CreatePlatformApplicationResponse | any, SNS.InvalidParameterException | SNS.InternalErrorException | SNS.AuthorizationErrorException | any>;
    /**
     * Creates an endpoint for a device and mobile app on one of the supported push
notification services, such as GCM and APNS. CreatePlatformEndpoint requires the
PlatformApplicationArn that is returned from CreatePlatformApplication . The
EndpointArn that is returned when using CreatePlatformEndpoint can then be used
by the Publish action to send a message to a mobile app or by the Subscribe 
action for subscription to a topic. The CreatePlatformEndpoint action is
idempotent, so if the requester already owns an endpoint with the same device
token and attributes, that endpoint&#x27;s ARN is returned without creating a new
endpoint. For more information, see Using Amazon SNS Mobile Push Notifications
[http://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html] .

When using CreatePlatformEndpoint with Baidu, two attributes must be provided:
ChannelId and UserId. The token field must also contain the ChannelId. For more
information, see Creating an Amazon SNS Endpoint for Baidu
[http://docs.aws.amazon.com/sns/latest/dg/SNSMobilePushBaiduEndpoint.html] .
     *
     * @error InvalidParameterException Indicates that a request parameter does not comply with the associated
constraints.  
     * @error InternalErrorException Indicates an internal service error.  
     * @error AuthorizationErrorException Indicates that the user has been denied access to the requested resource.  
     * @error NotFoundException Indicates that the requested resource does not exist.  
     */
    createPlatformEndpoint(params: SNS.CreatePlatformEndpointInput, callback?: (err: SNS.InvalidParameterException | SNS.InternalErrorException | SNS.AuthorizationErrorException | SNS.NotFoundException | any, data: SNS.CreateEndpointResponse | any) => void): Request<SNS.CreateEndpointResponse | any, SNS.InvalidParameterException | SNS.InternalErrorException | SNS.AuthorizationErrorException | SNS.NotFoundException | any>;
    /**
     * Creates a topic to which notifications can be published. Users can create at
most 3000 topics. For more information, see http://aws.amazon.com/sns
[http://aws.amazon.com/sns/] . This action is idempotent, so if the requester
already owns a topic with the specified name, that topic&#x27;s ARN is returned
without creating a new topic.
     *
     * @error InvalidParameterException Indicates that a request parameter does not comply with the associated
constraints.  
     * @error TopicLimitExceededException Indicates that the customer already owns the maximum allowed number of topics.  
     * @error InternalErrorException Indicates an internal service error.  
     * @error AuthorizationErrorException Indicates that the user has been denied access to the requested resource.  
     */
    createTopic(params: SNS.CreateTopicInput, callback?: (err: SNS.InvalidParameterException | SNS.TopicLimitExceededException | SNS.InternalErrorException | SNS.AuthorizationErrorException | any, data: SNS.CreateTopicResponse | any) => void): Request<SNS.CreateTopicResponse | any, SNS.InvalidParameterException | SNS.TopicLimitExceededException | SNS.InternalErrorException | SNS.AuthorizationErrorException | any>;
    /**
     * Deletes the endpoint from Amazon SNS. This action is idempotent. For more
information, see Using Amazon SNS Mobile Push Notifications
[http://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html] .
     *
     * @error InvalidParameterException Indicates that a request parameter does not comply with the associated
constraints.  
     * @error InternalErrorException Indicates an internal service error.  
     * @error AuthorizationErrorException Indicates that the user has been denied access to the requested resource.  
     */
    deleteEndpoint(params: SNS.DeleteEndpointInput, callback?: (err: SNS.InvalidParameterException | SNS.InternalErrorException | SNS.AuthorizationErrorException | any, data: any) => void): Request<any, SNS.InvalidParameterException | SNS.InternalErrorException | SNS.AuthorizationErrorException | any>;
    /**
     * Deletes a platform application object for one of the supported push notification
services, such as APNS and GCM. For more information, see Using Amazon SNS
Mobile Push Notifications
[http://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html] .
     *
     * @error InvalidParameterException Indicates that a request parameter does not comply with the associated
constraints.  
     * @error InternalErrorException Indicates an internal service error.  
     * @error AuthorizationErrorException Indicates that the user has been denied access to the requested resource.  
     */
    deletePlatformApplication(params: SNS.DeletePlatformApplicationInput, callback?: (err: SNS.InvalidParameterException | SNS.InternalErrorException | SNS.AuthorizationErrorException | any, data: any) => void): Request<any, SNS.InvalidParameterException | SNS.InternalErrorException | SNS.AuthorizationErrorException | any>;
    /**
     * Deletes a topic and all its subscriptions. Deleting a topic might prevent some
messages previously sent to the topic from being delivered to subscribers. This
action is idempotent, so deleting a topic that does not exist does not result in
an error.
     *
     * @error InvalidParameterException Indicates that a request parameter does not comply with the associated
constraints.  
     * @error InternalErrorException Indicates an internal service error.  
     * @error AuthorizationErrorException Indicates that the user has been denied access to the requested resource.  
     * @error NotFoundException Indicates that the requested resource does not exist.  
     */
    deleteTopic(params: SNS.DeleteTopicInput, callback?: (err: SNS.InvalidParameterException | SNS.InternalErrorException | SNS.AuthorizationErrorException | SNS.NotFoundException | any, data: any) => void): Request<any, SNS.InvalidParameterException | SNS.InternalErrorException | SNS.AuthorizationErrorException | SNS.NotFoundException | any>;
    /**
     * Retrieves the endpoint attributes for a device on one of the supported push
notification services, such as GCM and APNS. For more information, see Using
Amazon SNS Mobile Push Notifications
[http://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html] .
     *
     * @error InvalidParameterException Indicates that a request parameter does not comply with the associated
constraints.  
     * @error InternalErrorException Indicates an internal service error.  
     * @error AuthorizationErrorException Indicates that the user has been denied access to the requested resource.  
     * @error NotFoundException Indicates that the requested resource does not exist.  
     */
    getEndpointAttributes(params: SNS.GetEndpointAttributesInput, callback?: (err: SNS.InvalidParameterException | SNS.InternalErrorException | SNS.AuthorizationErrorException | SNS.NotFoundException | any, data: SNS.GetEndpointAttributesResponse | any) => void): Request<SNS.GetEndpointAttributesResponse | any, SNS.InvalidParameterException | SNS.InternalErrorException | SNS.AuthorizationErrorException | SNS.NotFoundException | any>;
    /**
     * Retrieves the attributes of the platform application object for the supported
push notification services, such as APNS and GCM. For more information, see 
Using Amazon SNS Mobile Push Notifications
[http://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html] .
     *
     * @error InvalidParameterException Indicates that a request parameter does not comply with the associated
constraints.  
     * @error InternalErrorException Indicates an internal service error.  
     * @error AuthorizationErrorException Indicates that the user has been denied access to the requested resource.  
     * @error NotFoundException Indicates that the requested resource does not exist.  
     */
    getPlatformApplicationAttributes(params: SNS.GetPlatformApplicationAttributesInput, callback?: (err: SNS.InvalidParameterException | SNS.InternalErrorException | SNS.AuthorizationErrorException | SNS.NotFoundException | any, data: SNS.GetPlatformApplicationAttributesResponse | any) => void): Request<SNS.GetPlatformApplicationAttributesResponse | any, SNS.InvalidParameterException | SNS.InternalErrorException | SNS.AuthorizationErrorException | SNS.NotFoundException | any>;
    /**
     * Returns all of the properties of a subscription.
     *
     * @error InvalidParameterException Indicates that a request parameter does not comply with the associated
constraints.  
     * @error InternalErrorException Indicates an internal service error.  
     * @error NotFoundException Indicates that the requested resource does not exist.  
     * @error AuthorizationErrorException Indicates that the user has been denied access to the requested resource.  
     */
    getSubscriptionAttributes(params: SNS.GetSubscriptionAttributesInput, callback?: (err: SNS.InvalidParameterException | SNS.InternalErrorException | SNS.NotFoundException | SNS.AuthorizationErrorException | any, data: SNS.GetSubscriptionAttributesResponse | any) => void): Request<SNS.GetSubscriptionAttributesResponse | any, SNS.InvalidParameterException | SNS.InternalErrorException | SNS.NotFoundException | SNS.AuthorizationErrorException | any>;
    /**
     * Returns all of the properties of a topic. Topic properties returned might differ
based on the authorization of the user.
     *
     * @error InvalidParameterException Indicates that a request parameter does not comply with the associated
constraints.  
     * @error InternalErrorException Indicates an internal service error.  
     * @error NotFoundException Indicates that the requested resource does not exist.  
     * @error AuthorizationErrorException Indicates that the user has been denied access to the requested resource.  
     */
    getTopicAttributes(params: SNS.GetTopicAttributesInput, callback?: (err: SNS.InvalidParameterException | SNS.InternalErrorException | SNS.NotFoundException | SNS.AuthorizationErrorException | any, data: SNS.GetTopicAttributesResponse | any) => void): Request<SNS.GetTopicAttributesResponse | any, SNS.InvalidParameterException | SNS.InternalErrorException | SNS.NotFoundException | SNS.AuthorizationErrorException | any>;
    /**
     * Lists the endpoints and endpoint attributes for devices in a supported push
notification service, such as GCM and APNS. The results for 
ListEndpointsByPlatformApplication are paginated and return a limited list of
endpoints, up to 100. If additional records are available after the first page
results, then a NextToken string will be returned. To receive the next page, you
call ListEndpointsByPlatformApplication again using the NextToken string
received from the previous call. When there are no more records to return,
NextToken will be null. For more information, see Using Amazon SNS Mobile Push
Notifications [http://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html] .
     *
     * @error InvalidParameterException Indicates that a request parameter does not comply with the associated
constraints.  
     * @error InternalErrorException Indicates an internal service error.  
     * @error AuthorizationErrorException Indicates that the user has been denied access to the requested resource.  
     * @error NotFoundException Indicates that the requested resource does not exist.  
     */
    listEndpointsByPlatformApplication(params: SNS.ListEndpointsByPlatformApplicationInput, callback?: (err: SNS.InvalidParameterException | SNS.InternalErrorException | SNS.AuthorizationErrorException | SNS.NotFoundException | any, data: SNS.ListEndpointsByPlatformApplicationResponse | any) => void): Request<SNS.ListEndpointsByPlatformApplicationResponse | any, SNS.InvalidParameterException | SNS.InternalErrorException | SNS.AuthorizationErrorException | SNS.NotFoundException | any>;
    /**
     * Lists the platform application objects for the supported push notification
services, such as APNS and GCM. The results for ListPlatformApplications are
paginated and return a limited list of applications, up to 100. If additional
records are available after the first page results, then a NextToken string will
be returned. To receive the next page, you call ListPlatformApplications using
the NextToken string received from the previous call. When there are no more
records to return, NextToken will be null. For more information, see Using
Amazon SNS Mobile Push Notifications
[http://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html] .
     *
     * @error InvalidParameterException Indicates that a request parameter does not comply with the associated
constraints.  
     * @error InternalErrorException Indicates an internal service error.  
     * @error AuthorizationErrorException Indicates that the user has been denied access to the requested resource.  
     */
    listPlatformApplications(params: SNS.ListPlatformApplicationsInput, callback?: (err: SNS.InvalidParameterException | SNS.InternalErrorException | SNS.AuthorizationErrorException | any, data: SNS.ListPlatformApplicationsResponse | any) => void): Request<SNS.ListPlatformApplicationsResponse | any, SNS.InvalidParameterException | SNS.InternalErrorException | SNS.AuthorizationErrorException | any>;
    /**
     * Returns a list of the requester&#x27;s subscriptions. Each call returns a limited
list of subscriptions, up to 100. If there are more subscriptions, a NextToken 
is also returned. Use the NextToken parameter in a new ListSubscriptions call to
get further results.
     *
     * @error InvalidParameterException Indicates that a request parameter does not comply with the associated
constraints.  
     * @error InternalErrorException Indicates an internal service error.  
     * @error AuthorizationErrorException Indicates that the user has been denied access to the requested resource.  
     */
    listSubscriptions(params: SNS.ListSubscriptionsInput, callback?: (err: SNS.InvalidParameterException | SNS.InternalErrorException | SNS.AuthorizationErrorException | any, data: SNS.ListSubscriptionsResponse | any) => void): Request<SNS.ListSubscriptionsResponse | any, SNS.InvalidParameterException | SNS.InternalErrorException | SNS.AuthorizationErrorException | any>;
    /**
     * Returns a list of the subscriptions to a specific topic. Each call returns a
limited list of subscriptions, up to 100. If there are more subscriptions, a 
NextToken is also returned. Use the NextToken parameter in a new 
ListSubscriptionsByTopic call to get further results.
     *
     * @error InvalidParameterException Indicates that a request parameter does not comply with the associated
constraints.  
     * @error InternalErrorException Indicates an internal service error.  
     * @error NotFoundException Indicates that the requested resource does not exist.  
     * @error AuthorizationErrorException Indicates that the user has been denied access to the requested resource.  
     */
    listSubscriptionsByTopic(params: SNS.ListSubscriptionsByTopicInput, callback?: (err: SNS.InvalidParameterException | SNS.InternalErrorException | SNS.NotFoundException | SNS.AuthorizationErrorException | any, data: SNS.ListSubscriptionsByTopicResponse | any) => void): Request<SNS.ListSubscriptionsByTopicResponse | any, SNS.InvalidParameterException | SNS.InternalErrorException | SNS.NotFoundException | SNS.AuthorizationErrorException | any>;
    /**
     * Returns a list of the requester&#x27;s topics. Each call returns a limited list of
topics, up to 100. If there are more topics, a NextToken is also returned. Use
the NextToken parameter in a new ListTopics call to get further results.
     *
     * @error InvalidParameterException Indicates that a request parameter does not comply with the associated
constraints.  
     * @error InternalErrorException Indicates an internal service error.  
     * @error AuthorizationErrorException Indicates that the user has been denied access to the requested resource.  
     */
    listTopics(params: SNS.ListTopicsInput, callback?: (err: SNS.InvalidParameterException | SNS.InternalErrorException | SNS.AuthorizationErrorException | any, data: SNS.ListTopicsResponse | any) => void): Request<SNS.ListTopicsResponse | any, SNS.InvalidParameterException | SNS.InternalErrorException | SNS.AuthorizationErrorException | any>;
    /**
     * Sends a message to all of a topic&#x27;s subscribed endpoints. When a messageId is
returned, the message has been saved and Amazon SNS will attempt to deliver it
to the topic&#x27;s subscribers shortly. The format of the outgoing message to each
subscribed endpoint depends on the notification protocol selected.

To use the Publish action for sending a message to a mobile endpoint, such as an
app on a Kindle device or mobile phone, you must specify the EndpointArn. The
EndpointArn is returned when making a call with the CreatePlatformEndpoint 
action. The second example below shows a request and response for publishing to
a mobile endpoint.
     *
     * @error InvalidParameterException Indicates that a request parameter does not comply with the associated
constraints.  
     * @error InvalidParameterValueException Indicates that a request parameter does not comply with the associated
constraints.  
     * @error InternalErrorException Indicates an internal service error.  
     * @error NotFoundException Indicates that the requested resource does not exist.  
     * @error EndpointDisabledException Exception error indicating endpoint disabled.  
     * @error PlatformApplicationDisabledException Exception error indicating platform application disabled.  
     * @error AuthorizationErrorException Indicates that the user has been denied access to the requested resource.  
     */
    publish(params: SNS.PublishInput, callback?: (err: SNS.InvalidParameterException | SNS.InvalidParameterValueException | SNS.InternalErrorException | SNS.NotFoundException | SNS.EndpointDisabledException | SNS.PlatformApplicationDisabledException | SNS.AuthorizationErrorException | any, data: SNS.PublishResponse | any) => void): Request<SNS.PublishResponse | any, SNS.InvalidParameterException | SNS.InvalidParameterValueException | SNS.InternalErrorException | SNS.NotFoundException | SNS.EndpointDisabledException | SNS.PlatformApplicationDisabledException | SNS.AuthorizationErrorException | any>;
    /**
     * Removes a statement from a topic&#x27;s access control policy.
     *
     * @error InvalidParameterException Indicates that a request parameter does not comply with the associated
constraints.  
     * @error InternalErrorException Indicates an internal service error.  
     * @error AuthorizationErrorException Indicates that the user has been denied access to the requested resource.  
     * @error NotFoundException Indicates that the requested resource does not exist.  
     */
    removePermission(params: SNS.RemovePermissionInput, callback?: (err: SNS.InvalidParameterException | SNS.InternalErrorException | SNS.AuthorizationErrorException | SNS.NotFoundException | any, data: any) => void): Request<any, SNS.InvalidParameterException | SNS.InternalErrorException | SNS.AuthorizationErrorException | SNS.NotFoundException | any>;
    /**
     * Sets the attributes for an endpoint for a device on one of the supported push
notification services, such as GCM and APNS. For more information, see Using
Amazon SNS Mobile Push Notifications
[http://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html] .
     *
     * @error InvalidParameterException Indicates that a request parameter does not comply with the associated
constraints.  
     * @error InternalErrorException Indicates an internal service error.  
     * @error AuthorizationErrorException Indicates that the user has been denied access to the requested resource.  
     * @error NotFoundException Indicates that the requested resource does not exist.  
     */
    setEndpointAttributes(params: SNS.SetEndpointAttributesInput, callback?: (err: SNS.InvalidParameterException | SNS.InternalErrorException | SNS.AuthorizationErrorException | SNS.NotFoundException | any, data: any) => void): Request<any, SNS.InvalidParameterException | SNS.InternalErrorException | SNS.AuthorizationErrorException | SNS.NotFoundException | any>;
    /**
     * Sets the attributes of the platform application object for the supported push
notification services, such as APNS and GCM. For more information, see Using
Amazon SNS Mobile Push Notifications
[http://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html] .
     *
     * @error InvalidParameterException Indicates that a request parameter does not comply with the associated
constraints.  
     * @error InternalErrorException Indicates an internal service error.  
     * @error AuthorizationErrorException Indicates that the user has been denied access to the requested resource.  
     * @error NotFoundException Indicates that the requested resource does not exist.  
     */
    setPlatformApplicationAttributes(params: SNS.SetPlatformApplicationAttributesInput, callback?: (err: SNS.InvalidParameterException | SNS.InternalErrorException | SNS.AuthorizationErrorException | SNS.NotFoundException | any, data: any) => void): Request<any, SNS.InvalidParameterException | SNS.InternalErrorException | SNS.AuthorizationErrorException | SNS.NotFoundException | any>;
    /**
     * Allows a subscription owner to set an attribute of the topic to a new value.
     *
     * @error InvalidParameterException Indicates that a request parameter does not comply with the associated
constraints.  
     * @error InternalErrorException Indicates an internal service error.  
     * @error NotFoundException Indicates that the requested resource does not exist.  
     * @error AuthorizationErrorException Indicates that the user has been denied access to the requested resource.  
     */
    setSubscriptionAttributes(params: SNS.SetSubscriptionAttributesInput, callback?: (err: SNS.InvalidParameterException | SNS.InternalErrorException | SNS.NotFoundException | SNS.AuthorizationErrorException | any, data: any) => void): Request<any, SNS.InvalidParameterException | SNS.InternalErrorException | SNS.NotFoundException | SNS.AuthorizationErrorException | any>;
    /**
     * Allows a topic owner to set an attribute of the topic to a new value.
     *
     * @error InvalidParameterException Indicates that a request parameter does not comply with the associated
constraints.  
     * @error InternalErrorException Indicates an internal service error.  
     * @error NotFoundException Indicates that the requested resource does not exist.  
     * @error AuthorizationErrorException Indicates that the user has been denied access to the requested resource.  
     */
    setTopicAttributes(params: SNS.SetTopicAttributesInput, callback?: (err: SNS.InvalidParameterException | SNS.InternalErrorException | SNS.NotFoundException | SNS.AuthorizationErrorException | any, data: any) => void): Request<any, SNS.InvalidParameterException | SNS.InternalErrorException | SNS.NotFoundException | SNS.AuthorizationErrorException | any>;
    /**
     * Prepares to subscribe an endpoint by sending the endpoint a confirmation
message. To actually create a subscription, the endpoint owner must call the 
ConfirmSubscription action with the token from the confirmation message.
Confirmation tokens are valid for three days.
     *
     * @error SubscriptionLimitExceededException Indicates that the customer already owns the maximum allowed number of
subscriptions.  
     * @error InvalidParameterException Indicates that a request parameter does not comply with the associated
constraints.  
     * @error InternalErrorException Indicates an internal service error.  
     * @error NotFoundException Indicates that the requested resource does not exist.  
     * @error AuthorizationErrorException Indicates that the user has been denied access to the requested resource.  
     */
    subscribe(params: SNS.SubscribeInput, callback?: (err: SNS.SubscriptionLimitExceededException | SNS.InvalidParameterException | SNS.InternalErrorException | SNS.NotFoundException | SNS.AuthorizationErrorException | any, data: SNS.SubscribeResponse | any) => void): Request<SNS.SubscribeResponse | any, SNS.SubscriptionLimitExceededException | SNS.InvalidParameterException | SNS.InternalErrorException | SNS.NotFoundException | SNS.AuthorizationErrorException | any>;
    /**
     * Deletes a subscription. If the subscription requires authentication for
deletion, only the owner of the subscription or the topic&#x27;s owner can
unsubscribe, and an AWS signature is required. If the Unsubscribe call does not
require authentication and the requester is not the subscription owner, a final
cancellation message is delivered to the endpoint, so that the endpoint owner
can easily resubscribe to the topic if the Unsubscribe request was unintended.
     *
     * @error InvalidParameterException Indicates that a request parameter does not comply with the associated
constraints.  
     * @error InternalErrorException Indicates an internal service error.  
     * @error AuthorizationErrorException Indicates that the user has been denied access to the requested resource.  
     * @error NotFoundException Indicates that the requested resource does not exist.  
     */
    unsubscribe(params: SNS.UnsubscribeInput, callback?: (err: SNS.InvalidParameterException | SNS.InternalErrorException | SNS.AuthorizationErrorException | SNS.NotFoundException | any, data: any) => void): Request<any, SNS.InvalidParameterException | SNS.InternalErrorException | SNS.AuthorizationErrorException | SNS.NotFoundException | any>;

  }

  export module SNS {

    export type ActionsList = action[];

    export type Binary = any;

    export type DelegatesList = delegate[];

    export type ListOfEndpoints = Endpoint[];

    export type ListOfPlatformApplications = PlatformApplication[];

    export type MapStringToString = { [key: string]: String };

    export type MessageAttributeMap = { [key: string]: MessageAttributeValue };

    export type String = string;

    export type SubscriptionAttributesMap = { [key: string]: attributeValue };

    export type SubscriptionsList = Subscription[];

    export type TopicAttributesMap = { [key: string]: attributeValue };

    export type TopicsList = Topic[];

    export type account = string;

    export type action = string;

    export type attributeName = string;

    export type attributeValue = string;

    export type authenticateOnUnsubscribe = string;

    export type delegate = string;

    export type endpoint = string;

    export type label = string;

    export type message = string;

    export type messageId = string;

    export type messageStructure = string;

    export type nextToken = string;

    export type protocol = string;

    export type subject = string;

    export type subscriptionARN = string;

    export type token = string;

    export type topicARN = string;

    export type topicName = string;

    export interface AddPermissionInput {
      /** The ARN of the topic whose access control policy you wish to modify. **/
      TopicArn: topicARN;
      /** A unique identifier for the new policy statement. **/
      Label: label;
      /** The AWS account IDs of the users (principals) who will be given access to the
specified actions. The users must have AWS accounts, but do not need to be
signed up for this service. **/
      AWSAccountId: DelegatesList;
      /** The action you want to allow for the specified principal(s).

Valid values: any Amazon SNS action name. **/
      ActionName: ActionsList;
    }
    export interface AuthorizationErrorException {
      message?: string;
    }
    export interface ConfirmSubscriptionInput {
      /** The ARN of the topic for which you wish to confirm a subscription. **/
      TopicArn: topicARN;
      /** Short-lived token sent to an endpoint during the Subscribe action. **/
      Token: token;
      /** Disallows unauthenticated unsubscribes of the subscription. If the value of this
parameter is true and the request has an AWS signature, then only the topic
owner and the subscription owner can unsubscribe the endpoint. The unsubscribe
action requires AWS authentication. **/
      AuthenticateOnUnsubscribe?: authenticateOnUnsubscribe;
    }
    export interface ConfirmSubscriptionResponse {
      /** The ARN of the created subscription. **/
      SubscriptionArn?: subscriptionARN;
    }
    export interface CreateEndpointResponse {
      /** EndpointArn returned from CreateEndpoint action. **/
      EndpointArn?: String;
    }
    export interface CreatePlatformApplicationInput {
      /** Application names must be made up of only uppercase and lowercase ASCII letters,
numbers, underscores, hyphens, and periods, and must be between 1 and 256
characters long. **/
      Name: String;
      /** The following platforms are supported: ADM (Amazon Device Messaging), APNS
(Apple Push Notification Service), APNS_SANDBOX, and GCM (Google Cloud
Messaging). **/
      Platform: String;
      /** For a list of attributes, see SetPlatformApplicationAttributes
[http://docs.aws.amazon.com/sns/latest/api/API_SetPlatformApplicationAttributes.html] **/
      Attributes: MapStringToString;
    }
    export interface CreatePlatformApplicationResponse {
      /** PlatformApplicationArn is returned. **/
      PlatformApplicationArn?: String;
    }
    export interface CreatePlatformEndpointInput {
      /** PlatformApplicationArn returned from CreatePlatformApplication is used to create
a an endpoint. **/
      PlatformApplicationArn: String;
      /** Unique identifier created by the notification service for an app on a device.
The specific name for Token will vary, depending on which notification service
is being used. For example, when using APNS as the notification service, you
need the device token. Alternatively, when using GCM or ADM, the device token
equivalent is called the registration ID. **/
      Token: String;
      /** Arbitrary user data to associate with the endpoint. Amazon SNS does not use this
data. The data must be in UTF-8 format and less than 2KB. **/
      CustomUserData?: String;
      /** For a list of attributes, see SetEndpointAttributes
[http://docs.aws.amazon.com/sns/latest/api/API_SetEndpointAttributes.html] . **/
      Attributes?: MapStringToString;
    }
    export interface CreateTopicInput {
      /** The name of the topic you want to create.

Constraints: Topic names must be made up of only uppercase and lowercase ASCII
letters, numbers, underscores, and hyphens, and must be between 1 and 256
characters long. **/
      Name: topicName;
    }
    export interface CreateTopicResponse {
      /** The Amazon Resource Name (ARN) assigned to the created topic. **/
      TopicArn?: topicARN;
    }
    export interface DeleteEndpointInput {
      /** EndpointArn of endpoint to delete. **/
      EndpointArn: String;
    }
    export interface DeletePlatformApplicationInput {
      /** PlatformApplicationArn of platform application object to delete. **/
      PlatformApplicationArn: String;
    }
    export interface DeleteTopicInput {
      /** The ARN of the topic you want to delete. **/
      TopicArn: topicARN;
    }
    export interface Endpoint {
      /** EndpointArn for mobile app and device. **/
      EndpointArn?: String;
      /** Attributes for endpoint. **/
      Attributes?: MapStringToString;
    }
    export interface EndpointDisabledException {
      /** Message for endpoint disabled. **/
      message?: string;
    }
    export interface GetEndpointAttributesInput {
      /** EndpointArn for GetEndpointAttributes input. **/
      EndpointArn: String;
    }
    export interface GetEndpointAttributesResponse {
      /** Attributes include the following:

&amp;#42; CustomUserData -- arbitrary user data to associate with the endpoint. Amazon
 SNS does not use this data. The data must be in UTF-8 format and less than
 2KB.
* Enabled -- flag that enables/disables delivery to the endpoint. Amazon SNS
 will set this to false when a notification service indicates to Amazon SNS
 that the endpoint is invalid. Users can set it back to true, typically after
 updating Token.
* Token -- device token, also referred to as a registration id, for an app and
 mobile device. This is returned from the notification service when an app and
 mobile device are registered with the notification service. **/
      Attributes?: MapStringToString;
    }
    export interface GetPlatformApplicationAttributesInput {
      /** PlatformApplicationArn for GetPlatformApplicationAttributesInput. **/
      PlatformApplicationArn: String;
    }
    export interface GetPlatformApplicationAttributesResponse {
      /** Attributes include the following:

&amp;#42; EventEndpointCreated -- Topic ARN to which EndpointCreated event
 notifications should be sent.
* EventEndpointDeleted -- Topic ARN to which EndpointDeleted event
 notifications should be sent.
* EventEndpointUpdated -- Topic ARN to which EndpointUpdate event notifications
 should be sent.
* EventDeliveryFailure -- Topic ARN to which DeliveryFailure event
 notifications should be sent upon Direct Publish delivery failure (permanent)
 to one of the application&#x27;s endpoints. **/
      Attributes?: MapStringToString;
    }
    export interface GetSubscriptionAttributesInput {
      /** The ARN of the subscription whose properties you want to get. **/
      SubscriptionArn: subscriptionARN;
    }
    export interface GetSubscriptionAttributesResponse {
      /** A map of the subscription&#x27;s attributes. Attributes in this map include the
following:

&amp;#42; SubscriptionArn -- the subscription&#x27;s ARN
* TopicArn -- the topic ARN that the subscription is associated with
* Owner -- the AWS account ID of the subscription&#x27;s owner
* ConfirmationWasAuthenticated -- true if the subscription confirmation request
 was authenticated
* DeliveryPolicy -- the JSON serialization of the subscription&#x27;s delivery
 policy
* EffectiveDeliveryPolicy -- the JSON serialization of the effective delivery
 policy that takes into account the topic delivery policy and account system
 defaults **/
      Attributes?: SubscriptionAttributesMap;
    }
    export interface GetTopicAttributesInput {
      /** The ARN of the topic whose properties you want to get. **/
      TopicArn: topicARN;
    }
    export interface GetTopicAttributesResponse {
      /** A map of the topic&#x27;s attributes. Attributes in this map include the following:

&amp;#42; TopicArn -- the topic&#x27;s ARN
* Owner -- the AWS account ID of the topic&#x27;s owner
* Policy -- the JSON serialization of the topic&#x27;s access control policy
* DisplayName -- the human-readable name used in the &quot;From&quot; field for
 notifications to email and email-json endpoints
* SubscriptionsPending -- the number of subscriptions pending confirmation on
 this topic
* SubscriptionsConfirmed -- the number of confirmed subscriptions on this topic
* SubscriptionsDeleted -- the number of deleted subscriptions on this topic
* DeliveryPolicy -- the JSON serialization of the topic&#x27;s delivery policy
* EffectiveDeliveryPolicy -- the JSON serialization of the effective delivery
 policy that takes into account system defaults **/
      Attributes?: TopicAttributesMap;
    }
    export interface InternalErrorException {
      message?: string;
    }
    export interface InvalidParameterException {
      message?: string;
    }
    export interface InvalidParameterValueException {
      message?: string;
    }
    export interface ListEndpointsByPlatformApplicationInput {
      /** PlatformApplicationArn for ListEndpointsByPlatformApplicationInput action. **/
      PlatformApplicationArn: String;
      /** NextToken string is used when calling ListEndpointsByPlatformApplication action
to retrieve additional records that are available after the first page results. **/
      NextToken?: String;
    }
    export interface ListEndpointsByPlatformApplicationResponse {
      /** Endpoints returned for ListEndpointsByPlatformApplication action. **/
      Endpoints?: ListOfEndpoints;
      /** NextToken string is returned when calling ListEndpointsByPlatformApplication
action if additional records are available after the first page results. **/
      NextToken?: String;
    }
    export interface ListPlatformApplicationsInput {
      /** NextToken string is used when calling ListPlatformApplications action to
retrieve additional records that are available after the first page results. **/
      NextToken?: String;
    }
    export interface ListPlatformApplicationsResponse {
      /** Platform applications returned when calling ListPlatformApplications action. **/
      PlatformApplications?: ListOfPlatformApplications;
      /** NextToken string is returned when calling ListPlatformApplications action if
additional records are available after the first page results. **/
      NextToken?: String;
    }
    export interface ListSubscriptionsByTopicInput {
      /** The ARN of the topic for which you wish to find subscriptions. **/
      TopicArn: topicARN;
      /** Token returned by the previous ListSubscriptionsByTopic request. **/
      NextToken?: nextToken;
    }
    export interface ListSubscriptionsByTopicResponse {
      /** A list of subscriptions. **/
      Subscriptions?: SubscriptionsList;
      /** Token to pass along to the next ListSubscriptionsByTopic request. This element
is returned if there are more subscriptions to retrieve. **/
      NextToken?: nextToken;
    }
    export interface ListSubscriptionsInput {
      /** Token returned by the previous ListSubscriptions request. **/
      NextToken?: nextToken;
    }
    export interface ListSubscriptionsResponse {
      /** A list of subscriptions. **/
      Subscriptions?: SubscriptionsList;
      /** Token to pass along to the next ListSubscriptions request. This element is
returned if there are more subscriptions to retrieve. **/
      NextToken?: nextToken;
    }
    export interface ListTopicsInput {
      /** Token returned by the previous ListTopics request. **/
      NextToken?: nextToken;
    }
    export interface ListTopicsResponse {
      /** A list of topic ARNs. **/
      Topics?: TopicsList;
      /** Token to pass along to the next ListTopics request. This element is returned if
there are additional topics to retrieve. **/
      NextToken?: nextToken;
    }
    export interface MessageAttributeValue {
      /** Amazon SNS supports the following logical data types: String, Number, and
Binary. For more information, see Message Attribute Data Types
[http://docs.aws.amazon.com/sns/latest/dg/SNSMessageAttributes.html#SNSMessageAttributes.DataTypes] 
. **/
      DataType: String;
      /** Strings are Unicode with UTF8 binary encoding. For a list of code values, see 
http://en.wikipedia.org/wiki/ASCII#ASCII_printable_characters
[http://en.wikipedia.org/wiki/ASCII#ASCII_printable_characters] . **/
      StringValue?: String;
      /** Binary type attributes can store any binary data, for example, compressed data,
encrypted data, or images. **/
      BinaryValue?: Binary;
    }
    export interface NotFoundException {
      message?: string;
    }
    export interface PlatformApplication {
      /** PlatformApplicationArn for platform application object. **/
      PlatformApplicationArn?: String;
      /** Attributes for platform application object. **/
      Attributes?: MapStringToString;
    }
    export interface PlatformApplicationDisabledException {
      /** Message for platform application disabled. **/
      message?: string;
    }
    export interface PublishInput {
      /** The topic you want to publish to. **/
      TopicArn?: topicARN;
      /** Either TopicArn or EndpointArn, but not both. **/
      TargetArn?: String;
      /** The message you want to send to the topic.

If you want to send the same message to all transport protocols, include the
text of the message as a String value.

If you want to send different messages for each transport protocol, set the
value of the MessageStructure parameter to json and use a JSON object for the 
Message parameter. See the Examples section for the format of the JSON object.

Constraints: Messages must be UTF-8 encoded strings at most 256 KB in size
(262144 bytes, not 262144 characters).

JSON-specific constraints: &amp;#42; Keys in the JSON object that correspond to
 supported transport protocols must have simple JSON string values.
* The values will be parsed (unescaped) before they
 are used in outgoing messages.
* Outbound notifications are JSON encoded (meaning
 that the characters will be reescaped for sending).
* Values have a minimum length of 0 (the empty
 string, &quot;&quot;, is allowed).
* Values have a maximum length bounded by the overall
 message size (so, including multiple protocols may limit message sizes).
* Non-string values will cause the key to be ignored.
* Keys that do not correspond to supported transport
 protocols are ignored.
* Duplicate keys are not allowed.
* Failure to parse or validate any key or value in
 the message will cause the Publish call to return an error (no partial
 delivery). **/
      Message: message;
      /** Optional parameter to be used as the &quot;Subject&quot; line when the message is
delivered to email endpoints. This field will also be included, if present, in
the standard JSON messages delivered to other endpoints.

Constraints: Subjects must be ASCII text that begins with a letter, number, or
punctuation mark; must not include line breaks or control characters; and must
be less than 100 characters long. **/
      Subject?: subject;
      /** Set MessageStructure to json if you want to send a different message for each
protocol. For example, using one publish action, you can send a short message to
your SMS subscribers and a longer message to your email subscribers. If you set 
MessageStructure to json , the value of the Message parameter must:

&amp;#42; be a syntactically valid JSON object; and
* contain at least a top-level JSON key of &quot;default&quot; with a value that is a
 string.

You can define other top-level keys that define the message you want to send to
a specific transport protocol (e.g., &quot;http&quot;).

For information about sending different messages for each protocol using the AWS
Management Console, go to Create Different Messages for Each Protocol
[http://docs.aws.amazon.com/sns/latest/gsg/Publish.html#sns-message-formatting-by-protocol] 
in the Amazon Simple Notification Service Getting Started Guide .

Valid value: json **/
      MessageStructure?: messageStructure;
      /** Message attributes for Publish action. **/
      MessageAttributes?: MessageAttributeMap;
    }
    export interface PublishResponse {
      /** Unique identifier assigned to the published message.

Length Constraint: Maximum 100 characters **/
      MessageId?: messageId;
    }
    export interface RemovePermissionInput {
      /** The ARN of the topic whose access control policy you wish to modify. **/
      TopicArn: topicARN;
      /** The unique label of the statement you want to remove. **/
      Label: label;
    }
    export interface SetEndpointAttributesInput {
      /** EndpointArn used for SetEndpointAttributes action. **/
      EndpointArn: String;
      /** A map of the endpoint attributes. Attributes in this map include the following:

&amp;#42; CustomUserData -- arbitrary user data to associate with the endpoint. Amazon
 SNS does not use this data. The data must be in UTF-8 format and less than
 2KB.
* Enabled -- flag that enables/disables delivery to the endpoint. Amazon SNS
 will set this to false when a notification service indicates to Amazon SNS
 that the endpoint is invalid. Users can set it back to true, typically after
 updating Token.
* Token -- device token, also referred to as a registration id, for an app and
 mobile device. This is returned from the notification service when an app and
 mobile device are registered with the notification service. **/
      Attributes: MapStringToString;
    }
    export interface SetPlatformApplicationAttributesInput {
      /** PlatformApplicationArn for SetPlatformApplicationAttributes action. **/
      PlatformApplicationArn: String;
      /** A map of the platform application attributes. Attributes in this map include the
following:

&amp;#42; PlatformCredential -- The credential received from the notification service.
 For APNS/APNS_SANDBOX, PlatformCredential is &quot;private key&quot;. For GCM,
 PlatformCredential is &quot;API key&quot;. For ADM, PlatformCredential is &quot;client
 secret&quot;.
* PlatformPrincipal -- The principal received from the notification service.
 For APNS/APNS_SANDBOX, PlatformPrincipal is &quot;SSL certificate&quot;. For GCM,
 PlatformPrincipal is not applicable. For ADM, PlatformPrincipal is &quot;client
 id&quot;.
* EventEndpointCreated -- Topic ARN to which EndpointCreated event
 notifications should be sent.
* EventEndpointDeleted -- Topic ARN to which EndpointDeleted event
 notifications should be sent.
* EventEndpointUpdated -- Topic ARN to which EndpointUpdate event notifications
 should be sent.
* EventDeliveryFailure -- Topic ARN to which DeliveryFailure event
 notifications should be sent upon Direct Publish delivery failure (permanent)
 to one of the application&#x27;s endpoints. **/
      Attributes: MapStringToString;
    }
    export interface SetSubscriptionAttributesInput {
      /** The ARN of the subscription to modify. **/
      SubscriptionArn: subscriptionARN;
      /** The name of the attribute you want to set. Only a subset of the subscriptions
attributes are mutable.

Valid values: DeliveryPolicy | RawMessageDelivery **/
      AttributeName: attributeName;
      /** The new value for the attribute in JSON format. **/
      AttributeValue?: attributeValue;
    }
    export interface SetTopicAttributesInput {
      /** The ARN of the topic to modify. **/
      TopicArn: topicARN;
      /** The name of the attribute you want to set. Only a subset of the topic&#x27;s
attributes are mutable.

Valid values: Policy | DisplayName | DeliveryPolicy **/
      AttributeName: attributeName;
      /** The new value for the attribute. **/
      AttributeValue?: attributeValue;
    }
    export interface SubscribeInput {
      /** The ARN of the topic you want to subscribe to. **/
      TopicArn: topicARN;
      /** The protocol you want to use. Supported protocols include:

&amp;#42; http -- delivery of JSON-encoded message via HTTP POST
* https -- delivery of JSON-encoded message via HTTPS POST
* email -- delivery of message via SMTP
* email-json -- delivery of JSON-encoded message via SMTP
* sms -- delivery of message via SMS
* sqs -- delivery of JSON-encoded message to an Amazon SQS queue
* application -- delivery of JSON-encoded message to an EndpointArn for a
 mobile app and device. **/
      Protocol: protocol;
      /** The endpoint that you want to receive notifications. Endpoints vary by protocol:

&amp;#42; For the http protocol, the endpoint is an URL beginning with &quot;http://&quot;
* For the https protocol, the endpoint is a URL beginning with &quot;https://&quot;
* For the email protocol, the endpoint is an email address
* For the email-json protocol, the endpoint is an email address
* For the sms protocol, the endpoint is a phone number of an SMS-enabled device
* For the sqs protocol, the endpoint is the ARN of an Amazon SQS queue
* For the application protocol, the endpoint is the EndpointArn of a mobile app
 and device. **/
      Endpoint?: endpoint;
    }
    export interface SubscribeResponse {
      /** The ARN of the subscription, if the service was able to create a subscription
immediately (without requiring endpoint owner confirmation). **/
      SubscriptionArn?: subscriptionARN;
    }
    export interface Subscription {
      /** The subscription&#x27;s ARN. **/
      SubscriptionArn?: subscriptionARN;
      /** The subscription&#x27;s owner. **/
      Owner?: account;
      /** The subscription&#x27;s protocol. **/
      Protocol?: protocol;
      /** The subscription&#x27;s endpoint (format depends on the protocol). **/
      Endpoint?: endpoint;
      /** The ARN of the subscription&#x27;s topic. **/
      TopicArn?: topicARN;
    }
    export interface SubscriptionLimitExceededException {
      message?: string;
    }
    export interface Topic {
      /** The topic&#x27;s ARN. **/
      TopicArn?: topicARN;
    }
    export interface TopicLimitExceededException {
      message?: string;
    }
    export interface UnsubscribeInput {
      /** The ARN of the subscription to be deleted. **/
      SubscriptionArn: subscriptionARN;
    }
  }
}
