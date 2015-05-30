// DO NOT EDIT!
//
declare module "aws-sdk" {
    export class CloudSearch {
      constructor(options?: any);
      createDomain(params: CloudSearchCreateDomainRequest, callback: (err: CloudSearchBaseException|CloudSearchInternalException|CloudSearchLimitExceededException|any, data: CloudSearchCreateDomainResponse|any) => void): void;
      defineIndexField(params: CloudSearchDefineIndexFieldRequest, callback: (err: CloudSearchBaseException|CloudSearchInternalException|CloudSearchLimitExceededException|CloudSearchInvalidTypeException|CloudSearchResourceNotFoundException|any, data: CloudSearchDefineIndexFieldResponse|any) => void): void;
      defineRankExpression(params: CloudSearchDefineRankExpressionRequest, callback: (err: CloudSearchBaseException|CloudSearchInternalException|CloudSearchLimitExceededException|CloudSearchInvalidTypeException|CloudSearchResourceNotFoundException|any, data: CloudSearchDefineRankExpressionResponse|any) => void): void;
      deleteDomain(params: CloudSearchDeleteDomainRequest, callback: (err: CloudSearchBaseException|CloudSearchInternalException|any, data: CloudSearchDeleteDomainResponse|any) => void): void;
      deleteIndexField(params: CloudSearchDeleteIndexFieldRequest, callback: (err: CloudSearchBaseException|CloudSearchInternalException|CloudSearchInvalidTypeException|CloudSearchResourceNotFoundException|any, data: CloudSearchDeleteIndexFieldResponse|any) => void): void;
      deleteRankExpression(params: CloudSearchDeleteRankExpressionRequest, callback: (err: CloudSearchBaseException|CloudSearchInternalException|CloudSearchInvalidTypeException|CloudSearchResourceNotFoundException|any, data: CloudSearchDeleteRankExpressionResponse|any) => void): void;
      describeAvailabilityOptions(params: CloudSearchDescribeAvailabilityOptionsRequest, callback: (err: CloudSearchBaseException|CloudSearchInternalException|CloudSearchInvalidTypeException|CloudSearchLimitExceededException|CloudSearchResourceNotFoundException|CloudSearchDisabledOperationException|any, data: CloudSearchDescribeAvailabilityOptionsResponse|any) => void): void;
      describeDefaultSearchField(params: CloudSearchDescribeDefaultSearchFieldRequest, callback: (err: CloudSearchBaseException|CloudSearchInternalException|CloudSearchResourceNotFoundException|any, data: CloudSearchDescribeDefaultSearchFieldResponse|any) => void): void;
      describeDomains(params: CloudSearchDescribeDomainsRequest, callback: (err: CloudSearchBaseException|CloudSearchInternalException|any, data: CloudSearchDescribeDomainsResponse|any) => void): void;
      describeIndexFields(params: CloudSearchDescribeIndexFieldsRequest, callback: (err: CloudSearchBaseException|CloudSearchInternalException|CloudSearchResourceNotFoundException|any, data: CloudSearchDescribeIndexFieldsResponse|any) => void): void;
      describeRankExpressions(params: CloudSearchDescribeRankExpressionsRequest, callback: (err: CloudSearchBaseException|CloudSearchInternalException|CloudSearchResourceNotFoundException|any, data: CloudSearchDescribeRankExpressionsResponse|any) => void): void;
      describeServiceAccessPolicies(params: CloudSearchDescribeServiceAccessPoliciesRequest, callback: (err: CloudSearchBaseException|CloudSearchInternalException|CloudSearchResourceNotFoundException|any, data: CloudSearchDescribeServiceAccessPoliciesResponse|any) => void): void;
      describeStemmingOptions(params: CloudSearchDescribeStemmingOptionsRequest, callback: (err: CloudSearchBaseException|CloudSearchInternalException|CloudSearchResourceNotFoundException|any, data: CloudSearchDescribeStemmingOptionsResponse|any) => void): void;
      describeStopwordOptions(params: CloudSearchDescribeStopwordOptionsRequest, callback: (err: CloudSearchBaseException|CloudSearchInternalException|CloudSearchResourceNotFoundException|any, data: CloudSearchDescribeStopwordOptionsResponse|any) => void): void;
      describeSynonymOptions(params: CloudSearchDescribeSynonymOptionsRequest, callback: (err: CloudSearchBaseException|CloudSearchInternalException|CloudSearchResourceNotFoundException|any, data: CloudSearchDescribeSynonymOptionsResponse|any) => void): void;
      indexDocuments(params: CloudSearchIndexDocumentsRequest, callback: (err: CloudSearchBaseException|CloudSearchInternalException|CloudSearchResourceNotFoundException|any, data: CloudSearchIndexDocumentsResponse|any) => void): void;
      updateAvailabilityOptions(params: CloudSearchUpdateAvailabilityOptionsRequest, callback: (err: CloudSearchBaseException|CloudSearchInternalException|CloudSearchInvalidTypeException|CloudSearchLimitExceededException|CloudSearchResourceNotFoundException|CloudSearchDisabledOperationException|any, data: CloudSearchUpdateAvailabilityOptionsResponse|any) => void): void;
      updateDefaultSearchField(params: CloudSearchUpdateDefaultSearchFieldRequest, callback: (err: CloudSearchBaseException|CloudSearchInternalException|CloudSearchInvalidTypeException|CloudSearchResourceNotFoundException|any, data: CloudSearchUpdateDefaultSearchFieldResponse|any) => void): void;
      updateServiceAccessPolicies(params: CloudSearchUpdateServiceAccessPoliciesRequest, callback: (err: CloudSearchBaseException|CloudSearchInternalException|CloudSearchLimitExceededException|CloudSearchResourceNotFoundException|CloudSearchInvalidTypeException|any, data: CloudSearchUpdateServiceAccessPoliciesResponse|any) => void): void;
      updateStemmingOptions(params: CloudSearchUpdateStemmingOptionsRequest, callback: (err: CloudSearchBaseException|CloudSearchInternalException|CloudSearchInvalidTypeException|CloudSearchLimitExceededException|CloudSearchResourceNotFoundException|any, data: CloudSearchUpdateStemmingOptionsResponse|any) => void): void;
      updateStopwordOptions(params: CloudSearchUpdateStopwordOptionsRequest, callback: (err: CloudSearchBaseException|CloudSearchInternalException|CloudSearchInvalidTypeException|CloudSearchLimitExceededException|CloudSearchResourceNotFoundException|any, data: CloudSearchUpdateStopwordOptionsResponse|any) => void): void;
      updateSynonymOptions(params: CloudSearchUpdateSynonymOptionsRequest, callback: (err: CloudSearchBaseException|CloudSearchInternalException|CloudSearchInvalidTypeException|CloudSearchLimitExceededException|CloudSearchResourceNotFoundException|any, data: CloudSearchUpdateSynonymOptionsResponse|any) => void): void;
    }

