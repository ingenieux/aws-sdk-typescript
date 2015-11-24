// DO NOT EDIT!
//

///<reference path="./aws-sdk-common.d.ts" />
declare module "aws-sdk" {
    export class SNS {
      constructor(options?: any);
      addPermission(params: SNSAddPermissionInput, callback: (err: SNSInvalidParameterException|SNSInternalErrorException|SNSAuthorizationErrorException|SNSNotFoundException|any, data: any) => void): void;
      confirmSubscription(params: SNSConfirmSubscriptionInput, callback: (err: SNSSubscriptionLimitExceededException|SNSInvalidParameterException|SNSNotFoundException|SNSInternalErrorException|SNSAuthorizationErrorException|any, data: SNSConfirmSubscriptionResponse|any) => void): void;
      createPlatformApplication(params: SNSCreatePlatformApplicationInput, callback: (err: SNSInvalidParameterException|SNSInternalErrorException|SNSAuthorizationErrorException|any, data: SNSCreatePlatformApplicationResponse|any) => void): void;
      createPlatformEndpoint(params: SNSCreatePlatformEndpointInput, callback: (err: SNSInvalidParameterException|SNSInternalErrorException|SNSAuthorizationErrorException|SNSNotFoundException|any, data: SNSCreateEndpointResponse|any) => void): void;
      createTopic(params: SNSCreateTopicInput, callback: (err: SNSInvalidParameterException|SNSTopicLimitExceededException|SNSInternalErrorException|SNSAuthorizationErrorException|any, data: SNSCreateTopicResponse|any) => void): void;
      deleteEndpoint(params: SNSDeleteEndpointInput, callback: (err: SNSInvalidParameterException|SNSInternalErrorException|SNSAuthorizationErrorException|any, data: any) => void): void;
      deletePlatformApplication(params: SNSDeletePlatformApplicationInput, callback: (err: SNSInvalidParameterException|SNSInternalErrorException|SNSAuthorizationErrorException|any, data: any) => void): void;
      deleteTopic(params: SNSDeleteTopicInput, callback: (err: SNSInvalidParameterException|SNSInternalErrorException|SNSAuthorizationErrorException|SNSNotFoundException|any, data: any) => void): void;
      getEndpointAttributes(params: SNSGetEndpointAttributesInput, callback: (err: SNSInvalidParameterException|SNSInternalErrorException|SNSAuthorizationErrorException|SNSNotFoundException|any, data: SNSGetEndpointAttributesResponse|any) => void): void;
      getPlatformApplicationAttributes(params: SNSGetPlatformApplicationAttributesInput, callback: (err: SNSInvalidParameterException|SNSInternalErrorException|SNSAuthorizationErrorException|SNSNotFoundException|any, data: SNSGetPlatformApplicationAttributesResponse|any) => void): void;
      getSubscriptionAttributes(params: SNSGetSubscriptionAttributesInput, callback: (err: SNSInvalidParameterException|SNSInternalErrorException|SNSNotFoundException|SNSAuthorizationErrorException|any, data: SNSGetSubscriptionAttributesResponse|any) => void): void;
      getTopicAttributes(params: SNSGetTopicAttributesInput, callback: (err: SNSInvalidParameterException|SNSInternalErrorException|SNSNotFoundException|SNSAuthorizationErrorException|any, data: SNSGetTopicAttributesResponse|any) => void): void;
      listEndpointsByPlatformApplication(params: SNSListEndpointsByPlatformApplicationInput, callback: (err: SNSInvalidParameterException|SNSInternalErrorException|SNSAuthorizationErrorException|SNSNotFoundException|any, data: SNSListEndpointsByPlatformApplicationResponse|any) => void): void;
      listPlatformApplications(params: SNSListPlatformApplicationsInput, callback: (err: SNSInvalidParameterException|SNSInternalErrorException|SNSAuthorizationErrorException|any, data: SNSListPlatformApplicationsResponse|any) => void): void;
      listSubscriptions(params: SNSListSubscriptionsInput, callback: (err: SNSInvalidParameterException|SNSInternalErrorException|SNSAuthorizationErrorException|any, data: SNSListSubscriptionsResponse|any) => void): void;
      listSubscriptionsByTopic(params: SNSListSubscriptionsByTopicInput, callback: (err: SNSInvalidParameterException|SNSInternalErrorException|SNSNotFoundException|SNSAuthorizationErrorException|any, data: SNSListSubscriptionsByTopicResponse|any) => void): void;
      listTopics(params: SNSListTopicsInput, callback: (err: SNSInvalidParameterException|SNSInternalErrorException|SNSAuthorizationErrorException|any, data: SNSListTopicsResponse|any) => void): void;
      publish(params: SNSPublishInput, callback: (err: SNSInvalidParameterException|SNSInvalidParameterValueException|SNSInternalErrorException|SNSNotFoundException|SNSEndpointDisabledException|SNSPlatformApplicationDisabledException|SNSAuthorizationErrorException|any, data: SNSPublishResponse|any) => void): void;
      removePermission(params: SNSRemovePermissionInput, callback: (err: SNSInvalidParameterException|SNSInternalErrorException|SNSAuthorizationErrorException|SNSNotFoundException|any, data: any) => void): void;
      setEndpointAttributes(params: SNSSetEndpointAttributesInput, callback: (err: SNSInvalidParameterException|SNSInternalErrorException|SNSAuthorizationErrorException|SNSNotFoundException|any, data: any) => void): void;
      setPlatformApplicationAttributes(params: SNSSetPlatformApplicationAttributesInput, callback: (err: SNSInvalidParameterException|SNSInternalErrorException|SNSAuthorizationErrorException|SNSNotFoundException|any, data: any) => void): void;
      setSubscriptionAttributes(params: SNSSetSubscriptionAttributesInput, callback: (err: SNSInvalidParameterException|SNSInternalErrorException|SNSNotFoundException|SNSAuthorizationErrorException|any, data: any) => void): void;
      setTopicAttributes(params: SNSSetTopicAttributesInput, callback: (err: SNSInvalidParameterException|SNSInternalErrorException|SNSNotFoundException|SNSAuthorizationErrorException|any, data: any) => void): void;
      subscribe(params: SNSSubscribeInput, callback: (err: SNSSubscriptionLimitExceededException|SNSInvalidParameterException|SNSInternalErrorException|SNSNotFoundException|SNSAuthorizationErrorException|any, data: SNSSubscribeResponse|any) => void): void;
      unsubscribe(params: SNSUnsubscribeInput, callback: (err: SNSInvalidParameterException|SNSInternalErrorException|SNSAuthorizationErrorException|SNSNotFoundException|any, data: any) => void): void;
    }

