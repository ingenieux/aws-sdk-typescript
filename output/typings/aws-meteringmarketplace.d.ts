// Type definitions for aws-sdk - AWSMarketplace Metering
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

// COMMENTED <reference path="./aws-sdk.d.ts" />

declare module "aws-sdk" {

 /**
   * apiVersion: 2016-01-14
   * endpointPrefix: metering.marketplace
   * serviceAbbreviation: 
   * signatureVersion: v4
   * protocol: json
   *
   * AWS Marketplace Metering Service This reference provides descriptions of the
low-level AWS Marketplace Metering Service API.

AWS Marketplace sellers can use this API to submit usage data for custom usage
dimensions.

 Submitting Metering Records 

 &amp;#42;   MeterUsage- Submits the metering record for a Marketplace product.
   MeterUsage is called from an EC2 instance.
   
   
 *   BatchMeterUsage- Submits the metering record for a set of customers.
   BatchMeterUsage is called from a software-as-a-service (SaaS) application.
   
   

 Accepting New Customers 

 *   ResolveCustomer- Called by a SaaS application during the registration
   process. When a buyer visits your website during the registration process,
   the buyer submits a Registration Token through the browser. The Registration
   Token is resolved through this API to obtain a CustomerIdentifier and Product
   Code.
   *
   */
  export class MarketplaceMetering extends Service {
    constructor(options?: any);
    endpoint: Endpoint;
    /**
     * BatchMeterUsage is called from a SaaS application listed on the AWS Marketplace
to post metering records for a set of customers.

For identical requests, the API is idempotent; requests can be retried with the
same records or a subset of the input records.

Every request to BatchMeterUsage is for one product. If you need to meter usage
for multiple products, you must make multiple calls to BatchMeterUsage.

BatchMeterUsage can process up to 25 UsageRecords at a time.
     *
     * @error InternalServiceErrorException   
     * @error InvalidProductCodeException   
     * @error InvalidUsageDimensionException   
     * @error InvalidCustomerIdentifierException   
     * @error TimestampOutOfBoundsException   
     * @error ThrottlingException   
     */
    batchMeterUsage(params: MarketplaceMetering.BatchMeterUsageRequest, callback?: (err: MarketplaceMetering.InternalServiceErrorException|MarketplaceMetering.InvalidProductCodeException|MarketplaceMetering.InvalidUsageDimensionException|MarketplaceMetering.InvalidCustomerIdentifierException|MarketplaceMetering.TimestampOutOfBoundsException|MarketplaceMetering.ThrottlingException|any, data: MarketplaceMetering.BatchMeterUsageResult|any) => void): Request<MarketplaceMetering.BatchMeterUsageResult|any,MarketplaceMetering.InternalServiceErrorException|MarketplaceMetering.InvalidProductCodeException|MarketplaceMetering.InvalidUsageDimensionException|MarketplaceMetering.InvalidCustomerIdentifierException|MarketplaceMetering.TimestampOutOfBoundsException|MarketplaceMetering.ThrottlingException|any>;
    /**
     * API to emit metering records. For identical requests, the API is idempotent. It
simply returns the metering record ID.

MeterUsage is authenticated on the buyer&#x27;s AWS account, generally when running
from an EC2 instance on the AWS Marketplace.
     *
     * @error InternalServiceErrorException   
     * @error InvalidProductCodeException   
     * @error InvalidUsageDimensionException   
     * @error InvalidEndpointRegionException   
     * @error TimestampOutOfBoundsException   
     * @error DuplicateRequestException   
     * @error ThrottlingException   
     */
    meterUsage(params: MarketplaceMetering.MeterUsageRequest, callback?: (err: MarketplaceMetering.InternalServiceErrorException|MarketplaceMetering.InvalidProductCodeException|MarketplaceMetering.InvalidUsageDimensionException|MarketplaceMetering.InvalidEndpointRegionException|MarketplaceMetering.TimestampOutOfBoundsException|MarketplaceMetering.DuplicateRequestException|MarketplaceMetering.ThrottlingException|any, data: MarketplaceMetering.MeterUsageResult|any) => void): Request<MarketplaceMetering.MeterUsageResult|any,MarketplaceMetering.InternalServiceErrorException|MarketplaceMetering.InvalidProductCodeException|MarketplaceMetering.InvalidUsageDimensionException|MarketplaceMetering.InvalidEndpointRegionException|MarketplaceMetering.TimestampOutOfBoundsException|MarketplaceMetering.DuplicateRequestException|MarketplaceMetering.ThrottlingException|any>;
    /**
     * ResolveCustomer is called by a SaaS application during the registration process.
When a buyer visits your website during the registration process, the buyer
submits a registration token through their browser. The registration token is
resolved through this API to obtain a CustomerIdentifier and product code.
     *
     * @error InvalidTokenException   
     * @error ExpiredTokenException   
     * @error ThrottlingException   
     * @error InternalServiceErrorException   
     */
    resolveCustomer(params: MarketplaceMetering.ResolveCustomerRequest, callback?: (err: MarketplaceMetering.InvalidTokenException|MarketplaceMetering.ExpiredTokenException|MarketplaceMetering.ThrottlingException|MarketplaceMetering.InternalServiceErrorException|any, data: MarketplaceMetering.ResolveCustomerResult|any) => void): Request<MarketplaceMetering.ResolveCustomerResult|any,MarketplaceMetering.InvalidTokenException|MarketplaceMetering.ExpiredTokenException|MarketplaceMetering.ThrottlingException|MarketplaceMetering.InternalServiceErrorException|any>;

  }

