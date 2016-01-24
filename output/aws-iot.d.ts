// Type definitions for aws-sdk - AWS IoT
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

///<reference path="./aws-sdk-common.d.ts" />

declare module "aws-sdk" {

    /*
     * apiVersion: 2015-05-28
     * endpointPrefix: iot
     * serviceAbbreviation: 
     * signatureVersion: v4
     * protocol: rest-json
     */
    export class Iot extends Service {
      constructor(options?: any);
      endpoint: Endpoint;
      acceptCertificateTransfer(params: Iot.AcceptCertificateTransferRequest, callback?: (err: Iot.ResourceNotFoundException|Iot.TransferAlreadyCompletedException|Iot.InvalidRequestException|Iot.ThrottlingException|Iot.UnauthorizedException|Iot.ServiceUnavailableException|Iot.InternalFailureException|any, data: any) => void): Request;
      attachPrincipalPolicy(params: Iot.AttachPrincipalPolicyRequest, callback?: (err: Iot.ResourceNotFoundException|Iot.InvalidRequestException|Iot.ThrottlingException|Iot.UnauthorizedException|Iot.ServiceUnavailableException|Iot.InternalFailureException|Iot.LimitExceededException|any, data: any) => void): Request;
      attachThingPrincipal(params: Iot.AttachThingPrincipalRequest, callback?: (err: Iot.ResourceNotFoundException|Iot.InvalidRequestException|Iot.ThrottlingException|Iot.UnauthorizedException|Iot.ServiceUnavailableException|Iot.InternalFailureException|any, data: Iot.AttachThingPrincipalResponse|any) => void): Request;
      cancelCertificateTransfer(params: Iot.CancelCertificateTransferRequest, callback?: (err: Iot.ResourceNotFoundException|Iot.TransferAlreadyCompletedException|Iot.InvalidRequestException|Iot.ThrottlingException|Iot.UnauthorizedException|Iot.ServiceUnavailableException|Iot.InternalFailureException|any, data: any) => void): Request;
      createCertificateFromCsr(params: Iot.CreateCertificateFromCsrRequest, callback?: (err: Iot.InvalidRequestException|Iot.ThrottlingException|Iot.UnauthorizedException|Iot.ServiceUnavailableException|Iot.InternalFailureException|any, data: Iot.CreateCertificateFromCsrResponse|any) => void): Request;
      createKeysAndCertificate(params: Iot.CreateKeysAndCertificateRequest, callback?: (err: Iot.InvalidRequestException|Iot.ThrottlingException|Iot.UnauthorizedException|Iot.ServiceUnavailableException|Iot.InternalFailureException|any, data: Iot.CreateKeysAndCertificateResponse|any) => void): Request;
      createPolicy(params: Iot.CreatePolicyRequest, callback?: (err: Iot.ResourceAlreadyExistsException|Iot.MalformedPolicyException|Iot.InvalidRequestException|Iot.ThrottlingException|Iot.UnauthorizedException|Iot.ServiceUnavailableException|Iot.InternalFailureException|any, data: Iot.CreatePolicyResponse|any) => void): Request;
      createPolicyVersion(params: Iot.CreatePolicyVersionRequest, callback?: (err: Iot.ResourceNotFoundException|Iot.MalformedPolicyException|Iot.VersionsLimitExceededException|Iot.InvalidRequestException|Iot.ThrottlingException|Iot.UnauthorizedException|Iot.ServiceUnavailableException|Iot.InternalFailureException|any, data: Iot.CreatePolicyVersionResponse|any) => void): Request;
      createThing(params: Iot.CreateThingRequest, callback?: (err: Iot.InvalidRequestException|Iot.ThrottlingException|Iot.UnauthorizedException|Iot.ServiceUnavailableException|Iot.InternalFailureException|Iot.ResourceAlreadyExistsException|any, data: Iot.CreateThingResponse|any) => void): Request;
      createTopicRule(params: Iot.CreateTopicRuleRequest, callback?: (err: Iot.SqlParseException|Iot.InternalException|Iot.InvalidRequestException|Iot.ResourceAlreadyExistsException|Iot.ServiceUnavailableException|any, data: any) => void): Request;
      deleteCertificate(params: Iot.DeleteCertificateRequest, callback?: (err: Iot.DeleteConflictException|Iot.ResourceNotFoundException|Iot.CertificateStateException|any, data: any) => void): Request;
      deletePolicy(params: Iot.DeletePolicyRequest, callback?: (err: Iot.DeleteConflictException|Iot.ResourceNotFoundException|Iot.InvalidRequestException|Iot.ThrottlingException|Iot.UnauthorizedException|Iot.ServiceUnavailableException|Iot.InternalFailureException|any, data: any) => void): Request;
      deletePolicyVersion(params: Iot.DeletePolicyVersionRequest, callback?: (err: Iot.DeleteConflictException|Iot.ResourceNotFoundException|Iot.InvalidRequestException|Iot.ThrottlingException|Iot.UnauthorizedException|Iot.ServiceUnavailableException|Iot.InternalFailureException|any, data: any) => void): Request;
      deleteThing(params: Iot.DeleteThingRequest, callback?: (err: Iot.ResourceNotFoundException|Iot.InvalidRequestException|Iot.ThrottlingException|Iot.UnauthorizedException|Iot.ServiceUnavailableException|Iot.InternalFailureException|any, data: Iot.DeleteThingResponse|any) => void): Request;
      deleteTopicRule(params: Iot.DeleteTopicRuleRequest, callback?: (err: Iot.InternalException|Iot.InvalidRequestException|Iot.ServiceUnavailableException|Iot.UnauthorizedException|any, data: any) => void): Request;
      describeCertificate(params: Iot.DescribeCertificateRequest, callback?: (err: Iot.InvalidRequestException|Iot.ThrottlingException|Iot.UnauthorizedException|Iot.ServiceUnavailableException|Iot.InternalFailureException|Iot.ResourceNotFoundException|any, data: Iot.DescribeCertificateResponse|any) => void): Request;
      describeEndpoint(params: Iot.DescribeEndpointRequest, callback?: (err: Iot.InternalFailureException|Iot.UnauthorizedException|Iot.ThrottlingException|any, data: Iot.DescribeEndpointResponse|any) => void): Request;
      describeThing(params: Iot.DescribeThingRequest, callback?: (err: Iot.ResourceNotFoundException|Iot.InvalidRequestException|Iot.ThrottlingException|Iot.UnauthorizedException|Iot.ServiceUnavailableException|Iot.InternalFailureException|any, data: Iot.DescribeThingResponse|any) => void): Request;
      detachPrincipalPolicy(params: Iot.DetachPrincipalPolicyRequest, callback?: (err: Iot.ResourceNotFoundException|Iot.InvalidRequestException|Iot.ThrottlingException|Iot.UnauthorizedException|Iot.ServiceUnavailableException|Iot.InternalFailureException|any, data: any) => void): Request;
      detachThingPrincipal(params: Iot.DetachThingPrincipalRequest, callback?: (err: Iot.ResourceNotFoundException|Iot.InvalidRequestException|Iot.ThrottlingException|Iot.UnauthorizedException|Iot.ServiceUnavailableException|Iot.InternalFailureException|any, data: Iot.DetachThingPrincipalResponse|any) => void): Request;
      disableTopicRule(params: Iot.DisableTopicRuleRequest, callback?: (err: Iot.InternalException|Iot.InvalidRequestException|Iot.ServiceUnavailableException|Iot.UnauthorizedException|any, data: any) => void): Request;
      enableTopicRule(params: Iot.EnableTopicRuleRequest, callback?: (err: Iot.InternalException|Iot.InvalidRequestException|Iot.ServiceUnavailableException|Iot.UnauthorizedException|any, data: any) => void): Request;
      getLoggingOptions(params: Iot.GetLoggingOptionsRequest, callback?: (err: Iot.InternalException|Iot.InvalidRequestException|Iot.ServiceUnavailableException|any, data: Iot.GetLoggingOptionsResponse|any) => void): Request;
      getPolicy(params: Iot.GetPolicyRequest, callback?: (err: Iot.ResourceNotFoundException|Iot.InvalidRequestException|Iot.ThrottlingException|Iot.UnauthorizedException|Iot.ServiceUnavailableException|Iot.InternalFailureException|any, data: Iot.GetPolicyResponse|any) => void): Request;
      getPolicyVersion(params: Iot.GetPolicyVersionRequest, callback?: (err: Iot.ResourceNotFoundException|Iot.InvalidRequestException|Iot.ThrottlingException|Iot.UnauthorizedException|Iot.ServiceUnavailableException|Iot.InternalFailureException|any, data: Iot.GetPolicyVersionResponse|any) => void): Request;
      getTopicRule(params: Iot.GetTopicRuleRequest, callback?: (err: Iot.InternalException|Iot.InvalidRequestException|Iot.ServiceUnavailableException|Iot.UnauthorizedException|any, data: Iot.GetTopicRuleResponse|any) => void): Request;
      listCertificates(params: Iot.ListCertificatesRequest, callback?: (err: Iot.InvalidRequestException|Iot.ThrottlingException|Iot.UnauthorizedException|Iot.ServiceUnavailableException|Iot.InternalFailureException|any, data: Iot.ListCertificatesResponse|any) => void): Request;
      listPolicies(params: Iot.ListPoliciesRequest, callback?: (err: Iot.InvalidRequestException|Iot.ThrottlingException|Iot.UnauthorizedException|Iot.ServiceUnavailableException|Iot.InternalFailureException|any, data: Iot.ListPoliciesResponse|any) => void): Request;
      listPolicyVersions(params: Iot.ListPolicyVersionsRequest, callback?: (err: Iot.ResourceNotFoundException|Iot.InvalidRequestException|Iot.ThrottlingException|Iot.UnauthorizedException|Iot.ServiceUnavailableException|Iot.InternalFailureException|any, data: Iot.ListPolicyVersionsResponse|any) => void): Request;
      listPrincipalPolicies(params: Iot.ListPrincipalPoliciesRequest, callback?: (err: Iot.ResourceNotFoundException|Iot.InvalidRequestException|Iot.ThrottlingException|Iot.UnauthorizedException|Iot.ServiceUnavailableException|Iot.InternalFailureException|any, data: Iot.ListPrincipalPoliciesResponse|any) => void): Request;
      listPrincipalThings(params: Iot.ListPrincipalThingsRequest, callback?: (err: Iot.InvalidRequestException|Iot.ThrottlingException|Iot.UnauthorizedException|Iot.ServiceUnavailableException|Iot.InternalFailureException|any, data: Iot.ListPrincipalThingsResponse|any) => void): Request;
      listThingPrincipals(params: Iot.ListThingPrincipalsRequest, callback?: (err: Iot.InvalidRequestException|Iot.ThrottlingException|Iot.UnauthorizedException|Iot.ServiceUnavailableException|Iot.InternalFailureException|any, data: Iot.ListThingPrincipalsResponse|any) => void): Request;
      listThings(params: Iot.ListThingsRequest, callback?: (err: Iot.InvalidRequestException|Iot.ThrottlingException|Iot.UnauthorizedException|Iot.ServiceUnavailableException|Iot.InternalFailureException|any, data: Iot.ListThingsResponse|any) => void): Request;
      listTopicRules(params: Iot.ListTopicRulesRequest, callback?: (err: Iot.InternalException|Iot.InvalidRequestException|Iot.ServiceUnavailableException|any, data: Iot.ListTopicRulesResponse|any) => void): Request;
      rejectCertificateTransfer(params: Iot.RejectCertificateTransferRequest, callback?: (err: Iot.ResourceNotFoundException|Iot.TransferAlreadyCompletedException|Iot.InvalidRequestException|Iot.ThrottlingException|Iot.UnauthorizedException|Iot.ServiceUnavailableException|Iot.InternalFailureException|any, data: any) => void): Request;
      replaceTopicRule(params: Iot.ReplaceTopicRuleRequest, callback?: (err: Iot.SqlParseException|Iot.InternalException|Iot.InvalidRequestException|Iot.ServiceUnavailableException|Iot.UnauthorizedException|any, data: any) => void): Request;
      setDefaultPolicyVersion(params: Iot.SetDefaultPolicyVersionRequest, callback?: (err: Iot.ResourceNotFoundException|Iot.InvalidRequestException|Iot.ThrottlingException|Iot.UnauthorizedException|Iot.ServiceUnavailableException|Iot.InternalFailureException|any, data: any) => void): Request;
      setLoggingOptions(params: Iot.SetLoggingOptionsRequest, callback?: (err: Iot.InternalException|Iot.InvalidRequestException|Iot.ServiceUnavailableException|any, data: any) => void): Request;
      transferCertificate(params: Iot.TransferCertificateRequest, callback?: (err: Iot.InvalidRequestException|Iot.ResourceNotFoundException|Iot.CertificateStateException|Iot.TransferConflictException|Iot.ThrottlingException|Iot.UnauthorizedException|Iot.ServiceUnavailableException|Iot.InternalFailureException|any, data: Iot.TransferCertificateResponse|any) => void): Request;
      updateCertificate(params: Iot.UpdateCertificateRequest, callback?: (err: Iot.ResourceNotFoundException|Iot.CertificateStateException|Iot.InvalidRequestException|Iot.ThrottlingException|Iot.UnauthorizedException|Iot.ServiceUnavailableException|Iot.InternalFailureException|any, data: any) => void): Request;
      updateThing(params: Iot.UpdateThingRequest, callback?: (err: Iot.InvalidRequestException|Iot.ThrottlingException|Iot.UnauthorizedException|Iot.ServiceUnavailableException|Iot.InternalFailureException|Iot.ResourceNotFoundException|any, data: Iot.UpdateThingResponse|any) => void): Request;

    }

