// Type definitions for aws-sdk - AWS WAF
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

///<reference path="./aws-sdk-common.d.ts" />

declare module "aws-sdk" {

    /*
     * apiVersion: 2015-08-24
     * endpointPrefix: waf
     * serviceAbbreviation: WAF
     * signatureVersion: v4
     * protocol: json
     */
    export class WAF extends Service {
      constructor(options?: any);
      endpoint: Endpoint;
      createByteMatchSet(params: WAF.CreateByteMatchSetRequest, callback?: (err: WAF.WAFDisallowedNameException|WAF.WAFInternalErrorException|WAF.WAFInvalidAccountException|WAF.WAFInvalidParameterException|WAF.WAFStaleDataException|WAF.WAFLimitsExceededException|any, data: WAF.CreateByteMatchSetResponse|any) => void): Request;
      createIPSet(params: WAF.CreateIPSetRequest, callback?: (err: WAF.WAFStaleDataException|WAF.WAFInternalErrorException|WAF.WAFInvalidAccountException|WAF.WAFDisallowedNameException|WAF.WAFInvalidParameterException|WAF.WAFLimitsExceededException|any, data: WAF.CreateIPSetResponse|any) => void): Request;
      createRule(params: WAF.CreateRuleRequest, callback?: (err: WAF.WAFStaleDataException|WAF.WAFInternalErrorException|WAF.WAFDisallowedNameException|WAF.WAFInvalidParameterException|WAF.WAFLimitsExceededException|any, data: WAF.CreateRuleResponse|any) => void): Request;
      createSizeConstraintSet(params: WAF.CreateSizeConstraintSetRequest, callback?: (err: WAF.WAFStaleDataException|WAF.WAFInternalErrorException|WAF.WAFInvalidAccountException|WAF.WAFDisallowedNameException|WAF.WAFInvalidParameterException|WAF.WAFLimitsExceededException|any, data: WAF.CreateSizeConstraintSetResponse|any) => void): Request;
      createSqlInjectionMatchSet(params: WAF.CreateSqlInjectionMatchSetRequest, callback?: (err: WAF.WAFDisallowedNameException|WAF.WAFInternalErrorException|WAF.WAFInvalidAccountException|WAF.WAFInvalidParameterException|WAF.WAFStaleDataException|WAF.WAFLimitsExceededException|any, data: WAF.CreateSqlInjectionMatchSetResponse|any) => void): Request;
      createWebACL(params: WAF.CreateWebACLRequest, callback?: (err: WAF.WAFStaleDataException|WAF.WAFInternalErrorException|WAF.WAFInvalidAccountException|WAF.WAFDisallowedNameException|WAF.WAFInvalidParameterException|WAF.WAFLimitsExceededException|any, data: WAF.CreateWebACLResponse|any) => void): Request;
      deleteByteMatchSet(params: WAF.DeleteByteMatchSetRequest, callback?: (err: WAF.WAFInternalErrorException|WAF.WAFInvalidAccountException|WAF.WAFNonexistentItemException|WAF.WAFReferencedItemException|WAF.WAFStaleDataException|WAF.WAFNonEmptyEntityException|any, data: WAF.DeleteByteMatchSetResponse|any) => void): Request;
      deleteIPSet(params: WAF.DeleteIPSetRequest, callback?: (err: WAF.WAFStaleDataException|WAF.WAFInternalErrorException|WAF.WAFInvalidAccountException|WAF.WAFNonexistentItemException|WAF.WAFReferencedItemException|WAF.WAFNonEmptyEntityException|any, data: WAF.DeleteIPSetResponse|any) => void): Request;
      deleteRule(params: WAF.DeleteRuleRequest, callback?: (err: WAF.WAFStaleDataException|WAF.WAFInternalErrorException|WAF.WAFInvalidAccountException|WAF.WAFNonexistentItemException|WAF.WAFReferencedItemException|WAF.WAFNonEmptyEntityException|any, data: WAF.DeleteRuleResponse|any) => void): Request;
      deleteSizeConstraintSet(params: WAF.DeleteSizeConstraintSetRequest, callback?: (err: WAF.WAFStaleDataException|WAF.WAFInternalErrorException|WAF.WAFInvalidAccountException|WAF.WAFNonexistentItemException|WAF.WAFReferencedItemException|WAF.WAFNonEmptyEntityException|any, data: WAF.DeleteSizeConstraintSetResponse|any) => void): Request;
      deleteSqlInjectionMatchSet(params: WAF.DeleteSqlInjectionMatchSetRequest, callback?: (err: WAF.WAFInternalErrorException|WAF.WAFInvalidAccountException|WAF.WAFNonexistentItemException|WAF.WAFReferencedItemException|WAF.WAFStaleDataException|WAF.WAFNonEmptyEntityException|any, data: WAF.DeleteSqlInjectionMatchSetResponse|any) => void): Request;
      deleteWebACL(params: WAF.DeleteWebACLRequest, callback?: (err: WAF.WAFStaleDataException|WAF.WAFInternalErrorException|WAF.WAFInvalidAccountException|WAF.WAFNonexistentItemException|WAF.WAFReferencedItemException|WAF.WAFNonEmptyEntityException|any, data: WAF.DeleteWebACLResponse|any) => void): Request;
      getByteMatchSet(params: WAF.GetByteMatchSetRequest, callback?: (err: WAF.WAFInternalErrorException|WAF.WAFInvalidAccountException|WAF.WAFNonexistentItemException|any, data: WAF.GetByteMatchSetResponse|any) => void): Request;
      getChangeToken(params: WAF.GetChangeTokenRequest, callback?: (err: WAF.WAFInternalErrorException|any, data: WAF.GetChangeTokenResponse|any) => void): Request;
      getChangeTokenStatus(params: WAF.GetChangeTokenStatusRequest, callback?: (err: WAF.WAFNonexistentItemException|WAF.WAFInternalErrorException|any, data: WAF.GetChangeTokenStatusResponse|any) => void): Request;
      getIPSet(params: WAF.GetIPSetRequest, callback?: (err: WAF.WAFInternalErrorException|WAF.WAFInvalidAccountException|WAF.WAFNonexistentItemException|any, data: WAF.GetIPSetResponse|any) => void): Request;
      getRule(params: WAF.GetRuleRequest, callback?: (err: WAF.WAFInternalErrorException|WAF.WAFInvalidAccountException|WAF.WAFNonexistentItemException|any, data: WAF.GetRuleResponse|any) => void): Request;
      getSampledRequests(params: WAF.GetSampledRequestsRequest, callback?: (err: WAF.WAFNonexistentItemException|WAF.WAFInternalErrorException|any, data: WAF.GetSampledRequestsResponse|any) => void): Request;
      getSizeConstraintSet(params: WAF.GetSizeConstraintSetRequest, callback?: (err: WAF.WAFInternalErrorException|WAF.WAFInvalidAccountException|WAF.WAFNonexistentItemException|any, data: WAF.GetSizeConstraintSetResponse|any) => void): Request;
      getSqlInjectionMatchSet(params: WAF.GetSqlInjectionMatchSetRequest, callback?: (err: WAF.WAFInternalErrorException|WAF.WAFInvalidAccountException|WAF.WAFNonexistentItemException|any, data: WAF.GetSqlInjectionMatchSetResponse|any) => void): Request;
      getWebACL(params: WAF.GetWebACLRequest, callback?: (err: WAF.WAFInternalErrorException|WAF.WAFInvalidAccountException|WAF.WAFNonexistentItemException|any, data: WAF.GetWebACLResponse|any) => void): Request;
      listByteMatchSets(params: WAF.ListByteMatchSetsRequest, callback?: (err: WAF.WAFInternalErrorException|WAF.WAFInvalidAccountException|any, data: WAF.ListByteMatchSetsResponse|any) => void): Request;
      listIPSets(params: WAF.ListIPSetsRequest, callback?: (err: WAF.WAFInternalErrorException|WAF.WAFInvalidAccountException|any, data: WAF.ListIPSetsResponse|any) => void): Request;
      listRules(params: WAF.ListRulesRequest, callback?: (err: WAF.WAFInternalErrorException|WAF.WAFInvalidAccountException|any, data: WAF.ListRulesResponse|any) => void): Request;
      listSizeConstraintSets(params: WAF.ListSizeConstraintSetsRequest, callback?: (err: WAF.WAFInternalErrorException|WAF.WAFInvalidAccountException|any, data: WAF.ListSizeConstraintSetsResponse|any) => void): Request;
      listSqlInjectionMatchSets(params: WAF.ListSqlInjectionMatchSetsRequest, callback?: (err: WAF.WAFInternalErrorException|WAF.WAFInvalidAccountException|any, data: WAF.ListSqlInjectionMatchSetsResponse|any) => void): Request;
      listWebACLs(params: WAF.ListWebACLsRequest, callback?: (err: WAF.WAFInternalErrorException|WAF.WAFInvalidAccountException|any, data: WAF.ListWebACLsResponse|any) => void): Request;
      updateByteMatchSet(params: WAF.UpdateByteMatchSetRequest, callback?: (err: WAF.WAFInternalErrorException|WAF.WAFInvalidAccountException|WAF.WAFInvalidOperationException|WAF.WAFInvalidParameterException|WAF.WAFNonexistentContainerException|WAF.WAFNonexistentItemException|WAF.WAFStaleDataException|WAF.WAFLimitsExceededException|any, data: WAF.UpdateByteMatchSetResponse|any) => void): Request;
      updateIPSet(params: WAF.UpdateIPSetRequest, callback?: (err: WAF.WAFStaleDataException|WAF.WAFInternalErrorException|WAF.WAFInvalidAccountException|WAF.WAFInvalidOperationException|WAF.WAFInvalidParameterException|WAF.WAFNonexistentContainerException|WAF.WAFNonexistentItemException|WAF.WAFReferencedItemException|WAF.WAFLimitsExceededException|any, data: WAF.UpdateIPSetResponse|any) => void): Request;
      updateRule(params: WAF.UpdateRuleRequest, callback?: (err: WAF.WAFStaleDataException|WAF.WAFInternalErrorException|WAF.WAFInvalidAccountException|WAF.WAFInvalidOperationException|WAF.WAFInvalidParameterException|WAF.WAFNonexistentContainerException|WAF.WAFNonexistentItemException|WAF.WAFReferencedItemException|WAF.WAFLimitsExceededException|any, data: WAF.UpdateRuleResponse|any) => void): Request;
      updateSizeConstraintSet(params: WAF.UpdateSizeConstraintSetRequest, callback?: (err: WAF.WAFStaleDataException|WAF.WAFInternalErrorException|WAF.WAFInvalidAccountException|WAF.WAFInvalidOperationException|WAF.WAFInvalidParameterException|WAF.WAFNonexistentContainerException|WAF.WAFNonexistentItemException|WAF.WAFReferencedItemException|WAF.WAFLimitsExceededException|any, data: WAF.UpdateSizeConstraintSetResponse|any) => void): Request;
      updateSqlInjectionMatchSet(params: WAF.UpdateSqlInjectionMatchSetRequest, callback?: (err: WAF.WAFInternalErrorException|WAF.WAFInvalidAccountException|WAF.WAFInvalidOperationException|WAF.WAFInvalidParameterException|WAF.WAFNonexistentContainerException|WAF.WAFNonexistentItemException|WAF.WAFStaleDataException|WAF.WAFLimitsExceededException|any, data: WAF.UpdateSqlInjectionMatchSetResponse|any) => void): Request;
      updateWebACL(params: WAF.UpdateWebACLRequest, callback?: (err: WAF.WAFStaleDataException|WAF.WAFInternalErrorException|WAF.WAFInvalidAccountException|WAF.WAFInvalidOperationException|WAF.WAFInvalidParameterException|WAF.WAFNonexistentContainerException|WAF.WAFNonexistentItemException|WAF.WAFReferencedItemException|WAF.WAFLimitsExceededException|any, data: WAF.UpdateWebACLResponse|any) => void): Request;

    }

