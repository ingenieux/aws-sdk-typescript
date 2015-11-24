// DO NOT EDIT!
//

///<reference path="./aws-sdk-common.d.ts" />
declare module "aws-sdk" {
    export class Route53Domains {
      constructor(options?: any);
      checkDomainAvailability(params: Route53DomainsCheckDomainAvailabilityRequest, callback: (err: Route53DomainsInvalidInput|Route53DomainsUnsupportedTLD|any, data: Route53DomainsCheckDomainAvailabilityResponse|any) => void): void;
      deleteTagsForDomain(params: Route53DomainsDeleteTagsForDomainRequest, callback: (err: Route53DomainsInvalidInput|Route53DomainsOperationLimitExceeded|Route53DomainsUnsupportedTLD|any, data: Route53DomainsDeleteTagsForDomainResponse|any) => void): void;
      disableDomainAutoRenew(params: Route53DomainsDisableDomainAutoRenewRequest, callback: (err: Route53DomainsInvalidInput|Route53DomainsUnsupportedTLD|any, data: Route53DomainsDisableDomainAutoRenewResponse|any) => void): void;
      disableDomainTransferLock(params: Route53DomainsDisableDomainTransferLockRequest, callback: (err: Route53DomainsInvalidInput|Route53DomainsDuplicateRequest|Route53DomainsTLDRulesViolation|Route53DomainsOperationLimitExceeded|Route53DomainsUnsupportedTLD|any, data: Route53DomainsDisableDomainTransferLockResponse|any) => void): void;
      enableDomainAutoRenew(params: Route53DomainsEnableDomainAutoRenewRequest, callback: (err: Route53DomainsInvalidInput|Route53DomainsUnsupportedTLD|any, data: Route53DomainsEnableDomainAutoRenewResponse|any) => void): void;
      enableDomainTransferLock(params: Route53DomainsEnableDomainTransferLockRequest, callback: (err: Route53DomainsInvalidInput|Route53DomainsDuplicateRequest|Route53DomainsTLDRulesViolation|Route53DomainsOperationLimitExceeded|Route53DomainsUnsupportedTLD|any, data: Route53DomainsEnableDomainTransferLockResponse|any) => void): void;
      getDomainDetail(params: Route53DomainsGetDomainDetailRequest, callback: (err: Route53DomainsInvalidInput|Route53DomainsUnsupportedTLD|any, data: Route53DomainsGetDomainDetailResponse|any) => void): void;
      getOperationDetail(params: Route53DomainsGetOperationDetailRequest, callback: (err: Route53DomainsInvalidInput|any, data: Route53DomainsGetOperationDetailResponse|any) => void): void;
      listDomains(params: Route53DomainsListDomainsRequest, callback: (err: Route53DomainsInvalidInput|any, data: Route53DomainsListDomainsResponse|any) => void): void;
      listOperations(params: Route53DomainsListOperationsRequest, callback: (err: Route53DomainsInvalidInput|any, data: Route53DomainsListOperationsResponse|any) => void): void;
      listTagsForDomain(params: Route53DomainsListTagsForDomainRequest, callback: (err: Route53DomainsInvalidInput|Route53DomainsOperationLimitExceeded|Route53DomainsUnsupportedTLD|any, data: Route53DomainsListTagsForDomainResponse|any) => void): void;
      registerDomain(params: Route53DomainsRegisterDomainRequest, callback: (err: Route53DomainsInvalidInput|Route53DomainsUnsupportedTLD|Route53DomainsDuplicateRequest|Route53DomainsTLDRulesViolation|Route53DomainsDomainLimitExceeded|Route53DomainsOperationLimitExceeded|any, data: Route53DomainsRegisterDomainResponse|any) => void): void;
      retrieveDomainAuthCode(params: Route53DomainsRetrieveDomainAuthCodeRequest, callback: (err: Route53DomainsInvalidInput|Route53DomainsUnsupportedTLD|any, data: Route53DomainsRetrieveDomainAuthCodeResponse|any) => void): void;
      transferDomain(params: Route53DomainsTransferDomainRequest, callback: (err: Route53DomainsInvalidInput|Route53DomainsUnsupportedTLD|Route53DomainsDuplicateRequest|Route53DomainsTLDRulesViolation|Route53DomainsDomainLimitExceeded|Route53DomainsOperationLimitExceeded|any, data: Route53DomainsTransferDomainResponse|any) => void): void;
      updateDomainContact(params: Route53DomainsUpdateDomainContactRequest, callback: (err: Route53DomainsInvalidInput|Route53DomainsDuplicateRequest|Route53DomainsTLDRulesViolation|Route53DomainsOperationLimitExceeded|Route53DomainsUnsupportedTLD|any, data: Route53DomainsUpdateDomainContactResponse|any) => void): void;
      updateDomainContactPrivacy(params: Route53DomainsUpdateDomainContactPrivacyRequest, callback: (err: Route53DomainsInvalidInput|Route53DomainsDuplicateRequest|Route53DomainsTLDRulesViolation|Route53DomainsOperationLimitExceeded|Route53DomainsUnsupportedTLD|any, data: Route53DomainsUpdateDomainContactPrivacyResponse|any) => void): void;
      updateDomainNameservers(params: Route53DomainsUpdateDomainNameserversRequest, callback: (err: Route53DomainsInvalidInput|Route53DomainsDuplicateRequest|Route53DomainsTLDRulesViolation|Route53DomainsOperationLimitExceeded|Route53DomainsUnsupportedTLD|any, data: Route53DomainsUpdateDomainNameserversResponse|any) => void): void;
      updateTagsForDomain(params: Route53DomainsUpdateTagsForDomainRequest, callback: (err: Route53DomainsInvalidInput|Route53DomainsOperationLimitExceeded|Route53DomainsUnsupportedTLD|any, data: Route53DomainsUpdateTagsForDomainResponse|any) => void): void;
    }

