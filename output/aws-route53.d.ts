// DO NOT EDIT!
//

///<reference path="./aws-sdk-common.d.ts" />
declare module "aws-sdk" {
    export class Route53 {
      constructor(options?: any);
      associateVPCWithHostedZone(params: Route53AssociateVPCWithHostedZoneRequest, callback: (err: Route53NoSuchHostedZone|Route53InvalidVPCId|Route53InvalidInput|Route53PublicZoneVPCAssociation|Route53ConflictingDomainExists|any, data: Route53AssociateVPCWithHostedZoneResponse|any) => void): void;
      changeResourceRecordSets(params: Route53ChangeResourceRecordSetsRequest, callback: (err: Route53NoSuchHostedZone|Route53NoSuchHealthCheck|Route53InvalidChangeBatch|Route53InvalidInput|Route53PriorRequestNotComplete|any, data: Route53ChangeResourceRecordSetsResponse|any) => void): void;
      changeTagsForResource(params: Route53ChangeTagsForResourceRequest, callback: (err: Route53InvalidInput|Route53NoSuchHealthCheck|Route53NoSuchHostedZone|Route53PriorRequestNotComplete|Route53ThrottlingException|any, data: Route53ChangeTagsForResourceResponse|any) => void): void;
      createHealthCheck(params: Route53CreateHealthCheckRequest, callback: (err: Route53TooManyHealthChecks|Route53HealthCheckAlreadyExists|Route53InvalidInput|any, data: Route53CreateHealthCheckResponse|any) => void): void;
      createHostedZone(params: Route53CreateHostedZoneRequest, callback: (err: Route53InvalidDomainName|Route53HostedZoneAlreadyExists|Route53TooManyHostedZones|Route53InvalidVPCId|Route53InvalidInput|Route53DelegationSetNotAvailable|Route53ConflictingDomainExists|Route53NoSuchDelegationSet|Route53DelegationSetNotReusable|any, data: Route53CreateHostedZoneResponse|any) => void): void;
      createReusableDelegationSet(params: Route53CreateReusableDelegationSetRequest, callback: (err: Route53DelegationSetAlreadyCreated|Route53LimitsExceeded|Route53HostedZoneNotFound|Route53InvalidArgument|Route53InvalidInput|Route53DelegationSetNotAvailable|Route53DelegationSetAlreadyReusable|any, data: Route53CreateReusableDelegationSetResponse|any) => void): void;
      deleteHealthCheck(params: Route53DeleteHealthCheckRequest, callback: (err: Route53NoSuchHealthCheck|Route53HealthCheckInUse|Route53InvalidInput|any, data: Route53DeleteHealthCheckResponse|any) => void): void;
      deleteHostedZone(params: Route53DeleteHostedZoneRequest, callback: (err: Route53NoSuchHostedZone|Route53HostedZoneNotEmpty|Route53PriorRequestNotComplete|Route53InvalidInput|any, data: Route53DeleteHostedZoneResponse|any) => void): void;
      deleteReusableDelegationSet(params: Route53DeleteReusableDelegationSetRequest, callback: (err: Route53NoSuchDelegationSet|Route53DelegationSetInUse|Route53DelegationSetNotReusable|Route53InvalidInput|any, data: Route53DeleteReusableDelegationSetResponse|any) => void): void;
      disassociateVPCFromHostedZone(params: Route53DisassociateVPCFromHostedZoneRequest, callback: (err: Route53NoSuchHostedZone|Route53InvalidVPCId|Route53VPCAssociationNotFound|Route53LastVPCAssociation|Route53InvalidInput|any, data: Route53DisassociateVPCFromHostedZoneResponse|any) => void): void;
      getChange(params: Route53GetChangeRequest, callback: (err: Route53NoSuchChange|Route53InvalidInput|any, data: Route53GetChangeResponse|any) => void): void;
      getCheckerIpRanges(params: Route53GetCheckerIpRangesRequest, callback: (err: any, data: Route53GetCheckerIpRangesResponse|any) => void): void;
      getGeoLocation(params: Route53GetGeoLocationRequest, callback: (err: Route53NoSuchGeoLocation|Route53InvalidInput|any, data: Route53GetGeoLocationResponse|any) => void): void;
      getHealthCheck(params: Route53GetHealthCheckRequest, callback: (err: Route53NoSuchHealthCheck|Route53InvalidInput|Route53IncompatibleVersion|any, data: Route53GetHealthCheckResponse|any) => void): void;
      getHealthCheckCount(params: Route53GetHealthCheckCountRequest, callback: (err: any, data: Route53GetHealthCheckCountResponse|any) => void): void;
      getHealthCheckLastFailureReason(params: Route53GetHealthCheckLastFailureReasonRequest, callback: (err: Route53NoSuchHealthCheck|any, data: Route53GetHealthCheckLastFailureReasonResponse|any) => void): void;
      getHealthCheckStatus(params: Route53GetHealthCheckStatusRequest, callback: (err: Route53NoSuchHealthCheck|any, data: Route53GetHealthCheckStatusResponse|any) => void): void;
      getHostedZone(params: Route53GetHostedZoneRequest, callback: (err: Route53NoSuchHostedZone|Route53InvalidInput|any, data: Route53GetHostedZoneResponse|any) => void): void;
      getHostedZoneCount(params: Route53GetHostedZoneCountRequest, callback: (err: Route53InvalidInput|any, data: Route53GetHostedZoneCountResponse|any) => void): void;
      getReusableDelegationSet(params: Route53GetReusableDelegationSetRequest, callback: (err: Route53NoSuchDelegationSet|Route53DelegationSetNotReusable|Route53InvalidInput|any, data: Route53GetReusableDelegationSetResponse|any) => void): void;
      listGeoLocations(params: Route53ListGeoLocationsRequest, callback: (err: Route53InvalidInput|any, data: Route53ListGeoLocationsResponse|any) => void): void;
      listHealthChecks(params: Route53ListHealthChecksRequest, callback: (err: Route53InvalidInput|Route53IncompatibleVersion|any, data: Route53ListHealthChecksResponse|any) => void): void;
      listHostedZones(params: Route53ListHostedZonesRequest, callback: (err: Route53InvalidInput|Route53NoSuchDelegationSet|Route53DelegationSetNotReusable|any, data: Route53ListHostedZonesResponse|any) => void): void;
      listHostedZonesByName(params: Route53ListHostedZonesByNameRequest, callback: (err: Route53InvalidInput|Route53InvalidDomainName|any, data: Route53ListHostedZonesByNameResponse|any) => void): void;
      listResourceRecordSets(params: Route53ListResourceRecordSetsRequest, callback: (err: Route53NoSuchHostedZone|Route53InvalidInput|any, data: Route53ListResourceRecordSetsResponse|any) => void): void;
      listReusableDelegationSets(params: Route53ListReusableDelegationSetsRequest, callback: (err: Route53InvalidInput|any, data: Route53ListReusableDelegationSetsResponse|any) => void): void;
      listTagsForResource(params: Route53ListTagsForResourceRequest, callback: (err: Route53InvalidInput|Route53NoSuchHealthCheck|Route53NoSuchHostedZone|Route53PriorRequestNotComplete|Route53ThrottlingException|any, data: Route53ListTagsForResourceResponse|any) => void): void;
      listTagsForResources(params: Route53ListTagsForResourcesRequest, callback: (err: Route53InvalidInput|Route53NoSuchHealthCheck|Route53NoSuchHostedZone|Route53PriorRequestNotComplete|Route53ThrottlingException|any, data: Route53ListTagsForResourcesResponse|any) => void): void;
      updateHealthCheck(params: Route53UpdateHealthCheckRequest, callback: (err: Route53NoSuchHealthCheck|Route53InvalidInput|Route53HealthCheckVersionMismatch|any, data: Route53UpdateHealthCheckResponse|any) => void): void;
      updateHostedZoneComment(params: Route53UpdateHostedZoneCommentRequest, callback: (err: Route53NoSuchHostedZone|Route53InvalidInput|any, data: Route53UpdateHostedZoneCommentResponse|any) => void): void;
    }

