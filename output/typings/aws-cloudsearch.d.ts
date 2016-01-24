// Type definitions for aws-sdk - Amazon CloudSearch
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

///<reference path="./aws-sdk-common.d.ts" />

declare module "aws-sdk" {

    /*
     * apiVersion: 2013-01-01
     * endpointPrefix: cloudsearch
     * serviceAbbreviation: 
     * signatureVersion: v4
     * protocol: query
     */
    export class CloudSearch extends Service {
      constructor(options?: any);
      endpoint: Endpoint;
      buildSuggesters(params: CloudSearch.BuildSuggestersRequest, callback?: (err: CloudSearch.BaseException|CloudSearch.InternalException|CloudSearch.ResourceNotFoundException|any, data: CloudSearch.BuildSuggestersResponse|any) => void): Request;
      createDomain(params: CloudSearch.CreateDomainRequest, callback?: (err: CloudSearch.BaseException|CloudSearch.InternalException|CloudSearch.LimitExceededException|any, data: CloudSearch.CreateDomainResponse|any) => void): Request;
      defineAnalysisScheme(params: CloudSearch.DefineAnalysisSchemeRequest, callback?: (err: CloudSearch.BaseException|CloudSearch.InternalException|CloudSearch.LimitExceededException|CloudSearch.InvalidTypeException|CloudSearch.ResourceNotFoundException|any, data: CloudSearch.DefineAnalysisSchemeResponse|any) => void): Request;
      defineExpression(params: CloudSearch.DefineExpressionRequest, callback?: (err: CloudSearch.BaseException|CloudSearch.InternalException|CloudSearch.LimitExceededException|CloudSearch.InvalidTypeException|CloudSearch.ResourceNotFoundException|any, data: CloudSearch.DefineExpressionResponse|any) => void): Request;
      defineIndexField(params: CloudSearch.DefineIndexFieldRequest, callback?: (err: CloudSearch.BaseException|CloudSearch.InternalException|CloudSearch.LimitExceededException|CloudSearch.InvalidTypeException|CloudSearch.ResourceNotFoundException|any, data: CloudSearch.DefineIndexFieldResponse|any) => void): Request;
      defineSuggester(params: CloudSearch.DefineSuggesterRequest, callback?: (err: CloudSearch.BaseException|CloudSearch.InternalException|CloudSearch.LimitExceededException|CloudSearch.InvalidTypeException|CloudSearch.ResourceNotFoundException|any, data: CloudSearch.DefineSuggesterResponse|any) => void): Request;
      deleteAnalysisScheme(params: CloudSearch.DeleteAnalysisSchemeRequest, callback?: (err: CloudSearch.BaseException|CloudSearch.InternalException|CloudSearch.InvalidTypeException|CloudSearch.ResourceNotFoundException|any, data: CloudSearch.DeleteAnalysisSchemeResponse|any) => void): Request;
      deleteDomain(params: CloudSearch.DeleteDomainRequest, callback?: (err: CloudSearch.BaseException|CloudSearch.InternalException|any, data: CloudSearch.DeleteDomainResponse|any) => void): Request;
      deleteExpression(params: CloudSearch.DeleteExpressionRequest, callback?: (err: CloudSearch.BaseException|CloudSearch.InternalException|CloudSearch.InvalidTypeException|CloudSearch.ResourceNotFoundException|any, data: CloudSearch.DeleteExpressionResponse|any) => void): Request;
      deleteIndexField(params: CloudSearch.DeleteIndexFieldRequest, callback?: (err: CloudSearch.BaseException|CloudSearch.InternalException|CloudSearch.InvalidTypeException|CloudSearch.ResourceNotFoundException|any, data: CloudSearch.DeleteIndexFieldResponse|any) => void): Request;
      deleteSuggester(params: CloudSearch.DeleteSuggesterRequest, callback?: (err: CloudSearch.BaseException|CloudSearch.InternalException|CloudSearch.InvalidTypeException|CloudSearch.ResourceNotFoundException|any, data: CloudSearch.DeleteSuggesterResponse|any) => void): Request;
      describeAnalysisSchemes(params: CloudSearch.DescribeAnalysisSchemesRequest, callback?: (err: CloudSearch.BaseException|CloudSearch.InternalException|CloudSearch.ResourceNotFoundException|any, data: CloudSearch.DescribeAnalysisSchemesResponse|any) => void): Request;
      describeAvailabilityOptions(params: CloudSearch.DescribeAvailabilityOptionsRequest, callback?: (err: CloudSearch.BaseException|CloudSearch.InternalException|CloudSearch.InvalidTypeException|CloudSearch.LimitExceededException|CloudSearch.ResourceNotFoundException|CloudSearch.DisabledOperationException|any, data: CloudSearch.DescribeAvailabilityOptionsResponse|any) => void): Request;
      describeDomains(params: CloudSearch.DescribeDomainsRequest, callback?: (err: CloudSearch.BaseException|CloudSearch.InternalException|any, data: CloudSearch.DescribeDomainsResponse|any) => void): Request;
      describeExpressions(params: CloudSearch.DescribeExpressionsRequest, callback?: (err: CloudSearch.BaseException|CloudSearch.InternalException|CloudSearch.ResourceNotFoundException|any, data: CloudSearch.DescribeExpressionsResponse|any) => void): Request;
      describeIndexFields(params: CloudSearch.DescribeIndexFieldsRequest, callback?: (err: CloudSearch.BaseException|CloudSearch.InternalException|CloudSearch.ResourceNotFoundException|any, data: CloudSearch.DescribeIndexFieldsResponse|any) => void): Request;
      describeScalingParameters(params: CloudSearch.DescribeScalingParametersRequest, callback?: (err: CloudSearch.BaseException|CloudSearch.InternalException|CloudSearch.ResourceNotFoundException|any, data: CloudSearch.DescribeScalingParametersResponse|any) => void): Request;
      describeServiceAccessPolicies(params: CloudSearch.DescribeServiceAccessPoliciesRequest, callback?: (err: CloudSearch.BaseException|CloudSearch.InternalException|CloudSearch.ResourceNotFoundException|any, data: CloudSearch.DescribeServiceAccessPoliciesResponse|any) => void): Request;
      describeSuggesters(params: CloudSearch.DescribeSuggestersRequest, callback?: (err: CloudSearch.BaseException|CloudSearch.InternalException|CloudSearch.ResourceNotFoundException|any, data: CloudSearch.DescribeSuggestersResponse|any) => void): Request;
      indexDocuments(params: CloudSearch.IndexDocumentsRequest, callback?: (err: CloudSearch.BaseException|CloudSearch.InternalException|CloudSearch.ResourceNotFoundException|any, data: CloudSearch.IndexDocumentsResponse|any) => void): Request;
      listDomainNames(callback?: (err: CloudSearch.BaseException|any, data: CloudSearch.ListDomainNamesResponse|any) => void): Request;
      updateAvailabilityOptions(params: CloudSearch.UpdateAvailabilityOptionsRequest, callback?: (err: CloudSearch.BaseException|CloudSearch.InternalException|CloudSearch.InvalidTypeException|CloudSearch.LimitExceededException|CloudSearch.ResourceNotFoundException|CloudSearch.DisabledOperationException|any, data: CloudSearch.UpdateAvailabilityOptionsResponse|any) => void): Request;
      updateScalingParameters(params: CloudSearch.UpdateScalingParametersRequest, callback?: (err: CloudSearch.BaseException|CloudSearch.InternalException|CloudSearch.LimitExceededException|CloudSearch.ResourceNotFoundException|CloudSearch.InvalidTypeException|any, data: CloudSearch.UpdateScalingParametersResponse|any) => void): Request;
      updateServiceAccessPolicies(params: CloudSearch.UpdateServiceAccessPoliciesRequest, callback?: (err: CloudSearch.BaseException|CloudSearch.InternalException|CloudSearch.LimitExceededException|CloudSearch.ResourceNotFoundException|CloudSearch.InvalidTypeException|any, data: CloudSearch.UpdateServiceAccessPoliciesResponse|any) => void): Request;

    }