  export module MarketplaceMetering {
    
    export type Boolean = boolean;
    
    export type CustomerIdentifier = string;
    
    export type NonEmptyString = string;
    
    export type ProductCode = string;
    
    export type String = string;
    
    export type Timestamp = number;
    
    export type UsageDimension = string;
    
    export type UsageQuantity = number;
    
    export type UsageRecordList = UsageRecord[];
    
    export type UsageRecordResultList = UsageRecordResult[];
    
    export type UsageRecordResultStatus = string;
    
    export type errorMessage = string;

    export interface BatchMeterUsageRequest {
        /** The set of UsageRecords to submit. BatchMeterUsage accepts up to 25 UsageRecords
at a time. **/
        UsageRecords: UsageRecordList;
        /** Product code is used to uniquely identify a product in AWS Marketplace. The
product code should be the same as the one used during the publishing of a new
product. **/
        ProductCode: ProductCode;
    }
    export interface BatchMeterUsageResult {
        /** Contains all UsageRecords processed by BatchMeterUsage. These records were
either honored by AWS Marketplace Metering Service or were invalid. **/
        Results?: UsageRecordResultList;
        /** Contains all UsageRecords that were not processed by BatchMeterUsage. This is a
list of UsageRecords. You can retry the failed request by making another
BatchMeterUsage call with this list as input in the BatchMeterUsageRequest. **/
        UnprocessedRecords?: UsageRecordList;
    }
    export interface DuplicateRequestException {
        message?: errorMessage;
    }
    export interface ExpiredTokenException {
        message?: errorMessage;
    }
    export interface InternalServiceErrorException {
        message?: errorMessage;
    }
    export interface InvalidCustomerIdentifierException {
        message?: errorMessage;
    }
    export interface InvalidEndpointRegionException {
        message?: errorMessage;
    }
    export interface InvalidProductCodeException {
        message?: errorMessage;
    }
    export interface InvalidTokenException {
        message?: errorMessage;
    }
    export interface InvalidUsageDimensionException {
        message?: errorMessage;
    }
    export interface MeterUsageRequest {
        /** Product code is used to uniquely identify a product in AWS Marketplace. The
product code should be the same as the one used during the publishing of a new
product. **/
        ProductCode: ProductCode;
        /** Timestamp of the hour, recorded in UTC. The seconds and milliseconds portions of
the timestamp will be ignored. **/
        Timestamp: Timestamp;
        /** It will be one of the fcp dimension name provided during the publishing of the
product. **/
        UsageDimension: UsageDimension;
        /** Consumption value for the hour. **/
        UsageQuantity: UsageQuantity;
        /** Checks whether you have the permissions required for the action, but does not
make the request. If you have the permissions, the request returns
DryRunOperation; otherwise, it returns UnauthorizedException. **/
        DryRun: Boolean;
    }
    export interface MeterUsageResult {
        MeteringRecordId?: String;
    }
    export interface ResolveCustomerRequest {
        /** When a buyer visits your website during the registration process, the buyer
submits a registration token through the browser. The registration token is
resolved to obtain a CustomerIdentifier and product code. **/
        RegistrationToken: NonEmptyString;
    }
    export interface ResolveCustomerResult {
        /** The CustomerIdentifier is used to identify an individual customer in your
application. Calls to BatchMeterUsage require CustomerIdentifiers for each
UsageRecord. **/
        CustomerIdentifier?: CustomerIdentifier;
        /** The product code is returned to confirm that the buyer is registering for your
product. Subsequent BatchMeterUsage calls should be made using this product
code. **/
        ProductCode?: ProductCode;
    }
    export interface ThrottlingException {
        message?: errorMessage;
    }
    export interface TimestampOutOfBoundsException {
        message?: errorMessage;
    }
    export interface UsageRecord {
        /** Timestamp of the hour, recorded in UTC. The seconds and milliseconds portions of
the timestamp will be ignored.

Your application can meter usage for up to one hour in the past. **/
        Timestamp: Timestamp;
        /** The CustomerIdentifier is obtained through the ResolveCustomer operation and
represents an individual buyer in your application. **/
        CustomerIdentifier: CustomerIdentifier;
        /** During the process of registering a product on AWS Marketplace, up to eight
dimensions are specified. These represent different units of value in your
application. **/
        Dimension: UsageDimension;
        /** The quantity of usage consumed by the customer for the given dimension and time. **/
        Quantity: UsageQuantity;
    }
    export interface UsageRecordResult {
        /** The UsageRecord that was part of the BatchMeterUsage request. **/
        UsageRecord?: UsageRecord;
        /** The MeteringRecordId is a unique identifier for this metering event. **/
        MeteringRecordId?: String;
        /** The UsageRecordResult Status indicates the status of an individual UsageRecord
processed by BatchMeterUsage.

 &amp;#42;   Success- The UsageRecord was accepted and honored by BatchMeterUsage.
   
   
 *   CustomerNotSubscribed- The CustomerIdentifier specified is not subscribed to
   your product. The UsageRecord was not honored. Future UsageRecords for this
   customer will fail until the customer subscribes to your product.
   
   
 *   DuplicateRecord- Indicates that the UsageRecord was invalid and not honored.
   A previously metered UsageRecord had the same customer, dimension, and time,
   but a different quantity. **/
        Status?: UsageRecordResultStatus;
    }
  }
}