    export type Route53AliasHealthEnabled = boolean;
    export interface Route53AliasTarget {
        HostedZoneId: Route53ResourceId;
        DNSName: Route53DNSName;
        EvaluateTargetHealth: Route53AliasHealthEnabled;
    }

    export type Route53AssociateVPCComment = string;
    export interface Route53AssociateVPCWithHostedZoneRequest {
        HostedZoneId: Route53ResourceId;
        VPC: Route53VPC;
        Comment?: Route53AssociateVPCComment;
    }

    export interface Route53AssociateVPCWithHostedZoneResponse {
        ChangeInfo: Route53ChangeInfo;
    }

    export interface Route53Change {
        Action: Route53ChangeAction;
        ResourceRecordSet: Route53ResourceRecordSet;
    }

    export type Route53ChangeAction = string;
    export interface Route53ChangeBatch {
        Comment?: Route53ResourceDescription;
        Changes: Route53Changes;
    }

    export interface Route53ChangeInfo {
        Id: Route53ResourceId;
        Status: Route53ChangeStatus;
        SubmittedAt: Route53TimeStamp;
        Comment?: Route53ResourceDescription;
    }

    export interface Route53ChangeResourceRecordSetsRequest {
        HostedZoneId: Route53ResourceId;
        ChangeBatch: Route53ChangeBatch;
    }

