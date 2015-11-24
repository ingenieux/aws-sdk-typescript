// DO NOT EDIT!
//

///<reference path="./aws-sdk-common.d.ts" />
declare module "aws-sdk" {
    export class Iot {
      constructor(options?: any);
      acceptCertificateTransfer(params: IotAcceptCertificateTransferRequest, callback: (err: IotResourceNotFoundException|IotTransferAlreadyCompletedException|IotInvalidRequestException|IotThrottlingException|IotUnauthorizedException|IotServiceUnavailableException|IotInternalFailureException|any, data: any) => void): void;
      attachPrincipalPolicy(params: IotAttachPrincipalPolicyRequest, callback: (err: IotResourceNotFoundException|IotInvalidRequestException|IotThrottlingException|IotUnauthorizedException|IotServiceUnavailableException|IotInternalFailureException|IotLimitExceededException|any, data: any) => void): void;
      attachThingPrincipal(params: IotAttachThingPrincipalRequest, callback: (err: IotResourceNotFoundException|IotInvalidRequestException|IotThrottlingException|IotUnauthorizedException|IotServiceUnavailableException|IotInternalFailureException|any, data: IotAttachThingPrincipalResponse|any) => void): void;
      cancelCertificateTransfer(params: IotCancelCertificateTransferRequest, callback: (err: IotResourceNotFoundException|IotTransferAlreadyCompletedException|IotInvalidRequestException|IotThrottlingException|IotUnauthorizedException|IotServiceUnavailableException|IotInternalFailureException|any, data: any) => void): void;
      createCertificateFromCsr(params: IotCreateCertificateFromCsrRequest, callback: (err: IotInvalidRequestException|IotThrottlingException|IotUnauthorizedException|IotServiceUnavailableException|IotInternalFailureException|any, data: IotCreateCertificateFromCsrResponse|any) => void): void;
      createKeysAndCertificate(params: IotCreateKeysAndCertificateRequest, callback: (err: IotInvalidRequestException|IotThrottlingException|IotUnauthorizedException|IotServiceUnavailableException|IotInternalFailureException|any, data: IotCreateKeysAndCertificateResponse|any) => void): void;
      createPolicy(params: IotCreatePolicyRequest, callback: (err: IotResourceAlreadyExistsException|IotMalformedPolicyException|IotInvalidRequestException|IotThrottlingException|IotUnauthorizedException|IotServiceUnavailableException|IotInternalFailureException|any, data: IotCreatePolicyResponse|any) => void): void;
      createPolicyVersion(params: IotCreatePolicyVersionRequest, callback: (err: IotResourceNotFoundException|IotMalformedPolicyException|IotVersionsLimitExceededException|IotInvalidRequestException|IotThrottlingException|IotUnauthorizedException|IotServiceUnavailableException|IotInternalFailureException|any, data: IotCreatePolicyVersionResponse|any) => void): void;
      createThing(params: IotCreateThingRequest, callback: (err: IotInvalidRequestException|IotThrottlingException|IotUnauthorizedException|IotServiceUnavailableException|IotInternalFailureException|IotResourceAlreadyExistsException|any, data: IotCreateThingResponse|any) => void): void;
      createTopicRule(params: IotCreateTopicRuleRequest, callback: (err: IotSqlParseException|IotInternalException|IotInvalidRequestException|IotResourceAlreadyExistsException|IotServiceUnavailableException|any, data: any) => void): void;
      deleteCertificate(params: IotDeleteCertificateRequest, callback: (err: IotDeleteConflictException|IotResourceNotFoundException|IotCertificateStateException|any, data: any) => void): void;
      deletePolicy(params: IotDeletePolicyRequest, callback: (err: IotDeleteConflictException|IotResourceNotFoundException|IotInvalidRequestException|IotThrottlingException|IotUnauthorizedException|IotServiceUnavailableException|IotInternalFailureException|any, data: any) => void): void;
      deletePolicyVersion(params: IotDeletePolicyVersionRequest, callback: (err: IotDeleteConflictException|IotResourceNotFoundException|IotInvalidRequestException|IotThrottlingException|IotUnauthorizedException|IotServiceUnavailableException|IotInternalFailureException|any, data: any) => void): void;
      deleteThing(params: IotDeleteThingRequest, callback: (err: IotResourceNotFoundException|IotInvalidRequestException|IotThrottlingException|IotUnauthorizedException|IotServiceUnavailableException|IotInternalFailureException|any, data: IotDeleteThingResponse|any) => void): void;
      deleteTopicRule(params: IotDeleteTopicRuleRequest, callback: (err: IotInternalException|IotInvalidRequestException|IotServiceUnavailableException|IotUnauthorizedException|any, data: any) => void): void;
      describeCertificate(params: IotDescribeCertificateRequest, callback: (err: IotInvalidRequestException|IotThrottlingException|IotUnauthorizedException|IotServiceUnavailableException|IotInternalFailureException|IotResourceNotFoundException|any, data: IotDescribeCertificateResponse|any) => void): void;
      describeEndpoint(params: IotDescribeEndpointRequest, callback: (err: IotInternalFailureException|IotUnauthorizedException|any, data: IotDescribeEndpointResponse|any) => void): void;
      describeThing(params: IotDescribeThingRequest, callback: (err: IotResourceNotFoundException|IotInvalidRequestException|IotThrottlingException|IotUnauthorizedException|IotServiceUnavailableException|IotInternalFailureException|any, data: IotDescribeThingResponse|any) => void): void;
      detachPrincipalPolicy(params: IotDetachPrincipalPolicyRequest, callback: (err: IotResourceNotFoundException|IotInvalidRequestException|IotThrottlingException|IotUnauthorizedException|IotServiceUnavailableException|IotInternalFailureException|any, data: any) => void): void;
      detachThingPrincipal(params: IotDetachThingPrincipalRequest, callback: (err: IotResourceNotFoundException|IotInvalidRequestException|IotThrottlingException|IotUnauthorizedException|IotServiceUnavailableException|IotInternalFailureException|any, data: IotDetachThingPrincipalResponse|any) => void): void;
      getLoggingOptions(params: IotGetLoggingOptionsRequest, callback: (err: IotInternalException|IotInvalidRequestException|IotServiceUnavailableException|any, data: IotGetLoggingOptionsResponse|any) => void): void;
      getPolicy(params: IotGetPolicyRequest, callback: (err: IotResourceNotFoundException|IotInvalidRequestException|IotThrottlingException|IotUnauthorizedException|IotServiceUnavailableException|IotInternalFailureException|any, data: IotGetPolicyResponse|any) => void): void;
      getPolicyVersion(params: IotGetPolicyVersionRequest, callback: (err: IotResourceNotFoundException|IotInvalidRequestException|IotThrottlingException|IotUnauthorizedException|IotServiceUnavailableException|IotInternalFailureException|any, data: IotGetPolicyVersionResponse|any) => void): void;
      getTopicRule(params: IotGetTopicRuleRequest, callback: (err: IotInternalException|IotInvalidRequestException|IotServiceUnavailableException|IotUnauthorizedException|any, data: IotGetTopicRuleResponse|any) => void): void;
      listCertificates(params: IotListCertificatesRequest, callback: (err: IotInvalidRequestException|IotThrottlingException|IotUnauthorizedException|IotServiceUnavailableException|IotInternalFailureException|any, data: IotListCertificatesResponse|any) => void): void;
      listPolicies(params: IotListPoliciesRequest, callback: (err: IotInvalidRequestException|IotThrottlingException|IotUnauthorizedException|IotServiceUnavailableException|IotInternalFailureException|any, data: IotListPoliciesResponse|any) => void): void;
      listPolicyVersions(params: IotListPolicyVersionsRequest, callback: (err: IotResourceNotFoundException|IotInvalidRequestException|IotThrottlingException|IotUnauthorizedException|IotServiceUnavailableException|IotInternalFailureException|any, data: IotListPolicyVersionsResponse|any) => void): void;
      listPrincipalPolicies(params: IotListPrincipalPoliciesRequest, callback: (err: IotResourceNotFoundException|IotInvalidRequestException|IotThrottlingException|IotUnauthorizedException|IotServiceUnavailableException|IotInternalFailureException|any, data: IotListPrincipalPoliciesResponse|any) => void): void;
      listPrincipalThings(params: IotListPrincipalThingsRequest, callback: (err: IotInvalidRequestException|IotThrottlingException|IotUnauthorizedException|IotServiceUnavailableException|IotInternalFailureException|any, data: IotListPrincipalThingsResponse|any) => void): void;
      listThingPrincipals(params: IotListThingPrincipalsRequest, callback: (err: IotInvalidRequestException|IotThrottlingException|IotUnauthorizedException|IotServiceUnavailableException|IotInternalFailureException|any, data: IotListThingPrincipalsResponse|any) => void): void;
      listThings(params: IotListThingsRequest, callback: (err: IotInvalidRequestException|IotThrottlingException|IotUnauthorizedException|IotServiceUnavailableException|IotInternalFailureException|any, data: IotListThingsResponse|any) => void): void;
      listTopicRules(params: IotListTopicRulesRequest, callback: (err: IotInternalException|IotInvalidRequestException|IotServiceUnavailableException|any, data: IotListTopicRulesResponse|any) => void): void;
      rejectCertificateTransfer(params: IotRejectCertificateTransferRequest, callback: (err: IotResourceNotFoundException|IotTransferAlreadyCompletedException|IotInvalidRequestException|IotThrottlingException|IotUnauthorizedException|IotServiceUnavailableException|IotInternalFailureException|any, data: any) => void): void;
      replaceTopicRule(params: IotReplaceTopicRuleRequest, callback: (err: IotSqlParseException|IotInternalException|IotInvalidRequestException|IotServiceUnavailableException|IotUnauthorizedException|any, data: any) => void): void;
      setDefaultPolicyVersion(params: IotSetDefaultPolicyVersionRequest, callback: (err: IotResourceNotFoundException|IotInvalidRequestException|IotThrottlingException|IotUnauthorizedException|IotServiceUnavailableException|IotInternalFailureException|any, data: any) => void): void;
      setLoggingOptions(params: IotSetLoggingOptionsRequest, callback: (err: IotInternalException|IotInvalidRequestException|IotServiceUnavailableException|any, data: any) => void): void;
      transferCertificate(params: IotTransferCertificateRequest, callback: (err: IotInvalidRequestException|IotResourceNotFoundException|IotCertificateStateException|IotTransferConflictException|IotThrottlingException|IotUnauthorizedException|IotServiceUnavailableException|IotInternalFailureException|any, data: IotTransferCertificateResponse|any) => void): void;
      updateCertificate(params: IotUpdateCertificateRequest, callback: (err: IotResourceNotFoundException|IotCertificateStateException|IotInvalidRequestException|IotThrottlingException|IotUnauthorizedException|IotServiceUnavailableException|IotInternalFailureException|any, data: any) => void): void;
      updateThing(params: IotUpdateThingRequest, callback: (err: IotInvalidRequestException|IotThrottlingException|IotUnauthorizedException|IotServiceUnavailableException|IotInternalFailureException|IotResourceNotFoundException|any, data: IotUpdateThingResponse|any) => void): void;
    }