    export interface CloudSearchAccessPoliciesStatus {
        Options: CloudSearchPolicyDocument;
        Status: CloudSearchOptionStatus;
    }

    export type CloudSearchArn = string;
    export interface CloudSearchAvailabilityOptionsStatus {
        Options: CloudSearchMultiAZ;
        Status: CloudSearchOptionStatus;
    }

    export interface CloudSearchBaseException {
        Code?: CloudSearchErrorCode;
        Message?: CloudSearchErrorMessage;
    }

    export type CloudSearchBoolean = boolean;
    export interface CloudSearchCreateDomainRequest {
        DomainName: CloudSearchDomainName;
    }

    export interface CloudSearchCreateDomainResponse {
        DomainStatus?: CloudSearchDomainStatus;
    }

    export interface CloudSearchDefaultSearchFieldStatus {
        Options: CloudSearchFieldName;
        Status: CloudSearchOptionStatus;
    }

    export interface CloudSearchDefineIndexFieldRequest {
        DomainName: CloudSearchDomainName;
        IndexField: CloudSearchIndexField;
    }

    export interface CloudSearchDefineIndexFieldResponse {
        IndexField: CloudSearchIndexFieldStatus;
    }

    export interface CloudSearchDefineRankExpressionRequest {
        DomainName: CloudSearchDomainName;
        RankExpression: CloudSearchNamedRankExpression;
    }

