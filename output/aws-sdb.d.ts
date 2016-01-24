// Type definitions for aws-sdk - Amazon SimpleDB
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

///<reference path="./aws-sdk-common.d.ts" />

declare module "aws-sdk" {

    /*
     * apiVersion: 2009-04-15
     * endpointPrefix: sdb
     * serviceAbbreviation: 
     * signatureVersion: v2
     * protocol: query
     */
    export class SimpleDB extends Service {
      constructor(options?: any);
      endpoint: Endpoint;
      batchDeleteAttributes(params: SimpleDB.BatchDeleteAttributesRequest, callback?: (err: any, data: any) => void): Request;
      batchPutAttributes(params: SimpleDB.BatchPutAttributesRequest, callback?: (err: SimpleDB.DuplicateItemName|SimpleDB.InvalidParameterValue|SimpleDB.MissingParameter|SimpleDB.NoSuchDomain|SimpleDB.NumberItemAttributesExceeded|SimpleDB.NumberDomainAttributesExceeded|SimpleDB.NumberDomainBytesExceeded|SimpleDB.NumberSubmittedItemsExceeded|SimpleDB.NumberSubmittedAttributesExceeded|any, data: any) => void): Request;
      createDomain(params: SimpleDB.CreateDomainRequest, callback?: (err: SimpleDB.InvalidParameterValue|SimpleDB.MissingParameter|SimpleDB.NumberDomainsExceeded|any, data: any) => void): Request;
      deleteAttributes(params: SimpleDB.DeleteAttributesRequest, callback?: (err: SimpleDB.InvalidParameterValue|SimpleDB.MissingParameter|SimpleDB.NoSuchDomain|SimpleDB.AttributeDoesNotExist|any, data: any) => void): Request;
      deleteDomain(params: SimpleDB.DeleteDomainRequest, callback?: (err: SimpleDB.MissingParameter|any, data: any) => void): Request;
      domainMetadata(params: SimpleDB.DomainMetadataRequest, callback?: (err: SimpleDB.MissingParameter|SimpleDB.NoSuchDomain|any, data: SimpleDB.DomainMetadataResult|any) => void): Request;
      getAttributes(params: SimpleDB.GetAttributesRequest, callback?: (err: SimpleDB.InvalidParameterValue|SimpleDB.MissingParameter|SimpleDB.NoSuchDomain|any, data: SimpleDB.GetAttributesResult|any) => void): Request;
      listDomains(params: SimpleDB.ListDomainsRequest, callback?: (err: SimpleDB.InvalidParameterValue|SimpleDB.InvalidNextToken|any, data: SimpleDB.ListDomainsResult|any) => void): Request;
      putAttributes(params: SimpleDB.PutAttributesRequest, callback?: (err: SimpleDB.InvalidParameterValue|SimpleDB.MissingParameter|SimpleDB.NoSuchDomain|SimpleDB.NumberDomainAttributesExceeded|SimpleDB.NumberDomainBytesExceeded|SimpleDB.NumberItemAttributesExceeded|SimpleDB.AttributeDoesNotExist|any, data: any) => void): Request;
      select(params: SimpleDB.SelectRequest, callback?: (err: SimpleDB.InvalidParameterValue|SimpleDB.InvalidNextToken|SimpleDB.InvalidNumberPredicates|SimpleDB.InvalidNumberValueTests|SimpleDB.InvalidQueryExpression|SimpleDB.MissingParameter|SimpleDB.NoSuchDomain|SimpleDB.RequestTimeout|SimpleDB.TooManyRequestedAttributes|any, data: SimpleDB.SelectResult|any) => void): Request;

    }

    export module SimpleDB {
        export type AttributeList = Attribute[];
        export type AttributeNameList = String[];
        export type Boolean = boolean;
        export type DeletableAttributeList = DeletableAttribute[];
        export type DeletableItemList = DeletableItem[];
        export type DomainNameList = String[];
        export type Float = number;
        export type Integer = number;
        export type ItemList = Item[];
        export type Long = number;
        export type ReplaceableAttributeList = ReplaceableAttribute[];
        export type ReplaceableItemList = ReplaceableItem[];
        export type String = string;