    export interface Route53ChangeResourceRecordSetsResponse {
        ChangeInfo: Route53ChangeInfo;
    }

    export type Route53ChangeStatus = string;
    export interface Route53ChangeTagsForResourceRequest {
        ResourceType: Route53TagResourceType;
        ResourceId: Route53TagResourceId;
        AddTags?: Route53TagList;
        RemoveTagKeys?: Route53TagKeyList;
    }

    export interface Route53ChangeTagsForResourceResponse {
    }

    export type Route53Changes = Array<Route53Change>;
    export type Route53CheckerIpRanges = Array<Route53IPAddressCidr>;
    export type Route53ChildHealthCheckList = Array<Route53HealthCheckId>; // max: 256
    export interface Route53ConflictingDomainExists {
        message?: Route53ErrorMessage;
    }

    export interface Route53CreateHealthCheckRequest {
        CallerReference: Route53HealthCheckNonce;
        HealthCheckConfig: Route53HealthCheckConfig;
    }

    export interface Route53CreateHealthCheckResponse {
        HealthCheck: Route53HealthCheck;
        Location: Route53ResourceURI;
    }

    export interface Route53CreateHostedZoneRequest {
        Name: Route53DNSName;
        VPC?: Route53VPC;
        CallerReference: Route53Nonce;
        HostedZoneConfig?: Route53HostedZoneConfig;
        DelegationSetId?: Route53ResourceId;
    }

    export interface Route53CreateHostedZoneResponse {
        HostedZone: Route53HostedZone;
        ChangeInfo: Route53ChangeInfo;
        DelegationSet: Route53DelegationSet;
        VPC?: Route53VPC;
        Location: Route53ResourceURI;
    }

    export interface Route53CreateReusableDelegationSetRequest {
        CallerReference: Route53Nonce;
        HostedZoneId?: Route53ResourceId;
    }

    export interface Route53CreateReusableDelegationSetResponse {
        DelegationSet: Route53DelegationSet;
        Location: Route53ResourceURI;
    }

    export type Route53DNSName = string;
    export interface Route53DelegationSet {
        Id?: Route53ResourceId;
        CallerReference?: Route53Nonce;
        NameServers: Route53DelegationSetNameServers;
    }

    export interface Route53DelegationSetAlreadyCreated {
        message?: Route53ErrorMessage;
    }

    export interface Route53DelegationSetAlreadyReusable {
        message?: Route53ErrorMessage;
    }

    export interface Route53DelegationSetInUse {
        message?: Route53ErrorMessage;
    }

    export type Route53DelegationSetNameServers = Array<Route53DNSName>;
    export interface Route53DelegationSetNotAvailable {
        message?: Route53ErrorMessage;
    }

    export interface Route53DelegationSetNotReusable {
        message?: Route53ErrorMessage;
    }

    export type Route53DelegationSets = Array<Route53DelegationSet>;
    export interface Route53DeleteHealthCheckRequest {
        HealthCheckId: Route53HealthCheckId;
    }

    export interface Route53DeleteHealthCheckResponse {
    }

    export interface Route53DeleteHostedZoneRequest {
        Id: Route53ResourceId;
    }

