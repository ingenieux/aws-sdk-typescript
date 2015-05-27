// DO NOT EDIT!
//
declare module "aws-sdk" {
    export class Route53 {
      constructor(options?: any);
      associateVPCWithHostedZone(params: AssociateVPCWithHostedZoneRequest, callback: (err: NoSuchHostedZone|InvalidVPCId|InvalidInput|PublicZoneVPCAssociation|ConflictingDomainExists|any, data: AssociateVPCWithHostedZoneResponse|any) => void): void;
      changeResourceRecordSets(params: ChangeResourceRecordSetsRequest, callback: (err: NoSuchHostedZone|NoSuchHealthCheck|InvalidChangeBatch|InvalidInput|PriorRequestNotComplete|any, data: ChangeResourceRecordSetsResponse|any) => void): void;
      changeTagsForResource(params: ChangeTagsForResourceRequest, callback: (err: InvalidInput|NoSuchHealthCheck|NoSuchHostedZone|PriorRequestNotComplete|ThrottlingException|any, data: ChangeTagsForResourceResponse|any) => void): void;
      createHealthCheck(params: CreateHealthCheckRequest, callback: (err: TooManyHealthChecks|HealthCheckAlreadyExists|InvalidInput|any, data: CreateHealthCheckResponse|any) => void): void;
      createHostedZone(params: CreateHostedZoneRequest, callback: (err: InvalidDomainName|HostedZoneAlreadyExists|TooManyHostedZones|InvalidVPCId|InvalidInput|DelegationSetNotAvailable|ConflictingDomainExists|NoSuchDelegationSet|DelegationSetNotReusable|any, data: CreateHostedZoneResponse|any) => void): void;
      createReusableDelegationSet(params: CreateReusableDelegationSetRequest, callback: (err: DelegationSetAlreadyCreated|LimitsExceeded|HostedZoneNotFound|InvalidArgument|InvalidInput|DelegationSetNotAvailable|DelegationSetAlreadyReusable|any, data: CreateReusableDelegationSetResponse|any) => void): void;
      deleteHealthCheck(params: DeleteHealthCheckRequest, callback: (err: NoSuchHealthCheck|HealthCheckInUse|InvalidInput|any, data: DeleteHealthCheckResponse|any) => void): void;
      deleteHostedZone(params: DeleteHostedZoneRequest, callback: (err: NoSuchHostedZone|HostedZoneNotEmpty|PriorRequestNotComplete|InvalidInput|any, data: DeleteHostedZoneResponse|any) => void): void;
      deleteReusableDelegationSet(params: DeleteReusableDelegationSetRequest, callback: (err: NoSuchDelegationSet|DelegationSetInUse|DelegationSetNotReusable|InvalidInput|any, data: DeleteReusableDelegationSetResponse|any) => void): void;
      disassociateVPCFromHostedZone(params: DisassociateVPCFromHostedZoneRequest, callback: (err: NoSuchHostedZone|InvalidVPCId|VPCAssociationNotFound|LastVPCAssociation|InvalidInput|any, data: DisassociateVPCFromHostedZoneResponse|any) => void): void;
      getChange(params: GetChangeRequest, callback: (err: NoSuchChange|InvalidInput|any, data: GetChangeResponse|any) => void): void;
      getCheckerIpRanges(params: GetCheckerIpRangesRequest, callback: (err: any, data: GetCheckerIpRangesResponse|any) => void): void;
      getGeoLocation(params: GetGeoLocationRequest, callback: (err: NoSuchGeoLocation|InvalidInput|any, data: GetGeoLocationResponse|any) => void): void;
      getHealthCheck(params: GetHealthCheckRequest, callback: (err: NoSuchHealthCheck|InvalidInput|IncompatibleVersion|any, data: GetHealthCheckResponse|any) => void): void;
      getHealthCheckCount(params: GetHealthCheckCountRequest, callback: (err: any, data: GetHealthCheckCountResponse|any) => void): void;
      getHealthCheckLastFailureReason(params: GetHealthCheckLastFailureReasonRequest, callback: (err: NoSuchHealthCheck|any, data: GetHealthCheckLastFailureReasonResponse|any) => void): void;
      getHealthCheckStatus(params: GetHealthCheckStatusRequest, callback: (err: NoSuchHealthCheck|any, data: GetHealthCheckStatusResponse|any) => void): void;
      getHostedZone(params: GetHostedZoneRequest, callback: (err: NoSuchHostedZone|InvalidInput|any, data: GetHostedZoneResponse|any) => void): void;
      getHostedZoneCount(params: GetHostedZoneCountRequest, callback: (err: InvalidInput|any, data: GetHostedZoneCountResponse|any) => void): void;
      getReusableDelegationSet(params: GetReusableDelegationSetRequest, callback: (err: NoSuchDelegationSet|DelegationSetNotReusable|InvalidInput|any, data: GetReusableDelegationSetResponse|any) => void): void;
      listGeoLocations(params: ListGeoLocationsRequest, callback: (err: InvalidInput|any, data: ListGeoLocationsResponse|any) => void): void;
      listHealthChecks(params: ListHealthChecksRequest, callback: (err: InvalidInput|IncompatibleVersion|any, data: ListHealthChecksResponse|any) => void): void;
      listHostedZones(params: ListHostedZonesRequest, callback: (err: InvalidInput|NoSuchDelegationSet|DelegationSetNotReusable|any, data: ListHostedZonesResponse|any) => void): void;
      listHostedZonesByName(params: ListHostedZonesByNameRequest, callback: (err: InvalidInput|InvalidDomainName|any, data: ListHostedZonesByNameResponse|any) => void): void;
      listResourceRecordSets(params: ListResourceRecordSetsRequest, callback: (err: NoSuchHostedZone|InvalidInput|any, data: ListResourceRecordSetsResponse|any) => void): void;
      listReusableDelegationSets(params: ListReusableDelegationSetsRequest, callback: (err: InvalidInput|any, data: ListReusableDelegationSetsResponse|any) => void): void;
      listTagsForResource(params: ListTagsForResourceRequest, callback: (err: InvalidInput|NoSuchHealthCheck|NoSuchHostedZone|PriorRequestNotComplete|ThrottlingException|any, data: ListTagsForResourceResponse|any) => void): void;
      listTagsForResources(params: ListTagsForResourcesRequest, callback: (err: InvalidInput|NoSuchHealthCheck|NoSuchHostedZone|PriorRequestNotComplete|ThrottlingException|any, data: ListTagsForResourcesResponse|any) => void): void;
      updateHealthCheck(params: UpdateHealthCheckRequest, callback: (err: NoSuchHealthCheck|InvalidInput|HealthCheckVersionMismatch|any, data: UpdateHealthCheckResponse|any) => void): void;
      updateHostedZoneComment(params: UpdateHostedZoneCommentRequest, callback: (err: NoSuchHostedZone|InvalidInput|any, data: UpdateHostedZoneCommentResponse|any) => void): void;
    }

