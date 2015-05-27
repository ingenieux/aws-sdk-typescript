// DO NOT EDIT!
//
declare module "aws-sdk" {
    export class CloudSearchDomain {
      constructor(options?: any);
      search(params: SearchRequest, callback: (err: SearchException|any, data: SearchResponse|any) => void): void;
      suggest(params: SuggestRequest, callback: (err: SearchException|any, data: SuggestResponse|any) => void): void;
      uploadDocuments(params: UploadDocumentsRequest, callback: (err: DocumentServiceException|any, data: UploadDocumentsResponse|any) => void): void;
    }

    export type Adds = number;

    export type Blob = any; // not really - it was 'blob' instead - must fix this one

    export interface Bucket {
      value?: String;
      count?: Long;
    }


    export interface BucketInfo {
      buckets?: BucketList;
    }


    export type BucketList = Array<Bucket>;

    export type ContentType = string;

    export type Cursor = string;

    export type Deletes = number;

    export interface DocumentServiceException {
      status?: String;
      message?: String;
    }


    export interface DocumentServiceWarning {
      message?: String;
    }


    export type DocumentServiceWarnings = Array<DocumentServiceWarning>;

    export type Expr = string;

    export type Exprs = any; // not really - it was 'map' instead - must fix this one

    export type Facet = string;

    export type Facets = any; // not really - it was 'map' instead - must fix this one

    export type FieldValue = Array<String>;

    export type Fields = any; // not really - it was 'map' instead - must fix this one

    export type FilterQuery = string;

    export type Highlight = string;

    export type Highlights = any; // not really - it was 'map' instead - must fix this one

    export interface Hit {
      id?: String;
      fields?: Fields;
      exprs?: Exprs;
      highlights?: Highlights;
    }


    export type HitList = Array<Hit>;

    export interface Hits {
      found?: Long;
      start?: Long;
      cursor?: String;
      hit?: HitList;
    }


    export type Long = number;

    export type Partial = boolean;

    export type Query = string;

    export type QueryOptions = string;

    export type QueryParser = string;

    export type Return = string;

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


    export type Size = number;

    export type Sort = string;

    export type Start = number;

    export type String = string;

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


    export type Suggester = string;

    export interface SuggestionMatch {
      suggestion?: String;
      score?: Long;
      id?: String;
    }


    export type Suggestions = Array<SuggestionMatch>;

    export type SuggestionsSize = number;

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
