// DO NOT EDIT!
//

///<reference path="./aws-sdk-common.d.ts" />
declare module "aws-sdk" {

    export class CloudSearch extends Service {
      constructor(options?: any);
      createDomain(params: CloudSearch.CreateDomainRequest, callback?: (err: CloudSearch.BaseException|CloudSearch.InternalException|CloudSearch.LimitExceededException|any, data: CloudSearch.CreateDomainResponse|any) => void): Request;
      defineIndexField(params: CloudSearch.DefineIndexFieldRequest, callback?: (err: CloudSearch.BaseException|CloudSearch.InternalException|CloudSearch.LimitExceededException|CloudSearch.InvalidTypeException|CloudSearch.ResourceNotFoundException|any, data: CloudSearch.DefineIndexFieldResponse|any) => void): Request;
      defineRankExpression(params: CloudSearch.DefineRankExpressionRequest, callback?: (err: CloudSearch.BaseException|CloudSearch.InternalException|CloudSearch.LimitExceededException|CloudSearch.InvalidTypeException|CloudSearch.ResourceNotFoundException|any, data: CloudSearch.DefineRankExpressionResponse|any) => void): Request;
      deleteDomain(params: CloudSearch.DeleteDomainRequest, callback?: (err: CloudSearch.BaseException|CloudSearch.InternalException|any, data: CloudSearch.DeleteDomainResponse|any) => void): Request;
      deleteIndexField(params: CloudSearch.DeleteIndexFieldRequest, callback?: (err: CloudSearch.BaseException|CloudSearch.InternalException|CloudSearch.InvalidTypeException|CloudSearch.ResourceNotFoundException|any, data: CloudSearch.DeleteIndexFieldResponse|any) => void): Request;
      deleteRankExpression(params: CloudSearch.DeleteRankExpressionRequest, callback?: (err: CloudSearch.BaseException|CloudSearch.InternalException|CloudSearch.InvalidTypeException|CloudSearch.ResourceNotFoundException|any, data: CloudSearch.DeleteRankExpressionResponse|any) => void): Request;
      describeAvailabilityOptions(params: CloudSearch.DescribeAvailabilityOptionsRequest, callback?: (err: CloudSearch.BaseException|CloudSearch.InternalException|CloudSearch.InvalidTypeException|CloudSearch.LimitExceededException|CloudSearch.ResourceNotFoundException|CloudSearch.DisabledOperationException|any, data: CloudSearch.DescribeAvailabilityOptionsResponse|any) => void): Request;
      describeDefaultSearchField(params: CloudSearch.DescribeDefaultSearchFieldRequest, callback?: (err: CloudSearch.BaseException|CloudSearch.InternalException|CloudSearch.ResourceNotFoundException|any, data: CloudSearch.DescribeDefaultSearchFieldResponse|any) => void): Request;
      describeDomains(params: CloudSearch.DescribeDomainsRequest, callback?: (err: CloudSearch.BaseException|CloudSearch.InternalException|any, data: CloudSearch.DescribeDomainsResponse|any) => void): Request;
      describeIndexFields(params: CloudSearch.DescribeIndexFieldsRequest, callback?: (err: CloudSearch.BaseException|CloudSearch.InternalException|CloudSearch.ResourceNotFoundException|any, data: CloudSearch.DescribeIndexFieldsResponse|any) => void): Request;
      describeRankExpressions(params: CloudSearch.DescribeRankExpressionsRequest, callback?: (err: CloudSearch.BaseException|CloudSearch.InternalException|CloudSearch.ResourceNotFoundException|any, data: CloudSearch.DescribeRankExpressionsResponse|any) => void): Request;
      describeServiceAccessPolicies(params: CloudSearch.DescribeServiceAccessPoliciesRequest, callback?: (err: CloudSearch.BaseException|CloudSearch.InternalException|CloudSearch.ResourceNotFoundException|any, data: CloudSearch.DescribeServiceAccessPoliciesResponse|any) => void): Request;
      describeStemmingOptions(params: CloudSearch.DescribeStemmingOptionsRequest, callback?: (err: CloudSearch.BaseException|CloudSearch.InternalException|CloudSearch.ResourceNotFoundException|any, data: CloudSearch.DescribeStemmingOptionsResponse|any) => void): Request;
      describeStopwordOptions(params: CloudSearch.DescribeStopwordOptionsRequest, callback?: (err: CloudSearch.BaseException|CloudSearch.InternalException|CloudSearch.ResourceNotFoundException|any, data: CloudSearch.DescribeStopwordOptionsResponse|any) => void): Request;
      describeSynonymOptions(params: CloudSearch.DescribeSynonymOptionsRequest, callback?: (err: CloudSearch.BaseException|CloudSearch.InternalException|CloudSearch.ResourceNotFoundException|any, data: CloudSearch.DescribeSynonymOptionsResponse|any) => void): Request;
      indexDocuments(params: CloudSearch.IndexDocumentsRequest, callback?: (err: CloudSearch.BaseException|CloudSearch.InternalException|CloudSearch.ResourceNotFoundException|any, data: CloudSearch.IndexDocumentsResponse|any) => void): Request;
      updateAvailabilityOptions(params: CloudSearch.UpdateAvailabilityOptionsRequest, callback?: (err: CloudSearch.BaseException|CloudSearch.InternalException|CloudSearch.InvalidTypeException|CloudSearch.LimitExceededException|CloudSearch.ResourceNotFoundException|CloudSearch.DisabledOperationException|any, data: CloudSearch.UpdateAvailabilityOptionsResponse|any) => void): Request;
      updateDefaultSearchField(params: CloudSearch.UpdateDefaultSearchFieldRequest, callback?: (err: CloudSearch.BaseException|CloudSearch.InternalException|CloudSearch.InvalidTypeException|CloudSearch.ResourceNotFoundException|any, data: CloudSearch.UpdateDefaultSearchFieldResponse|any) => void): Request;
      updateServiceAccessPolicies(params: CloudSearch.UpdateServiceAccessPoliciesRequest, callback?: (err: CloudSearch.BaseException|CloudSearch.InternalException|CloudSearch.LimitExceededException|CloudSearch.ResourceNotFoundException|CloudSearch.InvalidTypeException|any, data: CloudSearch.UpdateServiceAccessPoliciesResponse|any) => void): Request;
      updateStemmingOptions(params: CloudSearch.UpdateStemmingOptionsRequest, callback?: (err: CloudSearch.BaseException|CloudSearch.InternalException|CloudSearch.InvalidTypeException|CloudSearch.LimitExceededException|CloudSearch.ResourceNotFoundException|any, data: CloudSearch.UpdateStemmingOptionsResponse|any) => void): Request;
      updateStopwordOptions(params: CloudSearch.UpdateStopwordOptionsRequest, callback?: (err: CloudSearch.BaseException|CloudSearch.InternalException|CloudSearch.InvalidTypeException|CloudSearch.LimitExceededException|CloudSearch.ResourceNotFoundException|any, data: CloudSearch.UpdateStopwordOptionsResponse|any) => void): Request;
      updateSynonymOptions(params: CloudSearch.UpdateSynonymOptionsRequest, callback?: (err: CloudSearch.BaseException|CloudSearch.InternalException|CloudSearch.InvalidTypeException|CloudSearch.LimitExceededException|CloudSearch.ResourceNotFoundException|any, data: CloudSearch.UpdateSynonymOptionsResponse|any) => void): Request;
    }
    