    export type AliasHealthEnabled = boolean;

    export interface AliasTarget {
      HostedZoneId: ResourceId;
      DNSName: DNSName;
      EvaluateTargetHealth: AliasHealthEnabled;
    }


    export type AssociateVPCComment = string;

    export interface AssociateVPCWithHostedZoneRequest {
      HostedZoneId: ResourceId;
      VPC: VPC;
      Comment?: AssociateVPCComment;
    }


    export interface AssociateVPCWithHostedZoneResponse {
      ChangeInfo: ChangeInfo;
    }


    export interface Change {
      Action: ChangeAction;
      ResourceRecordSet: ResourceRecordSet;
    }


    export type ChangeAction = string;

    export interface ChangeBatch {
      Comment?: ResourceDescription;
      Changes: Changes;
    }


    export interface ChangeInfo {
      Id: ResourceId;
      Status: ChangeStatus;
      SubmittedAt: TimeStamp;
      Comment?: ResourceDescription;
    }


    export interface ChangeResourceRecordSetsRequest {
      HostedZoneId: ResourceId;
      ChangeBatch: ChangeBatch;
    }


    export interface ChangeResourceRecordSetsResponse {
      ChangeInfo: ChangeInfo;
    }


    export type ChangeStatus = string;

    export interface ChangeTagsForResourceRequest {
      ResourceType: TagResourceType;
      ResourceId: TagResourceId;
      AddTags?: TagList;
      RemoveTagKeys?: TagKeyList;
    }


