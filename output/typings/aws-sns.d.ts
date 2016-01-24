// Type definitions for aws-sdk - Amazon Simple Notification Service
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

///<reference path="./aws-sdk-common.d.ts" />

declare module "aws-sdk" {

    /*
     * apiVersion: 2010-03-31
     * endpointPrefix: sns
     * serviceAbbreviation: Amazon SNS
     * signatureVersion: v4
     * protocol: query
     */
    export class SNS extends Service {
      constructor(options?: any);
      endpoint: Endpoint;
      addPermission(params: SNS.AddPermissionInput, callback?: (err: SNS.InvalidParameterException|SNS.InternalErrorException|SNS.AuthorizationErrorException|SNS.NotFoundException|any, data: any) => void): Request;
      confirmSubscription(params: SNS.ConfirmSubscriptionInput, callback?: (err: SNS.SubscriptionLimitExceededException|SNS.InvalidParameterException|SNS.NotFoundException|SNS.InternalErrorException|SNS.AuthorizationErrorException|any, data: SNS.ConfirmSubscriptionResponse|any) => void): Request;
      createPlatformApplication(params: SNS.CreatePlatformApplicationInput, callback?: (err: SNS.InvalidParameterException|SNS.InternalErrorException|SNS.AuthorizationErrorException|any, data: SNS.CreatePlatformApplicationResponse|any) => void): Request;
      createPlatformEndpoint(params: SNS.CreatePlatformEndpointInput, callback?: (err: SNS.InvalidParameterException|SNS.InternalErrorException|SNS.AuthorizationErrorException|SNS.NotFoundException|any, data: SNS.CreateEndpointResponse|any) => void): Request;
      createTopic(params: SNS.CreateTopicInput, callback?: (err: SNS.InvalidParameterException|SNS.TopicLimitExceededException|SNS.InternalErrorException|SNS.AuthorizationErrorException|any, data: SNS.CreateTopicResponse|any) => void): Request;
      deleteEndpoint(params: SNS.DeleteEndpointInput, callback?: (err: SNS.InvalidParameterException|SNS.InternalErrorException|SNS.AuthorizationErrorException|any, data: any) => void): Request;
      deletePlatformApplication(params: SNS.DeletePlatformApplicationInput, callback?: (err: SNS.InvalidParameterException|SNS.InternalErrorException|SNS.AuthorizationErrorException|any, data: any) => void): Request;
      deleteTopic(params: SNS.DeleteTopicInput, callback?: (err: SNS.InvalidParameterException|SNS.InternalErrorException|SNS.AuthorizationErrorException|SNS.NotFoundException|any, data: any) => void): Request;
      getEndpointAttributes(params: SNS.GetEndpointAttributesInput, callback?: (err: SNS.InvalidParameterException|SNS.InternalErrorException|SNS.AuthorizationErrorException|SNS.NotFoundException|any, data: SNS.GetEndpointAttributesResponse|any) => void): Request;
      getPlatformApplicationAttributes(params: SNS.GetPlatformApplicationAttributesInput, callback?: (err: SNS.InvalidParameterException|SNS.InternalErrorException|SNS.AuthorizationErrorException|SNS.NotFoundException|any, data: SNS.GetPlatformApplicationAttributesResponse|any) => void): Request;
      getSubscriptionAttributes(params: SNS.GetSubscriptionAttributesInput, callback?: (err: SNS.InvalidParameterException|SNS.InternalErrorException|SNS.NotFoundException|SNS.AuthorizationErrorException|any, data: SNS.GetSubscriptionAttributesResponse|any) => void): Request;
      getTopicAttributes(params: SNS.GetTopicAttributesInput, callback?: (err: SNS.InvalidParameterException|SNS.InternalErrorException|SNS.NotFoundException|SNS.AuthorizationErrorException|any, data: SNS.GetTopicAttributesResponse|any) => void): Request;
      listEndpointsByPlatformApplication(params: SNS.ListEndpointsByPlatformApplicationInput, callback?: (err: SNS.InvalidParameterException|SNS.InternalErrorException|SNS.AuthorizationErrorException|SNS.NotFoundException|any, data: SNS.ListEndpointsByPlatformApplicationResponse|any) => void): Request;
      listPlatformApplications(params: SNS.ListPlatformApplicationsInput, callback?: (err: SNS.InvalidParameterException|SNS.InternalErrorException|SNS.AuthorizationErrorException|any, data: SNS.ListPlatformApplicationsResponse|any) => void): Request;
      listSubscriptions(params: SNS.ListSubscriptionsInput, callback?: (err: SNS.InvalidParameterException|SNS.InternalErrorException|SNS.AuthorizationErrorException|any, data: SNS.ListSubscriptionsResponse|any) => void): Request;
      listSubscriptionsByTopic(params: SNS.ListSubscriptionsByTopicInput, callback?: (err: SNS.InvalidParameterException|SNS.InternalErrorException|SNS.NotFoundException|SNS.AuthorizationErrorException|any, data: SNS.ListSubscriptionsByTopicResponse|any) => void): Request;
      listTopics(params: SNS.ListTopicsInput, callback?: (err: SNS.InvalidParameterException|SNS.InternalErrorException|SNS.AuthorizationErrorException|any, data: SNS.ListTopicsResponse|any) => void): Request;
      publish(params: SNS.PublishInput, callback?: (err: SNS.InvalidParameterException|SNS.InvalidParameterValueException|SNS.InternalErrorException|SNS.NotFoundException|SNS.EndpointDisabledException|SNS.PlatformApplicationDisabledException|SNS.AuthorizationErrorException|any, data: SNS.PublishResponse|any) => void): Request;
      removePermission(params: SNS.RemovePermissionInput, callback?: (err: SNS.InvalidParameterException|SNS.InternalErrorException|SNS.AuthorizationErrorException|SNS.NotFoundException|any, data: any) => void): Request;
      setEndpointAttributes(params: SNS.SetEndpointAttributesInput, callback?: (err: SNS.InvalidParameterException|SNS.InternalErrorException|SNS.AuthorizationErrorException|SNS.NotFoundException|any, data: any) => void): Request;
      setPlatformApplicationAttributes(params: SNS.SetPlatformApplicationAttributesInput, callback?: (err: SNS.InvalidParameterException|SNS.InternalErrorException|SNS.AuthorizationErrorException|SNS.NotFoundException|any, data: any) => void): Request;
      setSubscriptionAttributes(params: SNS.SetSubscriptionAttributesInput, callback?: (err: SNS.InvalidParameterException|SNS.InternalErrorException|SNS.NotFoundException|SNS.AuthorizationErrorException|any, data: any) => void): Request;
      setTopicAttributes(params: SNS.SetTopicAttributesInput, callback?: (err: SNS.InvalidParameterException|SNS.InternalErrorException|SNS.NotFoundException|SNS.AuthorizationErrorException|any, data: any) => void): Request;
      subscribe(params: SNS.SubscribeInput, callback?: (err: SNS.SubscriptionLimitExceededException|SNS.InvalidParameterException|SNS.InternalErrorException|SNS.NotFoundException|SNS.AuthorizationErrorException|any, data: SNS.SubscribeResponse|any) => void): Request;
      unsubscribe(params: SNS.UnsubscribeInput, callback?: (err: SNS.InvalidParameterException|SNS.InternalErrorException|SNS.AuthorizationErrorException|SNS.NotFoundException|any, data: any) => void): Request;

    }