    export interface IotAcceptCertificateTransferRequest {
        certificateId: IotCertificateId;
        setAsActive?: IotSetAsActive;
    }

    export interface IotAction {
        dynamoDB?: IotDynamoDBAction;
        lambda?: IotLambdaAction;
        sns?: IotSnsAction;
        sqs?: IotSqsAction;
        kinesis?: IotKinesisAction;
        republish?: IotRepublishAction;
        s3?: IotS3Action;
        firehose?: IotFirehoseAction;
    }

    export type IotActionList = Array<IotAction>; // max: 10
    export type IotAscendingOrder = boolean;
    export interface IotAttachPrincipalPolicyRequest {
        policyName: IotPolicyName;
        principal: IotPrincipal;
    }

    export interface IotAttachThingPrincipalRequest {
        thingName: IotThingName;
        principal: IotPrincipal;
    }

    export interface IotAttachThingPrincipalResponse {
    }

    export type IotAttributeName = string; // pattern: "[a-zA-Z0-9_.,@/:#-]+"
    export interface IotAttributePayload {
        attributes?: IotAttributes;
    }

    export type IotAttributeValue = string; // pattern: "[a-zA-Z0-9_.,@/:#-]+"
    export type IotAttributes = any; // not really - it was 'map' instead - must fix this one
    export type IotAwsAccountId = string; // pattern: "[0-9]{12}"
    export type IotAwsArn = string;
    export type IotBucketName = string;
    export interface IotCancelCertificateTransferRequest {
        certificateId: IotCertificateId;
    }

