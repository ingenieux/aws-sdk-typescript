// Type definitions for aws-sdk - AWS Shield
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

// COMMENTED <reference path="./aws-sdk.d.ts" />

declare module "aws-sdk" {

 /**
   * apiVersion: 2016-06-02
   * endpointPrefix: shield
   * serviceAbbreviation: AWS Shield
   * signatureVersion: v4
   * protocol: json
   *
   * AWS Shield AdvancedThis is the AWS Shield Advanced API Reference . This guide is for developers who
need detailed information about the AWS Shield Advanced API actions, data types,
and errors. For detailed information about AWS WAF and AWS Shield Advanced
features and an overview of how to use the AWS WAF and AWS Shield Advanced APIs,
see the AWS WAF and AWS Shield Developer Guide
[http://docs.aws.amazon.com/waf/latest/developerguide/] .
   *
   */
  export class Shield extends Service {
    constructor(options?: any);
    endpoint: Endpoint;
    /**
     * Enables AWS Shield Advanced for a specific AWS resource. The resource can be an
Amazon CloudFront distribution, Elastic Load Balancing load balancer, or an
Amazon Route 53 hosted zone.
     *
     * @error InternalErrorException   
     * @error InvalidResourceException   
     * @error InvalidOperationException   
     * @error LimitsExceededException   
     * @error ResourceAlreadyExistsException   
     * @error OptimisticLockException   
     * @error ResourceNotFoundException   
     */
    createProtection(params: Shield.CreateProtectionRequest, callback?: (err: Shield.InternalErrorException|Shield.InvalidResourceException|Shield.InvalidOperationException|Shield.LimitsExceededException|Shield.ResourceAlreadyExistsException|Shield.OptimisticLockException|Shield.ResourceNotFoundException|any, data: Shield.CreateProtectionResponse|any) => void): Request<Shield.CreateProtectionResponse|any,Shield.InternalErrorException|Shield.InvalidResourceException|Shield.InvalidOperationException|Shield.LimitsExceededException|Shield.ResourceAlreadyExistsException|Shield.OptimisticLockException|Shield.ResourceNotFoundException|any>;
    /**
     * Activates AWS Shield Advanced for an account.
     *
     * @error InternalErrorException   
     * @error ResourceAlreadyExistsException   
     */
    createSubscription(params: Shield.CreateSubscriptionRequest, callback?: (err: Shield.InternalErrorException|Shield.ResourceAlreadyExistsException|any, data: Shield.CreateSubscriptionResponse|any) => void): Request<Shield.CreateSubscriptionResponse|any,Shield.InternalErrorException|Shield.ResourceAlreadyExistsException|any>;
    /**
     * Deletes an AWS Shield Advanced Protection .
     *
     * @error InternalErrorException   
     * @error ResourceNotFoundException   
     * @error OptimisticLockException   
     */
    deleteProtection(params: Shield.DeleteProtectionRequest, callback?: (err: Shield.InternalErrorException|Shield.ResourceNotFoundException|Shield.OptimisticLockException|any, data: Shield.DeleteProtectionResponse|any) => void): Request<Shield.DeleteProtectionResponse|any,Shield.InternalErrorException|Shield.ResourceNotFoundException|Shield.OptimisticLockException|any>;
    /**
     * Removes AWS Shield Advanced from an account.
     *
     * @error InternalErrorException   
     * @error LockedSubscriptionException   
     * @error ResourceNotFoundException   
     */
    deleteSubscription(params: Shield.DeleteSubscriptionRequest, callback?: (err: Shield.InternalErrorException|Shield.LockedSubscriptionException|Shield.ResourceNotFoundException|any, data: Shield.DeleteSubscriptionResponse|any) => void): Request<Shield.DeleteSubscriptionResponse|any,Shield.InternalErrorException|Shield.LockedSubscriptionException|Shield.ResourceNotFoundException|any>;
    /**
     * Describes the details of a DDoS attack.
     *
     * @error InternalErrorException   
     * @error InvalidParameterException   
     */
    describeAttack(params: Shield.DescribeAttackRequest, callback?: (err: Shield.InternalErrorException|Shield.InvalidParameterException|any, data: Shield.DescribeAttackResponse|any) => void): Request<Shield.DescribeAttackResponse|any,Shield.InternalErrorException|Shield.InvalidParameterException|any>;
    /**
     * Lists the details of a Protection object.
     *
     * @error InternalErrorException   
     * @error ResourceNotFoundException   
     */
    describeProtection(params: Shield.DescribeProtectionRequest, callback?: (err: Shield.InternalErrorException|Shield.ResourceNotFoundException|any, data: Shield.DescribeProtectionResponse|any) => void): Request<Shield.DescribeProtectionResponse|any,Shield.InternalErrorException|Shield.ResourceNotFoundException|any>;
    /**
     * Provides details about the AWS Shield Advanced subscription for an account.
     *
     * @error InternalErrorException   
     * @error ResourceNotFoundException   
     */
    describeSubscription(params: Shield.DescribeSubscriptionRequest, callback?: (err: Shield.InternalErrorException|Shield.ResourceNotFoundException|any, data: Shield.DescribeSubscriptionResponse|any) => void): Request<Shield.DescribeSubscriptionResponse|any,Shield.InternalErrorException|Shield.ResourceNotFoundException|any>;
    /**
     * Returns all ongoing DDoS attacks or all DDoS attacks during a specified time
period.
     *
     * @error InternalErrorException   
     * @error InvalidParameterException   
     * @error InvalidOperationException   
     */
    listAttacks(params: Shield.ListAttacksRequest, callback?: (err: Shield.InternalErrorException|Shield.InvalidParameterException|Shield.InvalidOperationException|any, data: Shield.ListAttacksResponse|any) => void): Request<Shield.ListAttacksResponse|any,Shield.InternalErrorException|Shield.InvalidParameterException|Shield.InvalidOperationException|any>;
    /**
     * Lists all Protection objects for the account.
     *
     * @error InternalErrorException   
     * @error ResourceNotFoundException   
     */
    listProtections(params: Shield.ListProtectionsRequest, callback?: (err: Shield.InternalErrorException|Shield.ResourceNotFoundException|any, data: Shield.ListProtectionsResponse|any) => void): Request<Shield.ListProtectionsResponse|any,Shield.InternalErrorException|Shield.ResourceNotFoundException|any>;

  }