    export module SNS {
        export type ActionsList = action[];
        export type Binary = any;    // type: blob
        export type DelegatesList = delegate[];
        export type ListOfEndpoints = Endpoint[];
        export type ListOfPlatformApplications = PlatformApplication[];
        export type MapStringToString = {[key:string]: String};
        export type MessageAttributeMap = {[key:string]: MessageAttributeValue};
        export type String = string;
        export type SubscriptionAttributesMap = {[key:string]: attributeValue};
        export type SubscriptionsList = Subscription[];
        export type TopicAttributesMap = {[key:string]: attributeValue};
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
            TopicArn: topicARN;
            Label: label;
            AWSAccountId: DelegatesList;
            ActionName: ActionsList;
        }
        export interface AuthorizationErrorException {
            message?: string;
        }
        export interface ConfirmSubscriptionInput {
            TopicArn: topicARN;
            Token: token;
            AuthenticateOnUnsubscribe?: authenticateOnUnsubscribe;
        }
        export interface ConfirmSubscriptionResponse {
            SubscriptionArn?: subscriptionARN;
        }
        export interface CreateEndpointResponse {
            EndpointArn?: String;
        }
        export interface CreatePlatformApplicationInput {
            Name: String;
            Platform: String;
            Attributes: MapStringToString;
        }
        export interface CreatePlatformApplicationResponse {
            PlatformApplicationArn?: String;
        }
        export interface CreatePlatformEndpointInput {
            PlatformApplicationArn: String;
            Token: String;
            CustomUserData?: String;
            Attributes?: MapStringToString;
        }
        export interface CreateTopicInput {
            Name: topicName;
        }
        export interface CreateTopicResponse {
            TopicArn?: topicARN;
        }
        export interface DeleteEndpointInput {
            EndpointArn: String;
        }
        export interface DeletePlatformApplicationInput {
            PlatformApplicationArn: String;
        }
        export interface DeleteTopicInput {
            TopicArn: topicARN;
        }
        export interface Endpoint {
            EndpointArn?: String;
            Attributes?: MapStringToString;
        }
        export interface EndpointDisabledException {
            message?: string;
        }
        export interface GetEndpointAttributesInput {
            EndpointArn: String;
        }
        export interface GetEndpointAttributesResponse {
            Attributes?: MapStringToString;
        }
        export interface GetPlatformApplicationAttributesInput {
            PlatformApplicationArn: String;
        }
        export interface GetPlatformApplicationAttributesResponse {
            Attributes?: MapStringToString;
        }
        export interface GetSubscriptionAttributesInput {
            SubscriptionArn: subscriptionARN;
        }
        export interface GetSubscriptionAttributesResponse {
            Attributes?: SubscriptionAttributesMap;
        }
        export interface GetTopicAttributesInput {
            TopicArn: topicARN;
        }
        export interface GetTopicAttributesResponse {
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
            PlatformApplicationArn: String;
            NextToken?: String;
        }
        export interface ListEndpointsByPlatformApplicationResponse {
            Endpoints?: ListOfEndpoints;
            NextToken?: String;
        }
        export interface ListPlatformApplicationsInput {
            NextToken?: String;
        }
        export interface ListPlatformApplicationsResponse {
            PlatformApplications?: ListOfPlatformApplications;
            NextToken?: String;
        }
        export interface ListSubscriptionsByTopicInput {
            TopicArn: topicARN;
            NextToken?: nextToken;
        }
        export interface ListSubscriptionsByTopicResponse {
            Subscriptions?: SubscriptionsList;
            NextToken?: nextToken;
        }
        export interface ListSubscriptionsInput {
            NextToken?: nextToken;
        }
        export interface ListSubscriptionsResponse {
            Subscriptions?: SubscriptionsList;
            NextToken?: nextToken;
        }
        export interface ListTopicsInput {
            NextToken?: nextToken;
        }
        export interface ListTopicsResponse {
            Topics?: TopicsList;
            NextToken?: nextToken;
        }
        export interface MessageAttributeValue {
            DataType: String;
            StringValue?: String;
            BinaryValue?: Binary;
        }
        export interface NotFoundException {
            message?: string;
        }
        export interface PlatformApplication {
            PlatformApplicationArn?: String;
            Attributes?: MapStringToString;
        }
        export interface PlatformApplicationDisabledException {
            message?: string;
        }
        export interface PublishInput {
            TopicArn?: topicARN;
            TargetArn?: String;
            Message: message;
            Subject?: subject;
            MessageStructure?: messageStructure;
            MessageAttributes?: MessageAttributeMap;
        }
        export interface PublishResponse {
            MessageId?: messageId;
        }
        export interface RemovePermissionInput {
            TopicArn: topicARN;
            Label: label;
        }
        export interface SetEndpointAttributesInput {
            EndpointArn: String;
            Attributes: MapStringToString;
        }
        export interface SetPlatformApplicationAttributesInput {
            PlatformApplicationArn: String;
            Attributes: MapStringToString;
        }
        export interface SetSubscriptionAttributesInput {
            SubscriptionArn: subscriptionARN;
            AttributeName: attributeName;
            AttributeValue?: attributeValue;
        }
        export interface SetTopicAttributesInput {
            TopicArn: topicARN;
            AttributeName: attributeName;
            AttributeValue?: attributeValue;
        }
        export interface SubscribeInput {
            TopicArn: topicARN;
            Protocol: protocol;
            Endpoint?: endpoint;
        }
        export interface SubscribeResponse {
            SubscriptionArn?: subscriptionARN;
        }
        export interface Subscription {
            SubscriptionArn?: subscriptionARN;
            Owner?: account;
            Protocol?: protocol;
            Endpoint?: endpoint;
            TopicArn?: topicARN;
        }
        export interface SubscriptionLimitExceededException {
            message?: string;
        }
        export interface Topic {
            TopicArn?: topicARN;
        }
        export interface TopicLimitExceededException {
            message?: string;
        }
        export interface UnsubscribeInput {
            SubscriptionArn: subscriptionARN;
        }

    }
}