    export interface IotCertificate {
        certificateArn?: IotCertificateArn;
        certificateId?: IotCertificateId;
        status?: IotCertificateStatus;
        creationDate?: IotDateType;
    }

    export type IotCertificateArn = string;
    export interface IotCertificateDescription {
        certificateArn?: IotCertificateArn;
        certificateId?: IotCertificateId;
        status?: IotCertificateStatus;
        certificatePem?: IotCertificatePem;
        ownedBy?: IotAwsAccountId;
        creationDate?: IotDateType;
        lastModifiedDate?: IotDateType;
    }

    export type IotCertificateId = string; // pattern: "(0x)?[a-fA-F0-9]+"
    export type IotCertificatePem = string;
    export type IotCertificateSigningRequest = string;
    export interface IotCertificateStateException {
        message?: IoterrorMessage;
    }

    export type IotCertificateStatus = string;
    export type IotCertificates = Array<IotCertificate>;
    export type IotClientId = string;
    export interface IotCreateCertificateFromCsrRequest {
        certificateSigningRequest: IotCertificateSigningRequest;
        setAsActive?: IotSetAsActive;
    }

    export interface IotCreateCertificateFromCsrResponse {
        certificateArn?: IotCertificateArn;
        certificateId?: IotCertificateId;
        certificatePem?: IotCertificatePem;
    }

