// Type definitions for aws-sdk - Amazon Route 53
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

///<reference path="./aws-sdk-common.d.ts" />

declare module "aws-sdk" {

    /* 
     * apiVersion: 2013-04-01
     * endpointPrefix: route53
     * serviceAbbreviation: Route 53
     * signatureVersion: v4
     * protocol: rest-xml
     */
    export class Route53 extends Service {
      constructor(options?: any);
      endpoint: Endpoint;
      associateVPCWithHostedZone(params: Route53.AssociateVPCWithHostedZoneRequest, callback?: (err: Route53.NoSuchHostedZone|Route53.InvalidVPCId|Route53.InvalidInput|Route53.PublicZoneVPCAssociation|Route53.ConflictingDomainExists|any, data: Route53.AssociateVPCWithHostedZoneResponse|any) => void): Request;
      changeResourceRecordSets(params: Route53.ChangeResourceRecordSetsRequest, callback?: (err: Route53.NoSuchHostedZone|Route53.NoSuchHealthCheck|Route53.InvalidChangeBatch|Route53.InvalidInput|Route53.PriorRequestNotComplete|any, data: Route53.ChangeResourceRecordSetsResponse|any) => void): Request;
      changeTagsForResource(params: Route53.ChangeTagsForResourceRequest, callback?: (err: Route53.InvalidInput|Route53.NoSuchHealthCheck|Route53.NoSuchHostedZone|Route53.PriorRequestNotComplete|Route53.ThrottlingException|any, data: Route53.ChangeTagsForResourceResponse|any) => void): Request;
      createHealthCheck(params: Route53.CreateHealthCheckRequest, callback?: (err: Route53.TooManyHealthChecks|Route53.HealthCheckAlreadyExists|Route53.InvalidInput|any, data: Route53.CreateHealthCheckResponse|any) => void): Request;
      createHostedZone(params: Route53.CreateHostedZoneRequest, callback?: (err: Route53.InvalidDomainName|Route53.HostedZoneAlreadyExists|Route53.TooManyHostedZones|Route53.InvalidVPCId|Route53.InvalidInput|Route53.DelegationSetNotAvailable|Route53.ConflictingDomainExists|Route53.NoSuchDelegationSet|Route53.DelegationSetNotReusable|any, data: Route53.CreateHostedZoneResponse|any) => void): Request;
      createReusableDelegationSet(params: Route53.CreateReusableDelegationSetRequest, callback?: (err: Route53.DelegationSetAlreadyCreated|Route53.LimitsExceeded|Route53.HostedZoneNotFound|Route53.InvalidArgument|Route53.InvalidInput|Route53.DelegationSetNotAvailable|Route53.DelegationSetAlreadyReusable|any, data: Route53.CreateReusableDelegationSetResponse|any) => void): Request;
      deleteHealthCheck(params: Route53.DeleteHealthCheckRequest, callback?: (err: Route53.NoSuchHealthCheck|Route53.HealthCheckInUse|Route53.InvalidInput|any, data: Route53.DeleteHealthCheckResponse|any) => void): Request;
      deleteHostedZone(params: Route53.DeleteHostedZoneRequest, callback?: (err: Route53.NoSuchHostedZone|Route53.HostedZoneNotEmpty|Route53.PriorRequestNotComplete|Route53.InvalidInput|any, data: Route53.DeleteHostedZoneResponse|any) => void): Request;
      deleteReusableDelegationSet(params: Route53.DeleteReusableDelegationSetRequest, callback?: (err: Route53.NoSuchDelegationSet|Route53.DelegationSetInUse|Route53.DelegationSetNotReusable|Route53.InvalidInput|any, data: Route53.DeleteReusableDelegationSetResponse|any) => void): Request;
      disassociateVPCFromHostedZone(params: Route53.DisassociateVPCFromHostedZoneRequest, callback?: (err: Route53.NoSuchHostedZone|Route53.InvalidVPCId|Route53.VPCAssociationNotFound|Route53.LastVPCAssociation|Route53.InvalidInput|any, data: Route53.DisassociateVPCFromHostedZoneResponse|any) => void): Request;
      getChange(params: Route53.GetChangeRequest, callback?: (err: Route53.NoSuchChange|Route53.InvalidInput|any, data: Route53.GetChangeResponse|any) => void): Request;
      getCheckerIpRanges(params: Route53.GetCheckerIpRangesRequest, callback?: (err: any, data: Route53.GetCheckerIpRangesResponse|any) => void): Request;
      getGeoLocation(params: Route53.GetGeoLocationRequest, callback?: (err: Route53.NoSuchGeoLocation|Route53.InvalidInput|any, data: Route53.GetGeoLocationResponse|any) => void): Request;
      getHealthCheck(params: Route53.GetHealthCheckRequest, callback?: (err: Route53.NoSuchHealthCheck|Route53.InvalidInput|Route53.IncompatibleVersion|any, data: Route53.GetHealthCheckResponse|any) => void): Request;
      getHealthCheckCount(params: Route53.GetHealthCheckCountRequest, callback?: (err: any, data: Route53.GetHealthCheckCountResponse|any) => void): Request;
      getHealthCheckLastFailureReason(params: Route53.GetHealthCheckLastFailureReasonRequest, callback?: (err: Route53.NoSuchHealthCheck|any, data: Route53.GetHealthCheckLastFailureReasonResponse|any) => void): Request;
      getHealthCheckStatus(params: Route53.GetHealthCheckStatusRequest, callback?: (err: Route53.NoSuchHealthCheck|any, data: Route53.GetHealthCheckStatusResponse|any) => void): Request;
      getHostedZone(params: Route53.GetHostedZoneRequest, callback?: (err: Route53.NoSuchHostedZone|Route53.InvalidInput|any, data: Route53.GetHostedZoneResponse|any) => void): Request;
      getHostedZoneCount(params: Route53.GetHostedZoneCountRequest, callback?: (err: Route53.InvalidInput|any, data: Route53.GetHostedZoneCountResponse|any) => void): Request;
      getReusableDelegationSet(params: Route53.GetReusableDelegationSetRequest, callback?: (err: Route53.NoSuchDelegationSet|Route53.DelegationSetNotReusable|Route53.InvalidInput|any, data: Route53.GetReusableDelegationSetResponse|any) => void): Request;
      listGeoLocations(params: Route53.ListGeoLocationsRequest, callback?: (err: Route53.InvalidInput|any, data: Route53.ListGeoLocationsResponse|any) => void): Request;
      listHealthChecks(params: Route53.ListHealthChecksRequest, callback?: (err: Route53.InvalidInput|Route53.IncompatibleVersion|any, data: Route53.ListHealthChecksResponse|any) => void): Request;
      listHostedZones(params: Route53.ListHostedZonesRequest, callback?: (err: Route53.InvalidInput|Route53.NoSuchDelegationSet|Route53.DelegationSetNotReusable|any, data: Route53.ListHostedZonesResponse|any) => void): Request;
      listHostedZonesByName(params: Route53.ListHostedZonesByNameRequest, callback?: (err: Route53.InvalidInput|Route53.InvalidDomainName|any, data: Route53.ListHostedZonesByNameResponse|any) => void): Request;
      listResourceRecordSets(params: Route53.ListResourceRecordSetsRequest, callback?: (err: Route53.NoSuchHostedZone|Route53.InvalidInput|any, data: Route53.ListResourceRecordSetsResponse|any) => void): Request;
      listReusableDelegationSets(params: Route53.ListReusableDelegationSetsRequest, callback?: (err: Route53.InvalidInput|any, data: Route53.ListReusableDelegationSetsResponse|any) => void): Request;
      listTagsForResource(params: Route53.ListTagsForResourceRequest, callback?: (err: Route53.InvalidInput|Route53.NoSuchHealthCheck|Route53.NoSuchHostedZone|Route53.PriorRequestNotComplete|Route53.ThrottlingException|any, data: Route53.ListTagsForResourceResponse|any) => void): Request;
      listTagsForResources(params: Route53.ListTagsForResourcesRequest, callback?: (err: Route53.InvalidInput|Route53.NoSuchHealthCheck|Route53.NoSuchHostedZone|Route53.PriorRequestNotComplete|Route53.ThrottlingException|any, data: Route53.ListTagsForResourcesResponse|any) => void): Request;
      updateHealthCheck(params: Route53.UpdateHealthCheckRequest, callback?: (err: Route53.NoSuchHealthCheck|Route53.InvalidInput|Route53.HealthCheckVersionMismatch|any, data: Route53.UpdateHealthCheckResponse|any) => void): Request;
      updateHostedZoneComment(params: Route53.UpdateHostedZoneCommentRequest, callback?: (err: Route53.NoSuchHostedZone|Route53.InvalidInput|any, data: Route53.UpdateHostedZoneCommentResponse|any) => void): Request;
    }
    