    export module Iot {
        export type ActionList = Action[];    // max: 10
        export type AscendingOrder = boolean;
        export type AttributeName = string;    // pattern: &quot;[a-zA-Z0-9_.,@/:#-]+&quot;, max: 128
        export type AttributeValue = string;    // pattern: &quot;[a-zA-Z0-9_.,@/:#-]+&quot;, max: 1024
        export type Attributes = {[key:string]: AttributeValue};
        export type AwsAccountId = string;    // pattern: &quot;[0-9]{12}&quot;
        export type AwsArn = string;
        export type BucketName = string;
        export type CertificateArn = string;
        export type CertificateId = string;    // pattern: &quot;(0x)?[a-fA-F0-9]+&quot;, max: 64, min: 64
        export type CertificatePem = string;    // min: 1
        export type CertificateSigningRequest = string;    // min: 1
        export type CertificateStatus = string;
        export type Certificates = Certificate[];
        export type ClientId = string;
        export type CreatedAtDate = number;
        export type DateType = number;
        export type DeliveryStreamName = string;
        export type Description = string;
        export type EndpointAddress = string;
        export type FunctionArn = string;
        export type HashKeyField = string;
        export type HashKeyValue = string;
        export type IsDefaultVersion = boolean;
        export type IsDisabled = boolean;
        export type Key = string;
        export type LogLevel = string;
        export type Marker = string;
        export type MaxResults = number;    // max: 10000, min: 1
        export type NextToken = string;
        export type PageSize = number;    // max: 250, min: 1
        export type PartitionKey = string;
        export type PayloadField = string;
        export type Policies = Policy[];
        export type PolicyArn = string;
        export type PolicyDocument = string;
        export type PolicyName = string;    // pattern: &quot;[\w+=,.@-]+&quot;, max: 128, min: 1
        export type PolicyVersionId = string;    // pattern: &quot;[0-9]+&quot;
        export type PolicyVersions = PolicyVersion[];
        export type Principal = string;
        export type PrincipalArn = string;
        export type Principals = PrincipalArn[];
        export type PrivateKey = string;    // min: 1
        export type PublicKey = string;    // min: 1
        export type QueueUrl = string;
        export type RangeKeyField = string;
        export type RangeKeyValue = string;
        export type RuleArn = string;
        export type RuleName = string;    // pattern: &quot;^[a-zA-Z0-9_]+$&quot;, max: 128, min: 1
        export type SQL = string;
        export type SetAsActive = boolean;
        export type SetAsDefault = boolean;
        export type StreamName = string;
        export type TableName = string;
        export type ThingArn = string;
        export type ThingAttributeList = ThingAttribute[];
        export type ThingName = string;    // pattern: &quot;[a-zA-Z0-9_-]+&quot;, max: 128, min: 1
        export type ThingNameList = ThingName[];
        export type Topic = string;
        export type TopicPattern = string;
        export type TopicRuleList = TopicRuleListItem[];
        export type UseBase64 = boolean;
        export type errorMessage = string;

