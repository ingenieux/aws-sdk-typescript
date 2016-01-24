// Type definitions for aws-sdk - Amazon CloudSearch Domain
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

///<reference path="./aws-sdk-common.d.ts" />

declare module "aws-sdk" {

    /*
     * apiVersion: 2013-01-01
     * endpointPrefix: cloudsearchdomain
     * serviceAbbreviation: 
     * signatureVersion: v4
     * protocol: rest-json
     */
    export class CloudSearchDomain extends Service {
      constructor(options?: any);
      endpoint: Endpoint;
      search(params: CloudSearchDomain.SearchRequest, callback?: (err: CloudSearchDomain.SearchException|any, data: CloudSearchDomain.SearchResponse|any) => void): Request;
      suggest(params: CloudSearchDomain.SuggestRequest, callback?: (err: CloudSearchDomain.SearchException|any, data: CloudSearchDomain.SuggestResponse|any) => void): Request;
      uploadDocuments(params: CloudSearchDomain.UploadDocumentsRequest, callback?: (err: CloudSearchDomain.DocumentServiceException|any, data: CloudSearchDomain.UploadDocumentsResponse|any) => void): Request;

      // Found on JS Sources - Sorry for the inconvenience :)
      validateService(...args: any[]): any
      // Found on JS Sources - Sorry for the inconvenience :)
      setupRequestListeners(...args: any[]): any
      // Found on JS Sources - Sorry for the inconvenience :)
      validateCredentials(...args: any[]): any
      // Found on JS Sources - Sorry for the inconvenience :)
      updateRegion(...args: any[]): any
    }

    export module CloudSearchDomain {
        export type Adds = number;
        export type Blob = any;    // type: blob
        export type BucketList = Bucket[];
        export type ContentType = string;
        export type Cursor = string;
        export type Deletes = number;
        export type DocumentServiceWarnings = DocumentServiceWarning[];
        export type Expr = string;
        export type Exprs = {[key:string]: String};
        export type Facet = string;
        export type Facets = {[key:string]: BucketInfo};
        export type FieldValue = String[];
        export type Fields = {[key:string]: FieldValue};
        export type FilterQuery = string;
        export type Highlight = string;
        export type Highlights = {[key:string]: String};
        export type HitList = Hit[];
        export type Long = number;
        export type Partial = boolean;
        export type Query = string;
        export type QueryOptions = string;
        export type QueryParser = string;
        export type Return = string;
        export type Size = number;
        export type Sort = string;
        export type Start = number;
        export type String = string;
        export type Suggester = string;
        export type Suggestions = SuggestionMatch[];
        export type SuggestionsSize = number;

        export interface Bucket {
            value?: String;
            count?: Long;
        }
        export interface BucketInfo {
            buckets?: BucketList;
        }
        export interface DocumentServiceException {
            status?: String;
            message?: String;
        }
        export interface DocumentServiceWarning {
            message?: String;
        }
        export interface Hit {
            id?: String;
            fields?: Fields;
            exprs?: Exprs;
            highlights?: Highlights;
        }
        export interface Hits {
            found?: Long;
            start?: Long;
            cursor?: String;
            hit?: HitList;
        }
        export interface SearchException {
            message?: String;
        }
        export interface SearchRequest {
            cursor?: Cursor;
            expr?: Expr;
            facet?: Facet;
            filterQuery?: FilterQuery;
            highlight?: Highlight;
            partial?: Partial;
            query: Query;
            queryOptions?: QueryOptions;
            queryParser?: QueryParser;
            return?: Return;
            size?: Size;
            sort?: Sort;
            start?: Start;
        }
        export interface SearchResponse {
            status?: SearchStatus;
            hits?: Hits;
            facets?: Facets;
        }
        export interface SearchStatus {
            timems?: Long;
            rid?: String;
        }
        export interface SuggestModel {
            query?: String;
            found?: Long;
            suggestions?: Suggestions;
        }
        export interface SuggestRequest {
            query: Query;
            suggester: Suggester;
            size?: SuggestionsSize;
        }
        export interface SuggestResponse {
            status?: SuggestStatus;
            suggest?: SuggestModel;
        }
        export interface SuggestStatus {
            timems?: Long;
            rid?: String;
        }
        export interface SuggestionMatch {
            suggestion?: String;
            score?: Long;
            id?: String;
        }
        export interface UploadDocumentsRequest {
            documents: Blob;
            contentType: ContentType;
        }
        export interface UploadDocumentsResponse {
            status?: String;
            adds?: Adds;
            deletes?: Deletes;
            warnings?: DocumentServiceWarnings;
        }

    }
}
