// DO NOT EDIT!
//

///<reference path="./aws-sdk-common.d.ts" />
declare module "aws-sdk" {
    export class MarketplaceCommerceAnalytics {
      constructor(options?: any);
      generateDataSet(params: MarketplaceCommerceAnalyticsGenerateDataSetRequest, callback: (err: MarketplaceCommerceAnalyticsMarketplaceCommerceAnalyticsException|any, data: MarketplaceCommerceAnalyticsGenerateDataSetResult|any) => void): void;
    }

    export type MarketplaceCommerceAnalyticsDataSetPublicationDate = number;
    export type MarketplaceCommerceAnalyticsDataSetRequestId = string;
    export type MarketplaceCommerceAnalyticsDataSetType = string;
    export type MarketplaceCommerceAnalyticsDestinationS3BucketName = string;
    export type MarketplaceCommerceAnalyticsDestinationS3Prefix = string;
    export type MarketplaceCommerceAnalyticsExceptionMessage = string;
    export interface MarketplaceCommerceAnalyticsGenerateDataSetRequest {
        dataSetType: MarketplaceCommerceAnalyticsDataSetType;
        dataSetPublicationDate: MarketplaceCommerceAnalyticsDataSetPublicationDate;
        roleNameArn: MarketplaceCommerceAnalyticsRoleNameArn;
        destinationS3BucketName: MarketplaceCommerceAnalyticsDestinationS3BucketName;
        destinationS3Prefix?: MarketplaceCommerceAnalyticsDestinationS3Prefix;
        snsTopicArn: MarketplaceCommerceAnalyticsSnsTopicArn;
    }

    export interface MarketplaceCommerceAnalyticsGenerateDataSetResult {
        dataSetRequestId?: MarketplaceCommerceAnalyticsDataSetRequestId;
    }

    export interface MarketplaceCommerceAnalyticsMarketplaceCommerceAnalyticsException {
        message?: MarketplaceCommerceAnalyticsExceptionMessage;
    }

    export type MarketplaceCommerceAnalyticsRoleNameArn = string;
    export type MarketplaceCommerceAnalyticsSnsTopicArn = string;
}
