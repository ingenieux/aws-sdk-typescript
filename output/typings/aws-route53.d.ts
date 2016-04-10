// Type definitions for aws-sdk - Amazon Route 53
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

// COMMENTED <reference path="./aws-sdk.d.ts" />

declare module "aws-sdk" {

  /**
    * apiVersion: 2013-04-01
    * endpointPrefix: route53
    * serviceAbbreviation: Route 53
    * signatureVersion: v4
    * protocol: rest-xml
    *
    * 
    *
    */
  export class Route53 extends Service {
    constructor(options?: any);
    endpoint: Endpoint;
    /**
     * This action associates a VPC with an hosted zone.

To associate a VPC with an hosted zone, send a POST request to the / Route 53
API version /hostedzone/ hosted zone ID /associatevpc resource. The request body
must include a document with a AssociateVPCWithHostedZoneRequest element. The
response returns the AssociateVPCWithHostedZoneResponse element that contains 
ChangeInfo for you to track the progress of the 
AssociateVPCWithHostedZoneRequest you made. See GetChange operation for how to
track the progress of your change.
     *
     * @error NoSuchHostedZone   
     * @error InvalidVPCId   
     * @error InvalidInput   
     * @error PublicZoneVPCAssociation   
     * @error ConflictingDomainExists   
     * @error LimitsExceeded   
     */
    associateVPCWithHostedZone(params: Route53.AssociateVPCWithHostedZoneRequest, callback?: (err: Route53.NoSuchHostedZone | Route53.InvalidVPCId | Route53.InvalidInput | Route53.PublicZoneVPCAssociation | Route53.ConflictingDomainExists | Route53.LimitsExceeded | any, data: Route53.AssociateVPCWithHostedZoneResponse | any) => void): Request;
    /**
     * Use this action to create or change your authoritative DNS information. To use
this action, send a POST request to the / Route 53 API version /hostedzone/ 
hosted Zone ID /rrset resource. The request body must include a document with a 
ChangeResourceRecordSetsRequest element.

Changes are a list of change items and are considered transactional. For more
information on transactional changes, also known as change batches, see POST
ChangeResourceRecordSets
[http://docs.aws.amazon.com/Route53/latest/APIReference/API_ChangeResourceRecordSets.html] 
in the Amazon Route 53 API Reference .

Due to the nature of transactional changes, you cannot delete the same resource
record set more than once in a single change batch. If you attempt to delete the
same change batch more than once, Amazon Route 53 returns an InvalidChangeBatch 
error.In response to a ChangeResourceRecordSets request, your DNS data is changed on
all Amazon Route 53 DNS servers. Initially, the status of a change is PENDING .
This means the change has not yet propagated to all the authoritative Amazon
Route 53 DNS servers. When the change is propagated to all hosts, the change
returns a status of INSYNC .

Note the following limitations on a ChangeResourceRecordSets request:

 &amp;#42; A request cannot contain more than 100 Change elements.
 * A request cannot contain more than 1000 ResourceRecord elements.
 * The sum of the number of characters (including spaces) in all Value elements
   in a request cannot exceed 32,000 characters.
     *
     * @error NoSuchHostedZone   
     * @error NoSuchHealthCheck   
     * @error InvalidChangeBatch   
     * @error InvalidInput   
     * @error PriorRequestNotComplete   
     */
    changeResourceRecordSets(params: Route53.ChangeResourceRecordSetsRequest, callback?: (err: Route53.NoSuchHostedZone | Route53.NoSuchHealthCheck | Route53.InvalidChangeBatch | Route53.InvalidInput | Route53.PriorRequestNotComplete | any, data: Route53.ChangeResourceRecordSetsResponse | any) => void): Request;
    /**
     * 
     *
     * @error InvalidInput   
     * @error NoSuchHealthCheck   
     * @error NoSuchHostedZone   
     * @error PriorRequestNotComplete   
     * @error ThrottlingException   
     */
    changeTagsForResource(params: Route53.ChangeTagsForResourceRequest, callback?: (err: Route53.InvalidInput | Route53.NoSuchHealthCheck | Route53.NoSuchHostedZone | Route53.PriorRequestNotComplete | Route53.ThrottlingException | any, data: Route53.ChangeTagsForResourceResponse | any) => void): Request;
    /**
     * This action creates a new health check.

To create a new health check, send a POST request to the / Route 53 API version 
/healthcheck resource. The request body must include a document with a 
CreateHealthCheckRequest element. The response returns the 
CreateHealthCheckResponse element that contains metadata about the health check.
     *
     * @error TooManyHealthChecks   
     * @error HealthCheckAlreadyExists   
     * @error InvalidInput   
     */
    createHealthCheck(params: Route53.CreateHealthCheckRequest, callback?: (err: Route53.TooManyHealthChecks | Route53.HealthCheckAlreadyExists | Route53.InvalidInput | any, data: Route53.CreateHealthCheckResponse | any) => void): Request;
    /**
     * This action creates a new hosted zone.

To create a new hosted zone, send a POST request to the / Route 53 API version 
/hostedzone resource. The request body must include a document with a 
CreateHostedZoneRequest element. The response returns the 
CreateHostedZoneResponse element that contains metadata about the hosted zone.

Amazon Route 53 automatically creates a default SOA record and four NS records
for the zone. The NS records in the hosted zone are the name servers you give
your registrar to delegate your domain to. For more information about SOA and NS
records, see NS and SOA Records that Amazon Route 53 Creates for a Hosted Zone
[http://docs.aws.amazon.com/Route53/latest/DeveloperGuide/SOA-NSrecords.html] in
the Amazon Route 53 Developer Guide .

When you create a zone, its initial status is PENDING . This means that it is
not yet available on all DNS servers. The status of the zone changes to INSYNC 
when the NS and SOA records are available on all Amazon Route 53 DNS servers.

When trying to create a hosted zone using a reusable delegation set, you could
specify an optional DelegationSetId, and Route53 would assign those 4 NS records
for the zone, instead of alloting a new one.
     *
     * @error InvalidDomainName   
     * @error HostedZoneAlreadyExists   
     * @error TooManyHostedZones   
     * @error InvalidVPCId   
     * @error InvalidInput   
     * @error DelegationSetNotAvailable   
     * @error ConflictingDomainExists   
     * @error NoSuchDelegationSet   
     * @error DelegationSetNotReusable   
     */
    createHostedZone(params: Route53.CreateHostedZoneRequest, callback?: (err: Route53.InvalidDomainName | Route53.HostedZoneAlreadyExists | Route53.TooManyHostedZones | Route53.InvalidVPCId | Route53.InvalidInput | Route53.DelegationSetNotAvailable | Route53.ConflictingDomainExists | Route53.NoSuchDelegationSet | Route53.DelegationSetNotReusable | any, data: Route53.CreateHostedZoneResponse | any) => void): Request;
    /**
     * This action creates a reusable delegationSet.

To create a new reusable delegationSet, send a POST request to the / Route 53
API version /delegationset resource. The request body must include a document
with a CreateReusableDelegationSetRequest element. The response returns the 
CreateReusableDelegationSetResponse element that contains metadata about the
delegationSet.

If the optional parameter HostedZoneId is specified, it marks the delegationSet
associated with that particular hosted zone as reusable.
     *
     * @error DelegationSetAlreadyCreated   
     * @error LimitsExceeded   
     * @error HostedZoneNotFound   
     * @error InvalidArgument   
     * @error InvalidInput   
     * @error DelegationSetNotAvailable   
     * @error DelegationSetAlreadyReusable   
     */
    createReusableDelegationSet(params: Route53.CreateReusableDelegationSetRequest, callback?: (err: Route53.DelegationSetAlreadyCreated | Route53.LimitsExceeded | Route53.HostedZoneNotFound | Route53.InvalidArgument | Route53.InvalidInput | Route53.DelegationSetNotAvailable | Route53.DelegationSetAlreadyReusable | any, data: Route53.CreateReusableDelegationSetResponse | any) => void): Request;
    /**
     * Creates a traffic policy, which you use to create multiple DNS resource record
sets for one domain name (such as example.com) or one subdomain name (such as
www.example.com).

To create a traffic policy, send a POST request to the / Route 53 API version 
/trafficpolicy resource. The request body must include a document with a 
CreateTrafficPolicyRequest element. The response includes the 
CreateTrafficPolicyResponse element, which contains information about the new
traffic policy.
     *
     * @error InvalidInput   
     * @error TooManyTrafficPolicies   
     * @error TrafficPolicyAlreadyExists   
     * @error InvalidTrafficPolicyDocument   
     */
    createTrafficPolicy(params: Route53.CreateTrafficPolicyRequest, callback?: (err: Route53.InvalidInput | Route53.TooManyTrafficPolicies | Route53.TrafficPolicyAlreadyExists | Route53.InvalidTrafficPolicyDocument | any, data: Route53.CreateTrafficPolicyResponse | any) => void): Request;
    /**
     * Creates resource record sets in a specified hosted zone based on the settings in
a specified traffic policy version. In addition, CreateTrafficPolicyInstance 
associates the resource record sets with a specified domain name (such as
example.com) or subdomain name (such as www.example.com). Amazon Route 53
responds to DNS queries for the domain or subdomain name by using the resource
record sets that CreateTrafficPolicyInstance created.

To create a traffic policy instance, send a POST request to the / Route 53 API
version /trafficpolicyinstance resource. The request body must include a
document with a CreateTrafficPolicyRequest element. The response returns the 
CreateTrafficPolicyInstanceResponse element, which contains information about
the traffic policy instance.
     *
     * @error NoSuchHostedZone   
     * @error InvalidInput   
     * @error TooManyTrafficPolicyInstances   
     * @error NoSuchTrafficPolicy   
     * @error TrafficPolicyInstanceAlreadyExists   
     */
    createTrafficPolicyInstance(params: Route53.CreateTrafficPolicyInstanceRequest, callback?: (err: Route53.NoSuchHostedZone | Route53.InvalidInput | Route53.TooManyTrafficPolicyInstances | Route53.NoSuchTrafficPolicy | Route53.TrafficPolicyInstanceAlreadyExists | any, data: Route53.CreateTrafficPolicyInstanceResponse | any) => void): Request;
    /**
     * Creates a new version of an existing traffic policy. When you create a new
version of a traffic policy, you specify the ID of the traffic policy that you
want to update and a JSON-formatted document that describes the new version.

You use traffic policies to create multiple DNS resource record sets for one
domain name (such as example.com) or one subdomain name (such as
www.example.com).

To create a new version, send a POST request to the / Route 53 API version 
/trafficpolicy/ resource. The request body includes a document with a 
CreateTrafficPolicyVersionRequest element. The response returns the 
CreateTrafficPolicyVersionResponse element, which contains information about the
new version of the traffic policy.
     *
     * @error NoSuchTrafficPolicy   
     * @error InvalidInput   
     * @error ConcurrentModification   
     * @error InvalidTrafficPolicyDocument   
     */
    createTrafficPolicyVersion(params: Route53.CreateTrafficPolicyVersionRequest, callback?: (err: Route53.NoSuchTrafficPolicy | Route53.InvalidInput | Route53.ConcurrentModification | Route53.InvalidTrafficPolicyDocument | any, data: Route53.CreateTrafficPolicyVersionResponse | any) => void): Request;
    /**
     * This action deletes a health check. To delete a health check, send a DELETE 
request to the / Route 53 API version /healthcheck/ health check ID resource.

You can delete a health check only if there are no resource record sets
associated with this health check. If resource record sets are associated with
this health check, you must disassociate them before you can delete your health
check. If you try to delete a health check that is associated with resource
record sets, Amazon Route 53 will deny your request with a HealthCheckInUse 
error. For information about disassociating the records from your health check,
see ChangeResourceRecordSets .
     *
     * @error NoSuchHealthCheck   
     * @error HealthCheckInUse   
     * @error InvalidInput   
     */
    deleteHealthCheck(params: Route53.DeleteHealthCheckRequest, callback?: (err: Route53.NoSuchHealthCheck | Route53.HealthCheckInUse | Route53.InvalidInput | any, data: Route53.DeleteHealthCheckResponse | any) => void): Request;
    /**
     * This action deletes a hosted zone. To delete a hosted zone, send a DELETE 
request to the / Route 53 API version /hostedzone/ hosted zone ID resource.

For more information about deleting a hosted zone, see Deleting a Hosted Zone
[http://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DeleteHostedZone.html] 
in the Amazon Route 53 Developer Guide .

You can delete a hosted zone only if there are no resource record sets other
than the default SOA record and NS resource record sets. If your hosted zone
contains other resource record sets, you must delete them before you can delete
your hosted zone. If you try to delete a hosted zone that contains other
resource record sets, Amazon Route 53 will deny your request with a 
HostedZoneNotEmpty error. For information about deleting records from your
hosted zone, see ChangeResourceRecordSets .
     *
     * @error NoSuchHostedZone   
     * @error HostedZoneNotEmpty   
     * @error PriorRequestNotComplete   
     * @error InvalidInput   
     */
    deleteHostedZone(params: Route53.DeleteHostedZoneRequest, callback?: (err: Route53.NoSuchHostedZone | Route53.HostedZoneNotEmpty | Route53.PriorRequestNotComplete | Route53.InvalidInput | any, data: Route53.DeleteHostedZoneResponse | any) => void): Request;
    /**
     * This action deletes a reusable delegation set. To delete a reusable delegation
set, send a DELETE request to the / Route 53 API version /delegationset/ 
delegation set ID resource.

You can delete a reusable delegation set only if there are no associated hosted
zones. If your reusable delegation set contains associated hosted zones, you
must delete them before you can delete your reusable delegation set. If you try
to delete a reusable delegation set that contains associated hosted zones,
Amazon Route 53 will deny your request with a DelegationSetInUse error.
     *
     * @error NoSuchDelegationSet   
     * @error DelegationSetInUse   
     * @error DelegationSetNotReusable   
     * @error InvalidInput   
     */
    deleteReusableDelegationSet(params: Route53.DeleteReusableDelegationSetRequest, callback?: (err: Route53.NoSuchDelegationSet | Route53.DelegationSetInUse | Route53.DelegationSetNotReusable | Route53.InvalidInput | any, data: Route53.DeleteReusableDelegationSetResponse | any) => void): Request;
    /**
     * Deletes a traffic policy. To delete a traffic policy, send a DELETE request to
the / Route 53 API version /trafficpolicy resource.
     *
     * @error NoSuchTrafficPolicy   
     * @error InvalidInput   
     * @error TrafficPolicyInUse   
     * @error ConcurrentModification   
     */
    deleteTrafficPolicy(params: Route53.DeleteTrafficPolicyRequest, callback?: (err: Route53.NoSuchTrafficPolicy | Route53.InvalidInput | Route53.TrafficPolicyInUse | Route53.ConcurrentModification | any, data: Route53.DeleteTrafficPolicyResponse | any) => void): Request;
    /**
     * Deletes a traffic policy instance and all of the resource record sets that
Amazon Route 53 created when you created the instance.

To delete a traffic policy instance, send a DELETE request to the / Route 53 API
version /trafficpolicy/ traffic policy instance ID resource.

When you delete a traffic policy instance, Amazon Route 53 also deletes all of
the resource record sets that were created when you created the traffic policy
instance.
     *
     * @error NoSuchTrafficPolicyInstance   
     * @error InvalidInput   
     * @error PriorRequestNotComplete   
     */
    deleteTrafficPolicyInstance(params: Route53.DeleteTrafficPolicyInstanceRequest, callback?: (err: Route53.NoSuchTrafficPolicyInstance | Route53.InvalidInput | Route53.PriorRequestNotComplete | any, data: Route53.DeleteTrafficPolicyInstanceResponse | any) => void): Request;
    /**
     * This action disassociates a VPC from an hosted zone.

To disassociate a VPC to a hosted zone, send a POST request to the / Route 53
API version /hostedzone/ hosted zone ID /disassociatevpc resource. The request
body must include a document with a DisassociateVPCFromHostedZoneRequest 
element. The response returns the DisassociateVPCFromHostedZoneResponse element
that contains ChangeInfo for you to track the progress of the 
DisassociateVPCFromHostedZoneRequest you made. See GetChange operation for how
to track the progress of your change.
     *
     * @error NoSuchHostedZone   
     * @error InvalidVPCId   
     * @error VPCAssociationNotFound   
     * @error LastVPCAssociation   
     * @error InvalidInput   
     */
    disassociateVPCFromHostedZone(params: Route53.DisassociateVPCFromHostedZoneRequest, callback?: (err: Route53.NoSuchHostedZone | Route53.InvalidVPCId | Route53.VPCAssociationNotFound | Route53.LastVPCAssociation | Route53.InvalidInput | any, data: Route53.DisassociateVPCFromHostedZoneResponse | any) => void): Request;
    /**
     * This action returns the current status of a change batch request. The status is
one of the following values:

- PENDING indicates that the changes in this request have not replicated to all
Amazon Route 53 DNS servers. This is the initial status of all change batch
requests.

- INSYNC indicates that the changes have replicated to all Amazon Route 53 DNS
servers.
     *
     * @error NoSuchChange   
     * @error InvalidInput   
     */
    getChange(params: Route53.GetChangeRequest, callback?: (err: Route53.NoSuchChange | Route53.InvalidInput | any, data: Route53.GetChangeResponse | any) => void): Request;
    /**
     * This action returns the status and changes of a change batch request.
     *
     * @error NoSuchChange   
     * @error InvalidInput   
     */
    getChangeDetails(params: Route53.GetChangeDetailsRequest, callback?: (err: Route53.NoSuchChange | Route53.InvalidInput | any, data: Route53.GetChangeDetailsResponse | any) => void): Request;
    /**
     * To retrieve a list of the IP ranges used by Amazon Route 53 health checkers to
check the health of your resources, send a GET request to the / Route 53 API
version /checkeripranges resource. You can use these IP addresses to configure
router and firewall rules to allow health checkers to check the health of your
resources.
     *
     */
    getCheckerIpRanges(params: Route53.GetCheckerIpRangesRequest, callback?: (err: any, data: Route53.GetCheckerIpRangesResponse | any) => void): Request;
    /**
     * To retrieve a single geo location, send a GET request to the / Route 53 API
version /geolocation resource with one of these options: continentcode |
countrycode | countrycode and subdivisioncode.
     *
     * @error NoSuchGeoLocation   
     * @error InvalidInput   
     */
    getGeoLocation(params: Route53.GetGeoLocationRequest, callback?: (err: Route53.NoSuchGeoLocation | Route53.InvalidInput | any, data: Route53.GetGeoLocationResponse | any) => void): Request;
    /**
     * To retrieve the health check, send a GET request to the / Route 53 API version 
/healthcheck/ health check ID resource.
     *
     * @error NoSuchHealthCheck   
     * @error InvalidInput   
     * @error IncompatibleVersion   
     */
    getHealthCheck(params: Route53.GetHealthCheckRequest, callback?: (err: Route53.NoSuchHealthCheck | Route53.InvalidInput | Route53.IncompatibleVersion | any, data: Route53.GetHealthCheckResponse | any) => void): Request;
    /**
     * To retrieve a count of all your health checks, send a GET request to the / Route
53 API version /healthcheckcount resource.
     *
     */
    getHealthCheckCount(params: Route53.GetHealthCheckCountRequest, callback?: (err: any, data: Route53.GetHealthCheckCountResponse | any) => void): Request;
    /**
     * If you want to learn why a health check is currently failing or why it failed
most recently (if at all), you can get the failure reason for the most recent
failure. Send a GET request to the / Route 53 API version /healthcheck/ health
check ID /lastfailurereason resource.
     *
     * @error NoSuchHealthCheck   
     * @error InvalidInput   
     */
    getHealthCheckLastFailureReason(params: Route53.GetHealthCheckLastFailureReasonRequest, callback?: (err: Route53.NoSuchHealthCheck | Route53.InvalidInput | any, data: Route53.GetHealthCheckLastFailureReasonResponse | any) => void): Request;
    /**
     * To retrieve the health check status, send a GET request to the / Route 53 API
version /healthcheck/ health check ID /status resource. You can use this call to
get a health check&#x27;s current status.
     *
     * @error NoSuchHealthCheck   
     * @error InvalidInput   
     */
    getHealthCheckStatus(params: Route53.GetHealthCheckStatusRequest, callback?: (err: Route53.NoSuchHealthCheck | Route53.InvalidInput | any, data: Route53.GetHealthCheckStatusResponse | any) => void): Request;
    /**
     * To retrieve the delegation set for a hosted zone, send a GET request to the / 
Route 53 API version /hostedzone/ hosted zone ID resource. The delegation set is
the four Amazon Route 53 name servers that were assigned to the hosted zone when
you created it.
     *
     * @error NoSuchHostedZone   
     * @error InvalidInput   
     */
    getHostedZone(params: Route53.GetHostedZoneRequest, callback?: (err: Route53.NoSuchHostedZone | Route53.InvalidInput | any, data: Route53.GetHostedZoneResponse | any) => void): Request;
    /**
     * To retrieve a count of all your hosted zones, send a GET request to the / Route
53 API version /hostedzonecount resource.
     *
     * @error InvalidInput   
     */
    getHostedZoneCount(params: Route53.GetHostedZoneCountRequest, callback?: (err: Route53.InvalidInput | any, data: Route53.GetHostedZoneCountResponse | any) => void): Request;
    /**
     * To retrieve the reusable delegation set, send a GET request to the / Route 53
API version /delegationset/ delegation set ID resource.
     *
     * @error NoSuchDelegationSet   
     * @error DelegationSetNotReusable   
     * @error InvalidInput   
     */
    getReusableDelegationSet(params: Route53.GetReusableDelegationSetRequest, callback?: (err: Route53.NoSuchDelegationSet | Route53.DelegationSetNotReusable | Route53.InvalidInput | any, data: Route53.GetReusableDelegationSetResponse | any) => void): Request;
    /**
     * Gets information about a specific traffic policy version. To get the
information, send a GET request to the / Route 53 API version /trafficpolicy 
resource.
     *
     * @error NoSuchTrafficPolicy   
     * @error InvalidInput   
     */
    getTrafficPolicy(params: Route53.GetTrafficPolicyRequest, callback?: (err: Route53.NoSuchTrafficPolicy | Route53.InvalidInput | any, data: Route53.GetTrafficPolicyResponse | any) => void): Request;
    /**
     * Gets information about a specified traffic policy instance.

To get information about the traffic policy instance, send a GET request to the 
/ Route 53 API version /trafficpolicyinstance resource.

After you submit a CreateTrafficPolicyInstance or an UpdateTrafficPolicyInstance 
request, there&#x27;s a brief delay while Amazon Route 53 creates the resource record
sets that are specified in the traffic policy definition. For more information,
see the State response element.
     *
     * @error NoSuchTrafficPolicyInstance   
     * @error InvalidInput   
     */
    getTrafficPolicyInstance(params: Route53.GetTrafficPolicyInstanceRequest, callback?: (err: Route53.NoSuchTrafficPolicyInstance | Route53.InvalidInput | any, data: Route53.GetTrafficPolicyInstanceResponse | any) => void): Request;
    /**
     * Gets the number of traffic policy instances that are associated with the current
AWS account.

To get the number of traffic policy instances, send a GET request to the / Route
53 API version /trafficpolicyinstancecount resource.
     *
     */
    getTrafficPolicyInstanceCount(params: Route53.GetTrafficPolicyInstanceCountRequest, callback?: (err: any, data: Route53.GetTrafficPolicyInstanceCountResponse | any) => void): Request;
    /**
     * This action gets the list of ChangeBatches in a given time period for a given
hosted zone.
     *
     * @error NoSuchHostedZone   
     * @error InvalidInput   
     */
    listChangeBatchesByHostedZone(params: Route53.ListChangeBatchesByHostedZoneRequest, callback?: (err: Route53.NoSuchHostedZone | Route53.InvalidInput | any, data: Route53.ListChangeBatchesByHostedZoneResponse | any) => void): Request;
    /**
     * This action gets the list of ChangeBatches in a given time period for a given
hosted zone and RRSet.
     *
     * @error NoSuchHostedZone   
     * @error InvalidInput   
     */
    listChangeBatchesByRRSet(params: Route53.ListChangeBatchesByRRSetRequest, callback?: (err: Route53.NoSuchHostedZone | Route53.InvalidInput | any, data: Route53.ListChangeBatchesByRRSetResponse | any) => void): Request;
    /**
     * To retrieve a list of supported geo locations, send a GET request to the / Route
53 API version /geolocations resource. The response to this request includes a 
GeoLocationDetailsList element with zero, one, or multiple GeoLocationDetails 
child elements. The list is sorted by country code, and then subdivision code,
followed by continents at the end of the list.

By default, the list of geo locations is displayed on a single page. You can
control the length of the page that is displayed by using the MaxItems 
parameter. If the list is truncated, IsTruncated will be set to true and a
combination of NextContinentCode, NextCountryCode, NextSubdivisionCode will be
populated. You can pass these as parameters to StartContinentCode,
StartCountryCode, StartSubdivisionCode to control the geo location that the list
begins with.
     *
     * @error InvalidInput   
     */
    listGeoLocations(params: Route53.ListGeoLocationsRequest, callback?: (err: Route53.InvalidInput | any, data: Route53.ListGeoLocationsResponse | any) => void): Request;
    /**
     * To retrieve a list of your health checks, send a GET request to the / Route 53
API version /healthcheck resource. The response to this request includes a 
HealthChecks element with zero, one, or multiple HealthCheck child elements. By
default, the list of health checks is displayed on a single page. You can
control the length of the page that is displayed by using the MaxItems 
parameter. You can use the Marker parameter to control the health check that the
list begins with.

Amazon Route 53 returns a maximum of 100 items. If you set MaxItems to a value
greater than 100, Amazon Route 53 returns only the first 100.
     *
     * @error InvalidInput   
     * @error IncompatibleVersion   
     */
    listHealthChecks(params: Route53.ListHealthChecksRequest, callback?: (err: Route53.InvalidInput | Route53.IncompatibleVersion | any, data: Route53.ListHealthChecksResponse | any) => void): Request;
    /**
     * To retrieve a list of your hosted zones, send a GET request to the / Route 53
API version /hostedzone resource. The response to this request includes a 
HostedZones element with zero, one, or multiple HostedZone child elements. By
default, the list of hosted zones is displayed on a single page. You can control
the length of the page that is displayed by using the MaxItems parameter. You
can use the Marker parameter to control the hosted zone that the list begins
with.

Amazon Route 53 returns a maximum of 100 items. If you set MaxItems to a value
greater than 100, Amazon Route 53 returns only the first 100.
     *
     * @error InvalidInput   
     * @error NoSuchDelegationSet   
     * @error DelegationSetNotReusable   
     */
    listHostedZones(params: Route53.ListHostedZonesRequest, callback?: (err: Route53.InvalidInput | Route53.NoSuchDelegationSet | Route53.DelegationSetNotReusable | any, data: Route53.ListHostedZonesResponse | any) => void): Request;
    /**
     * To retrieve a list of your hosted zones in lexicographic order, send a GET 
request to the / Route 53 API version /hostedzonesbyname resource. The response
to this request includes a HostedZones element with zero or more HostedZone 
child elements lexicographically ordered by DNS name. By default, the list of
hosted zones is displayed on a single page. You can control the length of the
page that is displayed by using the MaxItems parameter. You can use the DNSName 
and HostedZoneId parameters to control the hosted zone that the list begins
with.

Amazon Route 53 returns a maximum of 100 items. If you set MaxItems to a value
greater than 100, Amazon Route 53 returns only the first 100.
     *
     * @error InvalidInput   
     * @error InvalidDomainName   
     */
    listHostedZonesByName(params: Route53.ListHostedZonesByNameRequest, callback?: (err: Route53.InvalidInput | Route53.InvalidDomainName | any, data: Route53.ListHostedZonesByNameResponse | any) => void): Request;
    /**
     * Imagine all the resource record sets in a zone listed out in front of you.
Imagine them sorted lexicographically first by DNS name (with the labels
reversed, like &quot;com.amazon.www&quot; for example), and secondarily, lexicographically
by record type. This operation retrieves at most MaxItems resource record sets
from this list, in order, starting at a position specified by the Name and Type
arguments:

 &amp;#42; If both Name and Type are omitted, this means start the results at the first
   RRSET in the HostedZone.
 * If Name is specified but Type is omitted, this means start the results at the
   first RRSET in the list whose name is greater than or equal to Name.
 * If both Name and Type are specified, this means start the results at the
   first RRSET in the list whose name is greater than or equal to Name and whose
   type is greater than or equal to Type.
 * It is an error to specify the Type but not the Name.

Use ListResourceRecordSets to retrieve a single known record set by specifying
the record set&#x27;s name and type, and setting MaxItems = 1

To retrieve all the records in a HostedZone, first pause any processes making
calls to ChangeResourceRecordSets. Initially call ListResourceRecordSets without
a Name and Type to get the first page of record sets. For subsequent calls, set
Name and Type to the NextName and NextType values returned by the previous
response.

In the presence of concurrent ChangeResourceRecordSets calls, there is no
consistency of results across calls to ListResourceRecordSets. The only way to
get a consistent multi-page snapshot of all RRSETs in a zone is to stop making
changes while pagination is in progress.

However, the results from ListResourceRecordSets are consistent within a page.
If MakeChange calls are taking place concurrently, the result of each one will
either be completely visible in your results or not at all. You will not see
partial changes, or changes that do not ultimately succeed. (This follows from
the fact that MakeChange is atomic)

The results from ListResourceRecordSets are strongly consistent with
ChangeResourceRecordSets. To be precise, if a single process makes a call to
ChangeResourceRecordSets and receives a successful response, the effects of that
change will be visible in a subsequent call to ListResourceRecordSets by that
process.
     *
     * @error NoSuchHostedZone   
     * @error InvalidInput   
     */
    listResourceRecordSets(params: Route53.ListResourceRecordSetsRequest, callback?: (err: Route53.NoSuchHostedZone | Route53.InvalidInput | any, data: Route53.ListResourceRecordSetsResponse | any) => void): Request;
    /**
     * To retrieve a list of your reusable delegation sets, send a GET request to the / 
Route 53 API version /delegationset resource. The response to this request
includes a DelegationSets element with zero, one, or multiple DelegationSet 
child elements. By default, the list of delegation sets is displayed on a single
page. You can control the length of the page that is displayed by using the 
MaxItems parameter. You can use the Marker parameter to control the delegation
set that the list begins with.

Amazon Route 53 returns a maximum of 100 items. If you set MaxItems to a value
greater than 100, Amazon Route 53 returns only the first 100.
     *
     * @error InvalidInput   
     */
    listReusableDelegationSets(params: Route53.ListReusableDelegationSetsRequest, callback?: (err: Route53.InvalidInput | any, data: Route53.ListReusableDelegationSetsResponse | any) => void): Request;
    /**
     * 
     *
     * @error InvalidInput   
     * @error NoSuchHealthCheck   
     * @error NoSuchHostedZone   
     * @error PriorRequestNotComplete   
     * @error ThrottlingException   
     */
    listTagsForResource(params: Route53.ListTagsForResourceRequest, callback?: (err: Route53.InvalidInput | Route53.NoSuchHealthCheck | Route53.NoSuchHostedZone | Route53.PriorRequestNotComplete | Route53.ThrottlingException | any, data: Route53.ListTagsForResourceResponse | any) => void): Request;
    /**
     * 
     *
     * @error InvalidInput   
     * @error NoSuchHealthCheck   
     * @error NoSuchHostedZone   
     * @error PriorRequestNotComplete   
     * @error ThrottlingException   
     */
    listTagsForResources(params: Route53.ListTagsForResourcesRequest, callback?: (err: Route53.InvalidInput | Route53.NoSuchHealthCheck | Route53.NoSuchHostedZone | Route53.PriorRequestNotComplete | Route53.ThrottlingException | any, data: Route53.ListTagsForResourcesResponse | any) => void): Request;
    /**
     * Gets information about the latest version for every traffic policy that is
associated with the current AWS account. To get the information, send a GET 
request to the / Route 53 API version /trafficpolicy resource.

Amazon Route 53 returns a maximum of 100 items in each response. If you have a
lot of traffic policies, you can use the maxitems parameter to list them in
groups of up to 100.

The response includes three values that help you navigate from one group of 
maxitems traffic policies to the next:

 &amp;#42; IsTruncated
 * If the value of IsTruncated in the response is true , there are more traffic
   policies associated with the current AWS account.
 * If IsTruncated is false , this response includes the last traffic policy that
   is associated with the current account.
 * TrafficPolicyIdMarker
 * If IsTruncated is true , TrafficPolicyIdMarker is the ID of the first traffic
   policy in the next group of MaxItems traffic policies. If you want to list
   more traffic policies, make another call to ListTrafficPolicies , and specify
   the value of the TrafficPolicyIdMarker element from the response in the 
   TrafficPolicyIdMarker request parameter.
 * If IsTruncated is false , the TrafficPolicyIdMarker element is omitted from
   the response.
 * MaxItems
 * The value that you specified for the MaxItems parameter in the request that
   produced the current response.
     *
     * @error InvalidInput   
     */
    listTrafficPolicies(params: Route53.ListTrafficPoliciesRequest, callback?: (err: Route53.InvalidInput | any, data: Route53.ListTrafficPoliciesResponse | any) => void): Request;
    /**
     * Gets information about the traffic policy instances that you created by using
the current AWS account.

After you submit an UpdateTrafficPolicyInstance request, there&#x27;s a brief delay
while Amazon Route 53 creates the resource record sets that are specified in the
traffic policy definition. For more information, see the State response element.
To get information about the traffic policy instances that are associated with
the current AWS account, send a GET request to the / Route 53 API version 
/trafficpolicyinstance resource.

Amazon Route 53 returns a maximum of 100 items in each response. If you have a
lot of traffic policy instances, you can use the MaxItems parameter to list them
in groups of up to 100.

The response includes five values that help you navigate from one group of 
MaxItems traffic policy instances to the next:

 &amp;#42; IsTruncated
 * If the value of IsTruncated in the response is true , there are more traffic
   policy instances associated with the current AWS account.
 * If IsTruncated is false , this response includes the last traffic policy
   instance that is associated with the current account.
 * MaxItems
 * The value that you specified for the MaxItems parameter in the request that
   produced the current response.
 * HostedZoneIdMarker , TrafficPolicyInstanceNameMarker , and 
   TrafficPolicyInstanceTypeMarker
 * If IsTruncated is true , these three values in the response represent the
   first traffic policy instance in the next group of MaxItems traffic policy
   instances. To list more traffic policy instances, make another call to 
   ListTrafficPolicyInstances , and specify these values in the corresponding
   request parameters.
 * If IsTruncated is false , all three elements are omitted from the response.
     *
     * @error InvalidInput   
     * @error NoSuchTrafficPolicyInstance   
     */
    listTrafficPolicyInstances(params: Route53.ListTrafficPolicyInstancesRequest, callback?: (err: Route53.InvalidInput | Route53.NoSuchTrafficPolicyInstance | any, data: Route53.ListTrafficPolicyInstancesResponse | any) => void): Request;
    /**
     * Gets information about the traffic policy instances that you created in a
specified hosted zone.

After you submit an UpdateTrafficPolicyInstance request, there&#x27;s a brief delay
while Amazon Route 53 creates the resource record sets that are specified in the
traffic policy definition. For more information, see the State response element.
To get information about the traffic policy instances that you created in a
specified hosted zone, send a GET request to the / Route 53 API version 
/trafficpolicyinstance resource and include the ID of the hosted zone.

Amazon Route 53 returns a maximum of 100 items in each response. If you have a
lot of traffic policy instances, you can use the MaxItems parameter to list them
in groups of up to 100.

The response includes four values that help you navigate from one group of 
MaxItems traffic policy instances to the next:

 &amp;#42; IsTruncated
 * If the value of IsTruncated in the response is true , there are more traffic
   policy instances associated with the current AWS account.
 * If IsTruncated is false , this response includes the last traffic policy
   instance that is associated with the current account.
 * MaxItems
 * The value that you specified for the MaxItems parameter in the request that
   produced the current response.
 * TrafficPolicyInstanceNameMarker and TrafficPolicyInstanceTypeMarker
 * If IsTruncated is true , these two values in the response represent the first
   traffic policy instance in the next group of MaxItems traffic policy
   instances. To list more traffic policy instances, make another call to 
   ListTrafficPolicyInstancesByHostedZone , and specify these values in the
   corresponding request parameters.
 * If IsTruncated is false , all three elements are omitted from the response.
     *
     * @error InvalidInput   
     * @error NoSuchTrafficPolicyInstance   
     * @error NoSuchHostedZone   
     */
    listTrafficPolicyInstancesByHostedZone(params: Route53.ListTrafficPolicyInstancesByHostedZoneRequest, callback?: (err: Route53.InvalidInput | Route53.NoSuchTrafficPolicyInstance | Route53.NoSuchHostedZone | any, data: Route53.ListTrafficPolicyInstancesByHostedZoneResponse | any) => void): Request;
    /**
     * Gets information about the traffic policy instances that you created by using a
specify traffic policy version.

After you submit a CreateTrafficPolicyInstance or an UpdateTrafficPolicyInstance 
request, there&#x27;s a brief delay while Amazon Route 53 creates the resource record
sets that are specified in the traffic policy definition. For more information,
see the State response element.To get information about the traffic policy
instances that you created by using a specify traffic policy version, send a GET 
request to the / Route 53 API version /trafficpolicyinstance resource and
include the ID and version of the traffic policy.

Amazon Route 53 returns a maximum of 100 items in each response. If you have a
lot of traffic policy instances, you can use the MaxItems parameter to list them
in groups of up to 100.

The response includes five values that help you navigate from one group of 
MaxItems traffic policy instances to the next:

 &amp;#42; IsTruncatedIf the value of IsTruncated in the response is true , there are more traffic
   policy instances associated with the specified traffic policy.
   
   If IsTruncated is false , this response includes the last traffic policy
   instance that is associated with the specified traffic policy.
   
   
 * MaxItemsThe value that you specified for the MaxItems parameter in the request that
   produced the current response.
   
   
 * HostedZoneIdMarker , TrafficPolicyInstanceNameMarker , and 
   TrafficPolicyInstanceTypeMarkerIf IsTruncated is true , these values in the response represent the first
   traffic policy instance in the next group of MaxItems traffic policy
   instances. To list more traffic policy instances, make another call to 
   ListTrafficPolicyInstancesByPolicy , and specify these values in the
   corresponding request parameters.
   
   If IsTruncated is false , all three elements are omitted from the response.
     *
     * @error InvalidInput   
     * @error NoSuchTrafficPolicyInstance   
     * @error NoSuchTrafficPolicy   
     */
    listTrafficPolicyInstancesByPolicy(params: Route53.ListTrafficPolicyInstancesByPolicyRequest, callback?: (err: Route53.InvalidInput | Route53.NoSuchTrafficPolicyInstance | Route53.NoSuchTrafficPolicy | any, data: Route53.ListTrafficPolicyInstancesByPolicyResponse | any) => void): Request;
    /**
     * Gets information about all of the versions for a specified traffic policy. 
ListTrafficPolicyVersions lists only versions that have not been deleted.

Amazon Route 53 returns a maximum of 100 items in each response. If you have a
lot of traffic policies, you can use the maxitems parameter to list them in
groups of up to 100.

The response includes three values that help you navigate from one group of 
maxitems maxitems traffic policies to the next:

 &amp;#42; IsTruncated
 * If the value of IsTruncated in the response is true , there are more traffic
   policy versions associated with the specified traffic policy.
 * If IsTruncated is false , this response includes the last traffic policy
   version that is associated with the specified traffic policy.
 * TrafficPolicyVersionMarker
 * The ID of the next traffic policy version that is associated with the current
   AWS account. If you want to list more traffic policies, make another call to 
   ListTrafficPolicyVersions , and specify the value of the 
   TrafficPolicyVersionMarker element in the TrafficPolicyVersionMarker request
   parameter.
 * If IsTruncated is false , Amazon Route 53 omits the 
   TrafficPolicyVersionMarker element from the response.
 * MaxItems
 * The value that you specified for the MaxItems parameter in the request that
   produced the current response.
     *
     * @error InvalidInput   
     * @error NoSuchTrafficPolicy   
     */
    listTrafficPolicyVersions(params: Route53.ListTrafficPolicyVersionsRequest, callback?: (err: Route53.InvalidInput | Route53.NoSuchTrafficPolicy | any, data: Route53.ListTrafficPolicyVersionsResponse | any) => void): Request;
    /**
     * This action updates an existing health check.

To update a health check, send a POST request to the / Route 53 API version 
/healthcheck/ health check ID resource. The request body must include a document
with an UpdateHealthCheckRequest element. The response returns an 
UpdateHealthCheckResponse element, which contains metadata about the health
check.
     *
     * @error NoSuchHealthCheck   
     * @error InvalidInput   
     * @error HealthCheckVersionMismatch   
     */
    updateHealthCheck(params: Route53.UpdateHealthCheckRequest, callback?: (err: Route53.NoSuchHealthCheck | Route53.InvalidInput | Route53.HealthCheckVersionMismatch | any, data: Route53.UpdateHealthCheckResponse | any) => void): Request;
    /**
     * To update the hosted zone comment, send a POST request to the / Route 53 API
version /hostedzone/ hosted zone ID resource. The request body must include a
document with a UpdateHostedZoneCommentRequest element. The response to this
request includes the modified HostedZone element.

The comment can have a maximum length of 256 characters.
     *
     * @error NoSuchHostedZone   
     * @error InvalidInput   
     */
    updateHostedZoneComment(params: Route53.UpdateHostedZoneCommentRequest, callback?: (err: Route53.NoSuchHostedZone | Route53.InvalidInput | any, data: Route53.UpdateHostedZoneCommentResponse | any) => void): Request;
    /**
     * Updates the comment for a specified traffic policy version.

To update the comment, send a POST request to the / Route 53 API version 
/trafficpolicy/ resource.

The request body must include a document with an 
UpdateTrafficPolicyCommentRequest element.
     *
     * @error InvalidInput   
     * @error NoSuchTrafficPolicy   
     * @error ConcurrentModification   
     */
    updateTrafficPolicyComment(params: Route53.UpdateTrafficPolicyCommentRequest, callback?: (err: Route53.InvalidInput | Route53.NoSuchTrafficPolicy | Route53.ConcurrentModification | any, data: Route53.UpdateTrafficPolicyCommentResponse | any) => void): Request;
    /**
     * Updates the resource record sets in a specified hosted zone that were created
based on the settings in a specified traffic policy version.

The DNS type of the resource record sets that you&#x27;re updating must match the DNS
type in the JSON document that is associated with the traffic policy version
that you&#x27;re using to update the traffic policy instance.When you update a
traffic policy instance, Amazon Route 53 continues to respond to DNS queries for
the root resource record set name (such as example.com) while it replaces one
group of resource record sets with another. Amazon Route 53 performs the
following operations:

 1. Amazon Route 53 creates a new group of resource record sets based on the
    specified traffic policy. This is true regardless of how substantial the
    differences are between the existing resource record sets and the new
    resource record sets.
 2. When all of the new resource record sets have been created, Amazon Route 53
    starts to respond to DNS queries for the root resource record set name (such
    as example.com) by using the new resource record sets.
 3. Amazon Route 53 deletes the old group of resource record sets that are
    associated with the root resource record set name.

To update a traffic policy instance, send a POST request to the / Route 53 API
version /trafficpolicyinstance/ traffic policy ID resource. The request body
must include a document with an UpdateTrafficPolicyInstanceRequest element.
     *
     * @error InvalidInput   
     * @error NoSuchTrafficPolicy   
     * @error NoSuchTrafficPolicyInstance   
     * @error PriorRequestNotComplete   
     * @error ConflictingTypes   
     */
    updateTrafficPolicyInstance(params: Route53.UpdateTrafficPolicyInstanceRequest, callback?: (err: Route53.InvalidInput | Route53.NoSuchTrafficPolicy | Route53.NoSuchTrafficPolicyInstance | Route53.PriorRequestNotComplete | Route53.ConflictingTypes | any, data: Route53.UpdateTrafficPolicyInstanceResponse | any) => void): Request;

  }