    export module CloudSearch {
        export type Arn = string;
        export type Boolean = boolean;
        export type DocumentCount = number;
        export type DomainId = string;    // max: 64, min: 1
        export type DomainName = string;    // pattern: &quot;[a-z][a-z0-9\-]+&quot;, max: 28, min: 3
        export type DomainNameList = DomainName[];
        export type DomainStatusList = DomainStatus[];
        export type ErrorCode = string;
        export type ErrorMessage = string;
        export type FieldName = string;    // pattern: &quot;[a-z][a-z0-9_]*&quot;, max: 64, min: 1
        export type FieldNameList = FieldName[];
        export type FieldValue = string;    // max: 1024
        export type IndexFieldStatusList = IndexFieldStatus[];
        export type IndexFieldType = string;
        export type InstanceCount = number;    // min: 1
        export type Language = string;    // pattern: &quot;[a-zA-Z]{2,8}(?:-[a-zA-Z]{2,8})*&quot;
        export type MultiAZ = boolean;
        export type OptionState = string;
        export type PartitionCount = number;    // min: 1
        export type PolicyDocument = string;
        export type RankExpression = string;    // max: 10240, min: 1
        export type RankExpressionStatusList = RankExpressionStatus[];
        export type SearchInstanceType = string;
        export type ServiceUrl = string;
        export type SourceAttributeList = SourceAttribute[];
        export type SourceDataFunction = string;
        export type StemsDocument = string;
        export type StopwordsDocument = string;
        export type String = string;
        export type StringCaseMap = {[key:string]: FieldValue};
        export type SynonymsDocument = string;
        export type UIntValue = number;
        export type UpdateTimestamp = number;