    export module CloudSearch {
        export type APIVersion = string;
        export type ARN = string;
        export type AlgorithmicStemming = string;
        export type AnalysisSchemeLanguage = string;
        export type AnalysisSchemeStatusList = AnalysisSchemeStatus[];
        export type Boolean = boolean;
        export type DomainId = string;    // max: 64, min: 1
        export type DomainName = string;    // pattern: &quot;[a-z][a-z0-9\-]+&quot;, max: 28, min: 3
        export type DomainNameList = DomainName[];
        export type DomainNameMap = {[key:string]: APIVersion};
        export type DomainStatusList = DomainStatus[];
        export type Double = number;
        export type DynamicFieldName = string;    // pattern: &quot;([a-z][a-z0-9_]*\*?|\*[a-z0-9_]*)&quot;, max: 64, min: 1
        export type DynamicFieldNameList = DynamicFieldName[];
        export type ErrorCode = string;
        export type ErrorMessage = string;
        export type ExpressionStatusList = ExpressionStatus[];
        export type ExpressionValue = string;    // max: 10240, min: 1
        export type FieldName = string;    // pattern: &quot;[a-z][a-z0-9_]*&quot;, max: 64, min: 1
        export type FieldNameCommaList = string;    // pattern: &quot;\s*[a-z*][a-z0-9_]*\*?\s*(,\s*[a-z*][a-z0-9_]*\*?\s*)*&quot;
        export type FieldNameList = FieldName[];
        export type FieldValue = string;    // max: 1024
        export type IndexFieldStatusList = IndexFieldStatus[];
        export type IndexFieldType = string;
        export type InstanceCount = number;    // min: 1
        export type Long = number;
        export type MaximumPartitionCount = number;    // min: 1
        export type MaximumReplicationCount = number;    // min: 1
        export type MultiAZ = boolean;
        export type OptionState = string;
        export type PartitionCount = number;    // min: 1
        export type PartitionInstanceType = string;
        export type PolicyDocument = string;
        export type SearchInstanceType = string;
        export type ServiceUrl = string;
        export type StandardName = string;    // pattern: &quot;[a-z][a-z0-9_]*&quot;, max: 64, min: 1
        export type StandardNameList = StandardName[];
        export type String = string;
        export type SuggesterFuzzyMatching = string;
        export type SuggesterStatusList = SuggesterStatus[];
        export type UIntValue = number;
        export type UpdateTimestamp = number;
        export type Word = string;    // pattern: &quot;[\S]+&quot;

