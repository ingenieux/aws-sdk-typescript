// Type definitions for aws-sdk - Elastic Load Balancing
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

// COMMENTED <reference path="./aws-sdk.d.ts" />

declare module "aws-sdk" {

  /**
    * apiVersion: 2015-12-01
    * endpointPrefix: elasticloadbalancing
    * serviceAbbreviation: Elastic Load Balancing v2
    * signatureVersion: v4
    * protocol: query
    *
    * Elastic Load Balancing A load balancer distributes incoming traffic across
 targets, such as your EC2 instances. This enables you to increase the
 availability of your application. The load balancer also monitors the health of
 its registered targets and ensures that it routes traffic only to healthy
 targets. You configure your load balancer to accept incoming traffic by
 specifying one or more listeners, which are configured with a protocol and port
 number for connections from clients to the load balancer. You configure a target
 group with a protocol and port number for connections from the load balancer to
 the targets, and with health check settings to be used when checking the health
 status of the targets.
 
 Elastic Load Balancing supports two types of load balancers: Classic load
 balancers and Application load balancers (new). A Classic load balancer makes
 routing and load balancing decisions either at the transport layer (TCP/SSL) or
 the application layer (HTTP/HTTPS), and supports either EC2-Classic or a VPC. An
 Application load balancer makes routing and load balancing decisions at the
 application layer (HTTP/HTTPS), supports path-based routing, and can route
 requests to one or more ports on each EC2 instance or container instance in your
 virtual private cloud (VPC). For more information, see the Elastic Load
 Balancing User Guide
 [http://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/].
 
 This reference covers the 2015-12-01 API, which supports Application load
 balancers. The 2012-06-01 API supports Classic load balancers.
 
 To get started with an Application load balancer, complete the following tasks:
 
  1.  Create a load balancer using CreateLoadBalancer.
     
     
  2.  Create a target group using CreateTargetGroup.
     
     
  3.  Register targets for the target group using RegisterTargets.
     
     
  4.  Create one or more listeners for your load balancer using CreateListener.
     
     
  5.  (Optional) Create one or more rules for content routing based on URL using 
     CreateRule.
     
     
 
 To delete an Application load balancer and its related resources, complete the
 following tasks:
 
  1.  Delete the load balancer using DeleteLoadBalancer.
     
     
  2.  Delete the target group using DeleteTargetGroup.
     
     
 
 All Elastic Load Balancing operations are idempotent, which means that they
 complete at most one time. If you repeat an operation, it succeeds.
    *
    */
  export class ELBv2 extends Service {
    constructor(options?: any);
    endpoint: Endpoint;
    /**
     * Adds the specified tags to the specified resource. You can tag your Application
load balancers and your target groups.

Each tag consists of a key and an optional value. If a resource already has a
tag with the same key, AddTags updates its value.

To list the current tags for your resources, use DescribeTags. To remove tags
from your resources, use RemoveTags.
     *
     * @error DuplicateTagKeysException   
     * @error TooManyTagsException   
     * @error LoadBalancerNotFoundException   
     * @error TargetGroupNotFoundException   
     */
    addTags(params: ELBv2.AddTagsInput, callback?: (err: ELBv2.DuplicateTagKeysException | ELBv2.TooManyTagsException | ELBv2.LoadBalancerNotFoundException | ELBv2.TargetGroupNotFoundException | any, data: ELBv2.AddTagsOutput | any) => void): Request<ELBv2.AddTagsOutput | any, ELBv2.DuplicateTagKeysException | ELBv2.TooManyTagsException | ELBv2.LoadBalancerNotFoundException | ELBv2.TargetGroupNotFoundException | any>;
    /**
     * Creates a listener for the specified Application load balancer.

To update a listener, use ModifyListener. When you are finished with a listener,
you can delete it using DeleteListener. If you are finished with both the
listener and the load balancer, you can delete them both using 
DeleteLoadBalancer.

For more information, see Listeners for Your Application Load Balancers
[http://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-listeners.html] 
in the Application Load Balancers Guide.
     *
     * @error DuplicateListenerException   
     * @error TooManyListenersException   
     * @error TooManyCertificatesException   
     * @error LoadBalancerNotFoundException   
     * @error TargetGroupNotFoundException   
     * @error TargetGroupAssociationLimitException   
     * @error InvalidConfigurationRequestException   
     * @error IncompatibleProtocolsException   
     * @error SSLPolicyNotFoundException   
     * @error CertificateNotFoundException   
     * @error UnsupportedProtocolException   
     * @error TooManyRegistrationsForTargetIdException   
     */
    createListener(params: ELBv2.CreateListenerInput, callback?: (err: ELBv2.DuplicateListenerException | ELBv2.TooManyListenersException | ELBv2.TooManyCertificatesException | ELBv2.LoadBalancerNotFoundException | ELBv2.TargetGroupNotFoundException | ELBv2.TargetGroupAssociationLimitException | ELBv2.InvalidConfigurationRequestException | ELBv2.IncompatibleProtocolsException | ELBv2.SSLPolicyNotFoundException | ELBv2.CertificateNotFoundException | ELBv2.UnsupportedProtocolException | ELBv2.TooManyRegistrationsForTargetIdException | any, data: ELBv2.CreateListenerOutput | any) => void): Request<ELBv2.CreateListenerOutput | any, ELBv2.DuplicateListenerException | ELBv2.TooManyListenersException | ELBv2.TooManyCertificatesException | ELBv2.LoadBalancerNotFoundException | ELBv2.TargetGroupNotFoundException | ELBv2.TargetGroupAssociationLimitException | ELBv2.InvalidConfigurationRequestException | ELBv2.IncompatibleProtocolsException | ELBv2.SSLPolicyNotFoundException | ELBv2.CertificateNotFoundException | ELBv2.UnsupportedProtocolException | ELBv2.TooManyRegistrationsForTargetIdException | any>;
    /**
     * Creates an Application load balancer.

To create listeners for your load balancer, use CreateListener. You can add
security groups, subnets, and tags when you create your load balancer, or you
can add them later using SetSecurityGroups, SetSubnets, and AddTags.

To describe your current load balancers, see DescribeLoadBalancers. When you are
finished with a load balancer, you can delete it using DeleteLoadBalancer.

You can create up to 20 load balancers per region per account. You can request
an increase for the number of load balancers for your account. For more
information, see Limits for Your Application Load Balancer
[http://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-limits.html] 
in the Application Load Balancers Guide.
     *
     * @error DuplicateLoadBalancerNameException   
     * @error TooManyLoadBalancersException   
     * @error InvalidConfigurationRequestException   
     * @error SubnetNotFoundException   
     * @error InvalidSubnetException   
     * @error InvalidSecurityGroupException   
     * @error InvalidSchemeException   
     * @error TooManyTagsException   
     * @error DuplicateTagKeysException   
     */
    createLoadBalancer(params: ELBv2.CreateLoadBalancerInput, callback?: (err: ELBv2.DuplicateLoadBalancerNameException | ELBv2.TooManyLoadBalancersException | ELBv2.InvalidConfigurationRequestException | ELBv2.SubnetNotFoundException | ELBv2.InvalidSubnetException | ELBv2.InvalidSecurityGroupException | ELBv2.InvalidSchemeException | ELBv2.TooManyTagsException | ELBv2.DuplicateTagKeysException | any, data: ELBv2.CreateLoadBalancerOutput | any) => void): Request<ELBv2.CreateLoadBalancerOutput | any, ELBv2.DuplicateLoadBalancerNameException | ELBv2.TooManyLoadBalancersException | ELBv2.InvalidConfigurationRequestException | ELBv2.SubnetNotFoundException | ELBv2.InvalidSubnetException | ELBv2.InvalidSecurityGroupException | ELBv2.InvalidSchemeException | ELBv2.TooManyTagsException | ELBv2.DuplicateTagKeysException | any>;
    /**
     * Creates a rule for the specified listener.

A rule consists conditions and actions. Rules are evaluated in priority order,
from the lowest value to the highest value. When the conditions for a rule are
met, the specified actions are taken. If no rule&#x27;s conditions are met, the
default actions for the listener are taken.

To view your current rules, use DescribeRules. To update a rule, use ModifyRule.
To set the priorities of your rules, use SetRulePriorities. To delete a rule,
use DeleteRule.
     *
     * @error PriorityInUseException   
     * @error TooManyTargetGroupsException   
     * @error TooManyRulesException   
     * @error TargetGroupAssociationLimitException   
     * @error ListenerNotFoundException   
     * @error TargetGroupNotFoundException   
     * @error InvalidConfigurationRequestException   
     * @error TooManyRegistrationsForTargetIdException   
     */
    createRule(params: ELBv2.CreateRuleInput, callback?: (err: ELBv2.PriorityInUseException | ELBv2.TooManyTargetGroupsException | ELBv2.TooManyRulesException | ELBv2.TargetGroupAssociationLimitException | ELBv2.ListenerNotFoundException | ELBv2.TargetGroupNotFoundException | ELBv2.InvalidConfigurationRequestException | ELBv2.TooManyRegistrationsForTargetIdException | any, data: ELBv2.CreateRuleOutput | any) => void): Request<ELBv2.CreateRuleOutput | any, ELBv2.PriorityInUseException | ELBv2.TooManyTargetGroupsException | ELBv2.TooManyRulesException | ELBv2.TargetGroupAssociationLimitException | ELBv2.ListenerNotFoundException | ELBv2.TargetGroupNotFoundException | ELBv2.InvalidConfigurationRequestException | ELBv2.TooManyRegistrationsForTargetIdException | any>;
    /**
     * Creates a target group.

To register targets with the target group, use RegisterTargets. To update the
health check settings for the target group, use ModifyTargetGroup. To monitor
the health of targets in the target group, use DescribeTargetHealth.

To route traffic to the targets in a target group, specify the target group in
an action using CreateListener or CreateRule.

To delete a target group, use DeleteTargetGroup.

For more information, see Target Groups for Your Application Load Balancers
[http://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-target-groups.html] 
in the Application Load Balancers Guide.
     *
     * @error DuplicateTargetGroupNameException   
     * @error TooManyTargetGroupsException   
     */
    createTargetGroup(params: ELBv2.CreateTargetGroupInput, callback?: (err: ELBv2.DuplicateTargetGroupNameException | ELBv2.TooManyTargetGroupsException | any, data: ELBv2.CreateTargetGroupOutput | any) => void): Request<ELBv2.CreateTargetGroupOutput | any, ELBv2.DuplicateTargetGroupNameException | ELBv2.TooManyTargetGroupsException | any>;
    /**
     * Deletes the specified listener.

Alternatively, your listener is deleted when you delete the load balancer it is
attached to using DeleteLoadBalancer.
     *
     * @error ListenerNotFoundException   
     */
    deleteListener(params: ELBv2.DeleteListenerInput, callback?: (err: ELBv2.ListenerNotFoundException | any, data: ELBv2.DeleteListenerOutput | any) => void): Request<ELBv2.DeleteListenerOutput | any, ELBv2.ListenerNotFoundException | any>;
    /**
     * Deletes the specified load balancer and its attached listeners.

You can&#x27;t delete a load balancer if deletion protection is enabled. If the load
balancer does not exist or has already been deleted, the call succeeds.

Deleting a load balancer does not affect its registered targets. For example,
your EC2 instances continue to run and are still registered to their target
groups. If you no longer need these EC2 instances, you can stop or terminate
them.
     *
     * @error LoadBalancerNotFoundException   
     * @error OperationNotPermittedException   
     */
    deleteLoadBalancer(params: ELBv2.DeleteLoadBalancerInput, callback?: (err: ELBv2.LoadBalancerNotFoundException | ELBv2.OperationNotPermittedException | any, data: ELBv2.DeleteLoadBalancerOutput | any) => void): Request<ELBv2.DeleteLoadBalancerOutput | any, ELBv2.LoadBalancerNotFoundException | ELBv2.OperationNotPermittedException | any>;
    /**
     * Deletes the specified rule.
     *
     * @error RuleNotFoundException   
     * @error OperationNotPermittedException   
     */
    deleteRule(params: ELBv2.DeleteRuleInput, callback?: (err: ELBv2.RuleNotFoundException | ELBv2.OperationNotPermittedException | any, data: ELBv2.DeleteRuleOutput | any) => void): Request<ELBv2.DeleteRuleOutput | any, ELBv2.RuleNotFoundException | ELBv2.OperationNotPermittedException | any>;
    /**
     * Deletes the specified target group.

You can delete a target group if it is not referenced by any actions. Deleting a
target group also deletes any associated health checks.
     *
     * @error ResourceInUseException   
     */
    deleteTargetGroup(params: ELBv2.DeleteTargetGroupInput, callback?: (err: ELBv2.ResourceInUseException | any, data: ELBv2.DeleteTargetGroupOutput | any) => void): Request<ELBv2.DeleteTargetGroupOutput | any, ELBv2.ResourceInUseException | any>;
    /**
     * Deregisters the specified targets from the specified target group. After the
targets are deregistered, they no longer receive traffic from the load balancer.
     *
     * @error TargetGroupNotFoundException   
     * @error InvalidTargetException   
     */
    deregisterTargets(params: ELBv2.DeregisterTargetsInput, callback?: (err: ELBv2.TargetGroupNotFoundException | ELBv2.InvalidTargetException | any, data: ELBv2.DeregisterTargetsOutput | any) => void): Request<ELBv2.DeregisterTargetsOutput | any, ELBv2.TargetGroupNotFoundException | ELBv2.InvalidTargetException | any>;
    /**
     * Describes the specified listeners or the listeners for the specified load
balancer. You must specify either a load balancer or one or more listeners.
     *
     * @error ListenerNotFoundException   
     * @error LoadBalancerNotFoundException   
     */
    describeListeners(params: ELBv2.DescribeListenersInput, callback?: (err: ELBv2.ListenerNotFoundException | ELBv2.LoadBalancerNotFoundException | any, data: ELBv2.DescribeListenersOutput | any) => void): Request<ELBv2.DescribeListenersOutput | any, ELBv2.ListenerNotFoundException | ELBv2.LoadBalancerNotFoundException | any>;
    /**
     * Describes the attributes for the specified load balancer.
     *
     * @error LoadBalancerNotFoundException   
     */
    describeLoadBalancerAttributes(params: ELBv2.DescribeLoadBalancerAttributesInput, callback?: (err: ELBv2.LoadBalancerNotFoundException | any, data: ELBv2.DescribeLoadBalancerAttributesOutput | any) => void): Request<ELBv2.DescribeLoadBalancerAttributesOutput | any, ELBv2.LoadBalancerNotFoundException | any>;
    /**
     * Describes the specified Application load balancers or all of your Application
load balancers.

To describe the listeners for a load balancer, use DescribeListeners. To
describe the attributes for a load balancer, use DescribeLoadBalancerAttributes.
     *
     * @error LoadBalancerNotFoundException   
     */
    describeLoadBalancers(params: ELBv2.DescribeLoadBalancersInput, callback?: (err: ELBv2.LoadBalancerNotFoundException | any, data: ELBv2.DescribeLoadBalancersOutput | any) => void): Request<ELBv2.DescribeLoadBalancersOutput | any, ELBv2.LoadBalancerNotFoundException | any>;
    /**
     * Describes the specified rules or the rules for the specified listener. You must
specify either a listener or one or more rules.
     *
     * @error ListenerNotFoundException   
     * @error RuleNotFoundException   
     */
    describeRules(params: ELBv2.DescribeRulesInput, callback?: (err: ELBv2.ListenerNotFoundException | ELBv2.RuleNotFoundException | any, data: ELBv2.DescribeRulesOutput | any) => void): Request<ELBv2.DescribeRulesOutput | any, ELBv2.ListenerNotFoundException | ELBv2.RuleNotFoundException | any>;
    /**
     * Describes the specified policies or all policies used for SSL negotiation.

Note that the only supported policy at this time is ELBSecurityPolicy-2015-05.
     *
     * @error SSLPolicyNotFoundException   
     */
    describeSSLPolicies(params: ELBv2.DescribeSSLPoliciesInput, callback?: (err: ELBv2.SSLPolicyNotFoundException | any, data: ELBv2.DescribeSSLPoliciesOutput | any) => void): Request<ELBv2.DescribeSSLPoliciesOutput | any, ELBv2.SSLPolicyNotFoundException | any>;
    /**
     * Describes the tags for the specified resources.
     *
     * @error LoadBalancerNotFoundException   
     * @error TargetGroupNotFoundException   
     * @error ListenerNotFoundException   
     * @error RuleNotFoundException   
     */
    describeTags(params: ELBv2.DescribeTagsInput, callback?: (err: ELBv2.LoadBalancerNotFoundException | ELBv2.TargetGroupNotFoundException | ELBv2.ListenerNotFoundException | ELBv2.RuleNotFoundException | any, data: ELBv2.DescribeTagsOutput | any) => void): Request<ELBv2.DescribeTagsOutput | any, ELBv2.LoadBalancerNotFoundException | ELBv2.TargetGroupNotFoundException | ELBv2.ListenerNotFoundException | ELBv2.RuleNotFoundException | any>;
    /**
     * Describes the attributes for the specified target group.
     *
     * @error TargetGroupNotFoundException   
     */
    describeTargetGroupAttributes(params: ELBv2.DescribeTargetGroupAttributesInput, callback?: (err: ELBv2.TargetGroupNotFoundException | any, data: ELBv2.DescribeTargetGroupAttributesOutput | any) => void): Request<ELBv2.DescribeTargetGroupAttributesOutput | any, ELBv2.TargetGroupNotFoundException | any>;
    /**
     * Describes the specified target groups or all of your target groups. By default,
all target groups are described. Alternatively, you can specify one of the
following to filter the results: the ARN of the load balancer, the names of one
or more target groups, or the ARNs of one or more target groups.

To describe the targets for a target group, use DescribeTargetHealth. To
describe the attributes of a target group, use DescribeTargetGroupAttributes.
     *
     * @error LoadBalancerNotFoundException   
     * @error TargetGroupNotFoundException   
     */
    describeTargetGroups(params: ELBv2.DescribeTargetGroupsInput, callback?: (err: ELBv2.LoadBalancerNotFoundException | ELBv2.TargetGroupNotFoundException | any, data: ELBv2.DescribeTargetGroupsOutput | any) => void): Request<ELBv2.DescribeTargetGroupsOutput | any, ELBv2.LoadBalancerNotFoundException | ELBv2.TargetGroupNotFoundException | any>;
    /**
     * Describes the health of the specified targets or all of your targets.
     *
     * @error InvalidTargetException   
     * @error TargetGroupNotFoundException   
     * @error HealthUnavailableException   
     */
    describeTargetHealth(params: ELBv2.DescribeTargetHealthInput, callback?: (err: ELBv2.InvalidTargetException | ELBv2.TargetGroupNotFoundException | ELBv2.HealthUnavailableException | any, data: ELBv2.DescribeTargetHealthOutput | any) => void): Request<ELBv2.DescribeTargetHealthOutput | any, ELBv2.InvalidTargetException | ELBv2.TargetGroupNotFoundException | ELBv2.HealthUnavailableException | any>;
    /**
     * Modifies the specified properties of the specified listener.

Any properties that you do not specify retain their current values. However,
changing the protocol from HTTPS to HTTP removes the security policy and SSL
certificate properties. If you change the protocol from HTTP to HTTPS, you must
add the security policy.
     *
     * @error DuplicateListenerException   
     * @error TooManyListenersException   
     * @error TooManyCertificatesException   
     * @error ListenerNotFoundException   
     * @error TargetGroupNotFoundException   
     * @error TargetGroupAssociationLimitException   
     * @error IncompatibleProtocolsException   
     * @error SSLPolicyNotFoundException   
     * @error CertificateNotFoundException   
     * @error InvalidConfigurationRequestException   
     * @error UnsupportedProtocolException   
     * @error TooManyRegistrationsForTargetIdException   
     */
    modifyListener(params: ELBv2.ModifyListenerInput, callback?: (err: ELBv2.DuplicateListenerException | ELBv2.TooManyListenersException | ELBv2.TooManyCertificatesException | ELBv2.ListenerNotFoundException | ELBv2.TargetGroupNotFoundException | ELBv2.TargetGroupAssociationLimitException | ELBv2.IncompatibleProtocolsException | ELBv2.SSLPolicyNotFoundException | ELBv2.CertificateNotFoundException | ELBv2.InvalidConfigurationRequestException | ELBv2.UnsupportedProtocolException | ELBv2.TooManyRegistrationsForTargetIdException | any, data: ELBv2.ModifyListenerOutput | any) => void): Request<ELBv2.ModifyListenerOutput | any, ELBv2.DuplicateListenerException | ELBv2.TooManyListenersException | ELBv2.TooManyCertificatesException | ELBv2.ListenerNotFoundException | ELBv2.TargetGroupNotFoundException | ELBv2.TargetGroupAssociationLimitException | ELBv2.IncompatibleProtocolsException | ELBv2.SSLPolicyNotFoundException | ELBv2.CertificateNotFoundException | ELBv2.InvalidConfigurationRequestException | ELBv2.UnsupportedProtocolException | ELBv2.TooManyRegistrationsForTargetIdException | any>;
    /**
     * Modifies the specified attributes of the specified load balancer.

If any of the specified attributes can&#x27;t be modified as requested, the call
fails. Any existing attributes that you do not modify retain their current
values.
     *
     * @error LoadBalancerNotFoundException   
     * @error InvalidConfigurationRequestException   
     */
    modifyLoadBalancerAttributes(params: ELBv2.ModifyLoadBalancerAttributesInput, callback?: (err: ELBv2.LoadBalancerNotFoundException | ELBv2.InvalidConfigurationRequestException | any, data: ELBv2.ModifyLoadBalancerAttributesOutput | any) => void): Request<ELBv2.ModifyLoadBalancerAttributesOutput | any, ELBv2.LoadBalancerNotFoundException | ELBv2.InvalidConfigurationRequestException | any>;
    /**
     * Modifies the specified rule.

Any existing properties that you do not modify retain their current values.

To modify the default action, use ModifyListener.
     *
     * @error TargetGroupAssociationLimitException   
     * @error RuleNotFoundException   
     * @error OperationNotPermittedException   
     * @error TooManyRegistrationsForTargetIdException   
     */
    modifyRule(params: ELBv2.ModifyRuleInput, callback?: (err: ELBv2.TargetGroupAssociationLimitException | ELBv2.RuleNotFoundException | ELBv2.OperationNotPermittedException | ELBv2.TooManyRegistrationsForTargetIdException | any, data: ELBv2.ModifyRuleOutput | any) => void): Request<ELBv2.ModifyRuleOutput | any, ELBv2.TargetGroupAssociationLimitException | ELBv2.RuleNotFoundException | ELBv2.OperationNotPermittedException | ELBv2.TooManyRegistrationsForTargetIdException | any>;
    /**
     * Modifies the health checks used when evaluating the health state of the targets
in the specified target group.

To monitor the health of the targets, use DescribeTargetHealth.
     *
     * @error TargetGroupNotFoundException   
     */
    modifyTargetGroup(params: ELBv2.ModifyTargetGroupInput, callback?: (err: ELBv2.TargetGroupNotFoundException | any, data: ELBv2.ModifyTargetGroupOutput | any) => void): Request<ELBv2.ModifyTargetGroupOutput | any, ELBv2.TargetGroupNotFoundException | any>;
    /**
     * Modifies the specified attributes of the specified target group.
     *
     * @error TargetGroupNotFoundException   
     */
    modifyTargetGroupAttributes(params: ELBv2.ModifyTargetGroupAttributesInput, callback?: (err: ELBv2.TargetGroupNotFoundException | any, data: ELBv2.ModifyTargetGroupAttributesOutput | any) => void): Request<ELBv2.ModifyTargetGroupAttributesOutput | any, ELBv2.TargetGroupNotFoundException | any>;
    /**
     * Registers the specified targets with the specified target group.

The target must be in the virtual private cloud (VPC) that you specified for the
target group.

To remove a target from a target group, use DeregisterTargets.
     *
     * @error TargetGroupNotFoundException   
     * @error TooManyTargetsException   
     * @error InvalidTargetException   
     * @error TooManyRegistrationsForTargetIdException   
     */
    registerTargets(params: ELBv2.RegisterTargetsInput, callback?: (err: ELBv2.TargetGroupNotFoundException | ELBv2.TooManyTargetsException | ELBv2.InvalidTargetException | ELBv2.TooManyRegistrationsForTargetIdException | any, data: ELBv2.RegisterTargetsOutput | any) => void): Request<ELBv2.RegisterTargetsOutput | any, ELBv2.TargetGroupNotFoundException | ELBv2.TooManyTargetsException | ELBv2.InvalidTargetException | ELBv2.TooManyRegistrationsForTargetIdException | any>;
    /**
     * Removes the specified tags from the specified resource.

To list the current tags for your resources, use DescribeTags.
     *
     * @error LoadBalancerNotFoundException   
     * @error TargetGroupNotFoundException   
     * @error ListenerNotFoundException   
     * @error RuleNotFoundException   
     * @error TooManyTagsException   
     */
    removeTags(params: ELBv2.RemoveTagsInput, callback?: (err: ELBv2.LoadBalancerNotFoundException | ELBv2.TargetGroupNotFoundException | ELBv2.ListenerNotFoundException | ELBv2.RuleNotFoundException | ELBv2.TooManyTagsException | any, data: ELBv2.RemoveTagsOutput | any) => void): Request<ELBv2.RemoveTagsOutput | any, ELBv2.LoadBalancerNotFoundException | ELBv2.TargetGroupNotFoundException | ELBv2.ListenerNotFoundException | ELBv2.RuleNotFoundException | ELBv2.TooManyTagsException | any>;
    /**
     * Sets the priorities of the specified rules.

You can reorder the rules as long as there are no priority conflicts in the new
order. Any existing rules that you do not specify retain their current priority.
     *
     * @error RuleNotFoundException   
     * @error PriorityInUseException   
     * @error OperationNotPermittedException   
     */
    setRulePriorities(params: ELBv2.SetRulePrioritiesInput, callback?: (err: ELBv2.RuleNotFoundException | ELBv2.PriorityInUseException | ELBv2.OperationNotPermittedException | any, data: ELBv2.SetRulePrioritiesOutput | any) => void): Request<ELBv2.SetRulePrioritiesOutput | any, ELBv2.RuleNotFoundException | ELBv2.PriorityInUseException | ELBv2.OperationNotPermittedException | any>;
    /**
     * Associates the specified security groups with the specified load balancer. The
specified security groups override the previously associated security groups.
     *
     * @error LoadBalancerNotFoundException   
     * @error InvalidConfigurationRequestException   
     * @error InvalidSecurityGroupException   
     */
    setSecurityGroups(params: ELBv2.SetSecurityGroupsInput, callback?: (err: ELBv2.LoadBalancerNotFoundException | ELBv2.InvalidConfigurationRequestException | ELBv2.InvalidSecurityGroupException | any, data: ELBv2.SetSecurityGroupsOutput | any) => void): Request<ELBv2.SetSecurityGroupsOutput | any, ELBv2.LoadBalancerNotFoundException | ELBv2.InvalidConfigurationRequestException | ELBv2.InvalidSecurityGroupException | any>;
    /**
     * Enables the Availability Zone for the specified subnets for the specified load
balancer. The specified subnets replace the previously enabled subnets.
     *
     * @error LoadBalancerNotFoundException   
     * @error InvalidConfigurationRequestException   
     * @error SubnetNotFoundException   
     * @error InvalidSubnetException   
     */
    setSubnets(params: ELBv2.SetSubnetsInput, callback?: (err: ELBv2.LoadBalancerNotFoundException | ELBv2.InvalidConfigurationRequestException | ELBv2.SubnetNotFoundException | ELBv2.InvalidSubnetException | any, data: ELBv2.SetSubnetsOutput | any) => void): Request<ELBv2.SetSubnetsOutput | any, ELBv2.LoadBalancerNotFoundException | ELBv2.InvalidConfigurationRequestException | ELBv2.SubnetNotFoundException | ELBv2.InvalidSubnetException | any>;

  }