    export interface IotCreateKeysAndCertificateRequest {
        setAsActive?: IotSetAsActive;
    }

    export interface IotCreateKeysAndCertificateResponse {
        certificateArn?: IotCertificateArn;
        certificateId?: IotCertificateId;
        certificatePem?: IotCertificatePem;
        keyPair?: IotKeyPair;
    }

    export interface IotCreatePolicyRequest {
        policyName: IotPolicyName;
        policyDocument: IotPolicyDocument;
    }

    export interface IotCreatePolicyResponse {
        policyName?: IotPolicyName;
        policyArn?: IotPolicyArn;
        policyDocument?: IotPolicyDocument;
        policyVersionId?: IotPolicyVersionId;
    }

    export interface IotCreatePolicyVersionRequest {
        policyName: IotPolicyName;
        policyDocument: IotPolicyDocument;
        setAsDefault?: IotSetAsDefault;
    }

    export interface IotCreatePolicyVersionResponse {
        policyArn?: IotPolicyArn;
        policyDocument?: IotPolicyDocument;
        policyVersionId?: IotPolicyVersionId;
        isDefaultVersion?: IotIsDefaultVersion;
    }

    export interface IotCreateThingRequest {
        thingName: IotThingName;
        attributePayload?: IotAttributePayload;
    }

    export interface IotCreateThingResponse {
        thingName?: IotThingName;
        thingArn?: IotThingArn;
    }

    export interface IotCreateTopicRuleRequest {
        ruleName: IotRuleName;
        topicRulePayload: IotTopicRulePayload;
    }