    export interface CloudSearchDefineRankExpressionResponse {
        RankExpression: CloudSearchRankExpressionStatus;
    }

    export interface CloudSearchDeleteDomainRequest {
        DomainName: CloudSearchDomainName;
    }

    export interface CloudSearchDeleteDomainResponse {
        DomainStatus?: CloudSearchDomainStatus;
    }

    export interface CloudSearchDeleteIndexFieldRequest {
        DomainName: CloudSearchDomainName;
        IndexFieldName: CloudSearchFieldName;
    }

    export interface CloudSearchDeleteIndexFieldResponse {
        IndexField: CloudSearchIndexFieldStatus;
    }

    export interface CloudSearchDeleteRankExpressionRequest {
        DomainName: CloudSearchDomainName;
        RankName: CloudSearchFieldName;
    }

    export interface CloudSearchDeleteRankExpressionResponse {
        RankExpression: CloudSearchRankExpressionStatus;
    }

    export interface CloudSearchDescribeAvailabilityOptionsRequest {
        DomainName: CloudSearchDomainName;
    }

    export interface CloudSearchDescribeAvailabilityOptionsResponse {
        AvailabilityOptions?: CloudSearchAvailabilityOptionsStatus;
    }

    export interface CloudSearchDescribeDefaultSearchFieldRequest {
        DomainName: CloudSearchDomainName;
    }

    export interface CloudSearchDescribeDefaultSearchFieldResponse {
        DefaultSearchField: CloudSearchDefaultSearchFieldStatus;
    }

    export interface CloudSearchDescribeDomainsRequest {
        DomainNames?: CloudSearchDomainNameList;
    }

    export interface CloudSearchDescribeDomainsResponse {
        DomainStatusList: CloudSearchDomainStatusList;
    }

    export interface CloudSearchDescribeIndexFieldsRequest {
        DomainName: CloudSearchDomainName;
        FieldNames?: CloudSearchFieldNameList;
    }

    export interface CloudSearchDescribeIndexFieldsResponse {
        IndexFields: CloudSearchIndexFieldStatusList;
    }

    export interface CloudSearchDescribeRankExpressionsRequest {
        DomainName: CloudSearchDomainName;
        RankNames?: CloudSearchFieldNameList;
    }

    export interface CloudSearchDescribeRankExpressionsResponse {
        RankExpressions: CloudSearchRankExpressionStatusList;
    }

    export interface CloudSearchDescribeServiceAccessPoliciesRequest {
        DomainName: CloudSearchDomainName;
    }

    export interface CloudSearchDescribeServiceAccessPoliciesResponse {
        AccessPolicies: CloudSearchAccessPoliciesStatus;
    }

    export interface CloudSearchDescribeStemmingOptionsRequest {
        DomainName: CloudSearchDomainName;
    }

    export interface CloudSearchDescribeStemmingOptionsResponse {
        Stems: CloudSearchStemmingOptionsStatus;
    }

    export interface CloudSearchDescribeStopwordOptionsRequest {
        DomainName: CloudSearchDomainName;
    }

    export interface CloudSearchDescribeStopwordOptionsResponse {
        Stopwords: CloudSearchStopwordOptionsStatus;
    }

    export interface CloudSearchDescribeSynonymOptionsRequest {
        DomainName: CloudSearchDomainName;
    }

    export interface CloudSearchDescribeSynonymOptionsResponse {
        Synonyms: CloudSearchSynonymOptionsStatus;
    }

    export interface CloudSearchDisabledOperationException {
    }