    export interface ChangeTagsForResourceResponse {
    }


    export type Changes = Array<Change>;

    export type CheckerIpRanges = Array<IPAddressCidr>;

    export interface ConflictingDomainExists {
      message?: ErrorMessage;
    }


    export interface CreateHealthCheckRequest {
      CallerReference: HealthCheckNonce;
      HealthCheckConfig: HealthCheckConfig;
    }


    export interface CreateHealthCheckResponse {
      HealthCheck: HealthCheck;
      Location: ResourceURI;
    }


    export interface CreateHostedZoneRequest {
      Name: DNSName;
      VPC?: VPC;
      CallerReference: Nonce;
      HostedZoneConfig?: HostedZoneConfig;
      DelegationSetId?: ResourceId;
    }


    export interface CreateHostedZoneResponse {
      HostedZone: HostedZone;
      ChangeInfo: ChangeInfo;
      DelegationSet: DelegationSet;
      VPC?: VPC;
      Location: ResourceURI;
    }


    export interface CreateReusableDelegationSetRequest {
      CallerReference: Nonce;
      HostedZoneId?: ResourceId;
    }


    export interface CreateReusableDelegationSetResponse {
      DelegationSet: DelegationSet;
      Location: ResourceURI;
    }


    export type DNSName = string;

    export interface DelegationSet {
      Id?: ResourceId;
      CallerReference?: Nonce;
      NameServers: DelegationSetNameServers;
    }


    export interface DelegationSetAlreadyCreated {
      message?: ErrorMessage;
    }


    export interface DelegationSetAlreadyReusable {
      message?: ErrorMessage;
    }


    export interface DelegationSetInUse {
      message?: ErrorMessage;
    }


    export type DelegationSetNameServers = Array<DNSName>;

    export interface DelegationSetNotAvailable {
      message?: ErrorMessage;
    }


    export interface DelegationSetNotReusable {
      message?: ErrorMessage;
    }


    export type DelegationSets = Array<DelegationSet>;

    export interface DeleteHealthCheckRequest {
      HealthCheckId: HealthCheckId;
    }


    export interface DeleteHealthCheckResponse {
    }


    export interface DeleteHostedZoneRequest {
      Id: ResourceId;
    }


    export interface DeleteHostedZoneResponse {
      ChangeInfo: ChangeInfo;
    }


    export interface DeleteReusableDelegationSetRequest {
      Id: ResourceId;
    }


    export interface DeleteReusableDelegationSetResponse {
    }


    export type DisassociateVPCComment = string;

    export interface DisassociateVPCFromHostedZoneRequest {
      HostedZoneId: ResourceId;
      VPC: VPC;
      Comment?: DisassociateVPCComment;
    }


    export interface DisassociateVPCFromHostedZoneResponse {
      ChangeInfo: ChangeInfo;
    }


    export type ErrorMessage = string;

    export type ErrorMessages = Array<ErrorMessage>;

    export type FailureThreshold = number;

    export type FullyQualifiedDomainName = string;

    export interface GeoLocation {
      ContinentCode?: GeoLocationContinentCode;
      CountryCode?: GeoLocationCountryCode;
      SubdivisionCode?: GeoLocationSubdivisionCode;
    }


    export type GeoLocationContinentCode = string;

    export type GeoLocationContinentName = string;

    export type GeoLocationCountryCode = string;

    export type GeoLocationCountryName = string;

    export interface GeoLocationDetails {
      ContinentCode?: GeoLocationContinentCode;
      ContinentName?: GeoLocationContinentName;
      CountryCode?: GeoLocationCountryCode;
      CountryName?: GeoLocationCountryName;
      SubdivisionCode?: GeoLocationSubdivisionCode;
      SubdivisionName?: GeoLocationSubdivisionName;
    }


    export type GeoLocationDetailsList = Array<GeoLocationDetails>;

