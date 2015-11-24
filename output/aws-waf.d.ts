// DO NOT EDIT!
//

///<reference path="./aws-sdk-common.d.ts" />
declare module "aws-sdk" {
    export class WAF {
      constructor(options?: any);
      createByteMatchSet(params: WAFCreateByteMatchSetRequest, callback: (err: WAFWAFDisallowedNameException|WAFWAFInternalErrorException|WAFWAFInvalidAccountException|WAFWAFInvalidParameterException|WAFWAFStaleDataException|WAFWAFLimitsExceededException|any, data: WAFCreateByteMatchSetResponse|any) => void): void;
      createIPSet(params: WAFCreateIPSetRequest, callback: (err: WAFWAFStaleDataException|WAFWAFInternalErrorException|WAFWAFInvalidAccountException|WAFWAFDisallowedNameException|WAFWAFInvalidParameterException|WAFWAFLimitsExceededException|any, data: WAFCreateIPSetResponse|any) => void): void;
      createRule(params: WAFCreateRuleRequest, callback: (err: WAFWAFStaleDataException|WAFWAFInternalErrorException|WAFWAFDisallowedNameException|WAFWAFInvalidParameterException|WAFWAFLimitsExceededException|any, data: WAFCreateRuleResponse|any) => void): void;
      createSqlInjectionMatchSet(params: WAFCreateSqlInjectionMatchSetRequest, callback: (err: WAFWAFDisallowedNameException|WAFWAFInternalErrorException|WAFWAFInvalidAccountException|WAFWAFInvalidParameterException|WAFWAFStaleDataException|WAFWAFLimitsExceededException|any, data: WAFCreateSqlInjectionMatchSetResponse|any) => void): void;
      createWebACL(params: WAFCreateWebACLRequest, callback: (err: WAFWAFStaleDataException|WAFWAFInternalErrorException|WAFWAFInvalidAccountException|WAFWAFDisallowedNameException|WAFWAFInvalidParameterException|WAFWAFLimitsExceededException|any, data: WAFCreateWebACLResponse|any) => void): void;
      deleteByteMatchSet(params: WAFDeleteByteMatchSetRequest, callback: (err: WAFWAFInternalErrorException|WAFWAFInvalidAccountException|WAFWAFNonexistentItemException|WAFWAFReferencedItemException|WAFWAFStaleDataException|WAFWAFNonEmptyEntityException|any, data: WAFDeleteByteMatchSetResponse|any) => void): void;
      deleteIPSet(params: WAFDeleteIPSetRequest, callback: (err: WAFWAFStaleDataException|WAFWAFInternalErrorException|WAFWAFInvalidAccountException|WAFWAFNonexistentItemException|WAFWAFReferencedItemException|WAFWAFNonEmptyEntityException|any, data: WAFDeleteIPSetResponse|any) => void): void;
      deleteRule(params: WAFDeleteRuleRequest, callback: (err: WAFWAFStaleDataException|WAFWAFInternalErrorException|WAFWAFInvalidAccountException|WAFWAFNonexistentItemException|WAFWAFReferencedItemException|WAFWAFNonEmptyEntityException|any, data: WAFDeleteRuleResponse|any) => void): void;
      deleteSqlInjectionMatchSet(params: WAFDeleteSqlInjectionMatchSetRequest, callback: (err: WAFWAFInternalErrorException|WAFWAFInvalidAccountException|WAFWAFNonexistentItemException|WAFWAFReferencedItemException|WAFWAFStaleDataException|WAFWAFNonEmptyEntityException|any, data: WAFDeleteSqlInjectionMatchSetResponse|any) => void): void;
      deleteWebACL(params: WAFDeleteWebACLRequest, callback: (err: WAFWAFStaleDataException|WAFWAFInternalErrorException|WAFWAFInvalidAccountException|WAFWAFNonexistentItemException|WAFWAFReferencedItemException|WAFWAFNonEmptyEntityException|any, data: WAFDeleteWebACLResponse|any) => void): void;
      getByteMatchSet(params: WAFGetByteMatchSetRequest, callback: (err: WAFWAFInternalErrorException|WAFWAFInvalidAccountException|WAFWAFNonexistentItemException|any, data: WAFGetByteMatchSetResponse|any) => void): void;
      getChangeToken(params: WAFGetChangeTokenRequest, callback: (err: WAFWAFInternalErrorException|any, data: WAFGetChangeTokenResponse|any) => void): void;
      getChangeTokenStatus(params: WAFGetChangeTokenStatusRequest, callback: (err: WAFWAFNonexistentItemException|WAFWAFInternalErrorException|any, data: WAFGetChangeTokenStatusResponse|any) => void): void;
      getIPSet(params: WAFGetIPSetRequest, callback: (err: WAFWAFInternalErrorException|WAFWAFInvalidAccountException|WAFWAFNonexistentItemException|any, data: WAFGetIPSetResponse|any) => void): void;
      getRule(params: WAFGetRuleRequest, callback: (err: WAFWAFInternalErrorException|WAFWAFInvalidAccountException|WAFWAFNonexistentItemException|any, data: WAFGetRuleResponse|any) => void): void;
      getSampledRequests(params: WAFGetSampledRequestsRequest, callback: (err: WAFWAFNonexistentItemException|any, data: WAFGetSampledRequestsResponse|any) => void): void;
      getSqlInjectionMatchSet(params: WAFGetSqlInjectionMatchSetRequest, callback: (err: WAFWAFInternalErrorException|WAFWAFInvalidAccountException|WAFWAFNonexistentItemException|any, data: WAFGetSqlInjectionMatchSetResponse|any) => void): void;
      getWebACL(params: WAFGetWebACLRequest, callback: (err: WAFWAFInternalErrorException|WAFWAFInvalidAccountException|WAFWAFNonexistentItemException|any, data: WAFGetWebACLResponse|any) => void): void;
      listByteMatchSets(params: WAFListByteMatchSetsRequest, callback: (err: WAFWAFInternalErrorException|WAFWAFInvalidAccountException|any, data: WAFListByteMatchSetsResponse|any) => void): void;
      listIPSets(params: WAFListIPSetsRequest, callback: (err: WAFWAFInternalErrorException|WAFWAFInvalidAccountException|any, data: WAFListIPSetsResponse|any) => void): void;
      listRules(params: WAFListRulesRequest, callback: (err: WAFWAFInternalErrorException|WAFWAFInvalidAccountException|any, data: WAFListRulesResponse|any) => void): void;
      listSqlInjectionMatchSets(params: WAFListSqlInjectionMatchSetsRequest, callback: (err: WAFWAFInternalErrorException|WAFWAFInvalidAccountException|any, data: WAFListSqlInjectionMatchSetsResponse|any) => void): void;
      listWebACLs(params: WAFListWebACLsRequest, callback: (err: WAFWAFInternalErrorException|WAFWAFInvalidAccountException|any, data: WAFListWebACLsResponse|any) => void): void;
      updateByteMatchSet(params: WAFUpdateByteMatchSetRequest, callback: (err: WAFWAFInternalErrorException|WAFWAFInvalidAccountException|WAFWAFInvalidOperationException|WAFWAFInvalidParameterException|WAFWAFNonexistentContainerException|WAFWAFNonexistentItemException|WAFWAFStaleDataException|WAFWAFLimitsExceededException|any, data: WAFUpdateByteMatchSetResponse|any) => void): void;
      updateIPSet(params: WAFUpdateIPSetRequest, callback: (err: WAFWAFStaleDataException|WAFWAFInternalErrorException|WAFWAFInvalidAccountException|WAFWAFInvalidOperationException|WAFWAFInvalidParameterException|WAFWAFNonexistentContainerException|WAFWAFNonexistentItemException|WAFWAFReferencedItemException|WAFWAFLimitsExceededException|any, data: WAFUpdateIPSetResponse|any) => void): void;
      updateRule(params: WAFUpdateRuleRequest, callback: (err: WAFWAFStaleDataException|WAFWAFInternalErrorException|WAFWAFInvalidAccountException|WAFWAFInvalidOperationException|WAFWAFInvalidParameterException|WAFWAFNonexistentContainerException|WAFWAFNonexistentItemException|WAFWAFReferencedItemException|WAFWAFLimitsExceededException|any, data: WAFUpdateRuleResponse|any) => void): void;
      updateSqlInjectionMatchSet(params: WAFUpdateSqlInjectionMatchSetRequest, callback: (err: WAFWAFInternalErrorException|WAFWAFInvalidAccountException|WAFWAFInvalidOperationException|WAFWAFInvalidParameterException|WAFWAFNonexistentContainerException|WAFWAFNonexistentItemException|WAFWAFStaleDataException|WAFWAFLimitsExceededException|any, data: WAFUpdateSqlInjectionMatchSetResponse|any) => void): void;
      updateWebACL(params: WAFUpdateWebACLRequest, callback: (err: WAFWAFStaleDataException|WAFWAFInternalErrorException|WAFWAFInvalidAccountException|WAFWAFInvalidOperationException|WAFWAFInvalidParameterException|WAFWAFNonexistentContainerException|WAFWAFNonexistentItemException|WAFWAFReferencedItemException|WAFWAFLimitsExceededException|any, data: WAFUpdateWebACLResponse|any) => void): void;
    }