    export module WAF {
        export type Action = string;
        export type ActivatedRules = ActivatedRule[];
        export type ByteMatchSetSummaries = ByteMatchSetSummary[];
        export type ByteMatchSetUpdates = ByteMatchSetUpdate[];
        export type ByteMatchTargetString = any;    // type: blob
        export type ByteMatchTuples = ByteMatchTuple[];
        export type ChangeAction = string;
        export type ChangeToken = string;
        export type ChangeTokenStatus = string;
        export type ComparisonOperator = string;
        export type Country = string;
        export type HTTPHeaders = HTTPHeader[];
        export type HTTPMethod = string;
        export type HTTPVersion = string;
        export type HeaderName = string;
        export type HeaderValue = string;
        export type IPSetDescriptorType = string;
        export type IPSetDescriptorValue = string;
        export type IPSetDescriptors = IPSetDescriptor[];
        export type IPSetSummaries = IPSetSummary[];
        export type IPSetUpdates = IPSetUpdate[];
        export type IPString = string;
        export type ListMaxItems = number;    // max: 100, min: 1
        export type MatchFieldData = string;
        export type MatchFieldType = string;
        export type MetricName = string;
        export type Negated = boolean;
        export type NextMarker = string;    // min: 1
        export type PaginationLimit = number;    // max: 100, min: 1
        export type ParameterExceptionField = string;
        export type ParameterExceptionParameter = string;    // min: 1
        export type ParameterExceptionReason = string;
        export type PopulationSize = number;
        export type PositionalConstraint = string;
        export type PredicateType = string;
        export type Predicates = Predicate[];
        export type ResourceId = string;    // max: 128, min: 1
        export type ResourceName = string;    // max: 128, min: 1
        export type RulePriority = number;
        export type RuleSummaries = RuleSummary[];
        export type RuleUpdates = RuleUpdate[];
        export type SampleWeight = number;
        export type SampledHTTPRequests = SampledHTTPRequest[];
        export type Size = number;
        export type SizeConstraintSetSummaries = SizeConstraintSetSummary[];
        export type SizeConstraintSetUpdates = SizeConstraintSetUpdate[];
        export type SizeConstraints = SizeConstraint[];
        export type SqlInjectionMatchSetSummaries = SqlInjectionMatchSetSummary[];
        export type SqlInjectionMatchSetUpdates = SqlInjectionMatchSetUpdate[];
        export type SqlInjectionMatchTuples = SqlInjectionMatchTuple[];
        export type TextTransformation = string;
        export type Timestamp = number;
        export type URIString = string;
        export type WafActionType = string;
        export type WebACLSummaries = WebACLSummary[];
        export type WebACLUpdates = WebACLUpdate[];
        export type errorMessage = string;