  export module ELBv2 {

    export type ActionTypeEnum = string;

    export type Actions = Action[];

    export type AvailabilityZones = AvailabilityZone[];

    export type CanonicalHostedZoneId = string;

    export type CertificateArn = string;

    export type CertificateList = Certificate[];

    export type CipherName = string;

    export type CipherPriority = number;

    export type Ciphers = Cipher[];

    export type ConditionFieldName = string;

    export type CreatedTime = number;

    export type DNSName = string;

    export type Description = string;

    export type HealthCheckIntervalSeconds = number;

    export type HealthCheckPort = string;

    export type HealthCheckThresholdCount = number;

    export type HealthCheckTimeoutSeconds = number;

    export type HttpCode = string;

    export type IsDefault = boolean;

    export type ListOfString = StringValue[];

    export type ListenerArn = string;

    export type ListenerArns = ListenerArn[];

    export type Listeners = Listener[];

    export type LoadBalancerArn = string;

    export type LoadBalancerArns = LoadBalancerArn[];

    export type LoadBalancerAttributeKey = string;

    export type LoadBalancerAttributeValue = string;

    export type LoadBalancerAttributes = LoadBalancerAttribute[];

    export type LoadBalancerName = string;

    export type LoadBalancerNames = LoadBalancerName[];