    export interface Route53DeleteHostedZoneResponse {
        ChangeInfo: Route53ChangeInfo;
    }

    export interface Route53DeleteReusableDelegationSetRequest {
        Id: Route53ResourceId;
    }

    export interface Route53DeleteReusableDelegationSetResponse {
    }

    export type Route53DisassociateVPCComment = string;
    export interface Route53DisassociateVPCFromHostedZoneRequest {
        HostedZoneId: Route53ResourceId;
        VPC: Route53VPC;
        Comment?: Route53DisassociateVPCComment;
    }

    export interface Route53DisassociateVPCFromHostedZoneResponse {
        ChangeInfo: Route53ChangeInfo;
    }

    export type Route53ErrorMessage = string;
    export type Route53ErrorMessages = Array<Route53ErrorMessage>;
    export type Route53FailureThreshold = number;
    export type Route53FullyQualifiedDomainName = string;
    export interface Route53GeoLocation {
        ContinentCode?: Route53GeoLocationContinentCode;
        CountryCode?: Route53GeoLocationCountryCode;
        SubdivisionCode?: Route53GeoLocationSubdivisionCode;
    }

    export type Route53GeoLocationContinentCode = string;
    export type Route53GeoLocationContinentName = string;
    export type Route53GeoLocationCountryCode = string;
    export type Route53GeoLocationCountryName = string;
    export interface Route53GeoLocationDetails {
        ContinentCode?: Route53GeoLocationContinentCode;
        ContinentName?: Route53GeoLocationContinentName;
        CountryCode?: Route53GeoLocationCountryCode;
        CountryName?: Route53GeoLocationCountryName;
        SubdivisionCode?: Route53GeoLocationSubdivisionCode;
        SubdivisionName?: Route53GeoLocationSubdivisionName;
    }

    export type Route53GeoLocationDetailsList = Array<Route53GeoLocationDetails>;
    export type Route53GeoLocationSubdivisionCode = string;
    export type Route53GeoLocationSubdivisionName = string;
    export interface Route53GetChangeRequest {
        Id: Route53ResourceId;
    }

    export interface Route53GetChangeResponse {
        ChangeInfo: Route53ChangeInfo;
    }

    export interface Route53GetCheckerIpRangesRequest {
    }

    export interface Route53GetCheckerIpRangesResponse {
        CheckerIpRanges: Route53CheckerIpRanges;
    }

    export interface Route53GetGeoLocationRequest {
        ContinentCode?: Route53GeoLocationContinentCode;
        CountryCode?: Route53GeoLocationCountryCode;
        SubdivisionCode?: Route53GeoLocationSubdivisionCode;
    }

    export interface Route53GetGeoLocationResponse {
        GeoLocationDetails: Route53GeoLocationDetails;
    }

    export interface Route53GetHealthCheckCountRequest {
    }

    export interface Route53GetHealthCheckCountResponse {
        HealthCheckCount: Route53HealthCheckCount;
    }

    export interface Route53GetHealthCheckLastFailureReasonRequest {
        HealthCheckId: Route53HealthCheckId;
    }

    export interface Route53GetHealthCheckLastFailureReasonResponse {
        HealthCheckObservations: Route53HealthCheckObservations;
    }

    export interface Route53GetHealthCheckRequest {
        HealthCheckId: Route53HealthCheckId;
    }

    export interface Route53GetHealthCheckResponse {
        HealthCheck: Route53HealthCheck;
    }

    export interface Route53GetHealthCheckStatusRequest {
        HealthCheckId: Route53HealthCheckId;
    }

    export interface Route53GetHealthCheckStatusResponse {
        HealthCheckObservations: Route53HealthCheckObservations;
    }

    export interface Route53GetHostedZoneCountRequest {
    }

    export interface Route53GetHostedZoneCountResponse {
        HostedZoneCount: Route53HostedZoneCount;
    }

    export interface Route53GetHostedZoneRequest {
        Id: Route53ResourceId;
    }

    export interface Route53GetHostedZoneResponse {
        HostedZone: Route53HostedZone;
        DelegationSet?: Route53DelegationSet;
        VPCs?: Route53VPCs;
    }

    export interface Route53GetReusableDelegationSetRequest {
        Id: Route53ResourceId;
    }