    export type CloudSearchDocumentCount = number;
    export type CloudSearchDomainId = string;
    export type CloudSearchDomainName = string; // pattern: "[a-z][a-z0-9\-]+"
    export type CloudSearchDomainNameList = Array<CloudSearchDomainName>;
    export interface CloudSearchDomainStatus {
        DomainId: CloudSearchDomainId;
        DomainName: CloudSearchDomainName;
        Created?: CloudSearchBoolean;
        Deleted?: CloudSearchBoolean;
        NumSearchableDocs?: CloudSearchDocumentCount;
        DocService?: CloudSearchServiceEndpoint;
        SearchService?: CloudSearchServiceEndpoint;
        RequiresIndexDocuments: CloudSearchBoolean;
        Processing?: CloudSearchBoolean;
        SearchInstanceType?: CloudSearchSearchInstanceType;
        SearchPartitionCount?: CloudSearchPartitionCount;
        SearchInstanceCount?: CloudSearchInstanceCount;
    }

    export type CloudSearchDomainStatusList = Array<CloudSearchDomainStatus>;
    export type CloudSearchErrorCode = string;
    export type CloudSearchErrorMessage = string;
    export type CloudSearchFieldName = string; // pattern: "[a-z][a-z0-9_]*"
    export type CloudSearchFieldNameList = Array<CloudSearchFieldName>;
    export type CloudSearchFieldValue = string;
    export interface CloudSearchIndexDocumentsRequest {
        DomainName: CloudSearchDomainName;
    }

    export interface CloudSearchIndexDocumentsResponse {
        FieldNames?: CloudSearchFieldNameList;
    }

    export interface CloudSearchIndexField {
        IndexFieldName: CloudSearchFieldName;
        IndexFieldType: CloudSearchIndexFieldType;
        UIntOptions?: CloudSearchUIntOptions;
        LiteralOptions?: CloudSearchLiteralOptions;
        TextOptions?: CloudSearchTextOptions;
        SourceAttributes?: CloudSearchSourceAttributeList;
    }

    export interface CloudSearchIndexFieldStatus {
        Options: CloudSearchIndexField;
        Status: CloudSearchOptionStatus;
    }

    export type CloudSearchIndexFieldStatusList = Array<CloudSearchIndexFieldStatus>;
    export type CloudSearchIndexFieldType = string;
    export type CloudSearchInstanceCount = number;
    export interface CloudSearchInternalException {
    }

    export interface CloudSearchInvalidTypeException {
    }

    export type CloudSearchLanguage = string; // pattern: "[a-zA-Z]{2,8}(?:-[a-zA-Z]{2,8})*"
    export interface CloudSearchLimitExceededException {
    }

    export interface CloudSearchLiteralOptions {
        DefaultValue?: CloudSearchFieldValue;
        SearchEnabled?: CloudSearchBoolean;
        FacetEnabled?: CloudSearchBoolean;
        ResultEnabled?: CloudSearchBoolean;
    }

    export type CloudSearchMultiAZ = boolean;
    export interface CloudSearchNamedRankExpression {
        RankName: CloudSearchFieldName;
        RankExpression: CloudSearchRankExpression;
    }

    export type CloudSearchOptionState = string;
    export interface CloudSearchOptionStatus {
        CreationDate: CloudSearchUpdateTimestamp;
        UpdateDate: CloudSearchUpdateTimestamp;
        UpdateVersion?: CloudSearchUIntValue;
        State: CloudSearchOptionState;
        PendingDeletion?: CloudSearchBoolean;
    }

    export type CloudSearchPartitionCount = number;
    export type CloudSearchPolicyDocument = string;
    export type CloudSearchRankExpression = string;
    export interface CloudSearchRankExpressionStatus {
        Options: CloudSearchNamedRankExpression;
        Status: CloudSearchOptionStatus;
    }

    export type CloudSearchRankExpressionStatusList = Array<CloudSearchRankExpressionStatus>;
    export interface CloudSearchResourceNotFoundException {
    }

    export type CloudSearchSearchInstanceType = string;
    export interface CloudSearchServiceEndpoint {
        Arn?: CloudSearchArn;
        Endpoint?: CloudSearchServiceUrl;
    }

    export type CloudSearchServiceUrl = string;
    export interface CloudSearchSourceAttribute {
        SourceDataFunction: CloudSearchSourceDataFunction;
        SourceDataCopy?: CloudSearchSourceData;
        SourceDataTrimTitle?: CloudSearchSourceDataTrimTitle;
        SourceDataMap?: CloudSearchSourceDataMap;
    }

