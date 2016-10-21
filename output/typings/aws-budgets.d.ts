// Type definitions for aws-sdk - AWS Budgets
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

// COMMENTED <reference path="./aws-sdk.d.ts" />

declare module "aws-sdk" {

 /**
   * apiVersion: 2016-10-20
   * endpointPrefix: budgets
   * serviceAbbreviation: AWSBudgets
   * signatureVersion: v4
   * protocol: json
   *
   * All public APIs for AWS Budgets
   *
   */
  export class Budgets extends Service {
    constructor(options?: any);
    endpoint: Endpoint;
    /**
     * Create a new budget
     *
     * @error InvalidParameterException   
     * @error InternalErrorException   
     * @error CreationLimitExceededException   
     * @error DuplicateRecordException   
     */
    createBudget(params: Budgets.CreateBudgetRequest, callback?: (err: Budgets.InvalidParameterException|Budgets.InternalErrorException|Budgets.CreationLimitExceededException|Budgets.DuplicateRecordException|any, data: Budgets.CreateBudgetResponse|any) => void): Request<Budgets.CreateBudgetResponse|any,Budgets.InvalidParameterException|Budgets.InternalErrorException|Budgets.CreationLimitExceededException|Budgets.DuplicateRecordException|any>;
    /**
     * Create a new Notification with subscribers for a budget
     *
     * @error InternalErrorException   
     * @error InvalidParameterException   
     * @error NotFoundException   
     * @error CreationLimitExceededException   
     * @error DuplicateRecordException   
     */
    createNotification(params: Budgets.CreateNotificationRequest, callback?: (err: Budgets.InternalErrorException|Budgets.InvalidParameterException|Budgets.NotFoundException|Budgets.CreationLimitExceededException|Budgets.DuplicateRecordException|any, data: Budgets.CreateNotificationResponse|any) => void): Request<Budgets.CreateNotificationResponse|any,Budgets.InternalErrorException|Budgets.InvalidParameterException|Budgets.NotFoundException|Budgets.CreationLimitExceededException|Budgets.DuplicateRecordException|any>;
    /**
     * Create a new Subscriber for a notification
     *
     * @error InternalErrorException   
     * @error InvalidParameterException   
     * @error CreationLimitExceededException   
     * @error DuplicateRecordException   
     */
    createSubscriber(params: Budgets.CreateSubscriberRequest, callback?: (err: Budgets.InternalErrorException|Budgets.InvalidParameterException|Budgets.CreationLimitExceededException|Budgets.DuplicateRecordException|any, data: Budgets.CreateSubscriberResponse|any) => void): Request<Budgets.CreateSubscriberResponse|any,Budgets.InternalErrorException|Budgets.InvalidParameterException|Budgets.CreationLimitExceededException|Budgets.DuplicateRecordException|any>;
    /**
     * Delete a budget and related notifications
     *
     * @error InternalErrorException   
     * @error InvalidParameterException   
     * @error NotFoundException   
     */
    deleteBudget(params: Budgets.DeleteBudgetRequest, callback?: (err: Budgets.InternalErrorException|Budgets.InvalidParameterException|Budgets.NotFoundException|any, data: Budgets.DeleteBudgetResponse|any) => void): Request<Budgets.DeleteBudgetResponse|any,Budgets.InternalErrorException|Budgets.InvalidParameterException|Budgets.NotFoundException|any>;
    /**
     * Delete a notification and related subscribers
     *
     * @error InvalidParameterException   
     * @error InternalErrorException   
     * @error NotFoundException   
     */
    deleteNotification(params: Budgets.DeleteNotificationRequest, callback?: (err: Budgets.InvalidParameterException|Budgets.InternalErrorException|Budgets.NotFoundException|any, data: Budgets.DeleteNotificationResponse|any) => void): Request<Budgets.DeleteNotificationResponse|any,Budgets.InvalidParameterException|Budgets.InternalErrorException|Budgets.NotFoundException|any>;
    /**
     * Delete a Subscriber for a notification
     *
     * @error InternalErrorException   
     * @error InvalidParameterException   
     * @error NotFoundException   
     */
    deleteSubscriber(params: Budgets.DeleteSubscriberRequest, callback?: (err: Budgets.InternalErrorException|Budgets.InvalidParameterException|Budgets.NotFoundException|any, data: Budgets.DeleteSubscriberResponse|any) => void): Request<Budgets.DeleteSubscriberResponse|any,Budgets.InternalErrorException|Budgets.InvalidParameterException|Budgets.NotFoundException|any>;
    /**
     * Get a single budget
     *
     * @error InternalErrorException   
     * @error InvalidParameterException   
     * @error NotFoundException   
     */
    describeBudget(params: Budgets.DescribeBudgetRequest, callback?: (err: Budgets.InternalErrorException|Budgets.InvalidParameterException|Budgets.NotFoundException|any, data: Budgets.DescribeBudgetResponse|any) => void): Request<Budgets.DescribeBudgetResponse|any,Budgets.InternalErrorException|Budgets.InvalidParameterException|Budgets.NotFoundException|any>;
    /**
     * Get all budgets for an account
     *
     * @error InternalErrorException   
     * @error InvalidParameterException   
     * @error NotFoundException   
     * @error InvalidNextTokenException   
     * @error ExpiredNextTokenException   
     */
    describeBudgets(params: Budgets.DescribeBudgetsRequest, callback?: (err: Budgets.InternalErrorException|Budgets.InvalidParameterException|Budgets.NotFoundException|Budgets.InvalidNextTokenException|Budgets.ExpiredNextTokenException|any, data: Budgets.DescribeBudgetsResponse|any) => void): Request<Budgets.DescribeBudgetsResponse|any,Budgets.InternalErrorException|Budgets.InvalidParameterException|Budgets.NotFoundException|Budgets.InvalidNextTokenException|Budgets.ExpiredNextTokenException|any>;
    /**
     * Get notifications of a budget
     *
     * @error InternalErrorException   
     * @error InvalidParameterException   
     * @error NotFoundException   
     * @error InvalidNextTokenException   
     * @error ExpiredNextTokenException   
     */
    describeNotificationsForBudget(params: Budgets.DescribeNotificationsForBudgetRequest, callback?: (err: Budgets.InternalErrorException|Budgets.InvalidParameterException|Budgets.NotFoundException|Budgets.InvalidNextTokenException|Budgets.ExpiredNextTokenException|any, data: Budgets.DescribeNotificationsForBudgetResponse|any) => void): Request<Budgets.DescribeNotificationsForBudgetResponse|any,Budgets.InternalErrorException|Budgets.InvalidParameterException|Budgets.NotFoundException|Budgets.InvalidNextTokenException|Budgets.ExpiredNextTokenException|any>;
    /**
     * Get subscribers of a notification
     *
     * @error InternalErrorException   
     * @error NotFoundException   
     * @error InvalidParameterException   
     * @error InvalidNextTokenException   
     * @error ExpiredNextTokenException   
     */
    describeSubscribersForNotification(params: Budgets.DescribeSubscribersForNotificationRequest, callback?: (err: Budgets.InternalErrorException|Budgets.NotFoundException|Budgets.InvalidParameterException|Budgets.InvalidNextTokenException|Budgets.ExpiredNextTokenException|any, data: Budgets.DescribeSubscribersForNotificationResponse|any) => void): Request<Budgets.DescribeSubscribersForNotificationResponse|any,Budgets.InternalErrorException|Budgets.NotFoundException|Budgets.InvalidParameterException|Budgets.InvalidNextTokenException|Budgets.ExpiredNextTokenException|any>;
    /**
     * Update the information of a budget already created
     *
     * @error InternalErrorException   
     * @error InvalidParameterException   
     * @error NotFoundException   
     */
    updateBudget(params: Budgets.UpdateBudgetRequest, callback?: (err: Budgets.InternalErrorException|Budgets.InvalidParameterException|Budgets.NotFoundException|any, data: Budgets.UpdateBudgetResponse|any) => void): Request<Budgets.UpdateBudgetResponse|any,Budgets.InternalErrorException|Budgets.InvalidParameterException|Budgets.NotFoundException|any>;
    /**
     * Update the information about a notification already created
     *
     * @error InternalErrorException   
     * @error InvalidParameterException   
     * @error NotFoundException   
     */
    updateNotification(params: Budgets.UpdateNotificationRequest, callback?: (err: Budgets.InternalErrorException|Budgets.InvalidParameterException|Budgets.NotFoundException|any, data: Budgets.UpdateNotificationResponse|any) => void): Request<Budgets.UpdateNotificationResponse|any,Budgets.InternalErrorException|Budgets.InvalidParameterException|Budgets.NotFoundException|any>;
    /**
     * Update a subscriber
     *
     * @error InternalErrorException   
     * @error InvalidParameterException   
     * @error NotFoundException   
     */
    updateSubscriber(params: Budgets.UpdateSubscriberRequest, callback?: (err: Budgets.InternalErrorException|Budgets.InvalidParameterException|Budgets.NotFoundException|any, data: Budgets.UpdateSubscriberResponse|any) => void): Request<Budgets.UpdateSubscriberResponse|any,Budgets.InternalErrorException|Budgets.InvalidParameterException|Budgets.NotFoundException|any>;

  }

