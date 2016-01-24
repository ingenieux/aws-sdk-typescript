// Type definitions for aws-sdk - Amazon Simple Email Service
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

///<reference path="./aws-sdk-common.d.ts" />

declare module "aws-sdk" {

    /*
     * apiVersion: 2010-12-01
     * endpointPrefix: email
     * serviceAbbreviation: Amazon SES
     * signatureVersion: v4
     * protocol: query
     */
    export class SES extends Service {
      constructor(options?: any);
      endpoint: Endpoint;
      cloneReceiptRuleSet(params: SES.CloneReceiptRuleSetRequest, callback?: (err: SES.RuleSetDoesNotExistException|SES.AlreadyExistsException|SES.LimitExceededException|any, data: SES.CloneReceiptRuleSetResponse|any) => void): Request;
      createReceiptFilter(params: SES.CreateReceiptFilterRequest, callback?: (err: SES.LimitExceededException|SES.AlreadyExistsException|any, data: SES.CreateReceiptFilterResponse|any) => void): Request;
      createReceiptRule(params: SES.CreateReceiptRuleRequest, callback?: (err: SES.InvalidSnsTopicException|SES.InvalidS3ConfigurationException|SES.InvalidLambdaFunctionException|SES.AlreadyExistsException|SES.RuleDoesNotExistException|SES.RuleSetDoesNotExistException|SES.LimitExceededException|any, data: SES.CreateReceiptRuleResponse|any) => void): Request;
      createReceiptRuleSet(params: SES.CreateReceiptRuleSetRequest, callback?: (err: SES.AlreadyExistsException|SES.LimitExceededException|any, data: SES.CreateReceiptRuleSetResponse|any) => void): Request;
      deleteIdentity(params: SES.DeleteIdentityRequest, callback?: (err: any, data: SES.DeleteIdentityResponse|any) => void): Request;
      deleteIdentityPolicy(params: SES.DeleteIdentityPolicyRequest, callback?: (err: any, data: SES.DeleteIdentityPolicyResponse|any) => void): Request;
      deleteReceiptFilter(params: SES.DeleteReceiptFilterRequest, callback?: (err: any, data: SES.DeleteReceiptFilterResponse|any) => void): Request;
      deleteReceiptRule(params: SES.DeleteReceiptRuleRequest, callback?: (err: SES.RuleSetDoesNotExistException|any, data: SES.DeleteReceiptRuleResponse|any) => void): Request;
      deleteReceiptRuleSet(params: SES.DeleteReceiptRuleSetRequest, callback?: (err: SES.CannotDeleteException|any, data: SES.DeleteReceiptRuleSetResponse|any) => void): Request;
      deleteVerifiedEmailAddress(params: SES.DeleteVerifiedEmailAddressRequest, callback?: (err: any, data: any) => void): Request;
      describeActiveReceiptRuleSet(params: SES.DescribeActiveReceiptRuleSetRequest, callback?: (err: any, data: SES.DescribeActiveReceiptRuleSetResponse|any) => void): Request;
      describeReceiptRule(params: SES.DescribeReceiptRuleRequest, callback?: (err: SES.RuleDoesNotExistException|SES.RuleSetDoesNotExistException|any, data: SES.DescribeReceiptRuleResponse|any) => void): Request;
      describeReceiptRuleSet(params: SES.DescribeReceiptRuleSetRequest, callback?: (err: SES.RuleSetDoesNotExistException|any, data: SES.DescribeReceiptRuleSetResponse|any) => void): Request;
      getIdentityDkimAttributes(params: SES.GetIdentityDkimAttributesRequest, callback?: (err: any, data: SES.GetIdentityDkimAttributesResponse|any) => void): Request;
      getIdentityNotificationAttributes(params: SES.GetIdentityNotificationAttributesRequest, callback?: (err: any, data: SES.GetIdentityNotificationAttributesResponse|any) => void): Request;
      getIdentityPolicies(params: SES.GetIdentityPoliciesRequest, callback?: (err: any, data: SES.GetIdentityPoliciesResponse|any) => void): Request;
      getIdentityVerificationAttributes(params: SES.GetIdentityVerificationAttributesRequest, callback?: (err: any, data: SES.GetIdentityVerificationAttributesResponse|any) => void): Request;
      getSendQuota(callback?: (err: any, data: SES.GetSendQuotaResponse|any) => void): Request;
      getSendStatistics(callback?: (err: any, data: SES.GetSendStatisticsResponse|any) => void): Request;
      listIdentities(params: SES.ListIdentitiesRequest, callback?: (err: any, data: SES.ListIdentitiesResponse|any) => void): Request;
      listIdentityPolicies(params: SES.ListIdentityPoliciesRequest, callback?: (err: any, data: SES.ListIdentityPoliciesResponse|any) => void): Request;
      listReceiptFilters(params: SES.ListReceiptFiltersRequest, callback?: (err: any, data: SES.ListReceiptFiltersResponse|any) => void): Request;
      listReceiptRuleSets(params: SES.ListReceiptRuleSetsRequest, callback?: (err: any, data: SES.ListReceiptRuleSetsResponse|any) => void): Request;
      listVerifiedEmailAddresses(callback?: (err: any, data: SES.ListVerifiedEmailAddressesResponse|any) => void): Request;
      putIdentityPolicy(params: SES.PutIdentityPolicyRequest, callback?: (err: SES.InvalidPolicyException|any, data: SES.PutIdentityPolicyResponse|any) => void): Request;
      reorderReceiptRuleSet(params: SES.ReorderReceiptRuleSetRequest, callback?: (err: SES.RuleSetDoesNotExistException|SES.RuleDoesNotExistException|any, data: SES.ReorderReceiptRuleSetResponse|any) => void): Request;
      sendBounce(params: SES.SendBounceRequest, callback?: (err: SES.MessageRejected|any, data: SES.SendBounceResponse|any) => void): Request;
      sendEmail(params: SES.SendEmailRequest, callback?: (err: SES.MessageRejected|any, data: SES.SendEmailResponse|any) => void): Request;
      sendRawEmail(params: SES.SendRawEmailRequest, callback?: (err: SES.MessageRejected|any, data: SES.SendRawEmailResponse|any) => void): Request;
      setActiveReceiptRuleSet(params: SES.SetActiveReceiptRuleSetRequest, callback?: (err: SES.RuleSetDoesNotExistException|any, data: SES.SetActiveReceiptRuleSetResponse|any) => void): Request;
      setIdentityDkimEnabled(params: SES.SetIdentityDkimEnabledRequest, callback?: (err: any, data: SES.SetIdentityDkimEnabledResponse|any) => void): Request;
      setIdentityFeedbackForwardingEnabled(params: SES.SetIdentityFeedbackForwardingEnabledRequest, callback?: (err: any, data: SES.SetIdentityFeedbackForwardingEnabledResponse|any) => void): Request;
      setIdentityNotificationTopic(params: SES.SetIdentityNotificationTopicRequest, callback?: (err: any, data: SES.SetIdentityNotificationTopicResponse|any) => void): Request;
      setReceiptRulePosition(params: SES.SetReceiptRulePositionRequest, callback?: (err: SES.RuleSetDoesNotExistException|SES.RuleDoesNotExistException|any, data: SES.SetReceiptRulePositionResponse|any) => void): Request;
      updateReceiptRule(params: SES.UpdateReceiptRuleRequest, callback?: (err: SES.InvalidSnsTopicException|SES.InvalidS3ConfigurationException|SES.InvalidLambdaFunctionException|SES.RuleSetDoesNotExistException|SES.RuleDoesNotExistException|SES.LimitExceededException|any, data: SES.UpdateReceiptRuleResponse|any) => void): Request;
      verifyDomainDkim(params: SES.VerifyDomainDkimRequest, callback?: (err: any, data: SES.VerifyDomainDkimResponse|any) => void): Request;
      verifyDomainIdentity(params: SES.VerifyDomainIdentityRequest, callback?: (err: any, data: SES.VerifyDomainIdentityResponse|any) => void): Request;
      verifyEmailAddress(params: SES.VerifyEmailAddressRequest, callback?: (err: any, data: any) => void): Request;
      verifyEmailIdentity(params: SES.VerifyEmailIdentityRequest, callback?: (err: any, data: SES.VerifyEmailIdentityResponse|any) => void): Request;

    }