    export type GeoLocationSubdivisionCode = string;

    export type GeoLocationSubdivisionName = string;

    export interface GetChangeRequest {
      Id: ResourceId;
    }


    export interface GetChangeResponse {
      ChangeInfo: ChangeInfo;
    }


    export interface GetCheckerIpRangesRequest {
    }


    export interface GetCheckerIpRangesResponse {
      CheckerIpRanges: CheckerIpRanges;
    }


    export interface GetGeoLocationRequest {
      ContinentCode?: GeoLocationContinentCode;
      CountryCode?: GeoLocationCountryCode;
      SubdivisionCode?: GeoLocationSubdivisionCode;
    }


    export interface GetGeoLocationResponse {
      GeoLocationDetails: GeoLocationDetails;
    }


    export interface GetHealthCheckCountRequest {
    }


    export interface GetHealthCheckCountResponse {
      HealthCheckCount: HealthCheckCount;
    }


    export interface GetHealthCheckLastFailureReasonRequest {
      HealthCheckId: HealthCheckId;
    }


    export interface GetHealthCheckLastFailureReasonResponse {
      HealthCheckObservations: HealthCheckObservations;
    }


    export interface GetHealthCheckRequest {
      HealthCheckId: HealthCheckId;
    }


    export interface GetHealthCheckResponse {
      HealthCheck: HealthCheck;
    }


    export interface GetHealthCheckStatusRequest {
      HealthCheckId: HealthCheckId;
    }


    export interface GetHealthCheckStatusResponse {
      HealthCheckObservations: HealthCheckObservations;
    }


    export interface GetHostedZoneCountRequest {
    }


    export interface GetHostedZoneCountResponse {
      HostedZoneCount: HostedZoneCount;
    }


    export interface GetHostedZoneRequest {
      Id: ResourceId;
    }


    export interface GetHostedZoneResponse {
      HostedZone: HostedZone;
      DelegationSet?: DelegationSet;
      VPCs?: VPCs;
    }


    export interface GetReusableDelegationSetRequest {
      Id: ResourceId;
    }


    export interface GetReusableDelegationSetResponse {
      DelegationSet: DelegationSet;
    }


    export interface HealthCheck {
      Id: HealthCheckId;
      CallerReference: HealthCheckNonce;
      HealthCheckConfig: HealthCheckConfig;
      HealthCheckVersion: HealthCheckVersion;
    }


    export interface HealthCheckAlreadyExists {
      message?: ErrorMessage;
    }


    export interface HealthCheckConfig {
      IPAddress?: IPAddress;
      Port?: Port;
      Type: HealthCheckType;
      ResourcePath?: ResourcePath;
      FullyQualifiedDomainName?: FullyQualifiedDomainName;
      SearchString?: SearchString;
      RequestInterval?: RequestInterval;
      FailureThreshold?: FailureThreshold;
    }


    export type HealthCheckCount = number;

    export type HealthCheckId = string;

    export interface HealthCheckInUse {
      message?: ErrorMessage;
    }


    export type HealthCheckNonce = string;

    export interface HealthCheckObservation {
      IPAddress?: IPAddress;
      StatusReport?: StatusReport;
    }


    export type HealthCheckObservations = Array<HealthCheckObservation>;

    export type HealthCheckType = string;

    export type HealthCheckVersion = number;

    export interface HealthCheckVersionMismatch {
      message?: ErrorMessage;
    }


    export type HealthChecks = Array<HealthCheck>;

    export interface HostedZone {
      Id: ResourceId;
      Name: DNSName;
      CallerReference: Nonce;
      Config?: HostedZoneConfig;
      ResourceRecordSetCount?: HostedZoneRRSetCount;
    }


    export interface HostedZoneAlreadyExists {
      message?: ErrorMessage;
    }


    export interface HostedZoneConfig {
      Comment?: ResourceDescription;
      PrivateZone?: IsPrivateZone;
    }


    export type HostedZoneCount = number;

    export interface HostedZoneNotEmpty {
      message?: ErrorMessage;
    }


    export interface HostedZoneNotFound {
      message?: ErrorMessage;
    }