  export module Route53 {

    export type AWSAccountID = string;

    export type AlarmName = string;

    export type AliasHealthEnabled = boolean;

    export type AssociateVPCComment = string;

    export type ChangeAction = string;

    export type ChangeBatchRecords = ChangeBatchRecord[];

    export type ChangeStatus = string;

    export type Changes = Change[];

    export type CheckerIpRanges = IPAddressCidr[];

    export type ChildHealthCheckList = HealthCheckId[];

    export type CloudWatchRegion = string;

    export type ComparisonOperator = string;

    export type DNSName = string;

    export type Date = string;

    export type DelegationSetNameServers = DNSName[];

    export type DelegationSets = DelegationSet[];

    export type DimensionField = string;

    export type DimensionList = Dimension[];

    export type DisassociateVPCComment = string;

    export type EnableSNI = boolean;

    export type ErrorMessage = string;

    export type ErrorMessages = ErrorMessage[];

    export type EvaluationPeriods = number;

    export type FailureThreshold = number;

    export type FullyQualifiedDomainName = string;

    export type GeoLocationContinentCode = string;

    export type GeoLocationContinentName = string;

    export type GeoLocationCountryCode = string;

    export type GeoLocationCountryName = string;

    export type GeoLocationDetailsList = GeoLocationDetails[];

