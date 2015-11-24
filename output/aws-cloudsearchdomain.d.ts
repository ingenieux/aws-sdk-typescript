// DO NOT EDIT!
//

///<reference path="./aws-sdk-common.d.ts" />
declare module "aws-sdk" {
    export class CloudSearchDomain {
      constructor(options?: any);
      search(params: CloudSearchDomainSearchRequest, callback: (err: CloudSearchDomainSearchException|any, data: CloudSearchDomainSearchResponse|any) => void): void;
      suggest(params: CloudSearchDomainSuggestRequest, callback: (err: CloudSearchDomainSearchException|any, data: CloudSearchDomainSuggestResponse|any) => void): void;
      uploadDocuments(params: CloudSearchDomainUploadDocumentsRequest, callback: (err: CloudSearchDomainDocumentServiceException|any, data: CloudSearchDomainUploadDocumentsResponse|any) => void): void;
    }

    export type CloudSearchDomainAdds = number;
    export type CloudSearchDomainBlob = any; // not really - it was 'blob' instead - must fix this one
    export interface CloudSearchDomainBucket {
        value?: CloudSearchDomainString;
        count?: CloudSearchDomainLong;
    }

    export interface CloudSearchDomainBucketInfo {
        buckets?: CloudSearchDomainBucketList;
    }

    export type CloudSearchDomainBucketList = Array<CloudSearchDomainBucket>;
    export type CloudSearchDomainContentType = string;
    export type CloudSearchDomainCursor = string;
    export type CloudSearchDomainDeletes = number;
    export interface CloudSearchDomainDocumentServiceException {
        status?: CloudSearchDomainString;
        message?: CloudSearchDomainString;
    }

    export interface CloudSearchDomainDocumentServiceWarning {
        message?: CloudSearchDomainString;
    }

    export type CloudSearchDomainDocumentServiceWarnings = Array<CloudSearchDomainDocumentServiceWarning>;
    export type CloudSearchDomainExpr = string;
    export type CloudSearchDomainExprs = any; // not really - it was 'map' instead - must fix this one
    export type CloudSearchDomainFacet = string;
    export type CloudSearchDomainFacets = any; // not really - it was 'map' instead - must fix this one
    export type CloudSearchDomainFieldValue = Array<CloudSearchDomainString>;
    export type CloudSearchDomainFields = any; // not really - it was 'map' instead - must fix this one
    export type CloudSearchDomainFilterQuery = string;
    export type CloudSearchDomainHighlight = string;
    export type CloudSearchDomainHighlights = any; // not really - it was 'map' instead - must fix this one
    export interface CloudSearchDomainHit {
        id?: CloudSearchDomainString;
        fields?: CloudSearchDomainFields;
        exprs?: CloudSearchDomainExprs;
        highlights?: CloudSearchDomainHighlights;
    }

    export type CloudSearchDomainHitList = Array<CloudSearchDomainHit>;
    export interface CloudSearchDomainHits {
        found?: CloudSearchDomainLong;
        start?: CloudSearchDomainLong;
        cursor?: CloudSearchDomainString;
        hit?: CloudSearchDomainHitList;
    }

    export type CloudSearchDomainLong = number;
    export type CloudSearchDomainPartial = boolean;
    export type CloudSearchDomainQuery = string;
    export type CloudSearchDomainQueryOptions = string;
    export type CloudSearchDomainQueryParser = string;
    export type CloudSearchDomainReturn = string;
    export interface CloudSearchDomainSearchException {
        message?: CloudSearchDomainString;
    }

    export interface CloudSearchDomainSearchRequest {
        cursor?: CloudSearchDomainCursor;
        expr?: CloudSearchDomainExpr;
        facet?: CloudSearchDomainFacet;
        filterQuery?: CloudSearchDomainFilterQuery;
        highlight?: CloudSearchDomainHighlight;
        partial?: CloudSearchDomainPartial;
        query: CloudSearchDomainQuery;
        queryOptions?: CloudSearchDomainQueryOptions;
        queryParser?: CloudSearchDomainQueryParser;
        return?: CloudSearchDomainReturn;
        size?: CloudSearchDomainSize;
        sort?: CloudSearchDomainSort;
        start?: CloudSearchDomainStart;
    }

    export interface CloudSearchDomainSearchResponse {
        status?: CloudSearchDomainSearchStatus;
        hits?: CloudSearchDomainHits;
        facets?: CloudSearchDomainFacets;
    }

    export interface CloudSearchDomainSearchStatus {
        timems?: CloudSearchDomainLong;
        rid?: CloudSearchDomainString;
    }

    export type CloudSearchDomainSize = number;
    export type CloudSearchDomainSort = string;
    export type CloudSearchDomainStart = number;
    export type CloudSearchDomainString = string;
    export interface CloudSearchDomainSuggestModel {
        query?: CloudSearchDomainString;
        found?: CloudSearchDomainLong;
        suggestions?: CloudSearchDomainSuggestions;
    }

    export interface CloudSearchDomainSuggestRequest {
        query: CloudSearchDomainQuery;
        suggester: CloudSearchDomainSuggester;
        size?: CloudSearchDomainSuggestionsSize;
    }

    export interface CloudSearchDomainSuggestResponse {
        status?: CloudSearchDomainSuggestStatus;
        suggest?: CloudSearchDomainSuggestModel;
    }

    export interface CloudSearchDomainSuggestStatus {
        timems?: CloudSearchDomainLong;
        rid?: CloudSearchDomainString;
    }

    export type CloudSearchDomainSuggester = string;
    export interface CloudSearchDomainSuggestionMatch {
        suggestion?: CloudSearchDomainString;
        score?: CloudSearchDomainLong;
        id?: CloudSearchDomainString;
    }

    export type CloudSearchDomainSuggestions = Array<CloudSearchDomainSuggestionMatch>;
    export type CloudSearchDomainSuggestionsSize = number;
    export interface CloudSearchDomainUploadDocumentsRequest {
        documents: CloudSearchDomainBlob;
        contentType: CloudSearchDomainContentType;
    }

    export interface CloudSearchDomainUploadDocumentsResponse {
        status?: CloudSearchDomainString;
        adds?: CloudSearchDomainAdds;
        deletes?: CloudSearchDomainDeletes;
        warnings?: CloudSearchDomainDocumentServiceWarnings;
    }

}