        export interface AccessPoliciesStatus {
            Options: PolicyDocument;            
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
        export interface CreateDomainRequest {
            DomainName: DomainName;            
        }
        export interface CreateDomainResponse {
            DomainStatus?: DomainStatus;            
        }
        export interface DefaultSearchFieldStatus {
            Options: FieldName;            
            Status: OptionStatus;            
        }
        export interface DefineIndexFieldRequest {
            DomainName: DomainName;            
            IndexField: IndexField;            
        }
        export interface DefineIndexFieldResponse {
            IndexField: IndexFieldStatus;            
        }
        export interface DefineRankExpressionRequest {
            DomainName: DomainName;            
            RankExpression: NamedRankExpression;            
        }
        export interface DefineRankExpressionResponse {
            RankExpression: RankExpressionStatus;            
        }
        export interface DeleteDomainRequest {
            DomainName: DomainName;            
        }
        export interface DeleteDomainResponse {
            DomainStatus?: DomainStatus;            
        }
        export interface DeleteIndexFieldRequest {
            DomainName: DomainName;            
            IndexFieldName: FieldName;            
        }
        export interface DeleteIndexFieldResponse {
            IndexField: IndexFieldStatus;            
        }
        export interface DeleteRankExpressionRequest {
            DomainName: DomainName;            
            RankName: FieldName;            
        }
        export interface DeleteRankExpressionResponse {
            RankExpression: RankExpressionStatus;            
        }
        export interface DescribeAvailabilityOptionsRequest {
            DomainName: DomainName;            
        }
        export interface DescribeAvailabilityOptionsResponse {
            AvailabilityOptions?: AvailabilityOptionsStatus;            
        }
        export interface DescribeDefaultSearchFieldRequest {
            DomainName: DomainName;            
        }
        export interface DescribeDefaultSearchFieldResponse {
            DefaultSearchField: DefaultSearchFieldStatus;            
        }
        export interface DescribeDomainsRequest {
            DomainNames?: DomainNameList;            
        }
        export interface DescribeDomainsResponse {
            DomainStatusList: DomainStatusList;            
        }
        export interface DescribeIndexFieldsRequest {
            DomainName: DomainName;            
            FieldNames?: FieldNameList;            
        }
        export interface DescribeIndexFieldsResponse {
            IndexFields: IndexFieldStatusList;            
        }
        export interface DescribeRankExpressionsRequest {
            DomainName: DomainName;            
            RankNames?: FieldNameList;            
        }
        export interface DescribeRankExpressionsResponse {
            RankExpressions: RankExpressionStatusList;            
        }
        export interface DescribeServiceAccessPoliciesRequest {
            DomainName: DomainName;            
        }
        export interface DescribeServiceAccessPoliciesResponse {
            AccessPolicies: AccessPoliciesStatus;            
        }
        export interface DescribeStemmingOptionsRequest {
            DomainName: DomainName;            
        }
        export interface DescribeStemmingOptionsResponse {
            Stems: StemmingOptionsStatus;            
        }
        export interface DescribeStopwordOptionsRequest {
            DomainName: DomainName;            
        }
        export interface DescribeStopwordOptionsResponse {
            Stopwords: StopwordOptionsStatus;            
        }
        export interface DescribeSynonymOptionsRequest {
            DomainName: DomainName;            
        }
        export interface DescribeSynonymOptionsResponse {
            Synonyms: SynonymOptionsStatus;            
        }
        export interface DisabledOperationException {
        }
        export interface DomainStatus {
            DomainId: DomainId;            
            DomainName: DomainName;            
            Created?: Boolean;            
            Deleted?: Boolean;            
            NumSearchableDocs?: DocumentCount;            
            DocService?: ServiceEndpoint;            
            SearchService?: ServiceEndpoint;            
            RequiresIndexDocuments: Boolean;            
            Processing?: Boolean;            
            SearchInstanceType?: SearchInstanceType;            
            SearchPartitionCount?: PartitionCount;            
            SearchInstanceCount?: InstanceCount;            
        }
        export interface IndexDocumentsRequest {
            DomainName: DomainName;            
        }
        export interface IndexDocumentsResponse {
            FieldNames?: FieldNameList;            
        }
        export interface IndexField {
            IndexFieldName: FieldName;            
            IndexFieldType: IndexFieldType;            
            UIntOptions?: UIntOptions;            
            LiteralOptions?: LiteralOptions;            
            TextOptions?: TextOptions;            
            SourceAttributes?: SourceAttributeList;            
        }
        export interface IndexFieldStatus {
            Options: IndexField;            
            Status: OptionStatus;            
        }
        export interface InternalException {
        }
        export interface InvalidTypeException {
        }
        export interface LimitExceededException {
        }
        export interface LiteralOptions {
            DefaultValue?: FieldValue;            
            SearchEnabled?: Boolean;            
            FacetEnabled?: Boolean;            
            ResultEnabled?: Boolean;            
        }
        export interface NamedRankExpression {
            RankName: FieldName;            
            RankExpression: RankExpression;            
        }
        export interface OptionStatus {
            CreationDate: UpdateTimestamp;            
            UpdateDate: UpdateTimestamp;            
            UpdateVersion?: UIntValue;            
            State: OptionState;            
            PendingDeletion?: Boolean;            
        }
        export interface RankExpressionStatus {
            Options: NamedRankExpression;            
            Status: OptionStatus;            
        }
        export interface ResourceNotFoundException {
        }
        export interface ServiceEndpoint {
            Arn?: Arn;            
            Endpoint?: ServiceUrl;            
        }
        export interface SourceAttribute {
            SourceDataFunction: SourceDataFunction;            
            SourceDataCopy?: SourceData;            
            SourceDataTrimTitle?: SourceDataTrimTitle;            
            SourceDataMap?: SourceDataMap;            
        }
        export interface SourceData {
            SourceName: FieldName;            
            DefaultValue?: FieldValue;            
        }
        export interface SourceDataMap {
            SourceName: FieldName;            
            DefaultValue?: FieldValue;            
            Cases?: StringCaseMap;            
        }
        export interface SourceDataTrimTitle {
            SourceName: FieldName;            
            DefaultValue?: FieldValue;            
            Separator?: String;            
            Language?: Language;            
        }
        export interface StemmingOptionsStatus {
            Options: StemsDocument;            
            Status: OptionStatus;            
        }
        export interface StopwordOptionsStatus {
            Options: StopwordsDocument;            
            Status: OptionStatus;            
        }
        export interface SynonymOptionsStatus {
            Options: SynonymsDocument;            
            Status: OptionStatus;            
        }
        export interface TextOptions {
            DefaultValue?: FieldValue;            
            FacetEnabled?: Boolean;            
            ResultEnabled?: Boolean;            
            TextProcessor?: FieldName;            
        }
        export interface UIntOptions {
            DefaultValue?: UIntValue;            
        }
        export interface UpdateAvailabilityOptionsRequest {
            DomainName: DomainName;            
            MultiAZ: Boolean;            
        }
        export interface UpdateAvailabilityOptionsResponse {
            AvailabilityOptions?: AvailabilityOptionsStatus;            
        }
        export interface UpdateDefaultSearchFieldRequest {
            DomainName: DomainName;            
            DefaultSearchField: String;            
        }
        export interface UpdateDefaultSearchFieldResponse {
            DefaultSearchField: DefaultSearchFieldStatus;            
        }
        export interface UpdateServiceAccessPoliciesRequest {
            DomainName: DomainName;            
            AccessPolicies: PolicyDocument;            
        }
        export interface UpdateServiceAccessPoliciesResponse {
            AccessPolicies: AccessPoliciesStatus;            
        }
        export interface UpdateStemmingOptionsRequest {
            DomainName: DomainName;            
            Stems: StemsDocument;            
        }
        export interface UpdateStemmingOptionsResponse {
            Stems: StemmingOptionsStatus;            
        }
        export interface UpdateStopwordOptionsRequest {
            DomainName: DomainName;            
            Stopwords: StopwordsDocument;            
        }
        export interface UpdateStopwordOptionsResponse {
            Stopwords: StopwordOptionsStatus;            
        }
        export interface UpdateSynonymOptionsRequest {
            DomainName: DomainName;            
            Synonyms: SynonymsDocument;            
        }
        export interface UpdateSynonymOptionsResponse {
            Synonyms: SynonymOptionsStatus;            
        }

    }
}