  export module Budgets {
    
    export type AccountId = string;
    
    export type BudgetName = string;
    
    export type BudgetType = string;
    
    export type Budgets = Budget[];
    
    export type ComparisonOperator = string;
    
    export type CostFilters = {[key:string]: DimensionValues};
    
    export type DimensionValues = GenericString[];
    
    export type GenericBoolean = boolean;
    
    export type GenericString = string;
    
    export type GenericTimestamp = number;
    
    export type MaxResults = number;
    
    export type NotificationThreshold = number;
    
    export type NotificationType = string;
    
    export type NotificationWithSubscribersList = NotificationWithSubscribers[];
    
    export type Notifications = Notification[];
    
    export type NumericValue = string;
    
    export type Subscribers = Subscriber[];
    
    export type SubscriptionType = string;
    
    export type TimeUnit = string;
    
    export type errorMessage = string;

    export interface Budget {
        BudgetName: BudgetName;
        BudgetLimit: Spend;
        CostFilters?: CostFilters;
        CostTypes: CostTypes;
        TimeUnit: TimeUnit;
        TimePeriod: TimePeriod;
        CalculatedSpend?: CalculatedSpend;
        BudgetType: BudgetType;
    }
    export interface CalculatedSpend {
        ActualSpend: Spend;
        ForecastedSpend?: Spend;
    }
    export interface CostTypes {
        IncludeTax: GenericBoolean;
        IncludeSubscription: GenericBoolean;
        UseBlended: GenericBoolean;
    }
    export interface CreateBudgetRequest {
        AccountId: AccountId;
        Budget: Budget;
        NotificationsWithSubscribers?: NotificationWithSubscribersList;
    }
    export interface CreateBudgetResponse {
    }
    export interface CreateNotificationRequest {
        AccountId: AccountId;
        BudgetName: BudgetName;
        Notification: Notification;
        Subscribers: Subscribers;
    }
    export interface CreateNotificationResponse {
    }
    export interface CreateSubscriberRequest {
        AccountId: AccountId;
        BudgetName: BudgetName;
        Notification: Notification;
        Subscriber: Subscriber;
    }
    export interface CreateSubscriberResponse {
    }
    export interface CreationLimitExceededException {
        Message?: errorMessage;
    }
    export interface DeleteBudgetRequest {
        AccountId: AccountId;
        BudgetName: BudgetName;
    }
    export interface DeleteBudgetResponse {
    }
    export interface DeleteNotificationRequest {
        AccountId: AccountId;
        BudgetName: BudgetName;
        Notification: Notification;
    }
    export interface DeleteNotificationResponse {
    }
    export interface DeleteSubscriberRequest {
        AccountId: AccountId;
        BudgetName: BudgetName;
        Notification: Notification;
        Subscriber: Subscriber;
    }
    export interface DeleteSubscriberResponse {
    }
    export interface DescribeBudgetRequest {
        AccountId: AccountId;
        BudgetName: BudgetName;
    }
    export interface DescribeBudgetResponse {
        Budget?: Budget;
    }
    export interface DescribeBudgetsRequest {
        AccountId: AccountId;
        MaxResults?: MaxResults;
        NextToken?: GenericString;
    }
    export interface DescribeBudgetsResponse {
        Budgets?: Budgets;
        NextToken?: GenericString;
    }
    export interface DescribeNotificationsForBudgetRequest {
        AccountId: AccountId;
        BudgetName: BudgetName;
        MaxResults?: MaxResults;
        NextToken?: GenericString;
    }
    export interface DescribeNotificationsForBudgetResponse {
        Notifications?: Notifications;
        NextToken?: GenericString;
    }
    export interface DescribeSubscribersForNotificationRequest {
        AccountId: AccountId;
        BudgetName: BudgetName;
        Notification: Notification;
        MaxResults?: MaxResults;
        NextToken?: GenericString;
    }
    export interface DescribeSubscribersForNotificationResponse {
        Subscribers?: Subscribers;
        NextToken?: GenericString;
    }
    export interface DuplicateRecordException {
        Message?: errorMessage;
    }
    export interface ExpiredNextTokenException {
        Message?: errorMessage;
    }
    export interface InternalErrorException {
        Message?: errorMessage;
    }
    export interface InvalidNextTokenException {
        Message?: errorMessage;
    }
    export interface InvalidParameterException {
        Message?: errorMessage;
    }
    export interface NotFoundException {
        Message?: errorMessage;
    }
    export interface Notification {
        NotificationType: NotificationType;
        ComparisonOperator: ComparisonOperator;
        Threshold: NotificationThreshold;
    }
    export interface NotificationWithSubscribers {
        Notification: Notification;
        Subscribers: Subscribers;
    }
    export interface Spend {
        Amount: NumericValue;
        Unit: GenericString;
    }
    export interface Subscriber {
        SubscriptionType: SubscriptionType;
        Address: GenericString;
    }
    export interface TimePeriod {
        Start: GenericTimestamp;
        End: GenericTimestamp;
    }
    export interface UpdateBudgetRequest {
        AccountId: AccountId;
        NewBudget: Budget;
    }
    export interface UpdateBudgetResponse {
    }
    export interface UpdateNotificationRequest {
        AccountId: AccountId;
        BudgetName: BudgetName;
        OldNotification: Notification;
        NewNotification: Notification;
    }
    export interface UpdateNotificationResponse {
    }
    export interface UpdateSubscriberRequest {
        AccountId: AccountId;
        BudgetName: BudgetName;
        Notification: Notification;
        OldSubscriber: Subscriber;
        NewSubscriber: Subscriber;
    }
    export interface UpdateSubscriberResponse {
    }
  }
}
