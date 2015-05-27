// DO NOT EDIT!
//
declare module "aws-sdk" {
    export class Route53Domains {
      constructor(options?: any);
      checkDomainAvailability(params: CheckDomainAvailabilityRequest, callback: (err: InvalidInput|UnsupportedTLD|any, data: CheckDomainAvailabilityResponse|any) => void): void;
      deleteTagsForDomain(params: DeleteTagsForDomainRequest, callback: (err: InvalidInput|OperationLimitExceeded|UnsupportedTLD|any, data: DeleteTagsForDomainResponse|any) => void): void;
      disableDomainAutoRenew(params: DisableDomainAutoRenewRequest, callback: (err: InvalidInput|UnsupportedTLD|any, data: DisableDomainAutoRenewResponse|any) => void): void;
      disableDomainTransferLock(params: DisableDomainTransferLockRequest, callback: (err: InvalidInput|DuplicateRequest|TLDRulesViolation|OperationLimitExceeded|UnsupportedTLD|any, data: DisableDomainTransferLockResponse|any) => void): void;
      enableDomainAutoRenew(params: EnableDomainAutoRenewRequest, callback: (err: InvalidInput|UnsupportedTLD|any, data: EnableDomainAutoRenewResponse|any) => void): void;
      enableDomainTransferLock(params: EnableDomainTransferLockRequest, callback: (err: InvalidInput|DuplicateRequest|TLDRulesViolation|OperationLimitExceeded|UnsupportedTLD|any, data: EnableDomainTransferLockResponse|any) => void): void;
      getDomainDetail(params: GetDomainDetailRequest, callback: (err: InvalidInput|UnsupportedTLD|any, data: GetDomainDetailResponse|any) => void): void;
      getOperationDetail(params: GetOperationDetailRequest, callback: (err: InvalidInput|any, data: GetOperationDetailResponse|any) => void): void;
      listDomains(params: ListDomainsRequest, callback: (err: InvalidInput|any, data: ListDomainsResponse|any) => void): void;
      listOperations(params: ListOperationsRequest, callback: (err: InvalidInput|any, data: ListOperationsResponse|any) => void): void;
      listTagsForDomain(params: ListTagsForDomainRequest, callback: (err: InvalidInput|OperationLimitExceeded|UnsupportedTLD|any, data: ListTagsForDomainResponse|any) => void): void;
      registerDomain(params: RegisterDomainRequest, callback: (err: InvalidInput|UnsupportedTLD|DuplicateRequest|TLDRulesViolation|DomainLimitExceeded|OperationLimitExceeded|any, data: RegisterDomainResponse|any) => void): void;
      retrieveDomainAuthCode(params: RetrieveDomainAuthCodeRequest, callback: (err: InvalidInput|UnsupportedTLD|any, data: RetrieveDomainAuthCodeResponse|any) => void): void;
      transferDomain(params: TransferDomainRequest, callback: (err: InvalidInput|UnsupportedTLD|DuplicateRequest|TLDRulesViolation|DomainLimitExceeded|OperationLimitExceeded|any, data: TransferDomainResponse|any) => void): void;
      updateDomainContact(params: UpdateDomainContactRequest, callback: (err: InvalidInput|DuplicateRequest|TLDRulesViolation|OperationLimitExceeded|UnsupportedTLD|any, data: UpdateDomainContactResponse|any) => void): void;
      updateDomainContactPrivacy(params: UpdateDomainContactPrivacyRequest, callback: (err: InvalidInput|DuplicateRequest|TLDRulesViolation|OperationLimitExceeded|UnsupportedTLD|any, data: UpdateDomainContactPrivacyResponse|any) => void): void;
      updateDomainNameservers(params: UpdateDomainNameserversRequest, callback: (err: InvalidInput|DuplicateRequest|TLDRulesViolation|OperationLimitExceeded|UnsupportedTLD|any, data: UpdateDomainNameserversResponse|any) => void): void;
      updateTagsForDomain(params: UpdateTagsForDomainRequest, callback: (err: InvalidInput|OperationLimitExceeded|UnsupportedTLD|any, data: UpdateTagsForDomainResponse|any) => void): void;
    }

    export type AddressLine = string;

    export type Boolean = boolean;

    export interface CheckDomainAvailabilityRequest {
      DomainName: DomainName;
      IdnLangCode?: LangCode;
    }


    export interface CheckDomainAvailabilityResponse {
      Availability: DomainAvailability;
    }


    export type City = string;

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


    export type ContactName = string;

    export type ContactNumber = string;

    export type ContactType = string;

    export type CountryCode = string;

    export type DNSSec = string;

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


    export type DomainAuthCode = string;

    export type DomainAvailability = string;

    export interface DomainLimitExceeded {
      message?: ErrorMessage;
    }


    export type DomainName = string; // pattern: "[a-zA-Z0-9_\-.]*"

    export type DomainStatus = string;

    export type DomainStatusList = Array<DomainStatus>;

    export interface DomainSummary {
      DomainName: DomainName;
      AutoRenew?: Boolean;
      TransferLock?: Boolean;
      Expiry?: Timestamp;
    }


    export type DomainSummaryList = Array<DomainSummary>;

    export interface DuplicateRequest {
      message?: ErrorMessage;
    }


    export type DurationInYears = number;

    export type Email = string;

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


    export type ErrorMessage = string;

    export interface ExtraParam {
      Name: ExtraParamName;
      Value: ExtraParamValue;
    }


    export type ExtraParamList = Array<ExtraParam>;

    export type ExtraParamName = string;

    export type ExtraParamValue = string;

    export type FIAuthKey = string;

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


    export type GlueIp = string;

    export type GlueIpList = Array<GlueIp>;

    export type HostName = string; // pattern: "[a-zA-Z0-9_\-.]*"

    export interface InvalidInput {
      message?: ErrorMessage;
    }


    export type LangCode = string;

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


    export type NameserverList = Array<Nameserver>;

    export type OperationId = string;

    export interface OperationLimitExceeded {
      message?: ErrorMessage;
    }


    export type OperationStatus = string;

    export interface OperationSummary {
      OperationId: OperationId;
      Status: OperationStatus;
      Type: OperationType;
      SubmittedDate: Timestamp;
    }


    export type OperationSummaryList = Array<OperationSummary>;

    export type OperationType = string;

    export type PageMarker = string;

    export type PageMaxItems = number;

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


    export type RegistrarName = string;

    export type RegistrarUrl = string;

    export type RegistrarWhoIsServer = string;

    export type RegistryDomainId = string;

    export type Reseller = string;

    export interface RetrieveDomainAuthCodeRequest {
      DomainName: DomainName;
    }


    export interface RetrieveDomainAuthCodeResponse {
      AuthCode: DomainAuthCode;
    }


    export type State = string;

    export interface TLDRulesViolation {
      message?: ErrorMessage;
    }


    export interface Tag {
      Key?: TagKey;
      Value?: TagValue;
    }


    export type TagKey = string;

    export type TagKeyList = Array<TagKey>;

    export type TagList = Array<Tag>;

    export type TagValue = string;

    export type Timestamp = number;

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


    export type ZipCode = string;

}
