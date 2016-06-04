// Type definitions for aws-sdk - Elastic Load Balancing
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

// COMMENTED <reference path="./aws-sdk.d.ts" />

declare module "aws-sdk" {

  /**
   * apiVersion: 2012-06-01
   * endpointPrefix: elasticloadbalancing
   * serviceAbbreviation:
   * signatureVersion: v4
   * protocol: query
   *
   * Elastic Load BalancingElastic Load Balancing distributes incoming traffic across
   your EC2 instances.

   For information about the features of Elastic Load Balancing, see What Is
   Elastic Load Balancing?
   [http://docs.aws.amazon.com/ElasticLoadBalancing/latest/DeveloperGuide/elastic-load-balancing.html]
   in the Elastic Load Balancing Developer Guide .

   For information about the AWS regions supported by Elastic Load Balancing, see
   Regions and Endpoints - Elastic Load Balancing
   [http://docs.aws.amazon.com/general/latest/gr/rande.html#elb_region] in the
   Amazon Web Services General Reference .

   All Elastic Load Balancing operations are idempotent , which means that they
   complete at most one time. If you repeat an operation, it succeeds with a 200 OK
   response code.
   *
   */
  export class ELB extends Service {
    constructor(options?: any);
    endpoint: Endpoint;
    /**
     * Adds the specified tags to the specified load balancer. Each load balancer can
have a maximum of 10 tags.

Each tag consists of a key and an optional value. If a tag with the same key is
already associated with the load balancer, AddTags updates its value.

For more information, see Tag Your Load Balancer
[http://docs.aws.amazon.com/ElasticLoadBalancing/latest/DeveloperGuide/add-remove-tags.html] 
in the Elastic Load Balancing Developer Guide .
     *
     * @error AccessPointNotFoundException The specified load balancer does not exist.  
     * @error TooManyTagsException The quota for the number of tags that can be assigned to a load balancer has
been reached.  
     * @error DuplicateTagKeysException A tag key was specified more than once.  
     */
    addTags(params:ELB.AddTagsInput, callback?:(err:ELB.AccessPointNotFoundException | ELB.TooManyTagsException | ELB.DuplicateTagKeysException | any, data:ELB.AddTagsOutput | any) => void):Request<ELB.AddTagsOutput | any, ELB.AccessPointNotFoundException | ELB.TooManyTagsException | ELB.DuplicateTagKeysException | any>;
    /**
     * Associates one or more security groups with your load balancer in a virtual
private cloud (VPC). The specified security groups override the previously
associated security groups.

For more information, see Security Groups for Load Balancers in a VPC
[http://docs.aws.amazon.com/ElasticLoadBalancing/latest/DeveloperGuide/elb-security-groups.html#elb-vpc-security-groups] 
in the Elastic Load Balancing Developer Guide .
     *
     * @error AccessPointNotFoundException The specified load balancer does not exist.  
     * @error InvalidConfigurationRequestException The requested configuration change is not valid.  
     * @error InvalidSecurityGroupException One or more of the specified security groups do not exist.  
     */
    applySecurityGroupsToLoadBalancer(params:ELB.ApplySecurityGroupsToLoadBalancerInput, callback?:(err:ELB.AccessPointNotFoundException | ELB.InvalidConfigurationRequestException | ELB.InvalidSecurityGroupException | any, data:ELB.ApplySecurityGroupsToLoadBalancerOutput | any) => void):Request<ELB.ApplySecurityGroupsToLoadBalancerOutput | any, ELB.AccessPointNotFoundException | ELB.InvalidConfigurationRequestException | ELB.InvalidSecurityGroupException | any>;
    /**
     * Adds one or more subnets to the set of configured subnets for the specified load
balancer.

The load balancer evenly distributes requests across all registered subnets. For
more information, see Add or Remove Subnets for Your Load Balancer in a VPC
[http://docs.aws.amazon.com/ElasticLoadBalancing/latest/DeveloperGuide/elb-manage-subnets.html] 
in the Elastic Load Balancing Developer Guide .
     *
     * @error AccessPointNotFoundException The specified load balancer does not exist.  
     * @error InvalidConfigurationRequestException The requested configuration change is not valid.  
     * @error SubnetNotFoundException One or more of the specified subnets do not exist.  
     * @error InvalidSubnetException The specified VPC has no associated Internet gateway.  
     */
    attachLoadBalancerToSubnets(params:ELB.AttachLoadBalancerToSubnetsInput, callback?:(err:ELB.AccessPointNotFoundException | ELB.InvalidConfigurationRequestException | ELB.SubnetNotFoundException | ELB.InvalidSubnetException | any, data:ELB.AttachLoadBalancerToSubnetsOutput | any) => void):Request<ELB.AttachLoadBalancerToSubnetsOutput | any, ELB.AccessPointNotFoundException | ELB.InvalidConfigurationRequestException | ELB.SubnetNotFoundException | ELB.InvalidSubnetException | any>;
    /**
     * Specifies the health check settings to use when evaluating the health state of
your back-end instances.

For more information, see Configure Health Checks
[http://docs.aws.amazon.com/ElasticLoadBalancing/latest/DeveloperGuide/elb-healthchecks.html] 
in the Elastic Load Balancing Developer Guide .
     *
     * @error AccessPointNotFoundException The specified load balancer does not exist.  
     */
    configureHealthCheck(params:ELB.ConfigureHealthCheckInput, callback?:(err:ELB.AccessPointNotFoundException | any, data:ELB.ConfigureHealthCheckOutput | any) => void):Request<ELB.ConfigureHealthCheckOutput | any, ELB.AccessPointNotFoundException | any>;
    /**
     * Generates a stickiness policy with sticky session lifetimes that follow that of
an application-generated cookie. This policy can be associated only with
HTTP/HTTPS listeners.

This policy is similar to the policy created by CreateLBCookieStickinessPolicy ,
except that the lifetime of the special Elastic Load Balancing cookie, AWSELB ,
follows the lifetime of the application-generated cookie specified in the policy
configuration. The load balancer only inserts a new stickiness cookie when the
application response includes a new application cookie.

If the application cookie is explicitly removed or expires, the session stops
being sticky until a new application cookie is issued.

For more information, see Application-Controlled Session Stickiness
[http://docs.aws.amazon.com/ElasticLoadBalancing/latest/DeveloperGuide/elb-sticky-sessions.html#enable-sticky-sessions-application] 
in the Elastic Load Balancing Developer Guide .
     *
     * @error AccessPointNotFoundException The specified load balancer does not exist.  
     * @error DuplicatePolicyNameException A policy with the specified name already exists for this load balancer.  
     * @error TooManyPoliciesException The quota for the number of policies for this load balancer has been reached.  
     * @error InvalidConfigurationRequestException The requested configuration change is not valid.  
     */
    createAppCookieStickinessPolicy(params:ELB.CreateAppCookieStickinessPolicyInput, callback?:(err:ELB.AccessPointNotFoundException | ELB.DuplicatePolicyNameException | ELB.TooManyPoliciesException | ELB.InvalidConfigurationRequestException | any, data:ELB.CreateAppCookieStickinessPolicyOutput | any) => void):Request<ELB.CreateAppCookieStickinessPolicyOutput | any, ELB.AccessPointNotFoundException | ELB.DuplicatePolicyNameException | ELB.TooManyPoliciesException | ELB.InvalidConfigurationRequestException | any>;
    /**
     * Generates a stickiness policy with sticky session lifetimes controlled by the
lifetime of the browser (user-agent) or a specified expiration period. This
policy can be associated only with HTTP/HTTPS listeners.

When a load balancer implements this policy, the load balancer uses a special
cookie to track the back-end server instance for each request. When the load
balancer receives a request, it first checks to see if this cookie is present in
the request. If so, the load balancer sends the request to the application
server specified in the cookie. If not, the load balancer sends the request to a
server that is chosen based on the existing load-balancing algorithm.

A cookie is inserted into the response for binding subsequent requests from the
same user to that server. The validity of the cookie is based on the cookie
expiration time, which is specified in the policy configuration.

For more information, see Duration-Based Session Stickiness
[http://docs.aws.amazon.com/ElasticLoadBalancing/latest/DeveloperGuide/elb-sticky-sessions.html#enable-sticky-sessions-duration] 
in the Elastic Load Balancing Developer Guide .
     *
     * @error AccessPointNotFoundException The specified load balancer does not exist.  
     * @error DuplicatePolicyNameException A policy with the specified name already exists for this load balancer.  
     * @error TooManyPoliciesException The quota for the number of policies for this load balancer has been reached.  
     * @error InvalidConfigurationRequestException The requested configuration change is not valid.  
     */
    createLBCookieStickinessPolicy(params:ELB.CreateLBCookieStickinessPolicyInput, callback?:(err:ELB.AccessPointNotFoundException | ELB.DuplicatePolicyNameException | ELB.TooManyPoliciesException | ELB.InvalidConfigurationRequestException | any, data:ELB.CreateLBCookieStickinessPolicyOutput | any) => void):Request<ELB.CreateLBCookieStickinessPolicyOutput | any, ELB.AccessPointNotFoundException | ELB.DuplicatePolicyNameException | ELB.TooManyPoliciesException | ELB.InvalidConfigurationRequestException | any>;
    /**
     * Creates a load balancer.

If the call completes successfully, a new load balancer is created with a unique
Domain Name Service (DNS) name. The load balancer receives incoming traffic and
routes it to the registered instances. For more information, see How Elastic
Load Balancing Works
[http://docs.aws.amazon.com/ElasticLoadBalancing/latest/DeveloperGuide/how-elb-works.html] 
in the Elastic Load Balancing Developer Guide .

You can create up to 20 load balancers per region per account. You can request
an increase for the number of load balancers for your account. For more
information, see Elastic Load Balancing Limits
[http://docs.aws.amazon.com/ElasticLoadBalancing/latest/DeveloperGuide/elb-limits.html] 
in the Elastic Load Balancing Developer Guide .
     *
     * @error DuplicateAccessPointNameException The specified load balancer name already exists for this account.  
     * @error TooManyAccessPointsException The quota for the number of load balancers has been reached.  
     * @error CertificateNotFoundException The specified SSL ID does not refer to a valid SSL certificate in AWS Identity
and Access Management (IAM).  
     * @error InvalidConfigurationRequestException The requested configuration change is not valid.  
     * @error SubnetNotFoundException One or more of the specified subnets do not exist.  
     * @error InvalidSubnetException The specified VPC has no associated Internet gateway.  
     * @error InvalidSecurityGroupException One or more of the specified security groups do not exist.  
     * @error InvalidSchemeException The specified value for the schema is not valid. You can only specify a scheme
for load balancers in a VPC.  
     * @error TooManyTagsException The quota for the number of tags that can be assigned to a load balancer has
been reached.  
     * @error DuplicateTagKeysException A tag key was specified more than once.  
     */
    createLoadBalancer(params:ELB.CreateAccessPointInput, callback?:(err:ELB.DuplicateAccessPointNameException | ELB.TooManyAccessPointsException | ELB.CertificateNotFoundException | ELB.InvalidConfigurationRequestException | ELB.SubnetNotFoundException | ELB.InvalidSubnetException | ELB.InvalidSecurityGroupException | ELB.InvalidSchemeException | ELB.TooManyTagsException | ELB.DuplicateTagKeysException | any, data:ELB.CreateAccessPointOutput | any) => void):Request<ELB.CreateAccessPointOutput | any, ELB.DuplicateAccessPointNameException | ELB.TooManyAccessPointsException | ELB.CertificateNotFoundException | ELB.InvalidConfigurationRequestException | ELB.SubnetNotFoundException | ELB.InvalidSubnetException | ELB.InvalidSecurityGroupException | ELB.InvalidSchemeException | ELB.TooManyTagsException | ELB.DuplicateTagKeysException | any>;
    /**
     * Creates one or more listeners for the specified load balancer. If a listener
with the specified port does not already exist, it is created; otherwise, the
properties of the new listener must match the properties of the existing
listener.

For more information, see Add a Listener to Your Load Balancer
[http://docs.aws.amazon.com/ElasticLoadBalancing/latest/DeveloperGuide/us-add-listener.html] 
in the Elastic Load Balancing Developer Guide .
     *
     * @error AccessPointNotFoundException The specified load balancer does not exist.  
     * @error DuplicateListenerException A listener already exists for the specified LoadBalancerName and 
LoadBalancerPort , but with a different InstancePort , Protocol , or 
SSLCertificateId .  
     * @error CertificateNotFoundException The specified SSL ID does not refer to a valid SSL certificate in AWS Identity
and Access Management (IAM).  
     * @error InvalidConfigurationRequestException The requested configuration change is not valid.  
     */
    createLoadBalancerListeners(params:ELB.CreateLoadBalancerListenerInput, callback?:(err:ELB.AccessPointNotFoundException | ELB.DuplicateListenerException | ELB.CertificateNotFoundException | ELB.InvalidConfigurationRequestException | any, data:ELB.CreateLoadBalancerListenerOutput | any) => void):Request<ELB.CreateLoadBalancerListenerOutput | any, ELB.AccessPointNotFoundException | ELB.DuplicateListenerException | ELB.CertificateNotFoundException | ELB.InvalidConfigurationRequestException | any>;
    /**
     * Creates a policy with the specified attributes for the specified load balancer.

Policies are settings that are saved for your load balancer and that can be
applied to the front-end listener or the back-end application server, depending
on the policy type.
     *
     * @error AccessPointNotFoundException The specified load balancer does not exist.  
     * @error PolicyTypeNotFoundException One or more of the specified policy types do not exist.  
     * @error DuplicatePolicyNameException A policy with the specified name already exists for this load balancer.  
     * @error TooManyPoliciesException The quota for the number of policies for this load balancer has been reached.  
     * @error InvalidConfigurationRequestException The requested configuration change is not valid.  
     */
    createLoadBalancerPolicy(params:ELB.CreateLoadBalancerPolicyInput, callback?:(err:ELB.AccessPointNotFoundException | ELB.PolicyTypeNotFoundException | ELB.DuplicatePolicyNameException | ELB.TooManyPoliciesException | ELB.InvalidConfigurationRequestException | any, data:ELB.CreateLoadBalancerPolicyOutput | any) => void):Request<ELB.CreateLoadBalancerPolicyOutput | any, ELB.AccessPointNotFoundException | ELB.PolicyTypeNotFoundException | ELB.DuplicatePolicyNameException | ELB.TooManyPoliciesException | ELB.InvalidConfigurationRequestException | any>;
    /**
     * Deletes the specified load balancer.

If you are attempting to recreate a load balancer, you must reconfigure all
settings. The DNS name associated with a deleted load balancer are no longer
usable. The name and associated DNS record of the deleted load balancer no
longer exist and traffic sent to any of its IP addresses is no longer delivered
to back-end instances.

If the load balancer does not exist or has already been deleted, the call to 
DeleteLoadBalancer still succeeds.
     *
     */
    deleteLoadBalancer(params:ELB.DeleteAccessPointInput, callback?:(err:any, data:ELB.DeleteAccessPointOutput | any) => void):Request<ELB.DeleteAccessPointOutput | any, any>;
    /**
     * Deletes the specified listeners from the specified load balancer.
     *
     * @error AccessPointNotFoundException The specified load balancer does not exist.  
     */
    deleteLoadBalancerListeners(params:ELB.DeleteLoadBalancerListenerInput, callback?:(err:ELB.AccessPointNotFoundException | any, data:ELB.DeleteLoadBalancerListenerOutput | any) => void):Request<ELB.DeleteLoadBalancerListenerOutput | any, ELB.AccessPointNotFoundException | any>;
    /**
     * Deletes the specified policy from the specified load balancer. This policy must
not be enabled for any listeners.
     *
     * @error AccessPointNotFoundException The specified load balancer does not exist.  
     * @error InvalidConfigurationRequestException The requested configuration change is not valid.  
     */
    deleteLoadBalancerPolicy(params:ELB.DeleteLoadBalancerPolicyInput, callback?:(err:ELB.AccessPointNotFoundException | ELB.InvalidConfigurationRequestException | any, data:ELB.DeleteLoadBalancerPolicyOutput | any) => void):Request<ELB.DeleteLoadBalancerPolicyOutput | any, ELB.AccessPointNotFoundException | ELB.InvalidConfigurationRequestException | any>;
    /**
     * Deregisters the specified instances from the specified load balancer. After the
instance is deregistered, it no longer receives traffic from the load balancer.

You can use DescribeLoadBalancers to verify that the instance is deregistered
from the load balancer.

For more information, see Deregister and Register Amazon EC2 Instances
[http://docs.aws.amazon.com/ElasticLoadBalancing/latest/DeveloperGuide/US_DeReg_Reg_Instances.html] 
in the Elastic Load Balancing Developer Guide .
     *
     * @error AccessPointNotFoundException The specified load balancer does not exist.  
     * @error InvalidEndPointException The specified endpoint is not valid.  
     */
    deregisterInstancesFromLoadBalancer(params:ELB.DeregisterEndPointsInput, callback?:(err:ELB.AccessPointNotFoundException | ELB.InvalidEndPointException | any, data:ELB.DeregisterEndPointsOutput | any) => void):Request<ELB.DeregisterEndPointsOutput | any, ELB.AccessPointNotFoundException | ELB.InvalidEndPointException | any>;
    /**
     * Describes the state of the specified instances with respect to the specified
load balancer. If no instances are specified, the call describes the state of
all instances that are currently registered with the load balancer. If instances
are specified, their state is returned even if they are no longer registered
with the load balancer. The state of terminated instances is not returned.
     *
     * @error AccessPointNotFoundException The specified load balancer does not exist.  
     * @error InvalidEndPointException The specified endpoint is not valid.  
     */
    describeInstanceHealth(params:ELB.DescribeEndPointStateInput, callback?:(err:ELB.AccessPointNotFoundException | ELB.InvalidEndPointException | any, data:ELB.DescribeEndPointStateOutput | any) => void):Request<ELB.DescribeEndPointStateOutput | any, ELB.AccessPointNotFoundException | ELB.InvalidEndPointException | any>;
    /**
     * Describes the attributes for the specified load balancer.
     *
     * @error AccessPointNotFoundException The specified load balancer does not exist.  
     * @error LoadBalancerAttributeNotFoundException The specified load balancer attribute does not exist.  
     */
    describeLoadBalancerAttributes(params:ELB.DescribeLoadBalancerAttributesInput, callback?:(err:ELB.AccessPointNotFoundException | ELB.LoadBalancerAttributeNotFoundException | any, data:ELB.DescribeLoadBalancerAttributesOutput | any) => void):Request<ELB.DescribeLoadBalancerAttributesOutput | any, ELB.AccessPointNotFoundException | ELB.LoadBalancerAttributeNotFoundException | any>;
    /**
     * Describes the specified policies.

If you specify a load balancer name, the action returns the descriptions of all
policies created for the load balancer. If you specify a policy name associated
with your load balancer, the action returns the description of that policy. If
you don&#x27;t specify a load balancer name, the action returns descriptions of the
specified sample policies, or descriptions of all sample policies. The names of
the sample policies have the ELBSample- prefix.
     *
     * @error AccessPointNotFoundException The specified load balancer does not exist.  
     * @error PolicyNotFoundException One or more of the specified policies do not exist.  
     */
    describeLoadBalancerPolicies(params:ELB.DescribeLoadBalancerPoliciesInput, callback?:(err:ELB.AccessPointNotFoundException | ELB.PolicyNotFoundException | any, data:ELB.DescribeLoadBalancerPoliciesOutput | any) => void):Request<ELB.DescribeLoadBalancerPoliciesOutput | any, ELB.AccessPointNotFoundException | ELB.PolicyNotFoundException | any>;
    /**
     * Describes the specified load balancer policy types.

You can use these policy types with CreateLoadBalancerPolicy to create policy
configurations for a load balancer.
     *
     * @error PolicyTypeNotFoundException One or more of the specified policy types do not exist.  
     */
    describeLoadBalancerPolicyTypes(params:ELB.DescribeLoadBalancerPolicyTypesInput, callback?:(err:ELB.PolicyTypeNotFoundException | any, data:ELB.DescribeLoadBalancerPolicyTypesOutput | any) => void):Request<ELB.DescribeLoadBalancerPolicyTypesOutput | any, ELB.PolicyTypeNotFoundException | any>;
    /**
     * Describes the specified the load balancers. If no load balancers are specified,
the call describes all of your load balancers.
     *
     * @error AccessPointNotFoundException The specified load balancer does not exist.  
     */
    describeLoadBalancers(params:ELB.DescribeAccessPointsInput, callback?:(err:ELB.AccessPointNotFoundException | any, data:ELB.DescribeAccessPointsOutput | any) => void):Request<ELB.DescribeAccessPointsOutput | any, ELB.AccessPointNotFoundException | any>;
    /**
     * Describes the tags associated with the specified load balancers.
     *
     * @error AccessPointNotFoundException The specified load balancer does not exist.  
     */
    describeTags(params:ELB.DescribeTagsInput, callback?:(err:ELB.AccessPointNotFoundException | any, data:ELB.DescribeTagsOutput | any) => void):Request<ELB.DescribeTagsOutput | any, ELB.AccessPointNotFoundException | any>;
    /**
     * Removes the specified subnets from the set of configured subnets for the load
balancer.

After a subnet is removed, all EC2 instances registered with the load balancer
in the removed subnet go into the OutOfService state. Then, the load balancer
balances the traffic among the remaining routable subnets.
     *
     * @error AccessPointNotFoundException The specified load balancer does not exist.  
     * @error InvalidConfigurationRequestException The requested configuration change is not valid.  
     */
    detachLoadBalancerFromSubnets(params:ELB.DetachLoadBalancerFromSubnetsInput, callback?:(err:ELB.AccessPointNotFoundException | ELB.InvalidConfigurationRequestException | any, data:ELB.DetachLoadBalancerFromSubnetsOutput | any) => void):Request<ELB.DetachLoadBalancerFromSubnetsOutput | any, ELB.AccessPointNotFoundException | ELB.InvalidConfigurationRequestException | any>;
    /**
     * Removes the specified Availability Zones from the set of Availability Zones for
the specified load balancer.

There must be at least one Availability Zone registered with a load balancer at
all times. After an Availability Zone is removed, all instances registered with
the load balancer that are in the removed Availability Zone go into the 
OutOfService state. Then, the load balancer attempts to equally balance the
traffic among its remaining Availability Zones.

For more information, see Disable an Availability Zone from a Load-Balanced
Application
[http://docs.aws.amazon.com/ElasticLoadBalancing/latest/DeveloperGuide/US_ShrinkLBApp04.html] 
in the Elastic Load Balancing Developer Guide .
     *
     * @error AccessPointNotFoundException The specified load balancer does not exist.  
     * @error InvalidConfigurationRequestException The requested configuration change is not valid.  
     */
    disableAvailabilityZonesForLoadBalancer(params:ELB.RemoveAvailabilityZonesInput, callback?:(err:ELB.AccessPointNotFoundException | ELB.InvalidConfigurationRequestException | any, data:ELB.RemoveAvailabilityZonesOutput | any) => void):Request<ELB.RemoveAvailabilityZonesOutput | any, ELB.AccessPointNotFoundException | ELB.InvalidConfigurationRequestException | any>;
    /**
     * Adds the specified Availability Zones to the set of Availability Zones for the
specified load balancer.

The load balancer evenly distributes requests across all its registered
Availability Zones that contain instances.

For more information, see Add Availability Zone
[http://docs.aws.amazon.com/ElasticLoadBalancing/latest/DeveloperGuide/US_AddLBAvailabilityZone.html] 
in the Elastic Load Balancing Developer Guide .
     *
     * @error AccessPointNotFoundException The specified load balancer does not exist.  
     */
    enableAvailabilityZonesForLoadBalancer(params:ELB.AddAvailabilityZonesInput, callback?:(err:ELB.AccessPointNotFoundException | any, data:ELB.AddAvailabilityZonesOutput | any) => void):Request<ELB.AddAvailabilityZonesOutput | any, ELB.AccessPointNotFoundException | any>;
    /**
     * Modifies the attributes of the specified load balancer.

You can modify the load balancer attributes, such as AccessLogs , 
ConnectionDraining , and CrossZoneLoadBalancing by either enabling or disabling
them. Or, you can modify the load balancer attribute ConnectionSettings by
specifying an idle connection timeout value for your load balancer.

For more information, see the following in the Elastic Load Balancing Developer
Guide :

 &amp;#42; Cross-Zone Load Balancing
   [http://docs.aws.amazon.com/ElasticLoadBalancing/latest/DeveloperGuide/TerminologyandKeyConcepts.html#request-routing]
 * Connection Draining
   [http://docs.aws.amazon.com/ElasticLoadBalancing/latest/DeveloperGuide/TerminologyandKeyConcepts.html#conn-drain]
 * Access Logs
   [http://docs.aws.amazon.com/ElasticLoadBalancing/latest/DeveloperGuide/access-log-collection.html]
 * Idle Connection Timeout
   [http://docs.aws.amazon.com/ElasticLoadBalancing/latest/DeveloperGuide/TerminologyandKeyConcepts.html#idle-timeout]
     *
     * @error AccessPointNotFoundException The specified load balancer does not exist.  
     * @error LoadBalancerAttributeNotFoundException The specified load balancer attribute does not exist.  
     * @error InvalidConfigurationRequestException The requested configuration change is not valid.  
     */
    modifyLoadBalancerAttributes(params:ELB.ModifyLoadBalancerAttributesInput, callback?:(err:ELB.AccessPointNotFoundException | ELB.LoadBalancerAttributeNotFoundException | ELB.InvalidConfigurationRequestException | any, data:ELB.ModifyLoadBalancerAttributesOutput | any) => void):Request<ELB.ModifyLoadBalancerAttributesOutput | any, ELB.AccessPointNotFoundException | ELB.LoadBalancerAttributeNotFoundException | ELB.InvalidConfigurationRequestException | any>;
    /**
     * Adds the specified instances to the specified load balancer.

The instance must be a running instance in the same network as the load balancer
(EC2-Classic or the same VPC). If you have EC2-Classic instances and a load
balancer in a VPC with ClassicLink enabled, you can link the EC2-Classic
instances to that VPC and then register the linked EC2-Classic instances with
the load balancer in the VPC.

Note that RegisterInstanceWithLoadBalancer completes when the request has been
registered. Instance registration takes a little time to complete. To check the
state of the registered instances, use DescribeLoadBalancers or 
DescribeInstanceHealth .

After the instance is registered, it starts receiving traffic and requests from
the load balancer. Any instance that is not in one of the Availability Zones
registered for the load balancer is moved to the OutOfService state. If an
Availability Zone is added to the load balancer later, any instances registered
with the load balancer move to the InService state.

If you stop an instance registered with a load balancer and then start it, the
IP addresses associated with the instance changes. Elastic Load Balancing cannot
recognize the new IP address, which prevents it from routing traffic to the
instances. We recommend that you use the following sequence: stop the instance,
deregister the instance, start the instance, and then register the instance. To
deregister instances from a load balancer, use 
DeregisterInstancesFromLoadBalancer .

For more information, see Deregister and Register EC2 Instances
[http://docs.aws.amazon.com/ElasticLoadBalancing/latest/DeveloperGuide/US_DeReg_Reg_Instances.html] 
in the Elastic Load Balancing Developer Guide .
     *
     * @error AccessPointNotFoundException The specified load balancer does not exist.  
     * @error InvalidEndPointException The specified endpoint is not valid.  
     */
    registerInstancesWithLoadBalancer(params:ELB.RegisterEndPointsInput, callback?:(err:ELB.AccessPointNotFoundException | ELB.InvalidEndPointException | any, data:ELB.RegisterEndPointsOutput | any) => void):Request<ELB.RegisterEndPointsOutput | any, ELB.AccessPointNotFoundException | ELB.InvalidEndPointException | any>;
    /**
     * Removes one or more tags from the specified load balancer.
     *
     * @error AccessPointNotFoundException The specified load balancer does not exist.  
     */
    removeTags(params:ELB.RemoveTagsInput, callback?:(err:ELB.AccessPointNotFoundException | any, data:ELB.RemoveTagsOutput | any) => void):Request<ELB.RemoveTagsOutput | any, ELB.AccessPointNotFoundException | any>;
    /**
     * Sets the certificate that terminates the specified listener&#x27;s SSL connections.
The specified certificate replaces any prior certificate that was used on the
same load balancer and port.

For more information about updating your SSL certificate, see Updating an SSL
Certificate for a Load Balancer
[http://docs.aws.amazon.com/ElasticLoadBalancing/latest/DeveloperGuide/US_UpdatingLoadBalancerSSL.html] 
in the Elastic Load Balancing Developer Guide .
     *
     * @error CertificateNotFoundException The specified SSL ID does not refer to a valid SSL certificate in AWS Identity
and Access Management (IAM).  
     * @error AccessPointNotFoundException The specified load balancer does not exist.  
     * @error ListenerNotFoundException The load balancer does not have a listener configured at the specified port.  
     * @error InvalidConfigurationRequestException The requested configuration change is not valid.  
     */
    setLoadBalancerListenerSSLCertificate(params:ELB.SetLoadBalancerListenerSSLCertificateInput, callback?:(err:ELB.CertificateNotFoundException | ELB.AccessPointNotFoundException | ELB.ListenerNotFoundException | ELB.InvalidConfigurationRequestException | any, data:ELB.SetLoadBalancerListenerSSLCertificateOutput | any) => void):Request<ELB.SetLoadBalancerListenerSSLCertificateOutput | any, ELB.CertificateNotFoundException | ELB.AccessPointNotFoundException | ELB.ListenerNotFoundException | ELB.InvalidConfigurationRequestException | any>;
    /**
     * Replaces the set of policies associated with the specified port on which the
back-end server is listening with a new set of policies. At this time, only the
back-end server authentication policy type can be applied to the back-end ports;
this policy type is composed of multiple public key policies.

Each time you use SetLoadBalancerPoliciesForBackendServer to enable the
policies, use the PolicyNames parameter to list the policies that you want to
enable.

You can use DescribeLoadBalancers or DescribeLoadBalancerPolicies to verify that
the policy is associated with the back-end server.
     *
     * @error AccessPointNotFoundException The specified load balancer does not exist.  
     * @error PolicyNotFoundException One or more of the specified policies do not exist.  
     * @error InvalidConfigurationRequestException The requested configuration change is not valid.  
     */
    setLoadBalancerPoliciesForBackendServer(params:ELB.SetLoadBalancerPoliciesForBackendServerInput, callback?:(err:ELB.AccessPointNotFoundException | ELB.PolicyNotFoundException | ELB.InvalidConfigurationRequestException | any, data:ELB.SetLoadBalancerPoliciesForBackendServerOutput | any) => void):Request<ELB.SetLoadBalancerPoliciesForBackendServerOutput | any, ELB.AccessPointNotFoundException | ELB.PolicyNotFoundException | ELB.InvalidConfigurationRequestException | any>;
    /**
     * Associates, updates, or disables a policy with a listener for the specified load
balancer. You can associate multiple policies with a listener.
     *
     * @error AccessPointNotFoundException The specified load balancer does not exist.  
     * @error PolicyNotFoundException One or more of the specified policies do not exist.  
     * @error ListenerNotFoundException The load balancer does not have a listener configured at the specified port.  
     * @error InvalidConfigurationRequestException The requested configuration change is not valid.  
     */
    setLoadBalancerPoliciesOfListener(params:ELB.SetLoadBalancerPoliciesOfListenerInput, callback?:(err:ELB.AccessPointNotFoundException | ELB.PolicyNotFoundException | ELB.ListenerNotFoundException | ELB.InvalidConfigurationRequestException | any, data:ELB.SetLoadBalancerPoliciesOfListenerOutput | any) => void):Request<ELB.SetLoadBalancerPoliciesOfListenerOutput | any, ELB.AccessPointNotFoundException | ELB.PolicyNotFoundException | ELB.ListenerNotFoundException | ELB.InvalidConfigurationRequestException | any>;

  }