    export interface Route53GetReusableDelegationSetResponse {
        DelegationSet: Route53DelegationSet;
    }

    export interface Route53HealthCheck {
        Id: Route53HealthCheckId;
        CallerReference: Route53HealthCheckNonce;
        HealthCheckConfig: Route53HealthCheckConfig;
        HealthCheckVersion: Route53HealthCheckVersion;
    }

    export interface Route53HealthCheckAlreadyExists {
        message?: Route53ErrorMessage;
    }

    export interface Route53HealthCheckConfig {
        IPAddress?: Route53IPAddress;
        Port?: Route53Port;
        Type: Route53HealthCheckType;
        ResourcePath?: Route53ResourcePath;
        FullyQualifiedDomainName?: Route53FullyQualifiedDomainName;
        SearchString?: Route53SearchString;
        RequestInterval?: Route53RequestInterval;
        FailureThreshold?: Route53FailureThreshold;
        MeasureLatency?: Route53MeasureLatency;
        Inverted?: Route53Inverted;
        HealthThreshold?: Route53HealthThreshold;
        ChildHealthChecks?: Route53ChildHealthCheckList;
    }

    export type Route53HealthCheckCount = number;
    export type Route53HealthCheckId = string;
    export interface Route53HealthCheckInUse {
        message?: Route53ErrorMessage;
    }

    export type Route53HealthCheckNonce = string;
    export interface Route53HealthCheckObservation {
        IPAddress?: Route53IPAddress;
        StatusReport?: Route53StatusReport;
    }

    export type Route53HealthCheckObservations = Array<Route53HealthCheckObservation>;
    export type Route53HealthCheckType = string;
    export type Route53HealthCheckVersion = number;
    export interface Route53HealthCheckVersionMismatch {
        message?: Route53ErrorMessage;
    }

    export type Route53HealthChecks = Array<Route53HealthCheck>;
    export type Route53HealthThreshold = number;
    export interface Route53HostedZone {
        Id: Route53ResourceId;
        Name: Route53DNSName;
        CallerReference: Route53Nonce;
        Config?: Route53HostedZoneConfig;
        ResourceRecordSetCount?: Route53HostedZoneRRSetCount;
    }

    export interface Route53HostedZoneAlreadyExists {
        message?: Route53ErrorMessage;
    }

    export interface Route53HostedZoneConfig {
        Comment?: Route53ResourceDescription;
        PrivateZone?: Route53IsPrivateZone;
    }

    export type Route53HostedZoneCount = number;
    export interface Route53HostedZoneNotEmpty {
        message?: Route53ErrorMessage;
    }

    export interface Route53HostedZoneNotFound {
        message?: Route53ErrorMessage;
    }

    export type Route53HostedZoneRRSetCount = number;
    export type Route53HostedZones = Array<Route53HostedZone>;
    export type Route53IPAddress = string; // pattern: "^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$"
    export type Route53IPAddressCidr = string;
    export interface Route53IncompatibleVersion {
        message?: Route53ErrorMessage;
    }

    export interface Route53InvalidArgument {
        message?: Route53ErrorMessage;
    }

    export interface Route53InvalidChangeBatch {
        messages?: Route53ErrorMessages;
    }

    export interface Route53InvalidDomainName {
        message?: Route53ErrorMessage;
    }

    export interface Route53InvalidInput {
        message?: Route53ErrorMessage;
    }

    export interface Route53InvalidVPCId {
        message?: Route53ErrorMessage;
    }

    export type Route53Inverted = boolean;
    export type Route53IsPrivateZone = boolean;
    export interface Route53LastVPCAssociation {
        message?: Route53ErrorMessage;
    }

    export interface Route53LimitsExceeded {
        message?: Route53ErrorMessage;
    }

    export interface Route53ListGeoLocationsRequest {
        StartContinentCode?: Route53GeoLocationContinentCode;
        StartCountryCode?: Route53GeoLocationCountryCode;
        StartSubdivisionCode?: Route53GeoLocationSubdivisionCode;
        MaxItems?: Route53PageMaxItems;
    }