    export type IotCreatedAtDate = number;
    export type IotDateType = number;
    export interface IotDeleteCertificateRequest {
        certificateId: IotCertificateId;
    }

    export interface IotDeleteConflictException {
        message?: IoterrorMessage;
    }

    export interface IotDeletePolicyRequest {
        policyName: IotPolicyName;
    }

    export interface IotDeletePolicyVersionRequest {
        policyName: IotPolicyName;
        policyVersionId: IotPolicyVersionId;
    }

    export interface IotDeleteThingRequest {
        thingName: IotThingName;
    }

    export interface IotDeleteThingResponse {
    }

    export interface IotDeleteTopicRuleRequest {
        ruleName: IotRuleName;
    }

    export type IotDeliveryStreamName = string;
    export interface IotDescribeCertificateRequest {
        certificateId: IotCertificateId;
    }

    export interface IotDescribeCertificateResponse {
        certificateDescription?: IotCertificateDescription;
    }

    export interface IotDescribeEndpointRequest {
    }

    export interface IotDescribeEndpointResponse {
        endpointAddress?: IotEndpointAddress;
    }

    export interface IotDescribeThingRequest {
        thingName: IotThingName;
    }

    export interface IotDescribeThingResponse {
        defaultClientId?: IotClientId;
        thingName?: IotThingName;
        attributes?: IotAttributes;
    }

    export type IotDescription = string;
    export interface IotDetachPrincipalPolicyRequest {
        policyName: IotPolicyName;
        principal: IotPrincipal;
    }

    export interface IotDetachThingPrincipalRequest {
        thingName: IotThingName;
        principal: IotPrincipal;
    }

    export interface IotDetachThingPrincipalResponse {
    }

    export interface IotDynamoDBAction {
        tableName: IotTableName;
        roleArn: IotAwsArn;
        hashKeyField: IotHashKeyField;
        hashKeyValue: IotHashKeyValue;
        rangeKeyField: IotRangeKeyField;
        rangeKeyValue: IotRangeKeyValue;
        payloadField?: IotPayloadField;
    }

    export type IotEndpointAddress = string;
    export interface IotFirehoseAction {
        roleArn: IotAwsArn;
        deliveryStreamName: IotDeliveryStreamName;
    }

    export type IotFunctionArn = string;
    export interface IotGetLoggingOptionsRequest {
    }

    export interface IotGetLoggingOptionsResponse {
        roleArn?: IotAwsArn;
        logLevel?: IotLogLevel;
    }

    export interface IotGetPolicyRequest {
        policyName: IotPolicyName;
    }

    export interface IotGetPolicyResponse {
        policyName?: IotPolicyName;
        policyArn?: IotPolicyArn;
        policyDocument?: IotPolicyDocument;
        defaultVersionId?: IotPolicyVersionId;
    }

    export interface IotGetPolicyVersionRequest {
        policyName: IotPolicyName;
        policyVersionId: IotPolicyVersionId;
    }

    export interface IotGetPolicyVersionResponse {
        policyArn?: IotPolicyArn;
        policyName?: IotPolicyName;
        policyDocument?: IotPolicyDocument;
        policyVersionId?: IotPolicyVersionId;
        isDefaultVersion?: IotIsDefaultVersion;
    }

    export interface IotGetTopicRuleRequest {
        ruleName: IotRuleName;
    }

    export interface IotGetTopicRuleResponse {
        rule?: IotTopicRule;
    }

    export type IotHashKeyField = string;
    export type IotHashKeyValue = string;
    export interface IotInternalException {
        message?: IoterrorMessage;
    }

    export interface IotInternalFailureException {
        message?: IoterrorMessage;
    }

    export interface IotInvalidRequestException {
        message?: IoterrorMessage;
    }

    export type IotIsDefaultVersion = boolean;
    export type IotIsDisabled = boolean;
    export type IotKey = string;
    export interface IotKeyPair {
        PublicKey?: IotPublicKey;
        PrivateKey?: IotPrivateKey;
    }