    export type CloudSearchSourceAttributeList = Array<CloudSearchSourceAttribute>;
    export interface CloudSearchSourceData {
        SourceName: CloudSearchFieldName;
        DefaultValue?: CloudSearchFieldValue;
    }

    export type CloudSearchSourceDataFunction = string;
    export interface CloudSearchSourceDataMap {
        SourceName: CloudSearchFieldName;
        DefaultValue?: CloudSearchFieldValue;
        Cases?: CloudSearchStringCaseMap;
    }

    export interface CloudSearchSourceDataTrimTitle {
        SourceName: CloudSearchFieldName;
        DefaultValue?: CloudSearchFieldValue;
        Separator?: CloudSearchString;
        Language?: CloudSearchLanguage;
    }

    export interface CloudSearchStemmingOptionsStatus {
        Options: CloudSearchStemsDocument;
        Status: CloudSearchOptionStatus;
    }

    export type CloudSearchStemsDocument = string;
    export interface CloudSearchStopwordOptionsStatus {
        Options: CloudSearchStopwordsDocument;
        Status: CloudSearchOptionStatus;
    }

    export type CloudSearchStopwordsDocument = string;
    export type CloudSearchString = string;
    export type CloudSearchStringCaseMap = any; // not really - it was 'map' instead - must fix this one
    export interface CloudSearchSynonymOptionsStatus {
        Options: CloudSearchSynonymsDocument;
        Status: CloudSearchOptionStatus;
    }

    export type CloudSearchSynonymsDocument = string;
    export interface CloudSearchTextOptions {
        DefaultValue?: CloudSearchFieldValue;
        FacetEnabled?: CloudSearchBoolean;
        ResultEnabled?: CloudSearchBoolean;
        TextProcessor?: CloudSearchFieldName;
    }

    export interface CloudSearchUIntOptions {
        DefaultValue?: CloudSearchUIntValue;
    }

    export type CloudSearchUIntValue = number;
    export interface CloudSearchUpdateAvailabilityOptionsRequest {
        DomainName: CloudSearchDomainName;
        MultiAZ: CloudSearchBoolean;
    }

    export interface CloudSearchUpdateAvailabilityOptionsResponse {
        AvailabilityOptions?: CloudSearchAvailabilityOptionsStatus;
    }

    export interface CloudSearchUpdateDefaultSearchFieldRequest {
        DomainName: CloudSearchDomainName;
        DefaultSearchField: CloudSearchString;
    }

    export interface CloudSearchUpdateDefaultSearchFieldResponse {
        DefaultSearchField: CloudSearchDefaultSearchFieldStatus;
    }

    export interface CloudSearchUpdateServiceAccessPoliciesRequest {
        DomainName: CloudSearchDomainName;
        AccessPolicies: CloudSearchPolicyDocument;
    }

    export interface CloudSearchUpdateServiceAccessPoliciesResponse {
        AccessPolicies: CloudSearchAccessPoliciesStatus;
    }

    export interface CloudSearchUpdateStemmingOptionsRequest {
        DomainName: CloudSearchDomainName;
        Stems: CloudSearchStemsDocument;
    }

    export interface CloudSearchUpdateStemmingOptionsResponse {
        Stems: CloudSearchStemmingOptionsStatus;
    }

    export interface CloudSearchUpdateStopwordOptionsRequest {
        DomainName: CloudSearchDomainName;
        Stopwords: CloudSearchStopwordsDocument;
    }

    export interface CloudSearchUpdateStopwordOptionsResponse {
        Stopwords: CloudSearchStopwordOptionsStatus;
    }

    export interface CloudSearchUpdateSynonymOptionsRequest {
        DomainName: CloudSearchDomainName;
        Synonyms: CloudSearchSynonymsDocument;
    }

    export interface CloudSearchUpdateSynonymOptionsResponse {
        Synonyms: CloudSearchSynonymOptionsStatus;
    }

    export type CloudSearchUpdateTimestamp = number;
}