  export module ELB {

    export type AccessLogEnabled = boolean;

    export type AccessLogInterval = number;

    export type AccessLogPrefix = string;

    export type AccessPointName = string;

    export type AccessPointPort = number;

    export type AdditionalAttributes = AdditionalAttribute[];

    export type AppCookieStickinessPolicies = AppCookieStickinessPolicy[];

    export type AttributeName = string;

    export type AttributeType = string;

    export type AttributeValue = string;

    export type AvailabilityZone = string;

    export type AvailabilityZones = AvailabilityZone[];

    export type BackendServerDescriptions = BackendServerDescription[];

    export type Cardinality = string;

    export type ConnectionDrainingEnabled = boolean;

    export type ConnectionDrainingTimeout = number;

    export type CookieExpirationPeriod = number;

    export type CookieName = string;

    export type CreatedTime = number;

    export type CrossZoneLoadBalancingEnabled = boolean;

    export type DNSName = string;

    export type DefaultValue = string;

    export type Description = string;

    export type EndPointPort = number;

    export type HealthCheckInterval = number;

    export type HealthCheckTarget = string;

    export type HealthCheckTimeout = number;

    export type HealthyThreshold = number;

    export type IdleTimeout = number;

    export type InstanceId = string;

    export type InstancePort = number;