    export interface IotKinesisAction {
        roleArn: IotAwsArn;
        streamName: IotStreamName;
        partitionKey?: IotPartitionKey;
    }

    export interface IotLambdaAction {
        functionArn: IotFunctionArn;
    }

    export interface IotLimitExceededException {
        message?: IoterrorMessage;
    }

    export interface IotListCertificatesRequest {
        pageSize?: IotPageSize;
        marker?: IotMarker;
        ascendingOrder?: IotAscendingOrder;
    }

    export interface IotListCertificatesResponse {
        certificates?: IotCertificates;
        nextMarker?: IotMarker;
    }

    export interface IotListPoliciesRequest {
        marker?: IotMarker;
        pageSize?: IotPageSize;
        ascendingOrder?: IotAscendingOrder;
    }

    export interface IotListPoliciesResponse {
        policies?: IotPolicies;
        nextMarker?: IotMarker;
    }

    export interface IotListPolicyVersionsRequest {
        policyName: IotPolicyName;
    }

    export interface IotListPolicyVersionsResponse {
        policyVersions?: IotPolicyVersions;
    }

    export interface IotListPrincipalPoliciesRequest {
        principal: IotPrincipal;
        marker?: IotMarker;
        pageSize?: IotPageSize;
        ascendingOrder?: IotAscendingOrder;
    }

    export interface IotListPrincipalPoliciesResponse {
        policies?: IotPolicies;
        nextMarker?: IotMarker;
    }

    export interface IotListPrincipalThingsRequest {
        nextToken?: IotNextToken;
        maxResults?: IotMaxResults;
        principal: IotPrincipal;
    }

    export interface IotListPrincipalThingsResponse {
        things?: IotThingNameList;
        nextToken?: IotNextToken;
    }

    export interface IotListThingPrincipalsRequest {
        thingName: IotThingName;
    }

    export interface IotListThingPrincipalsResponse {
        principals?: IotPrincipals;
    }

    export interface IotListThingsRequest {
        nextToken?: IotNextToken;
        maxResults?: IotMaxResults;
        attributeName?: IotAttributeName;
        attributeValue?: IotAttributeValue;
    }

    export interface IotListThingsResponse {
        things?: IotThingAttributeList;
        nextToken?: IotNextToken;
    }

    export interface IotListTopicRulesRequest {
        topic?: IotTopic;
        maxResults?: IotMaxResults;
        nextToken?: IotNextToken;
        ruleDisabled?: IotIsDisabled;
    }

    export interface IotListTopicRulesResponse {
        rules?: IotTopicRuleList;
        nextToken?: IotNextToken;
    }

    export type IotLogLevel = string;
    export interface IotLoggingOptionsPayload {
        roleArn: IotAwsArn;
        logLevel?: IotLogLevel;
    }

    export interface IotMalformedPolicyException {
        message?: IoterrorMessage;
    }

    export type IotMarker = string;
    export type IotMaxResults = number;
    export type IotNextToken = string;
    export type IotPageSize = number;
    export type IotPartitionKey = string;
    export type IotPayloadField = string;
    export type IotPolicies = Array<IotPolicy>;
    export interface IotPolicy {
        policyName?: IotPolicyName;
        policyArn?: IotPolicyArn;
    }

    export type IotPolicyArn = string;
    export type IotPolicyDocument = string;
    export type IotPolicyName = string; // pattern: "[\w+=,.@-]+"
    export interface IotPolicyVersion {
        versionId?: IotPolicyVersionId;
        isDefaultVersion?: IotIsDefaultVersion;
        createDate?: IotDateType;
    }

    export type IotPolicyVersionId = string; // pattern: "[0-9]+"
    export type IotPolicyVersions = Array<IotPolicyVersion>;
    export type IotPrincipal = string;
    export type IotPrincipalArn = string;
    export type IotPrincipals = Array<IotPrincipalArn>;
    export type IotPrivateKey = string;
    export type IotPublicKey = string;
    export type IotQueueUrl = string;
    export type IotRangeKeyField = string;
    export type IotRangeKeyValue = string;
    export interface IotRejectCertificateTransferRequest {
        certificateId: IotCertificateId;
    }