    export type SNSActionsList = Array<SNSaction>;
    export interface SNSAddPermissionInput {
        TopicArn: SNStopicARN;
        Label: SNSlabel;
        AWSAccountId: SNSDelegatesList;
        ActionName: SNSActionsList;
    }

    export interface SNSAuthorizationErrorException {
        message?: SNSstring;
    }

    export type SNSBinary = any; // not really - it was 'blob' instead - must fix this one
    export interface SNSConfirmSubscriptionInput {
        TopicArn: SNStopicARN;
        Token: SNStoken;
        AuthenticateOnUnsubscribe?: SNSauthenticateOnUnsubscribe;
    }

    export interface SNSConfirmSubscriptionResponse {
        SubscriptionArn?: SNSsubscriptionARN;
    }

    export interface SNSCreateEndpointResponse {
        EndpointArn?: SNSString;
    }

    export interface SNSCreatePlatformApplicationInput {
        Name: SNSString;
        Platform: SNSString;
        Attributes: SNSMapStringToString;
    }

    export interface SNSCreatePlatformApplicationResponse {
        PlatformApplicationArn?: SNSString;
    }

    export interface SNSCreatePlatformEndpointInput {
        PlatformApplicationArn: SNSString;
        Token: SNSString;
        CustomUserData?: SNSString;
        Attributes?: SNSMapStringToString;
    }

    export interface SNSCreateTopicInput {
        Name: SNStopicName;
    }

    export interface SNSCreateTopicResponse {
        TopicArn?: SNStopicARN;
    }

    export type SNSDelegatesList = Array<SNSdelegate>;
    export interface SNSDeleteEndpointInput {
        EndpointArn: SNSString;
    }

    export interface SNSDeletePlatformApplicationInput {
        PlatformApplicationArn: SNSString;
    }

    export interface SNSDeleteTopicInput {
        TopicArn: SNStopicARN;
    }

    export interface SNSEndpoint {
        EndpointArn?: SNSString;
        Attributes?: SNSMapStringToString;
    }

    export interface SNSEndpointDisabledException {
        message?: SNSstring;
    }

    export interface SNSGetEndpointAttributesInput {
        EndpointArn: SNSString;
    }

    export interface SNSGetEndpointAttributesResponse {
        Attributes?: SNSMapStringToString;
    }

    export interface SNSGetPlatformApplicationAttributesInput {
        PlatformApplicationArn: SNSString;
    }

    export interface SNSGetPlatformApplicationAttributesResponse {
        Attributes?: SNSMapStringToString;
    }

    export interface SNSGetSubscriptionAttributesInput {
        SubscriptionArn: SNSsubscriptionARN;
    }

    export interface SNSGetSubscriptionAttributesResponse {
        Attributes?: SNSSubscriptionAttributesMap;
    }

    export interface SNSGetTopicAttributesInput {
        TopicArn: SNStopicARN;
    }

    export interface SNSGetTopicAttributesResponse {
        Attributes?: SNSTopicAttributesMap;
    }

    export interface SNSInternalErrorException {
        message?: SNSstring;
    }

    export interface SNSInvalidParameterException {
        message?: SNSstring;
    }

    export interface SNSInvalidParameterValueException {
        message?: SNSstring;
    }

    export interface SNSListEndpointsByPlatformApplicationInput {
        PlatformApplicationArn: SNSString;
        NextToken?: SNSString;
    }