    export interface Route53ListGeoLocationsResponse {
        GeoLocationDetailsList: Route53GeoLocationDetailsList;
        IsTruncated: Route53PageTruncated;
        NextContinentCode?: Route53GeoLocationContinentCode;
        NextCountryCode?: Route53GeoLocationCountryCode;
        NextSubdivisionCode?: Route53GeoLocationSubdivisionCode;
        MaxItems: Route53PageMaxItems;
    }

    export interface Route53ListHealthChecksRequest {
        Marker?: Route53PageMarker;
        MaxItems?: Route53PageMaxItems;
    }

    export interface Route53ListHealthChecksResponse {
        HealthChecks: Route53HealthChecks;
        Marker: Route53PageMarker;
        IsTruncated: Route53PageTruncated;
        NextMarker?: Route53PageMarker;
        MaxItems: Route53PageMaxItems;
    }

    export interface Route53ListHostedZonesByNameRequest {
        DNSName?: Route53DNSName;
        HostedZoneId?: Route53ResourceId;
        MaxItems?: Route53PageMaxItems;
    }

    export interface Route53ListHostedZonesByNameResponse {
        HostedZones: Route53HostedZones;
        DNSName?: Route53DNSName;
        HostedZoneId?: Route53ResourceId;
        IsTruncated: Route53PageTruncated;
        NextDNSName?: Route53DNSName;
        NextHostedZoneId?: Route53ResourceId;
        MaxItems: Route53PageMaxItems;
    }

    export interface Route53ListHostedZonesRequest {
        Marker?: Route53PageMarker;
        MaxItems?: Route53PageMaxItems;
        DelegationSetId?: Route53ResourceId;
    }

    export interface Route53ListHostedZonesResponse {
        HostedZones: Route53HostedZones;
        Marker: Route53PageMarker;
        IsTruncated: Route53PageTruncated;
        NextMarker?: Route53PageMarker;
        MaxItems: Route53PageMaxItems;
    }

    export interface Route53ListResourceRecordSetsRequest {
        HostedZoneId: Route53ResourceId;
        StartRecordName?: Route53DNSName;
        StartRecordType?: Route53RRType;
        StartRecordIdentifier?: Route53ResourceRecordSetIdentifier;
        MaxItems?: Route53PageMaxItems;
    }

    export interface Route53ListResourceRecordSetsResponse {
        ResourceRecordSets: Route53ResourceRecordSets;
        IsTruncated: Route53PageTruncated;
        NextRecordName?: Route53DNSName;
        NextRecordType?: Route53RRType;
        NextRecordIdentifier?: Route53ResourceRecordSetIdentifier;
        MaxItems: Route53PageMaxItems;
    }

    export interface Route53ListReusableDelegationSetsRequest {
        Marker?: Route53PageMarker;
        MaxItems?: Route53PageMaxItems;
    }

    export interface Route53ListReusableDelegationSetsResponse {
        DelegationSets: Route53DelegationSets;
        Marker: Route53PageMarker;
        IsTruncated: Route53PageTruncated;
        NextMarker?: Route53PageMarker;
        MaxItems: Route53PageMaxItems;
    }

    export interface Route53ListTagsForResourceRequest {
        ResourceType: Route53TagResourceType;
        ResourceId: Route53TagResourceId;
    }

    export interface Route53ListTagsForResourceResponse {
        ResourceTagSet: Route53ResourceTagSet;
    }

    export interface Route53ListTagsForResourcesRequest {
        ResourceType: Route53TagResourceType;
        ResourceIds: Route53TagResourceIdList;
    }

    export interface Route53ListTagsForResourcesResponse {
        ResourceTagSets: Route53ResourceTagSetList;
    }

    export type Route53MeasureLatency = boolean;
    export interface Route53NoSuchChange {
        message?: Route53ErrorMessage;
    }

    export interface Route53NoSuchDelegationSet {
        message?: Route53ErrorMessage;
    }

    export interface Route53NoSuchGeoLocation {
        message?: Route53ErrorMessage;
    }

    export interface Route53NoSuchHealthCheck {
        message?: Route53ErrorMessage;
    }

    export interface Route53NoSuchHostedZone {
        message?: Route53ErrorMessage;
    }

    export type Route53Nonce = string;
    export type Route53PageMarker = string;
    export type Route53PageMaxItems = string;
    export type Route53PageTruncated = boolean;
    export type Route53Port = number;
    export interface Route53PriorRequestNotComplete {
        message?: Route53ErrorMessage;
    }