    export type GeoLocationSubdivisionCode = string;

    export type GeoLocationSubdivisionName = string;

    export type HealthCheckCount = number;

    export type HealthCheckId = string;

    export type HealthCheckNonce = string;

    export type HealthCheckObservations = HealthCheckObservation[];

    export type HealthCheckRegion = string;

    export type HealthCheckRegionList = HealthCheckRegion[];

    export type HealthCheckType = string;

    export type HealthCheckVersion = number;

    export type HealthChecks = HealthCheck[];

    export type HealthThreshold = number;

    export type HostedZoneCount = number;

    export type HostedZoneRRSetCount = number;

    export type HostedZones = HostedZone[];

    export type IPAddress = string;

    export type IPAddressCidr = string;

    export type InsufficientDataHealthStatus = string;

    export type Inverted = boolean;

    export type IsPrivateZone = boolean;

    export type MeasureLatency = boolean;

    export type Message = string;

    export type MetricName = string;

    export type Namespace = string;

    export type Nonce = string;

    export type PageMarker = string;

    export type PageMaxItems = string;

    export type PageTruncated = boolean;

    export type Period = number;

    export type Port = number;

    export type RData = string;

    export type RRType = string;

    export type RequestInterval = number;

    export type ResourceDescription = string;

    export type ResourceId = string;

    export type ResourcePath = string;

    export type ResourceRecordSetFailover = string;

    export type ResourceRecordSetIdentifier = string;

    export type ResourceRecordSetRegion = string;

    export type ResourceRecordSetWeight = number;

    export type ResourceRecordSets = ResourceRecordSet[];

    export type ResourceRecords = ResourceRecord[];

    export type ResourceTagSetList = ResourceTagSet[];

    export type ResourceURI = string;

    export type SearchString = string;

    export type Statistic = string;

    export type Status = string;

    export type TTL = number;

    export type TagKey = string;

    export type TagKeyList = TagKey[];

    export type TagList = Tag[];

    export type TagResourceId = string;

    export type TagResourceIdList = TagResourceId[];

    export type TagResourceType = string;

    export type TagValue = string;

    export type Threshold = number;

    export type TimeStamp = number;

    export type TrafficPolicies = TrafficPolicy[];

    export type TrafficPolicyComment = string;

    export type TrafficPolicyDocument = string;

    export type TrafficPolicyId = string;

    export type TrafficPolicyInstanceCount = number;

    export type TrafficPolicyInstanceId = string;

    export type TrafficPolicyInstanceState = string;

    export type TrafficPolicyInstances = TrafficPolicyInstance[];

    export type TrafficPolicyName = string;

    export type TrafficPolicySummaries = TrafficPolicySummary[];

    export type TrafficPolicyVersion = number;

    export type TrafficPolicyVersionMarker = string;

    export type VPCId = string;

    export type VPCRegion = string;

    export type VPCs = VPC[];