        export interface Attribute {
            Name: String;
            AlternateNameEncoding?: String;
            Value: String;
            AlternateValueEncoding?: String;
        }
        export interface AttributeDoesNotExist {
            BoxUsage?: Float;
        }
        export interface BatchDeleteAttributesRequest {
            DomainName: String;
            Items: DeletableItemList;
        }
        export interface BatchPutAttributesRequest {
            DomainName: String;
            Items: ReplaceableItemList;
        }
        export interface CreateDomainRequest {
            DomainName: String;
        }
        export interface DeletableAttribute {
            Name: String;
            Value?: String;
        }
        export interface DeletableItem {
            Name: String;
            Attributes?: DeletableAttributeList;
        }
        export interface DeleteAttributesRequest {
            DomainName: String;
            ItemName: String;
            Attributes?: DeletableAttributeList;
            Expected?: UpdateCondition;
        }
        export interface DeleteDomainRequest {
            DomainName: String;
        }
        export interface DomainMetadataRequest {
            DomainName: String;
        }
        export interface DomainMetadataResult {
            ItemCount?: Integer;
            ItemNamesSizeBytes?: Long;
            AttributeNameCount?: Integer;
            AttributeNamesSizeBytes?: Long;
            AttributeValueCount?: Integer;
            AttributeValuesSizeBytes?: Long;
            Timestamp?: Integer;
        }
        export interface DuplicateItemName {
            BoxUsage?: Float;
        }
        export interface GetAttributesRequest {
            DomainName: String;
            ItemName: String;
            AttributeNames?: AttributeNameList;
            ConsistentRead?: Boolean;
        }
        export interface GetAttributesResult {
            Attributes?: AttributeList;
        }
        export interface InvalidNextToken {
            BoxUsage?: Float;
        }
        export interface InvalidNumberPredicates {
            BoxUsage?: Float;
        }
        export interface InvalidNumberValueTests {
            BoxUsage?: Float;
        }
        export interface InvalidParameterValue {
            BoxUsage?: Float;
        }
        export interface InvalidQueryExpression {
            BoxUsage?: Float;
        }
        export interface Item {
            Name: String;
            AlternateNameEncoding?: String;
            Attributes: AttributeList;
        }
        export interface ListDomainsRequest {
            MaxNumberOfDomains?: Integer;
            NextToken?: String;
        }
        export interface ListDomainsResult {
            DomainNames?: DomainNameList;
            NextToken?: String;
        }
        export interface MissingParameter {
            BoxUsage?: Float;
        }
        export interface NoSuchDomain {
            BoxUsage?: Float;
        }
        export interface NumberDomainAttributesExceeded {
            BoxUsage?: Float;
        }
        export interface NumberDomainBytesExceeded {
            BoxUsage?: Float;
        }
        export interface NumberDomainsExceeded {
            BoxUsage?: Float;
        }
        export interface NumberItemAttributesExceeded {
            BoxUsage?: Float;
        }
        export interface NumberSubmittedAttributesExceeded {
            BoxUsage?: Float;
        }
        export interface NumberSubmittedItemsExceeded {
            BoxUsage?: Float;
        }
        export interface PutAttributesRequest {
            DomainName: String;
            ItemName: String;
            Attributes: ReplaceableAttributeList;
            Expected?: UpdateCondition;
        }
        export interface ReplaceableAttribute {
            Name: String;
            Value: String;
            Replace?: Boolean;
        }
        export interface ReplaceableItem {
            Name: String;
            Attributes: ReplaceableAttributeList;
        }
        export interface RequestTimeout {
            BoxUsage?: Float;
        }
        export interface SelectRequest {
            SelectExpression: String;
            NextToken?: String;
            ConsistentRead?: Boolean;
        }
        export interface SelectResult {
            Items?: ItemList;
            NextToken?: String;
        }
        export interface TooManyRequestedAttributes {
            BoxUsage?: Float;
        }
        export interface UpdateCondition {
            Name?: String;
            Value?: String;
            Exists?: Boolean;
        }

    }
}
