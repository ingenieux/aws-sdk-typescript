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
 
  &amp;#42;  MeterUsage- Submits the metering record for a Marketplace product.
    *
    */
  export class MarketplaceMetering extends Service {
    constructor(options?: any);
    endpoint: Endpoint;
    /**
     * API to emit metering records. For identical requests, the API is idempotent. It
simply returns the metering record ID.
     *
     * @error InternalServiceErrorException   
     * @error InvalidProductCodeException   
     * @error InvalidUsageDimensionException   
     * @error InvalidEndpointRegionException   
     * @error TimestampOutOfBoundsException   
     * @error DuplicateRequestException   
     * @error ThrottlingException   
     */
    meterUsage(params: MarketplaceMetering.MeterUsageRequest, callback?: (err: MarketplaceMetering.InternalServiceErrorException | MarketplaceMetering.InvalidProductCodeException | MarketplaceMetering.InvalidUsageDimensionException | MarketplaceMetering.InvalidEndpointRegionException | MarketplaceMetering.TimestampOutOfBoundsException | MarketplaceMetering.DuplicateRequestException | MarketplaceMetering.ThrottlingException | any, data: MarketplaceMetering.MeterUsageResult | any) => void): Request<MarketplaceMetering.MeterUsageResult | any, MarketplaceMetering.InternalServiceErrorException | MarketplaceMetering.InvalidProductCodeException | MarketplaceMetering.InvalidUsageDimensionException | MarketplaceMetering.InvalidEndpointRegionException | MarketplaceMetering.TimestampOutOfBoundsException | MarketplaceMetering.DuplicateRequestException | MarketplaceMetering.ThrottlingException | any>;

  }

  export module MarketplaceMetering {

    export type Boolean = boolean;

    export type ProductCode = string;

    export type String = string;

    export type Timestamp = number;

    export type UsageDimension = string;

    export type UsageQuantity = number;

    export type errorMessage = string;

    export interface DuplicateRequestException {
      message?: errorMessage;
    }
    export interface InternalServiceErrorException {
      message?: errorMessage;
    }
    export interface InvalidEndpointRegionException {
      message?: errorMessage;
    }
    export interface InvalidProductCodeException {
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
      /** It will be one of the &#x27;fcp dimension name&#x27; provided during the publishing of the
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
    export interface ThrottlingException {
      message?: errorMessage;
    }
    export interface TimestampOutOfBoundsException {
      message?: errorMessage;
    }
  }
}