    export type InstanceStates = InstanceState[];

    export type Instances = Instance[];

    export type LBCookieStickinessPolicies = LBCookieStickinessPolicy[];

    export type ListenerDescriptions = ListenerDescription[];

    export type Listeners = Listener[];

    export type LoadBalancerDescriptions = LoadBalancerDescription[];

    export type LoadBalancerNames = AccessPointName[];

    export type LoadBalancerNamesMax20 = AccessPointName[];

    export type LoadBalancerScheme = string;

    export type Marker = string;

    export type PageSize = number;

    export type PolicyAttributeDescriptions = PolicyAttributeDescription[];

    export type PolicyAttributeTypeDescriptions = PolicyAttributeTypeDescription[];

    export type PolicyAttributes = PolicyAttribute[];

    export type PolicyDescriptions = PolicyDescription[];

    export type PolicyName = string;

    export type PolicyNames = PolicyName[];

    export type PolicyTypeDescriptions = PolicyTypeDescription[];

    export type PolicyTypeName = string;

    export type PolicyTypeNames = PolicyTypeName[];

    export type Ports = AccessPointPort[];

    export type Protocol = string;

    export type ReasonCode = string;

    export type S3BucketName = string;

    export type SSLCertificateId = string;

    export type SecurityGroupId = string;