    export type LoadBalancerSchemeEnum = string;

    export type LoadBalancerStateEnum = string;

    export type LoadBalancerTypeEnum = string;

    export type LoadBalancers = LoadBalancer[];

    export type Marker = string;

    export type PageSize = number;

    export type Path = string;

    export type Port = number;

    export type ProtocolEnum = string;

    export type ResourceArn = string;

    export type ResourceArns = ResourceArn[];

    export type RuleArn = string;

    export type RuleArns = RuleArn[];

    export type RuleConditionList = RuleCondition[];

    export type RulePriority = number;

    export type RulePriorityList = RulePriorityPair[];

    export type Rules = Rule[];

    export type SecurityGroupId = string;

    export type SecurityGroups = SecurityGroupId[];

    export type SslPolicies = SslPolicy[];

    export type SslPolicyName = string;

    export type SslPolicyNames = SslPolicyName[];

    export type SslProtocol = string;

    export type SslProtocols = SslProtocol[];

    export type StateReason = string;

    export type String = string;

    export type StringValue = string;

    export type SubnetId = string;

    export type Subnets = SubnetId[];

    export type TagDescriptions = TagDescription[];

    export type TagKey = string;

    export type TagKeys = TagKey[];

    export type TagList = Tag[];

    export type TagValue = string;