    export module Route53 {
        export type AliasHealthEnabled = boolean;
        export type AssociateVPCComment = string;
        export type ChangeAction = string;
        export type ChangeStatus = string;
        export type Changes = Change[];    // min: 1
        export type CheckerIpRanges = IPAddressCidr[];
        export type ChildHealthCheckList = HealthCheckId[];    // max: 256
        export type DNSName = string;    // max: 1024
        export type DelegationSetNameServers = DNSName[];    // min: 1
        export type DelegationSets = DelegationSet[];
        export type DisassociateVPCComment = string;
        export type ErrorMessage = string;
        export type ErrorMessages = ErrorMessage[];
        export type FailureThreshold = number;    // max: 10, min: 1
        export type FullyQualifiedDomainName = string;    // max: 255
        export type GeoLocationContinentCode = string;    // max: 2, min: 2
        export type GeoLocationContinentName = string;    // max: 32, min: 1
        export type GeoLocationCountryCode = string;    // max: 2, min: 1
        export type GeoLocationCountryName = string;    // max: 64, min: 1
        export type GeoLocationDetailsList = GeoLocationDetails[];
        export type GeoLocationSubdivisionCode = string;    // max: 3, min: 1
        export type GeoLocationSubdivisionName = string;    // max: 64, min: 1
        export type HealthCheckCount = number;
        export type HealthCheckId = string;    // max: 64
        export type HealthCheckNonce = string;    // max: 64, min: 1
        export type HealthCheckObservations = HealthCheckObservation[];
        export type HealthCheckType = string;
        export type HealthCheckVersion = number;    // min: 1
        export type HealthChecks = HealthCheck[];
        export type HealthThreshold = number;    // max: 256
        export type HostedZoneCount = number;
        export type HostedZoneRRSetCount = number;
        export type HostedZones = HostedZone[];
        export type IPAddress = string;    // pattern: &quot;^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$&quot;, max: 15
        export type IPAddressCidr = string;
        export type Inverted = boolean;
        export type IsPrivateZone = boolean;
        export type MeasureLatency = boolean;
        export type Nonce = string;    // max: 128, min: 1
        export type PageMarker = string;    // max: 64
        export type PageMaxItems = string;
        export type PageTruncated = boolean;
        export type Port = number;    // max: 65535, min: 1
        export type RData = string;    // max: 4000
        export type RRType = string;
        export type RequestInterval = number;    // max: 30, min: 10
        export type ResourceDescription = string;    // max: 256
        export type ResourceId = string;    // max: 32
        export type ResourcePath = string;    // max: 255
        export type ResourceRecordSetFailover = string;
        export type ResourceRecordSetIdentifier = string;    // max: 128, min: 1
        export type ResourceRecordSetRegion = string;    // max: 64, min: 1
        export type ResourceRecordSetWeight = number;    // max: 255
        export type ResourceRecordSets = ResourceRecordSet[];
        export type ResourceRecords = ResourceRecord[];    // min: 1
        export type ResourceTagSetList = ResourceTagSet[];
        export type ResourceURI = string;    // max: 1024
        export type SearchString = string;    // max: 255
        export type Status = string;
        export type TTL = number;    // max: 2147483647
        export type TagKey = string;    // max: 128
        export type TagKeyList = TagKey[];    // max: 10, min: 1
        export type TagList = Tag[];    // max: 10, min: 1
        export type TagResourceId = string;    // max: 64
        export type TagResourceIdList = TagResourceId[];    // max: 10, min: 1
        export type TagResourceType = string;
        export type TagValue = string;    // max: 256
        export type TimeStamp = number;
        export type VPCId = string;    // max: 1024
        export type VPCRegion = string;    // max: 64, min: 1
        export type VPCs = VPC[];    // min: 1

