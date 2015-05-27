// DO NOT EDIT!
//
declare module "aws-sdk" {
    export class SNS {
      constructor(options?: any);
      addPermission(params: AddPermissionInput, callback: (err: InvalidParameterException|InternalErrorException|AuthorizationErrorException|NotFoundException|any, data: any) => void): void;
      confirmSubscription(params: ConfirmSubscriptionInput, callback: (err: SubscriptionLimitExceededException|InvalidParameterException|NotFoundException|InternalErrorException|AuthorizationErrorException|any, data: ConfirmSubscriptionResponse|any) => void): void;
      createPlatformApplication(params: CreatePlatformApplicationInput, callback: (err: InvalidParameterException|InternalErrorException|AuthorizationErrorException|any, data: CreatePlatformApplicationResponse|any) => void): void;
      createPlatformEndpoint(params: CreatePlatformEndpointInput, callback: (err: InvalidParameterException|InternalErrorException|AuthorizationErrorException|NotFoundException|any, data: CreateEndpointResponse|any) => void): void;
      createTopic(params: CreateTopicInput, callback: (err: InvalidParameterException|TopicLimitExceededException|InternalErrorException|AuthorizationErrorException|any, data: CreateTopicResponse|any) => void): void;
      deleteEndpoint(params: DeleteEndpointInput, callback: (err: InvalidParameterException|InternalErrorException|AuthorizationErrorException|any, data: any) => void): void;
      deletePlatformApplication(params: DeletePlatformApplicationInput, callback: (err: InvalidParameterException|InternalErrorException|AuthorizationErrorException|any, data: any) => void): void;
      deleteTopic(params: DeleteTopicInput, callback: (err: InvalidParameterException|InternalErrorException|AuthorizationErrorException|NotFoundException|any, data: any) => void): void;
      getEndpointAttributes(params: GetEndpointAttributesInput, callback: (err: InvalidParameterException|InternalErrorException|AuthorizationErrorException|NotFoundException|any, data: GetEndpointAttributesResponse|any) => void): void;
      getPlatformApplicationAttributes(params: GetPlatformApplicationAttributesInput, callback: (err: InvalidParameterException|InternalErrorException|AuthorizationErrorException|NotFoundException|any, data: GetPlatformApplicationAttributesResponse|any) => void): void;
      getSubscriptionAttributes(params: GetSubscriptionAttributesInput, callback: (err: InvalidParameterException|InternalErrorException|NotFoundException|AuthorizationErrorException|any, data: GetSubscriptionAttributesResponse|any) => void): void;
      getTopicAttributes(params: GetTopicAttributesInput, callback: (err: InvalidParameterException|InternalErrorException|NotFoundException|AuthorizationErrorException|any, data: GetTopicAttributesResponse|any) => void): void;
      listEndpointsByPlatformApplication(params: ListEndpointsByPlatformApplicationInput, callback: (err: InvalidParameterException|InternalErrorException|AuthorizationErrorException|NotFoundException|any, data: ListEndpointsByPlatformApplicationResponse|any) => void): void;
      listPlatformApplications(params: ListPlatformApplicationsInput, callback: (err: InvalidParameterException|InternalErrorException|AuthorizationErrorException|any, data: ListPlatformApplicationsResponse|any) => void): void;
      listSubscriptions(params: ListSubscriptionsInput, callback: (err: InvalidParameterException|InternalErrorException|AuthorizationErrorException|any, data: ListSubscriptionsResponse|any) => void): void;
      listSubscriptionsByTopic(params: ListSubscriptionsByTopicInput, callback: (err: InvalidParameterException|InternalErrorException|NotFoundException|AuthorizationErrorException|any, data: ListSubscriptionsByTopicResponse|any) => void): void;
      listTopics(params: ListTopicsInput, callback: (err: InvalidParameterException|InternalErrorException|AuthorizationErrorException|any, data: ListTopicsResponse|any) => void): void;
      publish(params: PublishInput, callback: (err: InvalidParameterException|InvalidParameterValueException|InternalErrorException|NotFoundException|EndpointDisabledException|PlatformApplicationDisabledException|AuthorizationErrorException|any, data: PublishResponse|any) => void): void;
      removePermission(params: RemovePermissionInput, callback: (err: InvalidParameterException|InternalErrorException|AuthorizationErrorException|NotFoundException|any, data: any) => void): void;
      setEndpointAttributes(params: SetEndpointAttributesInput, callback: (err: InvalidParameterException|InternalErrorException|AuthorizationErrorException|NotFoundException|any, data: any) => void): void;
      setPlatformApplicationAttributes(params: SetPlatformApplicationAttributesInput, callback: (err: InvalidParameterException|InternalErrorException|AuthorizationErrorException|NotFoundException|any, data: any) => void): void;
      setSubscriptionAttributes(params: SetSubscriptionAttributesInput, callback: (err: InvalidParameterException|InternalErrorException|NotFoundException|AuthorizationErrorException|any, data: any) => void): void;
      setTopicAttributes(params: SetTopicAttributesInput, callback: (err: InvalidParameterException|InternalErrorException|NotFoundException|AuthorizationErrorException|any, data: any) => void): void;
      subscribe(params: SubscribeInput, callback: (err: SubscriptionLimitExceededException|InvalidParameterException|InternalErrorException|NotFoundException|AuthorizationErrorException|any, data: SubscribeResponse|any) => void): void;
      unsubscribe(params: UnsubscribeInput, callback: (err: InvalidParameterException|InternalErrorException|AuthorizationErrorException|NotFoundException|any, data: any) => void): void;
    }

    export type ActionsList = Array<action>;

    export interface AddPermissionInput {
      TopicArn: topicARN;
      Label: label;
      AWSAccountId: DelegatesList;
      ActionName: ActionsList;
    }


    export interface AuthorizationErrorException {
      message?: string;
    }


    export type Binary = any; // not really - it was 'blob' instead - must fix this one

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


    export type DelegatesList = Array<delegate>;

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


    export type ListOfEndpoints = Array<Endpoint>;

    export type ListOfPlatformApplications = Array<PlatformApplication>;

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


    export type MapStringToString = any; // not really - it was 'map' instead - must fix this one

    export type MessageAttributeMap = any; // not really - it was 'map' instead - must fix this one

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


    export type String = string;

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


    export type SubscriptionAttributesMap = any; // not really - it was 'map' instead - must fix this one

    export interface SubscriptionLimitExceededException {
      message?: string;
    }


    export type SubscriptionsList = Array<Subscription>;

    export interface Topic {
      TopicArn?: topicARN;
    }


    export type TopicAttributesMap = any; // not really - it was 'map' instead - must fix this one

    export interface TopicLimitExceededException {
      message?: string;
    }


    export type TopicsList = Array<Topic>;

    export interface UnsubscribeInput {
      SubscriptionArn: subscriptionARN;
    }


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

    export type string = string;

    export type subject = string;

    export type subscriptionARN = string;

    export type token = string;

    export type topicARN = string;

    export type topicName = string;

}