    export type TargetDescriptions = TargetDescription[];

    export type TargetGroupArn = string;

    export type TargetGroupArns = TargetGroupArn[];

    export type TargetGroupAttributeKey = string;

    export type TargetGroupAttributeValue = string;

    export type TargetGroupAttributes = TargetGroupAttribute[];

    export type TargetGroupName = string;

    export type TargetGroupNames = TargetGroupName[];

    export type TargetGroups = TargetGroup[];

    export type TargetHealthDescriptions = TargetHealthDescription[];

    export type TargetHealthReasonEnum = string;

    export type TargetHealthStateEnum = string;

    export type TargetId = string;

    export type VpcId = string;

    export type ZoneName = string;

    export interface Action {
      /** The type of action. **/
      Type: ActionTypeEnum;
      /** The Amazon Resource Name (ARN) of the target group. **/
      TargetGroupArn: TargetGroupArn;
    }
    export interface AddTagsInput {
      /** The Amazon Resource Name (ARN) of the resource. **/
      ResourceArns: ResourceArns;
      /** The tags. Each resource can have a maximum of 10 tags. **/
      Tags: TagList;
    }
    export interface AddTagsOutput {
    }
    export interface AvailabilityZone {
      /** The name of the Availability Zone. **/
      ZoneName?: ZoneName;
      /** The ID of the subnet. **/
      SubnetId?: SubnetId;
    }
    export interface Certificate {
      /** The Amazon Resource Name (ARN) of the certificate. **/
      CertificateArn?: CertificateArn;
    }
    export interface CertificateNotFoundException {
    }
    export interface Cipher {
      /** The name of the cipher. **/
      Name?: CipherName;
      /** The priority of the cipher. **/
      Priority?: CipherPriority;
    }
    export interface CreateListenerInput {
      /** The Amazon Resource Name (ARN) of the load balancer. **/
      LoadBalancerArn: LoadBalancerArn;
      /** The protocol for connections from clients to the load balancer. **/
      Protocol: ProtocolEnum;
      /** The port on which the load balancer is listening. **/
      Port: Port;
      /** The security policy that defines which ciphers and protocols are supported. The
default is the current predefined security policy. **/
      SslPolicy?: SslPolicyName;
      /** The SSL server certificate. You must provide exactly one certificate if the
protocol is HTTPS. **/
      Certificates?: CertificateList;
      /** The default actions for the listener. **/
      DefaultActions: Actions;
    }
    export interface CreateListenerOutput {
      /** Information about the listener. **/
      Listeners?: Listeners;
    }
    export interface CreateLoadBalancerInput {
      /** The name of the load balancer.

This name must be unique within your AWS account, can have a maximum of 32
characters, must contain only alphanumeric characters or hyphens, and must not
begin or end with a hyphen. **/
      Name: LoadBalancerName;
      /** The IDs of the subnets to attach to the load balancer. You can specify only one
subnet per Availability Zone. You must specify subnets from at least two
Availability Zones. **/
      Subnets: Subnets;
      /** The IDs of the security groups to assign to the load balancer. **/
      SecurityGroups?: SecurityGroups;
      /** The nodes of an Internet-facing load balancer have public IP addresses. The DNS
name of an Internet-facing load balancer is publicly resolvable to the public IP
addresses of the nodes. Therefore, Internet-facing load balancers can route
requests from clients over the Internet.

The nodes of an internal load balancer have only private IP addresses. The DNS
name of an internal load balancer is publicly resolvable to the private IP
addresses of the nodes. Therefore, internal load balancers can only route
requests from clients with access to the VPC for the load balancer.

The default is an Internet-facing load balancer. **/
      Scheme?: LoadBalancerSchemeEnum;
      /** One or more tags to assign to the load balancer. **/
      Tags?: TagList;
    }
    export interface CreateLoadBalancerOutput {
      /** Information about the load balancer. **/
      LoadBalancers?: LoadBalancers;
    }
    export interface CreateRuleInput {
      /** The Amazon Resource Name (ARN) of the listener. **/
      ListenerArn: ListenerArn;
      /** The conditions. **/
      Conditions: RuleConditionList;
      /** The priority for the rule. A listener can&#x27;t have multiple rules with the same
priority. **/
      Priority: RulePriority;
      /** The actions for the rule. **/
      Actions: Actions;
    }
    export interface CreateRuleOutput {
      /** Information about the rule. **/
      Rules?: Rules;
    }
    export interface CreateTargetGroupInput {
      /** The name of the target group. **/
      Name: TargetGroupName;
      /** The protocol to use for routing traffic to the targets. **/
      Protocol: ProtocolEnum;
      /** The port on which the targets receive traffic. This port is used unless you
specify a port override when registering the target. **/
      Port: Port;
      /** The identifier of the virtual private cloud (VPC). **/
      VpcId: VpcId;
      /** The protocol the load balancer uses when performing health checks on targets.
The default is the HTTP protocol. **/
      HealthCheckProtocol?: ProtocolEnum;
      /** The port the load balancer uses when performing health checks on targets. The
default is traffic-port, which indicates the port on which each target receives
traffic from the load balancer. **/
      HealthCheckPort?: HealthCheckPort;
      /** The ping path that is the destination on the targets for health checks. The
default is /. **/
      HealthCheckPath?: Path;
      /** The approximate amount of time, in seconds, between health checks of an
individual target. The default is 30 seconds. **/
      HealthCheckIntervalSeconds?: HealthCheckIntervalSeconds;
      /** The amount of time, in seconds, during which no response from a target means a
failed health check. The default is 5 seconds. **/
      HealthCheckTimeoutSeconds?: HealthCheckTimeoutSeconds;
      /** The number of consecutive health checks successes required before considering an
unhealthy target healthy. The default is 5. **/
      HealthyThresholdCount?: HealthCheckThresholdCount;
      /** The number of consecutive health check failures required before considering a
target unhealthy. The default is 2. **/
      UnhealthyThresholdCount?: HealthCheckThresholdCount;
      /** The HTTP codes to use when checking for a successful response from a target. The
default is 200. **/
      Matcher?: Matcher;
    }
    export interface CreateTargetGroupOutput {
      /** Information about the target group. **/
      TargetGroups?: TargetGroups;
    }
    export interface DeleteListenerInput {
      /** The Amazon Resource Name (ARN) of the listener. **/
      ListenerArn: ListenerArn;
    }
    export interface DeleteListenerOutput {
    }
    export interface DeleteLoadBalancerInput {
      /** The Amazon Resource Name (ARN) of the load balancer. **/
      LoadBalancerArn: LoadBalancerArn;
    }
    export interface DeleteLoadBalancerOutput {
    }
    export interface DeleteRuleInput {
      /** The Amazon Resource Name (ARN) of the rule. **/
      RuleArn: RuleArn;
    }
    export interface DeleteRuleOutput {
    }
    export interface DeleteTargetGroupInput {
      /** The Amazon Resource Name (ARN) of the target group. **/
      TargetGroupArn: TargetGroupArn;
    }
    export interface DeleteTargetGroupOutput {
    }
    export interface DeregisterTargetsInput {
      /** The Amazon Resource Name (ARN) of the target group. **/
      TargetGroupArn: TargetGroupArn;
      /** The targets. **/
      Targets: TargetDescriptions;
    }
    export interface DeregisterTargetsOutput {
    }
    export interface DescribeListenersInput {
      /** The Amazon Resource Name (ARN) of the load balancer. **/
      LoadBalancerArn?: LoadBalancerArn;
      /** The Amazon Resource Names (ARN) of the listeners. **/
      ListenerArns?: ListenerArns;
      /** The marker for the next set of results. (You received this marker from a
previous call.) **/
      Marker?: Marker;
      /** The maximum number of results to return with this call. **/
      PageSize?: PageSize;
    }
    export interface DescribeListenersOutput {
      /** Information about the listeners. **/
      Listeners?: Listeners;
      /** The marker to use when requesting the next set of results. If there are no
additional results, the string is empty. **/
      NextMarker?: Marker;
    }
    export interface DescribeLoadBalancerAttributesInput {
      /** The Amazon Resource Name (ARN) of the load balancer. **/
      LoadBalancerArn: LoadBalancerArn;
    }
    export interface DescribeLoadBalancerAttributesOutput {
      /** Information about the load balancer attributes. **/
      Attributes?: LoadBalancerAttributes;
    }
    export interface DescribeLoadBalancersInput {
      /** The Amazon Resource Names (ARN) of the load balancers. **/
      LoadBalancerArns?: LoadBalancerArns;
      /** The names of the load balancers. **/
      Names?: LoadBalancerNames;
      /** The marker for the next set of results. (You received this marker from a
previous call.) **/
      Marker?: Marker;
      /** The maximum number of results to return with this call. **/
      PageSize?: PageSize;
    }
    export interface DescribeLoadBalancersOutput {
      /** Information about the load balancers. **/
      LoadBalancers?: LoadBalancers;
      /** The marker to use when requesting the next set of results. If there are no
additional results, the string is empty. **/
      NextMarker?: Marker;
    }
    export interface DescribeRulesInput {
      /** The Amazon Resource Name (ARN) of the listener. **/
      ListenerArn?: ListenerArn;
      /** The Amazon Resource Names (ARN) of the rules. **/
      RuleArns?: RuleArns;
    }
    export interface DescribeRulesOutput {
      /** Information about the rules. **/
      Rules?: Rules;
    }
    export interface DescribeSSLPoliciesInput {
      /** The names of the policies. **/
      Names?: SslPolicyNames;
      /** The marker for the next set of results. (You received this marker from a
previous call.) **/
      Marker?: Marker;
      /** The maximum number of results to return with this call. **/
      PageSize?: PageSize;
    }
    export interface DescribeSSLPoliciesOutput {
      /** Information about the policies. **/
      SslPolicies?: SslPolicies;
      /** The marker to use when requesting the next set of results. If there are no
additional results, the string is empty. **/
      NextMarker?: Marker;
    }
    export interface DescribeTagsInput {
      /** The Amazon Resource Names (ARN) of the resources. **/
      ResourceArns: ResourceArns;
    }
    export interface DescribeTagsOutput {
      /** Information about the tags. **/
      TagDescriptions?: TagDescriptions;
    }
    export interface DescribeTargetGroupAttributesInput {
      /** The Amazon Resource Name (ARN) of the target group. **/
      TargetGroupArn: TargetGroupArn;
    }
    export interface DescribeTargetGroupAttributesOutput {
      /** Information about the target group attributes **/
      Attributes?: TargetGroupAttributes;
    }
    export interface DescribeTargetGroupsInput {
      /** The Amazon Resource Name (ARN) of the load balancer. **/
      LoadBalancerArn?: LoadBalancerArn;
      /** The Amazon Resource Names (ARN) of the target groups. **/
      TargetGroupArns?: TargetGroupArns;
      /** The names of the target groups. **/
      Names?: TargetGroupNames;
      /** The marker for the next set of results. (You received this marker from a
previous call.) **/
      Marker?: Marker;
      /** The maximum number of results to return with this call. **/
      PageSize?: PageSize;
    }
    export interface DescribeTargetGroupsOutput {
      /** Information about the target groups. **/
      TargetGroups?: TargetGroups;
      /** The marker to use when requesting the next set of results. If there are no
additional results, the string is empty. **/
      NextMarker?: Marker;
    }
    export interface DescribeTargetHealthInput {
      /** The Amazon Resource Name (ARN) of the target group. **/
      TargetGroupArn: TargetGroupArn;
      /** The targets. **/
      Targets?: TargetDescriptions;
    }
    export interface DescribeTargetHealthOutput {
      /** Information about the health of the targets. **/
      TargetHealthDescriptions?: TargetHealthDescriptions;
    }
    export interface DuplicateListenerException {
    }
    export interface DuplicateLoadBalancerNameException {
    }
    export interface DuplicateTagKeysException {
    }
    export interface DuplicateTargetGroupNameException {
    }
    export interface HealthUnavailableException {
    }
    export interface IncompatibleProtocolsException {
    }
    export interface InvalidConfigurationRequestException {
    }
    export interface InvalidSchemeException {
    }
    export interface InvalidSecurityGroupException {
    }
    export interface InvalidSubnetException {
    }
    export interface InvalidTargetException {
    }
    export interface Listener {
      /** The Amazon Resource Name (ARN) of the listener. **/
      ListenerArn?: ListenerArn;
      /** The Amazon Resource Name (ARN) of the load balancer. **/
      LoadBalancerArn?: LoadBalancerArn;
      /** The port on which the load balancer is listening. **/
      Port?: Port;
      /** The protocol for connections from clients to the load balancer. **/
      Protocol?: ProtocolEnum;
      /** The SSL server certificate. You must provide a certificate if the protocol is
HTTPS. **/
      Certificates?: CertificateList;
      /** The security policy that defines which ciphers and protocols are supported. The
default is the current predefined security policy. **/
      SslPolicy?: SslPolicyName;
      /** The default actions for the listener. **/
      DefaultActions?: Actions;
    }
    export interface ListenerNotFoundException {
    }
    export interface LoadBalancer {
      /** The Amazon Resource Name (ARN) of the load balancer. **/
      LoadBalancerArn?: LoadBalancerArn;
      /** The public DNS name of the load balancer. **/
      DNSName?: DNSName;
      /** The ID of the Amazon Route 53 hosted zone associated with the load balancer. **/
      CanonicalHostedZoneId?: CanonicalHostedZoneId;
      /** The date and time the load balancer was created. **/
      CreatedTime?: CreatedTime;
      /** The name of the load balancer. **/
      LoadBalancerName?: LoadBalancerName;
      /** The nodes of an Internet-facing load balancer have public IP addresses. The DNS
name of an Internet-facing load balancer is publicly resolvable to the public IP
addresses of the nodes. Therefore, Internet-facing load balancers can route
requests from clients over the Internet.

The nodes of an internal load balancer have only private IP addresses. The DNS
name of an internal load balancer is publicly resolvable to the private IP
addresses of the nodes. Therefore, internal load balancers can only route
requests from clients with access to the VPC for the load balancer. **/
      Scheme?: LoadBalancerSchemeEnum;
      /** The ID of the VPC for the load balancer. **/
      VpcId?: VpcId;
      /** The state of the load balancer. **/
      State?: LoadBalancerState;
      /** The type of load balancer. **/
      Type?: LoadBalancerTypeEnum;
      /** The Availability Zones for the load balancer. **/
      AvailabilityZones?: AvailabilityZones;
      /** The IDs of the security groups for the load balancer. **/
      SecurityGroups?: SecurityGroups;
    }
    export interface LoadBalancerAttribute {
      /** The name of the attribute.

&amp;#42;   access_logs.s3.enabled - Indicates whether access logs stored in Amazon S3
 are enabled.
 
 
*   access_logs.s3.bucket - The name of the S3 bucket for the access logs. This
 attribute is required if access logs in Amazon S3 are enabled. The bucket
 must exist in the same region as the load balancer and have a bucket policy
 that grants Elastic Load Balancing permission to write to the bucket.
 
 
*   access_logs.s3.prefix - The prefix for the location in the S3 bucket. If you
 don&#x27;t specify a prefix, the access logs are stored in the root of the bucket.
 
 
*   deletion_protection.enabled - Indicates whether deletion protection is
 enabled.
 
 
*   idle_timeout.timeout_seconds - The idle timeout value, in seconds. The valid
 range is 1-3600. The default is 60 seconds. **/
      Key?: LoadBalancerAttributeKey;
      /** The value of the attribute. **/
      Value?: LoadBalancerAttributeValue;
    }
    export interface LoadBalancerNotFoundException {
    }
    export interface LoadBalancerState {
      /** The state code. The initial state of the load balancer is provisioning. After
the load balancer is fully set up and ready to route traffic, its state is 
active. If the load balancer could not be set up, its state is failed. **/
      Code?: LoadBalancerStateEnum;
      /** A description of the state. **/
      Reason?: StateReason;
    }
    export interface Matcher {
      /** The HTTP codes. The default value is 200. You can specify multiple values (for
example, &quot;200,202&quot;) or a range of values (for example, &quot;200-299&quot;). **/
      HttpCode: HttpCode;
    }
    export interface ModifyListenerInput {
      /** The Amazon Resource Name (ARN) of the listener. **/
      ListenerArn: ListenerArn;
      /** The port for connections from clients to the load balancer. **/
      Port?: Port;
      /** The protocol for connections from clients to the load balancer. **/
      Protocol?: ProtocolEnum;
      /** The security policy that defines which ciphers and protocols are supported. **/
      SslPolicy?: SslPolicyName;
      /** The SSL server certificate. **/
      Certificates?: CertificateList;
      /** The default actions. **/
      DefaultActions?: Actions;
    }
    export interface ModifyListenerOutput {
      /** Information about the modified listeners. **/
      Listeners?: Listeners;
    }
    export interface ModifyLoadBalancerAttributesInput {
      /** The Amazon Resource Name (ARN) of the load balancer. **/
      LoadBalancerArn: LoadBalancerArn;
      /** The load balancer attributes. **/
      Attributes: LoadBalancerAttributes;
    }
    export interface ModifyLoadBalancerAttributesOutput {
      /** Information about the load balancer attributes. **/
      Attributes?: LoadBalancerAttributes;
    }
    export interface ModifyRuleInput {
      /** The Amazon Resource Name (ARN) of the rule. **/
      RuleArn: RuleArn;
      /** The conditions. **/
      Conditions?: RuleConditionList;
      /** The actions. **/
      Actions?: Actions;
    }
    export interface ModifyRuleOutput {
      /** Information about the rule. **/
      Rules?: Rules;
    }
    export interface ModifyTargetGroupAttributesInput {
      /** The Amazon Resource Name (ARN) of the target group. **/
      TargetGroupArn: TargetGroupArn;
      /** The attributes. **/
      Attributes: TargetGroupAttributes;
    }
    export interface ModifyTargetGroupAttributesOutput {
      /** Information about the attributes. **/
      Attributes?: TargetGroupAttributes;
    }
    export interface ModifyTargetGroupInput {
      /** The Amazon Resource Name (ARN) of the target group. **/
      TargetGroupArn: TargetGroupArn;
      /** The protocol to use to connect with the target. **/
      HealthCheckProtocol?: ProtocolEnum;
      /** The port to use to connect with the target. **/
      HealthCheckPort?: HealthCheckPort;
      /** The ping path that is the destination for the health check request. **/
      HealthCheckPath?: Path;
      /** The approximate amount of time, in seconds, between health checks of an
individual target. **/
      HealthCheckIntervalSeconds?: HealthCheckIntervalSeconds;
      /** The amount of time, in seconds, during which no response means a failed health
check. **/
      HealthCheckTimeoutSeconds?: HealthCheckTimeoutSeconds;
      /** The number of consecutive health checks successes required before considering an
unhealthy target healthy. **/
      HealthyThresholdCount?: HealthCheckThresholdCount;
      /** The number of consecutive health check failures required before considering the
target unhealthy. **/
      UnhealthyThresholdCount?: HealthCheckThresholdCount;
      /** The HTTP codes to use when checking for a successful response from a target. **/
      Matcher?: Matcher;
    }
    export interface ModifyTargetGroupOutput {
      /** Information about the target group. **/
      TargetGroups?: TargetGroups;
    }
    export interface OperationNotPermittedException {
    }
    export interface PriorityInUseException {
    }
    export interface RegisterTargetsInput {
      /** The Amazon Resource Name (ARN) of the target group. **/
      TargetGroupArn: TargetGroupArn;
      /** The targets. **/
      Targets: TargetDescriptions;
    }
    export interface RegisterTargetsOutput {
    }
    export interface RemoveTagsInput {
      /** The Amazon Resource Name (ARN) of the resource. **/
      ResourceArns: ResourceArns;
      /** The tag keys for the tags to remove. **/
      TagKeys: TagKeys;
    }
    export interface RemoveTagsOutput {
    }
    export interface ResourceInUseException {
    }
    export interface Rule {
      /** The Amazon Resource Name (ARN) of the rule. **/
      RuleArn?: RuleArn;
      /** The priority. **/
      Priority?: String;
      /** The conditions. **/
      Conditions?: RuleConditionList;
      /** The actions. **/
      Actions?: Actions;
      /** Indicates whether this is the default rule. **/
      IsDefault?: IsDefault;
    }
    export interface RuleCondition {
      /** The name of the field. The possible value is path-pattern. **/
      Field?: ConditionFieldName;
      /** The values for the field.

A path pattern is case sensitive, can be up to 255 characters in length, and can
contain any of the following characters:

&amp;#42;  A-Z, a-z, 0-9
 
 
*  _ - . $ / ~ &quot; &#x27; @ : +
 
 
*  &amp;amp; (using &amp;amp;amp;)
 
 
*  * (matches 0 or more characters)
 
 
*  ? (matches exactly 1 character) **/
      Values?: ListOfString;
    }
    export interface RuleNotFoundException {
    }
    export interface RulePriorityPair {
      /** The Amazon Resource Name (ARN) of the rule. **/
      RuleArn?: RuleArn;
      /** The rule priority. **/
      Priority?: RulePriority;
    }
    export interface SSLPolicyNotFoundException {
    }
    export interface SetRulePrioritiesInput {
      /** The rule priorities. **/
      RulePriorities: RulePriorityList;
    }
    export interface SetRulePrioritiesOutput {
      /** Information about the rules. **/
      Rules?: Rules;
    }
    export interface SetSecurityGroupsInput {
      /** The Amazon Resource Name (ARN) of the load balancer. **/
      LoadBalancerArn: LoadBalancerArn;
      /** The IDs of the security groups. **/
      SecurityGroups: SecurityGroups;
    }
    export interface SetSecurityGroupsOutput {
      /** The IDs of the security groups associated with the load balancer. **/
      SecurityGroupIds?: SecurityGroups;
    }
    export interface SetSubnetsInput {
      /** The Amazon Resource Name (ARN) of the load balancer. **/
      LoadBalancerArn: LoadBalancerArn;
      /** The IDs of the subnets. You must specify at least two subnets. You can add only
one subnet per Availability Zone. **/
      Subnets: Subnets;
    }
    export interface SetSubnetsOutput {
      /** Information about the subnet and Availability Zone. **/
      AvailabilityZones?: AvailabilityZones;
    }
    export interface SslPolicy {
      /** The protocols. **/
      SslProtocols?: SslProtocols;
      /** The ciphers. **/
      Ciphers?: Ciphers;
      /** The name of the policy. **/
      Name?: SslPolicyName;
    }
    export interface SubnetNotFoundException {
    }
    export interface Tag {
      /** The key of the tag. **/
      Key: TagKey;
      /** The value of the tag. **/
      Value?: TagValue;
    }
    export interface TagDescription {
      /** The Amazon Resource Name (ARN) of the resource. **/
      ResourceArn?: ResourceArn;
      /** Information about the tags. **/
      Tags?: TagList;
    }
    export interface TargetDescription {
      /** The ID of the target. **/
      Id: TargetId;
      /** The port on which the target is listening. **/
      Port?: Port;
    }
    export interface TargetGroup {
      /** The Amazon Resource Name (ARN) of the target group. **/
      TargetGroupArn?: TargetGroupArn;
      /** The name of the target group. **/
      TargetGroupName?: TargetGroupName;
      /** The protocol to use for routing traffic to the targets. **/
      Protocol?: ProtocolEnum;
      /** The port on which the targets are listening. **/
      Port?: Port;
      /** The ID of the VPC for the targets. **/
      VpcId?: VpcId;
      /** The protocol to use to connect with the target. **/
      HealthCheckProtocol?: ProtocolEnum;
      /** The port to use to connect with the target. **/
      HealthCheckPort?: HealthCheckPort;
      /** The approximate amount of time, in seconds, between health checks of an
individual target. **/
      HealthCheckIntervalSeconds?: HealthCheckIntervalSeconds;
      /** The amount of time, in seconds, during which no response means a failed health
check. **/
      HealthCheckTimeoutSeconds?: HealthCheckTimeoutSeconds;
      /** The number of consecutive health checks successes required before considering an
unhealthy target healthy. **/
      HealthyThresholdCount?: HealthCheckThresholdCount;
      /** The number of consecutive health check failures required before considering the
target unhealthy. **/
      UnhealthyThresholdCount?: HealthCheckThresholdCount;
      /** The destination for the health check request. **/
      HealthCheckPath?: Path;
      /** The HTTP codes to use when checking for a successful response from a target. **/
      Matcher?: Matcher;
      /** The Amazon Resource Names (ARN) of the load balancers that route traffic to this
target group. **/
      LoadBalancerArns?: LoadBalancerArns;
    }
    export interface TargetGroupAssociationLimitException {
    }
    export interface TargetGroupAttribute {
      /** The name of the attribute.

&amp;#42;   deregistration_delay.timeout_seconds - The amount time for Elastic Load
 Balancing to wait before changing the state of a deregistering target from 
 draining to unused. The range is 0-3600 seconds. The default value is 300
 seconds.
 
 
*   stickiness.enabled - Indicates whether sticky sessions are enabled.
 
 
*   stickiness.type - The type of sticky sessions. The possible value is 
 lb_cookie.
 
 
*   stickiness.lb_cookie.duration_seconds - The time period, in seconds, during
 which requests from a client should be routed to the same target. After this
 time period expires, the load balancer-generated cookie is considered stale.
 The range is 1 second to 1 week (604800 seconds). The default value is 1 day
 (86400 seconds). **/
      Key?: TargetGroupAttributeKey;
      /** The value of the attribute. **/
      Value?: TargetGroupAttributeValue;
    }
    export interface TargetGroupNotFoundException {
    }
    export interface TargetHealth {
      /** The state of the target. **/
      State?: TargetHealthStateEnum;
      /** The reason code. If the target state is healthy, a reason code is not provided.

If the target state is initial, the reason code can be one of the following
values:

&amp;#42;   Elb.RegistrationInProgress - The target is in the process of being
 registered with the load balancer.
 
 
*   Elb.InitialHealthChecking - The load balancer is still sending the target
 the minimum number of health checks required to determine its health status.
 
 

If the target state is unhealthy, the reason code can be one of the following
values:

*   Target.ResponseCodeMismatch - The health checks did not return an expected
 HTTP code.
 
 
*   Target.Timeout - The health check requests timed out.
 
 
*   Target.FailedHealthChecks - The health checks failed because the connection
 to the target timed out, the target response was malformed, or the target
 failed the health check for an unknown reason.
 
 
*   Elb.InternalError - The health checks failed due to an internal error.
 
 

If the target state is unused, the reason code can be one of the following
values:

*   Target.NotRegistered - The target is not registered with the target group.
 
 
*   Target.NotInUse - The target group is not used by any load balancer or the
 target is in an Availability Zone that is not enabled for its load balancer.
 
 
*   Target.InvalidState - The target is in the stopped or terminated state.
 
 

If the target state is draining, the reason code can be the following value:

*   Target.DeregistrationInProgress - The target is in the process of being
 deregistered and the deregistration delay period has not expired. **/
      Reason?: TargetHealthReasonEnum;
      /** A description of the target health that provides additional details. If the
state is healthy, a description is not provided. **/
      Description?: Description;
    }
    export interface TargetHealthDescription {
      /** The description of the target. **/
      Target?: TargetDescription;
      /** The port to use to connect with the target. **/
      HealthCheckPort?: HealthCheckPort;
      /** The health information for the target. **/
      TargetHealth?: TargetHealth;
    }
    export interface TooManyCertificatesException {
    }
    export interface TooManyListenersException {
    }
    export interface TooManyLoadBalancersException {
    }
    export interface TooManyRegistrationsForTargetIdException {
    }
    export interface TooManyRulesException {
    }
    export interface TooManyTagsException {
    }
    export interface TooManyTargetGroupsException {
    }
    export interface TooManyTargetsException {
    }
    export interface UnsupportedProtocolException {
    }
  }
}