        export interface AliasTarget {
            HostedZoneId: ResourceId;            
            DNSName: DNSName;            
            EvaluateTargetHealth: AliasHealthEnabled;            
        }
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
        export interface ChangeTagsForResourceRequest {
            ResourceType: TagResourceType;            
            ResourceId: TagResourceId;            
            AddTags?: TagList;            
            RemoveTagKeys?: TagKeyList;            
        }
        export interface ChangeTagsForResourceResponse {
        }
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
        export interface DelegationSetNotAvailable {
            message?: ErrorMessage;            
        }
        export interface DelegationSetNotReusable {
            message?: ErrorMessage;            
        }
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
        export interface DisassociateVPCFromHostedZoneRequest {
            HostedZoneId: ResourceId;            
            VPC: VPC;            
            Comment?: DisassociateVPCComment;            
        }
        export interface DisassociateVPCFromHostedZoneResponse {
            ChangeInfo: ChangeInfo;            
        }
        export interface GeoLocation {
            ContinentCode?: GeoLocationContinentCode;            
            CountryCode?: GeoLocationCountryCode;            
            SubdivisionCode?: GeoLocationSubdivisionCode;            
        }
        export interface GeoLocationDetails {
            ContinentCode?: GeoLocationContinentCode;            
            ContinentName?: GeoLocationContinentName;            
            CountryCode?: GeoLocationCountryCode;            
            CountryName?: GeoLocationCountryName;            
            SubdivisionCode?: GeoLocationSubdivisionCode;            
            SubdivisionName?: GeoLocationSubdivisionName;            
        }
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
            MeasureLatency?: MeasureLatency;            
            Inverted?: Inverted;            
            HealthThreshold?: HealthThreshold;            
            ChildHealthChecks?: ChildHealthCheckList;            
        }
        export interface HealthCheckInUse {
            message?: ErrorMessage;            
        }
        export interface HealthCheckObservation {
            IPAddress?: IPAddress;            
            StatusReport?: StatusReport;            
        }
        export interface HealthCheckVersionMismatch {
            message?: ErrorMessage;            
        }
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
        export interface HostedZoneNotEmpty {
            message?: ErrorMessage;            
        }
        export interface HostedZoneNotFound {
            message?: ErrorMessage;            
        }
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
        export interface PriorRequestNotComplete {
            message?: ErrorMessage;            
        }
        export interface PublicZoneVPCAssociation {
            message?: ErrorMessage;            
        }
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
        export interface ResourceTagSet {
            ResourceType?: TagResourceType;            
            ResourceId?: TagResourceId;            
            Tags?: TagList;            
        }
        export interface StatusReport {
            Status?: Status;            
            CheckedTime?: TimeStamp;            
        }
        export interface Tag {
            Key?: TagKey;            
            Value?: TagValue;            
        }
        export interface ThrottlingException {
            message?: ErrorMessage;            
        }
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
            Inverted?: Inverted;            
            HealthThreshold?: HealthThreshold;            
            ChildHealthChecks?: ChildHealthCheckList;            
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

    }
}