    export type WAFAction = string;
    export interface WAFActivatedRule {
        Priority: WAFRulePriority;
        RuleId: WAFResourceId;
        Action: WAFWafAction;
    }

    export type WAFActivatedRules = Array<WAFActivatedRule>;
    export interface WAFByteMatchSet {
        ByteMatchSetId: WAFResourceId;
        Name?: WAFResourceName;
        ByteMatchTuples: WAFByteMatchTuples;
    }

    export type WAFByteMatchSetSummaries = Array<WAFByteMatchSetSummary>;
    export interface WAFByteMatchSetSummary {
        ByteMatchSetId: WAFResourceId;
        Name: WAFResourceName;
    }

    export interface WAFByteMatchSetUpdate {
        Action: WAFChangeAction;
        ByteMatchTuple: WAFByteMatchTuple;
    }

    export type WAFByteMatchSetUpdates = Array<WAFByteMatchSetUpdate>;
    export type WAFByteMatchTargetString = any; // not really - it was 'blob' instead - must fix this one
    export interface WAFByteMatchTuple {
        FieldToMatch: WAFFieldToMatch;
        TargetString: WAFByteMatchTargetString;
        TextTransformation: WAFTextTransformation;
        PositionalConstraint: WAFPositionalConstraint;
    }

    export type WAFByteMatchTuples = Array<WAFByteMatchTuple>;
    export type WAFChangeAction = string;
    export type WAFChangeToken = string;
    export type WAFChangeTokenStatus = string;
    export type WAFCountry = string;
    export interface WAFCreateByteMatchSetRequest {
        Name: WAFResourceName;
        ChangeToken: WAFChangeToken;
    }

