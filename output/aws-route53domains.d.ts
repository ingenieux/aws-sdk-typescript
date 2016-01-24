// Type definitions for aws-sdk - Amazon Route 53 Domains
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

///<reference path="./aws-sdk-common.d.ts" />

declare module "aws-sdk" {

    /*
     * apiVersion: 2014-05-15
     * endpointPrefix: route53domains
     * serviceAbbreviation: 
     * signatureVersion: v4
     * protocol: json
     */
    export class Route53Domains extends Service {
      constructor(options?: any);
      endpoint: Endpoint;
      checkDomainAvailability(params: Route53Domains.CheckDomainAvailabilityRequest, callback?: (err: Route53Domains.InvalidInput|Route53Domains.UnsupportedTLD|any, data: Route53Domains.CheckDomainAvailabilityResponse|any) => void): Request;
      deleteTagsForDomain(params: Route53Domains.DeleteTagsForDomainRequest, callback?: (err: Route53Domains.InvalidInput|Route53Domains.OperationLimitExceeded|Route53Domains.UnsupportedTLD|any, data: Route53Domains.DeleteTagsForDomainResponse|any) => void): Request;
      disableDomainAutoRenew(params: Route53Domains.DisableDomainAutoRenewRequest, callback?: (err: Route53Domains.InvalidInput|Route53Domains.UnsupportedTLD|any, data: Route53Domains.DisableDomainAutoRenewResponse|any) => void): Request;
      disableDomainTransferLock(params: Route53Domains.DisableDomainTransferLockRequest, callback?: (err: Route53Domains.InvalidInput|Route53Domains.DuplicateRequest|Route53Domains.TLDRulesViolation|Route53Domains.OperationLimitExceeded|Route53Domains.UnsupportedTLD|any, data: Route53Domains.DisableDomainTransferLockResponse|any) => void): Request;
      enableDomainAutoRenew(params: Route53Domains.EnableDomainAutoRenewRequest, callback?: (err: Route53Domains.InvalidInput|Route53Domains.UnsupportedTLD|any, data: Route53Domains.EnableDomainAutoRenewResponse|any) => void): Request;
      enableDomainTransferLock(params: Route53Domains.EnableDomainTransferLockRequest, callback?: (err: Route53Domains.InvalidInput|Route53Domains.DuplicateRequest|Route53Domains.TLDRulesViolation|Route53Domains.OperationLimitExceeded|Route53Domains.UnsupportedTLD|any, data: Route53Domains.EnableDomainTransferLockResponse|any) => void): Request;
      getDomainDetail(params: Route53Domains.GetDomainDetailRequest, callback?: (err: Route53Domains.InvalidInput|Route53Domains.UnsupportedTLD|any, data: Route53Domains.GetDomainDetailResponse|any) => void): Request;
      getOperationDetail(params: Route53Domains.GetOperationDetailRequest, callback?: (err: Route53Domains.InvalidInput|any, data: Route53Domains.GetOperationDetailResponse|any) => void): Request;
      listDomains(params: Route53Domains.ListDomainsRequest, callback?: (err: Route53Domains.InvalidInput|any, data: Route53Domains.ListDomainsResponse|any) => void): Request;
      listOperations(params: Route53Domains.ListOperationsRequest, callback?: (err: Route53Domains.InvalidInput|any, data: Route53Domains.ListOperationsResponse|any) => void): Request;
      listTagsForDomain(params: Route53Domains.ListTagsForDomainRequest, callback?: (err: Route53Domains.InvalidInput|Route53Domains.OperationLimitExceeded|Route53Domains.UnsupportedTLD|any, data: Route53Domains.ListTagsForDomainResponse|any) => void): Request;
      registerDomain(params: Route53Domains.RegisterDomainRequest, callback?: (err: Route53Domains.InvalidInput|Route53Domains.UnsupportedTLD|Route53Domains.DuplicateRequest|Route53Domains.TLDRulesViolation|Route53Domains.DomainLimitExceeded|Route53Domains.OperationLimitExceeded|any, data: Route53Domains.RegisterDomainResponse|any) => void): Request;
      retrieveDomainAuthCode(params: Route53Domains.RetrieveDomainAuthCodeRequest, callback?: (err: Route53Domains.InvalidInput|Route53Domains.UnsupportedTLD|any, data: Route53Domains.RetrieveDomainAuthCodeResponse|any) => void): Request;
      transferDomain(params: Route53Domains.TransferDomainRequest, callback?: (err: Route53Domains.InvalidInput|Route53Domains.UnsupportedTLD|Route53Domains.DuplicateRequest|Route53Domains.TLDRulesViolation|Route53Domains.DomainLimitExceeded|Route53Domains.OperationLimitExceeded|any, data: Route53Domains.TransferDomainResponse|any) => void): Request;
      updateDomainContact(params: Route53Domains.UpdateDomainContactRequest, callback?: (err: Route53Domains.InvalidInput|Route53Domains.DuplicateRequest|Route53Domains.TLDRulesViolation|Route53Domains.OperationLimitExceeded|Route53Domains.UnsupportedTLD|any, data: Route53Domains.UpdateDomainContactResponse|any) => void): Request;
      updateDomainContactPrivacy(params: Route53Domains.UpdateDomainContactPrivacyRequest, callback?: (err: Route53Domains.InvalidInput|Route53Domains.DuplicateRequest|Route53Domains.TLDRulesViolation|Route53Domains.OperationLimitExceeded|Route53Domains.UnsupportedTLD|any, data: Route53Domains.UpdateDomainContactPrivacyResponse|any) => void): Request;
      updateDomainNameservers(params: Route53Domains.UpdateDomainNameserversRequest, callback?: (err: Route53Domains.InvalidInput|Route53Domains.DuplicateRequest|Route53Domains.TLDRulesViolation|Route53Domains.OperationLimitExceeded|Route53Domains.UnsupportedTLD|any, data: Route53Domains.UpdateDomainNameserversResponse|any) => void): Request;
      updateTagsForDomain(params: Route53Domains.UpdateTagsForDomainRequest, callback?: (err: Route53Domains.InvalidInput|Route53Domains.OperationLimitExceeded|Route53Domains.UnsupportedTLD|any, data: Route53Domains.UpdateTagsForDomainResponse|any) => void): Request;

    }