    export interface AlarmIdentifier {
      /** The CloudWatchRegion that the CloudWatch alarm was created in. **/
      Region: CloudWatchRegion;
      /** The name of the CloudWatch alarm. **/
      Name: AlarmName;
    }
    export interface AliasTarget {
      /** Alias resource record sets only: The value you use depends on where you want to
route queries:

&amp;#42; A CloudFront distribution: Specify Z2FDTNDATAQYW2 .
* An ELB load balancer: Specify the value of the hosted zone ID for the load
 balancer. You can get the hosted zone ID by using the AWS Management Console,
 the ELB API, or the AWS CLI. Use the same method to get values for 
 HostedZoneId and DNSName . If you get one value from the console and the
 other value from the API or the CLI, creating the resource record set will
 fail.
* An Amazon S3 bucket that is configured as a static website: Specify the
 hosted zone ID for the Amazon S3 website endpoint in which you created the
 bucket. For more information about valid values, see the table Amazon Simple
 Storage Service (S3) Website Endpoints
 [http://docs.aws.amazon.com/general/latest/gr/rande.html#s3_region] in the 
 Amazon Web Services General Reference .
* Another Amazon Route 53 resource record set in your hosted zone: Specify the
 hosted zone ID of your hosted zone. (An alias resource record set cannot
 reference a resource record set in a different hosted zone.)

For more information and an example, see Example: Creating Alias Resource Record
Sets
[http://docs.aws.amazon.com/Route53/latest/APIReference/CreateAliasRRSAPI.html] 
in the Amazon Route 53 API Reference . **/
      HostedZoneId: ResourceId;
      /** Alias resource record sets only: The external DNS name associated with the AWS
Resource. The value that you specify depends on where you want to route queries:

&amp;#42; A CloudFront distribution: Specify the domain name that CloudFront assigned
 when you created your distribution. Your CloudFront distribution must include
 an alternate domain name that matches the name of the resource record set.
 For example, if the name of the resource record set is acme.example.com ,
 your CloudFront distribution must include acme.example.com as one of the
 alternate domain names. For more information, see Using Alternate Domain
 Names (CNAMEs)
 [http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/CNAMEs.html] 
 in the Amazon CloudFront Developer Guide .
* An ELB load balancer: Specify the DNS name associated with the load balancer.
 You can get the DNS name by using the AWS Management Console, the ELB API, or
 the AWS CLI. Use the same method to get values for HostedZoneId and DNSName .
 If you get one value from the console and the other value from the API or the
 CLI, creating the resource record set will fail.
* An Elastic Beanstalk environment: Specify the CNAME attribute for the
 environment. (The environment must have a regionalized domain name.)
* An Amazon S3 bucket that is configured as a static website: Specify the
 domain name of the Amazon S3 website endpoint in which you created the
 bucket; for example, s3-website-us-east-1.amazonaws.com . For more
 information about valid values, see the table Amazon Simple Storage Service
 (S3) Website Endpoints
 [http://docs.aws.amazon.com/general/latest/gr/rande.html#s3_region] in the 
 Amazon Web Services General Reference . For more information about using
 Amazon S3 buckets for websites, see Hosting a Static Website on Amazon S3
 [http://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html] in the 
 Amazon Simple Storage Service Developer Guide .
* Another Amazon Route 53 resource record set: Specify the value of the Name 
 element for a resource record set in the current hosted zone.

For more information and an example, see Example: Creating Alias Resource Record
Sets
[http://docs.aws.amazon.com/Route53/latest/APIReference/CreateAliasRRSAPI.html] 
in the Amazon Route 53 API Reference . **/
      DNSName: DNSName;
      /** Alias resource record sets only: If you set the value of EvaluateTargetHealth to 
true for the resource record set or sets in an alias, weighted alias, latency
alias, or failover alias resource record set, and if you specify a value for 
HealthCheckId for every resource record set that is referenced by these alias
resource record sets, the alias resource record sets inherit the health of the
referenced resource record sets.

In this configuration, when Amazon Route 53 receives a DNS query for an alias
resource record set:

1. Amazon Route 53 looks at the resource record sets that are referenced by the
  alias resource record sets to determine which health checks they&#x27;re using.
2. Amazon Route 53 checks the current status of each health check. (Amazon
  Route 53 periodically checks the health of the endpoint that is specified in
  a health check; it doesn&#x27;t perform the health check when the DNS query
  arrives.)
3. Based on the status of the health checks, Amazon Route 53 determines which
  resource record sets are healthy. Unhealthy resource record sets are
  immediately removed from consideration. In addition, if all of the resource
  record sets that are referenced by an alias resource record set are
  unhealthy, that alias resource record set also is immediately removed from
  consideration.
4. Based on the configuration of the alias resource record sets (weighted alias
  or latency alias, for example) and the configuration of the resource record
  sets that they reference, Amazon Route 53 chooses a resource record set from
  the healthy resource record sets, and responds to the query.

Note the following:

&amp;#42; You cannot set EvaluateTargetHealth to true when the alias target is a
 CloudFront distribution.
* If the AWS resource that you specify in AliasTarget is a resource record set
 or a group of resource record sets (for example, a group of weighted resource
 record sets), but it is not another alias resource record set, we recommend
 that you associate a health check with all of the resource record sets in the
 alias target. For more information, see What Happens When You Omit Health
 Checks?
 [http://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-complex-configs.html#dns-failover-complex-configs-hc-omitting] 
 in the Amazon Route 53 Developer Guide .
* If you specify an ELB load balancer in AliasTarget , Elastic Load Balancing
 routes queries only to the healthy Amazon EC2 instances that are registered
 with the load balancer. If no Amazon EC2 instances are healthy or if the load
 balancer itself is unhealthy, and if EvaluateTargetHealth is true for the
 corresponding alias resource record set, Amazon Route 53 routes queries to
 other resources.
* When you create a load balancer, you configure settings for Elastic Load
 Balancing health checks; they&#x27;re not Amazon Route 53 health checks, but they
 perform a similar function. Do not create Amazon Route 53 health checks for
 the Amazon EC2 instances that you register with an ELB load balancer. For
 more information, see How Health Checks Work in More Complex Amazon Route 53
 Configurations
 [http://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-complex-configs.html] 
 in the Amazon Route 53 Developer Guide .

We recommend that you set EvaluateTargetHealth to true only when you have enough
idle capacity to handle the failure of one or more endpoints.

For more information and examples, see Amazon Route 53 Health Checks and DNS
Failover
[http://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover.html] in
the Amazon Route 53 Developer Guide . **/
      EvaluateTargetHealth: AliasHealthEnabled;
    }
    export interface AssociateVPCWithHostedZoneRequest {
      /** The ID of the hosted zone you want to associate your VPC with.

Note that you cannot associate a VPC with a hosted zone that doesn&#x27;t have an
existing VPC association. **/
      HostedZoneId: ResourceId;
      /** The VPC that you want your hosted zone to be associated with. **/
      VPC: VPC;
      /** Optional: Any comments you want to include about a 
AssociateVPCWithHostedZoneRequest . **/
      Comment?: AssociateVPCComment;
    }
    export interface AssociateVPCWithHostedZoneResponse {
      /** A complex type that contains the ID, the status, and the date and time of your 
AssociateVPCWithHostedZoneRequest . **/
      ChangeInfo: ChangeInfo;
    }
    export interface Change {
      /** The action to perform:

&amp;#42; CREATE : Creates a resource record set that has the specified values.
* DELETE : Deletes a existing resource record set that has the specified values
 for Name , Type , SetIdentifier (for latency, weighted, geolocation, and
 failover resource record sets), and TTL (except alias resource record sets,
 for which the TTL is determined by the AWS resource that you&#x27;re routing DNS
 queries to).
* UPSERT : If a resource record set does not already exist, Amazon Route 53
 creates it. If a resource record set does exist, Amazon Route 53 updates it
 with the values in the request. Amazon Route 53 can update an existing
 resource record set only when all of the following values match: Name , Type 
 , and SetIdentifier (for weighted, latency, geolocation, and failover
 resource record sets). **/
      Action: ChangeAction;
      /** Information about the resource record set to create or delete. **/
      ResourceRecordSet: ResourceRecordSet;
    }
    export interface ChangeBatch {
      /** Optional: Any comments you want to include about a change batch request. **/
      Comment?: ResourceDescription;
      /** A complex type that contains one Change element for each resource record set
that you want to create or delete. **/
      Changes: Changes;
    }
    export interface ChangeBatchRecord {
      /** The ID of the request. Use this ID to track when the change has completed across
all Amazon Route 53 DNS servers. **/
      Id: ResourceId;
      /** The date and time the change was submitted, in the format YYYY-MM-DDThh:mm:ssZ ,
as specified in the ISO 8601 standard (for example, 2009-11-19T19:37:58Z). The Z 
after the time indicates that the time is listed in Coordinated Universal Time
(UTC). **/
      SubmittedAt?: TimeStamp;
      /** The current state of the request. PENDING indicates that this request has not
yet been applied to all Amazon Route 53 DNS servers.

Valid Values: PENDING | INSYNC **/
      Status: ChangeStatus;
      /** A complex type that describes change information about changes made to your
hosted zone.

This element contains an ID that you use when performing a GetChange action to
get detailed information about the change. **/
      Comment?: ResourceDescription;
      /** The AWS account ID attached to the changes. **/
      Submitter?: AWSAccountID;
      /** A list of changes made in the ChangeBatch. **/
      Changes?: Changes;
    }
    export interface ChangeInfo {
      /** The ID of the request. Use this ID to track when the change has completed across
all Amazon Route 53 DNS servers. **/
      Id: ResourceId;
      /** The current state of the request. PENDING indicates that this request has not
yet been applied to all Amazon Route 53 DNS servers.

Valid Values: PENDING | INSYNC **/
      Status: ChangeStatus;
      /** The date and time the change was submitted, in the format YYYY-MM-DDThh:mm:ssZ ,
as specified in the ISO 8601 standard (for example, 2009-11-19T19:37:58Z). The Z 
after the time indicates that the time is listed in Coordinated Universal Time
(UTC). **/
      SubmittedAt: TimeStamp;
      /** A complex type that describes change information about changes made to your
hosted zone.

This element contains an ID that you use when performing a GetChange action to
get detailed information about the change. **/
      Comment?: ResourceDescription;
    }
    export interface ChangeResourceRecordSetsRequest {
      /** The ID of the hosted zone that contains the resource record sets that you want
to change. **/
      HostedZoneId: ResourceId;
      /** A complex type that contains an optional comment and the Changes element. **/
      ChangeBatch: ChangeBatch;
    }
    export interface ChangeResourceRecordSetsResponse {
      /** A complex type that contains information about changes made to your hosted zone.

This element contains an ID that you use when performing a GetChange action to
get detailed information about the change. **/
      ChangeInfo: ChangeInfo;
    }
    export interface ChangeTagsForResourceRequest {
      /** The type of the resource.

- The resource type for health checks is healthcheck .

- The resource type for hosted zones is hostedzone . **/
      ResourceType: TagResourceType;
      /** The ID of the resource for which you want to add, change, or delete tags. **/
      ResourceId: TagResourceId;
      /** A complex type that contains a list of Tag elements. Each Tag element identifies
a tag that you want to add or update for the specified resource. **/
      AddTags?: TagList;
      /** A list of Tag keys that you want to remove from the specified resource. **/
      RemoveTagKeys?: TagKeyList;
    }
    export interface ChangeTagsForResourceResponse {
    }
    export interface CloudWatchAlarmConfiguration {
      /** The number of periods over which data is compared to the specified threshold. **/
      EvaluationPeriods: EvaluationPeriods;
      /** The value that the metric is compared with to determine the state of the alarm.
For example, if you want the health check to fail if the average TCP connection
time is greater than 500 milliseconds for more than 60 seconds, the threshold is
500. **/
      Threshold: Threshold;
      /** The arithmetic operation to use when comparing the specified Statistic and
Threshold.

Valid Values are GreaterThanOrEqualToThreshold , GreaterThanThreshold , 
LessThanThreshold and LessThanOrEqualToThreshold **/
      ComparisonOperator: ComparisonOperator;
      /** An integer that represents the period in seconds over which the statistic is
applied. **/
      Period: Period;
      /** The name of the CloudWatch metric that is associated with the CloudWatch alarm. **/
      MetricName: MetricName;
      /** The namespace of the CloudWatch metric that is associated with the CloudWatch
alarm. **/
      Namespace: Namespace;
      /** The statistic to apply to the CloudWatch metric that is associated with the
CloudWatch alarm.

Valid Values are SampleCount , Average , Sum , Minimum and Maximum **/
      Statistic: Statistic;
      /** A list of Dimension elements for the CloudWatch metric that is associated with
the CloudWatch alarm. For information about the metrics and dimensions that
CloudWatch supports, see Amazon CloudWatch Namespaces, Dimensions, and Metrics
Reference
[http://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/CW_Support_For_AWS.html] 
. **/
      Dimensions?: DimensionList;
    }
    export interface ConcurrentModification {
      /** Descriptive message for the error response. **/
      message?: ErrorMessage;
    }
    export interface ConflictingDomainExists {
      message?: ErrorMessage;
    }
    export interface ConflictingTypes {
      /** Descriptive message for the error response. **/
      message?: ErrorMessage;
    }
    export interface CreateHealthCheckRequest {
      /** A unique string that identifies the request and that allows failed 
CreateHealthCheck requests to be retried without the risk of executing the
operation twice. You must use a unique CallerReference string every time you
create a health check. CallerReference can be any unique string; you might
choose to use a string that identifies your project.

Valid characters are any Unicode code points that are legal in an XML 1.0
document. The UTF-8 encoding of the value must be less than 128 bytes. **/
      CallerReference: HealthCheckNonce;
      /** A complex type that contains health check configuration. **/
      HealthCheckConfig: HealthCheckConfig;
    }
    export interface CreateHealthCheckResponse {
      /** A complex type that contains identifying information about the health check. **/
      HealthCheck: HealthCheck;
      /** The unique URL representing the new health check. **/
      Location: ResourceURI;
    }
    export interface CreateHostedZoneRequest {
      /** The name of the domain. This must be a fully-specified domain, for example,
www.example.com. The trailing dot is optional; Amazon Route 53 assumes that the
domain name is fully qualified. This means that Amazon Route 53 treats
www.example.com (without a trailing dot) and www.example.com. (with a trailing
dot) as identical.

This is the name you have registered with your DNS registrar. You should ask
your registrar to change the authoritative name servers for your domain to the
set of NameServers elements returned in DelegationSet . **/
      Name: DNSName;
      /** The VPC that you want your hosted zone to be associated with. By providing this
parameter, your newly created hosted cannot be resolved anywhere other than the
given VPC. **/
      VPC?: VPC;
      /** A unique string that identifies the request and that allows failed 
CreateHostedZone requests to be retried without the risk of executing the
operation twice. You must use a unique CallerReference string every time you
create a hosted zone. CallerReference can be any unique string; you might choose
to use a string that identifies your project, such as DNSMigration_01 .

Valid characters are any Unicode code points that are legal in an XML 1.0
document. The UTF-8 encoding of the value must be less than 128 bytes. **/
      CallerReference: Nonce;
      /** A complex type that contains an optional comment about your hosted zone. **/
      HostedZoneConfig?: HostedZoneConfig;
      /** The delegation set id of the reusable delgation set whose NS records you want to
assign to the new hosted zone. **/
      DelegationSetId?: ResourceId;
    }
    export interface CreateHostedZoneResponse {
      /** A complex type that contains identifying information about the hosted zone. **/
      HostedZone: HostedZone;
      /** A complex type that contains information about the request to create a hosted
zone. This includes an ID that you use when you call the GetChange action to get
the current status of the change request. **/
      ChangeInfo: ChangeInfo;
      /** A complex type that contains name server information. **/
      DelegationSet: DelegationSet;
      VPC?: VPC;
      /** The unique URL representing the new hosted zone. **/
      Location: ResourceURI;
    }
    export interface CreateReusableDelegationSetRequest {
      /** A unique string that identifies the request and that allows failed 
CreateReusableDelegationSet requests to be retried without the risk of executing
the operation twice. You must use a unique CallerReference string every time you
create a reusable delegation set. CallerReference can be any unique string; you
might choose to use a string that identifies your project, such as 
DNSMigration_01 .

Valid characters are any Unicode code points that are legal in an XML 1.0
document. The UTF-8 encoding of the value must be less than 128 bytes. **/
      CallerReference: Nonce;
      /** The ID of the hosted zone whose delegation set you want to mark as reusable. It
is an optional parameter. **/
      HostedZoneId?: ResourceId;
    }
    export interface CreateReusableDelegationSetResponse {
      /** A complex type that contains name server information. **/
      DelegationSet: DelegationSet;
      /** The unique URL representing the new reusbale delegation set. **/
      Location: ResourceURI;
    }
    export interface CreateTrafficPolicyInstanceRequest {
      /** The ID of the hosted zone in which you want Amazon Route 53 to create resource
record sets by using the configuration in a traffic policy. **/
      HostedZoneId: ResourceId;
      /** The domain name (such as example.com) or subdomain name (such as
www.example.com) for which Amazon Route 53 responds to DNS queries by using the
resource record sets that Amazon Route 53 creates for this traffic policy
instance. **/
      Name: DNSName;
      /** The TTL that you want Amazon Route 53 to assign to all of the resource record
sets that it creates in the specified hosted zone. **/
      TTL: TTL;
      /** The ID of the traffic policy that you want to use to create resource record sets
in the specified hosted zone. **/
      TrafficPolicyId: TrafficPolicyId;
      /** The version of the traffic policy that you want to use to create resource record
sets in the specified hosted zone. **/
      TrafficPolicyVersion: TrafficPolicyVersion;
    }
    export interface CreateTrafficPolicyInstanceResponse {
      /** A complex type that contains settings for the new traffic policy instance. **/
      TrafficPolicyInstance: TrafficPolicyInstance;
      /** A unique URL that represents a new traffic policy instance. **/
      Location: ResourceURI;
    }
    export interface CreateTrafficPolicyRequest {
      /** The name of the traffic policy. **/
      Name: TrafficPolicyName;
      /** The definition of this traffic policy in JSON format. **/
      Document: TrafficPolicyDocument;
      /** Any comments that you want to include about the traffic policy. **/
      Comment?: TrafficPolicyComment;
    }
    export interface CreateTrafficPolicyResponse {
      /** A complex type that contains settings for the new traffic policy. **/
      TrafficPolicy: TrafficPolicy;
      Location: ResourceURI;
    }
    export interface CreateTrafficPolicyVersionRequest {
      /** The ID of the traffic policy for which you want to create a new version. **/
      Id: TrafficPolicyId;
      /** The definition of a new traffic policy version, in JSON format. You must specify
the full definition of the new traffic policy. You cannot specify just the
differences between the new version and a previous version. **/
      Document: TrafficPolicyDocument;
      /** Any comments that you want to include about the new traffic policy version. **/
      Comment?: TrafficPolicyComment;
    }
    export interface CreateTrafficPolicyVersionResponse {
      /** A complex type that contains settings for the new version of the traffic policy. **/
      TrafficPolicy: TrafficPolicy;
      Location: ResourceURI;
    }
    export interface DelegationSet {
      Id?: ResourceId;
      CallerReference?: Nonce;
      /** A complex type that contains the authoritative name servers for the hosted zone.
Use the method provided by your domain registrar to add an NS record to your
domain for each NameServer that is assigned to your hosted zone. **/
      NameServers: DelegationSetNameServers;
    }
    export interface DelegationSetAlreadyCreated {
      /** Descriptive message for the error response. **/
      message?: ErrorMessage;
    }
    export interface DelegationSetAlreadyReusable {
      /** Descriptive message for the error response. **/
      message?: ErrorMessage;
    }
    export interface DelegationSetInUse {
      /** Descriptive message for the error response. **/
      message?: ErrorMessage;
    }
    export interface DelegationSetNotAvailable {
      /** Descriptive message for the error response. **/
      message?: ErrorMessage;
    }
    export interface DelegationSetNotReusable {
      /** Descriptive message for the error response. **/
      message?: ErrorMessage;
    }
    export interface DeleteHealthCheckRequest {
      /** The ID of the health check to delete. **/
      HealthCheckId: HealthCheckId;
    }
    export interface DeleteHealthCheckResponse {
    }
    export interface DeleteHostedZoneRequest {
      /** The ID of the hosted zone you want to delete. **/
      Id: ResourceId;
    }
    export interface DeleteHostedZoneResponse {
      /** A complex type that contains the ID, the status, and the date and time of your
delete request. **/
      ChangeInfo: ChangeInfo;
    }
    export interface DeleteReusableDelegationSetRequest {
      /** The ID of the reusable delegation set you want to delete. **/
      Id: ResourceId;
    }
    export interface DeleteReusableDelegationSetResponse {
    }
    export interface DeleteTrafficPolicyInstanceRequest {
      /** The ID of the traffic policy instance that you want to delete.

When you delete a traffic policy instance, Amazon Route 53 also deletes all of
the resource record sets that were created when you created the traffic policy
instance. **/
      Id: TrafficPolicyInstanceId;
    }
    export interface DeleteTrafficPolicyInstanceResponse {
    }
    export interface DeleteTrafficPolicyRequest {
      /** The ID of the traffic policy that you want to delete. **/
      Id: TrafficPolicyId;
      /** The version number of the traffic policy that you want to delete. **/
      Version: TrafficPolicyVersion;
    }
    export interface DeleteTrafficPolicyResponse {
    }
    export interface Dimension {
      /** The name of the dimension. **/
      Name: DimensionField;
      /** The value of the dimension. **/
      Value: DimensionField;
    }
    export interface DisassociateVPCFromHostedZoneRequest {
      /** The ID of the hosted zone you want to disassociate your VPC from.

Note that you cannot disassociate the last VPC from a hosted zone. **/
      HostedZoneId: ResourceId;
      /** The VPC that you want your hosted zone to be disassociated from. **/
      VPC: VPC;
      /** Optional: Any comments you want to include about a 
DisassociateVPCFromHostedZoneRequest . **/
      Comment?: DisassociateVPCComment;
    }
    export interface DisassociateVPCFromHostedZoneResponse {
      /** A complex type that contains the ID, the status, and the date and time of your 
DisassociateVPCFromHostedZoneRequest . **/
      ChangeInfo: ChangeInfo;
    }
    export interface GeoLocation {
      /** The code for a continent geo location. Note: only continent locations have a
continent code.

Valid values: AF | AN | AS | EU | OC | NA | SA

Constraint: Specifying ContinentCode with either CountryCode or SubdivisionCode 
returns an InvalidInput error. **/
      ContinentCode?: GeoLocationContinentCode;
      /** The code for a country geo location. The default location uses &#x27;&amp;#42;&#x27; for the
country code and will match all locations that are not matched by a geo
location.

The default geo location uses a * for the country code. All other country codes
follow the ISO 3166 two-character code. **/
      CountryCode?: GeoLocationCountryCode;
      /** The code for a country&#x27;s subdivision (e.g., a province of Canada). A subdivision
code is only valid with the appropriate country code.

Constraint: Specifying SubdivisionCode without CountryCode returns an 
InvalidInput error. **/
      SubdivisionCode?: GeoLocationSubdivisionCode;
    }
    export interface GeoLocationDetails {
      /** The code for a continent geo location. Note: only continent locations have a
continent code. **/
      ContinentCode?: GeoLocationContinentCode;
      /** The name of the continent. This element is only present if ContinentCode is also
present. **/
      ContinentName?: GeoLocationContinentName;
      /** The code for a country geo location. The default location uses &#x27;&amp;#42;&#x27; for the
country code and will match all locations that are not matched by a geo
location.

The default geo location uses a * for the country code. All other country codes
follow the ISO 3166 two-character code. **/
      CountryCode?: GeoLocationCountryCode;
      /** The name of the country. This element is only present if CountryCode is also
present. **/
      CountryName?: GeoLocationCountryName;
      /** The code for a country&#x27;s subdivision (e.g., a province of Canada). A subdivision
code is only valid with the appropriate country code. **/
      SubdivisionCode?: GeoLocationSubdivisionCode;
      /** The name of the subdivision. This element is only present if SubdivisionCode is
also present. **/
      SubdivisionName?: GeoLocationSubdivisionName;
    }
    export interface GetChangeDetailsRequest {
      /** The ID of the change batch request. The value that you specify here is the value
that ChangeResourceRecordSets returned in the Id element when you submitted the
request. **/
      Id: ResourceId;
    }
    export interface GetChangeDetailsResponse {
      /** A complex type that contains information about the specified change batch,
including the change batch ID, the status of the change, and the contained
changes. **/
      ChangeBatchRecord: ChangeBatchRecord;
    }
    export interface GetChangeRequest {
      /** The ID of the change batch request. The value that you specify here is the value
that ChangeResourceRecordSets returned in the Id element when you submitted the
request. **/
      Id: ResourceId;
    }
    export interface GetChangeResponse {
      /** A complex type that contains information about the specified change batch,
including the change batch ID, the status of the change, and the date and time
of the request. **/
      ChangeInfo: ChangeInfo;
    }
    export interface GetCheckerIpRangesRequest {
    }
    export interface GetCheckerIpRangesResponse {
      /** A complex type that contains sorted list of IP ranges in CIDR format for Amazon
Route 53 health checkers. **/
      CheckerIpRanges: CheckerIpRanges;
    }
    export interface GetGeoLocationRequest {
      /** The code for a continent geo location. Note: only continent locations have a
continent code.

Valid values: AF | AN | AS | EU | OC | NA | SA

Constraint: Specifying ContinentCode with either CountryCode or SubdivisionCode 
returns an InvalidInput error. **/
      ContinentCode?: GeoLocationContinentCode;
      /** The code for a country geo location. The default location uses &#x27;&amp;#42;&#x27; for the
country code and will match all locations that are not matched by a geo
location.

The default geo location uses a * for the country code. All other country codes
follow the ISO 3166 two-character code. **/
      CountryCode?: GeoLocationCountryCode;
      /** The code for a country&#x27;s subdivision (e.g., a province of Canada). A subdivision
code is only valid with the appropriate country code.

Constraint: Specifying SubdivisionCode without CountryCode returns an 
InvalidInput error. **/
      SubdivisionCode?: GeoLocationSubdivisionCode;
    }
    export interface GetGeoLocationResponse {
      /** A complex type that contains the information about the specified geo location. **/
      GeoLocationDetails: GeoLocationDetails;
    }
    export interface GetHealthCheckCountRequest {
    }
    export interface GetHealthCheckCountResponse {
      /** The number of health checks associated with the current AWS account. **/
      HealthCheckCount: HealthCheckCount;
    }
    export interface GetHealthCheckLastFailureReasonRequest {
      /** The ID of the health check for which you want to retrieve the reason for the
most recent failure. **/
      HealthCheckId: HealthCheckId;
    }
    export interface GetHealthCheckLastFailureReasonResponse {
      /** A list that contains one HealthCheckObservation element for each Amazon Route 53
health checker. **/
      HealthCheckObservations: HealthCheckObservations;
    }
    export interface GetHealthCheckRequest {
      /** The ID of the health check to retrieve. **/
      HealthCheckId: HealthCheckId;
    }
    export interface GetHealthCheckResponse {
      /** A complex type that contains the information about the specified health check. **/
      HealthCheck: HealthCheck;
    }
    export interface GetHealthCheckStatusRequest {
      /** If you want Amazon Route 53 to return this resource record set in response to a
DNS query only when a health check is passing, include the HealthCheckId element
and specify the ID of the applicable health check.

Amazon Route 53 determines whether a resource record set is healthy by
periodically sending a request to the endpoint that is specified in the health
check. If that endpoint returns an HTTP status code of 2xx or 3xx, the endpoint
is healthy. If the endpoint returns an HTTP status code of 400 or greater, or if
the endpoint doesn&#x27;t respond for a certain amount of time, Amazon Route 53
considers the endpoint unhealthy and also considers the resource record set
unhealthy.

The HealthCheckId element is only useful when Amazon Route 53 is choosing
between two or more resource record sets to respond to a DNS query, and you want
Amazon Route 53 to base the choice in part on the status of a health check.
Configuring health checks only makes sense in the following configurations:

&amp;#42; You&#x27;re checking the health of the resource record sets in a weighted,
 latency, geolocation, or failover resource record set, and you specify health
 check IDs for all of the resource record sets. If the health check for one
 resource record set specifies an endpoint that is not healthy, Amazon Route
 53 stops responding to queries using the value for that resource record set.
* You set EvaluateTargetHealth to true for the resource record sets in an
 alias, weighted alias, latency alias, geolocation alias, or failover alias
 resource record set, and you specify health check IDs for all of the resource
 record sets that are referenced by the alias resource record sets. For more
 information about this configuration, see EvaluateTargetHealth .
 
 Amazon Route 53 doesn&#x27;t check the health of the endpoint specified in the
 resource record set, for example, the endpoint specified by the IP address in
 the Value element. When you add a HealthCheckId element to a resource record
 set, Amazon Route 53 checks the health of the endpoint that you specified in
 the health check.
 
 

For geolocation resource record sets, if an endpoint is unhealthy, Amazon Route
53 looks for a resource record set for the larger, associated geographic region.
For example, suppose you have resource record sets for a state in the United
States, for the United States, for North America, and for all locations. If the
endpoint for the state resource record set is unhealthy, Amazon Route 53 checks
the resource record sets for the United States, for North America, and for all
locations (a resource record set for which the value of CountryCode is * ), in
that order, until it finds a resource record set for which the endpoint is
healthy.

If your health checks specify the endpoint only by domain name, we recommend
that you create a separate health check for each endpoint. For example, create a
health check for each HTTP server that is serving content for www.example.com.
For the value of FullyQualifiedDomainName , specify the domain name of the
server (such as us-east-1-www.example.com ), not the name of the resource record
sets (example.com).

In this configuration, if you create a health check for which the value of 
FullyQualifiedDomainName matches the name of the resource record sets and then
associate the health check with those resource record sets, health check results
will be unpredictable. **/
      HealthCheckId: HealthCheckId;
    }
    export interface GetHealthCheckStatusResponse {
      /** A list that contains one HealthCheckObservation element for each Amazon Route 53
health checker. **/
      HealthCheckObservations: HealthCheckObservations;
    }
    export interface GetHostedZoneCountRequest {
    }
    export interface GetHostedZoneCountResponse {
      /** The number of hosted zones associated with the current AWS account. **/
      HostedZoneCount: HostedZoneCount;
    }
    export interface GetHostedZoneRequest {
      /** The ID of the hosted zone for which you want to get a list of the name servers
in the delegation set. **/
      Id: ResourceId;
    }
    export interface GetHostedZoneResponse {
      /** A complex type that contains the information about the specified hosted zone. **/
      HostedZone: HostedZone;
      /** A complex type that contains information about the name servers for the
specified hosted zone. **/
      DelegationSet?: DelegationSet;
      /** A complex type that contains information about VPCs associated with the
specified hosted zone. **/
      VPCs?: VPCs;
    }
    export interface GetReusableDelegationSetRequest {
      /** The ID of the reusable delegation set for which you want to get a list of the
name server. **/
      Id: ResourceId;
    }
    export interface GetReusableDelegationSetResponse {
      /** A complex type that contains the information about the nameservers for the
specified delegation set ID. **/
      DelegationSet: DelegationSet;
    }
    export interface GetTrafficPolicyInstanceCountRequest {
    }
    export interface GetTrafficPolicyInstanceCountResponse {
      /** The number of traffic policy instances that are associated with the current AWS
account. **/
      TrafficPolicyInstanceCount: TrafficPolicyInstanceCount;
    }
    export interface GetTrafficPolicyInstanceRequest {
      /** The ID of the traffic policy instance that you want to get information about. **/
      Id: TrafficPolicyInstanceId;
    }
    export interface GetTrafficPolicyInstanceResponse {
      /** A complex type that contains settings for the traffic policy instance. **/
      TrafficPolicyInstance: TrafficPolicyInstance;
    }
    export interface GetTrafficPolicyRequest {
      /** The ID of the traffic policy that you want to get information about. **/
      Id: TrafficPolicyId;
      /** The version number of the traffic policy that you want to get information about. **/
      Version: TrafficPolicyVersion;
    }
    export interface GetTrafficPolicyResponse {
      /** A complex type that contains settings for the specified traffic policy. **/
      TrafficPolicy: TrafficPolicy;
    }
    export interface HealthCheck {
      /** The ID of the specified health check. **/
      Id: HealthCheckId;
      /** A unique string that identifies the request to create the health check. **/
      CallerReference: HealthCheckNonce;
      /** A complex type that contains the health check configuration. **/
      HealthCheckConfig: HealthCheckConfig;
      /** The version of the health check. You can optionally pass this value in a call to 
UpdateHealthCheck to prevent overwriting another change to the health check. **/
      HealthCheckVersion: HealthCheckVersion;
      /** For CLOUDWATCH_METRIC health checks, a complex type that contains information
about the CloudWatch alarm that you&#x27;re associating with the health check. **/
      CloudWatchAlarmConfiguration?: CloudWatchAlarmConfiguration;
    }
    export interface HealthCheckAlreadyExists {
      /** Descriptive message for the error response. **/
      message?: ErrorMessage;
    }
    export interface HealthCheckConfig {
      /** IP Address of the instance being checked. **/
      IPAddress?: IPAddress;
      /** Port on which connection will be opened to the instance to health check. For
HTTP and HTTP_STR_MATCH this defaults to 80 if the port is not specified. For
HTTPS and HTTPS_STR_MATCH this defaults to 443 if the port is not specified. **/
      Port?: Port;
      /** The type of health check to be performed. Currently supported types are TCP,
HTTP, HTTPS, HTTP_STR_MATCH, HTTPS_STR_MATCH, CALCULATED and CLOUDWATCH_METRIC. **/
      Type: HealthCheckType;
      /** Path to ping on the instance to check the health. Required for HTTP, HTTPS,
HTTP_STR_MATCH, and HTTPS_STR_MATCH health checks. The HTTP request is issued to
the instance on the given port and path. **/
      ResourcePath?: ResourcePath;
      /** Fully qualified domain name of the instance to be health checked. **/
      FullyQualifiedDomainName?: FullyQualifiedDomainName;
      /** A string to search for in the body of a health check response. Required for
HTTP_STR_MATCH and HTTPS_STR_MATCH health checks. Amazon Route 53 considers case
when searching for SearchString in the response body. **/
      SearchString?: SearchString;
      /** The number of seconds between the time that Amazon Route 53 gets a response from
your endpoint and the time that it sends the next health-check request.

Each Amazon Route 53 health checker makes requests at this interval. Valid
values are 10 and 30. The default value is 30. **/
      RequestInterval?: RequestInterval;
      /** The number of consecutive health checks that an endpoint must pass or fail for
Amazon Route 53 to change the current status of the endpoint from unhealthy to
healthy or vice versa.

Valid values are integers between 1 and 10. For more information, see &quot;How
Amazon Route 53 Determines Whether an Endpoint Is Healthy&quot; in the Amazon Route
53 Developer Guide. **/
      FailureThreshold?: FailureThreshold;
      /** A Boolean value that indicates whether you want Amazon Route 53 to measure the
latency between health checkers in multiple AWS regions and your endpoint and to
display CloudWatch latency graphs in the Amazon Route 53 console. **/
      MeasureLatency?: MeasureLatency;
      /** A boolean value that indicates whether the status of health check should be
inverted. For example, if a health check is healthy but Inverted is True , then
Amazon Route 53 considers the health check to be unhealthy. **/
      Inverted?: Inverted;
      /** The minimum number of child health checks that must be healthy for Amazon Route
53 to consider the parent health check to be healthy. Valid values are integers
between 0 and 256, inclusive. **/
      HealthThreshold?: HealthThreshold;
      /** For a specified parent health check, a list of HealthCheckId values for the
associated child health checks. **/
      ChildHealthChecks?: ChildHealthCheckList;
      /** Specify whether you want Amazon Route 53 to send the value of 
FullyQualifiedDomainName to the endpoint in the client_hello message during TLS
negotiation. If you don&#x27;t specify a value for EnableSNI , Amazon Route 53
defaults to true when Type is HTTPS or HTTPS_STR_MATCH and defaults to false 
when Type is any other value. **/
      EnableSNI?: EnableSNI;
      /** A list of HealthCheckRegion values that you want Amazon Route 53 to use to
perform health checks for the specified endpoint. You must specify at least
three regions. **/
      Regions?: HealthCheckRegionList;
      /** A complex type that contains information to uniquely identify the CloudWatch
alarm that you&#x27;re associating with a Route 53 health check. **/
      AlarmIdentifier?: AlarmIdentifier;
      /** The status of the health check when CloudWatch has insufficient data about the
state of associated alarm. Valid values are Healthy , Unhealthy and 
LastKnownStatus . **/
      InsufficientDataHealthStatus?: InsufficientDataHealthStatus;
    }
    export interface HealthCheckInUse {
      /** Descriptive message for the error response. **/
      message?: ErrorMessage;
    }
    export interface HealthCheckObservation {
      /** The HealthCheckRegion of the Amazon Route 53 health checker that performed this
health check. **/
      Region?: HealthCheckRegion;
      /** The IP address of the Amazon Route 53 health checker that performed this health
check. **/
      IPAddress?: IPAddress;
      /** A complex type that contains information about the health check status for the
current observation. **/
      StatusReport?: StatusReport;
    }
    export interface HealthCheckVersionMismatch {
      message?: ErrorMessage;
    }
    export interface HostedZone {
      /** The ID of the specified hosted zone. **/
      Id: ResourceId;
      /** The name of the domain. This must be a fully-specified domain, for example,
www.example.com. The trailing dot is optional; Amazon Route 53 assumes that the
domain name is fully qualified. This means that Amazon Route 53 treats
www.example.com (without a trailing dot) and www.example.com. (with a trailing
dot) as identical.

This is the name you have registered with your DNS registrar. You should ask
your registrar to change the authoritative name servers for your domain to the
set of NameServers elements returned in DelegationSet . **/
      Name: DNSName;
      /** A unique string that identifies the request to create the hosted zone. **/
      CallerReference: Nonce;
      /** A complex type that contains the Comment element. **/
      Config?: HostedZoneConfig;
      /** Total number of resource record sets in the hosted zone. **/
      ResourceRecordSetCount?: HostedZoneRRSetCount;
    }
    export interface HostedZoneAlreadyExists {
      /** Descriptive message for the error response. **/
      message?: ErrorMessage;
    }
    export interface HostedZoneConfig {
      /** An optional comment about your hosted zone. If you don&#x27;t want to specify a
comment, you can omit the HostedZoneConfig and Comment elements from the XML
document. **/
      Comment?: ResourceDescription;
      PrivateZone?: IsPrivateZone;
    }
    export interface HostedZoneNotEmpty {
      /** Descriptive message for the error response. **/
      message?: ErrorMessage;
    }
    export interface HostedZoneNotFound {
      /** Descriptive message for the error response. **/
      message?: ErrorMessage;
    }
    export interface IncompatibleVersion {
      message?: ErrorMessage;
    }
    export interface InvalidArgument {
      /** Descriptive message for the error response. **/
      message?: ErrorMessage;
    }
    export interface InvalidChangeBatch {
      /** Descriptive message for the error response. **/
      messages?: ErrorMessages;
    }
    export interface InvalidDomainName {
      /** Descriptive message for the error response. **/
      message?: ErrorMessage;
    }
    export interface InvalidInput {
      /** Descriptive message for the error response. **/
      message?: ErrorMessage;
    }
    export interface InvalidTrafficPolicyDocument {
      /** Descriptive message for the error response. **/
      message?: ErrorMessage;
    }
    export interface InvalidVPCId {
      /** Descriptive message for the error response. **/
      message?: ErrorMessage;
    }
    export interface LastVPCAssociation {
      /** Descriptive message for the error response. **/
      message?: ErrorMessage;
    }
    export interface LimitsExceeded {
      /** Descriptive message for the error response. **/
      message?: ErrorMessage;
    }
    export interface ListChangeBatchesByHostedZoneRequest {
      /** The ID of the hosted zone that you want to see changes for. **/
      HostedZoneId: ResourceId;
      /** The start of the time period you want to see changes for. **/
      StartDate: Date;
      /** The end of the time period you want to see changes for. **/
      EndDate: Date;
      /** The maximum number of items on a page. **/
      MaxItems?: PageMaxItems;
      /** The page marker. **/
      Marker?: PageMarker;
    }
    export interface ListChangeBatchesByHostedZoneResponse {
      /** The maximum number of items on a page. **/
      MaxItems: PageMaxItems;
      /** The page marker. **/
      Marker: PageMarker;
      /** A flag that indicates if there are more change batches to list. **/
      IsTruncated?: PageTruncated;
      /** The change batches within the given hosted zone and time period. **/
      ChangeBatchRecords: ChangeBatchRecords;
      /** The next page marker. **/
      NextMarker?: PageMarker;
    }
    export interface ListChangeBatchesByRRSetRequest {
      /** The ID of the hosted zone that you want to see changes for. **/
      HostedZoneId: ResourceId;
      /** The name of the RRSet that you want to see changes for. **/
      Name: DNSName;
      /** The type of the RRSet that you want to see changes for. **/
      Type: RRType;
      /** The identifier of the RRSet that you want to see changes for. **/
      SetIdentifier?: ResourceRecordSetIdentifier;
      /** The start of the time period you want to see changes for. **/
      StartDate: Date;
      /** The end of the time period you want to see changes for. **/
      EndDate: Date;
      /** The maximum number of items on a page. **/
      MaxItems?: PageMaxItems;
      /** The page marker. **/
      Marker?: PageMarker;
    }
    export interface ListChangeBatchesByRRSetResponse {
      /** The maximum number of items on a page. **/
      MaxItems: PageMaxItems;
      /** The page marker. **/
      Marker: PageMarker;
      /** A flag that indicates if there are more change batches to list. **/
      IsTruncated?: PageTruncated;
      /** The change batches within the given hosted zone and time period. **/
      ChangeBatchRecords: ChangeBatchRecords;
      /** The next page marker. **/
      NextMarker?: PageMarker;
    }
    export interface ListGeoLocationsRequest {
      /** The first continent code in the lexicographic ordering of geo locations that you
want the ListGeoLocations request to list. For non-continent geo locations, this
should be null.

Valid values: AF | AN | AS | EU | OC | NA | SA

Constraint: Specifying ContinentCode with either CountryCode or SubdivisionCode 
returns an InvalidInput error. **/
      StartContinentCode?: GeoLocationContinentCode;
      /** The first country code in the lexicographic ordering of geo locations that you
want the ListGeoLocations request to list.

The default geo location uses a &amp;#42; for the country code. All other country codes
follow the ISO 3166 two-character code. **/
      StartCountryCode?: GeoLocationCountryCode;
      /** The first subdivision code in the lexicographic ordering of geo locations that
you want the ListGeoLocations request to list.

Constraint: Specifying SubdivisionCode without CountryCode returns an 
InvalidInput error. **/
      StartSubdivisionCode?: GeoLocationSubdivisionCode;
      /** The maximum number of geo locations you want in the response body. **/
      MaxItems?: PageMaxItems;
    }
    export interface ListGeoLocationsResponse {
      /** A complex type that contains information about the geo locations that are
returned by the request. **/
      GeoLocationDetailsList: GeoLocationDetailsList;
      /** A flag that indicates whether there are more geo locations to be listed. If your
results were truncated, you can make a follow-up request for the next page of
results by using the values included in the 
ListGeoLocationsResponse$NextContinentCode , 
ListGeoLocationsResponse$NextCountryCode and 
ListGeoLocationsResponse$NextSubdivisionCode elements.

Valid Values: true | false **/
      IsTruncated: PageTruncated;
      /** If the results were truncated, the continent code of the next geo location in
the list. This element is present only if ListGeoLocationsResponse$IsTruncated 
is true and the next geo location to list is a continent location. **/
      NextContinentCode?: GeoLocationContinentCode;
      /** If the results were truncated, the country code of the next geo location in the
list. This element is present only if ListGeoLocationsResponse$IsTruncated is
true and the next geo location to list is not a continent location. **/
      NextCountryCode?: GeoLocationCountryCode;
      /** If the results were truncated, the subdivision code of the next geo location in
the list. This element is present only if ListGeoLocationsResponse$IsTruncated 
is true and the next geo location has a subdivision. **/
      NextSubdivisionCode?: GeoLocationSubdivisionCode;
      /** The maximum number of records you requested. The maximum value of MaxItems is
100. **/
      MaxItems: PageMaxItems;
    }
    export interface ListHealthChecksRequest {
      /** If the request returned more than one page of results, submit another request
and specify the value of NextMarker from the last response in the marker 
parameter to get the next page of results. **/
      Marker?: PageMarker;
      /** Specify the maximum number of health checks to return per page of results. **/
      MaxItems?: PageMaxItems;
    }
    export interface ListHealthChecksResponse {
      /** A complex type that contains information about the health checks associated with
the current AWS account. **/
      HealthChecks: HealthChecks;
      /** If the request returned more than one page of results, submit another request
and specify the value of NextMarker from the last response in the marker 
parameter to get the next page of results. **/
      Marker: PageMarker;
      /** A flag indicating whether there are more health checks to be listed. If your
results were truncated, you can make a follow-up request for the next page of
results by using the Marker element.

Valid Values: true | false **/
      IsTruncated: PageTruncated;
      /** Indicates where to continue listing health checks. If 
ListHealthChecksResponse$IsTruncated is true , make another request to 
ListHealthChecks and include the value of the NextMarker element in the Marker 
element to get the next page of results. **/
      NextMarker?: PageMarker;
      /** The maximum number of health checks to be included in the response body. If the
number of health checks associated with this AWS account exceeds MaxItems , the
value of ListHealthChecksResponse$IsTruncated in the response is true . Call 
ListHealthChecks again and specify the value of 
ListHealthChecksResponse$NextMarker in the ListHostedZonesRequest$Marker element
to get the next page of results. **/
      MaxItems: PageMaxItems;
    }
    export interface ListHostedZonesByNameRequest {
      /** The first name in the lexicographic ordering of domain names that you want the 
ListHostedZonesByNameRequest request to list.

If the request returned more than one page of results, submit another request
and specify the value of NextDNSName and NextHostedZoneId from the last response
in the DNSName and HostedZoneId parameters to get the next page of results. **/
      DNSName?: DNSName;
      /** If the request returned more than one page of results, submit another request
and specify the value of NextDNSName and NextHostedZoneId from the last response
in the DNSName and HostedZoneId parameters to get the next page of results. **/
      HostedZoneId?: ResourceId;
      /** Specify the maximum number of hosted zones to return per page of results. **/
      MaxItems?: PageMaxItems;
    }
    export interface ListHostedZonesByNameResponse {
      /** A complex type that contains information about the hosted zones associated with
the current AWS account. **/
      HostedZones: HostedZones;
      /** The DNSName value sent in the request. **/
      DNSName?: DNSName;
      /** The HostedZoneId value sent in the request. **/
      HostedZoneId?: ResourceId;
      /** A flag indicating whether there are more hosted zones to be listed. If your
results were truncated, you can make a follow-up request for the next page of
results by using the NextDNSName and NextHostedZoneId elements.

Valid Values: true | false **/
      IsTruncated: PageTruncated;
      /** If ListHostedZonesByNameResponse$IsTruncated is true , there are more hosted
zones associated with the current AWS account. To get the next page of results,
make another request to ListHostedZonesByName . Specify the value of 
ListHostedZonesByNameResponse$NextDNSName in the 
ListHostedZonesByNameRequest$DNSName element and 
ListHostedZonesByNameResponse$NextHostedZoneId in the 
ListHostedZonesByNameRequest$HostedZoneId element. **/
      NextDNSName?: DNSName;
      /** If ListHostedZonesByNameResponse$IsTruncated is true , there are more hosted
zones associated with the current AWS account. To get the next page of results,
make another request to ListHostedZonesByName . Specify the value of 
ListHostedZonesByNameResponse$NextDNSName in the 
ListHostedZonesByNameRequest$DNSName element and 
ListHostedZonesByNameResponse$NextHostedZoneId in the 
ListHostedZonesByNameRequest$HostedZoneId element. **/
      NextHostedZoneId?: ResourceId;
      /** The maximum number of hosted zones to be included in the response body. If the
number of hosted zones associated with this AWS account exceeds MaxItems , the
value of ListHostedZonesByNameResponse$IsTruncated in the response is true .
Call ListHostedZonesByName again and specify the value of 
ListHostedZonesByNameResponse$NextDNSName and 
ListHostedZonesByNameResponse$NextHostedZoneId elements respectively to get the
next page of results. **/
      MaxItems: PageMaxItems;
    }
    export interface ListHostedZonesRequest {
      /** If the request returned more than one page of results, submit another request
and specify the value of NextMarker from the last response in the marker 
parameter to get the next page of results. **/
      Marker?: PageMarker;
      /** Specify the maximum number of hosted zones to return per page of results. **/
      MaxItems?: PageMaxItems;
      DelegationSetId?: ResourceId;
    }
    export interface ListHostedZonesResponse {
      /** A complex type that contains information about the hosted zones associated with
the current AWS account. **/
      HostedZones: HostedZones;
      /** If the request returned more than one page of results, submit another request
and specify the value of NextMarker from the last response in the marker 
parameter to get the next page of results. **/
      Marker: PageMarker;
      /** A flag indicating whether there are more hosted zones to be listed. If your
results were truncated, you can make a follow-up request for the next page of
results by using the Marker element.

Valid Values: true | false **/
      IsTruncated: PageTruncated;
      /** Indicates where to continue listing hosted zones. If 
ListHostedZonesResponse$IsTruncated is true , make another request to 
ListHostedZones and include the value of the NextMarker element in the Marker 
element to get the next page of results. **/
      NextMarker?: PageMarker;
      /** The maximum number of hosted zones to be included in the response body. If the
number of hosted zones associated with this AWS account exceeds MaxItems , the
value of ListHostedZonesResponse$IsTruncated in the response is true . Call 
ListHostedZones again and specify the value of 
ListHostedZonesResponse$NextMarker in the ListHostedZonesRequest$Marker element
to get the next page of results. **/
      MaxItems: PageMaxItems;
    }
    export interface ListResourceRecordSetsRequest {
      /** The ID of the hosted zone that contains the resource record sets that you want
to get. **/
      HostedZoneId: ResourceId;
      /** The first name in the lexicographic ordering of domain names that you want the 
ListResourceRecordSets request to list. **/
      StartRecordName?: DNSName;
      /** The DNS type at which to begin the listing of resource record sets.

Valid values: A | AAAA | CNAME | MX | NS | PTR | SOA | SPF | SRV | TXT

Values for Weighted Resource Record Sets: A | AAAA | CNAME | TXT

Values for Regional Resource Record Sets: A | AAAA | CNAME | TXT

Values for Alias Resource Record Sets: A | AAAA

Constraint: Specifying type without specifying name returns an InvalidInput 
error. **/
      StartRecordType?: RRType;
      /** Weighted resource record sets only: If results were truncated for a given DNS
name and type, specify the value of 
ListResourceRecordSetsResponse$NextRecordIdentifier from the previous response
to get the next resource record set that has the current DNS name and type. **/
      StartRecordIdentifier?: ResourceRecordSetIdentifier;
      /** The maximum number of records you want in the response body. **/
      MaxItems?: PageMaxItems;
    }
    export interface ListResourceRecordSetsResponse {
      /** A complex type that contains information about the resource record sets that are
returned by the request. **/
      ResourceRecordSets: ResourceRecordSets;
      /** A flag that indicates whether there are more resource record sets to be listed.
If your results were truncated, you can make a follow-up request for the next
page of results by using the ListResourceRecordSetsResponse$NextRecordName 
element.

Valid Values: true | false **/
      IsTruncated: PageTruncated;
      /** If the results were truncated, the name of the next record in the list. This
element is present only if ListResourceRecordSetsResponse$IsTruncated is true. **/
      NextRecordName?: DNSName;
      /** If the results were truncated, the type of the next record in the list. This
element is present only if ListResourceRecordSetsResponse$IsTruncated is true. **/
      NextRecordType?: RRType;
      /** Weighted resource record sets only: If results were truncated for a given DNS
name and type, the value of SetIdentifier for the next resource record set that
has the current DNS name and type. **/
      NextRecordIdentifier?: ResourceRecordSetIdentifier;
      /** The maximum number of records you requested. The maximum value of MaxItems is
100. **/
      MaxItems: PageMaxItems;
    }
    export interface ListReusableDelegationSetsRequest {
      /** If the request returned more than one page of results, submit another request
and specify the value of NextMarker from the last response in the marker 
parameter to get the next page of results. **/
      Marker?: PageMarker;
      /** Specify the maximum number of reusable delegation sets to return per page of
results. **/
      MaxItems?: PageMaxItems;
    }
    export interface ListReusableDelegationSetsResponse {
      /** A complex type that contains information about the reusable delegation sets
associated with the current AWS account. **/
      DelegationSets: DelegationSets;
      /** If the request returned more than one page of results, submit another request
and specify the value of NextMarker from the last response in the marker 
parameter to get the next page of results. **/
      Marker: PageMarker;
      /** A flag indicating whether there are more reusable delegation sets to be listed.
If your results were truncated, you can make a follow-up request for the next
page of results by using the Marker element.

Valid Values: true | false **/
      IsTruncated: PageTruncated;
      /** Indicates where to continue listing reusable delegation sets. If 
ListReusableDelegationSetsResponse$IsTruncated is true , make another request to 
ListReusableDelegationSets and include the value of the NextMarker element in
the Marker element to get the next page of results. **/
      NextMarker?: PageMarker;
      /** The maximum number of reusable delegation sets to be included in the response
body. If the number of reusable delegation sets associated with this AWS account
exceeds MaxItems , the value of ListReusablDelegationSetsResponse$IsTruncated in
the response is true . Call ListReusableDelegationSets again and specify the
value of ListReusableDelegationSetsResponse$NextMarker in the 
ListReusableDelegationSetsRequest$Marker element to get the next page of
results. **/
      MaxItems: PageMaxItems;
    }
    export interface ListTagsForResourceRequest {
      /** The type of the resource.

- The resource type for health checks is healthcheck .

- The resource type for hosted zones is hostedzone . **/
      ResourceType: TagResourceType;
      /** The ID of the resource for which you want to retrieve tags. **/
      ResourceId: TagResourceId;
    }
    export interface ListTagsForResourceResponse {
      /** A ResourceTagSet containing tags associated with the specified resource. **/
      ResourceTagSet: ResourceTagSet;
    }
    export interface ListTagsForResourcesRequest {
      /** The type of the resources.

- The resource type for health checks is healthcheck .

- The resource type for hosted zones is hostedzone . **/
      ResourceType: TagResourceType;
      /** A complex type that contains the ResourceId element for each resource for which
you want to get a list of tags. **/
      ResourceIds: TagResourceIdList;
    }
    export interface ListTagsForResourcesResponse {
      /** A list of ResourceTagSet s containing tags associated with the specified
resources. **/
      ResourceTagSets: ResourceTagSetList;
    }
    export interface ListTrafficPoliciesRequest {
      /** For your first request to ListTrafficPolicies , do not include the 
TrafficPolicyIdMarker parameter.

If you have more traffic policies than the value of MaxItems , 
ListTrafficPolicies returns only the first MaxItems traffic policies. To get the
next group of MaxItems policies, submit another request to ListTrafficPolicies .
For the value of TrafficPolicyIdMarker , specify the value of the 
TrafficPolicyIdMarker element that was returned in the previous response.

Policies are listed in the order in which they were created. **/
      TrafficPolicyIdMarker?: TrafficPolicyId;
      /** The maximum number of traffic policies to be included in the response body for
this request. If you have more than MaxItems traffic policies, the value of the 
IsTruncated element in the response is true , and the value of the 
TrafficPolicyIdMarker element is the ID of the first traffic policy in the next
group of MaxItems traffic policies. **/
      MaxItems?: PageMaxItems;
    }
    export interface ListTrafficPoliciesResponse {
      /** A list that contains one TrafficPolicySummary element for each traffic policy
that was created by the current AWS account. **/
      TrafficPolicySummaries: TrafficPolicySummaries;
      /** A flag that indicates whether there are more traffic policies to be listed. If
the response was truncated, you can get the next group of MaxItems traffic
policies by calling ListTrafficPolicies again and specifying the value of the 
TrafficPolicyIdMarker element in the TrafficPolicyIdMarker request parameter.

Valid Values: true | false **/
      IsTruncated: PageTruncated;
      /** If the value of IsTruncated is true , TrafficPolicyIdMarker is the ID of the
first traffic policy in the next group of MaxItems traffic policies. **/
      TrafficPolicyIdMarker: TrafficPolicyId;
      /** The value that you specified for the MaxItems parameter in the call to 
ListTrafficPolicies that produced the current response. **/
      MaxItems: PageMaxItems;
    }
    export interface ListTrafficPolicyInstancesByHostedZoneRequest {
      /** The ID of the hosted zone for which you want to list traffic policy instances. **/
      HostedZoneId: ResourceId;
      /** For the first request to ListTrafficPolicyInstancesByHostedZone , omit this
value.

If the value of IsTruncated in the previous response was true , 
TrafficPolicyInstanceNameMarker is the name of the first traffic policy instance
in the next group of MaxItems traffic policy instances.

If the value of IsTruncated in the previous response was false , there are no
more traffic policy instances to get for this hosted zone.

If the value of IsTruncated in the previous response was false , omit this
value. **/
      TrafficPolicyInstanceNameMarker?: DNSName;
      /** For the first request to ListTrafficPolicyInstancesByHostedZone , omit this
value.

If the value of IsTruncated in the previous response was true , 
TrafficPolicyInstanceTypeMarker is the DNS type of the first traffic policy
instance in the next group of MaxItems traffic policy instances.

If the value of IsTruncated in the previous response was false , there are no
more traffic policy instances to get for this hosted zone. **/
      TrafficPolicyInstanceTypeMarker?: RRType;
      /** The maximum number of traffic policy instances to be included in the response
body for this request. If you have more than MaxItems traffic policy instances,
the value of the IsTruncated element in the response is true , and the values of 
HostedZoneIdMarker , TrafficPolicyInstanceNameMarker , and 
TrafficPolicyInstanceTypeMarker represent the first traffic policy instance in
the next group of MaxItems traffic policy instances. **/
      MaxItems?: PageMaxItems;
    }
    export interface ListTrafficPolicyInstancesByHostedZoneResponse {
      /** A list that contains one TrafficPolicyInstance element for each traffic policy
instance that matches the elements in the request. **/
      TrafficPolicyInstances: TrafficPolicyInstances;
      /** If IsTruncated is true , TrafficPolicyInstanceNameMarker is the name of the
first traffic policy instance in the next group of MaxItems traffic policy
instances. **/
      TrafficPolicyInstanceNameMarker?: DNSName;
      /** If IsTruncated is true, TrafficPolicyInstanceTypeMarker is the DNS type of the
resource record sets that are associated with the first traffic policy instance
in the next group of MaxItems traffic policy instances. **/
      TrafficPolicyInstanceTypeMarker?: RRType;
      /** A flag that indicates whether there are more traffic policy instances to be
listed. If the response was truncated, you can get the next group of MaxItems 
traffic policy instances by calling ListTrafficPolicyInstancesByHostedZone again
and specifying the values of the HostedZoneIdMarker , 
TrafficPolicyInstanceNameMarker , and TrafficPolicyInstanceTypeMarker elements
in the corresponding request parameters.

Valid Values: true | false **/
      IsTruncated: PageTruncated;
      /** The value that you specified for the MaxItems parameter in the call to 
ListTrafficPolicyInstancesByHostedZone that produced the current response. **/
      MaxItems: PageMaxItems;
    }
    export interface ListTrafficPolicyInstancesByPolicyRequest {
      /** The ID of the traffic policy for which you want to list traffic policy
instances. **/
      TrafficPolicyId: TrafficPolicyId;
      /** The version of the traffic policy for which you want to list traffic policy
instances. The version must be associated with the traffic policy that is
specified by TrafficPolicyId . **/
      TrafficPolicyVersion: TrafficPolicyVersion;
      /** For the first request to ListTrafficPolicyInstancesByPolicy , omit this value.

If the value of IsTruncated in the previous response was true , 
HostedZoneIdMarker is the ID of the hosted zone for the first traffic policy
instance in the next group of MaxItems traffic policy instances.

If the value of IsTruncated in the previous response was false , there are no
more traffic policy instances to get for this hosted zone.

If the value of IsTruncated in the previous response was false , omit this
value. **/
      HostedZoneIdMarker?: ResourceId;
      /** For the first request to ListTrafficPolicyInstancesByPolicy , omit this value.

If the value of IsTruncated in the previous response was true , 
TrafficPolicyInstanceNameMarker is the name of the first traffic policy instance
in the next group of MaxItems traffic policy instances.

If the value of IsTruncated in the previous response was false , there are no
more traffic policy instances to get for this hosted zone.

If the value of IsTruncated in the previous response was false , omit this
value. **/
      TrafficPolicyInstanceNameMarker?: DNSName;
      /** For the first request to ListTrafficPolicyInstancesByPolicy , omit this value.

If the value of IsTruncated in the previous response was true , 
TrafficPolicyInstanceTypeMarker is the DNS type of the first traffic policy
instance in the next group of MaxItems traffic policy instances.

If the value of IsTruncated in the previous response was false , there are no
more traffic policy instances to get for this hosted zone. **/
      TrafficPolicyInstanceTypeMarker?: RRType;
      /** The maximum number of traffic policy instances to be included in the response
body for this request. If you have more than MaxItems traffic policy instances,
the value of the IsTruncated element in the response is true , and the values of 
HostedZoneIdMarker , TrafficPolicyInstanceNameMarker , and 
TrafficPolicyInstanceTypeMarker represent the first traffic policy instance in
the next group of MaxItems traffic policy instances. **/
      MaxItems?: PageMaxItems;
    }
    export interface ListTrafficPolicyInstancesByPolicyResponse {
      /** A list that contains one TrafficPolicyInstance element for each traffic policy
instance that matches the elements in the request. **/
      TrafficPolicyInstances: TrafficPolicyInstances;
      /** If IsTruncated is true , HostedZoneIdMarker is the ID of the hosted zone of the
first traffic policy instance in the next group of MaxItems traffic policy
instances. **/
      HostedZoneIdMarker?: ResourceId;
      /** If IsTruncated is true , TrafficPolicyInstanceNameMarker is the name of the
first traffic policy instance in the next group of MaxItems traffic policy
instances. **/
      TrafficPolicyInstanceNameMarker?: DNSName;
      /** If IsTruncated is true , TrafficPolicyInstanceTypeMarker is the DNS type of the
resource record sets that are associated with the first traffic policy instance
in the next group of MaxItems traffic policy instances. **/
      TrafficPolicyInstanceTypeMarker?: RRType;
      /** A flag that indicates whether there are more traffic policy instances to be
listed. If the response was truncated, you can get the next group of MaxItems 
traffic policy instances by calling ListTrafficPolicyInstancesByPolicy again and
specifying the values of the HostedZoneIdMarker , 
TrafficPolicyInstanceNameMarker , and TrafficPolicyInstanceTypeMarker elements
in the corresponding request parameters.

Valid Values: true | false **/
      IsTruncated: PageTruncated;
      /** The value that you specified for the MaxItems parameter in the call to 
ListTrafficPolicyInstancesByPolicy that produced the current response. **/
      MaxItems: PageMaxItems;
    }
    export interface ListTrafficPolicyInstancesRequest {
      /** For the first request to ListTrafficPolicyInstances , omit this value.

If the value of IsTruncated in the previous response was true , you have more
traffic policy instances. To get the next group of MaxItems traffic policy
instances, submit another ListTrafficPolicyInstances request. For the value of 
HostedZoneIdMarker , specify the value of HostedZoneIdMarker from the previous
response, which is the hosted zone ID of the first traffic policy instance in
the next group of MaxItems traffic policy instances.

If the value of IsTruncated in the previous response was false , there are no
more traffic policy instances to get. **/
      HostedZoneIdMarker?: ResourceId;
      /** For the first request to ListTrafficPolicyInstances , omit this value.

If the value of IsTruncated in the previous response was true , 
TrafficPolicyInstanceNameMarker is the name of the first traffic policy instance
in the next group of MaxItems traffic policy instances.

If the value of IsTruncated in the previous response was false , there are no
more traffic policy instances to get. **/
      TrafficPolicyInstanceNameMarker?: DNSName;
      /** For the first request to ListTrafficPolicyInstances , omit this value.

If the value of IsTruncated in the previous response was true , 
TrafficPolicyInstanceTypeMarker is the DNS type of the first traffic policy
instance in the next group of MaxItems traffic policy instances.

If the value of IsTruncated in the previous response was false , there are no
more traffic policy instances to get. **/
      TrafficPolicyInstanceTypeMarker?: RRType;
      /** The maximum number of traffic policy instances to be included in the response
body for this request. If you have more than MaxItems traffic policy instances,
the value of the IsTruncated element in the response is true , and the values of 
HostedZoneIdMarker , TrafficPolicyInstanceNameMarker , and 
TrafficPolicyInstanceTypeMarker represent the first traffic policy instance in
the next group of MaxItems traffic policy instances. **/
      MaxItems?: PageMaxItems;
    }
    export interface ListTrafficPolicyInstancesResponse {
      /** A list that contains one TrafficPolicyInstance element for each traffic policy
instance that matches the elements in the request. **/
      TrafficPolicyInstances: TrafficPolicyInstances;
      /** If IsTruncated is true , HostedZoneIdMarker is the ID of the hosted zone of the
first traffic policy instance in the next group of MaxItems traffic policy
instances. **/
      HostedZoneIdMarker?: ResourceId;
      /** If IsTruncated is true , TrafficPolicyInstanceNameMarker is the name of the
first traffic policy instance in the next group of MaxItems traffic policy
instances. **/
      TrafficPolicyInstanceNameMarker?: DNSName;
      /** If IsTruncated is true , TrafficPolicyInstanceTypeMarker is the DNS type of the
resource record sets that are associated with the first traffic policy instance
in the next group of MaxItems traffic policy instances. **/
      TrafficPolicyInstanceTypeMarker?: RRType;
      /** A flag that indicates whether there are more traffic policy instances to be
listed. If the response was truncated, you can get the next group of MaxItems 
traffic policy instances by calling ListTrafficPolicyInstances again and
specifying the values of the HostedZoneIdMarker , 
TrafficPolicyInstanceNameMarker , and TrafficPolicyInstanceTypeMarker elements
in the corresponding request parameters.

Valid Values: true | false **/
      IsTruncated: PageTruncated;
      /** The value that you specified for the MaxItems parameter in the call to 
ListTrafficPolicyInstances that produced the current response. **/
      MaxItems: PageMaxItems;
    }
    export interface ListTrafficPolicyVersionsRequest {
      /** Specify the value of Id of the traffic policy for which you want to list all
versions. **/
      Id: TrafficPolicyId;
      /** For your first request to ListTrafficPolicyVersions , do not include the 
TrafficPolicyVersionMarker parameter.

If you have more traffic policy versions than the value of MaxItems , 
ListTrafficPolicyVersions returns only the first group of MaxItems versions. To
get the next group of MaxItems traffic policy versions, submit another request
to ListTrafficPolicyVersions . For the value of TrafficPolicyVersionMarker ,
specify the value of the TrafficPolicyVersionMarker element that was returned in
the previous response.

Traffic policy versions are listed in sequential order. **/
      TrafficPolicyVersionMarker?: TrafficPolicyVersionMarker;
      /** The maximum number of traffic policy versions that you want Amazon Route 53 to
include in the response body for this request. If the specified traffic policy
has more than MaxItems versions, the value of the IsTruncated element in the
response is true , and the value of the TrafficPolicyVersionMarker element is
the ID of the first version in the next group of MaxItems traffic policy
versions. **/
      MaxItems?: PageMaxItems;
    }
    export interface ListTrafficPolicyVersionsResponse {
      /** A list that contains one TrafficPolicy element for each traffic policy version
that is associated with the specified traffic policy. **/
      TrafficPolicies: TrafficPolicies;
      /** A flag that indicates whether there are more traffic policies to be listed. If
the response was truncated, you can get the next group of maxitems traffic
policies by calling ListTrafficPolicyVersions again and specifying the value of
the NextMarker element in the marker parameter.

Valid Values: true | false **/
      IsTruncated: PageTruncated;
      /** If IsTruncated is true , the value of TrafficPolicyVersionMarker identifies the
first traffic policy in the next group of MaxItems traffic policies. Call 
ListTrafficPolicyVersions again and specify the value of 
TrafficPolicyVersionMarker in the TrafficPolicyVersionMarker request parameter.

This element is present only if IsTruncated is true . **/
      TrafficPolicyVersionMarker: TrafficPolicyVersionMarker;
      /** The value that you specified for the maxitems parameter in the call to 
ListTrafficPolicyVersions that produced the current response. **/
      MaxItems: PageMaxItems;
    }
    export interface NoSuchChange {
      message?: ErrorMessage;
    }
    export interface NoSuchDelegationSet {
      /** Descriptive message for the error response. **/
      message?: ErrorMessage;
    }
    export interface NoSuchGeoLocation {
      /** Descriptive message for the error response. **/
      message?: ErrorMessage;
    }
    export interface NoSuchHealthCheck {
      /** Descriptive message for the error response. **/
      message?: ErrorMessage;
    }
    export interface NoSuchHostedZone {
      message?: ErrorMessage;
    }
    export interface NoSuchTrafficPolicy {
      /** Descriptive message for the error response. **/
      message?: ErrorMessage;
    }
    export interface NoSuchTrafficPolicyInstance {
      /** Descriptive message for the error response. **/
      message?: ErrorMessage;
    }
    export interface PriorRequestNotComplete {
      message?: ErrorMessage;
    }
    export interface PublicZoneVPCAssociation {
      /** Descriptive message for the error response. **/
      message?: ErrorMessage;
    }
    export interface ResourceRecord {
      /** The current or new DNS record value, not to exceed 4,000 characters. In the case
of a DELETE action, if the current value does not match the actual value, an
error is returned. For descriptions about how to format Value for different
record types, see Supported DNS Resource Record Types
[http://docs.aws.amazon.com/Route53/latest/DeveloperGuide/ResourceRecordTypes.html] 
in the Amazon Route 53 Developer Guide .

You can specify more than one value for all record types except CNAME and SOA . **/
      Value: RData;
    }
    export interface ResourceRecordSet {
      /** The name of the domain you want to perform the action on.

Enter a fully qualified domain name, for example, www.example.com . You can
optionally include a trailing dot. If you omit the trailing dot, Amazon Route 53
still assumes that the domain name that you specify is fully qualified. This
means that Amazon Route 53 treats www.example.com (without a trailing dot) and 
www.example.com. (with a trailing dot) as identical.

For information about how to specify characters other than a-z, 0-9, and -
(hyphen) and how to specify internationalized domain names, see DNS Domain Name
Format
[http://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DomainNameFormat.html] 
in the Amazon Route 53 Developer Guide .

You can use an asterisk (&amp;#42;) character in the name. DNS treats the * character
either as a wildcard or as the * character (ASCII 42), depending on where it
appears in the name. For more information, see Using an Asterisk (*) in the
Names of Hosted Zones and Resource Record Sets
[http://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DomainNameFormat.html#domain-name-format-asterisk] 
in the Amazon Route 53 Developer Guide

You can&#x27;t use the * wildcard for resource records sets that have a type of NS. **/
      Name: DNSName;
      /** The DNS record type. For information about different record types and how data
is encoded for them, see Supported DNS Resource Record Types
[http://docs.aws.amazon.com/Route53/latest/DeveloperGuide/ResourceRecordTypes.html] 
in the Amazon Route 53 Developer Guide .

Valid values for basic resource record sets: A | AAAA | CNAME | MX | NS | PTR | 
SOA | SPF | SRV | TXT

Values for weighted, latency, geolocation, and failover resource record sets: A 
| AAAA | CNAME | MX | PTR | SPF | SRV | TXT . When creating a group of weighted,
latency, geolocation, or failover resource record sets, specify the same value
for all of the resource record sets in the group.

SPF records were formerly used to verify the identity of the sender of email
messages. However, we no longer recommend that you create resource record sets
for which the value of Type is SPF . RFC 7208, Sender Policy Framework (SPF) for
Authorizing Use of Domains in Email, Version 1 , has been updated to say,
&quot;...[I]ts existence and mechanism defined in [RFC4408] have led to some
interoperability issues. Accordingly, its use is no longer appropriate for SPF
version 1; implementations are not to use it.&quot; In RFC 7208, see section 14.1, 
The SPF DNS Record Type [http://tools.ietf.org/html/rfc7208#section-14.1] .
Values for alias resource record sets:

&amp;#42; CloudFront distributions: A
* ELB load balancers: A | AAAA
* Amazon S3 buckets: A
* Another resource record set in this hosted zone: Specify the type of the
 resource record set for which you&#x27;re creating the alias. Specify any value
 except NS or SOA . **/
      Type: RRType;
      /** Weighted, Latency, Geo, and Failover resource record sets only: An identifier
that differentiates among multiple resource record sets that have the same
combination of DNS name and type. The value of SetIdentifier must be unique for
each resource record set that has the same combination of DNS name and type. **/
      SetIdentifier?: ResourceRecordSetIdentifier;
      /** Weighted resource record sets only: Among resource record sets that have the
same combination of DNS name and type, a value that determines the proportion of
DNS queries that Amazon Route 53 responds to using the current resource record
set. Amazon Route 53 calculates the sum of the weights for the resource record
sets that have the same combination of DNS name and type. Amazon Route 53 then
responds to queries based on the ratio of a resource&#x27;s weight to the total. Note
the following:

&amp;#42; You must specify a value for the Weight element for every weighted resource
 record set.
* You can only specify one ResourceRecord per weighted resource record set.
* You cannot create latency, failover, or geolocation resource record sets that
 have the same values for the Name and Type elements as weighted resource
 record sets.
* You can create a maximum of 100 weighted resource record sets that have the
 same values for the Name and Type elements.
* For weighted (but not weighted alias) resource record sets, if you set Weight 
 to 0 for a resource record set, Amazon Route 53 never responds to queries
 with the applicable value for that resource record set. However, if you set 
 Weight to 0 for all resource record sets that have the same combination of
 DNS name and type, traffic is routed to all resources with equal probability.
 
 The effect of setting Weight to 0 is different when you associate health
 checks with weighted resource record sets. For more information, see Options
 for Configuring Amazon Route 53 Active-Active and Active-Passive Failover
 [http://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-configuring-options.html] 
 in the Amazon Route 53 Developer Guide . **/
      Weight?: ResourceRecordSetWeight;
      /** Latency-based resource record sets only: The Amazon EC2 region where the
resource that is specified in this resource record set resides. The resource
typically is an AWS resource, such as an Amazon EC2 instance or an ELB load
balancer, and is referred to by an IP address or a DNS domain name, depending on
the record type.

You can create latency and latency alias resource record sets only in public
hosted zones.When Amazon Route 53 receives a DNS query for a domain name and
type for which you have created latency resource record sets, Amazon Route 53
selects the latency resource record set that has the lowest latency between the
end user and the associated Amazon EC2 region. Amazon Route 53 then returns the
value that is associated with the selected resource record set.

Note the following:

&amp;#42; You can only specify one ResourceRecord per latency resource record set.
* You can only create one latency resource record set for each Amazon EC2
 region.
* You are not required to create latency resource record sets for all Amazon
 EC2 regions. Amazon Route 53 will choose the region with the best latency
 from among the regions for which you create latency resource record sets.
* You cannot create non-latency resource record sets that have the same values
 for the Name and Type elements as latency resource record sets. **/
      Region?: ResourceRecordSetRegion;
      /** Geo location resource record sets only: A complex type that lets you control how
Amazon Route 53 responds to DNS queries based on the geographic origin of the
query. For example, if you want all queries from Africa to be routed to a web
server with an IP address of 192.0.2.111 , create a resource record set with a 
Type of A and a ContinentCode of AF .

You can create geolocation and geolocation alias resource record sets only in
public hosted zones.If you create separate resource record sets for overlapping
geographic regions (for example, one resource record set for a continent and one
for a country on the same continent), priority goes to the smallest geographic
region. This allows you to route most queries for a continent to one resource
and to route queries for a country on that continent to a different resource.

You cannot create two geolocation resource record sets that specify the same
geographic location.

The value &amp;#42; in the CountryCode element matches all geographic locations that
aren&#x27;t specified in other geolocation resource record sets that have the same
values for the Name and Type elements.

Geolocation works by mapping IP addresses to locations. However, some IP
addresses aren&#x27;t mapped to geographic locations, so even if you create
geolocation resource record sets that cover all seven continents, Amazon Route
53 will receive some DNS queries from locations that it can&#x27;t identify. We
recommend that you create a resource record set for which the value of 
CountryCode is * , which handles both queries that come from locations for which
you haven&#x27;t created geolocation resource record sets and queries from IP
addresses that aren&#x27;t mapped to a location. If you don&#x27;t create a * resource
record set, Amazon Route 53 returns a &quot;no answer&quot; response for queries from
those locations.You cannot create non-geolocation resource record sets that have
the same values for the Name and Type elements as geolocation resource record
sets. **/
      GeoLocation?: GeoLocation;
      /** Failover resource record sets only: To configure failover, you add the Failover 
element to two resource record sets. For one resource record set, you specify 
PRIMARY as the value for Failover ; for the other resource record set, you
specify SECONDARY . In addition, you include the HealthCheckId element and
specify the health check that you want Amazon Route 53 to perform for each
resource record set.

You can create failover and failover alias resource record sets only in public
hosted zones.Except where noted, the following failover behaviors assume that
you have included the HealthCheckId element in both resource record sets:

&amp;#42; When the primary resource record set is healthy, Amazon Route 53 responds to
 DNS queries with the applicable value from the primary resource record set
 regardless of the health of the secondary resource record set.
* When the primary resource record set is unhealthy and the secondary resource
 record set is healthy, Amazon Route 53 responds to DNS queries with the
 applicable value from the secondary resource record set.
* When the secondary resource record set is unhealthy, Amazon Route 53 responds
 to DNS queries with the applicable value from the primary resource record set
 regardless of the health of the primary resource record set.
* If you omit the HealthCheckId element for the secondary resource record set,
 and if the primary resource record set is unhealthy, Amazon Route 53 always
 responds to DNS queries with the applicable value from the secondary resource
 record set. This is true regardless of the health of the associated endpoint.

You cannot create non-failover resource record sets that have the same values
for the Name and Type elements as failover resource record sets.

For failover alias resource record sets, you must also include the 
EvaluateTargetHealth element and set the value to true.

For more information about configuring failover for Amazon Route 53, see Amazon
Route 53 Health Checks and DNS Failover
[http://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover.html] in
the Amazon Route 53 Developer Guide .

Valid values: PRIMARY | SECONDARY **/
      Failover?: ResourceRecordSetFailover;
      /** The cache time to live for the current resource record set. Note the following:

&amp;#42; If you&#x27;re creating an alias resource record set, omit TTL . Amazon Route 53
 uses the value of TTL for the alias target.
* If you&#x27;re associating this resource record set with a health check (if you&#x27;re
 adding a HealthCheckId element), we recommend that you specify a TTL of 60
 seconds or less so clients respond quickly to changes in health status.
* All of the resource record sets in a group of weighted, latency, geolocation,
 or failover resource record sets must have the same value for TTL .
* If a group of weighted resource record sets includes one or more weighted
 alias resource record sets for which the alias target is an ELB load
 balancer, we recommend that you specify a TTL of 60 seconds for all of the
 non-alias weighted resource record sets that have the same name and type.
 Values other than 60 seconds (the TTL for load balancers) will change the
 effect of the values that you specify for Weight . **/
      TTL?: TTL;
      /** A complex type that contains the resource records for the current resource
record set. **/
      ResourceRecords?: ResourceRecords;
      /** Alias resource record sets only: Information about the AWS resource to which you
are redirecting traffic. **/
      AliasTarget?: AliasTarget;
      /** Health Check resource record sets only, not required for alias resource record
sets: An identifier that is used to identify health check associated with the
resource record set. **/
      HealthCheckId?: HealthCheckId;
      TrafficPolicyInstanceId?: TrafficPolicyInstanceId;
    }
    export interface ResourceTagSet {
      /** The type of the resource.

- The resource type for health checks is healthcheck .

- The resource type for hosted zones is hostedzone . **/
      ResourceType?: TagResourceType;
      /** The ID for the specified resource. **/
      ResourceId?: TagResourceId;
      /** The tags associated with the specified resource. **/
      Tags?: TagList;
    }
    export interface StatusReport {
      /** The observed health check status. **/
      Status?: Status;
      /** The date and time the health check status was observed, in the format 
YYYY-MM-DDThh:mm:ssZ , as specified in the ISO 8601 standard (for example,
2009-11-19T19:37:58Z). The Z after the time indicates that the time is listed in
Coordinated Universal Time (UTC). **/
      CheckedTime?: TimeStamp;
    }
    export interface Tag {
      /** The key for a Tag . **/
      Key?: TagKey;
      /** The value for a Tag . **/
      Value?: TagValue;
    }
    export interface ThrottlingException {
      message?: ErrorMessage;
    }
    export interface TooManyHealthChecks {
      message?: ErrorMessage;
    }
    export interface TooManyHostedZones {
      /** Descriptive message for the error response. **/
      message?: ErrorMessage;
    }
    export interface TooManyTrafficPolicies {
      /** Descriptive message for the error response. **/
      message?: ErrorMessage;
    }
    export interface TooManyTrafficPolicyInstances {
      /** Descriptive message for the error response. **/
      message?: ErrorMessage;
    }
    export interface TrafficPolicy {
      Id: TrafficPolicyId;
      Version: TrafficPolicyVersion;
      Name: TrafficPolicyName;
      Type: RRType;
      Document: TrafficPolicyDocument;
      Comment?: TrafficPolicyComment;
    }
    export interface TrafficPolicyAlreadyExists {
      /** Descriptive message for the error response. **/
      message?: ErrorMessage;
    }
    export interface TrafficPolicyInUse {
      /** Descriptive message for the error response. **/
      message?: ErrorMessage;
    }
    export interface TrafficPolicyInstance {
      Id: TrafficPolicyInstanceId;
      HostedZoneId: ResourceId;
      Name: DNSName;
      TTL: TTL;
      State: TrafficPolicyInstanceState;
      Message: Message;
      TrafficPolicyId: TrafficPolicyId;
      TrafficPolicyVersion: TrafficPolicyVersion;
      TrafficPolicyType: RRType;
    }
    export interface TrafficPolicyInstanceAlreadyExists {
      /** Descriptive message for the error response. **/
      message?: ErrorMessage;
    }
    export interface TrafficPolicySummary {
      Id: TrafficPolicyId;
      Name: TrafficPolicyName;
      Type: RRType;
      LatestVersion: TrafficPolicyVersion;
      TrafficPolicyCount: TrafficPolicyVersion;
    }
    export interface UpdateHealthCheckRequest {
      /** The ID of the health check to update. **/
      HealthCheckId: HealthCheckId;
      /** Optional. When you specify a health check version, Amazon Route 53 compares this
value with the current value in the health check, which prevents you from
updating the health check when the versions don&#x27;t match. Using 
HealthCheckVersion lets you prevent overwriting another change to the health
check. **/
      HealthCheckVersion?: HealthCheckVersion;
      /** The IP address of the resource that you want to check.

Specify this value only if you want to change it. **/
      IPAddress?: IPAddress;
      /** The port on which you want Amazon Route 53 to open a connection to perform
health checks.

Specify this value only if you want to change it. **/
      Port?: Port;
      /** The path that you want Amazon Route 53 to request when performing health checks.
The path can be any value for which your endpoint will return an HTTP status
code of 2xx or 3xx when the endpoint is healthy, for example the file
/docs/route53-health-check.html.

Specify this value only if you want to change it. **/
      ResourcePath?: ResourcePath;
      /** Fully qualified domain name of the instance to be health checked.

Specify this value only if you want to change it. **/
      FullyQualifiedDomainName?: FullyQualifiedDomainName;
      /** If the value of Type is HTTP_STR_MATCH or HTTP_STR_MATCH , the string that you
want Amazon Route 53 to search for in the response body from the specified
resource. If the string appears in the response body, Amazon Route 53 considers
the resource healthy. Amazon Route 53 considers case when searching for 
SearchString in the response body.

Specify this value only if you want to change it. **/
      SearchString?: SearchString;
      /** The number of consecutive health checks that an endpoint must pass or fail for
Amazon Route 53 to change the current status of the endpoint from unhealthy to
healthy or vice versa.

Valid values are integers between 1 and 10. For more information, see &quot;How
Amazon Route 53 Determines Whether an Endpoint Is Healthy&quot; in the Amazon Route
53 Developer Guide.

Specify this value only if you want to change it. **/
      FailureThreshold?: FailureThreshold;
      /** A boolean value that indicates whether the status of health check should be
inverted. For example, if a health check is healthy but Inverted is True , then
Amazon Route 53 considers the health check to be unhealthy.

Specify this value only if you want to change it. **/
      Inverted?: Inverted;
      /** The minimum number of child health checks that must be healthy for Amazon Route
53 to consider the parent health check to be healthy. Valid values are integers
between 0 and 256, inclusive.

Specify this value only if you want to change it. **/
      HealthThreshold?: HealthThreshold;
      /** For a specified parent health check, a list of HealthCheckId values for the
associated child health checks.

Specify this value only if you want to change it. **/
      ChildHealthChecks?: ChildHealthCheckList;
      /** Specify whether you want Amazon Route 53 to send the value of 
FullyQualifiedDomainName to the endpoint in the client_hello message during TLS
negotiation. If you don&#x27;t specify a value for EnableSNI , Amazon Route 53
defaults to true when Type is HTTPS or HTTPS_STR_MATCH and defaults to false 
when Type is any other value.

Specify this value only if you want to change it. **/
      EnableSNI?: EnableSNI;
      /** A list of HealthCheckRegion values that specify the Amazon EC2 regions that you
want Amazon Route 53 to use to perform health checks. You must specify at least
three regions.

When you remove a region from the list, Amazon Route 53 will briefly continue to
check your endpoint from that region.Specify this value only if you want to
change it. **/
      Regions?: HealthCheckRegionList;
      AlarmIdentifier?: AlarmIdentifier;
      InsufficientDataHealthStatus?: InsufficientDataHealthStatus;
    }
    export interface UpdateHealthCheckResponse {
      HealthCheck: HealthCheck;
    }
    export interface UpdateHostedZoneCommentRequest {
      /** The ID of the hosted zone you want to update. **/
      Id: ResourceId;
      /** A comment about your hosted zone. **/
      Comment?: ResourceDescription;
    }
    export interface UpdateHostedZoneCommentResponse {
      HostedZone: HostedZone;
    }
    export interface UpdateTrafficPolicyCommentRequest {
      /** The value of Id for the traffic policy for which you want to update the comment. **/
      Id: TrafficPolicyId;
      /** The value of Version for the traffic policy for which you want to update the
comment. **/
      Version: TrafficPolicyVersion;
      /** The new comment for the specified traffic policy and version. **/
      Comment: TrafficPolicyComment;
    }
    export interface UpdateTrafficPolicyCommentResponse {
      /** A complex type that contains settings for the specified traffic policy. **/
      TrafficPolicy: TrafficPolicy;
    }
    export interface UpdateTrafficPolicyInstanceRequest {
      /** The ID of the traffic policy instance that you want to update. **/
      Id: TrafficPolicyInstanceId;
      /** The TTL that you want Amazon Route 53 to assign to all of the updated resource
record sets. **/
      TTL: TTL;
      /** The ID of the traffic policy that you want Amazon Route 53 to use to update
resource record sets for the specified traffic policy instance. **/
      TrafficPolicyId: TrafficPolicyId;
      /** The version of the traffic policy that you want Amazon Route 53 to use to update
resource record sets for the specified traffic policy instance. **/
      TrafficPolicyVersion: TrafficPolicyVersion;
    }
    export interface UpdateTrafficPolicyInstanceResponse {
      /** A complex type that contains settings for the updated traffic policy instance. **/
      TrafficPolicyInstance: TrafficPolicyInstance;
    }
    export interface VPC {
      VPCRegion?: VPCRegion;
      VPCId?: VPCId;
    }
    export interface VPCAssociationNotFound {
      /** Descriptive message for the error response. **/
      message?: ErrorMessage;
    }
  }
}