    export interface WAFCreateByteMatchSetResponse {
        ByteMatchSet?: WAFByteMatchSet;
        ChangeToken?: WAFChangeToken;
    }

    export interface WAFCreateIPSetRequest {
        Name: WAFResourceName;
        ChangeToken: WAFChangeToken;
    }

    export interface WAFCreateIPSetResponse {
        IPSet?: WAFIPSet;
        ChangeToken?: WAFChangeToken;
    }

    export interface WAFCreateRuleRequest {
        Name: WAFResourceName;
        MetricName: WAFMetricName;
        ChangeToken: WAFChangeToken;
    }

    export interface WAFCreateRuleResponse {
        Rule?: WAFRule;
        ChangeToken?: WAFChangeToken;
    }

    export interface WAFCreateSqlInjectionMatchSetRequest {
        Name: WAFResourceName;
        ChangeToken: WAFChangeToken;
    }

    export interface WAFCreateSqlInjectionMatchSetResponse {
        SqlInjectionMatchSet?: WAFSqlInjectionMatchSet;
        ChangeToken?: WAFChangeToken;
    }

    export interface WAFCreateWebACLRequest {
        Name: WAFResourceName;
        MetricName: WAFMetricName;
        DefaultAction: WAFWafAction;
        ChangeToken: WAFChangeToken;
    }

    export interface WAFCreateWebACLResponse {
        WebACL?: WAFWebACL;
        ChangeToken?: WAFChangeToken;
    }

    export interface WAFDeleteByteMatchSetRequest {
        ByteMatchSetId: WAFResourceId;
        ChangeToken: WAFChangeToken;
    }

    export interface WAFDeleteByteMatchSetResponse {
        ChangeToken?: WAFChangeToken;
    }