    export type Route53DomainsAddressLine = string;
    export type Route53DomainsBoolean = boolean;
    export interface Route53DomainsCheckDomainAvailabilityRequest {
        DomainName: Route53DomainsDomainName;
        IdnLangCode?: Route53DomainsLangCode;
    }

    export interface Route53DomainsCheckDomainAvailabilityResponse {
        Availability: Route53DomainsDomainAvailability;
    }

    export type Route53DomainsCity = string;
    export interface Route53DomainsContactDetail {
        FirstName?: Route53DomainsContactName;
        LastName?: Route53DomainsContactName;
        ContactType?: Route53DomainsContactType;
        OrganizationName?: Route53DomainsContactName;
        AddressLine1?: Route53DomainsAddressLine;
        AddressLine2?: Route53DomainsAddressLine;
        City?: Route53DomainsCity;
        State?: Route53DomainsState;
        CountryCode?: Route53DomainsCountryCode;
        ZipCode?: Route53DomainsZipCode;
        PhoneNumber?: Route53DomainsContactNumber;
        Email?: Route53DomainsEmail;
        Fax?: Route53DomainsContactNumber;
        ExtraParams?: Route53DomainsExtraParamList;
    }

    export type Route53DomainsContactName = string;
    export type Route53DomainsContactNumber = string;
    export type Route53DomainsContactType = string;
    export type Route53DomainsCountryCode = string;
    export type Route53DomainsDNSSec = string;
    export interface Route53DomainsDeleteTagsForDomainRequest {
        DomainName: Route53DomainsDomainName;
        TagsToDelete: Route53DomainsTagKeyList;
    }

    export interface Route53DomainsDeleteTagsForDomainResponse {
    }

    export interface Route53DomainsDisableDomainAutoRenewRequest {
        DomainName: Route53DomainsDomainName;
    }

    export interface Route53DomainsDisableDomainAutoRenewResponse {
    }

    export interface Route53DomainsDisableDomainTransferLockRequest {
        DomainName: Route53DomainsDomainName;
    }

    export interface Route53DomainsDisableDomainTransferLockResponse {
        OperationId: Route53DomainsOperationId;
    }

    export type Route53DomainsDomainAuthCode = string;
    export type Route53DomainsDomainAvailability = string;
    export interface Route53DomainsDomainLimitExceeded {
        message?: Route53DomainsErrorMessage;
    }

    export type Route53DomainsDomainName = string; // pattern: "[a-zA-Z0-9_\-.]*"
    export type Route53DomainsDomainStatus = string;
    export type Route53DomainsDomainStatusList = Array<Route53DomainsDomainStatus>;
    export interface Route53DomainsDomainSummary {
        DomainName: Route53DomainsDomainName;
        AutoRenew?: Route53DomainsBoolean;
        TransferLock?: Route53DomainsBoolean;
        Expiry?: Route53DomainsTimestamp;
    }

    export type Route53DomainsDomainSummaryList = Array<Route53DomainsDomainSummary>;
    export interface Route53DomainsDuplicateRequest {
        message?: Route53DomainsErrorMessage;
    }

    export type Route53DomainsDurationInYears = number;
    export type Route53DomainsEmail = string;
    export interface Route53DomainsEnableDomainAutoRenewRequest {
        DomainName: Route53DomainsDomainName;
    }

    export interface Route53DomainsEnableDomainAutoRenewResponse {
    }

