// DO NOT EDIT!
//
declare module "aws-sdk" {
    export class CloudSearch {
      constructor(options?: any);
      createDomain(params: CreateDomainRequest, callback: (err: BaseException|InternalException|LimitExceededException|any, data: CreateDomainResponse|any) => void): void;
      defineIndexField(params: DefineIndexFieldRequest, callback: (err: BaseException|InternalException|LimitExceededException|InvalidTypeException|ResourceNotFoundException|any, data: DefineIndexFieldResponse|any) => void): void;
      defineRankExpression(params: DefineRankExpressionRequest, callback: (err: BaseException|InternalException|LimitExceededException|InvalidTypeException|ResourceNotFoundException|any, data: DefineRankExpressionResponse|any) => void): void;
      deleteDomain(params: DeleteDomainRequest, callback: (err: BaseException|InternalException|any, data: DeleteDomainResponse|any) => void): void;
      deleteIndexField(params: DeleteIndexFieldRequest, callback: (err: BaseException|InternalException|InvalidTypeException|ResourceNotFoundException|any, data: DeleteIndexFieldResponse|any) => void): void;
      deleteRankExpression(params: DeleteRankExpressionRequest, callback: (err: BaseException|InternalException|InvalidTypeException|ResourceNotFoundException|any, data: DeleteRankExpressionResponse|any) => void): void;
      describeAvailabilityOptions(params: DescribeAvailabilityOptionsRequest, callback: (err: BaseException|InternalException|InvalidTypeException|LimitExceededException|ResourceNotFoundException|DisabledOperationException|any, data: DescribeAvailabilityOptionsResponse|any) => void): void;
      describeDefaultSearchField(params: DescribeDefaultSearchFieldRequest, callback: (err: BaseException|InternalException|ResourceNotFoundException|any, data: DescribeDefaultSearchFieldResponse|any) => void): void;
      describeDomains(params: DescribeDomainsRequest, callback: (err: BaseException|InternalException|any, data: DescribeDomainsResponse|any) => void): void;
      describeIndexFields(params: DescribeIndexFieldsRequest, callback: (err: BaseException|InternalException|ResourceNotFoundException|any, data: DescribeIndexFieldsResponse|any) => void): void;
      describeRankExpressions(params: DescribeRankExpressionsRequest, callback: (err: BaseException|InternalException|ResourceNotFoundException|any, data: DescribeRankExpressionsResponse|any) => void): void;
      describeServiceAccessPolicies(params: DescribeServiceAccessPoliciesRequest, callback: (err: BaseException|InternalException|ResourceNotFoundException|any, data: DescribeServiceAccessPoliciesResponse|any) => void): void;
      describeStemmingOptions(params: DescribeStemmingOptionsRequest, callback: (err: BaseException|InternalException|ResourceNotFoundException|any, data: DescribeStemmingOptionsResponse|any) => void): void;
      describeStopwordOptions(params: DescribeStopwordOptionsRequest, callback: (err: BaseException|InternalException|ResourceNotFoundException|any, data: DescribeStopwordOptionsResponse|any) => void): void;
      describeSynonymOptions(params: DescribeSynonymOptionsRequest, callback: (err: BaseException|InternalException|ResourceNotFoundException|any, data: DescribeSynonymOptionsResponse|any) => void): void;
      indexDocuments(params: IndexDocumentsRequest, callback: (err: BaseException|InternalException|ResourceNotFoundException|any, data: IndexDocumentsResponse|any) => void): void;
      updateAvailabilityOptions(params: UpdateAvailabilityOptionsRequest, callback: (err: BaseException|InternalException|InvalidTypeException|LimitExceededException|ResourceNotFoundException|DisabledOperationException|any, data: UpdateAvailabilityOptionsResponse|any) => void): void;
      updateDefaultSearchField(params: UpdateDefaultSearchFieldRequest, callback: (err: BaseException|InternalException|InvalidTypeException|ResourceNotFoundException|any, data: UpdateDefaultSearchFieldResponse|any) => void): void;
      updateServiceAccessPolicies(params: UpdateServiceAccessPoliciesRequest, callback: (err: BaseException|InternalException|LimitExceededException|ResourceNotFoundException|InvalidTypeException|any, data: UpdateServiceAccessPoliciesResponse|any) => void): void;
      updateStemmingOptions(params: UpdateStemmingOptionsRequest, callback: (err: BaseException|InternalException|InvalidTypeException|LimitExceededException|ResourceNotFoundException|any, data: UpdateStemmingOptionsResponse|any) => void): void;
      updateStopwordOptions(params: UpdateStopwordOptionsRequest, callback: (err: BaseException|InternalException|InvalidTypeException|LimitExceededException|ResourceNotFoundException|any, data: UpdateStopwordOptionsResponse|any) => void): void;
      updateSynonymOptions(params: UpdateSynonymOptionsRequest, callback: (err: BaseException|InternalException|InvalidTypeException|LimitExceededException|ResourceNotFoundException|any, data: UpdateSynonymOptionsResponse|any) => void): void;
    }