    export type HostedZoneRRSetCount = number;

    export type HostedZones = Array<HostedZone>;

    export type IPAddress = string; // pattern: "^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$"

    export type IPAddressCidr = string;

    export interface IncompatibleVersion {
      message?: ErrorMessage;
    }


    export interface InvalidArgument {
      message?: ErrorMessage;
    }


    export interface InvalidChangeBatch {
      messages?: ErrorMessages;
    }


    export interface InvalidDomainName {
      message?: ErrorMessage;
    }


    export interface InvalidInput {
      message?: ErrorMessage;
    }


    export interface InvalidVPCId {
      message?: ErrorMessage;
    }


    export type IsPrivateZone = boolean;

    export interface LastVPCAssociation {
      message?: ErrorMessage;
    }


    export interface LimitsExceeded {
      message?: ErrorMessage;
    }


    export interface ListGeoLocationsRequest {
      StartContinentCode?: GeoLocationContinentCode;
      StartCountryCode?: GeoLocationCountryCode;
      StartSubdivisionCode?: GeoLocationSubdivisionCode;
      MaxItems?: PageMaxItems;
    }


    export interface ListGeoLocationsResponse {
      GeoLocationDetailsList: GeoLocationDetailsList;
      IsTruncated: PageTruncated;
      NextContinentCode?: GeoLocationContinentCode;
      NextCountryCode?: GeoLocationCountryCode;
      NextSubdivisionCode?: GeoLocationSubdivisionCode;
      MaxItems: PageMaxItems;
    }


    export interface ListHealthChecksRequest {
      Marker?: PageMarker;
      MaxItems?: PageMaxItems;
    }


    export interface ListHealthChecksResponse {
      HealthChecks: HealthChecks;
      Marker: PageMarker;
      IsTruncated: PageTruncated;
      NextMarker?: PageMarker;
      MaxItems: PageMaxItems;
    }


    export interface ListHostedZonesByNameRequest {
      DNSName?: DNSName;
      HostedZoneId?: ResourceId;
      MaxItems?: PageMaxItems;
    }


    export interface ListHostedZonesByNameResponse {
      HostedZones: HostedZones;
      DNSName?: DNSName;
      HostedZoneId?: ResourceId;
      IsTruncated: PageTruncated;
      NextDNSName?: DNSName;
      NextHostedZoneId?: ResourceId;
      MaxItems: PageMaxItems;
    }


    export interface ListHostedZonesRequest {
      Marker?: PageMarker;
      MaxItems?: PageMaxItems;
      DelegationSetId?: ResourceId;
    }


    export interface ListHostedZonesResponse {
      HostedZones: HostedZones;
      Marker: PageMarker;
      IsTruncated: PageTruncated;
      NextMarker?: PageMarker;
      MaxItems: PageMaxItems;
    }


    export interface ListResourceRecordSetsRequest {
      HostedZoneId: ResourceId;
      StartRecordName?: DNSName;
      StartRecordType?: RRType;
      StartRecordIdentifier?: ResourceRecordSetIdentifier;
      MaxItems?: PageMaxItems;
    }


    export interface ListResourceRecordSetsResponse {
      ResourceRecordSets: ResourceRecordSets;
      IsTruncated: PageTruncated;
      NextRecordName?: DNSName;
      NextRecordType?: RRType;
      NextRecordIdentifier?: ResourceRecordSetIdentifier;
      MaxItems: PageMaxItems;
    }


    export interface ListReusableDelegationSetsRequest {
      Marker?: PageMarker;
      MaxItems?: PageMaxItems;
    }


    export interface ListReusableDelegationSetsResponse {
      DelegationSets: DelegationSets;
      Marker: PageMarker;
      IsTruncated: PageTruncated;
      NextMarker?: PageMarker;
      MaxItems: PageMaxItems;
    }


    export interface ListTagsForResourceRequest {
      ResourceType: TagResourceType;
      ResourceId: TagResourceId;
    }


    export interface ListTagsForResourceResponse {
      ResourceTagSet: ResourceTagSet;
    }