    export interface SNSListEndpointsByPlatformApplicationResponse {
        Endpoints?: SNSListOfEndpoints;
        NextToken?: SNSString;
    }

    export type SNSListOfEndpoints = Array<SNSEndpoint>;
    export type SNSListOfPlatformApplications = Array<SNSPlatformApplication>;
    export interface SNSListPlatformApplicationsInput {
        NextToken?: SNSString;
    }

    export interface SNSListPlatformApplicationsResponse {
        PlatformApplications?: SNSListOfPlatformApplications;
        NextToken?: SNSString;
    }

    export interface SNSListSubscriptionsByTopicInput {
        TopicArn: SNStopicARN;
        NextToken?: SNSnextToken;
    }

    export interface SNSListSubscriptionsByTopicResponse {
        Subscriptions?: SNSSubscriptionsList;
        NextToken?: SNSnextToken;
    }

    export interface SNSListSubscriptionsInput {
        NextToken?: SNSnextToken;
    }

    export interface SNSListSubscriptionsResponse {
        Subscriptions?: SNSSubscriptionsList;
        NextToken?: SNSnextToken;
    }

    export interface SNSListTopicsInput {
        NextToken?: SNSnextToken;
    }

    export interface SNSListTopicsResponse {
        Topics?: SNSTopicsList;
        NextToken?: SNSnextToken;
    }

    export type SNSMapStringToString = any; // not really - it was 'map' instead - must fix this one
    export type SNSMessageAttributeMap = any; // not really - it was 'map' instead - must fix this one
    export interface SNSMessageAttributeValue {
        DataType: SNSString;
        StringValue?: SNSString;
        BinaryValue?: SNSBinary;
    }

    export interface SNSNotFoundException {
        message?: SNSstring;
    }

    export interface SNSPlatformApplication {
        PlatformApplicationArn?: SNSString;
        Attributes?: SNSMapStringToString;
    }

    export interface SNSPlatformApplicationDisabledException {
        message?: SNSstring;
    }

    export interface SNSPublishInput {
        TopicArn?: SNStopicARN;
        TargetArn?: SNSString;
        Message: SNSmessage;
        Subject?: SNSsubject;
        MessageStructure?: SNSmessageStructure;
        MessageAttributes?: SNSMessageAttributeMap;
    }

    export interface SNSPublishResponse {
        MessageId?: SNSmessageId;
    }

    export interface SNSRemovePermissionInput {
        TopicArn: SNStopicARN;
        Label: SNSlabel;
    }

    export interface SNSSetEndpointAttributesInput {
        EndpointArn: SNSString;
        Attributes: SNSMapStringToString;
    }

    export interface SNSSetPlatformApplicationAttributesInput {
        PlatformApplicationArn: SNSString;
        Attributes: SNSMapStringToString;
    }

    export interface SNSSetSubscriptionAttributesInput {
        SubscriptionArn: SNSsubscriptionARN;
        AttributeName: SNSattributeName;
        AttributeValue?: SNSattributeValue;
    }

    export interface SNSSetTopicAttributesInput {
        TopicArn: SNStopicARN;
        AttributeName: SNSattributeName;
        AttributeValue?: SNSattributeValue;
    }

    export type SNSString = string;
    export interface SNSSubscribeInput {
        TopicArn: SNStopicARN;
        Protocol: SNSprotocol;
        Endpoint?: SNSendpoint;
    }

    export interface SNSSubscribeResponse {
        SubscriptionArn?: SNSsubscriptionARN;
    }

    export interface SNSSubscription {
        SubscriptionArn?: SNSsubscriptionARN;
        Owner?: SNSaccount;
        Protocol?: SNSprotocol;
        Endpoint?: SNSendpoint;
        TopicArn?: SNStopicARN;
    }

    export type SNSSubscriptionAttributesMap = any; // not really - it was 'map' instead - must fix this one
    export interface SNSSubscriptionLimitExceededException {
        message?: SNSstring;
    }

    export type SNSSubscriptionsList = Array<SNSSubscription>;
    export interface SNSTopic {
        TopicArn?: SNStopicARN;
    }

    export type SNSTopicAttributesMap = any; // not really - it was 'map' instead - must fix this one
    export interface SNSTopicLimitExceededException {
        message?: SNSstring;
    }

    export type SNSTopicsList = Array<SNSTopic>;
    export interface SNSUnsubscribeInput {
        SubscriptionArn: SNSsubscriptionARN;
    }

    export type SNSaccount = string;
    export type SNSaction = string;
    export type SNSattributeName = string;
    export type SNSattributeValue = string;
    export type SNSauthenticateOnUnsubscribe = string;
    export type SNSdelegate = string;
    export type SNSendpoint = string;
    export type SNSlabel = string;
    export type SNSmessage = string;
    export type SNSmessageId = string;
    export type SNSmessageStructure = string;
    export type SNSnextToken = string;
    export type SNSprotocol = string;
    export type SNSstring = string;
    export type SNSsubject = string;
    export type SNSsubscriptionARN = string;
    export type SNStoken = string;
    export type SNStopicARN = string;
    export type SNStopicName = string;
}