    export type SecurityGroupName = string;

    export type SecurityGroupOwnerAlias = string;

    export type SecurityGroups = SecurityGroupId[];

    export type State = string;

    export type StringVal = string;

    export type SubnetId = string;

    export type Subnets = SubnetId[];

    export type TagDescriptions = TagDescription[];

    export type TagKey = string;

    export type TagKeyList = TagKeyOnly[];

    export type TagList = Tag[];

    export type TagValue = string;

    export type UnhealthyThreshold = number;

    export type VPCId = string;

    export interface AccessLog {
      /** Specifies whether access log is enabled for the load balancer. **/
      Enabled:AccessLogEnabled;
      /** The name of the Amazon S3 bucket where the access logs are stored. **/
      S3BucketName?:S3BucketName;
      /** The interval for publishing the access logs. You can specify an interval of
either 5 minutes or 60 minutes.

Default: 60 minutes **/
      EmitInterval?:AccessLogInterval;
      /** The logical hierarchy you created for your Amazon S3 bucket, for example 
my-bucket-prefix/prod . If the prefix is not provided, the log is placed at the
root level of the bucket. **/
      S3BucketPrefix?:AccessLogPrefix;
    }
    export interface AccessPointNotFoundException {
    }
    export interface AddAvailabilityZonesInput {
      /** The name of the load balancer. **/
      LoadBalancerName:AccessPointName;
      /** The Availability Zones. These must be in the same region as the load balancer. **/
      AvailabilityZones:AvailabilityZones;
    }
    export interface AddAvailabilityZonesOutput {
      /** The updated list of Availability Zones for the load balancer. **/
      AvailabilityZones?:AvailabilityZones;
    }
    export interface AddTagsInput {
      /** The name of the load balancer. You can specify one load balancer only. **/
      LoadBalancerNames:LoadBalancerNames;
      /** The tags. **/
      Tags:TagList;
    }
    export interface AddTagsOutput {
    }
    export interface AdditionalAttribute {
      /** This parameter is reserved. **/
      Key?:StringVal;
      /** This parameter is reserved. **/
      Value?:StringVal;
    }
    export interface AppCookieStickinessPolicy {
      /** The mnemonic name for the policy being created. The name must be unique within a
set of policies for this load balancer. **/
      PolicyName?:PolicyName;
      /** The name of the application cookie used for stickiness. **/
      CookieName?:CookieName;
    }
    export interface ApplySecurityGroupsToLoadBalancerInput {
      /** The name of the load balancer. **/
      LoadBalancerName:AccessPointName;
      /** The IDs of the security groups to associate with the load balancer. Note that
you cannot specify the name of the security group. **/
      SecurityGroups:SecurityGroups;
    }
    export interface ApplySecurityGroupsToLoadBalancerOutput {
      /** The IDs of the security groups associated with the load balancer. **/
      SecurityGroups?:SecurityGroups;
    }
    export interface AttachLoadBalancerToSubnetsInput {
      /** The name of the load balancer. **/
      LoadBalancerName:AccessPointName;
      /** The IDs of the subnets to add for the load balancer. You can add only one subnet
per Availability Zone. **/
      Subnets:Subnets;
    }
    export interface AttachLoadBalancerToSubnetsOutput {
      /** The IDs of the subnets attached to the load balancer. **/
      Subnets?:Subnets;
    }
    export interface BackendServerDescription {
      /** The port on which the back-end server is listening. **/
      InstancePort?:InstancePort;
      /** The names of the policies enabled for the back-end server. **/
      PolicyNames?:PolicyNames;
    }
    export interface CertificateNotFoundException {
    }
    export interface ConfigureHealthCheckInput {
      /** The name of the load balancer. **/
      LoadBalancerName:AccessPointName;
      /** The configuration information for the new health check. **/
      HealthCheck:HealthCheck;
    }
    export interface ConfigureHealthCheckOutput {
      /** The updated health check. **/
      HealthCheck?:HealthCheck;
    }
    export interface ConnectionDraining {
      /** Specifies whether connection draining is enabled for the load balancer. **/
      Enabled:ConnectionDrainingEnabled;
      /** The maximum time, in seconds, to keep the existing connections open before
deregistering the instances. **/
      Timeout?:ConnectionDrainingTimeout;
    }
    export interface ConnectionSettings {
      /** The time, in seconds, that the connection is allowed to be idle (no data has
been sent over the connection) before it is closed by the load balancer. **/
      IdleTimeout:IdleTimeout;
    }
    export interface CreateAccessPointInput {
      /** The name of the load balancer.

This name must be unique within your set of load balancers for the region, must
have a maximum of 32 characters, must contain only alphanumeric characters or
hyphens, and cannot begin or end with a hyphen. **/
      LoadBalancerName:AccessPointName;
      /** The listeners.

For more information, see Listeners for Your Load Balancer
[http://docs.aws.amazon.com/ElasticLoadBalancing/latest/DeveloperGuide/elb-listener-config.html] 
in the Elastic Load Balancing Developer Guide . **/
      Listeners:Listeners;
      /** One or more Availability Zones from the same region as the load balancer.
Traffic is equally distributed across all specified Availability Zones.

You must specify at least one Availability Zone.

You can add more Availability Zones after you create the load balancer using 
EnableAvailabilityZonesForLoadBalancer . **/
      AvailabilityZones?:AvailabilityZones;
      /** The IDs of the subnets in your VPC to attach to the load balancer. Specify one
subnet per Availability Zone specified in AvailabilityZones . **/
      Subnets?:Subnets;
      /** The IDs of the security groups to assign to the load balancer. **/
      SecurityGroups?:SecurityGroups;
      /** The type of a load balancer. Valid only for load balancers in a VPC.

By default, Elastic Load Balancing creates an Internet-facing load balancer with
a publicly resolvable DNS name, which resolves to public IP addresses. For more
information about Internet-facing and Internal load balancers, see 
Internet-facing and Internal Load Balancers
[http://docs.aws.amazon.com/ElasticLoadBalancing/latest/DeveloperGuide/vpc-loadbalancer-types.html] 
in the Elastic Load Balancing Developer Guide .

Specify internal to create an internal load balancer with a DNS name that
resolves to private IP addresses. **/
      Scheme?:LoadBalancerScheme;
      /** A list of tags to assign to the load balancer.

For more information about tagging your load balancer, see Tagging
[http://docs.aws.amazon.com/ElasticLoadBalancing/latest/DeveloperGuide/TerminologyandKeyConcepts.html#tagging-elb] 
in the Elastic Load Balancing Developer Guide . **/
      Tags?:TagList;
    }
    export interface CreateAccessPointOutput {
      /** The DNS name of the load balancer. **/
      DNSName?:DNSName;
    }
    export interface CreateAppCookieStickinessPolicyInput {
      /** The name of the load balancer. **/
      LoadBalancerName:AccessPointName;
      /** The name of the policy being created. Policy names must consist of alphanumeric
characters and dashes (-). This name must be unique within the set of policies
for this load balancer. **/
      PolicyName:PolicyName;
      /** The name of the application cookie used for stickiness. **/
      CookieName:CookieName;
    }
    export interface CreateAppCookieStickinessPolicyOutput {
    }
    export interface CreateLBCookieStickinessPolicyInput {
      /** The name of the load balancer. **/
      LoadBalancerName:AccessPointName;
      /** The name of the policy being created. Policy names must consist of alphanumeric
characters and dashes (-). This name must be unique within the set of policies
for this load balancer. **/
      PolicyName:PolicyName;
      /** The time period, in seconds, after which the cookie should be considered stale.
If you do not specify this parameter, the sticky session lasts for the duration
of the browser session. **/
      CookieExpirationPeriod?:CookieExpirationPeriod;
    }
    export interface CreateLBCookieStickinessPolicyOutput {
    }
    export interface CreateLoadBalancerListenerInput {
      /** The name of the load balancer. **/
      LoadBalancerName:AccessPointName;
      /** The listeners. **/
      Listeners:Listeners;
    }
    export interface CreateLoadBalancerListenerOutput {
    }
    export interface CreateLoadBalancerPolicyInput {
      /** The name of the load balancer. **/
      LoadBalancerName:AccessPointName;
      /** The name of the load balancer policy to be created. This name must be unique
within the set of policies for this load balancer. **/
      PolicyName:PolicyName;
      /** The name of the base policy type. To get the list of policy types, use 
DescribeLoadBalancerPolicyTypes . **/
      PolicyTypeName:PolicyTypeName;
      /** The attributes for the policy. **/
      PolicyAttributes?:PolicyAttributes;
    }
    export interface CreateLoadBalancerPolicyOutput {
    }
    export interface CrossZoneLoadBalancing {
      /** Specifies whether cross-zone load balancing is enabled for the load balancer. **/
      Enabled:CrossZoneLoadBalancingEnabled;
    }
    export interface DeleteAccessPointInput {
      /** The name of the load balancer. **/
      LoadBalancerName:AccessPointName;
    }
    export interface DeleteAccessPointOutput {
    }
    export interface DeleteLoadBalancerListenerInput {
      /** The name of the load balancer. **/
      LoadBalancerName:AccessPointName;
      /** The client port numbers of the listeners. **/
      LoadBalancerPorts:Ports;
    }
    export interface DeleteLoadBalancerListenerOutput {
    }
    export interface DeleteLoadBalancerPolicyInput {
      /** The name of the load balancer. **/
      LoadBalancerName:AccessPointName;
      /** The name of the policy. **/
      PolicyName:PolicyName;
    }
    export interface DeleteLoadBalancerPolicyOutput {
    }
    export interface DeregisterEndPointsInput {
      /** The name of the load balancer. **/
      LoadBalancerName:AccessPointName;
      /** The IDs of the instances. **/
      Instances:Instances;
    }
    export interface DeregisterEndPointsOutput {
      /** The remaining instances registered with the load balancer. **/
      Instances?:Instances;
    }
    export interface DescribeAccessPointsInput {
      /** The names of the load balancers. **/
      LoadBalancerNames?:LoadBalancerNames;
      /** The marker for the next set of results. (You received this marker from a
previous call.) **/
      Marker?:Marker;
      /** The maximum number of results to return with this call (a number from 1 to 400).
The default is 400. **/
      PageSize?:PageSize;
    }
    export interface DescribeAccessPointsOutput {
      /** Information about the load balancers. **/
      LoadBalancerDescriptions?:LoadBalancerDescriptions;
      /** The marker to use when requesting the next set of results. If there are no
additional results, the string is empty. **/
      NextMarker?:Marker;
    }
    export interface DescribeEndPointStateInput {
      /** The name of the load balancer. **/
      LoadBalancerName:AccessPointName;
      /** The IDs of the instances. **/
      Instances?:Instances;
    }
    export interface DescribeEndPointStateOutput {
      /** Information about the health of the instances. **/
      InstanceStates?:InstanceStates;
    }
    export interface DescribeLoadBalancerAttributesInput {
      /** The name of the load balancer. **/
      LoadBalancerName:AccessPointName;
    }
    export interface DescribeLoadBalancerAttributesOutput {
      /** Information about the load balancer attributes. **/
      LoadBalancerAttributes?:LoadBalancerAttributes;
    }
    export interface DescribeLoadBalancerPoliciesInput {
      /** The name of the load balancer. **/
      LoadBalancerName?:AccessPointName;
      /** The names of the policies. **/
      PolicyNames?:PolicyNames;
    }
    export interface DescribeLoadBalancerPoliciesOutput {
      /** Information about the policies. **/
      PolicyDescriptions?:PolicyDescriptions;
    }
    export interface DescribeLoadBalancerPolicyTypesInput {
      /** The names of the policy types. If no names are specified, describes all policy
types defined by Elastic Load Balancing. **/
      PolicyTypeNames?:PolicyTypeNames;
    }
    export interface DescribeLoadBalancerPolicyTypesOutput {
      /** Information about the policy types. **/
      PolicyTypeDescriptions?:PolicyTypeDescriptions;
    }
    export interface DescribeTagsInput {
      /** The names of the load balancers. **/
      LoadBalancerNames:LoadBalancerNamesMax20;
    }
    export interface DescribeTagsOutput {
      /** Information about the tags. **/
      TagDescriptions?:TagDescriptions;
    }
    export interface DetachLoadBalancerFromSubnetsInput {
      /** The name of the load balancer. **/
      LoadBalancerName:AccessPointName;
      /** The IDs of the subnets. **/
      Subnets:Subnets;
    }
    export interface DetachLoadBalancerFromSubnetsOutput {
      /** The IDs of the remaining subnets for the load balancer. **/
      Subnets?:Subnets;
    }
    export interface DuplicateAccessPointNameException {
    }
    export interface DuplicateListenerException {
    }
    export interface DuplicatePolicyNameException {
    }
    export interface DuplicateTagKeysException {
    }
    export interface HealthCheck {
      /** The instance being checked. The protocol is either TCP, HTTP, HTTPS, or SSL. The
range of valid ports is one (1) through 65535.

TCP is the default, specified as a TCP: port pair, for example &quot;TCP:5000&quot;. In
this case, a health check simply attempts to open a TCP connection to the
instance on the specified port. Failure to connect within the configured timeout
is considered unhealthy.

SSL is also specified as SSL: port pair, for example, SSL:5000.

For HTTP/HTTPS, you must include a ping path in the string. HTTP is specified as
a HTTP:port;/;PathToPing; grouping, for example &quot;HTTP:80/weather/us/wa/seattle&quot;.
In this case, a HTTP GET request is issued to the instance on the given port and
path. Any answer other than &quot;200 OK&quot; within the timeout period is considered
unhealthy.

The total length of the HTTP ping target must be 1024 16-bit Unicode characters
or less. **/
      Target:HealthCheckTarget;
      /** The approximate interval, in seconds, between health checks of an individual
instance. **/
      Interval:HealthCheckInterval;
      /** The amount of time, in seconds, during which no response means a failed health
check.

This value must be less than the Interval value. **/
      Timeout:HealthCheckTimeout;
      /** The number of consecutive health check failures required before moving the
instance to the Unhealthy state. **/
      UnhealthyThreshold:UnhealthyThreshold;
      /** The number of consecutive health checks successes required before moving the
instance to the Healthy state. **/
      HealthyThreshold:HealthyThreshold;
    }
    export interface Instance {
      /** The ID of the instance. **/
      InstanceId?:InstanceId;
    }
    export interface InstanceState {
      /** The ID of the instance. **/
      InstanceId?:InstanceId;
      /** The current state of the instance.

Valid values: InService | OutOfService | Unknown **/
      State?:State;
      /** Information about the cause of OutOfService instances. Specifically, whether the
cause is Elastic Load Balancing or the instance.

Valid values: ELB | Instance | N/A **/
      ReasonCode?:ReasonCode;
      /** A description of the instance state. This string can contain one or more of the
following messages.

       &amp;#42; N/A


       * A transient error occurred. Please try again later.


       * Instance has failed at least the UnhealthyThreshold number of health checks
       consecutively.


       * Instance has not passed the configured HealthyThreshold number of health
       checks consecutively.


       * Instance registration is still in progress.


       * Instance is in the EC2 Availability Zone for which LoadBalancer is not
       configured to route traffic to.


       * Instance is not currently registered with the LoadBalancer.


       * Instance deregistration currently in progress.


       * Disable Availability Zone is currently in progress.


       * Instance is in pending state.


       * Instance is in stopped state.


       * Instance is in terminated state. **/
      Description?:Description;
    }
    export interface InvalidConfigurationRequestException {
    }
    export interface InvalidEndPointException {
    }
    export interface InvalidSchemeException {
    }
    export interface InvalidSecurityGroupException {
    }
    export interface InvalidSubnetException {
    }
    export interface LBCookieStickinessPolicy {
      /** The name for the policy being created. The name must be unique within the set of
policies for this load balancer. **/
      PolicyName?:PolicyName;
      /** The time period, in seconds, after which the cookie should be considered stale.
If this parameter is not specified, the stickiness session lasts for the
duration of the browser session. **/
      CookieExpirationPeriod?:CookieExpirationPeriod;
    }
    export interface Listener {
      /** The load balancer transport protocol to use for routing: HTTP, HTTPS, TCP, or
SSL. **/
      Protocol:Protocol;
      /** The port on which the load balancer is listening. On EC2-VPC, you can specify
any port from the range 1-65535. On EC2-Classic, you can specify any port from
the following list: 25, 80, 443, 465, 587, 1024-65535. **/
      LoadBalancerPort:AccessPointPort;
      /** The protocol to use for routing traffic to back-end instances: HTTP, HTTPS, TCP,
or SSL.

If the front-end protocol is HTTP, HTTPS, TCP, or SSL, InstanceProtocol must be
at the same protocol.

If there is another listener with the same InstancePort whose InstanceProtocol 
is secure, (HTTPS or SSL), the listener&#x27;s InstanceProtocol must also be secure.

If there is another listener with the same InstancePort whose InstanceProtocol 
is HTTP or TCP, the listener&#x27;s InstanceProtocol must be HTTP or TCP. **/
      InstanceProtocol?:Protocol;
      /** The port on which the instance is listening. **/
      InstancePort:InstancePort;
      /** The Amazon Resource Name (ARN) of the server certificate. **/
      SSLCertificateId?:SSLCertificateId;
    }
    export interface ListenerDescription {
      Listener?:Listener;
      /** The policies. If there are no policies enabled, the list is empty. **/
      PolicyNames?:PolicyNames;
    }
    export interface ListenerNotFoundException {
    }
    export interface LoadBalancerAttributeNotFoundException {
    }
    export interface LoadBalancerAttributes {
      /** If enabled, the load balancer routes the request traffic evenly across all
back-end instances regardless of the Availability Zones.

For more information, see Enable Cross-Zone Load Balancing
[http://docs.aws.amazon.com/ElasticLoadBalancing/latest/DeveloperGuide/enable-disable-crosszone-lb.html] 
in the Elastic Load Balancing Developer Guide . **/
      CrossZoneLoadBalancing?:CrossZoneLoadBalancing;
      /** If enabled, the load balancer captures detailed information of all requests and
delivers the information to the Amazon S3 bucket that you specify.

For more information, see Enable Access Logs
[http://docs.aws.amazon.com/ElasticLoadBalancing/latest/DeveloperGuide/enable-access-logs.html] 
in the Elastic Load Balancing Developer Guide . **/
      AccessLog?:AccessLog;
      /** If enabled, the load balancer allows existing requests to complete before the
load balancer shifts traffic away from a deregistered or unhealthy back-end
instance.

For more information, see Enable Connection Draining
[http://docs.aws.amazon.com/ElasticLoadBalancing/latest/DeveloperGuide/config-conn-drain.html] 
in the Elastic Load Balancing Developer Guide . **/
      ConnectionDraining?:ConnectionDraining;
      /** If enabled, the load balancer allows the connections to remain idle (no data is
sent over the connection) for the specified duration.

By default, Elastic Load Balancing maintains a 60-second idle connection timeout
for both front-end and back-end connections of your load balancer. For more
information, see Configure Idle Connection Timeout
[http://docs.aws.amazon.com/ElasticLoadBalancing/latest/DeveloperGuide/config-idle-timeout.html] 
in the Elastic Load Balancing Developer Guide . **/
      ConnectionSettings?:ConnectionSettings;
      /** This parameter is reserved. **/
      AdditionalAttributes?:AdditionalAttributes;
    }
    export interface LoadBalancerDescription {
      /** The name of the load balancer. **/
      LoadBalancerName?:AccessPointName;
      /** The external DNS name of the load balancer. **/
      DNSName?:DNSName;
      /** The Amazon Route 53 hosted zone associated with the load balancer.

For more information, see Using Domain Names With Elastic Load Balancing
[http://docs.aws.amazon.com/ElasticLoadBalancing/latest/DeveloperGuide/using-domain-names-with-elb.html] 
in the Elastic Load Balancing Developer Guide . **/
      CanonicalHostedZoneName?:DNSName;
      /** The ID of the Amazon Route 53 hosted zone name associated with the load
balancer. **/
      CanonicalHostedZoneNameID?:DNSName;
      /** The listeners for the load balancer. **/
      ListenerDescriptions?:ListenerDescriptions;
      /** The policies defined for the load balancer. **/
      Policies?:Policies;
      /** Information about the back-end servers. **/
      BackendServerDescriptions?:BackendServerDescriptions;
      /** The Availability Zones for the load balancer. **/
      AvailabilityZones?:AvailabilityZones;
      /** The IDs of the subnets for the load balancer. **/
      Subnets?:Subnets;
      /** The ID of the VPC for the load balancer. **/
      VPCId?:VPCId;
      /** The IDs of the instances for the load balancer. **/
      Instances?:Instances;
      /** Information about the health checks conducted on the load balancer. **/
      HealthCheck?:HealthCheck;
      /** The security group that you can use as part of your inbound rules for your load
balancer&#x27;s back-end application instances. To only allow traffic from load
balancers, add a security group rule to your back end instance that specifies
this source security group as the inbound source. **/
      SourceSecurityGroup?:SourceSecurityGroup;
      /** The security groups for the load balancer. Valid only for load balancers in a
VPC. **/
      SecurityGroups?:SecurityGroups;
      /** The date and time the load balancer was created. **/
      CreatedTime?:CreatedTime;
      /** The type of load balancer. Valid only for load balancers in a VPC.

If Scheme is internet-facing , the load balancer has a public DNS name that
resolves to a public IP address.

If Scheme is internal , the load balancer has a public DNS name that resolves to
a private IP address. **/
      Scheme?:LoadBalancerScheme;
    }
    export interface ModifyLoadBalancerAttributesInput {
      /** The name of the load balancer. **/
      LoadBalancerName:AccessPointName;
      /** The attributes of the load balancer. **/
      LoadBalancerAttributes:LoadBalancerAttributes;
    }
    export interface ModifyLoadBalancerAttributesOutput {
      /** The name of the load balancer. **/
      LoadBalancerName?:AccessPointName;
      LoadBalancerAttributes?:LoadBalancerAttributes;
    }
    export interface Policies {
      /** The stickiness policies created using CreateAppCookieStickinessPolicy . **/
      AppCookieStickinessPolicies?:AppCookieStickinessPolicies;
      /** The stickiness policies created using CreateLBCookieStickinessPolicy . **/
      LBCookieStickinessPolicies?:LBCookieStickinessPolicies;
      /** The policies other than the stickiness policies. **/
      OtherPolicies?:PolicyNames;
    }
    export interface PolicyAttribute {
      /** The name of the attribute. **/
      AttributeName?:AttributeName;
      /** The value of the attribute. **/
      AttributeValue?:AttributeValue;
    }
    export interface PolicyAttributeDescription {
      /** The name of the attribute. **/
      AttributeName?:AttributeName;
      /** The value of the attribute. **/
      AttributeValue?:AttributeValue;
    }
    export interface PolicyAttributeTypeDescription {
      /** The name of the attribute. **/
      AttributeName?:AttributeName;
      /** The type of the attribute. For example, Boolean or Integer . **/
      AttributeType?:AttributeType;
      /** A description of the attribute. **/
      Description?:Description;
      /** The default value of the attribute, if applicable. **/
      DefaultValue?:DefaultValue;
      /** The cardinality of the attribute.

Valid values:

       &amp;#42; ONE(1) : Single value required
       * ZERO_OR_ONE(0..1) : Up to one value can be supplied
       * ZERO_OR_MORE(0..*) : Optional. Multiple values are allowed
       * ONE_OR_MORE(1..*0) : Required. Multiple values are allowed **/
      Cardinality?:Cardinality;
    }
    export interface PolicyDescription {
      /** The name of the policy. **/
      PolicyName?:PolicyName;
      /** The name of the policy type. **/
      PolicyTypeName?:PolicyTypeName;
      /** The policy attributes. **/
      PolicyAttributeDescriptions?:PolicyAttributeDescriptions;
    }
    export interface PolicyNotFoundException {
    }
    export interface PolicyTypeDescription {
      /** The name of the policy type. **/
      PolicyTypeName?:PolicyTypeName;
      /** A description of the policy type. **/
      Description?:Description;
      /** The description of the policy attributes associated with the policies defined by
Elastic Load Balancing. **/
      PolicyAttributeTypeDescriptions?:PolicyAttributeTypeDescriptions;
    }
    export interface PolicyTypeNotFoundException {
    }
    export interface RegisterEndPointsInput {
      /** The name of the load balancer. **/
      LoadBalancerName:AccessPointName;
      /** The IDs of the instances. **/
      Instances:Instances;
    }
    export interface RegisterEndPointsOutput {
      /** The updated list of instances for the load balancer. **/
      Instances?:Instances;
    }
    export interface RemoveAvailabilityZonesInput {
      /** The name of the load balancer. **/
      LoadBalancerName:AccessPointName;
      /** The Availability Zones. **/
      AvailabilityZones:AvailabilityZones;
    }
    export interface RemoveAvailabilityZonesOutput {
      /** The remaining Availability Zones for the load balancer. **/
      AvailabilityZones?:AvailabilityZones;
    }
    export interface RemoveTagsInput {
      /** The name of the load balancer. You can specify a maximum of one load balancer
name. **/
      LoadBalancerNames:LoadBalancerNames;
      /** The list of tag keys to remove. **/
      Tags:TagKeyList;
    }
    export interface RemoveTagsOutput {
    }
    export interface SetLoadBalancerListenerSSLCertificateInput {
      /** The name of the load balancer. **/
      LoadBalancerName:AccessPointName;
      /** The port that uses the specified SSL certificate. **/
      LoadBalancerPort:AccessPointPort;
      /** The Amazon Resource Name (ARN) of the SSL certificate. **/
      SSLCertificateId:SSLCertificateId;
    }
    export interface SetLoadBalancerListenerSSLCertificateOutput {
    }
    export interface SetLoadBalancerPoliciesForBackendServerInput {
      /** The name of the load balancer. **/
      LoadBalancerName:AccessPointName;
      /** The port number associated with the back-end server. **/
      InstancePort:EndPointPort;
      /** The names of the policies. If the list is empty, then all current polices are
removed from the back-end server. **/
      PolicyNames:PolicyNames;
    }
    export interface SetLoadBalancerPoliciesForBackendServerOutput {
    }
    export interface SetLoadBalancerPoliciesOfListenerInput {
      /** The name of the load balancer. **/
      LoadBalancerName:AccessPointName;
      /** The external port of the load balancer for the policy. **/
      LoadBalancerPort:AccessPointPort;
      /** The names of the policies. If the list is empty, the current policy is removed
from the listener. **/
      PolicyNames:PolicyNames;
    }
    export interface SetLoadBalancerPoliciesOfListenerOutput {
    }
    export interface SourceSecurityGroup {
      /** The owner of the security group. **/
      OwnerAlias?:SecurityGroupOwnerAlias;
      /** The name of the security group. **/
      GroupName?:SecurityGroupName;
    }
    export interface SubnetNotFoundException {
    }
    export interface Tag {
      /** The key of the tag. **/
      Key:TagKey;
      /** The value of the tag. **/
      Value?:TagValue;
    }
    export interface TagDescription {
      /** The name of the load balancer. **/
      LoadBalancerName?:AccessPointName;
      /** The tags. **/
      Tags?:TagList;
    }
    export interface TagKeyOnly {
      /** The name of the key. **/
      Key?:TagKey;
    }
    export interface TooManyAccessPointsException {
    }
    export interface TooManyPoliciesException {
    }
    export interface TooManyTagsException {
    }
  }
}