    export interface Route53DomainsEnableDomainTransferLockRequest {
        DomainName: Route53DomainsDomainName;
    }

    export interface Route53DomainsEnableDomainTransferLockResponse {
        OperationId: Route53DomainsOperationId;
    }

    export type Route53DomainsErrorMessage = string;
    export interface Route53DomainsExtraParam {
        Name: Route53DomainsExtraParamName;
        Value: Route53DomainsExtraParamValue;
    }

    export type Route53DomainsExtraParamList = Array<Route53DomainsExtraParam>;
    export type Route53DomainsExtraParamName = string;
    export type Route53DomainsExtraParamValue = string;
    export type Route53DomainsFIAuthKey = string;
    export interface Route53DomainsGetDomainDetailRequest {
        DomainName: Route53DomainsDomainName;
    }

    export interface Route53DomainsGetDomainDetailResponse {
        DomainName: Route53DomainsDomainName;
        Nameservers: Route53DomainsNameserverList;
        AutoRenew?: Route53DomainsBoolean;
        AdminContact: Route53DomainsContactDetail;
        RegistrantContact: Route53DomainsContactDetail;
        TechContact: Route53DomainsContactDetail;
        AdminPrivacy?: Route53DomainsBoolean;
        RegistrantPrivacy?: Route53DomainsBoolean;
        TechPrivacy?: Route53DomainsBoolean;
        RegistrarName?: Route53DomainsRegistrarName;
        WhoIsServer?: Route53DomainsRegistrarWhoIsServer;
        RegistrarUrl?: Route53DomainsRegistrarUrl;
        AbuseContactEmail?: Route53DomainsEmail;
        AbuseContactPhone?: Route53DomainsContactNumber;
        RegistryDomainId?: Route53DomainsRegistryDomainId;
        CreationDate?: Route53DomainsTimestamp;
        UpdatedDate?: Route53DomainsTimestamp;
        ExpirationDate?: Route53DomainsTimestamp;
        Reseller?: Route53DomainsReseller;
        DnsSec?: Route53DomainsDNSSec;
        StatusList?: Route53DomainsDomainStatusList;
    }

    export interface Route53DomainsGetOperationDetailRequest {
        OperationId: Route53DomainsOperationId;
    }

    export interface Route53DomainsGetOperationDetailResponse {
        OperationId?: Route53DomainsOperationId;
        Status?: Route53DomainsOperationStatus;
        Message?: Route53DomainsErrorMessage;
        DomainName?: Route53DomainsDomainName;
        Type?: Route53DomainsOperationType;
        SubmittedDate?: Route53DomainsTimestamp;
    }

    export type Route53DomainsGlueIp = string;
    export type Route53DomainsGlueIpList = Array<Route53DomainsGlueIp>;
    export type Route53DomainsHostName = string; // pattern: "[a-zA-Z0-9_\-.]*"
    export interface Route53DomainsInvalidInput {
        message?: Route53DomainsErrorMessage;
    }

    export type Route53DomainsLangCode = string;
    export interface Route53DomainsListDomainsRequest {
        Marker?: Route53DomainsPageMarker;
        MaxItems?: Route53DomainsPageMaxItems;
    }

    export interface Route53DomainsListDomainsResponse {
        Domains: Route53DomainsDomainSummaryList;
        NextPageMarker?: Route53DomainsPageMarker;
    }

    export interface Route53DomainsListOperationsRequest {
        Marker?: Route53DomainsPageMarker;
        MaxItems?: Route53DomainsPageMaxItems;
    }

    export interface Route53DomainsListOperationsResponse {
        Operations: Route53DomainsOperationSummaryList;
        NextPageMarker?: Route53DomainsPageMarker;
    }

    export interface Route53DomainsListTagsForDomainRequest {
        DomainName: Route53DomainsDomainName;
    }

    export interface Route53DomainsListTagsForDomainResponse {
        TagList: Route53DomainsTagList;
    }

    export interface Route53DomainsNameserver {
        Name: Route53DomainsHostName;
        GlueIps?: Route53DomainsGlueIpList;
    }

    export type Route53DomainsNameserverList = Array<Route53DomainsNameserver>;
    export type Route53DomainsOperationId = string;
    export interface Route53DomainsOperationLimitExceeded {
        message?: Route53DomainsErrorMessage;
    }

    export type Route53DomainsOperationStatus = string;
    export interface Route53DomainsOperationSummary {
        OperationId: Route53DomainsOperationId;
        Status: Route53DomainsOperationStatus;
        Type: Route53DomainsOperationType;
        SubmittedDate: Route53DomainsTimestamp;
    }