    export interface ListTagsForResourcesRequest {
      ResourceType: TagResourceType;
      ResourceIds: TagResourceIdList;
    }


    export interface ListTagsForResourcesResponse {
      ResourceTagSets: ResourceTagSetList;
    }


    export interface NoSuchChange {
      message?: ErrorMessage;
    }


    export interface NoSuchDelegationSet {
      message?: ErrorMessage;
    }


    export interface NoSuchGeoLocation {
      message?: ErrorMessage;
    }


    export interface NoSuchHealthCheck {
      message?: ErrorMessage;
    }


    export interface NoSuchHostedZone {
      message?: ErrorMessage;
    }


    export type Nonce = string;

    export type PageMarker = string;

    export type PageMaxItems = string;

    export type PageTruncated = boolean;

    export type Port = number;

    export interface PriorRequestNotComplete {
      message?: ErrorMessage;
    }


    export interface PublicZoneVPCAssociation {
      message?: ErrorMessage;
    }


    export type RData = string;

    export type RRType = string;

    export type RequestInterval = number;

    export type ResourceDescription = string;

    export type ResourceId = string;

    export type ResourcePath = string;

    export interface ResourceRecord {
      Value: RData;
    }


    export interface ResourceRecordSet {
      Name: DNSName;
      Type: RRType;
      SetIdentifier?: ResourceRecordSetIdentifier;
      Weight?: ResourceRecordSetWeight;
      Region?: ResourceRecordSetRegion;
      GeoLocation?: GeoLocation;
      Failover?: ResourceRecordSetFailover;
      TTL?: TTL;
      ResourceRecords?: ResourceRecords;
      AliasTarget?: AliasTarget;
      HealthCheckId?: HealthCheckId;
    }


    export type ResourceRecordSetFailover = string;

    export type ResourceRecordSetIdentifier = string;

    export type ResourceRecordSetRegion = string;

    export type ResourceRecordSetWeight = number;

    export type ResourceRecordSets = Array<ResourceRecordSet>;

    export type ResourceRecords = Array<ResourceRecord>;

    export interface ResourceTagSet {
      ResourceType?: TagResourceType;
      ResourceId?: TagResourceId;
      Tags?: TagList;
    }


    export type ResourceTagSetList = Array<ResourceTagSet>;

    export type ResourceURI = string;

    export type SearchString = string;

    export type Status = string;

    export interface StatusReport {
      Status?: Status;
      CheckedTime?: TimeStamp;
    }


    export type TTL = number;

    export interface Tag {
      Key?: TagKey;
      Value?: TagValue;
    }


    export type TagKey = string;

    export type TagKeyList = Array<TagKey>; // max: 10

    export type TagList = Array<Tag>; // max: 10

    export type TagResourceId = string;

    export type TagResourceIdList = Array<TagResourceId>; // max: 10

    export type TagResourceType = string;

    export type TagValue = string;

    export interface ThrottlingException {
      message?: ErrorMessage;
    }


    export type TimeStamp = number;

    export interface TooManyHealthChecks {
      message?: ErrorMessage;
    }


    export interface TooManyHostedZones {
      message?: ErrorMessage;
    }


    export interface UpdateHealthCheckRequest {
      HealthCheckId: HealthCheckId;
      HealthCheckVersion?: HealthCheckVersion;
      IPAddress?: IPAddress;
      Port?: Port;
      ResourcePath?: ResourcePath;
      FullyQualifiedDomainName?: FullyQualifiedDomainName;
      SearchString?: SearchString;
      FailureThreshold?: FailureThreshold;
    }


    export interface UpdateHealthCheckResponse {
      HealthCheck: HealthCheck;
    }


    export interface UpdateHostedZoneCommentRequest {
      Id: ResourceId;
      Comment?: ResourceDescription;
    }


    export interface UpdateHostedZoneCommentResponse {
      HostedZone: HostedZone;
    }


    export interface VPC {
      VPCRegion?: VPCRegion;
      VPCId?: VPCId;
    }


    export interface VPCAssociationNotFound {
      message?: ErrorMessage;
    }


    export type VPCId = string;

    export type VPCRegion = string;

    export type VPCs = Array<VPC>;

}
