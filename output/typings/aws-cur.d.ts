// Type definitions for aws-sdk - AWS Cost and Usage Report Service
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

// COMMENTED <reference path="./aws-sdk.d.ts" />

declare module "aws-sdk" {

 /**
   * apiVersion: 2017-01-06
   * endpointPrefix: cur
   * serviceAbbreviation: 
   * signatureVersion: v4
   * protocol: json
   *
   * All public APIs for AWS Cost and Usage Report service
   *
   */
  export class CUR extends Service {
    constructor(options?: any);
    endpoint: Endpoint;
    /**
     * Delete a specified report definition
     *
     * @error InternalErrorException   
     * @error ValidationException   
     */
    deleteReportDefinition(params: CUR.DeleteReportDefinitionRequest, callback?: (err: CUR.InternalErrorException|CUR.ValidationException|any, data: CUR.DeleteReportDefinitionResponse|any) => void): Request<CUR.DeleteReportDefinitionResponse|any,CUR.InternalErrorException|CUR.ValidationException|any>;
    /**
     * Describe a list of report definitions owned by the account
     *
     * @error InternalErrorException   
     */
    describeReportDefinitions(params: CUR.DescribeReportDefinitionsRequest, callback?: (err: CUR.InternalErrorException|any, data: CUR.DescribeReportDefinitionsResponse|any) => void): Request<CUR.DescribeReportDefinitionsResponse|any,CUR.InternalErrorException|any>;
    /**
     * Create a new report definition
     *
     * @error DuplicateReportNameException   
     * @error ReportLimitReachedException   
     * @error InternalErrorException   
     * @error ValidationException   
     */
    putReportDefinition(params: CUR.PutReportDefinitionRequest, callback?: (err: CUR.DuplicateReportNameException|CUR.ReportLimitReachedException|CUR.InternalErrorException|CUR.ValidationException|any, data: CUR.PutReportDefinitionResponse|any) => void): Request<CUR.PutReportDefinitionResponse|any,CUR.DuplicateReportNameException|CUR.ReportLimitReachedException|CUR.InternalErrorException|CUR.ValidationException|any>;

  }

  export module CUR {
    
    export type AWSRegion = string;
    
    export type AdditionalArtifact = string;
    
    export type AdditionalArtifactList = AdditionalArtifact[];
    
    export type CompressionFormat = string;
    
    export type DeleteResponseMessage = string;
    
    export type ErrorMessage = string;
    
    export type GenericString = string;
    
    export type MaxResults = number;
    
    export type ReportDefinitionList = ReportDefinition[];
    
    export type ReportFormat = string;
    
    export type ReportName = string;
    
    export type S3Bucket = string;
    
    export type S3Prefix = string;
    
    export type SchemaElement = string;
    
    export type SchemaElementList = SchemaElement[];
    
    export type TimeUnit = string;

    export interface DeleteReportDefinitionRequest {
        ReportName?: ReportName;
    }
    export interface DeleteReportDefinitionResponse {
        ResponseMessage?: DeleteResponseMessage;
    }
    export interface DescribeReportDefinitionsRequest {
        MaxResults?: MaxResults;
        NextToken?: GenericString;
    }
    export interface DescribeReportDefinitionsResponse {
        ReportDefinitions?: ReportDefinitionList;
        NextToken?: GenericString;
    }
    export interface DuplicateReportNameException {
        Message?: ErrorMessage;
    }
    export interface InternalErrorException {
        Message?: ErrorMessage;
    }
    export interface PutReportDefinitionRequest {
        ReportDefinition: ReportDefinition;
    }
    export interface PutReportDefinitionResponse {
    }
    export interface ReportDefinition {
        ReportName: ReportName;
        TimeUnit: TimeUnit;
        Format: ReportFormat;
        Compression: CompressionFormat;
        AdditionalSchemaElements: SchemaElementList;
        S3Bucket: S3Bucket;
        S3Prefix: S3Prefix;
        S3Region: AWSRegion;
        AdditionalArtifacts?: AdditionalArtifactList;
    }
    export interface ReportLimitReachedException {
        Message?: ErrorMessage;
    }
    export interface ValidationException {
        Message?: ErrorMessage;
    }
  }
}