        export interface ActivatedRule {
            Priority: RulePriority;
            RuleId: ResourceId;
            Action: WafAction;
        }
        export interface ByteMatchSet {
            ByteMatchSetId: ResourceId;
            Name?: ResourceName;
            ByteMatchTuples: ByteMatchTuples;
        }
        export interface ByteMatchSetSummary {
            ByteMatchSetId: ResourceId;
            Name: ResourceName;
        }
        export interface ByteMatchSetUpdate {
            Action: ChangeAction;
            ByteMatchTuple: ByteMatchTuple;
        }
        export interface ByteMatchTuple {
            FieldToMatch: FieldToMatch;
            TargetString: ByteMatchTargetString;
            TextTransformation: TextTransformation;
            PositionalConstraint: PositionalConstraint;
        }
        export interface CreateByteMatchSetRequest {
            Name: ResourceName;
            ChangeToken: ChangeToken;
        }
        export interface CreateByteMatchSetResponse {
            ByteMatchSet?: ByteMatchSet;
            ChangeToken?: ChangeToken;
        }
        export interface CreateIPSetRequest {
            Name: ResourceName;
            ChangeToken: ChangeToken;
        }
        export interface CreateIPSetResponse {
            IPSet?: IPSet;
            ChangeToken?: ChangeToken;
        }
        export interface CreateRuleRequest {
            Name: ResourceName;
            MetricName: MetricName;
            ChangeToken: ChangeToken;
        }
        export interface CreateRuleResponse {
            Rule?: Rule;
            ChangeToken?: ChangeToken;
        }
        export interface CreateSizeConstraintSetRequest {
            Name: ResourceName;
            ChangeToken: ChangeToken;
        }
        export interface CreateSizeConstraintSetResponse {
            SizeConstraintSet?: SizeConstraintSet;
            ChangeToken?: ChangeToken;
        }
        export interface CreateSqlInjectionMatchSetRequest {
            Name: ResourceName;
            ChangeToken: ChangeToken;
        }
        export interface CreateSqlInjectionMatchSetResponse {
            SqlInjectionMatchSet?: SqlInjectionMatchSet;
            ChangeToken?: ChangeToken;
        }
        export interface CreateWebACLRequest {
            Name: ResourceName;
            MetricName: MetricName;
            DefaultAction: WafAction;
            ChangeToken: ChangeToken;
        }
        export interface CreateWebACLResponse {
            WebACL?: WebACL;
            ChangeToken?: ChangeToken;
        }
        export interface DeleteByteMatchSetRequest {
            ByteMatchSetId: ResourceId;
            ChangeToken: ChangeToken;
        }
        export interface DeleteByteMatchSetResponse {
            ChangeToken?: ChangeToken;
        }
        export interface DeleteIPSetRequest {
            IPSetId: ResourceId;
            ChangeToken: ChangeToken;
        }
        export interface DeleteIPSetResponse {
            ChangeToken?: ChangeToken;
        }
        export interface DeleteRuleRequest {
            RuleId: ResourceId;
            ChangeToken: ChangeToken;
        }
        export interface DeleteRuleResponse {
            ChangeToken?: ChangeToken;
        }
        export interface DeleteSizeConstraintSetRequest {
            SizeConstraintSetId: ResourceId;
            ChangeToken: ChangeToken;
        }
        export interface DeleteSizeConstraintSetResponse {
            ChangeToken?: ChangeToken;
        }
        export interface DeleteSqlInjectionMatchSetRequest {
            SqlInjectionMatchSetId: ResourceId;
            ChangeToken: ChangeToken;
        }
        export interface DeleteSqlInjectionMatchSetResponse {
            ChangeToken?: ChangeToken;
        }
        export interface DeleteWebACLRequest {
            WebACLId: ResourceId;
            ChangeToken: ChangeToken;
        }
        export interface DeleteWebACLResponse {
            ChangeToken?: ChangeToken;
        }
        export interface FieldToMatch {
            Type: MatchFieldType;
            Data?: MatchFieldData;
        }
        export interface GetByteMatchSetRequest {
            ByteMatchSetId: ResourceId;
        }
        export interface GetByteMatchSetResponse {
            ByteMatchSet?: ByteMatchSet;
        }
        export interface GetChangeTokenRequest {
        }
        export interface GetChangeTokenResponse {
            ChangeToken?: ChangeToken;
        }
        export interface GetChangeTokenStatusRequest {
            ChangeToken: ChangeToken;
        }
        export interface GetChangeTokenStatusResponse {
            ChangeTokenStatus?: ChangeTokenStatus;
        }
        export interface GetIPSetRequest {
            IPSetId: ResourceId;
        }
        export interface GetIPSetResponse {
            IPSet?: IPSet;
        }
        export interface GetRuleRequest {
            RuleId: ResourceId;
        }
        export interface GetRuleResponse {
            Rule?: Rule;
        }
        export interface GetSampledRequestsRequest {
            WebAclId: ResourceId;
            RuleId: ResourceId;
            TimeWindow: TimeWindow;
            MaxItems: ListMaxItems;
        }
        export interface GetSampledRequestsResponse {
            SampledRequests?: SampledHTTPRequests;
            PopulationSize?: PopulationSize;
            TimeWindow?: TimeWindow;
        }
        export interface GetSizeConstraintSetRequest {
            SizeConstraintSetId: ResourceId;
        }
        export interface GetSizeConstraintSetResponse {
            SizeConstraintSet?: SizeConstraintSet;
        }
        export interface GetSqlInjectionMatchSetRequest {
            SqlInjectionMatchSetId: ResourceId;
        }
        export interface GetSqlInjectionMatchSetResponse {
            SqlInjectionMatchSet?: SqlInjectionMatchSet;
        }
        export interface GetWebACLRequest {
            WebACLId: ResourceId;
        }
        export interface GetWebACLResponse {
            WebACL?: WebACL;
        }
        export interface HTTPHeader {
            Name?: HeaderName;
            Value?: HeaderValue;
        }
        export interface HTTPRequest {
            ClientIP?: IPString;
            Country?: Country;
            URI?: URIString;
            Method?: HTTPMethod;
            HTTPVersion?: HTTPVersion;
            Headers?: HTTPHeaders;
        }
        export interface IPSet {
            IPSetId: ResourceId;
            Name?: ResourceName;
            IPSetDescriptors: IPSetDescriptors;
        }
        export interface IPSetDescriptor {
            Type: IPSetDescriptorType;
            Value: IPSetDescriptorValue;
        }
        export interface IPSetSummary {
            IPSetId: ResourceId;
            Name: ResourceName;
        }
        export interface IPSetUpdate {
            Action: ChangeAction;
            IPSetDescriptor: IPSetDescriptor;
        }
        export interface ListByteMatchSetsRequest {
            NextMarker?: NextMarker;
            Limit: PaginationLimit;
        }
        export interface ListByteMatchSetsResponse {
            NextMarker?: NextMarker;
            ByteMatchSets?: ByteMatchSetSummaries;
        }
        export interface ListIPSetsRequest {
            NextMarker?: NextMarker;
            Limit: PaginationLimit;
        }
        export interface ListIPSetsResponse {
            NextMarker?: NextMarker;
            IPSets?: IPSetSummaries;
        }
        export interface ListRulesRequest {
            NextMarker?: NextMarker;
            Limit: PaginationLimit;
        }
        export interface ListRulesResponse {
            NextMarker?: NextMarker;
            Rules?: RuleSummaries;
        }
        export interface ListSizeConstraintSetsRequest {
            NextMarker?: NextMarker;
            Limit: PaginationLimit;
        }
        export interface ListSizeConstraintSetsResponse {
            NextMarker?: NextMarker;
            SizeConstraintSets?: SizeConstraintSetSummaries;
        }
        export interface ListSqlInjectionMatchSetsRequest {
            NextMarker?: NextMarker;
            Limit: PaginationLimit;
        }
        export interface ListSqlInjectionMatchSetsResponse {
            NextMarker?: NextMarker;
            SqlInjectionMatchSets?: SqlInjectionMatchSetSummaries;
        }
        export interface ListWebACLsRequest {
            NextMarker?: NextMarker;
            Limit: PaginationLimit;
        }
        export interface ListWebACLsResponse {
            NextMarker?: NextMarker;
            WebACLs?: WebACLSummaries;
        }
        export interface Predicate {
            Negated: Negated;
            Type: PredicateType;
            DataId: ResourceId;
        }
        export interface Rule {
            RuleId: ResourceId;
            Name?: ResourceName;
            MetricName?: MetricName;
            Predicates: Predicates;
        }
        export interface RuleSummary {
            RuleId: ResourceId;
            Name: ResourceName;
        }
        export interface RuleUpdate {
            Action: ChangeAction;
            Predicate: Predicate;
        }
        export interface SampledHTTPRequest {
            Request: HTTPRequest;
            Weight: SampleWeight;
            Timestamp?: Timestamp;
            Action?: Action;
        }
        export interface SizeConstraint {
            FieldToMatch: FieldToMatch;
            TextTransformation: TextTransformation;
            ComparisonOperator: ComparisonOperator;
            Size: Size;
        }
        export interface SizeConstraintSet {
            SizeConstraintSetId: ResourceId;
            Name?: ResourceName;
            SizeConstraints: SizeConstraints;
        }
        export interface SizeConstraintSetSummary {
            SizeConstraintSetId: ResourceId;
            Name: ResourceName;
        }
        export interface SizeConstraintSetUpdate {
            Action: ChangeAction;
            SizeConstraint: SizeConstraint;
        }
        export interface SqlInjectionMatchSet {
            SqlInjectionMatchSetId: ResourceId;
            Name?: ResourceName;
            SqlInjectionMatchTuples: SqlInjectionMatchTuples;
        }
        export interface SqlInjectionMatchSetSummary {
            SqlInjectionMatchSetId: ResourceId;
            Name: ResourceName;
        }
        export interface SqlInjectionMatchSetUpdate {
            Action: ChangeAction;
            SqlInjectionMatchTuple: SqlInjectionMatchTuple;
        }
        export interface SqlInjectionMatchTuple {
            FieldToMatch: FieldToMatch;
            TextTransformation: TextTransformation;
        }
        export interface TimeWindow {
            StartTime: Timestamp;
            EndTime: Timestamp;
        }
        export interface UpdateByteMatchSetRequest {
            ByteMatchSetId: ResourceId;
            ChangeToken: ChangeToken;
            Updates: ByteMatchSetUpdates;
        }
        export interface UpdateByteMatchSetResponse {
            ChangeToken?: ChangeToken;
        }
        export interface UpdateIPSetRequest {
            IPSetId: ResourceId;
            ChangeToken: ChangeToken;
            Updates: IPSetUpdates;
        }
        export interface UpdateIPSetResponse {
            ChangeToken?: ChangeToken;
        }
        export interface UpdateRuleRequest {
            RuleId: ResourceId;
            ChangeToken: ChangeToken;
            Updates: RuleUpdates;
        }
        export interface UpdateRuleResponse {
            ChangeToken?: ChangeToken;
        }
        export interface UpdateSizeConstraintSetRequest {
            SizeConstraintSetId: ResourceId;
            ChangeToken: ChangeToken;
            Updates: SizeConstraintSetUpdates;
        }
        export interface UpdateSizeConstraintSetResponse {
            ChangeToken?: ChangeToken;
        }
        export interface UpdateSqlInjectionMatchSetRequest {
            SqlInjectionMatchSetId: ResourceId;
            ChangeToken: ChangeToken;
            Updates: SqlInjectionMatchSetUpdates;
        }
        export interface UpdateSqlInjectionMatchSetResponse {
            ChangeToken?: ChangeToken;
        }
        export interface UpdateWebACLRequest {
            WebACLId: ResourceId;
            ChangeToken: ChangeToken;
            Updates?: WebACLUpdates;
            DefaultAction?: WafAction;
        }
        export interface UpdateWebACLResponse {
            ChangeToken?: ChangeToken;
        }
        export interface WAFDisallowedNameException {
            message?: errorMessage;
        }
        export interface WAFInternalErrorException {
            message?: errorMessage;
        }
        export interface WAFInvalidAccountException {
        }
        export interface WAFInvalidOperationException {
            message?: errorMessage;
        }
        export interface WAFInvalidParameterException {
            field?: ParameterExceptionField;
            parameter?: ParameterExceptionParameter;
            reason?: ParameterExceptionReason;
        }
        export interface WAFLimitsExceededException {
            message?: errorMessage;
        }
        export interface WAFNonEmptyEntityException {
            message?: errorMessage;
        }
        export interface WAFNonexistentContainerException {
            message?: errorMessage;
        }
        export interface WAFNonexistentItemException {
            message?: errorMessage;
        }
        export interface WAFReferencedItemException {
            message?: errorMessage;
        }
        export interface WAFStaleDataException {
            message?: errorMessage;
        }
        export interface WafAction {
            Type: WafActionType;
        }
        export interface WebACL {
            WebACLId: ResourceId;
            Name?: ResourceName;
            MetricName?: MetricName;
            DefaultAction: WafAction;
            Rules: ActivatedRules;
        }
        export interface WebACLSummary {
            WebACLId: ResourceId;
            Name: ResourceName;
        }
        export interface WebACLUpdate {
            Action: ChangeAction;
            ActivatedRule: ActivatedRule;
        }

    }
}