    export interface WAFDeleteIPSetRequest {
        IPSetId: WAFResourceId;
        ChangeToken: WAFChangeToken;
    }

    export interface WAFDeleteIPSetResponse {
        ChangeToken?: WAFChangeToken;
    }

    export interface WAFDeleteRuleRequest {
        RuleId: WAFResourceId;
        ChangeToken: WAFChangeToken;
    }

    export interface WAFDeleteRuleResponse {
        ChangeToken?: WAFChangeToken;
    }

    export interface WAFDeleteSqlInjectionMatchSetRequest {
        SqlInjectionMatchSetId: WAFResourceId;
        ChangeToken: WAFChangeToken;
    }

    export interface WAFDeleteSqlInjectionMatchSetResponse {
        ChangeToken?: WAFChangeToken;
    }

    export interface WAFDeleteWebACLRequest {
        WebACLId: WAFResourceId;
        ChangeToken: WAFChangeToken;
    }

    export interface WAFDeleteWebACLResponse {
        ChangeToken?: WAFChangeToken;
    }

    export interface WAFFieldToMatch {
        Type: WAFMatchFieldType;
        Data?: WAFMatchFieldData;
    }

    export interface WAFGetByteMatchSetRequest {
        ByteMatchSetId: WAFResourceId;
    }

    export interface WAFGetByteMatchSetResponse {
        ByteMatchSet?: WAFByteMatchSet;
    }

    export interface WAFGetChangeTokenRequest {
    }

    export interface WAFGetChangeTokenResponse {
        ChangeToken?: WAFChangeToken;
    }

    export interface WAFGetChangeTokenStatusRequest {
        ChangeToken: WAFChangeToken;
    }

    export interface WAFGetChangeTokenStatusResponse {
        ChangeTokenStatus?: WAFChangeTokenStatus;
    }

    export interface WAFGetIPSetRequest {
        IPSetId: WAFResourceId;
    }

    export interface WAFGetIPSetResponse {
        IPSet?: WAFIPSet;
    }

    export interface WAFGetRuleRequest {
        RuleId: WAFResourceId;
    }

    export interface WAFGetRuleResponse {
        Rule?: WAFRule;
    }

    export interface WAFGetSampledRequestsRequest {
        WebAclId: WAFResourceId;
        RuleId: WAFResourceId;
        TimeWindow: WAFTimeWindow;
        MaxItems: WAFListMaxItems;
    }

    export interface WAFGetSampledRequestsResponse {
        SampledRequests?: WAFSampledHTTPRequests;
        PopulationSize?: WAFPopulationSize;
        TimeWindow?: WAFTimeWindow;
    }

    export interface WAFGetSqlInjectionMatchSetRequest {
        SqlInjectionMatchSetId: WAFResourceId;
    }

    export interface WAFGetSqlInjectionMatchSetResponse {
        SqlInjectionMatchSet?: WAFSqlInjectionMatchSet;
    }

    export interface WAFGetWebACLRequest {
        WebACLId: WAFResourceId;
    }

    export interface WAFGetWebACLResponse {
        WebACL?: WAFWebACL;
    }

    export interface WAFHTTPHeader {
        Name?: WAFHeaderName;
        Value?: WAFHeaderValue;
    }

    export type WAFHTTPHeaders = Array<WAFHTTPHeader>;
    export type WAFHTTPMethod = string;
    export interface WAFHTTPRequest {
        ClientIP?: WAFIPString;
        Country?: WAFCountry;
        URI?: WAFURIString;
        Method?: WAFHTTPMethod;
        HTTPVersion?: WAFHTTPVersion;
        Headers?: WAFHTTPHeaders;
    }

    export type WAFHTTPVersion = string;
    export type WAFHeaderName = string;
    export type WAFHeaderValue = string;
    export interface WAFIPSet {
        IPSetId: WAFResourceId;
        Name?: WAFResourceName;
        IPSetDescriptors: WAFIPSetDescriptors;
    }

    export interface WAFIPSetDescriptor {
        Type: WAFIPSetDescriptorType;
        Value: WAFIPSetDescriptorValue;
    }

    export type WAFIPSetDescriptorType = string;
    export type WAFIPSetDescriptorValue = string;
    export type WAFIPSetDescriptors = Array<WAFIPSetDescriptor>;
    export type WAFIPSetSummaries = Array<WAFIPSetSummary>;
    export interface WAFIPSetSummary {
        IPSetId: WAFResourceId;
        Name: WAFResourceName;
    }

