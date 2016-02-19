// Type definitions for aws-sdk - AWS Marketplace Commerce Analytics
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

///<reference path="./aws-sdk-common.d.ts" />

declare module "aws-sdk" {

    /*
     * apiVersion: 2015-07-01
     * endpointPrefix: marketplacecommerceanalytics
     * serviceAbbreviation: 
     * signatureVersion: v4
     * protocol: json
     */
    export class MarketplaceCommerceAnalytics extends Service {
      constructor(options?: any);
      endpoint: Endpoint;
      generateDataSet(params: MarketplaceCommerceAnalytics.GenerateDataSetRequest, callback?: (err: MarketplaceCommerceAnalytics.MarketplaceCommerceAnalyticsException|any, data: MarketplaceCommerceAnalytics.GenerateDataSetResult|any) => void): Request;

    }

    export module MarketplaceCommerceAnalytics {
        export type CustomerDefinedValues = {[key:string]: OptionalValue};    // max: 5, min: 1
        export type DataSetPublicationDate = number;
        export type DataSetRequestId = string;
        export type DataSetType = string;    // max: 255, min: 1
        export type DestinationS3BucketName = string;    // min: 1
        export type DestinationS3Prefix = string;
        export type ExceptionMessage = string;
        export type OptionalKey = string;    // max: 255, min: 1
        export type OptionalValue = string;    // max: 255, min: 1
        export type RoleNameArn = string;    // min: 1
        export type SnsTopicArn = string;    // min: 1

        export interface GenerateDataSetRequest {
            dataSetType: DataSetType;
            dataSetPublicationDate: DataSetPublicationDate;
            roleNameArn: RoleNameArn;
            destinationS3BucketName: DestinationS3BucketName;
            destinationS3Prefix?: DestinationS3Prefix;
            snsTopicArn: SnsTopicArn;
            customerDefinedValues?: CustomerDefinedValues;
        }
        export interface GenerateDataSetResult {
            dataSetRequestId?: DataSetRequestId;
        }
        export interface MarketplaceCommerceAnalyticsException {
            message?: ExceptionMessage;
        }

    }
}