    export type Route53DomainsOperationSummaryList = Array<Route53DomainsOperationSummary>;
    export type Route53DomainsOperationType = string;
    export type Route53DomainsPageMarker = string;
    export type Route53DomainsPageMaxItems = number;
    export interface Route53DomainsRegisterDomainRequest {
        DomainName: Route53DomainsDomainName;
        IdnLangCode?: Route53DomainsLangCode;
        DurationInYears: Route53DomainsDurationInYears;
        AutoRenew?: Route53DomainsBoolean;
        AdminContact: Route53DomainsContactDetail;
        RegistrantContact: Route53DomainsContactDetail;
        TechContact: Route53DomainsContactDetail;
        PrivacyProtectAdminContact?: Route53DomainsBoolean;
        PrivacyProtectRegistrantContact?: Route53DomainsBoolean;
        PrivacyProtectTechContact?: Route53DomainsBoolean;
    }

    export interface Route53DomainsRegisterDomainResponse {
        OperationId: Route53DomainsOperationId;
    }

    export type Route53DomainsRegistrarName = string;
    export type Route53DomainsRegistrarUrl = string;
    export type Route53DomainsRegistrarWhoIsServer = string;
    export type Route53DomainsRegistryDomainId = string;
    export type Route53DomainsReseller = string;
    export interface Route53DomainsRetrieveDomainAuthCodeRequest {
        DomainName: Route53DomainsDomainName;
    }

    export interface Route53DomainsRetrieveDomainAuthCodeResponse {
        AuthCode: Route53DomainsDomainAuthCode;
    }

    export type Route53DomainsState = string;
    export interface Route53DomainsTLDRulesViolation {
        message?: Route53DomainsErrorMessage;
    }

    export interface Route53DomainsTag {
        Key?: Route53DomainsTagKey;
        Value?: Route53DomainsTagValue;
    }

    export type Route53DomainsTagKey = string;
    export type Route53DomainsTagKeyList = Array<Route53DomainsTagKey>;
    export type Route53DomainsTagList = Array<Route53DomainsTag>;
    export type Route53DomainsTagValue = string;
    export type Route53DomainsTimestamp = number;
    export interface Route53DomainsTransferDomainRequest {
        DomainName: Route53DomainsDomainName;
        IdnLangCode?: Route53DomainsLangCode;
        DurationInYears: Route53DomainsDurationInYears;
        Nameservers?: Route53DomainsNameserverList;
        AuthCode?: Route53DomainsDomainAuthCode;
        AutoRenew?: Route53DomainsBoolean;
        AdminContact: Route53DomainsContactDetail;
        RegistrantContact: Route53DomainsContactDetail;
        TechContact: Route53DomainsContactDetail;
        PrivacyProtectAdminContact?: Route53DomainsBoolean;
        PrivacyProtectRegistrantContact?: Route53DomainsBoolean;
        PrivacyProtectTechContact?: Route53DomainsBoolean;
    }

    export interface Route53DomainsTransferDomainResponse {
        OperationId: Route53DomainsOperationId;
    }

    export interface Route53DomainsUnsupportedTLD {
        message?: Route53DomainsErrorMessage;
    }

    export interface Route53DomainsUpdateDomainContactPrivacyRequest {
        DomainName: Route53DomainsDomainName;
        AdminPrivacy?: Route53DomainsBoolean;
        RegistrantPrivacy?: Route53DomainsBoolean;
        TechPrivacy?: Route53DomainsBoolean;
    }

    export interface Route53DomainsUpdateDomainContactPrivacyResponse {
        OperationId: Route53DomainsOperationId;
    }

    export interface Route53DomainsUpdateDomainContactRequest {
        DomainName: Route53DomainsDomainName;
        AdminContact?: Route53DomainsContactDetail;
        RegistrantContact?: Route53DomainsContactDetail;
        TechContact?: Route53DomainsContactDetail;
    }

    export interface Route53DomainsUpdateDomainContactResponse {
        OperationId: Route53DomainsOperationId;
    }

    export interface Route53DomainsUpdateDomainNameserversRequest {
        DomainName: Route53DomainsDomainName;
        FIAuthKey?: Route53DomainsFIAuthKey;
        Nameservers: Route53DomainsNameserverList;
    }

    export interface Route53DomainsUpdateDomainNameserversResponse {
        OperationId: Route53DomainsOperationId;
    }

    export interface Route53DomainsUpdateTagsForDomainRequest {
        DomainName: Route53DomainsDomainName;
        TagsToUpdate?: Route53DomainsTagList;
    }

    export interface Route53DomainsUpdateTagsForDomainResponse {
    }

    export type Route53DomainsZipCode = string;
}