        export interface AccessPoliciesStatus {
            Options: PolicyDocument;
            Status: OptionStatus;
        }
        export interface AnalysisOptions {
            Synonyms?: String;
            Stopwords?: String;
            StemmingDictionary?: String;
            JapaneseTokenizationDictionary?: String;
            AlgorithmicStemming?: AlgorithmicStemming;
        }
        export interface AnalysisScheme {
            AnalysisSchemeName: StandardName;
            AnalysisSchemeLanguage: AnalysisSchemeLanguage;
            AnalysisOptions?: AnalysisOptions;
        }
        export interface AnalysisSchemeStatus {
            Options: AnalysisScheme;
            Status: OptionStatus;
        }
        export interface AvailabilityOptionsStatus {
            Options: MultiAZ;
            Status: OptionStatus;
        }
        export interface BaseException {
            Code?: ErrorCode;
            Message?: ErrorMessage;
        }
        export interface BuildSuggestersRequest {
            DomainName: DomainName;
        }
        export interface BuildSuggestersResponse {
            FieldNames?: FieldNameList;
        }
        export interface CreateDomainRequest {
            DomainName: DomainName;
        }
        export interface CreateDomainResponse {
            DomainStatus?: DomainStatus;
        }
        export interface DateArrayOptions {
            DefaultValue?: FieldValue;
            SourceFields?: FieldNameCommaList;
            FacetEnabled?: Boolean;
            SearchEnabled?: Boolean;
            ReturnEnabled?: Boolean;
        }
        export interface DateOptions {
            DefaultValue?: FieldValue;
            SourceField?: FieldName;
            FacetEnabled?: Boolean;
            SearchEnabled?: Boolean;
            ReturnEnabled?: Boolean;
            SortEnabled?: Boolean;
        }
        export interface DefineAnalysisSchemeRequest {
            DomainName: DomainName;
            AnalysisScheme: AnalysisScheme;
        }
        export interface DefineAnalysisSchemeResponse {
            AnalysisScheme: AnalysisSchemeStatus;
        }
        export interface DefineExpressionRequest {
            DomainName: DomainName;
            Expression: Expression;
        }
        export interface DefineExpressionResponse {
            Expression: ExpressionStatus;
        }
        export interface DefineIndexFieldRequest {
            DomainName: DomainName;
            IndexField: IndexField;
        }
        export interface DefineIndexFieldResponse {
            IndexField: IndexFieldStatus;
        }
        export interface DefineSuggesterRequest {
            DomainName: DomainName;
            Suggester: Suggester;
        }
        export interface DefineSuggesterResponse {
            Suggester: SuggesterStatus;
        }
        export interface DeleteAnalysisSchemeRequest {
            DomainName: DomainName;
            AnalysisSchemeName: StandardName;
        }
        export interface DeleteAnalysisSchemeResponse {
            AnalysisScheme: AnalysisSchemeStatus;
        }
        export interface DeleteDomainRequest {
            DomainName: DomainName;
        }
        export interface DeleteDomainResponse {
            DomainStatus?: DomainStatus;
        }
        export interface DeleteExpressionRequest {
            DomainName: DomainName;
            ExpressionName: StandardName;
        }
        export interface DeleteExpressionResponse {
            Expression: ExpressionStatus;
        }
        export interface DeleteIndexFieldRequest {
            DomainName: DomainName;
            IndexFieldName: DynamicFieldName;
        }
        export interface DeleteIndexFieldResponse {
            IndexField: IndexFieldStatus;
        }
        export interface DeleteSuggesterRequest {
            DomainName: DomainName;
            SuggesterName: StandardName;
        }
        export interface DeleteSuggesterResponse {
            Suggester: SuggesterStatus;
        }
        export interface DescribeAnalysisSchemesRequest {
            DomainName: DomainName;
            AnalysisSchemeNames?: StandardNameList;
            Deployed?: Boolean;
        }
        export interface DescribeAnalysisSchemesResponse {
            AnalysisSchemes: AnalysisSchemeStatusList;
        }
        export interface DescribeAvailabilityOptionsRequest {
            DomainName: DomainName;
            Deployed?: Boolean;
        }
        export interface DescribeAvailabilityOptionsResponse {
            AvailabilityOptions?: AvailabilityOptionsStatus;
        }
        export interface DescribeDomainsRequest {
            DomainNames?: DomainNameList;
        }
        export interface DescribeDomainsResponse {
            DomainStatusList: DomainStatusList;
        }
        export interface DescribeExpressionsRequest {
            DomainName: DomainName;
            ExpressionNames?: StandardNameList;
            Deployed?: Boolean;
        }
        export interface DescribeExpressionsResponse {
            Expressions: ExpressionStatusList;
        }
        export interface DescribeIndexFieldsRequest {
            DomainName: DomainName;
            FieldNames?: DynamicFieldNameList;
            Deployed?: Boolean;
        }
        export interface DescribeIndexFieldsResponse {
            IndexFields: IndexFieldStatusList;
        }
        export interface DescribeScalingParametersRequest {
            DomainName: DomainName;
        }
        export interface DescribeScalingParametersResponse {
            ScalingParameters: ScalingParametersStatus;
        }
        export interface DescribeServiceAccessPoliciesRequest {
            DomainName: DomainName;
            Deployed?: Boolean;
        }
        export interface DescribeServiceAccessPoliciesResponse {
            AccessPolicies: AccessPoliciesStatus;
        }
        export interface DescribeSuggestersRequest {
            DomainName: DomainName;
            SuggesterNames?: StandardNameList;
            Deployed?: Boolean;
        }
        export interface DescribeSuggestersResponse {
            Suggesters: SuggesterStatusList;
        }
        export interface DisabledOperationException {
        }
        export interface DocumentSuggesterOptions {
            SourceField: FieldName;
            FuzzyMatching?: SuggesterFuzzyMatching;
            SortExpression?: String;
        }
        export interface DomainStatus {
            DomainId: DomainId;
            DomainName: DomainName;
            ARN?: ARN;
            Created?: Boolean;
            Deleted?: Boolean;
            DocService?: ServiceEndpoint;
            SearchService?: ServiceEndpoint;
            RequiresIndexDocuments: Boolean;
            Processing?: Boolean;
            SearchInstanceType?: SearchInstanceType;
            SearchPartitionCount?: PartitionCount;
            SearchInstanceCount?: InstanceCount;
            Limits?: Limits;
        }
        export interface DoubleArrayOptions {
            DefaultValue?: Double;
            SourceFields?: FieldNameCommaList;
            FacetEnabled?: Boolean;
            SearchEnabled?: Boolean;
            ReturnEnabled?: Boolean;
        }
        export interface DoubleOptions {
            DefaultValue?: Double;
            SourceField?: FieldName;
            FacetEnabled?: Boolean;
            SearchEnabled?: Boolean;
            ReturnEnabled?: Boolean;
            SortEnabled?: Boolean;
        }
        export interface Expression {
            ExpressionName: StandardName;
            ExpressionValue: ExpressionValue;
        }
        export interface ExpressionStatus {
            Options: Expression;
            Status: OptionStatus;
        }
        export interface IndexDocumentsRequest {
            DomainName: DomainName;
        }
        export interface IndexDocumentsResponse {
            FieldNames?: FieldNameList;
        }
        export interface IndexField {
            IndexFieldName: DynamicFieldName;
            IndexFieldType: IndexFieldType;
            IntOptions?: IntOptions;
            DoubleOptions?: DoubleOptions;
            LiteralOptions?: LiteralOptions;
            TextOptions?: TextOptions;
            DateOptions?: DateOptions;
            LatLonOptions?: LatLonOptions;
            IntArrayOptions?: IntArrayOptions;
            DoubleArrayOptions?: DoubleArrayOptions;
            LiteralArrayOptions?: LiteralArrayOptions;
            TextArrayOptions?: TextArrayOptions;
            DateArrayOptions?: DateArrayOptions;
        }
        export interface IndexFieldStatus {
            Options: IndexField;
            Status: OptionStatus;
        }
        export interface IntArrayOptions {
            DefaultValue?: Long;
            SourceFields?: FieldNameCommaList;
            FacetEnabled?: Boolean;
            SearchEnabled?: Boolean;
            ReturnEnabled?: Boolean;
        }
        export interface IntOptions {
            DefaultValue?: Long;
            SourceField?: FieldName;
            FacetEnabled?: Boolean;
            SearchEnabled?: Boolean;
            ReturnEnabled?: Boolean;
            SortEnabled?: Boolean;
        }
        export interface InternalException {
        }
        export interface InvalidTypeException {
        }
        export interface LatLonOptions {
            DefaultValue?: FieldValue;
            SourceField?: FieldName;
            FacetEnabled?: Boolean;
            SearchEnabled?: Boolean;
            ReturnEnabled?: Boolean;
            SortEnabled?: Boolean;
        }
        export interface LimitExceededException {
        }
        export interface Limits {
            MaximumReplicationCount: MaximumReplicationCount;
            MaximumPartitionCount: MaximumPartitionCount;
        }
        export interface ListDomainNamesResponse {
            DomainNames?: DomainNameMap;
        }
        export interface LiteralArrayOptions {
            DefaultValue?: FieldValue;
            SourceFields?: FieldNameCommaList;
            FacetEnabled?: Boolean;
            SearchEnabled?: Boolean;
            ReturnEnabled?: Boolean;
        }
        export interface LiteralOptions {
            DefaultValue?: FieldValue;
            SourceField?: FieldName;
            FacetEnabled?: Boolean;
            SearchEnabled?: Boolean;
            ReturnEnabled?: Boolean;
            SortEnabled?: Boolean;
        }
        export interface OptionStatus {
            CreationDate: UpdateTimestamp;
            UpdateDate: UpdateTimestamp;
            UpdateVersion?: UIntValue;
            State: OptionState;
            PendingDeletion?: Boolean;
        }
        export interface ResourceNotFoundException {
        }
        export interface ScalingParameters {
            DesiredInstanceType?: PartitionInstanceType;
            DesiredReplicationCount?: UIntValue;
            DesiredPartitionCount?: UIntValue;
        }
        export interface ScalingParametersStatus {
            Options: ScalingParameters;
            Status: OptionStatus;
        }
        export interface ServiceEndpoint {
            Endpoint?: ServiceUrl;
        }
        export interface Suggester {
            SuggesterName: StandardName;
            DocumentSuggesterOptions: DocumentSuggesterOptions;
        }
        export interface SuggesterStatus {
            Options: Suggester;
            Status: OptionStatus;
        }
        export interface TextArrayOptions {
            DefaultValue?: FieldValue;
            SourceFields?: FieldNameCommaList;
            ReturnEnabled?: Boolean;
            HighlightEnabled?: Boolean;
            AnalysisScheme?: Word;
        }
        export interface TextOptions {
            DefaultValue?: FieldValue;
            SourceField?: FieldName;
            ReturnEnabled?: Boolean;
            SortEnabled?: Boolean;
            HighlightEnabled?: Boolean;
            AnalysisScheme?: Word;
        }
        export interface UpdateAvailabilityOptionsRequest {
            DomainName: DomainName;
            MultiAZ: Boolean;
        }
        export interface UpdateAvailabilityOptionsResponse {
            AvailabilityOptions?: AvailabilityOptionsStatus;
        }
        export interface UpdateScalingParametersRequest {
            DomainName: DomainName;
            ScalingParameters: ScalingParameters;
        }
        export interface UpdateScalingParametersResponse {
            ScalingParameters: ScalingParametersStatus;
        }
        export interface UpdateServiceAccessPoliciesRequest {
            DomainName: DomainName;
            AccessPolicies: PolicyDocument;
        }
        export interface UpdateServiceAccessPoliciesResponse {
            AccessPolicies: AccessPoliciesStatus;
        }

    }
}