    export interface WAFIPSetUpdate {
        Action: WAFChangeAction;
        IPSetDescriptor: WAFIPSetDescriptor;
    }

    export type WAFIPSetUpdates = Array<WAFIPSetUpdate>;
    export type WAFIPString = string;
    export interface WAFListByteMatchSetsRequest {
        NextMarker?: WAFNextMarker;
        Limit: WAFPaginationLimit;
    }

    export interface WAFListByteMatchSetsResponse {
        NextMarker?: WAFNextMarker;
        ByteMatchSets?: WAFByteMatchSetSummaries;
    }

    export interface WAFListIPSetsRequest {
        NextMarker?: WAFNextMarker;
        Limit: WAFPaginationLimit;
    }

    export interface WAFListIPSetsResponse {
        NextMarker?: WAFNextMarker;
        IPSets?: WAFIPSetSummaries;
    }

    export type WAFListMaxItems = number;
    export interface WAFListRulesRequest {
        NextMarker?: WAFNextMarker;
        Limit: WAFPaginationLimit;
    }

    export interface WAFListRulesResponse {
        NextMarker?: WAFNextMarker;
        Rules?: WAFRuleSummaries;
    }

    export interface WAFListSqlInjectionMatchSetsRequest {
        NextMarker?: WAFNextMarker;
        Limit: WAFPaginationLimit;
    }

    export interface WAFListSqlInjectionMatchSetsResponse {
        NextMarker?: WAFNextMarker;
        SqlInjectionMatchSets?: WAFSqlInjectionMatchSetSummaries;
    }

    export interface WAFListWebACLsRequest {
        NextMarker?: WAFNextMarker;
        Limit: WAFPaginationLimit;
    }

    export interface WAFListWebACLsResponse {
        NextMarker?: WAFNextMarker;
        WebACLs?: WAFWebACLSummaries;
    }

    export type WAFMatchFieldData = string;
    export type WAFMatchFieldType = string;
    export type WAFMetricName = string;
    export type WAFNegated = boolean;
    export type WAFNextMarker = string;
    export type WAFPaginationLimit = number;
    export type WAFParameterExceptionField = string;
    export type WAFParameterExceptionParameter = string;
    export type WAFPopulationSize = number;
    export type WAFPositionalConstraint = string;
    export interface WAFPredicate {
        Negated: WAFNegated;
        Type: WAFPredicateType;
        DataId: WAFPredicateDataId;
    }

    export type WAFPredicateDataId = string;
    export type WAFPredicateType = string;
    export type WAFPredicates = Array<WAFPredicate>;
    export type WAFResourceId = string;
    export type WAFResourceName = string;
    export interface WAFRule {
        RuleId: WAFResourceId;
        Name?: WAFResourceName;
        MetricName?: WAFMetricName;
        Predicates: WAFPredicates;
    }

    export type WAFRulePriority = number;
    export type WAFRuleSummaries = Array<WAFRuleSummary>;
    export interface WAFRuleSummary {
        RuleId: WAFResourceId;
        Name: WAFResourceName;
    }

    export interface WAFRuleUpdate {
        Action: WAFChangeAction;
        Predicate: WAFPredicate;
    }

    export type WAFRuleUpdates = Array<WAFRuleUpdate>;
    export type WAFSampleWeight = number;
    export interface WAFSampledHTTPRequest {
        Request: WAFHTTPRequest;
        Weight: WAFSampleWeight;
        Timestamp?: WAFTimestamp;
        Action?: WAFAction;
    }

    export type WAFSampledHTTPRequests = Array<WAFSampledHTTPRequest>;
    export interface WAFSqlInjectionMatchSet {
        SqlInjectionMatchSetId: WAFResourceId;
        Name?: WAFResourceName;
        SqlInjectionMatchTuples: WAFSqlInjectionMatchTuples;
    }

    export type WAFSqlInjectionMatchSetSummaries = Array<WAFSqlInjectionMatchSetSummary>;
    export interface WAFSqlInjectionMatchSetSummary {
        SqlInjectionMatchSetId: WAFResourceId;
        Name: WAFResourceName;
    }