        export interface AcceptCertificateTransferRequest {
            certificateId: CertificateId;
            setAsActive?: SetAsActive;
        }
        export interface Action {
            dynamoDB?: DynamoDBAction;
            lambda?: LambdaAction;
            sns?: SnsAction;
            sqs?: SqsAction;
            kinesis?: KinesisAction;
            republish?: RepublishAction;
            s3?: S3Action;
            firehose?: FirehoseAction;
        }
        export interface AttachPrincipalPolicyRequest {
            policyName: PolicyName;
            principal: Principal;
        }
        export interface AttachThingPrincipalRequest {
            thingName: ThingName;
            principal: Principal;
        }
        export interface AttachThingPrincipalResponse {
        }
        export interface AttributePayload {
            attributes?: Attributes;
        }
        export interface CancelCertificateTransferRequest {
            certificateId: CertificateId;
        }
        export interface Certificate {
            certificateArn?: CertificateArn;
            certificateId?: CertificateId;
            status?: CertificateStatus;
            creationDate?: DateType;
        }
        export interface CertificateDescription {
            certificateArn?: CertificateArn;
            certificateId?: CertificateId;
            status?: CertificateStatus;
            certificatePem?: CertificatePem;
            ownedBy?: AwsAccountId;
            creationDate?: DateType;
            lastModifiedDate?: DateType;
        }
        export interface CertificateStateException {
            message?: errorMessage;
        }
        export interface CreateCertificateFromCsrRequest {
            certificateSigningRequest: CertificateSigningRequest;
            setAsActive?: SetAsActive;
        }
        export interface CreateCertificateFromCsrResponse {
            certificateArn?: CertificateArn;
            certificateId?: CertificateId;
            certificatePem?: CertificatePem;
        }
        export interface CreateKeysAndCertificateRequest {
            setAsActive?: SetAsActive;
        }
        export interface CreateKeysAndCertificateResponse {
            certificateArn?: CertificateArn;
            certificateId?: CertificateId;
            certificatePem?: CertificatePem;
            keyPair?: KeyPair;
        }
        export interface CreatePolicyRequest {
            policyName: PolicyName;
            policyDocument: PolicyDocument;
        }
        export interface CreatePolicyResponse {
            policyName?: PolicyName;
            policyArn?: PolicyArn;
            policyDocument?: PolicyDocument;
            policyVersionId?: PolicyVersionId;
        }
        export interface CreatePolicyVersionRequest {
            policyName: PolicyName;
            policyDocument: PolicyDocument;
            setAsDefault?: SetAsDefault;
        }
        export interface CreatePolicyVersionResponse {
            policyArn?: PolicyArn;
            policyDocument?: PolicyDocument;
            policyVersionId?: PolicyVersionId;
            isDefaultVersion?: IsDefaultVersion;
        }
        export interface CreateThingRequest {
            thingName: ThingName;
            attributePayload?: AttributePayload;
        }
        export interface CreateThingResponse {
            thingName?: ThingName;
            thingArn?: ThingArn;
        }
        export interface CreateTopicRuleRequest {
            ruleName: RuleName;
            topicRulePayload: TopicRulePayload;
        }
        export interface DeleteCertificateRequest {
            certificateId: CertificateId;
        }
        export interface DeleteConflictException {
            message?: errorMessage;
        }
        export interface DeletePolicyRequest {
            policyName: PolicyName;
        }
        export interface DeletePolicyVersionRequest {
            policyName: PolicyName;
            policyVersionId: PolicyVersionId;
        }
        export interface DeleteThingRequest {
            thingName: ThingName;
        }
        export interface DeleteThingResponse {
        }
        export interface DeleteTopicRuleRequest {
            ruleName: RuleName;
        }
        export interface DescribeCertificateRequest {
            certificateId: CertificateId;
        }
        export interface DescribeCertificateResponse {
            certificateDescription?: CertificateDescription;
        }
        export interface DescribeEndpointRequest {
        }
        export interface DescribeEndpointResponse {
            endpointAddress?: EndpointAddress;
        }
        export interface DescribeThingRequest {
            thingName: ThingName;
        }
        export interface DescribeThingResponse {
            defaultClientId?: ClientId;
            thingName?: ThingName;
            attributes?: Attributes;
        }
        export interface DetachPrincipalPolicyRequest {
            policyName: PolicyName;
            principal: Principal;
        }
        export interface DetachThingPrincipalRequest {
            thingName: ThingName;
            principal: Principal;
        }
        export interface DetachThingPrincipalResponse {
        }
        export interface DisableTopicRuleRequest {
            ruleName: RuleName;
        }
        export interface DynamoDBAction {
            tableName: TableName;
            roleArn: AwsArn;
            hashKeyField: HashKeyField;
            hashKeyValue: HashKeyValue;
            rangeKeyField: RangeKeyField;
            rangeKeyValue: RangeKeyValue;
            payloadField?: PayloadField;
        }
        export interface EnableTopicRuleRequest {
            ruleName: RuleName;
        }
        export interface FirehoseAction {
            roleArn: AwsArn;
            deliveryStreamName: DeliveryStreamName;
        }
        export interface GetLoggingOptionsRequest {
        }
        export interface GetLoggingOptionsResponse {
            roleArn?: AwsArn;
            logLevel?: LogLevel;
        }
        export interface GetPolicyRequest {
            policyName: PolicyName;
        }
        export interface GetPolicyResponse {
            policyName?: PolicyName;
            policyArn?: PolicyArn;
            policyDocument?: PolicyDocument;
            defaultVersionId?: PolicyVersionId;
        }
        export interface GetPolicyVersionRequest {
            policyName: PolicyName;
            policyVersionId: PolicyVersionId;
        }
        export interface GetPolicyVersionResponse {
            policyArn?: PolicyArn;
            policyName?: PolicyName;
            policyDocument?: PolicyDocument;
            policyVersionId?: PolicyVersionId;
            isDefaultVersion?: IsDefaultVersion;
        }
        export interface GetTopicRuleRequest {
            ruleName: RuleName;
        }
        export interface GetTopicRuleResponse {
            ruleArn?: RuleArn;
            rule?: TopicRule;
        }
        export interface InternalException {
            message?: errorMessage;
        }
        export interface InternalFailureException {
            message?: errorMessage;
        }
        export interface InvalidRequestException {
            message?: errorMessage;
        }
        export interface KeyPair {
            PublicKey?: PublicKey;
            PrivateKey?: PrivateKey;
        }
        export interface KinesisAction {
            roleArn: AwsArn;
            streamName: StreamName;
            partitionKey?: PartitionKey;
        }
        export interface LambdaAction {
            functionArn: FunctionArn;
        }
        export interface LimitExceededException {
            message?: errorMessage;
        }
        export interface ListCertificatesRequest {
            pageSize?: PageSize;
            marker?: Marker;
            ascendingOrder?: AscendingOrder;
        }
        export interface ListCertificatesResponse {
            certificates?: Certificates;
            nextMarker?: Marker;
        }
        export interface ListPoliciesRequest {
            marker?: Marker;
            pageSize?: PageSize;
            ascendingOrder?: AscendingOrder;
        }
        export interface ListPoliciesResponse {
            policies?: Policies;
            nextMarker?: Marker;
        }
        export interface ListPolicyVersionsRequest {
            policyName: PolicyName;
        }
        export interface ListPolicyVersionsResponse {
            policyVersions?: PolicyVersions;
        }
        export interface ListPrincipalPoliciesRequest {
            principal: Principal;
            marker?: Marker;
            pageSize?: PageSize;
            ascendingOrder?: AscendingOrder;
        }
        export interface ListPrincipalPoliciesResponse {
            policies?: Policies;
            nextMarker?: Marker;
        }
        export interface ListPrincipalThingsRequest {
            nextToken?: NextToken;
            maxResults?: MaxResults;
            principal: Principal;
        }
        export interface ListPrincipalThingsResponse {
            things?: ThingNameList;
            nextToken?: NextToken;
        }
        export interface ListThingPrincipalsRequest {
            thingName: ThingName;
        }
        export interface ListThingPrincipalsResponse {
            principals?: Principals;
        }
        export interface ListThingsRequest {
            nextToken?: NextToken;
            maxResults?: MaxResults;
            attributeName?: AttributeName;
            attributeValue?: AttributeValue;
        }
        export interface ListThingsResponse {
            things?: ThingAttributeList;
            nextToken?: NextToken;
        }
        export interface ListTopicRulesRequest {
            topic?: Topic;
            maxResults?: MaxResults;
            nextToken?: NextToken;
            ruleDisabled?: IsDisabled;
        }
        export interface ListTopicRulesResponse {
            rules?: TopicRuleList;
            nextToken?: NextToken;
        }
        export interface LoggingOptionsPayload {
            roleArn: AwsArn;
            logLevel?: LogLevel;
        }
        export interface MalformedPolicyException {
            message?: errorMessage;
        }
        export interface Policy {
            policyName?: PolicyName;
            policyArn?: PolicyArn;
        }
        export interface PolicyVersion {
            versionId?: PolicyVersionId;
            isDefaultVersion?: IsDefaultVersion;
            createDate?: DateType;
        }
        export interface RejectCertificateTransferRequest {
            certificateId: CertificateId;
        }
        export interface ReplaceTopicRuleRequest {
            ruleName: RuleName;
            topicRulePayload: TopicRulePayload;
        }
        export interface RepublishAction {
            roleArn: AwsArn;
            topic: TopicPattern;
        }
        export interface ResourceAlreadyExistsException {
            message?: errorMessage;
        }
        export interface ResourceNotFoundException {
            message?: errorMessage;
        }
        export interface S3Action {
            roleArn: AwsArn;
            bucketName: BucketName;
            key: Key;
        }
        export interface ServiceUnavailableException {
            message?: errorMessage;
        }
        export interface SetDefaultPolicyVersionRequest {
            policyName: PolicyName;
            policyVersionId: PolicyVersionId;
        }
        export interface SetLoggingOptionsRequest {
            loggingOptionsPayload: LoggingOptionsPayload;
        }
        export interface SnsAction {
            targetArn: AwsArn;
            roleArn: AwsArn;
        }
        export interface SqlParseException {
            message?: errorMessage;
        }
        export interface SqsAction {
            roleArn: AwsArn;
            queueUrl: QueueUrl;
            useBase64?: UseBase64;
        }
        export interface ThingAttribute {
            thingName?: ThingName;
            attributes?: Attributes;
        }
        export interface ThrottlingException {
            message?: errorMessage;
        }
        export interface TopicRule {
            ruleName?: RuleName;
            sql?: SQL;
            description?: Description;
            createdAt?: CreatedAtDate;
            actions?: ActionList;
            ruleDisabled?: IsDisabled;
        }
        export interface TopicRuleListItem {
            ruleArn?: RuleArn;
            ruleName?: RuleName;
            topicPattern?: TopicPattern;
            createdAt?: CreatedAtDate;
            ruleDisabled?: IsDisabled;
        }
        export interface TopicRulePayload {
            sql: SQL;
            description?: Description;
            actions: ActionList;
            ruleDisabled?: IsDisabled;
        }
        export interface TransferAlreadyCompletedException {
            message?: errorMessage;
        }
        export interface TransferCertificateRequest {
            certificateId: CertificateId;
            targetAwsAccount: AwsAccountId;
        }
        export interface TransferCertificateResponse {
            transferredCertificateArn?: CertificateArn;
        }
        export interface TransferConflictException {
            message?: errorMessage;
        }
        export interface UnauthorizedException {
            message?: errorMessage;
        }
        export interface UpdateCertificateRequest {
            certificateId: CertificateId;
            newStatus: CertificateStatus;
        }
        export interface UpdateThingRequest {
            thingName: ThingName;
            attributePayload: AttributePayload;
        }
        export interface UpdateThingResponse {
        }
        export interface VersionsLimitExceededException {
            message?: errorMessage;
        }

    }
}
