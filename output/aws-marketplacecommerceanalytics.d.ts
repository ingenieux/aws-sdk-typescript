// DO NOT EDIT!
//

///<reference path="./aws-sdk-common.d.ts" />
declare module "aws-sdk" {

    export class MarketplaceCommerceAnalytics extends Service {
      constructor(options?: any);
      generateDataSet(params: MarketplaceCommerceAnalytics.GenerateDataSetRequest, callback?: (err: MarketplaceCommerceAnalytics.MarketplaceCommerceAnalyticsException|any, data: MarketplaceCommerceAnalytics.GenerateDataSetResult|any) => void): Request;
    }
    
    export module MarketplaceCommerceAnalytics {
        export type DataSetPublicationDate = number;
        export type DataSetRequestId = string;
        export type DataSetType = string;    // max: 255, min: 1
        export type DestinationS3BucketName = string;    // min: 1
        export type DestinationS3Prefix = string;
        export type ExceptionMessage = string;
        export type RoleNameArn = string;    // min: 1
        export type SnsTopicArn = string;    // min: 1

        export interface GenerateDataSetRequest {
            dataSetType: DataSetType;            
            dataSetPublicationDate: DataSetPublicationDate;            
            roleNameArn: RoleNameArn;            
            destinationS3BucketName: DestinationS3BucketName;            
            destinationS3Prefix?: DestinationS3Prefix;            
            snsTopicArn: SnsTopicArn;            
        }
        export interface GenerateDataSetResult {
            dataSetRequestId?: DataSetRequestId;            
        }
        export interface MarketplaceCommerceAnalyticsException {
            message?: ExceptionMessage;            
        }

    }
}