    export module SES {
        export type Address = string;
        export type AddressList = Address[];
        export type AmazonResourceName = string;
        export type ArrivalDate = number;
        export type BounceMessage = string;
        export type BounceSmtpReplyCode = string;
        export type BounceStatusCode = string;
        export type BounceType = string;
        export type BouncedRecipientInfoList = BouncedRecipientInfo[];
        export type Charset = string;
        export type Cidr = string;
        export type Counter = number;
        export type DiagnosticCode = string;
        export type DkimAttributes = {[key:string]: IdentityDkimAttributes};
        export type Domain = string;
        export type DsnAction = string;
        export type DsnStatus = string;
        export type Enabled = boolean;
        export type Explanation = string;
        export type ExtensionFieldList = ExtensionField[];
        export type ExtensionFieldName = string;
        export type ExtensionFieldValue = string;
        export type HeaderName = string;
        export type HeaderValue = string;
        export type Identity = string;
        export type IdentityList = Identity[];
        export type IdentityType = string;
        export type InvocationType = string;
        export type LastAttemptDate = number;
        export type Max24HourSend = number;
        export type MaxItems = number;
        export type MaxSendRate = number;
        export type MessageData = string;
        export type MessageId = string;
        export type NextToken = string;
        export type NotificationAttributes = {[key:string]: IdentityNotificationAttributes};
        export type NotificationTopic = string;
        export type NotificationType = string;
        export type Policy = string;    // min: 1
        export type PolicyMap = {[key:string]: Policy};
        export type PolicyName = string;    // max: 64, min: 1
        export type PolicyNameList = PolicyName[];
        export type RawMessageData = any;    // type: blob
        export type ReceiptActionsList = ReceiptAction[];
        export type ReceiptFilterList = ReceiptFilter[];
        export type ReceiptFilterName = string;
        export type ReceiptFilterPolicy = string;
        export type ReceiptRuleName = string;
        export type ReceiptRuleNamesList = ReceiptRuleName[];
        export type ReceiptRuleSetName = string;
        export type ReceiptRuleSetsLists = ReceiptRuleSetMetadata[];
        export type ReceiptRulesList = ReceiptRule[];
        export type Recipient = string;
        export type RecipientsList = Recipient[];
        export type RemoteMta = string;
        export type ReportingMta = string;
        export type RuleOrRuleSetName = string;
        export type S3BucketName = string;
        export type S3KeyPrefix = string;
        export type SendDataPointList = SendDataPoint[];
        export type SentLast24Hours = number;
        export type StopScope = string;
        export type Timestamp = number;
        export type TlsPolicy = string;
        export type VerificationAttributes = {[key:string]: IdentityVerificationAttributes};
        export type VerificationStatus = string;
        export type VerificationToken = string;
        export type VerificationTokenList = VerificationToken[];