    export interface WAFSqlInjectionMatchSetUpdate {
        Action: WAFChangeAction;
        SqlInjectionMatchTuple: WAFSqlInjectionMatchTuple;
    }

    export type WAFSqlInjectionMatchSetUpdates = Array<WAFSqlInjectionMatchSetUpdate>;
    export interface WAFSqlInjectionMatchTuple {
        FieldToMatch: WAFFieldToMatch;
        TextTransformation: WAFTextTransformation;
    }

    export type WAFSqlInjectionMatchTuples = Array<WAFSqlInjectionMatchTuple>;
    export type WAFTextTransformation = string;
    export interface WAFTimeWindow {
        StartTime: WAFTimestamp;
        EndTime: WAFTimestamp;
    }

    export type WAFTimestamp = number;
    export type WAFURIString = string;
    export interface WAFUpdateByteMatchSetRequest {
        ByteMatchSetId: WAFResourceId;
        ChangeToken: WAFChangeToken;
        Updates: WAFByteMatchSetUpdates;
    }

    export interface WAFUpdateByteMatchSetResponse {
        ChangeToken?: WAFChangeToken;
    }

    export interface WAFUpdateIPSetRequest {
        IPSetId: WAFResourceId;
        ChangeToken: WAFChangeToken;
        Updates: WAFIPSetUpdates;
    }

    export interface WAFUpdateIPSetResponse {
        ChangeToken?: WAFChangeToken;
    }

    export interface WAFUpdateRuleRequest {
        RuleId: WAFResourceId;
        ChangeToken: WAFChangeToken;
        Updates: WAFRuleUpdates;
    }

    export interface WAFUpdateRuleResponse {
        ChangeToken?: WAFChangeToken;
    }

    export interface WAFUpdateSqlInjectionMatchSetRequest {
        SqlInjectionMatchSetId: WAFResourceId;
        ChangeToken: WAFChangeToken;
        Updates: WAFSqlInjectionMatchSetUpdates;
    }

    export interface WAFUpdateSqlInjectionMatchSetResponse {
        ChangeToken?: WAFChangeToken;
    }

    export interface WAFUpdateWebACLRequest {
        WebACLId: WAFResourceId;
        ChangeToken: WAFChangeToken;
        Updates?: WAFWebACLUpdates;
        DefaultAction?: WAFWafAction;
    }

    export interface WAFUpdateWebACLResponse {
        ChangeToken?: WAFChangeToken;
    }

    export interface WAFWAFDisallowedNameException {
        message?: WAFerrorMessage;
    }

    export interface WAFWAFInternalErrorException {
        message?: WAFerrorMessage;
    }

    export interface WAFWAFInvalidAccountException {
    }

    export interface WAFWAFInvalidOperationException {
        message?: WAFerrorMessage;
    }

    export interface WAFWAFInvalidParameterException {
        field?: WAFParameterExceptionField;
        parameter?: WAFParameterExceptionParameter;
    }

    export interface WAFWAFLimitsExceededException {
        message?: WAFerrorMessage;
    }

    export interface WAFWAFNonEmptyEntityException {
        message?: WAFerrorMessage;
    }

    export interface WAFWAFNonexistentContainerException {
        message?: WAFerrorMessage;
    }

    export interface WAFWAFNonexistentItemException {
        message?: WAFerrorMessage;
    }

    export interface WAFWAFReferencedItemException {
        message?: WAFerrorMessage;
    }

    export interface WAFWAFStaleDataException {
        message?: WAFerrorMessage;
    }

    export interface WAFWafAction {
        Type: WAFWafActionType;
    }

    export type WAFWafActionType = string;
    export interface WAFWebACL {
        WebACLId: WAFResourceId;
        Name?: WAFResourceName;
        MetricName?: WAFMetricName;
        DefaultAction: WAFWafAction;
        Rules: WAFActivatedRules;
    }

    export type WAFWebACLSummaries = Array<WAFWebACLSummary>;
    export interface WAFWebACLSummary {
        WebACLId: WAFResourceId;
        Name: WAFResourceName;
    }

    export interface WAFWebACLUpdate {
        Action: WAFChangeAction;
        ActivatedRule: WAFActivatedRule;
    }

    export type WAFWebACLUpdates = Array<WAFWebACLUpdate>;
    export type WAFerrorMessage = string;
}