    export interface Route53PublicZoneVPCAssociation {
        message?: Route53ErrorMessage;
    }

    export type Route53RData = string;
    export type Route53RRType = string;
    export type Route53RequestInterval = number;
    export type Route53ResourceDescription = string;
    export type Route53ResourceId = string;
    export type Route53ResourcePath = string;
    export interface Route53ResourceRecord {
        Value: Route53RData;
    }

    export interface Route53ResourceRecordSet {
        Name: Route53DNSName;
        Type: Route53RRType;
        SetIdentifier?: Route53ResourceRecordSetIdentifier;
        Weight?: Route53ResourceRecordSetWeight;
        Region?: Route53ResourceRecordSetRegion;
        GeoLocation?: Route53GeoLocation;
        Failover?: Route53ResourceRecordSetFailover;
        TTL?: Route53TTL;
        ResourceRecords?: Route53ResourceRecords;
        AliasTarget?: Route53AliasTarget;
        HealthCheckId?: Route53HealthCheckId;
    }

    export type Route53ResourceRecordSetFailover = string;
    export type Route53ResourceRecordSetIdentifier = string;
    export type Route53ResourceRecordSetRegion = string;
    export type Route53ResourceRecordSetWeight = number;
    export type Route53ResourceRecordSets = Array<Route53ResourceRecordSet>;
    export type Route53ResourceRecords = Array<Route53ResourceRecord>;
    export interface Route53ResourceTagSet {
        ResourceType?: Route53TagResourceType;
        ResourceId?: Route53TagResourceId;
        Tags?: Route53TagList;
    }

    export type Route53ResourceTagSetList = Array<Route53ResourceTagSet>;
    export type Route53ResourceURI = string;
    export type Route53SearchString = string;
    export type Route53Status = string;
    export interface Route53StatusReport {
        Status?: Route53Status;
        CheckedTime?: Route53TimeStamp;
    }

    export type Route53TTL = number;
    export interface Route53Tag {
        Key?: Route53TagKey;
        Value?: Route53TagValue;
    }

    export type Route53TagKey = string;
    export type Route53TagKeyList = Array<Route53TagKey>; // max: 10
    export type Route53TagList = Array<Route53Tag>; // max: 10
    export type Route53TagResourceId = string;
    export type Route53TagResourceIdList = Array<Route53TagResourceId>; // max: 10
    export type Route53TagResourceType = string;
    export type Route53TagValue = string;
    export interface Route53ThrottlingException {
        message?: Route53ErrorMessage;
    }

    export type Route53TimeStamp = number;
    export interface Route53TooManyHealthChecks {
        message?: Route53ErrorMessage;
    }

    export interface Route53TooManyHostedZones {
        message?: Route53ErrorMessage;
    }

    export interface Route53UpdateHealthCheckRequest {
        HealthCheckId: Route53HealthCheckId;
        HealthCheckVersion?: Route53HealthCheckVersion;
        IPAddress?: Route53IPAddress;
        Port?: Route53Port;
        ResourcePath?: Route53ResourcePath;
        FullyQualifiedDomainName?: Route53FullyQualifiedDomainName;
        SearchString?: Route53SearchString;
        FailureThreshold?: Route53FailureThreshold;
        Inverted?: Route53Inverted;
        HealthThreshold?: Route53HealthThreshold;
        ChildHealthChecks?: Route53ChildHealthCheckList;
    }

    export interface Route53UpdateHealthCheckResponse {
        HealthCheck: Route53HealthCheck;
    }

    export interface Route53UpdateHostedZoneCommentRequest {
        Id: Route53ResourceId;
        Comment?: Route53ResourceDescription;
    }

    export interface Route53UpdateHostedZoneCommentResponse {
        HostedZone: Route53HostedZone;
    }

    export interface Route53VPC {
        VPCRegion?: Route53VPCRegion;
        VPCId?: Route53VPCId;
    }

    export interface Route53VPCAssociationNotFound {
        message?: Route53ErrorMessage;
    }

    export type Route53VPCId = string;
    export type Route53VPCRegion = string;
    export type Route53VPCs = Array<Route53VPC>;
}