    export module Route53Domains {
        export type AddressLine = string;    // max: 255
        export type Boolean = boolean;
        export type City = string;    // max: 255
        export type ContactName = string;    // max: 255
        export type ContactNumber = string;    // max: 30
        export type ContactType = string;
        export type CountryCode = string;
        export type DNSSec = string;
        export type DomainAuthCode = string;    // max: 1024
        export type DomainAvailability = string;
        export type DomainName = string;    // pattern: &quot;[a-zA-Z0-9_\-.]*&quot;, max: 255
        export type DomainStatus = string;
        export type DomainStatusList = DomainStatus[];
        export type DomainSummaryList = DomainSummary[];
        export type DurationInYears = number;    // max: 10, min: 1
        export type Email = string;    // max: 254
        export type ErrorMessage = string;
        export type ExtraParamList = ExtraParam[];
        export type ExtraParamName = string;
        export type ExtraParamValue = string;    // max: 2048
        export type FIAuthKey = string;
        export type GlueIp = string;    // max: 45
        export type GlueIpList = GlueIp[];
        export type HostName = string;    // pattern: &quot;[a-zA-Z0-9_\-.]*&quot;, max: 255
        export type LangCode = string;    // max: 3
        export type NameserverList = Nameserver[];
        export type OperationId = string;    // max: 255
        export type OperationStatus = string;
        export type OperationSummaryList = OperationSummary[];
        export type OperationType = string;
        export type PageMarker = string;    // max: 4096
        export type PageMaxItems = number;    // max: 100
        export type RegistrarName = string;
        export type RegistrarUrl = string;
        export type RegistrarWhoIsServer = string;
        export type RegistryDomainId = string;
        export type Reseller = string;
        export type State = string;    // max: 255
        export type TagKey = string;
        export type TagKeyList = TagKey[];
        export type TagList = Tag[];
        export type TagValue = string;
        export type Timestamp = number;
        export type ZipCode = string;    // max: 255