  export module Shield {
    
    export type AttackId = string;
    
    export type AttackSummaries = AttackSummary[];
    
    export type AttackTimestamp = number;
    
    export type AttackVectorDescriptionList = AttackVectorDescription[];
    
    export type Double = number;
    
    export type DurationInSeconds = number;
    
    export type Integer = number;
    
    export type LimitNumber = number;
    
    export type LimitType = string;
    
    export type MaxResults = number;
    
    export type MitigationList = Mitigation[];
    
    export type ProtectionId = string;
    
    export type ProtectionName = string;
    
    export type Protections = Protection[];
    
    export type ResourceArn = string;
    
    export type ResourceArnFilterList = ResourceArn[];
    
    export type String = string;
    
    export type SubResourceSummaryList = SubResourceSummary[];
    
    export type SubResourceType = string;
    
    export type SummarizedAttackVectorList = SummarizedAttackVector[];
    
    export type SummarizedCounterList = SummarizedCounter[];
    
    export type Timestamp = number;
    
    export type Token = string;
    
    export type errorMessage = string;

    export interface AttackDetail {
        /** The unique identifier (ID) of the attack. **/
        AttackId?: AttackId;
        /** The ARN (Amazon Resource Name) of the resource that was attacked. **/
        ResourceArn?: ResourceArn;
        /** If applicable, additional detail about the resource being attacked, for example,
IP address or URL. **/
        SubResources?: SubResourceSummaryList;
        /** The time the attack started, in the format 2016-12-16T13:50Z. **/
        StartTime?: AttackTimestamp;
        /** The time the attack ended, in the format 2016-12-16T13:50Z. **/
        EndTime?: AttackTimestamp;
        /** List of counters that describe the attack for the specified time period. **/
        AttackCounters?: SummarizedCounterList;
        /** List of mitigation actions taken for the attack. **/
        Mitigations?: MitigationList;
    }
    export interface AttackSummary {
        /** The unique identifier (ID) of the attack. **/
        AttackId?: String;
        /** The ARN (Amazon Resource Name) of the resource that was attacked. **/
        ResourceArn?: String;
        /** The start time of the attack, in the format 2016-12-16T13:50Z. **/
        StartTime?: AttackTimestamp;
        /** The end time of the attack, in the format 2016-12-16T13:50Z. **/
        EndTime?: AttackTimestamp;
        /** The list of attacks for a specified time period. **/
        AttackVectors?: AttackVectorDescriptionList;
    }
    export interface AttackVectorDescription {
        /** The attack type, for example, SNMP reflection or SYN flood. **/
        VectorType: String;
    }
    export interface CreateProtectionRequest {
        /** Friendly name for the Protection you are creating. **/
        Name: ProtectionName;
        /** The ARN (Amazon Resource Name) of the resource to be protected. **/
        ResourceArn: ResourceArn;
    }
    export interface CreateProtectionResponse {
        /** The unique identifier (ID) for the Protection object that is created. **/
        ProtectionId?: ProtectionId;
    }
    export interface CreateSubscriptionRequest {
    }
    export interface CreateSubscriptionResponse {
    }
    export interface DeleteProtectionRequest {
        /** The unique identifier (ID) for the Protection object to be deleted. **/
        ProtectionId: ProtectionId;
    }
    export interface DeleteProtectionResponse {
    }
    export interface DeleteSubscriptionRequest {
    }
    export interface DeleteSubscriptionResponse {
    }
    export interface DescribeAttackRequest {
        /** The unique identifier (ID) for the attack that to be described. **/
        AttackId: AttackId;
    }
    export interface DescribeAttackResponse {
        /** The attack that is described. **/
        Attack?: AttackDetail;
    }
    export interface DescribeProtectionRequest {
        /** The unique identifier (ID) for the Protection object that is described. **/
        ProtectionId: ProtectionId;
    }
    export interface DescribeProtectionResponse {
        /** The Protection object that is described. **/
        Protection?: Protection;
    }
    export interface DescribeSubscriptionRequest {
    }
    export interface DescribeSubscriptionResponse {
        /** The AWS Shield Advanced subscription details for an account. **/
        Subscription?: Subscription;
    }
    export interface InternalErrorException {
        message?: errorMessage;
    }
    export interface InvalidOperationException {
        message?: errorMessage;
    }
    export interface InvalidParameterException {
        message?: errorMessage;
    }
    export interface InvalidResourceException {
        message?: errorMessage;
    }
    export interface LimitsExceededException {
        message?: errorMessage;
        Type?: LimitType;
        Limit?: LimitNumber;
    }
    export interface ListAttacksRequest {
        /** The ARN (Amazon Resource Name) of the resource that was attacked. If this is
left blank, all applicable resources for this account will be included. **/
        ResourceArns?: ResourceArnFilterList;
        /** The time period for the attacks. **/
        StartTime?: TimeRange;
        /** The end of the time period for the attacks. **/
        EndTime?: TimeRange;
        /** The ListAttacksRequest.NextMarker value from a previous call to 
ListAttacksRequest . Pass null if this is the first call. **/
        NextToken?: Token;
        /** The maximum number of AttackSummary objects to be returned. If this is left
blank, the first 20 results will be returned. **/
        MaxResults?: MaxResults;
    }
    export interface ListAttacksResponse {
        /** The attack information for the specified time range. **/
        AttackSummaries?: AttackSummaries;
        /** The token returned by a previous call to indicate that there is more data
available. If not null, more results are available. Pass this value for the 
NextMarker parameter in a subsequent call to ListAttacks to retrieve the next
set of items. **/
        NextToken?: Token;
    }
    export interface ListProtectionsRequest {
        /** The ListProtectionsRequest.NextToken value from a previous call to 
ListProtections . Pass null if this is the first call. **/
        NextToken?: Token;
        /** The maximum number of Protection objects to be returned. If this is left blank
the first 20 results will be returned. **/
        MaxResults?: MaxResults;
    }
    export interface ListProtectionsResponse {
        /** The array of enabled Protection objects. **/
        Protections?: Protections;
        /** If you specify a value for MaxResults and you have more Protections than the
value of MaxResults, AWS Shield Advanced returns a NextToken value in the
response that allows you to list another group of Protections. For the second
and subsequent ListProtections requests, specify the value of NextToken from the
previous response to get information about another batch of Protections. **/
        NextToken?: Token;
    }
    export interface LockedSubscriptionException {
        message?: errorMessage;
    }
    export interface Mitigation {
        /** The name of the mitigation taken for this attack. **/
        MitigationName?: String;
    }
    export interface OptimisticLockException {
        message?: errorMessage;
    }
    export interface Protection {
        /** The unique identifier (ID) of the protection. **/
        Id?: ProtectionId;
        /** The friendly name of the protection. For example, My CloudFront distributions . **/
        Name?: ProtectionName;
        /** The ARN (Amazon Resource Name) of the AWS resource that is protected. **/
        ResourceArn?: ResourceArn;
    }
    export interface ResourceAlreadyExistsException {
        message?: errorMessage;
    }
    export interface ResourceNotFoundException {
        message?: errorMessage;
    }
    export interface SubResourceSummary {
        /** The SubResource type. **/
        Type?: SubResourceType;
        /** The unique identifier (ID) of the SubResource . **/
        Id?: String;
        /** The list of attack types and associated counters. **/
        AttackVectors?: SummarizedAttackVectorList;
        /** The counters that describe the details of the attack. **/
        Counters?: SummarizedCounterList;
    }
    export interface Subscription {
        /** The start time of the subscription, in the format &quot;2016-12-16T13:50Z&quot;. **/
        StartTime?: Timestamp;
        /** The length, in seconds, of the AWS Shield Advanced subscription for the account. **/
        TimeCommitmentInSeconds?: DurationInSeconds;
    }
    export interface SummarizedAttackVector {
        /** The attack type, for example, SNMP reflection or SYN flood. **/
        VectorType: String;
        /** The list of counters that describe the details of the attack. **/
        VectorCounters?: SummarizedCounterList;
    }
    export interface SummarizedCounter {
        /** The counter name. **/
        Name?: String;
        /** The maximum value of the counter for a specified time period. **/
        Max?: Double;
        /** The average value of the counter for a specified time period. **/
        Average?: Double;
        /** The total of counter values for a specified time period. **/
        Sum?: Double;
        /** The number of counters for a specified time period. **/
        N?: Integer;
        /** The unit of the counters. **/
        Unit?: String;
    }
    export interface TimeRange {
        /** The start time, in the format 2016-12-16T13:50Z. **/
        FromInclusive?: AttackTimestamp;
        /** The end time, in the format 2016-12-16T15:50Z. **/
        ToExclusive?: AttackTimestamp;
    }
  }
}