    export interface AccessPoliciesStatus {
      Options: PolicyDocument;
      Status: OptionStatus;
    }


    export type Arn = string;

    export interface AvailabilityOptionsStatus {
      Options: MultiAZ;
      Status: OptionStatus;
    }


    export interface BaseException {
      Code?: ErrorCode;
      Message?: ErrorMessage;
    }


    export type Boolean = boolean;

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


    export type DocumentCount = number;

    export type DomainId = string;

    export type DomainName = string; // pattern: "[a-z][a-z0-9\-]+"

    export type DomainNameList = Array<DomainName>;

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


    export type DomainStatusList = Array<DomainStatus>;

    export type ErrorCode = string;

    export type ErrorMessage = string;

    export type FieldName = string; // pattern: "[a-z][a-z0-9_]*"

    export type FieldNameList = Array<FieldName>;

    export type FieldValue = string;

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


    export type IndexFieldStatusList = Array<IndexFieldStatus>;

    export type IndexFieldType = string;

    export type InstanceCount = number;

    export interface InternalException {
    }


    export interface InvalidTypeException {
    }


    export type Language = string; // pattern: "[a-zA-Z]{2,8}(?:-[a-zA-Z]{2,8})*"

    export interface LimitExceededException {
    }


    export interface LiteralOptions {
      DefaultValue?: FieldValue;
      SearchEnabled?: Boolean;
      FacetEnabled?: Boolean;
      ResultEnabled?: Boolean;
    }


    export type MultiAZ = boolean;

    export interface NamedRankExpression {
      RankName: FieldName;
      RankExpression: RankExpression;
    }


    export type OptionState = string;

    export interface OptionStatus {
      CreationDate: UpdateTimestamp;
      UpdateDate: UpdateTimestamp;
      UpdateVersion?: UIntValue;
      State: OptionState;
      PendingDeletion?: Boolean;
    }


    export type PartitionCount = number;

    export type PolicyDocument = string;

    export type RankExpression = string;

    export interface RankExpressionStatus {
      Options: NamedRankExpression;
      Status: OptionStatus;
    }


    export type RankExpressionStatusList = Array<RankExpressionStatus>;

    export interface ResourceNotFoundException {
    }


    export type SearchInstanceType = string;

    export interface ServiceEndpoint {
      Arn?: Arn;
      Endpoint?: ServiceUrl;
    }


    export type ServiceUrl = string;

    export interface SourceAttribute {
      SourceDataFunction: SourceDataFunction;
      SourceDataCopy?: SourceData;
      SourceDataTrimTitle?: SourceDataTrimTitle;
      SourceDataMap?: SourceDataMap;
    }


    export type SourceAttributeList = Array<SourceAttribute>;

    export interface SourceData {
      SourceName: FieldName;
      DefaultValue?: FieldValue;
    }


    export type SourceDataFunction = string;

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


    export type StemsDocument = string;

    export interface StopwordOptionsStatus {
      Options: StopwordsDocument;
      Status: OptionStatus;
    }


    export type StopwordsDocument = string;

    export type String = string;

    export type StringCaseMap = any; // not really - it was 'map' instead - must fix this one

    export interface SynonymOptionsStatus {
      Options: SynonymsDocument;
      Status: OptionStatus;
    }


    export type SynonymsDocument = string;

    export interface TextOptions {
      DefaultValue?: FieldValue;
      FacetEnabled?: Boolean;
      ResultEnabled?: Boolean;
      TextProcessor?: FieldName;
    }


    export interface UIntOptions {
      DefaultValue?: UIntValue;
    }


    export type UIntValue = number;

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


    export type UpdateTimestamp = number;

}