        export interface CheckDomainAvailabilityRequest {
            DomainName: DomainName;
            IdnLangCode?: LangCode;
        }
        export interface CheckDomainAvailabilityResponse {
            Availability: DomainAvailability;
        }
        export interface ContactDetail {
            FirstName?: ContactName;
            LastName?: ContactName;
            ContactType?: ContactType;
            OrganizationName?: ContactName;
            AddressLine1?: AddressLine;
            AddressLine2?: AddressLine;
            City?: City;
            State?: State;
            CountryCode?: CountryCode;
            ZipCode?: ZipCode;
            PhoneNumber?: ContactNumber;
            Email?: Email;
            Fax?: ContactNumber;
            ExtraParams?: ExtraParamList;
        }
        export interface DeleteTagsForDomainRequest {
            DomainName: DomainName;
            TagsToDelete: TagKeyList;
        }
        export interface DeleteTagsForDomainResponse {
        }
        export interface DisableDomainAutoRenewRequest {
            DomainName: DomainName;
        }
        export interface DisableDomainAutoRenewResponse {
        }
        export interface DisableDomainTransferLockRequest {
            DomainName: DomainName;
        }
        export interface DisableDomainTransferLockResponse {
            OperationId: OperationId;
        }
        export interface DomainLimitExceeded {
            message?: ErrorMessage;
        }
        export interface DomainSummary {
            DomainName: DomainName;
            AutoRenew?: Boolean;
            TransferLock?: Boolean;
            Expiry?: Timestamp;
        }
        export interface DuplicateRequest {
            message?: ErrorMessage;
        }
        export interface EnableDomainAutoRenewRequest {
            DomainName: DomainName;
        }
        export interface EnableDomainAutoRenewResponse {
        }
        export interface EnableDomainTransferLockRequest {
            DomainName: DomainName;
        }
        export interface EnableDomainTransferLockResponse {
            OperationId: OperationId;
        }
        export interface ExtraParam {
            Name: ExtraParamName;
            Value: ExtraParamValue;
        }
        export interface GetDomainDetailRequest {
            DomainName: DomainName;
        }
        export interface GetDomainDetailResponse {
            DomainName: DomainName;
            Nameservers: NameserverList;
            AutoRenew?: Boolean;
            AdminContact: ContactDetail;
            RegistrantContact: ContactDetail;
            TechContact: ContactDetail;
            AdminPrivacy?: Boolean;
            RegistrantPrivacy?: Boolean;
            TechPrivacy?: Boolean;
            RegistrarName?: RegistrarName;
            WhoIsServer?: RegistrarWhoIsServer;
            RegistrarUrl?: RegistrarUrl;
            AbuseContactEmail?: Email;
            AbuseContactPhone?: ContactNumber;
            RegistryDomainId?: RegistryDomainId;
            CreationDate?: Timestamp;
            UpdatedDate?: Timestamp;
            ExpirationDate?: Timestamp;
            Reseller?: Reseller;
            DnsSec?: DNSSec;
            StatusList?: DomainStatusList;
        }
        export interface GetOperationDetailRequest {
            OperationId: OperationId;
        }
        export interface GetOperationDetailResponse {
            OperationId?: OperationId;
            Status?: OperationStatus;
            Message?: ErrorMessage;
            DomainName?: DomainName;
            Type?: OperationType;
            SubmittedDate?: Timestamp;
        }
        export interface InvalidInput {
            message?: ErrorMessage;
        }
        export interface ListDomainsRequest {
            Marker?: PageMarker;
            MaxItems?: PageMaxItems;
        }
        export interface ListDomainsResponse {
            Domains: DomainSummaryList;
            NextPageMarker?: PageMarker;
        }
        export interface ListOperationsRequest {
            Marker?: PageMarker;
            MaxItems?: PageMaxItems;
        }
        export interface ListOperationsResponse {
            Operations: OperationSummaryList;
            NextPageMarker?: PageMarker;
        }
        export interface ListTagsForDomainRequest {
            DomainName: DomainName;
        }
        export interface ListTagsForDomainResponse {
            TagList: TagList;
        }
        export interface Nameserver {
            Name: HostName;
            GlueIps?: GlueIpList;
        }
        export interface OperationLimitExceeded {
            message?: ErrorMessage;
        }
        export interface OperationSummary {
            OperationId: OperationId;
            Status: OperationStatus;
            Type: OperationType;
            SubmittedDate: Timestamp;
        }
        export interface RegisterDomainRequest {
            DomainName: DomainName;
            IdnLangCode?: LangCode;
            DurationInYears: DurationInYears;
            AutoRenew?: Boolean;
            AdminContact: ContactDetail;
            RegistrantContact: ContactDetail;
            TechContact: ContactDetail;
            PrivacyProtectAdminContact?: Boolean;
            PrivacyProtectRegistrantContact?: Boolean;
            PrivacyProtectTechContact?: Boolean;
        }
        export interface RegisterDomainResponse {
            OperationId: OperationId;
        }
        export interface RetrieveDomainAuthCodeRequest {
            DomainName: DomainName;
        }
        export interface RetrieveDomainAuthCodeResponse {
            AuthCode: DomainAuthCode;
        }
        export interface TLDRulesViolation {
            message?: ErrorMessage;
        }
        export interface Tag {
            Key?: TagKey;
            Value?: TagValue;
        }
        export interface TransferDomainRequest {
            DomainName: DomainName;
            IdnLangCode?: LangCode;
            DurationInYears: DurationInYears;
            Nameservers?: NameserverList;
            AuthCode?: DomainAuthCode;
            AutoRenew?: Boolean;
            AdminContact: ContactDetail;
            RegistrantContact: ContactDetail;
            TechContact: ContactDetail;
            PrivacyProtectAdminContact?: Boolean;
            PrivacyProtectRegistrantContact?: Boolean;
            PrivacyProtectTechContact?: Boolean;
        }
        export interface TransferDomainResponse {
            OperationId: OperationId;
        }
        export interface UnsupportedTLD {
            message?: ErrorMessage;
        }
        export interface UpdateDomainContactPrivacyRequest {
            DomainName: DomainName;
            AdminPrivacy?: Boolean;
            RegistrantPrivacy?: Boolean;
            TechPrivacy?: Boolean;
        }
        export interface UpdateDomainContactPrivacyResponse {
            OperationId: OperationId;
        }
        export interface UpdateDomainContactRequest {
            DomainName: DomainName;
            AdminContact?: ContactDetail;
            RegistrantContact?: ContactDetail;
            TechContact?: ContactDetail;
        }
        export interface UpdateDomainContactResponse {
            OperationId: OperationId;
        }
        export interface UpdateDomainNameserversRequest {
            DomainName: DomainName;
            FIAuthKey?: FIAuthKey;
            Nameservers: NameserverList;
        }
        export interface UpdateDomainNameserversResponse {
            OperationId: OperationId;
        }
        export interface UpdateTagsForDomainRequest {
            DomainName: DomainName;
            TagsToUpdate?: TagList;
        }
        export interface UpdateTagsForDomainResponse {
        }

    }
}