    export interface IotReplaceTopicRuleRequest {
        ruleName: IotRuleName;
        topicRulePayload: IotTopicRulePayload;
    }

    export interface IotRepublishAction {
        roleArn: IotAwsArn;
        topic: IotTopicPattern;
    }

    export interface IotResourceAlreadyExistsException {
        message?: IoterrorMessage;
    }

    export interface IotResourceNotFoundException {
        message?: IoterrorMessage;
    }

    export type IotRuleName = string; // pattern: "^[a-zA-Z0-9_]+$"
    export interface IotS3Action {
        roleArn: IotAwsArn;
        bucketName: IotBucketName;
        key: IotKey;
    }

    export type IotSQL = string;
    export interface IotServiceUnavailableException {
        message?: IoterrorMessage;
    }

    export type IotSetAsActive = boolean;
    export type IotSetAsDefault = boolean;
    export interface IotSetDefaultPolicyVersionRequest {
        policyName: IotPolicyName;
        policyVersionId: IotPolicyVersionId;
    }

    export interface IotSetLoggingOptionsRequest {
        loggingOptionsPayload?: IotLoggingOptionsPayload;
    }

    export interface IotSnsAction {
        targetArn: IotAwsArn;
        roleArn: IotAwsArn;
    }

    export interface IotSqlParseException {
        message?: IoterrorMessage;
    }

    export interface IotSqsAction {
        roleArn: IotAwsArn;
        queueUrl: IotQueueUrl;
        useBase64?: IotUseBase64;
    }

    export type IotStreamName = string;
    export type IotTableName = string;
    export type IotThingArn = string;
    export interface IotThingAttribute {
        thingName?: IotThingName;
        attributes?: IotAttributes;
    }

    export type IotThingAttributeList = Array<IotThingAttribute>;
    export type IotThingName = string; // pattern: "[a-zA-Z0-9_-]+"
    export type IotThingNameList = Array<IotThingName>;
    export interface IotThrottlingException {
        message?: IoterrorMessage;
    }

    export type IotTopic = string;
    export type IotTopicPattern = string;
    export interface IotTopicRule {
        ruleName?: IotRuleName;
        sql?: IotSQL;
        description?: IotDescription;
        createdAt?: IotCreatedAtDate;
        actions?: IotActionList;
        ruleDisabled?: IotIsDisabled;
    }

    export type IotTopicRuleList = Array<IotTopicRuleListItem>;
    export interface IotTopicRuleListItem {
        ruleName?: IotRuleName;
        topicPattern?: IotTopicPattern;
        createdAt?: IotCreatedAtDate;
        ruleDisabled?: IotIsDisabled;
    }

    export interface IotTopicRulePayload {
        sql: IotSQL;
        description?: IotDescription;
        actions: IotActionList;
        ruleDisabled?: IotIsDisabled;
    }

    export interface IotTransferAlreadyCompletedException {
        message?: IoterrorMessage;
    }

    export interface IotTransferCertificateRequest {
        certificateId: IotCertificateId;
        targetAwsAccount: IotAwsAccountId;
    }

    export interface IotTransferCertificateResponse {
        transferredCertificateArn?: IotCertificateArn;
    }

    export interface IotTransferConflictException {
        message?: IoterrorMessage;
    }

    export interface IotUnauthorizedException {
        message?: IoterrorMessage;
    }

    export interface IotUpdateCertificateRequest {
        certificateId: IotCertificateId;
        newStatus: IotCertificateStatus;
    }

    export interface IotUpdateThingRequest {
        thingName: IotThingName;
        attributePayload: IotAttributePayload;
    }

    export interface IotUpdateThingResponse {
    }

    export type IotUseBase64 = boolean;
    export interface IotVersionsLimitExceededException {
        message?: IoterrorMessage;
    }

    export type IoterrorMessage = string;
}