        export interface AddHeaderAction {
            HeaderName: HeaderName;
            HeaderValue: HeaderValue;
        }
        export interface AlreadyExistsException {
            Name?: RuleOrRuleSetName;
        }
        export interface Body {
            Text?: Content;
            Html?: Content;
        }
        export interface BounceAction {
            TopicArn?: AmazonResourceName;
            SmtpReplyCode: BounceSmtpReplyCode;
            StatusCode?: BounceStatusCode;
            Message: BounceMessage;
            Sender: Address;
        }
        export interface BouncedRecipientInfo {
            Recipient: Address;
            RecipientArn?: AmazonResourceName;
            BounceType?: BounceType;
            RecipientDsnFields?: RecipientDsnFields;
        }
        export interface CannotDeleteException {
            Name?: RuleOrRuleSetName;
        }
        export interface CloneReceiptRuleSetRequest {
            RuleSetName: ReceiptRuleSetName;
            OriginalRuleSetName: ReceiptRuleSetName;
        }
        export interface CloneReceiptRuleSetResponse {
        }
        export interface Content {
            Data: MessageData;
            Charset?: Charset;
        }
        export interface CreateReceiptFilterRequest {
            Filter: ReceiptFilter;
        }
        export interface CreateReceiptFilterResponse {
        }
        export interface CreateReceiptRuleRequest {
            RuleSetName: ReceiptRuleSetName;
            After?: ReceiptRuleName;
            Rule: ReceiptRule;
        }
        export interface CreateReceiptRuleResponse {
        }
        export interface CreateReceiptRuleSetRequest {
            RuleSetName: ReceiptRuleSetName;
        }
        export interface CreateReceiptRuleSetResponse {
        }
        export interface DeleteIdentityPolicyRequest {
            Identity: Identity;
            PolicyName: PolicyName;
        }
        export interface DeleteIdentityPolicyResponse {
        }
        export interface DeleteIdentityRequest {
            Identity: Identity;
        }
        export interface DeleteIdentityResponse {
        }
        export interface DeleteReceiptFilterRequest {
            FilterName: ReceiptFilterName;
        }
        export interface DeleteReceiptFilterResponse {
        }
        export interface DeleteReceiptRuleRequest {
            RuleSetName: ReceiptRuleSetName;
            RuleName: ReceiptRuleName;
        }
        export interface DeleteReceiptRuleResponse {
        }
        export interface DeleteReceiptRuleSetRequest {
            RuleSetName: ReceiptRuleSetName;
        }
        export interface DeleteReceiptRuleSetResponse {
        }
        export interface DeleteVerifiedEmailAddressRequest {
            EmailAddress: Address;
        }
        export interface DescribeActiveReceiptRuleSetRequest {
        }
        export interface DescribeActiveReceiptRuleSetResponse {
            Metadata?: ReceiptRuleSetMetadata;
            Rules?: ReceiptRulesList;
        }
        export interface DescribeReceiptRuleRequest {
            RuleSetName: ReceiptRuleSetName;
            RuleName: ReceiptRuleName;
        }
        export interface DescribeReceiptRuleResponse {
            Rule?: ReceiptRule;
        }
        export interface DescribeReceiptRuleSetRequest {
            RuleSetName: ReceiptRuleSetName;
        }
        export interface DescribeReceiptRuleSetResponse {
            Metadata?: ReceiptRuleSetMetadata;
            Rules?: ReceiptRulesList;
        }
        export interface Destination {
            ToAddresses?: AddressList;
            CcAddresses?: AddressList;
            BccAddresses?: AddressList;
        }
        export interface ExtensionField {
            Name: ExtensionFieldName;
            Value: ExtensionFieldValue;
        }
        export interface GetIdentityDkimAttributesRequest {
            Identities: IdentityList;
        }
        export interface GetIdentityDkimAttributesResponse {
            DkimAttributes: DkimAttributes;
        }
        export interface GetIdentityNotificationAttributesRequest {
            Identities: IdentityList;
        }
        export interface GetIdentityNotificationAttributesResponse {
            NotificationAttributes: NotificationAttributes;
        }
        export interface GetIdentityPoliciesRequest {
            Identity: Identity;
            PolicyNames: PolicyNameList;
        }
        export interface GetIdentityPoliciesResponse {
            Policies: PolicyMap;
        }
        export interface GetIdentityVerificationAttributesRequest {
            Identities: IdentityList;
        }
        export interface GetIdentityVerificationAttributesResponse {
            VerificationAttributes: VerificationAttributes;
        }
        export interface GetSendQuotaResponse {
            Max24HourSend?: Max24HourSend;
            MaxSendRate?: MaxSendRate;
            SentLast24Hours?: SentLast24Hours;
        }
        export interface GetSendStatisticsResponse {
            SendDataPoints?: SendDataPointList;
        }
        export interface IdentityDkimAttributes {
            DkimEnabled: Enabled;
            DkimVerificationStatus: VerificationStatus;
            DkimTokens?: VerificationTokenList;
        }
        export interface IdentityNotificationAttributes {
            BounceTopic: NotificationTopic;
            ComplaintTopic: NotificationTopic;
            DeliveryTopic: NotificationTopic;
            ForwardingEnabled: Enabled;
        }
        export interface IdentityVerificationAttributes {
            VerificationStatus: VerificationStatus;
            VerificationToken?: VerificationToken;
        }
        export interface InvalidLambdaFunctionException {
            FunctionArn?: AmazonResourceName;
        }
        export interface InvalidPolicyException {
        }
        export interface InvalidS3ConfigurationException {
            Bucket?: S3BucketName;
        }
        export interface InvalidSnsTopicException {
            Topic?: AmazonResourceName;
        }
        export interface LambdaAction {
            TopicArn?: AmazonResourceName;
            FunctionArn: AmazonResourceName;
            InvocationType?: InvocationType;
        }
        export interface LimitExceededException {
        }
        export interface ListIdentitiesRequest {
            IdentityType?: IdentityType;
            NextToken?: NextToken;
            MaxItems?: MaxItems;
        }
        export interface ListIdentitiesResponse {
            Identities: IdentityList;
            NextToken?: NextToken;
        }
        export interface ListIdentityPoliciesRequest {
            Identity: Identity;
        }
        export interface ListIdentityPoliciesResponse {
            PolicyNames: PolicyNameList;
        }
        export interface ListReceiptFiltersRequest {
        }
        export interface ListReceiptFiltersResponse {
            Filters?: ReceiptFilterList;
        }
        export interface ListReceiptRuleSetsRequest {
            NextToken?: NextToken;
        }
        export interface ListReceiptRuleSetsResponse {
            RuleSets?: ReceiptRuleSetsLists;
            NextToken?: NextToken;
        }
        export interface ListVerifiedEmailAddressesResponse {
            VerifiedEmailAddresses?: AddressList;
        }
        export interface Message {
            Subject: Content;
            Body: Body;
        }
        export interface MessageDsn {
            ReportingMta: ReportingMta;
            ArrivalDate?: ArrivalDate;
            ExtensionFields?: ExtensionFieldList;
        }
        export interface MessageRejected {
        }
        export interface PutIdentityPolicyRequest {
            Identity: Identity;
            PolicyName: PolicyName;
            Policy: Policy;
        }
        export interface PutIdentityPolicyResponse {
        }
        export interface RawMessage {
            Data: RawMessageData;
        }
        export interface ReceiptAction {
            S3Action?: S3Action;
            BounceAction?: BounceAction;
            WorkmailAction?: WorkmailAction;
            LambdaAction?: LambdaAction;
            StopAction?: StopAction;
            AddHeaderAction?: AddHeaderAction;
            SNSAction?: SNSAction;
        }
        export interface ReceiptFilter {
            Name: ReceiptFilterName;
            IpFilter: ReceiptIpFilter;
        }
        export interface ReceiptIpFilter {
            Policy: ReceiptFilterPolicy;
            Cidr: Cidr;
        }
        export interface ReceiptRule {
            Name: ReceiptRuleName;
            Enabled?: Enabled;
            TlsPolicy?: TlsPolicy;
            Recipients?: RecipientsList;
            Actions?: ReceiptActionsList;
            ScanEnabled?: Enabled;
        }
        export interface ReceiptRuleSetMetadata {
            Name?: ReceiptRuleSetName;
            CreatedTimestamp?: Timestamp;
        }
        export interface RecipientDsnFields {
            FinalRecipient?: Address;
            Action: DsnAction;
            RemoteMta?: RemoteMta;
            Status: DsnStatus;
            DiagnosticCode?: DiagnosticCode;
            LastAttemptDate?: LastAttemptDate;
            ExtensionFields?: ExtensionFieldList;
        }
        export interface ReorderReceiptRuleSetRequest {
            RuleSetName: ReceiptRuleSetName;
            RuleNames: ReceiptRuleNamesList;
        }
        export interface ReorderReceiptRuleSetResponse {
        }
        export interface RuleDoesNotExistException {
            Name?: RuleOrRuleSetName;
        }
        export interface RuleSetDoesNotExistException {
            Name?: RuleOrRuleSetName;
        }
        export interface S3Action {
            TopicArn?: AmazonResourceName;
            BucketName: S3BucketName;
            ObjectKeyPrefix?: S3KeyPrefix;
            KmsKeyArn?: AmazonResourceName;
        }
        export interface SNSAction {
            TopicArn: AmazonResourceName;
        }
        export interface SendBounceRequest {
            OriginalMessageId: MessageId;
            BounceSender: Address;
            Explanation?: Explanation;
            MessageDsn?: MessageDsn;
            BouncedRecipientInfoList: BouncedRecipientInfoList;
            BounceSenderArn?: AmazonResourceName;
        }
        export interface SendBounceResponse {
            MessageId?: MessageId;
        }
        export interface SendDataPoint {
            Timestamp?: Timestamp;
            DeliveryAttempts?: Counter;
            Bounces?: Counter;
            Complaints?: Counter;
            Rejects?: Counter;
        }
        export interface SendEmailRequest {
            Source: Address;
            Destination: Destination;
            Message: Message;
            ReplyToAddresses?: AddressList;
            ReturnPath?: Address;
            SourceArn?: AmazonResourceName;
            ReturnPathArn?: AmazonResourceName;
        }
        export interface SendEmailResponse {
            MessageId: MessageId;
        }
        export interface SendRawEmailRequest {
            Source?: Address;
            Destinations?: AddressList;
            RawMessage: RawMessage;
            FromArn?: AmazonResourceName;
            SourceArn?: AmazonResourceName;
            ReturnPathArn?: AmazonResourceName;
        }
        export interface SendRawEmailResponse {
            MessageId: MessageId;
        }
        export interface SetActiveReceiptRuleSetRequest {
            RuleSetName?: ReceiptRuleSetName;
        }
        export interface SetActiveReceiptRuleSetResponse {
        }
        export interface SetIdentityDkimEnabledRequest {
            Identity: Identity;
            DkimEnabled: Enabled;
        }
        export interface SetIdentityDkimEnabledResponse {
        }
        export interface SetIdentityFeedbackForwardingEnabledRequest {
            Identity: Identity;
            ForwardingEnabled: Enabled;
        }
        export interface SetIdentityFeedbackForwardingEnabledResponse {
        }
        export interface SetIdentityNotificationTopicRequest {
            Identity: Identity;
            NotificationType: NotificationType;
            SnsTopic?: NotificationTopic;
        }
        export interface SetIdentityNotificationTopicResponse {
        }
        export interface SetReceiptRulePositionRequest {
            RuleSetName: ReceiptRuleSetName;
            RuleName: ReceiptRuleName;
            After?: ReceiptRuleName;
        }
        export interface SetReceiptRulePositionResponse {
        }
        export interface StopAction {
            Scope: StopScope;
            TopicArn?: AmazonResourceName;
        }
        export interface UpdateReceiptRuleRequest {
            RuleSetName: ReceiptRuleSetName;
            Rule: ReceiptRule;
        }
        export interface UpdateReceiptRuleResponse {
        }
        export interface VerifyDomainDkimRequest {
            Domain: Domain;
        }
        export interface VerifyDomainDkimResponse {
            DkimTokens: VerificationTokenList;
        }
        export interface VerifyDomainIdentityRequest {
            Domain: Domain;
        }
        export interface VerifyDomainIdentityResponse {
            VerificationToken: VerificationToken;
        }
        export interface VerifyEmailAddressRequest {
            EmailAddress: Address;
        }
        export interface VerifyEmailIdentityRequest {
            EmailAddress: Address;
        }
        export interface VerifyEmailIdentityResponse {
        }
        export interface WorkmailAction {
            TopicArn?: AmazonResourceName;
            OrganizationArn: AmazonResourceName;
        }

    }
}
